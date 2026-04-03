import { IAutomationStrategy } from "./IAutomationStrategy";

export class SyncDatabaseStrategy implements IAutomationStrategy {
  id = "sync-db";
  name = "Sync Database";
  description = "Synchronizes the local cache with the primary database cluster.";

  async execute(): Promise<void> {
    console.log(`[Automation] Triggered: hitting fake link https://api.fake-database.io/sync...`);
    return new Promise((resolve) => setTimeout(resolve, 800));
  }
}

export class GenerateReportStrategy implements IAutomationStrategy {
  id = "gen-report";
  name = "Generate Audit Report";
  description = "Compiles a comprehensive audit report of system activities.";

  async execute(): Promise<void> {
    console.log(`[Automation] Triggered: hitting fake link https://api.fake-reports.io/generate...`);
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
}

export class CleanLogsStrategy implements IAutomationStrategy {
  id = "clean-logs";
  name = "Purge Old Logs";
  description = "Deletes system logs older than 30 days to free up space.";

  async execute(): Promise<void> {
    console.log(`[Automation] Triggered: hitting fake link https://api.fake-logs.io/purge...`);
    return new Promise((resolve) => setTimeout(resolve, 600));
  }
}

export class RunTestsStrategy implements IAutomationStrategy {
  id = "run-tests";
  name = "Trigger Integration Tests";
  description = "Initiates the e2e automation integration test suite.";

  async execute(): Promise<void> {
    console.log(`[Automation] Triggered: hitting fake link https://api.fake-ci.io/e2e/start...`);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

export class NotifyTeamStrategy implements IAutomationStrategy {
  id = "notify-team";
  name = "Notify DevOps Team";
  description = "Sends an emergency broadcast to the on-call DevOps engineers.";

  async execute(): Promise<void> {
    console.log(`[Automation] Triggered: hitting fake link https://api.fake-pager.io/broadcast...`);
    return new Promise((resolve) => setTimeout(resolve, 500));
  }
}

export const defaultAutomations: IAutomationStrategy[] = [
  new SyncDatabaseStrategy(),
  new GenerateReportStrategy(),
  new CleanLogsStrategy(),
  new RunTestsStrategy(),
  new NotifyTeamStrategy(),
];
