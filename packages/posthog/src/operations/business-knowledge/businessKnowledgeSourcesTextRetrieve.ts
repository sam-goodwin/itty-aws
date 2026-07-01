import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeSourcesTextRetrieveInput {
  id: string;
  project_id: string;
}
export const BusinessKnowledgeSourcesTextRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/business_knowledge/sources/{id}/text/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeSourcesTextRetrieveInput>;

// Output Schema
export interface BusinessKnowledgeSourcesTextRetrieveOutput {
  text?: string;
}
export const BusinessKnowledgeSourcesTextRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BusinessKnowledgeSourcesTextRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this knowledge source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeSourcesTextRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeSourcesTextRetrieveInput,
    outputSchema: BusinessKnowledgeSourcesTextRetrieveOutput,
  }));
