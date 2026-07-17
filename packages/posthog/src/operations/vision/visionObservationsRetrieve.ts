import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionObservationsRetrieveInput {
  id: string;
  project_id: string;
}
export const VisionObservationsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/observations/{id}/",
    }),
  ) as unknown as Schema.Codec<VisionObservationsRetrieveInput>;

// Output Schema
export interface VisionObservationsRetrieveOutput {
  id: string;
  scanner_id: string;
  session_id: string;
  status: "pending" | "running" | "succeeded" | "failed" | "ineligible";
  error_reason: string;
  workflow_id: string;
  scanner_snapshot: {
    name: string;
    scanner_type: "monitor" | "classifier" | "scorer" | "summarizer";
    scanner_version: number;
    model: "gemini-3-flash-preview" | "gemini-3.1-flash-lite-preview";
    provider: "google";
    emits_signals: boolean;
    scanner_config: unknown;
  } | null;
  scanner_result: { model_output: unknown; signals_count: number } | null;
  triggered_by: "schedule" | "on_demand";
  triggered_by_user: {
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
  distinct_id: string | null;
  recording_subject_email: string | null;
  previous_observation_id: string | null;
  next_observation_id: string | null;
  started_at?: string | null;
  completed_at?: string | null;
  created_at: string;
}
export const VisionObservationsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    scanner_id: Schema.String,
    session_id: Schema.String,
    status: Schema.Literals([
      "pending",
      "running",
      "succeeded",
      "failed",
      "ineligible",
    ]),
    error_reason: Schema.String,
    workflow_id: Schema.String,
    scanner_snapshot: Schema.NullOr(
      Schema.Struct({
        name: Schema.String,
        scanner_type: Schema.Literals([
          "monitor",
          "classifier",
          "scorer",
          "summarizer",
        ]),
        scanner_version: Schema.Number,
        model: Schema.Literals([
          "gemini-3-flash-preview",
          "gemini-3.1-flash-lite-preview",
        ]),
        provider: Schema.Literals(["google"]),
        emits_signals: Schema.Boolean,
        scanner_config: Schema.Unknown,
      }),
    ),
    scanner_result: Schema.NullOr(
      Schema.Struct({
        model_output: Schema.Unknown,
        signals_count: Schema.Number,
      }),
    ),
    triggered_by: Schema.Literals(["schedule", "on_demand"]),
    triggered_by_user: Schema.NullOr(
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
    distinct_id: Schema.NullOr(Schema.String),
    recording_subject_email: Schema.NullOr(Schema.String),
    previous_observation_id: Schema.NullOr(Schema.String),
    next_observation_id: Schema.NullOr(Schema.String),
    started_at: Schema.optional(Schema.NullOr(Schema.String)),
    completed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
  }) as unknown as Schema.Codec<VisionObservationsRetrieveOutput>;

// The operation
/**
 * Read-only access to a session's observations across every scanner the caller can read, for the replay-page dock.
 *
 * @param id - A UUID string identifying this replay observation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionObservationsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisionObservationsRetrieveInput,
  outputSchema: VisionObservationsRetrieveOutput,
}));
