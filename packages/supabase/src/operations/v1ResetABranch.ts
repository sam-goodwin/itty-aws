import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";
import { BadRequest, Forbidden, NotFound } from "../errors";

// Input Schema
export const V1ResetABranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  branch_id_or_ref: Schema.String.pipe(T.PathParam()),
  migration_version: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/v1/branches/{branch_id_or_ref}/reset" }),
);
export type V1ResetABranchInput = typeof V1ResetABranchInput.Type;

// Output Schema
export const V1ResetABranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workflow_run_id: Schema.String,
  message: Schema.Literals(["ok"]),
});
export type V1ResetABranchOutput = typeof V1ResetABranchOutput.Type;

// The operation
/**
 * Resets a database branch
 *
 * Resets the specified database branch
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 */
export const v1ResetABranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ResetABranchInput,
  outputSchema: V1ResetABranchOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
