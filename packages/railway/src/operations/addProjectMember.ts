import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectMemberAdd($input: ProjectMemberAddInput!) {\n  projectMemberAdd(input: $input) {\n    avatar\n    email\n    id\n    name\n    role\n  }\n}";

// Input Schema (GraphQL variables)
export const AddProjectMemberInput = Schema.Struct({
  input: Schema.Struct({
    projectId: Schema.String,
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
    userId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectMemberAdd",
    type: "mutation",
  }),
);
export type AddProjectMemberInput = typeof AddProjectMemberInput.Type;

// Output Schema (GraphQL selection set)
export const AddProjectMemberOutput = Schema.Struct({
  avatar: Schema.NullOr(Schema.String),
  email: Schema.String,
  id: Schema.String,
  name: Schema.NullOr(Schema.String),
  role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
}).pipe(T.ResponsePath("projectMemberAdd"));
export type AddProjectMemberOutput = typeof AddProjectMemberOutput.Type;

/**
 * Add a workspace member to a project with a specific role. The user must already be a member of the project's workspace.
 */
export const addProjectMember = API.make(() => ({
  inputSchema: AddProjectMemberInput,
  outputSchema: AddProjectMemberOutput,
}));
