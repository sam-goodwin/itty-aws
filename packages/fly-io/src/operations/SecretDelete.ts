import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretDeleteInput {
  app_name: string;
  secret_name: string;
}
export const SecretDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  secret_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/apps/{app_name}/secrets/{secret_name}" }),
) as unknown as Schema.Codec<SecretDeleteInput>;

// Output Schema
export interface SecretDeleteOutput {
  Version?: number;
  version?: number;
}
export const SecretDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  Version: Schema.optional(Schema.Number),
  version: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<SecretDeleteOutput>;

// The operation
/**
 * Delete an app secret
 *
 * @param app_name - Fly App Name
 * @param secret_name - App secret name
 */
export const SecretDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretDeleteInput,
  outputSchema: SecretDeleteOutput,
  errors: [Forbidden, NotFound] as const,
}));
