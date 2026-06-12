import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation apiTokenCreate($input: ApiTokenCreateInput!) {\n  apiTokenCreate(input: $input)\n}";

// Input Schema (GraphQL variables)
export const CreateApiTokenInput = Schema.Struct({
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
export type CreateApiTokenInput = typeof CreateApiTokenInput.Type;

// Output Schema (GraphQL selection set)
export const CreateApiTokenOutput = Schema.String.pipe(
  T.ResponsePath("apiTokenCreate"),
);
export type CreateApiTokenOutput = typeof CreateApiTokenOutput.Type;

/**
 * Creates a new API token.
 */
export const createApiToken = API.make(() => ({
  inputSchema: CreateApiTokenInput,
  outputSchema: CreateApiTokenOutput,
}));
