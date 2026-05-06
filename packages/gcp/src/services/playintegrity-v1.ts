// ==========================================================================
// Google Play Integrity API (playintegrity v1)
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
  name: "playintegrity",
  version: "v1",
  rootUrl: "https://playintegrity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface PcRequestDetails {
  /** Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. */
  requestPackageName?: string;
  /** Request hash that was provided in the request. */
  requestHash?: string;
  /** Required. Timestamp, of the integrity application request. */
  requestTime?: string;
}

export const PcRequestDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestPackageName: Schema.optional(Schema.String),
  requestHash: Schema.optional(Schema.String),
  requestTime: Schema.optional(Schema.String),
}).annotate({ identifier: "PcRequestDetails" });

export interface PcDeviceIntegrity {
  /** Details about the integrity of the device the app is running on. */
  deviceRecognitionVerdict?: ReadonlyArray<
    | "DEVICE_RECOGNITION_VERDICT_UNSPECIFIED"
    | "MEETS_PC_INTEGRITY"
    | (string & {})
  >;
}

export const PcDeviceIntegrity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceRecognitionVerdict: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PcDeviceIntegrity" });

export interface PcAccountDetails {
  /** Required. Details about the licensing status of the user for the app in the scope. */
  appLicensingVerdict?:
    | "UNKNOWN"
    | "LICENSED"
    | "UNLICENSED"
    | "UNEVALUATED"
    | (string & {});
}

export const PcAccountDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appLicensingVerdict: Schema.optional(Schema.String),
}).annotate({ identifier: "PcAccountDetails" });

export interface PcTestingDetails {
  /** Indicates that the information contained in this payload is a testing response that is statically overridden for a tester. */
  isTestingResponse?: boolean;
}

export const PcTestingDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isTestingResponse: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PcTestingDetails" });

export interface PcTokenPayloadExternal {
  /** Required. Details about the integrity request. */
  requestDetails?: PcRequestDetails;
  /** Required. Details about the device integrity. */
  deviceIntegrity?: PcDeviceIntegrity;
  /** Details about the account information such as the licensing status. */
  accountDetails?: PcAccountDetails;
  /** Indicates that this payload is generated for testing purposes and contains any additional data that is linked with testing status. */
  testingDetails?: PcTestingDetails;
}

export const PcTokenPayloadExternal = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    requestDetails: Schema.optional(PcRequestDetails),
    deviceIntegrity: Schema.optional(PcDeviceIntegrity),
    accountDetails: Schema.optional(PcAccountDetails),
    testingDetails: Schema.optional(PcTestingDetails),
  },
).annotate({ identifier: "PcTokenPayloadExternal" });

export interface DecodePcIntegrityTokenResponse {
  /** Plain token payload generated from the decoded integrity token. */
  tokenPayloadExternal?: PcTokenPayloadExternal;
}

export const DecodePcIntegrityTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenPayloadExternal: Schema.optional(PcTokenPayloadExternal),
  }).annotate({ identifier: "DecodePcIntegrityTokenResponse" });

export interface AppAccessRiskVerdict {
  /** List of detected app types signalled for App Access Risk. */
  appsDetected?: ReadonlyArray<
    | "APPS_DETECTED_UNSPECIFIED"
    | "KNOWN_INSTALLED"
    | "KNOWN_CAPTURING"
    | "KNOWN_OVERLAYS"
    | "KNOWN_CONTROLLING"
    | "UNKNOWN_INSTALLED"
    | "UNKNOWN_CAPTURING"
    | "UNKNOWN_OVERLAYS"
    | "UNKNOWN_CONTROLLING"
    | (string & {})
  >;
}

export const AppAccessRiskVerdict = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appsDetected: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AppAccessRiskVerdict" });

export interface EnvironmentDetails {
  /** The evaluation of Play Protect verdict. */
  playProtectVerdict?:
    | "PLAY_PROTECT_VERDICT_UNSPECIFIED"
    | "UNEVALUATED"
    | "NO_ISSUES"
    | "NO_DATA"
    | "MEDIUM_RISK"
    | "HIGH_RISK"
    | "POSSIBLE_RISK"
    | (string & {});
  /** The evaluation of the App Access Risk verdicts. */
  appAccessRiskVerdict?: AppAccessRiskVerdict;
}

