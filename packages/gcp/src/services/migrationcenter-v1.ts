// ==========================================================================
// Migration Center API (migrationcenter v1)
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
  name: "migrationcenter",
  version: "v1",
  rootUrl: "https://migrationcenter.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SignedUri {
  /** Output only. Download URI for the file. */
  uri?: string;
  /** Output only. Name of the file the Signed URI references. */
  file?: string;
}

export const SignedUri = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  file: Schema.optional(Schema.String),
}).annotate({ identifier: "SignedUri" });

export interface CsvOutputFile {
  /** Output only. Number of columns in the file. */
  columnsCount?: number;
  /** Output only. Signed URI destination. */
  signedUri?: SignedUri;
  /** Output only. Number of rows in the file. */
  rowCount?: number;
}

export const CsvOutputFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  columnsCount: Schema.optional(Schema.Number),
  signedUri: Schema.optional(SignedUri),
  rowCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "CsvOutputFile" });

export interface XlsxOutputFile {
  /** Output only. Signed URI destination. */
  signedUri?: SignedUri;
}

export const XlsxOutputFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signedUri: Schema.optional(SignedUri),
}).annotate({ identifier: "XlsxOutputFile" });

export interface OutputFile {
  /** Output only. File size in bytes. */
  fileSizeBytes?: string;
  /** Output only. CSV output file. */
  csvOutputFile?: CsvOutputFile;
  /** Output only. XLSX output file. */
  xlsxOutputFile?: XlsxOutputFile;
}

export const OutputFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileSizeBytes: Schema.optional(Schema.String),
  csvOutputFile: Schema.optional(CsvOutputFile),
  xlsxOutputFile: Schema.optional(XlsxOutputFile),
}).annotate({ identifier: "OutputFile" });

export interface OutputFileList {
  /** Output only. List of output files. */
  entries?: ReadonlyArray<OutputFile>;
}

export const OutputFileList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(OutputFile)),
}).annotate({ identifier: "OutputFileList" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface MySqlStorageEngineDetails {
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
  /** Optional. The number of encrypted tables. */
  encryptedTableCount?: number;
  /** Optional. The number of tables. */
  tableCount?: number;
}

export const MySqlStorageEngineDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    encryptedTableCount: Schema.optional(Schema.Number),
    tableCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MySqlStorageEngineDetails" });

export interface ReportConfigGroupPreferenceSetAssignment {
  /** Required. Name of the Preference Set. */
  preferenceSet?: string;
  /** Required. Name of the group. */
  group?: string;
}

export const ReportConfigGroupPreferenceSetAssignment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferenceSet: Schema.optional(Schema.String),
    group: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportConfigGroupPreferenceSetAssignment" });

export interface AggregationHistogram {
  /** Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds. */
  lowerBounds?: ReadonlyArray<number>;
}

export const AggregationHistogram = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  lowerBounds: Schema.optional(Schema.Array(Schema.Number)),
}).annotate({ identifier: "AggregationHistogram" });

export interface UploadFileInfo {
  /** Output only. Upload URI for the file. */
  signedUri?: string;
  /** Output only. The headers that were used to sign the URI. */
  headers?: Record<string, string>;
  /** Output only. Expiration time of the upload URI. */
  uriExpirationTime?: string;
}

export const UploadFileInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signedUri: Schema.optional(Schema.String),
  headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  uriExpirationTime: Schema.optional(Schema.String),
}).annotate({ identifier: "UploadFileInfo" });

export interface ImportDataFile {
  /** Output only. The name of the file. */
  name?: string;
  /** Required. The payload format. */
  format?:
    | "IMPORT_JOB_FORMAT_UNSPECIFIED"
    | "IMPORT_JOB_FORMAT_RVTOOLS_XLSX"
    | "IMPORT_JOB_FORMAT_RVTOOLS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV"
    | "IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV"
    | "IMPORT_JOB_FORMAT_STRATOZONE_CSV"
    | "IMPORT_JOB_FORMAT_DATABASE_ZIP"
    | (string & {});
  /** Information about a file that is uploaded to a storage service. */
  uploadFileInfo?: UploadFileInfo;
  /** Output only. The state of the import data file. */
  state?: "STATE_UNSPECIFIED" | "CREATING" | "ACTIVE" | (string & {});
  /** Output only. The timestamp when the file was created. */
  createTime?: string;
  /** Optional. User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
}

export const ImportDataFile = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  format: Schema.optional(Schema.String),
  uploadFileInfo: Schema.optional(UploadFileInfo),
  state: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "ImportDataFile" });

export interface ListImportDataFilesResponse {
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of import data files. */
  importDataFiles?: ReadonlyArray<ImportDataFile>;
}

export const ListImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    importDataFiles: Schema.optional(Schema.Array(ImportDataFile)),
  }).annotate({ identifier: "ListImportDataFilesResponse" });

export interface SoleTenantNodeType {
  /** Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes */
  nodeName?: string;
}

export const SoleTenantNodeType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeName: Schema.optional(Schema.String),
}).annotate({ identifier: "SoleTenantNodeType" });

export interface SoleTenancyPreferences {
  /** Sole Tenancy nodes maintenance policy. */
  hostMaintenancePolicy?:
    | "HOST_MAINTENANCE_POLICY_UNSPECIFIED"
    | "HOST_MAINTENANCE_POLICY_DEFAULT"
    | "HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE"
    | "HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP"
    | (string & {});
  /** A list of sole tenant node types. An empty list means that all possible node types will be considered. */
  nodeTypes?: ReadonlyArray<SoleTenantNodeType>;
  /** CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. */
  cpuOvercommitRatio?: number;
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "ON_DEMAND"
    | "COMMITMENT_1_YEAR"
    | "COMMITMENT_3_YEAR"
    | (string & {});
}

export const SoleTenancyPreferences = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hostMaintenancePolicy: Schema.optional(Schema.String),
    nodeTypes: Schema.optional(Schema.Array(SoleTenantNodeType)),
    cpuOvercommitRatio: Schema.optional(Schema.Number),
    commitmentPlan: Schema.optional(Schema.String),
  },
).annotate({ identifier: "SoleTenancyPreferences" });

export interface RegionPreferences {
  /** A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions. */
  preferredRegions?: ReadonlyArray<string>;
}

export const RegionPreferences = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  preferredRegions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RegionPreferences" });

export interface VmwareEnginePreferences {
  /** The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0. */
  storageDeduplicationCompressionRatio?: number;
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "ON_DEMAND"
    | "COMMITMENT_1_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_3_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_1_YEAR_UPFRONT_PAYMENT"
    | "COMMITMENT_3_YEAR_UPFRONT_PAYMENT"
    | (string & {});
  /** Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. */
  memoryOvercommitRatio?: number;
  /** CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. */
  cpuOvercommitRatio?: number;
}

export const VmwareEnginePreferences =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageDeduplicationCompressionRatio: Schema.optional(Schema.Number),
    commitmentPlan: Schema.optional(Schema.String),
    memoryOvercommitRatio: Schema.optional(Schema.Number),
    cpuOvercommitRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VmwareEnginePreferences" });

export interface MachineSeries {
  /** Code to identify a machine series. Consult this for more details on the available series for Compute Engine: https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison Consult this for more details on the available series for Google Cloud VMware Engine: https://cloud.google.com/vmware-engine/pricing */
  code?: string;
}

export const MachineSeries = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
}).annotate({ identifier: "MachineSeries" });

export interface MachinePreferences {
  /** Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series. */
  allowedMachineSeries?: ReadonlyArray<MachineSeries>;
}

export const MachinePreferences = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowedMachineSeries: Schema.optional(Schema.Array(MachineSeries)),
}).annotate({ identifier: "MachinePreferences" });

export interface ComputeEnginePreferences {
  /** Preferences concerning the machine types to consider on Compute Engine. */
  machinePreferences?: MachinePreferences;
  /** License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_TYPE_DEFAULT"
    | "LICENSE_TYPE_BRING_YOUR_OWN_LICENSE"
    | (string & {});
  /** Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data. */
  persistentDiskType?:
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {});
}

export const ComputeEnginePreferences =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machinePreferences: Schema.optional(MachinePreferences),
    licenseType: Schema.optional(Schema.String),
    persistentDiskType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeEnginePreferences" });

export interface VirtualMachinePreferences {
  /** Preferences concerning Sole Tenant nodes and virtual machines. */
  soleTenancyPreferences?: SoleTenancyPreferences;
  /** Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. */
  sizingOptimizationStrategy?:
    | "SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED"
    | "SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE"
    | "SIZING_OPTIMIZATION_STRATEGY_MODERATE"
    | "SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE"
    | (string & {});
  /** Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with. */
  regionPreferences?: RegionPreferences;
  /** Preferences concerning insights and recommendations for Google Cloud VMware Engine. */
  vmwareEnginePreferences?: VmwareEnginePreferences;
  /** Compute Engine preferences concern insights and recommendations for Compute Engine target. */
  computeEnginePreferences?: ComputeEnginePreferences;
  /** Target product for assets using this preference set. Specify either target product or business goal, but not both. */
  targetProduct?:
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED"
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE"
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE"
    | "COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY"
    | (string & {});
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "COMMITMENT_PLAN_NONE"
    | "COMMITMENT_PLAN_ONE_YEAR"
    | "COMMITMENT_PLAN_THREE_YEARS"
    | (string & {});
}

export const VirtualMachinePreferences =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    soleTenancyPreferences: Schema.optional(SoleTenancyPreferences),
    sizingOptimizationStrategy: Schema.optional(Schema.String),
    regionPreferences: Schema.optional(RegionPreferences),
    vmwareEnginePreferences: Schema.optional(VmwareEnginePreferences),
    computeEnginePreferences: Schema.optional(ComputeEnginePreferences),
    targetProduct: Schema.optional(Schema.String),
    commitmentPlan: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachinePreferences" });

export interface DatabaseDeploymentDetailsAggregatedStats {
  /** Output only. The number of databases in the deployment. */
  databaseCount?: number;
}

export const DatabaseDeploymentDetailsAggregatedStats =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DatabaseDeploymentDetailsAggregatedStats" });

export interface Relation {
  /** Output only. The timestamp when the relation was created. */
  createTime?: string;
  /** Optional. The type of the relation. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "LOGICAL_DATABASE"
    | "DATABASE_DEPLOYMENT_HOSTING_SERVER"
    | (string & {});
  /** Output only. The source asset name in the relation. */
  srcAsset?: string;
  /** Output only. Identifier. The identifier of the relation. */
  name?: string;
  /** Output only. The destination asset name in the relation. */
  dstAsset?: string;
}

export const Relation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  srcAsset: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  dstAsset: Schema.optional(Schema.String),
}).annotate({ identifier: "Relation" });

export interface ListRelationsResponse {
  /** A list of relations. */
  relations?: ReadonlyArray<Relation>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListRelationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  relations: Schema.optional(Schema.Array(Relation)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListRelationsResponse" });

export interface DiskPartition {
  /** Mount point (Linux/Windows) or drive letter (Windows). */
  mountPoint?: string;
  /** Partition UUID. */
  uuid?: string;
  /** Partition free space. */
  freeBytes?: string;
  /** Partition file system. */
  fileSystem?: string;
  /** Sub-partitions. */
  subPartitions?: DiskPartitionList;
  /** Partition type. */
  type?: string;
  /** Partition capacity. */
  capacityBytes?: string;
}

export const DiskPartition: Schema.Schema<DiskPartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mountPoint: Schema.optional(Schema.String),
      uuid: Schema.optional(Schema.String),
      freeBytes: Schema.optional(Schema.String),
      fileSystem: Schema.optional(Schema.String),
      subPartitions: Schema.optional(DiskPartitionList),
      type: Schema.optional(Schema.String),
      capacityBytes: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "DiskPartition",
  }) as any as Schema.Schema<DiskPartition>;

export interface DiskPartitionList {
  /** Partition entries. */
  entries?: ReadonlyArray<DiskPartition>;
}

export const DiskPartitionList: Schema.Schema<DiskPartitionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entries: Schema.optional(Schema.Array(DiskPartition)),
    }),
  ).annotate({
    identifier: "DiskPartitionList",
  }) as any as Schema.Schema<DiskPartitionList>;

export interface ReportSummaryUtilizationChartData {
  /** Aggregate value which falls into the "Used" bucket. */
  used?: string;
  /** Aggregate value which falls into the "Free" bucket. */
  free?: string;
}

export const ReportSummaryUtilizationChartData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    used: Schema.optional(Schema.String),
    free: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryUtilizationChartData" });

export interface ReportSummaryHistogramChartDataBucket {
  /** Upper bound - exclusive. */
  upperBound?: string;
  /** Count of items in the bucket. */
  count?: string;
  /** Lower bound - inclusive. */
  lowerBound?: string;
}

export const ReportSummaryHistogramChartDataBucket =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upperBound: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    lowerBound: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryHistogramChartDataBucket" });

export interface ReportSummaryHistogramChartData {
  /** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
  buckets?: ReadonlyArray<ReportSummaryHistogramChartDataBucket>;
}

export const ReportSummaryHistogramChartData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(
      Schema.Array(ReportSummaryHistogramChartDataBucket),
    ),
  }).annotate({ identifier: "ReportSummaryHistogramChartData" });

export interface ReportSummaryChartDataDataPoint {
  /** The X-axis label for this data point. */
  label?: string;
  /** The Y-axis value for this data point. */
  value?: number;
}

export const ReportSummaryChartDataDataPoint =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ReportSummaryChartDataDataPoint" });

export interface ReportSummaryChartData {
  /** Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value. */
  dataPoints?: ReadonlyArray<ReportSummaryChartDataDataPoint>;
}

export const ReportSummaryChartData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    dataPoints: Schema.optional(Schema.Array(ReportSummaryChartDataDataPoint)),
  },
).annotate({ identifier: "ReportSummaryChartData" });

export interface ReportSummaryAssetAggregateStats {
  /** Total memory split into Used/Free buckets. */
  memoryUtilizationChart?: ReportSummaryUtilizationChartData;
  /** Sum of the CPU core count of all the assets in this collection. */
  totalCores?: string;
  /** Histogram showing a distribution of storage sizes. */
  storageBytesHistogram?: ReportSummaryHistogramChartData;
  /** Histogram showing a distribution of logical CPU core counts. */
  coreCountHistogram?: ReportSummaryHistogramChartData;
  /** Histogram showing a distribution of memory sizes. */
  memoryBytesHistogram?: ReportSummaryHistogramChartData;
  /** Total memory split into Used/Free buckets. */
  storageUtilizationChart?: ReportSummaryUtilizationChartData;
  /** Output only. Count of assets grouped by software name. Only present for virtual machines. */
  softwareInstances?: ReportSummaryChartData;
  /** Sum of the memory in bytes of all the assets in this collection. */
  totalMemoryBytes?: string;
  /** Sum of persistent storage in bytes of all the assets in this collection. */
  totalStorageBytes?: string;
  /** Count of the number of unique assets in this collection. */
  totalAssets?: string;
  /** Count of assets grouped by Operating System families. */
  operatingSystem?: ReportSummaryChartData;
}

export const ReportSummaryAssetAggregateStats =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memoryUtilizationChart: Schema.optional(ReportSummaryUtilizationChartData),
    totalCores: Schema.optional(Schema.String),
    storageBytesHistogram: Schema.optional(ReportSummaryHistogramChartData),
    coreCountHistogram: Schema.optional(ReportSummaryHistogramChartData),
    memoryBytesHistogram: Schema.optional(ReportSummaryHistogramChartData),
    storageUtilizationChart: Schema.optional(ReportSummaryUtilizationChartData),
    softwareInstances: Schema.optional(ReportSummaryChartData),
    totalMemoryBytes: Schema.optional(Schema.String),
    totalStorageBytes: Schema.optional(Schema.String),
    totalAssets: Schema.optional(Schema.String),
    operatingSystem: Schema.optional(ReportSummaryChartData),
  }).annotate({ identifier: "ReportSummaryAssetAggregateStats" });

export interface ReportSummaryMachineSeriesAllocation {
  /** The Machine Series (e.g. "E2", "N2") */
  machineSeries?: MachineSeries;
  /** Count of assets allocated to this machine series. */
  allocatedAssetCount?: string;
}

export const ReportSummaryMachineSeriesAllocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineSeries: Schema.optional(MachineSeries),
    allocatedAssetCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryMachineSeriesAllocation" });

export interface ReportSummaryComputeEngineFinding {
  /** Distribution of assets based on the Machine Series. */
  machineSeriesAllocations?: ReadonlyArray<ReportSummaryMachineSeriesAllocation>;
  /** Set of disk types allocated to assets. */
  allocatedDiskTypes?: ReadonlyArray<
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {})
  >;
  /** Count of assets which were allocated. */
  allocatedAssetCount?: string;
  /** Set of regions in which the assets were allocated. */
  allocatedRegions?: ReadonlyArray<string>;
}

export const ReportSummaryComputeEngineFinding =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineSeriesAllocations: Schema.optional(
      Schema.Array(ReportSummaryMachineSeriesAllocation),
    ),
    allocatedDiskTypes: Schema.optional(Schema.Array(Schema.String)),
    allocatedAssetCount: Schema.optional(Schema.String),
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReportSummaryComputeEngineFinding" });

export interface ReportSummarySoleTenantNodeAllocation {
  /** Sole Tenant node type, e.g. "m3-node-128-3904" */
  node?: SoleTenantNodeType;
  /** Count of assets allocated to these nodes */
  allocatedAssetCount?: string;
  /** Count of this node type to be provisioned */
  nodeCount?: string;
}

export const ReportSummarySoleTenantNodeAllocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    node: Schema.optional(SoleTenantNodeType),
    allocatedAssetCount: Schema.optional(Schema.String),
    nodeCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummarySoleTenantNodeAllocation" });

export interface ReportSummarySoleTenantFinding {
  /** Count of assets which are allocated */
  allocatedAssetCount?: string;
  /** Set of per-nodetype allocation records */
  nodeAllocations?: ReadonlyArray<ReportSummarySoleTenantNodeAllocation>;
  /** Set of regions in which the assets are allocated */
  allocatedRegions?: ReadonlyArray<string>;
}

export const ReportSummarySoleTenantFinding =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedAssetCount: Schema.optional(Schema.String),
    nodeAllocations: Schema.optional(
      Schema.Array(ReportSummarySoleTenantNodeAllocation),
    ),
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReportSummarySoleTenantFinding" });

export interface Money {
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
}

export const Money = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  nanos: Schema.optional(Schema.Number),
  units: Schema.optional(Schema.String),
}).annotate({ identifier: "Money" });

export interface ReportSummaryVmwareNode {
  /** Code to identify VMware Engine node series, e.g. "ve1-standard-72". Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes */
  code?: string;
}

export const ReportSummaryVmwareNode =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryVmwareNode" });

export interface ReportSummaryVmwareNodeAllocation {
  /** Count of this node type to be provisioned */
  nodeCount?: string;
  /** Count of assets allocated to these nodes */
  allocatedAssetCount?: string;
  /** VMWare node type, e.g. "ve1-standard-72" */
  vmwareNode?: ReportSummaryVmwareNode;
}

export const ReportSummaryVmwareNodeAllocation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.String),
    allocatedAssetCount: Schema.optional(Schema.String),
    vmwareNode: Schema.optional(ReportSummaryVmwareNode),
  }).annotate({ identifier: "ReportSummaryVmwareNodeAllocation" });

export interface ReportSummaryVmwareEngineFinding {
  /** Count of assets which are allocated */
  allocatedAssetCount?: string;
  /** Set of per-nodetype allocation records */
  nodeAllocations?: ReadonlyArray<ReportSummaryVmwareNodeAllocation>;
  /** Set of regions in which the assets were allocated */
  allocatedRegions?: ReadonlyArray<string>;
}

export const ReportSummaryVmwareEngineFinding =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedAssetCount: Schema.optional(Schema.String),
    nodeAllocations: Schema.optional(
      Schema.Array(ReportSummaryVmwareNodeAllocation),
    ),
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReportSummaryVmwareEngineFinding" });

export interface ReportSummaryGroupPreferenceSetFinding {
  /** A set of findings that applies to Compute Engine machines in the input. */
  computeEngineFinding?: ReportSummaryComputeEngineFinding;
  /** A set of findings that applies to Sole-Tenant machines in the input. */
  soleTenantFinding?: ReportSummarySoleTenantFinding;
  /** Compute monthly cost for this preference set. */
  monthlyCostCompute?: Money;
  /** A set of preferences that applies to all machines in the context. */
  machinePreferences?: VirtualMachinePreferences;
  /** Total monthly cost for this preference set. */
  monthlyCostTotal?: Money;
  /** Miscellaneous monthly cost for this preference set. */
  monthlyCostOther?: Money;
  /** Network Egress monthly cost for this preference set. */
  monthlyCostNetworkEgress?: Money;
  /** Storage monthly cost for this preference set. */
  monthlyCostStorage?: Money;
  /** Display Name of the Preference Set */
  displayName?: string;
  /** A set of findings that applies to VMWare machines in the input. */
  vmwareEngineFinding?: ReportSummaryVmwareEngineFinding;
  /** Description for the Preference Set. */
  description?: string;
  /** Licensing monthly cost for this preference set. */
  monthlyCostOsLicense?: Money;
}

export const ReportSummaryGroupPreferenceSetFinding =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeEngineFinding: Schema.optional(ReportSummaryComputeEngineFinding),
    soleTenantFinding: Schema.optional(ReportSummarySoleTenantFinding),
    monthlyCostCompute: Schema.optional(Money),
    machinePreferences: Schema.optional(VirtualMachinePreferences),
    monthlyCostTotal: Schema.optional(Money),
    monthlyCostOther: Schema.optional(Money),
    monthlyCostNetworkEgress: Schema.optional(Money),
    monthlyCostStorage: Schema.optional(Money),
    displayName: Schema.optional(Schema.String),
    vmwareEngineFinding: Schema.optional(ReportSummaryVmwareEngineFinding),
    description: Schema.optional(Schema.String),
    monthlyCostOsLicense: Schema.optional(Money),
  }).annotate({ identifier: "ReportSummaryGroupPreferenceSetFinding" });

export interface ReportSummaryGroupFinding {
  /** Description for the Group. */
  description?: string;
  /** Summary statistics for all the assets in this group. */
  assetAggregateStats?: ReportSummaryAssetAggregateStats;
  /** Findings for each of the PreferenceSets for this group. */
  preferenceSetFindings?: ReadonlyArray<ReportSummaryGroupPreferenceSetFinding>;
  /** This field is deprecated, do not rely on it having a value. */
  overlappingAssetCount?: string;
  /** Display Name for the Group. */
  displayName?: string;
}

export const ReportSummaryGroupFinding =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    assetAggregateStats: Schema.optional(ReportSummaryAssetAggregateStats),
    preferenceSetFindings: Schema.optional(
      Schema.Array(ReportSummaryGroupPreferenceSetFinding),
    ),
    overlappingAssetCount: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryGroupFinding" });

export interface ReportSummary {
  /** Aggregate statistics for all the assets across all the groups. */
  allAssetsStats?: ReportSummaryAssetAggregateStats;
  /** Findings for each Group included in this report. */
  groupFindings?: ReadonlyArray<ReportSummaryGroupFinding>;
}

export const ReportSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allAssetsStats: Schema.optional(ReportSummaryAssetAggregateStats),
  groupFindings: Schema.optional(Schema.Array(ReportSummaryGroupFinding)),
}).annotate({ identifier: "ReportSummary" });

export interface NetworkConnection {
  /** Process or service name. */
  processName?: string;
  /** Local port. */
  localPort?: number;
  /** Local IP address. */
  localIpAddress?: string;
  /** Remote IP address. */
  remoteIpAddress?: string;
  /** Connection protocol (e.g. TCP/UDP). */
  protocol?: string;
  /** Remote port. */
  remotePort?: number;
  /** Process ID. */
  pid?: string;
  /** Network connection state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "OPENING"
    | "OPEN"
    | "LISTEN"
    | "CLOSING"
    | "CLOSED"
    | (string & {});
}

export const NetworkConnection = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  processName: Schema.optional(Schema.String),
  localPort: Schema.optional(Schema.Number),
  localIpAddress: Schema.optional(Schema.String),
  remoteIpAddress: Schema.optional(Schema.String),
  protocol: Schema.optional(Schema.String),
  remotePort: Schema.optional(Schema.Number),
  pid: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "NetworkConnection" });

export interface AggregationSum {}

export const AggregationSum = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AggregationSum" });

export interface VmwareDiskConfig {
  /** VMDK backing type. */
  backingType?:
    | "BACKING_TYPE_UNSPECIFIED"
    | "BACKING_TYPE_FLAT_V1"
    | "BACKING_TYPE_FLAT_V2"
    | "BACKING_TYPE_PMEM"
    | "BACKING_TYPE_RDM_V1"
    | "BACKING_TYPE_RDM_V2"
    | "BACKING_TYPE_SESPARSE"
    | "BACKING_TYPE_SESPARSE_V1"
    | "BACKING_TYPE_SESPARSE_V2"
    | (string & {});
  /** Is VMDK shared with other VMs. */
  shared?: boolean;
  /** RDM compatibility mode. */
  rdmCompatibility?:
    | "RDM_COMPATIBILITY_UNSPECIFIED"
    | "PHYSICAL_COMPATIBILITY"
    | "VIRTUAL_COMPATIBILITY"
    | (string & {});
  /** VMDK disk mode. */
  vmdkMode?:
    | "VMDK_MODE_UNSPECIFIED"
    | "DEPENDENT"
    | "INDEPENDENT_PERSISTENT"
    | "INDEPENDENT_NONPERSISTENT"
    | (string & {});
}

export const VmwareDiskConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backingType: Schema.optional(Schema.String),
  shared: Schema.optional(Schema.Boolean),
  rdmCompatibility: Schema.optional(Schema.String),
  vmdkMode: Schema.optional(Schema.String),
}).annotate({ identifier: "VmwareDiskConfig" });

export interface DiskEntry {
  /** Disk label. */
  diskLabel?: string;
  /** Disk hardware address (e.g. 0:1 for SCSI). */
  hwAddress?: string;
  /** Disk label type (e.g. BIOS/GPT) */
  diskLabelType?: string;
  /** VMware disk details. */
  vmware?: VmwareDiskConfig;
  /** Disks interface type. */
  interfaceType?:
    | "INTERFACE_TYPE_UNSPECIFIED"
    | "IDE"
    | "SATA"
    | "SAS"
    | "SCSI"
    | "NVME"
    | "FC"
    | "ISCSI"
    | (string & {});
  /** Disk capacity. */
  capacityBytes?: string;
  /** Partition layout. */
  partitions?: DiskPartitionList;
  /** Disk free space. */
  freeBytes?: string;
}

export const DiskEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diskLabel: Schema.optional(Schema.String),
  hwAddress: Schema.optional(Schema.String),
  diskLabelType: Schema.optional(Schema.String),
  vmware: Schema.optional(VmwareDiskConfig),
  interfaceType: Schema.optional(Schema.String),
  capacityBytes: Schema.optional(Schema.String),
  partitions: Schema.optional(DiskPartitionList),
  freeBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "DiskEntry" });

export interface DiskEntryList {
  /** Disk entries. */
  entries?: ReadonlyArray<DiskEntry>;
}

export const DiskEntryList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(DiskEntry)),
}).annotate({ identifier: "DiskEntryList" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  target: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  createTime: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface GuestInstalledApplication {
  /** The time when the application was installed. */
  installTime?: string;
  /** License strings associated with the installed application. */
  licenses?: ReadonlyArray<string>;
  /** Installed application vendor. */
  vendor?: string;
  /** Installed application name. */
  applicationName?: string;
  /** Source path. */
  path?: string;
  /** Installed application version. */
  version?: string;
}

export const GuestInstalledApplication =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installTime: Schema.optional(Schema.String),
    licenses: Schema.optional(Schema.Array(Schema.String)),
    vendor: Schema.optional(Schema.String),
    applicationName: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestInstalledApplication" });

export interface MemoryUsageSample {
  /** Percentage of system memory utilized. Must be in the interval [0, 100]. */
  utilizedPercentage?: number;
}

export const MemoryUsageSample = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  utilizedPercentage: Schema.optional(Schema.Number),
}).annotate({ identifier: "MemoryUsageSample" });

export interface AwsEc2PlatformDetails {
  /** AWS platform's machine type label. */
  machineTypeLabel?: string;
  /** The location of the machine in the AWS format. */
  location?: string;
  /** Optional. Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
}

export const AwsEc2PlatformDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machineTypeLabel: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  hyperthreading: Schema.optional(Schema.String),
}).annotate({ identifier: "AwsEc2PlatformDetails" });

export interface NfsExport {
  /** The directory being exported. */
  exportDirectory?: string;
  /** The hosts or networks to which the export is being shared. */
  hosts?: ReadonlyArray<string>;
}

export const NfsExport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exportDirectory: Schema.optional(Schema.String),
  hosts: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "NfsExport" });

export interface NfsExportList {
  /** NFS export entries. */
  entries?: ReadonlyArray<NfsExport>;
}

export const NfsExportList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(NfsExport)),
}).annotate({ identifier: "NfsExportList" });

export interface FitDescriptor {
  /** Output only. Fit level. */
  fitLevel?:
    | "FIT_LEVEL_UNSPECIFIED"
    | "FIT"
    | "NO_FIT"
    | "REQUIRES_EFFORT"
    | (string & {});
}

export const FitDescriptor = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fitLevel: Schema.optional(Schema.String),
}).annotate({ identifier: "FitDescriptor" });

export interface ImportRowErrorCsvErrorDetails {
  /** The row number where the error was detected. */
  rowNumber?: number;
}

export const ImportRowErrorCsvErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ImportRowErrorCsvErrorDetails" });

export interface ImportRowErrorArchiveErrorDetails {
  /** Output only. The file path inside the archive where the error was detected. */
  filePath?: string;
  /** Error details for a CSV file. */
  csvError?: ImportRowErrorCsvErrorDetails;
}

export const ImportRowErrorArchiveErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
    csvError: Schema.optional(ImportRowErrorCsvErrorDetails),
  }).annotate({ identifier: "ImportRowErrorArchiveErrorDetails" });

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

export const ImportError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  severity: Schema.optional(Schema.String),
  errorDetails: Schema.optional(Schema.String),
}).annotate({ identifier: "ImportError" });

export interface ImportRowErrorXlsxErrorDetails {
  /** The name of the sheet where the error was detected. */
  sheet?: string;
  /** The row number where the error was detected. */
  rowNumber?: number;
}

export const ImportRowErrorXlsxErrorDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sheet: Schema.optional(Schema.String),
    rowNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ImportRowErrorXlsxErrorDetails" });

export interface ImportRowError {
  /** Error details for an archive file. */
  archiveError?: ImportRowErrorArchiveErrorDetails;
  /** Output only. The asset title. */
  assetTitle?: string;
  /** The list of errors detected in the row. */
  errors?: ReadonlyArray<ImportError>;
  /** Error details for a CSV file. */
  csvError?: ImportRowErrorCsvErrorDetails;
  /** The VM UUID. */
  vmUuid?: string;
  /** The row number where the error was detected. */
  rowNumber?: number;
  /** The name of the VM in the row. */
  vmName?: string;
  /** Error details for an XLSX file. */
  xlsxError?: ImportRowErrorXlsxErrorDetails;
}

export const ImportRowError = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  archiveError: Schema.optional(ImportRowErrorArchiveErrorDetails),
  assetTitle: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(ImportError)),
  csvError: Schema.optional(ImportRowErrorCsvErrorDetails),
  vmUuid: Schema.optional(Schema.String),
  rowNumber: Schema.optional(Schema.Number),
  vmName: Schema.optional(Schema.String),
  xlsxError: Schema.optional(ImportRowErrorXlsxErrorDetails),
}).annotate({ identifier: "ImportRowError" });

export interface FileValidationReport {
  /** The name of the file. */
  fileName?: string;
  /** Flag indicating that processing was aborted due to maximum number of errors. */
  partialReport?: boolean;
  /** Partial list of rows that encountered validation error. */
  rowErrors?: ReadonlyArray<ImportRowError>;
  /** List of file level errors. */
  fileErrors?: ReadonlyArray<ImportError>;
}

export const FileValidationReport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileName: Schema.optional(Schema.String),
  partialReport: Schema.optional(Schema.Boolean),
  rowErrors: Schema.optional(Schema.Array(ImportRowError)),
  fileErrors: Schema.optional(Schema.Array(ImportError)),
}).annotate({ identifier: "FileValidationReport" });

export interface ValidationReport {
  /** List of errors found in files. */
  fileValidations?: ReadonlyArray<FileValidationReport>;
  /** List of job level errors. */
  jobErrors?: ReadonlyArray<ImportError>;
}

export const ValidationReport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileValidations: Schema.optional(Schema.Array(FileValidationReport)),
  jobErrors: Schema.optional(Schema.Array(ImportError)),
}).annotate({ identifier: "ValidationReport" });

export interface ExecutionReport {
  /** Total number of asset frames reported for the import job. */
  framesReported?: number;
  /** Validation errors encountered during the execution of the import job. */
  executionErrors?: ValidationReport;
  /** Output only. Total number of rows in the import job. */
  totalRowsCount?: number;
}

export const ExecutionReport = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  framesReported: Schema.optional(Schema.Number),
  executionErrors: Schema.optional(ValidationReport),
  totalRowsCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "ExecutionReport" });

export interface NetworkConnectionList {
  /** Network connection entries. */
  entries?: ReadonlyArray<NetworkConnection>;
}

export const NetworkConnectionList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(NetworkConnection)),
}).annotate({ identifier: "NetworkConnectionList" });

export interface RuntimeNetworkInfo {
  /** Time of the last network scan. */
  scanTime?: string;
  /** Network connections. */
  connections?: NetworkConnectionList;
}

export const RuntimeNetworkInfo = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scanTime: Schema.optional(Schema.String),
  connections: Schema.optional(NetworkConnectionList),
}).annotate({ identifier: "RuntimeNetworkInfo" });

export interface ComputeStorageDescriptor {
  /** Output only. Disk type backing the storage. */
  type?:
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {});
  /** Output only. Disk size in GiB. */
  sizeGb?: number;
}

export const ComputeStorageDescriptor =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ComputeStorageDescriptor" });

export interface ComputeEngineShapeDescriptor {
  /** Number of physical cores. */
  physicalCoreCount?: number;
  /** Output only. Compute Engine machine series. */
  series?: string;
  /** Output only. Compute Engine machine type. */
  machineType?: string;
  /** Output only. Compute Engine storage. Never empty. */
  storage?: ReadonlyArray<ComputeStorageDescriptor>;
  /** Memory in mebibytes. */
  memoryMb?: number;
  /** Output only. Number of logical cores. */
  logicalCoreCount?: number;
}

export const ComputeEngineShapeDescriptor =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    physicalCoreCount: Schema.optional(Schema.Number),
    series: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    storage: Schema.optional(Schema.Array(ComputeStorageDescriptor)),
    memoryMb: Schema.optional(Schema.Number),
    logicalCoreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ComputeEngineShapeDescriptor" });

