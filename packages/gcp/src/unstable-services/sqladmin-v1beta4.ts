// ==========================================================================
// Cloud SQL Admin API (sqladmin v1beta4)
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
  name: "sqladmin",
  version: "v1beta4",
  rootUrl: "https://sqladmin.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface OperationError {
  /** This is always `sql#operationError`. */
  kind?: string;
  /** Identifies the specific error that occurred. */
  code?: string;
  /** Additional information about the error encountered. */
  message?: string;
}

export const OperationError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationError" });

export interface OperationErrors {
  /** This is always `sql#operationErrors`. */
  kind?: string;
  /** The list of errors encountered while processing this operation. */
  errors?: ReadonlyArray<OperationError>;
}

export const OperationErrors = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(OperationError)),
}).annotate({ identifier: "OperationErrors" });

export interface ApiWarning {
  /** Code to uniquely identify the warning type. */
  code?:
    | "SQL_API_WARNING_CODE_UNSPECIFIED"
    | "REGION_UNREACHABLE"
    | "MAX_RESULTS_EXCEEDS_LIMIT"
    | "COMPROMISED_CREDENTIALS"
    | "INTERNAL_STATE_FAILURE"
    | (string & {});
  /** The warning message. */
  message?: string;
  /** The region name for REGION_UNREACHABLE warning. */
  region?: string;
}

export const ApiWarning = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
}).annotate({ identifier: "ApiWarning" });

export interface ImportContext {
  /** Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file. */
  uri?: string;
  /** The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. For entire instance parallel import operations, the database is overridden by the database name stored in subdirectory name. If `fileType` is `CSV`, one database must be specified. */
  database?: string;
  /** This is always `sql#importContext`. */
  kind?: string;
  /** The file type for the specified uri. * `SQL`: The file contains SQL statements. * `CSV`: The file contains CSV data. * `BAK`: The file contains backup data for a SQL Server instance. */
  fileType?:
    | "SQL_FILE_TYPE_UNSPECIFIED"
    | "SQL"
    | "CSV"
    | "BAK"
    | "TDE"
    | (string & {});
  /** Options for importing data as CSV. */
  csvImportOptions?: {
    table?: string;
    columns?: ReadonlyArray<string>;
    escapeCharacter?: string;
    quoteCharacter?: string;
    fieldsTerminatedBy?: string;
    linesTerminatedBy?: string;
  };
  /** The PostgreSQL user for this import operation. PostgreSQL instances only. */
  importUser?: string;
  /** Import parameters specific to SQL Server .BAK files */
  bakImportOptions?: {
    encryptionOptions?: {
      certPath?: string;
      pvkPath?: string;
      pvkPassword?: string;
      keepEncrypted?: boolean;
    };
    striped?: boolean;
    noRecovery?: boolean;
    recoveryOnly?: boolean;
    bakType?: "BAK_TYPE_UNSPECIFIED" | "FULL" | "DIFF" | "TLOG" | (string & {});
    stopAt?: string;
    stopAtMark?: string;
  };
  /** Optional. Options for importing data from SQL statements. */
  sqlImportOptions?: {
    threads?: number;
    parallel?: boolean;
    postgresImportOptions?: { clean?: boolean; ifExists?: boolean };
  };
  /** Optional. Import parameters specific to SQL Server .TDE files Import parameters specific to SQL Server TDE certificates */
  tdeImportOptions?: {
    certificatePath?: string;
    privateKeyPath?: string;
    privateKeyPassword?: string;
    name?: string;
  };
}

export const ImportContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  database: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  fileType: Schema.optional(Schema.String),
  csvImportOptions: Schema.optional(
    Schema.Struct({
      table: Schema.optional(Schema.String),
      columns: Schema.optional(Schema.Array(Schema.String)),
      escapeCharacter: Schema.optional(Schema.String),
      quoteCharacter: Schema.optional(Schema.String),
      fieldsTerminatedBy: Schema.optional(Schema.String),
      linesTerminatedBy: Schema.optional(Schema.String),
    }),
  ),
  importUser: Schema.optional(Schema.String),
  bakImportOptions: Schema.optional(
    Schema.Struct({
      encryptionOptions: Schema.optional(
        Schema.Struct({
          certPath: Schema.optional(Schema.String),
          pvkPath: Schema.optional(Schema.String),
          pvkPassword: Schema.optional(Schema.String),
          keepEncrypted: Schema.optional(Schema.Boolean),
        }),
      ),
      striped: Schema.optional(Schema.Boolean),
      noRecovery: Schema.optional(Schema.Boolean),
      recoveryOnly: Schema.optional(Schema.Boolean),
      bakType: Schema.optional(Schema.String),
      stopAt: Schema.optional(Schema.String),
      stopAtMark: Schema.optional(Schema.String),
    }),
  ),
  sqlImportOptions: Schema.optional(
    Schema.Struct({
      threads: Schema.optional(Schema.Number),
      parallel: Schema.optional(Schema.Boolean),
      postgresImportOptions: Schema.optional(
        Schema.Struct({
          clean: Schema.optional(Schema.Boolean),
          ifExists: Schema.optional(Schema.Boolean),
        }),
      ),
    }),
  ),
  tdeImportOptions: Schema.optional(
    Schema.Struct({
      certificatePath: Schema.optional(Schema.String),
      privateKeyPath: Schema.optional(Schema.String),
      privateKeyPassword: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
  ),
}).annotate({ identifier: "ImportContext" });

export interface ExportContext {
  /** The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed. */
  uri?: string;
  /** Databases to be exported. `MySQL instances:` If `fileType` is `SQL` and no database is specified, all databases are exported, except for the `mysql` system database. If `fileType` is `CSV`, you can specify one database, either by using this property or by using the `csvExportOptions.selectQuery` property, which takes precedence over this property. `PostgreSQL instances:` If you don't specify a database by name, all user databases in the instance are exported. This excludes system databases and Cloud SQL databases used to manage internal operations. Exporting all user databases is only available for directory-formatted parallel export. If `fileType` is `CSV`, this database must match the one specified in the `csvExportOptions.selectQuery` property. `SQL Server instances:` You must specify one database to be exported, and the `fileType` must be `BAK`. */
  databases?: ReadonlyArray<string>;
  /** This is always `sql#exportContext`. */
  kind?: string;
  /** Options for exporting data as SQL statements. */
  sqlExportOptions?: {
    tables?: ReadonlyArray<string>;
    schemaOnly?: boolean;
    mysqlExportOptions?: { masterData?: number };
    threads?: number;
    parallel?: boolean;
    postgresExportOptions?: { clean?: boolean; ifExists?: boolean };
  };
  /** Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only. */
  csvExportOptions?: {
    selectQuery?: string;
    escapeCharacter?: string;
    quoteCharacter?: string;
    fieldsTerminatedBy?: string;
    linesTerminatedBy?: string;
  };
  /** The file type for the specified uri. */
  fileType?:
    | "SQL_FILE_TYPE_UNSPECIFIED"
    | "SQL"
    | "CSV"
    | "BAK"
    | "TDE"
    | (string & {});
  /** Whether to perform a serverless export. */
  offload?: boolean;
  /** Options for exporting BAK files (SQL Server-only) */
  bakExportOptions?: {
    striped?: boolean;
    stripeCount?: number;
    bakType?: "BAK_TYPE_UNSPECIFIED" | "FULL" | "DIFF" | "TLOG" | (string & {});
    copyOnly?: boolean;
    differentialBase?: boolean;
    exportLogStartTime?: string;
    exportLogEndTime?: string;
  };
  /** Optional. Export parameters specific to SQL Server TDE certificates */
  tdeExportOptions?: {
    certificatePath?: string;
    privateKeyPath?: string;
    privateKeyPassword?: string;
    name?: string;
  };
}

export const ExportContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  databases: Schema.optional(Schema.Array(Schema.String)),
  kind: Schema.optional(Schema.String),
  sqlExportOptions: Schema.optional(
    Schema.Struct({
      tables: Schema.optional(Schema.Array(Schema.String)),
      schemaOnly: Schema.optional(Schema.Boolean),
      mysqlExportOptions: Schema.optional(
        Schema.Struct({ masterData: Schema.optional(Schema.Number) }),
      ),
      threads: Schema.optional(Schema.Number),
      parallel: Schema.optional(Schema.Boolean),
      postgresExportOptions: Schema.optional(
        Schema.Struct({
          clean: Schema.optional(Schema.Boolean),
          ifExists: Schema.optional(Schema.Boolean),
        }),
      ),
    }),
  ),
  csvExportOptions: Schema.optional(
    Schema.Struct({
      selectQuery: Schema.optional(Schema.String),
      escapeCharacter: Schema.optional(Schema.String),
      quoteCharacter: Schema.optional(Schema.String),
      fieldsTerminatedBy: Schema.optional(Schema.String),
      linesTerminatedBy: Schema.optional(Schema.String),
    }),
  ),
  fileType: Schema.optional(Schema.String),
  offload: Schema.optional(Schema.Boolean),
  bakExportOptions: Schema.optional(
    Schema.Struct({
      striped: Schema.optional(Schema.Boolean),
      stripeCount: Schema.optional(Schema.Number),
      bakType: Schema.optional(Schema.String),
      copyOnly: Schema.optional(Schema.Boolean),
      differentialBase: Schema.optional(Schema.Boolean),
      exportLogStartTime: Schema.optional(Schema.String),
      exportLogEndTime: Schema.optional(Schema.String),
    }),
  ),
  tdeExportOptions: Schema.optional(
    Schema.Struct({
      certificatePath: Schema.optional(Schema.String),
      privateKeyPath: Schema.optional(Schema.String),
      privateKeyPassword: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }),
  ),
}).annotate({ identifier: "ExportContext" });

export interface BackupContext {
  /** The identifier of the backup. */
  backupId?: string;
  /** This is always `sql#backupContext`. */
  kind?: string;
  /** The name of the backup. Format: projects/{project}/backups/{backup} */
  name?: string;
}

export const BackupContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backupId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "BackupContext" });

export interface PreCheckResponse {
  /** The message to be displayed to the user. */
  message?: string;
  /** The type of message whether it is an info, warning, or error. */
  messageType?:
    | "MESSAGE_TYPE_UNSPECIFIED"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | (string & {});
  /** The actions that the user needs to take. Use repeated for multiple actions. */
  actionsRequired?: ReadonlyArray<string>;
}

export const PreCheckResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  messageType: Schema.optional(Schema.String),
  actionsRequired: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "PreCheckResponse" });

export interface PreCheckMajorVersionUpgradeContext {
  /** Required. The target database version to upgrade to. */
  targetDatabaseVersion?:
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_1"
    | "MYSQL_5_5"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_29"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_0_39"
    | "MYSQL_8_0_40"
    | "MYSQL_8_0_41"
    | "MYSQL_8_0_42"
    | "MYSQL_8_0_43"
    | "MYSQL_8_0_44"
    | "MYSQL_8_0_45"
    | "MYSQL_8_0_46"
    | "MYSQL_8_4"
    | "MYSQL_9_7"
    | "SQLSERVER_2017_STANDARD"
    | "SQLSERVER_2017_ENTERPRISE"
    | "SQLSERVER_2017_EXPRESS"
    | "SQLSERVER_2017_WEB"
    | "POSTGRES_9_6"
    | "POSTGRES_10"
    | "POSTGRES_11"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | "SQLSERVER_2019_STANDARD"
    | "SQLSERVER_2019_ENTERPRISE"
    | "SQLSERVER_2019_EXPRESS"
    | "SQLSERVER_2019_WEB"
    | "SQLSERVER_2022_STANDARD"
    | "SQLSERVER_2022_ENTERPRISE"
    | "SQLSERVER_2022_EXPRESS"
    | "SQLSERVER_2022_WEB"
    | "SQLSERVER_2025_STANDARD"
    | "SQLSERVER_2025_ENTERPRISE"
    | "SQLSERVER_2025_EXPRESS"
    | (string & {});
  /** Output only. The responses from the precheck operation. */
  preCheckResponse?: ReadonlyArray<PreCheckResponse>;
  /** Optional. This is always `sql#preCheckMajorVersionUpgradeContext`. */
  kind?: string;
}

export const PreCheckMajorVersionUpgradeContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetDatabaseVersion: Schema.optional(Schema.String),
    preCheckResponse: Schema.optional(Schema.Array(PreCheckResponse)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreCheckMajorVersionUpgradeContext" });

export interface AcquireSsrsLeaseContext {
  /** The username to be used as the setup login to connect to the database server for SSRS setup. */
  setupLogin?: string;
  /** The username to be used as the service login to connect to the report database for SSRS setup. */
  serviceLogin?: string;
  /** The report database to be used for the SSRS setup. */
  reportDatabase?: string;
  /** Lease duration needed for the SSRS setup. */
  duration?: string;
}

export const AcquireSsrsLeaseContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    setupLogin: Schema.optional(Schema.String),
    serviceLogin: Schema.optional(Schema.String),
    reportDatabase: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
  }).annotate({ identifier: "AcquireSsrsLeaseContext" });

export interface SqlSubOperationType {
  /** The type of maintenance to be performed on the instance. */
  maintenanceType?:
    | "SQL_MAINTENANCE_TYPE_UNSPECIFIED"
    | "INSTANCE_MAINTENANCE"
    | "REPLICA_INCLUDED_MAINTENANCE"
    | "INSTANCE_SELF_SERVICE_MAINTENANCE"
    | "REPLICA_INCLUDED_SELF_SERVICE_MAINTENANCE"
    | (string & {});
}

export const SqlSubOperationType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  maintenanceType: Schema.optional(Schema.String),
}).annotate({ identifier: "SqlSubOperationType" });

export interface Operation {
  /** This is always `sql#operation`. */
  kind?: string;
  targetLink?: string;
  /** The status of an operation. */
  status?:
    | "SQL_OPERATION_STATUS_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "DONE"
    | (string & {});
  /** The email address of the user who initiated this operation. */
  user?: string;
  /** The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  insertTime?: string;
  /** The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  startTime?: string;
  /** The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  endTime?: string;
  /** If errors occurred during processing of this operation, this field will be populated. */
  error?: OperationErrors;
  /** An Admin API warning message. */
  apiWarning?: ApiWarning;
  /** The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE` */
  operationType?:
    | "SQL_OPERATION_TYPE_UNSPECIFIED"
    | "IMPORT"
    | "EXPORT"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | "RESTART"
    | "BACKUP"
    | "SNAPSHOT"
    | "BACKUP_VOLUME"
    | "DELETE_VOLUME"
    | "RESTORE_VOLUME"
    | "INJECT_USER"
    | "CLONE"
    | "STOP_REPLICA"
    | "START_REPLICA"
    | "PROMOTE_REPLICA"
    | "CREATE_REPLICA"
    | "CREATE_USER"
    | "DELETE_USER"
    | "UPDATE_USER"
    | "CREATE_DATABASE"
    | "DELETE_DATABASE"
    | "UPDATE_DATABASE"
    | "FAILOVER"
    | "DELETE_BACKUP"
    | "RECREATE_REPLICA"
    | "TRUNCATE_LOG"
    | "DEMOTE_MASTER"
    | "MAINTENANCE"
    | "ENABLE_PRIVATE_IP"
    | "DEFER_MAINTENANCE"
    | "CREATE_CLONE"
    | "RESCHEDULE_MAINTENANCE"
    | "START_EXTERNAL_SYNC"
    | "LOG_CLEANUP"
    | "AUTO_RESTART"
    | "REENCRYPT"
    | "SWITCHOVER"
    | "UPDATE_BACKUP"
    | "ACQUIRE_SSRS_LEASE"
    | "RELEASE_SSRS_LEASE"
    | "RECONFIGURE_OLD_PRIMARY"
    | "CLUSTER_MAINTENANCE"
    | "SELF_SERVICE_MAINTENANCE"
    | "SWITCHOVER_TO_REPLICA"
    | "MAJOR_VERSION_UPGRADE"
    | "ADVANCED_BACKUP"
    | "MANAGE_BACKUP"
    | "ENHANCED_BACKUP"
    | "REPAIR_READ_POOL"
    | "CREATE_READ_POOL"
    | "PRE_CHECK_MAJOR_VERSION_UPGRADE"
    | (string & {});
  /** The context for import operation, if applicable. */
  importContext?: ImportContext;
  /** The context for export operation, if applicable. */
  exportContext?: ExportContext;
  /** The context for backup operation, if applicable. */
  backupContext?: BackupContext;
  /** The context for pre-check major version upgrade operation, if applicable. This field is only populated when the operation_type is PRE_CHECK_MAJOR_VERSION_UPGRADE. The PreCheckMajorVersionUpgradeContext message itself contains the details for that pre-check, such as the target database version for the upgrade and the results of the check (including any warnings or errors found). */
  preCheckMajorVersionUpgradeContext?: PreCheckMajorVersionUpgradeContext;
  /** An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation. */
  name?: string;
  /** Name of the resource on which this operation runs. */
  targetId?: string;
  /** The URI of this resource. */
  selfLink?: string;
  /** The project ID of the target instance related to this operation. */
  targetProject?: string;
  /** The context for acquire SSRS lease operation, if applicable. */
  acquireSsrsLeaseContext?: AcquireSsrsLeaseContext;
  /** Optional. The sub operation based on the operation type. */
  subOperationType?: SqlSubOperationType;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  targetLink: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  user: Schema.optional(Schema.String),
  insertTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  error: Schema.optional(OperationErrors),
  apiWarning: Schema.optional(ApiWarning),
  operationType: Schema.optional(Schema.String),
  importContext: Schema.optional(ImportContext),
  exportContext: Schema.optional(ExportContext),
  backupContext: Schema.optional(BackupContext),
  preCheckMajorVersionUpgradeContext: Schema.optional(
    PreCheckMajorVersionUpgradeContext,
  ),
  name: Schema.optional(Schema.String),
  targetId: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  targetProject: Schema.optional(Schema.String),
  acquireSsrsLeaseContext: Schema.optional(AcquireSsrsLeaseContext),
  subOperationType: Schema.optional(SqlSubOperationType),
}).annotate({ identifier: "Operation" });

export interface DiskEncryptionConfiguration {
  /** Resource name of KMS key for disk encryption */
  kmsKeyName?: string;
  /** This is always `sql#diskEncryptionConfiguration`. */
  kind?: string;
}

export const DiskEncryptionConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskEncryptionConfiguration" });

export interface DiskEncryptionStatus {
  /** KMS key version used to encrypt the Cloud SQL instance resource */
  kmsKeyVersionName?: string;
  /** This is always `sql#diskEncryptionStatus`. */
  kind?: string;
}

export const DiskEncryptionStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kmsKeyVersionName: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "DiskEncryptionStatus" });

export interface BackupRun {
  /** This is always `sql#backupRun`. */
  kind?: string;
  /** The status of this run. */
  status?:
    | "SQL_BACKUP_RUN_STATUS_UNSPECIFIED"
    | "ENQUEUED"
    | "OVERDUE"
    | "RUNNING"
    | "FAILED"
    | "SUCCESSFUL"
    | "SKIPPED"
    | "DELETION_PENDING"
    | "DELETION_FAILED"
    | "DELETED"
    | (string & {});
  /** The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  enqueuedTime?: string;
  /** The identifier for this backup run. Unique only for a specific Cloud SQL instance. */
  id?: string;
  /** The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  startTime?: string;
  /** The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  endTime?: string;
  /** Information about why the backup operation failed. This is only present if the run has the FAILED status. */
  error?: OperationError;
  /** The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests. */
  type?:
    | "SQL_BACKUP_RUN_TYPE_UNSPECIFIED"
    | "AUTOMATED"
    | "ON_DEMAND"
    | (string & {});
  /** The description of this run, only applicable to on-demand backups. */
  description?: string;
  /** The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  windowStartTime?: string;
  /** Name of the database instance. */
  instance?: string;
  /** The URI of this resource. */
  selfLink?: string;
  /** Location of the backups. */
  location?: string;
  /** Output only. The instance database version at the time this backup was made. */
  databaseVersion?:
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_1"
    | "MYSQL_5_5"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_29"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_0_39"
    | "MYSQL_8_0_40"
    | "MYSQL_8_0_41"
    | "MYSQL_8_0_42"
    | "MYSQL_8_0_43"
    | "MYSQL_8_0_44"
    | "MYSQL_8_0_45"
    | "MYSQL_8_0_46"
    | "MYSQL_8_4"
    | "MYSQL_9_7"
    | "SQLSERVER_2017_STANDARD"
    | "SQLSERVER_2017_ENTERPRISE"
    | "SQLSERVER_2017_EXPRESS"
    | "SQLSERVER_2017_WEB"
    | "POSTGRES_9_6"
    | "POSTGRES_10"
    | "POSTGRES_11"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | "SQLSERVER_2019_STANDARD"
    | "SQLSERVER_2019_ENTERPRISE"
    | "SQLSERVER_2019_EXPRESS"
    | "SQLSERVER_2019_WEB"
    | "SQLSERVER_2022_STANDARD"
    | "SQLSERVER_2022_ENTERPRISE"
    | "SQLSERVER_2022_EXPRESS"
    | "SQLSERVER_2022_WEB"
    | "SQLSERVER_2025_STANDARD"
    | "SQLSERVER_2025_ENTERPRISE"
    | "SQLSERVER_2025_EXPRESS"
    | (string & {});
  /** Encryption configuration specific to a backup. */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration;
  /** Encryption status specific to a backup. */
  diskEncryptionStatus?: DiskEncryptionStatus;
  /** Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT. */
  backupKind?:
    | "SQL_BACKUP_KIND_UNSPECIFIED"
    | "SNAPSHOT"
    | "PHYSICAL"
    | (string & {});
  /** Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server. */
  timeZone?: string;
  /** Output only. The maximum chargeable bytes for the backup. */
  maxChargeableBytes?: string;
}

export const BackupRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  enqueuedTime: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  error: Schema.optional(OperationError),
  type: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  windowStartTime: Schema.optional(Schema.String),
  instance: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  databaseVersion: Schema.optional(Schema.String),
  diskEncryptionConfiguration: Schema.optional(DiskEncryptionConfiguration),
  diskEncryptionStatus: Schema.optional(DiskEncryptionStatus),
  backupKind: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
  maxChargeableBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "BackupRun" });

export interface BackupRunsListResponse {
  /** This is always `sql#backupRunsList`. */
  kind?: string;
  /** A list of backup runs in reverse chronological order of the enqueued time. */
  items?: ReadonlyArray<BackupRun>;
  /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
  nextPageToken?: string;
}

export const BackupRunsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(BackupRun)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "BackupRunsListResponse" });

export interface SqlServerDatabaseDetails {
  /** The version of SQL Server with which the database is to be made compatible */
  compatibilityLevel?: number;
  /** The recovery model of a SQL Server database */
  recoveryModel?: string;
}

export const SqlServerDatabaseDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compatibilityLevel: Schema.optional(Schema.Number),
    recoveryModel: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerDatabaseDetails" });

