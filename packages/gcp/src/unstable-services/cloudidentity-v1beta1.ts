// ==========================================================================
// Cloud Identity API (cloudidentity v1beta1)
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
  name: "cloudidentity",
  version: "v1beta1",
  rootUrl: "https://cloudidentity.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface MoveOrgMembershipRequest {
  /** Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization. */
  customer?: string;
  /** Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). */
  destinationOrgUnit?: string;
}

export const MoveOrgMembershipRequest: Schema.Schema<MoveOrgMembershipRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    destinationOrgUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveOrgMembershipRequest" });

export interface BlockDeviceUserRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const BlockDeviceUserRequest: Schema.Schema<BlockDeviceUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
  }).annotate({ identifier: "BlockDeviceUserRequest" });

export interface GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata {}

export const GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata",
  });

export interface OrgMembership {
  /** Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource). */
  member?: string;
  /** Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of [OrgMembership.EntityType], and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE. */
  name?: string;
  /** Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource). */
  memberUri?: string;
  /** Immutable. Entity type for the org member. */
  type?: "ENTITY_TYPE_UNSPECIFIED" | "SHARED_DRIVE" | (string & {});
}

export const OrgMembership: Schema.Schema<OrgMembership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    member: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    memberUri: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "OrgMembership" });

export interface WipeDeviceRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
  /** Optional. Specifies if a user is able to factory reset a device after a Device Wipe. On iOS, this is called "Activation Lock", while on Android, this is known as "Factory Reset Protection". If true, this protection will be removed from the device, so that a user can successfully factory reset. If false, the setting is untouched on the device. */
  removeResetLock?: boolean;
}

export const WipeDeviceRequest: Schema.Schema<WipeDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    removeResetLock: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "WipeDeviceRequest" });

export interface UpdateInboundOidcSsoProfileOperationMetadata {
  /** State of this Operation Will be "awaiting-multi-party-approval" when the operation is deferred due to the target customer having enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). */
  state?: string;
}

export const UpdateInboundOidcSsoProfileOperationMetadata: Schema.Schema<UpdateInboundOidcSsoProfileOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateInboundOidcSsoProfileOperationMetadata" });

export interface UpdateInboundSamlSsoProfileOperationMetadata {
  /** State of this Operation Will be "awaiting-multi-party-approval" when the operation is deferred due to the target customer having enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). */
  state?: string;
}

export const UpdateInboundSamlSsoProfileOperationMetadata: Schema.Schema<UpdateInboundSamlSsoProfileOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateInboundSamlSsoProfileOperationMetadata" });

export interface CertificateTemplate {
  /** The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047". */
  id?: string;
  /** The Major version of the template. Example: 100. */
  majorVersion?: number;
  /** The minor version of the template. Example: 12. */
  minorVersion?: number;
}

export const CertificateTemplate: Schema.Schema<CertificateTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    majorVersion: Schema.optional(Schema.Number),
    minorVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CertificateTemplate" });

export interface CertificateAttributes {
  /** Serial number of the certificate, Example: "123456789". */
  serialNumber?: string;
  /** The subject name of this certificate. */
  subject?: string;
  /** The X.509 extension for CertificateTemplate. */
  certificateTemplate?: CertificateTemplate;
  /** Certificate not valid before this timestamp. */
  validityStartTime?: string;
  /** The name of the issuer of this certificate. */
  issuer?: string;
  /** The certificate thumbprint. */
  thumbprint?: string;
  /** The encoded certificate fingerprint. */
  fingerprint?: string;
  /** Validation state of this certificate. */
  validationState?:
    | "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
    | "VALIDATION_SUCCESSFUL"
    | "VALIDATION_FAILED"
    | (string & {});
  /** Certificate not valid at or after this timestamp. */
  validityExpirationTime?: string;
}

export const CertificateAttributes: Schema.Schema<CertificateAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serialNumber: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    certificateTemplate: Schema.optional(CertificateTemplate),
    validityStartTime: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    thumbprint: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    validationState: Schema.optional(Schema.String),
    validityExpirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateAttributes" });

export interface PolicyConflict {
  /** Output only. The scope at which this lower-priority policy is set (USER or MACHINE). */
  scope?: "SCOPE_UNKNOWN" | "USER" | "MACHINE" | (string & {});
  /** Output only. The policy value from this lower-priority source. */
  value?: string;
  /** Output only. The source from which this lower-priority policy value originated. */
  source?:
    | "SOURCE_UNKNOWN"
    | "ENTERPRISE_DEFAULT"
    | "CLOUD"
    | "ACTIVE_DIRECTORY"
    | "DEVICE_LOCAL_ACCOUNT_OVERRIDE_DEPRECATED"
    | "PLATFORM"
    | "PRIORITY_CLOUD_DEPRECATED"
    | "MERGED"
    | "COMMAND_LINE"
    | "CLOUD_FROM_ASH"
    | "RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE"
    | (string & {});
}

export const PolicyConflict: Schema.Schema<PolicyConflict> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyConflict" });

export interface ChromePolicy {
  /** Output only. The unique name of the Chrome policy. These names correspond to the policy names listed in [Chrome Enterprise Policy List](https://chromeenterprise.google/policies/) */
  name?: string;
  /** Output only. The scope at which the *applied* policy value is set (USER or MACHINE). */
  scope?: "SCOPE_UNKNOWN" | "USER" | "MACHINE" | (string & {});
  /** Output only. The source from which the *applied* policy value originated. */
  source?:
    | "SOURCE_UNKNOWN"
    | "ENTERPRISE_DEFAULT"
    | "CLOUD"
    | "ACTIVE_DIRECTORY"
    | "DEVICE_LOCAL_ACCOUNT_OVERRIDE_DEPRECATED"
    | "PLATFORM"
    | "PRIORITY_CLOUD_DEPRECATED"
    | "MERGED"
    | "COMMAND_LINE"
    | "CLOUD_FROM_ASH"
    | "RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE"
    | (string & {});
  /** Output only. A list of other policy values for the same policy name that were not applied due to lower precedence. This field is empty if there were no conflicts. */
  conflicts?: ReadonlyArray<PolicyConflict>;
  /** Output only. The currently applied value of the policy. The format depends on the policy type (e.g., boolean, string, JSON array/object). */
  value?: string;
}

export const ChromePolicy: Schema.Schema<ChromePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    conflicts: Schema.optional(Schema.Array(PolicyConflict)),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChromePolicy" });

export interface BrowserInfo {
  /** Current state of [password protection trigger](https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger). */
  passwordProtectionWarningTrigger?:
    | "PASSWORD_PROTECTION_TRIGGER_UNSPECIFIED"
    | "PROTECTION_OFF"
    | "PASSWORD_REUSE"
    | "PHISHING_REUSE"
    | (string & {});
  /** Version of the request initiating browser. E.g. `91.0.4442.4`. */
  browserVersion?: string;
  /** Deprecated: This field is not used for Chrome version 118 and later. Current state of [Chrome Cleanup](https://chromeenterprise.google/policies/#ChromeCleanupEnabled). */
  isChromeCleanupEnabled?: boolean;
  /** Current state of [file download analysis](https://chromeenterprise.google/policies/#OnFileDownloadedEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isFileDownloadAnalysisEnabled?: boolean;
  /** Current state of [Safe Browsing protection level](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel). */
  safeBrowsingProtectionLevel?:
    | "SAFE_BROWSING_LEVEL_UNSPECIFIED"
    | "DISABLED"
    | "STANDARD"
    | "ENHANCED"
    | (string & {});
  /** Current state of [built-in DNS client](https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled). */
  isBuiltInDnsClientEnabled?: boolean;
  /** Current state of [security event analysis](https://chromeenterprise.google/policies/#OnSecurityEventEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isSecurityEventAnalysisEnabled?: boolean;
  /** Current state of [real-time URL check](https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode). Set to true if provider list from Chrome is non-empty. */
  isRealtimeUrlCheckEnabled?: boolean;
  /** Output only. Chrome policies information for the browser as can be seen in chrome://policy. Full possibilities of policies can be consulted in [Chrome Enterprise Policy List](https://chromeenterprise.google/policies/). */
  policies?: ReadonlyArray<ChromePolicy>;
  /** Current state of [bulk data analysis](https://chromeenterprise.google/policies/#OnBulkDataEntryEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isBulkDataEntryAnalysisEnabled?: boolean;
  /** Current state of [site isolation](https://chromeenterprise.google/policies/?policy=IsolateOrigins). */
  isSiteIsolationEnabled?: boolean;
  /** Current state of [Chrome Remote Desktop app](https://chromeenterprise.google/policies/#URLBlocklist). */
  isChromeRemoteDesktopAppBlocked?: boolean;
  /** Current state of [third-party blocking](https://chromeenterprise.google/policies/#ThirdPartyBlockingEnabled). */
  isThirdPartyBlockingEnabled?: boolean;
  /** Output only. Browser's management state. */
  browserManagementState?:
    | "UNSPECIFIED"
    | "UNMANAGED"
    | "MANAGED_BY_OTHER_DOMAIN"
    | "PROFILE_MANAGED"
    | "BROWSER_MANAGED"
    | (string & {});
  /** Current state of [file upload analysis](https://chromeenterprise.google/policies/#OnFileAttachedEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isFileUploadAnalysisEnabled?: boolean;
}

export const BrowserInfo: Schema.Schema<BrowserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordProtectionWarningTrigger: Schema.optional(Schema.String),
    browserVersion: Schema.optional(Schema.String),
    isChromeCleanupEnabled: Schema.optional(Schema.Boolean),
    isFileDownloadAnalysisEnabled: Schema.optional(Schema.Boolean),
    safeBrowsingProtectionLevel: Schema.optional(Schema.String),
    isBuiltInDnsClientEnabled: Schema.optional(Schema.Boolean),
    isSecurityEventAnalysisEnabled: Schema.optional(Schema.Boolean),
    isRealtimeUrlCheckEnabled: Schema.optional(Schema.Boolean),
    policies: Schema.optional(Schema.Array(ChromePolicy)),
    isBulkDataEntryAnalysisEnabled: Schema.optional(Schema.Boolean),
    isSiteIsolationEnabled: Schema.optional(Schema.Boolean),
    isChromeRemoteDesktopAppBlocked: Schema.optional(Schema.Boolean),
    isThirdPartyBlockingEnabled: Schema.optional(Schema.Boolean),
    browserManagementState: Schema.optional(Schema.String),
    isFileUploadAnalysisEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BrowserInfo" });

export interface BrowserAttributes {
  /** Timestamp in milliseconds since the Unix epoch when the profile/gcm id was last synced. */
  lastProfileSyncTime?: string;
  /** Represents the current state of the [Chrome browser attributes](https://cloud.google.com/access-context-manager/docs/browser-attributes) sent by the clients on the device, such as [Endpoint Verification extension](https://chromewebstore.google.com/detail/endpoint-verification/callobklhcbilhphinckomhgkigmfocg?pli=1). */
  chromeBrowserInfo?: BrowserInfo;
  /** Chrome profile ID that is exposed by the Chrome API. It is unique for each device. */
  chromeProfileId?: string;
}

export const BrowserAttributes: Schema.Schema<BrowserAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastProfileSyncTime: Schema.optional(Schema.String),
    chromeBrowserInfo: Schema.optional(BrowserInfo),
    chromeProfileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "BrowserAttributes" });

export interface EndpointVerificationSpecificAttributes {
  /** Details of certificates. */
  certificateAttributes?: ReadonlyArray<CertificateAttributes>;
  /** Details of browser profiles reported by Endpoint Verification. */
  browserAttributes?: ReadonlyArray<BrowserAttributes>;
  /** [Additional signals](https://cloud.google.com/endpoint-verification/docs/device-information) reported by Endpoint Verification. It includes the following attributes: * Non-configurable attributes: hotfixes, av_installed, av_enabled, windows_domain_name, is_os_native_firewall_enabled, and is_secure_boot_enabled. * [Configurable attributes](https://cloud.google.com/endpoint-verification/docs/collect-config-attributes): file, folder, and binary attributes; registry entries; and properties in a plist. */
  additionalSignals?: Record<string, unknown>;
}

export const EndpointVerificationSpecificAttributes: Schema.Schema<EndpointVerificationSpecificAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateAttributes: Schema.optional(Schema.Array(CertificateAttributes)),
    browserAttributes: Schema.optional(Schema.Array(BrowserAttributes)),
    additionalSignals: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "EndpointVerificationSpecificAttributes" });

export interface AndroidAttributes {
  /** Whether applications from unknown sources can be installed on device. */
  enabledUnknownSources?: boolean;
  /** Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. */
  ownerProfileAccount?: boolean;
  /** Ownership privileges on device. */
  ownershipPrivilege?:
    | "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
    | "DEVICE_ADMINISTRATOR"
    | "PROFILE_OWNER"
    | "DEVICE_OWNER"
    | (string & {});
  /** Whether Android verified boot status is GREEN. */
  verifiedBoot?: boolean;
  /** Whether the device passes Android CTS compliance. */
  ctsProfileMatch?: boolean;
  /** Whether Google Play Protect Verify Apps is enabled. */
  verifyAppsEnabled?: boolean;
  /** Whether any potentially harmful apps were detected on the device. */
  hasPotentiallyHarmfulApps?: boolean;
  /** Whether the device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy. */
  supportsWorkProfile?: boolean;
}

export const AndroidAttributes: Schema.Schema<AndroidAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabledUnknownSources: Schema.optional(Schema.Boolean),
    ownerProfileAccount: Schema.optional(Schema.Boolean),
    ownershipPrivilege: Schema.optional(Schema.String),
    verifiedBoot: Schema.optional(Schema.Boolean),
    ctsProfileMatch: Schema.optional(Schema.Boolean),
    verifyAppsEnabled: Schema.optional(Schema.Boolean),
    hasPotentiallyHarmfulApps: Schema.optional(Schema.Boolean),
    supportsWorkProfile: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AndroidAttributes" });

export interface WindowsSpecificDeviceAttributes {
  /** Output only. The domain of the machine that the user is logged into. This is different from the windows_user_domain as the user could be logged into a domain different from the machine domain. */
  windowsMachineDomain?: string;
  /** Output only. The domain of the user account that is logged into the machine. */
  windowsUserDomain?: string;
  /** Output only. Secure boot mode of the device. */
  secureBootMode?:
    | "SECURE_BOOT_MODE_UNSPECIFIED"
    | "SECURE_BOOT_MODE_UNKNOWN"
    | "SECURE_BOOT_MODE_ENABLED"
    | "SECURE_BOOT_MODE_DISABLED"
    | (string & {});
  /** Output only. The hotfixes installed on the device. */
  hotfixes?: ReadonlyArray<string>;
}

export const WindowsSpecificDeviceAttributes: Schema.Schema<WindowsSpecificDeviceAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    windowsMachineDomain: Schema.optional(Schema.String),
    windowsUserDomain: Schema.optional(Schema.String),
    secureBootMode: Schema.optional(Schema.String),
    hotfixes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WindowsSpecificDeviceAttributes" });

export interface AntivirusInfo {
  /** Output only. The display name of the anti-virus software. */
  displayName?: string;
  /** Output only. The state of the anti-virus. */
  productState?:
    | "PRODUCT_STATE_UNSPECIFIED"
    | "PRODUCT_STATE_ON"
    | "PRODUCT_STATE_OFF"
    | "PRODUCT_STATE_SNOOZED"
    | "PRODUCT_STATE_EXPIRED"
    | (string & {});
  /** Output only. The GUID of the anti-virus product. */
  productGuid?: string;
}

export const AntivirusInfo: Schema.Schema<AntivirusInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    productState: Schema.optional(Schema.String),
    productGuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "AntivirusInfo" });