export interface Source {
  /** Data source type. */
  type?:
    | "SOURCE_TYPE_UNKNOWN"
    | "SOURCE_TYPE_UPLOAD"
    | "SOURCE_TYPE_GUEST_OS_SCAN"
    | "SOURCE_TYPE_INVENTORY_SCAN"
    | "SOURCE_TYPE_CUSTOM"
    | "SOURCE_TYPE_DISCOVERY_CLIENT"
    | (string & {});
  /** User-friendly display name. */
  displayName?: string;
  /** Output only. The timestamp when the source was created. */
  createTime?: string;
  /** The information confidence of the source. The higher the value, the higher the confidence. */
  priority?: number;
  /** Output only. Number of frames that are still being processed. */
  pendingFrameCount?: number;
  /** Free-text description. */
  description?: string;
  /** Output only. The number of frames that were reported by the source and contained errors. */
  errorFrameCount?: number;
  /** Output only. The state of the source. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "DELETING"
    | "INVALID"
    | (string & {});
  /** If `true`, the source is managed by other service(s). */
  managed?: boolean;
  /** Output only. The full name of the source. */
  name?: string;
  /** Output only. The timestamp when the source was last updated. */
  updateTime?: string;
}

export const Source = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  priority: Schema.optional(Schema.Number),
  pendingFrameCount: Schema.optional(Schema.Number),
  description: Schema.optional(Schema.String),
  errorFrameCount: Schema.optional(Schema.Number),
  state: Schema.optional(Schema.String),
  managed: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Source" });

export interface ListSourcesResponse {
  /** The list of sources. */
  sources?: ReadonlyArray<Source>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListSourcesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sources: Schema.optional(Schema.Array(Source)),
  nextPageToken: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListSourcesResponse" });

export interface AssetsExportJobExportCondition {
  /** Optional. Assets filter, supports the same syntax as asset listing. */
  filter?: string;
}

export const AssetsExportJobExportCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetsExportJobExportCondition" });

export interface DailyResourceUsageAggregationStats {
  /** Median usage value. */
  median?: number;
  /** 95th percentile usage value. */
  ninteyFifthPercentile?: number;
  /** Peak usage value. */
  peak?: number;
  /** Average usage value. */
  average?: number;
}

export const DailyResourceUsageAggregationStats =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    median: Schema.optional(Schema.Number),
    ninteyFifthPercentile: Schema.optional(Schema.Number),
    peak: Schema.optional(Schema.Number),
    average: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyResourceUsageAggregationStats" });

export interface DailyResourceUsageAggregationNetwork {
  /** Network ingress in B/s. */
  ingressBps?: DailyResourceUsageAggregationStats;
  /** Network egress in B/s. */
  egressBps?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationNetwork =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingressBps: Schema.optional(DailyResourceUsageAggregationStats),
    egressBps: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationNetwork" });

export interface ComputeEngineMigrationTarget {
  /** Description of the suggested shape for the migration target. */
  shape?: ComputeEngineShapeDescriptor;
}

export const ComputeEngineMigrationTarget =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shape: Schema.optional(ComputeEngineShapeDescriptor),
  }).annotate({ identifier: "ComputeEngineMigrationTarget" });

export interface MigrationInsight {
  /** Output only. A Google Compute Engine target. */
  computeEngineTarget?: ComputeEngineMigrationTarget;
  /** Output only. Description of how well the asset this insight is associated with fits the proposed migration. */
  fit?: FitDescriptor;
}

export const MigrationInsight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  computeEngineTarget: Schema.optional(ComputeEngineMigrationTarget),
  fit: Schema.optional(FitDescriptor),
}).annotate({ identifier: "MigrationInsight" });

export interface AwsRds {}

export const AwsRds = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "AwsRds",
});

export interface NetworkAddress {
  /** Whether DHCP is used to assign addresses. */
  assignment?:
    | "ADDRESS_ASSIGNMENT_UNSPECIFIED"
    | "ADDRESS_ASSIGNMENT_STATIC"
    | "ADDRESS_ASSIGNMENT_DHCP"
    | (string & {});
  /** Subnet mask. */
  subnetMask?: string;
  /** Fully qualified domain name. */
  fqdn?: string;
  /** Assigned or configured IP Address. */
  ipAddress?: string;
  /** Broadcast address. */
  bcast?: string;
}

export const NetworkAddress = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assignment: Schema.optional(Schema.String),
  subnetMask: Schema.optional(Schema.String),
  fqdn: Schema.optional(Schema.String),
  ipAddress: Schema.optional(Schema.String),
  bcast: Schema.optional(Schema.String),
}).annotate({ identifier: "NetworkAddress" });

export interface MachineDiskDetails {
  /** Total disk free space. */
  totalFreeBytes?: string;
  /** List of disks. */
  disks?: DiskEntryList;
  /** Disk total Capacity. */
  totalCapacityBytes?: string;
}

export const MachineDiskDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalFreeBytes: Schema.optional(Schema.String),
  disks: Schema.optional(DiskEntryList),
  totalCapacityBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "MachineDiskDetails" });

export interface Migrationcenter_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
}

export const Migrationcenter_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  month: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  year: Schema.optional(Schema.Number),
}).annotate({ identifier: "Migrationcenter_Date" });

export interface BiosDetails {
  /** BIOS version. */
  version?: string;
  /** BIOS ID. */
  id?: string;
  /** BIOS release date. */
  releaseDate?: Migrationcenter_Date;
  /** SMBIOS UUID. */
  smbiosUuid?: string;
  /** BIOS name. This fields is deprecated. Please use the `id` field instead. */
  biosName?: string;
  /** BIOS manufacturer. */
  manufacturer?: string;
}

export const BiosDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  version: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  releaseDate: Schema.optional(Migrationcenter_Date),
  smbiosUuid: Schema.optional(Schema.String),
  biosName: Schema.optional(Schema.String),
  manufacturer: Schema.optional(Schema.String),
}).annotate({ identifier: "BiosDetails" });

export interface MachineArchitectureDetails {
  /** Deprecated: use MachineDetails.core_count instead. Number of CPU threads allocated to the machine. */
  cpuThreadCount?: number;
  /** Number of processor sockets allocated to the machine. */
  cpuSocketCount?: number;
  /** BIOS Details. */
  bios?: BiosDetails;
  /** CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc. */
  cpuArchitecture?: string;
  /** CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. */
  cpuName?: string;
  /** Hardware vendor. */
  vendor?: string;
  /** Firmware type. */
  firmwareType?: "FIRMWARE_TYPE_UNSPECIFIED" | "BIOS" | "EFI" | (string & {});
  /** Optional. CPU manufacturer, e.g., "Intel", "AMD". */
  cpuManufacturer?: string;
  /** CPU hyper-threading support. */
  hyperthreading?:
    | "CPU_HYPER_THREADING_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
}

export const MachineArchitectureDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuThreadCount: Schema.optional(Schema.Number),
    cpuSocketCount: Schema.optional(Schema.Number),
    bios: Schema.optional(BiosDetails),
    cpuArchitecture: Schema.optional(Schema.String),
    cpuName: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
    firmwareType: Schema.optional(Schema.String),
    cpuManufacturer: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineArchitectureDetails" });

export interface NetworkAddressList {
  /** Network address entries. */
  entries?: ReadonlyArray<NetworkAddress>;
}

export const NetworkAddressList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(NetworkAddress)),
}).annotate({ identifier: "NetworkAddressList" });

export interface NetworkAdapterDetails {
  /** Network adapter type (e.g. VMXNET3). */
  adapterType?: string;
  /** MAC address. */
  macAddress?: string;
  /** NetworkAddressList */
  addresses?: NetworkAddressList;
}

export const NetworkAdapterDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adapterType: Schema.optional(Schema.String),
  macAddress: Schema.optional(Schema.String),
  addresses: Schema.optional(NetworkAddressList),
}).annotate({ identifier: "NetworkAdapterDetails" });

export interface NetworkAdapterList {
  /** Network adapter entries. */
  entries?: ReadonlyArray<NetworkAdapterDetails>;
}

export const NetworkAdapterList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(NetworkAdapterDetails)),
}).annotate({ identifier: "NetworkAdapterList" });

export interface MachineNetworkDetails {
  /** List of network adapters. */
  adapters?: NetworkAdapterList;
  /** The primary IP address of the machine. */
  primaryIpAddress?: string;
  /** The public IP address of the machine. */
  publicIpAddress?: string;
  /** Optional. Default gateway address. */
  defaultGateway?: string;
  /** MAC address of the machine. This property is used to uniqly identify the machine. */
  primaryMacAddress?: string;
}

export const MachineNetworkDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adapters: Schema.optional(NetworkAdapterList),
  primaryIpAddress: Schema.optional(Schema.String),
  publicIpAddress: Schema.optional(Schema.String),
  defaultGateway: Schema.optional(Schema.String),
  primaryMacAddress: Schema.optional(Schema.String),
}).annotate({ identifier: "MachineNetworkDetails" });

export interface GenericPlatformDetails {
  /** Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** Free text representation of the machine location. The format of this field should not be relied on. Different VMs in the same location may have different string values for this field. */
  location?: string;
}

export const GenericPlatformDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hyperthreading: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  },
).annotate({ identifier: "GenericPlatformDetails" });

export interface AzureVmPlatformDetails {
  /** Azure platform's machine type label. */
  machineTypeLabel?: string;
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
}

export const AzureVmPlatformDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    machineTypeLabel: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
  },
).annotate({ identifier: "AzureVmPlatformDetails" });

export interface VmwarePlatformDetails {
  /** ESX version. */
  esxVersion?: string;
  /** VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html. */
  osid?: string;
  /** vCenter VM ID. */
  vcenterVmId?: string;
  /** vCenter URI used in collection. */
  vcenterUri?: string;
  /** Folder name in vCenter where asset resides. */
  vcenterFolder?: string;
  /** Whether the ESX is hyperthreaded. */
  esxHyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** vCenter version. */
  vcenterVersion?: string;
}

export const VmwarePlatformDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  esxVersion: Schema.optional(Schema.String),
  osid: Schema.optional(Schema.String),
  vcenterVmId: Schema.optional(Schema.String),
  vcenterUri: Schema.optional(Schema.String),
  vcenterFolder: Schema.optional(Schema.String),
  esxHyperthreading: Schema.optional(Schema.String),
  vcenterVersion: Schema.optional(Schema.String),
}).annotate({ identifier: "VmwarePlatformDetails" });

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

export const PhysicalPlatformDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
  }).annotate({ identifier: "PhysicalPlatformDetails" });

export interface PlatformDetails {
  /** Generic platform details. */
  genericDetails?: GenericPlatformDetails;
  /** AWS EC2 specific details. */
  awsEc2Details?: AwsEc2PlatformDetails;
  /** Azure VM specific details. */
  azureVmDetails?: AzureVmPlatformDetails;
  /** VMware specific details. */
  vmwareDetails?: VmwarePlatformDetails;
  /** Physical machines platform details. */
  physicalDetails?: PhysicalPlatformDetails;
}

export const PlatformDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  genericDetails: Schema.optional(GenericPlatformDetails),
  awsEc2Details: Schema.optional(AwsEc2PlatformDetails),
  azureVmDetails: Schema.optional(AzureVmPlatformDetails),
  vmwareDetails: Schema.optional(VmwarePlatformDetails),
  physicalDetails: Schema.optional(PhysicalPlatformDetails),
}).annotate({ identifier: "PlatformDetails" });

export interface DiskPartitionDetails {
  /** Optional. List of partitions. */
  partitions?: DiskPartitionList;
  /** Output only. Total capacity of all partitions. */
  totalCapacityBytes?: string;
  /** Output only. Total free space of all partitions. */
  freeSpaceBytes?: string;
}

export const DiskPartitionDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  partitions: Schema.optional(DiskPartitionList),
  totalCapacityBytes: Schema.optional(Schema.String),
  freeSpaceBytes: Schema.optional(Schema.String),
}).annotate({ identifier: "DiskPartitionDetails" });

export interface OpenFileDetails {
  /** Opened file command. */
  command?: string;
  /** Opened file user. */
  user?: string;
  /** Opened file file path. */
  filePath?: string;
  /** Opened file file type. */
  fileType?: string;
}

export const OpenFileDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  command: Schema.optional(Schema.String),
  user: Schema.optional(Schema.String),
  filePath: Schema.optional(Schema.String),
  fileType: Schema.optional(Schema.String),
}).annotate({ identifier: "OpenFileDetails" });

export interface OpenFileList {
  /** Open file details entries. */
  entries?: ReadonlyArray<OpenFileDetails>;
}

export const OpenFileList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(OpenFileDetails)),
}).annotate({ identifier: "OpenFileList" });

export interface RunningProcess {
  /** User running the process. */
  user?: string;
  /** Process extended attributes. */
  attributes?: Record<string, string>;
  /** Process binary path. */
  exePath?: string;
  /** Process full command line. */
  cmdline?: string;
  /** Process ID. */
  pid?: string;
}

export const RunningProcess = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user: Schema.optional(Schema.String),
  attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  exePath: Schema.optional(Schema.String),
  cmdline: Schema.optional(Schema.String),
  pid: Schema.optional(Schema.String),
}).annotate({ identifier: "RunningProcess" });

export interface RunningProcessList {
  /** Running process entries. */
  entries?: ReadonlyArray<RunningProcess>;
}

export const RunningProcessList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(RunningProcess)),
}).annotate({ identifier: "RunningProcessList" });

export interface GuestInstalledApplicationList {
  /** Application entries. */
  entries?: ReadonlyArray<GuestInstalledApplication>;
}

export const GuestInstalledApplicationList =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(GuestInstalledApplication)),
  }).annotate({ identifier: "GuestInstalledApplicationList" });

export interface RunningService {
  /** Service pid. */
  pid?: string;
  /** Service state (OS-agnostic). */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "PAUSED" | "STOPPED" | (string & {});
  /** Service start mode (OS-agnostic). */
  startMode?:
    | "START_MODE_UNSPECIFIED"
    | "BOOT"
    | "SYSTEM"
    | "AUTO"
    | "MANUAL"
    | "DISABLED"
    | (string & {});
  /** Service binary path. */
  exePath?: string;
  /** Service command line. */
  cmdline?: string;
  /** Service name. */
  serviceName?: string;
}

export const RunningService = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pid: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  startMode: Schema.optional(Schema.String),
  exePath: Schema.optional(Schema.String),
  cmdline: Schema.optional(Schema.String),
  serviceName: Schema.optional(Schema.String),
}).annotate({ identifier: "RunningService" });

export interface RunningServiceList {
  /** Running service entries. */
  entries?: ReadonlyArray<RunningService>;
}

export const RunningServiceList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(RunningService)),
}).annotate({ identifier: "RunningServiceList" });

export interface GuestRuntimeDetails {
  /** Open files information. */
  openFileList?: OpenFileList;
  /** Runtime network information (connections, ports). */
  network?: RuntimeNetworkInfo;
  /** Domain, e.g. c.stratozone-development.internal. */
  domain?: string;
  /** Running processes. */
  processes?: RunningProcessList;
  /** Last time the OS was booted. */
  lastBootTime?: string;
  /** Installed applications information. */
  installedApps?: GuestInstalledApplicationList;
  /** Running background services. */
  services?: RunningServiceList;
  /** Machine name. */
  machineName?: string;
}

export const GuestRuntimeDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  openFileList: Schema.optional(OpenFileList),
  network: Schema.optional(RuntimeNetworkInfo),
  domain: Schema.optional(Schema.String),
  processes: Schema.optional(RunningProcessList),
  lastBootTime: Schema.optional(Schema.String),
  installedApps: Schema.optional(GuestInstalledApplicationList),
  services: Schema.optional(RunningServiceList),
  machineName: Schema.optional(Schema.String),
}).annotate({ identifier: "GuestRuntimeDetails" });

export interface FstabEntry {
  /** The type of the filesystem. */
  vfstype?: string;
  /** Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time. */
  passno?: number;
  /** The mount point for the filesystem. */
  file?: string;
  /** Used by dump to determine which filesystems need to be dumped. */
  freq?: number;
  /** The block special device or remote filesystem to be mounted. */
  spec?: string;
  /** Mount options associated with the filesystem. */
  mntops?: string;
}

export const FstabEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vfstype: Schema.optional(Schema.String),
  passno: Schema.optional(Schema.Number),
  file: Schema.optional(Schema.String),
  freq: Schema.optional(Schema.Number),
  spec: Schema.optional(Schema.String),
  mntops: Schema.optional(Schema.String),
}).annotate({ identifier: "FstabEntry" });

export interface FstabEntryList {
  /** Fstab entries. */
  entries?: ReadonlyArray<FstabEntry>;
}

export const FstabEntryList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(FstabEntry)),
}).annotate({ identifier: "FstabEntryList" });

export interface HostsEntry {
  /** IP (raw, IPv4/6 agnostic). */
  ip?: string;
  /** List of host names / aliases. */
  hostNames?: ReadonlyArray<string>;
}

export const HostsEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ip: Schema.optional(Schema.String),
  hostNames: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "HostsEntry" });

export interface HostsEntryList {
  /** Hosts entries. */
  entries?: ReadonlyArray<HostsEntry>;
}

export const HostsEntryList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entries: Schema.optional(Schema.Array(HostsEntry)),
}).annotate({ identifier: "HostsEntryList" });

