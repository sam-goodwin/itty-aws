import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ErrorTrackingSymbolSetsBulkStartUploadCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    ref: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    last_used: Schema.optional(Schema.NullOr(Schema.String)),
    storage_ptr: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/bulk_start_upload/",
    }),
  );
export type ErrorTrackingSymbolSetsBulkStartUploadCreateInput =
  typeof ErrorTrackingSymbolSetsBulkStartUploadCreateInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsBulkStartUploadCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingSymbolSetsBulkStartUploadCreateOutput =
  typeof ErrorTrackingSymbolSetsBulkStartUploadCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsBulkStartUploadCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsBulkStartUploadCreateInput,
    outputSchema: ErrorTrackingSymbolSetsBulkStartUploadCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
