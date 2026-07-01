import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretkeyDecryptInput {
  app_name: string;
  secret_name: string;
  min_version?: string;
  associated_data?: number[];
  ciphertext?: number[];
}
export const SecretkeyDecryptInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  secret_name: Schema.String.pipe(T.PathParam()),
  min_version: Schema.optional(Schema.String),
  associated_data: Schema.optional(Schema.Array(Schema.Number)),
  ciphertext: Schema.optional(Schema.Array(Schema.Number)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/secretkeys/{secret_name}/decrypt",
  }),
) as unknown as Schema.Codec<SecretkeyDecryptInput>;

// Output Schema
export interface SecretkeyDecryptOutput {
  plaintext?: number[];
}
export const SecretkeyDecryptOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    plaintext: Schema.optional(Schema.Array(Schema.Number)),
  },
) as unknown as Schema.Codec<SecretkeyDecryptOutput>;

// The operation
/**
 * Decrypt with a secret key
 *
 * @param app_name - Fly App Name
 * @param secret_name - Secret key name
 * @param min_version - Minimum secrets version to return. Returned when setting a new secret
 */
export const SecretkeyDecrypt = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretkeyDecryptInput,
  outputSchema: SecretkeyDecryptOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
