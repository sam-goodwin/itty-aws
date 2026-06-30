import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsBulkDeleteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/bulk_delete/",
    }),
  );
export type ErrorTrackingSymbolSetsBulkDeleteCreateInput =
  typeof ErrorTrackingSymbolSetsBulkDeleteCreateInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsBulkDeleteCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingSymbolSetsBulkDeleteCreateOutput =
  typeof ErrorTrackingSymbolSetsBulkDeleteCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsBulkDeleteCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsBulkDeleteCreateInput,
    outputSchema: ErrorTrackingSymbolSetsBulkDeleteCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
