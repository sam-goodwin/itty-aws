import * as Schema from "effect/Schema";
import { SnapshotSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  snapshot_id: Schema.String.pipe(T.PathParam()),
  snapshot: Schema.Struct({
    name: Schema.optional(Schema.String),
  }),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/projects/{project_id}/snapshots/{snapshot_id}",
  }),
);
export type UpdateSnapshotInput = typeof UpdateSnapshotInput.Type;

// Output Schema
export const UpdateSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot: Schema.suspend(() => SnapshotSchema),
});
export type UpdateSnapshotOutput = typeof UpdateSnapshotOutput.Type;

// The operation
/**
 * Update snapshot
 *
 * Update the specified snapshot.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param snapshot_id - The snapshot ID
 */
export const updateSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateSnapshotInput,
  outputSchema: UpdateSnapshotOutput,
}));
