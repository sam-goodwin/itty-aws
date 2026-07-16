// ==========================================================================
// Migration Center API (migrationcenter v1alpha1)
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
  name: "migrationcenter",
  version: "v1alpha1",
  rootUrl: "https://migrationcenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface AggregationResultFrequency {
  values?: Record<string, string>;
}

export const AggregationResultFrequency: Schema.Codec<AggregationResultFrequency> =
  /*@__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AggregationResultFrequency" });

export interface SoleTenantNodeType {
  /** Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes */
  nodeName?: string;
}

export const SoleTenantNodeType: Schema.Codec<SoleTenantNodeType> =
  /*@__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoleTenantNodeType" });

export interface AwsRds {}

export const AwsRds: Schema.Codec<AwsRds> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsRds",
  });

export interface DatabaseDeploymentDetailsAggregatedStats {
  /** Output only. The number of databases in the deployment. */
  databaseCount?: number;
}

export const DatabaseDeploymentDetailsAggregatedStats: Schema.Codec<DatabaseDeploymentDetailsAggregatedStats> =
  /*@__PURE__*/ Schema.Struct({
    databaseCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DatabaseDeploymentDetailsAggregatedStats" });

export interface PostgreSqlSetting {
  /** Required. The setting int value. */
  intValue?: string;
  /** Required. The setting source. */
  source?: string;
  /** Required. The setting name. */
  setting?: string;
  /** Optional. The setting unit. */
  unit?: string;
  /** Required. The setting boolean value. */
  boolValue?: boolean;
  /** Required. The setting real value. */
  realValue?: number;
  /** Required. The setting string value. Notice that enum values are stored as strings. */
  stringValue?: string;
}

export const PostgreSqlSetting: Schema.Codec<PostgreSqlSetting> =
  /*@__PURE__*/ Schema.Struct({
    intValue: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    setting: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
    realValue: Schema.optional(Schema.Number),
    stringValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgreSqlSetting" });

export interface PostgreSqlProperty {
  /** Required. The property name. */
  property?: string;
  /** Required. The property numeric value. */
  numericValue?: string;
  /** Required. The property is enabled. */
  enabled?: boolean;
}

export const PostgreSqlProperty: Schema.Codec<PostgreSqlProperty> =
  /*@__PURE__*/ Schema.Struct({
    property: Schema.optional(Schema.String),
    numericValue: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PostgreSqlProperty" });

export interface PostgreSqlDatabaseDeployment {
  /** Optional. List of PostgreSql settings. */
  settings?: ReadonlyArray<PostgreSqlSetting>;
  /** Optional. List of PostgreSql properties. */
  properties?: ReadonlyArray<PostgreSqlProperty>;
}

export const PostgreSqlDatabaseDeployment: Schema.Codec<PostgreSqlDatabaseDeployment> =
  /*@__PURE__*/ Schema.Struct({
    settings: Schema.optional(Schema.Array(PostgreSqlSetting)),
    properties: Schema.optional(Schema.Array(PostgreSqlProperty)),
  }).annotate({ identifier: "PostgreSqlDatabaseDeployment" });

export interface DatabaseInstanceNetwork {
  /** Optional. The instance's primary MAC address. */
  primaryMacAddress?: string;
  /** Optional. The instance's IP addresses. */
  ipAddresses?: ReadonlyArray<string>;
  /** Optional. The instance's host names. */
  hostNames?: ReadonlyArray<string>;
}

export const DatabaseInstanceNetwork: Schema.Codec<DatabaseInstanceNetwork> =
  /*@__PURE__*/ Schema.Struct({
    primaryMacAddress: Schema.optional(Schema.String),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    hostNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DatabaseInstanceNetwork" });

export interface DatabaseInstance {
  /** The instance role in the database engine. */
  role?:
    | "ROLE_UNSPECIFIED"
    | "PRIMARY"
    | "SECONDARY"
    | "ARBITER"
    | (string & {});
  /** The instance's name. */
  instanceName?: string;
  /** Optional. Networking details. */
  network?: DatabaseInstanceNetwork;
}

export const DatabaseInstance: Schema.Codec<DatabaseInstance> =
  /*@__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    network: Schema.optional(DatabaseInstanceNetwork),
  }).annotate({ identifier: "DatabaseInstance" });

export interface DatabaseDeploymentTopology {
  /** Optional. Total memory in bytes limited by db deployment. */
  memoryLimitBytes?: string;
  /** Optional. Number of total physical cores limited by db deployment. */
  physicalCoreLimit?: number;
  /** Optional. Number of total physical cores. */
  physicalCoreCount?: number;
  /** Optional. Total memory in bytes. */
  memoryBytes?: string;
  /** Optional. Disk used in bytes. */
  diskUsedBytes?: string;
  /** Optional. Number of total logical cores limited by db deployment. */
  coreLimit?: number;
  /** Optional. Disk allocated in bytes. */
  diskAllocatedBytes?: string;
  /** Optional. List of database instances. */
  instances?: ReadonlyArray<DatabaseInstance>;
  /** Optional. Number of total logical cores. */
  coreCount?: number;
}

export const DatabaseDeploymentTopology: Schema.Codec<DatabaseDeploymentTopology> =
  /*@__PURE__*/ Schema.Struct({
    memoryLimitBytes: Schema.optional(Schema.String),
    physicalCoreLimit: Schema.optional(Schema.Number),
    physicalCoreCount: Schema.optional(Schema.Number),
    memoryBytes: Schema.optional(Schema.String),
    diskUsedBytes: Schema.optional(Schema.String),
    coreLimit: Schema.optional(Schema.Number),
    diskAllocatedBytes: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(DatabaseInstance)),
    coreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DatabaseDeploymentTopology" });

export interface SqlServerTraceFlag {
  /** Required. The trace flag name. */
  traceFlagName?: string;
  /** Required. The trace flag scope. */
  scope?: "SCOPE_UNSPECIFIED" | "OFF" | "GLOBAL" | "SESSION" | (string & {});
}

export const SqlServerTraceFlag: Schema.Codec<SqlServerTraceFlag> =
  /*@__PURE__*/ Schema.Struct({
    traceFlagName: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerTraceFlag" });

export interface SqlServerFeature {
  /** Required. The feature name. */
  featureName?: string;
  /** Required. Field enabled is set when a feature is used on the source deployment. */
  enabled?: boolean;
}

export const SqlServerFeature: Schema.Codec<SqlServerFeature> =
  /*@__PURE__*/ Schema.Struct({
    featureName: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SqlServerFeature" });

export interface SqlServerServerFlag {
  /** Required. The server flag name. */
  serverFlagName?: string;
  /** Required. The server flag value set by the user. */
  value?: string;
  /** Required. The server flag actual value. If `value_in_use` is different from `value` it means that either the configuration change was not applied or it is an expected behavior. See SQL Server documentation for more details. */
  valueInUse?: string;
}

export const SqlServerServerFlag: Schema.Codec<SqlServerServerFlag> =
  /*@__PURE__*/ Schema.Struct({
    serverFlagName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    valueInUse: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerServerFlag" });

export interface SqlServerDatabaseDeployment {
  /** Optional. List of SQL Server trace flags. */
  traceFlags?: ReadonlyArray<SqlServerTraceFlag>;
  /** Optional. List of SQL Server features. */
  features?: ReadonlyArray<SqlServerFeature>;
  /** Optional. List of SQL Server server flags. */
  serverFlags?: ReadonlyArray<SqlServerServerFlag>;
}

export const SqlServerDatabaseDeployment: Schema.Codec<SqlServerDatabaseDeployment> =
  /*@__PURE__*/ Schema.Struct({
    traceFlags: Schema.optional(Schema.Array(SqlServerTraceFlag)),
    features: Schema.optional(Schema.Array(SqlServerFeature)),
    serverFlags: Schema.optional(Schema.Array(SqlServerServerFlag)),
  }).annotate({ identifier: "SqlServerDatabaseDeployment" });

export interface MySqlVariable {
  /** Required. The variable value. */
  value?: string;
  /** Required. The variable category. */
  category?: string;
  /** Required. The variable name. */
  variable?: string;
}

export const MySqlVariable: Schema.Codec<MySqlVariable> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    variable: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlVariable" });

export interface MySqlProperty {
  /** Required. The property name. */
  property?: string;
  /** Required. The property is enabled. */
  enabled?: boolean;
  /** Required. The property numeric value. */
  numericValue?: string;
}

export const MySqlProperty: Schema.Codec<MySqlProperty> =
  /*@__PURE__*/ Schema.Struct({
    property: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    numericValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlProperty" });

export interface MySqlPlugin {
  /** Required. The plugin name. */
  plugin?: string;
  /** Required. The plugin version. */
  version?: string;
  /** Required. The plugin is active. */
  enabled?: boolean;
}

export const MySqlPlugin: Schema.Codec<MySqlPlugin> =
  /*@__PURE__*/ Schema.Struct({
    plugin: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "MySqlPlugin" });

export interface MysqlDatabaseDeployment {
  /** Optional. Number of resource groups. */
  resourceGroupsCount?: number;
  /** Optional. List of MySql variables. */
  variables?: ReadonlyArray<MySqlVariable>;
  /** Optional. List of MySql properties. */
  properties?: ReadonlyArray<MySqlProperty>;
  /** Optional. List of MySql plugins. */
  plugins?: ReadonlyArray<MySqlPlugin>;
}

export const MysqlDatabaseDeployment: Schema.Codec<MysqlDatabaseDeployment> =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupsCount: Schema.optional(Schema.Number),
    variables: Schema.optional(Schema.Array(MySqlVariable)),
    properties: Schema.optional(Schema.Array(MySqlProperty)),
    plugins: Schema.optional(Schema.Array(MySqlPlugin)),
  }).annotate({ identifier: "MysqlDatabaseDeployment" });

export interface DatabaseDeploymentDetails {
  /** A manual unique ID set by the user. */
  manualUniqueId?: string;
  /** The database deployment edition. */
  edition?: string;
  /** Optional. Details of an AWS RDS instance. */
  awsRds?: AwsRds;
  /** Output only. Aggregated stats for the database deployment. */
  aggregatedStats?: DatabaseDeploymentDetailsAggregatedStats;
  /** The database deployment generated ID. */
  generatedId?: string;
  /** Details of a PostgreSQL database deployment. */
  postgresql?: PostgreSqlDatabaseDeployment;
  /** Details of the database deployment topology. */
  topology?: DatabaseDeploymentTopology;
  /** Details of a Microsoft SQL Server database deployment. */
  sqlServer?: SqlServerDatabaseDeployment;
  /** The database deployment version. */
  version?: string;
  /** Details of a MYSQL database deployment. */
  mysql?: MysqlDatabaseDeployment;
}

export const DatabaseDeploymentDetails: Schema.Codec<DatabaseDeploymentDetails> =
  /*@__PURE__*/ Schema.Struct({
    manualUniqueId: Schema.optional(Schema.String),
    edition: Schema.optional(Schema.String),
    awsRds: Schema.optional(AwsRds),
    aggregatedStats: Schema.optional(DatabaseDeploymentDetailsAggregatedStats),
    generatedId: Schema.optional(Schema.String),
    postgresql: Schema.optional(PostgreSqlDatabaseDeployment),
    topology: Schema.optional(DatabaseDeploymentTopology),
    sqlServer: Schema.optional(SqlServerDatabaseDeployment),
    version: Schema.optional(Schema.String),
    mysql: Schema.optional(MysqlDatabaseDeployment),
  }).annotate({ identifier: "DatabaseDeploymentDetails" });

export interface DetectedSoftware {
  /** Output only. Software family of the detected software, e.g. Database, SAP family. */
  softwareFamily?: string;
  /** Output only. Software's name. */
  softwareName?: string;
}

export const DetectedSoftware: Schema.Codec<DetectedSoftware> =
  /*@__PURE__*/ Schema.Struct({
    softwareFamily: Schema.optional(Schema.String),
    softwareName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DetectedSoftware" });

export interface NetworkAddress {
  /** Subnet mask. */
  subnetMask?: string;
  /** Assigned or configured IP Address. */
  ipAddress?: string;
  /** Whether DHCP is used to assign addresses. */
  assignment?:
    | "ADDRESS_ASSIGNMENT_UNSPECIFIED"
    | "ADDRESS_ASSIGNMENT_STATIC"
    | "ADDRESS_ASSIGNMENT_DHCP"
    | (string & {});
  /** Broadcast address. */
  bcast?: string;
  /** Fully qualified domain name. */
  fqdn?: string;
}

export const NetworkAddress: Schema.Codec<NetworkAddress> =
  /*@__PURE__*/ Schema.Struct({
    subnetMask: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    assignment: Schema.optional(Schema.String),
    bcast: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkAddress" });

export interface NetworkAddressList {
  /** Network address entries. */
  addresses?: ReadonlyArray<NetworkAddress>;
  /** Network address entries. */
  entries?: ReadonlyArray<NetworkAddress>;
}

export const NetworkAddressList: Schema.Codec<NetworkAddressList> =
  /*@__PURE__*/ Schema.Struct({
    addresses: Schema.optional(Schema.Array(NetworkAddress)),
    entries: Schema.optional(Schema.Array(NetworkAddress)),
  }).annotate({ identifier: "NetworkAddressList" });

export interface NetworkAdapterDetails {
  /** NetworkAddressList */
  addresses?: NetworkAddressList;
  /** Network adapter type (e.g. VMXNET3). */
  adapterType?: string;
  /** MAC address. */
  macAddress?: string;
}

export const NetworkAdapterDetails: Schema.Codec<NetworkAdapterDetails> =
  /*@__PURE__*/ Schema.Struct({
    addresses: Schema.optional(NetworkAddressList),
    adapterType: Schema.optional(Schema.String),
    macAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkAdapterDetails" });

export interface NetworkAdapterList {
  /** Network adapter descriptions. */
  networkAdapters?: ReadonlyArray<NetworkAdapterDetails>;
  /** Network adapter entries. */
  entries?: ReadonlyArray<NetworkAdapterDetails>;
}

export const NetworkAdapterList: Schema.Codec<NetworkAdapterList> =
  /*@__PURE__*/ Schema.Struct({
    networkAdapters: Schema.optional(Schema.Array(NetworkAdapterDetails)),
    entries: Schema.optional(Schema.Array(NetworkAdapterDetails)),
  }).annotate({ identifier: "NetworkAdapterList" });

export interface MachineNetworkDetails {
  /** List of network adapters. */
  networkAdapters?: NetworkAdapterList;
  /** Default gateway address. */
  defaultGateway?: string;
  /** MAC address of the machine. This property is used to uniqly identify the machine. */
  primaryMacAddress?: string;
  /** The public IP address of the machine. */
  publicIpAddress?: string;
  /** The primary IP address of the machine. */
  primaryIpAddress?: string;
}

export const MachineNetworkDetails: Schema.Codec<MachineNetworkDetails> =
  /*@__PURE__*/ Schema.Struct({
    networkAdapters: Schema.optional(NetworkAdapterList),
    defaultGateway: Schema.optional(Schema.String),
    primaryMacAddress: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    primaryIpAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineNetworkDetails" });

export interface AssetList {
  /** Required. A list of asset IDs */
  assetIds?: ReadonlyArray<string>;
}

export const AssetList: Schema.Codec<AssetList> =
  /*@__PURE__*/ Schema.Struct({
    assetIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AssetList" });

export interface SignedUri {
  /** Output only. Name of the file the Signed URI references. */
  file?: string;
  /** Output only. Download URI for the file. */
  uri?: string;
}

export const SignedUri: Schema.Codec<SignedUri> =
  /*@__PURE__*/ Schema.Struct({
    file: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignedUri" });

export interface SignedUris {
  /** Output only. List of signed URIs. */
  signedUris?: ReadonlyArray<SignedUri>;
}

export const SignedUris: Schema.Codec<SignedUris> =
  /*@__PURE__*/ Schema.Struct({
    signedUris: Schema.optional(Schema.Array(SignedUri)),
  }).annotate({ identifier: "SignedUris" });

export interface AwsVpcDetails {}

export const AwsVpcDetails: Schema.Codec<AwsVpcDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsVpcDetails",
  });

export interface ComputeStorageDescriptor {
  /** Disk size in GiB. */
  sizeGb?: number;
  /** Output only. Disk type backing the storage. */
  type?:
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {});
}

export const ComputeStorageDescriptor: Schema.Codec<ComputeStorageDescriptor> =
  /*@__PURE__*/ Schema.Struct({
    sizeGb: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeStorageDescriptor" });

export interface OperatingSystemPricingPreferencesOperatingSystemPricing {
  /** Optional. The plan of commitments for committed use discounts (CUD). */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "COMMITMENT_PLAN_ON_DEMAND"
    | "COMMITMENT_PLAN_1_YEAR"
    | "COMMITMENT_PLAN_3_YEAR"
    | (string & {});
  /** Optional. License type for premium images (RHEL, RHEL for SAP, SLES, SLES for SAP, Windows Server). */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_TYPE_DEFAULT"
    | "LICENSE_TYPE_BRING_YOUR_OWN_LICENSE"
    | (string & {});
}

export const OperatingSystemPricingPreferencesOperatingSystemPricing: Schema.Codec<OperatingSystemPricingPreferencesOperatingSystemPricing> =
  /*@__PURE__*/ Schema.Struct({
    commitmentPlan: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "OperatingSystemPricingPreferencesOperatingSystemPricing",
  });

export interface OperatingSystemPricingPreferences {
  /** Optional. Pricing options for RHEL images. */
  rhel?: OperatingSystemPricingPreferencesOperatingSystemPricing;
  /** Optional. Pricing options for SLES images. */
  sles?: OperatingSystemPricingPreferencesOperatingSystemPricing;
  /** Optional. Pricing options for Windows images. No commitment plans are available, set it to unspecified. */
  windows?: OperatingSystemPricingPreferencesOperatingSystemPricing;
  /** Optional. Pricing options for SLES for SAP images. */
  slesForSap?: OperatingSystemPricingPreferencesOperatingSystemPricing;
}

export const OperatingSystemPricingPreferences: Schema.Codec<OperatingSystemPricingPreferences> =
  /*@__PURE__*/ Schema.Struct({
    rhel: Schema.optional(
      OperatingSystemPricingPreferencesOperatingSystemPricing,
    ),
    sles: Schema.optional(
      OperatingSystemPricingPreferencesOperatingSystemPricing,
    ),
    windows: Schema.optional(
      OperatingSystemPricingPreferencesOperatingSystemPricing,
    ),
    slesForSap: Schema.optional(
      OperatingSystemPricingPreferencesOperatingSystemPricing,
    ),
  }).annotate({ identifier: "OperatingSystemPricingPreferences" });

export interface UploadFileInfo {
  /** Output only. Upload URI for the file. */
  signedUri?: string;
  /** Output only. Expiration time of the upload URI. */
  uriExpirationTime?: string;
  /** Output only. The headers that were used to sign the URL. */
  headers?: Record<string, string>;
}

export const UploadFileInfo: Schema.Codec<UploadFileInfo> =
  /*@__PURE__*/ Schema.Struct({
    signedUri: Schema.optional(Schema.String),
    uriExpirationTime: Schema.optional(Schema.String),
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "UploadFileInfo" });

export interface ImportDataFile {
  /** Output only. The name of the file. */
  name?: string;
  /** Information about a file that is uploaded to a storage service. */
  uploadFileInfo?: UploadFileInfo;
  /** Required. The payload format. */
  format?:
    | "IMPORT_JOB_FORMAT_UNSPECIFIED"
    | "IMPORT_JOB_FORMAT_CMDB"
    | "IMPORT_JOB_FORMAT_RVTOOLS_XLSX"
    | "IMPORT_JOB_FORMAT_RVTOOLS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV"
    | "IMPORT_JOB_FORMAT_MANUAL_CSV"
    | "IMPORT_JOB_FORMAT_DATABASE_ZIP"
    | (string & {});
  /** Output only. The timestamp when the file was created. */
  createTime?: string;
  /** Output only. The state of the import data file. */
  state?: "STATE_UNSPECIFIED" | "CREATING" | "ACTIVE" | (string & {});
  /** Optional. User-friendly display name. Maximum length is 256 characters. */
  displayName?: string;
}

export const ImportDataFile: Schema.Codec<ImportDataFile> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uploadFileInfo: Schema.optional(UploadFileInfo),
    format: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportDataFile" });

export interface ListImportDataFilesResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The list of import data files. */
  importDataFiles?: ReadonlyArray<ImportDataFile>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListImportDataFilesResponse: Schema.Codec<ListImportDataFilesResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    importDataFiles: Schema.optional(Schema.Array(ImportDataFile)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListImportDataFilesResponse" });

export interface NfsExport {
  /** The hosts or networks to which the export is being shared. */
  hosts?: ReadonlyArray<string>;
  /** The directory being exported. */
  exportDirectory?: string;
}

export const NfsExport: Schema.Codec<NfsExport> =
  /*@__PURE__*/ Schema.Struct({
    hosts: Schema.optional(Schema.Array(Schema.String)),
    exportDirectory: Schema.optional(Schema.String),
  }).annotate({ identifier: "NfsExport" });

export interface NfsExportList {
  /** NFS export entries. */
  entries?: ReadonlyArray<NfsExport>;
}

export const NfsExportList: Schema.Codec<NfsExportList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(NfsExport)),
  }).annotate({ identifier: "NfsExportList" });

export interface AwsElastiCacheClusterDetails {}

export const AwsElastiCacheClusterDetails: Schema.Codec<AwsElastiCacheClusterDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsElastiCacheClusterDetails",
  });

export interface FrameViolationEntry {
  /** The field of the original frame where the violation occurred. */
  field?: string;
  /** A message describing the violation. */
  violation?: string;
}

export const FrameViolationEntry: Schema.Codec<FrameViolationEntry> =
  /*@__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    violation: Schema.optional(Schema.String),
  }).annotate({ identifier: "FrameViolationEntry" });

export interface AwsEbsVolumeDetails {}

export const AwsEbsVolumeDetails: Schema.Codec<AwsEbsVolumeDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsEbsVolumeDetails",
  });

export interface DiskUsageSample {
  /** Average read IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored. */
  averageReadIops?: number;
  /** Average write IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored. */
  averageWriteIops?: number;
  /** Average IOPS sampled over a short window. Must be non-negative. If read or write are set, the sum of read and write will override the value of the average_iops. */
  averageIops?: number;
}

export const DiskUsageSample: Schema.Codec<DiskUsageSample> =
  /*@__PURE__*/ Schema.Struct({
    averageReadIops: Schema.optional(Schema.Number),
    averageWriteIops: Schema.optional(Schema.Number),
    averageIops: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DiskUsageSample" });

export interface CpuUsageSample {
  /** Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage. */
  utilizedPercentage?: number;
}

export const CpuUsageSample: Schema.Codec<CpuUsageSample> =
  /*@__PURE__*/ Schema.Struct({
    utilizedPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CpuUsageSample" });

export interface MemoryUsageSample {
  /** Percentage of system memory utilized. Must be in the interval [0, 100]. */
  utilizedPercentage?: number;
}

export const MemoryUsageSample: Schema.Codec<MemoryUsageSample> =
  /*@__PURE__*/ Schema.Struct({
    utilizedPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MemoryUsageSample" });

export interface NetworkUsageSample {
  /** Average network ingress in B/s sampled over a short window. Must be non-negative. */
  averageIngressBps?: number;
  /** Average network egress in B/s sampled over a short window. Must be non-negative. */
  averageEgressBps?: number;
}

export const NetworkUsageSample: Schema.Codec<NetworkUsageSample> =
  /*@__PURE__*/ Schema.Struct({
    averageIngressBps: Schema.optional(Schema.Number),
    averageEgressBps: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NetworkUsageSample" });

export interface PerformanceSample {
  /** Disk usage sample. */
  disk?: DiskUsageSample;
  /** CPU usage sample. */
  cpu?: CpuUsageSample;
  /** Time the sample was collected. If omitted, the frame report time will be used. */
  sampleTime?: string;
  /** Memory usage sample. */
  memory?: MemoryUsageSample;
  /** Network usage sample. */
  network?: NetworkUsageSample;
}

export const PerformanceSample: Schema.Codec<PerformanceSample> =
  /*@__PURE__*/ Schema.Struct({
    disk: Schema.optional(DiskUsageSample),
    cpu: Schema.optional(CpuUsageSample),
    sampleTime: Schema.optional(Schema.String),
    memory: Schema.optional(MemoryUsageSample),
    network: Schema.optional(NetworkUsageSample),
  }).annotate({ identifier: "PerformanceSample" });

export interface AwsRedshiftDetails {}

export const AwsRedshiftDetails: Schema.Codec<AwsRedshiftDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsRedshiftDetails",
  });

export interface AwsEcrRepositoryDetails {}

export const AwsEcrRepositoryDetails: Schema.Codec<AwsEcrRepositoryDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsEcrRepositoryDetails",
  });

export interface AwsInternetGatewayDetails {}

export const AwsInternetGatewayDetails: Schema.Codec<AwsInternetGatewayDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsInternetGatewayDetails",
  });

export interface AwsRoute53HostedZoneDetails {}

export const AwsRoute53HostedZoneDetails: Schema.Codec<AwsRoute53HostedZoneDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsRoute53HostedZoneDetails",
  });

export interface AwsAthenaWorkGroupDetails {}

export const AwsAthenaWorkGroupDetails: Schema.Codec<AwsAthenaWorkGroupDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsAthenaWorkGroupDetails",
  });

export interface AwsAppSyncGraphqlApiDetails {}

export const AwsAppSyncGraphqlApiDetails: Schema.Codec<AwsAppSyncGraphqlApiDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsAppSyncGraphqlApiDetails",
  });

export interface AwsSnsTopicDetails {}

export const AwsSnsTopicDetails: Schema.Codec<AwsSnsTopicDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsSnsTopicDetails",
  });

export interface AwsEfsFileSystemDetails {}

export const AwsEfsFileSystemDetails: Schema.Codec<AwsEfsFileSystemDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsEfsFileSystemDetails",
  });

export interface AwsCloudFrontDistributionDetails {}

export const AwsCloudFrontDistributionDetails: Schema.Codec<AwsCloudFrontDistributionDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsCloudFrontDistributionDetails",
  });

export interface AwsLambdaFunctionDetails {}

export const AwsLambdaFunctionDetails: Schema.Codec<AwsLambdaFunctionDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsLambdaFunctionDetails",
  });

export interface MySqlStorageEngineDetails {
  /** Optional. The number of tables. */
  tableCount?: number;
  /** Optional. The number of encrypted tables. */
  encryptedTableCount?: number;
  /** Required. The storage engine. */
  engine?:
    | "ENGINE_UNSPECIFIED"
    | "INNODB"
    | "MYISAM"
    | "MEMORY"
    | "CSV"
    | "ARCHIVE"
    | "BLACKHOLE"
    | "NDB"
    | "MERGE"
    | "FEDERATED"
    | "EXAMPLE"
    | "OTHER"
    | (string & {});
}

export const MySqlStorageEngineDetails: Schema.Codec<MySqlStorageEngineDetails> =
  /*@__PURE__*/ Schema.Struct({
    tableCount: Schema.optional(Schema.Number),
    encryptedTableCount: Schema.optional(Schema.Number),
    engine: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlStorageEngineDetails" });

export interface MySqlSchemaDetails {
  /** Optional. Mysql storage engine tables. */
  storageEngines?: ReadonlyArray<MySqlStorageEngineDetails>;
}

export const MySqlSchemaDetails: Schema.Codec<MySqlSchemaDetails> =
  /*@__PURE__*/ Schema.Struct({
    storageEngines: Schema.optional(Schema.Array(MySqlStorageEngineDetails)),
  }).annotate({ identifier: "MySqlSchemaDetails" });

export interface PostgreSqlExtension {
  /** Required. The extension name. */
  extension?: string;
  /** Required. The extension version. */
  version?: string;
}

export const PostgreSqlExtension: Schema.Codec<PostgreSqlExtension> =
  /*@__PURE__*/ Schema.Struct({
    extension: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgreSqlExtension" });

export interface PostgreSqlSchemaDetails {
  /** Optional. PostgreSql extensions. */
  postgresqlExtensions?: ReadonlyArray<PostgreSqlExtension>;
  /** Optional. PostgreSql foreign tables. */
  foreignTablesCount?: number;
}

export const PostgreSqlSchemaDetails: Schema.Codec<PostgreSqlSchemaDetails> =
  /*@__PURE__*/ Schema.Struct({
    postgresqlExtensions: Schema.optional(Schema.Array(PostgreSqlExtension)),
    foreignTablesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PostgreSqlSchemaDetails" });

export interface DatabaseObjects {
  /** The category of the objects. */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "TABLE"
    | "INDEX"
    | "CONSTRAINTS"
    | "VIEWS"
    | "SOURCE_CODE"
    | "OTHER"
    | (string & {});
  /** The number of objects. */
  count?: string;
}

export const DatabaseObjects: Schema.Codec<DatabaseObjects> =
  /*@__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseObjects" });

export interface SqlServerSchemaDetails {
  /** Optional. SqlServer number of CLR objects. */
  clrObjectCount?: number;
}

export const SqlServerSchemaDetails: Schema.Codec<SqlServerSchemaDetails> =
  /*@__PURE__*/ Schema.Struct({
    clrObjectCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SqlServerSchemaDetails" });

export interface DatabaseSchema {
  /** The total size of tables in bytes. */
  tablesSizeBytes?: string;
  /** The name of the schema. */
  schemaName?: string;
  /** Details of a Mysql schema. */
  mysql?: MySqlSchemaDetails;
  /** Details of a PostgreSql schema. */
  postgresql?: PostgreSqlSchemaDetails;
  /** List of details of objects by category. */
  objects?: ReadonlyArray<DatabaseObjects>;
  /** Details of a SqlServer schema. */
  sqlServer?: SqlServerSchemaDetails;
}

export const DatabaseSchema: Schema.Codec<DatabaseSchema> =
  /*@__PURE__*/ Schema.Struct({
    tablesSizeBytes: Schema.optional(Schema.String),
    schemaName: Schema.optional(Schema.String),
    mysql: Schema.optional(MySqlSchemaDetails),
    postgresql: Schema.optional(PostgreSqlSchemaDetails),
    objects: Schema.optional(Schema.Array(DatabaseObjects)),
    sqlServer: Schema.optional(SqlServerSchemaDetails),
  }).annotate({ identifier: "DatabaseSchema" });

export interface DatabaseDetailsParentDatabaseDeployment {
  /** The parent database deployment optional manual unique ID set by the user. */
  manualUniqueId?: string;
  /** The parent database deployment generated ID. */
  generatedId?: string;
}

export const DatabaseDetailsParentDatabaseDeployment: Schema.Codec<DatabaseDetailsParentDatabaseDeployment> =
  /*@__PURE__*/ Schema.Struct({
    manualUniqueId: Schema.optional(Schema.String),
    generatedId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseDetailsParentDatabaseDeployment" });

export interface DatabaseDetails {
  /** The name of the database. */
  databaseName?: string;
  /** The allocated storage for the database in bytes. */
  allocatedStorageBytes?: string;
  /** The database schemas. */
  schemas?: ReadonlyArray<DatabaseSchema>;
  /** The parent database deployment that contains the logical database. */
  parentDatabaseDeployment?: DatabaseDetailsParentDatabaseDeployment;
}

export const DatabaseDetails: Schema.Codec<DatabaseDetails> =
  /*@__PURE__*/ Schema.Struct({
    databaseName: Schema.optional(Schema.String),
    allocatedStorageBytes: Schema.optional(Schema.String),
    schemas: Schema.optional(Schema.Array(DatabaseSchema)),
    parentDatabaseDeployment: Schema.optional(
      DatabaseDetailsParentDatabaseDeployment,
    ),
  }).annotate({ identifier: "DatabaseDetails" });

export interface AwsEksClusterDetails {}

export const AwsEksClusterDetails: Schema.Codec<AwsEksClusterDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsEksClusterDetails",
  });

export interface AwsS3BucketDetailsVersioning {
  /** Optional. Whether versioning is enabled. */
  enabled?: boolean;
}

export const AwsS3BucketDetailsVersioning: Schema.Codec<AwsS3BucketDetailsVersioning> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AwsS3BucketDetailsVersioning" });

export interface AwsS3BucketDetailsObjectsMetadataTotalObjects {
  /** Optional. The total number of objects in the bucket. */
  value?: number;
}

export const AwsS3BucketDetailsObjectsMetadataTotalObjects: Schema.Codec<AwsS3BucketDetailsObjectsMetadataTotalObjects> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AwsS3BucketDetailsObjectsMetadataTotalObjects" });

export interface AwsS3BucketDetailsObjectsMetadata {
  /** Optional. The total number of objects in the bucket. */
  totalObjects?: AwsS3BucketDetailsObjectsMetadataTotalObjects;
}

export const AwsS3BucketDetailsObjectsMetadata: Schema.Codec<AwsS3BucketDetailsObjectsMetadata> =
  /*@__PURE__*/ Schema.Struct({
    totalObjects: Schema.optional(
      AwsS3BucketDetailsObjectsMetadataTotalObjects,
    ),
  }).annotate({ identifier: "AwsS3BucketDetailsObjectsMetadata" });

export interface AwsS3BucketDetailsStorageClass {
  /** Optional. The total size of the storage class in bytes. */
  totalBytes?: string;
  /** Required. Type of the storage class. */
  type?:
    | "STORAGE_CLASS_TYPE_UNSPECIFIED"
    | "STANDARD"
    | "INTELLIGENT_TIERING"
    | "STANDARD_IA"
    | "ONE_ZONE_IA"
    | "GLACIER"
    | "DEEP_ARCHIVE"
    | "GLACIER_IR"
    | "REDUCED_REDUNDANCY"
    | "EXPRESS_ONEZONE"
    | (string & {});
}

export const AwsS3BucketDetailsStorageClass: Schema.Codec<AwsS3BucketDetailsStorageClass> =
  /*@__PURE__*/ Schema.Struct({
    totalBytes: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsS3BucketDetailsStorageClass" });

export interface AwsS3BucketDetails {
  /** Optional. Versioning configuration of the bucket. */
  versioning?: AwsS3BucketDetailsVersioning;
  /** Optional. The metadata of the objects in the bucket. */
  objectsMetadata?: AwsS3BucketDetailsObjectsMetadata;
  /** Optional. The storage classes in the bucket. */
  storageClasses?: ReadonlyArray<AwsS3BucketDetailsStorageClass>;
}

export const AwsS3BucketDetails: Schema.Codec<AwsS3BucketDetails> =
  /*@__PURE__*/ Schema.Struct({
    versioning: Schema.optional(AwsS3BucketDetailsVersioning),
    objectsMetadata: Schema.optional(AwsS3BucketDetailsObjectsMetadata),
    storageClasses: Schema.optional(
      Schema.Array(AwsS3BucketDetailsStorageClass),
    ),
  }).annotate({ identifier: "AwsS3BucketDetails" });

export interface AwsElasticNetworkInterfaceDetails {}

export const AwsElasticNetworkInterfaceDetails: Schema.Codec<AwsElasticNetworkInterfaceDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsElasticNetworkInterfaceDetails",
  });

export interface AwsApiGatewayRestApiDetails {}

export const AwsApiGatewayRestApiDetails: Schema.Codec<AwsApiGatewayRestApiDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsApiGatewayRestApiDetails",
  });

export interface AwsDynamoDBTableDetails {}

export const AwsDynamoDBTableDetails: Schema.Codec<AwsDynamoDBTableDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsDynamoDBTableDetails",
  });

export interface AwsElbLoadBalancerDetails {}

export const AwsElbLoadBalancerDetails: Schema.Codec<AwsElbLoadBalancerDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsElbLoadBalancerDetails",
  });

export interface DiskPartition {
  /** Partition free space. */
  freeBytes?: string;
  /** Partition capacity. */
  capacityBytes?: string;
  /** Partition UUID. */
  uuid?: string;
  /** Sub-partitions. */
  subPartitions?: DiskPartitionList;
  /** Partition type (e.g. BIOS boot). */
  type?: string;
  /** Partition file system. */
  fileSystem?: string;
  /** Mount point (Linux/Windows) or drive letter (Windows). */
  mountPoint?: string;
}

export const DiskPartition: Schema.Codec<DiskPartition> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      freeBytes: Schema.optional(Schema.String),
      capacityBytes: Schema.optional(Schema.String),
      uuid: Schema.optional(Schema.String),
      subPartitions: Schema.optional(DiskPartitionList),
      type: Schema.optional(Schema.String),
      fileSystem: Schema.optional(Schema.String),
      mountPoint: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "DiskPartition",
  }) as any as Schema.Codec<DiskPartition>;

export interface DiskPartitionList {
  /** Partition entries. */
  entries?: ReadonlyArray<DiskPartition>;
}

export const DiskPartitionList: Schema.Codec<DiskPartitionList> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entries: Schema.optional(Schema.Array(DiskPartition)),
    }),
  ).annotate({
    identifier: "DiskPartitionList",
  }) as any as Schema.Codec<DiskPartitionList>;

export interface DiskEntry {
  /** Disk free space. */
  totalFreeBytes?: string;
  /** Partition layout. */
  partitions?: DiskPartitionList;
  /** Disk capacity. */
  totalCapacityBytes?: string;
  /** Disk hardware address (e.g. 0:1 for SCSI). */
  hwAddress?: string;
  /** Disk label type (e.g. BIOS/GPT) */
  diskLabelType?: string;
  /** Disk status (e.g. online). */
  status?: string;
  /** Disk label. */
  diskLabel?: string;
  /** Disk capacity. */
  capacityBytes?: string;
  /** Disk free space. */
  freeSpaceBytes?: string;
  /** Disks interface type (e.g. SATA/SCSI) */
  interfaceType?: string;
}

export const DiskEntry: Schema.Codec<DiskEntry> =
  /*@__PURE__*/ Schema.Struct({
    totalFreeBytes: Schema.optional(Schema.String),
    partitions: Schema.optional(DiskPartitionList),
    totalCapacityBytes: Schema.optional(Schema.String),
    hwAddress: Schema.optional(Schema.String),
    diskLabelType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    diskLabel: Schema.optional(Schema.String),
    capacityBytes: Schema.optional(Schema.String),
    freeSpaceBytes: Schema.optional(Schema.String),
    interfaceType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskEntry" });

export interface DiskEntryList {
  /** Disk entries. */
  entries?: ReadonlyArray<DiskEntry>;
}

export const DiskEntryList: Schema.Codec<DiskEntryList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(DiskEntry)),
  }).annotate({ identifier: "DiskEntryList" });

export interface VirtualMachineDiskDetails {
  /** Disk total Capacity. */
  hddTotalCapacityBytes?: string;
  /** Raw lsblk output in json. */
  lsblkJson?: string;
  /** Total Disk Free Space. */
  hddTotalFreeBytes?: string;
  /** List of disks. */
  disks?: DiskEntryList;
}

export const VirtualMachineDiskDetails: Schema.Codec<VirtualMachineDiskDetails> =
  /*@__PURE__*/ Schema.Struct({
    hddTotalCapacityBytes: Schema.optional(Schema.String),
    lsblkJson: Schema.optional(Schema.String),
    hddTotalFreeBytes: Schema.optional(Schema.String),
    disks: Schema.optional(DiskEntryList),
  }).annotate({ identifier: "VirtualMachineDiskDetails" });

export interface Migrationcenter_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const Migrationcenter_Date: Schema.Codec<Migrationcenter_Date> =
  /*@__PURE__*/ Schema.Struct({
    year: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Migrationcenter_Date" });

export interface RunningProcess {
  /** Process full command line. */
  cmdline?: string;
  /** User running the process. */
  user?: string;
  /** Process ID. */
  pid?: string;
  /** Process extended attributes. */
  attributes?: Record<string, string>;
  /** Process binary path. */
  exePath?: string;
}

export const RunningProcess: Schema.Codec<RunningProcess> =
  /*@__PURE__*/ Schema.Struct({
    cmdline: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
    pid: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    exePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunningProcess" });

export interface RunningProcessList {
  /** Running process entries. */
  processes?: ReadonlyArray<RunningProcess>;
  /** Running process entries. */
  entries?: ReadonlyArray<RunningProcess>;
}

export const RunningProcessList: Schema.Codec<RunningProcessList> =
  /*@__PURE__*/ Schema.Struct({
    processes: Schema.optional(Schema.Array(RunningProcess)),
    entries: Schema.optional(Schema.Array(RunningProcess)),
  }).annotate({ identifier: "RunningProcessList" });

export interface NetworkConnection {
  /** Process ID. */
  pid?: string;
  /** Connection state (e.g. CONNECTED). */
  state?: string;
  /** Local IP address. */
  localIpAddress?: string;
  /** Local port. */
  localPort?: number;
  /** Remote IP address. */
  remoteIpAddress?: string;
  /** Process or service name. */
  processName?: string;
  /** Remote port. */
  remotePort?: number;
  /** Connection protocol (e.g. TCP/UDP). */
  protocol?: string;
}

export const NetworkConnection: Schema.Codec<NetworkConnection> =
  /*@__PURE__*/ Schema.Struct({
    pid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    localIpAddress: Schema.optional(Schema.String),
    localPort: Schema.optional(Schema.Number),
    remoteIpAddress: Schema.optional(Schema.String),
    processName: Schema.optional(Schema.String),
    remotePort: Schema.optional(Schema.Number),
    protocol: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConnection" });

export interface NetworkConnectionList {
  /** Network connection entries. */
  entries?: ReadonlyArray<NetworkConnection>;
}

export const NetworkConnectionList: Schema.Codec<NetworkConnectionList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(NetworkConnection)),
  }).annotate({ identifier: "NetworkConnectionList" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Codec<TimeZone> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface DateTime {
  /** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
  nanos?: number;
  /** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
  minutes?: number;
  /** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
  day?: number;
  /** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
  month?: number;
  /** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
  utcOffset?: string;
  /** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
  year?: number;
  /** Time zone. */
  timeZone?: TimeZone;
}

export const DateTime: Schema.Codec<DateTime> =
  /*@__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
    month: Schema.optional(Schema.Number),
    utcOffset: Schema.optional(Schema.String),
    seconds: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    timeZone: Schema.optional(TimeZone),
  }).annotate({ identifier: "DateTime" });

export interface RuntimeNetworkInfo {
  /** Raw network scan result. This field is intended for human inspection. The format of this field may be netstat output or any another raw output. The exact format may change without notice and should not be relied upon. */
  rawScanResult?: string;
  /** Network connections. */
  connections?: NetworkConnectionList;
  /** Netstat time collected. */
  netstatTime?: DateTime;
  /** Netstat (raw, OS-agnostic). */
  netstat?: string;
  /** Time of the last network scan. */
  scanTime?: string;
}

export const RuntimeNetworkInfo: Schema.Codec<RuntimeNetworkInfo> =
  /*@__PURE__*/ Schema.Struct({
    rawScanResult: Schema.optional(Schema.String),
    connections: Schema.optional(NetworkConnectionList),
    netstatTime: Schema.optional(DateTime),
    netstat: Schema.optional(Schema.String),
    scanTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RuntimeNetworkInfo" });

export interface RunningService {
  /** Service name. */
  name?: string;
  /** Service status. */
  status?: string;
  /** Service command line. */
  cmdline?: string;
  /** Service pid. */
  pid?: string;
  /** Service state (raw, OS-agnostic). */
  state?: string;
  /** Service start mode (raw, OS-agnostic). */
  startMode?: string;
  /** Service name. */
  serviceName?: string;
  /** Service binary path. */
  exePath?: string;
}

export const RunningService: Schema.Codec<RunningService> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    cmdline: Schema.optional(Schema.String),
    pid: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    startMode: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    exePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunningService" });

export interface RunningServiceList {
  /** Running service entries. */
  services?: ReadonlyArray<RunningService>;
  /** Running service entries. */
  entries?: ReadonlyArray<RunningService>;
}

export const RunningServiceList: Schema.Codec<RunningServiceList> =
  /*@__PURE__*/ Schema.Struct({
    services: Schema.optional(Schema.Array(RunningService)),
    entries: Schema.optional(Schema.Array(RunningService)),
  }).annotate({ identifier: "RunningServiceList" });

export interface GuestInstalledApplication {
  /** Installed application vendor. */
  vendor?: string;
  /** Installed application name. */
  applicationName?: string;
  /** Source path. */
  path?: string;
  /** License strings associated with the installed application. */
  licenses?: ReadonlyArray<string>;
  /** Date application was installed. */
  time?: string;
  /** Installed application version. */
  version?: string;
  /** The time when the application was installed. */
  installTime?: string;
  /** Installed application name. */
  name?: string;
}

export const GuestInstalledApplication: Schema.Codec<GuestInstalledApplication> =
  /*@__PURE__*/ Schema.Struct({
    vendor: Schema.optional(Schema.String),
    applicationName: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    licenses: Schema.optional(Schema.Array(Schema.String)),
    time: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    installTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestInstalledApplication" });

export interface GuestInstalledApplicationList {
  /** Application entries. */
  entries?: ReadonlyArray<GuestInstalledApplication>;
}

export const GuestInstalledApplicationList: Schema.Codec<GuestInstalledApplicationList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(GuestInstalledApplication)),
  }).annotate({ identifier: "GuestInstalledApplicationList" });

export interface OpenFileDetails {
  /** Opened file command. */
  command?: string;
  /** Opened file file type. */
  fileType?: string;
  /** Opened file file path. */
  filePath?: string;
  /** Opened file user. */
  user?: string;
}

export const OpenFileDetails: Schema.Codec<OpenFileDetails> =
  /*@__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.String),
    fileType: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenFileDetails" });

export interface OpenFileList {
  /** Open file details entries. */
  entries?: ReadonlyArray<OpenFileDetails>;
}

export const OpenFileList: Schema.Codec<OpenFileList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(OpenFileDetails)),
  }).annotate({ identifier: "OpenFileList" });

export interface GuestRuntimeDetails {
  /** Date since last booted (last uptime date). */
  lastUptime?: Migrationcenter_Date;
  /** Running processes. */
  processes?: RunningProcessList;
  /** Runtime network information (connections, ports). */
  networkInfo?: RuntimeNetworkInfo;
  /** Last time the OS was booted. */
  lastBootTime?: string;
  /** Running background services. */
  services?: RunningServiceList;
  /** Domain, e.g. c.stratozone-development.internal. */
  domain?: string;
  /** Installed applications information. */
  installedApps?: GuestInstalledApplicationList;
  /** Open files information. */
  openFileList?: OpenFileList;
  /** Machine name. */
  machineName?: string;
}

export const GuestRuntimeDetails: Schema.Codec<GuestRuntimeDetails> =
  /*@__PURE__*/ Schema.Struct({
    lastUptime: Schema.optional(Migrationcenter_Date),
    processes: Schema.optional(RunningProcessList),
    networkInfo: Schema.optional(RuntimeNetworkInfo),
    lastBootTime: Schema.optional(Schema.String),
    services: Schema.optional(RunningServiceList),
    domain: Schema.optional(Schema.String),
    installedApps: Schema.optional(GuestInstalledApplicationList),
    openFileList: Schema.optional(OpenFileList),
    machineName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestRuntimeDetails" });

export interface HostsEntry {
  /** IP (raw, IPv4/6 agnostic). */
  ip?: string;
  /** List of host names / aliases. */
  hostNames?: ReadonlyArray<string>;
}

export const HostsEntry: Schema.Codec<HostsEntry> =
  /*@__PURE__*/ Schema.Struct({
    ip: Schema.optional(Schema.String),
    hostNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "HostsEntry" });

export interface HostsEntryList {
  /** Output only. Hosts entries. */
  entries?: ReadonlyArray<HostsEntry>;
}

export const HostsEntryList: Schema.Codec<HostsEntryList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(HostsEntry)),
  }).annotate({ identifier: "HostsEntryList" });

export interface FstabEntry {
  /** Mount options associated with the filesystem. */
  mntops?: string;
  /** The block special device or remote filesystem to be mounted. */
  spec?: string;
  /** Used by dump to determine which filesystems need to be dumped. */
  freq?: number;
  /** Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time. */
  passno?: number;
  /** The type of the filesystem. */
  vfstype?: string;
  /** The mount point for the filesystem. */
  file?: string;
}

export const FstabEntry: Schema.Codec<FstabEntry> =
  /*@__PURE__*/ Schema.Struct({
    mntops: Schema.optional(Schema.String),
    spec: Schema.optional(Schema.String),
    freq: Schema.optional(Schema.Number),
    passno: Schema.optional(Schema.Number),
    vfstype: Schema.optional(Schema.String),
    file: Schema.optional(Schema.String),
  }).annotate({ identifier: "FstabEntry" });

export interface FstabEntryList {
  /** Fstab entries. */
  entries?: ReadonlyArray<FstabEntry>;
}

export const FstabEntryList: Schema.Codec<FstabEntryList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(FstabEntry)),
  }).annotate({ identifier: "FstabEntryList" });

