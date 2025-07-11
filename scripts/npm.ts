import { Console, Effect } from "effect";

// Type definitions for npm registry response
export interface NpmPackage {
  name: string;
  version: string;
  description?: string;
  date: string;
  links: {
    npm: string;
    homepage?: string;
    repository?: string;
    bugs?: string;
  };
  publisher: {
    username: string;
    email: string;
  };
  maintainers: Array<{
    username: string;
    email: string;
  }>;
}

export interface NpmSearchResponse {
  objects: Array<{
    package: NpmPackage;
    score: {
      final: number;
      detail: {
        quality: number;
        popularity: number;
        maintenance: number;
      };
    };
    searchScore: number;
  }>;
  total: number;
  time: string;
}

// Function to fetch AWS SDK client packages from npm using Bun's fetch
export const fetchAwsSdkClientPackages = Effect.gen(function* () {
  yield* Console.log(
    "🔍 Searching for @aws-sdk/client-* packages using Bun...",
  );

  const url =
    "https://registry.npmjs.org/-/v1/search?text=@aws-sdk/client-&size=250";
  const response = yield* Effect.promise(() => fetch(url));

  if (!response.ok) {
    yield* Effect.fail(new Error(`HTTP error! status: ${response.status}`));
  }

  const searchResults = (yield* Effect.promise(() =>
    response.json(),
  )) as NpmSearchResponse;

  yield* Console.log(`📦 Found ${searchResults.total} total results`);

  // Filter for packages that actually start with @aws-sdk/client-
  const clientPackages = searchResults.objects
    .map((obj) => obj.package)
    .filter((pkg) => pkg.name.startsWith("@aws-sdk/client-"))
    .sort((a, b) => a.name.localeCompare(b.name));

  yield* Console.log(
    `✅ Filtered to ${clientPackages.length} @aws-sdk/client-* packages`,
  );

  return clientPackages;
});

// Function to display package information
export const displayPackageInfo = (packages: NpmPackage[]) =>
  Effect.gen(function* () {
    yield* Console.log("\n📋 AWS SDK Client Packages:");
    yield* Console.log("=".repeat(50));

    for (const pkg of packages) {
      yield* Console.log(`\n📦 ${pkg.name}`);
      yield* Console.log(`   Version: ${pkg.version}`);
      if (pkg.description) {
        yield* Console.log(`   Description: ${pkg.description}`);
      }
      yield* Console.log(`   NPM: ${pkg.links.npm}`);
      if (pkg.links.repository) {
        yield* Console.log(`   Repository: ${pkg.links.repository}`);
      }
    }

    yield* Console.log(`\n📊 Total packages: ${packages.length}`);
  });

// Function to extract service name from package name
export const extractServiceName = (packageName: string): string => {
  // Remove @aws-sdk/client- prefix
  return packageName.replace("@aws-sdk/client-", "");
};
