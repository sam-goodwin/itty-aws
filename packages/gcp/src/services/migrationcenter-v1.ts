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
  /** Output only. Name of the file the Signed URI references. */
  file?: string;
  /** Output only. Download URI for the file. */
  uri?: string;
}

export const SignedUri: Schema.Schema<SignedUri> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignedUri" });

export interface CsvOutputFile {
  /** Output only. Signed URI destination. */
  signedUri?: SignedUri;
  /** Output only. Number of rows in the file. */
  rowCount?: number;
  /** Output only. Number of columns in the file. */
  columnsCount?: number;
}

export const CsvOutputFile: Schema.Schema<CsvOutputFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signedUri: Schema.optional(SignedUri),
    rowCount: Schema.optional(Schema.Number),
    columnsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CsvOutputFile" });

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

export interface DiscoveryClient {
  /** Output only. Time when the discovery client was first created. */
  createTime?: string;
  /** Output only. Time when the discovery client was last updated. This value is not updated by heartbeats, to view the last heartbeat time please refer to the `heartbeat_time` field. */
  updateTime?: string;
  /** Output only. This field is intended for internal use. */
  signalsEndpoint?: string;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Client expiration time in UTC. If specified, the backend will not accept new frames after this time. */
  expireTime?: string;
  /** Optional. Free text description. Maximum length is 1000 characters. */
  description?: string;
  /** Optional. Input only. Client time-to-live. If specified, the backend will not accept new frames after this time. This field is input only. The derived expiration time is provided as output through the `expire_time` field. */
  ttl?: string;
  /** Required. Service account used by the discovery client for various operation. */
  serviceAccount?: string;
  /** Optional. Free text display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Required. Immutable. Full name of the source object associated with this discovery client. */
  source?: string;
  /** Output only. Current state of the discovery client. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "OFFLINE"
    | "DEGRADED"
    | "EXPIRED"
    | (string & {});
  /** Output only. Client version, as reported in recent heartbeat. */
  version?: string;
  /** Output only. Errors affecting client functionality. */
  errors?: ReadonlyArray<Status>;
  /** Output only. Last heartbeat time. Healthy clients are expected to send heartbeats regularly (normally every few minutes). */
  heartbeatTime?: string;
  /** Output only. Identifier. Full name of this discovery client. */
  name?: string;
}

export const DiscoveryClient: Schema.Schema<DiscoveryClient> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    signalsEndpoint: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    expireTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Status)),
    heartbeatTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveryClient" });

export interface MachineSeries {
  /** Code to identify a machine series. Consult this for more details on the available series for Compute Engine: https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison Consult this for more details on the available series for Google Cloud VMware Engine: https://cloud.google.com/vmware-engine/pricing */
  code?: string;
}

export const MachineSeries: Schema.Schema<MachineSeries> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineSeries" });

export interface ReportSummaryMachineSeriesAllocation {
  /** The Machine Series (e.g. "E2", "N2") */
  machineSeries?: MachineSeries;
  /** Count of assets allocated to this machine series. */
  allocatedAssetCount?: string;
}

export const ReportSummaryMachineSeriesAllocation: Schema.Schema<ReportSummaryMachineSeriesAllocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineSeries: Schema.optional(MachineSeries),
    allocatedAssetCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryMachineSeriesAllocation" });

export interface ReportSummaryComputeEngineFinding {
  /** Set of regions in which the assets were allocated. */
  allocatedRegions?: ReadonlyArray<string>;
  /** Distribution of assets based on the Machine Series. */
  machineSeriesAllocations?: ReadonlyArray<ReportSummaryMachineSeriesAllocation>;
  /** Count of assets which were allocated. */
  allocatedAssetCount?: string;
  /** Set of disk types allocated to assets. */
  allocatedDiskTypes?: ReadonlyArray<
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {})
  >;
}

export const ReportSummaryComputeEngineFinding: Schema.Schema<ReportSummaryComputeEngineFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
    machineSeriesAllocations: Schema.optional(
      Schema.Array(ReportSummaryMachineSeriesAllocation),
    ),
    allocatedAssetCount: Schema.optional(Schema.String),
    allocatedDiskTypes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ReportSummaryComputeEngineFinding" });

export interface SoleTenantNodeType {
  /** Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes */
  nodeName?: string;
}

export const SoleTenantNodeType: Schema.Schema<SoleTenantNodeType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoleTenantNodeType" });

export interface ReportSummarySoleTenantNodeAllocation {
  /** Count of this node type to be provisioned */
  nodeCount?: string;
  /** Count of assets allocated to these nodes */
  allocatedAssetCount?: string;
  /** Sole Tenant node type, e.g. "m3-node-128-3904" */
  node?: SoleTenantNodeType;
}

export const ReportSummarySoleTenantNodeAllocation: Schema.Schema<ReportSummarySoleTenantNodeAllocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeCount: Schema.optional(Schema.String),
    allocatedAssetCount: Schema.optional(Schema.String),
    node: Schema.optional(SoleTenantNodeType),
  }).annotate({ identifier: "ReportSummarySoleTenantNodeAllocation" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface UploadFileInfo {
  /** Output only. Upload URI for the file. */
  signedUri?: string;
  /** Output only. The headers that were used to sign the URI. */
  headers?: Record<string, string>;
  /** Output only. Expiration time of the upload URI. */
  uriExpirationTime?: string;
}

export const UploadFileInfo: Schema.Schema<UploadFileInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signedUri: Schema.optional(Schema.String),
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uriExpirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadFileInfo" });

export interface CpuUsageSample {
  /** Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage. */
  utilizedPercentage?: number;
}

export const CpuUsageSample: Schema.Schema<CpuUsageSample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizedPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CpuUsageSample" });

export interface ReportSummaryHistogramChartDataBucket {
  /** Upper bound - exclusive. */
  upperBound?: string;
  /** Count of items in the bucket. */
  count?: string;
  /** Lower bound - inclusive. */
  lowerBound?: string;
}

export const ReportSummaryHistogramChartDataBucket: Schema.Schema<ReportSummaryHistogramChartDataBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upperBound: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    lowerBound: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryHistogramChartDataBucket" });

export interface ReportSummaryHistogramChartData {
  /** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
  buckets?: ReadonlyArray<ReportSummaryHistogramChartDataBucket>;
}

export const ReportSummaryHistogramChartData: Schema.Schema<ReportSummaryHistogramChartData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(
      Schema.Array(ReportSummaryHistogramChartDataBucket),
    ),
  }).annotate({ identifier: "ReportSummaryHistogramChartData" });

export interface ReportSummaryUtilizationChartData {
  /** Aggregate value which falls into the "Used" bucket. */
  used?: string;
  /** Aggregate value which falls into the "Free" bucket. */
  free?: string;
}

export const ReportSummaryUtilizationChartData: Schema.Schema<ReportSummaryUtilizationChartData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    used: Schema.optional(Schema.String),
    free: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryUtilizationChartData" });

export interface ReportSummaryChartDataDataPoint {
  /** The Y-axis value for this data point. */
  value?: number;
  /** The X-axis label for this data point. */
  label?: string;
}

export const ReportSummaryChartDataDataPoint: Schema.Schema<ReportSummaryChartDataDataPoint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryChartDataDataPoint" });

export interface ReportSummaryChartData {
  /** Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value. */
  dataPoints?: ReadonlyArray<ReportSummaryChartDataDataPoint>;
}

export const ReportSummaryChartData: Schema.Schema<ReportSummaryChartData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataPoints: Schema.optional(Schema.Array(ReportSummaryChartDataDataPoint)),
  }).annotate({ identifier: "ReportSummaryChartData" });

export interface ReportSummaryAssetAggregateStats {
  /** Sum of the CPU core count of all the assets in this collection. */
  totalCores?: string;
  /** Histogram showing a distribution of storage sizes. */
  storageBytesHistogram?: ReportSummaryHistogramChartData;
  /** Histogram showing a distribution of logical CPU core counts. */
  coreCountHistogram?: ReportSummaryHistogramChartData;
  /** Total memory split into Used/Free buckets. */
  storageUtilizationChart?: ReportSummaryUtilizationChartData;
  /** Count of assets grouped by Operating System families. */
  operatingSystem?: ReportSummaryChartData;
  /** Count of the number of unique assets in this collection. */
  totalAssets?: string;
  /** Histogram showing a distribution of memory sizes. */
  memoryBytesHistogram?: ReportSummaryHistogramChartData;
  /** Sum of persistent storage in bytes of all the assets in this collection. */
  totalStorageBytes?: string;
  /** Sum of the memory in bytes of all the assets in this collection. */
  totalMemoryBytes?: string;
  /** Output only. Count of assets grouped by software name. Only present for virtual machines. */
  softwareInstances?: ReportSummaryChartData;
  /** Total memory split into Used/Free buckets. */
  memoryUtilizationChart?: ReportSummaryUtilizationChartData;
}

export const ReportSummaryAssetAggregateStats: Schema.Schema<ReportSummaryAssetAggregateStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalCores: Schema.optional(Schema.String),
    storageBytesHistogram: Schema.optional(ReportSummaryHistogramChartData),
    coreCountHistogram: Schema.optional(ReportSummaryHistogramChartData),
    storageUtilizationChart: Schema.optional(ReportSummaryUtilizationChartData),
    operatingSystem: Schema.optional(ReportSummaryChartData),
    totalAssets: Schema.optional(Schema.String),
    memoryBytesHistogram: Schema.optional(ReportSummaryHistogramChartData),
    totalStorageBytes: Schema.optional(Schema.String),
    totalMemoryBytes: Schema.optional(Schema.String),
    softwareInstances: Schema.optional(ReportSummaryChartData),
    memoryUtilizationChart: Schema.optional(ReportSummaryUtilizationChartData),
  }).annotate({ identifier: "ReportSummaryAssetAggregateStats" });

export interface ImportDataFile {
  /** Output only. The timestamp when the file was created. */
  createTime?: string;
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
  /** Optional. User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Information about a file that is uploaded to a storage service. */
  uploadFileInfo?: UploadFileInfo;
  /** Output only. The name of the file. */
  name?: string;
  /** Output only. The state of the import data file. */
  state?: "STATE_UNSPECIFIED" | "CREATING" | "ACTIVE" | (string & {});
}

export const ImportDataFile: Schema.Schema<ImportDataFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    format: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    uploadFileInfo: Schema.optional(UploadFileInfo),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportDataFile" });

export interface DailyResourceUsageAggregationStats {
  /** Median usage value. */
  median?: number;
  /** Average usage value. */
  average?: number;
  /** 95th percentile usage value. */
  ninteyFifthPercentile?: number;
  /** Peak usage value. */
  peak?: number;
}

export const DailyResourceUsageAggregationStats: Schema.Schema<DailyResourceUsageAggregationStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    median: Schema.optional(Schema.Number),
    average: Schema.optional(Schema.Number),
    ninteyFifthPercentile: Schema.optional(Schema.Number),
    peak: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DailyResourceUsageAggregationStats" });

export interface DailyResourceUsageAggregationDisk {
  /** Optional. Disk write I/O operations per second. */
  writeIops?: DailyResourceUsageAggregationStats;
  /** Optional. Disk I/O operations per second. */
  iops?: DailyResourceUsageAggregationStats;
  /** Optional. Disk read I/O operations per second. */
  readIops?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationDisk: Schema.Schema<DailyResourceUsageAggregationDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writeIops: Schema.optional(DailyResourceUsageAggregationStats),
    iops: Schema.optional(DailyResourceUsageAggregationStats),
    readIops: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationDisk" });

export interface Operation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface DiskPartition {
  /** Partition UUID. */
  uuid?: string;
  /** Partition file system. */
  fileSystem?: string;
  /** Mount point (Linux/Windows) or drive letter (Windows). */
  mountPoint?: string;
  /** Partition type. */
  type?: string;
  /** Partition free space. */
  freeBytes?: string;
  /** Sub-partitions. */
  subPartitions?: DiskPartitionList;
  /** Partition capacity. */
  capacityBytes?: string;
}

export const DiskPartition: Schema.Schema<DiskPartition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      uuid: Schema.optional(Schema.String),
      fileSystem: Schema.optional(Schema.String),
      mountPoint: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      freeBytes: Schema.optional(Schema.String),
      subPartitions: Schema.optional(DiskPartitionList),
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

export interface VmwareDiskConfig {
  /** RDM compatibility mode. */
  rdmCompatibility?:
    | "RDM_COMPATIBILITY_UNSPECIFIED"
    | "PHYSICAL_COMPATIBILITY"
    | "VIRTUAL_COMPATIBILITY"
    | (string & {});
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
  /** VMDK disk mode. */
  vmdkMode?:
    | "VMDK_MODE_UNSPECIFIED"
    | "DEPENDENT"
    | "INDEPENDENT_PERSISTENT"
    | "INDEPENDENT_NONPERSISTENT"
    | (string & {});
}

export const VmwareDiskConfig: Schema.Schema<VmwareDiskConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rdmCompatibility: Schema.optional(Schema.String),
    backingType: Schema.optional(Schema.String),
    shared: Schema.optional(Schema.Boolean),
    vmdkMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwareDiskConfig" });

export interface DiskEntry {
  /** Partition layout. */
  partitions?: DiskPartitionList;
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
  /** Disk hardware address (e.g. 0:1 for SCSI). */
  hwAddress?: string;
  /** VMware disk details. */
  vmware?: VmwareDiskConfig;
  /** Disk free space. */
  freeBytes?: string;
  /** Disk capacity. */
  capacityBytes?: string;
  /** Disk label. */
  diskLabel?: string;
  /** Disk label type (e.g. BIOS/GPT) */
  diskLabelType?: string;
}

export const DiskEntry: Schema.Schema<DiskEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(DiskPartitionList),
    interfaceType: Schema.optional(Schema.String),
    hwAddress: Schema.optional(Schema.String),
    vmware: Schema.optional(VmwareDiskConfig),
    freeBytes: Schema.optional(Schema.String),
    capacityBytes: Schema.optional(Schema.String),
    diskLabel: Schema.optional(Schema.String),
    diskLabelType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskEntry" });

export interface VmwarePlatformDetails {
  /** Folder name in vCenter where asset resides. */
  vcenterFolder?: string;
  /** VMware os enum - https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html. */
  osid?: string;
  /** ESX version. */
  esxVersion?: string;
  /** vCenter version. */
  vcenterVersion?: string;
  /** vCenter VM ID. */
  vcenterVmId?: string;
  /** Whether the ESX is hyperthreaded. */
  esxHyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** vCenter URI used in collection. */
  vcenterUri?: string;
}

export const VmwarePlatformDetails: Schema.Schema<VmwarePlatformDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vcenterFolder: Schema.optional(Schema.String),
    osid: Schema.optional(Schema.String),
    esxVersion: Schema.optional(Schema.String),
    vcenterVersion: Schema.optional(Schema.String),
    vcenterVmId: Schema.optional(Schema.String),
    esxHyperthreading: Schema.optional(Schema.String),
    vcenterUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "VmwarePlatformDetails" });

