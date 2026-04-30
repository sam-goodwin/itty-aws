import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation accessToken {\n  accessToken\n}";

// Input Schema (GraphQL variables)
export const AccessTokenInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accessToken",
    type: "mutation",
  }),
);
export type AccessTokenInput = typeof AccessTokenInput.Type;

// Output Schema (GraphQL selection set)
export const AccessTokenOutput = Schema.Unknown;
export type AccessTokenOutput = typeof AccessTokenOutput.Type;

/**
 * Mutations that create, read, update, and delete AccessTokens for Actors
 */
export const accessToken = API.make(() => ({
  inputSchema: AccessTokenInput,
  outputSchema: AccessTokenOutput,
}));
