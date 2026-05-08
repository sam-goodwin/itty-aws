// ==========================================================================
// Android Device Provisioning Partner API (androiddeviceprovisioning v1)
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
  name: "androiddeviceprovisioning",
  version: "v1",
  rootUrl: "https://androiddeviceprovisioning.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DevicesLongRunningOperationMetadata {
  /** The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates. */
  devicesCount?: number;
  /** The processing status of the operation. */
  processingStatus?:
    | "BATCH_PROCESS_STATUS_UNSPECIFIED"
    | "BATCH_PROCESS_PENDING"
    | "BATCH_PROCESS_IN_PROGRESS"
    | "BATCH_PROCESS_PROCESSED"
    | (string & {});
  /** The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn't always mean the operation completed—check for the inclusion of a `done` field. */
  progress?: number;
}

export const DevicesLongRunningOperationMetadata: Schema.Schema<DevicesLongRunningOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devicesCount: Schema.optional(Schema.Number),
    processingStatus: Schema.optional(Schema.String),
    progress: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DevicesLongRunningOperationMetadata" });

export interface DeviceMetadata {
  /** Metadata entries recorded as key-value pairs. */
  entries?: Record<string, string>;
}

export const DeviceMetadata: Schema.Schema<DeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "DeviceMetadata" });

export interface DeviceClaim {
  /** The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'. */
  vacationModeExpireTime?: string;
  /** The ID of the Google Workspace account that owns the Chrome OS device. */
  googleWorkspaceCustomerId?: string;
  /** Output only. The type of claim made on the device. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "SECTION_TYPE_SIM_LOCK"
    | "SECTION_TYPE_ZERO_TOUCH"
    | (string & {});
  /** The ID of the reseller that claimed the device. */
  resellerId?: string;
  /** The ID of the Customer that purchased the device. */
  ownerCompanyId?: string;
  /** The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'. */
  vacationModeStartTime?: string;
  /** The Additional service registered for the device. */
  additionalService?:
    | "ADDITIONAL_SERVICE_UNSPECIFIED"
    | "DEVICE_PROTECTION"
    | (string & {});
}

export const DeviceClaim: Schema.Schema<DeviceClaim> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vacationModeExpireTime: Schema.optional(Schema.String),
    googleWorkspaceCustomerId: Schema.optional(Schema.String),
    sectionType: Schema.optional(Schema.String),
    resellerId: Schema.optional(Schema.String),
    ownerCompanyId: Schema.optional(Schema.String),
    vacationModeStartTime: Schema.optional(Schema.String),
    additionalService: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceClaim" });

export interface DeviceIdentifier {
  /** The manufacturer's serial number for the device. This value might not be unique across different device models. */
  serialNumber?: string;
  /** The device’s IMEI number. Validated on input. */
  imei?: string;
  /** The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible). */
  model?: string;
  /** The device’s MEID number. */
  meid?: string;
  /** An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices. */
  chromeOsAttestedDeviceId?: string;
  /** The device’s second IMEI number. */
  imei2?: string;
  /** The type of the device */
  deviceType?:
    | "DEVICE_TYPE_UNSPECIFIED"
    | "DEVICE_TYPE_ANDROID"
    | "DEVICE_TYPE_CHROME_OS"
    | (string & {});
  /** The device’s second MEID number. */
  meid2?: string;
  /** The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names). */
  manufacturer?: string;
}

export const DeviceIdentifier: Schema.Schema<DeviceIdentifier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serialNumber: Schema.optional(Schema.String),
    imei: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    meid: Schema.optional(Schema.String),
    chromeOsAttestedDeviceId: Schema.optional(Schema.String),
    imei2: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    meid2: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceIdentifier" });

export interface Device {
  /** The metadata attached to the device. Structured as key-value pairs. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
  deviceMetadata?: DeviceMetadata;
  /** Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment. */
  claims?: ReadonlyArray<DeviceClaim>;
  /** Not available to resellers. */
  configuration?: string;
  /** Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server. */
  name?: string;
  /** Output only. The ID of the device. Assigned by the server. */
  deviceId?: string;
  /** The hardware IDs that identify a manufactured device. To learn more, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
  deviceIdentifier?: DeviceIdentifier;
}

export const Device: Schema.Schema<Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceMetadata: Schema.optional(DeviceMetadata),
    claims: Schema.optional(Schema.Array(DeviceClaim)),
    configuration: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    deviceIdentifier: Schema.optional(DeviceIdentifier),
  }).annotate({ identifier: "Device" });

export interface FindDevicesByOwnerResponse {
  /** The total count of items in the list irrespective of pagination. */
  totalSize?: number;
  /** The customer's devices. */
  devices?: ReadonlyArray<Device>;
  /** A token used to access the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
}

export const FindDevicesByOwnerResponse: Schema.Schema<FindDevicesByOwnerResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    devices: Schema.optional(Schema.Array(Device)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindDevicesByOwnerResponse" });

export interface PerDeviceStatusInBatch {
  /** The result status of the device after processing. */
  status?:
    | "SINGLE_DEVICE_STATUS_UNSPECIFIED"
    | "SINGLE_DEVICE_STATUS_UNKNOWN_ERROR"
    | "SINGLE_DEVICE_STATUS_OTHER_ERROR"
    | "SINGLE_DEVICE_STATUS_SUCCESS"
    | "SINGLE_DEVICE_STATUS_PERMISSION_DENIED"
    | "SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER"
    | "SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE"
    | "SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS"
    | "SINGLE_DEVICE_STATUS_INVALID_TOKEN"
    | "SINGLE_DEVICE_STATUS_REVOKED_TOKEN"
    | "SINGLE_DEVICE_STATUS_DEVICE_LIMIT_EXCEEDED"
    | (string & {});
  /** If processing fails, a developer message explaining what went wrong. */
  errorMessage?: string;
  /** If processing succeeds, the device ID of the device. */
  deviceId?: string;
  /** If processing fails, the error type. */
  errorIdentifier?: string;
}

