import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface PhotonAdminProxyService {
  associateAppBlockBuilderAppBlock(
    input: AssociateAppBlockBuilderAppBlockRequest,
  ): Effect.Effect<
    AssociateAppBlockBuilderAppBlockResult,
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateApplicationFleet(
    input: AssociateApplicationFleetRequest,
  ): Effect.Effect<
    AssociateApplicationFleetResult,
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateApplicationToEntitlement(
    input: AssociateApplicationToEntitlementRequest,
  ): Effect.Effect<
    AssociateApplicationToEntitlementResult,
    | EntitlementNotFoundException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  associateFleet(
    input: AssociateFleetRequest,
  ): Effect.Effect<
    AssociateFleetResult,
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  batchAssociateUserStack(
    input: BatchAssociateUserStackRequest,
  ): Effect.Effect<
    BatchAssociateUserStackResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError
  >;
  batchDisassociateUserStack(
    input: BatchDisassociateUserStackRequest,
  ): Effect.Effect<
    BatchDisassociateUserStackResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError
  >;
  copyImage(
    input: CopyImageRequest,
  ): Effect.Effect<
    CopyImageResponse,
    | IncompatibleImageException
    | InvalidAccountStatusException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createAppBlock(
    input: CreateAppBlockRequest,
  ): Effect.Effect<
    CreateAppBlockResult,
    | ConcurrentModificationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createAppBlockBuilder(
    input: CreateAppBlockBuilderRequest,
  ): Effect.Effect<
    CreateAppBlockBuilderResult,
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
    | CommonAwsError
  >;
  createAppBlockBuilderStreamingURL(
    input: CreateAppBlockBuilderStreamingURLRequest,
  ): Effect.Effect<
    CreateAppBlockBuilderStreamingURLResult,
    OperationNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResult,
    | ConcurrentModificationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createDirectoryConfig(
    input: CreateDirectoryConfigRequest,
  ): Effect.Effect<
    CreateDirectoryConfigResult,
    | InvalidAccountStatusException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createEntitlement(
    input: CreateEntitlementRequest,
  ): Effect.Effect<
    CreateEntitlementResult,
    | EntitlementAlreadyExistsException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createFleet(
    input: CreateFleetRequest,
  ): Effect.Effect<
    CreateFleetResult,
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
    | CommonAwsError
  >;
  createImageBuilder(
    input: CreateImageBuilderRequest,
  ): Effect.Effect<
    CreateImageBuilderResult,
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
    | CommonAwsError
  >;
  createImageBuilderStreamingURL(
    input: CreateImageBuilderStreamingURLRequest,
  ): Effect.Effect<
    CreateImageBuilderStreamingURLResult,
    OperationNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  createStack(
    input: CreateStackRequest,
  ): Effect.Effect<
    CreateStackResult,
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createStreamingURL(
    input: CreateStreamingURLRequest,
  ): Effect.Effect<
    CreateStreamingURLResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createThemeForStack(
    input: CreateThemeForStackRequest,
  ): Effect.Effect<
    CreateThemeForStackResult,
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createUpdatedImage(
    input: CreateUpdatedImageRequest,
  ): Effect.Effect<
    CreateUpdatedImageResult,
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createUsageReportSubscription(
    input: CreateUsageReportSubscriptionRequest,
  ): Effect.Effect<
    CreateUsageReportSubscriptionResult,
    | InvalidAccountStatusException
    | InvalidRoleException
    | LimitExceededException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResult,
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  deleteAppBlock(
    input: DeleteAppBlockRequest,
  ): Effect.Effect<
    DeleteAppBlockResult,
    | ConcurrentModificationException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteAppBlockBuilder(
    input: DeleteAppBlockBuilderRequest,
  ): Effect.Effect<
    DeleteAppBlockBuilderResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteDirectoryConfig(
    input: DeleteDirectoryConfigRequest,
  ): Effect.Effect<
    DeleteDirectoryConfigResult,
    ResourceInUseException | ResourceNotFoundException | CommonAwsError
  >;
  deleteEntitlement(
    input: DeleteEntitlementRequest,
  ): Effect.Effect<
    DeleteEntitlementResult,
    | ConcurrentModificationException
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteFleet(
    input: DeleteFleetRequest,
  ): Effect.Effect<
    DeleteFleetResult,
    | ConcurrentModificationException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteImage(
    input: DeleteImageRequest,
  ): Effect.Effect<
    DeleteImageResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteImageBuilder(
    input: DeleteImageBuilderRequest,
  ): Effect.Effect<
    DeleteImageBuilderResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteImagePermissions(
    input: DeleteImagePermissionsRequest,
  ): Effect.Effect<
    DeleteImagePermissionsResult,
    ResourceNotAvailableException | ResourceNotFoundException | CommonAwsError
  >;
  deleteStack(
    input: DeleteStackRequest,
  ): Effect.Effect<
    DeleteStackResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteThemeForStack(
    input: DeleteThemeForStackRequest,
  ): Effect.Effect<
    DeleteThemeForStackResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteUsageReportSubscription(
    input: DeleteUsageReportSubscriptionRequest,
  ): Effect.Effect<
    DeleteUsageReportSubscriptionResult,
    InvalidAccountStatusException | ResourceNotFoundException | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeAppBlockBuilderAppBlockAssociations(
    input: DescribeAppBlockBuilderAppBlockAssociationsRequest,
  ): Effect.Effect<
    DescribeAppBlockBuilderAppBlockAssociationsResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError
  >;
  describeAppBlockBuilders(
    input: DescribeAppBlockBuildersRequest,
  ): Effect.Effect<
    DescribeAppBlockBuildersResult,
    OperationNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  describeAppBlocks(
    input: DescribeAppBlocksRequest,
  ): Effect.Effect<
    DescribeAppBlocksResult,
    OperationNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  describeApplicationFleetAssociations(
    input: DescribeApplicationFleetAssociationsRequest,
  ): Effect.Effect<
    DescribeApplicationFleetAssociationsResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError
  >;
  describeApplications(
    input: DescribeApplicationsRequest,
  ): Effect.Effect<
    DescribeApplicationsResult,
    OperationNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  describeDirectoryConfigs(
    input: DescribeDirectoryConfigsRequest,
  ): Effect.Effect<
    DescribeDirectoryConfigsResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeEntitlements(
    input: DescribeEntitlementsRequest,
  ): Effect.Effect<
    DescribeEntitlementsResult,
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeFleets(
    input: DescribeFleetsRequest,
  ): Effect.Effect<
    DescribeFleetsResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeImageBuilders(
    input: DescribeImageBuildersRequest,
  ): Effect.Effect<
    DescribeImageBuildersResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeImagePermissions(
    input: DescribeImagePermissionsRequest,
  ): Effect.Effect<
    DescribeImagePermissionsResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeImages(
    input: DescribeImagesRequest,
  ): Effect.Effect<
    DescribeImagesResult,
    | InvalidParameterCombinationException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeSessions(
    input: DescribeSessionsRequest,
  ): Effect.Effect<
    DescribeSessionsResult,
    InvalidParameterCombinationException | CommonAwsError
  >;
  describeStacks(
    input: DescribeStacksRequest,
  ): Effect.Effect<
    DescribeStacksResult,
    ResourceNotFoundException | CommonAwsError
  >;
  describeThemeForStack(
    input: DescribeThemeForStackRequest,
  ): Effect.Effect<
    DescribeThemeForStackResult,
    OperationNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  describeUsageReportSubscriptions(
    input: DescribeUsageReportSubscriptionsRequest,
  ): Effect.Effect<
    DescribeUsageReportSubscriptionsResult,
    InvalidAccountStatusException | ResourceNotFoundException | CommonAwsError
  >;
  describeUsers(
    input: DescribeUsersRequest,
  ): Effect.Effect<
    DescribeUsersResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeUserStackAssociations(
    input: DescribeUserStackAssociationsRequest,
  ): Effect.Effect<
    DescribeUserStackAssociationsResult,
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError
  >;
  disableUser(
    input: DisableUserRequest,
  ): Effect.Effect<
    DisableUserResult,
    ResourceNotFoundException | CommonAwsError
  >;
  disassociateAppBlockBuilderAppBlock(
    input: DisassociateAppBlockBuilderAppBlockRequest,
  ): Effect.Effect<
    DisassociateAppBlockBuilderAppBlockResult,
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateApplicationFleet(
    input: DisassociateApplicationFleetRequest,
  ): Effect.Effect<
    DisassociateApplicationFleetResult,
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError
  >;
  disassociateApplicationFromEntitlement(
    input: DisassociateApplicationFromEntitlementRequest,
  ): Effect.Effect<
    DisassociateApplicationFromEntitlementResult,
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  disassociateFleet(
    input: DisassociateFleetRequest,
  ): Effect.Effect<
    DisassociateFleetResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  enableUser(
    input: EnableUserRequest,
  ): Effect.Effect<
    EnableUserResult,
    InvalidAccountStatusException | ResourceNotFoundException | CommonAwsError
  >;
  expireSession(
    input: ExpireSessionRequest,
  ): Effect.Effect<ExpireSessionResult, CommonAwsError>;
  listAssociatedFleets(
    input: ListAssociatedFleetsRequest,
  ): Effect.Effect<ListAssociatedFleetsResult, CommonAwsError>;
  listAssociatedStacks(
    input: ListAssociatedStacksRequest,
  ): Effect.Effect<ListAssociatedStacksResult, CommonAwsError>;
  listEntitledApplications(
    input: ListEntitledApplicationsRequest,
  ): Effect.Effect<
    ListEntitledApplicationsResult,
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  startAppBlockBuilder(
    input: StartAppBlockBuilderRequest,
  ): Effect.Effect<
    StartAppBlockBuilderResult,
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | RequestLimitExceededException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startFleet(
    input: StartFleetRequest,
  ): Effect.Effect<
    StartFleetResult,
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | RequestLimitExceededException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startImageBuilder(
    input: StartImageBuilderRequest,
  ): Effect.Effect<
    StartImageBuilderResult,
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopAppBlockBuilder(
    input: StopAppBlockBuilderRequest,
  ): Effect.Effect<
    StopAppBlockBuilderResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopFleet(
    input: StopFleetRequest,
  ): Effect.Effect<
    StopFleetResult,
    ConcurrentModificationException | ResourceNotFoundException | CommonAwsError
  >;
  stopImageBuilder(
    input: StopImageBuilderRequest,
  ): Effect.Effect<
    StopImageBuilderResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidAccountStatusException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  updateAppBlockBuilder(
    input: UpdateAppBlockBuilderRequest,
  ): Effect.Effect<
    UpdateAppBlockBuilderResult,
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
    | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResult,
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateDirectoryConfig(
    input: UpdateDirectoryConfigRequest,
  ): Effect.Effect<
    UpdateDirectoryConfigResult,
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidRoleException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateEntitlement(
    input: UpdateEntitlementRequest,
  ): Effect.Effect<
    UpdateEntitlementResult,
    | ConcurrentModificationException
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateFleet(
    input: UpdateFleetRequest,
  ): Effect.Effect<
    UpdateFleetResult,
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
    | CommonAwsError
  >;
  updateImagePermissions(
    input: UpdateImagePermissionsRequest,
  ): Effect.Effect<
    UpdateImagePermissionsResult,
    | LimitExceededException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateStack(
    input: UpdateStackRequest,
  ): Effect.Effect<
    UpdateStackResult,
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateThemeForStack(
    input: UpdateThemeForStackRequest,
  ): Effect.Effect<
    UpdateThemeForStackResult,
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Appstream = PhotonAdminProxyService;

export interface AccessEndpoint {
  EndpointType: AccessEndpointType;
  VpceId?: string;
}
export type AccessEndpointList = Array<AccessEndpoint>;
export type AccessEndpointType = "STREAMING";
export type AccountName = string;

export type AccountPassword = string;

export type Action =
  | "CLIPBOARD_COPY_FROM_LOCAL_DEVICE"
  | "CLIPBOARD_COPY_TO_LOCAL_DEVICE"
  | "FILE_UPLOAD"
  | "FILE_DOWNLOAD"
  | "PRINTING_TO_LOCAL_DEVICE"
  | "DOMAIN_PASSWORD_SIGNIN"
  | "DOMAIN_SMART_CARD_SIGNIN"
  | "AUTO_TIME_ZONE_REDIRECTION";
export interface AppBlock {
  Name: string;
  Arn: string;
  Description?: string;
  DisplayName?: string;
  SourceS3Location?: S3Location;
  SetupScriptDetails?: ScriptDetails;
  CreatedTime?: Date | string;
  PostSetupScriptDetails?: ScriptDetails;
  PackagingType?: PackagingType;
  State?: AppBlockState;
  AppBlockErrors?: Array<ErrorDetails>;
}
export interface AppBlockBuilder {
  Arn: string;
  Name: string;
  DisplayName?: string;
  Description?: string;
  Platform: AppBlockBuilderPlatformType;
  InstanceType: string;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  VpcConfig: VpcConfig;
  State: AppBlockBuilderState;
  CreatedTime?: Date | string;
  AppBlockBuilderErrors?: Array<ResourceError>;
  StateChangeReason?: AppBlockBuilderStateChangeReason;
  AccessEndpoints?: Array<AccessEndpoint>;
}
export interface AppBlockBuilderAppBlockAssociation {
  AppBlockArn: string;
  AppBlockBuilderName: string;
}
export type AppBlockBuilderAppBlockAssociationsList =
  Array<AppBlockBuilderAppBlockAssociation>;
export type AppBlockBuilderAttribute =
  | "IAM_ROLE_ARN"
  | "ACCESS_ENDPOINTS"
  | "VPC_CONFIGURATION_SECURITY_GROUP_IDS";
export type AppBlockBuilderAttributes = Array<AppBlockBuilderAttribute>;
export type AppBlockBuilderList = Array<AppBlockBuilder>;
export type AppBlockBuilderPlatformType = "WINDOWS_SERVER_2019";
export type AppBlockBuilderState =
  | "STARTING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED";
export interface AppBlockBuilderStateChangeReason {
  Code?: AppBlockBuilderStateChangeReasonCode;
  Message?: string;
}
export type AppBlockBuilderStateChangeReasonCode = "INTERNAL_ERROR";
export type AppBlocks = Array<AppBlock>;
export type AppBlockState = "INACTIVE" | "ACTIVE";
export interface Application {
  Name?: string;
  DisplayName?: string;
  IconURL?: string;
  LaunchPath?: string;
  LaunchParameters?: string;
  Enabled?: boolean;
  Metadata?: Record<string, string>;
  WorkingDirectory?: string;
  Description?: string;
  Arn?: string;
  AppBlockArn?: string;
  IconS3Location?: S3Location;
  Platforms?: Array<PlatformType>;
  InstanceFamilies?: Array<string>;
  CreatedTime?: Date | string;
}
export type ApplicationAttribute = "LAUNCH_PARAMETERS" | "WORKING_DIRECTORY";
export type ApplicationAttributes = Array<ApplicationAttribute>;
export interface ApplicationFleetAssociation {
  FleetName: string;
  ApplicationArn: string;
}
export type ApplicationFleetAssociationList =
  Array<ApplicationFleetAssociation>;
export type Applications = Array<Application>;
export interface ApplicationSettings {
  Enabled: boolean;
  SettingsGroup?: string;
}
export interface ApplicationSettingsResponse {
  Enabled?: boolean;
  SettingsGroup?: string;
  S3BucketName?: string;
}
export type AppstreamAgentVersion = string;

export type AppVisibility = "ALL" | "ASSOCIATED";
export type Arn = string;

export type ArnList = Array<string>;
export interface AssociateAppBlockBuilderAppBlockRequest {
  AppBlockArn: string;
  AppBlockBuilderName: string;
}
export interface AssociateAppBlockBuilderAppBlockResult {
  AppBlockBuilderAppBlockAssociation?: AppBlockBuilderAppBlockAssociation;
}
export interface AssociateApplicationFleetRequest {
  FleetName: string;
  ApplicationArn: string;
}
export interface AssociateApplicationFleetResult {
  ApplicationFleetAssociation?: ApplicationFleetAssociation;
}
export interface AssociateApplicationToEntitlementRequest {
  StackName: string;
  EntitlementName: string;
  ApplicationIdentifier: string;
}
export interface AssociateApplicationToEntitlementResult {}
export interface AssociateFleetRequest {
  FleetName: string;
  StackName: string;
}
export interface AssociateFleetResult {}
export type AuthenticationType = "API" | "SAML" | "USERPOOL" | "AWS_AD";
export type AwsAccountId = string;

export type AwsAccountIdList = Array<string>;
export interface BatchAssociateUserStackRequest {
  UserStackAssociations: Array<UserStackAssociation>;
}
export interface BatchAssociateUserStackResult {
  errors?: Array<UserStackAssociationError>;
}
export interface BatchDisassociateUserStackRequest {
  UserStackAssociations: Array<UserStackAssociation>;
}
export interface BatchDisassociateUserStackResult {
  errors?: Array<UserStackAssociationError>;
}
export type AppstreamBoolean = boolean;

export type BooleanObject = boolean;

export interface CertificateBasedAuthProperties {
  Status?: CertificateBasedAuthStatus;
  CertificateAuthorityArn?: string;
}
export type CertificateBasedAuthStatus =
  | "DISABLED"
  | "ENABLED"
  | "ENABLED_NO_DIRECTORY_LOGIN_FALLBACK";
export interface ComputeCapacity {
  DesiredInstances?: number;
  DesiredSessions?: number;
}
export interface ComputeCapacityStatus {
  Desired: number;
  Running?: number;
  InUse?: number;
  Available?: number;
  DesiredUserSessions?: number;
  AvailableUserSessions?: number;
  ActiveUserSessions?: number;
  ActualUserSessions?: number;
}
export declare class ConcurrentModificationException extends EffectData.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly Message?: string;
}> {}
export interface CopyImageRequest {
  SourceImageName: string;
  DestinationImageName: string;
  DestinationRegion: string;
  DestinationImageDescription?: string;
}
export interface CopyImageResponse {
  DestinationImageName?: string;
}
export interface CreateAppBlockBuilderRequest {
  Name: string;
  Description?: string;
  DisplayName?: string;
  Tags?: Record<string, string>;
  Platform: AppBlockBuilderPlatformType;
  InstanceType: string;
  VpcConfig: VpcConfig;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  AccessEndpoints?: Array<AccessEndpoint>;
}
export interface CreateAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder;
}
export interface CreateAppBlockBuilderStreamingURLRequest {
  AppBlockBuilderName: string;
  Validity?: number;
}
export interface CreateAppBlockBuilderStreamingURLResult {
  StreamingURL?: string;
  Expires?: Date | string;
}
export interface CreateAppBlockRequest {
  Name: string;
  Description?: string;
  DisplayName?: string;
  SourceS3Location: S3Location;
  SetupScriptDetails?: ScriptDetails;
  Tags?: Record<string, string>;
  PostSetupScriptDetails?: ScriptDetails;
  PackagingType?: PackagingType;
}
export interface CreateAppBlockResult {
  AppBlock?: AppBlock;
}
export interface CreateApplicationRequest {
  Name: string;
  DisplayName?: string;
  Description?: string;
  IconS3Location: S3Location;
  LaunchPath: string;
  WorkingDirectory?: string;
  LaunchParameters?: string;
  Platforms: Array<PlatformType>;
  InstanceFamilies: Array<string>;
  AppBlockArn: string;
  Tags?: Record<string, string>;
}
export interface CreateApplicationResult {
  Application?: Application;
}
export interface CreateDirectoryConfigRequest {
  DirectoryName: string;
  OrganizationalUnitDistinguishedNames: Array<string>;
  ServiceAccountCredentials?: ServiceAccountCredentials;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}
