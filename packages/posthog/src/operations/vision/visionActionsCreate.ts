import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionActionsCreateInput {
  project_id: string;
  id: string;
  name: string;
  scanner: string;
  enabled?: boolean;
  trigger_type?: "schedule" | "threshold";
  mode?: "group_summary" | "per_observation";
  trigger_config?: { rrule?: string; timezone?: string };
  selection?: {
    scanner_type?: string;
    scanner_ids?: string[];
    verdict?: string;
    tags?: string[];
    min_score?: number;
    max_score?: number;
    status?: string;
    window_days?: number;
  };
  synthesis_config?: { prompt_guide?: string };
  delivery_config?: {
    type: "slack";
    integration_id: number;
    channel: string;
  }[];
  next_run_at: string | null;
  last_run_at: string | null;
  hog_flow_id: string | null;
  created_at: string;
  created_by: {
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
  updated_at: string;
}
export const VisionActionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    scanner: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    trigger_type: Schema.optional(Schema.Literals(["schedule", "threshold"])),
    mode: Schema.optional(
      Schema.Literals(["group_summary", "per_observation"]),
    ),
    trigger_config: Schema.optional(
      Schema.Struct({
        rrule: Schema.optional(Schema.String),
        timezone: Schema.optional(Schema.String),
      }),
    ),
    selection: Schema.optional(
      Schema.Struct({
        scanner_type: Schema.optional(Schema.String),
        scanner_ids: Schema.optional(Schema.Array(Schema.String)),
        verdict: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Array(Schema.String)),
        min_score: Schema.optional(Schema.Number),
        max_score: Schema.optional(Schema.Number),
        status: Schema.optional(Schema.String),
        window_days: Schema.optional(Schema.Number),
      }),
    ),
    synthesis_config: Schema.optional(
      Schema.Struct({
        prompt_guide: Schema.optional(Schema.String),
      }),
    ),
    delivery_config: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals(["slack"]),
          integration_id: Schema.Number,
          channel: Schema.String,
        }),
      ),
    ),
    next_run_at: Schema.NullOr(Schema.String),
    last_run_at: Schema.NullOr(Schema.String),
    hog_flow_id: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    created_by: Schema.NullOr(
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
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/vision/actions/",
    }),
  ) as unknown as Schema.Codec<VisionActionsCreateInput>;

// Output Schema
export interface VisionActionsCreateOutput {
  id: string;
  name: string;
  scanner: string;
  enabled?: boolean;
  trigger_type?: "schedule" | "threshold";
  mode?: "group_summary" | "per_observation";
  trigger_config?: { rrule?: string; timezone?: string };
  selection?: {
    scanner_type?: string;
    scanner_ids?: string[];
    verdict?: string;
    tags?: string[];
    min_score?: number;
    max_score?: number;
    status?: string;
    window_days?: number;
  };
  synthesis_config?: { prompt_guide?: string };
  delivery_config?: {
    type: "slack";
    integration_id: number;
    channel: string;
  }[];
  next_run_at: string | null;
  last_run_at: string | null;
  hog_flow_id: string | null;
  created_at: string;
  created_by: {
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
  updated_at: string;
}
export const VisionActionsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    scanner: Schema.String,
    enabled: Schema.optional(Schema.Boolean),
    trigger_type: Schema.optional(Schema.Literals(["schedule", "threshold"])),
    mode: Schema.optional(
      Schema.Literals(["group_summary", "per_observation"]),
    ),
    trigger_config: Schema.optional(
      Schema.Struct({
        rrule: Schema.optional(Schema.String),
        timezone: Schema.optional(Schema.String),
      }),
    ),
    selection: Schema.optional(
      Schema.Struct({
        scanner_type: Schema.optional(Schema.String),
        scanner_ids: Schema.optional(Schema.Array(Schema.String)),
        verdict: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Array(Schema.String)),
        min_score: Schema.optional(Schema.Number),
        max_score: Schema.optional(Schema.Number),
        status: Schema.optional(Schema.String),
        window_days: Schema.optional(Schema.Number),
      }),
    ),
    synthesis_config: Schema.optional(
      Schema.Struct({
        prompt_guide: Schema.optional(Schema.String),
      }),
    ),
    delivery_config: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals(["slack"]),
          integration_id: Schema.Number,
          channel: Schema.String,
        }),
      ),
    ),
    next_run_at: Schema.NullOr(Schema.String),
    last_run_at: Schema.NullOr(Schema.String),
    hog_flow_id: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    created_by: Schema.NullOr(
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
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<VisionActionsCreateOutput>;

// The operation
/**
 * CRUD for Replay Vision actions — scheduled "and then…" automations over a scanner's observations.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionActionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisionActionsCreateInput,
  outputSchema: VisionActionsCreateOutput,
}));
