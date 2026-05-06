// ==========================================================================
// Looker (Google Cloud core) API (looker v1)
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
  name: "looker",
  version: "v1",
  rootUrl: "https://looker.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface ImportInstanceRequest {
  /** Path to the import folder in Google Cloud Storage, in the form `gs://bucketName/folderName`. */
  gcsUri?: string;
}

export const ImportInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsUri: Schema.optional(Schema.String),
}).annotate({ identifier: "ImportInstanceRequest" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locationId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface OperationMetadata {
  /** API version used to start the operation. */
  apiVersion?: string;
  /** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Server-defined resource path for the target of the operation. */
  target?: string;
  /** The time the operation finished running. */
  endTime?: string;
  /** Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Name of the verb executed by the operation. */
  verb?: string;
  /** The time the operation was created. */
  createTime?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiVersion: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  target: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  message: Schema.optional(Schema.String),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  done: Schema.optional(Schema.Boolean),
  error: Schema.optional(Status),
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface Looker_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const Looker_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  month: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  year: Schema.optional(Schema.Number),
}).annotate({ identifier: "Looker_Date" });

export interface TimeOfDay {
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  seconds: Schema.optional(Schema.Number),
  hours: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "TimeOfDay" });

export interface DenyMaintenancePeriod {
  /** Required. Start date of the deny maintenance period. */
  startDate?: Looker_Date;
  /** Required. Time in UTC when the period starts and ends. */
  time?: TimeOfDay;
  /** Required. End date of the deny maintenance period. */
  endDate?: Looker_Date;
}

export const DenyMaintenancePeriod = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startDate: Schema.optional(Looker_Date),
  time: Schema.optional(TimeOfDay),
  endDate: Schema.optional(Looker_Date),
}).annotate({ identifier: "DenyMaintenancePeriod" });

export interface ExportMetadataEncryptionKey {
  /** Name of the CMEK. */
  cmek?: string;
  /** Version of the CMEK. */
  version?: string;
}

export const ExportMetadataEncryptionKey =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cmek: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportMetadataEncryptionKey" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface ServiceAttachment {
  /** Optional. Fully qualified domain name that will be used in the private DNS record created for the service attachment. */
  localFqdn?: string;
  /** Optional. List of fully qualified domain names that will be used in the private DNS record created for the service attachment. */
  localFqdns?: ReadonlyArray<string>;
  /** Output only. Reason the service attachment creation failed. This value will only be populated if the service attachment encounters an issue during provisioning. */
  failureReason?: string;
  /** Required. URI of the service attachment to connect to. Format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment} */
  targetServiceAttachmentUri?: string;
  /** Output only. Connection status. */
  connectionStatus?:
    | "UNKNOWN"
    | "ACCEPTED"
    | "PENDING"
    | "REJECTED"
    | "NEEDS_ATTENTION"
    | "CLOSED"
    | (string & {});
}

export const ServiceAttachment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  localFqdn: Schema.optional(Schema.String),
  localFqdns: Schema.optional(Schema.Array(Schema.String)),
  failureReason: Schema.optional(Schema.String),
  targetServiceAttachmentUri: Schema.optional(Schema.String),
  connectionStatus: Schema.optional(Schema.String),
}).annotate({ identifier: "ServiceAttachment" });

export interface PscConfig {
  /** Output only. URI of the Looker service attachment. */
  lookerServiceAttachmentUri?: string;
  /** Optional. List of egress service attachment configurations. */
  serviceAttachments?: ReadonlyArray<ServiceAttachment>;
  /** Optional. List of VPCs that are allowed ingress into looker. Format: projects/{project}/global/networks/{network} */
  allowedVpcs?: ReadonlyArray<string>;
}

export const PscConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lookerServiceAttachmentUri: Schema.optional(Schema.String),
  serviceAttachments: Schema.optional(Schema.Array(ServiceAttachment)),
  allowedVpcs: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PscConfig" });

export interface AdminSettings {
  /** Email domain allowlist for the instance. */
  allowedEmailDomains?: ReadonlyArray<string>;
}

