import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsBulkDeleteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    last_used: Schema.optional(Schema.NullOr(Schema.String)),
    storage_ptr: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
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
