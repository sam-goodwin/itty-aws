// ==========================================================================
// Database Center API (databasecenter v1beta)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "databasecenter",
  version: "v1beta",
  rootUrl: "https://databasecenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Databasecenter_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Databasecenter_Date: Schema.Codec<Databasecenter_Date> =
  /*@__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Databasecenter_Date" });

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

export const TimeOfDay: Schema.Codec<TimeOfDay> =
  /*@__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface ResourceMaintenanceDenySchedule {
  /** Optional. The start date of the deny maintenance period. */
  startDate?: Databasecenter_Date;
  /** Optional. Time in UTC when the deny period starts on start_date and ends on end_date. */
  time?: TimeOfDay;
  /** Optional. Deny period end date. */
  endDate?: Databasecenter_Date;
}

export const ResourceMaintenanceDenySchedule: Schema.Codec<ResourceMaintenanceDenySchedule> =
  /*@__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Databasecenter_Date),
    time: Schema.optional(TimeOfDay),
    endDate: Schema.optional(Databasecenter_Date),
  }).annotate({ identifier: "ResourceMaintenanceDenySchedule" });

export interface SignalFilter {
  /** Optional. Represents the type of the Signal for which the filter is for. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED"
    | "SIGNAL_TYPE_GROUP_MULTIREGIONAL"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_SHORT_BACKUP_RETENTION"
    | "SIGNAL_TYPE_LAST_BACKUP_FAILED"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53_R5"
    | "SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001_V2022"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0"
    | "SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4"
    | "SIGNAL_TYPE_VIOLATES_HIPAA"
    | "SIGNAL_TYPE_VIOLATES_SOC2_V2017"
    | "SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING"
    | "SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_VERBOSE_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_MOST_ERRORS"
    | "SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS"
    | "SIGNAL_TYPE_MINIMAL_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_STATS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS"
    | "SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS"
    | "SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED"
    | "SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO"
    | "SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS"
    | "SIGNAL_TYPE_DATABASE_NAMES_EXPOSED"
    | "SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED"
    | "SIGNAL_TYPE_PUBLIC_IP_ENABLED"
    | "SIGNAL_TYPE_IDLE"
    | "SIGNAL_TYPE_OVERPROVISIONED"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES"
    | "SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION"
    | "SIGNAL_TYPE_UNDERPROVISIONED"
    | "SIGNAL_TYPE_OUT_OF_DISK"
    | "SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS"
    | "SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP"
    | "SIGNAL_TYPE_QUOTA_LIMIT"
    | "SIGNAL_TYPE_NO_PASSWORD_POLICY"
    | "SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES"
    | "SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES"
    | "SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM"
    | "SIGNAL_TYPE_NO_USER_PASSWORD_POLICY"
    | "SIGNAL_TYPE_HOT_NODE"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_INEFFICIENT_QUERY"
    | "SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD"
    | "SIGNAL_TYPE_MEMORY_LIMIT"
    | "SIGNAL_TYPE_MAX_SERVER_MEMORY"
    | "SIGNAL_TYPE_LARGE_ROWS"
    | "SIGNAL_TYPE_HIGH_WRITE_PRESSURE"
    | "SIGNAL_TYPE_HIGH_READ_PRESSURE"
    | "SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_HIGH_MAINTENANCE_DOWNTIME_RISK"
    | "SIGNAL_TYPE_LOW_CACHE_HIT_AND_MAINTENANCE_DOWNTIME"
    | (string & {});
  /** Optional. Represents the status of the Signal for which the filter is for. */
  signalStatus?:
    | "SIGNAL_STATUS_UNSPECIFIED"
    | "SIGNAL_STATUS_NOT_APPLICABLE"
    | "SIGNAL_STATUS_OK"
    | "SIGNAL_STATUS_ISSUE"
    | "SIGNAL_STATUS_NOT_ENABLED"
    | (string & {});
}

