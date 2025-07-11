import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSWesleyFrontend {
  associateAccessPolicy(
    input: AssociateAccessPolicyRequest,
  ): Effect.Effect<
    AssociateAccessPolicyResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  associateEncryptionConfig(
    input: AssociateEncryptionConfigRequest,
  ): Effect.Effect<
    AssociateEncryptionConfigResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError
  >;
  associateIdentityProviderConfig(
    input: AssociateIdentityProviderConfigRequest,
  ): Effect.Effect<
    AssociateIdentityProviderConfigResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError
  >;
  createAccessEntry(
    input: CreateAccessEntryRequest,
  ): Effect.Effect<
    CreateAccessEntryResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  createAddon(
    input: CreateAddonRequest,
  ): Effect.Effect<
    CreateAddonResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    | ClientException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ServerException
    | ServiceUnavailableException
    | UnsupportedAvailabilityZoneException
    | CommonAwsError
  >;
  createEksAnywhereSubscription(
    input: CreateEksAnywhereSubscriptionRequest,
  ): Effect.Effect<
    CreateEksAnywhereSubscriptionResponse,
    | ClientException
    | InvalidParameterException
    | ResourceLimitExceededException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createFargateProfile(
    input: CreateFargateProfileRequest,
  ): Effect.Effect<
    CreateFargateProfileResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceLimitExceededException
    | ServerException
    | UnsupportedAvailabilityZoneException
    | CommonAwsError
  >;
  createNodegroup(
    input: CreateNodegroupRequest,
  ): Effect.Effect<
    CreateNodegroupResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createPodIdentityAssociation(
    input: CreatePodIdentityAssociationRequest,
  ): Effect.Effect<
    CreatePodIdentityAssociationResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deleteAccessEntry(
    input: DeleteAccessEntryRequest,
  ): Effect.Effect<
    DeleteAccessEntryResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deleteAddon(
    input: DeleteAddonRequest,
  ): Effect.Effect<
    DeleteAddonResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    | ClientException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteEksAnywhereSubscription(
    input: DeleteEksAnywhereSubscriptionRequest,
  ): Effect.Effect<
    DeleteEksAnywhereSubscriptionResponse,
    | ClientException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deleteFargateProfile(
    input: DeleteFargateProfileRequest,
  ): Effect.Effect<
    DeleteFargateProfileResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deleteNodegroup(
    input: DeleteNodegroupRequest,
  ): Effect.Effect<
    DeleteNodegroupResponse,
    | ClientException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deletePodIdentityAssociation(
    input: DeletePodIdentityAssociationRequest,
  ): Effect.Effect<
    DeletePodIdentityAssociationResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  deregisterCluster(
    input: DeregisterClusterRequest,
  ): Effect.Effect<
    DeregisterClusterResponse,
    | AccessDeniedException
    | ClientException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeAccessEntry(
    input: DescribeAccessEntryRequest,
  ): Effect.Effect<
    DescribeAccessEntryResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeAddon(
    input: DescribeAddonRequest,
  ): Effect.Effect<
    DescribeAddonResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeAddonConfiguration(
    input: DescribeAddonConfigurationRequest,
  ): Effect.Effect<
    DescribeAddonConfigurationResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeAddonVersions(
    input: DescribeAddonVersionsRequest,
  ): Effect.Effect<
    DescribeAddonVersionsResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterRequest,
  ): Effect.Effect<
    DescribeClusterResponse,
    | ClientException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeClusterVersions(
    input: DescribeClusterVersionsRequest,
  ): Effect.Effect<
    DescribeClusterVersionsResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ServerException
    | CommonAwsError
  >;
  describeEksAnywhereSubscription(
    input: DescribeEksAnywhereSubscriptionRequest,
  ): Effect.Effect<
    DescribeEksAnywhereSubscriptionResponse,
    | ClientException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeFargateProfile(
    input: DescribeFargateProfileRequest,
  ): Effect.Effect<
    DescribeFargateProfileResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeIdentityProviderConfig(
    input: DescribeIdentityProviderConfigRequest,
  ): Effect.Effect<
    DescribeIdentityProviderConfigResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeInsight(
    input: DescribeInsightRequest,
  ): Effect.Effect<
    DescribeInsightResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeNodegroup(
    input: DescribeNodegroupRequest,
  ): Effect.Effect<
    DescribeNodegroupResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describePodIdentityAssociation(
    input: DescribePodIdentityAssociationRequest,
  ): Effect.Effect<
    DescribePodIdentityAssociationResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  describeUpdate(
    input: DescribeUpdateRequest,
  ): Effect.Effect<
    DescribeUpdateResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  disassociateAccessPolicy(
    input: DisassociateAccessPolicyRequest,
  ): Effect.Effect<
    DisassociateAccessPolicyResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  disassociateIdentityProviderConfig(
    input: DisassociateIdentityProviderConfigRequest,
  ): Effect.Effect<
    DisassociateIdentityProviderConfigResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError
  >;
  listAccessEntries(
    input: ListAccessEntriesRequest,
  ): Effect.Effect<
    ListAccessEntriesResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listAccessPolicies(
    input: ListAccessPoliciesRequest,
  ): Effect.Effect<
    ListAccessPoliciesResponse,
    ServerException | CommonAwsError
  >;
  listAddons(
    input: ListAddonsRequest,
  ): Effect.Effect<
    ListAddonsResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listAssociatedAccessPolicies(
    input: ListAssociatedAccessPoliciesRequest,
  ): Effect.Effect<
    ListAssociatedAccessPoliciesResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listEksAnywhereSubscriptions(
    input: ListEksAnywhereSubscriptionsRequest,
  ): Effect.Effect<
    ListEksAnywhereSubscriptionsResponse,
    | ClientException
    | InvalidParameterException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listFargateProfiles(
    input: ListFargateProfilesRequest,
  ): Effect.Effect<
    ListFargateProfilesResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listIdentityProviderConfigs(
    input: ListIdentityProviderConfigsRequest,
  ): Effect.Effect<
    ListIdentityProviderConfigsResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listInsights(
    input: ListInsightsRequest,
  ): Effect.Effect<
    ListInsightsResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listNodegroups(
    input: ListNodegroupsRequest,
  ): Effect.Effect<
    ListNodegroupsResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listPodIdentityAssociations(
    input: ListPodIdentityAssociationsRequest,
  ): Effect.Effect<
    ListPodIdentityAssociationsResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequestException | NotFoundException | CommonAwsError
  >;
  listUpdates(
    input: ListUpdatesRequest,
  ): Effect.Effect<
    ListUpdatesResponse,
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  registerCluster(
    input: RegisterClusterRequest,
  ): Effect.Effect<
    RegisterClusterResponse,
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourcePropagationDelayException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    BadRequestException | NotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    BadRequestException | NotFoundException | CommonAwsError
  >;
  updateAccessEntry(
    input: UpdateAccessEntryRequest,
  ): Effect.Effect<
    UpdateAccessEntryResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updateAddon(
    input: UpdateAddonRequest,
  ): Effect.Effect<
    UpdateAddonResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updateClusterConfig(
    input: UpdateClusterConfigRequest,
  ): Effect.Effect<
    UpdateClusterConfigResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError
  >;
  updateClusterVersion(
    input: UpdateClusterVersionRequest,
  ): Effect.Effect<
    UpdateClusterVersionResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | InvalidStateException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError
  >;
  updateEksAnywhereSubscription(
    input: UpdateEksAnywhereSubscriptionRequest,
  ): Effect.Effect<
    UpdateEksAnywhereSubscriptionResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updateNodegroupConfig(
    input: UpdateNodegroupConfigRequest,
  ): Effect.Effect<
    UpdateNodegroupConfigResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updateNodegroupVersion(
    input: UpdateNodegroupVersionRequest,
  ): Effect.Effect<
    UpdateNodegroupVersionResponse,
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
  updatePodIdentityAssociation(
    input: UpdatePodIdentityAssociationRequest,
  ): Effect.Effect<
    UpdatePodIdentityAssociationResponse,
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError
  >;
}

