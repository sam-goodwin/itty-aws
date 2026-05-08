// ==========================================================================
// Identity Toolkit API (identitytoolkit v2)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "identitytoolkit",
  version: "v2",
  rootUrl: "https://identitytoolkit.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo {
  /** An opaque string that represents the enrollment session. */
  sessionInfo?: string;
}

export const GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionInfo: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo",
  });

export interface GoogleCloudIdentitytoolkitV2StartMfaSignInResponse {
  /** MultiFactor sign-in session information specific to SMS-type second factors. Along with the one-time code retrieved from the sent SMS, the contents of this session information should be passed to FinalizeMfaSignIn to complete the sign in. */
  phoneResponseInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
}

export const GoogleCloudIdentitytoolkitV2StartMfaSignInResponse: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaSignInResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneResponseInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaSignInResponse",
  });

export interface GoogleCloudIdentitytoolkitAdminV2AllowlistOnly {
  /** Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json */
  allowedRegions?: ReadonlyArray<string>;
}

export const GoogleCloudIdentitytoolkitAdminV2AllowlistOnly: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2AllowlistOnly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2AllowlistOnly" });

export interface GoogleCloudIdentitytoolkitAdminV2AllowByDefault {
  /** Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json */
  disallowedRegions?: ReadonlyArray<string>;
}

export const GoogleCloudIdentitytoolkitAdminV2AllowByDefault: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2AllowByDefault> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disallowedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2AllowByDefault",
  });

export interface GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig {
  /** A policy of only allowing regions by explicitly adding them to an allowlist. */
  allowlistOnly?: GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
  /** A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list. */
  allowByDefault?: GoogleCloudIdentitytoolkitAdminV2AllowByDefault;
}

export const GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowlistOnly: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2AllowlistOnly,
    ),
    allowByDefault: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2AllowByDefault,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo {
  /** An opaque string that represents the enrollment session. */
  sessionInfo?: string;
  /** User-entered verification code. */
  verificationCode?: string;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionInfo: Schema.optional(Schema.String),
    verificationCode: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo {
  /** An opaque string that represents the enrollment session. */
  sessionInfo?: string;
  /** Required if Android verification proof is presented. */
  phoneNumber?: string;
  /** User-entered verification code. */
  code?: string;
  /** Android only. Uses for "instant" phone number verification though GmsCore. */
  androidVerificationProof?: string;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionInfo: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    androidVerificationProof: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest {
  /** Display name which is entered by users to distinguish between different second factors with same type or different type. */
  displayName?: string;
  /** Required. ID token. */
  idToken?: string;
  /** Verification information for TOTP. */
  totpVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
  /** The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
  tenantId?: string;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    totpVerificationInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo,
    ),
    phoneVerificationInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo,
    ),
    tenantId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest",
  });

export interface GoogleCloudIdentitytoolkitAdminV2HashConfig {
  /** Output only. Non-printable character to be inserted between the salt and plain text password in base64. */
  saltSeparator?: string;
  /** Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field. */
  memoryCost?: number;
  /** Output only. Signer key in base64. */
  signerKey?: string;
  /** Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms. */
  rounds?: number;
  /** Output only. Different password hash algorithms used in Identity Toolkit. */
  algorithm?:
    | "HASH_ALGORITHM_UNSPECIFIED"
    | "HMAC_SHA256"
    | "HMAC_SHA1"
    | "HMAC_MD5"
    | "SCRYPT"
    | "PBKDF_SHA1"
    | "MD5"
    | "HMAC_SHA512"
    | "SHA1"
    | "BCRYPT"
    | "PBKDF2_SHA256"
    | "SHA256"
    | "SHA512"
    | "STANDARD_SCRYPT"
    | (string & {});
}

export const GoogleCloudIdentitytoolkitAdminV2HashConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2HashConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    saltSeparator: Schema.optional(Schema.String),
    memoryCost: Schema.optional(Schema.Number),
    signerKey: Schema.optional(Schema.String),
    rounds: Schema.optional(Schema.Number),
    algorithm: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2HashConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig {
  /** Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user's email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy. */
  enableImprovedEmailPrivacy?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableImprovedEmailPrivacy: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig {
  /** Open code in app domain to use for app links and universal links. */
  domain?:
    | "DOMAIN_UNSPECIFIED"
    | "FIREBASE_DYNAMIC_LINK_DOMAIN"
    | "HOSTING_DOMAIN"
    | (string & {});
}

export const GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule {
  /** The end score (inclusive) of the score range for an action. Must be a value between 0.0 and 1.0, at 11 discrete values; e.g. 0, 0.1, 0.2, 0.3, ... 0.9, 1.0. A score of 0.0 indicates the riskiest request (likely a bot), whereas 1.0 indicates the safest request (likely a human). See https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment. */
  endScore?: number;
  /** The action taken if the reCAPTCHA score of a request is within the interval [start_score, end_score]. */
  action?: "RECAPTCHA_ACTION_UNSPECIFIED" | "BLOCK" | (string & {});
}

export const GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endScore: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule",
  });

export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaKey {
  /** The client's platform type. */
  type?: "CLIENT_TYPE_UNSPECIFIED" | "WEB" | "IOS" | "ANDROID" | (string & {});
  /** The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}" */
  key?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2RecaptchaKey: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2RecaptchaKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2RecaptchaKey" });

export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaTollFraudManagedRule {
  /** The start score (inclusive) for an action. Must be a value between 0.0 and 1.0, at 11 discrete values; e.g. 0, 0.1, 0.2, 0.3, ... 0.9, 1.0. A score of 0.0 indicates the safest request (likely legitimate), whereas 1.0 indicates the riskiest request (likely toll fraud). See https://cloud.google.com/recaptcha-enterprise/docs/sms-fraud-detection#create-assessment-sms. */
  startScore?: number;
  /** The action taken if the reCAPTCHA score of a request is within the interval [start_score, end_score]. */
  action?: "RECAPTCHA_ACTION_UNSPECIFIED" | "BLOCK" | (string & {});
}

export const GoogleCloudIdentitytoolkitAdminV2RecaptchaTollFraudManagedRule: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2RecaptchaTollFraudManagedRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startScore: Schema.optional(Schema.Number),
    action: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitAdminV2RecaptchaTollFraudManagedRule",
  });

export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig {
  /** The managed rules for authentication action based on reCAPTCHA scores. The rules are shared across providers for a given tenant project. */
  managedRules?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule>;
  /** The reCAPTCHA keys. */
  recaptchaKeys?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2RecaptchaKey>;
  /** The managed rules for the authentication action based on reCAPTCHA toll fraud risk scores. Toll fraud managed rules will only take effect when the phone_enforcement_state is AUDIT or ENFORCE and use_sms_toll_fraud_protection is true. */
  tollFraudManagedRules?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2RecaptchaTollFraudManagedRule>;
  /** The reCAPTCHA config for email/password provider, containing the enforcement status. The email/password provider contains all email related user flows protected by reCAPTCHA. */
  emailPasswordEnforcementState?:
    | "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED"
    | "OFF"
    | "AUDIT"
    | "ENFORCE"
    | (string & {});
  /** Whether to use the account defender for reCAPTCHA assessment. Defaults to `false`. */
  useAccountDefender?: boolean;
  /** The reCAPTCHA config for phone provider, containing the enforcement status. The phone provider contains all SMS related user flows protected by reCAPTCHA. */
  phoneEnforcementState?:
    | "RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED"
    | "OFF"
    | "AUDIT"
    | "ENFORCE"
    | (string & {});
  /** Whether to use the rCE sms toll fraud protection risk score for reCAPTCHA phone provider. Can only be true when the phone_enforcement_state is AUDIT or ENFORCE. */
  useSmsTollFraudProtection?: boolean;
  /** Whether to use the rCE bot score for reCAPTCHA phone provider. Can only be true when the phone_enforcement_state is AUDIT or ENFORCE. */
  useSmsBotScore?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedRules: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule),
    ),
    recaptchaKeys: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2RecaptchaKey),
    ),
    tollFraudManagedRules: Schema.optional(
      Schema.Array(
        GoogleCloudIdentitytoolkitAdminV2RecaptchaTollFraudManagedRule,
      ),
    ),
    emailPasswordEnforcementState: Schema.optional(Schema.String),
    useAccountDefender: Schema.optional(Schema.Boolean),
    phoneEnforcementState: Schema.optional(Schema.String),
    useSmsTollFraudProtection: Schema.optional(Schema.Boolean),
    useSmsBotScore: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2Inheritance {
  /** Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations. */
  emailSendingConfig?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2Inheritance: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Inheritance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    emailSendingConfig: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Inheritance" });

export interface GoogleCloudIdentitytoolkitAdminV2RequestLogging {
  /** Whether logging is enabled for this project or not. */
  enabled?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2RequestLogging: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2RequestLogging> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2RequestLogging",
  });

export interface GoogleCloudIdentitytoolkitAdminV2MonitoringConfig {
  /** Configuration for logging requests made to this project to Stackdriver Logging */
  requestLogging?: GoogleCloudIdentitytoolkitAdminV2RequestLogging;
}

export const GoogleCloudIdentitytoolkitAdminV2MonitoringConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2MonitoringConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestLogging: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2RequestLogging,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2MonitoringConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig {
  /** The allowed number of adjacent intervals that will be used for verification to avoid clock skew. */
  adjacentIntervals?: number;
}

export const GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjacentIntervals: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ProviderConfig {
  /** TOTP MFA provider config for this project. */
  totpProviderConfig?: GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig;
  /** Describes the state of the MultiFactor Authentication type. */
  state?:
    | "MFA_STATE_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | "MANDATORY"
    | (string & {});
}

export const GoogleCloudIdentitytoolkitAdminV2ProviderConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ProviderConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totpProviderConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig,
    ),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2ProviderConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig {
  /** Whether MultiFactor Authentication has been enabled for this project. */
  state?:
    | "STATE_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | "MANDATORY"
    | (string & {});
  /** A list of usable second factors for this project. */
  enabledProviders?: ReadonlyArray<
    "PROVIDER_UNSPECIFIED" | "PHONE_SMS" | (string & {})
  >;
  /** A list of usable second factors for this project along with their configurations. This field does not support phone based MFA, for that use the 'enabled_providers' field. */
  providerConfigs?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2ProviderConfig>;
}

export const GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    enabledProviders: Schema.optional(Schema.Array(Schema.String)),
    providerConfigs: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2ProviderConfig),
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ClientPermissions {
  /** When true, end users cannot sign up for a new account on the associated project through any of our API methods */
  disabledUserSignup?: boolean;
  /** When true, end users cannot delete their account on the associated project through any of our API methods */
  disabledUserDeletion?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2ClientPermissions: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ClientPermissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabledUserSignup: Schema.optional(Schema.Boolean),
    disabledUserDeletion: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2ClientPermissions",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig {
  /** Configuration related to restricting a user's ability to affect their account. */
  permissions?: GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
}

