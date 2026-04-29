import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/",
      contentType: "multipart",
    }),
  );
export type ErrorTrackingSymbolSetsPartialUpdateInput =
  typeof ErrorTrackingSymbolSetsPartialUpdateInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsPartialUpdateOutput =
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
export type ErrorTrackingSymbolSetsPartialUpdateOutput =
  typeof ErrorTrackingSymbolSetsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking symbol set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsPartialUpdateInput,
    outputSchema: ErrorTrackingSymbolSetsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
