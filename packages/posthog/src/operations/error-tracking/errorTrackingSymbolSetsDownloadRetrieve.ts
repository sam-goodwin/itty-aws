import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingSymbolSetsDownloadRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingSymbolSetsDownloadRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/symbol_sets/{id}/download/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSymbolSetsDownloadRetrieveInput>;

// Output Schema
export interface ErrorTrackingSymbolSetsDownloadRetrieveOutput {
  url?: string;
}
export const ErrorTrackingSymbolSetsDownloadRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ErrorTrackingSymbolSetsDownloadRetrieveOutput>;

// The operation
/**
 * Return a presigned URL for downloading the symbol set's source map.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSymbolSetsDownloadRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSymbolSetsDownloadRetrieveInput,
    outputSchema: ErrorTrackingSymbolSetsDownloadRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
