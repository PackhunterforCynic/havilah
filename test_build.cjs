const { exec } = require('child_process');

exec('npm run build', { cwd: 'd:/Robinson/PROJECTS/Lovable' }, (error, stdout, stderr) => {
  const fs = require('fs');
  fs.writeFileSync('build_output.txt', stdout + '\n\n' + stderr);
});
