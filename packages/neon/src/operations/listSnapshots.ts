import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListSnapshotsInput {
  project_id: string;
}
export const ListSnapshotsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/projects/{project_id}/snapshots" }),
) as unknown as Schema.Codec<ListSnapshotsInput>;

// Output Schema
export interface ListSnapshotsOutput {
  snapshots: {
    id: string;
    name: string;
    lsn?: string;
    timestamp?: string;
    source_branch_id?: string;
    created_at: string;
    expires_at?: string;
    manual?: boolean;
    full_size?: number;
    diff_size?: number;
  }[];
}
export const ListSnapshotsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshots: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      lsn: Schema.optional(Schema.String),
      timestamp: Schema.optional(Schema.String),
      source_branch_id: Schema.optional(Schema.String),
      created_at: Schema.String,
      expires_at: Schema.optional(Schema.String),
      manual: Schema.optional(Schema.Boolean),
      full_size: Schema.optional(Schema.Number),
      diff_size: Schema.optional(Schema.Number),
    }),
  ),
}) as unknown as Schema.Codec<ListSnapshotsOutput>;

// The operation
/**
 * List project snapshots
 *
 * Lists the snapshots for the specified project.
 * Each snapshot represents a point-in-time backup of the project data.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 */
export const listSnapshots = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListSnapshotsInput,
  outputSchema: ListSnapshotsOutput,
}));
