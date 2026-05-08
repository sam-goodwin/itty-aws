// ==========================================================================
// Oracle Database@Google Cloud API (oracledatabase v1)
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
  name: "oracledatabase",
  version: "v1",
  rootUrl: "https://oracledatabase.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface DatabaseManagementConfig {
  /** Output only. The status of the Database Management service. */
  managementState?:
    | "MANAGEMENT_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "DISABLED"
    | "UPDATING"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | "FAILED_UPDATING"
    | (string & {});
  /** Output only. The Database Management type. */
  managementType?:
    | "MANAGEMENT_TYPE_UNSPECIFIED"
    | "BASIC"
    | "ADVANCED"
    | (string & {});
}

export const DatabaseManagementConfig: Schema.Schema<DatabaseManagementConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managementState: Schema.optional(Schema.String),
    managementType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseManagementConfig" });

export interface BackupDestinationDetails {
  /** Optional. The type of the database backup destination. */
  type?:
    | "BACKUP_DESTINATION_TYPE_UNSPECIFIED"
    | "NFS"
    | "RECOVERY_APPLIANCE"
    | "OBJECT_STORE"
    | "LOCAL"
    | "DBRS"
    | (string & {});
}

export const BackupDestinationDetails: Schema.Schema<BackupDestinationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "BackupDestinationDetails" });

export interface DbBackupConfig {
  /** Optional. If set to true, enables automatic backups on the database. */
  autoBackupEnabled?: boolean;
  /** Optional. The window in which the full backup should be performed on the database. If no value is provided, the default is anytime. */
  autoFullBackupWindow?:
    | "BACKUP_WINDOW_UNSPECIFIED"
    | "SLOT_ONE"
    | "SLOT_TWO"
    | "SLOT_THREE"
    | "SLOT_FOUR"
    | "SLOT_FIVE"
    | "SLOT_SIX"
    | "SLOT_SEVEN"
    | "SLOT_EIGHT"
    | "SLOT_NINE"
    | "SLOT_TEN"
    | "SLOT_ELEVEN"
    | "SLOT_TWELVE"
    | (string & {});
  /** Optional. The window in which the incremental backup should be performed on the database. If no value is provided, the default is anytime except the auto full backup day. */
  autoIncrementalBackupWindow?:
    | "BACKUP_WINDOW_UNSPECIFIED"
    | "SLOT_ONE"
    | "SLOT_TWO"
    | "SLOT_THREE"
    | "SLOT_FOUR"
    | "SLOT_FIVE"
    | "SLOT_SIX"
    | "SLOT_SEVEN"
    | "SLOT_EIGHT"
    | "SLOT_NINE"
    | "SLOT_TEN"
    | "SLOT_ELEVEN"
    | "SLOT_TWELVE"
    | (string & {});
  /** Optional. The number of days an automatic backup is retained before being automatically deleted. This value determines the earliest point in time to which a database can be restored. Min: 1, Max: 60. */
  retentionPeriodDays?: number;
  /** Optional. Details of the database backup destinations. */
  backupDestinationDetails?: ReadonlyArray<BackupDestinationDetails>;
  /** Optional. This defines when the backups will be deleted after Database termination. */
  backupDeletionPolicy?:
    | "BACKUP_DELETION_POLICY_UNSPECIFIED"
    | "DELETE_IMMEDIATELY"
    | "DELETE_AFTER_RETENTION_PERIOD"
    | (string & {});
  /** Optional. The day of the week on which the full backup should be performed on the database. If no value is provided, it will default to Sunday. */
  autoFullBackupDay?:
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

export const DbBackupConfig: Schema.Schema<DbBackupConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoBackupEnabled: Schema.optional(Schema.Boolean),
    autoFullBackupWindow: Schema.optional(Schema.String),
    autoIncrementalBackupWindow: Schema.optional(Schema.String),
    retentionPeriodDays: Schema.optional(Schema.Number),
    backupDestinationDetails: Schema.optional(
      Schema.Array(BackupDestinationDetails),
    ),
    backupDeletionPolicy: Schema.optional(Schema.String),
    autoFullBackupDay: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbBackupConfig" });

export interface DatabaseProperties {
  /** Output only. State of the Database. */
  state?:
    | "DATABASE_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "BACKUP_IN_PROGRESS"
    | "UPGRADING"
    | "CONVERTING"
    | "TERMINATING"
    | "TERMINATED"
    | "RESTORE_FAILED"
    | "FAILED"
    | (string & {});
  /** Output only. The Database Management config. */
  databaseManagementConfig?: DatabaseManagementConfig;
  /** Required. The Oracle Database version. */
  dbVersion?: string;
  /** Optional. Backup options for the Database. */
  dbBackupConfig?: DbBackupConfig;
}

export const DatabaseProperties: Schema.Schema<DatabaseProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    databaseManagementConfig: Schema.optional(DatabaseManagementConfig),
    dbVersion: Schema.optional(Schema.String),
    dbBackupConfig: Schema.optional(DbBackupConfig),
  }).annotate({ identifier: "DatabaseProperties" });

export interface Database {
  /** Identifier. The name of the Database resource in the following format: projects/{project}/locations/{region}/databases/{database} */
  name?: string;
  /** Optional. The character set for the database. The default is AL32UTF8. */
  characterSet?: string;
  /** Optional. The name of the DbHome resource associated with the Database. */
  dbHomeName?: string;
  /** Output only. The date and time that the Database was created. */
  createTime?: string;
  /** Optional. The database name. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted. */
  dbName?: string;
  /** Output only. The GCP Oracle zone where the Database is created. */
  gcpOracleZone?: string;
  /** Optional. The DB_UNIQUE_NAME of the Oracle Database being backed up. */
  dbUniqueName?: string;
  /** Optional. The ID of the pluggable database associated with the Database. The ID must be unique within the project and location. */
  pluggableDatabaseId?: string;
  /** Optional. The pluggable database associated with the Database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. */
  pluggableDatabaseName?: string;
  /** Optional. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPasswordSecretVersion?: string;
  /** Output only. The Status of Operations Insights for this Database. */
  opsInsightsStatus?:
    | "OPERATIONS_INSIGHTS_STATUS_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Optional. The database ID of the Database. */
  databaseId?: string;
  /** Optional. The national character set for the database. The default is AL16UTF16. */
  ncharacterSet?: string;
  /** Optional. The TDE wallet password for the database. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated. */
  tdeWalletPassword?: string;
  /** Optional. The resource name of a secret version in Secret Manager which contains the TDE wallet password for the database. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `tde_wallet_password_secret_version` or `tde_wallet_password` can be populated. */
  tdeWalletPasswordSecretVersion?: string;
  /** Optional. The properties of the Database. */
  properties?: DatabaseProperties;
  /** Optional. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPassword?: string;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
}

export const Database: Schema.Schema<Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    characterSet: Schema.optional(Schema.String),
    dbHomeName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    dbName: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    dbUniqueName: Schema.optional(Schema.String),
    pluggableDatabaseId: Schema.optional(Schema.String),
    pluggableDatabaseName: Schema.optional(Schema.String),
    adminPasswordSecretVersion: Schema.optional(Schema.String),
    opsInsightsStatus: Schema.optional(Schema.String),
    databaseId: Schema.optional(Schema.String),
    ncharacterSet: Schema.optional(Schema.String),
    tdeWalletPassword: Schema.optional(Schema.String),
    tdeWalletPasswordSecretVersion: Schema.optional(Schema.String),
    properties: Schema.optional(DatabaseProperties),
    adminPassword: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "Database" });

export interface ListDatabasesResponse {
  /** The list of Databases. */
  databases?: ReadonlyArray<Database>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDatabasesResponse: Schema.Schema<ListDatabasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databases: Schema.optional(Schema.Array(Database)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDatabasesResponse" });

export interface CloudAccountDetails {
  /** Output only. URL to link an existing account. */
  linkExistingAccountUri?: string;
  /** Output only. OCI account home region. */
  cloudAccountHomeRegion?: string;
  /** Output only. OCI account name. */
  cloudAccount?: string;
  /** Output only. URL to create a new account and link. */
  accountCreationUri?: string;
}

export const CloudAccountDetails: Schema.Schema<CloudAccountDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkExistingAccountUri: Schema.optional(Schema.String),
    cloudAccountHomeRegion: Schema.optional(Schema.String),
    cloudAccount: Schema.optional(Schema.String),
    accountCreationUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudAccountDetails" });

export interface Entitlement {
  /** Details of the OCI Cloud Account. */
  cloudAccountDetails?: CloudAccountDetails;
  /** Output only. Entitlement State. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACCOUNT_NOT_LINKED"
    | "ACCOUNT_NOT_ACTIVE"
    | "ACTIVE"
    | "ACCOUNT_SUSPENDED"
    | "NOT_APPROVED_IN_PRIVATE_MARKETPLACE"
    | (string & {});
  /** Output only. Google Cloud Marketplace order ID (aka entitlement ID) */
  entitlementId?: string;
  /** Identifier. The name of the Entitlement resource with the format: projects/{project}/locations/{region}/entitlements/{entitlement} */
  name?: string;
}

export const Entitlement: Schema.Schema<Entitlement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudAccountDetails: Schema.optional(CloudAccountDetails),
    state: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Entitlement" });

export interface AutonomousDatabaseConnectionUrls {
  /** Output only. Oracle Application Express (APEX) URL. */
  apexUri?: string;
  /** Output only. The URL of the MongoDB API for the Autonomous Database. */
  mongoDbUri?: string;
  /** Output only. The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database. */
  ordsUri?: string;
  /** Output only. The URL of the Graph Studio for the Autonomous Database. */
  graphStudioUri?: string;
  /** Output only. The URL of Machine Learning user management the Autonomous Database. */
  machineLearningUserManagementUri?: string;
  /** Output only. The URL of the Oracle SQL Developer Web for the Autonomous Database. */
  sqlDevWebUri?: string;
  /** Output only. The URL of the Database Transforms for the Autonomous Database. */
  databaseTransformsUri?: string;
  /** Output only. The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database. */
  machineLearningNotebookUri?: string;
}

export const AutonomousDatabaseConnectionUrls: Schema.Schema<AutonomousDatabaseConnectionUrls> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apexUri: Schema.optional(Schema.String),
    mongoDbUri: Schema.optional(Schema.String),
    ordsUri: Schema.optional(Schema.String),
    graphStudioUri: Schema.optional(Schema.String),
    machineLearningUserManagementUri: Schema.optional(Schema.String),
    sqlDevWebUri: Schema.optional(Schema.String),
    databaseTransformsUri: Schema.optional(Schema.String),
    machineLearningNotebookUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseConnectionUrls" });

export interface CustomerContact {
  /** Required. The email address used by Oracle to send notifications regarding databases and infrastructure. */
  email?: string;
}

export const CustomerContact: Schema.Schema<CustomerContact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomerContact" });

export interface MaintenanceWindow {
  /** Optional. Months during the year when maintenance should be performed. */
  months?: ReadonlyArray<
    | "MONTH_UNSPECIFIED"
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER"
    | (string & {})
  >;
  /** Optional. Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week. */
  weeksOfMonth?: ReadonlyArray<number>;
  /** Optional. Cloud CloudExadataInfrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING. */
  patchingMode?:
    | "PATCHING_MODE_UNSPECIFIED"
    | "ROLLING"
    | "NON_ROLLING"
    | (string & {});
  /** Optional. Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive). */
  customActionTimeoutMins?: number;
  /** Optional. Days during the week when maintenance should be performed. */
  daysOfWeek?: ReadonlyArray<
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
  /** Optional. The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are: 0 - represents time slot 0:00 - 3:59 UTC 4 - represents time slot 4:00 - 7:59 UTC 8 - represents time slot 8:00 - 11:59 UTC 12 - represents time slot 12:00 - 15:59 UTC 16 - represents time slot 16:00 - 19:59 UTC 20 - represents time slot 20:00 - 23:59 UTC */
  hoursOfDay?: ReadonlyArray<number>;
  /** Optional. If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. */
  isCustomActionTimeoutEnabled?: boolean;
  /** Optional. The maintenance window scheduling preference. */
  preference?:
    | "MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED"
    | "CUSTOM_PREFERENCE"
    | "NO_PREFERENCE"
    | (string & {});
  /** Optional. Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4. */
  leadTimeWeek?: number;
}

export const MaintenanceWindow: Schema.Schema<MaintenanceWindow> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    months: Schema.optional(Schema.Array(Schema.String)),
    weeksOfMonth: Schema.optional(Schema.Array(Schema.Number)),
    patchingMode: Schema.optional(Schema.String),
    customActionTimeoutMins: Schema.optional(Schema.Number),
    daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
    hoursOfDay: Schema.optional(Schema.Array(Schema.Number)),
    isCustomActionTimeoutEnabled: Schema.optional(Schema.Boolean),
    preference: Schema.optional(Schema.String),
    leadTimeWeek: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MaintenanceWindow" });

export interface CloudExadataInfrastructureProperties {
  /** Optional. The number of compute servers for the Exadata Infrastructure. */
  computeCount?: number;
  /** Output only. The total available DATA disk group size. */
  maxDataStorageTb?: number;
  /** Output only. The total number of CPU cores available. */
  maxCpuCount?: number;
  /** Output only. The software version of the database servers (dom0) in the Exadata Infrastructure. */
  dbServerVersion?: string;
  /** Output only. The OCID of the next maintenance run. */
  nextMaintenanceRunId?: string;
  /** Output only. The storage server type of the Exadata Infrastructure. */
  storageServerType?: string;
  /** Output only. The total local node storage available in GBs. */
  maxDbNodeStorageSizeGb?: number;
  /** Optional. The list of customer contacts. */
  customerContacts?: ReadonlyArray<CustomerContact>;
  /** Output only. The compute model of the Exadata Infrastructure. */
  computeModel?:
    | "COMPUTE_MODEL_UNSPECIFIED"
    | "COMPUTE_MODEL_ECPU"
    | "COMPUTE_MODEL_OCPU"
    | (string & {});
  /** Output only. The memory allocated in GBs. */
  memorySizeGb?: number;
  /** Output only. Size, in terabytes, of the DATA disk group. */
  dataStorageSizeTb?: number;
  /** Output only. The time when the next maintenance run will occur. */
  nextMaintenanceRunTime?: string;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUrl?: string;
  /** Required. The shape of the Exadata Infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance. */
  shape?: string;
  /** Output only. The time when the next security maintenance run will occur. */
  nextSecurityMaintenanceRunTime?: string;
  /** Output only. The current lifecycle state of the Exadata Infrastructure. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MAINTENANCE_IN_PROGRESS"
    | (string & {});
  /** Output only. The database server type of the Exadata Infrastructure. */
  databaseServerType?: string;
  /** Output only. The number of enabled CPU cores. */
  cpuCount?: number;
  /** Optional. Maintenance window for repair. */
  maintenanceWindow?: MaintenanceWindow;
  /** Optional. The number of Cloud Exadata storage servers for the Exadata Infrastructure. */
  storageCount?: number;
  /** Output only. The requested number of additional storage servers activated for the Exadata Infrastructure. */
  activatedStorageCount?: number;
  /** Output only. The monthly software version of the database servers (dom0) in the Exadata Infrastructure. Example: 20.1.15 */
  monthlyDbServerVersion?: string;
  /** Output only. The software version of the storage servers (cells) in the Exadata Infrastructure. */
  storageServerVersion?: string;
  /** Output only. The monthly software version of the storage servers (cells) in the Exadata Infrastructure. Example: 20.1.15 */
  monthlyStorageServerVersion?: string;
  /** Output only. The available storage can be allocated to the Exadata Infrastructure resource, in gigabytes (GB). */
  availableStorageSizeGb?: number;
  /** Optional. The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). */
  totalStorageSizeGb?: number;
  /** Output only. OCID of created infra. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle */
  ocid?: string;
  /** Output only. The total memory available in GBs. */
  maxMemoryGb?: number;
  /** Output only. The local node storage allocated in GBs. */
  dbNodeStorageSizeGb?: number;
  /** Output only. The requested number of additional storage servers for the Exadata Infrastructure. */
  additionalStorageCount?: number;
}

export const CloudExadataInfrastructureProperties: Schema.Schema<CloudExadataInfrastructureProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeCount: Schema.optional(Schema.Number),
    maxDataStorageTb: Schema.optional(Schema.Number),
    maxCpuCount: Schema.optional(Schema.Number),
    dbServerVersion: Schema.optional(Schema.String),
    nextMaintenanceRunId: Schema.optional(Schema.String),
    storageServerType: Schema.optional(Schema.String),
    maxDbNodeStorageSizeGb: Schema.optional(Schema.Number),
    customerContacts: Schema.optional(Schema.Array(CustomerContact)),
    computeModel: Schema.optional(Schema.String),
    memorySizeGb: Schema.optional(Schema.Number),
    dataStorageSizeTb: Schema.optional(Schema.Number),
    nextMaintenanceRunTime: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    shape: Schema.optional(Schema.String),
    nextSecurityMaintenanceRunTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    databaseServerType: Schema.optional(Schema.String),
    cpuCount: Schema.optional(Schema.Number),
    maintenanceWindow: Schema.optional(MaintenanceWindow),
    storageCount: Schema.optional(Schema.Number),
    activatedStorageCount: Schema.optional(Schema.Number),
    monthlyDbServerVersion: Schema.optional(Schema.String),
    storageServerVersion: Schema.optional(Schema.String),
    monthlyStorageServerVersion: Schema.optional(Schema.String),
    availableStorageSizeGb: Schema.optional(Schema.Number),
    totalStorageSizeGb: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    maxMemoryGb: Schema.optional(Schema.Number),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    additionalStorageCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudExadataInfrastructureProperties" });

export interface CloudExadataInfrastructure {
  /** Optional. The GCP Oracle zone where Oracle Exadata Infrastructure is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Optional. Labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Optional. Various properties of the infra. */
  properties?: CloudExadataInfrastructureProperties;
  /** Output only. The date and time that the Exadata Infrastructure was created. */
  createTime?: string;
  /** Output only. Entitlement ID of the private offer against which this infrastructure resource is provisioned. */
  entitlementId?: string;
  /** Identifier. The name of the Exadata Infrastructure resource with the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_exadata_infrastructure} */
  name?: string;
  /** Optional. User friendly name for this resource. */
  displayName?: string;
}

export const CloudExadataInfrastructure: Schema.Schema<CloudExadataInfrastructure> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpOracleZone: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(CloudExadataInfrastructureProperties),
    createTime: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudExadataInfrastructure" });

export interface PluggableDatabaseConnectionStrings {
  /** Optional. The default connection string to use to connect to the pluggable database. */
  pdbDefault?: string;
  /** Optional. The default connection string to use to connect to the pluggable database using IP. */
  pdbIpDefault?: string;
  /** Optional. All connection strings to use to connect to the pluggable database. */
  allConnectionStrings?: Record<string, string>;
}

export const PluggableDatabaseConnectionStrings: Schema.Schema<PluggableDatabaseConnectionStrings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pdbDefault: Schema.optional(Schema.String),
    pdbIpDefault: Schema.optional(Schema.String),
    allConnectionStrings: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
  }).annotate({ identifier: "PluggableDatabaseConnectionStrings" });

