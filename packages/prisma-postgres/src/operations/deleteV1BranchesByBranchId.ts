import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface DeleteV1BranchesByBranchIdInput {
  branchId: string;
}
export const DeleteV1BranchesByBranchIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branchId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/branches/{branchId}" }),
  ) as unknown as Schema.Codec<DeleteV1BranchesByBranchIdInput>;

// Output Schema
export type DeleteV1BranchesByBranchIdOutput = void;
export const DeleteV1BranchesByBranchIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteV1BranchesByBranchIdOutput>;

// The operation
/**
 * Soft-delete a branch
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Soft-deletes a Branch (sets deletedAt). Refuses if the Branch is the Project's current default, the Project's production Branch, or has live members.
 */
export const deleteV1BranchesByBranchId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteV1BranchesByBranchIdInput,
    outputSchema: DeleteV1BranchesByBranchIdOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
