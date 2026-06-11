import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query allPlatformFeatureFlags {\n  allPlatformFeatureFlags {\n    flag\n    rolloutPercentage\n    status\n    type\n  }\n}";

// Input Schema (GraphQL variables)
export const GetAllPlatformFeatureFlagsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "allPlatformFeatureFlags",
    type: "query",
  }),
);
export type GetAllPlatformFeatureFlagsInput =
  typeof GetAllPlatformFeatureFlagsInput.Type;

// Output Schema (GraphQL selection set)
export const GetAllPlatformFeatureFlagsOutput = Schema.Array(
  Schema.Struct({
    flag: Schema.Literals([
      "ALERT_SUS_USERS_CRON_KILLSWITCH",
      "BAN_APPEAL_FORM",
      "CHAT_SANDBOX",
      "CTRD_IMAGE_STORE_ROLLOUT",
      "DEMO_PERCENTAGE_ROLLOUT",
      "HA_STATIC_EGRESS_SELF_SERVICE",
      "INLINE_NOTIFICATION_PROCESSING",
      "IN_DASHBOARD_SUPPORT",
      "KAFKA_DEPLOYMENT_STATUS_CHANGES",
      "NEW_STRIPE_WEBHOOK_VERSION_ROLLOUT",
      "OAUTH_DCR_KILLSWITCH",
      "RADAR_AUTO_EVALUATE",
      "SERVICEINSTANCE_DATALOADER_FOR_STATIC_URL",
      "SPLIT_USAGE_QUERIES",
      "STRIPE_INVOICE_CREATED_WORKFLOW_V3",
      "STRIPE_METERS_NEW_ACCOUNTS",
      "STRIPE_METERS_SHADOW_ENABLED",
      "UPDATED_VM_QUERIES",
    ]),
    rolloutPercentage: Schema.Number,
    status: Schema.Boolean,
    type: Schema.Literals(["BOOLEAN", "PERCENTAGE"]),
  }),
).pipe(T.ResponsePath("allPlatformFeatureFlags"));
export type GetAllPlatformFeatureFlagsOutput =
  typeof GetAllPlatformFeatureFlagsOutput.Type;

/**
 * Returns the platform feature flags enabled for the current user
 */
export const getAllPlatformFeatureFlags = API.make(() => ({
  inputSchema: GetAllPlatformFeatureFlagsInput,
  outputSchema: GetAllPlatformFeatureFlagsOutput,
}));
