import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    ref: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    last_used: Schema.optional(Schema.NullOr(Schema.String)),
    storage_ptr: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/",
      contentType: "multipart",
    }),
  );
export type ErrorTrackingSymbolSetsUpdateInput =
  typeof ErrorTrackingSymbolSetsUpdateInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    ref: Schema.String,
    team_id: Schema.Number,
    created_at: Schema.String,
    last_used: Schema.optional(Schema.NullOr(Schema.String)),
    storage_ptr: Schema.optional(Schema.NullOr(Schema.String)),
    failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type ErrorTrackingSymbolSetsUpdateOutput =
  typeof ErrorTrackingSymbolSetsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking symbol set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsUpdateInput,
    outputSchema: ErrorTrackingSymbolSetsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
