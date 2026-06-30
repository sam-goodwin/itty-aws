import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation embeddedUpdateDeleteEmbeddedUpdate($id: ID!) {\n  embeddedUpdate {\n    deleteEmbeddedUpdate(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EmbeddedUpdateDeleteEmbeddedUpdateInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "embeddedUpdateDeleteEmbeddedUpdate",
    type: "mutation",
  }),
);
export type EmbeddedUpdateDeleteEmbeddedUpdateInput =
  typeof EmbeddedUpdateDeleteEmbeddedUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const EmbeddedUpdateDeleteEmbeddedUpdateOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("embeddedUpdate.deleteEmbeddedUpdate"));
export type EmbeddedUpdateDeleteEmbeddedUpdateOutput =
  typeof EmbeddedUpdateDeleteEmbeddedUpdateOutput.Type;

export const embeddedUpdateDeleteEmbeddedUpdate = API.make(() => ({
  inputSchema: EmbeddedUpdateDeleteEmbeddedUpdateInput,
  outputSchema: EmbeddedUpdateDeleteEmbeddedUpdateOutput,
}));
