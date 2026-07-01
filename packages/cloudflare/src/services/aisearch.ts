/**
 * Cloudflare AISEARCH API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service aisearch
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class AiSearchInstanceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AiSearchInstanceNotFound>()(
    "AiSearchInstanceNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    { code: 7002 },
    { status: 404, message: { includes: "ai_search_not_found" } },
  ],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InstanceAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InstanceAlreadyExists>()("InstanceAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 400, message: { includes: "already_exist" } }],
) {}

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class InvalidTokenCredentials extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidTokenCredentials>()(
    "InvalidTokenCredentials",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 7012 }, { status: 400, message: { includes: "invalid_token" } }],
) {}

export class MissingSitemap extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<MissingSitemap>()("MissingSitemap", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 400, message: { includes: "missing_sitemap" } }],
) {}

export class NamespaceAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NamespaceAlreadyExists>()("NamespaceAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7064 }],
) {}

export class NamespaceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NamespaceNotFound>()("NamespaceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { code: 7063 },
    { status: 404, message: { includes: "namespace_not_found" } },
  ],
) {}

export class NotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NotFound>()("NotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7002 }],
) {}

export class SyncInCooldown extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SyncInCooldown>()("SyncInCooldown", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7020 }],
) {}

export class TokenInUseByInstances extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TokenInUseByInstances>()("TokenInUseByInstances", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 409, message: { includes: "token_in_use_by_instances" } }],
) {}

export class TokenNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TokenNotFound>()("TokenNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7075 }],
) {}

export class UnableToConnect extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<UnableToConnect>()("UnableToConnect", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7017 }],
) {}

export class ValidationError extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ValidationError>()("ValidationError", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7001 }],
) {}

export class WebCrawlerDomainNotOwned extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WebCrawlerDomainNotOwned>()(
    "WebCrawlerDomainNotOwned",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 400, message: { includes: "domain_not_owned_by_user" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ChatCompletionsInstanceRequestMessageContent {
  text: string;
  type: "text";
}
const ChatCompletionsInstanceRequestMessageContent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      text: Schema.String,
      type: Schema.Literal("text"),
    }),
  ) as unknown as Schema.Codec<ChatCompletionsInstanceRequestMessageContent>;

interface ImageURL {
  url: string;
}
const ImageURL = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    url: Schema.String,
  }),
) as unknown as Schema.Codec<ImageURL>;

interface ChatCompletionsInstanceRequestMessageContent1 {
  imageUrl: { url: string };
  type: "image_url";
}
const ChatCompletionsInstanceRequestMessageContent1 =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      imageUrl: ImageURL,
      type: Schema.Literal("image_url"),
    }).pipe(Schema.encodeKeys({ imageUrl: "image_url", type: "type" })),
  ) as unknown as Schema.Codec<ChatCompletionsInstanceRequestMessageContent1>;

interface Message {
  content:
    | string
    | (
        | { text: string; type: "text" }
        | { imageUrl: { url: string }; type: "image_url" }
      )[]
    | null;
  role: "system" | "developer" | "user" | "assistant" | "tool" | (string & {});
}
const Message = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.Union([
      Schema.String,
      Schema.Array(
        Schema.Union([
          ChatCompletionsInstanceRequestMessageContent,
          ChatCompletionsInstanceRequestMessageContent1,
        ]),
      ),
      Schema.Null,
    ]),
    role: Schema.Union([
      Schema.Literals(["system", "developer", "user", "assistant", "tool"]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<Message>;

interface Cache {
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | (string & {})
    | null;
  enabled?: boolean | null;
}
const Cache = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cacheThreshold: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "super_strict_match",
            "close_enough",
            "flexible_friend",
            "anything_goes",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cacheThreshold: "cache_threshold",
      enabled: "enabled",
    }),
  ),
) as unknown as Schema.Codec<Cache>;

interface QueryRewrite {
  enabled?: boolean | null;
  model?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | (string & {})
    | null;
  rewritePrompt?: string | null;
}
const QueryRewrite = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    model: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
            "@cf/zai-org/glm-4.7-flash",
            "@cf/meta/llama-3.1-8b-instruct-fast",
            "@cf/meta/llama-3.1-8b-instruct-fp8",
            "@cf/meta/llama-4-scout-17b-16e-instruct",
            "@cf/qwen/qwen3-30b-a3b-fp8",
            "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
            "@cf/moonshotai/kimi-k2-instruct",
            "@cf/google/gemma-3-12b-it",
            "@cf/google/gemma-4-26b-a4b-it",
            "@cf/moonshotai/kimi-k2.5",
            "anthropic/claude-3-7-sonnet",
            "anthropic/claude-sonnet-4",
            "anthropic/claude-opus-4",
            "anthropic/claude-3-5-haiku",
            "cerebras/qwen-3-235b-a22b-instruct",
            "cerebras/qwen-3-235b-a22b-thinking",
            "cerebras/llama-3.3-70b",
            "cerebras/llama-4-maverick-17b-128e-instruct",
            "cerebras/llama-4-scout-17b-16e-instruct",
            "cerebras/gpt-oss-120b",
            "google-ai-studio/gemini-2.5-flash",
            "google-ai-studio/gemini-2.5-pro",
            "grok/grok-4",
            "groq/llama-3.3-70b-versatile",
            "groq/llama-3.1-8b-instant",
            "openai/gpt-5",
            "openai/gpt-5-mini",
            "openai/gpt-5-nano",
            "",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    rewritePrompt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      model: "model",
      rewritePrompt: "rewrite_prompt",
    }),
  ),
) as unknown as Schema.Codec<QueryRewrite>;

interface Reranking {
  enabled?: boolean | null;
  matchThreshold?: number | null;
  model?: "@cf/baai/bge-reranker-base" | "" | (string & {}) | null;
}
const Reranking = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    matchThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    model: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      enabled: "enabled",
      matchThreshold: "match_threshold",
      model: "model",
    }),
  ),
) as unknown as Schema.Codec<Reranking>;

interface BoostBy {
  /** Metadata field name to boost by. Use 'timestamp' for document freshness, or any custom_metadata field. Numeric and datetime fields support all four directions (asc, desc, exists, not_exists); text/boo */
  field: string;
  /** Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps). 'asc' = lower values rank higher. 'exists' = boost chunks that have the field. 'not_exists' = boost chunks that lack the fi */
  direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {}) | null;
}
const BoostBy = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    field: Schema.String,
    direction: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["asc", "desc", "exists", "not_exists"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<BoostBy>;

interface Retrieval {
  /** Metadata fields to boost search results by. Overrides the instance-level boost_by config. Direction defaults to 'asc' for numeric/datetime fields, 'exists' for text/boolean fields. Fields must match ' */
  boostBy?:
    | {
        field: string;
        direction?:
          | "asc"
          | "desc"
          | "exists"
          | "not_exists"
          | (string & {})
          | null;
      }[]
    | null;
  contextExpansion?: number | null;
  filters?: Record<string, unknown> | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 re */
  keywordMatchMode?: "and" | "or" | (string & {}) | null;
  matchThreshold?: number | null;
  maxNumResults?: number | null;
  retrievalType?: "vector" | "keyword" | "hybrid" | (string & {}) | null;
  returnOnFailure?: boolean | null;
}
const Retrieval = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    boostBy: Schema.optional(
      Schema.Union([Schema.Array(BoostBy), Schema.Null]),
    ),
    contextExpansion: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    filters: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    keywordMatchMode: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    matchThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    retrievalType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["vector", "keyword", "hybrid"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    returnOnFailure: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      boostBy: "boost_by",
      contextExpansion: "context_expansion",
      filters: "filters",
      fusionMethod: "fusion_method",
      keywordMatchMode: "keyword_match_mode",
      matchThreshold: "match_threshold",
      maxNumResults: "max_num_results",
      retrievalType: "retrieval_type",
      returnOnFailure: "return_on_failure",
    }),
  ),
) as unknown as Schema.Codec<Retrieval>;

interface AisearchOptions {
  cache?: {
    cacheThreshold?:
      | "super_strict_match"
      | "close_enough"
      | "flexible_friend"
      | "anything_goes"
      | (string & {})
      | null;
    enabled?: boolean | null;
  } | null;
  queryRewrite?: {
    enabled?: boolean | null;
    model?:
      | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
      | "@cf/zai-org/glm-4.7-flash"
      | "@cf/meta/llama-3.1-8b-instruct-fast"
      | "@cf/meta/llama-3.1-8b-instruct-fp8"
      | "@cf/meta/llama-4-scout-17b-16e-instruct"
      | "@cf/qwen/qwen3-30b-a3b-fp8"
      | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
      | "@cf/moonshotai/kimi-k2-instruct"
      | "@cf/google/gemma-3-12b-it"
      | "@cf/google/gemma-4-26b-a4b-it"
      | "@cf/moonshotai/kimi-k2.5"
      | "anthropic/claude-3-7-sonnet"
      | "anthropic/claude-sonnet-4"
      | "anthropic/claude-opus-4"
      | "anthropic/claude-3-5-haiku"
      | "cerebras/qwen-3-235b-a22b-instruct"
      | "cerebras/qwen-3-235b-a22b-thinking"
      | "cerebras/llama-3.3-70b"
      | "cerebras/llama-4-maverick-17b-128e-instruct"
      | "cerebras/llama-4-scout-17b-16e-instruct"
      | "cerebras/gpt-oss-120b"
      | "google-ai-studio/gemini-2.5-flash"
      | "google-ai-studio/gemini-2.5-pro"
      | "grok/grok-4"
      | "groq/llama-3.3-70b-versatile"
      | "groq/llama-3.1-8b-instant"
      | "openai/gpt-5"
      | "openai/gpt-5-mini"
      | "openai/gpt-5-nano"
      | ""
      | (string & {})
      | null;
    rewritePrompt?: string | null;
  } | null;
  reranking?: {
    enabled?: boolean | null;
    matchThreshold?: number | null;
    model?: "@cf/baai/bge-reranker-base" | "" | (string & {}) | null;
  } | null;
  retrieval?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    contextExpansion?: number | null;
    filters?: Record<string, unknown> | null;
    fusionMethod?: "max" | "rrf" | (string & {}) | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
    matchThreshold?: number | null;
    maxNumResults?: number | null;
    retrievalType?: "vector" | "keyword" | "hybrid" | (string & {}) | null;
    returnOnFailure?: boolean | null;
  } | null;
}
const AisearchOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    cache: Schema.optional(Schema.Union([Cache, Schema.Null])),
    queryRewrite: Schema.optional(Schema.Union([QueryRewrite, Schema.Null])),
    reranking: Schema.optional(Schema.Union([Reranking, Schema.Null])),
    retrieval: Schema.optional(Schema.Union([Retrieval, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      cache: "cache",
      queryRewrite: "query_rewrite",
      reranking: "reranking",
      retrieval: "retrieval",
    }),
  ),
) as unknown as Schema.Codec<AisearchOptions>;

interface Choice {
  message: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  };
  index?: number | null;
}
const Choice = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    message: Message,
    index: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Choice>;

interface Item {
  key: string;
  metadata?: Record<string, unknown> | null;
  timestamp?: number | null;
}
const Item = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    key: Schema.String,
    metadata: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    timestamp: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Item>;

interface ScoringDetails {
  fusionMethod?: "rrf" | "max" | (string & {}) | null;
  keywordRank?: number | null;
  keywordScore?: number | null;
  rerankingScore?: number | null;
  vectorRank?: number | null;
  vectorScore?: number | null;
}
const ScoringDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["rrf", "max"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    keywordRank: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    keywordScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    rerankingScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    vectorRank: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    vectorScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      fusionMethod: "fusion_method",
      keywordRank: "keyword_rank",
      keywordScore: "keyword_score",
      rerankingScore: "reranking_score",
      vectorRank: "vector_rank",
      vectorScore: "vector_score",
    }),
  ),
) as unknown as Schema.Codec<ScoringDetails>;

interface Chunk {
  id: string;
  score: number;
  text: string;
  type: string;
  item?: {
    key: string;
    metadata?: Record<string, unknown> | null;
    timestamp?: number | null;
  } | null;
  scoringDetails?: {
    fusionMethod?: "rrf" | "max" | (string & {}) | null;
    keywordRank?: number | null;
    keywordScore?: number | null;
    rerankingScore?: number | null;
    vectorRank?: number | null;
    vectorScore?: number | null;
  } | null;
}
const Chunk = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    score: Schema.Number,
    text: Schema.String,
    type: Schema.String,
    item: Schema.optional(Schema.Union([Item, Schema.Null])),
    scoringDetails: Schema.optional(
      Schema.Union([ScoringDetails, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      score: "score",
      text: "text",
      type: "type",
      item: "item",
      scoringDetails: "scoring_details",
    }),
  ),
) as unknown as Schema.Codec<Chunk>;

interface AisearchOptions2 {
  instanceIds: string[];
  cache?: {
    cacheThreshold?:
      | "super_strict_match"
      | "close_enough"
      | "flexible_friend"
      | "anything_goes"
      | (string & {})
      | null;
    enabled?: boolean | null;
  } | null;
  queryRewrite?: {
    enabled?: boolean | null;
    model?:
      | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
      | "@cf/zai-org/glm-4.7-flash"
      | "@cf/meta/llama-3.1-8b-instruct-fast"
      | "@cf/meta/llama-3.1-8b-instruct-fp8"
      | "@cf/meta/llama-4-scout-17b-16e-instruct"
      | "@cf/qwen/qwen3-30b-a3b-fp8"
      | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
      | "@cf/moonshotai/kimi-k2-instruct"
      | "@cf/google/gemma-3-12b-it"
      | "@cf/google/gemma-4-26b-a4b-it"
      | "@cf/moonshotai/kimi-k2.5"
      | "anthropic/claude-3-7-sonnet"
      | "anthropic/claude-sonnet-4"
      | "anthropic/claude-opus-4"
      | "anthropic/claude-3-5-haiku"
      | "cerebras/qwen-3-235b-a22b-instruct"
      | "cerebras/qwen-3-235b-a22b-thinking"
      | "cerebras/llama-3.3-70b"
      | "cerebras/llama-4-maverick-17b-128e-instruct"
      | "cerebras/llama-4-scout-17b-16e-instruct"
      | "cerebras/gpt-oss-120b"
      | "google-ai-studio/gemini-2.5-flash"
      | "google-ai-studio/gemini-2.5-pro"
      | "grok/grok-4"
      | "groq/llama-3.3-70b-versatile"
      | "groq/llama-3.1-8b-instant"
      | "openai/gpt-5"
      | "openai/gpt-5-mini"
      | "openai/gpt-5-nano"
      | ""
      | (string & {})
      | null;
    rewritePrompt?: string | null;
  } | null;
  reranking?: {
    enabled?: boolean | null;
    matchThreshold?: number | null;
    model?: "@cf/baai/bge-reranker-base" | "" | (string & {}) | null;
  } | null;
  retrieval?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    contextExpansion?: number | null;
    filters?: Record<string, unknown> | null;
    fusionMethod?: "max" | "rrf" | (string & {}) | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
    matchThreshold?: number | null;
    maxNumResults?: number | null;
    retrievalType?: "vector" | "keyword" | "hybrid" | (string & {}) | null;
    returnOnFailure?: boolean | null;
  } | null;
}
const AisearchOptions2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    instanceIds: Schema.Array(Schema.String),
    cache: Schema.optional(Schema.Union([Cache, Schema.Null])),
    queryRewrite: Schema.optional(Schema.Union([QueryRewrite, Schema.Null])),
    reranking: Schema.optional(Schema.Union([Reranking, Schema.Null])),
    retrieval: Schema.optional(Schema.Union([Retrieval, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      instanceIds: "instance_ids",
      cache: "cache",
      queryRewrite: "query_rewrite",
      reranking: "reranking",
      retrieval: "retrieval",
    }),
  ),
) as unknown as Schema.Codec<AisearchOptions2>;

interface Chunk2 {
  id: string;
  instanceId: string;
  score: number;
  text: string;
  type: string;
  item?: {
    key: string;
    metadata?: Record<string, unknown> | null;
    timestamp?: number | null;
  } | null;
  scoringDetails?: {
    fusionMethod?: "rrf" | "max" | (string & {}) | null;
    keywordRank?: number | null;
    keywordScore?: number | null;
    rerankingScore?: number | null;
    vectorRank?: number | null;
    vectorScore?: number | null;
  } | null;
}
const Chunk2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    instanceId: Schema.String,
    score: Schema.Number,
    text: Schema.String,
    type: Schema.String,
    item: Schema.optional(Schema.Union([Item, Schema.Null])),
    scoringDetails: Schema.optional(
      Schema.Union([ScoringDetails, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      instanceId: "instance_id",
      score: "score",
      text: "text",
      type: "type",
      item: "item",
      scoringDetails: "scoring_details",
    }),
  ),
) as unknown as Schema.Codec<Chunk2>;

interface Error2 {
  instanceId: string;
  message: string;
}
const Error2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    instanceId: Schema.String,
    message: Schema.String,
  }).pipe(Schema.encodeKeys({ instanceId: "instance_id", message: "message" })),
) as unknown as Schema.Codec<Error2>;

interface CustomMetadata {
  dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
  fieldName: string;
}
const CustomMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataType: Schema.Union([
      Schema.Literals(["text", "number", "boolean", "datetime"]),
      Schema.String,
    ]),
    fieldName: Schema.String,
  }).pipe(
    Schema.encodeKeys({ dataType: "data_type", fieldName: "field_name" }),
  ),
) as unknown as Schema.Codec<CustomMetadata>;

interface IndexMethod {
  /** Enable keyword (BM25) storage backend. */
  keyword: boolean;
  /** Enable vector (embedding) storage backend. */
  vector: boolean;
}
const IndexMethod = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    keyword: Schema.Boolean,
    vector: Schema.Boolean,
  }),
) as unknown as Schema.Codec<IndexMethod>;

interface IndexingOptions {
  /** Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good f */
  keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
}
const IndexingOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    keywordTokenizer: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["porter", "trigram"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
) as unknown as Schema.Codec<IndexingOptions>;

interface Metadata {
  createdFromAisearchWizard?: boolean | null;
  workerDomain?: string | null;
}
const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    createdFromAisearchWizard: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    workerDomain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      createdFromAisearchWizard: "created_from_aisearch_wizard",
      workerDomain: "worker_domain",
    }),
  ),
) as unknown as Schema.Codec<Metadata>;

interface ChatCompletionsEndpoint {
  /** Disable chat completions endpoint for this public endpoint */
  disabled?: boolean | null;
}
const ChatCompletionsEndpoint = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<ChatCompletionsEndpoint>;

interface Mcp {
  description?: string | null;
  /** Disable MCP endpoint for this public endpoint */
  disabled?: boolean | null;
}
const Mcp = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    disabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }),
) as unknown as Schema.Codec<Mcp>;

interface RateLimit {
  periodMs?: number | null;
  requests?: number | null;
  technique?: "fixed" | "sliding" | (string & {}) | null;
}
const RateLimit = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    periodMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    requests: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    technique: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["fixed", "sliding"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      periodMs: "period_ms",
      requests: "requests",
      technique: "technique",
    }),
  ),
) as unknown as Schema.Codec<RateLimit>;

