// ==========================================================================
// Datastream API (datastream v1)
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
  name: "datastream",
  version: "v1",
  rootUrl: "https://datastream.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface IngestionTimePartition {
  /** Optional. Partition granularity */
  partitioningTimeGranularity?:
    | "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED"
    | "PARTITIONING_TIME_GRANULARITY_HOUR"
    | "PARTITIONING_TIME_GRANULARITY_DAY"
    | "PARTITIONING_TIME_GRANULARITY_MONTH"
    | "PARTITIONING_TIME_GRANULARITY_YEAR"
    | (string & {});
}

export const IngestionTimePartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    partitioningTimeGranularity: Schema.optional(Schema.String),
  },
).annotate({ identifier: "IngestionTimePartition" });

export interface LocalizedMessage {
  /** The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX" */
  locale?: string;
  /** The localized error message in the above locale. */
  message?: string;
}

export const LocalizedMessage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locale: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "LocalizedMessage" });

export interface FieldViolation {
  /** A path that leads to a field in the request body. The value will be a sequence of dot-separated identifiers that identify a protocol buffer field. Consider the following: message CreateContactRequest { message EmailAddress { enum Type { TYPE_UNSPECIFIED = 0; HOME = 1; WORK = 2; } optional string email = 1; repeated EmailType type = 2; } string full_name = 1; repeated EmailAddress email_addresses = 2; } In this example, in proto `field` could take one of the following values: * `full_name` for a violation in the `full_name` value * `email_addresses[0].email` for a violation in the `email` field of the first `email_addresses` message * `email_addresses[2].type[1]` for a violation in the second `type` value in the third `email_addresses` message. In JSON, the same values are represented as: * `fullName` for a violation in the `fullName` value * `emailAddresses[0].email` for a violation in the `email` field of the first `emailAddresses` message * `emailAddresses[2].type[1]` for a violation in the second `type` value in the third `emailAddresses` message. */
  field?: string;
  /** Provides a localized error message for field-level errors that is safe to return to the API consumer. */
  localizedMessage?: LocalizedMessage;
  /** A description of why the request element is bad. */
  description?: string;
  /** The reason of the field-level error. This is a constant value that identifies the proximate cause of the field-level error. It should uniquely identify the type of the FieldViolation within the scope of the google.rpc.ErrorInfo.domain. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
}

export const FieldViolation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  field: Schema.optional(Schema.String),
  localizedMessage: Schema.optional(LocalizedMessage),
  description: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
}).annotate({ identifier: "FieldViolation" });

export interface BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations?: ReadonlyArray<FieldViolation>;
}

export const BadRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fieldViolations: Schema.optional(Schema.Array(FieldViolation)),
}).annotate({ identifier: "BadRequest" });

export interface StopBackfillJobRequest {}

export const StopBackfillJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StopBackfillJobRequest" });

export interface SqlServerColumn {
  /** Column length. */
  length?: number;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** The SQLServer data type. */
  dataType?: string;
  /** Column precision. */
  precision?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** The column name. */
  column?: string;
  /** Column scale. */
  scale?: number;
}

export const SqlServerColumn = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  length: Schema.optional(Schema.Number),
  nullable: Schema.optional(Schema.Boolean),
  dataType: Schema.optional(Schema.String),
  precision: Schema.optional(Schema.Number),
  primaryKey: Schema.optional(Schema.Boolean),
  ordinalPosition: Schema.optional(Schema.Number),
  column: Schema.optional(Schema.String),
  scale: Schema.optional(Schema.Number),
}).annotate({ identifier: "SqlServerColumn" });

export interface SqlServerTable {
  /** The table name. */
  table?: string;
  /** SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
  columns?: ReadonlyArray<SqlServerColumn>;
}

export const SqlServerTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Schema.String),
  columns: Schema.optional(Schema.Array(SqlServerColumn)),
}).annotate({ identifier: "SqlServerTable" });

export interface LogFileDirectories {
  /** Required. Oracle directory for online logs. */
  onlineLogDirectory?: string;
  /** Required. Oracle directory for archived logs. */
  archivedLogDirectory?: string;
}

export const LogFileDirectories = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  onlineLogDirectory: Schema.optional(Schema.String),
  archivedLogDirectory: Schema.optional(Schema.String),
}).annotate({ identifier: "LogFileDirectories" });

export interface OracleAsmLogFileAccess {}

export const OracleAsmLogFileAccess = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "OracleAsmLogFileAccess" });

export interface BinaryLogParser {
  /** Use Oracle directories. */
  logFileDirectories?: LogFileDirectories;
  /** Use Oracle ASM. */
  oracleAsmLogFileAccess?: OracleAsmLogFileAccess;
}

export const BinaryLogParser = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logFileDirectories: Schema.optional(LogFileDirectories),
  oracleAsmLogFileAccess: Schema.optional(OracleAsmLogFileAccess),
}).annotate({ identifier: "BinaryLogParser" });

export interface Merge {}

export const Merge = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Merge",
});

export interface AppendOnly {}

export const AppendOnly = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AppendOnly" });

export interface DatasetTemplate {
  /** Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. */
  location?: string;
  /** If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _. */
  datasetIdPrefix?: string;
  /** Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information. */
  kmsKeyName?: string;
}

export const DatasetTemplate = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Schema.String),
  datasetIdPrefix: Schema.optional(Schema.String),
  kmsKeyName: Schema.optional(Schema.String),
}).annotate({ identifier: "DatasetTemplate" });

export interface SourceHierarchyDatasets {
  /** The dataset template to use for dynamic dataset creation. */
  datasetTemplate?: DatasetTemplate;
  /** Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource. */
  projectId?: string;
}

export const SourceHierarchyDatasets =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasetTemplate: Schema.optional(DatasetTemplate),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceHierarchyDatasets" });

export interface SingleTargetDataset {
  /** The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference. */
  datasetId?: string;
}

export const SingleTargetDataset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetId: Schema.optional(Schema.String),
}).annotate({ identifier: "SingleTargetDataset" });

export interface BlmtConfig {
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
  /** The root path inside the Cloud Storage bucket. */
  rootPath?: string;
  /** Required. The table format. */
  tableFormat?: "TABLE_FORMAT_UNSPECIFIED" | "ICEBERG" | (string & {});
  /** Required. The bigquery connection. Format: `{project}.{location}.{name}` */
  connectionName?: string;
  /** Required. The file format. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "PARQUET" | (string & {});
}

export const BlmtConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
  rootPath: Schema.optional(Schema.String),
  tableFormat: Schema.optional(Schema.String),
  connectionName: Schema.optional(Schema.String),
  fileFormat: Schema.optional(Schema.String),
}).annotate({ identifier: "BlmtConfig" });

export interface BigQueryDestinationConfig {
  /** The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost. */
  dataFreshness?: string;
  /** The standard mode */
  merge?: Merge;
  /** Append only mode */
  appendOnly?: AppendOnly;
  /** Source hierarchy datasets. */
  sourceHierarchyDatasets?: SourceHierarchyDatasets;
  /** Single destination dataset. */
  singleTargetDataset?: SingleTargetDataset;
  /** Optional. Big Lake Managed Tables (BLMT) configuration. */
  blmtConfig?: BlmtConfig;
}

export const BigQueryDestinationConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataFreshness: Schema.optional(Schema.String),
    merge: Schema.optional(Merge),
    appendOnly: Schema.optional(AppendOnly),
    sourceHierarchyDatasets: Schema.optional(SourceHierarchyDatasets),
    singleTargetDataset: Schema.optional(SingleTargetDataset),
    blmtConfig: Schema.optional(BlmtConfig),
  }).annotate({ identifier: "BigQueryDestinationConfig" });

export interface AvroFileFormat {}

export const AvroFileFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AvroFileFormat" });

export interface JsonFileFormat {
  /** Compression of the loaded JSON file. */
  compression?:
    | "JSON_COMPRESSION_UNSPECIFIED"
    | "NO_COMPRESSION"
    | "GZIP"
    | (string & {});
  /** The schema file format along JSON data files. */
  schemaFileFormat?:
    | "SCHEMA_FILE_FORMAT_UNSPECIFIED"
    | "NO_SCHEMA_FILE"
    | "AVRO_SCHEMA_FILE"
    | (string & {});
}

export const JsonFileFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  compression: Schema.optional(Schema.String),
  schemaFileFormat: Schema.optional(Schema.String),
}).annotate({ identifier: "JsonFileFormat" });

export interface GcsDestinationConfig {
  /** Path inside the Cloud Storage bucket to write data to. */
  path?: string;
  /** The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed. */
  fileRotationInterval?: string;
  /** The maximum file size to be saved in the bucket. */
  fileRotationMb?: number;
  /** AVRO file format configuration. */
  avroFileFormat?: AvroFileFormat;
  /** JSON file format configuration. */
  jsonFileFormat?: JsonFileFormat;
}

export const GcsDestinationConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  path: Schema.optional(Schema.String),
  fileRotationInterval: Schema.optional(Schema.String),
  fileRotationMb: Schema.optional(Schema.Number),
  avroFileFormat: Schema.optional(AvroFileFormat),
  jsonFileFormat: Schema.optional(JsonFileFormat),
}).annotate({ identifier: "GcsDestinationConfig" });

export interface DestinationConfig {
  /** BigQuery destination configuration. */
  bigqueryDestinationConfig?: BigQueryDestinationConfig;
  /** Required. Destination connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
  destinationConnectionProfile?: string;
  /** A configuration for how data should be loaded to Cloud Storage. */
  gcsDestinationConfig?: GcsDestinationConfig;
}

export const DestinationConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bigqueryDestinationConfig: Schema.optional(BigQueryDestinationConfig),
  destinationConnectionProfile: Schema.optional(Schema.String),
  gcsDestinationConfig: Schema.optional(GcsDestinationConfig),
}).annotate({ identifier: "DestinationConfig" });

export interface PostgresqlObjectIdentifier {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const PostgresqlObjectIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgresqlObjectIdentifier" });

export interface SpannerObjectIdentifier {
  /** Optional. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const SpannerObjectIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpannerObjectIdentifier" });

export interface OracleObjectIdentifier {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const OracleObjectIdentifier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  },
).annotate({ identifier: "OracleObjectIdentifier" });

export interface MysqlObjectIdentifier {
  /** Required. The database name. */
  database?: string;
  /** Required. The table name. */
  table?: string;
}

export const MysqlObjectIdentifier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(Schema.String),
  table: Schema.optional(Schema.String),
}).annotate({ identifier: "MysqlObjectIdentifier" });

export interface SqlServerObjectIdentifier {
  /** Required. The schema name. */
  schema?: string;
  /** Required. The table name. */
  table?: string;
}

export const SqlServerObjectIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schema: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerObjectIdentifier" });

export interface SalesforceObjectIdentifier {
  /** Required. The object name. */
  objectName?: string;
}

export const SalesforceObjectIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SalesforceObjectIdentifier" });

export interface MongodbObjectIdentifier {
  /** Required. The database name. */
  database?: string;
  /** Required. The collection name. */
  collection?: string;
}

export const MongodbObjectIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    collection: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbObjectIdentifier" });

export interface SourceObjectIdentifier {
  /** PostgreSQL data source object identifier. */
  postgresqlIdentifier?: PostgresqlObjectIdentifier;
  /** Spanner data source object identifier. */
  spannerIdentifier?: SpannerObjectIdentifier;
  /** Oracle data source object identifier. */
  oracleIdentifier?: OracleObjectIdentifier;
  /** Mysql data source object identifier. */
  mysqlIdentifier?: MysqlObjectIdentifier;
  /** SQLServer data source object identifier. */
  sqlServerIdentifier?: SqlServerObjectIdentifier;
  /** Salesforce data source object identifier. */
  salesforceIdentifier?: SalesforceObjectIdentifier;
  /** MongoDB data source object identifier. */
  mongodbIdentifier?: MongodbObjectIdentifier;
}

export const SourceObjectIdentifier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    postgresqlIdentifier: Schema.optional(PostgresqlObjectIdentifier),
    spannerIdentifier: Schema.optional(SpannerObjectIdentifier),
    oracleIdentifier: Schema.optional(OracleObjectIdentifier),
    mysqlIdentifier: Schema.optional(MysqlObjectIdentifier),
    sqlServerIdentifier: Schema.optional(SqlServerObjectIdentifier),
    salesforceIdentifier: Schema.optional(SalesforceObjectIdentifier),
    mongodbIdentifier: Schema.optional(MongodbObjectIdentifier),
  },
).annotate({ identifier: "SourceObjectIdentifier" });

