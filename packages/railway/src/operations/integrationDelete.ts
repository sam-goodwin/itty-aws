import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation integrationDelete($id: String!) {\n  integrationDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const IntegrationDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "integrationDelete",
    type: "mutation",
  }),
);
export type IntegrationDeleteInput = typeof IntegrationDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const IntegrationDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("integrationDelete"),
);
export type IntegrationDeleteOutput = typeof IntegrationDeleteOutput.Type;

/**
 * Delete an integration for a project
 */
export const integrationDelete = API.make(() => ({
  inputSchema: IntegrationDeleteInput,
  outputSchema: IntegrationDeleteOutput,
}));
