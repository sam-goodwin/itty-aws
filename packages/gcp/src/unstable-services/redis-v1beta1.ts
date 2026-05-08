// ==========================================================================
// Google Cloud Memorystore for Redis API (redis v1beta1)
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
  name: "redis",
  version: "v1beta1",
  rootUrl: "https://redis.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface RetentionSettings {
  quantityBasedRetention?: number;
  /** Duration based retention period i.e. 172800 seconds (2 days) */
  durationBasedRetention?: string;
  timeBasedRetention?: string;
  /** Timestamp based retention period i.e. 2024-05-01T00:00:00Z */
  timestampBasedRetentionTime?: string;
  /** The unit that 'retained_backups' represents. */
  retentionUnit?:
    | "RETENTION_UNIT_UNSPECIFIED"
    | "COUNT"
    | "TIME"
    | "DURATION"
    | "RETENTION_UNIT_OTHER"
    | (string & {});
}

export const RetentionSettings: Schema.Schema<RetentionSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quantityBasedRetention: Schema.optional(Schema.Number),
    durationBasedRetention: Schema.optional(Schema.String),
    timeBasedRetention: Schema.optional(Schema.String),
    timestampBasedRetentionTime: Schema.optional(Schema.String),
    retentionUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "RetentionSettings" });

export interface BackupConfiguration {
  /** Backup retention settings. */
  backupRetentionSettings?: RetentionSettings;
  /** Whether customer visible automated backups are enabled on the instance. */
  automatedBackupEnabled?: boolean;
  /** Whether point-in-time recovery is enabled. This is optional field, if the database service does not have this feature or metadata is not available in control plane, this can be omitted. */
  pointInTimeRecoveryEnabled?: boolean;
}

export const BackupConfiguration: Schema.Schema<BackupConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupRetentionSettings: Schema.optional(RetentionSettings),
    automatedBackupEnabled: Schema.optional(Schema.Boolean),
    pointInTimeRecoveryEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BackupConfiguration" });

export interface BackupDRConfiguration {
  /** Indicates if the resource is managed by BackupDR. */
  backupdrManaged?: boolean;
}

export const BackupDRConfiguration: Schema.Schema<BackupDRConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupdrManaged: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "BackupDRConfiguration" });

export interface OperationError {
  errorType?:
    | "OPERATION_ERROR_TYPE_UNSPECIFIED"
    | "KMS_KEY_ERROR"
    | "DATABASE_ERROR"
    | "STOCKOUT_ERROR"
    | "CANCELLATION_ERROR"
    | "SQLSERVER_ERROR"
    | "INTERNAL_ERROR"
    | (string & {});
  /** Identifies the specific error that occurred. REQUIRED */
  code?: string;
  /** Additional information about the error encountered. REQUIRED */
  message?: string;
}

export const OperationError: Schema.Schema<OperationError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorType: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationError" });

export interface BackupRun {
  /** The status of this run. REQUIRED */
  status?: "STATUS_UNSPECIFIED" | "SUCCESSFUL" | "FAILED" | (string & {});
  /** Information about why the backup operation failed. This is only present if the run has the FAILED status. OPTIONAL */
  error?: OperationError;
  /** The time the backup operation started. REQUIRED */
  startTime?: string;
  /** The time the backup operation completed. REQUIRED */
  endTime?: string;
}

export const BackupRun: Schema.Schema<BackupRun> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    error: Schema.optional(OperationError),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupRun" });

export interface DatabaseResourceId {
  /** Required. Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged */
  provider?:
    | "PROVIDER_UNSPECIFIED"
    | "GCP"
    | "AWS"
    | "AZURE"
    | "ONPREM"
    | "SELFMANAGED"
    | "PROVIDER_OTHER"
    | (string & {});
  /** Required. The type of resource this ID is identifying. Ex go/keep-sorted start alloydb.googleapis.com/Cluster, alloydb.googleapis.com/Instance, bigtableadmin.googleapis.com/Cluster, bigtableadmin.googleapis.com/Instance compute.googleapis.com/Instance firestore.googleapis.com/Database, redis.googleapis.com/Instance, redis.googleapis.com/Cluster, oracledatabase.googleapis.com/CloudExadataInfrastructure oracledatabase.googleapis.com/CloudVmCluster oracledatabase.googleapis.com/AutonomousDatabase spanner.googleapis.com/Instance, spanner.googleapis.com/Database, sqladmin.googleapis.com/Instance, go/keep-sorted end REQUIRED Please refer go/condor-common-datamodel */
  resourceType?: string;
  /** Optional. Needs to be used only when the provider is PROVIDER_OTHER. */
  providerDescription?: string;
  /** Required. A service-local token that distinguishes this resource from other resources within the same service. */
  uniqueId?: string;
}

export const DatabaseResourceId: Schema.Schema<DatabaseResourceId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(Schema.String),
    resourceType: Schema.optional(Schema.String),
    providerDescription: Schema.optional(Schema.String),
    uniqueId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseResourceId" });

export interface BackupDRMetadata {
  /** Backup configuration for this instance. */
  backupConfiguration?: BackupConfiguration;
  /** BackupDR configuration for this instance. */
  backupdrConfiguration?: BackupDRConfiguration;
  /** Required. Full resource name of this instance. */
  fullResourceName?: string;
  /** Required. Last time backup configuration was refreshed. */
  lastRefreshTime?: string;
  /** Latest backup run information for this instance. */
  backupRun?: BackupRun;
  /** Required. Database resource id. */
  resourceId?: DatabaseResourceId;
}

export const BackupDRMetadata: Schema.Schema<BackupDRMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupConfiguration: Schema.optional(BackupConfiguration),
    backupdrConfiguration: Schema.optional(BackupDRConfiguration),
    fullResourceName: Schema.optional(Schema.String),
    lastRefreshTime: Schema.optional(Schema.String),
    backupRun: Schema.optional(BackupRun),
    resourceId: Schema.optional(DatabaseResourceId),
  }).annotate({ identifier: "BackupDRMetadata" });

export interface ZoneDistributionConfig {
  /** Optional. The mode of zone distribution. Defaults to MULTI_ZONE, when not specified. */
  mode?:
    | "ZONE_DISTRIBUTION_MODE_UNSPECIFIED"
    | "MULTI_ZONE"
    | "SINGLE_ZONE"
    | (string & {});
  /** Optional. When SINGLE ZONE distribution is selected, zone field would be used to allocate all resources in that zone. This is not applicable to MULTI_ZONE, and would be ignored for MULTI_ZONE clusters. */
  zone?: string;
}

export const ZoneDistributionConfig: Schema.Schema<ZoneDistributionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "ZoneDistributionConfig" });

export interface ConfigBasedSignalData {
  /** Database resource id. */
  resourceId?: DatabaseResourceId;
  /** Signal data for boolean signals. */
  signalBoolValue?: boolean;
  /** Required. Signal type of the signal */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_NOT_PROTECTED_BY_AUTOMATIC_FAILOVER"
    | (string & {});
  /** Required. Full Resource name of the source resource. */
  fullResourceName?: string;
  /** Required. Last time signal was refreshed */
  lastRefreshTime?: string;
}

export const ConfigBasedSignalData: Schema.Schema<ConfigBasedSignalData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(DatabaseResourceId),
    signalBoolValue: Schema.optional(Schema.Boolean),
    signalType: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
    lastRefreshTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ConfigBasedSignalData" });

export interface DatabaseResourceRecommendationSignalData {
  /** Required. last time recommendationw as refreshed */
  lastRefreshTime?: string;
  /** Required. ID of recommender. Examples: "google.cloudsql.instance.PerformanceRecommender" */
  recommenderId?: string;
  /** Required. Type of signal, for example, `SIGNAL_TYPE_IDLE`, `SIGNAL_TYPE_HIGH_NUMBER_OF_TABLES`, etc. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_NOT_PROTECTED_BY_AUTOMATIC_FAILOVER"
    | "SIGNAL_TYPE_GROUP_NOT_REPLICATING_ACROSS_REGIONS"
    | "SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_ZONES"
    | "SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_REGIONS"
    | "SIGNAL_TYPE_NO_PROMOTABLE_REPLICA"
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
    | "SIGNAL_TYPE_QUERY_STATISTICS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATISTICS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATISTICS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATISTICS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_BY_OWNERSHIP_CHAINING"
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
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
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
    | "SIGNAL_TYPE_MANY_IDLE_CONNECTIONS"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_VERSION"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_PERFORMANCE_KPI_CHANGE"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | (string & {});
  /** Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
  resourceName?: string;
  /** Required. Name of recommendation. Examples: organizations/1234/locations/us-central1/recommenders/google.cloudsql.instance.PerformanceRecommender/recommendations/9876 */
  recommender?: string;
  /** Required. Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.cloudsql.instance.PerformanceRecommender", recommender_subtype can be "MYSQL_HIGH_NUMBER_OF_OPEN_TABLES_BEST_PRACTICE"/"POSTGRES_HIGH_TRANSACTION_ID_UTILIZATION_BEST_PRACTICE" */
  recommenderSubtype?: string;
  /** Optional. Any other additional metadata specific to recommendation */
  additionalMetadata?: Record<string, unknown>;
  /** Required. Recommendation state */
  recommendationState?:
    | "UNSPECIFIED"
    | "ACTIVE"
    | "CLAIMED"
    | "SUCCEEDED"
    | "FAILED"
    | "DISMISSED"
    | (string & {});
}

export const DatabaseResourceRecommendationSignalData: Schema.Schema<DatabaseResourceRecommendationSignalData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastRefreshTime: Schema.optional(Schema.String),
    recommenderId: Schema.optional(Schema.String),
    signalType: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    recommender: Schema.optional(Schema.String),
    recommenderSubtype: Schema.optional(Schema.String),
    additionalMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    recommendationState: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseResourceRecommendationSignalData" });

export interface Compliance {
  /** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
  standard?: string;
  /** Version of the standard or benchmark, for example, 1.1 */
  version?: string;
}

export const Compliance: Schema.Schema<Compliance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "Compliance" });

export interface DatabaseResourceHealthSignalData {
  /** Industry standards associated with this signal; if this signal is an issue, that could be a violation of the associated industry standard(s). For example, AUTO_BACKUP_DISABLED signal is associated with CIS GCP 1.1, CIS GCP 1.2, CIS GCP 1.3, NIST 800-53 and ISO-27001 compliance standards. If a database resource does not have automated backup enable, it will violate these following industry standards. */
  compliance?: ReadonlyArray<Compliance>;
  /** Closest parent container of this resource. In GCP, 'container' refers to a Cloud Resource Manager project. It must be resource name of a Cloud Resource Manager project with the format of "provider//", such as "projects/123". For GCP provided resources, number should be project number. */
  resourceContainer?: string;
  /** The external-uri of the signal, using which more information about this signal can be obtained. In GCP, this will take user to SCC page to get more details about signals. */
  externalUri?: string;
  /** Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
  resourceName?: string;
  /** Description associated with signal */
  description?: string;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "RESOLVED" | "MUTED" | (string & {});
  /** Required. The class of the signal, such as if it's a THREAT or VULNERABILITY. */
  signalClass?:
    | "CLASS_UNSPECIFIED"
    | "THREAT"
    | "VULNERABILITY"
    | "MISCONFIGURATION"
    | "OBSERVATION"
    | "ERROR"
    | (string & {});
  /** Required. The last time at which the event described by this signal took place */
  eventTime?: string;
  /** This is used to identify the location of the resource. Example: "us-central1" */
  location?: string;
  /** Required. Unique identifier for the signal. This is an unique id which would be mainatined by partner to identify a signal. */
  signalId?: string;
  /** Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged */
  provider?:
    | "PROVIDER_UNSPECIFIED"
    | "GCP"
    | "AWS"
    | "AZURE"
    | "ONPREM"
    | "SELFMANAGED"
    | "PROVIDER_OTHER"
    | (string & {});
  /** Required. The name of the signal, ex: PUBLIC_SQL_INSTANCE, SQL_LOG_ERROR_VERBOSITY etc. */
  name?: string;
  /** Required. Type of signal, for example, `AVAILABLE_IN_MULTIPLE_ZONES`, `LOGGING_MOST_ERRORS`, etc. */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_NOT_PROTECTED_BY_AUTOMATIC_FAILOVER"
    | "SIGNAL_TYPE_GROUP_NOT_REPLICATING_ACROSS_REGIONS"
    | "SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_ZONES"
    | "SIGNAL_TYPE_NOT_AVAILABLE_IN_MULTIPLE_REGIONS"
    | "SIGNAL_TYPE_NO_PROMOTABLE_REPLICA"
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
    | "SIGNAL_TYPE_QUERY_STATISTICS_LOGGED"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_CLIENT_HOSTNAME"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PARSER_STATISTICS"
    | "SIGNAL_TYPE_EXCESSIVE_LOGGING_OF_PLANNER_STATISTICS"
    | "SIGNAL_TYPE_NOT_LOGGING_ONLY_DDL_STATEMENTS"
    | "SIGNAL_TYPE_LOGGING_QUERY_STATISTICS"
    | "SIGNAL_TYPE_NOT_LOGGING_TEMPORARY_FILES"
    | "SIGNAL_TYPE_CONNECTION_MAX_NOT_CONFIGURED"
    | "SIGNAL_TYPE_USER_OPTIONS_CONFIGURED"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_WEAK_ROOT_PASSWORD"
    | "SIGNAL_TYPE_ENCRYPTION_KEY_NOT_CUSTOMER_MANAGED"
    | "SIGNAL_TYPE_SERVER_AUTHENTICATION_NOT_REQUIRED"
    | "SIGNAL_TYPE_EXPOSED_BY_OWNERSHIP_CHAINING"
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
    | "SIGNAL_TYPE_NO_POINT_IN_TIME_RECOVERY"
    | "SIGNAL_TYPE_RESOURCE_SUSPENDED"
    | "SIGNAL_TYPE_EXPENSIVE_COMMANDS"
    | "SIGNAL_TYPE_NO_MAINTENANCE_POLICY_CONFIGURED"
    | "SIGNAL_TYPE_NO_DELETION_PROTECTION"
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
    | "SIGNAL_TYPE_MANY_IDLE_CONNECTIONS"
    | "SIGNAL_TYPE_REPLICATION_LAG"
    | "SIGNAL_TYPE_OUTDATED_VERSION"
    | "SIGNAL_TYPE_OUTDATED_CLIENT"
    | "SIGNAL_TYPE_DATABOOST_DISABLED"
    | "SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_PERFORMANCE_KPI_CHANGE"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | (string & {});
  /** Any other additional metadata */
  additionalMetadata?: Record<string, unknown>;
  /** The severity of the signal, such as if it's a HIGH or LOW severity. */
  signalSeverity?:
    | "SIGNAL_SEVERITY_UNSPECIFIED"
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | (string & {});
}

export const DatabaseResourceHealthSignalData: Schema.Schema<DatabaseResourceHealthSignalData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compliance: Schema.optional(Schema.Array(Compliance)),
    resourceContainer: Schema.optional(Schema.String),
    externalUri: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    signalClass: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    signalId: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    signalType: Schema.optional(Schema.String),
    additionalMetadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    signalSeverity: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseResourceHealthSignalData" });

