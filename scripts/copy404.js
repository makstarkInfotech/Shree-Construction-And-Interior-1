const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexFile = path.join(buildDir, 'index.html');
const errorFile = path.join(buildDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('build/index.html not found. Run the build first.');
  process.exit(1);
}

try {
  fs.copyFileSync(indexFile, errorFile);
  console.log('Copied index.html to 404.html');
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
