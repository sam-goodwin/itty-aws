import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1MergeABranchInput {
  branch_id_or_ref: string;
  migration_version?: string;
}
export const V1MergeABranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  branch_id_or_ref: Schema.String.pipe(T.PathParam()),
  migration_version: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/v1/branches/{branch_id_or_ref}/merge" }),
) as unknown as Schema.Codec<V1MergeABranchInput>;

// Output Schema
export interface V1MergeABranchOutput {
  workflow_run_id: string;
  message: "ok";
}
export const V1MergeABranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workflow_run_id: Schema.String,
  message: Schema.Literals(["ok"]),
}) as unknown as Schema.Codec<V1MergeABranchOutput>;

// The operation
/**
 * Merges a database branch
 *
 * Merges the specified database branch
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 */
export const v1MergeABranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1MergeABranchInput,
  outputSchema: V1MergeABranchOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