export interface MachineConfiguration {
  /** Optional. Max slots for BigQuery Reservations. Max slots are in increments of 50. */
  maxReservationSlots?: string;
  /** Optional. Number of shards (if applicable). */
  shardCount?: number;
  /** Optional. The number of vCPUs. TODO(b/342344482) add proto validations again after bug fix. */
  vcpuCount?: number;
  /** The number of CPUs. Deprecated. Use vcpu_count instead. TODO(b/342344482) add proto validations again after bug fix. */
  cpuCount?: number;
  /** Memory size in bytes. TODO(b/342344482) add proto validations again after bug fix. */
  memorySizeInBytes?: string;
  /** Optional. Baseline slots for BigQuery Reservations. Baseline slots are in increments of 50. */
  baselineSlots?: string;
}

export const MachineConfiguration: Schema.Schema<MachineConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxReservationSlots: Schema.optional(Schema.String),
    shardCount: Schema.optional(Schema.Number),
    vcpuCount: Schema.optional(Schema.Number),
    cpuCount: Schema.optional(Schema.Number),
    memorySizeInBytes: Schema.optional(Schema.String),
    baselineSlots: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineConfiguration" });

export interface Product {
  /** Type of specific database product. It could be CloudSQL, AlloyDB etc.. */
  type?:
    | "PRODUCT_TYPE_UNSPECIFIED"
    | "PRODUCT_TYPE_CLOUD_SQL"
    | "CLOUD_SQL"
    | "PRODUCT_TYPE_ALLOYDB"
    | "ALLOYDB"
    | "PRODUCT_TYPE_SPANNER"
    | "PRODUCT_TYPE_ON_PREM"
    | "ON_PREM"
    | "PRODUCT_TYPE_MEMORYSTORE"
    | "PRODUCT_TYPE_BIGTABLE"
    | "PRODUCT_TYPE_FIRESTORE"
    | "PRODUCT_TYPE_COMPUTE_ENGINE"
    | "PRODUCT_TYPE_ORACLE_ON_GCP"
    | "PRODUCT_TYPE_BIGQUERY"
    | "PRODUCT_TYPE_OTHER"
    | (string & {});
  /** Version of the underlying database engine. Example values: For MySQL, it could be "8.0", "5.7" etc.. For Postgres, it could be "14", "15" etc.. */
  version?: string;
  /** Minor version of the underlying database engine. Example values: For MySQL, it could be "8.0.32", "5.7.32" etc.. For Postgres, it could be "14.3", "15.3" etc.. */
  minorVersion?: string;
  /** The specific engine that the underlying database is running. */
  engine?:
    | "ENGINE_UNSPECIFIED"
    | "ENGINE_MYSQL"
    | "MYSQL"
    | "ENGINE_POSTGRES"
    | "POSTGRES"
    | "ENGINE_SQL_SERVER"
    | "SQL_SERVER"
    | "ENGINE_NATIVE"
    | "NATIVE"
    | "ENGINE_CLOUD_SPANNER_WITH_POSTGRES_DIALECT"
    | "ENGINE_CLOUD_SPANNER_WITH_GOOGLESQL_DIALECT"
    | "ENGINE_MEMORYSTORE_FOR_REDIS"
    | "ENGINE_MEMORYSTORE_FOR_REDIS_CLUSTER"
    | "ENGINE_OTHER"
    | "ENGINE_FIRESTORE_WITH_NATIVE_MODE"
    | "ENGINE_FIRESTORE_WITH_DATASTORE_MODE"
    | "ENGINE_FIRESTORE_WITH_MONGODB_COMPATIBILITY_MODE"
    | "ENGINE_EXADATA_ORACLE"
    | "ENGINE_ADB_SERVERLESS_ORACLE"
    | (string & {});
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    minorVersion: Schema.optional(Schema.String),
    engine: Schema.optional(Schema.String),
  }).annotate({ identifier: "Product" });

export interface ResourceFlags {
  /** Optional. Key of the resource flag. */
  key?: string;
  /** Optional. Value of the resource flag. */
  value?: string;
}

export const ResourceFlags: Schema.Schema<ResourceFlags> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceFlags" });

export interface UpcomingMaintenance {
  /** Optional. The start time of the upcoming maintenance. */
  startTime?: string;
  /** Optional. The end time of the upcoming maintenance. */
  endTime?: string;
}

export const UpcomingMaintenance: Schema.Schema<UpcomingMaintenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpcomingMaintenance" });

export interface TimeOfDay {
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nanos: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    hours: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface ResourceMaintenanceSchedule {
  /** Optional. Phase of the maintenance window. This is to capture order of maintenance. For example, for Cloud SQL resources, this can be used to capture if the maintenance window is in Week1, Week2, Week5, etc. Non production resources are usually part of early phase. For more details, refer to Cloud SQL resources - https://cloud.google.com/sql/docs/mysql/maintenance */
  phase?:
    | "PHASE_UNSPECIFIED"
    | "ANY"
    | "WEEK1"
    | "WEEK2"
    | "WEEK5"
    | (string & {});
  /** Optional. Preferred time to start the maintenance operation on the specified day. */
  time?: TimeOfDay;
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
}

export const ResourceMaintenanceSchedule: Schema.Schema<ResourceMaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    phase: Schema.optional(Schema.String),
    time: Schema.optional(TimeOfDay),
    day: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceMaintenanceSchedule" });

export interface Redis_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Redis_Date: Schema.Schema<Redis_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Redis_Date" });

export interface ResourceMaintenanceDenySchedule {
  /** Optional. Time in UTC when the deny period starts on start_date and ends on end_date. */
  time?: TimeOfDay;
  /** Optional. The start date of the deny maintenance period. */
  startDate?: Redis_Date;
  /** Optional. Deny period end date. */
  endDate?: Redis_Date;
}

export const ResourceMaintenanceDenySchedule: Schema.Schema<ResourceMaintenanceDenySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    time: Schema.optional(TimeOfDay),
    startDate: Schema.optional(Redis_Date),
    endDate: Schema.optional(Redis_Date),
  }).annotate({ identifier: "ResourceMaintenanceDenySchedule" });

export interface ResourceMaintenanceInfo {
  /** Optional. Upcoming maintenance for the database resource. This field is populated once SLM generates and publishes upcoming maintenance window. */
  upcomingMaintenance?: UpcomingMaintenance;
  /** Optional. Maintenance window for the database resource. */
  maintenanceSchedule?: ResourceMaintenanceSchedule;
  /** Output only. Current state of maintenance on the database resource. */
  maintenanceState?:
    | "MAINTENANCE_STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "REPAIRING"
    | "DELETING"
    | "ERROR"
    | (string & {});
  /** Optional. List of Deny maintenance period for the database resource. */
  denyMaintenanceSchedules?: ReadonlyArray<ResourceMaintenanceDenySchedule>;
  /** Optional. The date when the current maintenance version was released. */
  currentVersionReleaseDate?: Redis_Date;
  /** Optional. Current Maintenance version of the database resource. Example: "MYSQL_8_0_41.R20250531.01_15" */
  maintenanceVersion?: string;
  /** Optional. Whether the instance is in stopped state. This information is temporarily being captured in maintenanceInfo, till STOPPED state is supported by DB Center. */
  isInstanceStopped?: boolean;
}

export const ResourceMaintenanceInfo: Schema.Schema<ResourceMaintenanceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upcomingMaintenance: Schema.optional(UpcomingMaintenance),
    maintenanceSchedule: Schema.optional(ResourceMaintenanceSchedule),
    maintenanceState: Schema.optional(Schema.String),
    denyMaintenanceSchedules: Schema.optional(
      Schema.Array(ResourceMaintenanceDenySchedule),
    ),
    currentVersionReleaseDate: Schema.optional(Redis_Date),
    maintenanceVersion: Schema.optional(Schema.String),
    isInstanceStopped: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ResourceMaintenanceInfo" });

export interface AvailabilityConfiguration {
  /** Checks for resources that are configured to have redundancy, and ongoing replication across regions */
  crossRegionReplicaConfigured?: boolean;
  externalReplicaConfigured?: boolean;
  /** Checks for existence of (multi-cluster) routing configuration that allows automatic failover to a different zone/region in case of an outage. Applicable to Bigtable resources. */
  automaticFailoverRoutingConfigured?: boolean;
  promotableReplicaConfigured?: boolean;
  /** Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available). */
  availabilityType?:
    | "AVAILABILITY_TYPE_UNSPECIFIED"
    | "ZONAL"
    | "REGIONAL"
    | "MULTI_REGIONAL"
    | "AVAILABILITY_TYPE_OTHER"
    | (string & {});
}

export const AvailabilityConfiguration: Schema.Schema<AvailabilityConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    crossRegionReplicaConfigured: Schema.optional(Schema.Boolean),
    externalReplicaConfigured: Schema.optional(Schema.Boolean),
    automaticFailoverRoutingConfigured: Schema.optional(Schema.Boolean),
    promotableReplicaConfigured: Schema.optional(Schema.Boolean),
    availabilityType: Schema.optional(Schema.String),
  }).annotate({ identifier: "AvailabilityConfiguration" });

export interface Entitlement {
  /** An enum that represents the type of this entitlement. */
  type?:
    | "ENTITLEMENT_TYPE_UNSPECIFIED"
    | "GEMINI"
    | "NATIVE"
    | "GCA_STANDARD"
    | (string & {});
  /** The current state of user's accessibility to a feature/benefit. */
  entitlementState?:
    | "ENTITLEMENT_STATE_UNSPECIFIED"
    | "ENTITLED"
    | "REVOKED"
    | (string & {});
}

export const Entitlement: Schema.Schema<Entitlement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    entitlementState: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entitlement" });

export interface InternalResourceMetadata {
  /** Whether deletion protection is enabled for this internal resource. */
  isDeletionProtectionEnabled?: boolean;
  resourceId?: DatabaseResourceId;
  /** Required. internal resource name for spanner this will be database name e.g."spanner.googleapis.com/projects/123/abc/instances/inst1/databases/db1" */
  resourceName?: string;
  product?: Product;
  /** Information about the last backup attempt for this database */
  backupRun?: BackupRun;
  /** Backup configuration for this database */
  backupConfiguration?: BackupConfiguration;
}

export const InternalResourceMetadata: Schema.Schema<InternalResourceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isDeletionProtectionEnabled: Schema.optional(Schema.Boolean),
    resourceId: Schema.optional(DatabaseResourceId),
    resourceName: Schema.optional(Schema.String),
    product: Schema.optional(Product),
    backupRun: Schema.optional(BackupRun),
    backupConfiguration: Schema.optional(BackupConfiguration),
  }).annotate({ identifier: "InternalResourceMetadata" });

export interface CustomMetadataData {
  /** Metadata for individual internal resources in an instance. e.g. spanner instance can have multiple databases with unique configuration. */
  internalResourceMetadata?: ReadonlyArray<InternalResourceMetadata>;
}

export const CustomMetadataData: Schema.Schema<CustomMetadataData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    internalResourceMetadata: Schema.optional(
      Schema.Array(InternalResourceMetadata),
    ),
  }).annotate({ identifier: "CustomMetadataData" });

export interface GCBDRConfiguration {
  /** Whether the resource is managed by GCBDR. */
  gcbdrManaged?: boolean;
}

export const GCBDRConfiguration: Schema.Schema<GCBDRConfiguration> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcbdrManaged: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GCBDRConfiguration" });

export interface UserLabels {
  labels?: Record<string, string>;
}

export const UserLabels: Schema.Schema<UserLabels> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "UserLabels" });

export interface Tags {
  /** The Tag key/value mappings. */
  tags?: Record<string, string>;
}

export const Tags: Schema.Schema<Tags> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Tags" });

export interface DatabaseResourceMetadata {
  /** The resource location. REQUIRED */
  location?: string;
  /** Machine configuration for this resource. */
  machineConfiguration?: MachineConfiguration;
  /** Optional. The modes of the database resource. */
  modes?: ReadonlyArray<
    | "MODE_UNSPECIFIED"
    | "MODE_NATIVE"
    | "MODE_MONGODB_COMPATIBLE"
    | "MODE_DATASTORE"
    | (string & {})
  >;
  /** The product this resource represents. */
  product?: Product;
  /** The time at which the resource was updated and recorded at partner service. */
  updationTime?: string;
  /** The resource zone. This is only applicable for zonal resources and will be empty for regional and multi-regional resources. */
  zone?: string;
  /** Optional. List of resource flags for the database resource. */
  resourceFlags?: ReadonlyArray<ResourceFlags>;
  /** Optional. Maintenance info for the resource. */
  maintenanceInfo?: ResourceMaintenanceInfo;
  /** Optional. Edition represents whether the instance is ENTERPRISE or ENTERPRISE_PLUS. This information is core to Cloud SQL only and is used to identify the edition of the instance. */
  edition?:
    | "EDITION_UNSPECIFIED"
    | "EDITION_ENTERPRISE"
    | "EDITION_ENTERPRISE_PLUS"
    | "EDITION_STANDARD"
    | (string & {});
  /** Backup configuration for this instance */
  backupConfiguration?: BackupConfiguration;
  /** Optional. Whether deletion protection is enabled for this resource. */
  isDeletionProtectionEnabled?: boolean;
  /** Availability configuration for this instance */
  availabilityConfiguration?: AvailabilityConfiguration;
  /** The state that the instance is expected to be in. For example, an instance state can transition to UNHEALTHY due to wrong patch update, while the expected state will remain at the HEALTHY. */
  expectedState?:
    | "STATE_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "SUSPENDED"
    | "DELETED"
    | "STATE_OTHER"
    | "STOPPED"
    | (string & {});
  /** Entitlements associated with the resource */
  entitlements?: ReadonlyArray<Entitlement>;
  /** Any custom metadata associated with the resource */
  customMetadata?: CustomMetadataData;
  /** GCBDR configuration for the resource. */
  gcbdrConfiguration?: GCBDRConfiguration;
  /** The creation time of the resource, i.e. the time when resource is created and recorded in partner service. */
  creationTime?: string;
  /** The type of the instance. Specified at creation time. */
  instanceType?:
    | "INSTANCE_TYPE_UNSPECIFIED"
    | "SUB_RESOURCE_TYPE_UNSPECIFIED"
    | "PRIMARY"
    | "SECONDARY"
    | "READ_REPLICA"
    | "OTHER"
    | "SUB_RESOURCE_TYPE_PRIMARY"
    | "SUB_RESOURCE_TYPE_SECONDARY"
    | "SUB_RESOURCE_TYPE_READ_REPLICA"
    | "SUB_RESOURCE_TYPE_EXTERNAL_PRIMARY"
    | "SUB_RESOURCE_TYPE_READ_POOL"
    | "SUB_RESOURCE_TYPE_RESERVATION"
    | "SUB_RESOURCE_TYPE_DATASET"
    | "SUB_RESOURCE_TYPE_OTHER"
    | (string & {});
  /** Required. Different from DatabaseResourceId.unique_id, a resource name can be reused over time. That is, after a resource named "ABC" is deleted, the name "ABC" can be used to to create a new resource within the same source. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
  resourceName?: string;
  /** Optional. Suspension reason for the resource. */
  suspensionReason?:
    | "SUSPENSION_REASON_UNSPECIFIED"
    | "WIPEOUT_HIDE_EVENT"
    | "WIPEOUT_PURGE_EVENT"
    | "BILLING_DISABLED"
    | "ABUSER_DETECTED"
    | "ENCRYPTION_KEY_INACCESSIBLE"
    | "REPLICATED_CLUSTER_ENCRYPTION_KEY_INACCESSIBLE"
    | (string & {});
  /** Closest parent Cloud Resource Manager container of this resource. It must be resource name of a Cloud Resource Manager project with the format of "/", such as "projects/123". For GCP provided resources, number should be project number. */
  resourceContainer?: string;
  /** Current state of the instance. */
  currentState?:
    | "STATE_UNSPECIFIED"
    | "HEALTHY"
    | "UNHEALTHY"
    | "SUSPENDED"
    | "DELETED"
    | "STATE_OTHER"
    | "STOPPED"
    | (string & {});
  /** User-provided labels associated with the resource */
  userLabelSet?: UserLabels;
  /** Primary resource location. REQUIRED if the immediate parent exists when first time resource is getting ingested, otherwise optional. */
  primaryResourceLocation?: string;
  /** Identifier for this resource's immediate parent/primary resource if the current resource is a replica or derived form of another Database resource. Else it would be NULL. REQUIRED if the immediate parent exists when first time resource is getting ingested, otherwise optional. */
  primaryResourceId?: DatabaseResourceId;
  /** Required. Unique identifier for a Database resource */
  id?: DatabaseResourceId;
  /** Latest backup run information for this instance */
  backupRun?: BackupRun;
  /** Optional. Tags associated with this resources. */
  tagsSet?: Tags;
  /** Optional. BackupDR Configuration for the resource. */
  backupdrConfiguration?: BackupDRConfiguration;
}

