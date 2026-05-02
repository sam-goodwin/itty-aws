import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInvitationResend($id: String!) {\n  projectInvitationResend(id: $id) {\n    email\n    expiresAt\n    id\n    inviter {\n      email\n      name\n    }\n    isExpired\n    project {\n      id\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectInvitationResendInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitationResend",
    type: "mutation",
  }),
);
export type ProjectInvitationResendInput =
  typeof ProjectInvitationResendInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInvitationResendOutput = Schema.Struct({
  email: Schema.String,
  expiresAt: Schema.String,
  id: Schema.String,
  inviter: Schema.NullOr(
    Schema.Struct({
      email: Schema.String,
      name: Schema.NullOr(Schema.String),
    }),
  ),
  isExpired: Schema.Boolean,
  project: Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
}).pipe(T.ResponsePath("projectInvitationResend"));
export type ProjectInvitationResendOutput =
  typeof ProjectInvitationResendOutput.Type;

/**
 * Resend an invitation for a project
 */
export const projectInvitationResend = API.make(() => ({
  inputSchema: ProjectInvitationResendInput,
  outputSchema: ProjectInvitationResendOutput,
}));
