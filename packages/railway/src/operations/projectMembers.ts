import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectMembers($projectId: String!) {\n  projectMembers(projectId: $projectId) {\n    avatar\n    email\n    id\n    name\n    role\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectMembersInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectMembers",
    type: "query",
  }),
);
export type ProjectMembersInput = typeof ProjectMembersInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectMembersOutput = Schema.Array(
  Schema.Struct({
    avatar: Schema.NullOr(Schema.String),
    email: Schema.String,
    id: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
  }),
).pipe(T.ResponsePath("projectMembers"));
export type ProjectMembersOutput = typeof ProjectMembersOutput.Type;

/**
 * Gets users who belong to a project along with their role
 */
export const projectMembers = API.make(() => ({
  inputSchema: ProjectMembersInput,
  outputSchema: ProjectMembersOutput,
}));