export interface Database {
  /** This is always `sql#database`. */
  kind?: string;
  /** The Cloud SQL charset value. */
  charset?: string;
  /** The Cloud SQL collation value. */
  collation?: string;
  /** This field is deprecated and will be removed from a future version of the API. */
  etag?: string;
  /** The name of the database in the Cloud SQL instance. This does not include the project ID or instance name. */
  name?: string;
  /** The name of the Cloud SQL instance. This does not include the project ID. */
  instance?: string;
  /** The URI of this resource. */
  selfLink?: string;
  /** The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. */
  project?: string;
  sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
}

export const Database = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  charset: Schema.optional(Schema.String),
  collation: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  instance: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  project: Schema.optional(Schema.String),
  sqlserverDatabaseDetails: Schema.optional(SqlServerDatabaseDetails),
}).annotate({ identifier: "Database" });

export interface DatabasesListResponse {
  /** This is always `sql#databasesList`. */
  kind?: string;
  /** List of database resources in the instance. */
  items?: ReadonlyArray<Database>;
}

export const DatabasesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Database)),
}).annotate({ identifier: "DatabasesListResponse" });

export interface Flag {
  /** This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet` */
  name?: string;
  /** The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags which do not take a value, such as `skip_grant_tables`. */
  type?:
    | "SQL_FLAG_TYPE_UNSPECIFIED"
    | "BOOLEAN"
    | "STRING"
    | "INTEGER"
    | "NONE"
    | "MYSQL_TIMEZONE_OFFSET"
    | "FLOAT"
    | "REPEATED_STRING"
    | (string & {});
  /** The database version this flag applies to. Can be MySQL instances: `MYSQL_8_0`, `MYSQL_8_0_18`, `MYSQL_8_0_26`, `MYSQL_5_7`, or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12`. SQL Server instances: `SQLSERVER_2017_STANDARD`, `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
  appliesTo?: ReadonlyArray<
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_1"
    | "MYSQL_5_5"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_29"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_0_39"
    | "MYSQL_8_0_40"
    | "MYSQL_8_0_41"
    | "MYSQL_8_0_42"
    | "MYSQL_8_0_43"
    | "MYSQL_8_0_44"
    | "MYSQL_8_0_45"
    | "MYSQL_8_0_46"
    | "MYSQL_8_4"
    | "MYSQL_9_7"
    | "SQLSERVER_2017_STANDARD"
    | "SQLSERVER_2017_ENTERPRISE"
    | "SQLSERVER_2017_EXPRESS"
    | "SQLSERVER_2017_WEB"
    | "POSTGRES_9_6"
    | "POSTGRES_10"
    | "POSTGRES_11"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | "SQLSERVER_2019_STANDARD"
    | "SQLSERVER_2019_ENTERPRISE"
    | "SQLSERVER_2019_EXPRESS"
    | "SQLSERVER_2019_WEB"
    | "SQLSERVER_2022_STANDARD"
    | "SQLSERVER_2022_ENTERPRISE"
    | "SQLSERVER_2022_EXPRESS"
    | "SQLSERVER_2022_WEB"
    | "SQLSERVER_2025_STANDARD"
    | "SQLSERVER_2025_ENTERPRISE"
    | "SQLSERVER_2025_EXPRESS"
    | (string & {})
  >;
  /** For `STRING` flags, a list of strings that the value can be set to. */
  allowedStringValues?: ReadonlyArray<string>;
  /** For `INTEGER` flags, the minimum allowed value. */
  minValue?: string;
  /** For `INTEGER` flags, the maximum allowed value. */
  maxValue?: string;
  /** Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances. */
  requiresRestart?: boolean;
  /** This is always `sql#flag`. */
  kind?: string;
  /** Whether or not the flag is considered in beta. */
  inBeta?: boolean;
  /** Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values. */
  allowedIntValues?: ReadonlyArray<string>;
  /** Scope of flag. */
  flagScope?:
    | "SQL_FLAG_SCOPE_UNSPECIFIED"
    | "SQL_FLAG_SCOPE_DATABASE"
    | "SQL_FLAG_SCOPE_CONNECTION_POOL"
    | (string & {});
  /** Recommended flag value in string format for UI display. */
  recommendedStringValue?: string;
  /** Recommended flag value in integer format for UI display. */
  recommendedIntValue?: string;
}

export const Flag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  appliesTo: Schema.optional(Schema.Array(Schema.String)),
  allowedStringValues: Schema.optional(Schema.Array(Schema.String)),
  minValue: Schema.optional(Schema.String),
  maxValue: Schema.optional(Schema.String),
  requiresRestart: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  inBeta: Schema.optional(Schema.Boolean),
  allowedIntValues: Schema.optional(Schema.Array(Schema.String)),
  flagScope: Schema.optional(Schema.String),
  recommendedStringValue: Schema.optional(Schema.String),
  recommendedIntValue: Schema.optional(Schema.String),
}).annotate({ identifier: "Flag" });

export interface FlagsListResponse {
  /** This is always `sql#flagsList`. */
  kind?: string;
  /** List of flags. */
  items?: ReadonlyArray<Flag>;
}

export const FlagsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Flag)),
}).annotate({ identifier: "FlagsListResponse" });

export interface BinLogCoordinates {
  /** Name of the binary log file for a Cloud SQL instance. */
  binLogFileName?: string;
  /** Position (offset) within the binary log file. */
  binLogPosition?: string;
  /** This is always `sql#binLogCoordinates`. */
  kind?: string;
}

export const BinLogCoordinates = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  binLogFileName: Schema.optional(Schema.String),
  binLogPosition: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "BinLogCoordinates" });

export interface CloneContext {
  /** This is always `sql#cloneContext`. */
  kind?: string;
  /** Reserved for future use. */
  pitrTimestampMs?: string;
  /** Name of the Cloud SQL instance to be created as a clone. */
  destinationInstanceName?: string;
  /** Binary log coordinates, if specified, identify the position up to which the source instance is cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates. */
  binLogCoordinates?: BinLogCoordinates;
  /** Timestamp, if specified, identifies the time to which the source instance is cloned. */
  pointInTime?: string;
  /** The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use. */
  allocatedIpRange?: string;
  /** (SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty. */
  databaseNames?: ReadonlyArray<string>;
  /** Optional. Copy clone and point-in-time recovery clone of an instance to the specified zone. If no zone is specified, clone to the same primary zone as the source instance. */
  preferredZone?: string;
  /** Optional. Copy clone and point-in-time recovery clone of a regional instance in the specified zones. If not specified, clone to the same secondary zone as the source instance. This value cannot be the same as the preferred_zone field. */
  preferredSecondaryZone?: string;
  /** The timestamp used to identify the time when the source instance is deleted. If this instance is deleted, then you must set the timestamp. */
  sourceInstanceDeletionTime?: string;
  /** Optional. The project ID of the destination project where the cloned instance will be created. To perform a cross-project clone, this field is required. If not specified, the clone is created in the same project as the source instance. */
  destinationProject?: string;
  /** Optional. The fully qualified URI of the VPC network to which the cloned instance will be connected via Private Services Access for private IP. For example:`projects/my-network-project/global/networks/my-network`. This field is only required for cross-project cloning. */
  destinationNetwork?: string;
}

export const CloneContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  pitrTimestampMs: Schema.optional(Schema.String),
  destinationInstanceName: Schema.optional(Schema.String),
  binLogCoordinates: Schema.optional(BinLogCoordinates),
  pointInTime: Schema.optional(Schema.String),
  allocatedIpRange: Schema.optional(Schema.String),
  databaseNames: Schema.optional(Schema.Array(Schema.String)),
  preferredZone: Schema.optional(Schema.String),
  preferredSecondaryZone: Schema.optional(Schema.String),
  sourceInstanceDeletionTime: Schema.optional(Schema.String),
  destinationProject: Schema.optional(Schema.String),
  destinationNetwork: Schema.optional(Schema.String),
}).annotate({ identifier: "CloneContext" });

export interface InstancesCloneRequest {
  /** Contains details about the clone operation. */
  cloneContext?: CloneContext;
}

export const InstancesCloneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cloneContext: Schema.optional(CloneContext),
}).annotate({ identifier: "InstancesCloneRequest" });

export interface DemoteMasterMySqlReplicaConfiguration {
  /** This is always `sql#demoteMasterMysqlReplicaConfiguration`. */
  kind?: string;
  /** The username for the replication connection. */
  username?: string;
  /** The password for the replication connection. */
  password?: string;
  /** PEM representation of the replica's private key. The corresponding public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8. */
  clientKey?: string;
  /** PEM representation of the replica's x509 certificate. */
  clientCertificate?: string;
  /** PEM representation of the trusted CA's x509 certificate. */
  caCertificate?: string;
}

export const DemoteMasterMySqlReplicaConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
  }).annotate({ identifier: "DemoteMasterMySqlReplicaConfiguration" });

export interface DemoteMasterConfiguration {
  /** This is always `sql#demoteMasterConfiguration`. */
  kind?: string;
  /** MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory. */
  mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
}

export const DemoteMasterConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    mysqlReplicaConfiguration: Schema.optional(
      DemoteMasterMySqlReplicaConfiguration,
    ),
  }).annotate({ identifier: "DemoteMasterConfiguration" });

export interface DemoteMasterContext {
  /** This is always `sql#demoteMasterContext`. */
  kind?: string;
  /** Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues. */
  verifyGtidConsistency?: boolean;
  /** The name of the instance which will act as on-premises primary instance in the replication setup. */
  masterInstanceName?: string;
  /** Configuration specific to read-replicas replicating from the on-premises primary instance. */
  replicaConfiguration?: DemoteMasterConfiguration;
  /** Flag to skip replication setup on the instance. */
  skipReplicationSetup?: boolean;
}

export const DemoteMasterContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  verifyGtidConsistency: Schema.optional(Schema.Boolean),
  masterInstanceName: Schema.optional(Schema.String),
  replicaConfiguration: Schema.optional(DemoteMasterConfiguration),
  skipReplicationSetup: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DemoteMasterContext" });

export interface InstancesDemoteMasterRequest {
  /** Contains details about the demoteMaster operation. */
  demoteMasterContext?: DemoteMasterContext;
}

export const InstancesDemoteMasterRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    demoteMasterContext: Schema.optional(DemoteMasterContext),
  }).annotate({ identifier: "InstancesDemoteMasterRequest" });

export interface DemoteContext {
  /** This is always `sql#demoteContext`. */
  kind?: string;
  /** Required. The name of the instance which acts as an on-premises primary instance in the replication setup. */
  sourceRepresentativeInstanceName?: string;
}

export const DemoteContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  sourceRepresentativeInstanceName: Schema.optional(Schema.String),
}).annotate({ identifier: "DemoteContext" });

export interface InstancesDemoteRequest {
  /** Required. This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server. */
  demoteContext?: DemoteContext;
}

export const InstancesDemoteRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    demoteContext: Schema.optional(DemoteContext),
  },
).annotate({ identifier: "InstancesDemoteRequest" });

export interface InstancesExportRequest {
  /** Contains details about the export operation. */
  exportContext?: ExportContext;
}

export const InstancesExportRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    exportContext: Schema.optional(ExportContext),
  },
).annotate({ identifier: "InstancesExportRequest" });

export interface FailoverContext {
  /** The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version. */
  settingsVersion?: string;
  /** This is always `sql#failoverContext`. */
  kind?: string;
}

export const FailoverContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  settingsVersion: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "FailoverContext" });

export interface InstancesFailoverRequest {
  /** Failover Context. */
  failoverContext?: FailoverContext;
}

export const InstancesFailoverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failoverContext: Schema.optional(FailoverContext),
  }).annotate({ identifier: "InstancesFailoverRequest" });

export interface BackupReencryptionConfig {
  /** Backup re-encryption limit */
  backupLimit?: number;
  /** Type of backups users want to re-encrypt. */
  backupType?:
    | "BACKUP_TYPE_UNSPECIFIED"
    | "AUTOMATED"
    | "ON_DEMAND"
    | (string & {});
}

export const BackupReencryptionConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupLimit: Schema.optional(Schema.Number),
    backupType: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupReencryptionConfig" });

export interface InstancesReencryptRequest {
  /** Configuration specific to backup re-encryption */
  backupReencryptionConfig?: BackupReencryptionConfig;
}

export const InstancesReencryptRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupReencryptionConfig: Schema.optional(BackupReencryptionConfig),
  }).annotate({ identifier: "InstancesReencryptRequest" });

export interface AclEntry {
  /** The allowlisted value for the access control list. */
  value?: string;
  /** The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  expirationTime?: string;
  /** Optional. A label to identify this entry. */
  name?: string;
  /** This is always `sql#aclEntry`. */
  kind?: string;
}

export const AclEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  expirationTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "AclEntry" });

export interface PscAutoConnectionConfig {
  /** Optional. This is the project ID of consumer service project of this consumer endpoint. Optional. This is only applicable if consumer_network is a shared vpc network. */
  consumerProject?: string;
  /** Optional. The consumer network of this consumer endpoint. This must be a resource path that includes both the host project and the network name. For example, `projects/project1/global/networks/network1`. The consumer host project of this network might be different from the consumer service project. */
  consumerNetwork?: string;
  /** The IP address of the consumer endpoint. */
  ipAddress?: string;
  /** The connection status of the consumer endpoint. */
  status?: string;
  /** The connection policy status of the consumer network. */
  consumerNetworkStatus?: string;
}

export const PscAutoConnectionConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    consumerProject: Schema.optional(Schema.String),
    consumerNetwork: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    consumerNetworkStatus: Schema.optional(Schema.String),
  }).annotate({ identifier: "PscAutoConnectionConfig" });

export interface PscConfig {
  /** Whether PSC connectivity is enabled for this instance. */
  pscEnabled?: boolean;
  /** Optional. The list of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric). */
  allowedConsumerProjects?: ReadonlyArray<string>;
  /** Optional. The list of settings for requested Private Service Connect consumer endpoints that can be used to connect to this Cloud SQL instance. */
  pscAutoConnections?: ReadonlyArray<PscAutoConnectionConfig>;
  /** Optional. The network attachment of the consumer network that the Private Service Connect enabled Cloud SQL instance is authorized to connect via PSC interface. format: projects/PROJECT/regions/REGION/networkAttachments/ID */
  networkAttachmentUri?: string;
  /** Optional. Indicates whether PSC DNS automation is enabled for this instance. When enabled, Cloud SQL provisions a universal DNS record across all networks configured with Private Service Connect (PSC) auto-connections. This will default to true for new instances when Private Service Connect is enabled. */
  pscAutoDnsEnabled?: boolean;
  /** Optional. Indicates whether PSC write endpoint DNS automation is enabled for this instance. When enabled, Cloud SQL provisions a universal global DNS record across all networks configured with Private Service Connect (PSC) auto-connections that always points to the cluster primary instance. This feature is only supported for Enterprise Plus edition. This will default to true for new enterprise plus instances when `psc_auto_dns_enabled` is enabled. */
  pscWriteEndpointDnsEnabled?: boolean;
}

export const PscConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pscEnabled: Schema.optional(Schema.Boolean),
  allowedConsumerProjects: Schema.optional(Schema.Array(Schema.String)),
  pscAutoConnections: Schema.optional(Schema.Array(PscAutoConnectionConfig)),
  networkAttachmentUri: Schema.optional(Schema.String),
  pscAutoDnsEnabled: Schema.optional(Schema.Boolean),
  pscWriteEndpointDnsEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "PscConfig" });

export interface IpConfiguration {
  /** Whether the instance is assigned a public IP address or not. */
  ipv4Enabled?: boolean;
  /** The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set. */
  privateNetwork?: string;
  /** Use `ssl_mode` instead. Whether SSL/TLS connections over IP are enforced. If set to false, then allow both non-SSL/non-TLS and SSL/TLS connections. For SSL/TLS connections, the client certificate won't be verified. If set to true, then only allow connections encrypted with SSL/TLS and with valid client certificates. If you want to enforce SSL/TLS without enforcing the requirement for valid client certificates, then use the `ssl_mode` flag instead of the legacy `require_ssl` flag. */
  requireSsl?: boolean;
  /** The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: `157.197.200.0/24`). */
  authorizedNetworks?: ReadonlyArray<AclEntry>;
  /** The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.` */
  allocatedIpRange?: string;
  /** Controls connectivity to private IP instances from Google services, such as BigQuery. */
  enablePrivatePathForGoogleCloudServices?: boolean;
  /** Specify how SSL/TLS is enforced in database connections. If you must use the `require_ssl` flag for backward compatibility, then only the following value pairs are valid: For PostgreSQL and MySQL: * `ssl_mode=ALLOW_UNENCRYPTED_AND_ENCRYPTED` and `require_ssl=false` * `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false` * `ssl_mode=TRUSTED_CLIENT_CERTIFICATE_REQUIRED` and `require_ssl=true` For SQL Server: * `ssl_mode=ALLOW_UNENCRYPTED_AND_ENCRYPTED` and `require_ssl=false` * `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=true` The value of `ssl_mode` has priority over the value of `require_ssl`. For example, for the pair `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false`, `ssl_mode=ENCRYPTED_ONLY` means accept only SSL connections, while `require_ssl=false` means accept both non-SSL and SSL connections. In this case, MySQL and PostgreSQL databases respect `ssl_mode` and accepts only SSL connections. */
  sslMode?:
    | "SSL_MODE_UNSPECIFIED"
    | "ALLOW_UNENCRYPTED_AND_ENCRYPTED"
    | "ENCRYPTED_ONLY"
    | "TRUSTED_CLIENT_CERTIFICATE_REQUIRED"
    | (string & {});
  /** PSC settings for this instance. */
  pscConfig?: PscConfig;
  /** Specify what type of CA is used for the server certificate. */
  serverCaMode?:
    | "CA_MODE_UNSPECIFIED"
    | "GOOGLE_MANAGED_INTERNAL_CA"
    | "GOOGLE_MANAGED_CAS_CA"
    | "CUSTOMER_MANAGED_CAS_CA"
    | (string & {});
  /** Optional. Custom Subject Alternative Name(SAN)s for a Cloud SQL instance. */
  customSubjectAlternativeNames?: ReadonlyArray<string>;
  /** Optional. The resource name of the server CA pool for an instance with `CUSTOMER_MANAGED_CAS_CA` as the `server_ca_mode`. Format: projects/{PROJECT}/locations/{REGION}/caPools/{CA_POOL_ID} */
  serverCaPool?: string;
  /** Optional. Controls the automatic server certificate rotation feature. This feature is disabled by default. When enabled, the server certificate will be automatically rotated during Cloud SQL scheduled maintenance or self-service maintenance updates up to six months before it expires. This setting can only be set if server_ca_mode is either GOOGLE_MANAGED_CAS_CA or CUSTOMER_MANAGED_CAS_CA. */
  serverCertificateRotationMode?:
    | "SERVER_CERTIFICATE_ROTATION_MODE_UNSPECIFIED"
    | "NO_AUTOMATIC_ROTATION"
    | "AUTOMATIC_ROTATION_DURING_MAINTENANCE"
    | (string & {});
}

export const IpConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipv4Enabled: Schema.optional(Schema.Boolean),
  privateNetwork: Schema.optional(Schema.String),
  requireSsl: Schema.optional(Schema.Boolean),
  authorizedNetworks: Schema.optional(Schema.Array(AclEntry)),
  allocatedIpRange: Schema.optional(Schema.String),
  enablePrivatePathForGoogleCloudServices: Schema.optional(Schema.Boolean),
  sslMode: Schema.optional(Schema.String),
  pscConfig: Schema.optional(PscConfig),
  serverCaMode: Schema.optional(Schema.String),
  customSubjectAlternativeNames: Schema.optional(Schema.Array(Schema.String)),
  serverCaPool: Schema.optional(Schema.String),
  serverCertificateRotationMode: Schema.optional(Schema.String),
}).annotate({ identifier: "IpConfiguration" });

export interface LocationPreference {
  /** The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance. */
  followGaeApplication?: string;
  /** The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance. */
  zone?: string;
  /** The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). To disable this field, set it to 'no_secondary_zone'. */
  secondaryZone?: string;
  /** This is always `sql#locationPreference`. */
  kind?: string;
}

export const LocationPreference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  followGaeApplication: Schema.optional(Schema.String),
  zone: Schema.optional(Schema.String),
  secondaryZone: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "LocationPreference" });

export interface DatabaseFlags {
  /** The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation. */
  name?: string;
  /** The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value. */
  value?: string;
}

export const DatabaseFlags = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "DatabaseFlags" });

export interface MaintenanceWindow {
  /** Hour of day - 0 to 23. Specify in the UTC time zone. */
  hour?: number;
  /** Day of week - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, or `SUNDAY`. Specify in the UTC time zone. Returned in output as an integer, 1 to 7, where `1` equals Monday. */
  day?: number;
  /** Maintenance timing settings: `canary`, `stable`, or `week5`. For more information, see [About maintenance on Cloud SQL instances](https://cloud.google.com/sql/docs/mysql/maintenance). */
  updateTrack?:
    | "SQL_UPDATE_TRACK_UNSPECIFIED"
    | "canary"
    | "stable"
    | "week5"
    | (string & {});
  /** This is always `sql#maintenanceWindow`. */
  kind?: string;
}

export const MaintenanceWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hour: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  updateTrack: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "MaintenanceWindow" });

export interface BackupRetentionSettings {
  /** The unit that 'retained_backups' represents. */
  retentionUnit?: "RETENTION_UNIT_UNSPECIFIED" | "COUNT" | (string & {});
  /** Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups. */
  retainedBackups?: number;
}

export const BackupRetentionSettings =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retentionUnit: Schema.optional(Schema.String),
    retainedBackups: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BackupRetentionSettings" });

export interface BackupConfiguration {
  /** Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`. */
  startTime?: string;
  /** Whether this configuration is enabled. */
  enabled?: boolean;
  /** This is always `sql#backupConfiguration`. */
  kind?: string;
  /** (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well. */
  binaryLogEnabled?: boolean;
  /** Reserved for future use. */
  replicationLogArchivingEnabled?: boolean;
  /** Location of the backup */
  location?: string;
  /** Whether point in time recovery is enabled. */
  pointInTimeRecoveryEnabled?: boolean;
  /** The number of days of transaction logs we retain for point in time restore, from 1-7. */
  transactionLogRetentionDays?: number;
  /** Backup retention settings. */
  backupRetentionSettings?: BackupRetentionSettings;
  /** Output only. This value contains the storage location of transactional logs for the database for point-in-time recovery. */
  transactionalLogStorageState?:
    | "TRANSACTIONAL_LOG_STORAGE_STATE_UNSPECIFIED"
    | "DISK"
    | "SWITCHING_TO_CLOUD_STORAGE"
    | "SWITCHED_TO_CLOUD_STORAGE"
    | "CLOUD_STORAGE"
    | (string & {});
  /** Output only. Backup tier that manages the backups for the instance. */
  backupTier?:
    | "BACKUP_TIER_UNSPECIFIED"
    | "STANDARD"
    | "ADVANCED"
    | "ENHANCED"
    | (string & {});
}

export const BackupConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  binaryLogEnabled: Schema.optional(Schema.Boolean),
  replicationLogArchivingEnabled: Schema.optional(Schema.Boolean),
  location: Schema.optional(Schema.String),
  pointInTimeRecoveryEnabled: Schema.optional(Schema.Boolean),
  transactionLogRetentionDays: Schema.optional(Schema.Number),
  backupRetentionSettings: Schema.optional(BackupRetentionSettings),
  transactionalLogStorageState: Schema.optional(Schema.String),
  backupTier: Schema.optional(Schema.String),
}).annotate({ identifier: "BackupConfiguration" });