export const GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2ClientPermissions,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions {
  /** The password must contain a non alpha numeric character. */
  containsNonAlphanumericCharacter?: boolean;
  /** Minimum password length. Range from 6 to 30 */
  minPasswordLength?: number;
  /** The password must contain a lower case character. */
  containsLowercaseCharacter?: boolean;
  /** The password must contain an upper case character. */
  containsUppercaseCharacter?: boolean;
  /** The password must contain a number. */
  containsNumericCharacter?: boolean;
  /** Maximum password length. No default max length */
  maxPasswordLength?: number;
}

export const GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containsNonAlphanumericCharacter: Schema.optional(Schema.Boolean),
    minPasswordLength: Schema.optional(Schema.Number),
    containsLowercaseCharacter: Schema.optional(Schema.Boolean),
    containsUppercaseCharacter: Schema.optional(Schema.Boolean),
    containsNumericCharacter: Schema.optional(Schema.Boolean),
    maxPasswordLength: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions",
  });

export interface GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion {
  /** Output only. schema version number for the password policy */
  schemaVersion?: number;
  /** The custom strength options enforced by the password policy. */
  customStrengthOptions?: GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions;
}

export const GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaVersion: Schema.optional(Schema.Number),
    customStrengthOptions: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion",
  });

export interface GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig {
  /** Must be of length 1. Contains the strength attributes for the password policy. */
  passwordPolicyVersions?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion>;
  /** Output only. The last time the password policy on the project was updated. */
  lastUpdateTime?: string;
  /** Which enforcement mode to use for the password policy. */
  passwordPolicyEnforcementState?:
    | "PASSWORD_POLICY_ENFORCEMENT_STATE_UNSPECIFIED"
    | "OFF"
    | "ENFORCE"
    | (string & {});
  /** Users must have a password compliant with the password policy to sign-in. */
  forceUpgradeOnSignin?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordPolicyVersions: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion),
    ),
    lastUpdateTime: Schema.optional(Schema.String),
    passwordPolicyEnforcementState: Schema.optional(Schema.String),
    forceUpgradeOnSignin: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2Tenant {
  /** Display name of the tenant. */
  displayName?: string;
  /** Output only. Hash config information of a tenant for display on Pantheon. This can only be displayed on Pantheon to avoid the sensitive information to get accidentally leaked. Only returned in GetTenant response to restrict reading of this information. Requires firebaseauth.configs.getHashConfig permission on the agent project for returning this field. */
  hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;
  /** Configures which regions are enabled for SMS verification code sending. */
  smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
  /** A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded). */
  testPhoneNumbers?: Record<string, string>;
  /** Whether to enable anonymous user authentication. */
  enableAnonymousUser?: boolean;
  /** Configuration for settings related to email privacy and public visibility. */
  emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;
  /** Optional. Deprecated. Never launched. Configuration for settings related to univeral links (iOS) and app links (Android). */
  mobileLinksConfig?: GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig;
  /** Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}" */
  name?: string;
  /** The tenant-level reCAPTCHA config. */
  recaptchaConfig?: GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig;
  /** Specify the settings that the tenant could inherit. */
  inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance;
  /** Configuration related to monitoring project activity. */
  monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
  /** The tenant-level configuration of MFA options. */
  mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
  /** Whether to allow email/password user authentication. */
  allowPasswordSignup?: boolean;
  /** Options related to how clients making requests on behalf of a project should be configured. */
  client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;
  /** Whether to enable email link user authentication. */
  enableEmailLinkSignin?: boolean;
  /** The tenant-level password policy config */
  passwordPolicyConfig?: GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig;
  /** Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users. */
  disableAuth?: boolean;
  /** Whether anonymous users will be auto-deleted after a period of 30 days. */
  autodeleteAnonymousUsers?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2Tenant: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Tenant> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    hashConfig: Schema.optional(GoogleCloudIdentitytoolkitAdminV2HashConfig),
    smsRegionConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig,
    ),
    testPhoneNumbers: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    enableAnonymousUser: Schema.optional(Schema.Boolean),
    emailPrivacyConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig,
    ),
    mobileLinksConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig,
    ),
    name: Schema.optional(Schema.String),
    recaptchaConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig,
    ),
    inheritance: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Inheritance),
    monitoring: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MonitoringConfig,
    ),
    mfaConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig,
    ),
    allowPasswordSignup: Schema.optional(Schema.Boolean),
    client: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig,
    ),
    enableEmailLinkSignin: Schema.optional(Schema.Boolean),
    passwordPolicyConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig,
    ),
    disableAuth: Schema.optional(Schema.Boolean),
    autodeleteAnonymousUsers: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Tenant" });

export interface GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse {
  /** A list of tenants under the given agent project. */
  tenants?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2Tenant>;
  /** The token to get the next page of results. */
  nextPageToken?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenants: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2Tenant),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse",
  });

export interface GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse {}

export const GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse",
  });

export interface GoogleCloudIdentitytoolkitAdminV2Smtp {
  /** SMTP relay username */
  username?: string;
  /** SMTP relay host */
  host?: string;
  /** Sender email for the SMTP relay */
  senderEmail?: string;
  /** SMTP security mode. */
  securityMode?:
    | "SECURITY_MODE_UNSPECIFIED"
    | "SSL"
    | "START_TLS"
    | (string & {});
  /** SMTP relay port */
  port?: number;
  /** SMTP relay password */
  password?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2Smtp: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Smtp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    senderEmail: Schema.optional(Schema.String),
    securityMode: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    password: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Smtp" });

export interface GoogleCloudIdentitytoolkitAdminV2DnsInfo {
  /** Output only. The timestamp of initial request for the current domain verification. */
  domainVerificationRequestTime?: string;
  /** Output only. The custom domain that's to be verified. */
  pendingCustomDomain?: string;
  /** Whether to use custom domain. */
  useCustomDomain?: boolean;
  /** Output only. The applied verified custom domain. */
  customDomain?: string;
  /** Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful. */
  customDomainState?:
    | "VERIFICATION_STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "IN_PROGRESS"
    | "FAILED"
    | "SUCCEEDED"
    | (string & {});
}

export const GoogleCloudIdentitytoolkitAdminV2DnsInfo: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2DnsInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainVerificationRequestTime: Schema.optional(Schema.String),
    pendingCustomDomain: Schema.optional(Schema.String),
    useCustomDomain: Schema.optional(Schema.Boolean),
    customDomain: Schema.optional(Schema.String),
    customDomainState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2DnsInfo" });

export interface GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo {
  /** User-entered verification code. */
  verificationCode?: string;
}

export const GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verificationCode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo",
  });

export interface GoogleCloudIdentitytoolkitAdminV2TemporaryQuota {
  /** Corresponds to the 'refill_token_count' field in QuotaServer config */
  quota?: string;
  /** How long this quota will be active for */
  quotaDuration?: string;
  /** When this quota will take effect */
  startTime?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2TemporaryQuota: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2TemporaryQuota> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quota: Schema.optional(Schema.String),
    quotaDuration: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2TemporaryQuota",
  });

export interface GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig {
  /** Private key used for signing the client secret JWT. */
  privateKey?: string;
  /** Apple Developer Team ID. */
  teamId?: string;
  /** Key ID for the private key. */
  keyId?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateKey: Schema.optional(Schema.String),
    teamId: Schema.optional(Schema.String),
    keyId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2Permissions {
  /** When true, end users cannot sign up for a new account on the associated project through any of our API methods */
  disabledUserSignup?: boolean;
  /** When true, end users cannot delete their account on the associated project through any of our API methods */
  disabledUserDeletion?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2Permissions: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Permissions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabledUserSignup: Schema.optional(Schema.Boolean),
    disabledUserDeletion: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Permissions" });

export interface GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo {
  /** An encoded string that represents the enrollment session. */
  sessionInfo?: string;
  /** The hashing algorithm used to generate the verification code. */
  hashingAlgorithm?: string;
  /** The length of the verification code that needs to be generated. */
  verificationCodeLength?: number;
  /** A base 32 encoded string that represents the shared TOTP secret. The base 32 encoding is the one specified by [RFC4648#section-6](https://datatracker.ietf.org/doc/html/rfc4648#section-6). (This is the same as the base 32 encoding from [RFC3548#section-5](https://datatracker.ietf.org/doc/html/rfc3548#section-5).) */
  sharedSecretKey?: string;
  /** Duration in seconds at which the verification code will change. */
  periodSec?: number;
  /** The time by which the enrollment must finish. */
  finalizeEnrollmentTime?: string;
}

export const GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sessionInfo: Schema.optional(Schema.String),
    hashingAlgorithm: Schema.optional(Schema.String),
    verificationCodeLength: Schema.optional(Schema.Number),
    sharedSecretKey: Schema.optional(Schema.String),
    periodSec: Schema.optional(Schema.Number),
    finalizeEnrollmentTime: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo",
  });

export interface GoogleIamV1GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GoogleIamV1GetPolicyOptions: Schema.Schema<GoogleIamV1GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleIamV1GetPolicyOptions" });

export interface GoogleCloudIdentitytoolkitAdminV2SmsTemplate {
  /** Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS. */
  content?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2SmsTemplate: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SmsTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2SmsTemplate" });

export interface GoogleCloudIdentitytoolkitAdminV2SendSms {
  /** Whether to use the accept_language header for SMS. */
  useDeviceLocale?: boolean;
  /** Output only. The template to use when sending an SMS. */
  smsTemplate?: GoogleCloudIdentitytoolkitAdminV2SmsTemplate;
}

export const GoogleCloudIdentitytoolkitAdminV2SendSms: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SendSms> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useDeviceLocale: Schema.optional(Schema.Boolean),
    smsTemplate: Schema.optional(GoogleCloudIdentitytoolkitAdminV2SmsTemplate),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2SendSms" });

export interface GoogleCloudIdentitytoolkitAdminV2ClientConfig {
  /** Output only. API key that can be used when making requests for this project. */
  apiKey?: string;
  /** Configuration related to restricting a user's ability to affect their account. */
  permissions?: GoogleCloudIdentitytoolkitAdminV2Permissions;
  /** Output only. Firebase subdomain. */
  firebaseSubdomain?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2ClientConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ClientConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiKey: Schema.optional(Schema.String),
    permissions: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Permissions),
    firebaseSubdomain: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2ClientConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2IdpCertificate {
  /** The x509 certificate */
  x509Certificate?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2IdpCertificate: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2IdpCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x509Certificate: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2IdpCertificate",
  });

export interface GoogleCloudIdentitytoolkitAdminV2QuotaConfig {
  /** Quota for the Signup endpoint, if overwritten. Signup quota is measured in sign ups per project per hour per IP. */
  signUpQuotaConfig?: GoogleCloudIdentitytoolkitAdminV2TemporaryQuota;
}

