import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsSchedulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    rrule: Schema.optional(Schema.String),
    starts_at: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Unknown),
    status: Schema.optional(Schema.Literals(["active", "paused", "completed"])),
    next_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_flows/{id}/schedules/",
    }),
  );
export type HogFlowsSchedulesCreateInput =
  typeof HogFlowsSchedulesCreateInput.Type;

// Output Schema
export const HogFlowsSchedulesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    rrule: Schema.optional(Schema.String),
    starts_at: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Unknown),
    status: Schema.optional(Schema.Literals(["active", "paused", "completed"])),
    next_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type HogFlowsSchedulesCreateOutput =
  typeof HogFlowsSchedulesCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsSchedulesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsSchedulesCreateInput,
    outputSchema: HogFlowsSchedulesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