export interface PluggableDatabaseNodeLevelDetails {
  /** Required. The OCID of the Pluggable Database. */
  pluggableDatabaseId?: string;
  /** Required. The Node name of the Database home. */
  nodeName?: string;
  /** Required. The mode that the pluggable database is in to open it. */
  openMode?:
    | "PLUGGABLE_DATABASE_OPEN_MODE_UNSPECIFIED"
    | "READ_ONLY"
    | "READ_WRITE"
    | "MOUNTED"
    | "MIGRATE"
    | (string & {});
}

export const PluggableDatabaseNodeLevelDetails: Schema.Schema<PluggableDatabaseNodeLevelDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluggableDatabaseId: Schema.optional(Schema.String),
    nodeName: Schema.optional(Schema.String),
    openMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "PluggableDatabaseNodeLevelDetails" });

export interface DefinedTagValue {
  /** The tags within the namespace. */
  tags?: Record<string, string>;
}

export const DefinedTagValue: Schema.Schema<DefinedTagValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "DefinedTagValue" });

export interface PluggableDatabaseProperties {
  /** Output only. The current state of the pluggable database. */
  lifecycleState?:
    | "PLUGGABLE_DATABASE_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "TERMINATING"
    | "TERMINATED"
    | "UPDATING"
    | "FAILED"
    | "RELOCATING"
    | "RELOCATED"
    | "REFRESHING"
    | "RESTORE_IN_PROGRESS"
    | "RESTORE_FAILED"
    | "BACKUP_IN_PROGRESS"
    | "DISABLED"
    | (string & {});
  /** Output only. The status of Operations Insights for this Database. */
  operationsInsightsState?:
    | "OPERATIONS_INSIGHTS_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Output only. Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
  /** Optional. Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. */
  freeformTags?: Record<string, string>;
  /** Output only. The OCID of the pluggable database. */
  ocid?: string;
  /** Optional. The Connection strings used to connect to the Oracle Database. */
  connectionStrings?: PluggableDatabaseConnectionStrings;
  /** Optional. Pluggable Database Node Level Details */
  pdbNodeLevelDetails?: ReadonlyArray<PluggableDatabaseNodeLevelDetails>;
  /** Required. The database name. */
  pdbName?: string;
  /** Optional. Defined tags for this resource. Each key is predefined and scoped to a namespace. */
  definedTags?: Record<string, DefinedTagValue>;
  /** Required. The OCID of the compartment. */
  compartmentId?: string;
  /** Output only. The configuration of the Database Management service. */
  databaseManagementConfig?: DatabaseManagementConfig;
  /** Required. The OCID of the CDB. */
  containerDatabaseOcid?: string;
  /** Optional. The restricted mode of the pluggable database. If a pluggable database is opened in restricted mode, the user needs both create a session and have restricted session privileges to connect to it. */
  isRestricted?: boolean;
}

export const PluggableDatabaseProperties: Schema.Schema<PluggableDatabaseProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lifecycleState: Schema.optional(Schema.String),
    operationsInsightsState: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
    freeformTags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    ocid: Schema.optional(Schema.String),
    connectionStrings: Schema.optional(PluggableDatabaseConnectionStrings),
    pdbNodeLevelDetails: Schema.optional(
      Schema.Array(PluggableDatabaseNodeLevelDetails),
    ),
    pdbName: Schema.optional(Schema.String),
    definedTags: Schema.optional(Schema.Record(Schema.String, DefinedTagValue)),
    compartmentId: Schema.optional(Schema.String),
    databaseManagementConfig: Schema.optional(DatabaseManagementConfig),
    containerDatabaseOcid: Schema.optional(Schema.String),
    isRestricted: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PluggableDatabaseProperties" });

export interface PluggableDatabase {
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Optional. The properties of the PluggableDatabase. */
  properties?: PluggableDatabaseProperties;
  /** Output only. The date and time that the PluggableDatabase was created. */
  createTime?: string;
  /** Identifier. The name of the PluggableDatabase resource in the following format: projects/{project}/locations/{region}/pluggableDatabases/{pluggable_database} */
  name?: string;
}

export const PluggableDatabase: Schema.Schema<PluggableDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ociUrl: Schema.optional(Schema.String),
    properties: Schema.optional(PluggableDatabaseProperties),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PluggableDatabase" });

export interface AutonomousDatabaseBackupProperties {
  /** Output only. Indicates if the backup is long term backup. */
  isLongTermBackup?: boolean;
  /** Optional. Retention period in days for the backup. */
  retentionPeriodDays?: number;
  /** Output only. Indicates if the backup can be used to restore the Autonomous Database. */
  isRestorable?: boolean;
  /** Optional. The wallet name for Oracle Key Vault. */
  keyStoreWallet?: string;
  /** Output only. The backup size in terabytes. */
  sizeTb?: number;
  /** Output only. The date and time the backup started. */
  startTime?: string;
  /** Output only. Timestamp until when the backup will be available. */
  availableTillTime?: string;
  /** Output only. The date and time the backup completed. */
  endTime?: string;
  /** Output only. Indicates if the backup is automatic or user initiated. */
  isAutomaticBackup?: boolean;
  /** Optional. The OCID of the vault. */
  vaultId?: string;
  /** Output only. The OCID of the compartment. */
  compartmentId?: string;
  /** Output only. The quantity of data in the database, in terabytes. */
  databaseSizeTb?: number;
  /** Output only. The type of the backup. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "INCREMENTAL"
    | "FULL"
    | "LONG_TERM"
    | (string & {});
  /** Optional. The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous Database Serverless does not use key versions, hence is not applicable for Autonomous Database Serverless instances. */
  kmsKeyVersionId?: string;
  /** Output only. Additional information about the current lifecycle state. */
  lifecycleDetails?: string;
  /** Optional. The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations. */
  kmsKeyId?: string;
  /** Output only. The lifecycle state of the backup. */
  lifecycleState?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | "UPDATING"
    | (string & {});
  /** Output only. A valid Oracle Database version for Autonomous Database. */
  dbVersion?: string;
  /** Optional. The OCID of the key store of Oracle Vault. */
  keyStoreId?: string;
  /** Output only. OCID of the Autonomous Database backup. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle */
  ocid?: string;
}

export const AutonomousDatabaseBackupProperties: Schema.Schema<AutonomousDatabaseBackupProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isLongTermBackup: Schema.optional(Schema.Boolean),
    retentionPeriodDays: Schema.optional(Schema.Number),
    isRestorable: Schema.optional(Schema.Boolean),
    keyStoreWallet: Schema.optional(Schema.String),
    sizeTb: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    availableTillTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    isAutomaticBackup: Schema.optional(Schema.Boolean),
    vaultId: Schema.optional(Schema.String),
    compartmentId: Schema.optional(Schema.String),
    databaseSizeTb: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    kmsKeyVersionId: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
    kmsKeyId: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    dbVersion: Schema.optional(Schema.String),
    keyStoreId: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseBackupProperties" });

export interface AutonomousDatabaseBackup {
  /** Optional. labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Identifier. The name of the Autonomous Database Backup resource with the format: projects/{project}/locations/{region}/autonomousDatabaseBackups/{autonomous_database_backup} */
  name?: string;
  /** Required. The name of the Autonomous Database resource for which the backup is being created. Format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database} */
  autonomousDatabase?: string;
  /** Optional. User friendly name for the Backup. The name does not have to be unique. */
  displayName?: string;
  /** Optional. Various properties of the backup. */
  properties?: AutonomousDatabaseBackupProperties;
}

export const AutonomousDatabaseBackup: Schema.Schema<AutonomousDatabaseBackup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    autonomousDatabase: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    properties: Schema.optional(AutonomousDatabaseBackupProperties),
  }).annotate({ identifier: "AutonomousDatabaseBackup" });

export interface MinorVersion {
  /** Optional. The ID of the Grid Image. */
  gridImageId?: string;
  /** Identifier. The name of the MinorVersion resource with the format: projects/{project}/locations/{region}/giVersions/{gi_version}/minorVersions/{minor_version} */
  name?: string;
  /** Optional. The valid Oracle grid infrastructure software version. */
  version?: string;
}

export const MinorVersion: Schema.Schema<MinorVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gridImageId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "MinorVersion" });

export interface DatabaseCharacterSet {
  /** Identifier. The name of the Database Character Set resource in the following format: projects/{project}/locations/{region}/databaseCharacterSets/{database_character_set} */
  name?: string;
  /** Output only. The character set name for the Database which is the ID in the resource name. */
  characterSet?: string;
  /** Output only. The character set type for the Database. */
  characterSetType?:
    | "CHARACTER_SET_TYPE_UNSPECIFIED"
    | "DATABASE"
    | "NATIONAL"
    | (string & {});
}

export const DatabaseCharacterSet: Schema.Schema<DatabaseCharacterSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    characterSet: Schema.optional(Schema.String),
    characterSetType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseCharacterSet" });

export interface ListDatabaseCharacterSetsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of DatabaseCharacterSets. */
  databaseCharacterSets?: ReadonlyArray<DatabaseCharacterSet>;
}

export const ListDatabaseCharacterSetsResponse: Schema.Schema<ListDatabaseCharacterSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    databaseCharacterSets: Schema.optional(Schema.Array(DatabaseCharacterSet)),
  }).annotate({ identifier: "ListDatabaseCharacterSetsResponse" });

export interface TimeZone {
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
}

export const TimeZone: Schema.Schema<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface ExascaleDbStorageDetails {
  /** Output only. The available storage capacity for the ExascaleDbStorageVault, in gigabytes (GB). */
  availableSizeGbs?: number;
  /** Required. The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). */
  totalSizeGbs?: number;
}

export const ExascaleDbStorageDetails: Schema.Schema<ExascaleDbStorageDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableSizeGbs: Schema.optional(Schema.Number),
    totalSizeGbs: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExascaleDbStorageDetails" });

export interface ExascaleDbStorageVaultProperties {
  /** Output only. The list of VM cluster OCIDs associated with the ExascaleDbStorageVault. */
  vmClusterIds?: ReadonlyArray<string>;
  /** Output only. The number of VM clusters associated with the ExascaleDbStorageVault. */
  vmClusterCount?: number;
  /** Optional. The description of the ExascaleDbStorageVault. */
  description?: string;
  /** Output only. The shape attributes of the VM clusters attached to the ExascaleDbStorageVault. */
  attachedShapeAttributes?: ReadonlyArray<
    | "SHAPE_ATTRIBUTE_UNSPECIFIED"
    | "SMART_STORAGE"
    | "BLOCK_STORAGE"
    | (string & {})
  >;
  /** Output only. The OCID for the ExascaleDbStorageVault. */
  ocid?: string;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUri?: string;
  /** Output only. The time zone of the ExascaleDbStorageVault. */
  timeZone?: TimeZone;
  /** Optional. The size of additional flash cache in percentage of high capacity database storage. */
  additionalFlashCachePercent?: number;
  /** Output only. The state of the ExascaleDbStorageVault. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | (string & {});
  /** Output only. The shape attributes available for the VM clusters to be attached to the ExascaleDbStorageVault. */
  availableShapeAttributes?: ReadonlyArray<
    | "SHAPE_ATTRIBUTE_UNSPECIFIED"
    | "SMART_STORAGE"
    | "BLOCK_STORAGE"
    | (string & {})
  >;
  /** Required. The storage details of the ExascaleDbStorageVault. */
  exascaleDbStorageDetails?: ExascaleDbStorageDetails;
}

export const ExascaleDbStorageVaultProperties: Schema.Schema<ExascaleDbStorageVaultProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmClusterIds: Schema.optional(Schema.Array(Schema.String)),
    vmClusterCount: Schema.optional(Schema.Number),
    description: Schema.optional(Schema.String),
    attachedShapeAttributes: Schema.optional(Schema.Array(Schema.String)),
    ocid: Schema.optional(Schema.String),
    ociUri: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    additionalFlashCachePercent: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    availableShapeAttributes: Schema.optional(Schema.Array(Schema.String)),
    exascaleDbStorageDetails: Schema.optional(ExascaleDbStorageDetails),
  }).annotate({ identifier: "ExascaleDbStorageVaultProperties" });

export interface ExascaleDbStorageVault {
  /** Optional. The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Optional. The labels or tags associated with the ExascaleDbStorageVault. */
  labels?: Record<string, string>;
  /** Output only. The ID of the subscription entitlement associated with the ExascaleDbStorageVault. */
  entitlementId?: string;
  /** Required. The properties of the ExascaleDbStorageVault. */
  properties?: ExascaleDbStorageVaultProperties;
  /** Output only. The date and time when the ExascaleDbStorageVault was created. */
  createTime?: string;
  /** Required. The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters. */
  displayName?: string;
  /** Identifier. The resource name of the ExascaleDbStorageVault. Format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault} */
  name?: string;
}

export const ExascaleDbStorageVault: Schema.Schema<ExascaleDbStorageVault> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpOracleZone: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    entitlementId: Schema.optional(Schema.String),
    properties: Schema.optional(ExascaleDbStorageVaultProperties),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExascaleDbStorageVault" });

export interface IdentityConnector {
  /** Output only. The connection state of the identity connector. */
  connectionState?:
    | "CONNECTION_STATE_UNSPECIFIED"
    | "CONNECTED"
    | "PARTIALLY_CONNECTED"
    | "DISCONNECTED"
    | "UNKNOWN"
    | (string & {});
  /** Output only. A google managed service account on which customers can grant roles to access resources in the customer project. Example: `p176944527254-55-75119d87fd8f@gcp-sa-oci.iam.gserviceaccount.com` */
  serviceAgentEmail?: string;
}

export const IdentityConnector: Schema.Schema<IdentityConnector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionState: Schema.optional(Schema.String),
    serviceAgentEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "IdentityConnector" });

export interface StopAutonomousDatabaseRequest {}

export const StopAutonomousDatabaseRequest: Schema.Schema<StopAutonomousDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StopAutonomousDatabaseRequest",
  });

export interface StorageSizeDetails {
  /** Output only. The data storage size, in gigabytes, that is applicable for virtual machine DBSystem. */
  dataStorageSizeInGbs?: number;
  /** Output only. The RECO/REDO storage size, in gigabytes, that is applicable for virtual machine DBSystem. */
  recoStorageSizeInGbs?: number;
}

export const StorageSizeDetails: Schema.Schema<StorageSizeDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataStorageSizeInGbs: Schema.optional(Schema.Number),
    recoStorageSizeInGbs: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StorageSizeDetails" });

export interface DbSystemInitialStorageSizeProperties {
  /** Output only. The storage option used in DB system. */
  storageManagement?:
    | "STORAGE_MANAGEMENT_UNSPECIFIED"
    | "ASM"
    | "LVM"
    | (string & {});
  /** Output only. VM shape platform type */
  shapeType?: "SHAPE_TYPE_UNSPECIFIED" | "STANDARD_X86" | (string & {});
  /** Output only. List of storage disk details available for launches from backup. */
  launchFromBackupStorageSizeDetails?: ReadonlyArray<StorageSizeDetails>;
  /** Output only. List of storage disk details. */
  storageSizeDetails?: ReadonlyArray<StorageSizeDetails>;
}

export const DbSystemInitialStorageSizeProperties: Schema.Schema<DbSystemInitialStorageSizeProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageManagement: Schema.optional(Schema.String),
    shapeType: Schema.optional(Schema.String),
    launchFromBackupStorageSizeDetails: Schema.optional(
      Schema.Array(StorageSizeDetails),
    ),
    storageSizeDetails: Schema.optional(Schema.Array(StorageSizeDetails)),
  }).annotate({ identifier: "DbSystemInitialStorageSizeProperties" });

export interface DbSystemInitialStorageSize {
  /** Output only. The name of the resource. */
  name?: string;
  /** Output only. The properties of the DbSystem initial storage size summary. */
  properties?: DbSystemInitialStorageSizeProperties;
}

export const DbSystemInitialStorageSize: Schema.Schema<DbSystemInitialStorageSize> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbSystemInitialStorageSizeProperties),
  }).annotate({ identifier: "DbSystemInitialStorageSize" });

export interface DbVersionProperties {
  /** Output only. True if this version of the Oracle Database software supports pluggable databases. */
  supportsPdb?: boolean;
  /** Output only. A valid Oracle Database version. */
  version?: string;
  /** Output only. True if this version of the Oracle Database software is the preview version. */
  isPreviewDbVersion?: boolean;
  /** Output only. True if this version of the Oracle Database software is the latest version for a release. */
  isLatestForMajorVersion?: boolean;
  /** Output only. True if this version of the Oracle Database software is supported for Upgrade. */
  isUpgradeSupported?: boolean;
}

export const DbVersionProperties: Schema.Schema<DbVersionProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportsPdb: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    isPreviewDbVersion: Schema.optional(Schema.Boolean),
    isLatestForMajorVersion: Schema.optional(Schema.Boolean),
    isUpgradeSupported: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DbVersionProperties" });

export interface DbVersion {
  /** Output only. The name of the DbVersion resource in the following format: projects/{project}/locations/{region}/dbVersions/{db_version} */
  name?: string;
  /** Output only. The properties of the DbVersion. */
  properties?: DbVersionProperties;
}

export const DbVersion: Schema.Schema<DbVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbVersionProperties),
  }).annotate({ identifier: "DbVersion" });

