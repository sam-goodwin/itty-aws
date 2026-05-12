import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateSshKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sshKeyId: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  ssh_key: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/ssh-keys/{sshKeyId}" }));
export type UpdateSshKeyInput = typeof UpdateSshKeyInput.Type;

// Output Schema
export const UpdateSshKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateSshKeyOutput = typeof UpdateSshKeyOutput.Type;

// The operation
/**
 * Update SSH Key
 *
 * Update an SSH Key. The attributes `name` and `ssh_key` are optional. If not set, the attributes will retain their original values. New deployments will use the updated key, but this action does not update previously deployed instances.
 *
 * @param sshKeyId - The [SSH Key id](#operation/list-ssh-keys).
 */
export const updateSshKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateSshKeyInput,
  outputSchema: UpdateSshKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
