// ==========================================================================
// BigQuery Data Transfer API (bigquerydatatransfer v1)
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
  name: "bigquerydatatransfer",
  version: "v1",
  rootUrl: "https://bigquerydatatransfer.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DataSourceParameter {
  /** Deprecated. This field has no effect. */
  recurse?: boolean;
  /** For integer and double values specifies minimum allowed value. */
  minValue?: number;
  /** URL to a help document to further explain the naming requirements. */
  validationHelpUrl?: string;
  /** Deprecated. This field has no effect. */
  fields?: ReadonlyArray<DataSourceParameter>;
  /** Regular expression which can be used for parameter validation. */
  validationRegex?: string;
  /** If true, it should not be used in new transfers, and it should not be visible to users. */
  deprecated?: boolean;
  /** All possible values for the parameter. */
  allowedValues?: ReadonlyArray<string>;
  /** For integer and double values specifies maximum allowed value. */
  maxValue?: number;
  /** Parameter description. */
  description?: string;
  /** Deprecated. This field has no effect. */
  repeated?: boolean;
  /** Cannot be changed after initial creation. */
  immutable?: boolean;
  /** Parameter type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "STRING"
    | "INTEGER"
    | "DOUBLE"
    | "BOOLEAN"
    | "RECORD"
    | "PLUS_PAGE"
    | "LIST"
    | (string & {});
  /** Parameter identifier. */
  paramId?: string;
  /** Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values. */
  validationDescription?: string;
  /** Parameter display name in the user interface. */
  displayName?: string;
  /** For list parameters, the max size of the list. */
  maxListSize?: string;
  /** Is parameter required. */
  required?: boolean;
}

export const DataSourceParameter: Schema.Schema<DataSourceParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      recurse: Schema.optional(Schema.Boolean),
      minValue: Schema.optional(Schema.Number),
      validationHelpUrl: Schema.optional(Schema.String),
      fields: Schema.optional(Schema.Array(DataSourceParameter)),
      validationRegex: Schema.optional(Schema.String),
      deprecated: Schema.optional(Schema.Boolean),
      allowedValues: Schema.optional(Schema.Array(Schema.String)),
      maxValue: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      repeated: Schema.optional(Schema.Boolean),
      immutable: Schema.optional(Schema.Boolean),
      type: Schema.optional(Schema.String),
      paramId: Schema.optional(Schema.String),
      validationDescription: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      maxListSize: Schema.optional(Schema.String),
      required: Schema.optional(Schema.Boolean),
    }),
  ).annotate({
    identifier: "DataSourceParameter",
  }) as any as Schema.Schema<DataSourceParameter>;

export interface TransferStatusMetric {
  /** Optional. Unit for measuring progress (e.g., BYTES). */
  unit?:
    | "TRANSFER_STATUS_UNIT_UNSPECIFIED"
    | "TRANSFER_STATUS_UNIT_BYTES"
    | "TRANSFER_STATUS_UNIT_OBJECTS"
    | (string & {});
  /** Optional. Number of units pending transfer. */
  pending?: string;
  /** Optional. Number of units that failed to transfer. */
  failed?: string;
  /** Optional. Number of units transferred successfully. */
  completed?: string;
  /** Optional. Total number of units for the transfer. */
  total?: string;
}

export const TransferStatusMetric: Schema.Schema<TransferStatusMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unit: Schema.optional(Schema.String),
    pending: Schema.optional(Schema.String),
    failed: Schema.optional(Schema.String),
    completed: Schema.optional(Schema.String),
    total: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferStatusMetric" });

export interface TransferStatusSummary {
  /** Optional. List of transfer status metrics. */
  metrics?: ReadonlyArray<TransferStatusMetric>;
  /** Input only. Unit based on which transfer status progress should be calculated. */
  progressUnit?:
    | "TRANSFER_STATUS_UNIT_UNSPECIFIED"
    | "TRANSFER_STATUS_UNIT_BYTES"
    | "TRANSFER_STATUS_UNIT_OBJECTS"
    | (string & {});
}

export const TransferStatusSummary: Schema.Schema<TransferStatusSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(Schema.Array(TransferStatusMetric)),
    progressUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferStatusSummary" });

export interface PartitionDetail {
  /** Optional. Name of the table which has the partitions. */
  table?: string;
}

export const PartitionDetail: Schema.Schema<PartitionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartitionDetail" });

export interface TimeBasedSchedule {
  /** Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source. */
  schedule?: string;
  /** Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. */
  endTime?: string;
  /** Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. */
  startTime?: string;
}

export const TimeBasedSchedule: Schema.Schema<TimeBasedSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeBasedSchedule" });

export interface ManualSchedule {}

export const ManualSchedule: Schema.Schema<ManualSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ManualSchedule",
  });

export interface TableDetail {
  /** Optional. Total number of partitions being tracked within the table. */
  partitionCount?: string;
}

export const TableDetail: Schema.Schema<TableDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "TableDetail" });

export interface HierarchyDetail {
  /** Optional. Table details related to hierarchy. */
  tableDetail?: TableDetail;
  /** Optional. Partition details related to hierarchy. */
  partitionDetail?: PartitionDetail;
}

export const HierarchyDetail: Schema.Schema<HierarchyDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableDetail: Schema.optional(TableDetail),
    partitionDetail: Schema.optional(PartitionDetail),
  }).annotate({ identifier: "HierarchyDetail" });

export interface ScheduleTransferRunsRequest {
  /** Required. End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`. */
  endTime?: string;
  /** Required. Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`. */
  startTime?: string;
}

export const ScheduleTransferRunsRequest: Schema.Schema<ScheduleTransferRunsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScheduleTransferRunsRequest" });

export interface TransferMessage {
  /** Time when message was logged. */
  messageTime?: string;
  /** Message severity. */
  severity?:
    | "MESSAGE_SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {});
  /** Message text. */
  messageText?: string;
}

export const TransferMessage: Schema.Schema<TransferMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageTime: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    messageText: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferMessage" });

export interface ListTransferLogsResponse {
  /** Output only. The stored pipeline transfer messages. */
  transferMessages?: ReadonlyArray<TransferMessage>;
  /** Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results. */
  nextPageToken?: string;
}

export const ListTransferLogsResponse: Schema.Schema<ListTransferLogsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferMessages: Schema.optional(Schema.Array(TransferMessage)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTransferLogsResponse" });

export interface TransferRunBrief {
  /** Optional. Run URI. The format must be: `projects/{project}/locations/{location}/transferConfigs/{transfer_config}/run/{run}` */
  run?: string;
  /** Optional. Start time of the transfer run. */
  startTime?: string;
}

export const TransferRunBrief: Schema.Schema<TransferRunBrief> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferRunBrief" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Status" });

