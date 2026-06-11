import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation addWorkspacePolicyDeploySourceAllowlist($sourceId: String!, $sourceType: WorkspacePolicyDeploySourceType!, $workspaceId: String!) {\n  workspacePolicyDeploySourceAllowlistAdd(sourceId: $sourceId, sourceType: $sourceType, workspaceId: $workspaceId) {\n    addedBy {\n      agreedFairUse\n      apiTokenRateLimit {\n        remainingPoints\n        resetsAt\n      }\n      avatar\n      banReason\n      createdAt\n      email\n      featureFlags\n      flags\n      githubProviderId\n      githubUsername\n      has2FA\n      hasPasskeys\n      id\n      isAdmin\n      isConductor\n      isVerified\n      lastLogin\n      name\n      platformFeatureFlags\n      profile {\n        bio\n        isPublic\n        website\n      }\n      registrationStatus\n      riskLevel\n      termsAgreedOn\n      username\n      workspace {\n        adoptionLevel\n        allowDeprecatedRegions\n        avatar\n        banReason\n        createdAt\n        discordRole\n        has2FAEnforcement\n        hasAutomaticDiagnosis\n        hasGuardrailsAccess\n        hasSAML\n        id\n        name\n        plan\n        preferredRegion\n        redactedDueTo2FAPending\n        slackChannelId\n        subscriptionModel\n        subscriptionPlanLimit\n        supportTierOverride\n        updatedAt\n        usersWithout2FA\n      }\n      workspaces {\n        adoptionLevel\n        allowDeprecatedRegions\n        avatar\n        banReason\n        createdAt\n        discordRole\n        has2FAEnforcement\n        hasAutomaticDiagnosis\n        hasGuardrailsAccess\n        hasSAML\n        id\n        name\n        plan\n        preferredRegion\n        redactedDueTo2FAPending\n        slackChannelId\n        subscriptionModel\n        subscriptionPlanLimit\n        supportTierOverride\n        updatedAt\n        usersWithout2FA\n      }\n    }\n    createdAt\n    id\n    sourceIcon\n    sourceId\n    sourceName\n    sourceType\n  }\n}";

// Input Schema (GraphQL variables)
export const AddWorkspacePolicyDeploySourceAllowlistInput = Schema.Struct({
  sourceId: Schema.String,
  sourceType: Schema.Literals(["GITHUB_ORG"]),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "addWorkspacePolicyDeploySourceAllowlist",
    type: "mutation",
  }),
);
export type AddWorkspacePolicyDeploySourceAllowlistInput =
  typeof AddWorkspacePolicyDeploySourceAllowlistInput.Type;

