import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingSymbolSetsFinishUploadUpdateInput {
  id: string;
  project_id: string;
  content_hash: string;
}
export const ErrorTrackingSymbolSetsFinishUploadUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    content_hash: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/finish_upload/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSymbolSetsFinishUploadUpdateInput>;

// Output Schema
export type ErrorTrackingSymbolSetsFinishUploadUpdateOutput = void;
export const ErrorTrackingSymbolSetsFinishUploadUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSymbolSetsFinishUploadUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsFinishUploadUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsFinishUploadUpdateInput,
    outputSchema: ErrorTrackingSymbolSetsFinishUploadUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