export interface TimeUnitPartition {
  /** Required. The partitioning column. */
  column?: string;
  /** Optional. Partition granularity. */
  partitioningTimeGranularity?:
    | "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED"
    | "PARTITIONING_TIME_GRANULARITY_HOUR"
    | "PARTITIONING_TIME_GRANULARITY_DAY"
    | "PARTITIONING_TIME_GRANULARITY_MONTH"
    | "PARTITIONING_TIME_GRANULARITY_YEAR"
    | (string & {});
}

export const TimeUnitPartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  column: Schema.optional(Schema.String),
  partitioningTimeGranularity: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeUnitPartition" });

export interface IntegerRangePartition {
  /** Required. The ending value for range partitioning (exclusive). */
  end?: string;
  /** Required. The interval of each range within the partition. */
  interval?: string;
  /** Required. The partitioning column. */
  column?: string;
  /** Required. The starting value for range partitioning (inclusive). */
  start?: string;
}

export const IntegerRangePartition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  end: Schema.optional(Schema.String),
  interval: Schema.optional(Schema.String),
  column: Schema.optional(Schema.String),
  start: Schema.optional(Schema.String),
}).annotate({ identifier: "IntegerRangePartition" });

export interface BigQueryPartitioning {
  /** Ingestion time partitioning. */
  ingestionTimePartition?: IngestionTimePartition;
  /** Time unit column partitioning. */
  timeUnitPartition?: TimeUnitPartition;
  /** Integer range partitioning. */
  integerRangePartition?: IntegerRangePartition;
  /** Optional. If true, queries over the table require a partition filter. */
  requirePartitionFilter?: boolean;
}

export const BigQueryPartitioning = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ingestionTimePartition: Schema.optional(IngestionTimePartition),
  timeUnitPartition: Schema.optional(TimeUnitPartition),
  integerRangePartition: Schema.optional(IntegerRangePartition),
  requirePartitionFilter: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "BigQueryPartitioning" });

export interface BigQueryClustering {
  /** Required. Column names to set as clustering columns. */
  columns?: ReadonlyArray<string>;
}

export const BigQueryClustering = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "BigQueryClustering" });

export interface CustomizationRule {
  /** BigQuery partitioning rule. */
  bigqueryPartitioning?: BigQueryPartitioning;
  /** BigQuery clustering rule. */
  bigqueryClustering?: BigQueryClustering;
}

export const CustomizationRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bigqueryPartitioning: Schema.optional(BigQueryPartitioning),
  bigqueryClustering: Schema.optional(BigQueryClustering),
}).annotate({ identifier: "CustomizationRule" });

export interface Datastream_Error {
  /** A title that explains the reason for the error. */
  reason?: string;
  /** The time when the error occurred. */
  errorTime?: string;
  /** Additional information about the error. */
  details?: Record<string, string>;
  /** A message containing more information about the error that occurred. */
  message?: string;
  /** A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses. */
  errorUuid?: string;
}

export const Datastream_Error = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reason: Schema.optional(Schema.String),
  errorTime: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  message: Schema.optional(Schema.String),
  errorUuid: Schema.optional(Schema.String),
}).annotate({ identifier: "Datastream_Error" });

export interface BackfillJob {
  /** Output only. Backfill job state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "PENDING"
    | "ACTIVE"
    | "STOPPED"
    | "FAILED"
    | "COMPLETED"
    | "UNSUPPORTED"
    | (string & {});
  /** Output only. Backfill job's end time. */
  lastEndTime?: string;
  /** Output only. Backfill job's start time. */
  lastStartTime?: string;
  /** Output only. Errors which caused the backfill job to fail. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** Backfill job's triggering reason. */
  trigger?: "TRIGGER_UNSPECIFIED" | "AUTOMATIC" | "MANUAL" | (string & {});
}

export const BackfillJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  lastEndTime: Schema.optional(Schema.String),
  lastStartTime: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(Datastream_Error)),
  trigger: Schema.optional(Schema.String),
}).annotate({ identifier: "BackfillJob" });

export interface StreamObject {
  /** The object identifier in the data source. */
  sourceObject?: SourceObjectIdentifier;
  /** Output only. Identifier. The object resource's name. */
  name?: string;
  /** Output only. The last update time of the object. */
  updateTime?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. The customization rules for the object. These rules are derived from the parent Stream's `rule_sets` and represent the intended configuration for the object. */
  customizationRules?: ReadonlyArray<CustomizationRule>;
  /** The latest backfill job that was initiated for the stream object. */
  backfillJob?: BackfillJob;
  /** Output only. The creation time of the object. */
  createTime?: string;
  /** Output only. Active errors on the object. */
  errors?: ReadonlyArray<Datastream_Error>;
}

export const StreamObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceObject: Schema.optional(SourceObjectIdentifier),
  name: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  customizationRules: Schema.optional(Schema.Array(CustomizationRule)),
  backfillJob: Schema.optional(BackfillJob),
  createTime: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(Datastream_Error)),
}).annotate({ identifier: "StreamObject" });

export interface MostRecentStartPosition {}

export const MostRecentStartPosition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MostRecentStartPosition",
  });

export interface DebugInfo {
  /** The stack trace entries indicating where the error occurred. */
  stackEntries?: ReadonlyArray<string>;
  /** Additional debugging information provided by the server. */
  detail?: string;
}

export const DebugInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stackEntries: Schema.optional(Schema.Array(Schema.String)),
  detail: Schema.optional(Schema.String),
}).annotate({ identifier: "DebugInfo" });

export interface QuotaFailureViolation {
  /** The subject on which the quota check failed. For example, "clientip:" or "project:". */
  subject?: string;
  /** The id of the violated quota. Also know as "limit name", this is the unique identifier of a quota in the context of an API service. For example, "CPUS-PER-VM-FAMILY-per-project-region". */
  quotaId?: string;
  /** The new quota value being rolled out at the time of the violation. At the completion of the rollout, this value will be enforced in place of quota_value. If no rollout is in progress at the time of the violation, this field is not set. For example, if at the time of the violation a rollout is in progress changing the number of CPUs quota from 10 to 20, 20 would be the value of this field. */
  futureQuotaValue?: string;
  /** The dimensions of the violated quota. Every non-global quota is enforced on a set of dimensions. While quota metric defines what to count, the dimensions specify for what aspects the counter should be increased. For example, the quota "CPUs per region per VM family" enforces a limit on the metric "compute.googleapis.com/cpus_per_vm_family" on dimensions "region" and "vm_family". And if the violation occurred in region "us-central1" and for VM family "n1", the quota_dimensions would be, { "region": "us-central1", "vm_family": "n1", } When a quota is enforced globally, the quota_dimensions would always be empty. */
  quotaDimensions?: Record<string, string>;
  /** A description of how the quota check failed. Clients can use this description to find more about the quota configuration in the service's public documentation, or find the relevant quota limit to adjust through developer console. For example: "Service disabled" or "Daily Limit for read operations exceeded". */
  description?: string;
  /** The API Service from which the `QuotaFailure.Violation` orginates. In some cases, Quota issues originate from an API Service other than the one that was called. In other words, a dependency of the called API Service could be the cause of the `QuotaFailure`, and this field would have the dependency API service name. For example, if the called API is Kubernetes Engine API (container.googleapis.com), and a quota violation occurs in the Kubernetes Engine API itself, this field would be "container.googleapis.com". On the other hand, if the quota violation occurs when the Kubernetes Engine API creates VMs in the Compute Engine API (compute.googleapis.com), this field would be "compute.googleapis.com". */
  apiService?: string;
  /** The metric of the violated quota. A quota metric is a named counter to measure usage, such as API requests or CPUs. When an activity occurs in a service, such as Virtual Machine allocation, one or more quota metrics may be affected. For example, "compute.googleapis.com/cpus_per_vm_family", "storage.googleapis.com/internet_egress_bandwidth". */
  quotaMetric?: string;
  /** The enforced quota value at the time of the `QuotaFailure`. For example, if the enforced quota value at the time of the `QuotaFailure` on the number of CPUs is "10", then the value of this field would reflect this quantity. */
  quotaValue?: string;
}

export const QuotaFailureViolation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subject: Schema.optional(Schema.String),
  quotaId: Schema.optional(Schema.String),
  futureQuotaValue: Schema.optional(Schema.String),
  quotaDimensions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  description: Schema.optional(Schema.String),
  apiService: Schema.optional(Schema.String),
  quotaMetric: Schema.optional(Schema.String),
  quotaValue: Schema.optional(Schema.String),
}).annotate({ identifier: "QuotaFailureViolation" });

export interface QuotaFailure {
  /** Describes all quota violations. */
  violations?: ReadonlyArray<QuotaFailureViolation>;
}

export const QuotaFailure = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  violations: Schema.optional(Schema.Array(QuotaFailureViolation)),
}).annotate({ identifier: "QuotaFailure" });

export interface EncryptionNotEnforced {}

export const EncryptionNotEnforced = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "EncryptionNotEnforced" });

export interface BasicEncryption {}

export const BasicEncryption = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "BasicEncryption" });

export interface EncryptionAndServerValidation {
  /** Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
  /** Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. This field is used for bypassing the hostname validation while verifying server certificate. This is required for scenarios where the host name that datastream connects to is different from the certificate's subject. This specifically happens for private connectivity. It could also happen when the customer provides a public IP in connection profile but the same is not present in the server certificate. */
  serverCertificateHostname?: string;
}

export const EncryptionAndServerValidation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCertificate: Schema.optional(Schema.String),
    serverCertificateHostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionAndServerValidation" });

export interface SqlServerSslConfig {
  /** If set, Datastream will not enforce encryption. If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated. */
  encryptionNotEnforced?: EncryptionNotEnforced;
  /** If set, Datastream will enforce encryption without authenticating server identity. Server certificates will be trusted by default. */
  basicEncryption?: BasicEncryption;
  /** If set, Datastream will enforce encryption and authenticate server identity. */
  encryptionAndServerValidation?: EncryptionAndServerValidation;
}

export const SqlServerSslConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  encryptionNotEnforced: Schema.optional(EncryptionNotEnforced),
  basicEncryption: Schema.optional(BasicEncryption),
  encryptionAndServerValidation: Schema.optional(EncryptionAndServerValidation),
}).annotate({ identifier: "SqlServerSslConfig" });

export interface SqlServerProfile {
  /** Optional. SSL configuration for the SQLServer connection. */
  sslConfig?: SqlServerSslConfig;
  /** Required. Database for the SQLServer connection. */
  database?: string;
  /** Port for the SQLServer connection, default value is 1433. */
  port?: number;
  /** Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the SQLServer connection. */
  hostname?: string;
  /** Required. Username for the SQLServer connection. */
  username?: string;
  /** Optional. Password for the SQLServer connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
}

export const SqlServerProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sslConfig: Schema.optional(SqlServerSslConfig),
  database: Schema.optional(Schema.String),
  port: Schema.optional(Schema.Number),
  secretManagerStoredPassword: Schema.optional(Schema.String),
  hostname: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
}).annotate({ identifier: "SqlServerProfile" });

export interface Link {
  /** Describes what the link offers. */
  description?: string;
  /** The URL of the link. */
  url?: string;
}

export const Link = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
}).annotate({ identifier: "Link" });

export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links?: ReadonlyArray<Link>;
}

export const Help = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  links: Schema.optional(Schema.Array(Link)),
}).annotate({ identifier: "Help" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.Number),
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "Status" });

export interface OracleColumn {
  /** The column name. */
  column?: string;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** Column precision. */
  precision?: number;
  /** Column length. */
  length?: number;
  /** Column scale. */
  scale?: number;
  /** Column encoding. */
  encoding?: string;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The Oracle data type. */
  dataType?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
}

export const OracleColumn = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  column: Schema.optional(Schema.String),
  ordinalPosition: Schema.optional(Schema.Number),
  precision: Schema.optional(Schema.Number),
  length: Schema.optional(Schema.Number),
  scale: Schema.optional(Schema.Number),
  encoding: Schema.optional(Schema.String),
  primaryKey: Schema.optional(Schema.Boolean),
  dataType: Schema.optional(Schema.String),
  nullable: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "OracleColumn" });

export interface OracleTable {
  /** The table name. */
  table?: string;
  /** Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
  oracleColumns?: ReadonlyArray<OracleColumn>;
}

export const OracleTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Schema.String),
  oracleColumns: Schema.optional(Schema.Array(OracleColumn)),
}).annotate({ identifier: "OracleTable" });

export interface OracleSchema {
  /** Tables in the schema. */
  oracleTables?: ReadonlyArray<OracleTable>;
  /** The schema name. */
  schema?: string;
}

export const OracleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oracleTables: Schema.optional(Schema.Array(OracleTable)),
  schema: Schema.optional(Schema.String),
}).annotate({ identifier: "OracleSchema" });

export interface BackfillNoneStrategy {}

