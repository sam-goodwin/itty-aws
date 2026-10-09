import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "Omics", serviceShapeName: "Omics" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "omics" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-11-28");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://omics-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://omics-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://omics.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://omics.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class NotSupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<NotSupportedOperationException>()(
    "NotSupportedOperationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(405),
  ).pipe(C.withBadRequestError) {}
export class RangeNotSatisfiableException
  extends /*@__PURE__*/ S.TaggedError<RangeNotSatisfiableException>()(
    "RangeNotSatisfiableException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(416), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withRetryableError) {}
export class RequestTimeoutException
  extends /*@__PURE__*/ S.TaggedError<RequestTimeoutException>()(
    "RequestTimeoutException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(408),
  ).pipe(C.withTimeoutError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SequenceStoreId = string;
export type UploadId = string;
export interface AbortMultipartReadSetUploadRequest {
  sequenceStoreId: string;
  uploadId: string;
}
export interface AbortMultipartReadSetUploadResponse {}
export interface AcceptShareRequest {
  shareId: string;
}
export type ShareStatus = string;
export interface AcceptShareResponse {
  status?: string;
}
export type ReadSetId = string;
export type ReadSetIdList = string[];
export interface BatchDeleteReadSetRequest {
  ids: string[];
  sequenceStoreId: string;
}
export interface ReadSetBatchError {
  id: string;
  code: string;
  message: string;
}
export type ReadSetBatchErrorList = ReadSetBatchError[];
export interface BatchDeleteReadSetResponse {
  errors?: ReadSetBatchError[];
}
export type ResourceId = string;
export interface CancelAnnotationImportRequest {
  jobId: string;
}
export interface CancelAnnotationImportResponse {}
export type RunId = string;
export interface CancelRunRequest {
  id: string;
}
export interface CancelRunResponse {}
export type BatchId = string;
export interface CancelRunBatchRequest {
  batchId: string;
}
export interface CancelRunBatchResponse {}
export interface CancelVariantImportRequest {
  jobId: string;
}
export interface CancelVariantImportResponse {}
export type ReadSetPartSource = string;
export interface CompleteReadSetUploadPartListItem {
  partNumber: number;
  partSource: string;
  checksum: string;
}
export type CompleteReadSetUploadPartList = CompleteReadSetUploadPartListItem[];
export interface CompleteMultipartReadSetUploadRequest {
  sequenceStoreId: string;
  uploadId: string;
  parts: CompleteReadSetUploadPartListItem[];
}
export interface CompleteMultipartReadSetUploadResponse {
  readSetId: string;
}
export type ReferenceArn = string;
export type ReferenceItem = { referenceArn: string };
export type StoreName = string;
export type Description = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type VersionName = string;
export type EncryptionType = string;
export interface SseConfig {
  type: string;
  keyArn?: string;
}
export type StoreFormat = string;
export type AnnotationType = string;
export type FormatToHeaderKey = string;
export type FormatToHeader = { [key: string]: string | undefined };
export type SchemaValueType = string;
export type SchemaItem = { [key: string]: string | undefined };
export type Schema = { [key: string]: string | undefined }[];
export interface TsvStoreOptions {
  annotationType?: string;
  formatToHeader?: { [key: string]: string | undefined };
  schema?: { [key: string]: string | undefined }[];
}
export type StoreOptions = { tsvStoreOptions: TsvStoreOptions };
export interface CreateAnnotationStoreRequest {
  reference?: ReferenceItem;
  name?: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  versionName?: string;
  sseConfig?: SseConfig;
  storeFormat: string;
  storeOptions?: StoreOptions;
}
export type StoreStatus = string;
export type CreationTime = Date;
export interface CreateAnnotationStoreResponse {
  id: string;
  reference?: ReferenceItem;
  storeFormat?: string;
  storeOptions?: StoreOptions;
  status: string;
  name: string;
  versionName: string;
  creationTime: Date;
}
export interface TsvVersionOptions {
  annotationType?: string;
  formatToHeader?: { [key: string]: string | undefined };
  schema?: { [key: string]: string | undefined }[];
}
export type VersionOptions = { tsvVersionOptions: TsvVersionOptions };
export interface CreateAnnotationStoreVersionRequest {
  name: string;
  versionName: string;
  description?: string;
  versionOptions?: VersionOptions;
  tags?: { [key: string]: string | undefined };
}
export type VersionStatus = string;
export interface CreateAnnotationStoreVersionResponse {
  id: string;
  versionName: string;
  storeId: string;
  versionOptions?: VersionOptions;
  name: string;
  status: string;
  creationTime: Date;
}
export type ConfigurationName = string;
export type ConfigurationDescription = string;
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
export type SubnetId = string;
export type SubnetIds = string[];
export interface VpcConfig {
  securityGroupIds?: string[];
  subnetIds?: string[];
}
export interface RunConfigurations {
  vpcConfig?: VpcConfig;
}
export type ConfigurationRequestId = string;
export interface CreateConfigurationRequest {
  name: string;
  description?: string;
  runConfigurations: RunConfigurations;
  tags?: { [key: string]: string | undefined };
  requestId: string;
}
export type ConfigurationArn = string;
export type ConfigurationUuid = string;
export type VpcId = string;
export interface VpcConfigResponse {
  securityGroupIds?: string[];
  subnetIds?: string[];
  vpcId?: string;
}
export interface RunConfigurationsResponse {
  vpcConfig?: VpcConfigResponse;
}
export type ConfigurationStatus = string;
export type ConfigurationTimestamp = Date;
export interface CreateConfigurationResponse {
  arn?: string;
  uuid?: string;
  name?: string;
  description?: string;
  runConfigurations?: RunConfigurationsResponse;
  status?: string;
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export type ClientToken = string;
export type FileType = string;
export type SubjectId = string;
export type SampleId = string;
export type GeneratedFrom = string;
export type ReadSetName = string;
export type ReadSetDescription = string;
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
  tags?: { [key: string]: string | undefined };
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
  tags?: { [key: string]: string | undefined };
  creationTime: Date;
}
export type ReferenceStoreName = string;
export type ReferenceStoreDescription = string;
export interface CreateReferenceStoreRequest {
  name: string;
  description?: string;
  sseConfig?: SseConfig;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export type ReferenceStoreId = string;
export type ReferenceStoreArn = string;
export interface CreateReferenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date;
}
export type CacheBehavior = string;
export type S3UriForBucketOrObject = string;
export type UserCustomDescription = string;
export type UserCustomName = string;
export type RunCacheRequestId = string;
export type AwsAccountId = string;
export interface CreateRunCacheRequest {
  cacheBehavior?: string;
  cacheS3Location: string;
  description?: string;
  name?: string;
  requestId: string;
  tags?: { [key: string]: string | undefined };
  cacheBucketOwnerId?: string;
}
export type RunCacheArn = string;
export type RunCacheId = string;
export type RunCacheStatus = string;
export interface CreateRunCacheResponse {
  arn?: string;
  id?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
}
export type RunGroupName = string;
export type RunGroupRequestId = string;
export interface CreateRunGroupRequest {
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  tags?: { [key: string]: string | undefined };
  requestId: string;
  maxGpus?: number;
}
export type RunGroupArn = string;
export type RunGroupId = string;
export interface CreateRunGroupResponse {
  arn?: string;
  id?: string;
  tags?: { [key: string]: string | undefined };
}
export type SequenceStoreName = string;
export type SequenceStoreDescription = string;
export type FallbackLocation = string;
export type ETagAlgorithmFamily = string;
export type PropagatedSetLevelTags = string[];
export type AccessLogLocation = string;
export interface S3AccessConfig {
  accessLogLocation?: string;
}
export interface CreateSequenceStoreRequest {
  name: string;
  description?: string;
  sseConfig?: SseConfig;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
  fallbackLocation?: string;
  eTagAlgorithmFamily?: string;
  propagatedSetLevelTags?: string[];
  s3AccessConfig?: S3AccessConfig;
}
export type SequenceStoreArn = string;
export type SequenceStoreStatus = string;
export type SequenceStoreStatusMessage = string;
export type S3Uri = string;
export type S3AccessPointArn = string;
export interface SequenceStoreS3Access {
  s3Uri?: string;
  s3AccessPointArn?: string;
  accessLogLocation?: string;
}
export interface CreateSequenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date;
  fallbackLocation?: string;
  eTagAlgorithmFamily?: string;
  status?: string;
  statusMessage?: string;
  propagatedSetLevelTags?: string[];
  s3Access?: SequenceStoreS3Access;
}
export type ShareName = string;
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
  tags?: { [key: string]: string | undefined };
  sseConfig?: SseConfig;
}
export interface CreateVariantStoreResponse {
  id: string;
  reference?: ReferenceItem;
  status: string;
  name: string;
  creationTime: Date;
}
export type WorkflowName = string;
export type WorkflowDescription = string;
export type WorkflowEngine = string;
export type WorkflowDefinition = string;
export type WorkflowMain = string;
export type WorkflowParameterName = string;
export type WorkflowParameterDescription = string;
export interface WorkflowParameter {
  description?: string;
  optional?: boolean;
}
export type WorkflowParameterTemplate = { [key: string]: WorkflowParameter | undefined };
export type WorkflowRequestId = string;
export type Accelerators = string;
export type StorageType = string;
export type Uri = string;
export type EcrRepositoryPrefix = string;
export type UpstreamRepositoryPrefix = string;
export interface RegistryMapping {
  upstreamRegistryUrl?: string;
  ecrRepositoryPrefix?: string;
  upstreamRepositoryPrefix?: string;
  ecrAccountId?: string;
}
export type RegistryMappingsList = RegistryMapping[];
export interface ImageMapping {
  sourceImage?: string;
  destinationImage?: string;
}
export type ImageMappingsList = ImageMapping[];
export interface ContainerRegistryMap {
  registryMappings?: RegistryMapping[];
  imageMappings?: ImageMapping[];
}
export type ReadmeMarkdown = string;
export type ParameterTemplatePath = string;
export type ReadmePath = string;
export type ConnectionArn = string;
export type FullRepositoryId = string;
export type SourceReferenceType = string;
export type SourceReferenceValue = string;
export interface SourceReference {
  type: string;
  value: string;
}
export type ExcludeFilePatternList = string[];
export interface DefinitionRepository {
  connectionArn: string;
  fullRepositoryId: string;
  sourceReference?: SourceReference;
  excludeFilePatterns?: string[];
}
export type WorkflowBucketOwnerId = string;
export type S3UriForObject = string;
export interface CreateWorkflowRequest {
  name?: string;
  description?: string;
  engine?: string;
  definitionZip?: Uint8Array;
  definitionUri?: string;
  main?: string;
  parameterTemplate?: { [key: string]: WorkflowParameter | undefined };
  storageCapacity?: number;
  tags?: { [key: string]: string | undefined };
  requestId: string;
  accelerators?: string;
  storageType?: string;
  containerRegistryMap?: ContainerRegistryMap;
  containerRegistryMapUri?: string;
  readmeMarkdown?: string;
  parameterTemplatePath?: string;
  readmePath?: string;
  definitionRepository?: DefinitionRepository;
  workflowBucketOwnerId?: string;
  readmeUri?: string;
}
export type WorkflowArn = string;
export type WorkflowId = string;
export type WorkflowStatus = string;
export type WorkflowUuid = string;
export interface CreateWorkflowResponse {
  arn?: string;
  id?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
  uuid?: string;
}
export type WorkflowVersionName = string;
export type WorkflowVersionDescription = string;
export interface CreateWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
  definitionZip?: Uint8Array;
  definitionUri?: string;
  accelerators?: string;
  description?: string;
  engine?: string;
  main?: string;
  parameterTemplate?: { [key: string]: WorkflowParameter | undefined };
  requestId: string;
  storageType?: string;
  storageCapacity?: number;
  tags?: { [key: string]: string | undefined };
  workflowBucketOwnerId?: string;
  containerRegistryMap?: ContainerRegistryMap;
  containerRegistryMapUri?: string;
  readmeMarkdown?: string;
  parameterTemplatePath?: string;
  readmePath?: string;
  definitionRepository?: DefinitionRepository;
  readmeUri?: string;
}
export type WorkflowVersionArn = string;
export interface CreateWorkflowVersionResponse {
  arn?: string;
  workflowId?: string;
  versionName?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
  uuid?: string;
}
export interface DeleteAnnotationStoreRequest {
  name: string;
  force?: boolean;
}
export interface DeleteAnnotationStoreResponse {
  status: string;
}
export type VersionList = string[];
export interface DeleteAnnotationStoreVersionsRequest {
  name: string;
  versions: string[];
  force?: boolean;
}
export interface VersionDeleteError {
  versionName: string;
  message: string;
}
export type VersionDeleteErrorList = VersionDeleteError[];
export interface DeleteAnnotationStoreVersionsResponse {
  errors?: VersionDeleteError[];
}
export interface DeleteBatchRequest {
  batchId: string;
}
export interface DeleteBatchResponse {}
export interface DeleteConfigurationRequest {
  name: string;
}
export interface DeleteConfigurationResponse {}
export type ReferenceId = string;
export interface DeleteReferenceRequest {
  id: string;
  referenceStoreId: string;
}
export interface DeleteReferenceResponse {}
export interface DeleteReferenceStoreRequest {
  id: string;
}
export interface DeleteReferenceStoreResponse {}
export interface DeleteRunRequest {
  id: string;
}
export interface DeleteRunResponse {}
export interface DeleteRunBatchRequest {
  batchId: string;
}
export interface DeleteRunBatchResponse {}
export interface DeleteRunCacheRequest {
  id: string;
}
export interface DeleteRunCacheResponse {}
export interface DeleteRunGroupRequest {
  id: string;
}
export interface DeleteRunGroupResponse {}
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
export interface DeleteWorkflowResponse {}
export interface DeleteWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
}
export interface DeleteWorkflowVersionResponse {}
export interface GetAnnotationImportRequest {
  jobId: string;
}
export type Arn = string;
export type JobStatus = string;
export type JobStatusMsg = string;
export type UpdateTime = Date;
export type CompletionTime = Date;
export interface AnnotationImportItemDetail {
  source: string;
  jobStatus: string;
}
export type AnnotationImportItemDetails = AnnotationImportItemDetail[];
export type RunLeftNormalization = boolean;
export type Separator = string;
export type Encoding = string;
export type Quote = string;
export type QuoteAll = boolean;
export type EscapeChar = string;
export type EscapeQuotes = boolean;
export type CommentChar = string;
export type Header = boolean;
export type LineSep = string;
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
export interface TsvOptions {
  readOptions?: ReadOptions;
}
export interface VcfOptions {
  ignoreQualField?: boolean;
  ignoreFilterField?: boolean;
}
export type FormatOptions =
  | { tsvOptions: TsvOptions; vcfOptions?: never }
  | { tsvOptions?: never; vcfOptions: VcfOptions };
