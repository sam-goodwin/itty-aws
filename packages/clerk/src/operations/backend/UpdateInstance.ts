import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const UpdateInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  test_mode: Schema.optional(Schema.NullOr(Schema.Boolean)),
  hibp: Schema.optional(Schema.NullOr(Schema.Boolean)),
  support_email: Schema.optional(Schema.NullOr(Schema.String)),
  clerk_js_version: Schema.optional(Schema.NullOr(Schema.String)),
  development_origin: Schema.optional(Schema.NullOr(Schema.String)),
  allowed_origins: Schema.optional(Schema.Array(Schema.String)),
  cookieless_dev: Schema.optional(Schema.NullOr(Schema.Boolean)),
  url_based_session_syncing: Schema.optional(Schema.NullOr(Schema.Boolean)),
  preferred_sign_in_strategy_when_password_required: Schema.optional(
    Schema.NullOr(Schema.Literals(["password", "otp", ""])),
  ),
}).pipe(T.Http({ method: "PATCH", path: "/instance" }));
export type UpdateInstanceInput = typeof UpdateInstanceInput.Type;

// Output Schema
export const UpdateInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateInstanceOutput = typeof UpdateInstanceOutput.Type;

// The operation
/**
 * Update instance settings
 *
 * Updates the settings of an instance
 */
export const UpdateInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInstanceInput,
  outputSchema: UpdateInstanceOutput,
  errors: [UnprocessableEntity] as const,
}));
