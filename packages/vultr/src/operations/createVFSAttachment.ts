import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const CreateVFSAttachmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vfs_id: Schema.String.pipe(T.PathParam()),
    vps_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/vfs/{vfs_id}/attachments/{vps_id}" }),
  );
export type CreateVFSAttachmentInput = typeof CreateVFSAttachmentInput.Type;

// Output Schema
export const CreateVFSAttachmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    vfs_id: Schema.optional(Schema.String),
    target_id: Schema.optional(Schema.String),
    mount_tag: Schema.optional(Schema.Number),
  });
export type CreateVFSAttachmentOutput = typeof CreateVFSAttachmentOutput.Type;

// The operation
/**
 * Attach VPS Instance to VFS
 *
 * Attach a VPS instance to a VFS subscription
 *
 * @param vfs_id - ID of the VFS subscription
 * @param vps_id - ID of the VPS subscription to attach
 */
export const createVFSAttachment = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateVFSAttachmentInput,
  outputSchema: CreateVFSAttachmentOutput,
  errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
}));
