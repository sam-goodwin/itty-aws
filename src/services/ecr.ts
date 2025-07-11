import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonEC2ContainerRegistry_V20150921 {
  batchCheckLayerAvailability(
    input: BatchCheckLayerAvailabilityRequest,
  ): Effect.Effect<
    BatchCheckLayerAvailabilityResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  batchDeleteImage(
    input: BatchDeleteImageRequest,
  ): Effect.Effect<
    BatchDeleteImageResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  batchGetImage(
    input: BatchGetImageRequest,
  ): Effect.Effect<
    BatchGetImageResponse,
    | InvalidParameterException
    | LimitExceededException
    | RepositoryNotFoundException
    | ServerException
    | UnableToGetUpstreamImageException
    | CommonAwsError
  >;
  batchGetRepositoryScanningConfiguration(
    input: BatchGetRepositoryScanningConfigurationRequest,
  ): Effect.Effect<
    BatchGetRepositoryScanningConfigurationResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  completeLayerUpload(
    input: CompleteLayerUploadRequest,
  ): Effect.Effect<
    CompleteLayerUploadResponse,
    | EmptyUploadException
    | InvalidLayerException
    | InvalidParameterException
    | KmsException
    | LayerAlreadyExistsException
    | LayerPartTooSmallException
    | RepositoryNotFoundException
    | ServerException
    | UploadNotFoundException
    | CommonAwsError
  >;
  createPullThroughCacheRule(
    input: CreatePullThroughCacheRuleRequest,
  ): Effect.Effect<
    CreatePullThroughCacheRuleResponse,
    | InvalidParameterException
    | LimitExceededException
    | PullThroughCacheRuleAlreadyExistsException
    | SecretNotFoundException
    | ServerException
    | UnableToAccessSecretException
    | UnableToDecryptSecretValueException
    | UnsupportedUpstreamRegistryException
    | ValidationException
    | CommonAwsError
  >;
  createRepository(
    input: CreateRepositoryRequest,
  ): Effect.Effect<
    CreateRepositoryResponse,
    | InvalidParameterException
    | InvalidTagParameterException
    | KmsException
    | LimitExceededException
    | RepositoryAlreadyExistsException
    | ServerException
    | TooManyTagsException
    | CommonAwsError
  >;
  createRepositoryCreationTemplate(
    input: CreateRepositoryCreationTemplateRequest,
  ): Effect.Effect<
    CreateRepositoryCreationTemplateResponse,
    | InvalidParameterException
    | LimitExceededException
    | ServerException
    | TemplateAlreadyExistsException
    | ValidationException
    | CommonAwsError
  >;
  deleteLifecyclePolicy(
    input: DeleteLifecyclePolicyRequest,
  ): Effect.Effect<
    DeleteLifecyclePolicyResponse,
    | InvalidParameterException
    | LifecyclePolicyNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  deletePullThroughCacheRule(
    input: DeletePullThroughCacheRuleRequest,
  ): Effect.Effect<
    DeletePullThroughCacheRuleResponse,
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  deleteRegistryPolicy(
    input: DeleteRegistryPolicyRequest,
  ): Effect.Effect<
    DeleteRegistryPolicyResponse,
    | InvalidParameterException
    | RegistryPolicyNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  deleteRepository(
    input: DeleteRepositoryRequest,
  ): Effect.Effect<
    DeleteRepositoryResponse,
    | InvalidParameterException
    | KmsException
    | RepositoryNotEmptyException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deleteRepositoryCreationTemplate(
    input: DeleteRepositoryCreationTemplateRequest,
  ): Effect.Effect<
    DeleteRepositoryCreationTemplateResponse,
    | InvalidParameterException
    | ServerException
    | TemplateNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  deleteRepositoryPolicy(
    input: DeleteRepositoryPolicyRequest,
  ): Effect.Effect<
    DeleteRepositoryPolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeImageReplicationStatus(
    input: DescribeImageReplicationStatusRequest,
  ): Effect.Effect<
    DescribeImageReplicationStatusResponse,
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  describeImages(
    input: DescribeImagesRequest,
  ): Effect.Effect<
    DescribeImagesResponse,
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeImageScanFindings(
    input: DescribeImageScanFindingsRequest,
  ): Effect.Effect<
    DescribeImageScanFindingsResponse,
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ScanNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  describePullThroughCacheRules(
    input: DescribePullThroughCacheRulesRequest,
  ): Effect.Effect<
    DescribePullThroughCacheRulesResponse,
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  describeRegistry(
    input: DescribeRegistryRequest,
  ): Effect.Effect<
    DescribeRegistryResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  describeRepositories(
    input: DescribeRepositoriesRequest,
  ): Effect.Effect<
    DescribeRepositoriesResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeRepositoryCreationTemplates(
    input: DescribeRepositoryCreationTemplatesRequest,
  ): Effect.Effect<
    DescribeRepositoryCreationTemplatesResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  getAccountSetting(
    input: GetAccountSettingRequest,
  ): Effect.Effect<
    GetAccountSettingResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  getAuthorizationToken(
    input: GetAuthorizationTokenRequest,
  ): Effect.Effect<
    GetAuthorizationTokenResponse,
    InvalidParameterException | ServerException | CommonAwsError
  >;
  getDownloadUrlForLayer(
    input: GetDownloadUrlForLayerRequest,
  ): Effect.Effect<
    GetDownloadUrlForLayerResponse,
    | InvalidParameterException
    | LayerInaccessibleException
    | LayersNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnableToGetUpstreamLayerException
    | CommonAwsError
  >;
  getLifecyclePolicy(
    input: GetLifecyclePolicyRequest,
  ): Effect.Effect<
    GetLifecyclePolicyResponse,
    | InvalidParameterException
    | LifecyclePolicyNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  getLifecyclePolicyPreview(
    input: GetLifecyclePolicyPreviewRequest,
  ): Effect.Effect<
    GetLifecyclePolicyPreviewResponse,
    | InvalidParameterException
    | LifecyclePolicyPreviewNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  getRegistryPolicy(
    input: GetRegistryPolicyRequest,
  ): Effect.Effect<
    GetRegistryPolicyResponse,
    | InvalidParameterException
    | RegistryPolicyNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  getRegistryScanningConfiguration(
    input: GetRegistryScanningConfigurationRequest,
  ): Effect.Effect<
    GetRegistryScanningConfigurationResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  getRepositoryPolicy(
    input: GetRepositoryPolicyRequest,
  ): Effect.Effect<
    GetRepositoryPolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | CommonAwsError
  >;
  initiateLayerUpload(
    input: InitiateLayerUploadRequest,
  ): Effect.Effect<
    InitiateLayerUploadResponse,
    | InvalidParameterException
    | KmsException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listImages(
    input: ListImagesRequest,
  ): Effect.Effect<
    ListImagesResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  putAccountSetting(
    input: PutAccountSettingRequest,
  ): Effect.Effect<
    PutAccountSettingResponse,
    | InvalidParameterException
    | LimitExceededException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  putImage(
    input: PutImageRequest,
  ): Effect.Effect<
    PutImageResponse,
    | ImageAlreadyExistsException
    | ImageDigestDoesNotMatchException
    | ImageTagAlreadyExistsException
    | InvalidParameterException
    | KmsException
    | LayersNotFoundException
    | LimitExceededException
    | ReferencedImagesNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  putImageScanningConfiguration(
    input: PutImageScanningConfigurationRequest,
  ): Effect.Effect<
    PutImageScanningConfigurationResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  putImageTagMutability(
    input: PutImageTagMutabilityRequest,
  ): Effect.Effect<
    PutImageTagMutabilityResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  putLifecyclePolicy(
    input: PutLifecyclePolicyRequest,
  ): Effect.Effect<
    PutLifecyclePolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  putRegistryPolicy(
    input: PutRegistryPolicyRequest,
  ): Effect.Effect<
    PutRegistryPolicyResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  putRegistryScanningConfiguration(
    input: PutRegistryScanningConfigurationRequest,
  ): Effect.Effect<
    PutRegistryScanningConfigurationResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  putReplicationConfiguration(
    input: PutReplicationConfigurationRequest,
  ): Effect.Effect<
    PutReplicationConfigurationResponse,
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  setRepositoryPolicy(
    input: SetRepositoryPolicyRequest,
  ): Effect.Effect<
    SetRepositoryPolicyResponse,
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError
  >;
  startImageScan(
    input: StartImageScanRequest,
  ): Effect.Effect<
    StartImageScanResponse,
    | ImageNotFoundException
    | InvalidParameterException
    | LimitExceededException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedImageTypeException
    | ValidationException
    | CommonAwsError
  >;
  startLifecyclePolicyPreview(
    input: StartLifecyclePolicyPreviewRequest,
  ): Effect.Effect<
    StartLifecyclePolicyPreviewResponse,
    | InvalidParameterException
    | LifecyclePolicyNotFoundException
    | LifecyclePolicyPreviewInProgressException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | CommonAwsError
  >;
  updatePullThroughCacheRule(
    input: UpdatePullThroughCacheRuleRequest,
  ): Effect.Effect<
    UpdatePullThroughCacheRuleResponse,
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | SecretNotFoundException
    | ServerException
    | UnableToAccessSecretException
    | UnableToDecryptSecretValueException
    | ValidationException
    | CommonAwsError
  >;
  updateRepositoryCreationTemplate(
    input: UpdateRepositoryCreationTemplateRequest,
  ): Effect.Effect<
    UpdateRepositoryCreationTemplateResponse,
    | InvalidParameterException
    | ServerException
    | TemplateNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  uploadLayerPart(
    input: UploadLayerPartRequest,
  ): Effect.Effect<
    UploadLayerPartResponse,
    | InvalidLayerPartException
    | InvalidParameterException
    | KmsException
    | LimitExceededException
    | RepositoryNotFoundException
    | ServerException
    | UploadNotFoundException
    | CommonAwsError
  >;
  validatePullThroughCacheRule(
    input: ValidatePullThroughCacheRuleRequest,
  ): Effect.Effect<
    ValidatePullThroughCacheRuleResponse,
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError
  >;
}

