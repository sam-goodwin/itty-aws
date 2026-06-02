import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const UpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema
export const UpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateOutput = typeof UpdateOutput.Type;

// The operation
/**
 * Update instance settings
 *
 * Updates the settings of an instance
 */
export const update = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [UnprocessableEntity] as const,
}));
