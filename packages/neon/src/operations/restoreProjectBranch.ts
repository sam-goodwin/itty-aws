import * as Schema from "effect/Schema";
import { BranchSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RestoreProjectBranchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    source_branch_id: Schema.String,
    source_lsn: Schema.optional(Schema.String),
    source_timestamp: Schema.optional(Schema.String),
    preserve_under_name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branches/{branch_id}/restore",
    }),
  );
export type RestoreProjectBranchInput = typeof RestoreProjectBranchInput.Type;

// Output Schema
export const RestoreProjectBranchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.suspend(() => BranchSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type RestoreProjectBranchOutput = typeof RestoreProjectBranchOutput.Type;

// The operation
/**
 * Restore branch
 *
 * Restores a branch to an earlier state in its own or another branch's history
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const restoreProjectBranch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RestoreProjectBranchInput,
    outputSchema: RestoreProjectBranchOutput,
    errors: [NotFound] as const,
  }),
);
