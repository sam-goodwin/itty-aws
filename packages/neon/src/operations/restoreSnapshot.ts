import * as Schema from "effect/Schema";
import { BranchSchema, EndpointSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RestoreSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  snapshot_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  target_branch_id: Schema.optional(Schema.String),
  finalize_restore: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/projects/{project_id}/snapshots/{snapshot_id}/restore",
  }),
);
export type RestoreSnapshotInput = typeof RestoreSnapshotInput.Type;

// Output Schema
export const RestoreSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  branch: Schema.suspend(() => BranchSchema),
  endpoints: Schema.optional(
    Schema.Array(Schema.suspend(() => EndpointSchema)),
  ),
  operations: Schema.Array(Schema.suspend(() => OperationSchema)),
});
export type RestoreSnapshotOutput = typeof RestoreSnapshotOutput.Type;

// The operation
/**
 * Restore snapshot
 *
 * Restore the specified snapshot to a new branch and optionally finalize the restore operation.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param snapshot_id - The snapshot ID
 * @param name - DEPRECATED. Use the `name` field in the request body instead.
A name for the newly restored branch. If omitted, a default name will be generated.

 */
export const restoreSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RestoreSnapshotInput,
  outputSchema: RestoreSnapshotOutput,
}));