export const DatabaseResourceMetadata: Schema.Schema<DatabaseResourceMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    machineConfiguration: Schema.optional(MachineConfiguration),
    modes: Schema.optional(Schema.Array(Schema.String)),
    product: Schema.optional(Product),
    updationTime: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    resourceFlags: Schema.optional(Schema.Array(ResourceFlags)),
    maintenanceInfo: Schema.optional(ResourceMaintenanceInfo),
    edition: Schema.optional(Schema.String),
    backupConfiguration: Schema.optional(BackupConfiguration),
    isDeletionProtectionEnabled: Schema.optional(Schema.Boolean),
    availabilityConfiguration: Schema.optional(AvailabilityConfiguration),
    expectedState: Schema.optional(Schema.String),
    entitlements: Schema.optional(Schema.Array(Entitlement)),
    customMetadata: Schema.optional(CustomMetadataData),
    gcbdrConfiguration: Schema.optional(GCBDRConfiguration),
    creationTime: Schema.optional(Schema.String),
    instanceType: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    suspensionReason: Schema.optional(Schema.String),
    resourceContainer: Schema.optional(Schema.String),
    currentState: Schema.optional(Schema.String),
    userLabelSet: Schema.optional(UserLabels),
    primaryResourceLocation: Schema.optional(Schema.String),
    primaryResourceId: Schema.optional(DatabaseResourceId),
    id: Schema.optional(DatabaseResourceId),
    backupRun: Schema.optional(BackupRun),
    tagsSet: Schema.optional(Tags),
    backupdrConfiguration: Schema.optional(BackupDRConfiguration),
  }).annotate({ identifier: "DatabaseResourceMetadata" });

export interface TypedValue {
  /** For string value */
  stringValue?: string;
  /** For integer value */
  int64Value?: string;
  /** For boolean value */
  boolValue?: boolean;
  /** For double value */
  doubleValue?: number;
}

export const TypedValue: Schema.Schema<TypedValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stringValue: Schema.optional(Schema.String),
    int64Value: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    doubleValue: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TypedValue" });

export interface ObservabilityMetricData {
  /** Required. Type of metric like CPU, Memory, etc. */
  metricType?:
    | "METRIC_TYPE_UNSPECIFIED"
    | "CPU_UTILIZATION"
    | "MEMORY_UTILIZATION"
    | "NETWORK_CONNECTIONS"
    | "STORAGE_UTILIZATION"
    | "STORAGE_USED_BYTES"
    | "NODE_COUNT"
    | "MEMORY_USED_BYTES"
    | "PROCESSING_UNIT_COUNT"
    | (string & {});
  /** Required. The time the metric value was observed. */
  observationTime?: string;
  /** Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel */
  resourceName?: string;
  /** Required. Type of aggregation performed on the metric. */
  aggregationType?:
    | "AGGREGATION_TYPE_UNSPECIFIED"
    | "PEAK"
    | "P99"
    | "P95"
    | "CURRENT"
    | (string & {});
  /** Required. Value of the metric type. */
  value?: TypedValue;
}

export const ObservabilityMetricData: Schema.Schema<ObservabilityMetricData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metricType: Schema.optional(Schema.String),
    observationTime: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
    aggregationType: Schema.optional(Schema.String),
    value: Schema.optional(TypedValue),
  }).annotate({ identifier: "ObservabilityMetricData" });

export interface SignalMetadata {
  /** Signal data for backup runs. */
  backupRun?: BackupRun;
  /** Signal data for boolean signals. */
  signalBoolValue?: boolean;
}

export const SignalMetadata: Schema.Schema<SignalMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupRun: Schema.optional(BackupRun),
    signalBoolValue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SignalMetadata" });

export interface DatabaseResourceSignalData {
  /** Required. Signal type of the signal */
  signalType?:
    | "SIGNAL_TYPE_UNSPECIFIED"
    | "SIGNAL_TYPE_OUTDATED_MINOR_VERSION"
    | "SIGNAL_TYPE_DATABASE_AUDITING_DISABLED"
    | "SIGNAL_TYPE_NO_ROOT_PASSWORD"
    | "SIGNAL_TYPE_EXPOSED_TO_PUBLIC_ACCESS"
    | "SIGNAL_TYPE_UNENCRYPTED_CONNECTIONS"
    | "SIGNAL_TYPE_EXTENDED_SUPPORT"
    | "SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY"
    | "SIGNAL_TYPE_VERSION_NEARING_END_OF_LIFE"
    | "SIGNAL_TYPE_LAST_BACKUP_OLD"
    | "SIGNAL_TYPE_NOT_PROTECTED_BY_AUTOMATIC_FAILOVER"
    | (string & {});
  /** Database resource id. */
  resourceId?: DatabaseResourceId;
  /** Required. Resource location. */
  location?: string;
  /** Required. Full Resource name of the source resource. */
  fullResourceName?: string;
  /** Required. Last time signal was refreshed */
  lastRefreshTime?: string;
  /** This will support array of OneOf signal metadata information for a given signal type. */
  signalMetadataList?: ReadonlyArray<SignalMetadata>;
  /** Deprecated: Use signal_metadata_list instead. */
  signalBoolValue?: boolean;
  /** Required. Output only. Signal state of the signal */
  signalState?:
    | "SIGNAL_STATE_UNSPECIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | "DISMISSED"
    | (string & {});
  /** Deprecated: Use signal_metadata_list instead. */
  backupRun?: BackupRun;
}

export const DatabaseResourceSignalData: Schema.Schema<DatabaseResourceSignalData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signalType: Schema.optional(Schema.String),
    resourceId: Schema.optional(DatabaseResourceId),
    location: Schema.optional(Schema.String),
    fullResourceName: Schema.optional(Schema.String),
    lastRefreshTime: Schema.optional(Schema.String),
    signalMetadataList: Schema.optional(Schema.Array(SignalMetadata)),
    signalBoolValue: Schema.optional(Schema.Boolean),
    signalState: Schema.optional(Schema.String),
    backupRun: Schema.optional(BackupRun),
  }).annotate({ identifier: "DatabaseResourceSignalData" });

export interface DatabaseResourceFeed {
  /** Config based signal data is used to ingest signals that are generated based on the configuration of the database resource. */
  configBasedSignalData?: ConfigBasedSignalData;
  recommendationSignalData?: DatabaseResourceRecommendationSignalData;
  /** Required. Timestamp when feed is generated. */
  feedTimestamp?: string;
  /** Required. Type feed to be ingested into condor */
  feedType?:
    | "FEEDTYPE_UNSPECIFIED"
    | "RESOURCE_METADATA"
    | "OBSERVABILITY_DATA"
    | "SECURITY_FINDING_DATA"
    | "RECOMMENDATION_SIGNAL_DATA"
    | "CONFIG_BASED_SIGNAL_DATA"
    | "BACKUPDR_METADATA"
    | "DATABASE_RESOURCE_SIGNAL_DATA"
    | (string & {});
  /** Primary key associated with the Resource. resource_id is available in individual feed level as well. */
  resourceId?: DatabaseResourceId;
  resourceHealthSignalData?: DatabaseResourceHealthSignalData;
  resourceMetadata?: DatabaseResourceMetadata;
  observabilityMetricData?: ObservabilityMetricData;
  /** Database resource signal data is used to ingest signals from database resource signal feeds. */
  databaseResourceSignalData?: DatabaseResourceSignalData;
  /** BackupDR metadata is used to ingest metadata from BackupDR. */
  backupdrMetadata?: BackupDRMetadata;
  /** Optional. If true, the feed won't be ingested by DB Center. This indicates that the feed is intentionally skipped. For example, BackupDR feeds are only needed for resources integrated with DB Center (e.g., CloudSQL, AlloyDB). Feeds for non-integrated resources (e.g., Compute Engine, Persistent Disk) can be skipped. */
  skipIngestion?: boolean;
}

export const DatabaseResourceFeed: Schema.Schema<DatabaseResourceFeed> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configBasedSignalData: Schema.optional(ConfigBasedSignalData),
    recommendationSignalData: Schema.optional(
      DatabaseResourceRecommendationSignalData,
    ),
    feedTimestamp: Schema.optional(Schema.String),
    feedType: Schema.optional(Schema.String),
    resourceId: Schema.optional(DatabaseResourceId),
    resourceHealthSignalData: Schema.optional(DatabaseResourceHealthSignalData),
    resourceMetadata: Schema.optional(DatabaseResourceMetadata),
    observabilityMetricData: Schema.optional(ObservabilityMetricData),
    databaseResourceSignalData: Schema.optional(DatabaseResourceSignalData),
    backupdrMetadata: Schema.optional(BackupDRMetadata),
    skipIngestion: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DatabaseResourceFeed" });

export interface TokenAuthUser {
  /** Output only. The state of the token based auth user. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "UPDATING"
    | "DELETING"
    | (string & {});
  /** Identifier. The resource name of the token based auth user. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} */
  name?: string;
}

export const TokenAuthUser: Schema.Schema<TokenAuthUser> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "TokenAuthUser" });

export interface ManagedBackupSource {
  /** Optional. Example: //redis.googleapis.com/projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup} A shorter version (without the prefix) of the backup name is also supported, like projects/{project}/locations/{location}/backupCollections/{collection}/backups/{backup_id} In this case, it assumes the backup is under redis.googleapis.com. */
  backup?: string;
}

export const ManagedBackupSource: Schema.Schema<ManagedBackupSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backup: Schema.optional(Schema.String),
  }).annotate({ identifier: "ManagedBackupSource" });

export interface PscAutoConnection {
  /** Output only. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}. */
  forwardingRule?: string;
  /** Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. */
  network?: string;
  /** Required. The consumer project_id where the forwarding rule is created from. */
  projectId?: string;
  /** Output only. Type of the PSC connection. */
  connectionType?:
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "CONNECTION_TYPE_DISCOVERY"
    | "CONNECTION_TYPE_PRIMARY"
    | "CONNECTION_TYPE_READER"
    | (string & {});
  /** Output only. The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. */
  serviceAttachment?: string;
  /** Output only. The status of the PSC connection. Please note that this value is updated periodically. Please use Private Service Connect APIs for the latest status. */
  pscConnectionStatus?:
    | "PSC_CONNECTION_STATUS_UNSPECIFIED"
    | "PSC_CONNECTION_STATUS_ACTIVE"
    | "PSC_CONNECTION_STATUS_NOT_FOUND"
    | (string & {});
  /** Output only. The PSC connection id of the forwarding rule connected to the service attachment. */
  pscConnectionId?: string;
  /** Output only. The IP allocated on the consumer network for the PSC forwarding rule. */
  address?: string;
}

export const PscAutoConnection: Schema.Schema<PscAutoConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    forwardingRule: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    connectionType: Schema.optional(Schema.String),
    serviceAttachment: Schema.optional(Schema.String),
    pscConnectionStatus: Schema.optional(Schema.String),
    pscConnectionId: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscAutoConnection" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource ID for the region. For example: "us-east1". */
  locationId?: string;
  /** Full resource name for the region. For example: "projects/example-project/locations/us-east1". */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

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

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** { `createTime`: The time the operation was created. `endTime`: The time the operation finished running. `target`: Server-defined resource path for the target of the operation. `verb`: Name of the verb executed by the operation. `statusDetail`: Human-readable status of the operation, if any. `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. `apiVersion`: API version used to start the operation. } */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Operation" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface RegionalCertChain {
  /** The certificates that form the CA chain, from leaf to root order. */
  certificates?: ReadonlyArray<string>;
}

export const RegionalCertChain: Schema.Schema<RegionalCertChain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegionalCertChain" });

export interface PersistenceConfig {
  /** Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. */
  persistenceMode?:
    | "PERSISTENCE_MODE_UNSPECIFIED"
    | "DISABLED"
    | "RDB"
    | (string & {});
  /** Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default. */
  rdbSnapshotPeriod?:
    | "SNAPSHOT_PERIOD_UNSPECIFIED"
    | "ONE_HOUR"
    | "SIX_HOURS"
    | "TWELVE_HOURS"
    | "TWENTY_FOUR_HOURS"
    | (string & {});
  /** Output only. The next time that a snapshot attempt is scheduled to occur. */
  rdbNextSnapshotTime?: string;
  /** Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used. */
  rdbSnapshotStartTime?: string;
}

export const PersistenceConfig: Schema.Schema<PersistenceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persistenceMode: Schema.optional(Schema.String),
    rdbSnapshotPeriod: Schema.optional(Schema.String),
    rdbNextSnapshotTime: Schema.optional(Schema.String),
    rdbSnapshotStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PersistenceConfig" });

export interface NodeInfo {
  /** Output only. Node identifying string. e.g. 'node-0', 'node-1' */
  id?: string;
  /** Output only. Location of the node. */
  zone?: string;
}

export const NodeInfo: Schema.Schema<NodeInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
  }).annotate({ identifier: "NodeInfo" });

export interface MaintenanceSchedule {
  /** Output only. The start time of any upcoming scheduled maintenance for this instance. */
  startTime?: string;
  /** Output only. The end time of any upcoming scheduled maintenance for this instance. */
  endTime?: string;
  /** Output only. The deadline that the maintenance schedule start time can not go beyond, including reschedule. */
  scheduleDeadlineTime?: string;
  /** If the scheduled maintenance can be rescheduled, default is true. */
  canReschedule?: boolean;
}

export const MaintenanceSchedule: Schema.Schema<MaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    scheduleDeadlineTime: Schema.optional(Schema.String),
    canReschedule: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MaintenanceSchedule" });

export interface WeeklyMaintenanceWindow {
  /** Output only. Duration of the maintenance window. The current window is fixed at 1 hour. */
  duration?: string;
  /** Required. The day of week that maintenance updates occur. */
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
  /** Required. Start time of the window in UTC time. */
  startTime?: TimeOfDay;
}

export const WeeklyMaintenanceWindow: Schema.Schema<WeeklyMaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    day: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "WeeklyMaintenanceWindow" });

export interface MaintenancePolicy {
  /** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
  description?: string;
  /** Output only. The time when the policy was created. */
  createTime?: string;
  /** Output only. The time when the policy was last updated. */
  updateTime?: string;
  /** Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one. */
  weeklyMaintenanceWindow?: ReadonlyArray<WeeklyMaintenanceWindow>;
}

export const MaintenancePolicy: Schema.Schema<MaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    weeklyMaintenanceWindow: Schema.optional(
      Schema.Array(WeeklyMaintenanceWindow),
    ),
  }).annotate({ identifier: "MaintenancePolicy" });

export interface TlsCertificate {
  /** Serial number, as extracted from the certificate. */
  serialNumber?: string;
  /** PEM representation. */
  cert?: string;
  /** Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`. */
  createTime?: string;
  /** Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`. */
  expireTime?: string;
  /** Sha1 Fingerprint of the certificate. */
  sha1Fingerprint?: string;
}

