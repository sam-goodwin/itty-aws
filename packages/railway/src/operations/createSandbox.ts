import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createSandbox($input: SandboxCreateInput!) {\n  sandboxCreate(input: $input) {\n    createdAt\n    environmentId\n    id\n    idleTimeoutMinutes\n    networkIsolation\n    region\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateSandboxInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    idleTimeoutMinutes: Schema.optional(Schema.NullOr(Schema.Number)),
    networkIsolation: Schema.optional(
      Schema.NullOr(Schema.Literals(["ISOLATED", "PRIVATE"])),
    ),
    sourceSandboxId: Schema.optional(Schema.NullOr(Schema.String)),
    template: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          baseImageDigest: Schema.optional(Schema.NullOr(Schema.String)),
          instructions: Schema.Array(Schema.String),
          variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
        }),
      ),
    ),
    variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "createSandbox",
    type: "mutation",
  }),
);
export type CreateSandboxInput = typeof CreateSandboxInput.Type;

// Output Schema (GraphQL selection set)
export const CreateSandboxOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("sandboxCreate"));
export type CreateSandboxOutput = typeof CreateSandboxOutput.Type;

/**
 * Create a sandbox in an environment.
 */
export const createSandbox = API.make(() => ({
  inputSchema: CreateSandboxInput,
  outputSchema: CreateSandboxOutput,
}));
