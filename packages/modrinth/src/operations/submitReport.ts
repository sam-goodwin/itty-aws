import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const SubmitReportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  report_type: Schema.String,
  item_id: Schema.String,
  item_type: Schema.Literals(["project", "user", "version"]),
  body: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/report" }));
export type SubmitReportInput = typeof SubmitReportInput.Type;

// Output Schema
export const SubmitReportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  report_type: Schema.String,
  item_id: Schema.String,
  item_type: Schema.Literals(["project", "user", "version"]),
  body: Schema.String,
  id: Schema.optional(Schema.String),
  reporter: Schema.String,
  created: Schema.String,
  closed: Schema.Boolean,
  thread_id: Schema.String,
});
export type SubmitReportOutput = typeof SubmitReportOutput.Type;

// The operation
/**
 * Report a project, user, or version
 *
 * Bring a project, user, or version to the attention of the moderators by reporting it.
 */
export const submitReport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubmitReportInput,
  outputSchema: SubmitReportOutput,
  errors: [BadRequest] as const,
}));
