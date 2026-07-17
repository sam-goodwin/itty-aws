import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface RadarStandaloneControllerAssessInput {
  ip_address: string;
  user_agent: string;
  email: string;
  auth_method:
    | "Password"
    | "Passkey"
    | "Authenticator"
    | "SMS_OTP"
    | "Email_OTP"
    | "Social"
    | "SSO"
    | "Other";
  action: "sign-up" | "sign-in";
  signals_id?: string;
}
export const RadarStandaloneControllerAssessInput =
  /*@__PURE__*/ Schema.Struct({
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
    action: Schema.Literals(["sign-up", "sign-in"]),
    signals_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/radar/attempts" }),
  ) as unknown as Schema.Codec<RadarStandaloneControllerAssessInput>;

// Output Schema
export interface RadarStandaloneControllerAssessOutput {
  verdict?: "allow" | "block" | "challenge";
  reason?: string;
  attempt_id?: string;
  control?:
    | "bot_detection"
    | "brute_force_attack"
    | "impossible_travel"
    | "repeat_sign_up"
    | "stale_account"
    | "unrecognized_device"
    | "restriction";
  blocklist_type?:
    | "ip_address"
    | "domain"
    | "email"
    | "device"
    | "user_agent"
    | "device_fingerprint"
    | "country";
}
export const RadarStandaloneControllerAssessOutput =
  /*@__PURE__*/ Schema.Struct({
    verdict: Schema.optional(Schema.Literals(["allow", "block", "challenge"])),
    reason: Schema.optional(Schema.String),
    attempt_id: Schema.optional(Schema.String),
    control: Schema.optional(
      Schema.Literals([
        "bot_detection",
        "brute_force_attack",
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
  }) as unknown as Schema.Codec<RadarStandaloneControllerAssessOutput>;

// The operation
/**
 * Create an attempt
 *
 * Assess a request for risk using the Radar engine and receive a verdict.
 */
export const RadarStandaloneControllerAssess =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RadarStandaloneControllerAssessInput,
    outputSchema: RadarStandaloneControllerAssessOutput,
    errors: [BadRequest] as const,
  }));
