import * as Schema from "effect/Schema";
import { OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const FinalizeRestoreBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/finalize_restore",
    }),
  );
export type FinalizeRestoreBranchInput = typeof FinalizeRestoreBranchInput.Type;

// Output Schema
export const FinalizeRestoreBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type FinalizeRestoreBranchOutput =
  typeof FinalizeRestoreBranchOutput.Type;

// The operation
/**
 * Finalize restore
 *
 * Finalize the restore operation for a branch created from a snapshot.
 * This operation updates the branch so it functions as the original branch it replaced.
 * This includes:
 * - Reassigning any computes from the original branch to the restored branch (this will restart the computes)
 * - Renaming the restored branch to the original branch's name
 * - Renaming the original branch so it no longer uses the original name
 * This operation only applies to branches created using the `restoreSnapshot` endpoint with `finalize_restore: false`.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const finalizeRestoreBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FinalizeRestoreBranchInput,
    outputSchema: FinalizeRestoreBranchOutput,
  }),
);
