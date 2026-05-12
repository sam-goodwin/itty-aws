import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateSshKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  ssh_key: Schema.String,
}).pipe(T.Http({ method: "POST", path: "/ssh-keys" }));
export type CreateSshKeyInput = typeof CreateSshKeyInput.Type;

// Output Schema
export const CreateSshKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ssh_key: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      ssh_key: Schema.optional(Schema.String),
    }),
  ),
});
export type CreateSshKeyOutput = typeof CreateSshKeyOutput.Type;

// The operation
/**
 * Create SSH key
 *
 * Create a new SSH Key for use with future instances. This does not update any running instances.
 */
export const createSshKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSshKeyInput,
  outputSchema: CreateSshKeyOutput,
  errors: [BadRequest] as const,
}));
