import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface JwtTemplatesControllerGetJwtTemplateInput {}
export const JwtTemplatesControllerGetJwtTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/user_management/jwt_template" }),
  ) as unknown as Schema.Codec<JwtTemplatesControllerGetJwtTemplateInput>;

// Output Schema
export interface JwtTemplatesControllerGetJwtTemplateOutput {
  object: string;
  content: string;
  created_at: string;
  updated_at: string;
}
export const JwtTemplatesControllerGetJwtTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    content: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<JwtTemplatesControllerGetJwtTemplateOutput>;

// The operation
/**
 * Get JWT template
 *
 * Get the JWT template for the current environment.
 */
export const JwtTemplatesControllerGetJwtTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JwtTemplatesControllerGetJwtTemplateInput,
    outputSchema: JwtTemplatesControllerGetJwtTemplateOutput,
    errors: [NotFound] as const,
  }));