export const TlsCertificate: Schema.Schema<TlsCertificate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serialNumber: Schema.optional(Schema.String),
    cert: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    sha1Fingerprint: Schema.optional(Schema.String),
  }).annotate({ identifier: "TlsCertificate" });

export interface Instance {
  /** Output only. The current state of this instance. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "UPDATING"
    | "DELETING"
    | "REPAIRING"
    | "MAINTENANCE"
    | "IMPORTING"
    | "FAILING_OVER"
    | (string & {});
  /** Optional. Persistence configuration parameters */
  persistenceConfig?: PersistenceConfig;
  /** Optional. For DIRECT_PEERING mode, the CIDR range of internal addresses that are reserved for this instance. Range must be unique and non-overlapping with existing subnets in an authorized network. For PRIVATE_SERVICE_ACCESS mode, the name of one allocated IP address ranges associated with this private service access connection. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. For READ_REPLICAS_ENABLED the default block size is /28. */
  reservedIpRange?: string;
  /** Optional. The KMS key reference that the customer provides when trying to create the instance. */
  customerManagedKey?: string;
  /** An arbitrary and optional user-provided name for the instance. */
  displayName?: string;
  /** Optional. Redis configuration parameters, according to [Redis configuration](https://redis.io/docs/latest/operate/oss_and_stack/management/config/). Currently, the only supported parameters are: Redis version 3.2 and newer: * maxmemory-policy * notify-keyspace-events Redis version 4.0 and newer: * activedefrag * lfu-decay-time * lfu-log-factor * maxmemory-gb Redis version 5.0 and newer: * stream-node-max-bytes * stream-node-max-entries */
  redisConfigs?: Record<string, string>;
  /** Optional. The version of Redis software. If not provided, latest supported version will be used. Currently, the supported values are: * `REDIS_3_2` for Redis 3.2 compatibility * `REDIS_4_0` for Redis 4.0 compatibility (default) * `REDIS_5_0` for Redis 5.0 compatibility * `REDIS_6_X` for Redis 6.x compatibility * `REDIS_7_0` for Redis 7.0 compatibility */
  redisVersion?: string;
  /** Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone from the specified region for the instance. For standard tier, additional nodes will be added across multiple zones for protection against zonal failures. If specified, at least one node will be provisioned in this zone. */
  locationId?: string;
  /** Resource labels to represent user provided metadata */
  labels?: Record<string, string>;
  /** Optional. Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Optional. Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Additional information about the current status of this instance, if available. */
  statusMessage?: string;
  /** Optional. The available maintenance versions that an instance could update to. */
  availableMaintenanceVersions?: ReadonlyArray<string>;
  /** Optional. Additional IP range for node placement. Required when enabling read replicas on an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address range associated with the private service access connection, or "auto". */
  secondaryIpRange?: string;
  /** Optional. Indicates whether OSS Redis AUTH is enabled for the instance. If set to "true" AUTH is enabled on the instance. Default value is "false" meaning AUTH is disabled. */
  authEnabled?: boolean;
  /** Optional. The network connect mode of the Redis instance. If not provided, the connect mode defaults to DIRECT_PEERING. */
  connectMode?:
    | "CONNECT_MODE_UNSPECIFIED"
    | "DIRECT_PEERING"
    | "PRIVATE_SERVICE_ACCESS"
    | (string & {});
  /** Optional. The TLS mode of the Redis instance. If not provided, TLS is disabled for the instance. */
  transitEncryptionMode?:
    | "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
    | "SERVER_AUTHENTICATION"
    | "DISABLED"
    | (string & {});
  /** Output only. Info per node. */
  nodes?: ReadonlyArray<NodeInfo>;
  /** Optional. The full name of the Google Compute Engine [network](https://cloud.google.com/vpc/docs/vpc) to which the instance is connected. If left unspecified, the `default` network will be used. */
  authorizedNetwork?: string;
  /** Output only. Hostname or IP address of the exposed readonly Redis endpoint. Standard tier only. Targets all healthy replica nodes in instance. Replication is asynchronous and replica nodes will exhibit some lag behind the primary. Write requests must target 'host'. */
  readEndpoint?: string;
  /** Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service. */
  host?: string;
  /** Output only. The port number of the exposed readonly redis endpoint. Standard tier only. Write requests should target 'port'. */
  readEndpointPort?: number;
  /** Optional. reasons that causes instance in "SUSPENDED" state. */
  suspensionReasons?: ReadonlyArray<
    | "SUSPENSION_REASON_UNSPECIFIED"
    | "CUSTOMER_MANAGED_KEY_ISSUE"
    | (string & {})
  >;
  /** Output only. Date and time of upcoming maintenance events which have been scheduled. */
  maintenanceSchedule?: MaintenanceSchedule;
  /** Optional. The maintenance policy for the instance. If not provided, maintenance events can be performed at any time. */
  maintenancePolicy?: MaintenancePolicy;
  /** Output only. List of server CA certificates for the instance. */
  serverCaCerts?: ReadonlyArray<TlsCertificate>;
  /** Output only. The time the instance was created. */
  createTime?: string;
  /** Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" */
  tags?: Record<string, string>;
  /** Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is "serviceAccount:". The value may change over time for a given instance so should be checked before each import/export operation. */
  persistenceIamIdentity?: string;
  /** Optional. The self service update maintenance version. The version is date based such as "20210712_00_00". */
  maintenanceVersion?: string;
  /** Output only. The port number of the exposed Redis endpoint. */
  port?: number;
  /** Output only. The current zone where the Redis primary node is located. In basic tier, this will always be the same as [location_id]. In standard tier, this can be the zone of any node in the instance. */
  currentLocationId?: string;
  /** Optional. Read replicas mode for the instance. Defaults to READ_REPLICAS_DISABLED. */
  readReplicasMode?:
    | "READ_REPLICAS_MODE_UNSPECIFIED"
    | "READ_REPLICAS_DISABLED"
    | "READ_REPLICAS_ENABLED"
    | (string & {});
  /** Optional. The number of replica nodes. The valid range for the Standard Tier with read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled for a Standard Tier instance, the only valid value is 1 and the default is 1. The valid value for basic tier is 0 and the default is also 0. */
  replicaCount?: number;
  /** Required. Redis memory size in GiB. */
  memorySizeGb?: number;
  /** Optional. If specified, at least one node will be provisioned in this zone in addition to the zone specified in location_id. Only applicable to standard tier. If provided, it must be a different zone from the one provided in [location_id]. Additional nodes beyond the first 2 will be placed in zones selected by the service. */
  alternativeLocationId?: string;
  /** Required. The service tier of the instance. */
  tier?: "TIER_UNSPECIFIED" | "BASIC" | "STANDARD_HA" | (string & {});
  /** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details. */
  name?: string;
}

export const Instance: Schema.Schema<Instance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    persistenceConfig: Schema.optional(PersistenceConfig),
    reservedIpRange: Schema.optional(Schema.String),
    customerManagedKey: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    redisConfigs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    redisVersion: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    statusMessage: Schema.optional(Schema.String),
    availableMaintenanceVersions: Schema.optional(Schema.Array(Schema.String)),
    secondaryIpRange: Schema.optional(Schema.String),
    authEnabled: Schema.optional(Schema.Boolean),
    connectMode: Schema.optional(Schema.String),
    transitEncryptionMode: Schema.optional(Schema.String),
    nodes: Schema.optional(Schema.Array(NodeInfo)),
    authorizedNetwork: Schema.optional(Schema.String),
    readEndpoint: Schema.optional(Schema.String),
    host: Schema.optional(Schema.String),
    readEndpointPort: Schema.optional(Schema.Number),
    suspensionReasons: Schema.optional(Schema.Array(Schema.String)),
    maintenanceSchedule: Schema.optional(MaintenanceSchedule),
    maintenancePolicy: Schema.optional(MaintenancePolicy),
    serverCaCerts: Schema.optional(Schema.Array(TlsCertificate)),
    createTime: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    persistenceIamIdentity: Schema.optional(Schema.String),
    maintenanceVersion: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    currentLocationId: Schema.optional(Schema.String),
    readReplicasMode: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.Number),
    memorySizeGb: Schema.optional(Schema.Number),
    alternativeLocationId: Schema.optional(Schema.String),
    tier: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Instance" });

export interface ListInstancesResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** A list of Redis instances in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/instances/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListInstances". */
  instances?: ReadonlyArray<Instance>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListInstancesResponse: Schema.Schema<ListInstancesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(Instance)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListInstancesResponse" });

export interface UpdateInfo {
  /** Target node type for redis cluster. */
  targetNodeType?:
    | "NODE_TYPE_UNSPECIFIED"
    | "REDIS_SHARED_CORE_NANO"
    | "REDIS_HIGHMEM_MEDIUM"
    | "REDIS_HIGHMEM_XLARGE"
    | "REDIS_STANDARD_SMALL"
    | "REDIS_HIGHCPU_MEDIUM"
    | "REDIS_STANDARD_LARGE"
    | "REDIS_HIGHMEM_2XLARGE"
    | (string & {});
  /** Target number of replica nodes per shard. */
  targetReplicaCount?: number;
  /** Target number of shards for redis cluster */
  targetShardCount?: number;
}

export const UpdateInfo: Schema.Schema<UpdateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetNodeType: Schema.optional(Schema.String),
    targetReplicaCount: Schema.optional(Schema.Number),
    targetShardCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "UpdateInfo" });

export interface GcsSource {
  /** Required. Source data URI. (e.g. 'gs://my_bucket/my_object'). */
  uri?: string;
}

export const GcsSource: Schema.Schema<GcsSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsSource" });

export interface InputConfig {
  /** Google Cloud Storage location where input content is located. */
  gcsSource?: GcsSource;
}

export const InputConfig: Schema.Schema<InputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsSource: Schema.optional(GcsSource),
  }).annotate({ identifier: "InputConfig" });

export interface UpgradeInstanceRequest {
  /** Required. Specifies the target version of Redis software to upgrade to. */
  redisVersion?: string;
}

export const UpgradeInstanceRequest: Schema.Schema<UpgradeInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redisVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeInstanceRequest" });

export interface AuthToken {
  /** Output only. State of the auth token. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "CREATING"
    | "DELETING"
    | (string & {});
  /** Identifier. Name of the auth token. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user}/authTokens/{auth_token} */
  name?: string;
  /** Output only. Create time of the auth token. */
  createTime?: string;
  /** Output only. The service generated authentication token used to connect to the Redis cluster. */
  token?: string;
}

export const AuthToken: Schema.Schema<AuthToken> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    token: Schema.optional(Schema.String),
  }).annotate({ identifier: "AuthToken" });

export interface PscConfig {
  /** Required. The network where the IP address of the discovery endpoint will be reserved, in the form of projects/{network_project}/global/networks/{network_id}. */
  network?: string;
}

export const PscConfig: Schema.Schema<PscConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscConfig" });

export interface DiscoveryEndpoint {
  /** Output only. The port number of the exposed Redis endpoint. */
  port?: number;
  /** Output only. Customer configuration for where the endpoint is created and accessed from. */
  pscConfig?: PscConfig;
  /** Output only. Address of the exposed Redis endpoint used by clients to connect to the service. The address could be either IP or hostname. */
  address?: string;
}

export const DiscoveryEndpoint: Schema.Schema<DiscoveryEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    port: Schema.optional(Schema.Number),
    pscConfig: Schema.optional(PscConfig),
    address: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveryEndpoint" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface GcsDestination {
  /** Required. Data destination URI (e.g. 'gs://my_bucket/my_object'). Existing files will be overwritten. */
  uri?: string;
}

export const GcsDestination: Schema.Schema<GcsDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsDestination" });

export interface OutputConfig {
  /** Google Cloud Storage destination for output content. */
  gcsDestination?: GcsDestination;
}

export const OutputConfig: Schema.Schema<OutputConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsDestination: Schema.optional(GcsDestination),
  }).annotate({ identifier: "OutputConfig" });

export interface ExportInstanceRequest {
  /** Required. Specify data to be exported. */
  outputConfig?: OutputConfig;
}

export const ExportInstanceRequest: Schema.Schema<ExportInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputConfig: Schema.optional(OutputConfig),
  }).annotate({ identifier: "ExportInstanceRequest" });

export interface GcsBackupSource {
  /** Optional. URIs of the Cloud Storage objects to import. Example: gs://bucket1/object1, gs://bucket2/folder2/object2 */
  uris?: ReadonlyArray<string>;
}

export const GcsBackupSource: Schema.Schema<GcsBackupSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uris: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GcsBackupSource" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface RemoteCluster {
  /** Output only. The full resource path of the remote cluster in the format: projects//locations//clusters/ */
  cluster?: string;
  /** Output only. The unique identifier of the remote cluster. */
  uid?: string;
}

export const RemoteCluster: Schema.Schema<RemoteCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoteCluster" });

export interface Membership {
  /** Output only. The primary cluster that acts as the source of replication for the secondary clusters. */
  primaryCluster?: RemoteCluster;
  /** Output only. The list of secondary clusters replicating from the primary cluster. */
  secondaryClusters?: ReadonlyArray<RemoteCluster>;
}

export const Membership: Schema.Schema<Membership> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryCluster: Schema.optional(RemoteCluster),
    secondaryClusters: Schema.optional(Schema.Array(RemoteCluster)),
  }).annotate({ identifier: "Membership" });

export interface CrossClusterReplicationConfig {
  /** List of secondary clusters that are replicating from this primary cluster. This field is only set for a primary cluster. */
  secondaryClusters?: ReadonlyArray<RemoteCluster>;
  /** Output only. The role of the cluster in cross cluster replication. */
  clusterRole?:
    | "CLUSTER_ROLE_UNSPECIFIED"
    | "NONE"
    | "PRIMARY"
    | "SECONDARY"
    | (string & {});
  /** Details of the primary cluster that is used as the replication source for this secondary cluster. This field is only set for a secondary cluster. */
  primaryCluster?: RemoteCluster;
  /** Output only. An output only view of all the member clusters participating in the cross cluster replication. This view will be provided by every member cluster irrespective of its cluster role(primary or secondary). A primary cluster can provide information about all the secondary clusters replicating from it. However, a secondary cluster only knows about the primary cluster from which it is replicating. However, for scenarios, where the primary cluster is unavailable(e.g. regional outage), a GetCluster request can be sent to any other member cluster and this field will list all the member clusters participating in cross cluster replication. */
  membership?: Membership;
  /** Output only. The last time cross cluster replication config was updated. */
  updateTime?: string;
}

export const CrossClusterReplicationConfig: Schema.Schema<CrossClusterReplicationConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secondaryClusters: Schema.optional(Schema.Array(RemoteCluster)),
    clusterRole: Schema.optional(Schema.String),
    primaryCluster: Schema.optional(RemoteCluster),
    membership: Schema.optional(Membership),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CrossClusterReplicationConfig" });

export interface ImportInstanceRequest {
  /** Required. Specify data to be imported. */
  inputConfig?: InputConfig;
}

