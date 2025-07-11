import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Omics {
  deleteS3AccessPolicy(
    input: DeleteS3AccessPolicyRequest,
  ): Effect.Effect<
    DeleteS3AccessPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | NotSupportedOperationException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getS3AccessPolicy(
    input: GetS3AccessPolicyRequest,
  ): Effect.Effect<
    GetS3AccessPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | NotSupportedOperationException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putS3AccessPolicy(
    input: PutS3AccessPolicyRequest,
  ): Effect.Effect<
    PutS3AccessPolicyResponse,
    | AccessDeniedException
    | InternalServerException
    | NotSupportedOperationException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export interface AbortMultipartReadSetUploadRequest {
  sequenceStoreId: string;
  uploadId: string;
}
export interface AbortMultipartReadSetUploadResponse {}
export type Accelerators = string;

export interface AcceptShareRequest {
  shareId: string;
}
export interface AcceptShareResponse {
  status?: string;
}
export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type AccessLogLocation = string;

export interface ActivateReadSetFilter {
  status?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export interface ActivateReadSetJobItem {
  id: string;
  sequenceStoreId: string;
  status: string;
  creationTime: Date | string;
  completionTime?: Date | string;
}
export type ActivateReadSetJobList = Array<ActivateReadSetJobItem>;
export interface ActivateReadSetSourceItem {
  readSetId: string;
  status: string;
  statusMessage?: string;
}
export type ActivateReadSetSourceList = Array<ActivateReadSetSourceItem>;
export type ActivationJobId = string;

export type AnnotationFieldMap = Record<string, string>;
export interface AnnotationImportItemDetail {
  source: string;
  jobStatus: string;
}
export type AnnotationImportItemDetails = Array<AnnotationImportItemDetail>;
export interface AnnotationImportItemSource {
  source: string;
}
export type AnnotationImportItemSources = Array<AnnotationImportItemSource>;
export interface AnnotationImportJobItem {
  id: string;
  destinationName: string;
  versionName: string;
  roleArn: string;
  status: string;
  creationTime: Date | string;
  updateTime: Date | string;
  completionTime?: Date | string;
  runLeftNormalization?: boolean;
  annotationFields?: Record<string, string>;
}
export type AnnotationImportJobItems = Array<AnnotationImportJobItem>;
export interface AnnotationStoreItem {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  storeFormat: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date | string;
  updateTime: Date | string;
  statusMessage: string;
  storeSizeBytes: number;
}
export type AnnotationStoreItems = Array<AnnotationStoreItem>;
export interface AnnotationStoreVersionItem {
  storeId: string;
  id: string;
  status: string;
  versionArn: string;
  name: string;
  versionName: string;
  description: string;
  creationTime: Date | string;
  updateTime: Date | string;
  statusMessage: string;
  versionSizeBytes: number;
}
export type AnnotationStoreVersionItems = Array<AnnotationStoreVersionItem>;
export type AnnotationType = string;

export type Arn = string;

export type ArnList = Array<string>;
export type AwsAccountId = string;

export interface BatchDeleteReadSetRequest {
  ids: Array<string>;
  sequenceStoreId: string;
}
export interface BatchDeleteReadSetResponse {
  errors?: Array<ReadSetBatchError>;
}
export type CacheBehavior = string;

export interface CancelAnnotationImportRequest {
  jobId: string;
}
export interface CancelAnnotationImportResponse {}
export interface CancelRunRequest {
  id: string;
}
export interface CancelVariantImportRequest {
  jobId: string;
}
export interface CancelVariantImportResponse {}
export type ClientToken = string;

export type CommentChar = string;

export interface CompleteMultipartReadSetUploadRequest {
  sequenceStoreId: string;
  uploadId: string;
  parts: Array<CompleteReadSetUploadPartListItem>;
}
export interface CompleteMultipartReadSetUploadResponse {
  readSetId: string;
}
export type CompleteReadSetUploadPartList =
  Array<CompleteReadSetUploadPartListItem>;
export interface CompleteReadSetUploadPartListItem {
  partNumber: number;
  partSource: string;
  checksum: string;
}
export type CompletionTime = Date | string;

export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export interface CreateAnnotationStoreRequest {
  reference?: ReferenceItem;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
  versionName?: string;
  sseConfig?: SseConfig;
  storeFormat: string;
  storeOptions?: StoreOptions;
}
export interface CreateAnnotationStoreResponse {
  id: string;
  reference?: ReferenceItem;
  storeFormat?: string;
  storeOptions?: StoreOptions;
  status: string;
  name: string;
  versionName: string;
  creationTime: Date | string;
}
export interface CreateAnnotationStoreVersionRequest {
  name: string;
  versionName: string;
  description?: string;
  versionOptions?: VersionOptions;
  tags?: Record<string, string>;
}
export interface CreateAnnotationStoreVersionResponse {
  id: string;
  versionName: string;
  storeId: string;
  versionOptions?: VersionOptions;
  name: string;
  status: string;
  creationTime: Date | string;
}
export interface CreateMultipartReadSetUploadRequest {
  sequenceStoreId: string;
  clientToken?: string;
  sourceFileType: string;
  subjectId: string;
  sampleId: string;
  generatedFrom?: string;
  referenceArn?: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
}
export interface CreateMultipartReadSetUploadResponse {
  sequenceStoreId: string;
  uploadId: string;
  sourceFileType: string;
  subjectId: string;
  sampleId: string;
  generatedFrom?: string;
  referenceArn: string;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
  creationTime: Date | string;
}
export interface CreateReferenceStoreRequest {
  name: string;
  description?: string;
  sseConfig?: SseConfig;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateReferenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
}
export interface CreateRunCacheRequest {
  cacheBehavior?: string;
  cacheS3Location: string;
  description?: string;
  name?: string;
  requestId: string;
  tags?: Record<string, string>;
  cacheBucketOwnerId?: string;
}
export interface CreateRunCacheResponse {
  arn?: string;
  id?: string;
  status?: string;
  tags?: Record<string, string>;
}
export interface CreateRunGroupRequest {
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  tags?: Record<string, string>;
  requestId: string;
  maxGpus?: number;
}
export interface CreateRunGroupResponse {
  arn?: string;
  id?: string;
  tags?: Record<string, string>;
}
export interface CreateSequenceStoreRequest {
  name: string;
  description?: string;
  sseConfig?: SseConfig;
  tags?: Record<string, string>;
  clientToken?: string;
  fallbackLocation?: string;
  eTagAlgorithmFamily?: string;
  propagatedSetLevelTags?: Array<string>;
  s3AccessConfig?: S3AccessConfig;
}
export interface CreateSequenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
  fallbackLocation?: string;
  eTagAlgorithmFamily?: string;
  status?: string;
  statusMessage?: string;
  propagatedSetLevelTags?: Array<string>;
  s3Access?: SequenceStoreS3Access;
}
export interface CreateShareRequest {
  resourceArn: string;
  principalSubscriber: string;
  shareName?: string;
}
export interface CreateShareResponse {
  shareId?: string;
  status?: string;
  shareName?: string;
}
export interface CreateVariantStoreRequest {
  reference: ReferenceItem;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
  sseConfig?: SseConfig;
}
export interface CreateVariantStoreResponse {
  id: string;
  reference?: ReferenceItem;
  status: string;
  name: string;
  creationTime: Date | string;
}
export interface CreateWorkflowRequest {
  name?: string;
  description?: string;
  engine?: string;
  definitionZip?: Uint8Array | string;
  definitionUri?: string;
  main?: string;
  parameterTemplate?: Record<string, WorkflowParameter>;
  storageCapacity?: number;
  tags?: Record<string, string>;
  requestId: string;
  accelerators?: string;
  storageType?: string;
}
export interface CreateWorkflowResponse {
  arn?: string;
  id?: string;
  status?: string;
  tags?: Record<string, string>;
  uuid?: string;
}
export interface CreateWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
  definitionZip?: Uint8Array | string;
  definitionUri?: string;
  accelerators?: string;
  description?: string;
  engine?: string;
  main?: string;
  parameterTemplate?: Record<string, WorkflowParameter>;
  requestId: string;
  storageType?: string;
  storageCapacity?: number;
  tags?: Record<string, string>;
  workflowBucketOwnerId?: string;
}
export interface CreateWorkflowVersionResponse {
  arn?: string;
  workflowId?: string;
  versionName?: string;
  status?: string;
  tags?: Record<string, string>;
  uuid?: string;
}
export type CreationJobId = string;

