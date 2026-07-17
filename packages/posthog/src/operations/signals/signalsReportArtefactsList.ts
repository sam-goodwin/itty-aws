import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SignalsReportArtefactsListInput {
  project_id: string;
  report_id: string;
  limit?: number;
  offset?: number;
}
export const SignalsReportArtefactsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/",
    }),
  ) as unknown as Schema.Codec<SignalsReportArtefactsListInput>;

// Output Schema
export interface SignalsReportArtefactsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    type:
      | "video_segment"
      | "safety_judgment"
      | "actionability_judgment"
      | "priority_judgment"
      | "signal_finding"
      | "repo_selection"
      | "suggested_reviewers"
      | "dismissal"
      | "code_reference"
      | "commit"
      | "task_run"
      | "note";
    content: Record<string, unknown> | unknown[];
    created_at: string;
    updated_at: string | null;
    created_by: {
      id?: number;
      uuid?: string;
      first_name?: string;
      last_name?: string;
      email?: string;
    } | null;
    task_id: string | null;
  }[];
}
export const SignalsReportArtefactsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
        content: Schema.Union([
          Schema.Record(Schema.String, Schema.Unknown),
          Schema.Array(Schema.Unknown),
        ]),
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
        created_by: Schema.NullOr(
          Schema.Struct({
            id: Schema.optional(Schema.Number),
            uuid: Schema.optional(Schema.String),
            first_name: Schema.optional(Schema.String),
            last_name: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
          }),
        ),
        task_id: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SignalsReportArtefactsListOutput>;

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
export const signalsReportArtefactsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalsReportArtefactsListInput,
  outputSchema: SignalsReportArtefactsListOutput,
}));
