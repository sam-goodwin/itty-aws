import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteSshKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sshKeyId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/ssh-keys/{sshKeyId}" }));
export type DeleteSshKeyInput = typeof DeleteSshKeyInput.Type;

// Output Schema
export const DeleteSshKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteSshKeyOutput = typeof DeleteSshKeyOutput.Type;

// The operation
/**
 * Delete SSH Key
 *
 * Delete an SSH Key.
 *
 * @param sshKeyId - The [SSH Key id](#operation/list-ssh-keys).
 */
export const deleteSshKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteSshKeyInput,
  outputSchema: DeleteSshKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
