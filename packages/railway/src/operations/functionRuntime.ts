import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query functionRuntime($name: FunctionRuntimeName!) {\n  functionRuntime(name: $name) {\n    image\n    latestVersion {\n      image\n      tag\n    }\n    name\n    versions {\n      image\n      tag\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const FunctionRuntimeInput = Schema.Struct({
  name: Schema.Literals(["bun"]),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "functionRuntime",
    type: "query",
  }),
);
export type FunctionRuntimeInput = typeof FunctionRuntimeInput.Type;

// Output Schema (GraphQL selection set)
export const FunctionRuntimeOutput = Schema.Struct({
  image: Schema.String,
  latestVersion: Schema.Struct({
    image: Schema.String,
    tag: Schema.String,
  }),
  name: Schema.Literals(["bun"]),
  versions: Schema.Array(
    Schema.Struct({
      image: Schema.String,
      tag: Schema.String,
    }),
  ),
}).pipe(T.ResponsePath("functionRuntime"));
export type FunctionRuntimeOutput = typeof FunctionRuntimeOutput.Type;

/**
 * Get information about a specific function runtime
 */
export const functionRuntime = API.make(() => ({
  inputSchema: FunctionRuntimeInput,
  outputSchema: FunctionRuntimeOutput,
}));
