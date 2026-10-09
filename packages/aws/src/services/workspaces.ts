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
const ns = /*@__PURE__*/ T.XmlNamespace("http://workspaces.amazonaws.com/api/v1");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "WorkSpaces",
  serviceShapeName: "WorkspacesService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "workspaces" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-04-08");
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
              `https://workspaces-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://workspaces-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://workspaces.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://workspaces.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class ApplicationNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<ApplicationNotSupportedException>()(
    "ApplicationNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ComputeNotCompatibleException
  extends /*@__PURE__*/ S.TaggedError<ComputeNotCompatibleException>()(
    "ComputeNotCompatibleException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class IncompatibleApplicationsException
  extends /*@__PURE__*/ S.TaggedError<IncompatibleApplicationsException>()(
    "IncompatibleApplicationsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()("InternalServerException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidParameterCombinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterCombinationException>()(
    "InvalidParameterCombinationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidParameterValuesException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValuesException>()(
    "InvalidParameterValuesException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidResourceStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidResourceStateException>()(
    "InvalidResourceStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class OperatingSystemNotCompatibleException
  extends /*@__PURE__*/ S.TaggedError<OperatingSystemNotCompatibleException>()(
    "OperatingSystemNotCompatibleException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class OperationInProgressException
  extends /*@__PURE__*/ S.TaggedError<OperationInProgressException>()(
    "OperationInProgressException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class OperationNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<OperationNotSupportedException>()(
    "OperationNotSupportedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ).pipe(C.withAlreadyExistsError) {}
export class ResourceAssociatedException
  extends /*@__PURE__*/ S.TaggedError<ResourceAssociatedException>()(
    "ResourceAssociatedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ResourceCreationFailedException
  extends /*@__PURE__*/ S.TaggedError<ResourceCreationFailedException>()(
    "ResourceCreationFailedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()("ResourceInUseException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    ResourceId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    ResourceId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ResourceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ResourceUnavailableException>()(
    "ResourceUnavailableException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class UnsupportedNetworkConfigurationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedNetworkConfigurationException>()(
    "UnsupportedNetworkConfigurationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class UnsupportedWorkspaceConfigurationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedWorkspaceConfigurationException>()(
    "UnsupportedWorkspaceConfigurationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class WorkspacesDefaultRoleNotFoundException
  extends /*@__PURE__*/ S.TaggedError<WorkspacesDefaultRoleNotFoundException>()(
    "WorkspacesDefaultRoleNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export type LinkId = string;
export type ClientToken = string;
export interface AcceptAccountLinkInvitationRequest {
  LinkId: string;
  ClientToken?: string;
}
export type AccountLinkStatusEnum =
  | "LINKED"
  | "LINKING_FAILED"
  | "LINK_NOT_FOUND"
  | "PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT"
  | "REJECTED"
  | (string & {});
export type AwsAccount = string;
export interface AccountLink {
  AccountLinkId?: string;
  AccountLinkStatus?: AccountLinkStatusEnum;
  SourceAccountId?: string;
  TargetAccountId?: string;
}
export interface AcceptAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export type ConnectionAliasId = string;
export type NonEmptyString = string;
export interface AssociateConnectionAliasRequest {
  AliasId: string;
  ResourceId: string;
}
export type ConnectionIdentifier = string;
export interface AssociateConnectionAliasResult {
  ConnectionIdentifier?: string;
}
export type DirectoryId = string;
export type IpGroupId = string;
export type IpGroupIdList = string[];
export interface AssociateIpGroupsRequest {
  DirectoryId: string;
  GroupIds: string[];
}
export interface AssociateIpGroupsResult {}
export type WorkspaceId = string;
export type WorkSpaceApplicationId = string;
export interface AssociateWorkspaceApplicationRequest {
  WorkspaceId: string;
  ApplicationId: string;
}
export type WorkSpaceAssociatedResourceType = "APPLICATION" | (string & {});
export type AssociationState =
  | "PENDING_INSTALL"
  | "PENDING_INSTALL_DEPLOYMENT"
  | "PENDING_UNINSTALL"
  | "PENDING_UNINSTALL_DEPLOYMENT"
  | "INSTALLING"
  | "UNINSTALLING"
  | "ERROR"
  | "COMPLETED"
  | "REMOVED"
  | (string & {});
export type AssociationErrorCode =
  | "ValidationError.InsufficientDiskSpace"
  | "ValidationError.InsufficientMemory"
  | "ValidationError.UnsupportedOperatingSystem"
  | "DeploymentError.InternalServerError"
  | "DeploymentError.WorkspaceUnreachable"
  | "ValidationError.ApplicationOldVersionExists"
  | (string & {});
export type String2048 = string;
export interface AssociationStateReason {
  ErrorCode?: AssociationErrorCode;
  ErrorMessage?: string;
}
export interface WorkspaceResourceAssociation {
  AssociatedResourceId?: string;
  AssociatedResourceType?: WorkSpaceAssociatedResourceType;
  Created?: Date;
  LastUpdatedTime?: Date;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
  WorkspaceId?: string;
}
export interface AssociateWorkspaceApplicationResult {
  Association?: WorkspaceResourceAssociation;
}
export type IpRule = string;
export type IpRuleDesc = string;
export interface IpRuleItem {
  ipRule?: string;
  ruleDesc?: string;
}
export type IpRuleList = IpRuleItem[];
export interface AuthorizeIpRulesRequest {
  GroupId: string;
  UserRules: IpRuleItem[];
}
export interface AuthorizeIpRulesResult {}
export type WorkspaceImageName = string;
export type WorkspaceImageDescription = string;
export type WorkspaceImageId = string;
export type Region = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value?: string;
}
export type TagList = Tag[];
export interface CopyWorkspaceImageRequest {
  Name: string;
  Description?: string;
  SourceImageId: string;
  SourceRegion: string;
  Tags?: Tag[];
}
export interface CopyWorkspaceImageResult {
  ImageId?: string;
}
export interface CreateAccountLinkInvitationRequest {
  TargetAccountId: string;
  ClientToken?: string;
}
export interface CreateAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export type AddInName = string;
export type AddInUrl = string;
export interface CreateConnectClientAddInRequest {
  ResourceId: string;
  Name: string;
  URL: string;
}
export type AmazonUuid = string;
export interface CreateConnectClientAddInResult {
  AddInId?: string;
}
export type ConnectionString = string;
export interface CreateConnectionAliasRequest {
  ConnectionString: string;
  Tags?: Tag[];
}
export interface CreateConnectionAliasResult {
  AliasId?: string;
}
export type IpGroupName = string;
export type IpGroupDesc = string;
export interface CreateIpGroupRequest {
  GroupName: string;
  GroupDesc?: string;
  UserRules?: IpRuleItem[];
  Tags?: Tag[];
}
export interface CreateIpGroupResult {
  GroupId?: string;
}
export type VolumeEncryptionKey = string;
export type DataReplication = "NO_REPLICATION" | "PRIMARY_AS_SOURCE" | (string & {});
export interface StandbyWorkspace {
  PrimaryWorkspaceId: string;
  VolumeEncryptionKey?: string;
  DirectoryId: string;
  Tags?: Tag[];
  DataReplication?: DataReplication;
}
export type StandbyWorkspacesList = StandbyWorkspace[];
export interface CreateStandbyWorkspacesRequest {
  PrimaryRegion: string;
  StandbyWorkspaces: StandbyWorkspace[];
}
export type WorkspaceErrorCode = string;
export type Description = string;
export interface FailedCreateStandbyWorkspacesRequest {
  StandbyWorkspaceRequest?: StandbyWorkspace;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type FailedCreateStandbyWorkspacesRequestList = FailedCreateStandbyWorkspacesRequest[];
export type UserName = string;
export type WorkspaceState =
  | "PENDING"
  | "AVAILABLE"
  | "IMPAIRED"
  | "UNHEALTHY"
  | "REBOOTING"
  | "STARTING"
  | "REBUILDING"
  | "RESTORING"
  | "MAINTENANCE"
  | "ADMIN_MAINTENANCE"
  | "TERMINATING"
  | "TERMINATED"
  | "SUSPENDED"
  | "UPDATING"
  | "STOPPING"
  | "STOPPED"
  | "ERROR"
  | (string & {});
export interface PendingCreateStandbyWorkspacesRequest {
  UserName?: string;
  DirectoryId?: string;
  State?: WorkspaceState;
  WorkspaceId?: string;
}
export type PendingCreateStandbyWorkspacesRequestList = PendingCreateStandbyWorkspacesRequest[];
export interface CreateStandbyWorkspacesResult {
  FailedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[];
  PendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[];
}
export interface CreateTagsRequest {
  ResourceId: string;
  Tags: Tag[];
}
export interface CreateTagsResult {}
export interface CreateUpdatedWorkspaceImageRequest {
  Name: string;
  Description: string;
  SourceImageId: string;
  Tags?: Tag[];
}
export interface CreateUpdatedWorkspaceImageResult {
  ImageId?: string;
}
export type WorkspaceBundleName = string;
export type WorkspaceBundleDescription = string;
export type Compute =
  | "VALUE"
  | "STANDARD"
  | "PERFORMANCE"
  | "POWER"
  | "GRAPHICS"
  | "POWERPRO"
  | "GENERALPURPOSE_4XLARGE"
  | "GENERALPURPOSE_8XLARGE"
  | "GRAPHICSPRO"
  | "GRAPHICS_G4DN"
  | "GRAPHICSPRO_G4DN"
  | "GRAPHICS_G6_XLARGE"
  | "GRAPHICS_G6_2XLARGE"
  | "GRAPHICS_G6_4XLARGE"
  | "GRAPHICS_G6_8XLARGE"
  | "GRAPHICS_G6_16XLARGE"
  | "GRAPHICS_GR6_4XLARGE"
  | "GRAPHICS_GR6_8XLARGE"
  | "GRAPHICS_G6F_LARGE"
  | "GRAPHICS_G6F_XLARGE"
  | "GRAPHICS_G6F_2XLARGE"
  | "GRAPHICS_G6F_4XLARGE"
  | "GRAPHICS_GR6F_4XLARGE"
  | "GRAPHICS_G7_2XLARGE"
  | "GRAPHICS_G7_4XLARGE"
  | "GRAPHICS_G7_8XLARGE"
  | "GRAPHICS_G7_12XLARGE"
  | (string & {});
export interface ComputeType {
  Name?: Compute;
}
export interface UserStorage {
  Capacity: string;
}
export interface RootStorage {
  Capacity: string;
}
export interface CreateWorkspaceBundleRequest {
  BundleName: string;
  BundleDescription: string;
  ImageId: string;
  ComputeType: ComputeType;
  UserStorage: UserStorage;
  RootStorage?: RootStorage;
  Tags?: Tag[];
}
export type BundleId = string;
export type BundleOwner = string;
export type WorkspaceBundleState = "AVAILABLE" | "PENDING" | "ERROR" | (string & {});
export type BundleType = "REGULAR" | "STANDBY" | (string & {});
export interface WorkspaceBundle {
  BundleId?: string;
  Name?: string;
  Owner?: string;
  Description?: string;
  ImageId?: string;
  RootStorage?: RootStorage;
  UserStorage?: UserStorage;
  ComputeType?: ComputeType;
  LastUpdatedTime?: Date;
  CreationTime?: Date;
  State?: WorkspaceBundleState;
  BundleType?: BundleType;
}
export interface CreateWorkspaceBundleResult {
  WorkspaceBundle?: WorkspaceBundle;
}
export interface CreateWorkspaceImageRequest {
  Name: string;
  Description: string;
  WorkspaceId: string;
  Tags?: Tag[];
}
export type OperatingSystemType = "WINDOWS" | "LINUX" | (string & {});
export interface OperatingSystem {
  Type?: OperatingSystemType;
}
export type WorkspaceImageState = "AVAILABLE" | "PENDING" | "ERROR" | (string & {});
export type WorkspaceImageRequiredTenancy = "DEFAULT" | "DEDICATED" | (string & {});
export interface CreateWorkspaceImageResult {
  ImageId?: string;
  Name?: string;
  Description?: string;
  OperatingSystem?: OperatingSystem;
  State?: WorkspaceImageState;
  RequiredTenancy?: WorkspaceImageRequiredTenancy;
  Created?: Date;
  OwnerAccountId?: string;
}
export type RunningMode = "AUTO_STOP" | "ALWAYS_ON" | "MANUAL" | (string & {});
export type RunningModeAutoStopTimeoutInMinutes = number;
export type RootVolumeSizeGib = number;
export type UserVolumeSizeGib = number;
export type Protocol = "PCOIP" | "WSP" | (string & {});
export type ProtocolList = Protocol[];
export type OperatingSystemName =
  | "AMAZON_LINUX_2"
  | "UBUNTU_18_04"
  | "UBUNTU_20_04"
  | "UBUNTU_22_04"
  | "UNKNOWN"
  | "WINDOWS_10"
  | "WINDOWS_11"
  | "WINDOWS_7"
  | "WINDOWS_SERVER_2016"
  | "WINDOWS_SERVER_2019"
  | "WINDOWS_SERVER_2022"
  | "WINDOWS_SERVER_2025"
  | "RHEL_8"
  | "ROCKY_8"
  | (string & {});
export type AGAModeForWorkSpaceEnum = "ENABLED_AUTO" | "DISABLED" | "INHERITED" | (string & {});
export type AGAPreferredProtocolForWorkSpace = "TCP" | "NONE" | "INHERITED" | (string & {});
export interface GlobalAcceleratorForWorkSpace {
  Mode: AGAModeForWorkSpaceEnum;
  PreferredProtocol?: AGAPreferredProtocolForWorkSpace;
}
export interface WorkspaceProperties {
  RunningMode?: RunningMode;
  RunningModeAutoStopTimeoutInMinutes?: number;
  RootVolumeSizeGib?: number;
  UserVolumeSizeGib?: number;
  ComputeTypeName?: Compute;
  Protocols?: Protocol[];
  OperatingSystemName?: OperatingSystemName;
  GlobalAccelerator?: GlobalAcceleratorForWorkSpace;
  NestedVirtualizationEnabled?: boolean;
}
export type WorkspaceName = string;
export type Ipv6Address = string;
export interface WorkspaceRequest {
  DirectoryId: string;
  UserName: string;
  BundleId: string;
  VolumeEncryptionKey?: string;
  UserVolumeEncryptionEnabled?: boolean;
  RootVolumeEncryptionEnabled?: boolean;
  WorkspaceProperties?: WorkspaceProperties;
  Tags?: Tag[];
  WorkspaceName?: string;
  Ipv6Address?: string;
}
export type WorkspaceRequestList = WorkspaceRequest[];
export interface CreateWorkspacesRequest {
  Workspaces: WorkspaceRequest[];
}
export type ErrorType = string;
export interface FailedCreateWorkspaceRequest {
  WorkspaceRequest?: WorkspaceRequest;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type FailedCreateWorkspaceRequests = FailedCreateWorkspaceRequest[];
export type IpAddress = string;
export type SubnetId = string;
export type ComputerName = string;
export type ModificationResourceEnum =
  | "ROOT_VOLUME"
  | "USER_VOLUME"
  | "COMPUTE_TYPE"
  | "PROTOCOL"
  | "NESTED_VIRTUALIZATION"
  | (string & {});
export type ModificationStateEnum =
  | "UPDATE_INITIATED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_FAILED"
  | (string & {});
export interface ModificationState {
  Resource?: ModificationResourceEnum;
  State?: ModificationStateEnum;
}
export type ModificationStateList = ModificationState[];
export type StandbyWorkspaceRelationshipType = "PRIMARY" | "STANDBY" | (string & {});
export interface RelatedWorkspaceProperties {
  WorkspaceId?: string;
  Region?: string;
  State?: WorkspaceState;
  Type?: StandbyWorkspaceRelationshipType;
}
export type RelatedWorkspaces = RelatedWorkspaceProperties[];
export interface DataReplicationSettings {
  DataReplication?: DataReplication;
  RecoverySnapshotTime?: Date;
}
export interface StandbyWorkspacesProperties {
  StandbyWorkspaceId?: string;
  DataReplication?: DataReplication;
  RecoverySnapshotTime?: Date;
}
export type StandbyWorkspacesPropertiesList = StandbyWorkspacesProperties[];
export interface Workspace {
  WorkspaceId?: string;
  DirectoryId?: string;
  UserName?: string;
  IpAddress?: string;
  Ipv6Address?: string;
  State?: WorkspaceState;
  BundleId?: string;
  SubnetId?: string;
  ErrorMessage?: string;
  ErrorCode?: string;
  ComputerName?: string;
  VolumeEncryptionKey?: string;
  UserVolumeEncryptionEnabled?: boolean;
  RootVolumeEncryptionEnabled?: boolean;
  WorkspaceName?: string;
  WorkspaceProperties?: WorkspaceProperties;
  ModificationStates?: ModificationState[];
  RelatedWorkspaces?: RelatedWorkspaceProperties[];
  DataReplicationSettings?: DataReplicationSettings;
  StandbyWorkspacesProperties?: StandbyWorkspacesProperties[];
}
export type WorkspaceList = Workspace[];
export interface CreateWorkspacesResult {
  FailedRequests?: FailedCreateWorkspaceRequest[];
  PendingRequests?: Workspace[];
}
export type WorkspacesPoolName = string;
export type UpdateDescription = string;
export type DesiredUserSessions = number;
export interface Capacity {
  DesiredUserSessions: number;
}
export type ApplicationSettingsStatusEnum = "DISABLED" | "ENABLED" | (string & {});
export type SettingsGroup = string;
export interface ApplicationSettingsRequest {
  Status: ApplicationSettingsStatusEnum;
  SettingsGroup?: string;
}
export type DisconnectTimeoutInSeconds = number;
export type IdleDisconnectTimeoutInSeconds = number;
export type MaxUserDurationInSeconds = number;
export interface TimeoutSettings {
  DisconnectTimeoutInSeconds?: number;
  IdleDisconnectTimeoutInSeconds?: number;
  MaxUserDurationInSeconds?: number;
}
export type PoolsRunningMode = "AUTO_STOP" | "ALWAYS_ON" | (string & {});
export interface CreateWorkspacesPoolRequest {
  PoolName: string;
  Description: string;
  BundleId: string;
  DirectoryId: string;
  Capacity: Capacity;
  Tags?: Tag[];
  ApplicationSettings?: ApplicationSettingsRequest;
  TimeoutSettings?: TimeoutSettings;
  RunningMode?: PoolsRunningMode;
}
export type WorkspacesPoolId = string;
export type ARN = string;
export type AvailableUserSessions = number;
export type ActualUserSessions = number;
export type ActiveUserSessions = number;
export interface CapacityStatus {
  AvailableUserSessions: number;
  DesiredUserSessions: number;
  ActualUserSessions: number;
  ActiveUserSessions: number;
}
export type WorkspacesPoolState =
  | "CREATING"
  | "DELETING"
  | "RUNNING"
  | "STARTING"
  | "STOPPED"
  | "STOPPING"
  | "UPDATING"
  | (string & {});
export type WorkspacesPoolErrorCode =
  | "IAM_SERVICE_ROLE_IS_MISSING"
  | "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"
  | "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"
  | "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"
  | "NETWORK_INTERFACE_LIMIT_EXCEEDED"
  | "INTERNAL_SERVICE_ERROR"
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
  | "WORKSPACES_POOL_STOPPED"
  | "WORKSPACES_POOL_INSTANCE_PROVISIONING_FAILURE"
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
  | "DOMAIN_JOIN_ERROR_SECRET_ACTION_PERMISSION_IS_MISSING"
  | "DOMAIN_JOIN_ERROR_SECRET_DECRYPTION_FAILURE"
  | "DOMAIN_JOIN_ERROR_SECRET_STATE_INVALID"
  | "DOMAIN_JOIN_ERROR_SECRET_NOT_FOUND"
  | "DOMAIN_JOIN_ERROR_SECRET_VALUE_KEY_NOT_FOUND"
  | "DOMAIN_JOIN_ERROR_SECRET_INVALID"
  | "BUNDLE_NOT_FOUND"
  | "DIRECTORY_NOT_FOUND"
  | "INSUFFICIENT_PERMISSIONS_ERROR"
  | "DEFAULT_OU_IS_MISSING"
  | (string & {});
export type ErrorMessage = string;
export interface WorkspacesPoolError {
  ErrorCode?: WorkspacesPoolErrorCode;
  ErrorMessage?: string;
}
export type WorkspacesPoolErrors = WorkspacesPoolError[];
export type S3BucketName = string;
export interface ApplicationSettingsResponse {
  Status: ApplicationSettingsStatusEnum;
  SettingsGroup?: string;
  S3BucketName?: string;
}
export interface WorkspacesPool {
  PoolId: string;
  PoolArn: string;
  CapacityStatus: CapacityStatus;
  PoolName: string;
  Description?: string;
  State: WorkspacesPoolState;
  CreatedAt: Date;
  BundleId: string;
  DirectoryId: string;
  Errors?: WorkspacesPoolError[];
  ApplicationSettings?: ApplicationSettingsResponse;
  TimeoutSettings?: TimeoutSettings;
  RunningMode: PoolsRunningMode;
}
export interface CreateWorkspacesPoolResult {
  WorkspacesPool?: WorkspacesPool;
}
export interface DeleteAccountLinkInvitationRequest {
  LinkId: string;
  ClientToken?: string;
}
export interface DeleteAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export type ClientDeviceType =
  | "DeviceTypeWindows"
  | "DeviceTypeOsx"
  | "DeviceTypeAndroid"
  | "DeviceTypeIos"
  | "DeviceTypeLinux"
  | "DeviceTypeWeb"
  | (string & {});
export type ClientDeviceTypeList = ClientDeviceType[];
export interface DeleteClientBrandingRequest {
  ResourceId: string;
  Platforms: ClientDeviceType[];
}
export interface DeleteClientBrandingResult {}
export interface DeleteConnectClientAddInRequest {
  AddInId: string;
  ResourceId: string;
}
export interface DeleteConnectClientAddInResult {}
export interface DeleteConnectionAliasRequest {
  AliasId: string;
}
export interface DeleteConnectionAliasResult {}
export interface DeleteIpGroupRequest {
  GroupId: string;
}
export interface DeleteIpGroupResult {}
export type TagKeyList = string[];
export interface DeleteTagsRequest {
  ResourceId: string;
  TagKeys: string[];
}
export interface DeleteTagsResult {}
export interface DeleteWorkspaceBundleRequest {
  BundleId?: string;
}
export interface DeleteWorkspaceBundleResult {}
export interface DeleteWorkspaceImageRequest {
  ImageId: string;
}
export interface DeleteWorkspaceImageResult {}
export interface DeployWorkspaceApplicationsRequest {
  WorkspaceId: string;
  Force?: boolean;
}
export type WorkspaceResourceAssociationList = WorkspaceResourceAssociation[];
export interface WorkSpaceApplicationDeployment {
  Associations?: WorkspaceResourceAssociation[];
}
export interface DeployWorkspaceApplicationsResult {
  Deployment?: WorkSpaceApplicationDeployment;
}
export interface DeregisterWorkspaceDirectoryRequest {
  DirectoryId: string;
}
export interface DeregisterWorkspaceDirectoryResult {}
export interface DescribeAccountRequest {}
export type DedicatedTenancySupportResultEnum = "ENABLED" | "DISABLED" | (string & {});
export type DedicatedTenancyManagementCidrRange = string;
export type DedicatedTenancyAccountType = "SOURCE_ACCOUNT" | "TARGET_ACCOUNT" | (string & {});
export type Message = string;
export interface DescribeAccountResult {
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
  DedicatedTenancyManagementCidrRange?: string;
  DedicatedTenancyAccountType?: DedicatedTenancyAccountType;
  Message?: string;
}
export type PaginationToken = string;
export interface DescribeAccountModificationsRequest {
  NextToken?: string;
}
export type DedicatedTenancyModificationStateEnum =
  | "PENDING"
  | "COMPLETED"
  | "FAILED"
  | (string & {});
export interface AccountModification {
  ModificationState?: DedicatedTenancyModificationStateEnum;
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
  DedicatedTenancyManagementCidrRange?: string;
  StartTime?: Date;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type AccountModificationList = AccountModification[];
export interface DescribeAccountModificationsResult {
  AccountModifications?: AccountModification[];
  NextToken?: string;
}
export type Limit = number;
export type ApplicationAssociatedResourceType = "WORKSPACE" | "BUNDLE" | "IMAGE" | (string & {});
export type ApplicationAssociatedResourceTypeList = ApplicationAssociatedResourceType[];
export interface DescribeApplicationAssociationsRequest {
  MaxResults?: number;
  NextToken?: string;
  ApplicationId: string;
  AssociatedResourceTypes: ApplicationAssociatedResourceType[];
}
export interface ApplicationResourceAssociation {
  ApplicationId?: string;
  AssociatedResourceId?: string;
  AssociatedResourceType?: ApplicationAssociatedResourceType;
  Created?: Date;
  LastUpdatedTime?: Date;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
}
export type ApplicationResourceAssociationList = ApplicationResourceAssociation[];
export interface DescribeApplicationAssociationsResult {
  Associations?: ApplicationResourceAssociation[];
  NextToken?: string;
}
export type WorkSpaceApplicationIdList = string[];
export type ComputeList = Compute[];
export type WorkSpaceApplicationLicenseType = "LICENSED" | "UNLICENSED" | (string & {});
export type OperatingSystemNameList = OperatingSystemName[];
export type WorkSpaceApplicationOwner = string;
export interface DescribeApplicationsRequest {
  ApplicationIds?: string[];
  ComputeTypeNames?: Compute[];
  LicenseType?: WorkSpaceApplicationLicenseType;
  OperatingSystemNames?: OperatingSystemName[];
  Owner?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type WorkSpaceApplicationState =
  | "PENDING"
  | "ERROR"
  | "AVAILABLE"
  | "UNINSTALL_ONLY"
  | (string & {});
export interface WorkSpaceApplication {
  ApplicationId?: string;
  Created?: Date;
  Description?: string;
  LicenseType?: WorkSpaceApplicationLicenseType;
  Name?: string;
  Owner?: string;
  State?: WorkSpaceApplicationState;
  SupportedComputeTypeNames?: Compute[];
  SupportedOperatingSystemNames?: OperatingSystemName[];
}
export type WorkSpaceApplicationList = WorkSpaceApplication[];
export interface DescribeApplicationsResult {
  Applications?: WorkSpaceApplication[];
  NextToken?: string;
}
export type BundleAssociatedResourceType = "APPLICATION" | (string & {});
export type BundleAssociatedResourceTypeList = BundleAssociatedResourceType[];
export interface DescribeBundleAssociationsRequest {
  BundleId: string;
  AssociatedResourceTypes: BundleAssociatedResourceType[];
}
export interface BundleResourceAssociation {
  AssociatedResourceId?: string;
  AssociatedResourceType?: BundleAssociatedResourceType;
  BundleId?: string;
  Created?: Date;
  LastUpdatedTime?: Date;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
}
export type BundleResourceAssociationList = BundleResourceAssociation[];
export interface DescribeBundleAssociationsResult {
  Associations?: BundleResourceAssociation[];
}
export interface DescribeClientBrandingRequest {
  ResourceId: string;
}
export type ClientUrl = string;
export type ClientEmail = string;
export type ClientLocale = string;
export type ClientLoginMessage = string;
export type LoginMessage = { [key: string]: string | undefined };
export interface DefaultClientBrandingAttributes {
  LogoUrl?: string;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: { [key: string]: string | undefined };
}
export interface IosClientBrandingAttributes {
  LogoUrl?: string;
  Logo2xUrl?: string;
  Logo3xUrl?: string;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: { [key: string]: string | undefined };
}
export interface DescribeClientBrandingResult {
  DeviceTypeWindows?: DefaultClientBrandingAttributes;
  DeviceTypeOsx?: DefaultClientBrandingAttributes;
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;
  DeviceTypeIos?: IosClientBrandingAttributes;
  DeviceTypeLinux?: DefaultClientBrandingAttributes;
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}
export type ResourceIdList = string[];
export interface DescribeClientPropertiesRequest {
  ResourceIds: string[];
}
export type ReconnectEnum = "ENABLED" | "DISABLED" | (string & {});
export type LogUploadEnum = "ENABLED" | "DISABLED" | (string & {});
export type ClientExperiencePolicy = string;
export interface ClientProperties {
  ReconnectEnabled?: ReconnectEnum;
  LogUploadEnabled?: LogUploadEnum;
  ClientExperiencePolicy?: string;
}
export interface ClientPropertiesResult {
  ResourceId?: string;
  ClientProperties?: ClientProperties;
}
export type ClientPropertiesList = ClientPropertiesResult[];
export interface DescribeClientPropertiesResult {
  ClientPropertiesList?: ClientPropertiesResult[];
}
export interface DescribeConnectClientAddInsRequest {
  ResourceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ConnectClientAddIn {
  AddInId?: string;
  ResourceId?: string;
  Name?: string;
  URL?: string;
}
export type ConnectClientAddInList = ConnectClientAddIn[];
export interface DescribeConnectClientAddInsResult {
  AddIns?: ConnectClientAddIn[];
  NextToken?: string;
}
export type ConnectionAliasIdList = string[];
export interface DescribeConnectionAliasesRequest {
  AliasIds?: string[];
  ResourceId?: string;
  Limit?: number;
  NextToken?: string;
}
export type ConnectionAliasState = "CREATING" | "CREATED" | "DELETING" | (string & {});
export type AssociationStatus =
  | "NOT_ASSOCIATED"
  | "ASSOCIATED_WITH_OWNER_ACCOUNT"
  | "ASSOCIATED_WITH_SHARED_ACCOUNT"
  | "PENDING_ASSOCIATION"
  | "PENDING_DISASSOCIATION"
  | (string & {});
export interface ConnectionAliasAssociation {
  AssociationStatus?: AssociationStatus;
  AssociatedAccountId?: string;
  ResourceId?: string;
  ConnectionIdentifier?: string;
}
export type ConnectionAliasAssociationList = ConnectionAliasAssociation[];
export interface ConnectionAlias {
  ConnectionString?: string;
  AliasId?: string;
  State?: ConnectionAliasState;
  OwnerAccountId?: string;
  Associations?: ConnectionAliasAssociation[];
}
export type ConnectionAliasList = ConnectionAlias[];
export interface DescribeConnectionAliasesResult {
  ConnectionAliases?: ConnectionAlias[];
  NextToken?: string;
}
export interface DescribeConnectionAliasPermissionsRequest {
  AliasId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ConnectionAliasPermission {
  SharedAccountId: string;
  AllowAssociation: boolean;
}
export type ConnectionAliasPermissions = ConnectionAliasPermission[];
export interface DescribeConnectionAliasPermissionsResult {
  AliasId?: string;
  ConnectionAliasPermissions?: ConnectionAliasPermission[];
  NextToken?: string;
}
export interface DescribeCustomWorkspaceImageImportRequest {
  ImageId: string;
}
export type InfrastructureConfigurationArn = string;
export type CustomWorkspaceImageImportState =
  | "PENDING"
  | "IN_PROGRESS"
  | "PROCESSING_SOURCE_IMAGE"
  | "IMAGE_TESTING_START"
  | "UPDATING_OPERATING_SYSTEM"
  | "IMAGE_COMPATIBILITY_CHECKING"
  | "IMAGE_TESTING_GENERALIZATION"
  | "CREATING_TEST_INSTANCE"
  | "INSTALLING_COMPONENTS"
  | "GENERALIZING"
  | "VALIDATING"
  | "PUBLISHING"
  | "COMPLETED"
  | "ERROR"
  | (string & {});
export type WorkflowStateMessage = string;
export type Percentage = number;
export type Ec2ImportTaskId = string;
export type ImageBuildVersionArn = string;
export type Ec2ImageId = string;
export type ImageSourceIdentifier =
  | { Ec2ImportTaskId: string; ImageBuildVersionArn?: never; Ec2ImageId?: never }
  | { Ec2ImportTaskId?: never; ImageBuildVersionArn: string; Ec2ImageId?: never }
  | { Ec2ImportTaskId?: never; ImageBuildVersionArn?: never; Ec2ImageId: string };
export type ErrorCode = string;
export type ImageErrorMessage = string;
export interface CustomWorkspaceImageImportErrorDetails {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type CustomWorkspaceImageImportErrorDetailsList = CustomWorkspaceImageImportErrorDetails[];
export interface DescribeCustomWorkspaceImageImportResult {
  ImageId?: string;
  InfrastructureConfigurationArn?: string;
  State?: CustomWorkspaceImageImportState;
  StateMessage?: string;
  ProgressPercentage?: number;
  Created?: Date;
  LastUpdatedTime?: Date;
  ImageSource?: ImageSourceIdentifier;
  ImageBuilderInstanceId?: string;
  ErrorDetails?: CustomWorkspaceImageImportErrorDetails[];
}
export type ImageAssociatedResourceType = "APPLICATION" | (string & {});
export type ImageAssociatedResourceTypeList = ImageAssociatedResourceType[];
export interface DescribeImageAssociationsRequest {
  ImageId: string;
  AssociatedResourceTypes: ImageAssociatedResourceType[];
}
export interface ImageResourceAssociation {
  AssociatedResourceId?: string;
  AssociatedResourceType?: ImageAssociatedResourceType;
  Created?: Date;
  LastUpdatedTime?: Date;
  ImageId?: string;
  State?: AssociationState;
  StateReason?: AssociationStateReason;
}
export type ImageResourceAssociationList = ImageResourceAssociation[];
export interface DescribeImageAssociationsResult {
  Associations?: ImageResourceAssociation[];
}
export interface DescribeIpGroupsRequest {
  GroupIds?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export interface WorkspacesIpGroup {
  groupId?: string;
  groupName?: string;
  groupDesc?: string;
  userRules?: IpRuleItem[];
}
export type WorkspacesIpGroupsList = WorkspacesIpGroup[];
export interface DescribeIpGroupsResult {
  Result?: WorkspacesIpGroup[];
  NextToken?: string;
}
export interface DescribeTagsRequest {
  ResourceId: string;
}
export interface DescribeTagsResult {
  TagList?: Tag[];
}
export type WorkSpaceAssociatedResourceTypeList = WorkSpaceAssociatedResourceType[];
export interface DescribeWorkspaceAssociationsRequest {
  WorkspaceId: string;
  AssociatedResourceTypes: WorkSpaceAssociatedResourceType[];
}
export interface DescribeWorkspaceAssociationsResult {
  Associations?: WorkspaceResourceAssociation[];
}
export type BundleIdList = string[];
export interface DescribeWorkspaceBundlesRequest {
  BundleIds?: string[];
  Owner?: string;
  NextToken?: string;
}
export type BundleList = WorkspaceBundle[];
export interface DescribeWorkspaceBundlesResult {
  Bundles?: WorkspaceBundle[];
  NextToken?: string;
}
export type DirectoryIdList = string[];
export type WorkspaceDirectoryName = string;
export type WorkspaceDirectoryNameList = string[];
export type DescribeWorkspaceDirectoriesFilterName =
  | "USER_IDENTITY_TYPE"
  | "WORKSPACE_TYPE"
  | (string & {});
export type DescribeWorkspaceDirectoriesFilterValue = string;
export type DescribeWorkspaceDirectoriesFilterValues = string[];
export interface DescribeWorkspaceDirectoriesFilter {
  Name: DescribeWorkspaceDirectoriesFilterName;
  Values: string[];
}
export type DescribeWorkspaceDirectoriesFilterList = DescribeWorkspaceDirectoriesFilter[];
export interface DescribeWorkspaceDirectoriesRequest {
  DirectoryIds?: string[];
  WorkspaceDirectoryNames?: string[];
  Limit?: number;
  NextToken?: string;
  Filters?: DescribeWorkspaceDirectoriesFilter[];
}
export type Alias = string;
export type DirectoryName = string;
export type RegistrationCode = string;
export type SubnetIds = string[];
export type DnsIpAddresses = string[];
export type DnsIpv6Addresses = string[];
export type WorkspaceDirectoryType =
  | "SIMPLE_AD"
  | "AD_CONNECTOR"
  | "CUSTOMER_MANAGED"
  | "AWS_IAM_IDENTITY_CENTER"
  | (string & {});
export type SecurityGroupId = string;
export type WorkspaceDirectoryState =
  | "REGISTERING"
  | "REGISTERED"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "ERROR"
  | (string & {});
export type DefaultOu = string;
export interface DefaultWorkspaceCreationProperties {
  EnableInternetAccess?: boolean;
  DefaultOu?: string;
  CustomSecurityGroupId?: string;
  UserEnabledAsLocalAdministrator?: boolean;
  EnableMaintenanceMode?: boolean;
  InstanceIamRoleArn?: string;
}
export type AccessPropertyValue = "ALLOW" | "DENY" | (string & {});
export type AccessEndpointType = "STREAMING_WSP" | (string & {});
export type AlphanumericDashUnderscoreNonEmptyString = string;
export interface AccessEndpoint {
  AccessEndpointType?: AccessEndpointType;
  VpcEndpointId?: string;
}
export type AccessEndpointList = AccessEndpoint[];
export type InternetFallbackProtocol = "PCOIP" | (string & {});
export type InternetFallbackProtocolList = InternetFallbackProtocol[];
export interface AccessEndpointConfig {
  AccessEndpoints: AccessEndpoint[];
  InternetFallbackProtocols?: InternetFallbackProtocol[];
}
export interface WorkspaceAccessProperties {
  DeviceTypeWindows?: AccessPropertyValue;
  DeviceTypeOsx?: AccessPropertyValue;
  DeviceTypeWeb?: AccessPropertyValue;
  DeviceTypeIos?: AccessPropertyValue;
  DeviceTypeAndroid?: AccessPropertyValue;
  DeviceTypeChromeOs?: AccessPropertyValue;
  DeviceTypeZeroClient?: AccessPropertyValue;
  DeviceTypeLinux?: AccessPropertyValue;
  DeviceTypeWorkSpacesThinClient?: AccessPropertyValue;
  AccessEndpointConfig?: AccessEndpointConfig;
}
export type Tenancy = "DEDICATED" | "SHARED" | (string & {});
export interface SelfservicePermissions {
  RestartWorkspace?: ReconnectEnum;
  IncreaseVolumeSize?: ReconnectEnum;
  ChangeComputeType?: ReconnectEnum;
  SwitchRunningMode?: ReconnectEnum;
  RebuildWorkspace?: ReconnectEnum;
}
export type SamlStatusEnum =
  | "DISABLED"
  | "ENABLED"
  | "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK"
  | (string & {});
export type SamlUserAccessUrl = string;
export interface SamlProperties {
  Status?: SamlStatusEnum;
  UserAccessUrl?: string;
  RelayStateParameterName?: string;
}
export type CertificateBasedAuthStatusEnum = "DISABLED" | "ENABLED" | (string & {});
export type CertificateAuthorityArn = string;
export interface CertificateBasedAuthProperties {
  Status?: CertificateBasedAuthStatusEnum;
  CertificateAuthorityArn?: string;
}
export type EndpointEncryptionMode = "STANDARD_TLS" | "FIPS_VALIDATED" | (string & {});
export type MicrosoftEntraConfigTenantId = string;
export type SecretsManagerArn = string;
export interface MicrosoftEntraConfig {
  TenantId?: string;
  ApplicationConfigSecretArn?: string;
}
export type WorkspaceDirectoryDescription = string;
export type UserIdentityType =
  | "CUSTOMER_MANAGED"
  | "AWS_DIRECTORY_SERVICE"
  | "AWS_IAM_IDENTITY_CENTER"
  | (string & {});
export type WorkspaceType = "PERSONAL" | "POOLS" | (string & {});
export interface IDCConfig {
  InstanceArn?: string;
  ApplicationArn?: string;
}
export type DomainName = string;
export interface ActiveDirectoryConfig {
  DomainName: string;
  ServiceAccountSecretArn: string;
}
export type StreamingExperiencePreferredProtocolEnum = "TCP" | "UDP" | (string & {});
export type UserSettingActionEnum =
  | "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
  | "CLIPBOARD_COPY_TO_LOCAL_DEVICE"
  | "PRINTING_TO_LOCAL_DEVICE"
  | "SMART_CARD"
  | (string & {});
export type UserSettingPermissionEnum = "ENABLED" | "DISABLED" | (string & {});
export type MaximumLength = number;
export interface UserSetting {
  Action: UserSettingActionEnum;
  Permission: UserSettingPermissionEnum;
  MaximumLength?: number;
}
export type UserSettings = UserSetting[];
export type StorageConnectorTypeEnum = "HOME_FOLDER" | (string & {});
export type StorageConnectorStatusEnum = "ENABLED" | "DISABLED" | (string & {});
export interface StorageConnector {
  ConnectorType: StorageConnectorTypeEnum;
  Status: StorageConnectorStatusEnum;
}
export type StorageConnectors = StorageConnector[];
export type AGAModeForDirectoryEnum = "ENABLED_AUTO" | "DISABLED" | (string & {});
export type AGAPreferredProtocolForDirectory = "TCP" | "NONE" | (string & {});
export interface GlobalAcceleratorForDirectory {
  Mode: AGAModeForDirectoryEnum;
  PreferredProtocol?: AGAPreferredProtocolForDirectory;
}
export interface StreamingProperties {
  StreamingExperiencePreferredProtocol?: StreamingExperiencePreferredProtocolEnum;
  UserSettings?: UserSetting[];
  StorageConnectors?: StorageConnector[];
  GlobalAccelerator?: GlobalAcceleratorForDirectory;
}
export interface WorkspaceDirectory {
  DirectoryId?: string;
  Alias?: string;
  DirectoryName?: string;
  RegistrationCode?: string;
  SubnetIds?: string[];
  DnsIpAddresses?: string[];
  DnsIpv6Addresses?: string[];
  CustomerUserName?: string;
  IamRoleId?: string;
  DirectoryType?: WorkspaceDirectoryType;
  WorkspaceSecurityGroupId?: string;
  State?: WorkspaceDirectoryState;
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
  ipGroupIds?: string[];
  WorkspaceAccessProperties?: WorkspaceAccessProperties;
  Tenancy?: Tenancy;
  SelfservicePermissions?: SelfservicePermissions;
  SamlProperties?: SamlProperties;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
  EndpointEncryptionMode?: EndpointEncryptionMode;
  MicrosoftEntraConfig?: MicrosoftEntraConfig;
  WorkspaceDirectoryName?: string;
  WorkspaceDirectoryDescription?: string;
  UserIdentityType?: UserIdentityType;
  WorkspaceType?: WorkspaceType;
  IDCConfig?: IDCConfig;
  ActiveDirectoryConfig?: ActiveDirectoryConfig;
  StreamingProperties?: StreamingProperties;
  ErrorMessage?: string;
}
export type DirectoryList = WorkspaceDirectory[];
export interface DescribeWorkspaceDirectoriesResult {
  Directories?: WorkspaceDirectory[];
  NextToken?: string;
}
export interface DescribeWorkspaceImagePermissionsRequest {
  ImageId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ImagePermission {
  SharedAccountId?: string;
}
export type ImagePermissions = ImagePermission[];
export interface DescribeWorkspaceImagePermissionsResult {
  ImageId?: string;
  ImagePermissions?: ImagePermission[];
  NextToken?: string;
}
export type WorkspaceImageIdList = string[];
export type ImageType = "OWNED" | "SHARED" | (string & {});
export interface DescribeWorkspaceImagesRequest {
  ImageIds?: string[];
  ImageType?: ImageType;
  NextToken?: string;
  MaxResults?: number;
}
export type WorkspaceImageErrorCode = string;
export interface UpdateResult {
  UpdateAvailable?: boolean;
  Description?: string;
}
export type WorkspaceImageErrorDetailCode =
  | "OutdatedPowershellVersion"
  | "OfficeInstalled"
  | "PCoIPAgentInstalled"
  | "WindowsUpdatesEnabled"
  | "AutoMountDisabled"
  | "WorkspacesBYOLAccountNotFound"
  | "WorkspacesBYOLAccountDisabled"
  | "DHCPDisabled"
  | "DiskFreeSpace"
  | "AdditionalDrivesAttached"
  | "OSNotSupported"
  | "DomainJoined"
  | "AzureDomainJoined"
  | "FirewallEnabled"
  | "VMWareToolsInstalled"
  | "DiskSizeExceeded"
  | "IncompatiblePartitioning"
  | "PendingReboot"
  | "AutoLogonEnabled"
  | "RealTimeUniversalDisabled"
  | "MultipleBootPartition"
  | "Requires64BitOS"
  | "ZeroRearmCount"
  | "InPlaceUpgrade"
  | "AntiVirusInstalled"
  | "UEFINotSupported"
  | "UnknownError"
  | "AppXPackagesInstalled"
  | "ReservedStorageInUse"
  | "AdditionalDrivesPresent"
  | "WindowsUpdatesRequired"
  | "SysPrepFileMissing"
  | "UserProfileMissing"
  | "InsufficientDiskSpace"
  | "EnvironmentVariablesPathMissingEntries"
  | "DomainAccountServicesFound"
  | "InvalidIp"
  | "RemoteDesktopServicesDisabled"
  | "WindowsModulesInstallerDisabled"
  | "AmazonSsmAgentEnabled"
  | "UnsupportedSecurityProtocol"
  | "MultipleUserProfiles"
  | "StagedAppxPackage"
  | "UnsupportedOsUpgrade"
  | "InsufficientRearmCount"
  | "ProtocolOSIncompatibility"
  | "MemoryIntegrityIncompatibility"
  | "RestrictedDriveLetterInUse"
  | (string & {});
export interface ErrorDetails {
  ErrorCode?: WorkspaceImageErrorDetailCode;
  ErrorMessage?: string;
}
export type ErrorDetailsList = ErrorDetails[];
export interface WorkspaceImage {
  ImageId?: string;
  Name?: string;
  Description?: string;
  OperatingSystem?: OperatingSystem;
  State?: WorkspaceImageState;
  RequiredTenancy?: WorkspaceImageRequiredTenancy;
  ErrorCode?: string;
  ErrorMessage?: string;
  Created?: Date;
  OwnerAccountId?: string;
  Updates?: UpdateResult;
  ErrorDetails?: ErrorDetails[];
}
export type WorkspaceImageList = WorkspaceImage[];
export interface DescribeWorkspaceImagesResult {
  Images?: WorkspaceImage[];
  NextToken?: string;
}
export type WorkspaceIdList = string[];
export interface DescribeWorkspacesRequest {
  WorkspaceIds?: string[];
  DirectoryId?: string;
  UserName?: string;
  BundleId?: string;
  Limit?: number;
  NextToken?: string;
  WorkspaceName?: string;
}
export interface DescribeWorkspacesResult {
  Workspaces?: Workspace[];
  NextToken?: string;
}
export interface DescribeWorkspacesConnectionStatusRequest {
  WorkspaceIds?: string[];
  NextToken?: string;
}
export type ConnectionState = "CONNECTED" | "DISCONNECTED" | "UNKNOWN" | (string & {});
export interface WorkspaceConnectionStatus {
  WorkspaceId?: string;
  ConnectionState?: ConnectionState;
  ConnectionStateCheckTimestamp?: Date;
  LastKnownUserConnectionTimestamp?: Date;
}
export type WorkspaceConnectionStatusList = WorkspaceConnectionStatus[];
export interface DescribeWorkspacesConnectionStatusResult {
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];
  NextToken?: string;
}
export interface DescribeWorkspaceSnapshotsRequest {
  WorkspaceId: string;
}
export interface Snapshot {
  SnapshotTime?: Date;
}
export type SnapshotList = Snapshot[];
export interface DescribeWorkspaceSnapshotsResult {
  RebuildSnapshots?: Snapshot[];
  RestoreSnapshots?: Snapshot[];
}
export type WorkspacesPoolIds = string[];
export type DescribeWorkspacesPoolsFilterName = "PoolName" | (string & {});
export type DescribeWorkspacesPoolsFilterValue = string;
export type DescribeWorkspacesPoolsFilterValues = string[];
export type DescribeWorkspacesPoolsFilterOperator =
  | "EQUALS"
  | "NOTEQUALS"
  | "CONTAINS"
  | "NOTCONTAINS"
  | (string & {});
export interface DescribeWorkspacesPoolsFilter {
  Name: DescribeWorkspacesPoolsFilterName;
  Values: string[];
  Operator: DescribeWorkspacesPoolsFilterOperator;
}
export type DescribeWorkspacesPoolsFilters = DescribeWorkspacesPoolsFilter[];
export interface DescribeWorkspacesPoolsRequest {
  PoolIds?: string[];
  Filters?: DescribeWorkspacesPoolsFilter[];
  Limit?: number;
  NextToken?: string;
}
export type WorkspacesPools = WorkspacesPool[];
export interface DescribeWorkspacesPoolsResult {
  WorkspacesPools?: WorkspacesPool[];
  NextToken?: string;
}
export type WorkspacesPoolUserId = string;
export type Limit50 = number;
export interface DescribeWorkspacesPoolSessionsRequest {
  PoolId: string;
  UserId?: string;
  Limit?: number;
  NextToken?: string;
}
export type AuthenticationType = "SAML" | (string & {});
export type SessionConnectionState = "CONNECTED" | "NOT_CONNECTED" | (string & {});
export type SessionInstanceId = string;
export interface NetworkAccessConfiguration {
  EniPrivateIpAddress?: string;
  EniId?: string;
}
export interface WorkspacesPoolSession {
  AuthenticationType?: AuthenticationType;
  ConnectionState?: SessionConnectionState;
  SessionId: string;
  InstanceId?: string;
  PoolId: string;
  ExpirationTime?: Date;
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
  StartTime?: Date;
  UserId: string;
}
export type WorkspacesPoolSessions = WorkspacesPoolSession[];
export interface DescribeWorkspacesPoolSessionsResult {
  Sessions?: WorkspacesPoolSession[];
  NextToken?: string;
}
export interface DisassociateConnectionAliasRequest {
  AliasId: string;
}
export interface DisassociateConnectionAliasResult {}
export interface DisassociateIpGroupsRequest {
  DirectoryId: string;
  GroupIds: string[];
}
export interface DisassociateIpGroupsResult {}
export interface DisassociateWorkspaceApplicationRequest {
  WorkspaceId: string;
  ApplicationId: string;
}
export interface DisassociateWorkspaceApplicationResult {
  Association?: WorkspaceResourceAssociation;
}
export interface GetAccountLinkRequest {
  LinkId?: string;
  LinkedAccountId?: string;
}
export interface GetAccountLinkResult {
  AccountLink?: AccountLink;
}
export type DefaultLogo = Uint8Array;
export interface DefaultImportClientBrandingAttributes {
  Logo?: Uint8Array;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: { [key: string]: string | undefined };
}
export type IosLogo = Uint8Array;
export type Ios2XLogo = Uint8Array;
export type Ios3XLogo = Uint8Array;
export interface IosImportClientBrandingAttributes {
  Logo?: Uint8Array;
  Logo2x?: Uint8Array;
  Logo3x?: Uint8Array;
  SupportEmail?: string;
  SupportLink?: string;
  ForgotPasswordLink?: string;
  LoginMessage?: { [key: string]: string | undefined };
}
export interface ImportClientBrandingRequest {
  ResourceId: string;
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes;
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes;
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;
  DeviceTypeIos?: IosImportClientBrandingAttributes;
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes;
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
}
export interface ImportClientBrandingResult {
  DeviceTypeWindows?: DefaultClientBrandingAttributes;
  DeviceTypeOsx?: DefaultClientBrandingAttributes;
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;
  DeviceTypeIos?: IosClientBrandingAttributes;
  DeviceTypeLinux?: DefaultClientBrandingAttributes;
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}
export type ImageComputeType =
  | "BASE"
  | "GRAPHICS_G4DN"
  | "GRAPHICS_G6"
  | "GRAPHICS_G7"
  | (string & {});
export type CustomImageProtocol = "PCOIP" | "DCV" | "BYOP" | (string & {});
export type Platform = "WINDOWS" | (string & {});
export type OSVersion = "Windows_10" | "Windows_11" | (string & {});
export interface ImportCustomWorkspaceImageRequest {
  ImageName: string;
  ImageDescription: string;
  ComputeType: ImageComputeType;
  Protocol: CustomImageProtocol;
  ImageSource: ImageSourceIdentifier;
  InfrastructureConfigurationArn: string;
  Platform: Platform;
  OsVersion: OSVersion;
  Tags?: Tag[];
}
export interface ImportCustomWorkspaceImageResult {
  ImageId?: string;
  State?: CustomWorkspaceImageImportState;
}
export type WorkspaceImageIngestionProcess =
  | "BYOL_REGULAR"
  | "BYOL_GRAPHICS"
  | "BYOL_GRAPHICSPRO"
  | "BYOL_GRAPHICS_G4DN"
  | "BYOL_REGULAR_WSP"
  | "BYOL_GRAPHICS_G4DN_WSP"
  | "BYOL_REGULAR_BYOP"
  | "BYOL_GRAPHICS_G4DN_BYOP"
  | (string & {});
export type Application = "Microsoft_Office_2016" | "Microsoft_Office_2019" | (string & {});
export type ApplicationList = Application[];
export interface ImportWorkspaceImageRequest {
  Ec2ImageId: string;
  IngestionProcess: WorkspaceImageIngestionProcess;
  ImageName: string;
  ImageDescription: string;
  Tags?: Tag[];
  Applications?: Application[];
}
export interface ImportWorkspaceImageResult {
  ImageId?: string;
}
export type LinkStatusFilterList = AccountLinkStatusEnum[];
export interface ListAccountLinksRequest {
  LinkStatusFilter?: AccountLinkStatusEnum[];
  NextToken?: string;
  MaxResults?: number;
}
export type AccountLinkList = AccountLink[];
export interface ListAccountLinksResult {
  AccountLinks?: AccountLink[];
  NextToken?: string;
}
export type ManagementCidrRangeConstraint = string;
export type ManagementCidrRangeMaxResults = number;
export interface ListAvailableManagementCidrRangesRequest {
  ManagementCidrRangeConstraint: string;
  MaxResults?: number;
  NextToken?: string;
}
export type DedicatedTenancyCidrRangeList = string[];
export interface ListAvailableManagementCidrRangesResult {
  ManagementCidrRanges?: string[];
  NextToken?: string;
}
export interface MigrateWorkspaceRequest {
  SourceWorkspaceId: string;
  BundleId: string;
}
export interface MigrateWorkspaceResult {
  SourceWorkspaceId?: string;
  TargetWorkspaceId?: string;
}
export type DedicatedTenancySupportEnum = "ENABLED" | (string & {});
export interface ModifyAccountRequest {
  DedicatedTenancySupport?: DedicatedTenancySupportEnum;
  DedicatedTenancyManagementCidrRange?: string;
}
export interface ModifyAccountResult {
  Message?: string;
}
export type DeletableCertificateBasedAuthProperty =
  | "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN"
  | (string & {});
export type DeletableCertificateBasedAuthPropertiesList = DeletableCertificateBasedAuthProperty[];
export interface ModifyCertificateBasedAuthPropertiesRequest {
  ResourceId: string;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
  PropertiesToDelete?: DeletableCertificateBasedAuthProperty[];
}
export interface ModifyCertificateBasedAuthPropertiesResult {}
export interface ModifyClientPropertiesRequest {
  ResourceId: string;
  ClientProperties: ClientProperties;
}
export interface ModifyClientPropertiesResult {}
export interface ModifyEndpointEncryptionModeRequest {
  DirectoryId: string;
  EndpointEncryptionMode: EndpointEncryptionMode;
}
export interface ModifyEndpointEncryptionModeResponse {}
export type DeletableSamlProperty =
  | "SAML_PROPERTIES_USER_ACCESS_URL"
  | "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME"
  | (string & {});
export type DeletableSamlPropertiesList = DeletableSamlProperty[];
export interface ModifySamlPropertiesRequest {
  ResourceId: string;
  SamlProperties?: SamlProperties;
  PropertiesToDelete?: DeletableSamlProperty[];
}
export interface ModifySamlPropertiesResult {}
export interface ModifySelfservicePermissionsRequest {
  ResourceId: string;
  SelfservicePermissions: SelfservicePermissions;
}
export interface ModifySelfservicePermissionsResult {}
export interface ModifyStreamingPropertiesRequest {
  ResourceId: string;
  StreamingProperties?: StreamingProperties;
}
export interface ModifyStreamingPropertiesResult {}
export interface ModifyWorkspaceAccessPropertiesRequest {
  ResourceId: string;
  WorkspaceAccessProperties: WorkspaceAccessProperties;
}
export interface ModifyWorkspaceAccessPropertiesResult {}
export interface WorkspaceCreationProperties {
  EnableInternetAccess?: boolean;
  DefaultOu?: string;
  CustomSecurityGroupId?: string;
  UserEnabledAsLocalAdministrator?: boolean;
  EnableMaintenanceMode?: boolean;
  InstanceIamRoleArn?: string;
}
export interface ModifyWorkspaceCreationPropertiesRequest {
  ResourceId: string;
  WorkspaceCreationProperties: WorkspaceCreationProperties;
}
export interface ModifyWorkspaceCreationPropertiesResult {}
export interface ModifyWorkspacePropertiesRequest {
  WorkspaceId: string;
  WorkspaceProperties?: WorkspaceProperties;
  DataReplication?: DataReplication;
}
export interface ModifyWorkspacePropertiesResult {}
export type TargetWorkspaceState = "AVAILABLE" | "ADMIN_MAINTENANCE" | (string & {});
export interface ModifyWorkspaceStateRequest {
  WorkspaceId: string;
  WorkspaceState: TargetWorkspaceState;
}
export interface ModifyWorkspaceStateResult {}
export interface RebootRequest {
  WorkspaceId: string;
}
export type RebootWorkspaceRequests = RebootRequest[];
export interface RebootWorkspacesRequest {
  RebootWorkspaceRequests: RebootRequest[];
}
export interface FailedWorkspaceChangeRequest {
  WorkspaceId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type FailedRebootWorkspaceRequests = FailedWorkspaceChangeRequest[];
export interface RebootWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[];
}
export interface RebuildRequest {
  WorkspaceId: string;
}
export type RebuildWorkspaceRequests = RebuildRequest[];
export interface RebuildWorkspacesRequest {
  RebuildWorkspaceRequests: RebuildRequest[];
}
export type FailedRebuildWorkspaceRequests = FailedWorkspaceChangeRequest[];
export interface RebuildWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[];
}
export interface RegisterWorkspaceDirectoryRequest {
  DirectoryId?: string;
  SubnetIds?: string[];
  EnableSelfService?: boolean;
  Tenancy?: Tenancy;
  Tags?: Tag[];
  WorkspaceDirectoryName?: string;
  WorkspaceDirectoryDescription?: string;
  UserIdentityType?: UserIdentityType;
  IdcInstanceArn?: string;
  MicrosoftEntraConfig?: MicrosoftEntraConfig;
  WorkspaceType?: WorkspaceType;
  ActiveDirectoryConfig?: ActiveDirectoryConfig;
}
export interface RegisterWorkspaceDirectoryResult {
  DirectoryId?: string;
  State?: WorkspaceDirectoryState;
}
export interface RejectAccountLinkInvitationRequest {
  LinkId: string;
  ClientToken?: string;
}
export interface RejectAccountLinkInvitationResult {
  AccountLink?: AccountLink;
}
export interface RestoreWorkspaceRequest {
  WorkspaceId: string;
}
export interface RestoreWorkspaceResult {}
export type IpRevokedRuleList = string[];
export interface RevokeIpRulesRequest {
  GroupId: string;
  UserRules: string[];
}
export interface RevokeIpRulesResult {}
export interface StartRequest {
  WorkspaceId?: string;
}
export type StartWorkspaceRequests = StartRequest[];
export interface StartWorkspacesRequest {
  StartWorkspaceRequests: StartRequest[];
}
export type FailedStartWorkspaceRequests = FailedWorkspaceChangeRequest[];
export interface StartWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[];
}
export interface StartWorkspacesPoolRequest {
  PoolId: string;
}
export interface StartWorkspacesPoolResult {}
export interface StopRequest {
  WorkspaceId?: string;
}
export type StopWorkspaceRequests = StopRequest[];
export interface StopWorkspacesRequest {
  StopWorkspaceRequests: StopRequest[];
}
export type FailedStopWorkspaceRequests = FailedWorkspaceChangeRequest[];
export interface StopWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[];
}
export interface StopWorkspacesPoolRequest {
  PoolId: string;
}
export interface StopWorkspacesPoolResult {}
export interface TerminateRequest {
  WorkspaceId: string;
}
export type TerminateWorkspaceRequests = TerminateRequest[];
export interface TerminateWorkspacesRequest {
  TerminateWorkspaceRequests: TerminateRequest[];
}
export type FailedTerminateWorkspaceRequests = FailedWorkspaceChangeRequest[];
export interface TerminateWorkspacesResult {
  FailedRequests?: FailedWorkspaceChangeRequest[];
}
export interface TerminateWorkspacesPoolRequest {
  PoolId: string;
}
export interface TerminateWorkspacesPoolResult {}
export interface TerminateWorkspacesPoolSessionRequest {
  SessionId: string;
}
export interface TerminateWorkspacesPoolSessionResult {}
export interface UpdateConnectClientAddInRequest {
  AddInId: string;
  ResourceId: string;
  Name?: string;
  URL?: string;
}
export interface UpdateConnectClientAddInResult {}
export interface UpdateConnectionAliasPermissionRequest {
  AliasId: string;
  ConnectionAliasPermission: ConnectionAliasPermission;
}
export interface UpdateConnectionAliasPermissionResult {}
export interface UpdateRulesOfIpGroupRequest {
  GroupId: string;
  UserRules: IpRuleItem[];
}
export interface UpdateRulesOfIpGroupResult {}
export interface UpdateWorkspaceBundleRequest {
  BundleId?: string;
  ImageId?: string;
}
export interface UpdateWorkspaceBundleResult {}
export interface UpdateWorkspaceImagePermissionRequest {
  ImageId: string;
  AllowCopyImage: boolean;
  SharedAccountId: string;
}
export interface UpdateWorkspaceImagePermissionResult {}
export interface UpdateWorkspacesPoolRequest {
  PoolId: string;
  Description?: string;
  BundleId?: string;
  DirectoryId?: string;
  Capacity?: Capacity;
  ApplicationSettings?: ApplicationSettingsRequest;
  TimeoutSettings?: TimeoutSettings;
  RunningMode?: PoolsRunningMode;
}
export interface UpdateWorkspacesPoolResult {
  WorkspacesPool?: WorkspacesPool;
}
export type ExceptionMessage = string;
export type ExceptionErrorCode = string;
export type AcceptAccountLinkInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Accepts the account link invitation.
 *
 * There's currently no unlinking capability after you accept the account linking invitation.
 */
export const acceptAccountLinkInvitation: API.OperationMethod<
  AcceptAccountLinkInvitationRequest,
  AcceptAccountLinkInvitationResult,
  AcceptAccountLinkInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AcceptAccountLinkInvitationRequest>,
  output: __S(2) as any as S.Schema<AcceptAccountLinkInvitationResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptAccountLinkInvitation",
}));

export type AssociateConnectionAliasError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAssociatedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates the specified connection alias with the specified directory to enable
 * cross-Region redirection. For more information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 *
 * Before performing this operation, call
 * DescribeConnectionAliases to make sure that the current state of the
 * connection alias is `CREATED`.
 */
export const associateConnectionAlias: API.OperationMethod<
  AssociateConnectionAliasRequest,
  AssociateConnectionAliasResult,
  AssociateConnectionAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<AssociateConnectionAliasRequest>,
  output: __S(4) as any as S.Schema<AssociateConnectionAliasResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAssociatedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateConnectionAlias",
}));

export type AssociateIpGroupsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates the specified IP access control group with the specified directory.
 */
export const associateIpGroups: API.OperationMethod<
  AssociateIpGroupsRequest,
  AssociateIpGroupsResult,
  AssociateIpGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<AssociateIpGroupsRequest>,
  output: __S(7) as any as S.Schema<AssociateIpGroupsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateIpGroups",
}));

export type AssociateWorkspaceApplicationError =
  | AccessDeniedException
  | ApplicationNotSupportedException
  | ComputeNotCompatibleException
  | IncompatibleApplicationsException
  | InvalidParameterValuesException
  | OperatingSystemNotCompatibleException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates the specified application to the specified WorkSpace.
 */
export const associateWorkspaceApplication: API.OperationMethod<
  AssociateWorkspaceApplicationRequest,
  AssociateWorkspaceApplicationResult,
  AssociateWorkspaceApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<AssociateWorkspaceApplicationRequest>,
  output: __S(11) as any as S.Schema<AssociateWorkspaceApplicationResult>,
  errors: [
    AccessDeniedException,
    ApplicationNotSupportedException,
    ComputeNotCompatibleException,
    IncompatibleApplicationsException,
    InvalidParameterValuesException,
    OperatingSystemNotCompatibleException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateWorkspaceApplication",
}));

export type AuthorizeIpRulesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more rules to the specified IP access control group.
 *
 * This action gives users permission to access their WorkSpaces from the CIDR address
 * ranges specified in the rules.
 */
export const authorizeIpRules: API.OperationMethod<
  AuthorizeIpRulesRequest,
  AuthorizeIpRulesResult,
  AuthorizeIpRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<AuthorizeIpRulesRequest>,
  output: __S(15) as any as S.Schema<AuthorizeIpRulesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AuthorizeIpRules",
}));

export type CopyWorkspaceImageError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Copies the specified image from the specified Region to the current Region. For more
 * information about copying images, see Copy a Custom WorkSpaces
 * Image.
 *
 * In the China (Ningxia) Region, you can copy images only within the same Region.
 *
 * In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.
 *
 * Before copying a shared image, be sure to verify that it has been shared from the
 * correct Amazon Web Services account. To determine if an image has been shared and to see
 * the ID of the Amazon Web Services account that owns an image, use the DescribeWorkSpaceImages and DescribeWorkspaceImagePermissions API operations.
 */
export const copyWorkspaceImage: API.OperationMethod<
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageResult,
  CopyWorkspaceImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<CopyWorkspaceImageRequest>,
  output: __S(19) as any as S.Schema<CopyWorkspaceImageResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ResourceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CopyWorkspaceImage",
}));

export type CreateAccountLinkInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates the account link invitation.
 */
export const createAccountLinkInvitation: API.OperationMethod<
  CreateAccountLinkInvitationRequest,
  CreateAccountLinkInvitationResult,
  CreateAccountLinkInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreateAccountLinkInvitationRequest>,
  output: __S(2) as any as S.Schema<CreateAccountLinkInvitationResult>,
  errors: [AccessDeniedException, ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccountLinkInvitation",
}));

export type CreateConnectClientAddInError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceAlreadyExistsException
  | ResourceCreationFailedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a client-add-in for Connect Customer within a directory. You can create only
 * one Connect Customer client add-in within a directory.
 *
 * This client add-in allows WorkSpaces users to seamlessly connect to Connect Customer.
 */
export const createConnectClientAddIn: API.OperationMethod<
  CreateConnectClientAddInRequest,
  CreateConnectClientAddInResult,
  CreateConnectClientAddInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<CreateConnectClientAddInRequest>,
  output: __S(22) as any as S.Schema<CreateConnectClientAddInResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    ResourceAlreadyExistsException,
    ResourceCreationFailedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnectClientAddIn",
}));

export type CreateConnectionAliasError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | CommonErrors;
/**
 * Creates the specified connection alias for use with cross-Region redirection. For more
 * information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 */
export const createConnectionAlias: API.OperationMethod<
  CreateConnectionAliasRequest,
  CreateConnectionAliasResult,
  CreateConnectionAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23) as any as S.Schema<CreateConnectionAliasRequest>,
  output: __S(24) as any as S.Schema<CreateConnectionAliasResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnectionAlias",
}));

export type CreateIpGroupError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceAlreadyExistsException
  | ResourceCreationFailedException
  | ResourceLimitExceededException
  | CommonErrors;
/**
 * Creates an IP access control group.
 *
 * An IP access control group provides you with the ability to control the IP addresses
 * from which users are allowed to access their WorkSpaces. To specify the CIDR address
 * ranges, add rules to your IP access control group and then associate the group with your
 * directory. You can add rules when you create the group or at any time using AuthorizeIpRules.
 *
 * There is a default IP access control group associated with your directory. If you don't
 * associate an IP access control group with your directory, the default group is used. The
 * default group includes a default rule that allows users to access their WorkSpaces from
 * anywhere. You cannot modify the default IP access control group for your directory.
 */
export const createIpGroup: API.OperationMethod<
  CreateIpGroupRequest,
  CreateIpGroupResult,
  CreateIpGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<CreateIpGroupRequest>,
  output: __S(26) as any as S.Schema<CreateIpGroupResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    ResourceAlreadyExistsException,
    ResourceCreationFailedException,
    ResourceLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIpGroup",
}));

export type CreateStandbyWorkspacesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a standby WorkSpace in a secondary Region.
 */
export const createStandbyWorkspaces: API.OperationMethod<
  CreateStandbyWorkspacesRequest,
  CreateStandbyWorkspacesResult,
  CreateStandbyWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<CreateStandbyWorkspacesRequest>,
  output: __S(34) as any as S.Schema<CreateStandbyWorkspacesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateStandbyWorkspaces",
}));

export type CreateTagsError =
  | InvalidParameterValuesException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates the specified tags for the specified WorkSpaces resource.
 */
export const createTags: API.OperationMethod<
  CreateTagsRequest,
  CreateTagsResult,
  CreateTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<CreateTagsRequest>,
  output: __S(36) as any as S.Schema<CreateTagsResult>,
  errors: [
    InvalidParameterValuesException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTags",
}));

export type CreateUpdatedWorkspaceImageError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a new updated WorkSpace image based on the specified source image. The new
 * updated WorkSpace image has the latest drivers and other updates required by the
 * Amazon WorkSpaces components.
 *
 * To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces
 * requirements, use
 * DescribeWorkspaceImages.
 *
 * - Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images
 * can be programmatically updated at this time.
 *
 * - Microsoft Windows updates and other application updates are not included in the
 * update process.
 *
 * - The source WorkSpace image is not deleted. You can delete the source image
 * after you've verified your new updated image and created a new bundle.
 */
export const createUpdatedWorkspaceImage: API.OperationMethod<
  CreateUpdatedWorkspaceImageRequest,
  CreateUpdatedWorkspaceImageResult,
  CreateUpdatedWorkspaceImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<CreateUpdatedWorkspaceImageRequest>,
  output: __S(38) as any as S.Schema<CreateUpdatedWorkspaceImageResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUpdatedWorkspaceImage",
}));

export type CreateWorkspaceBundleError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see
 *
 * Create a Custom WorkSpaces Image and Bundle.
 */
export const createWorkspaceBundle: API.OperationMethod<
  CreateWorkspaceBundleRequest,
  CreateWorkspaceBundleResult,
  CreateWorkspaceBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<CreateWorkspaceBundleRequest>,
  output: __S(43) as any as S.Schema<CreateWorkspaceBundleResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ResourceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspaceBundle",
}));

export type CreateWorkspaceImageError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Creates a new WorkSpace image from an existing WorkSpace.
 */
export const createWorkspaceImage: API.OperationMethod<
  CreateWorkspaceImageRequest,
  CreateWorkspaceImageResult,
  CreateWorkspaceImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<CreateWorkspaceImageRequest>,
  output: __S(46) as any as S.Schema<CreateWorkspaceImageResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspaceImage",
}));

export type CreateWorkspacesError =
  | InvalidParameterValuesException
  | ResourceLimitExceededException
  | CommonErrors;
/**
 * Creates one or more WorkSpaces.
 *
 * This operation is asynchronous and returns before the WorkSpaces are created.
 *
 * - The `MANUAL` running mode value is only supported by Amazon WorkSpaces
 * Core. Contact your account team to be allow-listed to use this value. For more
 * information, see Amazon WorkSpaces
 * Core.
 *
 * - You don't need to specify the `PCOIP` protocol for Linux bundles
 * because `DCV` (formerly WSP) is the default protocol for those bundles.
 *
 * - User-decoupled WorkSpaces are only supported by Amazon WorkSpaces
 * Core.
 *
 * - Review your running mode to ensure you are using one that is optimal for your needs and budget.
 * For more information on switching running modes, see
 *
 * Can I switch between hourly and monthly billing?
 */
export const createWorkspaces: API.OperationMethod<
  CreateWorkspacesRequest,
  CreateWorkspacesResult,
  CreateWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<CreateWorkspacesRequest>,
  output: __S(64) as any as S.Schema<CreateWorkspacesResult>,
  errors: [InvalidParameterValuesException, ResourceLimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspaces",
}));

export type CreateWorkspacesPoolError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Creates a pool of WorkSpaces.
 */
export const createWorkspacesPool: API.OperationMethod<
  CreateWorkspacesPoolRequest,
  CreateWorkspacesPoolResult,
  CreateWorkspacesPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<CreateWorkspacesPoolRequest>,
  output: __S(73) as any as S.Schema<CreateWorkspacesPoolResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspacesPool",
}));

export type DeleteAccountLinkInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the account link invitation.
 */
export const deleteAccountLinkInvitation: API.OperationMethod<
  DeleteAccountLinkInvitationRequest,
  DeleteAccountLinkInvitationResult,
  DeleteAccountLinkInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DeleteAccountLinkInvitationRequest>,
  output: __S(2) as any as S.Schema<DeleteAccountLinkInvitationResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountLinkInvitation",
}));

export type DeleteClientBrandingError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes customized client branding. Client branding allows you to customize your
 * WorkSpace's client login portal. You can tailor your login portal company logo, the support
 * email address, support link, link to reset password, and a custom message for users trying
 * to sign in.
 *
 * After you delete your customized client branding, your login portal reverts to the
 * default client branding.
 */
export const deleteClientBranding: API.OperationMethod<
  DeleteClientBrandingRequest,
  DeleteClientBrandingResult,
  DeleteClientBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<DeleteClientBrandingRequest>,
  output: __S(76) as any as S.Schema<DeleteClientBrandingResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteClientBranding",
}));

export type DeleteConnectClientAddInError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a client-add-in for Connect Customer that is configured within a
 * directory.
 */
export const deleteConnectClientAddIn: API.OperationMethod<
  DeleteConnectClientAddInRequest,
  DeleteConnectClientAddInResult,
  DeleteConnectClientAddInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DeleteConnectClientAddInRequest>,
  output: __S(76) as any as S.Schema<DeleteConnectClientAddInResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnectClientAddIn",
}));

export type DeleteConnectionAliasError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAssociatedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified connection alias. For more information, see
 * Cross-Region Redirection for Amazon WorkSpaces.
 *
 * If you will no longer be using a fully qualified domain name
 * (FQDN) as the registration code for your WorkSpaces users, you must take certain
 * precautions to prevent potential security issues. For more information,
 * see Security Considerations if You Stop Using Cross-Region Redirection.
 *
 * To delete a connection alias that has been shared, the shared account must first
 * disassociate the connection alias from any directories it has been associated with. Then
 * you must unshare the connection alias from the account it has been shared with. You can
 * delete a connection alias only after it is no longer shared with any accounts or
 * associated with any directories.
 */
export const deleteConnectionAlias: API.OperationMethod<
  DeleteConnectionAliasRequest,
  DeleteConnectionAliasResult,
  DeleteConnectionAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<DeleteConnectionAliasRequest>,
  output: __S(76) as any as S.Schema<DeleteConnectionAliasResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAssociatedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnectionAlias",
}));

export type DeleteIpGroupError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceAssociatedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified IP access control group.
 *
 * You cannot delete an IP access control group that is associated with a directory.
 */
export const deleteIpGroup: API.OperationMethod<
  DeleteIpGroupRequest,
  DeleteIpGroupResult,
  DeleteIpGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<DeleteIpGroupRequest>,
  output: __S(36) as any as S.Schema<DeleteIpGroupResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    ResourceAssociatedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIpGroup",
}));

export type DeleteTagsError =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified tags from the specified WorkSpaces resource.
 */
export const deleteTags: API.OperationMethod<
  DeleteTagsRequest,
  DeleteTagsResult,
  DeleteTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<DeleteTagsRequest>,
  output: __S(36) as any as S.Schema<DeleteTagsResult>,
  errors: [InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTags",
}));

export type DeleteWorkspaceBundleError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceAssociatedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see
 *
 * Delete a Custom WorkSpaces Bundle or Image.
 */
export const deleteWorkspaceBundle: API.OperationMethod<
  DeleteWorkspaceBundleRequest,
  DeleteWorkspaceBundleResult,
  DeleteWorkspaceBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<DeleteWorkspaceBundleRequest>,
  output: __S(76) as any as S.Schema<DeleteWorkspaceBundleResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    ResourceAssociatedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkspaceBundle",
}));

export type DeleteWorkspaceImageError =
  | AccessDeniedException
  | InvalidResourceStateException
  | ResourceAssociatedException
  | CommonErrors;
/**
 * Deletes the specified image from your account. To delete an image, you must first delete
 * any bundles that are associated with the image and unshare the image if it is shared with
 * other accounts.
 */
export const deleteWorkspaceImage: API.OperationMethod<
  DeleteWorkspaceImageRequest,
  DeleteWorkspaceImageResult,
  DeleteWorkspaceImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<DeleteWorkspaceImageRequest>,
  output: __S(76) as any as S.Schema<DeleteWorkspaceImageResult>,
  errors: [AccessDeniedException, InvalidResourceStateException, ResourceAssociatedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkspaceImage",
}));

export type DeployWorkspaceApplicationsError =
  | AccessDeniedException
  | IncompatibleApplicationsException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deploys associated applications to the specified WorkSpace
 */
export const deployWorkspaceApplications: API.OperationMethod<
  DeployWorkspaceApplicationsRequest,
  DeployWorkspaceApplicationsResult,
  DeployWorkspaceApplicationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<DeployWorkspaceApplicationsRequest>,
  output: __S(86) as any as S.Schema<DeployWorkspaceApplicationsResult>,
  errors: [
    AccessDeniedException,
    IncompatibleApplicationsException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeployWorkspaceApplications",
}));

export type DeregisterWorkspaceDirectoryError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deregisters the specified directory. This operation is asynchronous and returns before
 * the WorkSpace directory is deregistered. If any WorkSpaces are registered to this
 * directory, you must remove them before you can deregister the directory.
 *
 * Simple AD and AD Connector are made available to you free of charge to use with
 * WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector
 * directory for 30 consecutive days, this directory will be automatically deregistered for
 * use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing
 * terms.
 *
 * To delete empty directories, see Delete the
 * Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector
 * directory, you can always create a new one when you want to start using WorkSpaces
 * again.
 */
export const deregisterWorkspaceDirectory: API.OperationMethod<
  DeregisterWorkspaceDirectoryRequest,
  DeregisterWorkspaceDirectoryResult,
  DeregisterWorkspaceDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87) as any as S.Schema<DeregisterWorkspaceDirectoryRequest>,
  output: __S(76) as any as S.Schema<DeregisterWorkspaceDirectoryResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterWorkspaceDirectory",
}));

export type DescribeAccountError = AccessDeniedException | CommonErrors;
/**
 * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for
 * the specified account.
 */
export const describeAccount: API.OperationMethod<
  DescribeAccountRequest,
  DescribeAccountResult,
  DescribeAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88) as any as S.Schema<DescribeAccountRequest>,
  output: __S(89) as any as S.Schema<DescribeAccountResult>,
  errors: [AccessDeniedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccount",
}));

export type DescribeAccountModificationsError = AccessDeniedException | CommonErrors;
/**
 * Retrieves a list that describes modifications to the configuration of Bring Your Own
 * License (BYOL) for the specified account.
 */
export const describeAccountModifications: API.OperationMethod<
  DescribeAccountModificationsRequest,
  DescribeAccountModificationsResult,
  DescribeAccountModificationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90) as any as S.Schema<DescribeAccountModificationsRequest>,
  output: __S(93) as any as S.Schema<DescribeAccountModificationsResult>,
  errors: [AccessDeniedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountModifications",
}));

export type DescribeApplicationAssociationsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the associations between the application and the specified associated resources.
 */
export const describeApplicationAssociations: API.PaginatedOperationMethod<
  DescribeApplicationAssociationsRequest,
  DescribeApplicationAssociationsResult,
  DescribeApplicationAssociationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(95) as any as S.Schema<DescribeApplicationAssociationsRequest>,
  output: __S(98) as any as S.Schema<DescribeApplicationAssociationsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeApplicationsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the specified applications by filtering based on their compute types, license availability, operating systems, and owners.
 */
export const describeApplications: API.PaginatedOperationMethod<
  DescribeApplicationsRequest,
  DescribeApplicationsResult,
  DescribeApplicationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(99) as any as S.Schema<DescribeApplicationsRequest>,
  output: __S(102) as any as S.Schema<DescribeApplicationsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeBundleAssociationsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the associations between the applications and the specified bundle.
 */
export const describeBundleAssociations: API.OperationMethod<
  DescribeBundleAssociationsRequest,
  DescribeBundleAssociationsResult,
  DescribeBundleAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<DescribeBundleAssociationsRequest>,
  output: __S(106) as any as S.Schema<DescribeBundleAssociationsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeBundleAssociations",
}));

export type DescribeClientBrandingError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the specified client branding. Client branding allows you to customize the log
 * in page of various device types for your users. You can add your company logo, the support
 * email address, support link, link to reset password, and a custom message for users trying
 * to sign in.
 *
 * Only device types that have branding information configured will be shown in the
 * response.
 */
export const describeClientBranding: API.OperationMethod<
  DescribeClientBrandingRequest,
  DescribeClientBrandingResult,
  DescribeClientBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107) as any as S.Schema<DescribeClientBrandingRequest>,
  output: __S(111) as any as S.Schema<DescribeClientBrandingResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClientBranding",
}));

export type DescribeClientPropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
 */
export const describeClientProperties: API.OperationMethod<
  DescribeClientPropertiesRequest,
  DescribeClientPropertiesResult,
  DescribeClientPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<DescribeClientPropertiesRequest>,
  output: __S(116) as any as S.Schema<DescribeClientPropertiesResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClientProperties",
}));

export type DescribeConnectClientAddInsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list of Connect Customer client add-ins that have been created.
 */
export const describeConnectClientAddIns: API.OperationMethod<
  DescribeConnectClientAddInsRequest,
  DescribeConnectClientAddInsResult,
  DescribeConnectClientAddInsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117) as any as S.Schema<DescribeConnectClientAddInsRequest>,
  output: __S(120) as any as S.Schema<DescribeConnectClientAddInsResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectClientAddIns",
}));

export type DescribeConnectionAliasesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | CommonErrors;
/**
 * Retrieves a list that describes the connection aliases used for cross-Region
 * redirection. For more information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 */
export const describeConnectionAliases: API.OperationMethod<
  DescribeConnectionAliasesRequest,
  DescribeConnectionAliasesResult,
  DescribeConnectionAliasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<DescribeConnectionAliasesRequest>,
  output: __S(126) as any as S.Schema<DescribeConnectionAliasesResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, OperationNotSupportedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectionAliases",
}));

export type DescribeConnectionAliasPermissionsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the permissions that the owner of a connection alias has granted to another
 * Amazon Web Services account for the specified connection alias. For more information, see
 * Cross-Region
 * Redirection for Amazon WorkSpaces.
 */
export const describeConnectionAliasPermissions: API.OperationMethod<
  DescribeConnectionAliasPermissionsRequest,
  DescribeConnectionAliasPermissionsResult,
  DescribeConnectionAliasPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127) as any as S.Schema<DescribeConnectionAliasPermissionsRequest>,
  output: __S(130) as any as S.Schema<DescribeConnectionAliasPermissionsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConnectionAliasPermissions",
}));

export type DescribeCustomWorkspaceImageImportError =
  | AccessDeniedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about a WorkSpace BYOL image being imported via ImportCustomWorkspaceImage.
 */
export const describeCustomWorkspaceImageImport: API.OperationMethod<
  DescribeCustomWorkspaceImageImportRequest,
  DescribeCustomWorkspaceImageImportResult,
  DescribeCustomWorkspaceImageImportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131) as any as S.Schema<DescribeCustomWorkspaceImageImportRequest>,
  output: __S(135) as any as S.Schema<DescribeCustomWorkspaceImageImportResult>,
  errors: [AccessDeniedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCustomWorkspaceImageImport",
}));

export type DescribeImageAssociationsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the associations between the applications and the specified image.
 */
export const describeImageAssociations: API.OperationMethod<
  DescribeImageAssociationsRequest,
  DescribeImageAssociationsResult,
  DescribeImageAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136) as any as S.Schema<DescribeImageAssociationsRequest>,
  output: __S(139) as any as S.Schema<DescribeImageAssociationsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeImageAssociations",
}));

export type DescribeIpGroupsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | CommonErrors;
/**
 * Describes one or more of your IP access control groups.
 */
export const describeIpGroups: API.OperationMethod<
  DescribeIpGroupsRequest,
  DescribeIpGroupsResult,
  DescribeIpGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(140) as any as S.Schema<DescribeIpGroupsRequest>,
  output: __S(143) as any as S.Schema<DescribeIpGroupsResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIpGroups",
}));

export type DescribeTagsError = ResourceNotFoundException | CommonErrors;
/**
 * Describes the specified tags for the specified WorkSpaces resource.
 */
export const describeTags: API.OperationMethod<
  DescribeTagsRequest,
  DescribeTagsResult,
  DescribeTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(144) as any as S.Schema<DescribeTagsRequest>,
  output: __S(145) as any as S.Schema<DescribeTagsResult>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTags",
}));

export type DescribeWorkspaceAssociationsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the associations betweens applications and the specified WorkSpace.
 */
export const describeWorkspaceAssociations: API.OperationMethod<
  DescribeWorkspaceAssociationsRequest,
  DescribeWorkspaceAssociationsResult,
  DescribeWorkspaceAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146) as any as S.Schema<DescribeWorkspaceAssociationsRequest>,
  output: __S(147) as any as S.Schema<DescribeWorkspaceAssociationsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceAssociations",
}));

export type DescribeWorkspaceBundlesError = InvalidParameterValuesException | CommonErrors;
/**
 * Retrieves a list that describes the available WorkSpace bundles.
 *
 * You can filter the results using either bundle ID or owner, but not both.
 */
export const describeWorkspaceBundles: API.PaginatedOperationMethod<
  DescribeWorkspaceBundlesRequest,
  DescribeWorkspaceBundlesResult,
  DescribeWorkspaceBundlesError,
  Credentials | HttpClient.HttpClient,
  WorkspaceBundle
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(148) as any as S.Schema<DescribeWorkspaceBundlesRequest>,
  output: __S(150) as any as S.Schema<DescribeWorkspaceBundlesResult>,
  errors: [InvalidParameterValuesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceBundles",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Bundles" } as const,
})) as any;

export type DescribeWorkspaceDirectoriesError = InvalidParameterValuesException | CommonErrors;
/**
 * Describes the available directories that are registered with Amazon WorkSpaces.
 */
export const describeWorkspaceDirectories: API.PaginatedOperationMethod<
  DescribeWorkspaceDirectoriesRequest,
  DescribeWorkspaceDirectoriesResult,
  DescribeWorkspaceDirectoriesError,
  Credentials | HttpClient.HttpClient,
  WorkspaceDirectory
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153) as any as S.Schema<DescribeWorkspaceDirectoriesRequest>,
  output: __S(172) as any as S.Schema<DescribeWorkspaceDirectoriesResult>,
  errors: [InvalidParameterValuesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceDirectories",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Directories" } as const,
})) as any;

export type DescribeWorkspaceImagePermissionsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
 */
export const describeWorkspaceImagePermissions: API.OperationMethod<
  DescribeWorkspaceImagePermissionsRequest,
  DescribeWorkspaceImagePermissionsResult,
  DescribeWorkspaceImagePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<DescribeWorkspaceImagePermissionsRequest>,
  output: __S(176) as any as S.Schema<DescribeWorkspaceImagePermissionsResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceImagePermissions",
}));

export type DescribeWorkspaceImagesError = AccessDeniedException | CommonErrors;
/**
 * Retrieves a list that describes one or more specified images, if the image identifiers
 * are provided. Otherwise, all images in the account are described.
 */
export const describeWorkspaceImages: API.OperationMethod<
  DescribeWorkspaceImagesRequest,
  DescribeWorkspaceImagesResult,
  DescribeWorkspaceImagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177) as any as S.Schema<DescribeWorkspaceImagesRequest>,
  output: __S(183) as any as S.Schema<DescribeWorkspaceImagesResult>,
  errors: [AccessDeniedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceImages",
}));

export type DescribeWorkspacesError =
  | InvalidParameterValuesException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Describes the specified WorkSpaces.
 *
 * You can filter the results by using the bundle identifier, directory identifier, or
 * owner, but you can specify only one filter at a time.
 */
export const describeWorkspaces: API.PaginatedOperationMethod<
  DescribeWorkspacesRequest,
  DescribeWorkspacesResult,
  DescribeWorkspacesError,
  Credentials | HttpClient.HttpClient,
  Workspace
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(184) as any as S.Schema<DescribeWorkspacesRequest>,
  output: __S(185) as any as S.Schema<DescribeWorkspacesResult>,
  errors: [InvalidParameterValuesException, ResourceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaces",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Workspaces",
    pageSize: "Limit",
  } as const,
})) as any;

export type DescribeWorkspacesConnectionStatusError =
  | InvalidParameterValuesException
  | CommonErrors;
/**
 * Describes the connection status of the specified WorkSpaces.
 */
export const describeWorkspacesConnectionStatus: API.OperationMethod<
  DescribeWorkspacesConnectionStatusRequest,
  DescribeWorkspacesConnectionStatusResult,
  DescribeWorkspacesConnectionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<DescribeWorkspacesConnectionStatusRequest>,
  output: __S(189) as any as S.Schema<DescribeWorkspacesConnectionStatusResult>,
  errors: [InvalidParameterValuesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspacesConnectionStatus",
}));

export type DescribeWorkspaceSnapshotsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Describes the snapshots for the specified WorkSpace.
 */
export const describeWorkspaceSnapshots: API.OperationMethod<
  DescribeWorkspaceSnapshotsRequest,
  DescribeWorkspaceSnapshotsResult,
  DescribeWorkspaceSnapshotsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<DescribeWorkspaceSnapshotsRequest>,
  output: __S(193) as any as S.Schema<DescribeWorkspaceSnapshotsResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceSnapshots",
}));

export type DescribeWorkspacesPoolsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Describes the specified WorkSpaces Pools.
 */
export const describeWorkspacesPools: API.OperationMethod<
  DescribeWorkspacesPoolsRequest,
  DescribeWorkspacesPoolsResult,
  DescribeWorkspacesPoolsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(196) as any as S.Schema<DescribeWorkspacesPoolsRequest>,
  output: __S(198) as any as S.Schema<DescribeWorkspacesPoolsResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspacesPools",
}));

export type DescribeWorkspacesPoolSessionsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Retrieves a list that describes the streaming sessions for a specified pool.
 */
export const describeWorkspacesPoolSessions: API.OperationMethod<
  DescribeWorkspacesPoolSessionsRequest,
  DescribeWorkspacesPoolSessionsResult,
  DescribeWorkspacesPoolSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(199) as any as S.Schema<DescribeWorkspacesPoolSessionsRequest>,
  output: __S(203) as any as S.Schema<DescribeWorkspacesPoolSessionsResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspacesPoolSessions",
}));

export type DisassociateConnectionAliasError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates a connection alias from a directory. Disassociating a connection alias
 * disables cross-Region redirection between two directories in different Regions. For more
 * information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 *
 * Before performing this operation, call
 * DescribeConnectionAliases to make sure that the current state of the
 * connection alias is `CREATED`.
 */
export const disassociateConnectionAlias: API.OperationMethod<
  DisassociateConnectionAliasRequest,
  DisassociateConnectionAliasResult,
  DisassociateConnectionAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204) as any as S.Schema<DisassociateConnectionAliasRequest>,
  output: __S(76) as any as S.Schema<DisassociateConnectionAliasResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateConnectionAlias",
}));

export type DisassociateIpGroupsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the specified IP access control group from the specified directory.
 */
export const disassociateIpGroups: API.OperationMethod<
  DisassociateIpGroupsRequest,
  DisassociateIpGroupsResult,
  DisassociateIpGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<DisassociateIpGroupsRequest>,
  output: __S(76) as any as S.Schema<DisassociateIpGroupsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateIpGroups",
}));

export type DisassociateWorkspaceApplicationError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the specified application from a WorkSpace.
 */
export const disassociateWorkspaceApplication: API.OperationMethod<
  DisassociateWorkspaceApplicationRequest,
  DisassociateWorkspaceApplicationResult,
  DisassociateWorkspaceApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206) as any as S.Schema<DisassociateWorkspaceApplicationRequest>,
  output: __S(11) as any as S.Schema<DisassociateWorkspaceApplicationResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateWorkspaceApplication",
}));

export type GetAccountLinkError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves account link information.
 */
export const getAccountLink: API.OperationMethod<
  GetAccountLinkRequest,
  GetAccountLinkResult,
  GetAccountLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(207) as any as S.Schema<GetAccountLinkRequest>,
  output: __S(208) as any as S.Schema<GetAccountLinkResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountLink",
}));

export type ImportClientBrandingError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Imports client branding. Client branding allows you to customize your WorkSpace's client
 * login portal. You can tailor your login portal company logo, the support email address,
 * support link, link to reset password, and a custom message for users trying to sign
 * in.
 *
 * After you import client branding, the default branding experience for the specified
 * platform type is replaced with the imported experience
 *
 * - You must specify at least one platform type when importing client
 * branding.
 *
 * - You can import up to 6 MB of data with each request. If your request exceeds
 * this limit, you can import client branding for different platform types using
 * separate requests.
 *
 * - In each platform type, the `SupportEmail` and
 * `SupportLink` parameters are mutually exclusive. You can specify
 * only one parameter for each platform type, but not both.
 *
 * - Imported data can take up to a minute to appear in the WorkSpaces
 * client.
 */
export const importClientBranding: API.OperationMethod<
  ImportClientBrandingRequest,
  ImportClientBrandingResult,
  ImportClientBrandingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211) as any as S.Schema<ImportClientBrandingRequest>,
  output: __S(111) as any as S.Schema<ImportClientBrandingResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportClientBranding",
}));

export type ImportCustomWorkspaceImageError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Imports the specified Windows 10 or 11 Bring Your Own License (BYOL)
 * image into Amazon WorkSpaces using EC2 Image Builder. The image must be an already licensed image that is
 * in your Amazon Web Services account, and you must own the image. For more information about
 * creating BYOL images, see Bring Your Own Windows
 * Desktop Licenses.
 */
export const importCustomWorkspaceImage: API.OperationMethod<
  ImportCustomWorkspaceImageRequest,
  ImportCustomWorkspaceImageResult,
  ImportCustomWorkspaceImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212) as any as S.Schema<ImportCustomWorkspaceImageRequest>,
  output: __S(213) as any as S.Schema<ImportCustomWorkspaceImageResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportCustomWorkspaceImage",
}));

export type ImportWorkspaceImageError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Imports the specified Windows 10 or 11 Bring Your Own License (BYOL)
 * image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is
 * in your Amazon Web Services account, and you must own the image. For more information about
 * creating BYOL images, see Bring Your Own Windows
 * Desktop Licenses.
 */
export const importWorkspaceImage: API.OperationMethod<
  ImportWorkspaceImageRequest,
  ImportWorkspaceImageResult,
  ImportWorkspaceImageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(214) as any as S.Schema<ImportWorkspaceImageRequest>,
  output: __S(38) as any as S.Schema<ImportWorkspaceImageResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportWorkspaceImage",
}));

export type ListAccountLinksError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists all account links.
 */
export const listAccountLinks: API.PaginatedOperationMethod<
  ListAccountLinksRequest,
  ListAccountLinksResult,
  ListAccountLinksError,
  Credentials | HttpClient.HttpClient,
  AccountLink
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(215) as any as S.Schema<ListAccountLinksRequest>,
  output: __S(217) as any as S.Schema<ListAccountLinksResult>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountLinks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountLinks",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAvailableManagementCidrRangesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | CommonErrors;
/**
 * Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
 * for the network management interface when you enable Bring Your Own License (BYOL).
 *
 * This operation can be run only by Amazon Web Services accounts that are enabled for BYOL.
 * If your account isn't enabled for BYOL, you'll receive an
 * `AccessDeniedException` error.
 *
 * The management network interface is connected to a secure Amazon WorkSpaces management
 * network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
 * clients, and to allow Amazon WorkSpaces to manage the WorkSpace.
 */
export const listAvailableManagementCidrRanges: API.OperationMethod<
  ListAvailableManagementCidrRangesRequest,
  ListAvailableManagementCidrRangesResult,
  ListAvailableManagementCidrRangesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(218) as any as S.Schema<ListAvailableManagementCidrRangesRequest>,
  output: __S(219) as any as S.Schema<ListAvailableManagementCidrRangesResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAvailableManagementCidrRanges",
}));

export type MigrateWorkspaceError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationInProgressException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Migrates a WorkSpace from one operating system or bundle type to another, while
 * retaining the data on the user volume.
 *
 * The migration process recreates the WorkSpace by using a new root volume from the target
 * bundle image and the user volume from the last available snapshot of the original
 * WorkSpace. During migration, the original `D:\Users\%USERNAME%` user profile
 * folder is renamed to `D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated`. A new
 * `D:\Users\%USERNAME%\` folder is generated by the new OS. Certain files in
 * the old user profile are moved to the new user profile.
 *
 * For available migration scenarios, details about what happens during migration, and best
 * practices, see Migrate a
 * WorkSpace.
 *
 * If the source WorkSpace has nested virtualization enabled and the target bundle does
 * not support nested virtualization, the migration fails.
 */
export const migrateWorkspace: API.OperationMethod<
  MigrateWorkspaceRequest,
  MigrateWorkspaceResult,
  MigrateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220) as any as S.Schema<MigrateWorkspaceRequest>,
  output: __S(221) as any as S.Schema<MigrateWorkspaceResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationInProgressException,
    OperationNotSupportedException,
    ResourceNotFoundException,
    ResourceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "MigrateWorkspace",
}));

export type ModifyAccountError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Modifies the configuration of Bring Your Own License (BYOL) for the specified
 * account.
 */
export const modifyAccount: API.OperationMethod<
  ModifyAccountRequest,
  ModifyAccountResult,
  ModifyAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222) as any as S.Schema<ModifyAccountRequest>,
  output: __S(223) as any as S.Schema<ModifyAccountResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    ResourceNotFoundException,
    ResourceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyAccount",
}));

export type ModifyCertificateBasedAuthPropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modifies the properties of the certificate-based authentication you want
 * to use with your WorkSpaces.
 */
export const modifyCertificateBasedAuthProperties: API.OperationMethod<
  ModifyCertificateBasedAuthPropertiesRequest,
  ModifyCertificateBasedAuthPropertiesResult,
  ModifyCertificateBasedAuthPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(224) as any as S.Schema<ModifyCertificateBasedAuthPropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifyCertificateBasedAuthPropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyCertificateBasedAuthProperties",
}));

export type ModifyClientPropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modifies the properties of the specified Amazon WorkSpaces clients.
 */
export const modifyClientProperties: API.OperationMethod<
  ModifyClientPropertiesRequest,
  ModifyClientPropertiesResult,
  ModifyClientPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(225) as any as S.Schema<ModifyClientPropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifyClientPropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyClientProperties",
}));

export type ModifyEndpointEncryptionModeError =
  | AccessDeniedException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modifies the endpoint encryption mode that allows you to configure the specified
 * directory between Standard TLS and FIPS 140-2 validated mode.
 */
export const modifyEndpointEncryptionMode: API.OperationMethod<
  ModifyEndpointEncryptionModeRequest,
  ModifyEndpointEncryptionModeResponse,
  ModifyEndpointEncryptionModeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(226) as any as S.Schema<ModifyEndpointEncryptionModeRequest>,
  output: __S(76) as any as S.Schema<ModifyEndpointEncryptionModeResponse>,
  errors: [AccessDeniedException, OperationNotSupportedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyEndpointEncryptionMode",
}));

export type ModifySamlPropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modifies multiple properties related to SAML 2.0 authentication, including the enablement status,
 * user access URL, and relay state parameter name that are used for configuring federation with an
 * SAML 2.0 identity provider.
 */
export const modifySamlProperties: API.OperationMethod<
  ModifySamlPropertiesRequest,
  ModifySamlPropertiesResult,
  ModifySamlPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(227) as any as S.Schema<ModifySamlPropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifySamlPropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifySamlProperties",
}));

export type ModifySelfservicePermissionsError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modifies the self-service WorkSpace management capabilities for your users. For more
 * information, see Enable Self-Service WorkSpace Management Capabilities for Your Users.
 */
export const modifySelfservicePermissions: API.OperationMethod<
  ModifySelfservicePermissionsRequest,
  ModifySelfservicePermissionsResult,
  ModifySelfservicePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(228) as any as S.Schema<ModifySelfservicePermissionsRequest>,
  output: __S(76) as any as S.Schema<ModifySelfservicePermissionsResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifySelfservicePermissions",
}));

export type ModifyStreamingPropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modifies the specified streaming properties.
 */
export const modifyStreamingProperties: API.OperationMethod<
  ModifyStreamingPropertiesRequest,
  ModifyStreamingPropertiesResult,
  ModifyStreamingPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(229) as any as S.Schema<ModifyStreamingPropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifyStreamingPropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyStreamingProperties",
}));

export type ModifyWorkspaceAccessPropertiesError =
  | AccessDeniedException
  | InvalidParameterCombinationException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Specifies which devices and operating systems users can use to access their WorkSpaces.
 * For more information, see
 * Control Device Access.
 */
export const modifyWorkspaceAccessProperties: API.OperationMethod<
  ModifyWorkspaceAccessPropertiesRequest,
  ModifyWorkspaceAccessPropertiesResult,
  ModifyWorkspaceAccessPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(230) as any as S.Schema<ModifyWorkspaceAccessPropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifyWorkspaceAccessPropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterCombinationException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyWorkspaceAccessProperties",
}));

export type ModifyWorkspaceCreationPropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Modify the default properties used to create WorkSpaces.
 */
export const modifyWorkspaceCreationProperties: API.OperationMethod<
  ModifyWorkspaceCreationPropertiesRequest,
  ModifyWorkspaceCreationPropertiesResult,
  ModifyWorkspaceCreationPropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(231) as any as S.Schema<ModifyWorkspaceCreationPropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifyWorkspaceCreationPropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyWorkspaceCreationProperties",
}));

export type ModifyWorkspacePropertiesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationInProgressException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | UnsupportedWorkspaceConfigurationException
  | CommonErrors;
/**
 * Modifies the specified WorkSpace properties. For important information about how to
 * modify the size of the root and user volumes, see Modify a WorkSpace.
 *
 * The `MANUAL` running mode value is only supported by Amazon WorkSpaces
 * Core. Contact your account team to be allow-listed to use this value. For more
 * information, see Amazon WorkSpaces
 * Core.
 */
export const modifyWorkspaceProperties: API.OperationMethod<
  ModifyWorkspacePropertiesRequest,
  ModifyWorkspacePropertiesResult,
  ModifyWorkspacePropertiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(232) as any as S.Schema<ModifyWorkspacePropertiesRequest>,
  output: __S(76) as any as S.Schema<ModifyWorkspacePropertiesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationInProgressException,
    ResourceNotFoundException,
    ResourceUnavailableException,
    UnsupportedWorkspaceConfigurationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyWorkspaceProperties",
}));

export type ModifyWorkspaceStateError =
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Sets the state of the specified WorkSpace.
 *
 * To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 * `ADMIN_MAINTENANCE`. WorkSpaces in this state do not respond to requests to
 * reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 * stopped. Users cannot log into a WorkSpace in the `ADMIN_MAINTENANCE`
 * state.
 */
export const modifyWorkspaceState: API.OperationMethod<
  ModifyWorkspaceStateRequest,
  ModifyWorkspaceStateResult,
  ModifyWorkspaceStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233) as any as S.Schema<ModifyWorkspaceStateRequest>,
  output: __S(76) as any as S.Schema<ModifyWorkspaceStateResult>,
  errors: [
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ModifyWorkspaceState",
}));

export type RebootWorkspacesError = OperationNotSupportedException | CommonErrors;
/**
 * Reboots the specified WorkSpaces.
 *
 * You cannot reboot a WorkSpace unless its state is `AVAILABLE`,
 * `UNHEALTHY`, or `REBOOTING`. Reboot a WorkSpace in the `REBOOTING`
 * state only if your WorkSpace has been stuck in the `REBOOTING` state for over 20 minutes.
 *
 * This operation is asynchronous and returns before the WorkSpaces have rebooted.
 */
export const rebootWorkspaces: API.OperationMethod<
  RebootWorkspacesRequest,
  RebootWorkspacesResult,
  RebootWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(236) as any as S.Schema<RebootWorkspacesRequest>,
  output: __S(239) as any as S.Schema<RebootWorkspacesResult>,
  errors: [OperationNotSupportedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebootWorkspaces",
}));

export type RebuildWorkspacesError = OperationNotSupportedException | CommonErrors;
/**
 * Rebuilds the specified WorkSpace.
 *
 * You cannot rebuild a WorkSpace unless its state is `AVAILABLE`,
 * `ERROR`, `UNHEALTHY`, `STOPPED`, or
 * `REBOOTING`.
 *
 * Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 * of data. For more information, see Rebuild a
 * WorkSpace.
 *
 * This operation is asynchronous and returns before the WorkSpaces have been completely
 * rebuilt.
 */
export const rebuildWorkspaces: API.OperationMethod<
  RebuildWorkspacesRequest,
  RebuildWorkspacesResult,
  RebuildWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(240) as any as S.Schema<RebuildWorkspacesRequest>,
  output: __S(239) as any as S.Schema<RebuildWorkspacesResult>,
  errors: [OperationNotSupportedException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RebuildWorkspaces",
}));

export type RegisterWorkspaceDirectoryError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAlreadyExistsException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | UnsupportedNetworkConfigurationException
  | WorkspacesDefaultRoleNotFoundException
  | CommonErrors;
/**
 * Registers the specified directory. This operation is asynchronous and returns before the
 * WorkSpace directory is registered. If this is the first time you are registering a
 * directory, you will need to create the workspaces_DefaultRole role before you can register
 * a directory. For more information, see
 * Creating the workspaces_DefaultRole Role.
 */
export const registerWorkspaceDirectory: API.OperationMethod<
  RegisterWorkspaceDirectoryRequest,
  RegisterWorkspaceDirectoryResult,
  RegisterWorkspaceDirectoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241) as any as S.Schema<RegisterWorkspaceDirectoryRequest>,
  output: __S(242) as any as S.Schema<RegisterWorkspaceDirectoryResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAlreadyExistsException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    UnsupportedNetworkConfigurationException,
    WorkspacesDefaultRoleNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterWorkspaceDirectory",
}));

export type RejectAccountLinkInvitationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Rejects the account link invitation.
 */
export const rejectAccountLinkInvitation: API.OperationMethod<
  RejectAccountLinkInvitationRequest,
  RejectAccountLinkInvitationResult,
  RejectAccountLinkInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243) as any as S.Schema<RejectAccountLinkInvitationRequest>,
  output: __S(2) as any as S.Schema<RejectAccountLinkInvitationResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectAccountLinkInvitation",
}));

export type RestoreWorkspaceError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Restores the specified WorkSpace to its last known healthy state.
 *
 * You cannot restore a WorkSpace unless its state is ` AVAILABLE`,
 * `ERROR`, `UNHEALTHY`, or `STOPPED`.
 *
 * Restoring a WorkSpace is a potentially destructive action that can result in the loss of
 * data. For more information, see Restore a
 * WorkSpace.
 *
 * This operation is asynchronous and returns before the WorkSpace is completely
 * restored.
 */
export const restoreWorkspace: API.OperationMethod<
  RestoreWorkspaceRequest,
  RestoreWorkspaceResult,
  RestoreWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(244) as any as S.Schema<RestoreWorkspaceRequest>,
  output: __S(15) as any as S.Schema<RestoreWorkspaceResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreWorkspace",
}));

export type RevokeIpRulesError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes one or more rules from the specified IP access control group.
 */
export const revokeIpRules: API.OperationMethod<
  RevokeIpRulesRequest,
  RevokeIpRulesResult,
  RevokeIpRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245) as any as S.Schema<RevokeIpRulesRequest>,
  output: __S(36) as any as S.Schema<RevokeIpRulesResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeIpRules",
}));

export type StartWorkspacesError = CommonErrors;
/**
 * Starts the specified WorkSpaces.
 *
 * You cannot start a WorkSpace unless it has a running mode of `AutoStop` or
 * `Manual` and a state of `STOPPED`.
 */
export const startWorkspaces: API.OperationMethod<
  StartWorkspacesRequest,
  StartWorkspacesResult,
  StartWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(248) as any as S.Schema<StartWorkspacesRequest>,
  output: __S(239) as any as S.Schema<StartWorkspacesResult>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartWorkspaces",
}));

export type StartWorkspacesPoolError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationInProgressException
  | OperationNotSupportedException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Starts the specified pool.
 *
 * You cannot start a pool unless it has a running mode of
 * `AutoStop` and a state of `STOPPED`.
 */
export const startWorkspacesPool: API.OperationMethod<
  StartWorkspacesPoolRequest,
  StartWorkspacesPoolResult,
  StartWorkspacesPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(249) as any as S.Schema<StartWorkspacesPoolRequest>,
  output: __S(76) as any as S.Schema<StartWorkspacesPoolResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationInProgressException,
    OperationNotSupportedException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartWorkspacesPool",
}));

export type StopWorkspacesError = CommonErrors;
/**
 * Stops the specified WorkSpaces.
 *
 * You cannot stop a WorkSpace unless it has a running mode of `AutoStop` or
 * `Manual` and a state of `AVAILABLE`, `IMPAIRED`,
 * `UNHEALTHY`, or `ERROR`.
 */
export const stopWorkspaces: API.OperationMethod<
  StopWorkspacesRequest,
  StopWorkspacesResult,
  StopWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(250) as any as S.Schema<StopWorkspacesRequest>,
  output: __S(239) as any as S.Schema<StopWorkspacesResult>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopWorkspaces",
}));

export type StopWorkspacesPoolError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationInProgressException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Stops the specified pool.
 *
 * You cannot stop a WorkSpace pool unless it has a running mode of `AutoStop`
 * and a state of `AVAILABLE`, `IMPAIRED`, `UNHEALTHY`, or `ERROR`.
 */
export const stopWorkspacesPool: API.OperationMethod<
  StopWorkspacesPoolRequest,
  StopWorkspacesPoolResult,
  StopWorkspacesPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(251) as any as S.Schema<StopWorkspacesPoolRequest>,
  output: __S(7) as any as S.Schema<StopWorkspacesPoolResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationInProgressException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopWorkspacesPool",
}));

export type TerminateWorkspacesError = CommonErrors;
/**
 * Terminates the specified WorkSpaces.
 *
 * Terminating a WorkSpace is a permanent action and cannot be undone. The user's data
 * is destroyed. If you need to archive any user data, contact Amazon Web Services Support before
 * terminating the WorkSpace.
 *
 * You can terminate a WorkSpace that is in any state except `SUSPENDED`.
 *
 * This operation is asynchronous and returns before the WorkSpaces have been completely
 * terminated. After a WorkSpace is terminated, the `TERMINATED` state is returned
 * only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
 * returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
 *
 * DescribeWorkSpaces. If the WorkSpace ID isn't returned, then the WorkSpace has
 * been successfully terminated.
 *
 * Simple AD and AD Connector are made available to you free of charge to use with
 * WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector
 * directory for 30 consecutive days, this directory will be automatically deregistered for
 * use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing
 * terms.
 *
 * To delete empty directories, see Delete the
 * Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector
 * directory, you can always create a new one when you want to start using WorkSpaces
 * again.
 */
export const terminateWorkspaces: API.OperationMethod<
  TerminateWorkspacesRequest,
  TerminateWorkspacesResult,
  TerminateWorkspacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(252) as any as S.Schema<TerminateWorkspacesRequest>,
  output: __S(253) as any as S.Schema<TerminateWorkspacesResult>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateWorkspaces",
}));

export type TerminateWorkspacesPoolError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationInProgressException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Terminates the specified pool.
 */
export const terminateWorkspacesPool: API.OperationMethod<
  TerminateWorkspacesPoolRequest,
  TerminateWorkspacesPoolResult,
  TerminateWorkspacesPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254) as any as S.Schema<TerminateWorkspacesPoolRequest>,
  output: __S(76) as any as S.Schema<TerminateWorkspacesPoolResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationInProgressException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateWorkspacesPool",
}));

export type TerminateWorkspacesPoolSessionError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationInProgressException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Terminates the pool session.
 */
export const terminateWorkspacesPoolSession: API.OperationMethod<
  TerminateWorkspacesPoolSessionRequest,
  TerminateWorkspacesPoolSessionResult,
  TerminateWorkspacesPoolSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(255) as any as S.Schema<TerminateWorkspacesPoolSessionRequest>,
  output: __S(76) as any as S.Schema<TerminateWorkspacesPoolSessionResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationInProgressException,
    OperationNotSupportedException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TerminateWorkspacesPoolSession",
}));

export type UpdateConnectClientAddInError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a Connect Customer client add-in. Use this action to update the name and
 * endpoint URL of a Connect Customer client add-in.
 */
export const updateConnectClientAddIn: API.OperationMethod<
  UpdateConnectClientAddInRequest,
  UpdateConnectClientAddInResult,
  UpdateConnectClientAddInError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256) as any as S.Schema<UpdateConnectClientAddInRequest>,
  output: __S(76) as any as S.Schema<UpdateConnectClientAddInResult>,
  errors: [AccessDeniedException, InvalidParameterValuesException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnectClientAddIn",
}));

export type UpdateConnectionAliasPermissionError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationNotSupportedException
  | ResourceAssociatedException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Shares or unshares a connection alias with one account by specifying whether that
 * account has permission to associate the connection alias with a directory. If the
 * association permission is granted, the connection alias is shared with that account. If the
 * association permission is revoked, the connection alias is unshared with the account. For
 * more information, see Cross-Region
 * Redirection for Amazon WorkSpaces.
 *
 * - Before performing this operation, call
 * DescribeConnectionAliases to make sure that the current state of the
 * connection alias is `CREATED`.
 *
 * - To delete a connection alias that has been shared, the shared account must
 * first disassociate the connection alias from any directories it has been
 * associated with. Then you must unshare the connection alias from the account it
 * has been shared with. You can delete a connection alias only after it is no longer
 * shared with any accounts or associated with any directories.
 */
export const updateConnectionAliasPermission: API.OperationMethod<
  UpdateConnectionAliasPermissionRequest,
  UpdateConnectionAliasPermissionResult,
  UpdateConnectionAliasPermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(257) as any as S.Schema<UpdateConnectionAliasPermissionRequest>,
  output: __S(76) as any as S.Schema<UpdateConnectionAliasPermissionResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationNotSupportedException,
    ResourceAssociatedException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnectionAliasPermission",
}));

export type UpdateRulesOfIpGroupError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Replaces the current rules of the specified IP access control group with the specified
 * rules.
 */
export const updateRulesOfIpGroup: API.OperationMethod<
  UpdateRulesOfIpGroupRequest,
  UpdateRulesOfIpGroupResult,
  UpdateRulesOfIpGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(258) as any as S.Schema<UpdateRulesOfIpGroupRequest>,
  output: __S(76) as any as S.Schema<UpdateRulesOfIpGroupResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRulesOfIpGroup",
}));

export type UpdateWorkspaceBundleError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
 *
 * Update a Custom WorkSpaces Bundle.
 *
 * Existing WorkSpaces aren't automatically updated when you update the bundle that they're
 * based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
 * must either rebuild the WorkSpaces or delete and recreate them.
 */
export const updateWorkspaceBundle: API.OperationMethod<
  UpdateWorkspaceBundleRequest,
  UpdateWorkspaceBundleResult,
  UpdateWorkspaceBundleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(259) as any as S.Schema<UpdateWorkspaceBundleRequest>,
  output: __S(76) as any as S.Schema<UpdateWorkspaceBundleResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
    ResourceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspaceBundle",
}));

export type UpdateWorkspaceImagePermissionError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | OperationNotSupportedException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | CommonErrors;
/**
 * Shares or unshares an image with one account in the same Amazon Web Services Region by
 * specifying whether that account has permission to copy the image. If the copy image
 * permission is granted, the image is shared with that account. If the copy image permission
 * is revoked, the image is unshared with the account.
 *
 * After an image has been shared, the recipient account can copy the image to other
 * Regions as needed.
 *
 * In the China (Ningxia) Region, you can copy images only within the same Region.
 *
 * In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.
 *
 * For more information about sharing images, see Share or Unshare a Custom
 * WorkSpaces Image.
 *
 * - To delete an image that has been shared, you must unshare the image before you
 * delete it.
 *
 * - Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts
 * isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images
 * across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.
 */
export const updateWorkspaceImagePermission: API.OperationMethod<
  UpdateWorkspaceImagePermissionRequest,
  UpdateWorkspaceImagePermissionResult,
  UpdateWorkspaceImagePermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(260) as any as S.Schema<UpdateWorkspaceImagePermissionRequest>,
  output: __S(76) as any as S.Schema<UpdateWorkspaceImagePermissionResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    OperationNotSupportedException,
    ResourceNotFoundException,
    ResourceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspaceImagePermission",
}));

export type UpdateWorkspacesPoolError =
  | AccessDeniedException
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationInProgressException
  | OperationNotSupportedException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * End of support notice: On December 31, 2027, Amazon Web Services will end support for Amazon WorkSpaces Pools. After December 31, 2027,
 * you will no longer be able to access the Amazon WorkSpaces Pools console or Amazon WorkSpaces Pools resources. For more information, see
 * Amazon WorkSpaces Pools end of support.
 *
 * Updates the specified pool.
 */
export const updateWorkspacesPool: API.OperationMethod<
  UpdateWorkspacesPoolRequest,
  UpdateWorkspacesPoolResult,
  UpdateWorkspacesPoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(261) as any as S.Schema<UpdateWorkspacesPoolRequest>,
  output: __S(73) as any as S.Schema<UpdateWorkspacesPoolResult>,
  errors: [
    AccessDeniedException,
    InvalidParameterValuesException,
    InvalidResourceStateException,
    OperationInProgressException,
    OperationNotSupportedException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkspacesPool",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LinkId: S.String, ClientToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcceptAccountLinkInvitationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountLinkId: S.optional(S.String),
          AccountLinkStatus: S.optional(S.String),
          SourceAccountId: S.optional(S.String),
          TargetAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountLink" });
    case 2:
      return S.suspend(() => S.Struct({ AccountLink: S.optional(__S(1)) }).pipe(ns)).annotate({
        identifier: "AcceptAccountLinkInvitationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AliasId: S.String, ResourceId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateConnectionAliasRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConnectionIdentifier: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "AssociateConnectionAliasResult",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, GroupIds: __S(5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AssociateIpGroupsRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AssociateIpGroupsResult",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ WorkspaceId: S.String, ApplicationId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateWorkspaceApplicationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociationStateReason" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AssociatedResourceId: S.optional(S.String),
          AssociatedResourceType: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
          StateReason: S.optional(__S(9)),
          WorkspaceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "WorkspaceResourceAssociation",
      });
    case 3:
      return S.suspend(() => S.Struct({ Association: S.optional(__S(10)) }).pipe(ns)).annotate({
        identifier: "AssociateWorkspaceApplicationResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ipRule: S.optional(S.String), ruleDesc: S.optional(S.String) }),
      ).annotate({ identifier: "IpRuleItem" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({ GroupId: S.String, UserRules: __S(13) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AuthorizeIpRulesRequest" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AuthorizeIpRulesResult",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          SourceImageId: S.String,
          SourceRegion: S.String,
          Tags: S.optional(__S(17)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CopyWorkspaceImageRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ ImageId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CopyWorkspaceImageResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TargetAccountId: S.String, ClientToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAccountLinkInvitationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, Name: S.String, URL: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConnectClientAddInRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ AddInId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateConnectClientAddInResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ConnectionString: S.String, Tags: S.optional(__S(17)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConnectionAliasRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AliasId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateConnectionAliasResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.String,
          GroupDesc: S.optional(S.String),
          UserRules: S.optional(__S(13)),
          Tags: S.optional(__S(17)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateIpGroupRequest" });
    case 2:
      return S.suspend(() => S.Struct({ GroupId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateIpGroupResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PrimaryWorkspaceId: S.String,
          VolumeEncryptionKey: S.optional(S.String),
          DirectoryId: S.String,
          Tags: S.optional(__S(17)),
          DataReplication: S.optional(S.String),
        }),
      ).annotate({ identifier: "StandbyWorkspace" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({ PrimaryRegion: S.String, StandbyWorkspaces: __S(28) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateStandbyWorkspacesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandbyWorkspaceRequest: S.optional(__S(27)),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FailedCreateStandbyWorkspacesRequest",
      });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          State: S.optional(S.String),
          WorkspaceId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PendingCreateStandbyWorkspacesRequest",
      });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({
          FailedStandbyRequests: S.optional(__S(31)),
          PendingStandbyRequests: S.optional(__S(33)),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateStandbyWorkspacesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, Tags: __S(17) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTagsRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateTagsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.String,
          SourceImageId: S.String,
          Tags: S.optional(__S(17)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateUpdatedWorkspaceImageRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ ImageId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateUpdatedWorkspaceImageResult",
      });
    case 7:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "ComputeType",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Capacity: S.String })).annotate({
        identifier: "UserStorage",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          BundleName: S.String,
          BundleDescription: S.String,
          ImageId: S.String,
          ComputeType: __S(39),
          UserStorage: __S(40),
          RootStorage: S.optional(__S(40)),
          Tags: S.optional(__S(17)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateWorkspaceBundleRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BundleId: S.optional(S.String),
          Name: S.optional(S.String),
          Owner: S.optional(S.String),
          Description: S.optional(S.String),
          ImageId: S.optional(S.String),
          RootStorage: S.optional(__S(40)),
          UserStorage: S.optional(__S(40)),
          ComputeType: S.optional(__S(39)),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
          BundleType: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceBundle" });
    case 3:
      return S.suspend(() => S.Struct({ WorkspaceBundle: S.optional(__S(42)) }).pipe(ns)).annotate({
        identifier: "CreateWorkspaceBundleResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.String,
          WorkspaceId: S.String,
          Tags: S.optional(__S(17)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateWorkspaceImageRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "OperatingSystem",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          OperatingSystem: S.optional(__S(45)),
          State: S.optional(S.String),
          RequiredTenancy: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OwnerAccountId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateWorkspaceImageResult",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Mode: S.String,
          PreferredProtocol: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GlobalAcceleratorForWorkSpace",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RunningMode: S.optional(S.String),
          RunningModeAutoStopTimeoutInMinutes: S.optional(S.Number),
          RootVolumeSizeGib: S.optional(S.Number),
          UserVolumeSizeGib: S.optional(S.Number),
          ComputeTypeName: S.optional(S.String),
          Protocols: S.optional(__S(47)),
          OperatingSystemName: S.optional(S.String),
          GlobalAccelerator: S.optional(__S(48)),
          NestedVirtualizationEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "WorkspaceProperties" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          UserName: S.String,
          BundleId: S.String,
          VolumeEncryptionKey: S.optional(S.String),
          UserVolumeEncryptionEnabled: S.optional(S.Boolean),
          RootVolumeEncryptionEnabled: S.optional(S.Boolean),
          WorkspaceProperties: S.optional(__S(49)),
          Tags: S.optional(__S(17)),
          WorkspaceName: S.optional(S.String),
          Ipv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceRequest" });
    case 3:
      return S.Array(__S(50));
    case 4:
      return S.suspend(() =>
        S.Struct({ Workspaces: __S(51) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWorkspacesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkspaceRequest: S.optional(__S(50)),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FailedCreateWorkspaceRequest",
      });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Resource: S.optional(S.String),
          State: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModificationState" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          WorkspaceId: S.optional(S.String),
          Region: S.optional(S.String),
          State: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RelatedWorkspaceProperties",
      });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DataReplication: S.optional(S.String),
          RecoverySnapshotTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DataReplicationSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandbyWorkspaceId: S.optional(S.String),
          DataReplication: S.optional(S.String),
          RecoverySnapshotTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "StandbyWorkspacesProperties",
      });
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkspaceId: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          UserName: S.optional(S.String),
          IpAddress: S.optional(S.String),
          Ipv6Address: S.optional(S.String),
          State: S.optional(S.String),
          BundleId: S.optional(S.String),
          SubnetId: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ComputerName: S.optional(S.String),
          VolumeEncryptionKey: S.optional(S.String),
          UserVolumeEncryptionEnabled: S.optional(S.Boolean),
          RootVolumeEncryptionEnabled: S.optional(S.Boolean),
          WorkspaceName: S.optional(S.String),
          WorkspaceProperties: S.optional(__S(49)),
          ModificationStates: S.optional(__S(56)),
          RelatedWorkspaces: S.optional(__S(58)),
          DataReplicationSettings: S.optional(__S(59)),
          StandbyWorkspacesProperties: S.optional(__S(61)),
        }),
      ).annotate({ identifier: "Workspace" });
    case 7:
      return S.Array(__S(62));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FailedRequests: S.optional(__S(54)),
          PendingRequests: S.optional(__S(63)),
        }).pipe(ns),
      ).annotate({ identifier: "CreateWorkspacesResult" });
    case 1:
      return S.suspend(() => S.Struct({ DesiredUserSessions: S.Number })).annotate({
        identifier: "Capacity",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Status: S.String, SettingsGroup: S.optional(S.String) }),
      ).annotate({
        identifier: "ApplicationSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DisconnectTimeoutInSeconds: S.optional(S.Number),
          IdleDisconnectTimeoutInSeconds: S.optional(S.Number),
          MaxUserDurationInSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TimeoutSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PoolName: S.String,
          Description: S.String,
          BundleId: S.String,
          DirectoryId: S.String,
          Capacity: __S(65),
          Tags: S.optional(__S(17)),
          ApplicationSettings: S.optional(__S(66)),
          TimeoutSettings: S.optional(__S(67)),
          RunningMode: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateWorkspacesPoolRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailableUserSessions: S.Number,
          DesiredUserSessions: S.Number,
          ActualUserSessions: S.Number,
          ActiveUserSessions: S.Number,
        }),
      ).annotate({ identifier: "CapacityStatus" });
    case 6:
      return S.Array(__S(9));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.String,
          SettingsGroup: S.optional(S.String),
          S3BucketName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ApplicationSettingsResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          PoolArn: S.String,
          CapacityStatus: __S(69),
          PoolName: S.String,
          Description: S.optional(S.String),
          State: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          BundleId: S.String,
          DirectoryId: S.String,
          Errors: S.optional(__S(70)),
          ApplicationSettings: S.optional(__S(71)),
          TimeoutSettings: S.optional(__S(67)),
          RunningMode: S.String,
        }),
      ).annotate({ identifier: "WorkspacesPool" });
    case 1:
      return S.suspend(() => S.Struct({ WorkspacesPool: S.optional(__S(72)) }).pipe(ns)).annotate({
        identifier: "CreateWorkspacesPoolResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LinkId: S.String, ClientToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAccountLinkInvitationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, Platforms: __S(47) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteClientBrandingRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteClientBrandingResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AddInId: S.String, ResourceId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConnectClientAddInRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AliasId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConnectionAliasRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GroupId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIpGroupRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, TagKeys: __S(5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTagsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ BundleId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteWorkspaceBundleRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ImageId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteWorkspaceImageRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ WorkspaceId: S.String, Force: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeployWorkspaceApplicationsRequest",
      });
    case 4:
      return S.Array(__S(10));
    case 5:
      return S.suspend(() => S.Struct({ Associations: S.optional(__S(84)) })).annotate({
        identifier: "WorkSpaceApplicationDeployment",
      });
    case 6:
      return S.suspend(() => S.Struct({ Deployment: S.optional(__S(85)) }).pipe(ns)).annotate({
        identifier: "DeployWorkspaceApplicationsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterWorkspaceDirectoryRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeAccountRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DedicatedTenancySupport: S.optional(S.String),
          DedicatedTenancyManagementCidrRange: S.optional(S.String),
          DedicatedTenancyAccountType: S.optional(S.String),
          Message: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeAccountResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountModificationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ModificationState: S.optional(S.String),
          DedicatedTenancySupport: S.optional(S.String),
          DedicatedTenancyManagementCidrRange: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountModification" });
    case 4:
      return S.Array(__S(91));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountModifications: S.optional(__S(92)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeAccountModificationsResult",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ApplicationId: S.String,
          AssociatedResourceTypes: __S(94),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationAssociationsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          AssociatedResourceId: S.optional(S.String),
          AssociatedResourceType: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
          StateReason: S.optional(__S(9)),
        }),
      ).annotate({
        identifier: "ApplicationResourceAssociation",
      });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Associations: S.optional(__S(97)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeApplicationAssociationsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationIds: S.optional(__S(5)),
          ComputeTypeNames: S.optional(__S(47)),
          LicenseType: S.optional(S.String),
          OperatingSystemNames: S.optional(__S(47)),
          Owner: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationId: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(S.String),
          LicenseType: S.optional(S.String),
          Name: S.optional(S.String),
          Owner: S.optional(S.String),
          State: S.optional(S.String),
          SupportedComputeTypeNames: S.optional(__S(47)),
          SupportedOperatingSystemNames: S.optional(__S(47)),
        }),
      ).annotate({ identifier: "WorkSpaceApplication" });
    case 5:
      return S.Array(__S(100));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Applications: S.optional(__S(101)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeApplicationsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BundleId: S.String,
          AssociatedResourceTypes: __S(47),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeBundleAssociationsRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AssociatedResourceId: S.optional(S.String),
          AssociatedResourceType: S.optional(S.String),
          BundleId: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
          StateReason: S.optional(__S(9)),
        }),
      ).annotate({
        identifier: "BundleResourceAssociation",
      });
    case 1:
      return S.Array(__S(104));
    case 2:
      return S.suspend(() => S.Struct({ Associations: S.optional(__S(105)) }).pipe(ns)).annotate({
        identifier: "DescribeBundleAssociationsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeClientBrandingRequest",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          LogoUrl: S.optional(S.String),
          SupportEmail: S.optional(S.String),
          SupportLink: S.optional(S.String),
          ForgotPasswordLink: S.optional(S.String),
          LoginMessage: S.optional(__S(108)),
        }),
      ).annotate({
        identifier: "DefaultClientBrandingAttributes",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LogoUrl: S.optional(S.String),
          Logo2xUrl: S.optional(S.String),
          Logo3xUrl: S.optional(S.String),
          SupportEmail: S.optional(S.String),
          SupportLink: S.optional(S.String),
          ForgotPasswordLink: S.optional(S.String),
          LoginMessage: S.optional(__S(108)),
        }),
      ).annotate({
        identifier: "IosClientBrandingAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeviceTypeWindows: S.optional(__S(109)),
          DeviceTypeOsx: S.optional(__S(109)),
          DeviceTypeAndroid: S.optional(__S(109)),
          DeviceTypeIos: S.optional(__S(110)),
          DeviceTypeLinux: S.optional(__S(109)),
          DeviceTypeWeb: S.optional(__S(109)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeClientBrandingResult",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceIds: __S(5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeClientPropertiesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReconnectEnabled: S.optional(S.String),
          LogUploadEnabled: S.optional(S.String),
          ClientExperiencePolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "ClientProperties" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.optional(S.String),
          ClientProperties: S.optional(__S(113)),
        }),
      ).annotate({ identifier: "ClientPropertiesResult" });
    case 3:
      return S.Array(__S(114));
    case 4:
      return S.suspend(() =>
        S.Struct({ ClientPropertiesList: S.optional(__S(115)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeClientPropertiesResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConnectClientAddInsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AddInId: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Name: S.optional(S.String),
          URL: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectClientAddIn" });
    case 7:
      return S.Array(__S(118));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AddIns: S.optional(__S(119)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConnectClientAddInsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AliasIds: S.optional(__S(5)),
          ResourceId: S.optional(S.String),
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConnectionAliasesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AssociationStatus: S.optional(S.String),
          AssociatedAccountId: S.optional(S.String),
          ResourceId: S.optional(S.String),
          ConnectionIdentifier: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConnectionAliasAssociation",
      });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectionString: S.optional(S.String),
          AliasId: S.optional(S.String),
          State: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          Associations: S.optional(__S(123)),
        }),
      ).annotate({ identifier: "ConnectionAlias" });
    case 5:
      return S.Array(__S(124));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConnectionAliases: S.optional(__S(125)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConnectionAliasesResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AliasId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConnectionAliasPermissionsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SharedAccountId: S.String, AllowAssociation: S.Boolean }),
      ).annotate({
        identifier: "ConnectionAliasPermission",
      });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() =>
        S.Struct({
          AliasId: S.optional(S.String),
          ConnectionAliasPermissions: S.optional(__S(129)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConnectionAliasPermissionsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ImageId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeCustomWorkspaceImageImportRequest",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Ec2ImportTaskId: S.String }),
        /*@__PURE__*/ S.Struct({ ImageBuildVersionArn: S.String }),
        /*@__PURE__*/ S.Struct({ Ec2ImageId: S.String }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({
        identifier: "CustomWorkspaceImageImportErrorDetails",
      });
    case 6:
      return S.Array(__S(133));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.optional(S.String),
          InfrastructureConfigurationArn: S.optional(S.String),
          State: S.optional(S.String),
          StateMessage: S.optional(S.String),
          ProgressPercentage: S.optional(S.Number),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ImageSource: S.optional(__S(132)),
          ImageBuilderInstanceId: S.optional(S.String),
          ErrorDetails: S.optional(__S(134)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeCustomWorkspaceImageImportResult",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.String,
          AssociatedResourceTypes: __S(47),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeImageAssociationsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AssociatedResourceId: S.optional(S.String),
          AssociatedResourceType: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ImageId: S.optional(S.String),
          State: S.optional(S.String),
          StateReason: S.optional(__S(9)),
        }),
      ).annotate({ identifier: "ImageResourceAssociation" });
    case 2:
      return S.Array(__S(137));
    case 3:
      return S.suspend(() => S.Struct({ Associations: S.optional(__S(138)) }).pipe(ns)).annotate({
        identifier: "DescribeImageAssociationsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GroupIds: S.optional(__S(5)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeIpGroupsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          groupId: S.optional(S.String),
          groupName: S.optional(S.String),
          groupDesc: S.optional(S.String),
          userRules: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "WorkspacesIpGroup" });
    case 6:
      return S.Array(__S(141));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Result: S.optional(__S(142)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribeIpGroupsResult" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTagsRequest" });
    case 1:
      return S.suspend(() => S.Struct({ TagList: S.optional(__S(17)) }).pipe(ns)).annotate({
        identifier: "DescribeTagsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkspaceId: S.String,
          AssociatedResourceTypes: __S(94),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspaceAssociationsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Associations: S.optional(__S(84)) }).pipe(ns)).annotate({
        identifier: "DescribeWorkspaceAssociationsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BundleIds: S.optional(__S(5)),
          Owner: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspaceBundlesRequest",
      });
    case 5:
      return S.Array(__S(42));
    case 6:
      return S.suspend(() =>
        S.Struct({ Bundles: S.optional(__S(149)), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspaceBundlesResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Values: __S(5),
        }),
      ).annotate({
        identifier: "DescribeWorkspaceDirectoriesFilter",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(151));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryIds: S.optional(__S(5)),
          WorkspaceDirectoryNames: S.optional(__S(5)),
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(__S(152)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspaceDirectoriesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnableInternetAccess: S.optional(S.Boolean),
          DefaultOu: S.optional(S.String),
          CustomSecurityGroupId: S.optional(S.String),
          UserEnabledAsLocalAdministrator: S.optional(S.Boolean),
          EnableMaintenanceMode: S.optional(S.Boolean),
          InstanceIamRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DefaultWorkspaceCreationProperties",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccessEndpointType: S.optional(S.String),
          VpcEndpointId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessEndpoint" });
    case 4:
      return S.Array(__S(155));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccessEndpoints: __S(156),
          InternetFallbackProtocols: S.optional(__S(47)),
        }),
      ).annotate({ identifier: "AccessEndpointConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DeviceTypeWindows: S.optional(S.String),
          DeviceTypeOsx: S.optional(S.String),
          DeviceTypeWeb: S.optional(S.String),
          DeviceTypeIos: S.optional(S.String),
          DeviceTypeAndroid: S.optional(S.String),
          DeviceTypeChromeOs: S.optional(S.String),
          DeviceTypeZeroClient: S.optional(S.String),
          DeviceTypeLinux: S.optional(S.String),
          DeviceTypeWorkSpacesThinClient: S.optional(S.String),
          AccessEndpointConfig: S.optional(__S(157)),
        }),
      ).annotate({
        identifier: "WorkspaceAccessProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RestartWorkspace: S.optional(S.String),
          IncreaseVolumeSize: S.optional(S.String),
          ChangeComputeType: S.optional(S.String),
          SwitchRunningMode: S.optional(S.String),
          RebuildWorkspace: S.optional(S.String),
        }),
      ).annotate({ identifier: "SelfservicePermissions" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          UserAccessUrl: S.optional(S.String),
          RelayStateParameterName: S.optional(S.String),
        }),
      ).annotate({ identifier: "SamlProperties" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CertificateAuthorityArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CertificateBasedAuthProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TenantId: S.optional(S.String),
          ApplicationConfigSecretArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "MicrosoftEntraConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.optional(S.String), ApplicationArn: S.optional(S.String) }),
      ).annotate({ identifier: "IDCConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String, ServiceAccountSecretArn: S.String }),
      ).annotate({ identifier: "ActiveDirectoryConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Action: S.String,
          Permission: S.String,
          MaximumLength: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UserSetting" });
    case 6:
      return S.Array(__S(165));
    case 7:
      return S.suspend(() => S.Struct({ ConnectorType: S.String, Status: S.String })).annotate({
        identifier: "StorageConnector",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StreamingExperiencePreferredProtocol: S.optional(S.String),
          UserSettings: S.optional(__S(166)),
          StorageConnectors: S.optional(__S(168)),
          GlobalAccelerator: S.optional(__S(48)),
        }),
      ).annotate({ identifier: "StreamingProperties" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          Alias: S.optional(S.String),
          DirectoryName: S.optional(S.String),
          RegistrationCode: S.optional(S.String),
          SubnetIds: S.optional(__S(5)),
          DnsIpAddresses: S.optional(__S(5)),
          DnsIpv6Addresses: S.optional(__S(5)),
          CustomerUserName: S.optional(S.String),
          IamRoleId: S.optional(S.String),
          DirectoryType: S.optional(S.String),
          WorkspaceSecurityGroupId: S.optional(S.String),
          State: S.optional(S.String),
          WorkspaceCreationProperties: S.optional(__S(154)),
          ipGroupIds: S.optional(__S(5)),
          WorkspaceAccessProperties: S.optional(__S(158)),
          Tenancy: S.optional(S.String),
          SelfservicePermissions: S.optional(__S(159)),
          SamlProperties: S.optional(__S(160)),
          CertificateBasedAuthProperties: S.optional(__S(161)),
          EndpointEncryptionMode: S.optional(S.String),
          MicrosoftEntraConfig: S.optional(__S(162)),
          WorkspaceDirectoryName: S.optional(S.String),
          WorkspaceDirectoryDescription: S.optional(S.String),
          UserIdentityType: S.optional(S.String),
          WorkspaceType: S.optional(S.String),
          IDCConfig: S.optional(__S(163)),
          ActiveDirectoryConfig: S.optional(__S(164)),
          StreamingProperties: S.optional(__S(169)),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceDirectory" });
    case 3:
      return S.Array(__S(170));
    case 4:
      return S.suspend(() =>
        S.Struct({ Directories: S.optional(__S(171)), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspaceDirectoriesResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspaceImagePermissionsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ SharedAccountId: S.optional(S.String) })).annotate({
        identifier: "ImagePermission",
      });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.optional(S.String),
          ImagePermissions: S.optional(__S(175)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspaceImagePermissionsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ImageIds: S.optional(__S(5)),
          ImageType: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspaceImagesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ UpdateAvailable: S.optional(S.Boolean), Description: S.optional(S.String) }),
      ).annotate({ identifier: "UpdateResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ErrorDetails" });
    case 4:
      return S.Array(__S(179));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          OperatingSystem: S.optional(__S(45)),
          State: S.optional(S.String),
          RequiredTenancy: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          Created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OwnerAccountId: S.optional(S.String),
          Updates: S.optional(__S(178)),
          ErrorDetails: S.optional(__S(180)),
        }),
      ).annotate({ identifier: "WorkspaceImage" });
    case 6:
      return S.Array(__S(181));
    case 7:
      return S.suspend(() =>
        S.Struct({ Images: S.optional(__S(182)), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspaceImagesResult",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkspaceIds: S.optional(__S(5)),
          DirectoryId: S.optional(S.String),
          UserName: S.optional(S.String),
          BundleId: S.optional(S.String),
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
          WorkspaceName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspacesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Workspaces: S.optional(__S(63)), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "DescribeWorkspacesResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          WorkspaceIds: S.optional(__S(5)),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspacesConnectionStatusRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkspaceId: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          ConnectionStateCheckTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          LastKnownUserConnectionTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
        }),
      ).annotate({
        identifier: "WorkspaceConnectionStatus",
      });
    case 4:
      return S.Array(__S(187));
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkspacesConnectionStatus: S.optional(__S(188)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspacesConnectionStatusResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ WorkspaceId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeWorkspaceSnapshotsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SnapshotTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))) }),
      ).annotate({ identifier: "Snapshot" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(191));
    case 1:
      return S.suspend(() =>
        S.Struct({
          RebuildSnapshots: S.optional(__S(192)),
          RestoreSnapshots: S.optional(__S(192)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspaceSnapshotsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Values: __S(5),
          Operator: S.String,
        }),
      ).annotate({
        identifier: "DescribeWorkspacesPoolsFilter",
      });
    case 3:
      return S.Array(__S(194));
    case 4:
      return S.suspend(() =>
        S.Struct({
          PoolIds: S.optional(__S(5)),
          Filters: S.optional(__S(195)),
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspacesPoolsRequest",
      });
    case 5:
      return S.Array(__S(72));
    case 6:
      return S.suspend(() =>
        S.Struct({
          WorkspacesPools: S.optional(__S(197)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspacesPoolsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          UserId: S.optional(S.String),
          Limit: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeWorkspacesPoolSessionsRequest",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EniPrivateIpAddress: S.optional(S.String), EniId: S.optional(S.String) }),
      ).annotate({
        identifier: "NetworkAccessConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AuthenticationType: S.optional(S.String),
          ConnectionState: S.optional(S.String),
          SessionId: S.String,
          InstanceId: S.optional(S.String),
          PoolId: S.String,
          ExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NetworkAccessConfiguration: S.optional(__S(200)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UserId: S.String,
        }),
      ).annotate({ identifier: "WorkspacesPoolSession" });
    case 2:
      return S.Array(__S(201));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Sessions: S.optional(__S(202)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeWorkspacesPoolSessionsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AliasId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateConnectionAliasRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, GroupIds: __S(5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateIpGroupsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ WorkspaceId: S.String, ApplicationId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateWorkspaceApplicationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LinkId: S.optional(S.String), LinkedAccountId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccountLinkRequest" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AccountLink: S.optional(__S(1)) }).pipe(ns)).annotate({
        identifier: "GetAccountLinkResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Logo: S.optional(T.Blob),
          SupportEmail: S.optional(S.String),
          SupportLink: S.optional(S.String),
          ForgotPasswordLink: S.optional(S.String),
          LoginMessage: S.optional(__S(108)),
        }),
      ).annotate({
        identifier: "DefaultImportClientBrandingAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Logo: S.optional(T.Blob),
          Logo2x: S.optional(T.Blob),
          Logo3x: S.optional(T.Blob),
          SupportEmail: S.optional(S.String),
          SupportLink: S.optional(S.String),
          ForgotPasswordLink: S.optional(S.String),
          LoginMessage: S.optional(__S(108)),
        }),
      ).annotate({
        identifier: "IosImportClientBrandingAttributes",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          DeviceTypeWindows: S.optional(__S(209)),
          DeviceTypeOsx: S.optional(__S(209)),
          DeviceTypeAndroid: S.optional(__S(209)),
          DeviceTypeIos: S.optional(__S(210)),
          DeviceTypeLinux: S.optional(__S(209)),
          DeviceTypeWeb: S.optional(__S(209)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ImportClientBrandingRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ImageName: S.String,
          ImageDescription: S.String,
          ComputeType: S.String,
          Protocol: S.String,
          ImageSource: __S(132),
          InfrastructureConfigurationArn: S.String,
          Platform: S.String,
          OsVersion: S.String,
          Tags: S.optional(__S(17)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ImportCustomWorkspaceImageRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ImageId: S.optional(S.String),
          State: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ImportCustomWorkspaceImageResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Ec2ImageId: S.String,
          IngestionProcess: S.String,
          ImageName: S.String,
          ImageDescription: S.String,
          Tags: S.optional(__S(17)),
          Applications: S.optional(__S(47)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ImportWorkspaceImageRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LinkStatusFilter: S.optional(__S(47)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListAccountLinksRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(1));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountLinks: S.optional(__S(216)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListAccountLinksResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ManagementCidrRangeConstraint: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailableManagementCidrRangesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ManagementCidrRanges: S.optional(__S(5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAvailableManagementCidrRangesResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SourceWorkspaceId: S.String, BundleId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "MigrateWorkspaceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceWorkspaceId: S.optional(S.String),
          TargetWorkspaceId: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "MigrateWorkspaceResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DedicatedTenancySupport: S.optional(S.String),
          DedicatedTenancyManagementCidrRange: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ModifyAccountRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "ModifyAccountResult",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          CertificateBasedAuthProperties: S.optional(__S(161)),
          PropertiesToDelete: S.optional(__S(94)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyCertificateBasedAuthPropertiesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, ClientProperties: __S(113) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ModifyClientPropertiesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DirectoryId: S.String, EndpointEncryptionMode: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ModifyEndpointEncryptionModeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          SamlProperties: S.optional(__S(160)),
          PropertiesToDelete: S.optional(__S(47)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifySamlPropertiesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceId: S.String, SelfservicePermissions: __S(159) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ModifySelfservicePermissionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          StreamingProperties: S.optional(__S(169)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyStreamingPropertiesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          WorkspaceAccessProperties: __S(158),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyWorkspaceAccessPropertiesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.String,
          WorkspaceCreationProperties: __S(154),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyWorkspaceCreationPropertiesRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkspaceId: S.String,
          WorkspaceProperties: S.optional(__S(49)),
          DataReplication: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ModifyWorkspacePropertiesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ WorkspaceId: S.String, WorkspaceState: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ModifyWorkspaceStateRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ WorkspaceId: S.String })).annotate({
        identifier: "RebootRequest",
      });
    case 3:
      return S.Array(__S(234));
    case 4:
      return S.suspend(() =>
        S.Struct({ RebootWorkspaceRequests: __S(235) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RebootWorkspacesRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          WorkspaceId: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FailedWorkspaceChangeRequest",
      });
    case 6:
      return S.Array(__S(237));
    case 7:
      return S.suspend(() => S.Struct({ FailedRequests: S.optional(__S(238)) }).pipe(ns)).annotate({
        identifier: "RebootWorkspacesResult",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RebuildWorkspaceRequests: __S(235) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RebuildWorkspacesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          SubnetIds: S.optional(__S(5)),
          EnableSelfService: S.optional(S.Boolean),
          Tenancy: S.optional(S.String),
          Tags: S.optional(__S(17)),
          WorkspaceDirectoryName: S.optional(S.String),
          WorkspaceDirectoryDescription: S.optional(S.String),
          UserIdentityType: S.optional(S.String),
          IdcInstanceArn: S.optional(S.String),
          MicrosoftEntraConfig: S.optional(__S(162)),
          WorkspaceType: S.optional(S.String),
          ActiveDirectoryConfig: S.optional(__S(164)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RegisterWorkspaceDirectoryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          State: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "RegisterWorkspaceDirectoryResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ LinkId: S.String, ClientToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RejectAccountLinkInvitationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ WorkspaceId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RestoreWorkspaceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupId: S.String, UserRules: __S(5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RevokeIpRulesRequest" });
    case 6:
      return S.suspend(() => S.Struct({ WorkspaceId: S.optional(S.String) })).annotate({
        identifier: "StartRequest",
      });
    case 7:
      return S.Array(__S(246));
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ StartWorkspaceRequests: __S(247) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartWorkspacesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ PoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartWorkspacesPoolRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ StopWorkspaceRequests: __S(247) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopWorkspacesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ PoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopWorkspacesPoolRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TerminateWorkspaceRequests: __S(235) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TerminateWorkspacesRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ FailedRequests: S.optional(__S(238)) }).pipe(ns)).annotate({
        identifier: "TerminateWorkspacesResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PoolId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TerminateWorkspacesPoolRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SessionId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TerminateWorkspacesPoolSessionRequest",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AddInId: S.String,
          ResourceId: S.String,
          Name: S.optional(S.String),
          URL: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateConnectClientAddInRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AliasId: S.String, ConnectionAliasPermission: __S(128) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateConnectionAliasPermissionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GroupId: S.String, UserRules: __S(13) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateRulesOfIpGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ BundleId: S.optional(S.String), ImageId: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateWorkspaceBundleRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ImageId: S.String, AllowCopyImage: S.Boolean, SharedAccountId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateWorkspaceImagePermissionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          Description: S.optional(S.String),
          BundleId: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          Capacity: S.optional(__S(65)),
          ApplicationSettings: S.optional(__S(66)),
          TimeoutSettings: S.optional(__S(67)),
          RunningMode: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateWorkspacesPoolRequest",
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
  }
}
