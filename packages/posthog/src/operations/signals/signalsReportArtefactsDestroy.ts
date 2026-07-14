import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface SignalsReportArtefactsDestroyInput {
  id: string;
  project_id: string;
  report_id: string;
}
export const SignalsReportArtefactsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    report_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/signals/reports/{report_id}/artefacts/{id}/",
    }),
  ) as unknown as Schema.Codec<SignalsReportArtefactsDestroyInput>;

// Output Schema
export type SignalsReportArtefactsDestroyOutput = void;
export const SignalsReportArtefactsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SignalsReportArtefactsDestroyOutput>;

// The operation
/**
 * Delete an artefact
 *
 * Delete an artefact, addressed by id. Deleting the latest row of a status type reverts the report's canonical status to the previous version (latest-wins over what remains).
 *
 * @param id - A UUID string identifying this signal report artefact.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsReportArtefactsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SignalsReportArtefactsDestroyInput,
    outputSchema: SignalsReportArtefactsDestroyOutput,
    errors: [NotFound] as const,
  }));
