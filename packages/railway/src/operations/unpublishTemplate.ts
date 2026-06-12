import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation templateUnpublish($id: String!) {\n  templateUnpublish(id: $id)\n}";

// Input Schema (GraphQL variables)
export const UnpublishTemplateInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateUnpublish",
    type: "mutation",
  }),
);
export type UnpublishTemplateInput = typeof UnpublishTemplateInput.Type;

// Output Schema (GraphQL selection set)
export const UnpublishTemplateOutput = Schema.Boolean.pipe(
  T.ResponsePath("templateUnpublish"),
);
export type UnpublishTemplateOutput = typeof UnpublishTemplateOutput.Type;

/**
 * Unpublishes a template.
 */
export const unpublishTemplate = API.make(() => ({
  inputSchema: UnpublishTemplateInput,
  outputSchema: UnpublishTemplateOutput,
}));