export const ImportInstanceRequest: Schema.Schema<ImportInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputConfig: Schema.optional(InputConfig),
  }).annotate({ identifier: "ImportInstanceRequest" });

export interface AOFConfig {
  /** Optional. fsync configuration. */
  appendFsync?:
    | "APPEND_FSYNC_UNSPECIFIED"
    | "NO"
    | "EVERYSEC"
    | "ALWAYS"
    | (string & {});
}

export const AOFConfig: Schema.Schema<AOFConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appendFsync: Schema.optional(Schema.String),
  }).annotate({ identifier: "AOFConfig" });

export interface FixedFrequencySchedule {
  /** Required. The start time of every automated backup in UTC. It must be set to the start of an hour. This field is required. */
  startTime?: TimeOfDay;
}

export const FixedFrequencySchedule: Schema.Schema<FixedFrequencySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "FixedFrequencySchedule" });

export interface AutomatedBackupConfig {
  /** Optional. How long to keep automated backups before the backups are deleted. The value should be between 1 day and 365 days. If not specified, the default value is 35 days. */
  retention?: string;
  /** Optional. Trigger automated backups at a fixed frequency. */
  fixedFrequencySchedule?: FixedFrequencySchedule;
  /** Optional. The automated backup mode. If the mode is disabled, the other fields will be ignored. */
  automatedBackupMode?:
    | "AUTOMATED_BACKUP_MODE_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const AutomatedBackupConfig: Schema.Schema<AutomatedBackupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retention: Schema.optional(Schema.String),
    fixedFrequencySchedule: Schema.optional(FixedFrequencySchedule),
    automatedBackupMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutomatedBackupConfig" });

export interface StateInfo {
  /** Describes ongoing update on the cluster when cluster state is UPDATING. */
  updateInfo?: UpdateInfo;
}

export const StateInfo: Schema.Schema<StateInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateInfo: Schema.optional(UpdateInfo),
  }).annotate({ identifier: "StateInfo" });

export interface ClusterWeeklyMaintenanceWindow {
  /** Optional. Allows to define schedule that runs specified day of the week. */
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
  /** Optional. Start time of the window in UTC. */
  startTime?: TimeOfDay;
}

export const ClusterWeeklyMaintenanceWindow: Schema.Schema<ClusterWeeklyMaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.optional(Schema.String),
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "ClusterWeeklyMaintenanceWindow" });

export interface ClusterMaintenancePolicy {
  /** Output only. The time when the policy was updated i.e. Maintenance Window or Deny Period was updated. */
  updateTime?: string;
  /** Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_window is expected to be one. */
  weeklyMaintenanceWindow?: ReadonlyArray<ClusterWeeklyMaintenanceWindow>;
  /** Output only. The time when the policy was created i.e. Maintenance Window or Deny Period was assigned. */
  createTime?: string;
}

export const ClusterMaintenancePolicy: Schema.Schema<ClusterMaintenancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    weeklyMaintenanceWindow: Schema.optional(
      Schema.Array(ClusterWeeklyMaintenanceWindow),
    ),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterMaintenancePolicy" });

export interface ClusterMaintenanceSchedule {
  /** Output only. The start time of any upcoming scheduled maintenance for this instance. */
  startTime?: string;
  /** Output only. The end time of any upcoming scheduled maintenance for this instance. */
  endTime?: string;
}

export const ClusterMaintenanceSchedule: Schema.Schema<ClusterMaintenanceSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ClusterMaintenanceSchedule" });

export interface PscConnection {
  /** Required. The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. */
  network?: string;
  /** Optional. Project ID of the consumer project where the forwarding rule is created in. */
  projectId?: string;
  /** Required. The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. */
  serviceAttachment?: string;
  /** Output only. The status of the PSC connection. Please note that this value is updated periodically. To get the latest status of a PSC connection, follow https://cloud.google.com/vpc/docs/configure-private-service-connect-services#endpoint-details. */
  pscConnectionStatus?:
    | "PSC_CONNECTION_STATUS_UNSPECIFIED"
    | "PSC_CONNECTION_STATUS_ACTIVE"
    | "PSC_CONNECTION_STATUS_NOT_FOUND"
    | (string & {});
  /** Required. The IP allocated on the consumer network for the PSC forwarding rule. */
  address?: string;
  /** Required. The URI of the consumer side forwarding rule. Example: projects/{projectNumOrId}/regions/us-east1/forwardingRules/{resourceId}. */
  forwardingRule?: string;
  /** Output only. Type of the PSC connection. */
  connectionType?:
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "CONNECTION_TYPE_DISCOVERY"
    | "CONNECTION_TYPE_PRIMARY"
    | "CONNECTION_TYPE_READER"
    | (string & {});
  /** Output only. port will only be set for Primary/Reader or Discovery endpoint. */
  port?: number;
  /** Required. The PSC connection id of the forwarding rule connected to the service attachment. */
  pscConnectionId?: string;
}

export const PscConnection: Schema.Schema<PscConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    serviceAttachment: Schema.optional(Schema.String),
    pscConnectionStatus: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    forwardingRule: Schema.optional(Schema.String),
    connectionType: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    pscConnectionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscConnection" });

export interface ConnectionDetail {
  /** Detailed information of a PSC connection that is created through service connectivity automation. */
  pscAutoConnection?: PscAutoConnection;
  /** Detailed information of a PSC connection that is created by the customer who owns the cluster. */
  pscConnection?: PscConnection;
}

export const ConnectionDetail: Schema.Schema<ConnectionDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pscAutoConnection: Schema.optional(PscAutoConnection),
    pscConnection: Schema.optional(PscConnection),
  }).annotate({ identifier: "ConnectionDetail" });

export interface ClusterEndpoint {
  /** Required. A group of PSC connections. They are created in the same VPC network, one for each service attachment in the cluster. */
  connections?: ReadonlyArray<ConnectionDetail>;
}

export const ClusterEndpoint: Schema.Schema<ClusterEndpoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(Schema.Array(ConnectionDetail)),
  }).annotate({ identifier: "ClusterEndpoint" });

export interface RDBConfig {
  /** Optional. Period between RDB snapshots. */
  rdbSnapshotPeriod?:
    | "SNAPSHOT_PERIOD_UNSPECIFIED"
    | "ONE_HOUR"
    | "SIX_HOURS"
    | "TWELVE_HOURS"
    | "TWENTY_FOUR_HOURS"
    | (string & {});
  /** Optional. The time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used. */
  rdbSnapshotStartTime?: string;
}

export const RDBConfig: Schema.Schema<RDBConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rdbSnapshotPeriod: Schema.optional(Schema.String),
    rdbSnapshotStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RDBConfig" });

export interface ClusterPersistenceConfig {
  /** Optional. The mode of persistence. */
  mode?:
    | "PERSISTENCE_MODE_UNSPECIFIED"
    | "DISABLED"
    | "RDB"
    | "AOF"
    | (string & {});
  /** Optional. AOF configuration. This field will be ignored if mode is not AOF. */
  aofConfig?: AOFConfig;
  /** Optional. RDB configuration. This field will be ignored if mode is not RDB. */
  rdbConfig?: RDBConfig;
}

export const ClusterPersistenceConfig: Schema.Schema<ClusterPersistenceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    aofConfig: Schema.optional(AOFConfig),
    rdbConfig: Schema.optional(RDBConfig),
  }).annotate({ identifier: "ClusterPersistenceConfig" });

export interface EncryptionInfo {
  /** Output only. The most recent time when the encryption info was updated. */
  lastUpdateTime?: string;
  /** Output only. Type of encryption. */
  encryptionType?:
    | "TYPE_UNSPECIFIED"
    | "GOOGLE_DEFAULT_ENCRYPTION"
    | "CUSTOMER_MANAGED_ENCRYPTION"
    | (string & {});
  /** Output only. The state of the primary version of the KMS key perceived by the system. This field is not populated in backups. */
  kmsKeyPrimaryState?:
    | "KMS_KEY_STATE_UNSPECIFIED"
    | "ENABLED"
    | "PERMISSION_DENIED"
    | "DISABLED"
    | "DESTROYED"
    | "DESTROY_SCHEDULED"
    | "EKM_KEY_UNREACHABLE_DETECTED"
    | "BILLING_DISABLED"
    | "UNKNOWN_FAILURE"
    | (string & {});
  /** Output only. KMS key versions that are being used to protect the data at-rest. */
  kmsKeyVersions?: ReadonlyArray<string>;
}

export const EncryptionInfo: Schema.Schema<EncryptionInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdateTime: Schema.optional(Schema.String),
    encryptionType: Schema.optional(Schema.String),
    kmsKeyPrimaryState: Schema.optional(Schema.String),
    kmsKeyVersions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EncryptionInfo" });

export interface PscServiceAttachment {
  /** Output only. Service attachment URI which your self-created PscConnection should use as target */
  serviceAttachment?: string;
  /** Output only. Type of a PSC connection targeting this service attachment. */
  connectionType?:
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "CONNECTION_TYPE_DISCOVERY"
    | "CONNECTION_TYPE_PRIMARY"
    | "CONNECTION_TYPE_READER"
    | (string & {});
}

export const PscServiceAttachment: Schema.Schema<PscServiceAttachment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceAttachment: Schema.optional(Schema.String),
    connectionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscServiceAttachment" });

export interface Cluster {
  /** Optional. Output only. The backup collection full resource name. Example: projects/{project}/locations/{location}/backupCollections/{collection} */
  backupCollection?: string;
  /** Optional. Server CA mode for the cluster. */
  serverCaMode?:
    | "SERVER_CA_MODE_UNSPECIFIED"
    | "SERVER_CA_MODE_GOOGLE_MANAGED_PER_INSTANCE_CA"
    | "SERVER_CA_MODE_GOOGLE_MANAGED_SHARED_CA"
    | "SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA"
    | (string & {});
  /** Optional. Input only. Rotate the server certificates. */
  rotateServerCertificate?: boolean;
  /** Optional. Customer-managed CA pool for the cluster. Only applicable for BYOCA i.e. if server_ca_mode is SERVER_CA_MODE_CUSTOMER_MANAGED_CAS_CA. Format: "projects/{project}/locations/{region}/caPools/{ca_pool}". */
  serverCaPool?: string;
  /** Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster. */
  authorizationMode?:
    | "AUTH_MODE_UNSPECIFIED"
    | "AUTH_MODE_IAM_AUTH"
    | "AUTH_MODE_DISABLED"
    | "AUTH_MODE_TOKEN_AUTH"
    | (string & {});
  /** Optional. Input only. Simulate a maintenance event. */
  simulateMaintenanceEvent?: boolean;
  /** Optional. Backups stored in Cloud Storage buckets. The Cloud Storage buckets need to be the same region as the clusters. Read permission is required to import from the provided Cloud Storage objects. */
  gcsSource?: GcsBackupSource;
  /** Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` */
  name?: string;
  /** Optional. The automated backup config for the cluster. */
  automatedBackupConfig?: AutomatedBackupConfig;
  /** Optional. This field can be used to trigger self service update to indicate the desired maintenance version. The input to this field can be determined by the available_maintenance_versions field. */
  maintenanceVersion?: string;
  /** Output only. Redis memory size in GB for the entire cluster rounded up to the next integer. */
  sizeGb?: number;
  /** Output only. System assigned, unique identifier for the cluster. */
  uid?: string;
  /** Optional. Number of shards for the Redis cluster. */
  shardCount?: number;
  /** Optional. The number of replica nodes per shard. */
  replicaCount?: number;
  /** Optional. If true, cluster endpoints that are created and registered by customers can be deleted asynchronously. That is, such a cluster endpoint can be de-registered before the forwarding rules in the cluster endpoint are deleted. */
  asyncClusterEndpointsDeletionEnabled?: boolean;
  /** Output only. Additional information about the current state of the cluster. */
  stateInfo?: StateInfo;
  /** Optional. Cross cluster replication config. */
  crossClusterReplicationConfig?: CrossClusterReplicationConfig;
  /** Optional. The ACL policy to be applied to the cluster. */
  aclPolicy?: string;
  /** Optional. Backups generated and managed by memorystore service. */
  managedBackupSource?: ManagedBackupSource;
  /** Output only. Precise value of redis memory size in GB for the entire cluster. */
  preciseSizeGb?: number;
  /** Optional. ClusterMaintenancePolicy determines when to allow or deny updates. */
  maintenancePolicy?: ClusterMaintenancePolicy;
  /** Optional. The type of a redis node in the cluster. NodeType determines the underlying machine-type of a redis node. */
  nodeType?:
    | "NODE_TYPE_UNSPECIFIED"
    | "REDIS_SHARED_CORE_NANO"
    | "REDIS_HIGHMEM_MEDIUM"
    | "REDIS_HIGHMEM_XLARGE"
    | "REDIS_STANDARD_SMALL"
    | "REDIS_HIGHCPU_MEDIUM"
    | "REDIS_STANDARD_LARGE"
    | "REDIS_HIGHMEM_2XLARGE"
    | (string & {});
  /** Optional. The delete operation will fail when the value is set to true. */
  deletionProtectionEnabled?: boolean;
  /** Output only. ClusterMaintenanceSchedule Output only Published maintenance schedule. */
  maintenanceSchedule?: ClusterMaintenanceSchedule;
  /** Optional. The KMS key used to encrypt the at-rest data of the cluster. */
  kmsKey?: string;
  /** Output only. The timestamp associated with the cluster creation request. */
  createTime?: string;
  /** Output only. This field represents the actual maintenance version of the cluster. */
  effectiveMaintenanceVersion?: string;
  /** Optional. A list of cluster endpoints. */
  clusterEndpoints?: ReadonlyArray<ClusterEndpoint>;
  /** Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | (string & {});
  /** Output only. The list of PSC connections that are auto-created through service connectivity automation. */
  pscConnections?: ReadonlyArray<PscConnection>;
  /** Optional. Persistence config (RDB, AOF) for the cluster. */
  persistenceConfig?: ClusterPersistenceConfig;
  /** Optional. Immutable. Deprecated, do not use. */
  allowFewerZonesDeployment?: boolean;
  /** Optional. Output only. Indicates whether the ACL rules applied to the cluster are in sync with the latest ACL policy rules. This field is only applicable if the ACL policy is set for the cluster. */
  aclPolicyInSync?: boolean;
  /** Optional. Input only. Ondemand maintenance for the cluster. This field can be used to trigger ondemand critical update on the cluster. */
  ondemandMaintenance?: boolean;
  /** Output only. Encryption information of the data at rest of the cluster. */
  encryptionInfo?: EncryptionInfo;
  /** Optional. Key/Value pairs of customer overrides for mutable Redis Configs */
  redisConfigs?: Record<string, string>;
  /** Output only. This field is used to determine the available maintenance versions for the self service update. */
  availableMaintenanceVersions?: ReadonlyArray<string>;
  /** Optional. This config will be used to determine how the customer wants us to distribute cluster resources within the region. */
  zoneDistributionConfig?: ZoneDistributionConfig;
  /** Output only. Service attachment details to configure Psc connections */
  pscServiceAttachments?: ReadonlyArray<PscServiceAttachment>;
  /** Optional. Labels to represent user-provided metadata. */
  labels?: Record<string, string>;
  /** Optional. Output only. Reserved for future use. */
  satisfiesPzs?: boolean;
  /** Optional. Output only. Reserved for future use. */
  satisfiesPzi?: boolean;
  /** Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported. */
  discoveryEndpoints?: ReadonlyArray<DiscoveryEndpoint>;
  /** Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster. */
  transitEncryptionMode?:
    | "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
    | "TRANSIT_ENCRYPTION_MODE_DISABLED"
    | "TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION"
    | (string & {});
  /** Optional. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported. */
  pscConfigs?: ReadonlyArray<PscConfig>;
}

