/**
 * Cloudflare AISEARCH API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service aisearch
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class InvalidRoute extends Schema.TaggedErrorClass<InvalidRoute>()(
  "InvalidRoute",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(InvalidRoute, [{ code: 7003 }]);

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.Number,
  message: Schema.String,
}) {}
T.applyErrorMatchers(NotFound, [{ code: 7002 }]);

export class SyncInCooldown extends Schema.TaggedErrorClass<SyncInCooldown>()(
  "SyncInCooldown",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(SyncInCooldown, [{ code: 7020 }]);

export class UnableToConnect extends Schema.TaggedErrorClass<UnableToConnect>()(
  "UnableToConnect",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(UnableToConnect, [{ code: 7017 }]);

export class ValidationError extends Schema.TaggedErrorClass<ValidationError>()(
  "ValidationError",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(ValidationError, [{ code: 7001 }]);

// =============================================================================
// CompletionsInstance
// =============================================================================

export interface ChatCompletionsInstanceRequest {
  id: string;
  /** Path param */
  accountId: string;
  /** Body param */
  messages: {
    content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    messages: Schema.Array(
      Schema.Struct({
        content: Schema.Union([Schema.String, Schema.Null]),
        role: Schema.Union([
          Schema.Literals(["system", "developer", "user", "assistant", "tool"]),
          Schema.String,
        ]),
      }),
    ),
    aiSearchOptions: Schema.optional(
      Schema.Struct({
        cache: Schema.optional(
          Schema.Struct({
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
            enabled: Schema.optional(Schema.Boolean),
          }).pipe(
            Schema.encodeKeys({
              cacheThreshold: "cache_threshold",
              enabled: "enabled",
            }),
          ),
        ),
        queryRewrite: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
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
            rewritePrompt: Schema.optional(Schema.String),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              model: "model",
              rewritePrompt: "rewrite_prompt",
            }),
          ),
        ),
        reranking: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            matchThreshold: Schema.optional(Schema.Number),
            model: Schema.optional(
              Schema.Union([
                Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
                Schema.String,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              matchThreshold: "match_threshold",
              model: "model",
            }),
          ),
        ),
        retrieval: Schema.optional(
          Schema.Struct({
            boostBy: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                      Schema.String,
                    ]),
                  ),
                }),
              ),
            ),
            contextExpansion: Schema.optional(Schema.Number),
            filters: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            fusionMethod: Schema.optional(
              Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
            ),
            keywordMatchMode: Schema.optional(
              Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
            ),
            matchThreshold: Schema.optional(Schema.Number),
            maxNumResults: Schema.optional(Schema.Number),
            retrievalType: Schema.optional(
              Schema.Union([
                Schema.Literals(["vector", "keyword", "hybrid"]),
                Schema.String,
              ]),
            ),
            returnOnFailure: Schema.optional(Schema.Boolean),
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
        ),
      }).pipe(
        Schema.encodeKeys({
          cache: "cache",
          queryRewrite: "query_rewrite",
          reranking: "reranking",
          retrieval: "retrieval",
        }),
      ),
    ),
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
  ) as unknown as Schema.Schema<ChatCompletionsInstanceRequest>;

export interface ChatCompletionsInstanceResponse {
  choices: {
    message: {
      content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    choices: Schema.Array(
      Schema.Struct({
        message: Schema.Struct({
          content: Schema.Union([Schema.String, Schema.Null]),
          role: Schema.Union([
            Schema.Literals([
              "system",
              "developer",
              "user",
              "assistant",
              "tool",
            ]),
            Schema.String,
          ]),
        }),
        index: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
    ),
    chunks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        score: Schema.Number,
        text: Schema.String,
        type: Schema.String,
        item: Schema.optional(
          Schema.Union([
            Schema.Struct({
              key: Schema.String,
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.Unknown),
                  Schema.Null,
                ]),
              ),
              timestamp: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        scoringDetails: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fusionMethod: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["rrf", "max"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              keywordRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              keywordScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              rerankingScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
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
            Schema.Null,
          ]),
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
    ),
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    model: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    object: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }) as unknown as Schema.Schema<ChatCompletionsInstanceResponse>;

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
    content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    aiSearchOptions: Schema.Struct({
      instanceIds: Schema.Array(Schema.String),
      cache: Schema.optional(
        Schema.Struct({
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
          enabled: Schema.optional(Schema.Boolean),
        }).pipe(
          Schema.encodeKeys({
            cacheThreshold: "cache_threshold",
            enabled: "enabled",
          }),
        ),
      ),
      queryRewrite: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
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
          rewritePrompt: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            model: "model",
            rewritePrompt: "rewrite_prompt",
          }),
        ),
      ),
      reranking: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          matchThreshold: Schema.optional(Schema.Number),
          model: Schema.optional(
            Schema.Union([
              Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            matchThreshold: "match_threshold",
            model: "model",
          }),
        ),
      ),
      retrieval: Schema.optional(
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Array(
              Schema.Struct({
                field: Schema.String,
                direction: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                    Schema.String,
                  ]),
                ),
              }),
            ),
          ),
          contextExpansion: Schema.optional(Schema.Number),
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          fusionMethod: Schema.optional(
            Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          ),
          keywordMatchMode: Schema.optional(
            Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
          ),
          matchThreshold: Schema.optional(Schema.Number),
          maxNumResults: Schema.optional(Schema.Number),
          retrievalType: Schema.optional(
            Schema.Union([
              Schema.Literals(["vector", "keyword", "hybrid"]),
              Schema.String,
            ]),
          ),
          returnOnFailure: Schema.optional(Schema.Boolean),
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
      ),
    }).pipe(
      Schema.encodeKeys({
        instanceIds: "instance_ids",
        cache: "cache",
        queryRewrite: "query_rewrite",
        reranking: "reranking",
        retrieval: "retrieval",
      }),
    ),
    messages: Schema.Array(
      Schema.Struct({
        content: Schema.Union([Schema.String, Schema.Null]),
        role: Schema.Union([
          Schema.Literals(["system", "developer", "user", "assistant", "tool"]),
          Schema.String,
        ]),
      }),
    ),
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
  ) as unknown as Schema.Schema<ChatCompletionsNamespaceRequest>;

export interface ChatCompletionsNamespaceResponse {
  choices: {
    message: {
      content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    choices: Schema.Array(
      Schema.Struct({
        message: Schema.Struct({
          content: Schema.Union([Schema.String, Schema.Null]),
          role: Schema.Union([
            Schema.Literals([
              "system",
              "developer",
              "user",
              "assistant",
              "tool",
            ]),
            Schema.String,
          ]),
        }),
        index: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
    ),
    chunks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        instanceId: Schema.String,
        score: Schema.Number,
        text: Schema.String,
        type: Schema.String,
        item: Schema.optional(
          Schema.Union([
            Schema.Struct({
              key: Schema.String,
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.Unknown),
                  Schema.Null,
                ]),
              ),
              timestamp: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        scoringDetails: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fusionMethod: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["rrf", "max"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              keywordRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              keywordScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              rerankingScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
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
            Schema.Null,
          ]),
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
    ),
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    errors: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            instanceId: Schema.String,
            message: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              instanceId: "instance_id",
              message: "message",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    model: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    object: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }) as unknown as Schema.Schema<ChatCompletionsNamespaceResponse>;

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
    content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    messages: Schema.Array(
      Schema.Struct({
        content: Schema.Union([Schema.String, Schema.Null]),
        role: Schema.Union([
          Schema.Literals(["system", "developer", "user", "assistant", "tool"]),
          Schema.String,
        ]),
      }),
    ),
    aiSearchOptions: Schema.optional(
      Schema.Struct({
        cache: Schema.optional(
          Schema.Struct({
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
            enabled: Schema.optional(Schema.Boolean),
          }).pipe(
            Schema.encodeKeys({
              cacheThreshold: "cache_threshold",
              enabled: "enabled",
            }),
          ),
        ),
        queryRewrite: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
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
            rewritePrompt: Schema.optional(Schema.String),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              model: "model",
              rewritePrompt: "rewrite_prompt",
            }),
          ),
        ),
        reranking: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            matchThreshold: Schema.optional(Schema.Number),
            model: Schema.optional(
              Schema.Union([
                Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
                Schema.String,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              matchThreshold: "match_threshold",
              model: "model",
            }),
          ),
        ),
        retrieval: Schema.optional(
          Schema.Struct({
            boostBy: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                      Schema.String,
                    ]),
                  ),
                }),
              ),
            ),
            contextExpansion: Schema.optional(Schema.Number),
            filters: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            fusionMethod: Schema.optional(
              Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
            ),
            keywordMatchMode: Schema.optional(
              Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
            ),
            matchThreshold: Schema.optional(Schema.Number),
            maxNumResults: Schema.optional(Schema.Number),
            retrievalType: Schema.optional(
              Schema.Union([
                Schema.Literals(["vector", "keyword", "hybrid"]),
                Schema.String,
              ]),
            ),
            returnOnFailure: Schema.optional(Schema.Boolean),
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
        ),
      }).pipe(
        Schema.encodeKeys({
          cache: "cache",
          queryRewrite: "query_rewrite",
          reranking: "reranking",
          retrieval: "retrieval",
        }),
      ),
    ),
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
  ) as unknown as Schema.Schema<ChatCompletionsNamespaceInstanceRequest>;

export interface ChatCompletionsNamespaceInstanceResponse {
  choices: {
    message: {
      content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    choices: Schema.Array(
      Schema.Struct({
        message: Schema.Struct({
          content: Schema.Union([Schema.String, Schema.Null]),
          role: Schema.Union([
            Schema.Literals([
              "system",
              "developer",
              "user",
              "assistant",
              "tool",
            ]),
            Schema.String,
          ]),
        }),
        index: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
    ),
    chunks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        score: Schema.Number,
        text: Schema.String,
        type: Schema.String,
        item: Schema.optional(
          Schema.Union([
            Schema.Struct({
              key: Schema.String,
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.Unknown),
                  Schema.Null,
                ]),
              ),
              timestamp: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        scoringDetails: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fusionMethod: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["rrf", "max"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              keywordRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              keywordScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              rerankingScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
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
            Schema.Null,
          ]),
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
    ),
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    model: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    object: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }) as unknown as Schema.Schema<ChatCompletionsNamespaceInstanceResponse>;

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

export const ListInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  T.Http({ method: "GET", path: "/accounts/{account_id}/ai-search/instances" }),
) as unknown as Schema.Schema<ListInstancesRequest>;

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
    cacheTtl?:
      | "600"
      | "1800"
      | "3600"
      | "7200"
      | "21600"
      | "43200"
      | "86400"
      | "172800"
      | "259200"
      | "518400"
      | (string & {})
      | null;
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
        crawlOptions?: {
          depth?: number | null;
          includeExternalLinks?: boolean | null;
          includeSubdomains?: boolean | null;
          maxAge?: number | null;
          source?: "all" | "sitemaps" | "links" | (string & {}) | null;
        } | null;
        parseOptions?: {
          contentSelector?: { path: string; selector: string }[] | null;
          includeHeaders?: Record<string, unknown> | null;
          includeImages?: boolean | null;
          specificSitemaps?: string[] | null;
          useBrowserRendering?: boolean | null;
        } | null;
        parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
        storeOptions?: {
          storageId: string;
          r2Jurisdiction?: string | null;
          storageType?: "r2" | null;
        } | null;
      } | null;
    } | null;
    status?: string | null;
    syncInterval?:
      | "900"
      | "1800"
      | "3600"
      | "7200"
      | "14400"
      | "21600"
      | "43200"
      | "86400"
      | (string & {})
      | null;
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

