import * as Schema from "effect/Schema";
import { SnapshotSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListSnapshotsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/projects/{project_id}/snapshots" }));
export type ListSnapshotsInput = typeof ListSnapshotsInput.Type;

// Output Schema
export const ListSnapshotsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshots: Schema.Array(Schema.suspend(() => SnapshotSchema)),
});
export type ListSnapshotsOutput = typeof ListSnapshotsOutput.Type;

// The operation
/**
 * List project snapshots
 *
 * List the snapshots for the specified project.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 */
export const listSnapshots = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSnapshotsInput,
  outputSchema: ListSnapshotsOutput,
}));
