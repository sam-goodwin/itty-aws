import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation apiTokenDelete($id: String!) {\n  apiTokenDelete(id: $id)\n}";

// Input Schema (GraphQL variables)
export const DeleteApiTokenInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "apiTokenDelete",
    type: "mutation",
  }),
);
export type DeleteApiTokenInput = typeof DeleteApiTokenInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteApiTokenOutput = Schema.Boolean.pipe(
  T.ResponsePath("apiTokenDelete"),
);
export type DeleteApiTokenOutput = typeof DeleteApiTokenOutput.Type;

/**
 * Deletes an API token.
 */
export const deleteApiToken = API.make(() => ({
  inputSchema: DeleteApiTokenInput,
  outputSchema: DeleteApiTokenOutput,
}));
