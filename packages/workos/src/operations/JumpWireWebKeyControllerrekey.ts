import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const JumpWireWebKeyControllerrekeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    encrypted_keys: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/vault/v1/keys/rekey" }));
export type JumpWireWebKeyControllerrekeyInput =
  typeof JumpWireWebKeyControllerrekeyInput.Type;

// Output Schema
export const JumpWireWebKeyControllerrekeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    data_key: Schema.String,
    encrypted_keys: Schema.String,
    id: Schema.String,
  });
export type JumpWireWebKeyControllerrekeyOutput =
  typeof JumpWireWebKeyControllerrekeyOutput.Type;

// The operation
/**
 * Re-encrypt a data key
 *
 * Decrypt an existing data key and re-encrypt it under a new key context.
 */
export const JumpWireWebKeyControllerrekey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebKeyControllerrekeyInput,
    outputSchema: JumpWireWebKeyControllerrekeyOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
