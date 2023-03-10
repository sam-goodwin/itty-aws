mkdir .bundle

npx esbuild ./src/index.ts --platform=node --bundle --outfile=.bundle/index.js --metafile=.bundle/meta.json --external:@aws-sdk/* --minify

npx esbuild-visualizer --metadata .bundle/meta.json --open
