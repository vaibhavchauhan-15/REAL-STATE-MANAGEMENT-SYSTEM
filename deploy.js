import { exec } from 'child_process';
import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables
config();

console.log('Starting deployment process...');

// 1. Build the client
console.log('Building client...');
exec('cd client && npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error building client: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Client build stderr: ${stderr}`);
  }
  console.log(`Client build stdout: ${stdout}`);
  console.log('Client build completed successfully.');

  // 2. Update environment for production
  console.log('Updating environment for production...');
  const envPath = path.resolve('./api/.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const updatedEnvContent = envContent
    .replace(/NODE_ENV=development/g, 'NODE_ENV=production');
  
  fs.writeFileSync(envPath, updatedEnvContent);
  console.log('Environment updated for production.');

  // 3. Start the server
  console.log('Starting the server...');
  exec('cd api && npm start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Server stderr: ${stderr}`);
    }
    console.log(`Server stdout: ${stdout}`);
  });
}); 