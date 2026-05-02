import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query functionRuntimes {\n  functionRuntimes {\n    image\n    latestVersion {\n      image\n      tag\n    }\n    name\n    versions {\n      image\n      tag\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const FunctionRuntimesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "functionRuntimes",
    type: "query",
  }),
);
export type FunctionRuntimesInput = typeof FunctionRuntimesInput.Type;

// Output Schema (GraphQL selection set)
export const FunctionRuntimesOutput = Schema.Array(
  Schema.Struct({
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
  }),
).pipe(T.ResponsePath("functionRuntimes"));
export type FunctionRuntimesOutput = typeof FunctionRuntimesOutput.Type;

/**
 * List available function runtimes
 */
export const functionRuntimes = API.make(() => ({
  inputSchema: FunctionRuntimesInput,
  outputSchema: FunctionRuntimesOutput,
}));
