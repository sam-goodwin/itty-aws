// ==========================================================================
// Contact Center AI Platform API (contactcenteraiplatform v1alpha1)
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
  name: "contactcenteraiplatform",
  version: "v1alpha1",
  rootUrl: "https://contactcenteraiplatform.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface FeatureConfig {
  /** Optional. If true - enables the agent desktop feature. Default is false. */
  agentDesktopEnabled?: boolean;
}

export const FeatureConfig: Schema.Schema<FeatureConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentDesktopEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FeatureConfig" });

export interface SAMLParams {
  /** Single sign-on URL */
  ssoUri?: string;
  /** SAML certificate */
  certificate?: string;
  /** Email address of the first admin users. */
  userEmail?: string;
  /** IdP field that maps to the user’s email address */
  emailMapping?: string;
  /** Additional contexts used for authentication. */
  authenticationContexts?: ReadonlyArray<
    | "AUTHENTICATION_CONTEXT_UNSPECIFIED"
    | "INTERNET_PROTOCOL"
    | "INTERNET_PROTOCOL_PASSWORD"
    | "KERBEROS"
    | "MOBILE_ONE_FACTOR_UNREGISTERED"
    | "MOBILE_TWO_FACTOR_UNREGISTERED"
    | "MOBILE_ONE_FACTOR_CONTRACT"
    | "MOBILE_TWO_FACTOR_CONTRACT"
    | "PASSWORD"
    | "PASSWORD_PROTECTED_TRANSPORT"
    | "PREVIOUS_SESSION"
    | "PUBLIC_KEY_X509"
    | "PUBLIC_KEY_PGP"
    | "PUBLIC_KEY_SPKI"
    | "PUBLIC_KEY_XML_DIGITAL_SIGNATURE"
    | "SMARTCARD"
    | "SMARTCARD_PKI"
    | "SOFTWARE_PKI"
    | "TELEPHONY"
    | "TELEPHONY_NOMADIC"
    | "TELEPHONY_PERSONALIZED"
    | "TELEPHONY_AUTHENTICATED"
    | "SECURE_REMOTE_PASSWORD"
    | "SSL_TLS_CERTIFICATE_BASED"
    | "TIME_SYNC_TOKEN"
    | (string & {})
  >;
  /** Entity id URL */
  entityId?: string;
}

export const SAMLParams: Schema.Schema<SAMLParams> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ssoUri: Schema.optional(Schema.String),
    certificate: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    emailMapping: Schema.optional(Schema.String),
    authenticationContexts: Schema.optional(Schema.Array(Schema.String)),
    entityId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SAMLParams" });

export interface Component {
  /** Name of the component. */
  name?: string;
  /** Associated service attachments. The service attachment names that will be used for sending private traffic to the CCAIP tenant project. Example service attachment name: "projects/${TENANT_PROJECT_ID}/regions/${REGION}/serviceAttachments/ingress-default". */
  serviceAttachmentNames?: ReadonlyArray<string>;
}

export const Component: Schema.Schema<Component> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    serviceAttachmentNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Component" });

export interface PscSetting {
  /** The list of project ids that are allowed to send traffic to the service attachment. This field should be filled only for the ingress components. */
  allowedConsumerProjectIds?: ReadonlyArray<string>;
  /** Output only. The CCAIP tenant project ids. */
  producerProjectIds?: ReadonlyArray<string>;
}

export const PscSetting: Schema.Schema<PscSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedConsumerProjectIds: Schema.optional(Schema.Array(Schema.String)),
    producerProjectIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PscSetting" });

export interface PrivateAccess {
  /** List of egress components that should not be accessed via the Internet. For more information see go/ccaip-private-path-v2. */
  egressSettings?: ReadonlyArray<Component>;
  /** Private service connect settings. */
  pscSetting?: PscSetting;
  /** List of ingress components that should not be accessed via the Internet. For more information see go/ccaip-private-path-v2. */
  ingressSettings?: ReadonlyArray<Component>;
}

export const PrivateAccess: Schema.Schema<PrivateAccess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    egressSettings: Schema.optional(Schema.Array(Component)),
    pscSetting: Schema.optional(PscSetting),
    ingressSettings: Schema.optional(Schema.Array(Component)),
  }).annotate({ identifier: "PrivateAccess" });