export interface SqlActiveDirectoryConfig {
  /** This is always sql#activeDirectoryConfig. */
  kind?: string;
  /** The name of the domain (e.g., mydomain.com). */
  domain?: string;
  /** Optional. The mode of the Active Directory configuration. */
  mode?:
    | "ACTIVE_DIRECTORY_MODE_UNSPECIFIED"
    | "MANAGED_ACTIVE_DIRECTORY"
    | "SELF_MANAGED_ACTIVE_DIRECTORY"
    | "CUSTOMER_MANAGED_ACTIVE_DIRECTORY"
    | (string & {});
  /** Optional. Domain controller IPv4 addresses used to bootstrap Active Directory. */
  dnsServers?: ReadonlyArray<string>;
  /** Optional. The secret manager key storing the administrator credential. (e.g., projects/{project}/secrets/{secret}). */
  adminCredentialSecretName?: string;
  /** Optional. The organizational unit distinguished name. This is the full hierarchical path to the organizational unit. */
  organizationalUnit?: string;
}

export const SqlActiveDirectoryConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    dnsServers: Schema.optional(Schema.Array(Schema.String)),
    adminCredentialSecretName: Schema.optional(Schema.String),
    organizationalUnit: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlActiveDirectoryConfig" });

export interface DenyMaintenancePeriod {
  /** "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 */
  startDate?: string;
  /** "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 */
  endDate?: string;
  /** Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00 */
  time?: string;
}

export const DenyMaintenancePeriod = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  time: Schema.optional(Schema.String),
}).annotate({ identifier: "DenyMaintenancePeriod" });

export interface InsightsConfig {
  /** Whether Query Insights feature is enabled. */
  queryInsightsEnabled?: boolean;
  /** Whether Query Insights will record client address when enabled. */
  recordClientAddress?: boolean;
  /** Whether Query Insights will record application tags from query when enabled. */
  recordApplicationTags?: boolean;
  /** Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query lengths greater than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database. */
  queryStringLength?: number;
  /** Number of query execution plans captured by Insights per minute for all queries combined. Default is 5. */
  queryPlansPerMinute?: number;
  /** Optional. Whether enhanced query insights feature is enabled. */
  enhancedQueryInsightsEnabled?: boolean;
}

export const InsightsConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  queryInsightsEnabled: Schema.optional(Schema.Boolean),
  recordClientAddress: Schema.optional(Schema.Boolean),
  recordApplicationTags: Schema.optional(Schema.Boolean),
  queryStringLength: Schema.optional(Schema.Number),
  queryPlansPerMinute: Schema.optional(Schema.Number),
  enhancedQueryInsightsEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "InsightsConfig" });

export interface PasswordValidationPolicy {
  /** Minimum number of characters allowed. */
  minLength?: number;
  /** The complexity of the password. */
  complexity?: "COMPLEXITY_UNSPECIFIED" | "COMPLEXITY_DEFAULT" | (string & {});
  /** Number of previous passwords that cannot be reused. */
  reuseInterval?: number;
  /** Disallow username as a part of the password. */
  disallowUsernameSubstring?: boolean;
  /** Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL. */
  passwordChangeInterval?: string;
  /** Whether to enable the password policy or not. When enabled, passwords must meet complexity requirements. Keep this policy enabled to help prevent unauthorized access. Disabling this policy allows weak passwords. */
  enablePasswordPolicy?: boolean;
  /** This field is deprecated and will be removed in a future version of the API. */
  disallowCompromisedCredentials?: boolean;
}

export const PasswordValidationPolicy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minLength: Schema.optional(Schema.Number),
    complexity: Schema.optional(Schema.String),
    reuseInterval: Schema.optional(Schema.Number),
    disallowUsernameSubstring: Schema.optional(Schema.Boolean),
    passwordChangeInterval: Schema.optional(Schema.String),
    enablePasswordPolicy: Schema.optional(Schema.Boolean),
    disallowCompromisedCredentials: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PasswordValidationPolicy" });

export interface SqlServerAuditConfig {
  /** This is always sql#sqlServerAuditConfig */
  kind?: string;
  /** The name of the destination bucket (e.g., gs://mybucket). */
  bucket?: string;
  /** How long to keep generated audit files. */
  retentionInterval?: string;
  /** How often to upload generated audit files. */
  uploadInterval?: string;
}

export const SqlServerAuditConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  bucket: Schema.optional(Schema.String),
  retentionInterval: Schema.optional(Schema.String),
  uploadInterval: Schema.optional(Schema.String),
}).annotate({ identifier: "SqlServerAuditConfig" });

export interface AdvancedMachineFeatures {
  /** The number of threads per physical core. */
  threadsPerCore?: number;
}

export const AdvancedMachineFeatures =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threadsPerCore: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AdvancedMachineFeatures" });

export interface DataCacheConfig {
  /** Whether data cache is enabled for the instance. */
  dataCacheEnabled?: boolean;
}

export const DataCacheConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataCacheEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "DataCacheConfig" });

export interface ConnectionPoolFlags {
  /** Required. The name of the flag. */
  name?: string;
  /** Required. The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value. */
  value?: string;
}

export const ConnectionPoolFlags = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "ConnectionPoolFlags" });

export interface ConnectionPoolConfig {
  /** Whether managed connection pooling is enabled. */
  connectionPoolingEnabled?: boolean;
  /** Optional. List of connection pool configuration flags. */
  flags?: ReadonlyArray<ConnectionPoolFlags>;
  /** Output only. Number of connection poolers. */
  poolerCount?: number;
}

export const ConnectionPoolConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  connectionPoolingEnabled: Schema.optional(Schema.Boolean),
  flags: Schema.optional(Schema.Array(ConnectionPoolFlags)),
  poolerCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "ConnectionPoolConfig" });

export interface FinalBackupConfig {
  /** Whether the final backup is enabled for the instance. */
  enabled?: boolean;
  /** The number of days to retain the final backup after the instance deletion. The final backup will be purged at (time_of_instance_deletion + retention_days). */
  retentionDays?: number;
}

export const FinalBackupConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  retentionDays: Schema.optional(Schema.Number),
}).annotate({ identifier: "FinalBackupConfig" });

export interface TargetMetric {
  /** The metric name to be used for auto scaling. */
  metric?: string;
  /** The target value for the metric. */
  targetValue?: number;
}

export const TargetMetric = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metric: Schema.optional(Schema.String),
  targetValue: Schema.optional(Schema.Number),
}).annotate({ identifier: "TargetMetric" });

export interface ReadPoolAutoScaleConfig {
  /** Indicates whether read pool auto scaling is enabled. */
  enabled?: boolean;
  /** Minimum number of read pool nodes to be maintained. */
  minNodeCount?: number;
  /** Maximum number of read pool nodes to be maintained. */
  maxNodeCount?: number;
  /** Optional. Target metrics for read pool auto scaling. */
  targetMetrics?: ReadonlyArray<TargetMetric>;
  /** Indicates whether read pool auto scaling supports scale in operations (removing nodes). */
  disableScaleIn?: boolean;
  /** The cooldown period for scale in operations. */
  scaleInCooldownSeconds?: number;
  /** The cooldown period for scale out operations. */
  scaleOutCooldownSeconds?: number;
}

export const ReadPoolAutoScaleConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    minNodeCount: Schema.optional(Schema.Number),
    maxNodeCount: Schema.optional(Schema.Number),
    targetMetrics: Schema.optional(Schema.Array(TargetMetric)),
    disableScaleIn: Schema.optional(Schema.Boolean),
    scaleInCooldownSeconds: Schema.optional(Schema.Number),
    scaleOutCooldownSeconds: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ReadPoolAutoScaleConfig" });

export interface SqlServerEntraIdConfig {
  /** Output only. This is always sql#sqlServerEntraIdConfig */
  kind?: string;
  /** Optional. The tenant ID for the Entra ID configuration. */
  tenantId?: string;
  /** Optional. The application ID for the Entra ID configuration. */
  applicationId?: string;
}

export const SqlServerEntraIdConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    applicationId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "SqlServerEntraIdConfig" });

export interface PerformanceCaptureConfig {
  /** Optional. Enable or disable the Performance Capture. */
  enabled?: boolean;
  /** Optional. The time interval in seconds between any two probes. */
  probingIntervalSeconds?: number;
  /** Optional. The minimum number of consecutive readings above threshold that triggers instance state capture. */
  probeThreshold?: number;
  /** Optional. The minimum number of server threads running to trigger the capture on primary. */
  runningThreadsThreshold?: number;
  /** Optional. The minimum number of seconds replica must be lagging behind primary to trigger capture on replica. */
  secondsBehindSourceThreshold?: number;
  /** Optional. The amount of time in seconds that a transaction needs to have been open before the watcher starts recording it. */
  transactionDurationThreshold?: number;
}

export const PerformanceCaptureConfig =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    probingIntervalSeconds: Schema.optional(Schema.Number),
    probeThreshold: Schema.optional(Schema.Number),
    runningThreadsThreshold: Schema.optional(Schema.Number),
    secondsBehindSourceThreshold: Schema.optional(Schema.Number),
    transactionDurationThreshold: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PerformanceCaptureConfig" });

export interface Settings {
  /** The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value. */
  settingsVersion?: string;
  /** The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only. */
  authorizedGaeApplications?: ReadonlyArray<string>;
  /** The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance. */
  tier?: string;
  /** This is always `sql#settings`. */
  kind?: string;
  /** User-provided labels, represented as a dictionary where each label is a single key value pair. */
  userLabels?: Record<string, string>;
  /** Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability). */
  availabilityType?:
    | "SQL_AVAILABILITY_TYPE_UNSPECIFIED"
    | "ZONAL"
    | "REGIONAL"
    | (string & {});
  /** The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances. */
  pricingPlan?:
    | "SQL_PRICING_PLAN_UNSPECIFIED"
    | "PACKAGE"
    | "PER_USE"
    | (string & {});
  /** The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances. */
  replicationType?:
    | "SQL_REPLICATION_TYPE_UNSPECIFIED"
    | "SYNCHRONOUS"
    | "ASYNCHRONOUS"
    | (string & {});
  /** The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. */
  storageAutoResizeLimit?: string;
  /** The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives. */
  activationPolicy?:
    | "SQL_ACTIVATION_POLICY_UNSPECIFIED"
    | "ALWAYS"
    | "NEVER"
    | "ON_DEMAND"
    | (string & {});
  /** The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled for Second Generation instances. */
  ipConfiguration?: IpConfiguration;
  /** Configuration to increase storage size automatically. The default value is true. */
  storageAutoResize?: boolean;
  /** The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or Compute Engine zone for better performance. App Engine co-location was only applicable to First Generation instances. */
  locationPreference?: LocationPreference;
  /** The database flags passed to the instance at startup. */
  databaseFlags?: ReadonlyArray<DatabaseFlags>;
  /** The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances. */
  dataDiskType?:
    | "SQL_DATA_DISK_TYPE_UNSPECIFIED"
    | "PD_SSD"
    | "PD_HDD"
    | "OBSOLETE_LOCAL_SSD"
    | "HYPERDISK_BALANCED"
    | (string & {});
  /** The maintenance window for this instance. This specifies when the instance can be restarted for maintenance purposes. */
  maintenanceWindow?: MaintenanceWindow;
  /** The daily backup configuration for the instance. */
  backupConfiguration?: BackupConfiguration;
  /** Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance. */
  databaseReplicationEnabled?: boolean;
  /** Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances. */
  crashSafeReplicationEnabled?: boolean;
  /** The size of data disk, in GB. The data disk size minimum is 10GB. */
  dataDiskSizeGb?: string;
  /** Active Directory configuration, relevant only for Cloud SQL for SQL Server. */
  activeDirectoryConfig?: SqlActiveDirectoryConfig;
  /** The name of server Instance collation. */
  collation?: string;
  /** Deny maintenance periods */
  denyMaintenancePeriods?: ReadonlyArray<DenyMaintenancePeriod>;
  /** Insights configuration, for now relevant only for Postgres. */
  insightsConfig?: InsightsConfig;
  /** The local user password validation policy of the instance. */
  passwordValidationPolicy?: PasswordValidationPolicy;
  /** SQL Server specific audit configuration. */
  sqlServerAuditConfig?: SqlServerAuditConfig;
  /** Optional. The edition of the instance. */
  edition?:
    | "EDITION_UNSPECIFIED"
    | "ENTERPRISE"
    | "ENTERPRISE_PLUS"
    | (string & {});
  /** Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors) Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance. */
  connectorEnforcement?:
    | "CONNECTOR_ENFORCEMENT_UNSPECIFIED"
    | "NOT_REQUIRED"
    | "REQUIRED"
    | (string & {});
  /** Configuration to protect against accidental instance deletion. */
  deletionProtectionEnabled?: boolean;
  /** Server timezone, relevant only for Cloud SQL for SQL Server. */
  timeZone?: string;
  /** Specifies advanced machine configuration for the instances relevant only for SQL Server. */
  advancedMachineFeatures?: AdvancedMachineFeatures;
  /** Configuration for data cache. */
  dataCacheConfig?: DataCacheConfig;
  /** Optional. Configuration value for recreation of replica after certain replication lag. */
  replicationLagMaxSeconds?: number;
  /** Optional. When this parameter is set to true, Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI. The default value is false. This applies only to Cloud SQL for MySQL and Cloud SQL for PostgreSQL instances. */
  enableGoogleMlIntegration?: boolean;
  /** Optional. By default, Cloud SQL instances have schema extraction disabled for Dataplex. When this parameter is set to true, schema extraction for Dataplex on Cloud SQL instances is activated. */
  enableDataplexIntegration?: boolean;
  /** Optional. When this parameter is set to true, Cloud SQL retains backups of the instance even after the instance is deleted. The ON_DEMAND backup will be retained until customer deletes the backup or the project. The AUTOMATED backup will be retained based on the backups retention setting. */
  retainBackupsOnDelete?: boolean;
  /** Optional. Provisioned number of I/O operations per second for the data disk. This field is only used for hyperdisk-balanced disk types. */
  dataDiskProvisionedIops?: string;
  /** Optional. Provisioned throughput measured in MiB per second for the data disk. This field is only used for hyperdisk-balanced disk types. */
  dataDiskProvisionedThroughput?: string;
  /** Optional. The managed connection pooling configuration for the instance. */
  connectionPoolConfig?: ConnectionPoolConfig;
  /** Optional. The final backup configuration for the instance. */
  finalBackupConfig?: FinalBackupConfig;
  /** Optional. The read pool auto-scale configuration for the instance. */
  readPoolAutoScaleConfig?: ReadPoolAutoScaleConfig;
  /** Optional. Configures whether the replica is in accelerated mode. This feature is in private preview and requires allowlisting to take effect. */
  acceleratedReplicaMode?: boolean;
  /** Optional. Cloud SQL for MySQL auto-upgrade configuration. When this parameter is set to true, auto-upgrade is enabled for MySQL 8.0 minor versions. The MySQL version must be 8.0.35 or higher. */
  autoUpgradeEnabled?: boolean;
  /** Optional. The Microsoft Entra ID configuration for the SQL Server instance. */
  entraidConfig?: SqlServerEntraIdConfig;
  /** This parameter controls whether to allow using ExecuteSql API to connect to the instance. Not allowed by default. */
  dataApiAccess?:
    | "DATA_API_ACCESS_UNSPECIFIED"
    | "DISALLOW_DATA_API"
    | "ALLOW_DATA_API"
    | (string & {});
  /** Optional. Configuration for Performance Capture, provides diagnostic metrics during high load situations. */
  performanceCaptureConfig?: PerformanceCaptureConfig;
}

export const Settings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  settingsVersion: Schema.optional(Schema.String),
  authorizedGaeApplications: Schema.optional(Schema.Array(Schema.String)),
  tier: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  userLabels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  availabilityType: Schema.optional(Schema.String),
  pricingPlan: Schema.optional(Schema.String),
  replicationType: Schema.optional(Schema.String),
  storageAutoResizeLimit: Schema.optional(Schema.String),
  activationPolicy: Schema.optional(Schema.String),
  ipConfiguration: Schema.optional(IpConfiguration),
  storageAutoResize: Schema.optional(Schema.Boolean),
  locationPreference: Schema.optional(LocationPreference),
  databaseFlags: Schema.optional(Schema.Array(DatabaseFlags)),
  dataDiskType: Schema.optional(Schema.String),
  maintenanceWindow: Schema.optional(MaintenanceWindow),
  backupConfiguration: Schema.optional(BackupConfiguration),
  databaseReplicationEnabled: Schema.optional(Schema.Boolean),
  crashSafeReplicationEnabled: Schema.optional(Schema.Boolean),
  dataDiskSizeGb: Schema.optional(Schema.String),
  activeDirectoryConfig: Schema.optional(SqlActiveDirectoryConfig),
  collation: Schema.optional(Schema.String),
  denyMaintenancePeriods: Schema.optional(Schema.Array(DenyMaintenancePeriod)),
  insightsConfig: Schema.optional(InsightsConfig),
  passwordValidationPolicy: Schema.optional(PasswordValidationPolicy),
  sqlServerAuditConfig: Schema.optional(SqlServerAuditConfig),
  edition: Schema.optional(Schema.String),
  connectorEnforcement: Schema.optional(Schema.String),
  deletionProtectionEnabled: Schema.optional(Schema.Boolean),
  timeZone: Schema.optional(Schema.String),
  advancedMachineFeatures: Schema.optional(AdvancedMachineFeatures),
  dataCacheConfig: Schema.optional(DataCacheConfig),
  replicationLagMaxSeconds: Schema.optional(Schema.Number),
  enableGoogleMlIntegration: Schema.optional(Schema.Boolean),
  enableDataplexIntegration: Schema.optional(Schema.Boolean),
  retainBackupsOnDelete: Schema.optional(Schema.Boolean),
  dataDiskProvisionedIops: Schema.optional(Schema.String),
  dataDiskProvisionedThroughput: Schema.optional(Schema.String),
  connectionPoolConfig: Schema.optional(ConnectionPoolConfig),
  finalBackupConfig: Schema.optional(FinalBackupConfig),
  readPoolAutoScaleConfig: Schema.optional(ReadPoolAutoScaleConfig),
  acceleratedReplicaMode: Schema.optional(Schema.Boolean),
  autoUpgradeEnabled: Schema.optional(Schema.Boolean),
  entraidConfig: Schema.optional(SqlServerEntraIdConfig),
  dataApiAccess: Schema.optional(Schema.String),
  performanceCaptureConfig: Schema.optional(PerformanceCaptureConfig),
}).annotate({ identifier: "Settings" });

export interface IpMapping {
  /** The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported. */
  type?:
    | "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
    | "PRIMARY"
    | "OUTGOING"
    | "PRIVATE"
    | "MIGRATED_1ST_GEN"
    | (string & {});
  /** The IP address assigned. */
  ipAddress?: string;
  /** The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired. */
  timeToRetire?: string;
}

export const IpMapping = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  ipAddress: Schema.optional(Schema.String),
  timeToRetire: Schema.optional(Schema.String),
}).annotate({ identifier: "IpMapping" });

export interface SslCert {
  /** This is always `sql#sslCert`. */
  kind?: string;
  /** Serial number, as extracted from the certificate. */
  certSerialNumber?: string;
  /** PEM representation. */
  cert?: string;
  /** The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  createTime?: string;
  /** User supplied name. Constrained to [a-zA-Z.-_ ]+. */
  commonName?: string;
  /** The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  expirationTime?: string;
  /** Sha1 Fingerprint. */
  sha1Fingerprint?: string;
  /** Name of the database instance. */
  instance?: string;
  /** The URI of this resource. */
  selfLink?: string;
}

export const SslCert = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  certSerialNumber: Schema.optional(Schema.String),
  cert: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  commonName: Schema.optional(Schema.String),
  expirationTime: Schema.optional(Schema.String),
  sha1Fingerprint: Schema.optional(Schema.String),
  instance: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
}).annotate({ identifier: "SslCert" });

export interface InstanceReference {
  /** The name of the Cloud SQL instance being referenced. This does not include the project ID. */
  name?: string;
  /** The region of the Cloud SQL instance being referenced. */
  region?: string;
  /** The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it. */
  project?: string;
}

export const InstanceReference = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  project: Schema.optional(Schema.String),
}).annotate({ identifier: "InstanceReference" });

export interface SelectedObjects {
  /** Required. The name of the database to migrate. */
  database?: string;
}

export const SelectedObjects = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  database: Schema.optional(Schema.String),
}).annotate({ identifier: "SelectedObjects" });

export interface OnPremisesConfiguration {
  /** The host and port of the on-premises instance in host:port format */
  hostPort?: string;
  /** This is always `sql#onPremisesConfiguration`. */
  kind?: string;
  /** The username for connecting to on-premises instance. */
  username?: string;
  /** The password for connecting to on-premises instance. */
  password?: string;
  /** PEM representation of the trusted CA's x509 certificate. */
  caCertificate?: string;
  /** PEM representation of the replica's x509 certificate. */
  clientCertificate?: string;
  /** PEM representation of the replica's private key. The corresponding public key is encoded in the client's certificate. */
  clientKey?: string;
  /** The dump file to create the Cloud SQL replica. */
  dumpFilePath?: string;
  /** The reference to Cloud SQL instance if the source is Cloud SQL. */
  sourceInstance?: InstanceReference;
  /** Optional. A list of objects that the user selects for replication from an external source instance. */
  selectedObjects?: ReadonlyArray<SelectedObjects>;
  /** Optional. SslOption for replica connection to the on-premises source. */
  sslOption?:
    | "SSL_OPTION_UNSPECIFIED"
    | "DISABLE"
    | "REQUIRE"
    | "VERIFY_CA"
    | (string & {});
}

export const OnPremisesConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostPort: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    dumpFilePath: Schema.optional(Schema.String),
    sourceInstance: Schema.optional(InstanceReference),
    selectedObjects: Schema.optional(Schema.Array(SelectedObjects)),
    sslOption: Schema.optional(Schema.String),
  }).annotate({ identifier: "OnPremisesConfiguration" });

export interface MySqlReplicaConfiguration {
  /** Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump. */
  dumpFilePath?: string;
  /** The username for the replication connection. */
  username?: string;
  /** The password for the replication connection. */
  password?: string;
  /** Seconds to wait between connect retries. MySQL's default is 60 seconds. */
  connectRetryInterval?: number;
  /** Interval in milliseconds between replication heartbeats. */
  masterHeartbeatPeriod?: string;
  /** PEM representation of the trusted CA's x509 certificate. */
  caCertificate?: string;
  /** PEM representation of the replica's x509 certificate. */
  clientCertificate?: string;
  /** PEM representation of the replica's private key. The corresponding public key is encoded in the client's certificate. */
  clientKey?: string;
  /** A list of permissible ciphers to use for SSL encryption. */
  sslCipher?: string;
  /** Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake. */
  verifyServerCertificate?: boolean;
  /** This is always `sql#mysqlReplicaConfiguration`. */
  kind?: string;
}

