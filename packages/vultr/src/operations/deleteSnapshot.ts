import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshotId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/snapshots/{snapshotId}" }));
export type DeleteSnapshotInput = typeof DeleteSnapshotInput.Type;

// Output Schema
export const DeleteSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteSnapshotOutput = typeof DeleteSnapshotOutput.Type;

// The operation
/**
 * Delete Snapshot
 *
 * Delete a Snapshot.
 *
 * @param snapshotId - The [Snapshot id](#operation/list-snapshots).
 */
export const deleteSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteSnapshotInput,
  outputSchema: DeleteSnapshotOutput,
  errors: [BadRequest, NotFound] as const,
}));