export interface GuestConfigDetails {
  /** Mount list (Linux fstab). */
  fstab?: FstabEntryList;
  /** OS issue (typically /etc/issue in Linux). */
  issue?: string;
  /** Security-Enhanced Linux (SELinux) mode. */
  selinuxMode?:
    | "SE_LINUX_MODE_UNSPECIFIED"
    | "SE_LINUX_MODE_DISABLED"
    | "SE_LINUX_MODE_PERMISSIVE"
    | "SE_LINUX_MODE_ENFORCING"
    | (string & {});
  /** Hosts file (/etc/hosts). */
  hosts?: HostsEntryList;
  /** NFS exports. */
  nfsExports?: NfsExportList;
}

export const GuestConfigDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fstab: Schema.optional(FstabEntryList),
  issue: Schema.optional(Schema.String),
  selinuxMode: Schema.optional(Schema.String),
  hosts: Schema.optional(HostsEntryList),
  nfsExports: Schema.optional(NfsExportList),
}).annotate({ identifier: "GuestConfigDetails" });

export interface GuestOsDetails {
  /** The name of the operating system. */
  osName?: string;
  /** The version of the operating system. */
  version?: string;
  /** Runtime information. */
  runtime?: GuestRuntimeDetails;
  /** What family the OS belong to, if known. */
  family?:
    | "OS_FAMILY_UNKNOWN"
    | "OS_FAMILY_WINDOWS"
    | "OS_FAMILY_LINUX"
    | "OS_FAMILY_UNIX"
    | (string & {});
  /** OS and app configuration. */
  config?: GuestConfigDetails;
}

export const GuestOsDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osName: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  runtime: Schema.optional(GuestRuntimeDetails),
  family: Schema.optional(Schema.String),
  config: Schema.optional(GuestConfigDetails),
}).annotate({ identifier: "GuestOsDetails" });

export interface MachineDetails {
  /** Disk details. */
  disks?: MachineDiskDetails;
  /** Architecture details (vendor, CPU architecture). */
  architecture?: MachineArchitectureDetails;
  /** Network details. */
  network?: MachineNetworkDetails;
  /** Machine creation time. */
  createTime?: string;
  /** Machine unique identifier. */
  uuid?: string;
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
  /** Platform specific information. */
  platform?: PlatformDetails;
  /** The amount of memory in the machine. Must be non-negative. */
  memoryMb?: number;
  /** Optional. Disk partitions details. Note: Partitions are not necessarily mounted on local disks and therefore might not have a one-to-one correspondence with local disks. */
  diskPartitions?: DiskPartitionDetails;
  /** Machine name. */
  machineName?: string;
  /** Guest OS information. */
  guestOs?: GuestOsDetails;
  /** Number of logical CPU cores in the machine. Must be non-negative. */
  coreCount?: number;
}

export const MachineDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disks: Schema.optional(MachineDiskDetails),
  architecture: Schema.optional(MachineArchitectureDetails),
  network: Schema.optional(MachineNetworkDetails),
  createTime: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  powerState: Schema.optional(Schema.String),
  platform: Schema.optional(PlatformDetails),
  memoryMb: Schema.optional(Schema.Number),
  diskPartitions: Schema.optional(DiskPartitionDetails),
  machineName: Schema.optional(Schema.String),
  guestOs: Schema.optional(GuestOsDetails),
  coreCount: Schema.optional(Schema.Number),
}).annotate({ identifier: "MachineDetails" });

export interface GenericInsight {
  /** Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. */
  defaultMessage?: string;
  /** Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links. */
  additionalInformation?: ReadonlyArray<string>;
  /** Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead. */
  messageId?: string;
}

export const GenericInsight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultMessage: Schema.optional(Schema.String),
  additionalInformation: Schema.optional(Schema.Array(Schema.String)),
  messageId: Schema.optional(Schema.String),
}).annotate({ identifier: "GenericInsight" });

export interface Insight {
  /** Output only. An insight about potential migrations for an asset. */
  migrationInsight?: MigrationInsight;
  /** Output only. A generic insight about an asset. */
  genericInsight?: GenericInsight;
}

export const Insight = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  migrationInsight: Schema.optional(MigrationInsight),
  genericInsight: Schema.optional(GenericInsight),
}).annotate({ identifier: "Insight" });

export interface InsightList {
  /** Output only. Update timestamp. */
  updateTime?: string;
  /** Output only. Insights of the list. */
  insights?: ReadonlyArray<Insight>;
}

export const InsightList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  insights: Schema.optional(Schema.Array(Insight)),
}).annotate({ identifier: "InsightList" });

export interface PostgreSqlProperty {
  /** Required. The property is enabled. */
  enabled?: boolean;
  /** Required. The property numeric value. */
  numericValue?: string;
  /** Required. The property name. */
  property?: string;
}

export const PostgreSqlProperty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enabled: Schema.optional(Schema.Boolean),
  numericValue: Schema.optional(Schema.String),
  property: Schema.optional(Schema.String),
}).annotate({ identifier: "PostgreSqlProperty" });

export interface PostgreSqlSetting {
  /** Required. The setting int value. */
  intValue?: string;
  /** Required. The setting boolean value. */
  boolValue?: boolean;
  /** Required. The setting string value. Notice that enum values are stored as strings. */
  stringValue?: string;
  /** Optional. The setting unit. */
  unit?: string;
  /** Required. The setting real value. */
  realValue?: number;
  /** Required. The setting name. */
  setting?: string;
  /** Required. The setting source. */
  source?: string;
}

export const PostgreSqlSetting = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  intValue: Schema.optional(Schema.String),
  boolValue: Schema.optional(Schema.Boolean),
  stringValue: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  realValue: Schema.optional(Schema.Number),
  setting: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
}).annotate({ identifier: "PostgreSqlSetting" });

export interface PostgreSqlDatabaseDeployment {
  /** Optional. List of PostgreSql properties. */
  properties?: ReadonlyArray<PostgreSqlProperty>;
  /** Optional. List of PostgreSql settings. */
  settings?: ReadonlyArray<PostgreSqlSetting>;
}

export const PostgreSqlDatabaseDeployment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Array(PostgreSqlProperty)),
    settings: Schema.optional(Schema.Array(PostgreSqlSetting)),
  }).annotate({ identifier: "PostgreSqlDatabaseDeployment" });

export interface MySqlPlugin {
  /** Required. The plugin name. */
  plugin?: string;
  /** Required. The plugin is active. */
  enabled?: boolean;
  /** Required. The plugin version. */
  version?: string;
}

export const MySqlPlugin = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  plugin: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "MySqlPlugin" });

export interface MySqlVariable {
  /** Required. The variable value. */
  value?: string;
  /** Required. The variable category. */
  category?: string;
  /** Required. The variable name. */
  variable?: string;
}

export const MySqlVariable = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  variable: Schema.optional(Schema.String),
}).annotate({ identifier: "MySqlVariable" });

export interface MySqlProperty {
  /** Required. The property numeric value. */
  numericValue?: string;
  /** Required. The property is enabled. */
  enabled?: boolean;
  /** Required. The property name. */
  property?: string;
}

export const MySqlProperty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  numericValue: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  property: Schema.optional(Schema.String),
}).annotate({ identifier: "MySqlProperty" });

export interface MysqlDatabaseDeployment {
  /** Optional. List of MySql plugins. */
  plugins?: ReadonlyArray<MySqlPlugin>;
  /** Optional. List of MySql variables. */
  variables?: ReadonlyArray<MySqlVariable>;
  /** Optional. Number of resource groups. */
  resourceGroupsCount?: number;
  /** Optional. List of MySql properties. */
  properties?: ReadonlyArray<MySqlProperty>;
}

export const MysqlDatabaseDeployment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plugins: Schema.optional(Schema.Array(MySqlPlugin)),
    variables: Schema.optional(Schema.Array(MySqlVariable)),
    resourceGroupsCount: Schema.optional(Schema.Number),
    properties: Schema.optional(Schema.Array(MySqlProperty)),
  }).annotate({ identifier: "MysqlDatabaseDeployment" });

export interface DatabaseInstanceNetwork {
  /** Optional. The instance's primary MAC address. */
  primaryMacAddress?: string;
  /** Optional. The instance's IP addresses. */
  ipAddresses?: ReadonlyArray<string>;
  /** Optional. The instance's host names. */
  hostNames?: ReadonlyArray<string>;
}

export const DatabaseInstanceNetwork =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryMacAddress: Schema.optional(Schema.String),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    hostNames: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DatabaseInstanceNetwork" });

export interface DatabaseInstance {
  /** Optional. The instance role in the database engine. */
  role?:
    | "ROLE_UNSPECIFIED"
    | "PRIMARY"
    | "SECONDARY"
    | "ARBITER"
    | (string & {});
  /** Optional. The instance's name. */
  instanceName?: string;
  /** Optional. Networking details. */
  network?: DatabaseInstanceNetwork;
}

export const DatabaseInstance = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(Schema.String),
  instanceName: Schema.optional(Schema.String),
  network: Schema.optional(DatabaseInstanceNetwork),
}).annotate({ identifier: "DatabaseInstance" });

export interface DatabaseDeploymentTopology {
  /** Optional. List of database instances. */
  instances?: ReadonlyArray<DatabaseInstance>;
  /** Optional. Number of total logical cores. */
  coreCount?: number;
  /** Optional. Number of total logical cores limited by db deployment. */
  coreLimit?: number;
  /** Optional. Disk allocated in bytes. */
  diskAllocatedBytes?: string;
  /** Optional. Disk used in bytes. */
  diskUsedBytes?: string;
  /** Optional. Total memory in bytes limited by db deployment. */
  memoryLimitBytes?: string;
  /** Optional. Number of total physical cores. */
  physicalCoreCount?: number;
  /** Optional. Total memory in bytes. */
  memoryBytes?: string;
  /** Optional. Number of total physical cores limited by db deployment. */
  physicalCoreLimit?: number;
}

export const DatabaseDeploymentTopology =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(Schema.Array(DatabaseInstance)),
    coreCount: Schema.optional(Schema.Number),
    coreLimit: Schema.optional(Schema.Number),
    diskAllocatedBytes: Schema.optional(Schema.String),
    diskUsedBytes: Schema.optional(Schema.String),
    memoryLimitBytes: Schema.optional(Schema.String),
    physicalCoreCount: Schema.optional(Schema.Number),
    memoryBytes: Schema.optional(Schema.String),
    physicalCoreLimit: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DatabaseDeploymentTopology" });

export interface SqlServerTraceFlag {
  /** Required. The trace flag name. */
  traceFlagName?: string;
  /** Required. The trace flag scope. */
  scope?: "SCOPE_UNSPECIFIED" | "OFF" | "GLOBAL" | "SESSION" | (string & {});
}

export const SqlServerTraceFlag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  traceFlagName: Schema.optional(Schema.String),
  scope: Schema.optional(Schema.String),
}).annotate({ identifier: "SqlServerTraceFlag" });

export interface SqlServerFeature {
  /** Required. The feature name. */
  featureName?: string;
  /** Required. Field enabled is set when a feature is used on the source deployment. */
  enabled?: boolean;
}

export const SqlServerFeature = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const SqlServerServerFlag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const SqlServerDatabaseDeployment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    traceFlags: Schema.optional(Schema.Array(SqlServerTraceFlag)),
    features: Schema.optional(Schema.Array(SqlServerFeature)),
    serverFlags: Schema.optional(Schema.Array(SqlServerServerFlag)),
  }).annotate({ identifier: "SqlServerDatabaseDeployment" });

export interface DatabaseDeploymentDetails {
  /** Optional. A manual unique ID set by the user. */
  manualUniqueId?: string;
  /** Optional. The database deployment generated ID. */
  generatedId?: string;
  /** Optional. Details of a PostgreSQL database deployment. */
  postgresql?: PostgreSqlDatabaseDeployment;
  /** Output only. Aggregated stats for the database deployment. */
  aggregatedStats?: DatabaseDeploymentDetailsAggregatedStats;
  /** Optional. The database deployment version. */
  version?: string;
  /** Optional. Details of a MYSQL database deployment. */
  mysql?: MysqlDatabaseDeployment;
  /** Optional. Details of the database deployment topology. */
  topology?: DatabaseDeploymentTopology;
  /** Optional. Details of an AWS RDS instance. */
  awsRds?: AwsRds;
  /** Optional. The database deployment edition. */
  edition?: string;
  /** Optional. Details of a Microsoft SQL Server database deployment. */
  sqlServer?: SqlServerDatabaseDeployment;
}

export const DatabaseDeploymentDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manualUniqueId: Schema.optional(Schema.String),
    generatedId: Schema.optional(Schema.String),
    postgresql: Schema.optional(PostgreSqlDatabaseDeployment),
    aggregatedStats: Schema.optional(DatabaseDeploymentDetailsAggregatedStats),
    version: Schema.optional(Schema.String),
    mysql: Schema.optional(MysqlDatabaseDeployment),
    topology: Schema.optional(DatabaseDeploymentTopology),
    awsRds: Schema.optional(AwsRds),
    edition: Schema.optional(Schema.String),
    sqlServer: Schema.optional(SqlServerDatabaseDeployment),
  }).annotate({ identifier: "DatabaseDeploymentDetails" });

export interface DailyResourceUsageAggregationCPU {
  /** CPU utilization percentage. */
  utilizationPercentage?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationCPU =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationPercentage: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationCPU" });

export interface DailyResourceUsageAggregationMemory {
  /** Memory utilization percentage. */
  utilizationPercentage?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationMemory =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationPercentage: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationMemory" });

export interface DailyResourceUsageAggregationDisk {
  /** Optional. Disk I/O operations per second. */
  iops?: DailyResourceUsageAggregationStats;
  /** Optional. Disk read I/O operations per second. */
  readIops?: DailyResourceUsageAggregationStats;
  /** Optional. Disk write I/O operations per second. */
  writeIops?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationDisk =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    iops: Schema.optional(DailyResourceUsageAggregationStats),
    readIops: Schema.optional(DailyResourceUsageAggregationStats),
    writeIops: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationDisk" });

export interface DailyResourceUsageAggregation {
  /** CPU usage. */
  cpu?: DailyResourceUsageAggregationCPU;
  /** Memory usage. */
  memory?: DailyResourceUsageAggregationMemory;
  /** Disk usage. */
  disk?: DailyResourceUsageAggregationDisk;
  /** Aggregation date. Day boundaries are at midnight UTC. */
  date?: Migrationcenter_Date;
  /** Network usage. */
  network?: DailyResourceUsageAggregationNetwork;
}

export const DailyResourceUsageAggregation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpu: Schema.optional(DailyResourceUsageAggregationCPU),
    memory: Schema.optional(DailyResourceUsageAggregationMemory),
    disk: Schema.optional(DailyResourceUsageAggregationDisk),
    date: Schema.optional(Migrationcenter_Date),
    network: Schema.optional(DailyResourceUsageAggregationNetwork),
  }).annotate({ identifier: "DailyResourceUsageAggregation" });

export interface AssetPerformanceData {
  /** Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent. */
  dailyResourceUsageAggregations?: ReadonlyArray<DailyResourceUsageAggregation>;
}

export const AssetPerformanceData = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dailyResourceUsageAggregations: Schema.optional(
    Schema.Array(DailyResourceUsageAggregation),
  ),
}).annotate({ identifier: "AssetPerformanceData" });

export interface DatabaseDetailsParentDatabaseDeployment {
  /** Optional. The parent database deployment generated ID. */
  generatedId?: string;
  /** Optional. The parent database deployment optional manual unique ID set by the user. */
  manualUniqueId?: string;
}

export const DatabaseDetailsParentDatabaseDeployment =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatedId: Schema.optional(Schema.String),
    manualUniqueId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseDetailsParentDatabaseDeployment" });

export interface DatabaseObjects {
  /** Optional. The category of the objects. */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "TABLE"
    | "INDEX"
    | "CONSTRAINTS"
    | "VIEWS"
    | "SOURCE_CODE"
    | "OTHER"
    | (string & {});
  /** Optional. The number of objects. */
  count?: string;
}

export const DatabaseObjects = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  category: Schema.optional(Schema.String),
  count: Schema.optional(Schema.String),
}).annotate({ identifier: "DatabaseObjects" });

export interface SqlServerSchemaDetails {
  /** Optional. SqlServer number of CLR objects. */
  clrObjectCount?: number;
}

export const SqlServerSchemaDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    clrObjectCount: Schema.optional(Schema.Number),
  },
).annotate({ identifier: "SqlServerSchemaDetails" });

export interface PostgreSqlExtension {
  /** Required. The extension name. */
  extension?: string;
  /** Required. The extension version. */
  version?: string;
}

export const PostgreSqlExtension = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  extension: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "PostgreSqlExtension" });

export interface PostgreSqlSchemaDetails {
  /** Optional. PostgreSql foreign tables. */
  foreignTablesCount?: number;
  /** Optional. PostgreSql extensions. */
  postgresqlExtensions?: ReadonlyArray<PostgreSqlExtension>;
}

export const PostgreSqlSchemaDetails =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    foreignTablesCount: Schema.optional(Schema.Number),
    postgresqlExtensions: Schema.optional(Schema.Array(PostgreSqlExtension)),
  }).annotate({ identifier: "PostgreSqlSchemaDetails" });

export interface MySqlSchemaDetails {
  /** Optional. Mysql storage engine tables. */
  storageEngines?: ReadonlyArray<MySqlStorageEngineDetails>;
}

export const MySqlSchemaDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  storageEngines: Schema.optional(Schema.Array(MySqlStorageEngineDetails)),
}).annotate({ identifier: "MySqlSchemaDetails" });

