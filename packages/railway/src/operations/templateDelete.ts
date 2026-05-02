import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation templateDelete($id: String!, $input: TemplateDeleteInput!) {\n  templateDelete(id: $id, input: $input)\n}";

// Input Schema (GraphQL variables)
export const TemplateDeleteInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateDelete",
    type: "mutation",
  }),
);
export type TemplateDeleteInput = typeof TemplateDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const TemplateDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("templateDelete"),
);
export type TemplateDeleteOutput = typeof TemplateDeleteOutput.Type;

/**
 * Deletes a template.
 */
export const templateDelete = API.make(() => ({
  inputSchema: TemplateDeleteInput,
  outputSchema: TemplateDeleteOutput,
}));
