import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/schedules/",
    }),
  );
export type HogFlowsSchedulesListInput = typeof HogFlowsSchedulesListInput.Type;

// Output Schema
export const HogFlowsSchedulesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        rrule: Schema.String,
        starts_at: Schema.String,
        timezone: Schema.optional(Schema.String),
        variables: Schema.optional(Schema.Unknown),
        status: Schema.Literals(["active", "paused", "completed"]),
        next_run_at: Schema.NullOr(Schema.String),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  });
export type HogFlowsSchedulesListOutput =
  typeof HogFlowsSchedulesListOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsSchedulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsSchedulesListInput,
    outputSchema: HogFlowsSchedulesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
