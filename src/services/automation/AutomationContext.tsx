import React, { createContext, useContext, ReactNode } from "react";
import { IAutomationStrategy } from "./IAutomationStrategy";
import { defaultAutomations } from "./Triggers";

interface AutomationContextType {
  automations: IAutomationStrategy[];
  executeAutomation: (id: string) => Promise<void>;
}

const AutomationContext = createContext<AutomationContextType | undefined>(undefined);

export function AutomationProvider({ children }: { children: ReactNode }) {
  const executeAutomation = async (id: string) => {
    const strategy = defaultAutomations.find((a) => a.id === id);
    if (strategy) {
      await strategy.execute();
    } else {
      throw new Error(`Automation strategy with id ${id} not found.`);
    }
  };

  return (
    <AutomationContext.Provider value={{ automations: defaultAutomations, executeAutomation }}>
      {children}
    </AutomationContext.Provider>
  );
}

export function useAutomations() {
  const context = useContext(AutomationContext);
  if (context === undefined) {
    throw new Error("useAutomations must be used within an AutomationProvider");
  }
  return context;
}