export const GoogleCloudIdentitytoolkitAdminV2QuotaConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2QuotaConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signUpQuotaConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2TemporaryQuota,
    ),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2QuotaConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2OAuthResponseType {
  /** Do not use. The `token` response type is not supported at the moment. */
  token?: boolean;
  /** If true, ID token is returned from IdP's authorization endpoint. */
  idToken?: boolean;
  /** If true, authorization code is returned from IdP's authorization endpoint. */
  code?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2OAuthResponseType: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2OAuthResponseType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.Boolean),
    idToken: Schema.optional(Schema.Boolean),
    code: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2OAuthResponseType",
  });

export interface GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig {
  /** The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. */
  name?: string;
  /** The config's display name set by developers. */
  displayName?: string;
  /** The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. */
  responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
  /** The client secret of the OAuth client, to enable OIDC code flow. */
  clientSecret?: string;
  /** The client id of an OAuth client. */
  clientId?: string;
  /** True if allows the user to sign in with the provider. */
  enabled?: boolean;
  /** For OIDC Idps, the issuer identifier. */
  issuer?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    responseType: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2OAuthResponseType,
    ),
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    issuer: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse {
  /** The set of configs. */
  oauthIdpConfigs?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauthIdpConfigs: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse",
  });

export interface GoogleCloudIdentitytoolkitV2CustomStrengthOptions {
  /** Maximum password length. No default max length */
  maxPasswordLength?: number;
  /** Minimum password length. Range from 6 to 30 */
  minPasswordLength?: number;
  /** The password must contain a lower case character. */
  containsLowercaseCharacter?: boolean;
  /** The password must contain an upper case character. */
  containsUppercaseCharacter?: boolean;
  /** The password must contain a number. */
  containsNumericCharacter?: boolean;
  /** The password must contain a non alpha numeric character. */
  containsNonAlphanumericCharacter?: boolean;
}

export const GoogleCloudIdentitytoolkitV2CustomStrengthOptions: Schema.Schema<GoogleCloudIdentitytoolkitV2CustomStrengthOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxPasswordLength: Schema.optional(Schema.Number),
    minPasswordLength: Schema.optional(Schema.Number),
    containsLowercaseCharacter: Schema.optional(Schema.Boolean),
    containsUppercaseCharacter: Schema.optional(Schema.Boolean),
    containsNumericCharacter: Schema.optional(Schema.Boolean),
    containsNonAlphanumericCharacter: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2CustomStrengthOptions",
  });

export interface GoogleCloudIdentitytoolkitV2PasswordPolicy {
  /** The custom strength options enforced by the password policy. */
  customStrengthOptions?: GoogleCloudIdentitytoolkitV2CustomStrengthOptions;
  /** Output only. schema version number for the password policy */
  schemaVersion?: number;
  /** Output only. Which enforcement mode to use for the password policy. */
  enforcementState?:
    | "ENFORCEMENT_STATE_UNSPECIFIED"
    | "OFF"
    | "ENFORCE"
    | (string & {});
  /** Output only. Allowed characters which satisfy the non_alphanumeric requirement. */
  allowedNonAlphanumericCharacters?: ReadonlyArray<string>;
  /** Users must have a password compliant with the password policy to sign-in. */
  forceUpgradeOnSignin?: boolean;
}

export const GoogleCloudIdentitytoolkitV2PasswordPolicy: Schema.Schema<GoogleCloudIdentitytoolkitV2PasswordPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customStrengthOptions: Schema.optional(
      GoogleCloudIdentitytoolkitV2CustomStrengthOptions,
    ),
    schemaVersion: Schema.optional(Schema.Number),
    enforcementState: Schema.optional(Schema.String),
    allowedNonAlphanumericCharacters: Schema.optional(
      Schema.Array(Schema.String),
    ),
    forceUpgradeOnSignin: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitV2PasswordPolicy" });

export interface GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState {
  /** The reCAPTCHA enforcement state for the provider. */
  enforcementState?:
    | "ENFORCEMENT_STATE_UNSPECIFIED"
    | "OFF"
    | "AUDIT"
    | "ENFORCE"
    | (string & {});
  /** The provider that has reCAPTCHA protection. */
  provider?:
    | "RECAPTCHA_PROVIDER_UNSPECIFIED"
    | "EMAIL_PASSWORD_PROVIDER"
    | "PHONE_PROVIDER"
    | (string & {});
}

export const GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState: Schema.Schema<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enforcementState: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState",
  });

export interface GoogleCloudIdentitytoolkitV2RecaptchaConfig {
  /** Whether to use the rCE sms toll fraud protection risk score for reCAPTCHA phone provider. */
  useSmsTollFraudProtection?: boolean;
  /** The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}". This will only be returned when the reCAPTCHA enforcement state is AUDIT or ENFORCE on at least one of the reCAPTCHA providers. */
  recaptchaKey?: string;
  /** The reCAPTCHA enforcement state for the providers that GCIP supports reCAPTCHA protection. */
  recaptchaEnforcementState?: ReadonlyArray<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState>;
  /** Whether to use the rCE bot score for reCAPTCHA phone provider. */
  useSmsBotScore?: boolean;
}

export const GoogleCloudIdentitytoolkitV2RecaptchaConfig: Schema.Schema<GoogleCloudIdentitytoolkitV2RecaptchaConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useSmsTollFraudProtection: Schema.optional(Schema.Boolean),
    recaptchaKey: Schema.optional(Schema.String),
    recaptchaEnforcementState: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState),
    ),
    useSmsBotScore: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitV2RecaptchaConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2Email {
  /** Whether email auth is enabled for the project or not. */
  enabled?: boolean;
  /** Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link. */
  passwordRequired?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2Email: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Email> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    passwordRequired: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Email" });

export interface GoogleCloudIdentitytoolkitAdminV2Trigger {
  /** HTTP URI trigger for the Cloud Function. */
  functionUri?: string;
  /** When the trigger was changed. */
  updateTime?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2Trigger: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    functionUri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Trigger" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudIdentitytoolkitV2WithdrawMfaRequest {
  /** Required. User's ID token. */
  idToken?: string;
  /** The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
  tenantId?: string;
  /** Required. MFA enrollment id from a current MFA enrollment. */
  mfaEnrollmentId?: string;
}

export const GoogleCloudIdentitytoolkitV2WithdrawMfaRequest: Schema.Schema<GoogleCloudIdentitytoolkitV2WithdrawMfaRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    mfaEnrollmentId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitV2WithdrawMfaRequest" });

export interface GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials {
  /** Whether to pass the user's OIDC identity provider's ID token. */
  idToken?: boolean;
  /** Whether to pass the user's OAuth identity provider's refresh token. */
  refreshToken?: boolean;
  /** Whether to pass the user's OAuth identity provider's access token. */
  accessToken?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.Boolean),
    refreshToken: Schema.optional(Schema.Boolean),
    accessToken: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials",
  });

export interface GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig {
  /** Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn" */
  triggers?: Record<string, GoogleCloudIdentitytoolkitAdminV2Trigger>;
  /** The user credentials to include in the JWT payload that is sent to the registered Blocking Functions. */
  forwardInboundCredentials?: GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials;
}

export const GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggers: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudIdentitytoolkitAdminV2Trigger),
    ),
    forwardInboundCredentials: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2Anonymous {
  /** Whether anonymous user auth is enabled for the project or not. */
  enabled?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2Anonymous: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Anonymous> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Anonymous" });

export interface GoogleCloudIdentitytoolkitAdminV2PhoneNumber {
  /** Whether phone number auth is enabled for the project or not. */
  enabled?: boolean;
  /** A map of that can be used for phone auth testing. */
  testPhoneNumbers?: Record<string, string>;
}

export const GoogleCloudIdentitytoolkitAdminV2PhoneNumber: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2PhoneNumber> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    testPhoneNumbers: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2PhoneNumber" });

export interface GoogleCloudIdentitytoolkitAdminV2SignInConfig {
  /** Whether to allow more than one account to have the same email. */
  allowDuplicateEmails?: boolean;
  /** Output only. Hash config information. */
  hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;
  /** Configuration options related to authenticating a user by their email address. */
  email?: GoogleCloudIdentitytoolkitAdminV2Email;
  /** Configuration options related to authenticating an anonymous user. */
  anonymous?: GoogleCloudIdentitytoolkitAdminV2Anonymous;
  /** Configuration options related to authenticated a user by their phone number. */
  phoneNumber?: GoogleCloudIdentitytoolkitAdminV2PhoneNumber;
}

export const GoogleCloudIdentitytoolkitAdminV2SignInConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SignInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowDuplicateEmails: Schema.optional(Schema.Boolean),
    hashConfig: Schema.optional(GoogleCloudIdentitytoolkitAdminV2HashConfig),
    email: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Email),
    anonymous: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Anonymous),
    phoneNumber: Schema.optional(GoogleCloudIdentitytoolkitAdminV2PhoneNumber),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2SignInConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig {
  /** Whether this project can have tenants or not. */
  allowTenants?: boolean;
  /** The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project. */
  defaultTenantLocation?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowTenants: Schema.optional(Schema.Boolean),
    defaultTenantLocation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2EmailTemplate {
  /** Output only. Whether the body or subject of the email is customized. */
  customized?: boolean;
  /** Email body */
  body?: string;
  /** Reply-to address */
  replyTo?: string;
  /** Email body format */
  bodyFormat?:
    | "BODY_FORMAT_UNSPECIFIED"
    | "PLAIN_TEXT"
    | "HTML"
    | (string & {});
  /** Local part of From address */
  senderLocalPart?: string;
  /** Sender display name */
  senderDisplayName?: string;
  /** Subject of the email */
  subject?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2EmailTemplate: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2EmailTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customized: Schema.optional(Schema.Boolean),
    body: Schema.optional(Schema.String),
    replyTo: Schema.optional(Schema.String),
    bodyFormat: Schema.optional(Schema.String),
    senderLocalPart: Schema.optional(Schema.String),
    senderDisplayName: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2EmailTemplate" });

export interface GoogleCloudIdentitytoolkitAdminV2SendEmail {
  /** Use a custom SMTP relay */
  smtp?: GoogleCloudIdentitytoolkitAdminV2Smtp;
  /** action url in email template. */
  callbackUri?: string;
  /** Email template for reset password */
  resetPasswordTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
  /** Information of custom domain DNS verification. */
  dnsInfo?: GoogleCloudIdentitytoolkitAdminV2DnsInfo;
  /** Email template for reverting second factor addition emails */
  revertSecondFactorAdditionTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
  /** Email template for change email */
  changeEmailTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
  /** Reset password email template for legacy Firebase V1 app. */
  legacyResetPasswordTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
  /** The method used for sending an email. */
  method?: "METHOD_UNSPECIFIED" | "DEFAULT" | "CUSTOM_SMTP" | (string & {});
  /** Email template for verify email */
  verifyEmailTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
}

export const GoogleCloudIdentitytoolkitAdminV2SendEmail: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SendEmail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    smtp: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Smtp),
    callbackUri: Schema.optional(Schema.String),
    resetPasswordTemplate: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailTemplate,
    ),
    dnsInfo: Schema.optional(GoogleCloudIdentitytoolkitAdminV2DnsInfo),
    revertSecondFactorAdditionTemplate: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailTemplate,
    ),
    changeEmailTemplate: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailTemplate,
    ),
    legacyResetPasswordTemplate: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailTemplate,
    ),
    method: Schema.optional(Schema.String),
    verifyEmailTemplate: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailTemplate,
    ),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2SendEmail" });

