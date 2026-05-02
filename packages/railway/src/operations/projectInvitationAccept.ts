import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInvitationAccept($code: String!) {\n  projectInvitationAccept(code: $code) {\n    id\n    projectId\n    role\n    userId\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectInvitationAcceptInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitationAccept",
    type: "mutation",
  }),
);
export type ProjectInvitationAcceptInput =
  typeof ProjectInvitationAcceptInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInvitationAcceptOutput = Schema.Struct({
  id: Schema.String,
  projectId: Schema.String,
  role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
  userId: Schema.String,
}).pipe(T.ResponsePath("projectInvitationAccept"));
export type ProjectInvitationAcceptOutput =
  typeof ProjectInvitationAcceptOutput.Type;

/**
 * Accept a project invitation using the invite code
 */
export const projectInvitationAccept = API.make(() => ({
  inputSchema: ProjectInvitationAcceptInput,
  outputSchema: ProjectInvitationAcceptOutput,
}));
