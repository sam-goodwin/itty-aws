import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInviteUser($id: String!, $input: ProjectInviteUserInput!) {\n  projectInviteUser(id: $id, input: $input)\n}";

// Input Schema (GraphQL variables)
export const ProjectInviteUserInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    email: Schema.String,
    link: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInviteUser",
    type: "mutation",
  }),
);
export type ProjectInviteUserInput = typeof ProjectInviteUserInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInviteUserOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectInviteUser"),
);
export type ProjectInviteUserOutput = typeof ProjectInviteUserOutput.Type;

/**
 * Invite a user by email to a project
 */
export const projectInviteUser = API.make(() => ({
  inputSchema: ProjectInviteUserInput,
  outputSchema: ProjectInviteUserOutput,
}));