export interface Normal {}

export const Normal: Schema.Schema<Normal> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Normal",
  });

export interface InstanceConfig {
  /** The instance size of this the instance configuration. */
  instanceSize?:
    | "INSTANCE_SIZE_UNSPECIFIED"
    | "STANDARD_SMALL"
    | "STANDARD_MEDIUM"
    | "STANDARD_LARGE"
    | "STANDARD_XLARGE"
    | "STANDARD_2XLARGE"
    | "STANDARD_3XLARGE"
    | "MULTIREGION_SMALL"
    | "MULTIREGION_MEDIUM"
    | "MULTIREGION_LARGE"
    | "MULTIREGION_XLARGE"
    | "MULTIREGION_2XLARGE"
    | "MULTIREGION_3XLARGE"
    | "DEV_SMALL"
    | "SANDBOX_SMALL"
    | "TRIAL_SMALL"
    | "TIME_LIMITED_TRIAL_SMALL"
    | (string & {});
}

export const InstanceConfig: Schema.Schema<InstanceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstanceConfig" });

export interface AdminUser {
  /** Optional. First/given name of the first admin user. */
  givenName?: string;
  /** Optional. Last/family name of the first admin user. */
  familyName?: string;
}

export const AdminUser: Schema.Schema<AdminUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    givenName: Schema.optional(Schema.String),
    familyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdminUser" });

export interface TimeOfDay {
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface WeeklySchedule {
  /** Optional. Duration of the schedule. */
  duration?: string;
  /** Required. Daily start time of the schedule. */
  startTime?: TimeOfDay;
  /** Optional. Daily end time of the schedule. If `end_time` is before `start_time`, the schedule will be considered as ending on the next day. */
  endTime?: TimeOfDay;
  /** Required. Days of the week this schedule applies to. */
  days?: ReadonlyArray<
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {})
  >;
}

export const WeeklySchedule: Schema.Schema<WeeklySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
    endTime: Schema.optional(TimeOfDay),
    days: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WeeklySchedule" });

export interface Critical {
  /** Required. Hours during which the instance should not be updated. */
  peakHours?: ReadonlyArray<WeeklySchedule>;
}

export const Critical: Schema.Schema<Critical> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peakHours: Schema.optional(Schema.Array(WeeklySchedule)),
  }).annotate({ identifier: "Critical" });

export interface Early {}

export const Early: Schema.Schema<Early> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Early",
  });

export interface URIs {
  /** Root Uri of the ContactCenter. */
  rootUri?: string;
  /** Media Uri of the ContactCenter. */
  mediaUri?: string;
  /** Virtual Agent Streaming Service Uri of the ContactCenter. */
  virtualAgentStreamingServiceUri?: string;
  /** Chat Bot Uri of the ContactCenter */
  chatBotUri?: string;
}

export const URIs: Schema.Schema<URIs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootUri: Schema.optional(Schema.String),
    mediaUri: Schema.optional(Schema.String),
    virtualAgentStreamingServiceUri: Schema.optional(Schema.String),
    chatBotUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "URIs" });

