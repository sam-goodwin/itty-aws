import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation update {\n  update\n}";

// Input Schema (GraphQL variables)
export const UpdateInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "update",
    type: "mutation",
  }),
);
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateOutput = Schema.Unknown;
export type UpdateOutput = typeof UpdateOutput.Type;

export const update = API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
}));
