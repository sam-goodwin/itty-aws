import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query platformStatus {\n  platformStatus {\n    incident {\n      id\n      message\n      status\n      url\n    }\n    isStable\n    maintenance {\n      id\n      message\n      start\n      status\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const PlatformStatusInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "platformStatus",
    type: "query",
  }),
);
export type PlatformStatusInput = typeof PlatformStatusInput.Type;

// Output Schema (GraphQL selection set)
export const PlatformStatusOutput = Schema.Struct({
  incident: Schema.NullOr(
    Schema.Struct({
      id: Schema.String,
      message: Schema.String,
      status: Schema.Literals([
        "IDENTIFIED",
        "INVESTIGATING",
        "MONITORING",
        "RESOLVED",
      ]),
      url: Schema.String,
    }),
  ),
  isStable: Schema.Boolean,
  maintenance: Schema.NullOr(
    Schema.Struct({
      id: Schema.String,
      message: Schema.String,
      start: Schema.String,
      status: Schema.Literals(["COMPLETED", "INPROGRESS", "NOTSTARTEDYET"]),
      url: Schema.String,
    }),
  ),
}).pipe(T.ResponsePath("platformStatus"));
export type PlatformStatusOutput = typeof PlatformStatusOutput.Type;

/**
 * Get the current status of the platform
 */
export const platformStatus = API.make(() => ({
  inputSchema: PlatformStatusInput,
  outputSchema: PlatformStatusOutput,
}));