export interface GoogleCloudIdentitytoolkitAdminV2NotificationConfig {
  /** Options for SMS sending. */
  sendSms?: GoogleCloudIdentitytoolkitAdminV2SendSms;
  /** Options for email sending. */
  sendEmail?: GoogleCloudIdentitytoolkitAdminV2SendEmail;
  /** Default locale used for email and SMS in IETF BCP 47 format. */
  defaultLocale?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2NotificationConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2NotificationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sendSms: Schema.optional(GoogleCloudIdentitytoolkitAdminV2SendSms),
    sendEmail: Schema.optional(GoogleCloudIdentitytoolkitAdminV2SendEmail),
    defaultLocale: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2NotificationConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2Config {
  /** Options related to how clients making requests on behalf of a project should be configured. */
  client?: GoogleCloudIdentitytoolkitAdminV2ClientConfig;
  /** The project level password policy configuration. */
  passwordPolicyConfig?: GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig;
  /** Configuration related to quotas. */
  quota?: GoogleCloudIdentitytoolkitAdminV2QuotaConfig;
  /** Whether anonymous users will be auto-deleted after a period of 30 days. */
  autodeleteAnonymousUsers?: boolean;
  /** Output only. The subtype of this config. */
  subtype?:
    | "SUBTYPE_UNSPECIFIED"
    | "IDENTITY_PLATFORM"
    | "FIREBASE_AUTH"
    | (string & {});
  /** Configuration related to blocking functions. */
  blockingFunctions?: GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig;
  /** Output only. Default Firebase hosting site name */
  defaultHostingSite?: string;
  /** Output only. The name of the Config resource. Example: "projects/my-awesome-project/config" */
  name?: string;
  /** The project-level reCAPTCHA config. */
  recaptchaConfig?: GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig;
  /** Configuration related to monitoring project activity. */
  monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;
  /** Configuration related to local sign in methods. */
  signIn?: GoogleCloudIdentitytoolkitAdminV2SignInConfig;
  /** Configuration related to multi-tenant functionality. */
  multiTenant?: GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig;
  /** Configuration related to sending notifications to users. */
  notification?: GoogleCloudIdentitytoolkitAdminV2NotificationConfig;
  /** Configuration for this project's multi-factor authentication, including whether it is active and what factors can be used for the second factor */
  mfa?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;
  /** Configuration for settings related to email privacy and public visibility. */
  emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;
  /** Configuration for settings related to univeral links (iOS) and app links (Android). */
  mobileLinksConfig?: GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig;
  /** Configures which regions are enabled for SMS verification code sending. */
  smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;
  /** List of domains authorized for OAuth redirects */
  authorizedDomains?: ReadonlyArray<string>;
}

export const GoogleCloudIdentitytoolkitAdminV2Config: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client: Schema.optional(GoogleCloudIdentitytoolkitAdminV2ClientConfig),
    passwordPolicyConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig,
    ),
    quota: Schema.optional(GoogleCloudIdentitytoolkitAdminV2QuotaConfig),
    autodeleteAnonymousUsers: Schema.optional(Schema.Boolean),
    subtype: Schema.optional(Schema.String),
    blockingFunctions: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig,
    ),
    defaultHostingSite: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    recaptchaConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig,
    ),
    monitoring: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MonitoringConfig,
    ),
    signIn: Schema.optional(GoogleCloudIdentitytoolkitAdminV2SignInConfig),
    multiTenant: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig,
    ),
    notification: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2NotificationConfig,
    ),
    mfa: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig,
    ),
    emailPrivacyConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig,
    ),
    mobileLinksConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2MobileLinksConfig,
    ),
    smsRegionConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig,
    ),
    authorizedDomains: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2Config" });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo {}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest {
  /** The MFA enrollment ID from the user's list of current MFA enrollments. */
  mfaEnrollmentId?: string;
  /** Proof of completion of the TOTP based MFA challenge. */
  totpVerificationInfo?: GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo;
  /** Required. Pending credential from first factor sign-in. */
  mfaPendingCredential?: string;
  /** Proof of completion of the SMS based MFA challenge. */
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
  /** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
  tenantId?: string;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mfaEnrollmentId: Schema.optional(Schema.String),
    totpVerificationInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo,
    ),
    mfaPendingCredential: Schema.optional(Schema.String),
    phoneVerificationInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo,
    ),
    tenantId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo {
  /** For Android verification proof. */
  phoneNumber?: string;
  /** Android only. Long-lived replacement for valid code tied to android device. */
  androidVerificationProof?: string;
  /** Android only. Expiration time of verification proof in seconds. */
  androidVerificationProofExpireTime?: string;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phoneNumber: Schema.optional(Schema.String),
    androidVerificationProof: Schema.optional(Schema.String),
    androidVerificationProofExpireTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse {
  /** ID token for the authenticated user. */
  idToken?: string;
  /** Extra phone auth info, including android verification proof. */
  phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
  /** Refresh token for the authenticated user. */
  refreshToken?: string;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    phoneAuthInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo,
    ),
    refreshToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse",
  });

export interface GoogleCloudIdentitytoolkitAdminV2IdpConfig {
  /** Unique identifier for all SAML entities. */
  idpEntityId?: string;
  /** Indicates if outbounding SAMLRequest should be signed. */
  signRequest?: boolean;
  /** IDP's public keys for verifying signature in the assertions. */
  idpCertificates?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2IdpCertificate>;
  /** URL to send Authentication request to. */
  ssoUrl?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2IdpConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2IdpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idpEntityId: Schema.optional(Schema.String),
    signRequest: Schema.optional(Schema.Boolean),
    idpCertificates: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2IdpCertificate),
    ),
    ssoUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2IdpConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2SpCertificate {
  /** Self-signed public certificate. */
  x509Certificate?: string;
  /** Timestamp of the cert expiration instance. */
  expiresAt?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2SpCertificate: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SpCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    x509Certificate: Schema.optional(Schema.String),
    expiresAt: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2SpCertificate" });

export interface GoogleIamV1TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsRequest: Schema.Schema<GoogleIamV1TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsRequest" });

export interface GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig {
  /** A list of Bundle ID's usable by this project */
  bundleIds?: ReadonlyArray<string>;
  /** Additional config for Apple for code flow. */
  codeFlowConfig?: GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
}

export const GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bundleIds: Schema.optional(Schema.Array(Schema.String)),
    codeFlowConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig {
  /** True if allows the user to sign in with the provider. */
  enabled?: boolean;
  /** OAuth client ID. */
  clientId?: string;
  /** OAuth client secret. */
  clientSecret?: string;
  /** Additional config for Apple-based projects. */
  appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;
  /** The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    clientId: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
    appleSignInConfig: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig,
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The set of configs. */
  defaultSupportedIdpConfigs?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;
}

export const GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    defaultSupportedIdpConfigs: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig),
    ),
  }).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse",
  });

export interface GoogleCloudIdentitytoolkitV2WithdrawMfaResponse {
  /** ID token updated to reflect removal of the second factor. */
  idToken?: string;
  /** Refresh token updated to reflect removal of the second factor. */
  refreshToken?: string;
}

export const GoogleCloudIdentitytoolkitV2WithdrawMfaResponse: Schema.Schema<GoogleCloudIdentitytoolkitV2WithdrawMfaResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    refreshToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2WithdrawMfaResponse",
  });

export interface GoogleCloudIdentitytoolkitV2AutoRetrievalInfo {
  /** The Android app's signature hash for Google Play Service's SMS Retriever API. */
  appSignatureHash?: string;
}

export const GoogleCloudIdentitytoolkitV2AutoRetrievalInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2AutoRetrievalInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appSignatureHash: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitV2AutoRetrievalInfo" });

export interface GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo {
  /** The client type, web, android or ios. Required when reCAPTCHA Enterprise is enabled. */
  clientType?:
    | "CLIENT_TYPE_UNSPECIFIED"
    | "CLIENT_TYPE_WEB"
    | "CLIENT_TYPE_ANDROID"
    | "CLIENT_TYPE_IOS"
    | (string & {});
  /** Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the `phone_number` field as the nonce. */
  safetyNetToken?: string;
  /** Android only. Used to assert application identity in place of a recaptcha token (or safety net token). A Play Integrity Token can be generated via the [PlayIntegrity API] (https://developer.android.com/google/play/integrity) with applying SHA256 to the `phone_number` field as the nonce. */
  playIntegrityToken?: string;
  /** iOS only. Secret delivered to iOS app via APNS. */
  iosSecret?: string;
  /** Android only. Used by Google Play Services to identify the app for auto-retrieval. */
  autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
  /** Web only. Recaptcha solution. */
  recaptchaToken?: string;
  /** The reCAPTCHA Enterprise token provided by the reCAPTCHA client-side integration. Required when reCAPTCHA enterprise is enabled. */
  captchaResponse?: string;
  /** iOS only. Receipt of successful app token validation with APNS. */
  iosReceipt?: string;
  /** Required for enrollment. Phone number to be enrolled as MFA. */
  phoneNumber?: string;
  /** The reCAPTCHA version of the reCAPTCHA token in the captcha_response. Required when reCAPTCHA Enterprise is enabled. */
  recaptchaVersion?:
    | "RECAPTCHA_VERSION_UNSPECIFIED"
    | "RECAPTCHA_ENTERPRISE"
    | (string & {});
}

export const GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientType: Schema.optional(Schema.String),
    safetyNetToken: Schema.optional(Schema.String),
    playIntegrityToken: Schema.optional(Schema.String),
    iosSecret: Schema.optional(Schema.String),
    autoRetrievalInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2AutoRetrievalInfo,
    ),
    recaptchaToken: Schema.optional(Schema.String),
    captchaResponse: Schema.optional(Schema.String),
    iosReceipt: Schema.optional(Schema.String),
    phoneNumber: Schema.optional(Schema.String),
    recaptchaVersion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo",
  });

export interface GoogleCloudIdentitytoolkitV2StartMfaSignInRequest {
  /** Required. MFA enrollment id from the user's list of current MFA enrollments. */
  mfaEnrollmentId?: string;
  /** Required. Pending credential from first factor sign-in. */
  mfaPendingCredential?: string;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
  /** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
  tenantId?: string;
}

export const GoogleCloudIdentitytoolkitV2StartMfaSignInRequest: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaSignInRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mfaEnrollmentId: Schema.optional(Schema.String),
    mfaPendingCredential: Schema.optional(Schema.String),
    phoneSignInInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo,
    ),
    tenantId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaSignInRequest",
  });

export interface GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse {
  /** Enrollment response info specific to TOTP auth. */
  totpSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
}