export interface ContactCenter {
  /** Immutable. The KMS key name to encrypt the user input (`ContactCenter`). */
  kmsKey?: string;
  /** Optional. Feature configuration to populate the feature flags. */
  featureConfig?: FeatureConfig;
  /** Optional. Params that sets up Google as IdP. */
  samlParams?: SAMLParams;
  /** Output only. Timestamp in UTC of when this resource was soft-deleted. */
  deleteTime?: string;
  /** Output only. Timestamp in UTC of when this resource is considered expired. */
  expireTime?: string;
  /** name of resource */
  name?: string;
  /** Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity */
  ccaipManagedUsers?: boolean;
  /** Output only. The state of this contact center. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STATE_DEPLOYING"
    | "STATE_DEPLOYED"
    | "STATE_TERMINATING"
    | "STATE_FAILED"
    | "STATE_TERMINATING_FAILED"
    | "STATE_TERMINATED"
    | "STATE_IN_GRACE_PERIOD"
    | "STATE_FAILING_OVER"
    | "STATE_DEGRADED"
    | "STATE_REPAIRING"
    | "STATE_EXPIRING"
    | (string & {});
  /** Output only. TODO(b/283407860) Deprecate this field. */
  privateComponents?: ReadonlyArray<string>;
  /** Optional. VPC-SC related networking configuration. */
  privateAccess?: PrivateAccess;
  /** Output only. Timestamp in UTC of when this resource is going to be hard-deleted. */
  purgeTime?: string;
  /** Required. A user friendly name for the ContactCenter. */
  displayName?: string;
  /** Optional. Normal release channel. */
  normal?: Normal;
  /** The configuration of this instance, it is currently immutable once created. */
  instanceConfig?: InstanceConfig;
  /** Optional. Info about the first admin user, such as given name and family name. */
  adminUser?: AdminUser;
  /** Optional. Critical release channel. */
  critical?: Critical;
  /** Optional. Early release channel. */
  early?: Early;
  /** Output only. UJET release version, unique for each new release. */
  releaseVersion?: string;
  /** Output only. [Output only] Create time stamp */
  createTime?: string;
  /** Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). */
  customerDomainPrefix?: string;
  /** Output only. [Output only] Update time stamp */
  updateTime?: string;
  /** Optional. Whether the advanced reporting feature is enabled. */
  advancedReportingEnabled?: boolean;
  /** Optional. Email address of the first admin user. */
  userEmail?: string;
  /** Output only. URIs to access the deployed ContactCenters. */
  uris?: URIs;
  /** Labels as key value pairs */
  labels?: Record<string, string>;
}

export const ContactCenter: Schema.Schema<ContactCenter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKey: Schema.optional(Schema.String),
    featureConfig: Schema.optional(FeatureConfig),
    samlParams: Schema.optional(SAMLParams),
    deleteTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    ccaipManagedUsers: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    privateComponents: Schema.optional(Schema.Array(Schema.String)),
    privateAccess: Schema.optional(PrivateAccess),
    purgeTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    normal: Schema.optional(Normal),
    instanceConfig: Schema.optional(InstanceConfig),
    adminUser: Schema.optional(AdminUser),
    critical: Schema.optional(Critical),
    early: Schema.optional(Early),
    releaseVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    customerDomainPrefix: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    advancedReportingEnabled: Schema.optional(Schema.Boolean),
    userEmail: Schema.optional(Schema.String),
    uris: Schema.optional(URIs),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ContactCenter" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Schema<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface DateTime {
  /** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
  nanos?: number;
  /** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
  day?: number;
  /** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
  year?: number;
  /** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
  utcOffset?: string;
  /** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
  month?: number;
  /** Time zone. */
  timeZone?: TimeZone;
  /** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
  minutes?: number;
}

export const DateTime: Schema.Schema<DateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    utcOffset: Schema.optional(Schema.String),
    month: Schema.optional(Schema.Number),
    timeZone: Schema.optional(TimeZone),
    minutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DateTime" });

export interface WorkforceDemand {
  /** Required. Start of the time interval for the given demand (inclusive). These values are read down to the minute; seconds and all smaller units are ignored. */
  startTime?: DateTime;
  /** Required. End of the time interval for the given demand (exclusive). These values are read down to the minute; seconds and all smaller units are ignored. */
  endTime?: DateTime;
  /** Optional. Number of employees needed to cover the demand for this interval. */
  employeeCount?: number;
}

export const WorkforceDemand: Schema.Schema<WorkforceDemand> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(DateTime),
    endTime: Schema.optional(DateTime),
    employeeCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WorkforceDemand" });

export interface WorkforceDemandList {
  /** Optional. Values in the list. */
  values?: ReadonlyArray<WorkforceDemand>;
}

export const WorkforceDemandList: Schema.Schema<WorkforceDemandList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(WorkforceDemand)),
  }).annotate({ identifier: "WorkforceDemandList" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface PlanningHorizon {
  /** Required. Start of the time interval for the given demand (inclusive). These values are read down to the minute; seconds and all smaller units are ignored. */
  startTime?: DateTime;
  /** Required. End of the time interval for the given demand (exclusive). These values are read down to the minute; seconds and all smaller units are ignored. */
  endTime?: DateTime;
}

export const PlanningHorizon: Schema.Schema<PlanningHorizon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(DateTime),
    endTime: Schema.optional(DateTime),
  }).annotate({ identifier: "PlanningHorizon" });

