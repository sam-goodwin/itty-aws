// ==========================================================================
// Sensitive Data Protection (DLP) (dlp v2)
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
  name: "dlp",
  version: "v2",
  rootUrl: "https://dlp.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GooglePrivacyDlpV2FieldId {
  /** Name describing the field. */
  name?: string;
}

export const GooglePrivacyDlpV2FieldId: Schema.Schema<GooglePrivacyDlpV2FieldId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2FieldId" });

export interface GooglePrivacyDlpV2TimespanConfig {
  /** Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied. */
  startTime?: string;
  /** Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery. **For BigQuery** If this value is not specified and the table was modified between the given start and end times, the entire table will be scanned. If this value is specified, then rows are filtered based on the given start and end times. Rows with a `NULL` value in the provided BigQuery column are skipped. Valid data types of the provided BigQuery column are: `INTEGER`, `DATE`, `TIMESTAMP`, and `DATETIME`. If your BigQuery table is [partitioned at ingestion time](https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time), you can use any of the following pseudo-columns as your timestamp field. When used with Cloud DLP, these pseudo-column names are case sensitive. - `_PARTITIONTIME` - `_PARTITIONDATE` - `_PARTITION_LOAD_TIME` **For Datastore** If this value is specified, then entities are filtered based on the given start and end times. If an entity does not contain the provided timestamp property or contains empty or invalid values, then it is included. Valid data types of the provided timestamp property are: `TIMESTAMP`. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#bq-timespan) related to this operation. */
  timestampField?: GooglePrivacyDlpV2FieldId;
  /** Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied. */
  endTime?: string;
  /** When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end_time used in the last run of the JobTrigger. **For BigQuery** Inspect jobs triggered by automatic population will scan data that is at least three hours old when the job starts. This is because streaming buffer rows are not read during inspection and reading up to the current timestamp will result in skipped rows. See the [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#recently-streamed-data) related to this operation. */
  enableAutoPopulationOfTimespanConfig?: boolean;
}

export const GooglePrivacyDlpV2TimespanConfig: Schema.Schema<GooglePrivacyDlpV2TimespanConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    timestampField: Schema.optional(GooglePrivacyDlpV2FieldId),
    endTime: Schema.optional(Schema.String),
    enableAutoPopulationOfTimespanConfig: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2TimespanConfig" });

export interface GooglePrivacyDlpV2KindExpression {
  /** The name of the kind. */
  name?: string;
}

export const GooglePrivacyDlpV2KindExpression: Schema.Schema<GooglePrivacyDlpV2KindExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KindExpression" });

export interface GoogleTypeTimeOfDay {
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
}

export const GoogleTypeTimeOfDay: Schema.Schema<GoogleTypeTimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeTimeOfDay" });

export interface GoogleTypeDate {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const GoogleTypeDate: Schema.Schema<GoogleTypeDate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleTypeDate" });

export interface GooglePrivacyDlpV2Value {
  /** integer */
  integerValue?: string;
  /** boolean */
  booleanValue?: boolean;
  /** time of day */
  timeValue?: GoogleTypeTimeOfDay;
  /** timestamp */
  timestampValue?: string;
  /** date */
  dateValue?: GoogleTypeDate;
  /** day of week */
  dayOfWeekValue?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** string */
  stringValue?: string;
  /** float */
  floatValue?: number;
}

export const GooglePrivacyDlpV2Value: Schema.Schema<GooglePrivacyDlpV2Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integerValue: Schema.optional(Schema.String),
    booleanValue: Schema.optional(Schema.Boolean),
    timeValue: Schema.optional(GoogleTypeTimeOfDay),
    timestampValue: Schema.optional(Schema.String),
    dateValue: Schema.optional(GoogleTypeDate),
    dayOfWeekValue: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    floatValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2Value" });

export interface GooglePrivacyDlpV2ValueFrequency {
  /** How many times the value is contained in the field. */
  count?: string;
  /** A value contained in the field in question. */
  value?: GooglePrivacyDlpV2Value;
}

export const GooglePrivacyDlpV2ValueFrequency: Schema.Schema<GooglePrivacyDlpV2ValueFrequency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    value: Schema.optional(GooglePrivacyDlpV2Value),
  }).annotate({ identifier: "GooglePrivacyDlpV2ValueFrequency" });

export interface GooglePrivacyDlpV2Proximity {
  /** Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood#match-column-values). */
  windowBefore?: number;
  /** Number of characters after the finding to consider. */
  windowAfter?: number;
}

export const GooglePrivacyDlpV2Proximity: Schema.Schema<GooglePrivacyDlpV2Proximity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    windowBefore: Schema.optional(Schema.Number),
    windowAfter: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2Proximity" });

export interface GooglePrivacyDlpV2Regex {
  /** Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
  pattern?: string;
  /** The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
  groupIndexes?: ReadonlyArray<number>;
}

export const GooglePrivacyDlpV2Regex: Schema.Schema<GooglePrivacyDlpV2Regex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pattern: Schema.optional(Schema.String),
    groupIndexes: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GooglePrivacyDlpV2Regex" });

export interface GooglePrivacyDlpV2LikelihoodAdjustment {
  /** Set the likelihood of a finding to a fixed value. */
  fixedLikelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be `POSSIBLE` without the detection rule and `relative_likelihood` is 1, then it is upgraded to `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`. Likelihood may never drop below `VERY_UNLIKELY` or exceed `VERY_LIKELY`, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is `VERY_LIKELY` will result in a final likelihood of `LIKELY`. */
  relativeLikelihood?: number;
}

export const GooglePrivacyDlpV2LikelihoodAdjustment: Schema.Schema<GooglePrivacyDlpV2LikelihoodAdjustment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixedLikelihood: Schema.optional(Schema.String),
    relativeLikelihood: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2LikelihoodAdjustment" });

export interface GooglePrivacyDlpV2HotwordRule {
  /** Range of characters within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. The finding itself will be included in the window, so that hotwords can be used to match substrings of the finding itself. Suppose you want Cloud DLP to promote the likelihood of the phone number regex "\(\d{3}\) \d{3}-\d{4}" if the area code is known to be the area code of a company's office. In this case, use the hotword regex "\(xxx\)", where "xxx" is the area code in question. For tabular data, if you want to modify the likelihood of an entire column of findngs, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood#match-column-values). */
  proximity?: GooglePrivacyDlpV2Proximity;
  /** Regular expression pattern defining what qualifies as a hotword. */
  hotwordRegex?: GooglePrivacyDlpV2Regex;
  /** Likelihood adjustment to apply to all matching findings. */
  likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;
}

export const GooglePrivacyDlpV2HotwordRule: Schema.Schema<GooglePrivacyDlpV2HotwordRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proximity: Schema.optional(GooglePrivacyDlpV2Proximity),
    hotwordRegex: Schema.optional(GooglePrivacyDlpV2Regex),
    likelihoodAdjustment: Schema.optional(
      GooglePrivacyDlpV2LikelihoodAdjustment,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2HotwordRule" });

export interface GooglePrivacyDlpV2DetectionRule {
  /** Hotword-based detection rule. */
  hotwordRule?: GooglePrivacyDlpV2HotwordRule;
}

export const GooglePrivacyDlpV2DetectionRule: Schema.Schema<GooglePrivacyDlpV2DetectionRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hotwordRule: Schema.optional(GooglePrivacyDlpV2HotwordRule),
  }).annotate({ identifier: "GooglePrivacyDlpV2DetectionRule" });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GooglePrivacyDlpV2Error {
  /** Detailed error codes and messages. */
  details?: GoogleRpcStatus;
  /** The times the error occurred. List includes the oldest timestamp and the last 9 timestamps. */
  timestamps?: ReadonlyArray<string>;
  /** Additional information about the error. */
  extraInfo?:
    | "ERROR_INFO_UNSPECIFIED"
    | "IMAGE_SCAN_UNAVAILABLE_IN_REGION"
    | "FILE_STORE_CLUSTER_UNSUPPORTED"
    | (string & {});
}

export const GooglePrivacyDlpV2Error: Schema.Schema<GooglePrivacyDlpV2Error> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(GoogleRpcStatus),
    timestamps: Schema.optional(Schema.Array(Schema.String)),
    extraInfo: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Error" });

export interface GooglePrivacyDlpV2SecretManagerCredential {
  /** Required. The name of the Secret Manager resource that stores the password, in the form `projects/project-id/secrets/secret-name/versions/version`. */
  passwordSecretVersionName?: string;
  /** Required. The username. */
  username?: string;
}

export const GooglePrivacyDlpV2SecretManagerCredential: Schema.Schema<GooglePrivacyDlpV2SecretManagerCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passwordSecretVersionName: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2SecretManagerCredential" });

export interface GooglePrivacyDlpV2CloudSqlIamCredential {}

export const GooglePrivacyDlpV2CloudSqlIamCredential: Schema.Schema<GooglePrivacyDlpV2CloudSqlIamCredential> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2CloudSqlIamCredential",
  });

export interface GooglePrivacyDlpV2CloudSqlProperties {
  /** A username and password stored in Secret Manager. */
  usernamePassword?: GooglePrivacyDlpV2SecretManagerCredential;
  /** Built-in IAM authentication (must be configured in Cloud SQL). */
  cloudSqlIam?: GooglePrivacyDlpV2CloudSqlIamCredential;
  /** Required. The DLP API will limit its connections to max_connections. Must be 2 or greater. */
  maxConnections?: number;
  /** Optional. Immutable. The Cloud SQL instance for which the connection is defined. Only one connection per instance is allowed. This can only be set at creation time, and cannot be updated. It is an error to use a connection_name from different project or region than the one that holds the connection. For example, a Connection resource for Cloud SQL connection_name `project-id:us-central1:sql-instance` must be created under the parent `projects/project-id/locations/us-central1` */
  connectionName?: string;
  /** Required. The database engine used by the Cloud SQL instance that this connection configures. */
  databaseEngine?:
    | "DATABASE_ENGINE_UNKNOWN"
    | "DATABASE_ENGINE_MYSQL"
    | "DATABASE_ENGINE_POSTGRES"
    | (string & {});
}

export const GooglePrivacyDlpV2CloudSqlProperties: Schema.Schema<GooglePrivacyDlpV2CloudSqlProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    usernamePassword: Schema.optional(
      GooglePrivacyDlpV2SecretManagerCredential,
    ),
    cloudSqlIam: Schema.optional(GooglePrivacyDlpV2CloudSqlIamCredential),
    maxConnections: Schema.optional(Schema.Number),
    connectionName: Schema.optional(Schema.String),
    databaseEngine: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudSqlProperties" });

export interface GooglePrivacyDlpV2Connection {
  /** Required. The connection's state in its lifecycle. */
  state?:
    | "CONNECTION_STATE_UNSPECIFIED"
    | "MISSING_CREDENTIALS"
    | "AVAILABLE"
    | "ERROR"
    | (string & {});
  /** Output only. Set if status == ERROR, to provide additional details. Will store the last 10 errors sorted with the most recent first. */
  errors?: ReadonlyArray<GooglePrivacyDlpV2Error>;
  /** Connect to a Cloud SQL instance. */
  cloudSql?: GooglePrivacyDlpV2CloudSqlProperties;
  /** Output only. Name of the connection: `projects/{project}/locations/{location}/connections/{name}`. */
  name?: string;
}

export const GooglePrivacyDlpV2Connection: Schema.Schema<GooglePrivacyDlpV2Connection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(GooglePrivacyDlpV2Error)),
    cloudSql: Schema.optional(GooglePrivacyDlpV2CloudSqlProperties),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Connection" });

export interface GooglePrivacyDlpV2SearchConnectionsResponse {
  /** Token to retrieve the next page of results. An empty value means there are no more results. */
  nextPageToken?: string;
  /** List of connections that match the search query. Note that only a subset of the fields will be populated, and only "name" is guaranteed to be set. For full details of a Connection, call GetConnection with the name. */
  connections?: ReadonlyArray<GooglePrivacyDlpV2Connection>;
}

export const GooglePrivacyDlpV2SearchConnectionsResponse: Schema.Schema<GooglePrivacyDlpV2SearchConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    connections: Schema.optional(Schema.Array(GooglePrivacyDlpV2Connection)),
  }).annotate({ identifier: "GooglePrivacyDlpV2SearchConnectionsResponse" });

export interface GooglePrivacyDlpV2KMapEstimationQuasiIdValues {
  /** The quasi-identifier values. */
  quasiIdsValues?: ReadonlyArray<GooglePrivacyDlpV2Value>;
  /** The estimated anonymity for these quasi-identifier values. */
  estimatedAnonymity?: string;
}

export const GooglePrivacyDlpV2KMapEstimationQuasiIdValues: Schema.Schema<GooglePrivacyDlpV2KMapEstimationQuasiIdValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quasiIdsValues: Schema.optional(Schema.Array(GooglePrivacyDlpV2Value)),
    estimatedAnonymity: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KMapEstimationQuasiIdValues" });

export interface GooglePrivacyDlpV2KMapEstimationHistogramBucket {
  /** Always greater than or equal to min_anonymity. */
  maxAnonymity?: string;
  /** Always positive. */
  minAnonymity?: string;
  /** Total number of distinct quasi-identifier tuple values in this bucket. */
  bucketValueCount?: string;
  /** Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20. */
  bucketValues?: ReadonlyArray<GooglePrivacyDlpV2KMapEstimationQuasiIdValues>;
  /** Number of records within these anonymity bounds. */
  bucketSize?: string;
}

export const GooglePrivacyDlpV2KMapEstimationHistogramBucket: Schema.Schema<GooglePrivacyDlpV2KMapEstimationHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxAnonymity: Schema.optional(Schema.String),
    minAnonymity: Schema.optional(Schema.String),
    bucketValueCount: Schema.optional(Schema.String),
    bucketValues: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2KMapEstimationQuasiIdValues),
    ),
    bucketSize: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2KMapEstimationHistogramBucket",
  });

export interface GooglePrivacyDlpV2FileExtensionInfo {
  /** The file extension if set. (aka .pdf, .jpg, .txt) */
  fileExtension?: string;
}

export const GooglePrivacyDlpV2FileExtensionInfo: Schema.Schema<GooglePrivacyDlpV2FileExtensionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileExtension: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileExtensionInfo" });

export interface GooglePrivacyDlpV2AwsDiscoveryStartingLocation {
  /** The AWS account ID that this discovery config applies to. Within an AWS organization, you can find the AWS account ID inside an AWS account ARN. Example: arn:{partition}:organizations::{management_account_id}:account/{org_id}/{account_id} */
  accountId?: string;
  /** All AWS assets stored in Asset Inventory that didn't match other AWS discovery configs. */
  allAssetInventoryAssets?: boolean;
}

export const GooglePrivacyDlpV2AwsDiscoveryStartingLocation: Schema.Schema<GooglePrivacyDlpV2AwsDiscoveryStartingLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
    allAssetInventoryAssets: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2AwsDiscoveryStartingLocation" });

export interface GooglePrivacyDlpV2HybridInspectStatistics {
  /** The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed. */
  abortedCount?: string;
  /** The number of hybrid inspection requests processed within this job. */
  processedCount?: string;
  /** The number of hybrid requests currently being processed. Only populated when called via method `getDlpJob`. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for. */
  pendingCount?: string;
}

export const GooglePrivacyDlpV2HybridInspectStatistics: Schema.Schema<GooglePrivacyDlpV2HybridInspectStatistics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    abortedCount: Schema.optional(Schema.String),
    processedCount: Schema.optional(Schema.String),
    pendingCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2HybridInspectStatistics" });

export interface GooglePrivacyDlpV2DataSourceType {
  /** A string that identifies the type of resource being profiled. Current values: * google/bigquery/table * google/project * google/sql/table * google/gcs/bucket */
  dataSource?: string;
}

export const GooglePrivacyDlpV2DataSourceType: Schema.Schema<GooglePrivacyDlpV2DataSourceType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataSourceType" });

export interface GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence {
  /** How frequently data profiles can be updated when the template is modified. Defaults to never. */
  frequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
}

export const GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    frequency: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence",
  });

export interface GooglePrivacyDlpV2DiscoveryOtherCloudGenerationCadence {
  /** Optional. Frequency to update profiles regardless of whether the underlying resource has changes. Defaults to never. */
  refreshFrequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
  /** Optional. Governs when to update data profiles when the inspection rules defined by the `InspectTemplate` change. If not set, changing the template will not cause a data profile to update. */
  inspectTemplateModifiedCadence?: GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence;
}

export const GooglePrivacyDlpV2DiscoveryOtherCloudGenerationCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryOtherCloudGenerationCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refreshFrequency: Schema.optional(Schema.String),
    inspectTemplateModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence,
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryOtherCloudGenerationCadence",
  });

export interface GooglePrivacyDlpV2AwsAccountRegex {
  /** Optional. Regex to test the AWS account ID against. If empty, all accounts match. */
  accountIdRegex?: string;
}

export const GooglePrivacyDlpV2AwsAccountRegex: Schema.Schema<GooglePrivacyDlpV2AwsAccountRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountIdRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2AwsAccountRegex" });

export interface GooglePrivacyDlpV2AmazonS3BucketRegex {
  /** The AWS account regex. */
  awsAccountRegex?: GooglePrivacyDlpV2AwsAccountRegex;
  /** Optional. Regex to test the bucket name against. If empty, all buckets match. */
  bucketNameRegex?: string;
}

export const GooglePrivacyDlpV2AmazonS3BucketRegex: Schema.Schema<GooglePrivacyDlpV2AmazonS3BucketRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsAccountRegex: Schema.optional(GooglePrivacyDlpV2AwsAccountRegex),
    bucketNameRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2AmazonS3BucketRegex" });

export interface GooglePrivacyDlpV2OtherCloudResourceRegex {
  /** Regex for Amazon S3 buckets. */
  amazonS3BucketRegex?: GooglePrivacyDlpV2AmazonS3BucketRegex;
}

export const GooglePrivacyDlpV2OtherCloudResourceRegex: Schema.Schema<GooglePrivacyDlpV2OtherCloudResourceRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazonS3BucketRegex: Schema.optional(GooglePrivacyDlpV2AmazonS3BucketRegex),
  }).annotate({ identifier: "GooglePrivacyDlpV2OtherCloudResourceRegex" });

export interface GooglePrivacyDlpV2OtherCloudResourceRegexes {
  /** A group of regular expression patterns to match against one or more resources. Maximum of 100 entries. The sum of all regular expression's length can't exceed 10 KiB. */
  patterns?: ReadonlyArray<GooglePrivacyDlpV2OtherCloudResourceRegex>;
}

export const GooglePrivacyDlpV2OtherCloudResourceRegexes: Schema.Schema<GooglePrivacyDlpV2OtherCloudResourceRegexes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patterns: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2OtherCloudResourceRegex),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2OtherCloudResourceRegexes" });

export interface GooglePrivacyDlpV2OtherCloudResourceCollection {
  /** A collection of regular expressions to match a resource against. */
  includeRegexes?: GooglePrivacyDlpV2OtherCloudResourceRegexes;
}

export const GooglePrivacyDlpV2OtherCloudResourceCollection: Schema.Schema<GooglePrivacyDlpV2OtherCloudResourceCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRegexes: Schema.optional(
      GooglePrivacyDlpV2OtherCloudResourceRegexes,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2OtherCloudResourceCollection" });

export interface GooglePrivacyDlpV2AwsAccount {
  /** Required. AWS account ID. */
  accountId?: string;
}

export const GooglePrivacyDlpV2AwsAccount: Schema.Schema<GooglePrivacyDlpV2AwsAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2AwsAccount" });

export interface GooglePrivacyDlpV2AmazonS3Bucket {
  /** The AWS account. */
  awsAccount?: GooglePrivacyDlpV2AwsAccount;
  /** Required. The bucket name. */
  bucketName?: string;
}

export const GooglePrivacyDlpV2AmazonS3Bucket: Schema.Schema<GooglePrivacyDlpV2AmazonS3Bucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsAccount: Schema.optional(GooglePrivacyDlpV2AwsAccount),
    bucketName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2AmazonS3Bucket" });

export interface GooglePrivacyDlpV2OtherCloudSingleResourceReference {
  /** Amazon S3 bucket. */
  amazonS3Bucket?: GooglePrivacyDlpV2AmazonS3Bucket;
}

export const GooglePrivacyDlpV2OtherCloudSingleResourceReference: Schema.Schema<GooglePrivacyDlpV2OtherCloudSingleResourceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazonS3Bucket: Schema.optional(GooglePrivacyDlpV2AmazonS3Bucket),
  }).annotate({
    identifier: "GooglePrivacyDlpV2OtherCloudSingleResourceReference",
  });

export interface GooglePrivacyDlpV2AllOtherResources {}

export const GooglePrivacyDlpV2AllOtherResources: Schema.Schema<GooglePrivacyDlpV2AllOtherResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2AllOtherResources",
  });

export interface GooglePrivacyDlpV2DiscoveryOtherCloudFilter {
  /** A collection of resources for this filter to apply to. */
  collection?: GooglePrivacyDlpV2OtherCloudResourceCollection;
  /** The resource to scan. Configs using this filter can only have one target (the target with this single resource reference). */
  singleResource?: GooglePrivacyDlpV2OtherCloudSingleResourceReference;
  /** Optional. Catch-all. This should always be the last target in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically. */
  others?: GooglePrivacyDlpV2AllOtherResources;
}

export const GooglePrivacyDlpV2DiscoveryOtherCloudFilter: Schema.Schema<GooglePrivacyDlpV2DiscoveryOtherCloudFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collection: Schema.optional(GooglePrivacyDlpV2OtherCloudResourceCollection),
    singleResource: Schema.optional(
      GooglePrivacyDlpV2OtherCloudSingleResourceReference,
    ),
    others: Schema.optional(GooglePrivacyDlpV2AllOtherResources),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryOtherCloudFilter" });

export interface GooglePrivacyDlpV2AmazonS3BucketConditions {
  /** Optional. Bucket types that should be profiled. Optional. Defaults to TYPE_ALL_SUPPORTED if unspecified. */
  bucketTypes?: ReadonlyArray<
    | "TYPE_UNSPECIFIED"
    | "TYPE_ALL_SUPPORTED"
    | "TYPE_GENERAL_PURPOSE"
    | (string & {})
  >;
  /** Optional. Object classes that should be profiled. Optional. Defaults to ALL_SUPPORTED_CLASSES if unspecified. */
  objectStorageClasses?: ReadonlyArray<
    | "UNSPECIFIED"
    | "ALL_SUPPORTED_CLASSES"
    | "STANDARD"
    | "STANDARD_INFREQUENT_ACCESS"
    | "GLACIER_INSTANT_RETRIEVAL"
    | "INTELLIGENT_TIERING"
    | (string & {})
  >;
}

export const GooglePrivacyDlpV2AmazonS3BucketConditions: Schema.Schema<GooglePrivacyDlpV2AmazonS3BucketConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucketTypes: Schema.optional(Schema.Array(Schema.String)),
    objectStorageClasses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2AmazonS3BucketConditions" });

export interface GooglePrivacyDlpV2DiscoveryOtherCloudConditions {
  /** Amazon S3 bucket conditions. */
  amazonS3BucketConditions?: GooglePrivacyDlpV2AmazonS3BucketConditions;
  /** Minimum age a resource must be before Cloud DLP can profile it. Value must be 1 hour or greater. */
  minAge?: string;
}

export const GooglePrivacyDlpV2DiscoveryOtherCloudConditions: Schema.Schema<GooglePrivacyDlpV2DiscoveryOtherCloudConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazonS3BucketConditions: Schema.optional(
      GooglePrivacyDlpV2AmazonS3BucketConditions,
    ),
    minAge: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryOtherCloudConditions",
  });

export interface GooglePrivacyDlpV2Disabled {}

export const GooglePrivacyDlpV2Disabled: Schema.Schema<GooglePrivacyDlpV2Disabled> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2Disabled",
  });

export interface GooglePrivacyDlpV2OtherCloudDiscoveryTarget {
  /** Required. The type of data profiles generated by this discovery target. Supported values are: * aws/s3/bucket */
  dataSourceType?: GooglePrivacyDlpV2DataSourceType;
  /** How often and when to update data profiles. New resources that match both the filter and conditions are scanned as quickly as possible depending on system capacity. */
  generationCadence?: GooglePrivacyDlpV2DiscoveryOtherCloudGenerationCadence;
  /** Required. The resources that the discovery cadence applies to. The first target with a matching filter will be the one to apply to a resource. */
  filter?: GooglePrivacyDlpV2DiscoveryOtherCloudFilter;
  /** Optional. In addition to matching the filter, these conditions must be true before a profile is generated. */
  conditions?: GooglePrivacyDlpV2DiscoveryOtherCloudConditions;
  /** Disable profiling for resources that match this filter. */
  disabled?: GooglePrivacyDlpV2Disabled;
}

export const GooglePrivacyDlpV2OtherCloudDiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2OtherCloudDiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataSourceType: Schema.optional(GooglePrivacyDlpV2DataSourceType),
    generationCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryOtherCloudGenerationCadence,
    ),
    filter: Schema.optional(GooglePrivacyDlpV2DiscoveryOtherCloudFilter),
    conditions: Schema.optional(
      GooglePrivacyDlpV2DiscoveryOtherCloudConditions,
    ),
    disabled: Schema.optional(GooglePrivacyDlpV2Disabled),
  }).annotate({ identifier: "GooglePrivacyDlpV2OtherCloudDiscoveryTarget" });

export interface GooglePrivacyDlpV2AllText {}

export const GooglePrivacyDlpV2AllText: Schema.Schema<GooglePrivacyDlpV2AllText> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2AllText",
  });

export interface GooglePrivacyDlpV2SensitivityScore {
  /** The sensitivity score applied to the resource. */
  score?:
    | "SENSITIVITY_SCORE_UNSPECIFIED"
    | "SENSITIVITY_LOW"
    | "SENSITIVITY_UNKNOWN"
    | "SENSITIVITY_MODERATE"
    | "SENSITIVITY_HIGH"
    | (string & {});
}

export const GooglePrivacyDlpV2SensitivityScore: Schema.Schema<GooglePrivacyDlpV2SensitivityScore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2SensitivityScore" });

export interface GooglePrivacyDlpV2InfoType {
  /** Optional version name for this InfoType. */
  version?: string;
  /** Optional custom sensitivity for this InfoType. This only applies to data profiling. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern `[A-Za-z0-9$_-]{1,64}`. */
  name?: string;
}

export const GooglePrivacyDlpV2InfoType: Schema.Schema<GooglePrivacyDlpV2InfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoType" });

export interface GooglePrivacyDlpV2SelectedInfoTypes {
  /** Required. InfoTypes to apply the transformation to. Required. Provided InfoType must be unique within the ImageTransformations message. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
}

export const GooglePrivacyDlpV2SelectedInfoTypes: Schema.Schema<GooglePrivacyDlpV2SelectedInfoTypes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
  }).annotate({ identifier: "GooglePrivacyDlpV2SelectedInfoTypes" });

export interface GooglePrivacyDlpV2AllInfoTypes {}

export const GooglePrivacyDlpV2AllInfoTypes: Schema.Schema<GooglePrivacyDlpV2AllInfoTypes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2AllInfoTypes",
  });

export interface GooglePrivacyDlpV2Color {
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
}

export const GooglePrivacyDlpV2Color: Schema.Schema<GooglePrivacyDlpV2Color> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    red: Schema.optional(Schema.Number),
    green: Schema.optional(Schema.Number),
    blue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2Color" });

export interface GooglePrivacyDlpV2ImageTransformation {
  /** Apply transformation to all text that doesn't match an infoType. Only one instance is allowed within the ImageTransformations message. */
  allText?: GooglePrivacyDlpV2AllText;
  /** Apply transformation to the selected info_types. */
  selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes;
  /** Apply transformation to all findings not specified in other ImageTransformation's selected_info_types. Only one instance is allowed within the ImageTransformations message. */
  allInfoTypes?: GooglePrivacyDlpV2AllInfoTypes;
  /** The color to use when redacting content from an image. If not specified, the default is black. */
  redactionColor?: GooglePrivacyDlpV2Color;
}

export const GooglePrivacyDlpV2ImageTransformation: Schema.Schema<GooglePrivacyDlpV2ImageTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allText: Schema.optional(GooglePrivacyDlpV2AllText),
    selectedInfoTypes: Schema.optional(GooglePrivacyDlpV2SelectedInfoTypes),
    allInfoTypes: Schema.optional(GooglePrivacyDlpV2AllInfoTypes),
    redactionColor: Schema.optional(GooglePrivacyDlpV2Color),
  }).annotate({ identifier: "GooglePrivacyDlpV2ImageTransformation" });

export interface GooglePrivacyDlpV2ImageTransformations {
  /** List of transforms to make. */
  transforms?: ReadonlyArray<GooglePrivacyDlpV2ImageTransformation>;
}

export const GooglePrivacyDlpV2ImageTransformations: Schema.Schema<GooglePrivacyDlpV2ImageTransformations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transforms: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ImageTransformation),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ImageTransformations" });

export interface GooglePrivacyDlpV2Condition {
  /** Required. Operator used to compare the field or infoType to the value. */
  operator?:
    | "RELATIONAL_OPERATOR_UNSPECIFIED"
    | "EQUAL_TO"
    | "NOT_EQUAL_TO"
    | "GREATER_THAN"
    | "LESS_THAN"
    | "GREATER_THAN_OR_EQUALS"
    | "LESS_THAN_OR_EQUALS"
    | "EXISTS"
    | (string & {});
  /** Required. Field within the record this condition is evaluated against. */
  field?: GooglePrivacyDlpV2FieldId;
  /** Value to compare against. [Mandatory, except for `EXISTS` tests.] */
  value?: GooglePrivacyDlpV2Value;
}

export const GooglePrivacyDlpV2Condition: Schema.Schema<GooglePrivacyDlpV2Condition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operator: Schema.optional(Schema.String),
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    value: Schema.optional(GooglePrivacyDlpV2Value),
  }).annotate({ identifier: "GooglePrivacyDlpV2Condition" });

export interface GooglePrivacyDlpV2Conditions {
  /** A collection of conditions. */
  conditions?: ReadonlyArray<GooglePrivacyDlpV2Condition>;
}

export const GooglePrivacyDlpV2Conditions: Schema.Schema<GooglePrivacyDlpV2Conditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(Schema.Array(GooglePrivacyDlpV2Condition)),
  }).annotate({ identifier: "GooglePrivacyDlpV2Conditions" });

export interface GooglePrivacyDlpV2Expressions {
  /** The operator to apply to the result of conditions. Default and currently only supported value is `AND`. */
  logicalOperator?: "LOGICAL_OPERATOR_UNSPECIFIED" | "AND" | (string & {});
  /** Conditions to apply to the expression. */
  conditions?: GooglePrivacyDlpV2Conditions;
}

export const GooglePrivacyDlpV2Expressions: Schema.Schema<GooglePrivacyDlpV2Expressions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logicalOperator: Schema.optional(Schema.String),
    conditions: Schema.optional(GooglePrivacyDlpV2Conditions),
  }).annotate({ identifier: "GooglePrivacyDlpV2Expressions" });

export interface GooglePrivacyDlpV2RecordCondition {
  /** An expression. */
  expressions?: GooglePrivacyDlpV2Expressions;
}

export const GooglePrivacyDlpV2RecordCondition: Schema.Schema<GooglePrivacyDlpV2RecordCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expressions: Schema.optional(GooglePrivacyDlpV2Expressions),
  }).annotate({ identifier: "GooglePrivacyDlpV2RecordCondition" });

export interface GooglePrivacyDlpV2RecordSuppression {
  /** A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content. */
  condition?: GooglePrivacyDlpV2RecordCondition;
}

export const GooglePrivacyDlpV2RecordSuppression: Schema.Schema<GooglePrivacyDlpV2RecordSuppression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(GooglePrivacyDlpV2RecordCondition),
  }).annotate({ identifier: "GooglePrivacyDlpV2RecordSuppression" });

export interface GooglePrivacyDlpV2WordList {
  /** Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required] */
  words?: ReadonlyArray<string>;
}

export const GooglePrivacyDlpV2WordList: Schema.Schema<GooglePrivacyDlpV2WordList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    words: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2WordList" });

export interface GooglePrivacyDlpV2ReplaceDictionaryConfig {
  /** A list of words to select from for random replacement. The [limits](https://cloud.google.com/sensitive-data-protection/limits) page contains details about the size limits of dictionaries. */
  wordList?: GooglePrivacyDlpV2WordList;
}

export const GooglePrivacyDlpV2ReplaceDictionaryConfig: Schema.Schema<GooglePrivacyDlpV2ReplaceDictionaryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wordList: Schema.optional(GooglePrivacyDlpV2WordList),
  }).annotate({ identifier: "GooglePrivacyDlpV2ReplaceDictionaryConfig" });

export interface GooglePrivacyDlpV2CharsToIgnore {
  /** Common characters to not transform when masking. Useful to avoid removing punctuation. */
  commonCharactersToIgnore?:
    | "COMMON_CHARS_TO_IGNORE_UNSPECIFIED"
    | "NUMERIC"
    | "ALPHA_UPPER_CASE"
    | "ALPHA_LOWER_CASE"
    | "PUNCTUATION"
    | "WHITESPACE"
    | (string & {});
  /** Characters to not transform when masking. */
  charactersToSkip?: string;
}

export const GooglePrivacyDlpV2CharsToIgnore: Schema.Schema<GooglePrivacyDlpV2CharsToIgnore> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commonCharactersToIgnore: Schema.optional(Schema.String),
    charactersToSkip: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CharsToIgnore" });

export interface GooglePrivacyDlpV2CharacterMaskConfig {
  /** Character to use to mask the sensitive values—for example, `*` for an alphabetic string such as a name, or `0` for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to `*` for strings, and `0` for digits. */
  maskingCharacter?: string;
  /** Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally. If `number_to_mask` is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values: - `masking_character` is `*` - `number_to_mask` is `-4` - `reverse_order` is `false` - `CharsToIgnore` includes `-` - Input string is `1234-5678-9012-3456` The resulting de-identified string is `****-****-****-3456`. Cloud DLP masks all but the last four characters. If `reverse_order` is `true`, all but the first four characters are masked as `1234-****-****-****`. */
  numberToMask?: number;
  /** When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is `555-555-5555` and you instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP returns `***-**5-5555`. */
  charactersToIgnore?: ReadonlyArray<GooglePrivacyDlpV2CharsToIgnore>;
  /** Mask characters in reverse order. For example, if `masking_character` is `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the input string `1234-5678-9012-3456` is masked as `00000000000000-3456`. If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order` is `true`, then the string `12345` is masked as `12***`. */
  reverseOrder?: boolean;
}

export const GooglePrivacyDlpV2CharacterMaskConfig: Schema.Schema<GooglePrivacyDlpV2CharacterMaskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maskingCharacter: Schema.optional(Schema.String),
    numberToMask: Schema.optional(Schema.Number),
    charactersToIgnore: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2CharsToIgnore),
    ),
    reverseOrder: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2CharacterMaskConfig" });

export interface GooglePrivacyDlpV2Bucket {
  /** Lower bound of the range, inclusive. Type should be the same as max if used. */
  min?: GooglePrivacyDlpV2Value;
  /** Upper bound of the range, exclusive; type must match min. */
  max?: GooglePrivacyDlpV2Value;
  /** Required. Replacement value for this bucket. */
  replacementValue?: GooglePrivacyDlpV2Value;
}

export const GooglePrivacyDlpV2Bucket: Schema.Schema<GooglePrivacyDlpV2Bucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    min: Schema.optional(GooglePrivacyDlpV2Value),
    max: Schema.optional(GooglePrivacyDlpV2Value),
    replacementValue: Schema.optional(GooglePrivacyDlpV2Value),
  }).annotate({ identifier: "GooglePrivacyDlpV2Bucket" });

export interface GooglePrivacyDlpV2BucketingConfig {
  /** Set of buckets. Ranges must be non-overlapping. */
  buckets?: ReadonlyArray<GooglePrivacyDlpV2Bucket>;
}

export const GooglePrivacyDlpV2BucketingConfig: Schema.Schema<GooglePrivacyDlpV2BucketingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(GooglePrivacyDlpV2Bucket)),
  }).annotate({ identifier: "GooglePrivacyDlpV2BucketingConfig" });

export interface GooglePrivacyDlpV2UnwrappedCryptoKey {
  /** Required. A 128/192/256 bit key. */
  key?: string;
}

export const GooglePrivacyDlpV2UnwrappedCryptoKey: Schema.Schema<GooglePrivacyDlpV2UnwrappedCryptoKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2UnwrappedCryptoKey" });

export interface GooglePrivacyDlpV2KmsWrappedCryptoKey {
  /** Required. The resource name of the KMS CryptoKey to use for unwrapping. */
  cryptoKeyName?: string;
  /** Required. The wrapped data crypto key. */
  wrappedKey?: string;
}

export const GooglePrivacyDlpV2KmsWrappedCryptoKey: Schema.Schema<GooglePrivacyDlpV2KmsWrappedCryptoKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cryptoKeyName: Schema.optional(Schema.String),
    wrappedKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KmsWrappedCryptoKey" });

export interface GooglePrivacyDlpV2TransientCryptoKey {
  /** Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). */
  name?: string;
}

export const GooglePrivacyDlpV2TransientCryptoKey: Schema.Schema<GooglePrivacyDlpV2TransientCryptoKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransientCryptoKey" });

export interface GooglePrivacyDlpV2CryptoKey {
  /** Unwrapped crypto key */
  unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey;
  /** Key wrapped using Cloud KMS */
  kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey;
  /** Transient crypto key */
  transient?: GooglePrivacyDlpV2TransientCryptoKey;
}

export const GooglePrivacyDlpV2CryptoKey: Schema.Schema<GooglePrivacyDlpV2CryptoKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unwrapped: Schema.optional(GooglePrivacyDlpV2UnwrappedCryptoKey),
    kmsWrapped: Schema.optional(GooglePrivacyDlpV2KmsWrappedCryptoKey),
    transient: Schema.optional(GooglePrivacyDlpV2TransientCryptoKey),
  }).annotate({ identifier: "GooglePrivacyDlpV2CryptoKey" });

export interface GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig {
  /** Required. The key used by the encryption algorithm. */
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;
  /** This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: ``0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/`` */
  customAlphabet?: string;
  /** Common alphabets. */
  commonAlphabet?:
    | "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
    | "NUMERIC"
    | "HEXADECIMAL"
    | "UPPER_CASE_ALPHA_NUMERIC"
    | "ALPHA_NUMERIC"
    | (string & {});
  /** The 'tweak', a context may be used for higher security since the same identifier in two different contexts won't be given the same surrogate. If the context is not set, a default tweak will be used. If the context is set but: 1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value, a default tweak will be used. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and unstructured `ContentItem`s. Currently, the referenced field may be of value type integer or string. The tweak is constructed as a sequence of bytes in big endian byte order such that: - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value 2 */
  context?: GooglePrivacyDlpV2FieldId;
  /** The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate For example, if the name of custom infoType is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text. In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE */
  surrogateInfoType?: GooglePrivacyDlpV2InfoType;
  /** The native way to select the alphabet. Must be in the range [2, 95]. */
  radix?: number;
}

export const GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig: Schema.Schema<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cryptoKey: Schema.optional(GooglePrivacyDlpV2CryptoKey),
    customAlphabet: Schema.optional(Schema.String),
    commonAlphabet: Schema.optional(Schema.String),
    context: Schema.optional(GooglePrivacyDlpV2FieldId),
    surrogateInfoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    radix: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig" });

export interface GooglePrivacyDlpV2TimePartConfig {
  /** The part of the time to keep. */
  partToExtract?:
    | "TIME_PART_UNSPECIFIED"
    | "YEAR"
    | "MONTH"
    | "DAY_OF_MONTH"
    | "DAY_OF_WEEK"
    | "WEEK_OF_YEAR"
    | "HOUR_OF_DAY"
    | (string & {});
}

export const GooglePrivacyDlpV2TimePartConfig: Schema.Schema<GooglePrivacyDlpV2TimePartConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partToExtract: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TimePartConfig" });

export interface GooglePrivacyDlpV2ReplaceValueConfig {
  /** Value to replace it with. */
  newValue?: GooglePrivacyDlpV2Value;
}

export const GooglePrivacyDlpV2ReplaceValueConfig: Schema.Schema<GooglePrivacyDlpV2ReplaceValueConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newValue: Schema.optional(GooglePrivacyDlpV2Value),
  }).annotate({ identifier: "GooglePrivacyDlpV2ReplaceValueConfig" });

export interface GooglePrivacyDlpV2FixedSizeBucketingConfig {
  /** Required. Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value "-10". */
  lowerBound?: GooglePrivacyDlpV2Value;
  /** Required. Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. */
  bucketSize?: number;
  /** Required. Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value "89+". */
  upperBound?: GooglePrivacyDlpV2Value;
}

export const GooglePrivacyDlpV2FixedSizeBucketingConfig: Schema.Schema<GooglePrivacyDlpV2FixedSizeBucketingConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowerBound: Schema.optional(GooglePrivacyDlpV2Value),
    bucketSize: Schema.optional(Schema.Number),
    upperBound: Schema.optional(GooglePrivacyDlpV2Value),
  }).annotate({ identifier: "GooglePrivacyDlpV2FixedSizeBucketingConfig" });

export interface GooglePrivacyDlpV2CryptoHashConfig {
  /** The key used by the hash function. */
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;
}

export const GooglePrivacyDlpV2CryptoHashConfig: Schema.Schema<GooglePrivacyDlpV2CryptoHashConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cryptoKey: Schema.optional(GooglePrivacyDlpV2CryptoKey),
  }).annotate({ identifier: "GooglePrivacyDlpV2CryptoHashConfig" });

export interface GooglePrivacyDlpV2RedactConfig {}

export const GooglePrivacyDlpV2RedactConfig: Schema.Schema<GooglePrivacyDlpV2RedactConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2RedactConfig",
  });

export interface GooglePrivacyDlpV2CryptoDeterministicConfig {
  /** The key used by the encryption function. For deterministic encryption using AES-SIV, the provided key is internally expanded to 64 bytes prior to use. */
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;
  /** The custom info type to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom info type followed by the number of characters comprising the surrogate. The following scheme defines the format: {info type name}({surrogate character count}):{surrogate} For example, if the name of custom info type is 'MY_TOKEN_INFO_TYPE' and the surrogate is 'abc', the full replacement value will be: 'MY_TOKEN_INFO_TYPE(3):abc' This annotation identifies the surrogate when inspecting content using the custom info type 'Surrogate'. This facilitates reversal of the surrogate when it occurs in free text. Note: For record transformations where the entire cell in a table is being transformed, surrogates are not mandatory. Surrogates are used to denote the location of the token and are necessary for re-identification in free form text. In order for inspection to work properly, the name of this info type must not occur naturally anywhere in your data; otherwise, inspection may either - reverse a surrogate that does not correspond to an actual identifier - be unable to parse the surrogate and result in an error Therefore, choose your custom info type name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE. */
  surrogateInfoType?: GooglePrivacyDlpV2InfoType;
  /** A context may be used for higher security and maintaining referential integrity such that the same identifier in two different contexts will be given a distinct surrogate. The context is appended to plaintext value being encrypted. On decryption the provided context is validated against the value used during encryption. If a context was provided during encryption, same context must be provided during decryption as well. If the context is not set, plaintext would be used as is for encryption. If the context is set but: 1. there is no record present when transforming a given value or 2. the field is not present when transforming a given value, plaintext would be used as is for encryption. Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and unstructured `ContentItem`s. */
  context?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2CryptoDeterministicConfig: Schema.Schema<GooglePrivacyDlpV2CryptoDeterministicConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cryptoKey: Schema.optional(GooglePrivacyDlpV2CryptoKey),
    surrogateInfoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    context: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({ identifier: "GooglePrivacyDlpV2CryptoDeterministicConfig" });

export interface GooglePrivacyDlpV2ReplaceWithInfoTypeConfig {}

export const GooglePrivacyDlpV2ReplaceWithInfoTypeConfig: Schema.Schema<GooglePrivacyDlpV2ReplaceWithInfoTypeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2ReplaceWithInfoTypeConfig",
  });

export interface GooglePrivacyDlpV2DateShiftConfig {
  /** Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future. */
  upperBoundDays?: number;
  /** Points to the field that contains the context, for example, an entity id. If set, must also set cryptoKey. If set, shift will be consistent for the given context. */
  context?: GooglePrivacyDlpV2FieldId;
  /** Causes the shift to be computed based on this key and the context. This results in the same shift for the same context and crypto_key. If set, must also set context. Can only be applied to table items. */
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;
  /** Required. For example, -5 means shift date to at most 5 days back in the past. */
  lowerBoundDays?: number;
}

export const GooglePrivacyDlpV2DateShiftConfig: Schema.Schema<GooglePrivacyDlpV2DateShiftConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upperBoundDays: Schema.optional(Schema.Number),
    context: Schema.optional(GooglePrivacyDlpV2FieldId),
    cryptoKey: Schema.optional(GooglePrivacyDlpV2CryptoKey),
    lowerBoundDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2DateShiftConfig" });

export interface GooglePrivacyDlpV2PrimitiveTransformation {
  /** Replace with a value randomly drawn (with replacement) from a dictionary. */
  replaceDictionaryConfig?: GooglePrivacyDlpV2ReplaceDictionaryConfig;
  /** Mask */
  characterMaskConfig?: GooglePrivacyDlpV2CharacterMaskConfig;
  /** Bucketing */
  bucketingConfig?: GooglePrivacyDlpV2BucketingConfig;
  /** Ffx-Fpe. Strongly discouraged, consider using CryptoDeterministicConfig instead. Fpe is computationally expensive incurring latency costs. */
  cryptoReplaceFfxFpeConfig?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;
  /** Time extraction */
  timePartConfig?: GooglePrivacyDlpV2TimePartConfig;
  /** Replace with a specified value. */
  replaceConfig?: GooglePrivacyDlpV2ReplaceValueConfig;
  /** Fixed size bucketing */
  fixedSizeBucketingConfig?: GooglePrivacyDlpV2FixedSizeBucketingConfig;
  /** Crypto */
  cryptoHashConfig?: GooglePrivacyDlpV2CryptoHashConfig;
  /** Redact */
  redactConfig?: GooglePrivacyDlpV2RedactConfig;
  /** Deterministic Crypto */
  cryptoDeterministicConfig?: GooglePrivacyDlpV2CryptoDeterministicConfig;
  /** Replace with infotype */
  replaceWithInfoTypeConfig?: GooglePrivacyDlpV2ReplaceWithInfoTypeConfig;
  /** Date Shift */
  dateShiftConfig?: GooglePrivacyDlpV2DateShiftConfig;
}

export const GooglePrivacyDlpV2PrimitiveTransformation: Schema.Schema<GooglePrivacyDlpV2PrimitiveTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replaceDictionaryConfig: Schema.optional(
      GooglePrivacyDlpV2ReplaceDictionaryConfig,
    ),
    characterMaskConfig: Schema.optional(GooglePrivacyDlpV2CharacterMaskConfig),
    bucketingConfig: Schema.optional(GooglePrivacyDlpV2BucketingConfig),
    cryptoReplaceFfxFpeConfig: Schema.optional(
      GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig,
    ),
    timePartConfig: Schema.optional(GooglePrivacyDlpV2TimePartConfig),
    replaceConfig: Schema.optional(GooglePrivacyDlpV2ReplaceValueConfig),
    fixedSizeBucketingConfig: Schema.optional(
      GooglePrivacyDlpV2FixedSizeBucketingConfig,
    ),
    cryptoHashConfig: Schema.optional(GooglePrivacyDlpV2CryptoHashConfig),
    redactConfig: Schema.optional(GooglePrivacyDlpV2RedactConfig),
    cryptoDeterministicConfig: Schema.optional(
      GooglePrivacyDlpV2CryptoDeterministicConfig,
    ),
    replaceWithInfoTypeConfig: Schema.optional(
      GooglePrivacyDlpV2ReplaceWithInfoTypeConfig,
    ),
    dateShiftConfig: Schema.optional(GooglePrivacyDlpV2DateShiftConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2PrimitiveTransformation" });

export interface GooglePrivacyDlpV2InfoTypeTransformation {
  /** InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
  /** Required. Primitive transformation to apply to the infoType. */
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}

export const GooglePrivacyDlpV2InfoTypeTransformation: Schema.Schema<GooglePrivacyDlpV2InfoTypeTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
    primitiveTransformation: Schema.optional(
      GooglePrivacyDlpV2PrimitiveTransformation,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeTransformation" });

export interface GooglePrivacyDlpV2InfoTypeTransformations {
  /** Required. Transformation for each infoType. Cannot specify more than one for a given infoType. */
  transformations?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeTransformation>;
}

export const GooglePrivacyDlpV2InfoTypeTransformations: Schema.Schema<GooglePrivacyDlpV2InfoTypeTransformations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformations: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeTransformation),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeTransformations" });

export interface GooglePrivacyDlpV2FieldTransformation {
  /** Apply the transformation to the entire field. */
  primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
  /** Treat the contents of the field as free text, and selectively transform content that matches an `InfoType`. */
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;
  /** Only apply the transformation if the condition evaluates to true for the given `RecordCondition`. The conditions are allowed to reference fields that are not used in the actual transformation. Example Use Cases: - Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range. - Redact a field if the date of birth field is greater than 85. */
  condition?: GooglePrivacyDlpV2RecordCondition;
  /** Required. Input field(s) to apply the transformation to. When you have columns that reference their position within a list, omit the index from the FieldId. FieldId name matching ignores the index. For example, instead of "contact.nums[0].type", use "contact.nums.type". */
  fields?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
}

export const GooglePrivacyDlpV2FieldTransformation: Schema.Schema<GooglePrivacyDlpV2FieldTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primitiveTransformation: Schema.optional(
      GooglePrivacyDlpV2PrimitiveTransformation,
    ),
    infoTypeTransformations: Schema.optional(
      GooglePrivacyDlpV2InfoTypeTransformations,
    ),
    condition: Schema.optional(GooglePrivacyDlpV2RecordCondition),
    fields: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
  }).annotate({ identifier: "GooglePrivacyDlpV2FieldTransformation" });

export interface GooglePrivacyDlpV2RecordTransformations {
  /** Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output. */
  recordSuppressions?: ReadonlyArray<GooglePrivacyDlpV2RecordSuppression>;
  /** Transform the record by applying various field transformations. */
  fieldTransformations?: ReadonlyArray<GooglePrivacyDlpV2FieldTransformation>;
}

export const GooglePrivacyDlpV2RecordTransformations: Schema.Schema<GooglePrivacyDlpV2RecordTransformations> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordSuppressions: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2RecordSuppression),
    ),
    fieldTransformations: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FieldTransformation),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2RecordTransformations" });

export interface GooglePrivacyDlpV2LeaveUntransformed {}

export const GooglePrivacyDlpV2LeaveUntransformed: Schema.Schema<GooglePrivacyDlpV2LeaveUntransformed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2LeaveUntransformed",
  });

export interface GooglePrivacyDlpV2ThrowError {}

export const GooglePrivacyDlpV2ThrowError: Schema.Schema<GooglePrivacyDlpV2ThrowError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2ThrowError",
  });

export interface GooglePrivacyDlpV2TransformationErrorHandling {
  /** Ignore errors */
  leaveUntransformed?: GooglePrivacyDlpV2LeaveUntransformed;
  /** Throw an error */
  throwError?: GooglePrivacyDlpV2ThrowError;
}

export const GooglePrivacyDlpV2TransformationErrorHandling: Schema.Schema<GooglePrivacyDlpV2TransformationErrorHandling> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    leaveUntransformed: Schema.optional(GooglePrivacyDlpV2LeaveUntransformed),
    throwError: Schema.optional(GooglePrivacyDlpV2ThrowError),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationErrorHandling" });

export interface GooglePrivacyDlpV2DeidentifyConfig {
  /** Treat the dataset as an image and redact. */
  imageTransformations?: GooglePrivacyDlpV2ImageTransformations;
  /** Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table. */
  recordTransformations?: GooglePrivacyDlpV2RecordTransformations;
  /** Treat the dataset as free-form text and apply the same free text transformation everywhere. */
  infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;
  /** Mode for handling transformation errors. If left unspecified, the default mode is `TransformationErrorHandling.ThrowError`. */
  transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling;
}

export const GooglePrivacyDlpV2DeidentifyConfig: Schema.Schema<GooglePrivacyDlpV2DeidentifyConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageTransformations: Schema.optional(
      GooglePrivacyDlpV2ImageTransformations,
    ),
    recordTransformations: Schema.optional(
      GooglePrivacyDlpV2RecordTransformations,
    ),
    infoTypeTransformations: Schema.optional(
      GooglePrivacyDlpV2InfoTypeTransformations,
    ),
    transformationErrorHandling: Schema.optional(
      GooglePrivacyDlpV2TransformationErrorHandling,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DeidentifyConfig" });

export interface GooglePrivacyDlpV2DeidentifyTemplate {
  /** Output only. The last update timestamp of an inspectTemplate. */
  updateTime?: string;
  /** Output only. The creation timestamp of an inspectTemplate. */
  createTime?: string;
  /** Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID` */
  name?: string;
  /** Short description (max 256 chars). */
  description?: string;
  /** The core content of the template. */
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
  /** Display name (max 256 chars). */
  displayName?: string;
}

export const GooglePrivacyDlpV2DeidentifyTemplate: Schema.Schema<GooglePrivacyDlpV2DeidentifyTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    deidentifyConfig: Schema.optional(GooglePrivacyDlpV2DeidentifyConfig),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DeidentifyTemplate" });

export interface GooglePrivacyDlpV2CreateDeidentifyTemplateRequest {
  /** Required. The DeidentifyTemplate to create. */
  deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
  /** The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
  templateId?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
}

export const GooglePrivacyDlpV2CreateDeidentifyTemplateRequest: Schema.Schema<GooglePrivacyDlpV2CreateDeidentifyTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deidentifyTemplate: Schema.optional(GooglePrivacyDlpV2DeidentifyTemplate),
    templateId: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2CreateDeidentifyTemplateRequest",
  });

export interface GooglePrivacyDlpV2Schedule {
  /** With this option a job is started on a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days. */
  recurrencePeriodDuration?: string;
}

export const GooglePrivacyDlpV2Schedule: Schema.Schema<GooglePrivacyDlpV2Schedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recurrencePeriodDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Schedule" });

export interface GooglePrivacyDlpV2Manual {}

export const GooglePrivacyDlpV2Manual: Schema.Schema<GooglePrivacyDlpV2Manual> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2Manual",
  });

export interface GooglePrivacyDlpV2Trigger {
  /** Create a job on a repeating basis based on the elapse of time. */
  schedule?: GooglePrivacyDlpV2Schedule;
  /** For use with hybrid jobs. Jobs must be manually created and finished. */
  manual?: GooglePrivacyDlpV2Manual;
}

export const GooglePrivacyDlpV2Trigger: Schema.Schema<GooglePrivacyDlpV2Trigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schedule: Schema.optional(GooglePrivacyDlpV2Schedule),
    manual: Schema.optional(GooglePrivacyDlpV2Manual),
  }).annotate({ identifier: "GooglePrivacyDlpV2Trigger" });

export interface GooglePrivacyDlpV2InfoTypeLikelihood {
  /** Type of information the likelihood threshold applies to. Only one likelihood per info_type should be provided. If InfoTypeLikelihood does not have an info_type, the configuration fails. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Only returns findings equal to or above this threshold. This field is required or else the configuration fails. */
  minLikelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GooglePrivacyDlpV2InfoTypeLikelihood: Schema.Schema<GooglePrivacyDlpV2InfoTypeLikelihood> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    minLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeLikelihood" });

export interface GooglePrivacyDlpV2InfoTypeLimit {
  /** Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Max findings limit for the given infoType. */
  maxFindings?: number;
}

export const GooglePrivacyDlpV2InfoTypeLimit: Schema.Schema<GooglePrivacyDlpV2InfoTypeLimit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    maxFindings: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeLimit" });

export interface GooglePrivacyDlpV2FindingLimits {
  /** Configuration of findings limit given for specified infoTypes. */
  maxFindingsPerInfoType?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeLimit>;
  /** Max number of findings that are returned for each item scanned. When set within an InspectContentRequest, this field is ignored. This value isn't a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value. */
  maxFindingsPerItem?: number;
  /** Max number of findings that are returned per request or job. If you set this field in an InspectContentRequest, the resulting maximum value is the value that you set or 3,000, whichever is lower. This value isn't a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value. */
  maxFindingsPerRequest?: number;
}

export const GooglePrivacyDlpV2FindingLimits: Schema.Schema<GooglePrivacyDlpV2FindingLimits> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxFindingsPerInfoType: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeLimit),
    ),
    maxFindingsPerItem: Schema.optional(Schema.Number),
    maxFindingsPerRequest: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2FindingLimits" });

export interface GooglePrivacyDlpV2Overlap {}

export const GooglePrivacyDlpV2Overlap: Schema.Schema<GooglePrivacyDlpV2Overlap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2Overlap",
  });

export interface GooglePrivacyDlpV2Encloses {}

export const GooglePrivacyDlpV2Encloses: Schema.Schema<GooglePrivacyDlpV2Encloses> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2Encloses",
  });

export interface GooglePrivacyDlpV2FullyInside {}

export const GooglePrivacyDlpV2FullyInside: Schema.Schema<GooglePrivacyDlpV2FullyInside> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2FullyInside",
  });

export interface GooglePrivacyDlpV2ImageContainmentType {
  /** The context finding's bounding box and the target finding's bounding box must have a non-zero intersection. */
  overlaps?: GooglePrivacyDlpV2Overlap;
  /** The context finding's bounding box must fully contain the target finding's bounding box. */
  encloses?: GooglePrivacyDlpV2Encloses;
  /** The context finding's bounding box must be fully inside the target finding's bounding box. */
  fullyInside?: GooglePrivacyDlpV2FullyInside;
}

export const GooglePrivacyDlpV2ImageContainmentType: Schema.Schema<GooglePrivacyDlpV2ImageContainmentType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overlaps: Schema.optional(GooglePrivacyDlpV2Overlap),
    encloses: Schema.optional(GooglePrivacyDlpV2Encloses),
    fullyInside: Schema.optional(GooglePrivacyDlpV2FullyInside),
  }).annotate({ identifier: "GooglePrivacyDlpV2ImageContainmentType" });

export interface GooglePrivacyDlpV2ExcludeByImageFindings {
  /** A list of image-supported infoTypes—excluding [document infoTypes](https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference#documents)—to be used as context for the exclusion rule. A finding is excluded if its bounding box has the specified spatial relationship (defined by `image_containment_type`) with a finding of an infoType in this list. For example, if `InspectionRuleSet.info_types` includes `OBJECT_TYPE/PERSON` and this `exclusion_rule` specifies `info_types` as `OBJECT_TYPE/PERSON/PASSPORT` with `image_containment_type` set to `encloses`, then `OBJECT_TYPE/PERSON` findings will be excluded if they are fully contained within the bounding box of an `OBJECT_TYPE/PERSON/PASSPORT` finding. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
  /** Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings. */
  imageContainmentType?: GooglePrivacyDlpV2ImageContainmentType;
}

export const GooglePrivacyDlpV2ExcludeByImageFindings: Schema.Schema<GooglePrivacyDlpV2ExcludeByImageFindings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
    imageContainmentType: Schema.optional(
      GooglePrivacyDlpV2ImageContainmentType,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ExcludeByImageFindings" });

export interface GooglePrivacyDlpV2CloudStoragePath {
  /** A URL representing a file or path (no wildcards) in Cloud Storage. Example: `gs://[BUCKET_NAME]/dictionary.txt` */
  path?: string;
}

export const GooglePrivacyDlpV2CloudStoragePath: Schema.Schema<GooglePrivacyDlpV2CloudStoragePath> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudStoragePath" });

export interface GooglePrivacyDlpV2Dictionary {
  /** List of words or phrases to search for. */
  wordList?: GooglePrivacyDlpV2WordList;
  /** Newline-delimited file of words in Cloud Storage. Only a single file is accepted. */
  cloudStoragePath?: GooglePrivacyDlpV2CloudStoragePath;
}

export const GooglePrivacyDlpV2Dictionary: Schema.Schema<GooglePrivacyDlpV2Dictionary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wordList: Schema.optional(GooglePrivacyDlpV2WordList),
    cloudStoragePath: Schema.optional(GooglePrivacyDlpV2CloudStoragePath),
  }).annotate({ identifier: "GooglePrivacyDlpV2Dictionary" });

export interface GooglePrivacyDlpV2ExcludeByHotword {
  /** Regular expression pattern defining what qualifies as a hotword. */
  hotwordRegex?: GooglePrivacyDlpV2Regex;
  /** Range of characters within which the entire hotword must reside. The total length of the window cannot exceed 1000 characters. The windowBefore property in proximity should be set to 1 if the hotword needs to be included in a column header. */
  proximity?: GooglePrivacyDlpV2Proximity;
}

export const GooglePrivacyDlpV2ExcludeByHotword: Schema.Schema<GooglePrivacyDlpV2ExcludeByHotword> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hotwordRegex: Schema.optional(GooglePrivacyDlpV2Regex),
    proximity: Schema.optional(GooglePrivacyDlpV2Proximity),
  }).annotate({ identifier: "GooglePrivacyDlpV2ExcludeByHotword" });

export interface GooglePrivacyDlpV2ExcludeInfoTypes {
  /** InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and `exclusion_rule` containing `exclude_info_types.info_types` with "EMAIL_ADDRESS" the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to "555-222-2222@example.org" to generate only a single finding, namely email address. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
}

export const GooglePrivacyDlpV2ExcludeInfoTypes: Schema.Schema<GooglePrivacyDlpV2ExcludeInfoTypes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
  }).annotate({ identifier: "GooglePrivacyDlpV2ExcludeInfoTypes" });

export interface GooglePrivacyDlpV2ExclusionRule {
  /** How the rule is applied, see MatchingType documentation for details. */
  matchingType?:
    | "MATCHING_TYPE_UNSPECIFIED"
    | "MATCHING_TYPE_FULL_MATCH"
    | "MATCHING_TYPE_PARTIAL_MATCH"
    | "MATCHING_TYPE_INVERSE_MATCH"
    | "MATCHING_TYPE_RULE_SPECIFIC"
    | (string & {});
  /** Exclude findings based on image containment rules. For example, exclude an image finding if it overlaps with another image finding. */
  excludeByImageFindings?: GooglePrivacyDlpV2ExcludeByImageFindings;
  /** Dictionary which defines the rule. */
  dictionary?: GooglePrivacyDlpV2Dictionary;
  /** Regular expression which defines the rule. */
  regex?: GooglePrivacyDlpV2Regex;
  /** Drop if the hotword rule is contained in the proximate context. For tabular data, the context includes the column name. */
  excludeByHotword?: GooglePrivacyDlpV2ExcludeByHotword;
  /** Set of infoTypes for which findings would affect this rule. */
  excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes;
}

export const GooglePrivacyDlpV2ExclusionRule: Schema.Schema<GooglePrivacyDlpV2ExclusionRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchingType: Schema.optional(Schema.String),
    excludeByImageFindings: Schema.optional(
      GooglePrivacyDlpV2ExcludeByImageFindings,
    ),
    dictionary: Schema.optional(GooglePrivacyDlpV2Dictionary),
    regex: Schema.optional(GooglePrivacyDlpV2Regex),
    excludeByHotword: Schema.optional(GooglePrivacyDlpV2ExcludeByHotword),
    excludeInfoTypes: Schema.optional(GooglePrivacyDlpV2ExcludeInfoTypes),
  }).annotate({ identifier: "GooglePrivacyDlpV2ExclusionRule" });

export interface GooglePrivacyDlpV2AdjustByMatchingInfoTypes {
  /** How the adjustment rule is applied. Only `MATCHING_TYPE_PARTIAL_MATCH` is supported: - Partial match: adjusts the findings of infoTypes specified in the inspection rule when they have a nonempty intersection with a finding of an infoType specified in this adjustment rule. */
  matchingType?:
    | "MATCHING_TYPE_UNSPECIFIED"
    | "MATCHING_TYPE_FULL_MATCH"
    | "MATCHING_TYPE_PARTIAL_MATCH"
    | "MATCHING_TYPE_INVERSE_MATCH"
    | "MATCHING_TYPE_RULE_SPECIFIC"
    | (string & {});
  /** Sensitive Data Protection adjusts the likelihood of a finding if that finding also matches one of these infoTypes. For example, you can create a rule to adjust the likelihood of a `PHONE_NUMBER` finding if the string is found within a document that is classified as `DOCUMENT_TYPE/HR/RESUME`. To configure this, set `PHONE_NUMBER` in `InspectionRuleSet.info_types`. Add an `adjustment_rule` with an `adjust_by_matching_info_types.info_types` that contains `DOCUMENT_TYPE/HR/RESUME`. In this case, the likelihood of the `PHONE_NUMBER` finding is adjusted, but the likelihood of the `DOCUMENT_TYPE/HR/RESUME` finding is not. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
  /** Required. Minimum likelihood of the `adjust_by_matching_info_types.info_types` finding. If the likelihood is lower than this value, Sensitive Data Protection doesn't adjust the likelihood of the `InspectionRuleSet.info_types` finding. */
  minLikelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
}

export const GooglePrivacyDlpV2AdjustByMatchingInfoTypes: Schema.Schema<GooglePrivacyDlpV2AdjustByMatchingInfoTypes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchingType: Schema.optional(Schema.String),
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
    minLikelihood: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2AdjustByMatchingInfoTypes" });

export interface GooglePrivacyDlpV2AdjustByImageFindings {
  /** Required. Minimum likelihood of the `adjust_by_image_findings.info_types` finding. If the likelihood is lower than this value, Sensitive Data Protection doesn't adjust the likelihood of the `InspectionRuleSet.info_types` finding. */
  minLikelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** A list of image-supported infoTypes—excluding [document infoTypes](https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference#documents)—to be used as context for the adjustment rule. Sensitive Data Protection adjusts the likelihood of an image finding if its bounding box has the specified spatial relationship (defined by `image_containment_type`) with a finding of an infoType in this list. For example, you can create a rule to adjust the likelihood of a `US_PASSPORT` finding if it is enclosed by a finding of `OBJECT_TYPE/PERSON/PASSPORT`. To configure this, set `US_PASSPORT` in `InspectionRuleSet.info_types`. Add an `adjustment_rule` with an `adjust_by_image_findings.info_types` that contains `OBJECT_TYPE/PERSON/PASSPORT` and `image_containment_type` set to `encloses`. In this case, the likelihood of the `US_PASSPORT` finding is adjusted, but the likelihood of the `OBJECT_TYPE/PERSON/PASSPORT` finding is not. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
  /** Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings. */
  imageContainmentType?: GooglePrivacyDlpV2ImageContainmentType;
}

export const GooglePrivacyDlpV2AdjustByImageFindings: Schema.Schema<GooglePrivacyDlpV2AdjustByImageFindings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLikelihood: Schema.optional(Schema.String),
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
    imageContainmentType: Schema.optional(
      GooglePrivacyDlpV2ImageContainmentType,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2AdjustByImageFindings" });

export interface GooglePrivacyDlpV2AdjustmentRule {
  /** Set of infoTypes for which findings would affect this rule. */
  adjustByMatchingInfoTypes?: GooglePrivacyDlpV2AdjustByMatchingInfoTypes;
  /** AdjustmentRule condition for image findings. */
  adjustByImageFindings?: GooglePrivacyDlpV2AdjustByImageFindings;
  /** Likelihood adjustment to apply to the infoType. */
  likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;
}

export const GooglePrivacyDlpV2AdjustmentRule: Schema.Schema<GooglePrivacyDlpV2AdjustmentRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjustByMatchingInfoTypes: Schema.optional(
      GooglePrivacyDlpV2AdjustByMatchingInfoTypes,
    ),
    adjustByImageFindings: Schema.optional(
      GooglePrivacyDlpV2AdjustByImageFindings,
    ),
    likelihoodAdjustment: Schema.optional(
      GooglePrivacyDlpV2LikelihoodAdjustment,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2AdjustmentRule" });

export interface GooglePrivacyDlpV2InspectionRule {
  /** Exclusion rule. */
  exclusionRule?: GooglePrivacyDlpV2ExclusionRule;
  /** Adjustment rule. */
  adjustmentRule?: GooglePrivacyDlpV2AdjustmentRule;
  /** Hotword-based detection rule. */
  hotwordRule?: GooglePrivacyDlpV2HotwordRule;
}

export const GooglePrivacyDlpV2InspectionRule: Schema.Schema<GooglePrivacyDlpV2InspectionRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exclusionRule: Schema.optional(GooglePrivacyDlpV2ExclusionRule),
    adjustmentRule: Schema.optional(GooglePrivacyDlpV2AdjustmentRule),
    hotwordRule: Schema.optional(GooglePrivacyDlpV2HotwordRule),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectionRule" });

export interface GooglePrivacyDlpV2InspectionRuleSet {
  /** List of infoTypes this rule set is applied to. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
  /** Set of rules to be applied to infoTypes. The rules are applied in order. */
  rules?: ReadonlyArray<GooglePrivacyDlpV2InspectionRule>;
}

export const GooglePrivacyDlpV2InspectionRuleSet: Schema.Schema<GooglePrivacyDlpV2InspectionRuleSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
    rules: Schema.optional(Schema.Array(GooglePrivacyDlpV2InspectionRule)),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectionRuleSet" });

export interface GooglePrivacyDlpV2MetadataKeyValueExpression {
  /** The regular expression for the key. Key should be non-empty. */
  keyRegex?: string;
  /** The regular expression for the value. Value should be non-empty. */
  valueRegex?: string;
}

export const GooglePrivacyDlpV2MetadataKeyValueExpression: Schema.Schema<GooglePrivacyDlpV2MetadataKeyValueExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyRegex: Schema.optional(Schema.String),
    valueRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2MetadataKeyValueExpression" });

export interface GooglePrivacyDlpV2StoredType {
  /** Timestamp indicating when the version of the `StoredInfoType` used for inspection was created. Output-only field, populated by the system. */
  createTime?: string;
  /** Resource name of the requested `StoredInfoType`, for example `organizations/433245324/storedInfoTypes/432452342` or `projects/project-id/storedInfoTypes/432452342`. */
  name?: string;
}

export const GooglePrivacyDlpV2StoredType: Schema.Schema<GooglePrivacyDlpV2StoredType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2StoredType" });

export interface GooglePrivacyDlpV2SurrogateType {}

export const GooglePrivacyDlpV2SurrogateType: Schema.Schema<GooglePrivacyDlpV2SurrogateType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2SurrogateType",
  });

export interface GooglePrivacyDlpV2CustomInfoType {
  /** Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to `VERY_LIKELY` if not specified. */
  likelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** A list of phrases to detect as a CustomInfoType. */
  dictionary?: GooglePrivacyDlpV2Dictionary;
  /** Sensitivity for this CustomInfoType. If this CustomInfoType extends an existing InfoType, the sensitivity here will take precedence over that of the original InfoType. If unset for a CustomInfoType, it will default to HIGH. This only applies to data profiling. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** Key-value pair to detect in the metadata. */
  metadataKeyValueExpression?: GooglePrivacyDlpV2MetadataKeyValueExpression;
  /** Regular expression based CustomInfoType. */
  regex?: GooglePrivacyDlpV2Regex;
  /** Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in the order that they are specified. Only supported for the `dictionary`, `regex`, and `stored_type` CustomInfoTypes. */
  detectionRules?: ReadonlyArray<GooglePrivacyDlpV2DetectionRule>;
  /** If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Only supported for the `dictionary`, `regex`, and `stored_type` CustomInfoTypes. */
  exclusionType?:
    | "EXCLUSION_TYPE_UNSPECIFIED"
    | "EXCLUSION_TYPE_EXCLUDE"
    | (string & {});
  /** CustomInfoType can either be a new infoType, or an extension of built-in infoType, when the name matches one of existing infoTypes and that infoType is specified in `InspectContent.info_types` field. Specifying the latter adds findings to the one detected by the system. If built-in info type is not specified in `InspectContent.info_types` list then the name is treated as a custom info type. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Loads an existing `StoredInfoType` resource. */
  storedType?: GooglePrivacyDlpV2StoredType;
  /** Message for detecting output from deidentification transformations that support reversing. */
  surrogateType?: GooglePrivacyDlpV2SurrogateType;
}

export const GooglePrivacyDlpV2CustomInfoType: Schema.Schema<GooglePrivacyDlpV2CustomInfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    likelihood: Schema.optional(Schema.String),
    dictionary: Schema.optional(GooglePrivacyDlpV2Dictionary),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    metadataKeyValueExpression: Schema.optional(
      GooglePrivacyDlpV2MetadataKeyValueExpression,
    ),
    regex: Schema.optional(GooglePrivacyDlpV2Regex),
    detectionRules: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DetectionRule),
    ),
    exclusionType: Schema.optional(Schema.String),
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    storedType: Schema.optional(GooglePrivacyDlpV2StoredType),
    surrogateType: Schema.optional(GooglePrivacyDlpV2SurrogateType),
  }).annotate({ identifier: "GooglePrivacyDlpV2CustomInfoType" });

export interface GooglePrivacyDlpV2InspectConfig {
  /** When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling. */
  includeQuote?: boolean;
  /** Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose a default list of detectors to run, which may change over time. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoType>;
  /** Deprecated and unused. */
  contentOptions?: ReadonlyArray<
    "CONTENT_UNSPECIFIED" | "CONTENT_TEXT" | "CONTENT_IMAGE" | (string & {})
  >;
  /** Minimum likelihood per infotype. For each infotype, a user can specify a minimum likelihood. The system only returns a finding if its likelihood is above this threshold. If this field is not set, the system uses the InspectConfig min_likelihood. */
  minLikelihoodPerInfoType?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeLikelihood>;
  /** Only returns findings equal to or above this threshold. The default is POSSIBLE. In general, the highest likelihood setting yields the fewest findings in results and the lowest chance of a false positive. For more information, see [Match likelihood](https://cloud.google.com/sensitive-data-protection/docs/likelihood). */
  minLikelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** When true, excludes type information of the findings. This is not used for data profiling. */
  excludeInfoTypes?: boolean;
  /** Configuration to control the number of findings returned. This is not used for data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error. When set within an InspectJobConfig, the specified maximum values aren't hard limits. If an inspection job reaches these limits, the job ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than these maximum values. */
  limits?: GooglePrivacyDlpV2FindingLimits;
  /** Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type. Not supported for the `metadata_key_value_expression` CustomInfoType. */
  ruleSet?: ReadonlyArray<GooglePrivacyDlpV2InspectionRuleSet>;
  /** CustomInfoTypes provided by the user. See https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes to learn more. */
  customInfoTypes?: ReadonlyArray<GooglePrivacyDlpV2CustomInfoType>;
}

export const GooglePrivacyDlpV2InspectConfig: Schema.Schema<GooglePrivacyDlpV2InspectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeQuote: Schema.optional(Schema.Boolean),
    infoTypes: Schema.optional(Schema.Array(GooglePrivacyDlpV2InfoType)),
    contentOptions: Schema.optional(Schema.Array(Schema.String)),
    minLikelihoodPerInfoType: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeLikelihood),
    ),
    minLikelihood: Schema.optional(Schema.String),
    excludeInfoTypes: Schema.optional(Schema.Boolean),
    limits: Schema.optional(GooglePrivacyDlpV2FindingLimits),
    ruleSet: Schema.optional(Schema.Array(GooglePrivacyDlpV2InspectionRuleSet)),
    customInfoTypes: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2CustomInfoType),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectConfig" });

export interface GooglePrivacyDlpV2PartitionId {
  /** If not empty, the ID of the namespace to which the entities belong. */
  namespaceId?: string;
  /** The ID of the project to which the entities belong. */
  projectId?: string;
}

export const GooglePrivacyDlpV2PartitionId: Schema.Schema<GooglePrivacyDlpV2PartitionId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespaceId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2PartitionId" });

export interface GooglePrivacyDlpV2DatastoreOptions {
  /** A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. */
  partitionId?: GooglePrivacyDlpV2PartitionId;
  /** The kind to process. */
  kind?: GooglePrivacyDlpV2KindExpression;
}

export const GooglePrivacyDlpV2DatastoreOptions: Schema.Schema<GooglePrivacyDlpV2DatastoreOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionId: Schema.optional(GooglePrivacyDlpV2PartitionId),
    kind: Schema.optional(GooglePrivacyDlpV2KindExpression),
  }).annotate({ identifier: "GooglePrivacyDlpV2DatastoreOptions" });

export interface GooglePrivacyDlpV2BigQueryTable {
  /** The Google Cloud project ID of the project containing the table. If omitted, project ID is inferred from the API call. */
  projectId?: string;
  /** Dataset ID of the table. */
  datasetId?: string;
  /** Name of the table. */
  tableId?: string;
}

export const GooglePrivacyDlpV2BigQueryTable: Schema.Schema<GooglePrivacyDlpV2BigQueryTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    datasetId: Schema.optional(Schema.String),
    tableId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryTable" });

export interface GooglePrivacyDlpV2BigQueryOptions {
  /** Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. */
  rowsLimit?: string;
  /** Limit scanning only to these fields. When inspecting a table, we recommend that you inspect all columns. Otherwise, findings might be affected because hints from excluded columns will not be used. */
  includedFields?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
  /** Complete BigQuery table reference. */
  tableReference?: GooglePrivacyDlpV2BigQueryTable;
  /** Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed. */
  identifyingFields?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
  /** How to sample the data. */
  sampleMethod?:
    | "SAMPLE_METHOD_UNSPECIFIED"
    | "TOP"
    | "RANDOM_START"
    | (string & {});
  /** Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig. Caution: A [known issue](https://cloud.google.com/sensitive-data-protection/docs/known-issues#bq-sampling) is causing the `rowsLimitPercent` field to behave unexpectedly. We recommend using `rowsLimit` instead. */
  rowsLimitPercent?: number;
  /** References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings. When inspecting a table, we recommend that you inspect all columns. Otherwise, findings might be affected because hints from excluded columns will not be used. */
  excludedFields?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
}

export const GooglePrivacyDlpV2BigQueryOptions: Schema.Schema<GooglePrivacyDlpV2BigQueryOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowsLimit: Schema.optional(Schema.String),
    includedFields: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
    tableReference: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    identifyingFields: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
    sampleMethod: Schema.optional(Schema.String),
    rowsLimitPercent: Schema.optional(Schema.Number),
    excludedFields: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryOptions" });

export interface GooglePrivacyDlpV2TableOptions {
  /** The columns that are the primary keys for table objects included in ContentItem. A copy of this cell's value will stored alongside alongside each finding so that the finding can be traced to the specific row it came from. No more than 3 may be provided. */
  identifyingFields?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
}

export const GooglePrivacyDlpV2TableOptions: Schema.Schema<GooglePrivacyDlpV2TableOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifyingFields: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
  }).annotate({ identifier: "GooglePrivacyDlpV2TableOptions" });

export interface GooglePrivacyDlpV2HybridOptions {
  /** These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. No more than 10 keys can be required. */
  requiredFindingLabelKeys?: ReadonlyArray<string>;
  /** A short description of where the data is coming from. Will be stored once in the job. 256 max length. */
  description?: string;
  /** To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
  labels?: Record<string, string>;
  /** If the container is a table, additional information to make findings meaningful such as the columns that are primary keys. */
  tableOptions?: GooglePrivacyDlpV2TableOptions;
}

export const GooglePrivacyDlpV2HybridOptions: Schema.Schema<GooglePrivacyDlpV2HybridOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredFindingLabelKeys: Schema.optional(Schema.Array(Schema.String)),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tableOptions: Schema.optional(GooglePrivacyDlpV2TableOptions),
  }).annotate({ identifier: "GooglePrivacyDlpV2HybridOptions" });

export interface GooglePrivacyDlpV2CloudStorageRegexFileSet {
  /** The name of a Cloud Storage bucket. Required. */
  bucketName?: string;
  /** A list of regular expressions matching file paths to exclude. All files in the bucket that match at least one of these regular expressions will be excluded from the scan. Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
  excludeRegex?: ReadonlyArray<string>;
  /** A list of regular expressions matching file paths to include. All files in the bucket that match at least one of these regular expressions will be included in the set of files, except for those that also match an item in `exclude_regex`. Leaving this field empty will match all files by default (this is equivalent to including `.*` in the list). Regular expressions use RE2 [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found under the google/re2 repository on GitHub. */
  includeRegex?: ReadonlyArray<string>;
}

export const GooglePrivacyDlpV2CloudStorageRegexFileSet: Schema.Schema<GooglePrivacyDlpV2CloudStorageRegexFileSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucketName: Schema.optional(Schema.String),
    excludeRegex: Schema.optional(Schema.Array(Schema.String)),
    includeRegex: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudStorageRegexFileSet" });

export interface GooglePrivacyDlpV2FileSet {
  /** The Cloud Storage url of the file(s) to scan, in the format `gs:///`. Trailing wildcard in the path is allowed. If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned non-recursively (content in sub-directories will not be scanned). This means that `gs://mybucket/` is equivalent to `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to `gs://mybucket/directory/*`. Exactly one of `url` or `regex_file_set` must be set. */
  url?: string;
  /** The regex-filtered set of files to scan. Exactly one of `url` or `regex_file_set` must be set. */
  regexFileSet?: GooglePrivacyDlpV2CloudStorageRegexFileSet;
}

export const GooglePrivacyDlpV2FileSet: Schema.Schema<GooglePrivacyDlpV2FileSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    regexFileSet: Schema.optional(GooglePrivacyDlpV2CloudStorageRegexFileSet),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileSet" });

export interface GooglePrivacyDlpV2CloudStorageOptions {
  /** The set of one or more files to scan. */
  fileSet?: GooglePrivacyDlpV2FileSet;
  /** Max number of bytes to scan from a file. If a scanned file's size is bigger than this value then the rest of the bytes are omitted. Only one of `bytes_limit_per_file` and `bytes_limit_per_file_percent` can be specified. This field can't be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/sensitive-data-protection/docs/supported-file-types#max-byte-size-per-file). */
  bytesLimitPerFile?: string;
  /** Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. */
  filesLimitPercent?: number;
  /** List of file type groups to include in the scan. If empty, all files are scanned and available data format processors are applied. In addition, the binary content of the selected files is always scanned as well. Images are scanned only as binary if the specified region does not support image inspection and no file_types were specified. Image inspection is restricted to 'global', 'us', 'asia', and 'europe'. */
  fileTypes?: ReadonlyArray<
    | "FILE_TYPE_UNSPECIFIED"
    | "BINARY_FILE"
    | "TEXT_FILE"
    | "IMAGE"
    | "WORD"
    | "PDF"
    | "AVRO"
    | "CSV"
    | "TSV"
    | "POWERPOINT"
    | "EXCEL"
    | (string & {})
  >;
  /** Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of bytes_limit_per_file and bytes_limit_per_file_percent can be specified. This field can't be set if de-identification is requested. For certain file types, setting this field has no effect. For more information, see [Limits on bytes scanned per file](https://cloud.google.com/sensitive-data-protection/docs/supported-file-types#max-byte-size-per-file). */
  bytesLimitPerFilePercent?: number;
  /** How to sample the data. */
  sampleMethod?:
    | "SAMPLE_METHOD_UNSPECIFIED"
    | "TOP"
    | "RANDOM_START"
    | (string & {});
}

export const GooglePrivacyDlpV2CloudStorageOptions: Schema.Schema<GooglePrivacyDlpV2CloudStorageOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileSet: Schema.optional(GooglePrivacyDlpV2FileSet),
    bytesLimitPerFile: Schema.optional(Schema.String),
    filesLimitPercent: Schema.optional(Schema.Number),
    fileTypes: Schema.optional(Schema.Array(Schema.String)),
    bytesLimitPerFilePercent: Schema.optional(Schema.Number),
    sampleMethod: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudStorageOptions" });

export interface GooglePrivacyDlpV2StorageConfig {
  /** Google Cloud Datastore options. */
  datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions;
  /** BigQuery options. */
  bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions;
  /** Hybrid inspection options. */
  hybridOptions?: GooglePrivacyDlpV2HybridOptions;
  /** Configuration of the timespan of the items to include in scanning. */
  timespanConfig?: GooglePrivacyDlpV2TimespanConfig;
  /** Cloud Storage options. */
  cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions;
}

export const GooglePrivacyDlpV2StorageConfig: Schema.Schema<GooglePrivacyDlpV2StorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datastoreOptions: Schema.optional(GooglePrivacyDlpV2DatastoreOptions),
    bigQueryOptions: Schema.optional(GooglePrivacyDlpV2BigQueryOptions),
    hybridOptions: Schema.optional(GooglePrivacyDlpV2HybridOptions),
    timespanConfig: Schema.optional(GooglePrivacyDlpV2TimespanConfig),
    cloudStorageOptions: Schema.optional(GooglePrivacyDlpV2CloudStorageOptions),
  }).annotate({ identifier: "GooglePrivacyDlpV2StorageConfig" });

export interface GooglePrivacyDlpV2PublishSummaryToCscc {}

export const GooglePrivacyDlpV2PublishSummaryToCscc: Schema.Schema<GooglePrivacyDlpV2PublishSummaryToCscc> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2PublishSummaryToCscc",
  });

export interface GooglePrivacyDlpV2PublishFindingsToDataplexCatalog {}

export const GooglePrivacyDlpV2PublishFindingsToDataplexCatalog: Schema.Schema<GooglePrivacyDlpV2PublishFindingsToDataplexCatalog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2PublishFindingsToDataplexCatalog",
  });

export interface GooglePrivacyDlpV2JobNotificationEmails {}

export const GooglePrivacyDlpV2JobNotificationEmails: Schema.Schema<GooglePrivacyDlpV2JobNotificationEmails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2JobNotificationEmails",
  });

export interface GooglePrivacyDlpV2PublishToStackdriver {}

export const GooglePrivacyDlpV2PublishToStackdriver: Schema.Schema<GooglePrivacyDlpV2PublishToStackdriver> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2PublishToStackdriver",
  });

export interface GooglePrivacyDlpV2TransformationConfig {
  /** Structured de-identify template. If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables. If this template is not set but the `deidentify_template` is set, then `deidentify_template` will also apply to the structured content. If neither template is set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify structured content. */
  structuredDeidentifyTemplate?: string;
  /** De-identify template. If this template is specified, it will serve as the default de-identify template. This template cannot contain `record_transformations` since it can be used for unstructured content such as free-form text files. If this template is not set, a default `ReplaceWithInfoTypeConfig` will be used to de-identify unstructured content. */
  deidentifyTemplate?: string;
  /** Image redact template. If this template is specified, it will serve as the de-identify template for images. If this template is not set, all findings in the image will be redacted with a black box. */
  imageRedactTemplate?: string;
}

export const GooglePrivacyDlpV2TransformationConfig: Schema.Schema<GooglePrivacyDlpV2TransformationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    structuredDeidentifyTemplate: Schema.optional(Schema.String),
    deidentifyTemplate: Schema.optional(Schema.String),
    imageRedactTemplate: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationConfig" });

export interface GooglePrivacyDlpV2TransformationDetailsStorageConfig {
  /** The BigQuery table in which to store the output. This may be an existing table or in a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_transformation_details_yyyy_mm_dd_[dlp_job_id]. Pacific time zone will be used for generating the date details. */
  table?: GooglePrivacyDlpV2BigQueryTable;
}

export const GooglePrivacyDlpV2TransformationDetailsStorageConfig: Schema.Schema<GooglePrivacyDlpV2TransformationDetailsStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
  }).annotate({
    identifier: "GooglePrivacyDlpV2TransformationDetailsStorageConfig",
  });

export interface GooglePrivacyDlpV2Deidentify {
  /** User specified deidentify templates and configs for structured, unstructured, and image files. */
  transformationConfig?: GooglePrivacyDlpV2TransformationConfig;
  /** List of user-specified file type groups to transform. If specified, only the files with these file types are transformed. If empty, all supported files are transformed. Supported types may be automatically added over time. Any unsupported file types that are set in this field are excluded from de-identification. An error is recorded for each unsupported file in the TransformationDetails output table. Currently the only file types supported are: IMAGES, TEXT_FILES, CSV, TSV. */
  fileTypesToTransform?: ReadonlyArray<
    | "FILE_TYPE_UNSPECIFIED"
    | "BINARY_FILE"
    | "TEXT_FILE"
    | "IMAGE"
    | "WORD"
    | "PDF"
    | "AVRO"
    | "CSV"
    | "TSV"
    | "POWERPOINT"
    | "EXCEL"
    | (string & {})
  >;
  /** Config for storing transformation details. This field specifies the configuration for storing detailed metadata about each transformation performed during a de-identification process. The metadata is stored separately from the de-identified content itself and provides a granular record of both successful transformations and any failures that occurred. Enabling this configuration is essential for users who need to access comprehensive information about the status, outcome, and specifics of each transformation. The details are captured in the TransformationDetails message for each operation. Key use cases: * **Auditing and compliance** * Provides a verifiable audit trail of de-identification activities, which is crucial for meeting regulatory requirements and internal data governance policies. * Logs what data was transformed, what transformations were applied, when they occurred, and their success status. This helps demonstrate accountability and due diligence in protecting sensitive data. * **Troubleshooting and debugging** * Offers detailed error messages and context if a transformation fails. This information is useful for diagnosing and resolving issues in the de-identification pipeline. * Helps pinpoint the exact location and nature of failures, speeding up the debugging process. * **Process verification and quality assurance** * Allows users to confirm that de-identification rules and transformations were applied correctly and consistently across the dataset as intended. * Helps in verifying the effectiveness of the chosen de-identification strategies. * **Data lineage and impact analysis** * Creates a record of how data elements were modified, contributing to data lineage. This is useful for understanding the provenance of de-identified data. * Aids in assessing the potential impact of de-identification choices on downstream analytical processes or data usability. * **Reporting and operational insights** * You can analyze the metadata stored in a queryable BigQuery table to generate reports on transformation success rates, common error types, processing volumes (e.g., transformedBytes), and the types of transformations applied. * These insights can inform optimization of de-identification configurations and resource planning. To take advantage of these benefits, set this configuration. The stored details include a description of the transformation, success or error codes, error messages, the number of bytes transformed, the location of the transformed content, and identifiers for the job and source data. */
  transformationDetailsStorageConfig?: GooglePrivacyDlpV2TransformationDetailsStorageConfig;
  /** Required. User settable Cloud Storage bucket and folders to store de-identified files. This field must be set for Cloud Storage deidentification. The output Cloud Storage bucket must be different from the input bucket. De-identified files will overwrite files in the output path. Form of: gs://bucket/folder/ or gs://bucket */
  cloudStorageOutput?: string;
}

export const GooglePrivacyDlpV2Deidentify: Schema.Schema<GooglePrivacyDlpV2Deidentify> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformationConfig: Schema.optional(
      GooglePrivacyDlpV2TransformationConfig,
    ),
    fileTypesToTransform: Schema.optional(Schema.Array(Schema.String)),
    transformationDetailsStorageConfig: Schema.optional(
      GooglePrivacyDlpV2TransformationDetailsStorageConfig,
    ),
    cloudStorageOutput: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Deidentify" });

export interface GooglePrivacyDlpV2OutputStorageConfig {
  /** Store findings in an existing Cloud Storage bucket. Files will be generated with the job ID and file part number as the filename and will contain findings in textproto format as SaveToGcsFindingsOutput. The filename will follow the naming convention `-`. Example: `my-job-id-2`. Supported for Inspect jobs. The bucket must not be the same as the bucket being inspected. If storing findings to Cloud Storage, the output schema field should not be set. If set, it will be ignored. */
  storagePath?: GooglePrivacyDlpV2CloudStoragePath;
  /** Store findings in an existing table or a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific time zone will be used for generating the date details. For Inspect, each column in an existing output table must have the same name, type, and mode of a field in the `Finding` object. For Risk, an existing output table should be the output of a previous Risk analysis job run on the same source table, with the same privacy metric and quasi-identifiers. Risk jobs that analyze the same table but compute a different privacy metric, or use different sets of quasi-identifiers, cannot store their results in the same table. */
  table?: GooglePrivacyDlpV2BigQueryTable;
  /** Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage. */
  outputSchema?:
    | "OUTPUT_SCHEMA_UNSPECIFIED"
    | "BASIC_COLUMNS"
    | "GCS_COLUMNS"
    | "DATASTORE_COLUMNS"
    | "BIG_QUERY_COLUMNS"
    | "ALL_COLUMNS"
    | (string & {});
}

export const GooglePrivacyDlpV2OutputStorageConfig: Schema.Schema<GooglePrivacyDlpV2OutputStorageConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storagePath: Schema.optional(GooglePrivacyDlpV2CloudStoragePath),
    table: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    outputSchema: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2OutputStorageConfig" });

export interface GooglePrivacyDlpV2SaveFindings {
  /** Location to store findings outside of DLP. */
  outputConfig?: GooglePrivacyDlpV2OutputStorageConfig;
}

export const GooglePrivacyDlpV2SaveFindings: Schema.Schema<GooglePrivacyDlpV2SaveFindings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(GooglePrivacyDlpV2OutputStorageConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2SaveFindings" });

export interface GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog {}

export const GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog: Schema.Schema<GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog",
  });

export interface GooglePrivacyDlpV2PublishToPubSub {
  /** Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}. */
  topic?: string;
}

export const GooglePrivacyDlpV2PublishToPubSub: Schema.Schema<GooglePrivacyDlpV2PublishToPubSub> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2PublishToPubSub" });

export interface GooglePrivacyDlpV2Action {
  /** Publish summary to Cloud Security Command Center (Alpha). */
  publishSummaryToCscc?: GooglePrivacyDlpV2PublishSummaryToCscc;
  /** Publish findings as an aspect to Dataplex Universal Catalog. */
  publishFindingsToDataplexCatalog?: GooglePrivacyDlpV2PublishFindingsToDataplexCatalog;
  /** Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts). */
  jobNotificationEmails?: GooglePrivacyDlpV2JobNotificationEmails;
  /** Enable Stackdriver metric dlp.googleapis.com/finding_count. */
  publishToStackdriver?: GooglePrivacyDlpV2PublishToStackdriver;
  /** Create a de-identified copy of the input data. */
  deidentify?: GooglePrivacyDlpV2Deidentify;
  /** Save resulting findings in a provided location. */
  saveFindings?: GooglePrivacyDlpV2SaveFindings;
  /** Deprecated because Data Catalog is being turned down. Use publish_findings_to_dataplex_catalog to publish findings to Dataplex Universal Catalog. */
  publishFindingsToCloudDataCatalog?: GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog;
  /** Publish a notification to a Pub/Sub topic. */
  pubSub?: GooglePrivacyDlpV2PublishToPubSub;
}

export const GooglePrivacyDlpV2Action: Schema.Schema<GooglePrivacyDlpV2Action> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishSummaryToCscc: Schema.optional(
      GooglePrivacyDlpV2PublishSummaryToCscc,
    ),
    publishFindingsToDataplexCatalog: Schema.optional(
      GooglePrivacyDlpV2PublishFindingsToDataplexCatalog,
    ),
    jobNotificationEmails: Schema.optional(
      GooglePrivacyDlpV2JobNotificationEmails,
    ),
    publishToStackdriver: Schema.optional(
      GooglePrivacyDlpV2PublishToStackdriver,
    ),
    deidentify: Schema.optional(GooglePrivacyDlpV2Deidentify),
    saveFindings: Schema.optional(GooglePrivacyDlpV2SaveFindings),
    publishFindingsToCloudDataCatalog: Schema.optional(
      GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog,
    ),
    pubSub: Schema.optional(GooglePrivacyDlpV2PublishToPubSub),
  }).annotate({ identifier: "GooglePrivacyDlpV2Action" });

export interface GooglePrivacyDlpV2InspectJobConfig {
  /** How and what to scan for. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
  /** The data to scan. */
  storageConfig?: GooglePrivacyDlpV2StorageConfig;
  /** If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template. */
  inspectTemplateName?: string;
  /** Actions to execute at the completion of the job. */
  actions?: ReadonlyArray<GooglePrivacyDlpV2Action>;
}

export const GooglePrivacyDlpV2InspectJobConfig: Schema.Schema<GooglePrivacyDlpV2InspectJobConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
    storageConfig: Schema.optional(GooglePrivacyDlpV2StorageConfig),
    inspectTemplateName: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.Array(GooglePrivacyDlpV2Action)),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectJobConfig" });

export interface GooglePrivacyDlpV2JobTrigger {
  /** A list of triggers which will be OR'ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object. */
  triggers?: ReadonlyArray<GooglePrivacyDlpV2Trigger>;
  /** Output only. The creation timestamp of a triggeredJob. */
  createTime?: string;
  /** Display name (max 100 chars) */
  displayName?: string;
  /** Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared. */
  errors?: ReadonlyArray<GooglePrivacyDlpV2Error>;
  /** User provided description (max 256 chars) */
  description?: string;
  /** Output only. The timestamp of the last time this trigger executed. */
  lastRunTime?: string;
  /** For inspect jobs, a snapshot of the configuration. */
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
  /** Required. A status for this trigger. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "HEALTHY"
    | "PAUSED"
    | "CANCELLED"
    | (string & {});
  /** Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name?: string;
  /** Output only. The last update timestamp of a triggeredJob. */
  updateTime?: string;
}

export const GooglePrivacyDlpV2JobTrigger: Schema.Schema<GooglePrivacyDlpV2JobTrigger> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    triggers: Schema.optional(Schema.Array(GooglePrivacyDlpV2Trigger)),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(GooglePrivacyDlpV2Error)),
    description: Schema.optional(Schema.String),
    lastRunTime: Schema.optional(Schema.String),
    inspectJob: Schema.optional(GooglePrivacyDlpV2InspectJobConfig),
    status: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2JobTrigger" });

export interface GooglePrivacyDlpV2ByteContentItem {
  /** The type of data stored in the bytes string. Default will be TEXT_UTF8. */
  type?:
    | "BYTES_TYPE_UNSPECIFIED"
    | "IMAGE"
    | "IMAGE_JPEG"
    | "IMAGE_BMP"
    | "IMAGE_PNG"
    | "IMAGE_SVG"
    | "TEXT_UTF8"
    | "WORD_DOCUMENT"
    | "PDF"
    | "POWERPOINT_DOCUMENT"
    | "EXCEL_DOCUMENT"
    | "AVRO"
    | "CSV"
    | "TSV"
    | "AUDIO"
    | "VIDEO"
    | "EXECUTABLE"
    | "AI_MODEL"
    | (string & {});
  /** Content data to inspect or redact. */
  data?: string;
}

export const GooglePrivacyDlpV2ByteContentItem: Schema.Schema<GooglePrivacyDlpV2ByteContentItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ByteContentItem" });

export interface GooglePrivacyDlpV2Row {
  /** Individual cells. */
  values?: ReadonlyArray<GooglePrivacyDlpV2Value>;
}

export const GooglePrivacyDlpV2Row: Schema.Schema<GooglePrivacyDlpV2Row> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(GooglePrivacyDlpV2Value)),
  }).annotate({ identifier: "GooglePrivacyDlpV2Row" });

export interface GooglePrivacyDlpV2Table {
  /** Headers of the table. */
  headers?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
  /** Rows of the table. */
  rows?: ReadonlyArray<GooglePrivacyDlpV2Row>;
}

export const GooglePrivacyDlpV2Table: Schema.Schema<GooglePrivacyDlpV2Table> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headers: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
    rows: Schema.optional(Schema.Array(GooglePrivacyDlpV2Row)),
  }).annotate({ identifier: "GooglePrivacyDlpV2Table" });

export interface GooglePrivacyDlpV2KeyValueMetadataProperty {
  /** The key of the property. */
  key?: string;
  /** The value of the property. */
  value?: string;
}

export const GooglePrivacyDlpV2KeyValueMetadataProperty: Schema.Schema<GooglePrivacyDlpV2KeyValueMetadataProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KeyValueMetadataProperty" });

export interface GooglePrivacyDlpV2ContentMetadata {
  /** User provided key-value pairs of content metadata. */
  properties?: ReadonlyArray<GooglePrivacyDlpV2KeyValueMetadataProperty>;
}

export const GooglePrivacyDlpV2ContentMetadata: Schema.Schema<GooglePrivacyDlpV2ContentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2KeyValueMetadataProperty),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ContentMetadata" });

export interface GooglePrivacyDlpV2ContentItem {
  /** String data to inspect or redact. */
  value?: string;
  /** Content data to inspect or redact. Replaces `type` and `data`. */
  byteItem?: GooglePrivacyDlpV2ByteContentItem;
  /** Structured content for inspection. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-text#inspecting_a_table to learn more. */
  table?: GooglePrivacyDlpV2Table;
  /** User provided metadata for the content. */
  contentMetadata?: GooglePrivacyDlpV2ContentMetadata;
}

export const GooglePrivacyDlpV2ContentItem: Schema.Schema<GooglePrivacyDlpV2ContentItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    byteItem: Schema.optional(GooglePrivacyDlpV2ByteContentItem),
    table: Schema.optional(GooglePrivacyDlpV2Table),
    contentMetadata: Schema.optional(GooglePrivacyDlpV2ContentMetadata),
  }).annotate({ identifier: "GooglePrivacyDlpV2ContentItem" });

export interface GooglePrivacyDlpV2Container {
  /** Container type, for example BigQuery or Cloud Storage. */
  type?: string;
  /** Findings container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated. */
  updateTime?: string;
  /** Project where the finding was found. Can be different from the project that owns the finding. */
  projectId?: string;
  /** The rest of the path after the root. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the relative path is `table_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the relative path is `folder/filename.txt` */
  relativePath?: string;
  /** A string representation of the full container name. Examples: - BigQuery: 'Project:DataSetId.TableId' - Cloud Storage: 'gs://Bucket/folders/filename.txt' */
  fullPath?: string;
  /** The root of the container. Examples: - For BigQuery table `project_id:dataset_id.table_id`, the root is `dataset_id` - For Cloud Storage file `gs://bucket/folder/filename.txt`, the root is `gs://bucket` */
  rootPath?: string;
  /** Findings container version, if available ("generation" for Cloud Storage). */
  version?: string;
}

export const GooglePrivacyDlpV2Container: Schema.Schema<GooglePrivacyDlpV2Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    relativePath: Schema.optional(Schema.String),
    fullPath: Schema.optional(Schema.String),
    rootPath: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Container" });

export interface GooglePrivacyDlpV2InspectTemplate {
  /** The core content of the template. Configuration of the scanning process. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
  /** Output only. The last update timestamp of an inspectTemplate. */
  updateTime?: string;
  /** Display name (max 256 chars). */
  displayName?: string;
  /** Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`; */
  name?: string;
  /** Short description (max 256 chars). */
  description?: string;
  /** Output only. The creation timestamp of an inspectTemplate. */
  createTime?: string;
}

export const GooglePrivacyDlpV2InspectTemplate: Schema.Schema<GooglePrivacyDlpV2InspectTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
    updateTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectTemplate" });

export interface GooglePrivacyDlpV2CreateInspectTemplateRequest {
  /** Required. The InspectTemplate to create. */
  inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
  /** The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
  templateId?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
}

export const GooglePrivacyDlpV2CreateInspectTemplateRequest: Schema.Schema<GooglePrivacyDlpV2CreateInspectTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectTemplate: Schema.optional(GooglePrivacyDlpV2InspectTemplate),
    templateId: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CreateInspectTemplateRequest" });

export interface GooglePrivacyDlpV2InfoTypeCategory {
  /** The region or country that issued the ID or document represented by the infoType. */
  locationCategory?:
    | "LOCATION_UNSPECIFIED"
    | "GLOBAL"
    | "ARGENTINA"
    | "ARMENIA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BELARUS"
    | "BELGIUM"
    | "BRAZIL"
    | "CANADA"
    | "CHILE"
    | "CHINA"
    | "COLOMBIA"
    | "CROATIA"
    | "CZECHIA"
    | "DENMARK"
    | "FRANCE"
    | "FINLAND"
    | "GERMANY"
    | "HONG_KONG"
    | "INDIA"
    | "INDONESIA"
    | "IRELAND"
    | "ISRAEL"
    | "ITALY"
    | "JAPAN"
    | "KAZAKHSTAN"
    | "KOREA"
    | "MEXICO"
    | "THE_NETHERLANDS"
    | "NEW_ZEALAND"
    | "NORWAY"
    | "PARAGUAY"
    | "PERU"
    | "POLAND"
    | "PORTUGAL"
    | "RUSSIA"
    | "SINGAPORE"
    | "SOUTH_AFRICA"
    | "SPAIN"
    | "SWEDEN"
    | "SWITZERLAND"
    | "TAIWAN"
    | "THAILAND"
    | "TURKEY"
    | "UKRAINE"
    | "UNITED_KINGDOM"
    | "UNITED_STATES"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "VENEZUELA"
    | "INTERNAL"
    | (string & {});
  /** The group of relevant businesses where this infoType is commonly used */
  industryCategory?:
    | "INDUSTRY_UNSPECIFIED"
    | "FINANCE"
    | "HEALTH"
    | "TELECOMMUNICATIONS"
    | (string & {});
  /** The class of identifiers where this infoType belongs */
  typeCategory?:
    | "TYPE_UNSPECIFIED"
    | "PII"
    | "SPII"
    | "DEMOGRAPHIC"
    | "CREDENTIAL"
    | "GOVERNMENT_ID"
    | "DOCUMENT"
    | "CONTEXTUAL_INFORMATION"
    | "CUSTOM"
    | (string & {});
}

export const GooglePrivacyDlpV2InfoTypeCategory: Schema.Schema<GooglePrivacyDlpV2InfoTypeCategory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationCategory: Schema.optional(Schema.String),
    industryCategory: Schema.optional(Schema.String),
    typeCategory: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeCategory" });

export interface GooglePrivacyDlpV2MultiRegionProcessing {}

export const GooglePrivacyDlpV2MultiRegionProcessing: Schema.Schema<GooglePrivacyDlpV2MultiRegionProcessing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2MultiRegionProcessing",
  });

export interface GooglePrivacyDlpV2GlobalProcessing {}

export const GooglePrivacyDlpV2GlobalProcessing: Schema.Schema<GooglePrivacyDlpV2GlobalProcessing> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2GlobalProcessing",
  });

export interface GooglePrivacyDlpV2ImageFallbackLocation {
  /** Processing occurs in a multi-region that contains the current region if available. */
  multiRegionProcessing?: GooglePrivacyDlpV2MultiRegionProcessing;
  /** Processing occurs in the global region. */
  globalProcessing?: GooglePrivacyDlpV2GlobalProcessing;
}

export const GooglePrivacyDlpV2ImageFallbackLocation: Schema.Schema<GooglePrivacyDlpV2ImageFallbackLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiRegionProcessing: Schema.optional(
      GooglePrivacyDlpV2MultiRegionProcessing,
    ),
    globalProcessing: Schema.optional(GooglePrivacyDlpV2GlobalProcessing),
  }).annotate({ identifier: "GooglePrivacyDlpV2ImageFallbackLocation" });

export interface GooglePrivacyDlpV2PublishToDataplexCatalog {
  /** Whether creating a Dataplex Universal Catalog aspect for a profiled resource should lower the risk of the profile for that resource. This also lowers the data risk of resources at the lower levels of the resource hierarchy. For example, reducing the data risk of a table data profile also reduces the data risk of the constituent column data profiles. */
  lowerDataRiskToLow?: boolean;
}

export const GooglePrivacyDlpV2PublishToDataplexCatalog: Schema.Schema<GooglePrivacyDlpV2PublishToDataplexCatalog> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowerDataRiskToLow: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2PublishToDataplexCatalog" });

export interface GooglePrivacyDlpV2PubSubCondition {
  /** The minimum data risk score that triggers the condition. */
  minimumRiskScore?:
    | "PROFILE_SCORE_BUCKET_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM_OR_HIGH"
    | (string & {});
  /** The minimum sensitivity level that triggers the condition. */
  minimumSensitivityScore?:
    | "PROFILE_SCORE_BUCKET_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM_OR_HIGH"
    | (string & {});
}

export const GooglePrivacyDlpV2PubSubCondition: Schema.Schema<GooglePrivacyDlpV2PubSubCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumRiskScore: Schema.optional(Schema.String),
    minimumSensitivityScore: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2PubSubCondition" });

export interface GooglePrivacyDlpV2PubSubExpressions {
  /** The operator to apply to the collection of conditions. */
  logicalOperator?:
    | "LOGICAL_OPERATOR_UNSPECIFIED"
    | "OR"
    | "AND"
    | (string & {});
  /** Conditions to apply to the expression. */
  conditions?: ReadonlyArray<GooglePrivacyDlpV2PubSubCondition>;
}

export const GooglePrivacyDlpV2PubSubExpressions: Schema.Schema<GooglePrivacyDlpV2PubSubExpressions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logicalOperator: Schema.optional(Schema.String),
    conditions: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2PubSubCondition),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2PubSubExpressions" });

export interface GooglePrivacyDlpV2DataProfilePubSubCondition {
  /** An expression. */
  expressions?: GooglePrivacyDlpV2PubSubExpressions;
}

export const GooglePrivacyDlpV2DataProfilePubSubCondition: Schema.Schema<GooglePrivacyDlpV2DataProfilePubSubCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expressions: Schema.optional(GooglePrivacyDlpV2PubSubExpressions),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfilePubSubCondition" });

export interface GooglePrivacyDlpV2PubSubNotification {
  /** Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}. */
  topic?: string;
  /** Conditions (e.g., data risk or sensitivity level) for triggering a Pub/Sub. */
  pubsubCondition?: GooglePrivacyDlpV2DataProfilePubSubCondition;
  /** How much data to include in the Pub/Sub message. If the user wishes to limit the size of the message, they can use resource_name and fetch the profile fields they wish to. Per table profile (not per column). */
  detailOfMessage?:
    | "DETAIL_LEVEL_UNSPECIFIED"
    | "TABLE_PROFILE"
    | "RESOURCE_NAME"
    | "FILE_STORE_PROFILE"
    | (string & {});
  /** The type of event that triggers a Pub/Sub. At most one `PubSubNotification` per EventType is permitted. */
  event?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "NEW_PROFILE"
    | "CHANGED_PROFILE"
    | "SCORE_INCREASED"
    | "ERROR_CHANGED"
    | (string & {});
}

export const GooglePrivacyDlpV2PubSubNotification: Schema.Schema<GooglePrivacyDlpV2PubSubNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(Schema.String),
    pubsubCondition: Schema.optional(
      GooglePrivacyDlpV2DataProfilePubSubCondition,
    ),
    detailOfMessage: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2PubSubNotification" });

export interface GooglePrivacyDlpV2Export {
  /** Store all profiles to BigQuery. * The system will create a new dataset and table for you if none are are provided. The dataset will be named `sensitive_data_protection_discovery` and table will be named `discovery_profiles`. This table will be placed in the same project as the container project running the scan. After the first profile is generated and the dataset and table are created, the discovery scan configuration will be updated with the dataset and table names. * See [Analyze data profiles stored in BigQuery](https://cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles). * See [Sample queries for your BigQuery table](https://cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles#sample_sql_queries). * Data is inserted using [streaming insert](https://cloud.google.com/blog/products/bigquery/life-of-a-bigquery-streaming-insert) and so data may be in the buffer for a period of time after the profile has finished. * The Pub/Sub notification is sent before the streaming buffer is guaranteed to be written, so data may not be instantly visible to queries by the time your topic receives the Pub/Sub notification. * The best practice is to use the same table for an entire organization so that you can take advantage of the [provided Data Studio reports](https://cloud.google.com/sensitive-data-protection/docs/analyze-data-profiles#use_a_premade_report). If you use VPC Service Controls to define security perimeters, then you must use a separate table for each boundary. */
  profileTable?: GooglePrivacyDlpV2BigQueryTable;
  /** Store sample data profile findings in an existing table or a new table in an existing dataset. Each regeneration will result in new rows in BigQuery. Data is inserted using [streaming insert](https://cloud.google.com/blog/products/bigquery/life-of-a-bigquery-streaming-insert) and so data may be in the buffer for a period of time after the profile has finished. */
  sampleFindingsTable?: GooglePrivacyDlpV2BigQueryTable;
}

export const GooglePrivacyDlpV2Export: Schema.Schema<GooglePrivacyDlpV2Export> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileTable: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    sampleFindingsTable: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
  }).annotate({ identifier: "GooglePrivacyDlpV2Export" });

export interface GooglePrivacyDlpV2TagValue {
  /** The namespaced name for the tag value to attach to resources. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`, for example, "123456/environment/prod" for an organization parent, or "my-project/environment/prod" for a project parent. */
  namespacedValue?: string;
}

export const GooglePrivacyDlpV2TagValue: Schema.Schema<GooglePrivacyDlpV2TagValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespacedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TagValue" });

export interface GooglePrivacyDlpV2TagCondition {
  /** Conditions attaching the tag to a resource on its profile having this sensitivity score. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** The tag value to attach to resources. */
  tag?: GooglePrivacyDlpV2TagValue;
}

export const GooglePrivacyDlpV2TagCondition: Schema.Schema<GooglePrivacyDlpV2TagCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    tag: Schema.optional(GooglePrivacyDlpV2TagValue),
  }).annotate({ identifier: "GooglePrivacyDlpV2TagCondition" });

export interface GooglePrivacyDlpV2TagResources {
  /** The profile generations for which the tag should be attached to resources. If you attach a tag to only new profiles, then if the sensitivity score of a profile subsequently changes, its tag doesn't change. By default, this field includes only new profiles. To include both new and updated profiles for tagging, this field should explicitly include both `PROFILE_GENERATION_NEW` and `PROFILE_GENERATION_UPDATE`. */
  profileGenerationsToTag?: ReadonlyArray<
    | "PROFILE_GENERATION_UNSPECIFIED"
    | "PROFILE_GENERATION_NEW"
    | "PROFILE_GENERATION_UPDATE"
    | (string & {})
  >;
  /** The tags to associate with different conditions. */
  tagConditions?: ReadonlyArray<GooglePrivacyDlpV2TagCondition>;
  /** Whether applying a tag to a resource should lower the risk of the profile for that resource. For example, in conjunction with an [IAM deny policy](https://cloud.google.com/iam/docs/deny-overview), you can deny all principals a permission if a tag value is present, mitigating the risk of the resource. This also lowers the data risk of resources at the lower levels of the resource hierarchy. For example, reducing the data risk of a table data profile also reduces the data risk of the constituent column data profiles. */
  lowerDataRiskToLow?: boolean;
}

export const GooglePrivacyDlpV2TagResources: Schema.Schema<GooglePrivacyDlpV2TagResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    profileGenerationsToTag: Schema.optional(Schema.Array(Schema.String)),
    tagConditions: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2TagCondition),
    ),
    lowerDataRiskToLow: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2TagResources" });

export interface GooglePrivacyDlpV2PublishToChronicle {}

export const GooglePrivacyDlpV2PublishToChronicle: Schema.Schema<GooglePrivacyDlpV2PublishToChronicle> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2PublishToChronicle",
  });

export interface GooglePrivacyDlpV2PublishToSecurityCommandCenter {}

export const GooglePrivacyDlpV2PublishToSecurityCommandCenter: Schema.Schema<GooglePrivacyDlpV2PublishToSecurityCommandCenter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2PublishToSecurityCommandCenter",
  });

export interface GooglePrivacyDlpV2DataProfileAction {
  /** Publishes a portion of each profile to Dataplex Universal Catalog with the aspect type Sensitive Data Protection Profile. */
  publishToDataplexCatalog?: GooglePrivacyDlpV2PublishToDataplexCatalog;
  /** Publish a message into the Pub/Sub topic. */
  pubSubNotification?: GooglePrivacyDlpV2PubSubNotification;
  /** Export data profiles into a provided location. */
  exportData?: GooglePrivacyDlpV2Export;
  /** Tags the profiled resources with the specified tag values. */
  tagResources?: GooglePrivacyDlpV2TagResources;
  /** Publishes generated data profiles to Google Security Operations. For more information, see [Use Sensitive Data Protection data in context-aware analytics](https://cloud.google.com/chronicle/docs/detection/usecase-dlp-high-risk-user-download). */
  publishToChronicle?: GooglePrivacyDlpV2PublishToChronicle;
  /** Publishes findings to Security Command Center for each data profile. */
  publishToScc?: GooglePrivacyDlpV2PublishToSecurityCommandCenter;
}

export const GooglePrivacyDlpV2DataProfileAction: Schema.Schema<GooglePrivacyDlpV2DataProfileAction> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publishToDataplexCatalog: Schema.optional(
      GooglePrivacyDlpV2PublishToDataplexCatalog,
    ),
    pubSubNotification: Schema.optional(GooglePrivacyDlpV2PubSubNotification),
    exportData: Schema.optional(GooglePrivacyDlpV2Export),
    tagResources: Schema.optional(GooglePrivacyDlpV2TagResources),
    publishToChronicle: Schema.optional(GooglePrivacyDlpV2PublishToChronicle),
    publishToScc: Schema.optional(
      GooglePrivacyDlpV2PublishToSecurityCommandCenter,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileAction" });

export interface GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation {
  /** The AWS starting location for discovery. */
  awsLocation?: GooglePrivacyDlpV2AwsDiscoveryStartingLocation;
}

export const GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation: Schema.Schema<GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    awsLocation: Schema.optional(
      GooglePrivacyDlpV2AwsDiscoveryStartingLocation,
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation",
  });

export interface GooglePrivacyDlpV2DataProfileLocation {
  /** The ID of an organization to scan. */
  organizationId?: string;
  /** The ID of the folder within an organization to scan. */
  folderId?: string;
}

export const GooglePrivacyDlpV2DataProfileLocation: Schema.Schema<GooglePrivacyDlpV2DataProfileLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    folderId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileLocation" });

export interface GooglePrivacyDlpV2DataProfileJobConfig {
  /** The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the DLP API must be enabled. */
  projectId?: string;
  /** Actions to execute at the completion of the job. */
  dataProfileActions?: ReadonlyArray<GooglePrivacyDlpV2DataProfileAction>;
  /** Detection logic for profile generation. Not all template features are used by profiles. FindingLimits, include_quote and exclude_info_types have no impact on data profiling. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned. For more information, see https://cloud.google.com/sensitive-data-protection/docs/data-profiles#data-residency. */
  inspectTemplates?: ReadonlyArray<string>;
  /** Must be set only when scanning other clouds. */
  otherCloudStartingLocation?: GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation;
  /** The data to scan. */
  location?: GooglePrivacyDlpV2DataProfileLocation;
}

export const GooglePrivacyDlpV2DataProfileJobConfig: Schema.Schema<GooglePrivacyDlpV2DataProfileJobConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    dataProfileActions: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DataProfileAction),
    ),
    inspectTemplates: Schema.optional(Schema.Array(Schema.String)),
    otherCloudStartingLocation: Schema.optional(
      GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation,
    ),
    location: Schema.optional(GooglePrivacyDlpV2DataProfileLocation),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileJobConfig" });

export interface GooglePrivacyDlpV2ReidentifyContentRequest {
  /** The item to re-identify. Will be treated as text. */
  item?: GooglePrivacyDlpV2ContentItem;
  /** Configuration for the re-identification of the content item. This field shares the same proto message type that is used for de-identification, however its usage here is for the reversal of the previous de-identification. Re-identification is performed by examining the transformations used to de-identify the items and executing the reverse. This requires that only reversible transformations be provided here. The reversible transformations are: - `CryptoDeterministicConfig` - `CryptoReplaceFfxFpeConfig` */
  reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
  /** Configuration for the inspector. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
  /** Template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. The `DeidentifyTemplate` used must include only reversible transformations. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
  reidentifyTemplateName?: string;
  /** Template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
  inspectTemplateName?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
}

export const GooglePrivacyDlpV2ReidentifyContentRequest: Schema.Schema<GooglePrivacyDlpV2ReidentifyContentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(GooglePrivacyDlpV2ContentItem),
    reidentifyConfig: Schema.optional(GooglePrivacyDlpV2DeidentifyConfig),
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
    reidentifyTemplateName: Schema.optional(Schema.String),
    inspectTemplateName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ReidentifyContentRequest" });

export interface GooglePrivacyDlpV2InfoTypeStats {
  /** The type of finding this stat is for. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Number of findings for this infoType. */
  count?: string;
}

export const GooglePrivacyDlpV2InfoTypeStats: Schema.Schema<GooglePrivacyDlpV2InfoTypeStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeStats" });

export interface GooglePrivacyDlpV2Result {
  /** Statistics of how many instances of each info type were found during inspect job. */
  infoTypeStats?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeStats>;
  /** Number of rows scanned after sampling and time filtering (applicable for row based stores such as BigQuery). */
  numRowsProcessed?: string;
  /** Statistics related to the processing of hybrid inspect. */
  hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;
  /** Estimate of the number of bytes to process. */
  totalEstimatedBytes?: string;
  /** Total size in bytes that were processed. */
  processedBytes?: string;
}

export const GooglePrivacyDlpV2Result: Schema.Schema<GooglePrivacyDlpV2Result> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypeStats: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeStats),
    ),
    numRowsProcessed: Schema.optional(Schema.String),
    hybridStats: Schema.optional(GooglePrivacyDlpV2HybridInspectStatistics),
    totalEstimatedBytes: Schema.optional(Schema.String),
    processedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Result" });

export interface GooglePrivacyDlpV2LargeCustomDictionaryStats {
  /** Approximate number of distinct phrases in the dictionary. */
  approxNumPhrases?: string;
}

export const GooglePrivacyDlpV2LargeCustomDictionaryStats: Schema.Schema<GooglePrivacyDlpV2LargeCustomDictionaryStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approxNumPhrases: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2LargeCustomDictionaryStats" });

export interface GooglePrivacyDlpV2ImageRedactionConfig {
  /** The color to use when redacting content from an image. If not specified, the default is black. */
  redactionColor?: GooglePrivacyDlpV2Color;
  /** Only one per info_type should be provided per request. If not specified, and redact_all_text is false, the DLP API will redact all text that it matches against all info_types that are found, but not specified in another ImageRedactionConfig. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided. */
  redactAllText?: boolean;
}

export const GooglePrivacyDlpV2ImageRedactionConfig: Schema.Schema<GooglePrivacyDlpV2ImageRedactionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redactionColor: Schema.optional(GooglePrivacyDlpV2Color),
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    redactAllText: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2ImageRedactionConfig" });

export interface GooglePrivacyDlpV2RedactImageRequest {
  /** Configuration for the inspector. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
  /** The full resource name of the inspection template to use. Settings in the main `inspect_config` field override the corresponding settings in this inspection template. The merge behavior is as follows: - Singular field: The main field's value replaces the value of the corresponding field in the template. - Repeated fields: The field values are appended to the list defined in the template. - Sub-messages and groups: The fields are recursively merged. */
  inspectTemplate?: string;
  /** Whether the response should include findings along with the redacted image. */
  includeFindings?: boolean;
  /** The content must be PNG, JPEG, SVG or BMP. */
  byteItem?: GooglePrivacyDlpV2ByteContentItem;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** The full resource name of the de-identification template to use. Settings in the main `image_redaction_configs` field override the corresponding settings in this de-identification template. The request fails if the type of the template's deidentify_config is not image_transformations. */
  deidentifyTemplate?: string;
  /** The configuration for specifying what content to redact from images. */
  imageRedactionConfigs?: ReadonlyArray<GooglePrivacyDlpV2ImageRedactionConfig>;
}

export const GooglePrivacyDlpV2RedactImageRequest: Schema.Schema<GooglePrivacyDlpV2RedactImageRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
    inspectTemplate: Schema.optional(Schema.String),
    includeFindings: Schema.optional(Schema.Boolean),
    byteItem: Schema.optional(GooglePrivacyDlpV2ByteContentItem),
    locationId: Schema.optional(Schema.String),
    deidentifyTemplate: Schema.optional(Schema.String),
    imageRedactionConfigs: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ImageRedactionConfig),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2RedactImageRequest" });

export interface GooglePrivacyDlpV2TagFilter {
  /** The namespaced name for the tag value. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`, for example, "123456/environment/prod" for an organization parent, or "my-project/environment/prod" for a project parent. */
  namespacedTagValue?: string;
  /** The namespaced name for the tag key. Must be in the format `{parent_id}/{tag_key_short_name}`, for example, "123456/sensitive" for an organization parent, or "my-project/sensitive" for a project parent. */
  namespacedTagKey?: string;
}

export const GooglePrivacyDlpV2TagFilter: Schema.Schema<GooglePrivacyDlpV2TagFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespacedTagValue: Schema.optional(Schema.String),
    namespacedTagKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TagFilter" });

export interface GooglePrivacyDlpV2TagFilters {
  /** Required. A resource must match ALL of the specified tag filters to be included in the collection. */
  tagFilters?: ReadonlyArray<GooglePrivacyDlpV2TagFilter>;
}

export const GooglePrivacyDlpV2TagFilters: Schema.Schema<GooglePrivacyDlpV2TagFilters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tagFilters: Schema.optional(Schema.Array(GooglePrivacyDlpV2TagFilter)),
  }).annotate({ identifier: "GooglePrivacyDlpV2TagFilters" });

export interface GooglePrivacyDlpV2DiscoveryCloudStorageGenerationCadence {
  /** Optional. Data changes in Cloud Storage can't trigger reprofiling. If you set this field, profiles are refreshed at this frequency regardless of whether the underlying buckets have changed. Defaults to never. */
  refreshFrequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
  /** Optional. Governs when to update data profiles when the inspection rules defined by the `InspectTemplate` change. If not set, changing the template will not cause a data profile to update. */
  inspectTemplateModifiedCadence?: GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence;
}

export const GooglePrivacyDlpV2DiscoveryCloudStorageGenerationCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryCloudStorageGenerationCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refreshFrequency: Schema.optional(Schema.String),
    inspectTemplateModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence,
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryCloudStorageGenerationCadence",
  });

export interface Proto2BridgeMessageSet {}

export const Proto2BridgeMessageSet: Schema.Schema<Proto2BridgeMessageSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Proto2BridgeMessageSet",
  });

export interface GooglePrivacyDlpV2LDiversityConfig {
  /** Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key. */
  quasiIds?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
  /** Sensitive field for computing the l-value. */
  sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2LDiversityConfig: Schema.Schema<GooglePrivacyDlpV2LDiversityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quasiIds: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
    sensitiveAttribute: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({ identifier: "GooglePrivacyDlpV2LDiversityConfig" });

export interface GooglePrivacyDlpV2CategoricalStatsConfig {
  /** Field to compute categorical stats on. All column types are supported except for arrays and structs. However, it may be more informative to use NumericalStats when the field type is supported, depending on the data. */
  field?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2CategoricalStatsConfig: Schema.Schema<GooglePrivacyDlpV2CategoricalStatsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({ identifier: "GooglePrivacyDlpV2CategoricalStatsConfig" });

export interface GooglePrivacyDlpV2EntityId {
  /** Composite key indicating which field contains the entity identifier. */
  field?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2EntityId: Schema.Schema<GooglePrivacyDlpV2EntityId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({ identifier: "GooglePrivacyDlpV2EntityId" });

export interface GooglePrivacyDlpV2KAnonymityConfig {
  /** Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field. */
  quasiIds?: ReadonlyArray<GooglePrivacyDlpV2FieldId>;
  /** Message indicating that multiple rows might be associated to a single individual. If the same entity_id is associated to multiple quasi-identifier tuples over distinct rows, we consider the entire collection of tuples as the composite quasi-identifier. This collection is a multiset: the order in which the different tuples appear in the dataset is ignored, but their frequency is taken into account. Important note: a maximum of 1000 rows can be associated to a single entity ID. If more rows are associated with the same entity ID, some might be ignored. */
  entityId?: GooglePrivacyDlpV2EntityId;
}

export const GooglePrivacyDlpV2KAnonymityConfig: Schema.Schema<GooglePrivacyDlpV2KAnonymityConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quasiIds: Schema.optional(Schema.Array(GooglePrivacyDlpV2FieldId)),
    entityId: Schema.optional(GooglePrivacyDlpV2EntityId),
  }).annotate({ identifier: "GooglePrivacyDlpV2KAnonymityConfig" });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GooglePrivacyDlpV2QuasiId {
  /** Required. Identifies the column. */
  field?: GooglePrivacyDlpV2FieldId;
  /** A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use ListInfoTypes with the supported_by=RISK_ANALYSIS filter. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column. */
  customTag?: string;
  /** If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data */
  inferred?: GoogleProtobufEmpty;
}

export const GooglePrivacyDlpV2QuasiId: Schema.Schema<GooglePrivacyDlpV2QuasiId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    customTag: Schema.optional(Schema.String),
    inferred: Schema.optional(GoogleProtobufEmpty),
  }).annotate({ identifier: "GooglePrivacyDlpV2QuasiId" });

export interface GooglePrivacyDlpV2QuasiIdentifierField {
  /** Identifies the column. */
  field?: GooglePrivacyDlpV2FieldId;
  /** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column. */
  customTag?: string;
}

export const GooglePrivacyDlpV2QuasiIdentifierField: Schema.Schema<GooglePrivacyDlpV2QuasiIdentifierField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    customTag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2QuasiIdentifierField" });

export interface GooglePrivacyDlpV2StatisticalTable {
  /** Required. Auxiliary table location. */
  table?: GooglePrivacyDlpV2BigQueryTable;
  /** Required. Quasi-identifier columns. */
  quasiIds?: ReadonlyArray<GooglePrivacyDlpV2QuasiIdentifierField>;
  /** Required. The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero. */
  relativeFrequency?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2StatisticalTable: Schema.Schema<GooglePrivacyDlpV2StatisticalTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    table: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    quasiIds: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2QuasiIdentifierField),
    ),
    relativeFrequency: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({ identifier: "GooglePrivacyDlpV2StatisticalTable" });

export interface GooglePrivacyDlpV2DeltaPresenceEstimationConfig {
  /** ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. */
  regionCode?: string;
  /** Required. Fields considered to be quasi-identifiers. No two fields can have the same tag. */
  quasiIds?: ReadonlyArray<GooglePrivacyDlpV2QuasiId>;
  /** Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table. */
  auxiliaryTables?: ReadonlyArray<GooglePrivacyDlpV2StatisticalTable>;
}

export const GooglePrivacyDlpV2DeltaPresenceEstimationConfig: Schema.Schema<GooglePrivacyDlpV2DeltaPresenceEstimationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    quasiIds: Schema.optional(Schema.Array(GooglePrivacyDlpV2QuasiId)),
    auxiliaryTables: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2StatisticalTable),
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DeltaPresenceEstimationConfig",
  });

export interface GooglePrivacyDlpV2NumericalStatsConfig {
  /** Field to compute numerical stats on. Supported types are integer, float, date, datetime, timestamp, time. */
  field?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2NumericalStatsConfig: Schema.Schema<GooglePrivacyDlpV2NumericalStatsConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({ identifier: "GooglePrivacyDlpV2NumericalStatsConfig" });

export interface GooglePrivacyDlpV2QuasiIdField {
  /** Identifies the column. */
  field?: GooglePrivacyDlpV2FieldId;
  /** A auxiliary field. */
  customTag?: string;
}

export const GooglePrivacyDlpV2QuasiIdField: Schema.Schema<GooglePrivacyDlpV2QuasiIdField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    customTag: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2QuasiIdField" });

export interface GooglePrivacyDlpV2AuxiliaryTable {
  /** Required. The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero. */
  relativeFrequency?: GooglePrivacyDlpV2FieldId;
  /** Required. Auxiliary table location. */
  table?: GooglePrivacyDlpV2BigQueryTable;
  /** Required. Quasi-identifier columns. */
  quasiIds?: ReadonlyArray<GooglePrivacyDlpV2QuasiIdField>;
}

export const GooglePrivacyDlpV2AuxiliaryTable: Schema.Schema<GooglePrivacyDlpV2AuxiliaryTable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relativeFrequency: Schema.optional(GooglePrivacyDlpV2FieldId),
    table: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    quasiIds: Schema.optional(Schema.Array(GooglePrivacyDlpV2QuasiIdField)),
  }).annotate({ identifier: "GooglePrivacyDlpV2AuxiliaryTable" });

export interface GooglePrivacyDlpV2TaggedField {
  /** Required. Identifies the column. */
  field?: GooglePrivacyDlpV2FieldId;
  /** A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders. To programmatically obtain the list of supported InfoTypes, use ListInfoTypes with the supported_by=RISK_ANALYSIS filter. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column. */
  customTag?: string;
  /** If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data */
  inferred?: GoogleProtobufEmpty;
}

export const GooglePrivacyDlpV2TaggedField: Schema.Schema<GooglePrivacyDlpV2TaggedField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    customTag: Schema.optional(Schema.String),
    inferred: Schema.optional(GoogleProtobufEmpty),
  }).annotate({ identifier: "GooglePrivacyDlpV2TaggedField" });

export interface GooglePrivacyDlpV2KMapEstimationConfig {
  /** Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table. */
  auxiliaryTables?: ReadonlyArray<GooglePrivacyDlpV2AuxiliaryTable>;
  /** ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. */
  regionCode?: string;
  /** Required. Fields considered to be quasi-identifiers. No two columns can have the same tag. */
  quasiIds?: ReadonlyArray<GooglePrivacyDlpV2TaggedField>;
}

export const GooglePrivacyDlpV2KMapEstimationConfig: Schema.Schema<GooglePrivacyDlpV2KMapEstimationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    auxiliaryTables: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2AuxiliaryTable),
    ),
    regionCode: Schema.optional(Schema.String),
    quasiIds: Schema.optional(Schema.Array(GooglePrivacyDlpV2TaggedField)),
  }).annotate({ identifier: "GooglePrivacyDlpV2KMapEstimationConfig" });

export interface GooglePrivacyDlpV2PrivacyMetric {
  /** l-diversity */
  lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;
  /** Categorical stats */
  categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;
  /** K-anonymity */
  kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;
  /** delta-presence */
  deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;
  /** Numerical stats */
  numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
  /** k-map */
  kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;
}

export const GooglePrivacyDlpV2PrivacyMetric: Schema.Schema<GooglePrivacyDlpV2PrivacyMetric> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lDiversityConfig: Schema.optional(GooglePrivacyDlpV2LDiversityConfig),
    categoricalStatsConfig: Schema.optional(
      GooglePrivacyDlpV2CategoricalStatsConfig,
    ),
    kAnonymityConfig: Schema.optional(GooglePrivacyDlpV2KAnonymityConfig),
    deltaPresenceEstimationConfig: Schema.optional(
      GooglePrivacyDlpV2DeltaPresenceEstimationConfig,
    ),
    numericalStatsConfig: Schema.optional(
      GooglePrivacyDlpV2NumericalStatsConfig,
    ),
    kMapEstimationConfig: Schema.optional(
      GooglePrivacyDlpV2KMapEstimationConfig,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2PrivacyMetric" });

export interface GooglePrivacyDlpV2RiskAnalysisJobConfig {
  /** Input dataset to compute metrics over. */
  sourceTable?: GooglePrivacyDlpV2BigQueryTable;
  /** Privacy metric to compute. */
  privacyMetric?: GooglePrivacyDlpV2PrivacyMetric;
  /** Actions to execute at the completion of the job. Are executed in the order provided. */
  actions?: ReadonlyArray<GooglePrivacyDlpV2Action>;
}

export const GooglePrivacyDlpV2RiskAnalysisJobConfig: Schema.Schema<GooglePrivacyDlpV2RiskAnalysisJobConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceTable: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    privacyMetric: Schema.optional(GooglePrivacyDlpV2PrivacyMetric),
    actions: Schema.optional(Schema.Array(GooglePrivacyDlpV2Action)),
  }).annotate({ identifier: "GooglePrivacyDlpV2RiskAnalysisJobConfig" });

export interface GooglePrivacyDlpV2RequestedRiskAnalysisOptions {
  /** The job config for the risk job. */
  jobConfig?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}

export const GooglePrivacyDlpV2RequestedRiskAnalysisOptions: Schema.Schema<GooglePrivacyDlpV2RequestedRiskAnalysisOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobConfig: Schema.optional(GooglePrivacyDlpV2RiskAnalysisJobConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2RequestedRiskAnalysisOptions" });

export interface GooglePrivacyDlpV2LDiversityEquivalenceClass {
  /** Size of the k-anonymity equivalence class. */
  equivalenceClassSize?: string;
  /** Estimated frequencies of top sensitive values. */
  topSensitiveValues?: ReadonlyArray<GooglePrivacyDlpV2ValueFrequency>;
  /** Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request. */
  quasiIdsValues?: ReadonlyArray<GooglePrivacyDlpV2Value>;
  /** Number of distinct sensitive values in this equivalence class. */
  numDistinctSensitiveValues?: string;
}

export const GooglePrivacyDlpV2LDiversityEquivalenceClass: Schema.Schema<GooglePrivacyDlpV2LDiversityEquivalenceClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    equivalenceClassSize: Schema.optional(Schema.String),
    topSensitiveValues: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ValueFrequency),
    ),
    quasiIdsValues: Schema.optional(Schema.Array(GooglePrivacyDlpV2Value)),
    numDistinctSensitiveValues: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2LDiversityEquivalenceClass" });

export interface GooglePrivacyDlpV2LDiversityHistogramBucket {
  /** Upper bound on the sensitive value frequencies of the equivalence classes in this bucket. */
  sensitiveValueFrequencyUpperBound?: string;
  /** Total number of equivalence classes in this bucket. */
  bucketSize?: string;
  /** Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20. */
  bucketValues?: ReadonlyArray<GooglePrivacyDlpV2LDiversityEquivalenceClass>;
  /** Total number of distinct equivalence classes in this bucket. */
  bucketValueCount?: string;
  /** Lower bound on the sensitive value frequencies of the equivalence classes in this bucket. */
  sensitiveValueFrequencyLowerBound?: string;
}

export const GooglePrivacyDlpV2LDiversityHistogramBucket: Schema.Schema<GooglePrivacyDlpV2LDiversityHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitiveValueFrequencyUpperBound: Schema.optional(Schema.String),
    bucketSize: Schema.optional(Schema.String),
    bucketValues: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2LDiversityEquivalenceClass),
    ),
    bucketValueCount: Schema.optional(Schema.String),
    sensitiveValueFrequencyLowerBound: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2LDiversityHistogramBucket" });

export interface GooglePrivacyDlpV2LDiversityResult {
  /** Histogram of l-diversity equivalence class sensitive value frequencies. */
  sensitiveValueFrequencyHistogramBuckets?: ReadonlyArray<GooglePrivacyDlpV2LDiversityHistogramBucket>;
}

export const GooglePrivacyDlpV2LDiversityResult: Schema.Schema<GooglePrivacyDlpV2LDiversityResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitiveValueFrequencyHistogramBuckets: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2LDiversityHistogramBucket),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2LDiversityResult" });

export interface GooglePrivacyDlpV2KAnonymityEquivalenceClass {
  /** Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request. */
  quasiIdsValues?: ReadonlyArray<GooglePrivacyDlpV2Value>;
  /** Size of the equivalence class, for example number of rows with the above set of values. */
  equivalenceClassSize?: string;
}

export const GooglePrivacyDlpV2KAnonymityEquivalenceClass: Schema.Schema<GooglePrivacyDlpV2KAnonymityEquivalenceClass> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quasiIdsValues: Schema.optional(Schema.Array(GooglePrivacyDlpV2Value)),
    equivalenceClassSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KAnonymityEquivalenceClass" });

export interface GooglePrivacyDlpV2KAnonymityHistogramBucket {
  /** Lower bound on the size of the equivalence classes in this bucket. */
  equivalenceClassSizeLowerBound?: string;
  /** Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20. */
  bucketValues?: ReadonlyArray<GooglePrivacyDlpV2KAnonymityEquivalenceClass>;
  /** Total number of equivalence classes in this bucket. */
  bucketSize?: string;
  /** Upper bound on the size of the equivalence classes in this bucket. */
  equivalenceClassSizeUpperBound?: string;
  /** Total number of distinct equivalence classes in this bucket. */
  bucketValueCount?: string;
}

export const GooglePrivacyDlpV2KAnonymityHistogramBucket: Schema.Schema<GooglePrivacyDlpV2KAnonymityHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    equivalenceClassSizeLowerBound: Schema.optional(Schema.String),
    bucketValues: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2KAnonymityEquivalenceClass),
    ),
    bucketSize: Schema.optional(Schema.String),
    equivalenceClassSizeUpperBound: Schema.optional(Schema.String),
    bucketValueCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KAnonymityHistogramBucket" });

export interface GooglePrivacyDlpV2KAnonymityResult {
  /** Histogram of k-anonymity equivalence classes. */
  equivalenceClassHistogramBuckets?: ReadonlyArray<GooglePrivacyDlpV2KAnonymityHistogramBucket>;
}

export const GooglePrivacyDlpV2KAnonymityResult: Schema.Schema<GooglePrivacyDlpV2KAnonymityResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    equivalenceClassHistogramBuckets: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2KAnonymityHistogramBucket),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2KAnonymityResult" });

export interface GooglePrivacyDlpV2KMapEstimationResult {
  /** The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_anonymity: 1, max_anonymity: 1, frequency: 17} {min_anonymity: 2, max_anonymity: 3, frequency: 42} {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10. */
  kMapEstimationHistogram?: ReadonlyArray<GooglePrivacyDlpV2KMapEstimationHistogramBucket>;
}

export const GooglePrivacyDlpV2KMapEstimationResult: Schema.Schema<GooglePrivacyDlpV2KMapEstimationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kMapEstimationHistogram: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2KMapEstimationHistogramBucket),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2KMapEstimationResult" });

export interface GooglePrivacyDlpV2NumericalStatsResult {
  /** List of 99 values that partition the set of field values into 100 equal sized buckets. */
  quantileValues?: ReadonlyArray<GooglePrivacyDlpV2Value>;
  /** Minimum value appearing in the column. */
  minValue?: GooglePrivacyDlpV2Value;
  /** Maximum value appearing in the column. */
  maxValue?: GooglePrivacyDlpV2Value;
}

export const GooglePrivacyDlpV2NumericalStatsResult: Schema.Schema<GooglePrivacyDlpV2NumericalStatsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quantileValues: Schema.optional(Schema.Array(GooglePrivacyDlpV2Value)),
    minValue: Schema.optional(GooglePrivacyDlpV2Value),
    maxValue: Schema.optional(GooglePrivacyDlpV2Value),
  }).annotate({ identifier: "GooglePrivacyDlpV2NumericalStatsResult" });

export interface GooglePrivacyDlpV2CategoricalStatsHistogramBucket {
  /** Lower bound on the value frequency of the values in this bucket. */
  valueFrequencyLowerBound?: string;
  /** Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20. */
  bucketValues?: ReadonlyArray<GooglePrivacyDlpV2ValueFrequency>;
  /** Total number of values in this bucket. */
  bucketSize?: string;
  /** Upper bound on the value frequency of the values in this bucket. */
  valueFrequencyUpperBound?: string;
  /** Total number of distinct values in this bucket. */
  bucketValueCount?: string;
}

export const GooglePrivacyDlpV2CategoricalStatsHistogramBucket: Schema.Schema<GooglePrivacyDlpV2CategoricalStatsHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueFrequencyLowerBound: Schema.optional(Schema.String),
    bucketValues: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ValueFrequency),
    ),
    bucketSize: Schema.optional(Schema.String),
    valueFrequencyUpperBound: Schema.optional(Schema.String),
    bucketValueCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2CategoricalStatsHistogramBucket",
  });

export interface GooglePrivacyDlpV2CategoricalStatsResult {
  /** Histogram of value frequencies in the column. */
  valueFrequencyHistogramBuckets?: ReadonlyArray<GooglePrivacyDlpV2CategoricalStatsHistogramBucket>;
}

export const GooglePrivacyDlpV2CategoricalStatsResult: Schema.Schema<GooglePrivacyDlpV2CategoricalStatsResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valueFrequencyHistogramBuckets: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2CategoricalStatsHistogramBucket),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2CategoricalStatsResult" });

export interface GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues {
  /** The quasi-identifier values. */
  quasiIdsValues?: ReadonlyArray<GooglePrivacyDlpV2Value>;
  /** The estimated probability that a given individual sharing these quasi-identifier values is in the dataset. This value, typically called δ, is the ratio between the number of records in the dataset with these quasi-identifier values, and the total number of individuals (inside *and* outside the dataset) with these quasi-identifier values. For example, if there are 15 individuals in the dataset who share the same quasi-identifier values, and an estimated 100 people in the entire population with these values, then δ is 0.15. */
  estimatedProbability?: number;
}

export const GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues: Schema.Schema<GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quasiIdsValues: Schema.optional(Schema.Array(GooglePrivacyDlpV2Value)),
    estimatedProbability: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues",
  });

export interface GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket {
  /** Always greater than or equal to min_probability. */
  maxProbability?: number;
  /** Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20. */
  bucketValues?: ReadonlyArray<GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues>;
  /** Between 0 and 1. */
  minProbability?: number;
  /** Number of records within these probability bounds. */
  bucketSize?: string;
  /** Total number of distinct quasi-identifier tuple values in this bucket. */
  bucketValueCount?: string;
}

export const GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket: Schema.Schema<GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxProbability: Schema.optional(Schema.Number),
    bucketValues: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues),
    ),
    minProbability: Schema.optional(Schema.Number),
    bucketSize: Schema.optional(Schema.String),
    bucketValueCount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket",
  });

export interface GooglePrivacyDlpV2DeltaPresenceEstimationResult {
  /** The intervals [min_probability, max_probability) do not overlap. If a value doesn't correspond to any such interval, the associated frequency is zero. For example, the following records: {min_probability: 0, max_probability: 0.1, frequency: 17} {min_probability: 0.2, max_probability: 0.3, frequency: 42} {min_probability: 0.3, max_probability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4. */
  deltaPresenceEstimationHistogram?: ReadonlyArray<GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket>;
}

export const GooglePrivacyDlpV2DeltaPresenceEstimationResult: Schema.Schema<GooglePrivacyDlpV2DeltaPresenceEstimationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deltaPresenceEstimationHistogram: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket),
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DeltaPresenceEstimationResult",
  });

export interface GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails {
  /** Input dataset to compute metrics over. */
  requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
  /** The configuration used for this job. */
  requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions;
  /** L-divesity result */
  lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;
  /** Privacy metric to compute. */
  requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;
  /** K-anonymity result */
  kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;
  /** K-map result */
  kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;
  /** Numerical stats result */
  numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;
  /** Categorical stats result */
  categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;
  /** Delta-presence result */
  deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;
}

export const GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails: Schema.Schema<GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedSourceTable: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    requestedOptions: Schema.optional(
      GooglePrivacyDlpV2RequestedRiskAnalysisOptions,
    ),
    lDiversityResult: Schema.optional(GooglePrivacyDlpV2LDiversityResult),
    requestedPrivacyMetric: Schema.optional(GooglePrivacyDlpV2PrivacyMetric),
    kAnonymityResult: Schema.optional(GooglePrivacyDlpV2KAnonymityResult),
    kMapEstimationResult: Schema.optional(
      GooglePrivacyDlpV2KMapEstimationResult,
    ),
    numericalStatsResult: Schema.optional(
      GooglePrivacyDlpV2NumericalStatsResult,
    ),
    categoricalStatsResult: Schema.optional(
      GooglePrivacyDlpV2CategoricalStatsResult,
    ),
    deltaPresenceEstimationResult: Schema.optional(
      GooglePrivacyDlpV2DeltaPresenceEstimationResult,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails" });

export interface GooglePrivacyDlpV2AllOtherDatabaseResources {}

export const GooglePrivacyDlpV2AllOtherDatabaseResources: Schema.Schema<GooglePrivacyDlpV2AllOtherDatabaseResources> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2AllOtherDatabaseResources",
  });

export interface GooglePrivacyDlpV2DatabaseResourceRegex {
  /** Regex to test the database resource's name against. An example of a database resource name is a table's name. Other database resource names like view names could be included in the future. If empty, all database resources match. */
  databaseResourceNameRegex?: string;
  /** For organizations, if unset, will match all projects. Has no effect for configurations created within a project. */
  projectIdRegex?: string;
  /** Regex to test the database name against. If empty, all databases match. */
  databaseRegex?: string;
  /** Regex to test the instance name against. If empty, all instances match. */
  instanceRegex?: string;
}

export const GooglePrivacyDlpV2DatabaseResourceRegex: Schema.Schema<GooglePrivacyDlpV2DatabaseResourceRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseResourceNameRegex: Schema.optional(Schema.String),
    projectIdRegex: Schema.optional(Schema.String),
    databaseRegex: Schema.optional(Schema.String),
    instanceRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DatabaseResourceRegex" });

export interface GooglePrivacyDlpV2DatabaseResourceRegexes {
  /** A group of regular expression patterns to match against one or more database resources. Maximum of 100 entries. The sum of all regular expression's length can't exceed 10 KiB. */
  patterns?: ReadonlyArray<GooglePrivacyDlpV2DatabaseResourceRegex>;
}

export const GooglePrivacyDlpV2DatabaseResourceRegexes: Schema.Schema<GooglePrivacyDlpV2DatabaseResourceRegexes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patterns: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DatabaseResourceRegex),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DatabaseResourceRegexes" });

export interface GooglePrivacyDlpV2DatabaseResourceCollection {
  /** A collection of regular expressions to match a database resource against. */
  includeRegexes?: GooglePrivacyDlpV2DatabaseResourceRegexes;
}

export const GooglePrivacyDlpV2DatabaseResourceCollection: Schema.Schema<GooglePrivacyDlpV2DatabaseResourceCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRegexes: Schema.optional(GooglePrivacyDlpV2DatabaseResourceRegexes),
  }).annotate({ identifier: "GooglePrivacyDlpV2DatabaseResourceCollection" });

export interface GooglePrivacyDlpV2DatabaseResourceReference {
  /** Required. If within a project-level config, then this must match the config's project ID. */
  projectId?: string;
  /** Required. The instance where this resource is located. For example: Cloud SQL instance ID. */
  instance?: string;
  /** Required. Name of a database resource, for example, a table within the database. */
  databaseResource?: string;
  /** Required. Name of a database within the instance. */
  database?: string;
}

export const GooglePrivacyDlpV2DatabaseResourceReference: Schema.Schema<GooglePrivacyDlpV2DatabaseResourceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    instance: Schema.optional(Schema.String),
    databaseResource: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DatabaseResourceReference" });

export interface GooglePrivacyDlpV2DiscoveryCloudSqlFilter {
  /** Catch-all. This should always be the last target in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically. */
  others?: GooglePrivacyDlpV2AllOtherDatabaseResources;
  /** A specific set of database resources for this filter to apply to. */
  collection?: GooglePrivacyDlpV2DatabaseResourceCollection;
  /** The database resource to scan. Targets including this can only include one target (the target with this database resource reference). */
  databaseResourceReference?: GooglePrivacyDlpV2DatabaseResourceReference;
}

export const GooglePrivacyDlpV2DiscoveryCloudSqlFilter: Schema.Schema<GooglePrivacyDlpV2DiscoveryCloudSqlFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    others: Schema.optional(GooglePrivacyDlpV2AllOtherDatabaseResources),
    collection: Schema.optional(GooglePrivacyDlpV2DatabaseResourceCollection),
    databaseResourceReference: Schema.optional(
      GooglePrivacyDlpV2DatabaseResourceReference,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryCloudSqlFilter" });

export interface GooglePrivacyDlpV2DiscoveryCloudSqlConditions {
  /** Optional. Database engines that should be profiled. Optional. Defaults to ALL_SUPPORTED_DATABASE_ENGINES if unspecified. */
  databaseEngines?: ReadonlyArray<
    | "DATABASE_ENGINE_UNSPECIFIED"
    | "ALL_SUPPORTED_DATABASE_ENGINES"
    | "MYSQL"
    | "POSTGRES"
    | (string & {})
  >;
  /** Data profiles will only be generated for the database resource types specified in this field. If not specified, defaults to [DATABASE_RESOURCE_TYPE_ALL_SUPPORTED_TYPES]. */
  types?: ReadonlyArray<
    | "DATABASE_RESOURCE_TYPE_UNSPECIFIED"
    | "DATABASE_RESOURCE_TYPE_ALL_SUPPORTED_TYPES"
    | "DATABASE_RESOURCE_TYPE_TABLE"
    | (string & {})
  >;
}

export const GooglePrivacyDlpV2DiscoveryCloudSqlConditions: Schema.Schema<GooglePrivacyDlpV2DiscoveryCloudSqlConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseEngines: Schema.optional(Schema.Array(Schema.String)),
    types: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryCloudSqlConditions" });

export interface GooglePrivacyDlpV2SchemaModifiedCadence {
  /** The types of schema modifications to consider. Defaults to NEW_COLUMNS. */
  types?: ReadonlyArray<
    | "SQL_SCHEMA_MODIFICATION_UNSPECIFIED"
    | "NEW_COLUMNS"
    | "REMOVED_COLUMNS"
    | (string & {})
  >;
  /** Frequency to regenerate data profiles when the schema is modified. Defaults to monthly. */
  frequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
}

export const GooglePrivacyDlpV2SchemaModifiedCadence: Schema.Schema<GooglePrivacyDlpV2SchemaModifiedCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    types: Schema.optional(Schema.Array(Schema.String)),
    frequency: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2SchemaModifiedCadence" });

export interface GooglePrivacyDlpV2DiscoveryCloudSqlGenerationCadence {
  /** Governs when to update data profiles when the inspection rules defined by the `InspectTemplate` change. If not set, changing the template will not cause a data profile to update. */
  inspectTemplateModifiedCadence?: GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence;
  /** When to reprofile if the schema has changed. */
  schemaModifiedCadence?: GooglePrivacyDlpV2SchemaModifiedCadence;
  /** Data changes (non-schema changes) in Cloud SQL tables can't trigger reprofiling. If you set this field, profiles are refreshed at this frequency regardless of whether the underlying tables have changed. Defaults to never. */
  refreshFrequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
}

export const GooglePrivacyDlpV2DiscoveryCloudSqlGenerationCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryCloudSqlGenerationCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectTemplateModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence,
    ),
    schemaModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2SchemaModifiedCadence,
    ),
    refreshFrequency: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryCloudSqlGenerationCadence",
  });

export interface GooglePrivacyDlpV2CloudSqlDiscoveryTarget {
  /** Required. The tables the discovery cadence applies to. The first target with a matching filter will be the one to apply to a table. */
  filter?: GooglePrivacyDlpV2DiscoveryCloudSqlFilter;
  /** In addition to matching the filter, these conditions must be true before a profile is generated. */
  conditions?: GooglePrivacyDlpV2DiscoveryCloudSqlConditions;
  /** How often and when to update profiles. New tables that match both the filter and conditions are scanned as quickly as possible depending on system capacity. */
  generationCadence?: GooglePrivacyDlpV2DiscoveryCloudSqlGenerationCadence;
  /** Disable profiling for database resources that match this filter. */
  disabled?: GooglePrivacyDlpV2Disabled;
}

export const GooglePrivacyDlpV2CloudSqlDiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2CloudSqlDiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(GooglePrivacyDlpV2DiscoveryCloudSqlFilter),
    conditions: Schema.optional(GooglePrivacyDlpV2DiscoveryCloudSqlConditions),
    generationCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryCloudSqlGenerationCadence,
    ),
    disabled: Schema.optional(GooglePrivacyDlpV2Disabled),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudSqlDiscoveryTarget" });

export interface GooglePrivacyDlpV2DeidentifyDataSourceStats {
  /** Number of successfully applied transformations. */
  transformationCount?: string;
  /** Number of errors encountered while trying to apply transformations. */
  transformationErrorCount?: string;
  /** Total size in bytes that were transformed in some way. */
  transformedBytes?: string;
}

export const GooglePrivacyDlpV2DeidentifyDataSourceStats: Schema.Schema<GooglePrivacyDlpV2DeidentifyDataSourceStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformationCount: Schema.optional(Schema.String),
    transformationErrorCount: Schema.optional(Schema.String),
    transformedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DeidentifyDataSourceStats" });

export interface GooglePrivacyDlpV2RequestedDeidentifyOptions {
  /** Snapshot of the state of the `DeidentifyTemplate` from the Deidentify action at the time this job was run. */
  snapshotDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
  /** Snapshot of the state of the image transformation `DeidentifyTemplate` from the `Deidentify` action at the time this job was run. */
  snapshotImageRedactTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
  /** Snapshot of the state of the structured `DeidentifyTemplate` from the `Deidentify` action at the time this job was run. */
  snapshotStructuredDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
}

export const GooglePrivacyDlpV2RequestedDeidentifyOptions: Schema.Schema<GooglePrivacyDlpV2RequestedDeidentifyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotDeidentifyTemplate: Schema.optional(
      GooglePrivacyDlpV2DeidentifyTemplate,
    ),
    snapshotImageRedactTemplate: Schema.optional(
      GooglePrivacyDlpV2DeidentifyTemplate,
    ),
    snapshotStructuredDeidentifyTemplate: Schema.optional(
      GooglePrivacyDlpV2DeidentifyTemplate,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2RequestedDeidentifyOptions" });

export interface GooglePrivacyDlpV2DeidentifyDataSourceDetails {
  /** Stats about the de-identification operation. */
  deidentifyStats?: GooglePrivacyDlpV2DeidentifyDataSourceStats;
  /** De-identification config used for the request. */
  requestedOptions?: GooglePrivacyDlpV2RequestedDeidentifyOptions;
}

export const GooglePrivacyDlpV2DeidentifyDataSourceDetails: Schema.Schema<GooglePrivacyDlpV2DeidentifyDataSourceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deidentifyStats: Schema.optional(
      GooglePrivacyDlpV2DeidentifyDataSourceStats,
    ),
    requestedOptions: Schema.optional(
      GooglePrivacyDlpV2RequestedDeidentifyOptions,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DeidentifyDataSourceDetails" });

export interface GooglePrivacyDlpV2UpdateJobTriggerRequest {
  /** New JobTrigger value. */
  jobTrigger?: GooglePrivacyDlpV2JobTrigger;
  /** Mask to control which fields get updated. */
  updateMask?: string;
}

export const GooglePrivacyDlpV2UpdateJobTriggerRequest: Schema.Schema<GooglePrivacyDlpV2UpdateJobTriggerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobTrigger: Schema.optional(GooglePrivacyDlpV2JobTrigger),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2UpdateJobTriggerRequest" });

export interface GooglePrivacyDlpV2HybridFindingDetails {
  /** Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position. */
  rowOffset?: string;
  /** If the container is a table, additional information to make findings meaningful such as the columns that are primary keys. If not known ahead of time, can also be set within each inspect hybrid call and the two will be merged. Note that identifying_fields will only be stored to BigQuery, and only if the BigQuery action has been included. */
  tableOptions?: GooglePrivacyDlpV2TableOptions;
  /** Details about the container where the content being inspected is from. */
  containerDetails?: GooglePrivacyDlpV2Container;
  /** Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding. */
  fileOffset?: string;
  /** Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with `Finding`'s produced by hybrid inspection. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
  labels?: Record<string, string>;
}

export const GooglePrivacyDlpV2HybridFindingDetails: Schema.Schema<GooglePrivacyDlpV2HybridFindingDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowOffset: Schema.optional(Schema.String),
    tableOptions: Schema.optional(GooglePrivacyDlpV2TableOptions),
    containerDetails: Schema.optional(GooglePrivacyDlpV2Container),
    fileOffset: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2HybridFindingDetails" });

export interface GooglePrivacyDlpV2HybridContentItem {
  /** The item to inspect. */
  item?: GooglePrivacyDlpV2ContentItem;
  /** Supplementary information that will be added to each finding. */
  findingDetails?: GooglePrivacyDlpV2HybridFindingDetails;
}

export const GooglePrivacyDlpV2HybridContentItem: Schema.Schema<GooglePrivacyDlpV2HybridContentItem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(GooglePrivacyDlpV2ContentItem),
    findingDetails: Schema.optional(GooglePrivacyDlpV2HybridFindingDetails),
  }).annotate({ identifier: "GooglePrivacyDlpV2HybridContentItem" });

export interface GooglePrivacyDlpV2HybridInspectDlpJobRequest {
  /** The item to inspect. */
  hybridItem?: GooglePrivacyDlpV2HybridContentItem;
}

export const GooglePrivacyDlpV2HybridInspectDlpJobRequest: Schema.Schema<GooglePrivacyDlpV2HybridInspectDlpJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hybridItem: Schema.optional(GooglePrivacyDlpV2HybridContentItem),
  }).annotate({ identifier: "GooglePrivacyDlpV2HybridInspectDlpJobRequest" });

export interface GooglePrivacyDlpV2LocationSupport {
  /** Specific locations where the feature may be used. Examples: us-central1, us, asia, global If scope is ANY_LOCATION, no regions will be listed. */
  locations?: ReadonlyArray<string>;
  /** The current scope for location on this feature. This may expand over time. */
  regionalizationScope?:
    | "REGIONALIZATION_SCOPE_UNSPECIFIED"
    | "REGIONAL"
    | "ANY_LOCATION"
    | (string & {});
}

export const GooglePrivacyDlpV2LocationSupport: Schema.Schema<GooglePrivacyDlpV2LocationSupport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Schema.String)),
    regionalizationScope: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2LocationSupport" });

export interface GooglePrivacyDlpV2RequestedOptions {
  /** If run with an InspectTemplate, a snapshot of its state at the time of this run. */
  snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
  /** Inspect config. */
  jobConfig?: GooglePrivacyDlpV2InspectJobConfig;
}

export const GooglePrivacyDlpV2RequestedOptions: Schema.Schema<GooglePrivacyDlpV2RequestedOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotInspectTemplate: Schema.optional(GooglePrivacyDlpV2InspectTemplate),
    jobConfig: Schema.optional(GooglePrivacyDlpV2InspectJobConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2RequestedOptions" });

export interface GooglePrivacyDlpV2InspectDataSourceDetails {
  /** The configuration used for this job. */
  requestedOptions?: GooglePrivacyDlpV2RequestedOptions;
  /** A summary of the outcome of this inspection job. */
  result?: GooglePrivacyDlpV2Result;
}

export const GooglePrivacyDlpV2InspectDataSourceDetails: Schema.Schema<GooglePrivacyDlpV2InspectDataSourceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedOptions: Schema.optional(GooglePrivacyDlpV2RequestedOptions),
    result: Schema.optional(GooglePrivacyDlpV2Result),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectDataSourceDetails" });

export interface GooglePrivacyDlpV2TableReference {
  /** Dataset ID of the table. */
  datasetId?: string;
  /** Name of the table. */
  tableId?: string;
  /** The Google Cloud project ID of the project containing the table. If omitted, the project ID is inferred from the parent project. This field is required if the parent resource is an organization. */
  projectId?: string;
}

export const GooglePrivacyDlpV2TableReference: Schema.Schema<GooglePrivacyDlpV2TableReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetId: Schema.optional(Schema.String),
    tableId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TableReference" });

export interface GooglePrivacyDlpV2AllOtherBigQueryTables {}

export const GooglePrivacyDlpV2AllOtherBigQueryTables: Schema.Schema<GooglePrivacyDlpV2AllOtherBigQueryTables> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2AllOtherBigQueryTables",
  });

export interface GooglePrivacyDlpV2BigQueryRegex {
  /** If unset, this property matches all datasets. */
  datasetIdRegex?: string;
  /** If unset, this property matches all tables. */
  tableIdRegex?: string;
  /** For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project. */
  projectIdRegex?: string;
}

export const GooglePrivacyDlpV2BigQueryRegex: Schema.Schema<GooglePrivacyDlpV2BigQueryRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetIdRegex: Schema.optional(Schema.String),
    tableIdRegex: Schema.optional(Schema.String),
    projectIdRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryRegex" });

export interface GooglePrivacyDlpV2BigQueryRegexes {
  /** A single BigQuery regular expression pattern to match against one or more tables, datasets, or projects that contain BigQuery tables. */
  patterns?: ReadonlyArray<GooglePrivacyDlpV2BigQueryRegex>;
}

export const GooglePrivacyDlpV2BigQueryRegexes: Schema.Schema<GooglePrivacyDlpV2BigQueryRegexes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patterns: Schema.optional(Schema.Array(GooglePrivacyDlpV2BigQueryRegex)),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryRegexes" });

export interface GooglePrivacyDlpV2BigQueryTableCollection {
  /** A collection of regular expressions to match a BigQuery table against. */
  includeRegexes?: GooglePrivacyDlpV2BigQueryRegexes;
}

export const GooglePrivacyDlpV2BigQueryTableCollection: Schema.Schema<GooglePrivacyDlpV2BigQueryTableCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRegexes: Schema.optional(GooglePrivacyDlpV2BigQueryRegexes),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryTableCollection" });

export interface GooglePrivacyDlpV2DiscoveryBigQueryFilter {
  /** The table to scan. Discovery configurations including this can only include one DiscoveryTarget (the DiscoveryTarget with this TableReference). */
  tableReference?: GooglePrivacyDlpV2TableReference;
  /** Catch-all. This should always be the last filter in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically. */
  otherTables?: GooglePrivacyDlpV2AllOtherBigQueryTables;
  /** A specific set of tables for this filter to apply to. A table collection must be specified in only one filter per config. If a table id or dataset is empty, Cloud DLP assumes all tables in that collection must be profiled. Must specify a project ID. */
  tables?: GooglePrivacyDlpV2BigQueryTableCollection;
}

export const GooglePrivacyDlpV2DiscoveryBigQueryFilter: Schema.Schema<GooglePrivacyDlpV2DiscoveryBigQueryFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableReference: Schema.optional(GooglePrivacyDlpV2TableReference),
    otherTables: Schema.optional(GooglePrivacyDlpV2AllOtherBigQueryTables),
    tables: Schema.optional(GooglePrivacyDlpV2BigQueryTableCollection),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryBigQueryFilter" });

export interface GooglePrivacyDlpV2CloudStorageFileSet {
  /** The url, in the format `gs:///`. Trailing wildcard in the path is allowed. */
  url?: string;
}

export const GooglePrivacyDlpV2CloudStorageFileSet: Schema.Schema<GooglePrivacyDlpV2CloudStorageFileSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudStorageFileSet" });

export interface GooglePrivacyDlpV2BigQueryField {
  /** Designated field in the BigQuery table. */
  field?: GooglePrivacyDlpV2FieldId;
  /** Source table of the field. */
  table?: GooglePrivacyDlpV2BigQueryTable;
}

export const GooglePrivacyDlpV2BigQueryField: Schema.Schema<GooglePrivacyDlpV2BigQueryField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    table: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryField" });

export interface GooglePrivacyDlpV2LargeCustomDictionaryConfig {
  /** Location to store dictionary artifacts in Cloud Storage. These files will only be accessible by project owners and the DLP API. If any of these artifacts are modified, the dictionary is considered invalid and can no longer be used. */
  outputPath?: GooglePrivacyDlpV2CloudStoragePath;
  /** Set of files containing newline-delimited lists of dictionary phrases. */
  cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet;
  /** Field in a BigQuery table where each cell represents a dictionary phrase. */
  bigQueryField?: GooglePrivacyDlpV2BigQueryField;
}

export const GooglePrivacyDlpV2LargeCustomDictionaryConfig: Schema.Schema<GooglePrivacyDlpV2LargeCustomDictionaryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputPath: Schema.optional(GooglePrivacyDlpV2CloudStoragePath),
    cloudStorageFileSet: Schema.optional(GooglePrivacyDlpV2CloudStorageFileSet),
    bigQueryField: Schema.optional(GooglePrivacyDlpV2BigQueryField),
  }).annotate({ identifier: "GooglePrivacyDlpV2LargeCustomDictionaryConfig" });

export interface GooglePrivacyDlpV2StoredInfoTypeConfig {
  /** Display name of the StoredInfoType (max 256 characters). */
  displayName?: string;
  /** Description of the StoredInfoType (max 256 characters). */
  description?: string;
  /** StoredInfoType where findings are defined by a dictionary of phrases. */
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;
  /** Store dictionary-based CustomInfoType. */
  dictionary?: GooglePrivacyDlpV2Dictionary;
  /** Store regular expression-based StoredInfoType. */
  regex?: GooglePrivacyDlpV2Regex;
}

export const GooglePrivacyDlpV2StoredInfoTypeConfig: Schema.Schema<GooglePrivacyDlpV2StoredInfoTypeConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    largeCustomDictionary: Schema.optional(
      GooglePrivacyDlpV2LargeCustomDictionaryConfig,
    ),
    dictionary: Schema.optional(GooglePrivacyDlpV2Dictionary),
    regex: Schema.optional(GooglePrivacyDlpV2Regex),
  }).annotate({ identifier: "GooglePrivacyDlpV2StoredInfoTypeConfig" });

export interface GooglePrivacyDlpV2InfoTypeSummary {
  /** The infoType. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Not populated for predicted infotypes. */
  estimatedPrevalence?: number;
}

export const GooglePrivacyDlpV2InfoTypeSummary: Schema.Schema<GooglePrivacyDlpV2InfoTypeSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    estimatedPrevalence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeSummary" });

export interface GooglePrivacyDlpV2DataRiskLevel {
  /** The score applied to the resource. */
  score?:
    | "RISK_SCORE_UNSPECIFIED"
    | "RISK_LOW"
    | "RISK_UNKNOWN"
    | "RISK_MODERATE"
    | "RISK_HIGH"
    | (string & {});
}

export const GooglePrivacyDlpV2DataRiskLevel: Schema.Schema<GooglePrivacyDlpV2DataRiskLevel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataRiskLevel" });

export interface GooglePrivacyDlpV2ProfileStatus {
  /** Profiling status code and optional message. The `status.code` value is 0 (default value) for OK. */
  status?: GoogleRpcStatus;
  /** Time when the profile generation status was updated */
  timestamp?: string;
}

export const GooglePrivacyDlpV2ProfileStatus: Schema.Schema<GooglePrivacyDlpV2ProfileStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(GoogleRpcStatus),
    timestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ProfileStatus" });

export interface GooglePrivacyDlpV2OtherInfoTypeSummary {
  /** The other infoType. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Whether this infoType was excluded from sensitivity and risk analysis due to factors such as low prevalence (subject to change). */
  excludedFromAnalysis?: boolean;
  /** Approximate percentage of non-null rows that contained data detected by this infotype. */
  estimatedPrevalence?: number;
}

export const GooglePrivacyDlpV2OtherInfoTypeSummary: Schema.Schema<GooglePrivacyDlpV2OtherInfoTypeSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    excludedFromAnalysis: Schema.optional(Schema.Boolean),
    estimatedPrevalence: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2OtherInfoTypeSummary" });

export interface GooglePrivacyDlpV2ColumnDataProfile {
  /** The BigQuery dataset ID, if the resource profiled is a BigQuery table. */
  datasetId?: string;
  /** The last time the profile was generated. */
  profileLastGenerated?: string;
  /** The Google Cloud project ID that owns the profiled resource. */
  datasetProjectId?: string;
  /** Indicates if a policy tag has been applied to the column. */
  policyState?:
    | "COLUMN_POLICY_STATE_UNSPECIFIED"
    | "COLUMN_POLICY_TAGGED"
    | (string & {});
  /** The resource name of the table data profile. */
  tableDataProfile?: string;
  /** If it's been determined this column can be identified as a single type, this will be set. Otherwise the column either has unidentifiable content or mixed types. */
  columnInfoType?: GooglePrivacyDlpV2InfoTypeSummary;
  /** The name of the profile. */
  name?: string;
  /** The name of the column. */
  column?: string;
  /** The data risk level for this column. */
  dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;
  /** Approximate percentage of entries being null in the column. */
  estimatedNullPercentage?:
    | "NULL_PERCENTAGE_LEVEL_UNSPECIFIED"
    | "NULL_PERCENTAGE_VERY_LOW"
    | "NULL_PERCENTAGE_LOW"
    | "NULL_PERCENTAGE_MEDIUM"
    | "NULL_PERCENTAGE_HIGH"
    | (string & {});
  /** Approximate uniqueness of the column. */
  estimatedUniquenessScore?:
    | "UNIQUENESS_SCORE_LEVEL_UNSPECIFIED"
    | "UNIQUENESS_SCORE_LOW"
    | "UNIQUENESS_SCORE_MEDIUM"
    | "UNIQUENESS_SCORE_HIGH"
    | (string & {});
  /** The sensitivity of this column. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** The likelihood that this column contains free-form text. A value close to 1 may indicate the column is likely to contain free-form or natural language text. Range in 0-1. */
  freeTextScore?: number;
  /** The resource name of the resource this column is within. */
  tableFullResource?: string;
  /** The table ID. */
  tableId?: string;
  /** Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. */
  profileStatus?: GooglePrivacyDlpV2ProfileStatus;
  /** State of a profile. */
  state?: "STATE_UNSPECIFIED" | "RUNNING" | "DONE" | (string & {});
  /** Other types found within this column. List will be unordered. */
  otherMatches?: ReadonlyArray<GooglePrivacyDlpV2OtherInfoTypeSummary>;
  /** If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported BigQuery locations. */
  datasetLocation?: string;
  /** The data type of a given column. */
  columnType?:
    | "COLUMN_DATA_TYPE_UNSPECIFIED"
    | "TYPE_INT64"
    | "TYPE_BOOL"
    | "TYPE_FLOAT64"
    | "TYPE_STRING"
    | "TYPE_BYTES"
    | "TYPE_TIMESTAMP"
    | "TYPE_DATE"
    | "TYPE_TIME"
    | "TYPE_DATETIME"
    | "TYPE_GEOGRAPHY"
    | "TYPE_NUMERIC"
    | "TYPE_RECORD"
    | "TYPE_BIGNUMERIC"
    | "TYPE_JSON"
    | "TYPE_INTERVAL"
    | "TYPE_RANGE_DATE"
    | "TYPE_RANGE_DATETIME"
    | "TYPE_RANGE_TIMESTAMP"
    | (string & {});
}

export const GooglePrivacyDlpV2ColumnDataProfile: Schema.Schema<GooglePrivacyDlpV2ColumnDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetId: Schema.optional(Schema.String),
    profileLastGenerated: Schema.optional(Schema.String),
    datasetProjectId: Schema.optional(Schema.String),
    policyState: Schema.optional(Schema.String),
    tableDataProfile: Schema.optional(Schema.String),
    columnInfoType: Schema.optional(GooglePrivacyDlpV2InfoTypeSummary),
    name: Schema.optional(Schema.String),
    column: Schema.optional(Schema.String),
    dataRiskLevel: Schema.optional(GooglePrivacyDlpV2DataRiskLevel),
    estimatedNullPercentage: Schema.optional(Schema.String),
    estimatedUniquenessScore: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    freeTextScore: Schema.optional(Schema.Number),
    tableFullResource: Schema.optional(Schema.String),
    tableId: Schema.optional(Schema.String),
    profileStatus: Schema.optional(GooglePrivacyDlpV2ProfileStatus),
    state: Schema.optional(Schema.String),
    otherMatches: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2OtherInfoTypeSummary),
    ),
    datasetLocation: Schema.optional(Schema.String),
    columnType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ColumnDataProfile" });

export interface GooglePrivacyDlpV2CreateStoredInfoTypeRequest {
  /** The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
  storedInfoTypeId?: string;
  /** Required. Configuration of the storedInfoType to create. */
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
  /** Deprecated. This field has no effect. */
  locationId?: string;
}

export const GooglePrivacyDlpV2CreateStoredInfoTypeRequest: Schema.Schema<GooglePrivacyDlpV2CreateStoredInfoTypeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storedInfoTypeId: Schema.optional(Schema.String),
    config: Schema.optional(GooglePrivacyDlpV2StoredInfoTypeConfig),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CreateStoredInfoTypeRequest" });

export interface GooglePrivacyDlpV2DiscoveryStartingLocation {
  /** The ID of an organization to scan. */
  organizationId?: string;
  /** The ID of the folder within an organization to be scanned. */
  folderId?: string;
}

export const GooglePrivacyDlpV2DiscoveryStartingLocation: Schema.Schema<GooglePrivacyDlpV2DiscoveryStartingLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.optional(Schema.String),
    folderId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryStartingLocation" });

export interface GooglePrivacyDlpV2ListColumnDataProfilesResponse {
  /** The next page token. */
  nextPageToken?: string;
  /** List of data profiles. */
  columnDataProfiles?: ReadonlyArray<GooglePrivacyDlpV2ColumnDataProfile>;
}

export const GooglePrivacyDlpV2ListColumnDataProfilesResponse: Schema.Schema<GooglePrivacyDlpV2ListColumnDataProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    columnDataProfiles: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ColumnDataProfile),
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2ListColumnDataProfilesResponse",
  });

export interface GooglePrivacyDlpV2SummaryResult {
  /** A place for warnings or errors to show up if a transformation didn't work as expected. */
  details?: string;
  /** Number of transformations counted by this result. */
  count?: string;
  /** Outcome of the transformation. */
  code?:
    | "TRANSFORMATION_RESULT_CODE_UNSPECIFIED"
    | "SUCCESS"
    | "ERROR"
    | (string & {});
}

export const GooglePrivacyDlpV2SummaryResult: Schema.Schema<GooglePrivacyDlpV2SummaryResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2SummaryResult" });

export interface GooglePrivacyDlpV2TransformationSummary {
  /** The specific suppression option these stats apply to. */
  recordSuppress?: GooglePrivacyDlpV2RecordSuppression;
  /** The specific transformation these stats apply to. */
  transformation?: GooglePrivacyDlpV2PrimitiveTransformation;
  /** The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied. */
  fieldTransformations?: ReadonlyArray<GooglePrivacyDlpV2FieldTransformation>;
  /** Set if the transformation was limited to a specific InfoType. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Set if the transformation was limited to a specific FieldId. */
  field?: GooglePrivacyDlpV2FieldId;
  /** Collection of all transformations that took place or had an error. */
  results?: ReadonlyArray<GooglePrivacyDlpV2SummaryResult>;
  /** Total size in bytes that were transformed in some way. */
  transformedBytes?: string;
}

export const GooglePrivacyDlpV2TransformationSummary: Schema.Schema<GooglePrivacyDlpV2TransformationSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordSuppress: Schema.optional(GooglePrivacyDlpV2RecordSuppression),
    transformation: Schema.optional(GooglePrivacyDlpV2PrimitiveTransformation),
    fieldTransformations: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FieldTransformation),
    ),
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
    results: Schema.optional(Schema.Array(GooglePrivacyDlpV2SummaryResult)),
    transformedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationSummary" });

export interface GooglePrivacyDlpV2TransformationOverview {
  /** Transformations applied to the dataset. */
  transformationSummaries?: ReadonlyArray<GooglePrivacyDlpV2TransformationSummary>;
  /** Total size in bytes that were transformed in some way. */
  transformedBytes?: string;
}

export const GooglePrivacyDlpV2TransformationOverview: Schema.Schema<GooglePrivacyDlpV2TransformationOverview> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformationSummaries: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2TransformationSummary),
    ),
    transformedBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationOverview" });

export interface GooglePrivacyDlpV2Domain {
  /** The collection of signals that influenced selection of the category. */
  signals?: ReadonlyArray<
    | "SIGNAL_UNSPECIFIED"
    | "MODEL"
    | "TEXT_EMBEDDING"
    | "EMBEDDING"
    | "VERTEX_PLUGIN"
    | "VECTOR_PLUGIN"
    | "SOURCE_CODE"
    | "SERVICE"
    | (string & {})
  >;
  /** A domain category that this profile is related to. */
  category?: "CATEGORY_UNSPECIFIED" | "AI" | "CODE" | (string & {});
}

export const GooglePrivacyDlpV2Domain: Schema.Schema<GooglePrivacyDlpV2Domain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signals: Schema.optional(Schema.Array(Schema.String)),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Domain" });

export interface GooglePrivacyDlpV2RelatedResource {
  /** The full resource name of the related resource. */
  fullResource?: string;
}

export const GooglePrivacyDlpV2RelatedResource: Schema.Schema<GooglePrivacyDlpV2RelatedResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fullResource: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2RelatedResource" });

export interface GooglePrivacyDlpV2OrgConfig {
  /** The data to scan: folder, org, or project */
  location?: GooglePrivacyDlpV2DiscoveryStartingLocation;
  /** The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the DLP API must be enabled. */
  projectId?: string;
}

export const GooglePrivacyDlpV2OrgConfig: Schema.Schema<GooglePrivacyDlpV2OrgConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(GooglePrivacyDlpV2DiscoveryStartingLocation),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2OrgConfig" });

export interface GooglePrivacyDlpV2DiscoveryCloudStorageConditions {
  /** Required. Only objects with the specified attributes will be scanned. If an object has one of the specified attributes but is inside an excluded bucket, it will not be scanned. Defaults to [ALL_SUPPORTED_OBJECTS]. A profile will be created even if no objects match the included_object_attributes. */
  includedObjectAttributes?: ReadonlyArray<
    | "CLOUD_STORAGE_OBJECT_ATTRIBUTE_UNSPECIFIED"
    | "ALL_SUPPORTED_OBJECTS"
    | "STANDARD"
    | "NEARLINE"
    | "COLDLINE"
    | "ARCHIVE"
    | "REGIONAL"
    | "MULTI_REGIONAL"
    | "DURABLE_REDUCED_AVAILABILITY"
    | (string & {})
  >;
  /** Required. Only objects with the specified attributes will be scanned. Defaults to [ALL_SUPPORTED_BUCKETS] if unset. */
  includedBucketAttributes?: ReadonlyArray<
    | "CLOUD_STORAGE_BUCKET_ATTRIBUTE_UNSPECIFIED"
    | "ALL_SUPPORTED_BUCKETS"
    | "AUTOCLASS_DISABLED"
    | "AUTOCLASS_ENABLED"
    | (string & {})
  >;
}

export const GooglePrivacyDlpV2DiscoveryCloudStorageConditions: Schema.Schema<GooglePrivacyDlpV2DiscoveryCloudStorageConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includedObjectAttributes: Schema.optional(Schema.Array(Schema.String)),
    includedBucketAttributes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryCloudStorageConditions",
  });

export interface GooglePrivacyDlpV2DiscoveryFileStoreConditions {
  /** Optional. File store must have been created after this date. Used to avoid backfilling. */
  createdAfter?: string;
  /** Optional. Minimum age a file store must have. If set, the value must be 1 hour or greater. */
  minAge?: string;
  /** Optional. Cloud Storage conditions. */
  cloudStorageConditions?: GooglePrivacyDlpV2DiscoveryCloudStorageConditions;
}

export const GooglePrivacyDlpV2DiscoveryFileStoreConditions: Schema.Schema<GooglePrivacyDlpV2DiscoveryFileStoreConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAfter: Schema.optional(Schema.String),
    minAge: Schema.optional(Schema.String),
    cloudStorageConditions: Schema.optional(
      GooglePrivacyDlpV2DiscoveryCloudStorageConditions,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryFileStoreConditions" });

export interface GooglePrivacyDlpV2CloudStorageRegex {
  /** Optional. For organizations, if unset, will match all projects. */
  projectIdRegex?: string;
  /** Optional. Regex to test the bucket name against. If empty, all buckets match. Example: "marketing2021" or "(marketing)\d{4}" will both match the bucket gs://marketing2021 */
  bucketNameRegex?: string;
}

export const GooglePrivacyDlpV2CloudStorageRegex: Schema.Schema<GooglePrivacyDlpV2CloudStorageRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectIdRegex: Schema.optional(Schema.String),
    bucketNameRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudStorageRegex" });

export interface GooglePrivacyDlpV2FileStoreRegex {
  /** Optional. Regex for Cloud Storage. */
  cloudStorageRegex?: GooglePrivacyDlpV2CloudStorageRegex;
}

export const GooglePrivacyDlpV2FileStoreRegex: Schema.Schema<GooglePrivacyDlpV2FileStoreRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudStorageRegex: Schema.optional(GooglePrivacyDlpV2CloudStorageRegex),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileStoreRegex" });

export interface GooglePrivacyDlpV2FileStoreRegexes {
  /** Required. The group of regular expression patterns to match against one or more file stores. Maximum of 100 entries. The sum of all regular expression's length can't exceed 10 KiB. */
  patterns?: ReadonlyArray<GooglePrivacyDlpV2FileStoreRegex>;
}

export const GooglePrivacyDlpV2FileStoreRegexes: Schema.Schema<GooglePrivacyDlpV2FileStoreRegexes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patterns: Schema.optional(Schema.Array(GooglePrivacyDlpV2FileStoreRegex)),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileStoreRegexes" });

export interface GooglePrivacyDlpV2FileStoreCollection {
  /** Optional. A collection of regular expressions to match a file store against. */
  includeRegexes?: GooglePrivacyDlpV2FileStoreRegexes;
  /** Optional. To be included in the collection, a resource must meet all of the following requirements: - If tag filters are provided, match all provided tag filters. - If one or more patterns are specified, match at least one pattern. For a resource to match the tag filters, the resource must have all of the provided tags attached. Tags refer to Resource Manager tags bound to the resource or its ancestors. For more information, see [Manage schedules](https://cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage#manage-schedules). */
  includeTags?: GooglePrivacyDlpV2TagFilters;
}

export const GooglePrivacyDlpV2FileStoreCollection: Schema.Schema<GooglePrivacyDlpV2FileStoreCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeRegexes: Schema.optional(GooglePrivacyDlpV2FileStoreRegexes),
    includeTags: Schema.optional(GooglePrivacyDlpV2TagFilters),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileStoreCollection" });

export interface GooglePrivacyDlpV2CloudStorageResourceReference {
  /** Required. If within a project-level config, then this must match the config's project id. */
  projectId?: string;
  /** Required. The bucket to scan. */
  bucketName?: string;
}

export const GooglePrivacyDlpV2CloudStorageResourceReference: Schema.Schema<GooglePrivacyDlpV2CloudStorageResourceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    bucketName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2CloudStorageResourceReference",
  });

export interface GooglePrivacyDlpV2DiscoveryCloudStorageFilter {
  /** Optional. A specific set of buckets for this filter to apply to. */
  collection?: GooglePrivacyDlpV2FileStoreCollection;
  /** Optional. The bucket to scan. Targets including this can only include one target (the target with this bucket). This enables profiling the contents of a single bucket, while the other options allow for easy profiling of many bucets within a project or an organization. */
  cloudStorageResourceReference?: GooglePrivacyDlpV2CloudStorageResourceReference;
  /** Optional. Catch-all. This should always be the last target in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically. */
  others?: GooglePrivacyDlpV2AllOtherResources;
}

export const GooglePrivacyDlpV2DiscoveryCloudStorageFilter: Schema.Schema<GooglePrivacyDlpV2DiscoveryCloudStorageFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collection: Schema.optional(GooglePrivacyDlpV2FileStoreCollection),
    cloudStorageResourceReference: Schema.optional(
      GooglePrivacyDlpV2CloudStorageResourceReference,
    ),
    others: Schema.optional(GooglePrivacyDlpV2AllOtherResources),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryCloudStorageFilter" });

export interface GooglePrivacyDlpV2CloudStorageDiscoveryTarget {
  /** Optional. In addition to matching the filter, these conditions must be true before a profile is generated. */
  conditions?: GooglePrivacyDlpV2DiscoveryFileStoreConditions;
  /** Optional. How often and when to update profiles. New buckets that match both the filter and conditions are scanned as quickly as possible depending on system capacity. */
  generationCadence?: GooglePrivacyDlpV2DiscoveryCloudStorageGenerationCadence;
  /** Optional. Disable profiling for buckets that match this filter. */
  disabled?: GooglePrivacyDlpV2Disabled;
  /** Required. The buckets the generation_cadence applies to. The first target with a matching filter will be the one to apply to a bucket. */
  filter?: GooglePrivacyDlpV2DiscoveryCloudStorageFilter;
}

export const GooglePrivacyDlpV2CloudStorageDiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2CloudStorageDiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.optional(GooglePrivacyDlpV2DiscoveryFileStoreConditions),
    generationCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryCloudStorageGenerationCadence,
    ),
    disabled: Schema.optional(GooglePrivacyDlpV2Disabled),
    filter: Schema.optional(GooglePrivacyDlpV2DiscoveryCloudStorageFilter),
  }).annotate({ identifier: "GooglePrivacyDlpV2CloudStorageDiscoveryTarget" });

export interface GooglePrivacyDlpV2SecretsDiscoveryTarget {}

export const GooglePrivacyDlpV2SecretsDiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2SecretsDiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2SecretsDiscoveryTarget",
  });

export interface GooglePrivacyDlpV2VertexDatasetRegex {
  /** For organizations, if unset, will match all projects. Has no effect for configurations created within a project. */
  projectIdRegex?: string;
}

export const GooglePrivacyDlpV2VertexDatasetRegex: Schema.Schema<GooglePrivacyDlpV2VertexDatasetRegex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectIdRegex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2VertexDatasetRegex" });

export interface GooglePrivacyDlpV2VertexDatasetRegexes {
  /** Required. The group of regular expression patterns to match against one or more datasets. Maximum of 100 entries. The sum of the lengths of all regular expressions can't exceed 10 KiB. */
  patterns?: ReadonlyArray<GooglePrivacyDlpV2VertexDatasetRegex>;
}

export const GooglePrivacyDlpV2VertexDatasetRegexes: Schema.Schema<GooglePrivacyDlpV2VertexDatasetRegexes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patterns: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2VertexDatasetRegex),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2VertexDatasetRegexes" });

export interface GooglePrivacyDlpV2VertexDatasetCollection {
  /** The regex used to filter dataset resources. */
  vertexDatasetRegexes?: GooglePrivacyDlpV2VertexDatasetRegexes;
}

export const GooglePrivacyDlpV2VertexDatasetCollection: Schema.Schema<GooglePrivacyDlpV2VertexDatasetCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vertexDatasetRegexes: Schema.optional(
      GooglePrivacyDlpV2VertexDatasetRegexes,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2VertexDatasetCollection" });

export interface GooglePrivacyDlpV2VertexDatasetResourceReference {
  /** Required. The name of the Vertex AI resource. If set within a project-level configuration, the specified resource must be within the project. Examples: * `projects/{project}/locations/{location}/datasets/{dataset}` */
  datasetResourceName?: string;
}

export const GooglePrivacyDlpV2VertexDatasetResourceReference: Schema.Schema<GooglePrivacyDlpV2VertexDatasetResourceReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetResourceName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2VertexDatasetResourceReference",
  });

export interface GooglePrivacyDlpV2DiscoveryVertexDatasetFilter {
  /** A specific set of Vertex AI datasets for this filter to apply to. */
  collection?: GooglePrivacyDlpV2VertexDatasetCollection;
  /** The dataset resource to scan. Targets including this can only include one target (the target with this dataset resource reference). */
  vertexDatasetResourceReference?: GooglePrivacyDlpV2VertexDatasetResourceReference;
  /** Catch-all. This should always be the last target in the list because anything above it will apply first. Should only appear once in a configuration. If none is specified, a default one will be added automatically. */
  others?: GooglePrivacyDlpV2AllOtherResources;
}

export const GooglePrivacyDlpV2DiscoveryVertexDatasetFilter: Schema.Schema<GooglePrivacyDlpV2DiscoveryVertexDatasetFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collection: Schema.optional(GooglePrivacyDlpV2VertexDatasetCollection),
    vertexDatasetResourceReference: Schema.optional(
      GooglePrivacyDlpV2VertexDatasetResourceReference,
    ),
    others: Schema.optional(GooglePrivacyDlpV2AllOtherResources),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryVertexDatasetFilter" });

export interface GooglePrivacyDlpV2DiscoveryVertexDatasetConditions {
  /** Vertex AI dataset must have been created after this date. Used to avoid backfilling. */
  createdAfter?: string;
  /** Minimum age a Vertex AI dataset must have. If set, the value must be 1 hour or greater. */
  minAge?: string;
}

export const GooglePrivacyDlpV2DiscoveryVertexDatasetConditions: Schema.Schema<GooglePrivacyDlpV2DiscoveryVertexDatasetConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAfter: Schema.optional(Schema.String),
    minAge: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryVertexDatasetConditions",
  });

export interface GooglePrivacyDlpV2DiscoveryVertexDatasetGenerationCadence {
  /** Governs when to update data profiles when the inspection rules defined by the `InspectTemplate` change. If not set, changing the template will not cause a data profile to be updated. */
  inspectTemplateModifiedCadence?: GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence;
  /** If you set this field, profiles are refreshed at this frequency regardless of whether the underlying datasets have changed. Defaults to never. */
  refreshFrequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
}

export const GooglePrivacyDlpV2DiscoveryVertexDatasetGenerationCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryVertexDatasetGenerationCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectTemplateModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence,
    ),
    refreshFrequency: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryVertexDatasetGenerationCadence",
  });

export interface GooglePrivacyDlpV2VertexDatasetDiscoveryTarget {
  /** Required. The datasets the discovery cadence applies to. The first target with a matching filter will be the one to apply to a dataset. */
  filter?: GooglePrivacyDlpV2DiscoveryVertexDatasetFilter;
  /** In addition to matching the filter, these conditions must be true before a profile is generated. */
  conditions?: GooglePrivacyDlpV2DiscoveryVertexDatasetConditions;
  /** How often and when to update profiles. New datasets that match both the filter and conditions are scanned as quickly as possible depending on system capacity. */
  generationCadence?: GooglePrivacyDlpV2DiscoveryVertexDatasetGenerationCadence;
  /** Disable profiling for datasets that match this filter. */
  disabled?: GooglePrivacyDlpV2Disabled;
}

export const GooglePrivacyDlpV2VertexDatasetDiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2VertexDatasetDiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(GooglePrivacyDlpV2DiscoveryVertexDatasetFilter),
    conditions: Schema.optional(
      GooglePrivacyDlpV2DiscoveryVertexDatasetConditions,
    ),
    generationCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryVertexDatasetGenerationCadence,
    ),
    disabled: Schema.optional(GooglePrivacyDlpV2Disabled),
  }).annotate({ identifier: "GooglePrivacyDlpV2VertexDatasetDiscoveryTarget" });

export interface GooglePrivacyDlpV2DiscoverySchemaModifiedCadence {
  /** The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. Defaults to NEW_COLUMNS. */
  types?: ReadonlyArray<
    | "SCHEMA_MODIFICATION_UNSPECIFIED"
    | "SCHEMA_NEW_COLUMNS"
    | "SCHEMA_REMOVED_COLUMNS"
    | (string & {})
  >;
  /** How frequently profiles may be updated when schemas are modified. Defaults to monthly. */
  frequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
}

export const GooglePrivacyDlpV2DiscoverySchemaModifiedCadence: Schema.Schema<GooglePrivacyDlpV2DiscoverySchemaModifiedCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    types: Schema.optional(Schema.Array(Schema.String)),
    frequency: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoverySchemaModifiedCadence",
  });

export interface GooglePrivacyDlpV2DiscoveryTableModifiedCadence {
  /** The type of events to consider when deciding if the table has been modified and should have the profile updated. Defaults to MODIFIED_TIMESTAMP. */
  types?: ReadonlyArray<
    | "TABLE_MODIFICATION_UNSPECIFIED"
    | "TABLE_MODIFIED_TIMESTAMP"
    | (string & {})
  >;
  /** How frequently data profiles can be updated when tables are modified. Defaults to never. */
  frequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
}

export const GooglePrivacyDlpV2DiscoveryTableModifiedCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryTableModifiedCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    types: Schema.optional(Schema.Array(Schema.String)),
    frequency: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DiscoveryTableModifiedCadence",
  });

export interface GooglePrivacyDlpV2DiscoveryGenerationCadence {
  /** Governs when to update data profiles when a schema is modified. */
  schemaModifiedCadence?: GooglePrivacyDlpV2DiscoverySchemaModifiedCadence;
  /** Frequency at which profiles should be updated, regardless of whether the underlying resource has changed. Defaults to never. */
  refreshFrequency?:
    | "UPDATE_FREQUENCY_UNSPECIFIED"
    | "UPDATE_FREQUENCY_NEVER"
    | "UPDATE_FREQUENCY_DAILY"
    | "UPDATE_FREQUENCY_MONTHLY"
    | (string & {});
  /** Governs when to update data profiles when a table is modified. */
  tableModifiedCadence?: GooglePrivacyDlpV2DiscoveryTableModifiedCadence;
  /** Governs when to update data profiles when the inspection rules defined by the `InspectTemplate` change. If not set, changing the template will not cause a data profile to update. */
  inspectTemplateModifiedCadence?: GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence;
}

export const GooglePrivacyDlpV2DiscoveryGenerationCadence: Schema.Schema<GooglePrivacyDlpV2DiscoveryGenerationCadence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoverySchemaModifiedCadence,
    ),
    refreshFrequency: Schema.optional(Schema.String),
    tableModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryTableModifiedCadence,
    ),
    inspectTemplateModifiedCadence: Schema.optional(
      GooglePrivacyDlpV2DiscoveryInspectTemplateModifiedCadence,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryGenerationCadence" });

export interface GooglePrivacyDlpV2BigQueryTableTypes {
  /** A set of BigQuery table types. */
  types?: ReadonlyArray<
    | "BIG_QUERY_TABLE_TYPE_UNSPECIFIED"
    | "BIG_QUERY_TABLE_TYPE_TABLE"
    | "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"
    | "BIG_QUERY_TABLE_TYPE_SNAPSHOT"
    | (string & {})
  >;
}

export const GooglePrivacyDlpV2BigQueryTableTypes: Schema.Schema<GooglePrivacyDlpV2BigQueryTableTypes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    types: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryTableTypes" });

export interface GooglePrivacyDlpV2OrConditions {
  /** Minimum number of rows that should be present before Cloud DLP profiles a table */
  minRowCount?: number;
  /** Minimum age a table must have before Cloud DLP can profile it. Value must be 1 hour or greater. */
  minAge?: string;
}

export const GooglePrivacyDlpV2OrConditions: Schema.Schema<GooglePrivacyDlpV2OrConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minRowCount: Schema.optional(Schema.Number),
    minAge: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2OrConditions" });

export interface GooglePrivacyDlpV2DiscoveryBigQueryConditions {
  /** Restrict discovery to categories of table types. */
  typeCollection?:
    | "BIG_QUERY_COLLECTION_UNSPECIFIED"
    | "BIG_QUERY_COLLECTION_ALL_TYPES"
    | "BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES"
    | (string & {});
  /** Restrict discovery to specific table types. */
  types?: GooglePrivacyDlpV2BigQueryTableTypes;
  /** BigQuery table must have been created after this date. Used to avoid backfilling. */
  createdAfter?: string;
  /** At least one of the conditions must be true for a table to be scanned. */
  orConditions?: GooglePrivacyDlpV2OrConditions;
}

export const GooglePrivacyDlpV2DiscoveryBigQueryConditions: Schema.Schema<GooglePrivacyDlpV2DiscoveryBigQueryConditions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    typeCollection: Schema.optional(Schema.String),
    types: Schema.optional(GooglePrivacyDlpV2BigQueryTableTypes),
    createdAfter: Schema.optional(Schema.String),
    orConditions: Schema.optional(GooglePrivacyDlpV2OrConditions),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryBigQueryConditions" });

export interface GooglePrivacyDlpV2BigQueryDiscoveryTarget {
  /** How often and when to update profiles. New tables that match both the filter and conditions are scanned as quickly as possible depending on system capacity. */
  cadence?: GooglePrivacyDlpV2DiscoveryGenerationCadence;
  /** Required. The tables the discovery cadence applies to. The first target with a matching filter will be the one to apply to a table. */
  filter?: GooglePrivacyDlpV2DiscoveryBigQueryFilter;
  /** In addition to matching the filter, these conditions must be true before a profile is generated. */
  conditions?: GooglePrivacyDlpV2DiscoveryBigQueryConditions;
  /** Tables that match this filter will not have profiles created. */
  disabled?: GooglePrivacyDlpV2Disabled;
}

export const GooglePrivacyDlpV2BigQueryDiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2BigQueryDiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cadence: Schema.optional(GooglePrivacyDlpV2DiscoveryGenerationCadence),
    filter: Schema.optional(GooglePrivacyDlpV2DiscoveryBigQueryFilter),
    conditions: Schema.optional(GooglePrivacyDlpV2DiscoveryBigQueryConditions),
    disabled: Schema.optional(GooglePrivacyDlpV2Disabled),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryDiscoveryTarget" });

export interface GooglePrivacyDlpV2DiscoveryTarget {
  /** Other clouds target for discovery. The first target to match a resource will be the one applied. */
  otherCloudTarget?: GooglePrivacyDlpV2OtherCloudDiscoveryTarget;
  /** Cloud Storage target for Discovery. The first target to match a table will be the one applied. */
  cloudStorageTarget?: GooglePrivacyDlpV2CloudStorageDiscoveryTarget;
  /** Discovery target that looks for credentials and secrets stored in cloud resource metadata and reports them as vulnerabilities to Security Command Center. Only one target of this type is allowed. */
  secretsTarget?: GooglePrivacyDlpV2SecretsDiscoveryTarget;
  /** Cloud SQL target for Discovery. The first target to match a table will be the one applied. */
  cloudSqlTarget?: GooglePrivacyDlpV2CloudSqlDiscoveryTarget;
  /** Vertex AI dataset target for Discovery. The first target to match a dataset will be the one applied. Note that discovery for Vertex AI can incur Cloud Storage Class B operation charges for storage.objects.get operations and retrieval fees. For more information, see [Cloud Storage pricing](https://cloud.google.com/storage/pricing#price-tables). Note that discovery for Vertex AI dataset will not be able to scan images unless DiscoveryConfig.processing_location.image_fallback_location has multi_region_processing or global_processing configured. */
  vertexDatasetTarget?: GooglePrivacyDlpV2VertexDatasetDiscoveryTarget;
  /** BigQuery target for Discovery. The first target to match a table will be the one applied. */
  bigQueryTarget?: GooglePrivacyDlpV2BigQueryDiscoveryTarget;
}

export const GooglePrivacyDlpV2DiscoveryTarget: Schema.Schema<GooglePrivacyDlpV2DiscoveryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    otherCloudTarget: Schema.optional(
      GooglePrivacyDlpV2OtherCloudDiscoveryTarget,
    ),
    cloudStorageTarget: Schema.optional(
      GooglePrivacyDlpV2CloudStorageDiscoveryTarget,
    ),
    secretsTarget: Schema.optional(GooglePrivacyDlpV2SecretsDiscoveryTarget),
    cloudSqlTarget: Schema.optional(GooglePrivacyDlpV2CloudSqlDiscoveryTarget),
    vertexDatasetTarget: Schema.optional(
      GooglePrivacyDlpV2VertexDatasetDiscoveryTarget,
    ),
    bigQueryTarget: Schema.optional(GooglePrivacyDlpV2BigQueryDiscoveryTarget),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryTarget" });

export interface GooglePrivacyDlpV2DocumentFallbackLocation {
  /** Processing occurs in a multi-region that contains the current region if available. */
  multiRegionProcessing?: GooglePrivacyDlpV2MultiRegionProcessing;
  /** Processing occurs in the global region. */
  globalProcessing?: GooglePrivacyDlpV2GlobalProcessing;
}

export const GooglePrivacyDlpV2DocumentFallbackLocation: Schema.Schema<GooglePrivacyDlpV2DocumentFallbackLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    multiRegionProcessing: Schema.optional(
      GooglePrivacyDlpV2MultiRegionProcessing,
    ),
    globalProcessing: Schema.optional(GooglePrivacyDlpV2GlobalProcessing),
  }).annotate({ identifier: "GooglePrivacyDlpV2DocumentFallbackLocation" });

export interface GooglePrivacyDlpV2ProcessingLocation {
  /** Image processing falls back using this configuration. */
  imageFallbackLocation?: GooglePrivacyDlpV2ImageFallbackLocation;
  /** Document processing falls back using this configuration. */
  documentFallbackLocation?: GooglePrivacyDlpV2DocumentFallbackLocation;
}

export const GooglePrivacyDlpV2ProcessingLocation: Schema.Schema<GooglePrivacyDlpV2ProcessingLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    imageFallbackLocation: Schema.optional(
      GooglePrivacyDlpV2ImageFallbackLocation,
    ),
    documentFallbackLocation: Schema.optional(
      GooglePrivacyDlpV2DocumentFallbackLocation,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ProcessingLocation" });

export interface GooglePrivacyDlpV2DiscoveryConfig {
  /** Unique resource name for the DiscoveryConfig, assigned by the service when the DiscoveryConfig is created, for example `projects/dlp-test-project/locations/global/discoveryConfigs/53234423`. */
  name?: string;
  /** Actions to execute at the completion of scanning. */
  actions?: ReadonlyArray<GooglePrivacyDlpV2DataProfileAction>;
  /** Only set when the parent is an org. */
  orgConfig?: GooglePrivacyDlpV2OrgConfig;
  /** Detection logic for profile generation. Not all template features are used by Discovery. FindingLimits, include_quote and exclude_info_types have no impact on Discovery. Multiple templates may be provided if there is data in multiple regions. At most one template must be specified per-region (including "global"). Each region is scanned using the applicable template. If no region-specific template is specified, but a "global" template is specified, it will be copied to that region and used instead. If no global or region-specific template is provided for a region with data, that region's data will not be scanned. For more information, see https://cloud.google.com/sensitive-data-protection/docs/data-profiles#data-residency. */
  inspectTemplates?: ReadonlyArray<string>;
  /** Output only. The last update timestamp of a DiscoveryConfig. */
  updateTime?: string;
  /** Must be set only when scanning other clouds. */
  otherCloudStartingLocation?: GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation;
  /** Target to match against for determining what to scan and how frequently. */
  targets?: ReadonlyArray<GooglePrivacyDlpV2DiscoveryTarget>;
  /** Output only. A stream of errors encountered when the config was activated. Repeated errors may result in the config automatically being paused. Output only field. Will return the last 100 errors. Whenever the config is modified this list will be cleared. */
  errors?: ReadonlyArray<GooglePrivacyDlpV2Error>;
  /** Output only. The timestamp of the last time this config was executed. */
  lastRunTime?: string;
  /** Required. A status for this configuration. */
  status?: "STATUS_UNSPECIFIED" | "RUNNING" | "PAUSED" | (string & {});
  /** Optional. Processing location configuration. Vertex AI dataset scanning will set processing_location.image_fallback_type to MultiRegionProcessing by default. */
  processingLocation?: GooglePrivacyDlpV2ProcessingLocation;
  /** Display name (max 100 chars) */
  displayName?: string;
  /** Output only. The creation timestamp of a DiscoveryConfig. */
  createTime?: string;
}

export const GooglePrivacyDlpV2DiscoveryConfig: Schema.Schema<GooglePrivacyDlpV2DiscoveryConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    actions: Schema.optional(Schema.Array(GooglePrivacyDlpV2DataProfileAction)),
    orgConfig: Schema.optional(GooglePrivacyDlpV2OrgConfig),
    inspectTemplates: Schema.optional(Schema.Array(Schema.String)),
    updateTime: Schema.optional(Schema.String),
    otherCloudStartingLocation: Schema.optional(
      GooglePrivacyDlpV2OtherCloudDiscoveryStartingLocation,
    ),
    targets: Schema.optional(Schema.Array(GooglePrivacyDlpV2DiscoveryTarget)),
    errors: Schema.optional(Schema.Array(GooglePrivacyDlpV2Error)),
    lastRunTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    processingLocation: Schema.optional(GooglePrivacyDlpV2ProcessingLocation),
    displayName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DiscoveryConfig" });

export interface GooglePrivacyDlpV2DataProfileConfigSnapshot {
  /** A copy of the inspection config used to generate this profile. This is a copy of the inspect_template specified in `DataProfileJobConfig`. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
  /** A copy of the configuration used to generate this profile. */
  discoveryConfig?: GooglePrivacyDlpV2DiscoveryConfig;
  /** A copy of the configuration used to generate this profile. This is deprecated, and the DiscoveryConfig field is preferred moving forward. DataProfileJobConfig will still be written here for Discovery in BigQuery for backwards compatibility, but will not be updated with new fields, while DiscoveryConfig will. */
  dataProfileJob?: GooglePrivacyDlpV2DataProfileJobConfig;
  /** Timestamp when the template was modified */
  inspectTemplateModifiedTime?: string;
  /** Name of the inspection template used to generate this profile */
  inspectTemplateName?: string;
}

export const GooglePrivacyDlpV2DataProfileConfigSnapshot: Schema.Schema<GooglePrivacyDlpV2DataProfileConfigSnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
    discoveryConfig: Schema.optional(GooglePrivacyDlpV2DiscoveryConfig),
    dataProfileJob: Schema.optional(GooglePrivacyDlpV2DataProfileJobConfig),
    inspectTemplateModifiedTime: Schema.optional(Schema.String),
    inspectTemplateName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileConfigSnapshot" });

export interface GooglePrivacyDlpV2Tag {
  /** The namespaced name for the tag value to attach to Google Cloud resources. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`, for example, "123456/environment/prod" for an organization parent, or "my-project/environment/prod" for a project parent. This is only set for Google Cloud resources. */
  namespacedTagValue?: string;
  /** The key of a tag key-value pair. For Google Cloud resources, this is the resource name of the key, for example, "tagKeys/123456". */
  key?: string;
  /** The value of a tag key-value pair. For Google Cloud resources, this is the resource name of the value, for example, "tagValues/123456". */
  value?: string;
}

export const GooglePrivacyDlpV2Tag: Schema.Schema<GooglePrivacyDlpV2Tag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    namespacedTagValue: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Tag" });

export interface GooglePrivacyDlpV2TableDataProfile {
  /** Number of rows in the table when the profile was generated. This will not be populated for BigLake tables. */
  rowCount?: string;
  /** State of a profile. This will always be set to DONE when the table data profile is written to another service like BigQuery or Pub/Sub. */
  state?: "STATE_UNSPECIFIED" | "RUNNING" | "DONE" | (string & {});
  /** The resource type that was profiled. */
  dataSourceType?: GooglePrivacyDlpV2DataSourceType;
  /** The labels applied to the resource at the time the profile was generated. */
  resourceLabels?: Record<string, string>;
  /** The BigQuery table to which the sample findings are written. */
  sampleFindingsTable?: GooglePrivacyDlpV2BigQueryTable;
  /** Domains associated with the profile. */
  domains?: ReadonlyArray<GooglePrivacyDlpV2Domain>;
  /** The number of columns skipped in the table because of an error. */
  failedColumnCount?: string;
  /** The Cloud Asset Inventory resource that was profiled in order to generate this TableDataProfile. https://cloud.google.com/apis/design/resource_names#full_resource_name */
  fullResource?: string;
  /** If the resource is BigQuery, the dataset ID. */
  datasetId?: string;
  /** The last time the profile was generated. */
  profileLastGenerated?: string;
  /** The resource name of the project data profile for this table. */
  projectDataProfile?: string;
  /** The data risk level of this table. */
  dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;
  /** Optional. The time when this table expires. */
  expirationTime?: string;
  /** The number of columns profiled in the table. */
  scannedColumnCount?: string;
  /** Resources related to this profile. */
  relatedResources?: ReadonlyArray<GooglePrivacyDlpV2RelatedResource>;
  /** The size of the table when the profile was generated. */
  tableSizeBytes?: string;
  /** The time at which the table was created. */
  createTime?: string;
  /** If supported, the location where the dataset's data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
  datasetLocation?: string;
  /** The table ID. */
  tableId?: string;
  /** Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. */
  profileStatus?: GooglePrivacyDlpV2ProfileStatus;
  /** Other infoTypes found in this table's data. */
  otherInfoTypes?: ReadonlyArray<GooglePrivacyDlpV2OtherInfoTypeSummary>;
  /** How broadly a resource has been shared. */
  resourceVisibility?:
    | "RESOURCE_VISIBILITY_UNSPECIFIED"
    | "RESOURCE_VISIBILITY_PUBLIC"
    | "RESOURCE_VISIBILITY_INCONCLUSIVE"
    | "RESOURCE_VISIBILITY_RESTRICTED"
    | (string & {});
  /** The snapshot of the configurations used to generate the profile. */
  configSnapshot?: GooglePrivacyDlpV2DataProfileConfigSnapshot;
  /** How the table is encrypted. */
  encryptionStatus?:
    | "ENCRYPTION_STATUS_UNSPECIFIED"
    | "ENCRYPTION_GOOGLE_MANAGED"
    | "ENCRYPTION_CUSTOMER_MANAGED"
    | (string & {});
  /** The sensitivity score of this table. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** The tags attached to the table, including any tags attached during profiling. Because tags are attached to Cloud SQL instances rather than Cloud SQL tables, this field is empty for Cloud SQL table profiles. */
  tags?: ReadonlyArray<GooglePrivacyDlpV2Tag>;
  /** The Google Cloud project ID that owns the resource. */
  datasetProjectId?: string;
  /** The time when this table was last modified */
  lastModifiedTime?: string;
  /** The name of the profile. */
  name?: string;
  /** The infoTypes predicted from this table's data. */
  predictedInfoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeSummary>;
}

export const GooglePrivacyDlpV2TableDataProfile: Schema.Schema<GooglePrivacyDlpV2TableDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowCount: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    dataSourceType: Schema.optional(GooglePrivacyDlpV2DataSourceType),
    resourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    sampleFindingsTable: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    domains: Schema.optional(Schema.Array(GooglePrivacyDlpV2Domain)),
    failedColumnCount: Schema.optional(Schema.String),
    fullResource: Schema.optional(Schema.String),
    datasetId: Schema.optional(Schema.String),
    profileLastGenerated: Schema.optional(Schema.String),
    projectDataProfile: Schema.optional(Schema.String),
    dataRiskLevel: Schema.optional(GooglePrivacyDlpV2DataRiskLevel),
    expirationTime: Schema.optional(Schema.String),
    scannedColumnCount: Schema.optional(Schema.String),
    relatedResources: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2RelatedResource),
    ),
    tableSizeBytes: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    datasetLocation: Schema.optional(Schema.String),
    tableId: Schema.optional(Schema.String),
    profileStatus: Schema.optional(GooglePrivacyDlpV2ProfileStatus),
    otherInfoTypes: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2OtherInfoTypeSummary),
    ),
    resourceVisibility: Schema.optional(Schema.String),
    configSnapshot: Schema.optional(
      GooglePrivacyDlpV2DataProfileConfigSnapshot,
    ),
    encryptionStatus: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    tags: Schema.optional(Schema.Array(GooglePrivacyDlpV2Tag)),
    datasetProjectId: Schema.optional(Schema.String),
    lastModifiedTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    predictedInfoTypes: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeSummary),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2TableDataProfile" });

export interface GooglePrivacyDlpV2FileStoreInfoTypeSummary {
  /** The InfoType seen. */
  infoType?: GooglePrivacyDlpV2InfoType;
}

export const GooglePrivacyDlpV2FileStoreInfoTypeSummary: Schema.Schema<GooglePrivacyDlpV2FileStoreInfoTypeSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileStoreInfoTypeSummary" });

export interface GooglePrivacyDlpV2FileClusterType {
  /** Cluster type. */
  cluster?:
    | "CLUSTER_UNSPECIFIED"
    | "CLUSTER_UNKNOWN"
    | "CLUSTER_TEXT"
    | "CLUSTER_STRUCTURED_DATA"
    | "CLUSTER_SOURCE_CODE"
    | "CLUSTER_RICH_DOCUMENT"
    | "CLUSTER_IMAGE"
    | "CLUSTER_ARCHIVE"
    | "CLUSTER_MULTIMEDIA"
    | "CLUSTER_EXECUTABLE"
    | "CLUSTER_AI_MODEL"
    | (string & {});
}

export const GooglePrivacyDlpV2FileClusterType: Schema.Schema<GooglePrivacyDlpV2FileClusterType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileClusterType" });

export interface GooglePrivacyDlpV2FileClusterSummary {
  /** A list of errors detected while scanning this cluster. The list is truncated to 10 per cluster. */
  errors?: ReadonlyArray<GooglePrivacyDlpV2Error>;
  /** InfoTypes detected in this cluster. */
  fileStoreInfoTypeSummaries?: ReadonlyArray<GooglePrivacyDlpV2FileStoreInfoTypeSummary>;
  /** A sample of file types seen in this cluster. Empty if no files were seen. File extensions can be derived from the file name or the file content. */
  fileExtensionsSeen?: ReadonlyArray<GooglePrivacyDlpV2FileExtensionInfo>;
  /** True if no files exist in this cluster. If the file store had more files than could be listed, this will be false even if no files for this cluster were seen and file_extensions_seen is empty. */
  noFilesExist?: boolean;
  /** The file cluster type. */
  fileClusterType?: GooglePrivacyDlpV2FileClusterType;
  /** The data risk level of this cluster. RISK_LOW if nothing has been scanned. */
  dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;
  /** The sensitivity score of this cluster. The score will be SENSITIVITY_LOW if nothing has been scanned. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** A sample of file types scanned in this cluster. Empty if no files were scanned. File extensions can be derived from the file name or the file content. */
  fileExtensionsScanned?: ReadonlyArray<GooglePrivacyDlpV2FileExtensionInfo>;
}

export const GooglePrivacyDlpV2FileClusterSummary: Schema.Schema<GooglePrivacyDlpV2FileClusterSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(GooglePrivacyDlpV2Error)),
    fileStoreInfoTypeSummaries: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FileStoreInfoTypeSummary),
    ),
    fileExtensionsSeen: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FileExtensionInfo),
    ),
    noFilesExist: Schema.optional(Schema.Boolean),
    fileClusterType: Schema.optional(GooglePrivacyDlpV2FileClusterType),
    dataRiskLevel: Schema.optional(GooglePrivacyDlpV2DataRiskLevel),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    fileExtensionsScanned: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FileExtensionInfo),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileClusterSummary" });

export interface GooglePrivacyDlpV2FileStoreDataProfile {
  /** The labels applied to the resource at the time the profile was generated. */
  resourceLabels?: Record<string, string>;
  /** The BigQuery table to which the sample findings are written. */
  sampleFindingsTable?: GooglePrivacyDlpV2BigQueryTable;
  /** Domains associated with the profile. */
  domains?: ReadonlyArray<GooglePrivacyDlpV2Domain>;
  /** The location type of the file store (region, dual-region, multi-region, etc). If dual-region, expect data_storage_locations to be populated. */
  locationType?: string;
  /** State of a profile. */
  state?: "STATE_UNSPECIFIED" | "RUNNING" | "DONE" | (string & {});
  /** The resource type that was profiled. */
  dataSourceType?: GooglePrivacyDlpV2DataSourceType;
  /** The Google Cloud project ID that owns the resource. For Amazon S3 buckets, this is the AWS Account Id. */
  projectId?: string;
  /** InfoTypes detected in this file store. */
  fileStoreInfoTypeSummaries?: ReadonlyArray<GooglePrivacyDlpV2FileStoreInfoTypeSummary>;
  /** The location of the file store. * Cloud Storage: https://cloud.google.com/storage/docs/locations#available-locations * Amazon S3: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints */
  fileStoreLocation?: string;
  /** The resource name of the resource profiled. https://cloud.google.com/apis/design/resource_names#full_resource_name Example format of an S3 bucket full resource name: `//cloudasset.googleapis.com/organizations/{org_id}/otherCloudConnections/aws/arn:aws:s3:::{bucket_name}` */
  fullResource?: string;
  /** FileClusterSummary per each cluster. */
  fileClusterSummaries?: ReadonlyArray<GooglePrivacyDlpV2FileClusterSummary>;
  /** Resources related to this profile. */
  relatedResources?: ReadonlyArray<GooglePrivacyDlpV2RelatedResource>;
  /** The resource name of the project data profile for this file store. */
  projectDataProfile?: string;
  /** The data risk level of this resource. */
  dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;
  /** For resources that have multiple storage locations, these are those regions. For Cloud Storage this is the list of regions chosen for dual-region storage. `file_store_location` will normally be the corresponding multi-region for the list of individual locations. The first region is always picked as the processing and storage location for the data profile. */
  dataStorageLocations?: ReadonlyArray<string>;
  /** The last time the profile was generated. */
  profileLastGenerated?: string;
  /** The time the file store was first created. */
  createTime?: string;
  /** Attributes of the resource being profiled. Currently used attributes: * customer_managed_encryption: boolean - true: the resource is encrypted with a customer-managed key. - false: the resource is encrypted with a provider-managed key. */
  resourceAttributes?: Record<string, GooglePrivacyDlpV2Value>;
  /** How broadly a resource has been shared. */
  resourceVisibility?:
    | "RESOURCE_VISIBILITY_UNSPECIFIED"
    | "RESOURCE_VISIBILITY_PUBLIC"
    | "RESOURCE_VISIBILITY_INCONCLUSIVE"
    | "RESOURCE_VISIBILITY_RESTRICTED"
    | (string & {});
  /** The snapshot of the configurations used to generate the profile. */
  configSnapshot?: GooglePrivacyDlpV2DataProfileConfigSnapshot;
  /** Success or error status from the most recent profile generation attempt. May be empty if the profile is still being generated. */
  profileStatus?: GooglePrivacyDlpV2ProfileStatus;
  /** The tags attached to the resource, including any tags attached during profiling. */
  tags?: ReadonlyArray<GooglePrivacyDlpV2Tag>;
  /** The file store path. * Cloud Storage: `gs://{bucket}` * Amazon S3: `s3://{bucket}` * Vertex AI dataset: `projects/{project_number}/locations/{location}/datasets/{dataset_id}` */
  fileStorePath?: string;
  /** The sensitivity score of this resource. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** The name of the profile. */
  name?: string;
  /** The file store does not have any files. If the profiling operation failed, this is false. */
  fileStoreIsEmpty?: boolean;
  /** The time the file store was last modified. */
  lastModifiedTime?: string;
}

export const GooglePrivacyDlpV2FileStoreDataProfile: Schema.Schema<GooglePrivacyDlpV2FileStoreDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceLabels: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    sampleFindingsTable: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    domains: Schema.optional(Schema.Array(GooglePrivacyDlpV2Domain)),
    locationType: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    dataSourceType: Schema.optional(GooglePrivacyDlpV2DataSourceType),
    projectId: Schema.optional(Schema.String),
    fileStoreInfoTypeSummaries: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FileStoreInfoTypeSummary),
    ),
    fileStoreLocation: Schema.optional(Schema.String),
    fullResource: Schema.optional(Schema.String),
    fileClusterSummaries: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FileClusterSummary),
    ),
    relatedResources: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2RelatedResource),
    ),
    projectDataProfile: Schema.optional(Schema.String),
    dataRiskLevel: Schema.optional(GooglePrivacyDlpV2DataRiskLevel),
    dataStorageLocations: Schema.optional(Schema.Array(Schema.String)),
    profileLastGenerated: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    resourceAttributes: Schema.optional(
      Schema.Record(Schema.String, GooglePrivacyDlpV2Value),
    ),
    resourceVisibility: Schema.optional(Schema.String),
    configSnapshot: Schema.optional(
      GooglePrivacyDlpV2DataProfileConfigSnapshot,
    ),
    profileStatus: Schema.optional(GooglePrivacyDlpV2ProfileStatus),
    tags: Schema.optional(Schema.Array(GooglePrivacyDlpV2Tag)),
    fileStorePath: Schema.optional(Schema.String),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    name: Schema.optional(Schema.String),
    fileStoreIsEmpty: Schema.optional(Schema.Boolean),
    lastModifiedTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2FileStoreDataProfile" });

export interface GooglePrivacyDlpV2DataProfileBigQueryRowSchema {
  /** Table data profile column */
  tableProfile?: GooglePrivacyDlpV2TableDataProfile;
  /** Column data profile column */
  columnProfile?: GooglePrivacyDlpV2ColumnDataProfile;
  /** File store data profile column. */
  fileStoreProfile?: GooglePrivacyDlpV2FileStoreDataProfile;
}

export const GooglePrivacyDlpV2DataProfileBigQueryRowSchema: Schema.Schema<GooglePrivacyDlpV2DataProfileBigQueryRowSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableProfile: Schema.optional(GooglePrivacyDlpV2TableDataProfile),
    columnProfile: Schema.optional(GooglePrivacyDlpV2ColumnDataProfile),
    fileStoreProfile: Schema.optional(GooglePrivacyDlpV2FileStoreDataProfile),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileBigQueryRowSchema" });

export interface GooglePrivacyDlpV2UpdateStoredInfoTypeRequest {
  /** Updated configuration for the storedInfoType. If not provided, a new version of the storedInfoType will be created with the existing configuration. */
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
  /** Mask to control which fields get updated. */
  updateMask?: string;
}

export const GooglePrivacyDlpV2UpdateStoredInfoTypeRequest: Schema.Schema<GooglePrivacyDlpV2UpdateStoredInfoTypeRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(GooglePrivacyDlpV2StoredInfoTypeConfig),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2UpdateStoredInfoTypeRequest" });

export interface GooglePrivacyDlpV2TimeZone {
  /** Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For "UTC-9", this value is -540. */
  offsetMinutes?: number;
}

export const GooglePrivacyDlpV2TimeZone: Schema.Schema<GooglePrivacyDlpV2TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offsetMinutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2TimeZone" });

export interface GooglePrivacyDlpV2VersionDescription {
  /** Name of the version */
  version?: string;
  /** Description of the version. */
  description?: string;
}

export const GooglePrivacyDlpV2VersionDescription: Schema.Schema<GooglePrivacyDlpV2VersionDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2VersionDescription" });

export interface GooglePrivacyDlpV2InfoTypeDescription {
  /** A sample that is a true positive for this infoType. */
  example?: string;
  /** The category of the infoType. */
  categories?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeCategory>;
  /** Description of the infotype. Translated when language is provided in the request. */
  description?: string;
  /** Human readable form of the infoType name. */
  displayName?: string;
  /** Which parts of the API supports this InfoType. */
  supportedBy?: ReadonlyArray<
    "ENUM_TYPE_UNSPECIFIED" | "INSPECT" | "RISK_ANALYSIS" | (string & {})
  >;
  /** A list of available versions for the infotype. */
  versions?: ReadonlyArray<GooglePrivacyDlpV2VersionDescription>;
  /** The default sensitivity of the infoType. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** Internal name of the infoType. */
  name?: string;
  /** The launch status of the infoType. */
  launchStatus?:
    | "INFO_TYPE_LAUNCH_STATUS_UNSPECIFIED"
    | "GENERAL_AVAILABILITY"
    | "PUBLIC_PREVIEW"
    | "PRIVATE_PREVIEW"
    | (string & {});
  /** Locations at which this feature can be used. May change over time. */
  locationSupport?: GooglePrivacyDlpV2LocationSupport;
  /** If this field is set, this infoType is a general infoType and these specific infoTypes are contained within it. General infoTypes are infoTypes that encompass multiple specific infoTypes. For example, the "GEOGRAPHIC_DATA" general infoType would have set for this field "LOCATION", "LOCATION_COORDINATES", and "STREET_ADDRESS". */
  specificInfoTypes?: ReadonlyArray<string>;
}

export const GooglePrivacyDlpV2InfoTypeDescription: Schema.Schema<GooglePrivacyDlpV2InfoTypeDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    example: Schema.optional(Schema.String),
    categories: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeCategory),
    ),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    supportedBy: Schema.optional(Schema.Array(Schema.String)),
    versions: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2VersionDescription),
    ),
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    name: Schema.optional(Schema.String),
    launchStatus: Schema.optional(Schema.String),
    locationSupport: Schema.optional(GooglePrivacyDlpV2LocationSupport),
    specificInfoTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2InfoTypeDescription" });

export interface GooglePrivacyDlpV2UpdateDiscoveryConfigRequest {
  /** Mask to control which fields get updated. */
  updateMask?: string;
  /** Required. New DiscoveryConfig value. */
  discoveryConfig?: GooglePrivacyDlpV2DiscoveryConfig;
}

export const GooglePrivacyDlpV2UpdateDiscoveryConfigRequest: Schema.Schema<GooglePrivacyDlpV2UpdateDiscoveryConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String),
    discoveryConfig: Schema.optional(GooglePrivacyDlpV2DiscoveryConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2UpdateDiscoveryConfigRequest" });

export interface GooglePrivacyDlpV2StoredInfoTypeStats {
  /** StoredInfoType where findings are defined by a dictionary of phrases. */
  largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryStats;
}

export const GooglePrivacyDlpV2StoredInfoTypeStats: Schema.Schema<GooglePrivacyDlpV2StoredInfoTypeStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    largeCustomDictionary: Schema.optional(
      GooglePrivacyDlpV2LargeCustomDictionaryStats,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2StoredInfoTypeStats" });

export interface GooglePrivacyDlpV2StoredInfoTypeVersion {
  /** Stored info type version state. Read-only, updated by the system during dictionary creation. */
  state?:
    | "STORED_INFO_TYPE_STATE_UNSPECIFIED"
    | "PENDING"
    | "READY"
    | "FAILED"
    | "INVALID"
    | (string & {});
  /** Create timestamp of the version. Read-only, determined by the system when the version is created. */
  createTime?: string;
  /** Statistics about this storedInfoType version. */
  stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
  /** Errors that occurred when creating this storedInfoType version, or anomalies detected in the storedInfoType data that render it unusable. Only the five most recent errors will be displayed, with the most recent error appearing first. For example, some of the data for stored custom dictionaries is put in the user's Cloud Storage bucket, and if this data is modified or deleted by the user or another system, the dictionary becomes invalid. If any errors occur, fix the problem indicated by the error message and use the UpdateStoredInfoType API method to create another version of the storedInfoType to continue using it, reusing the same `config` if it was not the source of the error. */
  errors?: ReadonlyArray<GooglePrivacyDlpV2Error>;
  /** StoredInfoType configuration. */
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
}

export const GooglePrivacyDlpV2StoredInfoTypeVersion: Schema.Schema<GooglePrivacyDlpV2StoredInfoTypeVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    stats: Schema.optional(GooglePrivacyDlpV2StoredInfoTypeStats),
    errors: Schema.optional(Schema.Array(GooglePrivacyDlpV2Error)),
    config: Schema.optional(GooglePrivacyDlpV2StoredInfoTypeConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2StoredInfoTypeVersion" });

export interface GooglePrivacyDlpV2StoredInfoType {
  /** Resource name. */
  name?: string;
  /** Pending versions of the stored info type. Empty if no versions are pending. */
  pendingVersions?: ReadonlyArray<GooglePrivacyDlpV2StoredInfoTypeVersion>;
  /** Current version of the stored info type. */
  currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;
}

export const GooglePrivacyDlpV2StoredInfoType: Schema.Schema<GooglePrivacyDlpV2StoredInfoType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    pendingVersions: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2StoredInfoTypeVersion),
    ),
    currentVersion: Schema.optional(GooglePrivacyDlpV2StoredInfoTypeVersion),
  }).annotate({ identifier: "GooglePrivacyDlpV2StoredInfoType" });

export interface GooglePrivacyDlpV2ListStoredInfoTypesResponse {
  /** List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest. */
  storedInfoTypes?: ReadonlyArray<GooglePrivacyDlpV2StoredInfoType>;
  /** If the next page is available then the next page token to be used in the following ListStoredInfoTypes request. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListStoredInfoTypesResponse: Schema.Schema<GooglePrivacyDlpV2ListStoredInfoTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storedInfoTypes: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2StoredInfoType),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListStoredInfoTypesResponse" });

export interface GooglePrivacyDlpV2Range {
  /** Index of the last character of the range (exclusive). */
  end?: string;
  /** Index of the first character of the range (inclusive). */
  start?: string;
}

export const GooglePrivacyDlpV2Range: Schema.Schema<GooglePrivacyDlpV2Range> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end: Schema.optional(Schema.String),
    start: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Range" });

export interface GooglePrivacyDlpV2BigQueryKey {
  /** Complete BigQuery table reference. */
  tableReference?: GooglePrivacyDlpV2BigQueryTable;
  /** Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify `inspect_job.storage_config.big_query_options.identifying_fields` in `CreateDlpJobRequest`. */
  rowNumber?: string;
}

export const GooglePrivacyDlpV2BigQueryKey: Schema.Schema<GooglePrivacyDlpV2BigQueryKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableReference: Schema.optional(GooglePrivacyDlpV2BigQueryTable),
    rowNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2BigQueryKey" });

export interface GooglePrivacyDlpV2PathElement {
  /** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. */
  kind?: string;
  /** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
  id?: string;
  /** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. */
  name?: string;
}

export const GooglePrivacyDlpV2PathElement: Schema.Schema<GooglePrivacyDlpV2PathElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2PathElement" });

export interface GooglePrivacyDlpV2Key {
  /** Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition. */
  partitionId?: GooglePrivacyDlpV2PartitionId;
  /** The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. A path can never be empty, and a path can have at most 100 elements. */
  path?: ReadonlyArray<GooglePrivacyDlpV2PathElement>;
}

export const GooglePrivacyDlpV2Key: Schema.Schema<GooglePrivacyDlpV2Key> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionId: Schema.optional(GooglePrivacyDlpV2PartitionId),
    path: Schema.optional(Schema.Array(GooglePrivacyDlpV2PathElement)),
  }).annotate({ identifier: "GooglePrivacyDlpV2Key" });

export interface GooglePrivacyDlpV2DatastoreKey {
  /** Datastore entity key. */
  entityKey?: GooglePrivacyDlpV2Key;
}

export const GooglePrivacyDlpV2DatastoreKey: Schema.Schema<GooglePrivacyDlpV2DatastoreKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityKey: Schema.optional(GooglePrivacyDlpV2Key),
  }).annotate({ identifier: "GooglePrivacyDlpV2DatastoreKey" });

export interface GooglePrivacyDlpV2RecordKey {
  /** Datastore key */
  bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;
  /** BigQuery key */
  datastoreKey?: GooglePrivacyDlpV2DatastoreKey;
  /** Values of identifying columns in the given row. Order of values matches the order of `identifying_fields` specified in the scanning request. */
  idValues?: ReadonlyArray<string>;
}

export const GooglePrivacyDlpV2RecordKey: Schema.Schema<GooglePrivacyDlpV2RecordKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bigQueryKey: Schema.optional(GooglePrivacyDlpV2BigQueryKey),
    datastoreKey: Schema.optional(GooglePrivacyDlpV2DatastoreKey),
    idValues: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GooglePrivacyDlpV2RecordKey" });

export interface GooglePrivacyDlpV2TableLocation {
  /** The zero-based index of the row where the finding is located. Only populated for resources that have a natural ordering, not BigQuery. In BigQuery, to identify the row a finding came from, populate BigQueryOptions.identifying_fields with your primary key column names and when you store the findings the value of those columns will be stored inside of Finding. */
  rowIndex?: string;
}

export const GooglePrivacyDlpV2TableLocation: Schema.Schema<GooglePrivacyDlpV2TableLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowIndex: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TableLocation" });

export interface GooglePrivacyDlpV2RecordLocation {
  /** Field id of the field containing the finding. */
  fieldId?: GooglePrivacyDlpV2FieldId;
  /** Key of the finding. */
  recordKey?: GooglePrivacyDlpV2RecordKey;
  /** Location within a `ContentItem.Table`. */
  tableLocation?: GooglePrivacyDlpV2TableLocation;
}

export const GooglePrivacyDlpV2RecordLocation: Schema.Schema<GooglePrivacyDlpV2RecordLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldId: Schema.optional(GooglePrivacyDlpV2FieldId),
    recordKey: Schema.optional(GooglePrivacyDlpV2RecordKey),
    tableLocation: Schema.optional(GooglePrivacyDlpV2TableLocation),
  }).annotate({ identifier: "GooglePrivacyDlpV2RecordLocation" });

export interface GooglePrivacyDlpV2BoundingBox {
  /** Top coordinate of the bounding box. (0,0) is upper left. */
  top?: number;
  /** Left coordinate of the bounding box. (0,0) is upper left. */
  left?: number;
  /** Height of the bounding box in pixels. */
  height?: number;
  /** Width of the bounding box in pixels. */
  width?: number;
}

export const GooglePrivacyDlpV2BoundingBox: Schema.Schema<GooglePrivacyDlpV2BoundingBox> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    top: Schema.optional(Schema.Number),
    left: Schema.optional(Schema.Number),
    height: Schema.optional(Schema.Number),
    width: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GooglePrivacyDlpV2BoundingBox" });

export interface GooglePrivacyDlpV2ImageLocation {
  /** Bounding boxes locating the pixels within the image containing the finding. */
  boundingBoxes?: ReadonlyArray<GooglePrivacyDlpV2BoundingBox>;
}

export const GooglePrivacyDlpV2ImageLocation: Schema.Schema<GooglePrivacyDlpV2ImageLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    boundingBoxes: Schema.optional(Schema.Array(GooglePrivacyDlpV2BoundingBox)),
  }).annotate({ identifier: "GooglePrivacyDlpV2ImageLocation" });

export interface GooglePrivacyDlpV2DocumentLocation {
  /** Offset of the line, from the beginning of the file, where the finding is located. */
  fileOffset?: string;
}

export const GooglePrivacyDlpV2DocumentLocation: Schema.Schema<GooglePrivacyDlpV2DocumentLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DocumentLocation" });

export interface GooglePrivacyDlpV2KeyValueMetadataLabel {
  /** The metadata key. The format depends on the source of the metadata. Example: - `MSIP_Label_122709e3-8f6b-4860-985f-7f722a94f61e_Enabled` (a Microsoft Purview Information Protection key example) */
  key?: string;
}

export const GooglePrivacyDlpV2KeyValueMetadataLabel: Schema.Schema<GooglePrivacyDlpV2KeyValueMetadataLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2KeyValueMetadataLabel" });

export interface GooglePrivacyDlpV2StorageMetadataLabel {
  /** Label name. */
  key?: string;
}

export const GooglePrivacyDlpV2StorageMetadataLabel: Schema.Schema<GooglePrivacyDlpV2StorageMetadataLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2StorageMetadataLabel" });

export interface GooglePrivacyDlpV2MetadataLocation {
  /** Metadata key that contains the finding. */
  keyValueMetadataLabel?: GooglePrivacyDlpV2KeyValueMetadataLabel;
  /** Storage metadata. */
  storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;
  /** Type of metadata containing the finding. */
  type?:
    | "METADATATYPE_UNSPECIFIED"
    | "STORAGE_METADATA"
    | "CONTENT_METADATA"
    | "CLIENT_PROVIDED_METADATA"
    | (string & {});
}

export const GooglePrivacyDlpV2MetadataLocation: Schema.Schema<GooglePrivacyDlpV2MetadataLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyValueMetadataLabel: Schema.optional(
      GooglePrivacyDlpV2KeyValueMetadataLabel,
    ),
    storageLabel: Schema.optional(GooglePrivacyDlpV2StorageMetadataLabel),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2MetadataLocation" });

export interface GooglePrivacyDlpV2ContentLocation {
  /** Location within a row or record of a database table. */
  recordLocation?: GooglePrivacyDlpV2RecordLocation;
  /** Location within an image's pixels. */
  imageLocation?: GooglePrivacyDlpV2ImageLocation;
  /** Finding container version, if available ("generation" for Cloud Storage). */
  containerVersion?: string;
  /** Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document). */
  containerName?: string;
  /** Location data for document files. */
  documentLocation?: GooglePrivacyDlpV2DocumentLocation;
  /** Location within the metadata for inspected content. */
  metadataLocation?: GooglePrivacyDlpV2MetadataLocation;
  /** Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn't populated. */
  containerTimestamp?: string;
}

export const GooglePrivacyDlpV2ContentLocation: Schema.Schema<GooglePrivacyDlpV2ContentLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recordLocation: Schema.optional(GooglePrivacyDlpV2RecordLocation),
    imageLocation: Schema.optional(GooglePrivacyDlpV2ImageLocation),
    containerVersion: Schema.optional(Schema.String),
    containerName: Schema.optional(Schema.String),
    documentLocation: Schema.optional(GooglePrivacyDlpV2DocumentLocation),
    metadataLocation: Schema.optional(GooglePrivacyDlpV2MetadataLocation),
    containerTimestamp: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ContentLocation" });

export interface GooglePrivacyDlpV2Location {
  /** Unicode character offsets delimiting the finding. These are relative to the finding's containing element. Provided when the content is text. */
  codepointRange?: GooglePrivacyDlpV2Range;
  /** List of nested objects pointing to the precise location of the finding within the file or record. */
  contentLocations?: ReadonlyArray<GooglePrivacyDlpV2ContentLocation>;
  /** Information about the container where this finding occurred, if available. */
  container?: GooglePrivacyDlpV2Container;
  /** Zero-based byte offsets delimiting the finding. These are relative to the finding's containing element. Note that when the content is not textual, this references the UTF-8 encoded textual representation of the content. Omitted if content is an image. */
  byteRange?: GooglePrivacyDlpV2Range;
}

export const GooglePrivacyDlpV2Location: Schema.Schema<GooglePrivacyDlpV2Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    codepointRange: Schema.optional(GooglePrivacyDlpV2Range),
    contentLocations: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ContentLocation),
    ),
    container: Schema.optional(GooglePrivacyDlpV2Container),
    byteRange: Schema.optional(GooglePrivacyDlpV2Range),
  }).annotate({ identifier: "GooglePrivacyDlpV2Location" });

export interface GooglePrivacyDlpV2CancelDlpJobRequest {}

export const GooglePrivacyDlpV2CancelDlpJobRequest: Schema.Schema<GooglePrivacyDlpV2CancelDlpJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2CancelDlpJobRequest",
  });

export interface GooglePrivacyDlpV2DataProfilePubSubMessage {
  /** If `DetailLevel` is `FILE_STORE_PROFILE` this will be fully populated. Otherwise, if `DetailLevel` is `RESOURCE_NAME`, then only `name` and `file_store_path` will be populated. */
  fileStoreProfile?: GooglePrivacyDlpV2FileStoreDataProfile;
  /** The event that caused the Pub/Sub message to be sent. */
  event?:
    | "EVENT_TYPE_UNSPECIFIED"
    | "NEW_PROFILE"
    | "CHANGED_PROFILE"
    | "SCORE_INCREASED"
    | "ERROR_CHANGED"
    | (string & {});
  /** If `DetailLevel` is `TABLE_PROFILE` this will be fully populated. Otherwise, if `DetailLevel` is `RESOURCE_NAME`, then only `name` and `full_resource` will be populated. */
  profile?: GooglePrivacyDlpV2TableDataProfile;
}

export const GooglePrivacyDlpV2DataProfilePubSubMessage: Schema.Schema<GooglePrivacyDlpV2DataProfilePubSubMessage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileStoreProfile: Schema.optional(GooglePrivacyDlpV2FileStoreDataProfile),
    event: Schema.optional(Schema.String),
    profile: Schema.optional(GooglePrivacyDlpV2TableDataProfile),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfilePubSubMessage" });

export interface GooglePrivacyDlpV2CreateJobTriggerRequest {
  /** Required. The JobTrigger to create. */
  jobTrigger?: GooglePrivacyDlpV2JobTrigger;
  /** The trigger id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
  triggerId?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
}

export const GooglePrivacyDlpV2CreateJobTriggerRequest: Schema.Schema<GooglePrivacyDlpV2CreateJobTriggerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobTrigger: Schema.optional(GooglePrivacyDlpV2JobTrigger),
    triggerId: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CreateJobTriggerRequest" });

export interface GooglePrivacyDlpV2ProjectDataProfile {
  /** The sensitivity score of this project. */
  sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
  /** The last time the profile was generated. */
  profileLastGenerated?: string;
  /** Success or error status of the last attempt to profile the project. */
  profileStatus?: GooglePrivacyDlpV2ProfileStatus;
  /** The data risk level of this project. */
  dataRiskLevel?: GooglePrivacyDlpV2DataRiskLevel;
  /** The number of file store data profiles generated for this project. */
  fileStoreDataProfileCount?: string;
  /** Project ID or account that was profiled. */
  projectId?: string;
  /** The resource name of the profile. */
  name?: string;
  /** The number of table data profiles generated for this project. */
  tableDataProfileCount?: string;
}

export const GooglePrivacyDlpV2ProjectDataProfile: Schema.Schema<GooglePrivacyDlpV2ProjectDataProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sensitivityScore: Schema.optional(GooglePrivacyDlpV2SensitivityScore),
    profileLastGenerated: Schema.optional(Schema.String),
    profileStatus: Schema.optional(GooglePrivacyDlpV2ProfileStatus),
    dataRiskLevel: Schema.optional(GooglePrivacyDlpV2DataRiskLevel),
    fileStoreDataProfileCount: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    tableDataProfileCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ProjectDataProfile" });

export interface GooglePrivacyDlpV2ListProjectDataProfilesResponse {
  /** List of data profiles. */
  projectDataProfiles?: ReadonlyArray<GooglePrivacyDlpV2ProjectDataProfile>;
  /** The next page token. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListProjectDataProfilesResponse: Schema.Schema<GooglePrivacyDlpV2ListProjectDataProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectDataProfiles: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ProjectDataProfile),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2ListProjectDataProfilesResponse",
  });

export interface GooglePrivacyDlpV2RecordTransformation {
  /** Findings container modification timestamp, if applicable. */
  containerTimestamp?: string;
  /** For record transformations, provide a field. */
  fieldId?: GooglePrivacyDlpV2FieldId;
  /** Container version, if available ("generation" for Cloud Storage). */
  containerVersion?: string;
}

export const GooglePrivacyDlpV2RecordTransformation: Schema.Schema<GooglePrivacyDlpV2RecordTransformation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerTimestamp: Schema.optional(Schema.String),
    fieldId: Schema.optional(GooglePrivacyDlpV2FieldId),
    containerVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2RecordTransformation" });

export interface GooglePrivacyDlpV2TransformationLocation {
  /** Information about the functionality of the container where this finding occurred, if available. */
  containerType?:
    | "TRANSFORM_UNKNOWN_CONTAINER"
    | "TRANSFORM_BODY"
    | "TRANSFORM_METADATA"
    | "TRANSFORM_TABLE"
    | (string & {});
  /** For infotype transformations, link to the corresponding findings ID so that location information does not need to be duplicated. Each findings ID correlates to an entry in the findings output table, this table only gets created when users specify to save findings (add the save findings action to the request). */
  findingId?: string;
  /** For record transformations, provide a field and container information. */
  recordTransformation?: GooglePrivacyDlpV2RecordTransformation;
}

export const GooglePrivacyDlpV2TransformationLocation: Schema.Schema<GooglePrivacyDlpV2TransformationLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerType: Schema.optional(Schema.String),
    findingId: Schema.optional(Schema.String),
    recordTransformation: Schema.optional(
      GooglePrivacyDlpV2RecordTransformation,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationLocation" });

export interface GooglePrivacyDlpV2TransformationResultStatus {
  /** Detailed error codes and messages */
  details?: GoogleRpcStatus;
  /** Transformation result status type, this will be either SUCCESS, or it will be the reason for why the transformation was not completely successful. */
  resultStatusType?:
    | "STATE_TYPE_UNSPECIFIED"
    | "INVALID_TRANSFORM"
    | "BIGQUERY_MAX_ROW_SIZE_EXCEEDED"
    | "METADATA_UNRETRIEVABLE"
    | "SUCCESS"
    | (string & {});
}

export const GooglePrivacyDlpV2TransformationResultStatus: Schema.Schema<GooglePrivacyDlpV2TransformationResultStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(GoogleRpcStatus),
    resultStatusType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationResultStatus" });

export interface GooglePrivacyDlpV2TransformationDescription {
  /** A description of the transformation. This is empty for a RECORD_SUPPRESSION, or is the output of calling toString() on the `PrimitiveTransformation` protocol buffer message for any other type of transformation. */
  description?: string;
  /** The transformation type. */
  type?:
    | "TRANSFORMATION_TYPE_UNSPECIFIED"
    | "RECORD_SUPPRESSION"
    | "REPLACE_VALUE"
    | "REPLACE_DICTIONARY"
    | "REDACT"
    | "CHARACTER_MASK"
    | "CRYPTO_REPLACE_FFX_FPE"
    | "FIXED_SIZE_BUCKETING"
    | "BUCKETING"
    | "REPLACE_WITH_INFO_TYPE"
    | "TIME_PART"
    | "CRYPTO_HASH"
    | "DATE_SHIFT"
    | "CRYPTO_DETERMINISTIC_CONFIG"
    | "REDACT_IMAGE"
    | (string & {});
  /** Set if the transformation was limited to a specific `InfoType`. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** A human-readable string representation of the `RecordCondition` corresponding to this transformation. Set if a `RecordCondition` was used to determine whether or not to apply this transformation. Examples: * (age_field > 85) * (age_field <= 18) * (zip_field exists) * (zip_field == 01234) && (city_field != "Springville") * (zip_field == 01234) && (age_field <= 18) && (city_field exists) */
  condition?: string;
}

export const GooglePrivacyDlpV2TransformationDescription: Schema.Schema<GooglePrivacyDlpV2TransformationDescription> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    condition: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationDescription" });

export interface GooglePrivacyDlpV2TransformationDetails {
  /** The precise location of the transformed content in the original container. */
  transformationLocation?: GooglePrivacyDlpV2TransformationLocation;
  /** Status of the transformation, if transformation was not successful, this will specify what caused it to fail, otherwise it will show that the transformation was successful. */
  statusDetails?: GooglePrivacyDlpV2TransformationResultStatus;
  /** Description of transformation. This would only contain more than one element if there were multiple matching transformations and which one to apply was ambiguous. Not set for states that contain no transformation, currently only state that contains no transformation is TransformationResultStateType.METADATA_UNRETRIEVABLE. */
  transformation?: ReadonlyArray<GooglePrivacyDlpV2TransformationDescription>;
  /** The number of bytes that were transformed. If transformation was unsuccessful or did not take place because there was no content to transform, this will be zero. */
  transformedBytes?: string;
  /** The name of the job that completed the transformation. */
  resourceName?: string;
  /** The top level name of the container where the transformation is located (this will be the source file name or table name). */
  containerName?: string;
}

export const GooglePrivacyDlpV2TransformationDetails: Schema.Schema<GooglePrivacyDlpV2TransformationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformationLocation: Schema.optional(
      GooglePrivacyDlpV2TransformationLocation,
    ),
    statusDetails: Schema.optional(
      GooglePrivacyDlpV2TransformationResultStatus,
    ),
    transformation: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2TransformationDescription),
    ),
    transformedBytes: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    containerName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2TransformationDetails" });

export interface GooglePrivacyDlpV2ActionDetails {
  /** Outcome of a de-identification action. */
  deidentifyDetails?: GooglePrivacyDlpV2DeidentifyDataSourceDetails;
}

export const GooglePrivacyDlpV2ActionDetails: Schema.Schema<GooglePrivacyDlpV2ActionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deidentifyDetails: Schema.optional(
      GooglePrivacyDlpV2DeidentifyDataSourceDetails,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ActionDetails" });

export interface GooglePrivacyDlpV2DlpJob {
  /** The type of job. */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
  /** State of a job. */
  state?:
    | "JOB_STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "DONE"
    | "CANCELED"
    | "FAILED"
    | "ACTIVE"
    | (string & {});
  /** Time when the job started. */
  startTime?: string;
  /** Time when the job finished. */
  endTime?: string;
  /** Time when the job was last modified by the system. */
  lastModified?: string;
  /** A stream of errors encountered running the job. */
  errors?: ReadonlyArray<GooglePrivacyDlpV2Error>;
  /** Time when the job was created. */
  createTime?: string;
  /** If created by a job trigger, the resource name of the trigger that instantiated the job. */
  jobTriggerName?: string;
  /** Events that should occur after the job has completed. */
  actionDetails?: ReadonlyArray<GooglePrivacyDlpV2ActionDetails>;
  /** The server-assigned name. */
  name?: string;
  /** Results from analyzing risk of a data source. */
  riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;
  /** Results from inspecting a data source. */
  inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;
}

export const GooglePrivacyDlpV2DlpJob: Schema.Schema<GooglePrivacyDlpV2DlpJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    lastModified: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(GooglePrivacyDlpV2Error)),
    createTime: Schema.optional(Schema.String),
    jobTriggerName: Schema.optional(Schema.String),
    actionDetails: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2ActionDetails),
    ),
    name: Schema.optional(Schema.String),
    riskDetails: Schema.optional(
      GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails,
    ),
    inspectDetails: Schema.optional(GooglePrivacyDlpV2InspectDataSourceDetails),
  }).annotate({ identifier: "GooglePrivacyDlpV2DlpJob" });

export interface GooglePrivacyDlpV2ListDeidentifyTemplatesResponse {
  /** List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest. */
  deidentifyTemplates?: ReadonlyArray<GooglePrivacyDlpV2DeidentifyTemplate>;
  /** If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListDeidentifyTemplatesResponse: Schema.Schema<GooglePrivacyDlpV2ListDeidentifyTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deidentifyTemplates: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DeidentifyTemplate),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2ListDeidentifyTemplatesResponse",
  });

export interface GooglePrivacyDlpV2ActivateJobTriggerRequest {}

export const GooglePrivacyDlpV2ActivateJobTriggerRequest: Schema.Schema<GooglePrivacyDlpV2ActivateJobTriggerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2ActivateJobTriggerRequest",
  });

export interface GooglePrivacyDlpV2CreateDiscoveryConfigRequest {
  /** The config ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
  configId?: string;
  /** Required. The DiscoveryConfig to create. */
  discoveryConfig?: GooglePrivacyDlpV2DiscoveryConfig;
}

export const GooglePrivacyDlpV2CreateDiscoveryConfigRequest: Schema.Schema<GooglePrivacyDlpV2CreateDiscoveryConfigRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configId: Schema.optional(Schema.String),
    discoveryConfig: Schema.optional(GooglePrivacyDlpV2DiscoveryConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2CreateDiscoveryConfigRequest" });

export interface GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest {
  /** New DeidentifyTemplate value. */
  deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
  /** Mask to control which fields get updated. */
  updateMask?: string;
}

export const GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest: Schema.Schema<GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deidentifyTemplate: Schema.optional(GooglePrivacyDlpV2DeidentifyTemplate),
    updateMask: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest",
  });

export interface GooglePrivacyDlpV2CreateDlpJobRequest {
  /** An inspection job scans a storage repository for InfoTypes. */
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
  /** A risk analysis job calculates re-identification risk metrics for a BigQuery table. */
  riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one. */
  jobId?: string;
}

export const GooglePrivacyDlpV2CreateDlpJobRequest: Schema.Schema<GooglePrivacyDlpV2CreateDlpJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectJob: Schema.optional(GooglePrivacyDlpV2InspectJobConfig),
    riskJob: Schema.optional(GooglePrivacyDlpV2RiskAnalysisJobConfig),
    locationId: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2CreateDlpJobRequest" });

export interface GooglePrivacyDlpV2DeidentifyContentRequest {
  /** Configuration for the de-identification of the content item. Items specified here will override the template referenced by the deidentify_template_name argument. */
  deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
  /** Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
  inspectTemplateName?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
  deidentifyTemplateName?: string;
  /** Configuration for the inspector. Items specified here will override the template referenced by the inspect_template_name argument. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
  /** The item to de-identify. Will be treated as text. This value must be of type Table if your deidentify_config is a RecordTransformations object. */
  item?: GooglePrivacyDlpV2ContentItem;
}

export const GooglePrivacyDlpV2DeidentifyContentRequest: Schema.Schema<GooglePrivacyDlpV2DeidentifyContentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deidentifyConfig: Schema.optional(GooglePrivacyDlpV2DeidentifyConfig),
    inspectTemplateName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    deidentifyTemplateName: Schema.optional(Schema.String),
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
    item: Schema.optional(GooglePrivacyDlpV2ContentItem),
  }).annotate({ identifier: "GooglePrivacyDlpV2DeidentifyContentRequest" });

export interface GooglePrivacyDlpV2ListJobTriggersResponse {
  /** List of triggeredJobs, up to page_size in ListJobTriggersRequest. */
  jobTriggers?: ReadonlyArray<GooglePrivacyDlpV2JobTrigger>;
  /** If the next page is available then this value is the next page token to be used in the following ListJobTriggers request. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListJobTriggersResponse: Schema.Schema<GooglePrivacyDlpV2ListJobTriggersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobTriggers: Schema.optional(Schema.Array(GooglePrivacyDlpV2JobTrigger)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListJobTriggersResponse" });

export interface GooglePrivacyDlpV2DateTime {
  /** Time of day */
  time?: GoogleTypeTimeOfDay;
  /** Time zone */
  timeZone?: GooglePrivacyDlpV2TimeZone;
  /** One or more of the following must be set. Must be a valid date or time value. */
  date?: GoogleTypeDate;
  /** Day of week */
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

export const GooglePrivacyDlpV2DateTime: Schema.Schema<GooglePrivacyDlpV2DateTime> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(GoogleTypeTimeOfDay),
    timeZone: Schema.optional(GooglePrivacyDlpV2TimeZone),
    date: Schema.optional(GoogleTypeDate),
    dayOfWeek: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2DateTime" });

export interface GooglePrivacyDlpV2QuoteInfo {
  /** The date time indicated by the quote. */
  dateTime?: GooglePrivacyDlpV2DateTime;
}

export const GooglePrivacyDlpV2QuoteInfo: Schema.Schema<GooglePrivacyDlpV2QuoteInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dateTime: Schema.optional(GooglePrivacyDlpV2DateTime),
  }).annotate({ identifier: "GooglePrivacyDlpV2QuoteInfo" });

export interface GooglePrivacyDlpV2Finding {
  /** The type of content that might have been found. Provided if `excluded_types` is false. */
  infoType?: GooglePrivacyDlpV2InfoType;
  /** Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings. */
  name?: string;
  /** The labels associated with this `Finding`. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"` */
  labels?: Record<string, string>;
  /** Time the job started that produced this finding. */
  jobCreateTime?: string;
  /** Confidence of how likely it is that the `info_type` is correct. */
  likelihood?:
    | "LIKELIHOOD_UNSPECIFIED"
    | "VERY_UNLIKELY"
    | "UNLIKELY"
    | "POSSIBLE"
    | "LIKELY"
    | "VERY_LIKELY"
    | (string & {});
  /** The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted. */
  quote?: string;
  /** Timestamp when finding was detected. */
  createTime?: string;
  /** The unique finding id. */
  findingId?: string;
  /** Where the content was found. */
  location?: GooglePrivacyDlpV2Location;
  /** Contains data parsed from quotes. Only populated if include_quote was set to true and a supported infoType was requested. Currently supported infoTypes: DATE, DATE_OF_BIRTH and TIME. */
  quoteInfo?: GooglePrivacyDlpV2QuoteInfo;
  /** The job that stored the finding. */
  resourceName?: string;
  /** The job that stored the finding. */
  jobName?: string;
  /** Job trigger name, if applicable, for this finding. */
  triggerName?: string;
}

export const GooglePrivacyDlpV2Finding: Schema.Schema<GooglePrivacyDlpV2Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoType: Schema.optional(GooglePrivacyDlpV2InfoType),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    jobCreateTime: Schema.optional(Schema.String),
    likelihood: Schema.optional(Schema.String),
    quote: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    findingId: Schema.optional(Schema.String),
    location: Schema.optional(GooglePrivacyDlpV2Location),
    quoteInfo: Schema.optional(GooglePrivacyDlpV2QuoteInfo),
    resourceName: Schema.optional(Schema.String),
    jobName: Schema.optional(Schema.String),
    triggerName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2Finding" });

export interface GooglePrivacyDlpV2ListDlpJobsResponse {
  /** A list of DlpJobs that matches the specified filter in the request. */
  jobs?: ReadonlyArray<GooglePrivacyDlpV2DlpJob>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListDlpJobsResponse: Schema.Schema<GooglePrivacyDlpV2ListDlpJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobs: Schema.optional(Schema.Array(GooglePrivacyDlpV2DlpJob)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListDlpJobsResponse" });

export interface GooglePrivacyDlpV2DataProfileFindingRecordLocation {
  /** Field ID of the column containing the finding. */
  field?: GooglePrivacyDlpV2FieldId;
}

export const GooglePrivacyDlpV2DataProfileFindingRecordLocation: Schema.Schema<GooglePrivacyDlpV2DataProfileFindingRecordLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(GooglePrivacyDlpV2FieldId),
  }).annotate({
    identifier: "GooglePrivacyDlpV2DataProfileFindingRecordLocation",
  });

export interface GooglePrivacyDlpV2DataProfileFindingLocation {
  /** Name of the container where the finding is located. The top-level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: `{project_id}:{dataset_id}.{table_id}` * Cloud Storage files: `gs://{bucket}/{path}` */
  containerName?: string;
  /** Location of a finding within a resource that produces a table data profile. */
  dataProfileFindingRecordLocation?: GooglePrivacyDlpV2DataProfileFindingRecordLocation;
}

export const GooglePrivacyDlpV2DataProfileFindingLocation: Schema.Schema<GooglePrivacyDlpV2DataProfileFindingLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    containerName: Schema.optional(Schema.String),
    dataProfileFindingRecordLocation: Schema.optional(
      GooglePrivacyDlpV2DataProfileFindingRecordLocation,
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileFindingLocation" });

export interface GooglePrivacyDlpV2ListInfoTypesResponse {
  /** Set of sensitive infoTypes. */
  infoTypes?: ReadonlyArray<GooglePrivacyDlpV2InfoTypeDescription>;
}

export const GooglePrivacyDlpV2ListInfoTypesResponse: Schema.Schema<GooglePrivacyDlpV2ListInfoTypesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infoTypes: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InfoTypeDescription),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListInfoTypesResponse" });

export interface GooglePrivacyDlpV2InspectResult {
  /** List of findings for an item. */
  findings?: ReadonlyArray<GooglePrivacyDlpV2Finding>;
  /** If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches. */
  findingsTruncated?: boolean;
}

export const GooglePrivacyDlpV2InspectResult: Schema.Schema<GooglePrivacyDlpV2InspectResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findings: Schema.optional(Schema.Array(GooglePrivacyDlpV2Finding)),
    findingsTruncated: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectResult" });

export interface GooglePrivacyDlpV2RedactImageResponse {
  /** If an image was being inspected and the InspectConfig's include_quote was set to true, then this field will include all text, if any, that was found in the image. */
  extractedText?: string;
  /** The redacted image. The type will be the same as the original image. */
  redactedImage?: string;
  /** The findings. Populated when include_findings in the request is true. */
  inspectResult?: GooglePrivacyDlpV2InspectResult;
}

export const GooglePrivacyDlpV2RedactImageResponse: Schema.Schema<GooglePrivacyDlpV2RedactImageResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extractedText: Schema.optional(Schema.String),
    redactedImage: Schema.optional(Schema.String),
    inspectResult: Schema.optional(GooglePrivacyDlpV2InspectResult),
  }).annotate({ identifier: "GooglePrivacyDlpV2RedactImageResponse" });

export interface GooglePrivacyDlpV2DeidentifyContentResponse {
  /** The de-identified item. */
  item?: GooglePrivacyDlpV2ContentItem;
  /** An overview of the changes that were made on the `item`. */
  overview?: GooglePrivacyDlpV2TransformationOverview;
}

export const GooglePrivacyDlpV2DeidentifyContentResponse: Schema.Schema<GooglePrivacyDlpV2DeidentifyContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(GooglePrivacyDlpV2ContentItem),
    overview: Schema.optional(GooglePrivacyDlpV2TransformationOverview),
  }).annotate({ identifier: "GooglePrivacyDlpV2DeidentifyContentResponse" });

export interface GooglePrivacyDlpV2ReidentifyContentResponse {
  /** The re-identified item. */
  item?: GooglePrivacyDlpV2ContentItem;
  /** An overview of the changes that were made to the `item`. */
  overview?: GooglePrivacyDlpV2TransformationOverview;
}

export const GooglePrivacyDlpV2ReidentifyContentResponse: Schema.Schema<GooglePrivacyDlpV2ReidentifyContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(GooglePrivacyDlpV2ContentItem),
    overview: Schema.optional(GooglePrivacyDlpV2TransformationOverview),
  }).annotate({ identifier: "GooglePrivacyDlpV2ReidentifyContentResponse" });

export interface GooglePrivacyDlpV2CreateConnectionRequest {
  /** Required. The connection resource. */
  connection?: GooglePrivacyDlpV2Connection;
}

export const GooglePrivacyDlpV2CreateConnectionRequest: Schema.Schema<GooglePrivacyDlpV2CreateConnectionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(GooglePrivacyDlpV2Connection),
  }).annotate({ identifier: "GooglePrivacyDlpV2CreateConnectionRequest" });

export interface GooglePrivacyDlpV2FinishDlpJobRequest {}

export const GooglePrivacyDlpV2FinishDlpJobRequest: Schema.Schema<GooglePrivacyDlpV2FinishDlpJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2FinishDlpJobRequest",
  });

export interface GooglePrivacyDlpV2ListInspectTemplatesResponse {
  /** List of inspectTemplates, up to page_size in ListInspectTemplatesRequest. */
  inspectTemplates?: ReadonlyArray<GooglePrivacyDlpV2InspectTemplate>;
  /** If the next page is available then the next page token to be used in the following ListInspectTemplates request. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListInspectTemplatesResponse: Schema.Schema<GooglePrivacyDlpV2ListInspectTemplatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectTemplates: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2InspectTemplate),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListInspectTemplatesResponse" });

export interface GooglePrivacyDlpV2ListDiscoveryConfigsResponse {
  /** If the next page is available then this value is the next page token to be used in the following ListDiscoveryConfigs request. */
  nextPageToken?: string;
  /** List of configs, up to page_size in ListDiscoveryConfigsRequest. */
  discoveryConfigs?: ReadonlyArray<GooglePrivacyDlpV2DiscoveryConfig>;
}

export const GooglePrivacyDlpV2ListDiscoveryConfigsResponse: Schema.Schema<GooglePrivacyDlpV2ListDiscoveryConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    discoveryConfigs: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2DiscoveryConfig),
    ),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListDiscoveryConfigsResponse" });

export interface GooglePrivacyDlpV2UpdateInspectTemplateRequest {
  /** New InspectTemplate value. */
  inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
  /** Mask to control which fields get updated. */
  updateMask?: string;
}

export const GooglePrivacyDlpV2UpdateInspectTemplateRequest: Schema.Schema<GooglePrivacyDlpV2UpdateInspectTemplateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inspectTemplate: Schema.optional(GooglePrivacyDlpV2InspectTemplate),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2UpdateInspectTemplateRequest" });

export interface GooglePrivacyDlpV2UpdateConnectionRequest {
  /** Required. The connection with new values for the relevant fields. */
  connection?: GooglePrivacyDlpV2Connection;
  /** Optional. Mask to control which fields get updated. */
  updateMask?: string;
}

export const GooglePrivacyDlpV2UpdateConnectionRequest: Schema.Schema<GooglePrivacyDlpV2UpdateConnectionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection: Schema.optional(GooglePrivacyDlpV2Connection),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooglePrivacyDlpV2UpdateConnectionRequest" });

export interface GooglePrivacyDlpV2InspectContentRequest {
  /** The item to inspect. */
  item?: GooglePrivacyDlpV2ContentItem;
  /** Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. */
  inspectTemplateName?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Configuration for the inspector. What specified here will override the template referenced by the inspect_template_name argument. */
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;
}

export const GooglePrivacyDlpV2InspectContentRequest: Schema.Schema<GooglePrivacyDlpV2InspectContentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    item: Schema.optional(GooglePrivacyDlpV2ContentItem),
    inspectTemplateName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    inspectConfig: Schema.optional(GooglePrivacyDlpV2InspectConfig),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectContentRequest" });

export interface GooglePrivacyDlpV2SaveToGcsFindingsOutput {
  /** List of findings. */
  findings?: ReadonlyArray<GooglePrivacyDlpV2Finding>;
}

export const GooglePrivacyDlpV2SaveToGcsFindingsOutput: Schema.Schema<GooglePrivacyDlpV2SaveToGcsFindingsOutput> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findings: Schema.optional(Schema.Array(GooglePrivacyDlpV2Finding)),
  }).annotate({ identifier: "GooglePrivacyDlpV2SaveToGcsFindingsOutput" });

export interface GooglePrivacyDlpV2ListTableDataProfilesResponse {
  /** List of data profiles. */
  tableDataProfiles?: ReadonlyArray<GooglePrivacyDlpV2TableDataProfile>;
  /** The next page token. */
  nextPageToken?: string;
}

export const GooglePrivacyDlpV2ListTableDataProfilesResponse: Schema.Schema<GooglePrivacyDlpV2ListTableDataProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tableDataProfiles: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2TableDataProfile),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GooglePrivacyDlpV2ListTableDataProfilesResponse",
  });

export interface GooglePrivacyDlpV2InspectContentResponse {
  /** The findings. */
  result?: GooglePrivacyDlpV2InspectResult;
}

export const GooglePrivacyDlpV2InspectContentResponse: Schema.Schema<GooglePrivacyDlpV2InspectContentResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(GooglePrivacyDlpV2InspectResult),
  }).annotate({ identifier: "GooglePrivacyDlpV2InspectContentResponse" });

export interface GooglePrivacyDlpV2HybridInspectJobTriggerRequest {
  /** The item to inspect. */
  hybridItem?: GooglePrivacyDlpV2HybridContentItem;
}

export const GooglePrivacyDlpV2HybridInspectJobTriggerRequest: Schema.Schema<GooglePrivacyDlpV2HybridInspectJobTriggerRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hybridItem: Schema.optional(GooglePrivacyDlpV2HybridContentItem),
  }).annotate({
    identifier: "GooglePrivacyDlpV2HybridInspectJobTriggerRequest",
  });

export interface GooglePrivacyDlpV2ListFileStoreDataProfilesResponse {
  /** The next page token. */
  nextPageToken?: string;
  /** List of data profiles. */
  fileStoreDataProfiles?: ReadonlyArray<GooglePrivacyDlpV2FileStoreDataProfile>;
}

export const GooglePrivacyDlpV2ListFileStoreDataProfilesResponse: Schema.Schema<GooglePrivacyDlpV2ListFileStoreDataProfilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    fileStoreDataProfiles: Schema.optional(
      Schema.Array(GooglePrivacyDlpV2FileStoreDataProfile),
    ),
  }).annotate({
    identifier: "GooglePrivacyDlpV2ListFileStoreDataProfilesResponse",
  });

export interface GooglePrivacyDlpV2ListConnectionsResponse {
  /** Token to retrieve the next page of results. An empty value means there are no more results. */
  nextPageToken?: string;
  /** List of connections. */
  connections?: ReadonlyArray<GooglePrivacyDlpV2Connection>;
}

export const GooglePrivacyDlpV2ListConnectionsResponse: Schema.Schema<GooglePrivacyDlpV2ListConnectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    connections: Schema.optional(Schema.Array(GooglePrivacyDlpV2Connection)),
  }).annotate({ identifier: "GooglePrivacyDlpV2ListConnectionsResponse" });

export interface GooglePrivacyDlpV2DataProfileFinding {
  /** The [type of content](https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference) that might have been found. */
  infotype?: GooglePrivacyDlpV2InfoType;
  /** How broadly a resource has been shared. */
  resourceVisibility?:
    | "RESOURCE_VISIBILITY_UNSPECIFIED"
    | "RESOURCE_VISIBILITY_PUBLIC"
    | "RESOURCE_VISIBILITY_INCONCLUSIVE"
    | "RESOURCE_VISIBILITY_RESTRICTED"
    | (string & {});
  /** The content that was found. Even if the content is not textual, it may be converted to a textual representation here. If the finding exceeds 4096 bytes in length, the quote may be omitted. */
  quote?: string;
  /** Resource name of the data profile associated with the finding. */
  dataProfileResourceName?: string;
  /** The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) of the resource profiled for this finding. */
  fullResourceName?: string;
  /** The type of the resource that was profiled. */
  dataSourceType?: GooglePrivacyDlpV2DataSourceType;
  /** A unique identifier for the finding. */
  findingId?: string;
  /** Timestamp when the finding was detected. */
  timestamp?: string;
  /** Contains data parsed from quotes. Currently supported infoTypes: DATE, DATE_OF_BIRTH, and TIME. */
  quoteInfo?: GooglePrivacyDlpV2QuoteInfo;
  /** Where the content was found. */
  location?: GooglePrivacyDlpV2DataProfileFindingLocation;
}

export const GooglePrivacyDlpV2DataProfileFinding: Schema.Schema<GooglePrivacyDlpV2DataProfileFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    infotype: Schema.optional(GooglePrivacyDlpV2InfoType),
    resourceVisibility: Schema.optional(Schema.String),
    quote: Schema.optional(Schema.String),
    dataProfileResourceName: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
    dataSourceType: Schema.optional(GooglePrivacyDlpV2DataSourceType),
    findingId: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    quoteInfo: Schema.optional(GooglePrivacyDlpV2QuoteInfo),
    location: Schema.optional(GooglePrivacyDlpV2DataProfileFindingLocation),
  }).annotate({ identifier: "GooglePrivacyDlpV2DataProfileFinding" });

export interface GooglePrivacyDlpV2HybridInspectResponse {}

export const GooglePrivacyDlpV2HybridInspectResponse: Schema.Schema<GooglePrivacyDlpV2HybridInspectResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooglePrivacyDlpV2HybridInspectResponse",
  });

export interface UtilStatusProto {
  /** Detail message copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional string message = 3; */
  message?: string;
  /** copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs */
  space?: string;
  /** copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 canonical_code = 6; */
  canonicalCode?: number;
  /** message_set associates an arbitrary proto message with the status. copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional proto2.bridge.MessageSet message_set = 5; */
  messageSet?: Proto2BridgeMessageSet;
  /** Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 code = 1; */
  code?: number;
}

export const UtilStatusProto: Schema.Schema<UtilStatusProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    space: Schema.optional(Schema.String),
    canonicalCode: Schema.optional(Schema.Number),
    messageSet: Schema.optional(Proto2BridgeMessageSet),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UtilStatusProto" });

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

export interface ListLocationsInfoTypesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT. */
  filter?: string;
  /** The parent resource name. The format of this value is as follows: `locations/{location_id}` */
  parent: string;
  /** BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned. */
  languageCode?: string;
}

export const ListLocationsInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/infoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListLocationsInfoTypesRequest>;

export type ListLocationsInfoTypesResponse =
  GooglePrivacyDlpV2ListInfoTypesResponse;
export const ListLocationsInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInfoTypesResponse;

export type ListLocationsInfoTypesError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more. */
export const listLocationsInfoTypes: API.OperationMethod<
  ListLocationsInfoTypesRequest,
  ListLocationsInfoTypesResponse,
  ListLocationsInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListLocationsInfoTypesRequest,
  output: ListLocationsInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
}

export const GetProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobTriggersRequest>;

export type GetProjectsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2JobTrigger;
export const GetProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type GetProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const getProjectsLocationsJobTriggers: API.OperationMethod<
  GetProjectsLocationsJobTriggersRequest,
  GetProjectsLocationsJobTriggersResponse,
  GetProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobTriggersRequest,
  output: GetProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface HybridInspectProjectsLocationsJobTriggersRequest {
  /** Required. Resource name of the trigger to execute a hybrid inspect on, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2HybridInspectJobTriggerRequest;
}

export const HybridInspectProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GooglePrivacyDlpV2HybridInspectJobTriggerRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:hybridInspect", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<HybridInspectProjectsLocationsJobTriggersRequest>;

export type HybridInspectProjectsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2HybridInspectResponse;
export const HybridInspectProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2HybridInspectResponse;

export type HybridInspectProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger. */
export const hybridInspectProjectsLocationsJobTriggers: API.OperationMethod<
  HybridInspectProjectsLocationsJobTriggersRequest,
  HybridInspectProjectsLocationsJobTriggersResponse,
  HybridInspectProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HybridInspectProjectsLocationsJobTriggersRequest,
  output: HybridInspectProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
}

export const DeleteProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsJobTriggersRequest>;

export type DeleteProjectsLocationsJobTriggersResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const deleteProjectsLocationsJobTriggers: API.OperationMethod<
  DeleteProjectsLocationsJobTriggersRequest,
  DeleteProjectsLocationsJobTriggersResponse,
  DeleteProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobTriggersRequest,
  output: DeleteProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateProjectsLocationsJobTriggersRequest {
  /** Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2ActivateJobTriggerRequest;
}

export const ActivateProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2ActivateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateProjectsLocationsJobTriggersRequest>;

export type ActivateProjectsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2DlpJob;
export const ActivateProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DlpJob;

export type ActivateProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur. */
export const activateProjectsLocationsJobTriggers: API.OperationMethod<
  ActivateProjectsLocationsJobTriggersRequest,
  ActivateProjectsLocationsJobTriggersResponse,
  ActivateProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateProjectsLocationsJobTriggersRequest,
  output: ActivateProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsJobTriggersRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateJobTriggerRequest;
}

export const CreateProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/jobTriggers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsJobTriggersRequest>;

export type CreateProjectsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2JobTrigger;
export const CreateProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type CreateProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const createProjectsLocationsJobTriggers: API.OperationMethod<
  CreateProjectsLocationsJobTriggersRequest,
  CreateProjectsLocationsJobTriggersResponse,
  CreateProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobTriggersRequest,
  output: CreateProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateJobTriggerRequest;
}

export const PatchProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsJobTriggersRequest>;

export type PatchProjectsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2JobTrigger;
export const PatchProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type PatchProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const patchProjectsLocationsJobTriggers: API.OperationMethod<
  PatchProjectsLocationsJobTriggersRequest,
  PatchProjectsLocationsJobTriggersResponse,
  PatchProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsJobTriggersRequest,
  output: PatchProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobTriggersRequest {
  /** The type of jobs. Will use `DlpJobType.INSPECT` if not set. */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
  /** Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls. */
  pageToken?: string;
  /** Size of the page. This value can be limited by a server. */
  pageSize?: number;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. The syntax is based on https://google.aip.dev/160. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status. */
  orderBy?: string;
}

export const ListProjectsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/jobTriggers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobTriggersRequest>;

export type ListProjectsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2ListJobTriggersResponse;
export const ListProjectsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListJobTriggersResponse;

export type ListProjectsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists job triggers. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const listProjectsLocationsJobTriggers: API.PaginatedOperationMethod<
  ListProjectsLocationsJobTriggersRequest,
  ListProjectsLocationsJobTriggersResponse,
  ListProjectsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobTriggersRequest,
  output: ListProjectsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDiscoveryConfigsRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDiscoveryConfigRequest;
}

export const CreateProjectsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateDiscoveryConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/discoveryConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDiscoveryConfigsRequest>;

export type CreateProjectsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2DiscoveryConfig;
export const CreateProjectsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DiscoveryConfig;

export type CreateProjectsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a config for discovery to scan and profile storage. */
export const createProjectsLocationsDiscoveryConfigs: API.OperationMethod<
  CreateProjectsLocationsDiscoveryConfigsRequest,
  CreateProjectsLocationsDiscoveryConfigsResponse,
  CreateProjectsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDiscoveryConfigsRequest,
  output: CreateProjectsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDiscoveryConfigsRequest {
  /** Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateDiscoveryConfigRequest;
}

export const PatchProjectsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateDiscoveryConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDiscoveryConfigsRequest>;

export type PatchProjectsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2DiscoveryConfig;
export const PatchProjectsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DiscoveryConfig;

export type PatchProjectsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a discovery configuration. */
export const patchProjectsLocationsDiscoveryConfigs: API.OperationMethod<
  PatchProjectsLocationsDiscoveryConfigsRequest,
  PatchProjectsLocationsDiscoveryConfigsResponse,
  PatchProjectsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDiscoveryConfigsRequest,
  output: PatchProjectsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDiscoveryConfigsRequest {
  /** Required. Parent resource name. The format of this value is as follows: `projects/{project_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Page token to continue retrieval. Comes from the previous call to ListDiscoveryConfigs. `order_by` field must not change for subsequent calls. */
  pageToken?: string;
  /** Size of the page. This value can be limited by a server. */
  pageSize?: number;
  /** Comma-separated list of config fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `last_run_time`: corresponds to the last time the DiscoveryConfig ran. - `name`: corresponds to the DiscoveryConfig's name. - `status`: corresponds to DiscoveryConfig's status. */
  orderBy?: string;
}

export const ListProjectsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/discoveryConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveryConfigsRequest>;

export type ListProjectsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2ListDiscoveryConfigsResponse;
export const ListProjectsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDiscoveryConfigsResponse;

export type ListProjectsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists discovery configurations. */
export const listProjectsLocationsDiscoveryConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveryConfigsRequest,
  ListProjectsLocationsDiscoveryConfigsResponse,
  ListProjectsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveryConfigsRequest,
  output: ListProjectsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsDiscoveryConfigsRequest {
  /** Required. Resource name of the project and the config, for example `projects/dlp-test-project/discoveryConfigs/53234423`. */
  name: string;
}

export const DeleteProjectsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDiscoveryConfigsRequest>;

export type DeleteProjectsLocationsDiscoveryConfigsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a discovery configuration. */
export const deleteProjectsLocationsDiscoveryConfigs: API.OperationMethod<
  DeleteProjectsLocationsDiscoveryConfigsRequest,
  DeleteProjectsLocationsDiscoveryConfigsResponse,
  DeleteProjectsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDiscoveryConfigsRequest,
  output: DeleteProjectsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDiscoveryConfigsRequest {
  /** Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`. */
  name: string;
}

export const GetProjectsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveryConfigsRequest>;

export type GetProjectsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2DiscoveryConfig;
export const GetProjectsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DiscoveryConfig;

export type GetProjectsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a discovery configuration. */
export const getProjectsLocationsDiscoveryConfigs: API.OperationMethod<
  GetProjectsLocationsDiscoveryConfigsRequest,
  GetProjectsLocationsDiscoveryConfigsResponse,
  GetProjectsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveryConfigsRequest,
  output: GetProjectsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsColumnDataProfilesRequest {
  /** Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a column is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. */
  orderBy?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `table_data_profile_name`: The name of the related table data profile - `project_id`: The Google Cloud project ID (REQUIRED) - `dataset_id`: The BigQuery dataset ID (REQUIRED) - `table_id`: The BigQuery table ID (REQUIRED) - `field_id`: The ID of the BigQuery field - `info_type`: The infotype detected in the resource - `sensitivity_level`: HIGH|MEDIUM|LOW - `data_risk_level`: How much risk is associated with this data - `status_code`: An RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` for project_id, dataset_id, and table_id. Other filters also support `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * project_id = 12345 AND status_code = 1 * project_id = 12345 AND sensitivity_level = HIGH * project_id = 12345 AND info_type = STREET_ADDRESS * profile_last_generated < "2025-01-01T00:00:00.000Z" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Page token to continue retrieval. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsLocationsColumnDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/columnDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsColumnDataProfilesRequest>;

export type ListProjectsLocationsColumnDataProfilesResponse =
  GooglePrivacyDlpV2ListColumnDataProfilesResponse;
export const ListProjectsLocationsColumnDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListColumnDataProfilesResponse;

export type ListProjectsLocationsColumnDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists column data profiles for an organization. */
export const listProjectsLocationsColumnDataProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsColumnDataProfilesRequest,
  ListProjectsLocationsColumnDataProfilesResponse,
  ListProjectsLocationsColumnDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsColumnDataProfilesRequest,
  output: ListProjectsLocationsColumnDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsColumnDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/columnDataProfiles/53234423`. */
  name: string;
}

export const GetProjectsLocationsColumnDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsColumnDataProfilesRequest>;

export type GetProjectsLocationsColumnDataProfilesResponse =
  GooglePrivacyDlpV2ColumnDataProfile;
export const GetProjectsLocationsColumnDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ColumnDataProfile;

export type GetProjectsLocationsColumnDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a column data profile. */
export const getProjectsLocationsColumnDataProfiles: API.OperationMethod<
  GetProjectsLocationsColumnDataProfilesRequest,
  GetProjectsLocationsColumnDataProfilesResponse,
  GetProjectsLocationsColumnDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsColumnDataProfilesRequest,
  output: GetProjectsLocationsColumnDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const GetProjectsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsStoredInfoTypesRequest>;

export type GetProjectsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const GetProjectsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type GetProjectsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const getProjectsLocationsStoredInfoTypes: API.OperationMethod<
  GetProjectsLocationsStoredInfoTypesRequest,
  GetProjectsLocationsStoredInfoTypesResponse,
  GetProjectsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsStoredInfoTypesRequest,
  output: GetProjectsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const DeleteProjectsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsStoredInfoTypesRequest>;

export type DeleteProjectsLocationsStoredInfoTypesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const deleteProjectsLocationsStoredInfoTypes: API.OperationMethod<
  DeleteProjectsLocationsStoredInfoTypesRequest,
  DeleteProjectsLocationsStoredInfoTypesResponse,
  DeleteProjectsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsStoredInfoTypesRequest,
  output: DeleteProjectsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsStoredInfoTypesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
}

export const CreateProjectsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/storedInfoTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsStoredInfoTypesRequest>;

export type CreateProjectsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const CreateProjectsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type CreateProjectsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const createProjectsLocationsStoredInfoTypes: API.OperationMethod<
  CreateProjectsLocationsStoredInfoTypesRequest,
  CreateProjectsLocationsStoredInfoTypesResponse,
  CreateProjectsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsStoredInfoTypesRequest,
  output: CreateProjectsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsStoredInfoTypesRequest {
  /** Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
}

export const PatchProjectsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsStoredInfoTypesRequest>;

export type PatchProjectsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const PatchProjectsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type PatchProjectsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const patchProjectsLocationsStoredInfoTypes: API.OperationMethod<
  PatchProjectsLocationsStoredInfoTypesRequest,
  PatchProjectsLocationsStoredInfoTypesResponse,
  PatchProjectsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsStoredInfoTypesRequest,
  output: PatchProjectsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsStoredInfoTypesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name. */
  orderBy?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/storedInfoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsStoredInfoTypesRequest>;

export type ListProjectsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2ListStoredInfoTypesResponse;
export const ListProjectsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListStoredInfoTypesResponse;

export type ListProjectsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const listProjectsLocationsStoredInfoTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsStoredInfoTypesRequest,
  ListProjectsLocationsStoredInfoTypesResponse,
  ListProjectsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStoredInfoTypesRequest,
  output: ListProjectsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const DeleteProjectsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeidentifyTemplatesRequest>;

export type DeleteProjectsLocationsDeidentifyTemplatesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const deleteProjectsLocationsDeidentifyTemplates: API.OperationMethod<
  DeleteProjectsLocationsDeidentifyTemplatesRequest,
  DeleteProjectsLocationsDeidentifyTemplatesResponse,
  DeleteProjectsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeidentifyTemplatesRequest,
  output: DeleteProjectsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDeidentifyTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest;
}

export const CreateProjectsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GooglePrivacyDlpV2CreateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/deidentifyTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeidentifyTemplatesRequest>;

export type CreateProjectsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const CreateProjectsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type CreateProjectsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const createProjectsLocationsDeidentifyTemplates: API.OperationMethod<
  CreateProjectsLocationsDeidentifyTemplatesRequest,
  CreateProjectsLocationsDeidentifyTemplatesResponse,
  CreateProjectsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeidentifyTemplatesRequest,
  output: CreateProjectsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDeidentifyTemplatesRequest {
  /** Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest;
}

export const PatchProjectsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDeidentifyTemplatesRequest>;

export type PatchProjectsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const PatchProjectsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type PatchProjectsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const patchProjectsLocationsDeidentifyTemplates: API.OperationMethod<
  PatchProjectsLocationsDeidentifyTemplatesRequest,
  PatchProjectsLocationsDeidentifyTemplatesResponse,
  PatchProjectsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDeidentifyTemplatesRequest,
  output: PatchProjectsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDeidentifyTemplatesRequest {
  /** Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
}

export const ListProjectsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/deidentifyTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeidentifyTemplatesRequest>;

export type ListProjectsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;
export const ListProjectsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;

export type ListProjectsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const listProjectsLocationsDeidentifyTemplates: API.PaginatedOperationMethod<
  ListProjectsLocationsDeidentifyTemplatesRequest,
  ListProjectsLocationsDeidentifyTemplatesResponse,
  ListProjectsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeidentifyTemplatesRequest,
  output: ListProjectsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const GetProjectsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeidentifyTemplatesRequest>;

export type GetProjectsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const GetProjectsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type GetProjectsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const getProjectsLocationsDeidentifyTemplates: API.OperationMethod<
  GetProjectsLocationsDeidentifyTemplatesRequest,
  GetProjectsLocationsDeidentifyTemplatesResponse,
  GetProjectsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeidentifyTemplatesRequest,
  output: GetProjectsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsConnectionsRequest {
  /** Optional. Supported field/value: `state` - MISSING|AVAILABLE|ERROR The syntax is based on https://google.aip.dev/160. */
  filter?: string;
  /** Required. Resource name of the organization or project, for example, `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Optional. Number of results per page, max 1000. */
  pageSize?: number;
  /** Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request. */
  pageToken?: string;
}

export const ListProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/connections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionsRequest>;

export type ListProjectsLocationsConnectionsResponse =
  GooglePrivacyDlpV2ListConnectionsResponse;
export const ListProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListConnectionsResponse;

export type ListProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connections in a parent. Use SearchConnections to see all connections within an organization. */
export const listProjectsLocationsConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionsRequest,
  ListProjectsLocationsConnectionsResponse,
  ListProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionsRequest,
  output: ListProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsConnectionsRequest {
  /** Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateConnectionRequest;
}

export const PatchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateConnectionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionsRequest>;

export type PatchProjectsLocationsConnectionsResponse =
  GooglePrivacyDlpV2Connection;
export const PatchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2Connection;

export type PatchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a Connection. */
export const patchProjectsLocationsConnections: API.OperationMethod<
  PatchProjectsLocationsConnectionsRequest,
  PatchProjectsLocationsConnectionsResponse,
  PatchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionsRequest,
  output: PatchProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsConnectionsRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}` */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateConnectionRequest;
}

export const CreateProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateConnectionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/connections", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionsRequest>;

export type CreateProjectsLocationsConnectionsResponse =
  GooglePrivacyDlpV2Connection;
export const CreateProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2Connection;

export type CreateProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a Connection to an external data source. */
export const createProjectsLocationsConnections: API.OperationMethod<
  CreateProjectsLocationsConnectionsRequest,
  CreateProjectsLocationsConnectionsResponse,
  CreateProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionsRequest,
  output: CreateProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsConnectionsRequest {
  /** Required. Resource name of the Connection to be deleted, in the format: `projects/{project}/locations/{location}/connections/{connection}`. */
  name: string;
}

export const DeleteProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionsRequest>;

export type DeleteProjectsLocationsConnectionsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a Connection. */
export const deleteProjectsLocationsConnections: API.OperationMethod<
  DeleteProjectsLocationsConnectionsRequest,
  DeleteProjectsLocationsConnectionsResponse,
  DeleteProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionsRequest,
  output: DeleteProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConnectionsRequest {
  /** Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`. */
  name: string;
}

export const GetProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionsRequest>;

export type GetProjectsLocationsConnectionsResponse =
  GooglePrivacyDlpV2Connection;
export const GetProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2Connection;

export type GetProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a Connection by name. */
export const getProjectsLocationsConnections: API.OperationMethod<
  GetProjectsLocationsConnectionsRequest,
  GetProjectsLocationsConnectionsResponse,
  GetProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionsRequest,
  output: GetProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchProjectsLocationsConnectionsRequest {
  /** Optional. Supported field/value: - `state` - MISSING|AVAILABLE|ERROR The syntax is based on https://google.aip.dev/160. */
  filter?: string;
  /** Required. Resource name of the organization or project with a wildcard location, for example, `organizations/433245324/locations/-` or `projects/project-id/locations/-`. */
  parent: string;
  /** Optional. Number of results per page, max 1000. */
  pageSize?: number;
  /** Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request. */
  pageToken?: string;
}

export const SearchProjectsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/connections:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchProjectsLocationsConnectionsRequest>;

export type SearchProjectsLocationsConnectionsResponse =
  GooglePrivacyDlpV2SearchConnectionsResponse;
export const SearchProjectsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2SearchConnectionsResponse;

export type SearchProjectsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches for Connections in a parent. */
export const searchProjectsLocationsConnections: API.PaginatedOperationMethod<
  SearchProjectsLocationsConnectionsRequest,
  SearchProjectsLocationsConnectionsResponse,
  SearchProjectsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchProjectsLocationsConnectionsRequest,
  output: SearchProjectsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsFileStoreDataProfilesRequest {
  /** Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Optional. Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `name` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `name`: The name of the profile. - `create_time`: The time the file store was first created. */
  orderBy?: string;
  /** Optional. Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `project_id`: The Google Cloud project ID - `account_id`: The AWS account ID - `file_store_path`: The path like "gs://bucket" - `data_source_type`: The profile's data source type, like "google/storage/bucket" - `data_storage_location`: The location where the file store's data is stored, like "us-central1" - `sensitivity_level`: HIGH|MODERATE|LOW - `data_risk_level`: HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code`: an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` or `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` * `file_store_path = "gs://mybucket"` * `profile_last_generated < "2025-01-01T00:00:00.000Z"` The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Optional. Page token to continue retrieval. */
  pageToken?: string;
  /** Optional. Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsLocationsFileStoreDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/fileStoreDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsFileStoreDataProfilesRequest>;

export type ListProjectsLocationsFileStoreDataProfilesResponse =
  GooglePrivacyDlpV2ListFileStoreDataProfilesResponse;
export const ListProjectsLocationsFileStoreDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListFileStoreDataProfilesResponse;

export type ListProjectsLocationsFileStoreDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists file store data profiles for an organization. */
export const listProjectsLocationsFileStoreDataProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsFileStoreDataProfilesRequest,
  ListProjectsLocationsFileStoreDataProfilesResponse,
  ListProjectsLocationsFileStoreDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsFileStoreDataProfilesRequest,
  output: ListProjectsLocationsFileStoreDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsFileStoreDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/fileStoreDataProfiles/53234423`. */
  name: string;
}

export const GetProjectsLocationsFileStoreDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsFileStoreDataProfilesRequest>;

export type GetProjectsLocationsFileStoreDataProfilesResponse =
  GooglePrivacyDlpV2FileStoreDataProfile;
export const GetProjectsLocationsFileStoreDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2FileStoreDataProfile;

export type GetProjectsLocationsFileStoreDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a file store data profile. */
export const getProjectsLocationsFileStoreDataProfiles: API.OperationMethod<
  GetProjectsLocationsFileStoreDataProfilesRequest,
  GetProjectsLocationsFileStoreDataProfilesResponse,
  GetProjectsLocationsFileStoreDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsFileStoreDataProfilesRequest,
  output: GetProjectsLocationsFileStoreDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsFileStoreDataProfilesRequest {
  /** Required. Resource name of the file store data profile. */
  name: string;
}

export const DeleteProjectsLocationsFileStoreDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsFileStoreDataProfilesRequest>;

export type DeleteProjectsLocationsFileStoreDataProfilesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsFileStoreDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsFileStoreDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration. */
export const deleteProjectsLocationsFileStoreDataProfiles: API.OperationMethod<
  DeleteProjectsLocationsFileStoreDataProfilesRequest,
  DeleteProjectsLocationsFileStoreDataProfilesResponse,
  DeleteProjectsLocationsFileStoreDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsFileStoreDataProfilesRequest,
  output: DeleteProjectsLocationsFileStoreDataProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsInspectTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateInspectTemplateRequest;
}

export const CreateProjectsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/inspectTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsInspectTemplatesRequest>;

export type CreateProjectsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const CreateProjectsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type CreateProjectsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const createProjectsLocationsInspectTemplates: API.OperationMethod<
  CreateProjectsLocationsInspectTemplatesRequest,
  CreateProjectsLocationsInspectTemplatesResponse,
  CreateProjectsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsInspectTemplatesRequest,
  output: CreateProjectsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsInspectTemplatesRequest {
  /** Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateInspectTemplateRequest;
}

export const PatchProjectsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsInspectTemplatesRequest>;

export type PatchProjectsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const PatchProjectsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type PatchProjectsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const patchProjectsLocationsInspectTemplates: API.OperationMethod<
  PatchProjectsLocationsInspectTemplatesRequest,
  PatchProjectsLocationsInspectTemplatesResponse,
  PatchProjectsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsInspectTemplatesRequest,
  output: PatchProjectsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsInspectTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/inspectTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInspectTemplatesRequest>;

export type ListProjectsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2ListInspectTemplatesResponse;
export const ListProjectsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInspectTemplatesResponse;

export type ListProjectsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const listProjectsLocationsInspectTemplates: API.PaginatedOperationMethod<
  ListProjectsLocationsInspectTemplatesRequest,
  ListProjectsLocationsInspectTemplatesResponse,
  ListProjectsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsInspectTemplatesRequest,
  output: ListProjectsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const DeleteProjectsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsInspectTemplatesRequest>;

export type DeleteProjectsLocationsInspectTemplatesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const deleteProjectsLocationsInspectTemplates: API.OperationMethod<
  DeleteProjectsLocationsInspectTemplatesRequest,
  DeleteProjectsLocationsInspectTemplatesResponse,
  DeleteProjectsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsInspectTemplatesRequest,
  output: DeleteProjectsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const GetProjectsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInspectTemplatesRequest>;

export type GetProjectsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const GetProjectsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type GetProjectsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const getProjectsLocationsInspectTemplates: API.OperationMethod<
  GetProjectsLocationsInspectTemplatesRequest,
  GetProjectsLocationsInspectTemplatesResponse,
  GetProjectsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsInspectTemplatesRequest,
  output: GetProjectsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsDlpJobsRequest {
  /** Required. The name of the DlpJob resource. */
  name: string;
}

export const GetProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDlpJobsRequest>;

export type GetProjectsLocationsDlpJobsResponse = GooglePrivacyDlpV2DlpJob;
export const GetProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DlpJob;

export type GetProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const getProjectsLocationsDlpJobs: API.OperationMethod<
  GetProjectsLocationsDlpJobsRequest,
  GetProjectsLocationsDlpJobsResponse,
  GetProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDlpJobsRequest,
  output: GetProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FinishProjectsLocationsDlpJobsRequest {
  /** Required. The name of the DlpJob resource to be finished. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2FinishDlpJobRequest;
}

export const FinishProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2FinishDlpJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:finish", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<FinishProjectsLocationsDlpJobsRequest>;

export type FinishProjectsLocationsDlpJobsResponse = GoogleProtobufEmpty;
export const FinishProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type FinishProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run. */
export const finishProjectsLocationsDlpJobs: API.OperationMethod<
  FinishProjectsLocationsDlpJobsRequest,
  FinishProjectsLocationsDlpJobsResponse,
  FinishProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FinishProjectsLocationsDlpJobsRequest,
  output: FinishProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface HybridInspectProjectsLocationsDlpJobsRequest {
  /** Required. Resource name of the job to execute a hybrid inspect on, for example `projects/dlp-test-project/dlpJob/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2HybridInspectDlpJobRequest;
}

export const HybridInspectProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2HybridInspectDlpJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:hybridInspect", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<HybridInspectProjectsLocationsDlpJobsRequest>;

export type HybridInspectProjectsLocationsDlpJobsResponse =
  GooglePrivacyDlpV2HybridInspectResponse;
export const HybridInspectProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2HybridInspectResponse;

export type HybridInspectProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inspect hybrid content and store findings to a job. To review the findings, inspect the job. Inspection will occur asynchronously. */
export const hybridInspectProjectsLocationsDlpJobs: API.OperationMethod<
  HybridInspectProjectsLocationsDlpJobsRequest,
  HybridInspectProjectsLocationsDlpJobsResponse,
  HybridInspectProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: HybridInspectProjectsLocationsDlpJobsRequest,
  output: HybridInspectProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDlpJobsRequest {
  /** Required. The name of the DlpJob resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDlpJobsRequest>;

export type DeleteProjectsLocationsDlpJobsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const deleteProjectsLocationsDlpJobs: API.OperationMethod<
  DeleteProjectsLocationsDlpJobsRequest,
  DeleteProjectsLocationsDlpJobsResponse,
  DeleteProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDlpJobsRequest,
  output: DeleteProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsDlpJobsRequest {
  /** Required. The name of the DlpJob resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CancelDlpJobRequest;
}

export const CancelProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2CancelDlpJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsDlpJobsRequest>;

export type CancelProjectsLocationsDlpJobsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const cancelProjectsLocationsDlpJobs: API.OperationMethod<
  CancelProjectsLocationsDlpJobsRequest,
  CancelProjectsLocationsDlpJobsResponse,
  CancelProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsDlpJobsRequest,
  output: CancelProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDlpJobsRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state` */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. The syntax is based on https://google.aip.dev/160. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The type of job. Defaults to `DlpJobType.INSPECT` */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
}

export const ListProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/dlpJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDlpJobsRequest>;

export type ListProjectsLocationsDlpJobsResponse =
  GooglePrivacyDlpV2ListDlpJobsResponse;
export const ListProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDlpJobsResponse;

export type ListProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const listProjectsLocationsDlpJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsDlpJobsRequest,
  ListProjectsLocationsDlpJobsResponse,
  ListProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDlpJobsRequest,
  output: ListProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDlpJobsRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDlpJobRequest;
}

export const CreateProjectsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateDlpJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/dlpJobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDlpJobsRequest>;

export type CreateProjectsLocationsDlpJobsResponse = GooglePrivacyDlpV2DlpJob;
export const CreateProjectsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DlpJob;

export type CreateProjectsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. */
export const createProjectsLocationsDlpJobs: API.OperationMethod<
  CreateProjectsLocationsDlpJobsRequest,
  CreateProjectsLocationsDlpJobsResponse,
  CreateProjectsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDlpJobsRequest,
  output: CreateProjectsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReidentifyProjectsLocationsContentRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2ReidentifyContentRequest;
}

export const ReidentifyProjectsLocationsContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2ReidentifyContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/content:reidentify",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReidentifyProjectsLocationsContentRequest>;

export type ReidentifyProjectsLocationsContentResponse =
  GooglePrivacyDlpV2ReidentifyContentResponse;
export const ReidentifyProjectsLocationsContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ReidentifyContentResponse;

export type ReidentifyProjectsLocationsContentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more. */
export const reidentifyProjectsLocationsContent: API.OperationMethod<
  ReidentifyProjectsLocationsContentRequest,
  ReidentifyProjectsLocationsContentResponse,
  ReidentifyProjectsLocationsContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReidentifyProjectsLocationsContentRequest,
  output: ReidentifyProjectsLocationsContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InspectProjectsLocationsContentRequest {
  /** Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2InspectContentRequest;
}

export const InspectProjectsLocationsContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2InspectContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/content:inspect",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InspectProjectsLocationsContentRequest>;

export type InspectProjectsLocationsContentResponse =
  GooglePrivacyDlpV2InspectContentResponse;
export const InspectProjectsLocationsContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectContentResponse;

export type InspectProjectsLocationsContentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text, */
export const inspectProjectsLocationsContent: API.OperationMethod<
  InspectProjectsLocationsContentRequest,
  InspectProjectsLocationsContentResponse,
  InspectProjectsLocationsContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InspectProjectsLocationsContentRequest,
  output: InspectProjectsLocationsContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeidentifyProjectsLocationsContentRequest {
  /** Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2DeidentifyContentRequest;
}

export const DeidentifyProjectsLocationsContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2DeidentifyContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/content:deidentify",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeidentifyProjectsLocationsContentRequest>;

export type DeidentifyProjectsLocationsContentResponse =
  GooglePrivacyDlpV2DeidentifyContentResponse;
export const DeidentifyProjectsLocationsContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyContentResponse;

export type DeidentifyProjectsLocationsContentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. */
export const deidentifyProjectsLocationsContent: API.OperationMethod<
  DeidentifyProjectsLocationsContentRequest,
  DeidentifyProjectsLocationsContentResponse,
  DeidentifyProjectsLocationsContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeidentifyProjectsLocationsContentRequest,
  output: DeidentifyProjectsLocationsContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsProjectDataProfilesRequest {
  /** Required. organizations/{org_id}/locations/{loc_id} */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id` * `sensitivity_level desc` Supported fields: - `project_id`: Google Cloud project ID - `sensitivity_level`: How sensitive the data in a project is, at most - `data_risk_level`: How much risk is associated with this data - `profile_last_generated`: Date and time (in epoch seconds) the profile was last generated */
  orderBy?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `project_id`: the Google Cloud project ID - `sensitivity_level`: HIGH|MODERATE|LOW - `data_risk_level`: HIGH|MODERATE|LOW - `status_code`: an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` or `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `profile_last_generated < "2025-01-01T00:00:00.000Z"` The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Page token to continue retrieval. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsLocationsProjectDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/projectDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProjectDataProfilesRequest>;

export type ListProjectsLocationsProjectDataProfilesResponse =
  GooglePrivacyDlpV2ListProjectDataProfilesResponse;
export const ListProjectsLocationsProjectDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListProjectDataProfilesResponse;

export type ListProjectsLocationsProjectDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists project data profiles for an organization. */
export const listProjectsLocationsProjectDataProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsProjectDataProfilesRequest,
  ListProjectsLocationsProjectDataProfilesResponse,
  ListProjectsLocationsProjectDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProjectDataProfilesRequest,
  output: ListProjectsLocationsProjectDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsProjectDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/projectDataProfiles/53234423`. */
  name: string;
}

export const GetProjectsLocationsProjectDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProjectDataProfilesRequest>;

export type GetProjectsLocationsProjectDataProfilesResponse =
  GooglePrivacyDlpV2ProjectDataProfile;
export const GetProjectsLocationsProjectDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ProjectDataProfile;

export type GetProjectsLocationsProjectDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a project data profile. */
export const getProjectsLocationsProjectDataProfiles: API.OperationMethod<
  GetProjectsLocationsProjectDataProfilesRequest,
  GetProjectsLocationsProjectDataProfilesResponse,
  GetProjectsLocationsProjectDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProjectDataProfilesRequest,
  output: GetProjectsLocationsProjectDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsInfoTypesRequest {
  /** filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT. */
  filter?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** The parent resource name. The format of this value is as follows: `locations/{location_id}` */
  parent: string;
  /** BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned. */
  languageCode?: string;
}

export const ListProjectsLocationsInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/infoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInfoTypesRequest>;

export type ListProjectsLocationsInfoTypesResponse =
  GooglePrivacyDlpV2ListInfoTypesResponse;
export const ListProjectsLocationsInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInfoTypesResponse;

export type ListProjectsLocationsInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more. */
export const listProjectsLocationsInfoTypes: API.OperationMethod<
  ListProjectsLocationsInfoTypesRequest,
  ListProjectsLocationsInfoTypesResponse,
  ListProjectsLocationsInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsInfoTypesRequest,
  output: ListProjectsLocationsInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsTableDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/tableDataProfiles/53234423`. */
  name: string;
}

export const GetProjectsLocationsTableDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTableDataProfilesRequest>;

export type GetProjectsLocationsTableDataProfilesResponse =
  GooglePrivacyDlpV2TableDataProfile;
export const GetProjectsLocationsTableDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2TableDataProfile;

export type GetProjectsLocationsTableDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a table data profile. */
export const getProjectsLocationsTableDataProfiles: API.OperationMethod<
  GetProjectsLocationsTableDataProfilesRequest,
  GetProjectsLocationsTableDataProfilesResponse,
  GetProjectsLocationsTableDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTableDataProfilesRequest,
  output: GetProjectsLocationsTableDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsTableDataProfilesRequest {
  /** Required. Resource name of the table data profile. */
  name: string;
}

export const DeleteProjectsLocationsTableDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTableDataProfilesRequest>;

export type DeleteProjectsLocationsTableDataProfilesResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsTableDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsTableDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration. */
export const deleteProjectsLocationsTableDataProfiles: API.OperationMethod<
  DeleteProjectsLocationsTableDataProfilesRequest,
  DeleteProjectsLocationsTableDataProfilesResponse,
  DeleteProjectsLocationsTableDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTableDataProfilesRequest,
  output: DeleteProjectsLocationsTableDataProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsTableDataProfilesRequest {
  /** Page token to continue retrieval. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `project_id`: The Google Cloud project ID - `dataset_id`: The BigQuery dataset ID - `table_id`: The ID of the BigQuery table - `sensitivity_level`: HIGH|MODERATE|LOW - `data_risk_level`: HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code`: an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` or `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` * `profile_last_generated < "2025-01-01T00:00:00.000Z"` The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `row_count`: Number of rows in this resource. */
  orderBy?: string;
}

export const ListProjectsLocationsTableDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/tableDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTableDataProfilesRequest>;

export type ListProjectsLocationsTableDataProfilesResponse =
  GooglePrivacyDlpV2ListTableDataProfilesResponse;
export const ListProjectsLocationsTableDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListTableDataProfilesResponse;

export type ListProjectsLocationsTableDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists table data profiles for an organization. */
export const listProjectsLocationsTableDataProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsTableDataProfilesRequest,
  ListProjectsLocationsTableDataProfilesResponse,
  ListProjectsLocationsTableDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTableDataProfilesRequest,
  output: ListProjectsLocationsTableDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RedactProjectsLocationsImageRequest {
  /** Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2RedactImageRequest;
}

export const RedactProjectsLocationsImageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2RedactImageRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/image:redact",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RedactProjectsLocationsImageRequest>;

export type RedactProjectsLocationsImageResponse =
  GooglePrivacyDlpV2RedactImageResponse;
export const RedactProjectsLocationsImageResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2RedactImageResponse;

export type RedactProjectsLocationsImageError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. Only the first frame of each multiframe image is redacted. Metadata and other frames are omitted in the response. */
export const redactProjectsLocationsImage: API.OperationMethod<
  RedactProjectsLocationsImageRequest,
  RedactProjectsLocationsImageResponse,
  RedactProjectsLocationsImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RedactProjectsLocationsImageRequest,
  output: RedactProjectsLocationsImageResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const GetProjectsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsStoredInfoTypesRequest>;

export type GetProjectsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const GetProjectsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type GetProjectsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const getProjectsStoredInfoTypes: API.OperationMethod<
  GetProjectsStoredInfoTypesRequest,
  GetProjectsStoredInfoTypesResponse,
  GetProjectsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsStoredInfoTypesRequest,
  output: GetProjectsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const DeleteProjectsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsStoredInfoTypesRequest>;

export type DeleteProjectsStoredInfoTypesResponse = GoogleProtobufEmpty;
export const DeleteProjectsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const deleteProjectsStoredInfoTypes: API.OperationMethod<
  DeleteProjectsStoredInfoTypesRequest,
  DeleteProjectsStoredInfoTypesResponse,
  DeleteProjectsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsStoredInfoTypesRequest,
  output: DeleteProjectsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsStoredInfoTypesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
}

export const CreateProjectsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/storedInfoTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsStoredInfoTypesRequest>;

export type CreateProjectsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const CreateProjectsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type CreateProjectsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const createProjectsStoredInfoTypes: API.OperationMethod<
  CreateProjectsStoredInfoTypesRequest,
  CreateProjectsStoredInfoTypesResponse,
  CreateProjectsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsStoredInfoTypesRequest,
  output: CreateProjectsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsStoredInfoTypesRequest {
  /** Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
}

export const PatchProjectsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsStoredInfoTypesRequest>;

export type PatchProjectsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const PatchProjectsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type PatchProjectsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const patchProjectsStoredInfoTypes: API.OperationMethod<
  PatchProjectsStoredInfoTypesRequest,
  PatchProjectsStoredInfoTypesResponse,
  PatchProjectsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsStoredInfoTypesRequest,
  output: PatchProjectsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsStoredInfoTypesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name. */
  orderBy?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/storedInfoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsStoredInfoTypesRequest>;

export type ListProjectsStoredInfoTypesResponse =
  GooglePrivacyDlpV2ListStoredInfoTypesResponse;
export const ListProjectsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListStoredInfoTypesResponse;

export type ListProjectsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const listProjectsStoredInfoTypes: API.PaginatedOperationMethod<
  ListProjectsStoredInfoTypesRequest,
  ListProjectsStoredInfoTypesResponse,
  ListProjectsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsStoredInfoTypesRequest,
  output: ListProjectsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const GetProjectsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsInspectTemplatesRequest>;

export type GetProjectsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const GetProjectsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type GetProjectsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const getProjectsInspectTemplates: API.OperationMethod<
  GetProjectsInspectTemplatesRequest,
  GetProjectsInspectTemplatesResponse,
  GetProjectsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsInspectTemplatesRequest,
  output: GetProjectsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const DeleteProjectsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsInspectTemplatesRequest>;

export type DeleteProjectsInspectTemplatesResponse = GoogleProtobufEmpty;
export const DeleteProjectsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const deleteProjectsInspectTemplates: API.OperationMethod<
  DeleteProjectsInspectTemplatesRequest,
  DeleteProjectsInspectTemplatesResponse,
  DeleteProjectsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsInspectTemplatesRequest,
  output: DeleteProjectsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsInspectTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateInspectTemplateRequest;
}

export const CreateProjectsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/inspectTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsInspectTemplatesRequest>;

export type CreateProjectsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const CreateProjectsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type CreateProjectsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const createProjectsInspectTemplates: API.OperationMethod<
  CreateProjectsInspectTemplatesRequest,
  CreateProjectsInspectTemplatesResponse,
  CreateProjectsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsInspectTemplatesRequest,
  output: CreateProjectsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsInspectTemplatesRequest {
  /** Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateInspectTemplateRequest;
}

export const PatchProjectsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsInspectTemplatesRequest>;

export type PatchProjectsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const PatchProjectsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type PatchProjectsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const patchProjectsInspectTemplates: API.OperationMethod<
  PatchProjectsInspectTemplatesRequest,
  PatchProjectsInspectTemplatesResponse,
  PatchProjectsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsInspectTemplatesRequest,
  output: PatchProjectsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsInspectTemplatesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/inspectTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsInspectTemplatesRequest>;

export type ListProjectsInspectTemplatesResponse =
  GooglePrivacyDlpV2ListInspectTemplatesResponse;
export const ListProjectsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInspectTemplatesResponse;

export type ListProjectsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const listProjectsInspectTemplates: API.PaginatedOperationMethod<
  ListProjectsInspectTemplatesRequest,
  ListProjectsInspectTemplatesResponse,
  ListProjectsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsInspectTemplatesRequest,
  output: ListProjectsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const GetProjectsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDeidentifyTemplatesRequest>;

export type GetProjectsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const GetProjectsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type GetProjectsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const getProjectsDeidentifyTemplates: API.OperationMethod<
  GetProjectsDeidentifyTemplatesRequest,
  GetProjectsDeidentifyTemplatesResponse,
  GetProjectsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDeidentifyTemplatesRequest,
  output: GetProjectsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const DeleteProjectsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDeidentifyTemplatesRequest>;

export type DeleteProjectsDeidentifyTemplatesResponse = GoogleProtobufEmpty;
export const DeleteProjectsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const deleteProjectsDeidentifyTemplates: API.OperationMethod<
  DeleteProjectsDeidentifyTemplatesRequest,
  DeleteProjectsDeidentifyTemplatesResponse,
  DeleteProjectsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDeidentifyTemplatesRequest,
  output: DeleteProjectsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsDeidentifyTemplatesRequest {
  /** Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest;
}

export const PatchProjectsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDeidentifyTemplatesRequest>;

export type PatchProjectsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const PatchProjectsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type PatchProjectsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const patchProjectsDeidentifyTemplates: API.OperationMethod<
  PatchProjectsDeidentifyTemplatesRequest,
  PatchProjectsDeidentifyTemplatesResponse,
  PatchProjectsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDeidentifyTemplatesRequest,
  output: PatchProjectsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDeidentifyTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListProjectsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/deidentifyTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDeidentifyTemplatesRequest>;

export type ListProjectsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;
export const ListProjectsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;

export type ListProjectsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const listProjectsDeidentifyTemplates: API.PaginatedOperationMethod<
  ListProjectsDeidentifyTemplatesRequest,
  ListProjectsDeidentifyTemplatesResponse,
  ListProjectsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDeidentifyTemplatesRequest,
  output: ListProjectsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsDeidentifyTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest;
}

export const CreateProjectsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GooglePrivacyDlpV2CreateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/deidentifyTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDeidentifyTemplatesRequest>;

export type CreateProjectsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const CreateProjectsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type CreateProjectsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const createProjectsDeidentifyTemplates: API.OperationMethod<
  CreateProjectsDeidentifyTemplatesRequest,
  CreateProjectsDeidentifyTemplatesResponse,
  CreateProjectsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDeidentifyTemplatesRequest,
  output: CreateProjectsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
}

export const GetProjectsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsJobTriggersRequest>;

export type GetProjectsJobTriggersResponse = GooglePrivacyDlpV2JobTrigger;
export const GetProjectsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type GetProjectsJobTriggersError = DefaultErrors | NotFound | Forbidden;

/** Gets a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const getProjectsJobTriggers: API.OperationMethod<
  GetProjectsJobTriggersRequest,
  GetProjectsJobTriggersResponse,
  GetProjectsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsJobTriggersRequest,
  output: GetProjectsJobTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
}

export const DeleteProjectsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsJobTriggersRequest>;

export type DeleteProjectsJobTriggersResponse = GoogleProtobufEmpty;
export const DeleteProjectsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const deleteProjectsJobTriggers: API.OperationMethod<
  DeleteProjectsJobTriggersRequest,
  DeleteProjectsJobTriggersResponse,
  DeleteProjectsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsJobTriggersRequest,
  output: DeleteProjectsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ActivateProjectsJobTriggersRequest {
  /** Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2ActivateJobTriggerRequest;
}

export const ActivateProjectsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2ActivateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:activate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ActivateProjectsJobTriggersRequest>;

export type ActivateProjectsJobTriggersResponse = GooglePrivacyDlpV2DlpJob;
export const ActivateProjectsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DlpJob;

export type ActivateProjectsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur. */
export const activateProjectsJobTriggers: API.OperationMethod<
  ActivateProjectsJobTriggersRequest,
  ActivateProjectsJobTriggersResponse,
  ActivateProjectsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ActivateProjectsJobTriggersRequest,
  output: ActivateProjectsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateJobTriggerRequest;
}

export const PatchProjectsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsJobTriggersRequest>;

export type PatchProjectsJobTriggersResponse = GooglePrivacyDlpV2JobTrigger;
export const PatchProjectsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type PatchProjectsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const patchProjectsJobTriggers: API.OperationMethod<
  PatchProjectsJobTriggersRequest,
  PatchProjectsJobTriggersResponse,
  PatchProjectsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsJobTriggersRequest,
  output: PatchProjectsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsJobTriggersRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. The syntax is based on https://google.aip.dev/160. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status. */
  orderBy?: string;
  /** The type of jobs. Will use `DlpJobType.INSPECT` if not set. */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
  /** Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls. */
  pageToken?: string;
  /** Size of the page. This value can be limited by a server. */
  pageSize?: number;
}

export const ListProjectsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/jobTriggers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsJobTriggersRequest>;

export type ListProjectsJobTriggersResponse =
  GooglePrivacyDlpV2ListJobTriggersResponse;
export const ListProjectsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListJobTriggersResponse;

export type ListProjectsJobTriggersError = DefaultErrors | NotFound | Forbidden;

/** Lists job triggers. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const listProjectsJobTriggers: API.PaginatedOperationMethod<
  ListProjectsJobTriggersRequest,
  ListProjectsJobTriggersResponse,
  ListProjectsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsJobTriggersRequest,
  output: ListProjectsJobTriggersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsJobTriggersRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateJobTriggerRequest;
}

export const CreateProjectsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/jobTriggers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsJobTriggersRequest>;

export type CreateProjectsJobTriggersResponse = GooglePrivacyDlpV2JobTrigger;
export const CreateProjectsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type CreateProjectsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const createProjectsJobTriggers: API.OperationMethod<
  CreateProjectsJobTriggersRequest,
  CreateProjectsJobTriggersResponse,
  CreateProjectsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsJobTriggersRequest,
  output: CreateProjectsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RedactProjectsImageRequest {
  /** Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2RedactImageRequest;
}

export const RedactProjectsImageRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2RedactImageRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/image:redact",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RedactProjectsImageRequest>;

export type RedactProjectsImageResponse = GooglePrivacyDlpV2RedactImageResponse;
export const RedactProjectsImageResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2RedactImageResponse;

export type RedactProjectsImageError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. Only the first frame of each multiframe image is redacted. Metadata and other frames are omitted in the response. */
export const redactProjectsImage: API.OperationMethod<
  RedactProjectsImageRequest,
  RedactProjectsImageResponse,
  RedactProjectsImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RedactProjectsImageRequest,
  output: RedactProjectsImageResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDlpJobsRequest {
  /** Required. The name of the DlpJob resource. */
  name: string;
}

export const GetProjectsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDlpJobsRequest>;

export type GetProjectsDlpJobsResponse = GooglePrivacyDlpV2DlpJob;
export const GetProjectsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DlpJob;

export type GetProjectsDlpJobsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const getProjectsDlpJobs: API.OperationMethod<
  GetProjectsDlpJobsRequest,
  GetProjectsDlpJobsResponse,
  GetProjectsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDlpJobsRequest,
  output: GetProjectsDlpJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsDlpJobsRequest {
  /** Required. The name of the DlpJob resource to be deleted. */
  name: string;
}

export const DeleteProjectsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDlpJobsRequest>;

export type DeleteProjectsDlpJobsResponse = GoogleProtobufEmpty;
export const DeleteProjectsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const deleteProjectsDlpJobs: API.OperationMethod<
  DeleteProjectsDlpJobsRequest,
  DeleteProjectsDlpJobsResponse,
  DeleteProjectsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDlpJobsRequest,
  output: DeleteProjectsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsDlpJobsRequest {
  /** Required. The name of the DlpJob resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CancelDlpJobRequest;
}

export const CancelProjectsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2CancelDlpJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsDlpJobsRequest>;

export type CancelProjectsDlpJobsResponse = GoogleProtobufEmpty;
export const CancelProjectsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const cancelProjectsDlpJobs: API.OperationMethod<
  CancelProjectsDlpJobsRequest,
  CancelProjectsDlpJobsResponse,
  CancelProjectsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsDlpJobsRequest,
  output: CancelProjectsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDlpJobsRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state` */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. The syntax is based on https://google.aip.dev/160. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The type of job. Defaults to `DlpJobType.INSPECT` */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
}

export const ListProjectsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/dlpJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDlpJobsRequest>;

export type ListProjectsDlpJobsResponse = GooglePrivacyDlpV2ListDlpJobsResponse;
export const ListProjectsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDlpJobsResponse;

export type ListProjectsDlpJobsError = DefaultErrors | NotFound | Forbidden;

/** Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const listProjectsDlpJobs: API.PaginatedOperationMethod<
  ListProjectsDlpJobsRequest,
  ListProjectsDlpJobsResponse,
  ListProjectsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDlpJobsRequest,
  output: ListProjectsDlpJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsDlpJobsRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDlpJobRequest;
}

export const CreateProjectsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateDlpJobRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/dlpJobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDlpJobsRequest>;

export type CreateProjectsDlpJobsResponse = GooglePrivacyDlpV2DlpJob;
export const CreateProjectsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DlpJob;

export type CreateProjectsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. */
export const createProjectsDlpJobs: API.OperationMethod<
  CreateProjectsDlpJobsRequest,
  CreateProjectsDlpJobsResponse,
  CreateProjectsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDlpJobsRequest,
  output: CreateProjectsDlpJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InspectProjectsContentRequest {
  /** Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2InspectContentRequest;
}

export const InspectProjectsContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2InspectContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/content:inspect",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InspectProjectsContentRequest>;

export type InspectProjectsContentResponse =
  GooglePrivacyDlpV2InspectContentResponse;
export const InspectProjectsContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectContentResponse;

export type InspectProjectsContentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text, */
export const inspectProjectsContent: API.OperationMethod<
  InspectProjectsContentRequest,
  InspectProjectsContentResponse,
  InspectProjectsContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InspectProjectsContentRequest,
  output: InspectProjectsContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeidentifyProjectsContentRequest {
  /** Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2DeidentifyContentRequest;
}

export const DeidentifyProjectsContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2DeidentifyContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/content:deidentify",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DeidentifyProjectsContentRequest>;

export type DeidentifyProjectsContentResponse =
  GooglePrivacyDlpV2DeidentifyContentResponse;
export const DeidentifyProjectsContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyContentResponse;

export type DeidentifyProjectsContentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. */
export const deidentifyProjectsContent: API.OperationMethod<
  DeidentifyProjectsContentRequest,
  DeidentifyProjectsContentResponse,
  DeidentifyProjectsContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeidentifyProjectsContentRequest,
  output: DeidentifyProjectsContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReidentifyProjectsContentRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2ReidentifyContentRequest;
}

export const ReidentifyProjectsContentRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2ReidentifyContentRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/content:reidentify",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReidentifyProjectsContentRequest>;

export type ReidentifyProjectsContentResponse =
  GooglePrivacyDlpV2ReidentifyContentResponse;
export const ReidentifyProjectsContentResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ReidentifyContentResponse;

export type ReidentifyProjectsContentError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more. */
export const reidentifyProjectsContent: API.OperationMethod<
  ReidentifyProjectsContentRequest,
  ReidentifyProjectsContentResponse,
  ReidentifyProjectsContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReidentifyProjectsContentRequest,
  output: ReidentifyProjectsContentResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListInfoTypesRequest {
  /** filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT. */
  filter?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** The parent resource name. The format of this value is as follows: `locations/{location_id}` */
  parent?: string;
  /** BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned. */
  languageCode?: string;
}

export const ListInfoTypesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
  parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
  languageCode: Schema.optional(Schema.String).pipe(
    T.HttpQuery("languageCode"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v2/infoTypes" }),
  svc,
) as unknown as Schema.Schema<ListInfoTypesRequest>;

export type ListInfoTypesResponse = GooglePrivacyDlpV2ListInfoTypesResponse;
export const ListInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInfoTypesResponse;

export type ListInfoTypesError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more. */
export const listInfoTypes: API.OperationMethod<
  ListInfoTypesRequest,
  ListInfoTypesResponse,
  ListInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListInfoTypesRequest,
  output: ListInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsProjectDataProfilesRequest {
  /** Required. organizations/{org_id}/locations/{loc_id} */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id` * `sensitivity_level desc` Supported fields: - `project_id`: Google Cloud project ID - `sensitivity_level`: How sensitive the data in a project is, at most - `data_risk_level`: How much risk is associated with this data - `profile_last_generated`: Date and time (in epoch seconds) the profile was last generated */
  orderBy?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `project_id`: the Google Cloud project ID - `sensitivity_level`: HIGH|MODERATE|LOW - `data_risk_level`: HIGH|MODERATE|LOW - `status_code`: an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` or `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `profile_last_generated < "2025-01-01T00:00:00.000Z"` The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Page token to continue retrieval. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
}

export const ListOrganizationsLocationsProjectDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/projectDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsProjectDataProfilesRequest>;

export type ListOrganizationsLocationsProjectDataProfilesResponse =
  GooglePrivacyDlpV2ListProjectDataProfilesResponse;
export const ListOrganizationsLocationsProjectDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListProjectDataProfilesResponse;

export type ListOrganizationsLocationsProjectDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists project data profiles for an organization. */
export const listOrganizationsLocationsProjectDataProfiles: API.PaginatedOperationMethod<
  ListOrganizationsLocationsProjectDataProfilesRequest,
  ListOrganizationsLocationsProjectDataProfilesResponse,
  ListOrganizationsLocationsProjectDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsProjectDataProfilesRequest,
  output: ListOrganizationsLocationsProjectDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsProjectDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/projectDataProfiles/53234423`. */
  name: string;
}

export const GetOrganizationsLocationsProjectDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsProjectDataProfilesRequest>;

export type GetOrganizationsLocationsProjectDataProfilesResponse =
  GooglePrivacyDlpV2ProjectDataProfile;
export const GetOrganizationsLocationsProjectDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ProjectDataProfile;

export type GetOrganizationsLocationsProjectDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a project data profile. */
export const getOrganizationsLocationsProjectDataProfiles: API.OperationMethod<
  GetOrganizationsLocationsProjectDataProfilesRequest,
  GetOrganizationsLocationsProjectDataProfilesResponse,
  GetOrganizationsLocationsProjectDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsProjectDataProfilesRequest,
  output: GetOrganizationsLocationsProjectDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsLocationsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const GetOrganizationsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsStoredInfoTypesRequest>;

export type GetOrganizationsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const GetOrganizationsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type GetOrganizationsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const getOrganizationsLocationsStoredInfoTypes: API.OperationMethod<
  GetOrganizationsLocationsStoredInfoTypesRequest,
  GetOrganizationsLocationsStoredInfoTypesResponse,
  GetOrganizationsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsStoredInfoTypesRequest,
  output: GetOrganizationsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateOrganizationsLocationsStoredInfoTypesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
}

export const CreateOrganizationsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/storedInfoTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsStoredInfoTypesRequest>;

export type CreateOrganizationsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const CreateOrganizationsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type CreateOrganizationsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const createOrganizationsLocationsStoredInfoTypes: API.OperationMethod<
  CreateOrganizationsLocationsStoredInfoTypesRequest,
  CreateOrganizationsLocationsStoredInfoTypesResponse,
  CreateOrganizationsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsStoredInfoTypesRequest,
  output: CreateOrganizationsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsStoredInfoTypesRequest {
  /** Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
}

export const PatchOrganizationsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsStoredInfoTypesRequest>;

export type PatchOrganizationsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const PatchOrganizationsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type PatchOrganizationsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const patchOrganizationsLocationsStoredInfoTypes: API.OperationMethod<
  PatchOrganizationsLocationsStoredInfoTypesRequest,
  PatchOrganizationsLocationsStoredInfoTypesResponse,
  PatchOrganizationsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsStoredInfoTypesRequest,
  output: PatchOrganizationsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsStoredInfoTypesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name. */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListOrganizationsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/storedInfoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsStoredInfoTypesRequest>;

export type ListOrganizationsLocationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2ListStoredInfoTypesResponse;
export const ListOrganizationsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListStoredInfoTypesResponse;

export type ListOrganizationsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const listOrganizationsLocationsStoredInfoTypes: API.PaginatedOperationMethod<
  ListOrganizationsLocationsStoredInfoTypesRequest,
  ListOrganizationsLocationsStoredInfoTypesResponse,
  ListOrganizationsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsStoredInfoTypesRequest,
  output: ListOrganizationsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsLocationsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const DeleteOrganizationsLocationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsStoredInfoTypesRequest>;

export type DeleteOrganizationsLocationsStoredInfoTypesResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const deleteOrganizationsLocationsStoredInfoTypes: API.OperationMethod<
  DeleteOrganizationsLocationsStoredInfoTypesRequest,
  DeleteOrganizationsLocationsStoredInfoTypesResponse,
  DeleteOrganizationsLocationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsStoredInfoTypesRequest,
  output: DeleteOrganizationsLocationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const DeleteOrganizationsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsDeidentifyTemplatesRequest>;

export type DeleteOrganizationsLocationsDeidentifyTemplatesResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const deleteOrganizationsLocationsDeidentifyTemplates: API.OperationMethod<
  DeleteOrganizationsLocationsDeidentifyTemplatesRequest,
  DeleteOrganizationsLocationsDeidentifyTemplatesResponse,
  DeleteOrganizationsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsDeidentifyTemplatesRequest,
  output: DeleteOrganizationsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsDeidentifyTemplatesRequest {
  /** Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest;
}

export const PatchOrganizationsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsDeidentifyTemplatesRequest>;

export type PatchOrganizationsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const PatchOrganizationsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type PatchOrganizationsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const patchOrganizationsLocationsDeidentifyTemplates: API.OperationMethod<
  PatchOrganizationsLocationsDeidentifyTemplatesRequest,
  PatchOrganizationsLocationsDeidentifyTemplatesResponse,
  PatchOrganizationsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsDeidentifyTemplatesRequest,
  output: PatchOrganizationsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsDeidentifyTemplatesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListOrganizationsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/deidentifyTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsDeidentifyTemplatesRequest>;

export type ListOrganizationsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;
export const ListOrganizationsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;

export type ListOrganizationsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const listOrganizationsLocationsDeidentifyTemplates: API.PaginatedOperationMethod<
  ListOrganizationsLocationsDeidentifyTemplatesRequest,
  ListOrganizationsLocationsDeidentifyTemplatesResponse,
  ListOrganizationsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsDeidentifyTemplatesRequest,
  output: ListOrganizationsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsDeidentifyTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest;
}

export const CreateOrganizationsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GooglePrivacyDlpV2CreateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/deidentifyTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsDeidentifyTemplatesRequest>;

export type CreateOrganizationsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const CreateOrganizationsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type CreateOrganizationsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const createOrganizationsLocationsDeidentifyTemplates: API.OperationMethod<
  CreateOrganizationsLocationsDeidentifyTemplatesRequest,
  CreateOrganizationsLocationsDeidentifyTemplatesResponse,
  CreateOrganizationsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsDeidentifyTemplatesRequest,
  output: CreateOrganizationsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const GetOrganizationsLocationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsDeidentifyTemplatesRequest>;

export type GetOrganizationsLocationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const GetOrganizationsLocationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type GetOrganizationsLocationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const getOrganizationsLocationsDeidentifyTemplates: API.OperationMethod<
  GetOrganizationsLocationsDeidentifyTemplatesRequest,
  GetOrganizationsLocationsDeidentifyTemplatesResponse,
  GetOrganizationsLocationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsDeidentifyTemplatesRequest,
  output: GetOrganizationsLocationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsInfoTypesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT. */
  filter?: string;
  /** The parent resource name. The format of this value is as follows: `locations/{location_id}` */
  parent: string;
  /** BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned. */
  languageCode?: string;
}

export const ListOrganizationsLocationsInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    languageCode: Schema.optional(Schema.String).pipe(
      T.HttpQuery("languageCode"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/infoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsInfoTypesRequest>;

export type ListOrganizationsLocationsInfoTypesResponse =
  GooglePrivacyDlpV2ListInfoTypesResponse;
export const ListOrganizationsLocationsInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInfoTypesResponse;

export type ListOrganizationsLocationsInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more. */
export const listOrganizationsLocationsInfoTypes: API.OperationMethod<
  ListOrganizationsLocationsInfoTypesRequest,
  ListOrganizationsLocationsInfoTypesResponse,
  ListOrganizationsLocationsInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOrganizationsLocationsInfoTypesRequest,
  output: ListOrganizationsLocationsInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsLocationsTableDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/tableDataProfiles/53234423`. */
  name: string;
}

export const GetOrganizationsLocationsTableDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsTableDataProfilesRequest>;

export type GetOrganizationsLocationsTableDataProfilesResponse =
  GooglePrivacyDlpV2TableDataProfile;
export const GetOrganizationsLocationsTableDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2TableDataProfile;

export type GetOrganizationsLocationsTableDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a table data profile. */
export const getOrganizationsLocationsTableDataProfiles: API.OperationMethod<
  GetOrganizationsLocationsTableDataProfilesRequest,
  GetOrganizationsLocationsTableDataProfilesResponse,
  GetOrganizationsLocationsTableDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsTableDataProfilesRequest,
  output: GetOrganizationsLocationsTableDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsTableDataProfilesRequest {
  /** Required. Resource name of the table data profile. */
  name: string;
}

export const DeleteOrganizationsLocationsTableDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsTableDataProfilesRequest>;

export type DeleteOrganizationsLocationsTableDataProfilesResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsTableDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsTableDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration. */
export const deleteOrganizationsLocationsTableDataProfiles: API.OperationMethod<
  DeleteOrganizationsLocationsTableDataProfilesRequest,
  DeleteOrganizationsLocationsTableDataProfilesResponse,
  DeleteOrganizationsLocationsTableDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsTableDataProfilesRequest,
  output: DeleteOrganizationsLocationsTableDataProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsTableDataProfilesRequest {
  /** Page token to continue retrieval. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
  /** Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `row_count`: Number of rows in this resource. */
  orderBy?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `project_id`: The Google Cloud project ID - `dataset_id`: The BigQuery dataset ID - `table_id`: The ID of the BigQuery table - `sensitivity_level`: HIGH|MODERATE|LOW - `data_risk_level`: HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code`: an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` or `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` * `profile_last_generated < "2025-01-01T00:00:00.000Z"` The length of this field should be no more than 500 characters. */
  filter?: string;
}

export const ListOrganizationsLocationsTableDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/tableDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsTableDataProfilesRequest>;

export type ListOrganizationsLocationsTableDataProfilesResponse =
  GooglePrivacyDlpV2ListTableDataProfilesResponse;
export const ListOrganizationsLocationsTableDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListTableDataProfilesResponse;

export type ListOrganizationsLocationsTableDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists table data profiles for an organization. */
export const listOrganizationsLocationsTableDataProfiles: API.PaginatedOperationMethod<
  ListOrganizationsLocationsTableDataProfilesRequest,
  ListOrganizationsLocationsTableDataProfilesResponse,
  ListOrganizationsLocationsTableDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsTableDataProfilesRequest,
  output: ListOrganizationsLocationsTableDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteOrganizationsLocationsConnectionsRequest {
  /** Required. Resource name of the Connection to be deleted, in the format: `projects/{project}/locations/{location}/connections/{connection}`. */
  name: string;
}

export const DeleteOrganizationsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsConnectionsRequest>;

export type DeleteOrganizationsLocationsConnectionsResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a Connection. */
export const deleteOrganizationsLocationsConnections: API.OperationMethod<
  DeleteOrganizationsLocationsConnectionsRequest,
  DeleteOrganizationsLocationsConnectionsResponse,
  DeleteOrganizationsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsConnectionsRequest,
  output: DeleteOrganizationsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsLocationsConnectionsRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}` */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateConnectionRequest;
}

export const CreateOrganizationsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateConnectionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/connections", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsConnectionsRequest>;

export type CreateOrganizationsLocationsConnectionsResponse =
  GooglePrivacyDlpV2Connection;
export const CreateOrganizationsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2Connection;

export type CreateOrganizationsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a Connection to an external data source. */
export const createOrganizationsLocationsConnections: API.OperationMethod<
  CreateOrganizationsLocationsConnectionsRequest,
  CreateOrganizationsLocationsConnectionsResponse,
  CreateOrganizationsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsConnectionsRequest,
  output: CreateOrganizationsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsConnectionsRequest {
  /** Required. Resource name of the organization or project, for example, `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Optional. Number of results per page, max 1000. */
  pageSize?: number;
  /** Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request. */
  pageToken?: string;
  /** Optional. Supported field/value: `state` - MISSING|AVAILABLE|ERROR The syntax is based on https://google.aip.dev/160. */
  filter?: string;
}

export const ListOrganizationsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/connections" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsConnectionsRequest>;

export type ListOrganizationsLocationsConnectionsResponse =
  GooglePrivacyDlpV2ListConnectionsResponse;
export const ListOrganizationsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListConnectionsResponse;

export type ListOrganizationsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Connections in a parent. Use SearchConnections to see all connections within an organization. */
export const listOrganizationsLocationsConnections: API.PaginatedOperationMethod<
  ListOrganizationsLocationsConnectionsRequest,
  ListOrganizationsLocationsConnectionsResponse,
  ListOrganizationsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsConnectionsRequest,
  output: ListOrganizationsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsLocationsConnectionsRequest {
  /** Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateConnectionRequest;
}

export const PatchOrganizationsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateConnectionRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsConnectionsRequest>;

export type PatchOrganizationsLocationsConnectionsResponse =
  GooglePrivacyDlpV2Connection;
export const PatchOrganizationsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2Connection;

export type PatchOrganizationsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update a Connection. */
export const patchOrganizationsLocationsConnections: API.OperationMethod<
  PatchOrganizationsLocationsConnectionsRequest,
  PatchOrganizationsLocationsConnectionsResponse,
  PatchOrganizationsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsConnectionsRequest,
  output: PatchOrganizationsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsConnectionsRequest {
  /** Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`. */
  name: string;
}

export const GetOrganizationsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsConnectionsRequest>;

export type GetOrganizationsLocationsConnectionsResponse =
  GooglePrivacyDlpV2Connection;
export const GetOrganizationsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2Connection;

export type GetOrganizationsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a Connection by name. */
export const getOrganizationsLocationsConnections: API.OperationMethod<
  GetOrganizationsLocationsConnectionsRequest,
  GetOrganizationsLocationsConnectionsResponse,
  GetOrganizationsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsConnectionsRequest,
  output: GetOrganizationsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface SearchOrganizationsLocationsConnectionsRequest {
  /** Required. Resource name of the organization or project with a wildcard location, for example, `organizations/433245324/locations/-` or `projects/project-id/locations/-`. */
  parent: string;
  /** Optional. Number of results per page, max 1000. */
  pageSize?: number;
  /** Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request. */
  pageToken?: string;
  /** Optional. Supported field/value: - `state` - MISSING|AVAILABLE|ERROR The syntax is based on https://google.aip.dev/160. */
  filter?: string;
}

export const SearchOrganizationsLocationsConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/connections:search" }),
    svc,
  ) as unknown as Schema.Schema<SearchOrganizationsLocationsConnectionsRequest>;

export type SearchOrganizationsLocationsConnectionsResponse =
  GooglePrivacyDlpV2SearchConnectionsResponse;
export const SearchOrganizationsLocationsConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2SearchConnectionsResponse;

export type SearchOrganizationsLocationsConnectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches for Connections in a parent. */
export const searchOrganizationsLocationsConnections: API.PaginatedOperationMethod<
  SearchOrganizationsLocationsConnectionsRequest,
  SearchOrganizationsLocationsConnectionsResponse,
  SearchOrganizationsLocationsConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchOrganizationsLocationsConnectionsRequest,
  output: SearchOrganizationsLocationsConnectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsFileStoreDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/fileStoreDataProfiles/53234423`. */
  name: string;
}

export const GetOrganizationsLocationsFileStoreDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsFileStoreDataProfilesRequest>;

export type GetOrganizationsLocationsFileStoreDataProfilesResponse =
  GooglePrivacyDlpV2FileStoreDataProfile;
export const GetOrganizationsLocationsFileStoreDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2FileStoreDataProfile;

export type GetOrganizationsLocationsFileStoreDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a file store data profile. */
export const getOrganizationsLocationsFileStoreDataProfiles: API.OperationMethod<
  GetOrganizationsLocationsFileStoreDataProfilesRequest,
  GetOrganizationsLocationsFileStoreDataProfilesResponse,
  GetOrganizationsLocationsFileStoreDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsFileStoreDataProfilesRequest,
  output: GetOrganizationsLocationsFileStoreDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsFileStoreDataProfilesRequest {
  /** Required. Resource name of the file store data profile. */
  name: string;
}

export const DeleteOrganizationsLocationsFileStoreDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsFileStoreDataProfilesRequest>;

export type DeleteOrganizationsLocationsFileStoreDataProfilesResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsFileStoreDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsFileStoreDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration. */
export const deleteOrganizationsLocationsFileStoreDataProfiles: API.OperationMethod<
  DeleteOrganizationsLocationsFileStoreDataProfilesRequest,
  DeleteOrganizationsLocationsFileStoreDataProfilesResponse,
  DeleteOrganizationsLocationsFileStoreDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsFileStoreDataProfilesRequest,
  output: DeleteOrganizationsLocationsFileStoreDataProfilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsFileStoreDataProfilesRequest {
  /** Optional. Page token to continue retrieval. */
  pageToken?: string;
  /** Optional. Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
  /** Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Optional. Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `name` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `name`: The name of the profile. - `create_time`: The time the file store was first created. */
  orderBy?: string;
  /** Optional. Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `project_id`: The Google Cloud project ID - `account_id`: The AWS account ID - `file_store_path`: The path like "gs://bucket" - `data_source_type`: The profile's data source type, like "google/storage/bucket" - `data_storage_location`: The location where the file store's data is stored, like "us-central1" - `sensitivity_level`: HIGH|MODERATE|LOW - `data_risk_level`: HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code`: an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` or `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` * `file_store_path = "gs://mybucket"` * `profile_last_generated < "2025-01-01T00:00:00.000Z"` The length of this field should be no more than 500 characters. */
  filter?: string;
}

export const ListOrganizationsLocationsFileStoreDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/fileStoreDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsFileStoreDataProfilesRequest>;

export type ListOrganizationsLocationsFileStoreDataProfilesResponse =
  GooglePrivacyDlpV2ListFileStoreDataProfilesResponse;
export const ListOrganizationsLocationsFileStoreDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListFileStoreDataProfilesResponse;

export type ListOrganizationsLocationsFileStoreDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists file store data profiles for an organization. */
export const listOrganizationsLocationsFileStoreDataProfiles: API.PaginatedOperationMethod<
  ListOrganizationsLocationsFileStoreDataProfilesRequest,
  ListOrganizationsLocationsFileStoreDataProfilesResponse,
  ListOrganizationsLocationsFileStoreDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsFileStoreDataProfilesRequest,
  output: ListOrganizationsLocationsFileStoreDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListOrganizationsLocationsDlpJobsRequest {
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. The syntax is based on https://google.aip.dev/160. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state` */
  orderBy?: string;
  /** The type of job. Defaults to `DlpJobType.INSPECT` */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListOrganizationsLocationsDlpJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/dlpJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsDlpJobsRequest>;

export type ListOrganizationsLocationsDlpJobsResponse =
  GooglePrivacyDlpV2ListDlpJobsResponse;
export const ListOrganizationsLocationsDlpJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDlpJobsResponse;

export type ListOrganizationsLocationsDlpJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. */
export const listOrganizationsLocationsDlpJobs: API.PaginatedOperationMethod<
  ListOrganizationsLocationsDlpJobsRequest,
  ListOrganizationsLocationsDlpJobsResponse,
  ListOrganizationsLocationsDlpJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsDlpJobsRequest,
  output: ListOrganizationsLocationsDlpJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchOrganizationsLocationsDiscoveryConfigsRequest {
  /** Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateDiscoveryConfigRequest;
}

export const PatchOrganizationsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateDiscoveryConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsDiscoveryConfigsRequest>;

export type PatchOrganizationsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2DiscoveryConfig;
export const PatchOrganizationsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DiscoveryConfig;

export type PatchOrganizationsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a discovery configuration. */
export const patchOrganizationsLocationsDiscoveryConfigs: API.OperationMethod<
  PatchOrganizationsLocationsDiscoveryConfigsRequest,
  PatchOrganizationsLocationsDiscoveryConfigsResponse,
  PatchOrganizationsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsDiscoveryConfigsRequest,
  output: PatchOrganizationsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsDiscoveryConfigsRequest {
  /** Required. Parent resource name. The format of this value is as follows: `projects/{project_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Page token to continue retrieval. Comes from the previous call to ListDiscoveryConfigs. `order_by` field must not change for subsequent calls. */
  pageToken?: string;
  /** Size of the page. This value can be limited by a server. */
  pageSize?: number;
  /** Comma-separated list of config fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `last_run_time`: corresponds to the last time the DiscoveryConfig ran. - `name`: corresponds to the DiscoveryConfig's name. - `status`: corresponds to DiscoveryConfig's status. */
  orderBy?: string;
}

export const ListOrganizationsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/discoveryConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsDiscoveryConfigsRequest>;

export type ListOrganizationsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2ListDiscoveryConfigsResponse;
export const ListOrganizationsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDiscoveryConfigsResponse;

export type ListOrganizationsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists discovery configurations. */
export const listOrganizationsLocationsDiscoveryConfigs: API.PaginatedOperationMethod<
  ListOrganizationsLocationsDiscoveryConfigsRequest,
  ListOrganizationsLocationsDiscoveryConfigsResponse,
  ListOrganizationsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsDiscoveryConfigsRequest,
  output: ListOrganizationsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsDiscoveryConfigsRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDiscoveryConfigRequest;
}

export const CreateOrganizationsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateDiscoveryConfigRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/discoveryConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsDiscoveryConfigsRequest>;

export type CreateOrganizationsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2DiscoveryConfig;
export const CreateOrganizationsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DiscoveryConfig;

export type CreateOrganizationsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a config for discovery to scan and profile storage. */
export const createOrganizationsLocationsDiscoveryConfigs: API.OperationMethod<
  CreateOrganizationsLocationsDiscoveryConfigsRequest,
  CreateOrganizationsLocationsDiscoveryConfigsResponse,
  CreateOrganizationsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsDiscoveryConfigsRequest,
  output: CreateOrganizationsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsLocationsDiscoveryConfigsRequest {
  /** Required. Resource name of the project and the config, for example `projects/dlp-test-project/discoveryConfigs/53234423`. */
  name: string;
}

export const DeleteOrganizationsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsDiscoveryConfigsRequest>;

export type DeleteOrganizationsLocationsDiscoveryConfigsResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a discovery configuration. */
export const deleteOrganizationsLocationsDiscoveryConfigs: API.OperationMethod<
  DeleteOrganizationsLocationsDiscoveryConfigsRequest,
  DeleteOrganizationsLocationsDiscoveryConfigsResponse,
  DeleteOrganizationsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsDiscoveryConfigsRequest,
  output: DeleteOrganizationsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsDiscoveryConfigsRequest {
  /** Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`. */
  name: string;
}

export const GetOrganizationsLocationsDiscoveryConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsDiscoveryConfigsRequest>;

export type GetOrganizationsLocationsDiscoveryConfigsResponse =
  GooglePrivacyDlpV2DiscoveryConfig;
export const GetOrganizationsLocationsDiscoveryConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DiscoveryConfig;

export type GetOrganizationsLocationsDiscoveryConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a discovery configuration. */
export const getOrganizationsLocationsDiscoveryConfigs: API.OperationMethod<
  GetOrganizationsLocationsDiscoveryConfigsRequest,
  GetOrganizationsLocationsDiscoveryConfigsResponse,
  GetOrganizationsLocationsDiscoveryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsDiscoveryConfigsRequest,
  output: GetOrganizationsLocationsDiscoveryConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListOrganizationsLocationsColumnDataProfilesRequest {
  /** Page token to continue retrieval. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100. */
  pageSize?: number;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields: - `table_data_profile_name`: The name of the related table data profile - `project_id`: The Google Cloud project ID (REQUIRED) - `dataset_id`: The BigQuery dataset ID (REQUIRED) - `table_id`: The BigQuery table ID (REQUIRED) - `field_id`: The ID of the BigQuery field - `info_type`: The infotype detected in the resource - `sensitivity_level`: HIGH|MEDIUM|LOW - `data_risk_level`: How much risk is associated with this data - `status_code`: An RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto - `profile_last_generated`: Date and time the profile was last generated * The operator must be `=` for project_id, dataset_id, and table_id. Other filters also support `!=`. The `profile_last_generated` filter also supports `<` and `>`. The syntax is based on https://google.aip.dev/160. Examples: * project_id = 12345 AND status_code = 1 * project_id = 12345 AND sensitivity_level = HIGH * project_id = 12345 AND info_type = STREET_ADDRESS * profile_last_generated < "2025-01-01T00:00:00.000Z" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`. */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a column is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. */
  orderBy?: string;
}

export const ListOrganizationsLocationsColumnDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/columnDataProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsColumnDataProfilesRequest>;

export type ListOrganizationsLocationsColumnDataProfilesResponse =
  GooglePrivacyDlpV2ListColumnDataProfilesResponse;
export const ListOrganizationsLocationsColumnDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListColumnDataProfilesResponse;

export type ListOrganizationsLocationsColumnDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists column data profiles for an organization. */
export const listOrganizationsLocationsColumnDataProfiles: API.PaginatedOperationMethod<
  ListOrganizationsLocationsColumnDataProfilesRequest,
  ListOrganizationsLocationsColumnDataProfilesResponse,
  ListOrganizationsLocationsColumnDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsColumnDataProfilesRequest,
  output: ListOrganizationsLocationsColumnDataProfilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsLocationsColumnDataProfilesRequest {
  /** Required. Resource name, for example `organizations/12345/locations/us/columnDataProfiles/53234423`. */
  name: string;
}

export const GetOrganizationsLocationsColumnDataProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsColumnDataProfilesRequest>;

export type GetOrganizationsLocationsColumnDataProfilesResponse =
  GooglePrivacyDlpV2ColumnDataProfile;
export const GetOrganizationsLocationsColumnDataProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ColumnDataProfile;

export type GetOrganizationsLocationsColumnDataProfilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a column data profile. */
export const getOrganizationsLocationsColumnDataProfiles: API.OperationMethod<
  GetOrganizationsLocationsColumnDataProfilesRequest,
  GetOrganizationsLocationsColumnDataProfilesResponse,
  GetOrganizationsLocationsColumnDataProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsColumnDataProfilesRequest,
  output: GetOrganizationsLocationsColumnDataProfilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const DeleteOrganizationsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsInspectTemplatesRequest>;

export type DeleteOrganizationsLocationsInspectTemplatesResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const deleteOrganizationsLocationsInspectTemplates: API.OperationMethod<
  DeleteOrganizationsLocationsInspectTemplatesRequest,
  DeleteOrganizationsLocationsInspectTemplatesResponse,
  DeleteOrganizationsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsInspectTemplatesRequest,
  output: DeleteOrganizationsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsInspectTemplatesRequest {
  /** Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateInspectTemplateRequest;
}

export const PatchOrganizationsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsInspectTemplatesRequest>;

export type PatchOrganizationsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const PatchOrganizationsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type PatchOrganizationsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const patchOrganizationsLocationsInspectTemplates: API.OperationMethod<
  PatchOrganizationsLocationsInspectTemplatesRequest,
  PatchOrganizationsLocationsInspectTemplatesResponse,
  PatchOrganizationsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsInspectTemplatesRequest,
  output: PatchOrganizationsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsInspectTemplatesRequest {
  /** Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
}

export const ListOrganizationsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/inspectTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsInspectTemplatesRequest>;

export type ListOrganizationsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2ListInspectTemplatesResponse;
export const ListOrganizationsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInspectTemplatesResponse;

export type ListOrganizationsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const listOrganizationsLocationsInspectTemplates: API.PaginatedOperationMethod<
  ListOrganizationsLocationsInspectTemplatesRequest,
  ListOrganizationsLocationsInspectTemplatesResponse,
  ListOrganizationsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsInspectTemplatesRequest,
  output: ListOrganizationsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsInspectTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateInspectTemplateRequest;
}

export const CreateOrganizationsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/inspectTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsInspectTemplatesRequest>;

export type CreateOrganizationsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const CreateOrganizationsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type CreateOrganizationsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const createOrganizationsLocationsInspectTemplates: API.OperationMethod<
  CreateOrganizationsLocationsInspectTemplatesRequest,
  CreateOrganizationsLocationsInspectTemplatesResponse,
  CreateOrganizationsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsInspectTemplatesRequest,
  output: CreateOrganizationsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const GetOrganizationsLocationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsInspectTemplatesRequest>;

export type GetOrganizationsLocationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const GetOrganizationsLocationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type GetOrganizationsLocationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const getOrganizationsLocationsInspectTemplates: API.OperationMethod<
  GetOrganizationsLocationsInspectTemplatesRequest,
  GetOrganizationsLocationsInspectTemplatesResponse,
  GetOrganizationsLocationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsInspectTemplatesRequest,
  output: GetOrganizationsLocationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsLocationsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
}

export const DeleteOrganizationsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsLocationsJobTriggersRequest>;

export type DeleteOrganizationsLocationsJobTriggersResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const deleteOrganizationsLocationsJobTriggers: API.OperationMethod<
  DeleteOrganizationsLocationsJobTriggersRequest,
  DeleteOrganizationsLocationsJobTriggersResponse,
  DeleteOrganizationsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsLocationsJobTriggersRequest,
  output: DeleteOrganizationsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsLocationsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateJobTriggerRequest;
}

export const PatchOrganizationsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsJobTriggersRequest>;

export type PatchOrganizationsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2JobTrigger;
export const PatchOrganizationsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type PatchOrganizationsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const patchOrganizationsLocationsJobTriggers: API.OperationMethod<
  PatchOrganizationsLocationsJobTriggersRequest,
  PatchOrganizationsLocationsJobTriggersResponse,
  PatchOrganizationsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsJobTriggersRequest,
  output: PatchOrganizationsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsLocationsJobTriggersRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. The syntax is based on https://google.aip.dev/160. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters. */
  filter?: string;
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status. */
  orderBy?: string;
  /** The type of jobs. Will use `DlpJobType.INSPECT` if not set. */
  type?:
    | "DLP_JOB_TYPE_UNSPECIFIED"
    | "INSPECT_JOB"
    | "RISK_ANALYSIS_JOB"
    | (string & {});
  /** Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls. */
  pageToken?: string;
  /** Size of the page. This value can be limited by a server. */
  pageSize?: number;
}

export const ListOrganizationsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    type: Schema.optional(Schema.String).pipe(T.HttpQuery("type")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/jobTriggers" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsLocationsJobTriggersRequest>;

export type ListOrganizationsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2ListJobTriggersResponse;
export const ListOrganizationsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListJobTriggersResponse;

export type ListOrganizationsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists job triggers. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const listOrganizationsLocationsJobTriggers: API.PaginatedOperationMethod<
  ListOrganizationsLocationsJobTriggersRequest,
  ListOrganizationsLocationsJobTriggersResponse,
  ListOrganizationsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsLocationsJobTriggersRequest,
  output: ListOrganizationsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsLocationsJobTriggersRequest {
  /** Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateJobTriggerRequest;
}

export const CreateOrganizationsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateJobTriggerRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v2/{+parent}/jobTriggers", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsLocationsJobTriggersRequest>;

export type CreateOrganizationsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2JobTrigger;
export const CreateOrganizationsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type CreateOrganizationsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const createOrganizationsLocationsJobTriggers: API.OperationMethod<
  CreateOrganizationsLocationsJobTriggersRequest,
  CreateOrganizationsLocationsJobTriggersResponse,
  CreateOrganizationsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsLocationsJobTriggersRequest,
  output: CreateOrganizationsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsJobTriggersRequest {
  /** Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`. */
  name: string;
}

export const GetOrganizationsLocationsJobTriggersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsJobTriggersRequest>;

export type GetOrganizationsLocationsJobTriggersResponse =
  GooglePrivacyDlpV2JobTrigger;
export const GetOrganizationsLocationsJobTriggersResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2JobTrigger;

export type GetOrganizationsLocationsJobTriggersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more. */
export const getOrganizationsLocationsJobTriggers: API.OperationMethod<
  GetOrganizationsLocationsJobTriggersRequest,
  GetOrganizationsLocationsJobTriggersResponse,
  GetOrganizationsLocationsJobTriggersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsJobTriggersRequest,
  output: GetOrganizationsLocationsJobTriggersResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsStoredInfoTypesRequest {
  /** Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
}

export const PatchOrganizationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsStoredInfoTypesRequest>;

export type PatchOrganizationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const PatchOrganizationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type PatchOrganizationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const patchOrganizationsStoredInfoTypes: API.OperationMethod<
  PatchOrganizationsStoredInfoTypesRequest,
  PatchOrganizationsStoredInfoTypesResponse,
  PatchOrganizationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsStoredInfoTypesRequest,
  output: PatchOrganizationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsStoredInfoTypesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name. */
  orderBy?: string;
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListOrganizationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/storedInfoTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsStoredInfoTypesRequest>;

export type ListOrganizationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2ListStoredInfoTypesResponse;
export const ListOrganizationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListStoredInfoTypesResponse;

export type ListOrganizationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const listOrganizationsStoredInfoTypes: API.PaginatedOperationMethod<
  ListOrganizationsStoredInfoTypesRequest,
  ListOrganizationsStoredInfoTypesResponse,
  ListOrganizationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsStoredInfoTypesRequest,
  output: ListOrganizationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsStoredInfoTypesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
}

export const CreateOrganizationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateStoredInfoTypeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/storedInfoTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsStoredInfoTypesRequest>;

export type CreateOrganizationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const CreateOrganizationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type CreateOrganizationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const createOrganizationsStoredInfoTypes: API.OperationMethod<
  CreateOrganizationsStoredInfoTypesRequest,
  CreateOrganizationsStoredInfoTypesResponse,
  CreateOrganizationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsStoredInfoTypesRequest,
  output: CreateOrganizationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const DeleteOrganizationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsStoredInfoTypesRequest>;

export type DeleteOrganizationsStoredInfoTypesResponse = GoogleProtobufEmpty;
export const DeleteOrganizationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const deleteOrganizationsStoredInfoTypes: API.OperationMethod<
  DeleteOrganizationsStoredInfoTypesRequest,
  DeleteOrganizationsStoredInfoTypesResponse,
  DeleteOrganizationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsStoredInfoTypesRequest,
  output: DeleteOrganizationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsStoredInfoTypesRequest {
  /** Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342. */
  name: string;
}

export const GetOrganizationsStoredInfoTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsStoredInfoTypesRequest>;

export type GetOrganizationsStoredInfoTypesResponse =
  GooglePrivacyDlpV2StoredInfoType;
export const GetOrganizationsStoredInfoTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2StoredInfoType;

export type GetOrganizationsStoredInfoTypesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more. */
export const getOrganizationsStoredInfoTypes: API.OperationMethod<
  GetOrganizationsStoredInfoTypesRequest,
  GetOrganizationsStoredInfoTypesResponse,
  GetOrganizationsStoredInfoTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsStoredInfoTypesRequest,
  output: GetOrganizationsStoredInfoTypesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteOrganizationsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const DeleteOrganizationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsInspectTemplatesRequest>;

export type DeleteOrganizationsInspectTemplatesResponse = GoogleProtobufEmpty;
export const DeleteOrganizationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const deleteOrganizationsInspectTemplates: API.OperationMethod<
  DeleteOrganizationsInspectTemplatesRequest,
  DeleteOrganizationsInspectTemplatesResponse,
  DeleteOrganizationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsInspectTemplatesRequest,
  output: DeleteOrganizationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateOrganizationsInspectTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateInspectTemplateRequest;
}

export const CreateOrganizationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GooglePrivacyDlpV2CreateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/inspectTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsInspectTemplatesRequest>;

export type CreateOrganizationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const CreateOrganizationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type CreateOrganizationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const createOrganizationsInspectTemplates: API.OperationMethod<
  CreateOrganizationsInspectTemplatesRequest,
  CreateOrganizationsInspectTemplatesResponse,
  CreateOrganizationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsInspectTemplatesRequest,
  output: CreateOrganizationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchOrganizationsInspectTemplatesRequest {
  /** Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateInspectTemplateRequest;
}

export const PatchOrganizationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GooglePrivacyDlpV2UpdateInspectTemplateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsInspectTemplatesRequest>;

export type PatchOrganizationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const PatchOrganizationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type PatchOrganizationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const patchOrganizationsInspectTemplates: API.OperationMethod<
  PatchOrganizationsInspectTemplatesRequest,
  PatchOrganizationsInspectTemplatesResponse,
  PatchOrganizationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsInspectTemplatesRequest,
  output: PatchOrganizationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsInspectTemplatesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListOrganizationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/inspectTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsInspectTemplatesRequest>;

export type ListOrganizationsInspectTemplatesResponse =
  GooglePrivacyDlpV2ListInspectTemplatesResponse;
export const ListOrganizationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListInspectTemplatesResponse;

export type ListOrganizationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const listOrganizationsInspectTemplates: API.PaginatedOperationMethod<
  ListOrganizationsInspectTemplatesRequest,
  ListOrganizationsInspectTemplatesResponse,
  ListOrganizationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsInspectTemplatesRequest,
  output: ListOrganizationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetOrganizationsInspectTemplatesRequest {
  /** Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342. */
  name: string;
}

export const GetOrganizationsInspectTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsInspectTemplatesRequest>;

export type GetOrganizationsInspectTemplatesResponse =
  GooglePrivacyDlpV2InspectTemplate;
export const GetOrganizationsInspectTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2InspectTemplate;

export type GetOrganizationsInspectTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more. */
export const getOrganizationsInspectTemplates: API.OperationMethod<
  GetOrganizationsInspectTemplatesRequest,
  GetOrganizationsInspectTemplatesResponse,
  GetOrganizationsInspectTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsInspectTemplatesRequest,
  output: GetOrganizationsInspectTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOrganizationsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const GetOrganizationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsDeidentifyTemplatesRequest>;

export type GetOrganizationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const GetOrganizationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type GetOrganizationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const getOrganizationsDeidentifyTemplates: API.OperationMethod<
  GetOrganizationsDeidentifyTemplatesRequest,
  GetOrganizationsDeidentifyTemplatesResponse,
  GetOrganizationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsDeidentifyTemplatesRequest,
  output: GetOrganizationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsDeidentifyTemplatesRequest {
  /** Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
  /** Request body */
  body?: GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest;
}

export const PatchOrganizationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v2/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsDeidentifyTemplatesRequest>;

export type PatchOrganizationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const PatchOrganizationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type PatchOrganizationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const patchOrganizationsDeidentifyTemplates: API.OperationMethod<
  PatchOrganizationsDeidentifyTemplatesRequest,
  PatchOrganizationsDeidentifyTemplatesResponse,
  PatchOrganizationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsDeidentifyTemplatesRequest,
  output: PatchOrganizationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListOrganizationsDeidentifyTemplatesRequest {
  /** Deprecated. This field has no effect. */
  locationId?: string;
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name. */
  orderBy?: string;
  /** Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`. */
  pageToken?: string;
  /** Size of the page. This value can be limited by the server. If zero server returns a page of max size 100. */
  pageSize?: number;
}

export const ListOrganizationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String).pipe(T.HttpQuery("locationId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v2/{+parent}/deidentifyTemplates" }),
    svc,
  ) as unknown as Schema.Schema<ListOrganizationsDeidentifyTemplatesRequest>;

export type ListOrganizationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;
export const ListOrganizationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2ListDeidentifyTemplatesResponse;

export type ListOrganizationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const listOrganizationsDeidentifyTemplates: API.PaginatedOperationMethod<
  ListOrganizationsDeidentifyTemplatesRequest,
  ListOrganizationsDeidentifyTemplatesResponse,
  ListOrganizationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationsDeidentifyTemplatesRequest,
  output: ListOrganizationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateOrganizationsDeidentifyTemplatesRequest {
  /** Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3 */
  parent: string;
  /** Request body */
  body?: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest;
}

export const CreateOrganizationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GooglePrivacyDlpV2CreateDeidentifyTemplateRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v2/{+parent}/deidentifyTemplates",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateOrganizationsDeidentifyTemplatesRequest>;

export type CreateOrganizationsDeidentifyTemplatesResponse =
  GooglePrivacyDlpV2DeidentifyTemplate;
export const CreateOrganizationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GooglePrivacyDlpV2DeidentifyTemplate;

export type CreateOrganizationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const createOrganizationsDeidentifyTemplates: API.OperationMethod<
  CreateOrganizationsDeidentifyTemplatesRequest,
  CreateOrganizationsDeidentifyTemplatesResponse,
  CreateOrganizationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOrganizationsDeidentifyTemplatesRequest,
  output: CreateOrganizationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteOrganizationsDeidentifyTemplatesRequest {
  /** Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342. */
  name: string;
}

export const DeleteOrganizationsDeidentifyTemplatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v2/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteOrganizationsDeidentifyTemplatesRequest>;

export type DeleteOrganizationsDeidentifyTemplatesResponse =
  GoogleProtobufEmpty;
export const DeleteOrganizationsDeidentifyTemplatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteOrganizationsDeidentifyTemplatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more. */
export const deleteOrganizationsDeidentifyTemplates: API.OperationMethod<
  DeleteOrganizationsDeidentifyTemplatesRequest,
  DeleteOrganizationsDeidentifyTemplatesResponse,
  DeleteOrganizationsDeidentifyTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOrganizationsDeidentifyTemplatesRequest,
  output: DeleteOrganizationsDeidentifyTemplatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
