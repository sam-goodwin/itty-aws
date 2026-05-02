import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation apiTokenDelete($id: String!) {\n  apiTokenDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const ApiTokenDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "apiTokenDelete",
    type: "mutation",
  }),
);
export type ApiTokenDeleteInput = typeof ApiTokenDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ApiTokenDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("apiTokenDelete"),
);
export type ApiTokenDeleteOutput = typeof ApiTokenDeleteOutput.Type;

/**
 * Deletes an API token.
 */
export const apiTokenDelete = API.make(() => ({
  inputSchema: ApiTokenDeleteInput,
  outputSchema: ApiTokenDeleteOutput,
}));
