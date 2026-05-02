import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectTokenDelete($id: String!) {\n  projectTokenDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectTokenDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectTokenDelete",
    type: "mutation",
  }),
);
export type ProjectTokenDeleteInput = typeof ProjectTokenDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectTokenDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTokenDelete"),
);
export type ProjectTokenDeleteOutput = typeof ProjectTokenDeleteOutput.Type;

/**
 * Delete a project token
 */
export const projectTokenDelete = API.make(() => ({
  inputSchema: ProjectTokenDeleteInput,
  outputSchema: ProjectTokenDeleteOutput,
}));