export interface CreateDirectoryConfigResult {
  DirectoryConfig?: DirectoryConfig;
}
export interface CreateEntitlementRequest {
  Name: string;
  StackName: string;
  Description?: string;
  AppVisibility: AppVisibility;
  Attributes: Array<EntitlementAttribute>;
}
export interface CreateEntitlementResult {
  Entitlement?: Entitlement;
}
export interface CreateFleetRequest {
  Name: string;
  ImageName?: string;
  ImageArn?: string;
  InstanceType: string;
  FleetType?: FleetType;
  ComputeCapacity?: ComputeCapacity;
  VpcConfig?: VpcConfig;
  MaxUserDurationInSeconds?: number;
  DisconnectTimeoutInSeconds?: number;
  Description?: string;
  DisplayName?: string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  Tags?: Record<string, string>;
  IdleDisconnectTimeoutInSeconds?: number;
  IamRoleArn?: string;
  StreamView?: StreamView;
  Platform?: PlatformType;
  MaxConcurrentSessions?: number;
  UsbDeviceFilterStrings?: Array<string>;
  SessionScriptS3Location?: S3Location;
  MaxSessionsPerInstance?: number;
}
export interface CreateFleetResult {
  Fleet?: Fleet;
}
export interface CreateImageBuilderRequest {
  Name: string;
  ImageName?: string;
  ImageArn?: string;
  InstanceType: string;
  Description?: string;
  DisplayName?: string;
  VpcConfig?: VpcConfig;
  IamRoleArn?: string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  AppstreamAgentVersion?: string;
  Tags?: Record<string, string>;
  AccessEndpoints?: Array<AccessEndpoint>;
}
export interface CreateImageBuilderResult {
  ImageBuilder?: ImageBuilder;
}
export interface CreateImageBuilderStreamingURLRequest {
  Name: string;
  Validity?: number;
}
export interface CreateImageBuilderStreamingURLResult {
  StreamingURL?: string;
  Expires?: Date | string;
}
export interface CreateStackRequest {
  Name: string;
  Description?: string;
  DisplayName?: string;
  StorageConnectors?: Array<StorageConnector>;
  RedirectURL?: string;
  FeedbackURL?: string;
  UserSettings?: Array<UserSetting>;
  ApplicationSettings?: ApplicationSettings;
  Tags?: Record<string, string>;
  AccessEndpoints?: Array<AccessEndpoint>;
  EmbedHostDomains?: Array<string>;
  StreamingExperienceSettings?: StreamingExperienceSettings;
}
export interface CreateStackResult {
  Stack?: Stack;
}
export interface CreateStreamingURLRequest {
  StackName: string;
  FleetName: string;
  UserId: string;
  ApplicationId?: string;
  Validity?: number;
  SessionContext?: string;
}
export interface CreateStreamingURLResult {
  StreamingURL?: string;
  Expires?: Date | string;
}
export interface CreateThemeForStackRequest {
  StackName: string;
  FooterLinks?: Array<ThemeFooterLink>;
  TitleText: string;
  ThemeStyling: ThemeStyling;
  OrganizationLogoS3Location: S3Location;
  FaviconS3Location: S3Location;
}
export interface CreateThemeForStackResult {
  Theme?: Theme;
}
export interface CreateUpdatedImageRequest {
  existingImageName: string;
  newImageName: string;
  newImageDescription?: string;
  newImageDisplayName?: string;
  newImageTags?: Record<string, string>;
  dryRun?: boolean;
}
export interface CreateUpdatedImageResult {
  image?: Image;
  canUpdateImage?: boolean;
}
export interface CreateUsageReportSubscriptionRequest {}
export interface CreateUsageReportSubscriptionResult {
  S3BucketName?: string;
  Schedule?: UsageReportSchedule;
}
export interface CreateUserRequest {
  UserName: string;
  MessageAction?: MessageAction;
  FirstName?: string;
  LastName?: string;
  AuthenticationType: AuthenticationType;
}
export interface CreateUserResult {}
export interface DeleteAppBlockBuilderRequest {
  Name: string;
}
export interface DeleteAppBlockBuilderResult {}
export interface DeleteAppBlockRequest {
  Name: string;
}
export interface DeleteAppBlockResult {}
export interface DeleteApplicationRequest {
  Name: string;
}
export interface DeleteApplicationResult {}
export interface DeleteDirectoryConfigRequest {
  DirectoryName: string;
}
export interface DeleteDirectoryConfigResult {}
export interface DeleteEntitlementRequest {
  Name: string;
  StackName: string;
}
export interface DeleteEntitlementResult {}
export interface DeleteFleetRequest {
  Name: string;
}
export interface DeleteFleetResult {}
export interface DeleteImageBuilderRequest {
  Name: string;
}
export interface DeleteImageBuilderResult {
  ImageBuilder?: ImageBuilder;
}
export interface DeleteImagePermissionsRequest {
  Name: string;
  SharedAccountId: string;
}
export interface DeleteImagePermissionsResult {}
export interface DeleteImageRequest {
  Name: string;
}
export interface DeleteImageResult {
  Image?: Image;
}
export interface DeleteStackRequest {
  Name: string;
}
export interface DeleteStackResult {}
export interface DeleteThemeForStackRequest {
  StackName: string;
}
export interface DeleteThemeForStackResult {}
export interface DeleteUsageReportSubscriptionRequest {}
export interface DeleteUsageReportSubscriptionResult {}
export interface DeleteUserRequest {
  UserName: string;
  AuthenticationType: AuthenticationType;
}
export interface DeleteUserResult {}
export interface DescribeAppBlockBuilderAppBlockAssociationsRequest {
  AppBlockArn?: string;
  AppBlockBuilderName?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAppBlockBuilderAppBlockAssociationsResult {
  AppBlockBuilderAppBlockAssociations?: Array<AppBlockBuilderAppBlockAssociation>;
  NextToken?: string;
}
export interface DescribeAppBlockBuildersRequest {
  Names?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeAppBlockBuildersResult {
  AppBlockBuilders?: Array<AppBlockBuilder>;
  NextToken?: string;
}
export interface DescribeAppBlocksRequest {
  Arns?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeAppBlocksResult {
  AppBlocks?: Array<AppBlock>;
  NextToken?: string;
}
export interface DescribeApplicationFleetAssociationsRequest {
  FleetName?: string;
  ApplicationArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeApplicationFleetAssociationsResult {
  ApplicationFleetAssociations?: Array<ApplicationFleetAssociation>;
  NextToken?: string;
}
export interface DescribeApplicationsRequest {
  Arns?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeApplicationsResult {
  Applications?: Array<Application>;
  NextToken?: string;
}
export interface DescribeDirectoryConfigsRequest {
  DirectoryNames?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDirectoryConfigsResult {
  DirectoryConfigs?: Array<DirectoryConfig>;
  NextToken?: string;
}
export interface DescribeEntitlementsRequest {
  Name?: string;
  StackName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeEntitlementsResult {
  Entitlements?: Array<Entitlement>;
  NextToken?: string;
}
export interface DescribeFleetsRequest {
  Names?: Array<string>;
  NextToken?: string;
}
export interface DescribeFleetsResult {
  Fleets?: Array<Fleet>;
  NextToken?: string;
}
export interface DescribeImageBuildersRequest {
  Names?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeImageBuildersResult {
  ImageBuilders?: Array<ImageBuilder>;
  NextToken?: string;
}
export interface DescribeImagePermissionsRequest {
  Name: string;
  MaxResults?: number;
  SharedAwsAccountIds?: Array<string>;
  NextToken?: string;
}
export interface DescribeImagePermissionsResult {
  Name?: string;
  SharedImagePermissionsList?: Array<SharedImagePermissions>;
  NextToken?: string;
}
export type DescribeImagesMaxResults = number;

export interface DescribeImagesRequest {
  Names?: Array<string>;
  Arns?: Array<string>;
  Type?: VisibilityType;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeImagesResult {
  Images?: Array<Image>;
  NextToken?: string;
}
export interface DescribeSessionsRequest {
  StackName: string;
  FleetName: string;
  UserId?: string;
  NextToken?: string;
  Limit?: number;
  AuthenticationType?: AuthenticationType;
  InstanceId?: string;
}
export interface DescribeSessionsResult {
  Sessions?: Array<Session>;
  NextToken?: string;
}
export interface DescribeStacksRequest {
  Names?: Array<string>;
  NextToken?: string;
}
export interface DescribeStacksResult {
  Stacks?: Array<Stack>;
  NextToken?: string;
}
export interface DescribeThemeForStackRequest {
  StackName: string;
}
export interface DescribeThemeForStackResult {
  Theme?: Theme;
}
export interface DescribeUsageReportSubscriptionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeUsageReportSubscriptionsResult {
  UsageReportSubscriptions?: Array<UsageReportSubscription>;
  NextToken?: string;
}
export interface DescribeUsersRequest {
  AuthenticationType: AuthenticationType;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeUsersResult {
  Users?: Array<User>;
  NextToken?: string;
}
export interface DescribeUserStackAssociationsRequest {
  StackName?: string;
  UserName?: string;
  AuthenticationType?: AuthenticationType;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeUserStackAssociationsResult {
  UserStackAssociations?: Array<UserStackAssociation>;
  NextToken?: string;
}
export type Description = string;

export interface DirectoryConfig {
  DirectoryName: string;
  OrganizationalUnitDistinguishedNames?: Array<string>;
  ServiceAccountCredentials?: ServiceAccountCredentials;
  CreatedTime?: Date | string;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}
export type DirectoryConfigList = Array<DirectoryConfig>;
export type DirectoryName = string;

export type DirectoryNameList = Array<string>;
export interface DisableUserRequest {
  UserName: string;
  AuthenticationType: AuthenticationType;
}
export interface DisableUserResult {}
export interface DisassociateAppBlockBuilderAppBlockRequest {
  AppBlockArn: string;
  AppBlockBuilderName: string;
}
export interface DisassociateAppBlockBuilderAppBlockResult {}
export interface DisassociateApplicationFleetRequest {
  FleetName: string;
  ApplicationArn: string;
}
export interface DisassociateApplicationFleetResult {}
export interface DisassociateApplicationFromEntitlementRequest {
  StackName: string;
  EntitlementName: string;
  ApplicationIdentifier: string;
}
export interface DisassociateApplicationFromEntitlementResult {}
export interface DisassociateFleetRequest {
  FleetName: string;
  StackName: string;
}
export interface DisassociateFleetResult {}
export type DisplayName = string;

export type Domain = string;

export interface DomainJoinInfo {
  DirectoryName?: string;
  OrganizationalUnitDistinguishedName?: string;
}
export type DomainList = Array<string>;
export type DynamicAppProvidersEnabled = "ENABLED" | "DISABLED";
export type EmbedHostDomain = string;

export type EmbedHostDomains = Array<string>;
export interface EnableUserRequest {
  UserName: string;
  AuthenticationType: AuthenticationType;
}
export interface EnableUserResult {}
export interface EntitledApplication {
  ApplicationIdentifier: string;
}
export type EntitledApplicationList = Array<EntitledApplication>;
export interface Entitlement {
  Name: string;
  StackName: string;
  Description?: string;
  AppVisibility: AppVisibility;
  Attributes: Array<EntitlementAttribute>;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
}
export declare class EntitlementAlreadyExistsException extends EffectData.TaggedError(
  "EntitlementAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface EntitlementAttribute {
  Name: string;
  Value: string;
}
export type EntitlementAttributeList = Array<EntitlementAttribute>;
export type EntitlementList = Array<Entitlement>;
export declare class EntitlementNotFoundException extends EffectData.TaggedError(
  "EntitlementNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface ErrorDetails {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ErrorDetailsList = Array<ErrorDetails>;
export type ErrorMessage = string;

export interface ExpireSessionRequest {
  SessionId: string;
}
export interface ExpireSessionResult {}
export type FeedbackURL = string;

export interface Fleet {
  Arn: string;
  Name: string;
  DisplayName?: string;
  Description?: string;
  ImageName?: string;
  ImageArn?: string;
  InstanceType: string;
  FleetType?: FleetType;
  ComputeCapacityStatus: ComputeCapacityStatus;
  MaxUserDurationInSeconds?: number;
  DisconnectTimeoutInSeconds?: number;
  State: FleetState;
  VpcConfig?: VpcConfig;
  CreatedTime?: Date | string;
  FleetErrors?: Array<FleetError>;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  IdleDisconnectTimeoutInSeconds?: number;
  IamRoleArn?: string;
  StreamView?: StreamView;
  Platform?: PlatformType;
  MaxConcurrentSessions?: number;
  UsbDeviceFilterStrings?: Array<string>;
  SessionScriptS3Location?: S3Location;
  MaxSessionsPerInstance?: number;
}
export type FleetAttribute =
  | "VPC_CONFIGURATION"
  | "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
  | "DOMAIN_JOIN_INFO"
  | "IAM_ROLE_ARN"
  | "USB_DEVICE_FILTER_STRINGS"
  | "SESSION_SCRIPT_S3_LOCATION"
  | "MAX_SESSIONS_PER_INSTANCE";
export type FleetAttributes = Array<FleetAttribute>;
export interface FleetError {
  ErrorCode?: FleetErrorCode;
  ErrorMessage?: string;
}
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
  | "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR";
export type FleetErrors = Array<FleetError>;
export type FleetList = Array<Fleet>;
export type FleetState = "STARTING" | "RUNNING" | "STOPPING" | "STOPPED";
export type FleetType = "ALWAYS_ON" | "ON_DEMAND" | "ELASTIC";
export interface Image {
  Name: string;
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
  Applications?: Array<Application>;
  CreatedTime?: Date | string;
  PublicBaseImageReleasedDate?: Date | string;
  AppstreamAgentVersion?: string;
  ImagePermissions?: ImagePermissions;
  ImageErrors?: Array<ResourceError>;
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion;
  SupportedInstanceFamilies?: Array<string>;
  DynamicAppProvidersEnabled?: DynamicAppProvidersEnabled;
  ImageSharedWithOthers?: ImageSharedWithOthers;
}
export interface ImageBuilder {
  Name: string;
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
  CreatedTime?: Date | string;
  EnableDefaultInternetAccess?: boolean;
  DomainJoinInfo?: DomainJoinInfo;
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
  ImageBuilderErrors?: Array<ResourceError>;
  AppstreamAgentVersion?: string;
  AccessEndpoints?: Array<AccessEndpoint>;
  LatestAppstreamAgentVersion?: LatestAppstreamAgentVersion;
}
export type ImageBuilderList = Array<ImageBuilder>;
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
  | "PENDING_QUALIFICATION";
export interface ImageBuilderStateChangeReason {
  Code?: ImageBuilderStateChangeReasonCode;
  Message?: string;
}
export type ImageBuilderStateChangeReasonCode =
  | "INTERNAL_ERROR"
  | "IMAGE_UNAVAILABLE";
export type ImageList = Array<Image>;
export interface ImagePermissions {
  allowFleet?: boolean;
  allowImageBuilder?: boolean;
}
export type ImageSharedWithOthers = "TRUE" | "FALSE";
export type ImageState =
  | "PENDING"
  | "AVAILABLE"
  | "FAILED"
  | "COPYING"
  | "DELETING"
  | "CREATING"
  | "IMPORTING";
export interface ImageStateChangeReason {
  Code?: ImageStateChangeReasonCode;
  Message?: string;
}
export type ImageStateChangeReasonCode =
  | "INTERNAL_ERROR"
  | "IMAGE_BUILDER_NOT_AVAILABLE"
  | "IMAGE_COPY_FAILURE";
export declare class IncompatibleImageException extends EffectData.TaggedError(
  "IncompatibleImageException",
)<{
  readonly Message?: string;
}> {}
export type Integer = number;

export declare class InvalidAccountStatusException extends EffectData.TaggedError(
  "InvalidAccountStatusException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidParameterCombinationException extends EffectData.TaggedError(
  "InvalidParameterCombinationException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRoleException extends EffectData.TaggedError(
  "InvalidRoleException",
)<{
  readonly Message?: string;
}> {}
export interface LastReportGenerationExecutionError {
  ErrorCode?: UsageReportExecutionErrorCode;
  ErrorMessage?: string;
}
export type LastReportGenerationExecutionErrors =
  Array<LastReportGenerationExecutionError>;
export type LatestAppstreamAgentVersion = "TRUE" | "FALSE";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAssociatedFleetsRequest {
  StackName: string;
  NextToken?: string;
}
export interface ListAssociatedFleetsResult {
  Names?: Array<string>;
  NextToken?: string;
}
export interface ListAssociatedStacksRequest {
  FleetName: string;
  NextToken?: string;
}
export interface ListAssociatedStacksResult {
  Names?: Array<string>;
  NextToken?: string;
}
export interface ListEntitledApplicationsRequest {
  StackName: string;
  EntitlementName: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEntitledApplicationsResult {
  EntitledApplications?: Array<EntitledApplication>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export type Long = number;

export type MaxResults = number;

export type MessageAction = "SUPPRESS" | "RESEND";
export type Metadata = Record<string, string>;
export type Name = string;

export interface NetworkAccessConfiguration {
  EniPrivateIpAddress?: string;
  EniId?: string;
}
export declare class OperationNotPermittedException extends EffectData.TaggedError(
  "OperationNotPermittedException",
)<{
  readonly Message?: string;
}> {}
export type OrganizationalUnitDistinguishedName = string;

export type OrganizationalUnitDistinguishedNamesList = Array<string>;
export type PackagingType = "CUSTOM" | "APPSTREAM2";
export type Permission = "ENABLED" | "DISABLED";
export type Platforms = Array<PlatformType>;
export type PlatformType =
  | "WINDOWS"
  | "WINDOWS_SERVER_2016"
  | "WINDOWS_SERVER_2019"
  | "WINDOWS_SERVER_2022"
  | "AMAZON_LINUX2"
  | "RHEL8"
  | "ROCKY_LINUX8";
export type PreferredProtocol = "TCP" | "UDP";
export type RedirectURL = string;

export type RegionName = string;

export declare class RequestLimitExceededException extends EffectData.TaggedError(
  "RequestLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceError {
  ErrorCode?: FleetErrorCode;
  ErrorMessage?: string;
  ErrorTimestamp?: Date | string;
}
export type ResourceErrors = Array<ResourceError>;
export type ResourceIdentifier = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotAvailableException extends EffectData.TaggedError(
  "ResourceNotAvailableException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type S3Bucket = string;

export type S3Key = string;

export interface S3Location {
  S3Bucket: string;
  S3Key?: string;
}
export interface ScriptDetails {
  ScriptS3Location: S3Location;
  ExecutablePath: string;
  ExecutableParameters?: string;
  TimeoutInSeconds: number;
}
export type SecurityGroupIdList = Array<string>;
export interface ServiceAccountCredentials {
  AccountName: string;
  AccountPassword: string;
}
export interface Session {
  Id: string;
  UserId: string;
  StackName: string;
  FleetName: string;
  State: SessionState;
  ConnectionState?: SessionConnectionState;
  StartTime?: Date | string;
  MaxExpirationTime?: Date | string;
  AuthenticationType?: AuthenticationType;
  NetworkAccessConfiguration?: NetworkAccessConfiguration;
  InstanceId?: string;
}
export type SessionConnectionState = "CONNECTED" | "NOT_CONNECTED";
export type SessionList = Array<Session>;
export type SessionState = "ACTIVE" | "PENDING" | "EXPIRED";
export type SettingsGroup = string;

export interface SharedImagePermissions {
  sharedAccountId: string;
  imagePermissions: ImagePermissions;
}
export type SharedImagePermissionsList = Array<SharedImagePermissions>;
export interface Stack {
  Arn?: string;
  Name: string;
  Description?: string;
  DisplayName?: string;
  CreatedTime?: Date | string;
  StorageConnectors?: Array<StorageConnector>;
  RedirectURL?: string;
  FeedbackURL?: string;
  StackErrors?: Array<StackError>;
  UserSettings?: Array<UserSetting>;
  ApplicationSettings?: ApplicationSettingsResponse;
  AccessEndpoints?: Array<AccessEndpoint>;
  EmbedHostDomains?: Array<string>;
  StreamingExperienceSettings?: StreamingExperienceSettings;
}
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
  | "STREAMING_EXPERIENCE_SETTINGS";
export type StackAttributes = Array<StackAttribute>;
export interface StackError {
  ErrorCode?: StackErrorCode;
  ErrorMessage?: string;
}
export type StackErrorCode =
  | "STORAGE_CONNECTOR_ERROR"
  | "INTERNAL_SERVICE_ERROR";
export type StackErrors = Array<StackError>;
export type StackList = Array<Stack>;
export interface StartAppBlockBuilderRequest {
  Name: string;
}
export interface StartAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder;
}
export interface StartFleetRequest {
  Name: string;
}
export interface StartFleetResult {}
export interface StartImageBuilderRequest {
  Name: string;
  AppstreamAgentVersion?: string;
}
export interface StartImageBuilderResult {
  ImageBuilder?: ImageBuilder;
}
export interface StopAppBlockBuilderRequest {
  Name: string;
}
export interface StopAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder;
}
export interface StopFleetRequest {
  Name: string;
}
export interface StopFleetResult {}
export interface StopImageBuilderRequest {
  Name: string;
}
export interface StopImageBuilderResult {
  ImageBuilder?: ImageBuilder;
}
export interface StorageConnector {
  ConnectorType: StorageConnectorType;
  ResourceIdentifier?: string;
  Domains?: Array<string>;
  DomainsRequireAdminConsent?: Array<string>;
}
export type StorageConnectorList = Array<StorageConnector>;
export type StorageConnectorType = "HOMEFOLDERS" | "GOOGLE_DRIVE" | "ONE_DRIVE";
export interface StreamingExperienceSettings {
  PreferredProtocol?: PreferredProtocol;
}
export type StreamingUrlUserId = string;

export type StreamView = "APP" | "DESKTOP";
export type AppstreamString = string;

export type StringList = Array<string>;
export type SubnetIdList = Array<string>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type Tags = Record<string, string>;
export type TagValue = string;

export interface Theme {
  StackName?: string;
  State?: ThemeState;
  ThemeTitleText?: string;
  ThemeStyling?: ThemeStyling;
  ThemeFooterLinks?: Array<ThemeFooterLink>;
  ThemeOrganizationLogoURL?: string;
  ThemeFaviconURL?: string;
  CreatedTime?: Date | string;
}
export type ThemeAttribute = "FOOTER_LINKS";
export type ThemeAttributes = Array<ThemeAttribute>;
export interface ThemeFooterLink {
  DisplayName?: string;
  FooterLinkURL?: string;
}
export type ThemeFooterLinkDisplayName = string;

export type ThemeFooterLinks = Array<ThemeFooterLink>;
export type ThemeFooterLinkURL = string;

export type ThemeState = "ENABLED" | "DISABLED";
export type ThemeStyling = "LIGHT_BLUE" | "BLUE" | "PINK" | "RED";
export type ThemeTitleText = string;

export type Timestamp = Date | string;

export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAppBlockBuilderRequest {
  Name: string;
  Description?: string;
  DisplayName?: string;
  Platform?: PlatformType;
  InstanceType?: string;
  VpcConfig?: VpcConfig;
  EnableDefaultInternetAccess?: boolean;
  IamRoleArn?: string;
  AccessEndpoints?: Array<AccessEndpoint>;
  AttributesToDelete?: Array<AppBlockBuilderAttribute>;
}
export interface UpdateAppBlockBuilderResult {
  AppBlockBuilder?: AppBlockBuilder;
}
export interface UpdateApplicationRequest {
  Name: string;
  DisplayName?: string;
  Description?: string;
  IconS3Location?: S3Location;
  LaunchPath?: string;
  WorkingDirectory?: string;
  LaunchParameters?: string;
  AppBlockArn?: string;
  AttributesToDelete?: Array<ApplicationAttribute>;
}
export interface UpdateApplicationResult {
  Application?: Application;
}
export interface UpdateDirectoryConfigRequest {
  DirectoryName: string;
  OrganizationalUnitDistinguishedNames?: Array<string>;
  ServiceAccountCredentials?: ServiceAccountCredentials;
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}
export interface UpdateDirectoryConfigResult {
  DirectoryConfig?: DirectoryConfig;
}
export interface UpdateEntitlementRequest {
  Name: string;
  StackName: string;
  Description?: string;
  AppVisibility?: AppVisibility;
  Attributes?: Array<EntitlementAttribute>;
}
export interface UpdateEntitlementResult {
  Entitlement?: Entitlement;
}
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
  AttributesToDelete?: Array<FleetAttribute>;
  IamRoleArn?: string;
  StreamView?: StreamView;
  Platform?: PlatformType;
  MaxConcurrentSessions?: number;
  UsbDeviceFilterStrings?: Array<string>;
  SessionScriptS3Location?: S3Location;
  MaxSessionsPerInstance?: number;
}
export interface UpdateFleetResult {
  Fleet?: Fleet;
}
export interface UpdateImagePermissionsRequest {
  Name: string;
  SharedAccountId: string;
  ImagePermissions: ImagePermissions;
}
export interface UpdateImagePermissionsResult {}
export interface UpdateStackRequest {
  DisplayName?: string;
  Description?: string;
  Name: string;
  StorageConnectors?: Array<StorageConnector>;
  DeleteStorageConnectors?: boolean;
  RedirectURL?: string;
  FeedbackURL?: string;
  AttributesToDelete?: Array<StackAttribute>;
  UserSettings?: Array<UserSetting>;
  ApplicationSettings?: ApplicationSettings;
  AccessEndpoints?: Array<AccessEndpoint>;
  EmbedHostDomains?: Array<string>;
  StreamingExperienceSettings?: StreamingExperienceSettings;
}
export interface UpdateStackResult {
  Stack?: Stack;
}
export interface UpdateThemeForStackRequest {
  StackName: string;
  FooterLinks?: Array<ThemeFooterLink>;
  TitleText?: string;
  ThemeStyling?: ThemeStyling;
  OrganizationLogoS3Location?: S3Location;
  FaviconS3Location?: S3Location;
  State?: ThemeState;
  AttributesToDelete?: Array<ThemeAttribute>;
}
export interface UpdateThemeForStackResult {
  Theme?: Theme;
}
export type UsageReportExecutionErrorCode =
  | "RESOURCE_NOT_FOUND"
  | "ACCESS_DENIED"
  | "INTERNAL_SERVICE_ERROR";
export type UsageReportSchedule = "DAILY";
export interface UsageReportSubscription {
  S3BucketName?: string;
  Schedule?: UsageReportSchedule;
  LastGeneratedReportDate?: Date | string;
  SubscriptionErrors?: Array<LastReportGenerationExecutionError>;
}
export type UsageReportSubscriptionList = Array<UsageReportSubscription>;
export type UsbDeviceFilterString = string;

export type UsbDeviceFilterStrings = Array<string>;
export interface User {
  Arn?: string;
  UserName?: string;
  Enabled?: boolean;
  Status?: string;
  FirstName?: string;
  LastName?: string;
  CreatedTime?: Date | string;
  AuthenticationType: AuthenticationType;
}
export type UserAttributeValue = string;

export type UserId = string;

export type UserList = Array<User>;
export type Username = string;

export interface UserSetting {
  Action: Action;
  Permission: Permission;
  MaximumLength?: number;
}
export type UserSettingList = Array<UserSetting>;
export interface UserStackAssociation {
  StackName: string;
  UserName: string;
  AuthenticationType: AuthenticationType;
  SendEmailNotification?: boolean;
}
export interface UserStackAssociationError {
  UserStackAssociation?: UserStackAssociation;
  ErrorCode?: UserStackAssociationErrorCode;
  ErrorMessage?: string;
}
export type UserStackAssociationErrorCode =
  | "STACK_NOT_FOUND"
  | "USER_NAME_NOT_FOUND"
  | "DIRECTORY_NOT_FOUND"
  | "INTERNAL_ERROR";
export type UserStackAssociationErrorList = Array<UserStackAssociationError>;
export type UserStackAssociationList = Array<UserStackAssociation>;
export type VisibilityType = "PUBLIC" | "PRIVATE" | "SHARED";
export interface VpcConfig {
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
}
export declare namespace AssociateAppBlockBuilderAppBlock {
  export type Input = AssociateAppBlockBuilderAppBlockRequest;
  export type Output = AssociateAppBlockBuilderAppBlockResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateApplicationFleet {
  export type Input = AssociateApplicationFleetRequest;
  export type Output = AssociateApplicationFleetResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateApplicationToEntitlement {
  export type Input = AssociateApplicationToEntitlementRequest;
  export type Output = AssociateApplicationToEntitlementResult;
  export type Error =
    | EntitlementNotFoundException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace AssociateFleet {
  export type Input = AssociateFleetRequest;
  export type Output = AssociateFleetResult;
  export type Error =
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace BatchAssociateUserStack {
  export type Input = BatchAssociateUserStackRequest;
  export type Output = BatchAssociateUserStackResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace BatchDisassociateUserStack {
  export type Input = BatchDisassociateUserStackRequest;
  export type Output = BatchDisassociateUserStackResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace CopyImage {
  export type Input = CopyImageRequest;
  export type Output = CopyImageResponse;
  export type Error =
    | IncompatibleImageException
    | InvalidAccountStatusException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateAppBlock {
  export type Input = CreateAppBlockRequest;
  export type Output = CreateAppBlockResult;
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateAppBlockBuilder {
  export type Input = CreateAppBlockBuilderRequest;
  export type Output = CreateAppBlockBuilderResult;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace CreateAppBlockBuilderStreamingURL {
  export type Input = CreateAppBlockBuilderStreamingURLRequest;
  export type Output = CreateAppBlockBuilderStreamingURLResult;
  export type Error =
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResult;
  export type Error =
    | ConcurrentModificationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateDirectoryConfig {
  export type Input = CreateDirectoryConfigRequest;
  export type Output = CreateDirectoryConfigResult;
  export type Error =
    | InvalidAccountStatusException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateEntitlement {
  export type Input = CreateEntitlementRequest;
  export type Output = CreateEntitlementResult;
  export type Error =
    | EntitlementAlreadyExistsException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetRequest;
  export type Output = CreateFleetResult;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace CreateImageBuilder {
  export type Input = CreateImageBuilderRequest;
  export type Output = CreateImageBuilderResult;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace CreateImageBuilderStreamingURL {
  export type Input = CreateImageBuilderStreamingURLRequest;
  export type Output = CreateImageBuilderStreamingURLResult;
  export type Error =
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateStack {
  export type Input = CreateStackRequest;
  export type Output = CreateStackResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateStreamingURL {
  export type Input = CreateStreamingURLRequest;
  export type Output = CreateStreamingURLResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateThemeForStack {
  export type Input = CreateThemeForStackRequest;
  export type Output = CreateThemeForStackResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateUpdatedImage {
  export type Input = CreateUpdatedImageRequest;
  export type Output = CreateUpdatedImageResult;
  export type Error =
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateUsageReportSubscription {
  export type Input = CreateUsageReportSubscriptionRequest;
  export type Output = CreateUsageReportSubscriptionResult;
  export type Error =
    | InvalidAccountStatusException
    | InvalidRoleException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = CreateUserResult;
  export type Error =
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace DeleteAppBlock {
  export type Input = DeleteAppBlockRequest;
  export type Output = DeleteAppBlockResult;
  export type Error =
    | ConcurrentModificationException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteAppBlockBuilder {
  export type Input = DeleteAppBlockBuilderRequest;
  export type Output = DeleteAppBlockBuilderResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteDirectoryConfig {
  export type Input = DeleteDirectoryConfigRequest;
  export type Output = DeleteDirectoryConfigResult;
  export type Error =
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteEntitlement {
  export type Input = DeleteEntitlementRequest;
  export type Output = DeleteEntitlementResult;
  export type Error =
    | ConcurrentModificationException
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteFleet {
  export type Input = DeleteFleetRequest;
  export type Output = DeleteFleetResult;
  export type Error =
    | ConcurrentModificationException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteImage {
  export type Input = DeleteImageRequest;
  export type Output = DeleteImageResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteImageBuilder {
  export type Input = DeleteImageBuilderRequest;
  export type Output = DeleteImageBuilderResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteImagePermissions {
  export type Input = DeleteImagePermissionsRequest;
  export type Output = DeleteImagePermissionsResult;
  export type Error =
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteStack {
  export type Input = DeleteStackRequest;
  export type Output = DeleteStackResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteThemeForStack {
  export type Input = DeleteThemeForStackRequest;
  export type Output = DeleteThemeForStackResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteUsageReportSubscription {
  export type Input = DeleteUsageReportSubscriptionRequest;
  export type Output = DeleteUsageReportSubscriptionResult;
  export type Error =
    | InvalidAccountStatusException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = DeleteUserResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeAppBlockBuilderAppBlockAssociations {
  export type Input = DescribeAppBlockBuilderAppBlockAssociationsRequest;
  export type Output = DescribeAppBlockBuilderAppBlockAssociationsResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace DescribeAppBlockBuilders {
  export type Input = DescribeAppBlockBuildersRequest;
  export type Output = DescribeAppBlockBuildersResult;
  export type Error =
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAppBlocks {
  export type Input = DescribeAppBlocksRequest;
  export type Output = DescribeAppBlocksResult;
  export type Error =
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeApplicationFleetAssociations {
  export type Input = DescribeApplicationFleetAssociationsRequest;
  export type Output = DescribeApplicationFleetAssociationsResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace DescribeApplications {
  export type Input = DescribeApplicationsRequest;
  export type Output = DescribeApplicationsResult;
  export type Error =
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeDirectoryConfigs {
  export type Input = DescribeDirectoryConfigsRequest;
  export type Output = DescribeDirectoryConfigsResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeEntitlements {
  export type Input = DescribeEntitlementsRequest;
  export type Output = DescribeEntitlementsResult;
  export type Error =
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeFleets {
  export type Input = DescribeFleetsRequest;
  export type Output = DescribeFleetsResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeImageBuilders {
  export type Input = DescribeImageBuildersRequest;
  export type Output = DescribeImageBuildersResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeImagePermissions {
  export type Input = DescribeImagePermissionsRequest;
  export type Output = DescribeImagePermissionsResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeImages {
  export type Input = DescribeImagesRequest;
  export type Output = DescribeImagesResult;
  export type Error =
    | InvalidParameterCombinationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeSessions {
  export type Input = DescribeSessionsRequest;
  export type Output = DescribeSessionsResult;
  export type Error = InvalidParameterCombinationException | CommonAwsError;
}

export declare namespace DescribeStacks {
  export type Input = DescribeStacksRequest;
  export type Output = DescribeStacksResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DescribeThemeForStack {
  export type Input = DescribeThemeForStackRequest;
  export type Output = DescribeThemeForStackResult;
  export type Error =
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeUsageReportSubscriptions {
  export type Input = DescribeUsageReportSubscriptionsRequest;
  export type Output = DescribeUsageReportSubscriptionsResult;
  export type Error =
    | InvalidAccountStatusException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeUsers {
  export type Input = DescribeUsersRequest;
  export type Output = DescribeUsersResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeUserStackAssociations {
  export type Input = DescribeUserStackAssociationsRequest;
  export type Output = DescribeUserStackAssociationsResult;
  export type Error =
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace DisableUser {
  export type Input = DisableUserRequest;
  export type Output = DisableUserResult;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace DisassociateAppBlockBuilderAppBlock {
  export type Input = DisassociateAppBlockBuilderAppBlockRequest;
  export type Output = DisassociateAppBlockBuilderAppBlockResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateApplicationFleet {
  export type Input = DisassociateApplicationFleetRequest;
  export type Output = DisassociateApplicationFleetResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidParameterCombinationException
    | OperationNotPermittedException
    | CommonAwsError;
}

export declare namespace DisassociateApplicationFromEntitlement {
  export type Input = DisassociateApplicationFromEntitlementRequest;
  export type Output = DisassociateApplicationFromEntitlementResult;
  export type Error =
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisassociateFleet {
  export type Input = DisassociateFleetRequest;
  export type Output = DisassociateFleetResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableUser {
  export type Input = EnableUserRequest;
  export type Output = EnableUserResult;
  export type Error =
    | InvalidAccountStatusException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ExpireSession {
  export type Input = ExpireSessionRequest;
  export type Output = ExpireSessionResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAssociatedFleets {
  export type Input = ListAssociatedFleetsRequest;
  export type Output = ListAssociatedFleetsResult;
  export type Error = CommonAwsError;
}

export declare namespace ListAssociatedStacks {
  export type Input = ListAssociatedStacksRequest;
  export type Output = ListAssociatedStacksResult;
  export type Error = CommonAwsError;
}

export declare namespace ListEntitledApplications {
  export type Input = ListEntitledApplicationsRequest;
  export type Output = ListEntitledApplicationsResult;
  export type Error =
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace StartAppBlockBuilder {
  export type Input = StartAppBlockBuilderRequest;
  export type Output = StartAppBlockBuilderResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | LimitExceededException
    | OperationNotPermittedException
    | RequestLimitExceededException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartFleet {
  export type Input = StartFleetRequest;
  export type Output = StartFleetResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | RequestLimitExceededException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartImageBuilder {
  export type Input = StartImageBuilderRequest;
  export type Output = StartImageBuilderResult;
  export type Error =
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopAppBlockBuilder {
  export type Input = StopAppBlockBuilderRequest;
  export type Output = StopAppBlockBuilderResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopFleet {
  export type Input = StopFleetRequest;
  export type Output = StopFleetResult;
  export type Error =
    | ConcurrentModificationException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopImageBuilder {
  export type Input = StopImageBuilderRequest;
  export type Output = StopImageBuilderResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidAccountStatusException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdateAppBlockBuilder {
  export type Input = UpdateAppBlockBuilderRequest;
  export type Output = UpdateAppBlockBuilderResult;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResult;
  export type Error =
    | ConcurrentModificationException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDirectoryConfig {
  export type Input = UpdateDirectoryConfigRequest;
  export type Output = UpdateDirectoryConfigResult;
  export type Error =
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidRoleException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateEntitlement {
  export type Input = UpdateEntitlementRequest;
  export type Output = UpdateEntitlementResult;
  export type Error =
    | ConcurrentModificationException
    | EntitlementNotFoundException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateFleet {
  export type Input = UpdateFleetRequest;
  export type Output = UpdateFleetResult;
  export type Error =
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
    | CommonAwsError;
}

export declare namespace UpdateImagePermissions {
  export type Input = UpdateImagePermissionsRequest;
  export type Output = UpdateImagePermissionsResult;
  export type Error =
    | LimitExceededException
    | ResourceNotAvailableException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateStack {
  export type Input = UpdateStackRequest;
  export type Output = UpdateStackResult;
  export type Error =
    | ConcurrentModificationException
    | IncompatibleImageException
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | InvalidRoleException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceInUseException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateThemeForStack {
  export type Input = UpdateThemeForStackRequest;
  export type Output = UpdateThemeForStackResult;
  export type Error =
    | ConcurrentModificationException
    | InvalidAccountStatusException
    | InvalidParameterCombinationException
    | LimitExceededException
    | OperationNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}
