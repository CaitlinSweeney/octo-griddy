export interface Environment {
  production: boolean;
  apiUrl: string;
  unsplashAccessKey: string;
  rapidApiKey: string;
  newsApiKey: string;
  ninjasApiKey: string;
}

export const environment: Environment;