export const ListInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
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
      cacheTtl: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "600",
              "1800",
              "3600",
              "7200",
              "21600",
              "43200",
              "86400",
              "172800",
              "259200",
              "518400",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      customMetadata: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              dataType: Schema.Union([
                Schema.Literals(["text", "number", "boolean", "datetime"]),
                Schema.String,
              ]),
              fieldName: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                dataType: "data_type",
                fieldName: "field_name",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      embeddingModel: Schema.optional(
        Schema.Union([
          Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
      indexMethod: Schema.optional(
        Schema.Union([
          Schema.Struct({
            keyword: Schema.Boolean,
            vector: Schema.Boolean,
          }),
          Schema.Null,
        ]),
      ),
      indexingOptions: Schema.optional(
        Schema.Union([
          Schema.Struct({
            keywordTokenizer: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["porter", "trigram"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
          Schema.Null,
        ]),
      ),
      lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      maxNumResults: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      metadata: Schema.optional(
        Schema.Union([
          Schema.Struct({
            createdFromAisearchWizard: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            workerDomain: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              createdFromAisearchWizard: "created_from_aisearch_wizard",
              workerDomain: "worker_domain",
            }),
          ),
          Schema.Null,
        ]),
      ),
      modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      publicEndpointId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      publicEndpointParams: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorizedHosts: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            chatCompletionsEndpoint: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  disabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }),
                Schema.Null,
              ]),
            ),
            enabled: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            mcp: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  description: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  disabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }),
                Schema.Null,
              ]),
            ),
            rateLimit: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  periodMs: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  requests: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  technique: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["fixed", "sliding"]),
                        Schema.String,
                      ]),
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
                Schema.Null,
              ]),
            ),
            searchEndpoint: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  disabled: Schema.optional(
                    Schema.Union([Schema.Boolean, Schema.Null]),
                  ),
                }),
                Schema.Null,
              ]),
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
          Schema.Null,
        ]),
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
        Schema.Union([
          Schema.Struct({
            boostBy: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    field: Schema.String,
                    direction: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals([
                            "asc",
                            "desc",
                            "exists",
                            "not_exists",
                          ]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
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
          Schema.Null,
        ]),
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
      sourceParams: Schema.optional(
        Schema.Union([
          Schema.Struct({
            excludeItems: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            includeItems: Schema.optional(
              Schema.Union([Schema.Array(Schema.String), Schema.Null]),
            ),
            prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            r2Jurisdiction: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            webCrawler: Schema.optional(
              Schema.Union([
                Schema.Struct({
                  crawlOptions: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        depth: Schema.optional(
                          Schema.Union([Schema.Number, Schema.Null]),
                        ),
                        includeExternalLinks: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                        includeSubdomains: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                        maxAge: Schema.optional(
                          Schema.Union([Schema.Number, Schema.Null]),
                        ),
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
                      Schema.Null,
                    ]),
                  ),
                  parseOptions: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        contentSelector: Schema.optional(
                          Schema.Union([
                            Schema.Array(
                              Schema.Struct({
                                path: Schema.String,
                                selector: Schema.String,
                              }),
                            ),
                            Schema.Null,
                          ]),
                        ),
                        includeHeaders: Schema.optional(
                          Schema.Union([
                            Schema.Record(Schema.String, Schema.Unknown),
                            Schema.Null,
                          ]),
                        ),
                        includeImages: Schema.optional(
                          Schema.Union([Schema.Boolean, Schema.Null]),
                        ),
                        specificSitemaps: Schema.optional(
                          Schema.Union([
                            Schema.Array(Schema.String),
                            Schema.Null,
                          ]),
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
                      Schema.Null,
                    ]),
                  ),
                  parseType: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  storeOptions: Schema.optional(
                    Schema.Union([
                      Schema.Struct({
                        storageId: Schema.String,
                        r2Jurisdiction: Schema.optional(
                          Schema.Union([Schema.String, Schema.Null]),
                        ),
                        storageType: Schema.optional(
                          Schema.Union([Schema.Literal("r2"), Schema.Null]),
                        ),
                      }).pipe(
                        Schema.encodeKeys({
                          storageId: "storage_id",
                          r2Jurisdiction: "r2_jurisdiction",
                          storageType: "storage_type",
                        }),
                      ),
                      Schema.Null,
                    ]),
                  ),
                }).pipe(
                  Schema.encodeKeys({
                    crawlOptions: "crawl_options",
                    parseOptions: "parse_options",
                    parseType: "parse_type",
                    storeOptions: "store_options",
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              excludeItems: "exclude_items",
              includeItems: "include_items",
              prefix: "prefix",
              r2Jurisdiction: "r2_jurisdiction",
              webCrawler: "web_crawler",
            }),
          ),
          Schema.Null,
        ]),
      ),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      syncInterval: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "900",
              "1800",
              "3600",
              "7200",
              "14400",
              "21600",
              "43200",
              "86400",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
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
  ),
  resultInfo: Schema.optional(
    Schema.Union([
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
      Schema.Null,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListInstancesResponse>;

export type ListInstancesError = DefaultErrors | InvalidRoute;

export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInstancesRequest,
  output: ListInstancesResponse,
  errors: [InvalidRoute],
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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {});
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
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {});
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: "r2";
      };
    };
  } | null;
  /** Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {});
  /** Body param */
  tokenId?: string;
  /** Body param */
  type?: "r2" | "web-crawler" | null;
}

export const CreateInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  cacheTtl: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "600",
        "1800",
        "3600",
        "7200",
        "21600",
        "43200",
        "86400",
        "172800",
        "259200",
        "518400",
      ]),
      Schema.String,
    ]),
  ),
  chunk: Schema.optional(Schema.Boolean),
  chunkOverlap: Schema.optional(Schema.Number),
  chunkSize: Schema.optional(Schema.Number),
  customMetadata: Schema.optional(
    Schema.Array(
      Schema.Struct({
        dataType: Schema.Union([
          Schema.Literals(["text", "number", "boolean", "datetime"]),
          Schema.String,
        ]),
        fieldName: Schema.String,
      }).pipe(
        Schema.encodeKeys({ dataType: "data_type", fieldName: "field_name" }),
      ),
    ),
  ),
  embeddingModel: Schema.optional(
    Schema.Union([
      Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
  indexMethod: Schema.optional(
    Schema.Struct({
      keyword: Schema.Boolean,
      vector: Schema.Boolean,
    }),
  ),
  indexingOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        keywordTokenizer: Schema.optional(
          Schema.Union([Schema.Literals(["porter", "trigram"]), Schema.String]),
        ),
      }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
      Schema.Null,
    ]),
  ),
  maxNumResults: Schema.optional(Schema.Number),
  metadata: Schema.optional(
    Schema.Struct({
      createdFromAisearchWizard: Schema.optional(Schema.Boolean),
      workerDomain: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        createdFromAisearchWizard: "created_from_aisearch_wizard",
        workerDomain: "worker_domain",
      }),
    ),
  ),
  publicEndpointParams: Schema.optional(
    Schema.Struct({
      authorizedHosts: Schema.optional(Schema.Array(Schema.String)),
      chatCompletionsEndpoint: Schema.optional(
        Schema.Struct({
          disabled: Schema.optional(Schema.Boolean),
        }),
      ),
      enabled: Schema.optional(Schema.Boolean),
      mcp: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          disabled: Schema.optional(Schema.Boolean),
        }),
      ),
      rateLimit: Schema.optional(
        Schema.Struct({
          periodMs: Schema.optional(Schema.Number),
          requests: Schema.optional(Schema.Number),
          technique: Schema.optional(
            Schema.Union([
              Schema.Literals(["fixed", "sliding"]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            periodMs: "period_ms",
            requests: "requests",
            technique: "technique",
          }),
        ),
      ),
      searchEndpoint: Schema.optional(
        Schema.Struct({
          disabled: Schema.optional(Schema.Boolean),
        }),
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
  ),
  reranking: Schema.optional(Schema.Boolean),
  rerankingModel: Schema.optional(
    Schema.Union([
      Schema.Literal("@cf/baai/bge-reranker-base"),
      Schema.Literal(""),
      Schema.Null,
    ]),
  ),
  retrievalOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        boostBy: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.String,
              direction: Schema.optional(
                Schema.Union([
                  Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                  Schema.String,
                ]),
              ),
            }),
          ),
        ),
        keywordMatchMode: Schema.optional(
          Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
        ),
      }).pipe(
        Schema.encodeKeys({
          boostBy: "boost_by",
          keywordMatchMode: "keyword_match_mode",
        }),
      ),
      Schema.Null,
    ]),
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
  sourceParams: Schema.optional(
    Schema.Union([
      Schema.Struct({
        excludeItems: Schema.optional(Schema.Array(Schema.String)),
        includeItems: Schema.optional(Schema.Array(Schema.String)),
        prefix: Schema.optional(Schema.String),
        r2Jurisdiction: Schema.optional(Schema.String),
        webCrawler: Schema.optional(
          Schema.Struct({
            crawlOptions: Schema.optional(
              Schema.Struct({
                depth: Schema.optional(Schema.Number),
                includeExternalLinks: Schema.optional(Schema.Boolean),
                includeSubdomains: Schema.optional(Schema.Boolean),
                maxAge: Schema.optional(Schema.Number),
                source: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["all", "sitemaps", "links"]),
                    Schema.String,
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
            ),
            parseOptions: Schema.optional(
              Schema.Struct({
                contentSelector: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      path: Schema.String,
                      selector: Schema.String,
                    }),
                  ),
                ),
                includeHeaders: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
                includeImages: Schema.optional(Schema.Boolean),
                specificSitemaps: Schema.optional(Schema.Array(Schema.String)),
                useBrowserRendering: Schema.optional(Schema.Boolean),
              }).pipe(
                Schema.encodeKeys({
                  contentSelector: "content_selector",
                  includeHeaders: "include_headers",
                  includeImages: "include_images",
                  specificSitemaps: "specific_sitemaps",
                  useBrowserRendering: "use_browser_rendering",
                }),
              ),
            ),
            parseType: Schema.optional(
              Schema.Union([
                Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                Schema.String,
              ]),
            ),
            storeOptions: Schema.optional(
              Schema.Struct({
                storageId: Schema.String,
                r2Jurisdiction: Schema.optional(Schema.String),
                storageType: Schema.optional(Schema.Literal("r2")),
              }).pipe(
                Schema.encodeKeys({
                  storageId: "storage_id",
                  r2Jurisdiction: "r2_jurisdiction",
                  storageType: "storage_type",
                }),
              ),
            ),
          }).pipe(
            Schema.encodeKeys({
              crawlOptions: "crawl_options",
              parseOptions: "parse_options",
              parseType: "parse_type",
              storeOptions: "store_options",
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          excludeItems: "exclude_items",
          includeItems: "include_items",
          prefix: "prefix",
          r2Jurisdiction: "r2_jurisdiction",
          webCrawler: "web_crawler",
        }),
      ),
      Schema.Null,
    ]),
  ),
  syncInterval: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "900",
        "1800",
        "3600",
        "7200",
        "14400",
        "21600",
        "43200",
        "86400",
      ]),
      Schema.String,
    ]),
  ),
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
) as unknown as Schema.Schema<CreateInstanceRequest>;

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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const CreateInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Literal("r2"),
        Schema.Literal("web-crawler"),
        Schema.Null,
      ]),
    ),
  },
)
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateInstanceResponse>;

