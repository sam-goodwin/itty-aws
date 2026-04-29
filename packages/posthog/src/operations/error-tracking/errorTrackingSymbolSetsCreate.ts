import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsCreateInput =
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
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/",
      contentType: "multipart",
    }),
  );
export type ErrorTrackingSymbolSetsCreateInput =
  typeof ErrorTrackingSymbolSetsCreateInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsCreateOutput =
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
export type ErrorTrackingSymbolSetsCreateOutput =
  typeof ErrorTrackingSymbolSetsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsCreateInput,
    outputSchema: ErrorTrackingSymbolSetsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
