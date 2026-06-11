import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getFunctionRuntimes {\n  functionRuntimes {\n    image\n    latestVersion {\n      image\n      tag\n    }\n    name\n    versions {\n      image\n      tag\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetFunctionRuntimesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getFunctionRuntimes",
    type: "query",
  }),
);
export type GetFunctionRuntimesInput = typeof GetFunctionRuntimesInput.Type;

// Output Schema (GraphQL selection set)
export const GetFunctionRuntimesOutput = Schema.Array(
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
export type GetFunctionRuntimesOutput = typeof GetFunctionRuntimesOutput.Type;

/**
 * List available function runtimes
 */
export const getFunctionRuntimes = API.make(() => ({
  inputSchema: GetFunctionRuntimesInput,
  outputSchema: GetFunctionRuntimesOutput,
}));
