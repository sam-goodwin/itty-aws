import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const BusinessKnowledgeSourcesTextRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/business_knowledge/sources/{id}/text/",
    }),
  );
export type BusinessKnowledgeSourcesTextRetrieveInput =
  typeof BusinessKnowledgeSourcesTextRetrieveInput.Type;

// Output Schema
export const BusinessKnowledgeSourcesTextRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  });
export type BusinessKnowledgeSourcesTextRetrieveOutput =
  typeof BusinessKnowledgeSourcesTextRetrieveOutput.Type;

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
