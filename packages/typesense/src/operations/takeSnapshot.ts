import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface TakeSnapshotInput {
  snapshot_path: string;
}
export const TakeSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot_path: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/operations/snapshot" }),
) as unknown as Schema.Codec<TakeSnapshotInput>;

// Output Schema
export interface TakeSnapshotOutput {
  success: boolean;
}
export const TakeSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
}) as unknown as Schema.Codec<TakeSnapshotOutput>;

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
