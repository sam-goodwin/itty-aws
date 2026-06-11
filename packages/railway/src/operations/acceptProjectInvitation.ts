import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInvitationAccept($code: String!) {\n  projectInvitationAccept(code: $code) {\n    id\n    projectId\n    role\n    userId\n  }\n}";

// Input Schema (GraphQL variables)
export const AcceptProjectInvitationInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitationAccept",
    type: "mutation",
  }),
);
export type AcceptProjectInvitationInput =
  typeof AcceptProjectInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const AcceptProjectInvitationOutput = Schema.Struct({
  id: Schema.String,
  projectId: Schema.String,
  role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
  userId: Schema.String,
}).pipe(T.ResponsePath("projectInvitationAccept"));
export type AcceptProjectInvitationOutput =
  typeof AcceptProjectInvitationOutput.Type;

/**
 * Accept a project invitation using the invite code
 */
export const acceptProjectInvitation = API.make(() => ({
  inputSchema: AcceptProjectInvitationInput,
  outputSchema: AcceptProjectInvitationOutput,
}));