export type CreateInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const createInstance: API.OperationMethod<
  CreateInstanceRequest,
  CreateInstanceResponse,
  CreateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInstanceRequest,
  output: CreateInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {});
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
  sourceParams?: {
    excludeItems?: string[];
    includeItems?: string[];
    prefix?: string;
    r2Jurisdiction?: string;
    webCrawler?: {
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {});
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: "r2";
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
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {});
  /** Body param */
  systemPromptAiSearch?: string | null;
  /** Body param */
  systemPromptIndexSummarization?: string | null;
  /** Body param */
  systemPromptRewriteQuery?: string | null;
  /** Body param */
  tokenId?: string;
}

export const UpdateInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  cacheTtl: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "600",
        "1800",
        "3600",
        "7200",
        "21600",
        "43200",
        "86400",
        "172800",
        "259200",
        "518400",
      ]),
      Schema.String,
    ]),
  ),
  chunk: Schema.optional(Schema.Boolean),
  chunkOverlap: Schema.optional(Schema.Number),
  chunkSize: Schema.optional(Schema.Number),
  customMetadata: Schema.optional(
    Schema.Array(
      Schema.Struct({
        dataType: Schema.Union([
          Schema.Literals(["text", "number", "boolean", "datetime"]),
          Schema.String,
        ]),
        fieldName: Schema.String,
      }).pipe(
        Schema.encodeKeys({ dataType: "data_type", fieldName: "field_name" }),
      ),
    ),
  ),
  embeddingModel: Schema.optional(
    Schema.Union([
      Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
  indexMethod: Schema.optional(
    Schema.Struct({
      keyword: Schema.Boolean,
      vector: Schema.Boolean,
    }),
  ),
  indexingOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        keywordTokenizer: Schema.optional(
          Schema.Union([Schema.Literals(["porter", "trigram"]), Schema.String]),
        ),
      }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
      Schema.Null,
    ]),
  ),
  maxNumResults: Schema.optional(Schema.Number),
  metadata: Schema.optional(
    Schema.Struct({
      createdFromAisearchWizard: Schema.optional(Schema.Boolean),
      workerDomain: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        createdFromAisearchWizard: "created_from_aisearch_wizard",
        workerDomain: "worker_domain",
      }),
    ),
  ),
  paused: Schema.optional(Schema.Boolean),
  publicEndpointParams: Schema.optional(
    Schema.Struct({
      authorizedHosts: Schema.optional(Schema.Array(Schema.String)),
      chatCompletionsEndpoint: Schema.optional(
        Schema.Struct({
          disabled: Schema.optional(Schema.Boolean),
        }),
      ),
      enabled: Schema.optional(Schema.Boolean),
      mcp: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          disabled: Schema.optional(Schema.Boolean),
        }),
      ),
      rateLimit: Schema.optional(
        Schema.Struct({
          periodMs: Schema.optional(Schema.Number),
          requests: Schema.optional(Schema.Number),
          technique: Schema.optional(
            Schema.Union([
              Schema.Literals(["fixed", "sliding"]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            periodMs: "period_ms",
            requests: "requests",
            technique: "technique",
          }),
        ),
      ),
      searchEndpoint: Schema.optional(
        Schema.Struct({
          disabled: Schema.optional(Schema.Boolean),
        }),
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
  ),
  reranking: Schema.optional(Schema.Boolean),
  rerankingModel: Schema.optional(
    Schema.Union([
      Schema.Literal("@cf/baai/bge-reranker-base"),
      Schema.Literal(""),
      Schema.Null,
    ]),
  ),
  retrievalOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        boostBy: Schema.optional(
          Schema.Array(
            Schema.Struct({
              field: Schema.String,
              direction: Schema.optional(
                Schema.Union([
                  Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                  Schema.String,
                ]),
              ),
            }),
          ),
        ),
        keywordMatchMode: Schema.optional(
          Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
        ),
      }).pipe(
        Schema.encodeKeys({
          boostBy: "boost_by",
          keywordMatchMode: "keyword_match_mode",
        }),
      ),
      Schema.Null,
    ]),
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
  sourceParams: Schema.optional(
    Schema.Union([
      Schema.Struct({
        excludeItems: Schema.optional(Schema.Array(Schema.String)),
        includeItems: Schema.optional(Schema.Array(Schema.String)),
        prefix: Schema.optional(Schema.String),
        r2Jurisdiction: Schema.optional(Schema.String),
        webCrawler: Schema.optional(
          Schema.Struct({
            crawlOptions: Schema.optional(
              Schema.Struct({
                depth: Schema.optional(Schema.Number),
                includeExternalLinks: Schema.optional(Schema.Boolean),
                includeSubdomains: Schema.optional(Schema.Boolean),
                maxAge: Schema.optional(Schema.Number),
                source: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["all", "sitemaps", "links"]),
                    Schema.String,
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
            ),
            parseOptions: Schema.optional(
              Schema.Struct({
                contentSelector: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      path: Schema.String,
                      selector: Schema.String,
                    }),
                  ),
                ),
                includeHeaders: Schema.optional(
                  Schema.Record(Schema.String, Schema.Unknown),
                ),
                includeImages: Schema.optional(Schema.Boolean),
                specificSitemaps: Schema.optional(Schema.Array(Schema.String)),
                useBrowserRendering: Schema.optional(Schema.Boolean),
              }).pipe(
                Schema.encodeKeys({
                  contentSelector: "content_selector",
                  includeHeaders: "include_headers",
                  includeImages: "include_images",
                  specificSitemaps: "specific_sitemaps",
                  useBrowserRendering: "use_browser_rendering",
                }),
              ),
            ),
            parseType: Schema.optional(
              Schema.Union([
                Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                Schema.String,
              ]),
            ),
            storeOptions: Schema.optional(
              Schema.Struct({
                storageId: Schema.String,
                r2Jurisdiction: Schema.optional(Schema.String),
                storageType: Schema.optional(Schema.Literal("r2")),
              }).pipe(
                Schema.encodeKeys({
                  storageId: "storage_id",
                  r2Jurisdiction: "r2_jurisdiction",
                  storageType: "storage_type",
                }),
              ),
            ),
          }).pipe(
            Schema.encodeKeys({
              crawlOptions: "crawl_options",
              parseOptions: "parse_options",
              parseType: "parse_type",
              storeOptions: "store_options",
            }),
          ),
        ),
      }).pipe(
        Schema.encodeKeys({
          excludeItems: "exclude_items",
          includeItems: "include_items",
          prefix: "prefix",
          r2Jurisdiction: "r2_jurisdiction",
          webCrawler: "web_crawler",
        }),
      ),
      Schema.Null,
    ]),
  ),
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
  syncInterval: Schema.optional(
    Schema.Union([
      Schema.Literals([
        "900",
        "1800",
        "3600",
        "7200",
        "14400",
        "21600",
        "43200",
        "86400",
      ]),
      Schema.String,
    ]),
  ),
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
) as unknown as Schema.Schema<UpdateInstanceRequest>;

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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const UpdateInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Literal("r2"),
        Schema.Literal("web-crawler"),
        Schema.Null,
      ]),
    ),
  },
)
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateInstanceResponse>;

export type UpdateInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const updateInstance: API.OperationMethod<
  UpdateInstanceRequest,
  UpdateInstanceResponse,
  UpdateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateInstanceRequest,
  output: UpdateInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

export interface DeleteInstanceRequest {
  id: string;
  accountId: string;
}

export const DeleteInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/ai-search/instances/{id}",
  }),
) as unknown as Schema.Schema<DeleteInstanceRequest>;

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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const DeleteInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    tokenId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Literal("r2"),
        Schema.Literal("web-crawler"),
        Schema.Null,
      ]),
    ),
  },
)
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteInstanceResponse>;

export type DeleteInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const deleteInstance: API.OperationMethod<
  DeleteInstanceRequest,
  DeleteInstanceResponse,
  DeleteInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInstanceRequest,
  output: DeleteInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

export interface ReadInstanceRequest {
  id: string;
  accountId: string;
}

