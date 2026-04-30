import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation appVersion {\n  appVersion\n}";

// Input Schema (GraphQL variables)
export const AppVersionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appVersion",
    type: "mutation",
  }),
);
export type AppVersionInput = typeof AppVersionInput.Type;

// Output Schema (GraphQL selection set)
export const AppVersionOutput = Schema.Unknown;
export type AppVersionOutput = typeof AppVersionOutput.Type;

/**
 * Mutations that modify an AppVersion
 */
export const appVersion = API.make(() => ({
  inputSchema: AppVersionInput,
  outputSchema: AppVersionOutput,
}));
