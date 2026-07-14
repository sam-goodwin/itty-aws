import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export interface SignalsScoutEditReportInput {
  project_id: string;
  run_id: string;
  report_id: string;
  title?: string | null;
  summary?: string | null;
  append_note?: string | null;
}
export const SignalsScoutEditReportInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    run_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String,
    title: Schema.optional(Schema.NullOr(Schema.String)),
    summary: Schema.optional(Schema.NullOr(Schema.String)),
    append_note: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/scout/runs/{run_id}/edit-report/",
    }),
  ) as unknown as Schema.Codec<SignalsScoutEditReportInput>;

// Output Schema
export interface SignalsScoutEditReportOutput {
  report_id: string;
  updated_fields: string[];
  note_appended: boolean;
}
export const SignalsScoutEditReportOutput =
  /*@__PURE__*/ Schema.Struct({
    report_id: Schema.String,
    updated_fields: Schema.Array(Schema.String),
    note_appended: Schema.Boolean,
  }) as unknown as Schema.Codec<SignalsScoutEditReportOutput>;

// The operation
/**
 * Edit an existing report for a run
 *
 * Rewrite a report's title/summary and/or append a note. Can target ANY of the project's inbox reports, not just scout-authored ones — so the edit is attributed to this scout. Title/summary edits are best-effort: the pipeline may later re-research and overwrite them.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param run_id - UUID of the `SignalScoutRun` bridge row.
 */
export const signalsScoutEditReport = /*@__PURE__*/ API.make(() => ({
  inputSchema: SignalsScoutEditReportInput,
  outputSchema: SignalsScoutEditReportOutput,
  errors: [BadRequest, NotFound] as const,
}));
