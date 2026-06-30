import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsScoutEmitReportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
    title: Schema.String,
    summary: Schema.String,
    evidence: Schema.Array(
      Schema.Struct({
        description: Schema.String,
        source_id: Schema.String,
        weight: Schema.optional(Schema.Number),
      }),
    ),
    actionability_explanation: Schema.String,
    actionability: Schema.Literals([
      "immediately_actionable",
      "requires_human_input",
      "not_actionable",
    ]),
    already_addressed: Schema.optional(Schema.Boolean),
    repository: Schema.optional(Schema.NullOr(Schema.String)),
    priority: Schema.optional(Schema.Unknown),
    priority_explanation: Schema.optional(Schema.NullOr(Schema.String)),
    suggested_reviewers: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/emit-report/",
    }),
  );
export type SignalsScoutEmitReportInput =
  typeof SignalsScoutEmitReportInput.Type;

// Output Schema
export const SignalsScoutEmitReportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    report_id: Schema.NullOr(Schema.String),
    report_status: Schema.NullOr(Schema.String),
    emitted: Schema.Boolean,
    skipped_reason: Schema.NullOr(Schema.String),
    safety_explanation: Schema.NullOr(Schema.String),
  });
export type SignalsScoutEmitReportOutput =
  typeof SignalsScoutEmitReportOutput.Type;

// The operation
/**
 * Author a full report for a run
 *
 * The second emit channel: author a complete `SignalReport` directly instead of emitting a weak signal. The report passes the safety judge, then surfaces at the status the scout's `actionability` call implies (or is suppressed). Backing `evidence` is written as bound signals so the report behaves like a pipeline report. NOT idempotent — a retry authors a second report; use `reports` to find a prior report and `edit-report` to update it instead.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - UUID of the `SignalScoutRun` bridge row.
 */
export const signalsScoutEmitReport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsScoutEmitReportInput,
    outputSchema: SignalsScoutEmitReportOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