export interface DatabaseSchema {
  /** Required. The name of the schema. */
  schemaName?: string;
  /** Optional. The total size of tables in bytes. */
  tablesSizeBytes?: string;
  /** Optional. List of details of objects by category. */
  objects?: ReadonlyArray<DatabaseObjects>;
  /** Optional. Details of a SqlServer schema. */
  sqlServer?: SqlServerSchemaDetails;
  /** Optional. Details of a PostgreSql schema. */
  postgresql?: PostgreSqlSchemaDetails;
  /** Optional. Details of a Mysql schema. */
  mysql?: MySqlSchemaDetails;
}

export const DatabaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemaName: Schema.optional(Schema.String),
  tablesSizeBytes: Schema.optional(Schema.String),
  objects: Schema.optional(Schema.Array(DatabaseObjects)),
  sqlServer: Schema.optional(SqlServerSchemaDetails),
  postgresql: Schema.optional(PostgreSqlSchemaDetails),
  mysql: Schema.optional(MySqlSchemaDetails),
}).annotate({ identifier: "DatabaseSchema" });

export interface DatabaseDetails {
  /** Required. The name of the database. */
  databaseName?: string;
  /** Required. The parent database deployment that contains the logical database. */
  parentDatabaseDeployment?: DatabaseDetailsParentDatabaseDeployment;
  /** Optional. The allocated storage for the database in bytes. */
  allocatedStorageBytes?: string;
  /** Optional. The database schemas. */
  schemas?: ReadonlyArray<DatabaseSchema>;
}

export const DatabaseDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseName: Schema.optional(Schema.String),
  parentDatabaseDeployment: Schema.optional(
    DatabaseDetailsParentDatabaseDeployment,
  ),
  allocatedStorageBytes: Schema.optional(Schema.String),
  schemas: Schema.optional(Schema.Array(DatabaseSchema)),
}).annotate({ identifier: "DatabaseDetails" });

export interface Asset {
  /** Output only. The list of sources contributing to the asset. */
  sources?: ReadonlyArray<string>;
  /** Output only. The full name of the asset. */
  name?: string;
  /** Output only. Asset information specific for virtual and physical machines. */
  machineDetails?: MachineDetails;
  /** Optional. Indicates if the asset is hidden. */
  hidden?: boolean;
  /** Optional. An optional reason for marking this asset as hidden. */
  hideReason?: string;
  /** Output only. The list of groups that the asset is assigned to. */
  assignedGroups?: ReadonlyArray<string>;
  /** Output only. The timestamp when the asset was marked as hidden. */
  hideTime?: string;
  /** Output only. The list of insights associated with the asset. */
  insightList?: InsightList;
  /** Output only. The timestamp when the asset was last updated. */
  updateTime?: string;
  /** Output only. Asset information specific for database deployments. */
  databaseDeploymentDetails?: DatabaseDeploymentDetails;
  /** Output only. Performance data for the asset. */
  performanceData?: AssetPerformanceData;
  /** Output only. Asset information specific for logical databases. */
  databaseDetails?: DatabaseDetails;
  /** Generic asset attributes. */
  attributes?: Record<string, string>;
  /** Output only. The timestamp when the asset was created. */
  createTime?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Server generated human readable name of the asset. */
  title?: string;
}

export const Asset = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sources: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.optional(Schema.String),
  machineDetails: Schema.optional(MachineDetails),
  hidden: Schema.optional(Schema.Boolean),
  hideReason: Schema.optional(Schema.String),
  assignedGroups: Schema.optional(Schema.Array(Schema.String)),
  hideTime: Schema.optional(Schema.String),
  insightList: Schema.optional(InsightList),
  updateTime: Schema.optional(Schema.String),
  databaseDeploymentDetails: Schema.optional(DatabaseDeploymentDetails),
  performanceData: Schema.optional(AssetPerformanceData),
  databaseDetails: Schema.optional(DatabaseDetails),
  attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Asset" });

export interface UpdateAssetRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Required. The resource being updated. */
  asset?: Asset;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const UpdateAssetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateMask: Schema.optional(Schema.String),
  asset: Schema.optional(Asset),
  requestId: Schema.optional(Schema.String),
}).annotate({ identifier: "UpdateAssetRequest" });

export interface BatchUpdateAssetsRequest {
  /** Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch. */
  requests?: ReadonlyArray<UpdateAssetRequest>;
}

export const BatchUpdateAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateAssetRequest)),
  }).annotate({ identifier: "BatchUpdateAssetsRequest" });

export interface Settings {
  /** Output only. The name of the resource. */
  name?: string;
  /** Disable Cloud Logging for the Migration Center API. Users are billed for the logs. */
  disableCloudLogging?: boolean;
  /** The preference set used by default for a project. */
  preferenceSet?: string;
}

export const Settings = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  disableCloudLogging: Schema.optional(Schema.Boolean),
  preferenceSet: Schema.optional(Schema.String),
}).annotate({ identifier: "Settings" });

export interface AggregationResultHistogramBucket {
  /** Count of items in the bucket. */
  count?: string;
  /** Lower bound - inclusive. */
  lowerBound?: number;
  /** Upper bound - exclusive. */
  upperBound?: number;
}

export const AggregationResultHistogramBucket =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    lowerBound: Schema.optional(Schema.Number),
    upperBound: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregationResultHistogramBucket" });

export interface SignedUriDestination {
  /** Required. The file format to export. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "CSV" | "XLSX" | (string & {});
}

export const SignedUriDestination = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fileFormat: Schema.optional(Schema.String),
}).annotate({ identifier: "SignedUriDestination" });

export interface AggregationFrequency {}

export const AggregationFrequency = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AggregationFrequency" });

export interface BatchUpdateAssetsResponse {
  /** Update asset content. The content only includes values after field mask being applied. */
  assets?: ReadonlyArray<Asset>;
}

export const BatchUpdateAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(Asset)),
  }).annotate({ identifier: "BatchUpdateAssetsResponse" });

export interface AggregationCount {}

export const AggregationCount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AggregationCount" });

export interface Aggregation {
  /** Sum over a numeric field. */
  sum?: AggregationSum;
  /** Count the number of matching objects. */
  count?: AggregationCount;
  /** Creates a bucketed histogram of field values. */
  histogram?: AggregationHistogram;
  /** Creates a frequency distribution of all field values. */
  frequency?: AggregationFrequency;
  /** The name of the field on which to aggregate. */
  field?: string;
}

export const Aggregation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sum: Schema.optional(AggregationSum),
  count: Schema.optional(AggregationCount),
  histogram: Schema.optional(AggregationHistogram),
  frequency: Schema.optional(AggregationFrequency),
  field: Schema.optional(Schema.String),
}).annotate({ identifier: "Aggregation" });

export interface AggregateAssetsValuesRequest {
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
  /** Array of aggregations to perform. Up to 25 aggregations can be defined. */
  aggregations?: ReadonlyArray<Aggregation>;
  /** Optional. The aggregation will be performed on assets that match the provided filter. */
  filter?: string;
}

export const AggregateAssetsValuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showHidden: Schema.optional(Schema.Boolean),
    aggregations: Schema.optional(Schema.Array(Aggregation)),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregateAssetsValuesRequest" });

export interface ImportJob {
  /** Output only. The timestamp when the import job was completed. */
  completeTime?: string;
  /** Output only. The timestamp when the import job was created. */
  createTime?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. User-friendly display name. Maximum length is 256 characters. */
  displayName?: string;
  /** Output only. The report with the validation results of the import job. */
  validationReport?: ValidationReport;
  /** Required. Reference to a source. */
  assetSource?: string;
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
  /** Output only. The report with the results of running the import job. */
  executionReport?: ExecutionReport;
  /** Output only. The full name of the import job. */
  name?: string;
  /** Output only. The timestamp when the import job was last updated. */
  updateTime?: string;
}

export const ImportJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  completeTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  displayName: Schema.optional(Schema.String),
  validationReport: Schema.optional(ValidationReport),
  assetSource: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  executionReport: Schema.optional(ExecutionReport),
  name: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
}).annotate({ identifier: "ImportJob" });

export interface ListImportJobsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of import jobs. */
  importJobs?: ReadonlyArray<ImportJob>;
}

export const ListImportJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    importJobs: Schema.optional(Schema.Array(ImportJob)),
  },
).annotate({ identifier: "ListImportJobsResponse" });

export interface NetworkUsageSample {
  /** Average network ingress in B/s sampled over a short window. Must be non-negative. */
  averageIngressBps?: number;
  /** Average network egress in B/s sampled over a short window. Must be non-negative. */
  averageEgressBps?: number;
}

export const NetworkUsageSample = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  averageIngressBps: Schema.optional(Schema.Number),
  averageEgressBps: Schema.optional(Schema.Number),
}).annotate({ identifier: "NetworkUsageSample" });

export interface DiskUsageSample {
  /** Optional. Average read IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored. */
  averageReadIops?: number;
  /** Optional. Average IOPS sampled over a short window. Must be non-negative. If read or write are set, the sum of read and write will override the value of the average_iops. */
  averageIops?: number;
  /** Optional. Average write IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored. */
  averageWriteIops?: number;
}

export const DiskUsageSample = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  averageReadIops: Schema.optional(Schema.Number),
  averageIops: Schema.optional(Schema.Number),
  averageWriteIops: Schema.optional(Schema.Number),
}).annotate({ identifier: "DiskUsageSample" });

export interface CpuUsageSample {
  /** Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage. */
  utilizedPercentage?: number;
}

export const CpuUsageSample = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  utilizedPercentage: Schema.optional(Schema.Number),
}).annotate({ identifier: "CpuUsageSample" });

export interface PerformanceSample {
  /** Network usage sample. */
  network?: NetworkUsageSample;
  /** Time the sample was collected. If omitted, the frame report time will be used. */
  sampleTime?: string;
  /** Memory usage sample. */
  memory?: MemoryUsageSample;
  /** Disk usage sample. */
  disk?: DiskUsageSample;
  /** CPU usage sample. */
  cpu?: CpuUsageSample;
}

export const PerformanceSample = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  network: Schema.optional(NetworkUsageSample),
  sampleTime: Schema.optional(Schema.String),
  memory: Schema.optional(MemoryUsageSample),
  disk: Schema.optional(DiskUsageSample),
  cpu: Schema.optional(CpuUsageSample),
}).annotate({ identifier: "PerformanceSample" });

export interface AssetFrame {
  /** Asset information specific for logical databases. */
  databaseDetails?: DatabaseDetails;
  /** The time the data was reported. */
  reportTime?: string;
  /** Optional. Frame collection type, if not specified the collection type will be based on the source type of the source the frame was reported on. */
  collectionType?:
    | "SOURCE_TYPE_UNKNOWN"
    | "SOURCE_TYPE_UPLOAD"
    | "SOURCE_TYPE_GUEST_OS_SCAN"
    | "SOURCE_TYPE_INVENTORY_SCAN"
    | "SOURCE_TYPE_CUSTOM"
    | "SOURCE_TYPE_DISCOVERY_CLIENT"
    | (string & {});
  /** Asset information specific for virtual machines. */
  machineDetails?: MachineDetails;
  /** Asset information specific for database deployments. */
  databaseDeploymentDetails?: DatabaseDeploymentDetails;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Trace token is optionally provided to assist with debugging and traceability. */
  traceToken?: string;
  /** Asset performance data samples. Samples that are from more than 40 days ago or after tomorrow are ignored. */
  performanceSamples?: ReadonlyArray<PerformanceSample>;
  /** Generic asset attributes. */
  attributes?: Record<string, string>;
}

export const AssetFrame = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseDetails: Schema.optional(DatabaseDetails),
  reportTime: Schema.optional(Schema.String),
  collectionType: Schema.optional(Schema.String),
  machineDetails: Schema.optional(MachineDetails),
  databaseDeploymentDetails: Schema.optional(DatabaseDeploymentDetails),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  traceToken: Schema.optional(Schema.String),
  performanceSamples: Schema.optional(Schema.Array(PerformanceSample)),
  attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "AssetFrame" });

export interface FrameViolationEntry {
  /** The field of the original frame where the violation occurred. */
  field?: string;
  /** A message describing the violation. */
  violation?: string;
}

export const FrameViolationEntry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  field: Schema.optional(Schema.String),
  violation: Schema.optional(Schema.String),
}).annotate({ identifier: "FrameViolationEntry" });

export interface ErrorFrame {
  /** Output only. The frame that was originally reported. */
  originalFrame?: AssetFrame;
  /** Output only. Frame ingestion time. */
  ingestionTime?: string;
  /** Output only. The identifier of the ErrorFrame. */
  name?: string;
  /** Output only. All the violations that were detected for the frame. */
  violations?: ReadonlyArray<FrameViolationEntry>;
}

export const ErrorFrame = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  originalFrame: Schema.optional(AssetFrame),
  ingestionTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  violations: Schema.optional(Schema.Array(FrameViolationEntry)),
}).annotate({ identifier: "ErrorFrame" });

export interface ListErrorFramesResponse {
  /** The list of error frames. */
  errorFrames?: ReadonlyArray<ErrorFrame>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListErrorFramesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorFrames: Schema.optional(Schema.Array(ErrorFrame)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListErrorFramesResponse" });

export interface AssetList {
  /** Required. A list of asset IDs */
  assetIds?: ReadonlyArray<string>;
}

export const AssetList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assetIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AssetList" });

export interface RemoveAssetsFromGroupRequest {
  /** Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000. */
  assets?: AssetList;
  /** Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
  allowMissing?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RemoveAssetsFromGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(AssetList),
    allowMissing: Schema.optional(Schema.Boolean),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveAssetsFromGroupRequest" });

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

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  error: Schema.optional(Status),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.String),
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  done: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "Operation" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  },
).annotate({ identifier: "ListOperationsResponse" });

export interface ReportConfig {
  /** Output only. The timestamp when the resource was last updated. */
  updateTime?: string;
  /** Output only. Name of resource. */
  name?: string;
  /** Free-text description. */
  description?: string;
  /** Required. Collection of combinations of groups and preference sets. */
  groupPreferencesetAssignments?: ReadonlyArray<ReportConfigGroupPreferenceSetAssignment>;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
}

export const ReportConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  groupPreferencesetAssignments: Schema.optional(
    Schema.Array(ReportConfigGroupPreferenceSetAssignment),
  ),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "ReportConfig" });

export interface ListReportConfigsResponse {
  /** A list of report configs. */
  reportConfigs?: ReadonlyArray<ReportConfig>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportConfigs: Schema.optional(Schema.Array(ReportConfig)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListReportConfigsResponse" });

export interface DiscoveryClient {
  /** Output only. Identifier. Full name of this discovery client. */
  name?: string;
  /** Required. Service account used by the discovery client for various operation. */
  serviceAccount?: string;
  /** Output only. This field is intended for internal use. */
  signalsEndpoint?: string;
  /** Output only. Client version, as reported in recent heartbeat. */
  version?: string;
  /** Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time. */
  expireTime?: string;
  /** Output only. Current state of the discovery client. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "OFFLINE"
    | "DEGRADED"
    | "EXPIRED"
    | (string & {});
  /** Optional. Free text description. Maximum length is 1000 characters. */
  description?: string;
  /** Output only. Errors affecting client functionality. */
  errors?: ReadonlyArray<Status>;
  /** Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the `heartbeat_time` field. */
  updateTime?: string;
  /** Required. Immutable. Full name of the source object associated with this discovery client. */
  source?: string;
  /** Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the `expire_time` field. */
  ttl?: string;
  /** Optional. Free text display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. Time when the discovery client was first created. */
  createTime?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes). */
  heartbeatTime?: string;
}

export const DiscoveryClient = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  serviceAccount: Schema.optional(Schema.String),
  signalsEndpoint: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  expireTime: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  errors: Schema.optional(Schema.Array(Status)),
  updateTime: Schema.optional(Schema.String),
  source: Schema.optional(Schema.String),
  ttl: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  heartbeatTime: Schema.optional(Schema.String),
}).annotate({ identifier: "DiscoveryClient" });

export interface Report {
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Output only. Summary view of the Report. */
  summary?: ReportSummary;
  /** Output only. Name of resource. */
  name?: string;
  /** Free-text description. */
  description?: string;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. Creation timestamp. */
  createTime?: string;
  /** Report type. */
  type?: "TYPE_UNSPECIFIED" | "TOTAL_COST_OF_OWNERSHIP" | (string & {});
  /** Report creation state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
}

export const Report = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  summary: Schema.optional(ReportSummary),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "Report" });

export interface ListAssetsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** A list of assets. */
  assets?: ReadonlyArray<Asset>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListAssetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  assets: Schema.optional(Schema.Array(Asset)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListAssetsResponse" });

export interface AssetsExportJobNetworkDependencies {}

export const AssetsExportJobNetworkDependencies =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AssetsExportJobNetworkDependencies",
  });

export interface PreferenceSet {
  /** Output only. Name of the preference set. */
  name?: string;
  /** A description of the preference set. */
  description?: string;
  /** Output only. The timestamp when the preference set was last updated. */
  updateTime?: string;
  /** Optional. A set of preferences that applies to all virtual machines in the context. */
  virtualMachinePreferences?: VirtualMachinePreferences;
  /** Output only. The timestamp when the preference set was created. */
  createTime?: string;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
}

export const PreferenceSet = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  virtualMachinePreferences: Schema.optional(VirtualMachinePreferences),
  createTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "PreferenceSet" });

