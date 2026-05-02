import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInvitationCreate($id: String!, $input: ProjectInvitee!) {\n  projectInvitationCreate(id: $id, input: $input) {\n    email\n    expiresAt\n    id\n    inviter {\n      email\n      name\n    }\n    isExpired\n    project {\n      id\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectInvitationCreateInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    email: Schema.String,
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitationCreate",
    type: "mutation",
  }),
);
export type ProjectInvitationCreateInput =
  typeof ProjectInvitationCreateInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInvitationCreateOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("projectInvitationCreate"));
export type ProjectInvitationCreateOutput =
  typeof ProjectInvitationCreateOutput.Type;

/**
 * Create an invitation for a project
 */
export const projectInvitationCreate = API.make(() => ({
  inputSchema: ProjectInvitationCreateInput,
  outputSchema: ProjectInvitationCreateOutput,
}));