export interface Source {
  /** Output only. The full name of the source. */
  name?: string;
  /** If `true`, the source is managed by other service(s). */
  managed?: boolean;
  /** Output only. The number of frames that were reported by the source and contained errors. */
  errorFrameCount?: number;
  /** User-friendly display name. */
  displayName?: string;
  /** Data source type. */
  type?:
    | "SOURCE_TYPE_UNKNOWN"
    | "SOURCE_TYPE_UPLOAD"
    | "SOURCE_TYPE_GUEST_OS_SCAN"
    | "SOURCE_TYPE_INVENTORY_SCAN"
    | "SOURCE_TYPE_CUSTOM"
    | "SOURCE_TYPE_DISCOVERY_CLIENT"
    | (string & {});
  /** Output only. Number of frames that are still being processed. */
  pendingFrameCount?: number;
  /** Output only. The state of the source. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "DELETING"
    | "INVALID"
    | (string & {});
  /** Free-text description. */
  description?: string;
  /** The information confidence of the source. The higher the value, the higher the confidence. */
  priority?: number;
  /** Output only. The timestamp when the source was created. */
  createTime?: string;
  /** Output only. The timestamp when the source was last updated. */
  updateTime?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    managed: Schema.optional(Schema.Boolean),
    errorFrameCount: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    pendingFrameCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.Number),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface ListSourcesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of sources. */
  sources?: ReadonlyArray<Source>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListSourcesResponse: Schema.Schema<ListSourcesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    sources: Schema.optional(Schema.Array(Source)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSourcesResponse" });

export interface MachinePreferences {
  /** Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series. */
  allowedMachineSeries?: ReadonlyArray<MachineSeries>;
}

export const MachinePreferences: Schema.Schema<MachinePreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedMachineSeries: Schema.optional(Schema.Array(MachineSeries)),
  }).annotate({ identifier: "MachinePreferences" });

export interface ComputeEnginePreferences {
  /** Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data. */
  persistentDiskType?:
    | "PERSISTENT_DISK_TYPE_UNSPECIFIED"
    | "PERSISTENT_DISK_TYPE_STANDARD"
    | "PERSISTENT_DISK_TYPE_BALANCED"
    | "PERSISTENT_DISK_TYPE_SSD"
    | (string & {});
  /** Preferences concerning the machine types to consider on Compute Engine. */
  machinePreferences?: MachinePreferences;
  /** License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan. */
  licenseType?:
    | "LICENSE_TYPE_UNSPECIFIED"
    | "LICENSE_TYPE_DEFAULT"
    | "LICENSE_TYPE_BRING_YOUR_OWN_LICENSE"
    | (string & {});
}

export const ComputeEnginePreferences: Schema.Schema<ComputeEnginePreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    persistentDiskType: Schema.optional(Schema.String),
    machinePreferences: Schema.optional(MachinePreferences),
    licenseType: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeEnginePreferences" });

export interface MemoryUsageSample {
  /** Percentage of system memory utilized. Must be in the interval [0, 100]. */
  utilizedPercentage?: number;
}

export const MemoryUsageSample: Schema.Schema<MemoryUsageSample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizedPercentage: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MemoryUsageSample" });

export interface Money {
  /** The three-letter currency code defined in ISO 4217. */
  currencyCode?: string;
  /** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
  nanos?: number;
  /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
  units?: string;
}

export const Money: Schema.Schema<Money> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currencyCode: Schema.optional(Schema.String),
    nanos: Schema.optional(Schema.Number),
    units: Schema.optional(Schema.String),
  }).annotate({ identifier: "Money" });

export interface ReportSummarySoleTenantFinding {
  /** Set of regions in which the assets are allocated */
  allocatedRegions?: ReadonlyArray<string>;
  /** Count of assets which are allocated */
  allocatedAssetCount?: string;
  /** Set of per-nodetype allocation records */
  nodeAllocations?: ReadonlyArray<ReportSummarySoleTenantNodeAllocation>;
}

export const ReportSummarySoleTenantFinding: Schema.Schema<ReportSummarySoleTenantFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
    allocatedAssetCount: Schema.optional(Schema.String),
    nodeAllocations: Schema.optional(
      Schema.Array(ReportSummarySoleTenantNodeAllocation),
    ),
  }).annotate({ identifier: "ReportSummarySoleTenantFinding" });

export interface ReportSummaryVmwareNode {
  /** Code to identify VMware Engine node series, e.g. "ve1-standard-72". Based on the displayName of cloud.google.com/vmware-engine/docs/reference/rest/v1/projects.locations.nodeTypes */
  code?: string;
}

export const ReportSummaryVmwareNode: Schema.Schema<ReportSummaryVmwareNode> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryVmwareNode" });

export interface ReportSummaryVmwareNodeAllocation {
  /** VMWare node type, e.g. "ve1-standard-72" */
  vmwareNode?: ReportSummaryVmwareNode;
  /** Count of this node type to be provisioned */
  nodeCount?: string;
  /** Count of assets allocated to these nodes */
  allocatedAssetCount?: string;
}

export const ReportSummaryVmwareNodeAllocation: Schema.Schema<ReportSummaryVmwareNodeAllocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmwareNode: Schema.optional(ReportSummaryVmwareNode),
    nodeCount: Schema.optional(Schema.String),
    allocatedAssetCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryVmwareNodeAllocation" });

export interface ReportSummaryVmwareEngineFinding {
  /** Set of regions in which the assets were allocated */
  allocatedRegions?: ReadonlyArray<string>;
  /** Count of assets which are allocated */
  allocatedAssetCount?: string;
  /** Set of per-nodetype allocation records */
  nodeAllocations?: ReadonlyArray<ReportSummaryVmwareNodeAllocation>;
}

export const ReportSummaryVmwareEngineFinding: Schema.Schema<ReportSummaryVmwareEngineFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allocatedRegions: Schema.optional(Schema.Array(Schema.String)),
    allocatedAssetCount: Schema.optional(Schema.String),
    nodeAllocations: Schema.optional(
      Schema.Array(ReportSummaryVmwareNodeAllocation),
    ),
  }).annotate({ identifier: "ReportSummaryVmwareEngineFinding" });

export interface SoleTenancyPreferences {
  /** Sole Tenancy nodes maintenance policy. */
  hostMaintenancePolicy?:
    | "HOST_MAINTENANCE_POLICY_UNSPECIFIED"
    | "HOST_MAINTENANCE_POLICY_DEFAULT"
    | "HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE"
    | "HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP"
    | (string & {});
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "ON_DEMAND"
    | "COMMITMENT_1_YEAR"
    | "COMMITMENT_3_YEAR"
    | (string & {});
  /** CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. */
  cpuOvercommitRatio?: number;
  /** A list of sole tenant node types. An empty list means that all possible node types will be considered. */
  nodeTypes?: ReadonlyArray<SoleTenantNodeType>;
}

export const SoleTenancyPreferences: Schema.Schema<SoleTenancyPreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostMaintenancePolicy: Schema.optional(Schema.String),
    commitmentPlan: Schema.optional(Schema.String),
    cpuOvercommitRatio: Schema.optional(Schema.Number),
    nodeTypes: Schema.optional(Schema.Array(SoleTenantNodeType)),
  }).annotate({ identifier: "SoleTenancyPreferences" });

export interface RegionPreferences {
  /** A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions. */
  preferredRegions?: ReadonlyArray<string>;
}

export const RegionPreferences: Schema.Schema<RegionPreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferredRegions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "RegionPreferences" });

export interface VmwareEnginePreferences {
  /** Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. */
  commitmentPlan?:
    | "COMMITMENT_PLAN_UNSPECIFIED"
    | "ON_DEMAND"
    | "COMMITMENT_1_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_3_YEAR_MONTHLY_PAYMENTS"
    | "COMMITMENT_1_YEAR_UPFRONT_PAYMENT"
    | "COMMITMENT_3_YEAR_UPFRONT_PAYMENT"
    | (string & {});
  /** CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. */
  cpuOvercommitRatio?: number;
  /** Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. */
  memoryOvercommitRatio?: number;
  /** The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0. */
  storageDeduplicationCompressionRatio?: number;
}

export const VmwareEnginePreferences: Schema.Schema<VmwareEnginePreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commitmentPlan: Schema.optional(Schema.String),
    cpuOvercommitRatio: Schema.optional(Schema.Number),
    memoryOvercommitRatio: Schema.optional(Schema.Number),
    storageDeduplicationCompressionRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "VmwareEnginePreferences" });

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
  /** Compute Engine preferences concern insights and recommendations for Compute Engine target. */
  computeEnginePreferences?: ComputeEnginePreferences;
  /** Region preferences for assets using this preference set. If you are unsure which value to set, the migration service API region is often a good value to start with. */
  regionPreferences?: RegionPreferences;
  /** Preferences concerning insights and recommendations for Google Cloud VMware Engine. */
  vmwareEnginePreferences?: VmwareEnginePreferences;
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

export const VirtualMachinePreferences: Schema.Schema<VirtualMachinePreferences> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    soleTenancyPreferences: Schema.optional(SoleTenancyPreferences),
    sizingOptimizationStrategy: Schema.optional(Schema.String),
    computeEnginePreferences: Schema.optional(ComputeEnginePreferences),
    regionPreferences: Schema.optional(RegionPreferences),
    vmwareEnginePreferences: Schema.optional(VmwareEnginePreferences),
    targetProduct: Schema.optional(Schema.String),
    commitmentPlan: Schema.optional(Schema.String),
  }).annotate({ identifier: "VirtualMachinePreferences" });

export interface ReportSummaryGroupPreferenceSetFinding {
  /** Licensing monthly cost for this preference set. */
  monthlyCostOsLicense?: Money;
  /** A set of findings that applies to Compute Engine machines in the input. */
  computeEngineFinding?: ReportSummaryComputeEngineFinding;
  /** A set of findings that applies to Sole-Tenant machines in the input. */
  soleTenantFinding?: ReportSummarySoleTenantFinding;
  /** Description for the Preference Set. */
  description?: string;
  /** Network Egress monthly cost for this preference set. */
  monthlyCostNetworkEgress?: Money;
  /** A set of findings that applies to VMWare machines in the input. */
  vmwareEngineFinding?: ReportSummaryVmwareEngineFinding;
  /** Total monthly cost for this preference set. */
  monthlyCostTotal?: Money;
  /** Compute monthly cost for this preference set. */
  monthlyCostCompute?: Money;
  /** Display Name of the Preference Set */
  displayName?: string;
  /** Storage monthly cost for this preference set. */
  monthlyCostStorage?: Money;
  /** A set of preferences that applies to all machines in the context. */
  machinePreferences?: VirtualMachinePreferences;
  /** Miscellaneous monthly cost for this preference set. */
  monthlyCostOther?: Money;
}

export const ReportSummaryGroupPreferenceSetFinding: Schema.Schema<ReportSummaryGroupPreferenceSetFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monthlyCostOsLicense: Schema.optional(Money),
    computeEngineFinding: Schema.optional(ReportSummaryComputeEngineFinding),
    soleTenantFinding: Schema.optional(ReportSummarySoleTenantFinding),
    description: Schema.optional(Schema.String),
    monthlyCostNetworkEgress: Schema.optional(Money),
    vmwareEngineFinding: Schema.optional(ReportSummaryVmwareEngineFinding),
    monthlyCostTotal: Schema.optional(Money),
    monthlyCostCompute: Schema.optional(Money),
    displayName: Schema.optional(Schema.String),
    monthlyCostStorage: Schema.optional(Money),
    machinePreferences: Schema.optional(VirtualMachinePreferences),
    monthlyCostOther: Schema.optional(Money),
  }).annotate({ identifier: "ReportSummaryGroupPreferenceSetFinding" });

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

export const GenericPlatformDetails: Schema.Schema<GenericPlatformDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hyperthreading: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenericPlatformDetails" });

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

export const PhysicalPlatformDetails: Schema.Schema<PhysicalPlatformDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
  }).annotate({ identifier: "PhysicalPlatformDetails" });

export interface AwsEc2PlatformDetails {
  /** AWS platform's machine type label. */
  machineTypeLabel?: string;
  /** Optional. Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** The location of the machine in the AWS format. */
  location?: string;
}

export const AwsEc2PlatformDetails: Schema.Schema<AwsEc2PlatformDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineTypeLabel: Schema.optional(Schema.String),
    hyperthreading: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "AwsEc2PlatformDetails" });

export interface AzureVmPlatformDetails {
  /** Whether the machine is hyperthreaded. */
  hyperthreading?:
    | "HYPERTHREADING_STATUS_UNSPECIFIED"
    | "HYPERTHREADING_STATUS_DISABLED"
    | "HYPERTHREADING_STATUS_ENABLED"
    | (string & {});
  /** Azure platform's machine type label. */
  machineTypeLabel?: string;
  /** Azure platform's provisioning state. */
  provisioningState?: string;
  /** The location of the machine in the Azure format. */
  location?: string;
}

export const AzureVmPlatformDetails: Schema.Schema<AzureVmPlatformDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hyperthreading: Schema.optional(Schema.String),
    machineTypeLabel: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).annotate({ identifier: "AzureVmPlatformDetails" });

export interface PlatformDetails {
  /** Generic platform details. */
  genericDetails?: GenericPlatformDetails;
  /** VMware specific details. */
  vmwareDetails?: VmwarePlatformDetails;
  /** Physical machines platform details. */
  physicalDetails?: PhysicalPlatformDetails;
  /** AWS EC2 specific details. */
  awsEc2Details?: AwsEc2PlatformDetails;
  /** Azure VM specific details. */
  azureVmDetails?: AzureVmPlatformDetails;
}

export const PlatformDetails: Schema.Schema<PlatformDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericDetails: Schema.optional(GenericPlatformDetails),
    vmwareDetails: Schema.optional(VmwarePlatformDetails),
    physicalDetails: Schema.optional(PhysicalPlatformDetails),
    awsEc2Details: Schema.optional(AwsEc2PlatformDetails),
    azureVmDetails: Schema.optional(AzureVmPlatformDetails),
  }).annotate({ identifier: "PlatformDetails" });

export interface MySqlVariable {
  /** Required. The variable category. */
  category?: string;
  /** Required. The variable name. */
  variable?: string;
  /** Required. The variable value. */
  value?: string;
}

export const MySqlVariable: Schema.Schema<MySqlVariable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    variable: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlVariable" });

export interface SqlServerServerFlag {
  /** Required. The server flag name. */
  serverFlagName?: string;
  /** Required. The server flag value set by the user. */
  value?: string;
  /** Required. The server flag actual value. If `value_in_use` is different from `value` it means that either the configuration change was not applied or it is an expected behavior. See SQL Server documentation for more details. */
  valueInUse?: string;
}

export const SqlServerServerFlag: Schema.Schema<SqlServerServerFlag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverFlagName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    valueInUse: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerServerFlag" });

export interface FitDescriptor {
  /** Output only. Fit level. */
  fitLevel?:
    | "FIT_LEVEL_UNSPECIFIED"
    | "FIT"
    | "NO_FIT"
    | "REQUIRES_EFFORT"
    | (string & {});
}

export const FitDescriptor: Schema.Schema<FitDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fitLevel: Schema.optional(Schema.String),
  }).annotate({ identifier: "FitDescriptor" });