export type Ecr = AmazonEC2ContainerRegistry_V20150921;

export type AccountSettingName = string;

export type AccountSettingValue = string;

export type Arch = string;

export type Arn = string;

export interface Attribute {
  key: string;
  value?: string;
}
export type AttributeKey = string;

export type AttributeList = Array<Attribute>;
export type AttributeValue = string;

export type Author = string;

export interface AuthorizationData {
  authorizationToken?: string;
  expiresAt?: Date | string;
  proxyEndpoint?: string;
}
export type AuthorizationDataList = Array<AuthorizationData>;
export interface AwsEcrContainerImageDetails {
  architecture?: string;
  author?: string;
  imageHash?: string;
  imageTags?: Array<string>;
  platform?: string;
  pushedAt?: Date | string;
  lastInUseAt?: Date | string;
  inUseCount?: number;
  registry?: string;
  repositoryName?: string;
}
export type Base64 = string;

export type BaseScore = number;

export interface BatchCheckLayerAvailabilityRequest {
  registryId?: string;
  repositoryName: string;
  layerDigests: Array<string>;
}
export interface BatchCheckLayerAvailabilityResponse {
  layers?: Array<Layer>;
  failures?: Array<LayerFailure>;
}
export interface BatchDeleteImageRequest {
  registryId?: string;
  repositoryName: string;
  imageIds: Array<ImageIdentifier>;
}
export interface BatchDeleteImageResponse {
  imageIds?: Array<ImageIdentifier>;
  failures?: Array<ImageFailure>;
}
export type BatchedOperationLayerDigest = string;

