import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReportTypeListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tag/report_type" }));
export type ReportTypeListInput = typeof ReportTypeListInput.Type;

// Output Schema
export const ReportTypeListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.String,
);
export type ReportTypeListOutput = typeof ReportTypeListOutput.Type;

// The operation
/**
 * Get a list of report types
 *
 * Gets an array of valid report types
 */
export const reportTypeList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportTypeListInput,
  outputSchema: ReportTypeListOutput,
}));