interface PublicEndpointParams {
  authorizedHosts?: string[] | null;
  chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
  enabled?: boolean | null;
  mcp?: { description?: string | null; disabled?: boolean | null } | null;
  rateLimit?: {
    periodMs?: number | null;
    requests?: number | null;
    technique?: "fixed" | "sliding" | (string & {}) | null;
  } | null;
  searchEndpoint?: { disabled?: boolean | null } | null;
}
const PublicEndpointParams = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    authorizedHosts: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    chatCompletionsEndpoint: Schema.optional(
      Schema.Union([ChatCompletionsEndpoint, Schema.Null]),
    ),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    mcp: Schema.optional(Schema.Union([Mcp, Schema.Null])),
    rateLimit: Schema.optional(Schema.Union([RateLimit, Schema.Null])),
    searchEndpoint: Schema.optional(
      Schema.Union([ChatCompletionsEndpoint, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      authorizedHosts: "authorized_hosts",
      chatCompletionsEndpoint: "chat_completions_endpoint",
      enabled: "enabled",
      mcp: "mcp",
      rateLimit: "rate_limit",
      searchEndpoint: "search_endpoint",
    }),
  ),
) as unknown as Schema.Codec<PublicEndpointParams>;

interface RetrievalOptions {
  /** Metadata fields to boost search results by. Each entry specifies a metadata field and an optional direction. Direction defaults to 'asc' for numeric/datetime fields and 'exists' for text/boolean field */
  boostBy?:
    | {
        field: string;
        direction?:
          | "asc"
          | "desc"
          | "exists"
          | "not_exists"
          | (string & {})
          | null;
      }[]
    | null;
  /** Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 re */
  keywordMatchMode?: "and" | "or" | (string & {}) | null;
}
const RetrievalOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    boostBy: Schema.optional(
      Schema.Union([Schema.Array(BoostBy), Schema.Null]),
    ),
    keywordMatchMode: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      boostBy: "boost_by",
      keywordMatchMode: "keyword_match_mode",
    }),
  ),
) as unknown as Schema.Codec<RetrievalOptions>;

interface ContentSelector {
  /** Glob pattern to match against the page URL path. Uses standard glob syntax: \  matches within a segment, \ \ crosses directories. */
  path: string;
  /** CSS selector to extract content from pages matching the path pattern. Must not contain disallowed characters (;, `, $, {, }, \). Must target a single element; if multiple elements match, the selector  */
  selector: string;
}
const ContentSelector = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    path: Schema.String,
    selector: Schema.String,
  }),
) as unknown as Schema.Codec<ContentSelector>;

interface ParseOptions {
  /** List of path-to-selector mappings for extracting specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragm */
  contentSelector?: { path: string; selector: string }[] | null;
  /** Up to 5 custom HTTP headers sent with each crawl request. Names must be RFC-7230 token characters (no spaces, colons, or control characters); values must be HTAB + printable ASCII (no CR/LF). */
  includeHeaders?: Record<string, unknown> | null;
  includeImages?: boolean | null;
  /** List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'. */
  specificSitemaps?: string[] | null;
  useBrowserRendering?: boolean | null;
}
const ParseOptions = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    contentSelector: Schema.optional(
      Schema.Union([Schema.Array(ContentSelector), Schema.Null]),
    ),
    includeHeaders: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    includeImages: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    specificSitemaps: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    useBrowserRendering: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      contentSelector: "content_selector",
      includeHeaders: "include_headers",
      includeImages: "include_images",
      specificSitemaps: "specific_sitemaps",
      useBrowserRendering: "use_browser_rendering",
    }),
  ),
) as unknown as Schema.Codec<ParseOptions>;

interface WebCrawler {
  parseOptions?: {
    contentSelector?: { path: string; selector: string }[] | null;
    includeHeaders?: Record<string, unknown> | null;
    includeImages?: boolean | null;
    specificSitemaps?: string[] | null;
    useBrowserRendering?: boolean | null;
  } | null;
  parseType?: "sitemap" | "crawl" | (string & {}) | null;
}
const WebCrawler = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    parseOptions: Schema.optional(Schema.Union([ParseOptions, Schema.Null])),
    parseType: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["sitemap", "crawl"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      parseOptions: "parse_options",
      parseType: "parse_type",
    }),
  ),
) as unknown as Schema.Codec<WebCrawler>;

interface SourceParams {
  /** List of path patterns to exclude. Uses micromatch glob syntax: \ matches within a path segment,  matches across path segments (e.g., /admin/  matches /admin/users and /admin/settings/advanced) */
  excludeItems?: string[] | null;
  /** List of path patterns to include. Uses micromatch glob syntax: \ matches within a path segment,  matches across path segments (e.g., /blog/  matches /blog/post and /blog/2024/post) */
  includeItems?: string[] | null;
  prefix?: string | null;
  r2Jurisdiction?: string | null;
  webCrawler?: {
    parseOptions?: {
      contentSelector?: { path: string; selector: string }[] | null;
      includeHeaders?: Record<string, unknown> | null;
      includeImages?: boolean | null;
      specificSitemaps?: string[] | null;
      useBrowserRendering?: boolean | null;
    } | null;
    parseType?: "sitemap" | "crawl" | (string & {}) | null;
  } | null;
}
const SourceParams = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    excludeItems: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    includeItems: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    r2Jurisdiction: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    webCrawler: Schema.optional(Schema.Union([WebCrawler, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      excludeItems: "exclude_items",
      includeItems: "include_items",
      prefix: "prefix",
      r2Jurisdiction: "r2_jurisdiction",
      webCrawler: "web_crawler",
    }),
  ),
) as unknown as Schema.Codec<SourceParams>;

interface ListInstancesResponseResult {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | (string & {}) | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}
const ListInstancesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdAt: "created_at",
        modifiedAt: "modified_at",
        aiGatewayId: "ai_gateway_id",
        aiSearchModel: "ai_search_model",
        cache: "cache",
        cacheThreshold: "cache_threshold",
        cacheTtl: "cache_ttl",
        chunkOverlap: "chunk_overlap",
        chunkSize: "chunk_size",
        createdBy: "created_by",
        customMetadata: "custom_metadata",
        embeddingModel: "embedding_model",
        enable: "enable",
        engineVersion: "engine_version",
        fusionMethod: "fusion_method",
        hybridSearchEnabled: "hybrid_search_enabled",
        indexMethod: "index_method",
        indexingOptions: "indexing_options",
        lastActivity: "last_activity",
        maxNumResults: "max_num_results",
        metadata: "metadata",
        modifiedBy: "modified_by",
        namespace: "namespace",
        paused: "paused",
        publicEndpointId: "public_endpoint_id",
        publicEndpointParams: "public_endpoint_params",
        reranking: "reranking",
        rerankingModel: "reranking_model",
        retrievalOptions: "retrieval_options",
        rewriteModel: "rewrite_model",
        rewriteQuery: "rewrite_query",
        scoreThreshold: "score_threshold",
        source: "source",
        sourceParams: "source_params",
        status: "status",
        syncInterval: "sync_interval",
        tokenId: "token_id",
        type: "type",
      }),
    ),
) as unknown as Schema.Codec<ListInstancesResponseResult>;

interface ListInstancesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListInstancesResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListInstancesResponseResultInfo>;

interface CreateInstanceRequestSourceParamsWebCrawlerCrawlOptions {
  depth?: number | null;
  includeExternalLinks?: boolean | null;
  includeSubdomains?: boolean | null;
  maxAge?: number | null;
  source?: "all" | "sitemaps" | "links" | (string & {}) | null;
}
const CreateInstanceRequestSourceParamsWebCrawlerCrawlOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      depth: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      includeExternalLinks: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      includeSubdomains: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      maxAge: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      source: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["all", "sitemaps", "links"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        depth: "depth",
        includeExternalLinks: "include_external_links",
        includeSubdomains: "include_subdomains",
        maxAge: "max_age",
        source: "source",
      }),
    ),
  ) as unknown as Schema.Codec<CreateInstanceRequestSourceParamsWebCrawlerCrawlOptions>;

interface CreateInstanceRequestSourceParamsWebCrawlerStoreOptions {
  storageId: string;
  r2Jurisdiction?: string | null;
  storageType?: string | null;
}
const CreateInstanceRequestSourceParamsWebCrawlerStoreOptions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      storageId: Schema.String,
      r2Jurisdiction: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      storageType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        storageId: "storage_id",
        r2Jurisdiction: "r2_jurisdiction",
        storageType: "storage_type",
      }),
    ),
  ) as unknown as Schema.Codec<CreateInstanceRequestSourceParamsWebCrawlerStoreOptions>;

interface WebCrawler2 {
  parseOptions?: {
    contentSelector?: { path: string; selector: string }[] | null;
    includeHeaders?: Record<string, unknown> | null;
    includeImages?: boolean | null;
    specificSitemaps?: string[] | null;
    useBrowserRendering?: boolean | null;
  } | null;
  parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
  crawlOptions?: {
    depth?: number | null;
    includeExternalLinks?: boolean | null;
    includeSubdomains?: boolean | null;
    maxAge?: number | null;
    source?: "all" | "sitemaps" | "links" | (string & {}) | null;
  } | null;
  storeOptions?: {
    storageId: string;
    r2Jurisdiction?: string | null;
    storageType?: string | null;
  } | null;
}
const WebCrawler2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    parseOptions: Schema.optional(Schema.Union([ParseOptions, Schema.Null])),
    parseType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["sitemap", "crawl", "feed-rss"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    crawlOptions: Schema.optional(
      Schema.Union([
        CreateInstanceRequestSourceParamsWebCrawlerCrawlOptions,
        Schema.Null,
      ]),
    ),
    storeOptions: Schema.optional(
      Schema.Union([
        CreateInstanceRequestSourceParamsWebCrawlerStoreOptions,
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      parseOptions: "parse_options",
      parseType: "parse_type",
      crawlOptions: "crawl_options",
      storeOptions: "store_options",
    }),
  ),
) as unknown as Schema.Codec<WebCrawler2>;

interface SourceParams2 {
  /** List of path patterns to exclude. Uses micromatch glob syntax: \ matches within a path segment,  matches across path segments (e.g., /admin/  matches /admin/users and /admin/settings/advanced) */
  excludeItems?: string[] | null;
  /** List of path patterns to include. Uses micromatch glob syntax: \ matches within a path segment,  matches across path segments (e.g., /blog/  matches /blog/post and /blog/2024/post) */
  includeItems?: string[] | null;
  prefix?: string | null;
  r2Jurisdiction?: string | null;
  webCrawler?: {
    parseOptions?: {
      contentSelector?: { path: string; selector: string }[] | null;
      includeHeaders?: Record<string, unknown> | null;
      includeImages?: boolean | null;
      specificSitemaps?: string[] | null;
      useBrowserRendering?: boolean | null;
    } | null;
    parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
    crawlOptions?: {
      depth?: number | null;
      includeExternalLinks?: boolean | null;
      includeSubdomains?: boolean | null;
      maxAge?: number | null;
      source?: "all" | "sitemaps" | "links" | (string & {}) | null;
    } | null;
    storeOptions?: {
      storageId: string;
      r2Jurisdiction?: string | null;
      storageType?: string | null;
    } | null;
  } | null;
}
const SourceParams2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    excludeItems: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    includeItems: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    r2Jurisdiction: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    webCrawler: Schema.optional(Schema.Union([WebCrawler2, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      excludeItems: "exclude_items",
      includeItems: "include_items",
      prefix: "prefix",
      r2Jurisdiction: "r2_jurisdiction",
      webCrawler: "web_crawler",
    }),
  ),
) as unknown as Schema.Codec<SourceParams2>;

interface R2 {
  metadataSizeBytes: number;
  objectCount: number;
  payloadSizeBytes: number;
}
const R2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    metadataSizeBytes: Schema.Number,
    objectCount: Schema.Number,
    payloadSizeBytes: Schema.Number,
  }),
) as unknown as Schema.Codec<R2>;

interface Vectorize {
  dimensions: number;
  vectorsCount: number;
}
const Vectorize = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dimensions: Schema.Number,
    vectorsCount: Schema.Number,
  }),
) as unknown as Schema.Codec<Vectorize>;

interface Engine {
  /** R2 bucket storage usage in bytes. */
  r2?: {
    metadataSizeBytes: number;
    objectCount: number;
    payloadSizeBytes: number;
  } | null;
  /** Vectorize index metadata (dimensions, vector count). */
  vectorize?: { dimensions: number; vectorsCount: number } | null;
}
const Engine = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    r2: Schema.optional(Schema.Union([R2, Schema.Null])),
    vectorize: Schema.optional(Schema.Union([Vectorize, Schema.Null])),
  }),
) as unknown as Schema.Codec<Engine>;

interface ListInstanceJobsResponseResult {
  id: string;
  source: "user" | "schedule" | (string & {});
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}
const ListInstanceJobsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "schedule"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSeenAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        source: "source",
        description: "description",
        endReason: "end_reason",
        endedAt: "ended_at",
        lastSeenAt: "last_seen_at",
        startedAt: "started_at",
      }),
    ),
  ) as unknown as Schema.Codec<ListInstanceJobsResponseResult>;

interface JobLogsResponseItem {
  id: number;
  createdAt: number;
  message: string;
  messageType: number;
}
const JobLogsResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Number,
    createdAt: Schema.Number,
    message: Schema.String,
    messageType: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      createdAt: "created_at",
      message: "message",
      messageType: "message_type",
    }),
  ),
) as unknown as Schema.Codec<JobLogsResponseItem>;

interface ListNamespacesResponseResult {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}
const ListNamespacesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdAt: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        name: "name",
        description: "description",
      }),
    ),
) as unknown as Schema.Codec<ListNamespacesResponseResult>;

interface ListNamespaceInstanceItemsResponseResult {
  id: string;
  checksum: string;
  chunksCount: number | null;
  createdAt: string;
  fileSize: number | null;
  key: string;
  lastSeenAt: string;
  namespace: string;
  nextAction: "INDEX" | "DELETE" | null;
  /** Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items. */
  sourceId: string | null;
  status:
    | "queued"
    | "running"
    | "completed"
    | "error"
    | "skipped"
    | "outdated"
    | (string & {});
  error?: string | null;
}
const ListNamespaceInstanceItemsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      checksum: Schema.String,
      chunksCount: Schema.Union([Schema.Number, Schema.Null]),
      createdAt: Schema.String,
      fileSize: Schema.Union([Schema.Number, Schema.Null]),
      key: Schema.String,
      lastSeenAt: Schema.String,
      namespace: Schema.String,
      nextAction: Schema.Union([
        Schema.Literal("INDEX"),
        Schema.Literal("DELETE"),
        Schema.Null,
      ]),
      sourceId: Schema.Union([Schema.String, Schema.Null]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "completed",
          "error",
          "skipped",
          "outdated",
        ]),
        Schema.String,
      ]),
      error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        checksum: "checksum",
        chunksCount: "chunks_count",
        createdAt: "created_at",
        fileSize: "file_size",
        key: "key",
        lastSeenAt: "last_seen_at",
        namespace: "namespace",
        nextAction: "next_action",
        sourceId: "source_id",
        status: "status",
        error: "error",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceInstanceItemsResponseResult>;

interface File2 {
  /** The file to upload (max 4MB). Filename must not exceed 128 characters. */
  file: File | Blob;
  /** JSON string of custom metadata key-value pairs. */
  metadata?: string | null;
  /** Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item reflects a qu */
  waitForCompletion?: boolean | null;
}
const File2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    file: UploadableSchema.pipe(T.HttpFormDataFile()),
    metadata: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    waitForCompletion: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      file: "file",
      metadata: "metadata",
      waitForCompletion: "wait_for_completion",
    }),
  ),
) as unknown as Schema.Codec<File2>;

interface ItemChunksResponseItem {
  id: string;
  item: {
    key: string;
    metadata?: Record<string, unknown> | null;
    timestamp?: number | null;
  };
  text: string;
  endByte?: number | null;
  startByte?: number | null;
}
const ItemChunksResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    item: Item,
    text: Schema.String,
    endByte: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    startByte: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      item: "item",
      text: "text",
      endByte: "end_byte",
      startByte: "start_byte",
    }),
  ),
) as unknown as Schema.Codec<ItemChunksResponseItem>;

interface ItemLogsResponseItem {
  action: string;
  chunkCount: number | null;
  errorType: string | null;
  fileKey: string;
  message: string | null;
  processingTimeMs: number | null;
  timestamp: string;
}
const ItemLogsResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.String,
    chunkCount: Schema.Union([Schema.Number, Schema.Null]),
    errorType: Schema.Union([Schema.String, Schema.Null]),
    fileKey: Schema.String,
    message: Schema.Union([Schema.String, Schema.Null]),
    processingTimeMs: Schema.Union([Schema.Number, Schema.Null]),
    timestamp: Schema.String,
  }),
) as unknown as Schema.Codec<ItemLogsResponseItem>;

interface ListTokensResponseResult {
  id: string;
  cfApiId: string;
  createdAt: string;
  modifiedAt: string;
  name: string;
  createdBy?: string | null;
  enabled?: boolean | null;
  legacy?: boolean | null;
  modifiedBy?: string | null;
}
const ListTokensResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      cfApiId: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      legacy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        cfApiId: "cf_api_id",
        createdAt: "created_at",
        modifiedAt: "modified_at",
        name: "name",
        createdBy: "created_by",
        enabled: "enabled",
        legacy: "legacy",
        modifiedBy: "modified_by",
      }),
    ),
) as unknown as Schema.Codec<ListTokensResponseResult>;

// =============================================================================
// CompletionsInstance
// =============================================================================

export interface ChatCompletionsInstanceRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  messages: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  }[];
  /** Body param */
  aiSearchOptions?: {
    cache?: {
      cacheThreshold?:
        | "super_strict_match"
        | "close_enough"
        | "flexible_friend"
        | "anything_goes"
        | (string & {});
      enabled?: boolean;
    };
    queryRewrite?: {
      enabled?: boolean;
      model?:
        | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
        | "@cf/zai-org/glm-4.7-flash"
        | "@cf/meta/llama-3.1-8b-instruct-fast"
        | "@cf/meta/llama-3.1-8b-instruct-fp8"
        | "@cf/meta/llama-4-scout-17b-16e-instruct"
        | "@cf/qwen/qwen3-30b-a3b-fp8"
        | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
        | "@cf/moonshotai/kimi-k2-instruct"
        | "@cf/google/gemma-3-12b-it"
        | "@cf/google/gemma-4-26b-a4b-it"
        | "@cf/moonshotai/kimi-k2.5"
        | "anthropic/claude-3-7-sonnet"
        | "anthropic/claude-sonnet-4"
        | "anthropic/claude-opus-4"
        | "anthropic/claude-3-5-haiku"
        | "cerebras/qwen-3-235b-a22b-instruct"
        | "cerebras/qwen-3-235b-a22b-thinking"
        | "cerebras/llama-3.3-70b"
        | "cerebras/llama-4-maverick-17b-128e-instruct"
        | "cerebras/llama-4-scout-17b-16e-instruct"
        | "cerebras/gpt-oss-120b"
        | "google-ai-studio/gemini-2.5-flash"
        | "google-ai-studio/gemini-2.5-pro"
        | "grok/grok-4"
        | "groq/llama-3.3-70b-versatile"
        | "groq/llama-3.1-8b-instant"
        | "openai/gpt-5"
        | "openai/gpt-5-mini"
        | "openai/gpt-5-nano"
        | ""
        | (string & {});
      rewritePrompt?: string;
    };
    reranking?: {
      enabled?: boolean;
      matchThreshold?: number;
      model?: "@cf/baai/bge-reranker-base" | "" | (string & {});
    };
    retrieval?: {
      boostBy?: {
        field: string;
        direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
      }[];
      contextExpansion?: number;
      filters?: Record<string, unknown>;
      fusionMethod?: "max" | "rrf" | (string & {});
      keywordMatchMode?: "and" | "or" | (string & {});
      matchThreshold?: number;
      maxNumResults?: number;
      retrievalType?: "vector" | "keyword" | "hybrid" | (string & {});
      returnOnFailure?: boolean;
    };
  };
  /** Body param */
  model?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | (string & {});
  /** Body param */
  stream?: boolean;
}