export interface TransferResourceStatusDetail {
  /** Optional. Transfer status summary of the resource. */
  summary?: TransferStatusSummary;
  /** Optional. Transfer state of the resource. */
  state?:
    | "RESOURCE_TRANSFER_STATE_UNSPECIFIED"
    | "RESOURCE_TRANSFER_PENDING"
    | "RESOURCE_TRANSFER_RUNNING"
    | "RESOURCE_TRANSFER_SUCCEEDED"
    | "RESOURCE_TRANSFER_FAILED"
    | "RESOURCE_TRANSFER_CANCELLED"
    | (string & {});
  /** Optional. Transfer error details for the resource. */
  error?: Status;
  /** Output only. Percentage of the transfer completed. Valid values: 0-100. */
  completedPercentage?: number;
}

export const TransferResourceStatusDetail: Schema.Schema<TransferResourceStatusDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.optional(TransferStatusSummary),
    state: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    completedPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TransferResourceStatusDetail" });

export interface TransferResource {
  /** Optional. Run details for the latest run. */
  latestRun?: TransferRunBrief;
  /** Output only. Run details for the last successful run. */
  lastSuccessfulRun?: TransferRunBrief;
  /** Optional. Details about the hierarchy. */
  hierarchyDetail?: HierarchyDetail;
  /** Identifier. Resource name. */
  name?: string;
  /** Optional. Status details for the latest run. */
  latestStatusDetail?: TransferResourceStatusDetail;
  /** Optional. Resource destination. */
  destination?:
    | "RESOURCE_DESTINATION_UNSPECIFIED"
    | "RESOURCE_DESTINATION_BIGQUERY"
    | "RESOURCE_DESTINATION_DATAPROC_METASTORE"
    | "RESOURCE_DESTINATION_BIGLAKE_METASTORE"
    | "RESOURCE_DESTINATION_BIGLAKE_REST_CATALOG"
    | "RESOURCE_DESTINATION_BIGLAKE_HIVE_CATALOG"
    | (string & {});
  /** Output only. Time when the resource was last updated. */
  updateTime?: string;
  /** Optional. Resource type. */
  type?:
    | "RESOURCE_TYPE_UNSPECIFIED"
    | "RESOURCE_TYPE_TABLE"
    | "RESOURCE_TYPE_PARTITION"
    | (string & {});
}

export const TransferResource: Schema.Schema<TransferResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestRun: Schema.optional(TransferRunBrief),
    lastSuccessfulRun: Schema.optional(TransferRunBrief),
    hierarchyDetail: Schema.optional(HierarchyDetail),
    name: Schema.optional(Schema.String),
    latestStatusDetail: Schema.optional(TransferResourceStatusDetail),
    destination: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferResource" });

export interface ListTransferResourcesResponse {
  /** Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Output only. The transfer resources. */
  transferResources?: ReadonlyArray<TransferResource>;
}

export const ListTransferResourcesResponse: Schema.Schema<ListTransferResourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    transferResources: Schema.optional(Schema.Array(TransferResource)),
  }).annotate({ identifier: "ListTransferResourcesResponse" });

export interface CheckValidCredsRequest {}

export const CheckValidCredsRequest: Schema.Schema<CheckValidCredsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CheckValidCredsRequest",
  });

export interface ScheduleOptions {
  /** If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored. */
  disableAutoScheduling?: boolean;
  /** Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option. */
  startTime?: string;
  /** Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option. */
  endTime?: string;
}

export const ScheduleOptions: Schema.Schema<ScheduleOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disableAutoScheduling: Schema.optional(Schema.Boolean),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ScheduleOptions" });

export interface EventDrivenSchedule {
  /** Pub/Sub subscription name used to receive events. Only Google Cloud Storage data source support this option. Format: projects/{project}/subscriptions/{subscription} */
  pubsubSubscription?: string;
}

export const EventDrivenSchedule: Schema.Schema<EventDrivenSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pubsubSubscription: Schema.optional(Schema.String),
  }).annotate({ identifier: "EventDrivenSchedule" });

export interface ScheduleOptionsV2 {
  /** Manual transfer schedule. If set, the transfer run will not be auto-scheduled by the system, unless the client invokes StartManualTransferRuns. This is equivalent to disable_auto_scheduling = true. */
  manualSchedule?: ManualSchedule;
  /** Event driven transfer schedule options. If set, the transfer will be scheduled upon events arrial. */
  eventDrivenSchedule?: EventDrivenSchedule;
  /** Time based transfer schedule options. This is the default schedule option. */
  timeBasedSchedule?: TimeBasedSchedule;
}

export const ScheduleOptionsV2: Schema.Schema<ScheduleOptionsV2> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manualSchedule: Schema.optional(ManualSchedule),
    eventDrivenSchedule: Schema.optional(EventDrivenSchedule),
    timeBasedSchedule: Schema.optional(TimeBasedSchedule),
  }).annotate({ identifier: "ScheduleOptionsV2" });

export interface UserInfo {
  /** E-mail address of the user. */
  email?: string;
}

export const UserInfo: Schema.Schema<UserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserInfo" });

export interface EmailPreferences {
  /** If true, email notifications will be sent on transfer run failures. */
  enableFailureEmail?: boolean;
}

export const EmailPreferences: Schema.Schema<EmailPreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enableFailureEmail: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "EmailPreferences" });

export interface EncryptionConfiguration {
  /** The name of the KMS key used for encrypting BigQuery data. */
  kmsKeyName?: string;
}

export const EncryptionConfiguration: Schema.Schema<EncryptionConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionConfiguration" });

export interface TransferConfig {
  /** Options customizing the data transfer schedule. */
  scheduleOptions?: ScheduleOptions;
  /** Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project_id}/topics/{topic_id}` */
  notificationPubsubTopic?: string;
  /** The classification of the destination table. */
  managedTableType?:
    | "MANAGED_TABLE_TYPE_UNSPECIFIED"
    | "NATIVE"
    | "BIGLAKE"
    | (string & {});
  /** Options customizing different types of data transfer schedule. This field replaces "schedule" and "schedule_options" fields. ScheduleOptionsV2 cannot be used together with ScheduleOptions/Schedule. */
  scheduleOptionsV2?: ScheduleOptionsV2;
  /** Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated. */
  ownerInfo?: UserInfo;
  /** Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. */
  name?: string;
  /** Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config. */
  emailPreferences?: EmailPreferences;
  /** Output only. Region in which BigQuery dataset is located. */
  datasetRegion?: string;
  /** The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value. */
  dataRefreshWindowDays?: number;
  /** Is this config disabled. When set to true, no runs will be scheduled for this transfer config. */
  disabled?: boolean;
  /** Deprecated. Unique ID of the user on whose behalf transfer is done. */
  userId?: string;
  /** Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list */
  dataSourceId?: string;
  /** Output only. Data transfer modification time. Ignored by server on input. */
  updateTime?: string;
  /** Output only. Error code with detailed information about reason of the latest config failure. */
  error?: Status;
  /** Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source. */
  schedule?: string;
  /** The BigQuery target dataset id. */
  destinationDatasetId?: string;
  /** Output only. Next time when data transfer will run. */
  nextRunTime?: string;
  /** Output only. State of the most recently updated transfer run. */
  state?:
    | "TRANSFER_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The encryption configuration part. Currently, it is only used for the optional KMS key name. The BigQuery service account of your project must be granted permissions to use the key. Read methods will return the key name applied in effect. Write methods will apply the key if it is present, or otherwise try to apply project default keys if it is absent. */
  encryptionConfiguration?: EncryptionConfiguration;
  /** Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq */
  params?: Record<string, unknown>;
  /** User specified display name for the data transfer. */
  displayName?: string;
}

