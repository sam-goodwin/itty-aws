import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteProjectToken($id: String!) {\n  projectTokenDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteProjectTokenInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteProjectToken",
    type: "mutation",
  }),
);
export type DeleteProjectTokenInput = typeof DeleteProjectTokenInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteProjectTokenOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectTokenDelete"),
);
export type DeleteProjectTokenOutput = typeof DeleteProjectTokenOutput.Type;

/**
 * Delete a project token
 */
export const deleteProjectToken = API.make(() => ({
  inputSchema: DeleteProjectTokenInput,
  outputSchema: DeleteProjectTokenOutput,
}));
