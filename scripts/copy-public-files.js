const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const publicDir = path.resolve(__dirname, '..', 'public');

// Files to copy from public to build
const filesToCopy = [
  'privacy-policy.html',
  'terms-of-service.html',
  'privacy-policy.pdf',
  'terms-of-service.pdf',
  'letterhead-1.png',
];

filesToCopy.forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(buildDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file} to build/`);
  } else {
    console.log(`⚠ Skipped ${file} (not found)`);
  }
});

console.log('✓ All public files copied to build/');
