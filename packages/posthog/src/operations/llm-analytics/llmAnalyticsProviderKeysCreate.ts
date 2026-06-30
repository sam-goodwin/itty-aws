import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { SensitiveString, SensitiveOutputString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface LlmAnalyticsProviderKeysCreateInput {
  project_id: string;
  id?: string;
  provider?:
    | "openai"
    | "anthropic"
    | "gemini"
    | "openrouter"
    | "fireworks"
    | "azure_openai"
    | "together_ai";
  name?: string;
  state?: "unknown" | "ok" | "invalid" | "error";
  error_message?: string | null;
  api_key?: string | Redacted.Redacted<string>;
  api_key_masked?: string;
  azure_endpoint?: string;
  api_version?: string;
  azure_endpoint_display?: string | null;
  api_version_display?: string | null;
  set_as_active?: boolean;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  last_used_at?: string | null;
}
export const LlmAnalyticsProviderKeysCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    provider: Schema.optional(
      Schema.Literals([
        "openai",
        "anthropic",
        "gemini",
        "openrouter",
        "fireworks",
        "azure_openai",
        "together_ai",
      ]),
    ),
    name: Schema.optional(Schema.String),
    state: Schema.optional(
      Schema.Literals(["unknown", "ok", "invalid", "error"]),
    ),
    error_message: Schema.optional(Schema.NullOr(Schema.String)),
    api_key: Schema.optional(SensitiveString),
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_analytics/provider_keys/",
    }),
  ) as unknown as Schema.Codec<LlmAnalyticsProviderKeysCreateInput>;

// Output Schema
export interface LlmAnalyticsProviderKeysCreateOutput {
  id?: string;
  provider?:
    | "openai"
    | "anthropic"
    | "gemini"
    | "openrouter"
    | "fireworks"
    | "azure_openai"
    | "together_ai";
  name?: string;
  state?: "unknown" | "ok" | "invalid" | "error";
  error_message?: string | null;
  api_key?: Redacted.Redacted<string>;
  api_key_masked?: string;
  azure_endpoint?: string;
  api_version?: string;
  azure_endpoint_display?: string | null;
  api_version_display?: string | null;
  set_as_active?: boolean;
  created_at?: string;
  created_by?: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  last_used_at?: string | null;
}
export const LlmAnalyticsProviderKeysCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    provider: Schema.optional(
      Schema.Literals([
        "openai",
        "anthropic",
        "gemini",
        "openrouter",
        "fireworks",
        "azure_openai",
        "together_ai",
      ]),
    ),
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
          role_at_organization: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "engineering",
                  "data",
                  "product",
                  "founder",
                  "leadership",
                  "marketing",
                  "sales",
                  "other",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
        }),
      ),
    ),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<LlmAnalyticsProviderKeysCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsProviderKeysCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsProviderKeysCreateInput,
    outputSchema: LlmAnalyticsProviderKeysCreateOutput,
  }));