export const ReadInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/instances/{id}",
  }),
) as unknown as Schema.Schema<ReadInstanceRequest>;

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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const ReadInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  cacheTtl: Schema.optional(
    Schema.Union([
      Schema.Union([
        Schema.Literals([
          "600",
          "1800",
          "3600",
          "7200",
          "21600",
          "43200",
          "86400",
          "172800",
          "259200",
          "518400",
        ]),
        Schema.String,
      ]),
      Schema.Null,
    ]),
  ),
  chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  customMetadata: Schema.optional(
    Schema.Union([
      Schema.Array(
        Schema.Struct({
          dataType: Schema.Union([
            Schema.Literals(["text", "number", "boolean", "datetime"]),
            Schema.String,
          ]),
          fieldName: Schema.String,
        }).pipe(
          Schema.encodeKeys({ dataType: "data_type", fieldName: "field_name" }),
        ),
      ),
      Schema.Null,
    ]),
  ),
  embeddingModel: Schema.optional(
    Schema.Union([
      Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
  engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  fusionMethod: Schema.optional(
    Schema.Union([
      Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
      Schema.Null,
    ]),
  ),
  hybridSearchEnabled: Schema.optional(
    Schema.Union([Schema.Boolean, Schema.Null]),
  ),
  indexMethod: Schema.optional(
    Schema.Union([
      Schema.Struct({
        keyword: Schema.Boolean,
        vector: Schema.Boolean,
      }),
      Schema.Null,
    ]),
  ),
  indexingOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        keywordTokenizer: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["porter", "trigram"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
      }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
      Schema.Null,
    ]),
  ),
  lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  metadata: Schema.optional(
    Schema.Union([
      Schema.Struct({
        createdFromAisearchWizard: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        workerDomain: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          createdFromAisearchWizard: "created_from_aisearch_wizard",
          workerDomain: "worker_domain",
        }),
      ),
      Schema.Null,
    ]),
  ),
  modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  publicEndpointId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  publicEndpointParams: Schema.optional(
    Schema.Union([
      Schema.Struct({
        authorizedHosts: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        chatCompletionsEndpoint: Schema.optional(
          Schema.Union([
            Schema.Struct({
              disabled: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        mcp: Schema.optional(
          Schema.Union([
            Schema.Struct({
              description: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              disabled: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        rateLimit: Schema.optional(
          Schema.Union([
            Schema.Struct({
              periodMs: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              requests: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              technique: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["fixed", "sliding"]),
                    Schema.String,
                  ]),
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
            Schema.Null,
          ]),
        ),
        searchEndpoint: Schema.optional(
          Schema.Union([
            Schema.Struct({
              disabled: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
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
      Schema.Null,
    ]),
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
    Schema.Union([
      Schema.Struct({
        boostBy: Schema.optional(
          Schema.Union([
            Schema.Array(
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
            ),
            Schema.Null,
          ]),
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
      Schema.Null,
    ]),
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
  rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  sourceParams: Schema.optional(
    Schema.Union([
      Schema.Struct({
        excludeItems: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        includeItems: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        r2Jurisdiction: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        webCrawler: Schema.optional(
          Schema.Union([
            Schema.Struct({
              crawlOptions: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    depth: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    includeExternalLinks: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    includeSubdomains: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                    maxAge: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
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
                  Schema.Null,
                ]),
              ),
              parseOptions: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    contentSelector: Schema.optional(
                      Schema.Union([
                        Schema.Array(
                          Schema.Struct({
                            path: Schema.String,
                            selector: Schema.String,
                          }),
                        ),
                        Schema.Null,
                      ]),
                    ),
                    includeHeaders: Schema.optional(
                      Schema.Union([
                        Schema.Record(Schema.String, Schema.Unknown),
                        Schema.Null,
                      ]),
                    ),
                    includeImages: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
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
                  Schema.Null,
                ]),
              ),
              parseType: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              storeOptions: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    storageId: Schema.String,
                    r2Jurisdiction: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    storageType: Schema.optional(
                      Schema.Union([Schema.Literal("r2"), Schema.Null]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      storageId: "storage_id",
                      r2Jurisdiction: "r2_jurisdiction",
                      storageType: "storage_type",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                crawlOptions: "crawl_options",
                parseOptions: "parse_options",
                parseType: "parse_type",
                storeOptions: "store_options",
              }),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          excludeItems: "exclude_items",
          includeItems: "include_items",
          prefix: "prefix",
          r2Jurisdiction: "r2_jurisdiction",
          webCrawler: "web_crawler",
        }),
      ),
      Schema.Null,
    ]),
  ),
  status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  syncInterval: Schema.optional(
    Schema.Union([
      Schema.Union([
        Schema.Literals([
          "900",
          "1800",
          "3600",
          "7200",
          "14400",
          "21600",
          "43200",
          "86400",
        ]),
        Schema.String,
      ]),
      Schema.Null,
    ]),
  ),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ReadInstanceResponse>;

export type ReadInstanceError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const readInstance: API.OperationMethod<
  ReadInstanceRequest,
  ReadInstanceResponse,
  ReadInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadInstanceRequest,
  output: ReadInstanceResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
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
  /** Body param */
  messages?: {
    content: string | null;
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

export const SearchInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  aiSearchOptions: Schema.optional(
    Schema.Struct({
      cache: Schema.optional(
        Schema.Struct({
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
          enabled: Schema.optional(Schema.Boolean),
        }).pipe(
          Schema.encodeKeys({
            cacheThreshold: "cache_threshold",
            enabled: "enabled",
          }),
        ),
      ),
      queryRewrite: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
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
          rewritePrompt: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            model: "model",
            rewritePrompt: "rewrite_prompt",
          }),
        ),
      ),
      reranking: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          matchThreshold: Schema.optional(Schema.Number),
          model: Schema.optional(
            Schema.Union([
              Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            matchThreshold: "match_threshold",
            model: "model",
          }),
        ),
      ),
      retrieval: Schema.optional(
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Array(
              Schema.Struct({
                field: Schema.String,
                direction: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                    Schema.String,
                  ]),
                ),
              }),
            ),
          ),
          contextExpansion: Schema.optional(Schema.Number),
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          fusionMethod: Schema.optional(
            Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          ),
          keywordMatchMode: Schema.optional(
            Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
          ),
          matchThreshold: Schema.optional(Schema.Number),
          maxNumResults: Schema.optional(Schema.Number),
          retrievalType: Schema.optional(
            Schema.Union([
              Schema.Literals(["vector", "keyword", "hybrid"]),
              Schema.String,
            ]),
          ),
          returnOnFailure: Schema.optional(Schema.Boolean),
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
      ),
    }).pipe(
      Schema.encodeKeys({
        cache: "cache",
        queryRewrite: "query_rewrite",
        reranking: "reranking",
        retrieval: "retrieval",
      }),
    ),
  ),
  messages: Schema.optional(
    Schema.Array(
      Schema.Struct({
        content: Schema.Union([Schema.String, Schema.Null]),
        role: Schema.Union([
          Schema.Literals(["system", "developer", "user", "assistant", "tool"]),
          Schema.String,
        ]),
      }),
    ),
  ),
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
) as unknown as Schema.Schema<SearchInstanceRequest>;

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
  searchQuery: string;
}

export const SearchInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    chunks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        score: Schema.Number,
        text: Schema.String,
        type: Schema.String,
        item: Schema.optional(
          Schema.Union([
            Schema.Struct({
              key: Schema.String,
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.Unknown),
                  Schema.Null,
                ]),
              ),
              timestamp: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        scoringDetails: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fusionMethod: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["rrf", "max"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              keywordRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              keywordScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              rerankingScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
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
            Schema.Null,
          ]),
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
    ),
    searchQuery: Schema.String,
  },
)
  .pipe(Schema.encodeKeys({ chunks: "chunks", searchQuery: "search_query" }))
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<SearchInstanceResponse>;

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

export const StatsInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/instances/{id}/stats",
  }),
) as unknown as Schema.Schema<StatsInstanceRequest>;

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

export const StatsInstanceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  completed: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  degraded: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  engine: Schema.optional(
    Schema.Union([
      Schema.Struct({
        r2: Schema.optional(
          Schema.Union([
            Schema.Struct({
              metadataSizeBytes: Schema.Number,
              objectCount: Schema.Number,
              payloadSizeBytes: Schema.Number,
            }),
            Schema.Null,
          ]),
        ),
        vectorize: Schema.optional(
          Schema.Union([
            Schema.Struct({
              dimensions: Schema.Number,
              vectorsCount: Schema.Number,
            }),
            Schema.Null,
          ]),
        ),
      }),
      Schema.Null,
    ]),
  ),
  error: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  fileEmbedErrors: Schema.optional(
    Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
  ),
  indexSourceErrors: Schema.optional(
    Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<StatsInstanceResponse>;

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

export const GetInstanceJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  jobId: Schema.String.pipe(T.HttpPath("jobId")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/instances/{id}/jobs/{jobId}",
  }),
) as unknown as Schema.Schema<GetInstanceJobRequest>;

export interface GetInstanceJobResponse {
  id: string;
  source: "user" | "schedule" | (string & {});
  description?: string | null;
  endReason?: string | null;
  endedAt?: string | null;
  lastSeenAt?: string | null;
  startedAt?: string | null;
}

export const GetInstanceJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
)
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetInstanceJobResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/instances/{id}/jobs",
    }),
  ) as unknown as Schema.Schema<ListInstanceJobsRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        source: Schema.Union([
          Schema.Literals(["user", "schedule"]),
          Schema.String,
        ]),
        description: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
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
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          totalCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            page: "page",
            perPage: "per_page",
            totalCount: "total_count",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListInstanceJobsResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/ai-search/instances/{id}/jobs",
    }),
  ) as unknown as Schema.Schema<CreateInstanceJobRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateInstanceJobResponse>;

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

export const LogsInstanceJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.HttpPath("id")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/instances/{id}/jobs/{jobId}/logs",
  }),
) as unknown as Schema.Schema<LogsInstanceJobRequest>;

export type LogsInstanceJobResponse = {
  id: number;
  createdAt: number;
  message: string;
  messageType: number;
}[];

export const LogsInstanceJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<LogsInstanceJobResponse>;

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

export const ListNamespacesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/namespaces",
  }),
) as unknown as Schema.Schema<ListNamespacesRequest>;

export interface ListNamespacesResponse {
  result: { createdAt: string; name: string; description?: string | null }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListNamespacesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    result: Schema.Array(
      Schema.Struct({
        createdAt: Schema.String,
        name: Schema.String,
        description: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
      }).pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          name: "name",
          description: "description",
        }),
      ),
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          totalCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            page: "page",
            perPage: "per_page",
            totalCount: "total_count",
          }),
        ),
        Schema.Null,
      ]),
    ),
  },
).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListNamespacesResponse>;

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

export const CreateNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    name: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/ai-search/namespaces",
  }),
) as unknown as Schema.Schema<CreateNamespaceRequest>;

export interface CreateNamespaceResponse {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const CreateNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateNamespaceResponse>;

export type CreateNamespaceError = DefaultErrors;

export const createNamespace: API.OperationMethod<
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespaceRequest,
  output: CreateNamespaceResponse,
  errors: [],
}));

export interface UpdateNamespaceRequest {
  name: string;
  /** Path param */
  accountId: string;
  /** Body param: Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const UpdateNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/accounts/{account_id}/ai-search/namespaces/{name}",
  }),
) as unknown as Schema.Schema<UpdateNamespaceRequest>;

export interface UpdateNamespaceResponse {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const UpdateNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<UpdateNamespaceResponse>;

export type UpdateNamespaceError = DefaultErrors;

export const updateNamespace: API.OperationMethod<
  UpdateNamespaceRequest,
  UpdateNamespaceResponse,
  UpdateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateNamespaceRequest,
  output: UpdateNamespaceResponse,
  errors: [],
}));

export interface DeleteNamespaceRequest {
  name: string;
  accountId: string;
}

export const DeleteNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/ai-search/namespaces/{name}",
  }),
) as unknown as Schema.Schema<DeleteNamespaceRequest>;

export type DeleteNamespaceResponse = unknown;

export const DeleteNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteNamespaceResponse>;

export type DeleteNamespaceError = DefaultErrors;

export const deleteNamespace: API.OperationMethod<
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceRequest,
  output: DeleteNamespaceResponse,
  errors: [],
}));

export interface ReadNamespaceRequest {
  name: string;
  accountId: string;
}

export const ReadNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/namespaces/{name}",
  }),
) as unknown as Schema.Schema<ReadNamespaceRequest>;

export interface ReadNamespaceResponse {
  createdAt: string;
  name: string;
  /** Optional description for the namespace. Max 256 characters. */
  description?: string | null;
}