export const AdminSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowedEmailDomains: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AdminSettings" });

export interface MaintenanceSchedule {
  /** The scheduled start time for the maintenance. */
  startTime?: string;
  /** The scheduled end time for the maintenance. */
  endTime?: string;
}

export const MaintenanceSchedule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "MaintenanceSchedule" });

export interface IngressIpAllowlistRule {
  /** Optional. The IP range to allow ingress traffic from. */
  ipRange?: string;
  /** Optional. Description for the IP range. */
  description?: string;
}

export const IngressIpAllowlistRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ipRange: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  },
).annotate({ identifier: "IngressIpAllowlistRule" });

export interface IngressIpAllowlistConfig {
  /** Optional. Whether ingress IP allowlist functionality is enabled on the Looker instance. */
  enabled?: boolean;
  /** Optional. Whether google service connections are enabled for the instance. */
  googleServicesEnabled?: boolean;
  /** Optional. List of IP range rules to allow ingress traffic. */
  allowlistRules?: ReadonlyArray<IngressIpAllowlistRule>;
}

export const IngressIpAllowlistConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    googleServicesEnabled: Schema.optional(Schema.Boolean),
    allowlistRules: Schema.optional(Schema.Array(IngressIpAllowlistRule)),
  }).annotate({ identifier: "IngressIpAllowlistConfig" });

export interface MaintenanceWindow {
  /** Required. Time in UTC when the period starts. Maintenance will be scheduled within 60 minutes. */
  startTime?: TimeOfDay;
  /** Required. Day of the week for this MaintenanceWindow (in UTC). */
  dayOfWeek?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
}

export const MaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(TimeOfDay),
  dayOfWeek: Schema.optional(Schema.String),
}).annotate({ identifier: "MaintenanceWindow" });

export interface EncryptionConfig {
  /** Output only. Status of the CMEK key. */
  kmsKeyState?:
    | "KMS_KEY_STATE_UNSPECIFIED"
    | "VALID"
    | "REVOKED"
    | (string & {});
  /** Name of the CMEK key in KMS (input parameter). */
  kmsKeyName?: string;
  /** Output only. Full name and version of the CMEK key currently in use to encrypt Looker data. Format: `projects/{project}/locations/{location}/keyRings/{ring}/cryptoKeys/{key}/cryptoKeyVersions/{version}`. Empty if CMEK is not configured in this instance. */
  kmsKeyNameVersion?: string;
}

export const EncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kmsKeyState: Schema.optional(Schema.String),
  kmsKeyName: Schema.optional(Schema.String),
  kmsKeyNameVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "EncryptionConfig" });

export interface UserMetadata {
  /** Optional. The number of additional viewer users the instance owner has purchased. */
  additionalViewerUserCount?: number;
  /** Optional. The number of additional standard users the instance owner has purchased. */
  additionalStandardUserCount?: number;
  /** Optional. The number of additional developer users the instance owner has purchased. */
  additionalDeveloperUserCount?: number;
}

export const UserMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  additionalViewerUserCount: Schema.optional(Schema.Number),
  additionalStandardUserCount: Schema.optional(Schema.Number),
  additionalDeveloperUserCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "UserMetadata" });

export interface OAuthConfig {
  /** Input only. Client secret from an external OAuth application. This is an input-only field, and thus will not be set in any responses. */
  clientSecret?: string;
  /** Input only. Client ID from an external OAuth application. This is an input-only field, and thus will not be set in any responses. */
  clientId?: string;
  /** Optional. Whether to use the shared OAuth client. Instances specifying this field do not need to provide client_id and client_secret. */
  sharedOauthClientEnabled?: boolean;
}

export const OAuthConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientSecret: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
  sharedOauthClientEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "OAuthConfig" });

