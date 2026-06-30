import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1RestoreABranchInput {
  branch_id_or_ref: string;
}
export const V1RestoreABranchInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  branch_id_or_ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "POST", path: "/v1/branches/{branch_id_or_ref}/restore" }),
) as unknown as Schema.Codec<V1RestoreABranchInput>;

// Output Schema
export interface V1RestoreABranchOutput {
  message: "Branch restoration initiated";
}
export const V1RestoreABranchOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    message: Schema.Literals(["Branch restoration initiated"]),
  },
) as unknown as Schema.Codec<V1RestoreABranchOutput>;

// The operation
/**
 * Restore a scheduled branch deletion
 *
 * Cancels scheduled deletion and restores the branch to active state
 *
 * @param branch_id_or_ref - Branch ref or deprecated branch ID
 */
export const v1RestoreABranch = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1RestoreABranchInput,
  outputSchema: V1RestoreABranchOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
