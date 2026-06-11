import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deleteTemplate($id: String!, $input: TemplateDeleteInput!) {\n  templateDelete(id: $id, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const DeleteTemplateInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deleteTemplate",
    type: "mutation",
  }),
);
export type DeleteTemplateInput = typeof DeleteTemplateInput.Type;

// Output Schema (GraphQL selection set)
export const DeleteTemplateOutput = Schema.Boolean.pipe(
  T.ResponsePath("templateDelete"),
);
export type DeleteTemplateOutput = typeof DeleteTemplateOutput.Type;

/**
 * Deletes a template.
 */
export const deleteTemplate = API.make(() => ({
  inputSchema: DeleteTemplateInput,
  outputSchema: DeleteTemplateOutput,
}));