export interface CustomDomain {
  /** Domain state. */
  state?:
    | "CUSTOM_DOMAIN_STATE_UNSPECIFIED"
    | "UNVERIFIED"
    | "VERIFIED"
    | "MODIFYING"
    | "AVAILABLE"
    | "UNAVAILABLE"
    | "UNKNOWN"
    | (string & {});
  /** Domain name. */
  domain?: string;
}

export const CustomDomain = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomDomain" });

export interface PeriodicExportConfig {
  /** Required. Cloud Storage bucket URI for periodic export. Format: gs://{bucket_name} */
  gcsUri?: string;
  /** Required. Time in UTC to start the periodic export job. */
  startTime?: TimeOfDay;
  /** Required. Name of the CMEK key in KMS. Format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key} */
  kmsKey?: string;
}

export const PeriodicExportConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsUri: Schema.optional(Schema.String),
  startTime: Schema.optional(TimeOfDay),
  kmsKey: Schema.optional(Schema.String),
}).annotate({ identifier: "PeriodicExportConfig" });

export interface ControlledEgressConfig {
  /** Optional. List of fully qualified domain names to be added to the allowlist for outbound traffic. */
  egressFqdns?: ReadonlyArray<string>;
  /** Optional. Whether marketplace is enabled. */
  marketplaceEnabled?: boolean;
  /** Output only. The list of IP addresses used by Secure Web Proxy for outbound traffic. */
  webProxyIps?: ReadonlyArray<string>;
}

export const ControlledEgressConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    egressFqdns: Schema.optional(Schema.Array(Schema.String)),
    marketplaceEnabled: Schema.optional(Schema.Boolean),
    webProxyIps: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ControlledEgressConfig" });

export interface Instance {
  /** Output only. The Looker version that the instance is using. */
  lookerVersion?: string;
  /** Optional. Storage class of the instance. */
  classType?: "CLASS_TYPE_UNSPECIFIED" | "R1" | "P1" | (string & {});
  /** Network name in the consumer project. Format: `projects/{project}/global/networks/{network}`. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. */
  consumerNetwork?: string;
  /** Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request. */
  reservedRange?: string;
  /** Optional. Indicates whether catalog integration is disabled for the Looker instance. */
  catalogIntegrationOptOut?: boolean;
  /** Whether private IP is enabled on the Looker instance. */
  privateIpEnabled?: boolean;
  /** Output only. Private Ingress IP (IPv4). */
  ingressPrivateIp?: string;
  /** Optional. PSC configuration. Used when `psc_enabled` is true. */
  pscConfig?: PscConfig;
  /** Output only. The time when the Looker instance provisioning was first requested. */
  createTime?: string;
  /** Output only. Looker instance URI which can be used to access the Looker Instance UI. */
  lookerUri?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Maintenance denial period for this instance. */
  denyMaintenancePeriod?: DenyMaintenancePeriod;
  /** Optional. Whether Gemini feature is enabled on the Looker instance or not. */
  geminiEnabled?: boolean;
  /** Optional. Whether to use Private Service Connect (PSC) for private IP connectivity. If true, neither `public_ip_enabled` nor `private_ip_enabled` can be true. */
  pscEnabled?: boolean;
  /** Looker Instance Admin settings. */
  adminSettings?: AdminSettings;
  /** Optional. Whether FIPS is enabled on the Looker instance. */
  fipsEnabled?: boolean;
  /** Optional. Whether controlled egress is enabled on the Looker instance. */
  controlledEgressEnabled?: boolean;
  /** Maintenance schedule for this instance. */
  maintenanceSchedule?: MaintenanceSchedule;
  /** Optional. Ingress IP allowlist configuration for the Looker instance. */
  ingressIpAllowlistConfig?: IngressIpAllowlistConfig;
  /** Output only. The state of the instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "FAILED"
    | "SUSPENDED"
    | "UPDATING"
    | "DELETING"
    | "EXPORTING"
    | "IMPORTING"
    | (string & {});
  /** Output only. The time when the Looker instance was last updated. */
  updateTime?: string;
  /** Output only. Public Egress IP (IPv4). */
  egressPublicIp?: string;
  /** Maintenance window for this instance. */
  maintenanceWindow?: MaintenanceWindow;
  /** Encryption configuration (CMEK). Only set if CMEK has been enabled on the instance. */
  encryptionConfig?: EncryptionConfig;
  /** Optional. User metadata. */
  userMetadata?: UserMetadata;
  /** Looker instance OAuth login settings. */
  oauthConfig?: OAuthConfig;
  /** Output only. Public Ingress IP (IPv4). */
  ingressPublicIp?: string;
  /** Custom domain configuration for the instance. */
  customDomain?: CustomDomain;
  /** Optional. Linked Google Cloud Project Number for Looker Studio Pro. */
  linkedLspProjectNumber?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Optional. Configuration for periodic export. */
  periodicExportConfig?: PeriodicExportConfig;
  /** Output only. Last computed maintenance denial period for this instance. */
  lastDenyMaintenancePeriod?: DenyMaintenancePeriod;
  /** Platform edition. */
  platformEdition?:
    | "PLATFORM_EDITION_UNSPECIFIED"
    | "LOOKER_CORE_TRIAL"
    | "LOOKER_CORE_STANDARD"
    | "LOOKER_CORE_STANDARD_ANNUAL"
    | "LOOKER_CORE_ENTERPRISE_ANNUAL"
    | "LOOKER_CORE_EMBED_ANNUAL"
    | "LOOKER_CORE_NONPROD_STANDARD_ANNUAL"
    | "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL"
    | "LOOKER_CORE_NONPROD_EMBED_ANNUAL"
    | "LOOKER_CORE_TRIAL_STANDARD"
    | "LOOKER_CORE_TRIAL_ENTERPRISE"
    | "LOOKER_CORE_TRIAL_EMBED"
    | (string & {});
  /** Optional. Controlled egress configuration. */
  controlledEgressConfig?: ControlledEgressConfig;
  /** Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name?: string;
  /** Whether public IP is enabled on the Looker instance. */
  publicIpEnabled?: boolean;
}