export interface GuestInstalledApplication {
  /** Installed application version. */
  version?: string;
  /** Installed application vendor. */
  vendor?: string;
  /** Installed application name. */
  applicationName?: string;
  /** The time when the application was installed. */
  installTime?: string;
  /** Source path. */
  path?: string;
  /** License strings associated with the installed application. */
  licenses?: ReadonlyArray<string>;
}

export const GuestInstalledApplication: Schema.Schema<GuestInstalledApplication> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
    applicationName: Schema.optional(Schema.String),
    installTime: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    licenses: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GuestInstalledApplication" });

export interface GuestInstalledApplicationList {
  /** Application entries. */
  entries?: ReadonlyArray<GuestInstalledApplication>;
}

export const GuestInstalledApplicationList: Schema.Schema<GuestInstalledApplicationList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(GuestInstalledApplication)),
  }).annotate({ identifier: "GuestInstalledApplicationList" });

export interface AwsRds {}

export const AwsRds: Schema.Schema<AwsRds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AwsRds",
  });

export interface DiskEntryList {
  /** Disk entries. */
  entries?: ReadonlyArray<DiskEntry>;
}

export const DiskEntryList: Schema.Schema<DiskEntryList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(DiskEntry)),
  }).annotate({ identifier: "DiskEntryList" });

export interface MachineDiskDetails {
  /** List of disks. */
  disks?: DiskEntryList;
  /** Disk total Capacity. */
  totalCapacityBytes?: string;
  /** Total disk free space. */
  totalFreeBytes?: string;
}

export const MachineDiskDetails: Schema.Schema<MachineDiskDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disks: Schema.optional(DiskEntryList),
    totalCapacityBytes: Schema.optional(Schema.String),
    totalFreeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "MachineDiskDetails" });

export interface RunningService {
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
  /** Service pid. */
  pid?: string;
  /** Service name. */
  serviceName?: string;
  /** Service state (OS-agnostic). */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "PAUSED" | "STOPPED" | (string & {});
}

export const RunningService: Schema.Schema<RunningService> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startMode: Schema.optional(Schema.String),
    exePath: Schema.optional(Schema.String),
    cmdline: Schema.optional(Schema.String),
    pid: Schema.optional(Schema.String),
    serviceName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunningService" });

export interface RunningServiceList {
  /** Running service entries. */
  entries?: ReadonlyArray<RunningService>;
}

export const RunningServiceList: Schema.Schema<RunningServiceList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(RunningService)),
  }).annotate({ identifier: "RunningServiceList" });

export interface ImportRowErrorCsvErrorDetails {
  /** The row number where the error was detected. */
  rowNumber?: number;
}

export const ImportRowErrorCsvErrorDetails: Schema.Schema<ImportRowErrorCsvErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ImportRowErrorCsvErrorDetails" });

export interface ImportRowErrorArchiveErrorDetails {
  /** Error details for a CSV file. */
  csvError?: ImportRowErrorCsvErrorDetails;
  /** Output only. The file path inside the archive where the error was detected. */
  filePath?: string;
}

export const ImportRowErrorArchiveErrorDetails: Schema.Schema<ImportRowErrorArchiveErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    csvError: Schema.optional(ImportRowErrorCsvErrorDetails),
    filePath: Schema.optional(Schema.String),
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

export const ImportError: Schema.Schema<ImportError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    errorDetails: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportError" });

export interface ImportRowErrorXlsxErrorDetails {
  /** The row number where the error was detected. */
  rowNumber?: number;
  /** The name of the sheet where the error was detected. */
  sheet?: string;
}

export const ImportRowErrorXlsxErrorDetails: Schema.Schema<ImportRowErrorXlsxErrorDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowNumber: Schema.optional(Schema.Number),
    sheet: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImportRowErrorXlsxErrorDetails" });

export interface ImportRowError {
  /** The row number where the error was detected. */
  rowNumber?: number;
  /** The name of the VM in the row. */
  vmName?: string;
  /** Error details for an archive file. */
  archiveError?: ImportRowErrorArchiveErrorDetails;
  /** The list of errors detected in the row. */
  errors?: ReadonlyArray<ImportError>;
  /** Error details for an XLSX file. */
  xlsxError?: ImportRowErrorXlsxErrorDetails;
  /** The VM UUID. */
  vmUuid?: string;
  /** Output only. The asset title. */
  assetTitle?: string;
  /** Error details for a CSV file. */
  csvError?: ImportRowErrorCsvErrorDetails;
}

export const ImportRowError: Schema.Schema<ImportRowError> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowNumber: Schema.optional(Schema.Number),
    vmName: Schema.optional(Schema.String),
    archiveError: Schema.optional(ImportRowErrorArchiveErrorDetails),
    errors: Schema.optional(Schema.Array(ImportError)),
    xlsxError: Schema.optional(ImportRowErrorXlsxErrorDetails),
    vmUuid: Schema.optional(Schema.String),
    assetTitle: Schema.optional(Schema.String),
    csvError: Schema.optional(ImportRowErrorCsvErrorDetails),
  }).annotate({ identifier: "ImportRowError" });

export interface FileValidationReport {
  /** Partial list of rows that encountered validation error. */
  rowErrors?: ReadonlyArray<ImportRowError>;
  /** List of file level errors. */
  fileErrors?: ReadonlyArray<ImportError>;
  /** The name of the file. */
  fileName?: string;
  /** Flag indicating that processing was aborted due to maximum number of errors. */
  partialReport?: boolean;
}

export const FileValidationReport: Schema.Schema<FileValidationReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rowErrors: Schema.optional(Schema.Array(ImportRowError)),
    fileErrors: Schema.optional(Schema.Array(ImportError)),
    fileName: Schema.optional(Schema.String),
    partialReport: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "FileValidationReport" });

export interface PreferenceSet {
  /** Output only. The timestamp when the preference set was created. */
  createTime?: string;
  /** Output only. The timestamp when the preference set was last updated. */
  updateTime?: string;
  /** Output only. Name of the preference set. */
  name?: string;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Optional. A set of preferences that applies to all virtual machines in the context. */
  virtualMachinePreferences?: VirtualMachinePreferences;
  /** A description of the preference set. */
  description?: string;
}

export const PreferenceSet: Schema.Schema<PreferenceSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    virtualMachinePreferences: Schema.optional(VirtualMachinePreferences),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "PreferenceSet" });

export interface ListPreferenceSetsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of PreferenceSets */
  preferenceSets?: ReadonlyArray<PreferenceSet>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListPreferenceSetsResponse: Schema.Schema<ListPreferenceSetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    preferenceSets: Schema.optional(Schema.Array(PreferenceSet)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPreferenceSetsResponse" });

export interface RunningProcess {
  /** Process extended attributes. */
  attributes?: Record<string, string>;
  /** Process ID. */
  pid?: string;
  /** Process binary path. */
  exePath?: string;
  /** Process full command line. */
  cmdline?: string;
  /** User running the process. */
  user?: string;
}

export const RunningProcess: Schema.Schema<RunningProcess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pid: Schema.optional(Schema.String),
    exePath: Schema.optional(Schema.String),
    cmdline: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunningProcess" });

export interface RunningProcessList {
  /** Running process entries. */
  entries?: ReadonlyArray<RunningProcess>;
}

export const RunningProcessList: Schema.Schema<RunningProcessList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(RunningProcess)),
  }).annotate({ identifier: "RunningProcessList" });

export interface FrameViolationEntry {
  /** The field of the original frame where the violation occurred. */
  field?: string;
  /** A message describing the violation. */
  violation?: string;
}

export const FrameViolationEntry: Schema.Schema<FrameViolationEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    violation: Schema.optional(Schema.String),
  }).annotate({ identifier: "FrameViolationEntry" });

export interface XlsxOutputFile {
  /** Output only. Signed URI destination. */
  signedUri?: SignedUri;
}

export const XlsxOutputFile: Schema.Schema<XlsxOutputFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const OutputFile: Schema.Schema<OutputFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    csvOutputFile: Schema.optional(CsvOutputFile),
    xlsxOutputFile: Schema.optional(XlsxOutputFile),
    fileSizeBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "OutputFile" });

export interface OutputFileList {
  /** Output only. List of output files. */
  entries?: ReadonlyArray<OutputFile>;
}

export const OutputFileList: Schema.Schema<OutputFileList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(OutputFile)),
  }).annotate({ identifier: "OutputFileList" });

export interface SignedUris {
  /** Output only. List of signed URIs. */
  signedUris?: ReadonlyArray<SignedUri>;
}

export const SignedUris: Schema.Schema<SignedUris> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signedUris: Schema.optional(Schema.Array(SignedUri)),
  }).annotate({ identifier: "SignedUris" });

export interface AssetsExportJobExecutionResult {
  /** Output only. List of output files. */
  outputFiles?: OutputFileList;
  /** Output only. Signed URLs for downloading export artifacts. */
  signedUris?: SignedUris;
  /** Output only. Error encountered during export. */
  error?: Status;
}

export const AssetsExportJobExecutionResult: Schema.Schema<AssetsExportJobExecutionResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputFiles: Schema.optional(OutputFileList),
    signedUris: Schema.optional(SignedUris),
    error: Schema.optional(Status),
  }).annotate({ identifier: "AssetsExportJobExecutionResult" });

export interface AssetsExportJobExecution {
  /** Output only. Number of assets requested for export after resolving the requested filters. */
  requestedAssetCount?: number;
  /** Output only. Result of the export execution. */
  result?: AssetsExportJobExecutionResult;
  /** Output only. Completion time of the export. */
  endTime?: string;
  /** Output only. Execution timestamp. */
  startTime?: string;
  /** Output only. Globally unique identifier of the execution. */
  executionId?: string;
  /** Output only. Expiration time for the export and artifacts. */
  expireTime?: string;
}

export const AssetsExportJobExecution: Schema.Schema<AssetsExportJobExecution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedAssetCount: Schema.optional(Schema.Number),
    result: Schema.optional(AssetsExportJobExecutionResult),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    executionId: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetsExportJobExecution" });

export interface AggregationFrequency {}

export const AggregationFrequency: Schema.Schema<AggregationFrequency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AggregationFrequency",
  });

export interface AggregationSum {}

export const AggregationSum: Schema.Schema<AggregationSum> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AggregationSum",
  });

export interface AggregationCount {}

export const AggregationCount: Schema.Schema<AggregationCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AggregationCount",
  });

export interface AggregationHistogram {
  /** Lower bounds of buckets. The response will contain `n+1` buckets for `n` bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds. */
  lowerBounds?: ReadonlyArray<number>;
}

export const AggregationHistogram: Schema.Schema<AggregationHistogram> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowerBounds: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "AggregationHistogram" });

export interface Aggregation {
  /** The name of the field on which to aggregate. */
  field?: string;
  /** Creates a frequency distribution of all field values. */
  frequency?: AggregationFrequency;
  /** Sum over a numeric field. */
  sum?: AggregationSum;
  /** Count the number of matching objects. */
  count?: AggregationCount;
  /** Creates a bucketed histogram of field values. */
  histogram?: AggregationHistogram;
}

export const Aggregation: Schema.Schema<Aggregation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.String),
    frequency: Schema.optional(AggregationFrequency),
    sum: Schema.optional(AggregationSum),
    count: Schema.optional(AggregationCount),
    histogram: Schema.optional(AggregationHistogram),
  }).annotate({ identifier: "Aggregation" });

export interface AggregateAssetsValuesRequest {
  /** Array of aggregations to perform. Up to 25 aggregations can be defined. */
  aggregations?: ReadonlyArray<Aggregation>;
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
  /** Optional. The aggregation will be performed on assets that match the provided filter. */
  filter?: string;
}

export const AggregateAssetsValuesRequest: Schema.Schema<AggregateAssetsValuesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregations: Schema.optional(Schema.Array(Aggregation)),
    showHidden: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregateAssetsValuesRequest" });

export interface Migrationcenter_Date {
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
}

export const Migrationcenter_Date: Schema.Schema<Migrationcenter_Date> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    month: Schema.optional(Schema.Number),
    year: Schema.optional(Schema.Number),
    day: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Migrationcenter_Date" });

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
  /** Optional. The number of tables. */
  tableCount?: number;
  /** Optional. The number of encrypted tables. */
  encryptedTableCount?: number;
}

export const MySqlStorageEngineDetails: Schema.Schema<MySqlStorageEngineDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    engine: Schema.optional(Schema.String),
    tableCount: Schema.optional(Schema.Number),
    encryptedTableCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MySqlStorageEngineDetails" });

export interface MySqlSchemaDetails {
  /** Optional. Mysql storage engine tables. */
  storageEngines?: ReadonlyArray<MySqlStorageEngineDetails>;
}

export const MySqlSchemaDetails: Schema.Schema<MySqlSchemaDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageEngines: Schema.optional(Schema.Array(MySqlStorageEngineDetails)),
  }).annotate({ identifier: "MySqlSchemaDetails" });

export interface SqlServerSchemaDetails {
  /** Optional. SqlServer number of CLR objects. */
  clrObjectCount?: number;
}

export const SqlServerSchemaDetails: Schema.Schema<SqlServerSchemaDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clrObjectCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SqlServerSchemaDetails" });

export interface PostgreSqlExtension {
  /** Required. The extension version. */
  version?: string;
  /** Required. The extension name. */
  extension?: string;
}

export const PostgreSqlExtension: Schema.Schema<PostgreSqlExtension> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    extension: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgreSqlExtension" });

export interface PostgreSqlSchemaDetails {
  /** Optional. PostgreSql extensions. */
  postgresqlExtensions?: ReadonlyArray<PostgreSqlExtension>;
  /** Optional. PostgreSql foreign tables. */
  foreignTablesCount?: number;
}

export const PostgreSqlSchemaDetails: Schema.Schema<PostgreSqlSchemaDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postgresqlExtensions: Schema.optional(Schema.Array(PostgreSqlExtension)),
    foreignTablesCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PostgreSqlSchemaDetails" });

export interface DatabaseObjects {
  /** Optional. The number of objects. */
  count?: string;
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
}

export const DatabaseObjects: Schema.Schema<DatabaseObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseObjects" });

export interface DatabaseSchema {
  /** Required. The name of the schema. */
  schemaName?: string;
  /** Optional. Details of a Mysql schema. */
  mysql?: MySqlSchemaDetails;
  /** Optional. The total size of tables in bytes. */
  tablesSizeBytes?: string;
  /** Optional. Details of a SqlServer schema. */
  sqlServer?: SqlServerSchemaDetails;
  /** Optional. Details of a PostgreSql schema. */
  postgresql?: PostgreSqlSchemaDetails;
  /** Optional. List of details of objects by category. */
  objects?: ReadonlyArray<DatabaseObjects>;
}

export const DatabaseSchema: Schema.Schema<DatabaseSchema> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemaName: Schema.optional(Schema.String),
    mysql: Schema.optional(MySqlSchemaDetails),
    tablesSizeBytes: Schema.optional(Schema.String),
    sqlServer: Schema.optional(SqlServerSchemaDetails),
    postgresql: Schema.optional(PostgreSqlSchemaDetails),
    objects: Schema.optional(Schema.Array(DatabaseObjects)),
  }).annotate({ identifier: "DatabaseSchema" });

