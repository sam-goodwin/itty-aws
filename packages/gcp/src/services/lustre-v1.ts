// ==========================================================================
// Google Cloud Managed Lustre API (lustre v1)
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
  name: "lustre",
  version: "v1",
  rootUrl: "https://lustre.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DynamicTierOptions {
  /** Required. Immutable. The dynamic tier mode of the instance. */
  mode?: "MODE_UNSPECIFIED" | "DISABLED" | "DEFAULT_CACHE" | (string & {});
}

export const DynamicTierOptions: Schema.Schema<DynamicTierOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DynamicTierOptions" });

export interface Lustre_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Lustre_Date: Schema.Schema<Lustre_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Lustre_Date" });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface MaintenanceExclusionWindow {
  /** Required. Start date of the exclusion period in UTC time zone. This date is inclusive. */
  startDate?: Lustre_Date;
  /** Required. Time in UTC when the exclusion window starts on start_date and ends on end_date. This can be: * Full time OR * All zeros for 00:00:00 UTC */
  time?: TimeOfDay;
  /** Required. End date of the exclusion period in UTC time zone. This date is inclusive. */
  endDate?: Lustre_Date;
}

export const MaintenanceExclusionWindow: Schema.Schema<MaintenanceExclusionWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Lustre_Date),
    time: Schema.optional(TimeOfDay),
    endDate: Schema.optional(Lustre_Date),
  }).annotate({ identifier: "MaintenanceExclusionWindow" });

export interface ReconciliationOperationMetadata {
  /** Excluisive action returned by the CLH. */
  exclusiveAction?:
    | "UNKNOWN_REPAIR_ACTION"
    | "DELETE"
    | "RETRY"
    | (string & {});
  /** DEPRECATED. Use exclusive_action instead. */
  deleteResource?: boolean;
}

export const ReconciliationOperationMetadata: Schema.Schema<ReconciliationOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exclusiveAction: Schema.optional(Schema.String),
    deleteResource: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ReconciliationOperationMetadata" });

export interface WeeklyMaintenanceWindow {
  /** Required. Day of the week for the maintenance window. */
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
  /** Required. Start time of the maintenance window in UTC time zone. */
  startTime?: TimeOfDay;
}

export const WeeklyMaintenanceWindow: Schema.Schema<WeeklyMaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dayOfWeek: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "WeeklyMaintenanceWindow" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface MaintenancePolicy {
  /** Required. The weekly maintenance windows for the instance. Currently limited to 1 window. */
  weeklyMaintenanceWindows?: ReadonlyArray<WeeklyMaintenanceWindow>;
  /** Optional. The exclusion windows for the instance. Currently limited to 1 window. */
  maintenanceExclusionWindow?: ReadonlyArray<MaintenanceExclusionWindow>;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weeklyMaintenanceWindows: Schema.optional(
      Schema.Array(WeeklyMaintenanceWindow),
    ),
    maintenanceExclusionWindow: Schema.optional(
      Schema.Array(MaintenanceExclusionWindow),
    ),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface LustrePath {
  /** Optional. The root directory path to the Managed Lustre file system. Must start with `/`. Default is `/`. If you're importing data into Managed Lustre, any path other than the default must already exist on the file system. */
  path?: string;
}

export const LustrePath: Schema.Schema<LustrePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "LustrePath" });

export interface GcsPath {
  /** Required. The URI to a Cloud Storage bucket, or a path within a bucket, using the format `gs:////`. If a path inside the bucket is specified, it must end with a forward slash (`/`). */
  uri?: string;
}

export const GcsPath: Schema.Schema<GcsPath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsPath" });

export interface ExportDataRequest {
  /** The root directory path to the Managed Lustre file system. Must start with `/`. Default is `/`. */
  lustrePath?: LustrePath;
  /** The URI to a Cloud Storage bucket, or a path within a bucket, using the format `gs:////`. If a path inside the bucket is specified, it must end with a forward slash (`/`). */
  gcsPath?: GcsPath;
  /** Optional. UUID to identify requests. */
  requestId?: string;
  /** Optional. User-specified service account used to perform the transfer. If unspecified, the Managed Lustre service agent is used. */
  serviceAccount?: string;
}