export const Instance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lookerVersion: Schema.optional(Schema.String),
  classType: Schema.optional(Schema.String),
  consumerNetwork: Schema.optional(Schema.String),
  reservedRange: Schema.optional(Schema.String),
  catalogIntegrationOptOut: Schema.optional(Schema.Boolean),
  privateIpEnabled: Schema.optional(Schema.Boolean),
  ingressPrivateIp: Schema.optional(Schema.String),
  pscConfig: Schema.optional(PscConfig),
  createTime: Schema.optional(Schema.String),
  lookerUri: Schema.optional(Schema.String),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  denyMaintenancePeriod: Schema.optional(DenyMaintenancePeriod),
  geminiEnabled: Schema.optional(Schema.Boolean),
  pscEnabled: Schema.optional(Schema.Boolean),
  adminSettings: Schema.optional(AdminSettings),
  fipsEnabled: Schema.optional(Schema.Boolean),
  controlledEgressEnabled: Schema.optional(Schema.Boolean),
  maintenanceSchedule: Schema.optional(MaintenanceSchedule),
  ingressIpAllowlistConfig: Schema.optional(IngressIpAllowlistConfig),
  state: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  egressPublicIp: Schema.optional(Schema.String),
  maintenanceWindow: Schema.optional(MaintenanceWindow),
  encryptionConfig: Schema.optional(EncryptionConfig),
  userMetadata: Schema.optional(UserMetadata),
  oauthConfig: Schema.optional(OAuthConfig),
  ingressPublicIp: Schema.optional(Schema.String),
  customDomain: Schema.optional(CustomDomain),
  linkedLspProjectNumber: Schema.optional(Schema.String),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  periodicExportConfig: Schema.optional(PeriodicExportConfig),
  lastDenyMaintenancePeriod: Schema.optional(DenyMaintenancePeriod),
  platformEdition: Schema.optional(Schema.String),
  controlledEgressConfig: Schema.optional(ControlledEgressConfig),
  name: Schema.optional(Schema.String),
  publicIpEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Instance" });

