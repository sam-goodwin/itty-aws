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
export const DeleteVFSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vfs_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/vfs/{vfs_id}" }));
export type DeleteVFSInput = typeof DeleteVFSInput.Type;

// Output Schema
export const DeleteVFSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVFSOutput = typeof DeleteVFSOutput.Type;

// The operation
/**
 * Delete VFS
 *
 * Delete a specific VFS subscription by ID
 *
 * @param vfs_id - ID of the VFS subscription to retrieve
 */
export const deleteVFS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVFSInput,
  outputSchema: DeleteVFSOutput,
  errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
}));