export type Eks = AWSWesleyFrontend;

export interface AccessConfigResponse {
  bootstrapClusterCreatorAdminPermissions?: boolean;
  authenticationMode?: AuthenticationMode;
}
export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export interface AccessEntry {
  clusterName?: string;
  principalArn?: string;
  kubernetesGroups?: Array<string>;
  accessEntryArn?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  tags?: Record<string, string>;
  username?: string;
  type?: string;
}
export type AccessPoliciesList = Array<AccessPolicy>;
export interface AccessPolicy {
  name?: string;
  arn?: string;
}
export interface AccessScope {
  type?: AccessScopeType;
  namespaces?: Array<string>;
}
export type AccessScopeType = "cluster" | "namespace";
export type AdditionalInfoMap = Record<string, string>;
export interface Addon {
  addonName?: string;
  clusterName?: string;
  status?: AddonStatus;
  addonVersion?: string;
  health?: AddonHealth;
  addonArn?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  serviceAccountRoleArn?: string;
  tags?: Record<string, string>;
  publisher?: string;
  owner?: string;
  marketplaceInformation?: MarketplaceInformation;
  configurationValues?: string;
  podIdentityAssociations?: Array<string>;
}
export interface AddonCompatibilityDetail {
  name?: string;
  compatibleVersions?: Array<string>;
}
export type AddonCompatibilityDetails = Array<AddonCompatibilityDetail>;
export interface AddonHealth {
  issues?: Array<AddonIssue>;
}
export interface AddonInfo {
  addonName?: string;
  type?: string;
  addonVersions?: Array<AddonVersionInfo>;
  publisher?: string;
  owner?: string;
  marketplaceInformation?: MarketplaceInformation;
}
export interface AddonIssue {
  code?: AddonIssueCode;
  message?: string;
  resourceIds?: Array<string>;
}
export type AddonIssueCode =
  | "ACCESS_DENIED"
  | "INTERNAL_FAILURE"
  | "CLUSTER_UNREACHABLE"
  | "INSUFFICIENT_NUMBER_OF_REPLICAS"
  | "CONFIGURATION_CONFLICT"
  | "ADMISSION_REQUEST_DENIED"
  | "UNSUPPORTED_ADDON_MODIFICATION"
  | "K8S_RESOURCE_NOT_FOUND"
  | "ADDON_SUBSCRIPTION_NEEDED"
  | "ADDON_PERMISSION_FAILURE";
export type AddonIssueList = Array<AddonIssue>;
export interface AddonPodIdentityAssociations {
  serviceAccount: string;
  roleArn: string;
}
export type AddonPodIdentityAssociationsList =
  Array<AddonPodIdentityAssociations>;
export interface AddonPodIdentityConfiguration {
  serviceAccount?: string;
  recommendedManagedPolicies?: Array<string>;
}
export type AddonPodIdentityConfigurationList =
  Array<AddonPodIdentityConfiguration>;
export type Addons = Array<AddonInfo>;
export type AddonStatus =
  | "CREATING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "UPDATING"
  | "DELETING"
  | "DELETE_FAILED"
  | "DEGRADED"
  | "UPDATE_FAILED";
export interface AddonVersionInfo {
  addonVersion?: string;
  architecture?: Array<string>;
  computeTypes?: Array<string>;
  compatibilities?: Array<Compatibility>;
  requiresConfiguration?: boolean;
  requiresIamPermissions?: boolean;
}
export type AddonVersionInfoList = Array<AddonVersionInfo>;
export type AMITypes =
  | "AL2_x86_64"
  | "AL2_x86_64_GPU"
  | "AL2_ARM_64"
  | "CUSTOM"
  | "BOTTLEROCKET_ARM_64"
  | "BOTTLEROCKET_x86_64"
  | "BOTTLEROCKET_ARM_64_FIPS"
  | "BOTTLEROCKET_x86_64_FIPS"
  | "BOTTLEROCKET_ARM_64_NVIDIA"
  | "BOTTLEROCKET_x86_64_NVIDIA"
  | "WINDOWS_CORE_2019_x86_64"
  | "WINDOWS_FULL_2019_x86_64"
  | "WINDOWS_CORE_2022_x86_64"
  | "WINDOWS_FULL_2022_x86_64"
  | "AL2023_x86_64_STANDARD"
  | "AL2023_ARM_64_STANDARD"
  | "AL2023_x86_64_NEURON"
  | "AL2023_x86_64_NVIDIA"
  | "AL2023_ARM_64_NVIDIA";
export interface AssociateAccessPolicyRequest {
  clusterName: string;
  principalArn: string;
  policyArn: string;
  accessScope: AccessScope;
}
export interface AssociateAccessPolicyResponse {
  clusterName?: string;
  principalArn?: string;
  associatedAccessPolicy?: AssociatedAccessPolicy;
}
export type AssociatedAccessPoliciesList = Array<AssociatedAccessPolicy>;
export interface AssociatedAccessPolicy {
  policyArn?: string;
  accessScope?: AccessScope;
  associatedAt?: Date | string;
  modifiedAt?: Date | string;
}
export interface AssociateEncryptionConfigRequest {
  clusterName: string;
  encryptionConfig: Array<EncryptionConfig>;
  clientRequestToken?: string;
}
export interface AssociateEncryptionConfigResponse {
  update?: Update;
}
export interface AssociateIdentityProviderConfigRequest {
  clusterName: string;
  oidc: OidcIdentityProviderConfigRequest;
  tags?: Record<string, string>;
  clientRequestToken?: string;
}
export interface AssociateIdentityProviderConfigResponse {
  update?: Update;
  tags?: Record<string, string>;
}
export type AuthenticationMode = "API" | "API_AND_CONFIG_MAP" | "CONFIG_MAP";
export interface AutoScalingGroup {
  name?: string;
}
export type AutoScalingGroupList = Array<AutoScalingGroup>;
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly message?: string;
}> {}
export interface BlockStorage {
  enabled?: boolean;
}
export type BoxedBoolean = boolean;

export type BoxedInteger = number;

export type Capacity = number;