export interface Quota {
  /** Reflects the count limit of contact centers on a billing account. */
  contactCenterCountLimit?: number;
  /** Reflects the count sum of contact centers on a billing account. */
  contactCenterCountSum?: number;
  /** Contact center instance type. */
  contactCenterInstanceSize?:
    | "INSTANCE_SIZE_UNSPECIFIED"
    | "STANDARD_SMALL"
    | "STANDARD_MEDIUM"
    | "STANDARD_LARGE"
    | "STANDARD_XLARGE"
    | "STANDARD_2XLARGE"
    | "STANDARD_3XLARGE"
    | "MULTIREGION_SMALL"
    | "MULTIREGION_MEDIUM"
    | "MULTIREGION_LARGE"
    | "MULTIREGION_XLARGE"
    | "MULTIREGION_2XLARGE"
    | "MULTIREGION_3XLARGE"
    | "DEV_SMALL"
    | "SANDBOX_SMALL"
    | "TRIAL_SMALL"
    | "TIME_LIMITED_TRIAL_SMALL"
    | (string & {});
}

export const Quota: Schema.Schema<Quota> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contactCenterCountLimit: Schema.optional(Schema.Number),
    contactCenterCountSum: Schema.optional(Schema.Number),
    contactCenterInstanceSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "Quota" });

export interface SolverConfig {
  /** Optional. Maximum time the solver should spend on the problem. If not set, defaults to 1 minute. The choice of a time limit should depend on the size of the problem. To give an example, when solving a 7-day instance with 2 `ShiftTemplates`, each with ~20 possible start times and holding 2 events with ~30 possible start times, and two days off per week, recommended values are: <10s for fast solutions (and likely suboptimal), (10s, 300s) for good quality solutions, and >300s for an exhaustive search. Larger instances may require longer time limits. This value is not a hard limit and it does not account for the communication overhead. The expected latency to solve the problem may slightly exceed this value. */
  maximumProcessingDuration?: string;
  /** Required. Specifies the type of schedule to generate. */
  scheduleType?:
    | "SCHEDULE_TYPE_UNSPECIFIED"
    | "SINGLE_SHIFT"
    | "WEEKLY_WITH_FIXED_EVENTS"
    | "WEEKLY_WITH_VARIABLE_EVENTS"
    | (string & {});
}

export const SolverConfig: Schema.Schema<SolverConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maximumProcessingDuration: Schema.optional(Schema.String),
    scheduleType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SolverConfig" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface ContactCenterQuota {
  /** Quota details per contact center instance type. */
  quotas?: ReadonlyArray<Quota>;
  /** Deprecated: Use the Quota fields instead. Reflects the count sum of contact centers on a billing account. */
  contactCenterCountSum?: number;
  /** Deprecated: Use the Quota fields instead. Reflects the count limit of contact centers on a billing account. */
  contactCenterCountLimit?: number;
}

export const ContactCenterQuota: Schema.Schema<ContactCenterQuota> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotas: Schema.optional(Schema.Array(Quota)),
    contactCenterCountSum: Schema.optional(Schema.Number),
    contactCenterCountLimit: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ContactCenterQuota" });

export interface Contactcenteraiplatform_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Contactcenteraiplatform_Date: Schema.Schema<Contactcenteraiplatform_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    month: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Contactcenteraiplatform_Date" });

export interface UnwantedEventInterval {
  /** Required. Duration of the event. */
  durationMinutes?: number;
  /** Required. Start time of the event. */
  startTime?: DateTime;
}

export const UnwantedEventInterval: Schema.Schema<UnwantedEventInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    durationMinutes: Schema.optional(Schema.Number),
    startTime: Schema.optional(DateTime),
  }).annotate({ identifier: "UnwantedEventInterval" });

