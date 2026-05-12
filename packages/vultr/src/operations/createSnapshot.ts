import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateSnapshotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instance_id: Schema.String,
  description: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/snapshots" }));
export type CreateSnapshotInput = typeof CreateSnapshotInput.Type;

// Output Schema
export const CreateSnapshotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateSnapshotOutput = typeof CreateSnapshotOutput.Type;

// The operation
/**
 * Create Snapshot
 *
 * Create a new Snapshot for `instance_id`.
 */
export const createSnapshot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSnapshotInput,
  outputSchema: CreateSnapshotOutput,
  errors: [BadRequest, NotFound] as const,
}));
