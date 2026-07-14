import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateNeonAuthPhoneNumberPluginInput {
  project_id: string;
  branch_id: string;
  enabled?: boolean;
  otp_expires_in?: number;
}
export const UpdateNeonAuthPhoneNumberPluginInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    enabled: Schema.optional(Schema.Boolean),
    otp_expires_in: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone-number",
    }),
  ) as unknown as Schema.Codec<UpdateNeonAuthPhoneNumberPluginInput>;

// Output Schema
export interface UpdateNeonAuthPhoneNumberPluginOutput {
  enabled: boolean;
  otp_expires_in?: number;
}
export const UpdateNeonAuthPhoneNumberPluginOutput =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    otp_expires_in: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<UpdateNeonAuthPhoneNumberPluginOutput>;

// The operation
/**
 * Update phone number plugin configuration
 *
 * Updates the phone number plugin configuration for Neon Auth.
 * Only the fields provided in the request body are updated; omitted fields retain their current values.
 * The phone number plugin enables phone-based OTP authentication.
 * OTP codes are delivered via the `send.otp` webhook event with `delivery_preference: "sms"`.
 * A webhook must be configured with the `send.otp` event enabled for SMS delivery to work.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const updateNeonAuthPhoneNumberPlugin =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UpdateNeonAuthPhoneNumberPluginInput,
    outputSchema: UpdateNeonAuthPhoneNumberPluginOutput,
  }));