export type CapacityTypes = "ON_DEMAND" | "SPOT" | "CAPACITY_BLOCK";
export type Category = "UPGRADE_READINESS" | "MISCONFIGURATION";
export type CategoryList = Array<Category>;
export interface Certificate {
  data?: string;
}
export declare class ClientException extends Data.TaggedError(
  "ClientException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly addonName?: string;
  readonly subscriptionId?: string;
  readonly message?: string;
}> {}
export interface ClientStat {
  userAgent?: string;
  numberOfRequestsLast30Days?: number;
  lastRequestTime?: Date | string;
}
export type ClientStats = Array<ClientStat>;
export interface Cluster {
  name?: string;
  arn?: string;
  createdAt?: Date | string;
  version?: string;
  endpoint?: string;
  roleArn?: string;
  resourcesVpcConfig?: VpcConfigResponse;
  kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;
  logging?: Logging;
  identity?: Identity;
  status?: ClusterStatus;
  certificateAuthority?: Certificate;
  clientRequestToken?: string;
  platformVersion?: string;
  tags?: Record<string, string>;
  encryptionConfig?: Array<EncryptionConfig>;
  connectorConfig?: ConnectorConfigResponse;
  id?: string;
  health?: ClusterHealth;
  outpostConfig?: OutpostConfigResponse;
  accessConfig?: AccessConfigResponse;
  upgradePolicy?: UpgradePolicyResponse;
  zonalShiftConfig?: ZonalShiftConfigResponse;
  remoteNetworkConfig?: RemoteNetworkConfigResponse;
  computeConfig?: ComputeConfigResponse;
  storageConfig?: StorageConfigResponse;
}
export interface ClusterHealth {
  issues?: Array<ClusterIssue>;
}
export interface ClusterIssue {
  code?: ClusterIssueCode;
  message?: string;
  resourceIds?: Array<string>;
}
export type ClusterIssueCode =
  | "ACCESS_DENIED"
  | "CLUSTER_UNREACHABLE"
  | "CONFIGURATION_CONFLICT"
  | "INTERNAL_FAILURE"
  | "RESOURCE_LIMIT_EXCEEDED"
  | "RESOURCE_NOT_FOUND"
  | "IAM_ROLE_NOT_FOUND"
  | "VPC_NOT_FOUND"
  | "INSUFFICIENT_FREE_ADDRESSES"
  | "EC2_SERVICE_NOT_SUBSCRIBED"
  | "EC2_SUBNET_NOT_FOUND"
  | "EC2_SECURITY_GROUP_NOT_FOUND"
  | "KMS_GRANT_REVOKED"
  | "KMS_KEY_NOT_FOUND"
  | "KMS_KEY_MARKED_FOR_DELETION"
  | "KMS_KEY_DISABLED"
  | "STS_REGIONAL_ENDPOINT_DISABLED"
  | "UNSUPPORTED_VERSION"
  | "OTHER";
export type ClusterIssueList = Array<ClusterIssue>;
export type ClusterName = string;

export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "PENDING";
export interface ClusterVersionInformation {
  clusterVersion?: string;
  clusterType?: string;
  defaultPlatformVersion?: string;
  defaultVersion?: boolean;
  releaseDate?: Date | string;
  endOfStandardSupportDate?: Date | string;
  endOfExtendedSupportDate?: Date | string;
  status?: ClusterVersionStatus;
  versionStatus?: VersionStatus;
  kubernetesPatchVersion?: string;
}
export type ClusterVersionList = Array<ClusterVersionInformation>;
export type ClusterVersionStatus =
  | "unsupported"
  | "standard_support"
  | "extended_support";
export type Compatibilities = Array<Compatibility>;
export interface Compatibility {
  clusterVersion?: string;
  platformVersions?: Array<string>;
  defaultVersion?: boolean;
}
export interface ComputeConfigRequest {
  enabled?: boolean;
  nodePools?: Array<string>;
  nodeRoleArn?: string;
}
export interface ComputeConfigResponse {
  enabled?: boolean;
  nodePools?: Array<string>;
  nodeRoleArn?: string;
}
export type configStatus = "CREATING" | "DELETING" | "ACTIVE";
export type ConnectorConfigProvider =
  | "EKS_ANYWHERE"
  | "ANTHOS"
  | "GKE"
  | "AKS"
  | "OPENSHIFT"
  | "TANZU"
  | "RANCHER"
  | "EC2"
  | "OTHER";
export interface ConnectorConfigRequest {
  roleArn: string;
  provider: ConnectorConfigProvider;
}
export interface ConnectorConfigResponse {
  activationId?: string;
  activationCode?: string;
  activationExpiry?: Date | string;
  provider?: string;
  roleArn?: string;
}
export interface ControlPlanePlacementRequest {
  groupName?: string;
}
export interface ControlPlanePlacementResponse {
  groupName?: string;
}
export interface CreateAccessConfigRequest {
  bootstrapClusterCreatorAdminPermissions?: boolean;
  authenticationMode?: AuthenticationMode;
}
export interface CreateAccessEntryRequest {
  clusterName: string;
  principalArn: string;
  kubernetesGroups?: Array<string>;
  tags?: Record<string, string>;
  clientRequestToken?: string;
  username?: string;
  type?: string;
}
export interface CreateAccessEntryResponse {
  accessEntry?: AccessEntry;
}
export interface CreateAddonRequest {
  clusterName: string;
  addonName: string;
  addonVersion?: string;
  serviceAccountRoleArn?: string;
  resolveConflicts?: ResolveConflicts;
  clientRequestToken?: string;
  tags?: Record<string, string>;
  configurationValues?: string;
  podIdentityAssociations?: Array<AddonPodIdentityAssociations>;
}
export interface CreateAddonResponse {
  addon?: Addon;
}
export interface CreateClusterRequest {
  name: string;
  version?: string;
  roleArn: string;
  resourcesVpcConfig: VpcConfigRequest;
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;
  logging?: Logging;
  clientRequestToken?: string;
  tags?: Record<string, string>;
  encryptionConfig?: Array<EncryptionConfig>;
  outpostConfig?: OutpostConfigRequest;
  accessConfig?: CreateAccessConfigRequest;
  bootstrapSelfManagedAddons?: boolean;
  upgradePolicy?: UpgradePolicyRequest;
  zonalShiftConfig?: ZonalShiftConfigRequest;
  remoteNetworkConfig?: RemoteNetworkConfigRequest;
  computeConfig?: ComputeConfigRequest;
  storageConfig?: StorageConfigRequest;
}
export interface CreateClusterResponse {
  cluster?: Cluster;
}
export interface CreateEksAnywhereSubscriptionRequest {
  name: string;
  term: EksAnywhereSubscriptionTerm;
  licenseQuantity?: number;
  licenseType?: EksAnywhereSubscriptionLicenseType;
  autoRenew?: boolean;
  clientRequestToken?: string;
  tags?: Record<string, string>;
}
export interface CreateEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
export interface CreateFargateProfileRequest {
  fargateProfileName: string;
  clusterName: string;
  podExecutionRoleArn: string;
  subnets?: Array<string>;
  selectors?: Array<FargateProfileSelector>;
  clientRequestToken?: string;
  tags?: Record<string, string>;
}
export interface CreateFargateProfileResponse {
  fargateProfile?: FargateProfile;
}
export interface CreateNodegroupRequest {
  clusterName: string;
  nodegroupName: string;
  scalingConfig?: NodegroupScalingConfig;
  diskSize?: number;
  subnets: Array<string>;
  instanceTypes?: Array<string>;
  amiType?: AMITypes;
  remoteAccess?: RemoteAccessConfig;
  nodeRole: string;
  labels?: Record<string, string>;
  taints?: Array<Taint>;
  tags?: Record<string, string>;
  clientRequestToken?: string;
  launchTemplate?: LaunchTemplateSpecification;
  updateConfig?: NodegroupUpdateConfig;
  nodeRepairConfig?: NodeRepairConfig;
  capacityType?: CapacityTypes;
  version?: string;
  releaseVersion?: string;
}
export interface CreateNodegroupResponse {
  nodegroup?: Nodegroup;
}
export interface CreatePodIdentityAssociationRequest {
  clusterName: string;
  namespace: string;
  serviceAccount: string;
  roleArn: string;
  clientRequestToken?: string;
  tags?: Record<string, string>;
  disableSessionTags?: boolean;
  targetRoleArn?: string;
}
export interface CreatePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
export interface DeleteAccessEntryRequest {
  clusterName: string;
  principalArn: string;
}
export interface DeleteAccessEntryResponse {}
export interface DeleteAddonRequest {
  clusterName: string;
  addonName: string;
  preserve?: boolean;
}
export interface DeleteAddonResponse {
  addon?: Addon;
}
export interface DeleteClusterRequest {
  name: string;
}
export interface DeleteClusterResponse {
  cluster?: Cluster;
}
export interface DeleteEksAnywhereSubscriptionRequest {
  id: string;
}
export interface DeleteEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
export interface DeleteFargateProfileRequest {
  clusterName: string;
  fargateProfileName: string;
}
export interface DeleteFargateProfileResponse {
  fargateProfile?: FargateProfile;
}
export interface DeleteNodegroupRequest {
  clusterName: string;
  nodegroupName: string;
}
export interface DeleteNodegroupResponse {
  nodegroup?: Nodegroup;
}
export interface DeletePodIdentityAssociationRequest {
  clusterName: string;
  associationId: string;
}
export interface DeletePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
export interface DeprecationDetail {
  usage?: string;
  replacedWith?: string;
  stopServingVersion?: string;
  startServingReplacementVersion?: string;
  clientStats?: Array<ClientStat>;
}
export type DeprecationDetails = Array<DeprecationDetail>;
export interface DeregisterClusterRequest {
  name: string;
}
export interface DeregisterClusterResponse {
  cluster?: Cluster;
}
export interface DescribeAccessEntryRequest {
  clusterName: string;
  principalArn: string;
}
export interface DescribeAccessEntryResponse {
  accessEntry?: AccessEntry;
}
export interface DescribeAddonConfigurationRequest {
  addonName: string;
  addonVersion: string;
}
export interface DescribeAddonConfigurationResponse {
  addonName?: string;
  addonVersion?: string;
  configurationSchema?: string;
  podIdentityConfiguration?: Array<AddonPodIdentityConfiguration>;
}
export interface DescribeAddonRequest {
  clusterName: string;
  addonName: string;
}
export interface DescribeAddonResponse {
  addon?: Addon;
}
export interface DescribeAddonVersionsRequest {
  kubernetesVersion?: string;
  maxResults?: number;
  nextToken?: string;
  addonName?: string;
  types?: Array<string>;
  publishers?: Array<string>;
  owners?: Array<string>;
}
export type DescribeAddonVersionsRequestMaxResults = number;

