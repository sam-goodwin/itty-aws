import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface MultiSearchInput {
  multiSearchParameters: string;
  union?: boolean;
  searches: {
    q?: string;
    query_by?: string;
    query_by_weights?: string;
    text_match_type?: string;
    prefix?: string;
    infix?: string;
    max_extra_prefix?: number;
    max_extra_suffix?: number;
    filter_by?: string;
    sort_by?: string;
    facet_by?: string;
    max_facet_values?: number;
    facet_query?: string;
    num_typos?: string;
    page?: number;
    per_page?: number;
    limit?: number;
    offset?: number;
    group_by?: string;
    group_limit?: number;
    group_missing_values?: boolean;
    include_fields?: string;
    exclude_fields?: string;
    highlight_full_fields?: string;
    highlight_affix_num_tokens?: number;
    highlight_start_tag?: string;
    highlight_end_tag?: string;
    snippet_threshold?: number;
    drop_tokens_threshold?: number;
    drop_tokens_mode?: "right_to_left" | "left_to_right" | "both_sides:3";
    typo_tokens_threshold?: number;
    enable_typos_for_alpha_numerical_tokens?: boolean;
    filter_curated_hits?: boolean;
    enable_synonyms?: boolean;
    enable_analytics?: boolean;
    synonym_prefix?: boolean;
    synonym_num_typos?: number;
    pinned_hits?: string;
    hidden_hits?: string;
    curation_tags?: string;
    highlight_fields?: string;
    pre_segmented_query?: boolean;
    preset?: string;
    enable_curations?: boolean;
    prioritize_exact_match?: boolean;
    prioritize_token_position?: boolean;
    prioritize_num_matching_fields?: boolean;
    enable_typos_for_numerical_tokens?: boolean;
    exhaustive_search?: boolean;
    search_cutoff_ms?: number;
    use_cache?: boolean;
    cache_ttl?: number;
    min_len_1typo?: number;
    min_len_2typo?: number;
    vector_query?: string;
    remote_embedding_timeout_ms?: number;
    remote_embedding_num_tries?: number;
    facet_strategy?: string;
    stopwords?: string;
    facet_return_parent?: string;
    voice_query?: string;
    conversation?: boolean;
    conversation_model_id?: string;
    conversation_id?: string;
    validate_field_names?: boolean;
    collection?: string;
    "x-typesense-api-key"?: string;
    rerank_hybrid_matches?: boolean;
  }[];
}
export const MultiSearchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  multiSearchParameters: Schema.String,
  union: Schema.optional(Schema.Boolean),
  searches: Schema.Array(
    Schema.Struct({
      q: Schema.optional(Schema.String),
      query_by: Schema.optional(Schema.String),
      query_by_weights: Schema.optional(Schema.String),
      text_match_type: Schema.optional(Schema.String),
      prefix: Schema.optional(Schema.String),
      infix: Schema.optional(Schema.String),
      max_extra_prefix: Schema.optional(Schema.Number),
      max_extra_suffix: Schema.optional(Schema.Number),
      filter_by: Schema.optional(Schema.String),
      sort_by: Schema.optional(Schema.String),
      facet_by: Schema.optional(Schema.String),
      max_facet_values: Schema.optional(Schema.Number),
      facet_query: Schema.optional(Schema.String),
      num_typos: Schema.optional(Schema.String),
      page: Schema.optional(Schema.Number),
      per_page: Schema.optional(Schema.Number),
      limit: Schema.optional(Schema.Number),
      offset: Schema.optional(Schema.Number),
      group_by: Schema.optional(Schema.String),
      group_limit: Schema.optional(Schema.Number),
      group_missing_values: Schema.optional(Schema.Boolean),
      include_fields: Schema.optional(Schema.String),
      exclude_fields: Schema.optional(Schema.String),
      highlight_full_fields: Schema.optional(Schema.String),
      highlight_affix_num_tokens: Schema.optional(Schema.Number),
      highlight_start_tag: Schema.optional(Schema.String),
      highlight_end_tag: Schema.optional(Schema.String),
      snippet_threshold: Schema.optional(Schema.Number),
      drop_tokens_threshold: Schema.optional(Schema.Number),
      drop_tokens_mode: Schema.optional(
        Schema.Literals(["right_to_left", "left_to_right", "both_sides:3"]),
      ),
      typo_tokens_threshold: Schema.optional(Schema.Number),
      enable_typos_for_alpha_numerical_tokens: Schema.optional(Schema.Boolean),
      filter_curated_hits: Schema.optional(Schema.Boolean),
      enable_synonyms: Schema.optional(Schema.Boolean),
      enable_analytics: Schema.optional(Schema.Boolean),
      synonym_prefix: Schema.optional(Schema.Boolean),
      synonym_num_typos: Schema.optional(Schema.Number),
      pinned_hits: Schema.optional(Schema.String),
      hidden_hits: Schema.optional(Schema.String),
      curation_tags: Schema.optional(Schema.String),
      highlight_fields: Schema.optional(Schema.String),
      pre_segmented_query: Schema.optional(Schema.Boolean),
      preset: Schema.optional(Schema.String),
      enable_curations: Schema.optional(Schema.Boolean),
      prioritize_exact_match: Schema.optional(Schema.Boolean),
      prioritize_token_position: Schema.optional(Schema.Boolean),
      prioritize_num_matching_fields: Schema.optional(Schema.Boolean),
      enable_typos_for_numerical_tokens: Schema.optional(Schema.Boolean),
      exhaustive_search: Schema.optional(Schema.Boolean),
      search_cutoff_ms: Schema.optional(Schema.Number),
      use_cache: Schema.optional(Schema.Boolean),
      cache_ttl: Schema.optional(Schema.Number),
      min_len_1typo: Schema.optional(Schema.Number),
      min_len_2typo: Schema.optional(Schema.Number),
      vector_query: Schema.optional(Schema.String),
      remote_embedding_timeout_ms: Schema.optional(Schema.Number),
      remote_embedding_num_tries: Schema.optional(Schema.Number),
      facet_strategy: Schema.optional(Schema.String),
      stopwords: Schema.optional(Schema.String),
      facet_return_parent: Schema.optional(Schema.String),
      voice_query: Schema.optional(Schema.String),
      conversation: Schema.optional(Schema.Boolean),
      conversation_model_id: Schema.optional(Schema.String),
      conversation_id: Schema.optional(Schema.String),
      validate_field_names: Schema.optional(Schema.Boolean),
      collection: Schema.optional(Schema.String),
      "x-typesense-api-key": Schema.optional(Schema.String),
      rerank_hybrid_matches: Schema.optional(Schema.Boolean),
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/multi_search" }),
) as unknown as Schema.Codec<MultiSearchInput>;

// Output Schema
export interface MultiSearchOutput {
  results: {
    facet_counts?: {
      counts?: {
        count?: number;
        highlighted?: string;
        value?: string;
        parent?: unknown;
      }[];
      field_name?: string;
      sampled?: boolean;
      stats?: {
        max?: number;
        min?: number;
        sum?: number;
        total_values?: number;
        avg?: number;
      };
    }[];
    found?: number;
    found_docs?: number;
    search_time_ms?: number;
    out_of?: number;
    search_cutoff?: boolean;
    page?: number;
    grouped_hits?: {
      found?: number;
      group_key: unknown[];
      hits: {
        highlights?: {
          field?: string;
          snippet?: string;
          snippets?: string[];
          value?: string;
          values?: string[];
          indices?: number[];
          matched_tokens?: unknown[];
        }[];
        highlight?: Record<string, unknown>;
        document?: Record<string, unknown>;
        text_match?: number;
        text_match_info?: {
          best_field_score?: string;
          best_field_weight?: number;
          fields_matched?: number;
          num_tokens_dropped?: number;
          score?: string;
          tokens_matched?: number;
          typo_prefix_score?: number;
        };
        geo_distance_meters?: Record<string, number>;
        vector_distance?: number;
        hybrid_search_info?: { rank_fusion_score?: number };
        search_index?: number;
      }[];
    }[];
    hits?: {
      highlights?: {
        field?: string;
        snippet?: string;
        snippets?: string[];
        value?: string;
        values?: string[];
        indices?: number[];
        matched_tokens?: unknown[];
      }[];
      highlight?: Record<string, unknown>;
      document?: Record<string, unknown>;
      text_match?: number;
      text_match_info?: {
        best_field_score?: string;
        best_field_weight?: number;
        fields_matched?: number;
        num_tokens_dropped?: number;
        score?: string;
        tokens_matched?: number;
        typo_prefix_score?: number;
      };
      geo_distance_meters?: Record<string, number>;
      vector_distance?: number;
      hybrid_search_info?: { rank_fusion_score?: number };
      search_index?: number;
    }[];
    request_params?: {
      collection_name: string;
      first_q?: string;
      q: string;
      per_page: number;
      voice_query?: { transcribed_query?: string };
    };
    conversation?: {
      answer: string;
      conversation_history: unknown[];
      conversation_id: string;
      query: string;
    };
    union_request_params?: {
      collection_name: string;
      first_q?: string;
      q: string;
      per_page: number;
      voice_query?: { transcribed_query?: string };
    }[];
    metadata?: Record<string, unknown>;
    code?: number;
    error?: string;
  }[];
  conversation?: {
    answer: string;
    conversation_history: unknown[];
    conversation_id: string;
    query: string;
  };
}
export const MultiSearchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  results: Schema.Array(
    Schema.Struct({
      facet_counts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            counts: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  count: Schema.optional(Schema.Number),
                  highlighted: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                  parent: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
            field_name: Schema.optional(Schema.String),
            sampled: Schema.optional(Schema.Boolean),
            stats: Schema.optional(
              Schema.Struct({
                max: Schema.optional(Schema.Number),
                min: Schema.optional(Schema.Number),
                sum: Schema.optional(Schema.Number),
                total_values: Schema.optional(Schema.Number),
                avg: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      ),
      found: Schema.optional(Schema.Number),
      found_docs: Schema.optional(Schema.Number),
      search_time_ms: Schema.optional(Schema.Number),
      out_of: Schema.optional(Schema.Number),
      search_cutoff: Schema.optional(Schema.Boolean),
      page: Schema.optional(Schema.Number),
      grouped_hits: Schema.optional(
        Schema.Array(
          Schema.Struct({
            found: Schema.optional(Schema.Number),
            group_key: Schema.Array(Schema.Unknown),
            hits: Schema.Array(
              Schema.Struct({
                highlights: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      field: Schema.optional(Schema.String),
                      snippet: Schema.optional(Schema.String),
                      snippets: Schema.optional(Schema.Array(Schema.String)),
                      value: Schema.optional(Schema.String),
                      values: Schema.optional(Schema.Array(Schema.String)),
                      indices: Schema.optional(Schema.Array(Schema.Number)),
                      matched_tokens: Schema.optional(
                        Schema.Array(Schema.Unknown),
                      ),
                    }),
                  ),
                ),
                highlight: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
                document: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
                text_match: Schema.optional(Schema.Number),
                text_match_info: Schema.optional(
                  Schema.Struct({
                    best_field_score: Schema.optional(Schema.String),
                    best_field_weight: Schema.optional(Schema.Number),
                    fields_matched: Schema.optional(Schema.Number),
                    num_tokens_dropped: Schema.optional(Schema.Number),
                    score: Schema.optional(Schema.String),
                    tokens_matched: Schema.optional(Schema.Number),
                    typo_prefix_score: Schema.optional(Schema.Number),
                  }),
                ),
                geo_distance_meters: Schema.optional(
                  Schema.Record(Schema.String, Schema.Number),
                ),
                vector_distance: Schema.optional(Schema.Number),
                hybrid_search_info: Schema.optional(
                  Schema.Struct({
                    rank_fusion_score: Schema.optional(Schema.Number),
                  }),
                ),
                search_index: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      ),
      hits: Schema.optional(
        Schema.Array(
          Schema.Struct({
            highlights: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  field: Schema.optional(Schema.String),
                  snippet: Schema.optional(Schema.String),
                  snippets: Schema.optional(Schema.Array(Schema.String)),
                  value: Schema.optional(Schema.String),
                  values: Schema.optional(Schema.Array(Schema.String)),
                  indices: Schema.optional(Schema.Array(Schema.Number)),
                  matched_tokens: Schema.optional(Schema.Array(Schema.Unknown)),
                }),
              ),
            ),
            highlight: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            document: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            text_match: Schema.optional(Schema.Number),
            text_match_info: Schema.optional(
              Schema.Struct({
                best_field_score: Schema.optional(Schema.String),
                best_field_weight: Schema.optional(Schema.Number),
                fields_matched: Schema.optional(Schema.Number),
                num_tokens_dropped: Schema.optional(Schema.Number),
                score: Schema.optional(Schema.String),
                tokens_matched: Schema.optional(Schema.Number),
                typo_prefix_score: Schema.optional(Schema.Number),
              }),
            ),
            geo_distance_meters: Schema.optional(
              Schema.Record(Schema.String, Schema.Number),
            ),
            vector_distance: Schema.optional(Schema.Number),
            hybrid_search_info: Schema.optional(
              Schema.Struct({
                rank_fusion_score: Schema.optional(Schema.Number),
              }),
            ),
            search_index: Schema.optional(Schema.Number),
          }),
        ),
      ),
      request_params: Schema.optional(
        Schema.Struct({
          collection_name: Schema.String,
          first_q: Schema.optional(Schema.String),
          q: Schema.String,
          per_page: Schema.Number,
          voice_query: Schema.optional(
            Schema.Struct({
              transcribed_query: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      conversation: Schema.optional(
        Schema.Struct({
          answer: Schema.String,
          conversation_history: Schema.Array(Schema.Unknown),
          conversation_id: Schema.String,
          query: Schema.String,
        }),
      ),
      union_request_params: Schema.optional(
        Schema.Array(
          Schema.Struct({
            collection_name: Schema.String,
            first_q: Schema.optional(Schema.String),
            q: Schema.String,
            per_page: Schema.Number,
            voice_query: Schema.optional(
              Schema.Struct({
                transcribed_query: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      code: Schema.optional(Schema.Number),
      error: Schema.optional(Schema.String),
    }),
  ),
  conversation: Schema.optional(
    Schema.Struct({
      answer: Schema.String,
      conversation_history: Schema.Array(Schema.Unknown),
      conversation_id: Schema.String,
      query: Schema.String,
    }),
  ),
}) as unknown as Schema.Codec<MultiSearchOutput>;

// The operation
/**
 * send multiple search requests in a single HTTP request
 *
 * This is especially useful to avoid round-trip network latencies incurred otherwise if each of these requests are sent in separate HTTP requests. You can also use this feature to do a federated search across multiple collections in a single HTTP request.
 */
export const multiSearch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MultiSearchInput,
  outputSchema: MultiSearchOutput,
  errors: [BadRequest] as const,
}));