export interface ListDbVersionsResponse {
  /** The list of DbVersions. */
  dbVersions?: ReadonlyArray<DbVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbVersionsResponse: Schema.Schema<ListDbVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dbVersions: Schema.optional(Schema.Array(DbVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbVersionsResponse" });

export interface GenerateAutonomousDatabaseWalletRequest {
  /** Optional. True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only. */
  isRegional?: boolean;
  /** Required. The password used to encrypt the keys inside the wallet. The password must be a minimum of 8 characters. */
  password?: string;
  /** Optional. The type of wallet generation for the Autonomous Database. The default value is SINGLE. */
  type?: "GENERATE_TYPE_UNSPECIFIED" | "ALL" | "SINGLE" | (string & {});
}

export const GenerateAutonomousDatabaseWalletRequest: Schema.Schema<GenerateAutonomousDatabaseWalletRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRegional: Schema.optional(Schema.Boolean),
    password: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAutonomousDatabaseWalletRequest" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface ScheduledOperationDetails {
  /** Output only. Day of week. */
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
  /** Output only. Auto stop time. */
  stopTime?: TimeOfDay;
  /** Output only. Auto start time. */
  startTime?: TimeOfDay;
}

export const ScheduledOperationDetails: Schema.Schema<ScheduledOperationDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dayOfWeek: Schema.optional(Schema.String),
    stopTime: Schema.optional(TimeOfDay),
    startTime: Schema.optional(TimeOfDay),
  }).annotate({ identifier: "ScheduledOperationDetails" });

export interface AutonomousDatabaseApex {
  /** Output only. The Oracle APEX Application Development version. */
  apexVersion?: string;
  /** Output only. The Oracle REST Data Services (ORDS) version. */
  ordsVersion?: string;
}

export const AutonomousDatabaseApex: Schema.Schema<AutonomousDatabaseApex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apexVersion: Schema.optional(Schema.String),
    ordsVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseApex" });

export interface EncryptionKey {
  /** Optional. The provider of the encryption key. */
  provider?:
    | "PROVIDER_UNSPECIFIED"
    | "GOOGLE_MANAGED"
    | "ORACLE_MANAGED"
    | (string & {});
  /** Optional. The KMS key used to encrypt the Autonomous Database. This field is required if the provider is GOOGLE_MANAGED. The name of the KMS key resource in the following format: `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
  kmsKey?: string;
}

export const EncryptionKey: Schema.Schema<EncryptionKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.optional(Schema.String),
    kmsKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionKey" });

export interface EncryptionKeyHistoryEntry {
  /** Output only. The encryption key used to encrypt the Autonomous Database. */
  encryptionKey?: EncryptionKey;
  /** Output only. The date and time when the encryption key was activated on the Autonomous Database.. */
  activationTime?: string;
}

export const EncryptionKeyHistoryEntry: Schema.Schema<EncryptionKeyHistoryEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    encryptionKey: Schema.optional(EncryptionKey),
    activationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "EncryptionKeyHistoryEntry" });

export interface AutonomousDatabaseStandbySummary {
  /** Output only. The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database. */
  dataGuardRoleChangedTime?: string;
  /** Output only. The current lifecycle state of the Autonomous Database. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "TERMINATING"
    | "TERMINATED"
    | "UNAVAILABLE"
    | "RESTORE_IN_PROGRESS"
    | "RESTORE_FAILED"
    | "BACKUP_IN_PROGRESS"
    | "SCALE_IN_PROGRESS"
    | "AVAILABLE_NEEDS_ATTENTION"
    | "UPDATING"
    | "MAINTENANCE_IN_PROGRESS"
    | "RESTARTING"
    | "RECREATING"
    | "ROLE_CHANGE_IN_PROGRESS"
    | "UPGRADING"
    | "INACCESSIBLE"
    | "STANDBY"
    | (string & {});
  /** Output only. The date and time the Disaster Recovery role was switched for the standby Autonomous Database. */
  disasterRecoveryRoleChangedTime?: string;
  /** Output only. The amount of time, in seconds, that the data of the standby database lags in comparison to the data of the primary database. */
  lagTimeDuration?: string;
  /** Output only. The additional details about the current lifecycle state of the Autonomous Database. */
  lifecycleDetails?: string;
}

export const AutonomousDatabaseStandbySummary: Schema.Schema<AutonomousDatabaseStandbySummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataGuardRoleChangedTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    disasterRecoveryRoleChangedTime: Schema.optional(Schema.String),
    lagTimeDuration: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseStandbySummary" });

export interface AllConnectionStrings {
  /** Output only. The database service provides a lower level of resources to each SQL statement. */
  medium?: string;
  /** Output only. The database service provides the least level of resources to each SQL statement. */
  low?: string;
  /** Output only. The database service provides the highest level of resources to each SQL statement. */
  high?: string;
}

export const AllConnectionStrings: Schema.Schema<AllConnectionStrings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    medium: Schema.optional(Schema.String),
    low: Schema.optional(Schema.String),
    high: Schema.optional(Schema.String),
  }).annotate({ identifier: "AllConnectionStrings" });

export interface DatabaseConnectionStringProfile {
  /** Output only. This field indicates if the connection string is regional and is only applicable for cross-region Data Guard. */
  isRegional?: boolean;
  /** Output only. This field indicates the TLS authentication type of the connection. */
  tlsAuthentication?:
    | "TLS_AUTHENTICATION_UNSPECIFIED"
    | "SERVER"
    | "MUTUAL"
    | (string & {});
  /** Output only. The value of the connection string. */
  value?: string;
  /** Output only. The current consumer group being used by the connection. */
  consumerGroup?:
    | "CONSUMER_GROUP_UNSPECIFIED"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "TP"
    | "TPURGENT"
    | (string & {});
  /** Output only. The display name for the database connection. */
  displayName?: string;
  /** Output only. The host name format being currently used in connection string. */
  hostFormat?: "HOST_FORMAT_UNSPECIFIED" | "FQDN" | "IP" | (string & {});
  /** Output only. The current session mode of the connection. */
  sessionMode?:
    | "SESSION_MODE_UNSPECIFIED"
    | "DIRECT"
    | "INDIRECT"
    | (string & {});
  /** Output only. The syntax of the connection string. */
  syntaxFormat?:
    | "SYNTAX_FORMAT_UNSPECIFIED"
    | "LONG"
    | "EZCONNECT"
    | "EZCONNECTPLUS"
    | (string & {});
  /** Output only. The protocol being used by the connection. */
  protocol?: "PROTOCOL_UNSPECIFIED" | "TCP" | "TCPS" | (string & {});
}

export const DatabaseConnectionStringProfile: Schema.Schema<DatabaseConnectionStringProfile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRegional: Schema.optional(Schema.Boolean),
    tlsAuthentication: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    consumerGroup: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    hostFormat: Schema.optional(Schema.String),
    sessionMode: Schema.optional(Schema.String),
    syntaxFormat: Schema.optional(Schema.String),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseConnectionStringProfile" });

export interface AutonomousDatabaseConnectionStrings {
  /** Output only. Returns all connection strings that can be used to connect to the Autonomous Database. */
  allConnectionStrings?: AllConnectionStrings;
  /** Output only. The database service provides the least level of resources to each SQL statement. */
  low?: string;
  /** Output only. The database service provides the highest level of resources to each SQL statement. */
  high?: string;
  /** Output only. The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements. */
  dedicated?: string;
  /** Output only. The database service provides a lower level of resources to each SQL statement. */
  medium?: string;
  /** Output only. A list of connection string profiles to allow clients to group, filter, and select values based on the structured metadata. */
  profiles?: ReadonlyArray<DatabaseConnectionStringProfile>;
}

export const AutonomousDatabaseConnectionStrings: Schema.Schema<AutonomousDatabaseConnectionStrings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allConnectionStrings: Schema.optional(AllConnectionStrings),
    low: Schema.optional(Schema.String),
    high: Schema.optional(Schema.String),
    dedicated: Schema.optional(Schema.String),
    medium: Schema.optional(Schema.String),
    profiles: Schema.optional(Schema.Array(DatabaseConnectionStringProfile)),
  }).annotate({ identifier: "AutonomousDatabaseConnectionStrings" });

export interface AutonomousDatabaseProperties {
  /** Optional. Immutable. The maintenance schedule of the Autonomous Database. */
  maintenanceScheduleType?:
    | "MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED"
    | "EARLY"
    | "REGULAR"
    | (string & {});
  /** Output only. The list and details of the scheduled operations of the Autonomous Database. */
  scheduledOperationDetails?: ReadonlyArray<ScheduledOperationDetails>;
  /** Optional. Immutable. The number of CPU cores to be made available to the database. */
  cpuCoreCount?: number;
  /** Optional. Immutable. The ID of the Oracle Cloud Infrastructure vault secret. */
  secretId?: string;
  /** Optional. Immutable. The private endpoint IP address for the Autonomous Database. */
  privateEndpointIp?: string;
  /** Output only. The private endpoint for the Autonomous Database. */
  privateEndpoint?: string;
  /** Output only. The Autonomous Container Database OCID. */
  autonomousContainerDatabaseId?: string;
  /** Output only. The Oracle Cloud Infrastructure link for the Autonomous Database. */
  ociUrl?: string;
  /** Output only. This field indicates the number of seconds of data loss during a Data Guard failover. */
  failedDataRecoveryDuration?: string;
  /** Output only. The details for the Oracle APEX Application Development. */
  apexDetails?: AutonomousDatabaseApex;
  /** Output only. The current state of database management for the Autonomous Database. */
  databaseManagementState?:
    | "DATABASE_MANAGEMENT_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
  /** Output only. The current lifecycle state of the Autonomous Database. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "TERMINATING"
    | "TERMINATED"
    | "UNAVAILABLE"
    | "RESTORE_IN_PROGRESS"
    | "RESTORE_FAILED"
    | "BACKUP_IN_PROGRESS"
    | "SCALE_IN_PROGRESS"
    | "AVAILABLE_NEEDS_ATTENTION"
    | "UPDATING"
    | "MAINTENANCE_IN_PROGRESS"
    | "RESTARTING"
    | "RECREATING"
    | "ROLE_CHANGE_IN_PROGRESS"
    | "UPGRADING"
    | "INACCESSIBLE"
    | "STANDBY"
    | (string & {});
  /** Required. Immutable. The license type used for the Autonomous Database. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Output only. The list of available regions that can be used to create a clone for the Autonomous Database. */
  supportedCloneRegions?: ReadonlyArray<string>;
  /** Output only. The history of the encryption keys used to encrypt the Autonomous Database. */
  encryptionKeyHistoryEntries?: ReadonlyArray<EncryptionKeyHistoryEntry>;
  /** Optional. The encryption key used to encrypt the Autonomous Database. Updating this field will add a new entry in the `encryption_key_history_entries` field with the former version. */
  encryptionKey?: EncryptionKey;
  /** Output only. The permission level of the Autonomous Database. */
  permissionLevel?:
    | "PERMISSION_LEVEL_UNSPECIFIED"
    | "RESTRICTED"
    | "UNRESTRICTED"
    | (string & {});
  /** Optional. Immutable. The ID of the Oracle Cloud Infrastructure vault. */
  vaultId?: string;
  /** Output only. The Data Guard role of the Autonomous Database. */
  role?:
    | "ROLE_UNSPECIFIED"
    | "PRIMARY"
    | "STANDBY"
    | "DISABLED_STANDBY"
    | "BACKUP_COPY"
    | "SNAPSHOT_STANDBY"
    | (string & {});
  /** Output only. The amount of memory enabled per ECPU, in gigabytes. */
  memoryPerOracleComputeUnitGbs?: number;
  /** Optional. Immutable. The character set for the Autonomous Database. The default is AL32UTF8. */
  characterSet?: string;
  /** Output only. The storage space used by automatic backups of Autonomous Database, in gigabytes. */
  totalAutoBackupStorageSizeGbs?: number;
  /** Output only. OCID of the Autonomous Database. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle */
  ocid?: string;
  /** Optional. Immutable. This field indicates if auto scaling is enabled for the Autonomous Database CPU core count. */
  isAutoScalingEnabled?: boolean;
  /** Output only. The amount of storage currently being used for user and system data, in terabytes. */
  actualUsedDataStorageSizeTb?: number;
  /** Output only. The list of OCIDs of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. */
  peerDbIds?: ReadonlyArray<string>;
  /** Output only. An Oracle-managed Google Cloud service account on which customers can grant roles to access resources in the customer project. */
  serviceAgentEmail?: string;
  /** Optional. Immutable. This field indicates if auto scaling is enabled for the Autonomous Database storage. */
  isStorageAutoScalingEnabled?: boolean;
  /** Required. Immutable. The workload type of the Autonomous Database. */
  dbWorkload?:
    | "DB_WORKLOAD_UNSPECIFIED"
    | "OLTP"
    | "DW"
    | "AJD"
    | "APEX"
    | (string & {});
  /** Output only. The details of the Autonomous Data Guard standby database. */
  localStandbyDb?: AutonomousDatabaseStandbySummary;
  /** Output only. The list of available Oracle Database upgrade versions for an Autonomous Database. */
  availableUpgradeVersions?: ReadonlyArray<string>;
  /** Output only. The Oracle Connection URLs for an Autonomous Database. */
  connectionUrls?: AutonomousDatabaseConnectionUrls;
  /** Optional. Immutable. The edition of the Autonomous Databases. */
  dbEdition?:
    | "DATABASE_EDITION_UNSPECIFIED"
    | "STANDARD_EDITION"
    | "ENTERPRISE_EDITION"
    | (string & {});
  /** Optional. Immutable. The national character set for the Autonomous Database. The default is AL16UTF16. */
  nCharacterSet?: string;
  /** Output only. This field indicates the local disaster recovery (DR) type of an Autonomous Database. */
  localDisasterRecoveryType?:
    | "LOCAL_DISASTER_RECOVERY_TYPE_UNSPECIFIED"
    | "ADG"
    | "BACKUP_BASED"
    | "NOT_AVAILABLE"
    | (string & {});
  /** Output only. The date and time the Disaster Recovery role was changed for the standby Autonomous Database. */
  disasterRecoveryRoleChangedTime?: string;
  /** Optional. Immutable. The number of compute servers for the Autonomous Database. */
  computeCount?: number;
  /** Output only. The current state of the Data Safe registration for the Autonomous Database. */
  dataSafeState?:
    | "DATA_SAFE_STATE_UNSPECIFIED"
    | "REGISTERING"
    | "REGISTERED"
    | "DEREGISTERING"
    | "NOT_REGISTERED"
    | "FAILED"
    | (string & {});
  /** Output only. The refresh mode of the cloned Autonomous Database. */
  refreshableMode?:
    | "REFRESHABLE_MODE_UNSPECIFIED"
    | "AUTOMATIC"
    | "MANUAL"
    | (string & {});
  /** Output only. The long term backup schedule of the Autonomous Database. */
  nextLongTermBackupTime?: string;
  /** Optional. This field indicates the maximum data loss limit for an Autonomous Database, in seconds. */
  localAdgAutoFailoverMaxDataLossLimitDuration?: number;
  /** Optional. Immutable. This field specifies if the Autonomous Database requires mTLS connections. */
  mtlsConnectionRequired?: boolean;
  /** Optional. Indicates whether the Autonomous Database has a local (in-region) standby database. Not applicable to cross-region Data Guard or dedicated Exadata infrastructure. */
  localDataGuardEnabled?: boolean;
  /** Output only. This field indicates the status of Data Guard and Access control for the Autonomous Database. The field's value is null if Data Guard is disabled or Access Control is disabled. The field's value is TRUE if both Data Guard and Access Control are enabled, and the Autonomous Database is using primary IP access control list (ACL) for standby. The field's value is FALSE if both Data Guard and Access Control are enabled, and the Autonomous Database is using a different IP access control list (ACL) for standby compared to primary. */
  arePrimaryAllowlistedIpsUsed?: boolean;
  /** Optional. Immutable. The list of customer contacts. */
  customerContacts?: ReadonlyArray<CustomerContact>;
  /** Optional. Immutable. The size of the data stored in the database, in terabytes. */
  dataStorageSizeTb?: number;
  /** Output only. This field indicates the current mode of the Autonomous Database. */
  openMode?:
    | "OPEN_MODE_UNSPECIFIED"
    | "READ_ONLY"
    | "READ_WRITE"
    | (string & {});
  /** Output only. The amount of storage currently allocated for the database tables and billed for, rounded up in terabytes. */
  allocatedStorageSizeTb?: number;
  /** Output only. The date and time when maintenance will end. */
  maintenanceEndTime?: string;
  /** Output only. The details of the current lifestyle state of the Autonomous Database. */
  lifecycleDetails?: string;
  /** Output only. The SQL Web Developer URL for the Autonomous Database. */
  sqlWebDeveloperUrl?: string;
  /** Output only. The storage space used by Autonomous Database, in gigabytes. */
  usedDataStorageSizeTbs?: number;
  /** Optional. Immutable. The retention period for the Autonomous Database. This field is specified in days, can range from 1 day to 60 days, and has a default value of 60 days. */
  backupRetentionPeriodDays?: number;
  /** Output only. Deprecated: Please use `local_adg_auto_failover_max_data_loss_limit_duration` instead. This field indicates the maximum data loss limit for an Autonomous Database, in seconds. */
  localAdgAutoFailoverMaxDataLossLimit?: number;
  /** Output only. The memory assigned to in-memory tables in an Autonomous Database. */
  memoryTableGbs?: number;
  /** Output only. The date and time when maintenance will begin. */
  maintenanceBeginTime?: string;
  /** Optional. Immutable. The size of the data stored in the database, in gigabytes. */
  dataStorageSizeGb?: number;
  /** Output only. The date and time the Autonomous Data Guard role was changed for the standby Autonomous Database. */
  dataGuardRoleChangedTime?: string;
  /** Output only. The connection strings used to connect to an Autonomous Database. */
  connectionStrings?: AutonomousDatabaseConnectionStrings;
  /** Optional. Immutable. The private endpoint label for the Autonomous Database. */
  privateEndpointLabel?: string;
  /** Optional. Immutable. The Oracle Database version for the Autonomous Database. */
  dbVersion?: string;
  /** Output only. Deprecated: Please use `local_data_guard_enabled` instead. This field indicates whether the Autonomous Database has local (in-region) Data Guard enabled. */
  isLocalDataGuardEnabled?: boolean;
  /** Output only. The refresh State of the clone. */
  refreshableState?:
    | "REFRESHABLE_STATE_UNSPECIFIED"
    | "REFRESHING"
    | "NOT_REFRESHING"
    | (string & {});
  /** Optional. Immutable. The list of allowlisted IP addresses for the Autonomous Database. */
  allowlistedIps?: ReadonlyArray<string>;
  /** Output only. This field indicates the state of Operations Insights for the Autonomous Database. */
  operationsInsightsState?:
    | "OPERATIONS_INSIGHTS_STATE_UNSPECIFIED"
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "NOT_ENABLED"
    | "FAILED_ENABLING"
    | "FAILED_DISABLING"
    | (string & {});
}