export interface DescribeAddonVersionsResponse {
  addons?: Array<AddonInfo>;
  nextToken?: string;
}
export interface DescribeClusterRequest {
  name: string;
}
export interface DescribeClusterResponse {
  cluster?: Cluster;
}
export type DescribeClusterVersionMaxResults = number;

export interface DescribeClusterVersionsRequest {
  clusterType?: string;
  maxResults?: number;
  nextToken?: string;
  defaultOnly?: boolean;
  includeAll?: boolean;
  clusterVersions?: Array<string>;
  status?: ClusterVersionStatus;
  versionStatus?: VersionStatus;
}
export interface DescribeClusterVersionsResponse {
  nextToken?: string;
  clusterVersions?: Array<ClusterVersionInformation>;
}
export interface DescribeEksAnywhereSubscriptionRequest {
  id: string;
}
export interface DescribeEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
export interface DescribeFargateProfileRequest {
  clusterName: string;
  fargateProfileName: string;
}
export interface DescribeFargateProfileResponse {
  fargateProfile?: FargateProfile;
}
export interface DescribeIdentityProviderConfigRequest {
  clusterName: string;
  identityProviderConfig: IdentityProviderConfig;
}
export interface DescribeIdentityProviderConfigResponse {
  identityProviderConfig?: IdentityProviderConfigResponse;
}
export interface DescribeInsightRequest {
  clusterName: string;
  id: string;
}
export interface DescribeInsightResponse {
  insight?: Insight;
}
export interface DescribeNodegroupRequest {
  clusterName: string;
  nodegroupName: string;
}
export interface DescribeNodegroupResponse {
  nodegroup?: Nodegroup;
}
export interface DescribePodIdentityAssociationRequest {
  clusterName: string;
  associationId: string;
}
export interface DescribePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
export interface DescribeUpdateRequest {
  name: string;
  updateId: string;
  nodegroupName?: string;
  addonName?: string;
}
export interface DescribeUpdateResponse {
  update?: Update;
}
export interface DisassociateAccessPolicyRequest {
  clusterName: string;
  principalArn: string;
  policyArn: string;
}
export interface DisassociateAccessPolicyResponse {}
export interface DisassociateIdentityProviderConfigRequest {
  clusterName: string;
  identityProviderConfig: IdentityProviderConfig;
  clientRequestToken?: string;
}
export interface DisassociateIdentityProviderConfigResponse {
  update?: Update;
}
export interface EksAnywhereSubscription {
  id?: string;
  arn?: string;
  createdAt?: Date | string;
  effectiveDate?: Date | string;
  expirationDate?: Date | string;
  licenseQuantity?: number;
  licenseType?: EksAnywhereSubscriptionLicenseType;
  term?: EksAnywhereSubscriptionTerm;
  status?: string;
  autoRenew?: boolean;
  licenseArns?: Array<string>;
  licenses?: Array<License>;
  tags?: Record<string, string>;
}
export type EksAnywhereSubscriptionLicenseType = "Cluster";
export type EksAnywhereSubscriptionList = Array<EksAnywhereSubscription>;
export type EksAnywhereSubscriptionName = string;

export type EksAnywhereSubscriptionStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "EXPIRING"
  | "EXPIRED"
  | "DELETING";
export type EksAnywhereSubscriptionStatusValues =
  Array<EksAnywhereSubscriptionStatus>;
export interface EksAnywhereSubscriptionTerm {
  duration?: number;
  unit?: EksAnywhereSubscriptionTermUnit;
}
export type EksAnywhereSubscriptionTermUnit = "MONTHS";
export interface ElasticLoadBalancing {
  enabled?: boolean;
}
export interface EncryptionConfig {
  resources?: Array<string>;
  provider?: Provider;
}
export type EncryptionConfigList = Array<EncryptionConfig>;
export type ErrorCode =
  | "SUBNET_NOT_FOUND"
  | "SECURITY_GROUP_NOT_FOUND"
  | "ENI_LIMIT_REACHED"
  | "IP_NOT_AVAILABLE"
  | "ACCESS_DENIED"
  | "OPERATION_NOT_PERMITTED"
  | "VPC_ID_NOT_FOUND"
  | "UNKNOWN"
  | "NODE_CREATION_FAILURE"
  | "POD_EVICTION_FAILURE"
  | "INSUFFICIENT_FREE_ADDRESSES"
  | "CLUSTER_UNREACHABLE"
  | "INSUFFICIENT_NUMBER_OF_REPLICAS"
  | "CONFIGURATION_CONFLICT"
  | "ADMISSION_REQUEST_DENIED"
  | "UNSUPPORTED_ADDON_MODIFICATION"
  | "K8S_RESOURCE_NOT_FOUND";
export interface ErrorDetail {
  errorCode?: ErrorCode;
  errorMessage?: string;
  resourceIds?: Array<string>;
}
export type ErrorDetails = Array<ErrorDetail>;
export interface FargateProfile {
  fargateProfileName?: string;
  fargateProfileArn?: string;
  clusterName?: string;
  createdAt?: Date | string;
  podExecutionRoleArn?: string;
  subnets?: Array<string>;
  selectors?: Array<FargateProfileSelector>;
  status?: FargateProfileStatus;
  tags?: Record<string, string>;
  health?: FargateProfileHealth;
}
export interface FargateProfileHealth {
  issues?: Array<FargateProfileIssue>;
}
export interface FargateProfileIssue {
  code?: FargateProfileIssueCode;
  message?: string;
  resourceIds?: Array<string>;
}
export type FargateProfileIssueCode =
  | "POD_EXECUTION_ROLE_ALREADY_IN_USE"
  | "ACCESS_DENIED"
  | "CLUSTER_UNREACHABLE"
  | "INTERNAL_FAILURE";
export type FargateProfileIssueList = Array<FargateProfileIssue>;
export type FargateProfileLabel = Record<string, string>;
export interface FargateProfileSelector {
  namespace?: string;
  labels?: Record<string, string>;
}
export type FargateProfileSelectors = Array<FargateProfileSelector>;
export type FargateProfilesRequestMaxResults = number;

