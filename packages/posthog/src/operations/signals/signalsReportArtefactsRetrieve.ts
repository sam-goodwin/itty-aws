import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SignalsReportArtefactsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/",
    }),
  );
export type SignalsReportArtefactsRetrieveInput =
  typeof SignalsReportArtefactsRetrieveInput.Type;

// Output Schema
export const SignalsReportArtefactsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type SignalsReportArtefactsRetrieveOutput =
  typeof SignalsReportArtefactsRetrieveOutput.Type;

// The operation
/**
 * Get a single artefact
 *
 * Get one artefact by id, content parsed (and reviewers enriched) the same way as the list.
 *
 * @param id - A UUID string identifying this signal report artefact.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsReportArtefactsRetrieveInput,
    outputSchema: SignalsReportArtefactsRetrieveOutput,
  }));
