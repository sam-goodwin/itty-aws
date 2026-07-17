import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeGapSuggestionsAcceptTopicCreateInput {
  project_id: string;
  normalized_topic: string;
  resolved_source_id?: string | null;
}
export const BusinessKnowledgeGapSuggestionsAcceptTopicCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    normalized_topic: Schema.String,
    resolved_source_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/business_knowledge/gap_suggestions/accept_topic/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeGapSuggestionsAcceptTopicCreateInput>;

// Output Schema
export interface BusinessKnowledgeGapSuggestionsAcceptTopicCreateOutput {
  normalized_topic: string;
  updated: number;
}
export const BusinessKnowledgeGapSuggestionsAcceptTopicCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    normalized_topic: Schema.String,
    updated: Schema.Number,
  }) as unknown as Schema.Codec<BusinessKnowledgeGapSuggestionsAcceptTopicCreateOutput>;

// The operation
/**
 * Accept all pending suggestions for a normalized topic cluster.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeGapSuggestionsAcceptTopicCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeGapSuggestionsAcceptTopicCreateInput,
    outputSchema: BusinessKnowledgeGapSuggestionsAcceptTopicCreateOutput,
  }));