export interface Device {
  /** WiFi MAC addresses of device. */
  wifiMacAddresses?: ReadonlyArray<string>;
  /** Output only. Whether the device is owned by the company or an individual */
  ownerType?:
    | "DEVICE_OWNERSHIP_UNSPECIFIED"
    | "COMPANY"
    | "BYOD"
    | (string & {});
  /** Output only. MEID number of device if CDMA device; empty otherwise. */
  meid?: string;
  /** Output only. Type of device. */
  deviceType?:
    | "DEVICE_TYPE_UNSPECIFIED"
    | "ANDROID"
    | "IOS"
    | "GOOGLE_SYNC"
    | "WINDOWS"
    | "MAC_OS"
    | "LINUX"
    | "CHROME_OS"
    | (string & {});
  /** Output only. Attributes specific to [Endpoint Verification](https://cloud.google.com/endpoint-verification/docs/overview) devices. */
  endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;
  /** Output only. Whether developer options is enabled on device. */
  enabledDeveloperOptions?: boolean;
  /** Output only. OS version of the device. Example: Android 8.1.0. */
  osVersion?: string;
  /** Output only. Device encryption state. */
  encryptionState?:
    | "ENCRYPTION_STATE_UNSPECIFIED"
    | "UNSUPPORTED_BY_DEVICE"
    | "ENCRYPTED"
    | "NOT_ENCRYPTED"
    | (string & {});
  /** List of the clients the device is reporting to. */
  clientTypes?: ReadonlyArray<
    | "CLIENT_TYPE_UNSPECIFIED"
    | "DRIVE_FS"
    | "FUNDAMENTAL"
    | "ENDPOINT_VERIFICATION"
    | "WINDOWS_ADVANCED"
    | "GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS"
    | (string & {})
  >;
  /** Output only. Model name of device. Example: Pixel 3. */
  model?: string;
  /** Output only. OS release version. Example: 6.0. */
  releaseVersion?: string;
  /** Browser profiles on the device. This is a copy of the BrowserAttributes message defined in EndpointVerificationSpecificAttributes. We are replicating it here since EndpointVerification isn't the only client reporting browser profiles. */
  browserProfiles?: ReadonlyArray<BrowserAttributes>;
  /** Serial Number of device. Example: HT82V1A01076. */
  serialNumber?: string;
  /** Output only. Baseband version of the device. */
  basebandVersion?: string;
  /** Most recent time when device synced with this service. */
  lastSyncTime?: string;
  /** Output only. IMEI number of device if GSM device; empty otherwise. */
  imei?: string;
  /** Host name of the device. */
  hostname?: string;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device. */
  name?: string;
  /** Output only. Attributes specific to Android devices. */
  androidSpecificAttributes?: AndroidAttributes;
  /** Output only. Mobile or network operator of device, if available. */
  networkOperator?: string;
  /** Output only. Represents whether the Device is compromised. */
  compromisedState?:
    | "COMPROMISED_STATE_UNSPECIFIED"
    | "COMPROMISED"
    | "UNCOMPROMISED"
    | (string & {});
  /** Output only. Management state of the device */
  managementState?:
    | "MANAGEMENT_STATE_UNSPECIFIED"
    | "APPROVED"
    | "BLOCKED"
    | "PENDING"
    | "UNPROVISIONED"
    | "WIPING"
    | "WIPED"
    | (string & {});
  /** Output only. Device brand. Example: Samsung. */
  brand?: string;
  /** Output only. OS security patch update time on device. */
  securityPatchTime?: string;
  /** Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. */
  createTime?: string;
  /** Asset tag of the device. */
  assetTag?: string;
  /** Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com". */
  otherAccounts?: ReadonlyArray<string>;
  /** Output only. Device manufacturer. Example: Motorola. */
  manufacturer?: string;
  /** Output only. Kernel version of the device. */
  kernelVersion?: string;
  /** Output only. Build number of the device. */
  buildNumber?: string;
  /** Unique identifier for the device. */
  deviceId?: string;
  /** Output only. Device bootloader version. Example: 0.6.7. */
  bootloaderVersion?: string;
  /** Output only. Attributes specific to Windows devices. */
  windowsSpecificDeviceAttributes?: WindowsSpecificDeviceAttributes;
  /** Output only. Whether USB debugging is enabled on device. */
  enabledUsbDebugging?: boolean;
  /** Output only. Anti-virus information for the device. */
  antivirusInfo?: ReadonlyArray<AntivirusInfo>;
  /** Output only. OS firewall status of the device. */
  osFirewallStatus?:
    | "OS_FIREWALL_STATUS_UNSPECIFIED"
    | "OS_FIREWALL_STATUS_UNKNOWN"
    | "OS_FIREWALL_STATUS_ENABLED"
    | "OS_FIREWALL_STATUS_DISABLED"
    | (string & {});
  /** Output only. Unified device id of the device. */
  unifiedDeviceId?: string;
}

export const Device: Schema.Schema<Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wifiMacAddresses: Schema.optional(Schema.Array(Schema.String)),
    ownerType: Schema.optional(Schema.String),
    meid: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    endpointVerificationSpecificAttributes: Schema.optional(
      EndpointVerificationSpecificAttributes,
    ),
    enabledDeveloperOptions: Schema.optional(Schema.Boolean),
    osVersion: Schema.optional(Schema.String),
    encryptionState: Schema.optional(Schema.String),
    clientTypes: Schema.optional(Schema.Array(Schema.String)),
    model: Schema.optional(Schema.String),
    releaseVersion: Schema.optional(Schema.String),
    browserProfiles: Schema.optional(Schema.Array(BrowserAttributes)),
    serialNumber: Schema.optional(Schema.String),
    basebandVersion: Schema.optional(Schema.String),
    lastSyncTime: Schema.optional(Schema.String),
    imei: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    androidSpecificAttributes: Schema.optional(AndroidAttributes),
    networkOperator: Schema.optional(Schema.String),
    compromisedState: Schema.optional(Schema.String),
    managementState: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    securityPatchTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    assetTag: Schema.optional(Schema.String),
    otherAccounts: Schema.optional(Schema.Array(Schema.String)),
    manufacturer: Schema.optional(Schema.String),
    kernelVersion: Schema.optional(Schema.String),
    buildNumber: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    bootloaderVersion: Schema.optional(Schema.String),
    windowsSpecificDeviceAttributes: Schema.optional(
      WindowsSpecificDeviceAttributes,
    ),
    enabledUsbDebugging: Schema.optional(Schema.Boolean),
    antivirusInfo: Schema.optional(Schema.Array(AntivirusInfo)),
    osFirewallStatus: Schema.optional(Schema.String),
    unifiedDeviceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Device" });

export interface CreateDeviceRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
  /** Required. The device to be created. The name field within this device is ignored in the create method. A new name is created by the method, and returned within the response. Only the fields `device_type`, `serial_number` and `asset_tag` (if present) are used to create the device. All other fields are ignored. The `device_type` and `serial_number` fields are required. */
  device?: Device;
}

export const CreateDeviceRequest: Schema.Schema<CreateDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    device: Schema.optional(Device),
  }).annotate({ identifier: "CreateDeviceRequest" });

export interface DeviceUser {
  /** Output only. Last time when user synced with policies. */
  lastSyncTime?: string;
  /** Output only. Default locale used on device, in IETF BCP-47 format. */
  languageCode?: string;
  /** Password state of the DeviceUser object */
  passwordState?:
    | "PASSWORD_STATE_UNSPECIFIED"
    | "PASSWORD_SET"
    | "PASSWORD_NOT_SET"
    | (string & {});
  /** Output only. User agent on the device for this specific user */
  userAgent?: string;
  /** Output only. Management state of the user on the device. */
  managementState?:
    | "MANAGEMENT_STATE_UNSPECIFIED"
    | "WIPING"
    | "WIPED"
    | "APPROVED"
    | "BLOCKED"
    | "PENDING_APPROVAL"
    | "UNENROLLED"
    | (string & {});
  /** Compromised State of the DeviceUser object */
  compromisedState?:
    | "COMPROMISED_STATE_UNSPECIFIED"
    | "COMPROMISED"
    | "NOT_COMPROMISED"
    | (string & {});
  /** Output only. Most recent time when user registered with this service. */
  firstSyncTime?: string;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where `device_user_id` uniquely identifies a user's use of a device. */
  name?: string;
  /** Email address of the user registered on the device. */
  userEmail?: string;
  /** When the user first signed in to the device */
  createTime?: string;
}

export const DeviceUser: Schema.Schema<DeviceUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastSyncTime: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    passwordState: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    managementState: Schema.optional(Schema.String),
    compromisedState: Schema.optional(Schema.String),
    firstSyncTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeviceUser" });

export interface CancelWipeDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: DeviceUser;
}

export const CancelWipeDeviceUserResponse: Schema.Schema<CancelWipeDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(DeviceUser),
  }).annotate({ identifier: "CancelWipeDeviceUserResponse" });

export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata {}

export const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata",
  });

export interface DeleteIdpCredentialOperationMetadata {}

export const DeleteIdpCredentialOperationMetadata: Schema.Schema<DeleteIdpCredentialOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteIdpCredentialOperationMetadata",
  });

export interface TransitiveMembershipRole {
  /** TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`. */
  role?: string;
}

export const TransitiveMembershipRole: Schema.Schema<TransitiveMembershipRole> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransitiveMembershipRole" });

export interface EntityKey {
  /** The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
  id?: string;
  /** The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
  namespace?: string;
}

export const EntityKey: Schema.Schema<EntityKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "EntityKey" });

export interface MemberRelation {
  /** The membership role details (i.e name of role and expiry time). */
  roles?: ReadonlyArray<TransitiveMembershipRole>;
  /** Resource name for this member. */
  member?: string;
  /** Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace. */
  preferredMemberKey?: ReadonlyArray<EntityKey>;
  /** The relation between the group and the transitive membership. */
  relationType?:
    | "RELATION_TYPE_UNSPECIFIED"
    | "DIRECT"
    | "INDIRECT"
    | "DIRECT_AND_INDIRECT"
    | (string & {});
}

export const MemberRelation: Schema.Schema<MemberRelation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roles: Schema.optional(Schema.Array(TransitiveMembershipRole)),
    member: Schema.optional(Schema.String),
    preferredMemberKey: Schema.optional(Schema.Array(EntityKey)),
    relationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MemberRelation" });

export interface ListOrgMembershipsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
  /** The non-vacuous membership in an orgUnit. */
  orgMemberships?: ReadonlyArray<OrgMembership>;
}

export const ListOrgMembershipsResponse: Schema.Schema<ListOrgMembershipsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    orgMemberships: Schema.optional(Schema.Array(OrgMembership)),
  }).annotate({ identifier: "ListOrgMembershipsResponse" });

export interface WipeDeviceUserRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const WipeDeviceUserRequest: Schema.Schema<WipeDeviceUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
  }).annotate({ identifier: "WipeDeviceUserRequest" });

export interface ExpiryDetail {
  /** The time at which the `MembershipRole` will expire. */
  expireTime?: string;
}

export const ExpiryDetail: Schema.Schema<ExpiryDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExpiryDetail" });

export interface MembershipRoleRestrictionEvaluation {
  /** Output only. The current state of the restriction */
  state?:
    | "STATE_UNSPECIFIED"
    | "COMPLIANT"
    | "FORWARD_COMPLIANT"
    | "NON_COMPLIANT"
    | "EVALUATING"
    | (string & {});
}

export const MembershipRoleRestrictionEvaluation: Schema.Schema<MembershipRoleRestrictionEvaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipRoleRestrictionEvaluation" });

export interface RestrictionEvaluations {
  /** Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation. */
  memberRestrictionEvaluation?: MembershipRoleRestrictionEvaluation;
}

export const RestrictionEvaluations: Schema.Schema<RestrictionEvaluations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberRestrictionEvaluation: Schema.optional(
      MembershipRoleRestrictionEvaluation,
    ),
  }).annotate({ identifier: "RestrictionEvaluations" });

export interface MembershipRole {
  /** The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`. */
  name?: string;
  /** The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value. */
  expiryDetail?: ExpiryDetail;
  /** Evaluations of restrictions applied to parent group on this membership. */
  restrictionEvaluations?: RestrictionEvaluations;
}

export const MembershipRole: Schema.Schema<MembershipRole> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    expiryDetail: Schema.optional(ExpiryDetail),
    restrictionEvaluations: Schema.optional(RestrictionEvaluations),
  }).annotate({ identifier: "MembershipRole" });

export interface UpdateMembershipRolesParams {
  /** The `MembershipRole`s to be updated. Only `MEMBER` `MembershipRoles` can currently be updated. May only contain a `MembershipRole` with `name` `MEMBER`. */
  membershipRole?: MembershipRole;
  /** The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`. */
  fieldMask?: string;
}

export const UpdateMembershipRolesParams: Schema.Schema<UpdateMembershipRolesParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membershipRole: Schema.optional(MembershipRole),
    fieldMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateMembershipRolesParams" });

export interface ModifyMembershipRolesRequest {
  /** The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set. */
  addRoles?: ReadonlyArray<MembershipRole>;
  /** The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set. */
  updateRolesParams?: ReadonlyArray<UpdateMembershipRolesParams>;
  /** The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set. */
  removeRoles?: ReadonlyArray<string>;
}

export const ModifyMembershipRolesRequest: Schema.Schema<ModifyMembershipRolesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    addRoles: Schema.optional(Schema.Array(MembershipRole)),
    updateRolesParams: Schema.optional(
      Schema.Array(UpdateMembershipRolesParams),
    ),
    removeRoles: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ModifyMembershipRolesRequest" });

export interface OidcRpConfig {
  /** Input only. OAuth2 client secret for OIDC. */
  clientSecret?: string;
  /** OAuth2 client ID for OIDC. */
  clientId?: string;
  /** Output only. The URL(s) that this client may use in authentication requests. */
  redirectUris?: ReadonlyArray<string>;
}

export const OidcRpConfig: Schema.Schema<OidcRpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientSecret: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    redirectUris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "OidcRpConfig" });

export interface CustomAttributeValue {
  /** Represents a boolean value. */
  boolValue?: boolean;
  /** Represents a double value. */
  numberValue?: number;
  /** Represents a string value. */
  stringValue?: string;
}

export const CustomAttributeValue: Schema.Schema<CustomAttributeValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boolValue: Schema.optional(Schema.Boolean),
    numberValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomAttributeValue" });

export interface ClientState {
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. */
  name?: string;
  /** The caller can specify asset tags for this resource */
  assetTags?: ReadonlyArray<string>;
  /** Output only. The time the client state data was created. */
  createTime?: string;
  /** The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. */
  keyValuePairs?: Record<string, CustomAttributeValue>;
  /** The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest */
  etag?: string;
  /** The management state of the resource as specified by the API client. */
  managed?:
    | "MANAGED_STATE_UNSPECIFIED"
    | "MANAGED"
    | "UNMANAGED"
    | (string & {});
  /** The compliance state of the resource as specified by the API client. */
  complianceState?:
    | "COMPLIANCE_STATE_UNSPECIFIED"
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | (string & {});
  /** Output only. The owner of the ClientState */
  ownerType?:
    | "OWNER_TYPE_UNSPECIFIED"
    | "OWNER_TYPE_CUSTOMER"
    | "OWNER_TYPE_PARTNER"
    | (string & {});
  /** This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. */
  customId?: string;
  /** A descriptive cause of the health score. */
  scoreReason?: string;
  /** Output only. The time the client state data was last updated. */
  lastUpdateTime?: string;
  /** The Health score of the resource */
  healthScore?:
    | "HEALTH_SCORE_UNSPECIFIED"
    | "VERY_POOR"
    | "POOR"
    | "NEUTRAL"
    | "GOOD"
    | "VERY_GOOD"
    | (string & {});
}

export const ClientState: Schema.Schema<ClientState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    assetTags: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    keyValuePairs: Schema.optional(
      Schema.Record(Schema.String, CustomAttributeValue),
    ),
    etag: Schema.optional(Schema.String),
    managed: Schema.optional(Schema.String),
    complianceState: Schema.optional(Schema.String),
    ownerType: Schema.optional(Schema.String),
    customId: Schema.optional(Schema.String),
    scoreReason: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    healthScore: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClientState" });

export interface ListClientStatesResponse {
  /** Client states meeting the list restrictions. */
  clientStates?: ReadonlyArray<ClientState>;
  /** Token to retrieve the next page of results. Empty if there are no more results. */
  nextPageToken?: string;
}

export const ListClientStatesResponse: Schema.Schema<ListClientStatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientStates: Schema.optional(Schema.Array(ClientState)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListClientStatesResponse" });

export interface CancelWipeDeviceUserRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const CancelWipeDeviceUserRequest: Schema.Schema<CancelWipeDeviceUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelWipeDeviceUserRequest" });

export interface SamlSpConfig {
  /** Output only. The SAML **Entity ID** for this service provider. */
  entityId?: string;
  /** Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the `HTTP-POST` binding. */
  assertionConsumerServiceUri?: string;
}

export const SamlSpConfig: Schema.Schema<SamlSpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    assertionConsumerServiceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SamlSpConfig" });

export interface SamlIdpConfig {
  /** Required. The SAML **Entity ID** of the identity provider. */
  entityId?: string;
  /** The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`. */
  changePasswordUri?: string;
  /** Required. The `SingleSignOnService` endpoint location (sign-in page URL) of the identity provider. This is the URL where the `AuthnRequest` will be sent. Must use `HTTPS`. Assumed to accept the `HTTP-Redirect` binding. */
  singleSignOnServiceUri?: string;
  /** The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML `LogoutRequest` i.e. SAML single logout is not supported. Must use `HTTPS`. */
  logoutRedirectUri?: string;
}

export const SamlIdpConfig: Schema.Schema<SamlIdpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityId: Schema.optional(Schema.String),
    changePasswordUri: Schema.optional(Schema.String),
    singleSignOnServiceUri: Schema.optional(Schema.String),
    logoutRedirectUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SamlIdpConfig" });

export interface InboundSamlSsoProfile {
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile. */
  name?: string;
  /** SAML service provider configuration for this SAML SSO profile. These are the service provider details provided by Google that should be configured on the corresponding identity provider. */
  spConfig?: SamlSpConfig;
  /** Immutable. The customer. For example: `customers/C0123abc`. */
  customer?: string;
  /** Human-readable name of the SAML SSO profile. */
  displayName?: string;
  /** SAML identity provider configuration. */
  idpConfig?: SamlIdpConfig;
}

export const InboundSamlSsoProfile: Schema.Schema<InboundSamlSsoProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    spConfig: Schema.optional(SamlSpConfig),
    customer: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    idpConfig: Schema.optional(SamlIdpConfig),
  }).annotate({ identifier: "InboundSamlSsoProfile" });