export const PerDeviceStatusInBatch: Schema.Schema<PerDeviceStatusInBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    errorIdentifier: Schema.optional(Schema.String),
  }).annotate({ identifier: "PerDeviceStatusInBatch" });

export interface PartnerUnclaim {
  /** Optional. The expiration time of the vacation unlock. */
  vacationModeExpireTime?: string;
  /** Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) */
  vacationModeDays?: number;
  /** Required. Device ID of the device. */
  deviceId?: string;
  /** Required. Device identifier of the device. */
  deviceIdentifier?: DeviceIdentifier;
  /** Required. The section type of the device's provisioning record. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "SECTION_TYPE_SIM_LOCK"
    | "SECTION_TYPE_ZERO_TOUCH"
    | (string & {});
}

export const PartnerUnclaim: Schema.Schema<PartnerUnclaim> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vacationModeExpireTime: Schema.optional(Schema.String),
    vacationModeDays: Schema.optional(Schema.Number),
    deviceId: Schema.optional(Schema.String),
    deviceIdentifier: Schema.optional(DeviceIdentifier),
    sectionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartnerUnclaim" });

export interface UnclaimDevicesRequest {
  /** Required. The list of devices to unclaim. */
  unclaims?: ReadonlyArray<PartnerUnclaim>;
}

export const UnclaimDevicesRequest: Schema.Schema<UnclaimDevicesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unclaims: Schema.optional(Schema.Array(PartnerUnclaim)),
  }).annotate({ identifier: "UnclaimDevicesRequest" });

export interface Configuration {
  /** Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins. */
  configurationName?: string;
  /** Optional. The timeout before forcing factory reset the device if the device doesn't go through provisioning in the setup wizard, usually due to lack of network connectivity during setup wizard. Ranges from 0-6 hours, with 2 hours being the default if unset. */
  forcedResetTime?: string;
  /** Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses. */
  contactPhone?: string;
  /** Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`. */
  isDefault?: boolean;
  /** Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning. */
  companyName?: string;
  /** The JSON-formatted EMM provisioning extras that are passed to the DPC. */
  dpcExtras?: string;
  /** Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`. */
  dpcResourcePath?: string;
  /** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server. */
  name?: string;
  /** Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input. */
  contactEmail?: string;
  /** Output only. The ID of the configuration. Assigned by the server. */
  configurationId?: string;
  /** A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned. */
  customMessage?: string;
}

export const Configuration: Schema.Schema<Configuration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationName: Schema.optional(Schema.String),
    forcedResetTime: Schema.optional(Schema.String),
    contactPhone: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
    companyName: Schema.optional(Schema.String),
    dpcExtras: Schema.optional(Schema.String),
    dpcResourcePath: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    contactEmail: Schema.optional(Schema.String),
    configurationId: Schema.optional(Schema.String),
    customMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "Configuration" });

export interface CustomerListConfigurationsResponse {
  /** The configurations. */
  configurations?: ReadonlyArray<Configuration>;
}

export const CustomerListConfigurationsResponse: Schema.Schema<CustomerListConfigurationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurations: Schema.optional(Schema.Array(Configuration)),
  }).annotate({ identifier: "CustomerListConfigurationsResponse" });

export interface UpdateMetadataArguments {
  /** Required. Device identifier. */
  deviceIdentifier?: DeviceIdentifier;
  /** Required. Device ID of the device. */
  deviceId?: string;
  /** Required. The metadata to update. */
  deviceMetadata?: DeviceMetadata;
}

export const UpdateMetadataArguments: Schema.Schema<UpdateMetadataArguments> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceIdentifier: Schema.optional(DeviceIdentifier),
    deviceId: Schema.optional(Schema.String),
    deviceMetadata: Schema.optional(DeviceMetadata),
  }).annotate({ identifier: "UpdateMetadataArguments" });

export interface PartnerClaim {
  /** The Google Workspace customer ID. */
  googleWorkspaceCustomerId?: string;
  /** Required. The metadata to attach to the device at claim. */
  deviceMetadata?: DeviceMetadata;
  /** Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. */
  simlockProfileId?: string;
  /** Optional. Must and can only be set for Chrome OS devices. */
  preProvisioningToken?: string;
  /** Optional. The ID of the configuration applied to the device section. */
  configurationId?: string;
  /** Required. Required. Device identifier of the device. */
  deviceIdentifier?: DeviceIdentifier;
  /** Required. The section type of the device's provisioning record. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "SECTION_TYPE_SIM_LOCK"
    | "SECTION_TYPE_ZERO_TOUCH"
    | (string & {});
  /** The ID of the customer for whom the device is being claimed. */
  customerId?: string;
}

export const PartnerClaim: Schema.Schema<PartnerClaim> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleWorkspaceCustomerId: Schema.optional(Schema.String),
    deviceMetadata: Schema.optional(DeviceMetadata),
    simlockProfileId: Schema.optional(Schema.String),
    preProvisioningToken: Schema.optional(Schema.String),
    configurationId: Schema.optional(Schema.String),
    deviceIdentifier: Schema.optional(DeviceIdentifier),
    sectionType: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartnerClaim" });

