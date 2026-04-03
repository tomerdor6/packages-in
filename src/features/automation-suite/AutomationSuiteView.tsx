import { useState } from "react";
import { useAutomations } from "@/services/automation/AutomationContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Play } from "lucide-react";

export function AutomationSuiteView() {
  const { automations, executeAutomation } = useAutomations();
  const [running, setRunning] = useState<string | null>(null);

  const handleExecute = async (id: string) => {
    setRunning(id);
    try {
      await executeAutomation(id);
    } catch (e) {
      console.error(e);
    } finally {
      setRunning(null);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-4 md:p-6 bg-background">
      <div className="mb-4 shrink-0">
        <h1 className="text-2xl font-bold tracking-tight">Automation Suite</h1>
        <p className="text-muted-foreground text-sm">
          Execute isolated strategy workflows. Dependencies are resolved through Context injection.
        </p>
      </div>

      <div className="flex-1 min-h-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 h-full">
          {automations.map((strategy) => (
            <Card key={strategy.id} className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <CardHeader className="p-4 shrink-0">
                <CardTitle className="text-lg leading-tight">{strategy.name}</CardTitle>
                <CardDescription className="text-xs mt-1 line-clamp-3">{strategy.description}</CardDescription>
              </CardHeader>
              <div className="flex-1" />
              <CardFooter className="p-4 pt-0 shrink-0">
                <Button 
                  size="sm"
                  onClick={() => handleExecute(strategy.id)} 
                  disabled={running === strategy.id}
                  className="w-full text-xs h-8"
                >
                  {running === strategy.id ? (
                    <div className="flex items-center gap-1">
                      <div className="size-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Executing
                    </div>
                  ) : (
                    <>
                      <Play className="size-3 mr-1.5" />
                      Trigger
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
