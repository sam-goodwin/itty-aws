import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretkeyGenerateInput {
  app_name: string;
  secret_name: string;
  type?: string;
  value?: number[];
}
export const SecretkeyGenerateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    app_name: Schema.String.pipe(T.PathParam()),
    secret_name: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Array(Schema.Number)),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/secretkeys/{secret_name}/generate",
  }),
) as unknown as Schema.Codec<SecretkeyGenerateInput>;

// Output Schema
export interface SecretkeyGenerateOutput {
  Version?: number;
  created_at?: string;
  name?: string;
  public_key?: number[];
  type?: string;
  updated_at?: string;
  version?: number;
}
export const SecretkeyGenerateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    Version: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    public_key: Schema.optional(Schema.Array(Schema.Number)),
    type: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<SecretkeyGenerateOutput>;

// The operation
/**
 * Generate a random secret key
 *
 * @param app_name - Fly App Name
 * @param secret_name - Secret key name
 */
export const SecretkeyGenerate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretkeyGenerateInput,
  outputSchema: SecretkeyGenerateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