export interface OperationPerDevice {
  /** A copy of the original metadata-update request received by the server. */
  updateMetadata?: UpdateMetadataArguments;
  /** A copy of the original device-claim request received by the server. */
  claim?: PartnerClaim;
  /** A copy of the original device-unclaim request received by the server. */
  unclaim?: PartnerUnclaim;
  /** The processing result for each device. */
  result?: PerDeviceStatusInBatch;
}

export const OperationPerDevice: Schema.Schema<OperationPerDevice> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMetadata: Schema.optional(UpdateMetadataArguments),
    claim: Schema.optional(PartnerClaim),
    unclaim: Schema.optional(PartnerUnclaim),
    result: Schema.optional(PerDeviceStatusInBatch),
  }).annotate({ identifier: "OperationPerDevice" });

export interface GoogleWorkspaceAccount {
  /** Output only. The pre-provisioning tokens previously used to claim devices. */
  preProvisioningTokens?: ReadonlyArray<string>;
  /** Required. The customer ID. */
  customerId?: string;
}

export const GoogleWorkspaceAccount: Schema.Schema<GoogleWorkspaceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preProvisioningTokens: Schema.optional(Schema.Array(Schema.String)),
    customerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleWorkspaceAccount" });

export interface ClaimDeviceRequest {
  /** The Google Workspace customer ID. */
  googleWorkspaceCustomerId?: string;
  /** Optional. The metadata to attach to the device. */
  deviceMetadata?: DeviceMetadata;
  /** Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. */
  simlockProfileId?: string;
  /** Optional. Must and can only be set for Chrome OS devices. */
  preProvisioningToken?: string;
  /** Optional. The ID of the configuration applied to the device section. */
  configurationId?: string;
  /** Required. Required. The device identifier of the device to claim. */
  deviceIdentifier?: DeviceIdentifier;
  /** Required. The section type of the device's provisioning record. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "SECTION_TYPE_SIM_LOCK"
    | "SECTION_TYPE_ZERO_TOUCH"
    | (string & {});
  /** The ID of the customer for whom the device is being claimed. */
  customerId?: string;
}

export const ClaimDeviceRequest: Schema.Schema<ClaimDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleWorkspaceCustomerId: Schema.optional(Schema.String),
    deviceMetadata: Schema.optional(DeviceMetadata),
    simlockProfileId: Schema.optional(Schema.String),
    preProvisioningToken: Schema.optional(Schema.String),
    configurationId: Schema.optional(Schema.String),
    deviceIdentifier: Schema.optional(DeviceIdentifier),
    sectionType: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClaimDeviceRequest" });

export interface Company {
  /** Output only. The Google Workspace account associated with this customer. Only used for customer Companies. */
  googleWorkspaceAccount?: GoogleWorkspaceAccount;
  /** Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account. */
  adminEmails?: ReadonlyArray<string>;
  /** Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users. */
  ownerEmails?: ReadonlyArray<string>;
  /** Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus. */
  termsStatus?:
    | "TERMS_STATUS_UNSPECIFIED"
    | "TERMS_STATUS_NOT_ACCEPTED"
    | "TERMS_STATUS_ACCEPTED"
    | "TERMS_STATUS_STALE"
    | (string & {});
  /** Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server. */
  name?: string;
  /** Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi) */
  languageCode?: string;
  /** Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal. */
  companyName?: string;
  /** Output only. The ID of the company. Assigned by the server. */
  companyId?: string;
  /** Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer. */
  skipWelcomeEmail?: boolean;
}

export const Company: Schema.Schema<Company> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    googleWorkspaceAccount: Schema.optional(GoogleWorkspaceAccount),
    adminEmails: Schema.optional(Schema.Array(Schema.String)),
    ownerEmails: Schema.optional(Schema.Array(Schema.String)),
    termsStatus: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    companyName: Schema.optional(Schema.String),
    companyId: Schema.optional(Schema.String),
    skipWelcomeEmail: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Company" });

export interface ListCustomersResponse {
  /** The total count of items in the list irrespective of pagination. */
  totalSize?: number;
  /** List of customers related to this reseller partner. */
  customers?: ReadonlyArray<Company>;
  /** A token to retrieve the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
}

export const ListCustomersResponse: Schema.Schema<ListCustomersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    customers: Schema.optional(Schema.Array(Company)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCustomersResponse" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
  response?: Record<string, unknown>;
  /** This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error information for each device is set in `response.perDeviceStatus.result.status`. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface DevicesLongRunningOperationResponse {
  /** A summary of how many items in the operation the server processed successfully. Updated as the operation progresses. */
  successCount?: number;
  /** The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request. */
  perDeviceStatus?: ReadonlyArray<OperationPerDevice>;
}

export const DevicesLongRunningOperationResponse: Schema.Schema<DevicesLongRunningOperationResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    successCount: Schema.optional(Schema.Number),
    perDeviceStatus: Schema.optional(Schema.Array(OperationPerDevice)),
  }).annotate({ identifier: "DevicesLongRunningOperationResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ClaimDevicesRequest {
  /** Required. A list of device claims. */
  claims?: ReadonlyArray<PartnerClaim>;
}

export const ClaimDevicesRequest: Schema.Schema<ClaimDevicesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    claims: Schema.optional(Schema.Array(PartnerClaim)),
  }).annotate({ identifier: "ClaimDevicesRequest" });

export interface CustomerListDevicesResponse {
  /** The customer's devices. */
  devices?: ReadonlyArray<Device>;
  /** A token used to access the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
}

export const CustomerListDevicesResponse: Schema.Schema<CustomerListDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    devices: Schema.optional(Schema.Array(Device)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerListDevicesResponse" });

export interface GetDeviceSimLockStateRequest {
  /** Required. Required. The device identifier to search for. */
  deviceIdentifier?: DeviceIdentifier;
}

