import * as Schema from "effect/Schema";
import { SensitiveOutputString } from "../../sensitive.ts";

export const EvaluationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.Literals(["active", "paused", "error"])),
  status_reason: Schema.optional(Schema.Unknown),
  evaluation_type: Schema.optional(Schema.Literals(["llm_judge", "hog"])),
  evaluation_config: Schema.optional(Schema.Unknown),
  output_type: Schema.optional(Schema.Literals(["boolean"])),
  output_config: Schema.optional(
    Schema.Struct({
      allows_na: Schema.optional(Schema.Boolean),
    }),
  ),
  conditions: Schema.optional(Schema.Unknown),
  model_configuration: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        provider: Schema.optional(Schema.suspend(() => LLMProviderEnumSchema)),
        model: Schema.optional(Schema.String),
        provider_key_id: Schema.optional(Schema.NullOr(Schema.String)),
        provider_key_name: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  deleted: Schema.optional(Schema.Boolean),
});
export const LLMProviderEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "openai",
    "anthropic",
    "gemini",
    "openrouter",
    "fireworks",
    "azure_openai",
  ]);
export const TestHogResultItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event_uuid: Schema.optional(Schema.String),
    trace_id: Schema.optional(Schema.NullOr(Schema.String)),
    input_preview: Schema.optional(Schema.String),
    output_preview: Schema.optional(Schema.String),
    result: Schema.optional(Schema.NullOr(Schema.Boolean)),
    reasoning: Schema.optional(Schema.NullOr(Schema.String)),
    error: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const ClusteringJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  analysis_level: Schema.optional(
    Schema.suspend(() => ClusteringJobAnalysisLevelEnumSchema),
  ),
  event_filters: Schema.optional(Schema.Unknown),
  enabled: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const ClusteringJobAnalysisLevelEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "trace",
    "generation",
    "evaluation",
  ]);
export const EvaluationReportSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    evaluation: Schema.optional(Schema.String),
    frequency: Schema.optional(Schema.Literals(["scheduled", "every_n"])),
    rrule: Schema.optional(Schema.String),
    starts_at: Schema.optional(Schema.NullOr(Schema.String)),
    timezone_name: Schema.optional(Schema.String),
    next_delivery_date: Schema.optional(Schema.NullOr(Schema.String)),
    delivery_targets: Schema.optional(Schema.Unknown),
    max_sample_size: Schema.optional(Schema.Number),
    enabled: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    last_delivered_at: Schema.optional(Schema.NullOr(Schema.String)),
    report_prompt_guidance: Schema.optional(Schema.String),
    trigger_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
    cooldown_minutes: Schema.optional(Schema.Number),
    daily_run_cap: Schema.optional(Schema.Number),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.optional(Schema.String),
  },
);
export const EvaluationReportRunSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    report: Schema.optional(Schema.String),
    content: Schema.optional(Schema.Unknown),
    metadata: Schema.optional(Schema.Unknown),
    period_start: Schema.optional(Schema.String),
    period_end: Schema.optional(Schema.String),
    delivery_status: Schema.optional(
      Schema.Literals(["pending", "delivered", "partial_failure", "failed"]),
    ),
    delivery_errors: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
  });
export const EvaluationPatternSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    frequency: Schema.optional(Schema.String),
    example_generation_ids: Schema.optional(Schema.Array(Schema.String)),
  });
export const EvaluationSummaryStatisticsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    total_analyzed: Schema.optional(Schema.Number),
    pass_count: Schema.optional(Schema.Number),
    fail_count: Schema.optional(Schema.Number),
    na_count: Schema.optional(Schema.Number),
  });
export const LLMProviderKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  provider: Schema.optional(Schema.suspend(() => LLMProviderEnumSchema)),
  name: Schema.optional(Schema.String),
  state: Schema.optional(
    Schema.Literals(["unknown", "ok", "invalid", "error"]),
  ),
  error_message: Schema.optional(Schema.NullOr(Schema.String)),
  api_key: Schema.optional(SensitiveOutputString),
  api_key_masked: Schema.optional(Schema.String),
  azure_endpoint: Schema.optional(Schema.String),
  api_version: Schema.optional(Schema.String),
  azure_endpoint_display: Schema.optional(Schema.NullOr(Schema.String)),
  api_version_display: Schema.optional(Schema.NullOr(Schema.String)),
  set_as_active: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const ReviewQueueItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  queue_id: Schema.optional(Schema.String),
  queue_name: Schema.optional(Schema.String),
  trace_id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  team: Schema.optional(Schema.Number),
});
export const ReviewQueueSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  pending_item_count: Schema.optional(Schema.Number),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  team: Schema.optional(Schema.Number),
});
export const ScoreDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.Literals(["categorical", "numeric", "boolean"])),
  archived: Schema.optional(Schema.Boolean),
  current_version: Schema.optional(Schema.Number),
  config: Schema.optional(Schema.Unknown),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  team: Schema.optional(Schema.Number),
});
export const SentimentResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  score: Schema.optional(Schema.Number),
  scores: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  messages: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => MessageSentimentSchema),
    ),
  ),
  message_count: Schema.optional(Schema.Number),
});
export const MessageSentimentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    label: Schema.optional(Schema.String),
    score: Schema.optional(Schema.Number),
    scores: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  },
);
export const SummaryBulletSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  text: Schema.optional(Schema.String),
  line_refs: Schema.optional(Schema.String),
});
export const InterestingNoteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  text: Schema.optional(Schema.String),
  line_refs: Schema.optional(Schema.String),
});
export const CachedSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  trace_id: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  cached: Schema.optional(Schema.Boolean),
});
export const TraceReviewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  trace_id: Schema.optional(Schema.String),
  comment: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  reviewed_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  scores: Schema.optional(
    Schema.Array(Schema.suspend(() => TraceReviewScoreSchema)),
  ),
  team: Schema.optional(Schema.Number),
});
export const TraceReviewScoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    definition_id: Schema.optional(Schema.String),
    definition_name: Schema.optional(Schema.String),
    definition_kind: Schema.optional(Schema.String),
    definition_archived: Schema.optional(Schema.Boolean),
    definition_version_id: Schema.optional(Schema.String),
    definition_version: Schema.optional(Schema.Number),
    definition_config: Schema.optional(Schema.Unknown),
    categorical_values: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    numeric_value: Schema.optional(Schema.NullOr(Schema.String)),
    boolean_value: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  },
);
export const TraceReviewScoreWriteSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    definition_id: Schema.optional(Schema.String),
    definition_version_id: Schema.optional(Schema.NullOr(Schema.String)),
    categorical_values: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    numeric_value: Schema.optional(Schema.NullOr(Schema.String)),
    boolean_value: Schema.optional(Schema.NullOr(Schema.Boolean)),
  });