export interface ListInboundSamlSsoProfilesResponse {
  /** List of InboundSamlSsoProfiles. */
  inboundSamlSsoProfiles?: ReadonlyArray<InboundSamlSsoProfile>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListInboundSamlSsoProfilesResponse: Schema.Schema<ListInboundSamlSsoProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSamlSsoProfiles: Schema.optional(
      Schema.Array(InboundSamlSsoProfile),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInboundSamlSsoProfilesResponse" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface GoogleAppsCloudidentityDevicesV1AndroidAttributes {
  /** Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy. */
  supportsWorkProfile?: boolean;
  /** Whether any potentially harmful apps were detected on the device. */
  hasPotentiallyHarmfulApps?: boolean;
  /** Whether Google Play Protect Verify Apps is enabled. */
  verifyAppsEnabled?: boolean;
  /** Whether Android verified boot status is GREEN. */
  verifiedBoot?: boolean;
  /** Whether the device passes Android CTS compliance. */
  ctsProfileMatch?: boolean;
  /** Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. */
  ownerProfileAccount?: boolean;
  /** Ownership privileges on device. */
  ownershipPrivilege?:
    | "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
    | "DEVICE_ADMINISTRATOR"
    | "PROFILE_OWNER"
    | "DEVICE_OWNER"
    | (string & {});
  /** Whether applications from unknown sources can be installed on device. */
  enabledUnknownSources?: boolean;
}

export const GoogleAppsCloudidentityDevicesV1AndroidAttributes: Schema.Schema<GoogleAppsCloudidentityDevicesV1AndroidAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportsWorkProfile: Schema.optional(Schema.Boolean),
    hasPotentiallyHarmfulApps: Schema.optional(Schema.Boolean),
    verifyAppsEnabled: Schema.optional(Schema.Boolean),
    verifiedBoot: Schema.optional(Schema.Boolean),
    ctsProfileMatch: Schema.optional(Schema.Boolean),
    ownerProfileAccount: Schema.optional(Schema.Boolean),
    ownershipPrivilege: Schema.optional(Schema.String),
    enabledUnknownSources: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1AndroidAttributes",
  });

export interface GoogleAppsCloudidentityDevicesV1DeviceUser {
  /** When the user first signed in to the device */
  createTime?: string;
  /** Email address of the user registered on the device. */
  userEmail?: string;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device}/deviceUsers/{device_user}`, where `device_user` uniquely identifies a user's use of a device. */
  name?: string;
  /** Output only. Most recent time when user registered with this service. */
  firstSyncTime?: string;
  /** Compromised State of the DeviceUser object */
  compromisedState?:
    | "COMPROMISED_STATE_UNSPECIFIED"
    | "COMPROMISED"
    | "NOT_COMPROMISED"
    | (string & {});
  /** Output only. Management state of the user on the device. */
  managementState?:
    | "MANAGEMENT_STATE_UNSPECIFIED"
    | "WIPING"
    | "WIPED"
    | "APPROVED"
    | "BLOCKED"
    | "PENDING_APPROVAL"
    | "UNENROLLED"
    | (string & {});
  /** Output only. User agent on the device for this specific user */
  userAgent?: string;
  /** Password state of the DeviceUser object */
  passwordState?:
    | "PASSWORD_STATE_UNSPECIFIED"
    | "PASSWORD_SET"
    | "PASSWORD_NOT_SET"
    | (string & {});
  /** Output only. Last time when user synced with policies. */
  lastSyncTime?: string;
  /** Output only. Default locale used on device, in IETF BCP-47 format. */
  languageCode?: string;
}

export const GoogleAppsCloudidentityDevicesV1DeviceUser: Schema.Schema<GoogleAppsCloudidentityDevicesV1DeviceUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    firstSyncTime: Schema.optional(Schema.String),
    compromisedState: Schema.optional(Schema.String),
    managementState: Schema.optional(Schema.String),
    userAgent: Schema.optional(Schema.String),
    passwordState: Schema.optional(Schema.String),
    lastSyncTime: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCloudidentityDevicesV1DeviceUser" });

export interface GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
}

export const GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse: Schema.Schema<GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(GoogleAppsCloudidentityDevicesV1DeviceUser),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse",
  });

export interface GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
}

export const GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse: Schema.Schema<GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(GoogleAppsCloudidentityDevicesV1DeviceUser),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse",
  });

export interface GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata {}

export const GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata",
  });

export interface GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata {}

export const GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata",
  });

export interface CheckTransitiveMembershipResponse {
  /** Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths. */
  hasMembership?: boolean;
}

export const CheckTransitiveMembershipResponse: Schema.Schema<CheckTransitiveMembershipResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasMembership: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CheckTransitiveMembershipResponse" });

export interface ListDeviceUsersResponse {
  /** Devices meeting the list restrictions. */
  deviceUsers?: ReadonlyArray<DeviceUser>;
  /** Token to retrieve the next page of results. Empty if there are no more results. */
  nextPageToken?: string;
}

export const ListDeviceUsersResponse: Schema.Schema<ListDeviceUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUsers: Schema.optional(Schema.Array(DeviceUser)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeviceUsersResponse" });

export interface LookupSelfDeviceUsersResponse {
  /** The customer Id that may be passed back to other Devices API methods such as List, Get, etc. */
  customer?: string;
  /** Token to retrieve the next page of results. Empty if there are no more results. */
  nextPageToken?: string;
  /** [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID */
  names?: ReadonlyArray<string>;
}

export const LookupSelfDeviceUsersResponse: Schema.Schema<LookupSelfDeviceUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    nextPageToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LookupSelfDeviceUsersResponse" });

export interface Membership {
  /** Output only. The time when the `Membership` was last updated. */
  updateTime?: string;
  /** The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`. */
  roles?: ReadonlyArray<MembershipRole>;
  /** Output only. Delivery setting associated with the membership. */
  deliverySetting?:
    | "DELIVERY_SETTING_UNSPECIFIED"
    | "ALL_MAIL"
    | "DIGEST"
    | "DAILY"
    | "NONE"
    | "DISABLED"
    | (string & {});
  /** Required. Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned. */
  preferredMemberKey?: EntityKey;
  /** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`. */
  name?: string;
  /** Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned. */
  memberKey?: EntityKey;
  /** Output only. The time when the `Membership` was created. */
  createTime?: string;
  /** Output only. The type of the membership. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "USER"
    | "SERVICE_ACCOUNT"
    | "GROUP"
    | "SHARED_DRIVE"
    | "CBCM_BROWSER"
    | "OTHER"
    | (string & {});
}

export const Membership: Schema.Schema<Membership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    roles: Schema.optional(Schema.Array(MembershipRole)),
    deliverySetting: Schema.optional(Schema.String),
    preferredMemberKey: Schema.optional(EntityKey),
    name: Schema.optional(Schema.String),
    memberKey: Schema.optional(EntityKey),
    createTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Membership" });

export interface ListMembershipsResponse {
  /** The `Membership`s under the specified `parent`. */
  memberships?: ReadonlyArray<Membership>;
  /** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
  nextPageToken?: string;
}

export const ListMembershipsResponse: Schema.Schema<ListMembershipsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(Membership)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMembershipsResponse" });

export interface UpdateInboundSsoAssignmentOperationMetadata {}

export const UpdateInboundSsoAssignmentOperationMetadata: Schema.Schema<UpdateInboundSsoAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "UpdateInboundSsoAssignmentOperationMetadata",
  });

export interface OidcSsoInfo {
  /** Required. Name of the `InboundOidcSsoProfile` to use. Must be of the form `inboundOidcSsoProfiles/{inbound_oidc_sso_profile}`. */
  inboundOidcSsoProfile?: string;
}

export const OidcSsoInfo: Schema.Schema<OidcSsoInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundOidcSsoProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "OidcSsoInfo" });

export interface RsaPublicKeyInfo {
  /** Key size in bits (size of the modulus). */
  keySize?: number;
}

export const RsaPublicKeyInfo: Schema.Schema<RsaPublicKeyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keySize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RsaPublicKeyInfo" });

export interface DsaPublicKeyInfo {
  /** Key size in bits (size of parameter P). */
  keySize?: number;
}

export const DsaPublicKeyInfo: Schema.Schema<DsaPublicKeyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keySize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DsaPublicKeyInfo" });

export interface IdpCredential {
  /** Output only. Information of a RSA public key. */
  rsaKeyInfo?: RsaPublicKeyInfo;
  /** Output only. Information of a DSA public key. */
  dsaKeyInfo?: DsaPublicKeyInfo;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential. */
  name?: string;
  /** Output only. Time when the `IdpCredential` was last updated. */
  updateTime?: string;
}

export const IdpCredential: Schema.Schema<IdpCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rsaKeyInfo: Schema.optional(RsaPublicKeyInfo),
    dsaKeyInfo: Schema.optional(DsaPublicKeyInfo),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdpCredential" });

export interface RestrictionEvaluation {
  /** Output only. The current state of the restriction */
  state?:
    | "STATE_UNSPECIFIED"
    | "EVALUATING"
    | "COMPLIANT"
    | "FORWARD_COMPLIANT"
    | "NON_COMPLIANT"
    | (string & {});
}

export const RestrictionEvaluation: Schema.Schema<RestrictionEvaluation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestrictionEvaluation" });

export interface SendUserInvitationRequest {}

export const SendUserInvitationRequest: Schema.Schema<SendUserInvitationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SendUserInvitationRequest",
  });

export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata {}

export const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata",
  });

export interface UserInvitation {
  /** Shall be of the form `customers/{customer}/userinvitations/{user_email_address}`. */
  name?: string;
  /** State of the `UserInvitation`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_YET_SENT"
    | "INVITED"
    | "ACCEPTED"
    | "DECLINED"
    | (string & {});
  /** Time when the `UserInvitation` was last updated. */
  updateTime?: string;
  /** Number of invitation emails sent to the user. */
  mailsSentCount?: string;
}

export const UserInvitation: Schema.Schema<UserInvitation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    mailsSentCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserInvitation" });

export interface GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata {}

export const GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata",
  });

export interface GoogleAppsCloudidentityDevicesV1CustomAttributeValue {
  /** Represents a double value. */
  numberValue?: number;
  /** Represents a string value. */
  stringValue?: string;
  /** Represents a boolean value. */
  boolValue?: boolean;
}

export const GoogleAppsCloudidentityDevicesV1CustomAttributeValue: Schema.Schema<GoogleAppsCloudidentityDevicesV1CustomAttributeValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CustomAttributeValue",
  });

export interface GoogleAppsCloudidentityDevicesV1CertificateTemplate {
  /** The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047". */
  id?: string;
  /** The Major version of the template. Example: 100. */
  majorVersion?: number;
  /** The minor version of the template. Example: 12. */
  minorVersion?: number;
}

export const GoogleAppsCloudidentityDevicesV1CertificateTemplate: Schema.Schema<GoogleAppsCloudidentityDevicesV1CertificateTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    majorVersion: Schema.optional(Schema.Number),
    minorVersion: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CertificateTemplate",
  });

export interface GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata {}

export const GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata",
  });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface DynamicGroupQuery {
  resourceType?: "RESOURCE_TYPE_UNSPECIFIED" | "USER" | (string & {});
  /** Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')` */
  query?: string;
}

export const DynamicGroupQuery: Schema.Schema<DynamicGroupQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicGroupQuery" });

export interface DynamicGroupStatus {
  /** Status of the dynamic group. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "UP_TO_DATE"
    | "UPDATING_MEMBERSHIPS"
    | "INVALID_QUERY"
    | (string & {});
  /** The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created. */
  statusTime?: string;
}

export const DynamicGroupStatus: Schema.Schema<DynamicGroupStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    statusTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicGroupStatus" });

export interface DynamicGroupMetadata {
  /** Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 500 dynamic groups. */
  queries?: ReadonlyArray<DynamicGroupQuery>;
  /** Output only. Status of the dynamic group. */
  status?: DynamicGroupStatus;
}

export const DynamicGroupMetadata: Schema.Schema<DynamicGroupMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queries: Schema.optional(Schema.Array(DynamicGroupQuery)),
    status: Schema.optional(DynamicGroupStatus),
  }).annotate({ identifier: "DynamicGroupMetadata" });

export interface WipeDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: DeviceUser;
}

export const WipeDeviceUserResponse: Schema.Schema<WipeDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(DeviceUser),
  }).annotate({ identifier: "WipeDeviceUserResponse" });

export interface OidcIdpConfig {
  /** Required. The Issuer identifier for the IdP. Must be a URL. The discovery URL will be derived from this as described in Section 4 of [the OIDC specification](https://openid.net/specs/openid-connect-discovery-1_0.html). */
  issuerUri?: string;
  /** The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`. */
  changePasswordUri?: string;
}

export const OidcIdpConfig: Schema.Schema<OidcIdpConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuerUri: Schema.optional(Schema.String),
    changePasswordUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "OidcIdpConfig" });

export interface InboundOidcSsoProfile {
  /** Immutable. The customer. For example: `customers/C0123abc`. */
  customer?: string;
  /** Human-readable name of the OIDC SSO profile. */
  displayName?: string;
  /** OIDC identity provider configuration. */
  idpConfig?: OidcIdpConfig;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the OIDC SSO profile. */
  name?: string;
  /** OIDC relying party (RP) configuration for this OIDC SSO profile. These are the RP details provided by Google that should be configured on the corresponding identity provider. */
  rpConfig?: OidcRpConfig;
}

export const InboundOidcSsoProfile: Schema.Schema<InboundOidcSsoProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    idpConfig: Schema.optional(OidcIdpConfig),
    name: Schema.optional(Schema.String),
    rpConfig: Schema.optional(OidcRpConfig),
  }).annotate({ identifier: "InboundOidcSsoProfile" });

export interface ListInboundOidcSsoProfilesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of InboundOidcSsoProfiles. */
  inboundOidcSsoProfiles?: ReadonlyArray<InboundOidcSsoProfile>;
}

export const ListInboundOidcSsoProfilesResponse: Schema.Schema<ListInboundOidcSsoProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    inboundOidcSsoProfiles: Schema.optional(
      Schema.Array(InboundOidcSsoProfile),
    ),
  }).annotate({ identifier: "ListInboundOidcSsoProfilesResponse" });

export interface GroupRelation {
  /** Membership roles of the member for the group. */
  roles?: ReadonlyArray<TransitiveMembershipRole>;
  /** Display name for this group. */
  displayName?: string;
  /** Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace. */
  groupKey?: EntityKey;
  /** Resource name for this group. */
  group?: string;
  /** The relation between the member and the transitive group. */
  relationType?:
    | "RELATION_TYPE_UNSPECIFIED"
    | "DIRECT"
    | "INDIRECT"
    | "DIRECT_AND_INDIRECT"
    | (string & {});
  /** Labels for Group resource. */
  labels?: Record<string, string>;
}

export const GroupRelation: Schema.Schema<GroupRelation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    roles: Schema.optional(Schema.Array(TransitiveMembershipRole)),
    displayName: Schema.optional(Schema.String),
    groupKey: Schema.optional(EntityKey),
    group: Schema.optional(Schema.String),
    relationType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GroupRelation" });

export interface SearchTransitiveGroupsResponse {
  /** List of transitive groups satisfying the query. */
  memberships?: ReadonlyArray<GroupRelation>;
  /** Token to retrieve the next page of results, or empty if there are no more results available for listing. */
  nextPageToken?: string;
}

export const SearchTransitiveGroupsResponse: Schema.Schema<SearchTransitiveGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(GroupRelation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchTransitiveGroupsResponse" });

export interface DeleteInboundOidcSsoProfileOperationMetadata {}

export const DeleteInboundOidcSsoProfileOperationMetadata: Schema.Schema<DeleteInboundOidcSsoProfileOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteInboundOidcSsoProfileOperationMetadata",
  });

export interface CancelWipeDeviceRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const CancelWipeDeviceRequest: Schema.Schema<CancelWipeDeviceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelWipeDeviceRequest" });

export interface GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata {}

export const GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata",
  });

export interface DeleteInboundSsoAssignmentOperationMetadata {}

export const DeleteInboundSsoAssignmentOperationMetadata: Schema.Schema<DeleteInboundSsoAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteInboundSsoAssignmentOperationMetadata",
  });

export interface AddIdpCredentialRequest {
  /** PEM encoded x509 certificate containing the public key for verifying IdP signatures. */
  pemData?: string;
}

export const AddIdpCredentialRequest: Schema.Schema<AddIdpCredentialRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pemData: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddIdpCredentialRequest" });

export interface GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata {}

export const GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata",
  });

export interface CancelWipeDeviceResponse {
  /** Resultant Device object for the action. Note that asset tags will not be returned in the device object. */
  device?: Device;
}

export const CancelWipeDeviceResponse: Schema.Schema<CancelWipeDeviceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(Device),
  }).annotate({ identifier: "CancelWipeDeviceResponse" });

export interface MembershipAdjacencyList {
  /** Resource name of the group that the members belong to. */
  group?: string;
  /** Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g `name`, `preferred_member_key` and `role`), but may not be a comprehensive list of all fields. */
  edges?: ReadonlyArray<Membership>;
}

export const MembershipAdjacencyList: Schema.Schema<MembershipAdjacencyList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    edges: Schema.optional(Schema.Array(Membership)),
  }).annotate({ identifier: "MembershipAdjacencyList" });

export interface CreateInboundSamlSsoProfileOperationMetadata {
  /** State of this Operation Will be "awaiting-multi-party-approval" when the operation is deferred due to the target customer having enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). */
  state?: string;
}

export const CreateInboundSamlSsoProfileOperationMetadata: Schema.Schema<CreateInboundSamlSsoProfileOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateInboundSamlSsoProfileOperationMetadata" });

export interface Setting {
  /** Required. Immutable. The type of the Setting. . */
  type?: string;
  /** Required. The value of the Setting. */
  value?: Record<string, unknown>;
}

export const Setting: Schema.Schema<Setting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Setting" });

export interface PosixGroup {
  /** System identifier for which group name and gid apply to. If not specified it will default to empty value. */
  systemId?: string;
  /** GID of the POSIX group. */
  gid?: string;
  /** Name of the POSIX group. */
  name?: string;
}

export const PosixGroup: Schema.Schema<PosixGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    systemId: Schema.optional(Schema.String),
    gid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PosixGroup" });