export const ExportDataRequest: Schema.Schema<ExportDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustrePath: Schema.optional(LustrePath),
    gcsPath: Schema.optional(GcsPath),
    requestId: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportDataRequest" });

export interface ImportDataRequest {
  /** Lustre path destination. */
  lustrePath?: LustrePath;
  /** The Cloud Storage source bucket and, optionally, path inside the bucket. If a path inside the bucket is specified, it must end with a forward slash (`/`). */
  gcsPath?: GcsPath;
  /** Optional. UUID to identify requests. */
  requestId?: string;
  /** Optional. User-specified service account used to perform the transfer. If unspecified, the default Managed Lustre service agent will be used. */
  serviceAccount?: string;
}

export const ImportDataRequest: Schema.Schema<ImportDataRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lustrePath: Schema.optional(LustrePath),
    gcsPath: Schema.optional(GcsPath),
    requestId: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportDataRequest" });

export interface AccessRule {
  /** Required. The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'. */
  name?: string;
  /** Required. The IP address ranges to which to apply this access rule. Accepts non-overlapping CIDR ranges (e.g., `192.168.1.0/24`) and IP addresses (e.g., `192.168.1.0`). */
  ipAddressRanges?: ReadonlyArray<string>;
  /** Required. Squash mode for the access rule. */
  squashMode?:
    | "SQUASH_MODE_UNSPECIFIED"
    | "NO_SQUASH"
    | "ROOT_SQUASH"
    | (string & {});
}

export const AccessRule: Schema.Schema<AccessRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ipAddressRanges: Schema.optional(Schema.Array(Schema.String)),
    squashMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessRule" });

export interface AccessRulesOptions {
  /** Required. The squash mode for the default access rule. */
  defaultSquashMode?:
    | "SQUASH_MODE_UNSPECIFIED"
    | "NO_SQUASH"
    | "ROOT_SQUASH"
    | (string & {});
  /** Optional. The user squash UID for the default access rule. This user squash UID applies to all root users connecting from clients that are not matched by any of the access rules. If not set, the default is 0 (no UID squash). */
  defaultSquashUid?: number;
  /** Optional. The access rules for the instance. */
  accessRules?: ReadonlyArray<AccessRule>;
  /** Optional. The user squash GID for the default access rule. This user squash GID applies to all root users connecting from clients that are not matched by any of the access rules. If not set, the default is 0 (no GID squash). */
  defaultSquashGid?: number;
}

export const AccessRulesOptions: Schema.Schema<AccessRulesOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultSquashMode: Schema.optional(Schema.String),
    defaultSquashUid: Schema.optional(Schema.Number),
    accessRules: Schema.optional(Schema.Array(AccessRule)),
    defaultSquashGid: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AccessRulesOptions" });

export interface MaintenanceSchedule {
  /** Output only. The scheduled start time for the maintenance. */
  startTime?: string;
  /** Output only. The scheduled end time for the maintenance. */
  endTime?: string;
}

export const MaintenanceSchedule: Schema.Schema<MaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceSchedule" });

