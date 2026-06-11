import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInvitationResend($id: String!) {\n  projectInvitationResend(id: $id) {\n    email\n    expiresAt\n    id\n    inviter {\n      email\n      name\n    }\n    isExpired\n    project {\n      id\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ResendProjectInvitationInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitationResend",
    type: "mutation",
  }),
);
export type ResendProjectInvitationInput =
  typeof ResendProjectInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const ResendProjectInvitationOutput = Schema.Struct({
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
export type ResendProjectInvitationOutput =
  typeof ResendProjectInvitationOutput.Type;

/**
 * Resend an invitation for a project
 */
export const resendProjectInvitation = API.make(() => ({
  inputSchema: ResendProjectInvitationInput,
  outputSchema: ResendProjectInvitationOutput,
}));