export const EnvironmentDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  playProtectVerdict: Schema.optional(Schema.String),
  appAccessRiskVerdict: Schema.optional(AppAccessRiskVerdict),
}).annotate({ identifier: "EnvironmentDetails" });

export interface DeviceAttributes {
  /** Android SDK version of the device, as defined in the public Android documentation: https://developer.android.com/reference/android/os/Build.VERSION_CODES. It won't be set if a necessary requirement was missed. For example DeviceIntegrity did not meet the minimum bar. */
  sdkVersion?: number;
}

export const DeviceAttributes = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sdkVersion: Schema.optional(Schema.Number),
}).annotate({ identifier: "DeviceAttributes" });

export interface RecentDeviceActivity {
  /** Required. Indicates the activity level of the device. */
  deviceActivityLevel?:
    | "DEVICE_ACTIVITY_LEVEL_UNSPECIFIED"
    | "UNEVALUATED"
    | "LEVEL_1"
    | "LEVEL_2"
    | "LEVEL_3"
    | "LEVEL_4"
    | (string & {});
}

export const RecentDeviceActivity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceActivityLevel: Schema.optional(Schema.String),
}).annotate({ identifier: "RecentDeviceActivity" });

export interface WriteDates {
  /** Optional. Write time in YYYYMM format (in UTC, e.g. 202402) for the first bit. Note that this value won't be set if the first bit is false. */
  yyyymmFirst?: number;
  /** Optional. Write time in YYYYMM format (in UTC, e.g. 202402) for the second bit. Note that this value won't be set if the second bit is false. */
  yyyymmSecond?: number;
  /** Optional. Write time in YYYYMM format (in UTC, e.g. 202402) for the third bit. Note that this value won't be set if the third bit is false. */
  yyyymmThird?: number;
}

export const WriteDates = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  yyyymmFirst: Schema.optional(Schema.Number),
  yyyymmSecond: Schema.optional(Schema.Number),
  yyyymmThird: Schema.optional(Schema.Number),
}).annotate({ identifier: "WriteDates" });

export interface Values {
  /** Required. First recall bit value. */
  bitFirst?: boolean;
  /** Required. Second recall bit value. */
  bitSecond?: boolean;
  /** Required. Third recall bit value. */
  bitThird?: boolean;
}

export const Values = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bitFirst: Schema.optional(Schema.Boolean),
  bitSecond: Schema.optional(Schema.Boolean),
  bitThird: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Values" });

export interface DeviceRecall {
  /** Required. Contains the recall bits write dates. */
  writeDates?: WriteDates;
  /** Required. Contains the recall bits values. */
  values?: Values;
}

export const DeviceRecall = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  writeDates: Schema.optional(WriteDates),
  values: Schema.optional(Values),
}).annotate({ identifier: "DeviceRecall" });

export interface DeviceIntegrity {
  /** Attributes of the device where the integrity token was generated. */
  deviceAttributes?: DeviceAttributes;
  /** Contains legacy details about the integrity of the device the app is running on. Only for devices with Android version T or higher and only for apps opted in to the new verdicts. Only available during the transition period to the new verdicts system and will be removed afterwards. */
  legacyDeviceRecognitionVerdict?: ReadonlyArray<
    | "UNKNOWN"
    | "MEETS_BASIC_INTEGRITY"
    | "MEETS_DEVICE_INTEGRITY"
    | "MEETS_STRONG_INTEGRITY"
    | "MEETS_VIRTUAL_INTEGRITY"
    | (string & {})
  >;
  /** Details about the device activity of the device the app is running on. */
  recentDeviceActivity?: RecentDeviceActivity;
  /** Details about the device recall bits set by the developer. */
  deviceRecall?: DeviceRecall;
  /** Details about the integrity of the device the app is running on. */
  deviceRecognitionVerdict?: ReadonlyArray<
    | "UNKNOWN"
    | "MEETS_BASIC_INTEGRITY"
    | "MEETS_DEVICE_INTEGRITY"
    | "MEETS_STRONG_INTEGRITY"
    | "MEETS_VIRTUAL_INTEGRITY"
    | (string & {})
  >;
}

export const DeviceIntegrity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceAttributes: Schema.optional(DeviceAttributes),
  legacyDeviceRecognitionVerdict: Schema.optional(Schema.Array(Schema.String)),
  recentDeviceActivity: Schema.optional(RecentDeviceActivity),
  deviceRecall: Schema.optional(DeviceRecall),
  deviceRecognitionVerdict: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "DeviceIntegrity" });

