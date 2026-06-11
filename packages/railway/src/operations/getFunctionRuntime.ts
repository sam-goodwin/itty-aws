import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getFunctionRuntime($name: FunctionRuntimeName!) {\n  functionRuntime(name: $name) {\n    image\n    latestVersion {\n      image\n      tag\n    }\n    name\n    versions {\n      image\n      tag\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetFunctionRuntimeInput = Schema.Struct({
  name: Schema.Literals(["bun"]),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getFunctionRuntime",
    type: "query",
  }),
);
export type GetFunctionRuntimeInput = typeof GetFunctionRuntimeInput.Type;

// Output Schema (GraphQL selection set)
export const GetFunctionRuntimeOutput = Schema.Struct({
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
export type GetFunctionRuntimeOutput = typeof GetFunctionRuntimeOutput.Type;

/**
 * Get information about a specific function runtime
 */
export const getFunctionRuntime = API.make(() => ({
  inputSchema: GetFunctionRuntimeInput,
  outputSchema: GetFunctionRuntimeOutput,
}));