export interface Selinux {
  /** Is SELinux enabled. */
  enabled?: boolean;
  /** SELinux mode disabled / enforcing / permissive. */
  mode?: string;
}

export const Selinux: Schema.Codec<Selinux> =
  /*@__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Selinux" });

export interface GuestConfigDetails {
  /** OS issue (typically /etc/issue in Linux). */
  issue?: string;
  /** Output only. Hosts file (/etc/hosts). */
  hosts?: HostsEntryList;
  /** Mount list (Linux fstab). */
  fstab?: FstabEntryList;
  /** NFS exports. */
  nfsExports?: NfsExportList;
  /** Security-Enhanced Linux (SELinux) mode. */
  selinuxMode?:
    | "SE_LINUX_MODE_UNSPECIFIED"
    | "SE_LINUX_MODE_DISABLED"
    | "SE_LINUX_MODE_PERMISSIVE"
    | "SE_LINUX_MODE_ENFORCING"
    | (string & {});
  /** SELinux details. */
  selinux?: Selinux;
}

export const GuestConfigDetails: Schema.Codec<GuestConfigDetails> =
  /*@__PURE__*/ Schema.Struct({
    issue: Schema.optional(Schema.String),
    hosts: Schema.optional(HostsEntryList),
    fstab: Schema.optional(FstabEntryList),
    nfsExports: Schema.optional(NfsExportList),
    selinuxMode: Schema.optional(Schema.String),
    selinux: Schema.optional(Selinux),
  }).annotate({ identifier: "GuestConfigDetails" });

export interface GuestOsDetails {
  /** Runtime information. */
  runtime?: GuestRuntimeDetails;
  /** The version of the operating system. */
  version?: string;
  /** OS and app configuration. */
  config?: GuestConfigDetails;
  /** The name of the operating system. */
  osName?: string;
  /** What family the OS belong to, if known. */
  family?:
    | "OS_FAMILY_UNKNOWN"
    | "OS_FAMILY_WINDOWS"
    | "OS_FAMILY_LINUX"
    | "OS_FAMILY_UNIX"
    | (string & {});
}