export interface ListInstancesResponse {
  /** If provided, a page token that can look up the next ListInstancesRequest.pageSize results. If empty, the results list is exhausted. */
  nextPageToken?: string;
  /** The list of instances matching the request filters, up to the requested ListInstancesRequest.pageSize. */
  instances?: ReadonlyArray<Instance>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  instances: Schema.optional(Schema.Array(Instance)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListInstancesResponse" });

export interface ExportEncryptionConfig {
  /** Required. Name of the CMEK key in KMS. */
  kmsKeyName?: string;
}

export const ExportEncryptionConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kmsKeyName: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ExportEncryptionConfig" });

export interface ExportInstanceRequest {
  /** The path to the folder in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/folderName`. */
  gcsUri?: string;
  /** Required. Encryption configuration (CMEK). For CMEK enabled instances it should be same as looker CMEK. */
  encryptionConfig?: ExportEncryptionConfig;
}

export const ExportInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsUri: Schema.optional(Schema.String),
  encryptionConfig: Schema.optional(ExportEncryptionConfig),
}).annotate({ identifier: "ExportInstanceRequest" });

export interface ExportMetadata {
  /** The source type of the migration. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "LOOKER_CORE"
    | "LOOKER_ORIGINAL"
    | (string & {});
  /** Platform edition of the exported instance. */
  lookerPlatformEdition?: string;
  /** Name of the exported instance. Format: projects/{project}/locations/{location}/instances/{instance} */
  lookerInstance?: string;
  /** Version of instance when the export was created. */
  lookerVersion?: string;
  /** List of files created as part of export artifact (excluding the metadata). The paths are relative to the folder containing the metadata. */
  filePaths?: ReadonlyArray<string>;
  /** Looker encryption key, encrypted with the provided export encryption key. This value will only be populated if the looker instance uses Looker managed encryption instead of CMEK. */
  lookerEncryptionKey?: string;
  /** Encryption key that was used to encrypt the export artifacts. */
  exportEncryptionKey?: ExportMetadataEncryptionKey;
}

export const ExportMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(Schema.String),
  lookerPlatformEdition: Schema.optional(Schema.String),
  lookerInstance: Schema.optional(Schema.String),
  lookerVersion: Schema.optional(Schema.String),
  filePaths: Schema.optional(Schema.Array(Schema.String)),
  lookerEncryptionKey: Schema.optional(Schema.String),
  exportEncryptionKey: Schema.optional(ExportMetadataEncryptionKey),
}).annotate({ identifier: "ExportMetadata" });

export interface InstanceBackup {
  /** Output only. The time when the backup will be deleted. */
  expireTime?: string;
  /** Output only. The time when the backup was started. */
  createTime?: string;
  /** Output only. Current status of the CMEK encryption */
  encryptionConfig?: EncryptionConfig;
  /** Immutable. The relative resource name of the backup, in the following form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}/backups/{backup}` */
  name?: string;
  /** Output only. The current state of the backup. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "DELETING"
    | "ACTIVE"
    | "FAILED"
    | (string & {});
}

export const InstanceBackup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expireTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  encryptionConfig: Schema.optional(EncryptionConfig),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "InstanceBackup" });

export interface RestartInstanceRequest {}

export const RestartInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "RestartInstanceRequest" });

export interface ListInstanceBackupsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of instances matching the request filters, up to the requested `page_size`. */
  instanceBackups?: ReadonlyArray<InstanceBackup>;
  /** If provided, a page token that can look up the next `page_size` results. If empty, the results list is exhausted. */
  nextPageToken?: string;
}