export interface Group {
  /** Required. The `EntityKey` of the `Group`. */
  groupKey?: EntityKey;
  /** Output only. Additional group keys associated with the Group. */
  additionalGroupKeys?: ReadonlyArray<EntityKey>;
  /** The display name of the `Group`. */
  displayName?: string;
  /** Required. One or more label entries that apply to the Group. Labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value. Google Groups can be [locked](https://support.google.com/a?p=locked-groups). To lock a group, add a label with a key of `cloudidentity.googleapis.com/groups.locked` and an empty value. Doing so locks the group. To unlock the group, remove this label. */
  labels?: Record<string, string>;
  /** Output only. The time when the `Group` was created. */
  createTime?: string;
  /** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
  name?: string;
  /** Optional. The POSIX groups associated with the `Group`. */
  posixGroups?: ReadonlyArray<PosixGroup>;
  /** Optional. Dynamic group metadata like queries and status. */
  dynamicGroupMetadata?: DynamicGroupMetadata;
  /** Output only. The time when the `Group` was last updated. */
  updateTime?: string;
  /** An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters. */
  description?: string;
  /** Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) */
  parent?: string;
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupKey: Schema.optional(EntityKey),
    additionalGroupKeys: Schema.optional(Schema.Array(EntityKey)),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    posixGroups: Schema.optional(Schema.Array(PosixGroup)),
    dynamicGroupMetadata: Schema.optional(DynamicGroupMetadata),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface GetMembershipGraphResponse {
  /** The membership graph's path information represented as an adjacency list. */
  adjacencyList?: ReadonlyArray<MembershipAdjacencyList>;
  /** The resources representing each group in the adjacency list. Each group in this list can be correlated to a 'group' of the MembershipAdjacencyList using the 'name' of the Group resource. */
  groups?: ReadonlyArray<Group>;
}

export const GetMembershipGraphResponse: Schema.Schema<GetMembershipGraphResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjacencyList: Schema.optional(Schema.Array(MembershipAdjacencyList)),
    groups: Schema.optional(Schema.Array(Group)),
  }).annotate({ identifier: "GetMembershipGraphResponse" });

export interface WipeDeviceResponse {
  /** Resultant Device object for the action. Note that asset tags will not be returned in the device object. */
  device?: Device;
}

export const WipeDeviceResponse: Schema.Schema<WipeDeviceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(Device),
  }).annotate({ identifier: "WipeDeviceResponse" });

export interface GoogleAppsCloudidentityDevicesV1CertificateAttributes {
  /** Output only. Validation state of this certificate. */
  validationState?:
    | "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
    | "VALIDATION_SUCCESSFUL"
    | "VALIDATION_FAILED"
    | (string & {});
  /** Certificate not valid at or after this timestamp. */
  validityExpirationTime?: string;
  /** Certificate not valid before this timestamp. */
  validityStartTime?: string;
  /** The name of the issuer of this certificate. */
  issuer?: string;
  /** The certificate thumbprint. */
  thumbprint?: string;
  /** The encoded certificate fingerprint. */
  fingerprint?: string;
  /** Serial number of the certificate, Example: "123456789". */
  serialNumber?: string;
  /** The subject name of this certificate. */
  subject?: string;
  /** The X.509 extension for CertificateTemplate. */
  certificateTemplate?: GoogleAppsCloudidentityDevicesV1CertificateTemplate;
}

export const GoogleAppsCloudidentityDevicesV1CertificateAttributes: Schema.Schema<GoogleAppsCloudidentityDevicesV1CertificateAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationState: Schema.optional(Schema.String),
    validityExpirationTime: Schema.optional(Schema.String),
    validityStartTime: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    thumbprint: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.String),
    certificateTemplate: Schema.optional(
      GoogleAppsCloudidentityDevicesV1CertificateTemplate,
    ),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CertificateAttributes",
  });

export interface GoogleAppsCloudidentityDevicesV1BrowserInfo {
  /** Deprecated: This field is not used for Chrome version 118 and later. Current state of [Chrome Cleanup](https://chromeenterprise.google/policies/#ChromeCleanupEnabled). */
  isChromeCleanupEnabled?: boolean;
  /** Current state of [password protection trigger](https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger). */
  passwordProtectionWarningTrigger?:
    | "PASSWORD_PROTECTION_TRIGGER_UNSPECIFIED"
    | "PROTECTION_OFF"
    | "PASSWORD_REUSE"
    | "PHISHING_REUSE"
    | (string & {});
  /** Version of the request initiating browser. E.g. `91.0.4442.4`. */
  browserVersion?: string;
  /** Current state of [Safe Browsing protection level](https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel). */
  safeBrowsingProtectionLevel?:
    | "SAFE_BROWSING_LEVEL_UNSPECIFIED"
    | "DISABLED"
    | "STANDARD"
    | "ENHANCED"
    | (string & {});
  /** Current state of [built-in DNS client](https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled). */
  isBuiltInDnsClientEnabled?: boolean;
  /** Current state of [file download analysis](https://chromeenterprise.google/policies/#OnFileDownloadedEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isFileDownloadAnalysisEnabled?: boolean;
  /** Current state of [bulk data analysis](https://chromeenterprise.google/policies/#OnBulkDataEntryEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isBulkDataEntryAnalysisEnabled?: boolean;
  /** Current state of [site isolation](https://chromeenterprise.google/policies/?policy=IsolateOrigins). */
  isSiteIsolationEnabled?: boolean;
  /** Current state of [security event analysis](https://chromeenterprise.google/policies/#OnSecurityEventEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isSecurityEventAnalysisEnabled?: boolean;
  /** Current state of [real-time URL check](https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode). Set to true if provider list from Chrome is non-empty. */
  isRealtimeUrlCheckEnabled?: boolean;
  /** Current state of [Chrome Remote Desktop app](https://chromeenterprise.google/policies/#URLBlocklist). */
  isChromeRemoteDesktopAppBlocked?: boolean;
  /** Current state of [third-party blocking](https://chromeenterprise.google/policies/#ThirdPartyBlockingEnabled). */
  isThirdPartyBlockingEnabled?: boolean;
  /** Output only. Browser's management state. */
  browserManagementState?:
    | "UNSPECIFIED"
    | "UNMANAGED"
    | "MANAGED_BY_OTHER_DOMAIN"
    | "PROFILE_MANAGED"
    | "BROWSER_MANAGED"
    | (string & {});
  /** Current state of [file upload analysis](https://chromeenterprise.google/policies/#OnFileAttachedEnterpriseConnector). Set to true if provider list from Chrome is non-empty. */
  isFileUploadAnalysisEnabled?: boolean;
}

export const GoogleAppsCloudidentityDevicesV1BrowserInfo: Schema.Schema<GoogleAppsCloudidentityDevicesV1BrowserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isChromeCleanupEnabled: Schema.optional(Schema.Boolean),
    passwordProtectionWarningTrigger: Schema.optional(Schema.String),
    browserVersion: Schema.optional(Schema.String),
    safeBrowsingProtectionLevel: Schema.optional(Schema.String),
    isBuiltInDnsClientEnabled: Schema.optional(Schema.Boolean),
    isFileDownloadAnalysisEnabled: Schema.optional(Schema.Boolean),
    isBulkDataEntryAnalysisEnabled: Schema.optional(Schema.Boolean),
    isSiteIsolationEnabled: Schema.optional(Schema.Boolean),
    isSecurityEventAnalysisEnabled: Schema.optional(Schema.Boolean),
    isRealtimeUrlCheckEnabled: Schema.optional(Schema.Boolean),
    isChromeRemoteDesktopAppBlocked: Schema.optional(Schema.Boolean),
    isThirdPartyBlockingEnabled: Schema.optional(Schema.Boolean),
    browserManagementState: Schema.optional(Schema.String),
    isFileUploadAnalysisEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsCloudidentityDevicesV1BrowserInfo" });

export interface GoogleAppsCloudidentityDevicesV1BrowserAttributes {
  /** Timestamp in milliseconds since the Unix epoch when the profile/gcm id was last synced. */
  lastProfileSyncTime?: string;
  /** Represents the current state of the [Chrome browser attributes](https://cloud.google.com/access-context-manager/docs/browser-attributes) sent by the [Endpoint Verification extension](https://chromewebstore.google.com/detail/endpoint-verification/callobklhcbilhphinckomhgkigmfocg?pli=1). */
  chromeBrowserInfo?: GoogleAppsCloudidentityDevicesV1BrowserInfo;
  /** Chrome profile ID that is exposed by the Chrome API. It is unique for each device. */
  chromeProfileId?: string;
}

export const GoogleAppsCloudidentityDevicesV1BrowserAttributes: Schema.Schema<GoogleAppsCloudidentityDevicesV1BrowserAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastProfileSyncTime: Schema.optional(Schema.String),
    chromeBrowserInfo: Schema.optional(
      GoogleAppsCloudidentityDevicesV1BrowserInfo,
    ),
    chromeProfileId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1BrowserAttributes",
  });

export interface GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes {
  /** Details of certificates. */
  certificateAttributes?: ReadonlyArray<GoogleAppsCloudidentityDevicesV1CertificateAttributes>;
  /** Details of browser profiles reported by Endpoint Verification. */
  browserAttributes?: ReadonlyArray<GoogleAppsCloudidentityDevicesV1BrowserAttributes>;
  /** [Additional signals](https://cloud.google.com/endpoint-verification/docs/device-information) reported by Endpoint Verification. It includes the following attributes: * Non-configurable attributes: hotfixes, av_installed, av_enabled, windows_domain_name, is_os_native_firewall_enabled, and is_secure_boot_enabled. * [Configurable attributes](https://cloud.google.com/endpoint-verification/docs/collect-config-attributes): file, folder, and binary attributes; registry entries; and properties in a plist. */
  additionalSignals?: Record<string, unknown>;
}

export const GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes: Schema.Schema<GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateAttributes: Schema.optional(
      Schema.Array(GoogleAppsCloudidentityDevicesV1CertificateAttributes),
    ),
    browserAttributes: Schema.optional(
      Schema.Array(GoogleAppsCloudidentityDevicesV1BrowserAttributes),
    ),
    additionalSignals: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({
    identifier:
      "GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes",
  });

export interface GoogleAppsCloudidentityDevicesV1Device {
  /** Asset tag of the device. */
  assetTag?: string;
  /** Output only. OS security patch update time on device. */
  securityPatchTime?: string;
  /** Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. */
  createTime?: string;
  /** Output only. Device brand. Example: Samsung. */
  brand?: string;
  /** Output only. Management state of the device */
  managementState?:
    | "MANAGEMENT_STATE_UNSPECIFIED"
    | "APPROVED"
    | "BLOCKED"
    | "PENDING"
    | "UNPROVISIONED"
    | "WIPING"
    | "WIPED"
    | (string & {});
  /** Output only. Unified device id of the device. */
  unifiedDeviceId?: string;
  /** Output only. Whether USB debugging is enabled on device. */
  enabledUsbDebugging?: boolean;
  /** Output only. Device bootloader version. Example: 0.6.7. */
  bootloaderVersion?: string;
  /** Output only. Build number of the device. */
  buildNumber?: string;
  /** Unique identifier for the device. */
  deviceId?: string;
  /** Output only. Device manufacturer. Example: Motorola. */
  manufacturer?: string;
  /** Output only. Kernel version of the device. */
  kernelVersion?: string;
  /** Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com". */
  otherAccounts?: ReadonlyArray<string>;
  /** Output only. OS release version. Example: 6.0. */
  releaseVersion?: string;
  /** Output only. Model name of device. Example: Pixel 3. */
  model?: string;
  /** Output only. Whether developer options is enabled on device. */
  enabledDeveloperOptions?: boolean;
  /** Output only. OS version of the device. Example: Android 8.1.0. */
  osVersion?: string;
  /** Output only. Device encryption state. */
  encryptionState?:
    | "ENCRYPTION_STATE_UNSPECIFIED"
    | "UNSUPPORTED_BY_DEVICE"
    | "ENCRYPTED"
    | "NOT_ENCRYPTED"
    | (string & {});
  /** Output only. MEID number of device if CDMA device; empty otherwise. */
  meid?: string;
  /** Output only. Type of device. */
  deviceType?:
    | "DEVICE_TYPE_UNSPECIFIED"
    | "ANDROID"
    | "IOS"
    | "GOOGLE_SYNC"
    | "WINDOWS"
    | "MAC_OS"
    | "LINUX"
    | "CHROME_OS"
    | (string & {});
  /** Output only. Attributes specific to [Endpoint Verification](https://cloud.google.com/endpoint-verification/docs/overview) devices. */
  endpointVerificationSpecificAttributes?: GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes;
  /** Output only. Whether the device is owned by the company or an individual */
  ownerType?:
    | "DEVICE_OWNERSHIP_UNSPECIFIED"
    | "COMPANY"
    | "BYOD"
    | (string & {});
  /** WiFi MAC addresses of device. */
  wifiMacAddresses?: ReadonlyArray<string>;
  /** Output only. Mobile or network operator of device, if available. */
  networkOperator?: string;
  /** Output only. Represents whether the Device is compromised. */
  compromisedState?:
    | "COMPROMISED_STATE_UNSPECIFIED"
    | "COMPROMISED"
    | "UNCOMPROMISED"
    | (string & {});
  /** Output only. Attributes specific to Android devices. */
  androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;
  /** Output only. IMEI number of device if GSM device; empty otherwise. */
  imei?: string;
  /** Host name of the device. */
  hostname?: string;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique id assigned to the Device. Important: Device API scopes require that you use domain-wide delegation to access the API. For more information, see [Set up the Devices API](https://cloud.google.com/identity/docs/how-to/setup-devices). */
  name?: string;
  /** Most recent time when device synced with this service. */
  lastSyncTime?: string;
  /** Output only. Baseband version of the device. */
  basebandVersion?: string;
  /** Serial Number of device. Example: HT82V1A01076. */
  serialNumber?: string;
}

export const GoogleAppsCloudidentityDevicesV1Device: Schema.Schema<GoogleAppsCloudidentityDevicesV1Device> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetTag: Schema.optional(Schema.String),
    securityPatchTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.String),
    managementState: Schema.optional(Schema.String),
    unifiedDeviceId: Schema.optional(Schema.String),
    enabledUsbDebugging: Schema.optional(Schema.Boolean),
    bootloaderVersion: Schema.optional(Schema.String),
    buildNumber: Schema.optional(Schema.String),
    deviceId: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
    kernelVersion: Schema.optional(Schema.String),
    otherAccounts: Schema.optional(Schema.Array(Schema.String)),
    releaseVersion: Schema.optional(Schema.String),
    model: Schema.optional(Schema.String),
    enabledDeveloperOptions: Schema.optional(Schema.Boolean),
    osVersion: Schema.optional(Schema.String),
    encryptionState: Schema.optional(Schema.String),
    meid: Schema.optional(Schema.String),
    deviceType: Schema.optional(Schema.String),
    endpointVerificationSpecificAttributes: Schema.optional(
      GoogleAppsCloudidentityDevicesV1EndpointVerificationSpecificAttributes,
    ),
    ownerType: Schema.optional(Schema.String),
    wifiMacAddresses: Schema.optional(Schema.Array(Schema.String)),
    networkOperator: Schema.optional(Schema.String),
    compromisedState: Schema.optional(Schema.String),
    androidSpecificAttributes: Schema.optional(
      GoogleAppsCloudidentityDevicesV1AndroidAttributes,
    ),
    imei: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lastSyncTime: Schema.optional(Schema.String),
    basebandVersion: Schema.optional(Schema.String),
    serialNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCloudidentityDevicesV1Device" });

export interface GoogleAppsCloudidentityDevicesV1WipeDeviceResponse {
  /** Resultant Device object for the action. Note that asset tags will not be returned in the device object. */
  device?: GoogleAppsCloudidentityDevicesV1Device;
}

export const GoogleAppsCloudidentityDevicesV1WipeDeviceResponse: Schema.Schema<GoogleAppsCloudidentityDevicesV1WipeDeviceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(GoogleAppsCloudidentityDevicesV1Device),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1WipeDeviceResponse",
  });

export interface AddIdpCredentialOperationMetadata {
  /** State of this Operation Will be "awaiting-multi-party-approval" when the operation is deferred due to the target customer having enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). */
  state?: string;
}

export const AddIdpCredentialOperationMetadata: Schema.Schema<AddIdpCredentialOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddIdpCredentialOperationMetadata" });

export interface IsInvitableUserResponse {
  /** Returns true if the email address is invitable. */
  isInvitableUser?: boolean;
}

export const IsInvitableUserResponse: Schema.Schema<IsInvitableUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isInvitableUser: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "IsInvitableUserResponse" });

export interface LookupMembershipNameResponse {
  /** The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`. */
  name?: string;
}

export const LookupMembershipNameResponse: Schema.Schema<LookupMembershipNameResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupMembershipNameResponse" });

export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
}

export const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse: Schema.Schema<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(GoogleAppsCloudidentityDevicesV1DeviceUser),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse",
  });

export interface ListDevicesResponse {
  /** Token to retrieve the next page of results. Empty if there are no more results. */
  nextPageToken?: string;
  /** Devices meeting the list restrictions. */
  devices?: ReadonlyArray<Device>;
}

export const ListDevicesResponse: Schema.Schema<ListDevicesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    devices: Schema.optional(Schema.Array(Device)),
  }).annotate({ identifier: "ListDevicesResponse" });

export interface SignInBehavior {
  /** When to redirect sign-ins to the IdP. */
  redirectCondition?:
    | "REDIRECT_CONDITION_UNSPECIFIED"
    | "NEVER"
    | (string & {});
}

export const SignInBehavior: Schema.Schema<SignInBehavior> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirectCondition: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignInBehavior" });

export interface ListGroupsResponse {
  /** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
  nextPageToken?: string;
  /** The `Group` resources under the specified `parent`. */
  groups?: ReadonlyArray<Group>;
}

export const ListGroupsResponse: Schema.Schema<ListGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    groups: Schema.optional(Schema.Array(Group)),
  }).annotate({ identifier: "ListGroupsResponse" });

