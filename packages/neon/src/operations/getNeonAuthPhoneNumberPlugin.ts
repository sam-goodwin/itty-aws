import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetNeonAuthPhoneNumberPluginInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/branches/{branch_id}/auth/plugins/phone_number",
    }),
  );
export type GetNeonAuthPhoneNumberPluginInput =
  typeof GetNeonAuthPhoneNumberPluginInput.Type;

// Output Schema
export const GetNeonAuthPhoneNumberPluginOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    otp_expires_in: Schema.optional(Schema.Number),
    allowed_attempts: Schema.optional(Schema.Number),
  });
export type GetNeonAuthPhoneNumberPluginOutput =
  typeof GetNeonAuthPhoneNumberPluginOutput.Type;

// The operation
/**
 * Get phone number plugin configuration
 *
 * Returns the phone number plugin configuration for Neon Auth.
 * The phone number plugin enables phone-based OTP authentication.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The Neon branch ID
 */
export const getNeonAuthPhoneNumberPlugin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetNeonAuthPhoneNumberPluginInput,
    outputSchema: GetNeonAuthPhoneNumberPluginOutput,
  }));