// Output Schema (GraphQL selection set)
export const AddWorkspacePolicyDeploySourceAllowlistOutput = Schema.Struct({
  addedBy: Schema.NullOr(
    Schema.Struct({
      agreedFairUse: Schema.Boolean,
      apiTokenRateLimit: Schema.NullOr(
        Schema.Struct({
          remainingPoints: Schema.Number,
          resetsAt: Schema.String,
        }),
      ),
      avatar: Schema.NullOr(Schema.String),
      banReason: Schema.NullOr(Schema.String),
      createdAt: Schema.String,
      email: Schema.String,
      featureFlags: Schema.Array(
        Schema.Literals([
          "CHAT_SANDBOX",
          "DEBUG_SMART_DIAGNOSIS",
          "IN_DASHBOARD_SUPPORT",
          "MAGIC_CONFIG",
          "POSTGRES_PGBOUNCER",
          "PRIORITY_BOARDING",
          "PROJECT_SANDBOXES",
        ]),
      ),
      flags: Schema.Array(Schema.Literals(["BETA"])),
      githubProviderId: Schema.NullOr(Schema.String),
      githubUsername: Schema.NullOr(Schema.String),
      has2FA: Schema.Boolean,
      hasPasskeys: Schema.Boolean,
      id: Schema.String,
      isAdmin: Schema.Boolean,
      isConductor: Schema.Boolean,
      isVerified: Schema.Boolean,
      lastLogin: Schema.String,
      name: Schema.NullOr(Schema.String),
      platformFeatureFlags: Schema.Array(
        Schema.Literals([
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
      ),
      profile: Schema.NullOr(
        Schema.Struct({
          bio: Schema.NullOr(Schema.String),
          isPublic: Schema.Boolean,
          website: Schema.NullOr(Schema.String),
        }),
      ),
      registrationStatus: Schema.Literals([
        "ONBOARDED",
        "REGISTERED",
        "WAITLISTED",
      ]),
      riskLevel: Schema.NullOr(Schema.Number),
      termsAgreedOn: Schema.NullOr(Schema.String),
      username: Schema.NullOr(Schema.String),
      workspace: Schema.NullOr(
        Schema.Struct({
          adoptionLevel: Schema.Number,
          allowDeprecatedRegions: Schema.NullOr(Schema.Boolean),
          avatar: Schema.NullOr(Schema.String),
          banReason: Schema.NullOr(Schema.String),
          createdAt: Schema.String,
          discordRole: Schema.NullOr(Schema.String),
          has2FAEnforcement: Schema.Boolean,
          hasAutomaticDiagnosis: Schema.Boolean,
          hasGuardrailsAccess: Schema.Boolean,
          hasSAML: Schema.Boolean,
          id: Schema.String,
          name: Schema.String,
          plan: Schema.Literals(["FREE", "HOBBY", "PRO"]),
          preferredRegion: Schema.NullOr(Schema.String),
          redactedDueTo2FAPending: Schema.Boolean,
          slackChannelId: Schema.NullOr(Schema.String),
          subscriptionModel: Schema.Literals(["FREE", "TEAM", "USER"]),
          subscriptionPlanLimit: Schema.NullOr(Schema.Unknown),
          supportTierOverride: Schema.NullOr(
            Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
          ),
          updatedAt: Schema.String,
          usersWithout2FA: Schema.Array(Schema.String),
        }),
      ),
      workspaces: Schema.Array(
        Schema.Struct({
          adoptionLevel: Schema.Number,
          allowDeprecatedRegions: Schema.NullOr(Schema.Boolean),
          avatar: Schema.NullOr(Schema.String),
          banReason: Schema.NullOr(Schema.String),
          createdAt: Schema.String,
          discordRole: Schema.NullOr(Schema.String),
          has2FAEnforcement: Schema.Boolean,
          hasAutomaticDiagnosis: Schema.Boolean,
          hasGuardrailsAccess: Schema.Boolean,
          hasSAML: Schema.Boolean,
          id: Schema.String,
          name: Schema.String,
          plan: Schema.Literals(["FREE", "HOBBY", "PRO"]),
          preferredRegion: Schema.NullOr(Schema.String),
          redactedDueTo2FAPending: Schema.Boolean,
          slackChannelId: Schema.NullOr(Schema.String),
          subscriptionModel: Schema.Literals(["FREE", "TEAM", "USER"]),
          subscriptionPlanLimit: Schema.NullOr(Schema.Unknown),
          supportTierOverride: Schema.NullOr(
            Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
          ),
          updatedAt: Schema.String,
          usersWithout2FA: Schema.Array(Schema.String),
        }),
      ),
    }),
  ),
  createdAt: Schema.String,
  id: Schema.String,
  sourceIcon: Schema.NullOr(Schema.String),
  sourceId: Schema.String,
  sourceName: Schema.String,
  sourceType: Schema.Literals(["GITHUB_ORG"]),
}).pipe(T.ResponsePath("workspacePolicyDeploySourceAllowlistAdd"));
export type AddWorkspacePolicyDeploySourceAllowlistOutput =
  typeof AddWorkspacePolicyDeploySourceAllowlistOutput.Type;

/**
 * Add a deploy source to a workspace policy allowlist.
 */
export const addWorkspacePolicyDeploySourceAllowlist = API.make(() => ({
  inputSchema: AddWorkspacePolicyDeploySourceAllowlistInput,
  outputSchema: AddWorkspacePolicyDeploySourceAllowlistOutput,
}));