export const GetDeviceSimLockStateRequest: Schema.Schema<GetDeviceSimLockStateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceIdentifier: Schema.optional(DeviceIdentifier),
  }).annotate({ identifier: "GetDeviceSimLockStateRequest" });

export interface ListVendorsResponse {
  /** The total count of items in the list irrespective of pagination. */
  totalSize?: number;
  /** List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object. */
  vendors?: ReadonlyArray<Company>;
  /** A token to retrieve the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
}

export const ListVendorsResponse: Schema.Schema<ListVendorsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    vendors: Schema.optional(Schema.Array(Company)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListVendorsResponse" });

export interface FindDevicesByOwnerRequest {
  /** Required. The section type of the device's provisioning record. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "SECTION_TYPE_SIM_LOCK"
    | "SECTION_TYPE_ZERO_TOUCH"
    | (string & {});
  /** The list of customer IDs to search for. */
  customerId?: ReadonlyArray<string>;
  /** A token specifying which result page to return. */
  pageToken?: string;
  /** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
  limit?: string;
  /** The list of IDs of Google Workspace accounts to search for. */
  googleWorkspaceCustomerId?: ReadonlyArray<string>;
}

export const FindDevicesByOwnerRequest: Schema.Schema<FindDevicesByOwnerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sectionType: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.Array(Schema.String)),
    pageToken: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    googleWorkspaceCustomerId: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FindDevicesByOwnerRequest" });

export interface UpdateDeviceMetadataRequest {
  /** Required. The metadata to attach to the device. */
  deviceMetadata?: DeviceMetadata;
}

export const UpdateDeviceMetadataRequest: Schema.Schema<UpdateDeviceMetadataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceMetadata: Schema.optional(DeviceMetadata),
  }).annotate({ identifier: "UpdateDeviceMetadataRequest" });

export interface DeviceReference {
  /** The hardware IDs of the device. */
  deviceIdentifier?: DeviceIdentifier;
  /** The ID of the device. */
  deviceId?: string;
}

export const DeviceReference: Schema.Schema<DeviceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceIdentifier: Schema.optional(DeviceIdentifier),
    deviceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceReference" });

export interface CustomerApplyConfigurationRequest {
  /** Required. The device the configuration is applied to. There are custom validations in ApplyConfigurationRequestValidator */
  device?: DeviceReference;
  /** Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. */
  configuration?: string;
}

export const CustomerApplyConfigurationRequest: Schema.Schema<CustomerApplyConfigurationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(DeviceReference),
    configuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerApplyConfigurationRequest" });

export interface ListVendorCustomersResponse {
  /** List of customers of the vendor. */
  customers?: ReadonlyArray<Company>;
  /** A token to retrieve the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
  /** The total count of items in the list irrespective of pagination. */
  totalSize?: number;
}

export const ListVendorCustomersResponse: Schema.Schema<ListVendorCustomersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customers: Schema.optional(Schema.Array(Company)),
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListVendorCustomersResponse" });

export interface CreateCustomerRequest {
  /** Required. The company data to populate the new customer. Must contain a value for `companyName` and at least one `owner_email` that's associated with a Google Account. The values for `companyId` and `name` must be empty. */
  customer?: Company;
}

export const CreateCustomerRequest: Schema.Schema<CreateCustomerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Company),
  }).annotate({ identifier: "CreateCustomerRequest" });

export interface ClaimDeviceResponse {
  /** The device ID of the claimed device. */
  deviceId?: string;
  /** The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. */
  deviceName?: string;
}

export const ClaimDeviceResponse: Schema.Schema<ClaimDeviceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceId: Schema.optional(Schema.String),
    deviceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClaimDeviceResponse" });

export interface FindDevicesByDeviceIdentifierRequest {
  /** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
  limit?: string;
  /** A token specifying which result page to return. */
  pageToken?: string;
  /** Required. Required. The device identifier to search for. If serial number is provided then case insensitive serial number matches are allowed. */
  deviceIdentifier?: DeviceIdentifier;
}

export const FindDevicesByDeviceIdentifierRequest: Schema.Schema<FindDevicesByDeviceIdentifierRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    deviceIdentifier: Schema.optional(DeviceIdentifier),
  }).annotate({ identifier: "FindDevicesByDeviceIdentifierRequest" });

export interface Dpc {
  /** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`). */
  name?: string;
  /** Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface. */
  dpcName?: string;
  /** Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier. */
  packageName?: string;
}

export const Dpc: Schema.Schema<Dpc> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dpcName: Schema.optional(Schema.String),
    packageName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dpc" });

export interface FindDevicesByDeviceIdentifierResponse {
  /** The total count of items in the list irrespective of pagination. */
  totalSize?: number;
  /** Found devices. */
  devices?: ReadonlyArray<Device>;
  /** A token used to access the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
}

export const FindDevicesByDeviceIdentifierResponse: Schema.Schema<FindDevicesByDeviceIdentifierResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalSize: Schema.optional(Schema.Number),
    devices: Schema.optional(Schema.Array(Device)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindDevicesByDeviceIdentifierResponse" });

export interface CustomerListDpcsResponse {
  /** The list of DPCs available to the customer that support zero-touch enrollment. */
  dpcs?: ReadonlyArray<Dpc>;
}

export const CustomerListDpcsResponse: Schema.Schema<CustomerListDpcsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dpcs: Schema.optional(Schema.Array(Dpc)),
  }).annotate({ identifier: "CustomerListDpcsResponse" });

