import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface JumpWireWebKeyControllercreateDataKeyInput {
  context: Record<string, string>;
}
export const JumpWireWebKeyControllercreateDataKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/vault/v1/keys/data-key" }),
  ) as unknown as Schema.Codec<JumpWireWebKeyControllercreateDataKeyInput>;

// Output Schema
export interface JumpWireWebKeyControllercreateDataKeyOutput {
  context: Record<string, string>;
  data_key: string;
  encrypted_keys: string;
  id: string;
}
export const JumpWireWebKeyControllercreateDataKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    data_key: Schema.String,
    encrypted_keys: Schema.String,
    id: Schema.String,
  }) as unknown as Schema.Codec<JumpWireWebKeyControllercreateDataKeyOutput>;

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
