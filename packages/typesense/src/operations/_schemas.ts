import * as Schema from "effect/Schema";
import { SensitiveOutputString } from "../sensitive.ts";

export const CollectionResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => FieldSchema)),
    default_sorting_field: Schema.optional(Schema.String),
    token_separators: Schema.optional(Schema.Array(Schema.String)),
    synonym_sets: Schema.optional(Schema.Array(Schema.String)),
    enable_nested_fields: Schema.optional(Schema.Boolean),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
    voice_query_model: Schema.optional(
      Schema.suspend(() => VoiceQueryModelCollectionConfigSchema),
    ),
    metadata: Schema.optional(Schema.Unknown),
    num_documents: Schema.Number,
    created_at: Schema.Number,
  });
export const FieldSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  type: Schema.String,
  optional: Schema.optional(Schema.Boolean),
  facet: Schema.optional(Schema.Boolean),
  index: Schema.optional(Schema.Boolean),
  locale: Schema.optional(Schema.String),
  sort: Schema.optional(Schema.Boolean),
  infix: Schema.optional(Schema.Boolean),
  reference: Schema.optional(Schema.String),
  async_reference: Schema.optional(Schema.Boolean),
  num_dim: Schema.optional(Schema.Number),
  drop: Schema.optional(Schema.Boolean),
  store: Schema.optional(Schema.Boolean),
  vec_dist: Schema.optional(Schema.String),
  range_index: Schema.optional(Schema.Boolean),
  stem: Schema.optional(Schema.Boolean),
  stem_dictionary: Schema.optional(Schema.String),
  token_separators: Schema.optional(Schema.Array(Schema.String)),
  symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  embed: Schema.optional(
    Schema.Struct({
      from: Schema.Array(Schema.String),
      model_config: Schema.Struct({
        model_name: Schema.String,
        api_key: Schema.optional(SensitiveOutputString),
        url: Schema.optional(Schema.String),
        access_token: Schema.optional(SensitiveOutputString),
        refresh_token: Schema.optional(SensitiveOutputString),
        client_id: Schema.optional(Schema.String),
        client_secret: Schema.optional(SensitiveOutputString),
        project_id: Schema.optional(Schema.String),
        indexing_prefix: Schema.optional(Schema.String),
        query_prefix: Schema.optional(Schema.String),
      }),
    }),
  ),
});
export const VoiceQueryModelCollectionConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model_name: Schema.optional(Schema.String),
  });
export const FacetCountsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export const SearchGroupedHitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    found: Schema.optional(Schema.Number),
    group_key: Schema.Array(Schema.Unknown),
    hits: Schema.Array(Schema.suspend(() => SearchResultHitSchema)),
  },
);
export const SearchResultHitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  highlights: Schema.optional(
    Schema.Array(Schema.suspend(() => SearchHighlightSchema)),
  ),
  highlight: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  document: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
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
});
export const SearchHighlightSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  field: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.String),
  snippets: Schema.optional(Schema.Array(Schema.String)),
  value: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.String)),
  indices: Schema.optional(Schema.Array(Schema.Number)),
  matched_tokens: Schema.optional(Schema.Array(Schema.Unknown)),
});
export const SearchRequestParamsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collection_name: Schema.String,
    first_q: Schema.optional(Schema.String),
    q: Schema.String,
    per_page: Schema.Number,
    voice_query: Schema.optional(
      Schema.Struct({
        transcribed_query: Schema.optional(Schema.String),
      }),
    ),
  });
export const SearchResultConversationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    answer: Schema.String,
    conversation_history: Schema.Array(Schema.Unknown),
    conversation_id: Schema.String,
    query: Schema.String,
  });
export const SynonymSetSchemaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    items: Schema.Array(Schema.suspend(() => SynonymItemSchemaSchema)),
    name: Schema.String,
  },
);
export const SynonymItemSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    synonyms: Schema.Array(Schema.String),
    root: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    symbols_to_index: Schema.optional(Schema.Array(Schema.String)),
  });
export const CurationSetSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(Schema.suspend(() => CurationItemCreateSchemaSchema)),
    description: Schema.optional(Schema.String),
    name: Schema.String,
  });
