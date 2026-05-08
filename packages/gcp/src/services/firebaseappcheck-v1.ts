// ==========================================================================
// Firebase App Check API (firebaseappcheck v1)
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
  name: "firebaseappcheck",
  version: "v1",
  rootUrl: "https://firebaseappcheck.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest {
  /** Required. A custom token signed using your project's Admin SDK service account credentials. */
  customToken?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
}

export const GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customToken: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest",
  });

export interface GoogleFirebaseAppcheckV1Service {
  /** Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS) */
  name?: string;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232. */
  etag?: string;
  /** Required. The App Check enforcement mode for this service. */
  enforcementMode?: "OFF" | "UNENFORCED" | "ENFORCED" | (string & {});
  /** Optional. The replay protection enforcement mode for this service. Note that this field cannot be set to a level higher than the overall App Check enforcement mode. For example, if the overall App Check enforcement mode is set to `UNENFORCED`, this field cannot be set to `ENFORCED`. In order to enforce replay protection, you must first enforce App Check. An HTTP 400 error will be returned in this case. By default, this field is set to `OFF`. Setting this field to `UNENFORCED` or `ENFORCED` is considered opting into replay protection. Once opted in, requests to your protected services may experience higher latency. To opt out of replay protection after opting in, set this field to `OFF`. */
  replayProtection?: "OFF" | "UNENFORCED" | "ENFORCED" | (string & {});
  /** Output only. Timestamp when this service configuration object was most recently updated. */
  updateTime?: string;
}

export const GoogleFirebaseAppcheckV1Service: Schema.Schema<GoogleFirebaseAppcheckV1Service> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    enforcementMode: Schema.optional(Schema.String),
    replayProtection: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1Service" });

export interface GoogleFirebaseAppcheckV1BatchUpdateServicesResponse {
  /** Service objects after the updates have been applied. */
  services?: ReadonlyArray<GoogleFirebaseAppcheckV1Service>;
}

export const GoogleFirebaseAppcheckV1BatchUpdateServicesResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchUpdateServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    services: Schema.optional(Schema.Array(GoogleFirebaseAppcheckV1Service)),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchUpdateServicesResponse",
  });

export interface GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest {
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
  /** Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken. */
  debugToken?: string;
}

export const GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limitedUse: Schema.optional(Schema.Boolean),
    debugToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest",
  });

export interface GoogleFirebaseAppcheckV1ResourcePolicy {
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232. */
  etag?: string;
  /** Required. The App Check enforcement mode for this resource. This will override the App Check overall EnforcementMode setting on the service. */
  enforcementMode?: "OFF" | "UNENFORCED" | "ENFORCED" | (string & {});
  /** Output only. Timestamp when this resource policy configuration object was most recently updated. */
  updateTime?: string;
  /** Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID. */
  name?: string;
  /** Required. Service specific name of the resource object to which this policy applies, in the format: * **iOS OAuth clients** (Google Identity for iOS): `//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauth_client_id}` Note that the resource must belong to the service specified in the `name` and be from the same project as this policy, but the resource is allowed to be missing at the time of creation of this policy; in that case, we make a best-effort attempt at respecting this policy, but it may not have any effect until the resource is fully created. */
  targetResource?: string;
}

export const GoogleFirebaseAppcheckV1ResourcePolicy: Schema.Schema<GoogleFirebaseAppcheckV1ResourcePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    enforcementMode: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    targetResource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1ResourcePolicy" });

export interface GoogleFirebaseAppcheckV1ListResourcePoliciesResponse {
  /** The ResourcePolicy objects retrieved. */
  resourcePolicies?: ReadonlyArray<GoogleFirebaseAppcheckV1ResourcePolicy>;
  /** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListResourcePolicies to find the next group of ResourcePolicy objects. Page tokens are short-lived and should not be persisted. */
  nextPageToken?: string;
}

export const GoogleFirebaseAppcheckV1ListResourcePoliciesResponse: Schema.Schema<GoogleFirebaseAppcheckV1ListResourcePoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePolicies: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1ResourcePolicy),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ListResourcePoliciesResponse",
  });

export interface GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity {
  /** Specifies the minimum device integrity level in order for the device to be considered valid. Any device with a device recognition verdict lower than this level will be rejected. If this is unspecified, the default level is `NO_INTEGRITY`. */
  minDeviceRecognitionLevel?:
    | "DEVICE_RECOGNITION_LEVEL_UNSPECIFIED"
    | "NO_INTEGRITY"
    | "MEETS_BASIC_INTEGRITY"
    | "MEETS_DEVICE_INTEGRITY"
    | "MEETS_STRONG_INTEGRITY"
    | (string & {});
}

export const GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity: Schema.Schema<GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minDeviceRecognitionLevel: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity",
  });

export interface GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest {
  /** Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app. */
  safetyNetToken?: string;
}

export const GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    safetyNetToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest",
  });

export interface GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity {
  /** Specifies whether your running app is allowed to have the `UNRECOGNIZED_VERSION` [app recognition verdict](https://developer.android.com/google/play/integrity/verdicts#application-integrity-field). Note that the app recognition verdict `PLAY_RECOGNIZED` is a strong, comprehensive integrity signal that takes into account various other signals, including conditional and optional device integrity responses that you have opted into. If your app is published off-Play, this field should be set to `true` to allow instances of your app installed from off-Play sources to function. If set to `false`, only `PLAY_RECOGNIZED` verdicts are allowed, and both `UNRECOGNIZED_VERSION` and `UNEVALUATED` will be rejected. If set to `true`, any app recognition verdict is allowed. The default value is `false`. */
  allowUnrecognizedVersion?: boolean;
}

export const GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity: Schema.Schema<GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowUnrecognizedVersion: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity",
  });

export interface GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails {
  /** Specifies whether the caller must have received the [`LICENSED` verdict](https://developer.android.com/google/play/integrity/verdicts#account-details-field). For additional details about scenarios where your users will receive this `LICENSED` label, see [the default responses table](https://developer.android.com/google/play/integrity/setup#default). If set to `true`, apps without the `LICENSED` app licensing verdict will be rejected. If set to `false`, any app licensing verdict is allowed. The default value is `false`. */
  requireLicensed?: boolean;
}

export const GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails: Schema.Schema<GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requireLicensed: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails",
  });

export interface GoogleFirebaseAppcheckV1PlayIntegrityConfig {
  /** Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
  name?: string;
  /** Specifies application integrity requirements for Android devices running your app. These settings correspond to requirements on the [**application integrity** field](https://developer.android.com/google/play/integrity/verdicts#application-integrity-field) obtained from the Play Integrity API. See the [default responses table](https://developer.android.com/google/play/integrity/setup#default) for a quick summary. The default values for these settings work for most apps, and are recommended. */
  appIntegrity?: GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity;
  /** Specifies account requirements for Android devices running your app. These settings correspond to requirements on the [**account details** field](https://developer.android.com/google/play/integrity/verdicts#account-details-field) obtained from the Play Integrity API. See the [default responses table](https://developer.android.com/google/play/integrity/setup#default) for a quick summary. The default values for these settings work for most apps, and are recommended. */
  accountDetails?: GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails;
  /** Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
  tokenTtl?: string;
  /** Specifies device integrity requirements for Android devices running your app. These settings correspond to requirements on the [**device integrity** field](https://developer.android.com/google/play/integrity/verdicts#device-integrity-field) obtained from the Play Integrity API. See the [default responses table](https://developer.android.com/google/play/integrity/setup#default) for a quick summary. Warning: There are also [conditional](https://developer.android.com/google/play/integrity/setup#conditional) as well as [optional](https://developer.android.com/google/play/integrity/setup#optional_device_information) responses that you can receive, but requires additional explicit opt-in from you. The App Check API is **not** responsible for any such opt-ins. The default values for these settings work for most apps, and are recommended. */
  deviceIntegrity?: GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity;
}

