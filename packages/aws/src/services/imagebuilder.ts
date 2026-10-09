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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "imagebuilder",
  serviceShapeName: "imagebuilder",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "imagebuilder" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-12-02");
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
              `https://imagebuilder-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://imagebuilder.${Region}.amazonaws.com`);
            }
            return e(
              `https://imagebuilder-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://imagebuilder.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://imagebuilder.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class CallRateLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<CallRateLimitExceededException>()(
    "CallRateLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ClientException
  extends /*@__PURE__*/ S.TaggedError<ClientException>()(
    "ClientException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DryRunOperationException
  extends /*@__PURE__*/ S.TaggedError<DryRunOperationException>()(
    "DryRunOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class IdempotentParameterMismatchException
  extends /*@__PURE__*/ S.TaggedError<IdempotentParameterMismatchException>()(
    "IdempotentParameterMismatchException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidPaginationTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidPaginationTokenException>()(
    "InvalidPaginationTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterCombinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterCombinationException>()(
    "InvalidParameterCombinationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValueException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValueException>()(
    "InvalidParameterValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidVersionNumberException
  extends /*@__PURE__*/ S.TaggedError<InvalidVersionNumberException>()(
    "InvalidVersionNumberException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ResourceDependencyException
  extends /*@__PURE__*/ S.TaggedError<ResourceDependencyException>()(
    "ResourceDependencyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceException
  extends /*@__PURE__*/ S.TaggedError<ServiceException>()(
    "ServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type ImageBuildVersionArn = string;
export type ClientToken = string;
export interface CancelImageCreationRequest {
  imageBuildVersionArn: string;
  clientToken: string;
}
export type NonEmptyString = string;
export interface CancelImageCreationResponse {
  requestId?: string;
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export type LifecycleExecutionId = string;
export interface CancelLifecycleExecutionRequest {
  lifecycleExecutionId: string;
  clientToken: string;
}
export interface CancelLifecycleExecutionResponse {
  lifecycleExecutionId?: string;
}
export type ResourceName = string;
export type VersionNumber = string;
export type Platform = "Windows" | "Linux" | "macOS" | (string & {});
export type OsVersion = string;
export type OsVersionList = string[];
export type InlineComponentData = string;
export type Uri = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export interface CreateComponentRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  changeDescription?: string;
  platform: Platform;
  supportedOsVersions?: string[];
  data?: string;
  uri?: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
  dryRun?: boolean;
}
export type ComponentBuildVersionArn = string;
export type ImageBuilderArn = string;
export interface LatestVersionReferences {
  latestVersionArn?: string;
  latestMajorVersionArn?: string;
  latestMinorVersionArn?: string;
  latestPatchVersionArn?: string;
}
export interface CreateComponentResponse {
  requestId?: string;
  clientToken?: string;
  componentBuildVersionArn?: string;
  latestVersionReferences?: LatestVersionReferences;
}
export type ContainerType = "DOCKER" | (string & {});
export type WildcardVersionNumber = string;
export type ComponentVersionArnOrBuildVersionArn = string;
export type ComponentParameterName = string;
export type ComponentParameterValue = string;
export type ComponentParameterValueList = string[];
export interface ComponentParameter {
  name: string;
  value: string[];
}
export type ComponentParameterList = ComponentParameter[];
export interface ComponentConfiguration {
  componentArn: string;
  parameters?: ComponentParameter[];
}
export type ComponentConfigurationList = ComponentConfiguration[];
export type EbsIopsInteger = number;
export type EbsVolumeSizeInteger = number;
export type EbsVolumeType =
  | "standard"
  | "io1"
  | "io2"
  | "gp2"
  | "gp3"
  | "sc1"
  | "st1"
  | (string & {});
export type EbsVolumeThroughput = number;
export interface EbsInstanceBlockDeviceSpecification {
  encrypted?: boolean;
  deleteOnTermination?: boolean;
  iops?: number;
  kmsKeyId?: string;
  snapshotId?: string;
  volumeSize?: number;
  volumeType?: EbsVolumeType;
  throughput?: number;
}
export type EmptyString = string;
export interface InstanceBlockDeviceMapping {
  deviceName?: string;
  ebs?: EbsInstanceBlockDeviceSpecification;
  virtualName?: string;
  noDevice?: string;
}
export type InstanceBlockDeviceMappings = InstanceBlockDeviceMapping[];
export interface InstanceConfiguration {
  image?: string;
  blockDeviceMappings?: InstanceBlockDeviceMapping[];
}
export type InlineDockerFileTemplate = string;
export type ContainerRepositoryService = "ECR" | (string & {});
export interface TargetContainerRepository {
  service: ContainerRepositoryService;
  repositoryName: string;
}
export interface CreateContainerRecipeRequest {
  containerType: ContainerType;
  name: string;
  description?: string;
  semanticVersion: string;
  components?: ComponentConfiguration[];
  instanceConfiguration?: InstanceConfiguration;
  dockerfileTemplateData?: string;
  dockerfileTemplateUri?: string;
  platformOverride?: Platform;
  imageOsVersionOverride?: string;
  parentImage: string;
  tags?: { [key: string]: string | undefined };
  workingDirectory?: string;
  targetRepository: TargetContainerRepository;
  kmsKeyId?: string;
  clientToken: string;
  dryRun?: boolean;
}
export type ContainerRecipeArn = string;
export interface CreateContainerRecipeResponse {
  requestId?: string;
  clientToken?: string;
  containerRecipeArn?: string;
  latestVersionReferences?: LatestVersionReferences;
}
export type AmiNameString = string;
export type AccountId = string;
export type AccountList = string[];
export type StringList = string[];
export type OrganizationArn = string;
export type OrganizationArnList = string[];
export type OrganizationalUnitArn = string;
export type OrganizationalUnitArnList = string[];
export interface LaunchPermissionConfiguration {
  userIds?: string[];
  userGroups?: string[];
  organizationArns?: string[];
  organizationalUnitArns?: string[];
}
export interface AmiDistributionConfiguration {
  name?: string;
  description?: string;
  targetAccountIds?: string[];
  amiTags?: { [key: string]: string | undefined };
  kmsKeyId?: string;
  launchPermission?: LaunchPermissionConfiguration;
}
export interface ContainerDistributionConfiguration {
  description?: string;
  containerTags?: string[];
  targetRepository: TargetContainerRepository;
}
export type LicenseConfigurationArn = string;
export type LicenseConfigurationArnList = string[];
export type LaunchTemplateId = string;
export interface LaunchTemplateConfiguration {
  launchTemplateId: string;
  accountId?: string;
  setDefaultVersion?: boolean;
}
export type LaunchTemplateConfigurationList = LaunchTemplateConfiguration[];
export type DiskImageFormat = "VMDK" | "RAW" | "VHD" | (string & {});
export interface S3ExportConfiguration {
  roleName: string;
  diskImageFormat: DiskImageFormat;
  s3Bucket: string;
  s3Prefix?: string;
}
export type TargetResourceCount = number;
export interface FastLaunchSnapshotConfiguration {
  targetResourceCount?: number;
}
export type MaxParallelLaunches = number;
export interface FastLaunchLaunchTemplateSpecification {
  launchTemplateId?: string;
  launchTemplateName?: string;
  launchTemplateVersion?: string;
}
export interface FastLaunchConfiguration {
  enabled: boolean;
  snapshotConfiguration?: FastLaunchSnapshotConfiguration;
  maxParallelLaunches?: number;
  launchTemplate?: FastLaunchLaunchTemplateSpecification;
  accountId?: string;
}
export type FastLaunchConfigurationList = FastLaunchConfiguration[];
export type SsmParameterName = string;
export type SsmParameterDataType = "text" | "aws:ec2:image" | (string & {});
export interface SsmParameterConfiguration {
  amiAccountId?: string;
  parameterName: string;
  dataType?: SsmParameterDataType;
}
export type SsmParameterConfigurationList = SsmParameterConfiguration[];
export interface Distribution {
  region: string;
  amiDistributionConfiguration?: AmiDistributionConfiguration;
  containerDistributionConfiguration?: ContainerDistributionConfiguration;
  licenseConfigurationArns?: string[];
  launchTemplateConfigurations?: LaunchTemplateConfiguration[];
  s3ExportConfiguration?: S3ExportConfiguration;
  fastLaunchConfigurations?: FastLaunchConfiguration[];
  ssmParameterConfigurations?: SsmParameterConfiguration[];
}
export type DistributionList = Distribution[];
export interface CreateDistributionConfigurationRequest {
  name: string;
  description?: string;
  distributions: Distribution[];
  tags?: { [key: string]: string | undefined };
  clientToken: string;
  dryRun?: boolean;
}
export type DistributionConfigurationArn = string;
export interface CreateDistributionConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  distributionConfigurationArn?: string;
}
export type ImageRecipeArn = string;
export type InfrastructureConfigurationArn = string;
export type ImageTestsTimeoutMinutes = number;
export interface ImageTestsConfiguration {
  imageTestsEnabled?: boolean;
  timeoutMinutes?: number;
}
export interface EcrConfiguration {
  repositoryName?: string;
  containerTags?: string[];
}
export interface ImageScanningConfiguration {
  imageScanningEnabled?: boolean;
  ecrConfiguration?: EcrConfiguration;
}
export type WorkflowVersionArnOrBuildVersionArn = string;
export type WorkflowParameterName = string;
export type WorkflowParameterValue = string;
export type WorkflowParameterValueList = string[];
export interface WorkflowParameter {
  name: string;
  value: string[];
}
export type WorkflowParameterList = WorkflowParameter[];
export type ParallelGroup = string;
export type OnWorkflowFailure = "CONTINUE" | "ABORT" | (string & {});
export interface WorkflowConfiguration {
  workflowArn: string;
  parameters?: WorkflowParameter[];
  parallelGroup?: string;
  onFailure?: OnWorkflowFailure;
}
export type WorkflowConfigurationList = WorkflowConfiguration[];
export type RoleNameOrArn = string;
export type LogGroupName = string;
export interface ImageLoggingConfiguration {
  logGroupName?: string;
}
export interface CreateImageRequest {
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  distributionConfigurationArn?: string;
  infrastructureConfigurationArn: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  enhancedImageMetadataEnabled?: boolean;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
  workflows?: WorkflowConfiguration[];
  executionRole?: string;
  loggingConfiguration?: ImageLoggingConfiguration;
}
export interface CreateImageResponse {
  requestId?: string;
  clientToken?: string;
  imageBuildVersionArn?: string;
  latestVersionReferences?: LatestVersionReferences;
}
export type Timezone = string;
export type PipelineExecutionStartCondition =
  | "EXPRESSION_MATCH_ONLY"
  | "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE"
  | (string & {});
export type AutoDisableFailureCount = number;
export interface AutoDisablePolicy {
  failureCount: number;
}
export interface Schedule {
  scheduleExpression?: string;
  timezone?: string;
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition;
  autoDisablePolicy?: AutoDisablePolicy;
}
export type PipelineStatus = "DISABLED" | "ENABLED" | (string & {});
export interface PipelineLoggingConfiguration {
  imageLogGroupName?: string;
  pipelineLogGroupName?: string;
}
export interface CreateImagePipelineRequest {
  name: string;
  description?: string;
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  infrastructureConfigurationArn: string;
  distributionConfigurationArn?: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  enhancedImageMetadataEnabled?: boolean;
  schedule?: Schedule;
  status?: PipelineStatus;
  tags?: { [key: string]: string | undefined };
  imageTags?: { [key: string]: string | undefined };
  clientToken: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
  workflows?: WorkflowConfiguration[];
  executionRole?: string;
  loggingConfiguration?: PipelineLoggingConfiguration;
  dryRun?: boolean;
}
export type ImagePipelineArn = string;
export interface CreateImagePipelineResponse {
  requestId?: string;
  clientToken?: string;
  imagePipelineArn?: string;
}
export interface SystemsManagerAgent {
  uninstallAfterBuild?: boolean;
}
export type UserDataOverride = string;
export interface AdditionalInstanceConfiguration {
  systemsManagerAgent?: SystemsManagerAgent;
  userDataOverride?: string;
}
export type AmiWatermarkName = string;
export type AmiWatermarksList = string[];
export interface CreateImageRecipeRequest {
  name: string;
  description?: string;
  semanticVersion: string;
  components?: ComponentConfiguration[];
  parentImage: string;
  blockDeviceMappings?: InstanceBlockDeviceMapping[];
  tags?: { [key: string]: string | undefined };
  workingDirectory?: string;
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
  amiTags?: { [key: string]: string | undefined };
  amiWatermarks?: string[];
  clientToken: string;
  dryRun?: boolean;
}
export interface CreateImageRecipeResponse {
  requestId?: string;
  clientToken?: string;
  imageRecipeArn?: string;
  latestVersionReferences?: LatestVersionReferences;
}
export type InstanceType = string;
export type InstanceTypeList = string[];
export type InstanceProfileNameType = string;
export type SecurityGroupIds = string[];
export interface S3Logs {
  s3BucketName?: string;
  s3KeyPrefix?: string;
}
export interface Logging {
  s3Logs?: S3Logs;
}
export type SnsTopicArn = string;
export type ResourceTagMap = { [key: string]: string | undefined };
export type HttpTokens = string;
export type HttpPutResponseHopLimit = number;
export interface InstanceMetadataOptions {
  httpTokens?: string;
  httpPutResponseHopLimit?: number;
}
export type TenancyType = "default" | "dedicated" | "host" | (string & {});
export interface Placement {
  availabilityZone?: string;
  tenancy?: TenancyType;
  hostId?: string;
  hostResourceGroupArn?: string;
}
export interface CreateInfrastructureConfigurationRequest {
  name: string;
  description?: string;
  instanceTypes?: string[];
  instanceProfileName: string;
  securityGroupIds?: string[];
  subnetId?: string;
  logging?: Logging;
  keyPair?: string;
  terminateInstanceOnFailure?: boolean;
  snsTopicArn?: string;
  resourceTags?: { [key: string]: string | undefined };
  instanceMetadataOptions?: InstanceMetadataOptions;
  tags?: { [key: string]: string | undefined };
  placement?: Placement;
  clientToken: string;
  dryRun?: boolean;
}
export interface CreateInfrastructureConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  infrastructureConfigurationArn?: string;
}
export type LifecyclePolicyStatus = "DISABLED" | "ENABLED" | (string & {});
export type LifecyclePolicyResourceType = "AMI_IMAGE" | "CONTAINER_IMAGE" | (string & {});
export type LifecyclePolicyDetailActionType = "DELETE" | "DEPRECATE" | "DISABLE" | (string & {});
export interface LifecyclePolicyDetailActionIncludeResources {
  amis?: boolean;
  snapshots?: boolean;
  containers?: boolean;
}
export interface LifecyclePolicyDetailAction {
  type: LifecyclePolicyDetailActionType;
  includeResources?: LifecyclePolicyDetailActionIncludeResources;
}
export type LifecyclePolicyDetailFilterType = "AGE" | "COUNT" | (string & {});
export type LifecyclePolicyDetailFilterValue = number;
export type LifecyclePolicyTimeUnit = "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | (string & {});
export type LifecyclePolicyDetailFilterRetainAtLeast = number;
export interface LifecyclePolicyDetailFilter {
  type: LifecyclePolicyDetailFilterType;
  value: number;
  unit?: LifecyclePolicyTimeUnit;
  retainAtLeast?: number;
}
export type LifecyclePolicyDetailExclusionRulesAmisLastLaunchedValue = number;
export interface LifecyclePolicyDetailExclusionRulesAmisLastLaunched {
  value: number;
  unit: LifecyclePolicyTimeUnit;
}
export interface LifecyclePolicyDetailExclusionRulesAmis {
  isPublic?: boolean;
  regions?: string[];
  sharedAccounts?: string[];
  lastLaunched?: LifecyclePolicyDetailExclusionRulesAmisLastLaunched;
  tagMap?: { [key: string]: string | undefined };
}
export interface LifecyclePolicyDetailExclusionRules {
  tagMap?: { [key: string]: string | undefined };
  amis?: LifecyclePolicyDetailExclusionRulesAmis;
}
export interface LifecyclePolicyDetail {
  action: LifecyclePolicyDetailAction;
  filter: LifecyclePolicyDetailFilter;
  exclusionRules?: LifecyclePolicyDetailExclusionRules;
}
export type LifecyclePolicyDetails = LifecyclePolicyDetail[];
export interface LifecyclePolicyResourceSelectionRecipe {
  name: string;
  semanticVersion: string;
}
export type LifecyclePolicyResourceSelectionRecipes = LifecyclePolicyResourceSelectionRecipe[];
export interface LifecyclePolicyResourceSelection {
  recipes?: LifecyclePolicyResourceSelectionRecipe[];
  tagMap?: { [key: string]: string | undefined };
}
export interface CreateLifecyclePolicyRequest {
  name: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole: string;
  resourceType: LifecyclePolicyResourceType;
  policyDetails: LifecyclePolicyDetail[];
  resourceSelection: LifecyclePolicyResourceSelection;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
  dryRun?: boolean;
}
export type LifecyclePolicyArn = string;
export interface CreateLifecyclePolicyResponse {
  clientToken?: string;
  lifecyclePolicyArn?: string;
}
export type InlineWorkflowData = string;
export type WorkflowType = "BUILD" | "TEST" | "DISTRIBUTION" | (string & {});
export interface CreateWorkflowRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  changeDescription?: string;
  data?: string;
  uri?: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
  type: WorkflowType;
  dryRun?: boolean;
}
export type WorkflowBuildVersionArn = string;
export interface CreateWorkflowResponse {
  clientToken?: string;
  workflowBuildVersionArn?: string;
  latestVersionReferences?: LatestVersionReferences;
}
export interface DeleteComponentRequest {
  componentBuildVersionArn: string;
}
export interface DeleteComponentResponse {
  requestId?: string;
  componentBuildVersionArn?: string;
}
export interface DeleteContainerRecipeRequest {
  containerRecipeArn: string;
}
export interface DeleteContainerRecipeResponse {
  requestId?: string;
  containerRecipeArn?: string;
}
export interface DeleteDistributionConfigurationRequest {
  distributionConfigurationArn: string;
}
export interface DeleteDistributionConfigurationResponse {
  requestId?: string;
  distributionConfigurationArn?: string;
}
export interface DeleteImageRequest {
  imageBuildVersionArn: string;
}
export interface DeleteImageResponse {
  requestId?: string;
  imageBuildVersionArn?: string;
}
export interface DeleteImagePipelineRequest {
  imagePipelineArn: string;
}
export interface DeleteImagePipelineResponse {
  requestId?: string;
  imagePipelineArn?: string;
}
export interface DeleteImageRecipeRequest {
  imageRecipeArn: string;
}
export interface DeleteImageRecipeResponse {
  requestId?: string;
  imageRecipeArn?: string;
}
export interface DeleteInfrastructureConfigurationRequest {
  infrastructureConfigurationArn: string;
}
export interface DeleteInfrastructureConfigurationResponse {
  requestId?: string;
  infrastructureConfigurationArn?: string;
}
export interface DeleteLifecyclePolicyRequest {
  lifecyclePolicyArn: string;
}
export interface DeleteLifecyclePolicyResponse {
  lifecyclePolicyArn?: string;
}
export interface DeleteWorkflowRequest {
  workflowBuildVersionArn: string;
}
export interface DeleteWorkflowResponse {
  workflowBuildVersionArn?: string;
}
export interface DistributeImageRequest {
  sourceImage: string;
  distributionConfigurationArn: string;
  executionRole: string;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
  loggingConfiguration?: ImageLoggingConfiguration;
}
export interface DistributeImageResponse {
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export interface GetComponentRequest {
  componentBuildVersionArn: string;
}
export type ComponentType = "BUILD" | "TEST" | (string & {});
export type ComponentStatus = "DEPRECATED" | "DISABLED" | "ACTIVE" | (string & {});
export interface ComponentState {
  status?: ComponentStatus;
  reason?: string;
}
export type ComponentParameterType = string;
export type ComponentParameterDescription = string;
export interface ComponentParameterDetail {
  name: string;
  type: string;
  defaultValue?: string[];
  description?: string;
}
export type ComponentParameterDetailList = ComponentParameterDetail[];
export type ComponentData = string;
export type ProductCodeId = string;
export type ProductCodeType = "marketplace" | (string & {});
export interface ProductCodeListItem {
  productCodeId: string;
  productCodeType: ProductCodeType;
}
export type ProductCodeList = ProductCodeListItem[];
export interface Component {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  changeDescription?: string;
  type?: ComponentType;
  platform?: Platform;
  supportedOsVersions?: string[];
  state?: ComponentState;
  parameters?: ComponentParameterDetail[];
  owner?: string;
  data?: string;
  kmsKeyId?: string;
  encrypted?: boolean;
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
  publisher?: string;
  obfuscate?: boolean;
  productCodes?: ProductCodeListItem[];
}
export interface GetComponentResponse {
  requestId?: string;
  component?: Component;
  latestVersionReferences?: LatestVersionReferences;
}
export interface GetComponentPolicyRequest {
  componentArn: string;
}
export type ResourcePolicyDocument = string;
export interface GetComponentPolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetContainerRecipeRequest {
  containerRecipeArn: string;
}
export type DockerFileTemplate = string;
export interface ContainerRecipe {
  arn?: string;
  containerType?: ContainerType;
  name?: string;
  description?: string;
  platform?: Platform;
  owner?: string;
  version?: string;
  components?: ComponentConfiguration[];
  instanceConfiguration?: InstanceConfiguration;
  dockerfileTemplateData?: string;
  kmsKeyId?: string;
  encrypted?: boolean;
  parentImage?: string;
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
  workingDirectory?: string;
  targetRepository?: TargetContainerRepository;
}
export interface GetContainerRecipeResponse {
  requestId?: string;
  containerRecipe?: ContainerRecipe;
  latestVersionReferences?: LatestVersionReferences;
}
export interface GetContainerRecipePolicyRequest {
  containerRecipeArn: string;
}
export interface GetContainerRecipePolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetDistributionConfigurationRequest {
  distributionConfigurationArn: string;
}
export type DistributionTimeoutMinutes = number;
export interface DistributionConfiguration {
  arn?: string;
  name?: string;
  description?: string;
  distributions?: Distribution[];
  timeoutMinutes?: number;
  dateCreated?: string;
  dateUpdated?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetDistributionConfigurationResponse {
  requestId?: string;
  distributionConfiguration?: DistributionConfiguration;
}
export type ImageVersionArnOrBuildVersionArn = string;
export interface GetImageRequest {
  imageBuildVersionArn: string;
}
export type ImageType = "AMI" | "DOCKER" | (string & {});
export type VersionNumberWithBuild = string;
export type ImageStatus =
  | "PENDING"
  | "CREATING"
  | "BUILDING"
  | "TESTING"
  | "DISTRIBUTING"
  | "INTEGRATING"
  | "AVAILABLE"
  | "CANCELLED"
  | "FAILED"
  | "DEPRECATED"
  | "DELETED"
  | "DISABLED"
  | (string & {});
export type WorkflowExecutionId = string;
export type WorkflowStepExecutionId = string;
export type WorkflowStepName = string;
export type NonEmptyMaxLengthString = string;
export interface ComponentFailureContext {
  componentArn?: string;
  phaseName?: string;
  stepName?: string;
  action?: string;
  errorMessage?: string;
}
export type RegionFailureStatus = "FAILED" | "CANCELLED" | "TIMED_OUT" | (string & {});
export type ImageConfigurationStep =
  | "ASSOCIATE_LICENSES"
  | "UPDATE_LAUNCH_TEMPLATES"
  | "PUT_SSM_PARAMETERS"
  | "UPDATE_FAST_LAUNCH_CONFIGURATIONS"
  | "EXPORT_AMI"
  | (string & {});
export interface RegionFailure {
  region?: string;
  status?: RegionFailureStatus;
  imageConfigurationStep?: ImageConfigurationStep;
  errorMessage?: string;
  targetAccountId?: string;
}
export type RegionFailureList = RegionFailure[];
export interface DistributionFailureContext {
  errorMessage?: string;
  regionFailures?: RegionFailure[];
}
export interface ImageFailureContext {
  imageStatus?: ImageStatus;
  workflowExecutionId?: string;
  workflowArn?: string;
  stepExecutionId?: string;
  failedStep?: string;
  componentFailure?: ComponentFailureContext;
  distributionFailure?: DistributionFailureContext;
}
export interface ImageState {
  status?: ImageStatus;
  reason?: string;
  failureContext?: ImageFailureContext;
}
export interface ImageRecipe {
  arn?: string;
  type?: ImageType;
  name?: string;
  description?: string;
  platform?: Platform;
  owner?: string;
  version?: string;
  components?: ComponentConfiguration[];
  parentImage?: string;
  blockDeviceMappings?: InstanceBlockDeviceMapping[];
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
  workingDirectory?: string;
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
  amiTags?: { [key: string]: string | undefined };
  amiWatermarks?: string[];
}
export type Arn = string;
export interface InfrastructureConfiguration {
  arn?: string;
  name?: string;
  description?: string;
  instanceTypes?: string[];
  instanceProfileName?: string;
  securityGroupIds?: string[];
  subnetId?: string;
  logging?: Logging;
  keyPair?: string;
  terminateInstanceOnFailure?: boolean;
  snsTopicArn?: string;
  dateCreated?: string;
  dateUpdated?: string;
  resourceTags?: { [key: string]: string | undefined };
  instanceMetadataOptions?: InstanceMetadataOptions;
  tags?: { [key: string]: string | undefined };
  placement?: Placement;
}
export interface Ami {
  region?: string;
  image?: string;
  name?: string;
  description?: string;
  state?: ImageState;
  accountId?: string;
}
export type AmiList = Ami[];
export interface Container {
  region?: string;
  imageUris?: string[];
}
export type ContainerList = Container[];
export interface OutputResources {
  amis?: Ami[];
  containers?: Container[];
}
export type BuildType = "USER_INITIATED" | "SCHEDULED" | "IMPORT" | "IMPORT_ISO" | (string & {});
export type ImageSource =
  | "AMAZON_MANAGED"
  | "AWS_MARKETPLACE"
  | "IMPORTED"
  | "CUSTOM"
  | (string & {});
export type ImageScanStatus =
  | "PENDING"
  | "SCANNING"
  | "COLLECTING"
  | "COMPLETED"
  | "ABANDONED"
  | "FAILED"
  | "TIMED_OUT"
  | (string & {});
export interface ImageScanState {
  status?: ImageScanStatus;
  reason?: string;
}
export type DateTimeTimestamp = Date;
export interface Image {
  arn?: string;
  type?: ImageType;
  name?: string;
  version?: string;
  platform?: Platform;
  enhancedImageMetadataEnabled?: boolean;
  osVersion?: string;
  state?: ImageState;
  imageRecipe?: ImageRecipe;
  containerRecipe?: ContainerRecipe;
  sourcePipelineName?: string;
  sourcePipelineArn?: string;
  infrastructureConfiguration?: InfrastructureConfiguration;
  distributionConfiguration?: DistributionConfiguration;
  imageTestsConfiguration?: ImageTestsConfiguration;
  dateCreated?: string;
  outputResources?: OutputResources;
  tags?: { [key: string]: string | undefined };
  buildType?: BuildType;
  imageSource?: ImageSource;
  scanState?: ImageScanState;
  imageScanningConfiguration?: ImageScanningConfiguration;
  deprecationTime?: Date;
  lifecycleExecutionId?: string;
  executionRole?: string;
  workflows?: WorkflowConfiguration[];
  loggingConfiguration?: ImageLoggingConfiguration;
}
export interface GetImageResponse {
  requestId?: string;
  image?: Image;
  latestVersionReferences?: LatestVersionReferences;
}
export interface GetImagePipelineRequest {
  imagePipelineArn: string;
}
export type ConsecutiveFailures = number;
export interface ImagePipeline {
  arn?: string;
  name?: string;
  description?: string;
  platform?: Platform;
  enhancedImageMetadataEnabled?: boolean;
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  infrastructureConfigurationArn?: string;
  distributionConfigurationArn?: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  schedule?: Schedule;
  status?: PipelineStatus;
  dateCreated?: string;
  dateUpdated?: string;
  dateLastRun?: string;
  lastRunStatus?: ImageStatus;
  dateNextRun?: string;
  tags?: { [key: string]: string | undefined };
  imageScanningConfiguration?: ImageScanningConfiguration;
  imageTags?: { [key: string]: string | undefined };
  executionRole?: string;
  workflows?: WorkflowConfiguration[];
  loggingConfiguration?: PipelineLoggingConfiguration;
  consecutiveFailures?: number;
}
export interface GetImagePipelineResponse {
  requestId?: string;
  imagePipeline?: ImagePipeline;
}
export interface GetImagePolicyRequest {
  imageArn: string;
}
export interface GetImagePolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetImageRecipeRequest {
  imageRecipeArn: string;
}
export interface GetImageRecipeResponse {
  requestId?: string;
  imageRecipe?: ImageRecipe;
  latestVersionReferences?: LatestVersionReferences;
}
export interface GetImageRecipePolicyRequest {
  imageRecipeArn: string;
}
export interface GetImageRecipePolicyResponse {
  requestId?: string;
  policy?: string;
}
export interface GetInfrastructureConfigurationRequest {
  infrastructureConfigurationArn: string;
}
export interface GetInfrastructureConfigurationResponse {
  requestId?: string;
  infrastructureConfiguration?: InfrastructureConfiguration;
}
export interface GetLifecycleExecutionRequest {
  lifecycleExecutionId: string;
}
export interface LifecycleExecutionResourcesImpactedSummary {
  hasImpactedResources?: boolean;
}
export type LifecycleExecutionStatus =
  | "IN_PROGRESS"
  | "CANCELLED"
  | "CANCELLING"
  | "FAILED"
  | "SUCCESS"
  | "PENDING"
  | (string & {});
export interface LifecycleExecutionState {
  status?: LifecycleExecutionStatus;
  reason?: string;
}
export interface LifecycleExecution {
  lifecycleExecutionId?: string;
  lifecyclePolicyArn?: string;
  resourcesImpactedSummary?: LifecycleExecutionResourcesImpactedSummary;
  state?: LifecycleExecutionState;
  startTime?: Date;
  endTime?: Date;
}
export interface GetLifecycleExecutionResponse {
  lifecycleExecution?: LifecycleExecution;
}
export interface GetLifecyclePolicyRequest {
  lifecyclePolicyArn: string;
}
export interface LifecyclePolicy {
  arn?: string;
  name?: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole?: string;
  resourceType?: LifecyclePolicyResourceType;
  policyDetails?: LifecyclePolicyDetail[];
  resourceSelection?: LifecyclePolicyResourceSelection;
  dateCreated?: Date;
  dateUpdated?: Date;
  dateLastRun?: Date;
  tags?: { [key: string]: string | undefined };
}
export interface GetLifecyclePolicyResponse {
  lifecyclePolicy?: LifecyclePolicy;
}
export type MarketplaceResourceType = "COMPONENT_DATA" | "COMPONENT_ARTIFACT" | (string & {});
export type MarketplaceResourceLocation = string;
export interface GetMarketplaceResourceRequest {
  resourceType: MarketplaceResourceType;
  resourceArn: string;
  resourceLocation?: string;
}
export interface GetMarketplaceResourceResponse {
  resourceArn?: string;
  url?: string;
  data?: string;
}
export interface GetWorkflowRequest {
  workflowBuildVersionArn: string;
}
export type WorkflowStatus = "DEPRECATED" | (string & {});
export interface WorkflowState {
  status?: WorkflowStatus;
  reason?: string;
}
export type WorkflowData = string;
export type WorkflowParameterType = string;
export type WorkflowParameterDescription = string;
export interface WorkflowParameterDetail {
  name: string;
  type: string;
  defaultValue?: string[];
  description?: string;
}
export type WorkflowParameterDetailList = WorkflowParameterDetail[];
export interface Workflow {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  changeDescription?: string;
  type?: WorkflowType;
  state?: WorkflowState;
  owner?: string;
  data?: string;
  kmsKeyId?: string;
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
  parameters?: WorkflowParameterDetail[];
}
export interface GetWorkflowResponse {
  workflow?: Workflow;
  latestVersionReferences?: LatestVersionReferences;
}
export interface GetWorkflowExecutionRequest {
  workflowExecutionId: string;
}
export type WorkflowExecutionStatus =
  | "PENDING"
  | "SKIPPED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_COMPLETED"
  | "CANCELLED"
  | (string & {});
export type WorkflowExecutionMessage = string;
export type WorkflowStepCount = number;
export interface GetWorkflowExecutionResponse {
  requestId?: string;
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  imageBuildVersionArn?: string;
  type?: WorkflowType;
  status?: WorkflowExecutionStatus;
  message?: string;
  totalStepCount?: number;
  totalStepsSucceeded?: number;
  totalStepsFailed?: number;
  totalStepsSkipped?: number;
  startTime?: string;
  endTime?: string;
  parallelGroup?: string;
}
export interface GetWorkflowStepExecutionRequest {
  stepExecutionId: string;
}
export type WorkflowStepDescription = string;
export type WorkflowStepAction = string;
export type WorkflowStepExecutionStatus =
  | "PENDING"
  | "SKIPPED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED"
  | (string & {});
export type WorkflowStepExecutionRollbackStatus =
  | "RUNNING"
  | "COMPLETED"
  | "SKIPPED"
  | "FAILED"
  | (string & {});
export type WorkflowStepMessage = string;
export type WorkflowStepInputs = string;
export type WorkflowStepOutputs = string;
export type WorkflowStepTimeoutSecondsInteger = number;
export type WorkflowStepAttemptCount = number;
export interface GetWorkflowStepExecutionResponse {
  requestId?: string;
  stepExecutionId?: string;
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  imageBuildVersionArn?: string;
  name?: string;
  description?: string;
  action?: string;
  status?: WorkflowStepExecutionStatus;
  rollbackStatus?: WorkflowStepExecutionRollbackStatus;
  message?: string;
  inputs?: string;
  outputs?: string;
  startTime?: string;
  endTime?: string;
  onFailure?: string;
  timeoutSeconds?: number;
  attemptNumber?: number;
  maxAttempts?: number;
}
export type ComponentFormat = "SHELL" | (string & {});
export interface ImportComponentRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  changeDescription?: string;
  type: ComponentType;
  format: ComponentFormat;
  platform: Platform;
  data?: string;
  uri?: string;
  kmsKeyId?: string;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
}
export interface ImportComponentResponse {
  requestId?: string;
  clientToken?: string;
  componentBuildVersionArn?: string;
}
export type UefiData = string;
export interface RegisterImageOptions {
  secureBootEnabled?: boolean;
  uefiData?: string;
}
export type WindowsConfigurationImageIndex = number;
export interface WindowsConfiguration {
  imageIndex: number;
}
export interface ImportDiskImageRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  platform: string;
  osVersion: string;
  executionRole?: string;
  infrastructureConfigurationArn: string;
  uri: string;
  loggingConfiguration?: ImageLoggingConfiguration;
  tags?: { [key: string]: string | undefined };
  registerImageOptions?: RegisterImageOptions;
  windowsConfiguration?: WindowsConfiguration;
  clientToken: string;
}
export interface ImportDiskImageResponse {
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export interface ImportVmImageRequest {
  name: string;
  semanticVersion: string;
  description?: string;
  platform: Platform;
  osVersion?: string;
  vmImportTaskId: string;
  loggingConfiguration?: ImageLoggingConfiguration;
  tags?: { [key: string]: string | undefined };
  clientToken: string;
}
export interface ImportVmImageResponse {
  requestId?: string;
  imageArn?: string;
  clientToken?: string;
}
export type ComponentVersionArn = string;
export type RestrictedInteger = number;
export type PaginationToken = string;
export interface ListComponentBuildVersionsRequest {
  componentVersionArn?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ComponentSummary {
  arn?: string;
  name?: string;
  version?: string;
  platform?: Platform;
  supportedOsVersions?: string[];
  state?: ComponentState;
  type?: ComponentType;
  owner?: string;
  description?: string;
  changeDescription?: string;
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
  publisher?: string;
  obfuscate?: boolean;
}
export type ComponentSummaryList = ComponentSummary[];
export interface ListComponentBuildVersionsResponse {
  requestId?: string;
  componentSummaryList?: ComponentSummary[];
  nextToken?: string;
}
export type Ownership =
  | "Self"
  | "Shared"
  | "Amazon"
  | "ThirdParty"
  | "AWSMarketplace"
  | (string & {});
export type FilterName = string;
export type FilterValue = string;
export type FilterValues = string[];
export interface Filter {
  name?: string;
  values?: string[];
}
export type FilterList = Filter[];
export interface ListComponentsRequest {
  owner?: Ownership;
  filters?: Filter[];
  byName?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface ComponentVersion {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  platform?: Platform;
  supportedOsVersions?: string[];
  type?: ComponentType;
  owner?: string;
  dateCreated?: string;
  status?: ComponentStatus;
  productCodes?: ProductCodeListItem[];
}
export type ComponentVersionList = ComponentVersion[];
export interface ListComponentsResponse {
  requestId?: string;
  componentVersionList?: ComponentVersion[];
  nextToken?: string;
}
export interface ListContainerRecipesRequest {
  owner?: Ownership;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface ContainerRecipeSummary {
  arn?: string;
  containerType?: ContainerType;
  name?: string;
  platform?: Platform;
  owner?: string;
  parentImage?: string;
  dateCreated?: string;
  instanceImage?: string;
  tags?: { [key: string]: string | undefined };
}
export type ContainerRecipeSummaryList = ContainerRecipeSummary[];
export interface ListContainerRecipesResponse {
  requestId?: string;
  containerRecipeSummaryList?: ContainerRecipeSummary[];
  nextToken?: string;
}
export interface ListDistributionConfigurationsRequest {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export type RegionList = string[];
export interface DistributionConfigurationSummary {
  arn?: string;
  name?: string;
  description?: string;
  dateCreated?: string;
  dateUpdated?: string;
  tags?: { [key: string]: string | undefined };
  regions?: string[];
}
export type DistributionConfigurationSummaryList = DistributionConfigurationSummary[];
export interface ListDistributionConfigurationsResponse {
  requestId?: string;
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[];
  nextToken?: string;
}
export type ImageVersionArn = string;
export interface ListImageBuildVersionsRequest {
  imageVersionArn?: string;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface ImageSummary {
  arn?: string;
  name?: string;
  type?: ImageType;
  version?: string;
  platform?: Platform;
  osVersion?: string;
  state?: ImageState;
  owner?: string;
  dateCreated?: string;
  outputResources?: OutputResources;
  tags?: { [key: string]: string | undefined };
  buildType?: BuildType;
  imageSource?: ImageSource;
  deprecationTime?: Date;
  lifecycleExecutionId?: string;
  loggingConfiguration?: ImageLoggingConfiguration;
}
export type ImageSummaryList = ImageSummary[];
export interface ListImageBuildVersionsResponse {
  requestId?: string;
  imageSummaryList?: ImageSummary[];
  nextToken?: string;
}
export interface ListImagePackagesRequest {
  imageBuildVersionArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ImagePackage {
  packageName?: string;
  packageVersion?: string;
}
export type ImagePackageList = ImagePackage[];
export interface ListImagePackagesResponse {
  requestId?: string;
  imagePackageList?: ImagePackage[];
  nextToken?: string;
}
export interface ListImagePipelineImagesRequest {
  imagePipelineArn: string;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface ListImagePipelineImagesResponse {
  requestId?: string;
  imageSummaryList?: ImageSummary[];
  nextToken?: string;
}
export interface ListImagePipelinesRequest {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export type ImagePipelineList = ImagePipeline[];
export interface ListImagePipelinesResponse {
  requestId?: string;
  imagePipelineList?: ImagePipeline[];
  nextToken?: string;
}
export interface ListImageRecipesRequest {
  owner?: Ownership;
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface ImageRecipeSummary {
  arn?: string;
  name?: string;
  platform?: Platform;
  owner?: string;
  parentImage?: string;
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
}
export type ImageRecipeSummaryList = ImageRecipeSummary[];
export interface ListImageRecipesResponse {
  requestId?: string;
  imageRecipeSummaryList?: ImageRecipeSummary[];
  nextToken?: string;
}
export interface ListImagesRequest {
  owner?: Ownership;
  filters?: Filter[];
  byName?: boolean;
  maxResults?: number;
  nextToken?: string;
  includeDeprecated?: boolean;
}
export interface ImageVersion {
  arn?: string;
  name?: string;
  type?: ImageType;
  version?: string;
  platform?: Platform;
  osVersion?: string;
  owner?: string;
  dateCreated?: string;
  buildType?: BuildType;
  imageSource?: ImageSource;
}
export type ImageVersionList = ImageVersion[];
export interface ListImagesResponse {
  requestId?: string;
  imageVersionList?: ImageVersion[];
  nextToken?: string;
}
export interface ListImageScanFindingAggregationsRequest {
  filter?: Filter;
  nextToken?: string;
}
export type SeverityCountNumber = number;
export interface SeverityCounts {
  all?: number;
  critical?: number;
  high?: number;
  medium?: number;
}
export interface AccountAggregation {
  accountId?: string;
  severityCounts?: SeverityCounts;
}
export interface ImageAggregation {
  imageBuildVersionArn?: string;
  severityCounts?: SeverityCounts;
}
export interface ImagePipelineAggregation {
  imagePipelineArn?: string;
  severityCounts?: SeverityCounts;
}
export interface VulnerabilityIdAggregation {
  vulnerabilityId?: string;
  severityCounts?: SeverityCounts;
}
export interface ImageScanFindingAggregation {
  accountAggregation?: AccountAggregation;
  imageAggregation?: ImageAggregation;
  imagePipelineAggregation?: ImagePipelineAggregation;
  vulnerabilityIdAggregation?: VulnerabilityIdAggregation;
}
export type ImageScanFindingAggregationsList = ImageScanFindingAggregation[];
export interface ListImageScanFindingAggregationsResponse {
  requestId?: string;
  aggregationType?: string;
  responses?: ImageScanFindingAggregation[];
  nextToken?: string;
}
export type ImageScanFindingsFilterValues = string[];
export interface ImageScanFindingsFilter {
  name?: string;
  values?: string[];
}
export type ImageScanFindingsFilterList = ImageScanFindingsFilter[];
export interface ListImageScanFindingsRequest {
  filters?: ImageScanFindingsFilter[];
  maxResults?: number;
  nextToken?: string;
}
export interface RemediationRecommendation {
  text?: string;
  url?: string;
}
export interface Remediation {
  recommendation?: RemediationRecommendation;
}
export type NonNegativeDouble = number;
export interface CvssScoreAdjustment {
  metric?: string;
  reason?: string;
}
export type CvssScoreAdjustmentList = CvssScoreAdjustment[];
export interface CvssScoreDetails {
  scoreSource?: string;
  cvssSource?: string;
  version?: string;
  score?: number;
  scoringVector?: string;
  adjustments?: CvssScoreAdjustment[];
}
export interface InspectorScoreDetails {
  adjustedCvss?: CvssScoreDetails;
}
export type VulnerabilityId = string;
export type SourceLayerHash = string;
export type PackageEpoch = number;
export type PackageArchitecture = string;
export interface VulnerablePackage {
  name?: string;
  version?: string;
  sourceLayerHash?: string;
  epoch?: number;
  release?: string;
  arch?: string;
  packageManager?: string;
  filePath?: string;
  fixedInVersion?: string;
  remediation?: string;
}
export type VulnerablePackageList = VulnerablePackage[];
export interface CvssScore {
  baseScore?: number;
  scoringVector?: string;
  version?: string;
  source?: string;
}
export type CvssScoreList = CvssScore[];
export type VulnerabilityIdList = string[];
export type NonEmptyStringList = string[];
export interface PackageVulnerabilityDetails {
  vulnerabilityId: string;
  vulnerablePackages?: VulnerablePackage[];
  source?: string;
  cvss?: CvssScore[];
  relatedVulnerabilities?: string[];
  sourceUrl?: string;
  vendorSeverity?: string;
  vendorCreatedAt?: Date;
  vendorUpdatedAt?: Date;
  referenceUrls?: string[];
}
export interface ImageScanFinding {
  awsAccountId?: string;
  imageBuildVersionArn?: string;
  imagePipelineArn?: string;
  type?: string;
  description?: string;
  title?: string;
  remediation?: Remediation;
  severity?: string;
  firstObservedAt?: Date;
  updatedAt?: Date;
  inspectorScore?: number;
  inspectorScoreDetails?: InspectorScoreDetails;
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;
  fixAvailable?: string;
}
export type ImageScanFindingsList = ImageScanFinding[];
export interface ListImageScanFindingsResponse {
  requestId?: string;
  findings?: ImageScanFinding[];
  nextToken?: string;
}
export interface ListInfrastructureConfigurationsRequest {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface InfrastructureConfigurationSummary {
  arn?: string;
  name?: string;
  description?: string;
  dateCreated?: string;
  dateUpdated?: string;
  resourceTags?: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
  instanceTypes?: string[];
  instanceProfileName?: string;
  placement?: Placement;
}
export type InfrastructureConfigurationSummaryList = InfrastructureConfigurationSummary[];
export interface ListInfrastructureConfigurationsResponse {
  requestId?: string;
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];
  nextToken?: string;
}
export interface ListLifecycleExecutionResourcesRequest {
  lifecycleExecutionId: string;
  parentResourceId?: string;
  maxResults?: number;
  nextToken?: string;
}
export type LifecycleExecutionResourceStatus =
  | "FAILED"
  | "IN_PROGRESS"
  | "SKIPPED"
  | "SUCCESS"
  | (string & {});
export interface LifecycleExecutionResourceState {
  status?: LifecycleExecutionResourceStatus;
  reason?: string;
}
export type LifecycleExecutionResourceActionName =
  | "AVAILABLE"
  | "DELETE"
  | "DEPRECATE"
  | "DISABLE"
  | (string & {});
export interface LifecycleExecutionResourceAction {
  name?: LifecycleExecutionResourceActionName;
  reason?: string;
}
export interface LifecycleExecutionSnapshotResource {
  snapshotId?: string;
  state?: LifecycleExecutionResourceState;
}
export type LifecycleExecutionSnapshotResourceList = LifecycleExecutionSnapshotResource[];
export interface LifecycleExecutionResource {
  accountId?: string;
  resourceId?: string;
  state?: LifecycleExecutionResourceState;
  action?: LifecycleExecutionResourceAction;
  region?: string;
  snapshots?: LifecycleExecutionSnapshotResource[];
  imageUris?: string[];
  startTime?: Date;
  endTime?: Date;
}
export type LifecycleExecutionResourceList = LifecycleExecutionResource[];
export interface ListLifecycleExecutionResourcesResponse {
  lifecycleExecutionId?: string;
  lifecycleExecutionState?: LifecycleExecutionState;
  resources?: LifecycleExecutionResource[];
  nextToken?: string;
}
export interface ListLifecycleExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  resourceArn: string;
}
export type LifecycleExecutionsList = LifecycleExecution[];
export interface ListLifecycleExecutionsResponse {
  lifecycleExecutions?: LifecycleExecution[];
  nextToken?: string;
}
export interface ListLifecyclePoliciesRequest {
  filters?: Filter[];
  maxResults?: number;
  nextToken?: string;
}
export interface LifecyclePolicySummary {
  arn?: string;
  name?: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole?: string;
  resourceType?: LifecyclePolicyResourceType;
  dateCreated?: Date;
  dateUpdated?: Date;
  dateLastRun?: Date;
  tags?: { [key: string]: string | undefined };
}
export type LifecyclePolicySummaryList = LifecyclePolicySummary[];
export interface ListLifecyclePoliciesResponse {
  lifecyclePolicySummaryList?: LifecyclePolicySummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface ListWaitingWorkflowStepsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface WorkflowStepExecution {
  stepExecutionId?: string;
  imageBuildVersionArn?: string;
  workflowExecutionId?: string;
  workflowBuildVersionArn?: string;
  name?: string;
  action?: string;
  startTime?: string;
}
export type WorkflowStepExecutionList = WorkflowStepExecution[];
export interface ListWaitingWorkflowStepsResponse {
  steps?: WorkflowStepExecution[];
  nextToken?: string;
}
export type WorkflowWildcardVersionArn = string;
export interface ListWorkflowBuildVersionsRequest {
  workflowVersionArn?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface WorkflowSummary {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  changeDescription?: string;
  type?: WorkflowType;
  owner?: string;
  state?: WorkflowState;
  dateCreated?: string;
  tags?: { [key: string]: string | undefined };
}
export type WorkflowSummaryList = WorkflowSummary[];
export interface ListWorkflowBuildVersionsResponse {
  workflowSummaryList?: WorkflowSummary[];
  nextToken?: string;
}
export interface ListWorkflowExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  imageBuildVersionArn: string;
}
export interface WorkflowExecutionMetadata {
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  type?: WorkflowType;
  status?: WorkflowExecutionStatus;
  message?: string;
  totalStepCount?: number;
  totalStepsSucceeded?: number;
  totalStepsFailed?: number;
  totalStepsSkipped?: number;
  startTime?: string;
  endTime?: string;
  parallelGroup?: string;
  retried?: boolean;
}
export type WorkflowExecutionsList = WorkflowExecutionMetadata[];
export type ImageBuildMessage = string;
export interface ListWorkflowExecutionsResponse {
  requestId?: string;
  workflowExecutions?: WorkflowExecutionMetadata[];
  imageBuildVersionArn?: string;
  message?: string;
  nextToken?: string;
}
export interface ListWorkflowsRequest {
  owner?: Ownership;
  filters?: Filter[];
  byName?: boolean;
  maxResults?: number;
  nextToken?: string;
}
export interface WorkflowVersion {
  arn?: string;
  name?: string;
  version?: string;
  description?: string;
  type?: WorkflowType;
  owner?: string;
  dateCreated?: string;
}
export type WorkflowVersionList = WorkflowVersion[];
export interface ListWorkflowsResponse {
  workflowVersionList?: WorkflowVersion[];
  nextToken?: string;
}
export interface ListWorkflowStepExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  workflowExecutionId: string;
}
export interface WorkflowStepMetadata {
  stepExecutionId?: string;
  name?: string;
  description?: string;
  action?: string;
  status?: WorkflowStepExecutionStatus;
  rollbackStatus?: WorkflowStepExecutionRollbackStatus;
  message?: string;
  inputs?: string;
  outputs?: string;
  startTime?: string;
  endTime?: string;
  attemptNumber?: number;
  maxAttempts?: number;
}
export type WorkflowStepExecutionsList = WorkflowStepMetadata[];
export interface ListWorkflowStepExecutionsResponse {
  requestId?: string;
  steps?: WorkflowStepMetadata[];
  workflowBuildVersionArn?: string;
  workflowExecutionId?: string;
  imageBuildVersionArn?: string;
  message?: string;
  nextToken?: string;
}
export interface PutComponentPolicyRequest {
  componentArn: string;
  policy: string;
}
export interface PutComponentPolicyResponse {
  requestId?: string;
  componentArn?: string;
}
export interface PutContainerRecipePolicyRequest {
  containerRecipeArn: string;
  policy: string;
}
export interface PutContainerRecipePolicyResponse {
  requestId?: string;
  containerRecipeArn?: string;
}
export interface PutImagePolicyRequest {
  imageArn: string;
  policy: string;
}
export interface PutImagePolicyResponse {
  requestId?: string;
  imageArn?: string;
}
export interface PutImageRecipePolicyRequest {
  imageRecipeArn: string;
  policy: string;
}
export interface PutImageRecipePolicyResponse {
  requestId?: string;
  imageRecipeArn?: string;
}
export interface RetryImageRequest {
  imageBuildVersionArn: string;
  clientToken: string;
}
export interface RetryImageResponse {
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export type WorkflowStepActionType = "RESUME" | "STOP" | (string & {});
export interface SendWorkflowStepActionRequest {
  stepExecutionId: string;
  imageBuildVersionArn: string;
  action: WorkflowStepActionType;
  reason?: string;
  clientToken: string;
}
export interface SendWorkflowStepActionResponse {
  stepExecutionId?: string;
  imageBuildVersionArn?: string;
  clientToken?: string;
}
export interface StartImagePipelineExecutionRequest {
  imagePipelineArn: string;
  clientToken: string;
  tags?: { [key: string]: string | undefined };
}
export interface StartImagePipelineExecutionResponse {
  requestId?: string;
  clientToken?: string;
  imageBuildVersionArn?: string;
}
export type ResourceStatus = "AVAILABLE" | "DELETED" | "DEPRECATED" | "DISABLED" | (string & {});
export interface ResourceState {
  status?: ResourceStatus;
}
export interface ResourceStateUpdateIncludeResources {
  amis?: boolean;
  snapshots?: boolean;
  containers?: boolean;
}
export interface ResourceStateUpdateExclusionRules {
  amis?: LifecyclePolicyDetailExclusionRulesAmis;
}
export interface StartResourceStateUpdateRequest {
  resourceArn: string;
  state: ResourceState;
  executionRole?: string;
  includeResources?: ResourceStateUpdateIncludeResources;
  exclusionRules?: ResourceStateUpdateExclusionRules;
  updateAt?: Date;
  clientToken: string;
}
export interface StartResourceStateUpdateResponse {
  lifecycleExecutionId?: string;
  resourceArn?: string;
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
export interface UpdateDistributionConfigurationRequest {
  distributionConfigurationArn: string;
  description?: string;
  distributions: Distribution[];
  clientToken: string;
}
export interface UpdateDistributionConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  distributionConfigurationArn?: string;
}
export interface UpdateImagePipelineRequest {
  imagePipelineArn: string;
  description?: string;
  imageRecipeArn?: string;
  containerRecipeArn?: string;
  infrastructureConfigurationArn: string;
  distributionConfigurationArn?: string;
  imageTestsConfiguration?: ImageTestsConfiguration;
  enhancedImageMetadataEnabled?: boolean;
  schedule?: Schedule;
  status?: PipelineStatus;
  clientToken: string;
  imageScanningConfiguration?: ImageScanningConfiguration;
  workflows?: WorkflowConfiguration[];
  loggingConfiguration?: PipelineLoggingConfiguration;
  executionRole?: string;
  imageTags?: { [key: string]: string | undefined };
}
export interface UpdateImagePipelineResponse {
  requestId?: string;
  clientToken?: string;
  imagePipelineArn?: string;
}
export interface UpdateInfrastructureConfigurationRequest {
  infrastructureConfigurationArn: string;
  description?: string;
  instanceTypes?: string[];
  instanceProfileName: string;
  securityGroupIds?: string[];
  subnetId?: string;
  logging?: Logging;
  keyPair?: string;
  terminateInstanceOnFailure?: boolean;
  snsTopicArn?: string;
  resourceTags?: { [key: string]: string | undefined };
  instanceMetadataOptions?: InstanceMetadataOptions;
  placement?: Placement;
  clientToken: string;
}
export interface UpdateInfrastructureConfigurationResponse {
  requestId?: string;
  clientToken?: string;
  infrastructureConfigurationArn?: string;
}
export interface UpdateLifecyclePolicyRequest {
  lifecyclePolicyArn: string;
  description?: string;
  status?: LifecyclePolicyStatus;
  executionRole: string;
  resourceType: LifecyclePolicyResourceType;
  policyDetails: LifecyclePolicyDetail[];
  resourceSelection: LifecyclePolicyResourceSelection;
  clientToken: string;
}
export interface UpdateLifecyclePolicyResponse {
  lifecyclePolicyArn?: string;
}
export type ErrorMessage = string;
export type CancelImageCreationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Cancels the creation of an image. This operation can only be used on
 * images in a non-terminal state. Cancellation is asynchronous: the request
 * returns immediately, then Image Builder stops the running build and moves the image
 * to the `CANCELLED` state. Output resources that the build already
 * created, such as AMIs and snapshots, aren't removed.
 */
export const cancelImageCreation: API.OperationMethod<
  CancelImageCreationRequest,
  CancelImageCreationResponse,
  CancelImageCreationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<CancelImageCreationRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<CancelImageCreationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelImageCreation",
}));

export type CancelLifecycleExecutionError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Cancels a lifecycle execution - a single run of lifecycle actions that a
 * lifecycle policy or a StartResourceStateUpdate request
 * started. You can only cancel an execution that hasn't reached a
 * terminal state. Cancellation is asynchronous and doesn't undo
 * completed lifecycle actions.
 */
export const cancelLifecycleExecution: API.OperationMethod<
  CancelLifecycleExecutionRequest,
  CancelLifecycleExecutionResponse,
  CancelLifecycleExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<CancelLifecycleExecutionRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<CancelLifecycleExecutionResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelLifecycleExecution",
}));

export type CreateComponentError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterCombinationException
  | InvalidRequestException
  | InvalidVersionNumberException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new component that can be used to build, validate, test, and assess your
 * image. The component is based on a YAML document that you specify using exactly one of
 * the following methods:
 *
 * - Inline, using the `data` property in the request body.
 *
 * - A URL that points to a YAML document file stored in Amazon S3, using the
 * `uri` property in the request body.
 *
 * Image Builder determines the component type from the document. If the document
 * contains a single phase named `test`, the component type is
 * `TEST`. Otherwise, the component type is `BUILD`.
 */
export const createComponent: API.OperationMethod<
  CreateComponentRequest,
  CreateComponentResponse,
  CreateComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<CreateComponentRequest>,
  output: __S(8, __c1, 0) as any as S.Schema<CreateComponentResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterCombinationException,
    InvalidRequestException,
    InvalidVersionNumberException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComponent",
}));

export type CreateContainerRecipeError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | InvalidVersionNumberException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new container recipe. Container recipes define how images are configured,
 * tested, and assessed.
 */
export const createContainerRecipe: API.OperationMethod<
  CreateContainerRecipeRequest,
  CreateContainerRecipeResponse,
  CreateContainerRecipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<CreateContainerRecipeRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<CreateContainerRecipeResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    InvalidVersionNumberException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContainerRecipe",
}));

export type CreateDistributionConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterCombinationException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new distribution configuration. Distribution configurations define
 * and configure the outputs for your images, including the target Regions,
 * accounts, and settings for each Region.
 */
export const createDistributionConfiguration: API.OperationMethod<
  CreateDistributionConfigurationRequest,
  CreateDistributionConfigurationResponse,
  CreateDistributionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34, __c4, 2) as any as S.Schema<CreateDistributionConfigurationRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<CreateDistributionConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterCombinationException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDistributionConfiguration",
}));

export type CreateImageError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new image along with all configured output resources defined in the
 * distribution configuration. You must specify exactly one recipe for your image, using
 * either a `containerRecipeArn` or an `imageRecipeArn`.
 *
 * The response returns as soon as Image Builder creates the new image resource.
 * The image build process runs asynchronously. To check its progress, call
 * GetImage and check the image status.
 */
export const createImage: API.OperationMethod<
  CreateImageRequest,
  CreateImageResponse,
  CreateImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<CreateImageRequest>,
  output: __S(43, __c5, 3) as any as S.Schema<CreateImageResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImage",
}));

export type CreateImagePipelineError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new image pipeline. Use image pipelines to automate the creation and
 * distribution of images. You must specify exactly one recipe for the pipeline,
 * using either a `containerRecipeArn` or an
 * `imageRecipeArn`.
 */
export const createImagePipeline: API.OperationMethod<
  CreateImagePipelineRequest,
  CreateImagePipelineResponse,
  CreateImagePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<CreateImagePipelineRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<CreateImagePipelineResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImagePipeline",
}));

export type CreateImageRecipeError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | InvalidVersionNumberException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new image recipe. Image recipes define how images are configured, tested,
 * and assessed.
 */
export const createImageRecipe: API.OperationMethod<
  CreateImageRecipeRequest,
  CreateImageRecipeResponse,
  CreateImageRecipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<CreateImageRecipeRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<CreateImageRecipeResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    InvalidVersionNumberException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImageRecipe",
}));

export type CreateInfrastructureConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | InvalidParameterValueException
  | CommonErrors;
/**
 * Creates a new infrastructure configuration. An infrastructure configuration defines
 * the environment in which your image will be built and tested.
 */
export const createInfrastructureConfiguration: API.OperationMethod<
  CreateInfrastructureConfigurationRequest,
  CreateInfrastructureConfigurationResponse,
  CreateInfrastructureConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<CreateInfrastructureConfigurationRequest>,
  output: __S(59, __c7, 3) as any as S.Schema<CreateInfrastructureConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    InvalidParameterValueException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInfrastructureConfiguration",
}));

export type CreateLifecyclePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a lifecycle policy resource.
 */
export const createLifecyclePolicy: API.OperationMethod<
  CreateLifecyclePolicyRequest,
  CreateLifecyclePolicyResponse,
  CreateLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<CreateLifecyclePolicyRequest>,
  output: __S(72, __c9, 0) as any as S.Schema<CreateLifecyclePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLifecyclePolicy",
}));

export type CreateWorkflowError =
  | CallRateLimitExceededException
  | ClientException
  | DryRunOperationException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterCombinationException
  | InvalidRequestException
  | InvalidVersionNumberException
  | ResourceInUseException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a new workflow or a new version of an existing workflow. If a workflow
 * with the same name and semantic version already exists, and your request changes
 * its configuration, Image Builder creates a new build version.
 * If the configuration is identical to the latest build version, the request
 * fails because that workflow configuration already exists.
 */
export const createWorkflow: API.OperationMethod<
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CreateWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<CreateWorkflowRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<CreateWorkflowResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    DryRunOperationException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterCombinationException,
    InvalidRequestException,
    InvalidVersionNumberException,
    ResourceInUseException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkflow",
}));

export type DeleteComponentError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a component build version. The request fails with
 * `ResourceDependencyException` if an image recipe or container
 * recipe references this component version. It also fails if the component
 * build version is shared with other accounts.
 */
export const deleteComponent: API.OperationMethod<
  DeleteComponentRequest,
  DeleteComponentResponse,
  DeleteComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<DeleteComponentRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<DeleteComponentResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteComponent",
}));

export type DeleteContainerRecipeError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a container recipe. The request fails with
 * `ResourceDependencyException` if the recipe is shared with other
 * accounts, or if an image pipeline references it.
 */
export const deleteContainerRecipe: API.OperationMethod<
  DeleteContainerRecipeRequest,
  DeleteContainerRecipeResponse,
  DeleteContainerRecipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DeleteContainerRecipeRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<DeleteContainerRecipeResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContainerRecipe",
}));

export type DeleteDistributionConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a distribution configuration. You can't delete a configuration
 * that an image pipeline still references. The request fails with
 * `ResourceDependencyException`. Update or delete the referencing
 * pipelines first.
 */
export const deleteDistributionConfiguration: API.OperationMethod<
  DeleteDistributionConfigurationRequest,
  DeleteDistributionConfigurationResponse,
  DeleteDistributionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DeleteDistributionConfigurationRequest>,
  output: __S(80, __c10, 0) as any as S.Schema<DeleteDistributionConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDistributionConfiguration",
}));

export type DeleteImageError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container
 * images that are created during the image build process. You must clean those up
 * separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI
 * commands.
 *
 * The request fails with `ResourceDependencyException` if the image
 * is shared with other accounts, or if other resources depend on it. It also
 * fails while the image build is still running. Cancel an in-progress build
 * with CancelImageCreation before you delete the image.
 *
 * - To deregister an EC2 Linux AMI, see Deregister your
 * Linux AMI in the
 * *Amazon EC2 User Guide*
 * .
 *
 * - To deregister an EC2 Windows AMI, see Deregister your
 * Windows AMI in the
 * *Amazon EC2 Windows Guide*
 * .
 *
 * - To delete a container image from Amazon ECR, see Deleting
 * an image in the *Amazon ECR User Guide*.
 */
export const deleteImage: API.OperationMethod<
  DeleteImageRequest,
  DeleteImageResponse,
  DeleteImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<DeleteImageRequest>,
  output: __S(82, __c10, 2) as any as S.Schema<DeleteImageResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImage",
}));

export type DeleteImagePipelineError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an image pipeline. Images that the pipeline created aren't
 * deleted - remove those separately with DeleteImage. You
 * can delete a pipeline while a build that it started is still running. The
 * build continues independently.
 */
export const deleteImagePipeline: API.OperationMethod<
  DeleteImagePipelineRequest,
  DeleteImagePipelineResponse,
  DeleteImagePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<DeleteImagePipelineRequest>,
  output: __S(84, __c10, 4) as any as S.Schema<DeleteImagePipelineResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImagePipeline",
}));

export type DeleteImageRecipeError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an image recipe.
 */
export const deleteImageRecipe: API.OperationMethod<
  DeleteImageRecipeRequest,
  DeleteImageRecipeResponse,
  DeleteImageRecipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85, __c10, 5) as any as S.Schema<DeleteImageRecipeRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<DeleteImageRecipeResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImageRecipe",
}));

export type DeleteInfrastructureConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an infrastructure configuration. You can't delete a configuration
 * that an image pipeline still references. The request fails with
 * `ResourceDependencyException`. Update or delete the referencing
 * pipelines first.
 */
export const deleteInfrastructureConfiguration: API.OperationMethod<
  DeleteInfrastructureConfigurationRequest,
  DeleteInfrastructureConfigurationResponse,
  DeleteInfrastructureConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<DeleteInfrastructureConfigurationRequest>,
  output: __S(88, __c11, 0) as any as S.Schema<DeleteInfrastructureConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInfrastructureConfiguration",
}));

export type DeleteLifecyclePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes the specified lifecycle policy resource. Deleting the policy removes
 * its schedule, so no further lifecycle runs occur for that policy. If a
 * lifecycle execution is in progress for the policy, Image Builder cancels it. Deletion
 * doesn't revert actions that the policy already applied to your
 * resources.
 */
export const deleteLifecyclePolicy: API.OperationMethod<
  DeleteLifecyclePolicyRequest,
  DeleteLifecyclePolicyResponse,
  DeleteLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<DeleteLifecyclePolicyRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<DeleteLifecyclePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLifecyclePolicy",
}));

export type DeleteWorkflowError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ResourceDependencyException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a specific workflow resource. You can't delete a workflow build
 * version while an image pipeline references it. The request fails with
 * `ResourceDependencyException`.
 */
export const deleteWorkflow: API.OperationMethod<
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DeleteWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91, __c11, 3) as any as S.Schema<DeleteWorkflowRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<DeleteWorkflowResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ResourceDependencyException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkflow",
}));

export type DistributeImageError =
  | AccessDeniedException
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Distributes an existing AMI to target Regions and accounts without running
 * the full image build process. This operation only runs the distribution
 * phase on an image that has already been built.
 */
export const distributeImage: API.OperationMethod<
  DistributeImageRequest,
  DistributeImageResponse,
  DistributeImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<DistributeImageRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<DistributeImageResponse>,
  errors: [
    AccessDeniedException,
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DistributeImage",
}));

export type GetComponentError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a component object.
 */
export const getComponent: API.OperationMethod<
  GetComponentRequest,
  GetComponentResponse,
  GetComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95, __c11, 7) as any as S.Schema<GetComponentRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<GetComponentResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetComponent",
}));

export type GetComponentPolicyError =
  | CallRateLimitExceededException
  | ForbiddenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves a component policy.
 */
export const getComponentPolicy: API.OperationMethod<
  GetComponentPolicyRequest,
  GetComponentPolicyResponse,
  GetComponentPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<GetComponentPolicyRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<GetComponentPolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ForbiddenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetComponentPolicy",
}));

export type GetContainerRecipeError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves a container recipe.
 */
export const getContainerRecipe: API.OperationMethod<
  GetContainerRecipeRequest,
  GetContainerRecipeResponse,
  GetContainerRecipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<GetContainerRecipeRequest>,
  output: __S(107, __c13, 3) as any as S.Schema<GetContainerRecipeResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContainerRecipe",
}));

export type GetContainerRecipePolicyError =
  | CallRateLimitExceededException
  | ForbiddenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves the policy for a container recipe.
 */
export const getContainerRecipePolicy: API.OperationMethod<
  GetContainerRecipePolicyRequest,
  GetContainerRecipePolicyResponse,
  GetContainerRecipePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108, __c13, 4) as any as S.Schema<GetContainerRecipePolicyRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<GetContainerRecipePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ForbiddenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContainerRecipePolicy",
}));

export type GetDistributionConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a distribution configuration.
 */
export const getDistributionConfiguration: API.OperationMethod<
  GetDistributionConfigurationRequest,
  GetDistributionConfigurationResponse,
  GetDistributionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<GetDistributionConfigurationRequest>,
  output: __S(111, __c13, 7) as any as S.Schema<GetDistributionConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDistributionConfiguration",
}));

export type GetImageError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves an image.
 */
export const getImage: API.OperationMethod<
  GetImageRequest,
  GetImageResponse,
  GetImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112, __c14, 0) as any as S.Schema<GetImageRequest>,
  output: __S(127, __c15, 7) as any as S.Schema<GetImageResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImage",
}));

export type GetImagePipelineError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves an image pipeline.
 */
export const getImagePipeline: API.OperationMethod<
  GetImagePipelineRequest,
  GetImagePipelineResponse,
  GetImagePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<GetImagePipelineRequest>,
  output: __S(130, __c16, 2) as any as S.Schema<GetImagePipelineResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImagePipeline",
}));

export type GetImagePolicyError =
  | CallRateLimitExceededException
  | ForbiddenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves an image policy.
 */
export const getImagePolicy: API.OperationMethod<
  GetImagePolicyRequest,
  GetImagePolicyResponse,
  GetImagePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<GetImagePolicyRequest>,
  output: __S(132, __c16, 4) as any as S.Schema<GetImagePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ForbiddenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImagePolicy",
}));

export type GetImageRecipeError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves an image recipe.
 */
export const getImageRecipe: API.OperationMethod<
  GetImageRecipeRequest,
  GetImageRecipeResponse,
  GetImageRecipeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<GetImageRecipeRequest>,
  output: __S(134, __c16, 6) as any as S.Schema<GetImageRecipeResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImageRecipe",
}));

export type GetImageRecipePolicyError =
  | CallRateLimitExceededException
  | ForbiddenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves an image recipe policy.
 */
export const getImageRecipePolicy: API.OperationMethod<
  GetImageRecipePolicyRequest,
  GetImageRecipePolicyResponse,
  GetImageRecipePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(135, __c16, 7) as any as S.Schema<GetImageRecipePolicyRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<GetImageRecipePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ForbiddenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetImageRecipePolicy",
}));

export type GetInfrastructureConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves an infrastructure configuration.
 */
export const getInfrastructureConfiguration: API.OperationMethod<
  GetInfrastructureConfigurationRequest,
  GetInfrastructureConfigurationResponse,
  GetInfrastructureConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<GetInfrastructureConfigurationRequest>,
  output: __S(137, __c17, 1) as any as S.Schema<GetInfrastructureConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInfrastructureConfiguration",
}));

export type GetLifecycleExecutionError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves runtime information for a lifecycle execution - a single run of
 * lifecycle actions that a lifecycle policy or a
 * StartResourceStateUpdate request started.
 */
export const getLifecycleExecution: API.OperationMethod<
  GetLifecycleExecutionRequest,
  GetLifecycleExecutionResponse,
  GetLifecycleExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<GetLifecycleExecutionRequest>,
  output: __S(141, __c17, 5) as any as S.Schema<GetLifecycleExecutionResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLifecycleExecution",
}));

export type GetLifecyclePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves details for the specified image lifecycle policy.
 */
export const getLifecyclePolicy: API.OperationMethod<
  GetLifecyclePolicyRequest,
  GetLifecyclePolicyResponse,
  GetLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142, __c17, 6) as any as S.Schema<GetLifecyclePolicyRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<GetLifecyclePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLifecyclePolicy",
}));

export type GetMarketplaceResourceError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Verifies the subscription and performs resource dependency checks on the
 * requested Amazon Web Services Marketplace resource. The caller must be entitled to the resource. For
 * Amazon Web Services Marketplace components, the response contains fields to download the components
 * and their artifacts.
 */
export const getMarketplaceResource: API.OperationMethod<
  GetMarketplaceResourceRequest,
  GetMarketplaceResourceResponse,
  GetMarketplaceResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<GetMarketplaceResourceRequest>,
  output: __S(146, __c18, 2) as any as S.Schema<GetMarketplaceResourceResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMarketplaceResource",
}));

export type GetWorkflowError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves a workflow resource object.
 */
export const getWorkflow: API.OperationMethod<
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<GetWorkflowRequest>,
  output: __S(149, __c18, 5) as any as S.Schema<GetWorkflowResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflow",
}));

export type GetWorkflowExecutionError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves runtime information for a specific runtime instance
 * of the workflow.
 */
export const getWorkflowExecution: API.OperationMethod<
  GetWorkflowExecutionRequest,
  GetWorkflowExecutionResponse,
  GetWorkflowExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(150, __c18, 6) as any as S.Schema<GetWorkflowExecutionRequest>,
  output: __S(151, __c18, 7) as any as S.Schema<GetWorkflowExecutionResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowExecution",
}));

export type GetWorkflowStepExecutionError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves runtime information for a specific runtime instance of
 * the workflow step.
 */
export const getWorkflowStepExecution: API.OperationMethod<
  GetWorkflowStepExecutionRequest,
  GetWorkflowStepExecutionResponse,
  GetWorkflowStepExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(152, __c19, 0) as any as S.Schema<GetWorkflowStepExecutionRequest>,
  output: __S(153, __c19, 1) as any as S.Schema<GetWorkflowStepExecutionResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowStepExecution",
}));

export type ImportComponentError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterCombinationException
  | InvalidRequestException
  | InvalidVersionNumberException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Imports a component and transforms its data into a component document. For
 * the `SHELL` format, Image Builder wraps your script in a component
 * document with a single step that runs the script.
 */
export const importComponent: API.OperationMethod<
  ImportComponentRequest,
  ImportComponentResponse,
  ImportComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(154, __c19, 2) as any as S.Schema<ImportComponentRequest>,
  output: __S(155, __c19, 3) as any as S.Schema<ImportComponentResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterCombinationException,
    InvalidRequestException,
    InvalidVersionNumberException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportComponent",
}));

export type ImportDiskImageError =
  | AccessDeniedException
  | ClientException
  | ServiceException
  | ServiceUnavailableException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Imports a Windows operating system image from a verified Microsoft ISO disk
 * file. The following disk images are supported:
 *
 * - Windows 11 Enterprise
 *
 * The response returns as soon as Image Builder creates the new image resource in the
 * `PENDING` state. The conversion from ISO file to AMI then runs
 * asynchronously on an EC2 instance that Image Builder launches with the specified
 * infrastructure configuration.
 */
export const importDiskImage: API.OperationMethod<
  ImportDiskImageRequest,
  ImportDiskImageResponse,
  ImportDiskImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(158, __c19, 6) as any as S.Schema<ImportDiskImageRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<ImportDiskImageResponse>,
  errors: [
    AccessDeniedException,
    ClientException,
    ServiceException,
    ServiceUnavailableException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportDiskImage",
}));

export type ImportVmImageError =
  | ClientException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates an Image Builder image resource from an Amazon EC2 VM import task. The response
 * returns as soon as Image Builder creates the image resource in the
 * `PENDING` state. Image Builder then monitors the import task
 * asynchronously. When the task completes, Image Builder records the AMI that it
 * produced as the new image's output resource and marks the image
 * `AVAILABLE`. You can then use the imported image as the base
 * image for your recipes.
 *
 * To create the VM import task, use the Amazon EC2 API ImportImage
 * operation, or the import-image
 * CLI command.
 */
export const importVmImage: API.OperationMethod<
  ImportVmImageRequest,
  ImportVmImageResponse,
  ImportVmImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(159, __c19, 7) as any as S.Schema<ImportVmImageRequest>,
  output: __S(160, __c20, 0) as any as S.Schema<ImportVmImageResponse>,
  errors: [ClientException, ServiceException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportVmImage",
}));

export type ListComponentBuildVersionsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of component build versions for the specified component
 * version ARN. You can only list build versions for components that your
 * account owns. Deprecated build versions aren't included in the
 * results.
 */
export const listComponentBuildVersions: API.PaginatedOperationMethod<
  ListComponentBuildVersionsRequest,
  ListComponentBuildVersionsResponse,
  ListComponentBuildVersionsError,
  Credentials | HttpClient.HttpClient,
  ComponentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<ListComponentBuildVersionsRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<ListComponentBuildVersionsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComponentBuildVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "componentSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComponentsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the list of components that you have access to. By default, the
 * response doesn't include components in the
 * `DEPRECATED` state. To list deprecated components, use the
 * `status` filter with the value `DEPRECATED`.
 *
 * The semantic version has four nodes: ../.
 * You can assign values for the first three, and can filter on all of them.
 *
 * **Filtering:** You can use wildcards (x) to specify the most recent versions or nodes when
 * selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
 * to the right of the first wildcard must also be wildcards.
 */
export const listComponents: API.PaginatedOperationMethod<
  ListComponentsRequest,
  ListComponentsResponse,
  ListComponentsError,
  Credentials | HttpClient.HttpClient,
  ComponentVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(167, __c20, 7) as any as S.Schema<ListComponentsRequest>,
  output: __S(170, __c21, 2) as any as S.Schema<ListComponentsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListComponents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "componentVersionList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListContainerRecipesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of container recipes.
 */
export const listContainerRecipes: API.PaginatedOperationMethod<
  ListContainerRecipesRequest,
  ListContainerRecipesResponse,
  ListContainerRecipesError,
  Credentials | HttpClient.HttpClient,
  ContainerRecipeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<ListContainerRecipesRequest>,
  output: __S(174, __c21, 6) as any as S.Schema<ListContainerRecipesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContainerRecipes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "containerRecipeSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDistributionConfigurationsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of distribution configurations.
 */
export const listDistributionConfigurations: API.PaginatedOperationMethod<
  ListDistributionConfigurationsRequest,
  ListDistributionConfigurationsResponse,
  ListDistributionConfigurationsError,
  Credentials | HttpClient.HttpClient,
  DistributionConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<ListDistributionConfigurationsRequest>,
  output: __S(178, __c22, 2) as any as S.Schema<ListDistributionConfigurationsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDistributionConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "distributionConfigurationSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImageBuildVersionsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of image build versions.
 */
export const listImageBuildVersions: API.PaginatedOperationMethod<
  ListImageBuildVersionsRequest,
  ListImageBuildVersionsResponse,
  ListImageBuildVersionsError,
  Credentials | HttpClient.HttpClient,
  ImageSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<ListImageBuildVersionsRequest>,
  output: __S(182, __c22, 6) as any as S.Schema<ListImageBuildVersionsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImageBuildVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImagePackagesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the packages that are associated with an image build version, as determined by
 * Amazon Web Services Systems Manager Inventory at build time.
 */
export const listImagePackages: API.PaginatedOperationMethod<
  ListImagePackagesRequest,
  ListImagePackagesResponse,
  ListImagePackagesError,
  Credentials | HttpClient.HttpClient,
  ImagePackage
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<ListImagePackagesRequest>,
  output: __S(186, __c23, 2) as any as S.Schema<ListImagePackagesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImagePackages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imagePackageList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImagePipelineImagesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of images created by the specified pipeline.
 */
export const listImagePipelineImages: API.PaginatedOperationMethod<
  ListImagePipelineImagesRequest,
  ListImagePipelineImagesResponse,
  ListImagePipelineImagesError,
  Credentials | HttpClient.HttpClient,
  ImageSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<ListImagePipelineImagesRequest>,
  output: __S(182, __c22, 6) as any as S.Schema<ListImagePipelineImagesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImagePipelineImages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImagePipelinesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of image pipelines.
 */
export const listImagePipelines: API.PaginatedOperationMethod<
  ListImagePipelinesRequest,
  ListImagePipelinesResponse,
  ListImagePipelinesError,
  Credentials | HttpClient.HttpClient,
  ImagePipeline
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(188, __c23, 4) as any as S.Schema<ListImagePipelinesRequest>,
  output: __S(190, __c23, 6) as any as S.Schema<ListImagePipelinesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImagePipelines",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imagePipelineList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImageRecipesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of image recipes.
 */
export const listImageRecipes: API.PaginatedOperationMethod<
  ListImageRecipesRequest,
  ListImageRecipesResponse,
  ListImageRecipesError,
  Credentials | HttpClient.HttpClient,
  ImageRecipeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<ListImageRecipesRequest>,
  output: __S(194, __c24, 2) as any as S.Schema<ListImageRecipesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImageRecipes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageRecipeSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImagesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns the list of images that you have access to.
 */
export const listImages: API.PaginatedOperationMethod<
  ListImagesRequest,
  ListImagesResponse,
  ListImagesError,
  Credentials | HttpClient.HttpClient,
  ImageVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(195, __c24, 3) as any as S.Schema<ListImagesRequest>,
  output: __S(198, __c24, 6) as any as S.Schema<ListImagesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImages",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "imageVersionList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListImageScanFindingAggregationsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of image scan aggregations for your account. You can filter by the type
 * of key that Image Builder uses to group results. For example, if you want to get a list of
 * findings by severity level for one of your pipelines, you might specify your pipeline
 * with the `imagePipelineArn` filter. If you don't specify a filter, Image Builder
 * returns an aggregation for your account.
 *
 * To streamline results, you can use the following filters in your request:
 *
 * - `imageBuildVersionArn`
 *
 * - `imagePipelineArn`
 *
 * - `vulnerabilityId`
 */
export const listImageScanFindingAggregations: API.PaginatedOperationMethod<
  ListImageScanFindingAggregationsRequest,
  ListImageScanFindingAggregationsResponse,
  ListImageScanFindingAggregationsError,
  Credentials | HttpClient.HttpClient,
  ImageScanFindingAggregation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(199, __c24, 7) as any as S.Schema<ListImageScanFindingAggregationsRequest>,
  output: __S(207, __c25, 7) as any as S.Schema<ListImageScanFindingAggregationsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImageScanFindingAggregations",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "responses" } as const,
})) as any;

export type ListImageScanFindingsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of image scan findings for your account. Amazon Inspector generates the
 * findings when it scans images that have scanning enabled.
 */
export const listImageScanFindings: API.PaginatedOperationMethod<
  ListImageScanFindingsRequest,
  ListImageScanFindingsResponse,
  ListImageScanFindingsError,
  Credentials | HttpClient.HttpClient,
  ImageScanFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(208, __c26, 0) as any as S.Schema<ListImageScanFindingsRequest>,
  output: __S(222, __c27, 6) as any as S.Schema<ListImageScanFindingsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListImageScanFindings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "findings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInfrastructureConfigurationsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of infrastructure configurations.
 */
export const listInfrastructureConfigurations: API.PaginatedOperationMethod<
  ListInfrastructureConfigurationsRequest,
  ListInfrastructureConfigurationsResponse,
  ListInfrastructureConfigurationsError,
  Credentials | HttpClient.HttpClient,
  InfrastructureConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(223, __c27, 7) as any as S.Schema<ListInfrastructureConfigurationsRequest>,
  output: __S(226, __c28, 2) as any as S.Schema<ListInfrastructureConfigurationsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInfrastructureConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "infrastructureConfigurationSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLifecycleExecutionResourcesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists resources that the runtime instance of the image lifecycle identified for lifecycle actions.
 */
export const listLifecycleExecutionResources: API.PaginatedOperationMethod<
  ListLifecycleExecutionResourcesRequest,
  ListLifecycleExecutionResourcesResponse,
  ListLifecycleExecutionResourcesError,
  Credentials | HttpClient.HttpClient,
  LifecycleExecutionResource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(227, __c28, 3) as any as S.Schema<ListLifecycleExecutionResourcesRequest>,
  output: __S(234, __c29, 2) as any as S.Schema<ListLifecycleExecutionResourcesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLifecycleExecutionResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLifecycleExecutionsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves the lifecycle runtime history for the specified resource.
 */
export const listLifecycleExecutions: API.PaginatedOperationMethod<
  ListLifecycleExecutionsRequest,
  ListLifecycleExecutionsResponse,
  ListLifecycleExecutionsError,
  Credentials | HttpClient.HttpClient,
  LifecycleExecution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(235, __c29, 3) as any as S.Schema<ListLifecycleExecutionsRequest>,
  output: __S(237, __c29, 5) as any as S.Schema<ListLifecycleExecutionsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLifecycleExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "lifecycleExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLifecyclePoliciesError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retrieves a list of lifecycle policies in your Amazon Web Services account.
 */
export const listLifecyclePolicies: API.PaginatedOperationMethod<
  ListLifecyclePoliciesRequest,
  ListLifecyclePoliciesResponse,
  ListLifecyclePoliciesError,
  Credentials | HttpClient.HttpClient,
  LifecyclePolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(238, __c29, 6) as any as S.Schema<ListLifecyclePoliciesRequest>,
  output: __S(241, __c30, 1) as any as S.Schema<ListLifecyclePoliciesResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLifecyclePolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "lifecyclePolicySummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceException
  | CommonErrors;
/**
 * Returns the list of tags for the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(242, __c30, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(243, __c30, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListWaitingWorkflowStepsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the workflow steps in your Amazon Web Services account that have paused at a
 * `WaitForAction` step, and are waiting for you to respond. To send
 * a response, call SendWorkflowStepAction.
 */
export const listWaitingWorkflowSteps: API.PaginatedOperationMethod<
  ListWaitingWorkflowStepsRequest,
  ListWaitingWorkflowStepsResponse,
  ListWaitingWorkflowStepsError,
  Credentials | HttpClient.HttpClient,
  WorkflowStepExecution
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(244, __c30, 4) as any as S.Schema<ListWaitingWorkflowStepsRequest>,
  output: __S(247, __c30, 7) as any as S.Schema<ListWaitingWorkflowStepsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWaitingWorkflowSteps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "steps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowBuildVersionsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of build versions for a specific workflow resource.
 */
export const listWorkflowBuildVersions: API.PaginatedOperationMethod<
  ListWorkflowBuildVersionsRequest,
  ListWorkflowBuildVersionsResponse,
  ListWorkflowBuildVersionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(248, __c31, 0) as any as S.Schema<ListWorkflowBuildVersionsRequest>,
  output: __S(251, __c31, 3) as any as S.Schema<ListWorkflowBuildVersionsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowBuildVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowSummaryList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowExecutionsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns a list of workflow runtime instance metadata objects for a specific image build
 * version.
 */
export const listWorkflowExecutions: API.PaginatedOperationMethod<
  ListWorkflowExecutionsRequest,
  ListWorkflowExecutionsResponse,
  ListWorkflowExecutionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowExecutionMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(252, __c31, 4) as any as S.Schema<ListWorkflowExecutionsRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<ListWorkflowExecutionsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowExecutions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists workflow versions based on filtering parameters. To list the build
 * versions of a specific workflow version, call
 * ListWorkflowBuildVersions.
 */
export const listWorkflows: API.PaginatedOperationMethod<
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListWorkflowsError,
  Credentials | HttpClient.HttpClient,
  WorkflowVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<ListWorkflowsRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<ListWorkflowsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflows",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workflowVersionList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkflowStepExecutionsError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidPaginationTokenException
  | InvalidRequestException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns runtime data for each step in a runtime instance of the workflow
 * that you specify in the request.
 */
export const listWorkflowStepExecutions: API.PaginatedOperationMethod<
  ListWorkflowStepExecutionsRequest,
  ListWorkflowStepExecutionsResponse,
  ListWorkflowStepExecutionsError,
  Credentials | HttpClient.HttpClient,
  WorkflowStepMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(260, __c32, 4) as any as S.Schema<ListWorkflowStepExecutionsRequest>,
  output: __S(263, __c32, 7) as any as S.Schema<ListWorkflowStepExecutionsResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidPaginationTokenException,
    InvalidRequestException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflowStepExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "steps",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutComponentPolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidParameterValueException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Applies a policy to a component. The preferred way to share resources is with
 * the RAM API CreateResourceShare. If you use the PutComponentPolicy operation instead, you
 * must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource
 * isn't visible to the principals that it's shared with.
 */
export const putComponentPolicy: API.OperationMethod<
  PutComponentPolicyRequest,
  PutComponentPolicyResponse,
  PutComponentPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264, __c33, 0) as any as S.Schema<PutComponentPolicyRequest>,
  output: __S(265, __c33, 1) as any as S.Schema<PutComponentPolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidParameterValueException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutComponentPolicy",
}));

export type PutContainerRecipePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidParameterValueException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Applies a policy to a container recipe. The preferred way to share resources is with
 * the RAM API CreateResourceShare. If you use the PutContainerRecipePolicy operation instead, you
 * must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource
 * isn't visible to the principals that it's shared with.
 */
export const putContainerRecipePolicy: API.OperationMethod<
  PutContainerRecipePolicyRequest,
  PutContainerRecipePolicyResponse,
  PutContainerRecipePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<PutContainerRecipePolicyRequest>,
  output: __S(78, __c9, 6) as any as S.Schema<PutContainerRecipePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidParameterValueException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutContainerRecipePolicy",
}));

export type PutImagePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidParameterValueException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Applies a policy to an image. The preferred way to share resources is with
 * the RAM API CreateResourceShare. If you use the PutImagePolicy operation instead, you
 * must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource
 * isn't visible to the principals that it's shared with.
 */
export const putImagePolicy: API.OperationMethod<
  PutImagePolicyRequest,
  PutImagePolicyResponse,
  PutImagePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(267, __c33, 3) as any as S.Schema<PutImagePolicyRequest>,
  output: __S(268, __c33, 4) as any as S.Schema<PutImagePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidParameterValueException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutImagePolicy",
}));

export type PutImageRecipePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | InvalidParameterValueException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Applies a policy to an image recipe. The preferred way to share resources is with
 * the RAM API CreateResourceShare. If you use the PutImageRecipePolicy operation instead, you
 * must also call the RAM API PromoteResourceShareCreatedFromPolicy. Otherwise, the resource
 * isn't visible to the principals that it's shared with.
 */
export const putImageRecipePolicy: API.OperationMethod<
  PutImageRecipePolicyRequest,
  PutImageRecipePolicyResponse,
  PutImageRecipePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(269, __c33, 5) as any as S.Schema<PutImageRecipePolicyRequest>,
  output: __S(86, __c10, 6) as any as S.Schema<PutImageRecipePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    InvalidParameterValueException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutImageRecipePolicy",
}));

export type RetryImageError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Retries a failed or canceled image build without rebuilding the phases
 * that already completed. The image re-runs asynchronously in place: the same
 * build version returns to the test or distribution phase where it failed and
 * continues from there. No new image build version is created. Retry is only
 * supported for AMI-based images.
 */
export const retryImage: API.OperationMethod<
  RetryImageRequest,
  RetryImageResponse,
  RetryImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<RetryImageRequest>,
  output: __S(94, __c11, 6) as any as S.Schema<RetryImageResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetryImage",
}));

export type SendWorkflowStepActionError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterValueException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Sends an action to a workflow step that has paused at a
 * `WaitForAction` step, so that image creation can continue.
 * To find the steps that are waiting for an action, call
 * ListWaitingWorkflowSteps.
 */
export const sendWorkflowStepAction: API.OperationMethod<
  SendWorkflowStepActionRequest,
  SendWorkflowStepActionResponse,
  SendWorkflowStepActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(271, __c33, 7) as any as S.Schema<SendWorkflowStepActionRequest>,
  output: __S(272, __c34, 0) as any as S.Schema<SendWorkflowStepActionResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterValueException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendWorkflowStepAction",
}));

export type StartImagePipelineExecutionError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Manually triggers a pipeline to create an image. You can start a build
 * this way whether the pipeline is enabled or disabled. The response returns
 * as soon as Image Builder creates the new image resource and queues the build. Use
 * the returned `imageBuildVersionArn` with
 * GetImage to track build progress.
 */
export const startImagePipelineExecution: API.OperationMethod<
  StartImagePipelineExecutionRequest,
  StartImagePipelineExecutionResponse,
  StartImagePipelineExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(273, __c34, 1) as any as S.Schema<StartImagePipelineExecutionRequest>,
  output: __S(1, __c0, 1) as any as S.Schema<StartImagePipelineExecutionResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImagePipelineExecution",
}));

export type StartResourceStateUpdateError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Begins an ad-hoc state change for the specified image build version.
 * This is a one-time operation - if you schedule the update, it runs only
 * once. If the
 * request includes underlying resources, or schedules the update far enough in
 * the future, Image Builder runs the update as an asynchronous lifecycle execution and
 * returns its identifier. Otherwise, for target states other than
 * `DELETED`, the state change applies immediately. If a request
 * that starts a lifecycle execution arrives while the image already has one in
 * progress, Image Builder rejects it.
 */
export const startResourceStateUpdate: API.OperationMethod<
  StartResourceStateUpdateRequest,
  StartResourceStateUpdateResponse,
  StartResourceStateUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276, __c34, 4) as any as S.Schema<StartResourceStateUpdateRequest>,
  output: __S(277, __c34, 5) as any as S.Schema<StartResourceStateUpdateResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartResourceStateUpdate",
}));

export type TagResourceError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceException
  | CommonErrors;
/**
 * Adds a tag to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(278, __c34, 6) as any as S.Schema<TagResourceRequest>,
  output: __S(279, __c34, 7) as any as S.Schema<TagResourceResponse>,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServiceException
  | CommonErrors;
/**
 * Removes a tag from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<UntagResourceRequest>,
  output: __S(279, __c34, 7) as any as S.Schema<UntagResourceResponse>,
  errors: [InvalidParameterException, ResourceNotFoundException, ServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDistributionConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterCombinationException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a distribution configuration. Distribution configurations define and
 * configure the outputs for your images, including the target Regions,
 * accounts, and settings for each Region.
 *
 * This operation doesn't support selective updates. The request
 * replaces the stored configuration, so include every setting that you
 * want to keep.
 */
export const updateDistributionConfiguration: API.OperationMethod<
  UpdateDistributionConfigurationRequest,
  UpdateDistributionConfigurationResponse,
  UpdateDistributionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(281, __c35, 1) as any as S.Schema<UpdateDistributionConfigurationRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<UpdateDistributionConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterCombinationException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDistributionConfiguration",
}));

export type UpdateImagePipelineError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an image pipeline. Use image pipelines to automate the creation and
 * distribution of images. You must specify exactly one recipe for your image, using either
 * a `containerRecipeArn` or an `imageRecipeArn`. The
 * recipe must be the same type, image or container, as the pipeline's current
 * recipe.
 *
 * UpdateImagePipeline does not support selective updates. The request
 * replaces the pipeline's entire configuration, so include every setting
 * that you want to keep. Any optional property that you omit is removed
 * or reset to its default.
 */
export const updateImagePipeline: API.OperationMethod<
  UpdateImagePipelineRequest,
  UpdateImagePipelineResponse,
  UpdateImagePipelineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(282, __c35, 2) as any as S.Schema<UpdateImagePipelineRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<UpdateImagePipelineResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateImagePipeline",
}));

export type UpdateInfrastructureConfigurationError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | InvalidParameterValueException
  | CommonErrors;
/**
 * Updates an infrastructure configuration. An infrastructure configuration defines
 * the environment in which Image Builder builds and tests your image.
 *
 * This operation doesn't support selective updates.
 * The request replaces the configuration, so include every setting that
 * you want to keep. Omitted optional properties are cleared.
 */
export const updateInfrastructureConfiguration: API.OperationMethod<
  UpdateInfrastructureConfigurationRequest,
  UpdateInfrastructureConfigurationResponse,
  UpdateInfrastructureConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<UpdateInfrastructureConfigurationRequest>,
  output: __S(59, __c7, 3) as any as S.Schema<UpdateInfrastructureConfigurationResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
    ResourceNotFoundException,
    InvalidParameterValueException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInfrastructureConfiguration",
}));

export type UpdateLifecyclePolicyError =
  | CallRateLimitExceededException
  | ClientException
  | ForbiddenException
  | IdempotentParameterMismatchException
  | InvalidParameterCombinationException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Updates the specified lifecycle policy. The request replaces the existing
 * policy configuration rather than merging changes, so re-specify every setting
 * that you want to keep. The `resourceType` must match the existing
 * policy's value.
 */
export const updateLifecyclePolicy: API.OperationMethod<
  UpdateLifecyclePolicyRequest,
  UpdateLifecyclePolicyResponse,
  UpdateLifecyclePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284, __c35, 4) as any as S.Schema<UpdateLifecyclePolicyRequest>,
  output: __S(90, __c11, 2) as any as S.Schema<UpdateLifecyclePolicyResponse>,
  errors: [
    CallRateLimitExceededException,
    ClientException,
    ForbiddenException,
    IdempotentParameterMismatchException,
    InvalidParameterCombinationException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLifecyclePolicy",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          imageBuildVersionArn: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CancelImageCreation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelImageCreationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CancelImageCreationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          lifecycleExecutionId: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CancelLifecycleExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelLifecycleExecutionRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ lifecycleExecutionId: S.optional(S.String) })).annotate({
        identifier: "CancelLifecycleExecutionResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          semanticVersion: S.String,
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          platform: S.String,
          supportedOsVersions: S.optional(__S(4, __c0, 4)),
          data: S.optional(S.String),
          uri: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/CreateComponent" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateComponentRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          latestVersionArn: S.optional(S.String),
          latestMajorVersionArn: S.optional(S.String),
          latestMinorVersionArn: S.optional(S.String),
          latestPatchVersionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "LatestVersionReferences" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          componentBuildVersionArn: S.optional(S.String),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "CreateComponentResponse" });
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, value: __S(4, __c0, 4) })).annotate({
        identifier: "ComponentParameter",
      });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ componentArn: S.String, parameters: S.optional(__S(10, __c1, 2)) }),
      ).annotate({ identifier: "ComponentConfiguration" });
    case 4:
      return S.Array(__S(11, __c1, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          encrypted: S.optional(S.Boolean),
          deleteOnTermination: S.optional(S.Boolean),
          iops: S.optional(S.Number),
          kmsKeyId: S.optional(S.String),
          snapshotId: S.optional(S.String),
          volumeSize: S.optional(S.Number),
          volumeType: S.optional(S.String),
          throughput: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "EbsInstanceBlockDeviceSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          deviceName: S.optional(S.String),
          ebs: S.optional(__S(13, __c1, 5)),
          virtualName: S.optional(S.String),
          noDevice: S.optional(S.String),
        }),
      ).annotate({
        identifier: "InstanceBlockDeviceMapping",
      });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          image: S.optional(S.String),
          blockDeviceMappings: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "InstanceConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ service: S.String, repositoryName: S.String })).annotate({
        identifier: "TargetContainerRepository",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          containerType: S.String,
          name: S.String,
          description: S.optional(S.String),
          semanticVersion: S.String,
          components: S.optional(__S(12, __c1, 4)),
          instanceConfiguration: S.optional(__S(16, __c2, 0)),
          dockerfileTemplateData: S.optional(S.String),
          dockerfileTemplateUri: S.optional(S.String),
          platformOverride: S.optional(S.String),
          imageOsVersionOverride: S.optional(S.String),
          parentImage: S.String,
          tags: S.optional(__S(5, __c0, 5)),
          workingDirectory: S.optional(S.String),
          targetRepository: __S(17, __c2, 1),
          kmsKeyId: S.optional(S.String),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CreateContainerRecipe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateContainerRecipeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          containerRecipeArn: S.optional(S.String),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "CreateContainerRecipeResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          userIds: S.optional(__S(4, __c0, 4)),
          userGroups: S.optional(__S(4, __c0, 4)),
          organizationArns: S.optional(__S(4, __c0, 4)),
          organizationalUnitArns: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({
        identifier: "LaunchPermissionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          description: S.optional(S.String),
          targetAccountIds: S.optional(__S(4, __c0, 4)),
          amiTags: S.optional(__S(5, __c0, 5)),
          kmsKeyId: S.optional(S.String),
          launchPermission: S.optional(__S(20, __c2, 4)),
        }),
      ).annotate({
        identifier: "AmiDistributionConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          description: S.optional(S.String),
          containerTags: S.optional(__S(4, __c0, 4)),
          targetRepository: __S(17, __c2, 1),
        }),
      ).annotate({
        identifier: "ContainerDistributionConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          launchTemplateId: S.String,
          accountId: S.optional(S.String),
          setDefaultVersion: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "LaunchTemplateConfiguration",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23, __c2, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          roleName: S.String,
          diskImageFormat: S.String,
          s3Bucket: S.String,
          s3Prefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3ExportConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ targetResourceCount: S.optional(S.Number) })).annotate({
        identifier: "FastLaunchSnapshotConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          launchTemplateId: S.optional(S.String),
          launchTemplateName: S.optional(S.String),
          launchTemplateVersion: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FastLaunchLaunchTemplateSpecification",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          snapshotConfiguration: S.optional(__S(26, __c3, 2)),
          maxParallelLaunches: S.optional(S.Number),
          launchTemplate: S.optional(__S(27, __c3, 3)),
          accountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "FastLaunchConfiguration" });
    case 5:
      return S.Array(__S(28, __c3, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          amiAccountId: S.optional(S.String),
          parameterName: S.String,
          dataType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SsmParameterConfiguration",
      });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          region: S.String,
          amiDistributionConfiguration: S.optional(__S(21, __c2, 5)),
          containerDistributionConfiguration: S.optional(__S(22, __c2, 6)),
          licenseConfigurationArns: S.optional(__S(4, __c0, 4)),
          launchTemplateConfigurations: S.optional(__S(24, __c3, 0)),
          s3ExportConfiguration: S.optional(__S(25, __c3, 1)),
          fastLaunchConfigurations: S.optional(__S(29, __c3, 5)),
          ssmParameterConfigurations: S.optional(__S(31, __c3, 7)),
        }),
      ).annotate({ identifier: "Distribution" });
    case 1:
      return S.Array(__S(32, __c4, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          distributions: __S(33, __c4, 1),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CreateDistributionConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDistributionConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          distributionConfigurationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateDistributionConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          imageTestsEnabled: S.optional(S.Boolean),
          timeoutMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ImageTestsConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          repositoryName: S.optional(S.String),
          containerTags: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "EcrConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          imageScanningEnabled: S.optional(S.Boolean),
          ecrConfiguration: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({
        identifier: "ImageScanningConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workflowArn: S.String,
          parameters: S.optional(__S(10, __c1, 2)),
          parallelGroup: S.optional(S.String),
          onFailure: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkflowConfiguration" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() => S.Struct({ logGroupName: S.optional(S.String) })).annotate({
        identifier: "ImageLoggingConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageRecipeArn: S.optional(S.String),
          containerRecipeArn: S.optional(S.String),
          distributionConfigurationArn: S.optional(S.String),
          infrastructureConfigurationArn: S.String,
          imageTestsConfiguration: S.optional(__S(36, __c4, 4)),
          enhancedImageMetadataEnabled: S.optional(S.Boolean),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          imageScanningConfiguration: S.optional(__S(38, __c4, 6)),
          workflows: S.optional(__S(40, __c5, 0)),
          executionRole: S.optional(S.String),
          loggingConfiguration: S.optional(__S(41, __c5, 1)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/CreateImage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateImageRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "CreateImageResponse" });
    case 4:
      return S.suspend(() => S.Struct({ failureCount: S.Number })).annotate({
        identifier: "AutoDisablePolicy",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          scheduleExpression: S.optional(S.String),
          timezone: S.optional(S.String),
          pipelineExecutionStartCondition: S.optional(S.String),
          autoDisablePolicy: S.optional(__S(44, __c5, 4)),
        }),
      ).annotate({ identifier: "Schedule" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          imageLogGroupName: S.optional(S.String),
          pipelineLogGroupName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PipelineLoggingConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          imageRecipeArn: S.optional(S.String),
          containerRecipeArn: S.optional(S.String),
          infrastructureConfigurationArn: S.String,
          distributionConfigurationArn: S.optional(S.String),
          imageTestsConfiguration: S.optional(__S(36, __c4, 4)),
          enhancedImageMetadataEnabled: S.optional(S.Boolean),
          schedule: S.optional(__S(45, __c5, 5)),
          status: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          imageTags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          imageScanningConfiguration: S.optional(__S(38, __c4, 6)),
          workflows: S.optional(__S(40, __c5, 0)),
          executionRole: S.optional(S.String),
          loggingConfiguration: S.optional(__S(46, __c5, 6)),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CreateImagePipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateImagePipelineRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          imagePipelineArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateImagePipelineResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ uninstallAfterBuild: S.optional(S.Boolean) })).annotate({
        identifier: "SystemsManagerAgent",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          systemsManagerAgent: S.optional(__S(49, __c6, 1)),
          userDataOverride: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AdditionalInstanceConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          semanticVersion: S.String,
          components: S.optional(__S(12, __c1, 4)),
          parentImage: S.String,
          blockDeviceMappings: S.optional(__S(15, __c1, 7)),
          tags: S.optional(__S(5, __c0, 5)),
          workingDirectory: S.optional(S.String),
          additionalInstanceConfiguration: S.optional(__S(50, __c6, 2)),
          amiTags: S.optional(__S(5, __c0, 5)),
          amiWatermarks: S.optional(__S(4, __c0, 4)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/CreateImageRecipe" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateImageRecipeRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          imageRecipeArn: S.optional(S.String),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "CreateImageRecipeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ s3BucketName: S.optional(S.String), s3KeyPrefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3Logs" });
    case 6:
      return S.suspend(() => S.Struct({ s3Logs: S.optional(__S(53, __c6, 5)) })).annotate({
        identifier: "Logging",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          httpTokens: S.optional(S.String),
          httpPutResponseHopLimit: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InstanceMetadataOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          availabilityZone: S.optional(S.String),
          tenancy: S.optional(S.String),
          hostId: S.optional(S.String),
          hostResourceGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Placement" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          instanceTypes: S.optional(__S(4, __c0, 4)),
          instanceProfileName: S.String,
          securityGroupIds: S.optional(__S(4, __c0, 4)),
          subnetId: S.optional(S.String),
          logging: S.optional(__S(54, __c6, 6)),
          keyPair: S.optional(S.String),
          terminateInstanceOnFailure: S.optional(S.Boolean),
          snsTopicArn: S.optional(S.String),
          resourceTags: S.optional(__S(55, __c6, 7)),
          instanceMetadataOptions: S.optional(__S(56, __c7, 0)),
          tags: S.optional(__S(5, __c0, 5)),
          placement: S.optional(__S(57, __c7, 1)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CreateInfrastructureConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateInfrastructureConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          infrastructureConfigurationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateInfrastructureConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          amis: S.optional(S.Boolean),
          snapshots: S.optional(S.Boolean),
          containers: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "LifecyclePolicyDetailActionIncludeResources",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          includeResources: S.optional(__S(60, __c7, 4)),
        }),
      ).annotate({
        identifier: "LifecyclePolicyDetailAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          value: S.Number,
          unit: S.optional(S.String),
          retainAtLeast: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "LifecyclePolicyDetailFilter",
      });
    case 7:
      return S.suspend(() => S.Struct({ value: S.Number, unit: S.String })).annotate({
        identifier: "LifecyclePolicyDetailExclusionRulesAmisLastLaunched",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          isPublic: S.optional(S.Boolean),
          regions: S.optional(__S(4, __c0, 4)),
          sharedAccounts: S.optional(__S(4, __c0, 4)),
          lastLaunched: S.optional(__S(63, __c7, 7)),
          tagMap: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "LifecyclePolicyDetailExclusionRulesAmis",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tagMap: S.optional(__S(5, __c0, 5)),
          amis: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({
        identifier: "LifecyclePolicyDetailExclusionRules",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          action: __S(61, __c7, 5),
          filter: __S(62, __c7, 6),
          exclusionRules: S.optional(__S(65, __c8, 1)),
        }),
      ).annotate({ identifier: "LifecyclePolicyDetail" });
    case 3:
      return S.Array(__S(66, __c8, 2));
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, semanticVersion: S.String })).annotate({
        identifier: "LifecyclePolicyResourceSelectionRecipe",
      });
    case 5:
      return S.Array(__S(68, __c8, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          recipes: S.optional(__S(69, __c8, 5)),
          tagMap: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "LifecyclePolicyResourceSelection",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          status: S.optional(S.String),
          executionRole: S.String,
          resourceType: S.String,
          policyDetails: __S(67, __c8, 3),
          resourceSelection: __S(70, __c8, 6),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/CreateLifecyclePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLifecyclePolicyRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ clientToken: S.optional(S.String), lifecyclePolicyArn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateLifecyclePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          semanticVersion: S.String,
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          data: S.optional(S.String),
          uri: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          type: S.String,
          dryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/CreateWorkflow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWorkflowRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String),
          workflowBuildVersionArn: S.optional(S.String),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "CreateWorkflowResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          componentBuildVersionArn: S.String.pipe(T.HttpQuery("componentBuildVersionArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteComponent" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteComponentRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          componentBuildVersionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteComponentResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ containerRecipeArn: S.String.pipe(T.HttpQuery("containerRecipeArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteContainerRecipe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteContainerRecipeRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), containerRecipeArn: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteContainerRecipeResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          distributionConfigurationArn: S.String.pipe(T.HttpQuery("distributionConfigurationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteDistributionConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDistributionConfigurationRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          distributionConfigurationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteDistributionConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ imageBuildVersionArn: S.String.pipe(T.HttpQuery("imageBuildVersionArn")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/DeleteImage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteImageRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), imageBuildVersionArn: S.optional(S.String) }),
      ).annotate({ identifier: "DeleteImageResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ imagePipelineArn: S.String.pipe(T.HttpQuery("imagePipelineArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteImagePipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteImagePipelineRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), imagePipelineArn: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteImagePipelineResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ imageRecipeArn: S.String.pipe(T.HttpQuery("imageRecipeArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteImageRecipe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteImageRecipeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), imageRecipeArn: S.optional(S.String) }),
      ).annotate({
        identifier: "DeleteImageRecipeResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          infrastructureConfigurationArn: S.String.pipe(
            T.HttpQuery("infrastructureConfigurationArn"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteInfrastructureConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInfrastructureConfigurationRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          infrastructureConfigurationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteInfrastructureConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ lifecyclePolicyArn: S.String.pipe(T.HttpQuery("lifecyclePolicyArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteLifecyclePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLifecyclePolicyRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ lifecyclePolicyArn: S.optional(S.String) })).annotate({
        identifier: "DeleteLifecyclePolicyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowBuildVersionArn: S.String.pipe(T.HttpQuery("workflowBuildVersionArn")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/DeleteWorkflow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWorkflowRequest" });
    case 4:
      return S.suspend(() => S.Struct({ workflowBuildVersionArn: S.optional(S.String) })).annotate({
        identifier: "DeleteWorkflowResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          sourceImage: S.String,
          distributionConfigurationArn: S.String,
          executionRole: S.String,
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          loggingConfiguration: S.optional(__S(41, __c5, 1)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/DistributeImage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DistributeImageRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ clientToken: S.optional(S.String), imageBuildVersionArn: S.optional(S.String) }),
      ).annotate({ identifier: "DistributeImageResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          componentBuildVersionArn: S.String.pipe(T.HttpQuery("componentBuildVersionArn")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetComponent" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetComponentRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "ComponentState" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          type: S.String,
          defaultValue: S.optional(__S(4, __c0, 4)),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentParameterDetail" });
    case 2:
      return S.Array(__S(97, __c12, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ productCodeId: S.String, productCodeType: S.String }),
      ).annotate({ identifier: "ProductCodeListItem" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          type: S.optional(S.String),
          platform: S.optional(S.String),
          supportedOsVersions: S.optional(__S(4, __c0, 4)),
          state: S.optional(__S(96, __c12, 0)),
          parameters: S.optional(__S(98, __c12, 2)),
          owner: S.optional(S.String),
          data: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          encrypted: S.optional(S.Boolean),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          publisher: S.optional(S.String),
          obfuscate: S.optional(S.Boolean),
          productCodes: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "Component" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          component: S.optional(__S(101, __c12, 5)),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "GetComponentResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ componentArn: S.String.pipe(T.HttpQuery("componentArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetComponentPolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetComponentPolicyRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), policy: S.optional(S.String) }),
      ).annotate({
        identifier: "GetComponentPolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ containerRecipeArn: S.String.pipe(T.HttpQuery("containerRecipeArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetContainerRecipe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetContainerRecipeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          containerType: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          platform: S.optional(S.String),
          owner: S.optional(S.String),
          version: S.optional(S.String),
          components: S.optional(__S(12, __c1, 4)),
          instanceConfiguration: S.optional(__S(16, __c2, 0)),
          dockerfileTemplateData: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          encrypted: S.optional(S.Boolean),
          parentImage: S.optional(S.String),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          workingDirectory: S.optional(S.String),
          targetRepository: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "ContainerRecipe" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          containerRecipe: S.optional(__S(106, __c13, 2)),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({
        identifier: "GetContainerRecipeResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ containerRecipeArn: S.String.pipe(T.HttpQuery("containerRecipeArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetContainerRecipePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetContainerRecipePolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          distributionConfigurationArn: S.String.pipe(T.HttpQuery("distributionConfigurationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetDistributionConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDistributionConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          distributions: S.optional(__S(33, __c4, 1)),
          timeoutMinutes: S.optional(S.Number),
          dateCreated: S.optional(S.String),
          dateUpdated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({
        identifier: "DistributionConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          distributionConfiguration: S.optional(__S(110, __c13, 6)),
        }),
      ).annotate({
        identifier: "GetDistributionConfigurationResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ imageBuildVersionArn: S.String.pipe(T.HttpQuery("imageBuildVersionArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetImage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetImageRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          componentArn: S.optional(S.String),
          phaseName: S.optional(S.String),
          stepName: S.optional(S.String),
          action: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComponentFailureContext" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          status: S.optional(S.String),
          imageConfigurationStep: S.optional(S.String),
          errorMessage: S.optional(S.String),
          targetAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RegionFailure" });
    case 3:
      return S.Array(__S(114, __c14, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          errorMessage: S.optional(S.String),
          regionFailures: S.optional(__S(115, __c14, 3)),
        }),
      ).annotate({
        identifier: "DistributionFailureContext",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          imageStatus: S.optional(S.String),
          workflowExecutionId: S.optional(S.String),
          workflowArn: S.optional(S.String),
          stepExecutionId: S.optional(S.String),
          failedStep: S.optional(S.String),
          componentFailure: S.optional(__S(113, __c14, 1)),
          distributionFailure: S.optional(__S(116, __c14, 4)),
        }),
      ).annotate({ identifier: "ImageFailureContext" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          reason: S.optional(S.String),
          failureContext: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({ identifier: "ImageState" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          platform: S.optional(S.String),
          owner: S.optional(S.String),
          version: S.optional(S.String),
          components: S.optional(__S(12, __c1, 4)),
          parentImage: S.optional(S.String),
          blockDeviceMappings: S.optional(__S(15, __c1, 7)),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          workingDirectory: S.optional(S.String),
          additionalInstanceConfiguration: S.optional(__S(50, __c6, 2)),
          amiTags: S.optional(__S(5, __c0, 5)),
          amiWatermarks: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "ImageRecipe" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          instanceTypes: S.optional(__S(4, __c0, 4)),
          instanceProfileName: S.optional(S.String),
          securityGroupIds: S.optional(__S(4, __c0, 4)),
          subnetId: S.optional(S.String),
          logging: S.optional(__S(54, __c6, 6)),
          keyPair: S.optional(S.String),
          terminateInstanceOnFailure: S.optional(S.Boolean),
          snsTopicArn: S.optional(S.String),
          dateCreated: S.optional(S.String),
          dateUpdated: S.optional(S.String),
          resourceTags: S.optional(__S(55, __c6, 7)),
          instanceMetadataOptions: S.optional(__S(56, __c7, 0)),
          tags: S.optional(__S(5, __c0, 5)),
          placement: S.optional(__S(57, __c7, 1)),
        }),
      ).annotate({
        identifier: "InfrastructureConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          region: S.optional(S.String),
          image: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          state: S.optional(__S(118, __c14, 6)),
          accountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ami" });
    case 2:
      return S.Array(__S(121, __c15, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ region: S.optional(S.String), imageUris: S.optional(__S(4, __c0, 4)) }),
      ).annotate({ identifier: "Container" });
    case 4:
      return S.Array(__S(123, __c15, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          amis: S.optional(__S(122, __c15, 2)),
          containers: S.optional(__S(124, __c15, 4)),
        }),
      ).annotate({ identifier: "OutputResources" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          type: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          platform: S.optional(S.String),
          enhancedImageMetadataEnabled: S.optional(S.Boolean),
          osVersion: S.optional(S.String),
          state: S.optional(__S(118, __c14, 6)),
          imageRecipe: S.optional(__S(119, __c14, 7)),
          containerRecipe: S.optional(__S(106, __c13, 2)),
          sourcePipelineName: S.optional(S.String),
          sourcePipelineArn: S.optional(S.String),
          infrastructureConfiguration: S.optional(__S(120, __c15, 0)),
          distributionConfiguration: S.optional(__S(110, __c13, 6)),
          imageTestsConfiguration: S.optional(__S(36, __c4, 4)),
          dateCreated: S.optional(S.String),
          outputResources: S.optional(__S(125, __c15, 5)),
          tags: S.optional(__S(5, __c0, 5)),
          buildType: S.optional(S.String),
          imageSource: S.optional(S.String),
          scanState: S.optional(__S(96, __c12, 0)),
          imageScanningConfiguration: S.optional(__S(38, __c4, 6)),
          deprecationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lifecycleExecutionId: S.optional(S.String),
          executionRole: S.optional(S.String),
          workflows: S.optional(__S(40, __c5, 0)),
          loggingConfiguration: S.optional(__S(41, __c5, 1)),
        }),
      ).annotate({ identifier: "Image" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          image: S.optional(__S(126, __c15, 6)),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "GetImageResponse" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ imagePipelineArn: S.String.pipe(T.HttpQuery("imagePipelineArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetImagePipeline" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetImagePipelineRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          platform: S.optional(S.String),
          enhancedImageMetadataEnabled: S.optional(S.Boolean),
          imageRecipeArn: S.optional(S.String),
          containerRecipeArn: S.optional(S.String),
          infrastructureConfigurationArn: S.optional(S.String),
          distributionConfigurationArn: S.optional(S.String),
          imageTestsConfiguration: S.optional(__S(36, __c4, 4)),
          schedule: S.optional(__S(45, __c5, 5)),
          status: S.optional(S.String),
          dateCreated: S.optional(S.String),
          dateUpdated: S.optional(S.String),
          dateLastRun: S.optional(S.String),
          lastRunStatus: S.optional(S.String),
          dateNextRun: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          imageScanningConfiguration: S.optional(__S(38, __c4, 6)),
          imageTags: S.optional(__S(5, __c0, 5)),
          executionRole: S.optional(S.String),
          workflows: S.optional(__S(40, __c5, 0)),
          loggingConfiguration: S.optional(__S(46, __c5, 6)),
          consecutiveFailures: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ImagePipeline" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imagePipeline: S.optional(__S(129, __c16, 1)),
        }),
      ).annotate({ identifier: "GetImagePipelineResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ imageArn: S.String.pipe(T.HttpQuery("imageArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetImagePolicy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetImagePolicyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), policy: S.optional(S.String) }),
      ).annotate({ identifier: "GetImagePolicyResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ imageRecipeArn: S.String.pipe(T.HttpQuery("imageRecipeArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetImageRecipe" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetImageRecipeRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imageRecipe: S.optional(__S(119, __c14, 7)),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "GetImageRecipeResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ imageRecipeArn: S.String.pipe(T.HttpQuery("imageRecipeArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetImageRecipePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetImageRecipePolicyRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          infrastructureConfigurationArn: S.String.pipe(
            T.HttpQuery("infrastructureConfigurationArn"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetInfrastructureConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetInfrastructureConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          infrastructureConfiguration: S.optional(__S(120, __c15, 0)),
        }),
      ).annotate({
        identifier: "GetInfrastructureConfigurationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ lifecycleExecutionId: S.String.pipe(T.HttpQuery("lifecycleExecutionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetLifecycleExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLifecycleExecutionRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ hasImpactedResources: S.optional(S.Boolean) })).annotate({
        identifier: "LifecycleExecutionResourcesImpactedSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          lifecycleExecutionId: S.optional(S.String),
          lifecyclePolicyArn: S.optional(S.String),
          resourcesImpactedSummary: S.optional(__S(139, __c17, 3)),
          state: S.optional(__S(96, __c12, 0)),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LifecycleExecution" });
    case 5:
      return S.suspend(() =>
        S.Struct({ lifecycleExecution: S.optional(__S(140, __c17, 4)) }),
      ).annotate({
        identifier: "GetLifecycleExecutionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ lifecyclePolicyArn: S.String.pipe(T.HttpQuery("lifecyclePolicyArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetLifecyclePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetLifecyclePolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
          executionRole: S.optional(S.String),
          resourceType: S.optional(S.String),
          policyDetails: S.optional(__S(67, __c8, 3)),
          resourceSelection: S.optional(__S(70, __c8, 6)),
          dateCreated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dateUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dateLastRun: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "LifecyclePolicy" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ lifecyclePolicy: S.optional(__S(143, __c17, 7)) }),
      ).annotate({
        identifier: "GetLifecyclePolicyResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.String,
          resourceArn: S.String,
          resourceLocation: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetMarketplaceResource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMarketplaceResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.optional(S.String),
          url: S.optional(S.String),
          data: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetMarketplaceResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowBuildVersionArn: S.String.pipe(T.HttpQuery("workflowBuildVersionArn")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetWorkflow" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetWorkflowRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          type: S.optional(S.String),
          state: S.optional(__S(96, __c12, 0)),
          owner: S.optional(S.String),
          data: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          parameters: S.optional(__S(98, __c12, 2)),
        }),
      ).annotate({ identifier: "Workflow" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflow: S.optional(__S(148, __c18, 4)),
          latestVersionReferences: S.optional(__S(7, __c0, 7)),
        }),
      ).annotate({ identifier: "GetWorkflowResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ workflowExecutionId: S.String.pipe(T.HttpQuery("workflowExecutionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetWorkflowExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkflowExecutionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          workflowBuildVersionArn: S.optional(S.String),
          workflowExecutionId: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          type: S.optional(S.String),
          status: S.optional(S.String),
          message: S.optional(S.String),
          totalStepCount: S.optional(S.Number),
          totalStepsSucceeded: S.optional(S.Number),
          totalStepsFailed: S.optional(S.Number),
          totalStepsSkipped: S.optional(S.Number),
          startTime: S.optional(S.String),
          endTime: S.optional(S.String),
          parallelGroup: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetWorkflowExecutionResponse",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ stepExecutionId: S.String.pipe(T.HttpQuery("stepExecutionId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/GetWorkflowStepExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkflowStepExecutionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          stepExecutionId: S.optional(S.String),
          workflowBuildVersionArn: S.optional(S.String),
          workflowExecutionId: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          action: S.optional(S.String),
          status: S.optional(S.String),
          rollbackStatus: S.optional(S.String),
          message: S.optional(S.String),
          inputs: S.optional(S.String),
          outputs: S.optional(S.String),
          startTime: S.optional(S.String),
          endTime: S.optional(S.String),
          onFailure: S.optional(S.String),
          timeoutSeconds: S.optional(S.Number),
          attemptNumber: S.optional(S.Number),
          maxAttempts: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetWorkflowStepExecutionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          semanticVersion: S.String,
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          type: S.String,
          format: S.String,
          platform: S.String,
          data: S.optional(S.String),
          uri: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/ImportComponent" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ImportComponentRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          clientToken: S.optional(S.String),
          componentBuildVersionArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportComponentResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ secureBootEnabled: S.optional(S.Boolean), uefiData: S.optional(S.String) }),
      ).annotate({ identifier: "RegisterImageOptions" });
    case 5:
      return S.suspend(() => S.Struct({ imageIndex: S.Number })).annotate({
        identifier: "WindowsConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          semanticVersion: S.String,
          description: S.optional(S.String),
          platform: S.String,
          osVersion: S.String,
          executionRole: S.optional(S.String),
          infrastructureConfigurationArn: S.String,
          uri: S.String,
          loggingConfiguration: S.optional(__S(41, __c5, 1)),
          tags: S.optional(__S(5, __c0, 5)),
          registerImageOptions: S.optional(__S(156, __c19, 4)),
          windowsConfiguration: S.optional(__S(157, __c19, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/ImportDiskImage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ImportDiskImageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          semanticVersion: S.String,
          description: S.optional(S.String),
          platform: S.String,
          osVersion: S.optional(S.String),
          vmImportTaskId: S.String,
          loggingConfiguration: S.optional(__S(41, __c5, 1)),
          tags: S.optional(__S(5, __c0, 5)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/ImportVmImage" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ImportVmImageRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imageArn: S.optional(S.String),
          clientToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportVmImageResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          componentVersionArn: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListComponentBuildVersions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListComponentBuildVersionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          platform: S.optional(S.String),
          supportedOsVersions: S.optional(__S(4, __c0, 4)),
          state: S.optional(__S(96, __c12, 0)),
          type: S.optional(S.String),
          owner: S.optional(S.String),
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          publisher: S.optional(S.String),
          obfuscate: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ComponentSummary" });
    case 3:
      return S.Array(__S(162, __c20, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          componentSummaryList: S.optional(__S(163, __c20, 3)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListComponentBuildVersionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), values: S.optional(__S(4, __c0, 4)) }),
      ).annotate({ identifier: "Filter" });
    case 6:
      return S.Array(__S(165, __c20, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          owner: S.optional(S.String),
          filters: S.optional(__S(166, __c20, 6)),
          byName: S.optional(S.Boolean),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListComponents" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListComponentsRequest" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          description: S.optional(S.String),
          platform: S.optional(S.String),
          supportedOsVersions: S.optional(__S(4, __c0, 4)),
          type: S.optional(S.String),
          owner: S.optional(S.String),
          dateCreated: S.optional(S.String),
          status: S.optional(S.String),
          productCodes: S.optional(__S(100, __c12, 4)),
        }),
      ).annotate({ identifier: "ComponentVersion" });
    case 1:
      return S.Array(__S(168, __c21, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          componentVersionList: S.optional(__S(169, __c21, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListComponentsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          owner: S.optional(S.String),
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListContainerRecipes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListContainerRecipesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          containerType: S.optional(S.String),
          name: S.optional(S.String),
          platform: S.optional(S.String),
          owner: S.optional(S.String),
          parentImage: S.optional(S.String),
          dateCreated: S.optional(S.String),
          instanceImage: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "ContainerRecipeSummary" });
    case 5:
      return S.Array(__S(172, __c21, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          containerRecipeSummaryList: S.optional(__S(173, __c21, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListContainerRecipesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListDistributionConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDistributionConfigurationsRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          dateCreated: S.optional(S.String),
          dateUpdated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
          regions: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({
        identifier: "DistributionConfigurationSummary",
      });
    case 1:
      return S.Array(__S(176, __c22, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          distributionConfigurationSummaryList: S.optional(__S(177, __c22, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDistributionConfigurationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          imageVersionArn: S.optional(S.String),
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListImageBuildVersions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImageBuildVersionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          version: S.optional(S.String),
          platform: S.optional(S.String),
          osVersion: S.optional(S.String),
          state: S.optional(__S(118, __c14, 6)),
          owner: S.optional(S.String),
          dateCreated: S.optional(S.String),
          outputResources: S.optional(__S(125, __c15, 5)),
          tags: S.optional(__S(5, __c0, 5)),
          buildType: S.optional(S.String),
          imageSource: S.optional(S.String),
          deprecationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lifecycleExecutionId: S.optional(S.String),
          loggingConfiguration: S.optional(__S(41, __c5, 1)),
        }),
      ).annotate({ identifier: "ImageSummary" });
    case 5:
      return S.Array(__S(180, __c22, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imageSummaryList: S.optional(__S(181, __c22, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImageBuildVersionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          imageBuildVersionArn: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListImagePackages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListImagePackagesRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ packageName: S.optional(S.String), packageVersion: S.optional(S.String) }),
      ).annotate({ identifier: "ImagePackage" });
    case 1:
      return S.Array(__S(184, __c23, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imagePackageList: S.optional(__S(185, __c23, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImagePackagesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          imagePipelineArn: S.String,
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListImagePipelineImages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImagePipelineImagesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListImagePipelines" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImagePipelinesRequest",
      });
    case 5:
      return S.Array(__S(129, __c16, 1));
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imagePipelineList: S.optional(__S(189, __c23, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImagePipelinesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          owner: S.optional(S.String),
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListImageRecipes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListImageRecipesRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          platform: S.optional(S.String),
          owner: S.optional(S.String),
          parentImage: S.optional(S.String),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "ImageRecipeSummary" });
    case 1:
      return S.Array(__S(192, __c24, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imageRecipeSummaryList: S.optional(__S(193, __c24, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListImageRecipesResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          owner: S.optional(S.String),
          filters: S.optional(__S(166, __c20, 6)),
          byName: S.optional(S.Boolean),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          includeDeprecated: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListImages" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListImagesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          version: S.optional(S.String),
          platform: S.optional(S.String),
          osVersion: S.optional(S.String),
          owner: S.optional(S.String),
          dateCreated: S.optional(S.String),
          buildType: S.optional(S.String),
          imageSource: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageVersion" });
    case 5:
      return S.Array(__S(196, __c24, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          imageVersionList: S.optional(__S(197, __c24, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListImagesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ filter: S.optional(__S(165, __c20, 5)), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListImageScanFindingAggregations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImageScanFindingAggregationsRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          all: S.optional(S.Number),
          critical: S.optional(S.Number),
          high: S.optional(S.Number),
          medium: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SeverityCounts" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          severityCounts: S.optional(__S(200, __c25, 0)),
        }),
      ).annotate({ identifier: "AccountAggregation" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imageBuildVersionArn: S.optional(S.String),
          severityCounts: S.optional(__S(200, __c25, 0)),
        }),
      ).annotate({ identifier: "ImageAggregation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          imagePipelineArn: S.optional(S.String),
          severityCounts: S.optional(__S(200, __c25, 0)),
        }),
      ).annotate({ identifier: "ImagePipelineAggregation" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          vulnerabilityId: S.optional(S.String),
          severityCounts: S.optional(__S(200, __c25, 0)),
        }),
      ).annotate({
        identifier: "VulnerabilityIdAggregation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accountAggregation: S.optional(__S(201, __c25, 1)),
          imageAggregation: S.optional(__S(202, __c25, 2)),
          imagePipelineAggregation: S.optional(__S(203, __c25, 3)),
          vulnerabilityIdAggregation: S.optional(__S(204, __c25, 4)),
        }),
      ).annotate({
        identifier: "ImageScanFindingAggregation",
      });
    case 6:
      return S.Array(__S(205, __c25, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          aggregationType: S.optional(S.String),
          responses: S.optional(__S(206, __c25, 6)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImageScanFindingAggregationsResponse",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListImageScanFindings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListImageScanFindingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ text: S.optional(S.String), url: S.optional(S.String) }),
      ).annotate({
        identifier: "RemediationRecommendation",
      });
    case 2:
      return S.suspend(() => S.Struct({ recommendation: S.optional(__S(209, __c26, 1)) })).annotate(
        { identifier: "Remediation" },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ metric: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "CvssScoreAdjustment" });
    case 4:
      return S.Array(__S(211, __c26, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          scoreSource: S.optional(S.String),
          cvssSource: S.optional(S.String),
          version: S.optional(S.String),
          score: S.optional(S.Number),
          scoringVector: S.optional(S.String),
          adjustments: S.optional(__S(212, __c26, 4)),
        }),
      ).annotate({ identifier: "CvssScoreDetails" });
    case 6:
      return S.suspend(() => S.Struct({ adjustedCvss: S.optional(__S(213, __c26, 5)) })).annotate({
        identifier: "InspectorScoreDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          version: S.optional(S.String),
          sourceLayerHash: S.optional(S.String),
          epoch: S.optional(S.Number),
          release: S.optional(S.String),
          arch: S.optional(S.String),
          packageManager: S.optional(S.String),
          filePath: S.optional(S.String),
          fixedInVersion: S.optional(S.String),
          remediation: S.optional(S.String),
        }),
      ).annotate({ identifier: "VulnerablePackage" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(215, __c26, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          baseScore: S.optional(S.Number),
          scoringVector: S.optional(S.String),
          version: S.optional(S.String),
          source: S.optional(S.String),
        }),
      ).annotate({ identifier: "CvssScore" });
    case 2:
      return S.Array(__S(217, __c27, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          vulnerabilityId: S.String,
          vulnerablePackages: S.optional(__S(216, __c27, 0)),
          source: S.optional(S.String),
          cvss: S.optional(__S(218, __c27, 2)),
          relatedVulnerabilities: S.optional(__S(4, __c0, 4)),
          sourceUrl: S.optional(S.String),
          vendorSeverity: S.optional(S.String),
          vendorCreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vendorUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          referenceUrls: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({
        identifier: "PackageVulnerabilityDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          awsAccountId: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          imagePipelineArn: S.optional(S.String),
          type: S.optional(S.String),
          description: S.optional(S.String),
          title: S.optional(S.String),
          remediation: S.optional(__S(210, __c26, 2)),
          severity: S.optional(S.String),
          firstObservedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          inspectorScore: S.optional(S.Number),
          inspectorScoreDetails: S.optional(__S(214, __c26, 6)),
          packageVulnerabilityDetails: S.optional(__S(219, __c27, 3)),
          fixAvailable: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImageScanFinding" });
    case 5:
      return S.Array(__S(220, __c27, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          findings: S.optional(__S(221, __c27, 5)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListImageScanFindingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListInfrastructureConfigurations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListInfrastructureConfigurationsRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          dateCreated: S.optional(S.String),
          dateUpdated: S.optional(S.String),
          resourceTags: S.optional(__S(55, __c6, 7)),
          tags: S.optional(__S(5, __c0, 5)),
          instanceTypes: S.optional(__S(4, __c0, 4)),
          instanceProfileName: S.optional(S.String),
          placement: S.optional(__S(57, __c7, 1)),
        }),
      ).annotate({
        identifier: "InfrastructureConfigurationSummary",
      });
    case 1:
      return S.Array(__S(224, __c28, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          infrastructureConfigurationSummaryList: S.optional(__S(225, __c28, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListInfrastructureConfigurationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          lifecycleExecutionId: S.String,
          parentResourceId: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLifecycleExecutionResources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLifecycleExecutionResourcesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          reason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LifecycleExecutionResourceState",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          reason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LifecycleExecutionResourceAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          snapshotId: S.optional(S.String),
          state: S.optional(__S(228, __c28, 4)),
        }),
      ).annotate({
        identifier: "LifecycleExecutionSnapshotResource",
      });
    case 7:
      return S.Array(__S(230, __c28, 6));
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          resourceId: S.optional(S.String),
          state: S.optional(__S(228, __c28, 4)),
          action: S.optional(__S(229, __c28, 5)),
          region: S.optional(S.String),
          snapshots: S.optional(__S(231, __c28, 7)),
          imageUris: S.optional(__S(4, __c0, 4)),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "LifecycleExecutionResource",
      });
    case 1:
      return S.Array(__S(232, __c29, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          lifecycleExecutionId: S.optional(S.String),
          lifecycleExecutionState: S.optional(__S(96, __c12, 0)),
          resources: S.optional(__S(233, __c29, 1)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLifecycleExecutionResourcesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          resourceArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLifecycleExecutions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLifecycleExecutionsRequest",
      });
    case 4:
      return S.Array(__S(140, __c17, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({
          lifecycleExecutions: S.optional(__S(236, __c29, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLifecycleExecutionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(166, __c20, 6)),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListLifecyclePolicies" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLifecyclePoliciesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          status: S.optional(S.String),
          executionRole: S.optional(S.String),
          resourceType: S.optional(S.String),
          dateCreated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dateUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          dateLastRun: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "LifecyclePolicySummary" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(239, __c29, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          lifecyclePolicySummaryList: S.optional(__S(240, __c30, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLifecyclePoliciesResponse",
      });
    case 2:
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
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(5, __c0, 5)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListWaitingWorkflowSteps" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWaitingWorkflowStepsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          stepExecutionId: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          workflowExecutionId: S.optional(S.String),
          workflowBuildVersionArn: S.optional(S.String),
          name: S.optional(S.String),
          action: S.optional(S.String),
          startTime: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkflowStepExecution" });
    case 6:
      return S.Array(__S(245, __c30, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ steps: S.optional(__S(246, __c30, 6)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListWaitingWorkflowStepsResponse",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workflowVersionArn: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListWorkflowBuildVersions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkflowBuildVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          description: S.optional(S.String),
          changeDescription: S.optional(S.String),
          type: S.optional(S.String),
          owner: S.optional(S.String),
          state: S.optional(__S(96, __c12, 0)),
          dateCreated: S.optional(S.String),
          tags: S.optional(__S(5, __c0, 5)),
        }),
      ).annotate({ identifier: "WorkflowSummary" });
    case 2:
      return S.Array(__S(249, __c31, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowSummaryList: S.optional(__S(250, __c31, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkflowBuildVersionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          imageBuildVersionArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListWorkflowExecutions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkflowExecutionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workflowBuildVersionArn: S.optional(S.String),
          workflowExecutionId: S.optional(S.String),
          type: S.optional(S.String),
          status: S.optional(S.String),
          message: S.optional(S.String),
          totalStepCount: S.optional(S.Number),
          totalStepsSucceeded: S.optional(S.Number),
          totalStepsFailed: S.optional(S.Number),
          totalStepsSkipped: S.optional(S.Number),
          startTime: S.optional(S.String),
          endTime: S.optional(S.String),
          parallelGroup: S.optional(S.String),
          retried: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "WorkflowExecutionMetadata",
      });
    case 6:
      return S.Array(__S(253, __c31, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          workflowExecutions: S.optional(__S(254, __c31, 6)),
          imageBuildVersionArn: S.optional(S.String),
          message: S.optional(S.String),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkflowExecutionsResponse",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          owner: S.optional(S.String),
          filters: S.optional(__S(166, __c20, 6)),
          byName: S.optional(S.Boolean),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListWorkflows" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListWorkflowsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          version: S.optional(S.String),
          description: S.optional(S.String),
          type: S.optional(S.String),
          owner: S.optional(S.String),
          dateCreated: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkflowVersion" });
    case 2:
      return S.Array(__S(257, __c32, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          workflowVersionList: S.optional(__S(258, __c32, 2)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListWorkflowsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          workflowExecutionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListWorkflowStepExecutions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkflowStepExecutionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          stepExecutionId: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          action: S.optional(S.String),
          status: S.optional(S.String),
          rollbackStatus: S.optional(S.String),
          message: S.optional(S.String),
          inputs: S.optional(S.String),
          outputs: S.optional(S.String),
          startTime: S.optional(S.String),
          endTime: S.optional(S.String),
          attemptNumber: S.optional(S.Number),
          maxAttempts: S.optional(S.Number),
        }),
      ).annotate({ identifier: "WorkflowStepMetadata" });
    case 6:
      return S.Array(__S(261, __c32, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          steps: S.optional(__S(262, __c32, 6)),
          workflowBuildVersionArn: S.optional(S.String),
          workflowExecutionId: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          message: S.optional(S.String),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListWorkflowStepExecutionsResponse",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ componentArn: S.String, policy: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/PutComponentPolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutComponentPolicyRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), componentArn: S.optional(S.String) }),
      ).annotate({
        identifier: "PutComponentPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ containerRecipeArn: S.String, policy: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/PutContainerRecipePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutContainerRecipePolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ imageArn: S.String, policy: S.String }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/PutImagePolicy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutImagePolicyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ requestId: S.optional(S.String), imageArn: S.optional(S.String) }),
      ).annotate({ identifier: "PutImagePolicyResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({ imageRecipeArn: S.String, policy: S.String }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/PutImageRecipePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutImageRecipePolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          imageBuildVersionArn: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/RetryImage" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RetryImageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          stepExecutionId: S.String,
          imageBuildVersionArn: S.String,
          action: S.String,
          reason: S.optional(S.String),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/SendWorkflowStepAction" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendWorkflowStepActionRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          stepExecutionId: S.optional(S.String),
          imageBuildVersionArn: S.optional(S.String),
          clientToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SendWorkflowStepActionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          imagePipelineArn: S.String,
          clientToken: S.String.pipe(T.IdempotencyToken()),
          tags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/StartImagePipelineExecution" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartImagePipelineExecutionRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "ResourceState",
      });
    case 3:
      return S.suspend(() => S.Struct({ amis: S.optional(__S(64, __c8, 0)) })).annotate({
        identifier: "ResourceStateUpdateExclusionRules",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          state: __S(274, __c34, 2),
          executionRole: S.optional(S.String),
          includeResources: S.optional(__S(60, __c7, 4)),
          exclusionRules: S.optional(__S(275, __c34, 3)),
          updateAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/StartResourceStateUpdate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartResourceStateUpdateRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ lifecycleExecutionId: S.optional(S.String), resourceArn: S.optional(S.String) }),
      ).annotate({
        identifier: "StartResourceStateUpdateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(5, __c0, 5),
        }).pipe(
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
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(4, __c0, 4).pipe(T.HttpQuery("tagKeys")),
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
    case 1:
      return S.suspend(() =>
        S.Struct({
          distributionConfigurationArn: S.String,
          description: S.optional(S.String),
          distributions: __S(33, __c4, 1),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/UpdateDistributionConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDistributionConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          imagePipelineArn: S.String,
          description: S.optional(S.String),
          imageRecipeArn: S.optional(S.String),
          containerRecipeArn: S.optional(S.String),
          infrastructureConfigurationArn: S.String,
          distributionConfigurationArn: S.optional(S.String),
          imageTestsConfiguration: S.optional(__S(36, __c4, 4)),
          enhancedImageMetadataEnabled: S.optional(S.Boolean),
          schedule: S.optional(__S(45, __c5, 5)),
          status: S.optional(S.String),
          clientToken: S.String.pipe(T.IdempotencyToken()),
          imageScanningConfiguration: S.optional(__S(38, __c4, 6)),
          workflows: S.optional(__S(40, __c5, 0)),
          loggingConfiguration: S.optional(__S(46, __c5, 6)),
          executionRole: S.optional(S.String),
          imageTags: S.optional(__S(5, __c0, 5)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/UpdateImagePipeline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateImagePipelineRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          infrastructureConfigurationArn: S.String,
          description: S.optional(S.String),
          instanceTypes: S.optional(__S(4, __c0, 4)),
          instanceProfileName: S.String,
          securityGroupIds: S.optional(__S(4, __c0, 4)),
          subnetId: S.optional(S.String),
          logging: S.optional(__S(54, __c6, 6)),
          keyPair: S.optional(S.String),
          terminateInstanceOnFailure: S.optional(S.Boolean),
          snsTopicArn: S.optional(S.String),
          resourceTags: S.optional(__S(55, __c6, 7)),
          instanceMetadataOptions: S.optional(__S(56, __c7, 0)),
          placement: S.optional(__S(57, __c7, 1)),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/UpdateInfrastructureConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateInfrastructureConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          lifecyclePolicyArn: S.String,
          description: S.optional(S.String),
          status: S.optional(S.String),
          executionRole: S.String,
          resourceType: S.String,
          policyDetails: __S(67, __c8, 3),
          resourceSelection: __S(70, __c8, 6),
          clientToken: S.String.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/UpdateLifecyclePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLifecyclePolicyRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
