import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/",
    }),
  );
export type ErrorTrackingSymbolSetsListInput =
  typeof ErrorTrackingSymbolSetsListInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        ref: Schema.String,
        team_id: Schema.Number,
        created_at: Schema.String,
        last_used: Schema.optional(Schema.NullOr(Schema.String)),
        storage_ptr: Schema.optional(Schema.NullOr(Schema.String)),
        failure_reason: Schema.optional(Schema.NullOr(Schema.String)),
        release: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  });
export type ErrorTrackingSymbolSetsListOutput =
  typeof ErrorTrackingSymbolSetsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingSymbolSetsListInput,
    outputSchema: ErrorTrackingSymbolSetsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
