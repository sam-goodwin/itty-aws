import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingReleasesPartialUpdateInput {
  id: string;
  project_id: string;
  version?: string | null;
  project?: string | null;
  hash_id?: string | null;
  metadata?: Record<string, unknown> | null;
}
export const ErrorTrackingReleasesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.NullOr(Schema.String)),
    project: Schema.optional(Schema.NullOr(Schema.String)),
    hash_id: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/error_tracking/releases/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingReleasesPartialUpdateInput>;

// Output Schema
export type ErrorTrackingReleasesPartialUpdateOutput = void;
export const ErrorTrackingReleasesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ErrorTrackingReleasesPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingReleasesPartialUpdateInput,
    outputSchema: ErrorTrackingReleasesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