export const ReadNamespaceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ReadNamespaceResponse>;

export type ReadNamespaceError = DefaultErrors;

export const readNamespace: API.OperationMethod<
  ReadNamespaceRequest,
  ReadNamespaceResponse,
  ReadNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadNamespaceRequest,
  output: ReadNamespaceResponse,
  errors: [],
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
  /** Body param */
  messages?: {
    content: string | null;
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

export const SearchNamespaceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    aiSearchOptions: Schema.Struct({
      instanceIds: Schema.Array(Schema.String),
      cache: Schema.optional(
        Schema.Struct({
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
          enabled: Schema.optional(Schema.Boolean),
        }).pipe(
          Schema.encodeKeys({
            cacheThreshold: "cache_threshold",
            enabled: "enabled",
          }),
        ),
      ),
      queryRewrite: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
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
          rewritePrompt: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            model: "model",
            rewritePrompt: "rewrite_prompt",
          }),
        ),
      ),
      reranking: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          matchThreshold: Schema.optional(Schema.Number),
          model: Schema.optional(
            Schema.Union([
              Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            matchThreshold: "match_threshold",
            model: "model",
          }),
        ),
      ),
      retrieval: Schema.optional(
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Array(
              Schema.Struct({
                field: Schema.String,
                direction: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                    Schema.String,
                  ]),
                ),
              }),
            ),
          ),
          contextExpansion: Schema.optional(Schema.Number),
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          fusionMethod: Schema.optional(
            Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
          ),
          keywordMatchMode: Schema.optional(
            Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
          ),
          matchThreshold: Schema.optional(Schema.Number),
          maxNumResults: Schema.optional(Schema.Number),
          retrievalType: Schema.optional(
            Schema.Union([
              Schema.Literals(["vector", "keyword", "hybrid"]),
              Schema.String,
            ]),
          ),
          returnOnFailure: Schema.optional(Schema.Boolean),
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
      ),
    }).pipe(
      Schema.encodeKeys({
        instanceIds: "instance_ids",
        cache: "cache",
        queryRewrite: "query_rewrite",
        reranking: "reranking",
        retrieval: "retrieval",
      }),
    ),
    messages: Schema.optional(
      Schema.Array(
        Schema.Struct({
          content: Schema.Union([Schema.String, Schema.Null]),
          role: Schema.Union([
            Schema.Literals([
              "system",
              "developer",
              "user",
              "assistant",
              "tool",
            ]),
            Schema.String,
          ]),
        }),
      ),
    ),
    query: Schema.optional(Schema.String),
  },
).pipe(
  Schema.encodeKeys({
    aiSearchOptions: "ai_search_options",
    messages: "messages",
    query: "query",
  }),
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/ai-search/namespaces/{name}/search",
  }),
) as unknown as Schema.Schema<SearchNamespaceRequest>;

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
  searchQuery: string;
  errors?: { instanceId: string; message: string }[] | null;
}

export const SearchNamespaceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chunks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        instanceId: Schema.String,
        score: Schema.Number,
        text: Schema.String,
        type: Schema.String,
        item: Schema.optional(
          Schema.Union([
            Schema.Struct({
              key: Schema.String,
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.Unknown),
                  Schema.Null,
                ]),
              ),
              timestamp: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        scoringDetails: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fusionMethod: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["rrf", "max"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              keywordRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              keywordScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              rerankingScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
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
            Schema.Null,
          ]),
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
    ),
    searchQuery: Schema.String,
    errors: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            instanceId: Schema.String,
            message: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              instanceId: "instance_id",
              message: "message",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
  })
    .pipe(
      Schema.encodeKeys({
        chunks: "chunks",
        searchQuery: "search_query",
        errors: "errors",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<SearchNamespaceResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ListNamespaceInstancesRequest>;

export interface ListNamespaceInstancesResponse {
  result: {
    id: string;
    createdAt: string;
    modifiedAt: string;
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
      | (string & {})
      | null;
    cacheTtl?:
      | "600"
      | "1800"
      | "3600"
      | "7200"
      | "21600"
      | "43200"
      | "86400"
      | "172800"
      | "259200"
      | "518400"
      | (string & {})
      | null;
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
        crawlOptions?: {
          depth?: number | null;
          includeExternalLinks?: boolean | null;
          includeSubdomains?: boolean | null;
          maxAge?: number | null;
          source?: "all" | "sitemaps" | "links" | (string & {}) | null;
        } | null;
        parseOptions?: {
          contentSelector?: { path: string; selector: string }[] | null;
          includeHeaders?: Record<string, unknown> | null;
          includeImages?: boolean | null;
          specificSitemaps?: string[] | null;
          useBrowserRendering?: boolean | null;
        } | null;
        parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
        storeOptions?: {
          storageId: string;
          r2Jurisdiction?: string | null;
          storageType?: "r2" | null;
        } | null;
      } | null;
    } | null;
    status?: string | null;
    syncInterval?:
      | "900"
      | "1800"
      | "3600"
      | "7200"
      | "14400"
      | "21600"
      | "43200"
      | "86400"
      | (string & {})
      | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        createdAt: Schema.String,
        modifiedAt: Schema.String,
        aiGatewayId: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
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
        cacheTtl: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals([
                "600",
                "1800",
                "3600",
                "7200",
                "21600",
                "43200",
                "86400",
                "172800",
                "259200",
                "518400",
              ]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        chunkOverlap: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
        chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        customMetadata: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                dataType: Schema.Union([
                  Schema.Literals(["text", "number", "boolean", "datetime"]),
                  Schema.String,
                ]),
                fieldName: Schema.String,
              }).pipe(
                Schema.encodeKeys({
                  dataType: "data_type",
                  fieldName: "field_name",
                }),
              ),
            ),
            Schema.Null,
          ]),
        ),
        embeddingModel: Schema.optional(
          Schema.Union([
            Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
        indexMethod: Schema.optional(
          Schema.Union([
            Schema.Struct({
              keyword: Schema.Boolean,
              vector: Schema.Boolean,
            }),
            Schema.Null,
          ]),
        ),
        indexingOptions: Schema.optional(
          Schema.Union([
            Schema.Struct({
              keywordTokenizer: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["porter", "trigram"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" }),
            ),
            Schema.Null,
          ]),
        ),
        lastActivity: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        maxNumResults: Schema.optional(
          Schema.Union([Schema.Number, Schema.Null]),
        ),
        metadata: Schema.optional(
          Schema.Union([
            Schema.Struct({
              createdFromAisearchWizard: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              workerDomain: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                createdFromAisearchWizard: "created_from_aisearch_wizard",
                workerDomain: "worker_domain",
              }),
            ),
            Schema.Null,
          ]),
        ),
        modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        publicEndpointId: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        publicEndpointParams: Schema.optional(
          Schema.Union([
            Schema.Struct({
              authorizedHosts: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              chatCompletionsEndpoint: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    disabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              enabled: Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              mcp: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    description: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    disabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
              ),
              rateLimit: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    periodMs: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    requests: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    technique: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["fixed", "sliding"]),
                          Schema.String,
                        ]),
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
                  Schema.Null,
                ]),
              ),
              searchEndpoint: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    disabled: Schema.optional(
                      Schema.Union([Schema.Boolean, Schema.Null]),
                    ),
                  }),
                  Schema.Null,
                ]),
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
            Schema.Null,
          ]),
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
          Schema.Union([
            Schema.Struct({
              boostBy: Schema.optional(
                Schema.Union([
                  Schema.Array(
                    Schema.Struct({
                      field: Schema.String,
                      direction: Schema.optional(
                        Schema.Union([
                          Schema.Union([
                            Schema.Literals([
                              "asc",
                              "desc",
                              "exists",
                              "not_exists",
                            ]),
                            Schema.String,
                          ]),
                          Schema.Null,
                        ]),
                      ),
                    }),
                  ),
                  Schema.Null,
                ]),
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
            Schema.Null,
          ]),
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
        sourceParams: Schema.optional(
          Schema.Union([
            Schema.Struct({
              excludeItems: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              includeItems: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              prefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              r2Jurisdiction: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              webCrawler: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    crawlOptions: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          depth: Schema.optional(
                            Schema.Union([Schema.Number, Schema.Null]),
                          ),
                          includeExternalLinks: Schema.optional(
                            Schema.Union([Schema.Boolean, Schema.Null]),
                          ),
                          includeSubdomains: Schema.optional(
                            Schema.Union([Schema.Boolean, Schema.Null]),
                          ),
                          maxAge: Schema.optional(
                            Schema.Union([Schema.Number, Schema.Null]),
                          ),
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
                        Schema.Null,
                      ]),
                    ),
                    parseOptions: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          contentSelector: Schema.optional(
                            Schema.Union([
                              Schema.Array(
                                Schema.Struct({
                                  path: Schema.String,
                                  selector: Schema.String,
                                }),
                              ),
                              Schema.Null,
                            ]),
                          ),
                          includeHeaders: Schema.optional(
                            Schema.Union([
                              Schema.Record(Schema.String, Schema.Unknown),
                              Schema.Null,
                            ]),
                          ),
                          includeImages: Schema.optional(
                            Schema.Union([Schema.Boolean, Schema.Null]),
                          ),
                          specificSitemaps: Schema.optional(
                            Schema.Union([
                              Schema.Array(Schema.String),
                              Schema.Null,
                            ]),
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
                        Schema.Null,
                      ]),
                    ),
                    parseType: Schema.optional(
                      Schema.Union([
                        Schema.Union([
                          Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                          Schema.String,
                        ]),
                        Schema.Null,
                      ]),
                    ),
                    storeOptions: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          storageId: Schema.String,
                          r2Jurisdiction: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                          storageType: Schema.optional(
                            Schema.Union([Schema.Literal("r2"), Schema.Null]),
                          ),
                        }).pipe(
                          Schema.encodeKeys({
                            storageId: "storage_id",
                            r2Jurisdiction: "r2_jurisdiction",
                            storageType: "storage_type",
                          }),
                        ),
                        Schema.Null,
                      ]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      crawlOptions: "crawl_options",
                      parseOptions: "parse_options",
                      parseType: "parse_type",
                      storeOptions: "store_options",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                excludeItems: "exclude_items",
                includeItems: "include_items",
                prefix: "prefix",
                r2Jurisdiction: "r2_jurisdiction",
                webCrawler: "web_crawler",
              }),
            ),
            Schema.Null,
          ]),
        ),
        status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        syncInterval: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals([
                "900",
                "1800",
                "3600",
                "7200",
                "14400",
                "21600",
                "43200",
                "86400",
              ]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
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
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          totalCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            page: "page",
            perPage: "per_page",
            totalCount: "total_count",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListNamespaceInstancesResponse>;

export type ListNamespaceInstancesError = DefaultErrors;

export const listNamespaceInstances: API.PaginatedOperationMethod<
  ListNamespaceInstancesRequest,
  ListNamespaceInstancesResponse,
  ListNamespaceInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListNamespaceInstancesRequest,
  output: ListNamespaceInstancesResponse,
  errors: [],
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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {});
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
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {});
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: "r2";
      };
    };
  } | null;
  /** Body param: Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {});
  /** Body param */
  tokenId?: string;
  /** Body param */
  type?: "r2" | "web-crawler" | null;
}