export const MySqlReplicaConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dumpFilePath: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    connectRetryInterval: Schema.optional(Schema.Number),
    masterHeartbeatPeriod: Schema.optional(Schema.String),
    caCertificate: Schema.optional(Schema.String),
    clientCertificate: Schema.optional(Schema.String),
    clientKey: Schema.optional(Schema.String),
    sslCipher: Schema.optional(Schema.String),
    verifyServerCertificate: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlReplicaConfiguration" });

export interface ReplicaConfiguration {
  /** This is always `sql#replicaConfiguration`. */
  kind?: string;
  /** MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory. */
  mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
  /** Specifies if the replica is the failover target. If the field is set to `true` the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance. */
  failoverTarget?: boolean;
  /** Optional. Specifies if a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross region replica that supports replica(s) under it. */
  cascadableReplica?: boolean;
}

export const ReplicaConfiguration = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  mysqlReplicaConfiguration: Schema.optional(MySqlReplicaConfiguration),
  failoverTarget: Schema.optional(Schema.Boolean),
  cascadableReplica: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ReplicaConfiguration" });

export interface SqlScheduledMaintenance {
  /** The start time of any upcoming scheduled maintenance for this instance. */
  startTime?: string;
  canDefer?: boolean;
  /** If the scheduled maintenance can be rescheduled. */
  canReschedule?: boolean;
  /** Maintenance cannot be rescheduled to start beyond this deadline. */
  scheduleDeadlineTime?: string;
}

export const SqlScheduledMaintenance =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    canDefer: Schema.optional(Schema.Boolean),
    canReschedule: Schema.optional(Schema.Boolean),
    scheduleDeadlineTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlScheduledMaintenance" });

export interface SqlOutOfDiskReport {
  /** This field represents the state generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job */
  sqlOutOfDiskState?:
    | "SQL_OUT_OF_DISK_STATE_UNSPECIFIED"
    | "NORMAL"
    | "SOFT_SHUTDOWN"
    | (string & {});
  /** The minimum recommended increase size in GigaBytes This field is consumed by the frontend * Writers: * the proactive database wellness job for OOD. * Readers: */
  sqlMinRecommendedIncreaseSizeGb?: number;
}

export const SqlOutOfDiskReport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sqlOutOfDiskState: Schema.optional(Schema.String),
  sqlMinRecommendedIncreaseSizeGb: Schema.optional(Schema.Number),
}).annotate({ identifier: "SqlOutOfDiskReport" });

export interface AvailableDatabaseVersion {
  /** The version's major version name. */
  majorVersion?: string;
  /** The database version name. For MySQL 8.0, this string provides the database major and minor version. */
  name?: string;
  /** The database version's display name. */
  displayName?: string;
}

export const AvailableDatabaseVersion =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    majorVersion: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AvailableDatabaseVersion" });

export interface ReplicationCluster {
  /** Output only. If set, this field indicates this instance has a private service access (PSA) DNS endpoint that is pointing to the primary instance of the cluster. If this instance is the primary, then the DNS endpoint points to this instance. After a switchover or replica failover operation, this DNS endpoint points to the promoted instance. This is a read-only field, returned to the user as information. This field can exist even if a standalone instance doesn't have a DR replica yet or the DR replica is deleted. */
  psaWriteEndpoint?: string;
  /** Optional. If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica. A DR replica is an optional configuration for Enterprise Plus edition instances. If the instance is a read replica, then the field is not set. Set this field to a replica name to designate a DR replica for a primary instance. Remove the replica name to remove the DR replica designation. */
  failoverDrReplicaName?: string;
  /** Output only. Read-only field that indicates whether the replica is a DR replica. This field is not set if the instance is a primary instance. */
  drReplica?: boolean;
}

export const ReplicationCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  psaWriteEndpoint: Schema.optional(Schema.String),
  failoverDrReplicaName: Schema.optional(Schema.String),
  drReplica: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ReplicationCluster" });

export interface GeminiInstanceConfig {
  /** Output only. Whether Gemini is enabled. */
  entitled?: boolean;
  /** Output only. Whether the vacuum management is enabled. */
  googleVacuumMgmtEnabled?: boolean;
  /** Output only. Whether canceling the out-of-memory (OOM) session is enabled. */
  oomSessionCancelEnabled?: boolean;
  /** Output only. Whether the active query is enabled. */
  activeQueryEnabled?: boolean;
  /** Output only. Whether the index advisor is enabled. */
  indexAdvisorEnabled?: boolean;
  /** Output only. Whether the flag recommender is enabled. */
  flagRecommenderEnabled?: boolean;
}

export const GeminiInstanceConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entitled: Schema.optional(Schema.Boolean),
  googleVacuumMgmtEnabled: Schema.optional(Schema.Boolean),
  oomSessionCancelEnabled: Schema.optional(Schema.Boolean),
  activeQueryEnabled: Schema.optional(Schema.Boolean),
  indexAdvisorEnabled: Schema.optional(Schema.Boolean),
  flagRecommenderEnabled: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "GeminiInstanceConfig" });

export interface DnsNameMapping {
  /** Output only. The DNS name. */
  name?: string;
  /** Output only. The connection type of the DNS name. */
  connectionType?:
    | "CONNECTION_TYPE_UNSPECIFIED"
    | "PUBLIC"
    | "PRIVATE_SERVICES_ACCESS"
    | "PRIVATE_SERVICE_CONNECT"
    | (string & {});
  /** Output only. The scope that the DNS name applies to. */
  dnsScope?: "DNS_SCOPE_UNSPECIFIED" | "INSTANCE" | "CLUSTER" | (string & {});
  /** Output only. The manager for this DNS record. */
  recordManager?:
    | "RECORD_MANAGER_UNSPECIFIED"
    | "CUSTOMER"
    | "CLOUD_SQL_AUTOMATION"
    | (string & {});
}

export const DnsNameMapping = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  connectionType: Schema.optional(Schema.String),
  dnsScope: Schema.optional(Schema.String),
  recordManager: Schema.optional(Schema.String),
}).annotate({ identifier: "DnsNameMapping" });

export interface PoolNodeConfig {
  /** Output only. The name of the read pool node, to be used for retrieving metrics and logs. */
  name?: string;
  /** Output only. The zone of the read pool node. */
  gceZone?: string;
  /** Output only. Mappings containing IP addresses that can be used to connect to the read pool node. */
  ipAddresses?: ReadonlyArray<IpMapping>;
  /** Output only. The DNS name of the read pool node. */
  dnsName?: string;
  /** Output only. The current state of the read pool node. */
  state?:
    | "SQL_INSTANCE_STATE_UNSPECIFIED"
    | "RUNNABLE"
    | "SUSPENDED"
    | "PENDING_DELETE"
    | "PENDING_CREATE"
    | "MAINTENANCE"
    | "FAILED"
    | "ONLINE_MAINTENANCE"
    | "REPAIRING"
    | (string & {});
  /** Output only. The list of DNS names used by this read pool node. */
  dnsNames?: ReadonlyArray<DnsNameMapping>;
  /** Output only. The Private Service Connect (PSC) service attachment of the read pool node. */
  pscServiceAttachmentLink?: string;
  /** Output only. The list of settings for requested automatically-setup Private Service Connect (PSC) consumer endpoints that can be used to connect to this read pool node. */
  pscAutoConnections?: ReadonlyArray<PscAutoConnectionConfig>;
}

export const PoolNodeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  gceZone: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(IpMapping)),
  dnsName: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  dnsNames: Schema.optional(Schema.Array(DnsNameMapping)),
  pscServiceAttachmentLink: Schema.optional(Schema.String),
  pscAutoConnections: Schema.optional(Schema.Array(PscAutoConnectionConfig)),
}).annotate({ identifier: "PoolNodeConfig" });

export interface DatabaseInstance {
  /** This is always `sql#instance`. */
  kind?: string;
  /** The current serving state of the Cloud SQL instance. */
  state?:
    | "SQL_INSTANCE_STATE_UNSPECIFIED"
    | "RUNNABLE"
    | "SUSPENDED"
    | "PENDING_DELETE"
    | "PENDING_CREATE"
    | "MAINTENANCE"
    | "FAILED"
    | "ONLINE_MAINTENANCE"
    | "REPAIRING"
    | (string & {});
  /** The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. */
  databaseVersion?:
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_1"
    | "MYSQL_5_5"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_29"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_0_39"
    | "MYSQL_8_0_40"
    | "MYSQL_8_0_41"
    | "MYSQL_8_0_42"
    | "MYSQL_8_0_43"
    | "MYSQL_8_0_44"
    | "MYSQL_8_0_45"
    | "MYSQL_8_0_46"
    | "MYSQL_8_4"
    | "MYSQL_9_7"
    | "SQLSERVER_2017_STANDARD"
    | "SQLSERVER_2017_ENTERPRISE"
    | "SQLSERVER_2017_EXPRESS"
    | "SQLSERVER_2017_WEB"
    | "POSTGRES_9_6"
    | "POSTGRES_10"
    | "POSTGRES_11"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | "SQLSERVER_2019_STANDARD"
    | "SQLSERVER_2019_ENTERPRISE"
    | "SQLSERVER_2019_EXPRESS"
    | "SQLSERVER_2019_WEB"
    | "SQLSERVER_2022_STANDARD"
    | "SQLSERVER_2022_ENTERPRISE"
    | "SQLSERVER_2022_EXPRESS"
    | "SQLSERVER_2022_WEB"
    | "SQLSERVER_2025_STANDARD"
    | "SQLSERVER_2025_ENTERPRISE"
    | "SQLSERVER_2025_EXPRESS"
    | (string & {});
  /** The user settings. */
  settings?: Settings;
  /** This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead. */
  etag?: string;
  /** The name and status of the failover replica. */
  failoverReplica?: { name?: string; available?: boolean };
  /** The name of the instance which will act as primary in the replication setup. */
  masterInstanceName?: string;
  /** The replicas of the instance. */
  replicaNames?: ReadonlyArray<string>;
  /** The maximum disk size of the instance in bytes. */
  maxDiskSize?: string;
  /** The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details. */
  currentDiskSize?: string;
  /** The assigned IP addresses for the instance. */
  ipAddresses?: ReadonlyArray<IpMapping>;
  /** SSL configuration. */
  serverCaCert?: SslCert;
  /** The instance type. */
  instanceType?:
    | "SQL_INSTANCE_TYPE_UNSPECIFIED"
    | "CLOUD_SQL_INSTANCE"
    | "ON_PREMISES_INSTANCE"
    | "READ_REPLICA_INSTANCE"
    | "READ_POOL_INSTANCE"
    | (string & {});
  /** The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable. */
  project?: string;
  /** The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. */
  ipv6Address?: string;
  /** The service account email address assigned to the instance. \This property is read-only. */
  serviceAccountEmailAddress?: string;
  /** Configuration specific to on-premises instances. */
  onPremisesConfiguration?: OnPremisesConfiguration;
  /** Configuration specific to failover replicas and read replicas. */
  replicaConfiguration?: ReplicaConfiguration;
  /** The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. */
  backendType?:
    | "SQL_BACKEND_TYPE_UNSPECIFIED"
    | "FIRST_GEN"
    | "SECOND_GEN"
    | "EXTERNAL"
    | (string & {});
  /** The URI of this resource. */
  selfLink?: string;
  /** If the instance state is SUSPENDED, the reason for the suspension. */
  suspensionReason?: ReadonlyArray<
    | "SQL_SUSPENSION_REASON_UNSPECIFIED"
    | "BILLING_ISSUE"
    | "LEGAL_ISSUE"
    | "OPERATIONAL_ISSUE"
    | "KMS_KEY_ISSUE"
    | (string & {})
  >;
  /** Connection name of the Cloud SQL instance used in connection strings. */
  connectionName?: string;
  /** Name of the Cloud SQL instance. This does not include the project ID. */
  name?: string;
  /** The geographical region of the Cloud SQL instance. It can be one of the [regions](https://cloud.google.com/sql/docs/mysql/locations#location-r) where Cloud SQL operates: For example, `asia-east1`, `europe-west1`, and `us-central1`. The default value is `us-central1`. */
  region?: string;
  /** The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance. */
  gceZone?: string;
  /** The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone. */
  secondaryGceZone?: string;
  /** Disk encryption configuration specific to an instance. */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration;
  /** Disk encryption status specific to an instance. */
  diskEncryptionStatus?: DiskEncryptionStatus;
  /** Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances. */
  rootPassword?: string;
  /** The start time of any upcoming scheduled maintenance for this instance. */
  scheduledMaintenance?: SqlScheduledMaintenance;
  /** This status indicates whether the instance satisfies PZS. The status is reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`. */
  databaseInstalledVersion?: string;
  /** This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job */
  outOfDiskReport?: SqlOutOfDiskReport;
  /** Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  createTime?: string;
  /** Output only. List all maintenance versions applicable on the instance */
  availableMaintenanceVersions?: ReadonlyArray<string>;
  /** The current software version on the instance. */
  maintenanceVersion?: string;
  /** Output only. All database versions that are available for upgrade. */
  upgradableDatabaseVersions?: ReadonlyArray<AvailableDatabaseVersion>;
  /** The SQL network architecture for the instance. */
  sqlNetworkArchitecture?:
    | "SQL_NETWORK_ARCHITECTURE_UNSPECIFIED"
    | "NEW_NETWORK_ARCHITECTURE"
    | "OLD_NETWORK_ARCHITECTURE"
    | (string & {});
  /** Output only. The link to service attachment of PSC instance. */
  pscServiceAttachmentLink?: string;
  /** Output only. The dns name of the instance. */
  dnsName?: string;
  /** Output only. DEPRECATED: please use write_endpoint instead. */
  primaryDnsName?: string;
  /** Output only. The dns name of the primary instance in a replication group. */
  writeEndpoint?: string;
  /** A primary instance and disaster recovery (DR) replica pair. A DR replica is a cross-region replica that you designate for failover in the event that the primary instance experiences regional failure. Applicable to MySQL and PostgreSQL. */
  replicationCluster?: ReplicationCluster;
  /** Gemini instance configuration. */
  geminiConfig?: GeminiInstanceConfig;
  /** Output only. This status indicates whether the instance satisfies PZI. The status is reserved for future use. */
  satisfiesPzi?: boolean;
  /** Input only. Whether Cloud SQL is enabled to switch storing point-in-time recovery log files from a data disk to Cloud Storage. */
  switchTransactionLogsToCloudStorageEnabled?: boolean;
  /** Input only. Determines whether an in-place major version upgrade of replicas happens when an in-place major version upgrade of a primary instance is initiated. */
  includeReplicasForMajorVersionUpgrade?: boolean;
  /** Optional. Input only. Immutable. Tag keys and tag values that are bound to this instance. You must represent each item in the map as: `"" : ""`. For example, a single resource can have the following tags: ``` "123/environment": "production", "123/costCenter": "marketing", ``` For more information on tag creation and management, see https://cloud.google.com/resource-manager/docs/tags/tags-overview. */
  tags?: Record<string, string>;
  /** The number of read pool nodes in a read pool. */
  nodeCount?: number;
  /** Output only. Entries containing information about each read pool node of the read pool. */
  nodes?: ReadonlyArray<PoolNodeConfig>;
  /** Output only. The list of DNS names used by this instance. */
  dnsNames?: ReadonlyArray<DnsNameMapping>;
}

export const DatabaseInstance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  databaseVersion: Schema.optional(Schema.String),
  settings: Schema.optional(Settings),
  etag: Schema.optional(Schema.String),
  failoverReplica: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      available: Schema.optional(Schema.Boolean),
    }),
  ),
  masterInstanceName: Schema.optional(Schema.String),
  replicaNames: Schema.optional(Schema.Array(Schema.String)),
  maxDiskSize: Schema.optional(Schema.String),
  currentDiskSize: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(IpMapping)),
  serverCaCert: Schema.optional(SslCert),
  instanceType: Schema.optional(Schema.String),
  project: Schema.optional(Schema.String),
  ipv6Address: Schema.optional(Schema.String),
  serviceAccountEmailAddress: Schema.optional(Schema.String),
  onPremisesConfiguration: Schema.optional(OnPremisesConfiguration),
  replicaConfiguration: Schema.optional(ReplicaConfiguration),
  backendType: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  suspensionReason: Schema.optional(Schema.Array(Schema.String)),
  connectionName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  gceZone: Schema.optional(Schema.String),
  secondaryGceZone: Schema.optional(Schema.String),
  diskEncryptionConfiguration: Schema.optional(DiskEncryptionConfiguration),
  diskEncryptionStatus: Schema.optional(DiskEncryptionStatus),
  rootPassword: Schema.optional(Schema.String),
  scheduledMaintenance: Schema.optional(SqlScheduledMaintenance),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  databaseInstalledVersion: Schema.optional(Schema.String),
  outOfDiskReport: Schema.optional(SqlOutOfDiskReport),
  createTime: Schema.optional(Schema.String),
  availableMaintenanceVersions: Schema.optional(Schema.Array(Schema.String)),
  maintenanceVersion: Schema.optional(Schema.String),
  upgradableDatabaseVersions: Schema.optional(
    Schema.Array(AvailableDatabaseVersion),
  ),
  sqlNetworkArchitecture: Schema.optional(Schema.String),
  pscServiceAttachmentLink: Schema.optional(Schema.String),
  dnsName: Schema.optional(Schema.String),
  primaryDnsName: Schema.optional(Schema.String),
  writeEndpoint: Schema.optional(Schema.String),
  replicationCluster: Schema.optional(ReplicationCluster),
  geminiConfig: Schema.optional(GeminiInstanceConfig),
  satisfiesPzi: Schema.optional(Schema.Boolean),
  switchTransactionLogsToCloudStorageEnabled: Schema.optional(Schema.Boolean),
  includeReplicasForMajorVersionUpgrade: Schema.optional(Schema.Boolean),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  nodeCount: Schema.optional(Schema.Number),
  nodes: Schema.optional(Schema.Array(PoolNodeConfig)),
  dnsNames: Schema.optional(Schema.Array(DnsNameMapping)),
}).annotate({ identifier: "DatabaseInstance" });

export interface InstancesImportRequest {
  /** Contains details about the import operation. */
  importContext?: ImportContext;
}

export const InstancesImportRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    importContext: Schema.optional(ImportContext),
  },
).annotate({ identifier: "InstancesImportRequest" });

export interface InstancesListResponse {
  /** This is always `sql#instancesList`. */
  kind?: string;
  /** List of warnings that occurred while handling the request. */
  warnings?: ReadonlyArray<ApiWarning>;
  /** List of database instance resources. */
  items?: ReadonlyArray<DatabaseInstance>;
  /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
  nextPageToken?: string;
}

export const InstancesListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  warnings: Schema.optional(Schema.Array(ApiWarning)),
  items: Schema.optional(Schema.Array(DatabaseInstance)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "InstancesListResponse" });

export interface InstancesListServerCasResponse {
  /** List of server CA certificates for the instance. */
  certs?: ReadonlyArray<SslCert>;
  activeVersion?: string;
  /** This is always `sql#instancesListServerCas`. */
  kind?: string;
}

export const InstancesListServerCasResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certs: Schema.optional(Schema.Array(SslCert)),
    activeVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstancesListServerCasResponse" });

export interface InstancesListServerCertificatesResponse {
  /** List of server CA certificates for the instance. */
  caCerts?: ReadonlyArray<SslCert>;
  /** List of server certificates for the instance, signed by the corresponding CA from the `ca_certs` list. */
  serverCerts?: ReadonlyArray<SslCert>;
  /** The `sha1_fingerprint` of the active certificate from `server_certs`. */
  activeVersion?: string;
  /** This is always `sql#instancesListServerCertificates`. */
  kind?: string;
}

export const InstancesListServerCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    caCerts: Schema.optional(Schema.Array(SslCert)),
    serverCerts: Schema.optional(Schema.Array(SslCert)),
    activeVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstancesListServerCertificatesResponse" });

export interface InstancesListEntraIdCertificatesResponse {
  /** List of Entra ID certificates for the instance. */
  certs?: ReadonlyArray<SslCert>;
  /** The `sha1_fingerprint` of the active certificate from `certs`. */
  activeVersion?: string;
  /** This is always `sql#instancesListEntraIdCertificates`. */
  kind?: string;
}

export const InstancesListEntraIdCertificatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certs: Schema.optional(Schema.Array(SslCert)),
    activeVersion: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstancesListEntraIdCertificatesResponse" });

export interface RestoreBackupContext {
  /** This is always `sql#restoreBackupContext`. */
  kind?: string;
  /** The ID of the backup run to restore from. */
  backupRunId?: string;
  /** The ID of the instance that the backup was taken from. */
  instanceId?: string;
  /** The full project ID of the source instance. */
  project?: string;
}

export const RestoreBackupContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  backupRunId: Schema.optional(Schema.String),
  instanceId: Schema.optional(Schema.String),
  project: Schema.optional(Schema.String),
}).annotate({ identifier: "RestoreBackupContext" });

export interface InstancesRestoreBackupRequest {
  /** Parameters required to perform the restore backup operation. */
  restoreBackupContext?: RestoreBackupContext;
  /** The name of the backup that's used to restore a Cloud SQL instance: Format: projects/{project-id}/backups/{backup-uid}. Only one of restore_backup_context, backup, backupdr_backup can be passed to the input. */
  backup?: string;
  /** The name of the backup that's used to restore a Cloud SQL instance: Format: "projects/{project-id}/locations/{location}/backupVaults/{backupvault}/dataSources/{datasource}/backups/{backup-uid}". Only one of restore_backup_context, backup, backupdr_backup can be passed to the input. */
  backupdrBackup?: string;
  /** Optional. By using this parameter, Cloud SQL overrides any instance settings stored in the backup you are restoring from. You can't change the instance's major database version and you can only increase the disk size. You can use this field to restore new instances only. This field is not applicable for restore to existing instances. */
  restoreInstanceSettings?: DatabaseInstance;
  /** Optional. This field has the same purpose as restore_instance_settings, changes any instance settings stored in the backup you are restoring from. With the difference that these fields are cleared in the settings. */
  restoreInstanceClearOverridesFieldNames?: ReadonlyArray<string>;
}

export const InstancesRestoreBackupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restoreBackupContext: Schema.optional(RestoreBackupContext),
    backup: Schema.optional(Schema.String),
    backupdrBackup: Schema.optional(Schema.String),
    restoreInstanceSettings: Schema.optional(DatabaseInstance),
    restoreInstanceClearOverridesFieldNames: Schema.optional(
      Schema.Array(Schema.String),
    ),
  }).annotate({ identifier: "InstancesRestoreBackupRequest" });

export interface RotateServerCaContext {
  /** This is always `sql#rotateServerCaContext`. */
  kind?: string;
  /** The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version. */
  nextVersion?: string;
}

export const RotateServerCaContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  nextVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "RotateServerCaContext" });

export interface InstancesRotateServerCaRequest {
  /** Contains details about the rotate server CA operation. */
  rotateServerCaContext?: RotateServerCaContext;
}

export const InstancesRotateServerCaRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rotateServerCaContext: Schema.optional(RotateServerCaContext),
  }).annotate({ identifier: "InstancesRotateServerCaRequest" });

