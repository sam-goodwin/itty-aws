import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsReportArtefactsDiffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/diff/",
    }),
  );
export type SignalsReportArtefactsDiffInput =
  typeof SignalsReportArtefactsDiffInput.Type;

// Output Schema
export const SignalsReportArtefactsDiffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diff: Schema.String,
    truncated: Schema.Boolean,
  });
export type SignalsReportArtefactsDiffOutput =
  typeof SignalsReportArtefactsDiffOutput.Type;

// The operation
/**
 * Fetch the diff for a commit artefact
 *
 * Fetch the unified diff of a `commit` artefact's branch against the repository default branch via the team's GitHub integration — using the branch's current tip so the diff reflects the latest state of the work, not just the single recorded commit.
 *
 * @param id - A UUID string identifying this signal report artefact.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsDiff = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsReportArtefactsDiffInput,
    outputSchema: SignalsReportArtefactsDiffOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
