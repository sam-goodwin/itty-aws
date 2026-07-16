import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EvaluationsPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  description?: string;
  enabled?: boolean;
  status?: "active" | "paused" | "error";
  status_reason?:
    | "trial_limit_reached"
    | "model_not_allowed"
    | "provider_key_deleted"
    | "no_default_model"
    | "provider_key_invalid"
    | "provider_key_permission_denied"
    | "provider_key_quota_exceeded"
    | "provider_key_rate_limited"
    | "model_not_found"
    | "hog_error"
    | null;
  status_reason_detail?: string | null;
  evaluation_type?: "llm_judge" | "hog" | "sentiment";
  evaluation_config?:
    | { prompt: string }
    | { source: string }
    | { source?: "user_messages" };
  output_type?: "boolean" | "sentiment";
  output_config?: { allows_na?: boolean };
  conditions?: {
    id: string;
    rollout_percentage?: number;
    properties?: Record<string, unknown>[];
  }[];
  model_configuration?: {
    provider?:
      | "openai"
      | "anthropic"
      | "gemini"
      | "openrouter"
      | "fireworks"
      | "azure_openai"
      | "together_ai";
    model?: string;
    provider_key_id?: string | null;
    provider_key_name?: string | null;
  } | null;
  created_at?: string;
  updated_at?: string;
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
  deleted?: boolean;
}
export const EvaluationsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Literals(["active", "paused", "error"])),
    status_reason: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "trial_limit_reached",
          "model_not_allowed",
          "provider_key_deleted",
          "no_default_model",
          "provider_key_invalid",
          "provider_key_permission_denied",
          "provider_key_quota_exceeded",
          "provider_key_rate_limited",
          "model_not_found",
          "hog_error",
        ]),
      ),
    ),
    status_reason_detail: Schema.optional(Schema.NullOr(Schema.String)),
    evaluation_type: Schema.optional(
      Schema.Literals(["llm_judge", "hog", "sentiment"]),
    ),
    evaluation_config: Schema.optional(
      Schema.Union([
        Schema.Struct({
          prompt: Schema.String,
        }),
        Schema.Struct({
          source: Schema.String,
        }),
        Schema.Struct({
          source: Schema.optional(Schema.Literals(["user_messages"])),
        }),
      ]),
    ),
    output_type: Schema.optional(Schema.Literals(["boolean", "sentiment"])),
    output_config: Schema.optional(
      Schema.Struct({
        allows_na: Schema.optional(Schema.Boolean),
      }),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          rollout_percentage: Schema.optional(Schema.Number),
          properties: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
        }),
      ),
    ),
    model_configuration: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
    deleted: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/evaluations/{id}/",
    }),
  ) as unknown as Schema.Codec<EvaluationsPartialUpdateInput>;

// Output Schema
export interface EvaluationsPartialUpdateOutput {
  id?: string;
  name?: string;
  description?: string;
  enabled?: boolean;
  status?: "active" | "paused" | "error";
  status_reason?:
    | "trial_limit_reached"
    | "model_not_allowed"
    | "provider_key_deleted"
    | "no_default_model"
    | "provider_key_invalid"
    | "provider_key_permission_denied"
    | "provider_key_quota_exceeded"
    | "provider_key_rate_limited"
    | "model_not_found"
    | "hog_error"
    | null;
  status_reason_detail?: string | null;
  evaluation_type?: "llm_judge" | "hog" | "sentiment";
  evaluation_config?:
    | { prompt: string }
    | { source: string }
    | { source?: "user_messages" };
  output_type?: "boolean" | "sentiment";
  output_config?: { allows_na?: boolean };
  conditions?: {
    id: string;
    rollout_percentage?: number;
    properties?: Record<string, unknown>[];
  }[];
  model_configuration?: {
    provider?:
      | "openai"
      | "anthropic"
      | "gemini"
      | "openrouter"
      | "fireworks"
      | "azure_openai"
      | "together_ai";
    model?: string;
    provider_key_id?: string | null;
    provider_key_name?: string | null;
  } | null;
  created_at?: string;
  updated_at?: string;
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
  deleted?: boolean;
}
export const EvaluationsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Literals(["active", "paused", "error"])),
    status_reason: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "trial_limit_reached",
          "model_not_allowed",
          "provider_key_deleted",
          "no_default_model",
          "provider_key_invalid",
          "provider_key_permission_denied",
          "provider_key_quota_exceeded",
          "provider_key_rate_limited",
          "model_not_found",
          "hog_error",
        ]),
      ),
    ),
    status_reason_detail: Schema.optional(Schema.NullOr(Schema.String)),
    evaluation_type: Schema.optional(
      Schema.Literals(["llm_judge", "hog", "sentiment"]),
    ),
    evaluation_config: Schema.optional(
      Schema.Union([
        Schema.Struct({
          prompt: Schema.String,
        }),
        Schema.Struct({
          source: Schema.String,
        }),
        Schema.Struct({
          source: Schema.optional(Schema.Literals(["user_messages"])),
        }),
      ]),
    ),
    output_type: Schema.optional(Schema.Literals(["boolean", "sentiment"])),
    output_config: Schema.optional(
      Schema.Struct({
        allows_na: Schema.optional(Schema.Boolean),
      }),
    ),
    conditions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          rollout_percentage: Schema.optional(Schema.Number),
          properties: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
        }),
      ),
    ),
    model_configuration: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
    deleted: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<EvaluationsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this evaluation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationsPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvaluationsPartialUpdateInput,
  outputSchema: EvaluationsPartialUpdateOutput,
}));
