import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectLeave($id: String!) {\n  projectLeave(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectLeaveInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectLeave",
    type: "mutation",
  }),
);
export type ProjectLeaveInput = typeof ProjectLeaveInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectLeaveOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectLeave"),
);
export type ProjectLeaveOutput = typeof ProjectLeaveOutput.Type;

/**
 * Leave project as currently authenticated user
 */
export const projectLeave = API.make(() => ({
  inputSchema: ProjectLeaveInput,
  outputSchema: ProjectLeaveOutput,
}));