export interface FstabEntry {
  /** Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time. */
  passno?: number;
  /** The mount point for the filesystem. */
  file?: string;
  /** Mount options associated with the filesystem. */
  mntops?: string;
  /** The block special device or remote filesystem to be mounted. */
  spec?: string;
  /** The type of the filesystem. */
  vfstype?: string;
  /** Used by dump to determine which filesystems need to be dumped. */
  freq?: number;
}

export const FstabEntry: Schema.Schema<FstabEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    passno: Schema.optional(Schema.Number),
    file: Schema.optional(Schema.String),
    mntops: Schema.optional(Schema.String),
    spec: Schema.optional(Schema.String),
    vfstype: Schema.optional(Schema.String),
    freq: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FstabEntry" });

export interface AssetList {
  /** Required. A list of asset IDs */
  assetIds?: ReadonlyArray<string>;
}

export const AssetList: Schema.Schema<AssetList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AssetList" });

export interface Relation {
  /** Optional. The type of the relation. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "LOGICAL_DATABASE"
    | "DATABASE_DEPLOYMENT_HOSTING_SERVER"
    | (string & {});
  /** Output only. Identifier. The identifier of the relation. */
  name?: string;
  /** Output only. The destination asset name in the relation. */
  dstAsset?: string;
  /** Output only. The source asset name in the relation. */
  srcAsset?: string;
  /** Output only. The timestamp when the relation was created. */
  createTime?: string;
}

export const Relation: Schema.Schema<Relation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dstAsset: Schema.optional(Schema.String),
    srcAsset: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Relation" });

export interface FstabEntryList {
  /** Fstab entries. */
  entries?: ReadonlyArray<FstabEntry>;
}

export const FstabEntryList: Schema.Schema<FstabEntryList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(FstabEntry)),
  }).annotate({ identifier: "FstabEntryList" });

export interface DailyResourceUsageAggregationNetwork {
  /** Network ingress in B/s. */
  ingressBps?: DailyResourceUsageAggregationStats;
  /** Network egress in B/s. */
  egressBps?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationNetwork: Schema.Schema<DailyResourceUsageAggregationNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingressBps: Schema.optional(DailyResourceUsageAggregationStats),
    egressBps: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationNetwork" });

export interface DailyResourceUsageAggregationCPU {
  /** CPU utilization percentage. */
  utilizationPercentage?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationCPU: Schema.Schema<DailyResourceUsageAggregationCPU> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationPercentage: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationCPU" });

export interface DailyResourceUsageAggregationMemory {
  /** Memory utilization percentage. */
  utilizationPercentage?: DailyResourceUsageAggregationStats;
}

export const DailyResourceUsageAggregationMemory: Schema.Schema<DailyResourceUsageAggregationMemory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    utilizationPercentage: Schema.optional(DailyResourceUsageAggregationStats),
  }).annotate({ identifier: "DailyResourceUsageAggregationMemory" });

export interface DailyResourceUsageAggregation {
  /** Aggregation date. Day boundaries are at midnight UTC. */
  date?: Migrationcenter_Date;
  /** Disk usage. */
  disk?: DailyResourceUsageAggregationDisk;
  /** Network usage. */
  network?: DailyResourceUsageAggregationNetwork;
  /** CPU usage. */
  cpu?: DailyResourceUsageAggregationCPU;
  /** Memory usage. */
  memory?: DailyResourceUsageAggregationMemory;
}

export const DailyResourceUsageAggregation: Schema.Schema<DailyResourceUsageAggregation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Migrationcenter_Date),
    disk: Schema.optional(DailyResourceUsageAggregationDisk),
    network: Schema.optional(DailyResourceUsageAggregationNetwork),
    cpu: Schema.optional(DailyResourceUsageAggregationCPU),
    memory: Schema.optional(DailyResourceUsageAggregationMemory),
  }).annotate({ identifier: "DailyResourceUsageAggregation" });

export interface DatabaseInstanceNetwork {
  /** Optional. The instance's IP addresses. */
  ipAddresses?: ReadonlyArray<string>;
  /** Optional. The instance's host names. */
  hostNames?: ReadonlyArray<string>;
  /** Optional. The instance's primary MAC address. */
  primaryMacAddress?: string;
}

export const DatabaseInstanceNetwork: Schema.Schema<DatabaseInstanceNetwork> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    hostNames: Schema.optional(Schema.Array(Schema.String)),
    primaryMacAddress: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseInstanceNetwork" });

export interface AssetsExportJobInventory {}

export const AssetsExportJobInventory: Schema.Schema<AssetsExportJobInventory> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AssetsExportJobInventory",
  });

export interface AssetsExportJobNetworkDependencies {}

export const AssetsExportJobNetworkDependencies: Schema.Schema<AssetsExportJobNetworkDependencies> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AssetsExportJobNetworkDependencies",
  });

export interface AssetsExportJobPerformanceData {
  /** Optional. When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. When this value is unset (or set to zero), all available data is returned. The maximum value is 420; values above 420 will be coerced to 420. If unset (0 value) a default value of 40 will be used. */
  maxDays?: number;
}

export const AssetsExportJobPerformanceData: Schema.Schema<AssetsExportJobPerformanceData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDays: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AssetsExportJobPerformanceData" });

export interface SignedUriDestination {
  /** Required. The file format to export. */
  fileFormat?: "FILE_FORMAT_UNSPECIFIED" | "CSV" | "XLSX" | (string & {});
}

export const SignedUriDestination: Schema.Schema<SignedUriDestination> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileFormat: Schema.optional(Schema.String),
  }).annotate({ identifier: "SignedUriDestination" });

export interface AssetsExportJobExportCondition {
  /** Optional. Assets filter, supports the same syntax as asset listing. */
  filter?: string;
}

export const AssetsExportJobExportCondition: Schema.Schema<AssetsExportJobExportCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssetsExportJobExportCondition" });

export interface AssetsExportJob {
  /** Output only. Identifier. Resource name. */
  name?: string;
  /** Export asset inventory details. */
  inventory?: AssetsExportJobInventory;
  /** Export data regarding asset network dependencies. */
  networkDependencies?: AssetsExportJobNetworkDependencies;
  /** Optional. When this value is set to 'true' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
  /** Export asset with performance data. */
  performanceData?: AssetsExportJobPerformanceData;
  /** Export to Cloud Storage files downloadable using signed URIs. */
  signedUriDestination?: SignedUriDestination;
  /** Optional. Conditions for selecting assets to export. */
  condition?: AssetsExportJobExportCondition;
  /** Optional. Labels as key value pairs. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Output only. Resource creation time. */
  createTime?: string;
  /** Output only. Resource update time. */
  updateTime?: string;
  /** Output only. Recent non expired executions of the job. */
  recentExecutions?: ReadonlyArray<AssetsExportJobExecution>;
}

export const AssetsExportJob: Schema.Schema<AssetsExportJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    inventory: Schema.optional(AssetsExportJobInventory),
    networkDependencies: Schema.optional(AssetsExportJobNetworkDependencies),
    showHidden: Schema.optional(Schema.Boolean),
    performanceData: Schema.optional(AssetsExportJobPerformanceData),
    signedUriDestination: Schema.optional(SignedUriDestination),
    condition: Schema.optional(AssetsExportJobExportCondition),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    recentExecutions: Schema.optional(Schema.Array(AssetsExportJobExecution)),
  }).annotate({ identifier: "AssetsExportJob" });

export interface DiskPartitionDetails {
  /** Output only. Total capacity of all partitions. */
  totalCapacityBytes?: string;
  /** Optional. List of partitions. */
  partitions?: DiskPartitionList;
  /** Output only. Total free space of all partitions. */
  freeSpaceBytes?: string;
}

export const DiskPartitionDetails: Schema.Schema<DiskPartitionDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totalCapacityBytes: Schema.optional(Schema.String),
    partitions: Schema.optional(DiskPartitionList),
    freeSpaceBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiskPartitionDetails" });

export interface BiosDetails {
  /** BIOS ID. */
  id?: string;
  /** BIOS manufacturer. */
  manufacturer?: string;
  /** BIOS version. */
  version?: string;
  /** BIOS release date. */
  releaseDate?: Migrationcenter_Date;
  /** BIOS name. This fields is deprecated. Please use the `id` field instead. */
  biosName?: string;
  /** SMBIOS UUID. */
  smbiosUuid?: string;
}

export const BiosDetails: Schema.Schema<BiosDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    manufacturer: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    releaseDate: Schema.optional(Migrationcenter_Date),
    biosName: Schema.optional(Schema.String),
    smbiosUuid: Schema.optional(Schema.String),
  }).annotate({ identifier: "BiosDetails" });

export interface MachineArchitectureDetails {
  /** Optional. CPU manufacturer, e.g., "Intel", "AMD". */
  cpuManufacturer?: string;
  /** Hardware vendor. */
  vendor?: string;
  /** CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc. */
  cpuName?: string;
  /** BIOS Details. */
  bios?: BiosDetails;
  /** CPU hyper-threading support. */
  hyperthreading?:
    | "CPU_HYPER_THREADING_UNSPECIFIED"
    | "DISABLED"
    | "ENABLED"
    | (string & {});
  /** Firmware type. */
  firmwareType?: "FIRMWARE_TYPE_UNSPECIFIED" | "BIOS" | "EFI" | (string & {});
  /** Number of processor sockets allocated to the machine. */
  cpuSocketCount?: number;
  /** CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc. */
  cpuArchitecture?: string;
  /** Deprecated: use MachineDetails.core_count instead. Number of CPU threads allocated to the machine. */
  cpuThreadCount?: number;
}

export const MachineArchitectureDetails: Schema.Schema<MachineArchitectureDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuManufacturer: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
    cpuName: Schema.optional(Schema.String),
    bios: Schema.optional(BiosDetails),
    hyperthreading: Schema.optional(Schema.String),
    firmwareType: Schema.optional(Schema.String),
    cpuSocketCount: Schema.optional(Schema.Number),
    cpuArchitecture: Schema.optional(Schema.String),
    cpuThreadCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MachineArchitectureDetails" });

export interface NetworkAddress {
  /** Broadcast address. */
  bcast?: string;
  /** Assigned or configured IP Address. */
  ipAddress?: string;
  /** Fully qualified domain name. */
  fqdn?: string;
  /** Subnet mask. */
  subnetMask?: string;
  /** Whether DHCP is used to assign addresses. */
  assignment?:
    | "ADDRESS_ASSIGNMENT_UNSPECIFIED"
    | "ADDRESS_ASSIGNMENT_STATIC"
    | "ADDRESS_ASSIGNMENT_DHCP"
    | (string & {});
}

export const NetworkAddress: Schema.Schema<NetworkAddress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bcast: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    subnetMask: Schema.optional(Schema.String),
    assignment: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkAddress" });

export interface NetworkAddressList {
  /** Network address entries. */
  entries?: ReadonlyArray<NetworkAddress>;
}

export const NetworkAddressList: Schema.Schema<NetworkAddressList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const NetworkAdapterDetails: Schema.Schema<NetworkAdapterDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adapterType: Schema.optional(Schema.String),
    macAddress: Schema.optional(Schema.String),
    addresses: Schema.optional(NetworkAddressList),
  }).annotate({ identifier: "NetworkAdapterDetails" });

export interface NetworkAdapterList {
  /** Network adapter entries. */
  entries?: ReadonlyArray<NetworkAdapterDetails>;
}

export const NetworkAdapterList: Schema.Schema<NetworkAdapterList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(NetworkAdapterDetails)),
  }).annotate({ identifier: "NetworkAdapterList" });

export interface MachineNetworkDetails {
  /** Optional. Default gateway address. */
  defaultGateway?: string;
  /** MAC address of the machine. This property is used to uniqly identify the machine. */
  primaryMacAddress?: string;
  /** The primary IP address of the machine. */
  primaryIpAddress?: string;
  /** The public IP address of the machine. */
  publicIpAddress?: string;
  /** List of network adapters. */
  adapters?: NetworkAdapterList;
}

export const MachineNetworkDetails: Schema.Schema<MachineNetworkDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultGateway: Schema.optional(Schema.String),
    primaryMacAddress: Schema.optional(Schema.String),
    primaryIpAddress: Schema.optional(Schema.String),
    publicIpAddress: Schema.optional(Schema.String),
    adapters: Schema.optional(NetworkAdapterList),
  }).annotate({ identifier: "MachineNetworkDetails" });

export interface NetworkConnection {
  /** Connection protocol (e.g. TCP/UDP). */
  protocol?: string;
  /** Local IP address. */
  localIpAddress?: string;
  /** Network connection state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "OPENING"
    | "OPEN"
    | "LISTEN"
    | "CLOSING"
    | "CLOSED"
    | (string & {});
  /** Local port. */
  localPort?: number;
  /** Process or service name. */
  processName?: string;
  /** Remote port. */
  remotePort?: number;
  /** Remote IP address. */
  remoteIpAddress?: string;
  /** Process ID. */
  pid?: string;
}

export const NetworkConnection: Schema.Schema<NetworkConnection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    protocol: Schema.optional(Schema.String),
    localIpAddress: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    localPort: Schema.optional(Schema.Number),
    processName: Schema.optional(Schema.String),
    remotePort: Schema.optional(Schema.Number),
    remoteIpAddress: Schema.optional(Schema.String),
    pid: Schema.optional(Schema.String),
  }).annotate({ identifier: "NetworkConnection" });

export interface NetworkConnectionList {
  /** Network connection entries. */
  entries?: ReadonlyArray<NetworkConnection>;
}

export const NetworkConnectionList: Schema.Schema<NetworkConnectionList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(NetworkConnection)),
  }).annotate({ identifier: "NetworkConnectionList" });

export interface RuntimeNetworkInfo {
  /** Time of the last network scan. */
  scanTime?: string;
  /** Network connections. */
  connections?: NetworkConnectionList;
}

export const RuntimeNetworkInfo: Schema.Schema<RuntimeNetworkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scanTime: Schema.optional(Schema.String),
    connections: Schema.optional(NetworkConnectionList),
  }).annotate({ identifier: "RuntimeNetworkInfo" });

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

export const OpenFileDetails: Schema.Schema<OpenFileDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.String),
    fileType: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    user: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenFileDetails" });

export interface OpenFileList {
  /** Open file details entries. */
  entries?: ReadonlyArray<OpenFileDetails>;
}

export const OpenFileList: Schema.Schema<OpenFileList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(OpenFileDetails)),
  }).annotate({ identifier: "OpenFileList" });

export interface GuestRuntimeDetails {
  /** Running processes. */
  processes?: RunningProcessList;
  /** Runtime network information (connections, ports). */
  network?: RuntimeNetworkInfo;
  /** Domain, e.g. c.stratozone-development.internal. */
  domain?: string;
  /** Last time the OS was booted. */
  lastBootTime?: string;
  /** Open files information. */
  openFileList?: OpenFileList;
  /** Installed applications information. */
  installedApps?: GuestInstalledApplicationList;
  /** Running background services. */
  services?: RunningServiceList;
  /** Machine name. */
  machineName?: string;
}

