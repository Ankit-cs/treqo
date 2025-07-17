import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
//mutaton is for manipulate the deta and query for searching the data
export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    // Check if we've already stored this user before.
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (user !== null) {
      // If we've seen this identity before but the name has changed, patch the value.
      const userName = identity.name || identity.firstName || identity.email?.split('@')[0] || "Anonymous";

      if (user.name !== userName) {
        await ctx.db.patch(user._id, { name: userName });
      }
      if (user.imageUrl !== identity.pictureUrl) {
        await ctx.db.patch(user._id, { imageUrl: identity.pictureUrl });
      }
      return user._id;
    }

    // If it's a new identity, create a new `User`.
    const userName = identity.name || identity.firstName || identity.email?.split('@')[0] || "Anonymous";

    return await ctx.db.insert("users", {
      name: userName,
      tokenIdentifier: identity.tokenIdentifier,
      email: identity.email || "",
      imageUrl: identity.pictureUrl,
    });
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
});

export const searchUsers = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    // If query is empty or too short, return empty array
    if (!args.query || args.query.length < 2) {
      return [];
    }

    // Get current user to exclude from results
    const currentUser = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .first();

    // Search by name
    const usersByName = await ctx.db
      .query("users")
      .withSearchIndex("search_name", (q) => q.search("name", args.query))
      .collect();

    // Search by email
    const usersByEmail = await ctx.db
      .query("users")
      .withSearchIndex("search_email", (q) => q.search("email", args.query))
      .collect();

    // Combine results and remove duplicates
    const combinedUsers = [...usersByName, ...usersByEmail];
    const uniqueUsers = [];
    const seenIds = new Set();

    for (const user of combinedUsers) {
      if (!seenIds.has(user._id.toString()) && user._id.toString() !== currentUser._id.toString()) {
        seenIds.add(user._id.toString());
        uniqueUsers.push({
          id: user._id,
          name: user.name,
          email: user.email,
          imageUrl: user.imageUrl,
        });
      }
    }

    return uniqueUsers;
  },
});
