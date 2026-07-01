import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GenerateTypescriptTypesInput {
  ref: string;
  included_schemas?: string;
}
export const V1GenerateTypescriptTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    included_schemas: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/types/typescript" }),
  ) as unknown as Schema.Codec<V1GenerateTypescriptTypesInput>;

// Output Schema
export interface V1GenerateTypescriptTypesOutput {
  types: string;
}
export const V1GenerateTypescriptTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    types: Schema.String,
  }) as unknown as Schema.Codec<V1GenerateTypescriptTypesOutput>;

// The operation
/**
 * Generate TypeScript types
 *
 * Returns the TypeScript types of your schema for use with supabase-js.
 *
 * @param ref - Project ref
 */
export const v1GenerateTypescriptTypes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GenerateTypescriptTypesInput,
    outputSchema: V1GenerateTypescriptTypesOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
