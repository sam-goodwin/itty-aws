import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query snack {\n  snack\n}";

// Input Schema (GraphQL variables)
export const SnackInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "snack",
    type: "query",
  }),
);
export type SnackInput = typeof SnackInput.Type;

// Output Schema (GraphQL selection set)
export const SnackOutput = Schema.Unknown;
export type SnackOutput = typeof SnackOutput.Type;

export const snack = API.make(() => ({
  inputSchema: SnackInput,
  outputSchema: SnackOutput,
}));