export const GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totpSessionInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo,
    ),
    phoneSessionInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse",
  });

export interface GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse {
  /** ID token updated to reflect MFA enrollment. */
  idToken?: string;
  /** Auxiliary auth info specific to phone auth. */
  phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
  /** Refresh token updated to reflect MFA enrollment. */
  refreshToken?: string;
  /** Auxiliary auth info specific to TOTP auth. */
  totpAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo;
}

export const GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse: Schema.Schema<GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    phoneAuthInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo,
    ),
    refreshToken: Schema.optional(Schema.String),
    totpAuthInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse",
  });

export interface GoogleCloudIdentitytoolkitAdminV2SpConfig {
  /** Callback URI where responses from IDP are handled. */
  callbackUri?: string;
  /** Output only. Public certificates generated by the server to verify the signature in SAMLRequest in the SP-initiated flow. */
  spCertificates?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2SpCertificate>;
  /** Unique identifier for all SAML entities. */
  spEntityId?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2SpConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2SpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    callbackUri: Schema.optional(Schema.String),
    spCertificates: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2SpCertificate),
    ),
    spEntityId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitAdminV2SpConfig" });

export interface GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig {
  /** The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. */
  name?: string;
  /** The config's display name set by developers. */
  displayName?: string;
  /** The SAML IdP (Identity Provider) configuration when the project acts as the relying party. */
  idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;
  /** The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider. */
  spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig;
  /** True if allows the user to sign in with the provider. */
  enabled?: boolean;
}

export const GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    idpConfig: Schema.optional(GoogleCloudIdentitytoolkitAdminV2IdpConfig),
    spConfig: Schema.optional(GoogleCloudIdentitytoolkitAdminV2SpConfig),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The set of configs. */
  inboundSamlConfigs?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;
}

export const GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    inboundSamlConfigs: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig),
    ),
  }).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse",
  });

export interface GoogleCloudIdentitytoolkitV2RevokeTokenResponse {}

export const GoogleCloudIdentitytoolkitV2RevokeTokenResponse: Schema.Schema<GoogleCloudIdentitytoolkitV2RevokeTokenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2RevokeTokenResponse",
  });

export interface GoogleIamV1AuditLogConfig {
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
}

export const GoogleIamV1AuditLogConfig: Schema.Schema<GoogleIamV1AuditLogConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logType: Schema.optional(Schema.String),
    exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1AuditLogConfig" });

export interface GoogleCloudIdentitytoolkitV2RevokeTokenRequest {
  /** Required. The idp provider for the token. Currently only supports Apple Idp. The format should be "apple.com". */
  providerId?: string;
  /** Required. The type of the token to be revoked. */
  tokenType?:
    | "TOKEN_TYPE_UNSPECIFIED"
    | "REFRESH_TOKEN"
    | "ACCESS_TOKEN"
    | "CODE"
    | (string & {});
  /** Required. The token to be revoked. If an authorization_code is passed in, the API will first exchange the code for access token and then revoke the token exchanged. */
  token?: string;
  /** Required. A valid Identity Platform ID token to link the account. If there was a successful token revocation request on the account and no tokens are generated after the revocation, the duplicate requests will be ignored and returned immediately. */
  idToken?: string;
  /** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
  tenantId?: string;
  /** The redirect URI provided in the initial authorization request made by the client to the IDP. The URI must use the HTTPS protocol, include a domain name, and can't contain an IP address or localhost. Required if token_type is CODE. */
  redirectUri?: string;
}

export const GoogleCloudIdentitytoolkitV2RevokeTokenRequest: Schema.Schema<GoogleCloudIdentitytoolkitV2RevokeTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerId: Schema.optional(Schema.String),
    tokenType: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    idToken: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    redirectUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudIdentitytoolkitV2RevokeTokenRequest" });

export interface GoogleIamV1GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GoogleIamV1GetPolicyOptions;
}

export const GoogleIamV1GetIamPolicyRequest: Schema.Schema<GoogleIamV1GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GoogleIamV1GetPolicyOptions),
  }).annotate({ identifier: "GoogleIamV1GetIamPolicyRequest" });

export interface GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest {}

export const GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest",
  });

export interface GoogleTypeExpr {
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const GoogleTypeExpr: Schema.Schema<GoogleTypeExpr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeExpr" });

export interface GoogleIamV1Binding {
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: GoogleTypeExpr;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const GoogleIamV1Binding: Schema.Schema<GoogleIamV1Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    condition: Schema.optional(GoogleTypeExpr),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1Binding" });

export interface GoogleIamV1AuditConfig {
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<GoogleIamV1AuditLogConfig>;
}

export const GoogleIamV1AuditConfig: Schema.Schema<GoogleIamV1AuditConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
    auditLogConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditLogConfig)),
  }).annotate({ identifier: "GoogleIamV1AuditConfig" });

export interface GoogleIamV1Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<GoogleIamV1Binding>;
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<GoogleIamV1AuditConfig>;
}

export const GoogleIamV1Policy: Schema.Schema<GoogleIamV1Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(GoogleIamV1Binding)),
    auditConfigs: Schema.optional(Schema.Array(GoogleIamV1AuditConfig)),
  }).annotate({ identifier: "GoogleIamV1Policy" });

export interface GoogleIamV1TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const GoogleIamV1TestIamPermissionsResponse: Schema.Schema<GoogleIamV1TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleIamV1TestIamPermissionsResponse" });

export interface GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp {
  /** Id the of Idp */
  idpId?: string;
  /** Description of the Idp */
  description?: string;
}

export const GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idpId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp",
  });

export interface GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** The set of configs. */
  defaultSupportedIdps?: ReadonlyArray<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp>;
}

export const GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse: Schema.Schema<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    defaultSupportedIdps: Schema.optional(
      Schema.Array(GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp),
    ),
  }).annotate({
    identifier:
      "GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse",
  });

export interface GoogleIamV1SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: GoogleIamV1Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const GoogleIamV1SetIamPolicyRequest: Schema.Schema<GoogleIamV1SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(GoogleIamV1Policy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleIamV1SetIamPolicyRequest" });

export interface GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo {}

export const GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo",
  });

export interface GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest {
  /** Required. User's ID token. */
  idToken?: string;
  /** Sign-in info specific to TOTP auth. */
  totpEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo;
  /** The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
  tenantId?: string;
  /** Verification info to authorize sending an SMS for phone verification. */
  phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
}

export const GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest: Schema.Schema<GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idToken: Schema.optional(Schema.String),
    totpEnrollmentInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo,
    ),
    tenantId: Schema.optional(Schema.String),
    phoneEnrollmentInfo: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo,
    ),
  }).annotate({
    identifier: "GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface GetRecaptchaConfigV2Request {
  /** The id of a tenant. */
  tenantId?: string;
  /** reCAPTCHA Enterprise uses separate site keys for different client types. Specify the client type to get the corresponding key. */
  clientType?:
    | "CLIENT_TYPE_UNSPECIFIED"
    | "CLIENT_TYPE_WEB"
    | "CLIENT_TYPE_ANDROID"
    | "CLIENT_TYPE_IOS"
    | (string & {});
  /** The reCAPTCHA version. */
  version?:
    | "RECAPTCHA_VERSION_UNSPECIFIED"
    | "RECAPTCHA_ENTERPRISE"
    | (string & {});
}

export const GetRecaptchaConfigV2Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String).pipe(T.HttpQuery("tenantId")),
    clientType: Schema.optional(Schema.String).pipe(T.HttpQuery("clientType")),
    version: Schema.optional(Schema.String).pipe(T.HttpQuery("version")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/recaptchaConfig" }),
    svc,
  ) as unknown as Schema.Schema<GetRecaptchaConfigV2Request>;

export type GetRecaptchaConfigV2Response =
  GoogleCloudIdentitytoolkitV2RecaptchaConfig;
export const GetRecaptchaConfigV2Response =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2RecaptchaConfig;

export type GetRecaptchaConfigV2Error = DefaultErrors | NotFound | Forbidden;

/** Gets parameters needed for reCAPTCHA analysis. */
export const getRecaptchaConfigV2: API.OperationMethod<
  GetRecaptchaConfigV2Request,
  GetRecaptchaConfigV2Response,
  GetRecaptchaConfigV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRecaptchaConfigV2Request,
  output: GetRecaptchaConfigV2Response,
  errors: [NotFound, Forbidden],
}));

export interface GetPasswordPolicyV2Request {
  /** The id of a tenant. */
  tenantId?: string;
}

export const GetPasswordPolicyV2Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String).pipe(T.HttpQuery("tenantId")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/passwordPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetPasswordPolicyV2Request>;

export type GetPasswordPolicyV2Response =
  GoogleCloudIdentitytoolkitV2PasswordPolicy;
export const GetPasswordPolicyV2Response =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2PasswordPolicy;

export type GetPasswordPolicyV2Error = DefaultErrors | NotFound | Forbidden;

/** Gets password policy config set on the project or tenant. */
export const getPasswordPolicyV2: API.OperationMethod<
  GetPasswordPolicyV2Request,
  GetPasswordPolicyV2Response,
  GetPasswordPolicyV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPasswordPolicyV2Request,
  output: GetPasswordPolicyV2Response,
  errors: [NotFound, Forbidden],
}));

export interface RevokeTokenAccountsRequest {
  /** Request body */
  body?: GoogleCloudIdentitytoolkitV2RevokeTokenRequest;
}

export const RevokeTokenAccountsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleCloudIdentitytoolkitV2RevokeTokenRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/accounts:revokeToken", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RevokeTokenAccountsRequest>;

export type RevokeTokenAccountsResponse =
  GoogleCloudIdentitytoolkitV2RevokeTokenResponse;
export const RevokeTokenAccountsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2RevokeTokenResponse;

export type RevokeTokenAccountsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project. */
export const revokeTokenAccounts: API.OperationMethod<
  RevokeTokenAccountsRequest,
  RevokeTokenAccountsResponse,
  RevokeTokenAccountsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RevokeTokenAccountsRequest,
  output: RevokeTokenAccountsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartAccountsMfaEnrollmentRequest {
  /** Request body */
  body?: GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest;
}

export const StartAccountsMfaEnrollmentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/accounts/mfaEnrollment:start",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartAccountsMfaEnrollmentRequest>;

export type StartAccountsMfaEnrollmentResponse =
  GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse;
export const StartAccountsMfaEnrollmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse;

export type StartAccountsMfaEnrollmentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user. */
export const startAccountsMfaEnrollment: API.OperationMethod<
  StartAccountsMfaEnrollmentRequest,
  StartAccountsMfaEnrollmentResponse,
  StartAccountsMfaEnrollmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartAccountsMfaEnrollmentRequest,
  output: StartAccountsMfaEnrollmentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FinalizeAccountsMfaEnrollmentRequest {
  /** Request body */
  body?: GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
}

export const FinalizeAccountsMfaEnrollmentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/accounts/mfaEnrollment:finalize",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FinalizeAccountsMfaEnrollmentRequest>;

export type FinalizeAccountsMfaEnrollmentResponse =
  GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse;
export const FinalizeAccountsMfaEnrollmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse;

export type FinalizeAccountsMfaEnrollmentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finishes enrolling a second factor for the user. */
export const finalizeAccountsMfaEnrollment: API.OperationMethod<
  FinalizeAccountsMfaEnrollmentRequest,
  FinalizeAccountsMfaEnrollmentResponse,
  FinalizeAccountsMfaEnrollmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinalizeAccountsMfaEnrollmentRequest,
  output: FinalizeAccountsMfaEnrollmentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WithdrawAccountsMfaEnrollmentRequest {
  /** Request body */
  body?: GoogleCloudIdentitytoolkitV2WithdrawMfaRequest;
}

export const WithdrawAccountsMfaEnrollmentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleCloudIdentitytoolkitV2WithdrawMfaRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/accounts/mfaEnrollment:withdraw",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WithdrawAccountsMfaEnrollmentRequest>;

export type WithdrawAccountsMfaEnrollmentResponse =
  GoogleCloudIdentitytoolkitV2WithdrawMfaResponse;
export const WithdrawAccountsMfaEnrollmentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2WithdrawMfaResponse;

export type WithdrawAccountsMfaEnrollmentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Revokes one second factor from the enrolled second factors for an account. */
export const withdrawAccountsMfaEnrollment: API.OperationMethod<
  WithdrawAccountsMfaEnrollmentRequest,
  WithdrawAccountsMfaEnrollmentResponse,
  WithdrawAccountsMfaEnrollmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WithdrawAccountsMfaEnrollmentRequest,
  output: WithdrawAccountsMfaEnrollmentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FinalizeAccountsMfaSignInRequest {
  /** Request body */
  body?: GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest;
}

export const FinalizeAccountsMfaSignInRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/accounts/mfaSignIn:finalize",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FinalizeAccountsMfaSignInRequest>;

export type FinalizeAccountsMfaSignInResponse =
  GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse;
export const FinalizeAccountsMfaSignInResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse;

export type FinalizeAccountsMfaSignInError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verifies the MFA challenge and performs sign-in */
export const finalizeAccountsMfaSignIn: API.OperationMethod<
  FinalizeAccountsMfaSignInRequest,
  FinalizeAccountsMfaSignInResponse,
  FinalizeAccountsMfaSignInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinalizeAccountsMfaSignInRequest,
  output: FinalizeAccountsMfaSignInResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartAccountsMfaSignInRequest {
  /** Request body */
  body?: GoogleCloudIdentitytoolkitV2StartMfaSignInRequest;
}

export const StartAccountsMfaSignInRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleCloudIdentitytoolkitV2StartMfaSignInRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/accounts/mfaSignIn:start",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartAccountsMfaSignInRequest>;

export type StartAccountsMfaSignInResponse =
  GoogleCloudIdentitytoolkitV2StartMfaSignInResponse;
export const StartAccountsMfaSignInResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitV2StartMfaSignInResponse;

export type StartAccountsMfaSignInError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends the MFA challenge */
export const startAccountsMfaSignIn: API.OperationMethod<
  StartAccountsMfaSignInRequest,
  StartAccountsMfaSignInResponse,
  StartAccountsMfaSignInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartAccountsMfaSignInRequest,
  output: StartAccountsMfaSignInResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateConfigProjectsRequest {
  /** The update mask applies to the resource. Fields set in the config but not included in this update mask will be ignored. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Output only. The name of the Config resource. Example: "projects/my-awesome-project/config" */
  name: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2Config;
}

export const UpdateConfigProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Config).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateConfigProjectsRequest>;

export type UpdateConfigProjectsResponse =
  GoogleCloudIdentitytoolkitAdminV2Config;
export const UpdateConfigProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2Config;

export type UpdateConfigProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an Identity Toolkit project configuration. */
export const updateConfigProjects: API.OperationMethod<
  UpdateConfigProjectsRequest,
  UpdateConfigProjectsResponse,
  UpdateConfigProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateConfigProjectsRequest,
  output: UpdateConfigProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConfigProjectsRequest {
  /** The resource name of the config, for example: "projects/my-awesome-project/config" */
  name: string;
}

export const GetConfigProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigProjectsRequest>;

export type GetConfigProjectsResponse = GoogleCloudIdentitytoolkitAdminV2Config;
export const GetConfigProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2Config;

export type GetConfigProjectsError = DefaultErrors | NotFound | Forbidden;

/** Retrieve an Identity Toolkit project configuration. */
export const getConfigProjects: API.OperationMethod<
  GetConfigProjectsRequest,
  GetConfigProjectsResponse,
  GetConfigProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigProjectsRequest,
  output: GetConfigProjectsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InitializeAuthProjectsIdentityPlatformRequest {
  /** The resource name of the target project the developer wants to enable Identity Platform for. */
  project: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest;
}

export const InitializeAuthProjectsIdentityPlatformRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+project}/identityPlatform:initializeAuth",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InitializeAuthProjectsIdentityPlatformRequest>;

export type InitializeAuthProjectsIdentityPlatformResponse =
  GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse;
export const InitializeAuthProjectsIdentityPlatformResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse;

