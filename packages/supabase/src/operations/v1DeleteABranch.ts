import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1DeleteABranchInput {
  branch_id_or_ref: string;
  force?: boolean;
}
export const V1DeleteABranchInput = /*@__PURE__*/ Schema.Struct({
  branch_id_or_ref: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/branches/{branch_id_or_ref}" }),
) as unknown as Schema.Codec<V1DeleteABranchInput>;

// Output Schema
export interface V1DeleteABranchOutput {
  message: "ok";
}
export const V1DeleteABranchOutput = /*@__PURE__*/ Schema.Struct({
  message: Schema.Literals(["ok"]),
}) as unknown as Schema.Codec<V1DeleteABranchOutput>;

// The operation
/**
 * Delete a database branch
 *
 * Deletes the specified database branch. By default, deletes immediately. Use force=false to schedule deletion with 1-hour grace period (only when soft deletion is enabled).
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 * @param force - If set to false, schedule deletion with 1-hour grace period (only when soft deletion is enabled).
 */
export const v1DeleteABranch = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteABranchInput,
  outputSchema: V1DeleteABranchOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