export const GoogleFirebaseAppcheckV1PlayIntegrityConfig: Schema.Schema<GoogleFirebaseAppcheckV1PlayIntegrityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    appIntegrity: Schema.optional(
      GoogleFirebaseAppcheckV1PlayIntegrityConfigAppIntegrity,
    ),
    accountDetails: Schema.optional(
      GoogleFirebaseAppcheckV1PlayIntegrityConfigAccountDetails,
    ),
    tokenTtl: Schema.optional(Schema.String),
    deviceIntegrity: Schema.optional(
      GoogleFirebaseAppcheckV1PlayIntegrityConfigDeviceIntegrity,
    ),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1PlayIntegrityConfig" });

export interface GoogleFirebaseAppcheckV1AppCheckToken {
  /** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
  ttl?: string;
  /** The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and GCP project. This token is used to access Google services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK or third-party libraries. */
  token?: string;
}

export const GoogleFirebaseAppcheckV1AppCheckToken: Schema.Schema<GoogleFirebaseAppcheckV1AppCheckToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ttl: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1AppCheckToken" });

export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest {
  /** Required. The artifact returned by a previous call to ExchangeAppAttestAttestation. */
  artifact?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
  /** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
  challenge?: string;
  /** Required. The CBOR-encoded assertion returned by the client-side App Attest API. */
  assertion?: string;
}

export const GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifact: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
    challenge: Schema.optional(Schema.String),
    assertion: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest",
  });

export interface GoogleFirebaseAppcheckV1DebugToken {
  /** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
  name?: string;
  /** Required. A human readable display name used to identify this debug token. */
  displayName?: string;
  /** Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response. */
  token?: string;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232. */
  etag?: string;
  /** Output only. Timestamp when this debug token was most recently updated. */
  updateTime?: string;
}

export const GoogleFirebaseAppcheckV1DebugToken: Schema.Schema<GoogleFirebaseAppcheckV1DebugToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1DebugToken" });

export interface GoogleFirebaseAppcheckV1ListDebugTokensResponse {
  /** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted. */
  nextPageToken?: string;
  /** The DebugTokens retrieved. */
  debugTokens?: ReadonlyArray<GoogleFirebaseAppcheckV1DebugToken>;
}

export const GoogleFirebaseAppcheckV1ListDebugTokensResponse: Schema.Schema<GoogleFirebaseAppcheckV1ListDebugTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    debugTokens: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1DebugToken),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ListDebugTokensResponse",
  });

export interface GoogleFirebaseAppcheckV1SafetyNetConfig {
  /** Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
  tokenTtl?: string;
  /** Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
  name?: string;
}

export const GoogleFirebaseAppcheckV1SafetyNetConfig: Schema.Schema<GoogleFirebaseAppcheckV1SafetyNetConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenTtl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1SafetyNetConfig" });

export interface GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse {
  /** SafetyNetConfigs retrieved. */
  configs?: ReadonlyArray<GoogleFirebaseAppcheckV1SafetyNetConfig>;
}

export const GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1SafetyNetConfig),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse",
  });

export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest {
  /** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
  challenge?: string;
  /** Required. The key ID generated by App Attest for the client app. */
  keyId?: string;
  /** Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response. */
  attestationStatement?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
}

export const GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    challenge: Schema.optional(Schema.String),
    keyId: Schema.optional(Schema.String),
    attestationStatement: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest",
  });

export interface GoogleFirebaseAppcheckV1AppAttestConfig {
  /** Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
  name?: string;
  /** Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
  tokenTtl?: string;
}

export const GoogleFirebaseAppcheckV1AppAttestConfig: Schema.Schema<GoogleFirebaseAppcheckV1AppAttestConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    tokenTtl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1AppAttestConfig" });

export interface GoogleFirebaseAppcheckV1ListServicesResponse {
  /** The Services retrieved. */
  services?: ReadonlyArray<GoogleFirebaseAppcheckV1Service>;
  /** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. */
  nextPageToken?: string;
}

export const GoogleFirebaseAppcheckV1ListServicesResponse: Schema.Schema<GoogleFirebaseAppcheckV1ListServicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    services: Schema.optional(Schema.Array(GoogleFirebaseAppcheckV1Service)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1ListServicesResponse" });

export interface GoogleFirebaseAppcheckV1UpdateServiceRequest {
  /** Required. The Service to update. The Service's `name` field is used to identify the Service to be updated, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS) */
  service?: GoogleFirebaseAppcheckV1Service;
  /** Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. */
  updateMask?: string;
}

export const GoogleFirebaseAppcheckV1UpdateServiceRequest: Schema.Schema<GoogleFirebaseAppcheckV1UpdateServiceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    service: Schema.optional(GoogleFirebaseAppcheckV1Service),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1UpdateServiceRequest" });

export interface GoogleFirebaseAppcheckV1BatchUpdateServicesRequest {
  /** Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch. */
  requests?: ReadonlyArray<GoogleFirebaseAppcheckV1UpdateServiceRequest>;
  /** Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed. */
  updateMask?: string;
}

export const GoogleFirebaseAppcheckV1BatchUpdateServicesRequest: Schema.Schema<GoogleFirebaseAppcheckV1BatchUpdateServicesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1UpdateServiceRequest),
    ),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchUpdateServicesRequest",
  });

export interface GoogleFirebaseAppcheckV1PublicJwk {
  /** See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4). */
  alg?: string;
  /** See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2). */
  e?: string;
  /** See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5). */
  kid?: string;
  /** See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2). */
  use?: string;
  /** See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1). */
  n?: string;
  /** See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1). */
  kty?: string;
}

export const GoogleFirebaseAppcheckV1PublicJwk: Schema.Schema<GoogleFirebaseAppcheckV1PublicJwk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alg: Schema.optional(Schema.String),
    e: Schema.optional(Schema.String),
    kid: Schema.optional(Schema.String),
    use: Schema.optional(Schema.String),
    n: Schema.optional(Schema.String),
    kty: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1PublicJwk" });

export interface GoogleFirebaseAppcheckV1PublicJwkSet {
  /** The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). */
  keys?: ReadonlyArray<GoogleFirebaseAppcheckV1PublicJwk>;
}

export const GoogleFirebaseAppcheckV1PublicJwkSet: Schema.Schema<GoogleFirebaseAppcheckV1PublicJwkSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(GoogleFirebaseAppcheckV1PublicJwk)),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1PublicJwkSet" });

export interface GoogleFirebaseAppcheckV1RecaptchaV3Config {
  /** Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. */
  tokenTtl?: string;
  /** Specifies a minimum score required for a reCAPTCHA token to be considered valid. If its score is greater than or equal to this value, it will be accepted; otherwise, it will be rejected. The value must be between 0.0 and 1.0. The default value is 0.5. */
  minValidScore?: number;
  /** Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set. */
  siteSecretSet?: boolean;
  /** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` */
  name?: string;
  /** Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. */
  siteSecret?: string;
}

export const GoogleFirebaseAppcheckV1RecaptchaV3Config: Schema.Schema<GoogleFirebaseAppcheckV1RecaptchaV3Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenTtl: Schema.optional(Schema.String),
    minValidScore: Schema.optional(Schema.Number),
    siteSecretSet: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    siteSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1RecaptchaV3Config" });

export interface GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest {
  /** Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages). */
  recaptchaEnterpriseToken?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
}

export const GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recaptchaEnterpriseToken: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest",
  });

export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse {
  /** An artifact that can be used in future calls to ExchangeAppAttestAssertion. */
  artifact?: string;
  /** Encapsulates an App Check token. */
  appCheckToken?: GoogleFirebaseAppcheckV1AppCheckToken;
}

export const GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifact: Schema.optional(Schema.String),
    appCheckToken: Schema.optional(GoogleFirebaseAppcheckV1AppCheckToken),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse",
  });

export interface GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest {
  /** Required. The ResourcePolicy to update. The ResourcePolicy's `name` field is used to identify the ResourcePolicy to be updated, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) */
  resourcePolicy?: GoogleFirebaseAppcheckV1ResourcePolicy;
  /** Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`. */
  updateMask?: string;
}

