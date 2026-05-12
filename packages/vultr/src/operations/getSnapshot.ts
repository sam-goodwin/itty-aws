import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshotId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/snapshots/{snapshotId}" }));
export type GetSnapshotInput = typeof GetSnapshotInput.Type;

// Output Schema
export const GetSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  snapshot: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      size: Schema.optional(Schema.Number),
      status: Schema.optional(Schema.String),
      os_id: Schema.optional(Schema.Number),
      app_id: Schema.optional(Schema.Number),
    }),
  ),
});
export type GetSnapshotOutput = typeof GetSnapshotOutput.Type;

// The operation
/**
 * Get Snapshot
 *
 * Get information about a Snapshot.
 *
 * @param snapshotId - The [Snapshot id](#operation/list-snapshots).
 */
export const getSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSnapshotInput,
  outputSchema: GetSnapshotOutput,
  errors: [BadRequest, NotFound] as const,
}));