export interface AccountActivity {
  /** Required. Indicates the activity level of the account. */
  activityLevel?:
    | "ACTIVITY_LEVEL_UNSPECIFIED"
    | "UNEVALUATED"
    | "UNUSUAL"
    | "UNKNOWN"
    | "TYPICAL_BASIC"
    | "TYPICAL_STRONG"
    | (string & {});
}

export const AccountActivity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  activityLevel: Schema.optional(Schema.String),
}).annotate({ identifier: "AccountActivity" });

export interface AccountDetails {
  /** Required. Details about the licensing status of the user for the app in the scope. */
  appLicensingVerdict?:
    | "UNKNOWN"
    | "LICENSED"
    | "UNLICENSED"
    | "UNEVALUATED"
    | (string & {});
  /** (Restricted Access) Details about the account activity for the user in the scope. */
  accountActivity?: AccountActivity;
}

export const AccountDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appLicensingVerdict: Schema.optional(Schema.String),
  accountActivity: Schema.optional(AccountActivity),
}).annotate({ identifier: "AccountDetails" });

export interface AppIntegrity {
  /** Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED. */
  packageName?: string;
  /** The SHA256 hash of the requesting app's signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict != UNEVALUATED. */
  certificateSha256Digest?: ReadonlyArray<string>;
  /** Required. Details about the app recognition verdict */
  appRecognitionVerdict?:
    | "UNKNOWN"
    | "PLAY_RECOGNIZED"
    | "UNRECOGNIZED_VERSION"
    | "UNEVALUATED"
    | (string & {});
  /** Version code of the application. Set iff app_recognition_verdict != UNEVALUATED. */
  versionCode?: string;
}

export const AppIntegrity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  packageName: Schema.optional(Schema.String),
  certificateSha256Digest: Schema.optional(Schema.Array(Schema.String)),
  appRecognitionVerdict: Schema.optional(Schema.String),
  versionCode: Schema.optional(Schema.String),
}).annotate({ identifier: "AppIntegrity" });

export interface TestingDetails {
  /** Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester. */
  isTestingResponse?: boolean;
}

export const TestingDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isTestingResponse: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "TestingDetails" });

export interface RequestDetails {
  /** Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity. */
  requestPackageName?: string;
  /** Nonce that was provided in the request (which is base64 web-safe no-wrap). */
  nonce?: string;
  /** Request hash that was provided in the request. */
  requestHash?: string;
  /** Required. Timestamp, in milliseconds, of the integrity application request. */
  timestampMillis?: string;
}

export const RequestDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestPackageName: Schema.optional(Schema.String),
  nonce: Schema.optional(Schema.String),
  requestHash: Schema.optional(Schema.String),
  timestampMillis: Schema.optional(Schema.String),
}).annotate({ identifier: "RequestDetails" });

export interface TokenPayloadExternal {
  /** Details of the environment Play Integrity API runs in. */
  environmentDetails?: EnvironmentDetails;
  /** Required. Details about the device integrity. */
  deviceIntegrity?: DeviceIntegrity;
  /** Required. Details about the Play Store account. */
  accountDetails?: AccountDetails;
  /** Required. Details about the application integrity. */
  appIntegrity?: AppIntegrity;
  /** Indicates that this payload is generated for testing purposes and contains any additional data that is linked with testing status. */
  testingDetails?: TestingDetails;
  /** Required. Details about the integrity request. */
  requestDetails?: RequestDetails;
}

export const TokenPayloadExternal = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  environmentDetails: Schema.optional(EnvironmentDetails),
  deviceIntegrity: Schema.optional(DeviceIntegrity),
  accountDetails: Schema.optional(AccountDetails),
  appIntegrity: Schema.optional(AppIntegrity),
  testingDetails: Schema.optional(TestingDetails),
  requestDetails: Schema.optional(RequestDetails),
}).annotate({ identifier: "TokenPayloadExternal" });

export interface DecodeIntegrityTokenResponse {
  /** Plain token payload generated from the decoded integrity token. */
  tokenPayloadExternal?: TokenPayloadExternal;
}

export const DecodeIntegrityTokenResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenPayloadExternal: Schema.optional(TokenPayloadExternal),
  }).annotate({ identifier: "DecodeIntegrityTokenResponse" });

