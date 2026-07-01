const { execSync } = require('child_process');
try {
  const status = execSync('git status', { cwd: 'd:/Robinson/PROJECTS/Lovable' }).toString();
  console.log('STATUS:', status);
} catch (e) {
  console.error('ERROR:', e.message, e.stdout?.toString());
}
