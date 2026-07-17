import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface JumpWireWebDataVaultControllercreateInput {
  key_context: Record<string, string>;
  name: string;
  value: string;
}
export const JumpWireWebDataVaultControllercreateInput =
  /*@__PURE__*/ Schema.Struct({
    key_context: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    value: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/vault/v1/kv" }),
  ) as unknown as Schema.Codec<JumpWireWebDataVaultControllercreateInput>;

// Output Schema
export interface JumpWireWebDataVaultControllercreateOutput {
  context: Record<string, string>;
  environment_id: string;
  id: string;
  key_id: string;
  updated_at: string;
  updated_by: { id: string; name: string };
  version_id?: string | null;
}
export const JumpWireWebDataVaultControllercreateOutput =
  /*@__PURE__*/ Schema.Struct({
    context: Schema.Record(Schema.String, Schema.String),
    environment_id: Schema.String,
    id: Schema.String,
    key_id: Schema.String,
    updated_at: Schema.String,
    updated_by: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
    version_id: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<JumpWireWebDataVaultControllercreateOutput>;

// The operation
/**
 * Create an object
 *
 * Encrypt and store a new key-value object.
 */
export const JumpWireWebDataVaultControllercreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JumpWireWebDataVaultControllercreateInput,
    outputSchema: JumpWireWebDataVaultControllercreateOutput,
    errors: [BadRequest, Conflict, UnprocessableEntity] as const,
  }));
