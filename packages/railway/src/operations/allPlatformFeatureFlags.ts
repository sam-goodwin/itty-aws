import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query allPlatformFeatureFlags {\n  allPlatformFeatureFlags {\n    flag\n    rolloutPercentage\n    status\n    type\n  }\n}";

// Input Schema (GraphQL variables)
export const AllPlatformFeatureFlagsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "allPlatformFeatureFlags",
    type: "query",
  }),
);
export type AllPlatformFeatureFlagsInput =
  typeof AllPlatformFeatureFlagsInput.Type;

// Output Schema (GraphQL selection set)
export const AllPlatformFeatureFlagsOutput = Schema.Array(
  Schema.Struct({
    flag: Schema.Literals([
      "AGENT_USAGE_BILLING",
      "ALLOW_REPLICA_METRICS",
      "ARCHIVER_V2_ROLLOUT",
      "BUILDER_V3_FOR_CLI_DEPLOYS",
      "BUILDER_V3_ROLLOUT_EXISTING_SERVICES",
      "BUILDER_V3_ROLLOUT_EXISTING_SERVICES_PRO",
      "BUILDER_V3_ROLLOUT_EXISTING_SERVICES_TRIAL",
      "BUILDER_V3_ROLLOUT_NEW_SERVICES",
      "BUILDER_V3_ROLLOUT_NEW_SERVICES_PRO",
      "BUILDER_V3_ROLLOUT_NEW_SERVICES_TRIAL",
      "COMPARE_CLICKHOUSE_METRICS",
      "CTRD_IMAGE_STORE_ROLLOUT",
      "DEMO_PERCENTAGE_ROLLOUT",
      "DISABLE_OAUTH_ACCESS_TOKENS",
      "FOCUSED_PR_ENVIRONMENTS",
      "INLINE_NOTIFICATION_PROCESSING",
      "IN_DASHBOARD_SUPPORT",
      "KAFKA_DEPLOYMENT_STATUS_CHANGES",
      "NEW_STRIPE_WEBHOOK_VERSION_ROLLOUT",
      "OAUTH_DCR_KILLSWITCH",
      "OAUTH_DEVICE_FLOW_KILLSWITCH",
      "RADAR_AUTO_EVALUATE",
      "REGION_REGISTRY_FROM_ORCHESTRATOR",
      "SERVICEINSTANCE_DATALOADER_FOR_STATIC_URL",
      "SPLIT_USAGE_QUERIES",
      "STRIPE_METERS_NEW_ACCOUNTS",
      "STRIPE_METERS_SHADOW_ENABLED",
      "UNIFIED_SNAPSHOT_AND_BUILD",
      "UNIFIED_SNAPSHOT_AND_BUILD_HOBBY",
      "UPDATED_VM_QUERIES",
      "USE_CLICKHOUSE_METRICS",
      "USE_GH_WEBHOOKS_FOR_CHANGE_DETECTION",
      "VM_TIME_RANGE_QUERY",
    ]),
    rolloutPercentage: Schema.Number,
    status: Schema.Boolean,
    type: Schema.Literals(["BOOLEAN", "PERCENTAGE"]),
  }),
).pipe(T.ResponsePath("allPlatformFeatureFlags"));
export type AllPlatformFeatureFlagsOutput =
  typeof AllPlatformFeatureFlagsOutput.Type;

/**
 * Returns the platform feature flags enabled for the current user
 */
export const allPlatformFeatureFlags = API.make(() => ({
  inputSchema: AllPlatformFeatureFlagsInput,
  outputSchema: AllPlatformFeatureFlagsOutput,
}));