export type CreationTime = Date | string;

export type CreationType = string;

export interface DeleteAnnotationStoreRequest {
  name: string;
  force?: boolean;
}
export interface DeleteAnnotationStoreResponse {
  status: string;
}
export interface DeleteAnnotationStoreVersionsRequest {
  name: string;
  versions: Array<string>;
  force?: boolean;
}
export interface DeleteAnnotationStoreVersionsResponse {
  errors?: Array<VersionDeleteError>;
}
export interface DeleteReferenceRequest {
  id: string;
  referenceStoreId: string;
}
export interface DeleteReferenceResponse {}
export interface DeleteReferenceStoreRequest {
  id: string;
}
export interface DeleteReferenceStoreResponse {}
export interface DeleteRunCacheRequest {
  id: string;
}
export interface DeleteRunGroupRequest {
  id: string;
}
export interface DeleteRunRequest {
  id: string;
}
export interface DeleteS3AccessPolicyRequest {
  s3AccessPointArn: string;
}
export interface DeleteS3AccessPolicyResponse {}
export interface DeleteSequenceStoreRequest {
  id: string;
}
export interface DeleteSequenceStoreResponse {}
export interface DeleteShareRequest {
  shareId: string;
}
export interface DeleteShareResponse {
  status?: string;
}
export interface DeleteVariantStoreRequest {
  name: string;
  force?: boolean;
}
export interface DeleteVariantStoreResponse {
  status: string;
}
export interface DeleteWorkflowRequest {
  id: string;
}
export interface DeleteWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
}
export type Description = string;

export type Encoding = string;

export type EncryptionType = string;

export type EngineLogStream = string;

export type EngineVersion = string;

export type EscapeChar = string;

export type EscapeQuotes = boolean;

export interface ETag {
  algorithm?: string;
  source1?: string;
  source2?: string;
}
export type ETagAlgorithm = string;

export type ETagAlgorithmFamily = string;

export type ExportJobId = string;

