import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sandboxTemplateBuild($environmentId: String!, $input: SandboxTemplateInput!) {\n  sandboxTemplateBuild(environmentId: $environmentId, input: $input) {\n    environmentId\n    id\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const BuildSandboxTemplateInput = Schema.Struct({
  environmentId: Schema.String,
  input: Schema.Struct({
    baseImageDigest: Schema.optional(Schema.NullOr(Schema.String)),
    instructions: Schema.Array(Schema.String),
    variables: Schema.optional(Schema.NullOr(Schema.Unknown)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sandboxTemplateBuild",
    type: "mutation",
  }),
);
export type BuildSandboxTemplateInput = typeof BuildSandboxTemplateInput.Type;

// Output Schema (GraphQL selection set)
export const BuildSandboxTemplateOutput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
  status: Schema.Literals(["BUILDING", "FAILED", "PENDING", "READY"]),
}).pipe(T.ResponsePath("sandboxTemplateBuild"));
export type BuildSandboxTemplateOutput = typeof BuildSandboxTemplateOutput.Type;

/**
 * Build a sandbox template.
 */
export const buildSandboxTemplate = API.make(() => ({
  inputSchema: BuildSandboxTemplateInput,
  outputSchema: BuildSandboxTemplateOutput,
}));