export const GuestOsDetails: Schema.Codec<GuestOsDetails> =
  /*@__PURE__*/ Schema.Struct({
    runtime: Schema.optional(GuestRuntimeDetails),
    version: Schema.optional(Schema.String),
    config: Schema.optional(GuestConfigDetails),
    osName: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestOsDetails" });

export interface VirtualMachineNetworkDetails {
  /** Default gateway address. */
  defaultGw?: string;
  /** IP address of the machine. */
  primaryIpAddress?: string;
  /** List of network adapters. */
  networkAdapters?: NetworkAdapterList;
  /** Public IP address of the machine. */
  publicIpAddress?: string;
  /** MAC address of the machine. This property is used to uniqly identify the machine. */
  primaryMacAddress?: string;
}

export const VirtualMachineNetworkDetails: Schema.Codec<VirtualMachineNetworkDetails> =
  /*@__PURE__*/ Schema.Struct({
    defaultGw: Schema.optional(Schema.String),
    primaryIpAddress: Schema.optional(Schema.String),
    networkAdapters: Schema.optional(NetworkAdapterList),
    publicIpAddress: Schema.optional(Schema.String),
    primaryMacAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachineNetworkDetails" });

export interface BiosDetails {
  /** BIOS version. */
  biosVersion?: string;
  /** BIOS version. */
  version?: string;
  /** BIOS release date. */
  releaseTime?: string;
  /** BIOS ID. */
  id?: string;
  /** BIOS manufacturer. */
  manufacturer?: string;
  /** BIOS name. */
  biosName?: string;
  /** SMBIOS UUID. */
  smbiosUuid?: string;
  /** BIOS release date. */
  biosReleaseDate?: string;
  /** BIOS manufacturer. */
  biosManufacturer?: string;
}

export const BiosDetails: Schema.Codec<BiosDetails> =
  /*@__PURE__*/ Schema.Struct({
    biosVersion: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    releaseTime: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
    biosName: Schema.optional(Schema.String),
    smbiosUuid: Schema.optional(Schema.String),
    biosReleaseDate: Schema.optional(Schema.String),
    biosManufacturer: Schema.optional(Schema.String),
  }).annotate({ identifier: "BiosDetails" });

export interface VirtualMachineArchitectureDetails {
  /** CPU manufacturer, e.g., "Intel", "AMD". */
  cpuManufacturer?: string;
  /** Deprecated: use VirtualMachineDetails.core_count instead. Number of CPU threads allocated to the machine. */
  cpuThreadCount?: number;
  /** Number of processor sockets allocated to the machine. */
  cpuSocketCount?: number;
  /** CPU hyperthreading support. */
  hyperthreading?:
    | "HYPER_THREADING_UNSPECIFIED"
    | "HYPER_THREADING_DISABLED"
    | "HYPER_THREADING_ENABLED"
    | (string & {});
  /** Hardware vendor. */
  vendor?: string;
  /** CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. */
  cpuName?: string;
  /** BIOS Details. */
  bios?: BiosDetails;
  /** Firmware (BIOS/efi). */
  firmware?: string;
  /** CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc. */
  cpuArchitecture?: string;
}

export const VirtualMachineArchitectureDetails: Schema.Codec<VirtualMachineArchitectureDetails> =
  /*@__PURE__*/ Schema.Struct({
    cpuManufacturer: Schema.optional(Schema.String),
    cpuThreadCount: Schema.optional(Schema.Number),
    cpuSocketCount: Schema.optional(Schema.Number),
    hyperthreading: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
    cpuName: Schema.optional(Schema.String),
    bios: Schema.optional(BiosDetails),
    firmware: Schema.optional(Schema.String),
    cpuArchitecture: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachineArchitectureDetails" });

export interface GenericPlatformDetails {
  /** Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field. */
  location?: string;
  /** Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
}

export const GenericPlatformDetails: Schema.Codec<GenericPlatformDetails> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenericPlatformDetails" });

export interface VmwarePlatformDetails {
  /** vCenter VM ID. */
  vcenterVmId?: string;
  /** vCenter version. */
  vcenterVersion?: string;
  /** VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html. */
  osid?: string;
  /** Folder name in vCenter where asset resides. */
  vcenterFolder?: string;
  /** vCenter URI used in collection. */
  vcenterUri?: string;
  /** Whether the ESX is hyperthreaded. */
  esxHyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** ESX version. */
  esxVersion?: string;
}

export const VmwarePlatformDetails: Schema.Codec<VmwarePlatformDetails> =
  /*@__PURE__*/ Schema.Struct({
    vcenterVmId: Schema.optional(Schema.String),
    vcenterVersion: Schema.optional(Schema.String),
    osid: Schema.optional(Schema.String),
    vcenterFolder: Schema.optional(Schema.String),
    vcenterUri: Schema.optional(Schema.String),
    esxHyperthreading: Schema.optional(Schema.String),
    esxVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwarePlatformDetails" });

export interface AzureVmPlatformDetails {
  /** Azure platform's provisioning state. */
  provisioningState?: string;
  /** The location of the machine in the Azure format. */
  location?: string;
  /** Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** Azure platform's machine type label. */
  machineTypeLabel?: string;
}

export const AzureVmPlatformDetails: Schema.Codec<AzureVmPlatformDetails> =
  /*@__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
    machineTypeLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureVmPlatformDetails" });

export interface AwsEc2PlatformDetails {
  /** The location of the machine in the AWS format. */
  location?: string;
  /** Optional. Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** AWS platform's machine type label. */
  machineTypeLabel?: string;
}

export const AwsEc2PlatformDetails: Schema.Codec<AwsEc2PlatformDetails> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
    machineTypeLabel: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsEc2PlatformDetails" });

export interface PhysicalPlatformDetails {
  /** Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field. */
  location?: string;
  /** Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
}

export const PhysicalPlatformDetails: Schema.Codec<PhysicalPlatformDetails> =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
  }).annotate({ identifier: "PhysicalPlatformDetails" });

export interface PlatformDetails {
  /** Generic platform details. */
  genericDetails?: GenericPlatformDetails;
  /** VMware specific details. */
  vmwareDetails?: VmwarePlatformDetails;
  /** Azure VM specific details. */
  azureVmDetails?: AzureVmPlatformDetails;
  /** AWS EC2 specific details. */
  awsEc2Details?: AwsEc2PlatformDetails;
  /** Physical machines platform details. */
  physicalDetails?: PhysicalPlatformDetails;
}

export const PlatformDetails: Schema.Codec<PlatformDetails> =
  /*@__PURE__*/ Schema.Struct({
    genericDetails: Schema.optional(GenericPlatformDetails),
    vmwareDetails: Schema.optional(VmwarePlatformDetails),
    azureVmDetails: Schema.optional(AzureVmPlatformDetails),
    awsEc2Details: Schema.optional(AwsEc2PlatformDetails),
    physicalDetails: Schema.optional(PhysicalPlatformDetails),
  }).annotate({ identifier: "PlatformDetails" });

export interface DiskPartitionDetails {
  /** Output only. Total capacity of all partitions. */
  totalCapacityBytes?: string;
  /** Output only. Total free space of all partitions. */
  freeSpaceBytes?: string;
  /** Optional. List of partitions. */
  partitions?: DiskPartitionList;
}

export const DiskPartitionDetails: Schema.Codec<DiskPartitionDetails> =
  /*@__PURE__*/ Schema.Struct({
    totalCapacityBytes: Schema.optional(Schema.String),
    freeSpaceBytes: Schema.optional(Schema.String),
    partitions: Schema.optional(DiskPartitionList),
  }).annotate({ identifier: "DiskPartitionDetails" });

export interface VirtualMachineDetails {
  /** Virtual Machine unique identifier. */
  vmUuid?: string;
  /** vCenter VM ID. */
  vcenterVmId?: string;
  /** VM creation timestamp. */
  createTime?: string;
  /** VM disk details. */
  vmDisks?: VirtualMachineDiskDetails;
  /** Power state of VM (poweredOn or poweredOff). */
  powerState?: string;
  /** Number of logical CPU cores in the VirtualMachine. Must be non-negative. */
  coreCount?: number;
  /** Guest OS information. */
  guestOs?: GuestOsDetails;
  /** vCenter URL used in collection. */
  vcenterUrl?: string;
  /** VM network details. */
  vmNetwork?: VirtualMachineNetworkDetails;
  /** VM architecture details (vendor, cpu arch). */
  vmArchitecture?: VirtualMachineArchitectureDetails;
  /** Virtual Machine display name. */
  vmName?: string;
  /** The version of the operating system running on the virtual machine. */
  osVersion?: string;
  /** The amount of memory in the VirtualMachine. Must be non-negative. */
  memoryMb?: number;
  /** The name of the operating system running on the VirtualMachine. */
  osName?: string;
  /** Platform information. */
  platform?: PlatformDetails;
  /** Folder name in vCenter where asset resides. */
  vcenterFolder?: string;
  /** Optional. Disk partitions details. Note: Partitions are not necessarily mounted on local disks and therefore might not have a one-to-one correspondence with local disks. */
  diskPartitions?: DiskPartitionDetails;
  /** What family the OS belong to, if known. */
  osFamily?:
    | "OS_FAMILY_UNKNOWN"
    | "OS_FAMILY_WINDOWS"
    | "OS_FAMILY_LINUX"
    | "OS_FAMILY_UNIX"
    | (string & {});
}

export const VirtualMachineDetails: Schema.Codec<VirtualMachineDetails> =
  /*@__PURE__*/ Schema.Struct({
    vmUuid: Schema.optional(Schema.String),
    vcenterVmId: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    vmDisks: Schema.optional(VirtualMachineDiskDetails),
    powerState: Schema.optional(Schema.String),
    coreCount: Schema.optional(Schema.Number),
    guestOs: Schema.optional(GuestOsDetails),
    vcenterUrl: Schema.optional(Schema.String),
    vmNetwork: Schema.optional(VirtualMachineNetworkDetails),
    vmArchitecture: Schema.optional(VirtualMachineArchitectureDetails),
    vmName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
    osName: Schema.optional(Schema.String),
    platform: Schema.optional(PlatformDetails),
    vcenterFolder: Schema.optional(Schema.String),
    diskPartitions: Schema.optional(DiskPartitionDetails),
    osFamily: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachineDetails" });

export interface MachineDiskDetails {
  /** Raw disk scan result. This field is intended for human inspection. The format of this field may be lsblk output or any another raw output. The exact format may change without notice and should not be relied upon. */
  rawScanResult?: string;
  /** Total disk free space. */
  totalFreeBytes?: string;
  /** Disk total Capacity. */
  totalCapacityBytes?: string;
  /** List of disks. */
  disks?: DiskEntryList;
}

export const MachineDiskDetails: Schema.Codec<MachineDiskDetails> =
  /*@__PURE__*/ Schema.Struct({
    rawScanResult: Schema.optional(Schema.String),
    totalFreeBytes: Schema.optional(Schema.String),
    totalCapacityBytes: Schema.optional(Schema.String),
    disks: Schema.optional(DiskEntryList),
  }).annotate({ identifier: "MachineDiskDetails" });

export interface MachineArchitectureDetails {
  /** CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc. */
  cpuArchitecture?: string;
  /** CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. */
  cpuName?: string;
  /** BIOS Details. */
  bios?: BiosDetails;
  /** Hardware vendor. */
  vendor?: string;
  /** Number of processor sockets allocated to the machine. */
  cpuSocketCount?: number;
  /** CPU hyper-threading support. */
  hyperthreading?:
    | "CPU_HYPER_THREADING_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
  /** Optional. CPU manufacturer, e.g., "Intel", "AMD". */
  cpuManufacturer?: string;
  /** Firmware type. */
  firmwareType?: "FIRMWARE_TYPE_UNSPECIFIED" | "BIOS" | "EFI" | (string & {});
}

export const MachineArchitectureDetails: Schema.Codec<MachineArchitectureDetails> =
  /*@__PURE__*/ Schema.Struct({
    cpuArchitecture: Schema.optional(Schema.String),
    cpuName: Schema.optional(Schema.String),
    bios: Schema.optional(BiosDetails),
    vendor: Schema.optional(Schema.String),
    cpuSocketCount: Schema.optional(Schema.Number),
    hyperthreading: Schema.optional(Schema.String),
    cpuManufacturer: Schema.optional(Schema.String),
    firmwareType: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineArchitectureDetails" });

export interface MachineDetails {
  /** Machine unique identifier. */
  uuid?: string;
  /** The amount of memory in the machine. Must be non-negative. */
  memoryMb?: number;
  /** Platform specific information. */
  platform?: PlatformDetails;
  /** Guest OS information. */
  guestOs?: GuestOsDetails;
  /** Number of logical CPU cores in the machine. Must be non-negative. */
  coreCount?: number;
  /** Disk details. */
  disks?: MachineDiskDetails;
  /** Optional. Disk partitions details. Note: Partitions are not necessarily mounted on local disks and therefore might not have a one-to-one correspondence with local disks. */
  diskPartitions?: DiskPartitionDetails;
  /** Architecture details (vendor, CPU architecture). */
  architecture?: MachineArchitectureDetails;
  /** Network details. */
  network?: MachineNetworkDetails;
  /** Machine creation time. */
  createTime?: string;
  /** Machine name. */
  machineName?: string;
  /** Power state of the machine. */
  powerState?:
    | "POWER_STATE_UNSPECIFIED"
    | "PENDING"
    | "ACTIVE"
    | "SUSPENDING"
    | "SUSPENDED"
    | "DELETING"
    | "DELETED"
    | (string & {});
}

export const MachineDetails: Schema.Codec<MachineDetails> =
  /*@__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
    platform: Schema.optional(PlatformDetails),
    guestOs: Schema.optional(GuestOsDetails),
    coreCount: Schema.optional(Schema.Number),
    disks: Schema.optional(MachineDiskDetails),
    diskPartitions: Schema.optional(DiskPartitionDetails),
    architecture: Schema.optional(MachineArchitectureDetails),
    network: Schema.optional(MachineNetworkDetails),
    createTime: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    powerState: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineDetails" });

export interface AwsEmrClusterDetails {}

export const AwsEmrClusterDetails: Schema.Codec<AwsEmrClusterDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsEmrClusterDetails",
  });

export interface AwsApplicationLoadBalancerDetails {}

export const AwsApplicationLoadBalancerDetails: Schema.Codec<AwsApplicationLoadBalancerDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsApplicationLoadBalancerDetails",
  });

export interface AwsElasticIpAddressDetails {}

export const AwsElasticIpAddressDetails: Schema.Codec<AwsElasticIpAddressDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsElasticIpAddressDetails",
  });

export interface AwsNatGatewayDetails {}

export const AwsNatGatewayDetails: Schema.Codec<AwsNatGatewayDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsNatGatewayDetails",
  });

export interface AwsBatchComputeEnvironmentDetails {}

export const AwsBatchComputeEnvironmentDetails: Schema.Codec<AwsBatchComputeEnvironmentDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsBatchComputeEnvironmentDetails",
  });

export interface AwsKinesisStreamDetails {}

export const AwsKinesisStreamDetails: Schema.Codec<AwsKinesisStreamDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsKinesisStreamDetails",
  });

export interface HostingProviderDetailsAws {
  /** Optional. The AWS account ID owning the resource represented by this asset. */
  owningAccountId?: string;
}

export const HostingProviderDetailsAws: Schema.Codec<HostingProviderDetailsAws> =
  /*@__PURE__*/ Schema.Struct({
    owningAccountId: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostingProviderDetailsAws" });

export interface ResourceLocation {
  /** Optional. The name of the region. */
  region?: string;
}

export const ResourceLocation: Schema.Codec<ResourceLocation> =
  /*@__PURE__*/ Schema.Struct({
    region: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceLocation" });

export interface HostingProviderDetails {
  /** Optional. Unique identifier for the asset in the hosting provider. */
  originalId?: string;
  /** Optional. Display name of the asset. */
  displayName?: string;
  /** Optional. The AWS platform details. */
  aws?: HostingProviderDetailsAws;
  /** Optional. Location of the asset. */
  location?: ResourceLocation;
  /** Optional. The timestamp when resource was created in the hosting provider. */
  createTime?: string;
}

export const HostingProviderDetails: Schema.Codec<HostingProviderDetails> =
  /*@__PURE__*/ Schema.Struct({
    originalId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    aws: Schema.optional(HostingProviderDetailsAws),
    location: Schema.optional(ResourceLocation),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostingProviderDetails" });

export interface AwsFirehoseDetails {}

export const AwsFirehoseDetails: Schema.Codec<AwsFirehoseDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsFirehoseDetails",
  });

export interface AwsEcsClusterDetails {}

export const AwsEcsClusterDetails: Schema.Codec<AwsEcsClusterDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsEcsClusterDetails",
  });

export interface AwsGlueJobDetails {}

export const AwsGlueJobDetails: Schema.Codec<AwsGlueJobDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsGlueJobDetails",
  });

export interface AwsAutoscalingGroupDetails {}

export const AwsAutoscalingGroupDetails: Schema.Codec<AwsAutoscalingGroupDetails> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsAutoscalingGroupDetails",
  });

export interface AssetFrame {
  /** Optional. Asset information specific for AWS EBS Volumes. */
  awsEbsVolumeDetails?: AwsEbsVolumeDetails;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Asset performance data samples. Samples that are from more than 40 days ago or after tomorrow are ignored. */
  performanceSamples?: ReadonlyArray<PerformanceSample>;
  /** Optional. Trace token is optionally provided to assist with debugging and traceability. */
  traceToken?: string;
  /** Asset information specific for AWS Redshift clusters. */
  awsRedshiftDetails?: AwsRedshiftDetails;
  /** Asset information specific for AwsEcrRepositoryDetails */
  awsEcrRepositoryDetails?: AwsEcrRepositoryDetails;
  /** Optional. Asset information specific for AWS Internet Gateways. */
  awsInternetGatewayDetails?: AwsInternetGatewayDetails;
  /** Asset information specific for AwsRoute53HostedZoneDetails */
  awsRoute53HostedZoneDetails?: AwsRoute53HostedZoneDetails;
  /** Optional. Asset information specific for AwsAthenaWorkGroupDetails */
  awsAthenaWorkGroupDetails?: AwsAthenaWorkGroupDetails;
  /** Optional. Asset information specific for AWS AppSync GraphQL APIs. */
  awsAppSyncGraphqlApiDetails?: AwsAppSyncGraphqlApiDetails;
  /** Optional. Asset information specific for AWS SNS Topics. */
  awsSnsTopicDetails?: AwsSnsTopicDetails;
  /** Asset information specific for AWS EFS file systems. */
  awsEfsFileSystemDetails?: AwsEfsFileSystemDetails;
  /** Asset information specific for AWS CloudFront distributions. */
  awsCloudFrontDistributionDetails?: AwsCloudFrontDistributionDetails;
  /** Asset information specific for AWS Lambda functions. */
  awsLambdaFunctionDetails?: AwsLambdaFunctionDetails;
  /** Asset information specific for logical databases. */
  databaseDetails?: DatabaseDetails;
  /** Asset information specific for AWS EKS clusters. */
  awsEksClusterDetails?: AwsEksClusterDetails;
  /** Asset information specific for AWS S3 buckets. */
  awsS3BucketDetails?: AwsS3BucketDetails;
  /** Optional. Asset information specific for AWS Elastic Network Interfaces. */
  awsElasticNetworkInterfaceDetails?: AwsElasticNetworkInterfaceDetails;
  /** Optional. Asset information specific for AWS API Gateway REST APIs. */
  awsApiGatewayRestApiDetails?: AwsApiGatewayRestApiDetails;
  /** Asset information specific for AWS DynamoDB tables. */
  awsDynamodbTableDetails?: AwsDynamoDBTableDetails;
  /** Asset information specific for AWS Load Balancers. */
  awsElbLoadBalancerDetails?: AwsElbLoadBalancerDetails;
  /** Asset information specific for virtual machines. */
  virtualMachineDetails?: VirtualMachineDetails;
  /** Optional. Generic structured asset attributes. */
  structuredAttributes?: Record<string, unknown>;
  /** Asset information specific for virtual and physical machines. */
  machineDetails?: MachineDetails;
  /** Optional. Asset information specific for AwsEmrClusterDetails */
  awsEmrClusterDetails?: AwsEmrClusterDetails;
  /** Optional. Asset information specific for AWS Application Load Balancers. */
  awsApplicationLoadBalancerDetails?: AwsApplicationLoadBalancerDetails;
  /** Optional. Asset information specific for AWS ElastiCache Clusters. */
  awsElasticacheClusterDetails?: AwsElastiCacheClusterDetails;
  /** Optional. Asset information specific for AWS Elastic IP Addresses. */
  awsElasticIpAddressDetails?: AwsElasticIpAddressDetails;
  /** Asset information specific for AwsNatGatewayDetails */
  awsNatGatewayDetails?: AwsNatGatewayDetails;
  /** Optional. Asset information specific for AWS Batch Compute Environments. */
  awsBatchComputeEnvironmentDetails?: AwsBatchComputeEnvironmentDetails;
  /** Optional. Asset information specific for AwsKinesisStreamDetails */
  awsKinesisStreamDetails?: AwsKinesisStreamDetails;
  /** Asset information specific for database deployments. */
  databaseDeploymentDetails?: DatabaseDeploymentDetails;
  /** Optional. Frame collection type, if not specified the collection type will be based on the source type of the source the frame was reported on. */
  collectionType?:
    | "SOURCE_TYPE_UNKNOWN"
    | "SOURCE_TYPE_UPLOAD"
    | "SOURCE_TYPE_GUEST_OS_SCAN"
    | "SOURCE_TYPE_INVENTORY_SCAN"
    | "SOURCE_TYPE_CUSTOM"
    | "SOURCE_TYPE_DISCOVERY_CLIENT"
    | (string & {});
  /** The time the data was reported. */
  reportTime?: string;
  /** Optional. Details about the hosting provider of the asset. */
  hostingProviderDetails?: HostingProviderDetails;
  /** Optional. Asset information specific for AwsFirehoseDetails */
  awsFirehoseDetails?: AwsFirehoseDetails;
  /** Generic asset attributes. */
  attributes?: Record<string, string>;
  /** Asset information specific for AWS ECS clusters. */
  awsEcsClusterDetails?: AwsEcsClusterDetails;
  /** Optional. Asset information specific for AwsGlueJobDetails */
  awsGlueJobDetails?: AwsGlueJobDetails;
  /** Asset information specific for AWS VPCs. */
  awsVpcDetails?: AwsVpcDetails;
  /** Optional. Asset information specific for AwsAutoscalingGroupDetails */
  awsAutoscalingGroupDetails?: AwsAutoscalingGroupDetails;
}

export const AssetFrame: Schema.Codec<AssetFrame> =
  /*@__PURE__*/ Schema.Struct({
    awsEbsVolumeDetails: Schema.optional(AwsEbsVolumeDetails),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    performanceSamples: Schema.optional(Schema.Array(PerformanceSample)),
    traceToken: Schema.optional(Schema.String),
    awsRedshiftDetails: Schema.optional(AwsRedshiftDetails),
    awsEcrRepositoryDetails: Schema.optional(AwsEcrRepositoryDetails),
    awsInternetGatewayDetails: Schema.optional(AwsInternetGatewayDetails),
    awsRoute53HostedZoneDetails: Schema.optional(AwsRoute53HostedZoneDetails),
    awsAthenaWorkGroupDetails: Schema.optional(AwsAthenaWorkGroupDetails),
    awsAppSyncGraphqlApiDetails: Schema.optional(AwsAppSyncGraphqlApiDetails),
    awsSnsTopicDetails: Schema.optional(AwsSnsTopicDetails),
    awsEfsFileSystemDetails: Schema.optional(AwsEfsFileSystemDetails),
    awsCloudFrontDistributionDetails: Schema.optional(
      AwsCloudFrontDistributionDetails,
    ),
    awsLambdaFunctionDetails: Schema.optional(AwsLambdaFunctionDetails),
    databaseDetails: Schema.optional(DatabaseDetails),
    awsEksClusterDetails: Schema.optional(AwsEksClusterDetails),
    awsS3BucketDetails: Schema.optional(AwsS3BucketDetails),
    awsElasticNetworkInterfaceDetails: Schema.optional(
      AwsElasticNetworkInterfaceDetails,
    ),
    awsApiGatewayRestApiDetails: Schema.optional(AwsApiGatewayRestApiDetails),
    awsDynamodbTableDetails: Schema.optional(AwsDynamoDBTableDetails),
    awsElbLoadBalancerDetails: Schema.optional(AwsElbLoadBalancerDetails),
    virtualMachineDetails: Schema.optional(VirtualMachineDetails),
    structuredAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    machineDetails: Schema.optional(MachineDetails),
    awsEmrClusterDetails: Schema.optional(AwsEmrClusterDetails),
    awsApplicationLoadBalancerDetails: Schema.optional(
      AwsApplicationLoadBalancerDetails,
    ),
    awsElasticacheClusterDetails: Schema.optional(AwsElastiCacheClusterDetails),
    awsElasticIpAddressDetails: Schema.optional(AwsElasticIpAddressDetails),
    awsNatGatewayDetails: Schema.optional(AwsNatGatewayDetails),
    awsBatchComputeEnvironmentDetails: Schema.optional(
      AwsBatchComputeEnvironmentDetails,
    ),
    awsKinesisStreamDetails: Schema.optional(AwsKinesisStreamDetails),
    databaseDeploymentDetails: Schema.optional(DatabaseDeploymentDetails),
    collectionType: Schema.optional(Schema.String),
    reportTime: Schema.optional(Schema.String),
    hostingProviderDetails: Schema.optional(HostingProviderDetails),
    awsFirehoseDetails: Schema.optional(AwsFirehoseDetails),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    awsEcsClusterDetails: Schema.optional(AwsEcsClusterDetails),
    awsGlueJobDetails: Schema.optional(AwsGlueJobDetails),
    awsVpcDetails: Schema.optional(AwsVpcDetails),
    awsAutoscalingGroupDetails: Schema.optional(AwsAutoscalingGroupDetails),
  }).annotate({ identifier: "AssetFrame" });

export interface ErrorFrame {
  /** Output only. Frame ingestion time. */
  ingestionTime?: string;
  /** Output only. The identifier of the ErrorFrame. */
  name?: string;
  /** Output only. All the violations that were detected for the frame. */
  violations?: ReadonlyArray<FrameViolationEntry>;
  /** Output only. The frame that was originally reported. */
  originalFrame?: AssetFrame;
}

export const ErrorFrame: Schema.Codec<ErrorFrame> =
  /*@__PURE__*/ Schema.Struct({
    ingestionTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    violations: Schema.optional(Schema.Array(FrameViolationEntry)),
    originalFrame: Schema.optional(AssetFrame),
  }).annotate({ identifier: "ErrorFrame" });

export interface AssetsExportJobNetworkDependencies {}

export const AssetsExportJobNetworkDependencies: Schema.Codec<AssetsExportJobNetworkDependencies> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AssetsExportJobNetworkDependencies",
  });

export interface ImportError {
  /** The severity of the error. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "ERROR"
    | "WARNING"
    | "INFO"
    | (string & {});
  /** The error information. */
  errorDetails?: string;
}

export const ImportError: Schema.Codec<ImportError> =
  /*@__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    errorDetails: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportError" });

export interface ImportRowErrorCsvErrorDetails {
  /** The row number where the error was detected. */
  rowNumber?: number;
}

export const ImportRowErrorCsvErrorDetails: Schema.Codec<ImportRowErrorCsvErrorDetails> =
  /*@__PURE__*/ Schema.Struct({
    rowNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ImportRowErrorCsvErrorDetails" });

export interface ImportRowErrorArchiveErrorDetails {
  /** The file path inside the archive where the error was detected. */
  filePath?: string;
  /** Error details for a CSV file. */
  csvError?: ImportRowErrorCsvErrorDetails;
}

export const ImportRowErrorArchiveErrorDetails: Schema.Codec<ImportRowErrorArchiveErrorDetails> =
  /*@__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
    csvError: Schema.optional(ImportRowErrorCsvErrorDetails),
  }).annotate({ identifier: "ImportRowErrorArchiveErrorDetails" });

export interface ImportRowErrorXlsxErrorDetails {
  /** The name of the sheet where the error was detected. */
  sheet?: string;
  /** The row number where the error was detected. */
  rowNumber?: number;
}

export const ImportRowErrorXlsxErrorDetails: Schema.Codec<ImportRowErrorXlsxErrorDetails> =
  /*@__PURE__*/ Schema.Struct({
    sheet: Schema.optional(Schema.String),
    rowNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ImportRowErrorXlsxErrorDetails" });

export interface ImportRowError {
  /** The VM UUID. */
  vmUuid?: string;
  /** The list of errors detected in the row. */
  errors?: ReadonlyArray<ImportError>;
  /** Error details for a CSV file. */
  csvError?: ImportRowErrorCsvErrorDetails;
  /** The row number where the error was detected. */
  rowNumber?: number;
  /** Error details for an archive file. */
  archiveError?: ImportRowErrorArchiveErrorDetails;
  /** Error details for an XLSX file. */
  xlsxError?: ImportRowErrorXlsxErrorDetails;
  /** The name of the VM in the row. */
  vmName?: string;
  /** The asset title. */
  assetTitle?: string;
}

export const ImportRowError: Schema.Codec<ImportRowError> =
  /*@__PURE__*/ Schema.Struct({
    vmUuid: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(ImportError)),
    csvError: Schema.optional(ImportRowErrorCsvErrorDetails),
    rowNumber: Schema.optional(Schema.Number),
    archiveError: Schema.optional(ImportRowErrorArchiveErrorDetails),
    xlsxError: Schema.optional(ImportRowErrorXlsxErrorDetails),
    vmName: Schema.optional(Schema.String),
    assetTitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportRowError" });

export interface FileValidationReport {
  /** List of file level errors. */
  fileErrors?: ReadonlyArray<ImportError>;
  /** The name of the file. */
  fileName?: string;
  /** Partial list of rows that encountered validation error. */
  rowErrors?: ReadonlyArray<ImportRowError>;
  /** Flag indicating that processing was aborted due to maximum number of errors. */
  partialReport?: boolean;
}

export const FileValidationReport: Schema.Codec<FileValidationReport> =
  /*@__PURE__*/ Schema.Struct({
    fileErrors: Schema.optional(Schema.Array(ImportError)),
    fileName: Schema.optional(Schema.String),
    rowErrors: Schema.optional(Schema.Array(ImportRowError)),
    partialReport: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FileValidationReport" });

export interface GoogleKubernetesEngineMigrationTarget {}

export const GoogleKubernetesEngineMigrationTarget: Schema.Codec<GoogleKubernetesEngineMigrationTarget> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleKubernetesEngineMigrationTarget",
  });

export interface Money {
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
}

export const Money: Schema.Codec<Money> =
  /*@__PURE__*/ Schema.Struct({
    units: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    currencyCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface MachineSeries {
  /** Code to identify a machine series. Consult this for more details on the available series for Compute Engine: https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison Consult this for more details on the available series for Google Cloud VMware Engine: https://cloud.google.com/vmware-engine/pricing */
  code?: string;
}

export const MachineSeries: Schema.Codec<MachineSeries> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineSeries" });

export interface VMwareEngineMachinePreferences {
  /** Optional. Whether to use storage-only nodes, if those are available. */
  storageOnlyNodes?:
    | "STORAGE_ONLY_NODES_UNSPECIFIED"
    | "STORAGE_ONLY_NODES_ENABLED"
    | "STORAGE_ONLY_NODES_DISABLED"
    | (string & {});
  /** Optional. VMware Engine on Google Cloud machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series. */
  allowedMachineSeries?: ReadonlyArray<MachineSeries>;
  /** Optional. Whether to use VMware Engine Protected offering. */
  protectedNodes?:
    | "PROTECTED_NODES_UNSPECIFIED"
    | "PROTECTED_NODES_ENABLED"
    | "PROTECTED_NODES_DISABLED"
    | (string & {});
}

export const VMwareEngineMachinePreferences: Schema.Codec<VMwareEngineMachinePreferences> =
  /*@__PURE__*/ Schema.Struct({
    storageOnlyNodes: Schema.optional(Schema.String),
    allowedMachineSeries: Schema.optional(Schema.Array(MachineSeries)),
    protectedNodes: Schema.optional(Schema.String),
  }).annotate({ identifier: "VMwareEngineMachinePreferences" });

export interface VmwareEnginePreferences {
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "ON_DEMAND"
    | "COMMITMENT_1_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_3_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_1_YEAR_UPFRONT_PAYMENT"
    | "COMMITMENT_3_YEAR_UPFRONT_PAYMENT"
    | "COMMITMENT_FLEXIBLE_3_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_FLEXIBLE_3_YEAR_UPFRONT_PAYMENT"
    | (string & {});
  /** Optional. Discount percentage for the license offered to you by Broadcom. Must be between 0 and 100. Only valid when service_type is set to SERVICE_TYPE_PORTABLE_LICENSE. */
  licenseDiscountPercentage?: number;
  /** Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. */
  memoryOvercommitRatio?: number;
  /** Optional. Preferences concerning the machine types to consider on Google Cloud VMware Engine. */
  machinePreferences?: VMwareEngineMachinePreferences;
  /** Optional. GCVE service type (fully licensed or portable license). */
  serviceType?:
    | "SERVICE_TYPE_UNSPECIFIED"
    | "SERVICE_TYPE_FULLY_LICENSED"
    | "SERVICE_TYPE_PORTABLE_LICENSE"
    | (string & {});
  /** The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0. */
  storageDeduplicationCompressionRatio?: number;
  /** CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. */
  cpuOvercommitRatio?: number;
}

export const VmwareEnginePreferences: Schema.Codec<VmwareEnginePreferences> =
  /*@__PURE__*/ Schema.Struct({
    commitmentPlan: Schema.optional(Schema.String),
    licenseDiscountPercentage: Schema.optional(Schema.Number),
    memoryOvercommitRatio: Schema.optional(Schema.Number),
    machinePreferences: Schema.optional(VMwareEngineMachinePreferences),
    serviceType: Schema.optional(Schema.String),
    storageDeduplicationCompressionRatio: Schema.optional(Schema.Number),
    cpuOvercommitRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VmwareEnginePreferences" });

export interface AssetsExportJobInventory {}

export const AssetsExportJobInventory: Schema.Codec<AssetsExportJobInventory> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AssetsExportJobInventory",
  });

export interface SignedUriDestination {
  /** Required. The file format to export. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "CSV" | "XLSX" | (string & {});
}

export const SignedUriDestination: Schema.Codec<SignedUriDestination> =
  /*@__PURE__*/ Schema.Struct({
    fileFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignedUriDestination" });

export interface AssetsExportJobPerformanceData {
  /** Optional. When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. When this value is unset (or set to zero), all available data is returned. The maximum value is 420; values above 420 will be coerced to 420. If unset (0 value) a default value of 40 will be used. */
  maxDays?: number;
}

export const AssetsExportJobPerformanceData: Schema.Codec<AssetsExportJobPerformanceData> =
  /*@__PURE__*/ Schema.Struct({
    maxDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AssetsExportJobPerformanceData" });

export interface CsvOutputFile {
  /** Output only. Number of columns in the file. */
  columnsCount?: number;
  /** Output only. Number of rows in the file. */
  rowCount?: number;
  /** Output only. Signed URI destination. */
  signedUri?: SignedUri;
}

export const CsvOutputFile: Schema.Codec<CsvOutputFile> =
  /*@__PURE__*/ Schema.Struct({
    columnsCount: Schema.optional(Schema.Number),
    rowCount: Schema.optional(Schema.Number),
    signedUri: Schema.optional(SignedUri),
  }).annotate({ identifier: "CsvOutputFile" });

export interface XlsxOutputFile {
  /** Output only. Signed URI destination. */
  signedUri?: SignedUri;
}

export const XlsxOutputFile: Schema.Codec<XlsxOutputFile> =
  /*@__PURE__*/ Schema.Struct({
    signedUri: Schema.optional(SignedUri),
  }).annotate({ identifier: "XlsxOutputFile" });

export interface OutputFile {
  /** Output only. CSV output file. */
  csvOutputFile?: CsvOutputFile;
  /** Output only. XLSX output file. */
  xlsxOutputFile?: XlsxOutputFile;
  /** Output only. File size in bytes. */
  fileSizeBytes?: string;
}

export const OutputFile: Schema.Codec<OutputFile> =
  /*@__PURE__*/ Schema.Struct({
    csvOutputFile: Schema.optional(CsvOutputFile),
    xlsxOutputFile: Schema.optional(XlsxOutputFile),
    fileSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutputFile" });

export interface OutputFileList {
  /** List of output files. */
  entries?: ReadonlyArray<OutputFile>;
}

export const OutputFileList: Schema.Codec<OutputFileList> =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(OutputFile)),
  }).annotate({ identifier: "OutputFileList" });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface AssetsExportJobExecutionResult {
  /** Output only. List of output files. */
  outputFiles?: OutputFileList;
  /** Output only. Signed URLs for downloading export artifacts. */
  signedUris?: SignedUris;
  /** Output only. Error encountered during export. */
  error?: Status;
}

export const AssetsExportJobExecutionResult: Schema.Codec<AssetsExportJobExecutionResult> =
  /*@__PURE__*/ Schema.Struct({
    outputFiles: Schema.optional(OutputFileList),
    signedUris: Schema.optional(SignedUris),
    error: Schema.optional(Status),
  }).annotate({ identifier: "AssetsExportJobExecutionResult" });

export interface AssetsExportJobExecution {
  /** Output only. Globally unique identifier of the execution. */
  executionId?: string;
  /** Output only. Result of the export execution. */
  result?: AssetsExportJobExecutionResult;
  /** Output only. Execution timestamp. */
  startTime?: string;
  /** Output only. Number of assets requested for export after resolving the requested filters. */
  requestedAssetCount?: number;
  /** Output only. Expiration time for the export and artifacts. */
  expireTime?: string;
  /** Output only. Completion time of the export. */
  endTime?: string;
}

export const AssetsExportJobExecution: Schema.Codec<AssetsExportJobExecution> =
  /*@__PURE__*/ Schema.Struct({
    executionId: Schema.optional(Schema.String),
    result: Schema.optional(AssetsExportJobExecutionResult),
    startTime: Schema.optional(Schema.String),
    requestedAssetCount: Schema.optional(Schema.Number),
    expireTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetsExportJobExecution" });

export interface AssetsExportJobExportCondition {
  /** Optional. Assets filter, supports the same syntax as asset listing. */
  filter?: string;
}

export const AssetsExportJobExportCondition: Schema.Codec<AssetsExportJobExportCondition> =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetsExportJobExportCondition" });

export interface AssetsExportJob {
  /** Output only. Identifier. Resource name. */
  name?: string;
  /** Export asset inventory details. */
  inventory?: AssetsExportJobInventory;
  /** Export to Cloud Storage files downloadable using signed URIs. */
  signedUriDestination?: SignedUriDestination;
  /** Export asset with performance data. */
  performanceData?: AssetsExportJobPerformanceData;
  /** Output only. Recent non expired executions of the job. */
  recentExecutions?: ReadonlyArray<AssetsExportJobExecution>;
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
  /** Optional. Conditions for selecting assets to export. */
  condition?: AssetsExportJobExportCondition;
  /** Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Export data regarding asset network dependencies. */
  networkDependencies?: AssetsExportJobNetworkDependencies;
  /** Output only. Resource creation time. */
  createTime?: string;
  /** Output only. Resource update time. */
  updateTime?: string;
}

export const AssetsExportJob: Schema.Codec<AssetsExportJob> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    inventory: Schema.optional(AssetsExportJobInventory),
    signedUriDestination: Schema.optional(SignedUriDestination),
    performanceData: Schema.optional(AssetsExportJobPerformanceData),
    recentExecutions: Schema.optional(Schema.Array(AssetsExportJobExecution)),
    showHidden: Schema.optional(Schema.Boolean),
    condition: Schema.optional(AssetsExportJobExportCondition),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    networkDependencies: Schema.optional(AssetsExportJobNetworkDependencies),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetsExportJob" });

export interface ListAssetsExportJobsResponse {
  /** Output only. A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Output only. The list of assets export jobs. */
  assetsExportJobs?: ReadonlyArray<AssetsExportJob>;
}

export const ListAssetsExportJobsResponse: Schema.Codec<ListAssetsExportJobsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    assetsExportJobs: Schema.optional(Schema.Array(AssetsExportJob)),
  }).annotate({ identifier: "ListAssetsExportJobsResponse" });

export interface FitDescriptor {
  /** Output only. Fit level. */
  fitLevel?:
    | "FIT_LEVEL_UNSPECIFIED"
    | "FIT"
    | "NO_FIT"
    | "REQUIRES_EFFORT"
    | (string & {});
}

export const FitDescriptor: Schema.Codec<FitDescriptor> =
  /*@__PURE__*/ Schema.Struct({
    fitLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "FitDescriptor" });

export interface DailyResourceUsageAggregationStats {
  /** 95th percentile usage value. */
  ninteyFifthPercentile?: number;
  /** Average usage value. */
  average?: number;
  /** Median usage value. */
  median?: number;
  /** Peak usage value. */
  peak?: number;
}

export const DailyResourceUsageAggregationStats: Schema.Codec<DailyResourceUsageAggregationStats> =
  /*@__PURE__*/ Schema.Struct({
    ninteyFifthPercentile: Schema.optional(Schema.Number),
    average: Schema.optional(Schema.Number),
    median: Schema.optional(Schema.Number),
    peak: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyResourceUsageAggregationStats" });

export interface DailyResourceUsageAggregationMemory {
  /** Memory utilization percentage. */
  utilizationPercentage?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationMemory: Schema.Codec<DailyResourceUsageAggregationMemory> =
  /*@__PURE__*/ Schema.Struct({
    utilizationPercentage: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationMemory" });

export interface DailyResourceUsageAggregationNetwork {
  /** Network egress in B/s. */
  egressBps?: DailyResourceUsageAggregationStats;
  /** Network ingress in B/s. */
  ingressBps?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationNetwork: Schema.Codec<DailyResourceUsageAggregationNetwork> =
  /*@__PURE__*/ Schema.Struct({
    egressBps: Schema.optional(DailyResourceUsageAggregationStats),
    ingressBps: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationNetwork" });

export interface DailyResourceUsageAggregationCPU {
  /** CPU utilization percentage. */
  utilizationPercentage?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationCPU: Schema.Codec<DailyResourceUsageAggregationCPU> =
  /*@__PURE__*/ Schema.Struct({
    utilizationPercentage: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationCPU" });

export interface DailyResourceUsageAggregationDisk {
  /** Disk read I/O operations per second. */
  readIops?: DailyResourceUsageAggregationStats;
  /** Disk I/O operations per second. */
  iops?: DailyResourceUsageAggregationStats;
  /** Disk write I/O operations per second. */
  writeIops?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationDisk: Schema.Codec<DailyResourceUsageAggregationDisk> =
  /*@__PURE__*/ Schema.Struct({
    readIops: Schema.optional(DailyResourceUsageAggregationStats),
    iops: Schema.optional(DailyResourceUsageAggregationStats),
    writeIops: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationDisk" });

export interface DailyResourceUsageAggregation {
  /** Memory usage. */
  memory?: DailyResourceUsageAggregationMemory;
  /** Network usage. */
  network?: DailyResourceUsageAggregationNetwork;
  /** CPU usage. */
  cpu?: DailyResourceUsageAggregationCPU;
  /** Aggregation date. Day boundaries are at midnight UTC. */
  date?: Migrationcenter_Date;
  /** Disk usage. */
  disk?: DailyResourceUsageAggregationDisk;
}

export const DailyResourceUsageAggregation: Schema.Codec<DailyResourceUsageAggregation> =
  /*@__PURE__*/ Schema.Struct({
    memory: Schema.optional(DailyResourceUsageAggregationMemory),
    network: Schema.optional(DailyResourceUsageAggregationNetwork),
    cpu: Schema.optional(DailyResourceUsageAggregationCPU),
    date: Schema.optional(Migrationcenter_Date),
    disk: Schema.optional(DailyResourceUsageAggregationDisk),
  }).annotate({ identifier: "DailyResourceUsageAggregation" });

export interface AssetPerformanceData {
  /** Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent. */
  dailyResourceUsageAggregations?: ReadonlyArray<DailyResourceUsageAggregation>;
}

export const AssetPerformanceData: Schema.Codec<AssetPerformanceData> =
  /*@__PURE__*/ Schema.Struct({
    dailyResourceUsageAggregations: Schema.optional(
      Schema.Array(DailyResourceUsageAggregation),
    ),
  }).annotate({ identifier: "AssetPerformanceData" });

export interface GenericInsight {
  /** Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links. */
  additionalInformation?: ReadonlyArray<string>;
  /** Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead. */
  messageId?: string;
  /** Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. Text can contain md file style links. */
  defaultMessage?: string;
}

export const GenericInsight: Schema.Codec<GenericInsight> =
  /*@__PURE__*/ Schema.Struct({
    additionalInformation: Schema.optional(Schema.Array(Schema.String)),
    messageId: Schema.optional(Schema.String),
    defaultMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenericInsight" });

export interface SoftwareInsight {
  /** Output only. Information about the detected software. */
  detectedSoftware?: DetectedSoftware;
}

export const SoftwareInsight: Schema.Codec<SoftwareInsight> =
  /*@__PURE__*/ Schema.Struct({
    detectedSoftware: Schema.optional(DetectedSoftware),
  }).annotate({ identifier: "SoftwareInsight" });

export interface ComputeEngineSoleTenantMigrationTarget {}

export const ComputeEngineSoleTenantMigrationTarget: Schema.Codec<ComputeEngineSoleTenantMigrationTarget> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ComputeEngineSoleTenantMigrationTarget",
  });

export interface CloudSqlForSqlServerShape {
  /** Output only. Predicted storage shape. */
  storage?: ComputeStorageDescriptor;
  /** Output only. Cloud SQL zone availability. */
  zoneAvailability?:
    | "CLOUD_SQL_ZONE_AVAILABILITY_UNSPECIFIED"
    | "CLOUD_SQL_ZONE_AVAILABILITY_ZONAL"
    | "CLOUD_SQL_ZONE_AVAILABILITY_REGIONAL"
    | (string & {});
  /** Output only. Whether simultaneous multithreading is enabled (see https://cloud.google.com/sql/docs/sqlserver/create-instance#smt-create-instance). */
  smtEnabled?: boolean;
  /** Output only. Cloud SQL edition. */
  edition?:
    | "CLOUD_SQL_EDITION_UNSPECIFIED"
    | "CLOUD_SQL_EDITION_ENTERPRISE"
    | "CLOUD_SQL_EDITION_ENTERPRISE_PLUS"
    | (string & {});
  /** Output only. Number of logical cores. */
  logicalCoreCount?: number;
  /** Output only. Predicted amount of memory in MiB. */
  memoryMb?: number;
  /** Output only. Predicted backup storage size in GiB. */
  backupStorageGb?: number;
  /** Output only. Predicted Network Out traffic GiB per month. */
  egressGbPerMonth?: string;
  /** Output only. Microsoft SQL Server version to be used on the Cloud SQL for SQL server instance. */
  version?:
    | "SQL_SERVER_VERSION_UNSPECIFIED"
    | "SQL_SERVER_VERSION_2017_EXPRESS"
    | "SQL_SERVER_VERSION_2017_WEB"
    | "SQL_SERVER_VERSION_2017_STANDARD"
    | "SQL_SERVER_VERSION_2017_ENTERPRISE"
    | "SQL_SERVER_VERSION_2019_EXPRESS"
    | "SQL_SERVER_VERSION_2019_WEB"
    | "SQL_SERVER_VERSION_2019_STANDARD"
    | "SQL_SERVER_VERSION_2019_ENTERPRISE"
    | "SQL_SERVER_VERSION_2022_EXPRESS"
    | "SQL_SERVER_VERSION_2022_WEB"
    | "SQL_SERVER_VERSION_2022_STANDARD"
    | "SQL_SERVER_VERSION_2022_ENTERPRISE"
    | (string & {});
}

export const CloudSqlForSqlServerShape: Schema.Codec<CloudSqlForSqlServerShape> =
  /*@__PURE__*/ Schema.Struct({
    storage: Schema.optional(ComputeStorageDescriptor),
    zoneAvailability: Schema.optional(Schema.String),
    smtEnabled: Schema.optional(Schema.Boolean),
    edition: Schema.optional(Schema.String),
    logicalCoreCount: Schema.optional(Schema.Number),
    memoryMb: Schema.optional(Schema.Number),
    backupStorageGb: Schema.optional(Schema.Number),
    egressGbPerMonth: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlForSqlServerShape" });

export interface CloudSqlForMySqlShape {
  /** Output only. Number of logical cores. */
  logicalCoreCount?: number;
  /** Output only. Cloud SQL edition. */
  edition?:
    | "CLOUD_SQL_EDITION_UNSPECIFIED"
    | "CLOUD_SQL_EDITION_ENTERPRISE"
    | "CLOUD_SQL_EDITION_ENTERPRISE_PLUS"
    | (string & {});
  /** Output only. Predicted storage shape. */
  storage?: ComputeStorageDescriptor;
  /** Output only. Cloud SQL zone availability. */
  zoneAvailability?:
    | "CLOUD_SQL_ZONE_AVAILABILITY_UNSPECIFIED"
    | "CLOUD_SQL_ZONE_AVAILABILITY_ZONAL"
    | "CLOUD_SQL_ZONE_AVAILABILITY_REGIONAL"
    | (string & {});
  /** Output only. Predicted Network Out traffic GiB per month. */
  egressGbPerMonth?: string;
  /** Output only. MySQL version to be used on the Cloud SQL for MySQL instance. */
  version?:
    | "MY_SQL_VERSION_UNSPECIFIED"
    | "MY_SQL_VERSION_5_6"
    | "MY_SQL_VERSION_5_7"
    | "MY_SQL_VERSION_8_0"
    | (string & {});
  /** Output only. Predicted amount of memory in MiB. */
  memoryMb?: number;
  /** Output only. Predicted backup storage size in GiB. */
  backupStorageGb?: number;
}

export const CloudSqlForMySqlShape: Schema.Codec<CloudSqlForMySqlShape> =
  /*@__PURE__*/ Schema.Struct({
    logicalCoreCount: Schema.optional(Schema.Number),
    edition: Schema.optional(Schema.String),
    storage: Schema.optional(ComputeStorageDescriptor),
    zoneAvailability: Schema.optional(Schema.String),
    egressGbPerMonth: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
    backupStorageGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CloudSqlForMySqlShape" });

export interface CloudSqlForPostgreSqlShape {
  /** Output only. Number of logical cores. */
  logicalCoreCount?: number;
  /** Output only. Cloud SQL edition. */
  edition?:
    | "CLOUD_SQL_EDITION_UNSPECIFIED"
    | "CLOUD_SQL_EDITION_ENTERPRISE"
    | "CLOUD_SQL_EDITION_ENTERPRISE_PLUS"
    | (string & {});
  /** Output only. Predicted Network Out traffic GiB per month. */
  egressGbPerMonth?: string;
  /** Output only. PostgreSql version to be used on the Cloud SQL for PostgreSql instance. */
  version?:
    | "POSTGRESQL_VERSION_UNSPECIFIED"
    | "POSTGRESQL_VERSION_9_6"
    | "POSTGRESQL_VERSION_10"
    | "POSTGRESQL_VERSION_11"
    | "POSTGRESQL_VERSION_12"
    | "POSTGRESQL_VERSION_13"
    | "POSTGRESQL_VERSION_14"
    | "POSTGRESQL_VERSION_15"
    | (string & {});
  /** Output only. Predicted amount of memory in MiB. */
  memoryMb?: number;
  /** Output only. Predicted backup storage size in GiB. */
  backupStorageGb?: number;
  /** Output only. Predicted storage shape. */
  storage?: ComputeStorageDescriptor;
  /** Output only. Cloud SQL zone availability. */
  zoneAvailability?:
    | "CLOUD_SQL_ZONE_AVAILABILITY_UNSPECIFIED"
    | "CLOUD_SQL_ZONE_AVAILABILITY_ZONAL"
    | "CLOUD_SQL_ZONE_AVAILABILITY_REGIONAL"
    | (string & {});
}

export const CloudSqlForPostgreSqlShape: Schema.Codec<CloudSqlForPostgreSqlShape> =
  /*@__PURE__*/ Schema.Struct({
    logicalCoreCount: Schema.optional(Schema.Number),
    edition: Schema.optional(Schema.String),
    egressGbPerMonth: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    memoryMb: Schema.optional(Schema.Number),
    backupStorageGb: Schema.optional(Schema.Number),
    storage: Schema.optional(ComputeStorageDescriptor),
    zoneAvailability: Schema.optional(Schema.String),
  }).annotate({ identifier: "CloudSqlForPostgreSqlShape" });

export interface CloudDatabaseMigrationTarget {
  /** Cloud SQL for SQL Server database shape. */
  cloudSqlShape?: CloudSqlForSqlServerShape;
  /** Cloud SQL for MySQL database shape. */
  cloudSqlForMysqlShape?: CloudSqlForMySqlShape;
  /** Cloud SQL for PostgreSQL database shape. */
  cloudSqlForPostgresqlShape?: CloudSqlForPostgreSqlShape;
}

export const CloudDatabaseMigrationTarget: Schema.Codec<CloudDatabaseMigrationTarget> =
  /*@__PURE__*/ Schema.Struct({
    cloudSqlShape: Schema.optional(CloudSqlForSqlServerShape),
    cloudSqlForMysqlShape: Schema.optional(CloudSqlForMySqlShape),
    cloudSqlForPostgresqlShape: Schema.optional(CloudSqlForPostgreSqlShape),
  }).annotate({ identifier: "CloudDatabaseMigrationTarget" });

export interface IssueCompatibilityIssue {
  /** Output only. Category of this compatibility issue. */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "DATABASE_FLAG"
    | "DATABASE_FEATURE"
    | (string & {});
  /** Output only. Type of object associated with this migration compatibility issue. */
  associatedObjectType?:
    | "OBJECT_TYPE_UNSPECIFIED"
    | "DATABASE_DEPLOYMENT"
    | "DATABASE"
    | "SCHEMA"
    | (string & {});
  /** Output only. Name of the object associated with this compatibility issue relative to the relevant asset. Does not represent a fully qualified resource name and is not intended for programmatic use. */
  associatedObject?: string;
  /** Output only. A string representation of actual value associated with this issue. Some values may contain aggregated information, such as a flag name and the actual value assigned to it. */
  associatedValue?: string;
}

export const IssueCompatibilityIssue: Schema.Codec<IssueCompatibilityIssue> =
  /*@__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    associatedObjectType: Schema.optional(Schema.String),
    associatedObject: Schema.optional(Schema.String),
    associatedValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "IssueCompatibilityIssue" });

export interface Issue {
  /** Output only. English description of the issue. */
  description?: string;
  /** Output only. Details about a compatibility issue. */
  compatibilityIssue?: IssueCompatibilityIssue;
  /** Output only. Unique identifier for this issue type. */
  issueCode?: string;
}

export const Issue: Schema.Codec<Issue> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    compatibilityIssue: Schema.optional(IssueCompatibilityIssue),
    issueCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "Issue" });

export interface ComputeEngineShapeDescriptor {
  /** Output only. Compute Engine machine type. */
  machineType?: string;
  /** Output only. Whether simultaneous multithreading is enabled (see https://cloud.google.com/compute/docs/instances/set-threads-per-core). */
  smtEnabled?: boolean;
  /** Output only. Compute Engine storage. Never empty. */
  storage?: ReadonlyArray<ComputeStorageDescriptor>;
  /** Output only. Memory in mebibytes. */
  memoryMb?: number;
  /** Output only. Compute Engine machine series. */
  series?: string;
  /** Output only. Number of logical cores. */
  logicalCoreCount?: number;
  /** Output only. Number of physical cores. */
  physicalCoreCount?: number;
}

export const ComputeEngineShapeDescriptor: Schema.Codec<ComputeEngineShapeDescriptor> =
  /*@__PURE__*/ Schema.Struct({
    machineType: Schema.optional(Schema.String),
    smtEnabled: Schema.optional(Schema.Boolean),
    storage: Schema.optional(Schema.Array(ComputeStorageDescriptor)),
    memoryMb: Schema.optional(Schema.Number),
    series: Schema.optional(Schema.String),
    logicalCoreCount: Schema.optional(Schema.Number),
    physicalCoreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ComputeEngineShapeDescriptor" });

export interface ComputeEngineMigrationTarget {
  /** Description of the suggested shape for the migration target. */
  shape?: ComputeEngineShapeDescriptor;
}

export const ComputeEngineMigrationTarget: Schema.Codec<ComputeEngineMigrationTarget> =
  /*@__PURE__*/ Schema.Struct({
    shape: Schema.optional(ComputeEngineShapeDescriptor),
  }).annotate({ identifier: "ComputeEngineMigrationTarget" });

export interface VmwareEngineMigrationTarget {}

export const VmwareEngineMigrationTarget: Schema.Codec<VmwareEngineMigrationTarget> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "VmwareEngineMigrationTarget",
  });

export interface MigrationInsight {
  /** Output only. A Google Compute Engine Sole Tenant target. */
  computeEngineSoleTenantTarget?: ComputeEngineSoleTenantMigrationTarget;
  /** Output only. A Cloud database migration target. */
  cloudDatabaseTarget?: CloudDatabaseMigrationTarget;
  /** Output only. Issues associated with this migration. */
  issues?: ReadonlyArray<Issue>;
  /** Output only. Description of how well the asset this insight is associated with fits the proposed migration. */
  fit?: FitDescriptor;
  /** Output only. A Google Compute Engine target. */
  computeEngineTarget?: ComputeEngineMigrationTarget;
  /** Output only. A Google Kubernetes Engine target. */
  gkeTarget?: GoogleKubernetesEngineMigrationTarget;
  /** Output only. A VMWare Engine target. */
  vmwareEngineTarget?: VmwareEngineMigrationTarget;
}

export const MigrationInsight: Schema.Codec<MigrationInsight> =
  /*@__PURE__*/ Schema.Struct({
    computeEngineSoleTenantTarget: Schema.optional(
      ComputeEngineSoleTenantMigrationTarget,
    ),
    cloudDatabaseTarget: Schema.optional(CloudDatabaseMigrationTarget),
    issues: Schema.optional(Schema.Array(Issue)),
    fit: Schema.optional(FitDescriptor),
    computeEngineTarget: Schema.optional(ComputeEngineMigrationTarget),
    gkeTarget: Schema.optional(GoogleKubernetesEngineMigrationTarget),
    vmwareEngineTarget: Schema.optional(VmwareEngineMigrationTarget),
  }).annotate({ identifier: "MigrationInsight" });

export interface Insight {
  /** Output only. A generic insight about an asset. */
  genericInsight?: GenericInsight;
  /** Output only. An insight regarding software detected on an asset. */
  softwareInsight?: SoftwareInsight;
  /** Output only. An insight about potential migrations for an asset. */
  migrationInsight?: MigrationInsight;
}

export const Insight: Schema.Codec<Insight> =
  /*@__PURE__*/ Schema.Struct({
    genericInsight: Schema.optional(GenericInsight),
    softwareInsight: Schema.optional(SoftwareInsight),
    migrationInsight: Schema.optional(MigrationInsight),
  }).annotate({ identifier: "Insight" });

export interface InsightList {
  /** Output only. Insights of the list. */
  insights?: ReadonlyArray<Insight>;
  /** Output only. Update timestamp. */
  updateTime?: string;
}

export const InsightList: Schema.Codec<InsightList> =
  /*@__PURE__*/ Schema.Struct({
    insights: Schema.optional(Schema.Array(Insight)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsightList" });

export interface Asset {
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Asset information specific for AWS EBS Volumes. */
  awsEbsVolumeDetails?: AwsEbsVolumeDetails;
  /** Optional. An optional reason for marking this asset as hidden. */
  hideReason?: string;
  /** Output only. The list of groups that the asset is assigned to. */
  assignedGroups?: ReadonlyArray<string>;
  /** Output only. Asset information specific for AWS Redshift */
  awsRedshiftDetails?: AwsRedshiftDetails;
  /** Output only. Asset information specific for AwsRoute53HostedZoneDetails */
  awsRoute53HostedZoneDetails?: AwsRoute53HostedZoneDetails;
  /** Output only. Asset information specific for AwsAthenaWorkGroupDetails */
  awsAthenaWorkGroupDetails?: AwsAthenaWorkGroupDetails;
  /** Output only. Asset information specific for AWS AppSync GraphQL APIs. */
  awsAppSyncGraphqlApiDetails?: AwsAppSyncGraphqlApiDetails;
  /** Output only. Asset information specific for AwsEcrRepositoryDetails */
  awsEcrRepositoryDetails?: AwsEcrRepositoryDetails;
  /** Output only. Asset information specific for AWS Internet Gateways. */
  awsInternetGatewayDetails?: AwsInternetGatewayDetails;
  /** Output only. Asset information specific for AWS EFS file systems. */
  awsEfsFileSystemDetails?: AwsEfsFileSystemDetails;
  /** Output only. Asset information specific for AWS CloudFront distributions. */
  awsCloudFrontDistributionDetails?: AwsCloudFrontDistributionDetails;
  /** Output only. Asset information specific for AWS SNS Topics. */
  awsSnsTopicDetails?: AwsSnsTopicDetails;
  /** Output only. The list of sources contributing to the asset. */
  sources?: ReadonlyArray<string>;
  /** Output only. Asset information specific for logical databases. */
  databaseDetails?: DatabaseDetails;
  /** Output only. Asset information specific for AWS Lambda functions. */
  awsLambdaFunctionDetails?: AwsLambdaFunctionDetails;
  /** Output only. The timestamp when the asset was last updated. */
  updateTime?: string;
  /** Output only. The full name of the asset. */
  name?: string;
  /** Output only. Asset information specific for AWS API Gateway REST APIs. */
  awsApiGatewayRestApiDetails?: AwsApiGatewayRestApiDetails;
  /** Output only. Asset information specific for AWS DynamoDB tables. */
  awsDynamodbTableDetails?: AwsDynamoDBTableDetails;
  /** Output only. Asset information specific for AWS EKS clusters. */
  awsEksClusterDetails?: AwsEksClusterDetails;
  /** Output only. Asset information specific for AWS S3 buckets. */
  awsS3BucketDetails?: AwsS3BucketDetails;
  /** Output only. Asset information specific for AWS Elastic Network Interfaces. */
  awsElasticNetworkInterfaceDetails?: AwsElasticNetworkInterfaceDetails;
  /** Performance data for the asset. */
  performanceData?: AssetPerformanceData;
  /** Output only. Asset information specific for virtual machines. */
  virtualMachineDetails?: VirtualMachineDetails;
  /** Output only. Asset information specific for AWS Load Balancers. */
  awsElbLoadBalancerDetails?: AwsElbLoadBalancerDetails;
  /** Output only. Asset information specific for virtual machines. */
  machineDetails?: MachineDetails;
  /** Output only. The list of insights associated with the asset. */
  insightList?: InsightList;
  /** Optional. Generic structured asset attributes. */
  structuredAttributes?: Record<string, unknown>;
  /** Output only. The timestamp when the asset was created. */
  createTime?: string;
  /** Output only. Asset information specific for AwsNatGatewayDetails */
  awsNatGatewayDetails?: AwsNatGatewayDetails;
  /** Output only. Asset information specific for AWS Batch Compute Environments. */
  awsBatchComputeEnvironmentDetails?: AwsBatchComputeEnvironmentDetails;
  /** Output only. Asset information specific for AwsEmrClusterDetails */
  awsEmrClusterDetails?: AwsEmrClusterDetails;
  /** Output only. Asset information specific for AWS Application Load Balancers. */
  awsApplicationLoadBalancerDetails?: AwsApplicationLoadBalancerDetails;
  /** Output only. Asset information specific for AWS ElastiCache Clusters. */
  awsElasticacheClusterDetails?: AwsElastiCacheClusterDetails;
  /** Optional. Indicates if the asset is hidden. */
  hidden?: boolean;
  /** Output only. Asset information specific for AWS Elastic IP Addresses. */
  awsElasticIpAddressDetails?: AwsElasticIpAddressDetails;
  /** Output only. Asset information specific for AwsKinesisStreamDetails */
  awsKinesisStreamDetails?: AwsKinesisStreamDetails;
  /** Output only. The timestamp when the asset was marked as hidden. */
  hideTime?: string;
  /** Output only. Asset information specific for database deployments. */
  databaseDeploymentDetails?: DatabaseDeploymentDetails;
  /** Output only. Asset information specific for AwsFirehoseDetails */
  awsFirehoseDetails?: AwsFirehoseDetails;
  /** Output only. Details about the hosting provider of the asset. */
  hostingProviderDetails?: HostingProviderDetails;
  /** Output only. Asset information specific for AWS ECS clusters. */
  awsEcsClusterDetails?: AwsEcsClusterDetails;
  /** Generic asset attributes. */
  attributes?: Record<string, string>;
  /** Output only. Asset information specific for AwsGlueJobDetails */
  awsGlueJobDetails?: AwsGlueJobDetails;
  /** Output only. Asset information specific for AWS VPCs. */
  awsVpcDetails?: AwsVpcDetails;
  /** Output only. Asset information specific for AwsAutoscalingGroupDetails */
  awsAutoscalingGroupDetails?: AwsAutoscalingGroupDetails;
  /** Output only. Server generated human readable name of the asset. */
  title?: string;
}

export const Asset: Schema.Codec<Asset> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    awsEbsVolumeDetails: Schema.optional(AwsEbsVolumeDetails),
    hideReason: Schema.optional(Schema.String),
    assignedGroups: Schema.optional(Schema.Array(Schema.String)),
    awsRedshiftDetails: Schema.optional(AwsRedshiftDetails),
    awsRoute53HostedZoneDetails: Schema.optional(AwsRoute53HostedZoneDetails),
    awsAthenaWorkGroupDetails: Schema.optional(AwsAthenaWorkGroupDetails),
    awsAppSyncGraphqlApiDetails: Schema.optional(AwsAppSyncGraphqlApiDetails),
    awsEcrRepositoryDetails: Schema.optional(AwsEcrRepositoryDetails),
    awsInternetGatewayDetails: Schema.optional(AwsInternetGatewayDetails),
    awsEfsFileSystemDetails: Schema.optional(AwsEfsFileSystemDetails),
    awsCloudFrontDistributionDetails: Schema.optional(
      AwsCloudFrontDistributionDetails,
    ),
    awsSnsTopicDetails: Schema.optional(AwsSnsTopicDetails),
    sources: Schema.optional(Schema.Array(Schema.String)),
    databaseDetails: Schema.optional(DatabaseDetails),
    awsLambdaFunctionDetails: Schema.optional(AwsLambdaFunctionDetails),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    awsApiGatewayRestApiDetails: Schema.optional(AwsApiGatewayRestApiDetails),
    awsDynamodbTableDetails: Schema.optional(AwsDynamoDBTableDetails),
    awsEksClusterDetails: Schema.optional(AwsEksClusterDetails),
    awsS3BucketDetails: Schema.optional(AwsS3BucketDetails),
    awsElasticNetworkInterfaceDetails: Schema.optional(
      AwsElasticNetworkInterfaceDetails,
    ),
    performanceData: Schema.optional(AssetPerformanceData),
    virtualMachineDetails: Schema.optional(VirtualMachineDetails),
    awsElbLoadBalancerDetails: Schema.optional(AwsElbLoadBalancerDetails),
    machineDetails: Schema.optional(MachineDetails),
    insightList: Schema.optional(InsightList),
    structuredAttributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    createTime: Schema.optional(Schema.String),
    awsNatGatewayDetails: Schema.optional(AwsNatGatewayDetails),
    awsBatchComputeEnvironmentDetails: Schema.optional(
      AwsBatchComputeEnvironmentDetails,
    ),
    awsEmrClusterDetails: Schema.optional(AwsEmrClusterDetails),
    awsApplicationLoadBalancerDetails: Schema.optional(
      AwsApplicationLoadBalancerDetails,
    ),
    awsElasticacheClusterDetails: Schema.optional(AwsElastiCacheClusterDetails),
    hidden: Schema.optional(Schema.Boolean),
    awsElasticIpAddressDetails: Schema.optional(AwsElasticIpAddressDetails),
    awsKinesisStreamDetails: Schema.optional(AwsKinesisStreamDetails),
    hideTime: Schema.optional(Schema.String),
    databaseDeploymentDetails: Schema.optional(DatabaseDeploymentDetails),
    awsFirehoseDetails: Schema.optional(AwsFirehoseDetails),
    hostingProviderDetails: Schema.optional(HostingProviderDetails),
    awsEcsClusterDetails: Schema.optional(AwsEcsClusterDetails),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    awsGlueJobDetails: Schema.optional(AwsGlueJobDetails),
    awsVpcDetails: Schema.optional(AwsVpcDetails),
    awsAutoscalingGroupDetails: Schema.optional(AwsAutoscalingGroupDetails),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Asset" });

export interface BatchUpdateAssetsResponse {
  /** Update asset content. The content only includes values after field mask being applied. */
  assets?: ReadonlyArray<Asset>;
}

export const BatchUpdateAssetsResponse: Schema.Codec<BatchUpdateAssetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(Asset)),
  }).annotate({ identifier: "BatchUpdateAssetsResponse" });

export interface ListErrorFramesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of error frames. */
  errorFrames?: ReadonlyArray<ErrorFrame>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListErrorFramesResponse: Schema.Codec<ListErrorFramesResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    errorFrames: Schema.optional(Schema.Array(ErrorFrame)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListErrorFramesResponse" });

export interface AggregationFrequency {}

export const AggregationFrequency: Schema.Codec<AggregationFrequency> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AggregationFrequency",
  });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ReportSummaryHistogramChartDataBucket {
  /** Lower bound - inclusive. */
  lowerBound?: string;
  /** Upper bound - exclusive. */
  upperBound?: string;
  /** Count of items in the bucket. */
  count?: string;
}

export const ReportSummaryHistogramChartDataBucket: Schema.Codec<ReportSummaryHistogramChartDataBucket> =
  /*@__PURE__*/ Schema.Struct({
    lowerBound: Schema.optional(Schema.String),
    upperBound: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryHistogramChartDataBucket" });

export interface ReportSummaryHistogramChartData {
  /** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
  buckets?: ReadonlyArray<ReportSummaryHistogramChartDataBucket>;
}

export const ReportSummaryHistogramChartData: Schema.Codec<ReportSummaryHistogramChartData> =
  /*@__PURE__*/ Schema.Struct({
    buckets: Schema.optional(
      Schema.Array(ReportSummaryHistogramChartDataBucket),
    ),
  }).annotate({ identifier: "ReportSummaryHistogramChartData" });

export interface AggregationResultHistogramBucket {
  /** Lower bound - inclusive. */
  lowerBound?: number;
  /** Upper bound - exclusive. */
  upperBound?: number;
  /** Count of items in the bucket. */
  count?: string;
}

export const AggregationResultHistogramBucket: Schema.Codec<AggregationResultHistogramBucket> =
  /*@__PURE__*/ Schema.Struct({
    lowerBound: Schema.optional(Schema.Number),
    upperBound: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregationResultHistogramBucket" });

export interface AggregationResultHistogram {
  /** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
  buckets?: ReadonlyArray<AggregationResultHistogramBucket>;
}

export const AggregationResultHistogram: Schema.Codec<AggregationResultHistogram> =
  /*@__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(AggregationResultHistogramBucket)),
  }).annotate({ identifier: "AggregationResultHistogram" });

export interface ValidationReport {
  /** List of errors found in files. */
  fileValidations?: ReadonlyArray<FileValidationReport>;
  /** List of job level errors. */
  jobErrors?: ReadonlyArray<ImportError>;
}

export const ValidationReport: Schema.Codec<ValidationReport> =
  /*@__PURE__*/ Schema.Struct({
    fileValidations: Schema.optional(Schema.Array(FileValidationReport)),
    jobErrors: Schema.optional(Schema.Array(ImportError)),
  }).annotate({ identifier: "ValidationReport" });

export interface RunAssetsExportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunAssetsExportJobRequest: Schema.Codec<RunAssetsExportJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunAssetsExportJobRequest" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface ReportSummaryChartDataDataPoint {
  /** The X-axis label for this data point. */
  label?: string;
  /** The Y-axis value for this data point. */
  value?: number;
}

export const ReportSummaryChartDataDataPoint: Schema.Codec<ReportSummaryChartDataDataPoint> =
  /*@__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ReportSummaryChartDataDataPoint" });

export interface ReportSummaryChartData {
  /** Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value. */
  dataPoints?: ReadonlyArray<ReportSummaryChartDataDataPoint>;
}

export const ReportSummaryChartData: Schema.Codec<ReportSummaryChartData> =
  /*@__PURE__*/ Schema.Struct({
    dataPoints: Schema.optional(Schema.Array(ReportSummaryChartDataDataPoint)),
  }).annotate({ identifier: "ReportSummaryChartData" });

export interface RemoveAssetsFromGroupRequest {
  /** Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000. */
  assets?: AssetList;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
  allowMissing?: boolean;
}

export const RemoveAssetsFromGroupRequest: Schema.Codec<RemoveAssetsFromGroupRequest> =
  /*@__PURE__*/ Schema.Struct({
    assets: Schema.optional(AssetList),
    requestId: Schema.optional(Schema.String),
    allowMissing: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RemoveAssetsFromGroupRequest" });

export interface DiscoveryClientDiscoveryClientRecommendedVersion {
  /** Output only. The version of the discovery client. */
  version?: string;
  /** Output only. The URI of the discovery client version. */
  uri?: string;
}

export const DiscoveryClientDiscoveryClientRecommendedVersion: Schema.Codec<DiscoveryClientDiscoveryClientRecommendedVersion> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "DiscoveryClientDiscoveryClientRecommendedVersion",
  });

export interface DiscoveryClient {
  /** Output only. This field is intended for internal use. */
  signalsEndpoint?: string;
  /** Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes). */
  heartbeatTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Time when the discovery client was first created. */
  createTime?: string;
  /** Optional. Free text display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Required. Full name of the source object associated with this discovery client. */
  source?: string;
  /** Output only. Current state of the discovery client. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "OFFLINE"
    | "DEGRADED"
    | "EXPIRED"
    | (string & {});
  /** Output only. Errors affecting client functionality. */
  errors?: ReadonlyArray<Status>;
  /** Required. Service account used by the discovery client for various operation. */
  serviceAccount?: string;
  /** Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the `heartbeat_time` field. */
  updateTime?: string;
  /** Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the `expire_time` field. */
  ttl?: string;
  /** Output only. The recommended versions of the discovery client. */
  recommendedVersions?: ReadonlyArray<DiscoveryClientDiscoveryClientRecommendedVersion>;
  /** Optional. Free text description. Maximum length is 1000 characters. */
  description?: string;
  /** Output only. Identifier. Full name of this discovery client. */
  name?: string;
  /** Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time. */
  expireTime?: string;
  /** Output only. Client version, as reported in recent heartbeat. */
  version?: string;
}

export const DiscoveryClient: Schema.Codec<DiscoveryClient> =
  /*@__PURE__*/ Schema.Struct({
    signalsEndpoint: Schema.optional(Schema.String),
    heartbeatTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Status)),
    serviceAccount: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    recommendedVersions: Schema.optional(
      Schema.Array(DiscoveryClientDiscoveryClientRecommendedVersion),
    ),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveryClient" });

export interface ListDiscoveryClientsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of discovery clients. */
  discoveryClients?: ReadonlyArray<DiscoveryClient>;
}

export const ListDiscoveryClientsResponse: Schema.Codec<ListDiscoveryClientsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    discoveryClients: Schema.optional(Schema.Array(DiscoveryClient)),
  }).annotate({ identifier: "ListDiscoveryClientsResponse" });

export interface ReportSummaryDatabaseFinding {
  /** Output only. Number of database assets which were successfully assigned in this finding. */
  allocatedAssetCount?: string;
  /** Output only. Number of database assets in this finding. */
  totalAssets?: string;
}

export const ReportSummaryDatabaseFinding: Schema.Codec<ReportSummaryDatabaseFinding> =
  /*@__PURE__*/ Schema.Struct({
    allocatedAssetCount: Schema.optional(Schema.String),
    totalAssets: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryDatabaseFinding" });

export interface Frames {
  /** A repeated field of asset data. */
  framesData?: ReadonlyArray<AssetFrame>;
}

export const Frames: Schema.Codec<Frames> =
  /*@__PURE__*/ Schema.Struct({
    framesData: Schema.optional(Schema.Array(AssetFrame)),
  }).annotate({ identifier: "Frames" });

export interface EstimatedUsage {
  /** Optional. Estimated disk utilization percentage. Must be in the range [1, 100]. */
  estimatedDiskPercentage?: number;
  /** Optional. Estimated CPU utilization percentage. Must be in the range [1, 100]. */
  estimatedCpuPercentage?: number;
  /** Optional. Estimated memory utilization percentage. Must be in the range [1, 100]. */
  estimatedMemoryPercentage?: number;
}

export const EstimatedUsage: Schema.Codec<EstimatedUsage> =
  /*@__PURE__*/ Schema.Struct({
    estimatedDiskPercentage: Schema.optional(Schema.Number),
    estimatedCpuPercentage: Schema.optional(Schema.Number),
    estimatedMemoryPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "EstimatedUsage" });

export interface ReportSummarySoleTenantNodeAllocation {
  /** Count of this node type to be provisioned */
  nodeCount?: string;
  /** Count of assets allocated to these nodes */
  allocatedAssetCount?: string;
  /** Sole Tenant node type, e.g. "m3-node-128-3904" */
  node?: SoleTenantNodeType;
}

export const ReportSummarySoleTenantNodeAllocation: Schema.Codec<ReportSummarySoleTenantNodeAllocation> =
  /*@__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.String),
    allocatedAssetCount: Schema.optional(Schema.String),
    node: Schema.optional(SoleTenantNodeType),
  }).annotate({ identifier: "ReportSummarySoleTenantNodeAllocation" });

export interface ReportSummarySoleTenantFinding {
  /** Set of regions in which the assets are allocated */
  allocatedRegions?: ReadonlyArray<string>;
  /** Set of per-nodetype allocation records */
  nodeAllocations?: ReadonlyArray<ReportSummarySoleTenantNodeAllocation>;
  /** Count of assets which are allocated */
  allocatedAssetCount?: string;
}

export const ReportSummarySoleTenantFinding: Schema.Codec<ReportSummarySoleTenantFinding> =
  /*@__PURE__*/ Schema.Struct({
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
    nodeAllocations: Schema.optional(
      Schema.Array(ReportSummarySoleTenantNodeAllocation),
    ),
    allocatedAssetCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummarySoleTenantFinding" });

export interface Relation {
  /** Output only. Identifier. The identifier of the relation. */
  name?: string;
  /** Output only. The destination asset name in the relation. */
  dstAsset?: string;
  /** Optional. The type of the relation. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "LOGICAL_DATABASE"
    | "DATABASE_DEPLOYMENT_HOSTING_SERVER"
    | (string & {});
  /** Output only. The source asset name in the relation. */
  srcAsset?: string;
  /** Output only. The timestamp when the relation was created. */
  createTime?: string;
}

export const Relation: Schema.Codec<Relation> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    dstAsset: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    srcAsset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Relation" });

export interface ListRelationsResponse {
  /** A list of relations. */
  relations?: ReadonlyArray<Relation>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListRelationsResponse: Schema.Codec<ListRelationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    relations: Schema.optional(Schema.Array(Relation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRelationsResponse" });

export interface ReportExportExecutionResult {
  /** Output only. List of output files. */
  outputFiles?: OutputFileList;
  /** Output only. Signed URLs for downloading export artifacts. */
  signedUris?: SignedUris;
  /** Output only. Error encountered during export. */
  error?: Status;
}

export const ReportExportExecutionResult: Schema.Codec<ReportExportExecutionResult> =
  /*@__PURE__*/ Schema.Struct({
    outputFiles: Schema.optional(OutputFileList),
    signedUris: Schema.optional(SignedUris),
    error: Schema.optional(Status),
  }).annotate({ identifier: "ReportExportExecutionResult" });

export interface ReportExportExecution {
  /** Output only. Represents the progress of the execution. It reaches 100 when the execution is successfully completed. When the execution finishes with a failure, the progress is set to 0. */
  progressPercentage?: number;
  /** Output only. Expiration time for the export and artifacts. */
  expireTime?: string;
  /** Output only. Completion time of the export. */
  endTime?: string;
  /** Output only. Globally unique identifier of the execution. */
  executionId?: string;
  /** Output only. Result of the export execution. */
  result?: ReportExportExecutionResult;
  /** Output only. Execution start timestamp. */
  startTime?: string;
}

export const ReportExportExecution: Schema.Codec<ReportExportExecution> =
  /*@__PURE__*/ Schema.Struct({
    progressPercentage: Schema.optional(Schema.Number),
    expireTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    executionId: Schema.optional(Schema.String),
    result: Schema.optional(ReportExportExecutionResult),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportExportExecution" });

export interface ReportExportJob {
  /** Output only. Identifier. Resource name. */
  name?: string;
  /** Output only. Recent not expired executions of the export report job. */
  recentExecutions?: ReadonlyArray<ReportExportExecution>;
  /** Export with a SignedUri. */
  signedUriDestination?: SignedUriDestination;
}

export const ReportExportJob: Schema.Codec<ReportExportJob> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    recentExecutions: Schema.optional(Schema.Array(ReportExportExecution)),
    signedUriDestination: Schema.optional(SignedUriDestination),
  }).annotate({ identifier: "ReportExportJob" });

export interface ListReportExportJobsResponse {
  /** Output only. A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Output only. The list of report export jobs. */
  reportExportJobs?: ReadonlyArray<ReportExportJob>;
}

export const ListReportExportJobsResponse: Schema.Codec<ListReportExportJobsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    reportExportJobs: Schema.optional(Schema.Array(ReportExportJob)),
  }).annotate({ identifier: "ListReportExportJobsResponse" });

export interface ListAssetsResponse {
  /** A list of assets. */
  assets?: ReadonlyArray<Asset>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAssetsResponse: Schema.Codec<ListAssetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(Asset)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListAssetsResponse" });

export interface RegionPreferences {
  /** A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions. */
  preferredRegions?: ReadonlyArray<string>;
}

export const RegionPreferences: Schema.Codec<RegionPreferences> =
  /*@__PURE__*/ Schema.Struct({
    preferredRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegionPreferences" });

export interface CascadeLogicalDBsRule {}

export const CascadeLogicalDBsRule: Schema.Codec<CascadeLogicalDBsRule> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CascadeLogicalDBsRule",
  });

export interface CascadingRule {
  /** Cascading rule for related logical DBs. */
  cascadeLogicalDbs?: CascadeLogicalDBsRule;
}

export const CascadingRule: Schema.Codec<CascadingRule> =
  /*@__PURE__*/ Schema.Struct({
    cascadeLogicalDbs: Schema.optional(CascadeLogicalDBsRule),
  }).annotate({ identifier: "CascadingRule" });

export interface ReportSummaryMachineSeriesAllocation {
  /** The Machine Series (e.g. "E2", "N2") */
  machineSeries?: MachineSeries;
  /** Count of assets allocated to this machine series. */
  allocatedAssetCount?: string;
}

export const ReportSummaryMachineSeriesAllocation: Schema.Codec<ReportSummaryMachineSeriesAllocation> =
  /*@__PURE__*/ Schema.Struct({
    machineSeries: Schema.optional(MachineSeries),
    allocatedAssetCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryMachineSeriesAllocation" });

export interface ReportSummaryMachineFinding {
  /** Count of assets which were allocated. */
  allocatedAssetCount?: string;
  /** Distribution of assets based on the Machine Series. */
  machineSeriesAllocations?: ReadonlyArray<ReportSummaryMachineSeriesAllocation>;
  /** @deprecated. Use storage_allocations instead. Set of disk types allocated to assets. */
  allocatedDiskTypes?: ReadonlyArray<
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {})
  >;
  /** Set of regions in which the assets were allocated. */
  allocatedRegions?: ReadonlyArray<string>;
}

export const ReportSummaryMachineFinding: Schema.Codec<ReportSummaryMachineFinding> =
  /*@__PURE__*/ Schema.Struct({
    allocatedAssetCount: Schema.optional(Schema.String),
    machineSeriesAllocations: Schema.optional(
      Schema.Array(ReportSummaryMachineSeriesAllocation),
    ),
    allocatedDiskTypes: Schema.optional(Schema.Array(Schema.String)),
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReportSummaryMachineFinding" });

export interface AggregationSum {}

export const AggregationSum: Schema.Codec<AggregationSum> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AggregationSum",
  });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AddAssetsToGroupRequest {
  /** Required. List of assets to be added. The maximum number of assets that can be added in a single request is 2000. */
  assets?: AssetList;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
  allowExisting?: boolean;
}

export const AddAssetsToGroupRequest: Schema.Codec<AddAssetsToGroupRequest> =
  /*@__PURE__*/ Schema.Struct({
    assets: Schema.optional(AssetList),
    requestId: Schema.optional(Schema.String),
    allowExisting: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AddAssetsToGroupRequest" });

export interface AggregationCount {}

export const AggregationCount: Schema.Codec<AggregationCount> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AggregationCount",
  });

export interface AggregationHistogram {
  /** Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds. */
  lowerBounds?: ReadonlyArray<number>;
}

export const AggregationHistogram: Schema.Codec<AggregationHistogram> =
  /*@__PURE__*/ Schema.Struct({
    lowerBounds: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "AggregationHistogram" });

export interface Aggregation {
  /** Sum over a numeric field. */
  sum?: AggregationSum;
  /** The name of the field on which to aggregate. */
  field?: string;
  /** Count the number of matching objects. */
  count?: AggregationCount;
  /** Creates a frequency distribution of all field values. */
  frequency?: AggregationFrequency;
  /** Creates a bucketed histogram of field values. */
  histogram?: AggregationHistogram;
}

export const Aggregation: Schema.Codec<Aggregation> =
  /*@__PURE__*/ Schema.Struct({
    sum: Schema.optional(AggregationSum),
    field: Schema.optional(Schema.String),
    count: Schema.optional(AggregationCount),
    frequency: Schema.optional(AggregationFrequency),
    histogram: Schema.optional(AggregationHistogram),
  }).annotate({ identifier: "Aggregation" });

export interface AggregationResultCount {
  value?: string;
}

export const AggregationResultCount: Schema.Codec<AggregationResultCount> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregationResultCount" });

export interface AggregationResultSum {
  value?: number;
}

export const AggregationResultSum: Schema.Codec<AggregationResultSum> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregationResultSum" });

export interface AggregationResult {
  histogram?: AggregationResultHistogram;
  field?: string;
  count?: AggregationResultCount;
  frequency?: AggregationResultFrequency;
  sum?: AggregationResultSum;
}

export const AggregationResult: Schema.Codec<AggregationResult> =
  /*@__PURE__*/ Schema.Struct({
    histogram: Schema.optional(AggregationResultHistogram),
    field: Schema.optional(Schema.String),
    count: Schema.optional(AggregationResultCount),
    frequency: Schema.optional(AggregationResultFrequency),
    sum: Schema.optional(AggregationResultSum),
  }).annotate({ identifier: "AggregationResult" });

export interface ReportSummaryAssetAggregateStatsEstimatedUsageStats {
  /** Output only. The number of assets that are using at least one estimated usage metric for rightsizing. */
  totalAssetsUsingEstimatedUsage?: string;
  /** Output only. The number of virtual machines in this finding that are using at least one estimated usage metric for rightsizing. */
  totalVirtualMachinesUsingEstimatedUsage?: string;
}

export const ReportSummaryAssetAggregateStatsEstimatedUsageStats: Schema.Codec<ReportSummaryAssetAggregateStatsEstimatedUsageStats> =
  /*@__PURE__*/ Schema.Struct({
    totalAssetsUsingEstimatedUsage: Schema.optional(Schema.String),
    totalVirtualMachinesUsingEstimatedUsage: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ReportSummaryAssetAggregateStatsEstimatedUsageStats",
  });

export interface ReportSummaryUtilizationChartData {
  /** Aggregate value which falls into the "Free" bucket. */
  free?: string;
  /** Aggregate value which falls into the "Used" bucket. */
  used?: string;
}

export const ReportSummaryUtilizationChartData: Schema.Codec<ReportSummaryUtilizationChartData> =
  /*@__PURE__*/ Schema.Struct({
    free: Schema.optional(Schema.String),
    used: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryUtilizationChartData" });

export interface ReportSummaryAssetAggregateStats {
  /** Sum of persistent storage in bytes of all the assets in this collection. */
  totalStorageBytes?: string;
  /** Sum of the CPU core count of all the assets in this collection. */
  totalCores?: string;
  /** Total memory split into Used/Free buckets. */
  memoryUtilization?: ReportSummaryChartData;
  /** Histogram showing a distribution of memory sizes. */
  memoryBytesHistogram?: ReportSummaryHistogramChartData;
  /** Output only. Estimated usage stats for the assets in this collection. */
  estimatedUsageStats?: ReportSummaryAssetAggregateStatsEstimatedUsageStats;
  /** Count of assets grouped by age. */
  assetAge?: ReportSummaryChartData;
  /** Histogram showing a distribution of logical CPU core counts. */
  coreCountHistogram?: ReportSummaryHistogramChartData;
  /** Histogram showing a distribution of storage sizes. */
  storageBytesHistogram?: ReportSummaryHistogramChartData;
  /** Output only. Count of assets grouped by database type. Keys here are taken from DatabaseType enum. Only present for databases. */
  databaseTypes?: ReportSummaryChartData;
  /** Total memory split into Used/Free buckets. */
  memoryUtilizationChart?: ReportSummaryUtilizationChartData;
  /** Sum of the memory in bytes of all the assets in this collection. */
  totalMemoryBytes?: string;
  /** Output only. Count of assets grouped by software name. Only present for virtual machines. */
  softwareInstances?: ReportSummaryChartData;
  /** Total memory split into Used/Free buckets. */
  storageUtilizationChart?: ReportSummaryUtilizationChartData;
  /** Count of assets grouped by Operating System families. Only present for virtual machines. */
  operatingSystem?: ReportSummaryChartData;
  /** Count of the number of unique assets in this collection. */
  totalAssets?: string;
  /** Total storage split into Used/Free buckets. */
  storageUtilization?: ReportSummaryChartData;
}

export const ReportSummaryAssetAggregateStats: Schema.Codec<ReportSummaryAssetAggregateStats> =
  /*@__PURE__*/ Schema.Struct({
    totalStorageBytes: Schema.optional(Schema.String),
    totalCores: Schema.optional(Schema.String),
    memoryUtilization: Schema.optional(ReportSummaryChartData),
    memoryBytesHistogram: Schema.optional(ReportSummaryHistogramChartData),
    estimatedUsageStats: Schema.optional(
      ReportSummaryAssetAggregateStatsEstimatedUsageStats,
    ),
    assetAge: Schema.optional(ReportSummaryChartData),
    coreCountHistogram: Schema.optional(ReportSummaryHistogramChartData),
    storageBytesHistogram: Schema.optional(ReportSummaryHistogramChartData),
    databaseTypes: Schema.optional(ReportSummaryChartData),
    memoryUtilizationChart: Schema.optional(ReportSummaryUtilizationChartData),
    totalMemoryBytes: Schema.optional(Schema.String),
    softwareInstances: Schema.optional(ReportSummaryChartData),
    storageUtilizationChart: Schema.optional(ReportSummaryUtilizationChartData),
    operatingSystem: Schema.optional(ReportSummaryChartData),
    totalAssets: Schema.optional(Schema.String),
    storageUtilization: Schema.optional(ReportSummaryChartData),
  }).annotate({ identifier: "ReportSummaryAssetAggregateStats" });

export interface ReportSummaryVMWareNode {
  /** Code to identify VMware Engine node series, e.g. "ve1-standard-72". Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes */
  code?: string;
}

export const ReportSummaryVMWareNode: Schema.Codec<ReportSummaryVMWareNode> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryVMWareNode" });

export interface ReportSummaryVMWareNodeAllocation {
  /** Count of assets allocated to these nodes */
  allocatedAssetCount?: string;
  /** VMWare node type, e.g. "ve1-standard-72" */
  vmwareNode?: ReportSummaryVMWareNode;
  /** Count of this node type to be provisioned */
  nodeCount?: string;
}

export const ReportSummaryVMWareNodeAllocation: Schema.Codec<ReportSummaryVMWareNodeAllocation> =
  /*@__PURE__*/ Schema.Struct({
    allocatedAssetCount: Schema.optional(Schema.String),
    vmwareNode: Schema.optional(ReportSummaryVMWareNode),
    nodeCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryVMWareNodeAllocation" });

export interface ReportSummaryVMWareEngineFinding {
  /** Set of per-nodetype allocation records */
  nodeAllocations?: ReadonlyArray<ReportSummaryVMWareNodeAllocation>;
  /** Count of assets which are allocated */
  allocatedAssetCount?: string;
  /** Set of regions in which the assets were allocated */
  allocatedRegions?: ReadonlyArray<string>;
}

export const ReportSummaryVMWareEngineFinding: Schema.Codec<ReportSummaryVMWareEngineFinding> =
  /*@__PURE__*/ Schema.Struct({
    nodeAllocations: Schema.optional(
      Schema.Array(ReportSummaryVMWareNodeAllocation),
    ),
    allocatedAssetCount: Schema.optional(Schema.String),
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReportSummaryVMWareEngineFinding" });

export interface DatabasePreferencesCloudSqlCommonBackup {
  /** Optional. Automated backup mode. */
  backupMode?:
    | "BACKUP_MODE_UNSPECIFIED"
    | "BACKUP_MODE_DISABLED"
    | "BACKUP_MODE_ENABLED"
    | (string & {});
}

export const DatabasePreferencesCloudSqlCommonBackup: Schema.Codec<DatabasePreferencesCloudSqlCommonBackup> =
  /*@__PURE__*/ Schema.Struct({
    backupMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabasePreferencesCloudSqlCommonBackup" });

export interface DatabasePreferencesCloudSqlCommon {
  /** Optional. Sizing optimization strategy of the database. Currently supported for Cloud SQL are just two values: SIZING_OPTIMIZATION_STRATEGY_MODERATE and SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE. SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED will behave like SIZING_OPTIMIZATION_STRATEGY_MODERATE. */
  sizingOptimizationStrategy?:
    | "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
    | "SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE"
    | "SIZING_OPTIMIZATION_STRATEGY_MODERATE"
    | "SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE"
    | "SIZING_OPTIMIZATION_STRATEGY_CUSTOM"
    | (string & {});
  /** Optional. Persistent disk type to use. If unspecified, a disk type is recommended based on available usage data. For SQL Server, only SSD is available. For MySQL and PostgreSQL, only STANDARD (HDD) and SSD types are available. */
  persistentDiskType?:
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {});
  /** Optional. Commitment plan to consider when calculating costs. Only regular CUDs (not flexible) are currently available. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "COMMITMENT_PLAN_NONE"
    | "COMMITMENT_PLAN_ONE_YEAR"
    | "COMMITMENT_PLAN_THREE_YEARS"
    | "COMMITMENT_PLAN_FLEXIBLE_ONE_YEAR"
    | "COMMITMENT_PLAN_FLEXIBLE_THREE_YEARS"
    | (string & {});
  /** Optional. Preferred Cloud SQL edition. */
  edition?:
    | "CLOUD_SQL_EDITION_UNSPECIFIED"
    | "CLOUD_SQL_EDITION_ENTERPRISE"
    | "CLOUD_SQL_EDITION_ENTERPRISE_PLUS"
    | (string & {});
  /** Optional. Preferences for database backups. */
  backup?: DatabasePreferencesCloudSqlCommonBackup;
  /** Optional. Preferred zone availability. */
  zoneAvailability?:
    | "CLOUD_SQL_ZONE_AVAILABILITY_UNSPECIFIED"
    | "CLOUD_SQL_ZONE_AVAILABILITY_ZONAL"
    | "CLOUD_SQL_ZONE_AVAILABILITY_REGIONAL"
    | (string & {});
}

export const DatabasePreferencesCloudSqlCommon: Schema.Codec<DatabasePreferencesCloudSqlCommon> =
  /*@__PURE__*/ Schema.Struct({
    sizingOptimizationStrategy: Schema.optional(Schema.String),
    persistentDiskType: Schema.optional(Schema.String),
    commitmentPlan: Schema.optional(Schema.String),
    edition: Schema.optional(Schema.String),
    backup: Schema.optional(DatabasePreferencesCloudSqlCommonBackup),
    zoneAvailability: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabasePreferencesCloudSqlCommon" });

export interface DatabasePreferencesCloudSqlSqlServer {
  /** Optional. Preferences to Cloud SQL databases. */
  common?: DatabasePreferencesCloudSqlCommon;
  /** Optional. Preferences for multithreading support. */
  multithreading?:
    | "MULTITHREADING_UNSPECIFIED"
    | "MULTITHREADING_DISABLED"
    | "MULTITHREADING_ENABLED"
    | "MULTITHREADING_DISABLED_WITH_COMPENSATION"
    | (string & {});
  /** Optional. Edition of Microsoft SQL version that is used on a Cloud SQL for SQL server instance. */
  versionType?:
    | "VERSION_TYPE_UNSPECIFIED"
    | "VERSION_TYPE_AUTO"
    | "VERSION_TYPE_EXPRESS"
    | "VERSION_TYPE_WEB"
    | "VERSION_TYPE_STANDARD"
    | "VERSION_TYPE_ENTERPRISE"
    | (string & {});
}

export const DatabasePreferencesCloudSqlSqlServer: Schema.Codec<DatabasePreferencesCloudSqlSqlServer> =
  /*@__PURE__*/ Schema.Struct({
    common: Schema.optional(DatabasePreferencesCloudSqlCommon),
    multithreading: Schema.optional(Schema.String),
    versionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabasePreferencesCloudSqlSqlServer" });

export interface DatabasePreferencesCloudSqlMySql {
  /** Optional. Preferences to Cloud SQL databases. */
  common?: DatabasePreferencesCloudSqlCommon;
}

export const DatabasePreferencesCloudSqlMySql: Schema.Codec<DatabasePreferencesCloudSqlMySql> =
  /*@__PURE__*/ Schema.Struct({
    common: Schema.optional(DatabasePreferencesCloudSqlCommon),
  }).annotate({ identifier: "DatabasePreferencesCloudSqlMySql" });

export interface DatabasePreferencesCloudSqlPostgreSql {
  /** Optional. Preferences to Cloud SQL databases. */
  common?: DatabasePreferencesCloudSqlCommon;
}

export const DatabasePreferencesCloudSqlPostgreSql: Schema.Codec<DatabasePreferencesCloudSqlPostgreSql> =
  /*@__PURE__*/ Schema.Struct({
    common: Schema.optional(DatabasePreferencesCloudSqlCommon),
  }).annotate({ identifier: "DatabasePreferencesCloudSqlPostgreSql" });

export interface DatabasePreferences {
  /** Optional. Preferences for target SQL Server on Cloud SQL when migrating from source Microsoft SQL server. */
  mssqlToCloudSqlForSqlServerPreferences?: DatabasePreferencesCloudSqlSqlServer;
  /** Optional. Preferences for target MySQL on Cloud SQL when migrating from source MySQL. */
  mysqlToCloudSqlForMysqlPreferences?: DatabasePreferencesCloudSqlMySql;
  /** Optional. Preferences for target PostgreSQL on Cloud SQL when migrating from source PostgreSQL. */
  postgresqlToCloudSqlForPostgresqlPreferences?: DatabasePreferencesCloudSqlPostgreSql;
}

export const DatabasePreferences: Schema.Codec<DatabasePreferences> =
  /*@__PURE__*/ Schema.Struct({
    mssqlToCloudSqlForSqlServerPreferences: Schema.optional(
      DatabasePreferencesCloudSqlSqlServer,
    ),
    mysqlToCloudSqlForMysqlPreferences: Schema.optional(
      DatabasePreferencesCloudSqlMySql,
    ),
    postgresqlToCloudSqlForPostgresqlPreferences: Schema.optional(
      DatabasePreferencesCloudSqlPostgreSql,
    ),
  }).annotate({ identifier: "DatabasePreferences" });

export interface VirtualMachinePreferencesSizingOptimizationCustomParameters {
  /** Optional. Type of statistical aggregation of a resource utilization data, on which to base the sizing metrics. */
  aggregationMethod?:
    | "AGGREGATION_METHOD_UNSPECIFIED"
    | "AGGREGATION_METHOD_AVERAGE"
    | "AGGREGATION_METHOD_MEDIAN"
    | "AGGREGATION_METHOD_NINETY_FIFTH_PERCENTILE"
    | "AGGREGATION_METHOD_PEAK"
    | (string & {});
  /** Optional. Desired increase factor of storage, relative to currently used storage. Must be in the interval [1.0, 2.0] (or 0 for default value). */
  storageMultiplier?: number;
  /** Optional. Desired percentage of CPU usage. Must be in the interval [1, 100] (or 0 for default value). */
  cpuUsagePercentage?: number;
  /** Optional. Desired percentage of memory usage. Must be in the interval [1, 100] (or 0 for default value). */
  memoryUsagePercentage?: number;
}

export const VirtualMachinePreferencesSizingOptimizationCustomParameters: Schema.Codec<VirtualMachinePreferencesSizingOptimizationCustomParameters> =
  /*@__PURE__*/ Schema.Struct({
    aggregationMethod: Schema.optional(Schema.String),
    storageMultiplier: Schema.optional(Schema.Number),
    cpuUsagePercentage: Schema.optional(Schema.Number),
    memoryUsagePercentage: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "VirtualMachinePreferencesSizingOptimizationCustomParameters",
  });

export interface MachinePreferences {
  /** Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series. */
  allowedMachineSeries?: ReadonlyArray<MachineSeries>;
}

export const MachinePreferences: Schema.Codec<MachinePreferences> =
  /*@__PURE__*/ Schema.Struct({
    allowedMachineSeries: Schema.optional(Schema.Array(MachineSeries)),
  }).annotate({ identifier: "MachinePreferences" });

export interface ComputeEnginePreferences {
  /** Optional. Pricing options for OS images. */
  osPricingPreferences?: OperatingSystemPricingPreferences;
  /** Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data. */
  persistentDiskType?:
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {});
  /** Preferences concerning the machine types to consider on Compute Engine. */
  machinePreferences?: MachinePreferences;
  /** Optional. Preferences for multithreading support on Windows Server. */
  multithreading?:
    | "MULTITHREADING_UNSPECIFIED"
    | "MULTITHREADING_DISABLED"
    | "MULTITHREADING_ENABLED"
    | "MULTITHREADING_DISABLED_WITH_COMPENSATION"
    | (string & {});
  /** License type to consider when calculating costs for operating systems. If unspecified, costs are calculated based on the default licensing plan. If os_pricing_preferences is specified, it overrides this field. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_TYPE_DEFAULT"
    | "LICENSE_TYPE_BRING_YOUR_OWN_LICENSE"
    | (string & {});
}

export const ComputeEnginePreferences: Schema.Codec<ComputeEnginePreferences> =
  /*@__PURE__*/ Schema.Struct({
    osPricingPreferences: Schema.optional(OperatingSystemPricingPreferences),
    persistentDiskType: Schema.optional(Schema.String),
    machinePreferences: Schema.optional(MachinePreferences),
    multithreading: Schema.optional(Schema.String),
    licenseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeEnginePreferences" });

export interface SoleTenancyPreferences {
  /** A list of sole tenant node types. An empty list means that all possible node types will be considered. */
  nodeTypes?: ReadonlyArray<SoleTenantNodeType>;
  /** Optional. Pricing options for OS images. */
  osPricingPreferences?: OperatingSystemPricingPreferences;
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "ON_DEMAND"
    | "COMMITMENT_1_YEAR"
    | "COMMITMENT_3_YEAR"
    | "COMMITMENT_FLEXIBLE_1_YEAR"
    | "COMMITMENT_FLEXIBLE_3_YEAR"
    | (string & {});
  /** Sole Tenancy nodes maintenance policy. */
  hostMaintenancePolicy?:
    | "HOST_MAINTENANCE_POLICY_UNSPECIFIED"
    | "HOST_MAINTENANCE_POLICY_DEFAULT"
    | "HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE"
    | "HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP"
    | (string & {});
  /** CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. */
  cpuOvercommitRatio?: number;
}

export const SoleTenancyPreferences: Schema.Codec<SoleTenancyPreferences> =
  /*@__PURE__*/ Schema.Struct({
    nodeTypes: Schema.optional(Schema.Array(SoleTenantNodeType)),
    osPricingPreferences: Schema.optional(OperatingSystemPricingPreferences),
    commitmentPlan: Schema.optional(Schema.String),
    hostMaintenancePolicy: Schema.optional(Schema.String),
    cpuOvercommitRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SoleTenancyPreferences" });

export interface VirtualMachinePreferencesNetworkCostParameters {
  /** Optional. An estimated percentage of priced outbound traffic (egress traffic) from the measured outbound traffic. Must be in the interval [0, 100]. */
  estimatedEgressTrafficPercentage?: number;
}

export const VirtualMachinePreferencesNetworkCostParameters: Schema.Codec<VirtualMachinePreferencesNetworkCostParameters> =
  /*@__PURE__*/ Schema.Struct({
    estimatedEgressTrafficPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VirtualMachinePreferencesNetworkCostParameters" });

export interface VirtualMachinePreferences {
  /** Optional. Custom data to use for sizing optimizations. Relevant when SizingOptimizationStrategy is set to "custom". */
  sizingOptimizationCustomParameters?: VirtualMachinePreferencesSizingOptimizationCustomParameters;
  /** Optional. Compute Engine preferences concern insights and recommendations for Compute Engine target. */
  computeEnginePreferences?: ComputeEnginePreferences;
  /** Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. */
  sizingOptimizationStrategy?:
    | "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
    | "SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE"
    | "SIZING_OPTIMIZATION_STRATEGY_MODERATE"
    | "SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE"
    | "SIZING_OPTIMIZATION_STRATEGY_CUSTOM"
    | (string & {});
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "COMMITMENT_PLAN_NONE"
    | "COMMITMENT_PLAN_ONE_YEAR"
    | "COMMITMENT_PLAN_THREE_YEARS"
    | "COMMITMENT_PLAN_FLEXIBLE_ONE_YEAR"
    | "COMMITMENT_PLAN_FLEXIBLE_THREE_YEARS"
    | (string & {});
  /** Preferences concerning insights and recommendations for Google Cloud VMware Engine. */
  vmwareEnginePreferences?: VmwareEnginePreferences;
  /** Preferences concerning Sole Tenant nodes and virtual machines. */
  soleTenancyPreferences?: SoleTenancyPreferences;
  /** Optional. Estimated usage data for missing usage data. If performance data is available, it overrides this field. If not set, default values will be used for the usage data. */
  estimatedUsage?: EstimatedUsage;
  /** Optional. Parameters that affect network cost estimations. If not set, default values will be used for the parameters. */
  networkCostParameters?: VirtualMachinePreferencesNetworkCostParameters;
  /** Target product for assets using this preference set. Specify either target product or business goal, but not both. */
  targetProduct?:
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED"
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE"
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE"
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY"
    | (string & {});
  /** Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with. If PreferenceSet.RegionPreferences is specified, it overrides this field. */
  regionPreferences?: RegionPreferences;
}

export const VirtualMachinePreferences: Schema.Codec<VirtualMachinePreferences> =
  /*@__PURE__*/ Schema.Struct({
    sizingOptimizationCustomParameters: Schema.optional(
      VirtualMachinePreferencesSizingOptimizationCustomParameters,
    ),
    computeEnginePreferences: Schema.optional(ComputeEnginePreferences),
    sizingOptimizationStrategy: Schema.optional(Schema.String),
    commitmentPlan: Schema.optional(Schema.String),
    vmwareEnginePreferences: Schema.optional(VmwareEnginePreferences),
    soleTenancyPreferences: Schema.optional(SoleTenancyPreferences),
    estimatedUsage: Schema.optional(EstimatedUsage),
    networkCostParameters: Schema.optional(
      VirtualMachinePreferencesNetworkCostParameters,
    ),
    targetProduct: Schema.optional(Schema.String),
    regionPreferences: Schema.optional(RegionPreferences),
  }).annotate({ identifier: "VirtualMachinePreferences" });

export interface PreferenceSet {
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. The timestamp when the preference set was last updated. */
  updateTime?: string;
  /** A description of the preference set. */
  description?: string;
  /** Output only. The timestamp when the preference set was created. */
  createTime?: string;
  /** Optional. A set of preferences that applies to all databases in the context. */
  databasePreferences?: DatabasePreferences;
  /** Optional. Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with. If unspecified, VirtualMachinePreferences.RegionPreferences is used. */
  regionPreferences?: RegionPreferences;
  /** A set of preferences that applies to all virtual machines in the context. */
  virtualMachinePreferences?: VirtualMachinePreferences;
  /** Output only. Name of the PreferenceSet. */
  name?: string;
}

export const PreferenceSet: Schema.Codec<PreferenceSet> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    databasePreferences: Schema.optional(DatabasePreferences),
    regionPreferences: Schema.optional(RegionPreferences),
    virtualMachinePreferences: Schema.optional(VirtualMachinePreferences),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreferenceSet" });

export interface ReportSummaryGroupPreferenceSetFinding {
  /** Output only. Network Egress monthly cost for this preference set. Only present for virtual machines. */
  monthlyCostNetworkEgress?: Money;
  /** Output only. Database licensing monthly cost for this preference set. Only present for databases. */
  monthlyCostDatabaseLicensing?: Money;
  /** A set of findings that applies to VMWare machines in the input. Only present for virtual machines. */
  vmwareEngineFinding?: ReportSummaryVMWareEngineFinding;
  /** Text describing the business priority specified for this Preference Set */
  topPriority?: string;
  /** Output only. Storage monthly cost for this preference set. */
  monthlyCostStorage?: Money;
  /** Output only. A copy of the preference set used for this finding. */
  preferenceSet?: PreferenceSet;
  /** Display Name of the Preference Set */
  displayName?: string;
  /** Output only. GCVE Protected nodes cost for this preference set. */
  monthlyCostGcveProtected?: Money;
  /** Output only. Backup monthly cost for this preference set. Only present for databases. */
  monthlyCostDatabaseBackup?: Money;
  /** Text describing the pricing track specified for this Preference Set */
  pricingTrack?: string;
  /** Output only. Compute monthly cost for this preference set. */
  monthlyCostCompute?: Money;
  /** Output only. All operating systems licensing monthly cost for this preference set. Only present for virtual machines. */
  monthlyCostOsLicense?: Money;
  /** Output only. Miscellaneous monthly cost for this preference set. */
  monthlyCostOther?: Money;
  /** Output only. Details about databases in this finding. Only present for databases. */
  databaseFinding?: ReportSummaryDatabaseFinding;
  /** A set of preferences that applies to all machines in the context. */
  machinePreferences?: VirtualMachinePreferences;
  /** Description for the Preference Set. */
  description?: string;
  /** Output only. A set of findings that applies to all virtual machines in the input. Only present for virtual machines. */
  machineFinding?: ReportSummaryMachineFinding;
  /** A set of findings that applies to Stole-Tenant machines in the input. Only present for virtual machines. */
  soleTenantFinding?: ReportSummarySoleTenantFinding;
  /** Output only. Total monthly cost for this preference set. */
  monthlyCostTotal?: Money;
  /** Output only. VMware portable license monthly cost for this preference set. Only present for VMware target with portable license service type. This cost is not paid to google, but is an estimate of license costs paid to VMware. */
  monthlyCostPortableVmwareLicense?: Money;
  /** Target region for this Preference Set */
  preferredRegion?: string;
}

export const ReportSummaryGroupPreferenceSetFinding: Schema.Codec<ReportSummaryGroupPreferenceSetFinding> =
  /*@__PURE__*/ Schema.Struct({
    monthlyCostNetworkEgress: Schema.optional(Money),
    monthlyCostDatabaseLicensing: Schema.optional(Money),
    vmwareEngineFinding: Schema.optional(ReportSummaryVMWareEngineFinding),
    topPriority: Schema.optional(Schema.String),
    monthlyCostStorage: Schema.optional(Money),
    preferenceSet: Schema.optional(PreferenceSet),
    displayName: Schema.optional(Schema.String),
    monthlyCostGcveProtected: Schema.optional(Money),
    monthlyCostDatabaseBackup: Schema.optional(Money),
    pricingTrack: Schema.optional(Schema.String),
    monthlyCostCompute: Schema.optional(Money),
    monthlyCostOsLicense: Schema.optional(Money),
    monthlyCostOther: Schema.optional(Money),
    databaseFinding: Schema.optional(ReportSummaryDatabaseFinding),
    machinePreferences: Schema.optional(VirtualMachinePreferences),
    description: Schema.optional(Schema.String),
    machineFinding: Schema.optional(ReportSummaryMachineFinding),
    soleTenantFinding: Schema.optional(ReportSummarySoleTenantFinding),
    monthlyCostTotal: Schema.optional(Money),
    monthlyCostPortableVmwareLicense: Schema.optional(Money),
    preferredRegion: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryGroupPreferenceSetFinding" });

export interface ReportSummaryGroupFinding {
  /** Summary statistics for all the assets in this group. */
  assetAggregateStats?: ReportSummaryAssetAggregateStats;
  /** This field is deprecated, do not rely on it having a value. */
  overlappingAssetCount?: string;
  /** Output only. Source asset database type for the group finding. Only present for databases. */
  databaseType?:
    | "DATABASE_TYPE_UNSPECIFIED"
    | "SQL_SERVER"
    | "MYSQL"
    | "POSTGRES"
    | (string & {});
  /** Output only. Full name of the group. */
  group?: string;
  /** Description for this group finding. */
  description?: string;
  /** Output only. Asset type for the group finding. */
  assetType?:
    | "ASSET_TYPE_UNSPECIFIED"
    | "VIRTUAL_MACHINE"
    | "DATABASE"
    | (string & {});
  /** Findings for each of the PreferenceSets for this group. */
  preferenceSetFindings?: ReadonlyArray<ReportSummaryGroupPreferenceSetFinding>;
  /** Display Name for this group finding. */
  displayName?: string;
}

export const ReportSummaryGroupFinding: Schema.Codec<ReportSummaryGroupFinding> =
  /*@__PURE__*/ Schema.Struct({
    assetAggregateStats: Schema.optional(ReportSummaryAssetAggregateStats),
    overlappingAssetCount: Schema.optional(Schema.String),
    databaseType: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
    preferenceSetFindings: Schema.optional(
      Schema.Array(ReportSummaryGroupPreferenceSetFinding),
    ),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryGroupFinding" });

export interface ReportSummary {
  /** Output only. Aggregate statistics for unique virtual machine assets across all the groups. */
  virtualMachineStats?: ReportSummaryAssetAggregateStats;
  /** Output only. Aggregate statistics for unique database assets across all the groups. */
  databaseStats?: ReportSummaryAssetAggregateStats;
  /** Findings for each Group included in this report. */
  groupFindings?: ReadonlyArray<ReportSummaryGroupFinding>;
  /** Aggregate statistics for unique assets across all the groups. */
  allAssetsStats?: ReportSummaryAssetAggregateStats;
}

export const ReportSummary: Schema.Codec<ReportSummary> =
  /*@__PURE__*/ Schema.Struct({
    virtualMachineStats: Schema.optional(ReportSummaryAssetAggregateStats),
    databaseStats: Schema.optional(ReportSummaryAssetAggregateStats),
    groupFindings: Schema.optional(Schema.Array(ReportSummaryGroupFinding)),
    allAssetsStats: Schema.optional(ReportSummaryAssetAggregateStats),
  }).annotate({ identifier: "ReportSummary" });

export interface Report {
  /** Output only. Name of resource. */
  name?: string;
  /** Report type. */
  type?: "TYPE_UNSPECIFIED" | "TOTAL_COST_OF_OWNERSHIP" | (string & {});
  /** Output only. Summary view of the Report. */
  summary?: ReportSummary;
  /** Output only. Creation timestamp. */
  createTime?: string;
  /** Report creation state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Free-text description. */
  description?: string;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
}

export const Report: Schema.Codec<Report> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    summary: Schema.optional(ReportSummary),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Report" });

export interface ListReportsResponse {
  /** The list of Reports. */
  reports?: ReadonlyArray<Report>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListReportsResponse: Schema.Codec<ListReportsResponse> =
  /*@__PURE__*/ Schema.Struct({
    reports: Schema.optional(Schema.Array(Report)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReportsResponse" });

export interface ReportConfigGroupPreferenceSetAssignment {
  /** Required. Name of the group. */
  group?: string;
  /** Required. Name of the Preference Set. */
  preferenceSet?: string;
}

export const ReportConfigGroupPreferenceSetAssignment: Schema.Codec<ReportConfigGroupPreferenceSetAssignment> =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    preferenceSet: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportConfigGroupPreferenceSetAssignment" });

export interface ReportConfig {
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. The timestamp when the resource was last updated. */
  updateTime?: string;
  /** Free-text description. */
  description?: string;
  /** Required. Collection of combinations of groups and preference sets. */
  groupPreferencesetAssignments?: ReadonlyArray<ReportConfigGroupPreferenceSetAssignment>;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. Name of resource. */
  name?: string;
}

export const ReportConfig: Schema.Codec<ReportConfig> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    groupPreferencesetAssignments: Schema.optional(
      Schema.Array(ReportConfigGroupPreferenceSetAssignment),
    ),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportConfig" });

export interface ListPreferenceSetsResponse {
  /** The list of PreferenceSets */
  preferenceSets?: ReadonlyArray<PreferenceSet>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListPreferenceSetsResponse: Schema.Codec<ListPreferenceSetsResponse> =
  /*@__PURE__*/ Schema.Struct({
    preferenceSets: Schema.optional(Schema.Array(PreferenceSet)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListPreferenceSetsResponse" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface PayloadFile {
  /** The file name. */
  name?: string;
  /** The file data. */
  data?: string;
}

export const PayloadFile: Schema.Codec<PayloadFile> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
  }).annotate({ identifier: "PayloadFile" });

export interface Settings {
  /** Customer consent for Google sales to access their Cloud Migration Center project. */
  customerConsentForGoogleSalesToAccessMigrationCenter?: boolean;
  /** Output only. The name of the resource. */
  name?: string;
  /** The preference set used by default for a project. */
  preferenceSet?: string;
  /** Disable Cloud Logging for the Migration Center API. Users are billed for the logs. */
  disableCloudLogging?: boolean;
}

export const Settings: Schema.Codec<Settings> =
  /*@__PURE__*/ Schema.Struct({
    customerConsentForGoogleSalesToAccessMigrationCenter: Schema.optional(
      Schema.Boolean,
    ),
    name: Schema.optional(Schema.String),
    preferenceSet: Schema.optional(Schema.String),
    disableCloudLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Settings" });

export interface Group {
  /** Optional. User-friendly display name. */
  displayName?: string;
  /** Output only. The timestamp when the group was last updated. */
  updateTime?: string;
  /** Optional. The description of the group. */
  description?: string;
  /** Output only. The timestamp when the group was created. */
  createTime?: string;
  /** Output only. The name of the group. */
  name?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
}

export const Group: Schema.Codec<Group> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Group" });

export interface UpdateAssetRequest {
  /** Required. The resource being updated. */
  asset?: Asset;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
}

export const UpdateAssetRequest: Schema.Codec<UpdateAssetRequest> =
  /*@__PURE__*/ Schema.Struct({
    asset: Schema.optional(Asset),
    requestId: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateAssetRequest" });

export interface ListReportConfigsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** A list of report configs. */
  reportConfigs?: ReadonlyArray<ReportConfig>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListReportConfigsResponse: Schema.Codec<ListReportConfigsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    reportConfigs: Schema.optional(Schema.Array(ReportConfig)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListReportConfigsResponse" });

export interface RunReportExportJobResponse {
  /** Output only. Execution status of the export operation. */
  reportExportExecution?: ReportExportExecution;
}

export const RunReportExportJobResponse: Schema.Codec<RunReportExportJobResponse> =
  /*@__PURE__*/ Schema.Struct({
    reportExportExecution: Schema.optional(ReportExportExecution),
  }).annotate({ identifier: "RunReportExportJobResponse" });

export interface ExecutionReport {
  /** Total number of asset frames reported for the import job. */
  framesReported?: number;
  /** List of job-level errors. Deprecated, use the job errors under execution_errors instead. */
  jobErrors?: ReadonlyArray<ImportError>;
  /** Validation errors encountered during the execution of the import job. */
  executionErrors?: ValidationReport;
  /** Total number of rows in the import job. */
  totalRowsCount?: number;
}

export const ExecutionReport: Schema.Codec<ExecutionReport> =
  /*@__PURE__*/ Schema.Struct({
    framesReported: Schema.optional(Schema.Number),
    jobErrors: Schema.optional(Schema.Array(ImportError)),
    executionErrors: Schema.optional(ValidationReport),
    totalRowsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExecutionReport" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface AggregateAssetsValuesRequest {
  /** Array of aggregations to perform. Up to 25 aggregations can be defined. */
  aggregations?: ReadonlyArray<Aggregation>;
  /** Optional. The aggregation will be performed on assets that match the provided filter. */
  filter?: string;
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
}

export const AggregateAssetsValuesRequest: Schema.Codec<AggregateAssetsValuesRequest> =
  /*@__PURE__*/ Schema.Struct({
    aggregations: Schema.optional(Schema.Array(Aggregation)),
    filter: Schema.optional(Schema.String),
    showHidden: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AggregateAssetsValuesRequest" });

export interface ValidateImportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const ValidateImportJobRequest: Schema.Codec<ValidateImportJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateImportJobRequest" });

export interface BatchUpdateAssetsRequest {
  /** Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch. */
  requests?: ReadonlyArray<UpdateAssetRequest>;
}

export const BatchUpdateAssetsRequest: Schema.Codec<BatchUpdateAssetsRequest> =
  /*@__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateAssetRequest)),
  }).annotate({ identifier: "BatchUpdateAssetsRequest" });

export interface GCSPayloadInfo {
  /** The payload path in Google Cloud Storage. */
  path?: string;
  /** The import job format. */
  format?:
    | "IMPORT_JOB_FORMAT_UNSPECIFIED"
    | "IMPORT_JOB_FORMAT_CMDB"
    | "IMPORT_JOB_FORMAT_RVTOOLS_XLSX"
    | "IMPORT_JOB_FORMAT_RVTOOLS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV"
    | "IMPORT_JOB_FORMAT_MANUAL_CSV"
    | "IMPORT_JOB_FORMAT_DATABASE_ZIP"
    | (string & {});
}

export const GCSPayloadInfo: Schema.Codec<GCSPayloadInfo> =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
  }).annotate({ identifier: "GCSPayloadInfo" });

export interface RunImportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunImportJobRequest: Schema.Codec<RunImportJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunImportJobRequest" });

export interface ListGroupsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of Group */
  groups?: ReadonlyArray<Group>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListGroupsResponse: Schema.Codec<ListGroupsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    groups: Schema.optional(Schema.Array(Group)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGroupsResponse" });

export interface RunReportExportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunReportExportJobRequest: Schema.Codec<RunReportExportJobRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunReportExportJobRequest" });

export interface Source {
  /** If `true`, the source is managed by other service(s). */
  isManaged?: boolean;
  /** Free-text description. */
  description?: string;
  /** User-friendly display name. */
  displayName?: string;
  /** Output only. The full name of the source. */
  name?: string;
  /** Output only. Number of frames that are still being processed. */
  pendingFrameCount?: number;
  /** Data source type. */
  type?:
    | "SOURCE_TYPE_UNKNOWN"
    | "SOURCE_TYPE_UPLOAD"
    | "SOURCE_TYPE_GUEST_OS_SCAN"
    | "SOURCE_TYPE_INVENTORY_SCAN"
    | "SOURCE_TYPE_CUSTOM"
    | "SOURCE_TYPE_DISCOVERY_CLIENT"
    | (string & {});
  /** Output only. The number of frames that were reported by the source and contained errors. */
  errorFrameCount?: number;
  /** Output only. The state of the source. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "DELETING"
    | "INVALID"
    | (string & {});
  /** Output only. The timestamp when the source was last updated. */
  updateTime?: string;
  /** The information confidence of the source. The higher the value, the higher the confidence. */
  priority?: number;
  /** Output only. The timestamp when the source was created. */
  createTime?: string;
}

export const Source: Schema.Codec<Source> =
  /*@__PURE__*/ Schema.Struct({
    isManaged: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pendingFrameCount: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    errorFrameCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ListSourcesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of sources. */
  sources?: ReadonlyArray<Source>;
}

export const ListSourcesResponse: Schema.Codec<ListSourcesResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(Source)),
  }).annotate({ identifier: "ListSourcesResponse" });

export interface AggregateAssetsValuesResponse {
  /** The aggregation results. */
  results?: ReadonlyArray<AggregationResult>;
}

export const AggregateAssetsValuesResponse: Schema.Codec<AggregateAssetsValuesResponse> =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(AggregationResult)),
  }).annotate({ identifier: "AggregateAssetsValuesResponse" });

export interface InlinePayloadInfo {
  /** List of payload files. */
  payload?: ReadonlyArray<PayloadFile>;
  /** The import job format. */
  format?:
    | "IMPORT_JOB_FORMAT_UNSPECIFIED"
    | "IMPORT_JOB_FORMAT_CMDB"
    | "IMPORT_JOB_FORMAT_RVTOOLS_XLSX"
    | "IMPORT_JOB_FORMAT_RVTOOLS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV"
    | "IMPORT_JOB_FORMAT_MANUAL_CSV"
    | "IMPORT_JOB_FORMAT_DATABASE_ZIP"
    | (string & {});
}

export const InlinePayloadInfo: Schema.Codec<InlinePayloadInfo> =
  /*@__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.Array(PayloadFile)),
    format: Schema.optional(Schema.String),
  }).annotate({ identifier: "InlinePayloadInfo" });

export interface ImportJob {
  /** Output only. The timestamp when the import job was last updated. */
  updateTime?: string;
  /** Output only. The timestamp when the import job was created. */
  createTime?: string;
  /** The payload is in Google Cloud Storage. */
  gcsPayload?: GCSPayloadInfo;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** The payload is included in the request, mainly used for small import jobs. */
  inlinePayload?: InlinePayloadInfo;
  /** Required. Reference to a source. */
  assetSource?: string;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. The report with the validation results of the import job. */
  validationReport?: ValidationReport;
  /** Output only. The report with the results of running the import job. */
  executionReport?: ExecutionReport;
  /** Output only. The timestamp when the import job was completed. */
  completeTime?: string;
  /** Output only. The state of the import job. */
  state?:
    | "IMPORT_JOB_STATE_UNSPECIFIED"
    | "IMPORT_JOB_STATE_PENDING"
    | "IMPORT_JOB_STATE_RUNNING"
    | "IMPORT_JOB_STATE_COMPLETED"
    | "IMPORT_JOB_STATE_FAILED"
    | "IMPORT_JOB_STATE_VALIDATING"
    | "IMPORT_JOB_STATE_FAILED_VALIDATION"
    | "IMPORT_JOB_STATE_READY"
    | (string & {});
  /** Output only. The full name of the import job. */
  name?: string;
}

export const ImportJob: Schema.Codec<ImportJob> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    gcsPayload: Schema.optional(GCSPayloadInfo),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    inlinePayload: Schema.optional(InlinePayloadInfo),
    assetSource: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    validationReport: Schema.optional(ValidationReport),
    executionReport: Schema.optional(ExecutionReport),
    completeTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportJob" });

export interface ListImportJobsResponse {
  /** The list of import jobs. */
  importJobs?: ReadonlyArray<ImportJob>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListImportJobsResponse: Schema.Codec<ListImportJobsResponse> =
  /*@__PURE__*/ Schema.Struct({
    importJobs: Schema.optional(Schema.Array(ImportJob)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListImportJobsResponse" });

export interface BatchDeleteAssetsRequest {
  /** Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project}/locations/{location}/assets/{name}. */
  names?: ReadonlyArray<string>;
  /** Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`. */
  allowMissing?: boolean;
  /** Optional. Optional cascading rules for deleting related assets. */
  cascadingRules?: ReadonlyArray<CascadingRule>;
}

export const BatchDeleteAssetsRequest: Schema.Codec<BatchDeleteAssetsRequest> =
  /*@__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    allowMissing: Schema.optional(Schema.Boolean),
    cascadingRules: Schema.optional(Schema.Array(CascadingRule)),
  }).annotate({ identifier: "BatchDeleteAssetsRequest" });

export interface ReportAssetFramesResponse {}

export const ReportAssetFramesResponse: Schema.Codec<ReportAssetFramesResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReportAssetFramesResponse",
  });

export interface RunAssetsExportJobResponse {
  /** Output only. Execution status of the assets export operation. */
  assetsExportJobExecution?: AssetsExportJobExecution;
}

export const RunAssetsExportJobResponse: Schema.Codec<RunAssetsExportJobResponse> =
  /*@__PURE__*/ Schema.Struct({
    assetsExportJobExecution: Schema.optional(AssetsExportJobExecution),
  }).annotate({ identifier: "RunAssetsExportJobResponse" });

export interface SendDiscoveryClientHeartbeatRequest {
  /** Optional. Errors affecting client functionality. */
  errors?: ReadonlyArray<Status>;
  /** Optional. Client application version. */
  version?: string;
}

export const SendDiscoveryClientHeartbeatRequest: Schema.Codec<SendDiscoveryClientHeartbeatRequest> =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Status)),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "SendDiscoveryClientHeartbeatRequest" });

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

export interface GetSettingsProjectsLocationsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetSettingsProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSettingsProjectsLocationsRequest>;

export type GetSettingsProjectsLocationsResponse = Settings;
export const GetSettingsProjectsLocationsResponse = /*@__PURE__*/ Settings;

export type GetSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of regional settings. */
export const getSettingsProjectsLocations: API.OperationMethod<
  GetSettingsProjectsLocationsRequest,
  GetSettingsProjectsLocationsResponse,
  GetSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSettingsProjectsLocationsRequest,
  output: GetSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRequest {
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSettingsProjectsLocationsRequest {
  /** Output only. The name of the resource. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Settings` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSettingsProjectsLocationsRequest>;

export type UpdateSettingsProjectsLocationsResponse = Operation;
export const UpdateSettingsProjectsLocationsResponse = /*@__PURE__*/ Operation;

export type UpdateSettingsProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the regional-level project settings. */
export const updateSettingsProjectsLocations: API.OperationMethod<
  UpdateSettingsProjectsLocationsRequest,
  UpdateSettingsProjectsLocationsResponse,
  UpdateSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSettingsProjectsLocationsRequest,
  output: UpdateSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsGroupsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListGroupsRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
}

export const ListProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/groups" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsGroupsRequest>;

export type ListProjectsLocationsGroupsResponse = ListGroupsResponse;
export const ListProjectsLocationsGroupsResponse =
  /*@__PURE__*/ ListGroupsResponse;

export type ListProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all groups in a given project and location. */
export const listProjectsLocationsGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsGroupsRequest,
  ListProjectsLocationsGroupsResponse,
  ListProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGroupsRequest,
  output: ListProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsGroupsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsGroupsRequest>;

export type GetProjectsLocationsGroupsResponse = Group;
export const GetProjectsLocationsGroupsResponse = /*@__PURE__*/ Group;

export type GetProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a group. */
export const getProjectsLocationsGroups: API.OperationMethod<
  GetProjectsLocationsGroupsRequest,
  GetProjectsLocationsGroupsResponse,
  GetProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGroupsRequest,
  output: GetProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsGroupsRequest {
  /** Required. Name of the group resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsGroupsRequest>;

export type DeleteProjectsLocationsGroupsResponse = Operation;
export const DeleteProjectsLocationsGroupsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a group. */
export const deleteProjectsLocationsGroups: API.OperationMethod<
  DeleteProjectsLocationsGroupsRequest,
  DeleteProjectsLocationsGroupsResponse,
  DeleteProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGroupsRequest,
  output: DeleteProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AddAssetsProjectsLocationsGroupsRequest {
  /** Required. Group reference. */
  group: string;
  /** Request body */
  body?: AddAssetsToGroupRequest;
}

export const AddAssetsProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(AddAssetsToGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+group}:addAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AddAssetsProjectsLocationsGroupsRequest>;

export type AddAssetsProjectsLocationsGroupsResponse = Operation;
export const AddAssetsProjectsLocationsGroupsResponse = /*@__PURE__*/ Operation;

export type AddAssetsProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Adds assets to a group. */
export const addAssetsProjectsLocationsGroups: API.OperationMethod<
  AddAssetsProjectsLocationsGroupsRequest,
  AddAssetsProjectsLocationsGroupsResponse,
  AddAssetsProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddAssetsProjectsLocationsGroupsRequest,
  output: AddAssetsProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RemoveAssetsProjectsLocationsGroupsRequest {
  /** Required. Group reference. */
  group: string;
  /** Request body */
  body?: RemoveAssetsFromGroupRequest;
}

export const RemoveAssetsProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(RemoveAssetsFromGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+group}:removeAssets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RemoveAssetsProjectsLocationsGroupsRequest>;

export type RemoveAssetsProjectsLocationsGroupsResponse = Operation;
export const RemoveAssetsProjectsLocationsGroupsResponse =
  /*@__PURE__*/ Operation;

export type RemoveAssetsProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Removes assets from a group. */
export const removeAssetsProjectsLocationsGroups: API.OperationMethod<
  RemoveAssetsProjectsLocationsGroupsRequest,
  RemoveAssetsProjectsLocationsGroupsResponse,
  RemoveAssetsProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveAssetsProjectsLocationsGroupsRequest,
  output: RemoveAssetsProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  groupId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Group;
}

export const CreateProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    groupId: Schema.optional(Schema.String).pipe(T.HttpQuery("groupId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/groups",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsGroupsRequest>;

export type CreateProjectsLocationsGroupsResponse = Operation;
export const CreateProjectsLocationsGroupsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new group in a given project and location. */
export const createProjectsLocationsGroups: API.OperationMethod<
  CreateProjectsLocationsGroupsRequest,
  CreateProjectsLocationsGroupsResponse,
  CreateProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGroupsRequest,
  output: CreateProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The name of the group. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: Group;
}

export const PatchProjectsLocationsGroupsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsGroupsRequest>;

export type PatchProjectsLocationsGroupsResponse = Operation;
export const PatchProjectsLocationsGroupsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsGroupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a group. */
export const patchProjectsLocationsGroups: API.OperationMethod<
  PatchProjectsLocationsGroupsRequest,
  PatchProjectsLocationsGroupsResponse,
  PatchProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGroupsRequest,
  output: PatchProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsSourcesRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  sourceId?: string;
  /** Request body */
  body?: Source;
}

export const CreateProjectsLocationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    sourceId: Schema.optional(Schema.String).pipe(T.HttpQuery("sourceId")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/sources",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsSourcesRequest>;

export type CreateProjectsLocationsSourcesResponse = Operation;
export const CreateProjectsLocationsSourcesResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new source in a given project and location. */
export const createProjectsLocationsSources: API.OperationMethod<
  CreateProjectsLocationsSourcesRequest,
  CreateProjectsLocationsSourcesResponse,
  CreateProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesRequest,
  output: CreateProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsSourcesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The full name of the source. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: Source;
}

export const PatchProjectsLocationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsSourcesRequest>;

export type PatchProjectsLocationsSourcesResponse = Operation;
export const PatchProjectsLocationsSourcesResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a source. */
export const patchProjectsLocationsSources: API.OperationMethod<
  PatchProjectsLocationsSourcesRequest,
  PatchProjectsLocationsSourcesResponse,
  PatchProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSourcesRequest,
  output: PatchProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsSourcesRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsSourcesRequest>;

export type DeleteProjectsLocationsSourcesResponse = Operation;
export const DeleteProjectsLocationsSourcesResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a source. */
export const deleteProjectsLocationsSources: API.OperationMethod<
  DeleteProjectsLocationsSourcesRequest,
  DeleteProjectsLocationsSourcesResponse,
  DeleteProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesRequest,
  output: DeleteProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsSourcesRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSourcesRequest>;

export type GetProjectsLocationsSourcesResponse = Source;
export const GetProjectsLocationsSourcesResponse = /*@__PURE__*/ Source;

export type GetProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a source. */
export const getProjectsLocationsSources: API.OperationMethod<
  GetProjectsLocationsSourcesRequest,
  GetProjectsLocationsSourcesResponse,
  GetProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesRequest,
  output: GetProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSourcesRequest {
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListSourcesRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
  /** A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
}

export const ListProjectsLocationsSourcesRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSourcesRequest>;

export type ListProjectsLocationsSourcesResponse = ListSourcesResponse;
export const ListProjectsLocationsSourcesResponse =
  /*@__PURE__*/ ListSourcesResponse;

export type ListProjectsLocationsSourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the sources in a given project and location. */
export const listProjectsLocationsSources: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesRequest,
  ListProjectsLocationsSourcesResponse,
  ListProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesRequest,
  output: ListProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsSourcesErrorFramesRequest {
  /** Required. The name of the frame to retrieve. Format: projects/{project}/locations/{location}/sources/{source}/errorFrames/{error_frame} */
  name: string;
  /** Optional. An optional view mode to control the level of details for the frame. The default is a basic frame view. */
  view?:
    | "ERROR_FRAME_VIEW_UNSPECIFIED"
    | "ERROR_FRAME_VIEW_BASIC"
    | "ERROR_FRAME_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsSourcesErrorFramesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsSourcesErrorFramesRequest>;

export type GetProjectsLocationsSourcesErrorFramesResponse = ErrorFrame;
export const GetProjectsLocationsSourcesErrorFramesResponse =
  /*@__PURE__*/ ErrorFrame;

export type GetProjectsLocationsSourcesErrorFramesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of an error frame. */
export const getProjectsLocationsSourcesErrorFrames: API.OperationMethod<
  GetProjectsLocationsSourcesErrorFramesRequest,
  GetProjectsLocationsSourcesErrorFramesResponse,
  GetProjectsLocationsSourcesErrorFramesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesErrorFramesRequest,
  output: GetProjectsLocationsSourcesErrorFramesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsSourcesErrorFramesRequest {
  /** Required. Parent value (the source) for `ListErrorFramesRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An optional view mode to control the level of details of each error frame. The default is a BASIC frame view. */
  view?:
    | "ERROR_FRAME_VIEW_UNSPECIFIED"
    | "ERROR_FRAME_VIEW_BASIC"
    | "ERROR_FRAME_VIEW_FULL"
    | (string & {});
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsSourcesErrorFramesRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/errorFrames" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsSourcesErrorFramesRequest>;

export type ListProjectsLocationsSourcesErrorFramesResponse =
  ListErrorFramesResponse;
export const ListProjectsLocationsSourcesErrorFramesResponse =
  /*@__PURE__*/ ListErrorFramesResponse;

export type ListProjectsLocationsSourcesErrorFramesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all error frames in a given source and location. */
export const listProjectsLocationsSourcesErrorFrames: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesErrorFramesRequest,
  ListProjectsLocationsSourcesErrorFramesResponse,
  ListProjectsLocationsSourcesErrorFramesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesErrorFramesRequest,
  output: ListProjectsLocationsSourcesErrorFramesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsDiscoveryClientsRequest {
  /** Optional. Field to sort by. */
  orderBy?: string;
  /** Required. Parent resource. */
  parent: string;
  /** Optional. Filter expression to filter results by. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListDiscoveryClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveryClients` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of items to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
}

export const ListProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/discoveryClients" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsDiscoveryClientsRequest>;

export type ListProjectsLocationsDiscoveryClientsResponse =
  ListDiscoveryClientsResponse;
export const ListProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ ListDiscoveryClientsResponse;

export type ListProjectsLocationsDiscoveryClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the discovery clients in a given project and location. */
export const listProjectsLocationsDiscoveryClients: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveryClientsRequest,
  ListProjectsLocationsDiscoveryClientsResponse,
  ListProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveryClientsRequest,
  output: ListProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDiscoveryClientsRequest {
  /** Required. The discovery client name. */
  name: string;
}

export const GetProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsDiscoveryClientsRequest>;

export type GetProjectsLocationsDiscoveryClientsResponse = DiscoveryClient;
export const GetProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ DiscoveryClient;

export type GetProjectsLocationsDiscoveryClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a discovery client. */
export const getProjectsLocationsDiscoveryClients: API.OperationMethod<
  GetProjectsLocationsDiscoveryClientsRequest,
  GetProjectsLocationsDiscoveryClientsResponse,
  GetProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveryClientsRequest,
  output: GetProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsDiscoveryClientsRequest {
  /** Required. The discovery client name. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsDiscoveryClientsRequest>;

export type DeleteProjectsLocationsDiscoveryClientsResponse = Operation;
export const DeleteProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsDiscoveryClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a discovery client. */
export const deleteProjectsLocationsDiscoveryClients: API.OperationMethod<
  DeleteProjectsLocationsDiscoveryClientsRequest,
  DeleteProjectsLocationsDiscoveryClientsResponse,
  DeleteProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDiscoveryClientsRequest,
  output: DeleteProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SendHeartbeatProjectsLocationsDiscoveryClientsRequest {
  /** Required. The discovery client name. */
  name: string;
  /** Request body */
  body?: SendDiscoveryClientHeartbeatRequest;
}

export const SendHeartbeatProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SendDiscoveryClientHeartbeatRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+name}:sendHeartbeat",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<SendHeartbeatProjectsLocationsDiscoveryClientsRequest>;

export type SendHeartbeatProjectsLocationsDiscoveryClientsResponse = Operation;
export const SendHeartbeatProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ Operation;

export type SendHeartbeatProjectsLocationsDiscoveryClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sends a discovery client heartbeat. Healthy clients are expected to send heartbeats regularly (normally every few minutes). */
export const sendHeartbeatProjectsLocationsDiscoveryClients: API.OperationMethod<
  SendHeartbeatProjectsLocationsDiscoveryClientsRequest,
  SendHeartbeatProjectsLocationsDiscoveryClientsResponse,
  SendHeartbeatProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendHeartbeatProjectsLocationsDiscoveryClientsRequest,
  output: SendHeartbeatProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsDiscoveryClientsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Parent resource. */
  parent: string;
  /** Required. User specified ID for the discovery client. It will become the last component of the discovery client name. The ID must be unique within the project, is restricted to lower-cased letters and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  discoveryClientId?: string;
  /** Request body */
  body?: DiscoveryClient;
}

export const CreateProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    discoveryClientId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("discoveryClientId"),
    ),
    body: Schema.optional(DiscoveryClient).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/discoveryClients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsDiscoveryClientsRequest>;

export type CreateProjectsLocationsDiscoveryClientsResponse = Operation;
export const CreateProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsDiscoveryClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new discovery client. */
export const createProjectsLocationsDiscoveryClients: API.OperationMethod<
  CreateProjectsLocationsDiscoveryClientsRequest,
  CreateProjectsLocationsDiscoveryClientsResponse,
  CreateProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDiscoveryClientsRequest,
  output: CreateProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsDiscoveryClientsRequest {
  /** Output only. Identifier. Full name of this discovery client. */
  name: string;
  /** Required. Update mask is used to specify the fields to be overwritten in the `DiscoveryClient` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: DiscoveryClient;
}

export const PatchProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(DiscoveryClient).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsDiscoveryClientsRequest>;

export type PatchProjectsLocationsDiscoveryClientsResponse = Operation;
export const PatchProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsDiscoveryClientsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a discovery client. */
export const patchProjectsLocationsDiscoveryClients: API.OperationMethod<
  PatchProjectsLocationsDiscoveryClientsRequest,
  PatchProjectsLocationsDiscoveryClientsResponse,
  PatchProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDiscoveryClientsRequest,
  output: PatchProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsPreferenceSetsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsPreferenceSetsRequest>;

export type GetProjectsLocationsPreferenceSetsResponse = PreferenceSet;
export const GetProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ PreferenceSet;

export type GetProjectsLocationsPreferenceSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a preference set. */
export const getProjectsLocationsPreferenceSets: API.OperationMethod<
  GetProjectsLocationsPreferenceSetsRequest,
  GetProjectsLocationsPreferenceSetsResponse,
  GetProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPreferenceSetsRequest,
  output: GetProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsPreferenceSetsRequest {
  /** Required. Parent value for `ListPreferenceSetsRequest`. */
  parent: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/preferenceSets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsPreferenceSetsRequest>;

export type ListProjectsLocationsPreferenceSetsResponse =
  ListPreferenceSetsResponse;
export const ListProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ ListPreferenceSetsResponse;

export type ListProjectsLocationsPreferenceSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the preference sets in a given project and location. */
export const listProjectsLocationsPreferenceSets: API.PaginatedOperationMethod<
  ListProjectsLocationsPreferenceSetsRequest,
  ListProjectsLocationsPreferenceSetsResponse,
  ListProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPreferenceSetsRequest,
  output: ListProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsPreferenceSetsRequest {
  preferenceSetId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: PreferenceSet;
}

export const CreateProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    preferenceSetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("preferenceSetId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(PreferenceSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/preferenceSets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsPreferenceSetsRequest>;

export type CreateProjectsLocationsPreferenceSetsResponse = Operation;
export const CreateProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsPreferenceSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new preference set in a given project and location. */
export const createProjectsLocationsPreferenceSets: API.OperationMethod<
  CreateProjectsLocationsPreferenceSetsRequest,
  CreateProjectsLocationsPreferenceSetsResponse,
  CreateProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPreferenceSetsRequest,
  output: CreateProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsPreferenceSetsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Name of the PreferenceSet. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `PreferenceSet` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: PreferenceSet;
}

export const PatchProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(PreferenceSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsPreferenceSetsRequest>;

export type PatchProjectsLocationsPreferenceSetsResponse = Operation;
export const PatchProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsPreferenceSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a preference set. */
export const patchProjectsLocationsPreferenceSets: API.OperationMethod<
  PatchProjectsLocationsPreferenceSetsRequest,
  PatchProjectsLocationsPreferenceSetsResponse,
  PatchProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPreferenceSetsRequest,
  output: PatchProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsPreferenceSetsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the group resource. */
  name: string;
}

export const DeleteProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsPreferenceSetsRequest>;

export type DeleteProjectsLocationsPreferenceSetsResponse = Operation;
export const DeleteProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsPreferenceSetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a preference set. */
export const deleteProjectsLocationsPreferenceSets: API.OperationMethod<
  DeleteProjectsLocationsPreferenceSetsRequest,
  DeleteProjectsLocationsPreferenceSetsResponse,
  DeleteProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPreferenceSetsRequest,
  output: DeleteProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsRelationsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsRelationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRelationsRequest>;

export type GetProjectsLocationsRelationsResponse = Relation;
export const GetProjectsLocationsRelationsResponse = /*@__PURE__*/ Relation;

export type GetProjectsLocationsRelationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of an relation. */
export const getProjectsLocationsRelations: API.OperationMethod<
  GetProjectsLocationsRelationsRequest,
  GetProjectsLocationsRelationsResponse,
  GetProjectsLocationsRelationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRelationsRequest,
  output: GetProjectsLocationsRelationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsRelationsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListRelationsRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
}

export const ListProjectsLocationsRelationsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/relations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRelationsRequest>;

export type ListProjectsLocationsRelationsResponse = ListRelationsResponse;
export const ListProjectsLocationsRelationsResponse =
  /*@__PURE__*/ ListRelationsResponse;

export type ListProjectsLocationsRelationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the relations in a given project and location. */
export const listProjectsLocationsRelations: API.PaginatedOperationMethod<
  ListProjectsLocationsRelationsRequest,
  ListProjectsLocationsRelationsResponse,
  ListProjectsLocationsRelationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRelationsRequest,
  output: ListProjectsLocationsRelationsResponse,
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
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse = /*@__PURE__*/ Operation;

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
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse = /*@__PURE__*/ Empty;

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
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
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
  /*@__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsImportJobsRequest {
  /** Optional. The level of details of each import job. Default value is BASIC. */
  view?:
    | "IMPORT_JOB_VIEW_UNSPECIFIED"
    | "IMPORT_JOB_VIEW_BASIC"
    | "IMPORT_JOB_VIEW_FULL"
    | (string & {});
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for `ListImportJobsRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/importJobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsImportJobsRequest>;

export type ListProjectsLocationsImportJobsResponse = ListImportJobsResponse;
export const ListProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ ListImportJobsResponse;

export type ListProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all import jobs. */
export const listProjectsLocationsImportJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsImportJobsRequest,
  ListProjectsLocationsImportJobsResponse,
  ListProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImportJobsRequest,
  output: ListProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RunProjectsLocationsImportJobsRequest {
  /** Required. The name of the import job to run. */
  name: string;
  /** Request body */
  body?: RunImportJobRequest;
}

export const RunProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunImportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RunProjectsLocationsImportJobsRequest>;

export type RunProjectsLocationsImportJobsResponse = Operation;
export const RunProjectsLocationsImportJobsResponse = /*@__PURE__*/ Operation;

export type RunProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs an import job. */
export const runProjectsLocationsImportJobs: API.OperationMethod<
  RunProjectsLocationsImportJobsRequest,
  RunProjectsLocationsImportJobsResponse,
  RunProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsImportJobsRequest,
  output: RunProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsImportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. The level of details of the import job. Default value is FULL. */
  view?:
    | "IMPORT_JOB_VIEW_UNSPECIFIED"
    | "IMPORT_JOB_VIEW_BASIC"
    | "IMPORT_JOB_VIEW_FULL"
    | (string & {});
}

export const GetProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsImportJobsRequest>;

export type GetProjectsLocationsImportJobsResponse = ImportJob;
export const GetProjectsLocationsImportJobsResponse = /*@__PURE__*/ ImportJob;

export type GetProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of an import job. */
export const getProjectsLocationsImportJobs: API.OperationMethod<
  GetProjectsLocationsImportJobsRequest,
  GetProjectsLocationsImportJobsResponse,
  GetProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImportJobsRequest,
  output: GetProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsImportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to `true`, any `ImportDataFiles` of this job will also be deleted If set to `false`, the request only works if the job has no data files. */
  force?: boolean;
}

export const DeleteProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsImportJobsRequest>;

export type DeleteProjectsLocationsImportJobsResponse = Operation;
export const DeleteProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an import job. */
export const deleteProjectsLocationsImportJobs: API.OperationMethod<
  DeleteProjectsLocationsImportJobsRequest,
  DeleteProjectsLocationsImportJobsResponse,
  DeleteProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImportJobsRequest,
  output: DeleteProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsImportJobsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. ID of the import job. */
  importJobId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ImportJob;
}

export const CreateProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    importJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("importJobId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ImportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/importJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsImportJobsRequest>;

export type CreateProjectsLocationsImportJobsResponse = Operation;
export const CreateProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an import job. */
export const createProjectsLocationsImportJobs: API.OperationMethod<
  CreateProjectsLocationsImportJobsRequest,
  CreateProjectsLocationsImportJobsResponse,
  CreateProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImportJobsRequest,
  output: CreateProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsImportJobsRequest {
  /** Output only. The full name of the import job. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ImportJob;
}

export const PatchProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ImportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsImportJobsRequest>;

export type PatchProjectsLocationsImportJobsResponse = Operation;
export const PatchProjectsLocationsImportJobsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates an import job. */
export const patchProjectsLocationsImportJobs: API.OperationMethod<
  PatchProjectsLocationsImportJobsRequest,
  PatchProjectsLocationsImportJobsResponse,
  PatchProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsImportJobsRequest,
  output: PatchProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ValidateProjectsLocationsImportJobsRequest {
  /** Required. The name of the import job to validate. */
  name: string;
  /** Request body */
  body?: ValidateImportJobRequest;
}

export const ValidateProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ValidateImportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+name}:validate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ValidateProjectsLocationsImportJobsRequest>;

export type ValidateProjectsLocationsImportJobsResponse = Operation;
export const ValidateProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ Operation;

export type ValidateProjectsLocationsImportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Validates an import job. */
export const validateProjectsLocationsImportJobs: API.OperationMethod<
  ValidateProjectsLocationsImportJobsRequest,
  ValidateProjectsLocationsImportJobsResponse,
  ValidateProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsImportJobsRequest,
  output: ValidateProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsImportJobsImportDataFilesRequest {
  /** Required. Name of the ImportDataFile. */
  name: string;
}

export const GetProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsImportJobsImportDataFilesRequest>;

export type GetProjectsLocationsImportJobsImportDataFilesResponse =
  ImportDataFile;
export const GetProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ ImportDataFile;

export type GetProjectsLocationsImportJobsImportDataFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets an import data file. */
export const getProjectsLocationsImportJobsImportDataFiles: API.OperationMethod<
  GetProjectsLocationsImportJobsImportDataFilesRequest,
  GetProjectsLocationsImportJobsImportDataFilesResponse,
  GetProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImportJobsImportDataFilesRequest,
  output: GetProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsImportJobsImportDataFilesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the parent of the ImportDataFile. */
  parent: string;
  /** Required. The ID of the new data file. */
  importDataFileId?: string;
  /** Request body */
  body?: ImportDataFile;
}

export const CreateProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    importDataFileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("importDataFileId"),
    ),
    body: Schema.optional(ImportDataFile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/importDataFiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsImportJobsImportDataFilesRequest>;

export type CreateProjectsLocationsImportJobsImportDataFilesResponse =
  Operation;
export const CreateProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsImportJobsImportDataFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates an import data file. */
export const createProjectsLocationsImportJobsImportDataFiles: API.OperationMethod<
  CreateProjectsLocationsImportJobsImportDataFilesRequest,
  CreateProjectsLocationsImportJobsImportDataFilesResponse,
  CreateProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImportJobsImportDataFilesRequest,
  output: CreateProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsImportJobsImportDataFilesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the ImportDataFile to delete. */
  name: string;
}

export const DeleteProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsImportJobsImportDataFilesRequest>;

export type DeleteProjectsLocationsImportJobsImportDataFilesResponse =
  Operation;
export const DeleteProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsImportJobsImportDataFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an import data file. */
export const deleteProjectsLocationsImportJobsImportDataFiles: API.OperationMethod<
  DeleteProjectsLocationsImportJobsImportDataFilesRequest,
  DeleteProjectsLocationsImportJobsImportDataFilesResponse,
  DeleteProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImportJobsImportDataFilesRequest,
  output: DeleteProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsImportJobsImportDataFilesRequest {
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Name of the parent of the `ImportDataFiles` resource. */
  parent: string;
  /** Filtering results. */
  filter?: string;
  /** A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/importDataFiles" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsImportJobsImportDataFilesRequest>;

export type ListProjectsLocationsImportJobsImportDataFilesResponse =
  ListImportDataFilesResponse;
export const ListProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ ListImportDataFilesResponse;

export type ListProjectsLocationsImportJobsImportDataFilesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List import data files. */
export const listProjectsLocationsImportJobsImportDataFiles: API.PaginatedOperationMethod<
  ListProjectsLocationsImportJobsImportDataFilesRequest,
  ListProjectsLocationsImportJobsImportDataFilesResponse,
  ListProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImportJobsImportDataFilesRequest,
  output: ListProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsReportConfigsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?. */
  reportConfigId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ReportConfig;
}

export const CreateProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    reportConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("reportConfigId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ReportConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/reportConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsReportConfigsRequest>;

export type CreateProjectsLocationsReportConfigsResponse = Operation;
export const CreateProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsReportConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a report configuration. */
export const createProjectsLocationsReportConfigs: API.OperationMethod<
  CreateProjectsLocationsReportConfigsRequest,
  CreateProjectsLocationsReportConfigsResponse,
  CreateProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsRequest,
  output: CreateProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsReportConfigsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsReportConfigsRequest>;

export type GetProjectsLocationsReportConfigsResponse = ReportConfig;
export const GetProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ ReportConfig;

export type GetProjectsLocationsReportConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single ReportConfig. */
export const getProjectsLocationsReportConfigs: API.OperationMethod<
  GetProjectsLocationsReportConfigsRequest,
  GetProjectsLocationsReportConfigsResponse,
  GetProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsRequest,
  output: GetProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsReportConfigsRequest {
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListReportConfigsRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/reportConfigs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsReportConfigsRequest>;

export type ListProjectsLocationsReportConfigsResponse =
  ListReportConfigsResponse;
export const ListProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ ListReportConfigsResponse;

export type ListProjectsLocationsReportConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists ReportConfigs in a given project and location. */
export const listProjectsLocationsReportConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsReportConfigsRequest,
  ListProjectsLocationsReportConfigsResponse,
  ListProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsRequest,
  output: ListProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsReportConfigsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to `true`, any child `Reports` of this entity will also be deleted. If set to `false`, the request only works if the resource has no children. */
  force?: boolean;
  /** Required. Name of the resource. */
  name: string;
}

export const DeleteProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsReportConfigsRequest>;

export type DeleteProjectsLocationsReportConfigsResponse = Operation;
export const DeleteProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsReportConfigsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a ReportConfig. */
export const deleteProjectsLocationsReportConfigs: API.OperationMethod<
  DeleteProjectsLocationsReportConfigsRequest,
  DeleteProjectsLocationsReportConfigsResponse,
  DeleteProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsRequest,
  output: DeleteProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsReportConfigsReportsRequest {
  /** A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListReportsRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
  /** Determines what information to retrieve for each Report. */
  view?:
    | "REPORT_VIEW_UNSPECIFIED"
    | "REPORT_VIEW_BASIC"
    | "REPORT_VIEW_FULL"
    | "REPORT_VIEW_STANDARD"
    | (string & {});
}

export const ListProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/reports" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsReportConfigsReportsRequest>;

export type ListProjectsLocationsReportConfigsReportsResponse =
  ListReportsResponse;
export const ListProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ ListReportsResponse;

export type ListProjectsLocationsReportConfigsReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists Reports in a given ReportConfig. */
export const listProjectsLocationsReportConfigsReports: API.PaginatedOperationMethod<
  ListProjectsLocationsReportConfigsReportsRequest,
  ListProjectsLocationsReportConfigsReportsResponse,
  ListProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsReportsRequest,
  output: ListProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsReportConfigsReportsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsReportConfigsReportsRequest>;

export type DeleteProjectsLocationsReportConfigsReportsResponse = Operation;
export const DeleteProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsReportConfigsReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a Report. */
export const deleteProjectsLocationsReportConfigsReports: API.OperationMethod<
  DeleteProjectsLocationsReportConfigsReportsRequest,
  DeleteProjectsLocationsReportConfigsReportsResponse,
  DeleteProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsReportsRequest,
  output: DeleteProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsReportConfigsReportsRequest {
  /** Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?. */
  reportId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Report;
}

export const CreateProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ Schema.Struct({
    reportId: Schema.optional(Schema.String).pipe(T.HttpQuery("reportId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Report).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/reports",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsReportConfigsReportsRequest>;

export type CreateProjectsLocationsReportConfigsReportsResponse = Operation;
export const CreateProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsReportConfigsReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a report. */
export const createProjectsLocationsReportConfigsReports: API.OperationMethod<
  CreateProjectsLocationsReportConfigsReportsRequest,
  CreateProjectsLocationsReportConfigsReportsResponse,
  CreateProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsReportsRequest,
  output: CreateProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsReportConfigsReportsRequest {
  /** Determines what information to retrieve for the Report. */
  view?:
    | "REPORT_VIEW_UNSPECIFIED"
    | "REPORT_VIEW_BASIC"
    | "REPORT_VIEW_FULL"
    | "REPORT_VIEW_STANDARD"
    | (string & {});
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsReportConfigsReportsRequest>;

export type GetProjectsLocationsReportConfigsReportsResponse = Report;
export const GetProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ Report;

export type GetProjectsLocationsReportConfigsReportsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a single Report. */
export const getProjectsLocationsReportConfigsReports: API.OperationMethod<
  GetProjectsLocationsReportConfigsReportsRequest,
  GetProjectsLocationsReportConfigsReportsResponse,
  GetProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsReportsRequest,
  output: GetProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsReportConfigsReportsReportExportJobsRequest {
  /** Required. The ID to use for the report export job. */
  reportExportJobId?: string;
  /** Required. The parent resource where this export job will be created. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ReportExportJob;
}

export const CreateProjectsLocationsReportConfigsReportsReportExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    reportExportJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("reportExportJobId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ReportExportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/reportExportJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsReportConfigsReportsReportExportJobsRequest>;

export type CreateProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  Operation;
export const CreateProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsReportConfigsReportsReportExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Export a Report into a supported destination. */
export const createProjectsLocationsReportConfigsReportsReportExportJobs: API.OperationMethod<
  CreateProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  CreateProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  CreateProjectsLocationsReportConfigsReportsReportExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  output: CreateProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsReportConfigsReportsReportExportJobsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
}

export const DeleteProjectsLocationsReportConfigsReportsReportExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsReportConfigsReportsReportExportJobsRequest>;

export type DeleteProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  Operation;
export const DeleteProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsReportConfigsReportsReportExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an report export job. */
export const deleteProjectsLocationsReportConfigsReportsReportExportJobs: API.OperationMethod<
  DeleteProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  DeleteProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  DeleteProjectsLocationsReportConfigsReportsReportExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  output: DeleteProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsReportConfigsReportsReportExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsReportConfigsReportsReportExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsReportConfigsReportsReportExportJobsRequest>;

export type GetProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  ReportExportJob;
export const GetProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  /*@__PURE__*/ ReportExportJob;

export type GetProjectsLocationsReportConfigsReportsReportExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of a report export job. */
export const getProjectsLocationsReportConfigsReportsReportExportJobs: API.OperationMethod<
  GetProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  GetProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  GetProjectsLocationsReportConfigsReportsReportExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  output: GetProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsReportConfigsReportsReportExportJobsRequest {
  /** Optional. A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Required. Parent report owning the export jobs. */
  parent: string;
}

export const ListProjectsLocationsReportConfigsReportsReportExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/reportExportJobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsReportConfigsReportsReportExportJobsRequest>;

export type ListProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  ListReportExportJobsResponse;
export const ListProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  /*@__PURE__*/ ListReportExportJobsResponse;

export type ListProjectsLocationsReportConfigsReportsReportExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the report export jobs for a given report. */
export const listProjectsLocationsReportConfigsReportsReportExportJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  ListProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  ListProjectsLocationsReportConfigsReportsReportExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  output: ListProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RunProjectsLocationsReportConfigsReportsReportExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Request body */
  body?: RunReportExportJobRequest;
}

export const RunProjectsLocationsReportConfigsReportsReportExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunReportExportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RunProjectsLocationsReportConfigsReportsReportExportJobsRequest>;

export type RunProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  Operation;
export const RunProjectsLocationsReportConfigsReportsReportExportJobsResponse =
  /*@__PURE__*/ Operation;

export type RunProjectsLocationsReportConfigsReportsReportExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs a report export job. */
export const runProjectsLocationsReportConfigsReportsReportExportJobs: API.OperationMethod<
  RunProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  RunProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  RunProjectsLocationsReportConfigsReportsReportExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsReportConfigsReportsReportExportJobsRequest,
  output: RunProjectsLocationsReportConfigsReportsReportExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAssetsExportJobsRequest {
  /** Required. Parent resource. */
  parent: string;
  /** Optional. Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Optional. A token identifying a page of results that the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/assetsExportJobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAssetsExportJobsRequest>;

export type ListProjectsLocationsAssetsExportJobsResponse =
  ListAssetsExportJobsResponse;
export const ListProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ ListAssetsExportJobsResponse;

export type ListProjectsLocationsAssetsExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the assets export jobs in a given project and location. */
export const listProjectsLocationsAssetsExportJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsAssetsExportJobsRequest,
  ListProjectsLocationsAssetsExportJobsResponse,
  ListProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAssetsExportJobsRequest,
  output: ListProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RunProjectsLocationsAssetsExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Request body */
  body?: RunAssetsExportJobRequest;
}

export const RunProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunAssetsExportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1alpha1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<RunProjectsLocationsAssetsExportJobsRequest>;

export type RunProjectsLocationsAssetsExportJobsResponse = Operation;
export const RunProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ Operation;

export type RunProjectsLocationsAssetsExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs an assets export job, returning an AssetsExportJobExecution. */
export const runProjectsLocationsAssetsExportJobs: API.OperationMethod<
  RunProjectsLocationsAssetsExportJobsRequest,
  RunProjectsLocationsAssetsExportJobsResponse,
  RunProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsAssetsExportJobsRequest,
  output: RunProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAssetsExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAssetsExportJobsRequest>;

export type GetProjectsLocationsAssetsExportJobsResponse = AssetsExportJob;
export const GetProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ AssetsExportJob;

export type GetProjectsLocationsAssetsExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of an assets export job. */
export const getProjectsLocationsAssetsExportJobs: API.OperationMethod<
  GetProjectsLocationsAssetsExportJobsRequest,
  GetProjectsLocationsAssetsExportJobsResponse,
  GetProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAssetsExportJobsRequest,
  output: GetProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAssetsExportJobsRequest {
  /** Required. The name of the assets export job to delete. */
  name: string;
}

export const DeleteProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAssetsExportJobsRequest>;

export type DeleteProjectsLocationsAssetsExportJobsResponse = Operation;
export const DeleteProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsAssetsExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an assets export job. */
export const deleteProjectsLocationsAssetsExportJobs: API.OperationMethod<
  DeleteProjectsLocationsAssetsExportJobsRequest,
  DeleteProjectsLocationsAssetsExportJobsResponse,
  DeleteProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAssetsExportJobsRequest,
  output: DeleteProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAssetsExportJobsRequest {
  /** Required. The parent resource where the assts export job will be created. */
  parent: string;
  /** Required. The ID to use for the asset export job. */
  assetsExportJobId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: AssetsExportJob;
}

export const CreateProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    assetsExportJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("assetsExportJobId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AssetsExportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/assetsExportJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsAssetsExportJobsRequest>;

export type CreateProjectsLocationsAssetsExportJobsResponse = Operation;
export const CreateProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsAssetsExportJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new assets export job. */
export const createProjectsLocationsAssetsExportJobs: API.OperationMethod<
  CreateProjectsLocationsAssetsExportJobsRequest,
  CreateProjectsLocationsAssetsExportJobsResponse,
  CreateProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAssetsExportJobsRequest,
  output: CreateProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReportAssetFramesProjectsLocationsAssetsRequest {
  /** Required. Parent of the resource. */
  parent: string;
  /** Required. Reference to a source. */
  source?: string;
  /** Request body */
  body?: Frames;
}

export const ReportAssetFramesProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    body: Schema.optional(Frames).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/assets:reportAssetFrames",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReportAssetFramesProjectsLocationsAssetsRequest>;

export type ReportAssetFramesProjectsLocationsAssetsResponse =
  ReportAssetFramesResponse;
export const ReportAssetFramesProjectsLocationsAssetsResponse =
  /*@__PURE__*/ ReportAssetFramesResponse;

export type ReportAssetFramesProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports a set of frames. */
export const reportAssetFramesProjectsLocationsAssets: API.OperationMethod<
  ReportAssetFramesProjectsLocationsAssetsRequest,
  ReportAssetFramesProjectsLocationsAssetsResponse,
  ReportAssetFramesProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReportAssetFramesProjectsLocationsAssetsRequest,
  output: ReportAssetFramesProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAssetsRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Required. Parent value for `ListAssetsRequest`. */
  parent: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** View of the assets. Defaults to BASIC. */
  view?:
    | "ASSET_VIEW_UNSPECIFIED"
    | "ASSET_VIEW_BASIC"
    | "ASSET_VIEW_FULL"
    | "ASSET_VIEW_STANDARD"
    | (string & {});
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
}

export const ListProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    showHidden: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("showHidden")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsAssetsRequest>;

export type ListProjectsLocationsAssetsResponse = ListAssetsResponse;
export const ListProjectsLocationsAssetsResponse =
  /*@__PURE__*/ ListAssetsResponse;

export type ListProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the assets in a given project and location. */
export const listProjectsLocationsAssets: API.PaginatedOperationMethod<
  ListProjectsLocationsAssetsRequest,
  ListProjectsLocationsAssetsResponse,
  ListProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAssetsRequest,
  output: ListProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AggregateValuesProjectsLocationsAssetsRequest {
  /** Required. Parent value for `AggregateAssetsValuesRequest`. */
  parent: string;
  /** Request body */
  body?: AggregateAssetsValuesRequest;
}

export const AggregateValuesProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AggregateAssetsValuesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/assets:aggregateValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AggregateValuesProjectsLocationsAssetsRequest>;

export type AggregateValuesProjectsLocationsAssetsResponse =
  AggregateAssetsValuesResponse;
export const AggregateValuesProjectsLocationsAssetsResponse =
  /*@__PURE__*/ AggregateAssetsValuesResponse;

export type AggregateValuesProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Aggregates the requested fields based on provided function. */
export const aggregateValuesProjectsLocationsAssets: API.OperationMethod<
  AggregateValuesProjectsLocationsAssetsRequest,
  AggregateValuesProjectsLocationsAssetsResponse,
  AggregateValuesProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AggregateValuesProjectsLocationsAssetsRequest,
  output: AggregateValuesProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAssetsRequest {
  /** View of the assets. Defaults to BASIC. */
  view?:
    | "ASSET_VIEW_UNSPECIFIED"
    | "ASSET_VIEW_BASIC"
    | "ASSET_VIEW_FULL"
    | "ASSET_VIEW_STANDARD"
    | (string & {});
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsAssetsRequest>;

export type GetProjectsLocationsAssetsResponse = Asset;
export const GetProjectsLocationsAssetsResponse = /*@__PURE__*/ Asset;

export type GetProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of an asset. */
export const getProjectsLocationsAssets: API.OperationMethod<
  GetProjectsLocationsAssetsRequest,
  GetProjectsLocationsAssetsResponse,
  GetProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAssetsRequest,
  output: GetProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsAssetsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
}

export const DeleteProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1alpha1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsAssetsRequest>;

export type DeleteProjectsLocationsAssetsResponse = Empty;
export const DeleteProjectsLocationsAssetsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an asset. */
export const deleteProjectsLocationsAssets: API.OperationMethod<
  DeleteProjectsLocationsAssetsRequest,
  DeleteProjectsLocationsAssetsResponse,
  DeleteProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAssetsRequest,
  output: DeleteProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsAssetsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The full name of the asset. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: Asset;
}

export const PatchProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Asset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1alpha1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsAssetsRequest>;

export type PatchProjectsLocationsAssetsResponse = Asset;
export const PatchProjectsLocationsAssetsResponse = /*@__PURE__*/ Asset;

export type PatchProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of an asset. */
export const patchProjectsLocationsAssets: API.OperationMethod<
  PatchProjectsLocationsAssetsRequest,
  PatchProjectsLocationsAssetsResponse,
  PatchProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAssetsRequest,
  output: PatchProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchUpdateProjectsLocationsAssetsRequest {
  /** Required. Parent value for batch asset update. */
  parent: string;
  /** Request body */
  body?: BatchUpdateAssetsRequest;
}

export const BatchUpdateProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchUpdateAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/assets:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchUpdateProjectsLocationsAssetsRequest>;

export type BatchUpdateProjectsLocationsAssetsResponse =
  BatchUpdateAssetsResponse;
export const BatchUpdateProjectsLocationsAssetsResponse =
  /*@__PURE__*/ BatchUpdateAssetsResponse;

export type BatchUpdateProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the parameters of a list of assets. */
export const batchUpdateProjectsLocationsAssets: API.OperationMethod<
  BatchUpdateProjectsLocationsAssetsRequest,
  BatchUpdateProjectsLocationsAssetsResponse,
  BatchUpdateProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAssetsRequest,
  output: BatchUpdateProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchDeleteProjectsLocationsAssetsRequest {
  /** Required. Parent value for batch asset delete. */
  parent: string;
  /** Request body */
  body?: BatchDeleteAssetsRequest;
}

export const BatchDeleteProjectsLocationsAssetsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeleteAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1alpha1/{+parent}/assets:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BatchDeleteProjectsLocationsAssetsRequest>;

export type BatchDeleteProjectsLocationsAssetsResponse = Empty;
export const BatchDeleteProjectsLocationsAssetsResponse = /*@__PURE__*/ Empty;

export type BatchDeleteProjectsLocationsAssetsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes list of Assets. */
export const batchDeleteProjectsLocationsAssets: API.OperationMethod<
  BatchDeleteProjectsLocationsAssetsRequest,
  BatchDeleteProjectsLocationsAssetsResponse,
  BatchDeleteProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAssetsRequest,
  output: BatchDeleteProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
