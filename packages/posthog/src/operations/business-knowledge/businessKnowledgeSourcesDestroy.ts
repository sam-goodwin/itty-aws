import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const BusinessKnowledgeSourcesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/business_knowledge/sources/{id}/",
    }),
  );
export type BusinessKnowledgeSourcesDestroyInput =
  typeof BusinessKnowledgeSourcesDestroyInput.Type;

// Output Schema
export const BusinessKnowledgeSourcesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BusinessKnowledgeSourcesDestroyOutput =
  typeof BusinessKnowledgeSourcesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this knowledge source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeSourcesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeSourcesDestroyInput,
    outputSchema: BusinessKnowledgeSourcesDestroyOutput,
  }));
