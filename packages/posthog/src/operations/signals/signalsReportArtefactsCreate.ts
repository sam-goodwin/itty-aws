import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsReportArtefactsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
    artefact_type: Schema.String,
    content: Schema.Unknown,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/",
    }),
  );
export type SignalsReportArtefactsCreateInput =
  typeof SignalsReportArtefactsCreateInput.Type;

// Output Schema
export const SignalsReportArtefactsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    report_id: Schema.String,
    type: Schema.String,
    content: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    task_id: Schema.NullOr(Schema.String),
  });
export type SignalsReportArtefactsCreateOutput =
  typeof SignalsReportArtefactsCreateOutput.Type;

// The operation
/**
 * Append an artefact to a report
 *
 * Append an artefact to a report (see artefact_type for the writable types). Everything is append-only: log entries (code reference, commit, task run, note) accumulate, while status types (safety / actionability / priority judgments, repo selection, suggested reviewers) are latest-wins — appending a new version supersedes the previous one as the report's canonical status. Content is validated against the type's schema.
 *
 * @param X-PostHog-Task-Id - Task to attribute the artefact to (must belong to this project). Set automatically for sandbox agents; when absent the artefact is attributed to the requesting user.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsReportArtefactsCreateInput,
    outputSchema: SignalsReportArtefactsCreateOutput,
    errors: [BadRequest, NotFound] as const,
  }));