export type AnnotationFieldMap = { [key: string]: string | undefined };
export interface GetAnnotationImportResponse {
  id: string;
  destinationName: string;
  versionName: string;
  roleArn: string;
  status: string;
  statusMessage: string;
  creationTime: Date;
  updateTime: Date;
  completionTime: Date;
  items: AnnotationImportItemDetail[];
  runLeftNormalization: boolean;
  formatOptions: FormatOptions;
  annotationFields?: { [key: string]: string | undefined };
}
export interface GetAnnotationStoreRequest {
  name: string;
}
export type StatusMessage = string;
export interface GetAnnotationStoreResponse {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date;
  updateTime: Date;
  tags: { [key: string]: string | undefined };
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
  creationTime: Date;
  updateTime: Date;
  tags: { [key: string]: string | undefined };
  versionOptions?: VersionOptions;
  statusMessage: string;
  versionSizeBytes: number;
}
export interface GetBatchRequest {
  batchId: string;
}
export type BatchArn = string;
export type BatchUuid = string;
export type BatchName = string;
export type BatchStatus = string;
export type WorkflowType = string;
export type RunRoleArn = string;
export type RunName = string;
export type NumericIdInArn = string;
export type RunParameters = unknown;
export type RunOutputUri = string;
export type RunLogLevel = string;
export type RunRetentionMode = string;
export type WorkflowOwnerId = string;
export type NetworkingMode = string;
export type SessionPolicy = string;
export type EngineSettings = unknown;
export type ScratchStorageMode = string;
export interface DefaultRunSetting {
  workflowId: string;
  workflowType?: string;
  roleArn: string;
  name?: string;
  cacheId?: string;
  cacheBehavior?: string;
  runGroupId?: string;
  priority?: number;
  parameters?: any;
  storageCapacity?: number;
  outputUri?: string;
  logLevel?: string;
  runTags?: { [key: string]: string | undefined };
  retentionMode?: string;
  storageType?: string;
  workflowOwnerId?: string;
  outputBucketOwnerId?: string;
  workflowVersionName?: string;
  networkingMode?: string;
  configurationName?: string;
  sessionPolicy?: string;
  engineSettings?: any;
  scratchStorageMode?: string;
}
export interface SubmissionSummary {
  successfulStartSubmissionCount?: number;
  failedStartSubmissionCount?: number;
  pendingStartSubmissionCount?: number;
  successfulCancelSubmissionCount?: number;
  failedCancelSubmissionCount?: number;
  successfulDeleteSubmissionCount?: number;
  failedDeleteSubmissionCount?: number;
}
export interface RunSummary {
  pendingRunCount?: number;
  startingRunCount?: number;
  runningRunCount?: number;
  stoppingRunCount?: number;
  completedRunCount?: number;
  deletedRunCount?: number;
  failedRunCount?: number;
  cancelledRunCount?: number;
}
export type BatchTimestamp = Date;
export interface GetBatchResponse {
  id?: string;
  arn?: string;
  uuid?: string;
  name?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
  totalRuns?: number;
  defaultRunSetting?: DefaultRunSetting;
  submissionSummary?: SubmissionSummary;
  runSummary?: RunSummary;
  creationTime?: Date;
  submittedTime?: Date;
  processedTime?: Date;
  failedTime?: Date;
  failureReason?: string;
}
export interface GetConfigurationRequest {
  name: string;
}
export interface GetConfigurationResponse {
  arn?: string;
  uuid?: string;
  name?: string;
  description?: string;
  runConfigurations?: RunConfigurationsResponse;
  status?: string;
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export type ReadSetFile = string;
export interface GetReadSetRequest {
  id: string;
  sequenceStoreId: string;
  file?: string;
  partNumber: number;
}
export interface GetReadSetResponse {
  payload?: T.StreamingOutputBody;
}
export type ActivationJobId = string;
export interface GetReadSetActivationJobRequest {
  id: string;
  sequenceStoreId: string;
}
export type ReadSetActivationJobStatus = string;
export type JobStatusMessage = string;
export type ReadSetActivationJobItemStatus = string;
export interface ActivateReadSetSourceItem {
  readSetId: string;
  status: string;
  statusMessage?: string;
}
export type ActivateReadSetSourceList = ActivateReadSetSourceItem[];
export interface GetReadSetActivationJobResponse {
  id: string;
  sequenceStoreId: string;
  status: string;
  statusMessage?: string;
  creationTime: Date;
  completionTime?: Date;
  sources?: ActivateReadSetSourceItem[];
}
export type ExportJobId = string;
export interface GetReadSetExportJobRequest {
  sequenceStoreId: string;
  id: string;
}
export type S3Destination = string;
export type ReadSetExportJobStatus = string;
export type ReadSetExportJobItemStatus = string;
export interface ExportReadSetDetail {
  id: string;
  status: string;
  statusMessage?: string;
}
export type ExportReadSetDetailList = ExportReadSetDetail[];
export interface GetReadSetExportJobResponse {
  id: string;
  sequenceStoreId: string;
  destination: string;
  status: string;
  statusMessage?: string;
  creationTime: Date;
  completionTime?: Date;
  readSets?: ExportReadSetDetail[];
}
export type ImportJobId = string;
export interface GetReadSetImportJobRequest {
  id: string;
  sequenceStoreId: string;
}
export type RoleArn = string;
export type ReadSetImportJobStatus = string;
export interface SourceFiles {
  source1: string;
  source2?: string;
}
export type ReadSetImportJobItemStatus = string;
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
  tags?: { [key: string]: string | undefined };
  readSetId?: string;
}
export type ImportReadSetSourceList = ImportReadSetSourceItem[];
export interface GetReadSetImportJobResponse {
  id: string;
  sequenceStoreId: string;
  roleArn: string;
  status: string;
  statusMessage?: string;
  creationTime: Date;
  completionTime?: Date;
  sources: ImportReadSetSourceItem[];
}
export interface GetReadSetMetadataRequest {
  id: string;
  sequenceStoreId: string;
}
export type ReadSetArn = string;
export type ReadSetStatus = string;
export interface SequenceInformation {
  totalReadCount?: number;
  totalBaseCount?: number;
  generatedFrom?: string;
  alignment?: string;
}
export interface ReadSetS3Access {
  s3Uri?: string;
}
export interface FileInformation {
  totalParts?: number;
  partSize?: number;
  contentLength?: number;
  s3Access?: ReadSetS3Access;
}
export interface ReadSetFiles {
  source1?: FileInformation;
  source2?: FileInformation;
  index?: FileInformation;
}
export type ReadSetStatusMessage = string;
export type CreationType = string;
export type ETagAlgorithm = string;
export interface ETag {
  algorithm?: string;
  source1?: string;
  source2?: string;
}
export type CreationJobId = string;
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
  creationTime: Date;
  sequenceInformation?: SequenceInformation;
  referenceArn?: string;
  files?: ReadSetFiles;
  statusMessage?: string;
  creationType?: string;
  etag?: ETag;
  creationJobId?: string;
}
export type Range = string;
export type ReferenceFile = string;
export interface GetReferenceRequest {
  id: string;
  referenceStoreId: string;
  range?: string;
  partNumber: number;
  file?: string;
}
export interface GetReferenceResponse {
  payload?: T.StreamingOutputBody;
}
export interface GetReferenceImportJobRequest {
  id: string;
  referenceStoreId: string;
}
export type ReferenceImportJobStatus = string;
export type ReferenceImportJobItemStatus = string;
export type ReferenceName = string;
export type ReferenceDescription = string;
export interface ImportReferenceSourceItem {
  sourceFile?: string;
  status: string;
  statusMessage?: string;
  name?: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
  referenceId?: string;
}
export type ImportReferenceSourceList = ImportReferenceSourceItem[];
export interface GetReferenceImportJobResponse {
  id: string;
  referenceStoreId: string;
  roleArn: string;
  status: string;
  statusMessage?: string;
  creationTime: Date;
  completionTime?: Date;
  sources: ImportReferenceSourceItem[];
}
export interface GetReferenceMetadataRequest {
  id: string;
  referenceStoreId: string;
}
export type Md5 = string;
export type ReferenceStatus = string;
export interface ReferenceFiles {
  source?: FileInformation;
  index?: FileInformation;
}
export type ReferenceCreationType = string;
export interface GetReferenceMetadataResponse {
  id: string;
  arn: string;
  referenceStoreId: string;
  md5: string;
  status?: string;
  name?: string;
  description?: string;
  creationTime: Date;
  updateTime: Date;
  files?: ReferenceFiles;
  creationType?: string;
  creationJobId?: string;
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
  creationTime: Date;
}
export type RunExport = string;
export type RunExportList = string[];
export interface GetRunRequest {
  id: string;
  export?: string[];
}
export type RunArn = string;
export type EngineVersion = string;
export type RunStatus = string;
export type WorkflowDigest = string;
export type RunResourceDigestKey = string;
export type RunResourceDigest = string;
export type RunResourceDigests = { [key: string]: string | undefined };
export type RunStartedBy = string;
export type RunTimestamp = Date;
export type RunStatusMessage = string;
export type RunFailureReason = string;
export type EngineLogStream = string;
export type RunLogStream = string;
export interface RunLogLocation {
  engineLogStream?: string;
  runLogStream?: string;
}
export type RunUuid = string;
export interface ConfigurationDetails {
  name?: string;
  arn?: string;
  uuid?: string;
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
  batchId?: string;
  priority?: number;
  definition?: string;
  digest?: string;
  parameters?: any;
  storageCapacity?: number;
  outputUri?: string;
  logLevel?: string;
  resourceDigests?: { [key: string]: string | undefined };
  startedBy?: string;
  creationTime?: Date;
  startTime?: Date;
  stopTime?: Date;
  statusMessage?: string;
  tags?: { [key: string]: string | undefined };
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
  networkingMode?: string;
  scratchStorageMode?: string;
  configuration?: ConfigurationDetails;
  vpcConfig?: VpcConfigResponse;
  engineSettings?: any;
  sessionPolicy?: string;
}
export interface GetRunCacheRequest {
  id: string;
}
export type RunCacheTimestamp = Date;
export interface GetRunCacheResponse {
  arn?: string;
  cacheBehavior?: string;
  cacheBucketOwnerId?: string;
  cacheS3Uri?: string;
  creationTime?: Date;
  description?: string;
  id?: string;
  name?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetRunGroupRequest {
  id: string;
}
export type RunGroupTimestamp = Date;
export interface GetRunGroupResponse {
  arn?: string;
  id?: string;
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
  maxGpus?: number;
}
export type TaskId = string;
export interface GetRunTaskRequest {
  id: string;
  taskId: string;
}
export type TaskStatus = string;
export type TaskName = string;
export type TaskTimestamp = Date;
export type TaskStatusMessage = string;
export type TaskLogStream = string;
export type TaskInstanceType = string;
export type TaskFailureReason = string;
export type TaskImageDigest = string;
export interface ImageDetails {
  image?: string;
  imageDigest?: string;
  sourceImage?: string;
}
export type TaskUuid = string;
export interface GetRunTaskResponse {
  taskId?: string;
  status?: string;
  name?: string;
  cpus?: number;
  cacheHit?: boolean;
  cacheS3Uri?: string;
  memory?: number;
  creationTime?: Date;
  startTime?: Date;
  stopTime?: Date;
  statusMessage?: string;
  logStream?: string;
  gpus?: number;
  instanceType?: string;
  failureReason?: string;
  imageDetails?: ImageDetails;
  uuid?: string;
}
export interface GetS3AccessPolicyRequest {
  s3AccessPointArn: string;
}
export type StoreId = string;
export type StoreType = "SEQUENCE_STORE" | "REFERENCE_STORE" | (string & {});
export type S3AccessPolicy = string;
export interface GetS3AccessPolicyResponse {
  s3AccessPointArn?: string;
  storeId?: string;
  storeType?: StoreType;
  updateTime?: Date;
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
  creationTime: Date;
  fallbackLocation?: string;
  s3Access?: SequenceStoreS3Access;
  eTagAlgorithmFamily?: string;
  status?: string;
  statusMessage?: string;
  propagatedSetLevelTags?: string[];
  updateTime?: Date;
}
export interface GetShareRequest {
  shareId: string;
}
export interface ShareDetails {
  shareId?: string;
  resourceArn?: string;
  resourceId?: string;
  principalSubscriber?: string;
  ownerId?: string;
  status?: string;
  statusMessage?: string;
  shareName?: string;
  creationTime?: Date;
  updateTime?: Date;
}
export interface GetShareResponse {
  share?: ShareDetails;
}
export interface GetVariantImportRequest {
  jobId: string;
}
export interface VariantImportItemDetail {
  source: string;
  jobStatus: string;
  statusMessage?: string;
}
export type VariantImportItemDetails = VariantImportItemDetail[];
export interface GetVariantImportResponse {
  id: string;
  destinationName: string;
  roleArn: string;
  status: string;
  statusMessage: string;
  creationTime: Date;
  updateTime: Date;
  completionTime?: Date;
  items: VariantImportItemDetail[];
  runLeftNormalization: boolean;
  annotationFields?: { [key: string]: string | undefined };
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
  creationTime: Date;
  updateTime: Date;
  tags: { [key: string]: string | undefined };
  statusMessage: string;
  storeSizeBytes: number;
}
export type WorkflowExport = string;
export type WorkflowExportList = string[];
export interface GetWorkflowRequest {
  id: string;
  type?: string;
  export?: string[];
  workflowOwnerId?: string;
}
export type WorkflowTimestamp = Date;
export type WorkflowStatusMessage = string;
export type WorkflowMetadataKey = string;
export type WorkflowMetadataValue = string;
export type WorkflowMetadata = { [key: string]: string | undefined };
export type ReadmeS3PresignedUrl = string;
export interface DefinitionRepositoryDetails {
  connectionArn?: string;
  fullRepositoryId?: string;
  sourceReference?: SourceReference;
  providerType?: string;
  providerEndpoint?: string;
}
export type WorkflowProfileName = string;
export type WorkflowProfileList = string[];
export type WorkflowProfileParameterTemplates = {
  [key: string]: { [key: string]: WorkflowParameter | undefined } | undefined;
};
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
  parameterTemplate?: { [key: string]: WorkflowParameter | undefined };
  storageCapacity?: number;
  creationTime?: Date;
  statusMessage?: string;
  tags?: { [key: string]: string | undefined };
  metadata?: { [key: string]: string | undefined };
  accelerators?: string;
  storageType?: string;
  uuid?: string;
  containerRegistryMap?: ContainerRegistryMap;
  readme?: string;
  definitionRepositoryDetails?: DefinitionRepositoryDetails;
  readmePath?: string;
  profiles?: string[];
  profileParameterTemplates?: {
    [key: string]: { [key: string]: WorkflowParameter | undefined } | undefined;
  };
}
export interface GetWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
  type?: string;
  export?: string[];
  workflowOwnerId?: string;
}
export interface GetWorkflowVersionResponse {
  arn?: string;
  workflowId?: string;
  versionName?: string;
  accelerators?: string;
  creationTime?: Date;
  description?: string;
  definition?: string;
  digest?: string;
  engine?: string;
  main?: string;
  metadata?: { [key: string]: string | undefined };
  parameterTemplate?: { [key: string]: WorkflowParameter | undefined };
  status?: string;
  statusMessage?: string;
  storageType?: string;
  storageCapacity?: number;
  type?: string;
  tags?: { [key: string]: string | undefined };
  uuid?: string;
  workflowBucketOwnerId?: string;
  containerRegistryMap?: ContainerRegistryMap;
  readme?: string;
  definitionRepositoryDetails?: DefinitionRepositoryDetails;
  readmePath?: string;
  profiles?: string[];
  profileParameterTemplates?: {
    [key: string]: { [key: string]: WorkflowParameter | undefined } | undefined;
  };
}
export type ResourceIdentifier = string;
export type IdList = string[];
export interface ListAnnotationImportJobsFilter {
  status?: string;
  storeName?: string;
}
export interface ListAnnotationImportJobsRequest {
  maxResults?: number;
  ids?: string[];
  nextToken?: string;
  filter?: ListAnnotationImportJobsFilter;
}
export interface AnnotationImportJobItem {
  id: string;
  destinationName: string;
  versionName: string;
  roleArn: string;
  status: string;
  creationTime: Date;
  updateTime: Date;
  completionTime?: Date;
  runLeftNormalization?: boolean;
  annotationFields?: { [key: string]: string | undefined };
}
export type AnnotationImportJobItems = AnnotationImportJobItem[];
export interface ListAnnotationImportJobsResponse {
  annotationImportJobs?: AnnotationImportJobItem[];
  nextToken?: string;
}
export interface ListAnnotationStoresFilter {
  status?: string;
}
export interface ListAnnotationStoresRequest {
  ids?: string[];
  maxResults?: number;
  nextToken?: string;
  filter?: ListAnnotationStoresFilter;
}
export interface AnnotationStoreItem {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  storeFormat: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date;
  updateTime: Date;
  statusMessage: string;
  storeSizeBytes: number;
}
export type AnnotationStoreItems = AnnotationStoreItem[];
export interface ListAnnotationStoresResponse {
  annotationStores?: AnnotationStoreItem[];
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
export interface AnnotationStoreVersionItem {
  storeId: string;
  id: string;
  status: string;
  versionArn: string;
  name: string;
  versionName: string;
  description: string;
  creationTime: Date;
  updateTime: Date;
  statusMessage: string;
  versionSizeBytes: number;
}
export type AnnotationStoreVersionItems = AnnotationStoreVersionItem[];
export interface ListAnnotationStoreVersionsResponse {
  annotationStoreVersions?: AnnotationStoreVersionItem[];
  nextToken?: string;
}
export type ListToken = string;
export interface ListBatchRequest {
  maxItems?: number;
  startingToken?: string;
  status?: string;
  name?: string;
  runGroupId?: string;
}
export interface BatchListItem {
  id?: string;
  name?: string;
  status?: string;
  createdAt?: Date;
  totalRuns?: number;
  workflowId?: string;
}
export type BatchList = BatchListItem[];
export interface ListBatchResponse {
  items?: BatchListItem[];
  nextToken?: string;
}
export type ConfigurationListToken = string;
export interface ListConfigurationsRequest {
  maxResults?: number;
  startingToken?: string;
}
export interface ConfigurationListItem {
  arn?: string;
  name?: string;
  description?: string;
  status?: string;
  creationTime?: Date;
}
export type ConfigurationList = ConfigurationListItem[];
export interface ListConfigurationsResponse {
  items?: ConfigurationListItem[];
  nextToken?: string;
}
export type NextToken = string;
export interface ListMultipartReadSetUploadsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
}
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
  tags?: { [key: string]: string | undefined };
  creationTime: Date;
}
export type MultipartReadSetUploadList = MultipartReadSetUploadListItem[];
export interface ListMultipartReadSetUploadsResponse {
  nextToken?: string;
  uploads?: MultipartReadSetUploadListItem[];
}
export interface ActivateReadSetFilter {
  status?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReadSetActivationJobsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ActivateReadSetFilter;
}
export interface ActivateReadSetJobItem {
  id: string;
  sequenceStoreId: string;
  status: string;
  creationTime: Date;
  completionTime?: Date;
}
export type ActivateReadSetJobList = ActivateReadSetJobItem[];
export interface ListReadSetActivationJobsResponse {
  nextToken?: string;
  activationJobs?: ActivateReadSetJobItem[];
}
export interface ExportReadSetFilter {
  status?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReadSetExportJobsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ExportReadSetFilter;
}
export interface ExportReadSetJobDetail {
  id: string;
  sequenceStoreId: string;
  destination: string;
  status: string;
  creationTime: Date;
  completionTime?: Date;
}
export type ExportReadSetJobDetailList = ExportReadSetJobDetail[];
export interface ListReadSetExportJobsResponse {
  nextToken?: string;
  exportJobs?: ExportReadSetJobDetail[];
}
export interface ImportReadSetFilter {
  status?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReadSetImportJobsRequest {
  maxResults?: number;
  nextToken?: string;
  sequenceStoreId: string;
  filter?: ImportReadSetFilter;
}
export interface ImportReadSetJobItem {
  id: string;
  sequenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date;
  completionTime?: Date;
}
export type ImportReadSetJobList = ImportReadSetJobItem[];
export interface ListReadSetImportJobsResponse {
  nextToken?: string;
  importJobs?: ImportReadSetJobItem[];
}
export type ReferenceArnFilter = string;
export interface ReadSetFilter {
  name?: string;
  status?: string;
  referenceArn?: string;
  createdAfter?: Date;
  createdBefore?: Date;
  sampleId?: string;
  subjectId?: string;
  generatedFrom?: string;
  creationType?: string;
}
export interface ListReadSetsRequest {
  sequenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ReadSetFilter;
}
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
  creationTime: Date;
  statusMessage?: string;
  creationType?: string;
  etag?: ETag;
}
export type ReadSetList = ReadSetListItem[];
export interface ListReadSetsResponse {
  nextToken?: string;
  readSets: ReadSetListItem[];
}
export interface ReadSetUploadPartListFilter {
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReadSetUploadPartsRequest {
  sequenceStoreId: string;
  uploadId: string;
  partSource: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ReadSetUploadPartListFilter;
}
export interface ReadSetUploadPartListItem {
  partNumber: number;
  partSize: number;
  partSource: string;
  checksum: string;
  creationTime?: Date;
  lastUpdatedTime?: Date;
}
export type ReadSetUploadPartList = ReadSetUploadPartListItem[];
export interface ListReadSetUploadPartsResponse {
  nextToken?: string;
  parts?: ReadSetUploadPartListItem[];
}
export interface ImportReferenceFilter {
  status?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReferenceImportJobsRequest {
  maxResults?: number;
  nextToken?: string;
  referenceStoreId: string;
  filter?: ImportReferenceFilter;
}
export interface ImportReferenceJobItem {
  id: string;
  referenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date;
  completionTime?: Date;
}
export type ImportReferenceJobList = ImportReferenceJobItem[];
export interface ListReferenceImportJobsResponse {
  nextToken?: string;
  importJobs?: ImportReferenceJobItem[];
}
export interface ReferenceFilter {
  name?: string;
  md5?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReferencesRequest {
  referenceStoreId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ReferenceFilter;
}
export interface ReferenceListItem {
  id: string;
  arn: string;
  referenceStoreId: string;
  md5: string;
  status?: string;
  name?: string;
  description?: string;
  creationTime: Date;
  updateTime: Date;
}
export type ReferenceList = ReferenceListItem[];
export interface ListReferencesResponse {
  nextToken?: string;
  references: ReferenceListItem[];
}
export interface ReferenceStoreFilter {
  name?: string;
  createdAfter?: Date;
  createdBefore?: Date;
}
export interface ListReferenceStoresRequest {
  maxResults?: number;
  nextToken?: string;
  filter?: ReferenceStoreFilter;
}
export interface ReferenceStoreDetail {
  arn: string;
  id: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date;
}
export type ReferenceStoreDetailList = ReferenceStoreDetail[];
export interface ListReferenceStoresResponse {
  nextToken?: string;
  referenceStores: ReferenceStoreDetail[];
}
export interface ListRunCachesRequest {
  maxResults?: number;
  startingToken?: string;
}
export interface RunCacheListItem {
  arn?: string;
  cacheBehavior?: string;
  cacheS3Uri?: string;
  creationTime?: Date;
  id?: string;
  name?: string;
  status?: string;
}
export type RunCacheList = RunCacheListItem[];
export interface ListRunCachesResponse {
  items?: RunCacheListItem[];
  nextToken?: string;
}
export type RunGroupListToken = string;
export interface ListRunGroupsRequest {
  name?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface RunGroupListItem {
  arn?: string;
  id?: string;
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  creationTime?: Date;
  maxGpus?: number;
}
export type RunGroupList = RunGroupListItem[];
export interface ListRunGroupsResponse {
  items?: RunGroupListItem[];
  nextToken?: string;
}
export type RunListToken = string;
export interface ListRunsRequest {
  name?: string;
  runGroupId?: string;
  batchId?: string;
  startingToken?: string;
  maxResults?: number;
  status?: string;
}
export interface RunListItem {
  arn?: string;
  id?: string;
  status?: string;
  workflowId?: string;
  batchId?: string;
  name?: string;
  priority?: number;
  storageCapacity?: number;
  creationTime?: Date;
  startTime?: Date;
  stopTime?: Date;
  storageType?: string;
  workflowVersionName?: string;
  workflowName?: string;
}
export type RunList = RunListItem[];
export interface ListRunsResponse {
  items?: RunListItem[];
  nextToken?: string;
}
export type SubmissionStatus = string;
export interface ListRunsInBatchRequest {
  batchId: string;
  maxItems?: number;
  startingToken?: string;
  submissionStatus?: string;
  runSettingId?: string;
  runId?: string;
}
export type RunSettingId = string;
export type SubmissionFailureReason = string;
export type SubmissionFailureMessage = string;
export interface RunBatchListItem {
  runSettingId?: string;
  runId?: string;
  runInternalUuid?: string;
  runArn?: string;
  submissionStatus?: string;
  submissionFailureReason?: string;
  submissionFailureMessage?: string;
}
export type RunBatchList = RunBatchListItem[];
export interface ListRunsInBatchResponse {
  runs?: RunBatchListItem[];
  nextToken?: string;
}
export type TaskListToken = string;
export interface ListRunTasksRequest {
  id: string;
  status?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface TaskListItem {
  taskId?: string;
  status?: string;
  name?: string;
  cpus?: number;
  cacheHit?: boolean;
  cacheS3Uri?: string;
  memory?: number;
  creationTime?: Date;
  startTime?: Date;
  stopTime?: Date;
  gpus?: number;
  instanceType?: string;
  uuid?: string;
}
export type TaskList = TaskListItem[];
export interface ListRunTasksResponse {
  items?: TaskListItem[];
  nextToken?: string;
}
export interface SequenceStoreFilter {
  name?: string;
  createdAfter?: Date;
  createdBefore?: Date;
  status?: string;
  updatedAfter?: Date;
  updatedBefore?: Date;
}
export interface ListSequenceStoresRequest {
  maxResults?: number;
  nextToken?: string;
  filter?: SequenceStoreFilter;
}
export interface SequenceStoreDetail {
  arn: string;
  id: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date;
  fallbackLocation?: string;
  eTagAlgorithmFamily?: string;
  status?: string;
  statusMessage?: string;
  updateTime?: Date;
}
export type SequenceStoreDetailList = SequenceStoreDetail[];
export interface ListSequenceStoresResponse {
  nextToken?: string;
  sequenceStores: SequenceStoreDetail[];
}
export type ResourceOwner = string;
export type ArnList = string[];
export type StatusList = string[];
export type ShareResourceType = string;
export type TypeList = string[];
export interface Filter {
  resourceArns?: string[];
  status?: string[];
  type?: string[];
}
export interface ListSharesRequest {
  resourceOwner: string;
  filter?: Filter;
  nextToken?: string;
  maxResults?: number;
}
export type ShareDetailsList = ShareDetails[];
export interface ListSharesResponse {
  shares: ShareDetails[];
  nextToken?: string;
}
export type TagArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags: { [key: string]: string | undefined };
}
export interface ListVariantImportJobsFilter {
  status?: string;
  storeName?: string;
}
export interface ListVariantImportJobsRequest {
  maxResults?: number;
  ids?: string[];
  nextToken?: string;
  filter?: ListVariantImportJobsFilter;
}
export interface VariantImportJobItem {
  id: string;
  destinationName: string;
  roleArn: string;
  status: string;
  creationTime: Date;
  updateTime: Date;
  completionTime?: Date;
  runLeftNormalization?: boolean;
  annotationFields?: { [key: string]: string | undefined };
}
export type VariantImportJobItems = VariantImportJobItem[];
export interface ListVariantImportJobsResponse {
  variantImportJobs?: VariantImportJobItem[];
  nextToken?: string;
}
export interface ListVariantStoresFilter {
  status?: string;
}
export interface ListVariantStoresRequest {
  maxResults?: number;
  ids?: string[];
  nextToken?: string;
  filter?: ListVariantStoresFilter;
}
export interface VariantStoreItem {
  id: string;
  reference: ReferenceItem;
  status: string;
  storeArn: string;
  name: string;
  description: string;
  sseConfig: SseConfig;
  creationTime: Date;
  updateTime: Date;
  statusMessage: string;
  storeSizeBytes: number;
}
export type VariantStoreItems = VariantStoreItem[];
export interface ListVariantStoresResponse {
  variantStores?: VariantStoreItem[];
  nextToken?: string;
}
export type WorkflowListToken = string;
export interface ListWorkflowsRequest {
  type?: string;
  name?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface WorkflowListItem {
  arn?: string;
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  digest?: string;
  creationTime?: Date;
  metadata?: { [key: string]: string | undefined };
}
export type WorkflowList = WorkflowListItem[];
export interface ListWorkflowsResponse {
  items?: WorkflowListItem[];
  nextToken?: string;
}
export type WorkflowVersionListToken = string;
export interface ListWorkflowVersionsRequest {
  workflowId: string;
  type?: string;
  workflowOwnerId?: string;
  startingToken?: string;
  maxResults?: number;
}
export interface WorkflowVersionListItem {
  arn?: string;
  workflowId?: string;
  versionName?: string;
  description?: string;
  status?: string;
  type?: string;
  digest?: string;
  creationTime?: Date;
  metadata?: { [key: string]: string | undefined };
}
export type WorkflowVersionList = WorkflowVersionListItem[];
export interface ListWorkflowVersionsResponse {
  items?: WorkflowVersionListItem[];
  nextToken?: string;
}
export interface PutS3AccessPolicyRequest {
  s3AccessPointArn: string;
  s3AccessPolicy: string;
}
export interface PutS3AccessPolicyResponse {
  s3AccessPointArn?: string;
  storeId?: string;
  storeType?: StoreType;
}
export interface AnnotationImportItemSource {
  source: string;
}
export type AnnotationImportItemSources = AnnotationImportItemSource[];
export interface StartAnnotationImportRequest {
  destinationName: string;
  roleArn: string;
  items: AnnotationImportItemSource[];
  versionName?: string;
  formatOptions?: FormatOptions;
  runLeftNormalization?: boolean;
  annotationFields?: { [key: string]: string | undefined };
}
export interface StartAnnotationImportResponse {
  jobId: string;
}
export interface StartReadSetActivationJobSourceItem {
  readSetId: string;
}
export type StartReadSetActivationJobSourceList = StartReadSetActivationJobSourceItem[];
export interface StartReadSetActivationJobRequest {
  sequenceStoreId: string;
  clientToken?: string;
  sources: StartReadSetActivationJobSourceItem[];
}
export interface StartReadSetActivationJobResponse {
  id: string;
  sequenceStoreId: string;
  status: string;
  creationTime: Date;
}
export interface ExportReadSet {
  readSetId: string;
}
export type ExportReadSetList = ExportReadSet[];
export interface StartReadSetExportJobRequest {
  sequenceStoreId: string;
  destination: string;
  roleArn: string;
  clientToken?: string;
  sources: ExportReadSet[];
}
export interface StartReadSetExportJobResponse {
  id: string;
  sequenceStoreId: string;
  destination: string;
  status: string;
  creationTime: Date;
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
  tags?: { [key: string]: string | undefined };
}
export type StartReadSetImportJobSourceList = StartReadSetImportJobSourceItem[];
export interface StartReadSetImportJobRequest {
  sequenceStoreId: string;
  roleArn: string;
  clientToken?: string;
  sources: StartReadSetImportJobSourceItem[];
}
export interface StartReadSetImportJobResponse {
  id: string;
  sequenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date;
}
export interface StartReferenceImportJobSourceItem {
  sourceFile: string;
  name: string;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export type StartReferenceImportJobSourceList = StartReferenceImportJobSourceItem[];
export interface StartReferenceImportJobRequest {
  referenceStoreId: string;
  roleArn: string;
  clientToken?: string;
  sources: StartReferenceImportJobSourceItem[];
}
export interface StartReferenceImportJobResponse {
  id: string;
  referenceStoreId: string;
  roleArn: string;
  status: string;
  creationTime: Date;
}
export type RunRequestId = string;
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
  parameters?: any;
  storageCapacity?: number;
  outputUri: string;
  logLevel?: string;
  tags?: { [key: string]: string | undefined };
  requestId: string;
  retentionMode?: string;
  storageType?: string;
  workflowOwnerId?: string;
  workflowVersionName?: string;
  networkingMode?: string;
  scratchStorageMode?: string;
  configurationName?: string;
  sessionPolicy?: string;
  engineSettings?: any;
}
export interface StartRunResponse {
  arn?: string;
  id?: string;
  status?: string;
  tags?: { [key: string]: string | undefined };
  uuid?: string;
  runOutputUri?: string;
  configuration?: ConfigurationDetails;
  networkingMode?: string;
}
export type BatchRequestId = string;
export interface InlineSetting {
  runSettingId: string;
  name?: string;
  outputUri?: string;
  priority?: number;
  parameters?: any;
  outputBucketOwnerId?: string;
  runTags?: { [key: string]: string | undefined };
  engineSettings?: any;
}
export type InlineSettings = InlineSetting[];
export type S3UriSettings = string;
export type BatchRunSettings =
  | { inlineSettings: InlineSetting[]; s3UriSettings?: never }
  | { inlineSettings?: never; s3UriSettings: string };
export interface StartRunBatchRequest {
  batchName?: string;
  requestId: string;
  tags?: { [key: string]: string | undefined };
  defaultRunSetting: DefaultRunSetting;
  batchRunSettings: BatchRunSettings;
}
export interface StartRunBatchResponse {
  id?: string;
  arn?: string;
  status?: string;
  uuid?: string;
  tags?: { [key: string]: string | undefined };
}
export interface VariantImportItemSource {
  source: string;
}
export type VariantImportItemSources = VariantImportItemSource[];
export interface StartVariantImportRequest {
  destinationName: string;
  roleArn: string;
  items: VariantImportItemSource[];
  runLeftNormalization?: boolean;
  annotationFields?: { [key: string]: string | undefined };
}
export interface StartVariantImportResponse {
  jobId: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
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
  creationTime: Date;
  updateTime: Date;
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
  creationTime: Date;
  updateTime: Date;
}
export interface UpdateRunCacheRequest {
  cacheBehavior?: string;
  description?: string;
  id: string;
  name?: string;
}
export interface UpdateRunCacheResponse {}
export interface UpdateRunGroupRequest {
  id: string;
  name?: string;
  maxCpus?: number;
  maxRuns?: number;
  maxDuration?: number;
  maxGpus?: number;
}
export interface UpdateRunGroupResponse {}
export interface UpdateSequenceStoreRequest {
  id: string;
  name?: string;
  description?: string;
  clientToken?: string;
  fallbackLocation?: string;
  propagatedSetLevelTags?: string[];
  s3AccessConfig?: S3AccessConfig;
}
export interface UpdateSequenceStoreResponse {
  id: string;
  arn: string;
  name?: string;
  description?: string;
  sseConfig?: SseConfig;
  creationTime: Date;
  updateTime?: Date;
  propagatedSetLevelTags?: string[];
  status?: string;
  statusMessage?: string;
  fallbackLocation?: string;
  s3Access?: SequenceStoreS3Access;
  eTagAlgorithmFamily?: string;
}
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
  creationTime: Date;
  updateTime: Date;
}
export interface UpdateWorkflowRequest {
  id: string;
  name?: string;
  description?: string;
  storageType?: string;
  storageCapacity?: number;
  readmeMarkdown?: string;
}
export interface UpdateWorkflowResponse {}
export interface UpdateWorkflowVersionRequest {
  workflowId: string;
  versionName: string;
  description?: string;
  storageType?: string;
  storageCapacity?: number;
  readmeMarkdown?: string;
}
export interface UpdateWorkflowVersionResponse {}
export interface UploadReadSetPartRequest {
  sequenceStoreId: string;
  uploadId: string;
  partSource: string;
  partNumber: number;
  payload: T.StreamingInputBody;
}
export interface UploadReadSetPartResponse {
  checksum: string;
}
export type AbortMultipartReadSetUploadError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a multipart read set upload into a sequence store and returns a response with no body if the operation is successful. To confirm that a multipart read set upload has been stopped, use the `ListMultipartReadSetUploads` API operation to view all active multipart read set uploads.
 */
export const abortMultipartReadSetUpload: API.OperationMethod<
  AbortMultipartReadSetUploadRequest,
  AbortMultipartReadSetUploadResponse,
  AbortMultipartReadSetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AbortMultipartReadSetUploadRequest>,
  output: __S(1) as any as S.Schema<AbortMultipartReadSetUploadResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AbortMultipartReadSetUpload",
  endpointHostPrefix: "control-storage-",
}));

export type AcceptShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accept a resource share request.
 */
export const acceptShare: API.OperationMethod<
  AcceptShareRequest,
  AcceptShareResponse,
  AcceptShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AcceptShareRequest>,
  output: __S(3) as any as S.Schema<AcceptShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptShare",
  endpointHostPrefix: "analytics-",
}));

