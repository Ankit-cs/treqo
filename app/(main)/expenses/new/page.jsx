"use client";

import { useRouter } from "next/navigation";
import { ExpenseForm } from "./components/expense-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewExpensePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container max-w-3xl mx-auto pt-20 py-6">
        <Button
          variant="outline"
          size="sm"
          className="mb-4"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back 
        </Button>

        <div className="mb-6">
          <h1 className="text-5xl font-bold">Add a new expense</h1>
          <p className="text-muted-foreground mt-1">
            Record a new expense to split with others
          </p>
        </div>

        <Card 
        className={"bg-stone-100"}>
          <CardContent>
            <Tabs className="pb-3" defaultValue="individual">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual">Individual Expense</TabsTrigger>
                <TabsTrigger value="group">Group Expense</TabsTrigger>
              </TabsList>
              <TabsContent value="individual" className="mt-0">
                <ExpenseForm
                  type="individual"
                  onSuccess={(id) => router.push(`/person/${id}`)}
                />
              </TabsContent>
              <TabsContent value="group" className="mt-0">
                <ExpenseForm
                  type="group"
                  onSuccess={(id) => router.push(`/groups/${id}`)}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
