import { IEmailService } from "./IEmailService";

export class EmailService implements IEmailService {
  async sendFeatureRequest(title: string, description: string): Promise<boolean> {
    console.log("Mock Email Sent:", { title, description });
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }
}

export const emailServiceInstance = new EmailService();
