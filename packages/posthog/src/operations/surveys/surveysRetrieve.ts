import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SurveysRetrieveInput {
  id: string;
  project_id: string;
}
export const SurveysRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/surveys/{id}/" }),
) as unknown as Schema.Codec<SurveysRetrieveInput>;

// Output Schema
export interface SurveysRetrieveOutput {
  id?: string;
  name?: string;
  description?: string;
  type?: "popover" | "widget" | "external_survey" | "api";
  schedule?: string | null;
  linked_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  linked_flag_id?: number | null;
  linked_insight_id?: number | null;
  targeting_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  internal_targeting_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  questions?: unknown;
  conditions?: Record<string, unknown> | null;
  appearance?: unknown;
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
  start_date?: string | null;
  end_date?: string | null;
  archived?: boolean;
  responses_limit?: number | null;
  feature_flag_keys?: Record<string, string | null>[];
  iteration_count?: number | null;
  iteration_frequency_days?: number | null;
  iteration_start_dates?: (string | null)[] | null;
  current_iteration?: number | null;
  current_iteration_start_date?: string | null;
  response_sampling_start_date?: string | null;
  response_sampling_interval_type?: "day" | "week" | "month" | "" | null;
  response_sampling_interval?: number | null;
  response_sampling_limit?: number | null;
  response_sampling_daily_limits?: unknown;
  enable_partial_responses?: boolean | null;
  enable_iframe_embedding?: boolean | null;
  base_language?: string;
  translations?: unknown;
  user_access_level?: string | null;
  form_content?: unknown;
  search_match_type?: "exact" | "similar" | null;
}
export const SurveysRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  type: Schema.optional(
    Schema.Literals(["popover", "widget", "external_survey", "api"]),
  ),
  schedule: Schema.optional(Schema.NullOr(Schema.String)),
  linked_flag: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      team_id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      deleted: Schema.optional(Schema.Boolean),
      active: Schema.optional(Schema.Boolean),
      ensure_experience_continuity: Schema.optional(
        Schema.NullOr(Schema.Boolean),
      ),
      version: Schema.optional(Schema.NullOr(Schema.Number)),
      evaluation_runtime: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["server", "client", "all"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      bucketing_identifier: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["distinct_id", "device_id"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  linked_flag_id: Schema.optional(Schema.NullOr(Schema.Number)),
  linked_insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
  targeting_flag: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      team_id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      deleted: Schema.optional(Schema.Boolean),
      active: Schema.optional(Schema.Boolean),
      ensure_experience_continuity: Schema.optional(
        Schema.NullOr(Schema.Boolean),
      ),
      version: Schema.optional(Schema.NullOr(Schema.Number)),
      evaluation_runtime: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["server", "client", "all"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      bucketing_identifier: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["distinct_id", "device_id"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  internal_targeting_flag: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      team_id: Schema.optional(Schema.Number),
      name: Schema.optional(Schema.String),
      key: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      deleted: Schema.optional(Schema.Boolean),
      active: Schema.optional(Schema.Boolean),
      ensure_experience_continuity: Schema.optional(
        Schema.NullOr(Schema.Boolean),
      ),
      version: Schema.optional(Schema.NullOr(Schema.Number)),
      evaluation_runtime: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["server", "client", "all"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      bucketing_identifier: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals(["distinct_id", "device_id"]),
            Schema.Literals([""]),
          ]),
        ),
      ),
      evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  questions: Schema.optional(Schema.Unknown),
  conditions: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  appearance: Schema.optional(Schema.Unknown),
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
  start_date: Schema.optional(Schema.NullOr(Schema.String)),
  end_date: Schema.optional(Schema.NullOr(Schema.String)),
  archived: Schema.optional(Schema.Boolean),
  responses_limit: Schema.optional(Schema.NullOr(Schema.Number)),
  feature_flag_keys: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.NullOr(Schema.String))),
  ),
  iteration_count: Schema.optional(Schema.NullOr(Schema.Number)),
  iteration_frequency_days: Schema.optional(Schema.NullOr(Schema.Number)),
  iteration_start_dates: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.NullOr(Schema.String))),
  ),
  current_iteration: Schema.optional(Schema.NullOr(Schema.Number)),
  current_iteration_start_date: Schema.optional(Schema.NullOr(Schema.String)),
  response_sampling_start_date: Schema.optional(Schema.NullOr(Schema.String)),
  response_sampling_interval_type: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["day", "week", "month"]),
        Schema.Literals([""]),
      ]),
    ),
  ),
  response_sampling_interval: Schema.optional(Schema.NullOr(Schema.Number)),
  response_sampling_limit: Schema.optional(Schema.NullOr(Schema.Number)),
  response_sampling_daily_limits: Schema.optional(Schema.Unknown),
  enable_partial_responses: Schema.optional(Schema.NullOr(Schema.Boolean)),
  enable_iframe_embedding: Schema.optional(Schema.NullOr(Schema.Boolean)),
  base_language: Schema.optional(Schema.String),
  translations: Schema.optional(Schema.Unknown),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  form_content: Schema.optional(Schema.Unknown),
  search_match_type: Schema.optional(
    Schema.NullOr(Schema.Literals(["exact", "similar"])),
  ),
}) as unknown as Schema.Codec<SurveysRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this survey.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const surveysRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SurveysRetrieveInput,
  outputSchema: SurveysRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
