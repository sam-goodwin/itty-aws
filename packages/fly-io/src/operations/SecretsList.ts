import * as Schema from "effect/Schema";
import { AppSecretSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const SecretsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  min_version: Schema.optional(Schema.String),
  show_secrets: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/apps/{app_name}/secrets" }));
export type SecretsListInput = typeof SecretsListInput.Type;

// Output Schema
export const SecretsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secrets: Schema.optional(Schema.Array(Schema.suspend(() => AppSecretSchema))),
});
export type SecretsListOutput = typeof SecretsListOutput.Type;

// The operation
/**
 * List app secrets belonging to an app
 *
 * @param app_name - Fly App Name
 * @param min_version - Minimum secrets version to return. Returned when setting a new secret
 * @param show_secrets - Show the secret values.
 */
export const SecretsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsListInput,
  outputSchema: SecretsListOutput,
  errors: [Forbidden, NotFound] as const,
}));