export interface EmployeeInfo {
  /** Optional. A list of unwanted event intervals for this employee. The start time of the interval must be in the planning horizon. */
  unwantedEventIntervals?: ReadonlyArray<UnwantedEventInterval>;
  /** Required. Unique ID of this employee. */
  id?: string;
}

export const EmployeeInfo: Schema.Schema<EmployeeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unwantedEventIntervals: Schema.optional(
      Schema.Array(UnwantedEventInterval),
    ),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "EmployeeInfo" });

export interface DateList {
  /** Optional. Values in the list. */
  values?: ReadonlyArray<Contactcenteraiplatform_Date>;
}

export const DateList: Schema.Schema<DateList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Contactcenteraiplatform_Date)),
  }).annotate({ identifier: "DateList" });

export interface EventTemplate {
  /** Optional. Minimum number of minutes after the beginning of a shift that this event can start. */
  minimumMinutesAfterShiftStart?: number;
  /** Required. Fixed duration in minutes of this event. */
  durationMinutes?: number;
  /** Optional. Maximum number of minutes after the beginning of a shift that this event can start. */
  maximumMinutesAfterShiftStart?: number;
  /** Required. Unique ID of this template. */
  id?: string;
  /** Required. The time increment (in minutes) used to generate the set of possible event start times between `minimum_minutes_after_shift_start` and `maximum_minutes_after_shift_start`. For example, if the minimum minutes after shift start are 30, maximum minutes after shift start are 45, and the start time increment is 5 minutes, the event can take place 30, 35, 40, or 45 minutes after the start of the shift. */
  startTimeIncrementMinutes?: number;
}

export const EventTemplate: Schema.Schema<EventTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumMinutesAfterShiftStart: Schema.optional(Schema.Number),
    durationMinutes: Schema.optional(Schema.Number),
    maximumMinutesAfterShiftStart: Schema.optional(Schema.Number),
    id: Schema.optional(Schema.String),
    startTimeIncrementMinutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EventTemplate" });

export interface ShiftTemplate {
  /** Optional. The time increment (in minutes) used to generate the set of possible start times between `earliest_start_time` and `latest_start_time`. For example, if the earliest start time is 8:00, the latest start time is 8:30, and the start time increment is 10 minutes, then all possible start times for this shift template are: 8:00, 8:10, 8:20, and 8:30. */
  startTimeIncrementMinutes?: number;
  /** Optional. Fixed dates when shifts from this template should not be generated. */
  daysOffDates?: DateList;
  /** Optional. Minimum number of employees that can be assigned to all shifts generated by this template on working days. */
  minimumEmployeeCount?: number;
  /** Required. Latest time in the day that a shift can start. This value is specified with hours and minutes; seconds and nanos are ignored. If this value is less than the `earliest_start_time`, it may imply an overnight shift. */
  latestStartTime?: TimeOfDay;
  /** Required. Fixed duration of a shift generated by this template. */
  durationMinutes?: number;
  /** Required. Earliest time in the day that a shift can start. This value is specified with hours and minutes; seconds and nanos are ignored. */
  earliestStartTime?: TimeOfDay;
  /** Required. Unique ID of this template. */
  id?: string;
  /** Optional. Rules for generating events for each shift. Exactly one event will be included in each shift for each `EventTemplate` specified. */
  eventTemplates?: ReadonlyArray<EventTemplate>;
  /** Optional. Fixed number of days off per week. An employee has a given day off if they are not assigned to a shift that starts on that day. A week is 7 days and begins on Sunday. */
  daysOffCountPerWeek?: number;
  /** Optional. Minimum minutes between the end of one event and the start of the next. */
  minimumIntereventGapMinutes?: number;
  /** Required. Maximum number of employees that can be assigned to all shifts generated by this template on working days. */
  maximumEmployeeCount?: number;
  /** Optional. A list of specific employee IDs that can be assigned to shifts generated by this template. If this field is present, there will be `EmployeeSchedule`s in the response for which the `EmployeeSchedule.employee_id` field is set to one of the IDs in this list. The number of employee schedules with an assigned employee ID will be between `minimum_employee_count` and `maximum_employee_count`. If this field is empty, between `minimum_employee_count` and `maximum_employee_count` employees can be assigned to shifts generated by this template and the employee schedules won't have an assigned employee ID. Currently, only one assignable employee ID is supported. */
  assignableEmployeeIds?: ReadonlyArray<string>;
}

