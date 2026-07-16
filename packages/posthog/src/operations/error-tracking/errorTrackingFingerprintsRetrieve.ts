import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingFingerprintsRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingFingerprintsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/fingerprints/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingFingerprintsRetrieveInput>;

// Output Schema
export interface ErrorTrackingFingerprintsRetrieveOutput {
  id?: string;
  fingerprint?: string;
  issue_id?: string;
  created_at?: string;
}
export const ErrorTrackingFingerprintsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    issue_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ErrorTrackingFingerprintsRetrieveOutput>;

// The operation
/**
 *
 * @param id - Fingerprint ID.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingFingerprintsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingFingerprintsRetrieveInput,
    outputSchema: ErrorTrackingFingerprintsRetrieveOutput,
  }));
