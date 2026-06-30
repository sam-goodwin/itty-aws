import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsReportArtefactsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/",
    }),
  );
export type SignalsReportArtefactsPartialUpdateInput =
  typeof SignalsReportArtefactsPartialUpdateInput.Type;

// Output Schema
export const SignalsReportArtefactsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    report_id: Schema.String,
    type: Schema.String,
    content: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    task_id: Schema.NullOr(Schema.String),
  });
export type SignalsReportArtefactsPartialUpdateOutput =
  typeof SignalsReportArtefactsPartialUpdateOutput.Type;

// The operation
/**
 * Replace an artefact's content
 *
 * Replace the content of an existing artefact, addressed by id. The new content is validated against the artefact's type schema. Editing the latest row of a status type changes the report's canonical status (latest-wins); to re-assess while keeping history, append a new artefact instead. Attribution is creation-time only — edits don't reassign it.
 *
 * @param id - A UUID string identifying this signal report artefact.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsReportArtefactsPartialUpdateInput,
    outputSchema: SignalsReportArtefactsPartialUpdateOutput,
    errors: [BadRequest, NotFound] as const,
  }));