export const BackfillNoneStrategy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "BackfillNoneStrategy" });

export interface ObjectFilter {
  /** Specific source object identifier. */
  sourceObjectIdentifier?: SourceObjectIdentifier;
}

export const ObjectFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceObjectIdentifier: Schema.optional(SourceObjectIdentifier),
}).annotate({ identifier: "ObjectFilter" });

export interface RuleSet {
  /** Required. List of customization rules to apply. */
  customizationRules?: ReadonlyArray<CustomizationRule>;
  /** Required. Object filter to apply the customization rules to. */
  objectFilter?: ObjectFilter;
}

export const RuleSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customizationRules: Schema.optional(Schema.Array(CustomizationRule)),
  objectFilter: Schema.optional(ObjectFilter),
}).annotate({ identifier: "RuleSet" });

export interface SqlServerSchema {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  tables?: ReadonlyArray<SqlServerTable>;
}

export const SqlServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schema: Schema.optional(Schema.String),
  tables: Schema.optional(Schema.Array(SqlServerTable)),
}).annotate({ identifier: "SqlServerSchema" });

export interface SqlServerRdbms {
  /** SQLServer schemas in the database server. */
  schemas?: ReadonlyArray<SqlServerSchema>;
}

export const SqlServerRdbms = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemas: Schema.optional(Schema.Array(SqlServerSchema)),
}).annotate({ identifier: "SqlServerRdbms" });

export interface MongodbField {
  /** The field name. */
  field?: string;
}

export const MongodbField = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  field: Schema.optional(Schema.String),
}).annotate({ identifier: "MongodbField" });

export interface MongodbCollection {
  /** The collection name. */
  collection?: string;
  /** Fields in the collection. */
  fields?: ReadonlyArray<MongodbField>;
}

export const MongodbCollection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  collection: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.Array(MongodbField)),
}).annotate({ identifier: "MongodbCollection" });

export interface MongodbDatabase {
  /** The database name. */
  database?: string;
  /** Collections in the database. */
  collections?: ReadonlyArray<MongodbCollection>;
}

export const MongodbDatabase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(Schema.String),
  collections: Schema.optional(Schema.Array(MongodbCollection)),
}).annotate({ identifier: "MongodbDatabase" });

export interface MongodbCluster {
  /** MongoDB databases in the cluster. */
  databases?: ReadonlyArray<MongodbDatabase>;
}

export const MongodbCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databases: Schema.optional(Schema.Array(MongodbDatabase)),
}).annotate({ identifier: "MongodbCluster" });

export interface SpannerColumn {
  /** Required. The column name. */
  column?: string;
  /** Optional. Spanner data type. */
  dataType?: string;
  /** Optional. Whether or not the column is a primary key. */
  isPrimaryKey?: boolean;
  /** Optional. The ordinal position of the column in the table. */
  ordinalPosition?: string;
}

export const SpannerColumn = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  column: Schema.optional(Schema.String),
  dataType: Schema.optional(Schema.String),
  isPrimaryKey: Schema.optional(Schema.Boolean),
  ordinalPosition: Schema.optional(Schema.String),
}).annotate({ identifier: "SpannerColumn" });

export interface SpannerTable {
  /** Required. The table name. */
  table?: string;
  /** Optional. Spanner columns in the table. */
  columns?: ReadonlyArray<SpannerColumn>;
}

export const SpannerTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Schema.String),
  columns: Schema.optional(Schema.Array(SpannerColumn)),
}).annotate({ identifier: "SpannerTable" });

export interface SpannerSchema {
  /** Required. The schema name. */
  schema?: string;
  /** Optional. Spanner tables in the schema. */
  tables?: ReadonlyArray<SpannerTable>;
}

export const SpannerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schema: Schema.optional(Schema.String),
  tables: Schema.optional(Schema.Array(SpannerTable)),
}).annotate({ identifier: "SpannerSchema" });

export interface SpannerDatabase {
  /** Optional. Spanner schemas in the database. */
  schemas?: ReadonlyArray<SpannerSchema>;
}

export const SpannerDatabase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemas: Schema.optional(Schema.Array(SpannerSchema)),
}).annotate({ identifier: "SpannerDatabase" });

export interface OracleRdbms {
  /** Oracle schemas/databases in the database server. */
  oracleSchemas?: ReadonlyArray<OracleSchema>;
}

export const OracleRdbms = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oracleSchemas: Schema.optional(Schema.Array(OracleSchema)),
}).annotate({ identifier: "OracleRdbms" });

export interface SalesforceField {
  /** The field name. */
  name?: string;
  /** The data type. */
  dataType?: string;
  /** Indicates whether the field can accept nil values. */
  nillable?: boolean;
}

export const SalesforceField = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  dataType: Schema.optional(Schema.String),
  nillable: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "SalesforceField" });

export interface SalesforceObject {
  /** The object name. */
  objectName?: string;
  /** Salesforce fields. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing. */
  fields?: ReadonlyArray<SalesforceField>;
}

export const SalesforceObject = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objectName: Schema.optional(Schema.String),
  fields: Schema.optional(Schema.Array(SalesforceField)),
}).annotate({ identifier: "SalesforceObject" });

export interface SalesforceOrg {
  /** Salesforce objects in the database server. */
  objects?: ReadonlyArray<SalesforceObject>;
}

export const SalesforceOrg = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  objects: Schema.optional(Schema.Array(SalesforceObject)),
}).annotate({ identifier: "SalesforceOrg" });

export interface MysqlColumn {
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
  /** The column name. */
  column?: string;
  /** Column length. */
  length?: number;
  /** Column precision. */
  precision?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** Column scale. */
  scale?: number;
  /** Column collation. */
  collation?: string;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html */
  dataType?: string;
}

export const MysqlColumn = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ordinalPosition: Schema.optional(Schema.Number),
  column: Schema.optional(Schema.String),
  length: Schema.optional(Schema.Number),
  precision: Schema.optional(Schema.Number),
  primaryKey: Schema.optional(Schema.Boolean),
  scale: Schema.optional(Schema.Number),
  collation: Schema.optional(Schema.String),
  nullable: Schema.optional(Schema.Boolean),
  dataType: Schema.optional(Schema.String),
}).annotate({ identifier: "MysqlColumn" });

export interface MysqlTable {
  /** MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything. */
  mysqlColumns?: ReadonlyArray<MysqlColumn>;
  /** The table name. */
  table?: string;
}

export const MysqlTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mysqlColumns: Schema.optional(Schema.Array(MysqlColumn)),
  table: Schema.optional(Schema.String),
}).annotate({ identifier: "MysqlTable" });

export interface MysqlDatabase {
  /** The database name. */
  database?: string;
  /** Tables in the database. */
  mysqlTables?: ReadonlyArray<MysqlTable>;
}

export const MysqlDatabase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(Schema.String),
  mysqlTables: Schema.optional(Schema.Array(MysqlTable)),
}).annotate({ identifier: "MysqlDatabase" });

export interface MysqlRdbms {
  /** Mysql databases on the server */
  mysqlDatabases?: ReadonlyArray<MysqlDatabase>;
}

export const MysqlRdbms = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mysqlDatabases: Schema.optional(Schema.Array(MysqlDatabase)),
}).annotate({ identifier: "MysqlRdbms" });

export interface PostgresqlColumn {
  /** The PostgreSQL data type. */
  dataType?: string;
  /** Column precision. */
  precision?: number;
  /** Column length. */
  length?: number;
  /** Whether or not the column can accept a null value. */
  nullable?: boolean;
  /** The column name. */
  column?: string;
  /** Column scale. */
  scale?: number;
  /** Whether or not the column represents a primary key. */
  primaryKey?: boolean;
  /** The ordinal position of the column in the table. */
  ordinalPosition?: number;
}

export const PostgresqlColumn = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataType: Schema.optional(Schema.String),
  precision: Schema.optional(Schema.Number),
  length: Schema.optional(Schema.Number),
  nullable: Schema.optional(Schema.Boolean),
  column: Schema.optional(Schema.String),
  scale: Schema.optional(Schema.Number),
  primaryKey: Schema.optional(Schema.Boolean),
  ordinalPosition: Schema.optional(Schema.Number),
}).annotate({ identifier: "PostgresqlColumn" });

export interface PostgresqlTable {
  /** The table name. */
  table?: string;
  /** PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything. */
  postgresqlColumns?: ReadonlyArray<PostgresqlColumn>;
}

export const PostgresqlTable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  table: Schema.optional(Schema.String),
  postgresqlColumns: Schema.optional(Schema.Array(PostgresqlColumn)),
}).annotate({ identifier: "PostgresqlTable" });

export interface PostgresqlSchema {
  /** The schema name. */
  schema?: string;
  /** Tables in the schema. */
  postgresqlTables?: ReadonlyArray<PostgresqlTable>;
}

export const PostgresqlSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schema: Schema.optional(Schema.String),
  postgresqlTables: Schema.optional(Schema.Array(PostgresqlTable)),
}).annotate({ identifier: "PostgresqlSchema" });

export interface PostgresqlRdbms {
  /** PostgreSQL schemas in the database server. */
  postgresqlSchemas?: ReadonlyArray<PostgresqlSchema>;
}

export const PostgresqlRdbms = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postgresqlSchemas: Schema.optional(Schema.Array(PostgresqlSchema)),
}).annotate({ identifier: "PostgresqlRdbms" });

export interface BackfillAllStrategy {
  /** SQLServer data source objects to avoid backfilling */
  sqlServerExcludedObjects?: SqlServerRdbms;
  /** MongoDB data source objects to avoid backfilling */
  mongodbExcludedObjects?: MongodbCluster;
  /** Spanner data source objects to avoid backfilling. */
  spannerExcludedObjects?: SpannerDatabase;
  /** Oracle data source objects to avoid backfilling. */
  oracleExcludedObjects?: OracleRdbms;
  /** Salesforce data source objects to avoid backfilling */
  salesforceExcludedObjects?: SalesforceOrg;
  /** MySQL data source objects to avoid backfilling. */
  mysqlExcludedObjects?: MysqlRdbms;
  /** PostgreSQL data source objects to avoid backfilling. */
  postgresqlExcludedObjects?: PostgresqlRdbms;
}

export const BackfillAllStrategy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sqlServerExcludedObjects: Schema.optional(SqlServerRdbms),
  mongodbExcludedObjects: Schema.optional(MongodbCluster),
  spannerExcludedObjects: Schema.optional(SpannerDatabase),
  oracleExcludedObjects: Schema.optional(OracleRdbms),
  salesforceExcludedObjects: Schema.optional(SalesforceOrg),
  mysqlExcludedObjects: Schema.optional(MysqlRdbms),
  postgresqlExcludedObjects: Schema.optional(PostgresqlRdbms),
}).annotate({ identifier: "BackfillAllStrategy" });

export interface DropLargeObjects {}

export const DropLargeObjects = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "DropLargeObjects" });

export interface StreamLargeObjects {}

export const StreamLargeObjects = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "StreamLargeObjects" });

export interface LogMiner {}

export const LogMiner = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "LogMiner",
});

export interface OracleSourceConfig {
  /** The Oracle objects to exclude from the stream. */
  excludeObjects?: OracleRdbms;
  /** Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
  maxConcurrentBackfillTasks?: number;
  /** Use Binary Log Parser. */
  binaryLogParser?: BinaryLogParser;
  /** Drop large object values. */
  dropLargeObjects?: DropLargeObjects;
  /** The Oracle objects to include in the stream. */
  includeObjects?: OracleRdbms;
  /** Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used. */
  maxConcurrentCdcTasks?: number;
  /** Stream large object values. */
  streamLargeObjects?: StreamLargeObjects;
  /** Use LogMiner. */
  logMiner?: LogMiner;
}

export const OracleSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  excludeObjects: Schema.optional(OracleRdbms),
  maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  binaryLogParser: Schema.optional(BinaryLogParser),
  dropLargeObjects: Schema.optional(DropLargeObjects),
  includeObjects: Schema.optional(OracleRdbms),
  maxConcurrentCdcTasks: Schema.optional(Schema.Number),
  streamLargeObjects: Schema.optional(StreamLargeObjects),
  logMiner: Schema.optional(LogMiner),
}).annotate({ identifier: "OracleSourceConfig" });

export interface SqlServerTransactionLogs {}

export const SqlServerTransactionLogs =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SqlServerTransactionLogs",
  });

export interface SqlServerChangeTables {}

export const SqlServerChangeTables = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "SqlServerChangeTables" });

