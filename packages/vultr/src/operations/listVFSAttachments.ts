import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListVFSAttachmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vfs_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/vfs/{vfs_id}/attachments" }));
export type ListVFSAttachmentsInput = typeof ListVFSAttachmentsInput.Type;

// Output Schema
export const ListVFSAttachmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attachments: Schema.optional(
      Schema.Array(
        Schema.Struct({
          state: Schema.optional(Schema.String),
          vfs_id: Schema.optional(Schema.String),
          target_id: Schema.optional(Schema.String),
          mount_tag: Schema.optional(Schema.Number),
        }),
      ),
    ),
  });
export type ListVFSAttachmentsOutput = typeof ListVFSAttachmentsOutput.Type;

// The operation
/**
 * List VFS Attachments
 *
 * Retrieve a list of all attachments for a specific VFS subscription
 *
 * @param vfs_id - ID of the VFS subscription
 */
export const listVFSAttachments = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListVFSAttachmentsInput,
  outputSchema: ListVFSAttachmentsOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