export const Cluster: Schema.Schema<Cluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupCollection: Schema.optional(Schema.String),
    serverCaMode: Schema.optional(Schema.String),
    rotateServerCertificate: Schema.optional(Schema.Boolean),
    serverCaPool: Schema.optional(Schema.String),
    authorizationMode: Schema.optional(Schema.String),
    simulateMaintenanceEvent: Schema.optional(Schema.Boolean),
    gcsSource: Schema.optional(GcsBackupSource),
    name: Schema.optional(Schema.String),
    automatedBackupConfig: Schema.optional(AutomatedBackupConfig),
    maintenanceVersion: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.Number),
    uid: Schema.optional(Schema.String),
    shardCount: Schema.optional(Schema.Number),
    replicaCount: Schema.optional(Schema.Number),
    asyncClusterEndpointsDeletionEnabled: Schema.optional(Schema.Boolean),
    stateInfo: Schema.optional(StateInfo),
    crossClusterReplicationConfig: Schema.optional(
      CrossClusterReplicationConfig,
    ),
    aclPolicy: Schema.optional(Schema.String),
    managedBackupSource: Schema.optional(ManagedBackupSource),
    preciseSizeGb: Schema.optional(Schema.Number),
    maintenancePolicy: Schema.optional(ClusterMaintenancePolicy),
    nodeType: Schema.optional(Schema.String),
    deletionProtectionEnabled: Schema.optional(Schema.Boolean),
    maintenanceSchedule: Schema.optional(ClusterMaintenanceSchedule),
    kmsKey: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    effectiveMaintenanceVersion: Schema.optional(Schema.String),
    clusterEndpoints: Schema.optional(Schema.Array(ClusterEndpoint)),
    state: Schema.optional(Schema.String),
    pscConnections: Schema.optional(Schema.Array(PscConnection)),
    persistenceConfig: Schema.optional(ClusterPersistenceConfig),
    allowFewerZonesDeployment: Schema.optional(Schema.Boolean),
    aclPolicyInSync: Schema.optional(Schema.Boolean),
    ondemandMaintenance: Schema.optional(Schema.Boolean),
    encryptionInfo: Schema.optional(EncryptionInfo),
    redisConfigs: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    availableMaintenanceVersions: Schema.optional(Schema.Array(Schema.String)),
    zoneDistributionConfig: Schema.optional(ZoneDistributionConfig),
    pscServiceAttachments: Schema.optional(Schema.Array(PscServiceAttachment)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    satisfiesPzs: Schema.optional(Schema.Boolean),
    satisfiesPzi: Schema.optional(Schema.Boolean),
    discoveryEndpoints: Schema.optional(Schema.Array(DiscoveryEndpoint)),
    transitEncryptionMode: Schema.optional(Schema.String),
    pscConfigs: Schema.optional(Schema.Array(PscConfig)),
  }).annotate({ identifier: "Cluster" });

export interface ListClustersResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of Redis clusters in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/clusters/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListClusters". */
  clusters?: ReadonlyArray<Cluster>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListClustersResponse: Schema.Schema<ListClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    clusters: Schema.optional(Schema.Array(Cluster)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListClustersResponse" });

export interface BackupFile {
  /** Output only. e.g: .rdb */
  fileName?: string;
  /** Output only. Size of the backup file in bytes. */
  sizeBytes?: string;
  /** Output only. The time when the backup file was created. */
  createTime?: string;
}

export const BackupFile: Schema.Schema<BackupFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileName: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupFile" });

export interface Backup {
  /** Output only. Node type of the cluster. */
  nodeType?:
    | "NODE_TYPE_UNSPECIFIED"
    | "REDIS_SHARED_CORE_NANO"
    | "REDIS_HIGHMEM_MEDIUM"
    | "REDIS_HIGHMEM_XLARGE"
    | "REDIS_STANDARD_SMALL"
    | "REDIS_HIGHCPU_MEDIUM"
    | "REDIS_STANDARD_LARGE"
    | "REDIS_HIGHMEM_2XLARGE"
    | (string & {});
  /** Output only. Type of the backup. */
  backupType?:
    | "BACKUP_TYPE_UNSPECIFIED"
    | "ON_DEMAND"
    | "AUTOMATED"
    | (string & {});
  /** Identifier. Full resource path of the backup. the last part of the name is the backup id with the following format: [YYYYMMDDHHMMSS]_[Shorted Cluster UID] OR customer specified while backup cluster. Example: 20240515123000_1234 */
  name?: string;
  /** Output only. The time when the backup was created. */
  createTime?: string;
  /** Output only. The time when the backup will expire. */
  expireTime?: string;
  /** Output only. redis-7.2, valkey-7.5 */
  engineVersion?: string;
  /** Output only. Cluster uid of this backup. */
  clusterUid?: string;
  /** Output only. Cluster resource path of this backup. */
  cluster?: string;
  /** Output only. Total size of the backup in bytes. */
  totalSizeBytes?: string;
  /** Output only. Number of shards for the cluster. */
  shardCount?: number;
  /** Output only. System assigned unique identifier of the backup. */
  uid?: string;
  /** Output only. Number of replicas for the cluster. */
  replicaCount?: number;
  /** Output only. State of the backup. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "SUSPENDED"
    | (string & {});
  /** Output only. List of backup files of the backup. */
  backupFiles?: ReadonlyArray<BackupFile>;
  /** Output only. Encryption information of the backup. */
  encryptionInfo?: EncryptionInfo;
}

export const Backup: Schema.Schema<Backup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeType: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    engineVersion: Schema.optional(Schema.String),
    clusterUid: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    totalSizeBytes: Schema.optional(Schema.String),
    shardCount: Schema.optional(Schema.Number),
    uid: Schema.optional(Schema.String),
    replicaCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    backupFiles: Schema.optional(Schema.Array(BackupFile)),
    encryptionInfo: Schema.optional(EncryptionInfo),
  }).annotate({ identifier: "Backup" });

export interface ListTokenAuthUsersResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Unordered list. Token auth users that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of token auth users in the project. */
  tokenAuthUsers?: ReadonlyArray<TokenAuthUser>;
}

export const ListTokenAuthUsersResponse: Schema.Schema<ListTokenAuthUsersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    tokenAuthUsers: Schema.optional(Schema.Array(TokenAuthUser)),
  }).annotate({ identifier: "ListTokenAuthUsersResponse" });

export interface AddTokenAuthUserRequest {
  /** Required. The id of the token auth user to add. */
  tokenAuthUser?: string;
}

export const AddTokenAuthUserRequest: Schema.Schema<AddTokenAuthUserRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenAuthUser: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddTokenAuthUserRequest" });

export interface BackupCollection {
  /** Output only. The time when the backup collection was created. */
  createTime?: string;
  /** Identifier. Full resource path of the backup collection. */
  name?: string;
  /** Output only. The last time a backup was created in the backup collection. */
  lastBackupTime?: string;
  /** Output only. System assigned unique identifier of the backup collection. */
  uid?: string;
  /** Output only. The KMS key used to encrypt the backups under this backup collection. */
  kmsKey?: string;
  /** Output only. Total size of all backups in the backup collection. */
  totalBackupSizeBytes?: string;
  /** Output only. The full resource path of the cluster the backup collection belongs to. Example: projects/{project}/locations/{location}/clusters/{cluster} */
  cluster?: string;
  /** Output only. Total number of backups in the backup collection. */
  totalBackupCount?: string;
  /** Output only. The cluster uid of the backup collection. */
  clusterUid?: string;
}

export const BackupCollection: Schema.Schema<BackupCollection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    lastBackupTime: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
    totalBackupSizeBytes: Schema.optional(Schema.String),
    cluster: Schema.optional(Schema.String),
    totalBackupCount: Schema.optional(Schema.String),
    clusterUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupCollection" });

export interface ListBackupCollectionsResponse {
  /** A list of backupCollections in the project. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder backupCollection entry is included in the response with the `name` field set to a value of the form `projects/{project_id}/locations/{location_id}/backupCollections/`- and the `status` field set to ERROR and `status_message` field set to "location not available for ListBackupCollections". */
  backupCollections?: ReadonlyArray<BackupCollection>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackupCollectionsResponse: Schema.Schema<ListBackupCollectionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupCollections: Schema.optional(Schema.Array(BackupCollection)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackupCollectionsResponse" });

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

export interface AclRule {
  /** Required. Specifies the IAM user or service account to be added to the ACL policy. This username will be directly set on the Redis OSS. */
  username?: string;
  /** Required. The rule to be applied to the username. Ex: "on >password123 ~* +@all" The format of the rule is defined by Redis OSS: https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/ */
  rule?: string;
}

export const AclRule: Schema.Schema<AclRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.optional(Schema.String),
    rule: Schema.optional(Schema.String),
  }).annotate({ identifier: "AclRule" });

export interface CertChain {
  /** The certificates that form the CA chain, from leaf to root order. */
  certificates?: ReadonlyArray<string>;
}

export const CertChain: Schema.Schema<CertChain> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificates: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "CertChain" });

export interface ManagedCertificateAuthority {
  /** The PEM encoded CA certificate chains for redis managed server authentication */
  caCerts?: ReadonlyArray<CertChain>;
}

export const ManagedCertificateAuthority: Schema.Schema<ManagedCertificateAuthority> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(Schema.Array(CertChain)),
  }).annotate({ identifier: "ManagedCertificateAuthority" });

export interface AclPolicy {
  /** Output only. Etag for the ACL policy. */
  etag?: string;
  /** Identifier. Full resource path of the ACL policy. */
  name?: string;
  /** Required. The ACL rules within the ACL policy. */
  rules?: ReadonlyArray<AclRule>;
  /** Output only. The version of the ACL policy. Used in drift resolution. */
  version?: string;
  /** Output only. The state of the ACL policy. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | (string & {});
}

export const AclPolicy: Schema.Schema<AclPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    rules: Schema.optional(Schema.Array(AclRule)),
    version: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "AclPolicy" });

export interface ExportBackupRequest {
  /** Google Cloud Storage bucket, like "my-bucket". */
  gcsBucket?: string;
}

export const ExportBackupRequest: Schema.Schema<ExportBackupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcsBucket: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportBackupRequest" });

export interface CertificateAuthority {
  managedServerCa?: ManagedCertificateAuthority;
  /** Identifier. Unique name of the resource in this scope including project, location and cluster using the form: `projects/{project}/locations/{location}/clusters/{cluster}/certificateAuthority` */
  name?: string;
}

export const CertificateAuthority: Schema.Schema<CertificateAuthority> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedServerCa: Schema.optional(ManagedCertificateAuthority),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "CertificateAuthority" });

export interface ListBackupsResponse {
  /** A list of backups in the project. */
  backups?: ReadonlyArray<Backup>;
  /** Backups that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListBackupsResponse: Schema.Schema<ListBackupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backups: Schema.optional(Schema.Array(Backup)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListBackupsResponse" });

export interface BackupClusterRequest {
  /** Optional. The id of the backup to be created. If not specified, the default value ([YYYYMMDDHHMMSS]_[Shortened Cluster UID] is used. */
  backupId?: string;
  /** Optional. TTL for the backup to expire. Value range is 1 day to 100 years. If not specified, the default value is 100 years. */
  ttl?: string;
}

export const BackupClusterRequest: Schema.Schema<BackupClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupId: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupClusterRequest" });

export interface GoogleCloudRedisV1beta1ZoneMetadata {}

export const GoogleCloudRedisV1beta1ZoneMetadata: Schema.Schema<GoogleCloudRedisV1beta1ZoneMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleCloudRedisV1beta1ZoneMetadata",
  });

export interface GoogleCloudRedisV1beta1LocationMetadata {
  /** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
  availableZones?: Record<string, GoogleCloudRedisV1beta1ZoneMetadata>;
}

export const GoogleCloudRedisV1beta1LocationMetadata: Schema.Schema<GoogleCloudRedisV1beta1LocationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableZones: Schema.optional(
      Schema.Record(Schema.String, GoogleCloudRedisV1beta1ZoneMetadata),
    ),
  }).annotate({ identifier: "GoogleCloudRedisV1beta1LocationMetadata" });

export interface InstanceAuthString {
  /** AUTH string set on the instance. */
  authString?: string;
}

export const InstanceAuthString: Schema.Schema<InstanceAuthString> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authString: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstanceAuthString" });

export interface RegionalManagedCertificateAuthority {
  /** The PEM encoded CA certificate chains for redis managed server authentication */
  caCerts?: ReadonlyArray<RegionalCertChain>;
}

export const RegionalManagedCertificateAuthority: Schema.Schema<RegionalManagedCertificateAuthority> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(Schema.Array(RegionalCertChain)),
  }).annotate({ identifier: "RegionalManagedCertificateAuthority" });

export interface SharedRegionalCertificateAuthority {
  /** CA certificate chains for redis managed server authentication. */
  managedServerCa?: RegionalManagedCertificateAuthority;
  /** Identifier. Unique name of the resource in this scope including project and location using the form: `projects/{project}/locations/{location}/sharedRegionalCertificateAuthority` */
  name?: string;
}

export const SharedRegionalCertificateAuthority: Schema.Schema<SharedRegionalCertificateAuthority> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedServerCa: Schema.optional(RegionalManagedCertificateAuthority),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SharedRegionalCertificateAuthority" });

export interface ListAuthTokensResponse {
  /** A list of auth tokens in the project. */
  authTokens?: ReadonlyArray<AuthToken>;
  /** Unordered list. Auth tokens that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
}

export const ListAuthTokensResponse: Schema.Schema<ListAuthTokensResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authTokens: Schema.optional(Schema.Array(AuthToken)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAuthTokensResponse" });

export interface RescheduleClusterMaintenanceRequest {
  /** Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. */
  rescheduleType?:
    | "RESCHEDULE_TYPE_UNSPECIFIED"
    | "IMMEDIATE"
    | "SPECIFIC_TIME"
    | (string & {});
  /** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`. */
  scheduleTime?: string;
}

export const RescheduleClusterMaintenanceRequest: Schema.Schema<RescheduleClusterMaintenanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rescheduleType: Schema.optional(Schema.String),
    scheduleTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RescheduleClusterMaintenanceRequest" });

export interface AddAuthTokenRequest {
  /** Required. The auth token to add. */
  authToken?: AuthToken;
}

export const AddAuthTokenRequest: Schema.Schema<AddAuthTokenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authToken: Schema.optional(AuthToken),
  }).annotate({ identifier: "AddAuthTokenRequest" });

export interface RescheduleMaintenanceRequest {
  /** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for example `2012-11-15T16:19:00.094Z`. */
  scheduleTime?: string;
  /** Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well. */
  rescheduleType?:
    | "RESCHEDULE_TYPE_UNSPECIFIED"
    | "IMMEDIATE"
    | "NEXT_AVAILABLE_WINDOW"
    | "SPECIFIC_TIME"
    | (string & {});
}

export const RescheduleMaintenanceRequest: Schema.Schema<RescheduleMaintenanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduleTime: Schema.optional(Schema.String),
    rescheduleType: Schema.optional(Schema.String),
  }).annotate({ identifier: "RescheduleMaintenanceRequest" });

export interface ListAclPoliciesResponse {
  /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of ACL policies in the project in the specified location, or across all locations. If the `location_id` in the parent field of the request is "-", all regions available to the project are queried, and the results aggregated. */
  aclPolicies?: ReadonlyArray<AclPolicy>;
}

