import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectMemberUpdate($input: ProjectMemberUpdateInput!) {\n  projectMemberUpdate(input: $input) {\n    avatar\n    email\n    id\n    name\n    role\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateProjectMemberInput = Schema.Struct({
  input: Schema.Struct({
    projectId: Schema.String,
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
    userId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectMemberUpdate",
    type: "mutation",
  }),
);
export type UpdateProjectMemberInput = typeof UpdateProjectMemberInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateProjectMemberOutput = Schema.Struct({
  avatar: Schema.NullOr(Schema.String),
  email: Schema.String,
  id: Schema.String,
  name: Schema.NullOr(Schema.String),
  role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
}).pipe(T.ResponsePath("projectMemberUpdate"));
export type UpdateProjectMemberOutput = typeof UpdateProjectMemberOutput.Type;

/**
 * Change the role for a user within a project
 */
export const updateProjectMember = API.make(() => ({
  inputSchema: UpdateProjectMemberInput,
  outputSchema: UpdateProjectMemberOutput,
}));
