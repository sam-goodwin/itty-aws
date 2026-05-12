import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteBlockSnapshotInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/blocks/snapshots/{snapshotId}" }));
export type DeleteBlockSnapshotInput = typeof DeleteBlockSnapshotInput.Type;

// Output Schema
export const DeleteBlockSnapshotOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteBlockSnapshotOutput = typeof DeleteBlockSnapshotOutput.Type;

// The operation
/**
 * Delete Block Storage Snapshot
 *
 * Delete Block Storage Snapshot.
 *
 * @param snapshotId - The [Block Storage snapshot id](#operation/list-block-snapshots).
 */
export const deleteBlockSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBlockSnapshotInput,
  outputSchema: DeleteBlockSnapshotOutput,
  errors: [BadRequest, NotFound] as const,
}));