export interface CustomerListCustomersResponse {
  /** The customer accounts the calling user is a member of. */
  customers?: ReadonlyArray<Company>;
  /** A token used to access the next page of results. Omitted if no further results are available. */
  nextPageToken?: string;
}

export const CustomerListCustomersResponse: Schema.Schema<CustomerListCustomersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customers: Schema.optional(Schema.Array(Company)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerListCustomersResponse" });

export interface UnclaimDeviceRequest {
  /** The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) */
  vacationModeDays?: number;
  /** Required. The device identifier you used when you claimed this device. */
  deviceIdentifier?: DeviceIdentifier;
  /** Required. The section type of the device's provisioning record. */
  sectionType?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "SECTION_TYPE_SIM_LOCK"
    | "SECTION_TYPE_ZERO_TOUCH"
    | (string & {});
  /** Required. The device ID returned by `ClaimDevice`. */
  deviceId?: string;
  /** The expiration time of the vacation unlock. */
  vacationModeExpireTime?: string;
}

export const UnclaimDeviceRequest: Schema.Schema<UnclaimDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vacationModeDays: Schema.optional(Schema.Number),
    deviceIdentifier: Schema.optional(DeviceIdentifier),
    sectionType: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    vacationModeExpireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UnclaimDeviceRequest" });

export interface GetDeviceSimLockStateResponse {
  simLockState?:
    | "SIM_LOCK_STATE_UNSPECIFIED"
    | "UNLOCKED"
    | "LOCKED_TO_PARTNER"
    | "LOCKED_TO_OTHER_PARTNER"
    | (string & {});
}

export const GetDeviceSimLockStateResponse: Schema.Schema<GetDeviceSimLockStateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    simLockState: Schema.optional(Schema.String),
  }).annotate({ identifier: "GetDeviceSimLockStateResponse" });

export interface UpdateDeviceMetadataInBatchRequest {
  /** Required. The list of metadata updates. */
  updates?: ReadonlyArray<UpdateMetadataArguments>;
}

export const UpdateDeviceMetadataInBatchRequest: Schema.Schema<UpdateDeviceMetadataInBatchRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updates: Schema.optional(Schema.Array(UpdateMetadataArguments)),
  }).annotate({ identifier: "UpdateDeviceMetadataInBatchRequest" });

export interface CustomerRemoveConfigurationRequest {
  /** Required. The device to remove the configuration from. There are custom validations in RemoveConfigurationRequestValidator */
  device?: DeviceReference;
}

export const CustomerRemoveConfigurationRequest: Schema.Schema<CustomerRemoveConfigurationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(DeviceReference),
  }).annotate({ identifier: "CustomerRemoveConfigurationRequest" });

export interface CustomerUnclaimDeviceRequest {
  /** Required. The device to unclaim. There are custom validations in UnclaimDeviceRequestValidator. */
  device?: DeviceReference;
}

export const CustomerUnclaimDeviceRequest: Schema.Schema<CustomerUnclaimDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(DeviceReference),
  }).annotate({ identifier: "CustomerUnclaimDeviceRequest" });

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

export interface GetOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getOperations: API.OperationMethod<
  GetOperationsRequest,
  GetOperationsResponse,
  GetOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOperationsRequest,
  output: GetOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCustomersRequest {
  /** A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator */
  pageToken?: string;
  /** Required. The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive). */
  pageSize?: number;
}

export const ListCustomersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "v1/customers" }),
  svc,
) as unknown as Schema.Schema<ListCustomersRequest>;

export type ListCustomersResponse_Op = CustomerListCustomersResponse;
export const ListCustomersResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ CustomerListCustomersResponse;

export type ListCustomersError = DefaultErrors | NotFound | Forbidden;

/** Lists the user's customer accounts. */
export const listCustomers: API.PaginatedOperationMethod<
  ListCustomersRequest,
  ListCustomersResponse_Op,
  ListCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersRequest,
  output: ListCustomersResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateCustomersConfigurationsRequest {
  /** Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator */
  parent: string;
  /** Request body */
  body?: Configuration;
}

export const CreateCustomersConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Configuration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/configurations",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateCustomersConfigurationsRequest>;

export type CreateCustomersConfigurationsResponse = Configuration;
export const CreateCustomersConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type CreateCustomersConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new configuration. Once created, a customer can apply the configuration to devices. */
export const createCustomersConfigurations: API.OperationMethod<
  CreateCustomersConfigurationsRequest,
  CreateCustomersConfigurationsResponse,
  CreateCustomersConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomersConfigurationsRequest,
  output: CreateCustomersConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomersConfigurationsRequest {
  /** Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`. */
  parent: string;
}

export const ListCustomersConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/configurations" }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersConfigurationsRequest>;

export type ListCustomersConfigurationsResponse =
  CustomerListConfigurationsResponse;
export const ListCustomersConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomerListConfigurationsResponse;

export type ListCustomersConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists a customer's configurations. */
export const listCustomersConfigurations: API.OperationMethod<
  ListCustomersConfigurationsRequest,
  ListCustomersConfigurationsResponse,
  ListCustomersConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCustomersConfigurationsRequest,
  output: ListCustomersConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteCustomersConfigurationsRequest {
  /** Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails. */
  name: string;
}

export const DeleteCustomersConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteCustomersConfigurationsRequest>;

export type DeleteCustomersConfigurationsResponse = Empty;
export const DeleteCustomersConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteCustomersConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied. */
export const deleteCustomersConfigurations: API.OperationMethod<
  DeleteCustomersConfigurationsRequest,
  DeleteCustomersConfigurationsResponse,
  DeleteCustomersConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteCustomersConfigurationsRequest,
  output: DeleteCustomersConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchCustomersConfigurationsRequest {
  /** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server. */
  name: string;
  /** Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation. */
  updateMask?: string;
  /** Request body */
  body?: Configuration;
}

