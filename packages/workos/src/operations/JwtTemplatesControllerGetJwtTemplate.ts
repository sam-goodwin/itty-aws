import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const JwtTemplatesControllerGetJwtTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/user_management/jwt_template" }),
  );
export type JwtTemplatesControllerGetJwtTemplateInput =
  typeof JwtTemplatesControllerGetJwtTemplateInput.Type;

// Output Schema
export const JwtTemplatesControllerGetJwtTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    content: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type JwtTemplatesControllerGetJwtTemplateOutput =
  typeof JwtTemplatesControllerGetJwtTemplateOutput.Type;

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