export interface RotateServerCertificateContext {
  /** Optional. This is always `sql#rotateServerCertificateContext`. */
  kind?: string;
  /** Optional. The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server certificate version. */
  nextVersion?: string;
}

export const RotateServerCertificateContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "RotateServerCertificateContext" });

export interface InstancesRotateServerCertificateRequest {
  /** Optional. Contains details about the rotate server CA operation. */
  rotateServerCertificateContext?: RotateServerCertificateContext;
}

export const InstancesRotateServerCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rotateServerCertificateContext: Schema.optional(
      RotateServerCertificateContext,
    ),
  }).annotate({ identifier: "InstancesRotateServerCertificateRequest" });

export interface RotateEntraIdCertificateContext {
  /** Optional. This is always `sql#rotateEntraIdCertificateContext`. */
  kind?: string;
  /** Optional. The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added Entra ID certificate version. */
  nextVersion?: string;
}

export const RotateEntraIdCertificateContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    nextVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "RotateEntraIdCertificateContext" });

export interface InstancesRotateEntraIdCertificateRequest {
  /** Optional. Contains details about the rotate Entra ID certificate operation. */
  rotateEntraIdCertificateContext?: RotateEntraIdCertificateContext;
}

export const InstancesRotateEntraIdCertificateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rotateEntraIdCertificateContext: Schema.optional(
      RotateEntraIdCertificateContext,
    ),
  }).annotate({ identifier: "InstancesRotateEntraIdCertificateRequest" });

export interface TruncateLogContext {
  /** This is always `sql#truncateLogContext`. */
  kind?: string;
  /** The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`. */
  logType?: string;
}

export const TruncateLogContext = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  logType: Schema.optional(Schema.String),
}).annotate({ identifier: "TruncateLogContext" });

export interface InstancesTruncateLogRequest {
  /** Contains details about the truncate log operation. */
  truncateLogContext?: TruncateLogContext;
}

export const InstancesTruncateLogRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    truncateLogContext: Schema.optional(TruncateLogContext),
  }).annotate({ identifier: "InstancesTruncateLogRequest" });

export interface SslCertsCreateEphemeralRequest {
  /** PEM encoded public key to include in the signed certificate. */
  public_key?: string;
  /** Access token to include in the signed certificate. */
  access_token?: string;
}

export const SslCertsCreateEphemeralRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    public_key: Schema.optional(Schema.String),
    access_token: Schema.optional(Schema.String),
  }).annotate({ identifier: "SslCertsCreateEphemeralRequest" });

export interface Reschedule {
  /** Required. The type of the reschedule. */
  rescheduleType?:
    | "RESCHEDULE_TYPE_UNSPECIFIED"
    | "IMMEDIATE"
    | "NEXT_AVAILABLE_WINDOW"
    | "SPECIFIC_TIME"
    | (string & {});
  /** Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. */
  scheduleTime?: string;
}

export const Reschedule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rescheduleType: Schema.optional(Schema.String),
  scheduleTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Reschedule" });

export interface SqlInstancesRescheduleMaintenanceRequestBody {
  /** Required. The type of the reschedule the user wants. */
  reschedule?: Reschedule;
}

export const SqlInstancesRescheduleMaintenanceRequestBody =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reschedule: Schema.optional(Reschedule),
  }).annotate({ identifier: "SqlInstancesRescheduleMaintenanceRequestBody" });

export interface SyncFlags {
  /** The name of the flag. */
  name?: string;
  /** The value of the flag. This field must be omitted if the flag doesn't take a value. */
  value?: string;
}

export const SyncFlags = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
}).annotate({ identifier: "SyncFlags" });

export interface MySqlSyncConfig {
  /** Flags to use for the initial dump. */
  initialSyncFlags?: ReadonlyArray<SyncFlags>;
}

export const MySqlSyncConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  initialSyncFlags: Schema.optional(Schema.Array(SyncFlags)),
}).annotate({ identifier: "MySqlSyncConfig" });

export interface ExternalSyncSelectedObject {
  /** The name of the database that Cloud SQL migrates. */
  database?: string;
}

export const ExternalSyncSelectedObject =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalSyncSelectedObject" });

export interface SqlInstancesVerifyExternalSyncSettingsRequest {
  /** Flag to enable verifying connection only */
  verifyConnectionOnly?: boolean;
  /** External sync mode */
  syncMode?:
    | "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    | "ONLINE"
    | "OFFLINE"
    | (string & {});
  /** Optional. Flag to verify settings required by replication setup only */
  verifyReplicationOnly?: boolean;
  /** Optional. MySQL-specific settings for start external sync. */
  mysqlSyncConfig?: MySqlSyncConfig;
  /** Optional. MigrationType configures the migration to use physical files or logical dump files. If not set, then the logical dump file configuration is used. Valid values are `LOGICAL` or `PHYSICAL`. Only applicable to MySQL. */
  migrationType?:
    | "MIGRATION_TYPE_UNSPECIFIED"
    | "LOGICAL"
    | "PHYSICAL"
    | (string & {});
  /** Optional. Parallel level for initial data sync. Only applicable for PostgreSQL. */
  syncParallelLevel?:
    | "EXTERNAL_SYNC_PARALLEL_LEVEL_UNSPECIFIED"
    | "MIN"
    | "OPTIMAL"
    | "MAX"
    | (string & {});
  /** Optional. Migrate only the specified objects from the source instance. If this field is empty, then migrate all objects. */
  selectedObjects?: ReadonlyArray<ExternalSyncSelectedObject>;
}

export const SqlInstancesVerifyExternalSyncSettingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verifyConnectionOnly: Schema.optional(Schema.Boolean),
    syncMode: Schema.optional(Schema.String),
    verifyReplicationOnly: Schema.optional(Schema.Boolean),
    mysqlSyncConfig: Schema.optional(MySqlSyncConfig),
    migrationType: Schema.optional(Schema.String),
    syncParallelLevel: Schema.optional(Schema.String),
    selectedObjects: Schema.optional(Schema.Array(ExternalSyncSelectedObject)),
  }).annotate({ identifier: "SqlInstancesVerifyExternalSyncSettingsRequest" });

export interface SqlExternalSyncSettingError {
  /** Can be `sql#externalSyncSettingError` or `sql#externalSyncSettingWarning`. */
  kind?: string;
  /** Identifies the specific error that occurred. */
  type?:
    | "SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED"
    | "CONNECTION_FAILURE"
    | "BINLOG_NOT_ENABLED"
    | "INCOMPATIBLE_DATABASE_VERSION"
    | "REPLICA_ALREADY_SETUP"
    | "INSUFFICIENT_PRIVILEGE"
    | "UNSUPPORTED_MIGRATION_TYPE"
    | "NO_PGLOGICAL_INSTALLED"
    | "PGLOGICAL_NODE_ALREADY_EXISTS"
    | "INVALID_WAL_LEVEL"
    | "INVALID_SHARED_PRELOAD_LIBRARY"
    | "INSUFFICIENT_MAX_REPLICATION_SLOTS"
    | "INSUFFICIENT_MAX_WAL_SENDERS"
    | "INSUFFICIENT_MAX_WORKER_PROCESSES"
    | "UNSUPPORTED_EXTENSIONS"
    | "INVALID_RDS_LOGICAL_REPLICATION"
    | "INVALID_LOGGING_SETUP"
    | "INVALID_DB_PARAM"
    | "UNSUPPORTED_GTID_MODE"
    | "SQLSERVER_AGENT_NOT_RUNNING"
    | "UNSUPPORTED_TABLE_DEFINITION"
    | "UNSUPPORTED_DEFINER"
    | "SQLSERVER_SERVERNAME_MISMATCH"
    | "PRIMARY_ALREADY_SETUP"
    | "UNSUPPORTED_BINLOG_FORMAT"
    | "BINLOG_RETENTION_SETTING"
    | "UNSUPPORTED_STORAGE_ENGINE"
    | "LIMITED_SUPPORT_TABLES"
    | "EXISTING_DATA_IN_REPLICA"
    | "MISSING_OPTIONAL_PRIVILEGES"
    | "RISKY_BACKUP_ADMIN_PRIVILEGE"
    | "INSUFFICIENT_GCS_PERMISSIONS"
    | "INVALID_FILE_INFO"
    | "UNSUPPORTED_DATABASE_SETTINGS"
    | "MYSQL_PARALLEL_IMPORT_INSUFFICIENT_PRIVILEGE"
    | "LOCAL_INFILE_OFF"
    | "TURN_ON_PITR_AFTER_PROMOTE"
    | "INCOMPATIBLE_DATABASE_MINOR_VERSION"
    | "SOURCE_MAX_SUBSCRIPTIONS"
    | "UNABLE_TO_VERIFY_DEFINERS"
    | "SUBSCRIPTION_CALCULATION_STATUS"
    | "PG_SUBSCRIPTION_COUNT"
    | "PG_SYNC_PARALLEL_LEVEL"
    | "INSUFFICIENT_DISK_SIZE"
    | "INSUFFICIENT_MACHINE_TIER"
    | "UNSUPPORTED_EXTENSIONS_NOT_MIGRATED"
    | "EXTENSIONS_NOT_MIGRATED"
    | "PG_CRON_FLAG_ENABLED_IN_REPLICA"
    | "EXTENSIONS_NOT_ENABLED_IN_REPLICA"
    | "UNSUPPORTED_COLUMNS"
    | "USERS_NOT_CREATED_IN_REPLICA"
    | "UNSUPPORTED_SYSTEM_OBJECTS"
    | "UNSUPPORTED_TABLES_WITH_REPLICA_IDENTITY"
    | "SELECTED_OBJECTS_NOT_EXIST_ON_SOURCE"
    | "PSC_ONLY_INSTANCE_WITH_NO_NETWORK_ATTACHMENT_URI"
    | "SELECTED_OBJECTS_REFERENCE_UNSELECTED_OBJECTS"
    | "PROMPT_DELETE_EXISTING"
    | "WILL_DELETE_EXISTING"
    | "PG_DDL_REPLICATION_INSUFFICIENT_PRIVILEGE"
    | (string & {});
  /** Additional information about the error encountered. */
  detail?: string;
}

export const SqlExternalSyncSettingError =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlExternalSyncSettingError" });

export interface SqlInstancesVerifyExternalSyncSettingsResponse {
  /** This is always `sql#migrationSettingErrorList`. */
  kind?: string;
  /** List of migration violations. */
  errors?: ReadonlyArray<SqlExternalSyncSettingError>;
  /** List of migration warnings. */
  warnings?: ReadonlyArray<SqlExternalSyncSettingError>;
}

export const SqlInstancesVerifyExternalSyncSettingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(SqlExternalSyncSettingError)),
    warnings: Schema.optional(Schema.Array(SqlExternalSyncSettingError)),
  }).annotate({ identifier: "SqlInstancesVerifyExternalSyncSettingsResponse" });

export interface SqlInstancesStartExternalSyncRequest {
  /** External sync mode. */
  syncMode?:
    | "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    | "ONLINE"
    | "OFFLINE"
    | (string & {});
  /** Whether to skip the verification step (VESS). */
  skipVerification?: boolean;
  /** MySQL-specific settings for start external sync. */
  mysqlSyncConfig?: MySqlSyncConfig;
  /** Optional. Parallel level for initial data sync. Currently only applicable for MySQL. */
  syncParallelLevel?:
    | "EXTERNAL_SYNC_PARALLEL_LEVEL_UNSPECIFIED"
    | "MIN"
    | "OPTIMAL"
    | "MAX"
    | (string & {});
  /** Optional. MigrationType configures the migration to use physical files or logical dump files. If not set, then the logical dump file configuration is used. Valid values are `LOGICAL` or `PHYSICAL`. Only applicable to MySQL. */
  migrationType?:
    | "MIGRATION_TYPE_UNSPECIFIED"
    | "LOGICAL"
    | "PHYSICAL"
    | (string & {});
  /** Optional. MySQL only. True if end-user has confirmed that this SES call will wipe replica databases overlapping with the proposed selected_objects. If this field is not set and there are both overlapping and additional databases proposed, an error will be returned. */
  replicaOverwriteEnabled?: boolean;
}

export const SqlInstancesStartExternalSyncRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    syncMode: Schema.optional(Schema.String),
    skipVerification: Schema.optional(Schema.Boolean),
    mysqlSyncConfig: Schema.optional(MySqlSyncConfig),
    syncParallelLevel: Schema.optional(Schema.String),
    migrationType: Schema.optional(Schema.String),
    replicaOverwriteEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SqlInstancesStartExternalSyncRequest" });

export interface PerformDiskShrinkContext {
  /** The target disk shrink size in GigaBytes. */
  targetSizeGb?: string;
}

export const PerformDiskShrinkContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetSizeGb: Schema.optional(Schema.String),
  }).annotate({ identifier: "PerformDiskShrinkContext" });

export interface SqlInstancesGetDiskShrinkConfigResponse {
  /** This is always `sql#getDiskShrinkConfig`. */
  kind?: string;
  /** The minimum size to which a disk can be shrunk in GigaBytes. */
  minimalTargetSizeGb?: string;
  /** Additional message to customers. */
  message?: string;
}

export const SqlInstancesGetDiskShrinkConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    minimalTargetSizeGb: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlInstancesGetDiskShrinkConfigResponse" });

export interface SqlInstancesResetReplicaSizeRequest {}

export const SqlInstancesResetReplicaSizeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SqlInstancesResetReplicaSizeRequest",
  });

export interface SqlInstancesGetLatestRecoveryTimeResponse {
  /** This is always `sql#getLatestRecoveryTime`. */
  kind?: string;
  /** Timestamp, identifies the latest recovery time of the source instance. */
  latestRecoveryTime?: string;
  /** Timestamp, identifies the earliest recovery time of the source instance. */
  earliestRecoveryTime?: string;
}

export const SqlInstancesGetLatestRecoveryTimeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    latestRecoveryTime: Schema.optional(Schema.String),
    earliestRecoveryTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlInstancesGetLatestRecoveryTimeResponse" });

export interface ExecuteSqlPayload {
  /** Optional. The name of an existing database user to connect to the database. When `auto_iam_authn` is set to true, this field is ignored and the API caller's IAM user is used. */
  user?: string;
  /** Required. SQL statements to run on the database. It can be a single statement or a sequence of statements separated by semicolons. */
  sqlStatement?: string;
  /** Optional. Name of the database on which the statement will be executed. */
  database?: string;
  /** Optional. When set to true, the API caller identity associated with the request is used for database authentication. The API caller must be an IAM user in the database. */
  autoIamAuthn?: boolean;
  /** Optional. The maximum number of rows returned per SQL statement. */
  rowLimit?: string;
  /** Optional. Controls how the API should respond when the SQL execution result is incomplete due to the size limit or another error. The default mode is to throw an error. */
  partialResultMode?:
    | "PARTIAL_RESULT_MODE_UNSPECIFIED"
    | "FAIL_PARTIAL_RESULT"
    | "ALLOW_PARTIAL_RESULT"
    | (string & {});
  /** Optional. Specifies the name of the application that is making the request. This field is used for telemetry. Only alphanumeric characters, dashes, and underscores are allowed. The maximum length is 32 characters. */
  application?: string;
}

export const ExecuteSqlPayload = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(Schema.String),
  sqlStatement: Schema.optional(Schema.String),
  database: Schema.optional(Schema.String),
  autoIamAuthn: Schema.optional(Schema.Boolean),
  rowLimit: Schema.optional(Schema.String),
  partialResultMode: Schema.optional(Schema.String),
  application: Schema.optional(Schema.String),
}).annotate({ identifier: "ExecuteSqlPayload" });

export interface Message {
  /** The full message string. For PostgreSQL, this is a formatted string that may include severity, code, and the notice/warning message. For MySQL, this contains the warning message. */
  message?: string;
  /** The severity of the message (e.g., "NOTICE" for PostgreSQL, "WARNING" for MySQL). */
  severity?: string;
}

export const Message = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
}).annotate({ identifier: "Message" });

export interface Metadata {
  /** The time taken to execute the SQL statements. */
  sqlStatementExecutionTime?: string;
}

export const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sqlStatementExecutionTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Metadata" });

export interface Column {
  /** Name of the column. */
  name?: string;
  /** Datatype of the column. */
  type?: string;
}

export const Column = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).annotate({ identifier: "Column" });

export interface Value {
  /** The cell value represented in string format. */
  value?: string;
  /** If cell value is null, then this flag will be set to true. */
  nullValue?: boolean;
}

export const Value = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  nullValue: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Value" });

export interface Row {
  /** The values for the row. */
  values?: ReadonlyArray<Value>;
}

export const Row = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Array(Value)),
}).annotate({ identifier: "Row" });

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

export interface QueryResult {
  /** List of columns included in the result. This also includes the data type of the column. */
  columns?: ReadonlyArray<Column>;
  /** Rows returned by the SQL statement. */
  rows?: ReadonlyArray<Row>;
  /** Message related to the SQL execution result. */
  message?: string;
  /** Set to true if the SQL execution's result is truncated due to size limits or an error retrieving results. */
  partialResult?: boolean;
  /** If results were truncated due to an error, details of that error. */
  status?: Status;
}

export const QueryResult = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columns: Schema.optional(Schema.Array(Column)),
  rows: Schema.optional(Schema.Array(Row)),
  message: Schema.optional(Schema.String),
  partialResult: Schema.optional(Schema.Boolean),
  status: Schema.optional(Status),
}).annotate({ identifier: "QueryResult" });

export interface SqlInstancesExecuteSqlResponse {
  /** A list of notices and warnings generated during query execution. For PostgreSQL, this includes all notices and warnings. For MySQL, this includes warnings generated by the last executed statement. To retrieve all warnings for a multi-statement query, `SHOW WARNINGS` must be executed after each statement. */
  messages?: ReadonlyArray<Message>;
  /** The additional metadata information regarding the execution of the SQL statements. */
  metadata?: Metadata;
  /** The list of results after executing all the SQL statements. */
  results?: ReadonlyArray<QueryResult>;
  /** Contains the error from the database if the SQL execution failed. */
  status?: Status;
}

export const SqlInstancesExecuteSqlResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(Message)),
    metadata: Schema.optional(Metadata),
    results: Schema.optional(Schema.Array(QueryResult)),
    status: Schema.optional(Status),
  }).annotate({ identifier: "SqlInstancesExecuteSqlResponse" });

export interface InstancesAcquireSsrsLeaseRequest {
  /** Contains details about the acquire SSRS lease operation. */
  acquireSsrsLeaseContext?: AcquireSsrsLeaseContext;
}

export const InstancesAcquireSsrsLeaseRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acquireSsrsLeaseContext: Schema.optional(AcquireSsrsLeaseContext),
  }).annotate({ identifier: "InstancesAcquireSsrsLeaseRequest" });

export interface SqlInstancesAcquireSsrsLeaseResponse {
  /** The unique identifier for this operation. */
  operationId?: string;
}

export const SqlInstancesAcquireSsrsLeaseResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlInstancesAcquireSsrsLeaseResponse" });

export interface SqlInstancesReleaseSsrsLeaseResponse {
  /** The operation ID. */
  operationId?: string;
}

export const SqlInstancesReleaseSsrsLeaseResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlInstancesReleaseSsrsLeaseResponse" });

export interface InstancesPreCheckMajorVersionUpgradeRequest {
  /** Required. Contains details about the pre-check major version upgrade operation. */
  preCheckMajorVersionUpgradeContext?: PreCheckMajorVersionUpgradeContext;
}

export const InstancesPreCheckMajorVersionUpgradeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preCheckMajorVersionUpgradeContext: Schema.optional(
      PreCheckMajorVersionUpgradeContext,
    ),
  }).annotate({ identifier: "InstancesPreCheckMajorVersionUpgradeRequest" });

export interface PointInTimeRestoreContext {
  /** The Backup and Disaster Recovery (DR) Service Datasource URI. Format: projects/{project}/locations/{region}/backupVaults/{backupvault}/dataSources/{datasource}. */
  datasource?: string;
  /** Required. The date and time to which you want to restore the instance. */
  pointInTime?: string;
  /** Target instance name. */
  targetInstance?: string;
  /** Optional. The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. */
  privateNetwork?: string;
  /** Optional. The name of the allocated IP range for the internal IP Cloud SQL instance. For example: "google-managed-services-default". If you set this, then Cloud SQL creates the IP address for the cloned instance in the allocated range. This range must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035) standards. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use. */
  allocatedIpRange?: string;
  /** Optional. Point-in-time recovery of an instance to the specified zone. If no zone is specified, then clone to the same primary zone as the source instance. */
  preferredZone?: string;
  /** Optional. Point-in-time recovery of a regional instance in the specified zones. If not specified, clone to the same secondary zone as the source instance. This value cannot be the same as the preferred_zone field. */
  preferredSecondaryZone?: string;
  /** Optional. Specifies the instance settings that will be overridden from the source instance. This field is only applicable for cross project PITRs. */
  targetInstanceSettings?: DatabaseInstance;
  /** Optional. Specifies the instance settings that will be cleared from the source instance. This field is only applicable for cross project PITRs. */
  targetInstanceClearSettingsFieldNames?: ReadonlyArray<string>;
  /** Optional. The region of the target instance where the datasource will be restored. For example: "us-central1". */
  region?: string;
}

export const PointInTimeRestoreContext =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datasource: Schema.optional(Schema.String),
    pointInTime: Schema.optional(Schema.String),
    targetInstance: Schema.optional(Schema.String),
    privateNetwork: Schema.optional(Schema.String),
    allocatedIpRange: Schema.optional(Schema.String),
    preferredZone: Schema.optional(Schema.String),
    preferredSecondaryZone: Schema.optional(Schema.String),
    targetInstanceSettings: Schema.optional(DatabaseInstance),
    targetInstanceClearSettingsFieldNames: Schema.optional(
      Schema.Array(Schema.String),
    ),
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "PointInTimeRestoreContext" });

export interface OperationsListResponse {
  /** This is always `sql#operationsList`. */
  kind?: string;
  /** List of operation resources. */
  items?: ReadonlyArray<Operation>;
  /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
  nextPageToken?: string;
}

export const OperationsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    items: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  },
).annotate({ identifier: "OperationsListResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface SslCertsInsertRequest {
  /** User supplied name. Must be a distinct name from the other certificates for this instance. */
  commonName?: string;
}

export const SslCertsInsertRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commonName: Schema.optional(Schema.String),
}).annotate({ identifier: "SslCertsInsertRequest" });

export interface SslCertDetail {
  /** The public information about the cert. */
  certInfo?: SslCert;
  /** The private key for the client cert, in pem format. Keep private in order to protect your security. */
  certPrivateKey?: string;
}

export const SslCertDetail = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  certInfo: Schema.optional(SslCert),
  certPrivateKey: Schema.optional(Schema.String),
}).annotate({ identifier: "SslCertDetail" });

export interface SslCertsInsertResponse {
  /** This is always `sql#sslCertsInsert`. */
  kind?: string;
  /** The operation to track the ssl certs insert request. */
  operation?: Operation;
  /** The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource. */
  serverCaCert?: SslCert;
  /** The new client certificate and private key. */
  clientCert?: SslCertDetail;
}

