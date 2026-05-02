import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation templateUnpublish($id: String!) {\n  templateUnpublish(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TemplateUnpublishInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateUnpublish",
    type: "mutation",
  }),
);
export type TemplateUnpublishInput = typeof TemplateUnpublishInput.Type;

// Output Schema (GraphQL selection set)
export const TemplateUnpublishOutput = Schema.Boolean.pipe(
  T.ResponsePath("templateUnpublish"),
);
export type TemplateUnpublishOutput = typeof TemplateUnpublishOutput.Type;

/**
 * Unpublishes a template.
 */
export const templateUnpublish = API.make(() => ({
  inputSchema: TemplateUnpublishInput,
  outputSchema: TemplateUnpublishOutput,
}));
