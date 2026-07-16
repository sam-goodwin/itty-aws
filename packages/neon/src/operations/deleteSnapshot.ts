import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteSnapshotInput {
  project_id: string;
  snapshot_id: string;
}
export const DeleteSnapshotInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  snapshot_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/projects/{project_id}/snapshots/{snapshot_id}",
  }),
) as unknown as Schema.Codec<DeleteSnapshotInput>;

// Output Schema
export type DeleteSnapshotOutput = void;
export const DeleteSnapshotOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteSnapshotOutput>;

// The operation
/**
 * Delete snapshot
 *
 * Deletes the specified snapshot.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param snapshot_id - The snapshot ID
 */
export const deleteSnapshot = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteSnapshotInput,
  outputSchema: DeleteSnapshotOutput,
}));
