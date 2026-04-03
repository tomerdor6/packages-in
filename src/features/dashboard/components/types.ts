export type RequestStatus = "Completed" | "In Progress" | "Failed" | "Pending";

export interface RequestStep {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

export interface ProjectRequest {
  id: string;
  user: string;
  inputSummary: string;
  status: RequestStatus;
  steps: RequestStep[];
}

export type PackageType = "Python" | "Java" | "Node.js" | "Git" | "Generic" | "";
export type Framework = string;
export type Environment = "Development" | "Staging" | "Production" | "";

export interface FormInterface {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  createInputSummary: () => string;
}
