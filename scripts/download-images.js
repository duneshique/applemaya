#!/usr/bin/env node
/**
 * Image Downloader & WebP Converter
 * Downloads external images and converts them to WebP format
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if cwebp is available
function checkWebpSupport() {
  try {
    execSync('which cwebp', { stdio: 'pipe' });
    return true;
  } catch {
    console.log('⚠️  cwebp not found. Will save as original format.');
    console.log('   Install with: brew install webp');
    return false;
  }
}

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(filepath);
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filepath);
        });
      }
    }).on('error', reject);
  });
}

// Convert to WebP using cwebp
function convertToWebp(inputPath, outputPath) {
  try {
    execSync(`cwebp -q 85 "${inputPath}" -o "${outputPath}"`, { stdio: 'pipe' });
    fs.unlinkSync(inputPath); // Remove original
    return true;
  } catch (e) {
    console.log(`   Failed to convert: ${path.basename(inputPath)}`);
    return false;
  }
}

// Flora magazine covers from FlowersArchive.jsx
const floraImages = [
  { year: '2026', month: '02', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000586441.jpg' },
  { year: '2026', month: '01', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000580166.jpg' },
  { year: '2025', month: '12', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000573038.jpg' },
  { year: '2025', month: '11', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000566535.jpg' },
  { year: '2025', month: '10', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000559537.jpg' },
  { year: '2025', month: '09', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000553856.jpg' },
  { year: '2025', month: '08', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000547244.jpg' },
  { year: '2025', month: '07', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000541273.jpg' },
  { year: '2025', month: '06', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000534961.jpg' },
  { year: '2025', month: '05', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000528328.jpg' },
  { year: '2025', month: '04', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000521800.jpg' },
  { year: '2025', month: '03', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000515281.jpg' },
  { year: '2025', month: '02', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000508009.jpg' },
  { year: '2025', month: '01', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000503103.jpg' },
  { year: '2024', month: '12', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000496122.jpg' },
  { year: '2024', month: '11', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000490045.jpg' },
  { year: '2024', month: '10', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000483511.jpg' },
  { year: '2024', month: '09', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000476575.jpg' },
  { year: '2024', month: '08', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000470559.jpg' },
  { year: '2024', month: '07', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000465005.jpg' },
  { year: '2024', month: '06', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000457765.jpg' },
  { year: '2024', month: '05', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000452463.jpg' },
  { year: '2024', month: '04', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000445892.jpg' },
  { year: '2024', month: '03', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000439785.jpg' },
  { year: '2024', month: '02', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000433837.jpg' },
  { year: '2024', month: '01', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000428369.jpg' },
  { year: '2023', month: '12', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000421858.jpg' },
  { year: '2023', month: '11', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000415727.jpg' },
  { year: '2023', month: '10', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000410616.jpg' },
  { year: '2023', month: '09', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000402864.jpg' },
  { year: '2023', month: '08', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000397146.jpg' },
  { year: '2023', month: '07', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000390840.jpg' },
  { year: '2023', month: '06', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000384313.jpg' },
  { year: '2023', month: '05', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000378466.jpg' },
  { year: '2023', month: '04', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000371399.jpg' },
  { year: '2023', month: '03', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000365701.jpg' },
  { year: '2023', month: '02', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000358734.jpg' },
  { year: '2023', month: '01', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000352640.jpg' },
  { year: '2022', month: '12', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000345390.jpg' },
  { year: '2022', month: '11', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000339726.jpg' },
  { year: '2022', month: '10', url: 'https://contents.kyobobook.co.kr/pdt/480D221056860.jpg' },
  { year: '2022', month: '09', url: 'https://contents.kyobobook.co.kr/pdt/480D221056780.jpg' },
  { year: '2022', month: '08', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000285214.jpg' },
  { year: '2022', month: '07', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000284088.jpg' },
  { year: '2022', month: '06', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000283081.jpg' },
  { year: '2022', month: '05', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000282046.jpg' },
  { year: '2022', month: '04', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000281827.jpg' },
  { year: '2022', month: '03', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000292236.jpg' },
];

// Gallery images from FlowersSection.jsx
const galleryImages = [
  { name: 'gallery_1', url: 'https://images.unsplash.com/photo-1591966801718-48eb8ba0f8f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NjgwMjg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'gallery_2', url: 'https://images.unsplash.com/photo-1607753975586-abbc68e237a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjgwMjg0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'gallery_3', url: 'https://images.unsplash.com/photo-1727527248663-5b0c475061b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY4MDI4NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
];

const profileImage = {
  name: 'hyejeong_moon',
  url: 'https://image.yes24.com/momo/TopCate5502/MidCate007/550165343.jpg'
};

const bookImages = [
  { name: 'tarot_cafe', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791168614482.jpg' },
  { name: 'flower_workbook', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190717786.jpg' },
  { name: 'flower_moment', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791197419812.jpg' },
  { name: 'eco_flower', url: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791197419836.jpg' }
];

async function main() {
  const hasWebp = checkWebpSupport();
  const ext = hasWebp ? 'webp' : 'jpg';
  
  console.log('\n📥 Downloading Flora magazine covers...');
  for (const img of floraImages) {
    const filename = `flora_${img.year}_${img.month}`;
    const tempPath = `public/images/flora/${filename}.jpg`;
    const finalPath = `public/images/flora/${filename}.${ext}`;
    
    if (fs.existsSync(finalPath)) {
      console.log(`   ✓ ${filename} already exists`);
      continue;
    }
    
    try {
      await downloadImage(img.url, tempPath);
      if (hasWebp) {
        convertToWebp(tempPath, finalPath);
      }
      console.log(`   ✓ ${filename}`);
    } catch (e) {
      console.log(`   ✗ ${filename}: ${e.message}`);
    }
  }
  
  console.log('\n📥 Downloading gallery images...');
  for (const img of galleryImages) {
    const tempPath = `public/images/gallery/${img.name}.jpg`;
    const finalPath = `public/images/gallery/${img.name}.${ext}`;
    
    if (fs.existsSync(finalPath)) {
      console.log(`   ✓ ${img.name} already exists`);
      continue;
    }
    
    try {
      await downloadImage(img.url, tempPath);
      if (hasWebp) {
        convertToWebp(tempPath, finalPath);
      }
      console.log(`   ✓ ${img.name}`);
    } catch (e) {
      console.log(`   ✗ ${img.name}: ${e.message}`);
    }
  }
  
  console.log('\n📥 Downloading profile image...');
  const tempProfilePath = `public/images/profile/${profileImage.name}.jpg`;
  const finalProfilePath = `public/images/profile/${profileImage.name}.${ext}`;
  
  if (!fs.existsSync(finalProfilePath)) {
    try {
      await downloadImage(profileImage.url, tempProfilePath);
      if (hasWebp) {
        convertToWebp(tempProfilePath, finalProfilePath);
      }
      console.log(`   ✓ ${profileImage.name}`);
    } catch (e) {
      console.log(`   ✗ ${profileImage.name}: ${e.message}`);
    }
  } else {
    console.log(`   ✓ ${profileImage.name} already exists`);
  }

  console.log('\n📥 Downloading book covers...');
  for (const img of bookImages) {
    const tempPath = `public/images/books/${img.name}.jpg`;
    const finalPath = `public/images/books/${img.name}.${ext}`;
    
    if (fs.existsSync(finalPath)) {
      console.log(`   ✓ ${img.name} already exists`);
      continue;
    }
    
    try {
      await downloadImage(img.url, tempPath);
      if (hasWebp) {
        convertToWebp(tempPath, finalPath);
      }
      console.log(`   ✓ ${img.name}`);
    } catch (e) {
      console.log(`   ✗ ${img.name}: ${e.message}`);
    }
  }
  
  console.log('\n✅ Download complete!\n');
}

main();
