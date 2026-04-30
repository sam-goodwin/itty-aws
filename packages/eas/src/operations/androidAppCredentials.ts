import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidAppCredentials {\n  androidAppCredentials\n}";

// Input Schema (GraphQL variables)
export const AndroidAppCredentialsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidAppCredentials",
    type: "mutation",
  }),
);
export type AndroidAppCredentialsInput = typeof AndroidAppCredentialsInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidAppCredentialsOutput = Schema.Unknown;
export type AndroidAppCredentialsOutput =
  typeof AndroidAppCredentialsOutput.Type;

/**
 * Mutations that modify the credentials for an Android app
 */
export const androidAppCredentials = API.make(() => ({
  inputSchema: AndroidAppCredentialsInput,
  outputSchema: AndroidAppCredentialsOutput,
}));
