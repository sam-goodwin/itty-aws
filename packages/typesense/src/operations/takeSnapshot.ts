import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const TakeSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot_path: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/operations/snapshot" }));
export type TakeSnapshotInput = typeof TakeSnapshotInput.Type;

// Output Schema
export const TakeSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
});
export type TakeSnapshotOutput = typeof TakeSnapshotOutput.Type;

// The operation
/**
 * Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory.
 *
 * Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory. You can then backup the snapshot directory that gets created and later restore it as a data directory, as needed.
 *
 * @param snapshot_path - The directory on the server where the snapshot should be saved.
 */
export const takeSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TakeSnapshotInput,
  outputSchema: TakeSnapshotOutput,
}));
