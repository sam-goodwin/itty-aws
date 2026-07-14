import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingReleasesRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingReleasesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/releases/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingReleasesRetrieveInput>;

// Output Schema
export interface ErrorTrackingReleasesRetrieveOutput {
  id?: string;
  hash_id?: string;
  team_id?: number;
  created_at?: string;
  metadata?: Record<string, unknown> | null;
  version?: string;
  project?: string;
}
export const ErrorTrackingReleasesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ErrorTrackingReleasesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingReleasesRetrieveInput,
    outputSchema: ErrorTrackingReleasesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