export interface SqlServerSourceConfig {
  /** The SQLServer objects to include in the stream. */
  includeObjects?: SqlServerRdbms;
  /** Max concurrent CDC tasks. */
  maxConcurrentCdcTasks?: number;
  /** CDC reader reads from transaction logs. */
  transactionLogs?: SqlServerTransactionLogs;
  /** The SQLServer objects to exclude from the stream. */
  excludeObjects?: SqlServerRdbms;
  /** Max concurrent backfill tasks. */
  maxConcurrentBackfillTasks?: number;
  /** CDC reader reads from change tables. */
  changeTables?: SqlServerChangeTables;
}

export const SqlServerSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeObjects: Schema.optional(SqlServerRdbms),
  maxConcurrentCdcTasks: Schema.optional(Schema.Number),
  transactionLogs: Schema.optional(SqlServerTransactionLogs),
  excludeObjects: Schema.optional(SqlServerRdbms),
  maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  changeTables: Schema.optional(SqlServerChangeTables),
}).annotate({ identifier: "SqlServerSourceConfig" });

export interface MongodbSourceConfig {
  /** The MongoDB collections to include in the stream. */
  includeObjects?: MongodbCluster;
  /** The MongoDB collections to exclude from the stream. */
  excludeObjects?: MongodbCluster;
  /** Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and less than or equal to 50. If not set (or set to 0), the system's default value is used */
  maxConcurrentBackfillTasks?: number;
  /** Optional. MongoDB JSON mode to use for the stream. */
  jsonMode?:
    | "MONGODB_JSON_MODE_UNSPECIFIED"
    | "STRICT"
    | "CANONICAL"
    | (string & {});
}

export const MongodbSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeObjects: Schema.optional(MongodbCluster),
  excludeObjects: Schema.optional(MongodbCluster),
  maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  jsonMode: Schema.optional(Schema.String),
}).annotate({ identifier: "MongodbSourceConfig" });

export interface BinaryLogPosition {}

export const BinaryLogPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "BinaryLogPosition" });

export interface Gtid {}

export const Gtid = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Gtid",
});

export interface MysqlSourceConfig {
  /** The MySQL objects to retrieve from the source. */
  includeObjects?: MysqlRdbms;
  /** Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
  maxConcurrentCdcTasks?: number;
  /** Use Binary log position based replication. */
  binaryLogPosition?: BinaryLogPosition;
  /** The MySQL objects to exclude from the stream. */
  excludeObjects?: MysqlRdbms;
  /** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
  maxConcurrentBackfillTasks?: number;
  /** Use GTID based replication. */
  gtid?: Gtid;
}

export const MysqlSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  includeObjects: Schema.optional(MysqlRdbms),
  maxConcurrentCdcTasks: Schema.optional(Schema.Number),
  binaryLogPosition: Schema.optional(BinaryLogPosition),
  excludeObjects: Schema.optional(MysqlRdbms),
  maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  gtid: Schema.optional(Gtid),
}).annotate({ identifier: "MysqlSourceConfig" });

export interface SalesforceSourceConfig {
  /** The Salesforce objects to retrieve from the source. */
  includeObjects?: SalesforceOrg;
  /** Required. Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be from `5 minutes` to `24 hours`, inclusive. */
  pollingInterval?: string;
  /** The Salesforce objects to exclude from the stream. */
  excludeObjects?: SalesforceOrg;
}

export const SalesforceSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    includeObjects: Schema.optional(SalesforceOrg),
    pollingInterval: Schema.optional(Schema.String),
    excludeObjects: Schema.optional(SalesforceOrg),
  },
).annotate({ identifier: "SalesforceSourceConfig" });

export interface PostgresqlSourceConfig {
  /** The PostgreSQL objects to exclude from the stream. */
  excludeObjects?: PostgresqlRdbms;
  /** Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used. */
  maxConcurrentBackfillTasks?: number;
  /** Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin. */
  replicationSlot?: string;
  /** Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects. */
  publication?: string;
  /** The PostgreSQL objects to include in the stream. */
  includeObjects?: PostgresqlRdbms;
}

export const PostgresqlSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    excludeObjects: Schema.optional(PostgresqlRdbms),
    maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
    replicationSlot: Schema.optional(Schema.String),
    publication: Schema.optional(Schema.String),
    includeObjects: Schema.optional(PostgresqlRdbms),
  },
).annotate({ identifier: "PostgresqlSourceConfig" });

export interface SpannerSourceConfig {
  /** Optional. The RPC priority to use for the stream. */
  spannerRpcPriority?:
    | "SPANNER_RPC_PRIORITY_UNSPECIFIED"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | (string & {});
  /** Optional. Whether to use Data Boost for Spanner backfills. Defaults to false if not set. */
  backfillDataBoostEnabled?: boolean;
  /** Optional. Maximum number of concurrent CDC tasks. */
  maxConcurrentCdcTasks?: number;
  /** Optional. The Spanner objects to retrieve from the data source. If some objects are both included and excluded, an error will be thrown. */
  includeObjects?: SpannerDatabase;
  /** Required. Immutable. The change stream name to use for the stream. */
  changeStreamName?: string;
  /** Optional. The FGAC role to use for the stream. */
  fgacRole?: string;
  /** Optional. Maximum number of concurrent backfill tasks. */
  maxConcurrentBackfillTasks?: number;
  /** Optional. The Spanner objects to avoid retrieving. If some objects are both included and excluded, an error will be thrown. */
  excludeObjects?: SpannerDatabase;
}

export const SpannerSourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  spannerRpcPriority: Schema.optional(Schema.String),
  backfillDataBoostEnabled: Schema.optional(Schema.Boolean),
  maxConcurrentCdcTasks: Schema.optional(Schema.Number),
  includeObjects: Schema.optional(SpannerDatabase),
  changeStreamName: Schema.optional(Schema.String),
  fgacRole: Schema.optional(Schema.String),
  maxConcurrentBackfillTasks: Schema.optional(Schema.Number),
  excludeObjects: Schema.optional(SpannerDatabase),
}).annotate({ identifier: "SpannerSourceConfig" });

export interface SourceConfig {
  /** Oracle data source configuration. */
  oracleSourceConfig?: OracleSourceConfig;
  /** SQLServer data source configuration. */
  sqlServerSourceConfig?: SqlServerSourceConfig;
  /** MongoDB data source configuration. */
  mongodbSourceConfig?: MongodbSourceConfig;
  /** MySQL data source configuration. */
  mysqlSourceConfig?: MysqlSourceConfig;
  /** Salesforce data source configuration. */
  salesforceSourceConfig?: SalesforceSourceConfig;
  /** Required. Source connection profile resource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}` */
  sourceConnectionProfile?: string;
  /** PostgreSQL data source configuration. */
  postgresqlSourceConfig?: PostgresqlSourceConfig;
  /** Spanner data source configuration. */
  spannerSourceConfig?: SpannerSourceConfig;
}

export const SourceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oracleSourceConfig: Schema.optional(OracleSourceConfig),
  sqlServerSourceConfig: Schema.optional(SqlServerSourceConfig),
  mongodbSourceConfig: Schema.optional(MongodbSourceConfig),
  mysqlSourceConfig: Schema.optional(MysqlSourceConfig),
  salesforceSourceConfig: Schema.optional(SalesforceSourceConfig),
  sourceConnectionProfile: Schema.optional(Schema.String),
  postgresqlSourceConfig: Schema.optional(PostgresqlSourceConfig),
  spannerSourceConfig: Schema.optional(SpannerSourceConfig),
}).annotate({ identifier: "SourceConfig" });

export interface Stream {
  /** Do not automatically backfill any objects. */
  backfillNone?: BackfillNoneStrategy;
  /** Optional. Rule sets to apply to the stream. */
  ruleSets?: ReadonlyArray<RuleSet>;
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Errors on the Stream. */
  errors?: ReadonlyArray<Datastream_Error>;
  /** Required. Destination connection profile configuration. */
  destinationConfig?: DestinationConfig;
  /** Automatically backfill objects included in the stream source configuration. Specific objects can be excluded. */
  backfillAll?: BackfillAllStrategy;
  /** Output only. The last update time of the stream. */
  updateTime?: string;
  /** Required. Source connection profile configuration. */
  sourceConfig?: SourceConfig;
  /** The state of the stream. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_STARTED"
    | "RUNNING"
    | "PAUSED"
    | "MAINTENANCE"
    | "FAILED"
    | "FAILED_PERMANENTLY"
    | "STARTING"
    | "DRAINING"
    | (string & {});
  /** Required. Display name. */
  displayName?: string;
  /** Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS. */
  customerManagedEncryptionKey?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. The creation time of the stream. */
  createTime?: string;
  /** Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental. */
  lastRecoveryTime?: string;
  /** Output only. Identifier. The stream's name. */
  name?: string;
}

export const Stream = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backfillNone: Schema.optional(BackfillNoneStrategy),
  ruleSets: Schema.optional(Schema.Array(RuleSet)),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  errors: Schema.optional(Schema.Array(Datastream_Error)),
  destinationConfig: Schema.optional(DestinationConfig),
  backfillAll: Schema.optional(BackfillAllStrategy),
  updateTime: Schema.optional(Schema.String),
  sourceConfig: Schema.optional(SourceConfig),
  state: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  customerManagedEncryptionKey: Schema.optional(Schema.String),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  createTime: Schema.optional(Schema.String),
  lastRecoveryTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Stream" });

export interface PscInterfaceConfig {
  /** Required. Fully qualified name of the Network Attachment that Datastream will connect to. Format: `projects/{project}/regions/{region}/networkAttachments/{name}` */
  networkAttachment?: string;
}

export const PscInterfaceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkAttachment: Schema.optional(Schema.String),
}).annotate({ identifier: "PscInterfaceConfig" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface ListStreamObjectsResponse {
  /** List of stream objects. */
  streamObjects?: ReadonlyArray<StreamObject>;
  /** A token, which can be sent as `page_token` to retrieve the next page. */
  nextPageToken?: string;
}

export const ListStreamObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    streamObjects: Schema.optional(Schema.Array(StreamObject)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListStreamObjectsResponse" });

export interface Oauth2ClientCredentials {
  /** Required. Client ID for Salesforce OAuth2 Client Credentials. */
  clientId?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2 client_secret. Mutually exclusive with the `client_secret` field. */
  secretManagerStoredClientSecret?: string;
  /** Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the `secret_manager_stored_client_secret` field. */
  clientSecret?: string;
}

export const Oauth2ClientCredentials =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    secretManagerStoredClientSecret: Schema.optional(Schema.String),
    clientSecret: Schema.optional(Schema.String),
  }).annotate({ identifier: "Oauth2ClientCredentials" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  locationId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Location" });

export interface MysqlLogPosition {
  /** Required. The binary log file name. */
  logFile?: string;
  /** Optional. The position within the binary log file. Default is head of file. */
  logPosition?: number;
}

export const MysqlLogPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logFile: Schema.optional(Schema.String),
  logPosition: Schema.optional(Schema.Number),
}).annotate({ identifier: "MysqlLogPosition" });

export interface SqlServerLsnPosition {
  /** Required. Log sequence number (LSN) from where Logs will be read */
  lsn?: string;
}

export const SqlServerLsnPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lsn: Schema.optional(Schema.String),
}).annotate({ identifier: "SqlServerLsnPosition" });

export interface MysqlGtidPosition {
  /** Required. The gtid set to start replication from. */
  gtidSet?: string;
}

export const MysqlGtidPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gtidSet: Schema.optional(Schema.String),
}).annotate({ identifier: "MysqlGtidPosition" });

export interface OracleScnPosition {
  /** Required. SCN number from where Logs will be read */
  scn?: string;
}

export const OracleScnPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scn: Schema.optional(Schema.String),
}).annotate({ identifier: "OracleScnPosition" });

export interface MongodbChangeStreamPosition {
  /** Required. The timestamp to start change stream from. */
  startTime?: string;
}

export const MongodbChangeStreamPosition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MongodbChangeStreamPosition" });

export interface SpecificStartPosition {
  /** MySQL specific log position to start replicating from. */
  mysqlLogPosition?: MysqlLogPosition;
  /** SqlServer LSN to start replicating from. */
  sqlServerLsnPosition?: SqlServerLsnPosition;
  /** MySQL GTID set to start replicating from. */
  mysqlGtidPosition?: MysqlGtidPosition;
  /** Oracle SCN to start replicating from. */
  oracleScnPosition?: OracleScnPosition;
  /** MongoDB change stream position to start replicating from. */
  mongodbChangeStreamPosition?: MongodbChangeStreamPosition;
}

export const SpecificStartPosition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mysqlLogPosition: Schema.optional(MysqlLogPosition),
  sqlServerLsnPosition: Schema.optional(SqlServerLsnPosition),
  mysqlGtidPosition: Schema.optional(MysqlGtidPosition),
  oracleScnPosition: Schema.optional(OracleScnPosition),
  mongodbChangeStreamPosition: Schema.optional(MongodbChangeStreamPosition),
}).annotate({ identifier: "SpecificStartPosition" });