export const GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest: Schema.Schema<GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePolicy: Schema.optional(GoogleFirebaseAppcheckV1ResourcePolicy),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest",
  });

export interface GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest {
  /** Optional. A comma-separated list of names of fields in the ResourcePolicy objects to update. Example: `enforcement_mode`. If this field is present, the `update_mask` field in the UpdateResourcePolicyRequest messages must all match this field, or the entire batch fails and no updates will be committed. */
  updateMask?: string;
  /** Required. The request messages specifying the ResourcePolicy objects to update. A maximum of 100 objects can be updated in a batch. */
  requests?: ReadonlyArray<GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest>;
}

export const GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest: Schema.Schema<GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    requests: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1UpdateResourcePolicyRequest),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest",
  });

export interface GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse {
  /** RecaptchaV3Configs retrieved. */
  configs?: ReadonlyArray<GoogleFirebaseAppcheckV1RecaptchaV3Config>;
}

export const GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1RecaptchaV3Config),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse",
  });

export interface GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest {
  /** Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object. */
  deviceToken?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
}

export const GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceToken: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest",
  });

export interface GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest {}

export const GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest: Schema.Schema<GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest",
  });

export interface GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse {
  /** ResourcePolicy objects after the updates have been applied. */
  resourcePolicies?: ReadonlyArray<GoogleFirebaseAppcheckV1ResourcePolicy>;
}

export const GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourcePolicies: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1ResourcePolicy),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse",
  });

export interface GoogleFirebaseAppcheckV1DeviceCheckConfig {
  /** Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. */
  keyId?: string;
  /** Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set. */
  privateKeySet?: boolean;
  /** Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
  tokenTtl?: string;
  /** Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` */
  name?: string;
  /** Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response. */
  privateKey?: string;
}

export const GoogleFirebaseAppcheckV1DeviceCheckConfig: Schema.Schema<GoogleFirebaseAppcheckV1DeviceCheckConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyId: Schema.optional(Schema.String),
    privateKeySet: Schema.optional(Schema.Boolean),
    tokenTtl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    privateKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirebaseAppcheckV1DeviceCheckConfig" });

export interface GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse {
  /** DeviceCheckConfigs retrieved. */
  configs?: ReadonlyArray<GoogleFirebaseAppcheckV1DeviceCheckConfig>;
}

export const GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1DeviceCheckConfig),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse",
  });

export interface GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse {
  /** A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API. */
  challenge?: string;
  /** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
  ttl?: string;
}

export const GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse: Schema.Schema<GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    challenge: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse",
  });

export interface GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest {
  /** Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app. */
  playIntegrityToken?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
}

export const GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    playIntegrityToken: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest",
  });

export interface GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse {
  /** PlayIntegrityConfigs retrieved. */
  configs?: ReadonlyArray<GoogleFirebaseAppcheckV1PlayIntegrityConfig>;
}

export const GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1PlayIntegrityConfig),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse",
  });

export interface GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse {
  /** AppAttestConfigs retrieved. */
  configs?: ReadonlyArray<GoogleFirebaseAppcheckV1AppAttestConfig>;
}

export const GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1AppAttestConfig),
    ),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse",
  });

export interface GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse {
  /** A one-time use challenge for the client to pass to the App Attest API. */
  challenge?: string;
  /** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
  ttl?: string;
}

export const GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse: Schema.Schema<GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    challenge: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse",
  });

export interface GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigRiskAnalysis {
  /** Specifies a minimum score required for a reCAPTCHA token to be considered valid. If its score is greater than or equal to this value, it will be accepted; otherwise, it will be rejected. The value must be between 0.0 and 1.0. The default value is 0.5. */
  minValidScore?: number;
}

export const GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigRiskAnalysis: Schema.Schema<GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigRiskAnalysis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minValidScore: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigRiskAnalysis",
  });

export interface GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig {
  /** The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key. */
  siteKey?: string;
  /** Specifies risk tolerance and requirements for your application. These settings correspond to requirements on the [**`riskAnalysis`**](https://cloud.google.com/recaptcha/docs/interpret-assessment-website#interpret_assessment) tuple in the assessment obtained from reCAPTCHA Enterprise. The default values for these settings work for most apps, and are recommended. */
  riskAnalysis?: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigRiskAnalysis;
  /** Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
  name?: string;
  /** Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
  tokenTtl?: string;
}

export const GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig: Schema.Schema<GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteKey: Schema.optional(Schema.String),
    riskAnalysis: Schema.optional(
      GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigRiskAnalysis,
    ),
    name: Schema.optional(Schema.String),
    tokenTtl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig",
  });

export interface GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse {
  /** RecaptchaEnterpriseConfigs retrieved. */
  configs?: ReadonlyArray<GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>;
}

export const GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse: Schema.Schema<GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configs: Schema.optional(
      Schema.Array(GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig),
    ),
  }).annotate({
    identifier:
      "GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest {
  /** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
  recaptchaV3Token?: string;
  /** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
  limitedUse?: boolean;
}

export const GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest: Schema.Schema<GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recaptchaV3Token: Schema.optional(Schema.String),
    limitedUse: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest",
  });

export interface GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest {}

export const GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest: Schema.Schema<GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest",
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

export interface GetJwksRequest {
  /** Required. The relative resource name to the public JWK set. Must always be exactly the string `jwks`. */
  name: string;
}

export const GetJwksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetJwksRequest>;

export type GetJwksResponse = GoogleFirebaseAppcheckV1PublicJwkSet;
export const GetJwksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1PublicJwkSet;

export type GetJwksError = DefaultErrors | NotFound | Forbidden;

/** Returns a public JWK set as specified by [RFC 7517](https://tools.ietf.org/html/rfc7517) that can be used to verify App Check tokens. Exactly one of the public keys in the returned set will successfully validate any App Check token that is currently valid. */
export const getJwks: API.OperationMethod<
  GetJwksRequest,
  GetJwksResponse,
  GetJwksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJwksRequest,
  output: GetJwksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExchangeDebugTokenOauthClientsRequest {
  /** Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
}

export const ExchangeDebugTokenOauthClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeDebugToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeDebugTokenOauthClientsRequest>;

export type ExchangeDebugTokenOauthClientsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeDebugTokenOauthClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeDebugTokenOauthClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse. */
export const exchangeDebugTokenOauthClients: API.OperationMethod<
  ExchangeDebugTokenOauthClientsRequest,
  ExchangeDebugTokenOauthClientsResponse,
  ExchangeDebugTokenOauthClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeDebugTokenOauthClientsRequest,
  output: ExchangeDebugTokenOauthClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeAppAttestAssertionOauthClientsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
}

export const ExchangeAppAttestAssertionOauthClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeAppAttestAssertion",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeAppAttestAssertionOauthClientsRequest>;

export type ExchangeAppAttestAssertionOauthClientsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeAppAttestAssertionOauthClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeAppAttestAssertionOauthClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken. */
export const exchangeAppAttestAssertionOauthClients: API.OperationMethod<
  ExchangeAppAttestAssertionOauthClientsRequest,
  ExchangeAppAttestAssertionOauthClientsResponse,
  ExchangeAppAttestAssertionOauthClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeAppAttestAssertionOauthClientsRequest,
  output: ExchangeAppAttestAssertionOauthClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateAppAttestChallengeOauthClientsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest;
}

export const GenerateAppAttestChallengeOauthClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:generateAppAttestChallenge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateAppAttestChallengeOauthClientsRequest>;

export type GenerateAppAttestChallengeOauthClientsResponse =
  GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse;
export const GenerateAppAttestChallengeOauthClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse;

export type GenerateAppAttestChallengeOauthClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls. */
export const generateAppAttestChallengeOauthClients: API.OperationMethod<
  GenerateAppAttestChallengeOauthClientsRequest,
  GenerateAppAttestChallengeOauthClientsResponse,
  GenerateAppAttestChallengeOauthClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAppAttestChallengeOauthClientsRequest,
  output: GenerateAppAttestChallengeOauthClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeAppAttestAttestationOauthClientsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
}

export const ExchangeAppAttestAttestationOauthClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeAppAttestAttestation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeAppAttestAttestationOauthClientsRequest>;

export type ExchangeAppAttestAttestationOauthClientsResponse =
  GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;
export const ExchangeAppAttestAttestationOauthClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;

export type ExchangeAppAttestAttestationOauthClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful). */
export const exchangeAppAttestAttestationOauthClients: API.OperationMethod<
  ExchangeAppAttestAttestationOauthClientsRequest,
  ExchangeAppAttestAttestationOauthClientsResponse,
  ExchangeAppAttestAttestationOauthClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeAppAttestAttestationOauthClientsRequest,
  output: ExchangeAppAttestAttestationOauthClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsServicesRequest {
  /** Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ``` */
  parent: string;
  /** Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined. */
  pageToken?: string;
  /** The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. */
  pageSize?: number;
}

export const ListProjectsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/services" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsServicesRequest>;

export type ListProjectsServicesResponse =
  GoogleFirebaseAppcheckV1ListServicesResponse;
export const ListProjectsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ListServicesResponse;

export type ListProjectsServicesError = DefaultErrors | NotFound | Forbidden;

/** Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned. */
export const listProjectsServices: API.PaginatedOperationMethod<
  ListProjectsServicesRequest,
  ListProjectsServicesResponse,
  ListProjectsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsServicesRequest,
  output: ListProjectsServicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchUpdateProjectsServicesRequest {
  /** Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails. */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1BatchUpdateServicesRequest;
}

export const BatchUpdateProjectsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1BatchUpdateServicesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/services:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsServicesRequest>;

export type BatchUpdateProjectsServicesResponse =
  GoogleFirebaseAppcheckV1BatchUpdateServicesResponse;
export const BatchUpdateProjectsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchUpdateServicesResponse;

export type BatchUpdateProjectsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Atomically updates the specified Service configurations. */
export const batchUpdateProjectsServices: API.OperationMethod<
  BatchUpdateProjectsServicesRequest,
  BatchUpdateProjectsServicesResponse,
  BatchUpdateProjectsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsServicesRequest,
  output: BatchUpdateProjectsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsServicesRequest {
  /** Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS) */
  name: string;
}

export const GetProjectsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsServicesRequest>;

export type GetProjectsServicesResponse = GoogleFirebaseAppcheckV1Service;
export const GetProjectsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1Service;

export type GetProjectsServicesError = DefaultErrors | NotFound | Forbidden;