export type BatchDeleteReadSetError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes one or more read sets. If the operation is successful, it returns a response with no body. If there is an error with deleting one of the read sets, the operation returns an error list. If the operation successfully deletes only a subset of files, it will return an error list for the remaining files that fail to be deleted. There is a limit of 100 read sets that can be deleted in each `BatchDeleteReadSet` API call.
 */
export const batchDeleteReadSet: API.OperationMethod<
  BatchDeleteReadSetRequest,
  BatchDeleteReadSetResponse,
  BatchDeleteReadSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<BatchDeleteReadSetRequest>,
  output: __S(8) as any as S.Schema<BatchDeleteReadSetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteReadSet",
  endpointHostPrefix: "control-storage-",
}));

export type CancelAnnotationImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Cancels an annotation import job.
 */
export const cancelAnnotationImportJob: API.OperationMethod<
  CancelAnnotationImportRequest,
  CancelAnnotationImportResponse,
  CancelAnnotationImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CancelAnnotationImportRequest>,
  output: __S(10) as any as S.Schema<CancelAnnotationImportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelAnnotationImportJob",
  endpointHostPrefix: "analytics-",
}));

export type CancelRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a run using its ID and returns a response with no body if the operation is successful. To confirm that the run has been cancelled, use the `ListRuns` API operation to check that it is no longer listed.
 */
export const cancelRun: API.OperationMethod<
  CancelRunRequest,
  CancelRunResponse,
  CancelRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<CancelRunRequest>,
  output: __S(10) as any as S.Schema<CancelRunResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelRun",
  endpointHostPrefix: "workflows-",
}));

export type CancelRunBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Cancels all runs within a specified batch. This operation prevents not-yet-submitted runs from starting and submits `CancelRun` requests for runs that have already started.
 *
 * Cancel is only allowed on batches in `PENDING`, `SUBMITTING`, or `INPROGRESS` state. Cancel operations are non-atomic and may be partially successful. Use `GetBatch` to review `successfulCancelSubmissionCount` and `failedCancelSubmissionCount` in the `submissionSummary`. Only one cancel or delete operation per batch is allowed at a time.
 */
export const cancelRunBatch: API.OperationMethod<
  CancelRunBatchRequest,
  CancelRunBatchResponse,
  CancelRunBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<CancelRunBatchRequest>,
  output: __S(10) as any as S.Schema<CancelRunBatchResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelRunBatch",
  endpointHostPrefix: "workflows-",
}));

export type CancelVariantImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Cancels a variant import job.
 */
export const cancelVariantImportJob: API.OperationMethod<
  CancelVariantImportRequest,
  CancelVariantImportResponse,
  CancelVariantImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<CancelVariantImportRequest>,
  output: __S(10) as any as S.Schema<CancelVariantImportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelVariantImportJob",
  endpointHostPrefix: "analytics-",
}));

export type CompleteMultipartReadSetUploadError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Completes a multipart read set upload into a sequence store after you have initiated the upload process with `CreateMultipartReadSetUpload` and uploaded all read set parts using `UploadReadSetPart`. You must specify the parts you uploaded using the parts parameter. If the operation is successful, it returns the read set ID(s) of the uploaded read set(s).
 *
 * For more information, see Direct upload to a sequence store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const completeMultipartReadSetUpload: API.OperationMethod<
  CompleteMultipartReadSetUploadRequest,
  CompleteMultipartReadSetUploadResponse,
  CompleteMultipartReadSetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<CompleteMultipartReadSetUploadRequest>,
  output: __S(17) as any as S.Schema<CompleteMultipartReadSetUploadResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CompleteMultipartReadSetUpload",
  endpointHostPrefix: "storage-",
}));

export type CreateAnnotationStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Creates an annotation store.
 */
export const createAnnotationStore: API.OperationMethod<
  CreateAnnotationStoreRequest,
  CreateAnnotationStoreResponse,
  CreateAnnotationStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<CreateAnnotationStoreRequest>,
  output: __S(26) as any as S.Schema<CreateAnnotationStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAnnotationStore",
  endpointHostPrefix: "analytics-",
}));

export type CreateAnnotationStoreVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version of an annotation store.
 */
export const createAnnotationStoreVersion: API.OperationMethod<
  CreateAnnotationStoreVersionRequest,
  CreateAnnotationStoreVersionResponse,
  CreateAnnotationStoreVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<CreateAnnotationStoreVersionRequest>,
  output: __S(29) as any as S.Schema<CreateAnnotationStoreVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAnnotationStoreVersion",
  endpointHostPrefix: "analytics-",
}));

export type CreateConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new configuration.
 */
export const createConfiguration: API.OperationMethod<
  CreateConfigurationRequest,
  CreateConfigurationResponse,
  CreateConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<CreateConfigurationRequest>,
  output: __S(35) as any as S.Schema<CreateConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfiguration",
  endpointHostPrefix: "workflows-",
}));

export type CreateMultipartReadSetUploadError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a multipart read set upload for uploading partitioned source files into a sequence store. You can directly import source files from an EC2 instance and other local compute, or from an S3 bucket. To separate these source files into parts, use the `split` operation. Each part cannot be larger than 100 MB. If the operation is successful, it provides an `uploadId` which is required by the `UploadReadSetPart` API operation to upload parts into a sequence store.
 *
 * To continue uploading a multipart read set into your sequence store, you must use the `UploadReadSetPart` API operation to upload each part individually following the steps below:
 *
 * - Specify the `uploadId` obtained from the previous call to `CreateMultipartReadSetUpload`.
 *
 * - Upload parts for that `uploadId`.
 *
 * When you have finished uploading parts, use the `CompleteMultipartReadSetUpload` API to complete the multipart read set upload and to retrieve the final read set IDs in the response.
 *
 * To learn more about creating parts and the `split` operation, see Direct upload to a sequence store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const createMultipartReadSetUpload: API.OperationMethod<
  CreateMultipartReadSetUploadRequest,
  CreateMultipartReadSetUploadResponse,
  CreateMultipartReadSetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<CreateMultipartReadSetUploadRequest>,
  output: __S(37) as any as S.Schema<CreateMultipartReadSetUploadResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMultipartReadSetUpload",
  endpointHostPrefix: "control-storage-",
}));

export type CreateReferenceStoreError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a reference store and returns metadata in JSON format. Reference stores are used to store reference genomes in FASTA format. A reference store is created when the first reference genome is imported. To import additional reference genomes from an Amazon S3 bucket, use the `StartReferenceImportJob` API operation.
 *
 * For more information, see Creating a HealthOmics reference store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const createReferenceStore: API.OperationMethod<
  CreateReferenceStoreRequest,
  CreateReferenceStoreResponse,
  CreateReferenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<CreateReferenceStoreRequest>,
  output: __S(39) as any as S.Schema<CreateReferenceStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReferenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type CreateRunCacheError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a run cache to store and reference task outputs from completed private runs. Specify an Amazon S3 location where Amazon Web Services HealthOmics saves the cached data. This data must be immediately accessible and not in an archived state. You can save intermediate task files to a run cache if they are declared as task outputs in the workflow definition file.
 *
 * For more information, see Call caching and Creating a run cache in the *Amazon Web Services HealthOmics User Guide*.
 */
