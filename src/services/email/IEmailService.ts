export interface IEmailService {
  sendFeatureRequest(title: string, description: string): Promise<boolean>;
}
