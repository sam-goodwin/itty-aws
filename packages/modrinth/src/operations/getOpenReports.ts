import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetOpenReportsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/report" }));
export type GetOpenReportsInput = typeof GetOpenReportsInput.Type;

// Output Schema
export const GetOpenReportsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
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
export type GetOpenReportsOutput = typeof GetOpenReportsOutput.Type;

// The operation
/**
 * Get your open reports
 */
export const getOpenReports = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOpenReportsInput,
  outputSchema: GetOpenReportsOutput,
  errors: [NotFound] as const,
}));