export const createRunCache: API.OperationMethod<
  CreateRunCacheRequest,
  CreateRunCacheResponse,
  CreateRunCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<CreateRunCacheRequest>,
  output: __S(41) as any as S.Schema<CreateRunCacheResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRunCache",
  endpointHostPrefix: "workflows-",
}));

export type CreateRunGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a run group to limit the compute resources for the runs that are added to the group. Returns an ARN, ID, and tags for the run group.
 */
export const createRunGroup: API.OperationMethod<
  CreateRunGroupRequest,
  CreateRunGroupResponse,
  CreateRunGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<CreateRunGroupRequest>,
  output: __S(43) as any as S.Schema<CreateRunGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRunGroup",
  endpointHostPrefix: "workflows-",
}));

export type CreateSequenceStoreError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a sequence store and returns its metadata. Sequence stores are used to store sequence data files called read sets that are saved in FASTQ, BAM, uBAM, or CRAM formats. For aligned formats (BAM and CRAM), a sequence store can only use one reference genome. For unaligned formats (FASTQ and uBAM), a reference genome is not required. You can create multiple sequence stores per region per account.
 *
 * The following are optional parameters you can specify for your sequence store:
 *
 * - Use `s3AccessConfig` to configure your sequence store with S3 access logs (recommended).
 *
 * - Use `sseConfig` to define your own KMS key for encryption.
 *
 * - Use `eTagAlgorithmFamily` to define which algorithm to use for the HealthOmics eTag on objects.
 *
 * - Use `fallbackLocation` to define a backup location for storing files that have failed a direct upload.
 *
 * - Use `propagatedSetLevelTags` to configure tags that propagate to all objects in your store.
 *
 * For more information, see Creating a HealthOmics sequence store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const createSequenceStore: API.OperationMethod<
  CreateSequenceStoreRequest,
  CreateSequenceStoreResponse,
  CreateSequenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<CreateSequenceStoreRequest>,
  output: __S(47) as any as S.Schema<CreateSequenceStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSequenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type CreateShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a cross-account shared resource. The resource owner makes an offer to share the resource with the principal subscriber (an Amazon Web Services user with a different account than the resource owner).
 *
 * The following resources support cross-account sharing:
 *
 * - HealthOmics variant stores
 *
 * - HealthOmics annotation stores
 *
 * - Private workflows
 */
export const createShare: API.OperationMethod<
  CreateShareRequest,
  CreateShareResponse,
  CreateShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<CreateShareRequest>,
  output: __S(49) as any as S.Schema<CreateShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateShare",
  endpointHostPrefix: "analytics-",
}));

export type CreateVariantStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Creates a variant store.
 */
export const createVariantStore: API.OperationMethod<
  CreateVariantStoreRequest,
  CreateVariantStoreResponse,
  CreateVariantStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<CreateVariantStoreRequest>,
  output: __S(51) as any as S.Schema<CreateVariantStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVariantStore",
  endpointHostPrefix: "analytics-",
}));

export type CreateWorkflowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a private workflow. Before you create a private workflow, you must create and configure these required resources:
 *
 * - *Workflow definition file:* A workflow definition file written in WDL, Nextflow, or CWL. The workflow definition specifies the inputs and outputs for runs that use the workflow. It also includes specifications for the runs and run tasks for your workflow, including compute and memory requirements. The workflow definition file must be in `.zip` format. For more information, see Workflow definition files in Amazon Web Services HealthOmics.
 *
 * - You can use Amazon Q CLI to build and validate your workflow definition files in WDL, Nextflow, and CWL. For more information, see Example prompts for Amazon Q CLI and the Amazon Web Services HealthOmics Agentic generative AI tutorial on GitHub.
 *
 * - *(Optional) Parameter template file:* A parameter template file written in JSON. Create the file to define the run parameters, or Amazon Web Services HealthOmics generates the parameter template for you. For more information, see Parameter template files for HealthOmics workflows.
 *
 * - *ECR container images:* Create container images for the workflow in a private ECR repository, or synchronize images from a supported upstream registry with your Amazon ECR private repository.
 *
 * - *(Optional) Sentieon licenses:* Request a Sentieon license to use the Sentieon software in private workflows.
 *
 * For more information, see Creating or updating a private workflow in Amazon Web Services HealthOmics in the *Amazon Web Services HealthOmics User Guide*.
 */
export const createWorkflow: API.OperationMethod<
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CreateWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<CreateWorkflowRequest>,
  output: __S(62) as any as S.Schema<CreateWorkflowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkflow",
  endpointHostPrefix: "workflows-",
}));

export type CreateWorkflowVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new workflow version for the workflow that you specify with the `workflowId` parameter.
 *
 * When you create a new version of a workflow, you need to specify the configuration for the new version. It doesn't inherit any configuration values from the workflow.
 *
 * Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version.
 *
 * Don't include any personally identifiable information (PII) in the version name. Version names appear in the workflow version ARN.
 *
 * For more information, see Workflow versioning in Amazon Web Services HealthOmics in the *Amazon Web Services HealthOmics User Guide*.
 */
export const createWorkflowVersion: API.OperationMethod<
  CreateWorkflowVersionRequest,
  CreateWorkflowVersionResponse,
  CreateWorkflowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<CreateWorkflowVersionRequest>,
  output: __S(64) as any as S.Schema<CreateWorkflowVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkflowVersion",
  endpointHostPrefix: "workflows-",
}));

export type DeleteAnnotationStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Deletes an annotation store.
 */
export const deleteAnnotationStore: API.OperationMethod<
  DeleteAnnotationStoreRequest,
  DeleteAnnotationStoreResponse,
  DeleteAnnotationStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<DeleteAnnotationStoreRequest>,
  output: __S(66) as any as S.Schema<DeleteAnnotationStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnnotationStore",
  endpointHostPrefix: "analytics-",
}));

export type DeleteAnnotationStoreVersionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes one or multiple versions of an annotation store.
 */
export const deleteAnnotationStoreVersions: API.OperationMethod<
  DeleteAnnotationStoreVersionsRequest,
  DeleteAnnotationStoreVersionsResponse,
  DeleteAnnotationStoreVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DeleteAnnotationStoreVersionsRequest>,
  output: __S(70) as any as S.Schema<DeleteAnnotationStoreVersionsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAnnotationStoreVersions",
  endpointHostPrefix: "analytics-",
}));

export type DeleteBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a run batch resource and its associated metadata. This operation does not delete the individual workflow runs. To delete the runs, call `DeleteRunBatch` before calling `DeleteBatch`.
 *
 * `DeleteBatch` requires the batch to be in a terminal state: `PROCESSED`, `FAILED`, `CANCELLED`, `RUNS_DELETE_FAILED`, or `RUNS_DELETED`. After `DeleteBatch` completes, the batch metadata is no longer accessible. You cannot call `GetBatch`, `ListRunsInBatch`, `DeleteRunBatch`, or `CancelRunBatch` on a deleted batch.
 */
export const deleteBatch: API.OperationMethod<
  DeleteBatchRequest,
  DeleteBatchResponse,
  DeleteBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteBatchRequest>,
  output: __S(10) as any as S.Schema<DeleteBatchResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBatch",
  endpointHostPrefix: "workflows-",
}));

export type DeleteConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete an existing configuration.
 */
export const deleteConfiguration: API.OperationMethod<
  DeleteConfigurationRequest,
  DeleteConfigurationResponse,
  DeleteConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DeleteConfigurationRequest>,
  output: __S(10) as any as S.Schema<DeleteConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfiguration",
  endpointHostPrefix: "workflows-",
}));

export type DeleteReferenceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a reference genome and returns a response with no body if the operation is successful. The read set associated with the reference genome must first be deleted before deleting the reference genome. After the reference genome is deleted, you can delete the reference store using the `DeleteReferenceStore` API operation.
 *
 * For more information, see Deleting HealthOmics reference and sequence stores in the *Amazon Web Services HealthOmics User Guide*.
 */
export const deleteReference: API.OperationMethod<
  DeleteReferenceRequest,
  DeleteReferenceResponse,
  DeleteReferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<DeleteReferenceRequest>,
  output: __S(10) as any as S.Schema<DeleteReferenceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReference",
  endpointHostPrefix: "control-storage-",
}));

export type DeleteReferenceStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a reference store and returns a response with no body if the operation is successful. You can only delete a reference store when it does not contain any reference genomes. To empty a reference store, use `DeleteReference`.
 *
 * For more information about your workflow status, see Deleting HealthOmics reference and sequence stores in the *Amazon Web Services HealthOmics User Guide*.
 */
export const deleteReferenceStore: API.OperationMethod<
  DeleteReferenceStoreRequest,
  DeleteReferenceStoreResponse,
  DeleteReferenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DeleteReferenceStoreRequest>,
  output: __S(10) as any as S.Schema<DeleteReferenceStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReferenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type DeleteRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a run and returns a response with no body if the operation is successful. You can only delete a run that has reached a `COMPLETED`, `FAILED`, or `CANCELLED` stage. A completed run has delivered an output, or was cancelled and resulted in no output. When you delete a run, only the metadata associated with the run is deleted. The run outputs remain in Amazon S3 and logs remain in CloudWatch.
 *
 * To verify that the workflow is deleted:
 *
 * - Use `ListRuns` to confirm the workflow no longer appears in the list.
 *
 * - Use `GetRun` to verify the workflow cannot be found.
 */
export const deleteRun: API.OperationMethod<
  DeleteRunRequest,
  DeleteRunResponse,
  DeleteRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<DeleteRunRequest>,
  output: __S(10) as any as S.Schema<DeleteRunResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRun",
  endpointHostPrefix: "workflows-",
}));

export type DeleteRunBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the individual workflow runs within a batch. This operation is separate from `DeleteBatch`, which removes the batch metadata.
 *
 * Delete is only allowed on batches in `PROCESSED` or `CANCELLED` state. Delete operations are non-atomic and may be partially successful. Use `GetBatch` to review `successfulDeleteSubmissionCount` and `failedDeleteSubmissionCount` in the `submissionSummary`. Only one cancel or delete operation per batch is allowed at a time.
 */
export const deleteRunBatch: API.OperationMethod<
  DeleteRunBatchRequest,
  DeleteRunBatchResponse,
  DeleteRunBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<DeleteRunBatchRequest>,
  output: __S(10) as any as S.Schema<DeleteRunBatchResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRunBatch",
  endpointHostPrefix: "workflows-",
}));

export type DeleteRunCacheError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a run cache and returns a response with no body if the operation is successful. This action removes the cache metadata stored in the service account, but does not delete the data in Amazon S3. You can access the cache data in Amazon S3, for inspection or to troubleshoot issues. You can remove old cache data using standard S3 `Delete` operations.
 *
 * For more information, see Deleting a run cache in the *Amazon Web Services HealthOmics User Guide*.
 */
export const deleteRunCache: API.OperationMethod<
  DeleteRunCacheRequest,
  DeleteRunCacheResponse,
  DeleteRunCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DeleteRunCacheRequest>,
  output: __S(10) as any as S.Schema<DeleteRunCacheResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRunCache",
  endpointHostPrefix: "workflows-",
}));

export type DeleteRunGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a run group and returns a response with no body if the operation is successful.
 *
 * To verify that the run group is deleted:
 *
 * - Use `ListRunGroups` to confirm the workflow no longer appears in the list.
 *
 * - Use `GetRunGroup` to verify the workflow cannot be found.
 */
export const deleteRunGroup: API.OperationMethod<
  DeleteRunGroupRequest,
  DeleteRunGroupResponse,
  DeleteRunGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<DeleteRunGroupRequest>,
  output: __S(10) as any as S.Schema<DeleteRunGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRunGroup",
  endpointHostPrefix: "workflows-",
}));

export type DeleteS3AccessPolicyError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an access policy for the specified store.
 */
export const deleteS3AccessPolicy: API.OperationMethod<
  DeleteS3AccessPolicyRequest,
  DeleteS3AccessPolicyResponse,
  DeleteS3AccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<DeleteS3AccessPolicyRequest>,
  output: __S(10) as any as S.Schema<DeleteS3AccessPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteS3AccessPolicy",
  endpointHostPrefix: "control-storage-",
}));

export type DeleteSequenceStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a sequence store and returns a response with no body if the operation is successful. You can only delete a sequence store when it does not contain any read sets.
 *
 * Use the `BatchDeleteReadSet` API operation to ensure that all read sets in the sequence store are deleted. When a sequence store is deleted, all tags associated with the store are also deleted.
 *
 * For more information, see Deleting HealthOmics reference and sequence stores in the *Amazon Web Services HealthOmics User Guide*.
 */
export const deleteSequenceStore: API.OperationMethod<
  DeleteSequenceStoreRequest,
  DeleteSequenceStoreResponse,
  DeleteSequenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<DeleteSequenceStoreRequest>,
  output: __S(10) as any as S.Schema<DeleteSequenceStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSequenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type DeleteShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource share. If you are the resource owner, the subscriber will no longer have access to the shared resource. If you are the subscriber, this operation deletes your access to the share.
 */
export const deleteShare: API.OperationMethod<
  DeleteShareRequest,
  DeleteShareResponse,
  DeleteShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<DeleteShareRequest>,
  output: __S(3) as any as S.Schema<DeleteShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteShare",
  endpointHostPrefix: "analytics-",
}));

export type DeleteVariantStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Deletes a variant store.
 */
export const deleteVariantStore: API.OperationMethod<
  DeleteVariantStoreRequest,
  DeleteVariantStoreResponse,
  DeleteVariantStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<DeleteVariantStoreRequest>,
  output: __S(66) as any as S.Schema<DeleteVariantStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVariantStore",
  endpointHostPrefix: "analytics-",
}));

export type DeleteWorkflowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workflow by specifying its ID. This operation returns a response with no body if the deletion is successful.
 *
 * To verify that the workflow is deleted:
 *
 * - Use `ListWorkflows` to confirm the workflow no longer appears in the list.
 *
 * - Use `GetWorkflow` to verify the workflow cannot be found.
 */
export const deleteWorkflow: API.OperationMethod<
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DeleteWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<DeleteWorkflowRequest>,
  output: __S(10) as any as S.Schema<DeleteWorkflowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkflow",
  endpointHostPrefix: "workflows-",
}));

export type DeleteWorkflowVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workflow version. Deleting a workflow version doesn't affect any ongoing runs that are using the workflow version.
 *
 * For more information, see Workflow versioning in Amazon Web Services HealthOmics in the *Amazon Web Services HealthOmics User Guide*.
 */
export const deleteWorkflowVersion: API.OperationMethod<
  DeleteWorkflowVersionRequest,
  DeleteWorkflowVersionResponse,
  DeleteWorkflowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<DeleteWorkflowVersionRequest>,
  output: __S(10) as any as S.Schema<DeleteWorkflowVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkflowVersion",
  endpointHostPrefix: "workflows-",
}));

export type GetAnnotationImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Gets information about an annotation import job.
 */
export const getAnnotationImportJob: API.OperationMethod<
  GetAnnotationImportRequest,
  GetAnnotationImportResponse,
  GetAnnotationImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<GetAnnotationImportRequest>,
  output: __S(92) as any as S.Schema<GetAnnotationImportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnnotationImportJob",
  endpointHostPrefix: "analytics-",
}));

export type GetAnnotationStoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Gets information about an annotation store.
 */
export const getAnnotationStore: API.OperationMethod<
  GetAnnotationStoreRequest,
  GetAnnotationStoreResponse,
  GetAnnotationStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93) as any as S.Schema<GetAnnotationStoreRequest>,
  output: __S(94) as any as S.Schema<GetAnnotationStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnnotationStore",
  endpointHostPrefix: "analytics-",
}));

export type GetAnnotationStoreVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the metadata for an annotation store version.
 */
export const getAnnotationStoreVersion: API.OperationMethod<
  GetAnnotationStoreVersionRequest,
  GetAnnotationStoreVersionResponse,
  GetAnnotationStoreVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<GetAnnotationStoreVersionRequest>,
  output: __S(96) as any as S.Schema<GetAnnotationStoreVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAnnotationStoreVersion",
  endpointHostPrefix: "analytics-",
}));

export type GetBatchError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details and current status for a specific run batch, including submission progress and run execution counts.
 */
export const getBatch: API.OperationMethod<
  GetBatchRequest,
  GetBatchResponse,
  GetBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<GetBatchRequest>,
  output: __S(101) as any as S.Schema<GetBatchResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBatch",
  endpointHostPrefix: "workflows-",
}));

export type GetConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve configuration details for specified name.
 */
export const getConfiguration: API.OperationMethod<
  GetConfigurationRequest,
  GetConfigurationResponse,
  GetConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<GetConfigurationRequest>,
  output: __S(103) as any as S.Schema<GetConfigurationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfiguration",
  endpointHostPrefix: "workflows-",
}));

export type GetReadSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RangeNotSatisfiableException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information from parts of a read set and returns the read set in the same format that it was uploaded. You must have read sets uploaded to your sequence store in order to run this operation.
 */
export const getReadSet: API.OperationMethod<
  GetReadSetRequest,
  GetReadSetResponse,
  GetReadSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<GetReadSetRequest>,
  output: __S(105) as any as S.Schema<GetReadSetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RangeNotSatisfiableException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReadSet",
  endpointHostPrefix: "storage-",
}));

export type GetReadSetActivationJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about the status of a read set activation job in JSON format.
 */
export const getReadSetActivationJob: API.OperationMethod<
  GetReadSetActivationJobRequest,
  GetReadSetActivationJobResponse,
  GetReadSetActivationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<GetReadSetActivationJobRequest>,
  output: __S(109) as any as S.Schema<GetReadSetActivationJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReadSetActivationJob",
  endpointHostPrefix: "control-storage-",
}));

export type GetReadSetExportJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves status information about a read set export job and returns the data in JSON format. Use this operation to actively monitor the progress of an export job.
 */
export const getReadSetExportJob: API.OperationMethod<
  GetReadSetExportJobRequest,
  GetReadSetExportJobResponse,
  GetReadSetExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110) as any as S.Schema<GetReadSetExportJobRequest>,
  output: __S(113) as any as S.Schema<GetReadSetExportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReadSetExportJob",
  endpointHostPrefix: "control-storage-",
}));

export type GetReadSetImportJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets detailed and status information about a read set import job and returns the data in JSON format.
 */
export const getReadSetImportJob: API.OperationMethod<
  GetReadSetImportJobRequest,
  GetReadSetImportJobResponse,
  GetReadSetImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114) as any as S.Schema<GetReadSetImportJobRequest>,
  output: __S(118) as any as S.Schema<GetReadSetImportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReadSetImportJob",
  endpointHostPrefix: "control-storage-",
}));

export type GetReadSetMetadataError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the metadata for a read set from a sequence store in JSON format. This operation does not return tags. To retrieve the list of tags for a read set, use the `ListTagsForResource` API operation.
 */
export const getReadSetMetadata: API.OperationMethod<
  GetReadSetMetadataRequest,
  GetReadSetMetadataResponse,
  GetReadSetMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<GetReadSetMetadataRequest>,
  output: __S(125) as any as S.Schema<GetReadSetMetadataResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReadSetMetadata",
  endpointHostPrefix: "control-storage-",
}));

