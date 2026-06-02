import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const PlatformCreateJWTTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    envOrInsID: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    claims: Schema.Unknown,
    lifetime: Schema.optional(Schema.NullOr(Schema.Number)),
    allowed_clock_skew: Schema.optional(Schema.NullOr(Schema.Number)),
    custom_signing_key: Schema.optional(Schema.Boolean),
    signing_algorithm: Schema.optional(Schema.NullOr(Schema.String)),
    signing_key: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/instances/{envOrInsID}/jwt_templates",
    }),
  );
export type PlatformCreateJWTTemplateInput =
  typeof PlatformCreateJWTTemplateInput.Type;

// Output Schema
export const PlatformCreateJWTTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["jwt_template"]),
    id: Schema.String,
    name: Schema.String,
    claims: Schema.Unknown,
    lifetime: Schema.Number,
    allowed_clock_skew: Schema.Number,
    custom_signing_key: Schema.Boolean,
    signing_algorithm: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type PlatformCreateJWTTemplateOutput =
  typeof PlatformCreateJWTTemplateOutput.Type;

// The operation
/**
 * Create a JWT template
 *
 * Create a new JWT template for an application instance.
 * Requires the `jwt_templates:manage` scope.
 *
 * @param applicationID - Application ID.
 * @param envOrInsID - Environment type (e.g., "development", "production") or instance ID.

 */
export const PlatformCreateJWTTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformCreateJWTTemplateInput,
    outputSchema: PlatformCreateJWTTemplateOutput,
    errors: [
      BadRequest,
      PaymentRequired,
      Forbidden,
      NotFound,
      UnprocessableEntity,
    ] as const,
  }),
);
