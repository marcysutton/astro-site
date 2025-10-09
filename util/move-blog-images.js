// scripts/move-blog-images.js

import fs from 'fs/promises';
import path from 'path';

const BLOG_SRC = 'src/content';
const BLOG_DEST = 'public';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

// Set to false if you want to move (not copy) files
const COPY_ONLY = true;

async function moveBlogImages(srcDir = BLOG_SRC, destDir = BLOG_DEST) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await moveBlogImages(srcPath, destPath);
    } else if (
      IMAGE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())
    ) {
      // Ensure destination directory exists
      await fs.mkdir(path.dirname(destPath), { recursive: true });

      if (COPY_ONLY) {
        await fs.copyFile(srcPath, destPath);
        console.log(`Copied: ${srcPath} -> ${destPath}`);
      } else {
        await fs.rename(srcPath, destPath);
        console.log(`Moved: ${srcPath} -> ${destPath}`);
      }
    }
  }
}

moveBlogImages()
  .then(() => {
    console.log('✅ Blog images moved to public/blog/');
  })
  .catch((err) => {
    console.error('❌ Error moving blog images:', err);
    process.exit(1);
  });
