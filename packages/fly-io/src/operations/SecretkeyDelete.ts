import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretkeyDeleteInput {
  app_name: string;
  secret_name: string;
}
export const SecretkeyDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  secret_name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/apps/{app_name}/secretkeys/{secret_name}",
  }),
) as unknown as Schema.Codec<SecretkeyDeleteInput>;

// Output Schema
export interface SecretkeyDeleteOutput {
  Version?: number;
  version?: number;
}
export const SecretkeyDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  Version: Schema.optional(Schema.Number),
  version: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<SecretkeyDeleteOutput>;

// The operation
/**
 * Delete an app's secret key
 *
 * @param app_name - Fly App Name
 * @param secret_name - Secret key name
 */
export const SecretkeyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretkeyDeleteInput,
  outputSchema: SecretkeyDeleteOutput,
  errors: [Forbidden, NotFound] as const,
}));
