import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectInvitations($id: String!) {\n  projectInvitations(id: $id) {\n    email\n    expiresAt\n    id\n    inviter {\n      email\n      name\n    }\n    isExpired\n    project {\n      id\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectInvitationsInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitations",
    type: "query",
  }),
);
export type ProjectInvitationsInput = typeof ProjectInvitationsInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInvitationsOutput = Schema.Array(
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
export type ProjectInvitationsOutput = typeof ProjectInvitationsOutput.Type;

/**
 * Get invitations for a project
 */
export const projectInvitations = API.make(() => ({
  inputSchema: ProjectInvitationsInput,
  outputSchema: ProjectInvitationsOutput,
}));
