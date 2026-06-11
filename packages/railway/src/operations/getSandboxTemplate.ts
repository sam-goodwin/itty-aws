import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query sandboxTemplate($environmentId: String!, $id: ID!) {\n  sandboxTemplate(environmentId: $environmentId, id: $id) {\n    environmentId\n    id\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const GetSandboxTemplateInput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sandboxTemplate",
    type: "query",
  }),
);
export type GetSandboxTemplateInput = typeof GetSandboxTemplateInput.Type;

// Output Schema (GraphQL selection set)
export const GetSandboxTemplateOutput = Schema.Struct({
  environmentId: Schema.String,
  id: Schema.String,
  status: Schema.Literals(["BUILDING", "FAILED", "PENDING", "READY"]),
}).pipe(T.ResponsePath("sandboxTemplate"));
export type GetSandboxTemplateOutput = typeof GetSandboxTemplateOutput.Type;

/**
 * Get the status of a sandbox template.
 */
export const getSandboxTemplate = API.make(() => ({
  inputSchema: GetSandboxTemplateInput,
  outputSchema: GetSandboxTemplateOutput,
}));