export interface GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata {}

export const GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata",
  });

export interface MemberRestriction {
  /** Member Restriction as defined by CEL expression. Supported restrictions are: `member.customer_id` and `member.type`. Valid values for `member.type` are `1`, `2` and `3`. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for `member.customer_id` only supports `groupCustomerId()` currently which means the customer id of the group will be used for restriction. Supported operators are `&&`, `||` and `==`, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. `member.type == 2 && member.customer_id == groupCustomerId()` Allow only users or groups to be members. `member.type == 1 || member.type == 3` */
  query?: string;
  /** The evaluated state of this restriction on a group. */
  evaluation?: RestrictionEvaluation;
}

export const MemberRestriction: Schema.Schema<MemberRestriction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    evaluation: Schema.optional(RestrictionEvaluation),
  }).annotate({ identifier: "MemberRestriction" });

export interface PolicyQuery {
  /** Immutable. The CEL query that defines which entities the Policy applies to (ex. a User entity). For details about CEL see https://opensource.google.com/projects/cel. The OrgUnits the Policy applies to are represented by a clause like so: entity.org_units.exists(org_unit, org_unit.org_unit_id == orgUnitId('{orgUnitId}')) The Group the Policy applies to are represented by a clause like so: entity.groups.exists(group, group.group_id == groupId('{groupId}')) The Licenses the Policy applies to are represented by a clause like so: entity.licenses.exists(license, license in ['/product/{productId}/sku/{skuId}']) The above clauses can be present in any combination, and used in conjunction with the &&, || and ! operators. The org_unit and group fields below are helper fields that contain the corresponding value(s) as the query to make the query easier to use. */
  query?: string;
  /** Immutable. The group that the query applies to. This field is only set if there is a single value for group that satisfies all clauses of the query. If no group applies, this will be the empty string. */
  group?: string;
  /** Output only. The decimal sort order of this PolicyQuery. The value is relative to all other policies with the same setting type for the customer. (There are no duplicates within this set). */
  sortOrder?: number;
  /** Required. Immutable. Non-empty default. The OrgUnit the query applies to. This field is only set if there is a single value for org_unit that satisfies all clauses of the query. */
  orgUnit?: string;
}

export const PolicyQuery: Schema.Schema<PolicyQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    sortOrder: Schema.optional(Schema.Number),
    orgUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "PolicyQuery" });

export interface Policy {
  /** Output only. Identifier. The [resource name](https://cloud.google.com/apis/design/resource_names) of the Policy. Format: policies/{policy}. */
  name?: string;
  /** Required. The PolicyQuery the Setting applies to. */
  policyQuery?: PolicyQuery;
  /** Output only. The type of the policy. */
  type?: "POLICY_TYPE_UNSPECIFIED" | "SYSTEM" | "ADMIN" | (string & {});
  /** Immutable. Customer that the Policy belongs to. The value is in the format 'customers/{customerId}'. The `customerId` must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793. */
  customer?: string;
  /** Required. The Setting configured by this Policy. */
  setting?: Setting;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    policyQuery: Schema.optional(PolicyQuery),
    type: Schema.optional(Schema.String),
    customer: Schema.optional(Schema.String),
    setting: Schema.optional(Setting),
  }).annotate({ identifier: "Policy" });

export interface GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata {}

export const GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata",
  });

export interface SamlSsoInfo {
  /** Required. Name of the `InboundSamlSsoProfile` to use. Must be of the form `inboundSamlSsoProfiles/{inbound_saml_sso_profile}`. */
  inboundSamlSsoProfile?: string;
}

export const SamlSsoInfo: Schema.Schema<SamlSsoInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSamlSsoProfile: Schema.optional(Schema.String),
  }).annotate({ identifier: "SamlSsoInfo" });

export interface SearchTransitiveMembershipsResponse {
  /** List of transitive memberships satisfying the query. */
  memberships?: ReadonlyArray<MemberRelation>;
  /** Token to retrieve the next page of results, or empty if there are no more results. */
  nextPageToken?: string;
}

export const SearchTransitiveMembershipsResponse: Schema.Schema<SearchTransitiveMembershipsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(MemberRelation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchTransitiveMembershipsResponse" });

export interface CreateInboundOidcSsoProfileOperationMetadata {
  /** State of this Operation Will be "awaiting-multi-party-approval" when the operation is deferred due to the target customer having enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448). */
  state?: string;
}

export const CreateInboundOidcSsoProfileOperationMetadata: Schema.Schema<CreateInboundOidcSsoProfileOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateInboundOidcSsoProfileOperationMetadata" });

export interface MembershipRelation {
  /** The `EntityKey` of the `Group`. */
  groupKey?: EntityKey;
  /** The display name of the `Group`. */
  displayName?: string;
  /** The `MembershipRole`s that apply to the `Membership`. */
  roles?: ReadonlyArray<MembershipRole>;
  /** One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. */
  labels?: Record<string, string>;
  /** An extended description to help users determine the purpose of a `Group`. */
  description?: string;
  /** The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`. */
  membership?: string;
  /** The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
  group?: string;
}

export const MembershipRelation: Schema.Schema<MembershipRelation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupKey: Schema.optional(EntityKey),
    displayName: Schema.optional(Schema.String),
    roles: Schema.optional(Schema.Array(MembershipRole)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    description: Schema.optional(Schema.String),
    membership: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "MembershipRelation" });

export interface SearchDirectGroupsResponse {
  /** List of direct groups satisfying the query. */
  memberships?: ReadonlyArray<MembershipRelation>;
  /** Token to retrieve the next page of results, or empty if there are no more results available for listing. */
  nextPageToken?: string;
}

export const SearchDirectGroupsResponse: Schema.Schema<SearchDirectGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(MembershipRelation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchDirectGroupsResponse" });

export interface ApproveDeviceUserRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const ApproveDeviceUserRequest: Schema.Schema<ApproveDeviceUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
  }).annotate({ identifier: "ApproveDeviceUserRequest" });

export interface GoogleAppsCloudidentityDevicesV1ClientState {
  /** A descriptive cause of the health score. */
  scoreReason?: string;
  /** Output only. The time the client state data was last updated. */
  lastUpdateTime?: string;
  /** The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies. */
  healthScore?:
    | "HEALTH_SCORE_UNSPECIFIED"
    | "VERY_POOR"
    | "POOR"
    | "NEUTRAL"
    | "GOOD"
    | "VERY_GOOD"
    | (string & {});
  /** This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. */
  customId?: string;
  /** Output only. The owner of the ClientState */
  ownerType?:
    | "OWNER_TYPE_UNSPECIFIED"
    | "OWNER_TYPE_CUSTOMER"
    | "OWNER_TYPE_PARTNER"
    | (string & {});
  /** The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest */
  etag?: string;
  /** The management state of the resource as specified by the API client. */
  managed?:
    | "MANAGED_STATE_UNSPECIFIED"
    | "MANAGED"
    | "UNMANAGED"
    | (string & {});
  /** The compliance state of the resource as specified by the API client. */
  complianceState?:
    | "COMPLIANCE_STATE_UNSPECIFIED"
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | (string & {});
  /** Output only. The time the client state data was created. */
  createTime?: string;
  /** The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. */
  keyValuePairs?: Record<
    string,
    GoogleAppsCloudidentityDevicesV1CustomAttributeValue
  >;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientState/{partner}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C') */
  name?: string;
  /** The caller can specify asset tags for this resource */
  assetTags?: ReadonlyArray<string>;
}

export const GoogleAppsCloudidentityDevicesV1ClientState: Schema.Schema<GoogleAppsCloudidentityDevicesV1ClientState> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scoreReason: Schema.optional(Schema.String),
    lastUpdateTime: Schema.optional(Schema.String),
    healthScore: Schema.optional(Schema.String),
    customId: Schema.optional(Schema.String),
    ownerType: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    managed: Schema.optional(Schema.String),
    complianceState: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    keyValuePairs: Schema.optional(
      Schema.Record(
        Schema.String,
        GoogleAppsCloudidentityDevicesV1CustomAttributeValue,
      ),
    ),
    name: Schema.optional(Schema.String),
    assetTags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleAppsCloudidentityDevicesV1ClientState" });

export interface SecuritySettings {
  /** The Member Restriction value */
  memberRestriction?: MemberRestriction;
  /** Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`. */
  name?: string;
}

export const SecuritySettings: Schema.Schema<SecuritySettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberRestriction: Schema.optional(MemberRestriction),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecuritySettings" });

export interface ListIdpCredentialsResponse {
  /** The IdpCredentials from the specified InboundSamlSsoProfile. */
  idpCredentials?: ReadonlyArray<IdpCredential>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListIdpCredentialsResponse: Schema.Schema<ListIdpCredentialsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    idpCredentials: Schema.optional(Schema.Array(IdpCredential)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListIdpCredentialsResponse" });

export interface GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata {}

export const GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata",
  });

export interface ListPoliciesResponse {
  /** The results */
  policies?: ReadonlyArray<Policy>;
  /** The pagination token to retrieve the next page of results. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListPoliciesResponse: Schema.Schema<ListPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policies: Schema.optional(Schema.Array(Policy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPoliciesResponse" });

export interface ModifyMembershipRolesResponse {
  /** The `Membership` resource after modifying its `MembershipRole`s. */
  membership?: Membership;
}

export const ModifyMembershipRolesResponse: Schema.Schema<ModifyMembershipRolesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    membership: Schema.optional(Membership),
  }).annotate({ identifier: "ModifyMembershipRolesResponse" });

export interface InboundSsoAssignment {
  /** Immutable. The customer. For example: `customers/C0123abc`. */
  customer?: string;
  /** Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set. */
  rank?: number;
  /** Immutable. Must be of the form `groups/{group}`. */
  targetGroup?: string;
  /** Immutable. Must be of the form `orgUnits/{org_unit}`. */
  targetOrgUnit?: string;
  /** Inbound SSO behavior. */
  ssoMode?:
    | "SSO_MODE_UNSPECIFIED"
    | "SSO_OFF"
    | "SAML_SSO"
    | "OIDC_SSO"
    | "DOMAIN_WIDE_SAML_IF_ENABLED"
    | (string & {});
  /** Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration. */
  signInBehavior?: SignInBehavior;
  /** SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`. */
  samlSsoInfo?: SamlSsoInfo;
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment. */
  name?: string;
  /** OpenID Connect SSO details. Must be set if and only if `sso_mode` is set to `OIDC_SSO`. */
  oidcSsoInfo?: OidcSsoInfo;
}

export const InboundSsoAssignment: Schema.Schema<InboundSsoAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String),
    rank: Schema.optional(Schema.Number),
    targetGroup: Schema.optional(Schema.String),
    targetOrgUnit: Schema.optional(Schema.String),
    ssoMode: Schema.optional(Schema.String),
    signInBehavior: Schema.optional(SignInBehavior),
    samlSsoInfo: Schema.optional(SamlSsoInfo),
    name: Schema.optional(Schema.String),
    oidcSsoInfo: Schema.optional(OidcSsoInfo),
  }).annotate({ identifier: "InboundSsoAssignment" });

export interface LookupGroupNameResponse {
  /** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`. */
  name?: string;
}

export const LookupGroupNameResponse: Schema.Schema<LookupGroupNameResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupGroupNameResponse" });

export interface GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata {}

export const GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata: Schema.Schema<GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata",
  });

export interface GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
}

export const GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse: Schema.Schema<GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(GoogleAppsCloudidentityDevicesV1DeviceUser),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse",
  });

export interface SearchGroupsResponse {
  /** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
  nextPageToken?: string;
  /** The `Group` resources that match the search query. */
  groups?: ReadonlyArray<Group>;
}

export const SearchGroupsResponse: Schema.Schema<SearchGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    groups: Schema.optional(Schema.Array(Group)),
  }).annotate({ identifier: "SearchGroupsResponse" });

export interface CreateInboundSsoAssignmentOperationMetadata {}

export const CreateInboundSsoAssignmentOperationMetadata: Schema.Schema<CreateInboundSsoAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CreateInboundSsoAssignmentOperationMetadata",
  });

export interface BlockDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: DeviceUser;
}

export const BlockDeviceUserResponse: Schema.Schema<BlockDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(DeviceUser),
  }).annotate({ identifier: "BlockDeviceUserResponse" });

export interface ApproveDeviceUserResponse {
  /** Resultant DeviceUser object for the action. */
  deviceUser?: DeviceUser;
}

export const ApproveDeviceUserResponse: Schema.Schema<ApproveDeviceUserResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceUser: Schema.optional(DeviceUser),
  }).annotate({ identifier: "ApproveDeviceUserResponse" });

export interface DeleteInboundSamlSsoProfileOperationMetadata {}

export const DeleteInboundSamlSsoProfileOperationMetadata: Schema.Schema<DeleteInboundSamlSsoProfileOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "DeleteInboundSamlSsoProfileOperationMetadata",
  });

export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse {
  /** Resultant Device object for the action. Note that asset tags will not be returned in the device object. */
  device?: GoogleAppsCloudidentityDevicesV1Device;
}

export const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse: Schema.Schema<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(GoogleAppsCloudidentityDevicesV1Device),
  }).annotate({
    identifier: "GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse",
  });

export interface CancelUserInvitationRequest {}

export const CancelUserInvitationRequest: Schema.Schema<CancelUserInvitationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelUserInvitationRequest",
  });

export interface ListInboundSsoAssignmentsResponse {
  /** The assignments. */
  inboundSsoAssignments?: ReadonlyArray<InboundSsoAssignment>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListInboundSsoAssignmentsResponse: Schema.Schema<ListInboundSsoAssignmentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inboundSsoAssignments: Schema.optional(Schema.Array(InboundSsoAssignment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInboundSsoAssignmentsResponse" });

export interface ListUserInvitationsResponse {
  /** The list of UserInvitation resources. */
  userInvitations?: ReadonlyArray<UserInvitation>;
  /** The token for the next page. If not empty, indicates that there may be more `UserInvitation` resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call. */
  nextPageToken?: string;
}

export const ListUserInvitationsResponse: Schema.Schema<ListUserInvitationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userInvitations: Schema.optional(Schema.Array(UserInvitation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListUserInvitationsResponse" });

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

export interface ListPoliciesRequest {
  /** Optional. The maximum number of results to return. The service can return fewer than this number. If omitted or set to 0, the default is 50 results per page. The maximum allowed value is 100. `page_size` values greater than 100 default to 100. */
  pageSize?: number;
  /** Optional. The pagination token received from a prior call to PoliciesService.ListPolicies to retrieve the next page of results. When paginating, all other parameters provided to `ListPoliciesRequest` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A CEL expression for filtering the results. Policies can be filtered by application with this expression: setting.type.matches('^settings/gmail\\..*$') Policies can be filtered by setting type with this expression: setting.type.matches('^.*\\.service_status$') A maximum of one of the above setting.type clauses can be used. Policies can be filtered by customer with this expression: customer == "customers/{customer}" Where `customer` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may use `customers/my_customer` to specify your own organization. When no customer is mentioned it will be default to customers/my_customer. A maximum of one customer clause can be used. The above clauses can only be combined together in a single filter expression with the `&&` operator. */
  filter?: string;
}

export const ListPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/policies" }),
  svc,
) as unknown as Schema.Schema<ListPoliciesRequest>;

export type ListPoliciesResponse_Op = ListPoliciesResponse;
export const ListPoliciesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListPoliciesResponse;

export type ListPoliciesError = DefaultErrors | NotFound | Forbidden;

/** List policies. */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesRequest,
  ListPoliciesResponse_Op,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPoliciesRequest,
  output: ListPoliciesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetPoliciesRequest {
  /** Required. The name of the policy to retrieve. Format: `policies/{policy}`. */
  name: string;
}

export const GetPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetPoliciesRequest>;

export type GetPoliciesResponse = Policy;
export const GetPoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetPoliciesError = DefaultErrors | NotFound | Forbidden;

/** Get a policy. */
export const getPolicies: API.OperationMethod<
  GetPoliciesRequest,
  GetPoliciesResponse,
  GetPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetPoliciesRequest,
  output: GetPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchPoliciesRequest {
  /** Output only. Identifier. The [resource name](https://cloud.google.com/apis/design/resource_names) of the Policy. Format: policies/{policy}. */
  name: string;
  /** Request body */
  body?: Policy;
}

export const PatchPoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(Policy).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<PatchPoliciesRequest>;

export type PatchPoliciesResponse = Operation;
export const PatchPoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a policy. */
export const patchPolicies: API.OperationMethod<
  PatchPoliciesRequest,
  PatchPoliciesResponse,
  PatchPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchPoliciesRequest,
  output: PatchPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreatePoliciesRequest {
  /** Request body */
  body?: Policy;
}

export const CreatePoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(Policy).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1beta1/policies", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreatePoliciesRequest>;

export type CreatePoliciesResponse = Operation;
export const CreatePoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreatePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a policy. */
export const createPolicies: API.OperationMethod<
  CreatePoliciesRequest,
  CreatePoliciesResponse,
  CreatePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreatePoliciesRequest,
  output: CreatePoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeletePoliciesRequest {
  /** Required. The name of the policy to delete. Format: `policies/{policy}`. */
  name: string;
}

export const DeletePoliciesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
  svc,
) as unknown as Schema.Schema<DeletePoliciesRequest>;

export type DeletePoliciesResponse = Operation;
export const DeletePoliciesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeletePoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a policy. */
export const deletePolicies: API.OperationMethod<
  DeletePoliciesRequest,
  DeletePoliciesResponse,
  DeletePoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeletePoliciesRequest,
  output: DeletePoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendCustomersUserinvitationsRequest {
  /** Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` */
  name: string;
  /** Request body */
  body?: SendUserInvitationRequest;
}

export const SendCustomersUserinvitationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SendUserInvitationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:send", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SendCustomersUserinvitationsRequest>;

export type SendCustomersUserinvitationsResponse = Operation;
export const SendCustomersUserinvitationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SendCustomersUserinvitationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True. */
export const sendCustomersUserinvitations: API.OperationMethod<
  SendCustomersUserinvitationsRequest,
  SendCustomersUserinvitationsResponse,
  SendCustomersUserinvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendCustomersUserinvitationsRequest,
  output: SendCustomersUserinvitationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface IsInvitableUserCustomersUserinvitationsRequest {
  /** Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` */
  name: string;
}

export const IsInvitableUserCustomersUserinvitationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}:isInvitableUser" }),
    svc,
  ) as unknown as Schema.Schema<IsInvitableUserCustomersUserinvitationsRequest>;

export type IsInvitableUserCustomersUserinvitationsResponse =
  IsInvitableUserResponse;
export const IsInvitableUserCustomersUserinvitationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ IsInvitableUserResponse;

export type IsInvitableUserCustomersUserinvitationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers. */
export const isInvitableUserCustomersUserinvitations: API.OperationMethod<
  IsInvitableUserCustomersUserinvitationsRequest,
  IsInvitableUserCustomersUserinvitationsResponse,
  IsInvitableUserCustomersUserinvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IsInvitableUserCustomersUserinvitationsRequest,
  output: IsInvitableUserCustomersUserinvitationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetCustomersUserinvitationsRequest {
  /** Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` */
  name: string;
}

export const GetCustomersUserinvitationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCustomersUserinvitationsRequest>;

export type GetCustomersUserinvitationsResponse = UserInvitation;
export const GetCustomersUserinvitationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ UserInvitation;

export type GetCustomersUserinvitationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a UserInvitation resource. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains. */
export const getCustomersUserinvitations: API.OperationMethod<
  GetCustomersUserinvitationsRequest,
  GetCustomersUserinvitationsResponse,
  GetCustomersUserinvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCustomersUserinvitationsRequest,
  output: GetCustomersUserinvitationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCustomersUserinvitationsRequest {
  /** Optional. A page token, received from a previous `ListUserInvitations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. A query string for filtering `UserInvitation` results by their current state, in the format: `"state=='invited'"`. */
  filter?: string;
  /** Optional. The sort order of the list results. You can sort the results in descending order based on either email or last update timestamp but not both, using `order_by="email desc"`. Currently, sorting is supported for `update_time asc`, `update_time desc`, `email asc`, and `email desc`. If not specified, results will be returned based on `email asc` order. */
  orderBy?: string;
  /** Required. The customer ID of the Google Workspace or Cloud Identity account the UserInvitation resources are associated with. */
  parent: string;
  /** Optional. The maximum number of UserInvitation resources to return. If unspecified, at most 100 resources will be returned. The maximum value is 200; values above 200 will be set to 200. */
  pageSize?: number;
}

export const ListCustomersUserinvitationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/userinvitations" }),
    svc,
  ) as unknown as Schema.Schema<ListCustomersUserinvitationsRequest>;

