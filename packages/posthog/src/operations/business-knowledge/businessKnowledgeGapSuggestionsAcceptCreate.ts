import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeGapSuggestionsAcceptCreateInput {
  id: string;
  project_id: string;
  resolved_source_id?: string | null;
}
export const BusinessKnowledgeGapSuggestionsAcceptCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    resolved_source_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/business_knowledge/gap_suggestions/{id}/accept/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeGapSuggestionsAcceptCreateInput>;

// Output Schema
export interface BusinessKnowledgeGapSuggestionsAcceptCreateOutput {
  id: string;
  ticket_id: string;
  topic: string;
  normalized_topic: string;
  ticket_type: string;
  outcome: string;
  status: string;
  resolved_source_id: string | null;
  created_at: string;
}
export const BusinessKnowledgeGapSuggestionsAcceptCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    ticket_id: Schema.String,
    topic: Schema.String,
    normalized_topic: Schema.String,
    ticket_type: Schema.String,
    outcome: Schema.String,
    status: Schema.String,
    resolved_source_id: Schema.NullOr(Schema.String),
    created_at: Schema.String,
  }) as unknown as Schema.Codec<BusinessKnowledgeGapSuggestionsAcceptCreateOutput>;

// The operation
/**
 * Surfaces topics the support AI couldn't answer from the knowledge base.
 * Two list shapes controlled by the ``ticket_id`` query param:
 * - **per-ticket** (``?ticket_id=<uuid>``): individual gap rows for that ticket.
 * - **aggregated** (no ``ticket_id``): gaps grouped by normalized topic with counts,
 * for the Business knowledge suggestions panel.
 *
 * @param id - A UUID string identifying this knowledge gap suggestion.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const businessKnowledgeGapSuggestionsAcceptCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeGapSuggestionsAcceptCreateInput,
    outputSchema: BusinessKnowledgeGapSuggestionsAcceptCreateOutput,
  }));
