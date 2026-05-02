import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation templateServiceSourceEject($input: TemplateServiceSourceEjectInput!) {\n  templateServiceSourceEject(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TemplateServiceSourceEjectInput = Schema.Struct({
  input: Schema.Struct({
    projectId: Schema.String,
    repoName: Schema.String,
    repoOwner: Schema.String,
    serviceIds: Schema.Array(Schema.String),
    upstreamUrl: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateServiceSourceEject",
    type: "mutation",
  }),
);
export type TemplateServiceSourceEjectInput =
  typeof TemplateServiceSourceEjectInput.Type;

// Output Schema (GraphQL selection set)
export const TemplateServiceSourceEjectOutput = Schema.Boolean.pipe(
  T.ResponsePath("templateServiceSourceEject"),
);
export type TemplateServiceSourceEjectOutput =
  typeof TemplateServiceSourceEjectOutput.Type;

/**
 * Ejects a service from the template and creates a new repo in the provided org.
 */
export const templateServiceSourceEject = API.make(() => ({
  inputSchema: TemplateServiceSourceEjectInput,
  outputSchema: TemplateServiceSourceEjectOutput,
}));