export interface ListPreferenceSetsResponse {
  /** The list of PreferenceSets */
  preferenceSets?: ReadonlyArray<PreferenceSet>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferenceSets: Schema.optional(Schema.Array(PreferenceSet)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPreferenceSetsResponse" });

export interface Group {
  /** Output only. The timestamp when the group was last updated. */
  updateTime?: string;
  /** Output only. The name of the group. */
  name?: string;
  /** Optional. The description of the group. */
  description?: string;
  /** Optional. User-friendly display name. */
  displayName?: string;
  /** Output only. The timestamp when the group was created. */
  createTime?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
}

export const Group = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  updateTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Group" });

export interface Frames {
  /** A repeated field of asset data. */
  framesData?: ReadonlyArray<AssetFrame>;
}

export const Frames = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  framesData: Schema.optional(Schema.Array(AssetFrame)),
}).annotate({ identifier: "Frames" });

export interface AggregationResultHistogram {
  /** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
  buckets?: ReadonlyArray<AggregationResultHistogramBucket>;
}

export const AggregationResultHistogram =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(AggregationResultHistogramBucket)),
  }).annotate({ identifier: "AggregationResultHistogram" });

export interface SignedUris {
  /** Output only. List of signed URIs. */
  signedUris?: ReadonlyArray<SignedUri>;
}

export const SignedUris = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  signedUris: Schema.optional(Schema.Array(SignedUri)),
}).annotate({ identifier: "SignedUris" });

export interface AssetsExportJobExecutionResult {
  /** Output only. Signed URLs for downloading export artifacts. */
  signedUris?: SignedUris;
  /** Output only. List of output files. */
  outputFiles?: OutputFileList;
  /** Output only. Error encountered during export. */
  error?: Status;
}

export const AssetsExportJobExecutionResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signedUris: Schema.optional(SignedUris),
    outputFiles: Schema.optional(OutputFileList),
    error: Schema.optional(Status),
  }).annotate({ identifier: "AssetsExportJobExecutionResult" });

export interface AssetsExportJobExecution {
  /** Output only. Execution timestamp. */
  startTime?: string;
  /** Output only. Completion time of the export. */
  endTime?: string;
  /** Output only. Globally unique identifier of the execution. */
  executionId?: string;
  /** Output only. Number of assets requested for export after resolving the requested filters. */
  requestedAssetCount?: number;
  /** Output only. Expiration time for the export and artifacts. */
  expireTime?: string;
  /** Output only. Result of the export execution. */
  result?: AssetsExportJobExecutionResult;
}

export const AssetsExportJobExecution =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    executionId: Schema.optional(Schema.String),
    requestedAssetCount: Schema.optional(Schema.Number),
    expireTime: Schema.optional(Schema.String),
    result: Schema.optional(AssetsExportJobExecutionResult),
  }).annotate({ identifier: "AssetsExportJobExecution" });

export interface AssetsExportJobInventory {}

export const AssetsExportJobInventory =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AssetsExportJobInventory",
  });

export interface ListDiscoveryClientsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of discovery clients. */
  discoveryClients?: ReadonlyArray<DiscoveryClient>;
}

export const ListDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    discoveryClients: Schema.optional(Schema.Array(DiscoveryClient)),
  }).annotate({ identifier: "ListDiscoveryClientsResponse" });

export interface CascadeLogicalDBsRule {}

export const CascadeLogicalDBsRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CascadeLogicalDBsRule" });

export interface CascadingRule {
  /** Cascading rule for related logical DBs. */
  cascadeLogicalDbs?: CascadeLogicalDBsRule;
}

export const CascadingRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cascadeLogicalDbs: Schema.optional(CascadeLogicalDBsRule),
}).annotate({ identifier: "CascadingRule" });

export interface RunAssetsExportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunAssetsExportJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunAssetsExportJobRequest" });

export interface ValidateImportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const ValidateImportJobRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateImportJobRequest" });

export interface SendDiscoveryClientHeartbeatRequest {
  /** Optional. Client application version. */
  version?: string;
  /** Optional. Errors affecting client functionality. */
  errors?: ReadonlyArray<Status>;
}

export const SendDiscoveryClientHeartbeatRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "SendDiscoveryClientHeartbeatRequest" });

export interface AggregationResultSum {
  value?: number;
}

export const AggregationResultSum = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Number),
}).annotate({ identifier: "AggregationResultSum" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface AggregationResultFrequency {
  values?: Record<string, string>;
}

export const AggregationResultFrequency =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AggregationResultFrequency" });

export interface Location {
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  locationId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Location" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface AggregationResultCount {
  value?: string;
}

export const AggregationResultCount = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(Schema.String),
  },
).annotate({ identifier: "AggregationResultCount" });

export interface AggregationResult {
  sum?: AggregationResultSum;
  count?: AggregationResultCount;
  histogram?: AggregationResultHistogram;
  field?: string;
  frequency?: AggregationResultFrequency;
}

export const AggregationResult = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sum: Schema.optional(AggregationResultSum),
  count: Schema.optional(AggregationResultCount),
  histogram: Schema.optional(AggregationResultHistogram),
  field: Schema.optional(Schema.String),
  frequency: Schema.optional(AggregationResultFrequency),
}).annotate({ identifier: "AggregationResult" });

export interface AggregateAssetsValuesResponse {
  /** The aggregation results. */
  results?: ReadonlyArray<AggregationResult>;
}

export const AggregateAssetsValuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(AggregationResult)),
  }).annotate({ identifier: "AggregateAssetsValuesResponse" });

export interface ListReportsResponse {
  /** The list of Reports. */
  reports?: ReadonlyArray<Report>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListReportsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reports: Schema.optional(Schema.Array(Report)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListReportsResponse" });

export interface AddAssetsToGroupRequest {
  /** Required. List of assets to be added. The maximum number of assets that can be added in a single request is 2000. */
  assets?: AssetList;
  /** Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
  allowExisting?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const AddAssetsToGroupRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(AssetList),
    allowExisting: Schema.optional(Schema.Boolean),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddAssetsToGroupRequest" });

export interface ListGroupsResponse {
  /** The list of Group */
  groups?: ReadonlyArray<Group>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListGroupsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groups: Schema.optional(Schema.Array(Group)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListGroupsResponse" });

export interface AssetsExportJobPerformanceData {
  /** Optional. When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. When this value is unset (or set to zero), all available data is returned. The maximum value is 420; values above 420 will be coerced to 420. If unset (0 value) a default value of 40 will be used. */
  maxDays?: number;
}

export const AssetsExportJobPerformanceData =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AssetsExportJobPerformanceData" });

export interface AssetsExportJob {
  /** Output only. Resource creation time. */
  createTime?: string;
  /** Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
  /** Export data regarding asset network dependencies. */
  networkDependencies?: AssetsExportJobNetworkDependencies;
  /** Export to Cloud Storage files downloadable using signed URIs. */
  signedUriDestination?: SignedUriDestination;
  /** Output only. Resource update time. */
  updateTime?: string;
  /** Output only. Identifier. Resource name. */
  name?: string;
  /** Optional. Conditions for selecting assets to export. */
  condition?: AssetsExportJobExportCondition;
  /** Export asset with performance data. */
  performanceData?: AssetsExportJobPerformanceData;
  /** Output only. Recent non expired executions of the job. */
  recentExecutions?: ReadonlyArray<AssetsExportJobExecution>;
  /** Export asset inventory details. */
  inventory?: AssetsExportJobInventory;
}

export const AssetsExportJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  showHidden: Schema.optional(Schema.Boolean),
  networkDependencies: Schema.optional(AssetsExportJobNetworkDependencies),
  signedUriDestination: Schema.optional(SignedUriDestination),
  updateTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  condition: Schema.optional(AssetsExportJobExportCondition),
  performanceData: Schema.optional(AssetsExportJobPerformanceData),
  recentExecutions: Schema.optional(Schema.Array(AssetsExportJobExecution)),
  inventory: Schema.optional(AssetsExportJobInventory),
}).annotate({ identifier: "AssetsExportJob" });

export interface ListAssetsExportJobsResponse {
  /** Output only. A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Output only. The list of assets export jobs. */
  assetsExportJobs?: ReadonlyArray<AssetsExportJob>;
}

export const ListAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    assetsExportJobs: Schema.optional(Schema.Array(AssetsExportJob)),
  }).annotate({ identifier: "ListAssetsExportJobsResponse" });

export interface BatchDeleteAssetsRequest {
  /** Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project}/locations/{location}/assets/{name}. */
  names?: ReadonlyArray<string>;
  /** Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`. */
  allowMissing?: boolean;
  /** Optional. Optional cascading rules for deleting related assets. */
  cascadingRules?: ReadonlyArray<CascadingRule>;
}

export const BatchDeleteAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    allowMissing: Schema.optional(Schema.Boolean),
    cascadingRules: Schema.optional(Schema.Array(CascadingRule)),
  }).annotate({ identifier: "BatchDeleteAssetsRequest" });

export interface RunImportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunImportJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  requestId: Schema.optional(Schema.String),
}).annotate({ identifier: "RunImportJobRequest" });

export interface RunAssetsExportJobResponse {
  /** Output only. Execution status of the assets export operation. */
  assetsExportJobExecution?: AssetsExportJobExecution;
}

export const RunAssetsExportJobResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetsExportJobExecution: Schema.optional(AssetsExportJobExecution),
  }).annotate({ identifier: "RunAssetsExportJobResponse" });

export interface ReportAssetFramesResponse {}

export const ReportAssetFramesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReportAssetFramesResponse",
  });

// ==========================================================================
// Operations
// ==========================================================================

export interface GetSettingsProjectsLocationsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsProjectsLocationsRequest>;

export type GetSettingsProjectsLocationsResponse = Settings;
export const GetSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

export type GetSettingsProjectsLocationsError = DefaultErrors;

/** Gets the details of regional settings. */
export const getSettingsProjectsLocations: API.OperationMethod<
  GetSettingsProjectsLocationsRequest,
  GetSettingsProjectsLocationsResponse,
  GetSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsProjectsLocationsRequest,
  output: GetSettingsProjectsLocationsResponse,
  errors: [],
}));

export interface UpdateSettingsProjectsLocationsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the `Settings` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The name of the resource. */
  name: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsProjectsLocationsRequest>;

export type UpdateSettingsProjectsLocationsResponse = Operation;
export const UpdateSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type UpdateSettingsProjectsLocationsError = DefaultErrors;

/** Updates the regional-level project settings. */
export const updateSettingsProjectsLocations: API.OperationMethod<
  UpdateSettingsProjectsLocationsRequest,
  UpdateSettingsProjectsLocationsResponse,
  UpdateSettingsProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsProjectsLocationsRequest,
  output: UpdateSettingsProjectsLocationsResponse,
  errors: [],
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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface ListProjectsLocationsDiscoveryClientsRequest {
  /** Optional. The maximum number of items to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Required. Parent resource. */
  parent: string;
  /** Optional. A page token, received from a previous `ListDiscoveryClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveryClients` must match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter expression to filter results by. */
  filter?: string;
  /** Optional. Field to sort by. */
  orderBy?: string;
}

export const ListProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/discoveryClients" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveryClientsRequest>;

export type ListProjectsLocationsDiscoveryClientsResponse =
  ListDiscoveryClientsResponse;
export const ListProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiscoveryClientsResponse;

export type ListProjectsLocationsDiscoveryClientsError = DefaultErrors;

/** Lists all the discovery clients in a given project and location. */
export const listProjectsLocationsDiscoveryClients: API.PaginatedOperationMethod<
  ListProjectsLocationsDiscoveryClientsRequest,
  ListProjectsLocationsDiscoveryClientsResponse,
  ListProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveryClientsRequest,
  output: ListProjectsLocationsDiscoveryClientsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveryClientsRequest>;

export type GetProjectsLocationsDiscoveryClientsResponse = DiscoveryClient;
export const GetProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoveryClient;

export type GetProjectsLocationsDiscoveryClientsError = DefaultErrors;

/** Gets the details of a discovery client. */
export const getProjectsLocationsDiscoveryClients: API.OperationMethod<
  GetProjectsLocationsDiscoveryClientsRequest,
  GetProjectsLocationsDiscoveryClientsResponse,
  GetProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDiscoveryClientsRequest,
  output: GetProjectsLocationsDiscoveryClientsResponse,
  errors: [],
}));

export interface SendHeartbeatProjectsLocationsDiscoveryClientsRequest {
  /** Required. The discovery client name. */
  name: string;
  /** Request body */
  body?: SendDiscoveryClientHeartbeatRequest;
}

export const SendHeartbeatProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SendDiscoveryClientHeartbeatRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:sendHeartbeat", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SendHeartbeatProjectsLocationsDiscoveryClientsRequest>;

export type SendHeartbeatProjectsLocationsDiscoveryClientsResponse = Operation;
export const SendHeartbeatProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type SendHeartbeatProjectsLocationsDiscoveryClientsError = DefaultErrors;

/** Sends a discovery client heartbeat. Healthy clients are expected to send heartbeats regularly (normally every few minutes). */
export const sendHeartbeatProjectsLocationsDiscoveryClients: API.OperationMethod<
  SendHeartbeatProjectsLocationsDiscoveryClientsRequest,
  SendHeartbeatProjectsLocationsDiscoveryClientsResponse,
  SendHeartbeatProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendHeartbeatProjectsLocationsDiscoveryClientsRequest,
  output: SendHeartbeatProjectsLocationsDiscoveryClientsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsDiscoveryClientsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The discovery client name. */
  name: string;
}

export const DeleteProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDiscoveryClientsRequest>;

export type DeleteProjectsLocationsDiscoveryClientsResponse = Operation;
export const DeleteProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDiscoveryClientsError = DefaultErrors;

/** Deletes a discovery client. */
export const deleteProjectsLocationsDiscoveryClients: API.OperationMethod<
  DeleteProjectsLocationsDiscoveryClientsRequest,
  DeleteProjectsLocationsDiscoveryClientsResponse,
  DeleteProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDiscoveryClientsRequest,
  output: DeleteProjectsLocationsDiscoveryClientsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsDiscoveryClientsRequest {
  /** Required. Update mask is used to specify the fields to be overwritten in the `DiscoveryClient` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Identifier. Full name of this discovery client. */
  name: string;
  /** Request body */
  body?: DiscoveryClient;
}

export const PatchProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(DiscoveryClient).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDiscoveryClientsRequest>;

export type PatchProjectsLocationsDiscoveryClientsResponse = Operation;
export const PatchProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsDiscoveryClientsError = DefaultErrors;

/** Updates a discovery client. */
export const patchProjectsLocationsDiscoveryClients: API.OperationMethod<
  PatchProjectsLocationsDiscoveryClientsRequest,
  PatchProjectsLocationsDiscoveryClientsResponse,
  PatchProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDiscoveryClientsRequest,
  output: PatchProjectsLocationsDiscoveryClientsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsDiscoveryClientsRequest {
  /** Required. Parent resource. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. User specified ID for the discovery client. It will become the last component of the discovery client name. The ID must be unique within the project, is restricted to lower-cased letters and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  discoveryClientId?: string;
  /** Request body */
  body?: DiscoveryClient;
}

export const CreateProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    discoveryClientId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("discoveryClientId"),
    ),
    body: Schema.optional(DiscoveryClient).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/discoveryClients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDiscoveryClientsRequest>;

export type CreateProjectsLocationsDiscoveryClientsResponse = Operation;
export const CreateProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDiscoveryClientsError = DefaultErrors;

/** Creates a new discovery client. */
export const createProjectsLocationsDiscoveryClients: API.OperationMethod<
  CreateProjectsLocationsDiscoveryClientsRequest,
  CreateProjectsLocationsDiscoveryClientsResponse,
  CreateProjectsLocationsDiscoveryClientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDiscoveryClientsRequest,
  output: CreateProjectsLocationsDiscoveryClientsResponse,
  errors: [],
}));

export interface GetProjectsLocationsReportConfigsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReportConfigsRequest>;

export type GetProjectsLocationsReportConfigsResponse = ReportConfig;
export const GetProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportConfig;

export type GetProjectsLocationsReportConfigsError = DefaultErrors;

/** Gets details of a single ReportConfig. */
export const getProjectsLocationsReportConfigs: API.OperationMethod<
  GetProjectsLocationsReportConfigsRequest,
  GetProjectsLocationsReportConfigsResponse,
  GetProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsRequest,
  output: GetProjectsLocationsReportConfigsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsReportConfigsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?. */
  reportConfigId?: string;
  /** Request body */
  body?: ReportConfig;
}

export const CreateProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    reportConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("reportConfigId"),
    ),
    body: Schema.optional(ReportConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/reportConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsReportConfigsRequest>;

export type CreateProjectsLocationsReportConfigsResponse = Operation;
export const CreateProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsReportConfigsError = DefaultErrors;

/** Creates a report configuration. */
export const createProjectsLocationsReportConfigs: API.OperationMethod<
  CreateProjectsLocationsReportConfigsRequest,
  CreateProjectsLocationsReportConfigsResponse,
  CreateProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsRequest,
  output: CreateProjectsLocationsReportConfigsResponse,
  errors: [],
}));

export interface ListProjectsLocationsReportConfigsRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListReportConfigsRequest`. */
  parent: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/reportConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReportConfigsRequest>;

export type ListProjectsLocationsReportConfigsResponse =
  ListReportConfigsResponse;
export const ListProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReportConfigsResponse;

export type ListProjectsLocationsReportConfigsError = DefaultErrors;

/** Lists ReportConfigs in a given project and location. */
export const listProjectsLocationsReportConfigs: API.PaginatedOperationMethod<
  ListProjectsLocationsReportConfigsRequest,
  ListProjectsLocationsReportConfigsResponse,
  ListProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsRequest,
  output: ListProjectsLocationsReportConfigsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsReportConfigsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
  /** Optional. If set to `true`, any child `Reports` of this entity will also be deleted. If set to `false`, the request only works if the resource has no children. */
  force?: boolean;
}

export const DeleteProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsReportConfigsRequest>;

export type DeleteProjectsLocationsReportConfigsResponse = Operation;
export const DeleteProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsReportConfigsError = DefaultErrors;

/** Deletes a ReportConfig. */
export const deleteProjectsLocationsReportConfigs: API.OperationMethod<
  DeleteProjectsLocationsReportConfigsRequest,
  DeleteProjectsLocationsReportConfigsResponse,
  DeleteProjectsLocationsReportConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsRequest,
  output: DeleteProjectsLocationsReportConfigsResponse,
  errors: [],
}));

export interface ListProjectsLocationsReportConfigsReportsRequest {
  /** A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListReportsRequest`. */
  parent: string;
  /** Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Determines what information to retrieve for each Report. */
  view?:
    | "REPORT_VIEW_UNSPECIFIED"
    | "REPORT_VIEW_BASIC"
    | "REPORT_VIEW_FULL"
    | "REPORT_VIEW_STANDARD"
    | (string & {});
}

export const ListProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/reports" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReportConfigsReportsRequest>;

export type ListProjectsLocationsReportConfigsReportsResponse =
  ListReportsResponse;
export const ListProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReportsResponse;

export type ListProjectsLocationsReportConfigsReportsError = DefaultErrors;

/** Lists Reports in a given ReportConfig. */
export const listProjectsLocationsReportConfigsReports: API.PaginatedOperationMethod<
  ListProjectsLocationsReportConfigsReportsRequest,
  ListProjectsLocationsReportConfigsReportsResponse,
  ListProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsReportsRequest,
  output: ListProjectsLocationsReportConfigsReportsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsReportConfigsReportsRequest>;

export type DeleteProjectsLocationsReportConfigsReportsResponse = Operation;
export const DeleteProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsReportConfigsReportsError = DefaultErrors;

/** Deletes a Report. */
export const deleteProjectsLocationsReportConfigsReports: API.OperationMethod<
  DeleteProjectsLocationsReportConfigsReportsRequest,
  DeleteProjectsLocationsReportConfigsReportsResponse,
  DeleteProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsReportsRequest,
  output: DeleteProjectsLocationsReportConfigsReportsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportId: Schema.optional(Schema.String).pipe(T.HttpQuery("reportId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Report).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/reports", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsReportConfigsReportsRequest>;

export type CreateProjectsLocationsReportConfigsReportsResponse = Operation;
export const CreateProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsReportConfigsReportsError = DefaultErrors;

/** Creates a report. */
export const createProjectsLocationsReportConfigsReports: API.OperationMethod<
  CreateProjectsLocationsReportConfigsReportsRequest,
  CreateProjectsLocationsReportConfigsReportsResponse,
  CreateProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsReportsRequest,
  output: CreateProjectsLocationsReportConfigsReportsResponse,
  errors: [],
}));

export interface GetProjectsLocationsReportConfigsReportsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Determines what information to retrieve for the Report. */
  view?:
    | "REPORT_VIEW_UNSPECIFIED"
    | "REPORT_VIEW_BASIC"
    | "REPORT_VIEW_FULL"
    | "REPORT_VIEW_STANDARD"
    | (string & {});
}

export const GetProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReportConfigsReportsRequest>;

export type GetProjectsLocationsReportConfigsReportsResponse = Report;
export const GetProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Report;

export type GetProjectsLocationsReportConfigsReportsError = DefaultErrors;

/** Gets details of a single Report. */
export const getProjectsLocationsReportConfigsReports: API.OperationMethod<
  GetProjectsLocationsReportConfigsReportsRequest,
  GetProjectsLocationsReportConfigsReportsResponse,
  GetProjectsLocationsReportConfigsReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsReportsRequest,
  output: GetProjectsLocationsReportConfigsReportsResponse,
  errors: [],
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
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

export interface PatchProjectsLocationsSourcesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The full name of the source. */
  name: string;
  /** Request body */
  body?: Source;
}

export const PatchProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSourcesRequest>;

export type PatchProjectsLocationsSourcesResponse = Operation;
export const PatchProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsSourcesError = DefaultErrors;

/** Updates the parameters of a source. */
export const patchProjectsLocationsSources: API.OperationMethod<
  PatchProjectsLocationsSourcesRequest,
  PatchProjectsLocationsSourcesResponse,
  PatchProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSourcesRequest,
  output: PatchProjectsLocationsSourcesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsSourcesRequest {
  /** Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  sourceId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Source;
}

export const CreateProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceId: Schema.optional(Schema.String).pipe(T.HttpQuery("sourceId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/sources", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesRequest>;

export type CreateProjectsLocationsSourcesResponse = Operation;
export const CreateProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsSourcesError = DefaultErrors;

/** Creates a new source in a given project and location. */
export const createProjectsLocationsSources: API.OperationMethod<
  CreateProjectsLocationsSourcesRequest,
  CreateProjectsLocationsSourcesResponse,
  CreateProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesRequest,
  output: CreateProjectsLocationsSourcesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsSourcesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
}

export const DeleteProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesRequest>;

export type DeleteProjectsLocationsSourcesResponse = Operation;
export const DeleteProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsSourcesError = DefaultErrors;

/** Deletes a source. */
export const deleteProjectsLocationsSources: API.OperationMethod<
  DeleteProjectsLocationsSourcesRequest,
  DeleteProjectsLocationsSourcesResponse,
  DeleteProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesRequest,
  output: DeleteProjectsLocationsSourcesResponse,
  errors: [],
}));

export interface GetProjectsLocationsSourcesRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesRequest>;

export type GetProjectsLocationsSourcesResponse = Source;
export const GetProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

export type GetProjectsLocationsSourcesError = DefaultErrors;

/** Gets the details of a source. */
export const getProjectsLocationsSources: API.OperationMethod<
  GetProjectsLocationsSourcesRequest,
  GetProjectsLocationsSourcesResponse,
  GetProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesRequest,
  output: GetProjectsLocationsSourcesResponse,
  errors: [],
}));

export interface ListProjectsLocationsSourcesRequest {
  /** A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListSourcesRequest`. */
  parent: string;
  /** Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
}

export const ListProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesRequest>;

export type ListProjectsLocationsSourcesResponse = ListSourcesResponse;
export const ListProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

export type ListProjectsLocationsSourcesError = DefaultErrors;

/** Lists all the sources in a given project and location. */
export const listProjectsLocationsSources: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesRequest,
  ListProjectsLocationsSourcesResponse,
  ListProjectsLocationsSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesRequest,
  output: ListProjectsLocationsSourcesResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesErrorFramesRequest>;

export type GetProjectsLocationsSourcesErrorFramesResponse = ErrorFrame;
export const GetProjectsLocationsSourcesErrorFramesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ErrorFrame;

export type GetProjectsLocationsSourcesErrorFramesError = DefaultErrors;

/** Gets the details of an error frame. */
export const getProjectsLocationsSourcesErrorFrames: API.OperationMethod<
  GetProjectsLocationsSourcesErrorFramesRequest,
  GetProjectsLocationsSourcesErrorFramesResponse,
  GetProjectsLocationsSourcesErrorFramesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesErrorFramesRequest,
  output: GetProjectsLocationsSourcesErrorFramesResponse,
  errors: [],
}));

export interface ListProjectsLocationsSourcesErrorFramesRequest {
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. An optional view mode to control the level of details of each error frame. The default is a BASIC frame view. */
  view?:
    | "ERROR_FRAME_VIEW_UNSPECIFIED"
    | "ERROR_FRAME_VIEW_BASIC"
    | "ERROR_FRAME_VIEW_FULL"
    | (string & {});
  /** Required. Parent value (the source) for `ListErrorFramesRequest`. */
  parent: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsSourcesErrorFramesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/errorFrames" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesErrorFramesRequest>;

export type ListProjectsLocationsSourcesErrorFramesResponse =
  ListErrorFramesResponse;
export const ListProjectsLocationsSourcesErrorFramesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListErrorFramesResponse;

export type ListProjectsLocationsSourcesErrorFramesError = DefaultErrors;

/** Lists all error frames in a given source and location. */
export const listProjectsLocationsSourcesErrorFrames: API.PaginatedOperationMethod<
  ListProjectsLocationsSourcesErrorFramesRequest,
  ListProjectsLocationsSourcesErrorFramesResponse,
  ListProjectsLocationsSourcesErrorFramesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesErrorFramesRequest,
  output: ListProjectsLocationsSourcesErrorFramesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsAssetsExportJobsRequest {
  /** Optional. Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Required. Parent resource. */
  parent: string;
  /** Optional. A token identifying a page of results that the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/assetsExportJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAssetsExportJobsRequest>;

export type ListProjectsLocationsAssetsExportJobsResponse =
  ListAssetsExportJobsResponse;
export const ListProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsExportJobsResponse;

export type ListProjectsLocationsAssetsExportJobsError = DefaultErrors;

/** Lists all the assets export jobs in a given project and location. */
export const listProjectsLocationsAssetsExportJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsAssetsExportJobsRequest,
  ListProjectsLocationsAssetsExportJobsResponse,
  ListProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAssetsExportJobsRequest,
  output: ListProjectsLocationsAssetsExportJobsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAssetsExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAssetsExportJobsRequest>;

export type GetProjectsLocationsAssetsExportJobsResponse = AssetsExportJob;
export const GetProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AssetsExportJob;

export type GetProjectsLocationsAssetsExportJobsError = DefaultErrors;

/** Gets the details of an assets export job. */
export const getProjectsLocationsAssetsExportJobs: API.OperationMethod<
  GetProjectsLocationsAssetsExportJobsRequest,
  GetProjectsLocationsAssetsExportJobsResponse,
  GetProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAssetsExportJobsRequest,
  output: GetProjectsLocationsAssetsExportJobsResponse,
  errors: [],
}));

export interface RunProjectsLocationsAssetsExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Request body */
  body?: RunAssetsExportJobRequest;
}

export const RunProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunAssetsExportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsAssetsExportJobsRequest>;

export type RunProjectsLocationsAssetsExportJobsResponse = Operation;
export const RunProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunProjectsLocationsAssetsExportJobsError = DefaultErrors;

/** Runs an assets export job, returning an AssetsExportJobExecution. */
export const runProjectsLocationsAssetsExportJobs: API.OperationMethod<
  RunProjectsLocationsAssetsExportJobsRequest,
  RunProjectsLocationsAssetsExportJobsResponse,
  RunProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsAssetsExportJobsRequest,
  output: RunProjectsLocationsAssetsExportJobsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAssetsExportJobsRequest {
  /** Required. The name of the assets export job to delete. */
  name: string;
}

export const DeleteProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAssetsExportJobsRequest>;

export type DeleteProjectsLocationsAssetsExportJobsResponse = Operation;
export const DeleteProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsAssetsExportJobsError = DefaultErrors;

/** Deletes an assets export job. */
export const deleteProjectsLocationsAssetsExportJobs: API.OperationMethod<
  DeleteProjectsLocationsAssetsExportJobsRequest,
  DeleteProjectsLocationsAssetsExportJobsResponse,
  DeleteProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAssetsExportJobsRequest,
  output: DeleteProjectsLocationsAssetsExportJobsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    assetsExportJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("assetsExportJobId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(AssetsExportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/assetsExportJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAssetsExportJobsRequest>;

export type CreateProjectsLocationsAssetsExportJobsResponse = Operation;
export const CreateProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsAssetsExportJobsError = DefaultErrors;

/** Creates a new assets export job. */
export const createProjectsLocationsAssetsExportJobs: API.OperationMethod<
  CreateProjectsLocationsAssetsExportJobsRequest,
  CreateProjectsLocationsAssetsExportJobsResponse,
  CreateProjectsLocationsAssetsExportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAssetsExportJobsRequest,
  output: CreateProjectsLocationsAssetsExportJobsResponse,
  errors: [],
}));

export interface RemoveAssetsProjectsLocationsGroupsRequest {
  /** Required. Group reference. */
  group: string;
  /** Request body */
  body?: RemoveAssetsFromGroupRequest;
}

export const RemoveAssetsProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(RemoveAssetsFromGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{group}:removeAssets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RemoveAssetsProjectsLocationsGroupsRequest>;

export type RemoveAssetsProjectsLocationsGroupsResponse = Operation;
export const RemoveAssetsProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RemoveAssetsProjectsLocationsGroupsError = DefaultErrors;

/** Removes assets from a group. */
export const removeAssetsProjectsLocationsGroups: API.OperationMethod<
  RemoveAssetsProjectsLocationsGroupsRequest,
  RemoveAssetsProjectsLocationsGroupsResponse,
  RemoveAssetsProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveAssetsProjectsLocationsGroupsRequest,
  output: RemoveAssetsProjectsLocationsGroupsResponse,
  errors: [],
}));

export interface ListProjectsLocationsGroupsRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for `ListGroupsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/groups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGroupsRequest>;

export type ListProjectsLocationsGroupsResponse = ListGroupsResponse;
export const ListProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupsResponse;

export type ListProjectsLocationsGroupsError = DefaultErrors;

/** Lists all groups in a given project and location. */
export const listProjectsLocationsGroups: API.PaginatedOperationMethod<
  ListProjectsLocationsGroupsRequest,
  ListProjectsLocationsGroupsResponse,
  ListProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGroupsRequest,
  output: ListProjectsLocationsGroupsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AddAssetsProjectsLocationsGroupsRequest {
  /** Required. Group reference. */
  group: string;
  /** Request body */
  body?: AddAssetsToGroupRequest;
}

export const AddAssetsProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(AddAssetsToGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{group}:addAssets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AddAssetsProjectsLocationsGroupsRequest>;

export type AddAssetsProjectsLocationsGroupsResponse = Operation;
export const AddAssetsProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type AddAssetsProjectsLocationsGroupsError = DefaultErrors;

/** Adds assets to a group. */
export const addAssetsProjectsLocationsGroups: API.OperationMethod<
  AddAssetsProjectsLocationsGroupsRequest,
  AddAssetsProjectsLocationsGroupsResponse,
  AddAssetsProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddAssetsProjectsLocationsGroupsRequest,
  output: AddAssetsProjectsLocationsGroupsResponse,
  errors: [],
}));

export interface GetProjectsLocationsGroupsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGroupsRequest>;

export type GetProjectsLocationsGroupsResponse = Group;
export const GetProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Group;

export type GetProjectsLocationsGroupsError = DefaultErrors;

/** Gets the details of a group. */
export const getProjectsLocationsGroups: API.OperationMethod<
  GetProjectsLocationsGroupsRequest,
  GetProjectsLocationsGroupsResponse,
  GetProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsGroupsRequest,
  output: GetProjectsLocationsGroupsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the group resource. */
  name: string;
}

export const DeleteProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGroupsRequest>;

export type DeleteProjectsLocationsGroupsResponse = Operation;
export const DeleteProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsGroupsError = DefaultErrors;

/** Deletes a group. */
export const deleteProjectsLocationsGroups: API.OperationMethod<
  DeleteProjectsLocationsGroupsRequest,
  DeleteProjectsLocationsGroupsResponse,
  DeleteProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsGroupsRequest,
  output: DeleteProjectsLocationsGroupsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsGroupsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The name of the group. */
  name: string;
  /** Request body */
  body?: Group;
}

export const PatchProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGroupsRequest>;

export type PatchProjectsLocationsGroupsResponse = Operation;
export const PatchProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsGroupsError = DefaultErrors;

/** Updates the parameters of a group. */
export const patchProjectsLocationsGroups: API.OperationMethod<
  PatchProjectsLocationsGroupsRequest,
  PatchProjectsLocationsGroupsResponse,
  PatchProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGroupsRequest,
  output: PatchProjectsLocationsGroupsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsGroupsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  groupId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Group;
}

export const CreateProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    groupId: Schema.optional(Schema.String).pipe(T.HttpQuery("groupId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/groups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGroupsRequest>;

export type CreateProjectsLocationsGroupsResponse = Operation;
export const CreateProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsGroupsError = DefaultErrors;

/** Creates a new group in a given project and location. */
export const createProjectsLocationsGroups: API.OperationMethod<
  CreateProjectsLocationsGroupsRequest,
  CreateProjectsLocationsGroupsResponse,
  CreateProjectsLocationsGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGroupsRequest,
  output: CreateProjectsLocationsGroupsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsImportJobsRequest>;

export type GetProjectsLocationsImportJobsResponse = ImportJob;
export const GetProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImportJob;

export type GetProjectsLocationsImportJobsError = DefaultErrors;

/** Gets the details of an import job. */
export const getProjectsLocationsImportJobs: API.OperationMethod<
  GetProjectsLocationsImportJobsRequest,
  GetProjectsLocationsImportJobsResponse,
  GetProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImportJobsRequest,
  output: GetProjectsLocationsImportJobsResponse,
  errors: [],
}));

export interface RunProjectsLocationsImportJobsRequest {
  /** Required. The name of the import job to run. */
  name: string;
  /** Request body */
  body?: RunImportJobRequest;
}

export const RunProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RunImportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsImportJobsRequest>;

export type RunProjectsLocationsImportJobsResponse = Operation;
export const RunProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type RunProjectsLocationsImportJobsError = DefaultErrors;

/** Runs an import job. */
export const runProjectsLocationsImportJobs: API.OperationMethod<
  RunProjectsLocationsImportJobsRequest,
  RunProjectsLocationsImportJobsResponse,
  RunProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsImportJobsRequest,
  output: RunProjectsLocationsImportJobsResponse,
  errors: [],
}));

export interface ListProjectsLocationsImportJobsRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListImportJobsRequest`. */
  parent: string;
  /** Optional. The level of details of each import job. Default value is BASIC. */
  view?:
    | "IMPORT_JOB_VIEW_UNSPECIFIED"
    | "IMPORT_JOB_VIEW_BASIC"
    | "IMPORT_JOB_VIEW_FULL"
    | (string & {});
}