export type GetReferenceError =
  | AccessDeniedException
  | InternalServerException
  | RangeNotSatisfiableException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Downloads parts of data from a reference genome and returns the reference file in the same format that it was uploaded.
 *
 * For more information, see Creating a HealthOmics reference store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const getReference: API.OperationMethod<
  GetReferenceRequest,
  GetReferenceResponse,
  GetReferenceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126) as any as S.Schema<GetReferenceRequest>,
  output: __S(105) as any as S.Schema<GetReferenceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RangeNotSatisfiableException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReference",
  endpointHostPrefix: "storage-",
}));

export type GetReferenceImportJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Monitors the status of a reference import job. This operation can be called after calling the `StartReferenceImportJob` operation.
 */
export const getReferenceImportJob: API.OperationMethod<
  GetReferenceImportJobRequest,
  GetReferenceImportJobResponse,
  GetReferenceImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127) as any as S.Schema<GetReferenceImportJobRequest>,
  output: __S(130) as any as S.Schema<GetReferenceImportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReferenceImportJob",
  endpointHostPrefix: "control-storage-",
}));

export type GetReferenceMetadataError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves metadata for a reference genome. This operation returns the number of parts, part size, and MD5 of an entire file. This operation does not return tags. To retrieve the list of tags for a read set, use the `ListTagsForResource` API operation.
 */
export const getReferenceMetadata: API.OperationMethod<
  GetReferenceMetadataRequest,
  GetReferenceMetadataResponse,
  GetReferenceMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<GetReferenceMetadataRequest>,
  output: __S(133) as any as S.Schema<GetReferenceMetadataResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReferenceMetadata",
  endpointHostPrefix: "control-storage-",
}));

export type GetReferenceStoreError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a reference store.
 */
export const getReferenceStore: API.OperationMethod<
  GetReferenceStoreRequest,
  GetReferenceStoreResponse,
  GetReferenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134) as any as S.Schema<GetReferenceStoreRequest>,
  output: __S(39) as any as S.Schema<GetReferenceStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReferenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type GetRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets detailed information about a specific run using its ID.
 *
 * Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If `GetRun` does not return the requested run, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see CloudWatch logs in the *Amazon Web Services HealthOmics User Guide*.
 */
export const getRun: API.OperationMethod<
  GetRunRequest,
  GetRunResponse,
  GetRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135) as any as S.Schema<GetRunRequest>,
  output: __S(138) as any as S.Schema<GetRunResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRun",
  endpointHostPrefix: "workflows-",
}));

export type GetRunCacheError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about the specified run cache using its ID.
 *
 * For more information, see Call caching for Amazon Web Services HealthOmics runs in the *Amazon Web Services HealthOmics User Guide*.
 */
export const getRunCache: API.OperationMethod<
  GetRunCacheRequest,
  GetRunCacheResponse,
  GetRunCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<GetRunCacheRequest>,
  output: __S(140) as any as S.Schema<GetRunCacheResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRunCache",
  endpointHostPrefix: "workflows-",
}));

export type GetRunGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a run group and returns its metadata.
 */
export const getRunGroup: API.OperationMethod<
  GetRunGroupRequest,
  GetRunGroupResponse,
  GetRunGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(141) as any as S.Schema<GetRunGroupRequest>,
  output: __S(142) as any as S.Schema<GetRunGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRunGroup",
  endpointHostPrefix: "workflows-",
}));

export type GetRunTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets detailed information about a run task using its ID.
 */
export const getRunTask: API.OperationMethod<
  GetRunTaskRequest,
  GetRunTaskResponse,
  GetRunTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(143) as any as S.Schema<GetRunTaskRequest>,
  output: __S(145) as any as S.Schema<GetRunTaskResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRunTask",
  endpointHostPrefix: "workflows-",
}));

export type GetS3AccessPolicyError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about an access policy on a given store.
 */
export const getS3AccessPolicy: API.OperationMethod<
  GetS3AccessPolicyRequest,
  GetS3AccessPolicyResponse,
  GetS3AccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146) as any as S.Schema<GetS3AccessPolicyRequest>,
  output: __S(147) as any as S.Schema<GetS3AccessPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetS3AccessPolicy",
  endpointHostPrefix: "control-storage-",
}));

export type GetSequenceStoreError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves metadata for a sequence store using its ID and returns it in JSON format.
 */
export const getSequenceStore: API.OperationMethod<
  GetSequenceStoreRequest,
  GetSequenceStoreResponse,
  GetSequenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(148) as any as S.Schema<GetSequenceStoreRequest>,
  output: __S(149) as any as S.Schema<GetSequenceStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSequenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type GetShareError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the metadata for the specified resource share.
 */
export const getShare: API.OperationMethod<
  GetShareRequest,
  GetShareResponse,
  GetShareError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(150) as any as S.Schema<GetShareRequest>,
  output: __S(152) as any as S.Schema<GetShareResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetShare",
  endpointHostPrefix: "analytics-",
}));

export type GetVariantImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Gets information about a variant import job.
 */
export const getVariantImportJob: API.OperationMethod<
  GetVariantImportRequest,
  GetVariantImportResponse,
  GetVariantImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153) as any as S.Schema<GetVariantImportRequest>,
  output: __S(156) as any as S.Schema<GetVariantImportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVariantImportJob",
  endpointHostPrefix: "analytics-",
}));

export type GetVariantStoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Gets information about a variant store.
 */
export const getVariantStore: API.OperationMethod<
  GetVariantStoreRequest,
  GetVariantStoreResponse,
  GetVariantStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(157) as any as S.Schema<GetVariantStoreRequest>,
  output: __S(158) as any as S.Schema<GetVariantStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVariantStore",
  endpointHostPrefix: "analytics-",
}));

export type GetWorkflowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets all information about a workflow using its ID.
 *
 * If a workflow is shared with you, you cannot export the workflow.
 *
 * For more information about your workflow status, see Verify the workflow status in the *Amazon Web Services HealthOmics User Guide*.
 */
export const getWorkflow: API.OperationMethod<
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159) as any as S.Schema<GetWorkflowRequest>,
  output: __S(162) as any as S.Schema<GetWorkflowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflow",
  endpointHostPrefix: "workflows-",
}));

export type GetWorkflowVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the *Amazon Web Services HealthOmics User Guide*.
 */
export const getWorkflowVersion: API.OperationMethod<
  GetWorkflowVersionRequest,
  GetWorkflowVersionResponse,
  GetWorkflowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(163) as any as S.Schema<GetWorkflowVersionRequest>,
  output: __S(164) as any as S.Schema<GetWorkflowVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowVersion",
  endpointHostPrefix: "workflows-",
}));

export type ListAnnotationImportJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Retrieves a list of annotation import jobs.
 */
export const listAnnotationImportJobs: API.PaginatedOperationMethod<
  ListAnnotationImportJobsRequest,
  ListAnnotationImportJobsResponse,
  ListAnnotationImportJobsError,
  Credentials | HttpClient.HttpClient,
  AnnotationImportJobItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(166) as any as S.Schema<ListAnnotationImportJobsRequest>,
  output: __S(169) as any as S.Schema<ListAnnotationImportJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnnotationImportJobs",
  endpointHostPrefix: "analytics-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "annotationImportJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAnnotationStoresError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Retrieves a list of annotation stores.
 */
export const listAnnotationStores: API.PaginatedOperationMethod<
  ListAnnotationStoresRequest,
  ListAnnotationStoresResponse,
  ListAnnotationStoresError,
  Credentials | HttpClient.HttpClient,
  AnnotationStoreItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171) as any as S.Schema<ListAnnotationStoresRequest>,
  output: __S(174) as any as S.Schema<ListAnnotationStoresResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnnotationStores",
  endpointHostPrefix: "analytics-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "annotationStores",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAnnotationStoreVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the versions of an annotation store.
 */
export const listAnnotationStoreVersions: API.PaginatedOperationMethod<
  ListAnnotationStoreVersionsRequest,
  ListAnnotationStoreVersionsResponse,
  ListAnnotationStoreVersionsError,
  Credentials | HttpClient.HttpClient,
  AnnotationStoreVersionItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(175) as any as S.Schema<ListAnnotationStoreVersionsRequest>,
  output: __S(178) as any as S.Schema<ListAnnotationStoreVersionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAnnotationStoreVersions",
  endpointHostPrefix: "analytics-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "annotationStoreVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBatchError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of run batches in your account, with optional filtering by status, name, or run group. Results are paginated. Only one filter per call is supported.
 */
export const listBatch: API.PaginatedOperationMethod<
  ListBatchRequest,
  ListBatchResponse,
  ListBatchError,
  Credentials | HttpClient.HttpClient,
  BatchListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179) as any as S.Schema<ListBatchRequest>,
  output: __S(182) as any as S.Schema<ListBatchResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBatch",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxItems",
  } as const,
})) as any;

export type ListConfigurationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List all configurations for the account.
 */
export const listConfigurations: API.PaginatedOperationMethod<
  ListConfigurationsRequest,
  ListConfigurationsResponse,
  ListConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ConfigurationListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183) as any as S.Schema<ListConfigurationsRequest>,
  output: __S(186) as any as S.Schema<ListConfigurationsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurations",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMultipartReadSetUploadsError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists in-progress multipart read set uploads for a sequence store and returns it in a JSON formatted output. Multipart read set uploads are initiated by the `CreateMultipartReadSetUploads` API operation. This operation returns a response with no body when the upload is complete.
 */
export const listMultipartReadSetUploads: API.PaginatedOperationMethod<
  ListMultipartReadSetUploadsRequest,
  ListMultipartReadSetUploadsResponse,
  ListMultipartReadSetUploadsError,
  Credentials | HttpClient.HttpClient,
  MultipartReadSetUploadListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(187) as any as S.Schema<ListMultipartReadSetUploadsRequest>,
  output: __S(190) as any as S.Schema<ListMultipartReadSetUploadsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMultipartReadSetUploads",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "uploads",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReadSetActivationJobsError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of read set activation jobs and returns the metadata in a JSON formatted output. To extract metadata from a read set activation job, use the `GetReadSetActivationJob` API operation.
 */
export const listReadSetActivationJobs: API.PaginatedOperationMethod<
  ListReadSetActivationJobsRequest,
  ListReadSetActivationJobsResponse,
  ListReadSetActivationJobsError,
  Credentials | HttpClient.HttpClient,
  ActivateReadSetJobItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(192) as any as S.Schema<ListReadSetActivationJobsRequest>,
  output: __S(195) as any as S.Schema<ListReadSetActivationJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReadSetActivationJobs",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "activationJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReadSetExportJobsError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of read set export jobs in a JSON formatted response. This API operation is used to check the status of a read set export job initiated by the `StartReadSetExportJob` API operation.
 */
export const listReadSetExportJobs: API.PaginatedOperationMethod<
  ListReadSetExportJobsRequest,
  ListReadSetExportJobsResponse,
  ListReadSetExportJobsError,
  Credentials | HttpClient.HttpClient,
  ExportReadSetJobDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(196) as any as S.Schema<ListReadSetExportJobsRequest>,
  output: __S(199) as any as S.Schema<ListReadSetExportJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReadSetExportJobs",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "exportJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReadSetImportJobsError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of read set import jobs and returns the data in JSON format.
 */
export const listReadSetImportJobs: API.PaginatedOperationMethod<
  ListReadSetImportJobsRequest,
  ListReadSetImportJobsResponse,
  ListReadSetImportJobsError,
  Credentials | HttpClient.HttpClient,
  ImportReadSetJobItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(200) as any as S.Schema<ListReadSetImportJobsRequest>,
  output: __S(203) as any as S.Schema<ListReadSetImportJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReadSetImportJobs",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "importJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReadSetsError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of read sets from a sequence store ID and returns the metadata in JSON format.
 */
export const listReadSets: API.PaginatedOperationMethod<
  ListReadSetsRequest,
  ListReadSetsResponse,
  ListReadSetsError,
  Credentials | HttpClient.HttpClient,
  ReadSetListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(205) as any as S.Schema<ListReadSetsRequest>,
  output: __S(208) as any as S.Schema<ListReadSetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReadSets",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "readSets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReadSetUploadPartsError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all parts in a multipart read set upload for a sequence store and returns the metadata in a JSON formatted output.
 */
export const listReadSetUploadParts: API.PaginatedOperationMethod<
  ListReadSetUploadPartsRequest,
  ListReadSetUploadPartsResponse,
  ListReadSetUploadPartsError,
  Credentials | HttpClient.HttpClient,
  ReadSetUploadPartListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(210) as any as S.Schema<ListReadSetUploadPartsRequest>,
  output: __S(213) as any as S.Schema<ListReadSetUploadPartsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReadSetUploadParts",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "parts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReferenceImportJobsError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the metadata of one or more reference import jobs for a reference store.
 */
export const listReferenceImportJobs: API.PaginatedOperationMethod<
  ListReferenceImportJobsRequest,
  ListReferenceImportJobsResponse,
  ListReferenceImportJobsError,
  Credentials | HttpClient.HttpClient,
  ImportReferenceJobItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(214) as any as S.Schema<ListReferenceImportJobsRequest>,
  output: __S(217) as any as S.Schema<ListReferenceImportJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReferenceImportJobs",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "importJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReferencesError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the metadata of one or more reference genomes in a reference store.
 *
 * For more information, see Creating a reference store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const listReferences: API.PaginatedOperationMethod<
  ListReferencesRequest,
  ListReferencesResponse,
  ListReferencesError,
  Credentials | HttpClient.HttpClient,
  ReferenceListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(219) as any as S.Schema<ListReferencesRequest>,
  output: __S(222) as any as S.Schema<ListReferencesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReferences",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "references",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReferenceStoresError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of reference stores linked to your account and returns their metadata in JSON format.
 *
 * For more information, see Creating a reference store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const listReferenceStores: API.PaginatedOperationMethod<
  ListReferenceStoresRequest,
  ListReferenceStoresResponse,
  ListReferenceStoresError,
  Credentials | HttpClient.HttpClient,
  ReferenceStoreDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(224) as any as S.Schema<ListReferenceStoresRequest>,
  output: __S(227) as any as S.Schema<ListReferenceStoresResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReferenceStores",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "referenceStores",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRunCachesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of your run caches and the metadata for each cache.
 */
export const listRunCaches: API.PaginatedOperationMethod<
  ListRunCachesRequest,
  ListRunCachesResponse,
  ListRunCachesError,
  Credentials | HttpClient.HttpClient,
  RunCacheListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(228) as any as S.Schema<ListRunCachesRequest>,
  output: __S(231) as any as S.Schema<ListRunCachesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRunCaches",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRunGroupsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all run groups and returns the metadata for each run group.
 */
export const listRunGroups: API.PaginatedOperationMethod<
  ListRunGroupsRequest,
  ListRunGroupsResponse,
  ListRunGroupsError,
  Credentials | HttpClient.HttpClient,
  RunGroupListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(232) as any as S.Schema<ListRunGroupsRequest>,
  output: __S(235) as any as S.Schema<ListRunGroupsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRunGroups",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRunsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of runs and returns each run's metadata and status.
 *
 * Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If the `ListRuns` response doesn't include specific runs that you expected, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see CloudWatch logs in the *Amazon Web Services HealthOmics User Guide*.
 */
export const listRuns: API.PaginatedOperationMethod<
  ListRunsRequest,
  ListRunsResponse,
  ListRunsError,
  Credentials | HttpClient.HttpClient,
  RunListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(236) as any as S.Schema<ListRunsRequest>,
  output: __S(239) as any as S.Schema<ListRunsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuns",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRunsInBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of individual workflow runs within a specific batch. Use this operation to map each `runSettingId` to its HealthOmics-generated `runId`, and to check the submission status of each run. Only one filter per call is supported.
 */
export const listRunsInBatch: API.PaginatedOperationMethod<
  ListRunsInBatchRequest,
  ListRunsInBatchResponse,
  ListRunsInBatchError,
  Credentials | HttpClient.HttpClient,
  RunBatchListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(240) as any as S.Schema<ListRunsInBatchRequest>,
  output: __S(243) as any as S.Schema<ListRunsInBatchResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRunsInBatch",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "runs",
    pageSize: "maxItems",
  } as const,
})) as any;

export type ListRunTasksError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tasks and status information within their specified run. Use this operation to monitor runs and to identify which specific tasks have failed.
 */
export const listRunTasks: API.PaginatedOperationMethod<
  ListRunTasksRequest,
  ListRunTasksResponse,
  ListRunTasksError,
  Credentials | HttpClient.HttpClient,
  TaskListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(244) as any as S.Schema<ListRunTasksRequest>,
  output: __S(247) as any as S.Schema<ListRunTasksResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRunTasks",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSequenceStoresError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of sequence stores and returns each sequence store's metadata.
 *
 * For more information, see Creating a HealthOmics sequence store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const listSequenceStores: API.PaginatedOperationMethod<
  ListSequenceStoresRequest,
  ListSequenceStoresResponse,
  ListSequenceStoresError,
  Credentials | HttpClient.HttpClient,
  SequenceStoreDetail
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(249) as any as S.Schema<ListSequenceStoresRequest>,
  output: __S(252) as any as S.Schema<ListSequenceStoresResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSequenceStores",
  endpointHostPrefix: "control-storage-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sequenceStores",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSharesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the resource shares associated with an account. Use the filter parameter to retrieve a specific subset of the shares.
 */
export const listShares: API.PaginatedOperationMethod<
  ListSharesRequest,
  ListSharesResponse,
  ListSharesError,
  Credentials | HttpClient.HttpClient,
  ShareDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(254) as any as S.Schema<ListSharesRequest>,
  output: __S(256) as any as S.Schema<ListSharesResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListShares",
  endpointHostPrefix: "analytics-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "shares",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(257) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(258) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "tags-",
}));

export type ListVariantImportJobsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Retrieves a list of variant import jobs.
 */
export const listVariantImportJobs: API.PaginatedOperationMethod<
  ListVariantImportJobsRequest,
  ListVariantImportJobsResponse,
  ListVariantImportJobsError,
  Credentials | HttpClient.HttpClient,
  VariantImportJobItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(259) as any as S.Schema<ListVariantImportJobsRequest>,
  output: __S(262) as any as S.Schema<ListVariantImportJobsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVariantImportJobs",
  endpointHostPrefix: "analytics-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "variantImportJobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListVariantStoresError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Retrieves a list of variant stores.
 */
export const listVariantStores: API.PaginatedOperationMethod<
  ListVariantStoresRequest,
  ListVariantStoresResponse,
  ListVariantStoresError,
  Credentials | HttpClient.HttpClient,
  VariantStoreItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(263) as any as S.Schema<ListVariantStoresRequest>,
  output: __S(266) as any as S.Schema<ListVariantStoresResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVariantStores",
  endpointHostPrefix: "analytics-",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "variantStores",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of existing workflows. You can filter for specific workflows by their name and type. Using the type parameter, specify `PRIVATE` to retrieve a list of private workflows or specify `READY2RUN` for a list of all Ready2Run workflows. If you do not specify the type of workflow, this operation returns a list of existing workflows.
 */
export const listWorkflows: API.PaginatedOperationMethod<
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListWorkflowsError,
  Credentials | HttpClient.HttpClient,
  WorkflowListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(267) as any as S.Schema<ListWorkflowsRequest>,
  output: __S(270) as any as S.Schema<ListWorkflowsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflows",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowVersionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the workflow versions for the specified workflow. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the *Amazon Web Services HealthOmics User Guide*.
 */
