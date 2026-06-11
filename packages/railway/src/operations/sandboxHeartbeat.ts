import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sandboxHeartbeat($environmentId: String!, $id: String!) {\n  sandboxHeartbeat(environmentId: $environmentId, id: $id) {\n    createdAt\n    environmentId\n    id\n    idleTimeoutMinutes\n    networkIsolation\n    region\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const SandboxHeartbeatInput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sandboxHeartbeat",
    type: "mutation",
  }),
);
export type SandboxHeartbeatInput = typeof SandboxHeartbeatInput.Type;

// Output Schema (GraphQL selection set)
export const SandboxHeartbeatOutput = Schema.NullOr(
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
).pipe(T.ResponsePath("sandboxHeartbeat"));
export type SandboxHeartbeatOutput = typeof SandboxHeartbeatOutput.Type;

/**
 * Extend a sandbox's lifetime.
 */
export const sandboxHeartbeat = API.make(() => ({
  inputSchema: SandboxHeartbeatInput,
  outputSchema: SandboxHeartbeatOutput,
}));
