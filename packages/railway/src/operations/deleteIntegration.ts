import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation integrationDelete($id: String!) {\n  integrationDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteIntegrationInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "integrationDelete",
    type: "mutation",
  }),
);
export type DeleteIntegrationInput = typeof DeleteIntegrationInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteIntegrationOutput = Schema.Boolean.pipe(
  T.ResponsePath("integrationDelete"),
);
export type DeleteIntegrationOutput = typeof DeleteIntegrationOutput.Type;

/**
 * Delete an integration for a project
 */
export const deleteIntegration = API.make(() => ({
  inputSchema: DeleteIntegrationInput,
  outputSchema: DeleteIntegrationOutput,
}));