export type ListCustomersUserinvitationsResponse = ListUserInvitationsResponse;
export const ListCustomersUserinvitationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListUserInvitationsResponse;

export type ListCustomersUserinvitationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains. */
export const listCustomersUserinvitations: API.PaginatedOperationMethod<
  ListCustomersUserinvitationsRequest,
  ListCustomersUserinvitationsResponse,
  ListCustomersUserinvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListCustomersUserinvitationsRequest,
  output: ListCustomersUserinvitationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelCustomersUserinvitationsRequest {
  /** Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}` */
  name: string;
  /** Request body */
  body?: CancelUserInvitationRequest;
}

export const CancelCustomersUserinvitationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelUserInvitationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelCustomersUserinvitationsRequest>;

export type CancelCustomersUserinvitationsResponse = Operation;
export const CancelCustomersUserinvitationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelCustomersUserinvitationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels a UserInvitation that was already sent. */
export const cancelCustomersUserinvitations: API.OperationMethod<
  CancelCustomersUserinvitationsRequest,
  CancelCustomersUserinvitationsResponse,
  CancelCustomersUserinvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelCustomersUserinvitationsRequest,
  output: CancelCustomersUserinvitationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDevicesRequest {
  /** Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100. */
  pageSize?: number;
  /** Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character. */
  filter?: string;
  /** Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally to specify results to be sorted in descending order. Default order is ascending. */
  orderBy?: string;
  /** Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. */
  customer?: string;
  /** Optional. The view to use for the List request. */
  view?:
    | "VIEW_UNSPECIFIED"
    | "COMPANY_INVENTORY"
    | "USER_ASSIGNED_DEVICES"
    | (string & {});
}

export const ListDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/devices" }),
  svc,
) as unknown as Schema.Schema<ListDevicesRequest>;

export type ListDevicesResponse_Op = ListDevicesResponse;
export const ListDevicesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListDevicesResponse;

export type ListDevicesError = DefaultErrors | NotFound | Forbidden;

/** Lists/Searches devices. */
export const listDevices: API.PaginatedOperationMethod<
  ListDevicesRequest,
  ListDevicesResponse_Op,
  ListDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDevicesRequest,
  output: ListDevicesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetDevicesRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Customer in format: `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device. */
  name: string;
}

export const GetDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetDevicesRequest>;

export type GetDevicesResponse = Device;
export const GetDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Device;

export type GetDevicesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the specified device. */
export const getDevices: API.OperationMethod<
  GetDevicesRequest,
  GetDevicesResponse,
  GetDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDevicesRequest,
  output: GetDevicesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelWipeDevicesRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device. */
  name: string;
  /** Request body */
  body?: CancelWipeDeviceRequest;
}

export const CancelWipeDevicesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelWipeDeviceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:cancelWipe",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelWipeDevicesRequest>;

export type CancelWipeDevicesResponse = Operation;
export const CancelWipeDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelWipeDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. */
export const cancelWipeDevices: API.OperationMethod<
  CancelWipeDevicesRequest,
  CancelWipeDevicesResponse,
  CancelWipeDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelWipeDevicesRequest,
  output: CancelWipeDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WipeDevicesRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Request body */
  body?: WipeDeviceRequest;
}

export const WipeDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(WipeDeviceRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1beta1/{+name}:wipe", hasBody: true }),
  svc,
) as unknown as Schema.Schema<WipeDevicesRequest>;

export type WipeDevicesResponse = Operation;
export const WipeDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type WipeDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Wipes all data on the specified device. */
export const wipeDevices: API.OperationMethod<
  WipeDevicesRequest,
  WipeDevicesResponse,
  WipeDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WipeDevicesRequest,
  output: WipeDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateDevicesRequest {
  /** Request body */
  body?: CreateDeviceRequest;
}

export const CreateDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(CreateDeviceRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1beta1/devices", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateDevicesRequest>;

export type CreateDevicesResponse = Operation;
export const CreateDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium */
export const createDevices: API.OperationMethod<
  CreateDevicesRequest,
  CreateDevicesResponse,
  CreateDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDevicesRequest,
  output: CreateDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteDevicesRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique ID assigned to the Device. */
  name: string;
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const DeleteDevicesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
  svc,
) as unknown as Schema.Schema<DeleteDevicesRequest>;

export type DeleteDevicesResponse = Operation;
export const DeleteDevicesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteDevicesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified device. */
export const deleteDevices: API.OperationMethod<
  DeleteDevicesRequest,
  DeleteDevicesResponse,
  DeleteDevicesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDevicesRequest,
  output: DeleteDevicesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface WipeDevicesDeviceUsersRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Request body */
  body?: WipeDeviceUserRequest;
}

export const WipeDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(WipeDeviceUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:wipe", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<WipeDevicesDeviceUsersRequest>;

export type WipeDevicesDeviceUsersResponse = Operation;
export const WipeDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type WipeDevicesDeviceUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Wipes the user's account on a device. */
export const wipeDevicesDeviceUsers: API.OperationMethod<
  WipeDevicesDeviceUsersRequest,
  WipeDevicesDeviceUsersResponse,
  WipeDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WipeDevicesDeviceUsersRequest,
  output: WipeDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteDevicesDeviceUsersRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const DeleteDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteDevicesDeviceUsersRequest>;

export type DeleteDevicesDeviceUsersResponse = Operation;
export const DeleteDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteDevicesDeviceUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified DeviceUser. This also revokes the user's access to device data. */
export const deleteDevicesDeviceUsers: API.OperationMethod<
  DeleteDevicesDeviceUsersRequest,
  DeleteDevicesDeviceUsersResponse,
  DeleteDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDevicesDeviceUsersRequest,
  output: DeleteDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ApproveDevicesDeviceUsersRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Request body */
  body?: ApproveDeviceUserRequest;
}

export const ApproveDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ApproveDeviceUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:approve", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApproveDevicesDeviceUsersRequest>;

export type ApproveDevicesDeviceUsersResponse = Operation;
export const ApproveDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ApproveDevicesDeviceUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Approves device to access user data. */
export const approveDevicesDeviceUsers: API.OperationMethod<
  ApproveDevicesDeviceUsersRequest,
  ApproveDevicesDeviceUsersResponse,
  ApproveDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveDevicesDeviceUsersRequest,
  output: ApproveDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BlockDevicesDeviceUsersRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Request body */
  body?: BlockDeviceUserRequest;
}

export const BlockDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(BlockDeviceUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:block", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<BlockDevicesDeviceUsersRequest>;

export type BlockDevicesDeviceUsersResponse = Operation;
export const BlockDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BlockDevicesDeviceUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Blocks device from accessing user data */
export const blockDevicesDeviceUsers: API.OperationMethod<
  BlockDevicesDeviceUsersRequest,
  BlockDevicesDeviceUsersResponse,
  BlockDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BlockDevicesDeviceUsersRequest,
  output: BlockDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDevicesDeviceUsersRequest {
  /** Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character. */
  filter?: string;
  /** Optional. Order specification for devices in the response. */
  orderBy?: string;
  /** Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
  /** Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device} */
  parent: string;
  /** Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20. */
  pageSize?: number;
}

export const ListDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/deviceUsers" }),
    svc,
  ) as unknown as Schema.Schema<ListDevicesDeviceUsersRequest>;

export type ListDevicesDeviceUsersResponse = ListDeviceUsersResponse;
export const ListDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeviceUsersResponse;

export type ListDevicesDeviceUsersError = DefaultErrors | NotFound | Forbidden;

/** Lists/Searches DeviceUsers. */
export const listDevicesDeviceUsers: API.PaginatedOperationMethod<
  ListDevicesDeviceUsersRequest,
  ListDevicesDeviceUsersResponse,
  ListDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDevicesDeviceUsersRequest,
  output: ListDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface LookupDevicesDeviceUsersRequest {
  /** The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user. */
  userId?: string;
  /** Optional. The partner-specified device identifier assigned to the iOS device that initiated the Lookup API call. This string must match the value of the iosDeviceId key in the app config dictionary provided to Google Workspace apps. */
  iosDeviceId?: string;
  /** A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token. */
  pageToken?: string;
  /** Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json */
  rawResourceId?: string;
  /** Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user. */
  parent: string;
  /** The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20. */
  pageSize?: number;
  /** Optional. The partner ID of the calling iOS app. This string must match the value of the partner key within the app configuration dictionary provided to Google Workspace apps. */
  partner?: string;
  /** Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID). */
  androidId?: string;
}

export const LookupDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userId: Schema.optional(Schema.String).pipe(T.HttpQuery("userId")),
    iosDeviceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("iosDeviceId"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    rawResourceId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("rawResourceId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    partner: Schema.optional(Schema.String).pipe(T.HttpQuery("partner")),
    androidId: Schema.optional(Schema.String).pipe(T.HttpQuery("androidId")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}:lookup" }),
    svc,
  ) as unknown as Schema.Schema<LookupDevicesDeviceUsersRequest>;

export type LookupDevicesDeviceUsersResponse = LookupSelfDeviceUsersResponse;
export const LookupDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupSelfDeviceUsersResponse;

export type LookupDevicesDeviceUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: If either the `partner` or `ios_device_id` field is provided, then both fields are required. - Android: Specifying the `android_id` field is required. - Desktop: Specifying the `raw_resource_id` field is required. */
export const lookupDevicesDeviceUsers: API.PaginatedOperationMethod<
  LookupDevicesDeviceUsersRequest,
  LookupDevicesDeviceUsersResponse,
  LookupDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: LookupDevicesDeviceUsersRequest,
  output: LookupDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetDevicesDeviceUsersRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
}

export const GetDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetDevicesDeviceUsersRequest>;

export type GetDevicesDeviceUsersResponse = DeviceUser;
export const GetDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeviceUser;

export type GetDevicesDeviceUsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the specified DeviceUser */
export const getDevicesDeviceUsers: API.OperationMethod<
  GetDevicesDeviceUsersRequest,
  GetDevicesDeviceUsersResponse,
  GetDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDevicesDeviceUsersRequest,
  output: GetDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelWipeDevicesDeviceUsersRequest {
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User. */
  name: string;
  /** Request body */
  body?: CancelWipeDeviceUserRequest;
}

export const CancelWipeDevicesDeviceUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelWipeDeviceUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:cancelWipe",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelWipeDevicesDeviceUsersRequest>;

export type CancelWipeDevicesDeviceUsersResponse = Operation;
export const CancelWipeDevicesDeviceUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelWipeDevicesDeviceUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. */
export const cancelWipeDevicesDeviceUsers: API.OperationMethod<
  CancelWipeDevicesDeviceUsersRequest,
  CancelWipeDevicesDeviceUsersResponse,
  CancelWipeDevicesDeviceUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelWipeDevicesDeviceUsersRequest,
  output: CancelWipeDevicesDeviceUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDevicesDeviceUsersClientStatesRequest {
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientStates/{partner_id}`, where `device_id` is the unique ID assigned to the Device, `device_user_id` is the unique ID assigned to the User and `partner_id` identifies the partner storing the data. To get the client state for devices belonging to your own organization, the `partnerId` is in the format: `customerId-*anystring*`. Where the `customerId` is your organization's customer ID and `anystring` is any suffix. This suffix is used in setting up Custom Access Levels in Context-Aware Access. You may use `my_customer` instead of the customer ID for devices managed by your own organization. You may specify `-` in place of the `{device_id}`, so the ClientState resource name can be: `devices/-/deviceUsers/{device_user_resource_id}/clientStates/{partner_id}`. */
  name: string;
}

export const GetDevicesDeviceUsersClientStatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetDevicesDeviceUsersClientStatesRequest>;

export type GetDevicesDeviceUsersClientStatesResponse = ClientState;
export const GetDevicesDeviceUsersClientStatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ClientState;

export type GetDevicesDeviceUsersClientStatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the client state for the device user */
export const getDevicesDeviceUsersClientStates: API.OperationMethod<
  GetDevicesDeviceUsersClientStatesRequest,
  GetDevicesDeviceUsersClientStatesResponse,
  GetDevicesDeviceUsersClientStatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDevicesDeviceUsersClientStatesRequest,
  output: GetDevicesDeviceUsersClientStatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchDevicesDeviceUsersClientStatesRequest {
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. */
  name: string;
  /** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
  customer?: string;
  /** Optional. Comma-separated list of fully qualified names of fields to be updated. If not specified, all updatable fields in ClientState are updated. */
  updateMask?: string;
  /** Request body */
  body?: ClientState;
}

export const PatchDevicesDeviceUsersClientStatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ClientState).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchDevicesDeviceUsersClientStatesRequest>;

export type PatchDevicesDeviceUsersClientStatesResponse = Operation;
export const PatchDevicesDeviceUsersClientStatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchDevicesDeviceUsersClientStatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the client state for the device user **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium */
export const patchDevicesDeviceUsersClientStates: API.OperationMethod<
  PatchDevicesDeviceUsersClientStatesRequest,
  PatchDevicesDeviceUsersClientStatesResponse,
  PatchDevicesDeviceUsersClientStatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDevicesDeviceUsersClientStatesRequest,
  output: PatchDevicesDeviceUsersClientStatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListInboundSsoAssignmentsRequest {
  /** The maximum number of assignments to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as having this maximum value. This may increase in the futue. */
  pageSize?: number;
  /** A page token, received from a previous `ListInboundSsoAssignments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSsoAssignments` must match the call that provided the page token. */
  pageToken?: string;
  /** A CEL expression to filter the results. The only supported filter is filtering by customer. For example: `customer==customers/C0123abc`. Omitting the filter or specifying a filter of `customer==customers/my_customer` will return the assignments for the customer that the caller (authenticated user) belongs to. */
  filter?: string;
}

export const ListInboundSsoAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/inboundSsoAssignments" }),
    svc,
  ) as unknown as Schema.Schema<ListInboundSsoAssignmentsRequest>;

export type ListInboundSsoAssignmentsResponse_Op =
  ListInboundSsoAssignmentsResponse;
export const ListInboundSsoAssignmentsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListInboundSsoAssignmentsResponse;

export type ListInboundSsoAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the InboundSsoAssignments for a `Customer`. */
export const listInboundSsoAssignments: API.PaginatedOperationMethod<
  ListInboundSsoAssignmentsRequest,
  ListInboundSsoAssignmentsResponse_Op,
  ListInboundSsoAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInboundSsoAssignmentsRequest,
  output: ListInboundSsoAssignmentsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetInboundSsoAssignmentsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to fetch. Format: `inboundSsoAssignments/{assignment}` */
  name: string;
}

export const GetInboundSsoAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetInboundSsoAssignmentsRequest>;

export type GetInboundSsoAssignmentsResponse = InboundSsoAssignment;
export const GetInboundSsoAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InboundSsoAssignment;