/** Gets the Service configuration for the specified service name. */
export const getProjectsServices: API.OperationMethod<
  GetProjectsServicesRequest,
  GetProjectsServicesResponse,
  GetProjectsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsServicesRequest,
  output: GetProjectsServicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsServicesRequest {
  /** Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `oauth2.googleapis.com` (Google Identity for iOS) */
  name: string;
  /** Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1Service;
}

export const PatchProjectsServicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppcheckV1Service).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsServicesRequest>;

export type PatchProjectsServicesResponse = GoogleFirebaseAppcheckV1Service;
export const PatchProjectsServicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1Service;

export type PatchProjectsServicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified Service configuration. */
export const patchProjectsServices: API.OperationMethod<
  PatchProjectsServicesRequest,
  PatchProjectsServicesResponse,
  PatchProjectsServicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsServicesRequest,
  output: PatchProjectsServicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsServicesResourcePoliciesRequest {
  /** Required. The relative resource name of the parent Service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) */
  parent: string;
  /** Optional. Filters the results by the specified rule. For the exact syntax of this field, please consult the [AIP-160](https://google.aip.dev/160) standard. Currently, since the only fields in the ResourcePolicy resource are the scalar fields `enforcement_mode` and `target_resource`, this method does not support the traversal operator (`.`) or the has operator (`:`). Here are some examples of valid filters: * `enforcement_mode = ENFORCED` * `target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` * `enforcement_mode = ENFORCED AND target_resource = "//oauth2.googleapis.com/projects/12345/oauthClients/"` */
  filter?: string;
  /** Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicy objects to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined. */
  pageToken?: string;
  /** The maximum number of ResourcePolicy objects to return in the response. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. */
  pageSize?: number;
}

export const ListProjectsServicesResourcePoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/resourcePolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsServicesResourcePoliciesRequest>;

export type ListProjectsServicesResourcePoliciesResponse =
  GoogleFirebaseAppcheckV1ListResourcePoliciesResponse;
export const ListProjectsServicesResourcePoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ListResourcePoliciesResponse;

export type ListProjectsServicesResourcePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all ResourcePolicy configurations for the specified project and service. */
export const listProjectsServicesResourcePolicies: API.PaginatedOperationMethod<
  ListProjectsServicesResourcePoliciesRequest,
  ListProjectsServicesResourcePoliciesResponse,
  ListProjectsServicesResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsServicesResourcePoliciesRequest,
  output: ListProjectsServicesResourcePoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsServicesResourcePoliciesRequest {
  /** The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the ResourcePolicy object, and can be obtained from the ResourcePolicy object received from the last CreateResourcePolicy, GetResourcePolicy, ListResourcePolicies, UpdateResourcePolicy, or BatchUpdateResourcePolicies call. This etag is strongly validated as defined by RFC 7232. */
  etag?: string;
  /** Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` */
  name: string;
}

export const DeleteProjectsServicesResourcePoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsServicesResourcePoliciesRequest>;

export type DeleteProjectsServicesResourcePoliciesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsServicesResourcePoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsServicesResourcePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified ResourcePolicy configuration. */
export const deleteProjectsServicesResourcePolicies: API.OperationMethod<
  DeleteProjectsServicesResourcePoliciesRequest,
  DeleteProjectsServicesResourcePoliciesResponse,
  DeleteProjectsServicesResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsServicesResourcePoliciesRequest,
  output: DeleteProjectsServicesResourcePoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsServicesResourcePoliciesRequest {
  /** Required. The parent service name, in the format ``` projects/{project_number}/services/{service_id} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails. */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest;
}

export const BatchUpdateProjectsServicesResourcePoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/resourcePolicies:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsServicesResourcePoliciesRequest>;

export type BatchUpdateProjectsServicesResourcePoliciesResponse =
  GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse;
export const BatchUpdateProjectsServicesResourcePoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchUpdateResourcePoliciesResponse;

export type BatchUpdateProjectsServicesResourcePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Atomically updates the specified ResourcePolicy configurations. */
export const batchUpdateProjectsServicesResourcePolicies: API.OperationMethod<
  BatchUpdateProjectsServicesResourcePoliciesRequest,
  BatchUpdateProjectsServicesResourcePoliciesResponse,
  BatchUpdateProjectsServicesResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsServicesResourcePoliciesRequest,
  output: BatchUpdateProjectsServicesResourcePoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsServicesResourcePoliciesRequest {
  /** Required. The relative resource name of the parent Service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ResourcePolicy;
}

export const CreateProjectsServicesResourcePoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirebaseAppcheckV1ResourcePolicy).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/resourcePolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsServicesResourcePoliciesRequest>;

export type CreateProjectsServicesResourcePoliciesResponse =
  GoogleFirebaseAppcheckV1ResourcePolicy;
export const CreateProjectsServicesResourcePoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ResourcePolicy;

export type CreateProjectsServicesResourcePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates the specified ResourcePolicy configuration. */
export const createProjectsServicesResourcePolicies: API.OperationMethod<
  CreateProjectsServicesResourcePoliciesRequest,
  CreateProjectsServicesResourcePoliciesResponse,
  CreateProjectsServicesResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsServicesResourcePoliciesRequest,
  output: CreateProjectsServicesResourcePoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsServicesResourcePoliciesRequest {
  /** Required. Identifier. The relative name of the resource policy object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID. */
  name: string;
  /** Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ResourcePolicy;
}

export const PatchProjectsServicesResourcePoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppcheckV1ResourcePolicy).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsServicesResourcePoliciesRequest>;

export type PatchProjectsServicesResourcePoliciesResponse =
  GoogleFirebaseAppcheckV1ResourcePolicy;
export const PatchProjectsServicesResourcePoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ResourcePolicy;

export type PatchProjectsServicesResourcePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified ResourcePolicy configuration. */
export const patchProjectsServicesResourcePolicies: API.OperationMethod<
  PatchProjectsServicesResourcePoliciesRequest,
  PatchProjectsServicesResourcePoliciesResponse,
  PatchProjectsServicesResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsServicesResourcePoliciesRequest,
  output: PatchProjectsServicesResourcePoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsServicesResourcePoliciesRequest {
  /** Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) */
  name: string;
}

export const GetProjectsServicesResourcePoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsServicesResourcePoliciesRequest>;

export type GetProjectsServicesResourcePoliciesResponse =
  GoogleFirebaseAppcheckV1ResourcePolicy;
export const GetProjectsServicesResourcePoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ResourcePolicy;

export type GetProjectsServicesResourcePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the requested ResourcePolicy configuration. */
export const getProjectsServicesResourcePolicies: API.OperationMethod<
  GetProjectsServicesResourcePoliciesRequest,
  GetProjectsServicesResourcePoliciesResponse,
  GetProjectsServicesResourcePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsServicesResourcePoliciesRequest,
  output: GetProjectsServicesResourcePoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExchangePlayIntegrityTokenProjectsAppsRequest {
  /** Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest;
}

export const ExchangePlayIntegrityTokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangePlayIntegrityToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangePlayIntegrityTokenProjectsAppsRequest>;

export type ExchangePlayIntegrityTokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangePlayIntegrityTokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangePlayIntegrityTokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken. */
export const exchangePlayIntegrityTokenProjectsApps: API.OperationMethod<
  ExchangePlayIntegrityTokenProjectsAppsRequest,
  ExchangePlayIntegrityTokenProjectsAppsResponse,
  ExchangePlayIntegrityTokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangePlayIntegrityTokenProjectsAppsRequest,
  output: ExchangePlayIntegrityTokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeRecaptchaV3TokenProjectsAppsRequest {
  /** Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest;
}

export const ExchangeRecaptchaV3TokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeRecaptchaV3Token",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeRecaptchaV3TokenProjectsAppsRequest>;

export type ExchangeRecaptchaV3TokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeRecaptchaV3TokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeRecaptchaV3TokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken. */
export const exchangeRecaptchaV3TokenProjectsApps: API.OperationMethod<
  ExchangeRecaptchaV3TokenProjectsAppsRequest,
  ExchangeRecaptchaV3TokenProjectsAppsResponse,
  ExchangeRecaptchaV3TokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeRecaptchaV3TokenProjectsAppsRequest,
  output: ExchangeRecaptchaV3TokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateAppAttestChallengeProjectsAppsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest;
}

export const GenerateAppAttestChallengeProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:generateAppAttestChallenge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateAppAttestChallengeProjectsAppsRequest>;

export type GenerateAppAttestChallengeProjectsAppsResponse =
  GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse;
export const GenerateAppAttestChallengeProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse;

export type GenerateAppAttestChallengeProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls. */
export const generateAppAttestChallengeProjectsApps: API.OperationMethod<
  GenerateAppAttestChallengeProjectsAppsRequest,
  GenerateAppAttestChallengeProjectsAppsResponse,
  GenerateAppAttestChallengeProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateAppAttestChallengeProjectsAppsRequest,
  output: GenerateAppAttestChallengeProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeAppAttestAssertionProjectsAppsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest;
}

export const ExchangeAppAttestAssertionProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeAppAttestAssertion",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeAppAttestAssertionProjectsAppsRequest>;

export type ExchangeAppAttestAssertionProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeAppAttestAssertionProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeAppAttestAssertionProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken. */
export const exchangeAppAttestAssertionProjectsApps: API.OperationMethod<
  ExchangeAppAttestAssertionProjectsAppsRequest,
  ExchangeAppAttestAssertionProjectsAppsResponse,
  ExchangeAppAttestAssertionProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeAppAttestAssertionProjectsAppsRequest,
  output: ExchangeAppAttestAssertionProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeCustomTokenProjectsAppsRequest {
  /** Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest;
}

export const ExchangeCustomTokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeCustomToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeCustomTokenProjectsAppsRequest>;

export type ExchangeCustomTokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeCustomTokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeCustomTokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken. */
export const exchangeCustomTokenProjectsApps: API.OperationMethod<
  ExchangeCustomTokenProjectsAppsRequest,
  ExchangeCustomTokenProjectsAppsResponse,
  ExchangeCustomTokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeCustomTokenProjectsAppsRequest,
  output: ExchangeCustomTokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GeneratePlayIntegrityChallengeProjectsAppsRequest {
  /** Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest;
}

export const GeneratePlayIntegrityChallengeProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:generatePlayIntegrityChallenge",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratePlayIntegrityChallengeProjectsAppsRequest>;

export type GeneratePlayIntegrityChallengeProjectsAppsResponse =
  GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse;
export const GeneratePlayIntegrityChallengeProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse;

export type GeneratePlayIntegrityChallengeProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls. */
export const generatePlayIntegrityChallengeProjectsApps: API.OperationMethod<
  GeneratePlayIntegrityChallengeProjectsAppsRequest,
  GeneratePlayIntegrityChallengeProjectsAppsResponse,
  GeneratePlayIntegrityChallengeProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratePlayIntegrityChallengeProjectsAppsRequest,
  output: GeneratePlayIntegrityChallengeProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeDeviceCheckTokenProjectsAppsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest;
}

export const ExchangeDeviceCheckTokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeDeviceCheckToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeDeviceCheckTokenProjectsAppsRequest>;

export type ExchangeDeviceCheckTokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeDeviceCheckTokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeDeviceCheckTokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken. */
export const exchangeDeviceCheckTokenProjectsApps: API.OperationMethod<
  ExchangeDeviceCheckTokenProjectsAppsRequest,
  ExchangeDeviceCheckTokenProjectsAppsResponse,
  ExchangeDeviceCheckTokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeDeviceCheckTokenProjectsAppsRequest,
  output: ExchangeDeviceCheckTokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeRecaptchaEnterpriseTokenProjectsAppsRequest {
  /** Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest;
}

export const ExchangeRecaptchaEnterpriseTokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeRecaptchaEnterpriseToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeRecaptchaEnterpriseTokenProjectsAppsRequest>;

export type ExchangeRecaptchaEnterpriseTokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeRecaptchaEnterpriseTokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeRecaptchaEnterpriseTokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken. */
export const exchangeRecaptchaEnterpriseTokenProjectsApps: API.OperationMethod<
  ExchangeRecaptchaEnterpriseTokenProjectsAppsRequest,
  ExchangeRecaptchaEnterpriseTokenProjectsAppsResponse,
  ExchangeRecaptchaEnterpriseTokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeRecaptchaEnterpriseTokenProjectsAppsRequest,
  output: ExchangeRecaptchaEnterpriseTokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeAppAttestAttestationProjectsAppsRequest {
  /** Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest;
}

export const ExchangeAppAttestAttestationProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeAppAttestAttestation",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeAppAttestAttestationProjectsAppsRequest>;

export type ExchangeAppAttestAttestationProjectsAppsResponse =
  GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;
export const ExchangeAppAttestAttestationProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;

export type ExchangeAppAttestAttestationProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful). */
export const exchangeAppAttestAttestationProjectsApps: API.OperationMethod<
  ExchangeAppAttestAttestationProjectsAppsRequest,
  ExchangeAppAttestAttestationProjectsAppsResponse,
  ExchangeAppAttestAttestationProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeAppAttestAttestationProjectsAppsRequest,
  output: ExchangeAppAttestAttestationProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeDebugTokenProjectsAppsRequest {
  /** Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest;
}

export const ExchangeDebugTokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeDebugToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeDebugTokenProjectsAppsRequest>;

export type ExchangeDebugTokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeDebugTokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeDebugTokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse. */
export const exchangeDebugTokenProjectsApps: API.OperationMethod<
  ExchangeDebugTokenProjectsAppsRequest,
  ExchangeDebugTokenProjectsAppsResponse,
  ExchangeDebugTokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeDebugTokenProjectsAppsRequest,
  output: ExchangeDebugTokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExchangeSafetyNetTokenProjectsAppsRequest {
  /** Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard. */
  app: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest;
}

export const ExchangeSafetyNetTokenProjectsAppsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app: Schema.String.pipe(T.HttpPath("app")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+app}:exchangeSafetyNetToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExchangeSafetyNetTokenProjectsAppsRequest>;

export type ExchangeSafetyNetTokenProjectsAppsResponse =
  GoogleFirebaseAppcheckV1AppCheckToken;
export const ExchangeSafetyNetTokenProjectsAppsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppCheckToken;

export type ExchangeSafetyNetTokenProjectsAppsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken. */
export const exchangeSafetyNetTokenProjectsApps: API.OperationMethod<
  ExchangeSafetyNetTokenProjectsAppsRequest,
  ExchangeSafetyNetTokenProjectsAppsResponse,
  ExchangeSafetyNetTokenProjectsAppsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExchangeSafetyNetTokenProjectsAppsRequest,
  output: ExchangeSafetyNetTokenProjectsAppsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAppsDeviceCheckConfigRequest {
  /** Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` */
  name: string;
  /** Required. A comma-separated list of names of fields in the DeviceCheckConfig to update. Example: `key_id,private_key`. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1DeviceCheckConfig;
}

export const PatchProjectsAppsDeviceCheckConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppcheckV1DeviceCheckConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsDeviceCheckConfigRequest>;

export type PatchProjectsAppsDeviceCheckConfigResponse =
  GoogleFirebaseAppcheckV1DeviceCheckConfig;
export const PatchProjectsAppsDeviceCheckConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1DeviceCheckConfig;

export type PatchProjectsAppsDeviceCheckConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the DeviceCheckConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange DeviceCheck tokens for App Check tokens. For security reasons, the `private_key` field is never populated in the response. */
export const patchProjectsAppsDeviceCheckConfig: API.OperationMethod<
  PatchProjectsAppsDeviceCheckConfigRequest,
  PatchProjectsAppsDeviceCheckConfigResponse,
  PatchProjectsAppsDeviceCheckConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsDeviceCheckConfigRequest,
  output: PatchProjectsAppsDeviceCheckConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsDeviceCheckConfigRequest {
  /** Required. The relative resource name of the DeviceCheckConfig, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` */
  name: string;
}

export const GetProjectsAppsDeviceCheckConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsDeviceCheckConfigRequest>;

export type GetProjectsAppsDeviceCheckConfigResponse =
  GoogleFirebaseAppcheckV1DeviceCheckConfig;
export const GetProjectsAppsDeviceCheckConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1DeviceCheckConfig;

export type GetProjectsAppsDeviceCheckConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the DeviceCheckConfig for the specified app. For security reasons, the `private_key` field is never populated in the response. */
export const getProjectsAppsDeviceCheckConfig: API.OperationMethod<
  GetProjectsAppsDeviceCheckConfigRequest,
  GetProjectsAppsDeviceCheckConfigResponse,
  GetProjectsAppsDeviceCheckConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsDeviceCheckConfigRequest,
  output: GetProjectsAppsDeviceCheckConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetProjectsAppsDeviceCheckConfigRequest {
  /** Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch. */
  names?: string[];
  /** Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. */
  parent: string;
}

export const BatchGetProjectsAppsDeviceCheckConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/apps/-/deviceCheckConfig:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsAppsDeviceCheckConfigRequest>;

export type BatchGetProjectsAppsDeviceCheckConfigResponse =
  GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse;
export const BatchGetProjectsAppsDeviceCheckConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse;

export type BatchGetProjectsAppsDeviceCheckConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response. */
export const batchGetProjectsAppsDeviceCheckConfig: API.OperationMethod<
  BatchGetProjectsAppsDeviceCheckConfigRequest,
  BatchGetProjectsAppsDeviceCheckConfigResponse,
  BatchGetProjectsAppsDeviceCheckConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsAppsDeviceCheckConfigRequest,
  output: BatchGetProjectsAppsDeviceCheckConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsAppsRecaptchaEnterpriseConfigRequest {
  /** Required. The relative resource name of the RecaptchaEnterpriseConfig, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
  name: string;
}

export const GetProjectsAppsRecaptchaEnterpriseConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsRecaptchaEnterpriseConfigRequest>;

export type GetProjectsAppsRecaptchaEnterpriseConfigResponse =
  GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;
export const GetProjectsAppsRecaptchaEnterpriseConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;

export type GetProjectsAppsRecaptchaEnterpriseConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the RecaptchaEnterpriseConfig for the specified app. */
export const getProjectsAppsRecaptchaEnterpriseConfig: API.OperationMethod<
  GetProjectsAppsRecaptchaEnterpriseConfigRequest,
  GetProjectsAppsRecaptchaEnterpriseConfigResponse,
  GetProjectsAppsRecaptchaEnterpriseConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsRecaptchaEnterpriseConfigRequest,
  output: GetProjectsAppsRecaptchaEnterpriseConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetProjectsAppsRecaptchaEnterpriseConfigRequest {
  /** Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch. */
  names?: string[];
  /** Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. */
  parent: string;
}

export const BatchGetProjectsAppsRecaptchaEnterpriseConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/apps/-/recaptchaEnterpriseConfig:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsAppsRecaptchaEnterpriseConfigRequest>;

export type BatchGetProjectsAppsRecaptchaEnterpriseConfigResponse =
  GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse;
export const BatchGetProjectsAppsRecaptchaEnterpriseConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse;

export type BatchGetProjectsAppsRecaptchaEnterpriseConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps. */
export const batchGetProjectsAppsRecaptchaEnterpriseConfig: API.OperationMethod<
  BatchGetProjectsAppsRecaptchaEnterpriseConfigRequest,
  BatchGetProjectsAppsRecaptchaEnterpriseConfigResponse,
  BatchGetProjectsAppsRecaptchaEnterpriseConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsAppsRecaptchaEnterpriseConfigRequest,
  output: BatchGetProjectsAppsRecaptchaEnterpriseConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsAppsRecaptchaEnterpriseConfigRequest {
  /** Required. A comma-separated list of names of fields in the RecaptchaEnterpriseConfig to update. Example: `site_key`. */
  updateMask?: string;
  /** Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
  name: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;
}

export const PatchProjectsAppsRecaptchaEnterpriseConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsRecaptchaEnterpriseConfigRequest>;

export type PatchProjectsAppsRecaptchaEnterpriseConfigResponse =
  GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;
export const PatchProjectsAppsRecaptchaEnterpriseConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig;

export type PatchProjectsAppsRecaptchaEnterpriseConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the RecaptchaEnterpriseConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA Enterprise tokens for App Check tokens. */
export const patchProjectsAppsRecaptchaEnterpriseConfig: API.OperationMethod<
  PatchProjectsAppsRecaptchaEnterpriseConfigRequest,
  PatchProjectsAppsRecaptchaEnterpriseConfigResponse,
  PatchProjectsAppsRecaptchaEnterpriseConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsRecaptchaEnterpriseConfigRequest,
  output: PatchProjectsAppsRecaptchaEnterpriseConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsDebugTokensRequest {
  /** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
  name: string;
}

export const GetProjectsAppsDebugTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsDebugTokensRequest>;

export type GetProjectsAppsDebugTokensResponse =
  GoogleFirebaseAppcheckV1DebugToken;
export const GetProjectsAppsDebugTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1DebugToken;

export type GetProjectsAppsDebugTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified DebugToken. For security reasons, the `token` field is never populated in the response. */
export const getProjectsAppsDebugTokens: API.OperationMethod<
  GetProjectsAppsDebugTokensRequest,
  GetProjectsAppsDebugTokensResponse,
  GetProjectsAppsDebugTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsDebugTokensRequest,
  output: GetProjectsAppsDebugTokensResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsAppsDebugTokensRequest {
  /** Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ``` */
  parent: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1DebugToken;
}

export const CreateProjectsAppsDebugTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirebaseAppcheckV1DebugToken).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/debugTokens", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsAppsDebugTokensRequest>;

export type CreateProjectsAppsDebugTokensResponse =
  GoogleFirebaseAppcheckV1DebugToken;
export const CreateProjectsAppsDebugTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1DebugToken;

export type CreateProjectsAppsDebugTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens. */
export const createProjectsAppsDebugTokens: API.OperationMethod<
  CreateProjectsAppsDebugTokensRequest,
  CreateProjectsAppsDebugTokensResponse,
  CreateProjectsAppsDebugTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsAppsDebugTokensRequest,
  output: CreateProjectsAppsDebugTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAppsDebugTokensRequest {
  /** Required. A comma-separated list of names of fields in the DebugToken to update. Example: `display_name`. */
  updateMask?: string;
  /** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
  name: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1DebugToken;
}

export const PatchProjectsAppsDebugTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirebaseAppcheckV1DebugToken).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsDebugTokensRequest>;

export type PatchProjectsAppsDebugTokensResponse =
  GoogleFirebaseAppcheckV1DebugToken;
export const PatchProjectsAppsDebugTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1DebugToken;

export type PatchProjectsAppsDebugTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified DebugToken. For security reasons, the `token` field cannot be updated, nor will it be populated in the response, but you can revoke the debug token using DeleteDebugToken. */
export const patchProjectsAppsDebugTokens: API.OperationMethod<
  PatchProjectsAppsDebugTokensRequest,
  PatchProjectsAppsDebugTokensResponse,
  PatchProjectsAppsDebugTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsDebugTokensRequest,
  output: PatchProjectsAppsDebugTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsAppsDebugTokensRequest {
  /** Optional. The checksum to be validated against the current DebugToken, to ensure the client has an up-to-date value before proceeding. This checksum is computed by the server based on the values of fields in the DebugToken object, and can be obtained from the DebugToken object received from the last CreateDebugToken, GetDebugToken, ListDebugTokens, or UpdateDebugToken call. This etag is strongly validated as defined by RFC 7232. */
  etag?: string;
  /** Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
  name: string;
}

export const DeleteProjectsAppsDebugTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsAppsDebugTokensRequest>;

export type DeleteProjectsAppsDebugTokensResponse = GoogleProtobufEmpty;
export const DeleteProjectsAppsDebugTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsAppsDebugTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token. */
export const deleteProjectsAppsDebugTokens: API.OperationMethod<
  DeleteProjectsAppsDebugTokensRequest,
  DeleteProjectsAppsDebugTokensResponse,
  DeleteProjectsAppsDebugTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsAppsDebugTokensRequest,
  output: DeleteProjectsAppsDebugTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsAppsDebugTokensRequest {
  /** The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. */
  pageSize?: number;
  /** Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ``` */
  parent: string;
  /** Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined. */
  pageToken?: string;
}

export const ListProjectsAppsDebugTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/debugTokens" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsAppsDebugTokensRequest>;

export type ListProjectsAppsDebugTokensResponse =
  GoogleFirebaseAppcheckV1ListDebugTokensResponse;
export const ListProjectsAppsDebugTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1ListDebugTokensResponse;

export type ListProjectsAppsDebugTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response. */
export const listProjectsAppsDebugTokens: API.PaginatedOperationMethod<
  ListProjectsAppsDebugTokensRequest,
  ListProjectsAppsDebugTokensResponse,
  ListProjectsAppsDebugTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsAppsDebugTokensRequest,
  output: ListProjectsAppsDebugTokensResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsAppsPlayIntegrityConfigRequest {
  /** Required. The relative resource name of the PlayIntegrityConfig, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
  name: string;
}

export const GetProjectsAppsPlayIntegrityConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsPlayIntegrityConfigRequest>;

export type GetProjectsAppsPlayIntegrityConfigResponse =
  GoogleFirebaseAppcheckV1PlayIntegrityConfig;
export const GetProjectsAppsPlayIntegrityConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1PlayIntegrityConfig;

export type GetProjectsAppsPlayIntegrityConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the PlayIntegrityConfig for the specified app. */
export const getProjectsAppsPlayIntegrityConfig: API.OperationMethod<
  GetProjectsAppsPlayIntegrityConfigRequest,
  GetProjectsAppsPlayIntegrityConfigResponse,
  GetProjectsAppsPlayIntegrityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsPlayIntegrityConfigRequest,
  output: GetProjectsAppsPlayIntegrityConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetProjectsAppsPlayIntegrityConfigRequest {
  /** Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. */
  parent: string;
  /** Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch. */
  names?: string[];
}

export const BatchGetProjectsAppsPlayIntegrityConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/apps/-/playIntegrityConfig:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsAppsPlayIntegrityConfigRequest>;

export type BatchGetProjectsAppsPlayIntegrityConfigResponse =
  GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse;
export const BatchGetProjectsAppsPlayIntegrityConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse;

export type BatchGetProjectsAppsPlayIntegrityConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Atomically gets the PlayIntegrityConfigs for the specified list of apps. */
export const batchGetProjectsAppsPlayIntegrityConfig: API.OperationMethod<
  BatchGetProjectsAppsPlayIntegrityConfigRequest,
  BatchGetProjectsAppsPlayIntegrityConfigResponse,
  BatchGetProjectsAppsPlayIntegrityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsAppsPlayIntegrityConfigRequest,
  output: BatchGetProjectsAppsPlayIntegrityConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsAppsPlayIntegrityConfigRequest {
  /** Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
  name: string;
  /** Required. A comma-separated list of names of fields in the PlayIntegrityConfig to update. Example: `token_ttl`. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1PlayIntegrityConfig;
}

export const PatchProjectsAppsPlayIntegrityConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppcheckV1PlayIntegrityConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsPlayIntegrityConfigRequest>;

export type PatchProjectsAppsPlayIntegrityConfigResponse =
  GoogleFirebaseAppcheckV1PlayIntegrityConfig;
export const PatchProjectsAppsPlayIntegrityConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1PlayIntegrityConfig;

export type PatchProjectsAppsPlayIntegrityConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the PlayIntegrityConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange Play Integrity tokens for App Check tokens. */
export const patchProjectsAppsPlayIntegrityConfig: API.OperationMethod<
  PatchProjectsAppsPlayIntegrityConfigRequest,
  PatchProjectsAppsPlayIntegrityConfigResponse,
  PatchProjectsAppsPlayIntegrityConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsPlayIntegrityConfigRequest,
  output: PatchProjectsAppsPlayIntegrityConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsAppAttestConfigRequest {
  /** Required. The relative resource name of the AppAttestConfig, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
  name: string;
}

export const GetProjectsAppsAppAttestConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsAppAttestConfigRequest>;

export type GetProjectsAppsAppAttestConfigResponse =
  GoogleFirebaseAppcheckV1AppAttestConfig;
export const GetProjectsAppsAppAttestConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppAttestConfig;

export type GetProjectsAppsAppAttestConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the AppAttestConfig for the specified app. */
export const getProjectsAppsAppAttestConfig: API.OperationMethod<
  GetProjectsAppsAppAttestConfigRequest,
  GetProjectsAppsAppAttestConfigResponse,
  GetProjectsAppsAppAttestConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsAppAttestConfigRequest,
  output: GetProjectsAppsAppAttestConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetProjectsAppsAppAttestConfigRequest {
  /** Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch. */
  names?: string[];
  /** Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. */
  parent: string;
}

export const BatchGetProjectsAppsAppAttestConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/apps/-/appAttestConfig:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsAppsAppAttestConfigRequest>;

export type BatchGetProjectsAppsAppAttestConfigResponse =
  GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse;
export const BatchGetProjectsAppsAppAttestConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse;

export type BatchGetProjectsAppsAppAttestConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Atomically gets the AppAttestConfigs for the specified list of apps. */
export const batchGetProjectsAppsAppAttestConfig: API.OperationMethod<
  BatchGetProjectsAppsAppAttestConfigRequest,
  BatchGetProjectsAppsAppAttestConfigResponse,
  BatchGetProjectsAppsAppAttestConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsAppsAppAttestConfigRequest,
  output: BatchGetProjectsAppsAppAttestConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsAppsAppAttestConfigRequest {
  /** Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
  name: string;
  /** Required. A comma-separated list of names of fields in the AppAttestConfig to update. Example: `token_ttl`. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1AppAttestConfig;
}

export const PatchProjectsAppsAppAttestConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppcheckV1AppAttestConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsAppAttestConfigRequest>;

export type PatchProjectsAppsAppAttestConfigResponse =
  GoogleFirebaseAppcheckV1AppAttestConfig;
export const PatchProjectsAppsAppAttestConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1AppAttestConfig;

export type PatchProjectsAppsAppAttestConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the AppAttestConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange AppAttest tokens for App Check tokens. */
export const patchProjectsAppsAppAttestConfig: API.OperationMethod<
  PatchProjectsAppsAppAttestConfigRequest,
  PatchProjectsAppsAppAttestConfigResponse,
  PatchProjectsAppsAppAttestConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsAppAttestConfigRequest,
  output: PatchProjectsAppsAppAttestConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsSafetyNetConfigRequest {
  /** Required. The relative resource name of the SafetyNetConfig, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
  name: string;
}

export const GetProjectsAppsSafetyNetConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsSafetyNetConfigRequest>;

export type GetProjectsAppsSafetyNetConfigResponse =
  GoogleFirebaseAppcheckV1SafetyNetConfig;
export const GetProjectsAppsSafetyNetConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1SafetyNetConfig;

export type GetProjectsAppsSafetyNetConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the SafetyNetConfig for the specified app. */
export const getProjectsAppsSafetyNetConfig: API.OperationMethod<
  GetProjectsAppsSafetyNetConfigRequest,
  GetProjectsAppsSafetyNetConfigResponse,
  GetProjectsAppsSafetyNetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsSafetyNetConfigRequest,
  output: GetProjectsAppsSafetyNetConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetProjectsAppsSafetyNetConfigRequest {
  /** Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. */
  parent: string;
  /** Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch. */
  names?: string[];
}

export const BatchGetProjectsAppsSafetyNetConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/apps/-/safetyNetConfig:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsAppsSafetyNetConfigRequest>;

export type BatchGetProjectsAppsSafetyNetConfigResponse =
  GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse;
export const BatchGetProjectsAppsSafetyNetConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse;

export type BatchGetProjectsAppsSafetyNetConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Atomically gets the SafetyNetConfigs for the specified list of apps. */
export const batchGetProjectsAppsSafetyNetConfig: API.OperationMethod<
  BatchGetProjectsAppsSafetyNetConfigRequest,
  BatchGetProjectsAppsSafetyNetConfigResponse,
  BatchGetProjectsAppsSafetyNetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsAppsSafetyNetConfigRequest,
  output: BatchGetProjectsAppsSafetyNetConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsAppsSafetyNetConfigRequest {
  /** Required. A comma-separated list of names of fields in the SafetyNetConfig to update. Example: `token_ttl`. */
  updateMask?: string;
  /** Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
  name: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1SafetyNetConfig;
}

export const PatchProjectsAppsSafetyNetConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirebaseAppcheckV1SafetyNetConfig).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsSafetyNetConfigRequest>;

export type PatchProjectsAppsSafetyNetConfigResponse =
  GoogleFirebaseAppcheckV1SafetyNetConfig;
export const PatchProjectsAppsSafetyNetConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1SafetyNetConfig;

export type PatchProjectsAppsSafetyNetConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the SafetyNetConfig for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange SafetyNet tokens for App Check tokens. */
export const patchProjectsAppsSafetyNetConfig: API.OperationMethod<
  PatchProjectsAppsSafetyNetConfigRequest,
  PatchProjectsAppsSafetyNetConfigResponse,
  PatchProjectsAppsSafetyNetConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsSafetyNetConfigRequest,
  output: PatchProjectsAppsSafetyNetConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsAppsRecaptchaV3ConfigRequest {
  /** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` */
  name: string;
  /** Required. A comma-separated list of names of fields in the RecaptchaV3Config to update. Example: `site_secret`. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirebaseAppcheckV1RecaptchaV3Config;
}

export const PatchProjectsAppsRecaptchaV3ConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirebaseAppcheckV1RecaptchaV3Config).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsAppsRecaptchaV3ConfigRequest>;

export type PatchProjectsAppsRecaptchaV3ConfigResponse =
  GoogleFirebaseAppcheckV1RecaptchaV3Config;
export const PatchProjectsAppsRecaptchaV3ConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1RecaptchaV3Config;

export type PatchProjectsAppsRecaptchaV3ConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the RecaptchaV3Config for the specified app. While this configuration is incomplete or invalid, the app will be unable to exchange reCAPTCHA V3 tokens for App Check tokens. For security reasons, the `site_secret` field is never populated in the response. */
export const patchProjectsAppsRecaptchaV3Config: API.OperationMethod<
  PatchProjectsAppsRecaptchaV3ConfigRequest,
  PatchProjectsAppsRecaptchaV3ConfigResponse,
  PatchProjectsAppsRecaptchaV3ConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsAppsRecaptchaV3ConfigRequest,
  output: PatchProjectsAppsRecaptchaV3ConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsAppsRecaptchaV3ConfigRequest {
  /** Required. The relative resource name of the RecaptchaV3Config, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` */
  name: string;
}

export const GetProjectsAppsRecaptchaV3ConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsAppsRecaptchaV3ConfigRequest>;

export type GetProjectsAppsRecaptchaV3ConfigResponse =
  GoogleFirebaseAppcheckV1RecaptchaV3Config;
export const GetProjectsAppsRecaptchaV3ConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1RecaptchaV3Config;

export type GetProjectsAppsRecaptchaV3ConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the RecaptchaV3Config for the specified app. For security reasons, the `site_secret` field is never populated in the response. */
export const getProjectsAppsRecaptchaV3Config: API.OperationMethod<
  GetProjectsAppsRecaptchaV3ConfigRequest,
  GetProjectsAppsRecaptchaV3ConfigResponse,
  GetProjectsAppsRecaptchaV3ConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsAppsRecaptchaV3ConfigRequest,
  output: GetProjectsAppsRecaptchaV3ConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface BatchGetProjectsAppsRecaptchaV3ConfigRequest {
  /** Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails. */
  parent: string;
  /** Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch. */
  names?: string[];
}

export const BatchGetProjectsAppsRecaptchaV3ConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/apps/-/recaptchaV3Config:batchGet",
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsAppsRecaptchaV3ConfigRequest>;

export type BatchGetProjectsAppsRecaptchaV3ConfigResponse =
  GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse;
export const BatchGetProjectsAppsRecaptchaV3ConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse;

export type BatchGetProjectsAppsRecaptchaV3ConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response. */
export const batchGetProjectsAppsRecaptchaV3Config: API.OperationMethod<
  BatchGetProjectsAppsRecaptchaV3ConfigRequest,
  BatchGetProjectsAppsRecaptchaV3ConfigResponse,
  BatchGetProjectsAppsRecaptchaV3ConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsAppsRecaptchaV3ConfigRequest,
  output: BatchGetProjectsAppsRecaptchaV3ConfigResponse,
  errors: [NotFound, Forbidden],
}));
