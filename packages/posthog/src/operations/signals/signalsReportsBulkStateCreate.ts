import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsReportsBulkStateCreateInput {
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
  ids: string[];
}
export const SignalsReportsBulkStateCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/reports/bulk-state/",
    }),
  ) as unknown as Schema.Codec<SignalsReportsBulkStateCreateInput>;

// Output Schema
export interface SignalsReportsBulkStateCreateOutput {
  results: {
    id: string;
    outcome: string;
    status?: string | null;
    detail?: string | null;
  }[];
  transitioned_count: number;
  skipped_count: number;
  failed_count: number;
  not_found_count: number;
}
export const SignalsReportsBulkStateCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        outcome: Schema.String,
        status: Schema.optional(Schema.NullOr(Schema.String)),
        detail: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    transitioned_count: Schema.Number,
    skipped_count: Schema.Number,
    failed_count: Schema.Number,
    not_found_count: Schema.Number,
  }) as unknown as Schema.Codec<SignalsReportsBulkStateCreateOutput>;

// The operation
/**
 * Transition many reports to a new state in one call.
 * Each id is processed independently: a report whose transition isn't allowed from its
 * current status is reported as `skipped` (a 409 on the single-report endpoint) and the
 * rest still go through. Returns one result per requested id (in request order, after
 * de-duplication) plus per-outcome counts. The whole call is 200 even on partial failure —
 * inspect `results` / the counts to see what happened.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportsBulkStateCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalsReportsBulkStateCreateInput,
    outputSchema: SignalsReportsBulkStateCreateOutput,
  }));
