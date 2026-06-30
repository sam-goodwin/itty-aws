import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const JumpWireWebKeyControllerdecryptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/vault/v1/keys/decrypt" }));
export type JumpWireWebKeyControllerdecryptInput =
  typeof JumpWireWebKeyControllerdecryptInput.Type;

// Output Schema
export const JumpWireWebKeyControllerdecryptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data_key: Schema.String,
    id: Schema.String,
  });
export type JumpWireWebKeyControllerdecryptOutput =
  typeof JumpWireWebKeyControllerdecryptOutput.Type;

// The operation
/**
 * Decrypt a data key
 *
 * Decrypt a previously encrypted data key from WorkOS Vault.
 */
export const JumpWireWebKeyControllerdecrypt =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebKeyControllerdecryptInput,
    outputSchema: JumpWireWebKeyControllerdecryptOutput,
    errors: [BadRequest] as const,
  }));