export const ListInstanceBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    instanceBackups: Schema.optional(Schema.Array(InstanceBackup)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListInstanceBackupsResponse" });

export interface RestoreInstanceRequest {
  /** Required. Backup being used to restore the instance Format: projects/{project}/locations/{location}/instances/{instance}/backups/{backup} */
  backup?: string;
}

export const RestoreInstanceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    backup: Schema.optional(Schema.String),
  },
).annotate({ identifier: "RestoreInstanceRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
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
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project}/locations/{location}`. */
  parent: string;
  /** Required. The unique instance identifier. Must contain only lowercase letters, numbers, or hyphens, with the first character a letter and the last a letter or a number. 63 characters maximum. */
  instanceId?: string;
  /** Request body */
  body?: Instance;
}

export const CreateProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    instanceId: Schema.optional(Schema.String).pipe(T.HttpQuery("instanceId")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/instances", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesRequest>;

export type CreateProjectsLocationsInstancesResponse = Operation;
export const CreateProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Instance in a given project and location. */
export const createProjectsLocationsInstances: API.OperationMethod<
  CreateProjectsLocationsInstancesRequest,
  CreateProjectsLocationsInstancesResponse,
  CreateProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInstancesRequest,
  output: CreateProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInstancesRequest {
  /** Whether to force cascading delete. */
  force?: boolean;
  /** Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesRequest>;

export type DeleteProjectsLocationsInstancesResponse = Operation;
export const DeleteProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete instance. */
export const deleteProjectsLocationsInstances: API.OperationMethod<
  DeleteProjectsLocationsInstancesRequest,
  DeleteProjectsLocationsInstancesResponse,
  DeleteProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInstancesRequest,
  output: DeleteProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestartProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: RestartInstanceRequest;
}

export const RestartProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestartInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:restart", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestartProjectsLocationsInstancesRequest>;

export type RestartProjectsLocationsInstancesResponse = Operation;
export const RestartProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestartProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restart instance. */
export const restartProjectsLocationsInstances: API.OperationMethod<
  RestartProjectsLocationsInstancesRequest,
  RestartProjectsLocationsInstancesResponse,
  RestartProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartProjectsLocationsInstancesRequest,
  output: RestartProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsInstancesRequest {
  /** Required. Instance being restored Format: projects/{project}/locations/{location}/instances/{instance} */
  name: string;
  /** Request body */
  body?: RestoreInstanceRequest;
}

export const RestoreProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsInstancesRequest>;

export type RestoreProjectsLocationsInstancesResponse = Operation;
export const RestoreProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestoreProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restore Looker instance. */
export const restoreProjectsLocationsInstances: API.OperationMethod<
  RestoreProjectsLocationsInstancesRequest,
  RestoreProjectsLocationsInstancesResponse,
  RestoreProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsInstancesRequest,
  output: RestoreProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Instance. */
export const getProjectsLocationsInstances: API.OperationMethod<
  GetProjectsLocationsInstancesRequest,
  GetProjectsLocationsInstancesResponse,
  GetProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInstancesRequest,
  output: GetProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ExportProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: ExportInstanceRequest;
}

export const ExportProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsInstancesRequest>;

export type ExportProjectsLocationsInstancesResponse = Operation;
export const ExportProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Export instance. */
export const exportProjectsLocationsInstances: API.OperationMethod<
  ExportProjectsLocationsInstancesRequest,
  ExportProjectsLocationsInstancesResponse,
  ExportProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsInstancesRequest,
  output: ExportProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsInstancesRequest {
  /** Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: ImportInstanceRequest;
}

export const ImportProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImportInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:import", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ImportProjectsLocationsInstancesRequest>;

export type ImportProjectsLocationsInstancesResponse = Operation;
export const ImportProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Import instance. */
export const importProjectsLocationsInstances: API.OperationMethod<
  ImportProjectsLocationsInstancesRequest,
  ImportProjectsLocationsInstancesResponse,
  ImportProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportProjectsLocationsInstancesRequest,
  output: ImportProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesRequest {
  /** The maximum number of instances to return. If unspecified at most 256 will be returned. The maximum possible value is 2048. */
  pageSize?: number;
  /** A page token received from a previous ListInstancesRequest. */
  pageToken?: string;
  /** Required. Format: `projects/{project}/locations/{location}`. */
  parent: string;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse = ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Instances in a given project and location. */
export const listProjectsLocationsInstances: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesRequest,
  ListProjectsLocationsInstancesResponse,
  ListProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesRequest,
  output: ListProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsInstancesRequest {
  /** Required. Field mask used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. */
  updateMask?: string;
  /** Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: Instance;
}

export const PatchProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInstancesRequest>;

export type PatchProjectsLocationsInstancesResponse = Operation;
export const PatchProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update Instance. */
export const patchProjectsLocationsInstances: API.OperationMethod<
  PatchProjectsLocationsInstancesRequest,
  PatchProjectsLocationsInstancesResponse,
  PatchProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInstancesRequest,
  output: PatchProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInstancesBackupsRequest {
  /** The maximum number of instances to return. */
  pageSize?: number;
  /** A page token received from a previous ListInstances request. */
  pageToken?: string;
  /** Sort results. Default order is "create_time desc". Other supported fields are "state" and "expire_time". https://google.aip.dev/132#ordering */
  orderBy?: string;
  /** Required. Format: projects/{project}/locations/{location}/instances/{instance}. */
  parent: string;
}

export const ListProjectsLocationsInstancesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/backups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesBackupsRequest>;

export type ListProjectsLocationsInstancesBackupsResponse =
  ListInstanceBackupsResponse;
export const ListProjectsLocationsInstancesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstanceBackupsResponse;

export type ListProjectsLocationsInstancesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List backups of Looker instance. */
export const listProjectsLocationsInstancesBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsInstancesBackupsRequest,
  ListProjectsLocationsInstancesBackupsResponse,
  ListProjectsLocationsInstancesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInstancesBackupsRequest,
  output: ListProjectsLocationsInstancesBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsInstancesBackupsRequest {
  /** Required. Format: `projects/{project}/locations/{location}/instances/{instance}/backups/{backup}`. */
  name: string;
}

export const GetProjectsLocationsInstancesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesBackupsRequest>;

export type GetProjectsLocationsInstancesBackupsResponse = InstanceBackup;
export const GetProjectsLocationsInstancesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstanceBackup;

export type GetProjectsLocationsInstancesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

export const getProjectsLocationsInstancesBackups: API.OperationMethod<
  GetProjectsLocationsInstancesBackupsRequest,
  GetProjectsLocationsInstancesBackupsResponse,
  GetProjectsLocationsInstancesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInstancesBackupsRequest,
  output: GetProjectsLocationsInstancesBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsInstancesBackupsRequest {
  /** Required. Format: projects/{project}/locations/{location}/instances/{instance} */
  parent: string;
  /** Request body */
  body?: InstanceBackup;
}

export const CreateProjectsLocationsInstancesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(InstanceBackup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/backups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInstancesBackupsRequest>;

export type CreateProjectsLocationsInstancesBackupsResponse = Operation;
export const CreateProjectsLocationsInstancesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsInstancesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Backup Looker instance. */
export const createProjectsLocationsInstancesBackups: API.OperationMethod<
  CreateProjectsLocationsInstancesBackupsRequest,
  CreateProjectsLocationsInstancesBackupsResponse,
  CreateProjectsLocationsInstancesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInstancesBackupsRequest,
  output: CreateProjectsLocationsInstancesBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsInstancesBackupsRequest {
  /** Required. Format: projects/{project}/locations/{location}/instances/{instance}/backups/{backup} */
  name: string;
}

export const DeleteProjectsLocationsInstancesBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInstancesBackupsRequest>;

export type DeleteProjectsLocationsInstancesBackupsResponse = Operation;
export const DeleteProjectsLocationsInstancesBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsInstancesBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete backup. */
export const deleteProjectsLocationsInstancesBackups: API.OperationMethod<
  DeleteProjectsLocationsInstancesBackupsRequest,
  DeleteProjectsLocationsInstancesBackupsResponse,
  DeleteProjectsLocationsInstancesBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInstancesBackupsRequest,
  output: DeleteProjectsLocationsInstancesBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
