import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface JumpWireWebKeyControllerdecryptInput {
  keys: string;
}
export const JumpWireWebKeyControllerdecryptInput =
  /*@__PURE__*/ Schema.Struct({
    keys: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/vault/v1/keys/decrypt" }),
  ) as unknown as Schema.Codec<JumpWireWebKeyControllerdecryptInput>;

// Output Schema
export interface JumpWireWebKeyControllerdecryptOutput {
  data_key: string;
  id: string;
}
export const JumpWireWebKeyControllerdecryptOutput =
  /*@__PURE__*/ Schema.Struct({
    data_key: Schema.String,
    id: Schema.String,
  }) as unknown as Schema.Codec<JumpWireWebKeyControllerdecryptOutput>;

// The operation
/**
 * Decrypt a data key
 *
 * Decrypt a previously encrypted data key from WorkOS Vault.
 */
export const JumpWireWebKeyControllerdecrypt =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebKeyControllerdecryptInput,
    outputSchema: JumpWireWebKeyControllerdecryptOutput,
    errors: [BadRequest] as const,
  }));
