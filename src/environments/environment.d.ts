export interface Environment {
  production: boolean;
  apiUrl: string;
  unsplashAccessKey: string;
  rapidApiKey: string;
  newsApiKey: string;
}

export const environment: Environment;