export type InitializeAuthProjectsIdentityPlatformError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects. */
export const initializeAuthProjectsIdentityPlatform: API.OperationMethod<
  InitializeAuthProjectsIdentityPlatformRequest,
  InitializeAuthProjectsIdentityPlatformResponse,
  InitializeAuthProjectsIdentityPlatformError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InitializeAuthProjectsIdentityPlatformRequest,
  output: InitializeAuthProjectsIdentityPlatformResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDefaultSupportedIdpConfigsRequest {
  /** The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name: string;
}

export const DeleteProjectsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDefaultSupportedIdpConfigsRequest>;

export type DeleteProjectsDefaultSupportedIdpConfigsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a default supported Idp configuration for an Identity Toolkit project. */
export const deleteProjectsDefaultSupportedIdpConfigs: API.OperationMethod<
  DeleteProjectsDefaultSupportedIdpConfigsRequest,
  DeleteProjectsDefaultSupportedIdpConfigsResponse,
  DeleteProjectsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDefaultSupportedIdpConfigsRequest,
  output: DeleteProjectsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDefaultSupportedIdpConfigsRequest {
  /** The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name: string;
}

export const GetProjectsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDefaultSupportedIdpConfigsRequest>;

export type GetProjectsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
export const GetProjectsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;

export type GetProjectsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a default supported Idp configuration for an Identity Toolkit project. */
export const getProjectsDefaultSupportedIdpConfigs: API.OperationMethod<
  GetProjectsDefaultSupportedIdpConfigsRequest,
  GetProjectsDefaultSupportedIdpConfigsResponse,
  GetProjectsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDefaultSupportedIdpConfigsRequest,
  output: GetProjectsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsDefaultSupportedIdpConfigsRequest {
  /** The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name: string;
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
}

export const PatchProjectsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDefaultSupportedIdpConfigsRequest>;

export type PatchProjectsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
export const PatchProjectsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;

export type PatchProjectsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a default supported Idp configuration for an Identity Toolkit project. */
export const patchProjectsDefaultSupportedIdpConfigs: API.OperationMethod<
  PatchProjectsDefaultSupportedIdpConfigsRequest,
  PatchProjectsDefaultSupportedIdpConfigsResponse,
  PatchProjectsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDefaultSupportedIdpConfigsRequest,
  output: PatchProjectsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDefaultSupportedIdpConfigsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The parent resource name, for example, "projects/my-awesome-project". */
  parent: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/defaultSupportedIdpConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDefaultSupportedIdpConfigsRequest>;

export type ListProjectsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;
export const ListProjectsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;

export type ListProjectsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all default supported Idp configurations for an Identity Toolkit project. */
export const listProjectsDefaultSupportedIdpConfigs: API.PaginatedOperationMethod<
  ListProjectsDefaultSupportedIdpConfigsRequest,
  ListProjectsDefaultSupportedIdpConfigsResponse,
  ListProjectsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDefaultSupportedIdpConfigsRequest,
  output: ListProjectsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsDefaultSupportedIdpConfigsRequest {
  /** The parent resource name where the config to be created, for example: "projects/my-awesome-project" */
  parent: string;
  /** The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps. */
  idpId?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
}

export const CreateProjectsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    idpId: Schema.optional(Schema.String).pipe(T.HttpQuery("idpId")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/defaultSupportedIdpConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDefaultSupportedIdpConfigsRequest>;

export type CreateProjectsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
export const CreateProjectsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;

export type CreateProjectsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a default supported Idp configuration for an Identity Toolkit project. */
export const createProjectsDefaultSupportedIdpConfigs: API.OperationMethod<
  CreateProjectsDefaultSupportedIdpConfigsRequest,
  CreateProjectsDefaultSupportedIdpConfigsResponse,
  CreateProjectsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDefaultSupportedIdpConfigsRequest,
  output: CreateProjectsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsOauthIdpConfigsRequest {
  /** The parent resource name where the config to be created, for example: "projects/my-awesome-project" */
  parent: string;
  /** The id to use for this config. */
  oauthIdpConfigId?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
}

export const CreateProjectsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    oauthIdpConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("oauthIdpConfigId"),
    ),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/oauthIdpConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsOauthIdpConfigsRequest>;

export type CreateProjectsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
export const CreateProjectsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

export type CreateProjectsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an Oidc Idp configuration for an Identity Toolkit project. */
export const createProjectsOauthIdpConfigs: API.OperationMethod<
  CreateProjectsOauthIdpConfigsRequest,
  CreateProjectsOauthIdpConfigsResponse,
  CreateProjectsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsOauthIdpConfigsRequest,
  output: CreateProjectsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsOauthIdpConfigsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The parent resource name, for example, "projects/my-awesome-project". */
  parent: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/oauthIdpConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsOauthIdpConfigsRequest>;

export type ListProjectsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;
export const ListProjectsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;

export type ListProjectsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all Oidc Idp configurations for an Identity Toolkit project. */
export const listProjectsOauthIdpConfigs: API.PaginatedOperationMethod<
  ListProjectsOauthIdpConfigsRequest,
  ListProjectsOauthIdpConfigsResponse,
  ListProjectsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOauthIdpConfigsRequest,
  output: ListProjectsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsOauthIdpConfigsRequest {
  /** The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. */
  name: string;
}

export const GetProjectsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOauthIdpConfigsRequest>;

export type GetProjectsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
export const GetProjectsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

export type GetProjectsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve an Oidc Idp configuration for an Identity Toolkit project. */
export const getProjectsOauthIdpConfigs: API.OperationMethod<
  GetProjectsOauthIdpConfigsRequest,
  GetProjectsOauthIdpConfigsResponse,
  GetProjectsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsOauthIdpConfigsRequest,
  output: GetProjectsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsOauthIdpConfigsRequest {
  /** The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. */
  name: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
}

export const PatchProjectsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsOauthIdpConfigsRequest>;

export type PatchProjectsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
export const PatchProjectsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

export type PatchProjectsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an Oidc Idp configuration for an Identity Toolkit project. */
export const patchProjectsOauthIdpConfigs: API.OperationMethod<
  PatchProjectsOauthIdpConfigsRequest,
  PatchProjectsOauthIdpConfigsResponse,
  PatchProjectsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsOauthIdpConfigsRequest,
  output: PatchProjectsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsOauthIdpConfigsRequest {
  /** The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. */
  name: string;
}

export const DeleteProjectsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsOauthIdpConfigsRequest>;

export type DeleteProjectsOauthIdpConfigsResponse = GoogleProtobufEmpty;
export const DeleteProjectsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an Oidc Idp configuration for an Identity Toolkit project. */
export const deleteProjectsOauthIdpConfigs: API.OperationMethod<
  DeleteProjectsOauthIdpConfigsRequest,
  DeleteProjectsOauthIdpConfigsResponse,
  DeleteProjectsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsOauthIdpConfigsRequest,
  output: DeleteProjectsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsTenantsRequest {
  /** Resource name of the tenant to delete. */
  name: string;
}

export const DeleteProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsTenantsRequest>;

export type DeleteProjectsTenantsResponse = GoogleProtobufEmpty;
export const DeleteProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a tenant. Requires write permission on the Agent project. */
export const deleteProjectsTenants: API.OperationMethod<
  DeleteProjectsTenantsRequest,
  DeleteProjectsTenantsResponse,
  DeleteProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsTenantsRequest,
  output: DeleteProjectsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsTenantsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1SetIamPolicyRequest;
}

export const SetIamPolicyProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsTenantsRequest>;

export type SetIamPolicyProjectsTenantsResponse = GoogleIamV1Policy;
export const SetIamPolicyProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type SetIamPolicyProjectsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource. */
export const setIamPolicyProjectsTenants: API.OperationMethod<
  SetIamPolicyProjectsTenantsRequest,
  SetIamPolicyProjectsTenantsResponse,
  SetIamPolicyProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsTenantsRequest,
  output: SetIamPolicyProjectsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsTenantsRequest {
  /** Resource name of the tenant to retrieve. */
  name: string;
}

export const GetProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTenantsRequest>;

export type GetProjectsTenantsResponse =
  GoogleCloudIdentitytoolkitAdminV2Tenant;
export const GetProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2Tenant;

export type GetProjectsTenantsError = DefaultErrors | NotFound | Forbidden;

/** Get a tenant. Requires read permission on the Tenant resource. */
export const getProjectsTenants: API.OperationMethod<
  GetProjectsTenantsRequest,
  GetProjectsTenantsResponse,
  GetProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTenantsRequest,
  output: GetProjectsTenantsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsTenantsRequest {
  /** Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}" */
  name: string;
  /** If provided, only update fields set in the update mask. Otherwise, all settable fields will be updated. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2Tenant;
}

export const PatchProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Tenant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsTenantsRequest>;

export type PatchProjectsTenantsResponse =
  GoogleCloudIdentitytoolkitAdminV2Tenant;
export const PatchProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2Tenant;

export type PatchProjectsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a tenant. Requires write permission on the Tenant resource. */
export const patchProjectsTenants: API.OperationMethod<
  PatchProjectsTenantsRequest,
  PatchProjectsTenantsResponse,
  PatchProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsTenantsRequest,
  output: PatchProjectsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsTenantsRequest {
  /** The maximum number of results to return, capped at 1000. If not specified, the default value is 20. */
  pageSize?: number;
  /** Required. The parent resource name to list tenants for. */
  parent: string;
  /** The pagination token from the response of a previous request. */
  pageToken?: string;
}

export const ListProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/tenants" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTenantsRequest>;

export type ListProjectsTenantsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse;
export const ListProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse;

export type ListProjectsTenantsError = DefaultErrors | NotFound | Forbidden;

/** List tenants under the given agent project. Requires read permission on the Agent project. */
export const listProjectsTenants: API.PaginatedOperationMethod<
  ListProjectsTenantsRequest,
  ListProjectsTenantsResponse,
  ListProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTenantsRequest,
  output: ListProjectsTenantsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface TestIamPermissionsProjectsTenantsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1TestIamPermissionsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsTenantsRequest>;

export type TestIamPermissionsProjectsTenantsResponse =
  GoogleIamV1TestIamPermissionsResponse;
export const TestIamPermissionsProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1TestIamPermissionsResponse;

export type TestIamPermissionsProjectsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request. */
export const testIamPermissionsProjectsTenants: API.OperationMethod<
  TestIamPermissionsProjectsTenantsRequest,
  TestIamPermissionsProjectsTenantsResponse,
  TestIamPermissionsProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsTenantsRequest,
  output: TestIamPermissionsProjectsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetIamPolicyProjectsTenantsRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GoogleIamV1GetIamPolicyRequest;
}

export const GetIamPolicyProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GoogleIamV1GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsTenantsRequest>;

export type GetIamPolicyProjectsTenantsResponse = GoogleIamV1Policy;
export const GetIamPolicyProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleIamV1Policy;

export type GetIamPolicyProjectsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource. */
export const getIamPolicyProjectsTenants: API.OperationMethod<
  GetIamPolicyProjectsTenantsRequest,
  GetIamPolicyProjectsTenantsResponse,
  GetIamPolicyProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsTenantsRequest,
  output: GetIamPolicyProjectsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsTenantsRequest {
  /** The parent resource name where the tenant will be created. For example, "projects/project1". */
  parent: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2Tenant;
}

export const CreateProjectsTenantsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2Tenant).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/tenants", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTenantsRequest>;

export type CreateProjectsTenantsResponse =
  GoogleCloudIdentitytoolkitAdminV2Tenant;
export const CreateProjectsTenantsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2Tenant;

export type CreateProjectsTenantsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a tenant. Requires write permission on the Agent project. */
export const createProjectsTenants: API.OperationMethod<
  CreateProjectsTenantsRequest,
  CreateProjectsTenantsResponse,
  CreateProjectsTenantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTenantsRequest,
  output: CreateProjectsTenantsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsTenantsDefaultSupportedIdpConfigsRequest {
  /** The parent resource name where the config to be created, for example: "projects/my-awesome-project" */
  parent: string;
  /** The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps. */
  idpId?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
}

export const CreateProjectsTenantsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    idpId: Schema.optional(Schema.String).pipe(T.HttpQuery("idpId")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/defaultSupportedIdpConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTenantsDefaultSupportedIdpConfigsRequest>;

export type CreateProjectsTenantsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
export const CreateProjectsTenantsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;

export type CreateProjectsTenantsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a default supported Idp configuration for an Identity Toolkit project. */
export const createProjectsTenantsDefaultSupportedIdpConfigs: API.OperationMethod<
  CreateProjectsTenantsDefaultSupportedIdpConfigsRequest,
  CreateProjectsTenantsDefaultSupportedIdpConfigsResponse,
  CreateProjectsTenantsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTenantsDefaultSupportedIdpConfigsRequest,
  output: CreateProjectsTenantsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsTenantsDefaultSupportedIdpConfigsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The parent resource name, for example, "projects/my-awesome-project". */
  parent: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsTenantsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/defaultSupportedIdpConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTenantsDefaultSupportedIdpConfigsRequest>;

export type ListProjectsTenantsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;
export const ListProjectsTenantsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse;

export type ListProjectsTenantsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all default supported Idp configurations for an Identity Toolkit project. */
export const listProjectsTenantsDefaultSupportedIdpConfigs: API.PaginatedOperationMethod<
  ListProjectsTenantsDefaultSupportedIdpConfigsRequest,
  ListProjectsTenantsDefaultSupportedIdpConfigsResponse,
  ListProjectsTenantsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTenantsDefaultSupportedIdpConfigsRequest,
  output: ListProjectsTenantsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsTenantsDefaultSupportedIdpConfigsRequest {
  /** The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name: string;
}

export const GetProjectsTenantsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTenantsDefaultSupportedIdpConfigsRequest>;

export type GetProjectsTenantsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
export const GetProjectsTenantsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;

export type GetProjectsTenantsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve a default supported Idp configuration for an Identity Toolkit project. */
export const getProjectsTenantsDefaultSupportedIdpConfigs: API.OperationMethod<
  GetProjectsTenantsDefaultSupportedIdpConfigsRequest,
  GetProjectsTenantsDefaultSupportedIdpConfigsResponse,
  GetProjectsTenantsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTenantsDefaultSupportedIdpConfigsRequest,
  output: GetProjectsTenantsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsTenantsDefaultSupportedIdpConfigsRequest {
  /** The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
}

export const PatchProjectsTenantsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsTenantsDefaultSupportedIdpConfigsRequest>;

export type PatchProjectsTenantsDefaultSupportedIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;
export const PatchProjectsTenantsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig;

export type PatchProjectsTenantsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a default supported Idp configuration for an Identity Toolkit project. */
export const patchProjectsTenantsDefaultSupportedIdpConfigs: API.OperationMethod<
  PatchProjectsTenantsDefaultSupportedIdpConfigsRequest,
  PatchProjectsTenantsDefaultSupportedIdpConfigsResponse,
  PatchProjectsTenantsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsTenantsDefaultSupportedIdpConfigsRequest,
  output: PatchProjectsTenantsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsTenantsDefaultSupportedIdpConfigsRequest {
  /** The resource name of the config, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
  name: string;
}

export const DeleteProjectsTenantsDefaultSupportedIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsTenantsDefaultSupportedIdpConfigsRequest>;

export type DeleteProjectsTenantsDefaultSupportedIdpConfigsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsTenantsDefaultSupportedIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsTenantsDefaultSupportedIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a default supported Idp configuration for an Identity Toolkit project. */
export const deleteProjectsTenantsDefaultSupportedIdpConfigs: API.OperationMethod<
  DeleteProjectsTenantsDefaultSupportedIdpConfigsRequest,
  DeleteProjectsTenantsDefaultSupportedIdpConfigsResponse,
  DeleteProjectsTenantsDefaultSupportedIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsTenantsDefaultSupportedIdpConfigsRequest,
  output: DeleteProjectsTenantsDefaultSupportedIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsTenantsOauthIdpConfigsRequest {
  /** The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. */
  name: string;
}

export const DeleteProjectsTenantsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsTenantsOauthIdpConfigsRequest>;

export type DeleteProjectsTenantsOauthIdpConfigsResponse = GoogleProtobufEmpty;
export const DeleteProjectsTenantsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsTenantsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an Oidc Idp configuration for an Identity Toolkit project. */
export const deleteProjectsTenantsOauthIdpConfigs: API.OperationMethod<
  DeleteProjectsTenantsOauthIdpConfigsRequest,
  DeleteProjectsTenantsOauthIdpConfigsResponse,
  DeleteProjectsTenantsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsTenantsOauthIdpConfigsRequest,
  output: DeleteProjectsTenantsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsTenantsOauthIdpConfigsRequest {
  /** The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. */
  name: string;
}

export const GetProjectsTenantsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTenantsOauthIdpConfigsRequest>;

export type GetProjectsTenantsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
export const GetProjectsTenantsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

export type GetProjectsTenantsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve an Oidc Idp configuration for an Identity Toolkit project. */
export const getProjectsTenantsOauthIdpConfigs: API.OperationMethod<
  GetProjectsTenantsOauthIdpConfigsRequest,
  GetProjectsTenantsOauthIdpConfigsResponse,
  GetProjectsTenantsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTenantsOauthIdpConfigsRequest,
  output: GetProjectsTenantsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsTenantsOauthIdpConfigsRequest {
  /** The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. */
  name: string;
  /** The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
}

export const PatchProjectsTenantsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsTenantsOauthIdpConfigsRequest>;

export type PatchProjectsTenantsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
export const PatchProjectsTenantsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

export type PatchProjectsTenantsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an Oidc Idp configuration for an Identity Toolkit project. */
export const patchProjectsTenantsOauthIdpConfigs: API.OperationMethod<
  PatchProjectsTenantsOauthIdpConfigsRequest,
  PatchProjectsTenantsOauthIdpConfigsResponse,
  PatchProjectsTenantsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsTenantsOauthIdpConfigsRequest,
  output: PatchProjectsTenantsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsTenantsOauthIdpConfigsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The parent resource name, for example, "projects/my-awesome-project". */
  parent: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsTenantsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/oauthIdpConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTenantsOauthIdpConfigsRequest>;

export type ListProjectsTenantsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;
export const ListProjectsTenantsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse;

export type ListProjectsTenantsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all Oidc Idp configurations for an Identity Toolkit project. */
export const listProjectsTenantsOauthIdpConfigs: API.PaginatedOperationMethod<
  ListProjectsTenantsOauthIdpConfigsRequest,
  ListProjectsTenantsOauthIdpConfigsResponse,
  ListProjectsTenantsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTenantsOauthIdpConfigsRequest,
  output: ListProjectsTenantsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsTenantsOauthIdpConfigsRequest {
  /** The parent resource name where the config to be created, for example: "projects/my-awesome-project" */
  parent: string;
  /** The id to use for this config. */
  oauthIdpConfigId?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
}

export const CreateProjectsTenantsOauthIdpConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    oauthIdpConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("oauthIdpConfigId"),
    ),
    body: Schema.optional(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/oauthIdpConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTenantsOauthIdpConfigsRequest>;

export type CreateProjectsTenantsOauthIdpConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;
export const CreateProjectsTenantsOauthIdpConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig;

export type CreateProjectsTenantsOauthIdpConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an Oidc Idp configuration for an Identity Toolkit project. */
export const createProjectsTenantsOauthIdpConfigs: API.OperationMethod<
  CreateProjectsTenantsOauthIdpConfigsRequest,
  CreateProjectsTenantsOauthIdpConfigsResponse,
  CreateProjectsTenantsOauthIdpConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTenantsOauthIdpConfigsRequest,
  output: CreateProjectsTenantsOauthIdpConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsTenantsInboundSamlConfigsRequest {
  /** The parent resource name where the config to be created, for example: "projects/my-awesome-project" */
  parent: string;
  /** The id to use for this config. */
  inboundSamlConfigId?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
}

export const CreateProjectsTenantsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    inboundSamlConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("inboundSamlConfigId"),
    ),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/inboundSamlConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTenantsInboundSamlConfigsRequest>;

export type CreateProjectsTenantsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
export const CreateProjectsTenantsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;

export type CreateProjectsTenantsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an inbound SAML configuration for an Identity Toolkit project. */
export const createProjectsTenantsInboundSamlConfigs: API.OperationMethod<
  CreateProjectsTenantsInboundSamlConfigsRequest,
  CreateProjectsTenantsInboundSamlConfigsResponse,
  CreateProjectsTenantsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTenantsInboundSamlConfigsRequest,
  output: CreateProjectsTenantsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsTenantsInboundSamlConfigsRequest {
  /** The parent resource name, for example, "projects/my-awesome-project". */
  parent: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** The maximum number of items to return. */
  pageSize?: number;
}

export const ListProjectsTenantsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/inboundSamlConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTenantsInboundSamlConfigsRequest>;

export type ListProjectsTenantsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;
export const ListProjectsTenantsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;

export type ListProjectsTenantsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all inbound SAML configurations for an Identity Toolkit project. */
export const listProjectsTenantsInboundSamlConfigs: API.PaginatedOperationMethod<
  ListProjectsTenantsInboundSamlConfigsRequest,
  ListProjectsTenantsInboundSamlConfigsResponse,
  ListProjectsTenantsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTenantsInboundSamlConfigsRequest,
  output: ListProjectsTenantsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsTenantsInboundSamlConfigsRequest {
  /** The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. */
  name: string;
}

export const GetProjectsTenantsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTenantsInboundSamlConfigsRequest>;

export type GetProjectsTenantsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
export const GetProjectsTenantsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;

export type GetProjectsTenantsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve an inbound SAML configuration for an Identity Toolkit project. */
export const getProjectsTenantsInboundSamlConfigs: API.OperationMethod<
  GetProjectsTenantsInboundSamlConfigsRequest,
  GetProjectsTenantsInboundSamlConfigsResponse,
  GetProjectsTenantsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTenantsInboundSamlConfigsRequest,
  output: GetProjectsTenantsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsTenantsInboundSamlConfigsRequest {
  /** The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. */
  name: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
}

export const PatchProjectsTenantsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsTenantsInboundSamlConfigsRequest>;

export type PatchProjectsTenantsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
export const PatchProjectsTenantsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;

export type PatchProjectsTenantsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an inbound SAML configuration for an Identity Toolkit project. */
export const patchProjectsTenantsInboundSamlConfigs: API.OperationMethod<
  PatchProjectsTenantsInboundSamlConfigsRequest,
  PatchProjectsTenantsInboundSamlConfigsResponse,
  PatchProjectsTenantsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsTenantsInboundSamlConfigsRequest,
  output: PatchProjectsTenantsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsTenantsInboundSamlConfigsRequest {
  /** The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. */
  name: string;
}

export const DeleteProjectsTenantsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsTenantsInboundSamlConfigsRequest>;

export type DeleteProjectsTenantsInboundSamlConfigsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsTenantsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsTenantsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an inbound SAML configuration for an Identity Toolkit project. */
export const deleteProjectsTenantsInboundSamlConfigs: API.OperationMethod<
  DeleteProjectsTenantsInboundSamlConfigsRequest,
  DeleteProjectsTenantsInboundSamlConfigsResponse,
  DeleteProjectsTenantsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsTenantsInboundSamlConfigsRequest,
  output: DeleteProjectsTenantsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsInboundSamlConfigsRequest {
  /** The parent resource name where the config to be created, for example: "projects/my-awesome-project" */
  parent: string;
  /** The id to use for this config. */
  inboundSamlConfigId?: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
}

export const CreateProjectsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    inboundSamlConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("inboundSamlConfigId"),
    ),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/inboundSamlConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsInboundSamlConfigsRequest>;

export type CreateProjectsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
export const CreateProjectsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;

export type CreateProjectsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an inbound SAML configuration for an Identity Toolkit project. */
export const createProjectsInboundSamlConfigs: API.OperationMethod<
  CreateProjectsInboundSamlConfigsRequest,
  CreateProjectsInboundSamlConfigsResponse,
  CreateProjectsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsInboundSamlConfigsRequest,
  output: CreateProjectsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsInboundSamlConfigsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The parent resource name, for example, "projects/my-awesome-project". */
  parent: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListProjectsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/inboundSamlConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsInboundSamlConfigsRequest>;

export type ListProjectsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;
export const ListProjectsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse;

export type ListProjectsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all inbound SAML configurations for an Identity Toolkit project. */
export const listProjectsInboundSamlConfigs: API.PaginatedOperationMethod<
  ListProjectsInboundSamlConfigsRequest,
  ListProjectsInboundSamlConfigsResponse,
  ListProjectsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsInboundSamlConfigsRequest,
  output: ListProjectsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsInboundSamlConfigsRequest {
  /** The resource name of the config, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. */
  name: string;
}

export const GetProjectsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsInboundSamlConfigsRequest>;

export type GetProjectsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
export const GetProjectsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;

export type GetProjectsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieve an inbound SAML configuration for an Identity Toolkit project. */
export const getProjectsInboundSamlConfigs: API.OperationMethod<
  GetProjectsInboundSamlConfigsRequest,
  GetProjectsInboundSamlConfigsResponse,
  GetProjectsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsInboundSamlConfigsRequest,
  output: GetProjectsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsInboundSamlConfigsRequest {
  /** The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask */
  updateMask?: string;
  /** The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. */
  name: string;
  /** Request body */
  body?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
}

export const PatchProjectsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsInboundSamlConfigsRequest>;

export type PatchProjectsInboundSamlConfigsResponse =
  GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;
export const PatchProjectsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig;

export type PatchProjectsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an inbound SAML configuration for an Identity Toolkit project. */
export const patchProjectsInboundSamlConfigs: API.OperationMethod<
  PatchProjectsInboundSamlConfigsRequest,
  PatchProjectsInboundSamlConfigsResponse,
  PatchProjectsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsInboundSamlConfigsRequest,
  output: PatchProjectsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsInboundSamlConfigsRequest {
  /** The resource name of the config to be deleted, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. */
  name: string;
}

export const DeleteProjectsInboundSamlConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsInboundSamlConfigsRequest>;

export type DeleteProjectsInboundSamlConfigsResponse = GoogleProtobufEmpty;
export const DeleteProjectsInboundSamlConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsInboundSamlConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an inbound SAML configuration for an Identity Toolkit project. */
export const deleteProjectsInboundSamlConfigs: API.OperationMethod<
  DeleteProjectsInboundSamlConfigsRequest,
  DeleteProjectsInboundSamlConfigsResponse,
  DeleteProjectsInboundSamlConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsInboundSamlConfigsRequest,
  output: DeleteProjectsInboundSamlConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDefaultSupportedIdpsRequest {
  /** The maximum number of items to return. */
  pageSize?: number;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
}

export const ListDefaultSupportedIdpsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/defaultSupportedIdps" }),
    svc,
  ) as unknown as Schema.Schema<ListDefaultSupportedIdpsRequest>;

export type ListDefaultSupportedIdpsResponse =
  GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse;
export const ListDefaultSupportedIdpsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse;

export type ListDefaultSupportedIdpsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all default supported Idps. */
export const listDefaultSupportedIdps: API.PaginatedOperationMethod<
  ListDefaultSupportedIdpsRequest,
  ListDefaultSupportedIdpsResponse,
  ListDefaultSupportedIdpsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDefaultSupportedIdpsRequest,
  output: ListDefaultSupportedIdpsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