export const TransferConfig: Schema.Schema<TransferConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduleOptions: Schema.optional(ScheduleOptions),
    notificationPubsubTopic: Schema.optional(Schema.String),
    managedTableType: Schema.optional(Schema.String),
    scheduleOptionsV2: Schema.optional(ScheduleOptionsV2),
    ownerInfo: Schema.optional(UserInfo),
    name: Schema.optional(Schema.String),
    emailPreferences: Schema.optional(EmailPreferences),
    datasetRegion: Schema.optional(Schema.String),
    dataRefreshWindowDays: Schema.optional(Schema.Number),
    disabled: Schema.optional(Schema.Boolean),
    userId: Schema.optional(Schema.String),
    dataSourceId: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    schedule: Schema.optional(Schema.String),
    destinationDatasetId: Schema.optional(Schema.String),
    nextRunTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    encryptionConfiguration: Schema.optional(EncryptionConfiguration),
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "TransferConfig" });

export interface ListTransferConfigsResponse {
  /** Output only. The stored pipeline transfer configurations. */
  transferConfigs?: ReadonlyArray<TransferConfig>;
  /** Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results. */
  nextPageToken?: string;
}

export const ListTransferConfigsResponse: Schema.Schema<ListTransferConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferConfigs: Schema.optional(Schema.Array(TransferConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTransferConfigsResponse" });

export interface TransferRun {
  /** Status of the transfer run. */
  errorStatus?: Status;
  /** Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq */
  params?: Record<string, unknown>;
  /** For batch transfer runs, specifies the date and time of the data should be ingested. */
  runTime?: string;
  /** Output only. Last time the data transfer run state was updated. */
  updateTime?: string;
  /** Output only. Data source id. */
  dataSourceId?: string;
  /** Output only. Time when transfer run ended. Parameter ignored by server for input requests. */
  endTime?: string;
  /** Output only. The BigQuery target dataset id. */
  destinationDatasetId?: string;
  /** Data transfer run state. Ignored for input requests. */
  state?:
    | "TRANSFER_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this. */
  schedule?: string;
  /** Output only. Time when transfer run was started. Parameter ignored by server for input requests. */
  startTime?: string;
  /** Deprecated. Unique ID of the user on whose behalf transfer is done. */
  userId?: string;
  /** Minimum time after which a transfer run can be started. */
  scheduleTime?: string;
  /** Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/{project_id}/topics/{topic_id}` */
  notificationPubsubTopic?: string;
  /** Identifier. The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run. */
  name?: string;
  /** Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from. */
  emailPreferences?: EmailPreferences;
}

export const TransferRun: Schema.Schema<TransferRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorStatus: Schema.optional(Status),
    params: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    runTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    dataSourceId: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    destinationDatasetId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    schedule: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    scheduleTime: Schema.optional(Schema.String),
    notificationPubsubTopic: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    emailPreferences: Schema.optional(EmailPreferences),
  }).annotate({ identifier: "TransferRun" });

export interface StartManualTransferRunsResponse {
  /** The transfer runs that were created. */
  runs?: ReadonlyArray<TransferRun>;
}

export const StartManualTransferRunsResponse: Schema.Schema<StartManualTransferRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runs: Schema.optional(Schema.Array(TransferRun)),
  }).annotate({ identifier: "StartManualTransferRunsResponse" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface CheckValidCredsResponse {
  /** If set to `true`, the credentials exist and are valid. */
  hasValidCreds?: boolean;
}

export const CheckValidCredsResponse: Schema.Schema<CheckValidCredsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasValidCreds: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CheckValidCredsResponse" });

export interface UnenrollDataSourcesRequest {
  /** Data sources that are unenrolled. It is required to provide at least one data source id. */
  dataSourceIds?: ReadonlyArray<string>;
}

export const UnenrollDataSourcesRequest: Schema.Schema<UnenrollDataSourcesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "UnenrollDataSourcesRequest" });

export interface TimeRange {
  /** End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive). */
  endTime?: string;
  /** Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than the end_time. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive). */
  startTime?: string;
}

export const TimeRange: Schema.Schema<TimeRange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeRange" });

export interface DataSource {
  /** Data source id. */
  dataSourceId?: string;
  /** Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery */
  scopes?: ReadonlyArray<string>;
  /** Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. */
  defaultSchedule?: string;
  /** Url for the help document for this data source. */
  helpUrl?: string;
  /** User friendly data source description string. */
  description?: string;
  /** Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule. */
  supportsCustomSchedule?: boolean;
  /** Indicates the type of authorization. */
  authorizationType?:
    | "AUTHORIZATION_TYPE_UNSPECIFIED"
    | "AUTHORIZATION_CODE"
    | "GOOGLE_PLUS_AUTHORIZATION_CODE"
    | "FIRST_PARTY_OAUTH"
    | (string & {});
  /** The minimum interval for scheduler to schedule runs. */
  minimumScheduleInterval?: string;
  /** User friendly data source name. */
  displayName?: string;
  /** Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically. */
  dataRefreshType?:
    | "DATA_REFRESH_TYPE_UNSPECIFIED"
    | "SLIDING_WINDOW"
    | "CUSTOM_SLIDING_WINDOW"
    | (string & {});
  /** Deprecated. This field has no effect. */
  transferType?:
    | "TRANSFER_TYPE_UNSPECIFIED"
    | "BATCH"
    | "STREAMING"
    | (string & {});
  /** Disables backfilling and manual run scheduling for the data source. */
  manualRunsDisabled?: boolean;
  /** Data source parameters. */
  parameters?: ReadonlyArray<DataSourceParameter>;
  /** Data source client id which should be used to receive refresh token. */
  clientId?: string;
  /** Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`. */
  defaultDataRefreshWindowDays?: number;
  /** Output only. Data source resource name. */
  name?: string;
  /** Deprecated. This field has no effect. */
  supportsMultipleTransfers?: boolean;
  /** The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED. */
  updateDeadlineSeconds?: number;
}