export const ShiftTemplate: Schema.Schema<ShiftTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTimeIncrementMinutes: Schema.optional(Schema.Number),
    daysOffDates: Schema.optional(DateList),
    minimumEmployeeCount: Schema.optional(Schema.Number),
    latestStartTime: Schema.optional(TimeOfDay),
    durationMinutes: Schema.optional(Schema.Number),
    earliestStartTime: Schema.optional(TimeOfDay),
    id: Schema.optional(Schema.String),
    eventTemplates: Schema.optional(Schema.Array(EventTemplate)),
    daysOffCountPerWeek: Schema.optional(Schema.Number),
    minimumIntereventGapMinutes: Schema.optional(Schema.Number),
    maximumEmployeeCount: Schema.optional(Schema.Number),
    assignableEmployeeIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ShiftTemplate" });

export interface GenerateShiftsRequest {
  /** Required. All the workforce demands that the generated shifts need to cover. The planning horizon is defined between the earliest start time and the latest end time across all the entries. This field cannot be empty. */
  workforceDemands?: WorkforceDemandList;
  /** Required. Parameters for the solver. */
  solverConfig?: SolverConfig;
  /** Optional. Employee information that should be considered when generating shifts. */
  employeeInfo?: ReadonlyArray<EmployeeInfo>;
  /** Required. Set of shift templates specifying rules for generating shifts. A shift template can be used for generating multiple shifts. */
  shiftTemplates?: ReadonlyArray<ShiftTemplate>;
  /** Required. The solver will generate the maximum number of shifts per shift template. */
  planningHorizon?: PlanningHorizon;
}

export const GenerateShiftsRequest: Schema.Schema<GenerateShiftsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workforceDemands: Schema.optional(WorkforceDemandList),
    solverConfig: Schema.optional(SolverConfig),
    employeeInfo: Schema.optional(Schema.Array(EmployeeInfo)),
    shiftTemplates: Schema.optional(Schema.Array(ShiftTemplate)),
    planningHorizon: Schema.optional(PlanningHorizon),
  }).annotate({ identifier: "GenerateShiftsRequest" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ListContactCentersResponse {
  /** The list of ContactCenter */
  contactCenters?: ReadonlyArray<ContactCenter>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListContactCentersResponse: Schema.Schema<ListContactCentersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contactCenters: Schema.optional(Schema.Array(ContactCenter)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListContactCentersResponse" });

export interface OperationMetadata {
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Contact center information for this request */
  contactCenter?: ContactCenter;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    contactCenter: Schema.optional(ContactCenter),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface GoogleCloudCommonOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
}

export const GoogleCloudCommonOperationMetadata: Schema.Schema<GoogleCloudCommonOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    cancelRequested: Schema.optional(Schema.Boolean),
    statusDetail: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudCommonOperationMetadata" });

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

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
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

export interface QueryContactCenterQuotaProjectsLocationsRequest {
  /** Required. Parent project resource id. */
  parent: string;
}

export const QueryContactCenterQuotaProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1alpha1/{+parent}:queryContactCenterQuota",
    }),
    svc,
  ) as unknown as Schema.Schema<QueryContactCenterQuotaProjectsLocationsRequest>;

export type QueryContactCenterQuotaProjectsLocationsResponse =
  ContactCenterQuota;
export const QueryContactCenterQuotaProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContactCenterQuota;

export type QueryContactCenterQuotaProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to. */
export const queryContactCenterQuotaProjectsLocations: API.OperationMethod<
  QueryContactCenterQuotaProjectsLocationsRequest,
  QueryContactCenterQuotaProjectsLocationsResponse,
  QueryContactCenterQuotaProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryContactCenterQuotaProjectsLocationsRequest,
  output: QueryContactCenterQuotaProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
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

export interface GenerateShiftsProjectsLocationsRequest {
  /** Required. Name of the parent resource associated with the request. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Request body */
  body?: GenerateShiftsRequest;
}

export const GenerateShiftsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GenerateShiftsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}:generateShifts",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateShiftsProjectsLocationsRequest>;

