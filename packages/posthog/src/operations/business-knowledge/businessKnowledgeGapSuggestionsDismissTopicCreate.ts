import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const BusinessKnowledgeGapSuggestionsDismissTopicCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    normalized_topic: Schema.String,
    resolved_source_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/business_knowledge/gap_suggestions/dismiss_topic/",
    }),
  );
export type BusinessKnowledgeGapSuggestionsDismissTopicCreateInput =
  typeof BusinessKnowledgeGapSuggestionsDismissTopicCreateInput.Type;

// Output Schema
export const BusinessKnowledgeGapSuggestionsDismissTopicCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    normalized_topic: Schema.String,
    updated: Schema.Number,
  });
export type BusinessKnowledgeGapSuggestionsDismissTopicCreateOutput =
  typeof BusinessKnowledgeGapSuggestionsDismissTopicCreateOutput.Type;

// The operation
/**
 * Dismiss all pending suggestions for a normalized topic cluster.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeGapSuggestionsDismissTopicCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeGapSuggestionsDismissTopicCreateInput,
    outputSchema: BusinessKnowledgeGapSuggestionsDismissTopicCreateOutput,
  }));
