import { FileSystem } from "@effect/platform";
import { NodeFileSystem, NodeHttpClient } from "@effect/platform-node";
import { Console, Effect, pipe } from "effect";
import { fetchSdkManifest } from "./manifest.ts";
import { extractServiceName, fetchAwsSdkClientPackages } from "./npm.ts";

// Function to fetch and save a single manifest
const fetchAndSaveManifest = (serviceName: string) =>
  pipe(
    Console.log(`🔄 Fetching manifest for ${serviceName}...`),
    Effect.flatMap(() => fetchSdkManifest(serviceName)),
    Effect.flatMap((manifest) =>
      pipe(
        FileSystem.FileSystem,
        Effect.flatMap((fs) => {
          const manifestJson = JSON.stringify(manifest, null, 2);
          const filePath = `manifests/${serviceName}.json`;
          return fs.writeFileString(filePath, manifestJson);
        }),
        Effect.flatMap(() =>
          Console.log(`✅ Saved manifest for ${serviceName}`),
        ),
        Effect.as({ serviceName, success: true as const, error: null }),
      ),
    ),
    Effect.catchAll((error) =>
      pipe(
        Console.log(`❌ Failed to fetch manifest for ${serviceName}: ${error}`),
        Effect.as({
          serviceName,
          success: false as const,
          error: String(error),
        }),
      ),
    ),
  );

// Function to process all manifests with high concurrency
const processAllManifests = (serviceNames: string[]) =>
  Effect.gen(function* () {
    yield* Console.log(
      `\n🚀 Processing ${serviceNames.length} service manifests with concurrency...`,
    );

    // Process all manifests concurrently with a reasonable concurrency limit
    // This will download up to 20 manifests simultaneously
    const results = yield* Effect.all(
      serviceNames.map((serviceName) => fetchAndSaveManifest(serviceName)),
      { concurrency: 20 },
    );

    return results;
  });

// Function to display summary
const displaySummary = (
  results: Array<{
    serviceName: string;
    success: boolean;
    error: string | null;
  }>,
) =>
  Effect.gen(function* () {
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    yield* Console.log("\n📊 Summary:");
    yield* Console.log(
      `✅ Successfully fetched: ${successful.length} manifests`,
    );
    yield* Console.log(`❌ Failed: ${failed.length} manifests`);

    if (failed.length > 0) {
      yield* Console.log("\n💥 Failed services:");
      for (const failure of failed) {
        yield* Console.log(`   • ${failure.serviceName}: ${failure.error}`);
      }
    }
  });

// Main program
const program = Effect.gen(function* () {
  yield* Console.log("🚀 Starting AWS Service Manifest Fetcher...");

  // Fetch all AWS SDK client packages
  const packages = yield* fetchAwsSdkClientPackages;

  // Extract service names
  const serviceNames = packages.map((pkg) => extractServiceName(pkg.name));
  yield* Console.log(`🔧 Extracted ${serviceNames.length} service names`);

  // Create manifests directory using Effect's FileSystem
  const fs = yield* FileSystem.FileSystem;
  yield* fs.makeDirectory("manifests", { recursive: true });
  yield* Console.log("📁 Created manifests directory");

  // Process all manifests with high concurrency
  const results = yield* processAllManifests(serviceNames);

  // Display summary
  yield* displaySummary(results);

  yield* Console.log("\n✨ Done!");

  return results;
});

// Provide dependencies and run the program
const runnable = program.pipe(
  Effect.provide(NodeHttpClient.layer),
  Effect.provide(NodeFileSystem.layer),
);

// Export the main function for use
export const fetchManifests = () => Effect.runPromise(runnable);

// Run the program
Effect.runPromise(runnable).then(
  (results) => {
    const successful = results.filter((r) => r.success).length;
    console.log(
      `✅ Successfully fetched ${successful}/${results.length} manifests`,
    );
  },
  (error) => console.error("❌ Error:", error),
);