export const DataSource: Schema.Schema<DataSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceId: Schema.optional(Schema.String),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    defaultSchedule: Schema.optional(Schema.String),
    helpUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    supportsCustomSchedule: Schema.optional(Schema.Boolean),
    authorizationType: Schema.optional(Schema.String),
    minimumScheduleInterval: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    dataRefreshType: Schema.optional(Schema.String),
    transferType: Schema.optional(Schema.String),
    manualRunsDisabled: Schema.optional(Schema.Boolean),
    parameters: Schema.optional(Schema.Array(DataSourceParameter)),
    clientId: Schema.optional(Schema.String),
    defaultDataRefreshWindowDays: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    supportsMultipleTransfers: Schema.optional(Schema.Boolean),
    updateDeadlineSeconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DataSource" });

export interface ListDataSourcesResponse {
  /** List of supported data sources and their transfer settings. */
  dataSources?: ReadonlyArray<DataSource>;
  /** Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results. */
  nextPageToken?: string;
}

export const ListDataSourcesResponse: Schema.Schema<ListDataSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSources: Schema.optional(Schema.Array(DataSource)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDataSourcesResponse" });

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

export interface ScheduleTransferRunsResponse {
  /** The transfer runs that were scheduled. */
  runs?: ReadonlyArray<TransferRun>;
}

export const ScheduleTransferRunsResponse: Schema.Schema<ScheduleTransferRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runs: Schema.optional(Schema.Array(TransferRun)),
  }).annotate({ identifier: "ScheduleTransferRunsResponse" });

export interface EnrollDataSourcesRequest {
  /** Data sources that are enrolled. It is required to provide at least one data source id. */
  dataSourceIds?: ReadonlyArray<string>;
}

export const EnrollDataSourcesRequest: Schema.Schema<EnrollDataSourcesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EnrollDataSourcesRequest" });

export interface StartManualTransferRunsRequest {
  /** A run_time timestamp for historical data files or reports that are scheduled to be transferred by the scheduled transfer run. requested_run_time must be a past time and cannot include future time values. */
  requestedRunTime?: string;
  /** A time_range start and end timestamp for historical data files or reports that are scheduled to be transferred by the scheduled transfer run. requested_time_range must be a past time and cannot include future time values. */
  requestedTimeRange?: TimeRange;
}

