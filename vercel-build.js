import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log the start of the build process
console.log('🚀 Starting Vercel build process...');

try {
  // Install client dependencies
  console.log('📦 Installing client dependencies...');
  execSync('cd client && npm install', { stdio: 'inherit' });

  // Build client
  console.log('🏗️ Building client...');
  execSync('cd client && npm run build', { stdio: 'inherit' });

  // Ensure client/dist exists
  const distPath = path.join(__dirname, 'client', 'dist');
  if (!fs.existsSync(distPath)) {
    console.error('❌ Build failed: client/dist directory not found');
    process.exit(1);
  }

  // Create a _redirects file for SPA routing
  fs.writeFileSync(
    path.join(distPath, '_redirects'),
    '/* /index.html 200'
  );

  console.log('✅ Build completed successfully');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 