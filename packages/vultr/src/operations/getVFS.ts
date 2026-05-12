import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GetVFSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vfs_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/vfs/{vfs_id}" }));
export type GetVFSInput = typeof GetVFSInput.Type;

// Output Schema
export const GetVFSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetVFSOutput = typeof GetVFSOutput.Type;

// The operation
/**
 * Get VFS
 *
 * Retrieve a specific VFS subscription by ID
 *
 * @param vfs_id - ID of the VFS subscription to retrieve
 */
export const getVFS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVFSInput,
  outputSchema: GetVFSOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
