import * as Schema from "effect/Schema";
import { OperationSchema, SnapshotSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  branch_id: Schema.String.pipe(T.PathParam()),
  lsn: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  expires_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/projects/{project_id}/branches/{branch_id}/snapshot",
  }),
);
export type CreateSnapshotInput = typeof CreateSnapshotInput.Type;

// Output Schema
export const CreateSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot: Schema.suspend(() => SnapshotSchema),
  operations: Schema.Array(Schema.suspend(() => OperationSchema)),
});
export type CreateSnapshotOutput = typeof CreateSnapshotOutput.Type;

// The operation
/**
 * Create snapshot
 *
 * Create a snapshot from the specified branch using the provided parameters.
 * This endpoint may initiate an asynchronous operation.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 * @param lsn - The target Log Sequence Number (LSN) to take the snapshot from.
Must fall within the restore window. Cannot be used with `timestamp`

 * @param timestamp - The target timestamp for the snapshot. Must fall within the restore window.
Use ISO 8601 format (e.g. 2025-08-05T22:00:00Z). Cannot be used with `lsn`.

 * @param name - A name for the snapshot.
 * @param expires_at - The time at which the snapshot will be automatically deleted.
Use ISO 8601 format (e.g. 2025-08-05T22:00:00Z).

 */
export const createSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSnapshotInput,
  outputSchema: CreateSnapshotOutput,
}));