export type GetInboundSsoAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InboundSsoAssignment. */
export const getInboundSsoAssignments: API.OperationMethod<
  GetInboundSsoAssignmentsRequest,
  GetInboundSsoAssignmentsResponse,
  GetInboundSsoAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInboundSsoAssignmentsRequest,
  output: GetInboundSsoAssignmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchInboundSsoAssignmentsRequest {
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment. */
  name: string;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: InboundSsoAssignment;
}

export const PatchInboundSsoAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InboundSsoAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchInboundSsoAssignmentsRequest>;

export type PatchInboundSsoAssignmentsResponse = Operation;
export const PatchInboundSsoAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchInboundSsoAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority. */
export const patchInboundSsoAssignments: API.OperationMethod<
  PatchInboundSsoAssignmentsRequest,
  PatchInboundSsoAssignmentsResponse,
  PatchInboundSsoAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInboundSsoAssignmentsRequest,
  output: PatchInboundSsoAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateInboundSsoAssignmentsRequest {
  /** Request body */
  body?: InboundSsoAssignment;
}

export const CreateInboundSsoAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(InboundSsoAssignment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/inboundSsoAssignments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateInboundSsoAssignmentsRequest>;

export type CreateInboundSsoAssignmentsResponse = Operation;
export const CreateInboundSsoAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateInboundSsoAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`. */
export const createInboundSsoAssignments: API.OperationMethod<
  CreateInboundSsoAssignmentsRequest,
  CreateInboundSsoAssignmentsResponse,
  CreateInboundSsoAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInboundSsoAssignmentsRequest,
  output: CreateInboundSsoAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInboundSsoAssignmentsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to delete. Format: `inboundSsoAssignments/{assignment}` */
  name: string;
}

export const DeleteInboundSsoAssignmentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteInboundSsoAssignmentsRequest>;

export type DeleteInboundSsoAssignmentsResponse = Operation;
export const DeleteInboundSsoAssignmentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteInboundSsoAssignmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`. */
export const deleteInboundSsoAssignments: API.OperationMethod<
  DeleteInboundSsoAssignmentsRequest,
  DeleteInboundSsoAssignmentsResponse,
  DeleteInboundSsoAssignmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInboundSsoAssignmentsRequest,
  output: DeleteInboundSsoAssignmentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateInboundSamlSsoProfilesRequest {
  /** Request body */
  body?: InboundSamlSsoProfile;
}

export const CreateInboundSamlSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(InboundSamlSsoProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/inboundSamlSsoProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateInboundSamlSsoProfilesRequest>;

export type CreateInboundSamlSsoProfilesResponse = Operation;
export const CreateInboundSamlSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateInboundSamlSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InboundSamlSsoProfile for a customer. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`. */
export const createInboundSamlSsoProfiles: API.OperationMethod<
  CreateInboundSamlSsoProfilesRequest,
  CreateInboundSamlSsoProfilesResponse,
  CreateInboundSamlSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInboundSamlSsoProfilesRequest,
  output: CreateInboundSamlSsoProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInboundSamlSsoProfilesRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSamlSsoProfile to delete. Format: `inboundSamlSsoProfiles/{sso_profile_id}` */
  name: string;
}

export const DeleteInboundSamlSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteInboundSamlSsoProfilesRequest>;

export type DeleteInboundSamlSsoProfilesResponse = Operation;
export const DeleteInboundSamlSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteInboundSamlSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InboundSamlSsoProfile. */
export const deleteInboundSamlSsoProfiles: API.OperationMethod<
  DeleteInboundSamlSsoProfilesRequest,
  DeleteInboundSamlSsoProfilesResponse,
  DeleteInboundSamlSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInboundSamlSsoProfilesRequest,
  output: DeleteInboundSamlSsoProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListInboundSamlSsoProfilesRequest {
  /** The maximum number of InboundSamlSsoProfiles to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100. Requests with page_size greater than that will be silently interpreted as having this maximum value. */
  pageSize?: number;
  /** A [Common Expression Language](https://github.com/google/cel-spec) expression to filter the results. The only supported filter is filtering by customer. For example: `customer=="customers/C0123abc"`. Omitting the filter or specifying a filter of `customer=="customers/my_customer"` will return the profiles for the customer that the caller (authenticated user) belongs to. */
  filter?: string;
  /** A page token, received from a previous `ListInboundSamlSsoProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSamlSsoProfiles` must match the call that provided the page token. */
  pageToken?: string;
}

export const ListInboundSamlSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/inboundSamlSsoProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListInboundSamlSsoProfilesRequest>;

export type ListInboundSamlSsoProfilesResponse_Op =
  ListInboundSamlSsoProfilesResponse;
export const ListInboundSamlSsoProfilesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListInboundSamlSsoProfilesResponse;

export type ListInboundSamlSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InboundSamlSsoProfiles for a customer. */
export const listInboundSamlSsoProfiles: API.PaginatedOperationMethod<
  ListInboundSamlSsoProfilesRequest,
  ListInboundSamlSsoProfilesResponse_Op,
  ListInboundSamlSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInboundSamlSsoProfilesRequest,
  output: ListInboundSamlSsoProfilesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchInboundSamlSsoProfilesRequest {
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile. */
  name: string;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: InboundSamlSsoProfile;
}

export const PatchInboundSamlSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InboundSamlSsoProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchInboundSamlSsoProfilesRequest>;

export type PatchInboundSamlSsoProfilesResponse = Operation;
export const PatchInboundSamlSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchInboundSamlSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an InboundSamlSsoProfile. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`. */
export const patchInboundSamlSsoProfiles: API.OperationMethod<
  PatchInboundSamlSsoProfilesRequest,
  PatchInboundSamlSsoProfilesResponse,
  PatchInboundSamlSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInboundSamlSsoProfilesRequest,
  output: PatchInboundSamlSsoProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetInboundSamlSsoProfilesRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSamlSsoProfile to get. Format: `inboundSamlSsoProfiles/{sso_profile_id}` */
  name: string;
}

export const GetInboundSamlSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetInboundSamlSsoProfilesRequest>;

export type GetInboundSamlSsoProfilesResponse = InboundSamlSsoProfile;
export const GetInboundSamlSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InboundSamlSsoProfile;

export type GetInboundSamlSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InboundSamlSsoProfile. */
export const getInboundSamlSsoProfiles: API.OperationMethod<
  GetInboundSamlSsoProfilesRequest,
  GetInboundSamlSsoProfilesResponse,
  GetInboundSamlSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInboundSamlSsoProfilesRequest,
  output: GetInboundSamlSsoProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListInboundSamlSsoProfilesIdpCredentialsRequest {
  /** A page token, received from a previous `ListIdpCredentials` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdpCredentials` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent, which owns this collection of `IdpCredential`s. Format: `inboundSamlSsoProfiles/{sso_profile_id}` */
  parent: string;
  /** The maximum number of `IdpCredential`s to return. The service may return fewer than this value. */
  pageSize?: number;
}

export const ListInboundSamlSsoProfilesIdpCredentialsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/idpCredentials" }),
    svc,
  ) as unknown as Schema.Schema<ListInboundSamlSsoProfilesIdpCredentialsRequest>;

export type ListInboundSamlSsoProfilesIdpCredentialsResponse =
  ListIdpCredentialsResponse;
export const ListInboundSamlSsoProfilesIdpCredentialsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListIdpCredentialsResponse;

export type ListInboundSamlSsoProfilesIdpCredentialsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of IdpCredentials in an InboundSamlSsoProfile. */
export const listInboundSamlSsoProfilesIdpCredentials: API.PaginatedOperationMethod<
  ListInboundSamlSsoProfilesIdpCredentialsRequest,
  ListInboundSamlSsoProfilesIdpCredentialsResponse,
  ListInboundSamlSsoProfilesIdpCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInboundSamlSsoProfilesIdpCredentialsRequest,
  output: ListInboundSamlSsoProfilesIdpCredentialsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AddInboundSamlSsoProfilesIdpCredentialsRequest {
  /** Required. The InboundSamlSsoProfile that owns the IdpCredential. Format: `inboundSamlSsoProfiles/{sso_profile_id}` */
  parent: string;
  /** Request body */
  body?: AddIdpCredentialRequest;
}

export const AddInboundSamlSsoProfilesIdpCredentialsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AddIdpCredentialRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/idpCredentials:add",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddInboundSamlSsoProfilesIdpCredentialsRequest>;

export type AddInboundSamlSsoProfilesIdpCredentialsResponse = Operation;
export const AddInboundSamlSsoProfilesIdpCredentialsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddInboundSamlSsoProfilesIdpCredentialsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds an IdpCredential. Up to 2 credentials are allowed. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`. */
export const addInboundSamlSsoProfilesIdpCredentials: API.OperationMethod<
  AddInboundSamlSsoProfilesIdpCredentialsRequest,
  AddInboundSamlSsoProfilesIdpCredentialsResponse,
  AddInboundSamlSsoProfilesIdpCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddInboundSamlSsoProfilesIdpCredentialsRequest,
  output: AddInboundSamlSsoProfilesIdpCredentialsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInboundSamlSsoProfilesIdpCredentialsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the IdpCredential to delete. Format: `inboundSamlSsoProfiles/{sso_profile_id}/idpCredentials/{idp_credential_id}` */
  name: string;
}

export const DeleteInboundSamlSsoProfilesIdpCredentialsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteInboundSamlSsoProfilesIdpCredentialsRequest>;

export type DeleteInboundSamlSsoProfilesIdpCredentialsResponse = Operation;
export const DeleteInboundSamlSsoProfilesIdpCredentialsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteInboundSamlSsoProfilesIdpCredentialsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an IdpCredential. */
export const deleteInboundSamlSsoProfilesIdpCredentials: API.OperationMethod<
  DeleteInboundSamlSsoProfilesIdpCredentialsRequest,
  DeleteInboundSamlSsoProfilesIdpCredentialsResponse,
  DeleteInboundSamlSsoProfilesIdpCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInboundSamlSsoProfilesIdpCredentialsRequest,
  output: DeleteInboundSamlSsoProfilesIdpCredentialsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetInboundSamlSsoProfilesIdpCredentialsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the IdpCredential to retrieve. Format: `inboundSamlSsoProfiles/{sso_profile_id}/idpCredentials/{idp_credential_id}` */
  name: string;
}

export const GetInboundSamlSsoProfilesIdpCredentialsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetInboundSamlSsoProfilesIdpCredentialsRequest>;

export type GetInboundSamlSsoProfilesIdpCredentialsResponse = IdpCredential;
export const GetInboundSamlSsoProfilesIdpCredentialsResponse =
  /*@__PURE__*/ /*#__PURE__*/ IdpCredential;

export type GetInboundSamlSsoProfilesIdpCredentialsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an IdpCredential. */
export const getInboundSamlSsoProfilesIdpCredentials: API.OperationMethod<
  GetInboundSamlSsoProfilesIdpCredentialsRequest,
  GetInboundSamlSsoProfilesIdpCredentialsResponse,
  GetInboundSamlSsoProfilesIdpCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInboundSamlSsoProfilesIdpCredentialsRequest,
  output: GetInboundSamlSsoProfilesIdpCredentialsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListInboundOidcSsoProfilesRequest {
  /** A [Common Expression Language](https://github.com/google/cel-spec) expression to filter the results. The only supported filter is filtering by customer. For example: `customer=="customers/C0123abc"`. Omitting the filter or specifying a filter of `customer=="customers/my_customer"` will return the profiles for the customer that the caller (authenticated user) belongs to. Specifying a filter of `customer==""` will return the global shared OIDC profiles. */
  filter?: string;
  /** A page token, received from a previous `ListInboundOidcSsoProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundOidcSsoProfiles` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of InboundOidcSsoProfiles to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100. Requests with page_size greater than that will be silently interpreted as having this maximum value. */
  pageSize?: number;
}

export const ListInboundOidcSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/inboundOidcSsoProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListInboundOidcSsoProfilesRequest>;

export type ListInboundOidcSsoProfilesResponse_Op =
  ListInboundOidcSsoProfilesResponse;
export const ListInboundOidcSsoProfilesResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListInboundOidcSsoProfilesResponse;

export type ListInboundOidcSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InboundOidcSsoProfile objects for a Google enterprise customer. */
export const listInboundOidcSsoProfiles: API.PaginatedOperationMethod<
  ListInboundOidcSsoProfilesRequest,
  ListInboundOidcSsoProfilesResponse_Op,
  ListInboundOidcSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInboundOidcSsoProfilesRequest,
  output: ListInboundOidcSsoProfilesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchInboundOidcSsoProfilesRequest {
  /** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the OIDC SSO profile. */
  name: string;
  /** Required. The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: InboundOidcSsoProfile;
}

export const PatchInboundOidcSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(InboundOidcSsoProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchInboundOidcSsoProfilesRequest>;

export type PatchInboundOidcSsoProfilesResponse = Operation;
export const PatchInboundOidcSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchInboundOidcSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an InboundOidcSsoProfile. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`. */
export const patchInboundOidcSsoProfiles: API.OperationMethod<
  PatchInboundOidcSsoProfilesRequest,
  PatchInboundOidcSsoProfilesResponse,
  PatchInboundOidcSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInboundOidcSsoProfilesRequest,
  output: PatchInboundOidcSsoProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetInboundOidcSsoProfilesRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundOidcSsoProfile to get. Format: `inboundOidcSsoProfiles/{sso_profile_id}` */
  name: string;
}

export const GetInboundOidcSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetInboundOidcSsoProfilesRequest>;

export type GetInboundOidcSsoProfilesResponse = InboundOidcSsoProfile;
export const GetInboundOidcSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InboundOidcSsoProfile;

export type GetInboundOidcSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InboundOidcSsoProfile. */
export const getInboundOidcSsoProfiles: API.OperationMethod<
  GetInboundOidcSsoProfilesRequest,
  GetInboundOidcSsoProfilesResponse,
  GetInboundOidcSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInboundOidcSsoProfilesRequest,
  output: GetInboundOidcSsoProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateInboundOidcSsoProfilesRequest {
  /** Request body */
  body?: InboundOidcSsoProfile;
}

export const CreateInboundOidcSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(InboundOidcSsoProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/inboundOidcSsoProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateInboundOidcSsoProfilesRequest>;

export type CreateInboundOidcSsoProfilesResponse = Operation;
export const CreateInboundOidcSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateInboundOidcSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InboundOidcSsoProfile for a customer. When the target customer has enabled [Multi-party approval for sensitive actions](https://support.google.com/a/answer/13790448), the `Operation` in the response will have `"done": false`, it will not have a response, and the metadata will have `"state": "awaiting-multi-party-approval"`. */
export const createInboundOidcSsoProfiles: API.OperationMethod<
  CreateInboundOidcSsoProfilesRequest,
  CreateInboundOidcSsoProfilesResponse,
  CreateInboundOidcSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInboundOidcSsoProfilesRequest,
  output: CreateInboundOidcSsoProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInboundOidcSsoProfilesRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundOidcSsoProfile to delete. Format: `inboundOidcSsoProfiles/{sso_profile_id}` */
  name: string;
}

export const DeleteInboundOidcSsoProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteInboundOidcSsoProfilesRequest>;

export type DeleteInboundOidcSsoProfilesResponse = Operation;
export const DeleteInboundOidcSsoProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteInboundOidcSsoProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InboundOidcSsoProfile. */
export const deleteInboundOidcSsoProfiles: API.OperationMethod<
  DeleteInboundOidcSsoProfilesRequest,
  DeleteInboundOidcSsoProfilesResponse,
  DeleteInboundOidcSsoProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInboundOidcSsoProfilesRequest,
  output: DeleteInboundOidcSsoProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrgUnitsMembershipsRequest {
  /** Required. Immutable. Customer that this OrgMembership belongs to. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization. */
  customer?: string;
  /** The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the `type` (e.g., `type == 'shared_drive'`). */
  filter?: string;
  /** A page token, received from a previous `OrgMembershipsService.ListOrgMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrgMembershipsRequest` must match the call that provided the page token. */
  pageToken?: string;
  /** Required. Immutable. OrgUnit which is queried for a list of memberships. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). */
  parent: string;
  /** The maximum number of results to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will default to 50. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as 100. */
  pageSize?: number;
}

export const ListOrgUnitsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.optional(Schema.String).pipe(T.HttpQuery("customer")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/memberships" }),
    svc,
  ) as unknown as Schema.Schema<ListOrgUnitsMembershipsRequest>;

export type ListOrgUnitsMembershipsResponse = ListOrgMembershipsResponse;
export const ListOrgUnitsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOrgMembershipsResponse;

export type ListOrgUnitsMembershipsError = DefaultErrors | NotFound | Forbidden;

/** List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits) */
export const listOrgUnitsMemberships: API.PaginatedOperationMethod<
  ListOrgUnitsMembershipsRequest,
  ListOrgUnitsMembershipsResponse,
  ListOrgUnitsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrgUnitsMembershipsRequest,
  output: ListOrgUnitsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MoveOrgUnitsMembershipsRequest {
  /** Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). To manage a Membership without specifying source `orgUnitId`, this API also supports the wildcard character '-' for `$orgUnitId` per https://google.aip.dev/159. The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of OrgMembership.EntityType, and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE. */
  name: string;
  /** Request body */
  body?: MoveOrgMembershipRequest;
}

export const MoveOrgUnitsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MoveOrgMembershipRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<MoveOrgUnitsMembershipsRequest>;

export type MoveOrgUnitsMembershipsResponse = Operation;
export const MoveOrgUnitsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type MoveOrgUnitsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards. */
export const moveOrgUnitsMemberships: API.OperationMethod<
  MoveOrgUnitsMembershipsRequest,
  MoveOrgUnitsMembershipsResponse,
  MoveOrgUnitsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: MoveOrgUnitsMembershipsRequest,
  output: MoveOrgUnitsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchGroupsRequest {
  /** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
  name: string;
  /** Required. The names of fields to update. May only contain the following field names: `display_name`, `description`, `labels`, `dynamic_group_metadata`, `posix_groups`. */
  updateMask?: string;
  /** Request body */
  body?: Group;
}

export const PatchGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  body: Schema.optional(Group).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
  svc,
) as unknown as Schema.Schema<PatchGroupsRequest>;

