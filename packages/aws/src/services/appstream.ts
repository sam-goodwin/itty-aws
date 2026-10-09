import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "AppStream",
  serviceShapeName: "PhotonAdminProxyService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "appstream" });
const ver = /*@__PURE__*/ T.ServiceVersion("2016-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://appstream2-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://appstream2-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://appstream2.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        if ("aws" === _.getAttr(PartitionResult, "name")) {
          return e(`https://appstream2.${Region}.amazonaws.com`);
        }
        if ("aws-us-gov" === _.getAttr(PartitionResult, "name")) {
          return e(`https://appstream2.${Region}.amazonaws.com`);
        }
        return e(`https://appstream2.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConcurrentModificationException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentModificationException>()(
    "ConcurrentModificationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class DryRunOperationException
  extends /*@__PURE__*/ S.TaggedError<DryRunOperationException>()(
    "DryRunOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class EntitlementAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<EntitlementAlreadyExistsException>()(
    "EntitlementAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class EntitlementNotFoundException
  extends /*@__PURE__*/ S.TaggedError<EntitlementNotFoundException>()(
    "EntitlementNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class IncompatibleImageException
  extends /*@__PURE__*/ S.TaggedError<IncompatibleImageException>()(
    "IncompatibleImageException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidAccountStatusException
  extends /*@__PURE__*/ S.TaggedError<InvalidAccountStatusException>()(
    "InvalidAccountStatusException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterCombinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterCombinationException>()(
    "InvalidParameterCombinationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRoleException
  extends /*@__PURE__*/ S.TaggedError<InvalidRoleException>()(
    "InvalidRoleException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class OperationNotPermittedException
  extends /*@__PURE__*/ S.TaggedError<OperationNotPermittedException>()(
    "OperationNotPermittedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class RequestLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<RequestLimitExceededException>()(
    "RequestLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotAvailableException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotAvailableException>()(
    "ResourceNotAvailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type Name = string;
export interface AssociateAppBlockBuilderAppBlockRequest {
  AppBlockArn?: string;
  AppBlockBuilderName?: string;
}
const AssociateAppBlockBuilderAppBlockRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateAppBlockBuilderAppBlockRequest>;
export interface AppBlockBuilderAppBlockAssociation {
  AppBlockArn?: string;
  AppBlockBuilderName?: string;
}
const AppBlockBuilderAppBlockAssociation = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AppBlockBuilderAppBlockAssociation>;
export interface AssociateAppBlockBuilderAppBlockResult {
  AppBlockBuilderAppBlockAssociation?: AppBlockBuilderAppBlockAssociation & {
    AppBlockArn: Arn;
    AppBlockBuilderName: Name;
  };
}
const AssociateAppBlockBuilderAppBlockResult = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AssociateAppBlockBuilderAppBlockResult>;
export interface AssociateApplicationFleetRequest {
  FleetName?: string;
  ApplicationArn?: string;
}
const AssociateApplicationFleetRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateApplicationFleetRequest>;
export interface ApplicationFleetAssociation {
  FleetName?: string;
  ApplicationArn?: string;
}
const ApplicationFleetAssociation = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<ApplicationFleetAssociation>;
export interface AssociateApplicationFleetResult {
  ApplicationFleetAssociation?: ApplicationFleetAssociation & {
    FleetName: string;
    ApplicationArn: Arn;
  };
}
const AssociateApplicationFleetResult = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AssociateApplicationFleetResult>;
export interface AssociateApplicationToEntitlementRequest {
  StackName?: string;
  EntitlementName?: string;
  ApplicationIdentifier?: string;
}
const AssociateApplicationToEntitlementRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AssociateApplicationToEntitlementRequest>;
export interface AssociateApplicationToEntitlementResult {}
const AssociateApplicationToEntitlementResult = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssociateApplicationToEntitlementResult>;
export interface AssociateFleetRequest {
  FleetName?: string;
  StackName?: string;
}
const AssociateFleetRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AssociateFleetRequest>;
export interface AssociateFleetResult {}
const AssociateFleetResult = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<AssociateFleetResult>;
export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c1, 2);
export interface AssociateSoftwareToImageBuilderRequest {
  ImageBuilderName?: string;
  SoftwareNames?: string[];
}
const AssociateSoftwareToImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AssociateSoftwareToImageBuilderRequest>;
export interface AssociateSoftwareToImageBuilderResult {}
const AssociateSoftwareToImageBuilderResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<AssociateSoftwareToImageBuilderResult>;
export type Username = string | redacted.Redacted<string>;
export type AuthenticationType = "API" | "SAML" | "USERPOOL" | "AWS_AD" | (string & {});
const AuthenticationType = S.String;

export interface UserStackAssociation {
  StackName?: string;
  UserName?: string | redacted.Redacted<string>;
  AuthenticationType?: AuthenticationType;
  SendEmailNotification?: boolean;
}
const UserStackAssociation = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<UserStackAssociation>;
export type UserStackAssociationList = UserStackAssociation[];
const UserStackAssociationList = /*@__PURE__*/ __L.at(__c1, 5);
export interface BatchAssociateUserStackRequest {
  UserStackAssociations?: UserStackAssociation[];
}
const BatchAssociateUserStackRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<BatchAssociateUserStackRequest>;
export type UserStackAssociationErrorCode =
  | "STACK_NOT_FOUND"
  | "USER_NAME_NOT_FOUND"
  | "DIRECTORY_NOT_FOUND"
  | "INTERNAL_ERROR"
  | (string & {});
const UserStackAssociationErrorCode = S.String;

export interface UserStackAssociationError {
  UserStackAssociation?: UserStackAssociation;
  ErrorCode?: UserStackAssociationErrorCode;
  ErrorMessage?: string;
}
const UserStackAssociationError = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<UserStackAssociationError>;
export type UserStackAssociationErrorList = UserStackAssociationError[];
const UserStackAssociationErrorList = /*@__PURE__*/ __L.at(__c2, 0);
export interface BatchAssociateUserStackResult {
  errors?: (UserStackAssociationError & {
    UserStackAssociation: UserStackAssociation & {
      StackName: string;
      UserName: Username;
      AuthenticationType: AuthenticationType;
    };
  })[];
}
const BatchAssociateUserStackResult = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<BatchAssociateUserStackResult>;
export interface BatchDisassociateUserStackRequest {
  UserStackAssociations?: UserStackAssociation[];
}
const BatchDisassociateUserStackRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<BatchDisassociateUserStackRequest>;
export interface BatchDisassociateUserStackResult {
  errors?: (UserStackAssociationError & {
    UserStackAssociation: UserStackAssociation & {
      StackName: string;
      UserName: Username;
      AuthenticationType: AuthenticationType;
    };
  })[];
}
const BatchDisassociateUserStackResult =
  BatchAssociateUserStackResult as any as S.Schema<BatchDisassociateUserStackResult>;
export type RegionName = string;
export type Description = string;
export interface CopyImageRequest {
  SourceImageName?: string;
  DestinationImageName?: string;
  DestinationRegion?: string;
  DestinationImageDescription?: string;
}
const CopyImageRequest = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CopyImageRequest>;
export interface CopyImageResponse {
  DestinationImageName?: string;
}
const CopyImageResponse = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<CopyImageResponse>;
export type DisplayName = string;
export type S3Bucket = string;
export type S3Key = string;
export interface S3Location {
  S3Bucket?: string;
  S3Key?: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<S3Location>;
export interface ScriptDetails {
  ScriptS3Location?: S3Location;
  ExecutablePath?: string;
  ExecutableParameters?: string;
  TimeoutInSeconds?: number;
}
const ScriptDetails = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<ScriptDetails>;
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c2, 7);
export type PackagingType = "CUSTOM" | "APPSTREAM2" | (string & {});
const PackagingType = S.String;

export interface CreateAppBlockRequest {
  Name?: string;
  Description?: string;
  DisplayName?: string;
  SourceS3Location?: S3Location;
  SetupScriptDetails?: ScriptDetails;
  Tags?: { [key: string]: string | undefined };
  PostSetupScriptDetails?: ScriptDetails;
  PackagingType?: PackagingType;
}
const CreateAppBlockRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateAppBlockRequest>;
export type AppBlockState = "INACTIVE" | "ACTIVE" | (string & {});
const AppBlockState = S.String;

export interface ErrorDetails {
  ErrorCode?: string;
  ErrorMessage?: string;
}
const ErrorDetails = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<ErrorDetails>;
export type ErrorDetailsList = ErrorDetails[];
const ErrorDetailsList = /*@__PURE__*/ __L.at(__c3, 2);
export interface AppBlock {
  Name?: string;
  Arn?: string;
  Description?: string;
  DisplayName?: string;
  SourceS3Location?: S3Location;
  SetupScriptDetails?: ScriptDetails;
  CreatedTime?: Date;
  PostSetupScriptDetails?: ScriptDetails;
  PackagingType?: PackagingType;
  State?: AppBlockState;
  AppBlockErrors?: ErrorDetails[];
}
const AppBlock = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<AppBlock>;
export interface CreateAppBlockResult {
  AppBlock?: AppBlock & {
    Name: string;
    Arn: Arn;
    SourceS3Location: S3Location & { S3Bucket: S3Bucket };
    SetupScriptDetails: ScriptDetails & {
      ScriptS3Location: S3Location & { S3Bucket: S3Bucket };
      ExecutablePath: string;
      TimeoutInSeconds: number;
    };
    PostSetupScriptDetails: ScriptDetails & {
      ScriptS3Location: S3Location & { S3Bucket: S3Bucket };
      ExecutablePath: string;
      TimeoutInSeconds: number;
    };
  };
}
const CreateAppBlockResult = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<CreateAppBlockResult>;
export type AppBlockBuilderPlatformType = "WINDOWS_SERVER_2019" | (string & {});
const AppBlockBuilderPlatformType = S.String;

export type SubnetIdList = string[];
const SubnetIdList = StringList as any as S.Schema<SubnetIdList>;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = StringList as any as S.Schema<SecurityGroupIdList>;
export interface VpcConfig {
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
}
const VpcConfig = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<VpcConfig>;
export type AccessEndpointType = "STREAMING" | (string & {});
const AccessEndpointType = S.String;

export interface AccessEndpoint {
  EndpointType?: AccessEndpointType;
  VpceId?: string;
}
const AccessEndpoint = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<AccessEndpoint>;
export type AccessEndpointList = AccessEndpoint[];
const AccessEndpointList = /*@__PURE__*/ __L.at(__c3, 7);
export interface CreateAppBlockBuilderRequest {
  Name?: string;
  Description?: string;
  DisplayName?: string;
  Tags?: { [key: string]: string | undefined };
  Platform?: AppBlockBuilderPlatformType;
  InstanceType?: string;
  VpcConfig?: VpcConfig;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  AccessEndpoints?: AccessEndpoint[];
  DisableIMDSV1?: boolean;
}
const CreateAppBlockBuilderRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateAppBlockBuilderRequest>;
export type AppBlockBuilderState = "STARTING" | "RUNNING" | "STOPPING" | "STOPPED" | (string & {});
const AppBlockBuilderState = S.String;

export type FleetErrorCode =
  | "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"
  | "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"
  | "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"
  | "NETWORK_INTERFACE_LIMIT_EXCEEDED"
  | "INTERNAL_SERVICE_ERROR"
  | "IAM_SERVICE_ROLE_IS_MISSING"
  | "MACHINE_ROLE_IS_MISSING"
  | "STS_DISABLED_IN_REGION"
  | "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES"
  | "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION"
  | "SUBNET_NOT_FOUND"
  | "IMAGE_NOT_FOUND"
  | "INVALID_SUBNET_CONFIGURATION"
  | "SECURITY_GROUPS_NOT_FOUND"
  | "IGW_NOT_ATTACHED"
  | "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION"
  | "FLEET_STOPPED"
  | "FLEET_INSTANCE_PROVISIONING_FAILURE"
  | "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND"
  | "DOMAIN_JOIN_ERROR_ACCESS_DENIED"
  | "DOMAIN_JOIN_ERROR_LOGON_FAILURE"
  | "DOMAIN_JOIN_ERROR_INVALID_PARAMETER"
  | "DOMAIN_JOIN_ERROR_MORE_DATA"
  | "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN"
  | "DOMAIN_JOIN_ERROR_NOT_SUPPORTED"
  | "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME"
  | "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED"
  | "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED"
  | "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED"
  | "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR"
  | "VALIDATION_ERROR"
  | (string & {});
const FleetErrorCode = S.String;

export interface ResourceError {
  ErrorCode?: FleetErrorCode;
  ErrorMessage?: string;
  ErrorTimestamp?: Date;
}
const ResourceError = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<ResourceError>;
export type ResourceErrors = ResourceError[];
const ResourceErrors = /*@__PURE__*/ __L.at(__c4, 2);
export type AppBlockBuilderStateChangeReasonCode = "INTERNAL_ERROR" | (string & {});
const AppBlockBuilderStateChangeReasonCode = S.String;

export interface AppBlockBuilderStateChangeReason {
  Code?: AppBlockBuilderStateChangeReasonCode;
  Message?: string;
}
const AppBlockBuilderStateChangeReason = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<AppBlockBuilderStateChangeReason>;
export interface AppBlockBuilder {
  Arn?: string;
  Name?: string;
  DisplayName?: string;
  Description?: string;
  Platform?: AppBlockBuilderPlatformType;
  InstanceType?: string;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  VpcConfig?: VpcConfig;
  State?: AppBlockBuilderState;
  CreatedTime?: Date;
  AppBlockBuilderErrors?: ResourceError[];
  StateChangeReason?: AppBlockBuilderStateChangeReason;
  AccessEndpoints?: AccessEndpoint[];
  DisableIMDSV1?: boolean;
}
const AppBlockBuilder = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<AppBlockBuilder>;
export interface CreateAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder & {
    Arn: Arn;
    Name: string;
    Platform: AppBlockBuilderPlatformType;
    InstanceType: string;
    VpcConfig: VpcConfig;
    State: AppBlockBuilderState;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const CreateAppBlockBuilderResult = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateAppBlockBuilderResult>;
export interface CreateAppBlockBuilderStreamingURLRequest {
  AppBlockBuilderName?: string;
  Validity?: number;
}
const CreateAppBlockBuilderStreamingURLRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateAppBlockBuilderStreamingURLRequest>;
export interface CreateAppBlockBuilderStreamingURLResult {
  StreamingURL?: string;
  Expires?: Date;
}
const CreateAppBlockBuilderStreamingURLResult = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateAppBlockBuilderStreamingURLResult>;
export type PlatformType =
  | "WINDOWS"
  | "WINDOWS_SERVER_2016"
  | "WINDOWS_SERVER_2019"
  | "WINDOWS_SERVER_2022"
  | "WINDOWS_SERVER_2025"
  | "AMAZON_LINUX2"
  | "RHEL8"
  | "ROCKY_LINUX8"
  | "UBUNTU_PRO_2404"
  | (string & {});
const PlatformType = S.String;

export type Platforms = PlatformType[];
const Platforms = /*@__PURE__*/ __L.at(__c5, 0);
export interface CreateApplicationRequest {
  Name?: string;
  DisplayName?: string;
  Description?: string;
  IconS3Location?: S3Location;
  LaunchPath?: string;
  WorkingDirectory?: string;
  LaunchParameters?: string;
  Platforms?: PlatformType[];
  InstanceFamilies?: string[];
  AppBlockArn?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateApplicationRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateApplicationRequest>;
export type Metadata = { [key: string]: string | undefined };
const Metadata = Tags as any as S.Schema<Metadata>;
export interface Application {
  Name?: string;
  DisplayName?: string;
  IconURL?: string;
  LaunchPath?: string;
  LaunchParameters?: string;
  Enabled?: boolean;
  Metadata?: { [key: string]: string | undefined };
  WorkingDirectory?: string;
  Description?: string;
  Arn?: string;
  AppBlockArn?: string;
  IconS3Location?: S3Location;
  Platforms?: PlatformType[];
  InstanceFamilies?: string[];
  CreatedTime?: Date;
}
const Application = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<Application>;
export interface CreateApplicationResult {
  Application?: Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } };
}
const CreateApplicationResult = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateApplicationResult>;
export type DirectoryName = string;
export type OrganizationalUnitDistinguishedName = string;
export type OrganizationalUnitDistinguishedNamesList = string[];
const OrganizationalUnitDistinguishedNamesList =
  StringList as any as S.Schema<OrganizationalUnitDistinguishedNamesList>;
export type AccountName = string | redacted.Redacted<string>;
export type AccountPassword = string | redacted.Redacted<string>;
export interface ServiceAccountCredentials {
  AccountName?: string | redacted.Redacted<string>;
  AccountPassword?: string | redacted.Redacted<string>;
}
const ServiceAccountCredentials = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ServiceAccountCredentials>;
export type CertificateBasedAuthStatus =
  | "DISABLED"
  | "ENABLED"
  | "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK"
  | (string & {});
const CertificateBasedAuthStatus = S.String;

export interface CertificateBasedAuthProperties {
  Status?: CertificateBasedAuthStatus;
  CertificateAuthorityArn?: string;
}
const CertificateBasedAuthProperties = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<CertificateBasedAuthProperties>;
export interface CreateDirectoryConfigRequest {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedNames?: string[];
  ServiceAccountCredentials?: ServiceAccountCredentials;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}
const CreateDirectoryConfigRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateDirectoryConfigRequest>;
export interface DirectoryConfig {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedNames?: string[];
  ServiceAccountCredentials?: ServiceAccountCredentials;
  CreatedTime?: Date;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}
const DirectoryConfig = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<DirectoryConfig>;
export interface CreateDirectoryConfigResult {
  DirectoryConfig?: DirectoryConfig & {
    DirectoryName: DirectoryName;
    ServiceAccountCredentials: ServiceAccountCredentials & {
      AccountName: AccountName;
      AccountPassword: AccountPassword;
    };
  };
}
const CreateDirectoryConfigResult = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<CreateDirectoryConfigResult>;
export type AppVisibility = "ALL" | "ASSOCIATED" | (string & {});
const AppVisibility = S.String;

export interface EntitlementAttribute {
  Name?: string;
  Value?: string;
}
const EntitlementAttribute = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<EntitlementAttribute>;
export type EntitlementAttributeList = EntitlementAttribute[];
const EntitlementAttributeList = /*@__PURE__*/ __L.at(__c6, 2);
export interface CreateEntitlementRequest {
  Name?: string;
  StackName?: string;
  Description?: string;
  AppVisibility?: AppVisibility;
  Attributes?: EntitlementAttribute[];
}
const CreateEntitlementRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<CreateEntitlementRequest>;
export interface Entitlement {
  Name?: string;
  StackName?: string;
  Description?: string;
  AppVisibility?: AppVisibility;
  Attributes?: EntitlementAttribute[];
  CreatedTime?: Date;
  LastModifiedTime?: Date;
}
const Entitlement = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<Entitlement>;
export interface CreateEntitlementResult {
  Entitlement?: Entitlement & {
    Name: Name;
    StackName: Name;
    AppVisibility: AppVisibility;
    Attributes: (EntitlementAttribute & { Name: string; Value: string })[];
  };
}
const CreateEntitlementResult = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateEntitlementResult>;
export type AmiName = string;
export interface CreateExportImageTaskRequest {
  ImageName?: string;
  AmiName?: string;
  IamRoleArn?: string;
  TagSpecifications?: { [key: string]: string | undefined };
  AmiDescription?: string;
}
const CreateExportImageTaskRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateExportImageTaskRequest>;
export type UUID = string;
export type ExportImageTaskState =
  | "EXPORTING"
  | "COMPLETED"
  | "FAILED"
  | "TIMED_OUT"
  | (string & {});
const ExportImageTaskState = S.String;

export type PhotonAmiId = string;
export interface ExportImageTask {
  TaskId?: string;
  ImageArn?: string;
  AmiName?: string;
  CreatedDate?: Date;
  AmiDescription?: string;
  State?: ExportImageTaskState;
  AmiId?: string;
  TagSpecifications?: { [key: string]: string | undefined };
  ErrorDetails?: ErrorDetails[];
}
const ExportImageTask = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<ExportImageTask>;
export interface CreateExportImageTaskResult {
  ExportImageTask?: ExportImageTask & {
    TaskId: UUID;
    ImageArn: Arn;
    AmiName: AmiName;
    CreatedDate: Date;
  };
}
const CreateExportImageTaskResult = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<CreateExportImageTaskResult>;
export type FleetType = "ALWAYS_ON" | "ON_DEMAND" | "ELASTIC" | (string & {});
const FleetType = S.String;

export interface ComputeCapacity {
  DesiredInstances?: number;
  DesiredSessions?: number;
}
const ComputeCapacity = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<ComputeCapacity>;
export interface DomainJoinInfo {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedName?: string;
}
const DomainJoinInfo = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<DomainJoinInfo>;
export type StreamView = "APP" | "DESKTOP" | (string & {});
const StreamView = S.String;

export type UsbDeviceFilterString = string;
export type UsbDeviceFilterStrings = string[];
const UsbDeviceFilterStrings = StringList as any as S.Schema<UsbDeviceFilterStrings>;
export interface VolumeConfig {
  VolumeSizeInGb?: number;
}
const VolumeConfig = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<VolumeConfig>;
export interface CreateFleetRequest {
  Name?: string;
  ImageName?: string;
  ImageArn?: string;
  InstanceType?: string;
  FleetType?: FleetType;
  ComputeCapacity?: ComputeCapacity;
  VpcConfig?: VpcConfig;
  MaxUserDurationInSeconds?: number;
  DisconnectTimeoutInSeconds?: number;
  Description?: string;
  DisplayName?: string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  Tags?: { [key: string]: string | undefined };
  IdleDisconnectTimeoutInSeconds?: number;
  IamRoleArn?: string;
  StreamView?: StreamView;
  Platform?: PlatformType;
  MaxConcurrentSessions?: number;
  UsbDeviceFilterStrings?: string[];
  SessionScriptS3Location?: S3Location;
  MaxSessionsPerInstance?: number;
  RootVolumeConfig?: VolumeConfig;
  DisableIMDSV1?: boolean;
}
const CreateFleetRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<CreateFleetRequest>;
export interface ComputeCapacityStatus {
  Desired?: number;
  Running?: number;
  InUse?: number;
  Available?: number;
  DesiredUserSessions?: number;
  AvailableUserSessions?: number;
  ActiveUserSessions?: number;
  ActualUserSessions?: number;
  Draining?: number;
  DrainModeActiveUserSessions?: number;
  DrainModeUnusedUserSessions?: number;
}
const ComputeCapacityStatus = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ComputeCapacityStatus>;
export type FleetState = "STARTING" | "RUNNING" | "STOPPING" | "STOPPED" | (string & {});
const FleetState = S.String;

export interface FleetError {
  ErrorCode?: FleetErrorCode;
  ErrorMessage?: string;
}
const FleetError = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<FleetError>;
export type FleetErrors = FleetError[];
const FleetErrors = /*@__PURE__*/ __L.at(__c7, 7);
export interface Fleet {
  Arn?: string;
  Name?: string;
  DisplayName?: string;
  Description?: string;
  ImageName?: string;
  ImageArn?: string;
  InstanceType?: string;
  FleetType?: FleetType;
  ComputeCapacityStatus?: ComputeCapacityStatus;
  MaxUserDurationInSeconds?: number;
  DisconnectTimeoutInSeconds?: number;
  State?: FleetState;
  VpcConfig?: VpcConfig;
  CreatedTime?: Date;
  FleetErrors?: FleetError[];
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  IdleDisconnectTimeoutInSeconds?: number;
  IamRoleArn?: string;
  StreamView?: StreamView;
  Platform?: PlatformType;
  MaxConcurrentSessions?: number;
  UsbDeviceFilterStrings?: string[];
  SessionScriptS3Location?: S3Location;
  MaxSessionsPerInstance?: number;
  RootVolumeConfig?: VolumeConfig;
  DisableIMDSV1?: boolean;
}
const Fleet = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<Fleet>;
export interface CreateFleetResult {
  Fleet?: Fleet & {
    Arn: Arn;
    Name: string;
    InstanceType: string;
    ComputeCapacityStatus: ComputeCapacityStatus & { Desired: number };
    State: FleetState;
    SessionScriptS3Location: S3Location & { S3Bucket: S3Bucket };
  };
}
const CreateFleetResult = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<CreateFleetResult>;
export type AppstreamAgentVersion = string;
export interface CreateImageBuilderRequest {
  Name?: string;
  ImageName?: string;
  ImageArn?: string;
  InstanceType?: string;
  Description?: string;
  DisplayName?: string;
  VpcConfig?: VpcConfig;
  IamRoleArn?: string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  AppstreamAgentVersion?: string;
  Tags?: { [key: string]: string | undefined };
  AccessEndpoints?: AccessEndpoint[];
  RootVolumeConfig?: VolumeConfig;
  SoftwaresToInstall?: string[];
  SoftwaresToUninstall?: string[];
  DisableIMDSV1?: boolean;
}
const CreateImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<CreateImageBuilderRequest>;
export type ImageBuilderState =
  | "PENDING"
  | "UPDATING_AGENT"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "REBOOTING"
  | "SNAPSHOTTING"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "PENDING_QUALIFICATION"
  | "PENDING_SYNCING_APPS"
  | "SYNCING_APPS"
  | "PENDING_IMAGE_IMPORT"
  | (string & {});
const ImageBuilderState = S.String;

export type ImageBuilderStateChangeReasonCode =
  | "INTERNAL_ERROR"
  | "IMAGE_UNAVAILABLE"
  | (string & {});
const ImageBuilderStateChangeReasonCode = S.String;

export interface ImageBuilderStateChangeReason {
  Code?: ImageBuilderStateChangeReasonCode;
  Message?: string;
}
const ImageBuilderStateChangeReason = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<ImageBuilderStateChangeReason>;
export interface NetworkAccessConfiguration {
  EniPrivateIpAddress?: string;
  EniIpv6Addresses?: string[];
  EniId?: string;
}
const NetworkAccessConfiguration = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<NetworkAccessConfiguration>;
export type LatestAppstreamAgentVersion = "TRUE" | "FALSE" | (string & {});
const LatestAppstreamAgentVersion = S.String;

export interface ImageBuilder {
  Name?: string;
  Arn?: string;
  ImageArn?: string;
  Description?: string;
  DisplayName?: string;
  VpcConfig?: VpcConfig;
  InstanceType?: string;
  Platform?: PlatformType;
  IamRoleArn?: string;
  State?: ImageBuilderState;
  StateChangeReason?: ImageBuilderStateChangeReason;
  CreatedTime?: Date;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
  ImageBuilderErrors?: ResourceError[];
  AppstreamAgentVersion?: string;
  AccessEndpoints?: AccessEndpoint[];
  RootVolumeConfig?: VolumeConfig;
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion;
  DisableIMDSV1?: boolean;
}
const ImageBuilder = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<ImageBuilder>;
export interface CreateImageBuilderResult {
  ImageBuilder?: ImageBuilder & {
    Name: string;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const CreateImageBuilderResult = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<CreateImageBuilderResult>;
export interface CreateImageBuilderStreamingURLRequest {
  Name?: string;
  Validity?: number;
}
const CreateImageBuilderStreamingURLRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<CreateImageBuilderStreamingURLRequest>;
export interface CreateImageBuilderStreamingURLResult {
  StreamingURL?: string;
  Expires?: Date;
}
const CreateImageBuilderStreamingURLResult =
  CreateAppBlockBuilderStreamingURLResult as any as S.Schema<CreateImageBuilderStreamingURLResult>;
export type WorkspaceImageId = string;
export type ImageImportDescription = string;
export type ImageImportDisplayName = string;
export type InstanceType = string;
export interface RuntimeValidationConfig {
  IntendedInstanceType?: string;
}
const RuntimeValidationConfig = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<RuntimeValidationConfig>;
export type AgentSoftwareVersion = "CURRENT_LATEST" | "ALWAYS_LATEST" | (string & {});
const AgentSoftwareVersion = S.String;

export type AppName = string;
export type AppDisplayName = string;
export type FilePath = string | redacted.Redacted<string>;
export type LaunchParameters = string | redacted.Redacted<string>;
export interface ApplicationConfig {
  Name?: string;
  DisplayName?: string;
  AbsoluteAppPath?: string | redacted.Redacted<string>;
  AbsoluteIconPath?: string | redacted.Redacted<string>;
  AbsoluteManifestPath?: string | redacted.Redacted<string>;
  WorkingDirectory?: string | redacted.Redacted<string>;
  LaunchParameters?: string | redacted.Redacted<string>;
}
const ApplicationConfig = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<ApplicationConfig>;
export type AppCatalogConfig = ApplicationConfig[];
const AppCatalogConfig = /*@__PURE__*/ __L.at(__c9, 2);
export interface CreateImportedImageRequest {
  Name?: string;
  SourceAmiId?: string;
  WorkspaceImageId?: string;
  IamRoleArn?: string;
  Description?: string;
  DisplayName?: string;
  Tags?: { [key: string]: string | undefined };
  RuntimeValidationConfig?: RuntimeValidationConfig;
  AgentSoftwareVersion?: AgentSoftwareVersion;
  AppCatalogConfig?: ApplicationConfig[];
  DryRun?: boolean;
}
const CreateImportedImageRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<CreateImportedImageRequest>;
export type ImageState =
  | "PENDING"
  | "AVAILABLE"
  | "FAILED"
  | "COPYING"
  | "DELETING"
  | "CREATING"
  | "IMPORTING"
  | "VALIDATING"
  | (string & {});
const ImageState = S.String;

export type VisibilityType = "PUBLIC" | "PRIVATE" | "SHARED" | (string & {});
const VisibilityType = S.String;

export type ImageStateChangeReasonCode =
  | "INTERNAL_ERROR"
  | "IMAGE_BUILDER_NOT_AVAILABLE"
  | "IMAGE_COPY_FAILURE"
  | "IMAGE_UPDATE_FAILURE"
  | "IMAGE_IMPORT_FAILURE"
  | (string & {});
const ImageStateChangeReasonCode = S.String;

export interface ImageStateChangeReason {
  Code?: ImageStateChangeReasonCode;
  Message?: string;
}
const ImageStateChangeReason = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<ImageStateChangeReason>;
export type Applications = Application[];
const Applications = /*@__PURE__*/ __L.at(__c9, 5);
export interface ImagePermissions {
  allowFleet?: boolean;
  allowImageBuilder?: boolean;
}
const ImagePermissions = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<ImagePermissions>;
export type DynamicAppProvidersEnabled = "ENABLED" | "DISABLED" | (string & {});
const DynamicAppProvidersEnabled = S.String;

export type ImageSharedWithOthers = "TRUE" | "FALSE" | (string & {});
const ImageSharedWithOthers = S.String;

export type ImageType = "CUSTOM" | "NATIVE" | "BYOL" | (string & {});
const ImageType = S.String;

export type NvidiaGridDriverVersion = string;
export interface ImageSoftwareMetadata {
  nvidiaGridDriverVersion?: string;
}
const ImageSoftwareMetadata = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<ImageSoftwareMetadata>;
export interface Image {
  Name?: string;
  Arn?: string;
  BaseImageArn?: string;
  DisplayName?: string;
  State?: ImageState;
  Visibility?: VisibilityType;
  ImageBuilderSupported?: boolean;
  ImageBuilderName?: string;
  Platform?: PlatformType;
  Description?: string;
  StateChangeReason?: ImageStateChangeReason;
  Applications?: Application[];
  CreatedTime?: Date;
  PublicBaseImageReleasedDate?: Date;
  AppstreamAgentVersion?: string;
  ImagePermissions?: ImagePermissions;
  ImageErrors?: ResourceError[];
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion;
  SupportedInstanceFamilies?: string[];
  DynamicAppProvidersEnabled?: DynamicAppProvidersEnabled;
  ImageSharedWithOthers?: ImageSharedWithOthers;
  ManagedSoftwareIncluded?: boolean;
  ImageType?: ImageType;
  ImageSoftwareMetadata?: ImageSoftwareMetadata;
}
const Image = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<Image>;
export interface CreateImportedImageResult {
  Image?: Image & {
    Name: string;
    Applications: (Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } })[];
  };
}
const CreateImportedImageResult = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<CreateImportedImageResult>;
export type StorageConnectorType = "HOMEFOLDERS" | "GOOGLE_DRIVE" | "ONE_DRIVE" | (string & {});
const StorageConnectorType = S.String;

export type ResourceIdentifier = string;
export type Domain = string;
export type DomainList = string[];
const DomainList = StringList as any as S.Schema<DomainList>;
export interface StorageConnector {
  ConnectorType?: StorageConnectorType;
  ResourceIdentifier?: string;
  Domains?: string[];
  DomainsRequireAdminConsent?: string[];
}
const StorageConnector = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<StorageConnector>;
export type StorageConnectorList = StorageConnector[];
const StorageConnectorList = /*@__PURE__*/ __L.at(__c10, 3);
export type RedirectURL = string;
export type FeedbackURL = string;
export type Action =
  | "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
  | "CLIPBOARD_COPY_TO_LOCAL_DEVICE"
  | "FILE_UPLOAD"
  | "FILE_DOWNLOAD"
  | "PRINTING_TO_LOCAL_DEVICE"
  | "DOMAIN_PASSWORD_SIGNIN"
  | "DOMAIN_SMART_CARD_SIGNIN"
  | "AUTO_TIME_ZONE_REDIRECTION"
  | (string & {});
const Action = S.String;

export type Permission = "ENABLED" | "DISABLED" | (string & {});
const Permission = S.String;

export interface UserSetting {
  Action?: Action;
  Permission?: Permission;
  MaximumLength?: number;
}
const UserSetting = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<UserSetting>;
export type UserSettingList = UserSetting[];
const UserSettingList = /*@__PURE__*/ __L.at(__c10, 5);
export type SettingsGroup = string;
export interface ApplicationSettings {
  Enabled?: boolean;
  SettingsGroup?: string;
}
const ApplicationSettings = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<ApplicationSettings>;
export type EmbedHostDomain = string;
export type EmbedHostDomains = string[];
const EmbedHostDomains = StringList as any as S.Schema<EmbedHostDomains>;
export type PreferredProtocol = "TCP" | "UDP" | (string & {});
const PreferredProtocol = S.String;

export interface StreamingExperienceSettings {
  PreferredProtocol?: PreferredProtocol;
}
const StreamingExperienceSettings = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<StreamingExperienceSettings>;
export type UrlPattern = string;
export type UrlPatternList = string[];
const UrlPatternList = StringList as any as S.Schema<UrlPatternList>;
export interface UrlRedirectionConfig {
  Enabled?: boolean;
  AllowedUrls?: string[];
  DeniedUrls?: string[];
}
const UrlRedirectionConfig = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<UrlRedirectionConfig>;
export interface ContentRedirection {
  HostToClient?: UrlRedirectionConfig;
}
const ContentRedirection = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<ContentRedirection>;
export type AgentAction =
  | "COMPUTER_VISION"
  | "COMPUTER_INPUT"
  | "FORWARD_MCP_TOOLS"
  | (string & {});
const AgentAction = S.String;

export interface AgentAccessSetting {
  AgentAction?: AgentAction;
  Permission?: Permission;
}
const AgentAccessSetting = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<AgentAccessSetting>;
export type AgentAccessSettingList = AgentAccessSetting[];
const AgentAccessSettingList = /*@__PURE__*/ __L.at(__c11, 3);
export type S3BucketArn = string;
export type ScreenResolution = "W_1280xH_720" | (string & {});
const ScreenResolution = S.String;

export type ScreenImageFormat = "PNG" | "JPEG" | (string & {});
const ScreenImageFormat = S.String;

export type UserControlMode = "VIEW_ONLY" | "VIEW_STOP" | "DISABLED" | (string & {});
const UserControlMode = S.String;

export interface AgentAccessConfig {
  Settings?: AgentAccessSetting[];
  S3BucketArn?: string;
  ScreenshotsUploadEnabled?: boolean;
  ScreenResolution?: ScreenResolution;
  ScreenImageFormat?: ScreenImageFormat;
  UserControlMode?: UserControlMode;
}
const AgentAccessConfig = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<AgentAccessConfig>;
export interface CreateStackRequest {
  Name?: string;
  Description?: string;
  DisplayName?: string;
  StorageConnectors?: StorageConnector[];
  RedirectURL?: string;
  FeedbackURL?: string;
  UserSettings?: UserSetting[];
  ApplicationSettings?: ApplicationSettings;
  Tags?: { [key: string]: string | undefined };
  AccessEndpoints?: AccessEndpoint[];
  EmbedHostDomains?: string[];
  StreamingExperienceSettings?: StreamingExperienceSettings;
  ContentRedirection?: ContentRedirection;
  AgentAccessConfig?: AgentAccessConfig;
}
const CreateStackRequest = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<CreateStackRequest>;
export type StackErrorCode = "STORAGE_CONNECTOR_ERROR" | "INTERNAL_SERVICE_ERROR" | (string & {});
export interface StackError {
  ErrorCode?: StackErrorCode;
  ErrorMessage?: string;
}
export type StackErrors = StackError[];
const StackErrors = FleetErrors as any as S.Schema<StackErrors>;
export interface ApplicationSettingsResponse {
  Enabled?: boolean;
  SettingsGroup?: string;
  S3BucketName?: string;
}
const ApplicationSettingsResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ApplicationSettingsResponse>;
export interface Stack {
  Arn?: string;
  Name?: string;
  Description?: string;
  DisplayName?: string;
  CreatedTime?: Date;
  StorageConnectors?: StorageConnector[];
  RedirectURL?: string;
  FeedbackURL?: string;
  StackErrors?: StackError[];
  UserSettings?: UserSetting[];
  ApplicationSettings?: ApplicationSettingsResponse;
  AccessEndpoints?: AccessEndpoint[];
  EmbedHostDomains?: string[];
  StreamingExperienceSettings?: StreamingExperienceSettings;
  ContentRedirection?: ContentRedirection;
  AgentAccessConfig?: AgentAccessConfig;
}
const Stack = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<Stack>;
export interface CreateStackResult {
  Stack?: Stack & {
    Name: string;
    StorageConnectors: (StorageConnector & { ConnectorType: StorageConnectorType })[];
    UserSettings: (UserSetting & { Action: Action; Permission: Permission })[];
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
    ContentRedirection: ContentRedirection & {
      HostToClient: UrlRedirectionConfig & { Enabled: boolean };
    };
    AgentAccessConfig: AgentAccessConfig & {
      Settings: (AgentAccessSetting & { AgentAction: AgentAction; Permission: Permission })[];
      ScreenResolution: ScreenResolution;
      ScreenImageFormat: ScreenImageFormat;
    };
  };
}
const CreateStackResult = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<CreateStackResult>;
export type StreamingUrlUserId = string;
export interface CreateStreamingURLRequest {
  StackName?: string;
  FleetName?: string;
  UserId?: string;
  ApplicationId?: string;
  Validity?: number;
  SessionContext?: string;
}
const CreateStreamingURLRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<CreateStreamingURLRequest>;
export interface CreateStreamingURLResult {
  StreamingURL?: string;
  Expires?: Date;
}
const CreateStreamingURLResult = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<CreateStreamingURLResult>;
export type ThemeFooterLinkDisplayName = string;
export type ThemeFooterLinkURL = string;
export interface ThemeFooterLink {
  DisplayName?: string;
  FooterLinkURL?: string;
}
const ThemeFooterLink = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<ThemeFooterLink>;
export type ThemeFooterLinks = ThemeFooterLink[];
const ThemeFooterLinks = /*@__PURE__*/ __L.at(__c12, 4);
export type ThemeTitleText = string;
export type ThemeStyling = "LIGHT_BLUE" | "BLUE" | "PINK" | "RED" | (string & {});
const ThemeStyling = S.String;

export interface CreateThemeForStackRequest {
  StackName?: string;
  FooterLinks?: ThemeFooterLink[];
  TitleText?: string;
  ThemeStyling?: ThemeStyling;
  OrganizationLogoS3Location?: S3Location;
  FaviconS3Location?: S3Location;
}
const CreateThemeForStackRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<CreateThemeForStackRequest>;
export type ThemeState = "ENABLED" | "DISABLED" | (string & {});
const ThemeState = S.String;

export interface Theme {
  StackName?: string;
  State?: ThemeState;
  ThemeTitleText?: string;
  ThemeStyling?: ThemeStyling;
  ThemeFooterLinks?: ThemeFooterLink[];
  ThemeOrganizationLogoURL?: string;
  ThemeFaviconURL?: string;
  CreatedTime?: Date;
}
const Theme = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<Theme>;
export interface CreateThemeForStackResult {
  Theme?: Theme;
}
const CreateThemeForStackResult = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<CreateThemeForStackResult>;
export interface CreateUpdatedImageRequest {
  existingImageName?: string;
  newImageName?: string;
  newImageDescription?: string;
  newImageDisplayName?: string;
  newImageTags?: { [key: string]: string | undefined };
  dryRun?: boolean;
}
const CreateUpdatedImageRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<CreateUpdatedImageRequest>;
export interface CreateUpdatedImageResult {
  image?: Image & {
    Name: string;
    Applications: (Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } })[];
  };
  canUpdateImage?: boolean;
}
const CreateUpdatedImageResult = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<CreateUpdatedImageResult>;
export interface CreateUsageReportSubscriptionRequest {}
const CreateUsageReportSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<CreateUsageReportSubscriptionRequest>;
export type UsageReportSchedule = "DAILY" | (string & {});
const UsageReportSchedule = S.String;

export interface CreateUsageReportSubscriptionResult {
  S3BucketName?: string;
  Schedule?: UsageReportSchedule;
}
const CreateUsageReportSubscriptionResult = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<CreateUsageReportSubscriptionResult>;
export type MessageAction = "SUPPRESS" | "RESEND" | (string & {});
const MessageAction = S.String;

export type UserAttributeValue = string | redacted.Redacted<string>;
export interface CreateUserRequest {
  UserName?: string | redacted.Redacted<string>;
  MessageAction?: MessageAction;
  FirstName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  AuthenticationType?: AuthenticationType;
}
const CreateUserRequest = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<CreateUserRequest>;
export interface CreateUserResult {}
const CreateUserResult = AssociateFleetResult as any as S.Schema<CreateUserResult>;
export interface DeleteAppBlockRequest {
  Name?: string;
}
const DeleteAppBlockRequest = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<DeleteAppBlockRequest>;
export interface DeleteAppBlockResult {}
const DeleteAppBlockResult = AssociateFleetResult as any as S.Schema<DeleteAppBlockResult>;
export interface DeleteAppBlockBuilderRequest {
  Name?: string;
}
const DeleteAppBlockBuilderRequest = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<DeleteAppBlockBuilderRequest>;
export interface DeleteAppBlockBuilderResult {}
const DeleteAppBlockBuilderResult =
  AssociateFleetResult as any as S.Schema<DeleteAppBlockBuilderResult>;
export interface DeleteApplicationRequest {
  Name?: string;
}
const DeleteApplicationRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<DeleteApplicationRequest>;
export interface DeleteApplicationResult {}
const DeleteApplicationResult = AssociateFleetResult as any as S.Schema<DeleteApplicationResult>;
export interface DeleteDirectoryConfigRequest {
  DirectoryName?: string;
}
const DeleteDirectoryConfigRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<DeleteDirectoryConfigRequest>;
export interface DeleteDirectoryConfigResult {}
const DeleteDirectoryConfigResult =
  AssociateFleetResult as any as S.Schema<DeleteDirectoryConfigResult>;
export interface DeleteEntitlementRequest {
  Name?: string;
  StackName?: string;
}
const DeleteEntitlementRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<DeleteEntitlementRequest>;
export interface DeleteEntitlementResult {}
const DeleteEntitlementResult = AssociateFleetResult as any as S.Schema<DeleteEntitlementResult>;
export interface DeleteFleetRequest {
  Name?: string;
}
const DeleteFleetRequest = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<DeleteFleetRequest>;
export interface DeleteFleetResult {}
const DeleteFleetResult = AssociateFleetResult as any as S.Schema<DeleteFleetResult>;
export interface DeleteImageRequest {
  Name?: string;
}
const DeleteImageRequest = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<DeleteImageRequest>;
export interface DeleteImageResult {
  Image?: Image & {
    Name: string;
    Applications: (Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } })[];
  };
}
const DeleteImageResult = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<DeleteImageResult>;
export interface DeleteImageBuilderRequest {
  Name?: string;
}
const DeleteImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<DeleteImageBuilderRequest>;
export interface DeleteImageBuilderResult {
  ImageBuilder?: ImageBuilder & {
    Name: string;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const DeleteImageBuilderResult =
  CreateImageBuilderResult as any as S.Schema<DeleteImageBuilderResult>;
export type AwsAccountId = string;
export interface DeleteImagePermissionsRequest {
  Name?: string;
  SharedAccountId?: string;
}
const DeleteImagePermissionsRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<DeleteImagePermissionsRequest>;
export interface DeleteImagePermissionsResult {}
const DeleteImagePermissionsResult =
  AssociateFleetResult as any as S.Schema<DeleteImagePermissionsResult>;
export interface DeleteStackRequest {
  Name?: string;
}
const DeleteStackRequest = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<DeleteStackRequest>;
export interface DeleteStackResult {}
const DeleteStackResult = AssociateFleetResult as any as S.Schema<DeleteStackResult>;
export interface DeleteThemeForStackRequest {
  StackName?: string;
}
const DeleteThemeForStackRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<DeleteThemeForStackRequest>;
export interface DeleteThemeForStackResult {}
const DeleteThemeForStackResult =
  AssociateFleetResult as any as S.Schema<DeleteThemeForStackResult>;
export interface DeleteUsageReportSubscriptionRequest {}
const DeleteUsageReportSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<DeleteUsageReportSubscriptionRequest>;
export interface DeleteUsageReportSubscriptionResult {}
const DeleteUsageReportSubscriptionResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<DeleteUsageReportSubscriptionResult>;
export interface DeleteUserRequest {
  UserName?: string | redacted.Redacted<string>;
  AuthenticationType?: AuthenticationType;
}
const DeleteUserRequest = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<DeleteUserRequest>;
export interface DeleteUserResult {}
const DeleteUserResult = AssociateFleetResult as any as S.Schema<DeleteUserResult>;
export interface DescribeAppBlockBuilderAppBlockAssociationsRequest {
  AppBlockArn?: string;
  AppBlockBuilderName?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeAppBlockBuilderAppBlockAssociationsRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<DescribeAppBlockBuilderAppBlockAssociationsRequest>;
export type AppBlockBuilderAppBlockAssociationsList = AppBlockBuilderAppBlockAssociation[];
const AppBlockBuilderAppBlockAssociationsList = /*@__PURE__*/ __L.at(__c15, 4);
export interface DescribeAppBlockBuilderAppBlockAssociationsResult {
  AppBlockBuilderAppBlockAssociations?: (AppBlockBuilderAppBlockAssociation & {
    AppBlockArn: Arn;
    AppBlockBuilderName: Name;
  })[];
  NextToken?: string;
}
const DescribeAppBlockBuilderAppBlockAssociationsResult = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<DescribeAppBlockBuilderAppBlockAssociationsResult>;
export interface DescribeAppBlockBuildersRequest {
  Names?: string[];
  NextToken?: string;
  MaxResults?: number;
}
const DescribeAppBlockBuildersRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DescribeAppBlockBuildersRequest>;
export type AppBlockBuilderList = AppBlockBuilder[];
const AppBlockBuilderList = /*@__PURE__*/ __L.at(__c15, 7);
export interface DescribeAppBlockBuildersResult {
  AppBlockBuilders?: (AppBlockBuilder & {
    Arn: Arn;
    Name: string;
    Platform: AppBlockBuilderPlatformType;
    InstanceType: string;
    VpcConfig: VpcConfig;
    State: AppBlockBuilderState;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  })[];
  NextToken?: string;
}
const DescribeAppBlockBuildersResult = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<DescribeAppBlockBuildersResult>;
export type ArnList = string[];
const ArnList = StringList as any as S.Schema<ArnList>;
export interface DescribeAppBlocksRequest {
  Arns?: string[];
  NextToken?: string;
  MaxResults?: number;
}
const DescribeAppBlocksRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<DescribeAppBlocksRequest>;
export type AppBlocks = AppBlock[];
const AppBlocks = /*@__PURE__*/ __L.at(__c16, 2);
export interface DescribeAppBlocksResult {
  AppBlocks?: (AppBlock & {
    Name: string;
    Arn: Arn;
    SourceS3Location: S3Location & { S3Bucket: S3Bucket };
    SetupScriptDetails: ScriptDetails & {
      ScriptS3Location: S3Location & { S3Bucket: S3Bucket };
      ExecutablePath: string;
      TimeoutInSeconds: number;
    };
    PostSetupScriptDetails: ScriptDetails & {
      ScriptS3Location: S3Location & { S3Bucket: S3Bucket };
      ExecutablePath: string;
      TimeoutInSeconds: number;
    };
  })[];
  NextToken?: string;
}
const DescribeAppBlocksResult = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DescribeAppBlocksResult>;
export interface DescribeApplicationFleetAssociationsRequest {
  FleetName?: string;
  ApplicationArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeApplicationFleetAssociationsRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<DescribeApplicationFleetAssociationsRequest>;
export type ApplicationFleetAssociationList = ApplicationFleetAssociation[];
const ApplicationFleetAssociationList = /*@__PURE__*/ __L.at(__c16, 5);
export interface DescribeApplicationFleetAssociationsResult {
  ApplicationFleetAssociations?: (ApplicationFleetAssociation & {
    FleetName: string;
    ApplicationArn: Arn;
  })[];
  NextToken?: string;
}
const DescribeApplicationFleetAssociationsResult = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<DescribeApplicationFleetAssociationsResult>;
export interface DescribeApplicationsRequest {
  Arns?: string[];
  NextToken?: string;
  MaxResults?: number;
}
const DescribeApplicationsRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<DescribeApplicationsRequest>;
export interface DescribeApplicationsResult {
  Applications?: (Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } })[];
  NextToken?: string;
}
const DescribeApplicationsResult = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<DescribeApplicationsResult>;
export interface DescribeAppLicenseUsageRequest {
  BillingPeriod?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeAppLicenseUsageRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<DescribeAppLicenseUsageRequest>;
export interface AdminAppLicenseUsageRecord {
  UserArn?: string;
  BillingPeriod?: string;
  OwnerAWSAccountId?: string;
  SubscriptionFirstUsedDate?: Date;
  SubscriptionLastUsedDate?: Date;
  LicenseType?: string;
  UserId?: string;
}
const AdminAppLicenseUsageRecord = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<AdminAppLicenseUsageRecord>;
export type AdminAppLicenseUsageList = AdminAppLicenseUsageRecord[];
const AdminAppLicenseUsageList = /*@__PURE__*/ __L.at(__c17, 3);
export interface DescribeAppLicenseUsageResult {
  AppLicenseUsages?: (AdminAppLicenseUsageRecord & {
    UserArn: string;
    BillingPeriod: string;
    OwnerAWSAccountId: AwsAccountId;
    SubscriptionFirstUsedDate: Date;
    SubscriptionLastUsedDate: Date;
    LicenseType: string;
    UserId: string;
  })[];
  NextToken?: string;
}
const DescribeAppLicenseUsageResult = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DescribeAppLicenseUsageResult>;
export type DirectoryNameList = string[];
const DirectoryNameList = StringList as any as S.Schema<DirectoryNameList>;
export interface DescribeDirectoryConfigsRequest {
  DirectoryNames?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const DescribeDirectoryConfigsRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<DescribeDirectoryConfigsRequest>;
export type DirectoryConfigList = DirectoryConfig[];
const DirectoryConfigList = /*@__PURE__*/ __L.at(__c17, 6);
export interface DescribeDirectoryConfigsResult {
  DirectoryConfigs?: (DirectoryConfig & {
    DirectoryName: DirectoryName;
    ServiceAccountCredentials: ServiceAccountCredentials & {
      AccountName: AccountName;
      AccountPassword: AccountPassword;
    };
  })[];
  NextToken?: string;
}
const DescribeDirectoryConfigsResult = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<DescribeDirectoryConfigsResult>;
export interface DescribeEntitlementsRequest {
  Name?: string;
  StackName?: string;
  NextToken?: string;
  MaxResults?: number;
}
const DescribeEntitlementsRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<DescribeEntitlementsRequest>;
export type EntitlementList = Entitlement[];
const EntitlementList = /*@__PURE__*/ __L.at(__c18, 1);
export interface DescribeEntitlementsResult {
  Entitlements?: (Entitlement & {
    Name: Name;
    StackName: Name;
    AppVisibility: AppVisibility;
    Attributes: (EntitlementAttribute & { Name: string; Value: string })[];
  })[];
  NextToken?: string;
}
const DescribeEntitlementsResult = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<DescribeEntitlementsResult>;
export interface DescribeFleetsRequest {
  Names?: string[];
  NextToken?: string;
}
const DescribeFleetsRequest = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<DescribeFleetsRequest>;
export type FleetList = Fleet[];
const FleetList = /*@__PURE__*/ __L.at(__c18, 4);
export interface DescribeFleetsResult {
  Fleets?: (Fleet & {
    Arn: Arn;
    Name: string;
    InstanceType: string;
    ComputeCapacityStatus: ComputeCapacityStatus & { Desired: number };
    State: FleetState;
    SessionScriptS3Location: S3Location & { S3Bucket: S3Bucket };
  })[];
  NextToken?: string;
}
const DescribeFleetsResult = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<DescribeFleetsResult>;
export interface DescribeImageBuildersRequest {
  Names?: string[];
  MaxResults?: number;
  NextToken?: string;
}
const DescribeImageBuildersRequest = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<DescribeImageBuildersRequest>;
export type ImageBuilderList = ImageBuilder[];
const ImageBuilderList = /*@__PURE__*/ __L.at(__c18, 7);
export interface DescribeImageBuildersResult {
  ImageBuilders?: (ImageBuilder & {
    Name: string;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  })[];
  NextToken?: string;
}
const DescribeImageBuildersResult = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<DescribeImageBuildersResult>;
export type MaxResults = number;
export type AwsAccountIdList = string[];
const AwsAccountIdList = StringList as any as S.Schema<AwsAccountIdList>;
export interface DescribeImagePermissionsRequest {
  Name?: string;
  MaxResults?: number;
  SharedAwsAccountIds?: string[];
  NextToken?: string;
}
const DescribeImagePermissionsRequest = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<DescribeImagePermissionsRequest>;
export interface SharedImagePermissions {
  sharedAccountId?: string;
  imagePermissions?: ImagePermissions;
}
const SharedImagePermissions = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<SharedImagePermissions>;
export type SharedImagePermissionsList = SharedImagePermissions[];
const SharedImagePermissionsList = /*@__PURE__*/ __L.at(__c19, 3);
export interface DescribeImagePermissionsResult {
  Name?: string;
  SharedImagePermissionsList?: (SharedImagePermissions & {
    sharedAccountId: AwsAccountId;
    imagePermissions: ImagePermissions;
  })[];
  NextToken?: string;
}
const DescribeImagePermissionsResult = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<DescribeImagePermissionsResult>;
export type DescribeImagesMaxResults = number;
export interface DescribeImagesRequest {
  Names?: string[];
  Arns?: string[];
  Type?: VisibilityType;
  NextToken?: string;
  MaxResults?: number;
}
const DescribeImagesRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<DescribeImagesRequest>;
export type ImageList = Image[];
const ImageList = /*@__PURE__*/ __L.at(__c19, 6);
export interface DescribeImagesResult {
  Images?: (Image & {
    Name: string;
    Applications: (Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } })[];
  })[];
  NextToken?: string;
}
const DescribeImagesResult = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<DescribeImagesResult>;
export type UserId = string;
export interface DescribeSessionsRequest {
  StackName?: string;
  FleetName?: string;
  UserId?: string;
  NextToken?: string;
  Limit?: number;
  AuthenticationType?: AuthenticationType;
  InstanceId?: string;
}
const DescribeSessionsRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<DescribeSessionsRequest>;
export type SessionState = "ACTIVE" | "PENDING" | "EXPIRED" | (string & {});
const SessionState = S.String;

export type SessionConnectionState = "CONNECTED" | "NOT_CONNECTED" | (string & {});
const SessionConnectionState = S.String;

export type InstanceDrainStatus = "ACTIVE" | "DRAINING" | "NOT_APPLICABLE" | (string & {});
const InstanceDrainStatus = S.String;

export interface Session {
  Id?: string;
  UserId?: string;
  StackName?: string;
  FleetName?: string;
  State?: SessionState;
  ConnectionState?: SessionConnectionState;
  StartTime?: Date;
  MaxExpirationTime?: Date;
  AuthenticationType?: AuthenticationType;
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
  InstanceId?: string;
  InstanceDrainStatus?: InstanceDrainStatus;
}
const Session = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<Session>;
export type SessionList = Session[];
const SessionList = /*@__PURE__*/ __L.at(__c20, 2);
export interface DescribeSessionsResult {
  Sessions?: (Session & {
    Id: string;
    UserId: UserId;
    StackName: string;
    FleetName: string;
    State: SessionState;
  })[];
  NextToken?: string;
}
const DescribeSessionsResult = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<DescribeSessionsResult>;
export interface DescribeSoftwareAssociationsRequest {
  AssociatedResource?: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeSoftwareAssociationsRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<DescribeSoftwareAssociationsRequest>;
export type SoftwareDeploymentStatus =
  | "STAGED_FOR_INSTALLATION"
  | "PENDING_INSTALLATION"
  | "INSTALLED"
  | "STAGED_FOR_UNINSTALLATION"
  | "PENDING_UNINSTALLATION"
  | "FAILED_TO_INSTALL"
  | "FAILED_TO_UNINSTALL"
  | (string & {});
const SoftwareDeploymentStatus = S.String;

export interface SoftwareAssociations {
  SoftwareName?: string;
  Status?: SoftwareDeploymentStatus;
  DeploymentError?: ErrorDetails[];
}
const SoftwareAssociations = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<SoftwareAssociations>;
export type SoftwareAssociationsList = SoftwareAssociations[];
const SoftwareAssociationsList = /*@__PURE__*/ __L.at(__c20, 6);
export interface DescribeSoftwareAssociationsResult {
  AssociatedResource?: string;
  SoftwareAssociations?: SoftwareAssociations[];
  NextToken?: string;
}
const DescribeSoftwareAssociationsResult = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<DescribeSoftwareAssociationsResult>;
export interface DescribeStacksRequest {
  Names?: string[];
  NextToken?: string;
}
const DescribeStacksRequest = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<DescribeStacksRequest>;
export type StackList = Stack[];
const StackList = /*@__PURE__*/ __L.at(__c21, 1);
export interface DescribeStacksResult {
  Stacks?: (Stack & {
    Name: string;
    StorageConnectors: (StorageConnector & { ConnectorType: StorageConnectorType })[];
    UserSettings: (UserSetting & { Action: Action; Permission: Permission })[];
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
    ContentRedirection: ContentRedirection & {
      HostToClient: UrlRedirectionConfig & { Enabled: boolean };
    };
    AgentAccessConfig: AgentAccessConfig & {
      Settings: (AgentAccessSetting & { AgentAction: AgentAction; Permission: Permission })[];
      ScreenResolution: ScreenResolution;
      ScreenImageFormat: ScreenImageFormat;
    };
  })[];
  NextToken?: string;
}
const DescribeStacksResult = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<DescribeStacksResult>;
export interface DescribeThemeForStackRequest {
  StackName?: string;
}
const DescribeThemeForStackRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<DescribeThemeForStackRequest>;
export interface DescribeThemeForStackResult {
  Theme?: Theme;
}
const DescribeThemeForStackResult =
  CreateThemeForStackResult as any as S.Schema<DescribeThemeForStackResult>;
export interface DescribeUsageReportSubscriptionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const DescribeUsageReportSubscriptionsRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<DescribeUsageReportSubscriptionsRequest>;
export type UsageReportExecutionErrorCode =
  | "RESOURCE_NOT_FOUND"
  | "ACCESS_DENIED"
  | "INTERNAL_SERVICE_ERROR"
  | (string & {});
const UsageReportExecutionErrorCode = S.String;

export interface LastReportGenerationExecutionError {
  ErrorCode?: UsageReportExecutionErrorCode;
  ErrorMessage?: string;
}
const LastReportGenerationExecutionError = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<LastReportGenerationExecutionError>;
export type LastReportGenerationExecutionErrors = LastReportGenerationExecutionError[];
const LastReportGenerationExecutionErrors = /*@__PURE__*/ __L.at(__c21, 6);
export interface UsageReportSubscription {
  S3BucketName?: string;
  Schedule?: UsageReportSchedule;
  LastGeneratedReportDate?: Date;
  SubscriptionErrors?: LastReportGenerationExecutionError[];
}
const UsageReportSubscription = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<UsageReportSubscription>;
export type UsageReportSubscriptionList = UsageReportSubscription[];
const UsageReportSubscriptionList = /*@__PURE__*/ __L.at(__c22, 0);
export interface DescribeUsageReportSubscriptionsResult {
  UsageReportSubscriptions?: UsageReportSubscription[];
  NextToken?: string;
}
const DescribeUsageReportSubscriptionsResult = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<DescribeUsageReportSubscriptionsResult>;
export interface DescribeUsersRequest {
  AuthenticationType?: AuthenticationType;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeUsersRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<DescribeUsersRequest>;
export interface User {
  Arn?: string;
  UserName?: string | redacted.Redacted<string>;
  Enabled?: boolean;
  Status?: string;
  FirstName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  CreatedTime?: Date;
  AuthenticationType?: AuthenticationType;
}
const User = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<User>;
export type UserList = User[];
const UserList = /*@__PURE__*/ __L.at(__c22, 4);
export interface DescribeUsersResult {
  Users?: (User & { AuthenticationType: AuthenticationType })[];
  NextToken?: string;
}
const DescribeUsersResult = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<DescribeUsersResult>;
export interface DescribeUserStackAssociationsRequest {
  StackName?: string;
  UserName?: string | redacted.Redacted<string>;
  AuthenticationType?: AuthenticationType;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeUserStackAssociationsRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<DescribeUserStackAssociationsRequest>;
export interface DescribeUserStackAssociationsResult {
  UserStackAssociations?: (UserStackAssociation & {
    StackName: string;
    UserName: Username;
    AuthenticationType: AuthenticationType;
  })[];
  NextToken?: string;
}
const DescribeUserStackAssociationsResult = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<DescribeUserStackAssociationsResult>;
export interface DisableUserRequest {
  UserName?: string | redacted.Redacted<string>;
  AuthenticationType?: AuthenticationType;
}
const DisableUserRequest = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<DisableUserRequest>;
export interface DisableUserResult {}
const DisableUserResult = AssociateFleetResult as any as S.Schema<DisableUserResult>;
export interface DisassociateAppBlockBuilderAppBlockRequest {
  AppBlockArn?: string;
  AppBlockBuilderName?: string;
}
const DisassociateAppBlockBuilderAppBlockRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<DisassociateAppBlockBuilderAppBlockRequest>;
export interface DisassociateAppBlockBuilderAppBlockResult {}
const DisassociateAppBlockBuilderAppBlockResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<DisassociateAppBlockBuilderAppBlockResult>;
export interface DisassociateApplicationFleetRequest {
  FleetName?: string;
  ApplicationArn?: string;
}
const DisassociateApplicationFleetRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<DisassociateApplicationFleetRequest>;
export interface DisassociateApplicationFleetResult {}
const DisassociateApplicationFleetResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<DisassociateApplicationFleetResult>;
export interface DisassociateApplicationFromEntitlementRequest {
  StackName?: string;
  EntitlementName?: string;
  ApplicationIdentifier?: string;
}
const DisassociateApplicationFromEntitlementRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<DisassociateApplicationFromEntitlementRequest>;
export interface DisassociateApplicationFromEntitlementResult {}
const DisassociateApplicationFromEntitlementResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<DisassociateApplicationFromEntitlementResult>;
export interface DisassociateFleetRequest {
  FleetName?: string;
  StackName?: string;
}
const DisassociateFleetRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<DisassociateFleetRequest>;
export interface DisassociateFleetResult {}
const DisassociateFleetResult = AssociateFleetResult as any as S.Schema<DisassociateFleetResult>;
export interface DisassociateSoftwareFromImageBuilderRequest {
  ImageBuilderName?: string;
  SoftwareNames?: string[];
}
const DisassociateSoftwareFromImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<DisassociateSoftwareFromImageBuilderRequest>;
export interface DisassociateSoftwareFromImageBuilderResult {}
const DisassociateSoftwareFromImageBuilderResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<DisassociateSoftwareFromImageBuilderResult>;
export interface DrainSessionInstanceRequest {
  SessionId?: string;
}
const DrainSessionInstanceRequest = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<DrainSessionInstanceRequest>;
export interface DrainSessionInstanceResult {}
const DrainSessionInstanceResult =
  AssociateFleetResult as any as S.Schema<DrainSessionInstanceResult>;
export interface EnableUserRequest {
  UserName?: string | redacted.Redacted<string>;
  AuthenticationType?: AuthenticationType;
}
const EnableUserRequest = /*@__PURE__*/ __L.at(__c23, 7) as any as S.Schema<EnableUserRequest>;
export interface EnableUserResult {}
const EnableUserResult = AssociateFleetResult as any as S.Schema<EnableUserResult>;
export interface ExpireSessionRequest {
  SessionId?: string;
}
const ExpireSessionRequest = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<ExpireSessionRequest>;
export interface ExpireSessionResult {}
const ExpireSessionResult = AssociateFleetResult as any as S.Schema<ExpireSessionResult>;
export interface GetExportImageTaskRequest {
  TaskId?: string;
}
const GetExportImageTaskRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<GetExportImageTaskRequest>;
export interface GetExportImageTaskResult {
  ExportImageTask?: ExportImageTask & {
    TaskId: UUID;
    ImageArn: Arn;
    AmiName: AmiName;
    CreatedDate: Date;
  };
}
const GetExportImageTaskResult = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<GetExportImageTaskResult>;
export interface ListAssociatedFleetsRequest {
  StackName?: string;
  NextToken?: string;
}
const ListAssociatedFleetsRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<ListAssociatedFleetsRequest>;
export interface ListAssociatedFleetsResult {
  Names?: string[];
  NextToken?: string;
}
const ListAssociatedFleetsResult = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<ListAssociatedFleetsResult>;
export interface ListAssociatedStacksRequest {
  FleetName?: string;
  NextToken?: string;
}
const ListAssociatedStacksRequest = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<ListAssociatedStacksRequest>;
export interface ListAssociatedStacksResult {
  Names?: string[];
  NextToken?: string;
}
const ListAssociatedStacksResult =
  ListAssociatedFleetsResult as any as S.Schema<ListAssociatedStacksResult>;
export interface ListEntitledApplicationsRequest {
  StackName?: string;
  EntitlementName?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListEntitledApplicationsRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<ListEntitledApplicationsRequest>;
export interface EntitledApplication {
  ApplicationIdentifier?: string;
}
const EntitledApplication = /*@__PURE__*/ __L.at(__c24, 7) as any as S.Schema<EntitledApplication>;
export type EntitledApplicationList = EntitledApplication[];
const EntitledApplicationList = /*@__PURE__*/ __L.at(__c25, 0);
export interface ListEntitledApplicationsResult {
  EntitledApplications?: (EntitledApplication & { ApplicationIdentifier: string })[];
  NextToken?: string;
}
const ListEntitledApplicationsResult = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<ListEntitledApplicationsResult>;
export type FilterName = string;
export type FilterValue = string;
export type FilterValues = string[];
const FilterValues = StringList as any as S.Schema<FilterValues>;
export interface Filter {
  Name?: string;
  Values?: string[];
}
const Filter = /*@__PURE__*/ __L.at(__c25, 2) as any as S.Schema<Filter>;
export type Filters = Filter[];
const Filters = /*@__PURE__*/ __L.at(__c25, 3);
export interface ListExportImageTasksRequest {
  Filters?: Filter[];
  MaxResults?: number;
  NextToken?: string;
}
const ListExportImageTasksRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<ListExportImageTasksRequest>;
export type ExportImageTasks = ExportImageTask[];
const ExportImageTasks = /*@__PURE__*/ __L.at(__c25, 5);
export interface ListExportImageTasksResult {
  ExportImageTasks?: (ExportImageTask & {
    TaskId: UUID;
    ImageArn: Arn;
    AmiName: AmiName;
    CreatedDate: Date;
  })[];
  NextToken?: string;
}
const ListExportImageTasksResult = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<ListExportImageTasksResult>;
export interface ListTagsForResourceRequest {
  ResourceArn?: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface StartAppBlockBuilderRequest {
  Name?: string;
}
const StartAppBlockBuilderRequest = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<StartAppBlockBuilderRequest>;
export interface StartAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder & {
    Arn: Arn;
    Name: string;
    Platform: AppBlockBuilderPlatformType;
    InstanceType: string;
    VpcConfig: VpcConfig;
    State: AppBlockBuilderState;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const StartAppBlockBuilderResult =
  CreateAppBlockBuilderResult as any as S.Schema<StartAppBlockBuilderResult>;
export interface StartFleetRequest {
  Name?: string;
}
const StartFleetRequest = /*@__PURE__*/ __L.at(__c26, 2) as any as S.Schema<StartFleetRequest>;
export interface StartFleetResult {}
const StartFleetResult = AssociateFleetResult as any as S.Schema<StartFleetResult>;
export interface StartImageBuilderRequest {
  Name?: string;
  AppstreamAgentVersion?: string;
}
const StartImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<StartImageBuilderRequest>;
export interface StartImageBuilderResult {
  ImageBuilder?: ImageBuilder & {
    Name: string;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const StartImageBuilderResult =
  CreateImageBuilderResult as any as S.Schema<StartImageBuilderResult>;
export interface StartSoftwareDeploymentToImageBuilderRequest {
  ImageBuilderName?: string;
  RetryFailedDeployments?: boolean;
}
const StartSoftwareDeploymentToImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<StartSoftwareDeploymentToImageBuilderRequest>;
export interface StartSoftwareDeploymentToImageBuilderResult {}
const StartSoftwareDeploymentToImageBuilderResult =
  AssociateApplicationToEntitlementResult as any as S.Schema<StartSoftwareDeploymentToImageBuilderResult>;
export interface StopAppBlockBuilderRequest {
  Name?: string;
}
const StopAppBlockBuilderRequest = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<StopAppBlockBuilderRequest>;
export interface StopAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder & {
    Arn: Arn;
    Name: string;
    Platform: AppBlockBuilderPlatformType;
    InstanceType: string;
    VpcConfig: VpcConfig;
    State: AppBlockBuilderState;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const StopAppBlockBuilderResult =
  CreateAppBlockBuilderResult as any as S.Schema<StopAppBlockBuilderResult>;
export interface StopFleetRequest {
  Name?: string;
}
const StopFleetRequest = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<StopFleetRequest>;
export interface StopFleetResult {}
const StopFleetResult = AssociateFleetResult as any as S.Schema<StopFleetResult>;
export interface StopImageBuilderRequest {
  Name?: string;
}
const StopImageBuilderRequest = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<StopImageBuilderRequest>;
export interface StopImageBuilderResult {
  ImageBuilder?: ImageBuilder & {
    Name: string;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const StopImageBuilderResult = CreateImageBuilderResult as any as S.Schema<StopImageBuilderResult>;
export interface TagResourceRequest {
  ResourceArn?: string;
  Tags?: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c27, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AssociateFleetResult as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = StringList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn?: string;
  TagKeys?: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = AssociateFleetResult as any as S.Schema<UntagResourceResponse>;
export type AppBlockBuilderAttribute =
  | "IAM_ROLE_ARN"
  | "ACCESS_ENDPOINTS"
  | "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
  | (string & {});
export type AppBlockBuilderAttributes = AppBlockBuilderAttribute[];
const AppBlockBuilderAttributes = Platforms as any as S.Schema<AppBlockBuilderAttributes>;
export interface UpdateAppBlockBuilderRequest {
  Name?: string;
  Description?: string;
  DisplayName?: string;
  Platform?: PlatformType;
  InstanceType?: string;
  VpcConfig?: VpcConfig;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  AccessEndpoints?: AccessEndpoint[];
  AttributesToDelete?: AppBlockBuilderAttribute[];
  DisableIMDSV1?: boolean;
}
const UpdateAppBlockBuilderRequest = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<UpdateAppBlockBuilderRequest>;
export interface UpdateAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder & {
    Arn: Arn;
    Name: string;
    Platform: AppBlockBuilderPlatformType;
    InstanceType: string;
    VpcConfig: VpcConfig;
    State: AppBlockBuilderState;
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
  };
}
const UpdateAppBlockBuilderResult =
  CreateAppBlockBuilderResult as any as S.Schema<UpdateAppBlockBuilderResult>;
export type ApplicationAttribute = "LAUNCH_PARAMETERS" | "WORKING_DIRECTORY" | (string & {});
export type ApplicationAttributes = ApplicationAttribute[];
const ApplicationAttributes = Platforms as any as S.Schema<ApplicationAttributes>;
export interface UpdateApplicationRequest {
  Name?: string;
  DisplayName?: string;
  Description?: string;
  IconS3Location?: S3Location;
  LaunchPath?: string;
  WorkingDirectory?: string;
  LaunchParameters?: string;
  AppBlockArn?: string;
  AttributesToDelete?: ApplicationAttribute[];
}
const UpdateApplicationRequest = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<UpdateApplicationRequest>;
export interface UpdateApplicationResult {
  Application?: Application & { IconS3Location: S3Location & { S3Bucket: S3Bucket } };
}
const UpdateApplicationResult = CreateApplicationResult as any as S.Schema<UpdateApplicationResult>;
export interface UpdateDirectoryConfigRequest {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedNames?: string[];
  ServiceAccountCredentials?: ServiceAccountCredentials;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}
const UpdateDirectoryConfigRequest = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<UpdateDirectoryConfigRequest>;
export interface UpdateDirectoryConfigResult {
  DirectoryConfig?: DirectoryConfig & {
    DirectoryName: DirectoryName;
    ServiceAccountCredentials: ServiceAccountCredentials & {
      AccountName: AccountName;
      AccountPassword: AccountPassword;
    };
  };
}
const UpdateDirectoryConfigResult =
  CreateDirectoryConfigResult as any as S.Schema<UpdateDirectoryConfigResult>;
export interface UpdateEntitlementRequest {
  Name?: string;
  StackName?: string;
  Description?: string;
  AppVisibility?: AppVisibility;
  Attributes?: EntitlementAttribute[];
}
const UpdateEntitlementRequest = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<UpdateEntitlementRequest>;
export interface UpdateEntitlementResult {
  Entitlement?: Entitlement & {
    Name: Name;
    StackName: Name;
    AppVisibility: AppVisibility;
    Attributes: (EntitlementAttribute & { Name: string; Value: string })[];
  };
}
const UpdateEntitlementResult = CreateEntitlementResult as any as S.Schema<UpdateEntitlementResult>;
export type FleetAttribute =
  | "VPC_CONFIGURATION"
  | "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
  | "DOMAIN_JOIN_INFO"
  | "IAM_ROLE_ARN"
  | "USB_DEVICE_FILTER_STRINGS"
  | "SESSION_SCRIPT_S3_LOCATION"
  | "MAX_SESSIONS_PER_INSTANCE"
  | "VOLUME_CONFIGURATION"
  | (string & {});
export type FleetAttributes = FleetAttribute[];
const FleetAttributes = Platforms as any as S.Schema<FleetAttributes>;
export interface UpdateFleetRequest {
  ImageName?: string;
  ImageArn?: string;
  Name?: string;
  InstanceType?: string;
  ComputeCapacity?: ComputeCapacity;
  VpcConfig?: VpcConfig;
  MaxUserDurationInSeconds?: number;
  DisconnectTimeoutInSeconds?: number;
  DeleteVpcConfig?: boolean;
  Description?: string;
  DisplayName?: string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  IdleDisconnectTimeoutInSeconds?: number;
  AttributesToDelete?: FleetAttribute[];
  IamRoleArn?: string;
  StreamView?: StreamView;
  Platform?: PlatformType;
  MaxConcurrentSessions?: number;
  UsbDeviceFilterStrings?: string[];
  SessionScriptS3Location?: S3Location;
  MaxSessionsPerInstance?: number;
  RootVolumeConfig?: VolumeConfig;
  DisableIMDSV1?: boolean;
}
const UpdateFleetRequest = /*@__PURE__*/ __L.at(__c27, 6) as any as S.Schema<UpdateFleetRequest>;
export interface UpdateFleetResult {
  Fleet?: Fleet & {
    Arn: Arn;
    Name: string;
    InstanceType: string;
    ComputeCapacityStatus: ComputeCapacityStatus & { Desired: number };
    State: FleetState;
    SessionScriptS3Location: S3Location & { S3Bucket: S3Bucket };
  };
}
const UpdateFleetResult = CreateFleetResult as any as S.Schema<UpdateFleetResult>;
export interface UpdateImagePermissionsRequest {
  Name?: string;
  SharedAccountId?: string;
  ImagePermissions?: ImagePermissions;
}
const UpdateImagePermissionsRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<UpdateImagePermissionsRequest>;
export interface UpdateImagePermissionsResult {}
const UpdateImagePermissionsResult =
  AssociateFleetResult as any as S.Schema<UpdateImagePermissionsResult>;
export type StackAttribute =
  | "STORAGE_CONNECTORS"
  | "STORAGE_CONNECTOR_HOMEFOLDERS"
  | "STORAGE_CONNECTOR_GOOGLE_DRIVE"
  | "STORAGE_CONNECTOR_ONE_DRIVE"
  | "REDIRECT_URL"
  | "FEEDBACK_URL"
  | "THEME_NAME"
  | "USER_SETTINGS"
  | "EMBED_HOST_DOMAINS"
  | "IAM_ROLE_ARN"
  | "ACCESS_ENDPOINTS"
  | "STREAMING_EXPERIENCE_SETTINGS"
  | "CONTENT_REDIRECTION"
  | "AGENT_ACCESS_CONFIG"
  | (string & {});
export type StackAttributes = StackAttribute[];
const StackAttributes = Platforms as any as S.Schema<StackAttributes>;
export interface AgentAccessConfigForUpdate {
  Settings?: AgentAccessSetting[];
  S3BucketArn?: string;
  ScreenshotsUploadEnabled?: boolean;
  ScreenResolution?: ScreenResolution;
  ScreenImageFormat?: ScreenImageFormat;
  UserControlMode?: UserControlMode;
}
const AgentAccessConfigForUpdate = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<AgentAccessConfigForUpdate>;
export interface UpdateStackRequest {
  DisplayName?: string;
  Description?: string;
  Name?: string;
  StorageConnectors?: StorageConnector[];
  DeleteStorageConnectors?: boolean;
  RedirectURL?: string;
  FeedbackURL?: string;
  AttributesToDelete?: StackAttribute[];
  UserSettings?: UserSetting[];
  ApplicationSettings?: ApplicationSettings;
  AccessEndpoints?: AccessEndpoint[];
  EmbedHostDomains?: string[];
  StreamingExperienceSettings?: StreamingExperienceSettings;
  ContentRedirection?: ContentRedirection;
  AgentAccessConfig?: AgentAccessConfigForUpdate;
}
const UpdateStackRequest = /*@__PURE__*/ __L.at(__c28, 1) as any as S.Schema<UpdateStackRequest>;
export interface UpdateStackResult {
  Stack?: Stack & {
    Name: string;
    StorageConnectors: (StorageConnector & { ConnectorType: StorageConnectorType })[];
    UserSettings: (UserSetting & { Action: Action; Permission: Permission })[];
    AccessEndpoints: (AccessEndpoint & { EndpointType: AccessEndpointType })[];
    ContentRedirection: ContentRedirection & {
      HostToClient: UrlRedirectionConfig & { Enabled: boolean };
    };
    AgentAccessConfig: AgentAccessConfig & {
      Settings: (AgentAccessSetting & { AgentAction: AgentAction; Permission: Permission })[];
      ScreenResolution: ScreenResolution;
      ScreenImageFormat: ScreenImageFormat;
    };
  };
}
const UpdateStackResult = CreateStackResult as any as S.Schema<UpdateStackResult>;
export type ThemeAttribute = "FOOTER_LINKS" | (string & {});
export type ThemeAttributes = ThemeAttribute[];
const ThemeAttributes = Platforms as any as S.Schema<ThemeAttributes>;
export interface UpdateThemeForStackRequest {
  StackName?: string;
  FooterLinks?: ThemeFooterLink[];
  TitleText?: string;
  ThemeStyling?: ThemeStyling;
  OrganizationLogoS3Location?: S3Location;
  FaviconS3Location?: S3Location;
  State?: ThemeState;
  AttributesToDelete?: ThemeAttribute[];
}
const UpdateThemeForStackRequest = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<UpdateThemeForStackRequest>;
export interface UpdateThemeForStackResult {
  Theme?: Theme;
}
const UpdateThemeForStackResult =
  CreateThemeForStackResult as any as S.Schema<UpdateThemeForStackResult>;
export type ErrorMessage = string;
export type AssociateAppBlockBuilderAppBlockError =
  | ConcurrentModificationException
  | InvalidParameterCombinationException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates the specified app block builder with the specified app block.
 */
export const associateAppBlockBuilderAppBlock: API.OperationMethod<
  AssociateAppBlockBuilderAppBlockRequest,
  AssociateAppBlockBuilderAppBlockResult,
  AssociateAppBlockBuilderAppBlockError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateAppBlockBuilderAppBlockRequest,
  output: AssociateAppBlockBuilderAppBlockResult,
  errors: [
    ConcurrentModificationException,
    InvalidParameterCombinationException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAppBlockBuilderAppBlock",
}));

export type AssociateApplicationFleetError =
  | ConcurrentModificationException
  | InvalidParameterCombinationException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
 */
export const associateApplicationFleet: API.OperationMethod<
  AssociateApplicationFleetRequest,
  AssociateApplicationFleetResult,
  AssociateApplicationFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateApplicationFleetRequest,
  output: AssociateApplicationFleetResult,
  errors: [
    ConcurrentModificationException,
    InvalidParameterCombinationException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateApplicationFleet",
}));

export type AssociateApplicationToEntitlementError =
  | EntitlementNotFoundException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates an application to entitle.
 */
export const associateApplicationToEntitlement: API.OperationMethod<
  AssociateApplicationToEntitlementRequest,
  AssociateApplicationToEntitlementResult,
  AssociateApplicationToEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateApplicationToEntitlementRequest,
  output: AssociateApplicationToEntitlementResult,
  errors: [
    EntitlementNotFoundException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateApplicationToEntitlement",
}));

export type AssociateFleetError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates the specified fleet with the specified stack.
 */
export const associateFleet: API.OperationMethod<
  AssociateFleetRequest,
  AssociateFleetResult,
  AssociateFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateFleetRequest,
  output: AssociateFleetResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateFleet",
}));

export type AssociateSoftwareToImageBuilderError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates license included application(s) with an existing image builder instance.
 */
export const associateSoftwareToImageBuilder: API.OperationMethod<
  AssociateSoftwareToImageBuilderRequest,
  AssociateSoftwareToImageBuilderResult,
  AssociateSoftwareToImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateSoftwareToImageBuilderRequest,
  output: AssociateSoftwareToImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidParameterCombinationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateSoftwareToImageBuilder",
}));

export type BatchAssociateUserStackError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
 */
export const batchAssociateUserStack: API.OperationMethod<
  BatchAssociateUserStackRequest,
  BatchAssociateUserStackResult,
  BatchAssociateUserStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchAssociateUserStackRequest,
  output: BatchAssociateUserStackResult,
  errors: [InvalidParameterCombinationException, OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchAssociateUserStack",
}));

export type BatchDisassociateUserStackError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Disassociates the specified users from the specified stacks.
 */
export const batchDisassociateUserStack: API.OperationMethod<
  BatchDisassociateUserStackRequest,
  BatchDisassociateUserStackResult,
  BatchDisassociateUserStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDisassociateUserStackRequest,
  output: BatchDisassociateUserStackResult,
  errors: [InvalidParameterCombinationException, OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisassociateUserStack",
}));

export type CopyImageError =
  | IncompatibleImageException
  | InvalidAccountStatusException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
 */
export const copyImage: API.OperationMethod<
  CopyImageRequest,
  CopyImageResponse,
  CopyImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CopyImageRequest,
  output: CopyImageResponse,
  errors: [
    IncompatibleImageException,
    InvalidAccountStatusException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyImage",
}));

export type CreateAppBlockError =
  | ConcurrentModificationException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | CommonErrors;
/**
 * Creates an app block.
 *
 * App blocks are a WorkSpaces Applications resource that stores the details about the
 * virtual hard disk in an S3 bucket. It also stores the setup script with details about
 * how to mount the virtual hard disk. The virtual hard disk includes the application
 * binaries and other files necessary to launch your applications. Multiple applications
 * can be assigned to a single app block.
 *
 * This is only supported for Elastic fleets.
 */
export const createAppBlock: API.OperationMethod<
  CreateAppBlockRequest,
  CreateAppBlockResult,
  CreateAppBlockError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppBlockRequest,
  output: CreateAppBlockResult,
  errors: [
    ConcurrentModificationException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAppBlock",
}));

export type CreateAppBlockBuilderError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an app block builder.
 */
export const createAppBlockBuilder: API.OperationMethod<
  CreateAppBlockBuilderRequest,
  CreateAppBlockBuilderResult,
  CreateAppBlockBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppBlockBuilderRequest,
  output: CreateAppBlockBuilderResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAppBlockBuilder",
}));

export type CreateAppBlockBuilderStreamingURLError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a URL to start a create app block builder streaming session.
 */
export const createAppBlockBuilderStreamingURL: API.OperationMethod<
  CreateAppBlockBuilderStreamingURLRequest,
  CreateAppBlockBuilderStreamingURLResult,
  CreateAppBlockBuilderStreamingURLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppBlockBuilderStreamingURLRequest,
  output: CreateAppBlockBuilderStreamingURLResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAppBlockBuilderStreamingURL",
}));

export type CreateApplicationError =
  | ConcurrentModificationException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an application.
 *
 * Applications are a WorkSpaces Applications resource that stores the details about how to
 * launch applications on Elastic fleet streaming instances. An application consists of the
 * launch details, icon, and display name. Applications are associated with an app block
 * that contains the application binaries and other files. The applications assigned to an
 * Elastic fleet are the applications users can launch.
 *
 * This is only supported for Elastic fleets.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResult,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateApplicationRequest,
  output: CreateApplicationResult,
  errors: [
    ConcurrentModificationException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateDirectoryConfigError =
  | InvalidAccountStatusException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 */
export const createDirectoryConfig: API.OperationMethod<
  CreateDirectoryConfigRequest,
  CreateDirectoryConfigResult,
  CreateDirectoryConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDirectoryConfigRequest,
  output: CreateDirectoryConfigResult,
  errors: [
    InvalidAccountStatusException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDirectoryConfig",
}));

export type CreateEntitlementError =
  | EntitlementAlreadyExistsException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a new entitlement. Entitlements control access to specific applications within
 * a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user
 * identities. WorkSpaces Applications user pool and streaming URL users are entitled to all
 * applications in a stack. Entitlements don't apply to the desktop stream view
 * application, or to applications managed by a dynamic app provider using the Dynamic
 * Application Framework.
 */
export const createEntitlement: API.OperationMethod<
  CreateEntitlementRequest,
  CreateEntitlementResult,
  CreateEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEntitlementRequest,
  output: CreateEntitlementResult,
  errors: [
    EntitlementAlreadyExistsException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEntitlement",
}));

export type CreateExportImageTaskError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a task to export a WorkSpaces Applications image to an EC2 AMI. This allows you to use your customized WorkSpaces Applications images with other AWS services or for backup purposes.
 */
export const createExportImageTask: API.OperationMethod<
  CreateExportImageTaskRequest,
  CreateExportImageTaskResult,
  CreateExportImageTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateExportImageTaskRequest,
  output: CreateExportImageTaskResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExportImageTask",
}));

export type CreateFleetError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
 */
export const createFleet: API.OperationMethod<
  CreateFleetRequest,
  CreateFleetResult,
  CreateFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFleetRequest,
  output: CreateFleetResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFleet",
}));

export type CreateImageBuilderError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates an image builder. An image builder is a virtual machine that is used to create an image.
 *
 * The initial state of the builder is `PENDING`. When it is ready, the state is `RUNNING`.
 */
export const createImageBuilder: API.OperationMethod<
  CreateImageBuilderRequest,
  CreateImageBuilderResult,
  CreateImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateImageBuilderRequest,
  output: CreateImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImageBuilder",
}));

export type CreateImageBuilderStreamingURLError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a URL to start an image builder streaming session.
 */
export const createImageBuilderStreamingURL: API.OperationMethod<
  CreateImageBuilderStreamingURLRequest,
  CreateImageBuilderStreamingURLResult,
  CreateImageBuilderStreamingURLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateImageBuilderStreamingURLRequest,
  output: CreateImageBuilderStreamingURLResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImageBuilderStreamingURL",
}));

export type CreateImportedImageError =
  | DryRunOperationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a custom WorkSpaces Applications image by importing an EC2 AMI. This allows you to use your own customized AMI to create WorkSpaces Applications images that support additional instance types beyond the standard stream.* instances.
 */
export const createImportedImage: API.OperationMethod<
  CreateImportedImageRequest,
  CreateImportedImageResult,
  CreateImportedImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateImportedImageRequest,
  output: CreateImportedImageResult,
  errors: [
    DryRunOperationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateImportedImage",
}));

export type CreateStackError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.
 */
export const createStack: API.OperationMethod<
  CreateStackRequest,
  CreateStackResult,
  CreateStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateStackRequest,
  output: CreateStackResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStack",
}));

export type CreateStreamingURLError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a temporary URL to start an WorkSpaces Applications streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.
 */
export const createStreamingURL: API.OperationMethod<
  CreateStreamingURLRequest,
  CreateStreamingURLResult,
  CreateStreamingURLError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateStreamingURLRequest,
  output: CreateStreamingURLResult,
  errors: [
    InvalidParameterCombinationException,
    OperationNotPermittedException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStreamingURL",
}));

export type CreateThemeForStackError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates custom branding that customizes the appearance of the streaming application catalog page.
 */
export const createThemeForStack: API.OperationMethod<
  CreateThemeForStackRequest,
  CreateThemeForStackResult,
  CreateThemeForStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateThemeForStackRequest,
  output: CreateThemeForStackResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateThemeForStack",
}));

export type CreateUpdatedImageError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a new image with the latest Windows operating system updates, driver updates, and WorkSpaces Applications agent software.
 *
 * For more information, see the "Update an Image by Using
 * Managed WorkSpaces Applications Image Updates" section in Administer Your WorkSpaces Applications Images, in the *Amazon WorkSpaces Applications Administration Guide*.
 */
export const createUpdatedImage: API.OperationMethod<
  CreateUpdatedImageRequest,
  CreateUpdatedImageResult,
  CreateUpdatedImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUpdatedImageRequest,
  output: CreateUpdatedImageResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUpdatedImage",
}));

export type CreateUsageReportSubscriptionError =
  | InvalidAccountStatusException
  | InvalidRoleException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a usage report subscription. Usage reports are generated daily.
 */
export const createUsageReportSubscription: API.OperationMethod<
  CreateUsageReportSubscriptionRequest,
  CreateUsageReportSubscriptionResult,
  CreateUsageReportSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUsageReportSubscriptionRequest,
  output: CreateUsageReportSubscriptionResult,
  errors: [InvalidAccountStatusException, InvalidRoleException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUsageReportSubscription",
}));

export type CreateUserError =
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceAlreadyExistsException
  | CommonErrors;
/**
 * Creates a new user in the user pool.
 */
export const createUser: API.OperationMethod<
  CreateUserRequest,
  CreateUserResult,
  CreateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUserRequest,
  output: CreateUserResult,
  errors: [
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUser",
}));

export type DeleteAppBlockError =
  | ConcurrentModificationException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an app block.
 */
export const deleteAppBlock: API.OperationMethod<
  DeleteAppBlockRequest,
  DeleteAppBlockResult,
  DeleteAppBlockError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppBlockRequest,
  output: DeleteAppBlockResult,
  errors: [ConcurrentModificationException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppBlock",
}));

export type DeleteAppBlockBuilderError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an app block builder.
 *
 * An app block builder can only be deleted when it has no association with an app
 * block.
 */
export const deleteAppBlockBuilder: API.OperationMethod<
  DeleteAppBlockBuilderRequest,
  DeleteAppBlockBuilderResult,
  DeleteAppBlockBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppBlockBuilderRequest,
  output: DeleteAppBlockBuilderResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppBlockBuilder",
}));

export type DeleteApplicationError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResult,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationRequest,
  output: DeleteApplicationResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteDirectoryConfigError =
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified Directory Config object from WorkSpaces Applications. This object includes the information required to join streaming instances to an Active Directory domain.
 */
export const deleteDirectoryConfig: API.OperationMethod<
  DeleteDirectoryConfigRequest,
  DeleteDirectoryConfigResult,
  DeleteDirectoryConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDirectoryConfigRequest,
  output: DeleteDirectoryConfigResult,
  errors: [ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDirectoryConfig",
}));

export type DeleteEntitlementError =
  | ConcurrentModificationException
  | EntitlementNotFoundException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified entitlement.
 */
export const deleteEntitlement: API.OperationMethod<
  DeleteEntitlementRequest,
  DeleteEntitlementResult,
  DeleteEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEntitlementRequest,
  output: DeleteEntitlementResult,
  errors: [
    ConcurrentModificationException,
    EntitlementNotFoundException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEntitlement",
}));

export type DeleteFleetError =
  | ConcurrentModificationException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified fleet.
 */
export const deleteFleet: API.OperationMethod<
  DeleteFleetRequest,
  DeleteFleetResult,
  DeleteFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFleetRequest,
  output: DeleteFleetResult,
  errors: [ConcurrentModificationException, ResourceInUseException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFleet",
}));

export type DeleteImageError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified image. You cannot delete an image when it is in use.
 * After you delete an image, you cannot provision new capacity using the image.
 */
export const deleteImage: API.OperationMethod<
  DeleteImageRequest,
  DeleteImageResult,
  DeleteImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteImageRequest,
  output: DeleteImageResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImage",
}));

export type DeleteImageBuilderError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified image builder and releases the capacity.
 */
export const deleteImageBuilder: API.OperationMethod<
  DeleteImageBuilderRequest,
  DeleteImageBuilderResult,
  DeleteImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteImageBuilderRequest,
  output: DeleteImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImageBuilder",
}));

export type DeleteImagePermissionsError =
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
 */
export const deleteImagePermissions: API.OperationMethod<
  DeleteImagePermissionsRequest,
  DeleteImagePermissionsResult,
  DeleteImagePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteImagePermissionsRequest,
  output: DeleteImagePermissionsResult,
  errors: [ResourceNotAvailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteImagePermissions",
}));

export type DeleteStackError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
 */
export const deleteStack: API.OperationMethod<
  DeleteStackRequest,
  DeleteStackResult,
  DeleteStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteStackRequest,
  output: DeleteStackResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteStack",
}));

export type DeleteThemeForStackError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes custom branding that customizes the appearance of the streaming application catalog page.
 */
export const deleteThemeForStack: API.OperationMethod<
  DeleteThemeForStackRequest,
  DeleteThemeForStackResult,
  DeleteThemeForStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteThemeForStackRequest,
  output: DeleteThemeForStackResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteThemeForStack",
}));

export type DeleteUsageReportSubscriptionError =
  | InvalidAccountStatusException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables usage report generation.
 */
export const deleteUsageReportSubscription: API.OperationMethod<
  DeleteUsageReportSubscriptionRequest,
  DeleteUsageReportSubscriptionResult,
  DeleteUsageReportSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsageReportSubscriptionRequest,
  output: DeleteUsageReportSubscriptionResult,
  errors: [InvalidAccountStatusException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUsageReportSubscription",
}));

export type DeleteUserError = ResourceNotFoundException | CommonErrors;
/**
 * Deletes a user from the user pool.
 */
export const deleteUser: API.OperationMethod<
  DeleteUserRequest,
  DeleteUserResult,
  DeleteUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUserRequest,
  output: DeleteUserResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUser",
}));

export type DescribeAppBlockBuilderAppBlockAssociationsError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more app block builder associations.
 */
export const describeAppBlockBuilderAppBlockAssociations: API.PaginatedOperationMethod<
  DescribeAppBlockBuilderAppBlockAssociationsRequest,
  DescribeAppBlockBuilderAppBlockAssociationsResult,
  DescribeAppBlockBuilderAppBlockAssociationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeAppBlockBuilderAppBlockAssociationsRequest,
  output: DescribeAppBlockBuilderAppBlockAssociationsResult,
  errors: [InvalidParameterCombinationException, OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppBlockBuilderAppBlockAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeAppBlockBuildersError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more app block builders.
 */
export const describeAppBlockBuilders: API.PaginatedOperationMethod<
  DescribeAppBlockBuildersRequest,
  DescribeAppBlockBuildersResult,
  DescribeAppBlockBuildersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeAppBlockBuildersRequest,
  output: DescribeAppBlockBuildersResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppBlockBuilders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeAppBlocksError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more app blocks.
 */
export const describeAppBlocks: API.OperationMethod<
  DescribeAppBlocksRequest,
  DescribeAppBlocksResult,
  DescribeAppBlocksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppBlocksRequest,
  output: DescribeAppBlocksResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppBlocks",
}));

export type DescribeApplicationFleetAssociationsError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
 */
export const describeApplicationFleetAssociations: API.OperationMethod<
  DescribeApplicationFleetAssociationsRequest,
  DescribeApplicationFleetAssociationsResult,
  DescribeApplicationFleetAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeApplicationFleetAssociationsRequest,
  output: DescribeApplicationFleetAssociationsResult,
  errors: [InvalidParameterCombinationException, OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationFleetAssociations",
}));

export type DescribeApplicationsError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more applications.
 */
export const describeApplications: API.OperationMethod<
  DescribeApplicationsRequest,
  DescribeApplicationsResult,
  DescribeApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeApplicationsRequest,
  output: DescribeApplicationsResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplications",
}));

export type DescribeAppLicenseUsageError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves license included application usage information.
 */
export const describeAppLicenseUsage: API.OperationMethod<
  DescribeAppLicenseUsageRequest,
  DescribeAppLicenseUsageResult,
  DescribeAppLicenseUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppLicenseUsageRequest,
  output: DescribeAppLicenseUsageResult,
  errors: [
    InvalidParameterCombinationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppLicenseUsage",
}));

export type DescribeDirectoryConfigsError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves a list that describes one or more specified Directory Config objects for WorkSpaces Applications, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 *
 * Although the response syntax in this topic includes the account password, this password is not returned in the actual response.
 */
export const describeDirectoryConfigs: API.OperationMethod<
  DescribeDirectoryConfigsRequest,
  DescribeDirectoryConfigsResult,
  DescribeDirectoryConfigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDirectoryConfigsRequest,
  output: DescribeDirectoryConfigsResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDirectoryConfigs",
}));

export type DescribeEntitlementsError =
  | EntitlementNotFoundException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one of more entitlements.
 */
export const describeEntitlements: API.OperationMethod<
  DescribeEntitlementsRequest,
  DescribeEntitlementsResult,
  DescribeEntitlementsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEntitlementsRequest,
  output: DescribeEntitlementsResult,
  errors: [EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEntitlements",
}));

export type DescribeFleetsError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
 */
export const describeFleets: API.OperationMethod<
  DescribeFleetsRequest,
  DescribeFleetsResult,
  DescribeFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeFleetsRequest,
  output: DescribeFleetsResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFleets",
}));

export type DescribeImageBuildersError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
 */
export const describeImageBuilders: API.OperationMethod<
  DescribeImageBuildersRequest,
  DescribeImageBuildersResult,
  DescribeImageBuildersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeImageBuildersRequest,
  output: DescribeImageBuildersResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImageBuilders",
}));

export type DescribeImagePermissionsError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.
 */
export const describeImagePermissions: API.PaginatedOperationMethod<
  DescribeImagePermissionsRequest,
  DescribeImagePermissionsResult,
  DescribeImagePermissionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeImagePermissionsRequest,
  output: DescribeImagePermissionsResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImagePermissions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeImagesError =
  | InvalidParameterCombinationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
 */
export const describeImages: API.PaginatedOperationMethod<
  DescribeImagesRequest,
  DescribeImagesResult,
  DescribeImagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeImagesRequest,
  output: DescribeImagesResult,
  errors: [InvalidParameterCombinationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSessionsError = InvalidParameterCombinationException | CommonErrors;
/**
 * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet,
 * only streaming sessions for that user are described. If an authentication type is not provided,
 * the default is to authenticate users using a streaming URL.
 */
export const describeSessions: API.OperationMethod<
  DescribeSessionsRequest,
  DescribeSessionsResult,
  DescribeSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSessionsRequest,
  output: DescribeSessionsResult,
  errors: [InvalidParameterCombinationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSessions",
}));

export type DescribeSoftwareAssociationsError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves license included application associations for a specified resource.
 */
export const describeSoftwareAssociations: API.OperationMethod<
  DescribeSoftwareAssociationsRequest,
  DescribeSoftwareAssociationsResult,
  DescribeSoftwareAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSoftwareAssociationsRequest,
  output: DescribeSoftwareAssociationsResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSoftwareAssociations",
}));

export type DescribeStacksError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
 */
export const describeStacks: API.OperationMethod<
  DescribeStacksRequest,
  DescribeStacksResult,
  DescribeStacksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeStacksRequest,
  output: DescribeStacksResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStacks",
}));

export type DescribeThemeForStackError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes the theme for a specified stack. A theme is custom branding that customizes the appearance of the streaming application catalog page.
 */
export const describeThemeForStack: API.OperationMethod<
  DescribeThemeForStackRequest,
  DescribeThemeForStackResult,
  DescribeThemeForStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeThemeForStackRequest,
  output: DescribeThemeForStackResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeThemeForStack",
}));

export type DescribeUsageReportSubscriptionsError =
  | InvalidAccountStatusException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more usage report subscriptions.
 */
export const describeUsageReportSubscriptions: API.OperationMethod<
  DescribeUsageReportSubscriptionsRequest,
  DescribeUsageReportSubscriptionsResult,
  DescribeUsageReportSubscriptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUsageReportSubscriptionsRequest,
  output: DescribeUsageReportSubscriptionsResult,
  errors: [InvalidAccountStatusException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUsageReportSubscriptions",
}));

export type DescribeUsersError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more specified users in the user pool.
 */
export const describeUsers: API.OperationMethod<
  DescribeUsersRequest,
  DescribeUsersResult,
  DescribeUsersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUsersRequest,
  output: DescribeUsersResult,
  errors: [
    InvalidParameterCombinationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUsers",
}));

export type DescribeUserStackAssociationsError =
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:
 *
 * - The stack name
 *
 * - The user name (email address of the user associated with the stack) and the authentication type for the user
 */
export const describeUserStackAssociations: API.OperationMethod<
  DescribeUserStackAssociationsRequest,
  DescribeUserStackAssociationsResult,
  DescribeUserStackAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUserStackAssociationsRequest,
  output: DescribeUserStackAssociationsResult,
  errors: [InvalidParameterCombinationException, OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUserStackAssociations",
}));

export type DisableUserError = ResourceNotFoundException | CommonErrors;
/**
 * Disables the specified user in the user pool. Users can't sign in to WorkSpaces Applications until they are re-enabled. This action does not delete the user.
 */
export const disableUser: API.OperationMethod<
  DisableUserRequest,
  DisableUserResult,
  DisableUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableUserRequest,
  output: DisableUserResult,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableUser",
}));

export type DisassociateAppBlockBuilderAppBlockError =
  | ConcurrentModificationException
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates a specified app block builder from a specified app block.
 */
export const disassociateAppBlockBuilderAppBlock: API.OperationMethod<
  DisassociateAppBlockBuilderAppBlockRequest,
  DisassociateAppBlockBuilderAppBlockResult,
  DisassociateAppBlockBuilderAppBlockError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateAppBlockBuilderAppBlockRequest,
  output: DisassociateAppBlockBuilderAppBlockResult,
  errors: [
    ConcurrentModificationException,
    InvalidParameterCombinationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAppBlockBuilderAppBlock",
}));

export type DisassociateApplicationFleetError =
  | ConcurrentModificationException
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | CommonErrors;
/**
 * Disassociates the specified application from the fleet.
 */
export const disassociateApplicationFleet: API.OperationMethod<
  DisassociateApplicationFleetRequest,
  DisassociateApplicationFleetResult,
  DisassociateApplicationFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateApplicationFleetRequest,
  output: DisassociateApplicationFleetResult,
  errors: [
    ConcurrentModificationException,
    InvalidParameterCombinationException,
    OperationNotPermittedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateApplicationFleet",
}));

export type DisassociateApplicationFromEntitlementError =
  | EntitlementNotFoundException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified application from the specified entitlement.
 */
export const disassociateApplicationFromEntitlement: API.OperationMethod<
  DisassociateApplicationFromEntitlementRequest,
  DisassociateApplicationFromEntitlementResult,
  DisassociateApplicationFromEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateApplicationFromEntitlementRequest,
  output: DisassociateApplicationFromEntitlementResult,
  errors: [EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateApplicationFromEntitlement",
}));

export type DisassociateFleetError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the specified fleet from the specified stack.
 */
export const disassociateFleet: API.OperationMethod<
  DisassociateFleetRequest,
  DisassociateFleetResult,
  DisassociateFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFleetRequest,
  output: DisassociateFleetResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFleet",
}));

export type DisassociateSoftwareFromImageBuilderError =
  | ConcurrentModificationException
  | InvalidParameterCombinationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes license included application(s) association(s) from an image builder instance.
 */
export const disassociateSoftwareFromImageBuilder: API.OperationMethod<
  DisassociateSoftwareFromImageBuilderRequest,
  DisassociateSoftwareFromImageBuilderResult,
  DisassociateSoftwareFromImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateSoftwareFromImageBuilderRequest,
  output: DisassociateSoftwareFromImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    InvalidParameterCombinationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSoftwareFromImageBuilder",
}));

export type DrainSessionInstanceError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Drains the instance hosting the specified streaming session. The instance stops accepting new sessions while existing sessions continue uninterrupted. Once all sessions end, the instance is reclaimed and replaced. This only applies to multi-session fleets.
 */
export const drainSessionInstance: API.OperationMethod<
  DrainSessionInstanceRequest,
  DrainSessionInstanceResult,
  DrainSessionInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DrainSessionInstanceRequest,
  output: DrainSessionInstanceResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DrainSessionInstance",
}));

export type EnableUserError =
  | InvalidAccountStatusException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Enables a user in the user pool. After being enabled, users can sign in to WorkSpaces Applications and open applications from the stacks to which they are assigned.
 */
export const enableUser: API.OperationMethod<
  EnableUserRequest,
  EnableUserResult,
  EnableUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableUserRequest,
  output: EnableUserResult,
  errors: [InvalidAccountStatusException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableUser",
}));

export type ExpireSessionError = CommonErrors;
/**
 * Immediately stops the specified streaming session.
 */
export const expireSession: API.OperationMethod<
  ExpireSessionRequest,
  ExpireSessionResult,
  ExpireSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExpireSessionRequest,
  output: ExpireSessionResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExpireSession",
}));

export type GetExportImageTaskError =
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about an export image task, including its current state, progress, and any error details.
 */
export const getExportImageTask: API.OperationMethod<
  GetExportImageTaskRequest,
  GetExportImageTaskResult,
  GetExportImageTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetExportImageTaskRequest,
  output: GetExportImageTaskResult,
  errors: [OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExportImageTask",
}));

export type ListAssociatedFleetsError = CommonErrors;
/**
 * Retrieves the name of the fleet that is associated with the specified stack.
 */
export const listAssociatedFleets: API.OperationMethod<
  ListAssociatedFleetsRequest,
  ListAssociatedFleetsResult,
  ListAssociatedFleetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAssociatedFleetsRequest,
  output: ListAssociatedFleetsResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociatedFleets",
}));

export type ListAssociatedStacksError = CommonErrors;
/**
 * Retrieves the name of the stack with which the specified fleet is associated.
 */
export const listAssociatedStacks: API.OperationMethod<
  ListAssociatedStacksRequest,
  ListAssociatedStacksResult,
  ListAssociatedStacksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAssociatedStacksRequest,
  output: ListAssociatedStacksResult,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociatedStacks",
}));

export type ListEntitledApplicationsError =
  | EntitlementNotFoundException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list of entitled applications.
 */
export const listEntitledApplications: API.OperationMethod<
  ListEntitledApplicationsRequest,
  ListEntitledApplicationsResult,
  ListEntitledApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListEntitledApplicationsRequest,
  output: ListEntitledApplicationsResult,
  errors: [EntitlementNotFoundException, OperationNotPermittedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntitledApplications",
}));

export type ListExportImageTasksError = OperationNotPermittedException | CommonErrors;
/**
 * Lists export image tasks, with optional filtering and pagination. Use this operation to monitor the status of multiple export operations.
 */
export const listExportImageTasks: API.OperationMethod<
  ListExportImageTasksRequest,
  ListExportImageTasksResult,
  ListExportImageTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListExportImageTasksRequest,
  output: ListExportImageTasksResult,
  errors: [OperationNotPermittedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExportImageTasks",
}));

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves a list of all tags for the specified WorkSpaces Applications resource. You can tag WorkSpaces Applications image builders, images, fleets, and stacks.
 *
 * For more information about tags, see Tagging Your Resources in the *Amazon WorkSpaces Applications Administration Guide*.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartAppBlockBuilderError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts an app block builder.
 *
 * An app block builder can only be started when it's associated with an app
 * block.
 *
 * Starting an app block builder starts a new instance, which is equivalent to an elastic
 * fleet instance with application builder assistance functionality.
 */
export const startAppBlockBuilder: API.OperationMethod<
  StartAppBlockBuilderRequest,
  StartAppBlockBuilderResult,
  StartAppBlockBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartAppBlockBuilderRequest,
  output: StartAppBlockBuilderResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAppBlockBuilder",
}));

export type StartFleetError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts the specified fleet.
 */
export const startFleet: API.OperationMethod<
  StartFleetRequest,
  StartFleetResult,
  StartFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartFleetRequest,
  output: StartFleetResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartFleet",
}));

export type StartImageBuilderError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Starts the specified image builder.
 */
export const startImageBuilder: API.OperationMethod<
  StartImageBuilderRequest,
  StartImageBuilderResult,
  StartImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartImageBuilderRequest,
  output: StartImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartImageBuilder",
}));

export type StartSoftwareDeploymentToImageBuilderError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Initiates license included applications deployment to an image builder instance.
 */
export const startSoftwareDeploymentToImageBuilder: API.OperationMethod<
  StartSoftwareDeploymentToImageBuilderRequest,
  StartSoftwareDeploymentToImageBuilderResult,
  StartSoftwareDeploymentToImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSoftwareDeploymentToImageBuilderRequest,
  output: StartSoftwareDeploymentToImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSoftwareDeploymentToImageBuilder",
}));

export type StopAppBlockBuilderError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops an app block builder.
 *
 * Stopping an app block builder terminates the instance, and the instance state is not
 * persisted.
 */
export const stopAppBlockBuilder: API.OperationMethod<
  StopAppBlockBuilderRequest,
  StopAppBlockBuilderResult,
  StopAppBlockBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopAppBlockBuilderRequest,
  output: StopAppBlockBuilderResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopAppBlockBuilder",
}));

export type StopFleetError =
  | ConcurrentModificationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops the specified fleet.
 */
export const stopFleet: API.OperationMethod<
  StopFleetRequest,
  StopFleetResult,
  StopFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopFleetRequest,
  output: StopFleetResult,
  errors: [ConcurrentModificationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopFleet",
}));

export type StopImageBuilderError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Stops the specified image builder.
 */
export const stopImageBuilder: API.OperationMethod<
  StopImageBuilderRequest,
  StopImageBuilderResult,
  StopImageBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopImageBuilderRequest,
  output: StopImageBuilderResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopImageBuilder",
}));

export type TagResourceError =
  | InvalidAccountStatusException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds or overwrites one or more tags for the specified WorkSpaces Applications resource. You can tag WorkSpaces Applications image builders, images, fleets, and stacks.
 *
 * Each tag consists of a key and an optional value. If a resource already has a tag with the same key,
 * this operation updates its value.
 *
 * To list the current tags for your resources, use ListTagsForResource.
 * To disassociate tags from your resources, use UntagResource.
 *
 * For more information about tags, see Tagging Your Resources in the *Amazon WorkSpaces Applications Administration Guide*.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [InvalidAccountStatusException, LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Disassociates one or more specified tags from the specified WorkSpaces Applications resource.
 *
 * To list the current tags for your resources, use ListTagsForResource.
 *
 * For more information about tags, see Tagging Your Resources in the *Amazon WorkSpaces Applications Administration Guide*.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAppBlockBuilderError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceInUseException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates an app block builder.
 *
 * If the app block builder is in the `STARTING` or `STOPPING`
 * state, you can't update it. If the app block builder is in the `RUNNING`
 * state, you can only update the DisplayName and Description. If the app block builder is
 * in the `STOPPED` state, you can update any attribute except the Name.
 */
export const updateAppBlockBuilder: API.OperationMethod<
  UpdateAppBlockBuilderRequest,
  UpdateAppBlockBuilderResult,
  UpdateAppBlockBuilderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppBlockBuilderRequest,
  output: UpdateAppBlockBuilderResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceInUseException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAppBlockBuilder",
}));

export type UpdateApplicationError =
  | ConcurrentModificationException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResult,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateApplicationRequest,
  output: UpdateApplicationResult,
  errors: [
    ConcurrentModificationException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateDirectoryConfigError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidRoleException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
 */
export const updateDirectoryConfig: API.OperationMethod<
  UpdateDirectoryConfigRequest,
  UpdateDirectoryConfigResult,
  UpdateDirectoryConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDirectoryConfigRequest,
  output: UpdateDirectoryConfigResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidRoleException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDirectoryConfig",
}));

export type UpdateEntitlementError =
  | ConcurrentModificationException
  | EntitlementNotFoundException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified entitlement.
 */
export const updateEntitlement: API.OperationMethod<
  UpdateEntitlementRequest,
  UpdateEntitlementResult,
  UpdateEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEntitlementRequest,
  output: UpdateEntitlementResult,
  errors: [
    ConcurrentModificationException,
    EntitlementNotFoundException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEntitlement",
}));

export type UpdateFleetError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | RequestLimitExceededException
  | ResourceInUseException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified fleet.
 *
 * If the fleet is in the `STOPPED` state, you can update any attribute except
 * the fleet name.
 *
 * If the fleet is in the `RUNNING` state, you can update the following based
 * on the fleet type:
 *
 * - Always-On and On-Demand fleet types
 *
 * You can update the `DisplayName`, `ComputeCapacity`,
 * `ImageARN`, `ImageName`,
 * `IdleDisconnectTimeoutInSeconds`, and
 * `DisconnectTimeoutInSeconds` attributes.
 *
 * - Elastic fleet type
 *
 * You can update the `DisplayName`,
 * `IdleDisconnectTimeoutInSeconds`,
 * `DisconnectTimeoutInSeconds`, `MaxConcurrentSessions`, `SessionScriptS3Location`
 * and `UsbDeviceFilterStrings` attributes.
 *
 * If the fleet is in the `STARTING` or `STOPPED` state, you can't update it.
 */
export const updateFleet: API.OperationMethod<
  UpdateFleetRequest,
  UpdateFleetResult,
  UpdateFleetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFleetRequest,
  output: UpdateFleetResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    RequestLimitExceededException,
    ResourceInUseException,
    ResourceNotAvailableException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFleet",
}));

export type UpdateImagePermissionsError =
  | LimitExceededException
  | ResourceNotAvailableException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds or updates permissions for the specified private image.
 */
export const updateImagePermissions: API.OperationMethod<
  UpdateImagePermissionsRequest,
  UpdateImagePermissionsResult,
  UpdateImagePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateImagePermissionsRequest,
  output: UpdateImagePermissionsResult,
  errors: [LimitExceededException, ResourceNotAvailableException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateImagePermissions",
}));

export type UpdateStackError =
  | ConcurrentModificationException
  | IncompatibleImageException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | InvalidRoleException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the specified fields for the specified stack.
 */
export const updateStack: API.OperationMethod<
  UpdateStackRequest,
  UpdateStackResult,
  UpdateStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateStackRequest,
  output: UpdateStackResult,
  errors: [
    ConcurrentModificationException,
    IncompatibleImageException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    InvalidRoleException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStack",
}));

export type UpdateThemeForStackError =
  | ConcurrentModificationException
  | InvalidAccountStatusException
  | InvalidParameterCombinationException
  | LimitExceededException
  | OperationNotPermittedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates custom branding that customizes the appearance of the streaming application catalog page.
 */
export const updateThemeForStack: API.OperationMethod<
  UpdateThemeForStackRequest,
  UpdateThemeForStackResult,
  UpdateThemeForStackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateThemeForStackRequest,
  output: UpdateThemeForStackResult,
  errors: [
    ConcurrentModificationException,
    InvalidAccountStatusException,
    InvalidParameterCombinationException,
    LimitExceededException,
    OperationNotPermittedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateThemeForStack",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AppBlockArn: S.optional(S.String),
          AppBlockBuilderName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateAppBlockBuilderAppBlockRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AppBlockArn: S.optional(S.String), AppBlockBuilderName: S.optional(S.String) }),
      ).annotate({
        identifier: "AppBlockBuilderAppBlockAssociation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppBlockBuilderAppBlockAssociation: S.optional(AppBlockBuilderAppBlockAssociation),
        }),
      ).annotate({
        identifier: "AssociateAppBlockBuilderAppBlockResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FleetName: S.optional(S.String), ApplicationArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateApplicationFleetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ FleetName: S.optional(S.String), ApplicationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ApplicationFleetAssociation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ApplicationFleetAssociation: S.optional(ApplicationFleetAssociation) }),
      ).annotate({
        identifier: "AssociateApplicationFleetResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          EntitlementName: S.optional(S.String),
          ApplicationIdentifier: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateApplicationToEntitlementRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateApplicationToEntitlementResult",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FleetName: S.optional(S.String), StackName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AssociateFleetRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateFleetResult",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ImageBuilderName: S.optional(S.String),
          SoftwareNames: S.optional(StringList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateSoftwareToImageBuilderRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          UserName: S.optional(SensitiveString),
          AuthenticationType: S.optional(AuthenticationType),
          SendEmailNotification: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "UserStackAssociation" });
    case 5:
      return S.Array(UserStackAssociation);
    case 6:
      return S.suspend(() =>
        S.Struct({ UserStackAssociations: S.optional(UserStackAssociationList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchAssociateUserStackRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserStackAssociation: S.optional(UserStackAssociation),
          ErrorCode: S.optional(UserStackAssociationErrorCode),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UserStackAssociationError",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(UserStackAssociationError);
    case 1:
      return S.suspend(() =>
        S.Struct({ errors: S.optional(UserStackAssociationErrorList) }),
      ).annotate({
        identifier: "BatchAssociateUserStackResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ UserStackAssociations: S.optional(UserStackAssociationList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDisassociateUserStackRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceImageName: S.optional(S.String),
          DestinationImageName: S.optional(S.String),
          DestinationRegion: S.optional(S.String),
          DestinationImageDescription: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CopyImageRequest" });
    case 4:
      return S.suspend(() => S.Struct({ DestinationImageName: S.optional(S.String) })).annotate({
        identifier: "CopyImageResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3Bucket: S.optional(S.String), S3Key: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ScriptS3Location: S.optional(S3Location),
          ExecutablePath: S.optional(S.String),
          ExecutableParameters: S.optional(S.String),
          TimeoutInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ScriptDetails" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          SourceS3Location: S.optional(S3Location),
          SetupScriptDetails: S.optional(ScriptDetails),
          Tags: S.optional(Tags),
          PostSetupScriptDetails: S.optional(ScriptDetails),
          PackagingType: S.optional(PackagingType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAppBlockRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetails" });
    case 2:
      return S.Array(ErrorDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          SourceS3Location: S.optional(S3Location),
          SetupScriptDetails: S.optional(ScriptDetails),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PostSetupScriptDetails: S.optional(ScriptDetails),
          PackagingType: S.optional(PackagingType),
          State: S.optional(AppBlockState),
          AppBlockErrors: S.optional(ErrorDetailsList),
        }),
      ).annotate({ identifier: "AppBlock" });
    case 4:
      return S.suspend(() => S.Struct({ AppBlock: S.optional(AppBlock) })).annotate({
        identifier: "CreateAppBlockResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(SubnetIdList),
          SecurityGroupIds: S.optional(SecurityGroupIdList),
        }),
      ).annotate({ identifier: "VpcConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({ EndpointType: S.optional(AccessEndpointType), VpceId: S.optional(S.String) }),
      ).annotate({ identifier: "AccessEndpoint" });
    case 7:
      return S.Array(AccessEndpoint);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Tags: S.optional(Tags),
          Platform: S.optional(AppBlockBuilderPlatformType),
          InstanceType: S.optional(S.String),
          VpcConfig: S.optional(VpcConfig),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          IamRoleArn: S.optional(S.String),
          AccessEndpoints: S.optional(AccessEndpointList),
          DisableIMDSV1: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAppBlockBuilderRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ErrorCode: S.optional(FleetErrorCode),
          ErrorMessage: S.optional(S.String),
          ErrorTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ResourceError" });
    case 2:
      return S.Array(ResourceError);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(AppBlockBuilderStateChangeReasonCode),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AppBlockBuilderStateChangeReason",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(S.String),
          Platform: S.optional(AppBlockBuilderPlatformType),
          InstanceType: S.optional(S.String),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          IamRoleArn: S.optional(S.String),
          VpcConfig: S.optional(VpcConfig),
          State: S.optional(AppBlockBuilderState),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AppBlockBuilderErrors: S.optional(ResourceErrors),
          StateChangeReason: S.optional(AppBlockBuilderStateChangeReason),
          AccessEndpoints: S.optional(AccessEndpointList),
          DisableIMDSV1: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AppBlockBuilder" });
    case 5:
      return S.suspend(() => S.Struct({ AppBlockBuilder: S.optional(AppBlockBuilder) })).annotate({
        identifier: "CreateAppBlockBuilderResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppBlockBuilderName: S.optional(S.String),
          Validity: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAppBlockBuilderStreamingURLRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StreamingURL: S.optional(S.String),
          Expires: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CreateAppBlockBuilderStreamingURLResult",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PlatformType);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(S.String),
          IconS3Location: S.optional(S3Location),
          LaunchPath: S.optional(S.String),
          WorkingDirectory: S.optional(S.String),
          LaunchParameters: S.optional(S.String),
          Platforms: S.optional(Platforms),
          InstanceFamilies: S.optional(StringList),
          AppBlockArn: S.optional(S.String),
          Tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DisplayName: S.optional(S.String),
          IconURL: S.optional(S.String),
          LaunchPath: S.optional(S.String),
          LaunchParameters: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          Metadata: S.optional(Metadata),
          WorkingDirectory: S.optional(S.String),
          Description: S.optional(S.String),
          Arn: S.optional(S.String),
          AppBlockArn: S.optional(S.String),
          IconS3Location: S.optional(S3Location),
          Platforms: S.optional(Platforms),
          InstanceFamilies: S.optional(StringList),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Application" });
    case 3:
      return S.suspend(() => S.Struct({ Application: S.optional(Application) })).annotate({
        identifier: "CreateApplicationResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountName: S.optional(SensitiveString),
          AccountPassword: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ServiceAccountCredentials",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(CertificateBasedAuthStatus),
          CertificateAuthorityArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CertificateBasedAuthProperties",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryName: S.optional(S.String),
          OrganizationalUnitDistinguishedNames: S.optional(
            OrganizationalUnitDistinguishedNamesList,
          ),
          ServiceAccountCredentials: S.optional(ServiceAccountCredentials),
          CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateDirectoryConfigRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryName: S.optional(S.String),
          OrganizationalUnitDistinguishedNames: S.optional(
            OrganizationalUnitDistinguishedNamesList,
          ),
          ServiceAccountCredentials: S.optional(ServiceAccountCredentials),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties),
        }),
      ).annotate({ identifier: "DirectoryConfig" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DirectoryConfig: S.optional(DirectoryConfig) })).annotate({
        identifier: "CreateDirectoryConfigResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "EntitlementAttribute" });
    case 2:
      return S.Array(EntitlementAttribute);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          StackName: S.optional(S.String),
          Description: S.optional(S.String),
          AppVisibility: S.optional(AppVisibility),
          Attributes: S.optional(EntitlementAttributeList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateEntitlementRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          StackName: S.optional(S.String),
          Description: S.optional(S.String),
          AppVisibility: S.optional(AppVisibility),
          Attributes: S.optional(EntitlementAttributeList),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Entitlement" });
    case 5:
      return S.suspend(() => S.Struct({ Entitlement: S.optional(Entitlement) })).annotate({
        identifier: "CreateEntitlementResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ImageName: S.optional(S.String),
          AmiName: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          TagSpecifications: S.optional(Tags),
          AmiDescription: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateExportImageTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.optional(S.String),
          ImageArn: S.optional(S.String),
          AmiName: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AmiDescription: S.optional(S.String),
          State: S.optional(ExportImageTaskState),
          AmiId: S.optional(S.String),
          TagSpecifications: S.optional(Tags),
          ErrorDetails: S.optional(ErrorDetailsList),
        }),
      ).annotate({ identifier: "ExportImageTask" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ExportImageTask: S.optional(ExportImageTask) })).annotate({
        identifier: "CreateExportImageTaskResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DesiredInstances: S.optional(S.Number), DesiredSessions: S.optional(S.Number) }),
      ).annotate({ identifier: "ComputeCapacity" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryName: S.optional(S.String),
          OrganizationalUnitDistinguishedName: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainJoinInfo" });
    case 3:
      return S.suspend(() => S.Struct({ VolumeSizeInGb: S.optional(S.Number) })).annotate({
        identifier: "VolumeConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ImageName: S.optional(S.String),
          ImageArn: S.optional(S.String),
          InstanceType: S.optional(S.String),
          FleetType: S.optional(FleetType),
          ComputeCapacity: S.optional(ComputeCapacity),
          VpcConfig: S.optional(VpcConfig),
          MaxUserDurationInSeconds: S.optional(S.Number),
          DisconnectTimeoutInSeconds: S.optional(S.Number),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          DomainJoinInfo: S.optional(DomainJoinInfo),
          Tags: S.optional(Tags),
          IdleDisconnectTimeoutInSeconds: S.optional(S.Number),
          IamRoleArn: S.optional(S.String),
          StreamView: S.optional(StreamView),
          Platform: S.optional(PlatformType),
          MaxConcurrentSessions: S.optional(S.Number),
          UsbDeviceFilterStrings: S.optional(UsbDeviceFilterStrings),
          SessionScriptS3Location: S.optional(S3Location),
          MaxSessionsPerInstance: S.optional(S.Number),
          RootVolumeConfig: S.optional(VolumeConfig),
          DisableIMDSV1: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateFleetRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Desired: S.optional(S.Number),
          Running: S.optional(S.Number),
          InUse: S.optional(S.Number),
          Available: S.optional(S.Number),
          DesiredUserSessions: S.optional(S.Number),
          AvailableUserSessions: S.optional(S.Number),
          ActiveUserSessions: S.optional(S.Number),
          ActualUserSessions: S.optional(S.Number),
          Draining: S.optional(S.Number),
          DrainModeActiveUserSessions: S.optional(S.Number),
          DrainModeUnusedUserSessions: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ComputeCapacityStatus" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(FleetErrorCode), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "FleetError" });
    case 7:
      return S.Array(FleetError);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(S.String),
          ImageName: S.optional(S.String),
          ImageArn: S.optional(S.String),
          InstanceType: S.optional(S.String),
          FleetType: S.optional(FleetType),
          ComputeCapacityStatus: S.optional(ComputeCapacityStatus),
          MaxUserDurationInSeconds: S.optional(S.Number),
          DisconnectTimeoutInSeconds: S.optional(S.Number),
          State: S.optional(FleetState),
          VpcConfig: S.optional(VpcConfig),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FleetErrors: S.optional(FleetErrors),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          DomainJoinInfo: S.optional(DomainJoinInfo),
          IdleDisconnectTimeoutInSeconds: S.optional(S.Number),
          IamRoleArn: S.optional(S.String),
          StreamView: S.optional(StreamView),
          Platform: S.optional(PlatformType),
          MaxConcurrentSessions: S.optional(S.Number),
          UsbDeviceFilterStrings: S.optional(UsbDeviceFilterStrings),
          SessionScriptS3Location: S.optional(S3Location),
          MaxSessionsPerInstance: S.optional(S.Number),
          RootVolumeConfig: S.optional(VolumeConfig),
          DisableIMDSV1: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Fleet" });
    case 1:
      return S.suspend(() => S.Struct({ Fleet: S.optional(Fleet) })).annotate({
        identifier: "CreateFleetResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ImageName: S.optional(S.String),
          ImageArn: S.optional(S.String),
          InstanceType: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          VpcConfig: S.optional(VpcConfig),
          IamRoleArn: S.optional(S.String),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          DomainJoinInfo: S.optional(DomainJoinInfo),
          AppstreamAgentVersion: S.optional(S.String),
          Tags: S.optional(Tags),
          AccessEndpoints: S.optional(AccessEndpointList),
          RootVolumeConfig: S.optional(VolumeConfig),
          SoftwaresToInstall: S.optional(StringList),
          SoftwaresToUninstall: S.optional(StringList),
          DisableIMDSV1: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateImageBuilderRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(ImageBuilderStateChangeReasonCode),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ImageBuilderStateChangeReason",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EniPrivateIpAddress: S.optional(S.String),
          EniIpv6Addresses: S.optional(StringList),
          EniId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NetworkAccessConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          ImageArn: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          VpcConfig: S.optional(VpcConfig),
          InstanceType: S.optional(S.String),
          Platform: S.optional(PlatformType),
          IamRoleArn: S.optional(S.String),
          State: S.optional(ImageBuilderState),
          StateChangeReason: S.optional(ImageBuilderStateChangeReason),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          DomainJoinInfo: S.optional(DomainJoinInfo),
          NetworkAccessConfiguration: S.optional(NetworkAccessConfiguration),
          ImageBuilderErrors: S.optional(ResourceErrors),
          AppstreamAgentVersion: S.optional(S.String),
          AccessEndpoints: S.optional(AccessEndpointList),
          RootVolumeConfig: S.optional(VolumeConfig),
          LatestAppstreamAgentVersion: S.optional(LatestAppstreamAgentVersion),
          DisableIMDSV1: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ImageBuilder" });
    case 6:
      return S.suspend(() => S.Struct({ ImageBuilder: S.optional(ImageBuilder) })).annotate({
        identifier: "CreateImageBuilderResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Validity: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateImageBuilderStreamingURLRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ IntendedInstanceType: S.optional(S.String) })).annotate({
        identifier: "RuntimeValidationConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DisplayName: S.optional(S.String),
          AbsoluteAppPath: S.optional(SensitiveString),
          AbsoluteIconPath: S.optional(SensitiveString),
          AbsoluteManifestPath: S.optional(SensitiveString),
          WorkingDirectory: S.optional(SensitiveString),
          LaunchParameters: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ApplicationConfig" });
    case 2:
      return S.Array(ApplicationConfig);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SourceAmiId: S.optional(S.String),
          WorkspaceImageId: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Tags: S.optional(Tags),
          RuntimeValidationConfig: S.optional(RuntimeValidationConfig),
          AgentSoftwareVersion: S.optional(AgentSoftwareVersion),
          AppCatalogConfig: S.optional(AppCatalogConfig),
          DryRun: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateImportedImageRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(ImageStateChangeReasonCode), Message: S.optional(S.String) }),
      ).annotate({ identifier: "ImageStateChangeReason" });
    case 5:
      return S.Array(Application);
    case 6:
      return S.suspend(() =>
        S.Struct({ allowFleet: S.optional(S.Boolean), allowImageBuilder: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ImagePermissions" });
    case 7:
      return S.suspend(() => S.Struct({ nvidiaGridDriverVersion: S.optional(S.String) })).annotate({
        identifier: "ImageSoftwareMetadata",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          BaseImageArn: S.optional(S.String),
          DisplayName: S.optional(S.String),
          State: S.optional(ImageState),
          Visibility: S.optional(VisibilityType),
          ImageBuilderSupported: S.optional(S.Boolean),
          ImageBuilderName: S.optional(S.String),
          Platform: S.optional(PlatformType),
          Description: S.optional(S.String),
          StateChangeReason: S.optional(ImageStateChangeReason),
          Applications: S.optional(Applications),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PublicBaseImageReleasedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AppstreamAgentVersion: S.optional(S.String),
          ImagePermissions: S.optional(ImagePermissions),
          ImageErrors: S.optional(ResourceErrors),
          LatestAppstreamAgentVersion: S.optional(LatestAppstreamAgentVersion),
          SupportedInstanceFamilies: S.optional(StringList),
          DynamicAppProvidersEnabled: S.optional(DynamicAppProvidersEnabled),
          ImageSharedWithOthers: S.optional(ImageSharedWithOthers),
          ManagedSoftwareIncluded: S.optional(S.Boolean),
          ImageType: S.optional(ImageType),
          ImageSoftwareMetadata: S.optional(ImageSoftwareMetadata),
        }),
      ).annotate({ identifier: "Image" });
    case 1:
      return S.suspend(() => S.Struct({ Image: S.optional(Image) })).annotate({
        identifier: "CreateImportedImageResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorType: S.optional(StorageConnectorType),
          ResourceIdentifier: S.optional(S.String),
          Domains: S.optional(DomainList),
          DomainsRequireAdminConsent: S.optional(DomainList),
        }),
      ).annotate({ identifier: "StorageConnector" });
    case 3:
      return S.Array(StorageConnector);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(Action),
          Permission: S.optional(Permission),
          MaximumLength: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UserSetting" });
    case 5:
      return S.Array(UserSetting);
    case 6:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), SettingsGroup: S.optional(S.String) }),
      ).annotate({ identifier: "ApplicationSettings" });
    case 7:
      return S.suspend(() =>
        S.Struct({ PreferredProtocol: S.optional(PreferredProtocol) }),
      ).annotate({
        identifier: "StreamingExperienceSettings",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          AllowedUrls: S.optional(UrlPatternList),
          DeniedUrls: S.optional(UrlPatternList),
        }),
      ).annotate({ identifier: "UrlRedirectionConfig" });
    case 1:
      return S.suspend(() => S.Struct({ HostToClient: S.optional(UrlRedirectionConfig) })).annotate(
        { identifier: "ContentRedirection" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ AgentAction: S.optional(AgentAction), Permission: S.optional(Permission) }),
      ).annotate({ identifier: "AgentAccessSetting" });
    case 3:
      return S.Array(AgentAccessSetting);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Settings: S.optional(AgentAccessSettingList),
          S3BucketArn: S.optional(S.String),
          ScreenshotsUploadEnabled: S.optional(S.Boolean),
          ScreenResolution: S.optional(ScreenResolution),
          ScreenImageFormat: S.optional(ScreenImageFormat),
          UserControlMode: S.optional(UserControlMode),
        }),
      ).annotate({ identifier: "AgentAccessConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          StorageConnectors: S.optional(StorageConnectorList),
          RedirectURL: S.optional(S.String),
          FeedbackURL: S.optional(S.String),
          UserSettings: S.optional(UserSettingList),
          ApplicationSettings: S.optional(ApplicationSettings),
          Tags: S.optional(Tags),
          AccessEndpoints: S.optional(AccessEndpointList),
          EmbedHostDomains: S.optional(EmbedHostDomains),
          StreamingExperienceSettings: S.optional(StreamingExperienceSettings),
          ContentRedirection: S.optional(ContentRedirection),
          AgentAccessConfig: S.optional(AgentAccessConfig),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateStackRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          SettingsGroup: S.optional(S.String),
          S3BucketName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ApplicationSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StorageConnectors: S.optional(StorageConnectorList),
          RedirectURL: S.optional(S.String),
          FeedbackURL: S.optional(S.String),
          StackErrors: S.optional(StackErrors),
          UserSettings: S.optional(UserSettingList),
          ApplicationSettings: S.optional(ApplicationSettingsResponse),
          AccessEndpoints: S.optional(AccessEndpointList),
          EmbedHostDomains: S.optional(EmbedHostDomains),
          StreamingExperienceSettings: S.optional(StreamingExperienceSettings),
          ContentRedirection: S.optional(ContentRedirection),
          AgentAccessConfig: S.optional(AgentAccessConfig),
        }),
      ).annotate({ identifier: "Stack" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Stack: S.optional(Stack) })).annotate({
        identifier: "CreateStackResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          FleetName: S.optional(S.String),
          UserId: S.optional(S.String),
          ApplicationId: S.optional(S.String),
          Validity: S.optional(S.Number),
          SessionContext: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateStreamingURLRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StreamingURL: S.optional(S.String),
          Expires: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CreateStreamingURLResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DisplayName: S.optional(S.String), FooterLinkURL: S.optional(S.String) }),
      ).annotate({ identifier: "ThemeFooterLink" });
    case 4:
      return S.Array(ThemeFooterLink);
    case 5:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          FooterLinks: S.optional(ThemeFooterLinks),
          TitleText: S.optional(S.String),
          ThemeStyling: S.optional(ThemeStyling),
          OrganizationLogoS3Location: S.optional(S3Location),
          FaviconS3Location: S.optional(S3Location),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateThemeForStackRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          State: S.optional(ThemeState),
          ThemeTitleText: S.optional(S.String),
          ThemeStyling: S.optional(ThemeStyling),
          ThemeFooterLinks: S.optional(ThemeFooterLinks),
          ThemeOrganizationLogoURL: S.optional(S.String),
          ThemeFaviconURL: S.optional(S.String),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Theme" });
    case 7:
      return S.suspend(() => S.Struct({ Theme: S.optional(Theme) })).annotate({
        identifier: "CreateThemeForStackResult",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          existingImageName: S.optional(S.String),
          newImageName: S.optional(S.String),
          newImageDescription: S.optional(S.String),
          newImageDisplayName: S.optional(S.String),
          newImageTags: S.optional(Tags),
          dryRun: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateUpdatedImageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ image: S.optional(Image), canUpdateImage: S.optional(S.Boolean) }),
      ).annotate({ identifier: "CreateUpdatedImageResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateUsageReportSubscriptionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ S3BucketName: S.optional(S.String), Schedule: S.optional(UsageReportSchedule) }),
      ).annotate({
        identifier: "CreateUsageReportSubscriptionResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(SensitiveString),
          MessageAction: S.optional(MessageAction),
          FirstName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          AuthenticationType: S.optional(AuthenticationType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUserRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAppBlockRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAppBlockBuilderRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DirectoryName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDirectoryConfigRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), StackName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEntitlementRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteFleetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteImageRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Image: S.optional(Image) })).annotate({
        identifier: "DeleteImageResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteImageBuilderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), SharedAccountId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteImagePermissionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteStackRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteThemeForStackRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteUsageReportSubscriptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(SensitiveString),
          AuthenticationType: S.optional(AuthenticationType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteUserRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppBlockArn: S.optional(S.String),
          AppBlockBuilderName: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeAppBlockBuilderAppBlockAssociationsRequest",
      });
    case 4:
      return S.Array(AppBlockBuilderAppBlockAssociation);
    case 5:
      return S.suspend(() =>
        S.Struct({
          AppBlockBuilderAppBlockAssociations: S.optional(AppBlockBuilderAppBlockAssociationsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAppBlockBuilderAppBlockAssociationsResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Names: S.optional(StringList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeAppBlockBuildersRequest",
      });
    case 7:
      return S.Array(AppBlockBuilder);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AppBlockBuilders: S.optional(AppBlockBuilderList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAppBlockBuildersResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arns: S.optional(ArnList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeAppBlocksRequest" });
    case 2:
      return S.Array(AppBlock);
    case 3:
      return S.suspend(() =>
        S.Struct({ AppBlocks: S.optional(AppBlocks), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeAppBlocksResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FleetName: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationFleetAssociationsRequest",
      });
    case 5:
      return S.Array(ApplicationFleetAssociation);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationFleetAssociations: S.optional(ApplicationFleetAssociationList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeApplicationFleetAssociationsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arns: S.optional(ArnList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationsRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Applications: S.optional(Applications), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeApplicationsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BillingPeriod: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeAppLicenseUsageRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UserArn: S.optional(S.String),
          BillingPeriod: S.optional(S.String),
          OwnerAWSAccountId: S.optional(S.String),
          SubscriptionFirstUsedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubscriptionLastUsedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LicenseType: S.optional(S.String),
          UserId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AdminAppLicenseUsageRecord",
      });
    case 3:
      return S.Array(AdminAppLicenseUsageRecord);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppLicenseUsages: S.optional(AdminAppLicenseUsageList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAppLicenseUsageResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryNames: S.optional(DirectoryNameList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeDirectoryConfigsRequest",
      });
    case 6:
      return S.Array(DirectoryConfig);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryConfigs: S.optional(DirectoryConfigList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeDirectoryConfigsResult",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          StackName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEntitlementsRequest",
      });
    case 1:
      return S.Array(Entitlement);
    case 2:
      return S.suspend(() =>
        S.Struct({ Entitlements: S.optional(EntitlementList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeEntitlementsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Names: S.optional(StringList), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeFleetsRequest" });
    case 4:
      return S.Array(Fleet);
    case 5:
      return S.suspend(() =>
        S.Struct({ Fleets: S.optional(FleetList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeFleetsResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Names: S.optional(StringList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImageBuildersRequest",
      });
    case 7:
      return S.Array(ImageBuilder);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ImageBuilders: S.optional(ImageBuilderList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeImageBuildersResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          SharedAwsAccountIds: S.optional(AwsAccountIdList),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImagePermissionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sharedAccountId: S.optional(S.String),
          imagePermissions: S.optional(ImagePermissions),
        }),
      ).annotate({ identifier: "SharedImagePermissions" });
    case 3:
      return S.Array(SharedImagePermissions);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SharedImagePermissionsList: S.optional(SharedImagePermissionsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeImagePermissionsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Names: S.optional(StringList),
          Arns: S.optional(ArnList),
          Type: S.optional(VisibilityType),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeImagesRequest" });
    case 6:
      return S.Array(Image);
    case 7:
      return S.suspend(() =>
        S.Struct({ Images: S.optional(ImageList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeImagesResult" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          FleetName: S.optional(S.String),
          UserId: S.optional(S.String),
          NextToken: S.optional(S.String),
          Limit: S.optional(S.Number),
          AuthenticationType: S.optional(AuthenticationType),
          InstanceId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSessionsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          UserId: S.optional(S.String),
          StackName: S.optional(S.String),
          FleetName: S.optional(S.String),
          State: S.optional(SessionState),
          ConnectionState: S.optional(SessionConnectionState),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AuthenticationType: S.optional(AuthenticationType),
          NetworkAccessConfiguration: S.optional(NetworkAccessConfiguration),
          InstanceId: S.optional(S.String),
          InstanceDrainStatus: S.optional(InstanceDrainStatus),
        }),
      ).annotate({ identifier: "Session" });
    case 2:
      return S.Array(Session);
    case 3:
      return S.suspend(() =>
        S.Struct({ Sessions: S.optional(SessionList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeSessionsResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AssociatedResource: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeSoftwareAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SoftwareName: S.optional(S.String),
          Status: S.optional(SoftwareDeploymentStatus),
          DeploymentError: S.optional(ErrorDetailsList),
        }),
      ).annotate({ identifier: "SoftwareAssociations" });
    case 6:
      return S.Array(SoftwareAssociations);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssociatedResource: S.optional(S.String),
          SoftwareAssociations: S.optional(SoftwareAssociationsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeSoftwareAssociationsResult",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Names: S.optional(StringList), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeStacksRequest" });
    case 1:
      return S.Array(Stack);
    case 2:
      return S.suspend(() =>
        S.Struct({ Stacks: S.optional(StackList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeStacksResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeThemeForStackRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeUsageReportSubscriptionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ErrorCode: S.optional(UsageReportExecutionErrorCode),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LastReportGenerationExecutionError",
      });
    case 6:
      return S.Array(LastReportGenerationExecutionError);
    case 7:
      return S.suspend(() =>
        S.Struct({
          S3BucketName: S.optional(S.String),
          Schedule: S.optional(UsageReportSchedule),
          LastGeneratedReportDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubscriptionErrors: S.optional(LastReportGenerationExecutionErrors),
        }),
      ).annotate({ identifier: "UsageReportSubscription" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.Array(UsageReportSubscription);
    case 1:
      return S.suspend(() =>
        S.Struct({
          UsageReportSubscriptions: S.optional(UsageReportSubscriptionList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeUsageReportSubscriptionsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AuthenticationType: S.optional(AuthenticationType),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeUsersRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          UserName: S.optional(SensitiveString),
          Enabled: S.optional(S.Boolean),
          Status: S.optional(S.String),
          FirstName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          CreatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AuthenticationType: S.optional(AuthenticationType),
        }),
      ).annotate({ identifier: "User" });
    case 4:
      return S.Array(User);
    case 5:
      return S.suspend(() =>
        S.Struct({ Users: S.optional(UserList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeUsersResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          UserName: S.optional(SensitiveString),
          AuthenticationType: S.optional(AuthenticationType),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeUserStackAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserStackAssociations: S.optional(UserStackAssociationList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeUserStackAssociationsResult",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(SensitiveString),
          AuthenticationType: S.optional(AuthenticationType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DisableUserRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppBlockArn: S.optional(S.String),
          AppBlockBuilderName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateAppBlockBuilderAppBlockRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FleetName: S.optional(S.String), ApplicationArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateApplicationFleetRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          EntitlementName: S.optional(S.String),
          ApplicationIdentifier: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateApplicationFromEntitlementRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ FleetName: S.optional(S.String), StackName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DisassociateFleetRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ImageBuilderName: S.optional(S.String),
          SoftwareNames: S.optional(StringList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateSoftwareFromImageBuilderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ SessionId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DrainSessionInstanceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(SensitiveString),
          AuthenticationType: S.optional(AuthenticationType),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableUserRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SessionId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ExpireSessionRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ TaskId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetExportImageTaskRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ExportImageTask: S.optional(ExportImageTask) })).annotate({
        identifier: "GetExportImageTaskResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ StackName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAssociatedFleetsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Names: S.optional(StringList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAssociatedFleetsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ FleetName: S.optional(S.String), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAssociatedStacksRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          EntitlementName: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEntitledApplicationsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ ApplicationIdentifier: S.optional(S.String) })).annotate({
        identifier: "EntitledApplication",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EntitledApplication);
    case 1:
      return S.suspend(() =>
        S.Struct({
          EntitledApplications: S.optional(EntitledApplicationList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEntitledApplicationsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(FilterValues) }),
      ).annotate({ identifier: "Filter" });
    case 3:
      return S.Array(Filter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(Filters),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListExportImageTasksRequest",
      });
    case 5:
      return S.Array(ExportImageTask);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ExportImageTasks: S.optional(ExportImageTasks),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListExportImageTasksResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartAppBlockBuilderRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartFleetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), AppstreamAgentVersion: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartImageBuilderRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ImageBuilderName: S.optional(S.String),
          RetryFailedDeployments: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartSoftwareDeploymentToImageBuilderRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopAppBlockBuilderRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopFleetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopImageBuilderRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(Tags) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), TagKeys: S.optional(TagKeyList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Platform: S.optional(PlatformType),
          InstanceType: S.optional(S.String),
          VpcConfig: S.optional(VpcConfig),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          IamRoleArn: S.optional(S.String),
          AccessEndpoints: S.optional(AccessEndpointList),
          AttributesToDelete: S.optional(AppBlockBuilderAttributes),
          DisableIMDSV1: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateAppBlockBuilderRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(S.String),
          IconS3Location: S.optional(S3Location),
          LaunchPath: S.optional(S.String),
          WorkingDirectory: S.optional(S.String),
          LaunchParameters: S.optional(S.String),
          AppBlockArn: S.optional(S.String),
          AttributesToDelete: S.optional(ApplicationAttributes),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DirectoryName: S.optional(S.String),
          OrganizationalUnitDistinguishedNames: S.optional(
            OrganizationalUnitDistinguishedNamesList,
          ),
          ServiceAccountCredentials: S.optional(ServiceAccountCredentials),
          CertificateBasedAuthProperties: S.optional(CertificateBasedAuthProperties),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDirectoryConfigRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          StackName: S.optional(S.String),
          Description: S.optional(S.String),
          AppVisibility: S.optional(AppVisibility),
          Attributes: S.optional(EntitlementAttributeList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEntitlementRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ImageName: S.optional(S.String),
          ImageArn: S.optional(S.String),
          Name: S.optional(S.String),
          InstanceType: S.optional(S.String),
          ComputeCapacity: S.optional(ComputeCapacity),
          VpcConfig: S.optional(VpcConfig),
          MaxUserDurationInSeconds: S.optional(S.Number),
          DisconnectTimeoutInSeconds: S.optional(S.Number),
          DeleteVpcConfig: S.optional(S.Boolean),
          Description: S.optional(S.String),
          DisplayName: S.optional(S.String),
          EnableDefaultInternetAccess: S.optional(S.Boolean),
          DomainJoinInfo: S.optional(DomainJoinInfo),
          IdleDisconnectTimeoutInSeconds: S.optional(S.Number),
          AttributesToDelete: S.optional(FleetAttributes),
          IamRoleArn: S.optional(S.String),
          StreamView: S.optional(StreamView),
          Platform: S.optional(PlatformType),
          MaxConcurrentSessions: S.optional(S.Number),
          UsbDeviceFilterStrings: S.optional(UsbDeviceFilterStrings),
          SessionScriptS3Location: S.optional(S3Location),
          MaxSessionsPerInstance: S.optional(S.Number),
          RootVolumeConfig: S.optional(VolumeConfig),
          DisableIMDSV1: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateFleetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SharedAccountId: S.optional(S.String),
          ImagePermissions: S.optional(ImagePermissions),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateImagePermissionsRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Settings: S.optional(AgentAccessSettingList),
          S3BucketArn: S.optional(S.String),
          ScreenshotsUploadEnabled: S.optional(S.Boolean),
          ScreenResolution: S.optional(ScreenResolution),
          ScreenImageFormat: S.optional(ScreenImageFormat),
          UserControlMode: S.optional(UserControlMode),
        }),
      ).annotate({
        identifier: "AgentAccessConfigForUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DisplayName: S.optional(S.String),
          Description: S.optional(S.String),
          Name: S.optional(S.String),
          StorageConnectors: S.optional(StorageConnectorList),
          DeleteStorageConnectors: S.optional(S.Boolean),
          RedirectURL: S.optional(S.String),
          FeedbackURL: S.optional(S.String),
          AttributesToDelete: S.optional(StackAttributes),
          UserSettings: S.optional(UserSettingList),
          ApplicationSettings: S.optional(ApplicationSettings),
          AccessEndpoints: S.optional(AccessEndpointList),
          EmbedHostDomains: S.optional(EmbedHostDomains),
          StreamingExperienceSettings: S.optional(StreamingExperienceSettings),
          ContentRedirection: S.optional(ContentRedirection),
          AgentAccessConfig: S.optional(AgentAccessConfigForUpdate),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateStackRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StackName: S.optional(S.String),
          FooterLinks: S.optional(ThemeFooterLinks),
          TitleText: S.optional(S.String),
          ThemeStyling: S.optional(ThemeStyling),
          OrganizationLogoS3Location: S.optional(S3Location),
          FaviconS3Location: S.optional(S3Location),
          State: S.optional(ThemeState),
          AttributesToDelete: S.optional(ThemeAttributes),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateThemeForStackRequest",
      });
  }
}