export const LLMPromptListSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  prompt: Schema.optional(Schema.Unknown),
  version: Schema.optional(Schema.Number),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  is_latest: Schema.optional(Schema.Boolean),
  latest_version: Schema.optional(Schema.Number),
  version_count: Schema.optional(Schema.Number),
  first_version_created_at: Schema.optional(Schema.String),
  outline: Schema.optional(
    Schema.Array(Schema.suspend(() => LLMPromptOutlineEntrySchema)),
  ),
  prompt_preview: Schema.optional(Schema.String),
  prompt_size_bytes: Schema.optional(Schema.Number),
});
export const LLMPromptOutlineEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.Number),
    text: Schema.optional(Schema.String),
  });
export const LLMPromptEditOperationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    old: Schema.optional(Schema.String),
    new: Schema.optional(Schema.String),
  });
export const LLMPromptSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  prompt: Schema.optional(Schema.Unknown),
  version: Schema.optional(Schema.Number),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  is_latest: Schema.optional(Schema.Boolean),
  latest_version: Schema.optional(Schema.Number),
  version_count: Schema.optional(Schema.Number),
  first_version_created_at: Schema.optional(Schema.String),
  outline: Schema.optional(
    Schema.Array(Schema.suspend(() => LLMPromptOutlineEntrySchema)),
  ),
});
export const LLMPromptVersionSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    is_latest: Schema.optional(Schema.Boolean),
  });
export const LLMSkillListSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  license: Schema.optional(Schema.String),
  compatibility: Schema.optional(Schema.String),
  allowed_tools: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  outline: Schema.optional(
    Schema.Array(Schema.suspend(() => LLMSkillOutlineEntrySchema)),
  ),
  version: Schema.optional(Schema.Number),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  is_latest: Schema.optional(Schema.Boolean),
  latest_version: Schema.optional(Schema.Number),
  version_count: Schema.optional(Schema.Number),
  first_version_created_at: Schema.optional(Schema.String),
});
export const LLMSkillOutlineEntrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.Number),
    text: Schema.optional(Schema.String),
  });
export const LLMSkillFileInputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    content_type: Schema.optional(Schema.String),
  });
export const LLMSkillFileManifestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    content_type: Schema.optional(Schema.String),
  });
export const LLMSkillEditOperationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    old: Schema.optional(Schema.String),
    new: Schema.optional(Schema.String),
  });
export const LLMSkillFileEditSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    path: Schema.optional(Schema.String),
    edits: Schema.optional(
      Schema.Array(Schema.suspend(() => LLMSkillEditOperationSchema)),
    ),
  },
);
export const LLMSkillSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  body: Schema.optional(Schema.String),
  license: Schema.optional(Schema.String),
  compatibility: Schema.optional(Schema.String),
  allowed_tools: Schema.optional(Schema.Array(Schema.String)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  files: Schema.optional(
    Schema.Array(Schema.suspend(() => LLMSkillFileManifestSchema)),
  ),
  outline: Schema.optional(
    Schema.Array(Schema.suspend(() => LLMSkillOutlineEntrySchema)),
  ),
  version: Schema.optional(Schema.Number),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  is_latest: Schema.optional(Schema.Boolean),
  latest_version: Schema.optional(Schema.Number),
  version_count: Schema.optional(Schema.Number),
  first_version_created_at: Schema.optional(Schema.String),
});
export const LLMSkillVersionSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    is_latest: Schema.optional(Schema.Boolean),
  });
export const DatasetItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  dataset: Schema.optional(Schema.String),
  input: Schema.optional(Schema.NullOr(Schema.Unknown)),
  output: Schema.optional(Schema.NullOr(Schema.Unknown)),
  metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
  ref_trace_id: Schema.optional(Schema.NullOr(Schema.String)),
  ref_timestamp: Schema.optional(Schema.NullOr(Schema.String)),
  ref_source_id: Schema.optional(Schema.NullOr(Schema.String)),
  deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  team: Schema.optional(Schema.Number),
});
export const DatasetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  team: Schema.optional(Schema.Number),
});
