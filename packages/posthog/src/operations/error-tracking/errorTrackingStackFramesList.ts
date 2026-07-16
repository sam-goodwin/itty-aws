import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingStackFramesListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ErrorTrackingStackFramesListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/stack_frames/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingStackFramesListInput>;

// Output Schema
export interface ErrorTrackingStackFramesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const ErrorTrackingStackFramesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          raw_id: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          contents: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingStackFramesListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesListInput,
    outputSchema: ErrorTrackingStackFramesListOutput,
  }));
