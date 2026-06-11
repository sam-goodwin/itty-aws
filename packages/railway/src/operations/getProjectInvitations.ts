import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectInvitations($id: String!) {\n  projectInvitations(id: $id) {\n    email\n    expiresAt\n    id\n    inviter {\n      email\n      name\n    }\n    isExpired\n    project {\n      id\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectInvitationsInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitations",
    type: "query",
  }),
);
export type GetProjectInvitationsInput = typeof GetProjectInvitationsInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectInvitationsOutput = Schema.Array(
  Schema.Struct({
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
  }),
).pipe(T.ResponsePath("projectInvitations"));
export type GetProjectInvitationsOutput =
  typeof GetProjectInvitationsOutput.Type;

/**
 * Get invitations for a project
 */
export const getProjectInvitations = API.make(() => ({
  inputSchema: GetProjectInvitationsInput,
  outputSchema: GetProjectInvitationsOutput,
}));
