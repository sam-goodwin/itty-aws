import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ModifyReportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  body: Schema.optional(Schema.String),
  closed: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "PATCH", path: "/report/{id}" }));
export type ModifyReportInput = typeof ModifyReportInput.Type;

// Output Schema
export const ModifyReportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ModifyReportOutput = typeof ModifyReportOutput.Type;

// The operation
/**
 * Modify a report
 *
 * @param id - The ID of the report
 */
export const modifyReport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModifyReportInput,
  outputSchema: ModifyReportOutput,
  errors: [BadRequest, NotFound] as const,
}));