export const ChatCompletionsInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      messages: Schema.Array(Message),
      aiSearchOptions: Schema.optional(AisearchOptions),
      model: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
            "@cf/zai-org/glm-4.7-flash",
            "@cf/meta/llama-3.1-8b-instruct-fast",
            "@cf/meta/llama-3.1-8b-instruct-fp8",
            "@cf/meta/llama-4-scout-17b-16e-instruct",
            "@cf/qwen/qwen3-30b-a3b-fp8",
            "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
            "@cf/moonshotai/kimi-k2-instruct",
            "@cf/google/gemma-3-12b-it",
            "@cf/google/gemma-4-26b-a4b-it",
            "@cf/moonshotai/kimi-k2.5",
            "anthropic/claude-3-7-sonnet",
            "anthropic/claude-sonnet-4",
            "anthropic/claude-opus-4",
            "anthropic/claude-3-5-haiku",
            "cerebras/qwen-3-235b-a22b-instruct",
            "cerebras/qwen-3-235b-a22b-thinking",
            "cerebras/llama-3.3-70b",
            "cerebras/llama-4-maverick-17b-128e-instruct",
            "cerebras/llama-4-scout-17b-16e-instruct",
            "cerebras/gpt-oss-120b",
            "google-ai-studio/gemini-2.5-flash",
            "google-ai-studio/gemini-2.5-pro",
            "grok/grok-4",
            "groq/llama-3.3-70b-versatile",
            "groq/llama-3.1-8b-instant",
            "openai/gpt-5",
            "openai/gpt-5-mini",
            "openai/gpt-5-nano",
            "",
          ]),
          Schema.String,
        ]),
      ),
      stream: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        messages: "messages",
        aiSearchOptions: "ai_search_options",
        model: "model",
        stream: "stream",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/instances/{id}/chat/completions",
      }),
    ),
  ) as unknown as Schema.Codec<ChatCompletionsInstanceRequest>;

export interface ChatCompletionsInstanceResponse {
  choices: {
    message: {
      content:
        | string
        | (
            | { text: string; type: "text" }
            | { imageUrl: { url: string }; type: "image_url" }
          )[]
        | null;
      role:
        | "system"
        | "developer"
        | "user"
        | "assistant"
        | "tool"
        | (string & {});
    };
    index?: number | null;
  }[];
  chunks: {
    id: string;
    score: number;
    text: string;
    type: string;
    item?: {
      key: string;
      metadata?: Record<string, unknown> | null;
      timestamp?: number | null;
    } | null;
    scoringDetails?: {
      fusionMethod?: "rrf" | "max" | (string & {}) | null;
      keywordRank?: number | null;
      keywordScore?: number | null;
      rerankingScore?: number | null;
      vectorRank?: number | null;
      vectorScore?: number | null;
    } | null;
  }[];
  id?: string | null;
  model?: string | null;
  object?: string | null;
}

export const ChatCompletionsInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      choices: Schema.Array(Choice),
      chunks: Schema.Array(Chunk),
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      model: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      object: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ChatCompletionsInstanceResponse>;

export type ChatCompletionsInstanceError = DefaultErrors;

export const chatCompletionsInstance: API.OperationMethod<
  ChatCompletionsInstanceRequest,
  ChatCompletionsInstanceResponse,
  ChatCompletionsInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ChatCompletionsInstanceRequest,
  output: ChatCompletionsInstanceResponse,
  errors: [],
}));

// =============================================================================
// CompletionsNamespace
// =============================================================================

export interface ChatCompletionsNamespaceRequest {
  name: string;
  /** Path param */
  accountId: string;
  /** Body param */
  aiSearchOptions: {
    instanceIds: string[];
    cache?: {
      cacheThreshold?:
        | "super_strict_match"
        | "close_enough"
        | "flexible_friend"
        | "anything_goes"
        | (string & {});
      enabled?: boolean;
    };
    queryRewrite?: {
      enabled?: boolean;
      model?:
        | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
        | "@cf/zai-org/glm-4.7-flash"
        | "@cf/meta/llama-3.1-8b-instruct-fast"
        | "@cf/meta/llama-3.1-8b-instruct-fp8"
        | "@cf/meta/llama-4-scout-17b-16e-instruct"
        | "@cf/qwen/qwen3-30b-a3b-fp8"
        | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
        | "@cf/moonshotai/kimi-k2-instruct"
        | "@cf/google/gemma-3-12b-it"
        | "@cf/google/gemma-4-26b-a4b-it"
        | "@cf/moonshotai/kimi-k2.5"
        | "anthropic/claude-3-7-sonnet"
        | "anthropic/claude-sonnet-4"
        | "anthropic/claude-opus-4"
        | "anthropic/claude-3-5-haiku"
        | "cerebras/qwen-3-235b-a22b-instruct"
        | "cerebras/qwen-3-235b-a22b-thinking"
        | "cerebras/llama-3.3-70b"
        | "cerebras/llama-4-maverick-17b-128e-instruct"
        | "cerebras/llama-4-scout-17b-16e-instruct"
        | "cerebras/gpt-oss-120b"
        | "google-ai-studio/gemini-2.5-flash"
        | "google-ai-studio/gemini-2.5-pro"
        | "grok/grok-4"
        | "groq/llama-3.3-70b-versatile"
        | "groq/llama-3.1-8b-instant"
        | "openai/gpt-5"
        | "openai/gpt-5-mini"
        | "openai/gpt-5-nano"
        | ""
        | (string & {});
      rewritePrompt?: string;
    };
    reranking?: {
      enabled?: boolean;
      matchThreshold?: number;
      model?: "@cf/baai/bge-reranker-base" | "" | (string & {});
    };
    retrieval?: {
      boostBy?: {
        field: string;
        direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
      }[];
      contextExpansion?: number;
      filters?: Record<string, unknown>;
      fusionMethod?: "max" | "rrf" | (string & {});
      keywordMatchMode?: "and" | "or" | (string & {});
      matchThreshold?: number;
      maxNumResults?: number;
      retrievalType?: "vector" | "keyword" | "hybrid" | (string & {});
      returnOnFailure?: boolean;
    };
  };
  /** Body param */
  messages: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  }[];
  /** Body param */
  model?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | (string & {});
  /** Body param */
  stream?: boolean;
}

export const ChatCompletionsNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiSearchOptions: AisearchOptions2,
      messages: Schema.Array(Message),
      model: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
            "@cf/zai-org/glm-4.7-flash",
            "@cf/meta/llama-3.1-8b-instruct-fast",
            "@cf/meta/llama-3.1-8b-instruct-fp8",
            "@cf/meta/llama-4-scout-17b-16e-instruct",
            "@cf/qwen/qwen3-30b-a3b-fp8",
            "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
            "@cf/moonshotai/kimi-k2-instruct",
            "@cf/google/gemma-3-12b-it",
            "@cf/google/gemma-4-26b-a4b-it",
            "@cf/moonshotai/kimi-k2.5",
            "anthropic/claude-3-7-sonnet",
            "anthropic/claude-sonnet-4",
            "anthropic/claude-opus-4",
            "anthropic/claude-3-5-haiku",
            "cerebras/qwen-3-235b-a22b-instruct",
            "cerebras/qwen-3-235b-a22b-thinking",
            "cerebras/llama-3.3-70b",
            "cerebras/llama-4-maverick-17b-128e-instruct",
            "cerebras/llama-4-scout-17b-16e-instruct",
            "cerebras/gpt-oss-120b",
            "google-ai-studio/gemini-2.5-flash",
            "google-ai-studio/gemini-2.5-pro",
            "grok/grok-4",
            "groq/llama-3.3-70b-versatile",
            "groq/llama-3.1-8b-instant",
            "openai/gpt-5",
            "openai/gpt-5-mini",
            "openai/gpt-5-nano",
            "",
          ]),
          Schema.String,
        ]),
      ),
      stream: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        aiSearchOptions: "ai_search_options",
        messages: "messages",
        model: "model",
        stream: "stream",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/chat/completions",
      }),
    ),
  ) as unknown as Schema.Codec<ChatCompletionsNamespaceRequest>;

export interface ChatCompletionsNamespaceResponse {
  choices: {
    message: {
      content:
        | string
        | (
            | { text: string; type: "text" }
            | { imageUrl: { url: string }; type: "image_url" }
          )[]
        | null;
      role:
        | "system"
        | "developer"
        | "user"
        | "assistant"
        | "tool"
        | (string & {});
    };
    index?: number | null;
  }[];
  chunks: {
    id: string;
    instanceId: string;
    score: number;
    text: string;
    type: string;
    item?: {
      key: string;
      metadata?: Record<string, unknown> | null;
      timestamp?: number | null;
    } | null;
    scoringDetails?: {
      fusionMethod?: "rrf" | "max" | (string & {}) | null;
      keywordRank?: number | null;
      keywordScore?: number | null;
      rerankingScore?: number | null;
      vectorRank?: number | null;
      vectorScore?: number | null;
    } | null;
  }[];
  id?: string | null;
  errors?: { instanceId: string; message: string }[] | null;
  model?: string | null;
  object?: string | null;
}

export const ChatCompletionsNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      choices: Schema.Array(Choice),
      chunks: Schema.Array(Chunk2),
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      errors: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
      model: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      object: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ChatCompletionsNamespaceResponse>;

export type ChatCompletionsNamespaceError = DefaultErrors;

export const chatCompletionsNamespace: API.OperationMethod<
  ChatCompletionsNamespaceRequest,
  ChatCompletionsNamespaceResponse,
  ChatCompletionsNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ChatCompletionsNamespaceRequest,
  output: ChatCompletionsNamespaceResponse,
  errors: [],
}));

// =============================================================================
// CompletionsNamespaceInstance
// =============================================================================

export interface ChatCompletionsNamespaceInstanceRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  messages: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  }[];
  /** Body param */
  aiSearchOptions?: {
    cache?: {
      cacheThreshold?:
        | "super_strict_match"
        | "close_enough"
        | "flexible_friend"
        | "anything_goes"
        | (string & {});
      enabled?: boolean;
    };
    queryRewrite?: {
      enabled?: boolean;
      model?:
        | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
        | "@cf/zai-org/glm-4.7-flash"
        | "@cf/meta/llama-3.1-8b-instruct-fast"
        | "@cf/meta/llama-3.1-8b-instruct-fp8"
        | "@cf/meta/llama-4-scout-17b-16e-instruct"
        | "@cf/qwen/qwen3-30b-a3b-fp8"
        | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
        | "@cf/moonshotai/kimi-k2-instruct"
        | "@cf/google/gemma-3-12b-it"
        | "@cf/google/gemma-4-26b-a4b-it"
        | "@cf/moonshotai/kimi-k2.5"
        | "anthropic/claude-3-7-sonnet"
        | "anthropic/claude-sonnet-4"
        | "anthropic/claude-opus-4"
        | "anthropic/claude-3-5-haiku"
        | "cerebras/qwen-3-235b-a22b-instruct"
        | "cerebras/qwen-3-235b-a22b-thinking"
        | "cerebras/llama-3.3-70b"
        | "cerebras/llama-4-maverick-17b-128e-instruct"
        | "cerebras/llama-4-scout-17b-16e-instruct"
        | "cerebras/gpt-oss-120b"
        | "google-ai-studio/gemini-2.5-flash"
        | "google-ai-studio/gemini-2.5-pro"
        | "grok/grok-4"
        | "groq/llama-3.3-70b-versatile"
        | "groq/llama-3.1-8b-instant"
        | "openai/gpt-5"
        | "openai/gpt-5-mini"
        | "openai/gpt-5-nano"
        | ""
        | (string & {});
      rewritePrompt?: string;
    };
    reranking?: {
      enabled?: boolean;
      matchThreshold?: number;
      model?: "@cf/baai/bge-reranker-base" | "" | (string & {});
    };
    retrieval?: {
      boostBy?: {
        field: string;
        direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
      }[];
      contextExpansion?: number;
      filters?: Record<string, unknown>;
      fusionMethod?: "max" | "rrf" | (string & {});
      keywordMatchMode?: "and" | "or" | (string & {});
      matchThreshold?: number;
      maxNumResults?: number;
      retrievalType?: "vector" | "keyword" | "hybrid" | (string & {});
      returnOnFailure?: boolean;
    };
  };
  /** Body param */
  model?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | (string & {});
  /** Body param */
  stream?: boolean;
}

export const ChatCompletionsNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      messages: Schema.Array(Message),
      aiSearchOptions: Schema.optional(AisearchOptions),
      model: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
            "@cf/zai-org/glm-4.7-flash",
            "@cf/meta/llama-3.1-8b-instruct-fast",
            "@cf/meta/llama-3.1-8b-instruct-fp8",
            "@cf/meta/llama-4-scout-17b-16e-instruct",
            "@cf/qwen/qwen3-30b-a3b-fp8",
            "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
            "@cf/moonshotai/kimi-k2-instruct",
            "@cf/google/gemma-3-12b-it",
            "@cf/google/gemma-4-26b-a4b-it",
            "@cf/moonshotai/kimi-k2.5",
            "anthropic/claude-3-7-sonnet",
            "anthropic/claude-sonnet-4",
            "anthropic/claude-opus-4",
            "anthropic/claude-3-5-haiku",
            "cerebras/qwen-3-235b-a22b-instruct",
            "cerebras/qwen-3-235b-a22b-thinking",
            "cerebras/llama-3.3-70b",
            "cerebras/llama-4-maverick-17b-128e-instruct",
            "cerebras/llama-4-scout-17b-16e-instruct",
            "cerebras/gpt-oss-120b",
            "google-ai-studio/gemini-2.5-flash",
            "google-ai-studio/gemini-2.5-pro",
            "grok/grok-4",
            "groq/llama-3.3-70b-versatile",
            "groq/llama-3.1-8b-instant",
            "openai/gpt-5",
            "openai/gpt-5-mini",
            "openai/gpt-5-nano",
            "",
          ]),
          Schema.String,
        ]),
      ),
      stream: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        messages: "messages",
        aiSearchOptions: "ai_search_options",
        model: "model",
        stream: "stream",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions",
      }),
    ),
  ) as unknown as Schema.Codec<ChatCompletionsNamespaceInstanceRequest>;

export interface ChatCompletionsNamespaceInstanceResponse {
  choices: {
    message: {
      content:
        | string
        | (
            | { text: string; type: "text" }
            | { imageUrl: { url: string }; type: "image_url" }
          )[]
        | null;
      role:
        | "system"
        | "developer"
        | "user"
        | "assistant"
        | "tool"
        | (string & {});
    };
    index?: number | null;
  }[];
  chunks: {
    id: string;
    score: number;
    text: string;
    type: string;
    item?: {
      key: string;
      metadata?: Record<string, unknown> | null;
      timestamp?: number | null;
    } | null;
    scoringDetails?: {
      fusionMethod?: "rrf" | "max" | (string & {}) | null;
      keywordRank?: number | null;
      keywordScore?: number | null;
      rerankingScore?: number | null;
      vectorRank?: number | null;
      vectorScore?: number | null;
    } | null;
  }[];
  id?: string | null;
  model?: string | null;
  object?: string | null;
}

export const ChatCompletionsNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      choices: Schema.Array(Choice),
      chunks: Schema.Array(Chunk),
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      model: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      object: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<ChatCompletionsNamespaceInstanceResponse>;

export type ChatCompletionsNamespaceInstanceError = DefaultErrors;

export const chatCompletionsNamespaceInstance: API.OperationMethod<
  ChatCompletionsNamespaceInstanceRequest,
  ChatCompletionsNamespaceInstanceResponse,
  ChatCompletionsNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ChatCompletionsNamespaceInstanceRequest,
  output: ChatCompletionsNamespaceInstanceResponse,
  errors: [],
}));

// =============================================================================
// Instance
// =============================================================================

export interface ListInstancesRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter by namespace. */
  namespace?: string;
  /** Query param: Field to order results by. */
  orderBy?: "created_at";
  /** Query param: Order direction. */
  orderByDirection?: "asc" | "desc" | (string & {});
  /** Query param: Filter instances whose id contains this string (case-insensitive). */
  search?: string;
}

export const ListInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      namespace: Schema.optional(Schema.String).pipe(T.HttpQuery("namespace")),
      orderBy: Schema.optional(Schema.Literal("created_at")).pipe(
        T.HttpQuery("order_by"),
      ),
      orderByDirection: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("order_by_direction")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/instances",
      }),
    ),
) as unknown as Schema.Codec<ListInstancesRequest>;

