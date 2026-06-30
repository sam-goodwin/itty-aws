import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingReleasesHashRetrieveInput {
  hash_id: string;
  project_id: string;
}
export const ErrorTrackingReleasesHashRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hash_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/releases/hash/{hash_id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingReleasesHashRetrieveInput>;

// Output Schema
export type ErrorTrackingReleasesHashRetrieveOutput = void;
export const ErrorTrackingReleasesHashRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingReleasesHashRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesHashRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingReleasesHashRetrieveInput,
    outputSchema: ErrorTrackingReleasesHashRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
