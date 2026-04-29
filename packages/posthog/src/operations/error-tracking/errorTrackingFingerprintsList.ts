import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingFingerprintsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/error_tracking/fingerprints/",
    }),
  );
export type ErrorTrackingFingerprintsListInput =
  typeof ErrorTrackingFingerprintsListInput.Type;

// Output Schema
export const ErrorTrackingFingerprintsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        fingerprint: Schema.String,
        issue_id: Schema.String,
        created_at: Schema.String,
      }),
    ),
  });
export type ErrorTrackingFingerprintsListOutput =
  typeof ErrorTrackingFingerprintsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingFingerprintsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingFingerprintsListInput,
    outputSchema: ErrorTrackingFingerprintsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
