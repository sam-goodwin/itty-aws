import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation inviteProjectUser($id: String!, $input: ProjectInviteUserInput!) {\n  projectInviteUser(id: $id, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const InviteProjectUserInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    email: Schema.String,
    link: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "inviteProjectUser",
    type: "mutation",
  }),
);
export type InviteProjectUserInput = typeof InviteProjectUserInput.Type;

// Output Schema (GraphQL selection set)
export const InviteProjectUserOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectInviteUser"),
);
export type InviteProjectUserOutput = typeof InviteProjectUserOutput.Type;

/**
 * Invite a user by email to a project
 */
export const inviteProjectUser = API.make(() => ({
  inputSchema: InviteProjectUserInput,
  outputSchema: InviteProjectUserOutput,
}));
