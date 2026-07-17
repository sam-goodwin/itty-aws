import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingStackFramesRetrieveInput {
  id: string;
  project_id: string;
}
export const ErrorTrackingStackFramesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/stack_frames/{id}/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingStackFramesRetrieveInput>;

// Output Schema
export interface ErrorTrackingStackFramesRetrieveOutput {
  id?: string;
  raw_id?: string;
  created_at?: string;
  contents?: Record<string, unknown>;
  resolved?: boolean;
  context?: Record<string, unknown> | null;
  symbol_set_ref?: string | null;
  release?: {
    id?: string;
    hash_id?: string;
    team_id?: number;
    created_at?: string;
    metadata?: Record<string, unknown> | null;
    version?: string;
    project?: string;
  } | null;
}
export const ErrorTrackingStackFramesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    raw_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    contents: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    resolved: Schema.optional(Schema.Boolean),
    context: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    symbol_set_ref: Schema.optional(Schema.NullOr(Schema.String)),
    release: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          hash_id: Schema.optional(Schema.String),
          team_id: Schema.optional(Schema.Number),
          created_at: Schema.optional(Schema.String),
          metadata: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          version: Schema.optional(Schema.String),
          project: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingStackFramesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesRetrieveInput,
    outputSchema: ErrorTrackingStackFramesRetrieveOutput,
  }));
