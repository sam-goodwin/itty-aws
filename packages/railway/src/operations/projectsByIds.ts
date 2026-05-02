import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectsByIds($ids: [String!]!) {\n  projectsByIds(ids: $ids) {\n    baseEnvironment {\n      canAccess\n      createdAt\n      deletedAt\n      id\n      isEphemeral\n      meta {\n        baseBranch\n        branch\n        latestSuccessfulGitHubDeploymentId\n        prCommentId\n        prNumber\n        prRepo\n        prTitle\n        skippedResourceIds\n      }\n      name\n      projectId\n      unmergedChangesCount\n      updatedAt\n    }\n    baseEnvironmentId\n    botPrEnvironments\n    createdAt\n    deletedAt\n    description\n    expiredAt\n    featureFlags\n    focusedPrEnvironments\n    id\n    isPublic\n    isTempProject\n    members {\n      avatar\n      email\n      id\n      name\n      role\n    }\n    name\n    prDeploys\n    primaryEnvironmentId\n    subscriptionPlanLimit\n    subscriptionType\n    team {\n      adoptionHistory {\n        adoptionLevel\n        createdAt\n        deltaLevel\n        id\n        matchedIcpEmail\n        monthlyEstimatedUsage\n        numConfigFile\n        numCronSchedule\n        numDeploys\n        numEnvs\n        numFailedDeploys\n        numHealthcheck\n        numIconConfig\n        numRegion\n        numReplicas\n        numRootDirectory\n        numSeats\n        numServices\n        numVariables\n        numWatchPatterns\n        totalCores\n        totalDisk\n        totalNetwork\n        updatedAt\n      }\n      adoptionLevel\n      apiTokenRateLimit {\n        remainingPoints\n        resetsAt\n      }\n      avatar\n      createdAt\n      customer {\n        appliedCredits\n        billingEmail\n        creditBalance\n        currentUsage\n        defaultPaymentMethodId\n        hasExhaustedFreePlan\n        id\n        isPrepaying\n        isTrialing\n        isUsageSubscriber\n        isWithdrawingToCredits\n        remainingUsageCreditBalance\n        state\n        stripeCustomerId\n        supportedWithdrawalPlatforms\n        trialDaysRemaining\n      }\n      id\n      members {\n        avatar\n        email\n        featureFlags\n        id\n        name\n        role\n      }\n      name\n      preferredRegion\n      slackChannelId\n      supportTierOverride\n      teamPermissions {\n        createdAt\n        id\n        role\n        updatedAt\n        userId\n        workspaceId\n      }\n      updatedAt\n      workspace {\n        adoptionLevel\n        allowDeprecatedRegions\n        avatar\n        banReason\n        createdAt\n        discordRole\n        has2FAEnforcement\n        hasAutomaticDiagnosis\n        hasGuardrailsAccess\n        hasSAML\n        id\n        name\n        plan\n        preferredRegion\n        redactedDueTo2FAPending\n        slackChannelId\n        subscriptionModel\n        subscriptionPlanLimit\n        supportTierOverride\n        updatedAt\n        usersWithout2FA\n      }\n    }\n    teamId\n    updatedAt\n    workspace {\n      adoptionHistory {\n        adoptionLevel\n        createdAt\n        deltaLevel\n        id\n        matchedIcpEmail\n        monthlyEstimatedUsage\n        numConfigFile\n        numCronSchedule\n        numDeploys\n        numEnvs\n        numFailedDeploys\n        numHealthcheck\n        numIconConfig\n        numRegion\n        numReplicas\n        numRootDirectory\n        numSeats\n        numServices\n        numVariables\n        numWatchPatterns\n        totalCores\n        totalDisk\n        totalNetwork\n        updatedAt\n      }\n      adoptionLevel\n      allowDeprecatedRegions\n      apiTokenRateLimit {\n        remainingPoints\n        resetsAt\n      }\n      avatar\n      banReason\n      createdAt\n      customer {\n        appliedCredits\n        billingEmail\n        creditBalance\n        currentUsage\n        defaultPaymentMethodId\n        hasExhaustedFreePlan\n        id\n        isPrepaying\n        isTrialing\n        isUsageSubscriber\n        isWithdrawingToCredits\n        remainingUsageCreditBalance\n        state\n        stripeCustomerId\n        supportedWithdrawalPlatforms\n        trialDaysRemaining\n      }\n      discordRole\n      has2FAEnforcement\n      hasAutomaticDiagnosis\n      hasGuardrailsAccess\n      hasSAML\n      id\n      members {\n        avatar\n        email\n        featureFlags\n        id\n        name\n        role\n        twoFactorAuthEnabled\n      }\n      name\n      partnerProfile {\n        category\n        description\n        slug\n        type\n        website\n      }\n      plan\n      preferredRegion\n      redactedDueTo2FAPending\n      referredUsers {\n        code\n        id\n        status\n      }\n      slackChannelId\n      subscriptionModel\n      subscriptionPlanLimit\n      supportTierOverride\n      team {\n        adoptionLevel\n        avatar\n        createdAt\n        id\n        name\n        preferredRegion\n        slackChannelId\n        supportTierOverride\n        updatedAt\n      }\n      updatedAt\n      usersWithout2FA\n    }\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectsByIdsInput = Schema.Struct({
  ids: Schema.Array(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectsByIds",
    type: "query",
  }),
);
export type ProjectsByIdsInput = typeof ProjectsByIdsInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectsByIdsOutput = Schema.Array(
  Schema.Struct({
    baseEnvironment: Schema.NullOr(
      Schema.Struct({
        canAccess: Schema.Boolean,
        createdAt: Schema.String,
        deletedAt: Schema.NullOr(Schema.String),
        id: Schema.String,
        isEphemeral: Schema.Boolean,
        meta: Schema.NullOr(
          Schema.Struct({
            baseBranch: Schema.NullOr(Schema.String),
            branch: Schema.NullOr(Schema.String),
            latestSuccessfulGitHubDeploymentId: Schema.NullOr(Schema.Number),
            prCommentId: Schema.NullOr(Schema.Number),
            prNumber: Schema.NullOr(Schema.Number),
            prRepo: Schema.NullOr(Schema.String),
            prTitle: Schema.NullOr(Schema.String),
            skippedResourceIds: Schema.NullOr(Schema.Unknown),
          }),
        ),
        name: Schema.String,
        projectId: Schema.String,
        unmergedChangesCount: Schema.NullOr(Schema.Number),
        updatedAt: Schema.String,
      }),
    ),
    baseEnvironmentId: Schema.NullOr(Schema.String),
    botPrEnvironments: Schema.Boolean,
    createdAt: Schema.String,
    deletedAt: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    expiredAt: Schema.NullOr(Schema.String),
    featureFlags: Schema.Array(Schema.Literals(["PLACEHOLDER"])),
    focusedPrEnvironments: Schema.Boolean,
    id: Schema.String,
    isPublic: Schema.Boolean,
    isTempProject: Schema.Boolean,
    members: Schema.Array(
      Schema.Struct({
        avatar: Schema.NullOr(Schema.String),
        email: Schema.String,
        id: Schema.String,
        name: Schema.NullOr(Schema.String),
        role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
      }),
    ),
    name: Schema.String,
    prDeploys: Schema.Boolean,
    primaryEnvironmentId: Schema.NullOr(Schema.String),
    subscriptionPlanLimit: Schema.Unknown,
    subscriptionType: Schema.Literals(["free", "hobby", "pro", "trial"]),
    team: Schema.NullOr(
      Schema.Struct({
        adoptionHistory: Schema.Array(
          Schema.Struct({
            adoptionLevel: Schema.NullOr(Schema.Number),
            createdAt: Schema.String,
            deltaLevel: Schema.NullOr(Schema.Number),
            id: Schema.String,
            matchedIcpEmail: Schema.NullOr(Schema.String),
            monthlyEstimatedUsage: Schema.NullOr(Schema.Number),
            numConfigFile: Schema.Number,
            numCronSchedule: Schema.Number,
            numDeploys: Schema.Number,
            numEnvs: Schema.Number,
            numFailedDeploys: Schema.Number,
            numHealthcheck: Schema.Number,
            numIconConfig: Schema.Number,
            numRegion: Schema.Number,
            numReplicas: Schema.Number,
            numRootDirectory: Schema.Number,
            numSeats: Schema.Number,
            numServices: Schema.Number,
            numVariables: Schema.Number,
            numWatchPatterns: Schema.Number,
            totalCores: Schema.NullOr(Schema.Number),
            totalDisk: Schema.NullOr(Schema.Number),
            totalNetwork: Schema.NullOr(Schema.Number),
            updatedAt: Schema.String,
          }),
        ),
        adoptionLevel: Schema.Number,
        apiTokenRateLimit: Schema.NullOr(
          Schema.Struct({
            remainingPoints: Schema.Number,
            resetsAt: Schema.String,
          }),
        ),
        avatar: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        customer: Schema.Struct({
          appliedCredits: Schema.Number,
          billingEmail: Schema.NullOr(Schema.String),
          creditBalance: Schema.Number,
          currentUsage: Schema.Number,
          defaultPaymentMethodId: Schema.NullOr(Schema.String),
          hasExhaustedFreePlan: Schema.Boolean,
          id: Schema.String,
          isPrepaying: Schema.Boolean,
          isTrialing: Schema.Boolean,
          isUsageSubscriber: Schema.Boolean,
          isWithdrawingToCredits: Schema.Boolean,
          remainingUsageCreditBalance: Schema.Number,
          state: Schema.Literals([
            "ACTIVE",
            "CANCELLED",
            "INACTIVE",
            "PAST_DUE",
            "UNPAID",
          ]),
          stripeCustomerId: Schema.String,
          supportedWithdrawalPlatforms: Schema.Array(
            Schema.Literals(["BMAC", "GITHUB", "PAYPAL", "STRIPE_CONNECT"]),
          ),
          trialDaysRemaining: Schema.Number,
        }),
        id: Schema.String,
        members: Schema.Array(
          Schema.Struct({
            avatar: Schema.NullOr(Schema.String),
            email: Schema.String,
            featureFlags: Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "AUDIT_LOGS",
                  "BUCKET_FILE_BROWSER",
                  "DEBUG_SMART_DIAGNOSIS",
                  "IN_DASHBOARD_SUPPORT",
                  "MAGIC_CONFIG",
                  "POSTGRES_PGBOUNCER",
                  "PRIORITY_BOARDING",
                ]),
              ),
            ),
            id: Schema.String,
            name: Schema.NullOr(Schema.String),
            role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
          }),
        ),
        name: Schema.String,
        preferredRegion: Schema.NullOr(Schema.String),
        slackChannelId: Schema.NullOr(Schema.String),
        supportTierOverride: Schema.NullOr(
          Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
        ),
        teamPermissions: Schema.Array(
          Schema.Struct({
            createdAt: Schema.String,
            id: Schema.String,
            role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
            updatedAt: Schema.String,
            userId: Schema.String,
            workspaceId: Schema.String,
          }),
        ),
        updatedAt: Schema.String,
        workspace: Schema.Struct({
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
      }),
    ),
    teamId: Schema.NullOr(Schema.String),
    updatedAt: Schema.String,
    workspace: Schema.NullOr(
      Schema.Struct({
        adoptionHistory: Schema.Array(
          Schema.Struct({
            adoptionLevel: Schema.NullOr(Schema.Number),
            createdAt: Schema.String,
            deltaLevel: Schema.NullOr(Schema.Number),
            id: Schema.String,
            matchedIcpEmail: Schema.NullOr(Schema.String),
            monthlyEstimatedUsage: Schema.NullOr(Schema.Number),
            numConfigFile: Schema.Number,
            numCronSchedule: Schema.Number,
            numDeploys: Schema.Number,
            numEnvs: Schema.Number,
            numFailedDeploys: Schema.Number,
            numHealthcheck: Schema.Number,
            numIconConfig: Schema.Number,
            numRegion: Schema.Number,
            numReplicas: Schema.Number,
            numRootDirectory: Schema.Number,
            numSeats: Schema.Number,
            numServices: Schema.Number,
            numVariables: Schema.Number,
            numWatchPatterns: Schema.Number,
            totalCores: Schema.NullOr(Schema.Number),
            totalDisk: Schema.NullOr(Schema.Number),
            totalNetwork: Schema.NullOr(Schema.Number),
            updatedAt: Schema.String,
          }),
        ),
        adoptionLevel: Schema.Number,
        allowDeprecatedRegions: Schema.NullOr(Schema.Boolean),
        apiTokenRateLimit: Schema.NullOr(
          Schema.Struct({
            remainingPoints: Schema.Number,
            resetsAt: Schema.String,
          }),
        ),
        avatar: Schema.NullOr(Schema.String),
        banReason: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        customer: Schema.Struct({
          appliedCredits: Schema.Number,
          billingEmail: Schema.NullOr(Schema.String),
          creditBalance: Schema.Number,
          currentUsage: Schema.Number,
          defaultPaymentMethodId: Schema.NullOr(Schema.String),
          hasExhaustedFreePlan: Schema.Boolean,
          id: Schema.String,
          isPrepaying: Schema.Boolean,
          isTrialing: Schema.Boolean,
          isUsageSubscriber: Schema.Boolean,
          isWithdrawingToCredits: Schema.Boolean,
          remainingUsageCreditBalance: Schema.Number,
          state: Schema.Literals([
            "ACTIVE",
            "CANCELLED",
            "INACTIVE",
            "PAST_DUE",
            "UNPAID",
          ]),
          stripeCustomerId: Schema.String,
          supportedWithdrawalPlatforms: Schema.Array(
            Schema.Literals(["BMAC", "GITHUB", "PAYPAL", "STRIPE_CONNECT"]),
          ),
          trialDaysRemaining: Schema.Number,
        }),
        discordRole: Schema.NullOr(Schema.String),
        has2FAEnforcement: Schema.Boolean,
        hasAutomaticDiagnosis: Schema.Boolean,
        hasGuardrailsAccess: Schema.Boolean,
        hasSAML: Schema.Boolean,
        id: Schema.String,
        members: Schema.Array(
          Schema.Struct({
            avatar: Schema.NullOr(Schema.String),
            email: Schema.String,
            featureFlags: Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "AUDIT_LOGS",
                  "BUCKET_FILE_BROWSER",
                  "DEBUG_SMART_DIAGNOSIS",
                  "IN_DASHBOARD_SUPPORT",
                  "MAGIC_CONFIG",
                  "POSTGRES_PGBOUNCER",
                  "PRIORITY_BOARDING",
                ]),
              ),
            ),
            id: Schema.String,
            name: Schema.NullOr(Schema.String),
            role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
            twoFactorAuthEnabled: Schema.NullOr(Schema.Boolean),
          }),
        ),
        name: Schema.String,
        partnerProfile: Schema.NullOr(
          Schema.Struct({
            category: Schema.String,
            description: Schema.String,
            slug: Schema.String,
            type: Schema.Literals([
              "BASIC_PARTNER",
              "LIMITED_PARTNER",
              "TEMPLATE_MAINTAINER",
            ]),
            website: Schema.String,
          }),
        ),
        plan: Schema.Literals(["FREE", "HOBBY", "PRO"]),
        preferredRegion: Schema.NullOr(Schema.String),
        redactedDueTo2FAPending: Schema.Boolean,
        referredUsers: Schema.Array(
          Schema.Struct({
            code: Schema.String,
            id: Schema.String,
            status: Schema.Literals([
              "REFEREE_CREDITED",
              "REFERRER_CREDITED",
              "REGISTERED",
            ]),
          }),
        ),
        slackChannelId: Schema.NullOr(Schema.String),
        subscriptionModel: Schema.Literals(["FREE", "TEAM", "USER"]),
        subscriptionPlanLimit: Schema.NullOr(Schema.Unknown),
        supportTierOverride: Schema.NullOr(
          Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
        ),
        team: Schema.NullOr(
          Schema.Struct({
            adoptionLevel: Schema.Number,
            avatar: Schema.NullOr(Schema.String),
            createdAt: Schema.String,
            id: Schema.String,
            name: Schema.String,
            preferredRegion: Schema.NullOr(Schema.String),
            slackChannelId: Schema.NullOr(Schema.String),
            supportTierOverride: Schema.NullOr(
              Schema.Literals(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]),
            ),
            updatedAt: Schema.String,
          }),
        ),
        updatedAt: Schema.String,
        usersWithout2FA: Schema.Array(Schema.String),
      }),
    ),
    workspaceId: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("projectsByIds"));
export type ProjectsByIdsOutput = typeof ProjectsByIdsOutput.Type;

/**
 * Fetch multiple projects by id. Skips ids the caller cannot access (does not throw on partial denial). Intended for batched dashboard hydration of a small viewport-sized set of cards.
 */
export const projectsByIds = API.make(() => ({
  inputSchema: ProjectsByIdsInput,
  outputSchema: ProjectsByIdsOutput,
}));
