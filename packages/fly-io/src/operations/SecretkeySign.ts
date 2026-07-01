import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretkeySignInput {
  app_name: string;
  secret_name: string;
  min_version?: string;
  plaintext?: number[];
}
export const SecretkeySignInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  secret_name: Schema.String.pipe(T.PathParam()),
  min_version: Schema.optional(Schema.String),
  plaintext: Schema.optional(Schema.Array(Schema.Number)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/secretkeys/{secret_name}/sign",
  }),
) as unknown as Schema.Codec<SecretkeySignInput>;

// Output Schema
export interface SecretkeySignOutput {
  signature?: number[];
}
export const SecretkeySignOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signature: Schema.optional(Schema.Array(Schema.Number)),
}) as unknown as Schema.Codec<SecretkeySignOutput>;

// The operation
/**
 * Sign with a secret key
 *
 * @param app_name - Fly App Name
 * @param secret_name - Secret key name
 * @param min_version - Minimum secrets version to return. Returned when setting a new secret
 */
export const SecretkeySign = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretkeySignInput,
  outputSchema: SecretkeySignOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
