import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation volumeCreate($input: VolumeCreateInput!) {\n  volumeCreate(input: $input) {\n    createdAt\n    id\n    name\n    project {\n      baseEnvironment {\n        canAccess\n        createdAt\n        deletedAt\n        id\n        isEphemeral\n        name\n        projectId\n        unmergedChangesCount\n        updatedAt\n      }\n      baseEnvironmentId\n      botPrEnvironments\n      createdAt\n      deletedAt\n      description\n      expiredAt\n      featureFlags\n      focusedPrEnvironments\n      id\n      isPublic\n      isTempProject\n      members {\n        avatar\n        email\n        id\n        name\n        role\n      }\n      name\n      prDeploys\n      primaryEnvironmentId\n      subscriptionPlanLimit\n      subscriptionType\n      team {\n        adoptionLevel\n        avatar\n        createdAt\n        id\n        name\n        preferredRegion\n        slackChannelId\n        supportTierOverride\n        updatedAt\n      }\n      teamId\n      updatedAt\n      workspace {\n        adoptionLevel\n        allowDeprecatedRegions\n        avatar\n        banReason\n        createdAt\n        discordRole\n        has2FAEnforcement\n        hasAutomaticDiagnosis\n        hasGuardrailsAccess\n        hasSAML\n        id\n        name\n        plan\n        preferredRegion\n        redactedDueTo2FAPending\n        slackChannelId\n        subscriptionModel\n        subscriptionPlanLimit\n        supportTierOverride\n        updatedAt\n        usersWithout2FA\n      }\n      workspaceId\n    }\n    projectId\n  }\n}";

// Input Schema (GraphQL variables)
export const VolumeCreateInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.optional(Schema.NullOr(Schema.String)),
    mountPath: Schema.String,
    projectId: Schema.String,
    region: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "volumeCreate",
    type: "mutation",
  }),
);
export type VolumeCreateInput = typeof VolumeCreateInput.Type;

// Output Schema (GraphQL selection set)
export const VolumeCreateOutput = Schema.Struct({
  createdAt: Schema.String,
  id: Schema.String,
  name: Schema.String,
  project: Schema.Struct({
    baseEnvironment: Schema.NullOr(
      Schema.Struct({
        canAccess: Schema.Boolean,
        createdAt: Schema.String,
        deletedAt: Schema.NullOr(Schema.String),
        id: Schema.String,
        isEphemeral: Schema.Boolean,
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
    teamId: Schema.NullOr(Schema.String),
    updatedAt: Schema.String,
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
    workspaceId: Schema.NullOr(Schema.String),
  }),
  projectId: Schema.String,
}).pipe(T.ResponsePath("volumeCreate"));
export type VolumeCreateOutput = typeof VolumeCreateOutput.Type;

/**
 * Create a persistent volume in a project
 */
export const volumeCreate = API.make(() => ({
  inputSchema: VolumeCreateInput,
  outputSchema: VolumeCreateOutput,
}));
