import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteEnvironment($id: String!) {\n  environmentDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteEnvironmentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteEnvironment",
    type: "mutation",
  }),
);
export type DeleteEnvironmentInput = typeof DeleteEnvironmentInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteEnvironmentOutput = Schema.Boolean.pipe(
  T.ResponsePath("environmentDelete"),
);
export type DeleteEnvironmentOutput = typeof DeleteEnvironmentOutput.Type;

/**
 * Deletes an environment.
 */
export const deleteEnvironment = API.make(() => ({
  inputSchema: DeleteEnvironmentInput,
  outputSchema: DeleteEnvironmentOutput,
}));
