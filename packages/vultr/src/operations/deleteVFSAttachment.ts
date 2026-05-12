import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteVFSAttachmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vfs_id: Schema.String.pipe(T.PathParam()),
    vps_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/vfs/{vfs_id}/attachments/{vps_id}" }),
  );
export type DeleteVFSAttachmentInput = typeof DeleteVFSAttachmentInput.Type;

// Output Schema
export const DeleteVFSAttachmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVFSAttachmentOutput = typeof DeleteVFSAttachmentOutput.Type;

// The operation
/**
 * Delete VFS Attachment
 *
 * Detach a VPS instance from a VFS subscription
 *
 * @param vfs_id - ID of the VFS subscription
 * @param vps_id - ID of the VPS subscription to attach
 */
export const deleteVFSAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVFSAttachmentInput,
  outputSchema: DeleteVFSAttachmentOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
