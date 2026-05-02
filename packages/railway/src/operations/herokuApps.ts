import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query herokuApps {\n  herokuApps {\n    id\n    name\n  }\n}";

// Input Schema (GraphQL variables)
export const HerokuAppsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "herokuApps",
    type: "query",
  }),
);
export type HerokuAppsInput = typeof HerokuAppsInput.Type;

// Output Schema (GraphQL selection set)
export const HerokuAppsOutput = Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
).pipe(T.ResponsePath("herokuApps"));
export type HerokuAppsOutput = typeof HerokuAppsOutput.Type;

/**
 * Get the Herokus apps for the current user
 */
export const herokuApps = API.make(() => ({
  inputSchema: HerokuAppsInput,
  outputSchema: HerokuAppsOutput,
}));
