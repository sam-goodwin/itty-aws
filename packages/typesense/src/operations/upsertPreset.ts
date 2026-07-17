import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface UpsertPresetInput {
  presetId: string;
  value:
    | {
        q?: string;
        query_by?: string;
        validate_field_names?: boolean;
        nl_query?: boolean;
        nl_model_id?: string;
        query_by_weights?: string;
        text_match_type?: string;
        prefix?: string;
        infix?: string;
        max_extra_prefix?: number;
        max_extra_suffix?: number;
        filter_by?: string;
        max_filter_by_candidates?: number;
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
        enable_highlight_v1?: boolean;
        enable_analytics?: boolean;
        snippet_threshold?: number;
        synonym_sets?: string;
        drop_tokens_threshold?: number;
        drop_tokens_mode?: "right_to_left" | "left_to_right" | "both_sides:3";
        typo_tokens_threshold?: number;
        enable_typos_for_alpha_numerical_tokens?: boolean;
        filter_curated_hits?: boolean;
        enable_synonyms?: boolean;
        synonym_prefix?: boolean;
        synonym_num_typos?: number;
        pinned_hits?: string;
        hidden_hits?: string;
        curation_tags?: string;
        highlight_fields?: string;
        split_join_tokens?: string;
        pre_segmented_query?: boolean;
        preset?: string;
        enable_curations?: boolean;
        prioritize_exact_match?: boolean;
        max_candidates?: number;
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
      }
    | {
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
      };
}
export const UpsertPresetInput = /*@__PURE__*/ Schema.Struct({
  presetId: Schema.String.pipe(T.PathParam()),
  value: Schema.Unknown,
}).pipe(
  T.Http({ method: "PUT", path: "/presets/{presetId}" }),
) as unknown as Schema.Codec<UpsertPresetInput>;

// Output Schema
export interface UpsertPresetOutput {
  value:
    | {
        q?: string;
        query_by?: string;
        validate_field_names?: boolean;
        nl_query?: boolean;
        nl_model_id?: string;
        query_by_weights?: string;
        text_match_type?: string;
        prefix?: string;
        infix?: string;
        max_extra_prefix?: number;
        max_extra_suffix?: number;
        filter_by?: string;
        max_filter_by_candidates?: number;
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
        enable_highlight_v1?: boolean;
        enable_analytics?: boolean;
        snippet_threshold?: number;
        synonym_sets?: string;
        drop_tokens_threshold?: number;
        drop_tokens_mode?: "right_to_left" | "left_to_right" | "both_sides:3";
        typo_tokens_threshold?: number;
        enable_typos_for_alpha_numerical_tokens?: boolean;
        filter_curated_hits?: boolean;
        enable_synonyms?: boolean;
        synonym_prefix?: boolean;
        synonym_num_typos?: number;
        pinned_hits?: string;
        hidden_hits?: string;
        curation_tags?: string;
        highlight_fields?: string;
        split_join_tokens?: string;
        pre_segmented_query?: boolean;
        preset?: string;
        enable_curations?: boolean;
        prioritize_exact_match?: boolean;
        max_candidates?: number;
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
      }
    | {
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
      };
  name: string;
}
export const UpsertPresetOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Unknown,
  name: Schema.String,
}) as unknown as Schema.Codec<UpsertPresetOutput>;

// The operation
/**
 * Upserts a preset.
 *
 * Create or update an existing preset.
 *
 * @param presetId - The name of the preset set to upsert.
 */
export const upsertPreset = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpsertPresetInput,
  outputSchema: UpsertPresetOutput,
  errors: [BadRequest] as const,
}));
