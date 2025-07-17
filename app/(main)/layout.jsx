"use client";
import { Authenticated } from 'convex/react';
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <Authenticated>
      <div className="min-h-screen bg-background">
        <div className="w-full">
          {children}
        </div>
      </div>
    </Authenticated>
  )
}

export default MainLayout
