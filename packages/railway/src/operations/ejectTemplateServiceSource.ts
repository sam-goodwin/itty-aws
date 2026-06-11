import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation templateServiceSourceEject($input: TemplateServiceSourceEjectInput!) {\n  templateServiceSourceEject(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const EjectTemplateServiceSourceInput = Schema.Struct({
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
export type EjectTemplateServiceSourceInput =
  typeof EjectTemplateServiceSourceInput.Type;

// Output Schema (GraphQL selection set)
export const EjectTemplateServiceSourceOutput = Schema.Boolean.pipe(
  T.ResponsePath("templateServiceSourceEject"),
);
export type EjectTemplateServiceSourceOutput =
  typeof EjectTemplateServiceSourceOutput.Type;

/**
 * Ejects a service from the template and creates a new repo in the provided org.
 */
export const ejectTemplateServiceSource = API.make(() => ({
  inputSchema: EjectTemplateServiceSourceInput,
  outputSchema: EjectTemplateServiceSourceOutput,
}));