export interface ExportReadSet {
  readSetId: string;
}
export interface ExportReadSetDetail {
  id: string;
  status: string;
  statusMessage?: string;
}
export type ExportReadSetDetailList = Array<ExportReadSetDetail>;
export interface ExportReadSetFilter {
  status?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export interface ExportReadSetJobDetail {
  id: string;
  sequenceStoreId: string;
  destination: string;
  status: string;
  creationTime: Date | string;
  completionTime?: Date | string;
}
export type ExportReadSetJobDetailList = Array<ExportReadSetJobDetail>;
export type ExportReadSetList = Array<ExportReadSet>;
export type FallbackLocation = string;

export interface FileInformation {
  totalParts?: number;
  partSize?: number;
  contentLength?: number;
  s3Access?: ReadSetS3Access;
}
export type FileType = string;

export interface Filter {
  resourceArns?: Array<string>;
  status?: Array<string>;
  type?: Array<string>;
}
export type FormatOptions =
  | { tsvOptions: TsvOptions }
  | { vcfOptions: VcfOptions };
export type FormatToHeader = Record<string, string>;
export type FormatToHeaderKey = string;

export type GeneratedFrom = string;

export interface GetAnnotationImportRequest {
  jobId: string;
}
export interface GetAnnotationImportResponse {
  id: string;
  destinationName: string;
  versionName: string;
  roleArn: string;
  status: string;
  statusMessage: string;
  creationTime: Date | string;
  updateTime: Date | string;
  completionTime: Date | string;
  items: Array<AnnotationImportItemDetail>;
  runLeftNormalization: boolean;
  formatOptions: FormatOptions;
  annotationFields?: Record<string, string>;
}
export interface GetAnnotationStoreRequest {
  name: string;
}
export interface GetAnnotationStoreResponse {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date | string;
  updateTime: Date | string;
  tags: Record<string, string>;
  storeOptions?: StoreOptions;
  storeFormat?: string;
  statusMessage: string;
  storeSizeBytes: number;
  numVersions: number;
}
export interface GetAnnotationStoreVersionRequest {
  name: string;
  versionName: string;
}
export interface GetAnnotationStoreVersionResponse {
  storeId: string;
  id: string;
  status: string;
  versionArn: string;
  name: string;
  versionName: string;
  description: string;
  creationTime: Date | string;
  updateTime: Date | string;
  tags: Record<string, string>;
  versionOptions?: VersionOptions;
  statusMessage: string;
  versionSizeBytes: number;
}
export interface GetReadSetActivationJobRequest {
  id: string;
  sequenceStoreId: string;
}
export interface GetReadSetActivationJobResponse {
  id: string;
  sequenceStoreId: string;
  status: string;
  statusMessage?: string;
  creationTime: Date | string;
  completionTime?: Date | string;
  sources?: Array<ActivateReadSetSourceItem>;
}
export interface GetReadSetExportJobRequest {
  sequenceStoreId: string;
  id: string;
}
export interface GetReadSetExportJobResponse {
  id: string;
  sequenceStoreId: string;
  destination: string;
  status: string;
  statusMessage?: string;
  creationTime: Date | string;
  completionTime?: Date | string;
  readSets?: Array<ExportReadSetDetail>;
}
export interface GetReadSetImportJobRequest {
  id: string;
  sequenceStoreId: string;
}
export interface GetReadSetImportJobResponse {
  id: string;
  sequenceStoreId: string;
  roleArn: string;
  status: string;
  statusMessage?: string;
  creationTime: Date | string;
  completionTime?: Date | string;
  sources: Array<ImportReadSetSourceItem>;
}
export interface GetReadSetMetadataRequest {
  id: string;
  sequenceStoreId: string;
}
export interface GetReadSetMetadataResponse {
  id: string;
  arn: string;
  sequenceStoreId: string;
  subjectId?: string;
  sampleId?: string;
  status: string;
  name?: string;
  description?: string;
  fileType: string;
  creationTime: Date | string;
  sequenceInformation?: SequenceInformation;
  referenceArn?: string;
  files?: ReadSetFiles;
  statusMessage?: string;
  creationType?: string;
  etag?: ETag;
  creationJobId?: string;
}
export interface GetReadSetRequest {
  id: string;
  sequenceStoreId: string;
  file?: string;
  partNumber: number;
}
export interface GetReadSetResponse {
  payload?: Uint8Array | string;
}
export interface GetReferenceImportJobRequest {
  id: string;
  referenceStoreId: string;
}
export interface GetReferenceImportJobResponse {
  id: string;
  referenceStoreId: string;
  roleArn: string;
  status: string;
  statusMessage?: string;
  creationTime: Date | string;
  completionTime?: Date | string;
  sources: Array<ImportReferenceSourceItem>;
}
export interface GetReferenceMetadataRequest {
  id: string;
  referenceStoreId: string;
}
export interface GetReferenceMetadataResponse {
  id: string;
  arn: string;
  referenceStoreId: string;
  md5: string;
  status?: string;
  name?: string;
  description?: string;
  creationTime: Date | string;
  updateTime: Date | string;
  files?: ReferenceFiles;
  creationType?: string;
  creationJobId?: string;
}
export interface GetReferenceRequest {
  id: string;
  referenceStoreId: string;
  range?: string;
  partNumber: number;
  file?: string;
}
export interface GetReferenceResponse {
  payload?: Uint8Array | string;
}
export interface GetReferenceStoreRequest {
  id: string;
}
export interface GetReferenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
}
export interface GetRunCacheRequest {
  id: string;
}
export interface GetRunCacheResponse {
  arn?: string;
  cacheBehavior?: string;
  cacheBucketOwnerId?: string;
  cacheS3Uri?: string;
  creationTime?: Date | string;
  description?: string;
  id?: string;
  name?: string;
  status?: string;
  tags?: Record<string, string>;
}
export interface GetRunGroupRequest {
  id: string;
}
export interface GetRunGroupResponse {
  arn?: string;
  id?: string;
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  creationTime?: Date | string;
  tags?: Record<string, string>;
  maxGpus?: number;
}
export interface GetRunRequest {
  id: string;
  export?: Array<string>;
}
export interface GetRunResponse {
  arn?: string;
  id?: string;
  cacheId?: string;
  cacheBehavior?: string;
  engineVersion?: string;
  status?: string;
  workflowId?: string;
  workflowType?: string;
  runId?: string;
  roleArn?: string;
  name?: string;
  runGroupId?: string;
  priority?: number;
  definition?: string;
  digest?: string;
  parameters?: unknown;
  storageCapacity?: number;
  outputUri?: string;
  logLevel?: string;
  resourceDigests?: Record<string, string>;
  startedBy?: string;
  creationTime?: Date | string;
  startTime?: Date | string;
  stopTime?: Date | string;
  statusMessage?: string;
  tags?: Record<string, string>;
  accelerators?: string;
  retentionMode?: string;
  failureReason?: string;
  logLocation?: RunLogLocation;
  uuid?: string;
  runOutputUri?: string;
  storageType?: string;
  workflowOwnerId?: string;
  workflowVersionName?: string;
  workflowUuid?: string;
}
export interface GetRunTaskRequest {
  id: string;
  taskId: string;
}
export interface GetRunTaskResponse {
  taskId?: string;
  status?: string;
  name?: string;
  cpus?: number;
  cacheHit?: boolean;
  cacheS3Uri?: string;
  memory?: number;
  creationTime?: Date | string;
  startTime?: Date | string;
  stopTime?: Date | string;
  statusMessage?: string;
  logStream?: string;
  gpus?: number;
  instanceType?: string;
  failureReason?: string;
}
export interface GetS3AccessPolicyRequest {
  s3AccessPointArn: string;
}
export interface GetS3AccessPolicyResponse {
  s3AccessPointArn?: string;
  storeId?: string;
  storeType?: StoreType;
  updateTime?: Date | string;
  s3AccessPolicy: string;
}
export interface GetSequenceStoreRequest {
  id: string;
}
export interface GetSequenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
  fallbackLocation?: string;
  s3Access?: SequenceStoreS3Access;
  eTagAlgorithmFamily?: string;
  status?: string;
  statusMessage?: string;
  propagatedSetLevelTags?: Array<string>;
  updateTime?: Date | string;
}
export interface GetShareRequest {
  shareId: string;
}
export interface GetShareResponse {
  share?: ShareDetails;
}
export interface GetVariantImportRequest {
  jobId: string;
}
export interface GetVariantImportResponse {
  id: string;
  destinationName: string;
  roleArn: string;
  status: string;
  statusMessage: string;
  creationTime: Date | string;
  updateTime: Date | string;
  completionTime?: Date | string;
  items: Array<VariantImportItemDetail>;
  runLeftNormalization: boolean;
  annotationFields?: Record<string, string>;
}
export interface GetVariantStoreRequest {
  name: string;
}
export interface GetVariantStoreResponse {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date | string;
  updateTime: Date | string;
  tags: Record<string, string>;
  statusMessage: string;
  storeSizeBytes: number;
}
export interface GetWorkflowRequest {
  id: string;
  type?: string;
  export?: Array<string>;
  workflowOwnerId?: string;
}
export interface GetWorkflowResponse {
  arn?: string;
  id?: string;
  status?: string;
  type?: string;
  name?: string;
  description?: string;
  engine?: string;
  definition?: string;
  main?: string;
  digest?: string;
  parameterTemplate?: Record<string, WorkflowParameter>;
  storageCapacity?: number;
  creationTime?: Date | string;
  statusMessage?: string;
  tags?: Record<string, string>;
  metadata?: Record<string, string>;
  accelerators?: string;
  storageType?: string;
  uuid?: string;
}
export interface GetWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
  type?: string;
  export?: Array<string>;
  workflowOwnerId?: string;
}
export interface GetWorkflowVersionResponse {
  arn?: string;
  workflowId?: string;
  versionName?: string;
  accelerators?: string;
  creationTime?: Date | string;
  description?: string;
  definition?: string;
  digest?: string;
  engine?: string;
  main?: string;
  metadata?: Record<string, string>;
  parameterTemplate?: Record<string, WorkflowParameter>;
  status?: string;
  statusMessage?: string;
  storageType?: string;
  storageCapacity?: number;
  type?: string;
  tags?: Record<string, string>;
  uuid?: string;
  workflowBucketOwnerId?: string;
}
export type Header = boolean;

