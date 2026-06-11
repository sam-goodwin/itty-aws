import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sessionDelete($id: String!) {\n  sessionDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteSessionInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sessionDelete",
    type: "mutation",
  }),
);
export type DeleteSessionInput = typeof DeleteSessionInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteSessionOutput = Schema.Boolean.pipe(
  T.ResponsePath("sessionDelete"),
);
export type DeleteSessionOutput = typeof DeleteSessionOutput.Type;

/**
 * Deletes a session.
 */
export const deleteSession = API.make(() => ({
  inputSchema: DeleteSessionInput,
  outputSchema: DeleteSessionOutput,
}));