export interface ListInstancesResponse {
  result: {
    id: string;
    createdAt?: string | null;
    modifiedAt?: string | null;
    aiGatewayId?: string | null;
    aiSearchModel?:
      | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
      | "@cf/zai-org/glm-4.7-flash"
      | "@cf/meta/llama-3.1-8b-instruct-fast"
      | "@cf/meta/llama-3.1-8b-instruct-fp8"
      | "@cf/meta/llama-4-scout-17b-16e-instruct"
      | "@cf/qwen/qwen3-30b-a3b-fp8"
      | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
      | "@cf/moonshotai/kimi-k2-instruct"
      | "@cf/google/gemma-3-12b-it"
      | "@cf/google/gemma-4-26b-a4b-it"
      | "@cf/moonshotai/kimi-k2.5"
      | "anthropic/claude-3-7-sonnet"
      | "anthropic/claude-sonnet-4"
      | "anthropic/claude-opus-4"
      | "anthropic/claude-3-5-haiku"
      | "cerebras/qwen-3-235b-a22b-instruct"
      | "cerebras/qwen-3-235b-a22b-thinking"
      | "cerebras/llama-3.3-70b"
      | "cerebras/llama-4-maverick-17b-128e-instruct"
      | "cerebras/llama-4-scout-17b-16e-instruct"
      | "cerebras/gpt-oss-120b"
      | "google-ai-studio/gemini-2.5-flash"
      | "google-ai-studio/gemini-2.5-pro"
      | "grok/grok-4"
      | "groq/llama-3.3-70b-versatile"
      | "groq/llama-3.1-8b-instant"
      | "openai/gpt-5"
      | "openai/gpt-5-mini"
      | "openai/gpt-5-nano"
      | ""
      | null;
    cache?: boolean | null;
    cacheThreshold?:
      | "super_strict_match"
      | "close_enough"
      | "flexible_friend"
      | "anything_goes"
      | null;
    cacheTtl?: number | null;
    chunkOverlap?: number | null;
    chunkSize?: number | null;
    createdBy?: string | null;
    customMetadata?:
      | {
          dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
          fieldName: string;
        }[]
      | null;
    embeddingModel?:
      | "@cf/qwen/qwen3-embedding-0.6b"
      | "@cf/qwen/qwen3-vl-embedding-2b"
      | "@cf/baai/bge-m3"
      | "@cf/baai/bge-large-en-v1.5"
      | "@cf/google/embeddinggemma-300m"
      | "google-ai-studio/gemini-embedding-001"
      | "google-ai-studio/gemini-embedding-2-preview"
      | "openai/text-embedding-3-small"
      | "openai/text-embedding-3-large"
      | ""
      | null;
    enable?: boolean | null;
    engineVersion?: number | null;
    fusionMethod?: "max" | "rrf" | (string & {}) | null;
    hybridSearchEnabled?: boolean | null;
    indexMethod?: { keyword: boolean; vector: boolean } | null;
    indexingOptions?: {
      keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
    } | null;
    lastActivity?: string | null;
    maxNumResults?: number | null;
    metadata?: {
      createdFromAisearchWizard?: boolean | null;
      workerDomain?: string | null;
    } | null;
    modifiedBy?: string | null;
    namespace?: string | null;
    paused?: boolean | null;
    publicEndpointId?: string | null;
    publicEndpointParams?: {
      authorizedHosts?: string[] | null;
      chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
      enabled?: boolean | null;
      mcp?: { description?: string | null; disabled?: boolean | null } | null;
      rateLimit?: {
        periodMs?: number | null;
        requests?: number | null;
        technique?: "fixed" | "sliding" | (string & {}) | null;
      } | null;
      searchEndpoint?: { disabled?: boolean | null } | null;
    } | null;
    reranking?: boolean | null;
    rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
    retrievalOptions?: {
      boostBy?:
        | {
            field: string;
            direction?:
              | "asc"
              | "desc"
              | "exists"
              | "not_exists"
              | (string & {})
              | null;
          }[]
        | null;
      keywordMatchMode?: "and" | "or" | (string & {}) | null;
    } | null;
    rewriteModel?:
      | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
      | "@cf/zai-org/glm-4.7-flash"
      | "@cf/meta/llama-3.1-8b-instruct-fast"
      | "@cf/meta/llama-3.1-8b-instruct-fp8"
      | "@cf/meta/llama-4-scout-17b-16e-instruct"
      | "@cf/qwen/qwen3-30b-a3b-fp8"
      | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
      | "@cf/moonshotai/kimi-k2-instruct"
      | "@cf/google/gemma-3-12b-it"
      | "@cf/google/gemma-4-26b-a4b-it"
      | "@cf/moonshotai/kimi-k2.5"
      | "anthropic/claude-3-7-sonnet"
      | "anthropic/claude-sonnet-4"
      | "anthropic/claude-opus-4"
      | "anthropic/claude-3-5-haiku"
      | "cerebras/qwen-3-235b-a22b-instruct"
      | "cerebras/qwen-3-235b-a22b-thinking"
      | "cerebras/llama-3.3-70b"
      | "cerebras/llama-4-maverick-17b-128e-instruct"
      | "cerebras/llama-4-scout-17b-16e-instruct"
      | "cerebras/gpt-oss-120b"
      | "google-ai-studio/gemini-2.5-flash"
      | "google-ai-studio/gemini-2.5-pro"
      | "grok/grok-4"
      | "groq/llama-3.3-70b-versatile"
      | "groq/llama-3.1-8b-instant"
      | "openai/gpt-5"
      | "openai/gpt-5-mini"
      | "openai/gpt-5-nano"
      | ""
      | null;
    rewriteQuery?: boolean | null;
    scoreThreshold?: number | null;
    source?: string | null;
    sourceParams?: {
      excludeItems?: string[] | null;
      includeItems?: string[] | null;
      prefix?: string | null;
      r2Jurisdiction?: string | null;
      webCrawler?: {
        parseOptions?: {
          contentSelector?: { path: string; selector: string }[] | null;
          includeHeaders?: Record<string, unknown> | null;
          includeImages?: boolean | null;
          specificSitemaps?: string[] | null;
          useBrowserRendering?: boolean | null;
        } | null;
        parseType?: "sitemap" | "crawl" | (string & {}) | null;
      } | null;
    } | null;
    status?: string | null;
    syncInterval?: number | null;
    tokenId?: string | null;
    type?: "r2" | "web-crawler" | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListInstancesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListInstancesResponse>;

export type ListInstancesError = DefaultErrors | InvalidRoute | Forbidden;

export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInstancesRequest,
  output: ListInstancesResponse,
  errors: [InvalidRoute, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateInstanceRequest {
  /** Path param */
  accountId: string;
  /** Body param: AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  /** Body param */
  aiGatewayId?: string | null;
  /** Body param */
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  cache?: boolean;
  /** Body param */
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | (string & {});
  /** Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number;
  /** Body param */
  chunk?: boolean;
  /** Body param */
  chunkOverlap?: number;
  /** Body param */
  chunkSize?: number;
  /** Body param */
  customMetadata?: {
    dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
    fieldName: string;
  }[];
  /** Body param */
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  /** Body param */
  fusionMethod?: "max" | "rrf" | (string & {});
  /** @deprecated Body param: Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean;
  /** Body param: Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean };
  /** Body param */
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {});
  } | null;
  /** Body param */
  maxNumResults?: number;
  /** Body param */
  metadata?: { createdFromAisearchWizard?: boolean; workerDomain?: string };
  /** Body param */
  publicEndpointParams?: {
    authorizedHosts?: string[];
    chatCompletionsEndpoint?: { disabled?: boolean };
    enabled?: boolean;
    mcp?: { description?: string; disabled?: boolean };
    rateLimit?: {
      periodMs?: number;
      requests?: number;
      technique?: "fixed" | "sliding" | (string & {});
    };
    searchEndpoint?: { disabled?: boolean };
  };
  /** Body param */
  reranking?: boolean;
  /** Body param */
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  /** Body param */
  retrievalOptions?: {
    boostBy?: {
      field: string;
      direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
    }[];
    keywordMatchMode?: "and" | "or" | (string & {});
  } | null;
  /** Body param */
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  rewriteQuery?: boolean;
  /** Body param */
  scoreThreshold?: number;
  /** Body param */
  source?: string | null;
  /** Body param */
  sourceParams?: {
    excludeItems?: string[];
    includeItems?: string[];
    prefix?: string;
    r2Jurisdiction?: string;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {});
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: string;
      };
    };
  } | null;
  /** Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number;
  /** Body param */
  tokenId?: string;
  /** Body param */
  type?: "r2" | "web-crawler" | null;
}

export const CreateInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      id: Schema.String,
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Boolean),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "super_strict_match",
            "close_enough",
            "flexible_friend",
            "anything_goes",
          ]),
          Schema.String,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Number),
      chunk: Schema.optional(Schema.Boolean),
      chunkOverlap: Schema.optional(Schema.Number),
      chunkSize: Schema.optional(Schema.Number),
      customMetadata: Schema.optional(Schema.Array(CustomMetadata)),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
      ),
      hybridSearchEnabled: Schema.optional(Schema.Boolean),
      indexMethod: Schema.optional(IndexMethod),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      maxNumResults: Schema.optional(Schema.Number),
      metadata: Schema.optional(Metadata),
      publicEndpointParams: Schema.optional(PublicEndpointParams),
      reranking: Schema.optional(Schema.Boolean),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(Schema.Boolean),
      scoreThreshold: Schema.optional(Schema.Number),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      syncInterval: Schema.optional(Schema.Number),
      tokenId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        aiGatewayId: "ai_gateway_id",
        aiSearchModel: "ai_search_model",
        cache: "cache",
        cacheThreshold: "cache_threshold",
        cacheTtl: "cache_ttl",
        chunk: "chunk",
        chunkOverlap: "chunk_overlap",
        chunkSize: "chunk_size",
        customMetadata: "custom_metadata",
        embeddingModel: "embedding_model",
        fusionMethod: "fusion_method",
        hybridSearchEnabled: "hybrid_search_enabled",
        indexMethod: "index_method",
        indexingOptions: "indexing_options",
        maxNumResults: "max_num_results",
        metadata: "metadata",
        publicEndpointParams: "public_endpoint_params",
        reranking: "reranking",
        rerankingModel: "reranking_model",
        retrievalOptions: "retrieval_options",
        rewriteModel: "rewrite_model",
        rewriteQuery: "rewrite_query",
        scoreThreshold: "score_threshold",
        source: "source",
        sourceParams: "source_params",
        syncInterval: "sync_interval",
        tokenId: "token_id",
        type: "type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/instances",
      }),
    ),
) as unknown as Schema.Codec<CreateInstanceRequest>;

export interface CreateInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const CreateInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateInstanceResponse>;

export type CreateInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | InstanceAlreadyExists
  | InvalidTokenCredentials
  | Forbidden;

export const createInstance: API.OperationMethod<
  CreateInstanceRequest,
  CreateInstanceResponse,
  CreateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInstanceRequest,
  output: CreateInstanceResponse,
  errors: [
    ValidationError,
    NotFound,
    InvalidRoute,
    InstanceAlreadyExists,
    InvalidTokenCredentials,
    Forbidden,
  ],
}));

export interface UpdateInstanceRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  aiGatewayId?: string | null;
  /** Body param */
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  cache?: boolean;
  /** Body param */
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | (string & {});
  /** Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number;
  /** Body param */
  chunk?: boolean;
  /** Body param */
  chunkOverlap?: number;
  /** Body param */
  chunkSize?: number;
  /** Body param */
  customMetadata?: {
    dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
    fieldName: string;
  }[];
  /** Body param */
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  /** Body param */
  fusionMethod?: "max" | "rrf" | (string & {});
  /** Body param: Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean };
  /** Body param */
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {});
  } | null;
  /** Body param */
  maxNumResults?: number;
  /** Body param */
  metadata?: { createdFromAisearchWizard?: boolean; workerDomain?: string };
  /** Body param */
  paused?: boolean;
  /** Body param */
  publicEndpointParams?: {
    authorizedHosts?: string[];
    chatCompletionsEndpoint?: { disabled?: boolean };
    enabled?: boolean;
    mcp?: { description?: string; disabled?: boolean };
    rateLimit?: {
      periodMs?: number;
      requests?: number;
      technique?: "fixed" | "sliding" | (string & {});
    };
    searchEndpoint?: { disabled?: boolean };
  };
  /** Body param */
  reranking?: boolean;
  /** Body param */
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  /** Body param */
  retrievalOptions?: {
    boostBy?: {
      field: string;
      direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
    }[];
    keywordMatchMode?: "and" | "or" | (string & {});
  } | null;
  /** Body param */
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  rewriteQuery?: boolean;
  /** Body param */
  scoreThreshold?: number;
  /** Body param */
  source?: string | null;
  /** Body param */
  sourceParams?: {
    excludeItems?: string[];
    includeItems?: string[];
    prefix?: string;
    r2Jurisdiction?: string;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {});
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: string;
      };
    };
  } | null;
  /** Body param */
  summarization?: boolean;
  /** Body param */
  summarizationModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number;
  /** Body param */
  systemPromptAiSearch?: string | null;
  /** Body param */
  systemPromptIndexSummarization?: string | null;
  /** Body param */
  systemPromptRewriteQuery?: string | null;
  /** Body param */
  tokenId?: string;
}

export const UpdateInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Boolean),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "super_strict_match",
            "close_enough",
            "flexible_friend",
            "anything_goes",
          ]),
          Schema.String,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Number),
      chunk: Schema.optional(Schema.Boolean),
      chunkOverlap: Schema.optional(Schema.Number),
      chunkSize: Schema.optional(Schema.Number),
      customMetadata: Schema.optional(Schema.Array(CustomMetadata)),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
      ),
      indexMethod: Schema.optional(IndexMethod),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      maxNumResults: Schema.optional(Schema.Number),
      metadata: Schema.optional(Metadata),
      paused: Schema.optional(Schema.Boolean),
      publicEndpointParams: Schema.optional(PublicEndpointParams),
      reranking: Schema.optional(Schema.Boolean),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(Schema.Boolean),
      scoreThreshold: Schema.optional(Schema.Number),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      summarization: Schema.optional(Schema.Boolean),
      summarizationModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      syncInterval: Schema.optional(Schema.Number),
      systemPromptAiSearch: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      systemPromptIndexSummarization: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      systemPromptRewriteQuery: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      tokenId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        aiGatewayId: "ai_gateway_id",
        aiSearchModel: "ai_search_model",
        cache: "cache",
        cacheThreshold: "cache_threshold",
        cacheTtl: "cache_ttl",
        chunk: "chunk",
        chunkOverlap: "chunk_overlap",
        chunkSize: "chunk_size",
        customMetadata: "custom_metadata",
        embeddingModel: "embedding_model",
        fusionMethod: "fusion_method",
        indexMethod: "index_method",
        indexingOptions: "indexing_options",
        maxNumResults: "max_num_results",
        metadata: "metadata",
        paused: "paused",
        publicEndpointParams: "public_endpoint_params",
        reranking: "reranking",
        rerankingModel: "reranking_model",
        retrievalOptions: "retrieval_options",
        rewriteModel: "rewrite_model",
        rewriteQuery: "rewrite_query",
        scoreThreshold: "score_threshold",
        source: "source",
        sourceParams: "source_params",
        summarization: "summarization",
        summarizationModel: "summarization_model",
        syncInterval: "sync_interval",
        systemPromptAiSearch: "system_prompt_ai_search",
        systemPromptIndexSummarization: "system_prompt_index_summarization",
        systemPromptRewriteQuery: "system_prompt_rewrite_query",
        tokenId: "token_id",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-search/instances/{id}",
      }),
    ),
) as unknown as Schema.Codec<UpdateInstanceRequest>;

export interface UpdateInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const UpdateInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateInstanceResponse>;

export type UpdateInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | InvalidTokenCredentials
  | Forbidden;

export const updateInstance: API.OperationMethod<
  UpdateInstanceRequest,
  UpdateInstanceResponse,
  UpdateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateInstanceRequest,
  output: UpdateInstanceResponse,
  errors: [
    ValidationError,
    NotFound,
    InvalidRoute,
    InvalidTokenCredentials,
    Forbidden,
  ],
}));

export interface DeleteInstanceRequest {
  id: string;
  accountId: string;
}

export const DeleteInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-search/instances/{id}",
      }),
    ),
) as unknown as Schema.Codec<DeleteInstanceRequest>;

export interface DeleteInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const DeleteInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteInstanceResponse>;

export type DeleteInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | Forbidden;

export const deleteInstance: API.OperationMethod<
  DeleteInstanceRequest,
  DeleteInstanceResponse,
  DeleteInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInstanceRequest,
  output: DeleteInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute, Forbidden],
}));

export interface ReadInstanceRequest {
  id: string;
  accountId: string;
}

export const ReadInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/instances/{id}",
      }),
    ),
) as unknown as Schema.Codec<ReadInstanceRequest>;

export interface ReadInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const ReadInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ReadInstanceResponse>;

export type ReadInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | Forbidden;

export const readInstance: API.OperationMethod<
  ReadInstanceRequest,
  ReadInstanceResponse,
  ReadInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadInstanceRequest,
  output: ReadInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute, Forbidden],
}));

export interface SearchInstanceRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  aiSearchOptions?: {
    cache?: {
      cacheThreshold?:
        | "super_strict_match"
        | "close_enough"
        | "flexible_friend"
        | "anything_goes"
        | (string & {});
      enabled?: boolean;
    };
    queryRewrite?: {
      enabled?: boolean;
      model?:
        | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
        | "@cf/zai-org/glm-4.7-flash"
        | "@cf/meta/llama-3.1-8b-instruct-fast"
        | "@cf/meta/llama-3.1-8b-instruct-fp8"
        | "@cf/meta/llama-4-scout-17b-16e-instruct"
        | "@cf/qwen/qwen3-30b-a3b-fp8"
        | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
        | "@cf/moonshotai/kimi-k2-instruct"
        | "@cf/google/gemma-3-12b-it"
        | "@cf/google/gemma-4-26b-a4b-it"
        | "@cf/moonshotai/kimi-k2.5"
        | "anthropic/claude-3-7-sonnet"
        | "anthropic/claude-sonnet-4"
        | "anthropic/claude-opus-4"
        | "anthropic/claude-3-5-haiku"
        | "cerebras/qwen-3-235b-a22b-instruct"
        | "cerebras/qwen-3-235b-a22b-thinking"
        | "cerebras/llama-3.3-70b"
        | "cerebras/llama-4-maverick-17b-128e-instruct"
        | "cerebras/llama-4-scout-17b-16e-instruct"
        | "cerebras/gpt-oss-120b"
        | "google-ai-studio/gemini-2.5-flash"
        | "google-ai-studio/gemini-2.5-pro"
        | "grok/grok-4"
        | "groq/llama-3.3-70b-versatile"
        | "groq/llama-3.1-8b-instant"
        | "openai/gpt-5"
        | "openai/gpt-5-mini"
        | "openai/gpt-5-nano"
        | ""
        | (string & {});
      rewritePrompt?: string;
    };
    reranking?: {
      enabled?: boolean;
      matchThreshold?: number;
      model?: "@cf/baai/bge-reranker-base" | "" | (string & {});
    };
    retrieval?: {
      boostBy?: {
        field: string;
        direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
      }[];
      contextExpansion?: number;
      filters?: Record<string, unknown>;
      fusionMethod?: "max" | "rrf" | (string & {});
      keywordMatchMode?: "and" | "or" | (string & {});
      matchThreshold?: number;
      maxNumResults?: number;
      retrievalType?: "vector" | "keyword" | "hybrid" | (string & {});
      returnOnFailure?: boolean;
    };
  };
  /** Body param: OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'} */
  messages?: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  }[];
  /** Body param: A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both. */
  query?: string;
}

export const SearchInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiSearchOptions: Schema.optional(AisearchOptions),
      messages: Schema.optional(Schema.Array(Message)),
      query: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        aiSearchOptions: "ai_search_options",
        messages: "messages",
        query: "query",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/instances/{id}/search",
      }),
    ),
) as unknown as Schema.Codec<SearchInstanceRequest>;

export interface SearchInstanceResponse {
  chunks: {
    id: string;
    score: number;
    text: string;
    type: string;
    item?: {
      key: string;
      metadata?: Record<string, unknown> | null;
      timestamp?: number | null;
    } | null;
    scoringDetails?: {
      fusionMethod?: "rrf" | "max" | (string & {}) | null;
      keywordRank?: number | null;
      keywordScore?: number | null;
      rerankingScore?: number | null;
      vectorRank?: number | null;
      vectorScore?: number | null;
    } | null;
  }[];
  queryKind: "text" | "image" | "multimodal" | (string & {});
  searchQuery?: string | null;
}

