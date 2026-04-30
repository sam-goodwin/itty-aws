import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query updates {\n  updates\n}";

// Input Schema (GraphQL variables)
export const UpdatesInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updates",
    type: "query",
  }),
);
export type UpdatesInput = typeof UpdatesInput.Type;

// Output Schema (GraphQL selection set)
export const UpdatesOutput = Schema.Unknown;
export type UpdatesOutput = typeof UpdatesOutput.Type;

/**
 * Top-level query object for querying Updates.
 */
export const updates = API.make(() => ({
  inputSchema: UpdatesInput,
  outputSchema: UpdatesOutput,
}));