export interface StandardConnectionFormat {
  /** Optional. Deprecated: Use the `additional_options` map to specify the `directConnection` parameter instead. For example: `additional_options = {"directConnection": "true"}`. Specifies whether the client connects directly to the host[:port] in the connection URI. */
  directConnection?: boolean;
}

export const StandardConnectionFormat =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directConnection: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "StandardConnectionFormat" });

export interface MysqlSslConfig {
  /** Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
  clientCertificate?: string;
  /** Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
  clientKey?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
}

export const MysqlSslConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clientCertificate: Schema.optional(Schema.String),
  clientKey: Schema.optional(Schema.String),
  clientCertificateSet: Schema.optional(Schema.Boolean),
  caCertificateSet: Schema.optional(Schema.Boolean),
  clientKeySet: Schema.optional(Schema.Boolean),
  caCertificate: Schema.optional(Schema.String),
}).annotate({ identifier: "MysqlSslConfig" });

export interface MysqlProfile {
  /** Optional. A reference to a Secret Manager resource name storing the MySQL connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the MySQL connection. */
  hostname?: string;
  /** Required. Username for the MySQL connection. */
  username?: string;
  /** Optional. Input only. Password for the MySQL connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** SSL configuration for the MySQL connection. */
  sslConfig?: MysqlSslConfig;
  /** Port for the MySQL connection, default value is 3306. */
  port?: number;
}

export const MysqlProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secretManagerStoredPassword: Schema.optional(Schema.String),
  hostname: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
  sslConfig: Schema.optional(MysqlSslConfig),
  port: Schema.optional(Schema.Number),
}).annotate({ identifier: "MysqlProfile" });

export interface OracleSslConfig {
  /** Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile. */
  caCertificateSet?: boolean;
  /** Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
  /** Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to SSL_SERVER_CERT_DN sqlnet parameter. Refer https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7 If this field is not provided, the DN matching is not enforced. */
  serverCertificateDistinguishedName?: string;
}

export const OracleSslConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  caCertificateSet: Schema.optional(Schema.Boolean),
  caCertificate: Schema.optional(Schema.String),
  serverCertificateDistinguishedName: Schema.optional(Schema.String),
}).annotate({ identifier: "OracleSslConfig" });

export interface PreconditionFailureViolation {
  /** The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced. */
  subject?: string;
  /** The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation". */
  type?: string;
  /** A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted". */
  description?: string;
}

export const PreconditionFailureViolation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreconditionFailureViolation" });

export interface GcsProfile {
  /** Required. The Cloud Storage bucket name. */
  bucket?: string;
  /** Optional. The root path inside the Cloud Storage bucket. */
  rootPath?: string;
}

export const GcsProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bucket: Schema.optional(Schema.String),
  rootPath: Schema.optional(Schema.String),
}).annotate({ identifier: "GcsProfile" });

export interface BigQueryProfile {}

export const BigQueryProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "BigQueryProfile" });

export interface StaticServiceIpConnectivity {}

export const StaticServiceIpConnectivity =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StaticServiceIpConnectivity",
  });

export interface MongodbSslConfig {
  /** Optional. Input only. A reference to a Secret Manager resource name storing the PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. Mutually exclusive with the `client_key` field. */
  secretManagerStoredClientKey?: string;
  /** Output only. Indicates whether the client_key field is set. */
  clientKeySet?: boolean;
  /** Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate. */
  caCertificate?: string;
  /** Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. */
  clientKey?: string;
  /** Output only. Indicates whether the client_certificate field is set. */
  clientCertificateSet?: boolean;
  /** Output only. Indicates whether the ca_certificate field is set. */
  caCertificateSet?: boolean;
  /** Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory. */
  clientCertificate?: string;
}

export const MongodbSslConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secretManagerStoredClientKey: Schema.optional(Schema.String),
  clientKeySet: Schema.optional(Schema.Boolean),
  caCertificate: Schema.optional(Schema.String),
  clientKey: Schema.optional(Schema.String),
  clientCertificateSet: Schema.optional(Schema.Boolean),
  caCertificateSet: Schema.optional(Schema.Boolean),
  clientCertificate: Schema.optional(Schema.String),
}).annotate({ identifier: "MongodbSslConfig" });

export interface SrvConnectionFormat {}

export const SrvConnectionFormat = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "SrvConnectionFormat" });

export interface HostAddress {
  /** Required. Hostname for the connection. */
  hostname?: string;
  /** Optional. Port for the connection. */
  port?: number;
}

export const HostAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hostname: Schema.optional(Schema.String),
  port: Schema.optional(Schema.Number),
}).annotate({ identifier: "HostAddress" });

export interface MongodbProfile {
  /** Optional. SSL configuration for the MongoDB connection. */
  sslConfig?: MongodbSslConfig;
  /** Optional. Specifies additional options for the MongoDB connection. The options should be sent as key-value pairs, for example: `additional_options = {"serverSelectionTimeoutMS": "10000", "directConnection": "true"}`. Keys are case-sensitive and should match the official MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/ The server will not modify the values provided by the user. */
  additionalOptions?: Record<string, string>;
  /** Srv connection format. */
  srvConnectionFormat?: SrvConnectionFormat;
  /** Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB cluster. For SRV connection format, this field must be empty. For Standard connection format, this field must be specified. */
  replicaSet?: string;
  /** Standard connection format. */
  standardConnectionFormat?: StandardConnectionFormat;
  /** Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list must contain exactly one DNS host without a port. For Standard connection format, this list must contain all the required hosts in the cluster with their respective ports. */
  hostAddresses?: ReadonlyArray<HostAddress>;
  /** Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Username for the MongoDB connection. */
  username?: string;
  /** Optional. Password for the MongoDB connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
}

export const MongodbProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sslConfig: Schema.optional(MongodbSslConfig),
  additionalOptions: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  srvConnectionFormat: Schema.optional(SrvConnectionFormat),
  replicaSet: Schema.optional(Schema.String),
  standardConnectionFormat: Schema.optional(StandardConnectionFormat),
  hostAddresses: Schema.optional(Schema.Array(HostAddress)),
  secretManagerStoredPassword: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
}).annotate({ identifier: "MongodbProfile" });

export interface PrivateConnectivity {
  /** Required. A reference to a private connection resource. Format: `projects/{project}/locations/{location}/privateConnections/{name}` */
  privateConnection?: string;
}

export const PrivateConnectivity = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  privateConnection: Schema.optional(Schema.String),
}).annotate({ identifier: "PrivateConnectivity" });

export interface SpannerProfile {
  /** Optional. The Spanner endpoint to connect to. Defaults to the global endpoint (https://spanner.googleapis.com). Must be in the format: https://spanner.{region}.rep.googleapis.com. */
  host?: string;
  /** Required. Immutable. Cloud Spanner database resource. This field is immutable. Must be in the format: projects/{project}/instances/{instance}/databases/{database_id}. */
  database?: string;
}

export const SpannerProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  host: Schema.optional(Schema.String),
  database: Schema.optional(Schema.String),
}).annotate({ identifier: "SpannerProfile" });

export interface ForwardSshTunnelConnectivity {
  /** Required. Hostname for the SSH tunnel. */
  hostname?: string;
  /** Required. Username for the SSH tunnel. */
  username?: string;
  /** Input only. SSH password. */
  password?: string;
  /** Input only. SSH private key. */
  privateKey?: string;
  /** Port for the SSH tunnel, default value is 22. */
  port?: number;
}

export const ForwardSshTunnelConnectivity =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    privateKey: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ForwardSshTunnelConnectivity" });

export interface ServerVerification {
  /** Required. Input only. PEM-encoded server root CA certificate. */
  caCertificate?: string;
  /** Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated. */
  serverCertificateHostname?: string;
}

export const ServerVerification = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  caCertificate: Schema.optional(Schema.String),
  serverCertificateHostname: Schema.optional(Schema.String),
}).annotate({ identifier: "ServerVerification" });

export interface ServerAndClientVerification {
  /** Required. Input only. PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link the this certificate to the trusted root certificate. */
  clientCertificate?: string;
  /** Required. Input only. PEM-encoded server root CA certificate. */
  caCertificate?: string;
  /** Optional. Input only. PEM-encoded private key associated with the client certificate. This value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of the Datastream. */
  clientKey?: string;
  /** Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated. */
  serverCertificateHostname?: string;
}

export const ServerAndClientVerification =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientCertificate: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    serverCertificateHostname: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServerAndClientVerification" });

export interface PostgresqlSslConfig {
  /** If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated. */
  serverVerification?: ServerVerification;
  /** If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated. */
  serverAndClientVerification?: ServerAndClientVerification;
}

export const PostgresqlSslConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serverVerification: Schema.optional(ServerVerification),
  serverAndClientVerification: Schema.optional(ServerAndClientVerification),
}).annotate({ identifier: "PostgresqlSslConfig" });

export interface PostgresqlProfile {
  /** Port for the PostgreSQL connection, default value is 5432. */
  port?: number;
  /** Required. Database for the PostgreSQL connection. */
  database?: string;
  /** Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is `prefer` (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication) */
  sslConfig?: PostgresqlSslConfig;
  /** Optional. Password for the PostgreSQL connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Required. Hostname for the PostgreSQL connection. */
  hostname?: string;
  /** Required. Username for the PostgreSQL connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
}

export const PostgresqlProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  port: Schema.optional(Schema.Number),
  database: Schema.optional(Schema.String),
  sslConfig: Schema.optional(PostgresqlSslConfig),
  password: Schema.optional(Schema.String),
  hostname: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  secretManagerStoredPassword: Schema.optional(Schema.String),
}).annotate({ identifier: "PostgresqlProfile" });

export interface OracleAsmConfig {
  /** Required. Port for the Oracle ASM connection. */
  port?: number;
  /** Optional. Connection string attributes */
  connectionAttributes?: Record<string, string>;
  /** Optional. Password for the Oracle ASM connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Required. ASM service name for the Oracle ASM connection. */
  asmService?: string;
  /** Optional. SSL configuration for the Oracle connection. */
  oracleSslConfig?: OracleSslConfig;
  /** Optional. A reference to a Secret Manager resource name storing the Oracle ASM connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Hostname for the Oracle ASM connection. */
  hostname?: string;
  /** Required. Username for the Oracle ASM connection. */
  username?: string;
}

export const OracleAsmConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  port: Schema.optional(Schema.Number),
  connectionAttributes: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  password: Schema.optional(Schema.String),
  asmService: Schema.optional(Schema.String),
  oracleSslConfig: Schema.optional(OracleSslConfig),
  secretManagerStoredPassword: Schema.optional(Schema.String),
  hostname: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
}).annotate({ identifier: "OracleAsmConfig" });

export interface OracleProfile {
  /** Required. Database for the Oracle connection. */
  databaseService?: string;
  /** Optional. Password for the Oracle connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Optional. SSL configuration for the Oracle connection. */
  oracleSslConfig?: OracleSslConfig;
  /** Optional. Configuration for Oracle ASM connection. */
  oracleAsmConfig?: OracleAsmConfig;
  /** Optional. A reference to a Secret Manager resource name storing the Oracle connection password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Required. Username for the Oracle connection. */
  username?: string;
  /** Port for the Oracle connection, default value is 1521. */
  port?: number;
  /** Connection string attributes */
  connectionAttributes?: Record<string, string>;
  /** Required. Hostname for the Oracle connection. */
  hostname?: string;
}

export const OracleProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseService: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
  oracleSslConfig: Schema.optional(OracleSslConfig),
  oracleAsmConfig: Schema.optional(OracleAsmConfig),
  secretManagerStoredPassword: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  port: Schema.optional(Schema.Number),
  connectionAttributes: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  hostname: Schema.optional(Schema.String),
}).annotate({ identifier: "OracleProfile" });

export interface UserCredentials {
  /** Required. Username for the Salesforce connection. */
  username?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Salesforce connection's password. Mutually exclusive with the `password` field. */
  secretManagerStoredPassword?: string;
  /** Optional. Password for the Salesforce connection. Mutually exclusive with the `secret_manager_stored_password` field. */
  password?: string;
  /** Optional. A reference to a Secret Manager resource name storing the Salesforce connection's security token. Mutually exclusive with the `security_token` field. */
  secretManagerStoredSecurityToken?: string;
  /** Optional. Security token for the Salesforce connection. Mutually exclusive with the `secret_manager_stored_security_token` field. */
  securityToken?: string;
}

export const UserCredentials = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.optional(Schema.String),
  secretManagerStoredPassword: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
  secretManagerStoredSecurityToken: Schema.optional(Schema.String),
  securityToken: Schema.optional(Schema.String),
}).annotate({ identifier: "UserCredentials" });

