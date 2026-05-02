import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation integrationUpdate($id: String!, $input: IntegrationUpdateInput!) {\n  integrationUpdate(id: $id, input: $input) {\n    config\n    id\n    name\n    projectId\n  }\n}";

// Input Schema (GraphQL variables)
export const IntegrationUpdateInput = Schema.Struct({
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
    operationName: "integrationUpdate",
    type: "mutation",
  }),
);
export type IntegrationUpdateInput = typeof IntegrationUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const IntegrationUpdateOutput = Schema.Struct({
  config: Schema.Unknown,
  id: Schema.String,
  name: Schema.String,
  projectId: Schema.String,
}).pipe(T.ResponsePath("integrationUpdate"));
export type IntegrationUpdateOutput = typeof IntegrationUpdateOutput.Type;

/**
 * Update an integration for a project
 */
export const integrationUpdate = API.make(() => ({
  inputSchema: IntegrationUpdateInput,
  outputSchema: IntegrationUpdateOutput,
}));