export const SslCertsInsertResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    kind: Schema.optional(Schema.String),
    operation: Schema.optional(Operation),
    serverCaCert: Schema.optional(SslCert),
    clientCert: Schema.optional(SslCertDetail),
  },
).annotate({ identifier: "SslCertsInsertResponse" });

export interface SslCertsListResponse {
  /** This is always `sql#sslCertsList`. */
  kind?: string;
  /** List of client certificates for the instance. */
  items?: ReadonlyArray<SslCert>;
}

export const SslCertsListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(SslCert)),
}).annotate({ identifier: "SslCertsListResponse" });

export interface Interval {
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const Interval = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Interval" });

export interface Backup {
  /** Output only. The resource name of the backup. Format: projects/{project}/backups/{backup}. */
  name?: string;
  /** Output only. This is always `sql#backup`. */
  kind?: string;
  /** Output only. The URI of this resource. */
  selfLink?: string;
  /** Output only. The type of this backup. The type can be "AUTOMATED", "ON_DEMAND", or “FINAL”. */
  type?:
    | "SQL_BACKUP_TYPE_UNSPECIFIED"
    | "AUTOMATED"
    | "ON_DEMAND"
    | "FINAL"
    | (string & {});
  /** The description of this backup. */
  description?: string;
  /** The name of the database instance. */
  instance?: string;
  /** The storage location of the backups. The location can be multi-regional. */
  location?: string;
  /** Output only. This output contains the following values: start_time: All database writes up to this time are available. end_time: Any database writes after this time aren't available. */
  backupInterval?: Interval;
  /** Output only. The state of this backup. */
  state?:
    | "SQL_BACKUP_STATE_UNSPECIFIED"
    | "ENQUEUED"
    | "RUNNING"
    | "FAILED"
    | "SUCCESSFUL"
    | "DELETING"
    | "DELETION_FAILED"
    | (string & {});
  /** Output only. Information about why the backup operation fails (for example, when the backup state fails). */
  error?: OperationError;
  /** Output only. This output contains the encryption configuration for a backup and the resource name of the KMS key for disk encryption. */
  kmsKey?: string;
  /** Output only. This output contains the encryption status for a backup and the version of the KMS key that's used to encrypt the Cloud SQL instance. */
  kmsKeyVersion?: string;
  /** Output only. Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT. */
  backupKind?:
    | "SQL_BACKUP_KIND_UNSPECIFIED"
    | "SNAPSHOT"
    | "PHYSICAL"
    | (string & {});
  /** Output only. This output contains a backup time zone. If a Cloud SQL for SQL Server instance has a different time zone from the backup's time zone, then the restore to the instance doesn't happen. */
  timeZone?: string;
  /** Input only. The time-to-live (TTL) interval for this resource (in days). For example: ttlDays:7, means 7 days from the current time. The expiration time can't exceed 365 days from the time that the backup is created. */
  ttlDays?: string;
  /** Backup expiration time. A UTC timestamp of when this resource expired. */
  expiryTime?: string;
  /** Output only. The database version of the instance of at the time this backup was made. */
  databaseVersion?:
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_1"
    | "MYSQL_5_5"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_29"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_0_39"
    | "MYSQL_8_0_40"
    | "MYSQL_8_0_41"
    | "MYSQL_8_0_42"
    | "MYSQL_8_0_43"
    | "MYSQL_8_0_44"
    | "MYSQL_8_0_45"
    | "MYSQL_8_0_46"
    | "MYSQL_8_4"
    | "MYSQL_9_7"
    | "SQLSERVER_2017_STANDARD"
    | "SQLSERVER_2017_ENTERPRISE"
    | "SQLSERVER_2017_EXPRESS"
    | "SQLSERVER_2017_WEB"
    | "POSTGRES_9_6"
    | "POSTGRES_10"
    | "POSTGRES_11"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | "SQLSERVER_2019_STANDARD"
    | "SQLSERVER_2019_ENTERPRISE"
    | "SQLSERVER_2019_EXPRESS"
    | "SQLSERVER_2019_WEB"
    | "SQLSERVER_2022_STANDARD"
    | "SQLSERVER_2022_ENTERPRISE"
    | "SQLSERVER_2022_EXPRESS"
    | "SQLSERVER_2022_WEB"
    | "SQLSERVER_2025_STANDARD"
    | "SQLSERVER_2025_ENTERPRISE"
    | "SQLSERVER_2025_EXPRESS"
    | (string & {});
  /** Output only. The maximum chargeable bytes for the backup. */
  maxChargeableBytes?: string;
  /** Optional. Output only. Timestamp in UTC of when the instance associated with this backup is deleted. */
  instanceDeletionTime?: string;
  /** Optional. Output only. Instance setting of the source instance that's associated with this backup. */
  instanceSettings?: DatabaseInstance;
  /** Output only. The mapping to backup run resource used for IAM validations. */
  backupRun?: string;
  /** Output only. This status indicates whether the backup satisfies PZS. The status is reserved for future use. */
  satisfiesPzs?: boolean;
  /** Output only. This status indicates whether the backup satisfies PZI. The status is reserved for future use. */
  satisfiesPzi?: boolean;
}

export const Backup = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  selfLink: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  instance: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  backupInterval: Schema.optional(Interval),
  state: Schema.optional(Schema.String),
  error: Schema.optional(OperationError),
  kmsKey: Schema.optional(Schema.String),
  kmsKeyVersion: Schema.optional(Schema.String),
  backupKind: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
  ttlDays: Schema.optional(Schema.String),
  expiryTime: Schema.optional(Schema.String),
  databaseVersion: Schema.optional(Schema.String),
  maxChargeableBytes: Schema.optional(Schema.String),
  instanceDeletionTime: Schema.optional(Schema.String),
  instanceSettings: Schema.optional(DatabaseInstance),
  backupRun: Schema.optional(Schema.String),
  satisfiesPzs: Schema.optional(Schema.Boolean),
  satisfiesPzi: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Backup" });

export interface ListBackupsResponse {
  /** A list of backups. */
  backups?: ReadonlyArray<Backup>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, then there aren't subsequent pages. */
  nextPageToken?: string;
  /** If a region isn't unavailable or if an unknown error occurs, then a warning message is returned. */
  warnings?: ReadonlyArray<ApiWarning>;
}

export const ListBackupsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backups: Schema.optional(Schema.Array(Backup)),
  nextPageToken: Schema.optional(Schema.String),
  warnings: Schema.optional(Schema.Array(ApiWarning)),
}).annotate({ identifier: "ListBackupsResponse" });

export interface ConnectPoolNodeConfig {
  /** Output only. The name of the read pool node. Doesn't include the project ID. */
  name?: string;
  /** Output only. Mappings containing IP addresses that can be used to connect to the read pool node. */
  ipAddresses?: ReadonlyArray<IpMapping>;
  /** Output only. The DNS name of the read pool node. */
  dnsName?: string;
  /** Output only. The list of DNS names used by this read pool node. */
  dnsNames?: ReadonlyArray<DnsNameMapping>;
}

export const ConnectPoolNodeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(IpMapping)),
  dnsName: Schema.optional(Schema.String),
  dnsNames: Schema.optional(Schema.Array(DnsNameMapping)),
}).annotate({ identifier: "ConnectPoolNodeConfig" });

export interface ConnectSettings {
  /** This is always `sql#connectSettings`. */
  kind?: string;
  /** SSL configuration. */
  serverCaCert?: SslCert;
  /** The assigned IP addresses for the instance. */
  ipAddresses?: ReadonlyArray<IpMapping>;
  /** The cloud region for the instance. e.g. `us-central1`, `europe-west1`. The region cannot be changed after instance creation. */
  region?: string;
  /** The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. */
  databaseVersion?:
    | "SQL_DATABASE_VERSION_UNSPECIFIED"
    | "MYSQL_5_1"
    | "MYSQL_5_5"
    | "MYSQL_5_6"
    | "MYSQL_5_7"
    | "MYSQL_8_0"
    | "MYSQL_8_0_18"
    | "MYSQL_8_0_26"
    | "MYSQL_8_0_27"
    | "MYSQL_8_0_28"
    | "MYSQL_8_0_29"
    | "MYSQL_8_0_30"
    | "MYSQL_8_0_31"
    | "MYSQL_8_0_32"
    | "MYSQL_8_0_33"
    | "MYSQL_8_0_34"
    | "MYSQL_8_0_35"
    | "MYSQL_8_0_36"
    | "MYSQL_8_0_37"
    | "MYSQL_8_0_39"
    | "MYSQL_8_0_40"
    | "MYSQL_8_0_41"
    | "MYSQL_8_0_42"
    | "MYSQL_8_0_43"
    | "MYSQL_8_0_44"
    | "MYSQL_8_0_45"
    | "MYSQL_8_0_46"
    | "MYSQL_8_4"
    | "MYSQL_9_7"
    | "SQLSERVER_2017_STANDARD"
    | "SQLSERVER_2017_ENTERPRISE"
    | "SQLSERVER_2017_EXPRESS"
    | "SQLSERVER_2017_WEB"
    | "POSTGRES_9_6"
    | "POSTGRES_10"
    | "POSTGRES_11"
    | "POSTGRES_12"
    | "POSTGRES_13"
    | "POSTGRES_14"
    | "POSTGRES_15"
    | "POSTGRES_16"
    | "POSTGRES_17"
    | "POSTGRES_18"
    | "SQLSERVER_2019_STANDARD"
    | "SQLSERVER_2019_ENTERPRISE"
    | "SQLSERVER_2019_EXPRESS"
    | "SQLSERVER_2019_WEB"
    | "SQLSERVER_2022_STANDARD"
    | "SQLSERVER_2022_ENTERPRISE"
    | "SQLSERVER_2022_EXPRESS"
    | "SQLSERVER_2022_WEB"
    | "SQLSERVER_2025_STANDARD"
    | "SQLSERVER_2025_ENTERPRISE"
    | "SQLSERVER_2025_EXPRESS"
    | (string & {});
  /** `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type. */
  backendType?:
    | "SQL_BACKEND_TYPE_UNSPECIFIED"
    | "FIRST_GEN"
    | "SECOND_GEN"
    | "EXTERNAL"
    | (string & {});
  /** Whether PSC connectivity is enabled for this instance. */
  pscEnabled?: boolean;
  /** The dns name of the instance. */
  dnsName?: string;
  /** Specify what type of CA is used for the server certificate. */
  serverCaMode?:
    | "CA_MODE_UNSPECIFIED"
    | "GOOGLE_MANAGED_INTERNAL_CA"
    | "GOOGLE_MANAGED_CAS_CA"
    | "CUSTOMER_MANAGED_CAS_CA"
    | (string & {});
  /** Custom subject alternative names for the server certificate. */
  customSubjectAlternativeNames?: ReadonlyArray<string>;
  /** Output only. The list of DNS names used by this instance. */
  dnsNames?: ReadonlyArray<DnsNameMapping>;
  /** The number of read pool nodes in a read pool. */
  nodeCount?: number;
  /** Output only. Entries containing information about each read pool node of the read pool. */
  nodes?: ReadonlyArray<ConnectPoolNodeConfig>;
  /** Optional. Output only. mdx_protocol_support controls how the client uses metadata exchange when connecting to the instance. The values in the list representing parts of the MDX protocol that are supported by this instance. When the list is empty, the instance does not support MDX, so the client must not send an MDX request. The default is empty. */
  mdxProtocolSupport?: ReadonlyArray<
    "MDX_PROTOCOL_SUPPORT_UNSPECIFIED" | "CLIENT_PROTOCOL_TYPE" | (string & {})
  >;
}

export const ConnectSettings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  serverCaCert: Schema.optional(SslCert),
  ipAddresses: Schema.optional(Schema.Array(IpMapping)),
  region: Schema.optional(Schema.String),
  databaseVersion: Schema.optional(Schema.String),
  backendType: Schema.optional(Schema.String),
  pscEnabled: Schema.optional(Schema.Boolean),
  dnsName: Schema.optional(Schema.String),
  serverCaMode: Schema.optional(Schema.String),
  customSubjectAlternativeNames: Schema.optional(Schema.Array(Schema.String)),
  dnsNames: Schema.optional(Schema.Array(DnsNameMapping)),
  nodeCount: Schema.optional(Schema.Number),
  nodes: Schema.optional(Schema.Array(ConnectPoolNodeConfig)),
  mdxProtocolSupport: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ConnectSettings" });

export interface GenerateEphemeralCertRequest {
  /** PEM encoded public key to include in the signed certificate. */
  public_key?: string;
  /** Optional. Access token to include in the signed certificate. */
  access_token?: string;
  /** Optional. Optional snapshot read timestamp to trade freshness for performance. */
  readTime?: string;
  /** Optional. If set, it will contain the cert valid duration. */
  validDuration?: string;
}

export const GenerateEphemeralCertRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    public_key: Schema.optional(Schema.String),
    access_token: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    validDuration: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateEphemeralCertRequest" });

export interface GenerateEphemeralCertResponse {
  /** Generated cert */
  ephemeralCert?: SslCert;
}

export const GenerateEphemeralCertResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ephemeralCert: Schema.optional(SslCert),
  }).annotate({ identifier: "GenerateEphemeralCertResponse" });

export interface Tier {
  /** An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing). */
  tier?: string;
  /** The maximum RAM usage of this tier in bytes. */
  RAM?: string;
  /** This is always `sql#tier`. */
  kind?: string;
  /** The maximum disk size of this tier in bytes. */
  DiskQuota?: string;
  /** The applicable regions for this tier. */
  region?: ReadonlyArray<string>;
}

export const Tier = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tier: Schema.optional(Schema.String),
  RAM: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  DiskQuota: Schema.optional(Schema.String),
  region: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Tier" });

export interface TiersListResponse {
  /** This is always `sql#tiersList`. */
  kind?: string;
  /** List of tiers. */
  items?: ReadonlyArray<Tier>;
}

export const TiersListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Tier)),
}).annotate({ identifier: "TiersListResponse" });

export interface SqlServerUserDetails {
  /** If the user has been disabled */
  disabled?: boolean;
  /** The server roles for this user */
  serverRoles?: ReadonlyArray<string>;
}

export const SqlServerUserDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled: Schema.optional(Schema.Boolean),
  serverRoles: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "SqlServerUserDetails" });

export interface PasswordStatus {
  /** If true, user does not have login privileges. */
  locked?: boolean;
  /** The expiration time of the current password. */
  passwordExpirationTime?: string;
}

export const PasswordStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locked: Schema.optional(Schema.Boolean),
  passwordExpirationTime: Schema.optional(Schema.String),
}).annotate({ identifier: "PasswordStatus" });

export interface UserPasswordValidationPolicy {
  /** Number of failed login attempts allowed before user get locked. */
  allowedFailedAttempts?: number;
  /** Expiration duration after password is updated. */
  passwordExpirationDuration?: string;
  /** If true, failed login attempts check will be enabled. */
  enableFailedAttemptsCheck?: boolean;
  /** Output only. Read-only password status. */
  status?: PasswordStatus;
  /** If true, the user must specify the current password before changing the password. This flag is supported only for MySQL. */
  enablePasswordVerification?: boolean;
}

export const UserPasswordValidationPolicy =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedFailedAttempts: Schema.optional(Schema.Number),
    passwordExpirationDuration: Schema.optional(Schema.String),
    enableFailedAttemptsCheck: Schema.optional(Schema.Boolean),
    status: Schema.optional(PasswordStatus),
    enablePasswordVerification: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "UserPasswordValidationPolicy" });

export interface User {
  /** This is always `sql#user`. */
  kind?: string;
  /** The password for the user. */
  password?: string;
  /** This field is deprecated and will be removed from a future version of the API. */
  etag?: string;
  /** The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL. */
  name?: string;
  /** Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional. */
  host?: string;
  /** The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL. */
  instance?: string;
  /** The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL. */
  project?: string;
  /** The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type. */
  type?:
    | "BUILT_IN"
    | "CLOUD_IAM_USER"
    | "CLOUD_IAM_SERVICE_ACCOUNT"
    | "CLOUD_IAM_GROUP"
    | "CLOUD_IAM_GROUP_USER"
    | "CLOUD_IAM_GROUP_SERVICE_ACCOUNT"
    | "ENTRAID_USER"
    | (string & {});
  sqlserverUserDetails?: SqlServerUserDetails;
  /** Optional. The full email for an IAM user. For normal database users, this will not be filled. Only applicable to MySQL database users. */
  iamEmail?: string;
  /** User level password validation policy. */
  passwordPolicy?: UserPasswordValidationPolicy;
  /** Dual password status for the user. */
  dualPasswordType?:
    | "DUAL_PASSWORD_TYPE_UNSPECIFIED"
    | "NO_MODIFY_DUAL_PASSWORD"
    | "NO_DUAL_PASSWORD"
    | "DUAL_PASSWORD"
    | (string & {});
  /** Indicates if a group is active or inactive for IAM database authentication. */
  iamStatus?: "IAM_STATUS_UNSPECIFIED" | "INACTIVE" | "ACTIVE" | (string & {});
  /** Optional. Role memberships of the user */
  databaseRoles?: ReadonlyArray<string>;
}

export const User = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  password: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  host: Schema.optional(Schema.String),
  instance: Schema.optional(Schema.String),
  project: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  sqlserverUserDetails: Schema.optional(SqlServerUserDetails),
  iamEmail: Schema.optional(Schema.String),
  passwordPolicy: Schema.optional(UserPasswordValidationPolicy),
  dualPasswordType: Schema.optional(Schema.String),
  iamStatus: Schema.optional(Schema.String),
  databaseRoles: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "User" });

export interface UsersListResponse {
  /** This is always *sql#usersList*. */
  kind?: string;
  /** List of user resources in the instance. */
  items?: ReadonlyArray<User>;
  /** Unused. */
  nextPageToken?: string;
}

export const UsersListResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(User)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "UsersListResponse" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusDetail?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
  cancelRequested?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  statusDetail: Schema.optional(Schema.String),
  cancelRequested: Schema.optional(Schema.Boolean),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

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

export interface DeleteBackupRunsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/backupRuns/list) method. */
  id: string;
}

export const DeleteBackupRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    id: Schema.String.pipe(T.HttpPath("id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}",
    }),
    svc,
  ) as unknown as Schema.Schema<DeleteBackupRunsRequest>;

export type DeleteBackupRunsResponse = Operation;
export const DeleteBackupRunsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteBackupRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the backup taken by a backup run. */
export const deleteBackupRuns: API.OperationMethod<
  DeleteBackupRunsRequest,
  DeleteBackupRunsResponse,
  DeleteBackupRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBackupRunsRequest,
  output: DeleteBackupRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBackupRunsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** The ID of this backup run. */
  id: string;
}

export const GetBackupRunsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  id: Schema.String.pipe(T.HttpPath("id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}",
  }),
  svc,
) as unknown as Schema.Schema<GetBackupRunsRequest>;

export type GetBackupRunsResponse = BackupRun;
export const GetBackupRunsResponse = /*@__PURE__*/ /*#__PURE__*/ BackupRun;

export type GetBackupRunsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a resource containing information about a backup run. */
export const getBackupRuns: API.OperationMethod<
  GetBackupRunsRequest,
  GetBackupRunsResponse,
  GetBackupRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBackupRunsRequest,
  output: GetBackupRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertBackupRunsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: BackupRun;
}

export const InsertBackupRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(BackupRun).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/backupRuns",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<InsertBackupRunsRequest>;

export type InsertBackupRunsResponse = Operation;
export const InsertBackupRunsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InsertBackupRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new backup run on demand. */
export const insertBackupRuns: API.OperationMethod<
  InsertBackupRunsRequest,
  InsertBackupRunsResponse,
  InsertBackupRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertBackupRunsRequest,
  output: InsertBackupRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListBackupRunsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID, or "-" for all instances. This does not include the project ID. */
  instance: string;
  /** Maximum number of backup runs per response. */
  maxResults?: number;
  /** A previously-returned page token representing part of the larger set of results to view. */
  pageToken?: string;
}

export const ListBackupRunsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/backupRuns",
  }),
  svc,
) as unknown as Schema.Schema<ListBackupRunsRequest>;

export type ListBackupRunsResponse = BackupRunsListResponse;
export const ListBackupRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BackupRunsListResponse;

export type ListBackupRunsError = DefaultErrors | NotFound | Forbidden;

/** Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time. */
export const listBackupRuns: API.PaginatedOperationMethod<
  ListBackupRunsRequest,
  ListBackupRunsResponse,
  ListBackupRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBackupRunsRequest,
  output: ListBackupRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface DeleteDatabasesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Name of the database to be deleted in the instance. */
  database: string;
}

export const DeleteDatabasesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    database: Schema.String.pipe(T.HttpPath("database")),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteDatabasesRequest>;

export type DeleteDatabasesResponse = Operation;
export const DeleteDatabasesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a database from a Cloud SQL instance. */
export const deleteDatabases: API.OperationMethod<
  DeleteDatabasesRequest,
  DeleteDatabasesResponse,
  DeleteDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDatabasesRequest,
  output: DeleteDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDatabasesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Name of the database in the instance. */
  database: string;
}

export const GetDatabasesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  database: Schema.String.pipe(T.HttpPath("database")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}",
  }),
  svc,
) as unknown as Schema.Schema<GetDatabasesRequest>;

export type GetDatabasesResponse = Database;
export const GetDatabasesResponse = /*@__PURE__*/ /*#__PURE__*/ Database;

export type GetDatabasesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a resource containing information about a database inside a Cloud SQL instance. */
export const getDatabases: API.OperationMethod<
  GetDatabasesRequest,
  GetDatabasesResponse,
  GetDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDatabasesRequest,
  output: GetDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertDatabasesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: Database;
}

export const InsertDatabasesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(Database).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/databases",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertDatabasesRequest>;

export type InsertDatabasesResponse = Operation;
export const InsertDatabasesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InsertDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation. */
export const insertDatabases: API.OperationMethod<
  InsertDatabasesRequest,
  InsertDatabasesResponse,
  InsertDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertDatabasesRequest,
  output: InsertDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDatabasesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const ListDatabasesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/databases",
  }),
  svc,
) as unknown as Schema.Schema<ListDatabasesRequest>;

export type ListDatabasesResponse = DatabasesListResponse;
export const ListDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatabasesListResponse;

export type ListDatabasesError = DefaultErrors | NotFound | Forbidden;

/** Lists databases in the specified Cloud SQL instance. */
export const listDatabases: API.OperationMethod<
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListDatabasesRequest,
  output: ListDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchDatabasesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Name of the database to be updated in the instance. */
  database: string;
  /** Request body */
  body?: Database;
}

export const PatchDatabasesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  database: Schema.String.pipe(T.HttpPath("database")),
  body: Schema.optional(Database).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchDatabasesRequest>;

export type PatchDatabasesResponse = Operation;
export const PatchDatabasesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics. */
export const patchDatabases: API.OperationMethod<
  PatchDatabasesRequest,
  PatchDatabasesResponse,
  PatchDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDatabasesRequest,
  output: PatchDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateDatabasesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Name of the database to be updated in the instance. */
  database: string;
  /** Request body */
  body?: Database;
}

export const UpdateDatabasesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(Database).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateDatabasesRequest>;