export interface SalesforceProfile {
  /** Required. Domain endpoint for the Salesforce connection. */
  domain?: string;
  /** Connected app authentication. */
  oauth2ClientCredentials?: Oauth2ClientCredentials;
  /** User-password authentication. */
  userCredentials?: UserCredentials;
}

export const SalesforceProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(Schema.String),
  oauth2ClientCredentials: Schema.optional(Oauth2ClientCredentials),
  userCredentials: Schema.optional(UserCredentials),
}).annotate({ identifier: "SalesforceProfile" });

export interface ConnectionProfile {
  /** Profile for connecting to a Cloud Storage destination. */
  gcsProfile?: GcsProfile;
  /** Profile for connecting to a BigQuery destination. */
  bigqueryProfile?: BigQueryProfile;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Static Service IP connectivity. */
  staticServiceIpConnectivity?: StaticServiceIpConnectivity;
  /** Profile for connecting to a MongoDB source. */
  mongodbProfile?: MongodbProfile;
  /** Private connectivity. */
  privateConnectivity?: PrivateConnectivity;
  /** Profile for connecting to a SQLServer source. */
  sqlServerProfile?: SqlServerProfile;
  /** Profile for connecting to a Spanner source. */
  spannerProfile?: SpannerProfile;
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** Forward SSH tunnel connectivity. */
  forwardSshConnectivity?: ForwardSshTunnelConnectivity;
  /** Profile for connecting to a PostgreSQL source. */
  postgresqlProfile?: PostgresqlProfile;
  /** Profile for connecting to a MySQL source. */
  mysqlProfile?: MysqlProfile;
  /** Profile for connecting to an Oracle source. */
  oracleProfile?: OracleProfile;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Profile for connecting to a Salesforce source. */
  salesforceProfile?: SalesforceProfile;
}

export const ConnectionProfile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gcsProfile: Schema.optional(GcsProfile),
  bigqueryProfile: Schema.optional(BigQueryProfile),
  updateTime: Schema.optional(Schema.String),
  staticServiceIpConnectivity: Schema.optional(StaticServiceIpConnectivity),
  mongodbProfile: Schema.optional(MongodbProfile),
  privateConnectivity: Schema.optional(PrivateConnectivity),
  sqlServerProfile: Schema.optional(SqlServerProfile),
  spannerProfile: Schema.optional(SpannerProfile),
  name: Schema.optional(Schema.String),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  forwardSshConnectivity: Schema.optional(ForwardSshTunnelConnectivity),
  postgresqlProfile: Schema.optional(PostgresqlProfile),
  mysqlProfile: Schema.optional(MysqlProfile),
  oracleProfile: Schema.optional(OracleProfile),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  salesforceProfile: Schema.optional(SalesforceProfile),
}).annotate({ identifier: "ConnectionProfile" });

export interface DiscoverConnectionProfileRequest {
  /** Optional. PostgreSQL RDBMS to enrich with child data objects and metadata. */
  postgresqlRdbms?: PostgresqlRdbms;
  /** Optional. Salesforce organization to enrich with child data objects and metadata. */
  salesforceOrg?: SalesforceOrg;
  /** Optional. MySQL RDBMS to enrich with child data objects and metadata. */
  mysqlRdbms?: MysqlRdbms;
  /** Optional. SQLServer RDBMS to enrich with child data objects and metadata. */
  sqlServerRdbms?: SqlServerRdbms;
  /** Optional. Oracle RDBMS to enrich with child data objects and metadata. */
  oracleRdbms?: OracleRdbms;
  /** Optional. An ad-hoc connection profile configuration. */
  connectionProfile?: ConnectionProfile;
  /** Optional. A reference to an existing connection profile. */
  connectionProfileName?: string;
  /** Optional. Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE). */
  fullHierarchy?: boolean;
  /** Optional. Spanner database to enrich with child data objects and metadata. */
  spannerDatabase?: SpannerDatabase;
  /** Optional. MongoDB cluster to enrich with child data objects and metadata. */
  mongodbCluster?: MongodbCluster;
  /** Optional. The number of hierarchy levels below the current level to be retrieved. */
  hierarchyDepth?: number;
}

export const DiscoverConnectionProfileRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postgresqlRdbms: Schema.optional(PostgresqlRdbms),
    salesforceOrg: Schema.optional(SalesforceOrg),
    mysqlRdbms: Schema.optional(MysqlRdbms),
    sqlServerRdbms: Schema.optional(SqlServerRdbms),
    oracleRdbms: Schema.optional(OracleRdbms),
    connectionProfile: Schema.optional(ConnectionProfile),
    connectionProfileName: Schema.optional(Schema.String),
    fullHierarchy: Schema.optional(Schema.Boolean),
    spannerDatabase: Schema.optional(SpannerDatabase),
    mongodbCluster: Schema.optional(MongodbCluster),
    hierarchyDepth: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DiscoverConnectionProfileRequest" });

export interface ListStreamsResponse {
  /** List of streams */
  streams?: ReadonlyArray<Stream>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListStreamsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  streams: Schema.optional(Schema.Array(Stream)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListStreamsResponse" });

export interface VpcPeeringConfig {
  /** Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project}/global/{networks}/{name}` */
  vpc?: string;
  /** Required. A free subnet for peering. (CIDR of /29) */
  subnet?: string;
}

export const VpcPeeringConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vpc: Schema.optional(Schema.String),
  subnet: Schema.optional(Schema.String),
}).annotate({ identifier: "VpcPeeringConfig" });

export interface PrivateConnection {
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. The state of the Private Connection. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "CREATED"
    | "FAILED"
    | "DELETING"
    | "FAILED_TO_DELETE"
    | (string & {});
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Output only. In case of error, the details of the error in a user-friendly format. */
  error?: Datastream_Error;
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** VPC Peering Config. */
  vpcPeeringConfig?: VpcPeeringConfig;
  /** PSC Interface Config. */
  pscInterfaceConfig?: PscInterfaceConfig;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Required. Display name. */
  displayName?: string;
  /** Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
}

export const PrivateConnection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  state: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  error: Schema.optional(Datastream_Error),
  name: Schema.optional(Schema.String),
  vpcPeeringConfig: Schema.optional(VpcPeeringConfig),
  pscInterfaceConfig: Schema.optional(PscInterfaceConfig),
  createTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  satisfiesPzi: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PrivateConnection" });

export interface ListPrivateConnectionsResponse {
  /** List of private connectivity configurations. */
  privateConnections?: ReadonlyArray<PrivateConnection>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnections: Schema.optional(Schema.Array(PrivateConnection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListPrivateConnectionsResponse" });

export interface ListConnectionProfilesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of connection profiles. */
  connectionProfiles?: ReadonlyArray<ConnectionProfile>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    connectionProfiles: Schema.optional(Schema.Array(ConnectionProfile)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListConnectionProfilesResponse" });

export interface NextAvailableStartPosition {}

export const NextAvailableStartPosition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "NextAvailableStartPosition",
  });

export interface CdcStrategy {
  /** Optional. Start replicating from a specific position in the source. */
  specificStartPosition?: SpecificStartPosition;
  /** Optional. Start replicating from the most recent position in the source. */
  mostRecentStartPosition?: MostRecentStartPosition;
  /** Optional. Resume replication from the next available position in the source. */
  nextAvailableStartPosition?: NextAvailableStartPosition;
}

export const CdcStrategy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  specificStartPosition: Schema.optional(SpecificStartPosition),
  mostRecentStartPosition: Schema.optional(MostRecentStartPosition),
  nextAvailableStartPosition: Schema.optional(NextAvailableStartPosition),
}).annotate({ identifier: "CdcStrategy" });

export interface RunStreamRequest {
  /** Optional. Update the stream without validating it. */
  force?: boolean;
  /** Optional. The CDC strategy of the stream. If not set, the system's default value will be used. */
  cdcStrategy?: CdcStrategy;
}

export const RunStreamRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  force: Schema.optional(Schema.Boolean),
  cdcStrategy: Schema.optional(CdcStrategy),
}).annotate({ identifier: "RunStreamRequest" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  error: Schema.optional(Status),
  name: Schema.optional(Schema.String),
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

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface EventFilter {
  /** An SQL-query Where clause selecting which data should be included, not including the "WHERE" keyword. e.g., `t.key1 = 'value1' AND t.key2 = 'value2'` */
  sqlWhereClause?: string;
}

export const EventFilter = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sqlWhereClause: Schema.optional(Schema.String),
}).annotate({ identifier: "EventFilter" });

export interface StartBackfillJobRequest {
  /** Optional. Optional event filter. If not set, or empty, the backfill will be performed on the entire object. This is currently used for partial backfill and only supported for SQL Server sources. */
  eventFilter?: EventFilter;
}

export const StartBackfillJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventFilter: Schema.optional(EventFilter),
  }).annotate({ identifier: "StartBackfillJobRequest" });

export interface ValidationMessage {
  /** Message severity level (warning or error). */
  level?: "LEVEL_UNSPECIFIED" | "WARNING" | "ERROR" | (string & {});
  /** Additional metadata related to the result. */
  metadata?: Record<string, string>;
  /** The result of the validation. */
  message?: string;
  /** A custom code identifying this specific message. */
  code?: string;
}

export const ValidationMessage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  level: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "ValidationMessage" });

export interface Validation {
  /** Output only. Validation execution status. */
  state?:
    | "STATE_UNSPECIFIED"
    | "NOT_EXECUTED"
    | "FAILED"
    | "PASSED"
    | "WARNING"
    | (string & {});
  /** Messages reflecting the validation results. */
  message?: ReadonlyArray<ValidationMessage>;
  /** A short description of the validation. */
  description?: string;
  /** A custom code identifying this validation. */
  code?: string;
}

export const Validation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.String),
  message: Schema.optional(Schema.Array(ValidationMessage)),
  description: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "Validation" });

export interface ValidationResult {
  /** A list of validations (includes both executed as well as not executed validations). */
  validations?: ReadonlyArray<Validation>;
}

export const ValidationResult = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  validations: Schema.optional(Schema.Array(Validation)),
}).annotate({ identifier: "ValidationResult" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Results of executed validations if there are any. */
  validationResult?: ValidationResult;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  validationResult: Schema.optional(ValidationResult),
  target: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface StopBackfillJobResponse {
  /** The stream object resource the backfill job was stopped for. */
  object?: StreamObject;
}

export const StopBackfillJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StreamObject),
  }).annotate({ identifier: "StopBackfillJobResponse" });

export interface Route {
  /** Output only. Identifier. The resource's name. */
  name?: string;
  /** Labels. */
  labels?: Record<string, string>;
  /** Output only. The create time of the resource. */
  createTime?: string;
  /** Destination port for connection */
  destinationPort?: number;
  /** Required. Destination address for connection */
  destinationAddress?: string;
  /** Output only. The update time of the resource. */
  updateTime?: string;
  /** Required. Display name. */
  displayName?: string;
}

export const Route = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  createTime: Schema.optional(Schema.String),
  destinationPort: Schema.optional(Schema.Number),
  destinationAddress: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Route" });

export interface ListRoutesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** List of Routes. */
  routes?: ReadonlyArray<Route>;
}

export const ListRoutesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  routes: Schema.optional(Schema.Array(Route)),
}).annotate({ identifier: "ListRoutesResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface StartBackfillJobResponse {
  /** The stream object resource a backfill job was started for. */
  object?: StreamObject;
}

export const StartBackfillJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(StreamObject),
  }).annotate({ identifier: "StartBackfillJobResponse" });

export interface LookupStreamObjectRequest {
  /** Required. The source object identifier which maps to the stream object. */
  sourceObjectIdentifier?: SourceObjectIdentifier;
}

export const LookupStreamObjectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceObjectIdentifier: Schema.optional(SourceObjectIdentifier),
  }).annotate({ identifier: "LookupStreamObjectRequest" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Location)),
}).annotate({ identifier: "ListLocationsResponse" });

export interface ErrorInfo {
  /** The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com". */
  domain?: string;
  /** Additional structured details about this error. Keys must match a regular expression of `a-z+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"}`, should be returned as, `{"instanceLimitPerRequest": "100"}`, if the client exceeds the number of instances that can be created in a single (batch) request. */
  metadata?: Record<string, string>;
  /** The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
  reason?: string;
}

export const ErrorInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  reason: Schema.optional(Schema.String),
}).annotate({ identifier: "ErrorInfo" });

export interface RequestInfo {
  /** An opaque string that should only be interpreted by the service generating it. For example, it can be used to identify requests in the service's logs. */
  requestId?: string;
  /** Any data that was used to serve this request. For example, an encrypted stack trace that can be sent back to the service provider for debugging. */
  servingData?: string;
}

