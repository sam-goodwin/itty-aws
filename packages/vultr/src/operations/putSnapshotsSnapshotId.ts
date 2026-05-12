import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PutSnapshotsSnapshotIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotId: Schema.String.pipe(T.PathParam()),
    description: Schema.String,
  }).pipe(T.Http({ method: "PUT", path: "/snapshots/{snapshotId}" }));
export type PutSnapshotsSnapshotIdInput =
  typeof PutSnapshotsSnapshotIdInput.Type;

// Output Schema
export const PutSnapshotsSnapshotIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PutSnapshotsSnapshotIdOutput =
  typeof PutSnapshotsSnapshotIdOutput.Type;

// The operation
/**
 * Update Snapshot
 *
 * Update the description for a Snapshot.
 *
 * @param snapshotId - The [Snapshot id](#operation/list-snapshots).
 */
export const putSnapshotsSnapshotId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PutSnapshotsSnapshotIdInput,
    outputSchema: PutSnapshotsSnapshotIdOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
