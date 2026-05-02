import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation apiTokenCreate($input: ApiTokenCreateInput!) {\n  apiTokenCreate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ApiTokenCreateInput = Schema.Struct({
  input: Schema.Struct({
    name: Schema.String,
    workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "apiTokenCreate",
    type: "mutation",
  }),
);
export type ApiTokenCreateInput = typeof ApiTokenCreateInput.Type;

// Output Schema (GraphQL selection set)
export const ApiTokenCreateOutput = Schema.String.pipe(
  T.ResponsePath("apiTokenCreate"),
);
export type ApiTokenCreateOutput = typeof ApiTokenCreateOutput.Type;

/**
 * Creates a new API token.
 */
export const apiTokenCreate = API.make(() => ({
  inputSchema: ApiTokenCreateInput,
  outputSchema: ApiTokenCreateOutput,
}));
