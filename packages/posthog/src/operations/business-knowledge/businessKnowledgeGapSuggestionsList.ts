import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface BusinessKnowledgeGapSuggestionsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  ticket_id?: string;
}
export const BusinessKnowledgeGapSuggestionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ticket_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/business_knowledge/gap_suggestions/",
    }),
  ) as unknown as Schema.Codec<BusinessKnowledgeGapSuggestionsListInput>;

// Output Schema
export interface BusinessKnowledgeGapSuggestionsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    ticket_id: string;
    topic: string;
    normalized_topic: string;
    ticket_type: string;
    outcome: string;
    status: string;
    resolved_source_id: string | null;
    created_at: string;
  }[];
}
export const BusinessKnowledgeGapSuggestionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        ticket_id: Schema.String,
        topic: Schema.String,
        normalized_topic: Schema.String,
        ticket_type: Schema.String,
        outcome: Schema.String,
        status: Schema.String,
        resolved_source_id: Schema.NullOr(Schema.String),
        created_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<BusinessKnowledgeGapSuggestionsListOutput>;

// The operation
/**
 * Surfaces topics the support AI couldn't answer from the knowledge base.
 * Two list shapes controlled by the ``ticket_id`` query param:
 * - **per-ticket** (``?ticket_id=<uuid>``): individual gap rows for that ticket.
 * - **aggregated** (no ``ticket_id``): gaps grouped by normalized topic with counts,
 * for the Business knowledge suggestions panel.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param ticket_id - When provided, returns per-ticket gap rows instead of aggregated view. Requires `ticket:read` scope in addition to `business_knowledge:read`.
 */
export const businessKnowledgeGapSuggestionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BusinessKnowledgeGapSuggestionsListInput,
    outputSchema: BusinessKnowledgeGapSuggestionsListOutput,
  }));
