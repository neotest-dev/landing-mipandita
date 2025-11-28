import fs from 'fs';
import path from 'path';

const productsDir = path.join('public', 'products');
const manifestPath = path.join('src', 'products-manifest.json'); // Corrected path
const manifest = {};

try {
  console.log('🔍 Generating product manifest...');
  
  // Get category directories (e.g., 'tecnologia', 'hogar')
  const categories = fs.readdirSync(productsDir).filter(file => {
    const fullPath = path.join(productsDir, file);
    // Ensure it's a directory and not a file like 'tech.jpg'
    return fs.statSync(fullPath).isDirectory();
  });

  // Process each category
  for (const category of categories) {
    const categoryDir = path.join(productsDir, category);
    const imageFiles = fs.readdirSync(categoryDir).filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    // Map to public URLs
    manifest[category] = imageFiles.map(file =>
      path.join('/', 'products', category, file).replace(/\\/g, '/') // Use forward slashes for URLs
    );
  }

  // Write the manifest file
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Product manifest generated successfully at ${manifestPath}.`);

} catch (error) {
  console.error('❌ Error generating product manifest:', error);
  // Create an empty manifest on error to prevent build failures
  if (!fs.existsSync(manifestPath)) {
    fs.writeFileSync(manifestPath, JSON.stringify({}, null, 2));
    console.log(`⚠️ Created an empty product manifest at ${manifestPath} to prevent build failure.`);
  }
}