export const SignalFilter: Schema.Codec<SignalFilter> =
  /*@__PURE__*/ Schema.Struct({
    signalType: Schema.optional(Schema.String),
    signalStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignalFilter" });

export interface SignalTypeGroup {
  /** Optional. List of signal types present in the group. */
  signalTypes?: ReadonlyArray<
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED"
    | "SIGNAL_TYPE_GROUP_MULTIREGIONAL"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_SHORT_BACKUP_RETENTION"
    | "SIGNAL_TYPE_LAST_BACKUP_FAILED"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53_R5"
    | "SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001_V2022"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0"
    | "SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4"
    | "SIGNAL_TYPE_VIOLATES_HIPAA"
    | "SIGNAL_TYPE_VIOLATES_SOC2_V2017"
    | "SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING"
    | "SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_VERBOSE_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_MOST_ERRORS"
    | "SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS"
    | "SIGNAL_TYPE_MINIMAL_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_STATS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS"
    | "SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS"
    | "SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED"
    | "SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO"
    | "SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS"
    | "SIGNAL_TYPE_DATABASE_NAMES_EXPOSED"
    | "SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED"
    | "SIGNAL_TYPE_PUBLIC_IP_ENABLED"
    | "SIGNAL_TYPE_IDLE"
    | "SIGNAL_TYPE_OVERPROVISIONED"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES"
    | "SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION"
    | "SIGNAL_TYPE_UNDERPROVISIONED"
    | "SIGNAL_TYPE_OUT_OF_DISK"
    | "SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS"
    | "SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP"
    | "SIGNAL_TYPE_QUOTA_LIMIT"
    | "SIGNAL_TYPE_NO_PASSWORD_POLICY"
    | "SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES"
    | "SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES"
    | "SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM"
    | "SIGNAL_TYPE_NO_USER_PASSWORD_POLICY"
    | "SIGNAL_TYPE_HOT_NODE"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_INEFFICIENT_QUERY"
    | "SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD"
    | "SIGNAL_TYPE_MEMORY_LIMIT"
    | "SIGNAL_TYPE_MAX_SERVER_MEMORY"
    | "SIGNAL_TYPE_LARGE_ROWS"
    | "SIGNAL_TYPE_HIGH_WRITE_PRESSURE"
    | "SIGNAL_TYPE_HIGH_READ_PRESSURE"
    | "SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_HIGH_MAINTENANCE_DOWNTIME_RISK"
    | "SIGNAL_TYPE_LOW_CACHE_HIT_AND_MAINTENANCE_DOWNTIME"
    | (string & {})
  >;
  /** Required. The display name of a signal group. */
  displayName?: string;
}

export const SignalTypeGroup: Schema.Codec<SignalTypeGroup> =
  /*@__PURE__*/ Schema.Struct({
    signalTypes: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignalTypeGroup" });

export interface QueryDatabaseResourceGroupsRequest {
  /** Optional. A page token, received from a previous `QueryDatabaseResourceGroupsRequest` call. Provide this to retrieve the subsequent page. All parameters except page_token should match the parameters in the call that provided the page page token. */
  pageToken?: string;
  /** Optional. Filters based on signals. The list will be ORed together and then ANDed with the `filters` field above. */
  signalFilters?: ReadonlyArray<SignalFilter>;
  /** Optional. Groups of signal types that are requested. */
  signalTypeGroups?: ReadonlyArray<SignalTypeGroup>;
  /** Optional. A field that specifies the sort order of the results. The following fields are sortable: * full_resource_name * product.type * product.engine * product.version * container * issue_count * machine_config.vcpu_count * machine_config.memory_size_bytes * machine_config.shard_count * resource_name * issue_severity * signal_type * location * resource_type * instance_type * edition * metrics.p99_cpu_utilization * metrics.p95_cpu_utilization * metrics.current_storage_used_bytes * metrics.node_count * metrics.processing_unit_count * metrics.current_memory_used_bytes * metrics.peak_storage_utilization * metrics.peak_number_connections * metrics.peak_memory_utilization The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It only supports a single field at a time. For example: `order_by = "full_resource_name"` sorts response in ascending order `order_by = "full_resource_name DESC"` sorts response in descending order `order_by = "issue_count DESC"` sorts response in descending order of count of all issues associated with a resource. More explicitly, `order_by = "full_resource_name, product"` is not supported. */
  orderBy?: string;
  /** Optional. If unspecified, at most 50 resource groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. The expression to filter resources. The following fields are filterable: * full_resource_name * resource_type * container * product.type * product.engine * product.version * location * labels * resource_category * machine_config.cpu_count * machine_config.memory_size_bytes * machine_config.shard_count * resource_name * tags * backupdr_config.backupdr_managed * edition The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` Example: `full_resource_name=~"test"` Example: `full_resource_name=~"test.*master"` */
  filter?: string;
  /** Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent?: string;
}

export const QueryDatabaseResourceGroupsRequest: Schema.Codec<QueryDatabaseResourceGroupsRequest> =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    signalFilters: Schema.optional(Schema.Array(SignalFilter)),
    signalTypeGroups: Schema.optional(Schema.Array(SignalTypeGroup)),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    filter: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryDatabaseResourceGroupsRequest" });

export interface Lineage {
  /** Optional. FQN of source table / column */
  sourceFqn?: string;
  /** Optional. FQN of target table / column */
  targetFqn?: string;
  /** Optional. FQN of process which created the lineage i.e. dataplex, datastream etc. */
  processFqn?: string;
  /** Optional. Type of process which created the lineage. */
  processType?:
    | "PROCESS_TYPE_UNSPECIFIED"
    | "COMPOSER"
    | "DATASTREAM"
    | "DATAFLOW"
    | "BIGQUERY"
    | "DATA_FUSION"
    | "DATAPROC"
    | (string & {});
}

export const Lineage: Schema.Codec<Lineage> =
  /*@__PURE__*/ Schema.Struct({
    sourceFqn: Schema.optional(Schema.String),
    targetFqn: Schema.optional(Schema.String),
    processFqn: Schema.optional(Schema.String),
    processType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Lineage" });

export interface Affiliation {
  /** Optional. Multiple lineages can be created from a resource. For example, a resource can be replicated to multiple target resources. In this case, there will be multiple lineages for the resource, one for each target resource. */
  lineages?: ReadonlyArray<Lineage>;
  /** Optional. Full resource name */
  fullResourceName?: string;
  /** Optional. resource id of affiliated resource */
  resourceId?: string;
}

export const Affiliation: Schema.Codec<Affiliation> =
  /*@__PURE__*/ Schema.Struct({
    lineages: Schema.optional(Schema.Array(Lineage)),
    fullResourceName: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Affiliation" });

export interface Product {
  /** Optional. The specific engine that the underlying database is running. */
  engine?:
    | "ENGINE_UNSPECIFIED"
    | "ENGINE_MYSQL"
    | "ENGINE_POSTGRES"
    | "ENGINE_SQL_SERVER"
    | "ENGINE_NATIVE"
    | "ENGINE_MEMORYSTORE_FOR_REDIS"
    | "ENGINE_MEMORYSTORE_FOR_REDIS_CLUSTER"
    | "ENGINE_MEMORSTORE_FOR_VALKEY"
    | "ENGINE_MEMORYSTORE_FOR_VALKEY"
    | "ENGINE_FIRESTORE_WITH_NATIVE_MODE"
    | "ENGINE_FIRESTORE_WITH_DATASTORE_MODE"
    | "ENGINE_EXADATA_ORACLE"
    | "ENGINE_ADB_SERVERLESS_ORACLE"
    | "ENGINE_FIRESTORE_WITH_MONGODB_COMPATIBILITY_MODE"
    | "ENGINE_OTHER"
    | (string & {});
  /** Optional. Minor version of the underlying database engine. Example values: For MySQL, it could be "8.0.35", "5.7.25" etc. For PostgreSQL, it could be "14.4", "15.5" etc. */
  minorVersion?: string;
  /** Optional. Version of the underlying database engine. Example values: For MySQL, it could be "8.0", "5.7" etc. For Postgres, it could be "14", "15" etc. */
  version?: string;
  /** Optional. Type of specific database product. It could be CloudSQL, AlloyDB etc.. */
  type?:
    | "PRODUCT_TYPE_UNSPECIFIED"
    | "PRODUCT_TYPE_CLOUD_SQL"
    | "PRODUCT_TYPE_ALLOYDB"
    | "PRODUCT_TYPE_SPANNER"
    | "PRODUCT_TYPE_BIGTABLE"
    | "PRODUCT_TYPE_MEMORYSTORE"
    | "PRODUCT_TYPE_FIRESTORE"
    | "PRODUCT_TYPE_COMPUTE_ENGINE"
    | "PRODUCT_TYPE_ORACLE_ON_GCP"
    | "PRODUCT_TYPE_BIGQUERY"
    | "PRODUCT_TYPE_OTHER"
    | (string & {});
}

export const Product: Schema.Codec<Product> =
  /*@__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    minorVersion: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Product" });

export interface SubResource {
  /** Specifies where the resource is created. For Google Cloud resources, it is the full name of the project. */
  container?: string;
  /** Optional. Resource name associated with the sub resource where backup settings are configured. E.g."//spanner.googleapis.com/projects/project1/instances/inst1/databases/db1" for Spanner where backup retention is configured on database within an instance OPTIONAL */
  fullResourceName?: string;
  /** Optional. Resource type associated with the sub resource where backup settings are configured. E.g. "spanner.googleapis.com/Database" for Spanner where backup retention is configured on database within an instance OPTIONAL */
  resourceType?: string;
  /** Optional. Product information associated with the sub resource where backup retention settings are configured. e.g. ``` product: { type : PRODUCT_TYPE_SPANNER engine : ENGINE_CLOUD_SPANNER_WITH_POSTGRES_DIALECT } ``` for Spanner where backup is configured on database within an instance OPTIONAL */
  product?: Product;
}

export const SubResource: Schema.Codec<SubResource> =
  /*@__PURE__*/ Schema.Struct({
    container: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    product: Schema.optional(Product),
  }).annotate({ identifier: "SubResource" });

export interface BackupRunInfo {
  /** The time the backup operation started. */
  startTime?: string;
  /** Output only. The state of this run. */
  state?: "STATE_UNSPECIFIED" | "SUCCEEDED" | "FAILED" | (string & {});
  /** Optional. Sub resource details associated with the backup run. */
  subResource?: SubResource;
  /** Additional information about the error encountered. */
  errorMessage?: string;
  /** The time the backup operation completed. */
  endTime?: string;
  /** Optional. OperationErrorType to expose specific error when backup operation of database resource failed, that is state is FAILED. */
  operationErrorType?:
    | "OPERATION_ERROR_TYPE_UNSPECIFIED"
    | "KMS_KEY_ERROR"
    | "DATABASE_ERROR"
    | "STOCKOUT_ERROR"
    | "CANCELLATION_ERROR"
    | "SQLSERVER_ERROR"
    | "INTERNAL_ERROR"
    | (string & {});
}

export const BackupRunInfo: Schema.Codec<BackupRunInfo> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    subResource: Schema.optional(SubResource),
    errorMessage: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operationErrorType: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupRunInfo" });

export interface ResourceDetails {
  /** Product type of the resource. */
  product?: Product;
  /** Specifies where the resource is created. For Google Cloud resources, it is the full name of the project. */
  container?: string;
  /** Location of the resource. */
  location?: string;
  /** Full resource name of the resource. */
  fullResourceName?: string;
}

export const ResourceDetails: Schema.Codec<ResourceDetails> =
  /*@__PURE__*/ Schema.Struct({
    product: Schema.optional(Product),
    container: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceDetails" });

export interface DeltaDetails {
  /** Details of resources that have increased. */
  increasedResources?: ReadonlyArray<ResourceDetails>;
  /** Details of resources that have decreased. */
  decreasedResources?: ReadonlyArray<ResourceDetails>;
}

export const DeltaDetails: Schema.Codec<DeltaDetails> =
  /*@__PURE__*/ Schema.Struct({
    increasedResources: Schema.optional(Schema.Array(ResourceDetails)),
    decreasedResources: Schema.optional(Schema.Array(ResourceDetails)),
  }).annotate({ identifier: "DeltaDetails" });

export interface OutdatedMinorVersionInfo {
  /** Recommended minor version of the underlying database engine. Example values: For MySQL, it could be "8.0.35", "5.7.25" etc. For PostgreSQL, it could be "14.4", "15.5" etc. */
  recommendedMinorVersion?: string;
}

export const OutdatedMinorVersionInfo: Schema.Codec<OutdatedMinorVersionInfo> =
  /*@__PURE__*/ Schema.Struct({
    recommendedMinorVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutdatedMinorVersionInfo" });

export interface InefficientQueryInfo {
  /** Cost of additional disk usage in bytes */
  storageCostBytes?: string;
  /** Name of the database where index is required. For example, "db1", which is the name of the database present in the instance. */
  database?: string;
  /** Name of the table where index is required */
  table?: string;
  /** SQL statement of the index. Based on the ddl type, this will be either CREATE INDEX or DROP INDEX. */
  sqlIndexStatement?: string;
  /** Count of queries to be impacted if index is applied */
  impactedQueriesCount?: string;
}

export const InefficientQueryInfo: Schema.Codec<InefficientQueryInfo> =
  /*@__PURE__*/ Schema.Struct({
    storageCostBytes: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    table: Schema.optional(Schema.String),
    sqlIndexStatement: Schema.optional(Schema.String),
    impactedQueriesCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "InefficientQueryInfo" });

export interface RetentionSettingsInfo {
  /** Duration based retention period i.e. 172800 seconds (2 days) */
  durationBasedRetention?: string;
  /** Number of backups that will be retained. */
  quantityBasedRetention?: number;
  /** Timestamp based retention period i.e. till 2024-05-01T00:00:00Z */
  timestampBasedRetentionTime?: string;
  /** Optional. Sub resource details associated with the backup configuration. */
  subResource?: SubResource;
}

export const RetentionSettingsInfo: Schema.Codec<RetentionSettingsInfo> =
  /*@__PURE__*/ Schema.Struct({
    durationBasedRetention: Schema.optional(Schema.String),
    quantityBasedRetention: Schema.optional(Schema.Number),
    timestampBasedRetentionTime: Schema.optional(Schema.String),
    subResource: Schema.optional(SubResource),
  }).annotate({ identifier: "RetentionSettingsInfo" });

export interface RegulatoryStandard {
  /** Name of industry compliance standards, such as such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Version of the standard or benchmark, for example, 1.1. */
  version?: string;
}

export const RegulatoryStandard: Schema.Codec<RegulatoryStandard> =
  /*@__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "RegulatoryStandard" });

export interface SCCInfo {
  /** Name of the signal. */
  signal?: string;
  /** Compliances that are associated with the signal. */
  regulatoryStandards?: ReadonlyArray<RegulatoryStandard>;
  /** External URI which points to a SCC page associated with the signal. */
  externalUri?: string;
  /** Name by which SCC calls this signal. */
  category?: string;
}

export const SCCInfo: Schema.Codec<SCCInfo> =
  /*@__PURE__*/ Schema.Struct({
    signal: Schema.optional(Schema.String),
    regulatoryStandards: Schema.optional(Schema.Array(RegulatoryStandard)),
    externalUri: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "SCCInfo" });

export interface AutomatedBackupPolicyInfo {
  /** Optional. Sub resource details associated with the signal. */
  subResource?: SubResource;
  /** Is automated policy enabled. */
  isEnabled?: boolean;
}

export const AutomatedBackupPolicyInfo: Schema.Codec<AutomatedBackupPolicyInfo> =
  /*@__PURE__*/ Schema.Struct({
    subResource: Schema.optional(SubResource),
    isEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AutomatedBackupPolicyInfo" });

export interface DeletionProtectionInfo {
  /** Optional. Sub resource details associated with the signal. */
  subResource?: SubResource;
  /** Is deletion protection enabled. */
  deletionProtectionEnabled?: boolean;
}

export const DeletionProtectionInfo: Schema.Codec<DeletionProtectionInfo> =
  /*@__PURE__*/ Schema.Struct({
    subResource: Schema.optional(SubResource),
    deletionProtectionEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeletionProtectionInfo" });

export interface ResourceMaintenanceSchedule {
  /** Optional. Preferred time to start the maintenance operation on the specified day. */
  startTime?: TimeOfDay;
  /** Optional. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. */
  day?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
  /** Optional. Phase of the maintenance window. This is to capture order of maintenance. For example, for Cloud SQL resources, this can be used to capture if the maintenance window is in Week1, Week2, Week5, etc. Non production resources are usually part of early phase. For more details, refer to Cloud SQL resources - https://cloud.google.com/sql/docs/mysql/maintenance */
  phase?:
    | "PHASE_UNSPECIFIED"
    | "PHASE_WEEK1"
    | "PHASE_WEEK2"
    | "PHASE_WEEK5"
    | "PHASE_ANY"
    | (string & {});
}

export const ResourceMaintenanceSchedule: Schema.Codec<ResourceMaintenanceSchedule> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
    day: Schema.optional(Schema.String),
    phase: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceMaintenanceSchedule" });

export interface MaintenanceRecommendationInfo {
  /** Optional. List of recommended maintenance schedules for the database resource. */
  resourceMaintenanceSchedules?: ReadonlyArray<ResourceMaintenanceSchedule>;
}

export const MaintenanceRecommendationInfo: Schema.Codec<MaintenanceRecommendationInfo> =
  /*@__PURE__*/ Schema.Struct({
    resourceMaintenanceSchedules: Schema.optional(
      Schema.Array(ResourceMaintenanceSchedule),
    ),
  }).annotate({ identifier: "MaintenanceRecommendationInfo" });

export interface ResourceSuspensionInfo {
  /** Is resource suspended. */
  resourceSuspended?: boolean;
  /** Suspension reason for the resource. */
  suspensionReason?:
    | "SUSPENSION_REASON_UNSPECIFIED"
    | "WIPEOUT_HIDE_EVENT"
    | "WIPEOUT_PURGE_EVENT"
    | "BILLING_DISABLED"
    | "ABUSER_DETECTED"
    | "ENCRYPTION_KEY_INACCESSIBLE"
    | "REPLICATED_CLUSTER_ENCRYPTION_KEY_INACCESSIBLE"
    | (string & {});
}

export const ResourceSuspensionInfo: Schema.Codec<ResourceSuspensionInfo> =
  /*@__PURE__*/ Schema.Struct({
    resourceSuspended: Schema.optional(Schema.Boolean),
    suspensionReason: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceSuspensionInfo" });

export interface RecommendationInfo {
  /** Name of recommendation. Examples: organizations/1234/locations/us-central1/recommenders/google.cloudsql.instance.PerformanceRecommender/recommendations/9876 */
  recommender?: string;
  /** ID of recommender. Examples: "google.cloudsql.instance.PerformanceRecommender" */
  recommenderId?: string;
  /** Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.cloudsql.instance.PerformanceRecommender", recommender_subtype can be "MYSQL_HIGH_NUMBER_OF_OPEN_TABLES_BEST_PRACTICE"/"POSTGRES_HIGH_TRANSACTION_ID_UTILIZATION_BEST_PRACTICE" */
  recommenderSubtype?: string;
}

export const RecommendationInfo: Schema.Codec<RecommendationInfo> =
  /*@__PURE__*/ Schema.Struct({
    recommender: Schema.optional(Schema.String),
    recommenderId: Schema.optional(Schema.String),
    recommenderSubtype: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecommendationInfo" });

export interface AdditionalDetail {
  /** Backup run information applies to signals with types SIGNAL_TYPE_LAST_BACKUP_FAILED and SIGNAL_TYPE_LAST_BACKUP_OLD. */
  backupRunInfo?: BackupRunInfo;
  /** Outdated minor version information applies to signals with type SIGNAL_TYPE_OUTDATED_MINOR_VERSION. */
  outdatedMinorVersionInfo?: OutdatedMinorVersionInfo;
  /** Inefficient query information applies to signals with type SIGNAL_TYPE_INEFFICIENT_QUERY. */
  inefficientQueryInfo?: InefficientQueryInfo;
  /** Short backup retention information applies to signals with type SIGNAL_TYPE_SHORT_BACKUP_RETENTION. */
  shortBackupRetentionInfo?: RetentionSettingsInfo;
  /** Where the signal is coming from. */
  signalSource?:
    | "SIGNAL_SOURCE_UNSPECIFIED"
    | "SIGNAL_SOURCE_RESOURCE_METADATA"
    | "SIGNAL_SOURCE_SECURITY_FINDINGS"
    | "SIGNAL_SOURCE_RECOMMENDER"
    | "SIGNAL_SOURCE_MODERN_OBSERVABILITY"
    | (string & {});
  /** Type of the signal. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED"
    | "SIGNAL_TYPE_GROUP_MULTIREGIONAL"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_SHORT_BACKUP_RETENTION"
    | "SIGNAL_TYPE_LAST_BACKUP_FAILED"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53_R5"
    | "SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001_V2022"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0"
    | "SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4"
    | "SIGNAL_TYPE_VIOLATES_HIPAA"
    | "SIGNAL_TYPE_VIOLATES_SOC2_V2017"
    | "SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING"
    | "SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_VERBOSE_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_MOST_ERRORS"
    | "SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS"
    | "SIGNAL_TYPE_MINIMAL_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_STATS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS"
    | "SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS"
    | "SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED"
    | "SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO"
    | "SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS"
    | "SIGNAL_TYPE_DATABASE_NAMES_EXPOSED"
    | "SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED"
    | "SIGNAL_TYPE_PUBLIC_IP_ENABLED"
    | "SIGNAL_TYPE_IDLE"
    | "SIGNAL_TYPE_OVERPROVISIONED"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES"
    | "SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION"
    | "SIGNAL_TYPE_UNDERPROVISIONED"
    | "SIGNAL_TYPE_OUT_OF_DISK"
    | "SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS"
    | "SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP"
    | "SIGNAL_TYPE_QUOTA_LIMIT"
    | "SIGNAL_TYPE_NO_PASSWORD_POLICY"
    | "SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES"
    | "SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES"
    | "SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM"
    | "SIGNAL_TYPE_NO_USER_PASSWORD_POLICY"
    | "SIGNAL_TYPE_HOT_NODE"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_INEFFICIENT_QUERY"
    | "SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD"
    | "SIGNAL_TYPE_MEMORY_LIMIT"
    | "SIGNAL_TYPE_MAX_SERVER_MEMORY"
    | "SIGNAL_TYPE_LARGE_ROWS"
    | "SIGNAL_TYPE_HIGH_WRITE_PRESSURE"
    | "SIGNAL_TYPE_HIGH_READ_PRESSURE"
    | "SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_HIGH_MAINTENANCE_DOWNTIME_RISK"
    | "SIGNAL_TYPE_LOW_CACHE_HIT_AND_MAINTENANCE_DOWNTIME"
    | (string & {});
  /** SCC information applies to SCC signals. */
  sccInfo?: SCCInfo;
  /** Automated backup policy information applies to signals with type SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY. */
  automatedBackupPolicyInfo?: AutomatedBackupPolicyInfo;
  /** Deletion protection information applies to signals with type SIGNAL_TYPE_NO_DELETION_PROTECTION */
  deletionProtectionInfo?: DeletionProtectionInfo;
  /** Maintenance recommendation information applies to signals with type SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES. */
  maintenanceRecommendationInfo?: MaintenanceRecommendationInfo;
  /** Resource suspension information applies to signals with type SIGNAL_TYPE_RESOURCE_SUSPENDED. */
  resourceSuspensionInfo?: ResourceSuspensionInfo;
  /** Event time when signal was recorded by source service. */
  signalEventTime?: string;
  /** Recommendation information applies to recommendations. */
  recommendationInfo?: RecommendationInfo;
}

export const AdditionalDetail: Schema.Codec<AdditionalDetail> =
  /*@__PURE__*/ Schema.Struct({
    backupRunInfo: Schema.optional(BackupRunInfo),
    outdatedMinorVersionInfo: Schema.optional(OutdatedMinorVersionInfo),
    inefficientQueryInfo: Schema.optional(InefficientQueryInfo),
    shortBackupRetentionInfo: Schema.optional(RetentionSettingsInfo),
    signalSource: Schema.optional(Schema.String),
    signalType: Schema.optional(Schema.String),
    sccInfo: Schema.optional(SCCInfo),
    automatedBackupPolicyInfo: Schema.optional(AutomatedBackupPolicyInfo),
    deletionProtectionInfo: Schema.optional(DeletionProtectionInfo),
    maintenanceRecommendationInfo: Schema.optional(
      MaintenanceRecommendationInfo,
    ),
    resourceSuspensionInfo: Schema.optional(ResourceSuspensionInfo),
    signalEventTime: Schema.optional(Schema.String),
    recommendationInfo: Schema.optional(RecommendationInfo),
  }).annotate({ identifier: "AdditionalDetail" });

export interface Signal {
  /** Type of the signal. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED"
    | "SIGNAL_TYPE_GROUP_MULTIREGIONAL"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_SHORT_BACKUP_RETENTION"
    | "SIGNAL_TYPE_LAST_BACKUP_FAILED"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53_R5"
    | "SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001_V2022"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0"
    | "SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4"
    | "SIGNAL_TYPE_VIOLATES_HIPAA"
    | "SIGNAL_TYPE_VIOLATES_SOC2_V2017"
    | "SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING"
    | "SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_VERBOSE_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_MOST_ERRORS"
    | "SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS"
    | "SIGNAL_TYPE_MINIMAL_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_STATS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS"
    | "SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS"
    | "SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED"
    | "SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO"
    | "SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS"
    | "SIGNAL_TYPE_DATABASE_NAMES_EXPOSED"
    | "SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED"
    | "SIGNAL_TYPE_PUBLIC_IP_ENABLED"
    | "SIGNAL_TYPE_IDLE"
    | "SIGNAL_TYPE_OVERPROVISIONED"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES"
    | "SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION"
    | "SIGNAL_TYPE_UNDERPROVISIONED"
    | "SIGNAL_TYPE_OUT_OF_DISK"
    | "SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS"
    | "SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP"
    | "SIGNAL_TYPE_QUOTA_LIMIT"
    | "SIGNAL_TYPE_NO_PASSWORD_POLICY"
    | "SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES"
    | "SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES"
    | "SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM"
    | "SIGNAL_TYPE_NO_USER_PASSWORD_POLICY"
    | "SIGNAL_TYPE_HOT_NODE"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_INEFFICIENT_QUERY"
    | "SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD"
    | "SIGNAL_TYPE_MEMORY_LIMIT"
    | "SIGNAL_TYPE_MAX_SERVER_MEMORY"
    | "SIGNAL_TYPE_LARGE_ROWS"
    | "SIGNAL_TYPE_HIGH_WRITE_PRESSURE"
    | "SIGNAL_TYPE_HIGH_READ_PRESSURE"
    | "SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_HIGH_MAINTENANCE_DOWNTIME_RISK"
    | "SIGNAL_TYPE_LOW_CACHE_HIT_AND_MAINTENANCE_DOWNTIME"
    | (string & {});
  /** Additional information related to the signal. In the case of composite signals, this field encapsulates details associated with granular signals, having a signal status of "ISSUE"; signals with a status of "OK" are not included. For granular signals, it encompasses information relevant to the signal, regardless of the signal status. */
  additionalDetails?: ReadonlyArray<AdditionalDetail>;
  /** Severity of the issue. */
  issueSeverity?:
    | "ISSUE_SEVERITY_UNSPECIFIED"
    | "ISSUE_SEVERITY_LOW"
    | "ISSUE_SEVERITY_MEDIUM"
    | "ISSUE_SEVERITY_HIGH"
    | "ISSUE_SEVERITY_CRITICAL"
    | "ISSUE_SEVERITY_IRRELEVANT"
    | (string & {});
  /** Status of the signal. */
  signalStatus?:
    | "SIGNAL_STATUS_UNSPECIFIED"
    | "SIGNAL_STATUS_NOT_APPLICABLE"
    | "SIGNAL_STATUS_OK"
    | "SIGNAL_STATUS_ISSUE"
    | "SIGNAL_STATUS_NOT_ENABLED"
    | (string & {});
  /** Timestamp when the issue was created (when signal status is ISSUE). */
  issueCreateTime?: string;
}

export const Signal: Schema.Codec<Signal> =
  /*@__PURE__*/ Schema.Struct({
    signalType: Schema.optional(Schema.String),
    additionalDetails: Schema.optional(Schema.Array(AdditionalDetail)),
    issueSeverity: Schema.optional(Schema.String),
    signalStatus: Schema.optional(Schema.String),
    issueCreateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Signal" });

export interface AggregateQueryStatsRequest {
  /** Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info,'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` Additional specific fields for query stats are: `metric_window`, `query_hash`, `normalized_query`. Example: `metric_window="LAST_ONE_DAY"` (Possible values for `metric_window` are: `LAST_ONE_DAY`, `LAST_ONE_WEEK`, `LAST_TWO_WEEKS`) Example: `query_hash="12345678"` Example: `normalized_query="SELECT * FROM table"` */
  filter?: string;
  /** Optional. A page token, received from a previous `AggregateQueryStatsRequest` call. Provide this to retrieve the subsequent page. All parameters except page_token should match the parameters in the call that provided the page token. */
  pageToken?: string;
  /** Optional. The expression to order the results by. Example: `order_by="execution_count"` Example: `order_by="execution_count desc"` Supported order by fields are `execution_count`, `rows_processed`, `total_cpu_time`, `avg_cpu_time`. */
  orderBy?: string;
  /** Optional. If unspecified, at most 100 query stats will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const AggregateQueryStatsRequest: Schema.Codec<AggregateQueryStatsRequest> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregateQueryStatsRequest" });

export interface AggregateIssueStatsRequest {
  /** Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info,'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` */
  filter?: string;
  /** Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent?: string;
  /** Optional. Lists of signal types that are issues. */
  signalTypeGroups?: ReadonlyArray<SignalTypeGroup>;
  /** Optional. The baseline date w.r.t. which the delta counts are calculated. If not set, delta counts are not included in the response and the response indicates the current state of the fleet. */
  baselineDate?: Databasecenter_Date;
}

export const AggregateIssueStatsRequest: Schema.Codec<AggregateIssueStatsRequest> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    signalTypeGroups: Schema.optional(Schema.Array(SignalTypeGroup)),
    baselineDate: Schema.optional(Databasecenter_Date),
  }).annotate({ identifier: "AggregateIssueStatsRequest" });

export interface IssueStats {
  /** Type of signal which is an issue. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED"
    | "SIGNAL_TYPE_GROUP_MULTIREGIONAL"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_SHORT_BACKUP_RETENTION"
    | "SIGNAL_TYPE_LAST_BACKUP_FAILED"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53_R5"
    | "SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001_V2022"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0"
    | "SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4"
    | "SIGNAL_TYPE_VIOLATES_HIPAA"
    | "SIGNAL_TYPE_VIOLATES_SOC2_V2017"
    | "SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING"
    | "SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_VERBOSE_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_MOST_ERRORS"
    | "SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS"
    | "SIGNAL_TYPE_MINIMAL_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_STATS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS"
    | "SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS"
    | "SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED"
    | "SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO"
    | "SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS"
    | "SIGNAL_TYPE_DATABASE_NAMES_EXPOSED"
    | "SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED"
    | "SIGNAL_TYPE_PUBLIC_IP_ENABLED"
    | "SIGNAL_TYPE_IDLE"
    | "SIGNAL_TYPE_OVERPROVISIONED"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES"
    | "SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION"
    | "SIGNAL_TYPE_UNDERPROVISIONED"
    | "SIGNAL_TYPE_OUT_OF_DISK"
    | "SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS"
    | "SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP"
    | "SIGNAL_TYPE_QUOTA_LIMIT"
    | "SIGNAL_TYPE_NO_PASSWORD_POLICY"
    | "SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES"
    | "SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES"
    | "SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM"
    | "SIGNAL_TYPE_NO_USER_PASSWORD_POLICY"
    | "SIGNAL_TYPE_HOT_NODE"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_INEFFICIENT_QUERY"
    | "SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD"
    | "SIGNAL_TYPE_MEMORY_LIMIT"
    | "SIGNAL_TYPE_MAX_SERVER_MEMORY"
    | "SIGNAL_TYPE_LARGE_ROWS"
    | "SIGNAL_TYPE_HIGH_WRITE_PRESSURE"
    | "SIGNAL_TYPE_HIGH_READ_PRESSURE"
    | "SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_HIGH_MAINTENANCE_DOWNTIME_RISK"
    | "SIGNAL_TYPE_LOW_CACHE_HIT_AND_MAINTENANCE_DOWNTIME"
    | (string & {});
  /** Number of resources having issues of a given type. */
  resourceCount?: number;
  /** Optional. Delta counts and details of resources for which issue was raised or fixed. */
  deltaDetails?: DeltaDetails;
  /** Severity of the issue. */
  issueSeverity?:
    | "ISSUE_SEVERITY_UNSPECIFIED"
    | "ISSUE_SEVERITY_LOW"
    | "ISSUE_SEVERITY_MEDIUM"
    | "ISSUE_SEVERITY_HIGH"
    | "ISSUE_SEVERITY_CRITICAL"
    | "ISSUE_SEVERITY_IRRELEVANT"
    | (string & {});
}

export const IssueStats: Schema.Codec<IssueStats> =
  /*@__PURE__*/ Schema.Struct({
    signalType: Schema.optional(Schema.String),
    resourceCount: Schema.optional(Schema.Number),
    deltaDetails: Schema.optional(DeltaDetails),
    issueSeverity: Schema.optional(Schema.String),
  }).annotate({ identifier: "IssueStats" });

export interface Dimension {
  /** The location of the resources. It supports returning only regional locations in Google Cloud. */
  location?: string;
  /** Tag key of the resource. */
  tagKey?: string;
  /** Tag value of the resource. */
  tagValue?: string;
  /** Tag source of the resource. */
  tagSource?: string;
  /** Label value of the resource. */
  labelValue?: string;
  /** Subtype of the resource specified at creation time. */
  subResourceType?:
    | "SUB_RESOURCE_TYPE_UNSPECIFIED"
    | "SUB_RESOURCE_TYPE_PRIMARY"
    | "SUB_RESOURCE_TYPE_SECONDARY"
    | "SUB_RESOURCE_TYPE_READ_REPLICA"
    | "SUB_RESOURCE_TYPE_EXTERNAL_PRIMARY"
    | "SUB_RESOURCE_TYPE_READ_POOL"
    | "SUB_RESOURCE_TYPE_RESERVATION"
    | "SUB_RESOURCE_TYPE_DATASET"
    | "SUB_RESOURCE_TYPE_OTHER"
    | (string & {});
  /** The category of the resource. */
  resourceCategory?:
    | "RESOURCE_CATEGORY_UNSPECIFIED"
    | "INSTANCE"
    | "CLUSTER"
    | "DATABASE"
    | "DATASET"
    | "RESERVATION"
    | (string & {});
  /** Label source of the resource. */
  labelSource?: string;
  /** Specifies where the resource is created. For Google Cloud resources, it is the full name of the project. */
  container?: string;
  /** The edition of the resource. */
  edition?:
    | "EDITION_UNSPECIFIED"
    | "EDITION_ENTERPRISE"
    | "EDITION_ENTERPRISE_PLUS"
    | "EDITION_STANDARD"
    | (string & {});
  /** The type of resource defined according to the pattern: {Service Name}/{Type}. Ex: sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance spanner.googleapis.com/Instance */
  resourceType?: string;
  /** Whether the resource has a maintenance schedule. */
  hasMaintenanceSchedule?: boolean;
  /** Tag inheritance value of the resource. */
  tagInherited?: boolean;
  /** Version of the underlying database engine */
  productVersion?: string;
  /** Whether the resource has deny maintenance schedules. */
  hasDenyMaintenanceSchedules?: boolean;
  /** Type to identify a product */
  productType?:
    | "PRODUCT_TYPE_UNSPECIFIED"
    | "PRODUCT_TYPE_CLOUD_SQL"
    | "PRODUCT_TYPE_ALLOYDB"
    | "PRODUCT_TYPE_SPANNER"
    | "PRODUCT_TYPE_BIGTABLE"
    | "PRODUCT_TYPE_MEMORYSTORE"
    | "PRODUCT_TYPE_FIRESTORE"
    | "PRODUCT_TYPE_COMPUTE_ENGINE"
    | "PRODUCT_TYPE_ORACLE_ON_GCP"
    | "PRODUCT_TYPE_BIGQUERY"
    | "PRODUCT_TYPE_OTHER"
    | (string & {});
  /** Engine refers to underlying database binary running in an instance. */
  productEngine?:
    | "ENGINE_UNSPECIFIED"
    | "ENGINE_MYSQL"
    | "ENGINE_POSTGRES"
    | "ENGINE_SQL_SERVER"
    | "ENGINE_NATIVE"
    | "ENGINE_MEMORYSTORE_FOR_REDIS"
    | "ENGINE_MEMORYSTORE_FOR_REDIS_CLUSTER"
    | "ENGINE_MEMORSTORE_FOR_VALKEY"
    | "ENGINE_MEMORYSTORE_FOR_VALKEY"
    | "ENGINE_FIRESTORE_WITH_NATIVE_MODE"
    | "ENGINE_FIRESTORE_WITH_DATASTORE_MODE"
    | "ENGINE_EXADATA_ORACLE"
    | "ENGINE_ADB_SERVERLESS_ORACLE"
    | "ENGINE_FIRESTORE_WITH_MONGODB_COMPATIBILITY_MODE"
    | "ENGINE_OTHER"
    | (string & {});
  /** Label key of the resource. */
  labelKey?: string;
  /** The management type of the resource. */
  managementType?:
    | "MANAGEMENT_TYPE_UNSPECIFIED"
    | "MANAGEMENT_TYPE_GCP_MANAGED"
    | "MANAGEMENT_TYPE_SELF_MANAGED"
    | (string & {});
}

export const Dimension: Schema.Codec<Dimension> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    tagKey: Schema.optional(Schema.String),
    tagValue: Schema.optional(Schema.String),
    tagSource: Schema.optional(Schema.String),
    labelValue: Schema.optional(Schema.String),
    subResourceType: Schema.optional(Schema.String),
    resourceCategory: Schema.optional(Schema.String),
    labelSource: Schema.optional(Schema.String),
    container: Schema.optional(Schema.String),
    edition: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    hasMaintenanceSchedule: Schema.optional(Schema.Boolean),
    tagInherited: Schema.optional(Schema.Boolean),
    productVersion: Schema.optional(Schema.String),
    hasDenyMaintenanceSchedules: Schema.optional(Schema.Boolean),
    productType: Schema.optional(Schema.String),
    productEngine: Schema.optional(Schema.String),
    labelKey: Schema.optional(Schema.String),
    managementType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Dimension" });

export interface TypedValue {
  /** The value of the metric as double. */
  doubleValue?: number;
  /** The value of the metric as int. */
  int64Value?: string;
}

export const TypedValue: Schema.Codec<TypedValue> =
  /*@__PURE__*/ Schema.Struct({
    doubleValue: Schema.optional(Schema.Number),
    int64Value: Schema.optional(Schema.String),
  }).annotate({ identifier: "TypedValue" });

export interface MetricData {
  /** The time the metric was observed in the metric source service. */
  observationTime?: string;
  /** The value associated with the metric. */
  value?: TypedValue;
}

export const MetricData: Schema.Codec<MetricData> =
  /*@__PURE__*/ Schema.Struct({
    observationTime: Schema.optional(Schema.String),
    value: Schema.optional(TypedValue),
  }).annotate({ identifier: "MetricData" });

export interface Metrics {
  /** Current memory used by the resource in bytes. */
  currentMemoryUsedBytes?: MetricData;
  /** Peak storage utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases). */
  peakStorageUtilization?: MetricData;
  /** Number of nodes in instance for spanner or bigtable. */
  nodeCount?: MetricData;
  /** Number of processing units in spanner. */
  processingUnitCount?: MetricData;
  /** P95 CPU utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases). */
  p95CpuUtilization?: MetricData;
  /** P99 CPU utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases). */
  p99CpuUtilization?: MetricData;
  /** Peak number of connections observed for the resource. The value is a positive integer. */
  peakNumberConnections?: MetricData;
  /** Peak memory utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases). */
  peakMemoryUtilization?: MetricData;
  /** Current storage used by the resource in bytes. */
  currentStorageUsedBytes?: MetricData;
}

export const Metrics: Schema.Codec<Metrics> =
  /*@__PURE__*/ Schema.Struct({
    currentMemoryUsedBytes: Schema.optional(MetricData),
    peakStorageUtilization: Schema.optional(MetricData),
    nodeCount: Schema.optional(MetricData),
    processingUnitCount: Schema.optional(MetricData),
    p95CpuUtilization: Schema.optional(MetricData),
    p99CpuUtilization: Schema.optional(MetricData),
    peakNumberConnections: Schema.optional(MetricData),
    peakMemoryUtilization: Schema.optional(MetricData),
    currentStorageUsedBytes: Schema.optional(MetricData),
  }).annotate({ identifier: "Metrics" });

export interface SignalProductsFilters {
  /** Optional. The type of signal. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_RESOURCE_FAILOVER_PROTECTED"
    | "SIGNAL_TYPE_GROUP_MULTIREGIONAL"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_SHORT_BACKUP_RETENTION"
    | "SIGNAL_TYPE_LAST_BACKUP_FAILED"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_2_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_3"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_2"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_1"
    | "SIGNAL_TYPE_VIOLATES_CIS_GCP_FOUNDATION_1_0"
    | "SIGNAL_TYPE_VIOLATES_CIS_CONTROLS_V8_0"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53"
    | "SIGNAL_TYPE_VIOLATES_NIST_800_53_R5"
    | "SIGNAL_TYPE_VIOLATES_NIST_CYBERSECURITY_FRAMEWORK_V1_0"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001"
    | "SIGNAL_TYPE_VIOLATES_ISO_27001_V2022"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V3_2_1"
    | "SIGNAL_TYPE_VIOLATES_PCI_DSS_V4_0"
    | "SIGNAL_TYPE_VIOLATES_CLOUD_CONTROLS_MATRIX_V4"
    | "SIGNAL_TYPE_VIOLATES_HIPAA"
    | "SIGNAL_TYPE_VIOLATES_SOC2_V2017"
    | "SIGNAL_TYPE_LOGS_NOT_OPTIMIZED_FOR_TROUBLESHOOTING"
    | "SIGNAL_TYPE_QUERY_DURATIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_VERBOSE_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_LOCK_WAITS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_MOST_ERRORS"
    | "SIGNAL_TYPE_LOGGING_ONLY_CRITICAL_ERRORS"
    | "SIGNAL_TYPE_MINIMAL_ERROR_LOGGING"
    | "SIGNAL_TYPE_QUERY_STATS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_TO_EXTERNAL_SCRIPTS"
    | "SIGNAL_TYPE_EXPOSED_TO_LOCAL_DATA_LOADS"
    | "SIGNAL_TYPE_CONNECTION_ATTEMPTS_NOT_LOGGED"
    | "SIGNAL_TYPE_DISCONNECTIONS_NOT_LOGGED"
    | "SIGNAL_TYPE_LOGGING_EXCESSIVE_STATEMENT_INFO"
    | "SIGNAL_TYPE_EXPOSED_TO_REMOTE_ACCESS"
    | "SIGNAL_TYPE_DATABASE_NAMES_EXPOSED"
    | "SIGNAL_TYPE_SENSITIVE_TRACE_INFO_NOT_MASKED"
    | "SIGNAL_TYPE_PUBLIC_IP_ENABLED"
    | "SIGNAL_TYPE_IDLE"
    | "SIGNAL_TYPE_OVERPROVISIONED"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_OPEN_TABLES"
    | "SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES"
    | "SIGNAL_TYPE_HIGH_TRANSACTION_ID_UTILIZATION"
    | "SIGNAL_TYPE_UNDERPROVISIONED"
    | "SIGNAL_TYPE_OUT_OF_DISK"
    | "SIGNAL_TYPE_SERVER_CERTIFICATE_NEAR_EXPIRY"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_RESTRICT_AUTHORIZED_NETWORKS"
    | "SIGNAL_TYPE_VIOLATE_POLICY_RESTRICT_PUBLIC_IP"
    | "SIGNAL_TYPE_QUOTA_LIMIT"
    | "SIGNAL_TYPE_NO_PASSWORD_POLICY"
    | "SIGNAL_TYPE_CONNECTIONS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TMP_TABLES_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_TRANS_LOGS_PERFORMANCE_IMPACT"
    | "SIGNAL_TYPE_HIGH_JOINS_WITHOUT_INDEXES"
    | "SIGNAL_TYPE_SUPERUSER_WRITING_TO_USER_TABLES"
    | "SIGNAL_TYPE_USER_GRANTED_ALL_PERMISSIONS"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_EXTERNAL_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_DATA_EXPORT_TO_PUBLIC_CLOUD_STORAGE_BUCKET"
    | "SIGNAL_TYPE_WEAK_PASSWORD_HASH_ALGORITHM"
    | "SIGNAL_TYPE_NO_USER_PASSWORD_POLICY"
    | "SIGNAL_TYPE_HOT_NODE"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_INEFFICIENT_QUERY"
    | "SIGNAL_TYPE_READ_INTENSIVE_WORKLOAD"
    | "SIGNAL_TYPE_MEMORY_LIMIT"
    | "SIGNAL_TYPE_MAX_SERVER_MEMORY"
    | "SIGNAL_TYPE_LARGE_ROWS"
    | "SIGNAL_TYPE_HIGH_WRITE_PRESSURE"
    | "SIGNAL_TYPE_HIGH_READ_PRESSURE"
    | "SIGNAL_TYPE_ENCRYPTION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_LOCATION_ORG_POLICY_NOT_SATISFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_SCHEMA_NOT_OPTIMIZED"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_HIGH_MAINTENANCE_DOWNTIME_RISK"
    | "SIGNAL_TYPE_LOW_CACHE_HIT_AND_MAINTENANCE_DOWNTIME"
    | (string & {});
  /** Optional. Product type of the resource. The version of the product will be ignored in filtering. */
  products?: ReadonlyArray<Product>;
}

export const SignalProductsFilters: Schema.Codec<SignalProductsFilters> =
  /*@__PURE__*/ Schema.Struct({
    signalType: Schema.optional(Schema.String),
    products: Schema.optional(Schema.Array(Product)),
  }).annotate({ identifier: "SignalProductsFilters" });

export interface QueryIssuesRequest {
  /** Optional. A page token, received from a previous `QueryIssues` call. Provide this to retrieve the subsequent page. All parameters except page size should match the parameters used in the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filters based on signal and product. The filter list will be ORed across pairs and ANDed within a signal and products pair. */
  signalProductsFilters?: ReadonlyArray<SignalProductsFilters>;
  /** Optional. Following fields are sortable: SignalType Product Location IssueSeverity The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It only supports a single field at a time. */
  orderBy?: string;
  /** Optional. If unspecified, at most 50 issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. Supported fields are: 'product', `location`, `issue_severity`, 'tags', 'labels', */
  filter?: string;
  /** Required. Parent can be a project, a folder, or an organization. The list is limited to the one attached to resources within the `scope` that a user has access to. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent?: string;
}

export const QueryIssuesRequest: Schema.Codec<QueryIssuesRequest> =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    signalProductsFilters: Schema.optional(Schema.Array(SignalProductsFilters)),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    filter: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryIssuesRequest" });

export interface UpcomingMaintenance {
  /** Output only. Start time of the upcoming maintenance. Start time is always populated when an upcoming maintenance is scheduled. */
  startTime?: string;
  /** Output only. End time of the upcoming maintenance. This is only populated for an engine, if end time is public for the engine. */
  endTime?: string;
}

export const UpcomingMaintenance: Schema.Codec<UpcomingMaintenance> =
  /*@__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpcomingMaintenance" });

export interface BackupDRConfig {
  /** Indicates if the resource is managed by BackupDR. */
  backupdrManaged?: boolean;
}

export const BackupDRConfig: Schema.Codec<BackupDRConfig> =
  /*@__PURE__*/ Schema.Struct({
    backupdrManaged: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BackupDRConfig" });

export interface Label {
  /** The key part of the label. */
  key?: string;
  /** The source of the Label. Source is empty if the label is directly attached to the resource and not inherited. */
  source?: string;
  /** The value part of the label. */
  value?: string;
}

export const Label: Schema.Codec<Label> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Label" });

export interface MachineConfig {
  /** Optional. The number of vCPUs (if applicable). */
  vcpuCount?: number;
  /** Memory size in bytes. */
  memorySizeBytes?: string;
  /** Optional. The number of Shards (if applicable). */
  shardCount?: number;
  /** Optional. Baseline slots for BigQuery Reservations. Baseline slots are in increments of 50. */
  baselineSlotCount?: string;
  /** Optional. Max slots for BigQuery Reservations. Max slots are in increments of 50. */
  maxReservationSlotCount?: string;
}

export const MachineConfig: Schema.Codec<MachineConfig> =
  /*@__PURE__*/ Schema.Struct({
    vcpuCount: Schema.optional(Schema.Number),
    memorySizeBytes: Schema.optional(Schema.String),
    shardCount: Schema.optional(Schema.Number),
    baselineSlotCount: Schema.optional(Schema.String),
    maxReservationSlotCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineConfig" });

export interface SignalGroup {
  /** Title of a signal group corresponding to the request. */
  displayName?: string;
  /** When applied to a DatabaseResource represents count of issues associated with the resource. A signal is an issue when its SignalStatus field is set to SIGNAL_STATUS_ISSUE. */
  issueCount?: number;
  /** List of signals present in the group and associated with the resource. Only applies to a DatabaseResource. */
  signals?: ReadonlyArray<Signal>;
}

export const SignalGroup: Schema.Codec<SignalGroup> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    issueCount: Schema.optional(Schema.Number),
    signals: Schema.optional(Schema.Array(Signal)),
  }).annotate({ identifier: "SignalGroup" });

export interface Tag {
  key?: string;
  /** Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource. */
  inherited?: boolean;
  /** The source of the tag. According to https://cloud.google.com/resource-manager/docs/tags/tags-overview#tags_and_labels, tags can be created only at the project or organization level. Tags can be inherited from different project as well not just the current project where the database resource is present. Format: "projects/{PROJECT_ID}", "projects/{PROJECT_NUMBER}", "organizations/{ORGANIZATION_ID}" */
  source?: string;
  /** The value part of the tag. */
  value?: string;
}

export const Tag: Schema.Codec<Tag> = /*@__PURE__*/ Schema.Struct({
  key: Schema.optional(Schema.String),
  inherited: Schema.optional(Schema.Boolean),
  source: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "Tag" });

export interface MaintenanceInfo {
  /** Output only. Previous maintenance version of the database resource. Example: "MYSQL_8_0_41.R20250531.01_15". This is available once a minor version maintenance is complete on a database resource. */
  previousMaintenanceVersion?: string;
  /** Output only. The date when the maintenance version was released. */
  currentVersionReleaseDate?: Databasecenter_Date;
  /** Output only. List of possible reasons why the maintenance is not completed. This is an optional field and is only populated if there are any reasons for failures recorded for the maintenance by DB Center. FAILURE maintenance status may not always have a failure reason. */
  possibleFailureReasons?: ReadonlyArray<
    | "POSSIBLE_FAILURE_REASON_UNSPECIFIED"
    | "POSSIBLE_FAILURE_REASON_DENY_POLICY_CONFLICT"
    | "POSSIBLE_FAILURE_REASON_INSTANCE_IN_STOPPED_STATE"
    | (string & {})
  >;
  /** Output only. Current Maintenance version of the database resource. Example: "MYSQL_8_0_41.R20250531.01_15" */
  maintenanceVersion?: string;
  /** Output only. Upcoming maintenance window for the database resource. This is only populated for an engine, if upcoming maintenance is scheduled for the resource. This schedule is generated per engine and engine version, and there is only one upcoming maintenance window at any given time. In case of upcoming maintenance, the maintenance_state will be set to SCHEDULED first, and then IN_PROGRESS when the maintenance window starts. */
  upcomingMaintenance?: UpcomingMaintenance;
  /** Optional. Maintenance window for the database resource. */
  maintenanceSchedule?: ResourceMaintenanceSchedule;
  /** Optional. List of Deny maintenance period for the database resource. */
  denyMaintenanceSchedules?: ReadonlyArray<ResourceMaintenanceDenySchedule>;
  /** Output only. Resource maintenance state. This is to capture the current state of the maintenance. */
  state?:
    | "MAINTENANCE_STATE_UNSPECIFIED"
    | "MAINTENANCE_STATE_SCHEDULED"
    | "MAINTENANCE_STATE_IN_PROGRESS"
    | "MAINTENANCE_STATE_COMPLETED"
    | "MAINTENANCE_STATE_FAILED"
    | (string & {});
}

export const MaintenanceInfo: Schema.Codec<MaintenanceInfo> =
  /*@__PURE__*/ Schema.Struct({
    previousMaintenanceVersion: Schema.optional(Schema.String),
    currentVersionReleaseDate: Schema.optional(Databasecenter_Date),
    possibleFailureReasons: Schema.optional(Schema.Array(Schema.String)),
    maintenanceVersion: Schema.optional(Schema.String),
    upcomingMaintenance: Schema.optional(UpcomingMaintenance),
    maintenanceSchedule: Schema.optional(ResourceMaintenanceSchedule),
    denyMaintenanceSchedules: Schema.optional(
      Schema.Array(ResourceMaintenanceDenySchedule),
    ),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "MaintenanceInfo" });

export interface DatabaseResource {
  /** The full resource name, based on CAIS resource name format https://cloud.google.com/asset-inventory/docs/resource-name-format Example: `//cloudsql.googleapis.com/projects/project-number/instances/mysql-1` `//cloudsql.googleapis.com/projects/project-number/instances/postgres-1` `//spanner.googleapis.com/projects/project-number/instances/spanner-instance-1` `//alloydb.googleapis.com/projects/project-number/locations/us-central1/clusters/c1` `//alloydb.googleapis.com/projects/project-number/locations/us-central1/clusters/c1/instances/i1` */
  fullResourceName?: string;
  /** Optional. Backup and disaster recovery details for the resource. */
  backupdrConfig?: BackupDRConfig;
  /** Labels applied on the resource. The requirements for labels assigned to Google Cloud resources may be found at https://cloud.google.com/resource-manager/docs/labels-overview#requirements */
  labels?: ReadonlyArray<Label>;
  /** Machine configuration like CPU, memory, etc for the resource. */
  machineConfig?: MachineConfig;
  /** The list of signal groups and count of issues related to the resource. Only those signals which have been requested would be included. */
  signalGroups?: ReadonlyArray<SignalGroup>;
  /** The name of the resource(The last part of the full resource name). Example: For full resource name - `//cloudsql.googleapis.com/projects/project-number/instances/mysql-1`, resource name - `mysql-1` For full resource name - `//cloudsql.googleapis.com/projects/project-number/instances/postgres-1` , resource name - `postgres-1` Note: In some cases, there might be more than one resource with the same resource name. */
  resourceName?: string;
  /** Optional. Affiliation details of the resource. */
  affiliations?: ReadonlyArray<Affiliation>;
  /** Tags applied on the resource. The requirements for tags assigned to Google Cloud resources may be found at https://cloud.google.com/resource-manager/docs/tags/tags-overview */
  tags?: ReadonlyArray<Tag>;
  /** Optional. The maintenance information of the resource. */
  maintenanceInfo?: MaintenanceInfo;
  /** The location of the resources. It supports returning only regional locations in Google Cloud. These are of the form: "us-central1", "us-east1", etc. See https://cloud.google.com/about/locations for a list of such regions. */
  location?: string;
  /** The product this resource represents. */
  product?: Product;
  /** Subtype of the resource specified at creation time. */
  subResourceType?:
    | "SUB_RESOURCE_TYPE_UNSPECIFIED"
    | "SUB_RESOURCE_TYPE_PRIMARY"
    | "SUB_RESOURCE_TYPE_SECONDARY"
    | "SUB_RESOURCE_TYPE_READ_REPLICA"
    | "SUB_RESOURCE_TYPE_EXTERNAL_PRIMARY"
    | "SUB_RESOURCE_TYPE_READ_POOL"
    | "SUB_RESOURCE_TYPE_RESERVATION"
    | "SUB_RESOURCE_TYPE_DATASET"
    | "SUB_RESOURCE_TYPE_OTHER"
    | (string & {});
  /** Observable metrics for the resource e.g. CPU utilization, memory utilization, etc. */
  metrics?: Metrics;
  /** The category of the resource. */
  resourceCategory?:
    | "RESOURCE_CATEGORY_UNSPECIFIED"
    | "INSTANCE"
    | "CLUSTER"
    | "DATABASE"
    | "DATASET"
    | "RESERVATION"
    | (string & {});
  /** Specifies where the resource is created. For Google Cloud resources, it is the full name of the project. */
  container?: string;
  /** List of children associated with a database group. */
  childResources?: ReadonlyArray<DatabaseResource>;
  /** The type of resource defined according to the pattern: {Service Name}/{Type}. Ex: sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance spanner.googleapis.com/Instance */
  resourceType?: string;
  /** The edition of the resource. */
  edition?:
    | "EDITION_UNSPECIFIED"
    | "EDITION_ENTERPRISE"
    | "EDITION_ENTERPRISE_PLUS"
    | "EDITION_STANDARD"
    | (string & {});
}

export const DatabaseResource: Schema.Codec<DatabaseResource> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fullResourceName: Schema.optional(Schema.String),
      backupdrConfig: Schema.optional(BackupDRConfig),
      labels: Schema.optional(Schema.Array(Label)),
      machineConfig: Schema.optional(MachineConfig),
      signalGroups: Schema.optional(Schema.Array(SignalGroup)),
      resourceName: Schema.optional(Schema.String),
      affiliations: Schema.optional(Schema.Array(Affiliation)),
      tags: Schema.optional(Schema.Array(Tag)),
      maintenanceInfo: Schema.optional(MaintenanceInfo),
      location: Schema.optional(Schema.String),
      product: Schema.optional(Product),
      subResourceType: Schema.optional(Schema.String),
      metrics: Schema.optional(Metrics),
      resourceCategory: Schema.optional(Schema.String),
      container: Schema.optional(Schema.String),
      childResources: Schema.optional(Schema.Array(DatabaseResource)),
      resourceType: Schema.optional(Schema.String),
      edition: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "DatabaseResource",
  }) as any as Schema.Codec<DatabaseResource>;

export interface DatabaseResourceIssue {
  /** Signal associated with the issue. */
  signal?: Signal;
  /** Resource associated with the issue. */
  resource?: DatabaseResource;
}

export const DatabaseResourceIssue: Schema.Codec<DatabaseResourceIssue> =
  /*@__PURE__*/ Schema.Struct({
    signal: Schema.optional(Signal),
    resource: Schema.optional(DatabaseResource),
  }).annotate({ identifier: "DatabaseResourceIssue" });

export interface QueryIssuesResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. List of unreachable regions from where data could not be retrieved. */
  unreachable?: ReadonlyArray<string>;
  /** List of issues and resource details. */
  resourceIssues?: ReadonlyArray<DatabaseResourceIssue>;
}

export const QueryIssuesResponse: Schema.Codec<QueryIssuesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    resourceIssues: Schema.optional(Schema.Array(DatabaseResourceIssue)),
  }).annotate({ identifier: "QueryIssuesResponse" });

export interface IssueCount {
  /** Title of a signal group corresponding to the request. */
  displayName?: string;
  /** The count of the number of issues associated with those resources that are explicitly filtered in by the filters present in the request. A signal is an issue when its SignalStatus field is set to SIGNAL_STATUS_ISSUE. */
  issueCount?: number;
}

export const IssueCount: Schema.Codec<IssueCount> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    issueCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "IssueCount" });

export interface IssueGroupStats {
  /** Database resource level health card name. This will corresponds to one of the requested input group names. */
  displayName?: string;
  /** Total count of resources returned by the filter for which any of the specified issues are applicable. */
  resourcesCount?: number;
  /** The number of resources from the total defined above in field total_resources_count that are healthy with respect to all of the specified issues. */
  healthyResourcesCount?: number;
  /** Total count of the groups of resources returned by the filter that also have one or more resources for which any of the specified issues are applicable. */
  resourceGroupsCount?: number;
  /** The number of resource groups from the total groups as defined above that are healthy with respect to all of the specified issues. */
  healthyResourceGroupsCount?: number;
  /** List of issues stats containing count of resources having particular issue category. */
  issueStats?: ReadonlyArray<IssueStats>;
}

export const IssueGroupStats: Schema.Codec<IssueGroupStats> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    resourcesCount: Schema.optional(Schema.Number),
    healthyResourcesCount: Schema.optional(Schema.Number),
    resourceGroupsCount: Schema.optional(Schema.Number),
    healthyResourceGroupsCount: Schema.optional(Schema.Number),
    issueStats: Schema.optional(Schema.Array(IssueStats)),
  }).annotate({ identifier: "IssueGroupStats" });

export interface QueryMetrics {
  /** The average number of rows processed by the query across all runs. */
  rowsProcessed?: string;
  /** The number of times the query was executed. */
  executionCount?: string;
  /** The total CPU time consumed by the query across all runs. */
  totalCpuTime?: string;
  /** The average execution period of the query across all runs. */
  avgCpuTime?: string;
  /** The window over which the metrics are aggregated. */
  metricsWindow?:
    | "METRICS_WINDOW_UNSPECIFIED"
    | "LAST_ONE_DAY"
    | "LAST_ONE_WEEK"
    | "LAST_TWO_WEEKS"
    | (string & {});
}

export const QueryMetrics: Schema.Codec<QueryMetrics> =
  /*@__PURE__*/ Schema.Struct({
    rowsProcessed: Schema.optional(Schema.String),
    executionCount: Schema.optional(Schema.String),
    totalCpuTime: Schema.optional(Schema.String),
    avgCpuTime: Schema.optional(Schema.String),
    metricsWindow: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryMetrics" });

export interface ResourceId {
  /** The type of the resource. sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance */
  resourceType?: string;
  /** The product of the resource, including the type, engine, and version. */
  product?: Product;
  /** The full resource name of the resource. */
  fullResourceName?: string;
}

export const ResourceId: Schema.Codec<ResourceId> =
  /*@__PURE__*/ Schema.Struct({
    resourceType: Schema.optional(Schema.String),
    product: Schema.optional(Product),
    fullResourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceId" });

export interface QueryStats {
  /** Metrics related to the query performance. */
  queryMetrics?: QueryMetrics;
  /** The query hash of the query. */
  queryHash?: string;
  /** Information about inefficient query. */
  inefficientQueryInfo?: InefficientQueryInfo;
  /** The resource ids for which the query stats are collected. */
  resourceIds?: ReadonlyArray<ResourceId>;
  /** The query string is normalized query without any PII data. */
  normalizedQuery?: string;
  /** The type of the resource. sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance */
  resourceType?: string;
}

export const QueryStats: Schema.Codec<QueryStats> =
  /*@__PURE__*/ Schema.Struct({
    queryMetrics: Schema.optional(QueryMetrics),
    queryHash: Schema.optional(Schema.String),
    inefficientQueryInfo: Schema.optional(InefficientQueryInfo),
    resourceIds: Schema.optional(Schema.Array(ResourceId)),
    normalizedQuery: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryStats" });

export interface DatabaseResourceGroup {
  /** A database resource that serves as a root of the group of database resources. It is repeated just in case we have the concept of multiple roots in the future, however, it will only be populated with a single value for now. */
  rootResources?: ReadonlyArray<DatabaseResource>;
  /** The filtered signal groups and the count of issues associated with the resources that have been filtered in. */
  signalGroups?: ReadonlyArray<IssueCount>;
}

export const DatabaseResourceGroup: Schema.Codec<DatabaseResourceGroup> =
  /*@__PURE__*/ Schema.Struct({
    rootResources: Schema.optional(Schema.Array(DatabaseResource)),
    signalGroups: Schema.optional(Schema.Array(IssueCount)),
  }).annotate({ identifier: "DatabaseResourceGroup" });

export interface QueryDatabaseResourceGroupsResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. List of unreachable regions from where data could not be retrieved. */
  unreachable?: ReadonlyArray<string>;
  /** List of database resource groups that pass the filter. */
  resourceGroups?: ReadonlyArray<DatabaseResourceGroup>;
  /** Output only. The total number of resource groups in the entire list. */
  totalSize?: string;
}

export const QueryDatabaseResourceGroupsResponse: Schema.Codec<QueryDatabaseResourceGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    resourceGroups: Schema.optional(Schema.Array(DatabaseResourceGroup)),
    totalSize: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryDatabaseResourceGroupsResponse" });

export interface QueryStatsInfo {
  /** List of query stats for the resources in the group. This stats is stats at resource level for the resources having same normalized query. */
  queryStats?: ReadonlyArray<QueryStats>;
  /** Aggregated query stats for the resources for same normalized query. */
  aggregatedQueryStats?: QueryStats;
}

export const QueryStatsInfo: Schema.Codec<QueryStatsInfo> =
  /*@__PURE__*/ Schema.Struct({
    queryStats: Schema.optional(Schema.Array(QueryStats)),
    aggregatedQueryStats: Schema.optional(QueryStats),
  }).annotate({ identifier: "QueryStatsInfo" });

export interface AggregateQueryStatsResponse {
  /** List of query stats where each group contains stats for resources having a particular combination of relevant query stats. */
  queryStats?: ReadonlyArray<QueryStatsInfo>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. List of unreachable regions from where data could not be retrieved. */
  unreachable?: ReadonlyArray<string>;
}

export const AggregateQueryStatsResponse: Schema.Codec<AggregateQueryStatsResponse> =
  /*@__PURE__*/ Schema.Struct({
    queryStats: Schema.optional(Schema.Array(QueryStatsInfo)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AggregateQueryStatsResponse" });

export interface QueryProductsResponse {
  /** List of database products returned. */
  products?: ReadonlyArray<Product>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages */
  nextPageToken?: string;
  /** Unordered list. List of unreachable regions from where data could not be retrieved. */
  unreachable?: ReadonlyArray<string>;
}

export const QueryProductsResponse: Schema.Codec<QueryProductsResponse> =
  /*@__PURE__*/ Schema.Struct({
    products: Schema.optional(Schema.Array(Product)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "QueryProductsResponse" });

export interface AggregateFleetRow {
  /** Number of resource groups that have a particular dimension. */
  resourceGroupsCount?: number;
  /** Optional. Delta counts and details of resources which were added to/deleted from fleet. */
  deltaDetails?: DeltaDetails;
  /** Group by dimension. */
  dimension?: ReadonlyArray<Dimension>;
  /** Number of resources that have a particular dimension. */
  resourcesCount?: number;
}

export const AggregateFleetRow: Schema.Codec<AggregateFleetRow> =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupsCount: Schema.optional(Schema.Number),
    deltaDetails: Schema.optional(DeltaDetails),
    dimension: Schema.optional(Schema.Array(Dimension)),
    resourcesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregateFleetRow" });

export interface AggregateIssueStatsResponse {
  /** Unordered list. List of unreachable regions from where data could not be retrieved. */
  unreachable?: ReadonlyArray<string>;
  /** Total count of the resources filtered in based on the user given filter. */
  totalResourcesCount?: number;
  /** Total count of the resource filtered in based on the user given filter. */
  totalResourceGroupsCount?: number;
  /** List of issue group stats where each group contains stats for resources having a particular combination of relevant issues. */
  issueGroupStats?: ReadonlyArray<IssueGroupStats>;
}

export const AggregateIssueStatsResponse: Schema.Codec<AggregateIssueStatsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    totalResourcesCount: Schema.optional(Schema.Number),
    totalResourceGroupsCount: Schema.optional(Schema.Number),
    issueGroupStats: Schema.optional(Schema.Array(IssueGroupStats)),
  }).annotate({ identifier: "AggregateIssueStatsResponse" });

export interface AggregateFleetResponse {
  /** Count of all resource groups in the fleet. This includes counts from all pages. */
  resourceGroupsTotalCount?: number;
  /** Output only. The total number of rows in the entire list. */
  totalSize?: string;
  /** Count of all resources in the fleet. This includes counts from all pages. */
  resourceTotalCount?: number;
  /** Represents a row grouped by the fields in the input. */
  rows?: ReadonlyArray<AggregateFleetRow>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. List of unreachable regions from where data could not be retrieved. */
  unreachable?: ReadonlyArray<string>;
}

export const AggregateFleetResponse: Schema.Codec<AggregateFleetResponse> =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupsTotalCount: Schema.optional(Schema.Number),
    totalSize: Schema.optional(Schema.String),
    resourceTotalCount: Schema.optional(Schema.Number),
    rows: Schema.optional(Schema.Array(AggregateFleetRow)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AggregateFleetResponse" });

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

export interface QueryProductsV1betaRequest {
  /** Optional. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. Parent can be a project, a folder, or an organization. The allowed values are: * projects/{PROJECT_ID}/locations/{LOCATION} (e.g.,"projects/foo-bar/locations/us-central1") * projects/{PROJECT_NUMBER}/locations/{LOCATION} (e.g.,"projects/12345678/locations/us-central1") * folders/{FOLDER_NUMBER}/locations/{LOCATION} (e.g.,"folders/1234567/locations/us-central1") * organizations/{ORGANIZATION_NUMBER}/locations/{LOCATION} (e.g.,"organizations/123456/locations/us-central1") * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent?: string;
  /** Optional. A page token, received from a previous `ListLocations` call. Provide this to retrieve the subsequent page. All other parameters except page size should match the call that provided the page page token. */
  pageToken?: string;
}

export const QueryProductsV1betaRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta:queryProducts" }),
    svc,
  ) as unknown as Schema.Codec<QueryProductsV1betaRequest>;

export type QueryProductsV1betaResponse = QueryProductsResponse;
export const QueryProductsV1betaResponse = /*@__PURE__*/ QueryProductsResponse;

export type QueryProductsV1betaError = DefaultErrors | NotFound | Forbidden;

/** QueryProducts provides a list of all possible products which can be used to filter database resources. */
export const queryProductsV1beta: API.PaginatedOperationMethod<
  QueryProductsV1betaRequest,
  QueryProductsV1betaResponse,
  QueryProductsV1betaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: QueryProductsV1betaRequest,
  output: QueryProductsV1betaResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AggregateFleetV1betaRequest {
  /** Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info, 'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` */
  filter?: string;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  "baselineDate.year"?: number;
  /** Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent?: string;
  /** Optional. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. A field that statistics are grouped by. Valid values are any combination of the following: * container * product.type * product.engine * product.version * location * sub_resource_type * management_type * tag.key * tag.value * tag.source * tag.inherited * label.key * label.value * label.source * has_maintenance_schedule * has_deny_maintenance_schedules Comma separated list. */
  groupBy?: string;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  "baselineDate.day"?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  "baselineDate.month"?: number;
  /** Optional. A page token, received from a previous `AggregateFleet` call. Provide this to retrieve the subsequent page. All other parameters should match the parameters in the call that provided the page token except for page_size which can be different. */
  pageToken?: string;
  /** Optional. Valid values to order by are: * resource_groups_count * resources_count * and all fields supported by `group_by` The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It supports ordering using multiple fields. For example: `order_by = "resource_groups_count"` sorts response in ascending order `order_by = "resource_groups_count DESC"` sorts response in descending order `order_by = "product.type, product.version DESC, location"` orders by type in ascending order, version in descending order and location in ascending order */
  orderBy?: string;
}

export const AggregateFleetV1betaRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    "baselineDate.year": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("baselineDate.year"),
    ),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    groupBy: Schema.optional(Schema.String).pipe(T.HttpQuery("groupBy")),
    "baselineDate.day": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("baselineDate.day"),
    ),
    "baselineDate.month": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("baselineDate.month"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta:aggregateFleet" }),
    svc,
  ) as unknown as Schema.Codec<AggregateFleetV1betaRequest>;

export type AggregateFleetV1betaResponse = AggregateFleetResponse;
export const AggregateFleetV1betaResponse =
  /*@__PURE__*/ AggregateFleetResponse;

export type AggregateFleetV1betaError = DefaultErrors | NotFound | Forbidden;

/** AggregateFleet provides statistics about the fleet grouped by various fields. */
export const aggregateFleetV1beta: API.PaginatedOperationMethod<
  AggregateFleetV1betaRequest,
  AggregateFleetV1betaResponse,
  AggregateFleetV1betaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: AggregateFleetV1betaRequest,
  output: AggregateFleetV1betaResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AggregateIssueStatsV1betaRequest {
  /** Request body */
  body?: AggregateIssueStatsRequest;
}

export const AggregateIssueStatsV1betaRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(AggregateIssueStatsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta:aggregateIssueStats",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AggregateIssueStatsV1betaRequest>;

export type AggregateIssueStatsV1betaResponse = AggregateIssueStatsResponse;
export const AggregateIssueStatsV1betaResponse =
  /*@__PURE__*/ AggregateIssueStatsResponse;

export type AggregateIssueStatsV1betaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** AggregateIssueStats provides database resource issues statistics. */
export const aggregateIssueStatsV1beta: API.OperationMethod<
  AggregateIssueStatsV1betaRequest,
  AggregateIssueStatsV1betaResponse,
  AggregateIssueStatsV1betaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AggregateIssueStatsV1betaRequest,
  output: AggregateIssueStatsV1betaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryDatabaseResourceGroupsV1betaRequest {
  /** Request body */
  body?: QueryDatabaseResourceGroupsRequest;
}

export const QueryDatabaseResourceGroupsV1betaRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(QueryDatabaseResourceGroupsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta:queryDatabaseResourceGroups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<QueryDatabaseResourceGroupsV1betaRequest>;

export type QueryDatabaseResourceGroupsV1betaResponse =
  QueryDatabaseResourceGroupsResponse;
export const QueryDatabaseResourceGroupsV1betaResponse =
  /*@__PURE__*/ QueryDatabaseResourceGroupsResponse;

export type QueryDatabaseResourceGroupsV1betaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** QueryDatabaseResourceGroups returns paginated results of database groups. */
export const queryDatabaseResourceGroupsV1beta: API.OperationMethod<
  QueryDatabaseResourceGroupsV1betaRequest,
  QueryDatabaseResourceGroupsV1betaResponse,
  QueryDatabaseResourceGroupsV1betaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: QueryDatabaseResourceGroupsV1betaRequest,
  output: QueryDatabaseResourceGroupsV1betaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface QueryIssuesV1betaRequest {
  /** Request body */
  body?: QueryIssuesRequest;
}

export const QueryIssuesV1betaRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(QueryIssuesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta:queryIssues", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<QueryIssuesV1betaRequest>;

export type QueryIssuesV1betaResponse = QueryIssuesResponse;
export const QueryIssuesV1betaResponse = /*@__PURE__*/ QueryIssuesResponse;

export type QueryIssuesV1betaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** QueryIssues provides a list of issues and recommendations that a user has access to and that are within the requested scope. */
export const queryIssuesV1beta: API.OperationMethod<
  QueryIssuesV1betaRequest,
  QueryIssuesV1betaResponse,
  QueryIssuesV1betaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: QueryIssuesV1betaRequest,
  output: QueryIssuesV1betaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AggregateQueryStatsFoldersRequest {
  /** Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent: string;
  /** Request body */
  body?: AggregateQueryStatsRequest;
}

export const AggregateQueryStatsFoldersRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AggregateQueryStatsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:aggregateQueryStats",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AggregateQueryStatsFoldersRequest>;

export type AggregateQueryStatsFoldersResponse = AggregateQueryStatsResponse;
export const AggregateQueryStatsFoldersResponse =
  /*@__PURE__*/ AggregateQueryStatsResponse;

export type AggregateQueryStatsFoldersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** AggregateQueryStats provides database resource query execution statistics. */
export const aggregateQueryStatsFolders: API.OperationMethod<
  AggregateQueryStatsFoldersRequest,
  AggregateQueryStatsFoldersResponse,
  AggregateQueryStatsFoldersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AggregateQueryStatsFoldersRequest,
  output: AggregateQueryStatsFoldersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AggregateQueryStatsOrganizationsRequest {
  /** Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent: string;
  /** Request body */
  body?: AggregateQueryStatsRequest;
}

export const AggregateQueryStatsOrganizationsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AggregateQueryStatsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:aggregateQueryStats",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AggregateQueryStatsOrganizationsRequest>;

export type AggregateQueryStatsOrganizationsResponse =
  AggregateQueryStatsResponse;
export const AggregateQueryStatsOrganizationsResponse =
  /*@__PURE__*/ AggregateQueryStatsResponse;

export type AggregateQueryStatsOrganizationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** AggregateQueryStats provides database resource query execution statistics. */
export const aggregateQueryStatsOrganizations: API.OperationMethod<
  AggregateQueryStatsOrganizationsRequest,
  AggregateQueryStatsOrganizationsResponse,
  AggregateQueryStatsOrganizationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AggregateQueryStatsOrganizationsRequest,
  output: AggregateQueryStatsOrganizationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AggregateQueryStatsProjectsRequest {
  /** Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") */
  parent: string;
  /** Request body */
  body?: AggregateQueryStatsRequest;
}

export const AggregateQueryStatsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AggregateQueryStatsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}:aggregateQueryStats",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AggregateQueryStatsProjectsRequest>;

export type AggregateQueryStatsProjectsResponse = AggregateQueryStatsResponse;
export const AggregateQueryStatsProjectsResponse =
  /*@__PURE__*/ AggregateQueryStatsResponse;

export type AggregateQueryStatsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** AggregateQueryStats provides database resource query execution statistics. */
export const aggregateQueryStatsProjects: API.OperationMethod<
  AggregateQueryStatsProjectsRequest,
  AggregateQueryStatsProjectsResponse,
  AggregateQueryStatsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AggregateQueryStatsProjectsRequest,
  output: AggregateQueryStatsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
