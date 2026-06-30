import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsLastExecutionTimesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    names: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/endpoints/last_execution_times/",
    }),
  );
export type EndpointsLastExecutionTimesCreateInput =
  typeof EndpointsLastExecutionTimesCreateInput.Type;

// Output Schema
export const EndpointsLastExecutionTimesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query_status: Schema.optional(
      Schema.Struct({
        complete: Schema.optional(Schema.Unknown),
        dashboard_id: Schema.optional(Schema.Unknown),
        end_time: Schema.optional(Schema.Unknown),
        error: Schema.optional(Schema.Unknown),
        error_message: Schema.optional(Schema.Unknown),
        expiration_time: Schema.optional(Schema.Unknown),
        id: Schema.optional(Schema.String),
        insight_id: Schema.optional(Schema.Unknown),
        labels: Schema.optional(Schema.Unknown),
        pickup_time: Schema.optional(Schema.Unknown),
        query_async: Schema.optional(Schema.Boolean),
        query_progress: Schema.optional(Schema.Unknown),
        results: Schema.optional(Schema.Unknown),
        start_time: Schema.optional(Schema.Unknown),
        task_id: Schema.optional(Schema.Unknown),
        team_id: Schema.optional(Schema.Number),
      }),
    ),
  });
export type EndpointsLastExecutionTimesCreateOutput =
  typeof EndpointsLastExecutionTimesCreateOutput.Type;

// The operation
/**
 * Get the most recent execution time per endpoint (endpoint-level). Timestamps are recorded by the run path for personal-API-key calls. For per-version usage, query the query_log table directly.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsLastExecutionTimesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsLastExecutionTimesCreateInput,
    outputSchema: EndpointsLastExecutionTimesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
