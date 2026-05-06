import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateNeonAuthPhoneNumberPluginInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.Boolean,
    otp_expires_in: Schema.optional(Schema.Number),
    allowed_attempts: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone_number",
    }),
  );
export type UpdateNeonAuthPhoneNumberPluginInput =
  typeof UpdateNeonAuthPhoneNumberPluginInput.Type;

// Output Schema
export const UpdateNeonAuthPhoneNumberPluginOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    otp_expires_in: Schema.optional(Schema.Number),
    allowed_attempts: Schema.optional(Schema.Number),
  });
export type UpdateNeonAuthPhoneNumberPluginOutput =
  typeof UpdateNeonAuthPhoneNumberPluginOutput.Type;

// The operation
/**
 * Update phone number plugin configuration
 *
 * Updates the phone number plugin configuration for Neon Auth.
 * The phone number plugin enables phone-based OTP authentication.
 * OTP codes are delivered via the `send.otp` webhook event with `delivery_preference: "sms"`.
 * A webhook must be configured with the `send.otp` event enabled for SMS delivery to work.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthPhoneNumberPlugin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateNeonAuthPhoneNumberPluginInput,
    outputSchema: UpdateNeonAuthPhoneNumberPluginOutput,
  }));
