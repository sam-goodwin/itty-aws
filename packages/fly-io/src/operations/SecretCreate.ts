import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretCreateInput {
  app_name: string;
  secret_name: string;
  value?: string;
}
export const SecretCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  secret_name: Schema.String.pipe(T.PathParam()),
  value: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/apps/{app_name}/secrets/{secret_name}" }),
) as unknown as Schema.Codec<SecretCreateInput>;

// Output Schema
export interface SecretCreateOutput {
  Version?: number;
  created_at?: string;
  digest?: string;
  name?: string;
  updated_at?: string;
  value?: string;
  version?: number;
}
export const SecretCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  Version: Schema.optional(Schema.Number),
  created_at: Schema.optional(Schema.String),
  digest: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<SecretCreateOutput>;

// The operation
/**
 * Create or update Secret
 *
 * @param app_name - Fly App Name
 * @param secret_name - App secret name
 */
export const SecretCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretCreateInput,
  outputSchema: SecretCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
