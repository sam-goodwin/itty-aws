import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsReportsStateCreateInput {
  id: string;
  project_id: string;
  state: "suppressed" | "potential";
  dismissal_reason?:
    | "already_fixed"
    | "report_unclear"
    | "analysis_wrong"
    | "wontfix_intentional"
    | "wontfix_irrelevant"
    | "other";
  dismissal_note?: string;
  snooze_for?: number;
}
export const SignalsReportsStateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    state: Schema.Literals(["suppressed", "potential"]),
    dismissal_reason: Schema.optional(
      Schema.Literals([
        "already_fixed",
        "report_unclear",
        "analysis_wrong",
        "wontfix_intentional",
        "wontfix_irrelevant",
        "other",
      ]),
    ),
    dismissal_note: Schema.optional(Schema.String),
    snooze_for: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/reports/{id}/state/",
    }),
  ) as unknown as Schema.Codec<SignalsReportsStateCreateInput>;

// Output Schema
export interface SignalsReportsStateCreateOutput {
  id: string;
  title: string | null;
  summary: string | null;
  status:
    | "potential"
    | "candidate"
    | "in_progress"
    | "pending_input"
    | "ready"
    | "resolved"
    | "failed"
    | "deleted"
    | "suppressed";
  total_weight: number;
  signal_count: number;
  signals_at_run: number;
  created_at: string;
  updated_at: string;
  artefact_count: number;
  priority: string | null;
  actionability: string | null;
  already_addressed: boolean | null;
  dismissal_reason: string | null;
  dismissal_note: string | null;
  is_suggested_reviewer: boolean;
  source_products: string[];
  implementation_pr_url: string | null;
}
export const SignalsReportsStateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    title: Schema.NullOr(Schema.String),
    summary: Schema.NullOr(Schema.String),
    status: Schema.Literals([
      "potential",
      "candidate",
      "in_progress",
      "pending_input",
      "ready",
      "resolved",
      "failed",
      "deleted",
      "suppressed",
    ]),
    total_weight: Schema.Number,
    signal_count: Schema.Number,
    signals_at_run: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    artefact_count: Schema.Number,
    priority: Schema.NullOr(Schema.String),
    actionability: Schema.NullOr(Schema.String),
    already_addressed: Schema.NullOr(Schema.Boolean),
    dismissal_reason: Schema.NullOr(Schema.String),
    dismissal_note: Schema.NullOr(Schema.String),
    is_suggested_reviewer: Schema.Boolean,
    source_products: Schema.Array(Schema.String),
    implementation_pr_url: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<SignalsReportsStateCreateOutput>;

// The operation
/**
 * Transition a report to a new state. The model validates allowed transitions.
 * The request body is validated by SignalReportStateRequestSerializer — only the
 * fields it declares (state, dismissal_reason, dismissal_note, snooze_for) are read,
 * and only snooze_for is ever forwarded to transition_to. Any other key is ignored,
 * so internal transition_to kwargs (reset_weight, error, ...) can't be injected.
 * Body: {
 * "state": "suppressed" | "potential",
 * # Optional dismissal feedback (honored when state == "suppressed" or "potential"):
 * "dismissal_reason": "<canonical reason code, see SIGNAL_REPORT_DISMISSAL_REASON_CHOICES>",
 * "dismissal_note": "free-form text",
 * # Optional, only honored for state == "potential":
 * "snooze_for": <number of additional signals before re-promotion>,
 * }
 *
 * @param id - A UUID string identifying this signal report.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportsStateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsReportsStateCreateInput,
    outputSchema: SignalsReportsStateCreateOutput,
  }),
);
