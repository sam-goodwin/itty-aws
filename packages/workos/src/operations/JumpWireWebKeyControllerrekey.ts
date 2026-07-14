import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface JumpWireWebKeyControllerrekeyInput {
  context: Record<string, string>;
  encrypted_keys: string;
}
export const JumpWireWebKeyControllerrekeyInput =
  /*@__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    encrypted_keys: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/vault/v1/keys/rekey" }),
  ) as unknown as Schema.Codec<JumpWireWebKeyControllerrekeyInput>;

// Output Schema
export interface JumpWireWebKeyControllerrekeyOutput {
  context: Record<string, string>;
  data_key: string;
  encrypted_keys: string;
  id: string;
}
export const JumpWireWebKeyControllerrekeyOutput =
  /*@__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    data_key: Schema.String,
    encrypted_keys: Schema.String,
    id: Schema.String,
  }) as unknown as Schema.Codec<JumpWireWebKeyControllerrekeyOutput>;

// The operation
/**
 * Re-encrypt a data key
 *
 * Decrypt an existing data key and re-encrypt it under a new key context.
 */
export const JumpWireWebKeyControllerrekey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebKeyControllerrekeyInput,
    outputSchema: JumpWireWebKeyControllerrekeyOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