export type GenerateShiftsProjectsLocationsResponse = Operation;
export const GenerateShiftsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GenerateShiftsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates shifts constrained by various parameters. */
export const generateShiftsProjectsLocations: API.OperationMethod<
  GenerateShiftsProjectsLocationsRequest,
  GenerateShiftsProjectsLocationsResponse,
  GenerateShiftsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateShiftsProjectsLocationsRequest,
  output: GenerateShiftsProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
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
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
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

export interface CreateProjectsLocationsContactCentersRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Id of the requesting object If auto-generating Id server-side, remove this field and contact_center_id from the method_signature of Create RPC */
  contactCenterId?: string;
  /** Request body */
  body?: ContactCenter;
}

export const CreateProjectsLocationsContactCentersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    contactCenterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("contactCenterId"),
    ),
    body: Schema.optional(ContactCenter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/contactCenters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsContactCentersRequest>;

export type CreateProjectsLocationsContactCentersResponse = Operation;
export const CreateProjectsLocationsContactCentersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsContactCentersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ContactCenter in a given project and location. */
export const createProjectsLocationsContactCenters: API.OperationMethod<
  CreateProjectsLocationsContactCentersRequest,
  CreateProjectsLocationsContactCentersResponse,
  CreateProjectsLocationsContactCentersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsContactCentersRequest,
  output: CreateProjectsLocationsContactCentersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsContactCentersRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for ListContactCentersRequest */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Hint for how to order the results */
  orderBy?: string;
  /** Filtering results */
  filter?: string;
}

export const ListProjectsLocationsContactCentersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/contactCenters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsContactCentersRequest>;

export type ListProjectsLocationsContactCentersResponse =
  ListContactCentersResponse;
export const ListProjectsLocationsContactCentersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListContactCentersResponse;

export type ListProjectsLocationsContactCentersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ContactCenters in a given project and location. */
export const listProjectsLocationsContactCenters: API.PaginatedOperationMethod<
  ListProjectsLocationsContactCentersRequest,
  ListProjectsLocationsContactCentersResponse,
  ListProjectsLocationsContactCentersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsContactCentersRequest,
  output: ListProjectsLocationsContactCentersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsContactCentersRequest {
  /** Required. Name of the resource */
  name: string;
}

export const GetProjectsLocationsContactCentersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsContactCentersRequest>;

export type GetProjectsLocationsContactCentersResponse = ContactCenter;
export const GetProjectsLocationsContactCentersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ContactCenter;

export type GetProjectsLocationsContactCentersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ContactCenter. */
export const getProjectsLocationsContactCenters: API.OperationMethod<
  GetProjectsLocationsContactCentersRequest,
  GetProjectsLocationsContactCentersResponse,
  GetProjectsLocationsContactCentersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsContactCentersRequest,
  output: GetProjectsLocationsContactCentersResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsContactCentersRequest {
  /** name of resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the ContactCenter resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ContactCenter;
}

export const PatchProjectsLocationsContactCentersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ContactCenter).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsContactCentersRequest>;

export type PatchProjectsLocationsContactCentersResponse = Operation;
export const PatchProjectsLocationsContactCentersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsContactCentersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single ContactCenter. */
export const patchProjectsLocationsContactCenters: API.OperationMethod<
  PatchProjectsLocationsContactCentersRequest,
  PatchProjectsLocationsContactCentersResponse,
  PatchProjectsLocationsContactCentersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsContactCentersRequest,
  output: PatchProjectsLocationsContactCentersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsContactCentersRequest {
  /** Required. Name of the resource */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsContactCentersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsContactCentersRequest>;

export type DeleteProjectsLocationsContactCentersResponse = Operation;
export const DeleteProjectsLocationsContactCentersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsContactCentersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ContactCenter. */
export const deleteProjectsLocationsContactCenters: API.OperationMethod<
  DeleteProjectsLocationsContactCentersRequest,
  DeleteProjectsLocationsContactCentersResponse,
  DeleteProjectsLocationsContactCentersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsContactCentersRequest,
  output: DeleteProjectsLocationsContactCentersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
