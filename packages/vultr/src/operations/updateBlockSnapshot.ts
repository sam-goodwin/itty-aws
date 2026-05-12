import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateBlockSnapshotInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotId: Schema.String.pipe(T.PathParam()),
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "PUT", path: "/blocks/snapshots/{snapshotId}" }));
export type UpdateBlockSnapshotInput = typeof UpdateBlockSnapshotInput.Type;

// Output Schema
export const UpdateBlockSnapshotOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateBlockSnapshotOutput = typeof UpdateBlockSnapshotOutput.Type;

// The operation
/**
 * Update Block Storage Snapshot
 *
 * Update information for Block Storage Snapshot.
 *
 * @param snapshotId - The [Block Storage snapshot id](#operation/list-block-snapshots).
 */
export const updateBlockSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateBlockSnapshotInput,
  outputSchema: UpdateBlockSnapshotOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