export const RequestInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestId: Schema.optional(Schema.String),
  servingData: Schema.optional(Schema.String),
}).annotate({ identifier: "RequestInfo" });

export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations?: ReadonlyArray<PreconditionFailureViolation>;
}

export const PreconditionFailure = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  violations: Schema.optional(Schema.Array(PreconditionFailureViolation)),
}).annotate({ identifier: "PreconditionFailure" });

export interface ResourceInfo {
  /** The name of the resource being accessed. For example, a shared calendar name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current error is google.rpc.Code.PERMISSION_DENIED. */
  resourceName?: string;
  /** A name for the type of resource being accessed, e.g. "sql table", "cloud storage bucket", "file", "Google calendar"; or the type URL of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic". */
  resourceType?: string;
  /** Describes what error is encountered when accessing this resource. For example, updating a cloud project may require the `writer` permission on the developer console project. */
  description?: string;
  /** The owner of the resource (optional). For example, "user:" or "project:". */
  owner?: string;
}

export const ResourceInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceName: Schema.optional(Schema.String),
  resourceType: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  owner: Schema.optional(Schema.String),
}).annotate({ identifier: "ResourceInfo" });

export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: string;
}

export const RetryInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  retryDelay: Schema.optional(Schema.String),
}).annotate({ identifier: "RetryInfo" });

export interface DiscoverConnectionProfileResponse {
  /** Enriched Spanner database. */
  spannerDatabase?: SpannerDatabase;
  /** Enriched SQLServer RDBMS object. */
  sqlServerRdbms?: SqlServerRdbms;
  /** Enriched MySQL RDBMS object. */
  mysqlRdbms?: MysqlRdbms;
  /** Enriched PostgreSQL RDBMS object. */
  postgresqlRdbms?: PostgresqlRdbms;
  /** Enriched Salesforce organization. */
  salesforceOrg?: SalesforceOrg;
  /** Enriched Oracle RDBMS object. */
  oracleRdbms?: OracleRdbms;
  /** Enriched MongoDB cluster. */
  mongodbCluster?: MongodbCluster;
}

export const DiscoverConnectionProfileResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spannerDatabase: Schema.optional(SpannerDatabase),
    sqlServerRdbms: Schema.optional(SqlServerRdbms),
    mysqlRdbms: Schema.optional(MysqlRdbms),
    postgresqlRdbms: Schema.optional(PostgresqlRdbms),
    salesforceOrg: Schema.optional(SalesforceOrg),
    oracleRdbms: Schema.optional(OracleRdbms),
    mongodbCluster: Schema.optional(MongodbCluster),
  }).annotate({ identifier: "DiscoverConnectionProfileResponse" });

export interface FetchStaticIpsResponse {
  /** list of static ips by account */
  staticIps?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FetchStaticIpsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    staticIps: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "FetchStaticIpsResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
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

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface FetchStaticIpsProjectsLocationsRequest {
  /** Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/* /locations/*`. */
  name: string;
  /** Optional. A page token, received from a previous `ListStaticIps` call. will likely not be specified. */
  pageToken?: string;
  /** Optional. Maximum number of Ips to return, will likely not be specified. */
  pageSize?: number;
}

export const FetchStaticIpsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}:fetchStaticIps" }),
    svc,
  ) as unknown as Schema.Schema<FetchStaticIpsProjectsLocationsRequest>;

export type FetchStaticIpsProjectsLocationsResponse = FetchStaticIpsResponse;
export const FetchStaticIpsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ FetchStaticIpsResponse;

export type FetchStaticIpsProjectsLocationsError = DefaultErrors;

/** The FetchStaticIps API call exposes the static IP addresses used by Datastream. */
export const fetchStaticIpsProjectsLocations: API.PaginatedOperationMethod<
  FetchStaticIpsProjectsLocationsRequest,
  FetchStaticIpsProjectsLocationsResponse,
  FetchStaticIpsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: FetchStaticIpsProjectsLocationsRequest,
  output: FetchStaticIpsProjectsLocationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
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

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
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

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
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

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connectivity configuration to get. */
  name: string;
}

export const GetProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPrivateConnectionsRequest>;

export type GetProjectsLocationsPrivateConnectionsResponse = PrivateConnection;
export const GetProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PrivateConnection;

export type GetProjectsLocationsPrivateConnectionsError = DefaultErrors;

/** Use this method to get details about a private connectivity configuration. */
export const getProjectsLocationsPrivateConnections: API.OperationMethod<
  GetProjectsLocationsPrivateConnectionsRequest,
  GetProjectsLocationsPrivateConnectionsResponse,
  GetProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPrivateConnectionsRequest,
  output: GetProjectsLocationsPrivateConnectionsResponse,
  errors: [],
}));

export interface ListProjectsLocationsPrivateConnectionsRequest {
  /** Required. The parent that owns the collection of private connectivity configurations. */
  parent: string;
  /** Optional. Filter request. */
  filter?: string;
  /** Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
}

export const ListProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/privateConnections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPrivateConnectionsRequest>;

export type ListProjectsLocationsPrivateConnectionsResponse =
  ListPrivateConnectionsResponse;
export const ListProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPrivateConnectionsResponse;

export type ListProjectsLocationsPrivateConnectionsError = DefaultErrors;

/** Use this method to list private connectivity configurations in a project and location. */
export const listProjectsLocationsPrivateConnections: API.PaginatedOperationMethod<
  ListProjectsLocationsPrivateConnectionsRequest,
  ListProjectsLocationsPrivateConnectionsResponse,
  ListProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPrivateConnectionsRequest,
  output: ListProjectsLocationsPrivateConnectionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsPrivateConnectionsRequest {
  /** Required. The private connectivity identifier. */
  privateConnectionId?: string;
  /** Optional. If set to true, will skip validations. */
  force?: boolean;
  /** Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection. */
  validateOnly?: boolean;
  /** Required. The parent that owns the collection of PrivateConnections. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: PrivateConnection;
}

export const CreateProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateConnectionId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("privateConnectionId"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(PrivateConnection).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/privateConnections",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPrivateConnectionsRequest>;

export type CreateProjectsLocationsPrivateConnectionsResponse = Operation;
export const CreateProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsPrivateConnectionsError = DefaultErrors;

/** Use this method to create a private connectivity configuration. */
export const createProjectsLocationsPrivateConnections: API.OperationMethod<
  CreateProjectsLocationsPrivateConnectionsRequest,
  CreateProjectsLocationsPrivateConnectionsResponse,
  CreateProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPrivateConnectionsRequest,
  output: CreateProjectsLocationsPrivateConnectionsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsPrivateConnectionsRequest {
  /** Required. The name of the private connectivity configuration to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted. */
  force?: boolean;
}

export const DeleteProjectsLocationsPrivateConnectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPrivateConnectionsRequest>;

export type DeleteProjectsLocationsPrivateConnectionsResponse = Operation;
export const DeleteProjectsLocationsPrivateConnectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsPrivateConnectionsError = DefaultErrors;

/** Use this method to delete a private connectivity configuration. */
export const deleteProjectsLocationsPrivateConnections: API.OperationMethod<
  DeleteProjectsLocationsPrivateConnectionsRequest,
  DeleteProjectsLocationsPrivateConnectionsResponse,
  DeleteProjectsLocationsPrivateConnectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPrivateConnectionsRequest,
  output: DeleteProjectsLocationsPrivateConnectionsResponse,
  errors: [],
}));

export interface GetProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Required. The name of the Route resource to get. */
  name: string;
}

export const GetProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPrivateConnectionsRoutesRequest>;

export type GetProjectsLocationsPrivateConnectionsRoutesResponse = Route;
export const GetProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Route;

export type GetProjectsLocationsPrivateConnectionsRoutesError = DefaultErrors;

/** Use this method to get details about a route. */
export const getProjectsLocationsPrivateConnectionsRoutes: API.OperationMethod<
  GetProjectsLocationsPrivateConnectionsRoutesRequest,
  GetProjectsLocationsPrivateConnectionsRoutesResponse,
  GetProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPrivateConnectionsRoutesRequest,
  output: GetProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [],
}));

export interface ListProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent that owns the collection of Routess. */
  parent: string;
}

export const ListProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/routes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPrivateConnectionsRoutesRequest>;

export type ListProjectsLocationsPrivateConnectionsRoutesResponse =
  ListRoutesResponse;
export const ListProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRoutesResponse;

export type ListProjectsLocationsPrivateConnectionsRoutesError = DefaultErrors;

/** Use this method to list routes created for a private connectivity configuration in a project and location. */
export const listProjectsLocationsPrivateConnectionsRoutes: API.PaginatedOperationMethod<
  ListProjectsLocationsPrivateConnectionsRoutesRequest,
  ListProjectsLocationsPrivateConnectionsRoutesResponse,
  ListProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPrivateConnectionsRoutesRequest,
  output: ListProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Required. The parent that owns the collection of Routes. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The Route identifier. */
  routeId?: string;
  /** Request body */
  body?: Route;
}

export const CreateProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    routeId: Schema.optional(Schema.String).pipe(T.HttpQuery("routeId")),
    body: Schema.optional(Route).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/routes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPrivateConnectionsRoutesRequest>;

export type CreateProjectsLocationsPrivateConnectionsRoutesResponse = Operation;
export const CreateProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsPrivateConnectionsRoutesError =
  DefaultErrors;

/** Use this method to create a route for a private connectivity configuration in a project and location. */
export const createProjectsLocationsPrivateConnectionsRoutes: API.OperationMethod<
  CreateProjectsLocationsPrivateConnectionsRoutesRequest,
  CreateProjectsLocationsPrivateConnectionsRoutesResponse,
  CreateProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPrivateConnectionsRoutesRequest,
  output: CreateProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsPrivateConnectionsRoutesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the Route resource to delete. */
  name: string;
}

export const DeleteProjectsLocationsPrivateConnectionsRoutesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPrivateConnectionsRoutesRequest>;

export type DeleteProjectsLocationsPrivateConnectionsRoutesResponse = Operation;
export const DeleteProjectsLocationsPrivateConnectionsRoutesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsPrivateConnectionsRoutesError =
  DefaultErrors;

/** Use this method to delete a route. */
export const deleteProjectsLocationsPrivateConnectionsRoutes: API.OperationMethod<
  DeleteProjectsLocationsPrivateConnectionsRoutesRequest,
  DeleteProjectsLocationsPrivateConnectionsRoutesResponse,
  DeleteProjectsLocationsPrivateConnectionsRoutesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPrivateConnectionsRoutesRequest,
  output: DeleteProjectsLocationsPrivateConnectionsRoutesResponse,
  errors: [],
}));

export interface DiscoverProjectsLocationsConnectionProfilesRequest {
  /** Required. The parent resource of the connection profile type. Must be in the format `projects/* /locations/*`. */
  parent: string;
  /** Request body */
  body?: DiscoverConnectionProfileRequest;
}

export const DiscoverProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(DiscoverConnectionProfileRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/connectionProfiles:discover",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DiscoverProjectsLocationsConnectionProfilesRequest>;

export type DiscoverProjectsLocationsConnectionProfilesResponse =
  DiscoverConnectionProfileResponse;
export const DiscoverProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoverConnectionProfileResponse;

export type DiscoverProjectsLocationsConnectionProfilesError = DefaultErrors;

/** Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request. */
export const discoverProjectsLocationsConnectionProfiles: API.OperationMethod<
  DiscoverProjectsLocationsConnectionProfilesRequest,
  DiscoverProjectsLocationsConnectionProfilesResponse,
  DiscoverProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DiscoverProjectsLocationsConnectionProfilesRequest,
  output: DiscoverProjectsLocationsConnectionProfilesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsConnectionProfilesRequest {
  /** Required. The name of the connection profile resource to delete. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsConnectionProfilesRequest>;

export type DeleteProjectsLocationsConnectionProfilesResponse = Operation;
export const DeleteProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsConnectionProfilesError = DefaultErrors;

/** Use this method to delete a connection profile. */
export const deleteProjectsLocationsConnectionProfiles: API.OperationMethod<
  DeleteProjectsLocationsConnectionProfilesRequest,
  DeleteProjectsLocationsConnectionProfilesResponse,
  DeleteProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsConnectionProfilesRequest,
  output: DeleteProjectsLocationsConnectionProfilesResponse,
  errors: [],
}));

export interface ListProjectsLocationsConnectionProfilesRequest {
  /** Optional. Filter request. */
  filter?: string;
  /** Optional. Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent that owns the collection of connection profiles. */
  parent: string;
}

export const ListProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/connectionProfiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsConnectionProfilesRequest>;

export type ListProjectsLocationsConnectionProfilesResponse =
  ListConnectionProfilesResponse;
