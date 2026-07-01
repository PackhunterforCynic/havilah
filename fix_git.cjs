const { execSync } = require('child_process');

console.log('Starting git fix process...');

try {
  // 1. Reset all local commits to match what's on the server, but KEEP all local files exactly as they are.
  console.log('Resetting local git history to match origin...');
  execSync('git reset --soft origin/main');
  
  // 2. Remove the heavy files from git's memory so they aren't uploaded.
  console.log('Removing heavy build files and videos from git tracking...');
  try { execSync('git rm -r --cached .vercel', { stdio: 'ignore' }); } catch(e) {}
  try { execSync('git rm -r --cached dist', { stdio: 'ignore' }); } catch(e) {}
  try { execSync('git rm --cached src/assets/project1/*.mp4', { stdio: 'ignore' }); } catch(e) {}
  try { execSync('git rm --cached src/assets/project1/*.mov', { stdio: 'ignore' }); } catch(e) {}
  
  // 3. Add all the new work (excluding the things we just ignored in .gitignore)
  console.log('Staging latest web pages...');
  execSync('git add .');
  
  // 4. Create a single clean commit with all your newest UI changes.
  console.log('Committing latest UI updates...');
  execSync('git commit -m "Update website with latest UI changes, excluding large videos"');
  
  // 5. Push!
  console.log('Pushing to GitHub...');
  execSync('git push');
  
  console.log('✅ SUCCESS! The latest web pages are now updated in git.');
} catch (error) {
  console.error('❌ ERROR:', error.message);
  if (error.stdout) console.log(error.stdout.toString());
  if (error.stderr) console.error(error.stderr.toString());
}
