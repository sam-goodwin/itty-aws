import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ScheduleVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  time: Schema.String,
  requested_status: Schema.Literals([
    "approved",
    "archived",
    "unlisted",
    "private",
    "draft",
  ]),
}).pipe(T.Http({ method: "POST", path: "/version/{id}/schedule" }));
export type ScheduleVersionInput = typeof ScheduleVersionInput.Type;

// Output Schema
export const ScheduleVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScheduleVersionOutput = typeof ScheduleVersionOutput.Type;

// The operation
/**
 * Schedule a version
 *
 * @param id - The ID of the version
 */
export const scheduleVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScheduleVersionInput,
  outputSchema: ScheduleVersionOutput,
  errors: [BadRequest] as const,
}));
