import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query apiToken {\n  apiToken {\n    workspaces {\n      id\n      name\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetApiTokenInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "apiToken",
    type: "query",
  }),
);
export type GetApiTokenInput = typeof GetApiTokenInput.Type;

// Output Schema (GraphQL selection set)
export const GetApiTokenOutput = Schema.Struct({
  workspaces: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
  ),
}).pipe(T.ResponsePath("apiToken"));
export type GetApiTokenOutput = typeof GetApiTokenOutput.Type;

/**
 * Introspect the current API token and its accessible workspaces.
 */
export const getApiToken = API.make(() => ({
  inputSchema: GetApiTokenInput,
  outputSchema: GetApiTokenOutput,
}));