export interface Instance {
  /** Output only. The state of the instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | "UPGRADING"
    | "REPAIRING"
    | "STOPPED"
    | "UPDATING"
    | "SUSPENDED"
    | (string & {});
  /** Optional. Immutable. The Cloud KMS key name to use for data encryption. If not set, the instance will use Google-managed encryption keys. If set, the instance will use customer-managed encryption keys. The key must be in the same region as the instance. The key format is: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key} */
  kmsKey?: string;
  /** Output only. The reason why the instance is in a certain state (e.g. SUSPENDED). */
  stateReason?: string;
  /** Optional. The throughput of the instance in MBps per TiB. Valid values are 125, 250, 500, 1000. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for more information. If the instance is using the Dynamic tier, this field must not be set or must be set to zero. */
  perUnitStorageThroughput?: string;
  /** Output only. Unique ID of the resource. This is unrelated to the access rules which allow specifying the root squash uid. */
  uid?: string;
  /** Optional. The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy} */
  placementPolicy?: string;
  /** Required. The storage capacity of the instance in gibibytes (GiB). Allowed values are from `9000` to `7632000`, depending on the `perUnitStorageThroughput`. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for specific minimums, maximums, and step sizes for each performance tier. */
  capacityGib?: string;
  /** Optional. Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. Deprecated. No longer required for GKE instance creation. */
  gkeSupportEnabled?: boolean;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Mount point of the instance in the format `IP_ADDRESS@tcp:/FILESYSTEM`. */
  mountPoint?: string;
  /** Output only. Timestamp when the instance was last updated. */
  updateTime?: string;
  /** Optional. The maintenance policy for the instance to determine when to allow or exclude the instance from maintenance updates. */
  maintenancePolicy?: MaintenancePolicy;
  /** Optional. The access rules options for the instance. */
  accessRulesOptions?: AccessRulesOptions;
  /** Required. Immutable. The full name of the VPC network to which the instance is connected. Must be in the format `projects/{project_id}/global/networks/{network_name}`. */
  network?: string;
  /** Optional. Immutable. Specifies whether the instance is on the Dynamic tier. See [Performance tiers and maximum storage capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers) for more information. */
  dynamicTierOptions?: DynamicTierOptions;
  /** Required. Immutable. The filesystem name for this instance. This name is used by client-side tools, including when mounting the instance. Must be eight characters or less and can only contain letters and numbers. */
  filesystem?: string;
  /** Output only. Date and time of upcoming maintenance for the instance, if a maintenance policy is set. */
  upcomingMaintenanceSchedule?: MaintenanceSchedule;
  /** Identifier. The name of the instance. */
  name?: string;
  /** Output only. Timestamp when the instance was created. */
  createTime?: string;
  /** Optional. A user-readable description of the instance. */
  description?: string;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
    stateReason: Schema.optional(Schema.String),
    perUnitStorageThroughput: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    placementPolicy: Schema.optional(Schema.String),
    capacityGib: Schema.optional(Schema.String),
    gkeSupportEnabled: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    mountPoint: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    maintenancePolicy: Schema.optional(MaintenancePolicy),
    accessRulesOptions: Schema.optional(AccessRulesOptions),
    network: Schema.optional(Schema.String),
    dynamicTierOptions: Schema.optional(DynamicTierOptions),
    filesystem: Schema.optional(Schema.String),
    upcomingMaintenanceSchedule: Schema.optional(MaintenanceSchedule),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Instance" });

export interface ListInstancesResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Response from ListInstances. */
  instances?: ReadonlyArray<Instance>;
  /** Unordered list. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInstancesResponse: Schema.Schema<ListInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(Instance)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInstancesResponse" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface Reschedule {
  /** Required. The type of rescheduling. */
  rescheduleType?:
    | "RESCHEDULE_TYPE_UNSPECIFIED"
    | "IMMEDIATE"
    | "NEXT_AVAILABLE_WINDOW"
    | "BY_TIME"
    | (string & {});
  /** Optional. Required if reschedule_type is BY_TIME. Timestamp when the maintenance shall be rescheduled to. This time must be within 28 days of the original scheduled maintenance start time. */
  scheduleTime?: string;
}

export const Reschedule: Schema.Schema<Reschedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rescheduleType: Schema.optional(Schema.String),
    scheduleTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Reschedule" });

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

export interface RescheduleMaintenanceRequest {
  /** Required. The desired reschedule settings. */
  reschedule?: Reschedule;
  /** Optional. A unique identifier for this request. A random UUID is recommended. This request is only idempotent if a `request_id` is provided. */
  requestId?: string;
}

