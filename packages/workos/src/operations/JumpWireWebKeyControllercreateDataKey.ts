import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const JumpWireWebKeyControllercreateDataKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/vault/v1/keys/data-key" }));
export type JumpWireWebKeyControllercreateDataKeyInput =
  typeof JumpWireWebKeyControllercreateDataKeyInput.Type;

// Output Schema
export const JumpWireWebKeyControllercreateDataKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    data_key: Schema.String,
    encrypted_keys: Schema.String,
    id: Schema.String,
  });
export type JumpWireWebKeyControllercreateDataKeyOutput =
  typeof JumpWireWebKeyControllercreateDataKeyOutput.Type;

// The operation
/**
 * Create a data key
 *
 * Generate an isolated encryption key for local encryption operations.
 */
export const JumpWireWebKeyControllercreateDataKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebKeyControllercreateDataKeyInput,
    outputSchema: JumpWireWebKeyControllercreateDataKeyOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