export const CreateNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "600",
          "1800",
          "3600",
          "7200",
          "21600",
          "43200",
          "86400",
          "172800",
          "259200",
          "518400",
        ]),
        Schema.String,
      ]),
    ),
    chunk: Schema.optional(Schema.Boolean),
    chunkOverlap: Schema.optional(Schema.Number),
    chunkSize: Schema.optional(Schema.Number),
    customMetadata: Schema.optional(
      Schema.Array(
        Schema.Struct({
          dataType: Schema.Union([
            Schema.Literals(["text", "number", "boolean", "datetime"]),
            Schema.String,
          ]),
          fieldName: Schema.String,
        }).pipe(
          Schema.encodeKeys({ dataType: "data_type", fieldName: "field_name" }),
        ),
      ),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    indexMethod: Schema.optional(
      Schema.Struct({
        keyword: Schema.Boolean,
        vector: Schema.Boolean,
      }),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Literals(["porter", "trigram"]),
              Schema.String,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    maxNumResults: Schema.optional(Schema.Number),
    metadata: Schema.optional(
      Schema.Struct({
        createdFromAisearchWizard: Schema.optional(Schema.Boolean),
        workerDomain: Schema.optional(Schema.String),
      }).pipe(
        Schema.encodeKeys({
          createdFromAisearchWizard: "created_from_aisearch_wizard",
          workerDomain: "worker_domain",
        }),
      ),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Struct({
        authorizedHosts: Schema.optional(Schema.Array(Schema.String)),
        chatCompletionsEndpoint: Schema.optional(
          Schema.Struct({
            disabled: Schema.optional(Schema.Boolean),
          }),
        ),
        enabled: Schema.optional(Schema.Boolean),
        mcp: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            disabled: Schema.optional(Schema.Boolean),
          }),
        ),
        rateLimit: Schema.optional(
          Schema.Struct({
            periodMs: Schema.optional(Schema.Number),
            requests: Schema.optional(Schema.Number),
            technique: Schema.optional(
              Schema.Union([
                Schema.Literals(["fixed", "sliding"]),
                Schema.String,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              periodMs: "period_ms",
              requests: "requests",
              technique: "technique",
            }),
          ),
        ),
        searchEndpoint: Schema.optional(
          Schema.Struct({
            disabled: Schema.optional(Schema.Boolean),
          }),
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
    ),
    reranking: Schema.optional(Schema.Boolean),
    rerankingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/baai/bge-reranker-base"),
        Schema.Literal(""),
        Schema.Null,
      ]),
    ),
    retrievalOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Array(
              Schema.Struct({
                field: Schema.String,
                direction: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                    Schema.String,
                  ]),
                ),
              }),
            ),
          ),
          keywordMatchMode: Schema.optional(
            Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
          ),
        }).pipe(
          Schema.encodeKeys({
            boostBy: "boost_by",
            keywordMatchMode: "keyword_match_mode",
          }),
        ),
        Schema.Null,
      ]),
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
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(Schema.Array(Schema.String)),
          includeItems: Schema.optional(Schema.Array(Schema.String)),
          prefix: Schema.optional(Schema.String),
          r2Jurisdiction: Schema.optional(Schema.String),
          webCrawler: Schema.optional(
            Schema.Struct({
              crawlOptions: Schema.optional(
                Schema.Struct({
                  depth: Schema.optional(Schema.Number),
                  includeExternalLinks: Schema.optional(Schema.Boolean),
                  includeSubdomains: Schema.optional(Schema.Boolean),
                  maxAge: Schema.optional(Schema.Number),
                  source: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["all", "sitemaps", "links"]),
                      Schema.String,
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
              ),
              parseOptions: Schema.optional(
                Schema.Struct({
                  contentSelector: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        path: Schema.String,
                        selector: Schema.String,
                      }),
                    ),
                  ),
                  includeHeaders: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  includeImages: Schema.optional(Schema.Boolean),
                  specificSitemaps: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  useBrowserRendering: Schema.optional(Schema.Boolean),
                }).pipe(
                  Schema.encodeKeys({
                    contentSelector: "content_selector",
                    includeHeaders: "include_headers",
                    includeImages: "include_images",
                    specificSitemaps: "specific_sitemaps",
                    useBrowserRendering: "use_browser_rendering",
                  }),
                ),
              ),
              parseType: Schema.optional(
                Schema.Union([
                  Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                  Schema.String,
                ]),
              ),
              storeOptions: Schema.optional(
                Schema.Struct({
                  storageId: Schema.String,
                  r2Jurisdiction: Schema.optional(Schema.String),
                  storageType: Schema.optional(Schema.Literal("r2")),
                }).pipe(
                  Schema.encodeKeys({
                    storageId: "storage_id",
                    r2Jurisdiction: "r2_jurisdiction",
                    storageType: "storage_type",
                  }),
                ),
              ),
            }).pipe(
              Schema.encodeKeys({
                crawlOptions: "crawl_options",
                parseOptions: "parse_options",
                parseType: "parse_type",
                storeOptions: "store_options",
              }),
            ),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "900",
          "1800",
          "3600",
          "7200",
          "14400",
          "21600",
          "43200",
          "86400",
        ]),
        Schema.String,
      ]),
    ),
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
  ) as unknown as Schema.Schema<CreateNamespaceInstanceRequest>;

export interface CreateNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt: string;
  modifiedAt: string;
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
    | (string & {})
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const CreateNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    modifiedAt: Schema.String,
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateNamespaceInstanceResponse>;

export type CreateNamespaceInstanceError = DefaultErrors;

export const createNamespaceInstance: API.OperationMethod<
  CreateNamespaceInstanceRequest,
  CreateNamespaceInstanceResponse,
  CreateNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateNamespaceInstanceRequest,
  output: CreateNamespaceInstanceResponse,
  errors: [],
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
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {});
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
  sourceParams?: {
    excludeItems?: string[];
    includeItems?: string[];
    prefix?: string;
    r2Jurisdiction?: string;
    webCrawler?: {
      crawlOptions?: {
        depth?: number;
        includeExternalLinks?: boolean;
        includeSubdomains?: boolean;
        maxAge?: number;
        source?: "all" | "sitemaps" | "links" | (string & {});
      };
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[];
        includeHeaders?: Record<string, unknown>;
        includeImages?: boolean;
        specificSitemaps?: string[];
        useBrowserRendering?: boolean;
      };
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {});
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string;
        storageType?: "r2";
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
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {});
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "600",
          "1800",
          "3600",
          "7200",
          "21600",
          "43200",
          "86400",
          "172800",
          "259200",
          "518400",
        ]),
        Schema.String,
      ]),
    ),
    chunk: Schema.optional(Schema.Boolean),
    chunkOverlap: Schema.optional(Schema.Number),
    chunkSize: Schema.optional(Schema.Number),
    customMetadata: Schema.optional(
      Schema.Array(
        Schema.Struct({
          dataType: Schema.Union([
            Schema.Literals(["text", "number", "boolean", "datetime"]),
            Schema.String,
          ]),
          fieldName: Schema.String,
        }).pipe(
          Schema.encodeKeys({ dataType: "data_type", fieldName: "field_name" }),
        ),
      ),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    indexMethod: Schema.optional(
      Schema.Struct({
        keyword: Schema.Boolean,
        vector: Schema.Boolean,
      }),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Literals(["porter", "trigram"]),
              Schema.String,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    maxNumResults: Schema.optional(Schema.Number),
    metadata: Schema.optional(
      Schema.Struct({
        createdFromAisearchWizard: Schema.optional(Schema.Boolean),
        workerDomain: Schema.optional(Schema.String),
      }).pipe(
        Schema.encodeKeys({
          createdFromAisearchWizard: "created_from_aisearch_wizard",
          workerDomain: "worker_domain",
        }),
      ),
    ),
    paused: Schema.optional(Schema.Boolean),
    publicEndpointParams: Schema.optional(
      Schema.Struct({
        authorizedHosts: Schema.optional(Schema.Array(Schema.String)),
        chatCompletionsEndpoint: Schema.optional(
          Schema.Struct({
            disabled: Schema.optional(Schema.Boolean),
          }),
        ),
        enabled: Schema.optional(Schema.Boolean),
        mcp: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            disabled: Schema.optional(Schema.Boolean),
          }),
        ),
        rateLimit: Schema.optional(
          Schema.Struct({
            periodMs: Schema.optional(Schema.Number),
            requests: Schema.optional(Schema.Number),
            technique: Schema.optional(
              Schema.Union([
                Schema.Literals(["fixed", "sliding"]),
                Schema.String,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              periodMs: "period_ms",
              requests: "requests",
              technique: "technique",
            }),
          ),
        ),
        searchEndpoint: Schema.optional(
          Schema.Struct({
            disabled: Schema.optional(Schema.Boolean),
          }),
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
    ),
    reranking: Schema.optional(Schema.Boolean),
    rerankingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/baai/bge-reranker-base"),
        Schema.Literal(""),
        Schema.Null,
      ]),
    ),
    retrievalOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Array(
              Schema.Struct({
                field: Schema.String,
                direction: Schema.optional(
                  Schema.Union([
                    Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                    Schema.String,
                  ]),
                ),
              }),
            ),
          ),
          keywordMatchMode: Schema.optional(
            Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
          ),
        }).pipe(
          Schema.encodeKeys({
            boostBy: "boost_by",
            keywordMatchMode: "keyword_match_mode",
          }),
        ),
        Schema.Null,
      ]),
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
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(Schema.Array(Schema.String)),
          includeItems: Schema.optional(Schema.Array(Schema.String)),
          prefix: Schema.optional(Schema.String),
          r2Jurisdiction: Schema.optional(Schema.String),
          webCrawler: Schema.optional(
            Schema.Struct({
              crawlOptions: Schema.optional(
                Schema.Struct({
                  depth: Schema.optional(Schema.Number),
                  includeExternalLinks: Schema.optional(Schema.Boolean),
                  includeSubdomains: Schema.optional(Schema.Boolean),
                  maxAge: Schema.optional(Schema.Number),
                  source: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["all", "sitemaps", "links"]),
                      Schema.String,
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
              ),
              parseOptions: Schema.optional(
                Schema.Struct({
                  contentSelector: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        path: Schema.String,
                        selector: Schema.String,
                      }),
                    ),
                  ),
                  includeHeaders: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  includeImages: Schema.optional(Schema.Boolean),
                  specificSitemaps: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  useBrowserRendering: Schema.optional(Schema.Boolean),
                }).pipe(
                  Schema.encodeKeys({
                    contentSelector: "content_selector",
                    includeHeaders: "include_headers",
                    includeImages: "include_images",
                    specificSitemaps: "specific_sitemaps",
                    useBrowserRendering: "use_browser_rendering",
                  }),
                ),
              ),
              parseType: Schema.optional(
                Schema.Union([
                  Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                  Schema.String,
                ]),
              ),
              storeOptions: Schema.optional(
                Schema.Struct({
                  storageId: Schema.String,
                  r2Jurisdiction: Schema.optional(Schema.String),
                  storageType: Schema.optional(Schema.Literal("r2")),
                }).pipe(
                  Schema.encodeKeys({
                    storageId: "storage_id",
                    r2Jurisdiction: "r2_jurisdiction",
                    storageType: "storage_type",
                  }),
                ),
              ),
            }).pipe(
              Schema.encodeKeys({
                crawlOptions: "crawl_options",
                parseOptions: "parse_options",
                parseType: "parse_type",
                storeOptions: "store_options",
              }),
            ),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
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
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "900",
          "1800",
          "3600",
          "7200",
          "14400",
          "21600",
          "43200",
          "86400",
        ]),
        Schema.String,
      ]),
    ),
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
  ) as unknown as Schema.Schema<UpdateNamespaceInstanceRequest>;

