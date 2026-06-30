import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface SecretsUpdateInput {
  app_name: string;
  values?: Record<string, string>;
}
export const SecretsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  values: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/apps/{app_name}/secrets" }),
) as unknown as Schema.Codec<SecretsUpdateInput>;

// Output Schema
export interface SecretsUpdateOutput {
  Version?: number;
  secrets?: {
    created_at?: string;
    digest?: string;
    name?: string;
    updated_at?: string;
    value?: string;
  }[];
  version?: number;
}
export const SecretsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  Version: Schema.optional(Schema.Number),
  secrets: Schema.optional(
    Schema.Array(
      Schema.Struct({
        created_at: Schema.optional(Schema.String),
        digest: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        value: Schema.optional(Schema.String),
      }),
    ),
  ),
  version: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<SecretsUpdateOutput>;

// The operation
/**
 * Update app secrets belonging to an app
 *
 * @param app_name - Fly App Name
 */
export const SecretsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsUpdateInput,
  outputSchema: SecretsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
