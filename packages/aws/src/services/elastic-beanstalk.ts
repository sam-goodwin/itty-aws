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
const ns = /*@__PURE__*/ T.XmlNamespace("http://elasticbeanstalk.amazonaws.com/docs/2010-12-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Elastic Beanstalk",
  serviceShapeName: "AWSElasticBeanstalkService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "elasticbeanstalk" });
const ver = /*@__PURE__*/ T.ServiceVersion("2010-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
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
              `https://elasticbeanstalk-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://elasticbeanstalk.${Region}.amazonaws.com`);
            }
            return e(
              `https://elasticbeanstalk-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://elasticbeanstalk.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://elasticbeanstalk.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class CodeBuildNotInServiceRegionException
  extends /*@__PURE__*/ S.TaggedError<CodeBuildNotInServiceRegionException>()(
    "CodeBuildNotInServiceRegionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CodeBuildNotInServiceRegionException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ElasticBeanstalkServiceException
  extends /*@__PURE__*/ S.TaggedError<ElasticBeanstalkServiceException>()(
    "ElasticBeanstalkServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InsufficientPrivilegesException
  extends /*@__PURE__*/ S.TaggedError<InsufficientPrivilegesException>()(
    "InsufficientPrivilegesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InsufficientPrivilegesException",
        httpResponseCode: 403,
      }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidRequestException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ManagedActionInvalidStateException
  extends /*@__PURE__*/ S.TaggedError<ManagedActionInvalidStateException>()(
    "ManagedActionInvalidStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ManagedActionInvalidStateException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class OperationInProgressException
  extends /*@__PURE__*/ S.TaggedError<OperationInProgressException>()(
    "OperationInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OperationInProgressFailure", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PlatformVersionStillReferencedException
  extends /*@__PURE__*/ S.TaggedError<PlatformVersionStillReferencedException>()(
    "PlatformVersionStillReferencedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "PlatformVersionStillReferencedException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceTypeNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<ResourceTypeNotSupportedException>()(
    "ResourceTypeNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ResourceTypeNotSupportedException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class S3LocationNotInServiceRegionException
  extends /*@__PURE__*/ S.TaggedError<S3LocationNotInServiceRegionException>()(
    "S3LocationNotInServiceRegionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "S3LocationNotInServiceRegionException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class S3SubscriptionRequiredException
  extends /*@__PURE__*/ S.TaggedError<S3SubscriptionRequiredException>()(
    "S3SubscriptionRequiredException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "S3SubscriptionRequiredException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SourceBundleDeletionException
  extends /*@__PURE__*/ S.TaggedError<SourceBundleDeletionException>()(
    "SourceBundleDeletionException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SourceBundleDeletionFailure", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyApplicationsException
  extends /*@__PURE__*/ S.TaggedError<TooManyApplicationsException>()(
    "TooManyApplicationsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyApplicationsException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyApplicationVersionsException
  extends /*@__PURE__*/ S.TaggedError<TooManyApplicationVersionsException>()(
    "TooManyApplicationVersionsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class TooManyBucketsException
  extends /*@__PURE__*/ S.TaggedError<TooManyBucketsException>()(
    "TooManyBucketsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyBucketsException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyConfigurationTemplatesException
  extends /*@__PURE__*/ S.TaggedError<TooManyConfigurationTemplatesException>()(
    "TooManyConfigurationTemplatesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyConfigurationTemplatesException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyEnvironmentsException
  extends /*@__PURE__*/ S.TaggedError<TooManyEnvironmentsException>()(
    "TooManyEnvironmentsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyEnvironmentsException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyPlatformsException
  extends /*@__PURE__*/ S.TaggedError<TooManyPlatformsException>()(
    "TooManyPlatformsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyPlatformsException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TooManyTagsException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type EnvironmentId = string;
export type EnvironmentName = string;
export interface AbortEnvironmentUpdateMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export interface AbortEnvironmentUpdateResponse {}
export interface ApplyEnvironmentManagedActionRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  ActionId: string;
}
export type ActionType = "InstanceRefresh" | "PlatformUpdate" | "Unknown" | (string & {});
export interface ApplyEnvironmentManagedActionResult {
  ActionId?: string;
  ActionDescription?: string;
  ActionType?: ActionType;
  Status?: string;
}
export type OperationsRole = string;
export interface AssociateEnvironmentOperationsRoleMessage {
  EnvironmentName: string;
  OperationsRole: string;
}
export interface AssociateEnvironmentOperationsRoleResponse {}
export type DNSCnamePrefix = string;
export interface CheckDNSAvailabilityMessage {
  CNAMEPrefix: string;
}
export type CnameAvailability = boolean;
export type DNSCname = string;
export interface CheckDNSAvailabilityResultMessage {
  Available?: boolean;
  FullyQualifiedCNAME?: string;
}
export type ApplicationName = string;
export type GroupName = string;
export type VersionLabel = string;
export type VersionLabels = string[];
export interface ComposeEnvironmentsMessage {
  ApplicationName?: string;
  GroupName?: string;
  VersionLabels?: string[];
}
export type SolutionStackName = string;
export type PlatformArn = string;
export type ConfigurationTemplateName = string;
export type Description = string;
export type EndpointURL = string;
export type CreationDate = Date;
export type UpdateDate = Date;
export type EnvironmentStatus =
  | "Aborting"
  | "Launching"
  | "Updating"
  | "LinkingFrom"
  | "LinkingTo"
  | "Ready"
  | "Terminating"
  | "Terminated"
  | (string & {});
export type AbortableOperationInProgress = boolean;
export type EnvironmentHealth = "Green" | "Yellow" | "Red" | "Grey" | (string & {});
export type EnvironmentHealthStatus =
  | "NoData"
  | "Unknown"
  | "Pending"
  | "Ok"
  | "Info"
  | "Warning"
  | "Degraded"
  | "Severe"
  | "Suspended"
  | (string & {});
export interface Listener {
  Protocol?: string;
  Port?: number;
}
export type LoadBalancerListenersDescription = Listener[];
export interface LoadBalancerDescription {
  LoadBalancerName?: string;
  Domain?: string;
  Listeners?: Listener[];
}
export interface EnvironmentResourcesDescription {
  LoadBalancer?: LoadBalancerDescription;
}
export interface EnvironmentTier {
  Name?: string;
  Type?: string;
  Version?: string;
}
export interface EnvironmentLink {
  LinkName?: string;
  EnvironmentName?: string;
}
export type EnvironmentLinks = EnvironmentLink[];
export type EnvironmentArn = string;
export interface EnvironmentDescription {
  EnvironmentName?: string;
  EnvironmentId?: string;
  ApplicationName?: string;
  VersionLabel?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  TemplateName?: string;
  Description?: string;
  EndpointURL?: string;
  CNAME?: string;
  DateCreated?: Date;
  DateUpdated?: Date;
  Status?: EnvironmentStatus;
  AbortableOperationInProgress?: boolean;
  Health?: EnvironmentHealth;
  HealthStatus?: EnvironmentHealthStatus;
  Resources?: EnvironmentResourcesDescription;
  Tier?: EnvironmentTier;
  EnvironmentLinks?: EnvironmentLink[];
  EnvironmentArn?: string;
  OperationsRole?: string;
}
export type EnvironmentDescriptionsList = EnvironmentDescription[];
export type Token = string;
export interface EnvironmentDescriptionsMessage {
  Environments?: EnvironmentDescription[];
  NextToken?: string;
}
export type BoxedBoolean = boolean;
export type BoxedInt = number;
export interface MaxCountRule {
  Enabled: boolean;
  MaxCount?: number;
  DeleteSourceFromS3?: boolean;
}
export interface MaxAgeRule {
  Enabled: boolean;
  MaxAgeInDays?: number;
  DeleteSourceFromS3?: boolean;
}
export interface ApplicationVersionLifecycleConfig {
  MaxCountRule?: MaxCountRule;
  MaxAgeRule?: MaxAgeRule;
}
export interface ApplicationResourceLifecycleConfig {
  ServiceRole?: string;
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type Tags = Tag[];
export interface CreateApplicationMessage {
  ApplicationName: string;
  Description?: string;
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
  Tags?: Tag[];
}
export type ApplicationArn = string;
export type VersionLabelsList = string[];
export type ConfigurationTemplateNamesList = string[];
export interface ApplicationDescription {
  ApplicationArn?: string;
  ApplicationName?: string;
  Description?: string;
  DateCreated?: Date;
  DateUpdated?: Date;
  Versions?: string[];
  ConfigurationTemplates?: string[];
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export interface ApplicationDescriptionMessage {
  Application?: ApplicationDescription;
}
export type SourceType = "Git" | "Zip" | (string & {});
export type SourceRepository = "CodeCommit" | "S3" | (string & {});
export type SourceLocation = string;
export interface SourceBuildInformation {
  SourceType: SourceType;
  SourceRepository: SourceRepository;
  SourceLocation: string;
}
export type S3Bucket = string;
export type S3Key = string;
export interface S3Location {
  S3Bucket?: string;
  S3Key?: string;
}
export type NonEmptyString = string;
export type ComputeType =
  | "BUILD_GENERAL1_SMALL"
  | "BUILD_GENERAL1_MEDIUM"
  | "BUILD_GENERAL1_LARGE"
  | (string & {});
export interface BuildConfiguration {
  ArtifactName?: string;
  CodeBuildServiceRole: string;
  ComputeType?: ComputeType;
  Image: string;
  TimeoutInMinutes?: number;
}
export type AutoCreateApplication = boolean;
export type ApplicationVersionProccess = boolean;
export interface ImageSource {
  Uri?: string;
}
export type ImageBuildType = "docker" | "buildpack" | (string & {});
export type ArchitectureType = "amd64" | "arm64" | (string & {});
export interface ImageBuildConfiguration {
  Type?: ImageBuildType;
  DockerfileLocation?: string;
  Buildpack?: string;
  Architecture?: ArchitectureType;
  CodeBuildServiceRole?: string;
  ComputeType?: ComputeType;
  TimeoutInMinutes?: number;
}
export interface ImageConfiguration {
  Source?: ImageSource;
  Build?: ImageBuildConfiguration;
}
export interface CreateApplicationVersionMessage {
  ApplicationName: string;
  VersionLabel: string;
  Description?: string;
  SourceBuildInformation?: SourceBuildInformation;
  SourceBundle?: S3Location;
  BuildConfiguration?: BuildConfiguration;
  AutoCreateApplication?: boolean;
  Process?: boolean;
  Tags?: Tag[];
  ImageConfiguration?: ImageConfiguration;
}
export type ApplicationVersionArn = string;
export type ApplicationVersionStatus =
  | "Processed"
  | "Unprocessed"
  | "Failed"
  | "Processing"
  | "Building"
  | (string & {});
export interface ApplicationVersionDescription {
  ApplicationVersionArn?: string;
  ApplicationName?: string;
  Description?: string;
  VersionLabel?: string;
  SourceBuildInformation?: SourceBuildInformation;
  BuildArn?: string;
  SourceBundle?: S3Location;
  ImageSource?: ImageSource;
  ImageBuildConfiguration?: ImageBuildConfiguration;
  Process?: boolean;
  DateCreated?: Date;
  DateUpdated?: Date;
  Status?: ApplicationVersionStatus;
}
export interface ApplicationVersionDescriptionMessage {
  ApplicationVersion?: ApplicationVersionDescription;
}
export interface SourceConfiguration {
  ApplicationName?: string;
  TemplateName?: string;
}
export type ResourceName = string;
export type OptionNamespace = string;
export type ConfigurationOptionName = string;
export type ConfigurationOptionValue = string;
export interface ConfigurationOptionSetting {
  ResourceName?: string;
  Namespace?: string;
  OptionName?: string;
  Value?: string;
}
export type ConfigurationOptionSettingsList = ConfigurationOptionSetting[];
export interface CreateConfigurationTemplateMessage {
  ApplicationName: string;
  TemplateName: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  SourceConfiguration?: SourceConfiguration;
  EnvironmentId?: string;
  Description?: string;
  OptionSettings?: ConfigurationOptionSetting[];
  Tags?: Tag[];
}
export type ConfigurationDeploymentStatus = "deployed" | "pending" | "failed" | (string & {});
export interface ConfigurationSettingsDescription {
  SolutionStackName?: string;
  PlatformArn?: string;
  ApplicationName?: string;
  TemplateName?: string;
  Description?: string;
  EnvironmentName?: string;
  DeploymentStatus?: ConfigurationDeploymentStatus;
  DateCreated?: Date;
  DateUpdated?: Date;
  OptionSettings?: ConfigurationOptionSetting[];
}
export interface OptionSpecification {
  ResourceName?: string;
  Namespace?: string;
  OptionName?: string;
}
export type OptionsSpecifierList = OptionSpecification[];
export interface CreateEnvironmentMessage {
  ApplicationName: string;
  EnvironmentName?: string;
  GroupName?: string;
  Description?: string;
  CNAMEPrefix?: string;
  Tier?: EnvironmentTier;
  Tags?: Tag[];
  VersionLabel?: string;
  TemplateName?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  OptionSettings?: ConfigurationOptionSetting[];
  OptionsToRemove?: OptionSpecification[];
  OperationsRole?: string;
}
export type PlatformName = string;
export type PlatformVersion = string;
export interface CreatePlatformVersionRequest {
  PlatformName: string;
  PlatformVersion: string;
  PlatformDefinitionBundle: S3Location;
  EnvironmentName?: string;
  OptionSettings?: ConfigurationOptionSetting[];
  Tags?: Tag[];
}
export type PlatformOwner = string;
export type PlatformStatus =
  | "Creating"
  | "Failed"
  | "Ready"
  | "Deleting"
  | "Deleted"
  | (string & {});
export type PlatformCategory = string;
export type OperatingSystemName = string;
export type OperatingSystemVersion = string;
export type SupportedTier = string;
export type SupportedTierList = string[];
export type SupportedAddon = string;
export type SupportedAddonList = string[];
export type PlatformLifecycleState = string;
export type BranchName = string;
export type PlatformBranchLifecycleState = string;
export interface PlatformSummary {
  PlatformArn?: string;
  PlatformOwner?: string;
  PlatformStatus?: PlatformStatus;
  PlatformCategory?: string;
  OperatingSystemName?: string;
  OperatingSystemVersion?: string;
  SupportedTierList?: string[];
  SupportedAddonList?: string[];
  PlatformLifecycleState?: string;
  PlatformVersion?: string;
  PlatformBranchName?: string;
  PlatformBranchLifecycleState?: string;
}
export type ARN = string;
export interface Builder {
  ARN?: string;
}
export interface CreatePlatformVersionResult {
  PlatformSummary?: PlatformSummary;
  Builder?: Builder;
}
export interface CreateStorageLocationRequest {}
export interface CreateStorageLocationResultMessage {
  S3Bucket?: string;
}
export type TerminateEnvForce = boolean;
export interface DeleteApplicationMessage {
  ApplicationName: string;
  TerminateEnvByForce?: boolean;
}
export interface DeleteApplicationResponse {}
export type DeleteSourceBundle = boolean;
export interface DeleteApplicationVersionMessage {
  ApplicationName: string;
  VersionLabel: string;
  DeleteSourceBundle?: boolean;
}
export interface DeleteApplicationVersionResponse {}
export interface DeleteConfigurationTemplateMessage {
  ApplicationName: string;
  TemplateName: string;
}
export interface DeleteConfigurationTemplateResponse {}
export interface DeleteEnvironmentConfigurationMessage {
  ApplicationName: string;
  EnvironmentName: string;
}
export interface DeleteEnvironmentConfigurationResponse {}
export interface DeletePlatformVersionRequest {
  PlatformArn?: string;
}
export interface DeletePlatformVersionResult {
  PlatformSummary?: PlatformSummary;
}
export interface DescribeAccountAttributesRequest {}
export interface ResourceQuota {
  Maximum?: number;
}
export interface ResourceQuotas {
  ApplicationQuota?: ResourceQuota;
  ApplicationVersionQuota?: ResourceQuota;
  EnvironmentQuota?: ResourceQuota;
  ConfigurationTemplateQuota?: ResourceQuota;
  CustomPlatformQuota?: ResourceQuota;
}
export interface DescribeAccountAttributesResult {
  ResourceQuotas?: ResourceQuotas;
}
export type ApplicationNamesList = string[];
export interface DescribeApplicationsMessage {
  ApplicationNames?: string[];
}
export type ApplicationDescriptionList = ApplicationDescription[];
export interface ApplicationDescriptionsMessage {
  Applications?: ApplicationDescription[];
}
export type MaxRecords = number;
export interface DescribeApplicationVersionsMessage {
  ApplicationName?: string;
  VersionLabels?: string[];
  MaxRecords?: number;
  NextToken?: string;
}
export type ApplicationVersionDescriptionList = ApplicationVersionDescription[];
export interface ApplicationVersionDescriptionsMessage {
  ApplicationVersions?: ApplicationVersionDescription[];
  NextToken?: string;
}
export interface DescribeConfigurationOptionsMessage {
  ApplicationName?: string;
  TemplateName?: string;
  EnvironmentName?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  Options?: OptionSpecification[];
}
export type ConfigurationOptionDefaultValue = string;
export type ConfigurationOptionSeverity = string;
export type UserDefinedOption = boolean;
export type ConfigurationOptionValueType = "Scalar" | "List" | (string & {});
export type ConfigurationOptionPossibleValue = string;
export type ConfigurationOptionPossibleValues = string[];
export type OptionRestrictionMinValue = number;
export type OptionRestrictionMaxValue = number;
export type OptionRestrictionMaxLength = number;
export type RegexPattern = string;
export type RegexLabel = string;
export interface OptionRestrictionRegex {
  Pattern?: string;
  Label?: string;
}
export interface ConfigurationOptionDescription {
  Namespace?: string;
  Name?: string;
  DefaultValue?: string;
  ChangeSeverity?: string;
  UserDefined?: boolean;
  ValueType?: ConfigurationOptionValueType;
  ValueOptions?: string[];
  MinValue?: number;
  MaxValue?: number;
  MaxLength?: number;
  Regex?: OptionRestrictionRegex;
}
export type ConfigurationOptionDescriptionsList = ConfigurationOptionDescription[];
export interface ConfigurationOptionsDescription {
  SolutionStackName?: string;
  PlatformArn?: string;
  Options?: ConfigurationOptionDescription[];
}
export interface DescribeConfigurationSettingsMessage {
  ApplicationName: string;
  TemplateName?: string;
  EnvironmentName?: string;
}
export type ConfigurationSettingsDescriptionList = ConfigurationSettingsDescription[];
export interface ConfigurationSettingsDescriptions {
  ConfigurationSettings?: ConfigurationSettingsDescription[];
}
export type EnvironmentHealthAttribute =
  | "Status"
  | "Color"
  | "Causes"
  | "ApplicationMetrics"
  | "InstancesHealth"
  | "All"
  | "HealthStatus"
  | "RefreshedAt"
  | (string & {});
export type EnvironmentHealthAttributes = EnvironmentHealthAttribute[];
export interface DescribeEnvironmentHealthRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  AttributeNames?: EnvironmentHealthAttribute[];
}
export type Cause = string;
export type Causes = string[];
export type RequestCount = number;
export interface StatusCodes {
  Status2xx?: number;
  Status3xx?: number;
  Status4xx?: number;
  Status5xx?: number;
}
export interface Latency {
  P999?: number;
  P99?: number;
  P95?: number;
  P90?: number;
  P85?: number;
  P75?: number;
  P50?: number;
  P10?: number;
}
export interface ApplicationMetrics {
  Duration?: number;
  RequestCount?: number;
  StatusCodes?: StatusCodes;
  Latency?: Latency;
}
export interface InstanceHealthSummary {
  NoData?: number;
  Unknown?: number;
  Pending?: number;
  Ok?: number;
  Info?: number;
  Warning?: number;
  Degraded?: number;
  Severe?: number;
}
export type RefreshedAt = Date;
export interface DescribeEnvironmentHealthResult {
  EnvironmentName?: string;
  HealthStatus?: string;
  Status?: EnvironmentHealth;
  Color?: string;
  Causes?: string[];
  ApplicationMetrics?: ApplicationMetrics;
  InstancesHealth?: InstanceHealthSummary;
  RefreshedAt?: Date;
}
export type ManagedActionHistoryMaxItems = number;
export interface DescribeEnvironmentManagedActionHistoryRequest {
  EnvironmentId?: string;
  EnvironmentName?: string;
  NextToken?: string;
  MaxItems?: number;
}
export type FailureType =
  | "UpdateCancelled"
  | "CancellationFailed"
  | "RollbackFailed"
  | "RollbackSuccessful"
  | "InternalFailure"
  | "InvalidEnvironmentState"
  | "PermissionsError"
  | (string & {});
export type ActionHistoryStatus = "Completed" | "Failed" | "Unknown" | (string & {});
export interface ManagedActionHistoryItem {
  ActionId?: string;
  ActionType?: ActionType;
  ActionDescription?: string;
  FailureType?: FailureType;
  Status?: ActionHistoryStatus;
  FailureDescription?: string;
  ExecutedTime?: Date;
  FinishedTime?: Date;
}
export type ManagedActionHistoryItems = ManagedActionHistoryItem[];
export interface DescribeEnvironmentManagedActionHistoryResult {
  ManagedActionHistoryItems?: ManagedActionHistoryItem[];
  NextToken?: string;
}
export type ActionStatus = "Scheduled" | "Pending" | "Running" | "Unknown" | (string & {});
export interface DescribeEnvironmentManagedActionsRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  Status?: ActionStatus;
}
export interface ManagedAction {
  ActionId?: string;
  ActionDescription?: string;
  ActionType?: ActionType;
  Status?: ActionStatus;
  WindowStartTime?: Date;
}
export type ManagedActions = ManagedAction[];
export interface DescribeEnvironmentManagedActionsResult {
  ManagedActions?: ManagedAction[];
}
export interface DescribeEnvironmentResourcesMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export type ResourceId = string;
export interface AutoScalingGroup {
  Name?: string;
}
export type AutoScalingGroupList = AutoScalingGroup[];
export interface Cluster {
  ClusterArn?: string;
}
export interface Instance {
  Id?: string;
}
export type InstanceList = Instance[];
export interface LaunchConfiguration {
  Name?: string;
}
export type LaunchConfigurationList = LaunchConfiguration[];
export interface LaunchTemplate {
  Id?: string;
}
export type LaunchTemplateList = LaunchTemplate[];
export interface LoadBalancer {
  Name?: string;
}
export type LoadBalancerList = LoadBalancer[];
export interface Trigger {
  Name?: string;
}
export type TriggerList = Trigger[];
export interface Queue {
  Name?: string;
  URL?: string;
}
export type QueueList = Queue[];
export interface EnvironmentResourceDescription {
  EnvironmentName?: string;
  AutoScalingGroups?: AutoScalingGroup[];
  Cluster?: Cluster;
  Instances?: Instance[];
  LaunchConfigurations?: LaunchConfiguration[];
  LaunchTemplates?: LaunchTemplate[];
  LoadBalancers?: LoadBalancer[];
  Triggers?: Trigger[];
  Queues?: Queue[];
}
export interface EnvironmentResourceDescriptionsMessage {
  EnvironmentResources?: EnvironmentResourceDescription;
}
export type EnvironmentIdList = string[];
export type EnvironmentNamesList = string[];
export type IncludeDeleted = boolean;
export type IncludeDeletedBackTo = Date;
export interface DescribeEnvironmentsMessage {
  ApplicationName?: string;
  VersionLabel?: string;
  EnvironmentIds?: string[];
  EnvironmentNames?: string[];
  IncludeDeleted?: boolean;
  IncludedDeletedBackTo?: Date;
  MaxRecords?: number;
  NextToken?: string;
}
export type RequestId = string;
export type EventSeverity = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | (string & {});
export type TimeFilterStart = Date;
export type TimeFilterEnd = Date;
export interface DescribeEventsMessage {
  ApplicationName?: string;
  VersionLabel?: string;
  TemplateName?: string;
  EnvironmentId?: string;
  EnvironmentName?: string;
  PlatformArn?: string;
  RequestId?: string;
  Severity?: EventSeverity;
  StartTime?: Date;
  EndTime?: Date;
  MaxRecords?: number;
  NextToken?: string;
}
export type EventDate = Date;
export type EventMessage = string;
export interface EventDescription {
  EventDate?: Date;
  Message?: string;
  ApplicationName?: string;
  VersionLabel?: string;
  TemplateName?: string;
  EnvironmentName?: string;
  PlatformArn?: string;
  RequestId?: string;
  Severity?: EventSeverity;
}
export type EventDescriptionList = EventDescription[];
export interface EventDescriptionsMessage {
  Events?: EventDescription[];
  NextToken?: string;
}
export type InstancesHealthAttribute =
  | "HealthStatus"
  | "Color"
  | "Causes"
  | "ApplicationMetrics"
  | "RefreshedAt"
  | "LaunchedAt"
  | "System"
  | "Deployment"
  | "AvailabilityZone"
  | "InstanceType"
  | "All"
  | (string & {});
export type InstancesHealthAttributes = InstancesHealthAttribute[];
export type NextToken = string;
export interface DescribeInstancesHealthRequest {
  EnvironmentName?: string;
  EnvironmentId?: string;
  AttributeNames?: InstancesHealthAttribute[];
  NextToken?: string;
}
export type InstanceId = string;
export type LaunchedAt = Date;
export interface CPUUtilization {
  User?: number;
  Nice?: number;
  System?: number;
  Idle?: number;
  IOWait?: number;
  IRQ?: number;
  SoftIRQ?: number;
  Privileged?: number;
}
export type LoadAverageValue = number;
export type LoadAverage = number[];
export interface SystemStatus {
  CPUUtilization?: CPUUtilization;
  LoadAverage?: number[];
}
export type DeploymentTimestamp = Date;
export interface Deployment {
  VersionLabel?: string;
  DeploymentId?: number;
  Status?: string;
  DeploymentTime?: Date;
}
export interface SingleInstanceHealth {
  InstanceId?: string;
  HealthStatus?: string;
  Color?: string;
  Causes?: string[];
  LaunchedAt?: Date;
  ApplicationMetrics?: ApplicationMetrics;
  System?: SystemStatus;
  Deployment?: Deployment;
  AvailabilityZone?: string;
  InstanceType?: string;
}
export type InstanceHealthList = SingleInstanceHealth[];
export interface DescribeInstancesHealthResult {
  InstanceHealthList?: SingleInstanceHealth[];
  RefreshedAt?: Date;
  NextToken?: string;
}
export interface DescribePlatformVersionRequest {
  PlatformArn?: string;
}
export type Maintainer = string;
export interface PlatformProgrammingLanguage {
  Name?: string;
  Version?: string;
}
export type PlatformProgrammingLanguages = PlatformProgrammingLanguage[];
export interface PlatformFramework {
  Name?: string;
  Version?: string;
}
export type PlatformFrameworks = PlatformFramework[];
export type VirtualizationType = string;
export type ImageId = string;
export interface CustomAmi {
  VirtualizationType?: string;
  ImageId?: string;
}
export type CustomAmiList = CustomAmi[];
export interface PlatformDescription {
  PlatformArn?: string;
  PlatformOwner?: string;
  PlatformName?: string;
  PlatformVersion?: string;
  SolutionStackName?: string;
  PlatformStatus?: PlatformStatus;
  DateCreated?: Date;
  DateUpdated?: Date;
  PlatformCategory?: string;
  Description?: string;
  Maintainer?: string;
  OperatingSystemName?: string;
  OperatingSystemVersion?: string;
  ProgrammingLanguages?: PlatformProgrammingLanguage[];
  Frameworks?: PlatformFramework[];
  CustomAmiList?: CustomAmi[];
  SupportedTierList?: string[];
  SupportedAddonList?: string[];
  PlatformLifecycleState?: string;
  PlatformBranchName?: string;
  PlatformBranchLifecycleState?: string;
}
export interface DescribePlatformVersionResult {
  PlatformDescription?: PlatformDescription;
}
export interface DisassociateEnvironmentOperationsRoleMessage {
  EnvironmentName: string;
}
export interface DisassociateEnvironmentOperationsRoleResponse {}
export interface ListAvailableSolutionStacksRequest {}
export type AvailableSolutionStackNamesList = string[];
export type FileTypeExtension = string;
export type SolutionStackFileTypeList = string[];
export interface SolutionStackDescription {
  SolutionStackName?: string;
  PermittedFileTypes?: string[];
}
export type AvailableSolutionStackDetailsList = SolutionStackDescription[];
export interface ListAvailableSolutionStacksResultMessage {
  SolutionStacks?: string[];
  SolutionStackDetails?: SolutionStackDescription[];
}
export type SearchFilterAttribute = string;
export type SearchFilterOperator = string;
export type SearchFilterValue = string;
export type SearchFilterValues = string[];
export interface SearchFilter {
  Attribute?: string;
  Operator?: string;
  Values?: string[];
}
export type SearchFilters = SearchFilter[];
export type PlatformBranchMaxRecords = number;
export interface ListPlatformBranchesRequest {
  Filters?: SearchFilter[];
  MaxRecords?: number;
  NextToken?: string;
}
export type BranchOrder = number;
export interface PlatformBranchSummary {
  PlatformName?: string;
  BranchName?: string;
  LifecycleState?: string;
  BranchOrder?: number;
  SupportedTierList?: string[];
}
export type PlatformBranchSummaryList = PlatformBranchSummary[];
export interface ListPlatformBranchesResult {
  PlatformBranchSummaryList?: PlatformBranchSummary[];
  NextToken?: string;
}
export type PlatformFilterType = string;
export type PlatformFilterOperator = string;
export type PlatformFilterValue = string;
export type PlatformFilterValueList = string[];
export interface PlatformFilter {
  Type?: string;
  Operator?: string;
  Values?: string[];
}
export type PlatformFilters = PlatformFilter[];
export type PlatformMaxRecords = number;
export interface ListPlatformVersionsRequest {
  Filters?: PlatformFilter[];
  MaxRecords?: number;
  NextToken?: string;
}
export type PlatformSummaryList = PlatformSummary[];
export interface ListPlatformVersionsResult {
  PlatformSummaryList?: PlatformSummary[];
  NextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceMessage {
  ResourceArn: string;
}
export type TagList = Tag[];
export interface ResourceTagsDescriptionMessage {
  ResourceArn?: string;
  ResourceTags?: Tag[];
}
export interface RebuildEnvironmentMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export interface RebuildEnvironmentResponse {}
export type EnvironmentInfoType = "tail" | "bundle" | "analyze" | (string & {});
export interface RequestEnvironmentInfoMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
  InfoType: EnvironmentInfoType;
}
export interface RequestEnvironmentInfoResponse {}
export interface RestartAppServerMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
}
export interface RestartAppServerResponse {}
export interface RetrieveEnvironmentInfoMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
  InfoType: EnvironmentInfoType;
}
export type Ec2InstanceId = string;
export type SampleTimestamp = Date;
export type Message = string;
export interface EnvironmentInfoDescription {
  InfoType?: EnvironmentInfoType;
  Ec2InstanceId?: string;
  SampleTimestamp?: Date;
  Message?: string;
}
export type EnvironmentInfoDescriptionList = EnvironmentInfoDescription[];
export interface RetrieveEnvironmentInfoResultMessage {
  EnvironmentInfo?: EnvironmentInfoDescription[];
}
export interface SwapEnvironmentCNAMEsMessage {
  SourceEnvironmentId?: string;
  SourceEnvironmentName?: string;
  DestinationEnvironmentId?: string;
  DestinationEnvironmentName?: string;
}
export interface SwapEnvironmentCNAMEsResponse {}
export type TerminateEnvironmentResources = boolean;
export type ForceTerminate = boolean;
export interface TerminateEnvironmentMessage {
  EnvironmentId?: string;
  EnvironmentName?: string;
  TerminateResources?: boolean;
  ForceTerminate?: boolean;
}
export interface UpdateApplicationMessage {
  ApplicationName: string;
  Description?: string;
}
export interface UpdateApplicationResourceLifecycleMessage {
  ApplicationName: string;
  ResourceLifecycleConfig: ApplicationResourceLifecycleConfig;
}
export interface ApplicationResourceLifecycleDescriptionMessage {
  ApplicationName?: string;
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}
export interface UpdateApplicationVersionMessage {
  ApplicationName: string;
  VersionLabel: string;
  Description?: string;
}
export interface UpdateConfigurationTemplateMessage {
  ApplicationName: string;
  TemplateName: string;
  Description?: string;
  OptionSettings?: ConfigurationOptionSetting[];
  OptionsToRemove?: OptionSpecification[];
}
export interface UpdateEnvironmentMessage {
  ApplicationName?: string;
  EnvironmentId?: string;
  EnvironmentName?: string;
  GroupName?: string;
  Description?: string;
  Tier?: EnvironmentTier;
  VersionLabel?: string;
  TemplateName?: string;
  SolutionStackName?: string;
  PlatformArn?: string;
  OptionSettings?: ConfigurationOptionSetting[];
  OptionsToRemove?: OptionSpecification[];
}
export type TagKeyList = string[];
export interface UpdateTagsForResourceMessage {
  ResourceArn: string;
  TagsToAdd?: Tag[];
  TagsToRemove?: string[];
}
export interface UpdateTagsForResourceResponse {}
export interface ValidateConfigurationSettingsMessage {
  ApplicationName: string;
  TemplateName?: string;
  EnvironmentName?: string;
  OptionSettings: ConfigurationOptionSetting[];
}
export type ValidationMessageString = string;
export type ValidationSeverity = "error" | "warning" | (string & {});
export interface ValidationMessage {
  Message?: string;
  Severity?: ValidationSeverity;
  Namespace?: string;
  OptionName?: string;
}
export type ValidationMessagesList = ValidationMessage[];
export interface ConfigurationSettingsValidationMessages {
  Messages?: ValidationMessage[];
}
export type ExceptionMessage = string;
export type AbortEnvironmentUpdateError = InsufficientPrivilegesException | CommonErrors;
/**
 * Cancels in-progress environment configuration update or application version deployment.
 */
export const abortEnvironmentUpdate: API.OperationMethod<
  AbortEnvironmentUpdateMessage,
  AbortEnvironmentUpdateResponse,
  AbortEnvironmentUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AbortEnvironmentUpdateMessage>,
  output: __S(1, __c0, 1) as any as S.Schema<AbortEnvironmentUpdateResponse>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AbortEnvironmentUpdate",
}));

export type ApplyEnvironmentManagedActionError =
  | ElasticBeanstalkServiceException
  | ManagedActionInvalidStateException
  | CommonErrors;
/**
 * Applies a scheduled managed action immediately. A managed action can be applied only if its status is `Scheduled`. Get the status and
 * action ID of a managed action with DescribeEnvironmentManagedActions.
 */
export const applyEnvironmentManagedAction: API.OperationMethod<
  ApplyEnvironmentManagedActionRequest,
  ApplyEnvironmentManagedActionResult,
  ApplyEnvironmentManagedActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<ApplyEnvironmentManagedActionRequest>,
  output: __S(3, __c0, 3) as any as S.Schema<ApplyEnvironmentManagedActionResult>,
  errors: [ElasticBeanstalkServiceException, ManagedActionInvalidStateException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ApplyEnvironmentManagedAction",
}));

export type AssociateEnvironmentOperationsRoleError =
  | InsufficientPrivilegesException
  | CommonErrors;
/**
 * The operations role feature of Elastic Beanstalk is in beta release and is subject to change.
 *
 * Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to
 * downstream services during subsequent calls acting on this environment.
 */
export const associateEnvironmentOperationsRole: API.OperationMethod<
  AssociateEnvironmentOperationsRoleMessage,
  AssociateEnvironmentOperationsRoleResponse,
  AssociateEnvironmentOperationsRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4, __c0, 4) as any as S.Schema<AssociateEnvironmentOperationsRoleMessage>,
  output: __S(5, __c0, 5) as any as S.Schema<AssociateEnvironmentOperationsRoleResponse>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateEnvironmentOperationsRole",
}));

export type CheckDNSAvailabilityError = CommonErrors;
/**
 * Checks if the specified CNAME is available.
 */
export const checkDNSAvailability: API.OperationMethod<
  CheckDNSAvailabilityMessage,
  CheckDNSAvailabilityResultMessage,
  CheckDNSAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6, __c0, 6) as any as S.Schema<CheckDNSAvailabilityMessage>,
  output: __S(7, __c0, 7) as any as S.Schema<CheckDNSAvailabilityResultMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckDNSAvailability",
}));

export type ComposeEnvironmentsError =
  | InsufficientPrivilegesException
  | TooManyEnvironmentsException
  | CommonErrors;
/**
 * Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify
 * application source bundles for each of the environments to create or update. The name of each environment and other required information must be included
 * in the source bundles in an environment manifest named `env.yaml`. See Compose Environments for details.
 */
export const composeEnvironments: API.OperationMethod<
  ComposeEnvironmentsMessage,
  EnvironmentDescriptionsMessage,
  ComposeEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<ComposeEnvironmentsMessage>,
  output: __S(19, __c2, 3) as any as S.Schema<EnvironmentDescriptionsMessage>,
  errors: [InsufficientPrivilegesException, TooManyEnvironmentsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ComposeEnvironments",
}));

export type CreateApplicationError = TooManyApplicationsException | CommonErrors;
/**
 * Creates an application that has one configuration template named `default` and
 * no application versions.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationMessage,
  ApplicationDescriptionMessage,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<CreateApplicationMessage>,
  output: __S(30, __c3, 6) as any as S.Schema<ApplicationDescriptionMessage>,
  errors: [TooManyApplicationsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateApplicationVersionError =
  | CodeBuildNotInServiceRegionException
  | InsufficientPrivilegesException
  | S3LocationNotInServiceRegionException
  | TooManyApplicationsException
  | TooManyApplicationVersionsException
  | CommonErrors;
/**
 * Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in
 * CodeCommit, or the output of an CodeBuild build as follows:
 *
 * Specify a commit in an CodeCommit repository with `SourceBuildInformation`.
 *
 * Specify a build in an CodeBuild with `SourceBuildInformation` and `BuildConfiguration`.
 *
 * Specify a source bundle in Amazon S3 with `SourceBundle`
 *
 * Omit both `SourceBuildInformation` and `SourceBundle` to use the default sample application.
 *
 * After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3
 * location, you receive an exception when you attempt to launch an environment from the application version.
 */
export const createApplicationVersion: API.OperationMethod<
  CreateApplicationVersionMessage,
  ApplicationVersionDescriptionMessage,
  CreateApplicationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<CreateApplicationVersionMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<ApplicationVersionDescriptionMessage>,
  errors: [
    CodeBuildNotInServiceRegionException,
    InsufficientPrivilegesException,
    S3LocationNotInServiceRegionException,
    TooManyApplicationsException,
    TooManyApplicationVersionsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplicationVersion",
}));

export type CreateConfigurationTemplateError =
  | InsufficientPrivilegesException
  | TooManyBucketsException
  | TooManyConfigurationTemplatesException
  | CommonErrors;
/**
 * Creates an Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk
 * application. You define application configuration settings in a configuration template. You
 * can then use the configuration template to deploy different versions of the application with
 * the same configuration settings.
 *
 * Templates aren't associated with any environment. The `EnvironmentName`
 * response element is always `null`.
 *
 * Related Topics
 *
 * - DescribeConfigurationOptions
 *
 * - DescribeConfigurationSettings
 *
 * - ListAvailableSolutionStacks
 */
export const createConfigurationTemplate: API.OperationMethod<
  CreateConfigurationTemplateMessage,
  ConfigurationSettingsDescription,
  CreateConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<CreateConfigurationTemplateMessage>,
  output: __S(44, __c5, 4) as any as S.Schema<ConfigurationSettingsDescription>,
  errors: [
    InsufficientPrivilegesException,
    TooManyBucketsException,
    TooManyConfigurationTemplatesException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationTemplate",
}));

export type CreateEnvironmentError =
  | InsufficientPrivilegesException
  | TooManyEnvironmentsException
  | CommonErrors;
/**
 * Launches an Elastic Beanstalk environment for the specified application using the specified configuration.
 */
export const createEnvironment: API.OperationMethod<
  CreateEnvironmentMessage,
  EnvironmentDescription,
  CreateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<CreateEnvironmentMessage>,
  output: __S(17, __c2, 1) as any as S.Schema<EnvironmentDescription>,
  errors: [InsufficientPrivilegesException, TooManyEnvironmentsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEnvironment",
}));

export type CreatePlatformVersionError =
  | ElasticBeanstalkServiceException
  | InsufficientPrivilegesException
  | TooManyPlatformsException
  | CommonErrors;
/**
 * Create a new version of your custom platform.
 */
export const createPlatformVersion: API.OperationMethod<
  CreatePlatformVersionRequest,
  CreatePlatformVersionResult,
  CreatePlatformVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48, __c6, 0) as any as S.Schema<CreatePlatformVersionRequest>,
  output: __S(53, __c6, 5) as any as S.Schema<CreatePlatformVersionResult>,
  errors: [
    ElasticBeanstalkServiceException,
    InsufficientPrivilegesException,
    TooManyPlatformsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePlatformVersion",
}));

export type CreateStorageLocationError =
  | InsufficientPrivilegesException
  | S3SubscriptionRequiredException
  | TooManyBucketsException
  | CommonErrors;
/**
 * Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk
 * console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists,
 * `CreateStorageLocation` still returns the bucket name but does not create a new bucket.
 */
export const createStorageLocation: API.OperationMethod<
  CreateStorageLocationRequest,
  CreateStorageLocationResultMessage,
  CreateStorageLocationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<CreateStorageLocationRequest>,
  output: __S(55, __c6, 7) as any as S.Schema<CreateStorageLocationResultMessage>,
  errors: [
    InsufficientPrivilegesException,
    S3SubscriptionRequiredException,
    TooManyBucketsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStorageLocation",
}));

export type DeleteApplicationError = OperationInProgressException | CommonErrors;
/**
 * Deletes the specified application along with all associated versions and configurations.
 * The application versions will not be deleted from your Amazon S3 bucket.
 *
 * You cannot delete an application that has a running environment.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationMessage,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56, __c7, 0) as any as S.Schema<DeleteApplicationMessage>,
  output: __S(57, __c7, 1) as any as S.Schema<DeleteApplicationResponse>,
  errors: [OperationInProgressException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteApplicationVersionError =
  | InsufficientPrivilegesException
  | OperationInProgressException
  | S3LocationNotInServiceRegionException
  | SourceBundleDeletionException
  | CommonErrors;
/**
 * Deletes the specified version from the specified application.
 *
 * You cannot delete an application version that is associated with a running environment.
 */
export const deleteApplicationVersion: API.OperationMethod<
  DeleteApplicationVersionMessage,
  DeleteApplicationVersionResponse,
  DeleteApplicationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<DeleteApplicationVersionMessage>,
  output: __S(59, __c7, 3) as any as S.Schema<DeleteApplicationVersionResponse>,
  errors: [
    InsufficientPrivilegesException,
    OperationInProgressException,
    S3LocationNotInServiceRegionException,
    SourceBundleDeletionException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplicationVersion",
}));

export type DeleteConfigurationTemplateError = OperationInProgressException | CommonErrors;
/**
 * Deletes the specified configuration template.
 *
 * When you launch an environment using a configuration template, the environment gets a
 * copy of the template. You can delete or modify the environment's copy of the template
 * without affecting the running environment.
 */
export const deleteConfigurationTemplate: API.OperationMethod<
  DeleteConfigurationTemplateMessage,
  DeleteConfigurationTemplateResponse,
  DeleteConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<DeleteConfigurationTemplateMessage>,
  output: __S(61, __c7, 5) as any as S.Schema<DeleteConfigurationTemplateResponse>,
  errors: [OperationInProgressException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationTemplate",
}));

export type DeleteEnvironmentConfigurationError = CommonErrors;
/**
 * Deletes the draft configuration associated with the running environment.
 *
 * Updating a running environment with any configuration changes creates a draft
 * configuration set. You can get the draft configuration using DescribeConfigurationSettings while the update is in progress or if the update
 * fails. The `DeploymentStatus` for the draft configuration indicates whether the
 * deployment is in process or has failed. The draft configuration remains in existence until it
 * is deleted with this action.
 */
export const deleteEnvironmentConfiguration: API.OperationMethod<
  DeleteEnvironmentConfigurationMessage,
  DeleteEnvironmentConfigurationResponse,
  DeleteEnvironmentConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62, __c7, 6) as any as S.Schema<DeleteEnvironmentConfigurationMessage>,
  output: __S(63, __c7, 7) as any as S.Schema<DeleteEnvironmentConfigurationResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironmentConfiguration",
}));

export type DeletePlatformVersionError =
  | ElasticBeanstalkServiceException
  | InsufficientPrivilegesException
  | OperationInProgressException
  | PlatformVersionStillReferencedException
  | CommonErrors;
/**
 * Deletes the specified version of a custom platform.
 */
export const deletePlatformVersion: API.OperationMethod<
  DeletePlatformVersionRequest,
  DeletePlatformVersionResult,
  DeletePlatformVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<DeletePlatformVersionRequest>,
  output: __S(65, __c8, 1) as any as S.Schema<DeletePlatformVersionResult>,
  errors: [
    ElasticBeanstalkServiceException,
    InsufficientPrivilegesException,
    OperationInProgressException,
    PlatformVersionStillReferencedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePlatformVersion",
}));

export type DescribeAccountAttributesError = InsufficientPrivilegesException | CommonErrors;
/**
 * Returns attributes related to Elastic Beanstalk that are associated with the calling Amazon Web Services account.
 *
 * The result currently has one set of attributes--resource quotas.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeAccountAttributes: API.OperationMethod<
  DescribeAccountAttributesRequest,
  DescribeAccountAttributesResult,
  DescribeAccountAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<DescribeAccountAttributesRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DescribeAccountAttributesResult>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAttributes",
}));

export type DescribeApplicationsError = CommonErrors;
/**
 * Returns the descriptions of existing applications.
 *
 * This action only returns information about applications that the calling principle has IAM permissions to
 * access. For example, consider a case where a user only has permission to access two of three
 * applications. When the user calls the *DescribeApplications* action, the
 * response will only include the two applications that the user has permission to access
 * instead of all three applications. If the user doesn't have access to any of the applications
 * an empty result is returned.
 *
 * The *AWSElasticBeanstalkReadOnly* managed policy allows operators to
 * view information about resources related to Elastic Beanstalk environments. For more
 * information, see Managing Elastic Beanstalk user
 * policies in the *Elastic Beanstalk Developer Guide*. For detailed
 * instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the same topic.
 */
export const describeApplications: API.OperationMethod<
  DescribeApplicationsMessage,
  ApplicationDescriptionsMessage,
  DescribeApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71, __c8, 7) as any as S.Schema<DescribeApplicationsMessage>,
  output: __S(73, __c9, 1) as any as S.Schema<ApplicationDescriptionsMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplications",
}));

export type DescribeApplicationVersionsError = CommonErrors;
/**
 * Retrieve a list of application versions.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeApplicationVersions: API.OperationMethod<
  DescribeApplicationVersionsMessage,
  ApplicationVersionDescriptionsMessage,
  DescribeApplicationVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74, __c9, 2) as any as S.Schema<DescribeApplicationVersionsMessage>,
  output: __S(76, __c9, 4) as any as S.Schema<ApplicationVersionDescriptionsMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationVersions",
}));

export type DescribeConfigurationOptionsError = TooManyBucketsException | CommonErrors;
/**
 * Describes the configuration options that are used in a particular configuration
 * template or environment, or that a specified solution stack defines. The description includes
 * the values the options, their default values, and an indication of the required action on a
 * running environment if an option value is changed.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to
 * access. For example, consider a case where a user only has permission to access one of three
 * resources. When the user calls the this action, the
 * response will only include the one resource that the user has permission to access instead
 * of all three resources. If the user doesn't have access to any of the resources an empty
 * result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeConfigurationOptions: API.OperationMethod<
  DescribeConfigurationOptionsMessage,
  ConfigurationOptionsDescription,
  DescribeConfigurationOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DescribeConfigurationOptionsMessage>,
  output: __S(82, __c10, 2) as any as S.Schema<ConfigurationOptionsDescription>,
  errors: [TooManyBucketsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConfigurationOptions",
}));

export type DescribeConfigurationSettingsError = TooManyBucketsException | CommonErrors;
/**
 * Returns a description of the settings for the specified configuration set, that is,
 * either a configuration template or the configuration set associated with a running
 * environment.
 *
 * When describing the settings for the configuration set associated with a running
 * environment, it is possible to receive two sets of setting descriptions. One is the deployed
 * configuration set, and the other is a draft configuration of an environment that is either in
 * the process of deployment or that failed to deploy.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to
 * access. For example, consider a case where a user only has permission to access one of three
 * resources. When the user calls the this action, the
 * response will only include the one resource that the user has permission to access instead
 * of all three resources. If the user doesn't have access to any of the resources an empty
 * result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 *
 * Related Topics
 *
 * - DeleteEnvironmentConfiguration
 */
export const describeConfigurationSettings: API.OperationMethod<
  DescribeConfigurationSettingsMessage,
  ConfigurationSettingsDescriptions,
  DescribeConfigurationSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<DescribeConfigurationSettingsMessage>,
  output: __S(85, __c10, 5) as any as S.Schema<ConfigurationSettingsDescriptions>,
  errors: [TooManyBucketsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConfigurationSettings",
}));

export type DescribeEnvironmentHealthError =
  | ElasticBeanstalkServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * Returns information about the overall health of the specified environment. The **DescribeEnvironmentHealth** operation is
 * only available with Elastic Beanstalk Enhanced Health.
 *
 * This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where
 * a user only has permission to access one of three environments. When the user calls this action, the response will only include the one environment that
 * the user has permission to access instead of all three environments. If the user doesn't have access to any of the environments an empty result is
 * returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeEnvironmentHealth: API.OperationMethod<
  DescribeEnvironmentHealthRequest,
  DescribeEnvironmentHealthResult,
  DescribeEnvironmentHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<DescribeEnvironmentHealthRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<DescribeEnvironmentHealthResult>,
  errors: [ElasticBeanstalkServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironmentHealth",
}));

export type DescribeEnvironmentManagedActionHistoryError =
  | ElasticBeanstalkServiceException
  | CommonErrors;
/**
 * Lists an environment's completed and failed managed actions.
 */
export const describeEnvironmentManagedActionHistory: API.PaginatedOperationMethod<
  DescribeEnvironmentManagedActionHistoryRequest,
  DescribeEnvironmentManagedActionHistoryResult,
  DescribeEnvironmentManagedActionHistoryError,
  Credentials | HttpClient.HttpClient,
  ManagedActionHistoryItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<DescribeEnvironmentManagedActionHistoryRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<DescribeEnvironmentManagedActionHistoryResult>,
  errors: [ElasticBeanstalkServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironmentManagedActionHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ManagedActionHistoryItems",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type DescribeEnvironmentManagedActionsError =
  | ElasticBeanstalkServiceException
  | CommonErrors;
/**
 * Lists an environment's upcoming and in-progress managed actions.
 *
 * This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where
 * a user only has permission to access one of three environments. When the user calls this action, the response will only include the one environment that
 * the user has permission to access instead of all three environments. If the user doesn't have access to any of the environments an empty result is
 * returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeEnvironmentManagedActions: API.OperationMethod<
  DescribeEnvironmentManagedActionsRequest,
  DescribeEnvironmentManagedActionsResult,
  DescribeEnvironmentManagedActionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<DescribeEnvironmentManagedActionsRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<DescribeEnvironmentManagedActionsResult>,
  errors: [ElasticBeanstalkServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironmentManagedActions",
}));

export type DescribeEnvironmentResourcesError = InsufficientPrivilegesException | CommonErrors;
/**
 * Returns Amazon Web Services resources for this environment.
 */
export const describeEnvironmentResources: API.OperationMethod<
  DescribeEnvironmentResourcesMessage,
  EnvironmentResourceDescriptionsMessage,
  DescribeEnvironmentResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102, __c12, 6) as any as S.Schema<DescribeEnvironmentResourcesMessage>,
  output: __S(119, __c14, 7) as any as S.Schema<EnvironmentResourceDescriptionsMessage>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironmentResources",
}));

export type DescribeEnvironmentsError = CommonErrors;
/**
 * Returns descriptions for existing environments.
 *
 * This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where
 * a user only has permission to access one of three environments. When the user calls the *DescribeEnvironments* action, the response
 * will only include the one environment that the user has permission to access instead of all three environments. If the user doesn't have access to any of
 * the environments an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeEnvironments: API.OperationMethod<
  DescribeEnvironmentsMessage,
  EnvironmentDescriptionsMessage,
  DescribeEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<DescribeEnvironmentsMessage>,
  output: __S(19, __c2, 3) as any as S.Schema<EnvironmentDescriptionsMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironments",
}));

export type DescribeEventsError = CommonErrors;
/**
 * Returns list of event descriptions matching criteria up to the last 6 weeks.
 *
 * This action returns the most recent 1,000 events from the specified `NextToken`.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeEvents: API.PaginatedOperationMethod<
  DescribeEventsMessage,
  EventDescriptionsMessage,
  DescribeEventsError,
  Credentials | HttpClient.HttpClient,
  EventDescription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<DescribeEventsMessage>,
  output: __S(126, __c15, 6) as any as S.Schema<EventDescriptionsMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Events",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type DescribeInstancesHealthError =
  | ElasticBeanstalkServiceException
  | InvalidRequestException
  | CommonErrors;
/**
 * Retrieves detailed information about the health of instances in your Elastic Beanstalk environments. This operation requires enhanced health reporting.
 *
 * This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where
 * a user only has permission to access one of three environments. When the user calls this action, the response will only include the one environment that
 * the user has permission to access instead of all three environments. If the user doesn't have access to any of the environments an empty result is
 * returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describeInstancesHealth: API.OperationMethod<
  DescribeInstancesHealthRequest,
  DescribeInstancesHealthResult,
  DescribeInstancesHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128, __c16, 0) as any as S.Schema<DescribeInstancesHealthRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<DescribeInstancesHealthResult>,
  errors: [ElasticBeanstalkServiceException, InvalidRequestException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInstancesHealth",
}));

export type DescribePlatformVersionError =
  | ElasticBeanstalkServiceException
  | InsufficientPrivilegesException
  | CommonErrors;
/**
 * Describes a platform version. Provides full details. Compare to ListPlatformVersions, which provides summary information about a
 * list of platform versions.
 *
 * For definitions of platform version and other platform-related terms, see Elastic Beanstalk Platforms Glossary.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const describePlatformVersion: API.OperationMethod<
  DescribePlatformVersionRequest,
  DescribePlatformVersionResult,
  DescribePlatformVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<DescribePlatformVersionRequest>,
  output: __S(144, __c18, 0) as any as S.Schema<DescribePlatformVersionResult>,
  errors: [ElasticBeanstalkServiceException, InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePlatformVersion",
}));

export type DisassociateEnvironmentOperationsRoleError =
  | InsufficientPrivilegesException
  | CommonErrors;
/**
 * The operations role feature of Elastic Beanstalk is in beta release and is subject to change.
 *
 * Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream
 * services during subsequent calls acting on this environment.
 */
export const disassociateEnvironmentOperationsRole: API.OperationMethod<
  DisassociateEnvironmentOperationsRoleMessage,
  DisassociateEnvironmentOperationsRoleResponse,
  DisassociateEnvironmentOperationsRoleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(145, __c18, 1) as any as S.Schema<DisassociateEnvironmentOperationsRoleMessage>,
  output: __S(146, __c18, 2) as any as S.Schema<DisassociateEnvironmentOperationsRoleResponse>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateEnvironmentOperationsRole",
}));

export type ListAvailableSolutionStacksError = CommonErrors;
/**
 * Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const listAvailableSolutionStacks: API.OperationMethod<
  ListAvailableSolutionStacksRequest,
  ListAvailableSolutionStacksResultMessage,
  ListAvailableSolutionStacksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<ListAvailableSolutionStacksRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<ListAvailableSolutionStacksResultMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableSolutionStacks",
}));

export type ListPlatformBranchesError = CommonErrors;
/**
 * Lists the platform branches available for your account in an Amazon Web Services Region. Provides summary information about each platform branch.
 *
 * For definitions of platform branch and other platform-related terms, see Elastic Beanstalk Platforms Glossary.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const listPlatformBranches: API.PaginatedOperationMethod<
  ListPlatformBranchesRequest,
  ListPlatformBranchesResult,
  ListPlatformBranchesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(156, __c19, 4) as any as S.Schema<ListPlatformBranchesRequest>,
  output: __S(159, __c19, 7) as any as S.Schema<ListPlatformBranchesResult>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPlatformBranches",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type ListPlatformVersionsError =
  | ElasticBeanstalkServiceException
  | InsufficientPrivilegesException
  | CommonErrors;
/**
 * Lists the platform versions available for your account in an Amazon Web Services Region. Provides summary information about each platform version. Compare to DescribePlatformVersion, which provides full details about a single platform version.
 *
 * This action only returns information about platform versions that the calling principle has IAM permissions to access. For example, consider a case
 * where a user only has permission to access one of ten platform versions. When the user calls the *ListPlatformVersions* action, the
 * response will only include the one platform version that the user has permission to access instead of all ten platform versions. If the user doesn't have
 * access to any of the platform versions an empty result is returned.
 *
 * The *AWSElasticBeanstalkReadOnly* managed policy allows operators to view information about resources related to Elastic Beanstalk
 * environments. For more information, see Managing Elastic Beanstalk
 * user policies in the *Elastic Beanstalk Developer Guide*. For detailed instructions to attach a policy to a user or group, see the
 * section Controlling access
 * with managed policies in the same topic.
 *
 * For definitions of platform version and other platform-related terms, see Elastic Beanstalk Platforms Glossary.
 */
export const listPlatformVersions: API.PaginatedOperationMethod<
  ListPlatformVersionsRequest,
  ListPlatformVersionsResult,
  ListPlatformVersionsError,
  Credentials | HttpClient.HttpClient,
  PlatformSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(163, __c20, 3) as any as S.Schema<ListPlatformVersionsRequest>,
  output: __S(165, __c20, 5) as any as S.Schema<ListPlatformVersionsResult>,
  errors: [ElasticBeanstalkServiceException, InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPlatformVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PlatformSummaryList",
    pageSize: "MaxRecords",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InsufficientPrivilegesException
  | ResourceNotFoundException
  | ResourceTypeNotSupportedException
  | CommonErrors;
/**
 * Return the tags applied to an Elastic Beanstalk resource. The response contains a list of tag key-value pairs.
 *
 * Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources.
 *
 * This action only returns information about resources that the calling principle has IAM permissions to access. For example, consider a case where a
 * user only has permission to access one of three resources. When the user calls the this action, the response will only include the one resource that the
 * user has permission to access instead of all three resources. If the user doesn't have access to any of the resources an empty result is returned.
 *
 * The AWSElasticBeanstalkReadOnly
 * managed policy allows operators to view information about resources related to Elastic Beanstalk. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer
 * Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the
 * same topic.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceMessage,
  ResourceTagsDescriptionMessage,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(166, __c20, 6) as any as S.Schema<ListTagsForResourceMessage>,
  output: __S(168, __c21, 0) as any as S.Schema<ResourceTagsDescriptionMessage>,
  errors: [
    InsufficientPrivilegesException,
    ResourceNotFoundException,
    ResourceTypeNotSupportedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RebuildEnvironmentError = InsufficientPrivilegesException | CommonErrors;
/**
 * Deletes and recreates all of the Amazon Web Services resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a
 * restart.
 */
export const rebuildEnvironment: API.OperationMethod<
  RebuildEnvironmentMessage,
  RebuildEnvironmentResponse,
  RebuildEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<RebuildEnvironmentMessage>,
  output: __S(170, __c21, 2) as any as S.Schema<RebuildEnvironmentResponse>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebuildEnvironment",
}));

export type RequestEnvironmentInfoError = CommonErrors;
/**
 * Initiates a request to compile the specified type of information of the deployed environment.
 *
 * Setting the `InfoType` to `tail` compiles the last lines from the application server log files of every Amazon EC2 instance in
 * your environment.
 *
 * Setting the `InfoType` to `bundle` compresses the application server log files for every Amazon EC2 instance into a
 * `.zip` file. Legacy and .NET containers do not support bundle logs.
 *
 * Setting the `InfoType` to `analyze` collects recent events, instance health, and logs from your environment and sends them to
 * Amazon Bedrock in your account to generate diagnostic insights and recommended next steps.
 *
 * Use RetrieveEnvironmentInfo to obtain the set of logs.
 *
 * Related Topics
 *
 * - RetrieveEnvironmentInfo
 */
export const requestEnvironmentInfo: API.OperationMethod<
  RequestEnvironmentInfoMessage,
  RequestEnvironmentInfoResponse,
  RequestEnvironmentInfoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<RequestEnvironmentInfoMessage>,
  output: __S(172, __c21, 4) as any as S.Schema<RequestEnvironmentInfoResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RequestEnvironmentInfo",
}));

export type RestartAppServerError = CommonErrors;
/**
 * Causes the environment to restart the application container server running on each Amazon EC2 instance.
 */
export const restartAppServer: API.OperationMethod<
  RestartAppServerMessage,
  RestartAppServerResponse,
  RestartAppServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<RestartAppServerMessage>,
  output: __S(174, __c21, 6) as any as S.Schema<RestartAppServerResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestartAppServer",
}));

export type RetrieveEnvironmentInfoError = CommonErrors;
/**
 * Retrieves the compiled information from a RequestEnvironmentInfo request.
 *
 * Related Topics
 *
 * - RequestEnvironmentInfo
 */
export const retrieveEnvironmentInfo: API.OperationMethod<
  RetrieveEnvironmentInfoMessage,
  RetrieveEnvironmentInfoResultMessage,
  RetrieveEnvironmentInfoError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175, __c21, 7) as any as S.Schema<RetrieveEnvironmentInfoMessage>,
  output: __S(178, __c22, 2) as any as S.Schema<RetrieveEnvironmentInfoResultMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetrieveEnvironmentInfo",
}));

export type SwapEnvironmentCNAMEsError = CommonErrors;
/**
 * Swaps the CNAMEs of two environments.
 */
export const swapEnvironmentCNAMEs: API.OperationMethod<
  SwapEnvironmentCNAMEsMessage,
  SwapEnvironmentCNAMEsResponse,
  SwapEnvironmentCNAMEsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<SwapEnvironmentCNAMEsMessage>,
  output: __S(180, __c22, 4) as any as S.Schema<SwapEnvironmentCNAMEsResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SwapEnvironmentCNAMEs",
}));

export type TerminateEnvironmentError = InsufficientPrivilegesException | CommonErrors;
/**
 * Terminates the specified environment.
 */
export const terminateEnvironment: API.OperationMethod<
  TerminateEnvironmentMessage,
  EnvironmentDescription,
  TerminateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181, __c22, 5) as any as S.Schema<TerminateEnvironmentMessage>,
  output: __S(17, __c2, 1) as any as S.Schema<EnvironmentDescription>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateEnvironment",
}));

export type UpdateApplicationError = CommonErrors;
/**
 * Updates the specified application to have the specified properties.
 *
 * If a property (for example, `description`) is not provided, the value remains
 * unchanged. To clear these properties, specify an empty string.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationMessage,
  ApplicationDescriptionMessage,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182, __c22, 6) as any as S.Schema<UpdateApplicationMessage>,
  output: __S(30, __c3, 6) as any as S.Schema<ApplicationDescriptionMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateApplicationResourceLifecycleError =
  | InsufficientPrivilegesException
  | CommonErrors;
/**
 * Modifies lifecycle settings for an application.
 */
export const updateApplicationResourceLifecycle: API.OperationMethod<
  UpdateApplicationResourceLifecycleMessage,
  ApplicationResourceLifecycleDescriptionMessage,
  UpdateApplicationResourceLifecycleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183, __c22, 7) as any as S.Schema<UpdateApplicationResourceLifecycleMessage>,
  output: __S(184, __c23, 0) as any as S.Schema<ApplicationResourceLifecycleDescriptionMessage>,
  errors: [InsufficientPrivilegesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplicationResourceLifecycle",
}));

export type UpdateApplicationVersionError = CommonErrors;
/**
 * Updates the specified application version to have the specified properties.
 *
 * If a property (for example, `description`) is not provided, the value remains unchanged. To clear properties, specify an empty
 * string.
 */
export const updateApplicationVersion: API.OperationMethod<
  UpdateApplicationVersionMessage,
  ApplicationVersionDescriptionMessage,
  UpdateApplicationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<UpdateApplicationVersionMessage>,
  output: __S(39, __c4, 7) as any as S.Schema<ApplicationVersionDescriptionMessage>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplicationVersion",
}));

export type UpdateConfigurationTemplateError =
  | InsufficientPrivilegesException
  | TooManyBucketsException
  | CommonErrors;
/**
 * Updates the specified configuration template to have the specified properties or
 * configuration option values.
 *
 * If a property (for example, `ApplicationName`) is not provided, its value
 * remains unchanged. To clear such properties, specify an empty string.
 *
 * Related Topics
 *
 * - DescribeConfigurationOptions
 */
export const updateConfigurationTemplate: API.OperationMethod<
  UpdateConfigurationTemplateMessage,
  ConfigurationSettingsDescription,
  UpdateConfigurationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186, __c23, 2) as any as S.Schema<UpdateConfigurationTemplateMessage>,
  output: __S(44, __c5, 4) as any as S.Schema<ConfigurationSettingsDescription>,
  errors: [InsufficientPrivilegesException, TooManyBucketsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationTemplate",
}));

export type UpdateEnvironmentError =
  | InsufficientPrivilegesException
  | TooManyBucketsException
  | CommonErrors;
/**
 * Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template,
 * or updates select configuration option values in the running environment.
 *
 * Attempting to update both the release and configuration is not allowed and Elastic Beanstalk returns an `InvalidParameterCombination` error.
 *
 * When updating the configuration settings to a new template or individual settings, a draft configuration is created and DescribeConfigurationSettings for this environment returns two setting descriptions with different `DeploymentStatus` values.
 */
export const updateEnvironment: API.OperationMethod<
  UpdateEnvironmentMessage,
  EnvironmentDescription,
  UpdateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187, __c23, 3) as any as S.Schema<UpdateEnvironmentMessage>,
  output: __S(17, __c2, 1) as any as S.Schema<EnvironmentDescription>,
  errors: [InsufficientPrivilegesException, TooManyBucketsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEnvironment",
}));

export type UpdateTagsForResourceError =
  | InsufficientPrivilegesException
  | OperationInProgressException
  | ResourceNotFoundException
  | ResourceTypeNotSupportedException
  | TooManyTagsException
  | CommonErrors;
/**
 * Update the list of tags applied to an Elastic Beanstalk resource. Two lists can be passed: `TagsToAdd` for tags to add or update, and
 * `TagsToRemove`.
 *
 * Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources.
 *
 * If you create a custom policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API
 * operation name:
 *
 * ### elasticbeanstalk:AddTags
 *
 * Controls permission to call `UpdateTagsForResource` and pass a list of tags to add in the `TagsToAdd` parameter.
 *
 * ### elasticbeanstalk:RemoveTags
 *
 * Controls permission to call `UpdateTagsForResource` and pass a list of tag keys to remove in the `TagsToRemove`
 * parameter.
 *
 * For details about creating a custom user policy, see Creating a Custom User Policy.
 */
export const updateTagsForResource: API.OperationMethod<
  UpdateTagsForResourceMessage,
  UpdateTagsForResourceResponse,
  UpdateTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<UpdateTagsForResourceMessage>,
  output: __S(190, __c23, 6) as any as S.Schema<UpdateTagsForResourceResponse>,
  errors: [
    InsufficientPrivilegesException,
    OperationInProgressException,
    ResourceNotFoundException,
    ResourceTypeNotSupportedException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTagsForResource",
}));

export type ValidateConfigurationSettingsError =
  | InsufficientPrivilegesException
  | TooManyBucketsException
  | CommonErrors;
/**
 * Takes a set of configuration settings and either a configuration template or
 * environment, and determines whether those values are valid.
 *
 * This action returns a list of messages indicating any errors or warnings associated
 * with the selection of option values.
 */
export const validateConfigurationSettings: API.OperationMethod<
  ValidateConfigurationSettingsMessage,
  ConfigurationSettingsValidationMessages,
  ValidateConfigurationSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191, __c23, 7) as any as S.Schema<ValidateConfigurationSettingsMessage>,
  output: __S(194, __c24, 2) as any as S.Schema<ConfigurationSettingsValidationMessages>,
  errors: [InsufficientPrivilegesException, TooManyBucketsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ValidateConfigurationSettings",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AbortEnvironmentUpdateMessage",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AbortEnvironmentUpdateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          ActionId: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ApplyEnvironmentManagedActionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActionId: S.optional(S.String),
          ActionDescription: S.optional(S.String),
          ActionType: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ApplyEnvironmentManagedActionResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ EnvironmentName: S.String, OperationsRole: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateEnvironmentOperationsRoleMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateEnvironmentOperationsRoleResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ CNAMEPrefix: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CheckDNSAvailabilityMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Available: S.optional(S.Boolean),
          FullyQualifiedCNAME: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CheckDNSAvailabilityResultMessage",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          GroupName: S.optional(S.String),
          VersionLabels: S.optional(__S(8, __c1, 0)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ComposeEnvironmentsMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Protocol: S.optional(S.String), Port: S.optional(S.Number) }),
      ).annotate({ identifier: "Listener" });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          LoadBalancerName: S.optional(S.String),
          Domain: S.optional(S.String),
          Listeners: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "LoadBalancerDescription" });
    case 5:
      return S.suspend(() => S.Struct({ LoadBalancer: S.optional(__S(12, __c1, 4)) })).annotate({
        identifier: "EnvironmentResourcesDescription",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "EnvironmentTier" });
    case 7:
      return S.suspend(() =>
        S.Struct({ LinkName: S.optional(S.String), EnvironmentName: S.optional(S.String) }),
      ).annotate({ identifier: "EnvironmentLink" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(15, __c1, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          ApplicationName: S.optional(S.String),
          VersionLabel: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          TemplateName: S.optional(S.String),
          Description: S.optional(S.String),
          EndpointURL: S.optional(S.String),
          CNAME: S.optional(S.String),
          DateCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DateUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
          AbortableOperationInProgress: S.optional(S.Boolean),
          Health: S.optional(S.String),
          HealthStatus: S.optional(S.String),
          Resources: S.optional(__S(13, __c1, 5)),
          Tier: S.optional(__S(14, __c1, 6)),
          EnvironmentLinks: S.optional(__S(16, __c2, 0)),
          EnvironmentArn: S.optional(S.String),
          OperationsRole: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "EnvironmentDescription" });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Environments: S.optional(__S(18, __c2, 2)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "EnvironmentDescriptionsMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          MaxCount: S.optional(S.Number),
          DeleteSourceFromS3: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MaxCountRule" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          MaxAgeInDays: S.optional(S.Number),
          DeleteSourceFromS3: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MaxAgeRule" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          MaxCountRule: S.optional(__S(20, __c2, 4)),
          MaxAgeRule: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({
        identifier: "ApplicationVersionLifecycleConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ServiceRole: S.optional(S.String),
          VersionLifecycleConfig: S.optional(__S(22, __c2, 6)),
        }),
      ).annotate({
        identifier: "ApplicationResourceLifecycleConfig",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          Description: S.optional(S.String),
          ResourceLifecycleConfig: S.optional(__S(23, __c2, 7)),
          Tags: S.optional(__S(25, __c3, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationMessage" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.optional(S.String),
          ApplicationName: S.optional(S.String),
          Description: S.optional(S.String),
          DateCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DateUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Versions: S.optional(__S(27, __c3, 3)),
          ConfigurationTemplates: S.optional(__S(28, __c3, 4)),
          ResourceLifecycleConfig: S.optional(__S(23, __c2, 7)),
        }),
      ).annotate({ identifier: "ApplicationDescription" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Application: S.optional(__S(29, __c3, 5)) }).pipe(ns),
      ).annotate({
        identifier: "ApplicationDescriptionMessage",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceType: S.String,
          SourceRepository: S.String,
          SourceLocation: S.String,
        }),
      ).annotate({ identifier: "SourceBuildInformation" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.optional(S.String), S3Key: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ArtifactName: S.optional(S.String),
          CodeBuildServiceRole: S.String,
          ComputeType: S.optional(S.String),
          Image: S.String,
          TimeoutInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "BuildConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ Uri: S.optional(S.String) })).annotate({
        identifier: "ImageSource",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          DockerfileLocation: S.optional(S.String),
          Buildpack: S.optional(S.String),
          Architecture: S.optional(S.String),
          CodeBuildServiceRole: S.optional(S.String),
          ComputeType: S.optional(S.String),
          TimeoutInMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ImageBuildConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Source: S.optional(__S(34, __c4, 2)), Build: S.optional(__S(35, __c4, 3)) }),
      ).annotate({ identifier: "ImageConfiguration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          VersionLabel: S.String,
          Description: S.optional(S.String),
          SourceBuildInformation: S.optional(__S(31, __c3, 7)),
          SourceBundle: S.optional(__S(32, __c4, 0)),
          BuildConfiguration: S.optional(__S(33, __c4, 1)),
          AutoCreateApplication: S.optional(S.Boolean),
          Process: S.optional(S.Boolean),
          Tags: S.optional(__S(25, __c3, 1)),
          ImageConfiguration: S.optional(__S(36, __c4, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateApplicationVersionMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationVersionArn: S.optional(S.String),
          ApplicationName: S.optional(S.String),
          Description: S.optional(S.String),
          VersionLabel: S.optional(S.String),
          SourceBuildInformation: S.optional(__S(31, __c3, 7)),
          BuildArn: S.optional(S.String),
          SourceBundle: S.optional(__S(32, __c4, 0)),
          ImageSource: S.optional(__S(34, __c4, 2)),
          ImageBuildConfiguration: S.optional(__S(35, __c4, 3)),
          Process: S.optional(S.Boolean),
          DateCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DateUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ApplicationVersionDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationVersion: S.optional(__S(38, __c4, 6)) }).pipe(ns),
      ).annotate({
        identifier: "ApplicationVersionDescriptionMessage",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.optional(S.String), TemplateName: S.optional(S.String) }),
      ).annotate({ identifier: "SourceConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceName: S.optional(S.String),
          Namespace: S.optional(S.String),
          OptionName: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfigurationOptionSetting",
      });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          TemplateName: S.String,
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          SourceConfiguration: S.optional(__S(40, __c5, 0)),
          EnvironmentId: S.optional(S.String),
          Description: S.optional(S.String),
          OptionSettings: S.optional(__S(42, __c5, 2)),
          Tags: S.optional(__S(25, __c3, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateConfigurationTemplateMessage",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          ApplicationName: S.optional(S.String),
          TemplateName: S.optional(S.String),
          Description: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          DeploymentStatus: S.optional(S.String),
          DateCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DateUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          OptionSettings: S.optional(__S(42, __c5, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "ConfigurationSettingsDescription",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceName: S.optional(S.String),
          Namespace: S.optional(S.String),
          OptionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "OptionSpecification" });
    case 6:
      return S.Array(__S(45, __c5, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          EnvironmentName: S.optional(S.String),
          GroupName: S.optional(S.String),
          Description: S.optional(S.String),
          CNAMEPrefix: S.optional(S.String),
          Tier: S.optional(__S(14, __c1, 6)),
          Tags: S.optional(__S(25, __c3, 1)),
          VersionLabel: S.optional(S.String),
          TemplateName: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          OptionSettings: S.optional(__S(42, __c5, 2)),
          OptionsToRemove: S.optional(__S(46, __c5, 6)),
          OperationsRole: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEnvironmentMessage" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PlatformName: S.String,
          PlatformVersion: S.String,
          PlatformDefinitionBundle: __S(32, __c4, 0),
          EnvironmentName: S.optional(S.String),
          OptionSettings: S.optional(__S(42, __c5, 2)),
          Tags: S.optional(__S(25, __c3, 1)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePlatformVersionRequest",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          PlatformArn: S.optional(S.String),
          PlatformOwner: S.optional(S.String),
          PlatformStatus: S.optional(S.String),
          PlatformCategory: S.optional(S.String),
          OperatingSystemName: S.optional(S.String),
          OperatingSystemVersion: S.optional(S.String),
          SupportedTierList: S.optional(__S(49, __c6, 1)),
          SupportedAddonList: S.optional(__S(50, __c6, 2)),
          PlatformLifecycleState: S.optional(S.String),
          PlatformVersion: S.optional(S.String),
          PlatformBranchName: S.optional(S.String),
          PlatformBranchLifecycleState: S.optional(S.String),
        }),
      ).annotate({ identifier: "PlatformSummary" });
    case 4:
      return S.suspend(() => S.Struct({ ARN: S.optional(S.String) })).annotate({
        identifier: "Builder",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PlatformSummary: S.optional(__S(51, __c6, 3)),
          Builder: S.optional(__S(52, __c6, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "CreatePlatformVersionResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateStorageLocationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ S3Bucket: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateStorageLocationResultMessage",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, TerminateEnvByForce: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteApplicationMessage" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteApplicationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          VersionLabel: S.String,
          DeleteSourceBundle: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationVersionMessage",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteApplicationVersionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, TemplateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConfigurationTemplateMessage",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteConfigurationTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, EnvironmentName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEnvironmentConfigurationMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteEnvironmentConfigurationResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PlatformArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePlatformVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PlatformSummary: S.optional(__S(51, __c6, 3)) }).pipe(ns),
      ).annotate({
        identifier: "DeletePlatformVersionResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountAttributesRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Maximum: S.optional(S.Number) })).annotate({
        identifier: "ResourceQuota",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationQuota: S.optional(__S(67, __c8, 3)),
          ApplicationVersionQuota: S.optional(__S(67, __c8, 3)),
          EnvironmentQuota: S.optional(__S(67, __c8, 3)),
          ConfigurationTemplateQuota: S.optional(__S(67, __c8, 3)),
          CustomPlatformQuota: S.optional(__S(67, __c8, 3)),
        }),
      ).annotate({ identifier: "ResourceQuotas" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceQuotas: S.optional(__S(68, __c8, 4)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountAttributesResult",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationNames: S.optional(__S(70, __c8, 6)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationsMessage",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(29, __c3, 5));
    case 1:
      return S.suspend(() =>
        S.Struct({ Applications: S.optional(__S(72, __c9, 0)) }).pipe(ns),
      ).annotate({
        identifier: "ApplicationDescriptionsMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          VersionLabels: S.optional(__S(27, __c3, 3)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationVersionsMessage",
      });
    case 3:
      return S.Array(__S(38, __c4, 6));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationVersions: S.optional(__S(75, __c9, 3)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ApplicationVersionDescriptionsMessage",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          TemplateName: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          Options: S.optional(__S(46, __c5, 6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConfigurationOptionsMessage",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ Pattern: S.optional(S.String), Label: S.optional(S.String) }),
      ).annotate({ identifier: "OptionRestrictionRegex" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Namespace: S.optional(S.String),
          Name: S.optional(S.String),
          DefaultValue: S.optional(S.String),
          ChangeSeverity: S.optional(S.String),
          UserDefined: S.optional(S.Boolean),
          ValueType: S.optional(S.String),
          ValueOptions: S.optional(__S(78, __c9, 6)),
          MinValue: S.optional(S.Number),
          MaxValue: S.optional(S.Number),
          MaxLength: S.optional(S.Number),
          Regex: S.optional(__S(79, __c9, 7)),
        }),
      ).annotate({
        identifier: "ConfigurationOptionDescription",
      });
    case 1:
      return S.Array(__S(80, __c10, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          Options: S.optional(__S(81, __c10, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "ConfigurationOptionsDescription",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          TemplateName: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConfigurationSettingsMessage",
      });
    case 4:
      return S.Array(__S(44, __c5, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({ ConfigurationSettings: S.optional(__S(84, __c10, 4)) }).pipe(ns),
      ).annotate({
        identifier: "ConfigurationSettingsDescriptions",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          AttributeNames: S.optional(__S(86, __c10, 6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEnvironmentHealthRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Status2xx: S.optional(S.Number),
          Status3xx: S.optional(S.Number),
          Status4xx: S.optional(S.Number),
          Status5xx: S.optional(S.Number),
        }),
      ).annotate({ identifier: "StatusCodes" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          P999: S.optional(S.Number),
          P99: S.optional(S.Number),
          P95: S.optional(S.Number),
          P90: S.optional(S.Number),
          P85: S.optional(S.Number),
          P75: S.optional(S.Number),
          P50: S.optional(S.Number),
          P10: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Latency" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Duration: S.optional(S.Number),
          RequestCount: S.optional(S.Number),
          StatusCodes: S.optional(__S(89, __c11, 1)),
          Latency: S.optional(__S(90, __c11, 2)),
        }),
      ).annotate({ identifier: "ApplicationMetrics" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          NoData: S.optional(S.Number),
          Unknown: S.optional(S.Number),
          Pending: S.optional(S.Number),
          Ok: S.optional(S.Number),
          Info: S.optional(S.Number),
          Warning: S.optional(S.Number),
          Degraded: S.optional(S.Number),
          Severe: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InstanceHealthSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          HealthStatus: S.optional(S.String),
          Status: S.optional(S.String),
          Color: S.optional(S.String),
          Causes: S.optional(__S(88, __c11, 0)),
          ApplicationMetrics: S.optional(__S(91, __c11, 3)),
          InstancesHealth: S.optional(__S(92, __c11, 4)),
          RefreshedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEnvironmentHealthResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEnvironmentManagedActionHistoryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ActionId: S.optional(S.String),
          ActionType: S.optional(S.String),
          ActionDescription: S.optional(S.String),
          FailureType: S.optional(S.String),
          Status: S.optional(S.String),
          FailureDescription: S.optional(S.String),
          ExecutedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          FinishedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ManagedActionHistoryItem" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedActionHistoryItems: S.optional(__S(96, __c12, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeEnvironmentManagedActionHistoryResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEnvironmentManagedActionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActionId: S.optional(S.String),
          ActionDescription: S.optional(S.String),
          ActionType: S.optional(S.String),
          Status: S.optional(S.String),
          WindowStartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ManagedAction" });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ ManagedActions: S.optional(__S(100, __c12, 4)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeEnvironmentManagedActionsResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEnvironmentResourcesMessage",
      });
    case 7:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AutoScalingGroup",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103, __c12, 7));
    case 1:
      return S.suspend(() => S.Struct({ ClusterArn: S.optional(S.String) })).annotate({
        identifier: "Cluster",
      });
    case 2:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "Instance",
      });
    case 3:
      return S.Array(__S(106, __c13, 2));
    case 4:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "LaunchConfiguration",
      });
    case 5:
      return S.Array(__S(108, __c13, 4));
    case 6:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "LaunchTemplate",
      });
    case 7:
      return S.Array(__S(110, __c13, 6));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "LoadBalancer",
      });
    case 1:
      return S.Array(__S(112, __c14, 0));
    case 2:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "Trigger",
      });
    case 3:
      return S.Array(__S(114, __c14, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), URL: S.optional(S.String) }),
      ).annotate({ identifier: "Queue" });
    case 5:
      return S.Array(__S(116, __c14, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          AutoScalingGroups: S.optional(__S(104, __c13, 0)),
          Cluster: S.optional(__S(105, __c13, 1)),
          Instances: S.optional(__S(107, __c13, 3)),
          LaunchConfigurations: S.optional(__S(109, __c13, 5)),
          LaunchTemplates: S.optional(__S(111, __c13, 7)),
          LoadBalancers: S.optional(__S(113, __c14, 1)),
          Triggers: S.optional(__S(115, __c14, 3)),
          Queues: S.optional(__S(117, __c14, 5)),
        }),
      ).annotate({
        identifier: "EnvironmentResourceDescription",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ EnvironmentResources: S.optional(__S(118, __c14, 6)) }).pipe(ns),
      ).annotate({
        identifier: "EnvironmentResourceDescriptionsMessage",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          VersionLabel: S.optional(S.String),
          EnvironmentIds: S.optional(__S(120, __c15, 0)),
          EnvironmentNames: S.optional(__S(121, __c15, 1)),
          IncludeDeleted: S.optional(S.Boolean),
          IncludedDeletedBackTo: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEnvironmentsMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          VersionLabel: S.optional(S.String),
          TemplateName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          RequestId: S.optional(S.String),
          Severity: S.optional(S.String),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeEventsMessage" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EventDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Message: S.optional(S.String),
          ApplicationName: S.optional(S.String),
          VersionLabel: S.optional(S.String),
          TemplateName: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          RequestId: S.optional(S.String),
          Severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "EventDescription" });
    case 5:
      return S.Array(__S(124, __c15, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Events: S.optional(__S(125, __c15, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "EventDescriptionsMessage" });
    case 7:
      return S.Array(S.String);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EnvironmentName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          AttributeNames: S.optional(__S(127, __c15, 7)),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeInstancesHealthRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          User: S.optional(S.Number),
          Nice: S.optional(S.Number),
          System: S.optional(S.Number),
          Idle: S.optional(S.Number),
          IOWait: S.optional(S.Number),
          IRQ: S.optional(S.Number),
          SoftIRQ: S.optional(S.Number),
          Privileged: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CPUUtilization" });
    case 2:
      return S.Array(S.Number);
    case 3:
      return S.suspend(() =>
        S.Struct({
          CPUUtilization: S.optional(__S(129, __c16, 1)),
          LoadAverage: S.optional(__S(130, __c16, 2)),
        }),
      ).annotate({ identifier: "SystemStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VersionLabel: S.optional(S.String),
          DeploymentId: S.optional(S.Number),
          Status: S.optional(S.String),
          DeploymentTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Deployment" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          HealthStatus: S.optional(S.String),
          Color: S.optional(S.String),
          Causes: S.optional(__S(88, __c11, 0)),
          LaunchedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ApplicationMetrics: S.optional(__S(91, __c11, 3)),
          System: S.optional(__S(131, __c16, 3)),
          Deployment: S.optional(__S(132, __c16, 4)),
          AvailabilityZone: S.optional(S.String),
          InstanceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "SingleInstanceHealth" });
    case 6:
      return S.Array(__S(133, __c16, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceHealthList: S.optional(__S(134, __c16, 6)),
          RefreshedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeInstancesHealthResult",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PlatformArn: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribePlatformVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Version: S.optional(S.String) }),
      ).annotate({
        identifier: "PlatformProgrammingLanguage",
      });
    case 2:
      return S.Array(__S(137, __c17, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Version: S.optional(S.String) }),
      ).annotate({ identifier: "PlatformFramework" });
    case 4:
      return S.Array(__S(139, __c17, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ VirtualizationType: S.optional(S.String), ImageId: S.optional(S.String) }),
      ).annotate({ identifier: "CustomAmi" });
    case 6:
      return S.Array(__S(141, __c17, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PlatformArn: S.optional(S.String),
          PlatformOwner: S.optional(S.String),
          PlatformName: S.optional(S.String),
          PlatformVersion: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          PlatformStatus: S.optional(S.String),
          DateCreated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DateUpdated: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PlatformCategory: S.optional(S.String),
          Description: S.optional(S.String),
          Maintainer: S.optional(S.String),
          OperatingSystemName: S.optional(S.String),
          OperatingSystemVersion: S.optional(S.String),
          ProgrammingLanguages: S.optional(__S(138, __c17, 2)),
          Frameworks: S.optional(__S(140, __c17, 4)),
          CustomAmiList: S.optional(__S(142, __c17, 6)),
          SupportedTierList: S.optional(__S(49, __c6, 1)),
          SupportedAddonList: S.optional(__S(50, __c6, 2)),
          PlatformLifecycleState: S.optional(S.String),
          PlatformBranchName: S.optional(S.String),
          PlatformBranchLifecycleState: S.optional(S.String),
        }),
      ).annotate({ identifier: "PlatformDescription" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PlatformDescription: S.optional(__S(143, __c17, 7)) }).pipe(ns),
      ).annotate({
        identifier: "DescribePlatformVersionResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EnvironmentName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateEnvironmentOperationsRoleMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DisassociateEnvironmentOperationsRoleResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAvailableSolutionStacksRequest",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SolutionStackName: S.optional(S.String),
          PermittedFileTypes: S.optional(__S(149, __c18, 5)),
        }),
      ).annotate({ identifier: "SolutionStackDescription" });
    case 7:
      return S.Array(__S(150, __c18, 6));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SolutionStacks: S.optional(__S(148, __c18, 4)),
          SolutionStackDetails: S.optional(__S(151, __c18, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableSolutionStacksResultMessage",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.optional(S.String),
          Operator: S.optional(S.String),
          Values: S.optional(__S(153, __c19, 1)),
        }),
      ).annotate({ identifier: "SearchFilter" });
    case 3:
      return S.Array(__S(154, __c19, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(155, __c19, 3)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPlatformBranchesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PlatformName: S.optional(S.String),
          BranchName: S.optional(S.String),
          LifecycleState: S.optional(S.String),
          BranchOrder: S.optional(S.Number),
          SupportedTierList: S.optional(__S(49, __c6, 1)),
        }),
      ).annotate({ identifier: "PlatformBranchSummary" });
    case 6:
      return S.Array(__S(157, __c19, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PlatformBranchSummaryList: S.optional(__S(158, __c19, 6)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPlatformBranchesResult",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Operator: S.optional(S.String),
          Values: S.optional(__S(160, __c20, 0)),
        }),
      ).annotate({ identifier: "PlatformFilter" });
    case 2:
      return S.Array(__S(161, __c20, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(162, __c20, 2)),
          MaxRecords: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPlatformVersionsRequest",
      });
    case 4:
      return S.Array(__S(51, __c6, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          PlatformSummaryList: S.optional(__S(164, __c20, 4)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPlatformVersionsResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceMessage",
      });
    case 7:
      return S.Array(__S(24, __c3, 0));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ResourceTags: S.optional(__S(167, __c20, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "ResourceTagsDescriptionMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RebuildEnvironmentMessage",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RebuildEnvironmentResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          InfoType: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RequestEnvironmentInfoMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RequestEnvironmentInfoResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RestartAppServerMessage" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RestartAppServerResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          InfoType: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RetrieveEnvironmentInfoMessage",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InfoType: S.optional(S.String),
          Ec2InstanceId: S.optional(S.String),
          SampleTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EnvironmentInfoDescription",
      });
    case 1:
      return S.Array(__S(176, __c22, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ EnvironmentInfo: S.optional(__S(177, __c22, 1)) }).pipe(ns),
      ).annotate({
        identifier: "RetrieveEnvironmentInfoResultMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceEnvironmentId: S.optional(S.String),
          SourceEnvironmentName: S.optional(S.String),
          DestinationEnvironmentId: S.optional(S.String),
          DestinationEnvironmentName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SwapEnvironmentCNAMEsMessage",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SwapEnvironmentCNAMEsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          TerminateResources: S.optional(S.Boolean),
          ForceTerminate: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "TerminateEnvironmentMessage",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ApplicationName: S.String, Description: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateApplicationMessage" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          ResourceLifecycleConfig: __S(23, __c2, 7),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateApplicationResourceLifecycleMessage",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          ResourceLifecycleConfig: S.optional(__S(23, __c2, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "ApplicationResourceLifecycleDescriptionMessage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          VersionLabel: S.String,
          Description: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateApplicationVersionMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          TemplateName: S.String,
          Description: S.optional(S.String),
          OptionSettings: S.optional(__S(42, __c5, 2)),
          OptionsToRemove: S.optional(__S(46, __c5, 6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateConfigurationTemplateMessage",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          GroupName: S.optional(S.String),
          Description: S.optional(S.String),
          Tier: S.optional(__S(14, __c1, 6)),
          VersionLabel: S.optional(S.String),
          TemplateName: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          PlatformArn: S.optional(S.String),
          OptionSettings: S.optional(__S(42, __c5, 2)),
          OptionsToRemove: S.optional(__S(46, __c5, 6)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEnvironmentMessage" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          TagsToAdd: S.optional(__S(167, __c20, 7)),
          TagsToRemove: S.optional(__S(188, __c23, 4)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTagsForResourceMessage",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.String,
          TemplateName: S.optional(S.String),
          EnvironmentName: S.optional(S.String),
          OptionSettings: __S(42, __c5, 2),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ValidateConfigurationSettingsMessage",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Message: S.optional(S.String),
          Severity: S.optional(S.String),
          Namespace: S.optional(S.String),
          OptionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ValidationMessage" });
    case 1:
      return S.Array(__S(192, __c24, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Messages: S.optional(__S(193, __c24, 1)) }).pipe(ns),
      ).annotate({
        identifier: "ConfigurationSettingsValidationMessages",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
