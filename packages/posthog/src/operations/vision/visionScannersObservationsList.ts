import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersObservationsListInput {
  project_id: string;
  scanner_id: string;
  limit?: number;
  offset?: number;
  order_by?:
    | "-completed_at"
    | "-created_at"
    | "-recording_subject_email"
    | "-result_score"
    | "-result_verdict"
    | "-scanner_version"
    | "-started_at"
    | "-status"
    | "completed_at"
    | "created_at"
    | "recording_subject_email"
    | "result_score"
    | "result_verdict"
    | "scanner_version"
    | "started_at"
    | "status";
  recording_subject?: string;
  session_id?: string;
  status?: string;
  tags?: string;
  triggered_by?: string;
  verdict?: string;
}
export const VisionScannersObservationsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    scanner_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(
      Schema.Literals([
        "-completed_at",
        "-created_at",
        "-recording_subject_email",
        "-result_score",
        "-result_verdict",
        "-scanner_version",
        "-started_at",
        "-status",
        "completed_at",
        "created_at",
        "recording_subject_email",
        "result_score",
        "result_verdict",
        "scanner_version",
        "started_at",
        "status",
      ]),
    ),
    recording_subject: Schema.optional(Schema.String),
    session_id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    triggered_by: Schema.optional(Schema.String),
    verdict: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/{scanner_id}/observations/",
    }),
  ) as unknown as Schema.Codec<VisionScannersObservationsListInput>;

// Output Schema
export interface VisionScannersObservationsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const VisionScannersObservationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<VisionScannersObservationsListOutput>;

// The operation
/**
 * Read-only access to observations produced by a scanner.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort observations. Plain keys: created_at, started_at, completed_at, status, recording_subject_email. JSONB keys: result_score (scorer), result_verdict (monitor), scanner_version. Prefix with `-` for descending.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param recording_subject - Filter to observations whose recording subject email contains this value (case-insensitive).
 * @param session_id - Filter to observations of one or more session recordings. Accepts a comma-separated list.
 * @param status - Filter by observation status. Accepts a comma-separated list.
 * @param tags - Filter classifier observations whose fixed or freeform tags include any of the given values (comma-separated). Matches if the tag appears in either `tags` or `tags_freeform`.
 * @param triggered_by - Filter by trigger source (schedule or on_demand). Accepts a comma-separated list.
 * @param verdict - Filter monitor observations by verdict. Accepts a comma-separated list (e.g. `yes,inconclusive`).
 */
export const visionScannersObservationsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VisionScannersObservationsListInput,
    outputSchema: VisionScannersObservationsListOutput,
  }));
