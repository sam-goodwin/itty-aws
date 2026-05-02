import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation templateDeployV2($input: TemplateDeployV2Input!) {\n  templateDeployV2(input: $input) {\n    projectId\n    workflowId\n  }\n}";

// Input Schema (GraphQL variables)
export const TemplateDeployV2Input = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.optional(Schema.NullOr(Schema.String)),
    projectId: Schema.optional(Schema.NullOr(Schema.String)),
    serializedConfig: Schema.Unknown,
    templateId: Schema.String,
    workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateDeployV2",
    type: "mutation",
  }),
);
export type TemplateDeployV2Input = typeof TemplateDeployV2Input.Type;

// Output Schema (GraphQL selection set)
export const TemplateDeployV2Output = Schema.Struct({
  projectId: Schema.String,
  workflowId: Schema.NullOr(Schema.String),
}).pipe(T.ResponsePath("templateDeployV2"));
export type TemplateDeployV2Output = typeof TemplateDeployV2Output.Type;

/**
 * Deploys a template using the serialized template config
 */
export const templateDeployV2 = API.make(() => ({
  inputSchema: TemplateDeployV2Input,
  outputSchema: TemplateDeployV2Output,
}));
