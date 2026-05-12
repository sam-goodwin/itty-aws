import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetSshKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sshKeyId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/ssh-keys/{sshKeyId}" }));
export type GetSshKeyInput = typeof GetSshKeyInput.Type;

// Output Schema
export const GetSshKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ssh_key: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      ssh_key: Schema.optional(Schema.String),
    }),
  ),
});
export type GetSshKeyOutput = typeof GetSshKeyOutput.Type;

// The operation
/**
 * Get SSH Key
 *
 * Get information about an SSH Key.
 *
 * @param sshKeyId - The [SSH Key id](#operation/list-ssh-keys).
 */
export const getSshKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetSshKeyInput,
  outputSchema: GetSshKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