export const listWorkflowVersions: API.PaginatedOperationMethod<
  ListWorkflowVersionsRequest,
  ListWorkflowVersionsResponse,
  ListWorkflowVersionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowVersionListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(271) as any as S.Schema<ListWorkflowVersionsRequest>,
  output: __S(274) as any as S.Schema<ListWorkflowVersionsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowVersions",
  endpointHostPrefix: "workflows-",
  pagination: {
    inputToken: "startingToken",
    outputToken: "nextToken",
    items: "items",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutS3AccessPolicyError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds an access policy to the specified store.
 */
export const putS3AccessPolicy: API.OperationMethod<
  PutS3AccessPolicyRequest,
  PutS3AccessPolicyResponse,
  PutS3AccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(275) as any as S.Schema<PutS3AccessPolicyRequest>,
  output: __S(276) as any as S.Schema<PutS3AccessPolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutS3AccessPolicy",
  endpointHostPrefix: "control-storage-",
}));

export type StartAnnotationImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Starts an annotation import job.
 */
export const startAnnotationImportJob: API.OperationMethod<
  StartAnnotationImportRequest,
  StartAnnotationImportResponse,
  StartAnnotationImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(279) as any as S.Schema<StartAnnotationImportRequest>,
  output: __S(280) as any as S.Schema<StartAnnotationImportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAnnotationImportJob",
  endpointHostPrefix: "analytics-",
}));

export type StartReadSetActivationJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates an archived read set and returns its metadata in a JSON formatted output. Amazon Web Services HealthOmics automatically archives unused read sets after 30 days. To monitor the status of your read set activation job, use the `GetReadSetActivationJob` operation.
 *
 * To learn more, see Activating read sets in the *Amazon Web Services HealthOmics User Guide*.
 */
export const startReadSetActivationJob: API.OperationMethod<
  StartReadSetActivationJobRequest,
  StartReadSetActivationJobResponse,
  StartReadSetActivationJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282) as any as S.Schema<StartReadSetActivationJobRequest>,
  output: __S(283) as any as S.Schema<StartReadSetActivationJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReadSetActivationJob",
  endpointHostPrefix: "control-storage-",
}));

export type StartReadSetExportJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a read set export job. When the export job is finished, the read set is exported to an Amazon S3 bucket which can be retrieved using the `GetReadSetExportJob` API operation.
 *
 * To monitor the status of the export job, use the `ListReadSetExportJobs` API operation.
 */
export const startReadSetExportJob: API.OperationMethod<
  StartReadSetExportJobRequest,
  StartReadSetExportJobResponse,
  StartReadSetExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(286) as any as S.Schema<StartReadSetExportJobRequest>,
  output: __S(287) as any as S.Schema<StartReadSetExportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReadSetExportJob",
  endpointHostPrefix: "control-storage-",
}));

export type StartReadSetImportJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports a read set from the sequence store. Read set import jobs support a maximum of 100 read sets of different types. Monitor the progress of your read set import job by calling the `GetReadSetImportJob` API operation.
 */
export const startReadSetImportJob: API.OperationMethod<
  StartReadSetImportJobRequest,
  StartReadSetImportJobResponse,
  StartReadSetImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(290) as any as S.Schema<StartReadSetImportJobRequest>,
  output: __S(291) as any as S.Schema<StartReadSetImportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReadSetImportJob",
  endpointHostPrefix: "control-storage-",
}));

export type StartReferenceImportJobError =
  | AccessDeniedException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports a reference genome from Amazon S3 into a specified reference store. You can have multiple reference genomes in a reference store. You can only import reference genomes one at a time into each reference store. Monitor the status of your reference import job by using the `GetReferenceImportJob` API operation.
 */
export const startReferenceImportJob: API.OperationMethod<
  StartReferenceImportJobRequest,
  StartReferenceImportJobResponse,
  StartReferenceImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294) as any as S.Schema<StartReferenceImportJobRequest>,
  output: __S(295) as any as S.Schema<StartReferenceImportJobResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartReferenceImportJob",
  endpointHostPrefix: "control-storage-",
}));

export type StartRunError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a new run and returns details about the run, or duplicates an existing run. A run is a single invocation of a workflow. If you provide request IDs, Amazon Web Services HealthOmics identifies duplicate requests and starts the run only once. Monitor the progress of the run by calling the `GetRun` API operation.
 *
 * To start a new run, the following inputs are required:
 *
 * - A service role ARN (`roleArn`).
 *
 * - The run's workflow ID (`workflowId`, not the `uuid` or `runId`).
 *
 * - An Amazon S3 location (`outputUri`) where the run outputs will be saved.
 *
 * - All required workflow parameters (`parameter`), which can include optional parameters from the parameter template. The run cannot include any parameters that are not defined in the parameter template. To see all possible parameters, use the `GetRun` API operation.
 *
 * - For runs with a `STATIC` (default) storage type, specify the required storage capacity (in gibibytes). A storage capacity value is not required for runs that use `DYNAMIC` storage.
 *
 * `StartRun` can also duplicate an existing run using the run's default values. You can modify these default values and/or add other optional inputs. To duplicate a run, the following inputs are required:
 *
 * - A service role ARN (`roleArn`).
 *
 * - The ID of the run to duplicate (`runId`).
 *
 * - An Amazon S3 location where the run outputs will be saved (`outputUri`).
 *
 * To learn more about the optional parameters for `StartRun`, see Starting a run in the *Amazon Web Services HealthOmics User Guide*.
 *
 * Use the `retentionMode` input to control how long the metadata for each run is stored in CloudWatch. There are two retention modes:
 *
 * - Specify `REMOVE` to automatically remove the oldest runs when you reach the maximum service retention limit for runs. It is recommended that you use the `REMOVE` mode to initiate major run requests so that your runs do not fail when you reach the limit.
 *
 * - The `retentionMode` is set to the `RETAIN` mode by default, which allows you to manually remove runs after reaching the maximum service retention limit. Under this setting, you cannot create additional runs until you remove the excess runs.
 *
 * To learn more about the retention modes, see Run retention mode in the *Amazon Web Services HealthOmics User Guide*.
 *
 * You can use Amazon Q CLI to analyze run logs and make performance optimization recommendations. To get started, see the Amazon Web Services HealthOmics MCP server on GitHub.
 */
export const startRun: API.OperationMethod<
  StartRunRequest,
  StartRunResponse,
  StartRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(296) as any as S.Schema<StartRunRequest>,
  output: __S(297) as any as S.Schema<StartRunResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRun",
  endpointHostPrefix: "workflows-",
}));

export type StartRunBatchError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a batch of workflow runs. You can group up to 100,000 runs into a single batch that share a common configuration defined in `defaultRunSetting`. Per-run overrides can be provided either inline via `inlineSettings` (up to 100 runs) or via a JSON file stored in Amazon S3 via `s3UriSettings` (up to 100,000 runs).
 *
 * `StartRunBatch` validates common fields synchronously and returns immediately with a batch ID and status `CREATING`. The batch transitions to `PENDING` once initial setup completes. Runs are then submitted gradually and asynchronously at a rate governed by your `StartRun` throughput quota.
 */
export const startRunBatch: API.OperationMethod<
  StartRunBatchRequest,
  StartRunBatchResponse,
  StartRunBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(301) as any as S.Schema<StartRunBatchRequest>,
  output: __S(302) as any as S.Schema<StartRunBatchResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRunBatch",
  endpointHostPrefix: "workflows-",
}));

export type StartVariantImportJobError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Starts a variant import job.
 */
export const startVariantImportJob: API.OperationMethod<
  StartVariantImportRequest,
  StartVariantImportResponse,
  StartVariantImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305) as any as S.Schema<StartVariantImportRequest>,
  output: __S(280) as any as S.Schema<StartVariantImportResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartVariantImportJob",
  endpointHostPrefix: "analytics-",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tags a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306) as any as S.Schema<TagResourceRequest>,
  output: __S(10) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
  endpointHostPrefix: "tags-",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(307) as any as S.Schema<UntagResourceRequest>,
  output: __S(10) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
  endpointHostPrefix: "tags-",
}));

export type UpdateAnnotationStoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Updates an annotation store.
 */
export const updateAnnotationStore: API.OperationMethod<
  UpdateAnnotationStoreRequest,
  UpdateAnnotationStoreResponse,
  UpdateAnnotationStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(308) as any as S.Schema<UpdateAnnotationStoreRequest>,
  output: __S(309) as any as S.Schema<UpdateAnnotationStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnnotationStore",
  endpointHostPrefix: "analytics-",
}));

export type UpdateAnnotationStoreVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the description of an annotation store version.
 */
export const updateAnnotationStoreVersion: API.OperationMethod<
  UpdateAnnotationStoreVersionRequest,
  UpdateAnnotationStoreVersionResponse,
  UpdateAnnotationStoreVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(310) as any as S.Schema<UpdateAnnotationStoreVersionRequest>,
  output: __S(311) as any as S.Schema<UpdateAnnotationStoreVersionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAnnotationStoreVersion",
  endpointHostPrefix: "analytics-",
}));

export type UpdateRunCacheError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a run cache using its ID and returns a response with no body if the operation is successful. You can update the run cache description, name, or the default run cache behavior with `CACHE_ON_FAILURE` or `CACHE_ALWAYS`. To confirm that your run cache settings have been properly updated, use the `GetRunCache` API operation.
 *
 * For more information, see How call caching works in the *Amazon Web Services HealthOmics User Guide*.
 */
export const updateRunCache: API.OperationMethod<
  UpdateRunCacheRequest,
  UpdateRunCacheResponse,
  UpdateRunCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(312) as any as S.Schema<UpdateRunCacheRequest>,
  output: __S(10) as any as S.Schema<UpdateRunCacheResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRunCache",
  endpointHostPrefix: "workflows-",
}));

export type UpdateRunGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the settings of a run group and returns a response with no body if the operation is successful.
 *
 * You can update the following settings with `UpdateRunGroup`:
 *
 * - Maximum number of CPUs
 *
 * - Run time (measured in minutes)
 *
 * - Number of GPUs
 *
 * - Number of concurrent runs
 *
 * - Group name
 *
 * To confirm that the settings have been successfully updated, use the `ListRunGroups` or `GetRunGroup` API operations to verify that the desired changes have been made.
 */
export const updateRunGroup: API.OperationMethod<
  UpdateRunGroupRequest,
  UpdateRunGroupResponse,
  UpdateRunGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313) as any as S.Schema<UpdateRunGroupRequest>,
  output: __S(10) as any as S.Schema<UpdateRunGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRunGroup",
  endpointHostPrefix: "workflows-",
}));

export type UpdateSequenceStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update one or more parameters for the sequence store.
 */
export const updateSequenceStore: API.OperationMethod<
  UpdateSequenceStoreRequest,
  UpdateSequenceStoreResponse,
  UpdateSequenceStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(314) as any as S.Schema<UpdateSequenceStoreRequest>,
  output: __S(315) as any as S.Schema<UpdateSequenceStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSequenceStore",
  endpointHostPrefix: "control-storage-",
}));

export type UpdateVariantStoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Amazon Web Services HealthOmics variant stores and annotation stores are no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services HealthOmics variant store and annotation store availability change.
 *
 * Updates a variant store.
 */
export const updateVariantStore: API.OperationMethod<
  UpdateVariantStoreRequest,
  UpdateVariantStoreResponse,
  UpdateVariantStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(316) as any as S.Schema<UpdateVariantStoreRequest>,
  output: __S(317) as any as S.Schema<UpdateVariantStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVariantStore",
  endpointHostPrefix: "analytics-",
}));

export type UpdateWorkflowError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates information about a workflow.
 *
 * You can update the following workflow information:
 *
 * - Name
 *
 * - Description
 *
 * - Default storage type
 *
 * - Default storage capacity (with workflow ID)
 *
 * This operation returns a response with no body if the operation is successful. You can check the workflow updates by calling the `GetWorkflow` API operation.
 *
 * For more information, see Update a private workflow in the *Amazon Web Services HealthOmics User Guide*.
 */
export const updateWorkflow: API.OperationMethod<
  UpdateWorkflowRequest,
  UpdateWorkflowResponse,
  UpdateWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(318) as any as S.Schema<UpdateWorkflowRequest>,
  output: __S(10) as any as S.Schema<UpdateWorkflowResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkflow",
  endpointHostPrefix: "workflows-",
}));

export type UpdateWorkflowVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates information about the workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the *Amazon Web Services HealthOmics User Guide*.
 */
export const updateWorkflowVersion: API.OperationMethod<
  UpdateWorkflowVersionRequest,
  UpdateWorkflowVersionResponse,
  UpdateWorkflowVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(319) as any as S.Schema<UpdateWorkflowVersionRequest>,
  output: __S(10) as any as S.Schema<UpdateWorkflowVersionResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkflowVersion",
  endpointHostPrefix: "workflows-",
}));

export type UploadReadSetPartError =
  | AccessDeniedException
  | InternalServerException
  | NotSupportedOperationException
  | RequestTimeoutException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Uploads a specific part of a read set into a sequence store. When you a upload a read set part with a part number that already exists, the new part replaces the existing one. This operation returns a JSON formatted response containing a string identifier that is used to confirm that parts are being added to the intended upload.
 *
 * For more information, see Direct upload to a sequence store in the *Amazon Web Services HealthOmics User Guide*.
 */
