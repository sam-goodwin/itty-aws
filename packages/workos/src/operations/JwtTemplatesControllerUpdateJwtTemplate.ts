import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const JwtTemplatesControllerUpdateJwtTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.String,
  }).pipe(T.Http({ method: "PUT", path: "/user_management/jwt_template" }));
export type JwtTemplatesControllerUpdateJwtTemplateInput =
  typeof JwtTemplatesControllerUpdateJwtTemplateInput.Type;

// Output Schema
export const JwtTemplatesControllerUpdateJwtTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    content: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type JwtTemplatesControllerUpdateJwtTemplateOutput =
  typeof JwtTemplatesControllerUpdateJwtTemplateOutput.Type;

// The operation
/**
 * Update JWT template
 *
 * Update the JWT template for the current environment.
 */
export const JwtTemplatesControllerUpdateJwtTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JwtTemplatesControllerUpdateJwtTemplateInput,
    outputSchema: JwtTemplatesControllerUpdateJwtTemplateOutput,
    errors: [UnprocessableEntity] as const,
  }));