export const GuestRuntimeDetails: Schema.Schema<GuestRuntimeDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processes: Schema.optional(RunningProcessList),
    network: Schema.optional(RuntimeNetworkInfo),
    domain: Schema.optional(Schema.String),
    lastBootTime: Schema.optional(Schema.String),
    openFileList: Schema.optional(OpenFileList),
    installedApps: Schema.optional(GuestInstalledApplicationList),
    services: Schema.optional(RunningServiceList),
    machineName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestRuntimeDetails" });

export interface HostsEntry {
  /** List of host names / aliases. */
  hostNames?: ReadonlyArray<string>;
  /** IP (raw, IPv4/6 agnostic). */
  ip?: string;
}

export const HostsEntry: Schema.Schema<HostsEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostNames: Schema.optional(Schema.Array(Schema.String)),
    ip: Schema.optional(Schema.String),
  }).annotate({ identifier: "HostsEntry" });

export interface HostsEntryList {
  /** Hosts entries. */
  entries?: ReadonlyArray<HostsEntry>;
}

export const HostsEntryList: Schema.Schema<HostsEntryList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(HostsEntry)),
  }).annotate({ identifier: "HostsEntryList" });

export interface NfsExport {
  /** The directory being exported. */
  exportDirectory?: string;
  /** The hosts or networks to which the export is being shared. */
  hosts?: ReadonlyArray<string>;
}

export const NfsExport: Schema.Schema<NfsExport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exportDirectory: Schema.optional(Schema.String),
    hosts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "NfsExport" });

export interface NfsExportList {
  /** NFS export entries. */
  entries?: ReadonlyArray<NfsExport>;
}

export const NfsExportList: Schema.Schema<NfsExportList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(Schema.Array(NfsExport)),
  }).annotate({ identifier: "NfsExportList" });

export interface GuestConfigDetails {
  /** Mount list (Linux fstab). */
  fstab?: FstabEntryList;
  /** Hosts file (/etc/hosts). */
  hosts?: HostsEntryList;
  /** NFS exports. */
  nfsExports?: NfsExportList;
  /** Security-Enhanced Linux (SELinux) mode. */
  selinuxMode?:
    | "SE_LINUX_MODE_UNSPECIFIED"
    | "SE_LINUX_MODE_DISABLED"
    | "SE_LINUX_MODE_PERMISSIVE"
    | "SE_LINUX_MODE_ENFORCING"
    | (string & {});
  /** OS issue (typically /etc/issue in Linux). */
  issue?: string;
}

export const GuestConfigDetails: Schema.Schema<GuestConfigDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fstab: Schema.optional(FstabEntryList),
    hosts: Schema.optional(HostsEntryList),
    nfsExports: Schema.optional(NfsExportList),
    selinuxMode: Schema.optional(Schema.String),
    issue: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestConfigDetails" });

export interface GuestOsDetails {
  /** The version of the operating system. */
  version?: string;
  /** What family the OS belong to, if known. */
  family?:
    | "OS_FAMILY_UNKNOWN"
    | "OS_FAMILY_WINDOWS"
    | "OS_FAMILY_LINUX"
    | "OS_FAMILY_UNIX"
    | (string & {});
  /** Runtime information. */
  runtime?: GuestRuntimeDetails;
  /** The name of the operating system. */
  osName?: string;
  /** OS and app configuration. */
  config?: GuestConfigDetails;
}

export const GuestOsDetails: Schema.Schema<GuestOsDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
    runtime: Schema.optional(GuestRuntimeDetails),
    osName: Schema.optional(Schema.String),
    config: Schema.optional(GuestConfigDetails),
  }).annotate({ identifier: "GuestOsDetails" });

export interface MachineDetails {
  /** Disk details. */
  disks?: MachineDiskDetails;
  /** Platform specific information. */
  platform?: PlatformDetails;
  /** The amount of memory in the machine. Must be non-negative. */
  memoryMb?: number;
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
  /** Machine unique identifier. */
  uuid?: string;
  /** Machine name. */
  machineName?: string;
  /** Machine creation time. */
  createTime?: string;
  /** Optional. Disk partitions details. Note: Partitions are not necessarily mounted on local disks and therefore might not have a one-to-one correspondence with local disks. */
  diskPartitions?: DiskPartitionDetails;
  /** Architecture details (vendor, CPU architecture). */
  architecture?: MachineArchitectureDetails;
  /** Number of logical CPU cores in the machine. Must be non-negative. */
  coreCount?: number;
  /** Network details. */
  network?: MachineNetworkDetails;
  /** Guest OS information. */
  guestOs?: GuestOsDetails;
}

export const MachineDetails: Schema.Schema<MachineDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disks: Schema.optional(MachineDiskDetails),
    platform: Schema.optional(PlatformDetails),
    memoryMb: Schema.optional(Schema.Number),
    powerState: Schema.optional(Schema.String),
    uuid: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    diskPartitions: Schema.optional(DiskPartitionDetails),
    architecture: Schema.optional(MachineArchitectureDetails),
    coreCount: Schema.optional(Schema.Number),
    network: Schema.optional(MachineNetworkDetails),
    guestOs: Schema.optional(GuestOsDetails),
  }).annotate({ identifier: "MachineDetails" });

export interface ListImportDataFilesResponse {
  /** The list of import data files. */
  importDataFiles?: ReadonlyArray<ImportDataFile>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListImportDataFilesResponse: Schema.Schema<ListImportDataFilesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importDataFiles: Schema.optional(Schema.Array(ImportDataFile)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListImportDataFilesResponse" });

export interface SqlServerTraceFlag {
  /** Required. The trace flag scope. */
  scope?: "SCOPE_UNSPECIFIED" | "OFF" | "GLOBAL" | "SESSION" | (string & {});
  /** Required. The trace flag name. */
  traceFlagName?: string;
}

export const SqlServerTraceFlag: Schema.Schema<SqlServerTraceFlag> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.optional(Schema.String),
    traceFlagName: Schema.optional(Schema.String),
  }).annotate({ identifier: "SqlServerTraceFlag" });

export interface DatabaseDetailsParentDatabaseDeployment {
  /** Optional. The parent database deployment generated ID. */
  generatedId?: string;
  /** Optional. The parent database deployment optional manual unique ID set by the user. */
  manualUniqueId?: string;
}

export const DatabaseDetailsParentDatabaseDeployment: Schema.Schema<DatabaseDetailsParentDatabaseDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatedId: Schema.optional(Schema.String),
    manualUniqueId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseDetailsParentDatabaseDeployment" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface MySqlPlugin {
  /** Required. The plugin is active. */
  enabled?: boolean;
  /** Required. The plugin version. */
  version?: string;
  /** Required. The plugin name. */
  plugin?: string;
}

export const MySqlPlugin: Schema.Schema<MySqlPlugin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
    version: Schema.optional(Schema.String),
    plugin: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlPlugin" });

export interface ReportConfigGroupPreferenceSetAssignment {
  /** Required. Name of the group. */
  group?: string;
  /** Required. Name of the Preference Set. */
  preferenceSet?: string;
}

export const ReportConfigGroupPreferenceSetAssignment: Schema.Schema<ReportConfigGroupPreferenceSetAssignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.optional(Schema.String),
    preferenceSet: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportConfigGroupPreferenceSetAssignment" });

export interface ReportConfig {
  /** Free-text description. */
  description?: string;
  /** Required. Collection of combinations of groups and preference sets. */
  groupPreferencesetAssignments?: ReadonlyArray<ReportConfigGroupPreferenceSetAssignment>;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Output only. Name of resource. */
  name?: string;
  /** Output only. The timestamp when the resource was created. */
  createTime?: string;
  /** Output only. The timestamp when the resource was last updated. */
  updateTime?: string;
}

export const ReportConfig: Schema.Schema<ReportConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    groupPreferencesetAssignments: Schema.optional(
      Schema.Array(ReportConfigGroupPreferenceSetAssignment),
    ),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportConfig" });

export interface ListReportConfigsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A list of report configs. */
  reportConfigs?: ReadonlyArray<ReportConfig>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListReportConfigsResponse: Schema.Schema<ListReportConfigsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    reportConfigs: Schema.optional(Schema.Array(ReportConfig)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReportConfigsResponse" });

export interface SendDiscoveryClientHeartbeatRequest {
  /** Optional. Client application version. */
  version?: string;
  /** Optional. Errors affecting client functionality. */
  errors?: ReadonlyArray<Status>;
}

export const SendDiscoveryClientHeartbeatRequest: Schema.Schema<SendDiscoveryClientHeartbeatRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    errors: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "SendDiscoveryClientHeartbeatRequest" });

export interface AggregationResultHistogramBucket {
  /** Lower bound - inclusive. */
  lowerBound?: number;
  /** Upper bound - exclusive. */
  upperBound?: number;
  /** Count of items in the bucket. */
  count?: string;
}

export const AggregationResultHistogramBucket: Schema.Schema<AggregationResultHistogramBucket> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lowerBound: Schema.optional(Schema.Number),
    upperBound: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregationResultHistogramBucket" });

export interface AggregationResultHistogram {
  /** Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. */
  buckets?: ReadonlyArray<AggregationResultHistogramBucket>;
}

export const AggregationResultHistogram: Schema.Schema<AggregationResultHistogram> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buckets: Schema.optional(Schema.Array(AggregationResultHistogramBucket)),
  }).annotate({ identifier: "AggregationResultHistogram" });

export interface PostgreSqlSetting {
  /** Required. The setting int value. */
  intValue?: string;
  /** Required. The setting real value. */
  realValue?: number;
  /** Optional. The setting unit. */
  unit?: string;
  /** Required. The setting string value. Notice that enum values are stored as strings. */
  stringValue?: string;
  /** Required. The setting name. */
  setting?: string;
  /** Required. The setting source. */
  source?: string;
  /** Required. The setting boolean value. */
  boolValue?: boolean;
}

export const PostgreSqlSetting: Schema.Schema<PostgreSqlSetting> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intValue: Schema.optional(Schema.String),
    realValue: Schema.optional(Schema.Number),
    unit: Schema.optional(Schema.String),
    stringValue: Schema.optional(Schema.String),
    setting: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    boolValue: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PostgreSqlSetting" });

export interface GenericInsight {
  /** Output only. Represents a globally unique message id for this insight, can be used for localization purposes, in case message_code is not yet known by the client use default_message instead. */
  messageId?: string;
  /** Output only. In case message_code is not yet known by the client default_message will be the message to be used instead. */
  defaultMessage?: string;
  /** Output only. Additional information about the insight, each entry can be a logical entry and must make sense if it is displayed with line breaks between each entry. Text can contain md style links. */
  additionalInformation?: ReadonlyArray<string>;
}

export const GenericInsight: Schema.Schema<GenericInsight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    messageId: Schema.optional(Schema.String),
    defaultMessage: Schema.optional(Schema.String),
    additionalInformation: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GenericInsight" });

export interface MySqlProperty {
  /** Required. The property name. */
  property?: string;
  /** Required. The property is enabled. */
  enabled?: boolean;
  /** Required. The property numeric value. */
  numericValue?: string;
}

export const MySqlProperty: Schema.Schema<MySqlProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    numericValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "MySqlProperty" });

export interface MysqlDatabaseDeployment {
  /** Optional. List of MySql plugins. */
  plugins?: ReadonlyArray<MySqlPlugin>;
  /** Optional. Number of resource groups. */
  resourceGroupsCount?: number;
  /** Optional. List of MySql variables. */
  variables?: ReadonlyArray<MySqlVariable>;
  /** Optional. List of MySql properties. */
  properties?: ReadonlyArray<MySqlProperty>;
}

export const MysqlDatabaseDeployment: Schema.Schema<MysqlDatabaseDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plugins: Schema.optional(Schema.Array(MySqlPlugin)),
    resourceGroupsCount: Schema.optional(Schema.Number),
    variables: Schema.optional(Schema.Array(MySqlVariable)),
    properties: Schema.optional(Schema.Array(MySqlProperty)),
  }).annotate({ identifier: "MysqlDatabaseDeployment" });

export interface PostgreSqlProperty {
  /** Required. The property name. */
  property?: string;
  /** Required. The property is enabled. */
  enabled?: boolean;
  /** Required. The property numeric value. */
  numericValue?: string;
}

export const PostgreSqlProperty: Schema.Schema<PostgreSqlProperty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    numericValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "PostgreSqlProperty" });

export interface PostgreSqlDatabaseDeployment {
  /** Optional. List of PostgreSql properties. */
  properties?: ReadonlyArray<PostgreSqlProperty>;
  /** Optional. List of PostgreSql settings. */
  settings?: ReadonlyArray<PostgreSqlSetting>;
}

export const PostgreSqlDatabaseDeployment: Schema.Schema<PostgreSqlDatabaseDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Array(PostgreSqlProperty)),
    settings: Schema.optional(Schema.Array(PostgreSqlSetting)),
  }).annotate({ identifier: "PostgreSqlDatabaseDeployment" });

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

export const DatabaseInstance: Schema.Schema<DatabaseInstance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    network: Schema.optional(DatabaseInstanceNetwork),
  }).annotate({ identifier: "DatabaseInstance" });

export interface DatabaseDeploymentTopology {
  /** Optional. Number of total physical cores. */
  physicalCoreCount?: number;
  /** Optional. Number of total physical cores limited by db deployment. */
  physicalCoreLimit?: number;
  /** Optional. Number of total logical cores. */
  coreCount?: number;
  /** Optional. Number of total logical cores limited by db deployment. */
  coreLimit?: number;
  /** Optional. Total memory in bytes limited by db deployment. */
  memoryLimitBytes?: string;
  /** Optional. List of database instances. */
  instances?: ReadonlyArray<DatabaseInstance>;
  /** Optional. Disk allocated in bytes. */
  diskAllocatedBytes?: string;
  /** Optional. Disk used in bytes. */
  diskUsedBytes?: string;
  /** Optional. Total memory in bytes. */
  memoryBytes?: string;
}

export const DatabaseDeploymentTopology: Schema.Schema<DatabaseDeploymentTopology> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    physicalCoreCount: Schema.optional(Schema.Number),
    physicalCoreLimit: Schema.optional(Schema.Number),
    coreCount: Schema.optional(Schema.Number),
    coreLimit: Schema.optional(Schema.Number),
    memoryLimitBytes: Schema.optional(Schema.String),
    instances: Schema.optional(Schema.Array(DatabaseInstance)),
    diskAllocatedBytes: Schema.optional(Schema.String),
    diskUsedBytes: Schema.optional(Schema.String),
    memoryBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseDeploymentTopology" });

export interface DatabaseDeploymentDetailsAggregatedStats {
  /** Output only. The number of databases in the deployment. */
  databaseCount?: number;
}

export const DatabaseDeploymentDetailsAggregatedStats: Schema.Schema<DatabaseDeploymentDetailsAggregatedStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DatabaseDeploymentDetailsAggregatedStats" });

export interface SqlServerFeature {
  /** Required. The feature name. */
  featureName?: string;
  /** Required. Field enabled is set when a feature is used on the source deployment. */
  enabled?: boolean;
}