export const AutonomousDatabaseProperties: Schema.Schema<AutonomousDatabaseProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceScheduleType: Schema.optional(Schema.String),
    scheduledOperationDetails: Schema.optional(
      Schema.Array(ScheduledOperationDetails),
    ),
    cpuCoreCount: Schema.optional(Schema.Number),
    secretId: Schema.optional(Schema.String),
    privateEndpointIp: Schema.optional(Schema.String),
    privateEndpoint: Schema.optional(Schema.String),
    autonomousContainerDatabaseId: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    failedDataRecoveryDuration: Schema.optional(Schema.String),
    apexDetails: Schema.optional(AutonomousDatabaseApex),
    databaseManagementState: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
    supportedCloneRegions: Schema.optional(Schema.Array(Schema.String)),
    encryptionKeyHistoryEntries: Schema.optional(
      Schema.Array(EncryptionKeyHistoryEntry),
    ),
    encryptionKey: Schema.optional(EncryptionKey),
    permissionLevel: Schema.optional(Schema.String),
    vaultId: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    memoryPerOracleComputeUnitGbs: Schema.optional(Schema.Number),
    characterSet: Schema.optional(Schema.String),
    totalAutoBackupStorageSizeGbs: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    isAutoScalingEnabled: Schema.optional(Schema.Boolean),
    actualUsedDataStorageSizeTb: Schema.optional(Schema.Number),
    peerDbIds: Schema.optional(Schema.Array(Schema.String)),
    serviceAgentEmail: Schema.optional(Schema.String),
    isStorageAutoScalingEnabled: Schema.optional(Schema.Boolean),
    dbWorkload: Schema.optional(Schema.String),
    localStandbyDb: Schema.optional(AutonomousDatabaseStandbySummary),
    availableUpgradeVersions: Schema.optional(Schema.Array(Schema.String)),
    connectionUrls: Schema.optional(AutonomousDatabaseConnectionUrls),
    dbEdition: Schema.optional(Schema.String),
    nCharacterSet: Schema.optional(Schema.String),
    localDisasterRecoveryType: Schema.optional(Schema.String),
    disasterRecoveryRoleChangedTime: Schema.optional(Schema.String),
    computeCount: Schema.optional(Schema.Number),
    dataSafeState: Schema.optional(Schema.String),
    refreshableMode: Schema.optional(Schema.String),
    nextLongTermBackupTime: Schema.optional(Schema.String),
    localAdgAutoFailoverMaxDataLossLimitDuration: Schema.optional(
      Schema.Number,
    ),
    mtlsConnectionRequired: Schema.optional(Schema.Boolean),
    localDataGuardEnabled: Schema.optional(Schema.Boolean),
    arePrimaryAllowlistedIpsUsed: Schema.optional(Schema.Boolean),
    customerContacts: Schema.optional(Schema.Array(CustomerContact)),
    dataStorageSizeTb: Schema.optional(Schema.Number),
    openMode: Schema.optional(Schema.String),
    allocatedStorageSizeTb: Schema.optional(Schema.Number),
    maintenanceEndTime: Schema.optional(Schema.String),
    lifecycleDetails: Schema.optional(Schema.String),
    sqlWebDeveloperUrl: Schema.optional(Schema.String),
    usedDataStorageSizeTbs: Schema.optional(Schema.Number),
    backupRetentionPeriodDays: Schema.optional(Schema.Number),
    localAdgAutoFailoverMaxDataLossLimit: Schema.optional(Schema.Number),
    memoryTableGbs: Schema.optional(Schema.Number),
    maintenanceBeginTime: Schema.optional(Schema.String),
    dataStorageSizeGb: Schema.optional(Schema.Number),
    dataGuardRoleChangedTime: Schema.optional(Schema.String),
    connectionStrings: Schema.optional(AutonomousDatabaseConnectionStrings),
    privateEndpointLabel: Schema.optional(Schema.String),
    dbVersion: Schema.optional(Schema.String),
    isLocalDataGuardEnabled: Schema.optional(Schema.Boolean),
    refreshableState: Schema.optional(Schema.String),
    allowlistedIps: Schema.optional(Schema.Array(Schema.String)),
    operationsInsightsState: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseProperties" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface DbSystemShape {
  /** Optional. Minimum number of storage servers. */
  minStorageCount?: number;
  /** Optional. Minimum memory per node in gigabytes. */
  minMemoryPerNodeGb?: number;
  /** Identifier. The name of the Database System Shape resource with the format: projects/{project}/locations/{region}/dbSystemShapes/{db_system_shape} */
  name?: string;
  /** Optional. Minimum core count per node. */
  minCoreCountPerNode?: number;
  /** Optional. Memory per database server node in gigabytes. */
  availableMemoryPerNodeGb?: number;
  /** Optional. Storage per storage server in terabytes. */
  availableDataStorageTb?: number;
  /** Optional. Minimum number of database servers. */
  minNodeCount?: number;
  /** Optional. Maximum number of storage servers. */
  maxStorageCount?: number;
  /** Optional. shape */
  shape?: string;
  /** Optional. Maximum number of database servers. */
  maxNodeCount?: number;
  /** Optional. Minimum node storage per database server in gigabytes. */
  minDbNodeStoragePerNodeGb?: number;
  /** Optional. Number of cores per node. */
  availableCoreCountPerNode?: number;
}

export const DbSystemShape: Schema.Schema<DbSystemShape> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minStorageCount: Schema.optional(Schema.Number),
    minMemoryPerNodeGb: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    minCoreCountPerNode: Schema.optional(Schema.Number),
    availableMemoryPerNodeGb: Schema.optional(Schema.Number),
    availableDataStorageTb: Schema.optional(Schema.Number),
    minNodeCount: Schema.optional(Schema.Number),
    maxStorageCount: Schema.optional(Schema.Number),
    shape: Schema.optional(Schema.String),
    maxNodeCount: Schema.optional(Schema.Number),
    minDbNodeStoragePerNodeGb: Schema.optional(Schema.Number),
    availableCoreCountPerNode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DbSystemShape" });

export interface DataCollectionOptionsCommon {
  /** Optional. Indicates whether to enable health monitoring. */
  isHealthMonitoringEnabled?: boolean;
  /** Optional. Indicates whether to enable incident logs and trace collection. */
  isIncidentLogsEnabled?: boolean;
  /** Optional. Indicates whether to enable data collection for diagnostics. */
  isDiagnosticsEventsEnabled?: boolean;
}

export const DataCollectionOptionsCommon: Schema.Schema<DataCollectionOptionsCommon> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isHealthMonitoringEnabled: Schema.optional(Schema.Boolean),
    isIncidentLogsEnabled: Schema.optional(Schema.Boolean),
    isDiagnosticsEventsEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCollectionOptionsCommon" });

export interface ExadbVmClusterStorageDetails {
  /** Required. The storage allocation for the exadbvmcluster per node, in gigabytes (GB). This field is used to calculate the total storage allocation for the exadbvmcluster. */
  sizeInGbsPerNode?: number;
}

export const ExadbVmClusterStorageDetails: Schema.Schema<ExadbVmClusterStorageDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sizeInGbsPerNode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExadbVmClusterStorageDetails" });

export interface ExadbVmClusterProperties {
  /** Required. The number of nodes/VMs in the ExadbVmCluster. */
  nodeCount?: number;
  /** Optional. Immutable. The time zone of the ExadbVmCluster. */
  timeZone?: TimeZone;
  /** Required. Immutable. The name of ExascaleDbStorageVault associated with the ExadbVmCluster. It can refer to an existing ExascaleDbStorageVault. Or a new one can be created during the ExadbVmCluster creation (requires storage_vault_properties to be set). Format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault} */
  exascaleDbStorageVault?: string;
  /** Required. Immutable. The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. */
  enabledEcpuCountPerNode?: number;
  /** Required. Immutable. The shape attribute of the VM cluster. The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later */
  shapeAttribute?:
    | "SHAPE_ATTRIBUTE_UNSPECIFIED"
    | "SMART_STORAGE"
    | "BLOCK_STORAGE"
    | (string & {});
  /** Required. Immutable. Prefix for VM cluster host names. */
  hostnamePrefix?: string;
  /** Optional. Immutable. Indicates user preference for data collection options. */
  dataCollectionOptions?: DataCollectionOptionsCommon;
  /** Required. Immutable. The SSH public keys for the ExadbVmCluster. */
  sshPublicKeys?: ReadonlyArray<string>;
  /** Output only. Memory per VM (GB) (Read-only): Shows the amount of memory allocated to each VM. Memory is calculated based on 2.75 GB per Total ECPUs. */
  memorySizeGb?: number;
  /** Output only. The Oracle Grid Infrastructure (GI) software version. */
  giVersion?: string;
  /** Optional. Immutable. The cluster name for Exascale vm cluster. The cluster name must begin with an alphabetic character and may contain hyphens(-) but can not contain underscores(_). It should be not more than 11 characters and is not case sensitive. OCI Cluster name. */
  clusterName?: string;
  /** Output only. State of the cluster. */
  lifecycleState?:
    | "EXADB_VM_CLUSTER_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MAINTENANCE_IN_PROGRESS"
    | (string & {});
  /** Required. Immutable. Grid Infrastructure Version. */
  gridImageId?: string;
  /** Required. Immutable. Total storage details for the ExadbVmCluster. */
  vmFileSystemStorage?: ExadbVmClusterStorageDetails;
  /** Optional. Immutable. The license type of the ExadbVmCluster. */
  licenseModel?:
    | "LICENSE_MODEL_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUri?: string;
  /** Optional. Immutable. SCAN listener port - TCP */
  scanListenerPortTcp?: number;
  /** Output only. The hostname of the ExadbVmCluster. */
  hostname?: string;
  /** Optional. Immutable. The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. */
  additionalEcpuCountPerNode?: number;
}

export const ExadbVmClusterProperties: Schema.Schema<ExadbVmClusterProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.Number),
    timeZone: Schema.optional(TimeZone),
    exascaleDbStorageVault: Schema.optional(Schema.String),
    enabledEcpuCountPerNode: Schema.optional(Schema.Number),
    shapeAttribute: Schema.optional(Schema.String),
    hostnamePrefix: Schema.optional(Schema.String),
    dataCollectionOptions: Schema.optional(DataCollectionOptionsCommon),
    sshPublicKeys: Schema.optional(Schema.Array(Schema.String)),
    memorySizeGb: Schema.optional(Schema.Number),
    giVersion: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    lifecycleState: Schema.optional(Schema.String),
    gridImageId: Schema.optional(Schema.String),
    vmFileSystemStorage: Schema.optional(ExadbVmClusterStorageDetails),
    licenseModel: Schema.optional(Schema.String),
    ociUri: Schema.optional(Schema.String),
    scanListenerPortTcp: Schema.optional(Schema.Number),
    hostname: Schema.optional(Schema.String),
    additionalEcpuCountPerNode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExadbVmClusterProperties" });

export interface ExadbVmCluster {
  /** Optional. Immutable. The name of the OdbNetwork associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
  /** Optional. The labels or tags associated with the ExadbVmCluster. */
  labels?: Record<string, string>;
  /** Required. The properties of the ExadbVmCluster. */
  properties?: ExadbVmClusterProperties;
  /** Required. Immutable. The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Output only. The ID of the subscription entitlement associated with the ExadbVmCluster. */
  entitlementId?: string;
  /** Required. Immutable. The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters. */
  displayName?: string;
  /** Output only. Immutable. The GCP Oracle zone where Oracle ExadbVmCluster is hosted. Example: us-east4-b-r2. During creation, the system will pick the zone assigned to the ExascaleDbStorageVault. */
  gcpOracleZone?: string;
  /** Required. Immutable. The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  backupOdbSubnet?: string;
  /** Output only. The date and time that the ExadbVmCluster was created. */
  createTime?: string;
  /** Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project}/locations/{region}/exadbVmClusters/{exadb_vm_cluster} */
  name?: string;
}

export const ExadbVmCluster: Schema.Schema<ExadbVmCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    odbNetwork: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(ExadbVmClusterProperties),
    odbSubnet: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    backupOdbSubnet: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExadbVmCluster" });

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

export interface DbServerProperties {
  /** Optional. Memory allocated in GBs. */
  memorySizeGb?: number;
  /** Output only. OCID of database nodes associated with the database server. */
  dbNodeIds?: ReadonlyArray<string>;
  /** Optional. Local storage per VM. */
  dbNodeStorageSizeGb?: number;
  /** Output only. OCID of database server. */
  ocid?: string;
  /** Optional. OCPU count per database. */
  ocpuCount?: number;
  /** Optional. Maximum OCPU count per database. */
  maxOcpuCount?: number;
  /** Optional. Maximum memory allocated in GBs. */
  maxMemorySizeGb?: number;
  /** Optional. Vm count per database. */
  vmCount?: number;
  /** Optional. Maximum local storage per VM. */
  maxDbNodeStorageSizeGb?: number;
  /** Output only. State of the database server. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "AVAILABLE"
    | "UNAVAILABLE"
    | "DELETING"
    | "DELETED"
    | (string & {});
}

export const DbServerProperties: Schema.Schema<DbServerProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memorySizeGb: Schema.optional(Schema.Number),
    dbNodeIds: Schema.optional(Schema.Array(Schema.String)),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    ocpuCount: Schema.optional(Schema.Number),
    maxOcpuCount: Schema.optional(Schema.Number),
    maxMemorySizeGb: Schema.optional(Schema.Number),
    vmCount: Schema.optional(Schema.Number),
    maxDbNodeStorageSizeGb: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbServerProperties" });

export interface DbServer {
  /** Optional. User friendly name for this resource. */
  displayName?: string;
  /** Identifier. The name of the database server resource with the format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}/dbServers/{db_server} */
  name?: string;
  /** Optional. Various properties of the database server. */
  properties?: DbServerProperties;
}

export const DbServer: Schema.Schema<DbServer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbServerProperties),
  }).annotate({ identifier: "DbServer" });