export type UpdateDatabasesResponse = Operation;
export const UpdateDatabasesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a resource containing information about a database inside a Cloud SQL instance. */
export const updateDatabases: API.OperationMethod<
  UpdateDatabasesRequest,
  UpdateDatabasesResponse,
  UpdateDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateDatabasesRequest,
  output: UpdateDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListFlagsRequest {
  /** Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions. */
  databaseVersion?: string;
  /** Optional. Specify the scope of flags to be returned by SqlFlagsListService. Return list of database flags if unspecified. */
  flagScope?:
    | "SQL_FLAG_SCOPE_UNSPECIFIED"
    | "SQL_FLAG_SCOPE_DATABASE"
    | "SQL_FLAG_SCOPE_CONNECTION_POOL"
    | (string & {});
}

export const ListFlagsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseVersion: Schema.optional(Schema.String).pipe(
    T.HttpQuery("databaseVersion"),
  ),
  flagScope: Schema.optional(Schema.String).pipe(T.HttpQuery("flagScope")),
}).pipe(
  T.Http({ method: "GET", path: "sql/v1beta4/flags" }),
  svc,
) as unknown as Schema.Schema<ListFlagsRequest>;

export type ListFlagsResponse = FlagsListResponse;
export const ListFlagsResponse = /*@__PURE__*/ /*#__PURE__*/ FlagsListResponse;

export type ListFlagsError = DefaultErrors | NotFound | Forbidden;

/** Lists all available database flags for Cloud SQL instances. */
export const listFlags: API.OperationMethod<
  ListFlagsRequest,
  ListFlagsResponse,
  ListFlagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListFlagsRequest,
  output: ListFlagsResponse,
  errors: [NotFound, Forbidden],
}));

export interface AddServerCaInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const AddServerCaInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/addServerCa",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddServerCaInstancesRequest>;

export type AddServerCaInstancesResponse = Operation;
export const AddServerCaInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddServerCaInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in. For instances that have enabled Certificate Authority Service (CAS) based server CA, use AddServerCertificate to add a new server certificate. */
export const addServerCaInstances: API.OperationMethod<
  AddServerCaInstancesRequest,
  AddServerCaInstancesResponse,
  AddServerCaInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddServerCaInstancesRequest,
  output: AddServerCaInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddServerCertificateInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const AddServerCertificateInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddServerCertificateInstancesRequest>;

export type AddServerCertificateInstancesResponse = Operation;
export const AddServerCertificateInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddServerCertificateInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. Required to prepare for a certificate rotation. If a server certificate version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one certificate version waiting to be rotated in. For instances not using CAS server CA, use AddServerCa instead. */
export const addServerCertificateInstances: API.OperationMethod<
  AddServerCertificateInstancesRequest,
  AddServerCertificateInstancesResponse,
  AddServerCertificateInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddServerCertificateInstancesRequest,
  output: AddServerCertificateInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddEntraIdCertificateInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const AddEntraIdCertificateInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/addEntraIdCertificate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AddEntraIdCertificateInstancesRequest>;

export type AddEntraIdCertificateInstancesResponse = Operation;
export const AddEntraIdCertificateInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddEntraIdCertificateInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds a new Entra ID certificate for the specified instance. If an Entra ID certificate was previously added but never used in a certificate rotation, this operation replaces that version. */
export const addEntraIdCertificateInstances: API.OperationMethod<
  AddEntraIdCertificateInstancesRequest,
  AddEntraIdCertificateInstancesResponse,
  AddEntraIdCertificateInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddEntraIdCertificateInstancesRequest,
  output: AddEntraIdCertificateInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloneInstancesRequest {
  /** Project ID of the source Cloud SQL instance. */
  project: string;
  /** The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesCloneRequest;
}

export const CloneInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  body: Schema.optional(InstancesCloneRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/clone",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CloneInstancesRequest>;

export type CloneInstancesResponse = Operation;
export const CloneInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CloneInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart. */
export const cloneInstances: API.OperationMethod<
  CloneInstancesRequest,
  CloneInstancesResponse,
  CloneInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CloneInstancesRequest,
  output: CloneInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteInstancesRequest {
  /** Project ID of the project that contains the instance to be deleted. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Flag to opt-in for final backup. By default, it is turned off. */
  enableFinalBackup?: boolean;
  /** Optional. Retention period of the final backup. */
  finalBackupTtlDays?: string;
  /** Optional. Final Backup expiration time. Timestamp in UTC of when this resource is considered expired. */
  finalBackupExpiryTime?: string;
  /** Optional. The description of the final backup. */
  finalBackupDescription?: string;
}

export const DeleteInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    enableFinalBackup: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enableFinalBackup"),
    ),
    finalBackupTtlDays: Schema.optional(Schema.String).pipe(
      T.HttpQuery("finalBackupTtlDays"),
    ),
    finalBackupExpiryTime: Schema.optional(Schema.String).pipe(
      T.HttpQuery("finalBackupExpiryTime"),
    ),
    finalBackupDescription: Schema.optional(Schema.String).pipe(
      T.HttpQuery("finalBackupDescription"),
    ),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "sql/v1beta4/projects/{project}/instances/{instance}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteInstancesRequest>;

export type DeleteInstancesResponse = Operation;
export const DeleteInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Cloud SQL instance. */
export const deleteInstances: API.OperationMethod<
  DeleteInstancesRequest,
  DeleteInstancesResponse,
  DeleteInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteInstancesRequest,
  output: DeleteInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DemoteMasterInstancesRequest {
  /** ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance name. */
  instance: string;
  /** Request body */
  body?: InstancesDemoteMasterRequest;
}

export const DemoteMasterInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesDemoteMasterRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<DemoteMasterInstancesRequest>;

export type DemoteMasterInstancesResponse = Operation;
export const DemoteMasterInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DemoteMasterInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. */
export const demoteMasterInstances: API.OperationMethod<
  DemoteMasterInstancesRequest,
  DemoteMasterInstancesResponse,
  DemoteMasterInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DemoteMasterInstancesRequest,
  output: DemoteMasterInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DemoteInstancesRequest {
  /** Required. The project ID of the project that contains the instance. */
  project: string;
  /** Required. The name of the Cloud SQL instance. */
  instance: string;
  /** Request body */
  body?: InstancesDemoteRequest;
}

export const DemoteInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesDemoteRequest).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/demote",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<DemoteInstancesRequest>;

export type DemoteInstancesResponse = Operation;
export const DemoteInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DemoteInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. */
export const demoteInstances: API.OperationMethod<
  DemoteInstancesRequest,
  DemoteInstancesResponse,
  DemoteInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DemoteInstancesRequest,
  output: DemoteInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportInstancesRequest {
  /** Project ID of the project that contains the instance to be exported. */
  project: string;
  /** The Cloud SQL instance ID. This doesn't include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesExportRequest;
}

export const ExportInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesExportRequest).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/export",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ExportInstancesRequest>;

export type ExportInstancesResponse = Operation;
export const ExportInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ExportInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. */
export const exportInstances: API.OperationMethod<
  ExportInstancesRequest,
  ExportInstancesResponse,
  ExportInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportInstancesRequest,
  output: ExportInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FailoverInstancesRequest {
  /** ID of the project that contains the read replica. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesFailoverRequest;
}

export const FailoverInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesFailoverRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/failover",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FailoverInstancesRequest>;

export type FailoverInstancesResponse = Operation;
export const FailoverInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FailoverInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance. */
export const failoverInstances: API.OperationMethod<
  FailoverInstancesRequest,
  FailoverInstancesResponse,
  FailoverInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FailoverInstancesRequest,
  output: FailoverInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReencryptInstancesRequest {
  /** ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesReencryptRequest;
}

export const ReencryptInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesReencryptRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/reencrypt",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReencryptInstancesRequest>;

export type ReencryptInstancesResponse = Operation;
export const ReencryptInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ReencryptInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reencrypt CMEK instance with latest key version. */
export const reencryptInstances: API.OperationMethod<
  ReencryptInstancesRequest,
  ReencryptInstancesResponse,
  ReencryptInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReencryptInstancesRequest,
  output: ReencryptInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
}

export const GetInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}",
  }),
  svc,
) as unknown as Schema.Schema<GetInstancesRequest>;

export type GetInstancesResponse = DatabaseInstance;
export const GetInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DatabaseInstance;

export type GetInstancesError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a resource containing information about a Cloud SQL instance. */
export const getInstances: API.OperationMethod<
  GetInstancesRequest,
  GetInstancesResponse,
  GetInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInstancesRequest,
  output: GetInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ImportInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesImportRequest;
}

export const ImportInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesImportRequest).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/import",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<ImportInstancesRequest>;

export type ImportInstancesResponse = Operation;
export const ImportInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ImportInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. */
export const importInstances: API.OperationMethod<
  ImportInstancesRequest,
  ImportInstancesResponse,
  ImportInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportInstancesRequest,
  output: ImportInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface InsertInstancesRequest {
  /** Project ID of the project to which the newly created Cloud SQL instances should belong. */
  project: string;
  /** Request body */
  body?: DatabaseInstance;
}

export const InsertInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    body: Schema.optional(DatabaseInstance).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertInstancesRequest>;

export type InsertInstancesResponse = Operation;
export const InsertInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InsertInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Cloud SQL instance. */
export const insertInstances: API.OperationMethod<
  InsertInstancesRequest,
  InsertInstancesResponse,
  InsertInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertInstancesRequest,
  output: InsertInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListInstancesRequest {
  /** Project ID of the project for which to list Cloud SQL instances. */
  project: string;
  /** A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. */
  filter?: string;
  /** The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000. */
  maxResults?: number;
  /** A previously-returned page token representing part of the larger set of results to view. */
  pageToken?: string;
}

export const ListInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "sql/v1beta4/projects/{project}/instances" }),
  svc,
) as unknown as Schema.Schema<ListInstancesRequest>;

export type ListInstancesResponse = InstancesListResponse;
export const ListInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstancesListResponse;

export type ListInstancesError = DefaultErrors | NotFound | Forbidden;

/** Lists instances under a given project. */
export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInstancesRequest,
  output: ListInstancesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface ListServerCasInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const ListServerCasInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/listServerCas",
    }),
    svc,
  ) as unknown as Schema.Schema<ListServerCasInstancesRequest>;

export type ListServerCasInstancesResponse = InstancesListServerCasResponse;
export const ListServerCasInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstancesListServerCasResponse;

export type ListServerCasInstancesError = DefaultErrors | NotFound | Forbidden;

/** Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out. */
export const listServerCasInstances: API.OperationMethod<
  ListServerCasInstancesRequest,
  ListServerCasInstancesResponse,
  ListServerCasInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListServerCasInstancesRequest,
  output: ListServerCasInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListServerCertificatesInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const ListServerCertificatesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/listServerCertificates",
    }),
    svc,
  ) as unknown as Schema.Schema<ListServerCertificatesInstancesRequest>;

export type ListServerCertificatesInstancesResponse =
  InstancesListServerCertificatesResponse;
export const ListServerCertificatesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstancesListServerCertificatesResponse;

export type ListServerCertificatesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all versions of server certificates and certificate authorities (CAs) for the specified instance. There can be up to three sets of certs listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. For instances not using Certificate Authority Service (CAS) server CA, use ListServerCas instead. */
export const ListServerCertificatesInstances: API.OperationMethod<
  ListServerCertificatesInstancesRequest,
  ListServerCertificatesInstancesResponse,
  ListServerCertificatesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListServerCertificatesInstancesRequest,
  output: ListServerCertificatesInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListEntraIdCertificatesInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const ListEntraIdCertificatesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/listEntraIdCertificates",
    }),
    svc,
  ) as unknown as Schema.Schema<ListEntraIdCertificatesInstancesRequest>;

export type ListEntraIdCertificatesInstancesResponse =
  InstancesListEntraIdCertificatesResponse;
export const ListEntraIdCertificatesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ InstancesListEntraIdCertificatesResponse;

export type ListEntraIdCertificatesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all versions of EntraID certificates for the specified instance. There can be up to three sets of certificates listed: the certificate that is currently in use, a future that has been added but not yet used to sign a certificate, and a certificate that has been rotated out. */
export const ListEntraIdCertificatesInstances: API.OperationMethod<
  ListEntraIdCertificatesInstancesRequest,
  ListEntraIdCertificatesInstancesResponse,
  ListEntraIdCertificatesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListEntraIdCertificatesInstancesRequest,
  output: ListEntraIdCertificatesInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: DatabaseInstance;
}

export const PatchInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  body: Schema.optional(DatabaseInstance).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "sql/v1beta4/projects/{project}/instances/{instance}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<PatchInstancesRequest>;

export type PatchInstancesResponse = Operation;
export const PatchInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics. */
export const patchInstances: API.OperationMethod<
  PatchInstancesRequest,
  PatchInstancesResponse,
  PatchInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchInstancesRequest,
  output: PatchInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PromoteReplicaInstancesRequest {
  /** ID of the project that contains the read replica. */
  project: string;
  /** Cloud SQL read replica instance name. */
  instance: string;
  /** Set to true to invoke a replica failover to the DR replica. As part of replica failover, the promote operation attempts to add the original primary instance as a replica of the promoted DR replica when the original primary instance comes back online. If set to false or not specified, then the original primary instance becomes an independent Cloud SQL primary instance. */
  failover?: boolean;
}

export const PromoteReplicaInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    failover: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("failover")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PromoteReplicaInstancesRequest>;

export type PromoteReplicaInstancesResponse = Operation;
export const PromoteReplicaInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PromoteReplicaInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Promotes the read replica instance to be an independent Cloud SQL primary instance. Using this operation might cause your instance to restart. */
export const promoteReplicaInstances: API.OperationMethod<
  PromoteReplicaInstancesRequest,
  PromoteReplicaInstancesResponse,
  PromoteReplicaInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PromoteReplicaInstancesRequest,
  output: PromoteReplicaInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SwitchoverInstancesRequest {
  /** ID of the project that contains the replica. */
  project: string;
  /** Cloud SQL read replica instance name. */
  instance: string;
  /** Optional. (MySQL and PostgreSQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours. */
  dbTimeout?: string;
}

export const SwitchoverInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    dbTimeout: Schema.optional(Schema.String).pipe(T.HttpQuery("dbTimeout")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/switchover",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SwitchoverInstancesRequest>;

export type SwitchoverInstancesResponse = Operation;
export const SwitchoverInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SwitchoverInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Switches over from the primary instance to the DR replica instance. */
export const switchoverInstances: API.OperationMethod<
  SwitchoverInstancesRequest,
  SwitchoverInstancesResponse,
  SwitchoverInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SwitchoverInstancesRequest,
  output: SwitchoverInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResetSslConfigInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Optional. Reset SSL mode to use. */
  mode?:
    | "RESET_SSL_MODE_UNSPECIFIED"
    | "ALL"
    | "SYNC_FROM_PRIMARY"
    | (string & {});
}

export const ResetSslConfigInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    mode: Schema.optional(Schema.String).pipe(T.HttpQuery("mode")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetSslConfigInstancesRequest>;

export type ResetSslConfigInstancesResponse = Operation;
export const ResetSslConfigInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResetSslConfigInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes all client certificates and generates a new server SSL certificate for the instance. */
export const resetSslConfigInstances: API.OperationMethod<
  ResetSslConfigInstancesRequest,
  ResetSslConfigInstancesResponse,
  ResetSslConfigInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetSslConfigInstancesRequest,
  output: ResetSslConfigInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestartInstancesRequest {
  /** Project ID of the project that contains the instance to be restarted. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const RestartInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/restart",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestartInstancesRequest>;

export type RestartInstancesResponse = Operation;
export const RestartInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestartInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restarts a Cloud SQL instance. */
export const restartInstances: API.OperationMethod<
  RestartInstancesRequest,
  RestartInstancesResponse,
  RestartInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartInstancesRequest,
  output: RestartInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreBackupInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesRestoreBackupRequest;
}

export const RestoreBackupInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesRestoreBackupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreBackupInstancesRequest>;

export type RestoreBackupInstancesResponse = Operation;
export const RestoreBackupInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestoreBackupInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart. */
export const restoreBackupInstances: API.OperationMethod<
  RestoreBackupInstancesRequest,
  RestoreBackupInstancesResponse,
  RestoreBackupInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreBackupInstancesRequest,
  output: RestoreBackupInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RotateServerCaInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesRotateServerCaRequest;
}

export const RotateServerCaInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesRotateServerCaRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RotateServerCaInstancesRequest>;

export type RotateServerCaInstancesResponse = Operation;
export const RotateServerCaInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RotateServerCaInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. For instances that have enabled Certificate Authority Service (CAS) based server CA, use RotateServerCertificate to rotate the server certificate. */
export const rotateServerCaInstances: API.OperationMethod<
  RotateServerCaInstancesRequest,
  RotateServerCaInstancesResponse,
  RotateServerCaInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RotateServerCaInstancesRequest,
  output: RotateServerCaInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RotateServerCertificateInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesRotateServerCertificateRequest;
}

export const RotateServerCertificateInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesRotateServerCertificateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RotateServerCertificateInstancesRequest>;

export type RotateServerCertificateInstancesResponse = Operation;
export const RotateServerCertificateInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RotateServerCertificateInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rotates the server certificate version to one previously added with the addServerCertificate method. For instances not using Certificate Authority Service (CAS) server CA, use RotateServerCa instead. */
export const RotateServerCertificateInstances: API.OperationMethod<
  RotateServerCertificateInstancesRequest,
  RotateServerCertificateInstancesResponse,
  RotateServerCertificateInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RotateServerCertificateInstancesRequest,
  output: RotateServerCertificateInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RotateEntraIdCertificateInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesRotateEntraIdCertificateRequest;
}

export const RotateEntraIdCertificateInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesRotateEntraIdCertificateRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/rotateEntraIdCertificate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RotateEntraIdCertificateInstancesRequest>;

export type RotateEntraIdCertificateInstancesResponse = Operation;
export const RotateEntraIdCertificateInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RotateEntraIdCertificateInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rotates the Entra Id certificate version to one previously added with the addEntraIdCertificate method. */
export const RotateEntraIdCertificateInstances: API.OperationMethod<
  RotateEntraIdCertificateInstancesRequest,
  RotateEntraIdCertificateInstancesResponse,
  RotateEntraIdCertificateInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RotateEntraIdCertificateInstancesRequest,
  output: RotateEntraIdCertificateInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartReplicaInstancesRequest {
  /** ID of the project that contains the read replica. */
  project: string;
  /** Cloud SQL read replica instance name. */
  instance: string;
}

export const StartReplicaInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/startReplica",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartReplicaInstancesRequest>;

export type StartReplicaInstancesResponse = Operation;
export const StartReplicaInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartReplicaInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts the replication in the read replica instance. */
export const startReplicaInstances: API.OperationMethod<
  StartReplicaInstancesRequest,
  StartReplicaInstancesResponse,
  StartReplicaInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartReplicaInstancesRequest,
  output: StartReplicaInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StopReplicaInstancesRequest {
  /** ID of the project that contains the read replica. */
  project: string;
  /** Cloud SQL read replica instance name. */
  instance: string;
}

export const StopReplicaInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/stopReplica",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StopReplicaInstancesRequest>;

export type StopReplicaInstancesResponse = Operation;
export const StopReplicaInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopReplicaInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops the replication in the read replica instance. */
export const stopReplicaInstances: API.OperationMethod<
  StopReplicaInstancesRequest,
  StopReplicaInstancesResponse,
  StopReplicaInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopReplicaInstancesRequest,
  output: StopReplicaInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TruncateLogInstancesRequest {
  /** Project ID of the Cloud SQL project. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesTruncateLogRequest;
}

export const TruncateLogInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesTruncateLogRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/truncateLog",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TruncateLogInstancesRequest>;

export type TruncateLogInstancesResponse = Operation;
export const TruncateLogInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type TruncateLogInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Truncate MySQL general and slow query log tables MySQL only. */
export const truncateLogInstances: API.OperationMethod<
  TruncateLogInstancesRequest,
  TruncateLogInstancesResponse,
  TruncateLogInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TruncateLogInstancesRequest,
  output: TruncateLogInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: DatabaseInstance;
}

export const UpdateInstancesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(DatabaseInstance).pipe(T.HttpBody()),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "sql/v1beta4/projects/{project}/instances/{instance}",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateInstancesRequest>;

export type UpdateInstancesResponse = Operation;
export const UpdateInstancesResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart. */
export const updateInstances: API.OperationMethod<
  UpdateInstancesRequest,
  UpdateInstancesResponse,
  UpdateInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateInstancesRequest,
  output: UpdateInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecuteSqlInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Database instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: ExecuteSqlPayload;
}

export const ExecuteSqlInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(ExecuteSqlPayload).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/executeSql",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecuteSqlInstancesRequest>;

export type ExecuteSqlInstancesResponse = SqlInstancesExecuteSqlResponse;
export const ExecuteSqlInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SqlInstancesExecuteSqlResponse;

export type ExecuteSqlInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute SQL statements. */
export const executeSqlInstances: API.OperationMethod<
  ExecuteSqlInstancesRequest,
  ExecuteSqlInstancesResponse,
  ExecuteSqlInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteSqlInstancesRequest,
  output: ExecuteSqlInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AcquireSsrsLeaseInstancesRequest {
  /** Required. ID of the project that contains the instance (Example: project-id). */
  project: string;
  /** Required. Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id). */
  instance: string;
  /** Request body */
  body?: InstancesAcquireSsrsLeaseRequest;
}

export const AcquireSsrsLeaseInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesAcquireSsrsLeaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/acquireSsrsLease",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AcquireSsrsLeaseInstancesRequest>;

export type AcquireSsrsLeaseInstancesResponse =
  SqlInstancesAcquireSsrsLeaseResponse;
export const AcquireSsrsLeaseInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SqlInstancesAcquireSsrsLeaseResponse;

export type AcquireSsrsLeaseInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Acquire a lease for the setup of SQL Server Reporting Services (SSRS). */
export const acquireSsrsLeaseInstances: API.OperationMethod<
  AcquireSsrsLeaseInstancesRequest,
  AcquireSsrsLeaseInstancesResponse,
  AcquireSsrsLeaseInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AcquireSsrsLeaseInstancesRequest,
  output: AcquireSsrsLeaseInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReleaseSsrsLeaseInstancesRequest {
  /** Required. The ID of the project that contains the instance (Example: project-id). */
  project: string;
  /** Required. The Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id). */
  instance: string;
}

export const ReleaseSsrsLeaseInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/releaseSsrsLease",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReleaseSsrsLeaseInstancesRequest>;

export type ReleaseSsrsLeaseInstancesResponse =
  SqlInstancesReleaseSsrsLeaseResponse;
export const ReleaseSsrsLeaseInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SqlInstancesReleaseSsrsLeaseResponse;

export type ReleaseSsrsLeaseInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Release a lease for the setup of SQL Server Reporting Services (SSRS). */
export const releaseSsrsLeaseInstances: API.OperationMethod<
  ReleaseSsrsLeaseInstancesRequest,
  ReleaseSsrsLeaseInstancesResponse,
  ReleaseSsrsLeaseInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReleaseSsrsLeaseInstancesRequest,
  output: ReleaseSsrsLeaseInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PreCheckMajorVersionUpgradeInstancesRequest {
  /** Required. Project ID of the project that contains the instance. */
  project: string;
  /** Required. Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: InstancesPreCheckMajorVersionUpgradeRequest;
}

export const PreCheckMajorVersionUpgradeInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(InstancesPreCheckMajorVersionUpgradeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PreCheckMajorVersionUpgradeInstancesRequest>;

export type PreCheckMajorVersionUpgradeInstancesResponse = Operation;
export const PreCheckMajorVersionUpgradeInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PreCheckMajorVersionUpgradeInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Execute MVU Pre-checks */
export const preCheckMajorVersionUpgradeInstances: API.OperationMethod<
  PreCheckMajorVersionUpgradeInstancesRequest,
  PreCheckMajorVersionUpgradeInstancesResponse,
  PreCheckMajorVersionUpgradeInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PreCheckMajorVersionUpgradeInstancesRequest,
  output: PreCheckMajorVersionUpgradeInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PointInTimeRestoreInstancesRequest {
  /** Required. The parent resource where you created this instance. Format: projects/{project} */
  parent: string;
  /** Request body */
  body?: PointInTimeRestoreContext;
}

export const PointInTimeRestoreInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PointInTimeRestoreContext).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/{+parent}:pointInTimeRestore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PointInTimeRestoreInstancesRequest>;

export type PointInTimeRestoreInstancesResponse = Operation;
export const PointInTimeRestoreInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PointInTimeRestoreInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. */
export const pointInTimeRestoreInstances: API.OperationMethod<
  PointInTimeRestoreInstancesRequest,
  PointInTimeRestoreInstancesResponse,
  PointInTimeRestoreInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PointInTimeRestoreInstancesRequest,
  output: PointInTimeRestoreInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateEphemeralSslCertsRequest {
  /** Project ID of the Cloud SQL project. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: SslCertsCreateEphemeralRequest;
}

export const CreateEphemeralSslCertsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(SslCertsCreateEphemeralRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateEphemeralSslCertsRequest>;

export type CreateEphemeralSslCertsResponse = SslCert;
export const CreateEphemeralSslCertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SslCert;

export type CreateEphemeralSslCertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database. */
export const createEphemeralSslCerts: API.OperationMethod<
  CreateEphemeralSslCertsRequest,
  CreateEphemeralSslCertsResponse,
  CreateEphemeralSslCertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEphemeralSslCertsRequest,
  output: CreateEphemeralSslCertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteSslCertsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Sha1 FingerPrint. */
  sha1Fingerprint: string;
}

export const DeleteSslCertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  sha1Fingerprint: Schema.String.pipe(T.HttpPath("sha1Fingerprint")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}",
  }),
  svc,
) as unknown as Schema.Schema<DeleteSslCertsRequest>;

export type DeleteSslCertsResponse = Operation;
export const DeleteSslCertsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteSslCertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted. */
export const deleteSslCerts: API.OperationMethod<
  DeleteSslCertsRequest,
  DeleteSslCertsResponse,
  DeleteSslCertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSslCertsRequest,
  output: DeleteSslCertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSslCertsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Sha1 FingerPrint. */
  sha1Fingerprint: string;
}

export const GetSslCertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  sha1Fingerprint: Schema.String.pipe(T.HttpPath("sha1Fingerprint")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}",
  }),
  svc,
) as unknown as Schema.Schema<GetSslCertsRequest>;

export type GetSslCertsResponse = SslCert;
export const GetSslCertsResponse = /*@__PURE__*/ /*#__PURE__*/ SslCert;

export type GetSslCertsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation. */
export const getSslCerts: API.OperationMethod<
  GetSslCertsRequest,
  GetSslCertsResponse,
  GetSslCertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSslCertsRequest,
  output: GetSslCertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertSslCertsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: SslCertsInsertRequest;
}

export const InsertSslCertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  body: Schema.optional(SslCertsInsertRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/sslCerts",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertSslCertsRequest>;

export type InsertSslCertsResponse = SslCertsInsertResponse;
export const InsertSslCertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SslCertsInsertResponse;

export type InsertSslCertsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted. */
export const insertSslCerts: API.OperationMethod<
  InsertSslCertsRequest,
  InsertSslCertsResponse,
  InsertSslCertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertSslCertsRequest,
  output: InsertSslCertsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSslCertsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const ListSslCertsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/sslCerts",
  }),
  svc,
) as unknown as Schema.Schema<ListSslCertsRequest>;

export type ListSslCertsResponse = SslCertsListResponse;
export const ListSslCertsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SslCertsListResponse;

export type ListSslCertsError = DefaultErrors | NotFound | Forbidden;

/** Lists all of the current SSL certificates for the instance. */
export const listSslCerts: API.OperationMethod<
  ListSslCertsRequest,
  ListSslCertsResponse,
  ListSslCertsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListSslCertsRequest,
  output: ListSslCertsResponse,
  errors: [NotFound, Forbidden],
}));

export interface RescheduleMaintenanceProjectsInstancesRequest {
  /** ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: SqlInstancesRescheduleMaintenanceRequestBody;
}

export const RescheduleMaintenanceProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(SqlInstancesRescheduleMaintenanceRequestBody).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RescheduleMaintenanceProjectsInstancesRequest>;

export type RescheduleMaintenanceProjectsInstancesResponse = Operation;
export const RescheduleMaintenanceProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RescheduleMaintenanceProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reschedules the maintenance on the given instance. */
export const rescheduleMaintenanceProjectsInstances: API.OperationMethod<
  RescheduleMaintenanceProjectsInstancesRequest,
  RescheduleMaintenanceProjectsInstancesResponse,
  RescheduleMaintenanceProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RescheduleMaintenanceProjectsInstancesRequest,
  output: RescheduleMaintenanceProjectsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface VerifyExternalSyncSettingsProjectsInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: SqlInstancesVerifyExternalSyncSettingsRequest;
}

export const VerifyExternalSyncSettingsProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(SqlInstancesVerifyExternalSyncSettingsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<VerifyExternalSyncSettingsProjectsInstancesRequest>;

export type VerifyExternalSyncSettingsProjectsInstancesResponse =
  SqlInstancesVerifyExternalSyncSettingsResponse;
export const VerifyExternalSyncSettingsProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SqlInstancesVerifyExternalSyncSettingsResponse;

export type VerifyExternalSyncSettingsProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Verify External primary instance external sync settings. */
export const verifyExternalSyncSettingsProjectsInstances: API.OperationMethod<
  VerifyExternalSyncSettingsProjectsInstancesRequest,
  VerifyExternalSyncSettingsProjectsInstancesResponse,
  VerifyExternalSyncSettingsProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: VerifyExternalSyncSettingsProjectsInstancesRequest,
  output: VerifyExternalSyncSettingsProjectsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartExternalSyncProjectsInstancesRequest {
  /** ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: SqlInstancesStartExternalSyncRequest;
}

export const StartExternalSyncProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(SqlInstancesStartExternalSyncRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<StartExternalSyncProjectsInstancesRequest>;

export type StartExternalSyncProjectsInstancesResponse = Operation;
export const StartExternalSyncProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartExternalSyncProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Start External primary instance migration. */
export const startExternalSyncProjectsInstances: API.OperationMethod<
  StartExternalSyncProjectsInstancesRequest,
  StartExternalSyncProjectsInstancesResponse,
  StartExternalSyncProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartExternalSyncProjectsInstancesRequest,
  output: StartExternalSyncProjectsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PerformDiskShrinkProjectsInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: PerformDiskShrinkContext;
}

export const PerformDiskShrinkProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(PerformDiskShrinkContext).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PerformDiskShrinkProjectsInstancesRequest>;

export type PerformDiskShrinkProjectsInstancesResponse = Operation;
export const PerformDiskShrinkProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PerformDiskShrinkProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Perform Disk Shrink on primary instance. */
export const performDiskShrinkProjectsInstances: API.OperationMethod<
  PerformDiskShrinkProjectsInstancesRequest,
  PerformDiskShrinkProjectsInstancesResponse,
  PerformDiskShrinkProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PerformDiskShrinkProjectsInstancesRequest,
  output: PerformDiskShrinkProjectsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetDiskShrinkConfigProjectsInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
}

export const GetDiskShrinkConfigProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig",
    }),
    svc,
  ) as unknown as Schema.Schema<GetDiskShrinkConfigProjectsInstancesRequest>;

export type GetDiskShrinkConfigProjectsInstancesResponse =
  SqlInstancesGetDiskShrinkConfigResponse;
export const GetDiskShrinkConfigProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SqlInstancesGetDiskShrinkConfigResponse;

export type GetDiskShrinkConfigProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get Disk Shrink Config for a given instance. */
export const getDiskShrinkConfigProjectsInstances: API.OperationMethod<
  GetDiskShrinkConfigProjectsInstancesRequest,
  GetDiskShrinkConfigProjectsInstancesResponse,
  GetDiskShrinkConfigProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDiskShrinkConfigProjectsInstancesRequest,
  output: GetDiskShrinkConfigProjectsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResetReplicaSizeProjectsInstancesRequest {
  /** ID of the project that contains the read replica. */
  project: string;
  /** Cloud SQL read replica instance name. */
  instance: string;
  /** Request body */
  body?: SqlInstancesResetReplicaSizeRequest;
}

export const ResetReplicaSizeProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(SqlInstancesResetReplicaSizeRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/resetReplicaSize",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ResetReplicaSizeProjectsInstancesRequest>;

export type ResetReplicaSizeProjectsInstancesResponse = Operation;
export const ResetReplicaSizeProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ResetReplicaSizeProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reset Replica Size to primary instance disk size. */
export const resetReplicaSizeProjectsInstances: API.OperationMethod<
  ResetReplicaSizeProjectsInstancesRequest,
  ResetReplicaSizeProjectsInstancesResponse,
  ResetReplicaSizeProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetReplicaSizeProjectsInstancesRequest,
  output: ResetReplicaSizeProjectsInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetLatestRecoveryTimeProjectsInstancesRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** The timestamp used to identify the time when the source instance is deleted. If this instance is deleted, then you must set the timestamp. */
  sourceInstanceDeletionTime?: string;
}

export const GetLatestRecoveryTimeProjectsInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    sourceInstanceDeletionTime: Schema.optional(Schema.String).pipe(
      T.HttpQuery("sourceInstanceDeletionTime"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "sql/v1beta4/projects/{project}/instances/{instance}/getLatestRecoveryTime",
    }),
    svc,
  ) as unknown as Schema.Schema<GetLatestRecoveryTimeProjectsInstancesRequest>;

export type GetLatestRecoveryTimeProjectsInstancesResponse =
  SqlInstancesGetLatestRecoveryTimeResponse;
export const GetLatestRecoveryTimeProjectsInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SqlInstancesGetLatestRecoveryTimeResponse;

export type GetLatestRecoveryTimeProjectsInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get Latest Recovery Time for a given instance. */
export const getLatestRecoveryTimeProjectsInstances: API.OperationMethod<
  GetLatestRecoveryTimeProjectsInstancesRequest,
  GetLatestRecoveryTimeProjectsInstancesResponse,
  GetLatestRecoveryTimeProjectsInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetLatestRecoveryTimeProjectsInstancesRequest,
  output: GetLatestRecoveryTimeProjectsInstancesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetOperationsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Instance operation ID. */
  operation: string;
}

export const GetOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  operation: Schema.String.pipe(T.HttpPath("operation")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/operations/{operation}",
  }),
  svc,
) as unknown as Schema.Schema<GetOperationsRequest>;

export type GetOperationsResponse = Operation;
export const GetOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetOperationsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves an instance operation that has been performed on an instance. */
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

export interface ListOperationsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance?: string;
  /** Maximum number of operations per response. */
  maxResults?: number;
  /** A previously-returned page token representing part of the larger set of results to view. */
  pageToken?: string;
}

export const ListOperationsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.optional(Schema.String).pipe(T.HttpQuery("instance")),
  maxResults: Schema.optional(Schema.Number).pipe(T.HttpQuery("maxResults")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "sql/v1beta4/projects/{project}/operations" }),
  svc,
) as unknown as Schema.Schema<ListOperationsRequest>;

export type ListOperationsResponse = OperationsListResponse;
export const ListOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OperationsListResponse;

export type ListOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time. */
export const listOperations: API.PaginatedOperationMethod<
  ListOperationsRequest,
  ListOperationsResponse,
  ListOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListOperationsRequest,
  output: ListOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
    items: "items",
  },
}));

export interface CancelOperationsRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Instance operation ID. */
  operation: string;
}

export const CancelOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    operation: Schema.String.pipe(T.HttpPath("operation")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/operations/{operation}/cancel",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CancelOperationsRequest>;

export type CancelOperationsResponse = Empty;
export const CancelOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancels an instance operation that has been performed on an instance. Ordinarily, this method name should be `CancelSqlOperation`. */
export const cancelOperations: API.OperationMethod<
  CancelOperationsRequest,
  CancelOperationsResponse,
  CancelOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelOperationsRequest,
  output: CancelOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateBackupBackupsRequest {
  /** Required. The parent resource where this backup is created. Format: projects/{project} */
  parent: string;
  /** Request body */
  body?: Backup;
}

export const CreateBackupBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/{+parent}/backups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateBackupBackupsRequest>;

export type CreateBackupBackupsResponse = Operation;
export const CreateBackupBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateBackupBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a backup for a Cloud SQL instance. This API can be used only to create on-demand backups. */
export const createBackupBackups: API.OperationMethod<
  CreateBackupBackupsRequest,
  CreateBackupBackupsResponse,
  CreateBackupBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateBackupBackupsRequest,
  output: CreateBackupBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetBackupBackupsRequest {
  /** Required. The name of the backup to retrieve. Format: projects/{project}/backups/{backup} */
  name: string;
}

export const GetBackupBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "sql/v1beta4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetBackupBackupsRequest>;

export type GetBackupBackupsResponse = Backup;
export const GetBackupBackupsResponse = /*@__PURE__*/ /*#__PURE__*/ Backup;

export type GetBackupBackupsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a resource containing information about a backup. */
export const getBackupBackups: API.OperationMethod<
  GetBackupBackupsRequest,
  GetBackupBackupsResponse,
  GetBackupBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetBackupBackupsRequest,
  output: GetBackupBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListBackupsBackupsRequest {
  /** Required. The parent that owns this collection of backups. Format: projects/{project} */
  parent: string;
  /** The maximum number of backups to return per response. The service might return fewer backups than this value. If a value for this parameter isn't specified, then, at most, 500 backups are returned. The maximum value is 2,000. Any values that you set, which are greater than 2,000, are changed to 2,000. */
  pageSize?: number;
  /** A page token, received from a previous `ListBackups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token. */
  pageToken?: string;
  /** Multiple filter queries are separated by spaces. For example, 'instance:abc AND type:FINAL, 'location:us', 'backupInterval.startTime>=1950-01-01T01:01:25.771Z'. You can filter by type, instance, backupInterval.startTime (creation time), or location. */
  filter?: string;
}

export const ListBackupsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "sql/v1beta4/{+parent}/backups" }),
    svc,
  ) as unknown as Schema.Schema<ListBackupsBackupsRequest>;

export type ListBackupsBackupsResponse = ListBackupsResponse;
export const ListBackupsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListBackupsResponse;

export type ListBackupsBackupsError = DefaultErrors | NotFound | Forbidden;

/** Lists all backups associated with the project. */
export const listBackupsBackups: API.PaginatedOperationMethod<
  ListBackupsBackupsRequest,
  ListBackupsBackupsResponse,
  ListBackupsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListBackupsBackupsRequest,
  output: ListBackupsBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateBackupBackupsRequest {
  /** Output only. The resource name of the backup. Format: projects/{project}/backups/{backup}. */
  name: string;
  /** The list of fields that you can update. You can update only the description and retention period of the final backup. */
  updateMask?: string;
  /** Request body */
  body?: Backup;
}

export const UpdateBackupBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Backup).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "sql/v1beta4/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateBackupBackupsRequest>;

export type UpdateBackupBackupsResponse = Operation;
export const UpdateBackupBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateBackupBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the retention period and the description of the backup. You can use this API to update final backups only. */
export const updateBackupBackups: API.OperationMethod<
  UpdateBackupBackupsRequest,
  UpdateBackupBackupsResponse,
  UpdateBackupBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateBackupBackupsRequest,
  output: UpdateBackupBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteBackupBackupsRequest {
  /** Required. The name of the backup to delete. Format: projects/{project}/backups/{backup} */
  name: string;
}

export const DeleteBackupBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "sql/v1beta4/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteBackupBackupsRequest>;

export type DeleteBackupBackupsResponse = Operation;
export const DeleteBackupBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteBackupBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the backup. */
export const deleteBackupBackups: API.OperationMethod<
  DeleteBackupBackupsRequest,
  DeleteBackupBackupsResponse,
  DeleteBackupBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteBackupBackupsRequest,
  output: DeleteBackupBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetConnectRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Optional. Optional snapshot read timestamp to trade freshness for performance. */
  readTime?: string;
}

export const GetConnectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/connectSettings",
  }),
  svc,
) as unknown as Schema.Schema<GetConnectRequest>;

export type GetConnectResponse = ConnectSettings;
export const GetConnectResponse = /*@__PURE__*/ /*#__PURE__*/ ConnectSettings;

export type GetConnectError = DefaultErrors | NotFound | Forbidden;

/** Retrieves connect settings about a Cloud SQL instance. */
export const getConnect: API.OperationMethod<
  GetConnectRequest,
  GetConnectResponse,
  GetConnectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConnectRequest,
  output: GetConnectResponse,
  errors: [NotFound, Forbidden],
}));

export interface GenerateEphemeralCertConnectRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Cloud SQL instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: GenerateEphemeralCertRequest;
}

export const GenerateEphemeralCertConnectRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project: Schema.String.pipe(T.HttpPath("project")),
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(GenerateEphemeralCertRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "sql/v1beta4/projects/{project}/instances/{instance}:generateEphemeralCert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateEphemeralCertConnectRequest>;

export type GenerateEphemeralCertConnectResponse =
  GenerateEphemeralCertResponse;
export const GenerateEphemeralCertConnectResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateEphemeralCertResponse;

export type GenerateEphemeralCertConnectError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database. */
export const generateEphemeralCertConnect: API.OperationMethod<
  GenerateEphemeralCertConnectRequest,
  GenerateEphemeralCertConnectResponse,
  GenerateEphemeralCertConnectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateEphemeralCertConnectRequest,
  output: GenerateEphemeralCertConnectResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListTiersRequest {
  /** Project ID of the project for which to list tiers. */
  project: string;
}

export const ListTiersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
}).pipe(
  T.Http({ method: "GET", path: "sql/v1beta4/projects/{project}/tiers" }),
  svc,
) as unknown as Schema.Schema<ListTiersRequest>;

export type ListTiersResponse = TiersListResponse;
export const ListTiersResponse = /*@__PURE__*/ /*#__PURE__*/ TiersListResponse;

export type ListTiersError = DefaultErrors | NotFound | Forbidden;

/** Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing). */
export const listTiers: API.OperationMethod<
  ListTiersRequest,
  ListTiersResponse,
  ListTiersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListTiersRequest,
  output: ListTiersResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteUsersRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Host of the user in the instance. */
  host?: string;
  /** Name of the user in the instance. */
  name?: string;
}

export const DeleteUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  host: Schema.optional(Schema.String).pipe(T.HttpQuery("host")),
  name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/users",
  }),
  svc,
) as unknown as Schema.Schema<DeleteUsersRequest>;

export type DeleteUsersResponse = Operation;
export const DeleteUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a user from a Cloud SQL instance. */
export const deleteUsers: API.OperationMethod<
  DeleteUsersRequest,
  DeleteUsersResponse,
  DeleteUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteUsersRequest,
  output: DeleteUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetUsersRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** User of the instance. */
  name: string;
  /** Host of a user of the instance. */
  host?: string;
}

export const GetUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  name: Schema.String.pipe(T.HttpPath("name")),
  host: Schema.optional(Schema.String).pipe(T.HttpQuery("host")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/users/{name}",
  }),
  svc,
) as unknown as Schema.Schema<GetUsersRequest>;

export type GetUsersResponse = User;
export const GetUsersResponse = /*@__PURE__*/ /*#__PURE__*/ User;

export type GetUsersError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a resource containing information about a user. */
export const getUsers: API.OperationMethod<
  GetUsersRequest,
  GetUsersResponse,
  GetUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsersRequest,
  output: GetUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface InsertUsersRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Request body */
  body?: User;
}

export const InsertUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/users",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<InsertUsersRequest>;

export type InsertUsersResponse = Operation;
export const InsertUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type InsertUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new user in a Cloud SQL instance. */
export const insertUsers: API.OperationMethod<
  InsertUsersRequest,
  InsertUsersResponse,
  InsertUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertUsersRequest,
  output: InsertUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsersRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
}

export const ListUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
}).pipe(
  T.Http({
    method: "GET",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/users",
  }),
  svc,
) as unknown as Schema.Schema<ListUsersRequest>;

export type ListUsersResponse = UsersListResponse;
export const ListUsersResponse = /*@__PURE__*/ /*#__PURE__*/ UsersListResponse;

export type ListUsersError = DefaultErrors | NotFound | Forbidden;

/** Lists users in the specified Cloud SQL instance. */
export const listUsers: API.OperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListUsersRequest,
  output: ListUsersResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateUsersRequest {
  /** Project ID of the project that contains the instance. */
  project: string;
  /** Database instance ID. This does not include the project ID. */
  instance: string;
  /** Optional. Host of the user in the instance. */
  host?: string;
  /** Name of the user in the instance. */
  name?: string;
  /** Optional. List of database roles to grant to the user. body.database_roles will be ignored for update request. */
  databaseRoles?: string[];
  /** Optional. Specifies whether to revoke existing roles that are not present in the `database_roles` field. If `false` or unset, the database roles specified in `database_roles` are added to the user's existing roles. */
  revokeExistingRoles?: boolean;
  /** Request body */
  body?: User;
}

export const UpdateUsersRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.String.pipe(T.HttpPath("project")),
  instance: Schema.String.pipe(T.HttpPath("instance")),
  host: Schema.optional(Schema.String).pipe(T.HttpQuery("host")),
  name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  databaseRoles: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("databaseRoles"),
  ),
  revokeExistingRoles: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("revokeExistingRoles"),
  ),
  body: Schema.optional(User).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "sql/v1beta4/projects/{project}/instances/{instance}/users",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<UpdateUsersRequest>;

export type UpdateUsersResponse = Operation;
export const UpdateUsersResponse = /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateUsersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an existing user in a Cloud SQL instance. */
export const updateUsers: API.OperationMethod<
  UpdateUsersRequest,
  UpdateUsersResponse,
  UpdateUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateUsersRequest,
  output: UpdateUsersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