export const ListAclPoliciesResponse: Schema.Schema<ListAclPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    aclPolicies: Schema.optional(Schema.Array(AclPolicy)),
  }).annotate({ identifier: "ListAclPoliciesResponse" });

export interface FailoverInstanceRequest {
  /** Optional. Available data protection modes that the user can choose. If it's unspecified, data protection mode will be LIMITED_DATA_LOSS by default. */
  dataProtectionMode?:
    | "DATA_PROTECTION_MODE_UNSPECIFIED"
    | "LIMITED_DATA_LOSS"
    | "FORCE_DATA_LOSS"
    | (string & {});
}

export const FailoverInstanceRequest: Schema.Schema<FailoverInstanceRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataProtectionMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "FailoverInstanceRequest" });

export interface GoogleCloudCommonOperationMetadata {
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const GoogleCloudCommonOperationMetadata: Schema.Schema<GoogleCloudCommonOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancelRequested: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    statusDetail: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
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

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface GetSharedRegionalCertificateAuthorityProjectsLocationsRequest {
  /** Required. Regional certificate authority resource name using the form: `projects/{project_id}/locations/{location_id}/sharedRegionalCertificateAuthority` where `location_id` refers to a Google Cloud region. */
  name: string;
}

export const GetSharedRegionalCertificateAuthorityProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSharedRegionalCertificateAuthorityProjectsLocationsRequest>;

export type GetSharedRegionalCertificateAuthorityProjectsLocationsResponse =
  SharedRegionalCertificateAuthority;
export const GetSharedRegionalCertificateAuthorityProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SharedRegionalCertificateAuthority;

export type GetSharedRegionalCertificateAuthorityProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of regional certificate authority information for Redis cluster. */
export const getSharedRegionalCertificateAuthorityProjectsLocations: API.OperationMethod<
  GetSharedRegionalCertificateAuthorityProjectsLocationsRequest,
  GetSharedRegionalCertificateAuthorityProjectsLocationsResponse,
  GetSharedRegionalCertificateAuthorityProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSharedRegionalCertificateAuthorityProjectsLocationsRequest,
  output: GetSharedRegionalCertificateAuthorityProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/locations" }),
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

export interface GetProjectsLocationsClustersRequest {
  /** Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. */
  name: string;
}

export const GetProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersRequest>;

export type GetProjectsLocationsClustersResponse = Cluster;
export const GetProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Cluster;

export type GetProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific Redis cluster. */
export const getProjectsLocationsClusters: API.OperationMethod<
  GetProjectsLocationsClustersRequest,
  GetProjectsLocationsClustersResponse,
  GetProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersRequest,
  output: GetProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsClustersRequest {
  /** Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. */
  parent: string;
  /** The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. */
  pageSize?: number;
  /** The `next_page_token` value returned from a previous `ListClusters` request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/clusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersRequest>;

export type ListProjectsLocationsClustersResponse = ListClustersResponse;
export const ListProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListClustersResponse;

export type ListProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Redis clusters owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated. */
export const listProjectsLocationsClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersRequest,
  ListProjectsLocationsClustersResponse,
  ListProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersRequest,
  output: ListProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsClustersRequest {
  /** Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. */
  name: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
}

export const DeleteProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersRequest>;

export type DeleteProjectsLocationsClustersResponse = Operation;
export const DeleteProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific Redis cluster. Cluster stops serving and data is deleted. */
export const deleteProjectsLocationsClusters: API.OperationMethod<
  DeleteProjectsLocationsClustersRequest,
  DeleteProjectsLocationsClustersResponse,
  DeleteProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersRequest,
  output: DeleteProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsClustersRequest {
  /** Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Cluster: * `size_gb` * `replica_count` * `cluster_endpoints` */
  updateMask?: string;
  /** Required. Identifier. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` */
  name: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
  /** Request body */
  body?: Cluster;
}

export const PatchProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsClustersRequest>;

export type PatchProjectsLocationsClustersResponse = Operation;
export const PatchProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the metadata and configuration of a specific Redis cluster. Completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. */
export const patchProjectsLocationsClusters: API.OperationMethod<
  PatchProjectsLocationsClustersRequest,
  PatchProjectsLocationsClustersResponse,
  PatchProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsClustersRequest,
  output: PatchProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RescheduleClusterMaintenanceProjectsLocationsClustersRequest {
  /** Required. Redis Cluster instance resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. */
  name: string;
  /** Request body */
  body?: RescheduleClusterMaintenanceRequest;
}

export const RescheduleClusterMaintenanceProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RescheduleClusterMaintenanceRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:rescheduleClusterMaintenance",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RescheduleClusterMaintenanceProjectsLocationsClustersRequest>;

export type RescheduleClusterMaintenanceProjectsLocationsClustersResponse =
  Operation;
export const RescheduleClusterMaintenanceProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RescheduleClusterMaintenanceProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reschedules upcoming maintenance event. */
export const rescheduleClusterMaintenanceProjectsLocationsClusters: API.OperationMethod<
  RescheduleClusterMaintenanceProjectsLocationsClustersRequest,
  RescheduleClusterMaintenanceProjectsLocationsClustersResponse,
  RescheduleClusterMaintenanceProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RescheduleClusterMaintenanceProjectsLocationsClustersRequest,
  output: RescheduleClusterMaintenanceProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BackupProjectsLocationsClustersRequest {
  /** Required. Redis cluster resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}` where `location_id` refers to a Google Cloud region. */
  name: string;
  /** Request body */
  body?: BackupClusterRequest;
}

export const BackupProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(BackupClusterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:backup", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<BackupProjectsLocationsClustersRequest>;

export type BackupProjectsLocationsClustersResponse = Operation;
export const BackupProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type BackupProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Backup Redis Cluster. If this is the first time a backup is being created, a backup collection will be created at the backend, and this backup belongs to this collection. Both collection and backup will have a resource name. Backup will be executed for each shard. A replica (primary if nonHA) will be selected to perform the execution. Backup call will be rejected if there is an ongoing backup or update operation. Be aware that during preview, if the cluster's internal software version is too old, critical update will be performed before actual backup. Once the internal software version is updated to the minimum version required by the backup feature, subsequent backups will not require critical update. After preview, there will be no critical update needed for backup. */
export const backupProjectsLocationsClusters: API.OperationMethod<
  BackupProjectsLocationsClustersRequest,
  BackupProjectsLocationsClustersResponse,
  BackupProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BackupProjectsLocationsClustersRequest,
  output: BackupProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddTokenAuthUserProjectsLocationsClustersRequest {
  /** Required. The cluster resource that this token auth user will be added for. Format: projects/{project}/locations/{location}/clusters/{cluster} */
  cluster: string;
  /** Request body */
  body?: AddTokenAuthUserRequest;
}

export const AddTokenAuthUserProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cluster: Schema.String.pipe(T.HttpPath("cluster")),
    body: Schema.optional(AddTokenAuthUserRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+cluster}:addTokenAuthUser",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddTokenAuthUserProjectsLocationsClustersRequest>;

export type AddTokenAuthUserProjectsLocationsClustersResponse = Operation;
export const AddTokenAuthUserProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddTokenAuthUserProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a token auth user for a token based auth enabled cluster. */
export const addTokenAuthUserProjectsLocationsClusters: API.OperationMethod<
  AddTokenAuthUserProjectsLocationsClustersRequest,
  AddTokenAuthUserProjectsLocationsClustersResponse,
  AddTokenAuthUserProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddTokenAuthUserProjectsLocationsClustersRequest,
  output: AddTokenAuthUserProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsClustersRequest {
  /** Required. The logical name of the Redis cluster in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the customer project / location */
  clusterId?: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
  /** Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. */
  parent: string;
  /** Request body */
  body?: Cluster;
}

export const CreateProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.optional(Schema.String).pipe(T.HttpQuery("clusterId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Cluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/clusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsClustersRequest>;

export type CreateProjectsLocationsClustersResponse = Operation;
export const CreateProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Redis cluster based on the specified properties. The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis cluster will be fully functional. The completed longrunning.Operation will contain the new cluster object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. */
export const createProjectsLocationsClusters: API.OperationMethod<
  CreateProjectsLocationsClustersRequest,
  CreateProjectsLocationsClustersResponse,
  CreateProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsClustersRequest,
  output: CreateProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCertificateAuthorityProjectsLocationsClustersRequest {
  /** Required. Redis cluster certificate authority resource name using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}/certificateAuthority` where `location_id` refers to a Google Cloud region. */
  name: string;
}

export const GetCertificateAuthorityProjectsLocationsClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetCertificateAuthorityProjectsLocationsClustersRequest>;

export type GetCertificateAuthorityProjectsLocationsClustersResponse =
  CertificateAuthority;
export const GetCertificateAuthorityProjectsLocationsClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ CertificateAuthority;

export type GetCertificateAuthorityProjectsLocationsClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of certificate authority information for Redis cluster. */
export const getCertificateAuthorityProjectsLocationsClusters: API.OperationMethod<
  GetCertificateAuthorityProjectsLocationsClustersRequest,
  GetCertificateAuthorityProjectsLocationsClustersResponse,
  GetCertificateAuthorityProjectsLocationsClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCertificateAuthorityProjectsLocationsClustersRequest,
  output: GetCertificateAuthorityProjectsLocationsClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsClustersTokenAuthUsersRequest {
  /** Required. The name of token auth user for a token based auth enabled cluster. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} */
  name: string;
}

export const GetProjectsLocationsClustersTokenAuthUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersTokenAuthUsersRequest>;

export type GetProjectsLocationsClustersTokenAuthUsersResponse = TokenAuthUser;
export const GetProjectsLocationsClustersTokenAuthUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ TokenAuthUser;

export type GetProjectsLocationsClustersTokenAuthUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific token auth user for a basic auth enabled cluster. */
export const getProjectsLocationsClustersTokenAuthUsers: API.OperationMethod<
  GetProjectsLocationsClustersTokenAuthUsersRequest,
  GetProjectsLocationsClustersTokenAuthUsersResponse,
  GetProjectsLocationsClustersTokenAuthUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersTokenAuthUsersRequest,
  output: GetProjectsLocationsClustersTokenAuthUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsClustersTokenAuthUsersRequest {
  /** Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's The maximum value is 1000; values above 1000 will be coerced to 1000. `next_page_token` to determine if there are more clusters left to be queried. */
  pageSize?: number;
  /** Optional. Sort results by a defined order. */
  orderBy?: string;
  /** Required. The parent resource that this token based auth user will be listed for. Format: projects/{project}/locations/{location}/clusters/{cluster} */
  parent: string;
  /** Optional. Expression for filtering results. */
  filter?: string;
  /** Optional. The `next_page_token` value returned from a previous [ListTokenAuthUsers] request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsClustersTokenAuthUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/tokenAuthUsers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersTokenAuthUsersRequest>;

export type ListProjectsLocationsClustersTokenAuthUsersResponse =
  ListTokenAuthUsersResponse;
export const ListProjectsLocationsClustersTokenAuthUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTokenAuthUsersResponse;

export type ListProjectsLocationsClustersTokenAuthUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the token auth users for a token based auth enabled cluster. */
export const listProjectsLocationsClustersTokenAuthUsers: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersTokenAuthUsersRequest,
  ListProjectsLocationsClustersTokenAuthUsersResponse,
  ListProjectsLocationsClustersTokenAuthUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersTokenAuthUsersRequest,
  output: ListProjectsLocationsClustersTokenAuthUsersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsClustersTokenAuthUsersRequest {
  /** Required. The name of the token auth user to delete. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any child auth tokens of this user will also be deleted. Otherwise, the request will only work if the user has no auth tokens. */
  force?: boolean;
}

export const DeleteProjectsLocationsClustersTokenAuthUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersTokenAuthUsersRequest>;

export type DeleteProjectsLocationsClustersTokenAuthUsersResponse = Operation;
export const DeleteProjectsLocationsClustersTokenAuthUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClustersTokenAuthUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a token auth user for a token based auth enabled cluster. */
export const deleteProjectsLocationsClustersTokenAuthUsers: API.OperationMethod<
  DeleteProjectsLocationsClustersTokenAuthUsersRequest,
  DeleteProjectsLocationsClustersTokenAuthUsersResponse,
  DeleteProjectsLocationsClustersTokenAuthUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersTokenAuthUsersRequest,
  output: DeleteProjectsLocationsClustersTokenAuthUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddAuthTokenProjectsLocationsClustersTokenAuthUsersRequest {
  /** Required. The name of the token auth user resource that this auth token will be added for. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} */
  tokenAuthUser: string;
  /** Request body */
  body?: AddAuthTokenRequest;
}

export const AddAuthTokenProjectsLocationsClustersTokenAuthUsersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokenAuthUser: Schema.String.pipe(T.HttpPath("tokenAuthUser")),
    body: Schema.optional(AddAuthTokenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+tokenAuthUser}:addAuthToken",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddAuthTokenProjectsLocationsClustersTokenAuthUsersRequest>;

export type AddAuthTokenProjectsLocationsClustersTokenAuthUsersResponse =
  Operation;
export const AddAuthTokenProjectsLocationsClustersTokenAuthUsersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddAuthTokenProjectsLocationsClustersTokenAuthUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a auth token for a user of a token based auth enabled cluster. */
export const addAuthTokenProjectsLocationsClustersTokenAuthUsers: API.OperationMethod<
  AddAuthTokenProjectsLocationsClustersTokenAuthUsersRequest,
  AddAuthTokenProjectsLocationsClustersTokenAuthUsersResponse,
  AddAuthTokenProjectsLocationsClustersTokenAuthUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddAuthTokenProjectsLocationsClustersTokenAuthUsersRequest,
  output: AddAuthTokenProjectsLocationsClustersTokenAuthUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsClustersTokenAuthUsersAuthTokensRequest {
  /** Required. The name of auth token for a token based auth enabled cluster. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user}/authTokens/{auth_token} */
  name: string;
}

export const GetProjectsLocationsClustersTokenAuthUsersAuthTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsClustersTokenAuthUsersAuthTokensRequest>;

export type GetProjectsLocationsClustersTokenAuthUsersAuthTokensResponse =
  AuthToken;
export const GetProjectsLocationsClustersTokenAuthUsersAuthTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ AuthToken;

export type GetProjectsLocationsClustersTokenAuthUsersAuthTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a specific auth token for a specific token auth user. */
export const getProjectsLocationsClustersTokenAuthUsersAuthTokens: API.OperationMethod<
  GetProjectsLocationsClustersTokenAuthUsersAuthTokensRequest,
  GetProjectsLocationsClustersTokenAuthUsersAuthTokensResponse,
  GetProjectsLocationsClustersTokenAuthUsersAuthTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsClustersTokenAuthUsersAuthTokensRequest,
  output: GetProjectsLocationsClustersTokenAuthUsersAuthTokensResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsClustersTokenAuthUsersAuthTokensRequest {
  /** Optional. Sort results by a defined order. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. The maximum value is 1000; values above 1000 will be coerced to 1000. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. */
  pageSize?: number;
  /** Optional. The `next_page_token` value returned from a previous [ListTokenAuthUsers] request, if any. */
  pageToken?: string;
  /** Required. The parent resource that this auth token will be listed for. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user} */
  parent: string;
  /** Optional. Expression for filtering results. */
  filter?: string;
}

export const ListProjectsLocationsClustersTokenAuthUsersAuthTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/authTokens" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsClustersTokenAuthUsersAuthTokensRequest>;

export type ListProjectsLocationsClustersTokenAuthUsersAuthTokensResponse =
  ListAuthTokensResponse;
export const ListProjectsLocationsClustersTokenAuthUsersAuthTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAuthTokensResponse;

export type ListProjectsLocationsClustersTokenAuthUsersAuthTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the auth tokens for a specific token auth user. */
export const listProjectsLocationsClustersTokenAuthUsersAuthTokens: API.PaginatedOperationMethod<
  ListProjectsLocationsClustersTokenAuthUsersAuthTokensRequest,
  ListProjectsLocationsClustersTokenAuthUsersAuthTokensResponse,
  ListProjectsLocationsClustersTokenAuthUsersAuthTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsClustersTokenAuthUsersAuthTokensRequest,
  output: ListProjectsLocationsClustersTokenAuthUsersAuthTokensResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensRequest {
  /** Required. The name of the token auth user resource that this auth token will be deleted from. Format: projects/{project}/locations/{location}/clusters/{cluster}/tokenAuthUsers/{token_auth_user}/authTokens/{auth_token} */
  name: string;
}

export const DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensRequest>;

export type DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensResponse =
  Operation;
export const DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes a auth token for a user of a token based auth enabled instance. */
export const deleteProjectsLocationsClustersTokenAuthUsersAuthTokens: API.OperationMethod<
  DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensRequest,
  DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensResponse,
  DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensRequest,
  output: DeleteProjectsLocationsClustersTokenAuthUsersAuthTokensResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:cancel", hasBody: true }),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/operations" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

export interface FailoverProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
  /** Request body */
  body?: FailoverInstanceRequest;
}

export const FailoverProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FailoverInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:failover", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<FailoverProjectsLocationsInstancesRequest>;

export type FailoverProjectsLocationsInstancesResponse = Operation;
export const FailoverProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FailoverProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance. */
export const failoverProjectsLocationsInstances: API.OperationMethod<
  FailoverProjectsLocationsInstancesRequest,
  FailoverProjectsLocationsInstancesResponse,
  FailoverProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FailoverProjectsLocationsInstancesRequest,
  output: FailoverProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
  /** Request body */
  body?: ImportInstanceRequest;
}

export const ImportProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ImportInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:import", hasBody: true }),
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

/** Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. */
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

export interface GetProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
}

export const GetProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsInstancesRequest>;

export type GetProjectsLocationsInstancesResponse = Instance;
export const GetProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Instance;

export type GetProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific Redis instance. */
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

export interface ListProjectsLocationsInstancesRequest {
  /** The `next_page_token` value returned from a previous ListInstances request, if any. */
  pageToken?: string;
  /** Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region. */
  parent: string;
  /** The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more instances left to be queried. */
  pageSize?: number;
}

export const ListProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/instances" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsInstancesRequest>;

export type ListProjectsLocationsInstancesResponse = ListInstancesResponse;
export const ListProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListInstancesResponse;

export type ListProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated. */
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
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
}

export const DeleteProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

/** Deletes a specific Redis instance. Instance stops serving and data is deleted. */
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

export interface GetAuthStringProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
}

export const GetAuthStringProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/authString" }),
    svc,
  ) as unknown as Schema.Schema<GetAuthStringProjectsLocationsInstancesRequest>;