export const PatchCustomersConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Configuration).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchCustomersConfigurationsRequest>;

export type PatchCustomersConfigurationsResponse = Configuration;
export const PatchCustomersConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type PatchCustomersConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a configuration's field values. */
export const patchCustomersConfigurations: API.OperationMethod<
  PatchCustomersConfigurationsRequest,
  PatchCustomersConfigurationsResponse,
  PatchCustomersConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCustomersConfigurationsRequest,
  output: PatchCustomersConfigurationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCustomersConfigurationsRequest {
  /** Required. The configuration to get. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. */
  name: string;
}

export const GetCustomersConfigurationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomersConfigurationsRequest>;

export type GetCustomersConfigurationsResponse = Configuration;
export const GetCustomersConfigurationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Configuration;

export type GetCustomersConfigurationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a configuration. */
export const getCustomersConfigurations: API.OperationMethod<
  GetCustomersConfigurationsRequest,
  GetCustomersConfigurationsResponse,
  GetCustomersConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersConfigurationsRequest,
  output: GetCustomersConfigurationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCustomersDpcsRequest {
  /** Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`. */
  parent: string;
}

export const ListCustomersDpcsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dpcs" }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersDpcsRequest>;

export type ListCustomersDpcsResponse = CustomerListDpcsResponse;
export const ListCustomersDpcsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomerListDpcsResponse;

export type ListCustomersDpcsError = DefaultErrors | NotFound | Forbidden;

/** Lists the DPCs (device policy controllers) that support zero-touch enrollment. */
export const listCustomersDpcs: API.OperationMethod<
  ListCustomersDpcsRequest,
  ListCustomersDpcsResponse,
  ListCustomersDpcsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCustomersDpcsRequest,
  output: ListCustomersDpcsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCustomersDevicesRequest {
  /** Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`. */
  parent: string;
  /** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
  pageSize?: string;
  /** A token specifying which result page to return. */
  pageToken?: string;
}

export const ListCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.String).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/devices" }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersDevicesRequest>;

export type ListCustomersDevicesResponse = CustomerListDevicesResponse;
export const ListCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomerListDevicesResponse;

export type ListCustomersDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists a customer's devices. */
export const listCustomersDevices: API.PaginatedOperationMethod<
  ListCustomersDevicesRequest,
  ListCustomersDevicesResponse,
  ListCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersDevicesRequest,
  output: ListCustomersDevicesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ApplyConfigurationCustomersDevicesRequest {
  /** Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`. */
  parent: string;
  /** Request body */
  body?: CustomerApplyConfigurationRequest;
}

export const ApplyConfigurationCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CustomerApplyConfigurationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/devices:applyConfiguration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ApplyConfigurationCustomersDevicesRequest>;

export type ApplyConfigurationCustomersDevicesResponse = Empty;
export const ApplyConfigurationCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type ApplyConfigurationCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset. */
export const applyConfigurationCustomersDevices: API.OperationMethod<
  ApplyConfigurationCustomersDevicesRequest,
  ApplyConfigurationCustomersDevicesResponse,
  ApplyConfigurationCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApplyConfigurationCustomersDevicesRequest,
  output: ApplyConfigurationCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveConfigurationCustomersDevicesRequest {
  /** Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`. */
  parent: string;
  /** Request body */
  body?: CustomerRemoveConfigurationRequest;
}

export const RemoveConfigurationCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CustomerRemoveConfigurationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/devices:removeConfiguration",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveConfigurationCustomersDevicesRequest>;

export type RemoveConfigurationCustomersDevicesResponse = Empty;
export const RemoveConfigurationCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RemoveConfigurationCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a configuration from device. */
export const removeConfigurationCustomersDevices: API.OperationMethod<
  RemoveConfigurationCustomersDevicesRequest,
  RemoveConfigurationCustomersDevicesResponse,
  RemoveConfigurationCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveConfigurationCustomersDevicesRequest,
  output: RemoveConfigurationCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCustomersDevicesRequest {
  /** Required. The device to get. An API resource name in the format `customers/[CUSTOMER_ID]/devices/[DEVICE_ID]`. */
  name: string;
}

export const GetCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomersDevicesRequest>;

export type GetCustomersDevicesResponse = Device;
export const GetCustomersDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Device;

export type GetCustomersDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets the details of a device. */
export const getCustomersDevices: API.OperationMethod<
  GetCustomersDevicesRequest,
  GetCustomersDevicesResponse,
  GetCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersDevicesRequest,
  output: GetCustomersDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UnclaimCustomersDevicesRequest {
  /** Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`. */
  parent: string;
  /** Request body */
  body?: CustomerUnclaimDeviceRequest;
}

export const UnclaimCustomersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CustomerUnclaimDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/devices:unclaim",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnclaimCustomersDevicesRequest>;

export type UnclaimCustomersDevicesResponse = Empty;
export const UnclaimCustomersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type UnclaimCustomersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again. */
export const unclaimCustomersDevices: API.OperationMethod<
  UnclaimCustomersDevicesRequest,
  UnclaimCustomersDevicesResponse,
  UnclaimCustomersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnclaimCustomersDevicesRequest,
  output: UnclaimCustomersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPartnersVendorsRequest {
  /** Required. The resource name in the format `partners/[PARTNER_ID]`. */
  parent: string;
  /** The maximum number of results to be returned. */
  pageSize?: number;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
}

