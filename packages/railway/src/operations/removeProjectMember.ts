import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation removeProjectMember($input: ProjectMemberRemoveInput!) {\n  projectMemberRemove(input: $input) {\n    avatar\n    email\n    id\n    name\n    role\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveProjectMemberInput = Schema.Struct({
  input: Schema.Struct({
    projectId: Schema.String,
    userId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "removeProjectMember",
    type: "mutation",
  }),
);
export type RemoveProjectMemberInput = typeof RemoveProjectMemberInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveProjectMemberOutput = Schema.Array(
  Schema.Struct({
    avatar: Schema.NullOr(Schema.String),
    email: Schema.String,
    id: Schema.String,
    name: Schema.NullOr(Schema.String),
    role: Schema.Literals(["ADMIN", "MEMBER", "VIEWER"]),
  }),
).pipe(T.ResponsePath("projectMemberRemove"));
export type RemoveProjectMemberOutput = typeof RemoveProjectMemberOutput.Type;

/**
 * Remove user from a project
 */
export const removeProjectMember = API.make(() => ({
  inputSchema: RemoveProjectMemberInput,
  outputSchema: RemoveProjectMemberOutput,
}));
