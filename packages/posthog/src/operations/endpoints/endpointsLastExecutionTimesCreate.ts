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
        query_async: Schema.optional(Schema.Literals(["true"])),
        query_progress: Schema.optional(
          Schema.Struct({
            active_cpu_time: Schema.optional(Schema.Number),
            bytes_read: Schema.optional(Schema.Number),
            estimated_rows_total: Schema.optional(Schema.Number),
            rows_read: Schema.optional(Schema.Number),
            time_elapsed: Schema.optional(Schema.Number),
          }),
        ),
        results: Schema.optional(Schema.NullOr(Schema.Unknown)),
        start_time: Schema.optional(Schema.NullOr(Schema.String)),
        task_id: Schema.optional(Schema.NullOr(Schema.String)),
        team_id: Schema.optional(Schema.Number),
      }),
    ),
  });
export type EndpointsLastExecutionTimesCreateOutput =
  typeof EndpointsLastExecutionTimesCreateOutput.Type;

// The operation
/**
 * Get the last execution times in the past 6 months for multiple endpoints.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsLastExecutionTimesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EndpointsLastExecutionTimesCreateInput,
    outputSchema: EndpointsLastExecutionTimesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
