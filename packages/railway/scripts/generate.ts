/**
 * Railway SDK Code Generator
 *
 * Generates Effect-based operations from the Railway public GraphQL API
 * introspection JSON shipped under `specs/distilled-spec-railway/specs/`.
 *
 * Railway's backboard exposes a single GraphQL endpoint at
 * `https://backboard.railway.com/graphql/v2`. The shared GraphQL generator
 * emits one operation per top-level `Query` field and per top-level
 * `Mutation` field, baking the document into the operation's input schema
 * via the `T.GraphQLOp` trait. The runtime client wraps variables and
 * unwraps `data.<operationName>` automatically.
 */
import * as path from "path";
import { generateFromGraphQL } from "@distilled.cloud/core/graphql/generate";

const rootDir = path.join(import.meta.dir, "..");

generateFromGraphQL({
  schemaPath: path.join(
    rootDir,
    "specs/distilled-spec-railway/specs/schema.json",
  ),
  outputDir: path.join(rootDir, "src/operations"),
  endpoint: "/graphql/v2",
  maxDepth: 3,
  clientImport: "../client",
  traitsImport: "../traits",
  skipDeprecated: true,
  // Railway's schema declares a number of custom scalars (mostly opaque
  // configuration blobs and timestamps). Map common ones to sensible Effect
  // Schema primitives so generated operations don't dissolve into
  // Schema.Unknown across the board.
  customScalars: {
    DateTime: "Schema.String",
    JSON: "Schema.Unknown",
    BigInt: "Schema.String",
    Upload: "Schema.Unknown",
    CanvasConfig: "Schema.Unknown",
    DeploymentDiagnosis: "Schema.Unknown",
    DeploymentMeta: "Schema.Unknown",
    DisplayConfig: "Schema.Unknown",
    EnvironmentConfig: "Schema.Unknown",
    EnvironmentVariables: "Schema.Unknown",
    NotificationChannelConfig: "Schema.Unknown",
    NotificationPayload: "Schema.Unknown",
    RailpackInfo: "Schema.Unknown",
    SerializedTemplateConfig: "Schema.Unknown",
    ServiceInstanceLimit: "Schema.Unknown",
    SkippedResourceIds: "Schema.Unknown",
    SpendCommitmentFeatureId: "Schema.String",
    SubscriptionPlanLimit: "Schema.Unknown",
    SupportHealthMetrics: "Schema.Unknown",
    TemplateConfig: "Schema.Unknown",
    TemplateMetadata: "Schema.Unknown",
    TemplateServiceConfig: "Schema.Unknown",
    TemplateVolume: "Schema.Unknown",
  },
});