export const uploadReadSetPart: API.OperationMethod<
  UploadReadSetPartRequest,
  UploadReadSetPartResponse,
  UploadReadSetPartError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(320) as any as S.Schema<UploadReadSetPartRequest>,
  output: __S(321) as any as S.Schema<UploadReadSetPartResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    NotSupportedOperationException,
    RequestTimeoutException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadReadSetPart",
  endpointHostPrefix: "storage-",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          uploadId: S.String.pipe(T.HttpLabel("uploadId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/sequencestore/{sequenceStoreId}/upload/{uploadId}/abort",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AbortMultipartReadSetUploadRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AbortMultipartReadSetUploadResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ shareId: S.String.pipe(T.HttpLabel("shareId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/share/{shareId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AcceptShareRequest" });
    case 3:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "AcceptShareResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ids: __S(4),
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/sequencestore/{sequenceStoreId}/readset/batch/delete",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteReadSetRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String, code: S.String, message: S.String }),
      ).annotate({ identifier: "ReadSetBatchError" });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(7)) })).annotate({
        identifier: "BatchDeleteReadSetResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/import/annotation/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelAnnotationImportRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CancelAnnotationImportResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/run/{id}/cancel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelRunRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ batchId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/runBatch/cancel" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelRunBatchRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/import/variant/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelVariantImportRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ partNumber: S.Number, partSource: S.String, checksum: S.String }),
      ).annotate({
        identifier: "CompleteReadSetUploadPartListItem",
      });
    case 7:
      return S.Array(__S(14));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          uploadId: S.String.pipe(T.HttpLabel("uploadId")),
          parts: __S(15),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/sequencestore/{sequenceStoreId}/upload/{uploadId}/complete",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CompleteMultipartReadSetUploadRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ readSetId: S.String })).annotate({
        identifier: "CompleteMultipartReadSetUploadResponse",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ referenceArn: S.String })]);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ type: S.String, keyArn: S.optional(S.String) })).annotate({
        identifier: "SseConfig",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.Array(__S(19));
    case 7:
      return S.suspend(() =>
        S.Struct({
          annotationType: S.optional(S.String),
          formatToHeader: S.optional(__S(21)),
          schema: S.optional(__S(22)),
        }),
      ).annotate({ identifier: "TsvStoreOptions" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ tsvStoreOptions: __S(23) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          reference: S.optional(__S(18)),
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
          versionName: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          storeFormat: S.String,
          storeOptions: S.optional(__S(24)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/annotationStore" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAnnotationStoreRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: S.optional(__S(18)),
          storeFormat: S.optional(S.String),
          storeOptions: S.optional(__S(24)),
          status: S.String,
          name: S.String,
          versionName: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateAnnotationStoreResponse",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ tsvVersionOptions: __S(23) })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          versionName: S.String,
          description: S.optional(S.String),
          versionOptions: S.optional(__S(27)),
          tags: S.optional(__S(19)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/annotationStore/{name}/version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAnnotationStoreVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          versionName: S.String,
          storeId: S.String,
          versionOptions: S.optional(__S(27)),
          name: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateAnnotationStoreVersionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          securityGroupIds: S.optional(__S(4)),
          subnetIds: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "VpcConfig" });
    case 7:
      return S.suspend(() => S.Struct({ vpcConfig: S.optional(__S(30)) })).annotate({
        identifier: "RunConfigurations",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          runConfigurations: __S(31),
          tags: S.optional(__S(19)),
          requestId: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/configuration" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          securityGroupIds: S.optional(__S(4)),
          subnetIds: S.optional(__S(4)),
          vpcId: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcConfigResponse" });
    case 2:
      return S.suspend(() => S.Struct({ vpcConfig: S.optional(__S(33)) })).annotate({
        identifier: "RunConfigurationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          uuid: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          runConfigurations: S.optional(__S(34)),
          status: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(19)),
        }),
      ).annotate({
        identifier: "CreateConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          clientToken: S.optional(S.String),
          sourceFileType: S.String,
          subjectId: S.String,
          sampleId: S.String,
          generatedFrom: S.optional(S.String),
          referenceArn: S.optional(S.String),
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/upload" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateMultipartReadSetUploadRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String,
          uploadId: S.String,
          sourceFileType: S.String,
          subjectId: S.String,
          sampleId: S.String,
          generatedFrom: S.optional(S.String),
          referenceArn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateMultipartReadSetUploadResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          tags: S.optional(__S(19)),
          clientToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/referencestore" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateReferenceStoreRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateReferenceStoreResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cacheBehavior: S.optional(S.String),
          cacheS3Location: S.String,
          description: S.optional(S.String),
          name: S.optional(S.String),
          requestId: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(__S(19)),
          cacheBucketOwnerId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/runCache" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRunCacheRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          tags: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "CreateRunCacheResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          maxCpus: S.optional(S.Number),
          maxRuns: S.optional(S.Number),
          maxDuration: S.optional(S.Number),
          tags: S.optional(__S(19)),
          requestId: S.String.pipe(T.IdempotencyToken()),
          maxGpus: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/runGroup" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRunGroupRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          tags: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "CreateRunGroupResponse" });
    case 4:
      return S.suspend(() => S.Struct({ accessLogLocation: S.optional(S.String) })).annotate({
        identifier: "S3AccessConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          tags: S.optional(__S(19)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          fallbackLocation: S.optional(S.String),
          eTagAlgorithmFamily: S.optional(S.String),
          propagatedSetLevelTags: S.optional(__S(4)),
          s3AccessConfig: S.optional(__S(44)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/sequencestore" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateSequenceStoreRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          s3Uri: S.optional(S.String),
          s3AccessPointArn: S.optional(S.String),
          accessLogLocation: S.optional(S.String),
        }),
      ).annotate({ identifier: "SequenceStoreS3Access" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fallbackLocation: S.optional(S.String),
          eTagAlgorithmFamily: S.optional(S.String),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          propagatedSetLevelTags: S.optional(__S(4)),
          s3Access: S.optional(__S(46)),
        }),
      ).annotate({
        identifier: "CreateSequenceStoreResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          principalSubscriber: S.String,
          shareName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/share" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateShareRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          shareId: S.optional(S.String),
          status: S.optional(S.String),
          shareName: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateShareResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          reference: __S(18),
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
          sseConfig: S.optional(__S(20)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/variantStore" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateVariantStoreRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: S.optional(__S(18)),
          status: S.String,
          name: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreateVariantStoreResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), optional: S.optional(S.Boolean) }),
      ).annotate({ identifier: "WorkflowParameter" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(52).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          upstreamRegistryUrl: S.optional(S.String),
          ecrRepositoryPrefix: S.optional(S.String),
          upstreamRepositoryPrefix: S.optional(S.String),
          ecrAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegistryMapping" });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ sourceImage: S.optional(S.String), destinationImage: S.optional(S.String) }),
      ).annotate({ identifier: "ImageMapping" });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({
          registryMappings: S.optional(__S(55)),
          imageMappings: S.optional(__S(57)),
        }),
      ).annotate({ identifier: "ContainerRegistryMap" });
    case 3:
      return S.suspend(() => S.Struct({ type: S.String, value: S.String })).annotate({
        identifier: "SourceReference",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          connectionArn: S.String,
          fullRepositoryId: S.String,
          sourceReference: S.optional(__S(59)),
          excludeFilePatterns: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "DefinitionRepository" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          engine: S.optional(S.String),
          definitionZip: S.optional(T.Blob),
          definitionUri: S.optional(S.String),
          main: S.optional(S.String),
          parameterTemplate: S.optional(__S(53)),
          storageCapacity: S.optional(S.Number),
          tags: S.optional(__S(19)),
          requestId: S.String.pipe(T.IdempotencyToken()),
          accelerators: S.optional(S.String),
          storageType: S.optional(S.String),
          containerRegistryMap: S.optional(__S(58)),
          containerRegistryMapUri: S.optional(S.String),
          readmeMarkdown: S.optional(S.String),
          parameterTemplatePath: S.optional(S.String),
          readmePath: S.optional(S.String),
          definitionRepository: S.optional(__S(60)),
          workflowBucketOwnerId: S.optional(S.String),
          readmeUri: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/workflow" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWorkflowRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          tags: S.optional(__S(19)),
          uuid: S.optional(S.String),
        }),
      ).annotate({ identifier: "CreateWorkflowResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String.pipe(T.HttpLabel("workflowId")),
          versionName: S.String,
          definitionZip: S.optional(T.Blob),
          definitionUri: S.optional(S.String),
          accelerators: S.optional(S.String),
          description: S.optional(S.String),
          engine: S.optional(S.String),
          main: S.optional(S.String),
          parameterTemplate: S.optional(__S(53)),
          requestId: S.String.pipe(T.IdempotencyToken()),
          storageType: S.optional(S.String),
          storageCapacity: S.optional(S.Number),
          tags: S.optional(__S(19)),
          workflowBucketOwnerId: S.optional(S.String),
          containerRegistryMap: S.optional(__S(58)),
          containerRegistryMapUri: S.optional(S.String),
          readmeMarkdown: S.optional(S.String),
          parameterTemplatePath: S.optional(S.String),
          readmePath: S.optional(S.String),
          definitionRepository: S.optional(__S(60)),
          readmeUri: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workflow/{workflowId}/version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkflowVersionRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          workflowId: S.optional(S.String),
          versionName: S.optional(S.String),
          status: S.optional(S.String),
          tags: S.optional(__S(19)),
          uuid: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateWorkflowVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/annotationStore/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAnnotationStoreRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ status: S.String })).annotate({
        identifier: "DeleteAnnotationStoreResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          versions: __S(4),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/annotationStore/{name}/versions/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAnnotationStoreVersionsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ versionName: S.String, message: S.String })).annotate({
        identifier: "VersionDeleteError",
      });
    case 5:
      return S.Array(__S(68));
    case 6:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(69)) })).annotate({
        identifier: "DeleteAnnotationStoreVersionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ batchId: S.String.pipe(T.HttpLabel("batchId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/runBatch/{batchId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteBatchRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/configuration/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/referencestore/{referenceStoreId}/reference/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteReferenceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/referencestore/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteReferenceStoreRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/run/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRunRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ batchId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/runBatch/delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRunBatchRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/runCache/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRunCacheRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/runGroup/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRunGroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ s3AccessPointArn: S.String.pipe(T.HttpLabel("s3AccessPointArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/s3accesspolicy/{s3AccessPointArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteS3AccessPolicyRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sequencestore/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSequenceStoreRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ shareId: S.String.pipe(T.HttpLabel("shareId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/share/{shareId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteShareRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          force: S.optional(S.Boolean).pipe(T.HttpQuery("force")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/variantStore/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteVariantStoreRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/workflow/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWorkflowRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String.pipe(T.HttpLabel("workflowId")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workflow/{workflowId}/version/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkflowVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/import/annotation/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAnnotationImportRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ source: S.String, jobStatus: S.String })).annotate({
        identifier: "AnnotationImportItemDetail",
      });
    case 7:
      return S.Array(__S(86));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sep: S.optional(S.String),
          encoding: S.optional(S.String),
          quote: S.optional(S.String),
          quoteAll: S.optional(S.Boolean),
          escape: S.optional(S.String),
          escapeQuotes: S.optional(S.Boolean),
          comment: S.optional(S.String),
          header: S.optional(S.Boolean),
          lineSep: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReadOptions" });
    case 1:
      return S.suspend(() => S.Struct({ readOptions: S.optional(__S(88)) })).annotate({
        identifier: "TsvOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ignoreQualField: S.optional(S.Boolean),
          ignoreFilterField: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VcfOptions" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ tsvOptions: __S(89) }),
        /*@__PURE__*/ S.Struct({ vcfOptions: __S(90) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          destinationName: S.String,
          versionName: S.String,
          roleArn: S.String,
          status: S.String,
          statusMessage: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          items: __S(87),
          runLeftNormalization: S.Boolean,
          formatOptions: __S(91),
          annotationFields: S.optional(__S(21)),
        }),
      ).annotate({
        identifier: "GetAnnotationImportResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/annotationStore/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAnnotationStoreRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: __S(18),
          status: S.String,
          storeArn: S.String,
          name: S.String,
          description: S.String,
          sseConfig: __S(20),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: __S(19),
          storeOptions: S.optional(__S(24)),
          storeFormat: S.optional(S.String),
          statusMessage: S.String,
          storeSizeBytes: S.Number,
          numVersions: S.Number,
        }),
      ).annotate({
        identifier: "GetAnnotationStoreResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/annotationStore/{name}/version/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAnnotationStoreVersionRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          storeId: S.String,
          id: S.String,
          status: S.String,
          versionArn: S.String,
          name: S.String,
          versionName: S.String,
          description: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: __S(19),
          versionOptions: S.optional(__S(27)),
          statusMessage: S.String,
          versionSizeBytes: S.Number,
        }),
      ).annotate({
        identifier: "GetAnnotationStoreVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ batchId: S.String.pipe(T.HttpLabel("batchId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runBatch/{batchId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBatchRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String,
          workflowType: S.optional(S.String),
          roleArn: S.String,
          name: S.optional(S.String),
          cacheId: S.optional(S.String),
          cacheBehavior: S.optional(S.String),
          runGroupId: S.optional(S.String),
          priority: S.optional(S.Number),
          parameters: S.optional(S.Any),
          storageCapacity: S.optional(S.Number),
          outputUri: S.optional(S.String),
          logLevel: S.optional(S.String),
          runTags: S.optional(__S(19)),
          retentionMode: S.optional(S.String),
          storageType: S.optional(S.String),
          workflowOwnerId: S.optional(S.String),
          outputBucketOwnerId: S.optional(S.String),
          workflowVersionName: S.optional(S.String),
          networkingMode: S.optional(S.String),
          configurationName: S.optional(S.String),
          sessionPolicy: S.optional(S.String),
          engineSettings: S.optional(S.Any),
          scratchStorageMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "DefaultRunSetting" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          successfulStartSubmissionCount: S.optional(S.Number),
          failedStartSubmissionCount: S.optional(S.Number),
          pendingStartSubmissionCount: S.optional(S.Number),
          successfulCancelSubmissionCount: S.optional(S.Number),
          failedCancelSubmissionCount: S.optional(S.Number),
          successfulDeleteSubmissionCount: S.optional(S.Number),
          failedDeleteSubmissionCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SubmissionSummary" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          pendingRunCount: S.optional(S.Number),
          startingRunCount: S.optional(S.Number),
          runningRunCount: S.optional(S.Number),
          stoppingRunCount: S.optional(S.Number),
          completedRunCount: S.optional(S.Number),
          deletedRunCount: S.optional(S.Number),
          failedRunCount: S.optional(S.Number),
          cancelledRunCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RunSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          uuid: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          tags: S.optional(__S(19)),
          totalRuns: S.optional(S.Number),
          defaultRunSetting: S.optional(__S(98)),
          submissionSummary: S.optional(__S(99)),
          runSummary: S.optional(__S(100)),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          submittedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          processedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          failureReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetBatchResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configuration/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConfigurationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          uuid: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          runConfigurations: S.optional(__S(34)),
          status: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "GetConfigurationResponse" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          file: S.optional(S.String).pipe(T.HttpQuery("file")),
          partNumber: S.Number.pipe(T.HttpQuery("partNumber")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sequencestore/{sequenceStoreId}/readset/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetReadSetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ payload: S.optional(T.StreamingOutput).pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "GetReadSetResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sequencestore/{sequenceStoreId}/activationjob/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReadSetActivationJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ readSetId: S.String, status: S.String, statusMessage: S.optional(S.String) }),
      ).annotate({
        identifier: "ActivateReadSetSourceItem",
      });
    case 4:
      return S.Array(__S(107));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sources: S.optional(__S(108)),
        }),
      ).annotate({
        identifier: "GetReadSetActivationJobResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sequencestore/{sequenceStoreId}/exportjob/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReadSetExportJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String, status: S.String, statusMessage: S.optional(S.String) }),
      ).annotate({ identifier: "ExportReadSetDetail" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111));
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          destination: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          readSets: S.optional(__S(112)),
        }),
      ).annotate({
        identifier: "GetReadSetExportJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sequencestore/{sequenceStoreId}/importjob/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReadSetImportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ source1: S.String, source2: S.optional(S.String) }),
      ).annotate({ identifier: "SourceFiles" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceFiles: __S(115),
          sourceFileType: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          subjectId: S.String,
          sampleId: S.String,
          generatedFrom: S.optional(S.String),
          referenceArn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
          readSetId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportReadSetSourceItem" });
    case 5:
      return S.Array(__S(116));
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          roleArn: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sources: __S(117),
        }),
      ).annotate({
        identifier: "GetReadSetImportJobResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/sequencestore/{sequenceStoreId}/readset/{id}/metadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReadSetMetadataRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          totalReadCount: S.optional(S.Number),
          totalBaseCount: S.optional(S.Number),
          generatedFrom: S.optional(S.String),
          alignment: S.optional(S.String),
        }),
      ).annotate({ identifier: "SequenceInformation" });
    case 1:
      return S.suspend(() => S.Struct({ s3Uri: S.optional(S.String) })).annotate({
        identifier: "ReadSetS3Access",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          totalParts: S.optional(S.Number),
          partSize: S.optional(S.Number),
          contentLength: S.optional(S.Number),
          s3Access: S.optional(__S(121)),
        }),
      ).annotate({ identifier: "FileInformation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          source1: S.optional(__S(122)),
          source2: S.optional(__S(122)),
          index: S.optional(__S(122)),
        }),
      ).annotate({ identifier: "ReadSetFiles" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          algorithm: S.optional(S.String),
          source1: S.optional(S.String),
          source2: S.optional(S.String),
        }),
      ).annotate({ identifier: "ETag" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          sequenceStoreId: S.String,
          subjectId: S.optional(S.String),
          sampleId: S.optional(S.String),
          status: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          fileType: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          sequenceInformation: S.optional(__S(120)),
          referenceArn: S.optional(S.String),
          files: S.optional(__S(123)),
          statusMessage: S.optional(S.String),
          creationType: S.optional(S.String),
          etag: S.optional(__S(124)),
          creationJobId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetReadSetMetadataResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
          range: S.optional(S.String).pipe(T.HttpHeader("Range")),
          partNumber: S.Number.pipe(T.HttpQuery("partNumber")),
          file: S.optional(S.String).pipe(T.HttpQuery("file")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/referencestore/{referenceStoreId}/reference/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetReferenceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/referencestore/{referenceStoreId}/importjob/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReferenceImportJobRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceFile: S.optional(S.String),
          status: S.String,
          statusMessage: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
          referenceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ImportReferenceSourceItem",
      });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          referenceStoreId: S.String,
          roleArn: S.String,
          status: S.String,
          statusMessage: S.optional(S.String),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sources: __S(129),
        }),
      ).annotate({
        identifier: "GetReferenceImportJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/referencestore/{referenceStoreId}/reference/{id}/metadata",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetReferenceMetadataRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ source: S.optional(__S(122)), index: S.optional(__S(122)) }),
      ).annotate({ identifier: "ReferenceFiles" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          referenceStoreId: S.String,
          md5: S.String,
          status: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          files: S.optional(__S(132)),
          creationType: S.optional(S.String),
          creationJobId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetReferenceMetadataResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/referencestore/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetReferenceStoreRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          export: S.optional(__S(4)).pipe(T.HttpQuery("export")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/run/{id}" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetRunRequest" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ engineLogStream: S.optional(S.String), runLogStream: S.optional(S.String) }),
      ).annotate({ identifier: "RunLogLocation" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          uuid: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConfigurationDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          cacheId: S.optional(S.String),
          cacheBehavior: S.optional(S.String),
          engineVersion: S.optional(S.String),
          status: S.optional(S.String),
          workflowId: S.optional(S.String),
          workflowType: S.optional(S.String),
          runId: S.optional(S.String),
          roleArn: S.optional(S.String),
          name: S.optional(S.String),
          runGroupId: S.optional(S.String),
          batchId: S.optional(S.String),
          priority: S.optional(S.Number),
          definition: S.optional(S.String),
          digest: S.optional(S.String),
          parameters: S.optional(S.Any),
          storageCapacity: S.optional(S.Number),
          outputUri: S.optional(S.String),
          logLevel: S.optional(S.String),
          resourceDigests: S.optional(__S(21)),
          startedBy: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stopTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          statusMessage: S.optional(S.String),
          tags: S.optional(__S(19)),
          accelerators: S.optional(S.String),
          retentionMode: S.optional(S.String),
          failureReason: S.optional(S.String),
          logLocation: S.optional(__S(136)),
          uuid: S.optional(S.String),
          runOutputUri: S.optional(S.String),
          storageType: S.optional(S.String),
          workflowOwnerId: S.optional(S.String),
          workflowVersionName: S.optional(S.String),
          workflowUuid: S.optional(S.String),
          networkingMode: S.optional(S.String),
          scratchStorageMode: S.optional(S.String),
          configuration: S.optional(__S(137)),
          vpcConfig: S.optional(__S(33)),
          engineSettings: S.optional(S.Any),
          sessionPolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetRunResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/runCache/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRunCacheRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          cacheBehavior: S.optional(S.String),
          cacheBucketOwnerId: S.optional(S.String),
          cacheS3Uri: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          tags: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "GetRunCacheResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/runGroup/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRunGroupRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          maxCpus: S.optional(S.Number),
          maxRuns: S.optional(S.Number),
          maxDuration: S.optional(S.Number),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(19)),
          maxGpus: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetRunGroupResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          taskId: S.String.pipe(T.HttpLabel("taskId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/run/{id}/task/{taskId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRunTaskRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          image: S.optional(S.String),
          imageDigest: S.optional(S.String),
          sourceImage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          status: S.optional(S.String),
          name: S.optional(S.String),
          cpus: S.optional(S.Number),
          cacheHit: S.optional(S.Boolean),
          cacheS3Uri: S.optional(S.String),
          memory: S.optional(S.Number),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stopTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          statusMessage: S.optional(S.String),
          logStream: S.optional(S.String),
          gpus: S.optional(S.Number),
          instanceType: S.optional(S.String),
          failureReason: S.optional(S.String),
          imageDetails: S.optional(__S(144)),
          uuid: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetRunTaskResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ s3AccessPointArn: S.String.pipe(T.HttpLabel("s3AccessPointArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/s3accesspolicy/{s3AccessPointArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetS3AccessPolicyRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          s3AccessPointArn: S.optional(S.String),
          storeId: S.optional(S.String),
          storeType: S.optional(S.String),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          s3AccessPolicy: S.String,
        }),
      ).annotate({
        identifier: "GetS3AccessPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sequencestore/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSequenceStoreRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fallbackLocation: S.optional(S.String),
          s3Access: S.optional(__S(46)),
          eTagAlgorithmFamily: S.optional(S.String),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          propagatedSetLevelTags: S.optional(__S(4)),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetSequenceStoreResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ shareId: S.String.pipe(T.HttpLabel("shareId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/share/{shareId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetShareRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          shareId: S.optional(S.String),
          resourceArn: S.optional(S.String),
          resourceId: S.optional(S.String),
          principalSubscriber: S.optional(S.String),
          ownerId: S.optional(S.String),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          shareName: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ShareDetails" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ share: S.optional(__S(151)) })).annotate({
        identifier: "GetShareResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ jobId: S.String.pipe(T.HttpLabel("jobId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/import/variant/{jobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVariantImportRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ source: S.String, jobStatus: S.String, statusMessage: S.optional(S.String) }),
      ).annotate({ identifier: "VariantImportItemDetail" });
    case 3:
      return S.Array(__S(154));
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          destinationName: S.String,
          roleArn: S.String,
          status: S.String,
          statusMessage: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          items: __S(155),
          runLeftNormalization: S.Boolean,
          annotationFields: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "GetVariantImportResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/variantStore/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetVariantStoreRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: __S(18),
          status: S.String,
          storeArn: S.String,
          name: S.String,
          description: S.String,
          sseConfig: __S(20),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: __S(19),
          statusMessage: S.String,
          storeSizeBytes: S.Number,
        }),
      ).annotate({ identifier: "GetVariantStoreResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          export: S.optional(__S(4)).pipe(T.HttpQuery("export")),
          workflowOwnerId: S.optional(S.String).pipe(T.HttpQuery("workflowOwnerId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/workflow/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetWorkflowRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          connectionArn: S.optional(S.String),
          fullRepositoryId: S.optional(S.String),
          sourceReference: S.optional(__S(59)),
          providerType: S.optional(S.String),
          providerEndpoint: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DefinitionRepositoryDetails",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(53).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          engine: S.optional(S.String),
          definition: S.optional(S.String),
          main: S.optional(S.String),
          digest: S.optional(S.String),
          parameterTemplate: S.optional(__S(53)),
          storageCapacity: S.optional(S.Number),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          statusMessage: S.optional(S.String),
          tags: S.optional(__S(19)),
          metadata: S.optional(__S(21)),
          accelerators: S.optional(S.String),
          storageType: S.optional(S.String),
          uuid: S.optional(S.String),
          containerRegistryMap: S.optional(__S(58)),
          readme: S.optional(S.String),
          definitionRepositoryDetails: S.optional(__S(160)),
          readmePath: S.optional(S.String),
          profiles: S.optional(__S(4)),
          profileParameterTemplates: S.optional(__S(161)),
        }),
      ).annotate({ identifier: "GetWorkflowResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String.pipe(T.HttpLabel("workflowId")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          export: S.optional(__S(4)).pipe(T.HttpQuery("export")),
          workflowOwnerId: S.optional(S.String).pipe(T.HttpQuery("workflowOwnerId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workflow/{workflowId}/version/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkflowVersionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          workflowId: S.optional(S.String),
          versionName: S.optional(S.String),
          accelerators: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(S.String),
          definition: S.optional(S.String),
          digest: S.optional(S.String),
          engine: S.optional(S.String),
          main: S.optional(S.String),
          metadata: S.optional(__S(21)),
          parameterTemplate: S.optional(__S(53)),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          storageType: S.optional(S.String),
          storageCapacity: S.optional(S.Number),
          type: S.optional(S.String),
          tags: S.optional(__S(19)),
          uuid: S.optional(S.String),
          workflowBucketOwnerId: S.optional(S.String),
          containerRegistryMap: S.optional(__S(58)),
          readme: S.optional(S.String),
          definitionRepositoryDetails: S.optional(__S(160)),
          readmePath: S.optional(S.String),
          profiles: S.optional(__S(4)),
          profileParameterTemplates: S.optional(__S(161)),
        }),
      ).annotate({
        identifier: "GetWorkflowVersionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), storeName: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAnnotationImportJobsFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          ids: S.optional(__S(4)),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(165)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/import/annotations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnnotationImportJobsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          destinationName: S.String,
          versionName: S.String,
          roleArn: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          runLeftNormalization: S.optional(S.Boolean),
          annotationFields: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "AnnotationImportJobItem" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167));
    case 1:
      return S.suspend(() =>
        S.Struct({
          annotationImportJobs: S.optional(__S(168)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnnotationImportJobsResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "ListAnnotationStoresFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ids: S.optional(__S(4)),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(170)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/annotationStores" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAnnotationStoresRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: __S(18),
          status: S.String,
          storeArn: S.String,
          name: S.String,
          storeFormat: S.String,
          description: S.String,
          sseConfig: __S(20),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          statusMessage: S.String,
          storeSizeBytes: S.Number,
        }),
      ).annotate({ identifier: "AnnotationStoreItem" });
    case 5:
      return S.Array(__S(172));
    case 6:
      return S.suspend(() =>
        S.Struct({
          annotationStores: S.optional(__S(173)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnnotationStoresResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(170)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/annotationStore/{name}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAnnotationStoreVersionsRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          storeId: S.String,
          id: S.String,
          status: S.String,
          versionArn: S.String,
          name: S.String,
          versionName: S.String,
          description: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          statusMessage: S.String,
          versionSizeBytes: S.Number,
        }),
      ).annotate({
        identifier: "AnnotationStoreVersionItem",
      });
    case 1:
      return S.Array(__S(176));
    case 2:
      return S.suspend(() =>
        S.Struct({
          annotationStoreVersions: S.optional(__S(177)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAnnotationStoreVersionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxItems: S.optional(S.Number).pipe(T.HttpQuery("maxItems")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          runGroupId: S.optional(S.String).pipe(T.HttpQuery("runGroupId")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/runBatch" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListBatchRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          totalRuns: S.optional(S.Number),
          workflowId: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchListItem" });
    case 5:
      return S.Array(__S(180));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(181)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListBatchResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/configuration" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListConfigurationsRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ConfigurationListItem" });
    case 1:
      return S.Array(__S(184));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(185)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListConfigurationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/uploads" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMultipartReadSetUploadsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String,
          uploadId: S.String,
          sourceFileType: S.String,
          subjectId: S.String,
          sampleId: S.String,
          generatedFrom: S.String,
          referenceArn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "MultipartReadSetUploadListItem",
      });
    case 5:
      return S.Array(__S(188));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          uploads: S.optional(__S(189)),
        }),
      ).annotate({
        identifier: "ListMultipartReadSetUploadsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ActivateReadSetFilter" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(191)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/activationjobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReadSetActivationJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ActivateReadSetJobItem" });
    case 2:
      return S.Array(__S(193));
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          activationJobs: S.optional(__S(194)),
        }),
      ).annotate({
        identifier: "ListReadSetActivationJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(191)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/exportjobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReadSetExportJobsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          destination: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ExportReadSetJobDetail" });
    case 6:
      return S.Array(__S(197));
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          exportJobs: S.optional(__S(198)),
        }),
      ).annotate({
        identifier: "ListReadSetExportJobsResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          filter: S.optional(__S(191)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/importjobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReadSetImportJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          roleArn: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ImportReadSetJobItem" });
    case 2:
      return S.Array(__S(201));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), importJobs: S.optional(__S(202)) }),
      ).annotate({
        identifier: "ListReadSetImportJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          status: S.optional(S.String),
          referenceArn: S.optional(S.String),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          sampleId: S.optional(S.String),
          subjectId: S.optional(S.String),
          generatedFrom: S.optional(S.String),
          creationType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReadSetFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(204)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/readsets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListReadSetsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          sequenceStoreId: S.String,
          subjectId: S.optional(S.String),
          sampleId: S.optional(S.String),
          status: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          referenceArn: S.optional(S.String),
          fileType: S.String,
          sequenceInformation: S.optional(__S(120)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          statusMessage: S.optional(S.String),
          creationType: S.optional(S.String),
          etag: S.optional(__S(124)),
        }),
      ).annotate({ identifier: "ReadSetListItem" });
    case 7:
      return S.Array(__S(206));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), readSets: __S(207) }),
      ).annotate({ identifier: "ListReadSetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ReadSetUploadPartListFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          uploadId: S.String.pipe(T.HttpLabel("uploadId")),
          partSource: S.String,
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(209)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/sequencestore/{sequenceStoreId}/upload/{uploadId}/parts",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReadSetUploadPartsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          partNumber: S.Number,
          partSize: S.Number,
          partSource: S.String,
          checksum: S.String,
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastUpdatedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "ReadSetUploadPartListItem",
      });
    case 4:
      return S.Array(__S(211));
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), parts: S.optional(__S(212)) }),
      ).annotate({
        identifier: "ListReadSetUploadPartsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
          filter: S.optional(__S(191)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/referencestore/{referenceStoreId}/importjobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListReferenceImportJobsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          referenceStoreId: S.String,
          roleArn: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ImportReferenceJobItem" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(215));
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          importJobs: S.optional(__S(216)),
        }),
      ).annotate({
        identifier: "ListReferenceImportJobsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          md5: S.optional(S.String),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ReferenceFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(218)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/referencestore/{referenceStoreId}/references" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListReferencesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          referenceStoreId: S.String,
          md5: S.String,
          status: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ReferenceListItem" });
    case 5:
      return S.Array(__S(220));
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), references: __S(221) }),
      ).annotate({ identifier: "ListReferencesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ReferenceStoreFilter" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(223)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/referencestores" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListReferenceStoresRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ReferenceStoreDetail" });
    case 2:
      return S.Array(__S(225));
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), referenceStores: __S(226) }),
      ).annotate({
        identifier: "ListReferenceStoresResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/runCache" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRunCachesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          cacheBehavior: S.optional(S.String),
          cacheS3Uri: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "RunCacheListItem" });
    case 6:
      return S.Array(__S(229));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(230)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRunCachesResponse" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/runGroup" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRunGroupsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          maxCpus: S.optional(S.Number),
          maxRuns: S.optional(S.Number),
          maxDuration: S.optional(S.Number),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          maxGpus: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RunGroupListItem" });
    case 2:
      return S.Array(__S(233));
    case 3:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(234)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRunGroupsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          runGroupId: S.optional(S.String).pipe(T.HttpQuery("runGroupId")),
          batchId: S.optional(S.String).pipe(T.HttpQuery("batchId")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/run" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRunsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          workflowId: S.optional(S.String),
          batchId: S.optional(S.String),
          name: S.optional(S.String),
          priority: S.optional(S.Number),
          storageCapacity: S.optional(S.Number),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stopTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          storageType: S.optional(S.String),
          workflowVersionName: S.optional(S.String),
          workflowName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RunListItem" });
    case 6:
      return S.Array(__S(237));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(238)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRunsResponse" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          batchId: S.String.pipe(T.HttpLabel("batchId")),
          maxItems: S.optional(S.Number).pipe(T.HttpQuery("maxItems")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          submissionStatus: S.optional(S.String).pipe(T.HttpQuery("submissionStatus")),
          runSettingId: S.optional(S.String).pipe(T.HttpQuery("runSettingId")),
          runId: S.optional(S.String).pipe(T.HttpQuery("runId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runBatch/{batchId}/run" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRunsInBatchRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          runSettingId: S.optional(S.String),
          runId: S.optional(S.String),
          runInternalUuid: S.optional(S.String),
          runArn: S.optional(S.String),
          submissionStatus: S.optional(S.String),
          submissionFailureReason: S.optional(S.String),
          submissionFailureMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "RunBatchListItem" });
    case 2:
      return S.Array(__S(241));
    case 3:
      return S.suspend(() =>
        S.Struct({ runs: S.optional(__S(242)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRunsInBatchResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/run/{id}/task" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRunTasksRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          status: S.optional(S.String),
          name: S.optional(S.String),
          cpus: S.optional(S.Number),
          cacheHit: S.optional(S.Boolean),
          cacheS3Uri: S.optional(S.String),
          memory: S.optional(S.Number),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          stopTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          gpus: S.optional(S.Number),
          instanceType: S.optional(S.String),
          uuid: S.optional(S.String),
        }),
      ).annotate({ identifier: "TaskListItem" });
    case 6:
      return S.Array(__S(245));
    case 7:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(246)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRunTasksResponse" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          createdAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          createdBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          status: S.optional(S.String),
          updatedAfter: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBefore: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SequenceStoreFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(248)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/sequencestores" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSequenceStoresRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          id: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fallbackLocation: S.optional(S.String),
          eTagAlgorithmFamily: S.optional(S.String),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SequenceStoreDetail" });
    case 3:
      return S.Array(__S(250));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), sequenceStores: __S(251) }),
      ).annotate({
        identifier: "ListSequenceStoresResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArns: S.optional(__S(4)),
          status: S.optional(__S(4)),
          type: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "Filter" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceOwner: S.String,
          filter: S.optional(__S(253)),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/shares" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSharesRequest" });
    case 7:
      return S.Array(__S(151));
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ shares: __S(255), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSharesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ tags: __S(19) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          ids: S.optional(__S(4)),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(165)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/import/variants" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVariantImportJobsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          destinationName: S.String,
          roleArn: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          runLeftNormalization: S.optional(S.Boolean),
          annotationFields: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "VariantImportJobItem" });
    case 5:
      return S.Array(__S(260));
    case 6:
      return S.suspend(() =>
        S.Struct({
          variantImportJobs: S.optional(__S(261)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListVariantImportJobsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          ids: S.optional(__S(4)),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          filter: S.optional(__S(3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/variantStores" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListVariantStoresRequest" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: __S(18),
          status: S.String,
          storeArn: S.String,
          name: S.String,
          description: S.String,
          sseConfig: __S(20),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          statusMessage: S.String,
          storeSizeBytes: S.Number,
        }),
      ).annotate({ identifier: "VariantStoreItem" });
    case 1:
      return S.Array(__S(264));
    case 2:
      return S.suspend(() =>
        S.Struct({ variantStores: S.optional(__S(265)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListVariantStoresResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          name: S.optional(S.String).pipe(T.HttpQuery("name")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/workflow" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkflowsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          name: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          digest: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          metadata: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "WorkflowListItem" });
    case 5:
      return S.Array(__S(268));
    case 6:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(269)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkflowsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String.pipe(T.HttpLabel("workflowId")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          workflowOwnerId: S.optional(S.String).pipe(T.HttpQuery("workflowOwnerId")),
          startingToken: S.optional(S.String).pipe(T.HttpQuery("startingToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workflow/{workflowId}/version" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkflowVersionsRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          workflowId: S.optional(S.String),
          versionName: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
          type: S.optional(S.String),
          digest: S.optional(S.String),
          creationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          metadata: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "WorkflowVersionListItem" });
    case 1:
      return S.Array(__S(272));
    case 2:
      return S.suspend(() =>
        S.Struct({ items: S.optional(__S(273)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWorkflowVersionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          s3AccessPointArn: S.String.pipe(T.HttpLabel("s3AccessPointArn")),
          s3AccessPolicy: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/s3accesspolicy/{s3AccessPointArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutS3AccessPolicyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          s3AccessPointArn: S.optional(S.String),
          storeId: S.optional(S.String),
          storeType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PutS3AccessPolicyResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ source: S.String })).annotate({
        identifier: "AnnotationImportItemSource",
      });
    case 6:
      return S.Array(__S(277));
    case 7:
      return S.suspend(() =>
        S.Struct({
          destinationName: S.String,
          roleArn: S.String,
          items: __S(278),
          versionName: S.optional(S.String),
          formatOptions: S.optional(__S(91)),
          runLeftNormalization: S.optional(S.Boolean),
          annotationFields: S.optional(__S(21)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/import/annotation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartAnnotationImportRequest",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "StartAnnotationImportResponse",
      });
    case 1:
      return S.Array(__S(17));
    case 2:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          clientToken: S.optional(S.String),
          sources: __S(281),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/activationjob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartReadSetActivationJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StartReadSetActivationJobResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ readSetId: S.String })).annotate({
        identifier: "ExportReadSet",
      });
    case 5:
      return S.Array(__S(284));
    case 6:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          destination: S.String,
          roleArn: S.String,
          clientToken: S.optional(S.String),
          sources: __S(285),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/exportjob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartReadSetExportJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          destination: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StartReadSetExportJobResponse",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sourceFiles: __S(115),
          sourceFileType: S.String,
          subjectId: S.String,
          sampleId: S.String,
          generatedFrom: S.optional(S.String),
          referenceArn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
        }),
      ).annotate({
        identifier: "StartReadSetImportJobSourceItem",
      });
    case 1:
      return S.Array(__S(288));
    case 2:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          roleArn: S.String,
          clientToken: S.optional(S.String),
          sources: __S(289),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sequencestore/{sequenceStoreId}/importjob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartReadSetImportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          sequenceStoreId: S.String,
          roleArn: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StartReadSetImportJobResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sourceFile: S.String,
          name: S.String,
          description: S.optional(S.String),
          tags: S.optional(__S(19)),
        }),
      ).annotate({
        identifier: "StartReferenceImportJobSourceItem",
      });
    case 5:
      return S.Array(__S(292));
    case 6:
      return S.suspend(() =>
        S.Struct({
          referenceStoreId: S.String.pipe(T.HttpLabel("referenceStoreId")),
          roleArn: S.String,
          clientToken: S.optional(S.String),
          sources: __S(293),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/referencestore/{referenceStoreId}/importjob" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartReferenceImportJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          referenceStoreId: S.String,
          roleArn: S.String,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StartReferenceImportJobResponse",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.optional(S.String),
          workflowType: S.optional(S.String),
          runId: S.optional(S.String),
          roleArn: S.String,
          name: S.optional(S.String),
          cacheId: S.optional(S.String),
          cacheBehavior: S.optional(S.String),
          runGroupId: S.optional(S.String),
          priority: S.optional(S.Number),
          parameters: S.optional(S.Any),
          storageCapacity: S.optional(S.Number),
          outputUri: S.String,
          logLevel: S.optional(S.String),
          tags: S.optional(__S(19)),
          requestId: S.String.pipe(T.IdempotencyToken()),
          retentionMode: S.optional(S.String),
          storageType: S.optional(S.String),
          workflowOwnerId: S.optional(S.String),
          workflowVersionName: S.optional(S.String),
          networkingMode: S.optional(S.String),
          scratchStorageMode: S.optional(S.String),
          configurationName: S.optional(S.String),
          sessionPolicy: S.optional(S.String),
          engineSettings: S.optional(S.Any),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/run" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartRunRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          id: S.optional(S.String),
          status: S.optional(S.String),
          tags: S.optional(__S(19)),
          uuid: S.optional(S.String),
          runOutputUri: S.optional(S.String),
          configuration: S.optional(__S(137)),
          networkingMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartRunResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          runSettingId: S.String,
          name: S.optional(S.String),
          outputUri: S.optional(S.String),
          priority: S.optional(S.Number),
          parameters: S.optional(S.Any),
          outputBucketOwnerId: S.optional(S.String),
          runTags: S.optional(__S(19)),
          engineSettings: S.optional(S.Any),
        }),
      ).annotate({ identifier: "InlineSetting" });
    case 3:
      return S.Array(__S(298));
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ inlineSettings: __S(299) }),
        /*@__PURE__*/ S.Struct({ s3UriSettings: S.String }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          batchName: S.optional(S.String),
          requestId: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(__S(19)),
          defaultRunSetting: __S(98),
          batchRunSettings: __S(300),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/runBatch" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartRunBatchRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          status: S.optional(S.String),
          uuid: S.optional(S.String),
          tags: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "StartRunBatchResponse" });
    case 7:
      return S.suspend(() => S.Struct({ source: S.String })).annotate({
        identifier: "VariantImportItemSource",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(303));
    case 1:
      return S.suspend(() =>
        S.Struct({
          destinationName: S.String,
          roleArn: S.String,
          items: __S(304),
          runLeftNormalization: S.optional(S.Boolean),
          annotationFields: S.optional(__S(21)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/import/variant" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartVariantImportRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(19) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(4).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/annotationStore/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAnnotationStoreRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: __S(18),
          status: S.String,
          name: S.String,
          description: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          storeOptions: S.optional(__S(24)),
          storeFormat: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateAnnotationStoreResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/annotationStore/{name}/version/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAnnotationStoreVersionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          storeId: S.String,
          id: S.String,
          status: S.String,
          name: S.String,
          versionName: S.String,
          description: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateAnnotationStoreVersionResponse",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cacheBehavior: S.optional(S.String),
          description: S.optional(S.String),
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/runCache/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateRunCacheRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
          maxCpus: S.optional(S.Number),
          maxRuns: S.optional(S.Number),
          maxDuration: S.optional(S.Number),
          maxGpus: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/runGroup/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateRunGroupRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          fallbackLocation: S.optional(S.String),
          propagatedSetLevelTags: S.optional(__S(4)),
          s3AccessConfig: S.optional(__S(44)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/sequencestore/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSequenceStoreRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          sseConfig: S.optional(__S(20)),
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          propagatedSetLevelTags: S.optional(__S(4)),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          fallbackLocation: S.optional(S.String),
          s3Access: S.optional(__S(46)),
          eTagAlgorithmFamily: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateSequenceStoreResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/variantStore/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateVariantStoreRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          reference: __S(18),
          status: S.String,
          name: S.String,
          description: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateVariantStoreResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          storageType: S.optional(S.String),
          storageCapacity: S.optional(S.Number),
          readmeMarkdown: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/workflow/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateWorkflowRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowId: S.String.pipe(T.HttpLabel("workflowId")),
          versionName: S.String.pipe(T.HttpLabel("versionName")),
          description: S.optional(S.String),
          storageType: S.optional(S.String),
          storageCapacity: S.optional(S.Number),
          readmeMarkdown: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workflow/{workflowId}/version/{versionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkflowVersionRequest",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sequenceStoreId: S.String.pipe(T.HttpLabel("sequenceStoreId")),
          uploadId: S.String.pipe(T.HttpLabel("uploadId")),
          partSource: S.String.pipe(T.HttpQuery("partSource")),
          partNumber: S.Number.pipe(T.HttpQuery("partNumber")),
          payload: T.StreamingInput.pipe(T.RequiresLength()).pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/sequencestore/{sequenceStoreId}/upload/{uploadId}/part",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UploadReadSetPartRequest" });
    case 1:
      return S.suspend(() => S.Struct({ checksum: S.String })).annotate({
        identifier: "UploadReadSetPartResponse",
      });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
    case 39:
      return __c39(i & 7);
    case 40:
      return __c40(i & 7);
  }
}
