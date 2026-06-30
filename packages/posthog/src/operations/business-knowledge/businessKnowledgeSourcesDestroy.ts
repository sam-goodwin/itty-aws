import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeSourcesDestroyInput {
  id: string;
  project_id: string;
}
export const BusinessKnowledgeSourcesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/business_knowledge/sources/{id}/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeSourcesDestroyInput>;

// Output Schema
export type BusinessKnowledgeSourcesDestroyOutput = void;
export const BusinessKnowledgeSourcesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BusinessKnowledgeSourcesDestroyOutput>;

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
