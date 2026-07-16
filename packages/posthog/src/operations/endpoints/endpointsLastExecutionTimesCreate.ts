import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsLastExecutionTimesCreateInput {
  project_id: string;
  names?: string[];
}
export const EndpointsLastExecutionTimesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    names: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/endpoints/last_execution_times/",
    }),
  ) as unknown as Schema.Codec<EndpointsLastExecutionTimesCreateInput>;

// Output Schema
export interface EndpointsLastExecutionTimesCreateOutput {
  query_status?: {
    complete?: boolean | null;
    dashboard_id?: number | null;
    end_time?: string | null;
    error?: boolean | null;
    error_message?: string | null;
    expiration_time?: string | null;
    id?: string;
    insight_id?: number | null;
    labels?: string[] | null;
    pickup_time?: string | null;
    query_async?: boolean;
    query_progress?: {
      active_cpu_time?: number;
      bytes_read?: number;
      estimated_rows_total?: number;
      rows_read?: number;
      time_elapsed?: number;
    } | null;
    results?: unknown;
    start_time?: string | null;
    task_id?: string | null;
    team_id?: number;
  };
}
export const EndpointsLastExecutionTimesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    query_status: Schema.optional(
      Schema.Struct({
        complete: Schema.optional(Schema.NullOr(Schema.Boolean)),
        dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
        end_time: Schema.optional(Schema.NullOr(Schema.String)),
        error: Schema.optional(Schema.NullOr(Schema.Boolean)),
        error_message: Schema.optional(Schema.NullOr(Schema.String)),
        expiration_time: Schema.optional(Schema.NullOr(Schema.String)),
        id: Schema.optional(Schema.String),
        insight_id: Schema.optional(Schema.NullOr(Schema.Number)),
        labels: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
        pickup_time: Schema.optional(Schema.NullOr(Schema.String)),
        query_async: Schema.optional(Schema.Boolean),
        query_progress: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              active_cpu_time: Schema.optional(Schema.Number),
              bytes_read: Schema.optional(Schema.Number),
              estimated_rows_total: Schema.optional(Schema.Number),
              rows_read: Schema.optional(Schema.Number),
              time_elapsed: Schema.optional(Schema.Number),
            }),
          ),
        ),
        results: Schema.optional(Schema.Unknown),
        start_time: Schema.optional(Schema.NullOr(Schema.String)),
        task_id: Schema.optional(Schema.NullOr(Schema.String)),
        team_id: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<EndpointsLastExecutionTimesCreateOutput>;

// The operation
/**
 * Get the most recent execution time per endpoint (endpoint-level). Timestamps are recorded by the run path for personal-API-key calls. For per-version usage, query the query_log table directly.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsLastExecutionTimesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EndpointsLastExecutionTimesCreateInput,
    outputSchema: EndpointsLastExecutionTimesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
