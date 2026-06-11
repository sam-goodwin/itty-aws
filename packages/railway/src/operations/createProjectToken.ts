import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectTokenCreate($input: ProjectTokenCreateInput!) {\n  projectTokenCreate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateProjectTokenInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    name: Schema.String,
    projectId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectTokenCreate",
    type: "mutation",
  }),
);
export type CreateProjectTokenInput = typeof CreateProjectTokenInput.Type;

// Output Schema (GraphQL selection set)
export const CreateProjectTokenOutput = Schema.String.pipe(
  T.ResponsePath("projectTokenCreate"),
);
export type CreateProjectTokenOutput = typeof CreateProjectTokenOutput.Type;

/**
 * Create a token for a project that has access to a specific environment
 */
export const createProjectToken = API.make(() => ({
  inputSchema: CreateProjectTokenInput,
  outputSchema: CreateProjectTokenOutput,
}));