export const SqlServerFeature: Schema.Schema<SqlServerFeature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    featureName: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SqlServerFeature" });

export interface SqlServerDatabaseDeployment {
  /** Optional. List of SQL Server features. */
  features?: ReadonlyArray<SqlServerFeature>;
  /** Optional. List of SQL Server server flags. */
  serverFlags?: ReadonlyArray<SqlServerServerFlag>;
  /** Optional. List of SQL Server trace flags. */
  traceFlags?: ReadonlyArray<SqlServerTraceFlag>;
}

export const SqlServerDatabaseDeployment: Schema.Schema<SqlServerDatabaseDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Array(SqlServerFeature)),
    serverFlags: Schema.optional(Schema.Array(SqlServerServerFlag)),
    traceFlags: Schema.optional(Schema.Array(SqlServerTraceFlag)),
  }).annotate({ identifier: "SqlServerDatabaseDeployment" });

export interface DatabaseDeploymentDetails {
  /** Optional. Details of a MYSQL database deployment. */
  mysql?: MysqlDatabaseDeployment;
  /** Optional. A manual unique ID set by the user. */
  manualUniqueId?: string;
  /** Optional. Details of a PostgreSQL database deployment. */
  postgresql?: PostgreSqlDatabaseDeployment;
  /** Optional. The database deployment generated ID. */
  generatedId?: string;
  /** Optional. Details of an AWS RDS instance. */
  awsRds?: AwsRds;
  /** Optional. Details of the database deployment topology. */
  topology?: DatabaseDeploymentTopology;
  /** Output only. Aggregated stats for the database deployment. */
  aggregatedStats?: DatabaseDeploymentDetailsAggregatedStats;
  /** Optional. The database deployment version. */
  version?: string;
  /** Optional. The database deployment edition. */
  edition?: string;
  /** Optional. Details of a Microsoft SQL Server database deployment. */
  sqlServer?: SqlServerDatabaseDeployment;
}

export const DatabaseDeploymentDetails: Schema.Schema<DatabaseDeploymentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mysql: Schema.optional(MysqlDatabaseDeployment),
    manualUniqueId: Schema.optional(Schema.String),
    postgresql: Schema.optional(PostgreSqlDatabaseDeployment),
    generatedId: Schema.optional(Schema.String),
    awsRds: Schema.optional(AwsRds),
    topology: Schema.optional(DatabaseDeploymentTopology),
    aggregatedStats: Schema.optional(DatabaseDeploymentDetailsAggregatedStats),
    version: Schema.optional(Schema.String),
    edition: Schema.optional(Schema.String),
    sqlServer: Schema.optional(SqlServerDatabaseDeployment),
  }).annotate({ identifier: "DatabaseDeploymentDetails" });

export interface NetworkUsageSample {
  /** Average network ingress in B/s sampled over a short window. Must be non-negative. */
  averageIngressBps?: number;
  /** Average network egress in B/s sampled over a short window. Must be non-negative. */
  averageEgressBps?: number;
}

export const NetworkUsageSample: Schema.Schema<NetworkUsageSample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageIngressBps: Schema.optional(Schema.Number),
    averageEgressBps: Schema.optional(Schema.Number),
  }).annotate({ identifier: "NetworkUsageSample" });

export interface DiskUsageSample {
  /** Optional. Average IOPS sampled over a short window. Must be non-negative. If read or write are set, the sum of read and write will override the value of the average_iops. */
  averageIops?: number;
  /** Optional. Average write IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored. */
  averageWriteIops?: number;
  /** Optional. Average read IOPS sampled over a short window. Must be non-negative. If both read and write are zero they are ignored. */
  averageReadIops?: number;
}

export const DiskUsageSample: Schema.Schema<DiskUsageSample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    averageIops: Schema.optional(Schema.Number),
    averageWriteIops: Schema.optional(Schema.Number),
    averageReadIops: Schema.optional(Schema.Number),
  }).annotate({ identifier: "DiskUsageSample" });

export interface PerformanceSample {
  /** Memory usage sample. */
  memory?: MemoryUsageSample;
  /** CPU usage sample. */
  cpu?: CpuUsageSample;
  /** Time the sample was collected. If omitted, the frame report time will be used. */
  sampleTime?: string;
  /** Network usage sample. */
  network?: NetworkUsageSample;
  /** Disk usage sample. */
  disk?: DiskUsageSample;
}

export const PerformanceSample: Schema.Schema<PerformanceSample> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memory: Schema.optional(MemoryUsageSample),
    cpu: Schema.optional(CpuUsageSample),
    sampleTime: Schema.optional(Schema.String),
    network: Schema.optional(NetworkUsageSample),
    disk: Schema.optional(DiskUsageSample),
  }).annotate({ identifier: "PerformanceSample" });

export interface DatabaseDetails {
  /** Optional. The database schemas. */
  schemas?: ReadonlyArray<DatabaseSchema>;
  /** Required. The name of the database. */
  databaseName?: string;
  /** Required. The parent database deployment that contains the logical database. */
  parentDatabaseDeployment?: DatabaseDetailsParentDatabaseDeployment;
  /** Optional. The allocated storage for the database in bytes. */
  allocatedStorageBytes?: string;
}

export const DatabaseDetails: Schema.Schema<DatabaseDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    schemas: Schema.optional(Schema.Array(DatabaseSchema)),
    databaseName: Schema.optional(Schema.String),
    parentDatabaseDeployment: Schema.optional(
      DatabaseDetailsParentDatabaseDeployment,
    ),
    allocatedStorageBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "DatabaseDetails" });

export interface AssetFrame {
  /** Generic asset attributes. */
  attributes?: Record<string, string>;
  /** Asset information specific for database deployments. */
  databaseDeploymentDetails?: DatabaseDeploymentDetails;
  /** Asset information specific for virtual machines. */
  machineDetails?: MachineDetails;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Frame collection type, if not specified the collection type will be based on the source type of the source the frame was reported on. */
  collectionType?:
    | "SOURCE_TYPE_UNKNOWN"
    | "SOURCE_TYPE_UPLOAD"
    | "SOURCE_TYPE_GUEST_OS_SCAN"
    | "SOURCE_TYPE_INVENTORY_SCAN"
    | "SOURCE_TYPE_CUSTOM"
    | "SOURCE_TYPE_DISCOVERY_CLIENT"
    | (string & {});
  /** Optional. Trace token is optionally provided to assist with debugging and traceability. */
  traceToken?: string;
  /** The time the data was reported. */
  reportTime?: string;
  /** Asset performance data samples. Samples that are from more than 40 days ago or after tomorrow are ignored. */
  performanceSamples?: ReadonlyArray<PerformanceSample>;
  /** Asset information specific for logical databases. */
  databaseDetails?: DatabaseDetails;
}

export const AssetFrame: Schema.Schema<AssetFrame> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    databaseDeploymentDetails: Schema.optional(DatabaseDeploymentDetails),
    machineDetails: Schema.optional(MachineDetails),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    collectionType: Schema.optional(Schema.String),
    traceToken: Schema.optional(Schema.String),
    reportTime: Schema.optional(Schema.String),
    performanceSamples: Schema.optional(Schema.Array(PerformanceSample)),
    databaseDetails: Schema.optional(DatabaseDetails),
  }).annotate({ identifier: "AssetFrame" });

export interface Frames {
  /** A repeated field of asset data. */
  framesData?: ReadonlyArray<AssetFrame>;
}

export const Frames: Schema.Schema<Frames> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    framesData: Schema.optional(Schema.Array(AssetFrame)),
  }).annotate({ identifier: "Frames" });

export interface CascadeLogicalDBsRule {}

export const CascadeLogicalDBsRule: Schema.Schema<CascadeLogicalDBsRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CascadeLogicalDBsRule",
  });

export interface CascadingRule {
  /** Cascading rule for related logical DBs. */
  cascadeLogicalDbs?: CascadeLogicalDBsRule;
}

export const CascadingRule: Schema.Schema<CascadingRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cascadeLogicalDbs: Schema.optional(CascadeLogicalDBsRule),
  }).annotate({ identifier: "CascadingRule" });

export interface BatchDeleteAssetsRequest {
  /** Required. The IDs of the assets to delete. A maximum of 1000 assets can be deleted in a batch. Format: projects/{project}/locations/{location}/assets/{name}. */
  names?: ReadonlyArray<string>;
  /** Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`. */
  allowMissing?: boolean;
  /** Optional. Optional cascading rules for deleting related assets. */
  cascadingRules?: ReadonlyArray<CascadingRule>;
}

export const BatchDeleteAssetsRequest: Schema.Schema<BatchDeleteAssetsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    allowMissing: Schema.optional(Schema.Boolean),
    cascadingRules: Schema.optional(Schema.Array(CascadingRule)),
  }).annotate({ identifier: "BatchDeleteAssetsRequest" });

export interface AddAssetsToGroupRequest {
  /** Required. List of assets to be added. The maximum number of assets that can be added in a single request is 2000. */
  assets?: AssetList;
  /** Optional. When this value is set to `false` and one of the given assets is already an existing member of the group, the operation fails with an `Already Exists` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
  allowExisting?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const AddAssetsToGroupRequest: Schema.Schema<AddAssetsToGroupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(AssetList),
    allowExisting: Schema.optional(Schema.Boolean),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AddAssetsToGroupRequest" });

export interface AssetPerformanceData {
  /** Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days. Aggregations are sorted from oldest to most recent. */
  dailyResourceUsageAggregations?: ReadonlyArray<DailyResourceUsageAggregation>;
}

export const AssetPerformanceData: Schema.Schema<AssetPerformanceData> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dailyResourceUsageAggregations: Schema.optional(
      Schema.Array(DailyResourceUsageAggregation),
    ),
  }).annotate({ identifier: "AssetPerformanceData" });

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

export const ComputeStorageDescriptor: Schema.Schema<ComputeStorageDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ComputeStorageDescriptor" });

export interface ComputeEngineShapeDescriptor {
  /** Output only. Compute Engine machine series. */
  series?: string;
  /** Output only. Compute Engine machine type. */
  machineType?: string;
  /** Output only. Number of logical cores. */
  logicalCoreCount?: number;
  /** Memory in mebibytes. */
  memoryMb?: number;
  /** Output only. Compute Engine storage. Never empty. */
  storage?: ReadonlyArray<ComputeStorageDescriptor>;
  /** Number of physical cores. */
  physicalCoreCount?: number;
}

export const ComputeEngineShapeDescriptor: Schema.Schema<ComputeEngineShapeDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    series: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    logicalCoreCount: Schema.optional(Schema.Number),
    memoryMb: Schema.optional(Schema.Number),
    storage: Schema.optional(Schema.Array(ComputeStorageDescriptor)),
    physicalCoreCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ComputeEngineShapeDescriptor" });

export interface ComputeEngineMigrationTarget {
  /** Description of the suggested shape for the migration target. */
  shape?: ComputeEngineShapeDescriptor;
}

export const ComputeEngineMigrationTarget: Schema.Schema<ComputeEngineMigrationTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shape: Schema.optional(ComputeEngineShapeDescriptor),
  }).annotate({ identifier: "ComputeEngineMigrationTarget" });

export interface MigrationInsight {
  /** Output only. A Google Compute Engine target. */
  computeEngineTarget?: ComputeEngineMigrationTarget;
  /** Output only. Description of how well the asset this insight is associated with fits the proposed migration. */
  fit?: FitDescriptor;
}

export const MigrationInsight: Schema.Schema<MigrationInsight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeEngineTarget: Schema.optional(ComputeEngineMigrationTarget),
    fit: Schema.optional(FitDescriptor),
  }).annotate({ identifier: "MigrationInsight" });

export interface Insight {
  /** Output only. An insight about potential migrations for an asset. */
  migrationInsight?: MigrationInsight;
  /** Output only. A generic insight about an asset. */
  genericInsight?: GenericInsight;
}

export const Insight: Schema.Schema<Insight> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrationInsight: Schema.optional(MigrationInsight),
    genericInsight: Schema.optional(GenericInsight),
  }).annotate({ identifier: "Insight" });

export interface InsightList {
  /** Output only. Insights of the list. */
  insights?: ReadonlyArray<Insight>;
  /** Output only. Update timestamp. */
  updateTime?: string;
}

export const InsightList: Schema.Schema<InsightList> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insights: Schema.optional(Schema.Array(Insight)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "InsightList" });

export interface Asset {
  /** Output only. The timestamp when the asset was marked as hidden. */
  hideTime?: string;
  /** Output only. The list of insights associated with the asset. */
  insightList?: InsightList;
  /** Output only. Server generated human readable name of the asset. */
  title?: string;
  /** Output only. The timestamp when the asset was created. */
  createTime?: string;
  /** Output only. The timestamp when the asset was last updated. */
  updateTime?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. An optional reason for marking this asset as hidden. */
  hideReason?: string;
  /** Output only. The full name of the asset. */
  name?: string;
  /** Output only. The list of sources contributing to the asset. */
  sources?: ReadonlyArray<string>;
  /** Output only. Asset information specific for logical databases. */
  databaseDetails?: DatabaseDetails;
  /** Optional. Indicates if the asset is hidden. */
  hidden?: boolean;
  /** Output only. Asset information specific for database deployments. */
  databaseDeploymentDetails?: DatabaseDeploymentDetails;
  /** Output only. Performance data for the asset. */
  performanceData?: AssetPerformanceData;
  /** Generic asset attributes. */
  attributes?: Record<string, string>;
  /** Output only. The list of groups that the asset is assigned to. */
  assignedGroups?: ReadonlyArray<string>;
  /** Output only. Asset information specific for virtual and physical machines. */
  machineDetails?: MachineDetails;
}

export const Asset: Schema.Schema<Asset> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hideTime: Schema.optional(Schema.String),
    insightList: Schema.optional(InsightList),
    title: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    hideReason: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sources: Schema.optional(Schema.Array(Schema.String)),
    databaseDetails: Schema.optional(DatabaseDetails),
    hidden: Schema.optional(Schema.Boolean),
    databaseDeploymentDetails: Schema.optional(DatabaseDeploymentDetails),
    performanceData: Schema.optional(AssetPerformanceData),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    assignedGroups: Schema.optional(Schema.Array(Schema.String)),
    machineDetails: Schema.optional(MachineDetails),
  }).annotate({ identifier: "Asset" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface RunImportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunImportJobRequest: Schema.Schema<RunImportJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunImportJobRequest" });

export interface AggregationResultFrequency {
  values?: Record<string, string>;
}

export const AggregationResultFrequency: Schema.Schema<AggregationResultFrequency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AggregationResultFrequency" });

export interface ValidationReport {
  /** List of errors found in files. */
  fileValidations?: ReadonlyArray<FileValidationReport>;
  /** List of job level errors. */
  jobErrors?: ReadonlyArray<ImportError>;
}

export const ValidationReport: Schema.Schema<ValidationReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ExecutionReport: Schema.Schema<ExecutionReport> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    framesReported: Schema.optional(Schema.Number),
    executionErrors: Schema.optional(ValidationReport),
    totalRowsCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExecutionReport" });

export interface ImportJob {
  /** Optional. User-friendly display name. Maximum length is 256 characters. */
  displayName?: string;
  /** Output only. The full name of the import job. */
  name?: string;
  /** Output only. The report with the results of running the import job. */
  executionReport?: ExecutionReport;
  /** Required. Reference to a source. */
  assetSource?: string;
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
  /** Output only. The timestamp when the import job was created. */
  createTime?: string;
  /** Output only. The timestamp when the import job was last updated. */
  updateTime?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. The report with the validation results of the import job. */
  validationReport?: ValidationReport;
}

export const ImportJob: Schema.Schema<ImportJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    executionReport: Schema.optional(ExecutionReport),
    assetSource: Schema.optional(Schema.String),
    completeTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    validationReport: Schema.optional(ValidationReport),
  }).annotate({ identifier: "ImportJob" });

