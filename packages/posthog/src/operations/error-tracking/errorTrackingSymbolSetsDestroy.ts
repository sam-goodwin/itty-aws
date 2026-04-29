import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/",
    }),
  );
export type ErrorTrackingSymbolSetsDestroyInput =
  typeof ErrorTrackingSymbolSetsDestroyInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ErrorTrackingSymbolSetsDestroyOutput =
  typeof ErrorTrackingSymbolSetsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this error tracking symbol set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsDestroyInput,
    outputSchema: ErrorTrackingSymbolSetsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
