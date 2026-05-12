import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const GetVFSAttachmentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vfs_id: Schema.String.pipe(T.PathParam()),
  vps_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/vfs/{vfs_id}/attachments/{vps_id}" }));
export type GetVFSAttachmentInput = typeof GetVFSAttachmentInput.Type;

// Output Schema
export const GetVFSAttachmentOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    state: Schema.optional(Schema.String),
    vfs_id: Schema.optional(Schema.String),
    target_id: Schema.optional(Schema.String),
    mount_tag: Schema.optional(Schema.Number),
  },
);
export type GetVFSAttachmentOutput = typeof GetVFSAttachmentOutput.Type;

// The operation
/**
 * Get VFS Attachment
 *
 * Retrieve details about a specific VFS-VPS attachment
 *
 * @param vfs_id - ID of the VFS subscription
 * @param vps_id - ID of the VPS subscription to attach
 */
export const getVFSAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetVFSAttachmentInput,
  outputSchema: GetVFSAttachmentOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
