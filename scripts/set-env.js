const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config();
const envConfig = `
  export const environment = {
    production: false,
    apiUrl: '',
    unsplashAccessKey: '${process.env['UNSPLASH_ACCESS_KEY'] || ''}',
    rapidApiKey: '${process.env['RAPID_API_KEY'] || ''}',
    newsApiKey: '${process.env['NEWS_API_KEY'] || ''}',
  };
`;
fs.writeFileSync('./src/environments/environment.development.ts', envConfig);

console.log('✅ Environment variables have been set.');