export const ListProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListConnectionProfilesResponse;

export type ListProjectsLocationsConnectionProfilesError = DefaultErrors;

/** Use this method to list connection profiles created in a project and location. */
export const listProjectsLocationsConnectionProfiles: API.PaginatedOperationMethod<
  ListProjectsLocationsConnectionProfilesRequest,
  ListProjectsLocationsConnectionProfilesResponse,
  ListProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsConnectionProfilesRequest,
  output: ListProjectsLocationsConnectionProfilesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsConnectionProfilesRequest {
  /** Required. The name of the connection profile resource to get. */
  name: string;
}

export const GetProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConnectionProfilesRequest>;

export type GetProjectsLocationsConnectionProfilesResponse = ConnectionProfile;
export const GetProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ConnectionProfile;

export type GetProjectsLocationsConnectionProfilesError = DefaultErrors;

/** Use this method to get details about a connection profile. */
export const getProjectsLocationsConnectionProfiles: API.OperationMethod<
  GetProjectsLocationsConnectionProfilesRequest,
  GetProjectsLocationsConnectionProfilesResponse,
  GetProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConnectionProfilesRequest,
  output: GetProjectsLocationsConnectionProfilesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsConnectionProfilesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. Only validate the connection profile, but don't update any resources. The default is false. */
  validateOnly?: boolean;
  /** Optional. Update the connection profile without validating it. */
  force?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Identifier. The resource's name. */
  name: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const PatchProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ConnectionProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConnectionProfilesRequest>;

export type PatchProjectsLocationsConnectionProfilesResponse = Operation;
export const PatchProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsConnectionProfilesError = DefaultErrors;

/** Use this method to update the parameters of a connection profile. */
export const patchProjectsLocationsConnectionProfiles: API.OperationMethod<
  PatchProjectsLocationsConnectionProfilesRequest,
  PatchProjectsLocationsConnectionProfilesResponse,
  PatchProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConnectionProfilesRequest,
  output: PatchProjectsLocationsConnectionProfilesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsConnectionProfilesRequest {
  /** Optional. Only validate the connection profile, but don't create any resources. The default is false. */
  validateOnly?: boolean;
  /** Optional. Create the connection profile without validating it. */
  force?: boolean;
  /** Required. The parent that owns the collection of ConnectionProfiles. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The connection profile identifier. */
  connectionProfileId?: string;
  /** Request body */
  body?: ConnectionProfile;
}

export const CreateProjectsLocationsConnectionProfilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    connectionProfileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("connectionProfileId"),
    ),
    body: Schema.optional(ConnectionProfile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/connectionProfiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsConnectionProfilesRequest>;

export type CreateProjectsLocationsConnectionProfilesResponse = Operation;
export const CreateProjectsLocationsConnectionProfilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsConnectionProfilesError = DefaultErrors;

/** Use this method to create a connection profile in a project and location. */
export const createProjectsLocationsConnectionProfiles: API.OperationMethod<
  CreateProjectsLocationsConnectionProfilesRequest,
  CreateProjectsLocationsConnectionProfilesResponse,
  CreateProjectsLocationsConnectionProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsConnectionProfilesRequest,
  output: CreateProjectsLocationsConnectionProfilesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsStreamsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the stream resource to delete. */
  name: string;
}

export const DeleteProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsStreamsRequest>;

export type DeleteProjectsLocationsStreamsResponse = Operation;
export const DeleteProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsStreamsError = DefaultErrors;

/** Use this method to delete a stream. */
export const deleteProjectsLocationsStreams: API.OperationMethod<
  DeleteProjectsLocationsStreamsRequest,
  DeleteProjectsLocationsStreamsResponse,
  DeleteProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsStreamsRequest,
  output: DeleteProjectsLocationsStreamsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsStreamsRequest {
  /** Optional. Only validate the stream, but don't create any resources. The default is false. */
  validateOnly?: boolean;
  /** Optional. Create the stream without validating it. */
  force?: boolean;
  /** Required. The parent that owns the collection of streams. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The stream identifier. */
  streamId?: string;
  /** Request body */
  body?: Stream;
}

export const CreateProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    streamId: Schema.optional(Schema.String).pipe(T.HttpQuery("streamId")),
    body: Schema.optional(Stream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/streams", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsStreamsRequest>;

export type CreateProjectsLocationsStreamsResponse = Operation;
export const CreateProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsStreamsError = DefaultErrors;

/** Use this method to create a stream. */
export const createProjectsLocationsStreams: API.OperationMethod<
  CreateProjectsLocationsStreamsRequest,
  CreateProjectsLocationsStreamsResponse,
  CreateProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsStreamsRequest,
  output: CreateProjectsLocationsStreamsResponse,
  errors: [],
}));

export interface RunProjectsLocationsStreamsRequest {
  /** Required. Name of the stream resource to start, in the format: projects/{project_id}/locations/{location}/streams/{stream_name} */
  name: string;
  /** Request body */
  body?: RunStreamRequest;
}

export const RunProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunStreamRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsStreamsRequest>;

export type RunProjectsLocationsStreamsResponse = Operation;
export const RunProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunProjectsLocationsStreamsError = DefaultErrors;

/** Use this method to start, resume or recover a stream with a non default CDC strategy. */
export const runProjectsLocationsStreams: API.OperationMethod<
  RunProjectsLocationsStreamsRequest,
  RunProjectsLocationsStreamsResponse,
  RunProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsStreamsRequest,
  output: RunProjectsLocationsStreamsResponse,
  errors: [],
}));

export interface ListProjectsLocationsStreamsRequest {
  /** Required. The parent that owns the collection of streams. */
  parent: string;
  /** Optional. Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Order by fields for the result. */
  orderBy?: string;
  /** Optional. Filter request. */
  filter?: string;
}

export const ListProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/streams" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsStreamsRequest>;

export type ListProjectsLocationsStreamsResponse = ListStreamsResponse;
export const ListProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStreamsResponse;

export type ListProjectsLocationsStreamsError = DefaultErrors;

/** Use this method to list streams in a project and location. */
export const listProjectsLocationsStreams: API.PaginatedOperationMethod<
  ListProjectsLocationsStreamsRequest,
  ListProjectsLocationsStreamsResponse,
  ListProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStreamsRequest,
  output: ListProjectsLocationsStreamsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsStreamsRequest {
  /** Required. The name of the stream resource to get. */
  name: string;
}

export const GetProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsStreamsRequest>;

export type GetProjectsLocationsStreamsResponse = Stream;
export const GetProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Stream;

export type GetProjectsLocationsStreamsError = DefaultErrors;

/** Use this method to get details about a stream. */
export const getProjectsLocationsStreams: API.OperationMethod<
  GetProjectsLocationsStreamsRequest,
  GetProjectsLocationsStreamsResponse,
  GetProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsStreamsRequest,
  output: GetProjectsLocationsStreamsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsStreamsRequest {
  /** Optional. Only validate the stream with the changes, without actually updating it. The default is false. */
  validateOnly?: boolean;
  /** Optional. Update the stream without validating it. */
  force?: boolean;
  /** Output only. Identifier. The stream's name. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Stream;
}

export const PatchProjectsLocationsStreamsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Stream).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsStreamsRequest>;

export type PatchProjectsLocationsStreamsResponse = Operation;
export const PatchProjectsLocationsStreamsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsStreamsError = DefaultErrors;

/** Use this method to update the configuration of a stream. */
export const patchProjectsLocationsStreams: API.OperationMethod<
  PatchProjectsLocationsStreamsRequest,
  PatchProjectsLocationsStreamsResponse,
  PatchProjectsLocationsStreamsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsStreamsRequest,
  output: PatchProjectsLocationsStreamsResponse,
  errors: [],
}));

export interface LookupProjectsLocationsStreamsObjectsRequest {
  /** Required. The parent stream that owns the collection of objects. */
  parent: string;
  /** Request body */
  body?: LookupStreamObjectRequest;
}

export const LookupProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(LookupStreamObjectRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/objects:lookup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<LookupProjectsLocationsStreamsObjectsRequest>;

export type LookupProjectsLocationsStreamsObjectsResponse = StreamObject;
export const LookupProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StreamObject;

export type LookupProjectsLocationsStreamsObjectsError = DefaultErrors;

/** Use this method to look up a stream object by its source object identifier. */
export const lookupProjectsLocationsStreamsObjects: API.OperationMethod<
  LookupProjectsLocationsStreamsObjectsRequest,
  LookupProjectsLocationsStreamsObjectsResponse,
  LookupProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsLocationsStreamsObjectsRequest,
  output: LookupProjectsLocationsStreamsObjectsResponse,
  errors: [],
}));

export interface StartBackfillJobProjectsLocationsStreamsObjectsRequest {
  /** Required. The name of the stream object resource to start a backfill job for. */
  object: string;
  /** Request body */
  body?: StartBackfillJobRequest;
}

export const StartBackfillJobProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String.pipe(T.HttpPath("object")),
    body: Schema.optional(StartBackfillJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{object}:startBackfillJob",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartBackfillJobProjectsLocationsStreamsObjectsRequest>;

export type StartBackfillJobProjectsLocationsStreamsObjectsResponse =
  StartBackfillJobResponse;
export const StartBackfillJobProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StartBackfillJobResponse;

export type StartBackfillJobProjectsLocationsStreamsObjectsError =
  DefaultErrors;

/** Use this method to start a backfill job for the specified stream object. */
export const startBackfillJobProjectsLocationsStreamsObjects: API.OperationMethod<
  StartBackfillJobProjectsLocationsStreamsObjectsRequest,
  StartBackfillJobProjectsLocationsStreamsObjectsResponse,
  StartBackfillJobProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartBackfillJobProjectsLocationsStreamsObjectsRequest,
  output: StartBackfillJobProjectsLocationsStreamsObjectsResponse,
  errors: [],
}));

export interface StopBackfillJobProjectsLocationsStreamsObjectsRequest {
  /** Required. The name of the stream object resource to stop the backfill job for. */
  object: string;
  /** Request body */
  body?: StopBackfillJobRequest;
}

export const StopBackfillJobProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String.pipe(T.HttpPath("object")),
    body: Schema.optional(StopBackfillJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{object}:stopBackfillJob",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StopBackfillJobProjectsLocationsStreamsObjectsRequest>;

export type StopBackfillJobProjectsLocationsStreamsObjectsResponse =
  StopBackfillJobResponse;
export const StopBackfillJobProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StopBackfillJobResponse;

export type StopBackfillJobProjectsLocationsStreamsObjectsError = DefaultErrors;

/** Use this method to stop a backfill job for the specified stream object. */
export const stopBackfillJobProjectsLocationsStreamsObjects: API.OperationMethod<
  StopBackfillJobProjectsLocationsStreamsObjectsRequest,
  StopBackfillJobProjectsLocationsStreamsObjectsResponse,
  StopBackfillJobProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopBackfillJobProjectsLocationsStreamsObjectsRequest,
  output: StopBackfillJobProjectsLocationsStreamsObjectsResponse,
  errors: [],
}));

export interface GetProjectsLocationsStreamsObjectsRequest {
  /** Required. The name of the stream object resource to get. */
  name: string;
}

export const GetProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsStreamsObjectsRequest>;

export type GetProjectsLocationsStreamsObjectsResponse = StreamObject;
export const GetProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ StreamObject;

export type GetProjectsLocationsStreamsObjectsError = DefaultErrors;

/** Use this method to get details about a stream object. */
export const getProjectsLocationsStreamsObjects: API.OperationMethod<
  GetProjectsLocationsStreamsObjectsRequest,
  GetProjectsLocationsStreamsObjectsResponse,
  GetProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsStreamsObjectsRequest,
  output: GetProjectsLocationsStreamsObjectsResponse,
  errors: [],
}));

export interface ListProjectsLocationsStreamsObjectsRequest {
  /** Optional. Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent stream that owns the collection of objects. */
  parent: string;
}

export const ListProjectsLocationsStreamsObjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/objects" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsStreamsObjectsRequest>;

export type ListProjectsLocationsStreamsObjectsResponse =
  ListStreamObjectsResponse;
export const ListProjectsLocationsStreamsObjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListStreamObjectsResponse;

export type ListProjectsLocationsStreamsObjectsError = DefaultErrors;

/** Use this method to list the objects of a specific stream. */
export const listProjectsLocationsStreamsObjects: API.PaginatedOperationMethod<
  ListProjectsLocationsStreamsObjectsRequest,
  ListProjectsLocationsStreamsObjectsResponse,
  ListProjectsLocationsStreamsObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsStreamsObjectsRequest,
  output: ListProjectsLocationsStreamsObjectsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