export interface UpdateNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt: string;
  modifiedAt: string;
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
    | (string & {})
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const UpdateNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    modifiedAt: Schema.String,
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<UpdateNamespaceInstanceResponse>;

export type UpdateNamespaceInstanceError = DefaultErrors;

export const updateNamespaceInstance: API.OperationMethod<
  UpdateNamespaceInstanceRequest,
  UpdateNamespaceInstanceResponse,
  UpdateNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateNamespaceInstanceRequest,
  output: UpdateNamespaceInstanceResponse,
  errors: [],
}));

export interface DeleteNamespaceInstanceRequest {
  name: string;
  id: string;
  accountId: string;
}

export const DeleteNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
    }),
  ) as unknown as Schema.Schema<DeleteNamespaceInstanceRequest>;

export interface DeleteNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt: string;
  modifiedAt: string;
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
    | (string & {})
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const DeleteNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    modifiedAt: Schema.String,
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<DeleteNamespaceInstanceResponse>;

export type DeleteNamespaceInstanceError = DefaultErrors;

export const deleteNamespaceInstance: API.OperationMethod<
  DeleteNamespaceInstanceRequest,
  DeleteNamespaceInstanceResponse,
  DeleteNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteNamespaceInstanceRequest,
  output: DeleteNamespaceInstanceResponse,
  errors: [],
}));

export interface ReadNamespaceInstanceRequest {
  name: string;
  id: string;
  accountId: string;
}

export const ReadNamespaceInstanceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}",
    }),
  ) as unknown as Schema.Schema<ReadNamespaceInstanceRequest>;

export interface ReadNamespaceInstanceResponse {
  /** AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores. */
  id: string;
  createdAt: string;
  modifiedAt: string;
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
    | (string & {})
    | null;
  /** Cache entry TTL in seconds. Allowed values: 600 (10min), 1800 (30min), 3600 (1h), 7200 (2h), 21600 (6h), 43200 (12h), 86400 (24h), 172800 (48h), 259200 (72h), 518400 (6d). */
  cacheTtl?:
    | "600"
    | "1800"
    | "3600"
    | "7200"
    | "21600"
    | "43200"
    | "86400"
    | "172800"
    | "259200"
    | "518400"
    | (string & {})
    | null;
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
      crawlOptions?: {
        depth?: number | null;
        includeExternalLinks?: boolean | null;
        includeSubdomains?: boolean | null;
        maxAge?: number | null;
        source?: "all" | "sitemaps" | "links" | (string & {}) | null;
      } | null;
      parseOptions?: {
        contentSelector?: { path: string; selector: string }[] | null;
        includeHeaders?: Record<string, unknown> | null;
        includeImages?: boolean | null;
        specificSitemaps?: string[] | null;
        useBrowserRendering?: boolean | null;
      } | null;
      parseType?: "sitemap" | "feed-rss" | "crawl" | (string & {}) | null;
      storeOptions?: {
        storageId: string;
        r2Jurisdiction?: string | null;
        storageType?: "r2" | null;
      } | null;
    } | null;
  } | null;
  status?: string | null;
  /** Interval between automatic syncs, in seconds. Allowed values: 900 (15min), 1800 (30min), 3600 (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h). */
  syncInterval?:
    | "900"
    | "1800"
    | "3600"
    | "7200"
    | "14400"
    | "21600"
    | "43200"
    | "86400"
    | (string & {})
    | null;
  tokenId?: string | null;
  type?: "r2" | "web-crawler" | null;
}

export const ReadNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    createdAt: Schema.String,
    modifiedAt: Schema.String,
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
    cacheTtl: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "600",
            "1800",
            "3600",
            "7200",
            "21600",
            "43200",
            "86400",
            "172800",
            "259200",
            "518400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    chunkOverlap: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    chunkSize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    createdBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customMetadata: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            dataType: Schema.Union([
              Schema.Literals(["text", "number", "boolean", "datetime"]),
              Schema.String,
            ]),
            fieldName: Schema.String,
          }).pipe(
            Schema.encodeKeys({
              dataType: "data_type",
              fieldName: "field_name",
            }),
          ),
        ),
        Schema.Null,
      ]),
    ),
    embeddingModel: Schema.optional(
      Schema.Union([
        Schema.Literal("@cf/qwen/qwen3-embedding-0.6b"),
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
    engineVersion: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fusionMethod: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    hybridSearchEnabled: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    indexMethod: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keyword: Schema.Boolean,
          vector: Schema.Boolean,
        }),
        Schema.Null,
      ]),
    ),
    indexingOptions: Schema.optional(
      Schema.Union([
        Schema.Struct({
          keywordTokenizer: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["porter", "trigram"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(Schema.encodeKeys({ keywordTokenizer: "keyword_tokenizer" })),
        Schema.Null,
      ]),
    ),
    lastActivity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    maxNumResults: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Struct({
          createdFromAisearchWizard: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          workerDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            createdFromAisearchWizard: "created_from_aisearch_wizard",
            workerDomain: "worker_domain",
          }),
        ),
        Schema.Null,
      ]),
    ),
    modifiedBy: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    namespace: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    paused: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    publicEndpointId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    publicEndpointParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          authorizedHosts: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          chatCompletionsEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          mcp: Schema.optional(
            Schema.Union([
              Schema.Struct({
                description: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          rateLimit: Schema.optional(
            Schema.Union([
              Schema.Struct({
                periodMs: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                requests: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                technique: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["fixed", "sliding"]),
                      Schema.String,
                    ]),
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
              Schema.Null,
            ]),
          ),
          searchEndpoint: Schema.optional(
            Schema.Union([
              Schema.Struct({
                disabled: Schema.optional(
                  Schema.Union([Schema.Boolean, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
      Schema.Union([
        Schema.Struct({
          boostBy: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "asc",
                          "desc",
                          "exists",
                          "not_exists",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
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
        Schema.Null,
      ]),
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
    rewriteQuery: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    scoreThreshold: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    source: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sourceParams: Schema.optional(
      Schema.Union([
        Schema.Struct({
          excludeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          includeItems: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          prefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          r2Jurisdiction: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          webCrawler: Schema.optional(
            Schema.Union([
              Schema.Struct({
                crawlOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      depth: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
                      includeExternalLinks: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      includeSubdomains: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      maxAge: Schema.optional(
                        Schema.Union([Schema.Number, Schema.Null]),
                      ),
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
                    Schema.Null,
                  ]),
                ),
                parseOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      contentSelector: Schema.optional(
                        Schema.Union([
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.String,
                              selector: Schema.String,
                            }),
                          ),
                          Schema.Null,
                        ]),
                      ),
                      includeHeaders: Schema.optional(
                        Schema.Union([
                          Schema.Record(Schema.String, Schema.Unknown),
                          Schema.Null,
                        ]),
                      ),
                      includeImages: Schema.optional(
                        Schema.Union([Schema.Boolean, Schema.Null]),
                      ),
                      specificSitemaps: Schema.optional(
                        Schema.Union([
                          Schema.Array(Schema.String),
                          Schema.Null,
                        ]),
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
                    Schema.Null,
                  ]),
                ),
                parseType: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals(["sitemap", "feed-rss", "crawl"]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                storeOptions: Schema.optional(
                  Schema.Union([
                    Schema.Struct({
                      storageId: Schema.String,
                      r2Jurisdiction: Schema.optional(
                        Schema.Union([Schema.String, Schema.Null]),
                      ),
                      storageType: Schema.optional(
                        Schema.Union([Schema.Literal("r2"), Schema.Null]),
                      ),
                    }).pipe(
                      Schema.encodeKeys({
                        storageId: "storage_id",
                        r2Jurisdiction: "r2_jurisdiction",
                        storageType: "storage_type",
                      }),
                    ),
                    Schema.Null,
                  ]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  crawlOptions: "crawl_options",
                  parseOptions: "parse_options",
                  parseType: "parse_type",
                  storeOptions: "store_options",
                }),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            excludeItems: "exclude_items",
            includeItems: "include_items",
            prefix: "prefix",
            r2Jurisdiction: "r2_jurisdiction",
            webCrawler: "web_crawler",
          }),
        ),
        Schema.Null,
      ]),
    ),
    status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    syncInterval: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "900",
            "1800",
            "3600",
            "7200",
            "14400",
            "21600",
            "43200",
            "86400",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<ReadNamespaceInstanceResponse>;

export type ReadNamespaceInstanceError = DefaultErrors;

export const readNamespaceInstance: API.OperationMethod<
  ReadNamespaceInstanceRequest,
  ReadNamespaceInstanceResponse,
  ReadNamespaceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadNamespaceInstanceRequest,
  output: ReadNamespaceInstanceResponse,
  errors: [],
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
  /** Body param */
  messages?: {
    content: string | null;
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    aiSearchOptions: Schema.optional(
      Schema.Struct({
        cache: Schema.optional(
          Schema.Struct({
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
            enabled: Schema.optional(Schema.Boolean),
          }).pipe(
            Schema.encodeKeys({
              cacheThreshold: "cache_threshold",
              enabled: "enabled",
            }),
          ),
        ),
        queryRewrite: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
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
            rewritePrompt: Schema.optional(Schema.String),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              model: "model",
              rewritePrompt: "rewrite_prompt",
            }),
          ),
        ),
        reranking: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            matchThreshold: Schema.optional(Schema.Number),
            model: Schema.optional(
              Schema.Union([
                Schema.Literals(["@cf/baai/bge-reranker-base", ""]),
                Schema.String,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              enabled: "enabled",
              matchThreshold: "match_threshold",
              model: "model",
            }),
          ),
        ),
        retrieval: Schema.optional(
          Schema.Struct({
            boostBy: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  field: Schema.String,
                  direction: Schema.optional(
                    Schema.Union([
                      Schema.Literals(["asc", "desc", "exists", "not_exists"]),
                      Schema.String,
                    ]),
                  ),
                }),
              ),
            ),
            contextExpansion: Schema.optional(Schema.Number),
            filters: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            fusionMethod: Schema.optional(
              Schema.Union([Schema.Literals(["max", "rrf"]), Schema.String]),
            ),
            keywordMatchMode: Schema.optional(
              Schema.Union([Schema.Literals(["and", "or"]), Schema.String]),
            ),
            matchThreshold: Schema.optional(Schema.Number),
            maxNumResults: Schema.optional(Schema.Number),
            retrievalType: Schema.optional(
              Schema.Union([
                Schema.Literals(["vector", "keyword", "hybrid"]),
                Schema.String,
              ]),
            ),
            returnOnFailure: Schema.optional(Schema.Boolean),
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
        ),
      }).pipe(
        Schema.encodeKeys({
          cache: "cache",
          queryRewrite: "query_rewrite",
          reranking: "reranking",
          retrieval: "retrieval",
        }),
      ),
    ),
    messages: Schema.optional(
      Schema.Array(
        Schema.Struct({
          content: Schema.Union([Schema.String, Schema.Null]),
          role: Schema.Union([
            Schema.Literals([
              "system",
              "developer",
              "user",
              "assistant",
              "tool",
            ]),
            Schema.String,
          ]),
        }),
      ),
    ),
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
  ) as unknown as Schema.Schema<SearchNamespaceInstanceRequest>;

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
  searchQuery: string;
}

export const SearchNamespaceInstanceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chunks: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        score: Schema.Number,
        text: Schema.String,
        type: Schema.String,
        item: Schema.optional(
          Schema.Union([
            Schema.Struct({
              key: Schema.String,
              metadata: Schema.optional(
                Schema.Union([
                  Schema.Record(Schema.String, Schema.Unknown),
                  Schema.Null,
                ]),
              ),
              timestamp: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
            }),
            Schema.Null,
          ]),
        ),
        scoringDetails: Schema.optional(
          Schema.Union([
            Schema.Struct({
              fusionMethod: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["rrf", "max"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              keywordRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              keywordScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              rerankingScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorRank: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              vectorScore: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
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
            Schema.Null,
          ]),
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
    ),
    searchQuery: Schema.String,
  })
    .pipe(Schema.encodeKeys({ chunks: "chunks", searchQuery: "search_query" }))
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<SearchNamespaceInstanceResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats",
    }),
  ) as unknown as Schema.Schema<StatsNamespaceInstanceRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completed: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    degraded: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    engine: Schema.optional(
      Schema.Union([
        Schema.Struct({
          r2: Schema.optional(
            Schema.Union([
              Schema.Struct({
                metadataSizeBytes: Schema.Number,
                objectCount: Schema.Number,
                payloadSizeBytes: Schema.Number,
              }),
              Schema.Null,
            ]),
          ),
          vectorize: Schema.optional(
            Schema.Union([
              Schema.Struct({
                dimensions: Schema.Number,
                vectorsCount: Schema.Number,
              }),
              Schema.Null,
            ]),
          ),
        }),
        Schema.Null,
      ]),
    ),
    error: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fileEmbedErrors: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    indexSourceErrors: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<StatsNamespaceInstanceResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    itemId: Schema.String.pipe(T.HttpPath("itemId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}",
    }),
  ) as unknown as Schema.Schema<GetNamespaceInstanceItemRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      Schema.Union([Schema.Literals(["status", "modified_at"]), Schema.String]),
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
  ) as unknown as Schema.Schema<ListNamespaceInstanceItemsRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
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
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          totalCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            page: "page",
            perPage: "per_page",
            totalCount: "total_count",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListNamespaceInstanceItemsResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    itemId: Schema.String.pipe(T.HttpPath("itemId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}",
    }),
  ) as unknown as Schema.Schema<DeleteNamespaceInstanceItemRequest>;