export const ListProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/importJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsImportJobsRequest>;

export type ListProjectsLocationsImportJobsResponse = ListImportJobsResponse;
export const ListProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListImportJobsResponse;

export type ListProjectsLocationsImportJobsError = DefaultErrors;

/** Lists all import jobs. */
export const listProjectsLocationsImportJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsImportJobsRequest,
  ListProjectsLocationsImportJobsResponse,
  ListProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImportJobsRequest,
  output: ListProjectsLocationsImportJobsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ValidateProjectsLocationsImportJobsRequest {
  /** Required. The name of the import job to validate. */
  name: string;
  /** Request body */
  body?: ValidateImportJobRequest;
}

export const ValidateProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ValidateImportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:validate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ValidateProjectsLocationsImportJobsRequest>;

export type ValidateProjectsLocationsImportJobsResponse = Operation;
export const ValidateProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type ValidateProjectsLocationsImportJobsError = DefaultErrors;

/** Validates an import job. */
export const validateProjectsLocationsImportJobs: API.OperationMethod<
  ValidateProjectsLocationsImportJobsRequest,
  ValidateProjectsLocationsImportJobsResponse,
  ValidateProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsImportJobsRequest,
  output: ValidateProjectsLocationsImportJobsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsImportJobsRequest {
  /** Required. ID of the import job. */
  importJobId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ImportJob;
}

export const CreateProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("importJobId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ImportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/importJobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsImportJobsRequest>;

export type CreateProjectsLocationsImportJobsResponse = Operation;
export const CreateProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsImportJobsError = DefaultErrors;

/** Creates an import job. */
export const createProjectsLocationsImportJobs: API.OperationMethod<
  CreateProjectsLocationsImportJobsRequest,
  CreateProjectsLocationsImportJobsResponse,
  CreateProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImportJobsRequest,
  output: CreateProjectsLocationsImportJobsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ImportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsImportJobsRequest>;

export type PatchProjectsLocationsImportJobsResponse = Operation;
export const PatchProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsImportJobsError = DefaultErrors;

/** Updates an import job. */
export const patchProjectsLocationsImportJobs: API.OperationMethod<
  PatchProjectsLocationsImportJobsRequest,
  PatchProjectsLocationsImportJobsResponse,
  PatchProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsImportJobsRequest,
  output: PatchProjectsLocationsImportJobsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsImportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. If set to `true`, any `ImportDataFiles` of this job will also be deleted If set to `false`, the request only works if the job has no data files. */
  force?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsImportJobsRequest>;

export type DeleteProjectsLocationsImportJobsResponse = Operation;
export const DeleteProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsImportJobsError = DefaultErrors;

/** Deletes an import job. */
export const deleteProjectsLocationsImportJobs: API.OperationMethod<
  DeleteProjectsLocationsImportJobsRequest,
  DeleteProjectsLocationsImportJobsResponse,
  DeleteProjectsLocationsImportJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImportJobsRequest,
  output: DeleteProjectsLocationsImportJobsResponse,
  errors: [],
}));

export interface GetProjectsLocationsImportJobsImportDataFilesRequest {
  /** Required. Name of the ImportDataFile. */
  name: string;
}

export const GetProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsImportJobsImportDataFilesRequest>;

export type GetProjectsLocationsImportJobsImportDataFilesResponse =
  ImportDataFile;
export const GetProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImportDataFile;

export type GetProjectsLocationsImportJobsImportDataFilesError = DefaultErrors;

/** Gets an import data file. */
export const getProjectsLocationsImportJobsImportDataFiles: API.OperationMethod<
  GetProjectsLocationsImportJobsImportDataFilesRequest,
  GetProjectsLocationsImportJobsImportDataFilesResponse,
  GetProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImportJobsImportDataFilesRequest,
  output: GetProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsImportJobsImportDataFilesRequest {
  /** Required. The ID of the new data file. */
  importDataFileId?: string;
  /** Required. Name of the parent of the ImportDataFile. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: ImportDataFile;
}

export const CreateProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importDataFileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("importDataFileId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ImportDataFile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/importDataFiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsImportJobsImportDataFilesRequest>;

export type CreateProjectsLocationsImportJobsImportDataFilesResponse =
  Operation;
export const CreateProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsImportJobsImportDataFilesError =
  DefaultErrors;

/** Creates an import data file. */
export const createProjectsLocationsImportJobsImportDataFiles: API.OperationMethod<
  CreateProjectsLocationsImportJobsImportDataFilesRequest,
  CreateProjectsLocationsImportJobsImportDataFilesResponse,
  CreateProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImportJobsImportDataFilesRequest,
  output: CreateProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [],
}));

export interface ListProjectsLocationsImportJobsImportDataFilesRequest {
  /** Required. Name of the parent of the `ImportDataFiles` resource. */
  parent: string;
  /** A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/importDataFiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsImportJobsImportDataFilesRequest>;

export type ListProjectsLocationsImportJobsImportDataFilesResponse =
  ListImportDataFilesResponse;
export const ListProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListImportDataFilesResponse;

export type ListProjectsLocationsImportJobsImportDataFilesError = DefaultErrors;

/** List import data files. */
export const listProjectsLocationsImportJobsImportDataFiles: API.PaginatedOperationMethod<
  ListProjectsLocationsImportJobsImportDataFilesRequest,
  ListProjectsLocationsImportJobsImportDataFilesResponse,
  ListProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImportJobsImportDataFilesRequest,
  output: ListProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsImportJobsImportDataFilesRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the ImportDataFile to delete. */
  name: string;
}

export const DeleteProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsImportJobsImportDataFilesRequest>;

export type DeleteProjectsLocationsImportJobsImportDataFilesResponse =
  Operation;
export const DeleteProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsImportJobsImportDataFilesError =
  DefaultErrors;

/** Delete an import data file. */
export const deleteProjectsLocationsImportJobsImportDataFiles: API.OperationMethod<
  DeleteProjectsLocationsImportJobsImportDataFilesRequest,
  DeleteProjectsLocationsImportJobsImportDataFilesResponse,
  DeleteProjectsLocationsImportJobsImportDataFilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImportJobsImportDataFilesRequest,
  output: DeleteProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [],
}));

export interface ListProjectsLocationsRelationsRequest {
  /** Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for `ListRelationsRequest`. */
  parent: string;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Optional. Filtering results. */
  filter?: string;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsRelationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/relations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRelationsRequest>;

export type ListProjectsLocationsRelationsResponse = ListRelationsResponse;
export const ListProjectsLocationsRelationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRelationsResponse;

export type ListProjectsLocationsRelationsError = DefaultErrors;

/** Lists all the relations in a given project and location. */
export const listProjectsLocationsRelations: API.PaginatedOperationMethod<
  ListProjectsLocationsRelationsRequest,
  ListProjectsLocationsRelationsResponse,
  ListProjectsLocationsRelationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRelationsRequest,
  output: ListProjectsLocationsRelationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRelationsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsRelationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRelationsRequest>;

export type GetProjectsLocationsRelationsResponse = Relation;
export const GetProjectsLocationsRelationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Relation;

export type GetProjectsLocationsRelationsError = DefaultErrors;

/** Gets the details of an relation. */
export const getProjectsLocationsRelations: API.OperationMethod<
  GetProjectsLocationsRelationsRequest,
  GetProjectsLocationsRelationsResponse,
  GetProjectsLocationsRelationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRelationsRequest,
  output: GetProjectsLocationsRelationsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    body: Schema.optional(Frames).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/assets:reportAssetFrames",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportAssetFramesProjectsLocationsAssetsRequest>;

export type ReportAssetFramesProjectsLocationsAssetsResponse =
  ReportAssetFramesResponse;
export const ReportAssetFramesProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportAssetFramesResponse;

export type ReportAssetFramesProjectsLocationsAssetsError = DefaultErrors;

/** Reports a set of frames. */
export const reportAssetFramesProjectsLocationsAssets: API.OperationMethod<
  ReportAssetFramesProjectsLocationsAssetsRequest,
  ReportAssetFramesProjectsLocationsAssetsResponse,
  ReportAssetFramesProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportAssetFramesProjectsLocationsAssetsRequest,
  output: ReportAssetFramesProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsAssetsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAssetsRequest>;

export type DeleteProjectsLocationsAssetsResponse = Empty;
export const DeleteProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsAssetsError = DefaultErrors;

/** Deletes an asset. */
export const deleteProjectsLocationsAssets: API.OperationMethod<
  DeleteProjectsLocationsAssetsRequest,
  DeleteProjectsLocationsAssetsResponse,
  DeleteProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAssetsRequest,
  output: DeleteProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface AggregateValuesProjectsLocationsAssetsRequest {
  /** Required. Parent value for `AggregateAssetsValuesRequest`. */
  parent: string;
  /** Request body */
  body?: AggregateAssetsValuesRequest;
}

export const AggregateValuesProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(AggregateAssetsValuesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/assets:aggregateValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AggregateValuesProjectsLocationsAssetsRequest>;

export type AggregateValuesProjectsLocationsAssetsResponse =
  AggregateAssetsValuesResponse;
export const AggregateValuesProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AggregateAssetsValuesResponse;

export type AggregateValuesProjectsLocationsAssetsError = DefaultErrors;

/** Aggregates the requested fields based on provided function. */
export const aggregateValuesProjectsLocationsAssets: API.OperationMethod<
  AggregateValuesProjectsLocationsAssetsRequest,
  AggregateValuesProjectsLocationsAssetsResponse,
  AggregateValuesProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AggregateValuesProjectsLocationsAssetsRequest,
  output: AggregateValuesProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsAssetsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The full name of the asset. */
  name: string;
  /** Request body */
  body?: Asset;
}

export const PatchProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Asset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAssetsRequest>;

export type PatchProjectsLocationsAssetsResponse = Asset;
export const PatchProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Asset;

export type PatchProjectsLocationsAssetsError = DefaultErrors;

/** Updates the parameters of an asset. */
export const patchProjectsLocationsAssets: API.OperationMethod<
  PatchProjectsLocationsAssetsRequest,
  PatchProjectsLocationsAssetsResponse,
  PatchProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAssetsRequest,
  output: PatchProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface BatchUpdateProjectsLocationsAssetsRequest {
  /** Required. Parent value for batch asset update. */
  parent: string;
  /** Request body */
  body?: BatchUpdateAssetsRequest;
}

export const BatchUpdateProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchUpdateAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/assets:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAssetsRequest>;

export type BatchUpdateProjectsLocationsAssetsResponse =
  BatchUpdateAssetsResponse;
export const BatchUpdateProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateAssetsResponse;

export type BatchUpdateProjectsLocationsAssetsError = DefaultErrors;

/** Updates the parameters of a list of assets. */
export const batchUpdateProjectsLocationsAssets: API.OperationMethod<
  BatchUpdateProjectsLocationsAssetsRequest,
  BatchUpdateProjectsLocationsAssetsResponse,
  BatchUpdateProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAssetsRequest,
  output: BatchUpdateProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface ListProjectsLocationsAssetsRequest {
  /** Required. Parent value for `ListAssetsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Optional. When this value is set to 'true,' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
  /** View of the assets. Defaults to BASIC. */
  view?:
    | "ASSET_VIEW_UNSPECIFIED"
    | "ASSET_VIEW_BASIC"
    | "ASSET_VIEW_FULL"
    | "ASSET_VIEW_STANDARD"
    | "ASSET_VIEW_UI"
    | "ASSET_VIEW_LABELS"
    | (string & {});
}

export const ListProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showHidden: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("showHidden")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAssetsRequest>;

export type ListProjectsLocationsAssetsResponse = ListAssetsResponse;
export const ListProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsResponse;

export type ListProjectsLocationsAssetsError = DefaultErrors;

/** Lists all the assets in a given project and location. */
export const listProjectsLocationsAssets: API.PaginatedOperationMethod<
  ListProjectsLocationsAssetsRequest,
  ListProjectsLocationsAssetsResponse,
  ListProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAssetsRequest,
  output: ListProjectsLocationsAssetsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsAssetsRequest {
  /** Required. Name of the resource. */
  name: string;
  /** View of the assets. Defaults to BASIC. */
  view?:
    | "ASSET_VIEW_UNSPECIFIED"
    | "ASSET_VIEW_BASIC"
    | "ASSET_VIEW_FULL"
    | "ASSET_VIEW_STANDARD"
    | "ASSET_VIEW_UI"
    | "ASSET_VIEW_LABELS"
    | (string & {});
}

export const GetProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAssetsRequest>;

export type GetProjectsLocationsAssetsResponse = Asset;
export const GetProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Asset;

export type GetProjectsLocationsAssetsError = DefaultErrors;

/** Gets the details of an asset. */
export const getProjectsLocationsAssets: API.OperationMethod<
  GetProjectsLocationsAssetsRequest,
  GetProjectsLocationsAssetsResponse,
  GetProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAssetsRequest,
  output: GetProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface BatchDeleteProjectsLocationsAssetsRequest {
  /** Required. Parent value for batch asset delete. */
  parent: string;
  /** Request body */
  body?: BatchDeleteAssetsRequest;
}

export const BatchDeleteProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchDeleteAssetsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/assets:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAssetsRequest>;

export type BatchDeleteProjectsLocationsAssetsResponse = Empty;
export const BatchDeleteProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type BatchDeleteProjectsLocationsAssetsError = DefaultErrors;

/** Deletes list of Assets. */
export const batchDeleteProjectsLocationsAssets: API.OperationMethod<
  BatchDeleteProjectsLocationsAssetsRequest,
  BatchDeleteProjectsLocationsAssetsResponse,
  BatchDeleteProjectsLocationsAssetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAssetsRequest,
  output: BatchDeleteProjectsLocationsAssetsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsPreferenceSetsRequest {
  /** Required. Value for parent. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  preferenceSetId?: string;
  /** Request body */
  body?: PreferenceSet;
}

export const CreateProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    preferenceSetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("preferenceSetId"),
    ),
    body: Schema.optional(PreferenceSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/preferenceSets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPreferenceSetsRequest>;

export type CreateProjectsLocationsPreferenceSetsResponse = Operation;
export const CreateProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsPreferenceSetsError = DefaultErrors;

/** Creates a new preference set in a given project and location. */
export const createProjectsLocationsPreferenceSets: API.OperationMethod<
  CreateProjectsLocationsPreferenceSetsRequest,
  CreateProjectsLocationsPreferenceSetsResponse,
  CreateProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPreferenceSetsRequest,
  output: CreateProjectsLocationsPreferenceSetsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsPreferenceSetsRequest {
  /** Required. Field mask is used to specify the fields to be overwritten in the `PreferenceSet` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Name of the preference set. */
  name: string;
  /** Request body */
  body?: PreferenceSet;
}

export const PatchProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PreferenceSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsPreferenceSetsRequest>;

export type PatchProjectsLocationsPreferenceSetsResponse = Operation;
export const PatchProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsPreferenceSetsError = DefaultErrors;

/** Updates the parameters of a preference set. */
export const patchProjectsLocationsPreferenceSets: API.OperationMethod<
  PatchProjectsLocationsPreferenceSetsRequest,
  PatchProjectsLocationsPreferenceSetsResponse,
  PatchProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPreferenceSetsRequest,
  output: PatchProjectsLocationsPreferenceSetsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsPreferenceSetsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the group resource. */
  name: string;
}

export const DeleteProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPreferenceSetsRequest>;

export type DeleteProjectsLocationsPreferenceSetsResponse = Operation;
export const DeleteProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsPreferenceSetsError = DefaultErrors;

/** Deletes a preference set. */
export const deleteProjectsLocationsPreferenceSets: API.OperationMethod<
  DeleteProjectsLocationsPreferenceSetsRequest,
  DeleteProjectsLocationsPreferenceSetsResponse,
  DeleteProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPreferenceSetsRequest,
  output: DeleteProjectsLocationsPreferenceSetsResponse,
  errors: [],
}));

export interface GetProjectsLocationsPreferenceSetsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPreferenceSetsRequest>;

export type GetProjectsLocationsPreferenceSetsResponse = PreferenceSet;
export const GetProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PreferenceSet;

export type GetProjectsLocationsPreferenceSetsError = DefaultErrors;

/** Gets the details of a preference set. */
export const getProjectsLocationsPreferenceSets: API.OperationMethod<
  GetProjectsLocationsPreferenceSetsRequest,
  GetProjectsLocationsPreferenceSetsResponse,
  GetProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPreferenceSetsRequest,
  output: GetProjectsLocationsPreferenceSetsResponse,
  errors: [],
}));

export interface ListProjectsLocationsPreferenceSetsRequest {
  /** Required. Parent value for `ListPreferenceSetsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/preferenceSets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPreferenceSetsRequest>;

export type ListProjectsLocationsPreferenceSetsResponse =
  ListPreferenceSetsResponse;
export const ListProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPreferenceSetsResponse;

export type ListProjectsLocationsPreferenceSetsError = DefaultErrors;

/** Lists all the preference sets in a given project and location. */
export const listProjectsLocationsPreferenceSets: API.PaginatedOperationMethod<
  ListProjectsLocationsPreferenceSetsRequest,
  ListProjectsLocationsPreferenceSetsResponse,
  ListProjectsLocationsPreferenceSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPreferenceSetsRequest,
  output: ListProjectsLocationsPreferenceSetsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
