import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation integrationCreate($input: IntegrationCreateInput!) {\n  integrationCreate(input: $input) {\n    config\n    id\n    name\n    projectId\n  }\n}";

// Input Schema (GraphQL variables)
export const IntegrationCreateInput = Schema.Struct({
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
    operationName: "integrationCreate",
    type: "mutation",
  }),
);
export type IntegrationCreateInput = typeof IntegrationCreateInput.Type;

// Output Schema (GraphQL selection set)
export const IntegrationCreateOutput = Schema.Struct({
  config: Schema.Unknown,
  id: Schema.String,
  name: Schema.String,
  projectId: Schema.String,
}).pipe(T.ResponsePath("integrationCreate"));
export type IntegrationCreateOutput = typeof IntegrationCreateOutput.Type;

/**
 * Create an integration for a project
 */
export const integrationCreate = API.make(() => ({
  inputSchema: IntegrationCreateInput,
  outputSchema: IntegrationCreateOutput,
}));