export type FargateProfileStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED";
export interface Identity {
  oidc?: OIDC;
}
export interface IdentityProviderConfig {
  type: string;
  name: string;
}
export interface IdentityProviderConfigResponse {
  oidc?: OidcIdentityProviderConfig;
}
export type IdentityProviderConfigs = Array<IdentityProviderConfig>;
export type IncludeClustersList = Array<string>;
export interface Insight {
  id?: string;
  name?: string;
  category?: Category;
  kubernetesVersion?: string;
  lastRefreshTime?: Date | string;
  lastTransitionTime?: Date | string;
  description?: string;
  insightStatus?: InsightStatus;
  recommendation?: string;
  additionalInfo?: Record<string, string>;
  resources?: Array<InsightResourceDetail>;
  categorySpecificSummary?: InsightCategorySpecificSummary;
}
export interface InsightCategorySpecificSummary {
  deprecationDetails?: Array<DeprecationDetail>;
  addonCompatibilityDetails?: Array<AddonCompatibilityDetail>;
}
export interface InsightResourceDetail {
  insightStatus?: InsightStatus;
  kubernetesResourceUri?: string;
  arn?: string;
}
export type InsightResourceDetails = Array<InsightResourceDetail>;
export interface InsightsFilter {
  categories?: Array<Category>;
  kubernetesVersions?: Array<string>;
  statuses?: Array<InsightStatusValue>;
}
export interface InsightStatus {
  status?: InsightStatusValue;
  reason?: string;
}
export type InsightStatusValue = "PASSING" | "WARNING" | "ERROR" | "UNKNOWN";
export type InsightStatusValueList = Array<InsightStatusValue>;
export type InsightSummaries = Array<InsightSummary>;
export interface InsightSummary {
  id?: string;
  name?: string;
  category?: Category;
  kubernetesVersion?: string;
  lastRefreshTime?: Date | string;
  lastTransitionTime?: Date | string;
  description?: string;
  insightStatus?: InsightStatus;
}
export type Integer = number;

export declare class InvalidParameterException extends Data.TaggedError(
  "InvalidParameterException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly fargateProfileName?: string;
  readonly addonName?: string;
  readonly subscriptionId?: string;
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly addonName?: string;
  readonly subscriptionId?: string;
  readonly message?: string;
}> {}
export declare class InvalidStateException extends Data.TaggedError(
  "InvalidStateException",
)<{
  readonly clusterName?: string;
  readonly message?: string;
}> {}
export type IpFamily = "IPV4" | "IPV6";
export interface Issue {
  code?: NodegroupIssueCode;
  message?: string;
  resourceIds?: Array<string>;
}
export type IssueList = Array<Issue>;
export interface KubernetesNetworkConfigRequest {
  serviceIpv4Cidr?: string;
  ipFamily?: IpFamily;
  elasticLoadBalancing?: ElasticLoadBalancing;
}
export interface KubernetesNetworkConfigResponse {
  serviceIpv4Cidr?: string;
  serviceIpv6Cidr?: string;
  ipFamily?: IpFamily;
  elasticLoadBalancing?: ElasticLoadBalancing;
}
export type labelKey = string;

export type labelsKeyList = Array<string>;
export type labelsMap = Record<string, string>;
export type labelValue = string;

export interface LaunchTemplateSpecification {
  name?: string;
  version?: string;
  id?: string;
}
export interface License {
  id?: string;
  token?: string;
}
export type LicenseList = Array<License>;
export interface ListAccessEntriesRequest {
  clusterName: string;
  associatedPolicyArn?: string;
  maxResults?: number;
  nextToken?: string;
}
export type ListAccessEntriesRequestMaxResults = number;

export interface ListAccessEntriesResponse {
  accessEntries?: Array<string>;
  nextToken?: string;
}
export interface ListAccessPoliciesRequest {
  maxResults?: number;
  nextToken?: string;
}
export type ListAccessPoliciesRequestMaxResults = number;

export interface ListAccessPoliciesResponse {
  accessPolicies?: Array<AccessPolicy>;
  nextToken?: string;
}
export interface ListAddonsRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
export type ListAddonsRequestMaxResults = number;

export interface ListAddonsResponse {
  addons?: Array<string>;
  nextToken?: string;
}
export interface ListAssociatedAccessPoliciesRequest {
  clusterName: string;
  principalArn: string;
  maxResults?: number;
  nextToken?: string;
}
export type ListAssociatedAccessPoliciesRequestMaxResults = number;

export interface ListAssociatedAccessPoliciesResponse {
  clusterName?: string;
  principalArn?: string;
  nextToken?: string;
  associatedAccessPolicies?: Array<AssociatedAccessPolicy>;
}
export interface ListClustersRequest {
  maxResults?: number;
  nextToken?: string;
  include?: Array<string>;
}
export type ListClustersRequestMaxResults = number;

export interface ListClustersResponse {
  clusters?: Array<string>;
  nextToken?: string;
}
export interface ListEksAnywhereSubscriptionsRequest {
  maxResults?: number;
  nextToken?: string;
  includeStatus?: Array<EksAnywhereSubscriptionStatus>;
}
export type ListEksAnywhereSubscriptionsRequestMaxResults = number;

export interface ListEksAnywhereSubscriptionsResponse {
  subscriptions?: Array<EksAnywhereSubscription>;
  nextToken?: string;
}
export interface ListFargateProfilesRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFargateProfilesResponse {
  fargateProfileNames?: Array<string>;
  nextToken?: string;
}
export interface ListIdentityProviderConfigsRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
export type ListIdentityProviderConfigsRequestMaxResults = number;

export interface ListIdentityProviderConfigsResponse {
  identityProviderConfigs?: Array<IdentityProviderConfig>;
  nextToken?: string;
}
export type ListInsightsMaxResults = number;

export interface ListInsightsRequest {
  clusterName: string;
  filter?: InsightsFilter;
  maxResults?: number;
  nextToken?: string;
}
export interface ListInsightsResponse {
  insights?: Array<InsightSummary>;
  nextToken?: string;
}
export interface ListNodegroupsRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
export type ListNodegroupsRequestMaxResults = number;

export interface ListNodegroupsResponse {
  nodegroups?: Array<string>;
  nextToken?: string;
}
export type ListPodIdentityAssociationsMaxResults = number;