export const RescheduleMaintenanceRequest: Schema.Schema<RescheduleMaintenanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reschedule: Schema.optional(Reschedule),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RescheduleMaintenanceRequest" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

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
  /** Required. The name of the Managed Lustre instance. * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. */
  instanceId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The instance's project and location, in the format `projects/{project}/locations/{location}`. Locations map to Google Cloud zones; for example, `us-west1-b`. */
  parent: string;
  /** Request body */
  body?: Instance;
}

export const CreateProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String).pipe(T.HttpQuery("instanceId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/instances", hasBody: true }),
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

/** Creates a new instance in a given project and location. */
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

export interface PatchProjectsLocationsInstancesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The name of the instance. */
  name: string;
  /** Optional. Specifies the fields to be overwritten in the instance resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If no mask is provided then all fields present in the request are overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Instance;
}

export const PatchProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Instance).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

/** Updates the parameters of a single instance. */
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

export interface ListProjectsLocationsInstancesRequest {
  /** Optional. Desired order of results. */
  orderBy?: string;
  /** Required. The project and location for which to retrieve a list of instances, in the format `projects/{projectId}/locations/{location}`. To retrieve instance information for all locations, use "-" as the value of `{location}`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Requested page size. Server might return fewer items than requested. If unspecified, the server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse = ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists instances in a given project and location. */
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

export interface DeleteProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance to delete, in the format `projects/{projectId}/locations/{location}/instances/{instanceId}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

/** Deletes a single instance. */
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

export interface ExportDataProjectsLocationsInstancesRequest {
  /** Required. The name of the Managed Lustre instance in the format `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: ExportDataRequest;
}

export const ExportDataProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportDataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:exportData", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportDataProjectsLocationsInstancesRequest>;

export type ExportDataProjectsLocationsInstancesResponse = Operation;
export const ExportDataProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportDataProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports data from a Managed Lustre instance to Cloud Storage. */
export const exportDataProjectsLocationsInstances: API.OperationMethod<
  ExportDataProjectsLocationsInstancesRequest,
  ExportDataProjectsLocationsInstancesResponse,
  ExportDataProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportDataProjectsLocationsInstancesRequest,
  output: ExportDataProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RescheduleMaintenanceProjectsLocationsInstancesRequest {
  /** Required. Format: projects/{project}/locations/{location}/instances/{instance} */
  name: string;
  /** Request body */
  body?: RescheduleMaintenanceRequest;
}

export const RescheduleMaintenanceProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RescheduleMaintenanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:rescheduleMaintenance",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RescheduleMaintenanceProjectsLocationsInstancesRequest>;

export type RescheduleMaintenanceProjectsLocationsInstancesResponse = Operation;
export const RescheduleMaintenanceProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RescheduleMaintenanceProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reschedules a planned maintenance event for a specific instance. */
export const rescheduleMaintenanceProjectsLocationsInstances: API.OperationMethod<
  RescheduleMaintenanceProjectsLocationsInstancesRequest,
  RescheduleMaintenanceProjectsLocationsInstancesResponse,
  RescheduleMaintenanceProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RescheduleMaintenanceProjectsLocationsInstancesRequest,
  output: RescheduleMaintenanceProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportDataProjectsLocationsInstancesRequest {
  /** Required. The name of the Managed Lustre instance in the format `projects/{project}/locations/{location}/instances/{instance}`. */
  name: string;
  /** Request body */
  body?: ImportDataRequest;
}

export const ImportDataProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImportDataRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:importData", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ImportDataProjectsLocationsInstancesRequest>;

export type ImportDataProjectsLocationsInstancesResponse = Operation;
export const ImportDataProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportDataProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports data from Cloud Storage to a Managed Lustre instance. */
export const importDataProjectsLocationsInstances: API.OperationMethod<
  ImportDataProjectsLocationsInstancesRequest,
  ImportDataProjectsLocationsInstancesResponse,
  ImportDataProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportDataProjectsLocationsInstancesRequest,
  output: ImportDataProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInstancesRequest {
  /** Required. The instance resource name, in the format `projects/{projectId}/locations/{location}/instances/{instanceId}`. */
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single instance. */
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
