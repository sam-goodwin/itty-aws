import { build } from "esbuild";
import { readFileSync, statSync, writeFileSync } from "fs";

// Bundle configurations
const configs = [
  {
    name: "minified",
    minify: true,
    outfile: "dist/bundle.min.js",
    external: ["@aws-sdk/*"], // Don't bundle AWS SDK dependencies
  },
  {
    name: "unminified", 
    minify: false,
    outfile: "dist/bundle.js",
    external: ["@aws-sdk/*"], // Don't bundle AWS SDK dependencies
  },
  {
    name: "core-minified",
    minify: true,
    outfile: "dist/bundle.core.min.js",
    external: ["@aws-sdk/*", "effect"], // Exclude both AWS SDK and Effect
  }
];

async function bundleAndMeasure() {
  console.log("🔨 Building bundles...");
  
  const results: Array<{ name: string; size: number; sizeKB: string }> = [];
  
  for (const config of configs) {
    try {
      await build({
        entryPoints: ["src/index.ts"],
        bundle: true,
        minify: config.minify,
        format: "esm",
        target: "es2020",
        outfile: config.outfile,
        external: config.external,
        platform: "neutral",
        treeShaking: true,
      });
      
      const stats = statSync(config.outfile);
      const sizeKB = (stats.size / 1024).toFixed(1);
      
      results.push({
        name: config.name,
        size: stats.size,
        sizeKB: `${sizeKB} KB`
      });
      
      console.log(`✅ ${config.name}: ${sizeKB} KB (${stats.size} bytes)`);
    } catch (error) {
      console.error(`❌ Failed to build ${config.name}:`, error);
    }
  }
  
  // Update README with new bundle sizes
  updateReadme(results);
  
  return results;
}

function updateReadme(results: Array<{ name: string; size: number; sizeKB: string }>) {
  console.log("📝 Updating README.md...");
  
  const readmePath = "README.md";
  let readme = readFileSync(readmePath, "utf-8");
  
  const minified = results.find(r => r.name === "minified");
  const unminified = results.find(r => r.name === "unminified");
  const coreMinified = results.find(r => r.name === "core-minified");
  
  if (!minified || !unminified || !coreMinified) {
    console.error("❌ Could not find bundle results");
    return;
  }
  
  // Find and replace the bundle size section
  const bundleSizeRegex = /## Status\n\nThe entire AWS SDK \(including all Services and APIs\) fits in to a\n\n- Minified bundle size of: `.*?`\.\n- Un-minified bundle size of: `.*?`\./;
  
  const newBundleSection = `## Status

The entire AWS SDK (including all Services and APIs) fits in to a

- Minified bundle size of: \`${minified.sizeKB}\`.
- Un-minified bundle size of: \`${unminified.sizeKB}\`.
- Core bundle size (excluding Effect.js): \`${coreMinified.sizeKB}\`.`;
  
  if (bundleSizeRegex.test(readme)) {
    readme = readme.replace(bundleSizeRegex, newBundleSection);
    console.log(`✅ Updated bundle sizes: ${minified.sizeKB} (minified), ${unminified.sizeKB} (unminified), ${coreMinified.sizeKB} (core)`);
  } else {
    console.warn("⚠️  Could not find bundle size section in README.md");
    console.log("Current bundle sizes:");
    console.log(`- Minified: ${minified.sizeKB}`);
    console.log(`- Unminified: ${unminified.sizeKB}`);
    console.log(`- Core (no Effect): ${coreMinified.sizeKB}`);
  }
  
  writeFileSync(readmePath, readme, "utf-8");
}

// Run the bundling
bundleAndMeasure().catch(console.error); 