export const CurationItemCreateSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.suspend(() => CurationRuleSchema),
    includes: Schema.optional(
      Schema.Array(Schema.suspend(() => CurationIncludeSchema)),
    ),
    excludes: Schema.optional(
      Schema.Array(Schema.suspend(() => CurationExcludeSchema)),
    ),
    filter_by: Schema.optional(Schema.String),
    remove_matched_tokens: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Unknown),
    sort_by: Schema.optional(Schema.String),
    replace_query: Schema.optional(Schema.String),
    filter_curated_hits: Schema.optional(Schema.Boolean),
    effective_from_ts: Schema.optional(Schema.Number),
    effective_to_ts: Schema.optional(Schema.Number),
    stop_processing: Schema.optional(Schema.Boolean),
    id: Schema.optional(Schema.String),
  });
export const CurationRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tags: Schema.optional(Schema.Array(Schema.String)),
  query: Schema.optional(Schema.String),
  match: Schema.optional(Schema.Literals(["exact", "contains"])),
  filter_by: Schema.optional(Schema.String),
});
export const CurationIncludeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  position: Schema.Number,
});
export const CurationExcludeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
export const CurationItemSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rule: Schema.suspend(() => CurationRuleSchema),
    includes: Schema.optional(
      Schema.Array(Schema.suspend(() => CurationIncludeSchema)),
    ),
    excludes: Schema.optional(
      Schema.Array(Schema.suspend(() => CurationExcludeSchema)),
    ),
    filter_by: Schema.optional(Schema.String),
    remove_matched_tokens: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Unknown),
    sort_by: Schema.optional(Schema.String),
    replace_query: Schema.optional(Schema.String),
    filter_curated_hits: Schema.optional(Schema.Boolean),
    effective_from_ts: Schema.optional(Schema.Number),
    effective_to_ts: Schema.optional(Schema.Number),
    stop_processing: Schema.optional(Schema.Boolean),
    id: Schema.String,
  });
export const ConversationModelSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export const ApiKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  description: Schema.String,
  actions: Schema.Array(Schema.String),
  collections: Schema.Array(Schema.String),
  expires_at: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.Number),
  value_prefix: Schema.optional(Schema.String),
});
export const CollectionAliasSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  collection_name: Schema.String,
});
export const SchemaChangeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collection: Schema.optional(Schema.String),
    validated_docs: Schema.optional(Schema.Number),
    altered_docs: Schema.optional(Schema.Number),
  });
export const MultiSearchCollectionParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      Schema.suspend(() => DropTokensModeSchema),
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
  });
export const DropTokensModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["right_to_left", "left_to_right", "both_sides:3"],
);
export const MultiSearchResultItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    facet_counts: Schema.optional(
      Schema.Array(Schema.suspend(() => FacetCountsSchema)),
    ),
    found: Schema.optional(Schema.Number),
    found_docs: Schema.optional(Schema.Number),
    search_time_ms: Schema.optional(Schema.Number),
    out_of: Schema.optional(Schema.Number),
    search_cutoff: Schema.optional(Schema.Boolean),
    page: Schema.optional(Schema.Number),
    grouped_hits: Schema.optional(
      Schema.Array(Schema.suspend(() => SearchGroupedHitSchema)),
    ),
    hits: Schema.optional(
      Schema.Array(Schema.suspend(() => SearchResultHitSchema)),
    ),
    request_params: Schema.optional(
      Schema.suspend(() => SearchRequestParamsSchema),
    ),
    conversation: Schema.optional(
      Schema.suspend(() => SearchResultConversationSchema),
    ),
    union_request_params: Schema.optional(
      Schema.Array(Schema.suspend(() => SearchRequestParamsSchema)),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    code: Schema.optional(Schema.Number),
    error: Schema.optional(Schema.String),
  });
export const AnalyticsRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  type: Schema.suspend(() => AnalyticsRuleTypeSchema),
  collection: Schema.String,
  event_type: Schema.String,
  rule_tag: Schema.optional(Schema.String),
  params: Schema.optional(
    Schema.Struct({
      destination_collection: Schema.optional(Schema.String),
      limit: Schema.optional(Schema.Number),
      capture_search_requests: Schema.optional(Schema.Boolean),
      meta_fields: Schema.optional(Schema.Array(Schema.String)),
      expand_query: Schema.optional(Schema.Boolean),
      counter_field: Schema.optional(Schema.String),
      weight: Schema.optional(Schema.Number),
    }),
  ),
});
export const AnalyticsRuleTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "popular_queries",
    "nohits_queries",
    "counter",
    "log",
  ]);
export const StopwordsSetSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    stopwords: Schema.Array(Schema.String),
    locale: Schema.optional(Schema.String),
  });
export const PresetSchemaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Unknown,
  name: Schema.String,
});
export const NLSearchModelSchemaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