export const SearchInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      chunks: Schema.Array(Chunk),
      queryKind: Schema.Union([
        Schema.Literals(["text", "image", "multimodal"]),
        Schema.String,
      ]),
      searchQuery: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          chunks: "chunks",
          queryKind: "query_kind",
          searchQuery: "search_query",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<SearchInstanceResponse>;

export type SearchInstanceError = DefaultErrors;

export const searchInstance: API.OperationMethod<
  SearchInstanceRequest,
  SearchInstanceResponse,
  SearchInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchInstanceRequest,
  output: SearchInstanceResponse,
  errors: [],
}));

export interface StatsInstanceRequest {
  id: string;
  accountId: string;
}

export const StatsInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/instances/{id}/stats",
      }),
    ),
) as unknown as Schema.Codec<StatsInstanceRequest>;

export interface StatsInstanceResponse {
  completed?: number | null;
  /** True when status counts are unavailable (e.g. legacy stats query exceeded D1 statement-size limit). Counts are omitted in this case. */
  degraded?: boolean | null;
  /** Engine-specific metadata. Present only for managed (v3) instances. */
  engine?: {
    r2?: {
      metadataSizeBytes: number;
      objectCount: number;
      payloadSizeBytes: number;
    } | null;
    vectorize?: { dimensions: number; vectorsCount: number } | null;
  } | null;
  error?: number | null;
  fileEmbedErrors?: Record<string, unknown> | null;
  indexSourceErrors?: Record<string, unknown> | null;
  lastActivity?: string | null;
  outdated?: number | null;
  queued?: number | null;
  running?: number | null;
  skipped?: number | null;
}

export const StatsInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      completed: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      degraded: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engine: Schema.optional(Schema.Union([Engine, Schema.Null])),
      error: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      fileEmbedErrors: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      indexSourceErrors: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      outdated: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      queued: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      running: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      skipped: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          completed: "completed",
          degraded: "degraded",
          engine: "engine",
          error: "error",
          fileEmbedErrors: "file_embed_errors",
          indexSourceErrors: "index_source_errors",
          lastActivity: "last_activity",
          outdated: "outdated",
          queued: "queued",
          running: "running",
          skipped: "skipped",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<StatsInstanceResponse>;

export type StatsInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const statsInstance: API.OperationMethod<
  StatsInstanceRequest,
  StatsInstanceResponse,
  StatsInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StatsInstanceRequest,
  output: StatsInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

// =============================================================================
// InstanceJob
// =============================================================================

export interface GetInstanceJobRequest {
  id: string;
  jobId: string;
  accountId: string;
}

export const GetInstanceJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/instances/{id}/jobs/{jobId}",
      }),
    ),
) as unknown as Schema.Codec<GetInstanceJobRequest>;

export interface GetInstanceJobResponse {
  id: string;
  source: "user" | "schedule" | (string & {});
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}

export const GetInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "schedule"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSeenAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          source: "source",
          description: "description",
          endReason: "end_reason",
          endedAt: "ended_at",
          lastSeenAt: "last_seen_at",
          startedAt: "started_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetInstanceJobResponse>;

export type GetInstanceJobError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const getInstanceJob: API.OperationMethod<
  GetInstanceJobRequest,
  GetInstanceJobResponse,
  GetInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInstanceJobRequest,
  output: GetInstanceJobResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

export interface ListInstanceJobsRequest {
  id: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListInstanceJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/instances/{id}/jobs",
      }),
    ),
  ) as unknown as Schema.Codec<ListInstanceJobsRequest>;

export interface ListInstanceJobsResponse {
  result: {
    id: string;
    source: "user" | "schedule" | (string & {});
    description?: string | null;
    endReason?: string | null;
    endedAt?: string | null;
    lastSeenAt?: string | null;
    startedAt?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListInstanceJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListInstanceJobsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListInstanceJobsResponse>;

export type ListInstanceJobsError = DefaultErrors;

export const listInstanceJobs: API.PaginatedOperationMethod<
  ListInstanceJobsRequest,
  ListInstanceJobsResponse,
  ListInstanceJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInstanceJobsRequest,
  output: ListInstanceJobsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateInstanceJobRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  description?: string;
}

export const CreateInstanceJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/instances/{id}/jobs",
      }),
    ),
  ) as unknown as Schema.Codec<CreateInstanceJobRequest>;

export interface CreateInstanceJobResponse {
  id: string;
  source?: "user" | "schedule" | (string & {}) | null;
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}

export const CreateInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      source: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["user", "schedule"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSeenAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          source: "source",
          description: "description",
          endReason: "end_reason",
          endedAt: "ended_at",
          lastSeenAt: "last_seen_at",
          startedAt: "started_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateInstanceJobResponse>;

export type CreateInstanceJobError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | UnableToConnect
  | SyncInCooldown;

export const createInstanceJob: API.OperationMethod<
  CreateInstanceJobRequest,
  CreateInstanceJobResponse,
  CreateInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInstanceJobRequest,
  output: CreateInstanceJobResponse,
  errors: [
    ValidationError,
    NotFound,
    InvalidRoute,
    UnableToConnect,
    SyncInCooldown,
  ],
}));

export interface LogsInstanceJobRequest {
  id: string;
  jobId: string;
  /** Path param */
  accountId: string;
  /** Query param */
  page?: number;
  /** Query param */
  perPage?: number;
}

export const LogsInstanceJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/instances/{id}/jobs/{jobId}/logs",
      }),
    ),
  ) as unknown as Schema.Codec<LogsInstanceJobRequest>;

export type LogsInstanceJobResponse = {
  id: number;
  createdAt: number;
  message: string;
  messageType: number;
}[];

export const LogsInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(JobLogsResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<LogsInstanceJobResponse>;

export type LogsInstanceJobError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const logsInstanceJob: API.OperationMethod<
  LogsInstanceJobRequest,
  LogsInstanceJobResponse,
  LogsInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LogsInstanceJobRequest,
  output: LogsInstanceJobResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

// =============================================================================
// Namespace
// =============================================================================

export interface ListNamespacesRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter namespaces whose name or description contains this string (case-insensitive). */
  search?: string;
}

export const ListNamespacesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces",
      }),
    ),
) as unknown as Schema.Codec<ListNamespacesRequest>;

export interface ListNamespacesResponse {
  result: { createdAt: string; name: string; description?: string | null }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListNamespacesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListNamespacesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespacesResponse>;

export type ListNamespacesError = DefaultErrors;

export const listNamespaces: API.PaginatedOperationMethod<
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespacesRequest,
  output: ListNamespacesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateNamespaceRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  name: string;
  /** Body param: Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const CreateNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces",
      }),
    ),
  ) as unknown as Schema.Codec<CreateNamespaceRequest>;

export interface CreateNamespaceResponse {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const CreateNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          name: "name",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateNamespaceResponse>;

export type CreateNamespaceError =
  | DefaultErrors
  | NamespaceAlreadyExists
  | Forbidden;

export const createNamespace: API.OperationMethod<
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespaceRequest,
  output: CreateNamespaceResponse,
  errors: [NamespaceAlreadyExists, Forbidden],
}));

export interface UpdateNamespaceRequest {
  name: string;
  /** Path param */
  accountId: string;
  /** Body param: Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const UpdateNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateNamespaceRequest>;

export interface UpdateNamespaceResponse {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const UpdateNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          name: "name",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateNamespaceResponse>;

export type UpdateNamespaceError =
  | DefaultErrors
  | NamespaceNotFound
  | Forbidden;

export const updateNamespace: API.OperationMethod<
  UpdateNamespaceRequest,
  UpdateNamespaceResponse,
  UpdateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateNamespaceRequest,
  output: UpdateNamespaceResponse,
  errors: [NamespaceNotFound, Forbidden],
}));

export interface DeleteNamespaceRequest {
  name: string;
  accountId: string;
}

export const DeleteNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteNamespaceRequest>;

export type DeleteNamespaceResponse = unknown;

export const DeleteNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteNamespaceResponse>;

export type DeleteNamespaceError =
  | DefaultErrors
  | NamespaceNotFound
  | Forbidden;

export const deleteNamespace: API.OperationMethod<
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceRequest,
  output: DeleteNamespaceResponse,
  errors: [NamespaceNotFound, Forbidden],
}));

export interface ReadNamespaceRequest {
  name: string;
  accountId: string;
}

export const ReadNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}",
      }),
    ),
) as unknown as Schema.Codec<ReadNamespaceRequest>;

export interface ReadNamespaceResponse {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const ReadNamespaceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdAt: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          name: "name",
          description: "description",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ReadNamespaceResponse>;

export type ReadNamespaceError = DefaultErrors | NamespaceNotFound | Forbidden;

export const readNamespace: API.OperationMethod<
  ReadNamespaceRequest,
  ReadNamespaceResponse,
  ReadNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadNamespaceRequest,
  output: ReadNamespaceResponse,
  errors: [NamespaceNotFound, Forbidden],
}));

export interface SearchNamespaceRequest {
  name: string;
  /** Path param */
  accountId: string;
  /** Body param */
  aiSearchOptions: {
    instanceIds: string[];
    cache?: {
      cacheThreshold?:
        | "super_strict_match"
        | "close_enough"
        | "flexible_friend"
        | "anything_goes"
        | (string & {});
      enabled?: boolean;
    };
    queryRewrite?: {
      enabled?: boolean;
      model?:
        | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
        | "@cf/zai-org/glm-4.7-flash"
        | "@cf/meta/llama-3.1-8b-instruct-fast"
        | "@cf/meta/llama-3.1-8b-instruct-fp8"
        | "@cf/meta/llama-4-scout-17b-16e-instruct"
        | "@cf/qwen/qwen3-30b-a3b-fp8"
        | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
        | "@cf/moonshotai/kimi-k2-instruct"
        | "@cf/google/gemma-3-12b-it"
        | "@cf/google/gemma-4-26b-a4b-it"
        | "@cf/moonshotai/kimi-k2.5"
        | "anthropic/claude-3-7-sonnet"
        | "anthropic/claude-sonnet-4"
        | "anthropic/claude-opus-4"
        | "anthropic/claude-3-5-haiku"
        | "cerebras/qwen-3-235b-a22b-instruct"
        | "cerebras/qwen-3-235b-a22b-thinking"
        | "cerebras/llama-3.3-70b"
        | "cerebras/llama-4-maverick-17b-128e-instruct"
        | "cerebras/llama-4-scout-17b-16e-instruct"
        | "cerebras/gpt-oss-120b"
        | "google-ai-studio/gemini-2.5-flash"
        | "google-ai-studio/gemini-2.5-pro"
        | "grok/grok-4"
        | "groq/llama-3.3-70b-versatile"
        | "groq/llama-3.1-8b-instant"
        | "openai/gpt-5"
        | "openai/gpt-5-mini"
        | "openai/gpt-5-nano"
        | ""
        | (string & {});
      rewritePrompt?: string;
    };
    reranking?: {
      enabled?: boolean;
      matchThreshold?: number;
      model?: "@cf/baai/bge-reranker-base" | "" | (string & {});
    };
    retrieval?: {
      boostBy?: {
        field: string;
        direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
      }[];
      contextExpansion?: number;
      filters?: Record<string, unknown>;
      fusionMethod?: "max" | "rrf" | (string & {});
      keywordMatchMode?: "and" | "or" | (string & {});
      matchThreshold?: number;
      maxNumResults?: number;
      retrievalType?: "vector" | "keyword" | "hybrid" | (string & {});
      returnOnFailure?: boolean;
    };
  };
  /** Body param: OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'} */
  messages?: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  }[];
  /** Body param: A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both. */
  query?: string;
}

export const SearchNamespaceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiSearchOptions: AisearchOptions2,
      messages: Schema.optional(Schema.Array(Message)),
      query: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        aiSearchOptions: "ai_search_options",
        messages: "messages",
        query: "query",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/search",
      }),
    ),
  ) as unknown as Schema.Codec<SearchNamespaceRequest>;

export interface SearchNamespaceResponse {
  chunks: {
    id: string;
    instanceId: string;
    score: number;
    text: string;
    type: string;
    item?: {
      key: string;
      metadata?: Record<string, unknown> | null;
      timestamp?: number | null;
    } | null;
    scoringDetails?: {
      fusionMethod?: "rrf" | "max" | (string & {}) | null;
      keywordRank?: number | null;
      keywordScore?: number | null;
      rerankingScore?: number | null;
      vectorRank?: number | null;
      vectorScore?: number | null;
    } | null;
  }[];
  queryKind: "text" | "image" | "multimodal" | (string & {});
  errors?: { instanceId: string; message: string }[] | null;
  searchQuery?: string | null;
}

export const SearchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      chunks: Schema.Array(Chunk2),
      queryKind: Schema.Union([
        Schema.Literals(["text", "image", "multimodal"]),
        Schema.String,
      ]),
      errors: Schema.optional(
        Schema.Union([Schema.Array(Error2), Schema.Null]),
      ),
      searchQuery: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          chunks: "chunks",
          queryKind: "query_kind",
          errors: "errors",
          searchQuery: "search_query",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<SearchNamespaceResponse>;

export type SearchNamespaceError = DefaultErrors;

export const searchNamespace: API.OperationMethod<
  SearchNamespaceRequest,
  SearchNamespaceResponse,
  SearchNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchNamespaceRequest,
  output: SearchNamespaceResponse,
  errors: [],
}));

// =============================================================================
// NamespaceInstance
// =============================================================================

export interface ListNamespaceInstancesRequest {
  name: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter by namespace. */
  namespace?: string;
  /** Query param: Field to order results by. */
  orderBy?: "created_at";
  /** Query param: Order direction. */
  orderByDirection?: "asc" | "desc" | (string & {});
  /** Query param: Filter instances whose id contains this string (case-insensitive). */
  search?: string;
}

export const ListNamespaceInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      namespace: Schema.optional(Schema.String).pipe(T.HttpQuery("namespace")),
      orderBy: Schema.optional(Schema.Literal("created_at")).pipe(
        T.HttpQuery("order_by"),
      ),
      orderByDirection: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("order_by_direction")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceInstancesRequest>;

export interface ListNamespaceInstancesResponse {
  result: {
    id: string;
    createdAt?: string | null;
    modifiedAt?: string | null;
    aiGatewayId?: string | null;
    aiSearchModel?:
      | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
      | "@cf/zai-org/glm-4.7-flash"
      | "@cf/meta/llama-3.1-8b-instruct-fast"
      | "@cf/meta/llama-3.1-8b-instruct-fp8"
      | "@cf/meta/llama-4-scout-17b-16e-instruct"
      | "@cf/qwen/qwen3-30b-a3b-fp8"
      | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
      | "@cf/moonshotai/kimi-k2-instruct"
      | "@cf/google/gemma-3-12b-it"
      | "@cf/google/gemma-4-26b-a4b-it"
      | "@cf/moonshotai/kimi-k2.5"
      | "anthropic/claude-3-7-sonnet"
      | "anthropic/claude-sonnet-4"
      | "anthropic/claude-opus-4"
      | "anthropic/claude-3-5-haiku"
      | "cerebras/qwen-3-235b-a22b-instruct"
      | "cerebras/qwen-3-235b-a22b-thinking"
      | "cerebras/llama-3.3-70b"
      | "cerebras/llama-4-maverick-17b-128e-instruct"
      | "cerebras/llama-4-scout-17b-16e-instruct"
      | "cerebras/gpt-oss-120b"
      | "google-ai-studio/gemini-2.5-flash"
      | "google-ai-studio/gemini-2.5-pro"
      | "grok/grok-4"
      | "groq/llama-3.3-70b-versatile"
      | "groq/llama-3.1-8b-instant"
      | "openai/gpt-5"
      | "openai/gpt-5-mini"
      | "openai/gpt-5-nano"
      | ""
      | null;
    cache?: boolean | null;
    cacheThreshold?:
      | "super_strict_match"
      | "close_enough"
      | "flexible_friend"
      | "anything_goes"
      | null;
    cacheTtl?: number | null;
    chunkOverlap?: number | null;
    chunkSize?: number | null;
    createdBy?: string | null;
    customMetadata?:
      | {
          dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
          fieldName: string;
        }[]
      | null;
    embeddingModel?:
      | "@cf/qwen/qwen3-embedding-0.6b"
      | "@cf/qwen/qwen3-vl-embedding-2b"
      | "@cf/baai/bge-m3"
      | "@cf/baai/bge-large-en-v1.5"
      | "@cf/google/embeddinggemma-300m"
      | "google-ai-studio/gemini-embedding-001"
      | "google-ai-studio/gemini-embedding-2-preview"
      | "openai/text-embedding-3-small"
      | "openai/text-embedding-3-large"
      | ""
      | null;
    enable?: boolean | null;
    engineVersion?: number | null;
    fusionMethod?: "max" | "rrf" | (string & {}) | null;
    hybridSearchEnabled?: boolean | null;
    indexMethod?: { keyword: boolean; vector: boolean } | null;
    indexingOptions?: {
      keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
    } | null;
    lastActivity?: string | null;
    maxNumResults?: number | null;
    metadata?: {
      createdFromAisearchWizard?: boolean | null;
      workerDomain?: string | null;
    } | null;
    modifiedBy?: string | null;
    namespace?: string | null;
    paused?: boolean | null;
    publicEndpointId?: string | null;
    publicEndpointParams?: {
      authorizedHosts?: string[] | null;
      chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
      enabled?: boolean | null;
      mcp?: { description?: string | null; disabled?: boolean | null } | null;
      rateLimit?: {
        periodMs?: number | null;
        requests?: number | null;
        technique?: "fixed" | "sliding" | (string & {}) | null;
      } | null;
      searchEndpoint?: { disabled?: boolean | null } | null;
    } | null;
    reranking?: boolean | null;
    rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
    retrievalOptions?: {
      boostBy?:
        | {
            field: string;
            direction?:
              | "asc"
              | "desc"
              | "exists"
              | "not_exists"
              | (string & {})
              | null;
          }[]
        | null;
      keywordMatchMode?: "and" | "or" | (string & {}) | null;
    } | null;
    rewriteModel?:
      | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
      | "@cf/zai-org/glm-4.7-flash"
      | "@cf/meta/llama-3.1-8b-instruct-fast"
      | "@cf/meta/llama-3.1-8b-instruct-fp8"
      | "@cf/meta/llama-4-scout-17b-16e-instruct"
      | "@cf/qwen/qwen3-30b-a3b-fp8"
      | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
      | "@cf/moonshotai/kimi-k2-instruct"
      | "@cf/google/gemma-3-12b-it"
      | "@cf/google/gemma-4-26b-a4b-it"
      | "@cf/moonshotai/kimi-k2.5"
      | "anthropic/claude-3-7-sonnet"
      | "anthropic/claude-sonnet-4"
      | "anthropic/claude-opus-4"
      | "anthropic/claude-3-5-haiku"
      | "cerebras/qwen-3-235b-a22b-instruct"
      | "cerebras/qwen-3-235b-a22b-thinking"
      | "cerebras/llama-3.3-70b"
      | "cerebras/llama-4-maverick-17b-128e-instruct"
      | "cerebras/llama-4-scout-17b-16e-instruct"
      | "cerebras/gpt-oss-120b"
      | "google-ai-studio/gemini-2.5-flash"
      | "google-ai-studio/gemini-2.5-pro"
      | "grok/grok-4"
      | "groq/llama-3.3-70b-versatile"
      | "groq/llama-3.1-8b-instant"
      | "openai/gpt-5"
      | "openai/gpt-5-mini"
      | "openai/gpt-5-nano"
      | ""
      | null;
    rewriteQuery?: boolean | null;
    scoreThreshold?: number | null;
    source?: string | null;
    sourceParams?: {
      excludeItems?: string[] | null;
      includeItems?: string[] | null;
      prefix?: string | null;
      r2Jurisdiction?: string | null;
      webCrawler?: {
        parseOptions?: {
          contentSelector?: { path: string; selector: string }[] | null;
          includeHeaders?: Record<string, unknown> | null;
          includeImages?: boolean | null;
          specificSitemaps?: string[] | null;
          useBrowserRendering?: boolean | null;
        } | null;
        parseType?: "sitemap" | "crawl" | (string & {}) | null;
      } | null;
    } | null;
    status?: string | null;
    syncInterval?: number | null;
    tokenId?: string | null;
    type?: "r2" | "web-crawler" | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListNamespaceInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListInstancesResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespaceInstancesResponse>;

export type ListNamespaceInstancesError =
  | DefaultErrors
  | NamespaceNotFound
  | InvalidRoute
  | Forbidden;

export const listNamespaceInstances: API.PaginatedOperationMethod<
  ListNamespaceInstancesRequest,
  ListNamespaceInstancesResponse,
  ListNamespaceInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespaceInstancesRequest,
  output: ListNamespaceInstancesResponse,
  errors: [NamespaceNotFound, InvalidRoute, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateNamespaceInstanceRequest {
  name: string;
  /** Path param */
  accountId: string;
  /** Body param: AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  /** Body param */
  aiGatewayId?: string | null;
  /** Body param */
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  cache?: boolean;
  /** Body param */
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | (string & {});
  /** Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number;
  /** Body param */
  chunk?: boolean;
  /** Body param */
  chunkOverlap?: number;
  /** Body param */
  chunkSize?: number;
  /** Body param */
  customMetadata?: {
    dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
    fieldName: string;
  }[];
  /** Body param */
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  /** Body param */
  fusionMethod?: "max" | "rrf" | (string & {});
  /** @deprecated Body param: Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean;
  /** Body param: Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean };
  /** Body param */
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {});
  } | null;
  /** Body param */
  maxNumResults?: number;
  /** Body param */
  metadata?: { createdFromAisearchWizard?: boolean; workerDomain?: string };
  /** Body param */
  publicEndpointParams?: {
    authorizedHosts?: string[];
    chatCompletionsEndpoint?: { disabled?: boolean };
    enabled?: boolean;
    mcp?: { description?: string; disabled?: boolean };
    rateLimit?: {
      periodMs?: number;
      requests?: number;
      technique?: "fixed" | "sliding" | (string & {});
    };
    searchEndpoint?: { disabled?: boolean };
  };
  /** Body param */
  reranking?: boolean;
  /** Body param */
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  /** Body param */
  retrievalOptions?: {
    boostBy?: {
      field: string;
      direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
    }[];
    keywordMatchMode?: "and" | "or" | (string & {});
  } | null;
  /** Body param */
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  rewriteQuery?: boolean;
  /** Body param */
  scoreThreshold?: number;
  /** Body param */
  source?: string | null;
  /** Body param */
  sourceParams?: {
    excludeItems?: string[];
    includeItems?: string[];
    prefix?: string;
    r2Jurisdiction?: string;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {});
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: string;
      };
    };
  } | null;
  /** Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number;
  /** Body param */
  tokenId?: string;
  /** Body param */
  type?: "r2" | "web-crawler" | null;
}

