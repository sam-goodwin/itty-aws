import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingSymbolSetsBulkFinishUploadCreateInput {
  project_id: string;
  content_hashes: Record<string, string>;
}
export const ErrorTrackingSymbolSetsBulkFinishUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    content_hashes: Schema.Record(Schema.String, Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/bulk_finish_upload/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSymbolSetsBulkFinishUploadCreateInput>;

// Output Schema
export type ErrorTrackingSymbolSetsBulkFinishUploadCreateOutput = void;
export const ErrorTrackingSymbolSetsBulkFinishUploadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingSymbolSetsBulkFinishUploadCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsBulkFinishUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsBulkFinishUploadCreateInput,
    outputSchema: ErrorTrackingSymbolSetsBulkFinishUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