export interface UpdateAssetRequest {
  /** Required. The resource being updated. */
  asset?: Asset;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
}

export const UpdateAssetRequest: Schema.Schema<UpdateAssetRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asset: Schema.optional(Asset),
    requestId: Schema.optional(Schema.String),
    updateMask: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdateAssetRequest" });

export interface ErrorFrame {
  /** Output only. Frame ingestion time. */
  ingestionTime?: string;
  /** Output only. The identifier of the ErrorFrame. */
  name?: string;
  /** Output only. The frame that was originally reported. */
  originalFrame?: AssetFrame;
  /** Output only. All the violations that were detected for the frame. */
  violations?: ReadonlyArray<FrameViolationEntry>;
}

export const ErrorFrame: Schema.Schema<ErrorFrame> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ingestionTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    originalFrame: Schema.optional(AssetFrame),
    violations: Schema.optional(Schema.Array(FrameViolationEntry)),
  }).annotate({ identifier: "ErrorFrame" });

export interface ListErrorFramesResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of error frames. */
  errorFrames?: ReadonlyArray<ErrorFrame>;
}

export const ListErrorFramesResponse: Schema.Schema<ListErrorFramesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    errorFrames: Schema.optional(Schema.Array(ErrorFrame)),
  }).annotate({ identifier: "ListErrorFramesResponse" });

export interface Group {
  /** Optional. User-friendly display name. */
  displayName?: string;
  /** Output only. The name of the group. */
  name?: string;
  /** Optional. The description of the group. */
  description?: string;
  /** Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Output only. The timestamp when the group was created. */
  createTime?: string;
  /** Output only. The timestamp when the group was last updated. */
  updateTime?: string;
}

export const Group: Schema.Schema<Group> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface ListGroupsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** The list of Group */
  groups?: ReadonlyArray<Group>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListGroupsResponse: Schema.Schema<ListGroupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    groups: Schema.optional(Schema.Array(Group)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListGroupsResponse" });

export interface AggregationResultSum {
  value?: number;
}

export const AggregationResultSum: Schema.Schema<AggregationResultSum> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AggregationResultSum" });

export interface ListRelationsResponse {
  /** A list of relations. */
  relations?: ReadonlyArray<Relation>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListRelationsResponse: Schema.Schema<ListRelationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    relations: Schema.optional(Schema.Array(Relation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRelationsResponse" });

export interface BatchUpdateAssetsResponse {
  /** Update asset content. The content only includes values after field mask being applied. */
  assets?: ReadonlyArray<Asset>;
}

export const BatchUpdateAssetsResponse: Schema.Schema<BatchUpdateAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(Asset)),
  }).annotate({ identifier: "BatchUpdateAssetsResponse" });

export interface ReportAssetFramesResponse {}

export const ReportAssetFramesResponse: Schema.Schema<ReportAssetFramesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReportAssetFramesResponse",
  });

export interface OperationMetadata {
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedCancellation: Schema.optional(Schema.Boolean),
    apiVersion: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface ListAssetsExportJobsResponse {
  /** Output only. The list of assets export jobs. */
  assetsExportJobs?: ReadonlyArray<AssetsExportJob>;
  /** Output only. A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAssetsExportJobsResponse: Schema.Schema<ListAssetsExportJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetsExportJobs: Schema.optional(Schema.Array(AssetsExportJob)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAssetsExportJobsResponse" });

export interface RunAssetsExportJobResponse {
  /** Output only. Execution status of the assets export operation. */
  assetsExportJobExecution?: AssetsExportJobExecution;
}

export const RunAssetsExportJobResponse: Schema.Schema<RunAssetsExportJobResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assetsExportJobExecution: Schema.optional(AssetsExportJobExecution),
  }).annotate({ identifier: "RunAssetsExportJobResponse" });

export interface BatchUpdateAssetsRequest {
  /** Required. The request message specifying the resources to update. A maximum of 1000 assets can be modified in a batch. */
  requests?: ReadonlyArray<UpdateAssetRequest>;
}

export const BatchUpdateAssetsRequest: Schema.Schema<BatchUpdateAssetsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requests: Schema.optional(Schema.Array(UpdateAssetRequest)),
  }).annotate({ identifier: "BatchUpdateAssetsRequest" });

export interface AggregationResultCount {
  value?: string;
}

export const AggregationResultCount: Schema.Schema<AggregationResultCount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregationResultCount" });

export interface AggregationResult {
  count?: AggregationResultCount;
  histogram?: AggregationResultHistogram;
  sum?: AggregationResultSum;
  frequency?: AggregationResultFrequency;
  field?: string;
}

export const AggregationResult: Schema.Schema<AggregationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(AggregationResultCount),
    histogram: Schema.optional(AggregationResultHistogram),
    sum: Schema.optional(AggregationResultSum),
    frequency: Schema.optional(AggregationResultFrequency),
    field: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregationResult" });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
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

export interface ListImportJobsResponse {
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The list of import jobs. */
  importJobs?: ReadonlyArray<ImportJob>;
}

export const ListImportJobsResponse: Schema.Schema<ListImportJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    importJobs: Schema.optional(Schema.Array(ImportJob)),
  }).annotate({ identifier: "ListImportJobsResponse" });

export interface RunAssetsExportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RunAssetsExportJobRequest: Schema.Schema<RunAssetsExportJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunAssetsExportJobRequest" });

export interface ReportSummaryGroupFinding {
  /** Display Name for the Group. */
  displayName?: string;
  /** Summary statistics for all the assets in this group. */
  assetAggregateStats?: ReportSummaryAssetAggregateStats;
  /** Findings for each of the PreferenceSets for this group. */
  preferenceSetFindings?: ReadonlyArray<ReportSummaryGroupPreferenceSetFinding>;
  /** Description for the Group. */
  description?: string;
  /** This field is deprecated, do not rely on it having a value. */
  overlappingAssetCount?: string;
}

export const ReportSummaryGroupFinding: Schema.Schema<ReportSummaryGroupFinding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    assetAggregateStats: Schema.optional(ReportSummaryAssetAggregateStats),
    preferenceSetFindings: Schema.optional(
      Schema.Array(ReportSummaryGroupPreferenceSetFinding),
    ),
    description: Schema.optional(Schema.String),
    overlappingAssetCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReportSummaryGroupFinding" });

export interface ReportSummary {
  /** Aggregate statistics for all the assets across all the groups. */
  allAssetsStats?: ReportSummaryAssetAggregateStats;
  /** Findings for each Group included in this report. */
  groupFindings?: ReadonlyArray<ReportSummaryGroupFinding>;
}

export const ReportSummary: Schema.Schema<ReportSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allAssetsStats: Schema.optional(ReportSummaryAssetAggregateStats),
    groupFindings: Schema.optional(Schema.Array(ReportSummaryGroupFinding)),
  }).annotate({ identifier: "ReportSummary" });

export interface Report {
  /** Output only. Creation timestamp. */
  createTime?: string;
  /** Output only. Last update timestamp. */
  updateTime?: string;
  /** Output only. Summary view of the Report. */
  summary?: ReportSummary;
  /** User-friendly display name. Maximum length is 63 characters. */
  displayName?: string;
  /** Report type. */
  type?: "TYPE_UNSPECIFIED" | "TOTAL_COST_OF_OWNERSHIP" | (string & {});
  /** Output only. Name of resource. */
  name?: string;
  /** Report creation state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Free-text description. */
  description?: string;
}

export const Report: Schema.Schema<Report> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    summary: Schema.optional(ReportSummary),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Report" });

export interface ListAssetsResponse {
  /** A list of assets. */
  assets?: ReadonlyArray<Asset>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListAssetsResponse: Schema.Schema<ListAssetsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(Schema.Array(Asset)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAssetsResponse" });

export interface ListReportsResponse {
  /** The list of Reports. */
  reports?: ReadonlyArray<Report>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
}

export const ListReportsResponse: Schema.Schema<ListReportsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reports: Schema.optional(Schema.Array(Report)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReportsResponse" });

export interface ListDiscoveryClientsResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** List of discovery clients. */
  discoveryClients?: ReadonlyArray<DiscoveryClient>;
}

export const ListDiscoveryClientsResponse: Schema.Schema<ListDiscoveryClientsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    discoveryClients: Schema.optional(Schema.Array(DiscoveryClient)),
  }).annotate({ identifier: "ListDiscoveryClientsResponse" });

export interface AggregateAssetsValuesResponse {
  /** The aggregation results. */
  results?: ReadonlyArray<AggregationResult>;
}

export const AggregateAssetsValuesResponse: Schema.Schema<AggregateAssetsValuesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(AggregationResult)),
  }).annotate({ identifier: "AggregateAssetsValuesResponse" });

export interface Settings {
  /** Output only. The name of the resource. */
  name?: string;
  /** The preference set used by default for a project. */
  preferenceSet?: string;
  /** Disable Cloud Logging for the Migration Center API. Users are billed for the logs. */
  disableCloudLogging?: boolean;
}

export const Settings: Schema.Schema<Settings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    preferenceSet: Schema.optional(Schema.String),
    disableCloudLogging: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Settings" });

export interface ValidateImportJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const ValidateImportJobRequest: Schema.Schema<ValidateImportJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ValidateImportJobRequest" });

export interface RemoveAssetsFromGroupRequest {
  /** Required. List of assets to be removed. The maximum number of assets that can be removed in a single request is 1000. */
  assets?: AssetList;
  /** Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`. */
  allowMissing?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const RemoveAssetsFromGroupRequest: Schema.Schema<RemoveAssetsFromGroupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assets: Schema.optional(AssetList),
    allowMissing: Schema.optional(Schema.Boolean),
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "RemoveAssetsFromGroupRequest" });

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetSettingsProjectsLocationsRequest>;

export type GetSettingsProjectsLocationsResponse = Settings;
export const GetSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Settings;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingsProjectsLocationsRequest,
  output: GetSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
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

export interface ListProjectsLocationsRequest {
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
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

export interface UpdateSettingsProjectsLocationsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The name of the resource. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Settings` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: Settings;
}

export const UpdateSettingsProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Settings).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<UpdateSettingsProjectsLocationsRequest>;

export type UpdateSettingsProjectsLocationsResponse = Operation;
export const UpdateSettingsProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateSettingsProjectsLocationsRequest,
  output: UpdateSettingsProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsImportJobsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. The full name of the import job. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: ImportJob;
}

export const PatchProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(ImportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsImportJobsRequest>;

export type PatchProjectsLocationsImportJobsResponse = Operation;
export const PatchProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ValidateImportJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:validate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ValidateProjectsLocationsImportJobsRequest>;

export type ValidateProjectsLocationsImportJobsResponse = Operation;
export const ValidateProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateProjectsLocationsImportJobsRequest,
  output: ValidateProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsImportJobsRequest>;

export type DeleteProjectsLocationsImportJobsResponse = Operation;
export const DeleteProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImportJobsRequest,
  output: DeleteProjectsLocationsImportJobsResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsImportJobsRequest>;

export type GetProjectsLocationsImportJobsResponse = ImportJob;
export const GetProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImportJob;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImportJobsRequest,
  output: GetProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden],
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
    T.Http({ method: "POST", path: "v1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsImportJobsRequest>;

export type RunProjectsLocationsImportJobsResponse = Operation;
export const RunProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsImportJobsRequest,
  output: RunProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsImportJobsRequest {
  /** Required. ID of the import job. */
  importJobId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: ImportJob;
}

export const CreateProjectsLocationsImportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    importJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("importJobId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ImportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/importJobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsImportJobsRequest>;

export type CreateProjectsLocationsImportJobsResponse = Operation;
export const CreateProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImportJobsRequest,
  output: CreateProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsImportJobsRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Filtering results. */
  filter?: string;
  /** Required. Parent value for `ListImportJobsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
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
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/importJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsImportJobsRequest>;

export type ListProjectsLocationsImportJobsResponse = ListImportJobsResponse;
export const ListProjectsLocationsImportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListImportJobsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImportJobsRequest,
  output: ListProjectsLocationsImportJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsImportJobsImportDataFilesRequest {
  /** Required. Name of the ImportDataFile. */
  name: string;
}

export const GetProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsImportJobsImportDataFilesRequest>;

export type GetProjectsLocationsImportJobsImportDataFilesResponse =
  ImportDataFile;
export const GetProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ImportDataFile;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsImportJobsImportDataFilesRequest,
  output: GetProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsImportJobsImportDataFilesRequest {
  /** The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Required. Name of the parent of the `ImportDataFiles` resource. */
  parent: string;
  /** A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/importDataFiles" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsImportJobsImportDataFilesRequest>;

export type ListProjectsLocationsImportJobsImportDataFilesResponse =
  ListImportDataFilesResponse;
export const ListProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListImportDataFilesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsImportJobsImportDataFilesRequest,
  output: ListProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    importDataFileId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("importDataFileId"),
    ),
    body: Schema.optional(ImportDataFile).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/importDataFiles",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsImportJobsImportDataFilesRequest>;

export type CreateProjectsLocationsImportJobsImportDataFilesResponse =
  Operation;
export const CreateProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsImportJobsImportDataFilesRequest,
  output: CreateProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsImportJobsImportDataFilesRequest {
  /** Required. Name of the ImportDataFile to delete. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsImportJobsImportDataFilesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsImportJobsImportDataFilesRequest>;

export type DeleteProjectsLocationsImportJobsImportDataFilesResponse =
  Operation;
export const DeleteProjectsLocationsImportJobsImportDataFilesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsImportJobsImportDataFilesRequest,
  output: DeleteProjectsLocationsImportJobsImportDataFilesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "GET", path: "v1/{+parent}/relations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRelationsRequest>;

export type ListProjectsLocationsRelationsResponse = ListRelationsResponse;
export const ListProjectsLocationsRelationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRelationsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRelationsRequest,
  output: ListProjectsLocationsRelationsResponse,
  errors: [NotFound, Forbidden],
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRelationsRequest>;

export type GetProjectsLocationsRelationsResponse = Relation;
export const GetProjectsLocationsRelationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Relation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRelationsRequest,
  output: GetProjectsLocationsRelationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsAssetsRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Required. Parent value for `ListAssetsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
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
    | "ASSET_VIEW_UI"
    | "ASSET_VIEW_LABELS"
    | (string & {});
  /** Optional. When this value is set to 'true,' the response will include all assets, including those that are hidden. */
  showHidden?: boolean;
}

export const ListProjectsLocationsAssetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
    showHidden: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("showHidden")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAssetsRequest>;

export type ListProjectsLocationsAssetsResponse = ListAssetsResponse;
export const ListProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAssetsRequest,
  output: ListProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
      path: "v1/{+parent}/assets:batchUpdate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchUpdateProjectsLocationsAssetsRequest>;

export type BatchUpdateProjectsLocationsAssetsResponse =
  BatchUpdateAssetsResponse;
export const BatchUpdateProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchUpdateAssetsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchUpdateProjectsLocationsAssetsRequest,
  output: BatchUpdateProjectsLocationsAssetsResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    source: Schema.optional(Schema.String).pipe(T.HttpQuery("source")),
    body: Schema.optional(Frames).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assets:reportAssetFrames",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportAssetFramesProjectsLocationsAssetsRequest>;

export type ReportAssetFramesProjectsLocationsAssetsResponse =
  ReportAssetFramesResponse;
export const ReportAssetFramesProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportAssetFramesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportAssetFramesProjectsLocationsAssetsRequest,
  output: ReportAssetFramesProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAssetsRequest>;

export type GetProjectsLocationsAssetsResponse = Asset;
export const GetProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Asset;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAssetsRequest,
  output: GetProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden],
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
      path: "v1/{+parent}/assets:batchDelete",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchDeleteProjectsLocationsAssetsRequest>;