export interface DeleteNamespaceInstanceItemResponse {
  key: string;
}

export const DeleteNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    itemId: Schema.String.pipe(T.HttpPath("itemId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{itemId}/download",
    }),
  ) as unknown as Schema.Schema<DownloadNamespaceInstanceItemRequest>;

export type DownloadNamespaceInstanceItemResponse = unknown;

export const DownloadNamespaceInstanceItemResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Schema<DownloadNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    file: Schema.Struct({
      file: UploadableSchema.pipe(T.HttpFormDataFile()),
      metadata: Schema.optional(Schema.String),
      waitForCompletion: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        file: "file",
        metadata: "metadata",
        waitForCompletion: "wait_for_completion",
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items",
      contentType: "multipart",
    }),
  ) as unknown as Schema.Schema<UploadNamespaceInstanceItemRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<UploadNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ChunksNamespaceInstanceItemRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      item: Schema.Struct({
        key: Schema.String,
        metadata: Schema.optional(
          Schema.Union([
            Schema.Record(Schema.String, Schema.Unknown),
            Schema.Null,
          ]),
        ),
        timestamp: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      }),
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
  ).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ChunksNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<LogsNamespaceInstanceItemRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      action: Schema.String,
      chunkCount: Schema.Union([Schema.Number, Schema.Null]),
      errorType: Schema.Union([Schema.String, Schema.Null]),
      fileKey: Schema.String,
      message: Schema.Union([Schema.String, Schema.Null]),
      processingTimeMs: Schema.Union([Schema.Number, Schema.Null]),
      timestamp: Schema.String,
    }),
  ).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<LogsNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<SyncNamespaceInstanceItemRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<SyncNamespaceInstanceItemResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    jobId: Schema.String.pipe(T.HttpPath("jobId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{jobId}",
    }),
  ) as unknown as Schema.Schema<GetNamespaceInstanceJobRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetNamespaceInstanceJobResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<ListNamespaceInstanceJobsRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        source: Schema.Union([
          Schema.Literals(["user", "schedule"]),
          Schema.String,
        ]),
        description: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
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
    ),
    resultInfo: Schema.optional(
      Schema.Union([
        Schema.Struct({
          count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          totalCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            count: "count",
            page: "page",
            perPage: "per_page",
            totalCount: "total_count",
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
  ) as unknown as Schema.Schema<ListNamespaceInstanceJobsResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    id: Schema.String.pipe(T.HttpPath("id")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs",
    }),
  ) as unknown as Schema.Schema<CreateNamespaceInstanceJobRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateNamespaceInstanceJobResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<PatchNamespaceInstanceJobRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchNamespaceInstanceJobResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<LogsNamespaceInstanceJobRequest>;

export type LogsNamespaceInstanceJobResponse = {
  id: number;
  createdAt: number;
  message: string;
  messageType: number;
}[];

export const LogsNamespaceInstanceJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
  ).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<LogsNamespaceInstanceJobResponse>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Schema<CreateOrUpdateNamespaceInstanceItemRequest>;

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateOrUpdateNamespaceInstanceItemResponse>;

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

export const ListTokensRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
  perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
  search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
}).pipe(
  T.Http({ method: "GET", path: "/accounts/{account_id}/ai-search/tokens" }),
) as unknown as Schema.Schema<ListTokensRequest>;

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

export const ListTokensResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
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
  ),
  resultInfo: Schema.optional(
    Schema.Union([
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
      Schema.Null,
    ]),
  ),
}).pipe(
  Schema.encodeKeys({ result: "result", resultInfo: "result_info" }),
) as unknown as Schema.Schema<ListTokensResponse>;

export type ListTokensError = DefaultErrors | InvalidRoute;

export const listTokens: API.PaginatedOperationMethod<
  ListTokensRequest,
  ListTokensResponse,
  ListTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListTokensRequest,
  output: ListTokensResponse,
  errors: [InvalidRoute],
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

export const CreateTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  T.Http({ method: "POST", path: "/accounts/{account_id}/ai-search/tokens" }),
) as unknown as Schema.Schema<CreateTokenRequest>;

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

export const CreateTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateTokenResponse>;

export type CreateTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const createToken: API.OperationMethod<
  CreateTokenRequest,
  CreateTokenResponse,
  CreateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTokenRequest,
  output: CreateTokenResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
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

export const UpdateTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Schema<UpdateTokenRequest>;

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

export const UpdateTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateTokenResponse>;

export type UpdateTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const updateToken: API.OperationMethod<
  UpdateTokenRequest,
  UpdateTokenResponse,
  UpdateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateTokenRequest,
  output: UpdateTokenResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

export interface DeleteTokenRequest {
  id: string;
  accountId: string;
}

export const DeleteTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/ai-search/tokens/{id}",
  }),
) as unknown as Schema.Schema<DeleteTokenRequest>;

export type DeleteTokenResponse = unknown;

export const DeleteTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteTokenResponse>;

export type DeleteTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const deleteToken: API.OperationMethod<
  DeleteTokenRequest,
  DeleteTokenResponse,
  DeleteTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteTokenRequest,
  output: DeleteTokenResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));

export interface ReadTokenRequest {
  id: string;
  accountId: string;
}

export const ReadTokenRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.HttpPath("id")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/ai-search/tokens/{id}",
  }),
) as unknown as Schema.Schema<ReadTokenRequest>;

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

export const ReadTokenResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ReadTokenResponse>;

export type ReadTokenError =
  | DefaultErrors
  | ValidationError
  | NotFound
  | InvalidRoute;

export const readToken: API.OperationMethod<
  ReadTokenRequest,
  ReadTokenResponse,
  ReadTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReadTokenRequest,
  output: ReadTokenResponse,
  errors: [ValidationError, NotFound, InvalidRoute],
}));