export type BatchedOperationLayerDigestList = Array<string>;
export interface BatchGetImageRequest {
  registryId?: string;
  repositoryName: string;
  imageIds: Array<ImageIdentifier>;
  acceptedMediaTypes?: Array<string>;
}
export interface BatchGetImageResponse {
  images?: Array<Image>;
  failures?: Array<ImageFailure>;
}
export interface BatchGetRepositoryScanningConfigurationRequest {
  repositoryNames: Array<string>;
}
export interface BatchGetRepositoryScanningConfigurationResponse {
  scanningConfigurations?: Array<RepositoryScanningConfiguration>;
  failures?: Array<RepositoryScanningConfigurationFailure>;
}
export interface CompleteLayerUploadRequest {
  registryId?: string;
  repositoryName: string;
  uploadId: string;
  layerDigests: Array<string>;
}
export interface CompleteLayerUploadResponse {
  registryId?: string;
  repositoryName?: string;
  uploadId?: string;
  layerDigest?: string;
}
export interface CreatePullThroughCacheRuleRequest {
  ecrRepositoryPrefix: string;
  upstreamRegistryUrl: string;
  registryId?: string;
  upstreamRegistry?: UpstreamRegistry;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export interface CreatePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  upstreamRegistryUrl?: string;
  createdAt?: Date | string;
  registryId?: string;
  upstreamRegistry?: UpstreamRegistry;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export interface CreateRepositoryCreationTemplateRequest {
  prefix: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate;
  resourceTags?: Array<Tag>;
  imageTagMutability?: ImageTagMutability;
  repositoryPolicy?: string;
  lifecyclePolicy?: string;
  appliedFor: Array<RCTAppliedFor>;
  customRoleArn?: string;
}
export interface CreateRepositoryCreationTemplateResponse {
  registryId?: string;
  repositoryCreationTemplate?: RepositoryCreationTemplate;
}
export interface CreateRepositoryRequest {
  registryId?: string;
  repositoryName: string;
  tags?: Array<Tag>;
  imageTagMutability?: ImageTagMutability;
  imageScanningConfiguration?: ImageScanningConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export interface CreateRepositoryResponse {
  repository?: Repository;
}
export type CreationTimestamp = Date | string;

export type CredentialArn = string;

export type CustomRoleArn = string;

export interface CvssScore {
  baseScore?: number;
  scoringVector?: string;
  source?: string;
  version?: string;
}
export interface CvssScoreAdjustment {
  metric?: string;
  reason?: string;
}
export type CvssScoreAdjustmentList = Array<CvssScoreAdjustment>;
export interface CvssScoreDetails {
  adjustments?: Array<CvssScoreAdjustment>;
  score?: number;
  scoreSource?: string;
  scoringVector?: string;
  version?: string;
}
export type CvssScoreList = Array<CvssScore>;
export interface DeleteLifecyclePolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface DeleteLifecyclePolicyResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  lastEvaluatedAt?: Date | string;
}
export interface DeletePullThroughCacheRuleRequest {
  ecrRepositoryPrefix: string;
  registryId?: string;
}
export interface DeletePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  upstreamRegistryUrl?: string;
  createdAt?: Date | string;
  registryId?: string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export interface DeleteRegistryPolicyRequest {}
export interface DeleteRegistryPolicyResponse {
  registryId?: string;
  policyText?: string;
}
export interface DeleteRepositoryCreationTemplateRequest {
  prefix: string;
}
export interface DeleteRepositoryCreationTemplateResponse {
  registryId?: string;
  repositoryCreationTemplate?: RepositoryCreationTemplate;
}
export interface DeleteRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface DeleteRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface DeleteRepositoryRequest {
  registryId?: string;
  repositoryName: string;
  force?: boolean;
}
export interface DeleteRepositoryResponse {
  repository?: Repository;
}
export interface DescribeImageReplicationStatusRequest {
  repositoryName: string;
  imageId: ImageIdentifier;
  registryId?: string;
}
export interface DescribeImageReplicationStatusResponse {
  repositoryName?: string;
  imageId?: ImageIdentifier;
  replicationStatuses?: Array<ImageReplicationStatus>;
}
export interface DescribeImageScanFindingsRequest {
  registryId?: string;
  repositoryName: string;
  imageId: ImageIdentifier;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeImageScanFindingsResponse {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageScanStatus?: ImageScanStatus;
  imageScanFindings?: ImageScanFindings;
  nextToken?: string;
}
export interface DescribeImagesFilter {
  tagStatus?: TagStatus;
}
export interface DescribeImagesRequest {
  registryId?: string;
  repositoryName: string;
  imageIds?: Array<ImageIdentifier>;
  nextToken?: string;
  maxResults?: number;
  filter?: DescribeImagesFilter;
}
export interface DescribeImagesResponse {
  imageDetails?: Array<ImageDetail>;
  nextToken?: string;
}
export interface DescribePullThroughCacheRulesRequest {
  registryId?: string;
  ecrRepositoryPrefixes?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribePullThroughCacheRulesResponse {
  pullThroughCacheRules?: Array<PullThroughCacheRule>;
  nextToken?: string;
}
export interface DescribeRegistryRequest {}
export interface DescribeRegistryResponse {
  registryId?: string;
  replicationConfiguration?: ReplicationConfiguration;
}
export interface DescribeRepositoriesRequest {
  registryId?: string;
  repositoryNames?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeRepositoriesResponse {
  repositories?: Array<Repository>;
  nextToken?: string;
}
export interface DescribeRepositoryCreationTemplatesRequest {
  prefixes?: Array<string>;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeRepositoryCreationTemplatesResponse {
  registryId?: string;
  repositoryCreationTemplates?: Array<RepositoryCreationTemplate>;
  nextToken?: string;
}
export declare class EmptyUploadException extends EffectData.TaggedError(
  "EmptyUploadException",
)<{
  readonly message?: string;
}> {}
export interface EncryptionConfiguration {
  encryptionType: EncryptionType;
  kmsKey?: string;
}
export interface EncryptionConfigurationForRepositoryCreationTemplate {
  encryptionType: EncryptionType;
  kmsKey?: string;
}
export type EncryptionType = "AES256" | "KMS" | "KMS_DSSE";
export interface EnhancedImageScanFinding {
  awsAccountId?: string;
  description?: string;
  findingArn?: string;
  firstObservedAt?: Date | string;
  lastObservedAt?: Date | string;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  remediation?: Remediation;
  resources?: Array<Resource>;
  score?: number;
  scoreDetails?: ScoreDetails;
  severity?: string;
  status?: string;
  title?: string;
  type?: string;
  updatedAt?: Date | string;
  fixAvailable?: string;
  exploitAvailable?: string;
}
export type EnhancedImageScanFindingList = Array<EnhancedImageScanFinding>;
export type Epoch = number;

export type EvaluationTimestamp = Date | string;

export type ExceptionMessage = string;

export type ExpirationTimestamp = Date | string;

export type ExploitAvailable = string;

export type FilePath = string;

export type FindingArn = string;

export type FindingDescription = string;

export type FindingName = string;

export type FindingSeverity =
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | "UNDEFINED";
export type FindingSeverityCounts = Record<FindingSeverity, number>;
export type FixAvailable = string;

export type FixedInVersion = string;

export type ForceFlag = boolean;

export interface GetAccountSettingRequest {
  name: string;
}
export interface GetAccountSettingResponse {
  name?: string;
  value?: string;
}
export type GetAuthorizationTokenRegistryIdList = Array<string>;
export interface GetAuthorizationTokenRequest {
  registryIds?: Array<string>;
}
export interface GetAuthorizationTokenResponse {
  authorizationData?: Array<AuthorizationData>;
}
export interface GetDownloadUrlForLayerRequest {
  registryId?: string;
  repositoryName: string;
  layerDigest: string;
}
export interface GetDownloadUrlForLayerResponse {
  downloadUrl?: string;
  layerDigest?: string;
}
export interface GetLifecyclePolicyPreviewRequest {
  registryId?: string;
  repositoryName: string;
  imageIds?: Array<ImageIdentifier>;
  nextToken?: string;
  maxResults?: number;
  filter?: LifecyclePolicyPreviewFilter;
}
export interface GetLifecyclePolicyPreviewResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  status?: LifecyclePolicyPreviewStatus;
  nextToken?: string;
  previewResults?: Array<LifecyclePolicyPreviewResult>;
  summary?: LifecyclePolicyPreviewSummary;
}
export interface GetLifecyclePolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface GetLifecyclePolicyResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  lastEvaluatedAt?: Date | string;
}
export interface GetRegistryPolicyRequest {}
export interface GetRegistryPolicyResponse {
  registryId?: string;
  policyText?: string;
}
export interface GetRegistryScanningConfigurationRequest {}
export interface GetRegistryScanningConfigurationResponse {
  registryId?: string;
  scanningConfiguration?: RegistryScanningConfiguration;
}
export interface GetRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
}
export interface GetRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export interface Image {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageManifest?: string;
  imageManifestMediaType?: string;
}
export type ImageActionType = "EXPIRE";
export declare class ImageAlreadyExistsException extends EffectData.TaggedError(
  "ImageAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ImageCount = number;

export interface ImageDetail {
  registryId?: string;
  repositoryName?: string;
  imageDigest?: string;
  imageTags?: Array<string>;
  imageSizeInBytes?: number;
  imagePushedAt?: Date | string;
  imageScanStatus?: ImageScanStatus;
  imageScanFindingsSummary?: ImageScanFindingsSummary;
  imageManifestMediaType?: string;
  artifactMediaType?: string;
  lastRecordedPullTime?: Date | string;
}
export type ImageDetailList = Array<ImageDetail>;
export type ImageDigest = string;

export declare class ImageDigestDoesNotMatchException extends EffectData.TaggedError(
  "ImageDigestDoesNotMatchException",
)<{
  readonly message?: string;
}> {}
export interface ImageFailure {
  imageId?: ImageIdentifier;
  failureCode?: ImageFailureCode;
  failureReason?: string;
}
export type ImageFailureCode =
  | "InvalidImageDigest"
  | "InvalidImageTag"
  | "ImageTagDoesNotMatchDigest"
  | "ImageNotFound"
  | "MissingDigestAndTag"
  | "ImageReferencedByManifestList"
  | "KmsError"
  | "UpstreamAccessDenied"
  | "UpstreamTooManyRequests"
  | "UpstreamUnavailable";
export type ImageFailureList = Array<ImageFailure>;
export type ImageFailureReason = string;

export interface ImageIdentifier {
  imageDigest?: string;
  imageTag?: string;
}
export type ImageIdentifierList = Array<ImageIdentifier>;
export type ImageList = Array<Image>;
export type ImageManifest = string;

export declare class ImageNotFoundException extends EffectData.TaggedError(
  "ImageNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface ImageReplicationStatus {
  region?: string;
  registryId?: string;
  status?: ReplicationStatus;
  failureCode?: string;
}
export type ImageReplicationStatusList = Array<ImageReplicationStatus>;
export interface ImageScanFinding {
  name?: string;
  description?: string;
  uri?: string;
  severity?: FindingSeverity;
  attributes?: Array<Attribute>;
}
export type ImageScanFindingList = Array<ImageScanFinding>;
export interface ImageScanFindings {
  imageScanCompletedAt?: Date | string;
  vulnerabilitySourceUpdatedAt?: Date | string;
  findingSeverityCounts?: Record<FindingSeverity, number>;
  findings?: Array<ImageScanFinding>;
  enhancedFindings?: Array<EnhancedImageScanFinding>;
}
export interface ImageScanFindingsSummary {
  imageScanCompletedAt?: Date | string;
  vulnerabilitySourceUpdatedAt?: Date | string;
  findingSeverityCounts?: Record<FindingSeverity, number>;
}
export interface ImageScanningConfiguration {
  scanOnPush?: boolean;
}
export interface ImageScanStatus {
  status?: ScanStatus;
  description?: string;
}
export type ImageSizeInBytes = number;

export type ImageTag = string;

export declare class ImageTagAlreadyExistsException extends EffectData.TaggedError(
  "ImageTagAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ImageTagList = Array<string>;
export type ImageTagMutability = "MUTABLE" | "IMMUTABLE";
export type ImageTagsList = Array<string>;
export interface InitiateLayerUploadRequest {
  registryId?: string;
  repositoryName: string;
}
export interface InitiateLayerUploadResponse {
  uploadId?: string;
  partSize?: number;
}
export type InUseCount = number;

export declare class InvalidLayerException extends EffectData.TaggedError(
  "InvalidLayerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidLayerPartException extends EffectData.TaggedError(
  "InvalidLayerPartException",
)<{
  readonly registryId?: string;
  readonly repositoryName?: string;
  readonly uploadId?: string;
  readonly lastValidByteReceived?: number;
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidTagParameterException extends EffectData.TaggedError(
  "InvalidTagParameterException",
)<{
  readonly message?: string;
}> {}
export type IsPTCRuleValid = boolean;

export type KmsError = string;

export declare class KmsException extends EffectData.TaggedError(
  "KmsException",
)<{
  readonly message?: string;
  readonly kmsError?: string;
}> {}
export type KmsKey = string;

export type KmsKeyForRepositoryCreationTemplate = string;

export interface Layer {
  layerDigest?: string;
  layerAvailability?: LayerAvailability;
  layerSize?: number;
  mediaType?: string;
}
export declare class LayerAlreadyExistsException extends EffectData.TaggedError(
  "LayerAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type LayerAvailability = "AVAILABLE" | "UNAVAILABLE";
export type LayerDigest = string;

export type LayerDigestList = Array<string>;
export interface LayerFailure {
  layerDigest?: string;
  failureCode?: LayerFailureCode;
  failureReason?: string;
}
export type LayerFailureCode = "InvalidLayerDigest" | "MissingLayerDigest";
export type LayerFailureList = Array<LayerFailure>;
export type LayerFailureReason = string;

export declare class LayerInaccessibleException extends EffectData.TaggedError(
  "LayerInaccessibleException",
)<{
  readonly message?: string;
}> {}
export type LayerList = Array<Layer>;
export type LayerPartBlob = Uint8Array | string;

export declare class LayerPartTooSmallException extends EffectData.TaggedError(
  "LayerPartTooSmallException",
)<{
  readonly message?: string;
}> {}
export type LayerSizeInBytes = number;

export declare class LayersNotFoundException extends EffectData.TaggedError(
  "LayersNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class LifecyclePolicyNotFoundException extends EffectData.TaggedError(
  "LifecyclePolicyNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface LifecyclePolicyPreviewFilter {
  tagStatus?: TagStatus;
}
export declare class LifecyclePolicyPreviewInProgressException extends EffectData.TaggedError(
  "LifecyclePolicyPreviewInProgressException",
)<{
  readonly message?: string;
}> {}
export declare class LifecyclePolicyPreviewNotFoundException extends EffectData.TaggedError(
  "LifecyclePolicyPreviewNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface LifecyclePolicyPreviewResult {
  imageTags?: Array<string>;
  imageDigest?: string;
  imagePushedAt?: Date | string;
  action?: LifecyclePolicyRuleAction;
  appliedRulePriority?: number;
}
export type LifecyclePolicyPreviewResultList =
  Array<LifecyclePolicyPreviewResult>;
export type LifecyclePolicyPreviewStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "EXPIRED"
  | "FAILED";
export interface LifecyclePolicyPreviewSummary {
  expiringImageTotalCount?: number;
}
export interface LifecyclePolicyRuleAction {
  type?: ImageActionType;
}
export type LifecyclePolicyRulePriority = number;

export type LifecyclePolicyText = string;

export type LifecyclePolicyTextForRepositoryCreationTemplate = string;

export type LifecyclePreviewMaxResults = number;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListImagesFilter {
  tagStatus?: TagStatus;
}
export interface ListImagesRequest {
  registryId?: string;
  repositoryName: string;
  nextToken?: string;
  maxResults?: number;
  filter?: ListImagesFilter;
}
export interface ListImagesResponse {
  imageIds?: Array<ImageIdentifier>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export type MaxResults = number;

export type MediaType = string;

export type MediaTypeList = Array<string>;
export type Metric = string;

export type NextToken = string;

export type PackageManager = string;

export interface PackageVulnerabilityDetails {
  cvss?: Array<CvssScore>;
  referenceUrls?: Array<string>;
  relatedVulnerabilities?: Array<string>;
  source?: string;
  sourceUrl?: string;
  vendorCreatedAt?: Date | string;
  vendorSeverity?: string;
  vendorUpdatedAt?: Date | string;
  vulnerabilityId?: string;
  vulnerablePackages?: Array<VulnerablePackage>;
}
export type PartSize = number;

export type Platform = string;

export type Prefix = string;

export type PrefixList = Array<string>;
export type ProxyEndpoint = string;

export type PTCValidateFailure = string;

export interface PullThroughCacheRule {
  ecrRepositoryPrefix?: string;
  upstreamRegistryUrl?: string;
  createdAt?: Date | string;
  registryId?: string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
  upstreamRegistry?: UpstreamRegistry;
  updatedAt?: Date | string;
}
export declare class PullThroughCacheRuleAlreadyExistsException extends EffectData.TaggedError(
  "PullThroughCacheRuleAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type PullThroughCacheRuleList = Array<PullThroughCacheRule>;
export declare class PullThroughCacheRuleNotFoundException extends EffectData.TaggedError(
  "PullThroughCacheRuleNotFoundException",
)<{
  readonly message?: string;
}> {}
export type PullThroughCacheRuleRepositoryPrefix = string;

export type PullThroughCacheRuleRepositoryPrefixList = Array<string>;
export type PushTimestamp = Date | string;

export interface PutAccountSettingRequest {
  name: string;
  value: string;
}
export interface PutAccountSettingResponse {
  name?: string;
  value?: string;
}
export interface PutImageRequest {
  registryId?: string;
  repositoryName: string;
  imageManifest: string;
  imageManifestMediaType?: string;
  imageTag?: string;
  imageDigest?: string;
}
export interface PutImageResponse {
  image?: Image;
}
export interface PutImageScanningConfigurationRequest {
  registryId?: string;
  repositoryName: string;
  imageScanningConfiguration: ImageScanningConfiguration;
}
export interface PutImageScanningConfigurationResponse {
  registryId?: string;
  repositoryName?: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
}
export interface PutImageTagMutabilityRequest {
  registryId?: string;
  repositoryName: string;
  imageTagMutability: ImageTagMutability;
}
export interface PutImageTagMutabilityResponse {
  registryId?: string;
  repositoryName?: string;
  imageTagMutability?: ImageTagMutability;
}
export interface PutLifecyclePolicyRequest {
  registryId?: string;
  repositoryName: string;
  lifecyclePolicyText: string;
}
export interface PutLifecyclePolicyResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
}
export interface PutRegistryPolicyRequest {
  policyText: string;
}
export interface PutRegistryPolicyResponse {
  registryId?: string;
  policyText?: string;
}
export interface PutRegistryScanningConfigurationRequest {
  scanType?: ScanType;
  rules?: Array<RegistryScanningRule>;
}
export interface PutRegistryScanningConfigurationResponse {
  registryScanningConfiguration?: RegistryScanningConfiguration;
}
export interface PutReplicationConfigurationRequest {
  replicationConfiguration: ReplicationConfiguration;
}
export interface PutReplicationConfigurationResponse {
  replicationConfiguration?: ReplicationConfiguration;
}
export type RCTAppliedFor = "REPLICATION" | "PULL_THROUGH_CACHE";
export type RCTAppliedForList = Array<RCTAppliedFor>;
export type Reason = string;

export interface Recommendation {
  url?: string;
  text?: string;
}
export type RecommendationText = string;

export type RecordedPullTimestamp = Date | string;

export declare class ReferencedImagesNotFoundException extends EffectData.TaggedError(
  "ReferencedImagesNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ReferenceUrlsList = Array<string>;
export type Region = string;

export type RegistryId = string;

export declare class RegistryPolicyNotFoundException extends EffectData.TaggedError(
  "RegistryPolicyNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RegistryPolicyText = string;

export interface RegistryScanningConfiguration {
  scanType?: ScanType;
  rules?: Array<RegistryScanningRule>;
}
export interface RegistryScanningRule {
  scanFrequency: ScanFrequency;
  repositoryFilters: Array<ScanningRepositoryFilter>;
}
export type RegistryScanningRuleList = Array<RegistryScanningRule>;
export type RelatedVulnerabilitiesList = Array<string>;
export type RelatedVulnerability = string;

export type Release = string;

export interface Remediation {
  recommendation?: Recommendation;
}
export interface ReplicationConfiguration {
  rules: Array<ReplicationRule>;
}
export interface ReplicationDestination {
  region: string;
  registryId: string;
}
export type ReplicationDestinationList = Array<ReplicationDestination>;
export type ReplicationError = string;

export interface ReplicationRule {
  destinations: Array<ReplicationDestination>;
  repositoryFilters?: Array<RepositoryFilter>;
}
export type ReplicationRuleList = Array<ReplicationRule>;
export type ReplicationStatus = "IN_PROGRESS" | "COMPLETE" | "FAILED";
export interface Repository {
  repositoryArn?: string;
  registryId?: string;
  repositoryName?: string;
  repositoryUri?: string;
  createdAt?: Date | string;
  imageTagMutability?: ImageTagMutability;
  imageScanningConfiguration?: ImageScanningConfiguration;
  encryptionConfiguration?: EncryptionConfiguration;
}
export declare class RepositoryAlreadyExistsException extends EffectData.TaggedError(
  "RepositoryAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export interface RepositoryCreationTemplate {
  prefix?: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate;
  resourceTags?: Array<Tag>;
  imageTagMutability?: ImageTagMutability;
  repositoryPolicy?: string;
  lifecyclePolicy?: string;
  appliedFor?: Array<RCTAppliedFor>;
  customRoleArn?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export type RepositoryCreationTemplateList = Array<RepositoryCreationTemplate>;
export interface RepositoryFilter {
  filter: string;
  filterType: RepositoryFilterType;
}
export type RepositoryFilterList = Array<RepositoryFilter>;
export type RepositoryFilterType = "PREFIX_MATCH";
export type RepositoryFilterValue = string;

export type RepositoryList = Array<Repository>;
export type RepositoryName = string;

export type RepositoryNameList = Array<string>;
export declare class RepositoryNotEmptyException extends EffectData.TaggedError(
  "RepositoryNotEmptyException",
)<{
  readonly message?: string;
}> {}
export declare class RepositoryNotFoundException extends EffectData.TaggedError(
  "RepositoryNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class RepositoryPolicyNotFoundException extends EffectData.TaggedError(
  "RepositoryPolicyNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RepositoryPolicyText = string;

export interface RepositoryScanningConfiguration {
  repositoryArn?: string;
  repositoryName?: string;
  scanOnPush?: boolean;
  scanFrequency?: ScanFrequency;
  appliedScanFilters?: Array<ScanningRepositoryFilter>;
}
export interface RepositoryScanningConfigurationFailure {
  repositoryName?: string;
  failureCode?: ScanningConfigurationFailureCode;
  failureReason?: string;
}
export type RepositoryScanningConfigurationFailureList =
  Array<RepositoryScanningConfigurationFailure>;
export type RepositoryScanningConfigurationList =
  Array<RepositoryScanningConfiguration>;
export type RepositoryTemplateDescription = string;

export interface Resource {
  details?: ResourceDetails;
  id?: string;
  tags?: Record<string, string>;
  type?: string;
}
export interface ResourceDetails {
  awsEcrContainerImage?: AwsEcrContainerImageDetails;
}
export type ResourceId = string;

export type ResourceList = Array<Resource>;
export type ScanFrequency = "SCAN_ON_PUSH" | "CONTINUOUS_SCAN" | "MANUAL";
export type ScanningConfigurationFailureCode = "REPOSITORY_NOT_FOUND";
export type ScanningConfigurationFailureReason = string;

export type ScanningConfigurationRepositoryNameList = Array<string>;
export interface ScanningRepositoryFilter {
  filter: string;
  filterType: ScanningRepositoryFilterType;
}
export type ScanningRepositoryFilterList = Array<ScanningRepositoryFilter>;
export type ScanningRepositoryFilterType = "WILDCARD";
export type ScanningRepositoryFilterValue = string;

export declare class ScanNotFoundException extends EffectData.TaggedError(
  "ScanNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ScanOnPushFlag = boolean;

export type ScanStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "UNSUPPORTED_IMAGE"
  | "ACTIVE"
  | "PENDING"
  | "SCAN_ELIGIBILITY_EXPIRED"
  | "FINDINGS_UNAVAILABLE"
  | "LIMIT_EXCEEDED";
export type ScanStatusDescription = string;

export type ScanTimestamp = Date | string;

export type ScanType = "BASIC" | "ENHANCED";
export type Score = number;

export interface ScoreDetails {
  cvss?: CvssScoreDetails;
}
export type ScoringVector = string;

export declare class SecretNotFoundException extends EffectData.TaggedError(
  "SecretNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ServerException extends EffectData.TaggedError(
  "ServerException",
)<{
  readonly message?: string;
}> {}
export interface SetRepositoryPolicyRequest {
  registryId?: string;
  repositoryName: string;
  policyText: string;
  force?: boolean;
}
export interface SetRepositoryPolicyResponse {
  registryId?: string;
  repositoryName?: string;
  policyText?: string;
}
export type Severity = string;

export type SeverityCount = number;

export type Source = string;

export type SourceLayerHash = string;

export interface StartImageScanRequest {
  registryId?: string;
  repositoryName: string;
  imageId: ImageIdentifier;
}
export interface StartImageScanResponse {
  registryId?: string;
  repositoryName?: string;
  imageId?: ImageIdentifier;
  imageScanStatus?: ImageScanStatus;
}
export interface StartLifecyclePolicyPreviewRequest {
  registryId?: string;
  repositoryName: string;
  lifecyclePolicyText?: string;
}
export interface StartLifecyclePolicyPreviewResponse {
  registryId?: string;
  repositoryName?: string;
  lifecyclePolicyText?: string;
  status?: LifecyclePolicyPreviewStatus;
}
export type Status = string;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagStatus = "TAGGED" | "UNTAGGED" | "ANY";
export type TagValue = string;

export declare class TemplateAlreadyExistsException extends EffectData.TaggedError(
  "TemplateAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class TemplateNotFoundException extends EffectData.TaggedError(
  "TemplateNotFoundException",
)<{
  readonly message?: string;
}> {}
export type Title = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export type Type = string;

export declare class UnableToAccessSecretException extends EffectData.TaggedError(
  "UnableToAccessSecretException",
)<{
  readonly message?: string;
}> {}
export declare class UnableToDecryptSecretValueException extends EffectData.TaggedError(
  "UnableToDecryptSecretValueException",
)<{
  readonly message?: string;
}> {}
export declare class UnableToGetUpstreamImageException extends EffectData.TaggedError(
  "UnableToGetUpstreamImageException",
)<{
  readonly message?: string;
}> {}
export declare class UnableToGetUpstreamLayerException extends EffectData.TaggedError(
  "UnableToGetUpstreamLayerException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedImageTypeException extends EffectData.TaggedError(
  "UnsupportedImageTypeException",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedUpstreamRegistryException extends EffectData.TaggedError(
  "UnsupportedUpstreamRegistryException",
)<{
  readonly message?: string;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export type UpdatedTimestamp = Date | string;

export interface UpdatePullThroughCacheRuleRequest {
  registryId?: string;
  ecrRepositoryPrefix: string;
  credentialArn?: string;
  customRoleArn?: string;
}
export interface UpdatePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  registryId?: string;
  updatedAt?: Date | string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
}
export interface UpdateRepositoryCreationTemplateRequest {
  prefix: string;
  description?: string;
  encryptionConfiguration?: EncryptionConfigurationForRepositoryCreationTemplate;
  resourceTags?: Array<Tag>;
  imageTagMutability?: ImageTagMutability;
  repositoryPolicy?: string;
  lifecyclePolicy?: string;
  appliedFor?: Array<RCTAppliedFor>;
  customRoleArn?: string;
}
export interface UpdateRepositoryCreationTemplateResponse {
  registryId?: string;
  repositoryCreationTemplate?: RepositoryCreationTemplate;
}
export type UploadId = string;

export interface UploadLayerPartRequest {
  registryId?: string;
  repositoryName: string;
  uploadId: string;
  partFirstByte: number;
  partLastByte: number;
  layerPartBlob: Uint8Array | string;
}
export interface UploadLayerPartResponse {
  registryId?: string;
  repositoryName?: string;
  uploadId?: string;
  lastByteReceived?: number;
}
export declare class UploadNotFoundException extends EffectData.TaggedError(
  "UploadNotFoundException",
)<{
  readonly message?: string;
}> {}
export type UpstreamRegistry =
  | "Ecr"
  | "EcrPublic"
  | "Quay"
  | "K8s"
  | "DockerHub"
  | "GitHubContainerRegistry"
  | "AzureContainerRegistry"
  | "GitLabContainerRegistry";
export type Url = string;

export interface ValidatePullThroughCacheRuleRequest {
  ecrRepositoryPrefix: string;
  registryId?: string;
}
export interface ValidatePullThroughCacheRuleResponse {
  ecrRepositoryPrefix?: string;
  registryId?: string;
  upstreamRegistryUrl?: string;
  credentialArn?: string;
  customRoleArn?: string;
  upstreamRepositoryPrefix?: string;
  isValid?: boolean;
  failure?: string;
}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Version = string;

export type VulnerabilityId = string;

export type VulnerabilitySourceUpdateTimestamp = Date | string;

export interface VulnerablePackage {
  arch?: string;
  epoch?: number;
  filePath?: string;
  name?: string;
  packageManager?: string;
  release?: string;
  sourceLayerHash?: string;
  version?: string;
  fixedInVersion?: string;
}
export type VulnerablePackageName = string;

export type VulnerablePackagesList = Array<VulnerablePackage>;
export declare namespace BatchCheckLayerAvailability {
  export type Input = BatchCheckLayerAvailabilityRequest;
  export type Output = BatchCheckLayerAvailabilityResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace BatchDeleteImage {
  export type Input = BatchDeleteImageRequest;
  export type Output = BatchDeleteImageResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace BatchGetImage {
  export type Input = BatchGetImageRequest;
  export type Output = BatchGetImageResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | RepositoryNotFoundException
    | ServerException
    | UnableToGetUpstreamImageException
    | CommonAwsError;
}

export declare namespace BatchGetRepositoryScanningConfiguration {
  export type Input = BatchGetRepositoryScanningConfigurationRequest;
  export type Output = BatchGetRepositoryScanningConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CompleteLayerUpload {
  export type Input = CompleteLayerUploadRequest;
  export type Output = CompleteLayerUploadResponse;
  export type Error =
    | EmptyUploadException
    | InvalidLayerException
    | InvalidParameterException
    | KmsException
    | LayerAlreadyExistsException
    | LayerPartTooSmallException
    | RepositoryNotFoundException
    | ServerException
    | UploadNotFoundException
    | CommonAwsError;
}

export declare namespace CreatePullThroughCacheRule {
  export type Input = CreatePullThroughCacheRuleRequest;
  export type Output = CreatePullThroughCacheRuleResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | PullThroughCacheRuleAlreadyExistsException
    | SecretNotFoundException
    | ServerException
    | UnableToAccessSecretException
    | UnableToDecryptSecretValueException
    | UnsupportedUpstreamRegistryException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRepository {
  export type Input = CreateRepositoryRequest;
  export type Output = CreateRepositoryResponse;
  export type Error =
    | InvalidParameterException
    | InvalidTagParameterException
    | KmsException
    | LimitExceededException
    | RepositoryAlreadyExistsException
    | ServerException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateRepositoryCreationTemplate {
  export type Input = CreateRepositoryCreationTemplateRequest;
  export type Output = CreateRepositoryCreationTemplateResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ServerException
    | TemplateAlreadyExistsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLifecyclePolicy {
  export type Input = DeleteLifecyclePolicyRequest;
  export type Output = DeleteLifecyclePolicyResponse;
  export type Error =
    | InvalidParameterException
    | LifecyclePolicyNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePullThroughCacheRule {
  export type Input = DeletePullThroughCacheRuleRequest;
  export type Output = DeletePullThroughCacheRuleResponse;
  export type Error =
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRegistryPolicy {
  export type Input = DeleteRegistryPolicyRequest;
  export type Output = DeleteRegistryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RegistryPolicyNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRepository {
  export type Input = DeleteRepositoryRequest;
  export type Output = DeleteRepositoryResponse;
  export type Error =
    | InvalidParameterException
    | KmsException
    | RepositoryNotEmptyException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteRepositoryCreationTemplate {
  export type Input = DeleteRepositoryCreationTemplateRequest;
  export type Output = DeleteRepositoryCreationTemplateResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | TemplateNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRepositoryPolicy {
  export type Input = DeleteRepositoryPolicyRequest;
  export type Output = DeleteRepositoryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeImageReplicationStatus {
  export type Input = DescribeImageReplicationStatusRequest;
  export type Output = DescribeImageReplicationStatusResponse;
  export type Error =
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeImages {
  export type Input = DescribeImagesRequest;
  export type Output = DescribeImagesResponse;
  export type Error =
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeImageScanFindings {
  export type Input = DescribeImageScanFindingsRequest;
  export type Output = DescribeImageScanFindingsResponse;
  export type Error =
    | ImageNotFoundException
    | InvalidParameterException
    | RepositoryNotFoundException
    | ScanNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribePullThroughCacheRules {
  export type Input = DescribePullThroughCacheRulesRequest;
  export type Output = DescribePullThroughCacheRulesResponse;
  export type Error =
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRegistry {
  export type Input = DescribeRegistryRequest;
  export type Output = DescribeRegistryResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeRepositories {
  export type Input = DescribeRepositoriesRequest;
  export type Output = DescribeRepositoriesResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeRepositoryCreationTemplates {
  export type Input = DescribeRepositoryCreationTemplatesRequest;
  export type Output = DescribeRepositoryCreationTemplatesResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAccountSetting {
  export type Input = GetAccountSettingRequest;
  export type Output = GetAccountSettingResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAuthorizationToken {
  export type Input = GetAuthorizationTokenRequest;
  export type Output = GetAuthorizationTokenResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | CommonAwsError;
}

export declare namespace GetDownloadUrlForLayer {
  export type Input = GetDownloadUrlForLayerRequest;
  export type Output = GetDownloadUrlForLayerResponse;
  export type Error =
    | InvalidParameterException
    | LayerInaccessibleException
    | LayersNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | UnableToGetUpstreamLayerException
    | CommonAwsError;
}

export declare namespace GetLifecyclePolicy {
  export type Input = GetLifecyclePolicyRequest;
  export type Output = GetLifecyclePolicyResponse;
  export type Error =
    | InvalidParameterException
    | LifecyclePolicyNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLifecyclePolicyPreview {
  export type Input = GetLifecyclePolicyPreviewRequest;
  export type Output = GetLifecyclePolicyPreviewResponse;
  export type Error =
    | InvalidParameterException
    | LifecyclePolicyPreviewNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRegistryPolicy {
  export type Input = GetRegistryPolicyRequest;
  export type Output = GetRegistryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RegistryPolicyNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRegistryScanningConfiguration {
  export type Input = GetRegistryScanningConfigurationRequest;
  export type Output = GetRegistryScanningConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetRepositoryPolicy {
  export type Input = GetRepositoryPolicyRequest;
  export type Output = GetRepositoryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | RepositoryPolicyNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace InitiateLayerUpload {
  export type Input = InitiateLayerUploadRequest;
  export type Output = InitiateLayerUploadResponse;
  export type Error =
    | InvalidParameterException
    | KmsException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListImages {
  export type Input = ListImagesRequest;
  export type Output = ListImagesResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace PutAccountSetting {
  export type Input = PutAccountSettingRequest;
  export type Output = PutAccountSettingResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutImage {
  export type Input = PutImageRequest;
  export type Output = PutImageResponse;
  export type Error =
    | ImageAlreadyExistsException
    | ImageDigestDoesNotMatchException
    | ImageTagAlreadyExistsException
    | InvalidParameterException
    | KmsException
    | LayersNotFoundException
    | LimitExceededException
    | ReferencedImagesNotFoundException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace PutImageScanningConfiguration {
  export type Input = PutImageScanningConfigurationRequest;
  export type Output = PutImageScanningConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutImageTagMutability {
  export type Input = PutImageTagMutabilityRequest;
  export type Output = PutImageTagMutabilityResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace PutLifecyclePolicy {
  export type Input = PutLifecyclePolicyRequest;
  export type Output = PutLifecyclePolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRegistryPolicy {
  export type Input = PutRegistryPolicyRequest;
  export type Output = PutRegistryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutRegistryScanningConfiguration {
  export type Input = PutRegistryScanningConfigurationRequest;
  export type Output = PutRegistryScanningConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutReplicationConfiguration {
  export type Input = PutReplicationConfigurationRequest;
  export type Output = PutReplicationConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SetRepositoryPolicy {
  export type Input = SetRepositoryPolicyRequest;
  export type Output = SetRepositoryPolicyResponse;
  export type Error =
    | InvalidParameterException
    | RepositoryNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace StartImageScan {
  export type Input = StartImageScanRequest;
  export type Output = StartImageScanResponse;
  export type Error =
    | ImageNotFoundException
    | InvalidParameterException
    | LimitExceededException
    | RepositoryNotFoundException
    | ServerException
    | UnsupportedImageTypeException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartLifecyclePolicyPreview {
  export type Input = StartLifecyclePolicyPreviewRequest;
  export type Output = StartLifecyclePolicyPreviewResponse;
  export type Error =
    | InvalidParameterException
    | LifecyclePolicyNotFoundException
    | LifecyclePolicyPreviewInProgressException
    | RepositoryNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InvalidParameterException
    | InvalidTagParameterException
    | RepositoryNotFoundException
    | ServerException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UpdatePullThroughCacheRule {
  export type Input = UpdatePullThroughCacheRuleRequest;
  export type Output = UpdatePullThroughCacheRuleResponse;
  export type Error =
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | SecretNotFoundException
    | ServerException
    | UnableToAccessSecretException
    | UnableToDecryptSecretValueException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateRepositoryCreationTemplate {
  export type Input = UpdateRepositoryCreationTemplateRequest;
  export type Output = UpdateRepositoryCreationTemplateResponse;
  export type Error =
    | InvalidParameterException
    | ServerException
    | TemplateNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UploadLayerPart {
  export type Input = UploadLayerPartRequest;
  export type Output = UploadLayerPartResponse;
  export type Error =
    | InvalidLayerPartException
    | InvalidParameterException
    | KmsException
    | LimitExceededException
    | RepositoryNotFoundException
    | ServerException
    | UploadNotFoundException
    | CommonAwsError;
}

export declare namespace ValidatePullThroughCacheRule {
  export type Input = ValidatePullThroughCacheRuleRequest;
  export type Output = ValidatePullThroughCacheRuleResponse;
  export type Error =
    | InvalidParameterException
    | PullThroughCacheRuleNotFoundException
    | ServerException
    | ValidationException
    | CommonAwsError;
}