export interface ListPodIdentityAssociationsRequest {
  clusterName: string;
  namespace?: string;
  serviceAccount?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPodIdentityAssociationsResponse {
  associations?: Array<PodIdentityAssociationSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListUpdatesRequest {
  name: string;
  nodegroupName?: string;
  addonName?: string;
  nextToken?: string;
  maxResults?: number;
}
export type ListUpdatesRequestMaxResults = number;

export interface ListUpdatesResponse {
  updateIds?: Array<string>;
  nextToken?: string;
}
export interface Logging {
  clusterLogging?: Array<LogSetup>;
}
export interface LogSetup {
  types?: Array<LogType>;
  enabled?: boolean;
}
export type LogSetups = Array<LogSetup>;
export type LogType =
  | "API"
  | "AUDIT"
  | "AUTHENTICATOR"
  | "CONTROLLER_MANAGER"
  | "SCHEDULER";
export type LogTypes = Array<LogType>;
export interface MarketplaceInformation {
  productId?: string;
  productUrl?: string;
}
export interface Nodegroup {
  nodegroupName?: string;
  nodegroupArn?: string;
  clusterName?: string;
  version?: string;
  releaseVersion?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  status?: NodegroupStatus;
  capacityType?: CapacityTypes;
  scalingConfig?: NodegroupScalingConfig;
  instanceTypes?: Array<string>;
  subnets?: Array<string>;
  remoteAccess?: RemoteAccessConfig;
  amiType?: AMITypes;
  nodeRole?: string;
  labels?: Record<string, string>;
  taints?: Array<Taint>;
  resources?: NodegroupResources;
  diskSize?: number;
  health?: NodegroupHealth;
  updateConfig?: NodegroupUpdateConfig;
  nodeRepairConfig?: NodeRepairConfig;
  launchTemplate?: LaunchTemplateSpecification;
  tags?: Record<string, string>;
}
export interface NodegroupHealth {
  issues?: Array<Issue>;
}
export type NodegroupIssueCode =
  | "AUTO_SCALING_GROUP_NOT_FOUND"
  | "AUTO_SCALING_GROUP_INVALID_CONFIGURATION"
  | "EC2_SECURITY_GROUP_NOT_FOUND"
  | "EC2_SECURITY_GROUP_DELETION_FAILURE"
  | "EC2_LAUNCH_TEMPLATE_NOT_FOUND"
  | "EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH"
  | "EC2_SUBNET_NOT_FOUND"
  | "EC2_SUBNET_INVALID_CONFIGURATION"
  | "IAM_INSTANCE_PROFILE_NOT_FOUND"
  | "EC2_SUBNET_MISSING_IPV6_ASSIGNMENT"
  | "IAM_LIMIT_EXCEEDED"
  | "IAM_NODE_ROLE_NOT_FOUND"
  | "NODE_CREATION_FAILURE"
  | "ASG_INSTANCE_LAUNCH_FAILURES"
  | "INSTANCE_LIMIT_EXCEEDED"
  | "INSUFFICIENT_FREE_ADDRESSES"
  | "ACCESS_DENIED"
  | "INTERNAL_FAILURE"
  | "CLUSTER_UNREACHABLE"
  | "AMI_ID_NOT_FOUND"
  | "AUTO_SCALING_GROUP_OPT_IN_REQUIRED"
  | "AUTO_SCALING_GROUP_RATE_LIMIT_EXCEEDED"
  | "EC2_LAUNCH_TEMPLATE_DELETION_FAILURE"
  | "EC2_LAUNCH_TEMPLATE_INVALID_CONFIGURATION"
  | "EC2_LAUNCH_TEMPLATE_MAX_LIMIT_EXCEEDED"
  | "EC2_SUBNET_LIST_TOO_LONG"
  | "IAM_THROTTLING"
  | "NODE_TERMINATION_FAILURE"
  | "POD_EVICTION_FAILURE"
  | "SOURCE_EC2_LAUNCH_TEMPLATE_NOT_FOUND"
  | "LIMIT_EXCEEDED"
  | "UNKNOWN"
  | "AUTO_SCALING_GROUP_INSTANCE_REFRESH_ACTIVE"
  | "KUBERNETES_LABEL_INVALID"
  | "EC2_LAUNCH_TEMPLATE_VERSION_MAX_LIMIT_EXCEEDED"
  | "EC2_INSTANCE_TYPE_DOES_NOT_EXIST";
export interface NodegroupResources {
  autoScalingGroups?: Array<AutoScalingGroup>;
  remoteAccessSecurityGroup?: string;
}
export interface NodegroupScalingConfig {
  minSize?: number;
  maxSize?: number;
  desiredSize?: number;
}
export type NodegroupStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "DEGRADED";
export interface NodegroupUpdateConfig {
  maxUnavailable?: number;
  maxUnavailablePercentage?: number;
  updateStrategy?: NodegroupUpdateStrategies;
}
export type NodegroupUpdateStrategies = "DEFAULT" | "MINIMAL";
export interface NodeRepairConfig {
  enabled?: boolean;
}
export type NonZeroInteger = number;

export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export interface OIDC {
  issuer?: string;
}
export interface OidcIdentityProviderConfig {
  identityProviderConfigName?: string;
  identityProviderConfigArn?: string;
  clusterName?: string;
  issuerUrl?: string;
  clientId?: string;
  usernameClaim?: string;
  usernamePrefix?: string;
  groupsClaim?: string;
  groupsPrefix?: string;
  requiredClaims?: Record<string, string>;
  tags?: Record<string, string>;
  status?: configStatus;
}
export interface OidcIdentityProviderConfigRequest {
  identityProviderConfigName: string;
  issuerUrl: string;
  clientId: string;
  usernameClaim?: string;
  usernamePrefix?: string;
  groupsClaim?: string;
  groupsPrefix?: string;
  requiredClaims?: Record<string, string>;
}
export interface OutpostConfigRequest {
  outpostArns: Array<string>;
  controlPlaneInstanceType: string;
  controlPlanePlacement?: ControlPlanePlacementRequest;
}
export interface OutpostConfigResponse {
  outpostArns: Array<string>;
  controlPlaneInstanceType: string;
  controlPlanePlacement?: ControlPlanePlacementResponse;
}
export type PercentCapacity = number;

export interface PodIdentityAssociation {
  clusterName?: string;
  namespace?: string;
  serviceAccount?: string;
  roleArn?: string;
  associationArn?: string;
  associationId?: string;
  tags?: Record<string, string>;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  ownerArn?: string;
  disableSessionTags?: boolean;
  targetRoleArn?: string;
  externalId?: string;
}
export type PodIdentityAssociationSummaries =
  Array<PodIdentityAssociationSummary>;
export interface PodIdentityAssociationSummary {
  clusterName?: string;
  namespace?: string;
  serviceAccount?: string;
  associationArn?: string;
  associationId?: string;
  ownerArn?: string;
}
export interface Provider {
  keyArn?: string;
}
export interface RegisterClusterRequest {
  name: string;
  connectorConfig: ConnectorConfigRequest;
  clientRequestToken?: string;
  tags?: Record<string, string>;
}
export interface RegisterClusterResponse {
  cluster?: Cluster;
}
export interface RemoteAccessConfig {
  ec2SshKey?: string;
  sourceSecurityGroups?: Array<string>;
}
export interface RemoteNetworkConfigRequest {
  remoteNodeNetworks?: Array<RemoteNodeNetwork>;
  remotePodNetworks?: Array<RemotePodNetwork>;
}
export interface RemoteNetworkConfigResponse {
  remoteNodeNetworks?: Array<RemoteNodeNetwork>;
  remotePodNetworks?: Array<RemotePodNetwork>;
}
export interface RemoteNodeNetwork {
  cidrs?: Array<string>;
}
export type RemoteNodeNetworkList = Array<RemoteNodeNetwork>;
export interface RemotePodNetwork {
  cidrs?: Array<string>;
}
export type RemotePodNetworkList = Array<RemotePodNetwork>;
export type requiredClaimsKey = string;

export type requiredClaimsMap = Record<string, string>;
export type requiredClaimsValue = string;

export type ResolveConflicts = "OVERWRITE" | "NONE" | "PRESERVE";
export declare class ResourceInUseException extends Data.TaggedError(
  "ResourceInUseException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly addonName?: string;
  readonly message?: string;
}> {}
export declare class ResourceLimitExceededException extends Data.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly subscriptionId?: string;
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly fargateProfileName?: string;
  readonly addonName?: string;
  readonly subscriptionId?: string;
  readonly message?: string;
}> {}
export declare class ResourcePropagationDelayException extends Data.TaggedError(
  "ResourcePropagationDelayException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export declare class ServerException extends Data.TaggedError(
  "ServerException",
)<{
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly addonName?: string;
  readonly subscriptionId?: string;
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends Data.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export interface StorageConfigRequest {
  blockStorage?: BlockStorage;
}
export interface StorageConfigResponse {
  blockStorage?: BlockStorage;
}
export type StringList = Array<string>;
export type SupportType = "STANDARD" | "EXTENDED";
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export interface Taint {
  key?: string;
  value?: string;
  effect?: TaintEffect;
}
export type TaintEffect = "NO_SCHEDULE" | "NO_EXECUTE" | "PREFER_NO_SCHEDULE";
export type taintKey = string;

export type taintsList = Array<Taint>;
export type taintValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly clusterName?: string;
  readonly message?: string;
}> {}
export type Timestamp = Date | string;

export declare class UnsupportedAvailabilityZoneException extends Data.TaggedError(
  "UnsupportedAvailabilityZoneException",
)<{
  readonly message?: string;
  readonly clusterName?: string;
  readonly nodegroupName?: string;
  readonly validZones?: Array<string>;
}> {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface Update {
  id?: string;
  status?: UpdateStatus;
  type?: UpdateType;
  params?: Array<UpdateParam>;
  createdAt?: Date | string;
  errors?: Array<ErrorDetail>;
}
export interface UpdateAccessConfigRequest {
  authenticationMode?: AuthenticationMode;
}
export interface UpdateAccessEntryRequest {
  clusterName: string;
  principalArn: string;
  kubernetesGroups?: Array<string>;
  clientRequestToken?: string;
  username?: string;
}
export interface UpdateAccessEntryResponse {
  accessEntry?: AccessEntry;
}
export interface UpdateAddonRequest {
  clusterName: string;
  addonName: string;
  addonVersion?: string;
  serviceAccountRoleArn?: string;
  resolveConflicts?: ResolveConflicts;
  clientRequestToken?: string;
  configurationValues?: string;
  podIdentityAssociations?: Array<AddonPodIdentityAssociations>;
}
export interface UpdateAddonResponse {
  update?: Update;
}
export interface UpdateClusterConfigRequest {
  name: string;
  resourcesVpcConfig?: VpcConfigRequest;
  logging?: Logging;
  clientRequestToken?: string;
  accessConfig?: UpdateAccessConfigRequest;
  upgradePolicy?: UpgradePolicyRequest;
  zonalShiftConfig?: ZonalShiftConfigRequest;
  computeConfig?: ComputeConfigRequest;
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;
  storageConfig?: StorageConfigRequest;
  remoteNetworkConfig?: RemoteNetworkConfigRequest;
}
export interface UpdateClusterConfigResponse {
  update?: Update;
}
export interface UpdateClusterVersionRequest {
  name: string;
  version: string;
  clientRequestToken?: string;
  force?: boolean;
}
export interface UpdateClusterVersionResponse {
  update?: Update;
}
export interface UpdateEksAnywhereSubscriptionRequest {
  id: string;
  autoRenew: boolean;
  clientRequestToken?: string;
}
export interface UpdateEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
export interface UpdateLabelsPayload {
  addOrUpdateLabels?: Record<string, string>;
  removeLabels?: Array<string>;
}
export interface UpdateNodegroupConfigRequest {
  clusterName: string;
  nodegroupName: string;
  labels?: UpdateLabelsPayload;
  taints?: UpdateTaintsPayload;
  scalingConfig?: NodegroupScalingConfig;
  updateConfig?: NodegroupUpdateConfig;
  nodeRepairConfig?: NodeRepairConfig;
  clientRequestToken?: string;
}
export interface UpdateNodegroupConfigResponse {
  update?: Update;
}
export interface UpdateNodegroupVersionRequest {
  clusterName: string;
  nodegroupName: string;
  version?: string;
  releaseVersion?: string;
  launchTemplate?: LaunchTemplateSpecification;
  force?: boolean;
  clientRequestToken?: string;
}
export interface UpdateNodegroupVersionResponse {
  update?: Update;
}
export interface UpdateParam {
  type?: UpdateParamType;
  value?: string;
}
export type UpdateParams = Array<UpdateParam>;
export type UpdateParamType =
  | "VERSION"
  | "PLATFORM_VERSION"
  | "ENDPOINT_PRIVATE_ACCESS"
  | "ENDPOINT_PUBLIC_ACCESS"
  | "CLUSTER_LOGGING"
  | "DESIRED_SIZE"
  | "LABELS_TO_ADD"
  | "LABELS_TO_REMOVE"
  | "TAINTS_TO_ADD"
  | "TAINTS_TO_REMOVE"
  | "MAX_SIZE"
  | "MIN_SIZE"
  | "RELEASE_VERSION"
  | "PUBLIC_ACCESS_CIDRS"
  | "LAUNCH_TEMPLATE_NAME"
  | "LAUNCH_TEMPLATE_VERSION"
  | "IDENTITY_PROVIDER_CONFIG"
  | "ENCRYPTION_CONFIG"
  | "ADDON_VERSION"
  | "SERVICE_ACCOUNT_ROLE_ARN"
  | "RESOLVE_CONFLICTS"
  | "MAX_UNAVAILABLE"
  | "MAX_UNAVAILABLE_PERCENTAGE"
  | "NODE_REPAIR_ENABLED"
  | "UPDATE_STRATEGY"
  | "CONFIGURATION_VALUES"
  | "SECURITY_GROUPS"
  | "SUBNETS"
  | "AUTHENTICATION_MODE"
  | "POD_IDENTITY_ASSOCIATIONS"
  | "UPGRADE_POLICY"
  | "ZONAL_SHIFT_CONFIG"
  | "COMPUTE_CONFIG"
  | "STORAGE_CONFIG"
  | "KUBERNETES_NETWORK_CONFIG"
  | "REMOTE_NETWORK_CONFIG";
export interface UpdatePodIdentityAssociationRequest {
  clusterName: string;
  associationId: string;
  roleArn?: string;
  clientRequestToken?: string;
  disableSessionTags?: boolean;
  targetRoleArn?: string;
}
export interface UpdatePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
export type UpdateStatus =
  | "IN_PROGRESS"
  | "FAILED"
  | "CANCELLED"
  | "SUCCESSFUL";
export interface UpdateTaintsPayload {
  addOrUpdateTaints?: Array<Taint>;
  removeTaints?: Array<Taint>;
}
export type UpdateType =
  | "VERSION_UPDATE"
  | "ENDPOINT_ACCESS_UPDATE"
  | "LOGGING_UPDATE"
  | "CONFIG_UPDATE"
  | "ASSOCIATE_IDENTITY_PROVIDER_CONFIG"
  | "DISASSOCIATE_IDENTITY_PROVIDER_CONFIG"
  | "ASSOCIATE_ENCRYPTION_CONFIG"
  | "ADDON_UPDATE"
  | "VPC_CONFIG_UPDATE"
  | "ACCESS_CONFIG_UPDATE"
  | "UPGRADE_POLICY_UPDATE"
  | "ZONAL_SHIFT_CONFIG_UPDATE"
  | "AUTO_MODE_UPDATE"
  | "REMOTE_NETWORK_CONFIG_UPDATE";
export interface UpgradePolicyRequest {
  supportType?: SupportType;
}
export interface UpgradePolicyResponse {
  supportType?: SupportType;
}
export type VersionStatus =
  | "UNSUPPORTED"
  | "STANDARD_SUPPORT"
  | "EXTENDED_SUPPORT";
export interface VpcConfigRequest {
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  endpointPublicAccess?: boolean;
  endpointPrivateAccess?: boolean;
  publicAccessCidrs?: Array<string>;
}
export interface VpcConfigResponse {
  subnetIds?: Array<string>;
  securityGroupIds?: Array<string>;
  clusterSecurityGroupId?: string;
  vpcId?: string;
  endpointPublicAccess?: boolean;
  endpointPrivateAccess?: boolean;
  publicAccessCidrs?: Array<string>;
}
export type ZeroCapacity = number;

export interface ZonalShiftConfigRequest {
  enabled?: boolean;
}
export interface ZonalShiftConfigResponse {
  enabled?: boolean;
}
export declare namespace AssociateAccessPolicy {
  export type Input = AssociateAccessPolicyRequest;
  export type Output = AssociateAccessPolicyResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace AssociateEncryptionConfig {
  export type Input = AssociateEncryptionConfigRequest;
  export type Output = AssociateEncryptionConfigResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateIdentityProviderConfig {
  export type Input = AssociateIdentityProviderConfigRequest;
  export type Output = AssociateIdentityProviderConfigResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAccessEntry {
  export type Input = CreateAccessEntryRequest;
  export type Output = CreateAccessEntryResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace CreateAddon {
  export type Input = CreateAddonRequest;
  export type Output = CreateAddonResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ServerException
    | ServiceUnavailableException
    | UnsupportedAvailabilityZoneException
    | CommonAwsError;
}

export declare namespace CreateEksAnywhereSubscription {
  export type Input = CreateEksAnywhereSubscriptionRequest;
  export type Output = CreateEksAnywhereSubscriptionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceLimitExceededException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateFargateProfile {
  export type Input = CreateFargateProfileRequest;
  export type Output = CreateFargateProfileResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceLimitExceededException
    | ServerException
    | UnsupportedAvailabilityZoneException
    | CommonAwsError;
}

export declare namespace CreateNodegroup {
  export type Input = CreateNodegroupRequest;
  export type Output = CreateNodegroupResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreatePodIdentityAssociation {
  export type Input = CreatePodIdentityAssociationRequest;
  export type Output = CreatePodIdentityAssociationResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteAccessEntry {
  export type Input = DeleteAccessEntryRequest;
  export type Output = DeleteAccessEntryResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteAddon {
  export type Input = DeleteAddonRequest;
  export type Output = DeleteAddonResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | ClientException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteEksAnywhereSubscription {
  export type Input = DeleteEksAnywhereSubscriptionRequest;
  export type Output = DeleteEksAnywhereSubscriptionResponse;
  export type Error =
    | ClientException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteFargateProfile {
  export type Input = DeleteFargateProfileRequest;
  export type Output = DeleteFargateProfileResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeleteNodegroup {
  export type Input = DeleteNodegroupRequest;
  export type Output = DeleteNodegroupResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeletePodIdentityAssociation {
  export type Input = DeletePodIdentityAssociationRequest;
  export type Output = DeletePodIdentityAssociationResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DeregisterCluster {
  export type Input = DeregisterClusterRequest;
  export type Output = DeregisterClusterResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeAccessEntry {
  export type Input = DescribeAccessEntryRequest;
  export type Output = DescribeAccessEntryResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeAddon {
  export type Input = DescribeAddonRequest;
  export type Output = DescribeAddonResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeAddonConfiguration {
  export type Input = DescribeAddonConfigurationRequest;
  export type Output = DescribeAddonConfigurationResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeAddonVersions {
  export type Input = DescribeAddonVersionsRequest;
  export type Output = DescribeAddonVersionsResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterRequest;
  export type Output = DescribeClusterResponse;
  export type Error =
    | ClientException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeClusterVersions {
  export type Input = DescribeClusterVersionsRequest;
  export type Output = DescribeClusterVersionsResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeEksAnywhereSubscription {
  export type Input = DescribeEksAnywhereSubscriptionRequest;
  export type Output = DescribeEksAnywhereSubscriptionResponse;
  export type Error =
    | ClientException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeFargateProfile {
  export type Input = DescribeFargateProfileRequest;
  export type Output = DescribeFargateProfileResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeIdentityProviderConfig {
  export type Input = DescribeIdentityProviderConfigRequest;
  export type Output = DescribeIdentityProviderConfigResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeInsight {
  export type Input = DescribeInsightRequest;
  export type Output = DescribeInsightResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeNodegroup {
  export type Input = DescribeNodegroupRequest;
  export type Output = DescribeNodegroupResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribePodIdentityAssociation {
  export type Input = DescribePodIdentityAssociationRequest;
  export type Output = DescribePodIdentityAssociationResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DescribeUpdate {
  export type Input = DescribeUpdateRequest;
  export type Output = DescribeUpdateResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DisassociateAccessPolicy {
  export type Input = DisassociateAccessPolicyRequest;
  export type Output = DisassociateAccessPolicyResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace DisassociateIdentityProviderConfig {
  export type Input = DisassociateIdentityProviderConfigRequest;
  export type Output = DisassociateIdentityProviderConfigResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAccessEntries {
  export type Input = ListAccessEntriesRequest;
  export type Output = ListAccessEntriesResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListAccessPolicies {
  export type Input = ListAccessPoliciesRequest;
  export type Output = ListAccessPoliciesResponse;
  export type Error = ServerException | CommonAwsError;
}

export declare namespace ListAddons {
  export type Input = ListAddonsRequest;
  export type Output = ListAddonsResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListAssociatedAccessPolicies {
  export type Input = ListAssociatedAccessPoliciesRequest;
  export type Output = ListAssociatedAccessPoliciesResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListEksAnywhereSubscriptions {
  export type Input = ListEksAnywhereSubscriptionsRequest;
  export type Output = ListEksAnywhereSubscriptionsResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListFargateProfiles {
  export type Input = ListFargateProfilesRequest;
  export type Output = ListFargateProfilesResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListIdentityProviderConfigs {
  export type Input = ListIdentityProviderConfigsRequest;
  export type Output = ListIdentityProviderConfigsResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListInsights {
  export type Input = ListInsightsRequest;
  export type Output = ListInsightsResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListNodegroups {
  export type Input = ListNodegroupsRequest;
  export type Output = ListNodegroupsResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListPodIdentityAssociations {
  export type Input = ListPodIdentityAssociationsRequest;
  export type Output = ListPodIdentityAssociationsResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = BadRequestException | NotFoundException | CommonAwsError;
}

export declare namespace ListUpdates {
  export type Input = ListUpdatesRequest;
  export type Output = ListUpdatesResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace RegisterCluster {
  export type Input = RegisterClusterRequest;
  export type Output = RegisterClusterResponse;
  export type Error =
    | AccessDeniedException
    | ClientException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceLimitExceededException
    | ResourcePropagationDelayException
    | ServerException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error = BadRequestException | NotFoundException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = BadRequestException | NotFoundException | CommonAwsError;
}

export declare namespace UpdateAccessEntry {
  export type Input = UpdateAccessEntryRequest;
  export type Output = UpdateAccessEntryResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateAddon {
  export type Input = UpdateAddonRequest;
  export type Output = UpdateAddonResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateClusterConfig {
  export type Input = UpdateClusterConfigRequest;
  export type Output = UpdateClusterConfigResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateClusterVersion {
  export type Input = UpdateClusterVersionRequest;
  export type Output = UpdateClusterVersionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | InvalidStateException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateEksAnywhereSubscription {
  export type Input = UpdateEksAnywhereSubscriptionRequest;
  export type Output = UpdateEksAnywhereSubscriptionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateNodegroupConfig {
  export type Input = UpdateNodegroupConfigRequest;
  export type Output = UpdateNodegroupConfigResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdateNodegroupVersion {
  export type Input = UpdateNodegroupVersionRequest;
  export type Output = UpdateNodegroupVersionResponse;
  export type Error =
    | ClientException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}

export declare namespace UpdatePodIdentityAssociation {
  export type Input = UpdatePodIdentityAssociationRequest;
  export type Output = UpdatePodIdentityAssociationResponse;
  export type Error =
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServerException
    | CommonAwsError;
}
