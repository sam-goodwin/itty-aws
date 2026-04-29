import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingSymbolSetsDownloadRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/download/",
    }),
  );
export type ErrorTrackingSymbolSetsDownloadRetrieveInput =
  typeof ErrorTrackingSymbolSetsDownloadRetrieveInput.Type;

// Output Schema
export const ErrorTrackingSymbolSetsDownloadRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export type ErrorTrackingSymbolSetsDownloadRetrieveOutput =
  typeof ErrorTrackingSymbolSetsDownloadRetrieveOutput.Type;

// The operation
/**
 * Return a presigned URL for downloading the symbol set's source map.
 *
 * @param id - A UUID string identifying this error tracking symbol set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsDownloadRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsDownloadRetrieveInput,
    outputSchema: ErrorTrackingSymbolSetsDownloadRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
