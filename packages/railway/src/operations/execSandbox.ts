import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation execSandbox($command: String!, $environmentId: String!, $id: String!, $timeoutSec: Int) {\n  sandboxExec(command: $command, environmentId: $environmentId, id: $id, timeoutSec: $timeoutSec) {\n    exitCode\n    stderr\n    stdout\n    timedOut\n    truncated\n  }\n}";

// Input Schema (GraphQL variables)
export const ExecSandboxInput = Schema.Struct({
  command: Schema.String,
  environmentId: Schema.String,
  id: Schema.String,
  timeoutSec: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "execSandbox",
    type: "mutation",
  }),
);
export type ExecSandboxInput = typeof ExecSandboxInput.Type;

// Output Schema (GraphQL selection set)
export const ExecSandboxOutput = Schema.Struct({
  exitCode: Schema.Number,
  stderr: Schema.String,
  stdout: Schema.String,
  timedOut: Schema.Boolean,
  truncated: Schema.Boolean,
}).pipe(T.ResponsePath("sandboxExec"));
export type ExecSandboxOutput = typeof ExecSandboxOutput.Type;

/**
 * Execute a command inside a running sandbox.
 */
export const execSandbox = API.make(() => ({
  inputSchema: ExecSandboxInput,
  outputSchema: ExecSandboxOutput,
}));