export type GetAuthStringProjectsLocationsInstancesResponse =
  InstanceAuthString;
export const GetAuthStringProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstanceAuthString;

export type GetAuthStringProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance. */
export const getAuthStringProjectsLocationsInstances: API.OperationMethod<
  GetAuthStringProjectsLocationsInstancesRequest,
  GetAuthStringProjectsLocationsInstancesResponse,
  GetAuthStringProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAuthStringProjectsLocationsInstancesRequest,
  output: GetAuthStringProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsInstancesRequest {
  /** Required. The resource name of the instance location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region. */
  parent: string;
  /** Required. The logical name of the Redis instance in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location */
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
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/instances",
      hasBody: true,
    }),
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

/** Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. */
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

export interface ExportProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
  /** Request body */
  body?: ExportInstanceRequest;
}

export const ExportProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:export", hasBody: true }),
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

/** Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. */
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

export interface PatchProjectsLocationsInstancesRequest {
  /** Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance: * `displayName` * `labels` * `memorySizeGb` * `redisConfig` * `replica_count` */
  updateMask?: string;
  /** Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to location_id and alternative_location_id fields for more details. */
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
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

/** Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. */
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

export interface UpgradeProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
  name: string;
  /** Request body */
  body?: UpgradeInstanceRequest;
}

export const UpgradeProjectsLocationsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(UpgradeInstanceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:upgrade", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpgradeProjectsLocationsInstancesRequest>;

export type UpgradeProjectsLocationsInstancesResponse = Operation;
export const UpgradeProjectsLocationsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpgradeProjectsLocationsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Upgrades Redis instance to the newer Redis version specified in the request. */
export const upgradeProjectsLocationsInstances: API.OperationMethod<
  UpgradeProjectsLocationsInstancesRequest,
  UpgradeProjectsLocationsInstancesResponse,
  UpgradeProjectsLocationsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpgradeProjectsLocationsInstancesRequest,
  output: UpgradeProjectsLocationsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RescheduleMaintenanceProjectsLocationsInstancesRequest {
  /** Required. Redis instance resource name using the form: `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region. */
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
      path: "v1beta1/{+name}:rescheduleMaintenance",
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

/** Reschedule maintenance for a given instance in a given project and location. */
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

export interface CreateProjectsLocationsAclPoliciesRequest {
  /** Optional. Idempotent request UUID. . */
  requestId?: string;
  /** Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. */
  parent: string;
  /** Required. The logical name of the ACL Policy in the customer project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the customer project / location */
  aclPolicyId?: string;
  /** Request body */
  body?: AclPolicy;
}

export const CreateProjectsLocationsAclPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    aclPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("aclPolicyId"),
    ),
    body: Schema.optional(AclPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/aclPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAclPoliciesRequest>;

export type CreateProjectsLocationsAclPoliciesResponse = AclPolicy;
export const CreateProjectsLocationsAclPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AclPolicy;

export type CreateProjectsLocationsAclPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an ACL Policy. The creation is executed synchronously and the policy is available for use immediately after the RPC returns. */
export const createProjectsLocationsAclPolicies: API.OperationMethod<
  CreateProjectsLocationsAclPoliciesRequest,
  CreateProjectsLocationsAclPoliciesResponse,
  CreateProjectsLocationsAclPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAclPoliciesRequest,
  output: CreateProjectsLocationsAclPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAclPoliciesRequest {
  /** Required. Redis ACL Policy resource name using the form: `projects/{project_id}/locations/{location_id}/aclPolicies/{acl_policy_id}` where `location_id` refers to a GCP region. */
  name: string;
}

export const GetProjectsLocationsAclPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAclPoliciesRequest>;

export type GetProjectsLocationsAclPoliciesResponse = AclPolicy;
export const GetProjectsLocationsAclPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AclPolicy;

export type GetProjectsLocationsAclPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific Redis Cluster ACL Policy. */
export const getProjectsLocationsAclPolicies: API.OperationMethod<
  GetProjectsLocationsAclPoliciesRequest,
  GetProjectsLocationsAclPoliciesResponse,
  GetProjectsLocationsAclPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAclPoliciesRequest,
  output: GetProjectsLocationsAclPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsAclPoliciesRequest {
  /** Identifier. Full resource path of the ACL policy. */
  name: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
  /** Optional. Mask of fields to be updated. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from `AclPolicy`: * `rules` */
  updateMask?: string;
  /** Request body */
  body?: AclPolicy;
}

export const PatchProjectsLocationsAclPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(AclPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAclPoliciesRequest>;

export type PatchProjectsLocationsAclPoliciesResponse = Operation;
export const PatchProjectsLocationsAclPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAclPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the ACL policy. The operation applies the updated ACL policy to all of the linked clusters. If Memorystore can apply the policy to all clusters, then the operation returns a SUCCESS status. If Memorystore can't apply the policy to all clusters, then to ensure eventual consistency, Memorystore uses reconciliation to apply the policy to the failed clusters. Completed longrunning.Operation will contain the new ACL Policy object in the response field. */
export const patchProjectsLocationsAclPolicies: API.OperationMethod<
  PatchProjectsLocationsAclPoliciesRequest,
  PatchProjectsLocationsAclPoliciesResponse,
  PatchProjectsLocationsAclPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAclPoliciesRequest,
  output: PatchProjectsLocationsAclPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAclPoliciesRequest {
  /** Required. The resource name of the cluster location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. */
  parent: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more ACL policies left to be queried. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. The `next_page_token` value returned from a previous `ListAclPolicies` request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsAclPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/aclPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAclPoliciesRequest>;

export type ListProjectsLocationsAclPoliciesResponse = ListAclPoliciesResponse;
export const ListProjectsLocationsAclPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAclPoliciesResponse;

export type ListProjectsLocationsAclPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all ACL Policies owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated. */
export const listProjectsLocationsAclPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsAclPoliciesRequest,
  ListProjectsLocationsAclPoliciesResponse,
  ListProjectsLocationsAclPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAclPoliciesRequest,
  output: ListProjectsLocationsAclPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAclPoliciesRequest {
  /** Optional. Etag of the ACL policy. If this is different from the server's etag, the request will fail with an ABORTED error. */
  etag?: string;
  /** Required. Redis ACL Policy resource name using the form: `projects/{project_id}/locations/{location_id}/aclPolicies/{acl_policy_id}` where `location_id` refers to a GCP region. */
  name: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
}

export const DeleteProjectsLocationsAclPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAclPoliciesRequest>;

export type DeleteProjectsLocationsAclPoliciesResponse = Operation;
export const DeleteProjectsLocationsAclPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAclPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific Acl Policy. This action will delete the Acl Policy and all the rules associated with it. An ACL policy cannot be deleted if it is attached to a cluster. */
export const deleteProjectsLocationsAclPolicies: API.OperationMethod<
  DeleteProjectsLocationsAclPoliciesRequest,
  DeleteProjectsLocationsAclPoliciesResponse,
  DeleteProjectsLocationsAclPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAclPoliciesRequest,
  output: DeleteProjectsLocationsAclPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackupCollectionsRequest {
  /** Optional. The `next_page_token` value returned from a previous [ListBackupCollections] request, if any. */
  pageToken?: string;
  /** Required. The resource name of the backupCollection location using the form: `projects/{project_id}/locations/{location_id}` where `location_id` refers to a Google Cloud region. */
  parent: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. */
  pageSize?: number;
}

export const ListProjectsLocationsBackupCollectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/backupCollections" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupCollectionsRequest>;

export type ListProjectsLocationsBackupCollectionsResponse =
  ListBackupCollectionsResponse;
export const ListProjectsLocationsBackupCollectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupCollectionsResponse;

export type ListProjectsLocationsBackupCollectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all backup collections owned by a consumer project in either the specified location (region) or all locations. If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated. */
export const listProjectsLocationsBackupCollections: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupCollectionsRequest,
  ListProjectsLocationsBackupCollectionsResponse,
  ListProjectsLocationsBackupCollectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupCollectionsRequest,
  output: ListProjectsLocationsBackupCollectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsBackupCollectionsRequest {
  /** Required. Redis backupCollection resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}` where `location_id` refers to a Google Cloud region. */
  name: string;
}

export const GetProjectsLocationsBackupCollectionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupCollectionsRequest>;

export type GetProjectsLocationsBackupCollectionsResponse = BackupCollection;
export const GetProjectsLocationsBackupCollectionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackupCollection;

export type GetProjectsLocationsBackupCollectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a backup collection. */
export const getProjectsLocationsBackupCollections: API.OperationMethod<
  GetProjectsLocationsBackupCollectionsRequest,
  GetProjectsLocationsBackupCollectionsResponse,
  GetProjectsLocationsBackupCollectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupCollectionsRequest,
  output: GetProjectsLocationsBackupCollectionsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsBackupCollectionsBackupsRequest {
  /** Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` */
  name: string;
}

export const GetProjectsLocationsBackupCollectionsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupCollectionsBackupsRequest>;

export type GetProjectsLocationsBackupCollectionsBackupsResponse = Backup;
export const GetProjectsLocationsBackupCollectionsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Backup;

export type GetProjectsLocationsBackupCollectionsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a specific backup. */
export const getProjectsLocationsBackupCollectionsBackups: API.OperationMethod<
  GetProjectsLocationsBackupCollectionsBackupsRequest,
  GetProjectsLocationsBackupCollectionsBackupsResponse,
  GetProjectsLocationsBackupCollectionsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupCollectionsBackupsRequest,
  output: GetProjectsLocationsBackupCollectionsBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBackupCollectionsBackupsRequest {
  /** Required. The resource name of the backupCollection using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}` */
  parent: string;
  /** Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's `next_page_token` to determine if there are more clusters left to be queried. */
  pageSize?: number;
  /** Optional. The `next_page_token` value returned from a previous [ListBackupCollections] request, if any. */
  pageToken?: string;
}

export const ListProjectsLocationsBackupCollectionsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/backups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupCollectionsBackupsRequest>;

export type ListProjectsLocationsBackupCollectionsBackupsResponse =
  ListBackupsResponse;
export const ListProjectsLocationsBackupCollectionsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupsResponse;

export type ListProjectsLocationsBackupCollectionsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all backups owned by a backup collection. */
export const listProjectsLocationsBackupCollectionsBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsBackupCollectionsBackupsRequest,
  ListProjectsLocationsBackupCollectionsBackupsResponse,
  ListProjectsLocationsBackupCollectionsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackupCollectionsBackupsRequest,
  output: ListProjectsLocationsBackupCollectionsBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackupCollectionsBackupsRequest {
  /** Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` */
  name: string;
  /** Optional. Idempotent request UUID. */
  requestId?: string;
}

export const DeleteProjectsLocationsBackupCollectionsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupCollectionsBackupsRequest>;

export type DeleteProjectsLocationsBackupCollectionsBackupsResponse = Operation;
export const DeleteProjectsLocationsBackupCollectionsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsBackupCollectionsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a specific backup. */
export const deleteProjectsLocationsBackupCollectionsBackups: API.OperationMethod<
  DeleteProjectsLocationsBackupCollectionsBackupsRequest,
  DeleteProjectsLocationsBackupCollectionsBackupsResponse,
  DeleteProjectsLocationsBackupCollectionsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupCollectionsBackupsRequest,
  output: DeleteProjectsLocationsBackupCollectionsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsLocationsBackupCollectionsBackupsRequest {
  /** Required. Redis backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` */
  name: string;
  /** Request body */
  body?: ExportBackupRequest;
}

export const ExportProjectsLocationsBackupCollectionsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+name}:export", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ExportProjectsLocationsBackupCollectionsBackupsRequest>;

export type ExportProjectsLocationsBackupCollectionsBackupsResponse = Operation;
export const ExportProjectsLocationsBackupCollectionsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportProjectsLocationsBackupCollectionsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports a specific backup to a customer target Cloud Storage URI. */
export const exportProjectsLocationsBackupCollectionsBackups: API.OperationMethod<
  ExportProjectsLocationsBackupCollectionsBackupsRequest,
  ExportProjectsLocationsBackupCollectionsBackupsResponse,
  ExportProjectsLocationsBackupCollectionsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportProjectsLocationsBackupCollectionsBackupsRequest,
  output: ExportProjectsLocationsBackupCollectionsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
