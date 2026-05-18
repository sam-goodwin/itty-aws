import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetReportsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/reports" }));
export type GetReportsInput = typeof GetReportsInput.Type;

// Output Schema
export const GetReportsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    report_type: Schema.String,
    item_id: Schema.String,
    item_type: Schema.Literals(["project", "user", "version"]),
    body: Schema.String,
    id: Schema.optional(Schema.String),
    reporter: Schema.String,
    created: Schema.String,
    closed: Schema.Boolean,
    thread_id: Schema.String,
  }),
);
export type GetReportsOutput = typeof GetReportsOutput.Type;

// The operation
/**
 * Get multiple reports
 *
 * @param ids - The IDs of the reports
 */
export const getReports = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetReportsInput,
  outputSchema: GetReportsOutput,
  errors: [BadRequest, NotFound] as const,
}));
