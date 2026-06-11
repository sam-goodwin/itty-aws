import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateIntegration($id: String!, $input: IntegrationUpdateInput!) {\n  integrationUpdate(id: $id, input: $input) {\n    config\n    id\n    name\n    projectId\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateIntegrationInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    config: Schema.Unknown,
    integrationAuthId: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.String,
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateIntegration",
    type: "mutation",
  }),
);
export type UpdateIntegrationInput = typeof UpdateIntegrationInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateIntegrationOutput = Schema.Struct({
  config: Schema.Unknown,
  id: Schema.String,
  name: Schema.String,
  projectId: Schema.String,
}).pipe(T.ResponsePath("integrationUpdate"));
export type UpdateIntegrationOutput = typeof UpdateIntegrationOutput.Type;

/**
 * Update an integration for a project
 */
export const updateIntegration = API.make(() => ({
  inputSchema: UpdateIntegrationInput,
  outputSchema: UpdateIntegrationOutput,
}));
