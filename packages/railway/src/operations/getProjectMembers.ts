import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectMembers($projectId: String!) {\n  projectMembers(projectId: $projectId) {\n    avatar\n    email\n    id\n    name\n    role\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectMembersInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectMembers",
    type: "query",
  }),
);
export type GetProjectMembersInput = typeof GetProjectMembersInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectMembersOutput = Schema.Array(
  Schema.Struct({
    avatar: Schema.NullOr(Schema.String),
    email: Schema.String,
    id: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
  }),
).pipe(T.ResponsePath("projectMembers"));
export type GetProjectMembersOutput = typeof GetProjectMembersOutput.Type;

/**
 * Gets users who belong to a project along with their role
 */
export const getProjectMembers = API.make(() => ({
  inputSchema: GetProjectMembersInput,
  outputSchema: GetProjectMembersOutput,
}));
