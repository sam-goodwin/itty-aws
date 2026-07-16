import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingStackFramesBatchGetCreateInput {
  project_id: string;
  raw_ids: string[];
  symbol_set?: string | null;
}
export const ErrorTrackingStackFramesBatchGetCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    raw_ids: Schema.Array(Schema.String),
    symbol_set: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/stack_frames/batch_get/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingStackFramesBatchGetCreateInput>;

// Output Schema
export interface ErrorTrackingStackFramesBatchGetCreateOutput {
  results: {
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
export const ErrorTrackingStackFramesBatchGetCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingStackFramesBatchGetCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingStackFramesBatchGetCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingStackFramesBatchGetCreateInput,
    outputSchema: ErrorTrackingStackFramesBatchGetCreateOutput,
  }));
