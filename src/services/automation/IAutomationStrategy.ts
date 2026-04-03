export interface IAutomationStrategy {
  id: string;
  name: string;
  description: string;
  execute(): Promise<void>;
}