export interface ListDbServersResponse {
  /** The list of database servers. */
  dbServers?: ReadonlyArray<DbServer>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbServersResponse: Schema.Schema<ListDbServersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dbServers: Schema.optional(Schema.Array(DbServer)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbServersResponse" });

export interface DataCollectionOptions {
  /** Optional. Indicates whether diagnostic collection is enabled for the VM cluster */
  diagnosticsEventsEnabled?: boolean;
  /** Optional. Indicates whether health monitoring is enabled for the VM cluster */
  healthMonitoringEnabled?: boolean;
  /** Optional. Indicates whether incident logs and trace collection are enabled for the VM cluster */
  incidentLogsEnabled?: boolean;
}

export const DataCollectionOptions: Schema.Schema<DataCollectionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diagnosticsEventsEnabled: Schema.optional(Schema.Boolean),
    healthMonitoringEnabled: Schema.optional(Schema.Boolean),
    incidentLogsEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCollectionOptions" });

export interface SourceConfig {
  /** Optional. The name of the primary Autonomous Database that is used to create a Peer Autonomous Database from a source. */
  autonomousDatabase?: string;
  /** Optional. This field specifies if the replication of automatic backups is enabled when creating a Data Guard. */
  automaticBackupsReplicationEnabled?: boolean;
}

export const SourceConfig: Schema.Schema<SourceConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autonomousDatabase: Schema.optional(Schema.String),
    automaticBackupsReplicationEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SourceConfig" });

export interface DbSystemOptions {
  /** Optional. The storage option used in DB system. */
  storageManagement?:
    | "STORAGE_MANAGEMENT_UNSPECIFIED"
    | "ASM"
    | "LVM"
    | (string & {});
}

export const DbSystemOptions: Schema.Schema<DbSystemOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageManagement: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbSystemOptions" });

export interface ListExadbVmClustersResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of ExadbVmClusters. */
  exadbVmClusters?: ReadonlyArray<ExadbVmCluster>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
}

export const ListExadbVmClustersResponse: Schema.Schema<ListExadbVmClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    exadbVmClusters: Schema.optional(Schema.Array(ExadbVmCluster)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListExadbVmClustersResponse" });

export interface DataCollectionOptionsDbSystem {
  /** Optional. Indicates whether to enable data collection for diagnostics. */
  isDiagnosticsEventsEnabled?: boolean;
  /** Optional. Indicates whether to enable incident logs and trace collection. */
  isIncidentLogsEnabled?: boolean;
}

export const DataCollectionOptionsDbSystem: Schema.Schema<DataCollectionOptionsDbSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isDiagnosticsEventsEnabled: Schema.optional(Schema.Boolean),
    isIncidentLogsEnabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DataCollectionOptionsDbSystem" });

export interface DbHome {
  /** Required. The Database resource. */
  database?: Database;
  /** Optional. Whether unified auditing is enabled for the Database Home. */
  isUnifiedAuditingEnabled?: boolean;
  /** Optional. The display name for the Database Home. The name does not have to be unique within your project. */
  displayName?: string;
  /** Required. A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. */
  dbVersion?: string;
}

export const DbHome: Schema.Schema<DbHome> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Database),
    isUnifiedAuditingEnabled: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    dbVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbHome" });

export interface DbSystemProperties {
  /** Output only. The hostname of the DbSystem. */
  hostname?: string;
  /** Required. The initial data storage size in GB. */
  initialDataStorageSizeGb?: number;
  /** Optional. The private IP address of the DbSystem. */
  privateIp?: string;
  /** Required. The number of CPU cores to enable for the DbSystem. */
  computeCount?: number;
  /** Optional. The reco/redo storage size in GB. */
  recoStorageSizeGb?: number;
  /** Optional. The options for the DbSystem. */
  dbSystemOptions?: DbSystemOptions;
  /** Required. The license model of the DbSystem. */
  licenseModel?:
    | "LICENSE_MODEL_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Required. The database edition of the DbSystem. */
  databaseEdition?:
    | "DB_SYSTEM_DATABASE_EDITION_UNSPECIFIED"
    | "STANDARD_EDITION"
    | "ENTERPRISE_EDITION"
    | "ENTERPRISE_EDITION_HIGH_PERFORMANCE"
    | (string & {});
  /** Optional. The host domain name of the DbSystem. */
  domain?: string;
  /** Optional. Prefix for DB System host names. */
  hostnamePrefix?: string;
  /** Optional. Data collection options for diagnostics. */
  dataCollectionOptions?: DataCollectionOptionsDbSystem;
  /** Required. SSH public keys to be stored with the DbSystem. */
  sshPublicKeys?: ReadonlyArray<string>;
  /** Optional. The memory size in GB. */
  memorySizeGb?: number;
  /** Output only. State of the DbSystem. */
  lifecycleState?:
    | "DB_SYSTEM_LIFECYCLE_STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MIGRATED"
    | "MAINTENANCE_IN_PROGRESS"
    | "NEEDS_ATTENTION"
    | "UPGRADING"
    | (string & {});
  /** Optional. Details for creating a Database Home. */
  dbHome?: DbHome;
  /** Optional. The compute model of the DbSystem. */
  computeModel?: "COMPUTE_MODEL_UNSPECIFIED" | "ECPU" | "OCPU" | (string & {});
  /** Optional. The number of nodes in the DbSystem. */
  nodeCount?: number;
  /** Optional. Time zone of the DbSystem. */
  timeZone?: TimeZone;
  /** Required. Shape of DB System. */
  shape?: string;
  /** Optional. The data storage size in GB that is currently available to DbSystems. */
  dataStorageSizeGb?: number;
  /** Output only. OCID of the DbSystem. */
  ocid?: string;
}

export const DbSystemProperties: Schema.Schema<DbSystemProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    initialDataStorageSizeGb: Schema.optional(Schema.Number),
    privateIp: Schema.optional(Schema.String),
    computeCount: Schema.optional(Schema.Number),
    recoStorageSizeGb: Schema.optional(Schema.Number),
    dbSystemOptions: Schema.optional(DbSystemOptions),
    licenseModel: Schema.optional(Schema.String),
    databaseEdition: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    hostnamePrefix: Schema.optional(Schema.String),
    dataCollectionOptions: Schema.optional(DataCollectionOptionsDbSystem),
    sshPublicKeys: Schema.optional(Schema.Array(Schema.String)),
    memorySizeGb: Schema.optional(Schema.Number),
    lifecycleState: Schema.optional(Schema.String),
    dbHome: Schema.optional(DbHome),
    computeModel: Schema.optional(Schema.String),
    nodeCount: Schema.optional(Schema.Number),
    timeZone: Schema.optional(TimeZone),
    shape: Schema.optional(Schema.String),
    dataStorageSizeGb: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbSystemProperties" });

export interface DbNodeProperties {
  /** Optional. OCPU count per database node. */
  ocpuCount?: number;
  /** Output only. State of the database node. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "STOPPING"
    | "STOPPED"
    | "STARTING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | (string & {});
  /** Optional. Local storage per database node. */
  dbNodeStorageSizeGb?: number;
  /** Output only. OCID of database node. */
  ocid?: string;
  /** Optional. Database server OCID. */
  dbServerOcid?: string;
  /** Optional. DNS */
  hostname?: string;
  /** Total CPU core count of the database node. */
  totalCpuCoreCount?: number;
  /** Memory allocated in GBs. */
  memorySizeGb?: number;
  /** Output only. The date and time that the database node was created. */
  createTime?: string;
}

export const DbNodeProperties: Schema.Schema<DbNodeProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ocpuCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    ocid: Schema.optional(Schema.String),
    dbServerOcid: Schema.optional(Schema.String),
    hostname: Schema.optional(Schema.String),
    totalCpuCoreCount: Schema.optional(Schema.Number),
    memorySizeGb: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DbNodeProperties" });

export interface CloudVmClusterProperties {
  /** Output only. host name without domain. format: "-" with some suffix. ex: sp2-yi0xq where "sp2" is the hostname_prefix. */
  hostname?: string;
  /** Optional. The type of redundancy. */
  diskRedundancy?:
    | "DISK_REDUNDANCY_UNSPECIFIED"
    | "HIGH"
    | "NORMAL"
    | (string & {});
  /** Optional. Use exadata sparse snapshots. */
  sparseDiskgroupEnabled?: boolean;
  /** Output only. SCAN listener port - TCP */
  scanListenerPortTcp?: number;
  /** Output only. SCAN listener port - TLS */
  scanListenerPortTcpSsl?: number;
  /** Output only. DNS listener IP. */
  dnsListenerIp?: string;
  /** Optional. OCI Cluster name. */
  clusterName?: string;
  /** Optional. SSH public keys to be stored with cluster. */
  sshPublicKeys?: ReadonlyArray<string>;
  /** Optional. Prefix for VM cluster host names. */
  hostnamePrefix?: string;
  /** Output only. Parent DNS domain where SCAN DNS and hosts names are qualified. ex: ocispdelegated.ocisp10jvnet.oraclevcn.com */
  domain?: string;
  /** Output only. SCAN DNS name. ex: sp2-yi0xq-scan.ocispdelegated.ocisp10jvnet.oraclevcn.com */
  scanDns?: string;
  /** Output only. Oracle Cloud Infrastructure ID of VM Cluster. */
  ocid?: string;
  /** Optional. Local storage per VM. */
  dbNodeStorageSizeGb?: number;
  /** Optional. Number of database servers. */
  nodeCount?: number;
  /** Optional. Data collection options for diagnostics. */
  diagnosticsDataCollectionOptions?: DataCollectionOptions;
  /** Output only. OCID of scan DNS record. */
  scanDnsRecordId?: string;
  /** Optional. OCID of database servers. */
  dbServerOcids?: ReadonlyArray<string>;
  /** Output only. OCIDs of scan IPs. */
  scanIpIds?: ReadonlyArray<string>;
  /** Output only. Compartment ID of cluster. */
  compartmentId?: string;
  /** Required. Number of enabled CPU cores. */
  cpuCoreCount?: number;
  /** Optional. Use local backup. */
  localBackupEnabled?: boolean;
  /** Output only. The compute model of the VM Cluster. */
  computeModel?:
    | "COMPUTE_MODEL_UNSPECIFIED"
    | "COMPUTE_MODEL_ECPU"
    | "COMPUTE_MODEL_OCPU"
    | (string & {});
  /** Required. License type of VM Cluster. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_INCLUDED"
    | "BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Optional. Grid Infrastructure Version. */
  giVersion?: string;
  /** Optional. Memory allocated in GBs. */
  memorySizeGb?: number;
  /** Optional. The data disk group size to be allocated in TBs. */
  dataStorageSizeTb?: number;
  /** Output only. The storage allocation for the disk group, in gigabytes (GB). */
  storageSizeGb?: number;
  /** Output only. Deep link to the OCI console to view this resource. */
  ociUrl?: string;
  /** Output only. Shape of VM Cluster. */
  shape?: string;
  /** Optional. Operating system version of the image. */
  systemVersion?: string;
  /** Optional. Time zone of VM Cluster to set. Defaults to UTC if not specified. */
  timeZone?: TimeZone;
  /** Output only. State of the cluster. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "UPDATING"
    | "TERMINATING"
    | "TERMINATED"
    | "FAILED"
    | "MAINTENANCE_IN_PROGRESS"
    | (string & {});
  /** Optional. OCPU count per VM. Minimum is 0.1. */
  ocpuCount?: number;
}

export const CloudVmClusterProperties: Schema.Schema<CloudVmClusterProperties> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostname: Schema.optional(Schema.String),
    diskRedundancy: Schema.optional(Schema.String),
    sparseDiskgroupEnabled: Schema.optional(Schema.Boolean),
    scanListenerPortTcp: Schema.optional(Schema.Number),
    scanListenerPortTcpSsl: Schema.optional(Schema.Number),
    dnsListenerIp: Schema.optional(Schema.String),
    clusterName: Schema.optional(Schema.String),
    sshPublicKeys: Schema.optional(Schema.Array(Schema.String)),
    hostnamePrefix: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    scanDns: Schema.optional(Schema.String),
    ocid: Schema.optional(Schema.String),
    dbNodeStorageSizeGb: Schema.optional(Schema.Number),
    nodeCount: Schema.optional(Schema.Number),
    diagnosticsDataCollectionOptions: Schema.optional(DataCollectionOptions),
    scanDnsRecordId: Schema.optional(Schema.String),
    dbServerOcids: Schema.optional(Schema.Array(Schema.String)),
    scanIpIds: Schema.optional(Schema.Array(Schema.String)),
    compartmentId: Schema.optional(Schema.String),
    cpuCoreCount: Schema.optional(Schema.Number),
    localBackupEnabled: Schema.optional(Schema.Boolean),
    computeModel: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
    giVersion: Schema.optional(Schema.String),
    memorySizeGb: Schema.optional(Schema.Number),
    dataStorageSizeTb: Schema.optional(Schema.Number),
    storageSizeGb: Schema.optional(Schema.Number),
    ociUrl: Schema.optional(Schema.String),
    shape: Schema.optional(Schema.String),
    systemVersion: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    state: Schema.optional(Schema.String),
    ocpuCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudVmClusterProperties" });

export interface CloudVmCluster {
  /** Optional. Various properties of the VM Cluster. */
  properties?: CloudVmClusterProperties;
  /** Optional. The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Optional. The name of the VPC network. Format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Required. The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure} */
  exadataInfrastructure?: string;
  /** Optional. The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  backupOdbSubnet?: string;
  /** Optional. User friendly name for this resource. */
  displayName?: string;
  /** Optional. CIDR range of the backup subnet. */
  backupSubnetCidr?: string;
  /** Optional. The name of the OdbNetwork associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the odb_subnet and backup_odb_subnet. */
  odbNetwork?: string;
  /** Optional. Labels or tags associated with the VM Cluster. */
  labels?: Record<string, string>;
  /** Output only. The date and time that the VM cluster was created. */
  createTime?: string;
  /** Identifier. The name of the VM Cluster resource with the format: projects/{project}/locations/{region}/cloudVmClusters/{cloud_vm_cluster} */
  name?: string;
  /** Output only. The identity connector details which will allow OCI to securely access the resources in the customer project. */
  identityConnector?: IdentityConnector;
  /** Output only. The GCP Oracle zone where Oracle CloudVmCluster is hosted. This will be the same as the gcp_oracle_zone of the CloudExadataInfrastructure. Example: us-east4-b-r2. */
  gcpOracleZone?: string;
  /** Optional. Network settings. CIDR to use for cluster IP allocation. */
  cidr?: string;
}

export const CloudVmCluster: Schema.Schema<CloudVmCluster> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(CloudVmClusterProperties),
    odbSubnet: Schema.optional(Schema.String),
    network: Schema.optional(Schema.String),
    exadataInfrastructure: Schema.optional(Schema.String),
    backupOdbSubnet: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    backupSubnetCidr: Schema.optional(Schema.String),
    odbNetwork: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    identityConnector: Schema.optional(IdentityConnector),
    gcpOracleZone: Schema.optional(Schema.String),
    cidr: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudVmCluster" });

export interface AutonomousDatabase {
  /** Output only. The ID of the subscription entitlement associated with the Autonomous Database. */
  entitlementId?: string;
  /** Optional. Immutable. The password for the default ADMIN user. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPassword?: string;
  /** Optional. Immutable. The name of the OdbSubnet associated with the Autonomous Database. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Optional. The properties of the Autonomous Database. */
  properties?: AutonomousDatabaseProperties;
  /** Optional. Immutable. The source Autonomous Database configuration for the standby Autonomous Database. The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation. */
  sourceConfig?: SourceConfig;
  /** Optional. Immutable. The name of the VPC network used by the Autonomous Database in the following format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Identifier. The name of the Autonomous Database resource in the following format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database} */
  name?: string;
  /** Optional. Immutable. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters. */
  database?: string;
  /** Output only. The date and time that the Autonomous Database was created. */
  createTime?: string;
  /** Optional. Immutable. The subnet CIDR range for the Autonomous Database. */
  cidr?: string;
  /** Output only. The peer Autonomous Database names of the given Autonomous Database. */
  peerAutonomousDatabases?: ReadonlyArray<string>;
  /** Optional. Immutable. The display name for the Autonomous Database. The name does not have to be unique within your project. */
  displayName?: string;
  /** Output only. List of supported GCP region to clone the Autonomous Database for disaster recovery. Format: `project/{project}/locations/{location}`. */
  disasterRecoverySupportedLocations?: ReadonlyArray<string>;
  /** Optional. Immutable. The resource name of a secret version in Secret Manager which contains the database admin user's password. Format: projects/{project}/secrets/{secret}/versions/{version}. Note: Only one of `admin_password_secret_version` or `admin_password` can be populated. */
  adminPasswordSecretVersion?: string;
  /** Optional. The labels or tags associated with the Autonomous Database. */
  labels?: Record<string, string>;
  /** Optional. Immutable. The name of the OdbNetwork associated with the Autonomous Database. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
}

export const AutonomousDatabase: Schema.Schema<AutonomousDatabase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlementId: Schema.optional(Schema.String),
    adminPassword: Schema.optional(Schema.String),
    odbSubnet: Schema.optional(Schema.String),
    properties: Schema.optional(AutonomousDatabaseProperties),
    sourceConfig: Schema.optional(SourceConfig),
    network: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cidr: Schema.optional(Schema.String),
    peerAutonomousDatabases: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    disasterRecoverySupportedLocations: Schema.optional(
      Schema.Array(Schema.String),
    ),
    adminPasswordSecretVersion: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    odbNetwork: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabase" });

export interface ListAutonomousDatabasesResponse {
  /** The list of Autonomous Databases. */
  autonomousDatabases?: ReadonlyArray<AutonomousDatabase>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDatabasesResponse: Schema.Schema<ListAutonomousDatabasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autonomousDatabases: Schema.optional(Schema.Array(AutonomousDatabase)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDatabasesResponse" });

export interface RestartAutonomousDatabaseRequest {}

export const RestartAutonomousDatabaseRequest: Schema.Schema<RestartAutonomousDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RestartAutonomousDatabaseRequest",
  });

export interface DbNode {
  /** Identifier. The name of the database node resource in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}/dbNodes/{db_node} */
  name?: string;
  /** Optional. Various properties of the database node. */
  properties?: DbNodeProperties;
}

export const DbNode: Schema.Schema<DbNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    properties: Schema.optional(DbNodeProperties),
  }).annotate({ identifier: "DbNode" });

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

export interface FailoverAutonomousDatabaseRequest {
  /** Optional. The peer database name to fail over to. Required for cross-region standby, and must be omitted for in-region Data Guard. */
  peerAutonomousDatabase?: string;
}

export const FailoverAutonomousDatabaseRequest: Schema.Schema<FailoverAutonomousDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peerAutonomousDatabase: Schema.optional(Schema.String),
  }).annotate({ identifier: "FailoverAutonomousDatabaseRequest" });

export interface ListDbSystemInitialStorageSizesResponse {
  /** The list of DbSystemInitialStorageSizes. */
  dbSystemInitialStorageSizes?: ReadonlyArray<DbSystemInitialStorageSize>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbSystemInitialStorageSizesResponse: Schema.Schema<ListDbSystemInitialStorageSizesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dbSystemInitialStorageSizes: Schema.optional(
      Schema.Array(DbSystemInitialStorageSize),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbSystemInitialStorageSizesResponse" });

export interface OdbNetwork {
  /** Required. The name of the VPC network in the following format: projects/{project}/global/networks/{network} */
  network?: string;
  /** Optional. Labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Optional. The GCP Oracle zone where OdbNetwork is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Output only. State of the ODB Network. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "TERMINATING"
    | "FAILED"
    | (string & {});
  /** Output only. The ID of the subscription entitlement associated with the OdbNetwork. */
  entitlementId?: string;
  /** Output only. The date and time that the OdbNetwork was created. */
  createTime?: string;
  /** Identifier. The name of the OdbNetwork resource in the following format: projects/{project}/locations/{region}/odbNetworks/{odb_network} */
  name?: string;
}

export const OdbNetwork: Schema.Schema<OdbNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    gcpOracleZone: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "OdbNetwork" });

export interface StartAutonomousDatabaseRequest {}

export const StartAutonomousDatabaseRequest: Schema.Schema<StartAutonomousDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "StartAutonomousDatabaseRequest",
  });

export interface AutonomousDbVersion {
  /** Output only. The Autonomous Database workload type. */
  dbWorkload?:
    | "DB_WORKLOAD_UNSPECIFIED"
    | "OLTP"
    | "DW"
    | "AJD"
    | "APEX"
    | (string & {});
  /** Identifier. The name of the Autonomous Database Version resource with the format: projects/{project}/locations/{region}/autonomousDbVersions/{autonomous_db_version} */
  name?: string;
  /** Output only. An Oracle Database version for Autonomous Database. */
  version?: string;
  /** Output only. A URL that points to a detailed description of the Autonomous Database version. */
  workloadUri?: string;
}

export const AutonomousDbVersion: Schema.Schema<AutonomousDbVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dbWorkload: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    workloadUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDbVersion" });

