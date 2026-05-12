import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateVFSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  label: Schema.String,
  storage_size: Schema.Struct({
    gb: Schema.Number,
  }),
  disk_type: Schema.optional(Schema.Literals(["nvme"])),
  tags: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/vfs" }));
export type CreateVFSInput = typeof CreateVFSInput.Type;

// Output Schema
export const CreateVFSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateVFSOutput = typeof CreateVFSOutput.Type;

// The operation
/**
 * Create VFS
 *
 * Create a new VFS subscription with the specified configuration
 */
export const createVFS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateVFSInput,
  outputSchema: CreateVFSOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
