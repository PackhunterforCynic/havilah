const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'src', 'assets', 'project1', 'video.mp4');
const destDir = path.join(__dirname, 'public');
const dest = path.join(destDir, 'video.mp4');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(source)) {
    // Copy instead of rename to prevent breaking user's expectations immediately, or just rename.
    // Let's rename to cleanly move it.
    fs.renameSync(source, dest);
    console.log('✅ Successfully moved video.mp4 to the public folder!');
  } else {
    console.log('⚠️ Could not find the source video at ' + source);
  }
} catch (e) {
  console.error('❌ Error moving video:', e.message);
}