export const CreateNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      id: Schema.String,
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Boolean),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "super_strict_match",
            "close_enough",
            "flexible_friend",
            "anything_goes",
          ]),
          Schema.String,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Number),
      chunk: Schema.optional(Schema.Boolean),
      chunkOverlap: Schema.optional(Schema.Number),
      chunkSize: Schema.optional(Schema.Number),
      customMetadata: Schema.optional(Schema.Array(CustomMetadata)),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
      ),
      hybridSearchEnabled: Schema.optional(Schema.Boolean),
      indexMethod: Schema.optional(IndexMethod),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      maxNumResults: Schema.optional(Schema.Number),
      metadata: Schema.optional(Metadata),
      publicEndpointParams: Schema.optional(PublicEndpointParams),
      reranking: Schema.optional(Schema.Boolean),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(Schema.Boolean),
      scoreThreshold: Schema.optional(Schema.Number),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      syncInterval: Schema.optional(Schema.Number),
      tokenId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        aiGatewayId: "ai_gateway_id",
        aiSearchModel: "ai_search_model",
        cache: "cache",
        cacheThreshold: "cache_threshold",
        cacheTtl: "cache_ttl",
        chunk: "chunk",
        chunkOverlap: "chunk_overlap",
        chunkSize: "chunk_size",
        customMetadata: "custom_metadata",
        embeddingModel: "embedding_model",
        fusionMethod: "fusion_method",
        hybridSearchEnabled: "hybrid_search_enabled",
        indexMethod: "index_method",
        indexingOptions: "indexing_options",
        maxNumResults: "max_num_results",
        metadata: "metadata",
        publicEndpointParams: "public_endpoint_params",
        reranking: "reranking",
        rerankingModel: "reranking_model",
        retrievalOptions: "retrieval_options",
        rewriteModel: "rewrite_model",
        rewriteQuery: "rewrite_query",
        scoreThreshold: "score_threshold",
        source: "source",
        sourceParams: "source_params",
        syncInterval: "sync_interval",
        tokenId: "token_id",
        type: "type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances",
      }),
    ),
  ) as unknown as Schema.Codec<CreateNamespaceInstanceRequest>;

export interface CreateNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const CreateNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateNamespaceInstanceResponse>;

export type CreateNamespaceInstanceError =
  | DefaultErrors
  | ValidationError
  | NamespaceNotFound
  | AiSearchInstanceNotFound
  | InvalidRoute
  | InstanceAlreadyExists
  | InvalidTokenCredentials
  | WebCrawlerDomainNotOwned
  | MissingSitemap
  | Forbidden;

export const createNamespaceInstance: API.OperationMethod<
  CreateNamespaceInstanceRequest,
  CreateNamespaceInstanceResponse,
  CreateNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespaceInstanceRequest,
  output: CreateNamespaceInstanceResponse,
  errors: [
    ValidationError,
    NamespaceNotFound,
    AiSearchInstanceNotFound,
    InvalidRoute,
    InstanceAlreadyExists,
    InvalidTokenCredentials,
    WebCrawlerDomainNotOwned,
    MissingSitemap,
    Forbidden,
  ],
}));

export interface UpdateNamespaceInstanceRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  aiGatewayId?: string | null;
  /** Body param */
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  cache?: boolean;
  /** Body param */
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | (string & {});
  /** Body param: Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number;
  /** Body param */
  chunk?: boolean;
  /** Body param */
  chunkOverlap?: number;
  /** Body param */
  chunkSize?: number;
  /** Body param */
  customMetadata?: {
    dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
    fieldName: string;
  }[];
  /** Body param */
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  /** Body param */
  fusionMethod?: "max" | "rrf" | (string & {});
  /** Body param: Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean };
  /** Body param */
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {});
  } | null;
  /** Body param */
  maxNumResults?: number;
  /** Body param */
  metadata?: { createdFromAisearchWizard?: boolean; workerDomain?: string };
  /** Body param */
  paused?: boolean;
  /** Body param */
  publicEndpointParams?: {
    authorizedHosts?: string[];
    chatCompletionsEndpoint?: { disabled?: boolean };
    enabled?: boolean;
    mcp?: { description?: string; disabled?: boolean };
    rateLimit?: {
      periodMs?: number;
      requests?: number;
      technique?: "fixed" | "sliding" | (string & {});
    };
    searchEndpoint?: { disabled?: boolean };
  };
  /** Body param */
  reranking?: boolean;
  /** Body param */
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  /** Body param */
  retrievalOptions?: {
    boostBy?: {
      field: string;
      direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
    }[];
    keywordMatchMode?: "and" | "or" | (string & {});
  } | null;
  /** Body param */
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param */
  rewriteQuery?: boolean;
  /** Body param */
  scoreThreshold?: number;
  /** Body param */
  source?: string | null;
  /** Body param */
  sourceParams?: {
    excludeItems?: string[];
    includeItems?: string[];
    prefix?: string;
    r2Jurisdiction?: string;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {});
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: string;
      };
    };
  } | null;
  /** Body param */
  summarization?: boolean;
  /** Body param */
  summarizationModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  /** Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number;
  /** Body param */
  systemPromptAiSearch?: string | null;
  /** Body param */
  systemPromptIndexSummarization?: string | null;
  /** Body param */
  systemPromptRewriteQuery?: string | null;
  /** Body param */
  tokenId?: string;
}

export const UpdateNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Boolean),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "super_strict_match",
            "close_enough",
            "flexible_friend",
            "anything_goes",
          ]),
          Schema.String,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Number),
      chunk: Schema.optional(Schema.Boolean),
      chunkOverlap: Schema.optional(Schema.Number),
      chunkSize: Schema.optional(Schema.Number),
      customMetadata: Schema.optional(Schema.Array(CustomMetadata)),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
      ),
      indexMethod: Schema.optional(IndexMethod),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      maxNumResults: Schema.optional(Schema.Number),
      metadata: Schema.optional(Metadata),
      paused: Schema.optional(Schema.Boolean),
      publicEndpointParams: Schema.optional(PublicEndpointParams),
      reranking: Schema.optional(Schema.Boolean),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(Schema.Boolean),
      scoreThreshold: Schema.optional(Schema.Number),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      summarization: Schema.optional(Schema.Boolean),
      summarizationModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      syncInterval: Schema.optional(Schema.Number),
      systemPromptAiSearch: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      systemPromptIndexSummarization: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      systemPromptRewriteQuery: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      tokenId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        aiGatewayId: "ai_gateway_id",
        aiSearchModel: "ai_search_model",
        cache: "cache",
        cacheThreshold: "cache_threshold",
        cacheTtl: "cache_ttl",
        chunk: "chunk",
        chunkOverlap: "chunk_overlap",
        chunkSize: "chunk_size",
        customMetadata: "custom_metadata",
        embeddingModel: "embedding_model",
        fusionMethod: "fusion_method",
        indexMethod: "index_method",
        indexingOptions: "indexing_options",
        maxNumResults: "max_num_results",
        metadata: "metadata",
        paused: "paused",
        publicEndpointParams: "public_endpoint_params",
        reranking: "reranking",
        rerankingModel: "reranking_model",
        retrievalOptions: "retrieval_options",
        rewriteModel: "rewrite_model",
        rewriteQuery: "rewrite_query",
        scoreThreshold: "score_threshold",
        source: "source",
        sourceParams: "source_params",
        summarization: "summarization",
        summarizationModel: "summarization_model",
        syncInterval: "sync_interval",
        systemPromptAiSearch: "system_prompt_ai_search",
        systemPromptIndexSummarization: "system_prompt_index_summarization",
        systemPromptRewriteQuery: "system_prompt_rewrite_query",
        tokenId: "token_id",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateNamespaceInstanceRequest>;

export interface UpdateNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const UpdateNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateNamespaceInstanceResponse>;

export type UpdateNamespaceInstanceError =
  | DefaultErrors
  | ValidationError
  | NamespaceNotFound
  | AiSearchInstanceNotFound
  | InvalidRoute
  | InvalidTokenCredentials
  | WebCrawlerDomainNotOwned
  | Forbidden;

export const updateNamespaceInstance: API.OperationMethod<
  UpdateNamespaceInstanceRequest,
  UpdateNamespaceInstanceResponse,
  UpdateNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateNamespaceInstanceRequest,
  output: UpdateNamespaceInstanceResponse,
  errors: [
    ValidationError,
    NamespaceNotFound,
    AiSearchInstanceNotFound,
    InvalidRoute,
    InvalidTokenCredentials,
    WebCrawlerDomainNotOwned,
    Forbidden,
  ],
}));

export interface DeleteNamespaceInstanceRequest {
  name: string;
  id: string;
  accountId: string;
}

export const DeleteNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteNamespaceInstanceRequest>;

export interface DeleteNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const DeleteNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteNamespaceInstanceResponse>;

export type DeleteNamespaceInstanceError =
  | DefaultErrors
  | ValidationError
  | NamespaceNotFound
  | AiSearchInstanceNotFound
  | InvalidRoute
  | Forbidden;

export const deleteNamespaceInstance: API.OperationMethod<
  DeleteNamespaceInstanceRequest,
  DeleteNamespaceInstanceResponse,
  DeleteNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceInstanceRequest,
  output: DeleteNamespaceInstanceResponse,
  errors: [
    ValidationError,
    NamespaceNotFound,
    AiSearchInstanceNotFound,
    InvalidRoute,
    Forbidden,
  ],
}));

export interface ReadNamespaceInstanceRequest {
  name: string;
  id: string;
  accountId: string;
}

export const ReadNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
      }),
    ),
  ) as unknown as Schema.Codec<ReadNamespaceInstanceRequest>;

