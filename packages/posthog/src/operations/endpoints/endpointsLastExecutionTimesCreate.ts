import * as Schema from "effect/Schema";
import { QueryStatusSchema } from "./_schemas.ts";
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
    query_status: Schema.optional(Schema.suspend(() => QueryStatusSchema)),
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
