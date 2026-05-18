import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetReportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/report/{id}" }));
export type GetReportInput = typeof GetReportInput.Type;

// Output Schema
export const GetReportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetReportOutput = typeof GetReportOutput.Type;

// The operation
/**
 * Get report from ID
 *
 * @param id - The ID of the report
 */
export const getReport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetReportInput,
  outputSchema: GetReportOutput,
  errors: [BadRequest, NotFound] as const,
}));
