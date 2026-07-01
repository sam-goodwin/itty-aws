import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingReleasesCreateInput {
  project_id: string;
  version: string;
  project: string;
  hash_id?: string | null;
  metadata?: Record<string, unknown> | null;
}
export const ErrorTrackingReleasesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    version: Schema.String,
    project: Schema.String,
    hash_id: Schema.optional(Schema.NullOr(Schema.String)),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/releases/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingReleasesCreateInput>;

// Output Schema
export interface ErrorTrackingReleasesCreateOutput {
  id?: string;
  hash_id?: string;
  team_id?: number;
  created_at?: string;
  metadata?: Record<string, unknown> | null;
  version?: string;
  project?: string;
}
export const ErrorTrackingReleasesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    hash_id: Schema.optional(Schema.String),
    team_id: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    version: Schema.optional(Schema.String),
    project: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ErrorTrackingReleasesCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingReleasesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ErrorTrackingReleasesCreateInput,
    outputSchema: ErrorTrackingReleasesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