export const StartManualTransferRunsRequest: Schema.Schema<StartManualTransferRunsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedRunTime: Schema.optional(Schema.String),
    requestedTimeRange: Schema.optional(TimeRange),
  }).annotate({ identifier: "StartManualTransferRunsRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ListTransferRunsResponse {
  /** Output only. The stored pipeline transfer runs. */
  transferRuns?: ReadonlyArray<TransferRun>;
  /** Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferRunsRequest.page_token` to request the next page of list results. */
  nextPageToken?: string;
}

export const ListTransferRunsResponse: Schema.Schema<ListTransferRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferRuns: Schema.optional(Schema.Array(TransferRun)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListTransferRunsResponse" });

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

export interface EnrollDataSourcesProjectsRequest {
  /** Required. The name of the project resource in the form: `projects/{project_id}` */
  name: string;
  /** Request body */
  body?: EnrollDataSourcesRequest;
}

export const EnrollDataSourcesProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EnrollDataSourcesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:enrollDataSources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollDataSourcesProjectsRequest>;

export type EnrollDataSourcesProjectsResponse = Empty;
export const EnrollDataSourcesProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type EnrollDataSourcesProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers). */
export const enrollDataSourcesProjects: API.OperationMethod<
  EnrollDataSourcesProjectsRequest,
  EnrollDataSourcesProjectsResponse,
  EnrollDataSourcesProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollDataSourcesProjectsRequest,
  output: EnrollDataSourcesProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CheckValidCredsProjectsDataSourcesRequest {
  /** Required. The name of the data source. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` */
  name: string;
  /** Request body */
  body?: CheckValidCredsRequest;
}

export const CheckValidCredsProjectsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CheckValidCredsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:checkValidCreds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CheckValidCredsProjectsDataSourcesRequest>;

export type CheckValidCredsProjectsDataSourcesResponse =
  CheckValidCredsResponse;
export const CheckValidCredsProjectsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckValidCredsResponse;

export type CheckValidCredsProjectsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns true if valid credentials exist for the given data source and requesting user. */
export const checkValidCredsProjectsDataSources: API.OperationMethod<
  CheckValidCredsProjectsDataSourcesRequest,
  CheckValidCredsProjectsDataSourcesResponse,
  CheckValidCredsProjectsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckValidCredsProjectsDataSourcesRequest,
  output: CheckValidCredsProjectsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDataSourcesRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` */
  name: string;
}

export const GetProjectsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDataSourcesRequest>;

export type GetProjectsDataSourcesResponse = DataSource;
export const GetProjectsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSource;

export type GetProjectsDataSourcesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a supported data source and returns its settings. */
export const getProjectsDataSources: API.OperationMethod<
  GetProjectsDataSourcesRequest,
  GetProjectsDataSourcesResponse,
  GetProjectsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDataSourcesRequest,
  output: GetProjectsDataSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsDataSourcesRequest {
  /** Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
}

export const ListProjectsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataSources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDataSourcesRequest>;

export type ListProjectsDataSourcesResponse = ListDataSourcesResponse;
export const ListProjectsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSourcesResponse;

export type ListProjectsDataSourcesError = DefaultErrors | NotFound | Forbidden;

/** Lists supported data sources and returns their settings. */
export const listProjectsDataSources: API.PaginatedOperationMethod<
  ListProjectsDataSourcesRequest,
  ListProjectsDataSourcesResponse,
  ListProjectsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDataSourcesRequest,
  output: ListProjectsDataSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsTransferConfigsRequest {
  /** Required. The name of the resource to delete. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  name: string;
}

export const DeleteProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsTransferConfigsRequest>;

export type DeleteProjectsTransferConfigsResponse = Empty;
export const DeleteProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a data transfer configuration, including any associated transfer runs and logs. */
export const deleteProjectsTransferConfigs: API.OperationMethod<
  DeleteProjectsTransferConfigsRequest,
  DeleteProjectsTransferConfigsResponse,
  DeleteProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsTransferConfigsRequest,
  output: DeleteProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsTransferConfigsRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  name: string;
}

export const GetProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTransferConfigsRequest>;

export type GetProjectsTransferConfigsResponse = TransferConfig;
export const GetProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferConfig;

export type GetProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about a data transfer config. */
export const getProjectsTransferConfigs: API.OperationMethod<
  GetProjectsTransferConfigsRequest,
  GetProjectsTransferConfigsResponse,
  GetProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTransferConfigsRequest,
  output: GetProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsTransferConfigsRequest {
  /** When specified, only configurations of requested data sources are returned. */
  dataSourceIds?: string[];
  /** Required. The BigQuery project id for which transfer configs should be returned. If you are using the regionless method, the location must be `US` and `parent` should be in the following form: * `projects/{project_id} If you are using the regionalized method, `parent` should be in the following form: * `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
}

export const ListProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("dataSourceIds"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transferConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTransferConfigsRequest>;

export type ListProjectsTransferConfigsResponse = ListTransferConfigsResponse;
export const ListProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferConfigsResponse;

export type ListProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about all transfer configs owned by a project in the specified location. */
export const listProjectsTransferConfigs: API.PaginatedOperationMethod<
  ListProjectsTransferConfigsRequest,
  ListProjectsTransferConfigsResponse,
  ListProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTransferConfigsRequest,
  output: ListProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface StartManualRunsProjectsTransferConfigsRequest {
  /** Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  parent: string;
  /** Request body */
  body?: StartManualTransferRunsRequest;
}

export const StartManualRunsProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(StartManualTransferRunsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:startManualRuns",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartManualRunsProjectsTransferConfigsRequest>;

export type StartManualRunsProjectsTransferConfigsResponse =
  StartManualTransferRunsResponse;
export const StartManualRunsProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartManualTransferRunsResponse;

export type StartManualRunsProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each. */
export const startManualRunsProjectsTransferConfigs: API.OperationMethod<
  StartManualRunsProjectsTransferConfigsRequest,
  StartManualRunsProjectsTransferConfigsResponse,
  StartManualRunsProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartManualRunsProjectsTransferConfigsRequest,
  output: StartManualRunsProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsTransferConfigsRequest {
  /** Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. */
  name: string;
  /** Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). */
  serviceAccountName?: string;
  /** Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. */
  authorizationCode?: string;
  /** Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. */
  versionInfo?: string;
  /** Required. Required list of fields to be updated in this request. */
  updateMask?: string;
  /** Request body */
  body?: TransferConfig;
}

export const PatchProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    serviceAccountName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceAccountName"),
    ),
    authorizationCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authorizationCode"),
    ),
    versionInfo: Schema.optional(Schema.String).pipe(
      T.HttpQuery("versionInfo"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TransferConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsTransferConfigsRequest>;

export type PatchProjectsTransferConfigsResponse = TransferConfig;
export const PatchProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferConfig;

export type PatchProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a data transfer configuration. All fields must be set, even if they are not updated. */
export const patchProjectsTransferConfigs: API.OperationMethod<
  PatchProjectsTransferConfigsRequest,
  PatchProjectsTransferConfigsResponse,
  PatchProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsTransferConfigsRequest,
  output: PatchProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsTransferConfigsRequest {
  /** Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. */
  versionInfo?: string;
  /** Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail. */
  parent: string;
  /** Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. */
  authorizationCode?: string;
  /** Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). */
  serviceAccountName?: string;
  /** Request body */
  body?: TransferConfig;
}

export const CreateProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String).pipe(
      T.HttpQuery("versionInfo"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    authorizationCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authorizationCode"),
    ),
    serviceAccountName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceAccountName"),
    ),
    body: Schema.optional(TransferConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/transferConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsTransferConfigsRequest>;

export type CreateProjectsTransferConfigsResponse = TransferConfig;
export const CreateProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferConfig;

export type CreateProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new data transfer configuration. */
export const createProjectsTransferConfigs: API.OperationMethod<
  CreateProjectsTransferConfigsRequest,
  CreateProjectsTransferConfigsResponse,
  CreateProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsTransferConfigsRequest,
  output: CreateProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ScheduleRunsProjectsTransferConfigsRequest {
  /** Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  parent: string;
  /** Request body */
  body?: ScheduleTransferRunsRequest;
}

export const ScheduleRunsProjectsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ScheduleTransferRunsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:scheduleRuns",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ScheduleRunsProjectsTransferConfigsRequest>;

export type ScheduleRunsProjectsTransferConfigsResponse =
  ScheduleTransferRunsResponse;
export const ScheduleRunsProjectsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScheduleTransferRunsResponse;

export type ScheduleRunsProjectsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead. */
export const scheduleRunsProjectsTransferConfigs: API.OperationMethod<
  ScheduleRunsProjectsTransferConfigsRequest,
  ScheduleRunsProjectsTransferConfigsResponse,
  ScheduleRunsProjectsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ScheduleRunsProjectsTransferConfigsRequest,
  output: ScheduleRunsProjectsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsTransferConfigsTransferResourcesRequest {
  /** Required. The name of the transfer resource in the form of: * `projects/{project}/transferConfigs/{transfer_config}/transferResources/{transfer_resource}` * `projects/{project}/locations/{location}/transferConfigs/{transfer_config}/transferResources/{transfer_resource}` */
  name: string;
}

export const GetProjectsTransferConfigsTransferResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTransferConfigsTransferResourcesRequest>;

export type GetProjectsTransferConfigsTransferResourcesResponse =
  TransferResource;
export const GetProjectsTransferConfigsTransferResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferResource;

export type GetProjectsTransferConfigsTransferResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a transfer resource. */
export const getProjectsTransferConfigsTransferResources: API.OperationMethod<
  GetProjectsTransferConfigsTransferResourcesRequest,
  GetProjectsTransferConfigsTransferResourcesResponse,
  GetProjectsTransferConfigsTransferResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTransferConfigsTransferResourcesRequest,
  output: GetProjectsTransferConfigsTransferResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsTransferConfigsTransferResourcesRequest {
  /** Required. Name of transfer configuration for which transfer resources should be retrieved. The name should be in one of the following forms: * `projects/{project}/transferConfigs/{transfer_config}` * `projects/{project}/locations/{location_id}/transferConfigs/{transfer_config}` */
  parent: string;
  /** Optional. The maximum number of transfer resources to return. The maximum value is 1000; values above 1000 will be coerced to 1000. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListTransferResources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTransferResources` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter for the transfer resources. Currently supported filters include: * Resource name: `name` - Wildcard supported * Resource type: `type` * Resource destination: `destination` * Latest resource state: `latest_status_detail.state` * Last update time: `update_time` - RFC-3339 format * Parent table name: `hierarchy_detail.partition_detail.table` Multiple filters can be applied using the `AND/OR` operator. Examples: * `name="*123" AND (type="TABLE" OR latest_status_detail.state="SUCCEEDED")` * `update_time >= "2012-04-21T11:30:00-04:00"` * `hierarchy_detail.partition_detail.table = "table1"` */
  filter?: string;
}

export const ListProjectsTransferConfigsTransferResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transferResources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTransferConfigsTransferResourcesRequest>;

export type ListProjectsTransferConfigsTransferResourcesResponse =
  ListTransferResourcesResponse;
export const ListProjectsTransferConfigsTransferResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferResourcesResponse;

export type ListProjectsTransferConfigsTransferResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about transfer resources. */
export const listProjectsTransferConfigsTransferResources: API.PaginatedOperationMethod<
  ListProjectsTransferConfigsTransferResourcesRequest,
  ListProjectsTransferConfigsTransferResourcesResponse,
  ListProjectsTransferConfigsTransferResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTransferConfigsTransferResourcesRequest,
  output: ListProjectsTransferConfigsTransferResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsTransferConfigsRunsRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` */
  name: string;
}

export const GetProjectsTransferConfigsRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsTransferConfigsRunsRequest>;

export type GetProjectsTransferConfigsRunsResponse = TransferRun;
export const GetProjectsTransferConfigsRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferRun;

export type GetProjectsTransferConfigsRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about the particular transfer run. */
export const getProjectsTransferConfigsRuns: API.OperationMethod<
  GetProjectsTransferConfigsRunsRequest,
  GetProjectsTransferConfigsRunsResponse,
  GetProjectsTransferConfigsRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsTransferConfigsRunsRequest,
  output: GetProjectsTransferConfigsRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsTransferConfigsRunsRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` */
  name: string;
}

export const DeleteProjectsTransferConfigsRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsTransferConfigsRunsRequest>;

export type DeleteProjectsTransferConfigsRunsResponse = Empty;
export const DeleteProjectsTransferConfigsRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsTransferConfigsRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified transfer run. */
export const deleteProjectsTransferConfigsRuns: API.OperationMethod<
  DeleteProjectsTransferConfigsRunsRequest,
  DeleteProjectsTransferConfigsRunsResponse,
  DeleteProjectsTransferConfigsRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsTransferConfigsRunsRequest,
  output: DeleteProjectsTransferConfigsRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsTransferConfigsRunsRequest {
  /** Indicates how run attempts are to be pulled. */
  runAttempt?: "RUN_ATTEMPT_UNSPECIFIED" | "LATEST" | (string & {});
  /** Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** When specified, only transfer runs with requested states are returned. */
  states?:
    | "TRANSFER_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | (string & {})[];
  /** Required. Name of transfer configuration for which transfer runs should be retrieved. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  parent: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
}

export const ListProjectsTransferConfigsRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runAttempt: Schema.optional(Schema.String).pipe(T.HttpQuery("runAttempt")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    states: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("states"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTransferConfigsRunsRequest>;

export type ListProjectsTransferConfigsRunsResponse = ListTransferRunsResponse;
export const ListProjectsTransferConfigsRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferRunsResponse;

export type ListProjectsTransferConfigsRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about running and completed transfer runs. */
export const listProjectsTransferConfigsRuns: API.PaginatedOperationMethod<
  ListProjectsTransferConfigsRunsRequest,
  ListProjectsTransferConfigsRunsResponse,
  ListProjectsTransferConfigsRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTransferConfigsRunsRequest,
  output: ListProjectsTransferConfigsRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsTransferConfigsRunsTransferLogsRequest {
  /** Required. Transfer run name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` */
  parent: string;
  /** Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
  /** Message types to return. If not populated - INFO, WARNING and ERROR messages are returned. */
  messageTypes?:
    | "MESSAGE_SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {})[];
}

export const ListProjectsTransferConfigsRunsTransferLogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    messageTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("messageTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transferLogs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsTransferConfigsRunsTransferLogsRequest>;

export type ListProjectsTransferConfigsRunsTransferLogsResponse =
  ListTransferLogsResponse;
export const ListProjectsTransferConfigsRunsTransferLogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferLogsResponse;

export type ListProjectsTransferConfigsRunsTransferLogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns log messages for the transfer run. */
export const listProjectsTransferConfigsRunsTransferLogs: API.PaginatedOperationMethod<
  ListProjectsTransferConfigsRunsTransferLogsRequest,
  ListProjectsTransferConfigsRunsTransferLogsResponse,
  ListProjectsTransferConfigsRunsTransferLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsTransferConfigsRunsTransferLogsRequest,
  output: ListProjectsTransferConfigsRunsTransferLogsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface EnrollDataSourcesProjectsLocationsRequest {
  /** Required. The name of the project resource in the form: `projects/{project_id}` */
  name: string;
  /** Request body */
  body?: EnrollDataSourcesRequest;
}

export const EnrollDataSourcesProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(EnrollDataSourcesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:enrollDataSources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<EnrollDataSourcesProjectsLocationsRequest>;

export type EnrollDataSourcesProjectsLocationsResponse = Empty;
export const EnrollDataSourcesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type EnrollDataSourcesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers). */
export const enrollDataSourcesProjectsLocations: API.OperationMethod<
  EnrollDataSourcesProjectsLocationsRequest,
  EnrollDataSourcesProjectsLocationsResponse,
  EnrollDataSourcesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnrollDataSourcesProjectsLocationsRequest,
  output: EnrollDataSourcesProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UnenrollDataSourcesProjectsLocationsRequest {
  /** Required. The name of the project resource in the form: `projects/{project_id}` */
  name: string;
  /** Request body */
  body?: UnenrollDataSourcesRequest;
}

export const UnenrollDataSourcesProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UnenrollDataSourcesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:unenrollDataSources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UnenrollDataSourcesProjectsLocationsRequest>;

export type UnenrollDataSourcesProjectsLocationsResponse = Empty;
export const UnenrollDataSourcesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type UnenrollDataSourcesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled. */
export const unenrollDataSourcesProjectsLocations: API.OperationMethod<
  UnenrollDataSourcesProjectsLocationsRequest,
  UnenrollDataSourcesProjectsLocationsResponse,
  UnenrollDataSourcesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UnenrollDataSourcesProjectsLocationsRequest,
  output: UnenrollDataSourcesProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface CreateProjectsLocationsTransferConfigsRequest {
  /** Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. */
  versionInfo?: string;
  /** Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail. */
  parent: string;
  /** Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config. */
  authorizationCode?: string;
  /** Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). */
  serviceAccountName?: string;
  /** Request body */
  body?: TransferConfig;
}

export const CreateProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionInfo: Schema.optional(Schema.String).pipe(
      T.HttpQuery("versionInfo"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    authorizationCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authorizationCode"),
    ),
    serviceAccountName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceAccountName"),
    ),
    body: Schema.optional(TransferConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/transferConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTransferConfigsRequest>;

export type CreateProjectsLocationsTransferConfigsResponse = TransferConfig;
export const CreateProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferConfig;

export type CreateProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new data transfer configuration. */
export const createProjectsLocationsTransferConfigs: API.OperationMethod<
  CreateProjectsLocationsTransferConfigsRequest,
  CreateProjectsLocationsTransferConfigsResponse,
  CreateProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTransferConfigsRequest,
  output: CreateProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ScheduleRunsProjectsLocationsTransferConfigsRequest {
  /** Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  parent: string;
  /** Request body */
  body?: ScheduleTransferRunsRequest;
}

export const ScheduleRunsProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ScheduleTransferRunsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:scheduleRuns",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ScheduleRunsProjectsLocationsTransferConfigsRequest>;

export type ScheduleRunsProjectsLocationsTransferConfigsResponse =
  ScheduleTransferRunsResponse;
export const ScheduleRunsProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ScheduleTransferRunsResponse;

export type ScheduleRunsProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead. */
export const scheduleRunsProjectsLocationsTransferConfigs: API.OperationMethod<
  ScheduleRunsProjectsLocationsTransferConfigsRequest,
  ScheduleRunsProjectsLocationsTransferConfigsResponse,
  ScheduleRunsProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ScheduleRunsProjectsLocationsTransferConfigsRequest,
  output: ScheduleRunsProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartManualRunsProjectsLocationsTransferConfigsRequest {
  /** Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  parent: string;
  /** Request body */
  body?: StartManualTransferRunsRequest;
}

export const StartManualRunsProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(StartManualTransferRunsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:startManualRuns",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartManualRunsProjectsLocationsTransferConfigsRequest>;

export type StartManualRunsProjectsLocationsTransferConfigsResponse =
  StartManualTransferRunsResponse;
export const StartManualRunsProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartManualTransferRunsResponse;

export type StartManualRunsProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each. */
export const startManualRunsProjectsLocationsTransferConfigs: API.OperationMethod<
  StartManualRunsProjectsLocationsTransferConfigsRequest,
  StartManualRunsProjectsLocationsTransferConfigsResponse,
  StartManualRunsProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartManualRunsProjectsLocationsTransferConfigsRequest,
  output: StartManualRunsProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsTransferConfigsRequest {
  /** Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config. */
  name: string;
  /** Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts). */
  serviceAccountName?: string;
  /** Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. */
  versionInfo?: string;
  /** Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config. */
  authorizationCode?: string;
  /** Required. Required list of fields to be updated in this request. */
  updateMask?: string;
  /** Request body */
  body?: TransferConfig;
}

export const PatchProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    serviceAccountName: Schema.optional(Schema.String).pipe(
      T.HttpQuery("serviceAccountName"),
    ),
    versionInfo: Schema.optional(Schema.String).pipe(
      T.HttpQuery("versionInfo"),
    ),
    authorizationCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("authorizationCode"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(TransferConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTransferConfigsRequest>;

export type PatchProjectsLocationsTransferConfigsResponse = TransferConfig;
export const PatchProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferConfig;

export type PatchProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a data transfer configuration. All fields must be set, even if they are not updated. */
export const patchProjectsLocationsTransferConfigs: API.OperationMethod<
  PatchProjectsLocationsTransferConfigsRequest,
  PatchProjectsLocationsTransferConfigsResponse,
  PatchProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTransferConfigsRequest,
  output: PatchProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsTransferConfigsRequest {
  /** Required. The name of the resource to delete. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  name: string;
}

export const DeleteProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTransferConfigsRequest>;

export type DeleteProjectsLocationsTransferConfigsResponse = Empty;
export const DeleteProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a data transfer configuration, including any associated transfer runs and logs. */
export const deleteProjectsLocationsTransferConfigs: API.OperationMethod<
  DeleteProjectsLocationsTransferConfigsRequest,
  DeleteProjectsLocationsTransferConfigsResponse,
  DeleteProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTransferConfigsRequest,
  output: DeleteProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsTransferConfigsRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  name: string;
}

export const GetProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTransferConfigsRequest>;

export type GetProjectsLocationsTransferConfigsResponse = TransferConfig;
export const GetProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferConfig;

export type GetProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about a data transfer config. */
export const getProjectsLocationsTransferConfigs: API.OperationMethod<
  GetProjectsLocationsTransferConfigsRequest,
  GetProjectsLocationsTransferConfigsResponse,
  GetProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTransferConfigsRequest,
  output: GetProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsTransferConfigsRequest {
  /** Required. The BigQuery project id for which transfer configs should be returned. If you are using the regionless method, the location must be `US` and `parent` should be in the following form: * `projects/{project_id} If you are using the regionalized method, `parent` should be in the following form: * `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
  /** When specified, only configurations of requested data sources are returned. */
  dataSourceIds?: string[];
}

export const ListProjectsLocationsTransferConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    dataSourceIds: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("dataSourceIds"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transferConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTransferConfigsRequest>;

export type ListProjectsLocationsTransferConfigsResponse =
  ListTransferConfigsResponse;
export const ListProjectsLocationsTransferConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferConfigsResponse;

export type ListProjectsLocationsTransferConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about all transfer configs owned by a project in the specified location. */
export const listProjectsLocationsTransferConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsTransferConfigsRequest,
  ListProjectsLocationsTransferConfigsResponse,
  ListProjectsLocationsTransferConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTransferConfigsRequest,
  output: ListProjectsLocationsTransferConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTransferConfigsRunsRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` */
  name: string;
}

export const GetProjectsLocationsTransferConfigsRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTransferConfigsRunsRequest>;

export type GetProjectsLocationsTransferConfigsRunsResponse = TransferRun;
export const GetProjectsLocationsTransferConfigsRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferRun;

export type GetProjectsLocationsTransferConfigsRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about the particular transfer run. */
export const getProjectsLocationsTransferConfigsRuns: API.OperationMethod<
  GetProjectsLocationsTransferConfigsRunsRequest,
  GetProjectsLocationsTransferConfigsRunsResponse,
  GetProjectsLocationsTransferConfigsRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTransferConfigsRunsRequest,
  output: GetProjectsLocationsTransferConfigsRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsTransferConfigsRunsRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` */
  name: string;
}

export const DeleteProjectsLocationsTransferConfigsRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTransferConfigsRunsRequest>;

export type DeleteProjectsLocationsTransferConfigsRunsResponse = Empty;
export const DeleteProjectsLocationsTransferConfigsRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsTransferConfigsRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified transfer run. */
export const deleteProjectsLocationsTransferConfigsRuns: API.OperationMethod<
  DeleteProjectsLocationsTransferConfigsRunsRequest,
  DeleteProjectsLocationsTransferConfigsRunsResponse,
  DeleteProjectsLocationsTransferConfigsRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTransferConfigsRunsRequest,
  output: DeleteProjectsLocationsTransferConfigsRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTransferConfigsRunsRequest {
  /** Required. Name of transfer configuration for which transfer runs should be retrieved. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}` */
  parent: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
  /** When specified, only transfer runs with requested states are returned. */
  states?:
    | "TRANSFER_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | (string & {})[];
  /** Indicates how run attempts are to be pulled. */
  runAttempt?: "RUN_ATTEMPT_UNSPECIFIED" | "LATEST" | (string & {});
  /** Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
}

export const ListProjectsLocationsTransferConfigsRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    states: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("states"),
    ),
    runAttempt: Schema.optional(Schema.String).pipe(T.HttpQuery("runAttempt")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTransferConfigsRunsRequest>;

export type ListProjectsLocationsTransferConfigsRunsResponse =
  ListTransferRunsResponse;
export const ListProjectsLocationsTransferConfigsRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferRunsResponse;

export type ListProjectsLocationsTransferConfigsRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about running and completed transfer runs. */
export const listProjectsLocationsTransferConfigsRuns: API.PaginatedOperationMethod<
  ListProjectsLocationsTransferConfigsRunsRequest,
  ListProjectsLocationsTransferConfigsRunsResponse,
  ListProjectsLocationsTransferConfigsRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTransferConfigsRunsRequest,
  output: ListProjectsLocationsTransferConfigsRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsTransferConfigsRunsTransferLogsRequest {
  /** Message types to return. If not populated - INFO, WARNING and ERROR messages are returned. */
  messageTypes?:
    | "MESSAGE_SEVERITY_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {})[];
  /** Required. Transfer run name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}` */
  parent: string;
  /** Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
}

export const ListProjectsLocationsTransferConfigsRunsTransferLogsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("messageTypes"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transferLogs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTransferConfigsRunsTransferLogsRequest>;

export type ListProjectsLocationsTransferConfigsRunsTransferLogsResponse =
  ListTransferLogsResponse;
export const ListProjectsLocationsTransferConfigsRunsTransferLogsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferLogsResponse;

export type ListProjectsLocationsTransferConfigsRunsTransferLogsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns log messages for the transfer run. */
export const listProjectsLocationsTransferConfigsRunsTransferLogs: API.PaginatedOperationMethod<
  ListProjectsLocationsTransferConfigsRunsTransferLogsRequest,
  ListProjectsLocationsTransferConfigsRunsTransferLogsResponse,
  ListProjectsLocationsTransferConfigsRunsTransferLogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTransferConfigsRunsTransferLogsRequest,
  output: ListProjectsLocationsTransferConfigsRunsTransferLogsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTransferConfigsTransferResourcesRequest {
  /** Required. The name of the transfer resource in the form of: * `projects/{project}/transferConfigs/{transfer_config}/transferResources/{transfer_resource}` * `projects/{project}/locations/{location}/transferConfigs/{transfer_config}/transferResources/{transfer_resource}` */
  name: string;
}

export const GetProjectsLocationsTransferConfigsTransferResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTransferConfigsTransferResourcesRequest>;

export type GetProjectsLocationsTransferConfigsTransferResourcesResponse =
  TransferResource;
export const GetProjectsLocationsTransferConfigsTransferResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TransferResource;

export type GetProjectsLocationsTransferConfigsTransferResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a transfer resource. */
export const getProjectsLocationsTransferConfigsTransferResources: API.OperationMethod<
  GetProjectsLocationsTransferConfigsTransferResourcesRequest,
  GetProjectsLocationsTransferConfigsTransferResourcesResponse,
  GetProjectsLocationsTransferConfigsTransferResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTransferConfigsTransferResourcesRequest,
  output: GetProjectsLocationsTransferConfigsTransferResourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsTransferConfigsTransferResourcesRequest {
  /** Required. Name of transfer configuration for which transfer resources should be retrieved. The name should be in one of the following forms: * `projects/{project}/transferConfigs/{transfer_config}` * `projects/{project}/locations/{location_id}/transferConfigs/{transfer_config}` */
  parent: string;
  /** Optional. The maximum number of transfer resources to return. The maximum value is 1000; values above 1000 will be coerced to 1000. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListTransferResources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTransferResources` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter for the transfer resources. Currently supported filters include: * Resource name: `name` - Wildcard supported * Resource type: `type` * Resource destination: `destination` * Latest resource state: `latest_status_detail.state` * Last update time: `update_time` - RFC-3339 format * Parent table name: `hierarchy_detail.partition_detail.table` Multiple filters can be applied using the `AND/OR` operator. Examples: * `name="*123" AND (type="TABLE" OR latest_status_detail.state="SUCCEEDED")` * `update_time >= "2012-04-21T11:30:00-04:00"` * `hierarchy_detail.partition_detail.table = "table1"` */
  filter?: string;
}

export const ListProjectsLocationsTransferConfigsTransferResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/transferResources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTransferConfigsTransferResourcesRequest>;

export type ListProjectsLocationsTransferConfigsTransferResourcesResponse =
  ListTransferResourcesResponse;
export const ListProjectsLocationsTransferConfigsTransferResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTransferResourcesResponse;

export type ListProjectsLocationsTransferConfigsTransferResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns information about transfer resources. */
export const listProjectsLocationsTransferConfigsTransferResources: API.PaginatedOperationMethod<
  ListProjectsLocationsTransferConfigsTransferResourcesRequest,
  ListProjectsLocationsTransferConfigsTransferResourcesResponse,
  ListProjectsLocationsTransferConfigsTransferResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTransferConfigsTransferResourcesRequest,
  output: ListProjectsLocationsTransferConfigsTransferResourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CheckValidCredsProjectsLocationsDataSourcesRequest {
  /** Required. The name of the data source. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` */
  name: string;
  /** Request body */
  body?: CheckValidCredsRequest;
}

export const CheckValidCredsProjectsLocationsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CheckValidCredsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:checkValidCreds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CheckValidCredsProjectsLocationsDataSourcesRequest>;

export type CheckValidCredsProjectsLocationsDataSourcesResponse =
  CheckValidCredsResponse;
export const CheckValidCredsProjectsLocationsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CheckValidCredsResponse;

export type CheckValidCredsProjectsLocationsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns true if valid credentials exist for the given data source and requesting user. */
export const checkValidCredsProjectsLocationsDataSources: API.OperationMethod<
  CheckValidCredsProjectsLocationsDataSourcesRequest,
  CheckValidCredsProjectsLocationsDataSourcesResponse,
  CheckValidCredsProjectsLocationsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CheckValidCredsProjectsLocationsDataSourcesRequest,
  output: CheckValidCredsProjectsLocationsDataSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDataSourcesRequest {
  /** Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}` */
  name: string;
}

export const GetProjectsLocationsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDataSourcesRequest>;

export type GetProjectsLocationsDataSourcesResponse = DataSource;
export const GetProjectsLocationsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DataSource;

export type GetProjectsLocationsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Retrieves a supported data source and returns its settings. */
export const getProjectsLocationsDataSources: API.OperationMethod<
  GetProjectsLocationsDataSourcesRequest,
  GetProjectsLocationsDataSourcesResponse,
  GetProjectsLocationsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDataSourcesRequest,
  output: GetProjectsLocationsDataSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDataSourcesRequest {
  /** Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}` */
  parent: string;
  /** Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results. */
  pageToken?: string;
  /** Page size. The default page size is the maximum value of 1000 results. */
  pageSize?: number;
}

export const ListProjectsLocationsDataSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dataSources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDataSourcesRequest>;

export type ListProjectsLocationsDataSourcesResponse = ListDataSourcesResponse;
export const ListProjectsLocationsDataSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDataSourcesResponse;

export type ListProjectsLocationsDataSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists supported data sources and returns their settings. */
export const listProjectsLocationsDataSources: API.PaginatedOperationMethod<
  ListProjectsLocationsDataSourcesRequest,
  ListProjectsLocationsDataSourcesResponse,
  ListProjectsLocationsDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDataSourcesRequest,
  output: ListProjectsLocationsDataSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
