import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation createIntegration($input: IntegrationCreateInput!) {\n  integrationCreate(input: $input) {\n    config\n    id\n    name\n    projectId\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateIntegrationInput = Schema.Struct({
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
    operationName: "createIntegration",
    type: "mutation",
  }),
);
export type CreateIntegrationInput = typeof CreateIntegrationInput.Type;

// Output Schema (GraphQL selection set)
export const CreateIntegrationOutput = Schema.Struct({
  config: Schema.Unknown,
  id: Schema.String,
  name: Schema.String,
  projectId: Schema.String,
}).pipe(T.ResponsePath("integrationCreate"));
export type CreateIntegrationOutput = typeof CreateIntegrationOutput.Type;

/**
 * Create an integration for a project
 */
export const createIntegration = API.make(() => ({
  inputSchema: CreateIntegrationInput,
  outputSchema: CreateIntegrationOutput,
}));
