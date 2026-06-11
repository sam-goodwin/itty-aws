import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query sandbox($environmentId: String!, $id: String!) {\n  sandbox(environmentId: $environmentId, id: $id) {\n    createdAt\n    environmentId\n    id\n    idleTimeoutMinutes\n    networkIsolation\n    region\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const GetSandboxInput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sandbox",
    type: "query",
  }),
);
export type GetSandboxInput = typeof GetSandboxInput.Type;

// Output Schema (GraphQL selection set)
export const GetSandboxOutput = Schema.NullOr(
  Schema.Struct({
    createdAt: Schema.String,
    environmentId: Schema.String,
    id: Schema.String,
    idleTimeoutMinutes: Schema.NullOr(Schema.Number),
    networkIsolation: Schema.Literals(["ISOLATED", "PRIVATE"]),
    region: Schema.String,
    status: Schema.Literals([
      "CREATING",
      "DESTROYED",
      "DESTROYING",
      "FAILED",
      "RUNNING",
    ]),
  }),
).pipe(T.ResponsePath("sandbox"));
export type GetSandboxOutput = typeof GetSandboxOutput.Type;

/**
 * Get a sandbox by id.
 */
export const getSandbox = API.make(() => ({
  inputSchema: GetSandboxInput,
  outputSchema: GetSandboxOutput,
}));
