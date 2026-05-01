import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoTurnCompleteTurn($id: ID!, $usage: EchoTurnUsageInput!) {\n  echoTurn {\n    completeTurn(id: $id, usage: $usage) {\n      completedAt\n      createdAt\n      echoChat {\n        agentMetadata\n        agentType\n        echoProject {\n          description\n          displayName\n          id\n          initFromGitHubUrl\n          lastMessageAt\n          slug\n          updatedAt\n          visibility\n        }\n        id\n        state\n        stats\n        title\n      }\n      echoMessages {\n        completedAt\n        echoChat {\n          agentMetadata\n          agentType\n          id\n          state\n          stats\n          title\n        }\n        echoMessageParts {\n          data\n          id\n          index\n          type\n        }\n        id\n        metadata\n        role\n        turnId\n        user {\n          appCount\n          appetizeCode\n          bestContactEmail\n          created\n          displayName\n          email\n          emailVerified\n          firstName\n          fullName\n          githubUsername\n          hasPassword\n          hasPendingUserInvitations\n          id\n          industry\n          isExpoAdmin\n          isLegacy\n          isSecondFactorAuthenticationEnabled\n          isStaffModeEnabled\n          lastDeletionAttemptTime\n          lastName\n          location\n          newEmailPendingVerification\n          primaryAccountProfileImageUrl\n          profilePhoto\n          twitterUsername\n          username\n        }\n      }\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoTurnCompleteTurnInput = Schema.Struct({
  id: Schema.String,
  usage: Schema.Struct({
    agent: Schema.optional(Schema.NullOr(Schema.String)),
    cost: Schema.optional(Schema.NullOr(Schema.Number)),
    finishReason: Schema.optional(Schema.NullOr(Schema.String)),
    model: Schema.optional(Schema.NullOr(Schema.String)),
    provider: Schema.optional(Schema.NullOr(Schema.String)),
    sdkCost: Schema.optional(Schema.NullOr(Schema.Number)),
    tokens: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          cacheRead: Schema.optional(Schema.NullOr(Schema.Number)),
          cacheWrite: Schema.optional(Schema.NullOr(Schema.Number)),
          cacheWriteBreakdown: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                ttl1h: Schema.optional(Schema.NullOr(Schema.Number)),
                ttl5m: Schema.optional(Schema.NullOr(Schema.Number)),
                ttl24h: Schema.optional(Schema.NullOr(Schema.Number)),
              }),
            ),
          ),
          input: Schema.Number,
          output: Schema.Number,
          reasoning: Schema.optional(Schema.NullOr(Schema.Number)),
        }),
      ),
    ),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoTurnCompleteTurn",
    type: "mutation",
  }),
);
export type EchoTurnCompleteTurnInput = typeof EchoTurnCompleteTurnInput.Type;

// Output Schema (GraphQL selection set)
export const EchoTurnCompleteTurnOutput = Schema.Struct({
  completedAt: Schema.NullOr(Schema.String),
  createdAt: Schema.String,
  echoChat: Schema.Struct({
    agentMetadata: Schema.NullOr(Schema.Unknown),
    agentType: Schema.NullOr(
      Schema.Literals(["CLAUDE_CODE", "CODEX", "GEMINI"]),
    ),
    echoProject: Schema.Struct({
      description: Schema.NullOr(Schema.String),
      displayName: Schema.NullOr(Schema.String),
      id: Schema.String,
      initFromGitHubUrl: Schema.NullOr(Schema.String),
      lastMessageAt: Schema.NullOr(Schema.String),
      slug: Schema.NullOr(Schema.String),
      updatedAt: Schema.String,
      visibility: Schema.Literals(["PRIVATE", "PUBLIC"]),
    }),
    id: Schema.String,
    state: Schema.Literals(["ACTIVE", "ARCHIVED"]),
    stats: Schema.NullOr(Schema.Unknown),
    title: Schema.NullOr(Schema.String),
  }),
  echoMessages: Schema.Array(
    Schema.Struct({
      completedAt: Schema.NullOr(Schema.String),
      echoChat: Schema.Struct({
        agentMetadata: Schema.NullOr(Schema.Unknown),
        agentType: Schema.NullOr(
          Schema.Literals(["CLAUDE_CODE", "CODEX", "GEMINI"]),
        ),
        id: Schema.String,
        state: Schema.Literals(["ACTIVE", "ARCHIVED"]),
        stats: Schema.NullOr(Schema.Unknown),
        title: Schema.NullOr(Schema.String),
      }),
      echoMessageParts: Schema.Array(
        Schema.Struct({
          data: Schema.Unknown,
          id: Schema.String,
          index: Schema.Number,
          type: Schema.Literals([
            "COMPACTION",
            "DATA",
            "FILE",
            "REASONING",
            "SOURCE",
            "STEP",
            "SUBTASK",
            "TEXT",
            "TOOL",
          ]),
        }),
      ),
      id: Schema.String,
      metadata: Schema.NullOr(Schema.Unknown),
      role: Schema.Literals(["ASSISTANT", "USER"]),
      turnId: Schema.NullOr(Schema.String),
      user: Schema.NullOr(
        Schema.Struct({
          appCount: Schema.Number,
          appetizeCode: Schema.NullOr(Schema.String),
          bestContactEmail: Schema.NullOr(Schema.String),
          created: Schema.String,
          displayName: Schema.String,
          email: Schema.String,
          emailVerified: Schema.Boolean,
          firstName: Schema.NullOr(Schema.String),
          fullName: Schema.NullOr(Schema.String),
          githubUsername: Schema.NullOr(Schema.String),
          hasPassword: Schema.Boolean,
          hasPendingUserInvitations: Schema.Boolean,
          id: Schema.String,
          industry: Schema.NullOr(Schema.String),
          isExpoAdmin: Schema.Boolean,
          isLegacy: Schema.Boolean,
          isSecondFactorAuthenticationEnabled: Schema.Boolean,
          isStaffModeEnabled: Schema.Boolean,
          lastDeletionAttemptTime: Schema.NullOr(Schema.String),
          lastName: Schema.NullOr(Schema.String),
          location: Schema.NullOr(Schema.String),
          newEmailPendingVerification: Schema.NullOr(Schema.String),
          primaryAccountProfileImageUrl: Schema.NullOr(Schema.String),
          profilePhoto: Schema.String,
          twitterUsername: Schema.NullOr(Schema.String),
          username: Schema.String,
        }),
      ),
    }),
  ),
  id: Schema.String,
}).pipe(T.ResponsePath("echoTurn.completeTurn"));
export type EchoTurnCompleteTurnOutput = typeof EchoTurnCompleteTurnOutput.Type;

export const echoTurnCompleteTurn = API.make(() => ({
  inputSchema: EchoTurnCompleteTurnInput,
  outputSchema: EchoTurnCompleteTurnOutput,
}));