export interface ListAutonomousDbVersionsResponse {
  /** The list of Autonomous Database versions. */
  autonomousDbVersions?: ReadonlyArray<AutonomousDbVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDbVersionsResponse: Schema.Schema<ListAutonomousDbVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autonomousDbVersions: Schema.optional(Schema.Array(AutonomousDbVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDbVersionsResponse" });

export interface ListDbSystemShapesResponse {
  /** The list of Database System shapes. */
  dbSystemShapes?: ReadonlyArray<DbSystemShape>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListDbSystemShapesResponse: Schema.Schema<ListDbSystemShapesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dbSystemShapes: Schema.optional(Schema.Array(DbSystemShape)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbSystemShapesResponse" });

export interface ListCloudVmClustersResponse {
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of VM Clusters. */
  cloudVmClusters?: ReadonlyArray<CloudVmCluster>;
  /** A token to fetch the next page of results. */
  nextPageToken?: string;
}

export const ListCloudVmClustersResponse: Schema.Schema<ListCloudVmClustersResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    cloudVmClusters: Schema.optional(Schema.Array(CloudVmCluster)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCloudVmClustersResponse" });

export interface SwitchoverAutonomousDatabaseRequest {
  /** Optional. The peer database name to switch over to. Required for cross-region standby, and must be omitted for in-region Data Guard. */
  peerAutonomousDatabase?: string;
}

export const SwitchoverAutonomousDatabaseRequest: Schema.Schema<SwitchoverAutonomousDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peerAutonomousDatabase: Schema.optional(Schema.String),
  }).annotate({ identifier: "SwitchoverAutonomousDatabaseRequest" });

export interface GiVersion {
  /** Identifier. The name of the Oracle Grid Infrastructure (GI) version resource with the format: projects/{project}/locations/{region}/giVersions/{gi_versions} */
  name?: string;
  /** Optional. version */
  version?: string;
}

export const GiVersion: Schema.Schema<GiVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GiVersion" });

export interface OdbSubnet {
  /** Identifier. The name of the OdbSubnet resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  name?: string;
  /** Required. The CIDR range of the subnet. */
  cidrRange?: string;
  /** Required. Purpose of the subnet. */
  purpose?:
    | "PURPOSE_UNSPECIFIED"
    | "CLIENT_SUBNET"
    | "BACKUP_SUBNET"
    | (string & {});
  /** Output only. The date and time that the OdbNetwork was created. */
  createTime?: string;
  /** Optional. Labels or tags associated with the resource. */
  labels?: Record<string, string>;
  /** Output only. State of the ODB Subnet. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PROVISIONING"
    | "AVAILABLE"
    | "TERMINATING"
    | "FAILED"
    | (string & {});
}

export const OdbSubnet: Schema.Schema<OdbSubnet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    cidrRange: Schema.optional(Schema.String),
    purpose: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "OdbSubnet" });

export interface ListAutonomousDatabaseBackupsResponse {
  /** The list of Autonomous Database Backups. */
  autonomousDatabaseBackups?: ReadonlyArray<AutonomousDatabaseBackup>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDatabaseBackupsResponse: Schema.Schema<ListAutonomousDatabaseBackupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autonomousDatabaseBackups: Schema.optional(
      Schema.Array(AutonomousDatabaseBackup),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDatabaseBackupsResponse" });

export interface ListPluggableDatabasesResponse {
  /** The list of PluggableDatabases. */
  pluggableDatabases?: ReadonlyArray<PluggableDatabase>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListPluggableDatabasesResponse: Schema.Schema<ListPluggableDatabasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pluggableDatabases: Schema.optional(Schema.Array(PluggableDatabase)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPluggableDatabasesResponse" });

export interface DbSystem {
  /** Output only. The date and time that the DbSystem was created. */
  createTime?: string;
  /** Identifier. The name of the DbSystem resource in the following format: projects/{project}/locations/{region}/dbSystems/{db_system} */
  name?: string;
  /** Optional. The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability. */
  gcpOracleZone?: string;
  /** Optional. The properties of the DbSystem. */
  properties?: DbSystemProperties;
  /** Required. The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet} */
  odbSubnet?: string;
  /** Output only. The ID of the subscription entitlement associated with the DbSystem */
  entitlementId?: string;
  /** Output only. HTTPS link to OCI resources exposed to Customer via UI Interface. */
  ociUrl?: string;
  /** Required. The display name for the System db. The name does not have to be unique within your project. */
  displayName?: string;
  /** Optional. The name of the OdbNetwork associated with the DbSystem. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet. */
  odbNetwork?: string;
  /** Optional. The labels or tags associated with the DbSystem. */
  labels?: Record<string, string>;
}

export const DbSystem: Schema.Schema<DbSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    gcpOracleZone: Schema.optional(Schema.String),
    properties: Schema.optional(DbSystemProperties),
    odbSubnet: Schema.optional(Schema.String),
    entitlementId: Schema.optional(Schema.String),
    ociUrl: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    odbNetwork: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "DbSystem" });

export interface ListOdbNetworksResponse {
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of ODB Networks. */
  odbNetworks?: ReadonlyArray<OdbNetwork>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListOdbNetworksResponse: Schema.Schema<ListOdbNetworksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    odbNetworks: Schema.optional(Schema.Array(OdbNetwork)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOdbNetworksResponse" });

export interface RemoveVirtualMachineExadbVmClusterRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The list of host names of db nodes to be removed from the ExadbVmCluster. */
  hostnames?: ReadonlyArray<string>;
}

export const RemoveVirtualMachineExadbVmClusterRequest: Schema.Schema<RemoveVirtualMachineExadbVmClusterRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    hostnames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RemoveVirtualMachineExadbVmClusterRequest" });

export interface RestoreAutonomousDatabaseRequest {
  /** Required. The time and date to restore the database to. */
  restoreTime?: string;
}

export const RestoreAutonomousDatabaseRequest: Schema.Schema<RestoreAutonomousDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    restoreTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RestoreAutonomousDatabaseRequest" });

export interface ListOdbSubnetsResponse {
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The list of ODB Subnets. */
  odbSubnets?: ReadonlyArray<OdbSubnet>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListOdbSubnetsResponse: Schema.Schema<ListOdbSubnetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    odbSubnets: Schema.optional(Schema.Array(OdbSubnet)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOdbSubnetsResponse" });

export interface AutonomousDatabaseCharacterSet {
  /** Output only. The character set type for the Autonomous Database. */
  characterSetType?:
    | "CHARACTER_SET_TYPE_UNSPECIFIED"
    | "DATABASE"
    | "NATIONAL"
    | (string & {});
  /** Identifier. The name of the Autonomous Database Character Set resource in the following format: projects/{project}/locations/{region}/autonomousDatabaseCharacterSets/{autonomous_database_character_set} */
  name?: string;
  /** Output only. The character set name for the Autonomous Database which is the ID in the resource name. */
  characterSet?: string;
}

export const AutonomousDatabaseCharacterSet: Schema.Schema<AutonomousDatabaseCharacterSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    characterSetType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    characterSet: Schema.optional(Schema.String),
  }).annotate({ identifier: "AutonomousDatabaseCharacterSet" });

export interface ListAutonomousDatabaseCharacterSetsResponse {
  /** The list of Autonomous Database Character Sets. */
  autonomousDatabaseCharacterSets?: ReadonlyArray<AutonomousDatabaseCharacterSet>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAutonomousDatabaseCharacterSetsResponse: Schema.Schema<ListAutonomousDatabaseCharacterSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autonomousDatabaseCharacterSets: Schema.optional(
      Schema.Array(AutonomousDatabaseCharacterSet),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutonomousDatabaseCharacterSetsResponse" });

export interface LocationMetadata {
  /** Output only. Google Cloud Platform Oracle zones in a location. */
  gcpOracleZones?: ReadonlyArray<string>;
}

export const LocationMetadata: Schema.Schema<LocationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gcpOracleZones: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LocationMetadata" });

export interface Operation {
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

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

export interface ListDbNodesResponse {
  /** The list of DB Nodes */
  dbNodes?: ReadonlyArray<DbNode>;
  /** A token identifying a page of results the node should return. */
  nextPageToken?: string;
}

export const ListDbNodesResponse: Schema.Schema<ListDbNodesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dbNodes: Schema.optional(Schema.Array(DbNode)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDbNodesResponse" });

export interface ListMinorVersionsResponse {
  /** The list of MinorVersions. */
  minorVersions?: ReadonlyArray<MinorVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListMinorVersionsResponse: Schema.Schema<ListMinorVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minorVersions: Schema.optional(Schema.Array(MinorVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMinorVersionsResponse" });

export interface GenerateAutonomousDatabaseWalletResponse {
  /** Output only. The base64 encoded wallet files. */
  archiveContent?: string;
}

export const GenerateAutonomousDatabaseWalletResponse: Schema.Schema<GenerateAutonomousDatabaseWalletResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    archiveContent: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenerateAutonomousDatabaseWalletResponse" });

export interface ListGiVersionsResponse {
  /** The list of Oracle Grid Infrastructure (GI) versions. */
  giVersions?: ReadonlyArray<GiVersion>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListGiVersionsResponse: Schema.Schema<ListGiVersionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    giVersions: Schema.optional(Schema.Array(GiVersion)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGiVersionsResponse" });

export interface ListExascaleDbStorageVaultsResponse {
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** The ExascaleDbStorageVaults. */
  exascaleDbStorageVaults?: ReadonlyArray<ExascaleDbStorageVault>;
  /** A token identifying a page of results the server should return. If present, the next page token can be provided to a subsequent ListExascaleDbStorageVaults call to list the next page. If empty, there are no more pages. */
  nextPageToken?: string;
}

export const ListExascaleDbStorageVaultsResponse: Schema.Schema<ListExascaleDbStorageVaultsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    exascaleDbStorageVaults: Schema.optional(
      Schema.Array(ExascaleDbStorageVault),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListExascaleDbStorageVaultsResponse" });

export interface ListEntitlementsResponse {
  /** The list of Entitlements */
  entitlements?: ReadonlyArray<Entitlement>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListEntitlementsResponse: Schema.Schema<ListEntitlementsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entitlements: Schema.optional(Schema.Array(Entitlement)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListEntitlementsResponse" });

export interface ListCloudExadataInfrastructuresResponse {
  /** The list of Exadata Infrastructures. */
  cloudExadataInfrastructures?: ReadonlyArray<CloudExadataInfrastructure>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
  /** A token for fetching next page of response. */
  nextPageToken?: string;
}

export const ListCloudExadataInfrastructuresResponse: Schema.Schema<ListCloudExadataInfrastructuresResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudExadataInfrastructures: Schema.optional(
      Schema.Array(CloudExadataInfrastructure),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCloudExadataInfrastructuresResponse" });

export interface ListDbSystemsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of DbSystems. */
  dbSystems?: ReadonlyArray<DbSystem>;
  /** Unreachable locations when listing resources across all locations using wildcard location '-'. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDbSystemsResponse: Schema.Schema<ListDbSystemsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    dbSystems: Schema.optional(Schema.Array(DbSystem)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDbSystemsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The status of the operation. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. An estimated percentage of the operation that has been completed at a given moment of time, between 0 and 100. */
  percentComplete?: number;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    percentComplete: Schema.optional(Schema.Number),
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
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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

export interface ListProjectsLocationsGiVersionsRequest {
  /** Optional. An expression for filtering the results of the request. Only the shape, gcp_oracle_zone and gi_version fields are supported in this format: `shape="{shape}"`. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsGiVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/giVersions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGiVersionsRequest>;

export type ListProjectsLocationsGiVersionsResponse = ListGiVersionsResponse;
export const ListProjectsLocationsGiVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGiVersionsResponse;

export type ListProjectsLocationsGiVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location. */
export const listProjectsLocationsGiVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsGiVersionsRequest,
  ListProjectsLocationsGiVersionsResponse,
  ListProjectsLocationsGiVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGiVersionsRequest,
  output: ListProjectsLocationsGiVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsGiVersionsMinorVersionsRequest {
  /** Optional. An expression for filtering the results of the request. Only shapeFamily and gcp_oracle_zone_id are supported in this format: `shape_family="{shapeFamily}" AND gcp_oracle_zone_id="{gcp_oracle_zone_id}"`. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 System Versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Required. The parent value for the MinorVersion resource with the format: projects/{project}/locations/{location}/giVersions/{gi_version} */
  parent: string;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
}

export const ListProjectsLocationsGiVersionsMinorVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/minorVersions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGiVersionsMinorVersionsRequest>;

export type ListProjectsLocationsGiVersionsMinorVersionsResponse =
  ListMinorVersionsResponse;
export const ListProjectsLocationsGiVersionsMinorVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListMinorVersionsResponse;

export type ListProjectsLocationsGiVersionsMinorVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the valid minor versions for the given project, location, gi version and shape family. */
export const listProjectsLocationsGiVersionsMinorVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsGiVersionsMinorVersionsRequest,
  ListProjectsLocationsGiVersionsMinorVersionsResponse,
  ListProjectsLocationsGiVersionsMinorVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGiVersionsMinorVersionsRequest,
  output: ListProjectsLocationsGiVersionsMinorVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDbSystemInitialStorageSizesRequest {
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbSystemInitialStorageSizes will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Required. The parent value for the DbSystemInitialStorageSize resource with the format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDbSystemInitialStorageSizesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbSystemInitialStorageSizes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDbSystemInitialStorageSizesRequest>;

export type ListProjectsLocationsDbSystemInitialStorageSizesResponse =
  ListDbSystemInitialStorageSizesResponse;
export const ListProjectsLocationsDbSystemInitialStorageSizesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbSystemInitialStorageSizesResponse;

export type ListProjectsLocationsDbSystemInitialStorageSizesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the DbSystemInitialStorageSizes for the given project and location. */
export const listProjectsLocationsDbSystemInitialStorageSizes: API.PaginatedOperationMethod<
  ListProjectsLocationsDbSystemInitialStorageSizesRequest,
  ListProjectsLocationsDbSystemInitialStorageSizesResponse,
  ListProjectsLocationsDbSystemInitialStorageSizesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbSystemInitialStorageSizesRequest,
  output: ListProjectsLocationsDbSystemInitialStorageSizesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsCloudVmClustersRequest {
  /** Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000. */
  pageSize?: number;
  /** Required. The name of the parent in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying the page of results the server returns. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
}

export const ListProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/cloudVmClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCloudVmClustersRequest>;

export type ListProjectsLocationsCloudVmClustersResponse =
  ListCloudVmClustersResponse;
export const ListProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCloudVmClustersResponse;

export type ListProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the VM Clusters in a given project and location. */
export const listProjectsLocationsCloudVmClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudVmClustersRequest,
  ListProjectsLocationsCloudVmClustersResponse,
  ListProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudVmClustersRequest,
  output: ListProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCloudVmClustersRequest {
  /** Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. */
  name: string;
}

export const GetProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCloudVmClustersRequest>;

export type GetProjectsLocationsCloudVmClustersResponse = CloudVmCluster;
export const GetProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ CloudVmCluster;

export type GetProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single VM Cluster. */
export const getProjectsLocationsCloudVmClusters: API.OperationMethod<
  GetProjectsLocationsCloudVmClustersRequest,
  GetProjectsLocationsCloudVmClustersResponse,
  GetProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCloudVmClustersRequest,
  output: GetProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsCloudVmClustersRequest {
  /** Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  cloudVmClusterId?: string;
  /** Required. The name of the parent in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: CloudVmCluster;
}

export const CreateProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudVmClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("cloudVmClusterId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(CloudVmCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/cloudVmClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCloudVmClustersRequest>;

export type CreateProjectsLocationsCloudVmClustersResponse = Operation;
export const CreateProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new VM Cluster in a given project and location. */
export const createProjectsLocationsCloudVmClusters: API.OperationMethod<
  CreateProjectsLocationsCloudVmClustersRequest,
  CreateProjectsLocationsCloudVmClustersResponse,
  CreateProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCloudVmClustersRequest,
  output: CreateProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCloudVmClustersRequest {
  /** Required. The name of the Cloud VM Cluster in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloud_vm_cluster}. */
  name: string;
  /** Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted. */
  force?: boolean;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsCloudVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCloudVmClustersRequest>;

export type DeleteProjectsLocationsCloudVmClustersResponse = Operation;
export const DeleteProjectsLocationsCloudVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCloudVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single VM Cluster. */
export const deleteProjectsLocationsCloudVmClusters: API.OperationMethod<
  DeleteProjectsLocationsCloudVmClustersRequest,
  DeleteProjectsLocationsCloudVmClustersResponse,
  DeleteProjectsLocationsCloudVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCloudVmClustersRequest,
  output: DeleteProjectsLocationsCloudVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCloudVmClustersDbNodesRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for database node in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloudVmCluster}. . */
  parent: string;
  /** Optional. A token identifying a page of results the node should return. */
  pageToken?: string;
}

export const ListProjectsLocationsCloudVmClustersDbNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbNodes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCloudVmClustersDbNodesRequest>;

export type ListProjectsLocationsCloudVmClustersDbNodesResponse =
  ListDbNodesResponse;
export const ListProjectsLocationsCloudVmClustersDbNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbNodesResponse;

export type ListProjectsLocationsCloudVmClustersDbNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database nodes of a VM Cluster. */
export const listProjectsLocationsCloudVmClustersDbNodes: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudVmClustersDbNodesRequest,
  ListProjectsLocationsCloudVmClustersDbNodesResponse,
  ListProjectsLocationsCloudVmClustersDbNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudVmClustersDbNodesRequest,
  output: ListProjectsLocationsCloudVmClustersDbNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsOdbNetworksRequest {
  /** Required. The parent value for the OdbNetwork in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The ID of the OdbNetwork to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  odbNetworkId?: string;
  /** Request body */
  body?: OdbNetwork;
}

export const CreateProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    odbNetworkId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("odbNetworkId"),
    ),
    body: Schema.optional(OdbNetwork).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/odbNetworks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsOdbNetworksRequest>;

export type CreateProjectsLocationsOdbNetworksResponse = Operation;
export const CreateProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ODB Network in a given project and location. */
export const createProjectsLocationsOdbNetworks: API.OperationMethod<
  CreateProjectsLocationsOdbNetworksRequest,
  CreateProjectsLocationsOdbNetworksResponse,
  CreateProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsOdbNetworksRequest,
  output: CreateProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOdbNetworksRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the resource in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  name: string;
}

export const DeleteProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOdbNetworksRequest>;

export type DeleteProjectsLocationsOdbNetworksResponse = Operation;
export const DeleteProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ODB Network. */
export const deleteProjectsLocationsOdbNetworks: API.OperationMethod<
  DeleteProjectsLocationsOdbNetworksRequest,
  DeleteProjectsLocationsOdbNetworksResponse,
  DeleteProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOdbNetworksRequest,
  output: DeleteProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOdbNetworksRequest {
  /** Required. The parent value for the ODB Network in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
}

export const ListProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/odbNetworks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOdbNetworksRequest>;

export type ListProjectsLocationsOdbNetworksResponse = ListOdbNetworksResponse;
export const ListProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOdbNetworksResponse;

export type ListProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the ODB Networks in a given project and location. */
export const listProjectsLocationsOdbNetworks: API.PaginatedOperationMethod<
  ListProjectsLocationsOdbNetworksRequest,
  ListProjectsLocationsOdbNetworksResponse,
  ListProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOdbNetworksRequest,
  output: ListProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOdbNetworksRequest {
  /** Required. The name of the OdbNetwork in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  name: string;
}

export const GetProjectsLocationsOdbNetworksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOdbNetworksRequest>;

export type GetProjectsLocationsOdbNetworksResponse = OdbNetwork;
export const GetProjectsLocationsOdbNetworksResponse =
  /*@__PURE__*/ /*#__PURE__*/ OdbNetwork;

export type GetProjectsLocationsOdbNetworksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ODB Network. */
export const getProjectsLocationsOdbNetworks: API.OperationMethod<
  GetProjectsLocationsOdbNetworksRequest,
  GetProjectsLocationsOdbNetworksResponse,
  GetProjectsLocationsOdbNetworksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOdbNetworksRequest,
  output: GetProjectsLocationsOdbNetworksResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  parent: string;
  /** Required. The ID of the OdbSubnet to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  odbSubnetId?: string;
  /** Request body */
  body?: OdbSubnet;
}

export const CreateProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    odbSubnetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("odbSubnetId"),
    ),
    body: Schema.optional(OdbSubnet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/odbSubnets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type CreateProjectsLocationsOdbNetworksOdbSubnetsResponse = Operation;
export const CreateProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ODB Subnet in a given ODB Network. */
export const createProjectsLocationsOdbNetworksOdbSubnets: API.OperationMethod<
  CreateProjectsLocationsOdbNetworksOdbSubnetsRequest,
  CreateProjectsLocationsOdbNetworksOdbSubnetsResponse,
  CreateProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: CreateProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the resource in the following format: projects/{project}/locations/{region}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. */
  name: string;
}

export const DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse = Operation;
export const DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ODB Subnet. */
export const deleteProjectsLocationsOdbNetworksOdbSubnets: API.OperationMethod<
  DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest,
  DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse,
  DeleteProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: DeleteProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Required. The parent value for the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/odbSubnets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type ListProjectsLocationsOdbNetworksOdbSubnetsResponse =
  ListOdbSubnetsResponse;
export const ListProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOdbSubnetsResponse;

export type ListProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the ODB Subnets in a given ODB Network. */
export const listProjectsLocationsOdbNetworksOdbSubnets: API.PaginatedOperationMethod<
  ListProjectsLocationsOdbNetworksOdbSubnetsRequest,
  ListProjectsLocationsOdbNetworksOdbSubnetsResponse,
  ListProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: ListProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOdbNetworksOdbSubnetsRequest {
  /** Required. The name of the OdbSubnet in the following format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. */
  name: string;
}

export const GetProjectsLocationsOdbNetworksOdbSubnetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOdbNetworksOdbSubnetsRequest>;

export type GetProjectsLocationsOdbNetworksOdbSubnetsResponse = OdbSubnet;
export const GetProjectsLocationsOdbNetworksOdbSubnetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ OdbSubnet;

export type GetProjectsLocationsOdbNetworksOdbSubnetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ODB Subnet. */
export const getProjectsLocationsOdbNetworksOdbSubnets: API.OperationMethod<
  GetProjectsLocationsOdbNetworksOdbSubnetsRequest,
  GetProjectsLocationsOdbNetworksOdbSubnetsResponse,
  GetProjectsLocationsOdbNetworksOdbSubnetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOdbNetworksOdbSubnetsRequest,
  output: GetProjectsLocationsOdbNetworksOdbSubnetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDbSystemShapesRequest {
  /** Optional. An expression for filtering the results of the request. Only the gcp_oracle_zone_id field is supported in this format: `gcp_oracle_zone_id="{gcp_oracle_zone_id}"`. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for Database System Shapes in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsDbSystemShapesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbSystemShapes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDbSystemShapesRequest>;

export type ListProjectsLocationsDbSystemShapesResponse =
  ListDbSystemShapesResponse;
export const ListProjectsLocationsDbSystemShapesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbSystemShapesResponse;

export type ListProjectsLocationsDbSystemShapesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database system shapes available for the project and location. */
export const listProjectsLocationsDbSystemShapes: API.PaginatedOperationMethod<
  ListProjectsLocationsDbSystemShapesRequest,
  ListProjectsLocationsDbSystemShapesResponse,
  ListProjectsLocationsDbSystemShapesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbSystemShapesRequest,
  output: ListProjectsLocationsDbSystemShapesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAutonomousDatabasesRequest {
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autonomousDatabases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAutonomousDatabasesRequest>;

export type ListProjectsLocationsAutonomousDatabasesResponse =
  ListAutonomousDatabasesResponse;
export const ListProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutonomousDatabasesResponse;

export type ListProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the Autonomous Databases in a given project and location. */
export const listProjectsLocationsAutonomousDatabases: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDatabasesRequest,
  ListProjectsLocationsAutonomousDatabasesResponse,
  ListProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDatabasesRequest,
  output: ListProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsAutonomousDatabasesRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the Exadata resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The name of the Autonomous Database resource in the following format: projects/{project}/locations/{region}/autonomousDatabases/{autonomous_database} */
  name: string;
  /** Request body */
  body?: AutonomousDatabase;
}

export const PatchProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AutonomousDatabase).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAutonomousDatabasesRequest>;

export type PatchProjectsLocationsAutonomousDatabasesResponse = Operation;
export const PatchProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a single Autonomous Database. */
export const patchProjectsLocationsAutonomousDatabases: API.OperationMethod<
  PatchProjectsLocationsAutonomousDatabasesRequest,
  PatchProjectsLocationsAutonomousDatabasesResponse,
  PatchProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAutonomousDatabasesRequest,
  output: PatchProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FailoverProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: FailoverAutonomousDatabaseRequest;
}

export const FailoverProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(FailoverAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:failover", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<FailoverProjectsLocationsAutonomousDatabasesRequest>;

export type FailoverProjectsLocationsAutonomousDatabasesResponse = Operation;
export const FailoverProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type FailoverProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a failover to target autonomous database from the associated primary database. */
export const failoverProjectsLocationsAutonomousDatabases: API.OperationMethod<
  FailoverProjectsLocationsAutonomousDatabasesRequest,
  FailoverProjectsLocationsAutonomousDatabasesResponse,
  FailoverProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FailoverProjectsLocationsAutonomousDatabasesRequest,
  output: FailoverProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface StartProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: StartAutonomousDatabaseRequest;
}

export const StartProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StartAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:start", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StartProjectsLocationsAutonomousDatabasesRequest>;

export type StartProjectsLocationsAutonomousDatabasesResponse = Operation;
export const StartProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StartProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts an Autonomous Database. */
export const startProjectsLocationsAutonomousDatabases: API.OperationMethod<
  StartProjectsLocationsAutonomousDatabasesRequest,
  StartProjectsLocationsAutonomousDatabasesResponse,
  StartProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StartProjectsLocationsAutonomousDatabasesRequest,
  output: StartProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the resource in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAutonomousDatabasesRequest>;

export type DeleteProjectsLocationsAutonomousDatabasesResponse = Operation;
export const DeleteProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Autonomous Database. */
export const deleteProjectsLocationsAutonomousDatabases: API.OperationMethod<
  DeleteProjectsLocationsAutonomousDatabasesRequest,
  DeleteProjectsLocationsAutonomousDatabasesResponse,
  DeleteProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAutonomousDatabasesRequest,
  output: DeleteProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SwitchoverProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: SwitchoverAutonomousDatabaseRequest;
}

export const SwitchoverProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SwitchoverAutonomousDatabaseRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:switchover", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SwitchoverProjectsLocationsAutonomousDatabasesRequest>;

export type SwitchoverProjectsLocationsAutonomousDatabasesResponse = Operation;
export const SwitchoverProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SwitchoverProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Initiates a switchover of specified autonomous database to the associated peer database. */
export const switchoverProjectsLocationsAutonomousDatabases: API.OperationMethod<
  SwitchoverProjectsLocationsAutonomousDatabasesRequest,
  SwitchoverProjectsLocationsAutonomousDatabasesResponse,
  SwitchoverProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SwitchoverProjectsLocationsAutonomousDatabasesRequest,
  output: SwitchoverProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestartProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: RestartAutonomousDatabaseRequest;
}

export const RestartProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestartAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restart", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestartProjectsLocationsAutonomousDatabasesRequest>;

export type RestartProjectsLocationsAutonomousDatabasesResponse = Operation;
export const RestartProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestartProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restarts an Autonomous Database. */
export const restartProjectsLocationsAutonomousDatabases: API.OperationMethod<
  RestartProjectsLocationsAutonomousDatabasesRequest,
  RestartProjectsLocationsAutonomousDatabasesResponse,
  RestartProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestartProjectsLocationsAutonomousDatabasesRequest,
  output: RestartProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the parent in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  autonomousDatabaseId?: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AutonomousDatabase;
}

export const CreateProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    autonomousDatabaseId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("autonomousDatabaseId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AutonomousDatabase).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/autonomousDatabases",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAutonomousDatabasesRequest>;

export type CreateProjectsLocationsAutonomousDatabasesResponse = Operation;
export const CreateProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Autonomous Database in a given project and location. */
export const createProjectsLocationsAutonomousDatabases: API.OperationMethod<
  CreateProjectsLocationsAutonomousDatabasesRequest,
  CreateProjectsLocationsAutonomousDatabasesResponse,
  CreateProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAutonomousDatabasesRequest,
  output: CreateProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RestoreProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: RestoreAutonomousDatabaseRequest;
}

export const RestoreProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RestoreAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:restore", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsLocationsAutonomousDatabasesRequest>;

export type RestoreProjectsLocationsAutonomousDatabasesResponse = Operation;
export const RestoreProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RestoreProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Restores a single Autonomous Database. */
export const restoreProjectsLocationsAutonomousDatabases: API.OperationMethod<
  RestoreProjectsLocationsAutonomousDatabasesRequest,
  RestoreProjectsLocationsAutonomousDatabasesResponse,
  RestoreProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsLocationsAutonomousDatabasesRequest,
  output: RestoreProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GenerateWalletProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: GenerateAutonomousDatabaseWalletRequest;
}

export const GenerateWalletProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GenerateAutonomousDatabaseWalletRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:generateWallet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GenerateWalletProjectsLocationsAutonomousDatabasesRequest>;

export type GenerateWalletProjectsLocationsAutonomousDatabasesResponse =
  GenerateAutonomousDatabaseWalletResponse;
export const GenerateWalletProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GenerateAutonomousDatabaseWalletResponse;

export type GenerateWalletProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates a wallet for an Autonomous Database. */
export const generateWalletProjectsLocationsAutonomousDatabases: API.OperationMethod<
  GenerateWalletProjectsLocationsAutonomousDatabasesRequest,
  GenerateWalletProjectsLocationsAutonomousDatabasesResponse,
  GenerateWalletProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GenerateWalletProjectsLocationsAutonomousDatabasesRequest,
  output: GenerateWalletProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
}

export const GetProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAutonomousDatabasesRequest>;

export type GetProjectsLocationsAutonomousDatabasesResponse =
  AutonomousDatabase;
export const GetProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutonomousDatabase;

export type GetProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a single Autonomous Database. */
export const getProjectsLocationsAutonomousDatabases: API.OperationMethod<
  GetProjectsLocationsAutonomousDatabasesRequest,
  GetProjectsLocationsAutonomousDatabasesResponse,
  GetProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAutonomousDatabasesRequest,
  output: GetProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface StopProjectsLocationsAutonomousDatabasesRequest {
  /** Required. The name of the Autonomous Database in the following format: projects/{project}/locations/{location}/autonomousDatabases/{autonomous_database}. */
  name: string;
  /** Request body */
  body?: StopAutonomousDatabaseRequest;
}

export const StopProjectsLocationsAutonomousDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(StopAutonomousDatabaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:stop", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<StopProjectsLocationsAutonomousDatabasesRequest>;

export type StopProjectsLocationsAutonomousDatabasesResponse = Operation;
export const StopProjectsLocationsAutonomousDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type StopProjectsLocationsAutonomousDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Stops an Autonomous Database. */
export const stopProjectsLocationsAutonomousDatabases: API.OperationMethod<
  StopProjectsLocationsAutonomousDatabasesRequest,
  StopProjectsLocationsAutonomousDatabasesResponse,
  StopProjectsLocationsAutonomousDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StopProjectsLocationsAutonomousDatabasesRequest,
  output: StopProjectsLocationsAutonomousDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDatabasesRequest {
  /** Optional. An expression for filtering the results of the request. list for container databases is supported only with a valid dbSystem (full resource name) filter in this format: `dbSystem="projects/{project}/locations/{location}/dbSystems/{dbSystemId}"` */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 Databases will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Required. The parent resource name in the following format: projects/{project}/locations/{region} */
  parent: string;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/databases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDatabasesRequest>;

export type ListProjectsLocationsDatabasesResponse = ListDatabasesResponse;
export const ListProjectsLocationsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDatabasesResponse;

export type ListProjectsLocationsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the Databases for the given project, location and DbSystem. */
export const listProjectsLocationsDatabases: API.PaginatedOperationMethod<
  ListProjectsLocationsDatabasesRequest,
  ListProjectsLocationsDatabasesResponse,
  ListProjectsLocationsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDatabasesRequest,
  output: ListProjectsLocationsDatabasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDatabasesRequest {
  /** Required. The name of the Database resource in the following format: projects/{project}/locations/{region}/databases/{database} */
  name: string;
}

export const GetProjectsLocationsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDatabasesRequest>;

export type GetProjectsLocationsDatabasesResponse = Database;
export const GetProjectsLocationsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Database;

export type GetProjectsLocationsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Database. */
export const getProjectsLocationsDatabases: API.OperationMethod<
  GetProjectsLocationsDatabasesRequest,
  GetProjectsLocationsDatabasesResponse,
  GetProjectsLocationsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDatabasesRequest,
  output: GetProjectsLocationsDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsExadbVmClustersRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the ExadbVmCluster in the following format: projects/{project}/locations/{location}/exadbVmClusters/{exadb_vm_cluster}. */
  name: string;
}

export const DeleteProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsExadbVmClustersRequest>;

export type DeleteProjectsLocationsExadbVmClustersResponse = Operation;
export const DeleteProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Exadb (Exascale) VM Cluster. */
export const deleteProjectsLocationsExadbVmClusters: API.OperationMethod<
  DeleteProjectsLocationsExadbVmClustersRequest,
  DeleteProjectsLocationsExadbVmClustersResponse,
  DeleteProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsExadbVmClustersRequest,
  output: DeleteProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsExadbVmClustersRequest {
  /** Required. The name of the ExadbVmCluster in the following format: projects/{project}/locations/{location}/exadbVmClusters/{exadb_vm_cluster}. */
  name: string;
}

export const GetProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsExadbVmClustersRequest>;

export type GetProjectsLocationsExadbVmClustersResponse = ExadbVmCluster;
export const GetProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExadbVmCluster;

export type GetProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Exadb (Exascale) VM Cluster. */
export const getProjectsLocationsExadbVmClusters: API.OperationMethod<
  GetProjectsLocationsExadbVmClustersRequest,
  GetProjectsLocationsExadbVmClustersResponse,
  GetProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExadbVmClustersRequest,
  output: GetProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden],
}));

export interface RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest {
  /** Required. The name of the ExadbVmCluster in the following format: projects/{project}/locations/{location}/exadbVmClusters/{exadb_vm_cluster}. */
  name: string;
  /** Request body */
  body?: RemoveVirtualMachineExadbVmClusterRequest;
}

export const RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RemoveVirtualMachineExadbVmClusterRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:removeVirtualMachine",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest>;

export type RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse =
  Operation;
export const RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemoveVirtualMachineProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes virtual machines from an existing exadb vm cluster. */
export const removeVirtualMachineProjectsLocationsExadbVmClusters: API.OperationMethod<
  RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest,
  RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse,
  RemoveVirtualMachineProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveVirtualMachineProjectsLocationsExadbVmClustersRequest,
  output: RemoveVirtualMachineProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsExadbVmClustersRequest {
  /** Required. The value for parent of the ExadbVmCluster in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the ExadbVmCluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  exadbVmClusterId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ExadbVmCluster;
}

export const CreateProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    exadbVmClusterId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("exadbVmClusterId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ExadbVmCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/exadbVmClusters",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsExadbVmClustersRequest>;

export type CreateProjectsLocationsExadbVmClustersResponse = Operation;
export const CreateProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Exadb (Exascale) VM Cluster resource. */
export const createProjectsLocationsExadbVmClusters: API.OperationMethod<
  CreateProjectsLocationsExadbVmClustersRequest,
  CreateProjectsLocationsExadbVmClustersResponse,
  CreateProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsExadbVmClustersRequest,
  output: CreateProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsExadbVmClustersRequest {
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ExadbVmClusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Required. The parent value for ExadbVmClusters in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/exadbVmClusters" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsExadbVmClustersRequest>;

export type ListProjectsLocationsExadbVmClustersResponse =
  ListExadbVmClustersResponse;
export const ListProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExadbVmClustersResponse;

export type ListProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the Exadb (Exascale) VM Clusters for the given project and location. */
export const listProjectsLocationsExadbVmClusters: API.PaginatedOperationMethod<
  ListProjectsLocationsExadbVmClustersRequest,
  ListProjectsLocationsExadbVmClustersResponse,
  ListProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExadbVmClustersRequest,
  output: ListProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsExadbVmClustersRequest {
  /** Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project}/locations/{region}/exadbVmClusters/{exadb_vm_cluster} */
  name: string;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. A mask specifying which fields in th VM Cluster should be updated. A field specified in the mask is overwritten. If a mask isn't provided then all the fields in the VM Cluster are overwritten. */
  updateMask?: string;
  /** Request body */
  body?: ExadbVmCluster;
}

export const PatchProjectsLocationsExadbVmClustersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ExadbVmCluster).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsExadbVmClustersRequest>;

export type PatchProjectsLocationsExadbVmClustersResponse = Operation;
export const PatchProjectsLocationsExadbVmClustersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsExadbVmClustersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a single Exadb (Exascale) VM Cluster. To add virtual machines to existing exadb vm cluster, only pass the node count. */
export const patchProjectsLocationsExadbVmClusters: API.OperationMethod<
  PatchProjectsLocationsExadbVmClustersRequest,
  PatchProjectsLocationsExadbVmClustersResponse,
  PatchProjectsLocationsExadbVmClustersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsExadbVmClustersRequest,
  output: PatchProjectsLocationsExadbVmClustersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsExadbVmClustersDbNodesRequest {
  /** Required. The parent value for database node in the following format: projects/{project}/locations/{location}/cloudVmClusters/{cloudVmCluster}. . */
  parent: string;
  /** Optional. A token identifying a page of results the node should return. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsExadbVmClustersDbNodesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbNodes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsExadbVmClustersDbNodesRequest>;

export type ListProjectsLocationsExadbVmClustersDbNodesResponse =
  ListDbNodesResponse;
export const ListProjectsLocationsExadbVmClustersDbNodesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbNodesResponse;

export type ListProjectsLocationsExadbVmClustersDbNodesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database nodes of a VM Cluster. */
export const listProjectsLocationsExadbVmClustersDbNodes: API.PaginatedOperationMethod<
  ListProjectsLocationsExadbVmClustersDbNodesRequest,
  ListProjectsLocationsExadbVmClustersDbNodesResponse,
  ListProjectsLocationsExadbVmClustersDbNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExadbVmClustersDbNodesRequest,
  output: ListProjectsLocationsExadbVmClustersDbNodesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
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
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
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

export interface CreateProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  cloudExadataInfrastructureId?: string;
  /** Request body */
  body?: CloudExadataInfrastructure;
}

export const CreateProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    cloudExadataInfrastructureId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("cloudExadataInfrastructureId"),
    ),
    body: Schema.optional(CloudExadataInfrastructure).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/cloudExadataInfrastructures",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCloudExadataInfrastructuresRequest>;

export type CreateProjectsLocationsCloudExadataInfrastructuresResponse =
  Operation;
export const CreateProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new Exadata Infrastructure in a given project and location. */
export const createProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  CreateProjectsLocationsCloudExadataInfrastructuresRequest,
  CreateProjectsLocationsCloudExadataInfrastructuresResponse,
  CreateProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCloudExadataInfrastructuresRequest,
  output: CreateProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. */
  name: string;
  /** Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted. */
  force?: boolean;
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCloudExadataInfrastructuresRequest>;

export type DeleteProjectsLocationsCloudExadataInfrastructuresResponse =
  Operation;
export const DeleteProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single Exadata Infrastructure. */
export const deleteProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  DeleteProjectsLocationsCloudExadataInfrastructuresRequest,
  DeleteProjectsLocationsCloudExadataInfrastructuresResponse,
  DeleteProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCloudExadataInfrastructuresRequest,
  output: DeleteProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/cloudExadataInfrastructures" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCloudExadataInfrastructuresRequest>;

export type ListProjectsLocationsCloudExadataInfrastructuresResponse =
  ListCloudExadataInfrastructuresResponse;
export const ListProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCloudExadataInfrastructuresResponse;

export type ListProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Exadata Infrastructures in a given project and location. */
export const listProjectsLocationsCloudExadataInfrastructures: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudExadataInfrastructuresRequest,
  ListProjectsLocationsCloudExadataInfrastructuresResponse,
  ListProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudExadataInfrastructuresRequest,
  output: ListProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsCloudExadataInfrastructuresRequest {
  /** Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloud_exadata_infrastructure}. */
  name: string;
}

export const GetProjectsLocationsCloudExadataInfrastructuresRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCloudExadataInfrastructuresRequest>;

export type GetProjectsLocationsCloudExadataInfrastructuresResponse =
  CloudExadataInfrastructure;
export const GetProjectsLocationsCloudExadataInfrastructuresResponse =
  /*@__PURE__*/ /*#__PURE__*/ CloudExadataInfrastructure;

export type GetProjectsLocationsCloudExadataInfrastructuresError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Exadata Infrastructure. */
export const getProjectsLocationsCloudExadataInfrastructures: API.OperationMethod<
  GetProjectsLocationsCloudExadataInfrastructuresRequest,
  GetProjectsLocationsCloudExadataInfrastructuresResponse,
  GetProjectsLocationsCloudExadataInfrastructuresError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCloudExadataInfrastructuresRequest,
  output: GetProjectsLocationsCloudExadataInfrastructuresResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest {
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Required. The parent value for database server in the following format: projects/{project}/locations/{location}/cloudExadataInfrastructures/{cloudExadataInfrastructure}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbServers" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest>;

export type ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse =
  ListDbServersResponse;
export const ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbServersResponse;

export type ListProjectsLocationsCloudExadataInfrastructuresDbServersError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the database servers of an Exadata Infrastructure instance. */
export const listProjectsLocationsCloudExadataInfrastructuresDbServers: API.PaginatedOperationMethod<
  ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest,
  ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse,
  ListProjectsLocationsCloudExadataInfrastructuresDbServersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCloudExadataInfrastructuresDbServersRequest,
  output: ListProjectsLocationsCloudExadataInfrastructuresDbServersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAutonomousDbVersionsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsAutonomousDbVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autonomousDbVersions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAutonomousDbVersionsRequest>;

export type ListProjectsLocationsAutonomousDbVersionsResponse =
  ListAutonomousDbVersionsResponse;
export const ListProjectsLocationsAutonomousDbVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutonomousDbVersionsResponse;

export type ListProjectsLocationsAutonomousDbVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the available Autonomous Database versions for a project and location. */
export const listProjectsLocationsAutonomousDbVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDbVersionsRequest,
  ListProjectsLocationsAutonomousDbVersionsResponse,
  ListProjectsLocationsAutonomousDbVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDbVersionsRequest,
  output: ListProjectsLocationsAutonomousDbVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAutonomousDatabaseBackupsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters. */
  filter?: string;
}

export const ListProjectsLocationsAutonomousDatabaseBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/autonomousDatabaseBackups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAutonomousDatabaseBackupsRequest>;

export type ListProjectsLocationsAutonomousDatabaseBackupsResponse =
  ListAutonomousDatabaseBackupsResponse;
export const ListProjectsLocationsAutonomousDatabaseBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutonomousDatabaseBackupsResponse;

export type ListProjectsLocationsAutonomousDatabaseBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the long-term and automatic backups of an Autonomous Database. */
export const listProjectsLocationsAutonomousDatabaseBackups: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDatabaseBackupsRequest,
  ListProjectsLocationsAutonomousDatabaseBackupsResponse,
  ListProjectsLocationsAutonomousDatabaseBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDatabaseBackupsRequest,
  output: ListProjectsLocationsAutonomousDatabaseBackupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Required. The parent value for ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. Filter the list as specified in https://google.aip.dev/160. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 ExascaleDbStorageVaults will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for ordering the results of the request. Order results as specified in https://google.aip.dev/132. */
  orderBy?: string;
}

export const ListProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/exascaleDbStorageVaults" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsExascaleDbStorageVaultsRequest>;

export type ListProjectsLocationsExascaleDbStorageVaultsResponse =
  ListExascaleDbStorageVaultsResponse;
export const ListProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListExascaleDbStorageVaultsResponse;

export type ListProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the ExascaleDB Storage Vaults for the given project and location. */
export const listProjectsLocationsExascaleDbStorageVaults: API.PaginatedOperationMethod<
  ListProjectsLocationsExascaleDbStorageVaultsRequest,
  ListProjectsLocationsExascaleDbStorageVaultsResponse,
  ListProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsExascaleDbStorageVaultsRequest,
  output: ListProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Required. The name of the ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}. */
  name: string;
}

export const GetProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsExascaleDbStorageVaultsRequest>;

export type GetProjectsLocationsExascaleDbStorageVaultsResponse =
  ExascaleDbStorageVault;
export const GetProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExascaleDbStorageVault;

export type GetProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ExascaleDB Storage Vault. */
export const getProjectsLocationsExascaleDbStorageVaults: API.OperationMethod<
  GetProjectsLocationsExascaleDbStorageVaultsRequest,
  GetProjectsLocationsExascaleDbStorageVaultsResponse,
  GetProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsExascaleDbStorageVaultsRequest,
  output: GetProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The value for parent of the ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the ExascaleDbStorageVault to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  exascaleDbStorageVaultId?: string;
  /** Request body */
  body?: ExascaleDbStorageVault;
}

export const CreateProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    exascaleDbStorageVaultId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("exascaleDbStorageVaultId"),
    ),
    body: Schema.optional(ExascaleDbStorageVault).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/exascaleDbStorageVaults",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsExascaleDbStorageVaultsRequest>;

export type CreateProjectsLocationsExascaleDbStorageVaultsResponse = Operation;
export const CreateProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new ExascaleDB Storage Vault resource. */
export const createProjectsLocationsExascaleDbStorageVaults: API.OperationMethod<
  CreateProjectsLocationsExascaleDbStorageVaultsRequest,
  CreateProjectsLocationsExascaleDbStorageVaultsResponse,
  CreateProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsExascaleDbStorageVaultsRequest,
  output: CreateProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsExascaleDbStorageVaultsRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the ExascaleDbStorageVault in the following format: projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}. */
  name: string;
}

export const DeleteProjectsLocationsExascaleDbStorageVaultsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsExascaleDbStorageVaultsRequest>;

export type DeleteProjectsLocationsExascaleDbStorageVaultsResponse = Operation;
export const DeleteProjectsLocationsExascaleDbStorageVaultsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsExascaleDbStorageVaultsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single ExascaleDB Storage Vault. */
export const deleteProjectsLocationsExascaleDbStorageVaults: API.OperationMethod<
  DeleteProjectsLocationsExascaleDbStorageVaultsRequest,
  DeleteProjectsLocationsExascaleDbStorageVaultsResponse,
  DeleteProjectsLocationsExascaleDbStorageVaultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsExascaleDbStorageVaultsRequest,
  output: DeleteProjectsLocationsExascaleDbStorageVaultsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDatabaseCharacterSetsRequest {
  /** Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType}"`. Accepted values include `DATABASE` and `NATIONAL`. */
  filter?: string;
  /** Required. The parent value for DatabaseCharacterSets in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A page token, received from a previous `ListDatabaseCharacterSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabaseCharacterSets` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of DatabaseCharacterSets to return. The service may return fewer than this value. If unspecified, at most 50 DatabaseCharacterSets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsDatabaseCharacterSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/databaseCharacterSets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDatabaseCharacterSetsRequest>;

export type ListProjectsLocationsDatabaseCharacterSetsResponse =
  ListDatabaseCharacterSetsResponse;
export const ListProjectsLocationsDatabaseCharacterSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDatabaseCharacterSetsResponse;

export type ListProjectsLocationsDatabaseCharacterSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List DatabaseCharacterSets for the given project and location. */
export const listProjectsLocationsDatabaseCharacterSets: API.PaginatedOperationMethod<
  ListProjectsLocationsDatabaseCharacterSetsRequest,
  ListProjectsLocationsDatabaseCharacterSetsResponse,
  ListProjectsLocationsDatabaseCharacterSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDatabaseCharacterSetsRequest,
  output: ListProjectsLocationsDatabaseCharacterSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsPluggableDatabasesRequest {
  /** Required. The parent, which owns this collection of PluggableDatabases. Format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A page token, received from a previous `ListPluggableDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPluggableDatabases` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of PluggableDatabases to return. The service may return fewer than this value. */
  pageSize?: number;
  /** Optional. An expression for filtering the results of the request. List for pluggable databases is supported only with a valid container database (full resource name) filter in this format: `database="projects/{project}/locations/{location}/databases/{database}"` */
  filter?: string;
}

export const ListProjectsLocationsPluggableDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/pluggableDatabases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPluggableDatabasesRequest>;

export type ListProjectsLocationsPluggableDatabasesResponse =
  ListPluggableDatabasesResponse;
export const ListProjectsLocationsPluggableDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPluggableDatabasesResponse;

export type ListProjectsLocationsPluggableDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the PluggableDatabases for the given project, location and Container Database. */
export const listProjectsLocationsPluggableDatabases: API.PaginatedOperationMethod<
  ListProjectsLocationsPluggableDatabasesRequest,
  ListProjectsLocationsPluggableDatabasesResponse,
  ListProjectsLocationsPluggableDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPluggableDatabasesRequest,
  output: ListProjectsLocationsPluggableDatabasesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsPluggableDatabasesRequest {
  /** Required. The name of the PluggableDatabase resource in the following format: projects/{project}/locations/{region}/pluggableDatabases/{pluggable_database} */
  name: string;
}

export const GetProjectsLocationsPluggableDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPluggableDatabasesRequest>;

export type GetProjectsLocationsPluggableDatabasesResponse = PluggableDatabase;
export const GetProjectsLocationsPluggableDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PluggableDatabase;

export type GetProjectsLocationsPluggableDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single PluggableDatabase. */
export const getProjectsLocationsPluggableDatabases: API.OperationMethod<
  GetProjectsLocationsPluggableDatabasesRequest,
  GetProjectsLocationsPluggableDatabasesResponse,
  GetProjectsLocationsPluggableDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPluggableDatabasesRequest,
  output: GetProjectsLocationsPluggableDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest {
  /** Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. The parent value for the Autonomous Database in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType}"`. Accepted values include `DATABASE` and `NATIONAL`. */
  filter?: string;
}

export const ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/autonomousDatabaseCharacterSets",
    }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest>;

export type ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse =
  ListAutonomousDatabaseCharacterSetsResponse;
export const ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutonomousDatabaseCharacterSetsResponse;

export type ListProjectsLocationsAutonomousDatabaseCharacterSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Autonomous Database Character Sets in a given project and location. */
export const listProjectsLocationsAutonomousDatabaseCharacterSets: API.PaginatedOperationMethod<
  ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest,
  ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse,
  ListProjectsLocationsAutonomousDatabaseCharacterSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAutonomousDatabaseCharacterSetsRequest,
  output: ListProjectsLocationsAutonomousDatabaseCharacterSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsEntitlementsRequest {
  /** Required. The parent value for the entitlement in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsEntitlementsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/entitlements" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsEntitlementsRequest>;

export type ListProjectsLocationsEntitlementsResponse =
  ListEntitlementsResponse;
export const ListProjectsLocationsEntitlementsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListEntitlementsResponse;

export type ListProjectsLocationsEntitlementsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the entitlements in a given project. */
export const listProjectsLocationsEntitlements: API.PaginatedOperationMethod<
  ListProjectsLocationsEntitlementsRequest,
  ListProjectsLocationsEntitlementsResponse,
  ListProjectsLocationsEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsEntitlementsRequest,
  output: ListProjectsLocationsEntitlementsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDbSystemsRequest {
  /** Required. The value for parent of the DbSystem in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Required. The ID of the DbSystem to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number. */
  dbSystemId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: DbSystem;
}

export const CreateProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    dbSystemId: Schema.optional(Schema.String).pipe(T.HttpQuery("dbSystemId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(DbSystem).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/dbSystems", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDbSystemsRequest>;

export type CreateProjectsLocationsDbSystemsResponse = Operation;
export const CreateProjectsLocationsDbSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new DbSystem in a given project and location. */
export const createProjectsLocationsDbSystems: API.OperationMethod<
  CreateProjectsLocationsDbSystemsRequest,
  CreateProjectsLocationsDbSystemsResponse,
  CreateProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDbSystemsRequest,
  output: CreateProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsDbSystemsRequest {
  /** Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the DbSystem in the following format: projects/{project}/locations/{location}/dbSystems/{db_system}. */
  name: string;
}

export const DeleteProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDbSystemsRequest>;

export type DeleteProjectsLocationsDbSystemsResponse = Operation;
export const DeleteProjectsLocationsDbSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single DbSystem. */
export const deleteProjectsLocationsDbSystems: API.OperationMethod<
  DeleteProjectsLocationsDbSystemsRequest,
  DeleteProjectsLocationsDbSystemsResponse,
  DeleteProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDbSystemsRequest,
  output: DeleteProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsDbSystemsRequest {
  /** Required. The parent value for DbSystems in the following format: projects/{project}/locations/{location}. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An expression for filtering the results of the request. */
  filter?: string;
  /** Optional. The maximum number of items to return. If unspecified, at most 50 DbSystems will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Optional. An expression for ordering the results of the request. */
  orderBy?: string;
}

export const ListProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbSystems" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDbSystemsRequest>;

export type ListProjectsLocationsDbSystemsResponse = ListDbSystemsResponse;
export const ListProjectsLocationsDbSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbSystemsResponse;

export type ListProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the DbSystems for the given project and location. */
export const listProjectsLocationsDbSystems: API.PaginatedOperationMethod<
  ListProjectsLocationsDbSystemsRequest,
  ListProjectsLocationsDbSystemsResponse,
  ListProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbSystemsRequest,
  output: ListProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDbSystemsRequest {
  /** Required. The name of the DbSystem in the following format: projects/{project}/locations/{location}/dbSystems/{db_system}. */
  name: string;
}

export const GetProjectsLocationsDbSystemsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDbSystemsRequest>;

export type GetProjectsLocationsDbSystemsResponse = DbSystem;
export const GetProjectsLocationsDbSystemsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DbSystem;

export type GetProjectsLocationsDbSystemsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single DbSystem. */
export const getProjectsLocationsDbSystems: API.OperationMethod<
  GetProjectsLocationsDbSystemsRequest,
  GetProjectsLocationsDbSystemsResponse,
  GetProjectsLocationsDbSystemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDbSystemsRequest,
  output: GetProjectsLocationsDbSystemsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsDbVersionsRequest {
  /** Required. The parent value for the DbVersion resource with the format: projects/{project}/locations/{location} */
  parent: string;
  /** Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbVersions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000. */
  pageSize?: number;
  /** Optional. Filter expression that matches a subset of the DbVersions to show. The supported filter for dbSystem creation is `db_system_shape = {db_system_shape} AND storage_management = {storage_management}`. If no filter is provided, all DbVersions will be returned. */
  filter?: string;
}

export const ListProjectsLocationsDbVersionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/dbVersions" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDbVersionsRequest>;

export type ListProjectsLocationsDbVersionsResponse = ListDbVersionsResponse;
export const ListProjectsLocationsDbVersionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDbVersionsResponse;

export type ListProjectsLocationsDbVersionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List DbVersions for the given project and location. */
export const listProjectsLocationsDbVersions: API.PaginatedOperationMethod<
  ListProjectsLocationsDbVersionsRequest,
  ListProjectsLocationsDbVersionsResponse,
  ListProjectsLocationsDbVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDbVersionsRequest,
  output: ListProjectsLocationsDbVersionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