export interface ReadNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt?: string | null;
  modifiedAt?: string | null;
  aiGatewayId?: string | null;
  aiSearchModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  cache?: boolean | null;
  cacheThreshold?:
    | "super_strict_match"
    | "close_enough"
    | "flexible_friend"
    | "anything_goes"
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?: number | null;
  chunkOverlap?: number | null;
  chunkSize?: number | null;
  createdBy?: string | null;
  customMetadata?:
    | {
        dataType: "text" | "number" | "boolean" | "datetime" | (string & {});
        fieldName: string;
      }[]
    | null;
  embeddingModel?:
    | "@cf/qwen/qwen3-embedding-0.6b"
    | "@cf/qwen/qwen3-vl-embedding-2b"
    | "@cf/baai/bge-m3"
    | "@cf/baai/bge-large-en-v1.5"
    | "@cf/google/embeddinggemma-300m"
    | "google-ai-studio/gemini-embedding-001"
    | "google-ai-studio/gemini-embedding-2-preview"
    | "openai/text-embedding-3-small"
    | "openai/text-embedding-3-large"
    | ""
    | null;
  enable?: boolean | null;
  engineVersion?: number | null;
  fusionMethod?: "max" | "rrf" | (string & {}) | null;
  /** @deprecated Deprecated — use index_method instead. */
  hybridSearchEnabled?: boolean | null;
  /** Controls which storage backends are used during indexing. Defaults to vector-only. */
  indexMethod?: { keyword: boolean; vector: boolean } | null;
  indexingOptions?: {
    keywordTokenizer?: "porter" | "trigram" | (string & {}) | null;
  } | null;
  lastActivity?: string | null;
  maxNumResults?: number | null;
  metadata?: {
    createdFromAisearchWizard?: boolean | null;
    workerDomain?: string | null;
  } | null;
  modifiedBy?: string | null;
  namespace?: string | null;
  paused?: boolean | null;
  publicEndpointId?: string | null;
  publicEndpointParams?: {
    authorizedHosts?: string[] | null;
    chatCompletionsEndpoint?: { disabled?: boolean | null } | null;
    enabled?: boolean | null;
    mcp?: { description?: string | null; disabled?: boolean | null } | null;
    rateLimit?: {
      periodMs?: number | null;
      requests?: number | null;
      technique?: "fixed" | "sliding" | (string & {}) | null;
    } | null;
    searchEndpoint?: { disabled?: boolean | null } | null;
  } | null;
  reranking?: boolean | null;
  rerankingModel?: "@cf/baai/bge-reranker-base" | "" | null;
  retrievalOptions?: {
    boostBy?:
      | {
          field: string;
          direction?:
            | "asc"
            | "desc"
            | "exists"
            | "not_exists"
            | (string & {})
            | null;
        }[]
      | null;
    keywordMatchMode?: "and" | "or" | (string & {}) | null;
  } | null;
  rewriteModel?:
    | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
    | "@cf/zai-org/glm-4.7-flash"
    | "@cf/meta/llama-3.1-8b-instruct-fast"
    | "@cf/meta/llama-3.1-8b-instruct-fp8"
    | "@cf/meta/llama-4-scout-17b-16e-instruct"
    | "@cf/qwen/qwen3-30b-a3b-fp8"
    | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
    | "@cf/moonshotai/kimi-k2-instruct"
    | "@cf/google/gemma-3-12b-it"
    | "@cf/google/gemma-4-26b-a4b-it"
    | "@cf/moonshotai/kimi-k2.5"
    | "anthropic/claude-3-7-sonnet"
    | "anthropic/claude-sonnet-4"
    | "anthropic/claude-opus-4"
    | "anthropic/claude-3-5-haiku"
    | "cerebras/qwen-3-235b-a22b-instruct"
    | "cerebras/qwen-3-235b-a22b-thinking"
    | "cerebras/llama-3.3-70b"
    | "cerebras/llama-4-maverick-17b-128e-instruct"
    | "cerebras/llama-4-scout-17b-16e-instruct"
    | "cerebras/gpt-oss-120b"
    | "google-ai-studio/gemini-2.5-flash"
    | "google-ai-studio/gemini-2.5-pro"
    | "grok/grok-4"
    | "groq/llama-3.3-70b-versatile"
    | "groq/llama-3.1-8b-instant"
    | "openai/gpt-5"
    | "openai/gpt-5-mini"
    | "openai/gpt-5-nano"
    | ""
    | null;
  rewriteQuery?: boolean | null;
  scoreThreshold?: number | null;
  source?: string | null;
  sourceParams?: {
    excludeItems?: string[] | null;
    includeItems?: string[] | null;
    prefix?: string | null;
    r2Jurisdiction?: string | null;
    webCrawler?: {
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "crawl" | "feed-rss" | (string & {}) | null;
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: string | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?: number | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const ReadNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiGatewayId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      aiSearchModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      cache: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      cacheThreshold: Schema.optional(
        Schema.Union([
          Schema.Literal("super_strict_match"),
          Schema.Literal("close_enough"),
          Schema.Literal("flexible_friend"),
          Schema.Literal("anything_goes"),
          Schema.Null,
        ]),
      ),
      cacheTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([Schema.Array(CustomMetadata), Schema.Null]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
          Schema.Literal("@cf/qwen/qwen3-vl-embedding-2b"),
          Schema.Literal("@cf/baai/bge-m3"),
          Schema.Literal("@cf/baai/bge-large-en-v1.5"),
          Schema.Literal("@cf/google/embeddinggemma-300m"),
          Schema.Literal("google-ai-studio/gemini-embedding-001"),
          Schema.Literal("google-ai-studio/gemini-embedding-2-preview"),
          Schema.Literal("openai/text-embedding-3-small"),
          Schema.Literal("openai/text-embedding-3-large"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      enable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engineVersion: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      fusionMethod: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      hybridSearchEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      indexMethod: Schema.optional(Schema.Union([IndexMethod, Schema.Null])),
      indexingOptions: Schema.optional(
        Schema.Union([IndexingOptions, Schema.Null]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(Schema.Union([Metadata, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([PublicEndpointParams, Schema.Null]),
      ),
      reranking: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      rerankingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/baai/bge-reranker-base"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      retrievalOptions: Schema.optional(
        Schema.Union([RetrievalOptions, Schema.Null]),
      ),
      rewriteModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/meta/llama-3.3-70b-instruct-fp8-fast"),
          Schema.Literal("@cf/zai-org/glm-4.7-flash"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fast"),
          Schema.Literal("@cf/meta/llama-3.1-8b-instruct-fp8"),
          Schema.Literal("@cf/meta/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("@cf/qwen/qwen3-30b-a3b-fp8"),
          Schema.Literal("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"),
          Schema.Literal("@cf/moonshotai/kimi-k2-instruct"),
          Schema.Literal("@cf/google/gemma-3-12b-it"),
          Schema.Literal("@cf/google/gemma-4-26b-a4b-it"),
          Schema.Literal("@cf/moonshotai/kimi-k2.5"),
          Schema.Literal("anthropic/claude-3-7-sonnet"),
          Schema.Literal("anthropic/claude-sonnet-4"),
          Schema.Literal("anthropic/claude-opus-4"),
          Schema.Literal("anthropic/claude-3-5-haiku"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-instruct"),
          Schema.Literal("cerebras/qwen-3-235b-a22b-thinking"),
          Schema.Literal("cerebras/llama-3.3-70b"),
          Schema.Literal("cerebras/llama-4-maverick-17b-128e-instruct"),
          Schema.Literal("cerebras/llama-4-scout-17b-16e-instruct"),
          Schema.Literal("cerebras/gpt-oss-120b"),
          Schema.Literal("google-ai-studio/gemini-2.5-flash"),
          Schema.Literal("google-ai-studio/gemini-2.5-pro"),
          Schema.Literal("grok/grok-4"),
          Schema.Literal("groq/llama-3.3-70b-versatile"),
          Schema.Literal("groq/llama-3.1-8b-instant"),
          Schema.Literal("openai/gpt-5"),
          Schema.Literal("openai/gpt-5-mini"),
          Schema.Literal("openai/gpt-5-nano"),
          Schema.Literal(""),
          Schema.Null,
        ]),
      ),
      rewriteQuery: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      scoreThreshold: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sourceParams: Schema.optional(Schema.Union([SourceParams2, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Literal("r2"),
          Schema.Literal("web-crawler"),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          aiGatewayId: "ai_gateway_id",
          aiSearchModel: "ai_search_model",
          cache: "cache",
          cacheThreshold: "cache_threshold",
          cacheTtl: "cache_ttl",
          chunkOverlap: "chunk_overlap",
          chunkSize: "chunk_size",
          createdBy: "created_by",
          customMetadata: "custom_metadata",
          embeddingModel: "embedding_model",
          enable: "enable",
          engineVersion: "engine_version",
          fusionMethod: "fusion_method",
          hybridSearchEnabled: "hybrid_search_enabled",
          indexMethod: "index_method",
          indexingOptions: "indexing_options",
          lastActivity: "last_activity",
          maxNumResults: "max_num_results",
          metadata: "metadata",
          modifiedBy: "modified_by",
          namespace: "namespace",
          paused: "paused",
          publicEndpointId: "public_endpoint_id",
          publicEndpointParams: "public_endpoint_params",
          reranking: "reranking",
          rerankingModel: "reranking_model",
          retrievalOptions: "retrieval_options",
          rewriteModel: "rewrite_model",
          rewriteQuery: "rewrite_query",
          scoreThreshold: "score_threshold",
          source: "source",
          sourceParams: "source_params",
          status: "status",
          syncInterval: "sync_interval",
          tokenId: "token_id",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ReadNamespaceInstanceResponse>;

export type ReadNamespaceInstanceError =
  | DefaultErrors
  | ValidationError
  | NamespaceNotFound
  | AiSearchInstanceNotFound
  | InvalidRoute
  | Forbidden;

export const readNamespaceInstance: API.OperationMethod<
  ReadNamespaceInstanceRequest,
  ReadNamespaceInstanceResponse,
  ReadNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadNamespaceInstanceRequest,
  output: ReadNamespaceInstanceResponse,
  errors: [
    ValidationError,
    NamespaceNotFound,
    AiSearchInstanceNotFound,
    InvalidRoute,
    Forbidden,
  ],
}));

export interface SearchNamespaceInstanceRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  aiSearchOptions?: {
    cache?: {
      cacheThreshold?:
        | "super_strict_match"
        | "close_enough"
        | "flexible_friend"
        | "anything_goes"
        | (string & {});
      enabled?: boolean;
    };
    queryRewrite?: {
      enabled?: boolean;
      model?:
        | "@cf/meta/llama-3.3-70b-instruct-fp8-fast"
        | "@cf/zai-org/glm-4.7-flash"
        | "@cf/meta/llama-3.1-8b-instruct-fast"
        | "@cf/meta/llama-3.1-8b-instruct-fp8"
        | "@cf/meta/llama-4-scout-17b-16e-instruct"
        | "@cf/qwen/qwen3-30b-a3b-fp8"
        | "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"
        | "@cf/moonshotai/kimi-k2-instruct"
        | "@cf/google/gemma-3-12b-it"
        | "@cf/google/gemma-4-26b-a4b-it"
        | "@cf/moonshotai/kimi-k2.5"
        | "anthropic/claude-3-7-sonnet"
        | "anthropic/claude-sonnet-4"
        | "anthropic/claude-opus-4"
        | "anthropic/claude-3-5-haiku"
        | "cerebras/qwen-3-235b-a22b-instruct"
        | "cerebras/qwen-3-235b-a22b-thinking"
        | "cerebras/llama-3.3-70b"
        | "cerebras/llama-4-maverick-17b-128e-instruct"
        | "cerebras/llama-4-scout-17b-16e-instruct"
        | "cerebras/gpt-oss-120b"
        | "google-ai-studio/gemini-2.5-flash"
        | "google-ai-studio/gemini-2.5-pro"
        | "grok/grok-4"
        | "groq/llama-3.3-70b-versatile"
        | "groq/llama-3.1-8b-instant"
        | "openai/gpt-5"
        | "openai/gpt-5-mini"
        | "openai/gpt-5-nano"
        | ""
        | (string & {});
      rewritePrompt?: string;
    };
    reranking?: {
      enabled?: boolean;
      matchThreshold?: number;
      model?: "@cf/baai/bge-reranker-base" | "" | (string & {});
    };
    retrieval?: {
      boostBy?: {
        field: string;
        direction?: "asc" | "desc" | "exists" | "not_exists" | (string & {});
      }[];
      contextExpansion?: number;
      filters?: Record<string, unknown>;
      fusionMethod?: "max" | "rrf" | (string & {});
      keywordMatchMode?: "and" | "or" | (string & {});
      matchThreshold?: number;
      maxNumResults?: number;
      retrievalType?: "vector" | "keyword" | "hybrid" | (string & {});
      returnOnFailure?: boolean;
    };
  };
  /** Body param: OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', text:'…'}, {type:'image_url', image_url:{url:'…'} */
  messages?: {
    content:
      | string
      | (
          | { text: string; type: "text" }
          | { imageUrl: { url: string }; type: "image_url" }
        )[]
      | null;
    role:
      | "system"
      | "developer"
      | "user"
      | "assistant"
      | "tool"
      | (string & {});
  }[];
  /** Body param: A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both. */
  query?: string;
}

export const SearchNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      aiSearchOptions: Schema.optional(AisearchOptions),
      messages: Schema.optional(Schema.Array(Message)),
      query: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        aiSearchOptions: "ai_search_options",
        messages: "messages",
        query: "query",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search",
      }),
    ),
  ) as unknown as Schema.Codec<SearchNamespaceInstanceRequest>;

export interface SearchNamespaceInstanceResponse {
  chunks: {
    id: string;
    score: number;
    text: string;
    type: string;
    item?: {
      key: string;
      metadata?: Record<string, unknown> | null;
      timestamp?: number | null;
    } | null;
    scoringDetails?: {
      fusionMethod?: "rrf" | "max" | (string & {}) | null;
      keywordRank?: number | null;
      keywordScore?: number | null;
      rerankingScore?: number | null;
      vectorRank?: number | null;
      vectorScore?: number | null;
    } | null;
  }[];
  queryKind: "text" | "image" | "multimodal" | (string & {});
  searchQuery?: string | null;
}

export const SearchNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      chunks: Schema.Array(Chunk),
      queryKind: Schema.Union([
        Schema.Literals(["text", "image", "multimodal"]),
        Schema.String,
      ]),
      searchQuery: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          chunks: "chunks",
          queryKind: "query_kind",
          searchQuery: "search_query",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<SearchNamespaceInstanceResponse>;

export type SearchNamespaceInstanceError = DefaultErrors;

export const searchNamespaceInstance: API.OperationMethod<
  SearchNamespaceInstanceRequest,
  SearchNamespaceInstanceResponse,
  SearchNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchNamespaceInstanceRequest,
  output: SearchNamespaceInstanceResponse,
  errors: [],
}));

export interface StatsNamespaceInstanceRequest {
  name: string;
  id: string;
  accountId: string;
}

export const StatsNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats",
      }),
    ),
  ) as unknown as Schema.Codec<StatsNamespaceInstanceRequest>;

export interface StatsNamespaceInstanceResponse {
  completed?: number | null;
  /** True when status counts are unavailable (e.g. legacy stats query exceeded D1 statement-size limit). Counts are omitted in this case. */
  degraded?: boolean | null;
  /** Engine-specific metadata. Present only for managed (v3) instances. */
  engine?: {
    r2?: {
      metadataSizeBytes: number;
      objectCount: number;
      payloadSizeBytes: number;
    } | null;
    vectorize?: { dimensions: number; vectorsCount: number } | null;
  } | null;
  error?: number | null;
  fileEmbedErrors?: Record<string, unknown> | null;
  indexSourceErrors?: Record<string, unknown> | null;
  lastActivity?: string | null;
  outdated?: number | null;
  queued?: number | null;
  running?: number | null;
  skipped?: number | null;
}

export const StatsNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      completed: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      degraded: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      engine: Schema.optional(Schema.Union([Engine, Schema.Null])),
      error: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      fileEmbedErrors: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      indexSourceErrors: Schema.optional(
        Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Null,
        ]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      outdated: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      queued: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      running: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      skipped: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          completed: "completed",
          degraded: "degraded",
          engine: "engine",
          error: "error",
          fileEmbedErrors: "file_embed_errors",
          indexSourceErrors: "index_source_errors",
          lastActivity: "last_activity",
          outdated: "outdated",
          queued: "queued",
          running: "running",
          skipped: "skipped",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<StatsNamespaceInstanceResponse>;

export type StatsNamespaceInstanceError = DefaultErrors;

export const statsNamespaceInstance: API.OperationMethod<
  StatsNamespaceInstanceRequest,
  StatsNamespaceInstanceResponse,
  StatsNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StatsNamespaceInstanceRequest,
  output: StatsNamespaceInstanceResponse,
  errors: [],
}));

// =============================================================================
// NamespaceInstanceItem
// =============================================================================

export interface GetNamespaceInstanceItemRequest {
  name: string;
  id: string;
  itemId: string;
  accountId: string;
}

export const GetNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetNamespaceInstanceItemRequest>;

export interface GetNamespaceInstanceItemResponse {
  id: string;
  checksum: string;
  chunksCount: number | null;
  createdAt: string;
  fileSize: number | null;
  key: string;
  lastSeenAt: string;
  namespace: string;
  nextAction: "INDEX" | "DELETE" | null;
  /** Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items. */
  sourceId: string | null;
  status:
    | "queued"
    | "running"
    | "completed"
    | "error"
    | "skipped"
    | "outdated"
    | (string & {});
  error?: string | null;
}

export const GetNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      checksum: Schema.String,
      chunksCount: Schema.Union([Schema.Number, Schema.Null]),
      createdAt: Schema.String,
      fileSize: Schema.Union([Schema.Number, Schema.Null]),
      key: Schema.String,
      lastSeenAt: Schema.String,
      namespace: Schema.String,
      nextAction: Schema.Union([
        Schema.Literal("INDEX"),
        Schema.Literal("DELETE"),
        Schema.Null,
      ]),
      sourceId: Schema.Union([Schema.String, Schema.Null]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "completed",
          "error",
          "skipped",
          "outdated",
        ]),
        Schema.String,
      ]),
      error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checksum: "checksum",
          chunksCount: "chunks_count",
          createdAt: "created_at",
          fileSize: "file_size",
          key: "key",
          lastSeenAt: "last_seen_at",
          namespace: "namespace",
          nextAction: "next_action",
          sourceId: "source_id",
          status: "status",
          error: "error",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetNamespaceInstanceItemResponse>;

export type GetNamespaceInstanceItemError = DefaultErrors;

export const getNamespaceInstanceItem: API.OperationMethod<
  GetNamespaceInstanceItemRequest,
  GetNamespaceInstanceItemResponse,
  GetNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespaceInstanceItemRequest,
  output: GetNamespaceInstanceItemResponse,
  errors: [],
}));

export interface ListNamespaceInstanceItemsRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter items by their unique ID. Returns at most one item. */
  itemId?: string;
  /** Query param: JSON-encoded metadata filter using Vectorize filter syntax. Examples: {"folder":"reports/"}, {"timestamp":{"$gte":1700000000000}}, {"folder":{"$in":["docs/","reports/"]}} */
  metadataFilter?: string;
  /** Query param */
  search?: string;
  /** Query param: Sort order for items. "status" (default) sorts by status priority then last_seen_at. "modified_at" sorts by file modification time (most recent first), falling back to created_at. */
  sortBy?: "status" | "modified_at" | (string & {});
  /** Query param: Filter items by source_id. Use "builtin" for uploaded files, or a source identifier like "web-crawler:https://example.com". */
  source?: string;
  /** Query param */
  status?:
    | "queued"
    | "running"
    | "completed"
    | "error"
    | "skipped"
    | "outdated"
    | (string & {});
}

export const ListNamespaceInstanceItemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      itemId: Schema.optional(Schema.String).pipe(T.HttpQuery("item_id")),
      metadataFilter: Schema.optional(Schema.String).pipe(
        T.HttpQuery("metadata_filter"),
      ),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      sortBy: Schema.optional(
        Schema.Union([
          Schema.Literals(["status", "modified_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("sort_by")),
      source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "queued",
            "running",
            "completed",
            "error",
            "skipped",
            "outdated",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceInstanceItemsRequest>;

export interface ListNamespaceInstanceItemsResponse {
  result: {
    id: string;
    checksum: string;
    chunksCount: number | null;
    createdAt: string;
    fileSize: number | null;
    key: string;
    lastSeenAt: string;
    namespace: string;
    nextAction: "INDEX" | "DELETE" | null;
    sourceId: string | null;
    status:
      | "queued"
      | "running"
      | "completed"
      | "error"
      | "skipped"
      | "outdated"
      | (string & {});
    error?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListNamespaceInstanceItemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListNamespaceInstanceItemsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespaceInstanceItemsResponse>;

export type ListNamespaceInstanceItemsError = DefaultErrors;

export const listNamespaceInstanceItems: API.PaginatedOperationMethod<
  ListNamespaceInstanceItemsRequest,
  ListNamespaceInstanceItemsResponse,
  ListNamespaceInstanceItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespaceInstanceItemsRequest,
  output: ListNamespaceInstanceItemsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface DeleteNamespaceInstanceItemRequest {
  name: string;
  id: string;
  itemId: string;
  accountId: string;
}

export const DeleteNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteNamespaceInstanceItemRequest>;

export interface DeleteNamespaceInstanceItemResponse {
  key: string;
}

export const DeleteNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteNamespaceInstanceItemResponse>;

export type DeleteNamespaceInstanceItemError = DefaultErrors;

export const deleteNamespaceInstanceItem: API.OperationMethod<
  DeleteNamespaceInstanceItemRequest,
  DeleteNamespaceInstanceItemResponse,
  DeleteNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceInstanceItemRequest,
  output: DeleteNamespaceInstanceItemResponse,
  errors: [],
}));

export interface DownloadNamespaceInstanceItemRequest {
  name: string;
  id: string;
  itemId: string;
  accountId: string;
}

export const DownloadNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}/download",
      }),
    ),
  ) as unknown as Schema.Codec<DownloadNamespaceInstanceItemRequest>;

export type DownloadNamespaceInstanceItemResponse = unknown;

export const DownloadNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<DownloadNamespaceInstanceItemResponse>;

export type DownloadNamespaceInstanceItemError = DefaultErrors;

export const downloadNamespaceInstanceItem: API.OperationMethod<
  DownloadNamespaceInstanceItemRequest,
  DownloadNamespaceInstanceItemResponse,
  DownloadNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DownloadNamespaceInstanceItemRequest,
  output: DownloadNamespaceInstanceItemResponse,
  errors: [],
}));

export interface UploadNamespaceInstanceItemRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  file: { file: File | Blob; metadata?: string; waitForCompletion?: boolean };
}

export const UploadNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      file: File2,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<UploadNamespaceInstanceItemRequest>;

export interface UploadNamespaceInstanceItemResponse {
  id: string;
  checksum: string;
  chunksCount: number | null;
  createdAt: string;
  fileSize: number | null;
  key: string;
  lastSeenAt: string;
  namespace: string;
  nextAction: "INDEX" | "DELETE" | null;
  /** Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items. */
  sourceId: string | null;
  status:
    | "queued"
    | "running"
    | "completed"
    | "error"
    | "skipped"
    | "outdated"
    | (string & {});
  error?: string | null;
}

export const UploadNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      checksum: Schema.String,
      chunksCount: Schema.Union([Schema.Number, Schema.Null]),
      createdAt: Schema.String,
      fileSize: Schema.Union([Schema.Number, Schema.Null]),
      key: Schema.String,
      lastSeenAt: Schema.String,
      namespace: Schema.String,
      nextAction: Schema.Union([
        Schema.Literal("INDEX"),
        Schema.Literal("DELETE"),
        Schema.Null,
      ]),
      sourceId: Schema.Union([Schema.String, Schema.Null]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "completed",
          "error",
          "skipped",
          "outdated",
        ]),
        Schema.String,
      ]),
      error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checksum: "checksum",
          chunksCount: "chunks_count",
          createdAt: "created_at",
          fileSize: "file_size",
          key: "key",
          lastSeenAt: "last_seen_at",
          namespace: "namespace",
          nextAction: "next_action",
          sourceId: "source_id",
          status: "status",
          error: "error",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UploadNamespaceInstanceItemResponse>;

export type UploadNamespaceInstanceItemError = DefaultErrors;