export interface DecodeIntegrityTokenRequest {
  /** Encoded integrity token. */
  integrityToken?: string;
}

export const DecodeIntegrityTokenRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrityToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DecodeIntegrityTokenRequest" });

export interface DecodePcIntegrityTokenRequest {
  /** Encoded integrity token. */
  integrityToken?: string;
}

export const DecodePcIntegrityTokenRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrityToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "DecodePcIntegrityTokenRequest" });

export interface WriteDeviceRecallRequest {
  /** Required. Integrity token obtained from calling Play Integrity API. */
  integrityToken?: string;
  /** Required. The new values for the device recall bits to be written. */
  newValues?: Values;
}

export const WriteDeviceRecallRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrityToken: Schema.optional(Schema.String),
    newValues: Schema.optional(Values),
  }).annotate({ identifier: "WriteDeviceRecallRequest" });

export interface WriteDeviceRecallResponse {}

export const WriteDeviceRecallResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "WriteDeviceRecallResponse",
  });

// ==========================================================================
// Operations
// ==========================================================================

export interface DecodeIntegrityTokenV1Request {
  /** Package name of the app the attached integrity token belongs to. */
  packageName: string;
  /** Request body */
  body?: DecodeIntegrityTokenRequest;
}

export const DecodeIntegrityTokenV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(DecodeIntegrityTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{packageName}:decodeIntegrityToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DecodeIntegrityTokenV1Request>;

export type DecodeIntegrityTokenV1Response = DecodeIntegrityTokenResponse;
export const DecodeIntegrityTokenV1Response =
  /*@__PURE__*/ /*#__PURE__*/ DecodeIntegrityTokenResponse;

export type DecodeIntegrityTokenV1Error = DefaultErrors;

/** Decodes the integrity token and returns the token payload. */
export const decodeIntegrityTokenV1: API.OperationMethod<
  DecodeIntegrityTokenV1Request,
  DecodeIntegrityTokenV1Response,
  DecodeIntegrityTokenV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DecodeIntegrityTokenV1Request,
  output: DecodeIntegrityTokenV1Response,
  errors: [],
}));

export interface DecodePcIntegrityTokenV1Request {
  /** Package name of the app the attached integrity token belongs to. */
  packageName: string;
  /** Request body */
  body?: DecodePcIntegrityTokenRequest;
}

export const DecodePcIntegrityTokenV1Request =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(DecodePcIntegrityTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{packageName}:decodePcIntegrityToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DecodePcIntegrityTokenV1Request>;

export type DecodePcIntegrityTokenV1Response = DecodePcIntegrityTokenResponse;
export const DecodePcIntegrityTokenV1Response =
  /*@__PURE__*/ /*#__PURE__*/ DecodePcIntegrityTokenResponse;

export type DecodePcIntegrityTokenV1Error = DefaultErrors;

/** Decodes the PC integrity token and returns the PC token payload. */
export const decodePcIntegrityTokenV1: API.OperationMethod<
  DecodePcIntegrityTokenV1Request,
  DecodePcIntegrityTokenV1Response,
  DecodePcIntegrityTokenV1Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DecodePcIntegrityTokenV1Request,
  output: DecodePcIntegrityTokenV1Response,
  errors: [],
}));

export interface WriteDeviceRecallRequest_Op {
  /** Required. Package name of the app the attached integrity token belongs to. */
  packageName: string;
  /** Request body */
  body?: WriteDeviceRecallRequest;
}

export const WriteDeviceRecallRequest_Op =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageName: Schema.String.pipe(T.HttpPath("packageName")),
    body: Schema.optional(WriteDeviceRecallRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{packageName}/deviceRecall:write",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WriteDeviceRecallRequest_Op>;

export type WriteDeviceRecallResponse_Op = WriteDeviceRecallResponse;
export const WriteDeviceRecallResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ WriteDeviceRecallResponse;

export type WriteDeviceRecallError = DefaultErrors;

/** Writes recall bits for the device where Play Integrity API token is obtained. The endpoint is available to select Play partners in an early access program (EAP). */
export const writeDeviceRecall: API.OperationMethod<
  WriteDeviceRecallRequest_Op,
  WriteDeviceRecallResponse_Op,
  WriteDeviceRecallError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WriteDeviceRecallRequest_Op,
  output: WriteDeviceRecallResponse_Op,
  errors: [],
}));