export type BatchDeleteProjectsLocationsAssetsResponse = Empty;
export const BatchDeleteProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchDeleteProjectsLocationsAssetsRequest,
  output: BatchDeleteProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
      path: "v1/{+parent}/assets:aggregateValues",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AggregateValuesProjectsLocationsAssetsRequest>;

export type AggregateValuesProjectsLocationsAssetsResponse =
  AggregateAssetsValuesResponse;
export const AggregateValuesProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AggregateAssetsValuesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AggregateValuesProjectsLocationsAssetsRequest,
  output: AggregateValuesProjectsLocationsAssetsResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Asset).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsAssetsRequest>;

export type PatchProjectsLocationsAssetsResponse = Asset;
export const PatchProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Asset;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsAssetsRequest,
  output: PatchProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAssetsRequest>;

export type DeleteProjectsLocationsAssetsResponse = Empty;
export const DeleteProjectsLocationsAssetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAssetsRequest,
  output: DeleteProjectsLocationsAssetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsAssetsExportJobsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent resource where the assts export job will be created. */
  parent: string;
  /** Required. The ID to use for the asset export job. */
  assetsExportJobId?: string;
  /** Request body */
  body?: AssetsExportJob;
}

export const CreateProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    assetsExportJobId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("assetsExportJobId"),
    ),
    body: Schema.optional(AssetsExportJob).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/assetsExportJobs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsAssetsExportJobsRequest>;

export type CreateProjectsLocationsAssetsExportJobsResponse = Operation;
export const CreateProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsAssetsExportJobsRequest,
  output: CreateProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsAssetsExportJobsRequest {
  /** Required. Parent resource. */
  parent: string;
  /** Optional. A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Optional. Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
}

export const ListProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/assetsExportJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsAssetsExportJobsRequest>;

export type ListProjectsLocationsAssetsExportJobsResponse =
  ListAssetsExportJobsResponse;
export const ListProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAssetsExportJobsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsAssetsExportJobsRequest,
  output: ListProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsAssetsExportJobsRequest {
  /** Required. The name of the assets export job to delete. */
  name: string;
}

export const DeleteProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsAssetsExportJobsRequest>;

export type DeleteProjectsLocationsAssetsExportJobsResponse = Operation;
export const DeleteProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsAssetsExportJobsRequest,
  output: DeleteProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "POST", path: "v1/{+name}:run", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunProjectsLocationsAssetsExportJobsRequest>;

export type RunProjectsLocationsAssetsExportJobsResponse = Operation;
export const RunProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunProjectsLocationsAssetsExportJobsRequest,
  output: RunProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsAssetsExportJobsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsAssetsExportJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsAssetsExportJobsRequest>;

export type GetProjectsLocationsAssetsExportJobsResponse = AssetsExportJob;
export const GetProjectsLocationsAssetsExportJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AssetsExportJob;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsAssetsExportJobsRequest,
  output: GetProjectsLocationsAssetsExportJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsSourcesRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesRequest>;

export type GetProjectsLocationsSourcesResponse = Source;
export const GetProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Source;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesRequest,
  output: GetProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsSourcesRequest>;

export type DeleteProjectsLocationsSourcesResponse = Operation;
export const DeleteProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsSourcesRequest,
  output: DeleteProjectsLocationsSourcesResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsSourcesRequest>;

export type PatchProjectsLocationsSourcesResponse = Operation;
export const PatchProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsSourcesRequest,
  output: PatchProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesRequest {
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Filtering results. */
  filter?: string;
  /** Required. Parent value for `ListSourcesRequest`. */
  parent: string;
  /** A token identifying a page of results that the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sources" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesRequest>;

export type ListProjectsLocationsSourcesResponse = ListSourcesResponse;
export const ListProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListSourcesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesRequest,
  output: ListProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsSourcesRequest {
  /** Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  sourceId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Source;
}

export const CreateProjectsLocationsSourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceId: Schema.optional(Schema.String).pipe(T.HttpQuery("sourceId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Source).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/sources", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsSourcesRequest>;

export type CreateProjectsLocationsSourcesResponse = Operation;
export const CreateProjectsLocationsSourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsSourcesRequest,
  output: CreateProjectsLocationsSourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsSourcesErrorFramesRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
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
}

export const ListProjectsLocationsSourcesErrorFramesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/errorFrames" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsSourcesErrorFramesRequest>;

export type ListProjectsLocationsSourcesErrorFramesResponse =
  ListErrorFramesResponse;
export const ListProjectsLocationsSourcesErrorFramesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListErrorFramesResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsSourcesErrorFramesRequest,
  output: ListProjectsLocationsSourcesErrorFramesResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsSourcesErrorFramesRequest>;

export type GetProjectsLocationsSourcesErrorFramesResponse = ErrorFrame;
export const GetProjectsLocationsSourcesErrorFramesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ErrorFrame;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsSourcesErrorFramesRequest,
  output: GetProjectsLocationsSourcesErrorFramesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsPreferenceSetsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsPreferenceSetsRequest>;

export type GetProjectsLocationsPreferenceSetsResponse = PreferenceSet;
export const GetProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PreferenceSet;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsPreferenceSetsRequest,
  output: GetProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsPreferenceSetsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Name of the preference set. */
  name: string;
  /** Required. Field mask is used to specify the fields to be overwritten in the `PreferenceSet` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields. */
  updateMask?: string;
  /** Request body */
  body?: PreferenceSet;
}

export const PatchProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(PreferenceSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsPreferenceSetsRequest>;

export type PatchProjectsLocationsPreferenceSetsResponse = Operation;
export const PatchProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsPreferenceSetsRequest,
  output: PatchProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsPreferenceSetsRequest {
  /** Required. Name of the group resource. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const DeleteProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsPreferenceSetsRequest>;

export type DeleteProjectsLocationsPreferenceSetsResponse = Operation;
export const DeleteProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsPreferenceSetsRequest,
  output: DeleteProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsPreferenceSetsRequest {
  /** Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
  pageSize?: number;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. Parent value for `ListPreferenceSetsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
}

export const ListProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/preferenceSets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsPreferenceSetsRequest>;

export type ListProjectsLocationsPreferenceSetsResponse =
  ListPreferenceSetsResponse;
export const ListProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPreferenceSetsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsPreferenceSetsRequest,
  output: ListProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsPreferenceSetsRequest {
  /** Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  preferenceSetId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: PreferenceSet;
}

export const CreateProjectsLocationsPreferenceSetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferenceSetId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("preferenceSetId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PreferenceSet).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/preferenceSets",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsPreferenceSetsRequest>;

export type CreateProjectsLocationsPreferenceSetsResponse = Operation;
export const CreateProjectsLocationsPreferenceSetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsPreferenceSetsRequest,
  output: CreateProjectsLocationsPreferenceSetsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsGroupsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsGroupsRequest>;

export type GetProjectsLocationsGroupsResponse = Group;
export const GetProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Group;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsGroupsRequest>;

export type DeleteProjectsLocationsGroupsResponse = Operation;
export const DeleteProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group: Schema.String.pipe(T.HttpPath("group")),
    body: Schema.optional(AddAssetsToGroupRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+group}:addAssets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AddAssetsProjectsLocationsGroupsRequest>;

export type AddAssetsProjectsLocationsGroupsResponse = Operation;
export const AddAssetsProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AddAssetsProjectsLocationsGroupsRequest,
  output: AddAssetsProjectsLocationsGroupsResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsGroupsRequest>;

export type PatchProjectsLocationsGroupsResponse = Operation;
export const PatchProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsGroupsRequest,
  output: PatchProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "POST", path: "v1/{+group}:removeAssets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RemoveAssetsProjectsLocationsGroupsRequest>;

export type RemoveAssetsProjectsLocationsGroupsResponse = Operation;
export const RemoveAssetsProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RemoveAssetsProjectsLocationsGroupsRequest,
  output: RemoveAssetsProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsGroupsRequest {
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Filtering results. */
  filter?: string;
  /** Required. Parent value for `ListGroupsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
}

export const ListProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/groups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsGroupsRequest>;

export type ListProjectsLocationsGroupsResponse = ListGroupsResponse;
export const ListProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGroupsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsGroupsRequest,
  output: ListProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsGroupsRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  groupId?: string;
  /** Request body */
  body?: Group;
}

export const CreateProjectsLocationsGroupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    groupId: Schema.optional(Schema.String).pipe(T.HttpQuery("groupId")),
    body: Schema.optional(Group).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/groups", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsGroupsRequest>;

export type CreateProjectsLocationsGroupsResponse = Operation;
export const CreateProjectsLocationsGroupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsGroupsRequest,
  output: CreateProjectsLocationsGroupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page size. */
  pageSize?: number;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
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
    T.Http({ method: "POST", path: "v1/{+name}:sendHeartbeat", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SendHeartbeatProjectsLocationsDiscoveryClientsRequest>;

export type SendHeartbeatProjectsLocationsDiscoveryClientsResponse = Operation;
export const SendHeartbeatProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendHeartbeatProjectsLocationsDiscoveryClientsRequest,
  output: SendHeartbeatProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsDiscoveryClientsRequest {
  /** Required. The discovery client name. */
  name: string;
}

export const GetProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDiscoveryClientsRequest>;

export type GetProjectsLocationsDiscoveryClientsResponse = DiscoveryClient;
export const GetProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ DiscoveryClient;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDiscoveryClientsRequest>;

export type DeleteProjectsLocationsDiscoveryClientsResponse = Operation;
export const DeleteProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDiscoveryClientsRequest,
  output: DeleteProjectsLocationsDiscoveryClientsResponse,
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(DiscoveryClient).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDiscoveryClientsRequest>;

export type PatchProjectsLocationsDiscoveryClientsResponse = Operation;
export const PatchProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDiscoveryClientsRequest,
  output: PatchProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "GET", path: "v1/{+parent}/discoveryClients" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDiscoveryClientsRequest>;

export type ListProjectsLocationsDiscoveryClientsResponse =
  ListDiscoveryClientsResponse;
export const ListProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDiscoveryClientsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDiscoveryClientsRequest,
  output: ListProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDiscoveryClientsRequest {
  /** Required. Parent resource. */
  parent: string;
  /** Required. User specified ID for the discovery client. It will become the last component of the discovery client name. The ID must be unique within the project, is restricted to lower-cased letters and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  discoveryClientId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: DiscoveryClient;
}

export const CreateProjectsLocationsDiscoveryClientsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    discoveryClientId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("discoveryClientId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(DiscoveryClient).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/discoveryClients",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDiscoveryClientsRequest>;

export type CreateProjectsLocationsDiscoveryClientsResponse = Operation;
export const CreateProjectsLocationsDiscoveryClientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDiscoveryClientsRequest,
  output: CreateProjectsLocationsDiscoveryClientsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsReportConfigsRequest {
  /** Filtering results. */
  filter?: string;
  /** Required. Parent value for `ListReportConfigsRequest`. */
  parent: string;
  /** A token identifying a page of results the server should return. */
  pageToken?: string;
  /** Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/reportConfigs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReportConfigsRequest>;

export type ListProjectsLocationsReportConfigsResponse =
  ListReportConfigsResponse;
export const ListProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReportConfigsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsRequest,
  output: ListProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsReportConfigsRequest {
  /** Required. Name of the resource. */
  name: string;
}

export const GetProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReportConfigsRequest>;

export type GetProjectsLocationsReportConfigsResponse = ReportConfig;
export const GetProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportConfig;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsRequest,
  output: GetProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsReportConfigsRequest {
  /** Optional. If set to `true`, any child `Reports` of this entity will also be deleted. If set to `false`, the request only works if the resource has no children. */
  force?: boolean;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Name of the resource. */
  name: string;
}

export const DeleteProjectsLocationsReportConfigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsReportConfigsRequest>;

export type DeleteProjectsLocationsReportConfigsResponse = Operation;
export const DeleteProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsRequest,
  output: DeleteProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    reportConfigId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("reportConfigId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(ReportConfig).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/reportConfigs",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsReportConfigsRequest>;

export type CreateProjectsLocationsReportConfigsResponse = Operation;
export const CreateProjectsLocationsReportConfigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsRequest,
  output: CreateProjectsLocationsReportConfigsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
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
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsReportConfigsReportsRequest>;

export type DeleteProjectsLocationsReportConfigsReportsResponse = Operation;
export const DeleteProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsReportConfigsReportsRequest,
  output: DeleteProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsReportConfigsReportsRequest {
  /** Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?. */
  reportId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. Value for parent. */
  parent: string;
  /** Request body */
  body?: Report;
}

export const CreateProjectsLocationsReportConfigsReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reportId: Schema.optional(Schema.String).pipe(T.HttpQuery("reportId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Report).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/reports", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsReportConfigsReportsRequest>;

export type CreateProjectsLocationsReportConfigsReportsResponse = Operation;
export const CreateProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsReportConfigsReportsRequest,
  output: CreateProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsReportConfigsReportsRequest {
  /** Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value. */
  pageSize?: number;
  /** Required. Parent value for `ListReportsRequest`. */
  parent: string;
  /** A token identifying a page of results that the server should return. */
  pageToken?: string;
  /** Filtering results. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
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
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/reports" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsReportConfigsReportsRequest>;

export type ListProjectsLocationsReportConfigsReportsResponse =
  ListReportsResponse;
export const ListProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReportsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsReportConfigsReportsRequest,
  output: ListProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsReportConfigsReportsRequest>;

export type GetProjectsLocationsReportConfigsReportsResponse = Report;
export const GetProjectsLocationsReportConfigsReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Report;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsReportConfigsReportsRequest,
  output: GetProjectsLocationsReportConfigsReportsResponse,
  errors: [NotFound, Forbidden],
}));
