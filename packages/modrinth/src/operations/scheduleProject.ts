import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ScheduleProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_slug: Schema.String.pipe(T.PathParam()),
  time: Schema.String,
  requested_status: Schema.Literals([
    "approved",
    "archived",
    "unlisted",
    "private",
    "draft",
  ]),
}).pipe(T.Http({ method: "POST", path: "/project/{id_or_slug}/schedule" }));
export type ScheduleProjectInput = typeof ScheduleProjectInput.Type;

// Output Schema
export const ScheduleProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScheduleProjectOutput = typeof ScheduleProjectOutput.Type;

// The operation
/**
 * Schedule a project
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const scheduleProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScheduleProjectInput,
  outputSchema: ScheduleProjectOutput,
  errors: [BadRequest] as const,
}));
