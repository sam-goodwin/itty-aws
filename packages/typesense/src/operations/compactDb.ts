import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CompactDbInput {}
export const CompactDbInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/operations/db/compact" }),
) as unknown as Schema.Codec<CompactDbInput>;

// Output Schema
export interface CompactDbOutput {
  success: boolean;
}
export const CompactDbOutput = /*@__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
}) as unknown as Schema.Codec<CompactDbOutput>;

// The operation
/**
 * Compacting the on-disk database
 *
 * Typesense uses RocksDB to store your documents on the disk. If you do frequent writes or updates, you could benefit from running a compaction of the underlying RocksDB database. This could reduce the size of the database and decrease read latency. While the database will not block during this operation, we recommend running it during off-peak hours.
 */
export const compactDb = /*@__PURE__*/ API.make(() => ({
  inputSchema: CompactDbInput,
  outputSchema: CompactDbOutput,
}));
