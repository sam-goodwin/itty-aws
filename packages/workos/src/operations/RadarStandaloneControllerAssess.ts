import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const RadarStandaloneControllerAssessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip_address: Schema.String,
    user_agent: Schema.String,
    email: Schema.String,
    auth_method: Schema.Literals([
      "Password",
      "Passkey",
      "Authenticator",
      "SMS_OTP",
      "Email_OTP",
      "Social",
      "SSO",
      "Other",
    ]),
    action: Schema.Literals([
      "login",
      "signup",
      "sign-up",
      "sign-in",
      "sign_up",
      "sign_in",
      "sign in",
      "sign up",
    ]),
    device_fingerprint: Schema.optional(Schema.String),
    bot_score: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/radar/attempts" }));
export type RadarStandaloneControllerAssessInput =
  typeof RadarStandaloneControllerAssessInput.Type;

// Output Schema
export const RadarStandaloneControllerAssessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verdict: Schema.Literals(["allow", "block", "challenge"]),
    reason: Schema.String,
    attempt_id: Schema.String,
    control: Schema.optional(
      Schema.Literals([
        "bot_detection",
        "brute_force_attack",
        "credential_stuffing",
        "domain_sign_up_rate_limit",
        "ip_sign_up_rate_limit",
        "impossible_travel",
        "repeat_sign_up",
        "stale_account",
        "unrecognized_device",
        "restriction",
      ]),
    ),
    blocklist_type: Schema.optional(
      Schema.Literals([
        "ip_address",
        "domain",
        "email",
        "device",
        "user_agent",
        "device_fingerprint",
        "country",
      ]),
    ),
  });
export type RadarStandaloneControllerAssessOutput =
  typeof RadarStandaloneControllerAssessOutput.Type;

// The operation
/**
 * Create an attempt
 *
 * Assess a request for risk using the Radar engine and receive a verdict.
 */
export const RadarStandaloneControllerAssess =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RadarStandaloneControllerAssessInput,
    outputSchema: RadarStandaloneControllerAssessOutput,
    errors: [BadRequest] as const,
  }));
