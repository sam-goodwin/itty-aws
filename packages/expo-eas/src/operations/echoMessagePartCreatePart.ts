import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoMessagePartCreatePart($input: CreateEchoMessagePartInput!) {\n  echoMessagePart {\n    createPart(input: $input) {\n      data\n      echoMessage {\n        completedAt\n        echoChat {\n          agentMetadata\n          agentType\n          id\n          state\n          stats\n          title\n        }\n        echoTurn {\n          completedAt\n          createdAt\n          id\n        }\n        id\n        metadata\n        role\n        turnId\n        user {\n          appCount\n          appetizeCode\n          bestContactEmail\n          created\n          displayName\n          email\n          emailVerified\n          firstName\n          fullName\n          githubUsername\n          hasPassword\n          hasPendingUserInvitations\n          id\n          industry\n          isExpoAdmin\n          isLegacy\n          isSecondFactorAuthenticationEnabled\n          isStaffModeEnabled\n          lastDeletionAttemptTime\n          lastName\n          location\n          newEmailPendingVerification\n          primaryAccountProfileImageUrl\n          profilePhoto\n          twitterUsername\n          username\n        }\n      }\n      id\n      index\n      type\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoMessagePartCreatePartInput = Schema.Struct({
  input: Schema.Struct({
    data: Schema.Unknown,
    echoMessageId: Schema.String,
    id: Schema.optional(Schema.NullOr(Schema.String)),
    index: Schema.optional(Schema.NullOr(Schema.Number)),
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
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoMessagePartCreatePart",
    type: "mutation",
  }),
);
export type EchoMessagePartCreatePartInput =
  typeof EchoMessagePartCreatePartInput.Type;

// Output Schema (GraphQL selection set)
export const EchoMessagePartCreatePartOutput = Schema.Struct({
  data: Schema.Unknown,
  echoMessage: Schema.Struct({
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
    echoTurn: Schema.NullOr(
      Schema.Struct({
        completedAt: Schema.NullOr(Schema.String),
        createdAt: Schema.String,
        id: Schema.String,
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
}).pipe(T.ResponsePath("echoMessagePart.createPart"));
export type EchoMessagePartCreatePartOutput =
  typeof EchoMessagePartCreatePartOutput.Type;

export const echoMessagePartCreatePart = API.make(() => ({
  inputSchema: EchoMessagePartCreatePartInput,
  outputSchema: EchoMessagePartCreatePartOutput,
}));