export type PatchGroupsResponse = Operation;
export const PatchGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a `Group`. */
export const patchGroups: API.OperationMethod<
  PatchGroupsRequest,
  PatchGroupsResponse,
  PatchGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchGroupsRequest,
  output: PatchGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupGroupsRequest {
  /** The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
  "groupKey.id"?: string;
  /** The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
  "groupKey.namespace"?: string;
}

export const LookupGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "groupKey.id": Schema.optional(Schema.String).pipe(
    T.HttpQuery("groupKey.id"),
  ),
  "groupKey.namespace": Schema.optional(Schema.String).pipe(
    T.HttpQuery("groupKey.namespace"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/groups:lookup" }),
  svc,
) as unknown as Schema.Schema<LookupGroupsRequest>;

export type LookupGroupsResponse = LookupGroupNameResponse;
export const LookupGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupGroupNameResponse;

export type LookupGroupsError = DefaultErrors | NotFound | Forbidden;

/** Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`. */
export const lookupGroups: API.OperationMethod<
  LookupGroupsRequest,
  LookupGroupsResponse,
  LookupGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupGroupsRequest,
  output: LookupGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchGroupsRequest {
  /** Required. The search query. * Must be specified in [Common Expression Language](https://opensource.google/projects/cel). * Must contain equality operators on the parent, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) * Can contain optional inclusion operators on `labels` such as `'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). * Can contain an optional equality operator on `domain_name`. e.g. `domain_name == 'examplepetstore.com'` * Can contain optional `startsWith/contains/equality` operators on `group_key`, e.g. `group_key.startsWith('dev')`, `group_key.contains('dev'), group_key == 'dev@examplepetstore.com'` * Can contain optional `startsWith/contains/equality` operators on `display_name`, such as `display_name.startsWith('dev')` , `display_name.contains('dev')`, `display_name == 'dev'` */
  query?: string;
  /** The ordering of groups for the display name or email in the search groups response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending name: order_by="display_name" Sort by the descending group key email: order_by="group_key desc" */
  orderBy?: string;
  /** The `next_page_token` value returned from a previous search request, if any. */
  pageToken?: string;
  /** The level of detail to be returned. If unspecified, defaults to `View.BASIC`. */
  view?: "BASIC" | "FULL" | (string & {});
  /** The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`. */
  pageSize?: number;
}

export const SearchGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/groups:search" }),
  svc,
) as unknown as Schema.Schema<SearchGroupsRequest>;

export type SearchGroupsResponse_Op = SearchGroupsResponse;
export const SearchGroupsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ SearchGroupsResponse;

export type SearchGroupsError = DefaultErrors | NotFound | Forbidden;

/** Searches for `Group` resources matching a specified query. */
export const searchGroups: API.PaginatedOperationMethod<
  SearchGroupsRequest,
  SearchGroupsResponse_Op,
  SearchGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchGroupsRequest,
  output: SearchGroupsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSecuritySettingsGroupsRequest {
  /** Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`. */
  name: string;
  /** Required. The fully-qualified names of fields to update. May only contain the following field: `member_restriction.query`. */
  updateMask?: string;
  /** Request body */
  body?: SecuritySettings;
}

export const UpdateSecuritySettingsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SecuritySettings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSecuritySettingsGroupsRequest>;

export type UpdateSecuritySettingsGroupsResponse = Operation;
export const UpdateSecuritySettingsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSecuritySettingsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Security Settings */
export const updateSecuritySettingsGroups: API.OperationMethod<
  UpdateSecuritySettingsGroupsRequest,
  UpdateSecuritySettingsGroupsResponse,
  UpdateSecuritySettingsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSecuritySettingsGroupsRequest,
  output: UpdateSecuritySettingsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSecuritySettingsGroupsRequest {
  /** Required. The security settings to retrieve. Format: `groups/{group_id}/securitySettings` */
  name: string;
  /** Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`. */
  readMask?: string;
}

export const GetSecuritySettingsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    readMask: Schema.optional(Schema.String).pipe(T.HttpQuery("readMask")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSecuritySettingsGroupsRequest>;

export type GetSecuritySettingsGroupsResponse = SecuritySettings;
export const GetSecuritySettingsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SecuritySettings;

export type GetSecuritySettingsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get Security Settings */
export const getSecuritySettingsGroups: API.OperationMethod<
  GetSecuritySettingsGroupsRequest,
  GetSecuritySettingsGroupsResponse,
  GetSecuritySettingsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSecuritySettingsGroupsRequest,
  output: GetSecuritySettingsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteGroupsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group_id}`. */
  name: string;
}

export const DeleteGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
  svc,
) as unknown as Schema.Schema<DeleteGroupsRequest>;

export type DeleteGroupsResponse = Operation;
export const DeleteGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a `Group`. */
export const deleteGroups: API.OperationMethod<
  DeleteGroupsRequest,
  DeleteGroupsResponse,
  DeleteGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteGroupsRequest,
  output: DeleteGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetGroupsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group` to retrieve. Must be of the form `groups/{group_id}`. */
  name: string;
}

export const GetGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetGroupsRequest>;

export type GetGroupsResponse = Group;
export const GetGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Group;

export type GetGroupsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a `Group`. */
export const getGroups: API.OperationMethod<
  GetGroupsRequest,
  GetGroupsResponse,
  GetGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGroupsRequest,
  output: GetGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListGroupsRequest {
  /** Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) */
  parent?: string;
  /** The level of detail to be returned. If unspecified, defaults to `View.BASIC`. */
  view?: "VIEW_UNSPECIFIED" | "BASIC" | "FULL" | (string & {});
  /** The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`. */
  pageSize?: number;
  /** The `next_page_token` value returned from a previous list request, if any. */
  pageToken?: string;
}

export const ListGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1beta1/groups" }),
  svc,
) as unknown as Schema.Schema<ListGroupsRequest>;

export type ListGroupsResponse_Op = ListGroupsResponse;
export const ListGroupsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupsResponse;

export type ListGroupsError = DefaultErrors | NotFound | Forbidden;

/** Lists the `Group` resources under a customer or namespace. */
export const listGroups: API.PaginatedOperationMethod<
  ListGroupsRequest,
  ListGroupsResponse_Op,
  ListGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsRequest,
  output: ListGroupsResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateGroupsRequest {
  /** Required. The initial configuration option for the `Group`. */
  initialGroupConfig?:
    | "INITIAL_GROUP_CONFIG_UNSPECIFIED"
    | "WITH_INITIAL_OWNER"
    | "EMPTY"
    | (string & {});
  /** Request body */
  body?: Group;
}

export const CreateGroupsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialGroupConfig: Schema.optional(Schema.String).pipe(
    T.HttpQuery("initialGroupConfig"),
  ),
  body: Schema.optional(Group).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1beta1/groups", hasBody: true }),
  svc,
) as unknown as Schema.Schema<CreateGroupsRequest>;

export type CreateGroupsResponse = Operation;
export const CreateGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a `Group`. */
export const createGroups: API.OperationMethod<
  CreateGroupsRequest,
  CreateGroupsResponse,
  CreateGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateGroupsRequest,
  output: CreateGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupGroupsMembershipsRequest {
  /** The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
  "memberKey.namespace"?: string;
  /** Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`. */
  parent: string;
  /** The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
  "memberKey.id"?: string;
}

export const LookupGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "memberKey.namespace": Schema.optional(Schema.String).pipe(
      T.HttpQuery("memberKey.namespace"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "memberKey.id": Schema.optional(Schema.String).pipe(
      T.HttpQuery("memberKey.id"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/memberships:lookup" }),
    svc,
  ) as unknown as Schema.Schema<LookupGroupsMembershipsRequest>;

export type LookupGroupsMembershipsResponse = LookupMembershipNameResponse;
export const LookupGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupMembershipNameResponse;

export type LookupGroupsMembershipsError = DefaultErrors | NotFound | Forbidden;

/** Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`. */
export const lookupGroupsMemberships: API.OperationMethod<
  LookupGroupsMembershipsRequest,
  LookupGroupsMembershipsResponse,
  LookupGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupGroupsMembershipsRequest,
  output: LookupGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetMembershipGraphGroupsMembershipsRequest {
  /** Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels` */
  query?: string;
  /** Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group to which the Membership belongs to. group_id can be a wildcard collection id "-". When `group_id` is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned. */
  parent: string;
}

export const GetMembershipGraphGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/memberships:getMembershipGraph",
    }),
    svc,
  ) as unknown as Schema.Schema<GetMembershipGraphGroupsMembershipsRequest>;

export type GetMembershipGraphGroupsMembershipsResponse = Operation;
export const GetMembershipGraphGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetMembershipGraphGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member. */
export const getMembershipGraphGroupsMemberships: API.OperationMethod<
  GetMembershipGraphGroupsMembershipsRequest,
  GetMembershipGraphGroupsMembershipsResponse,
  GetMembershipGraphGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetMembershipGraphGroupsMembershipsRequest,
  output: GetMembershipGraphGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteGroupsMembershipsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete. Must be of the form `groups/{group_id}/memberships/{membership_id}`. */
  name: string;
}

export const DeleteGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteGroupsMembershipsRequest>;

export type DeleteGroupsMembershipsResponse = Operation;
export const DeleteGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a `Membership`. */
export const deleteGroupsMemberships: API.OperationMethod<
  DeleteGroupsMembershipsRequest,
  DeleteGroupsMembershipsResponse,
  DeleteGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteGroupsMembershipsRequest,
  output: DeleteGroupsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CheckTransitiveMembershipGroupsMembershipsRequest {
  /** [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group_id}`, where `group_id` is the unique id assigned to the Group to which the Membership belongs to. */
  parent: string;
  /** Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'` */
  query?: string;
}

export const CheckTransitiveMembershipGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/memberships:checkTransitiveMembership",
    }),
    svc,
  ) as unknown as Schema.Schema<CheckTransitiveMembershipGroupsMembershipsRequest>;

export type CheckTransitiveMembershipGroupsMembershipsResponse =
  CheckTransitiveMembershipResponse;
export const CheckTransitiveMembershipGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckTransitiveMembershipResponse;

export type CheckTransitiveMembershipGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group. */
export const checkTransitiveMembershipGroupsMemberships: API.OperationMethod<
  CheckTransitiveMembershipGroupsMembershipsRequest,
  CheckTransitiveMembershipGroupsMembershipsResponse,
  CheckTransitiveMembershipGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckTransitiveMembershipGroupsMembershipsRequest,
  output: CheckTransitiveMembershipGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchDirectGroupsGroupsMembershipsRequest {
  /** Required. A CEL expression that MUST include member specification AND label(s). Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && 'label_value' in labels` */
  query?: string;
  /** The ordering of membership relation for the display name or email in the response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending display name: order_by="group_name" or order_by="group_name asc". Sort by the descending display name: order_by="group_name desc". Sort by the ascending group key: order_by="group_key" or order_by="group_key asc". Sort by the descending group key: order_by="group_key desc". */
  orderBy?: string;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
  /** [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: groups/{group_id}, where group_id is always '-' as this API will search across all groups for a given member. */
  parent: string;
  /** The default page size is 200 (max 1000). */
  pageSize?: number;
}

export const SearchDirectGroupsGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/memberships:searchDirectGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<SearchDirectGroupsGroupsMembershipsRequest>;

export type SearchDirectGroupsGroupsMembershipsResponse =
  SearchDirectGroupsResponse;
export const SearchDirectGroupsGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchDirectGroupsResponse;

export type SearchDirectGroupsGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches direct groups of a member. */
export const searchDirectGroupsGroupsMemberships: API.PaginatedOperationMethod<
  SearchDirectGroupsGroupsMembershipsRequest,
  SearchDirectGroupsGroupsMembershipsResponse,
  SearchDirectGroupsGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchDirectGroupsGroupsMembershipsRequest,
  output: SearchDirectGroupsGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetGroupsMembershipsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve. Must be of the form `groups/{group_id}/memberships/{membership_id}`. */
  name: string;
}

export const GetGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetGroupsMembershipsRequest>;

export type GetGroupsMembershipsResponse = Membership;
export const GetGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Membership;

export type GetGroupsMembershipsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a `Membership`. */
export const getGroupsMemberships: API.OperationMethod<
  GetGroupsMembershipsRequest,
  GetGroupsMembershipsResponse,
  GetGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetGroupsMembershipsRequest,
  output: GetGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchTransitiveMembershipsGroupsMembershipsRequest {
  /** [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group. */
  parent: string;
  /** The default page size is 200 (max 1000). */
  pageSize?: number;
  /** The next_page_token value returned from a previous list request, if any. */
  pageToken?: string;
}

export const SearchTransitiveMembershipsGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/memberships:searchTransitiveMemberships",
    }),
    svc,
  ) as unknown as Schema.Schema<SearchTransitiveMembershipsGroupsMembershipsRequest>;

export type SearchTransitiveMembershipsGroupsMembershipsResponse =
  SearchTransitiveMembershipsResponse;
export const SearchTransitiveMembershipsGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchTransitiveMembershipsResponse;

export type SearchTransitiveMembershipsGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships. */
export const searchTransitiveMembershipsGroupsMemberships: API.PaginatedOperationMethod<
  SearchTransitiveMembershipsGroupsMembershipsRequest,
  SearchTransitiveMembershipsGroupsMembershipsResponse,
  SearchTransitiveMembershipsGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchTransitiveMembershipsGroupsMembershipsRequest,
  output: SearchTransitiveMembershipsGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchTransitiveGroupsGroupsMembershipsRequest {
  /** Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels` Query may optionally contain equality operators on the parent of the group restricting the search within a particular customer, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). This filtering is only supported for Admins with groups read permissions on the input customer. Example query: `member_key_id == 'member_key_id_value' && in labels && parent == 'customers/C046psxkn'` */
  query?: string;
  /** The `next_page_token` value returned from a previous list request, if any. */
  pageToken?: string;
  /** [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is always '-' as this API will search across all groups for a given member. */
  parent: string;
  /** The default page size is 200 (max 1000). */
  pageSize?: number;
}

export const SearchTransitiveGroupsGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/memberships:searchTransitiveGroups",
    }),
    svc,
  ) as unknown as Schema.Schema<SearchTransitiveGroupsGroupsMembershipsRequest>;

export type SearchTransitiveGroupsGroupsMembershipsResponse =
  SearchTransitiveGroupsResponse;
export const SearchTransitiveGroupsGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchTransitiveGroupsResponse;

export type SearchTransitiveGroupsGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups. */
export const searchTransitiveGroupsGroupsMemberships: API.PaginatedOperationMethod<
  SearchTransitiveGroupsGroupsMembershipsRequest,
  SearchTransitiveGroupsGroupsMembershipsResponse,
  SearchTransitiveGroupsGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchTransitiveGroupsGroupsMembershipsRequest,
  output: SearchTransitiveGroupsGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListGroupsMembershipsRequest {
  /** The `next_page_token` value returned from a previous search request, if any. */
  pageToken?: string;
  /** Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`. */
  parent: string;
  /** The level of detail to be returned. If unspecified, defaults to `MembershipView.BASIC`. */
  view?: "BASIC" | "FULL" | (string & {});
  /** The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`. */
  pageSize?: number;
}

export const ListGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/memberships" }),
    svc,
  ) as unknown as Schema.Schema<ListGroupsMembershipsRequest>;

export type ListGroupsMembershipsResponse = ListMembershipsResponse;
export const ListGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMembershipsResponse;

export type ListGroupsMembershipsError = DefaultErrors | NotFound | Forbidden;

/** Lists the `Membership`s within a `Group`. */
export const listGroupsMemberships: API.PaginatedOperationMethod<
  ListGroupsMembershipsRequest,
  ListGroupsMembershipsResponse,
  ListGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListGroupsMembershipsRequest,
  output: ListGroupsMembershipsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateGroupsMembershipsRequest {
  /** Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group_id}`. */
  parent: string;
  /** Request body */
  body?: Membership;
}

export const CreateGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/memberships",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateGroupsMembershipsRequest>;

export type CreateGroupsMembershipsResponse = Operation;
export const CreateGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a `Membership`. */
export const createGroupsMemberships: API.OperationMethod<
  CreateGroupsMembershipsRequest,
  CreateGroupsMembershipsResponse,
  CreateGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateGroupsMembershipsRequest,
  output: CreateGroupsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ModifyMembershipRolesGroupsMembershipsRequest {
  /** Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`. */
  name: string;
  /** Request body */
  body?: ModifyMembershipRolesRequest;
}

export const ModifyMembershipRolesGroupsMembershipsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ModifyMembershipRolesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:modifyMembershipRoles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ModifyMembershipRolesGroupsMembershipsRequest>;

export type ModifyMembershipRolesGroupsMembershipsResponse =
  ModifyMembershipRolesResponse;
export const ModifyMembershipRolesGroupsMembershipsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ModifyMembershipRolesResponse;

export type ModifyMembershipRolesGroupsMembershipsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Modifies the `MembershipRole`s of a `Membership`. */
export const modifyMembershipRolesGroupsMemberships: API.OperationMethod<
  ModifyMembershipRolesGroupsMembershipsRequest,
  ModifyMembershipRolesGroupsMembershipsResponse,
  ModifyMembershipRolesGroupsMembershipsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ModifyMembershipRolesGroupsMembershipsRequest,
  output: ModifyMembershipRolesGroupsMembershipsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
