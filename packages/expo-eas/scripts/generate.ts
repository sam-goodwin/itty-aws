/**
 * EAS SDK Code Generator
 *
 * Generates Effect-based operations from the EAS GraphQL introspection schema
 * shipped with the eas-cli submodule. The EAS backend is a single GraphQL
 * endpoint at https://api.expo.dev/graphql — see
 * specs/eas-cli/packages/eas-cli/graphql.schema.json.
 *
 * The shared GraphQL generator emits one operation per top-level Query field
 * and per top-level Mutation field. Most top-level EAS fields are namespacing
 * objects (e.g. `account: AccountQuery`, `app: AppMutation`) whose nested
 * leaves are the real operations — these get expanded by the generator's
 * selection-set walker up to `maxDepth` levels.
 */
import * as path from "path";
import { generateFromGraphQL } from "@distilled.cloud/core/graphql/generate";

const rootDir = path.join(import.meta.dir, "..");

generateFromGraphQL({
  schemaPath: path.join(
    rootDir,
    "specs/eas-cli/packages/eas-cli/graphql.schema.json",
  ),
  outputDir: path.join(rootDir, "src/operations"),
  endpoint: "/graphql",
  maxDepth: 3,
  clientImport: "../client",
  traitsImport: "../traits",
  skipDeprecated: true,
  // The schema exposes a couple of `_doNotUse` placeholder fields that are
  // not real operations.
  skipQuery: (name) => name.startsWith("_"),
  skipMutation: (name) => name.startsWith("_"),
  // Expo's schema declares a number of custom scalars. Map the common ones
  // to sensible Effect Schema primitives so generated operations don't
  // dissolve into Schema.Unknown.
  customScalars: {
    DateTime: "Schema.String",
    JSON: "Schema.Unknown",
    JSONObject: "Schema.Unknown",
    Upload: "Schema.Unknown",
    WorkflowsJSON: "Schema.Unknown",
    AccountName: "Schema.String",
    UUID: "Schema.String",
    BigInt: "Schema.String",
  },
});
