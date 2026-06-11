import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation destroySandbox($environmentId: String!, $id: String!) {\n  sandboxDestroy(environmentId: $environmentId, id: $id) {\n    createdAt\n    environmentId\n    id\n    idleTimeoutMinutes\n    networkIsolation\n    region\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const DestroySandboxInput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "destroySandbox",
    type: "mutation",
  }),
);
export type DestroySandboxInput = typeof DestroySandboxInput.Type;

// Output Schema (GraphQL selection set)
export const DestroySandboxOutput = Schema.NullOr(
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
).pipe(T.ResponsePath("sandboxDestroy"));
export type DestroySandboxOutput = typeof DestroySandboxOutput.Type;

/**
 * Destroy a sandbox.
 */
export const destroySandbox = API.make(() => ({
  inputSchema: DestroySandboxInput,
  outputSchema: DestroySandboxOutput,
}));