export type IdList = Array<string>;
export type ImportJobId = string;

export interface ImportReadSetFilter {
  status?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export interface ImportReadSetJobItem {
  id: string;
  sequenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date | string;
  completionTime?: Date | string;
}
export type ImportReadSetJobList = Array<ImportReadSetJobItem>;
export interface ImportReadSetSourceItem {
  sourceFiles: SourceFiles;
  sourceFileType: string;
  status: string;
  statusMessage?: string;
  subjectId: string;
  sampleId: string;
  generatedFrom?: string;
  referenceArn?: string;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
  readSetId?: string;
}
export type ImportReadSetSourceList = Array<ImportReadSetSourceItem>;
export interface ImportReferenceFilter {
  status?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export interface ImportReferenceJobItem {
  id: string;
  referenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date | string;
  completionTime?: Date | string;
}
export type ImportReferenceJobList = Array<ImportReferenceJobItem>;
export interface ImportReferenceSourceItem {
  sourceFile?: string;
  status: string;
  statusMessage?: string;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
  referenceId?: string;
}
export type ImportReferenceSourceList = Array<ImportReferenceSourceItem>;
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
}> {}
export type JobStatus = string;

export type JobStatusMessage = string;

export type JobStatusMsg = string;

export type LineSep = string;

export interface ListAnnotationImportJobsFilter {
  status?: string;
  storeName?: string;
}
export interface ListAnnotationImportJobsRequest {
  maxResults?: number;
  ids?: Array<string>;
  nextToken?: string;
  filter?: ListAnnotationImportJobsFilter;
}
export interface ListAnnotationImportJobsResponse {
  annotationImportJobs?: Array<AnnotationImportJobItem>;
  nextToken?: string;
}
export interface ListAnnotationStoresFilter {
  status?: string;
}
export interface ListAnnotationStoresRequest {
  ids?: Array<string>;
  maxResults?: number;
  nextToken?: string;
  filter?: ListAnnotationStoresFilter;
}
export interface ListAnnotationStoresResponse {
  annotationStores?: Array<AnnotationStoreItem>;
  nextToken?: string;
}
export interface ListAnnotationStoreVersionsFilter {
  status?: string;
}
export interface ListAnnotationStoreVersionsRequest {
  name: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ListAnnotationStoreVersionsFilter;
}
export interface ListAnnotationStoreVersionsResponse {
  annotationStoreVersions?: Array<AnnotationStoreVersionItem>;
  nextToken?: string;
}
export interface ListMultipartReadSetUploadsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListMultipartReadSetUploadsResponse {
  nextToken?: string;
  uploads?: Array<MultipartReadSetUploadListItem>;
}
export interface ListReadSetActivationJobsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ActivateReadSetFilter;
}
export interface ListReadSetActivationJobsResponse {
  nextToken?: string;
  activationJobs?: Array<ActivateReadSetJobItem>;
}
export interface ListReadSetExportJobsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ExportReadSetFilter;
}
export interface ListReadSetExportJobsResponse {
  nextToken?: string;
  exportJobs?: Array<ExportReadSetJobDetail>;
}
export interface ListReadSetImportJobsRequest {
  maxResults?: number;
  nextToken?: string;
  sequenceStoreId: string;
  filter?: ImportReadSetFilter;
}
export interface ListReadSetImportJobsResponse {
  nextToken?: string;
  importJobs?: Array<ImportReadSetJobItem>;
}
export interface ListReadSetsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ReadSetFilter;
}
export interface ListReadSetsResponse {
  nextToken?: string;
  readSets: Array<ReadSetListItem>;
}
export interface ListReadSetUploadPartsRequest {
  sequenceStoreId: string;
  uploadId: string;
  partSource: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ReadSetUploadPartListFilter;
}
export interface ListReadSetUploadPartsResponse {
  nextToken?: string;
  parts?: Array<ReadSetUploadPartListItem>;
}
export interface ListReferenceImportJobsRequest {
  maxResults?: number;
  nextToken?: string;
  referenceStoreId: string;
  filter?: ImportReferenceFilter;
}
export interface ListReferenceImportJobsResponse {
  nextToken?: string;
  importJobs?: Array<ImportReferenceJobItem>;
}
export interface ListReferencesRequest {
  referenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ReferenceFilter;
}
export interface ListReferencesResponse {
  nextToken?: string;
  references: Array<ReferenceListItem>;
}
export interface ListReferenceStoresRequest {
  maxResults?: number;
  nextToken?: string;
  filter?: ReferenceStoreFilter;
}
export interface ListReferenceStoresResponse {
  nextToken?: string;
  referenceStores: Array<ReferenceStoreDetail>;
}
export interface ListRunCachesRequest {
  maxResults?: number;
  startingToken?: string;
}
export interface ListRunCachesResponse {
  items?: Array<RunCacheListItem>;
  nextToken?: string;
}
export interface ListRunGroupsRequest {
  name?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface ListRunGroupsResponse {
  items?: Array<RunGroupListItem>;
  nextToken?: string;
}
export interface ListRunsRequest {
  name?: string;
  runGroupId?: string;
  startingToken?: string;
  maxResults?: number;
  status?: string;
}
export interface ListRunsResponse {
  items?: Array<RunListItem>;
  nextToken?: string;
}
export interface ListRunTasksRequest {
  id: string;
  status?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface ListRunTasksResponse {
  items?: Array<TaskListItem>;
  nextToken?: string;
}
export interface ListSequenceStoresRequest {
  maxResults?: number;
  nextToken?: string;
  filter?: SequenceStoreFilter;
}
export interface ListSequenceStoresResponse {
  nextToken?: string;
  sequenceStores: Array<SequenceStoreDetail>;
}
export interface ListSharesRequest {
  resourceOwner: string;
  filter?: Filter;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSharesResponse {
  shares: Array<ShareDetails>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: Record<string, string>;
}
export type ListToken = string;

export interface ListVariantImportJobsFilter {
  status?: string;
  storeName?: string;
}
export interface ListVariantImportJobsRequest {
  maxResults?: number;
  ids?: Array<string>;
  nextToken?: string;
  filter?: ListVariantImportJobsFilter;
}
export interface ListVariantImportJobsResponse {
  variantImportJobs?: Array<VariantImportJobItem>;
  nextToken?: string;
}
export interface ListVariantStoresFilter {
  status?: string;
}
export interface ListVariantStoresRequest {
  maxResults?: number;
  ids?: Array<string>;
  nextToken?: string;
  filter?: ListVariantStoresFilter;
}
export interface ListVariantStoresResponse {
  variantStores?: Array<VariantStoreItem>;
  nextToken?: string;
}
export interface ListWorkflowsRequest {
  type?: string;
  name?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface ListWorkflowsResponse {
  items?: Array<WorkflowListItem>;
  nextToken?: string;
}
export interface ListWorkflowVersionsRequest {
  workflowId: string;
  type?: string;
  workflowOwnerId?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface ListWorkflowVersionsResponse {
  items?: Array<WorkflowVersionListItem>;
  nextToken?: string;
}
export type Md5 = string;

export type MultipartReadSetUploadList = Array<MultipartReadSetUploadListItem>;
export interface MultipartReadSetUploadListItem {
  sequenceStoreId: string;
  uploadId: string;
  sourceFileType: string;
  subjectId: string;
  sampleId: string;
  generatedFrom: string;
  referenceArn: string;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
  creationTime: Date | string;
}
export type NextToken = string;

export declare class NotSupportedOperationException extends EffectData.TaggedError(
  "NotSupportedOperationException",
)<{
  readonly message: string;
}> {}
export type NumericIdInArn = string;

export type PropagatedSetLevelTags = Array<string>;
export interface PutS3AccessPolicyRequest {
  s3AccessPointArn: string;
  s3AccessPolicy: string;
}
export interface PutS3AccessPolicyResponse {
  s3AccessPointArn?: string;
  storeId?: string;
  storeType?: StoreType;
}
export type Quote = string;

export type QuoteAll = boolean;

export type Range = string;

export declare class RangeNotSatisfiableException extends EffectData.TaggedError(
  "RangeNotSatisfiableException",
)<{
  readonly message: string;
}> {}
export interface ReadOptions {
  sep?: string;
  encoding?: string;
  quote?: string;
  quoteAll?: boolean;
  escape?: string;
  escapeQuotes?: boolean;
  comment?: string;
  header?: boolean;
  lineSep?: string;
}
export type ReadSetActivationJobItemStatus = string;

export type ReadSetActivationJobStatus = string;

export type ReadSetArn = string;

export interface ReadSetBatchError {
  id: string;
  code: string;
  message: string;
}
export type ReadSetBatchErrorList = Array<ReadSetBatchError>;
export type ReadSetDescription = string;

export type ReadSetExportJobItemStatus = string;

export type ReadSetExportJobStatus = string;

export type ReadSetFile = string;

export interface ReadSetFiles {
  source1?: FileInformation;
  source2?: FileInformation;
  index?: FileInformation;
}
export interface ReadSetFilter {
  name?: string;
  status?: string;
  referenceArn?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
  sampleId?: string;
  subjectId?: string;
  generatedFrom?: string;
  creationType?: string;
}
export type ReadSetId = string;

export type ReadSetIdList = Array<string>;
export type ReadSetImportJobItemStatus = string;

export type ReadSetImportJobStatus = string;

export type ReadSetList = Array<ReadSetListItem>;
export interface ReadSetListItem {
  id: string;
  arn: string;
  sequenceStoreId: string;
  subjectId?: string;
  sampleId?: string;
  status: string;
  name?: string;
  description?: string;
  referenceArn?: string;
  fileType: string;
  sequenceInformation?: SequenceInformation;
  creationTime: Date | string;
  statusMessage?: string;
  creationType?: string;
  etag?: ETag;
}
export type ReadSetName = string;

export type ReadSetPartSource = string;

export type ReadSetPartStreamingBlob = Uint8Array | string;

export interface ReadSetS3Access {
  s3Uri?: string;
}
export type ReadSetStatus = string;

export type ReadSetStatusMessage = string;

export type ReadSetStreamingBlob = Uint8Array | string;

export type ReadSetUploadPartList = Array<ReadSetUploadPartListItem>;
export interface ReadSetUploadPartListFilter {
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export interface ReadSetUploadPartListItem {
  partNumber: number;
  partSize: number;
  partSource: string;
  checksum: string;
  creationTime?: Date | string;
  lastUpdatedTime?: Date | string;
}
export type ReferenceArn = string;

export type ReferenceArnFilter = string;

export type ReferenceCreationType = string;

export type ReferenceDescription = string;

export type ReferenceFile = string;

export interface ReferenceFiles {
  source?: FileInformation;
  index?: FileInformation;
}
export interface ReferenceFilter {
  name?: string;
  md5?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export type ReferenceId = string;

export type ReferenceImportJobItemStatus = string;

export type ReferenceImportJobStatus = string;

export type ReferenceItem = { referenceArn: string };
export type ReferenceList = Array<ReferenceListItem>;
export interface ReferenceListItem {
  id: string;
  arn: string;
  referenceStoreId: string;
  md5: string;
  status?: string;
  name?: string;
  description?: string;
  creationTime: Date | string;
  updateTime: Date | string;
}
export type ReferenceName = string;

export type ReferenceStatus = string;

export type ReferenceStoreArn = string;

export type ReferenceStoreDescription = string;

export interface ReferenceStoreDetail {
  arn: string;
  id: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
}
export type ReferenceStoreDetailList = Array<ReferenceStoreDetail>;
export interface ReferenceStoreFilter {
  name?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
}
export type ReferenceStoreId = string;

export type ReferenceStoreName = string;

export type ReferenceStreamingBlob = Uint8Array | string;

export declare class RequestTimeoutException extends EffectData.TaggedError(
  "RequestTimeoutException",
)<{
  readonly message: string;
}> {}
export type ResourceId = string;

export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
}> {}
export type ResourceOwner = string;

export type RoleArn = string;

export type RunArn = string;

export type RunCacheArn = string;

export type RunCacheId = string;

export type RunCacheList = Array<RunCacheListItem>;
export interface RunCacheListItem {
  arn?: string;
  cacheBehavior?: string;
  cacheS3Uri?: string;
  creationTime?: Date | string;
  id?: string;
  name?: string;
  status?: string;
}
export type RunCacheRequestId = string;

export type RunCacheStatus = string;

export type RunCacheTimestamp = Date | string;

export type RunExport = string;

export type RunExportList = Array<string>;
export type RunFailureReason = string;

export type RunGroupArn = string;

export type RunGroupId = string;

export type RunGroupList = Array<RunGroupListItem>;
export interface RunGroupListItem {
  arn?: string;
  id?: string;
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  creationTime?: Date | string;
  maxGpus?: number;
}
export type RunGroupListToken = string;

export type RunGroupName = string;

export type RunGroupRequestId = string;

export type RunGroupTimestamp = Date | string;

export type RunId = string;

export type RunLeftNormalization = boolean;

export type RunList = Array<RunListItem>;
export interface RunListItem {
  arn?: string;
  id?: string;
  status?: string;
  workflowId?: string;
  name?: string;
  priority?: number;
  storageCapacity?: number;
  creationTime?: Date | string;
  startTime?: Date | string;
  stopTime?: Date | string;
  storageType?: string;
  workflowVersionName?: string;
}
export type RunListToken = string;

export type RunLogLevel = string;

export interface RunLogLocation {
  engineLogStream?: string;
  runLogStream?: string;
}
export type RunLogStream = string;

export type RunName = string;

export type RunOutputUri = string;

export type RunParameters = unknown;

export type RunRequestId = string;

export type RunResourceDigest = string;

export type RunResourceDigestKey = string;

export type RunResourceDigests = Record<string, string>;
export type RunRetentionMode = string;

export type RunRoleArn = string;

export type RunStartedBy = string;

export type RunStatus = string;

export type RunStatusMessage = string;

export type RunTimestamp = Date | string;

export type RunUuid = string;

export interface S3AccessConfig {
  accessLogLocation?: string;
}
export type S3AccessPointArn = string;

export type S3AccessPolicy = string;

export type S3Destination = string;

export type S3Uri = string;

export type S3UriForBucketOrObject = string;

export type SampleId = string;

export type Schema = Array<Record<string, string>>;
export type SchemaItem = Record<string, string>;
export type SchemaValueType = string;

export type Separator = string;

export interface SequenceInformation {
  totalReadCount?: number;
  totalBaseCount?: number;
  generatedFrom?: string;
  alignment?: string;
}
export type SequenceStoreArn = string;

export type SequenceStoreDescription = string;

export interface SequenceStoreDetail {
  arn: string;
  id: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
  fallbackLocation?: string;
  eTagAlgorithmFamily?: string;
  status?: string;
  statusMessage?: string;
  updateTime?: Date | string;
}
export type SequenceStoreDetailList = Array<SequenceStoreDetail>;
export interface SequenceStoreFilter {
  name?: string;
  createdAfter?: Date | string;
  createdBefore?: Date | string;
  status?: string;
  updatedAfter?: Date | string;
  updatedBefore?: Date | string;
}
export type SequenceStoreId = string;

export type SequenceStoreName = string;

export interface SequenceStoreS3Access {
  s3Uri?: string;
  s3AccessPointArn?: string;
  accessLogLocation?: string;
}
export type SequenceStoreStatus = string;

export type SequenceStoreStatusMessage = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export interface ShareDetails {
  shareId?: string;
  resourceArn?: string;
  resourceId?: string;
  principalSubscriber?: string;
  ownerId?: string;
  status?: string;
  statusMessage?: string;
  shareName?: string;
  creationTime?: Date | string;
  updateTime?: Date | string;
}
export type ShareDetailsList = Array<ShareDetails>;
export type ShareName = string;

export type ShareResourceType = string;

export type ShareStatus = string;

export interface SourceFiles {
  source1: string;
  source2?: string;
}
export interface SseConfig {
  type: string;
  keyArn?: string;
}
export interface StartAnnotationImportRequest {
  destinationName: string;
  roleArn: string;
  items: Array<AnnotationImportItemSource>;
  versionName?: string;
  formatOptions?: FormatOptions;
  runLeftNormalization?: boolean;
  annotationFields?: Record<string, string>;
}
export interface StartAnnotationImportResponse {
  jobId: string;
}
export interface StartReadSetActivationJobRequest {
  sequenceStoreId: string;
  clientToken?: string;
  sources: Array<StartReadSetActivationJobSourceItem>;
}
export interface StartReadSetActivationJobResponse {
  id: string;
  sequenceStoreId: string;
  status: string;
  creationTime: Date | string;
}
export interface StartReadSetActivationJobSourceItem {
  readSetId: string;
}
export type StartReadSetActivationJobSourceList =
  Array<StartReadSetActivationJobSourceItem>;
export interface StartReadSetExportJobRequest {
  sequenceStoreId: string;
  destination: string;
  roleArn: string;
  clientToken?: string;
  sources: Array<ExportReadSet>;
}
export interface StartReadSetExportJobResponse {
  id: string;
  sequenceStoreId: string;
  destination: string;
  status: string;
  creationTime: Date | string;
}
export interface StartReadSetImportJobRequest {
  sequenceStoreId: string;
  roleArn: string;
  clientToken?: string;
  sources: Array<StartReadSetImportJobSourceItem>;
}
export interface StartReadSetImportJobResponse {
  id: string;
  sequenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date | string;
}
export interface StartReadSetImportJobSourceItem {
  sourceFiles: SourceFiles;
  sourceFileType: string;
  subjectId: string;
  sampleId: string;
  generatedFrom?: string;
  referenceArn?: string;
  name?: string;
  description?: string;
  tags?: Record<string, string>;
}
export type StartReadSetImportJobSourceList =
  Array<StartReadSetImportJobSourceItem>;
export interface StartReferenceImportJobRequest {
  referenceStoreId: string;
  roleArn: string;
  clientToken?: string;
  sources: Array<StartReferenceImportJobSourceItem>;
}
export interface StartReferenceImportJobResponse {
  id: string;
  referenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date | string;
}
export interface StartReferenceImportJobSourceItem {
  sourceFile: string;
  name: string;
  description?: string;
  tags?: Record<string, string>;
}
export type StartReferenceImportJobSourceList =
  Array<StartReferenceImportJobSourceItem>;
export interface StartRunRequest {
  workflowId?: string;
  workflowType?: string;
  runId?: string;
  roleArn: string;
  name?: string;
  cacheId?: string;
  cacheBehavior?: string;
  runGroupId?: string;
  priority?: number;
  parameters?: unknown;
  storageCapacity?: number;
  outputUri?: string;
  logLevel?: string;
  tags?: Record<string, string>;
  requestId: string;
  retentionMode?: string;
  storageType?: string;
  workflowOwnerId?: string;
  workflowVersionName?: string;
}
export interface StartRunResponse {
  arn?: string;
  id?: string;
  status?: string;
  tags?: Record<string, string>;
  uuid?: string;
  runOutputUri?: string;
}
export interface StartVariantImportRequest {
  destinationName: string;
  roleArn: string;
  items: Array<VariantImportItemSource>;
  runLeftNormalization?: boolean;
  annotationFields?: Record<string, string>;
}
export interface StartVariantImportResponse {
  jobId: string;
}
export type StatusList = Array<string>;
export type StatusMessage = string;

export type StorageType = string;

export type StoreFormat = string;

export type StoreId = string;

export type StoreName = string;

export type StoreOptions = { tsvStoreOptions: TsvStoreOptions };
export type StoreStatus = string;

export type StoreType = "SEQUENCE_STORE" | "REFERENCE_STORE";
export type SubjectId = string;

export type TagArn = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type TaskFailureReason = string;

export type TaskId = string;

export type TaskInstanceType = string;

export type TaskList = Array<TaskListItem>;
export interface TaskListItem {
  taskId?: string;
  status?: string;
  name?: string;
  cpus?: number;
  cacheHit?: boolean;
  cacheS3Uri?: string;
  memory?: number;
  creationTime?: Date | string;
  startTime?: Date | string;
  stopTime?: Date | string;
  gpus?: number;
  instanceType?: string;
}
export type TaskListToken = string;

export type TaskLogStream = string;

export type TaskName = string;

export type TaskStatus = string;

export type TaskStatusMessage = string;

export type TaskTimestamp = Date | string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface TsvOptions {
  readOptions?: ReadOptions;
}
export interface TsvStoreOptions {
  annotationType?: string;
  formatToHeader?: Record<string, string>;
  schema?: Array<Record<string, string>>;
}
export interface TsvVersionOptions {
  annotationType?: string;
  formatToHeader?: Record<string, string>;
  schema?: Array<Record<string, string>>;
}
export type TypeList = Array<string>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAnnotationStoreRequest {
  name: string;
  description?: string;
}
export interface UpdateAnnotationStoreResponse {
  id: string;
  reference: ReferenceItem;
  status: string;
  name: string;
  description: string;
  creationTime: Date | string;
  updateTime: Date | string;
  storeOptions?: StoreOptions;
  storeFormat?: string;
}
export interface UpdateAnnotationStoreVersionRequest {
  name: string;
  versionName: string;
  description?: string;
}
export interface UpdateAnnotationStoreVersionResponse {
  storeId: string;
  id: string;
  status: string;
  name: string;
  versionName: string;
  description: string;
  creationTime: Date | string;
  updateTime: Date | string;
}
export interface UpdateRunCacheRequest {
  cacheBehavior?: string;
  description?: string;
  id: string;
  name?: string;
}
export interface UpdateRunGroupRequest {
  id: string;
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  maxGpus?: number;
}
export interface UpdateSequenceStoreRequest {
  id: string;
  name?: string;
  description?: string;
  clientToken?: string;
  fallbackLocation?: string;
  propagatedSetLevelTags?: Array<string>;
  s3AccessConfig?: S3AccessConfig;
}
export interface UpdateSequenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date | string;
  updateTime?: Date | string;
  propagatedSetLevelTags?: Array<string>;
  status?: string;
  statusMessage?: string;
  fallbackLocation?: string;
  s3Access?: SequenceStoreS3Access;
  eTagAlgorithmFamily?: string;
}
export type UpdateTime = Date | string;

export interface UpdateVariantStoreRequest {
  name: string;
  description?: string;
}
export interface UpdateVariantStoreResponse {
  id: string;
  reference: ReferenceItem;
  status: string;
  name: string;
  description: string;
  creationTime: Date | string;
  updateTime: Date | string;
}
export interface UpdateWorkflowRequest {
  id: string;
  name?: string;
  description?: string;
  storageType?: string;
  storageCapacity?: number;
}
export interface UpdateWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
  description?: string;
  storageType?: string;
  storageCapacity?: number;
}
export type UploadId = string;

export interface UploadReadSetPartRequest {
  sequenceStoreId: string;
  uploadId: string;
  partSource: string;
  partNumber: number;
  payload: Uint8Array | string;
}
export interface UploadReadSetPartResponse {
  checksum: string;
}
export type UserCustomDescription = string;

export type UserCustomName = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export interface VariantImportItemDetail {
  source: string;
  jobStatus: string;
  statusMessage?: string;
}
export type VariantImportItemDetails = Array<VariantImportItemDetail>;
export interface VariantImportItemSource {
  source: string;
}
export type VariantImportItemSources = Array<VariantImportItemSource>;
export interface VariantImportJobItem {
  id: string;
  destinationName: string;
  roleArn: string;
  status: string;
  creationTime: Date | string;
  updateTime: Date | string;
  completionTime?: Date | string;
  runLeftNormalization?: boolean;
  annotationFields?: Record<string, string>;
}
export type VariantImportJobItems = Array<VariantImportJobItem>;
export interface VariantStoreItem {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date | string;
  updateTime: Date | string;
  statusMessage: string;
  storeSizeBytes: number;
}
export type VariantStoreItems = Array<VariantStoreItem>;
export interface VcfOptions {
  ignoreQualField?: boolean;
  ignoreFilterField?: boolean;
}
export interface VersionDeleteError {
  versionName: string;
  message: string;
}
export type VersionDeleteErrorList = Array<VersionDeleteError>;
export type VersionList = Array<string>;
export type VersionName = string;

export type VersionOptions = { tsvVersionOptions: TsvVersionOptions };
export type VersionStatus = string;

export type WorkflowArn = string;

export type WorkflowBucketOwnerId = string;

export type WorkflowDefinition = string;

export type WorkflowDescription = string;

export type WorkflowDigest = string;

export type WorkflowEngine = string;

export type WorkflowExport = string;

export type WorkflowExportList = Array<string>;
export type WorkflowId = string;

export type WorkflowList = Array<WorkflowListItem>;
export interface WorkflowListItem {
  arn?: string;
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  digest?: string;
  creationTime?: Date | string;
  metadata?: Record<string, string>;
}
export type WorkflowListToken = string;

export type WorkflowMain = string;

export type WorkflowMetadata = Record<string, string>;
export type WorkflowMetadataKey = string;

export type WorkflowMetadataValue = string;

export type WorkflowName = string;

export type WorkflowOwnerId = string;

export interface WorkflowParameter {
  description?: string;
  optional?: boolean;
}
export type WorkflowParameterDescription = string;

export type WorkflowParameterName = string;

export type WorkflowParameterTemplate = Record<string, WorkflowParameter>;
export type WorkflowRequestId = string;

export type WorkflowStatus = string;

export type WorkflowStatusMessage = string;

export type WorkflowTimestamp = Date | string;

export type WorkflowType = string;

export type WorkflowUuid = string;

export type WorkflowVersionArn = string;

export type WorkflowVersionDescription = string;

export type WorkflowVersionList = Array<WorkflowVersionListItem>;
export interface WorkflowVersionListItem {
  arn?: string;
  workflowId?: string;
  versionName?: string;
  description?: string;
  status?: string;
  type?: string;
  digest?: string;
  creationTime?: Date | string;
  metadata?: Record<string, string>;
}
export type WorkflowVersionListToken = string;

export type WorkflowVersionName = string;

export declare namespace DeleteS3AccessPolicy {
  export type Input = DeleteS3AccessPolicyRequest;
  export type Output = DeleteS3AccessPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotSupportedOperationException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetS3AccessPolicy {
  export type Input = GetS3AccessPolicyRequest;
  export type Output = GetS3AccessPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotSupportedOperationException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutS3AccessPolicy {
  export type Input = PutS3AccessPolicyRequest;
  export type Output = PutS3AccessPolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | NotSupportedOperationException
    | RequestTimeoutException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