export const ListPartnersVendorsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/vendors" }),
    svc,
  ) as unknown as Schema.Schema<ListPartnersVendorsRequest>;

export type ListPartnersVendorsResponse = ListVendorsResponse;
export const ListPartnersVendorsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVendorsResponse;

export type ListPartnersVendorsError = DefaultErrors | NotFound | Forbidden;

/** Lists the vendors of the partner. */
export const listPartnersVendors: API.PaginatedOperationMethod<
  ListPartnersVendorsRequest,
  ListPartnersVendorsResponse,
  ListPartnersVendorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPartnersVendorsRequest,
  output: ListPartnersVendorsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListPartnersVendorsCustomersRequest {
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
  /** Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`. */
  parent: string;
  /** The maximum number of results to be returned. */
  pageSize?: number;
}

export const ListPartnersVendorsCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/customers" }),
    svc,
  ) as unknown as Schema.Schema<ListPartnersVendorsCustomersRequest>;

export type ListPartnersVendorsCustomersResponse = ListVendorCustomersResponse;
export const ListPartnersVendorsCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListVendorCustomersResponse;

export type ListPartnersVendorsCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the customers of the vendor. */
export const listPartnersVendorsCustomers: API.PaginatedOperationMethod<
  ListPartnersVendorsCustomersRequest,
  ListPartnersVendorsCustomersResponse,
  ListPartnersVendorsCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPartnersVendorsCustomersRequest,
  output: ListPartnersVendorsCustomersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreatePartnersCustomersRequest {
  /** Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller. */
  parent: string;
  /** Request body */
  body?: CreateCustomerRequest;
}

export const CreatePartnersCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(CreateCustomerRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/customers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreatePartnersCustomersRequest>;

export type CreatePartnersCustomersResponse = Company;
export const CreatePartnersCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Company;

export type CreatePartnersCustomersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal. */
export const createPartnersCustomers: API.OperationMethod<
  CreatePartnersCustomersRequest,
  CreatePartnersCustomersResponse,
  CreatePartnersCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePartnersCustomersRequest,
  output: CreatePartnersCustomersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListPartnersCustomersRequest {
  /** Required. The ID of the reseller partner. */
  partnerId: string;
  /** A token identifying a page of results returned by the server. */
  pageToken?: string;
  /** The maximum number of results to be returned. If not specified or 0, all the records are returned. */
  pageSize?: number;
}

export const ListPartnersCustomersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/partners/{+partnerId}/customers" }),
    svc,
  ) as unknown as Schema.Schema<ListPartnersCustomersRequest>;

export type ListPartnersCustomersResponse = ListCustomersResponse;
export const ListPartnersCustomersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomersResponse;

export type ListPartnersCustomersError = DefaultErrors | NotFound | Forbidden;

/** Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal. */
export const listPartnersCustomers: API.PaginatedOperationMethod<
  ListPartnersCustomersRequest,
  ListPartnersCustomersResponse,
  ListPartnersCustomersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPartnersCustomersRequest,
  output: ListPartnersCustomersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateMetadataAsyncPartnersDevicesRequest {
  /** Required. The reseller partner ID. */
  partnerId: string;
  /** Request body */
  body?: UpdateDeviceMetadataInBatchRequest;
}

export const UpdateMetadataAsyncPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(UpdateDeviceMetadataInBatchRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:updateMetadataAsync",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpdateMetadataAsyncPartnersDevicesRequest>;

export type UpdateMetadataAsyncPartnersDevicesResponse = Operation;
export const UpdateMetadataAsyncPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateMetadataAsyncPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only. */
export const updateMetadataAsyncPartnersDevices: API.OperationMethod<
  UpdateMetadataAsyncPartnersDevicesRequest,
  UpdateMetadataAsyncPartnersDevicesResponse,
  UpdateMetadataAsyncPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateMetadataAsyncPartnersDevicesRequest,
  output: UpdateMetadataAsyncPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnclaimAsyncPartnersDevicesRequest {
  /** Required. The reseller partner ID. */
  partnerId: string;
  /** Request body */
  body?: UnclaimDevicesRequest;
}

export const UnclaimAsyncPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(UnclaimDevicesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:unclaimAsync",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnclaimAsyncPartnersDevicesRequest>;

export type UnclaimAsyncPartnersDevicesResponse = Operation;
export const UnclaimAsyncPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UnclaimAsyncPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). */
export const unclaimAsyncPartnersDevices: API.OperationMethod<
  UnclaimAsyncPartnersDevicesRequest,
  UnclaimAsyncPartnersDevicesResponse,
  UnclaimAsyncPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnclaimAsyncPartnersDevicesRequest,
  output: UnclaimAsyncPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSimLockStatePartnersDevicesRequest {
  /** Required. The ID of the partner. */
  partnerId: string;
  /** Request body */
  body?: GetDeviceSimLockStateRequest;
}

export const GetSimLockStatePartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(GetDeviceSimLockStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:getSimLockState",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetSimLockStatePartnersDevicesRequest>;

export type GetSimLockStatePartnersDevicesResponse =
  GetDeviceSimLockStateResponse;
export const GetSimLockStatePartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GetDeviceSimLockStateResponse;

export type GetSimLockStatePartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets a device's SIM lock state. */
export const getSimLockStatePartnersDevices: API.OperationMethod<
  GetSimLockStatePartnersDevicesRequest,
  GetSimLockStatePartnersDevicesResponse,
  GetSimLockStatePartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSimLockStatePartnersDevicesRequest,
  output: GetSimLockStatePartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MetadataPartnersDevicesRequest {
  /** Required. The owner of the newly set metadata. Set this to the partner ID. */
  metadataOwnerId: string;
  /** Required. The ID of the device. */
  deviceId: string;
  /** Request body */
  body?: UpdateDeviceMetadataRequest;
}

export const MetadataPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataOwnerId: Schema.String.pipe(T.HttpPath("metadataOwnerId")),
    deviceId: Schema.String.pipe(T.HttpPath("deviceId")),
    body: Schema.optional(UpdateDeviceMetadataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+metadataOwnerId}/devices/{+deviceId}/metadata",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<MetadataPartnersDevicesRequest>;

export type MetadataPartnersDevicesResponse = DeviceMetadata;
export const MetadataPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeviceMetadata;

export type MetadataPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates reseller metadata associated with the device. Android devices only. */
export const metadataPartnersDevices: API.OperationMethod<
  MetadataPartnersDevicesRequest,
  MetadataPartnersDevicesResponse,
  MetadataPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MetadataPartnersDevicesRequest,
  output: MetadataPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClaimAsyncPartnersDevicesRequest {
  /** Required. The ID of the reseller partner. */
  partnerId: string;
  /** Request body */
  body?: ClaimDevicesRequest;
}

export const ClaimAsyncPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(ClaimDevicesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:claimAsync",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClaimAsyncPartnersDevicesRequest>;

export type ClaimAsyncPartnersDevicesResponse = Operation;
export const ClaimAsyncPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ClaimAsyncPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). */
export const claimAsyncPartnersDevices: API.OperationMethod<
  ClaimAsyncPartnersDevicesRequest,
  ClaimAsyncPartnersDevicesResponse,
  ClaimAsyncPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClaimAsyncPartnersDevicesRequest,
  output: ClaimAsyncPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ClaimPartnersDevicesRequest {
  /** Required. The ID of the reseller partner. */
  partnerId: string;
  /** Request body */
  body?: ClaimDeviceRequest;
}

export const ClaimPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(ClaimDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:claim",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ClaimPartnersDevicesRequest>;

export type ClaimPartnersDevicesResponse = ClaimDeviceResponse;
export const ClaimPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClaimDeviceResponse;

export type ClaimPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error. */
export const claimPartnersDevices: API.OperationMethod<
  ClaimPartnersDevicesRequest,
  ClaimPartnersDevicesResponse,
  ClaimPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClaimPartnersDevicesRequest,
  output: ClaimPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FindByIdentifierPartnersDevicesRequest {
  /** Required. The ID of the reseller partner. */
  partnerId: string;
  /** Request body */
  body?: FindDevicesByDeviceIdentifierRequest;
}

export const FindByIdentifierPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(FindDevicesByDeviceIdentifierRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:findByIdentifier",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FindByIdentifierPartnersDevicesRequest>;

export type FindByIdentifierPartnersDevicesResponse =
  FindDevicesByDeviceIdentifierResponse;
export const FindByIdentifierPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindDevicesByDeviceIdentifierResponse;

export type FindByIdentifierPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds devices by hardware identifiers, such as IMEI. */
export const findByIdentifierPartnersDevices: API.OperationMethod<
  FindByIdentifierPartnersDevicesRequest,
  FindByIdentifierPartnersDevicesResponse,
  FindByIdentifierPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindByIdentifierPartnersDevicesRequest,
  output: FindByIdentifierPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetPartnersDevicesRequest {
  /** Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. */
  name: string;
}

export const GetPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetPartnersDevicesRequest>;

export type GetPartnersDevicesResponse = Device;
export const GetPartnersDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Device;

export type GetPartnersDevicesError = DefaultErrors | NotFound | Forbidden;

/** Gets a device. */
export const getPartnersDevices: API.OperationMethod<
  GetPartnersDevicesRequest,
  GetPartnersDevicesResponse,
  GetPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPartnersDevicesRequest,
  output: GetPartnersDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UnclaimPartnersDevicesRequest {
  /** Required. The ID of the reseller partner. */
  partnerId: string;
  /** Request body */
  body?: UnclaimDeviceRequest;
}

export const UnclaimPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(UnclaimDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:unclaim",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnclaimPartnersDevicesRequest>;

export type UnclaimPartnersDevicesResponse = Empty;
export const UnclaimPartnersDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type UnclaimPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unclaims a device from a customer and removes it from zero-touch enrollment. */
export const unclaimPartnersDevices: API.OperationMethod<
  UnclaimPartnersDevicesRequest,
  UnclaimPartnersDevicesResponse,
  UnclaimPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnclaimPartnersDevicesRequest,
  output: UnclaimPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FindByOwnerPartnersDevicesRequest {
  /** Required. The ID of the reseller partner. */
  partnerId: string;
  /** Request body */
  body?: FindDevicesByOwnerRequest;
}

export const FindByOwnerPartnersDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partnerId: Schema.String.pipe(T.HttpPath("partnerId")),
    body: Schema.optional(FindDevicesByOwnerRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/partners/{+partnerId}/devices:findByOwner",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FindByOwnerPartnersDevicesRequest>;

export type FindByOwnerPartnersDevicesResponse = FindDevicesByOwnerResponse;
export const FindByOwnerPartnersDevicesResponse =
  /*@__PURE__*/ /*#__PURE__*/ FindDevicesByOwnerResponse;

export type FindByOwnerPartnersDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results. */
export const findByOwnerPartnersDevices: API.OperationMethod<
  FindByOwnerPartnersDevicesRequest,
  FindByOwnerPartnersDevicesResponse,
  FindByOwnerPartnersDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindByOwnerPartnersDevicesRequest,
  output: FindByOwnerPartnersDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
