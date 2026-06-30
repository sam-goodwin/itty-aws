import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsReportArtefactsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/",
    }),
  );
export type SignalsReportArtefactsListInput =
  typeof SignalsReportArtefactsListInput.Type;

// Output Schema
export const SignalsReportArtefactsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.Literals([
          "video_segment",
          "safety_judgment",
          "actionability_judgment",
          "priority_judgment",
          "signal_finding",
          "repo_selection",
          "suggested_reviewers",
          "dismissal",
          "code_reference",
          "commit",
          "task_run",
          "note",
        ]),
        content: Schema.Unknown,
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
        created_by: Schema.Unknown,
        task_id: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type SignalsReportArtefactsListOutput =
  typeof SignalsReportArtefactsListOutput.Type;

// The operation
/**
 * List a report's artefacts
 *
 * List every artefact on a report — the full work log: signal findings (the evidence behind the report), status judgments (safety / actionability / priority, repo selection, suggested reviewers — the newest row of each status type is canonical), and log entries (code references, commits, task runs, notes). `suggested_reviewers` content is enriched with PostHog user info at read time.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsReportArtefactsListInput,
    outputSchema: SignalsReportArtefactsListOutput,
  }),
);
