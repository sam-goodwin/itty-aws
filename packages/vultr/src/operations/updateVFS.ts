import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateVFSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  storage_size: Schema.optional(
    Schema.Struct({
      gb: Schema.Number,
    }),
  ),
}).pipe(T.Http({ method: "PUT", path: "/vfs/{vfs_id}" }));
export type UpdateVFSInput = typeof UpdateVFSInput.Type;

// Output Schema
export const UpdateVFSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  date_created: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.String)),
  disk_type: Schema.optional(Schema.Literals(["nvme"])),
  storage_size: Schema.optional(
    Schema.Struct({
      bytes: Schema.optional(Schema.Number),
      gb: Schema.optional(Schema.Number),
    }),
  ),
  storage_used: Schema.optional(
    Schema.Struct({
      bytes: Schema.optional(Schema.Number),
      gb: Schema.optional(Schema.Number),
    }),
  ),
  billing: Schema.optional(
    Schema.Struct({
      charges: Schema.optional(Schema.Number),
      monthly: Schema.optional(Schema.Number),
    }),
  ),
});
export type UpdateVFSOutput = typeof UpdateVFSOutput.Type;

// The operation
/**
 * Update VFS
 *
 * Update a VFS subscription's label or storage size
 */
export const updateVFS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateVFSInput,
  outputSchema: UpdateVFSOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