export const uploadNamespaceInstanceItem: API.OperationMethod<
  UploadNamespaceInstanceItemRequest,
  UploadNamespaceInstanceItemResponse,
  UploadNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UploadNamespaceInstanceItemRequest,
  output: UploadNamespaceInstanceItemResponse,
  errors: [],
}));

export interface ChunksNamespaceInstanceItemRequest {
  name: string;
  id: string;
  itemId: string;
  /** Path param */
  accountId: string;
  /** Query param */
  limit?: number;
  /** Query param */
  offset?: number;
}

export const ChunksNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      offset: Schema.optional(Schema.Number).pipe(T.HttpQuery("offset")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}/chunks",
      }),
    ),
  ) as unknown as Schema.Codec<ChunksNamespaceInstanceItemRequest>;

export type ChunksNamespaceInstanceItemResponse = {
  id: string;
  item: {
    key: string;
    metadata?: Record<string, unknown> | null;
    timestamp?: number | null;
  };
  text: string;
  endByte?: number | null;
  startByte?: number | null;
}[];

export const ChunksNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(ItemChunksResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ChunksNamespaceInstanceItemResponse>;

export type ChunksNamespaceInstanceItemError = DefaultErrors;

export const chunksNamespaceInstanceItem: API.OperationMethod<
  ChunksNamespaceInstanceItemRequest,
  ChunksNamespaceInstanceItemResponse,
  ChunksNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ChunksNamespaceInstanceItemRequest,
  output: ChunksNamespaceInstanceItemResponse,
  errors: [],
}));

export interface LogsNamespaceInstanceItemRequest {
  name: string;
  id: string;
  itemId: string;
  /** Path param */
  accountId: string;
  /** Query param */
  cursor?: string;
  /** Query param */
  limit?: number;
}

export const LogsNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}/logs",
      }),
    ),
  ) as unknown as Schema.Codec<LogsNamespaceInstanceItemRequest>;

export type LogsNamespaceInstanceItemResponse = {
  action: string;
  chunkCount: number | null;
  errorType: string | null;
  fileKey: string;
  message: string | null;
  processingTimeMs: number | null;
  timestamp: string;
}[];

export const LogsNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(ItemLogsResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<LogsNamespaceInstanceItemResponse>;

export type LogsNamespaceInstanceItemError = DefaultErrors;

export const logsNamespaceInstanceItem: API.OperationMethod<
  LogsNamespaceInstanceItemRequest,
  LogsNamespaceInstanceItemResponse,
  LogsNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LogsNamespaceInstanceItemRequest,
  output: LogsNamespaceInstanceItemResponse,
  errors: [],
}));

export interface SyncNamespaceInstanceItemRequest {
  name: string;
  id: string;
  itemId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  nextAction: "INDEX";
  /** Body param: Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item r */
  waitForCompletion?: boolean;
}

export const SyncNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      itemId: Schema.String.pipe(T.HttpPath("itemId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      nextAction: Schema.Literal("INDEX"),
      waitForCompletion: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        nextAction: "next_action",
        waitForCompletion: "wait_for_completion",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}",
      }),
    ),
  ) as unknown as Schema.Codec<SyncNamespaceInstanceItemRequest>;

export interface SyncNamespaceInstanceItemResponse {
  id: string;
  checksum: string;
  chunksCount: number | null;
  createdAt: string;
  fileSize: number | null;
  key: string;
  lastSeenAt: string;
  namespace: string;
  nextAction: "INDEX" | "DELETE" | null;
  /** Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items. */
  sourceId: string | null;
  status:
    | "queued"
    | "running"
    | "completed"
    | "error"
    | "skipped"
    | "outdated"
    | (string & {});
  error?: string | null;
}

export const SyncNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      checksum: Schema.String,
      chunksCount: Schema.Union([Schema.Number, Schema.Null]),
      createdAt: Schema.String,
      fileSize: Schema.Union([Schema.Number, Schema.Null]),
      key: Schema.String,
      lastSeenAt: Schema.String,
      namespace: Schema.String,
      nextAction: Schema.Union([
        Schema.Literal("INDEX"),
        Schema.Literal("DELETE"),
        Schema.Null,
      ]),
      sourceId: Schema.Union([Schema.String, Schema.Null]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "completed",
          "error",
          "skipped",
          "outdated",
        ]),
        Schema.String,
      ]),
      error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checksum: "checksum",
          chunksCount: "chunks_count",
          createdAt: "created_at",
          fileSize: "file_size",
          key: "key",
          lastSeenAt: "last_seen_at",
          namespace: "namespace",
          nextAction: "next_action",
          sourceId: "source_id",
          status: "status",
          error: "error",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<SyncNamespaceInstanceItemResponse>;

export type SyncNamespaceInstanceItemError = DefaultErrors;

export const syncNamespaceInstanceItem: API.OperationMethod<
  SyncNamespaceInstanceItemRequest,
  SyncNamespaceInstanceItemResponse,
  SyncNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SyncNamespaceInstanceItemRequest,
  output: SyncNamespaceInstanceItemResponse,
  errors: [],
}));

// =============================================================================
// NamespaceInstanceJob
// =============================================================================

export interface GetNamespaceInstanceJobRequest {
  name: string;
  id: string;
  jobId: string;
  accountId: string;
}

export const GetNamespaceInstanceJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{jobId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetNamespaceInstanceJobRequest>;

export interface GetNamespaceInstanceJobResponse {
  id: string;
  source: "user" | "schedule" | (string & {});
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}

export const GetNamespaceInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "schedule"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSeenAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          source: "source",
          description: "description",
          endReason: "end_reason",
          endedAt: "ended_at",
          lastSeenAt: "last_seen_at",
          startedAt: "started_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetNamespaceInstanceJobResponse>;

export type GetNamespaceInstanceJobError = DefaultErrors;

export const getNamespaceInstanceJob: API.OperationMethod<
  GetNamespaceInstanceJobRequest,
  GetNamespaceInstanceJobResponse,
  GetNamespaceInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNamespaceInstanceJobRequest,
  output: GetNamespaceInstanceJobResponse,
  errors: [],
}));

export interface ListNamespaceInstanceJobsRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListNamespaceInstanceJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceInstanceJobsRequest>;

export interface ListNamespaceInstanceJobsResponse {
  result: {
    id: string;
    source: "user" | "schedule" | (string & {});
    description?: string | null;
    endReason?: string | null;
    endedAt?: string | null;
    lastSeenAt?: string | null;
    startedAt?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListNamespaceInstanceJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListInstanceJobsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListNamespaceInstanceJobsResponse>;

export type ListNamespaceInstanceJobsError = DefaultErrors;

export const listNamespaceInstanceJobs: API.PaginatedOperationMethod<
  ListNamespaceInstanceJobsRequest,
  ListNamespaceInstanceJobsResponse,
  ListNamespaceInstanceJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespaceInstanceJobsRequest,
  output: ListNamespaceInstanceJobsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateNamespaceInstanceJobRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  description?: string;
}

export const CreateNamespaceInstanceJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
      }),
    ),
  ) as unknown as Schema.Codec<CreateNamespaceInstanceJobRequest>;

export interface CreateNamespaceInstanceJobResponse {
  id: string;
  source: "user" | "schedule" | (string & {});
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}

export const CreateNamespaceInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "schedule"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSeenAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          source: "source",
          description: "description",
          endReason: "end_reason",
          endedAt: "ended_at",
          lastSeenAt: "last_seen_at",
          startedAt: "started_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateNamespaceInstanceJobResponse>;

export type CreateNamespaceInstanceJobError = DefaultErrors;

export const createNamespaceInstanceJob: API.OperationMethod<
  CreateNamespaceInstanceJobRequest,
  CreateNamespaceInstanceJobResponse,
  CreateNamespaceInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespaceInstanceJobRequest,
  output: CreateNamespaceInstanceJobResponse,
  errors: [],
}));

export interface PatchNamespaceInstanceJobRequest {
  name: string;
  id: string;
  jobId: string;
  /** Path param */
  accountId: string;
  /** Body param */
  action: "cancel";
}

export const PatchNamespaceInstanceJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      action: Schema.Literal("cancel"),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{jobId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchNamespaceInstanceJobRequest>;

export interface PatchNamespaceInstanceJobResponse {
  id: string;
  source: "user" | "schedule" | (string & {});
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}

export const PatchNamespaceInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      source: Schema.Union([
        Schema.Literals(["user", "schedule"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endReason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      endedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastSeenAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      startedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          source: "source",
          description: "description",
          endReason: "end_reason",
          endedAt: "ended_at",
          lastSeenAt: "last_seen_at",
          startedAt: "started_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchNamespaceInstanceJobResponse>;

export type PatchNamespaceInstanceJobError = DefaultErrors;

export const patchNamespaceInstanceJob: API.OperationMethod<
  PatchNamespaceInstanceJobRequest,
  PatchNamespaceInstanceJobResponse,
  PatchNamespaceInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchNamespaceInstanceJobRequest,
  output: PatchNamespaceInstanceJobResponse,
  errors: [],
}));

export interface LogsNamespaceInstanceJobRequest {
  name: string;
  id: string;
  jobId: string;
  /** Path param */
  accountId: string;
  /** Query param */
  page?: number;
  /** Query param */
  perPage?: number;
}

export const LogsNamespaceInstanceJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      jobId: Schema.String.pipe(T.HttpPath("jobId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{jobId}/logs",
      }),
    ),
  ) as unknown as Schema.Codec<LogsNamespaceInstanceJobRequest>;

export type LogsNamespaceInstanceJobResponse = {
  id: number;
  createdAt: number;
  message: string;
  messageType: number;
}[];

export const LogsNamespaceInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(JobLogsResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<LogsNamespaceInstanceJobResponse>;

export type LogsNamespaceInstanceJobError = DefaultErrors;

export const logsNamespaceInstanceJob: API.OperationMethod<
  LogsNamespaceInstanceJobRequest,
  LogsNamespaceInstanceJobResponse,
  LogsNamespaceInstanceJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LogsNamespaceInstanceJobRequest,
  output: LogsNamespaceInstanceJobResponse,
  errors: [],
}));

// =============================================================================
// OrUpdateNamespaceInstanceItem
// =============================================================================

export interface CreateOrUpdateNamespaceInstanceItemRequest {
  name: string;
  id: string;
  /** Path param */
  accountId: string;
  /** Body param: Item key / filename. Must not exceed 128 characters. */
  key: string;
  /** Body param */
  nextAction: "INDEX";
  /** Body param: Wait for indexing to fully complete before responding. On RAGs with vector indexing enabled, this additionally waits for Vectorize ingestion confirmation (up to 40s) so the returned item r */
  waitForCompletion?: boolean;
}

export const CreateOrUpdateNamespaceInstanceItemRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      name: Schema.String.pipe(T.HttpPath("name")),
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      key: Schema.String,
      nextAction: Schema.Literal("INDEX"),
      waitForCompletion: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        key: "key",
        nextAction: "next_action",
        waitForCompletion: "wait_for_completion",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
      }),
    ),
  ) as unknown as Schema.Codec<CreateOrUpdateNamespaceInstanceItemRequest>;

export interface CreateOrUpdateNamespaceInstanceItemResponse {
  id: string;
  checksum: string;
  chunksCount: number | null;
  createdAt: string;
  fileSize: number | null;
  key: string;
  lastSeenAt: string;
  namespace: string;
  nextAction: "INDEX" | "DELETE" | null;
  /** Identifies which data source this item belongs to. "builtin" for uploaded files, "{type}:{source}" for external sources, null for legacy items. */
  sourceId: string | null;
  status:
    | "queued"
    | "running"
    | "completed"
    | "error"
    | "skipped"
    | "outdated"
    | (string & {});
  error?: string | null;
}

export const CreateOrUpdateNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      checksum: Schema.String,
      chunksCount: Schema.Union([Schema.Number, Schema.Null]),
      createdAt: Schema.String,
      fileSize: Schema.Union([Schema.Number, Schema.Null]),
      key: Schema.String,
      lastSeenAt: Schema.String,
      namespace: Schema.String,
      nextAction: Schema.Union([
        Schema.Literal("INDEX"),
        Schema.Literal("DELETE"),
        Schema.Null,
      ]),
      sourceId: Schema.Union([Schema.String, Schema.Null]),
      status: Schema.Union([
        Schema.Literals([
          "queued",
          "running",
          "completed",
          "error",
          "skipped",
          "outdated",
        ]),
        Schema.String,
      ]),
      error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checksum: "checksum",
          chunksCount: "chunks_count",
          createdAt: "created_at",
          fileSize: "file_size",
          key: "key",
          lastSeenAt: "last_seen_at",
          namespace: "namespace",
          nextAction: "next_action",
          sourceId: "source_id",
          status: "status",
          error: "error",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateOrUpdateNamespaceInstanceItemResponse>;

export type CreateOrUpdateNamespaceInstanceItemError = DefaultErrors;

export const createOrUpdateNamespaceInstanceItem: API.OperationMethod<
  CreateOrUpdateNamespaceInstanceItemRequest,
  CreateOrUpdateNamespaceInstanceItemResponse,
  CreateOrUpdateNamespaceInstanceItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrUpdateNamespaceInstanceItemRequest,
  output: CreateOrUpdateNamespaceInstanceItemResponse,
  errors: [],
}));

// =============================================================================
// Token
// =============================================================================

export interface ListTokensRequest {
  /** Path param */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter tokens whose name contains this string (case-insensitive). */
  search?: string;
}

export const ListTokensRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/ai-search/tokens",
      }),
    ),
) as unknown as Schema.Codec<ListTokensRequest>;

export interface ListTokensResponse {
  result: {
    id: string;
    cfApiId: string;
    createdAt: string;
    modifiedAt: string;
    name: string;
    createdBy?: string | null;
    enabled?: boolean | null;
    legacy?: boolean | null;
    modifiedBy?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListTokensResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListTokensResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListInstancesResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListTokensResponse>;

export type ListTokensError = DefaultErrors | InvalidRoute | Forbidden;

export const listTokens: API.PaginatedOperationMethod<
  ListTokensRequest,
  ListTokensResponse,
  ListTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTokensRequest,
  output: ListTokensResponse,
  errors: [InvalidRoute, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateTokenRequest {
  /** Path param */
  accountId: string;
  /** Body param */
  cfApiId: string;
  /** Body param */
  cfApiKey: string;
  /** Body param */
  name: string;
  /** Body param */
  legacy?: boolean;
}

export const CreateTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cfApiId: Schema.String,
      cfApiKey: Schema.String,
      name: Schema.String,
      legacy: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        cfApiId: "cf_api_id",
        cfApiKey: "cf_api_key",
        name: "name",
        legacy: "legacy",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/ai-search/tokens",
      }),
    ),
) as unknown as Schema.Codec<CreateTokenRequest>;

export interface CreateTokenResponse {
  id: string;
  cfApiId: string;
  createdAt: string;
  modifiedAt: string;
  name: string;
  createdBy?: string | null;
  enabled?: boolean | null;
  legacy?: boolean | null;
  modifiedBy?: string | null;
}

export const CreateTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      cfApiId: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      legacy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cfApiId: "cf_api_id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          name: "name",
          createdBy: "created_by",
          enabled: "enabled",
          legacy: "legacy",
          modifiedBy: "modified_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateTokenResponse>;

export type CreateTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | InvalidTokenCredentials
  | Forbidden;

export const createToken: API.OperationMethod<
  CreateTokenRequest,
  CreateTokenResponse,
  CreateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTokenRequest,
  output: CreateTokenResponse,
  errors: [
    ValidationError,
    NotFound,
    InvalidRoute,
    InvalidTokenCredentials,
    Forbidden,
  ],
}));

export interface UpdateTokenRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  cfApiId: string;
  /** Body param */
  cfApiKey: string;
  /** Body param */
  name: string;
  /** Body param */
  legacy?: boolean;
}

export const UpdateTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      cfApiId: Schema.String,
      cfApiKey: Schema.String,
      name: Schema.String,
      legacy: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        cfApiId: "cf_api_id",
        cfApiKey: "cf_api_key",
        name: "name",
        legacy: "legacy",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/ai-search/tokens/{id}",
      }),
    ),
) as unknown as Schema.Codec<UpdateTokenRequest>;

export interface UpdateTokenResponse {
  id: string;
  cfApiId: string;
  createdAt: string;
  modifiedAt: string;
  name: string;
  createdBy?: string | null;
  enabled?: boolean | null;
  legacy?: boolean | null;
  modifiedBy?: string | null;
}

export const UpdateTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      cfApiId: Schema.String,
      createdAt: Schema.String,
      modifiedAt: Schema.String,
      name: Schema.String,
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      legacy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cfApiId: "cf_api_id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          name: "name",
          createdBy: "created_by",
          enabled: "enabled",
          legacy: "legacy",
          modifiedBy: "modified_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateTokenResponse>;

export type UpdateTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | TokenNotFound
  | Forbidden
  | InvalidTokenCredentials;

export const updateToken: API.OperationMethod<
  UpdateTokenRequest,
  UpdateTokenResponse,
  UpdateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTokenRequest,
  output: UpdateTokenResponse,
  errors: [
    ValidationError,
    NotFound,
    InvalidRoute,
    TokenNotFound,
    Forbidden,
    InvalidTokenCredentials,
  ],
}));

export interface DeleteTokenRequest {
  id: string;
  accountId: string;
}

export const DeleteTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String.pipe(T.HttpPath("id")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/ai-search/tokens/{id}",
      }),
    ),
) as unknown as Schema.Codec<DeleteTokenRequest>;

export type DeleteTokenResponse = unknown;

export const DeleteTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteTokenResponse>;

export type DeleteTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | TokenNotFound
  | TokenInUseByInstances
  | Forbidden;

export const deleteToken: API.OperationMethod<
  DeleteTokenRequest,
  DeleteTokenResponse,
  DeleteTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTokenRequest,
  output: DeleteTokenResponse,
  errors: [
    ValidationError,
    NotFound,
    InvalidRoute,
    TokenNotFound,
    TokenInUseByInstances,
    Forbidden,
  ],
}));

export interface ReadTokenRequest {
  id: string;
  accountId: string;
}

export const ReadTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/tokens/{id}",
    }),
  ),
) as unknown as Schema.Codec<ReadTokenRequest>;

export interface ReadTokenResponse {
  id?: string | null;
  cfApiId?: string | null;
  createdAt?: string | null;
  modifiedAt?: string | null;
  name?: string | null;
  createdBy?: string | null;
  enabled?: boolean | null;
  legacy?: boolean | null;
  modifiedBy?: string | null;
}

export const ReadTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      cfApiId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      legacy: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cfApiId: "cf_api_id",
          createdAt: "created_at",
          modifiedAt: "modified_at",
          name: "name",
          createdBy: "created_by",
          enabled: "enabled",
          legacy: "legacy",
          modifiedBy: "modified_by",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ReadTokenResponse>;

export type ReadTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute
  | TokenNotFound
  | Forbidden;

export const readToken: API.OperationMethod<
  ReadTokenRequest,
  ReadTokenResponse,
  ReadTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadTokenRequest,
  output: ReadTokenResponse,
  errors: [ValidationError, NotFound, InvalidRoute, TokenNotFound, Forbidden],
}));
