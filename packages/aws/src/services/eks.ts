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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "EKS", serviceShapeName: "AWSWesleyFrontend" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "eks" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-11-01");
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
              `https://eks-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws") {
              return e(`https://fips.eks.${Region}.amazonaws.com`);
            }
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://eks.${Region}.amazonaws.com`);
            }
            return e(`https://eks-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://eks.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://eks.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ClientException
  extends /*@__PURE__*/ S.TaggedError<ClientException>()(
    "ClientException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      addonName: /*@__PURE__*/ S.optional(S.String),
      subscriptionId: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      fargateProfileName: /*@__PURE__*/ S.optional(S.String),
      addonName: /*@__PURE__*/ S.optional(S.String),
      subscriptionId: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      addonName: /*@__PURE__*/ S.optional(S.String),
      subscriptionId: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateException>()(
    "InvalidStateException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      addonName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      subscriptionId: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      fargateProfileName: /*@__PURE__*/ S.optional(S.String),
      addonName: /*@__PURE__*/ S.optional(S.String),
      subscriptionId: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourcePropagationDelayException
  extends /*@__PURE__*/ S.TaggedError<ResourcePropagationDelayException>()(
    "ResourcePropagationDelayException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(428),
  ) {}
export class ServerException
  extends /*@__PURE__*/ S.TaggedError<ServerException>()(
    "ServerException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      addonName: /*@__PURE__*/ S.optional(S.String),
      subscriptionId: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      clusterName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnsupportedAvailabilityZoneException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedAvailabilityZoneException>()(
    "UnsupportedAvailabilityZoneException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      clusterName: /*@__PURE__*/ S.optional(S.String),
      nodegroupName: /*@__PURE__*/ S.optional(S.String),
      validZones: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => StringList).annotate({ identifier: "StringList" }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export interface ActivateCertificateAuthorityRequest {
  clusterName: string;
  certificateAuthorityId: string;
  clientRequestToken?: string;
}
const ActivateCertificateAuthorityRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<ActivateCertificateAuthorityRequest>;
export type UpdateStatus = "InProgress" | "Failed" | "Cancelled" | "Successful" | (string & {});
const UpdateStatus = S.String;

export type UpdateType =
  | "VersionUpdate"
  | "EndpointAccessUpdate"
  | "LoggingUpdate"
  | "ConfigUpdate"
  | "AssociateIdentityProviderConfig"
  | "DisassociateIdentityProviderConfig"
  | "AssociateEncryptionConfig"
  | "AddonUpdate"
  | "VpcConfigUpdate"
  | "AccessConfigUpdate"
  | "UpgradePolicyUpdate"
  | "ZonalShiftConfigUpdate"
  | "AutoModeUpdate"
  | "RemoteNetworkConfigUpdate"
  | "DeletionProtectionUpdate"
  | "CapabilityUpdate"
  | "ControlPlaneScalingConfigUpdate"
  | "VendedLogsUpdate"
  | "ControlPlaneEgressUpdate"
  | "VersionRollback"
  | "ControlPlaneComponentConfigUpdate"
  | "CertificateAuthorityUpdate"
  | (string & {});
const UpdateType = S.String;

export type UpdateParamType =
  | "Version"
  | "PlatformVersion"
  | "EndpointPrivateAccess"
  | "EndpointPublicAccess"
  | "ClusterLogging"
  | "DesiredSize"
  | "LabelsToAdd"
  | "LabelsToRemove"
  | "TaintsToAdd"
  | "TaintsToRemove"
  | "MaxSize"
  | "MinSize"
  | "ReleaseVersion"
  | "PublicAccessCidrs"
  | "LaunchTemplateName"
  | "LaunchTemplateVersion"
  | "IdentityProviderConfig"
  | "EncryptionConfig"
  | "AddonVersion"
  | "ServiceAccountRoleArn"
  | "ResolveConflicts"
  | "MaxUnavailable"
  | "MaxUnavailablePercentage"
  | "NodeRepairEnabled"
  | "UpdateStrategy"
  | "ConfigurationValues"
  | "SecurityGroups"
  | "Subnets"
  | "AuthenticationMode"
  | "PodIdentityAssociations"
  | "UpgradePolicy"
  | "ZonalShiftConfig"
  | "ComputeConfig"
  | "StorageConfig"
  | "KubernetesNetworkConfig"
  | "RemoteNetworkConfig"
  | "DeletionProtection"
  | "NodeRepairConfig"
  | "RoleArn"
  | "RoleMappingsToAddOrUpdate"
  | "RoleMappingsToRemove"
  | "NetworkAccess"
  | "VendedLogs"
  | "UpdatedTier"
  | "PreviousTier"
  | "WarmPoolEnabled"
  | "WarmPoolMaxGroupPreparedCapacity"
  | "WarmPoolMinSize"
  | "WarmPoolState"
  | "WarmPoolReuseOnScaleIn"
  | "ControlPlaneEgressMode"
  | "KubeApiServerConfig"
  | "KubeSchedulerConfig"
  | "KubeControllerManagerConfig"
  | "ActiveCertificateAuthority"
  | "TrustedCertificateAuthorities"
  | "CertificateAuthorityId"
  | "SigningStatus"
  | (string & {});
const UpdateParamType = S.String;

export interface UpdateParam {
  type?: UpdateParamType;
  value?: string;
}
const UpdateParam = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<UpdateParam>;
export type UpdateParams = UpdateParam[];
const UpdateParams = /*@__PURE__*/ __L.at(__c0, 2);
export type ErrorCode =
  | "SubnetNotFound"
  | "SecurityGroupNotFound"
  | "EniLimitReached"
  | "IpNotAvailable"
  | "AccessDenied"
  | "OperationNotPermitted"
  | "VpcIdNotFound"
  | "Unknown"
  | "NodeCreationFailure"
  | "PodEvictionFailure"
  | "InsufficientFreeAddresses"
  | "ClusterUnreachable"
  | "InsufficientNumberOfReplicas"
  | "ConfigurationConflict"
  | "AdmissionRequestDenied"
  | "UnsupportedAddonModification"
  | "K8sResourceNotFound"
  | (string & {});
const ErrorCode = S.String;

export type StringList = string[];
const StringList = /*@__PURE__*/ __L.at(__c0, 3);
export interface ErrorDetail {
  errorCode?: ErrorCode;
  errorMessage?: string;
  resourceIds?: string[];
}
const ErrorDetail = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<ErrorDetail>;
export type ErrorDetails = ErrorDetail[];
const ErrorDetails = /*@__PURE__*/ __L.at(__c0, 5);
export type CancellationStatus = "InProgress" | "Failed" | "Successful" | (string & {});
const CancellationStatus = S.String;

export interface Cancellation {
  status?: CancellationStatus;
  reason?: string;
}
const Cancellation = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Cancellation>;
export interface Update {
  id?: string;
  status?: UpdateStatus;
  type?: UpdateType;
  params?: UpdateParam[];
  createdAt?: Date;
  errors?: ErrorDetail[];
  cancellation?: Cancellation;
}
const Update = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<Update>;
export type CertificateAuthorityCreatedBy = "EKS" | "CUSTOMER" | (string & {});
const CertificateAuthorityCreatedBy = S.String;

export type CertificateAuthorityActivatedBy = "EKS" | "CUSTOMER" | (string & {});
const CertificateAuthorityActivatedBy = S.String;

export type CertificateAuthoritySigningStatus =
  | "NOT_USED"
  | "ACTIVATING"
  | "IN_USE"
  | (string & {});
const CertificateAuthoritySigningStatus = S.String;

export type CertificateAuthorityDistributionStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "DELETING"
  | (string & {});
const CertificateAuthorityDistributionStatus = S.String;

export interface CertificateAuthoritySummary {
  id?: string;
  createdAt?: Date;
  createdBy?: CertificateAuthorityCreatedBy;
  activatedAt?: Date;
  activatedBy?: CertificateAuthorityActivatedBy;
  signingStatus?: CertificateAuthoritySigningStatus;
  distributionStatus?: CertificateAuthorityDistributionStatus;
}
const CertificateAuthoritySummary = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CertificateAuthoritySummary>;
export interface ActivateCertificateAuthorityResponse {
  update?: Update;
  certificateAuthority?: CertificateAuthoritySummary;
}
const ActivateCertificateAuthorityResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<ActivateCertificateAuthorityResponse>;
export type AccessScopeType = "cluster" | "namespace" | (string & {});
const AccessScopeType = S.String;

export interface AccessScope {
  type?: AccessScopeType;
  namespaces?: string[];
}
const AccessScope = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<AccessScope>;
export interface AssociateAccessPolicyRequest {
  clusterName: string;
  principalArn: string;
  policyArn: string;
  accessScope: AccessScope;
}
const AssociateAccessPolicyRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<AssociateAccessPolicyRequest>;
export interface AssociatedAccessPolicy {
  policyArn?: string;
  accessScope?: AccessScope;
  associatedAt?: Date;
  modifiedAt?: Date;
}
const AssociatedAccessPolicy = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<AssociatedAccessPolicy>;
export interface AssociateAccessPolicyResponse {
  clusterName?: string;
  principalArn?: string;
  associatedAccessPolicy?: AssociatedAccessPolicy;
}
const AssociateAccessPolicyResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<AssociateAccessPolicyResponse>;
export interface Provider {
  keyArn?: string;
}
const Provider = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<Provider>;
export interface EncryptionConfig {
  resources?: string[];
  provider?: Provider;
}
const EncryptionConfig = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<EncryptionConfig>;
export type EncryptionConfigList = EncryptionConfig[];
const EncryptionConfigList = /*@__PURE__*/ __L.at(__c2, 0);
export interface AssociateEncryptionConfigRequest {
  clusterName: string;
  encryptionConfig: EncryptionConfig[];
  clientRequestToken?: string;
}
const AssociateEncryptionConfigRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<AssociateEncryptionConfigRequest>;
export interface AssociateEncryptionConfigResponse {
  update?: Update;
}
const AssociateEncryptionConfigResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<AssociateEncryptionConfigResponse>;
export type RequiredClaimsKey = string;
export type RequiredClaimsValue = string;
export type RequiredClaimsMap = { [key: string]: string | undefined };
const RequiredClaimsMap = /*@__PURE__*/ __L.at(__c2, 3);
export interface OidcIdentityProviderConfigRequest {
  identityProviderConfigName: string;
  issuerUrl: string;
  clientId: string;
  usernameClaim?: string;
  usernamePrefix?: string;
  groupsClaim?: string;
  groupsPrefix?: string;
  requiredClaims?: { [key: string]: string | undefined };
}
const OidcIdentityProviderConfigRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<OidcIdentityProviderConfigRequest>;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c2, 5);
export interface AssociateIdentityProviderConfigRequest {
  clusterName: string;
  oidc: OidcIdentityProviderConfigRequest;
  tags?: { [key: string]: string | undefined };
  clientRequestToken?: string;
}
const AssociateIdentityProviderConfigRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<AssociateIdentityProviderConfigRequest>;
export interface AssociateIdentityProviderConfigResponse {
  update?: Update;
  tags?: { [key: string]: string | undefined };
}
const AssociateIdentityProviderConfigResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<AssociateIdentityProviderConfigResponse>;
export interface CancelUpdateRequest {
  name: string;
  updateId: string;
  clientRequestToken?: string;
}
const CancelUpdateRequest = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<CancelUpdateRequest>;
export interface CancelUpdateResponse {
  update?: Update;
}
const CancelUpdateResponse = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<CancelUpdateResponse>;
export interface CreateAccessEntryRequest {
  clusterName: string;
  principalArn: string;
  kubernetesGroups?: string[];
  tags?: { [key: string]: string | undefined };
  clientRequestToken?: string;
  username?: string;
  type?: string;
}
const CreateAccessEntryRequest = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<CreateAccessEntryRequest>;
export interface AccessEntry {
  clusterName?: string;
  principalArn?: string;
  kubernetesGroups?: string[];
  accessEntryArn?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  tags?: { [key: string]: string | undefined };
  username?: string;
  type?: string;
}
const AccessEntry = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<AccessEntry>;
export interface CreateAccessEntryResponse {
  accessEntry?: AccessEntry;
}
const CreateAccessEntryResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateAccessEntryResponse>;
export type ClusterName = string;
export type RoleArn = string;
export type ResolveConflicts = "OVERWRITE" | "NONE" | "PRESERVE" | (string & {});
const ResolveConflicts = S.String;

export interface AddonPodIdentityAssociations {
  serviceAccount: string;
  roleArn: string;
}
const AddonPodIdentityAssociations = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<AddonPodIdentityAssociations>;
export type AddonPodIdentityAssociationsList = AddonPodIdentityAssociations[];
const AddonPodIdentityAssociationsList = /*@__PURE__*/ __L.at(__c3, 6);
export type Namespace = string;
export interface AddonNamespaceConfigRequest {
  namespace?: string;
}
const AddonNamespaceConfigRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<AddonNamespaceConfigRequest>;
export interface CreateAddonRequest {
  clusterName: string;
  addonName: string;
  addonVersion?: string;
  serviceAccountRoleArn?: string;
  resolveConflicts?: ResolveConflicts;
  clientRequestToken?: string;
  tags?: { [key: string]: string | undefined };
  configurationValues?: string;
  podIdentityAssociations?: AddonPodIdentityAssociations[];
  namespaceConfig?: AddonNamespaceConfigRequest;
}
const CreateAddonRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<CreateAddonRequest>;
export type AddonStatus =
  | "CREATING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "UPDATING"
  | "DELETING"
  | "DELETE_FAILED"
  | "DEGRADED"
  | "UPDATE_FAILED"
  | (string & {});
const AddonStatus = S.String;

export type AddonIssueCode =
  | "AccessDenied"
  | "InternalFailure"
  | "ClusterUnreachable"
  | "InsufficientNumberOfReplicas"
  | "ConfigurationConflict"
  | "AdmissionRequestDenied"
  | "UnsupportedAddonModification"
  | "K8sResourceNotFound"
  | "AddonSubscriptionNeeded"
  | "AddonPermissionFailure"
  | (string & {});
const AddonIssueCode = S.String;

export interface AddonIssue {
  code?: AddonIssueCode;
  message?: string;
  resourceIds?: string[];
}
const AddonIssue = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<AddonIssue>;
export type AddonIssueList = AddonIssue[];
const AddonIssueList = /*@__PURE__*/ __L.at(__c4, 2);
export interface AddonHealth {
  issues?: AddonIssue[];
}
const AddonHealth = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<AddonHealth>;
export interface MarketplaceInformation {
  productId?: string;
  productUrl?: string;
}
const MarketplaceInformation = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<MarketplaceInformation>;
export interface AddonNamespaceConfigResponse {
  namespace?: string;
}
const AddonNamespaceConfigResponse =
  AddonNamespaceConfigRequest as any as S.Schema<AddonNamespaceConfigResponse>;
export interface Addon {
  addonName?: string;
  clusterName?: string;
  status?: AddonStatus;
  addonVersion?: string;
  health?: AddonHealth;
  addonArn?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  serviceAccountRoleArn?: string;
  tags?: { [key: string]: string | undefined };
  publisher?: string;
  owner?: string;
  marketplaceInformation?: MarketplaceInformation;
  configurationValues?: string;
  podIdentityAssociations?: string[];
  namespaceConfig?: AddonNamespaceConfigResponse;
}
const Addon = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<Addon>;
export interface CreateAddonResponse {
  addon?: Addon;
}
const CreateAddonResponse = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<CreateAddonResponse>;
export type CapabilityType = "ACK" | "KRO" | "ARGOCD" | (string & {});
const CapabilityType = S.String;

export interface ArgoCdAwsIdcConfigRequest {
  idcInstanceArn: string;
  idcRegion?: string;
}
const ArgoCdAwsIdcConfigRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<ArgoCdAwsIdcConfigRequest>;
export type ArgoCdRole = "ADMIN" | "EDITOR" | "VIEWER" | (string & {});
const ArgoCdRole = S.String;

export type SsoIdentityType = "SSO_USER" | "SSO_GROUP" | (string & {});
const SsoIdentityType = S.String;

export interface SsoIdentity {
  id: string;
  type: SsoIdentityType;
}
const SsoIdentity = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<SsoIdentity>;
export type SsoIdentityList = SsoIdentity[];
const SsoIdentityList = /*@__PURE__*/ __L.at(__c5, 1);
export interface ArgoCdRoleMapping {
  role: ArgoCdRole;
  identities: SsoIdentity[];
}
const ArgoCdRoleMapping = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<ArgoCdRoleMapping>;
export type ArgoCdRoleMappingList = ArgoCdRoleMapping[];
const ArgoCdRoleMappingList = /*@__PURE__*/ __L.at(__c5, 3);
export interface ArgoCdNetworkAccessConfigRequest {
  vpceIds?: string[];
}
const ArgoCdNetworkAccessConfigRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ArgoCdNetworkAccessConfigRequest>;
export type ArgoCdEndpointPrefix = string;
export interface ArgoCdConfigRequest {
  namespace?: string;
  awsIdc: ArgoCdAwsIdcConfigRequest;
  rbacRoleMappings?: ArgoCdRoleMapping[];
  networkAccess?: ArgoCdNetworkAccessConfigRequest;
  endpointPrefix?: string;
}
const ArgoCdConfigRequest = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ArgoCdConfigRequest>;
export interface CapabilityConfigurationRequest {
  argoCd?: ArgoCdConfigRequest;
}
const CapabilityConfigurationRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CapabilityConfigurationRequest>;
export type CapabilityDeletePropagationPolicy = "RETAIN" | (string & {});
const CapabilityDeletePropagationPolicy = S.String;

export interface CreateCapabilityRequest {
  capabilityName: string;
  clusterName: string;
  clientRequestToken?: string;
  type: CapabilityType;
  roleArn: string;
  configuration?: CapabilityConfigurationRequest;
  tags?: { [key: string]: string | undefined };
  deletePropagationPolicy: CapabilityDeletePropagationPolicy;
}
const CreateCapabilityRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateCapabilityRequest>;
export type CapabilityStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "UPDATING"
  | "DELETING"
  | "DELETE_FAILED"
  | "ACTIVE"
  | "DEGRADED"
  | (string & {});
const CapabilityStatus = S.String;

export interface ArgoCdAwsIdcConfigResponse {
  idcInstanceArn?: string;
  idcRegion?: string;
  idcManagedApplicationArn?: string;
}
const ArgoCdAwsIdcConfigResponse = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<ArgoCdAwsIdcConfigResponse>;
export interface ArgoCdNetworkAccessConfigResponse {
  vpceIds?: string[];
}
const ArgoCdNetworkAccessConfigResponse =
  ArgoCdNetworkAccessConfigRequest as any as S.Schema<ArgoCdNetworkAccessConfigResponse>;
export interface ArgoCdConfigResponse {
  namespace?: string;
  awsIdc?: ArgoCdAwsIdcConfigResponse;
  rbacRoleMappings?: ArgoCdRoleMapping[];
  networkAccess?: ArgoCdNetworkAccessConfigResponse;
  serverUrl?: string;
  endpointPrefix?: string;
}
const ArgoCdConfigResponse = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<ArgoCdConfigResponse>;
export interface CapabilityConfigurationResponse {
  argoCd?: ArgoCdConfigResponse;
}
const CapabilityConfigurationResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<CapabilityConfigurationResponse>;
export type CapabilityIssueCode = "AccessDenied" | "ClusterUnreachable" | (string & {});
const CapabilityIssueCode = S.String;

export interface CapabilityIssue {
  code?: CapabilityIssueCode;
  message?: string;
}
const CapabilityIssue = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<CapabilityIssue>;
export type CapabilityIssueList = CapabilityIssue[];
const CapabilityIssueList = /*@__PURE__*/ __L.at(__c6, 4);
export interface CapabilityHealth {
  issues?: CapabilityIssue[];
}
const CapabilityHealth = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<CapabilityHealth>;
export interface Capability {
  capabilityName?: string;
  arn?: string;
  clusterName?: string;
  type?: CapabilityType;
  roleArn?: string;
  status?: CapabilityStatus;
  version?: string;
  configuration?: CapabilityConfigurationResponse;
  tags?: { [key: string]: string | undefined };
  health?: CapabilityHealth;
  createdAt?: Date;
  modifiedAt?: Date;
  deletePropagationPolicy?: CapabilityDeletePropagationPolicy;
}
const Capability = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<Capability>;
export interface CreateCapabilityResponse {
  capability?: Capability;
}
const CreateCapabilityResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<CreateCapabilityResponse>;
export interface CreateCertificateAuthorityRequest {
  clusterName: string;
  clientRequestToken?: string;
}
const CreateCertificateAuthorityRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<CreateCertificateAuthorityRequest>;
export interface CreateCertificateAuthorityResponse {
  update?: Update;
  certificateAuthority?: CertificateAuthoritySummary;
}
const CreateCertificateAuthorityResponse =
  ActivateCertificateAuthorityResponse as any as S.Schema<CreateCertificateAuthorityResponse>;
export type BoxedBoolean = boolean;
export type ControlPlaneEgressModeType =
  | "AWS_MANAGED"
  | "CUSTOMER_ROUTED"
  | "CUSTOMER_ISOLATED"
  | (string & {});
const ControlPlaneEgressModeType = S.String;

export interface VpcConfigRequest {
  subnetIds?: string[];
  securityGroupIds?: string[];
  endpointPublicAccess?: boolean;
  endpointPrivateAccess?: boolean;
  publicAccessCidrs?: string[];
  controlPlaneEgressMode?: ControlPlaneEgressModeType;
}
const VpcConfigRequest = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<VpcConfigRequest>;
export type IpFamily = "ipv4" | "ipv6" | (string & {});
const IpFamily = S.String;

export interface ElasticLoadBalancing {
  enabled?: boolean;
}
const ElasticLoadBalancing = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<ElasticLoadBalancing>;
export interface KubernetesNetworkConfigRequest {
  serviceIpv4Cidr?: string;
  ipFamily?: IpFamily;
  elasticLoadBalancing?: ElasticLoadBalancing;
}
const KubernetesNetworkConfigRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<KubernetesNetworkConfigRequest>;
export type LogType =
  | "api"
  | "audit"
  | "authenticator"
  | "controllerManager"
  | "scheduler"
  | (string & {});
const LogType = S.String;

export type LogTypes = LogType[];
const LogTypes = /*@__PURE__*/ __L.at(__c7, 4);
export interface LogSetup {
  types?: LogType[];
  enabled?: boolean;
}
const LogSetup = /*@__PURE__*/ __L.at(__c7, 5) as any as S.Schema<LogSetup>;
export type LogSetups = LogSetup[];
const LogSetups = /*@__PURE__*/ __L.at(__c7, 6);
export interface Logging {
  clusterLogging?: LogSetup[];
}
const Logging = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<Logging>;
export type SpreadLevel = "host" | "rack" | (string & {});
const SpreadLevel = S.String;

export interface ControlPlanePlacementRequest {
  groupName?: string;
  spreadLevel?: SpreadLevel;
}
const ControlPlanePlacementRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ControlPlanePlacementRequest>;
export interface EtcdPlacementRequest {
  spreadLevel?: SpreadLevel;
}
const EtcdPlacementRequest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<EtcdPlacementRequest>;
export interface OutpostConfigRequest {
  outpostArns: string[];
  controlPlaneInstanceType: string;
  controlPlanePlacement?: ControlPlanePlacementRequest;
  etcdInstanceType?: string;
  etcdPlacement?: EtcdPlacementRequest;
}
const OutpostConfigRequest = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<OutpostConfigRequest>;
export type AuthenticationMode = "API" | "API_AND_CONFIG_MAP" | "CONFIG_MAP" | (string & {});
const AuthenticationMode = S.String;

export interface CreateAccessConfigRequest {
  bootstrapClusterCreatorAdminPermissions?: boolean;
  authenticationMode?: AuthenticationMode;
}
const CreateAccessConfigRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<CreateAccessConfigRequest>;
export type SupportType = "STANDARD" | "EXTENDED" | (string & {});
const SupportType = S.String;

export interface UpgradePolicyRequest {
  supportType?: SupportType;
}
const UpgradePolicyRequest = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<UpgradePolicyRequest>;
export interface ZonalShiftConfigRequest {
  enabled?: boolean;
}
const ZonalShiftConfigRequest = ElasticLoadBalancing as any as S.Schema<ZonalShiftConfigRequest>;
export interface RemoteNodeNetwork {
  cidrs?: string[];
}
const RemoteNodeNetwork = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<RemoteNodeNetwork>;
export type RemoteNodeNetworkList = RemoteNodeNetwork[];
const RemoteNodeNetworkList = /*@__PURE__*/ __L.at(__c8, 6);
export interface RemotePodNetwork {
  cidrs?: string[];
}
export type RemotePodNetworkList = RemotePodNetwork[];
const RemotePodNetworkList = RemoteNodeNetworkList as any as S.Schema<RemotePodNetworkList>;
export interface RemoteNetworkConfigRequest {
  remoteNodeNetworks?: RemoteNodeNetwork[];
  remotePodNetworks?: RemotePodNetwork[];
}
const RemoteNetworkConfigRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<RemoteNetworkConfigRequest>;
export interface ComputeConfigRequest {
  enabled?: boolean;
  nodePools?: string[];
  nodeRoleArn?: string;
}
const ComputeConfigRequest = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<ComputeConfigRequest>;
export interface BlockStorage {
  enabled?: boolean;
}
const BlockStorage = ElasticLoadBalancing as any as S.Schema<BlockStorage>;
export interface StorageConfigRequest {
  blockStorage?: BlockStorage;
}
const StorageConfigRequest = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<StorageConfigRequest>;
export type ProvisionedControlPlaneTier =
  | "standard"
  | "tier-xl"
  | "tier-2xl"
  | "tier-4xl"
  | "tier-8xl"
  | (string & {});
const ProvisionedControlPlaneTier = S.String;

export interface ControlPlaneScalingConfig {
  tier?: ProvisionedControlPlaneTier;
}
const ControlPlaneScalingConfig = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<ControlPlaneScalingConfig>;
export interface ServiceNodePortRange {
  minPort?: number;
  maxPort?: number;
}
const ServiceNodePortRange = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<ServiceNodePortRange>;
export interface KubeApiServerConfigRequest {
  eventTtl?: string;
  serviceNodePortRange?: ServiceNodePortRange;
}
const KubeApiServerConfigRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<KubeApiServerConfigRequest>;
export type ScoringStrategyType = "LeastAllocated" | "MostAllocated" | (string & {});
const ScoringStrategyType = S.String;

export type ResourceWeightName = string;
export type ResourceWeightValue = number;
export interface ResourceWeight {
  name?: string;
  weight?: number;
}
const ResourceWeight = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<ResourceWeight>;
export type ResourceWeightList = ResourceWeight[];
const ResourceWeightList = /*@__PURE__*/ __L.at(__c9, 6);
export interface ScoringStrategy {
  type?: ScoringStrategyType;
  resources?: ResourceWeight[];
}
const ScoringStrategy = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<ScoringStrategy>;
export interface NodeResourcesFitConfig {
  scoringStrategy?: ScoringStrategy;
}
const NodeResourcesFitConfig = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<NodeResourcesFitConfig>;
export interface KubeSchedulerConfigRequest {
  nodeResourcesFit?: NodeResourcesFitConfig;
}
const KubeSchedulerConfigRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<KubeSchedulerConfigRequest>;
export type TerminatedPodGcThresholdValue = number;
export interface PodGcControllerConfigRequest {
  terminatedPodGcThreshold?: number;
}
const PodGcControllerConfigRequest = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<PodGcControllerConfigRequest>;
export interface HorizontalPodAutoscalerControllerConfigRequest {
  horizontalPodAutoscalerSyncPeriod?: string;
}
const HorizontalPodAutoscalerControllerConfigRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<HorizontalPodAutoscalerControllerConfigRequest>;
export interface KubeControllerManagerConfigRequest {
  podGcControllerConfig?: PodGcControllerConfigRequest;
  horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerConfigRequest;
}
const KubeControllerManagerConfigRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<KubeControllerManagerConfigRequest>;
export interface CreateClusterRequest {
  name: string;
  version?: string;
  roleArn: string;
  resourcesVpcConfig: VpcConfigRequest;
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;
  logging?: Logging;
  clientRequestToken?: string;
  tags?: { [key: string]: string | undefined };
  encryptionConfig?: EncryptionConfig[];
  outpostConfig?: OutpostConfigRequest;
  accessConfig?: CreateAccessConfigRequest;
  bootstrapSelfManagedAddons?: boolean;
  upgradePolicy?: UpgradePolicyRequest;
  zonalShiftConfig?: ZonalShiftConfigRequest;
  remoteNetworkConfig?: RemoteNetworkConfigRequest;
  computeConfig?: ComputeConfigRequest;
  storageConfig?: StorageConfigRequest;
  deletionProtection?: boolean;
  controlPlaneScalingConfig?: ControlPlaneScalingConfig;
  kubeApiServerConfig?: KubeApiServerConfigRequest;
  kubeSchedulerConfig?: KubeSchedulerConfigRequest;
  kubeControllerManagerConfig?: KubeControllerManagerConfigRequest;
}
const CreateClusterRequest = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<CreateClusterRequest>;
export interface VpcConfigResponse {
  subnetIds?: string[];
  securityGroupIds?: string[];
  clusterSecurityGroupId?: string;
  vpcId?: string;
  endpointPublicAccess?: boolean;
  endpointPrivateAccess?: boolean;
  publicAccessCidrs?: string[];
  controlPlaneEgressMode?: ControlPlaneEgressModeType;
}
const VpcConfigResponse = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<VpcConfigResponse>;
export interface KubernetesNetworkConfigResponse {
  serviceIpv4Cidr?: string;
  serviceIpv6Cidr?: string;
  ipFamily?: IpFamily;
  elasticLoadBalancing?: ElasticLoadBalancing;
}
const KubernetesNetworkConfigResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<KubernetesNetworkConfigResponse>;
export interface OIDC {
  issuer?: string;
}
const OIDC = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<OIDC>;
export interface Identity {
  oidc?: OIDC;
}
const Identity = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<Identity>;
export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | "UPDATING"
  | "PENDING"
  | (string & {});
const ClusterStatus = S.String;

export interface ActiveCertificateAuthority {
  id?: string;
  activatedBy?: CertificateAuthorityActivatedBy;
}
const ActiveCertificateAuthority = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ActiveCertificateAuthority>;
export interface Certificate {
  data?: string;
  active?: ActiveCertificateAuthority;
}
const Certificate = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<Certificate>;
export interface ConnectorConfigResponse {
  activationId?: string;
  activationCode?: string;
  activationExpiry?: Date;
  provider?: string;
  roleArn?: string;
}
const ConnectorConfigResponse = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<ConnectorConfigResponse>;
export type ClusterIssueCode =
  | "AccessDenied"
  | "ClusterUnreachable"
  | "ConfigurationConflict"
  | "InternalFailure"
  | "ResourceLimitExceeded"
  | "ResourceNotFound"
  | "IamRoleNotFound"
  | "VpcNotFound"
  | "InsufficientFreeAddresses"
  | "Ec2ServiceNotSubscribed"
  | "Ec2SubnetNotFound"
  | "Ec2SecurityGroupNotFound"
  | "KmsGrantRevoked"
  | "KmsKeyNotFound"
  | "KmsKeyMarkedForDeletion"
  | "KmsKeyDisabled"
  | "StsRegionalEndpointDisabled"
  | "UnsupportedVersion"
  | "Other"
  | (string & {});
export interface ClusterIssue {
  code?: ClusterIssueCode;
  message?: string;
  resourceIds?: string[];
}
export type ClusterIssueList = ClusterIssue[];
export interface ClusterHealth {
  issues?: ClusterIssue[];
}
const ClusterHealth = AddonHealth as any as S.Schema<ClusterHealth>;
export interface ControlPlanePlacementResponse {
  groupName?: string;
  spreadLevel?: SpreadLevel;
}
export interface EtcdPlacementResponse {
  spreadLevel?: SpreadLevel;
}
export interface OutpostConfigResponse {
  outpostArns: string[];
  controlPlaneInstanceType: string;
  controlPlanePlacement?: ControlPlanePlacementResponse;
  etcdInstanceType?: string;
  etcdPlacement?: EtcdPlacementResponse;
}
const OutpostConfigResponse = OutpostConfigRequest as any as S.Schema<OutpostConfigResponse>;
export interface AccessConfigResponse {
  bootstrapClusterCreatorAdminPermissions?: boolean;
  authenticationMode?: AuthenticationMode;
}
const AccessConfigResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<AccessConfigResponse>;
export interface UpgradePolicyResponse {
  supportType?: SupportType;
}
const UpgradePolicyResponse = UpgradePolicyRequest as any as S.Schema<UpgradePolicyResponse>;
export interface ZonalShiftConfigResponse {
  enabled?: boolean;
}
const ZonalShiftConfigResponse = ElasticLoadBalancing as any as S.Schema<ZonalShiftConfigResponse>;
export interface RemoteNetworkConfigResponse {
  remoteNodeNetworks?: RemoteNodeNetwork[];
  remotePodNetworks?: RemotePodNetwork[];
}
const RemoteNetworkConfigResponse =
  RemoteNetworkConfigRequest as any as S.Schema<RemoteNetworkConfigResponse>;
export interface ComputeConfigResponse {
  enabled?: boolean;
  nodePools?: string[];
  nodeRoleArn?: string;
}
const ComputeConfigResponse = ComputeConfigRequest as any as S.Schema<ComputeConfigResponse>;
export interface StorageConfigResponse {
  blockStorage?: BlockStorage;
}
const StorageConfigResponse = StorageConfigRequest as any as S.Schema<StorageConfigResponse>;
export interface KubeApiServerConfigResponse {
  eventTtl?: string;
  serviceNodePortRange?: ServiceNodePortRange;
}
const KubeApiServerConfigResponse =
  KubeApiServerConfigRequest as any as S.Schema<KubeApiServerConfigResponse>;
export interface KubeSchedulerConfigResponse {
  nodeResourcesFit?: NodeResourcesFitConfig;
}
const KubeSchedulerConfigResponse =
  KubeSchedulerConfigRequest as any as S.Schema<KubeSchedulerConfigResponse>;
export interface PodGcControllerConfigResponse {
  terminatedPodGcThreshold?: number;
}
export interface HorizontalPodAutoscalerControllerConfigResponse {
  horizontalPodAutoscalerSyncPeriod?: string;
}
export interface KubeControllerManagerConfigResponse {
  podGcControllerConfig?: PodGcControllerConfigResponse;
  horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerConfigResponse;
}
const KubeControllerManagerConfigResponse =
  KubeControllerManagerConfigRequest as any as S.Schema<KubeControllerManagerConfigResponse>;
export interface Cluster {
  name?: string;
  arn?: string;
  createdAt?: Date;
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
  tags?: { [key: string]: string | undefined };
  encryptionConfig?: EncryptionConfig[];
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
  deletionProtection?: boolean;
  controlPlaneScalingConfig?: ControlPlaneScalingConfig;
  kubeApiServerConfig?: KubeApiServerConfigResponse;
  kubeSchedulerConfig?: KubeSchedulerConfigResponse;
  kubeControllerManagerConfig?: KubeControllerManagerConfigResponse;
}
const Cluster = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<Cluster>;
export interface CreateClusterResponse {
  cluster?: Cluster;
}
const CreateClusterResponse = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<CreateClusterResponse>;
export type EksAnywhereSubscriptionName = string;
export type EksAnywhereSubscriptionTermUnit = "MONTHS" | (string & {});
const EksAnywhereSubscriptionTermUnit = S.String;

export interface EksAnywhereSubscriptionTerm {
  duration?: number;
  unit?: EksAnywhereSubscriptionTermUnit;
}
const EksAnywhereSubscriptionTerm = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<EksAnywhereSubscriptionTerm>;
export type EksAnywhereSubscriptionLicenseType = "Cluster" | (string & {});
const EksAnywhereSubscriptionLicenseType = S.String;

export interface CreateEksAnywhereSubscriptionRequest {
  name: string;
  term: EksAnywhereSubscriptionTerm;
  licenseQuantity?: number;
  licenseType?: EksAnywhereSubscriptionLicenseType;
  autoRenew?: boolean;
  clientRequestToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateEksAnywhereSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<CreateEksAnywhereSubscriptionRequest>;
export interface License {
  id?: string;
  token?: string;
}
const License = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<License>;
export type LicenseList = License[];
const LicenseList = /*@__PURE__*/ __L.at(__c12, 3);
export interface EksAnywhereSubscription {
  id?: string;
  arn?: string;
  createdAt?: Date;
  effectiveDate?: Date;
  expirationDate?: Date;
  licenseQuantity?: number;
  licenseType?: EksAnywhereSubscriptionLicenseType;
  term?: EksAnywhereSubscriptionTerm;
  status?: string;
  autoRenew?: boolean;
  licenseArns?: string[];
  licenses?: License[];
  tags?: { [key: string]: string | undefined };
}
const EksAnywhereSubscription = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<EksAnywhereSubscription>;
export interface CreateEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
const CreateEksAnywhereSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<CreateEksAnywhereSubscriptionResponse>;
export type FargateProfileLabel = { [key: string]: string | undefined };
const FargateProfileLabel = RequiredClaimsMap as any as S.Schema<FargateProfileLabel>;
export interface FargateProfileSelector {
  namespace?: string;
  labels?: { [key: string]: string | undefined };
}
const FargateProfileSelector = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<FargateProfileSelector>;
export type FargateProfileSelectors = FargateProfileSelector[];
const FargateProfileSelectors = /*@__PURE__*/ __L.at(__c12, 7);
export interface CreateFargateProfileRequest {
  fargateProfileName: string;
  clusterName: string;
  podExecutionRoleArn: string;
  subnets?: string[];
  selectors?: FargateProfileSelector[];
  clientRequestToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateFargateProfileRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<CreateFargateProfileRequest>;
export type FargateProfileStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
const FargateProfileStatus = S.String;

export type FargateProfileIssueCode =
  | "PodExecutionRoleAlreadyInUse"
  | "AccessDenied"
  | "ClusterUnreachable"
  | "InternalFailure"
  | (string & {});
export interface FargateProfileIssue {
  code?: FargateProfileIssueCode;
  message?: string;
  resourceIds?: string[];
}
export type FargateProfileIssueList = FargateProfileIssue[];
export interface FargateProfileHealth {
  issues?: FargateProfileIssue[];
}
const FargateProfileHealth = AddonHealth as any as S.Schema<FargateProfileHealth>;
export interface FargateProfile {
  fargateProfileName?: string;
  fargateProfileArn?: string;
  clusterName?: string;
  createdAt?: Date;
  podExecutionRoleArn?: string;
  subnets?: string[];
  selectors?: FargateProfileSelector[];
  status?: FargateProfileStatus;
  tags?: { [key: string]: string | undefined };
  health?: FargateProfileHealth;
}
const FargateProfile = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<FargateProfile>;
export interface CreateFargateProfileResponse {
  fargateProfile?: FargateProfile;
}
const CreateFargateProfileResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<CreateFargateProfileResponse>;
export type ZeroCapacity = number;
export type Capacity = number;
export interface NodegroupScalingConfig {
  minSize?: number;
  maxSize?: number;
  desiredSize?: number;
}
const NodegroupScalingConfig = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<NodegroupScalingConfig>;
export type BoxedInteger = number;
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
  | "BOTTLEROCKET_ARM_64_NVIDIA_FIPS"
  | "BOTTLEROCKET_x86_64_NVIDIA_FIPS"
  | "WINDOWS_CORE_2019_x86_64"
  | "WINDOWS_FULL_2019_x86_64"
  | "WINDOWS_CORE_2022_x86_64"
  | "WINDOWS_FULL_2022_x86_64"
  | "WINDOWS_CORE_2025_x86_64"
  | "WINDOWS_FULL_2025_x86_64"
  | "AL2023_x86_64_STANDARD"
  | "AL2023_ARM_64_STANDARD"
  | "AL2023_x86_64_NEURON"
  | "AL2023_x86_64_NVIDIA"
  | "AL2023_ARM_64_NVIDIA"
  | (string & {});
const AMITypes = S.String;

export interface RemoteAccessConfig {
  ec2SshKey?: string;
  sourceSecurityGroups?: string[];
}
const RemoteAccessConfig = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<RemoteAccessConfig>;
export type LabelKey = string;
export type LabelValue = string;
export type LabelsMap = { [key: string]: string | undefined };
const LabelsMap = TagMap as any as S.Schema<LabelsMap>;
export type TaintKey = string;
export type TaintValue = string;
export type TaintEffect = "NO_SCHEDULE" | "NO_EXECUTE" | "PREFER_NO_SCHEDULE" | (string & {});
const TaintEffect = S.String;

export interface Taint {
  key?: string;
  value?: string;
  effect?: TaintEffect;
}
const Taint = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<Taint>;
export type TaintsList = Taint[];
const TaintsList = /*@__PURE__*/ __L.at(__c13, 6);
export interface LaunchTemplateSpecification {
  name?: string;
  version?: string;
  id?: string;
}
const LaunchTemplateSpecification = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<LaunchTemplateSpecification>;
export type NonZeroInteger = number;
export type PercentCapacity = number;
export type NodegroupUpdateStrategies = "DEFAULT" | "MINIMAL" | (string & {});
const NodegroupUpdateStrategies = S.String;

export interface NodegroupUpdateConfig {
  maxUnavailable?: number;
  maxUnavailablePercentage?: number;
  updateStrategy?: NodegroupUpdateStrategies;
}
const NodegroupUpdateConfig = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<NodegroupUpdateConfig>;
export type RepairAction = "Replace" | "Reboot" | "NoAction" | (string & {});
const RepairAction = S.String;

export interface NodeRepairConfigOverrides {
  nodeMonitoringCondition?: string;
  nodeUnhealthyReason?: string;
  minRepairWaitTimeMins?: number;
  repairAction?: RepairAction;
}
const NodeRepairConfigOverrides = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<NodeRepairConfigOverrides>;
export type NodeRepairConfigOverridesList = NodeRepairConfigOverrides[];
const NodeRepairConfigOverridesList = /*@__PURE__*/ __L.at(__c14, 2);
export interface NodeRepairConfig {
  enabled?: boolean;
  maxUnhealthyNodeThresholdCount?: number;
  maxUnhealthyNodeThresholdPercentage?: number;
  maxParallelNodesRepairedCount?: number;
  maxParallelNodesRepairedPercentage?: number;
  nodeRepairConfigOverrides?: NodeRepairConfigOverrides[];
}
const NodeRepairConfig = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<NodeRepairConfig>;
export type CapacityTypes = "ON_DEMAND" | "SPOT" | "CAPACITY_BLOCK" | (string & {});
const CapacityTypes = S.String;

export type WarmPoolState = "STOPPED" | "RUNNING" | "HIBERNATED" | (string & {});
const WarmPoolState = S.String;

export interface WarmPoolConfig {
  enabled?: boolean;
  minSize?: number;
  maxGroupPreparedCapacity?: number;
  poolState?: WarmPoolState;
  reuseOnScaleIn?: boolean;
}
const WarmPoolConfig = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<WarmPoolConfig>;
export interface CreateNodegroupRequest {
  clusterName: string;
  nodegroupName: string;
  scalingConfig?: NodegroupScalingConfig;
  diskSize?: number;
  subnets: string[];
  instanceTypes?: string[];
  amiType?: AMITypes;
  remoteAccess?: RemoteAccessConfig;
  nodeRole: string;
  labels?: { [key: string]: string | undefined };
  taints?: Taint[];
  tags?: { [key: string]: string | undefined };
  clientRequestToken?: string;
  launchTemplate?: LaunchTemplateSpecification;
  updateConfig?: NodegroupUpdateConfig;
  nodeRepairConfig?: NodeRepairConfig;
  capacityType?: CapacityTypes;
  version?: string;
  releaseVersion?: string;
  warmPoolConfig?: WarmPoolConfig;
}
const CreateNodegroupRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<CreateNodegroupRequest>;
export type NodegroupStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "DEGRADED"
  | (string & {});
const NodegroupStatus = S.String;

export interface AutoScalingGroup {
  name?: string;
}
const AutoScalingGroup = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<AutoScalingGroup>;
export type AutoScalingGroupList = AutoScalingGroup[];
const AutoScalingGroupList = /*@__PURE__*/ __L.at(__c14, 7);
export interface NodegroupResources {
  autoScalingGroups?: AutoScalingGroup[];
  remoteAccessSecurityGroup?: string;
}
const NodegroupResources = /*@__PURE__*/ __L.at(__c15, 0) as any as S.Schema<NodegroupResources>;
export type NodegroupIssueCode =
  | "AutoScalingGroupNotFound"
  | "AutoScalingGroupInvalidConfiguration"
  | "Ec2SecurityGroupNotFound"
  | "Ec2SecurityGroupDeletionFailure"
  | "Ec2LaunchTemplateNotFound"
  | "Ec2LaunchTemplateVersionMismatch"
  | "Ec2SubnetNotFound"
  | "Ec2SubnetInvalidConfiguration"
  | "IamInstanceProfileNotFound"
  | "Ec2SubnetMissingIpv6Assignment"
  | "IamLimitExceeded"
  | "IamNodeRoleNotFound"
  | "NodeCreationFailure"
  | "AsgInstanceLaunchFailures"
  | "InstanceLimitExceeded"
  | "InsufficientFreeAddresses"
  | "AccessDenied"
  | "InternalFailure"
  | "ClusterUnreachable"
  | "AmiIdNotFound"
  | "AutoScalingGroupOptInRequired"
  | "AutoScalingGroupRateLimitExceeded"
  | "Ec2LaunchTemplateDeletionFailure"
  | "Ec2LaunchTemplateInvalidConfiguration"
  | "Ec2LaunchTemplateMaxLimitExceeded"
  | "Ec2SubnetListTooLong"
  | "IamThrottling"
  | "NodeTerminationFailure"
  | "PodEvictionFailure"
  | "SourceEc2LaunchTemplateNotFound"
  | "LimitExceeded"
  | "Unknown"
  | "AutoScalingGroupInstanceRefreshActive"
  | "KubernetesLabelInvalid"
  | "Ec2LaunchTemplateVersionMaxLimitExceeded"
  | "Ec2InstanceTypeDoesNotExist"
  | (string & {});
export interface Issue {
  code?: NodegroupIssueCode;
  message?: string;
  resourceIds?: string[];
}
export type IssueList = Issue[];
export interface NodegroupHealth {
  issues?: Issue[];
}
const NodegroupHealth = AddonHealth as any as S.Schema<NodegroupHealth>;
export interface Nodegroup {
  nodegroupName?: string;
  nodegroupArn?: string;
  clusterName?: string;
  version?: string;
  releaseVersion?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  status?: NodegroupStatus;
  capacityType?: CapacityTypes;
  scalingConfig?: NodegroupScalingConfig;
  instanceTypes?: string[];
  subnets?: string[];
  remoteAccess?: RemoteAccessConfig;
  amiType?: AMITypes;
  nodeRole?: string;
  labels?: { [key: string]: string | undefined };
  taints?: Taint[];
  resources?: NodegroupResources;
  diskSize?: number;
  health?: NodegroupHealth;
  updateConfig?: NodegroupUpdateConfig;
  nodeRepairConfig?: NodeRepairConfig;
  launchTemplate?: LaunchTemplateSpecification;
  tags?: { [key: string]: string | undefined };
  warmPoolConfig?: WarmPoolConfig;
}
const Nodegroup = /*@__PURE__*/ __L.at(__c15, 1) as any as S.Schema<Nodegroup>;
export interface CreateNodegroupResponse {
  nodegroup?: Nodegroup;
}
const CreateNodegroupResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<CreateNodegroupResponse>;
export interface CreatePodIdentityAssociationRequest {
  clusterName: string;
  namespace: string;
  serviceAccount: string;
  roleArn: string;
  clientRequestToken?: string;
  tags?: { [key: string]: string | undefined };
  disableSessionTags?: boolean;
  targetRoleArn?: string;
  policy?: string;
}
const CreatePodIdentityAssociationRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<CreatePodIdentityAssociationRequest>;
export interface PodIdentityAssociation {
  clusterName?: string;
  namespace?: string;
  serviceAccount?: string;
  roleArn?: string;
  associationArn?: string;
  associationId?: string;
  tags?: { [key: string]: string | undefined };
  createdAt?: Date;
  modifiedAt?: Date;
  ownerArn?: string;
  disableSessionTags?: boolean;
  targetRoleArn?: string;
  externalId?: string;
  policy?: string;
}
const PodIdentityAssociation = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<PodIdentityAssociation>;
export interface CreatePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
const CreatePodIdentityAssociationResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<CreatePodIdentityAssociationResponse>;
export interface DeleteAccessEntryRequest {
  clusterName: string;
  principalArn: string;
}
const DeleteAccessEntryRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<DeleteAccessEntryRequest>;
export interface DeleteAccessEntryResponse {}
const DeleteAccessEntryResponse = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<DeleteAccessEntryResponse>;
export interface DeleteAddonRequest {
  clusterName: string;
  addonName: string;
  preserve?: boolean;
}
const DeleteAddonRequest = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<DeleteAddonRequest>;
export interface DeleteAddonResponse {
  addon?: Addon;
}
const DeleteAddonResponse = CreateAddonResponse as any as S.Schema<DeleteAddonResponse>;
export interface DeleteCapabilityRequest {
  clusterName: string;
  capabilityName: string;
}
const DeleteCapabilityRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<DeleteCapabilityRequest>;
export interface DeleteCapabilityResponse {
  capability?: Capability;
}
const DeleteCapabilityResponse =
  CreateCapabilityResponse as any as S.Schema<DeleteCapabilityResponse>;
export interface DeleteCertificateAuthorityRequest {
  clusterName: string;
  certificateAuthorityId: string;
  clientRequestToken?: string;
}
const DeleteCertificateAuthorityRequest = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<DeleteCertificateAuthorityRequest>;
export interface DeleteCertificateAuthorityResponse {
  update?: Update;
  certificateAuthority?: CertificateAuthoritySummary;
}
const DeleteCertificateAuthorityResponse =
  ActivateCertificateAuthorityResponse as any as S.Schema<DeleteCertificateAuthorityResponse>;
export interface DeleteClusterRequest {
  name: string;
}
const DeleteClusterRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<DeleteClusterRequest>;
export interface DeleteClusterResponse {
  cluster?: Cluster;
}
const DeleteClusterResponse = CreateClusterResponse as any as S.Schema<DeleteClusterResponse>;
export interface DeleteEksAnywhereSubscriptionRequest {
  id: string;
}
const DeleteEksAnywhereSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<DeleteEksAnywhereSubscriptionRequest>;
export interface DeleteEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
const DeleteEksAnywhereSubscriptionResponse =
  CreateEksAnywhereSubscriptionResponse as any as S.Schema<DeleteEksAnywhereSubscriptionResponse>;
export interface DeleteFargateProfileRequest {
  clusterName: string;
  fargateProfileName: string;
}
const DeleteFargateProfileRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<DeleteFargateProfileRequest>;
export interface DeleteFargateProfileResponse {
  fargateProfile?: FargateProfile;
}
const DeleteFargateProfileResponse =
  CreateFargateProfileResponse as any as S.Schema<DeleteFargateProfileResponse>;
export interface DeleteNodegroupRequest {
  clusterName: string;
  nodegroupName: string;
}
const DeleteNodegroupRequest = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<DeleteNodegroupRequest>;
export interface DeleteNodegroupResponse {
  nodegroup?: Nodegroup;
}
const DeleteNodegroupResponse = CreateNodegroupResponse as any as S.Schema<DeleteNodegroupResponse>;
export interface DeletePodIdentityAssociationRequest {
  clusterName: string;
  associationId: string;
}
const DeletePodIdentityAssociationRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<DeletePodIdentityAssociationRequest>;
export interface DeletePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
const DeletePodIdentityAssociationResponse =
  CreatePodIdentityAssociationResponse as any as S.Schema<DeletePodIdentityAssociationResponse>;
export interface DeregisterClusterRequest {
  name: string;
}
const DeregisterClusterRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<DeregisterClusterRequest>;
export interface DeregisterClusterResponse {
  cluster?: Cluster;
}
const DeregisterClusterResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<DeregisterClusterResponse>;
export interface DescribeAccessEntryRequest {
  clusterName: string;
  principalArn: string;
}
const DescribeAccessEntryRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<DescribeAccessEntryRequest>;
export interface DescribeAccessEntryResponse {
  accessEntry?: AccessEntry;
}
const DescribeAccessEntryResponse =
  CreateAccessEntryResponse as any as S.Schema<DescribeAccessEntryResponse>;
export interface DescribeAddonRequest {
  clusterName: string;
  addonName: string;
}
const DescribeAddonRequest = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<DescribeAddonRequest>;
export interface DescribeAddonResponse {
  addon?: Addon;
}
const DescribeAddonResponse = CreateAddonResponse as any as S.Schema<DescribeAddonResponse>;
export interface DescribeAddonConfigurationRequest {
  addonName: string;
  addonVersion: string;
}
const DescribeAddonConfigurationRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<DescribeAddonConfigurationRequest>;
export interface AddonPodIdentityConfiguration {
  serviceAccount?: string;
  recommendedManagedPolicies?: string[];
}
const AddonPodIdentityConfiguration = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<AddonPodIdentityConfiguration>;
export type AddonPodIdentityConfigurationList = AddonPodIdentityConfiguration[];
const AddonPodIdentityConfigurationList = /*@__PURE__*/ __L.at(__c17, 6);
export interface DescribeAddonConfigurationResponse {
  addonName?: string;
  addonVersion?: string;
  configurationSchema?: string;
  podIdentityConfiguration?: AddonPodIdentityConfiguration[];
}
const DescribeAddonConfigurationResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<DescribeAddonConfigurationResponse>;
export type DescribeAddonVersionsRequestMaxResults = number;
export interface DescribeAddonVersionsRequest {
  kubernetesVersion?: string;
  maxResults?: number;
  nextToken?: string;
  addonName?: string;
  types?: string[];
  publishers?: string[];
  owners?: string[];
}
const DescribeAddonVersionsRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<DescribeAddonVersionsRequest>;
export interface Compatibility {
  clusterVersion?: string;
  platformVersions?: string[];
  defaultVersion?: boolean;
}
const Compatibility = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<Compatibility>;
export type Compatibilities = Compatibility[];
const Compatibilities = /*@__PURE__*/ __L.at(__c18, 2);
export interface AddonVersionInfo {
  addonVersion?: string;
  architecture?: string[];
  computeTypes?: string[];
  compatibilities?: Compatibility[];
  requiresConfiguration?: boolean;
  requiresIamPermissions?: boolean;
}
const AddonVersionInfo = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<AddonVersionInfo>;
export type AddonVersionInfoList = AddonVersionInfo[];
const AddonVersionInfoList = /*@__PURE__*/ __L.at(__c18, 4);
export interface AddonInfo {
  addonName?: string;
  type?: string;
  addonVersions?: AddonVersionInfo[];
  publisher?: string;
  owner?: string;
  marketplaceInformation?: MarketplaceInformation;
  defaultNamespace?: string;
}
const AddonInfo = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<AddonInfo>;
export type Addons = AddonInfo[];
const Addons = /*@__PURE__*/ __L.at(__c18, 6);
export interface DescribeAddonVersionsResponse {
  addons?: AddonInfo[];
  nextToken?: string;
}
const DescribeAddonVersionsResponse = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<DescribeAddonVersionsResponse>;
export interface DescribeCapabilityRequest {
  clusterName: string;
  capabilityName: string;
}
const DescribeCapabilityRequest = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<DescribeCapabilityRequest>;
export interface DescribeCapabilityResponse {
  capability?: Capability;
}
const DescribeCapabilityResponse = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<DescribeCapabilityResponse>;
export interface DescribeCertificateAuthorityRequest {
  clusterName: string;
  certificateAuthorityId: string;
}
const DescribeCertificateAuthorityRequest = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<DescribeCertificateAuthorityRequest>;
export interface CertificateAuthorityValidity {
  notBefore?: Date;
  notAfter?: Date;
}
const CertificateAuthorityValidity = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<CertificateAuthorityValidity>;
export interface CertificateAuthorityScheduledEvents {
  firstAutoActivation?: Date;
  finalAutoActivation?: Date;
}
const CertificateAuthorityScheduledEvents = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<CertificateAuthorityScheduledEvents>;
export interface CertificateAuthority {
  id?: string;
  createdAt?: Date;
  createdBy?: CertificateAuthorityCreatedBy;
  activatedAt?: Date;
  activatedBy?: CertificateAuthorityActivatedBy;
  signingStatus?: CertificateAuthoritySigningStatus;
  distributionStatus?: CertificateAuthorityDistributionStatus;
  validity?: CertificateAuthorityValidity;
  scheduledEvents?: CertificateAuthorityScheduledEvents;
  rollbackAvailable?: boolean;
  data?: string;
}
const CertificateAuthority = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<CertificateAuthority>;
export interface DescribeCertificateAuthorityResponse {
  certificateAuthority?: CertificateAuthority;
}
const DescribeCertificateAuthorityResponse = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<DescribeCertificateAuthorityResponse>;
export interface DescribeClusterRequest {
  name: string;
}
const DescribeClusterRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<DescribeClusterRequest>;
export interface DescribeClusterResponse {
  cluster?: Cluster;
}
const DescribeClusterResponse = CreateClusterResponse as any as S.Schema<DescribeClusterResponse>;
export type DescribeClusterVersionMaxResults = number;
export type ClusterVersionStatus =
  | "unsupported"
  | "standard-support"
  | "extended-support"
  | (string & {});
const ClusterVersionStatus = S.String;

export type VersionStatus = "UNSUPPORTED" | "STANDARD_SUPPORT" | "EXTENDED_SUPPORT" | (string & {});
const VersionStatus = S.String;

export interface DescribeClusterVersionsRequest {
  clusterType?: string;
  maxResults?: number;
  nextToken?: string;
  defaultOnly?: boolean;
  includeAll?: boolean;
  clusterVersions?: string[];
  status?: ClusterVersionStatus;
  versionStatus?: VersionStatus;
}
const DescribeClusterVersionsRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<DescribeClusterVersionsRequest>;
export interface DurationConstraints {
  min?: string;
  max?: string;
}
const DurationConstraints = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<DurationConstraints>;
export interface DurationParameterConfig {
  defaultValue?: string;
  constraints?: DurationConstraints;
}
const DurationParameterConfig = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<DurationParameterConfig>;
export interface IntegerRangeConstraint {
  min?: number;
  max?: number;
}
const IntegerRangeConstraint = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<IntegerRangeConstraint>;
export interface PortRangeConstraints {
  minPort?: IntegerRangeConstraint;
  maxPort?: IntegerRangeConstraint;
}
const PortRangeConstraints = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<PortRangeConstraints>;
export interface PortRangeParameterConfig {
  defaultValue?: ServiceNodePortRange;
  constraints?: PortRangeConstraints;
}
const PortRangeParameterConfig = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<PortRangeParameterConfig>;
export interface KubeApiServerVersionConfig {
  eventTtl?: DurationParameterConfig;
  serviceNodePortRange?: PortRangeParameterConfig;
}
const KubeApiServerVersionConfig = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<KubeApiServerVersionConfig>;
export type AllowedValuesList = string[];
const AllowedValuesList = StringList as any as S.Schema<AllowedValuesList>;
export interface AllowedValuesConstraint {
  allowedValues?: string[];
}
const AllowedValuesConstraint = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<AllowedValuesConstraint>;
export interface ResourceConstraints {
  name?: AllowedValuesConstraint;
  weight?: IntegerRangeConstraint;
}
const ResourceConstraints = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<ResourceConstraints>;
export interface ScoringStrategyConstraints {
  scoringStrategy?: AllowedValuesConstraint;
  resources?: ResourceConstraints;
}
const ScoringStrategyConstraints = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ScoringStrategyConstraints>;
export interface ScoringStrategyConfig {
  defaultValue?: ScoringStrategy;
  constraints?: ScoringStrategyConstraints;
}
const ScoringStrategyConfig = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<ScoringStrategyConfig>;
export interface NodeResourcesFitVersionConfig {
  scoringStrategy?: ScoringStrategyConfig;
}
const NodeResourcesFitVersionConfig = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<NodeResourcesFitVersionConfig>;
export interface KubeSchedulerVersionConfig {
  nodeResourcesFit?: NodeResourcesFitVersionConfig;
}
const KubeSchedulerVersionConfig = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<KubeSchedulerVersionConfig>;
export interface IntegerConstraints {
  min?: number;
  max?: number;
}
const IntegerConstraints = IntegerRangeConstraint as any as S.Schema<IntegerConstraints>;
export interface IntegerParameterConfig {
  defaultValue?: number;
  constraints?: IntegerConstraints;
}
const IntegerParameterConfig = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<IntegerParameterConfig>;
export interface PodGcControllerVersionConfig {
  terminatedPodGcThreshold?: IntegerParameterConfig;
}
const PodGcControllerVersionConfig = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<PodGcControllerVersionConfig>;
export interface HorizontalPodAutoscalerControllerVersionConfig {
  horizontalPodAutoscalerSyncPeriod?: DurationParameterConfig;
}
const HorizontalPodAutoscalerControllerVersionConfig = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<HorizontalPodAutoscalerControllerVersionConfig>;
export interface KubeControllerManagerVersionConfig {
  podGcControllerConfig?: PodGcControllerVersionConfig;
  horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerVersionConfig;
}
const KubeControllerManagerVersionConfig = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<KubeControllerManagerVersionConfig>;
export interface ControlPlaneConfigInfo {
  kubeApiServerConfig?: KubeApiServerVersionConfig;
  kubeSchedulerConfig?: KubeSchedulerVersionConfig;
  kubeControllerManagerConfig?: KubeControllerManagerVersionConfig;
}
const ControlPlaneConfigInfo = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<ControlPlaneConfigInfo>;
export interface ControlPlaneScalingTierInfo {
  tierName?: string;
  apiRequestConcurrency?: number;
  podSchedulingRatePerSecond?: number;
  clusterDatabaseSizeGb?: number;
  controlPlaneComponentConfigOverrides?: ControlPlaneConfigInfo;
}
const ControlPlaneScalingTierInfo = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<ControlPlaneScalingTierInfo>;
export type ControlPlaneScalingTierList = ControlPlaneScalingTierInfo[];
const ControlPlaneScalingTierList = /*@__PURE__*/ __L.at(__c22, 3);
export interface ClusterVersionInformation {
  clusterVersion?: string;
  clusterType?: string;
  defaultPlatformVersion?: string;
  defaultVersion?: boolean;
  releaseDate?: Date;
  endOfStandardSupportDate?: Date;
  endOfExtendedSupportDate?: Date;
  status?: ClusterVersionStatus;
  versionStatus?: VersionStatus;
  kubernetesPatchVersion?: string;
  controlPlaneScalingTiers?: ControlPlaneScalingTierInfo[];
  controlPlaneComponentConfig?: ControlPlaneConfigInfo;
}
const ClusterVersionInformation = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<ClusterVersionInformation>;
export type ClusterVersionList = ClusterVersionInformation[];
const ClusterVersionList = /*@__PURE__*/ __L.at(__c22, 5);
export interface DescribeClusterVersionsResponse {
  nextToken?: string;
  clusterVersions?: ClusterVersionInformation[];
}
const DescribeClusterVersionsResponse = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<DescribeClusterVersionsResponse>;
export interface DescribeEksAnywhereSubscriptionRequest {
  id: string;
}
const DescribeEksAnywhereSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<DescribeEksAnywhereSubscriptionRequest>;
export interface DescribeEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
const DescribeEksAnywhereSubscriptionResponse =
  CreateEksAnywhereSubscriptionResponse as any as S.Schema<DescribeEksAnywhereSubscriptionResponse>;
export interface DescribeFargateProfileRequest {
  clusterName: string;
  fargateProfileName: string;
}
const DescribeFargateProfileRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<DescribeFargateProfileRequest>;
export interface DescribeFargateProfileResponse {
  fargateProfile?: FargateProfile;
}
const DescribeFargateProfileResponse =
  CreateFargateProfileResponse as any as S.Schema<DescribeFargateProfileResponse>;
export interface IdentityProviderConfig {
  type: string;
  name: string;
}
const IdentityProviderConfig = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<IdentityProviderConfig>;
export interface DescribeIdentityProviderConfigRequest {
  clusterName: string;
  identityProviderConfig: IdentityProviderConfig;
}
const DescribeIdentityProviderConfigRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<DescribeIdentityProviderConfigRequest>;
export type ConfigStatus = "CREATING" | "DELETING" | "ACTIVE" | (string & {});
const ConfigStatus = S.String;

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
  requiredClaims?: { [key: string]: string | undefined };
  tags?: { [key: string]: string | undefined };
  status?: ConfigStatus;
}
const OidcIdentityProviderConfig = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<OidcIdentityProviderConfig>;
export interface IdentityProviderConfigResponse {
  oidc?: OidcIdentityProviderConfig;
}
const IdentityProviderConfigResponse = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<IdentityProviderConfigResponse>;
export interface DescribeIdentityProviderConfigResponse {
  identityProviderConfig?: IdentityProviderConfigResponse;
}
const DescribeIdentityProviderConfigResponse = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<DescribeIdentityProviderConfigResponse>;
export interface DescribeInsightRequest {
  clusterName: string;
  id: string;
}
const DescribeInsightRequest = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<DescribeInsightRequest>;
export type Category =
  | "UPGRADE_READINESS"
  | "MISCONFIGURATION"
  | "ROLLBACK_READINESS"
  | (string & {});
const Category = S.String;

export type InsightStatusValue = "PASSING" | "WARNING" | "ERROR" | "UNKNOWN" | (string & {});
export interface InsightStatus {
  status?: InsightStatusValue;
  reason?: string;
}
const InsightStatus = Cancellation as any as S.Schema<InsightStatus>;
export type AdditionalInfoMap = { [key: string]: string | undefined };
const AdditionalInfoMap = RequiredClaimsMap as any as S.Schema<AdditionalInfoMap>;
export interface InsightResourceDetail {
  insightStatus?: InsightStatus;
  kubernetesResourceUri?: string;
  arn?: string;
}
const InsightResourceDetail = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<InsightResourceDetail>;
export type InsightResourceDetails = InsightResourceDetail[];
const InsightResourceDetails = /*@__PURE__*/ __L.at(__c24, 0);
export interface ClientStat {
  userAgent?: string;
  numberOfRequestsLast30Days?: number;
  lastRequestTime?: Date;
}
const ClientStat = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<ClientStat>;
export type ClientStats = ClientStat[];
const ClientStats = /*@__PURE__*/ __L.at(__c24, 2);
export interface DeprecationDetail {
  usage?: string;
  replacedWith?: string;
  stopServingVersion?: string;
  startServingReplacementVersion?: string;
  clientStats?: ClientStat[];
}
const DeprecationDetail = /*@__PURE__*/ __L.at(__c24, 3) as any as S.Schema<DeprecationDetail>;
export type DeprecationDetails = DeprecationDetail[];
const DeprecationDetails = /*@__PURE__*/ __L.at(__c24, 4);
export interface AddonCompatibilityDetail {
  name?: string;
  compatibleVersions?: string[];
}
const AddonCompatibilityDetail = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<AddonCompatibilityDetail>;
export type AddonCompatibilityDetails = AddonCompatibilityDetail[];
const AddonCompatibilityDetails = /*@__PURE__*/ __L.at(__c24, 6);
export interface InsightCategorySpecificSummary {
  deprecationDetails?: DeprecationDetail[];
  addonCompatibilityDetails?: AddonCompatibilityDetail[];
}
const InsightCategorySpecificSummary = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<InsightCategorySpecificSummary>;
export interface Insight {
  id?: string;
  name?: string;
  category?: Category;
  kubernetesVersion?: string;
  lastRefreshTime?: Date;
  lastTransitionTime?: Date;
  description?: string;
  insightStatus?: InsightStatus;
  recommendation?: string;
  additionalInfo?: { [key: string]: string | undefined };
  resources?: InsightResourceDetail[];
  categorySpecificSummary?: InsightCategorySpecificSummary;
}
const Insight = /*@__PURE__*/ __L.at(__c25, 0) as any as S.Schema<Insight>;
export interface DescribeInsightResponse {
  insight?: Insight;
}
const DescribeInsightResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<DescribeInsightResponse>;
export interface DescribeInsightsRefreshRequest {
  clusterName: string;
}
const DescribeInsightsRefreshRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<DescribeInsightsRefreshRequest>;
export type InsightsRefreshStatus = "IN_PROGRESS" | "FAILED" | "COMPLETED" | (string & {});
const InsightsRefreshStatus = S.String;

export interface DescribeInsightsRefreshResponse {
  message?: string;
  status?: InsightsRefreshStatus;
  startedAt?: Date;
  endedAt?: Date;
}
const DescribeInsightsRefreshResponse = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<DescribeInsightsRefreshResponse>;
export interface DescribeNodegroupRequest {
  clusterName: string;
  nodegroupName: string;
}
const DescribeNodegroupRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<DescribeNodegroupRequest>;
export interface DescribeNodegroupResponse {
  nodegroup?: Nodegroup;
}
const DescribeNodegroupResponse = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<DescribeNodegroupResponse>;
export interface DescribePodIdentityAssociationRequest {
  clusterName: string;
  associationId: string;
}
const DescribePodIdentityAssociationRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<DescribePodIdentityAssociationRequest>;
export interface DescribePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
const DescribePodIdentityAssociationResponse =
  CreatePodIdentityAssociationResponse as any as S.Schema<DescribePodIdentityAssociationResponse>;
export interface DescribeUpdateRequest {
  name: string;
  updateId: string;
  nodegroupName?: string;
  addonName?: string;
  capabilityName?: string;
}
const DescribeUpdateRequest = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<DescribeUpdateRequest>;
export interface DescribeUpdateResponse {
  update?: Update;
}
const DescribeUpdateResponse = CancelUpdateResponse as any as S.Schema<DescribeUpdateResponse>;
export interface DisassociateAccessPolicyRequest {
  clusterName: string;
  principalArn: string;
  policyArn: string;
}
const DisassociateAccessPolicyRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<DisassociateAccessPolicyRequest>;
export interface DisassociateAccessPolicyResponse {}
const DisassociateAccessPolicyResponse = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<DisassociateAccessPolicyResponse>;
export interface DisassociateIdentityProviderConfigRequest {
  clusterName: string;
  identityProviderConfig: IdentityProviderConfig;
  clientRequestToken?: string;
}
const DisassociateIdentityProviderConfigRequest = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<DisassociateIdentityProviderConfigRequest>;
export interface DisassociateIdentityProviderConfigResponse {
  update?: Update;
}
const DisassociateIdentityProviderConfigResponse =
  AssociateEncryptionConfigResponse as any as S.Schema<DisassociateIdentityProviderConfigResponse>;
export type ListAccessEntriesRequestMaxResults = number;
export interface ListAccessEntriesRequest {
  clusterName: string;
  associatedPolicyArn?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAccessEntriesRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<ListAccessEntriesRequest>;
export interface ListAccessEntriesResponse {
  accessEntries?: string[];
  nextToken?: string;
}
const ListAccessEntriesResponse = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<ListAccessEntriesResponse>;
export type ListAccessPoliciesRequestMaxResults = number;
export interface ListAccessPoliciesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListAccessPoliciesRequest = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<ListAccessPoliciesRequest>;
export interface AccessPolicy {
  name?: string;
  arn?: string;
}
const AccessPolicy = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<AccessPolicy>;
export type AccessPoliciesList = AccessPolicy[];
const AccessPoliciesList = /*@__PURE__*/ __L.at(__c26, 7);
export interface ListAccessPoliciesResponse {
  accessPolicies?: AccessPolicy[];
  nextToken?: string;
}
const ListAccessPoliciesResponse = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<ListAccessPoliciesResponse>;
export type ListAddonsRequestMaxResults = number;
export interface ListAddonsRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAddonsRequest = /*@__PURE__*/ __L.at(__c27, 1) as any as S.Schema<ListAddonsRequest>;
export interface ListAddonsResponse {
  addons?: string[];
  nextToken?: string;
}
const ListAddonsResponse = /*@__PURE__*/ __L.at(__c27, 2) as any as S.Schema<ListAddonsResponse>;
export type ListAssociatedAccessPoliciesRequestMaxResults = number;
export interface ListAssociatedAccessPoliciesRequest {
  clusterName: string;
  principalArn: string;
  maxResults?: number;
  nextToken?: string;
}
const ListAssociatedAccessPoliciesRequest = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<ListAssociatedAccessPoliciesRequest>;
export type AssociatedAccessPoliciesList = AssociatedAccessPolicy[];
const AssociatedAccessPoliciesList = /*@__PURE__*/ __L.at(__c27, 4);
export interface ListAssociatedAccessPoliciesResponse {
  clusterName?: string;
  principalArn?: string;
  nextToken?: string;
  associatedAccessPolicies?: AssociatedAccessPolicy[];
}
const ListAssociatedAccessPoliciesResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<ListAssociatedAccessPoliciesResponse>;
export type ListCapabilitiesRequestMaxResults = number;
export interface ListCapabilitiesRequest {
  clusterName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListCapabilitiesRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<ListCapabilitiesRequest>;
export interface CapabilitySummary {
  capabilityName?: string;
  arn?: string;
  type?: CapabilityType;
  status?: CapabilityStatus;
  version?: string;
  createdAt?: Date;
  modifiedAt?: Date;
}
const CapabilitySummary = /*@__PURE__*/ __L.at(__c27, 7) as any as S.Schema<CapabilitySummary>;
export type CapabilitySummaryList = CapabilitySummary[];
const CapabilitySummaryList = /*@__PURE__*/ __L.at(__c28, 0);
export interface ListCapabilitiesResponse {
  capabilities?: CapabilitySummary[];
  nextToken?: string;
}
const ListCapabilitiesResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<ListCapabilitiesResponse>;
export type CertificateAuthorityMaxResults = number;
export interface ListCertificateAuthoritiesRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListCertificateAuthoritiesRequest = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<ListCertificateAuthoritiesRequest>;
export type CertificateAuthoritySummaryList = CertificateAuthoritySummary[];
const CertificateAuthoritySummaryList = /*@__PURE__*/ __L.at(__c28, 3);
export interface ListCertificateAuthoritiesResponse {
  certificateAuthorities?: CertificateAuthoritySummary[];
  nextToken?: string;
}
const ListCertificateAuthoritiesResponse = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<ListCertificateAuthoritiesResponse>;
export type ListClustersRequestMaxResults = number;
export type IncludeClustersList = string[];
const IncludeClustersList = StringList as any as S.Schema<IncludeClustersList>;
export interface ListClustersRequest {
  maxResults?: number;
  nextToken?: string;
  include?: string[];
}
const ListClustersRequest = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<ListClustersRequest>;
export interface ListClustersResponse {
  clusters?: string[];
  nextToken?: string;
}
const ListClustersResponse = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<ListClustersResponse>;
export type ListEksAnywhereSubscriptionsRequestMaxResults = number;
export type EksAnywhereSubscriptionStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "EXPIRING"
  | "EXPIRED"
  | "DELETING"
  | (string & {});
const EksAnywhereSubscriptionStatus = S.String;

export type EksAnywhereSubscriptionStatusValues = EksAnywhereSubscriptionStatus[];
const EksAnywhereSubscriptionStatusValues = /*@__PURE__*/ __L.at(__c28, 7);
export interface ListEksAnywhereSubscriptionsRequest {
  maxResults?: number;
  nextToken?: string;
  includeStatus?: EksAnywhereSubscriptionStatus[];
}
const ListEksAnywhereSubscriptionsRequest = /*@__PURE__*/ __L.at(
  __c29,
  0,
) as any as S.Schema<ListEksAnywhereSubscriptionsRequest>;
export type EksAnywhereSubscriptionList = EksAnywhereSubscription[];
const EksAnywhereSubscriptionList = /*@__PURE__*/ __L.at(__c29, 1);
export interface ListEksAnywhereSubscriptionsResponse {
  subscriptions?: EksAnywhereSubscription[];
  nextToken?: string;
}
const ListEksAnywhereSubscriptionsResponse = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<ListEksAnywhereSubscriptionsResponse>;
export type FargateProfilesRequestMaxResults = number;
export interface ListFargateProfilesRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListFargateProfilesRequest = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<ListFargateProfilesRequest>;
export interface ListFargateProfilesResponse {
  fargateProfileNames?: string[];
  nextToken?: string;
}
const ListFargateProfilesResponse = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<ListFargateProfilesResponse>;
export type ListIdentityProviderConfigsRequestMaxResults = number;
export interface ListIdentityProviderConfigsRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListIdentityProviderConfigsRequest = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<ListIdentityProviderConfigsRequest>;
export type IdentityProviderConfigs = IdentityProviderConfig[];
const IdentityProviderConfigs = /*@__PURE__*/ __L.at(__c29, 6);
export interface ListIdentityProviderConfigsResponse {
  identityProviderConfigs?: IdentityProviderConfig[];
  nextToken?: string;
}
const ListIdentityProviderConfigsResponse = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<ListIdentityProviderConfigsResponse>;
export type CategoryList = Category[];
const CategoryList = LogTypes as any as S.Schema<CategoryList>;
export type InsightStatusValueList = InsightStatusValue[];
const InsightStatusValueList = LogTypes as any as S.Schema<InsightStatusValueList>;
export interface InsightsFilter {
  categories?: Category[];
  kubernetesVersions?: string[];
  statuses?: InsightStatusValue[];
}
const InsightsFilter = /*@__PURE__*/ __L.at(__c30, 0) as any as S.Schema<InsightsFilter>;
export type ListInsightsMaxResults = number;
export interface ListInsightsRequest {
  clusterName: string;
  filter?: InsightsFilter;
  maxResults?: number;
  nextToken?: string;
}
const ListInsightsRequest = /*@__PURE__*/ __L.at(__c30, 1) as any as S.Schema<ListInsightsRequest>;
export interface InsightSummary {
  id?: string;
  name?: string;
  category?: Category;
  kubernetesVersion?: string;
  lastRefreshTime?: Date;
  lastTransitionTime?: Date;
  description?: string;
  insightStatus?: InsightStatus;
}
const InsightSummary = /*@__PURE__*/ __L.at(__c30, 2) as any as S.Schema<InsightSummary>;
export type InsightSummaries = InsightSummary[];
const InsightSummaries = /*@__PURE__*/ __L.at(__c30, 3);
export interface ListInsightsResponse {
  insights?: InsightSummary[];
  nextToken?: string;
}
const ListInsightsResponse = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<ListInsightsResponse>;
export type ListNodegroupsRequestMaxResults = number;
export interface ListNodegroupsRequest {
  clusterName: string;
  maxResults?: number;
  nextToken?: string;
}
const ListNodegroupsRequest = /*@__PURE__*/ __L.at(
  __c30,
  5,
) as any as S.Schema<ListNodegroupsRequest>;
export interface ListNodegroupsResponse {
  nodegroups?: string[];
  nextToken?: string;
}
const ListNodegroupsResponse = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ListNodegroupsResponse>;
export type ListPodIdentityAssociationsMaxResults = number;
export interface ListPodIdentityAssociationsRequest {
  clusterName: string;
  namespace?: string;
  serviceAccount?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListPodIdentityAssociationsRequest = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<ListPodIdentityAssociationsRequest>;
export interface PodIdentityAssociationSummary {
  clusterName?: string;
  namespace?: string;
  serviceAccount?: string;
  associationArn?: string;
  associationId?: string;
  ownerArn?: string;
}
const PodIdentityAssociationSummary = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<PodIdentityAssociationSummary>;
export type PodIdentityAssociationSummaries = PodIdentityAssociationSummary[];
const PodIdentityAssociationSummaries = /*@__PURE__*/ __L.at(__c31, 1);
export interface ListPodIdentityAssociationsResponse {
  associations?: PodIdentityAssociationSummary[];
  nextToken?: string;
}
const ListPodIdentityAssociationsResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<ListPodIdentityAssociationsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<ListTagsForResourceResponse>;
export type ListUpdatesRequestMaxResults = number;
export interface ListUpdatesRequest {
  name: string;
  nodegroupName?: string;
  addonName?: string;
  capabilityName?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListUpdatesRequest = /*@__PURE__*/ __L.at(__c31, 5) as any as S.Schema<ListUpdatesRequest>;
export interface ListUpdatesResponse {
  updateIds?: string[];
  nextToken?: string;
}
const ListUpdatesResponse = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<ListUpdatesResponse>;
export type ConnectorConfigProvider =
  | "EKS_ANYWHERE"
  | "ANTHOS"
  | "GKE"
  | "AKS"
  | "OPENSHIFT"
  | "TANZU"
  | "RANCHER"
  | "EC2"
  | "OTHER"
  | (string & {});
const ConnectorConfigProvider = S.String;

export interface ConnectorConfigRequest {
  roleArn: string;
  provider: ConnectorConfigProvider;
}
const ConnectorConfigRequest = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<ConnectorConfigRequest>;
export interface RegisterClusterRequest {
  name: string;
  connectorConfig: ConnectorConfigRequest;
  clientRequestToken?: string;
  tags?: { [key: string]: string | undefined };
}
const RegisterClusterRequest = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<RegisterClusterRequest>;
export interface RegisterClusterResponse {
  cluster?: Cluster;
}
const RegisterClusterResponse = CreateClusterResponse as any as S.Schema<RegisterClusterResponse>;
export interface StartInsightsRefreshRequest {
  clusterName: string;
}
const StartInsightsRefreshRequest = /*@__PURE__*/ __L.at(
  __c32,
  1,
) as any as S.Schema<StartInsightsRefreshRequest>;
export interface StartInsightsRefreshResponse {
  message?: string;
  status?: InsightsRefreshStatus;
}
const StartInsightsRefreshResponse = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<StartInsightsRefreshResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c32, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAccessEntryResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = StringList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAccessEntryResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccessEntryRequest {
  clusterName: string;
  principalArn: string;
  kubernetesGroups?: string[];
  clientRequestToken?: string;
  username?: string;
}
const UpdateAccessEntryRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<UpdateAccessEntryRequest>;
export interface UpdateAccessEntryResponse {
  accessEntry?: AccessEntry;
}
const UpdateAccessEntryResponse =
  CreateAccessEntryResponse as any as S.Schema<UpdateAccessEntryResponse>;
export interface UpdateAddonRequest {
  clusterName: string;
  addonName: string;
  addonVersion?: string;
  serviceAccountRoleArn?: string;
  resolveConflicts?: ResolveConflicts;
  clientRequestToken?: string;
  configurationValues?: string;
  podIdentityAssociations?: AddonPodIdentityAssociations[];
}
const UpdateAddonRequest = /*@__PURE__*/ __L.at(__c32, 6) as any as S.Schema<UpdateAddonRequest>;
export interface UpdateAddonResponse {
  update?: Update;
}
const UpdateAddonResponse = CancelUpdateResponse as any as S.Schema<UpdateAddonResponse>;
export interface UpdateRoleMappings {
  addOrUpdateRoleMappings?: ArgoCdRoleMapping[];
  removeRoleMappings?: ArgoCdRoleMapping[];
}
const UpdateRoleMappings = /*@__PURE__*/ __L.at(__c32, 7) as any as S.Schema<UpdateRoleMappings>;
export interface UpdateArgoCdConfig {
  rbacRoleMappings?: UpdateRoleMappings;
  networkAccess?: ArgoCdNetworkAccessConfigRequest;
}
const UpdateArgoCdConfig = /*@__PURE__*/ __L.at(__c33, 0) as any as S.Schema<UpdateArgoCdConfig>;
export interface UpdateCapabilityConfiguration {
  argoCd?: UpdateArgoCdConfig;
}
const UpdateCapabilityConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<UpdateCapabilityConfiguration>;
export interface UpdateCapabilityRequest {
  clusterName: string;
  capabilityName: string;
  roleArn?: string;
  configuration?: UpdateCapabilityConfiguration;
  clientRequestToken?: string;
  deletePropagationPolicy?: CapabilityDeletePropagationPolicy;
}
const UpdateCapabilityRequest = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<UpdateCapabilityRequest>;
export interface UpdateCapabilityResponse {
  update?: Update;
}
const UpdateCapabilityResponse = CancelUpdateResponse as any as S.Schema<UpdateCapabilityResponse>;
export interface UpdateAccessConfigRequest {
  authenticationMode?: AuthenticationMode;
}
const UpdateAccessConfigRequest = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<UpdateAccessConfigRequest>;
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
  deletionProtection?: boolean;
  controlPlaneScalingConfig?: ControlPlaneScalingConfig;
  kubeApiServerConfig?: KubeApiServerConfigRequest;
  kubeSchedulerConfig?: KubeSchedulerConfigRequest;
  kubeControllerManagerConfig?: KubeControllerManagerConfigRequest;
}
const UpdateClusterConfigRequest = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<UpdateClusterConfigRequest>;
export interface UpdateClusterConfigResponse {
  update?: Update;
}
const UpdateClusterConfigResponse =
  AssociateEncryptionConfigResponse as any as S.Schema<UpdateClusterConfigResponse>;
export interface RollbackConfig {
  timeoutMinutes?: number;
}
const RollbackConfig = /*@__PURE__*/ __L.at(__c33, 5) as any as S.Schema<RollbackConfig>;
export interface UpdateClusterVersionRequest {
  name: string;
  version: string;
  clientRequestToken?: string;
  force?: boolean;
  rollbackConfig?: RollbackConfig;
}
const UpdateClusterVersionRequest = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<UpdateClusterVersionRequest>;
export interface UpdateClusterVersionResponse {
  update?: Update;
}
const UpdateClusterVersionResponse =
  AssociateEncryptionConfigResponse as any as S.Schema<UpdateClusterVersionResponse>;
export interface UpdateEksAnywhereSubscriptionRequest {
  id: string;
  autoRenew: boolean;
  clientRequestToken?: string;
}
const UpdateEksAnywhereSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<UpdateEksAnywhereSubscriptionRequest>;
export interface UpdateEksAnywhereSubscriptionResponse {
  subscription?: EksAnywhereSubscription;
}
const UpdateEksAnywhereSubscriptionResponse =
  CreateEksAnywhereSubscriptionResponse as any as S.Schema<UpdateEksAnywhereSubscriptionResponse>;
export type LabelsKeyList = string[];
const LabelsKeyList = StringList as any as S.Schema<LabelsKeyList>;
export interface UpdateLabelsPayload {
  addOrUpdateLabels?: { [key: string]: string | undefined };
  removeLabels?: string[];
}
const UpdateLabelsPayload = /*@__PURE__*/ __L.at(__c34, 0) as any as S.Schema<UpdateLabelsPayload>;
export interface UpdateTaintsPayload {
  addOrUpdateTaints?: Taint[];
  removeTaints?: Taint[];
}
const UpdateTaintsPayload = /*@__PURE__*/ __L.at(__c34, 1) as any as S.Schema<UpdateTaintsPayload>;
export interface UpdateNodegroupConfigRequest {
  clusterName: string;
  nodegroupName: string;
  labels?: UpdateLabelsPayload;
  taints?: UpdateTaintsPayload;
  scalingConfig?: NodegroupScalingConfig;
  updateConfig?: NodegroupUpdateConfig;
  nodeRepairConfig?: NodeRepairConfig;
  warmPoolConfig?: WarmPoolConfig;
  clientRequestToken?: string;
}
const UpdateNodegroupConfigRequest = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<UpdateNodegroupConfigRequest>;
export interface UpdateNodegroupConfigResponse {
  update?: Update;
}
const UpdateNodegroupConfigResponse =
  AssociateEncryptionConfigResponse as any as S.Schema<UpdateNodegroupConfigResponse>;
export interface UpdateNodegroupVersionRequest {
  clusterName: string;
  nodegroupName: string;
  version?: string;
  releaseVersion?: string;
  launchTemplate?: LaunchTemplateSpecification;
  force?: boolean;
  clientRequestToken?: string;
}
const UpdateNodegroupVersionRequest = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<UpdateNodegroupVersionRequest>;
export interface UpdateNodegroupVersionResponse {
  update?: Update;
}
const UpdateNodegroupVersionResponse =
  AssociateEncryptionConfigResponse as any as S.Schema<UpdateNodegroupVersionResponse>;
export interface UpdatePodIdentityAssociationRequest {
  clusterName: string;
  associationId: string;
  roleArn?: string;
  clientRequestToken?: string;
  disableSessionTags?: boolean;
  targetRoleArn?: string;
  policy?: string;
}
const UpdatePodIdentityAssociationRequest = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<UpdatePodIdentityAssociationRequest>;
export interface UpdatePodIdentityAssociationResponse {
  association?: PodIdentityAssociation;
}
const UpdatePodIdentityAssociationResponse =
  CreatePodIdentityAssociationResponse as any as S.Schema<UpdatePodIdentityAssociationResponse>;
export type ActivateCertificateAuthorityError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Activates a successor certificate authority (CA) as the signing certificate authority
 * for your cluster, completing a CA rotation.
 *
 * When you activate a successor CA, Amazon EKS promotes it to be the cluster's signer (its
 * `signingStatus` becomes `IN_USE`) and the outgoing CA is
 * retired (`NOT_USED`). The outgoing CA remains in the cluster's trust bundle but
 * no longer signs certificates. The successor CA you activate must already be present on
 * the cluster and fully distributed (its `distributionStatus` must be
 * `COMPLETE`). This is an asynchronous operation that returns an
 * `update` object you can track with
 * `DescribeUpdate`
 * .
 *
 * Before you activate the successor CA, make sure the worker nodes you manage and your
 * external clients have been updated to trust it, so they maintain connectivity to the API
 * server after activation. For a limited period after activation, CA rollback is available
 * to revert to the outgoing CA if needed. If you don't activate the successor CA yourself,
 * Amazon EKS activates it automatically as the expiration deadline approaches. For more
 * information, see Rotate the Amazon EKS
 * cluster certificate authority in the *Amazon EKS User Guide*.
 */
export const activateCertificateAuthority: API.OperationMethod<
  ActivateCertificateAuthorityRequest,
  ActivateCertificateAuthorityResponse,
  ActivateCertificateAuthorityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateCertificateAuthorityRequest,
  output: ActivateCertificateAuthorityResponse,
  errors: [
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateCertificateAuthority",
}));

export type AssociateAccessPolicyError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Associates an access policy and its scope to an access entry. For more information
 * about associating access policies, see Associating and disassociating
 * access policies to and from access entries in the *Amazon EKS User Guide*.
 */
export const associateAccessPolicy: API.OperationMethod<
  AssociateAccessPolicyRequest,
  AssociateAccessPolicyResponse,
  AssociateAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateAccessPolicyRequest,
  output: AssociateAccessPolicyResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateAccessPolicy",
}));

export type AssociateEncryptionConfigError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates an encryption configuration to an existing cluster.
 *
 * Use this API to enable encryption on existing clusters that don't already have
 * encryption enabled. This allows you to implement a defense-in-depth security strategy
 * without migrating applications to new Amazon EKS clusters.
 */
export const associateEncryptionConfig: API.OperationMethod<
  AssociateEncryptionConfigRequest,
  AssociateEncryptionConfigResponse,
  AssociateEncryptionConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateEncryptionConfigRequest,
  output: AssociateEncryptionConfigResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateEncryptionConfig",
}));

export type AssociateIdentityProviderConfigError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates an identity provider configuration to a cluster.
 *
 * If you want to authenticate identities using an identity provider, you can create an
 * identity provider configuration and associate it to your cluster. After configuring
 * authentication to your cluster you can create Kubernetes `Role` and
 * `ClusterRole` objects, assign permissions to them, and then bind them to
 * the identities using Kubernetes `RoleBinding` and `ClusterRoleBinding`
 * objects. For more information see Using RBAC
 * Authorization in the Kubernetes documentation.
 */
export const associateIdentityProviderConfig: API.OperationMethod<
  AssociateIdentityProviderConfigRequest,
  AssociateIdentityProviderConfigResponse,
  AssociateIdentityProviderConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateIdentityProviderConfigRequest,
  output: AssociateIdentityProviderConfigResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateIdentityProviderConfig",
}));

export type CancelUpdateError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | InvalidStateException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Cancels an in-progress update to an Amazon EKS cluster on a best-effort basis. Cancellation
 * is only performed if the update can be cancelled. Currently, this is supported for
 * `VersionRollback` update types on EKS Auto Mode clusters when nodes are
 * rolling back.
 *
 * A successful cancellation stops the node rollback. After cancellation, nodes converge
 * to the current cluster version honoring configured disruption controls. If the control
 * plane rollback has already begun, the cancellation request fails.
 */
export const cancelUpdate: API.OperationMethod<
  CancelUpdateRequest,
  CancelUpdateResponse,
  CancelUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelUpdateRequest,
  output: CancelUpdateResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    InvalidStateException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelUpdate",
}));

export type CreateAccessEntryError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Creates an access entry.
 *
 * An access entry allows an IAM principal to access your cluster. Access
 * entries can replace the need to maintain entries in the `aws-auth`
 * `ConfigMap` for authentication. You have the following options for
 * authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes
 * role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you
 * to create and manage Kubernetes `Role`, `ClusterRole`,
 * `RoleBinding`, and `ClusterRoleBinding` objects, in addition
 * to managing access entries. If you use Amazon EKS authorization exclusively, you don't need
 * to create and manage Kubernetes `Role`, `ClusterRole`,
 * `RoleBinding`, and `ClusterRoleBinding` objects.
 *
 * For more information about access entries, see Access entries in the
 * *Amazon EKS User Guide*.
 */
export const createAccessEntry: API.OperationMethod<
  CreateAccessEntryRequest,
  CreateAccessEntryResponse,
  CreateAccessEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccessEntryRequest,
  output: CreateAccessEntryResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAccessEntry",
}));

export type CreateAddonError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Creates an Amazon EKS add-on.
 *
 * Amazon EKS add-ons help to automate the provisioning and lifecycle management of common
 * operational software for Amazon EKS clusters. For more information, see Amazon EKS
 * add-ons in the *Amazon EKS User Guide*.
 */
export const createAddon: API.OperationMethod<
  CreateAddonRequest,
  CreateAddonResponse,
  CreateAddonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAddonRequest,
  output: CreateAddonResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAddon",
}));

export type CreateCapabilityError =
  | AccessDeniedException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a managed capability resource for an Amazon EKS cluster.
 *
 * Capabilities provide fully managed capabilities to build and scale with Kubernetes. When you create a capability, Amazon EKSprovisions and manages the infrastructure required to run the capability outside of your cluster. This approach reduces operational overhead and preserves cluster resources.
 *
 * You can only create one Capability of each type on a given Amazon EKS cluster. Valid types are Argo CD for declarative GitOps deployment, Amazon Web Services Controllers for Kubernetes (ACK) for resource management, and Kube Resource Orchestrator (KRO) for Kubernetes custom resource orchestration.
 *
 * For more information, see EKS Capabilities in the *Amazon EKS User Guide*.
 */
export const createCapability: API.OperationMethod<
  CreateCapabilityRequest,
  CreateCapabilityResponse,
  CreateCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCapabilityRequest,
  output: CreateCapabilityResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCapability",
}));

export type CreateCertificateAuthorityError =
  | InvalidParameterException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Appends a successor certificate authority (CA) to your cluster, beginning the CA
 * rotation process.
 *
 * A cluster certificate authority is the root of trust for your cluster's control plane.
 * It signs the certificates that secure communication between the Kubernetes API server and its
 * clients, and its public certificate is distributed to your cluster's trust bundle so that
 * worker nodes and clients can verify the API server's identity. Each cluster can have at
 * most two certificate authorities at a time: the outgoing CA that's currently signing (its
 * `signingStatus` is `IN_USE`) and one successor CA
 * (`signingStatus` of `NOT_USED`) that you can later activate to
 * complete the rotation.
 *
 * Appending a successor CA adds its public certificate to the cluster's trust bundle so
 * that the cluster trusts both CAs simultaneously (the dual trust period), but it doesn't
 * begin signing certificates. Amazon EKS then distributes the successor CA to the Amazon Web Services managed
 * components in your cluster; you can track this through the CA's
 * `distributionStatus`. The successor CA can't be activated until its
 * `distributionStatus` is `COMPLETE`. To activate it as the
 * cluster's signer, use
 * `ActivateCertificateAuthority`
 * . This is an asynchronous operation
 * that returns an `update` object. If you don't append a successor CA yourself,
 * Amazon EKS appends one automatically before the outgoing CA approaches expiration.
 *
 * For more information, see Rotate the Amazon EKS
 * cluster certificate authority in the *Amazon EKS User Guide*.
 */
export const createCertificateAuthority: API.OperationMethod<
  CreateCertificateAuthorityRequest,
  CreateCertificateAuthorityResponse,
  CreateCertificateAuthorityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCertificateAuthorityRequest,
  output: CreateCertificateAuthorityResponse,
  errors: [
    InvalidParameterException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCertificateAuthority",
}));

export type CreateClusterError =
  | ClientException
  | InvalidParameterException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ServerException
  | ServiceUnavailableException
  | UnsupportedAvailabilityZoneException
  | CommonErrors;
/**
 * Creates an Amazon EKS control plane.
 *
 * The Amazon EKS control plane consists of control plane instances that run the Kubernetes
 * software, such as `etcd` and the API server. The control plane runs in an
 * account managed by Amazon Web Services, and the Kubernetes API is exposed by the Amazon EKS API server endpoint.
 * Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of
 * Amazon EC2 instances.
 *
 * The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing
 * Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide
 * connectivity from the control plane instances to the nodes (for example, to support
 * `kubectl exec`, `logs`, and `proxy` data
 * flows).
 *
 * Amazon EKS nodes run in your Amazon Web Services account and connect to your cluster's control plane over
 * the Kubernetes API server endpoint and a certificate file that is created for your
 * cluster.
 *
 * You can use the `endpointPublicAccess` and
 * `endpointPrivateAccess` parameters to enable or disable public and
 * private access to your cluster's Kubernetes API server endpoint. By default, public access is
 * enabled, and private access is disabled. The
 * endpoint domain name and IP address family depends on the value of the
 * `ipFamily` for the cluster. For more information, see Amazon EKS Cluster
 * Endpoint Access Control in the
 * *Amazon EKS User Guide*
 * .
 *
 * You can use the `logging` parameter to enable or disable exporting the
 * Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane
 * logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS
 * Cluster Control Plane Logs in the
 *
 * *Amazon EKS User Guide*
 * .
 *
 * CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported
 * control plane logs. For more information, see CloudWatch Pricing.
 *
 * In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS
 * cluster, you must configure your Kubernetes tooling to communicate with the API server and
 * launch nodes into your cluster. For more information, see Allowing users to
 * access your cluster and Launching Amazon EKS
 * nodes in the *Amazon EKS User Guide*.
 */
export const createCluster: API.OperationMethod<
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterRequest,
  output: CreateClusterResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ServerException,
    ServiceUnavailableException,
    UnsupportedAvailabilityZoneException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCluster",
}));

export type CreateEksAnywhereSubscriptionError =
  | ClientException
  | InvalidParameterException
  | ResourceLimitExceededException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates an EKS Anywhere subscription. When a subscription is created, it is a contract
 * agreement for the length of the term specified in the request. Licenses that are used to
 * validate support are provisioned in Amazon Web Services License Manager and the caller account is
 * granted access to EKS Anywhere Curated Packages.
 */
export const createEksAnywhereSubscription: API.OperationMethod<
  CreateEksAnywhereSubscriptionRequest,
  CreateEksAnywhereSubscriptionResponse,
  CreateEksAnywhereSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEksAnywhereSubscriptionRequest,
  output: CreateEksAnywhereSubscriptionResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceLimitExceededException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEksAnywhereSubscription",
}));

export type CreateFargateProfileError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceLimitExceededException
  | ServerException
  | UnsupportedAvailabilityZoneException
  | ResourceInUseException
  | CommonErrors;
/**
 * Creates an Fargate profile for your Amazon EKS cluster. You must have at least one
 * Fargate profile in a cluster to be able to run pods on Fargate.
 *
 * The Fargate profile allows an administrator to declare which pods run on Fargate
 * and specify which pods run on which Fargate profile. This declaration is done through
 * the profile's selectors. Each profile can have up to five selectors that contain a
 * namespace and labels. A namespace is required for every selector. The label field
 * consists of multiple optional key-value pairs. Pods that match the selectors are
 * scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the
 * Fargate profile, then that pod is run on Fargate.
 *
 * When you create a Fargate profile, you must specify a pod execution role to use with
 * the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes
 * Role
 * Based Access Control (RBAC) for authorization so that the
 * `kubelet` that is running on the Fargate infrastructure can register
 * with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod
 * execution role also provides IAM permissions to the Fargate infrastructure to allow
 * read access to Amazon ECR image repositories. For more information, see Pod
 * Execution Role in the *Amazon EKS User Guide*.
 *
 * Fargate profiles are immutable. However, you can create a new updated profile to
 * replace an existing profile and then delete the original after the updated profile has
 * finished creating.
 *
 * If any Fargate profiles in a cluster are in the `DELETING` status, you
 * must wait for that Fargate profile to finish deleting before you can create any other
 * profiles in that cluster.
 *
 * For more information, see Fargate profile in the *Amazon EKS User Guide*.
 */
export const createFargateProfile: API.OperationMethod<
  CreateFargateProfileRequest,
  CreateFargateProfileResponse,
  CreateFargateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFargateProfileRequest,
  output: CreateFargateProfileResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceLimitExceededException,
    ServerException,
    UnsupportedAvailabilityZoneException,
    ResourceInUseException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFargateProfile",
}));

export type CreateNodegroupError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a managed node group for an Amazon EKS cluster.
 *
 * You can only create a node group for your cluster that is equal to the current Kubernetes
 * version for the cluster. All node groups are created with the latest AMI release version
 * for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI
 * using a launch template.
 *
 * For later updates, you will only be able to update a node group using a launch
 * template only if it was originally deployed with a launch template. Additionally, the
 * launch template ID or name must match what was used when the node group was created. You
 * can update the launch template version with necessary changes. For more information
 * about using launch templates, see Customizing managed nodes with
 * launch templates.
 *
 * An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that
 * are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see Managed
 * node groups in the *Amazon EKS User Guide*.
 *
 * Windows AMI types are only supported for commercial Amazon Web Services Regions that support
 * Windows on Amazon EKS.
 */
export const createNodegroup: API.OperationMethod<
  CreateNodegroupRequest,
  CreateNodegroupResponse,
  CreateNodegroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNodegroupRequest,
  output: CreateNodegroupResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNodegroup",
}));

export type CreatePodIdentityAssociationError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role
 * with *EKS Pod Identity*. Use EKS Pod Identity to give temporary IAM credentials to
 * Pods and the credentials are rotated automatically.
 *
 * Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.
 *
 * If a Pod uses a service account that has an association, Amazon EKS sets environment variables
 * in the containers of the Pod. The environment variables configure the Amazon Web Services SDKs,
 * including the Command Line Interface, to use the EKS Pod Identity credentials.
 *
 * EKS Pod Identity is a simpler method than IAM roles for service
 * accounts, as this method doesn't use OIDC identity providers.
 * Additionally, you can configure a role for EKS Pod Identity once, and reuse it across
 * clusters.
 *
 * Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent,
 * and may take several seconds to be effective after the initial API call returns
 * successfully. You must design your applications to account for these potential delays.
 * We recommend that you don't include association create/updates in the
 * critical, high-availability code paths of your application. Instead, make changes in a
 * separate initialization or setup routine that you run less frequently.
 *
 * You can set a *target IAM role* in the same or a different
 * account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two
 * role assumptions in sequence: first assuming the role in the association that is in this
 * account, then using those credentials to assume the target IAM role. This process
 * provides your Pod with temporary credentials that have the permissions defined in the
 * target role, allowing secure access to resources in another Amazon Web Services account.
 */
export const createPodIdentityAssociation: API.OperationMethod<
  CreatePodIdentityAssociationRequest,
  CreatePodIdentityAssociationResponse,
  CreatePodIdentityAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePodIdentityAssociationRequest,
  output: CreatePodIdentityAssociationResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePodIdentityAssociation",
}));

export type DeleteAccessEntryError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes an access entry.
 *
 * Deleting an access entry of a type other than `Standard` can cause your
 * cluster to function improperly. If you delete an access entry in error, you can recreate
 * it.
 */
export const deleteAccessEntry: API.OperationMethod<
  DeleteAccessEntryRequest,
  DeleteAccessEntryResponse,
  DeleteAccessEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccessEntryRequest,
  output: DeleteAccessEntryResponse,
  errors: [InvalidRequestException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccessEntry",
}));

export type DeleteAddonError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes an Amazon EKS add-on.
 *
 * When you remove an add-on, it's deleted from the cluster. You can always manually
 * start an add-on on the cluster using the Kubernetes API.
 */
export const deleteAddon: API.OperationMethod<
  DeleteAddonRequest,
  DeleteAddonResponse,
  DeleteAddonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAddonRequest,
  output: DeleteAddonResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAddon",
}));

export type DeleteCapabilityError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes a managed capability from your Amazon EKS cluster. When you delete a capability, Amazon EKS removes the capability infrastructure but retains all resources that were managed by the capability.
 *
 * Before deleting a capability, you should delete all Kubernetes resources that were created by the capability. After the capability is deleted, these resources become difficult to manage because the controller that managed them is no longer available. To delete resources before removing the capability, use `kubectl delete` or remove them through your GitOps workflow.
 */
export const deleteCapability: API.OperationMethod<
  DeleteCapabilityRequest,
  DeleteCapabilityResponse,
  DeleteCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCapabilityRequest,
  output: DeleteCapabilityResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCapability",
}));

export type DeleteCertificateAuthorityError =
  | InvalidParameterException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a certificate authority (CA) from your cluster.
 *
 * Deleting a certificate authority removes its public certificate from the cluster's
 * trust bundle. You can't delete the certificate authority that's currently signing
 * certificates for the cluster (its `signingStatus` is `IN_USE`) -- to
 * remove the outgoing CA, first activate the successor CA with
 * `ActivateCertificateAuthority`
 * . Amazon EKS also protects a successor CA
 * from deletion in certain cases to keep a valid rotation path -- for example, a successor
 * that Amazon EKS appended can't be deleted while it's the only successor on the cluster. This is
 * an asynchronous operation that returns an `update` object.
 */
export const deleteCertificateAuthority: API.OperationMethod<
  DeleteCertificateAuthorityRequest,
  DeleteCertificateAuthorityResponse,
  DeleteCertificateAuthorityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCertificateAuthorityRequest,
  output: DeleteCertificateAuthorityResponse,
  errors: [
    InvalidParameterException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCertificateAuthority",
}));

export type DeleteClusterError =
  | ClientException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes an Amazon EKS cluster control plane.
 *
 * If you have active services and ingress resources in your cluster that are associated with a load balancer,
 * you must delete those services before deleting the cluster so that the load balancers
 * are deleted properly. Otherwise, you can have orphaned resources in your VPC that
 * prevent you from being able to delete the VPC. For more information, see Deleting a
 * cluster in the *Amazon EKS User Guide*.
 *
 * If you have managed node groups or Fargate profiles attached to the cluster, you
 * must delete them first. For more information, see `DeleteNodgroup` and
 * `DeleteFargateProfile`.
 */
export const deleteCluster: API.OperationMethod<
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterRequest,
  output: DeleteClusterResponse,
  errors: [
    ClientException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCluster",
}));

export type DeleteEksAnywhereSubscriptionError =
  | ClientException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes an expired or inactive subscription. Deleting inactive subscriptions removes
 * them from the Amazon Web Services Management Console view and from list/describe API responses. Subscriptions can
 * only be cancelled within 7 days of creation and are cancelled by creating a ticket in
 * the Amazon Web Services Support Center.
 */
export const deleteEksAnywhereSubscription: API.OperationMethod<
  DeleteEksAnywhereSubscriptionRequest,
  DeleteEksAnywhereSubscriptionResponse,
  DeleteEksAnywhereSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEksAnywhereSubscriptionRequest,
  output: DeleteEksAnywhereSubscriptionResponse,
  errors: [ClientException, InvalidRequestException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEksAnywhereSubscription",
}));

export type DeleteFargateProfileError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ResourceInUseException
  | CommonErrors;
/**
 * Deletes an Fargate profile.
 *
 * When you delete a Fargate profile, any `Pod` running on Fargate that
 * was created with the profile is deleted. If the `Pod` matches another
 * Fargate profile, then it is scheduled on Fargate with that profile. If it no longer
 * matches any Fargate profiles, then it's not scheduled on Fargate and may remain in a
 * pending state.
 *
 * Only one Fargate profile in a cluster can be in the `DELETING` status at
 * a time. You must wait for a Fargate profile to finish deleting before you can delete
 * any other profiles in that cluster.
 */
export const deleteFargateProfile: API.OperationMethod<
  DeleteFargateProfileRequest,
  DeleteFargateProfileResponse,
  DeleteFargateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFargateProfileRequest,
  output: DeleteFargateProfileResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ResourceInUseException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFargateProfile",
}));

export type DeleteNodegroupError =
  | ClientException
  | InvalidParameterException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deletes a managed node group.
 */
export const deleteNodegroup: API.OperationMethod<
  DeleteNodegroupRequest,
  DeleteNodegroupResponse,
  DeleteNodegroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNodegroupRequest,
  output: DeleteNodegroupResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNodegroup",
}));

export type DeletePodIdentityAssociationError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Deletes a EKS Pod Identity association.
 *
 * The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.
 */
export const deletePodIdentityAssociation: API.OperationMethod<
  DeletePodIdentityAssociationRequest,
  DeletePodIdentityAssociationResponse,
  DeletePodIdentityAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePodIdentityAssociationRequest,
  output: DeletePodIdentityAssociationResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePodIdentityAssociation",
}));

export type DeregisterClusterError =
  | AccessDeniedException
  | ClientException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Deregisters a connected cluster to remove it from the Amazon EKS control plane.
 *
 * A connected cluster is a Kubernetes cluster that you've connected to your control plane
 * using the Amazon EKS Connector.
 */
export const deregisterCluster: API.OperationMethod<
  DeregisterClusterRequest,
  DeregisterClusterResponse,
  DeregisterClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterClusterRequest,
  output: DeregisterClusterResponse,
  errors: [
    AccessDeniedException,
    ClientException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterCluster",
}));

export type DescribeAccessEntryError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Describes an access entry.
 */
export const describeAccessEntry: API.OperationMethod<
  DescribeAccessEntryRequest,
  DescribeAccessEntryResponse,
  DescribeAccessEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccessEntryRequest,
  output: DescribeAccessEntryResponse,
  errors: [InvalidRequestException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccessEntry",
}));

export type DescribeAddonError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Describes an Amazon EKS add-on.
 */
export const describeAddon: API.OperationMethod<
  DescribeAddonRequest,
  DescribeAddonResponse,
  DescribeAddonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAddonRequest,
  output: DescribeAddonResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAddon",
}));

export type DescribeAddonConfigurationError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns configuration options.
 */
export const describeAddonConfiguration: API.OperationMethod<
  DescribeAddonConfigurationRequest,
  DescribeAddonConfigurationResponse,
  DescribeAddonConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAddonConfigurationRequest,
  output: DescribeAddonConfigurationResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAddonConfiguration",
}));

export type DescribeAddonVersionsError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Describes the versions for an add-on.
 *
 * Information such as the Kubernetes versions that you can use the add-on with, the
 * `owner`, `publisher`, and the `type` of the add-on
 * are returned.
 */
export const describeAddonVersions: API.PaginatedOperationMethod<
  DescribeAddonVersionsRequest,
  DescribeAddonVersionsResponse,
  DescribeAddonVersionsError,
  Credentials | HttpClient.HttpClient,
  AddonInfo
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeAddonVersionsRequest,
  output: DescribeAddonVersionsResponse,
  errors: [InvalidParameterException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAddonVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "addons",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeCapabilityError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns detailed information about a specific managed capability in your Amazon EKS cluster, including its current status, configuration, health information, and any issues that may be affecting its operation.
 */
export const describeCapability: API.OperationMethod<
  DescribeCapabilityRequest,
  DescribeCapabilityResponse,
  DescribeCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCapabilityRequest,
  output: DescribeCapabilityResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCapability",
}));

export type DescribeCertificateAuthorityError =
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns detailed information about a certificate authority (CA) in your cluster,
 * including its validity period, signing and distribution status, provenance, scheduled
 * auto-activation events, and public certificate data.
 */
export const describeCertificateAuthority: API.OperationMethod<
  DescribeCertificateAuthorityRequest,
  DescribeCertificateAuthorityResponse,
  DescribeCertificateAuthorityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeCertificateAuthorityRequest,
  output: DescribeCertificateAuthorityResponse,
  errors: [ResourceNotFoundException, ServerException, ServiceUnavailableException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCertificateAuthority",
}));

export type DescribeClusterError =
  | ClientException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes an Amazon EKS cluster.
 *
 * The API server endpoint and certificate authority data returned by this operation are
 * required for `kubelet` and `kubectl` to communicate with your
 * Kubernetes API server. For more information, see Creating or
 * updating a `kubeconfig` file for an Amazon EKS cluster.
 *
 * The API server endpoint and certificate authority data aren't available until the
 * cluster reaches the `ACTIVE` state.
 */
export const describeCluster: API.OperationMethod<
  DescribeClusterRequest,
  DescribeClusterResponse,
  DescribeClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeClusterRequest,
  output: DescribeClusterResponse,
  errors: [
    ClientException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCluster",
}));

export type DescribeClusterVersionsError =
  | InvalidParameterException
  | InvalidRequestException
  | ServerException
  | CommonErrors;
/**
 * Lists available Kubernetes versions for Amazon EKS clusters.
 */
export const describeClusterVersions: API.PaginatedOperationMethod<
  DescribeClusterVersionsRequest,
  DescribeClusterVersionsResponse,
  DescribeClusterVersionsError,
  Credentials | HttpClient.HttpClient,
  ClusterVersionInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeClusterVersionsRequest,
  output: DescribeClusterVersionsResponse,
  errors: [InvalidParameterException, InvalidRequestException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeClusterVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "clusterVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeEksAnywhereSubscriptionError =
  | ClientException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Returns descriptive information about a subscription.
 */
export const describeEksAnywhereSubscription: API.OperationMethod<
  DescribeEksAnywhereSubscriptionRequest,
  DescribeEksAnywhereSubscriptionResponse,
  DescribeEksAnywhereSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeEksAnywhereSubscriptionRequest,
  output: DescribeEksAnywhereSubscriptionResponse,
  errors: [
    ClientException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEksAnywhereSubscription",
}));

export type DescribeFargateProfileError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Describes an Fargate profile.
 */
export const describeFargateProfile: API.OperationMethod<
  DescribeFargateProfileRequest,
  DescribeFargateProfileResponse,
  DescribeFargateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeFargateProfileRequest,
  output: DescribeFargateProfileResponse,
  errors: [ClientException, InvalidParameterException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeFargateProfile",
}));

export type DescribeIdentityProviderConfigError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes an identity provider configuration.
 */
export const describeIdentityProviderConfig: API.OperationMethod<
  DescribeIdentityProviderConfigRequest,
  DescribeIdentityProviderConfigResponse,
  DescribeIdentityProviderConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeIdentityProviderConfigRequest,
  output: DescribeIdentityProviderConfigResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeIdentityProviderConfig",
}));

export type DescribeInsightError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns details about an insight that you specify using its ID.
 */
export const describeInsight: API.OperationMethod<
  DescribeInsightRequest,
  DescribeInsightResponse,
  DescribeInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeInsightRequest,
  output: DescribeInsightResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInsight",
}));

export type DescribeInsightsRefreshError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns the status of the latest on-demand cluster insights refresh operation.
 */
export const describeInsightsRefresh: API.OperationMethod<
  DescribeInsightsRefreshRequest,
  DescribeInsightsRefreshResponse,
  DescribeInsightsRefreshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeInsightsRefreshRequest,
  output: DescribeInsightsRefreshResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInsightsRefresh",
}));

export type DescribeNodegroupError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Describes a managed node group.
 */
export const describeNodegroup: API.OperationMethod<
  DescribeNodegroupRequest,
  DescribeNodegroupResponse,
  DescribeNodegroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeNodegroupRequest,
  output: DescribeNodegroupResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNodegroup",
}));

export type DescribePodIdentityAssociationError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns descriptive information about an EKS Pod Identity association.
 *
 * This action requires the ID of the association. You can get the ID from the response to
 * the `CreatePodIdentityAssocation` for newly created associations. Or, you can
 * list the IDs for associations with `ListPodIdentityAssociations` and filter the
 * list by namespace or service account.
 */
export const describePodIdentityAssociation: API.OperationMethod<
  DescribePodIdentityAssociationRequest,
  DescribePodIdentityAssociationResponse,
  DescribePodIdentityAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribePodIdentityAssociationRequest,
  output: DescribePodIdentityAssociationResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePodIdentityAssociation",
}));

export type DescribeUpdateError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Describes an update to an Amazon EKS resource.
 *
 * When the status of the update is `Successful`, the update is complete. If
 * an update fails, the status is `Failed`, and an error detail explains the
 * reason for the failure.
 */
export const describeUpdate: API.OperationMethod<
  DescribeUpdateRequest,
  DescribeUpdateResponse,
  DescribeUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeUpdateRequest,
  output: DescribeUpdateResponse,
  errors: [ClientException, InvalidParameterException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeUpdate",
}));

export type DisassociateAccessPolicyError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Disassociates an access policy from an access entry.
 */
export const disassociateAccessPolicy: API.OperationMethod<
  DisassociateAccessPolicyRequest,
  DisassociateAccessPolicyResponse,
  DisassociateAccessPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateAccessPolicyRequest,
  output: DisassociateAccessPolicyResponse,
  errors: [InvalidRequestException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateAccessPolicy",
}));

export type DisassociateIdentityProviderConfigError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Disassociates an identity provider configuration from a cluster.
 *
 * If you disassociate an identity provider from your cluster, users included in the
 * provider can no longer access the cluster. However, you can still access the cluster
 * with IAM principals.
 */
export const disassociateIdentityProviderConfig: API.OperationMethod<
  DisassociateIdentityProviderConfigRequest,
  DisassociateIdentityProviderConfigResponse,
  DisassociateIdentityProviderConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateIdentityProviderConfigRequest,
  output: DisassociateIdentityProviderConfigResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateIdentityProviderConfig",
}));

export type ListAccessEntriesError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Lists the access entries for your cluster.
 */
export const listAccessEntries: API.PaginatedOperationMethod<
  ListAccessEntriesRequest,
  ListAccessEntriesResponse,
  ListAccessEntriesError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessEntriesRequest,
  output: ListAccessEntriesResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessEntries",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accessEntries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAccessPoliciesError = ServerException | CommonErrors;
/**
 * Lists the available access policies.
 */
export const listAccessPolicies: API.PaginatedOperationMethod<
  ListAccessPoliciesRequest,
  ListAccessPoliciesResponse,
  ListAccessPoliciesError,
  Credentials | HttpClient.HttpClient,
  AccessPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccessPoliciesRequest,
  output: ListAccessPoliciesResponse,
  errors: [ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccessPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "accessPolicies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAddonsError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Lists the installed add-ons.
 */
export const listAddons: API.PaginatedOperationMethod<
  ListAddonsRequest,
  ListAddonsResponse,
  ListAddonsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAddonsRequest,
  output: ListAddonsResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAddons",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "addons",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAssociatedAccessPoliciesError =
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Lists the access policies associated with an access entry.
 */
export const listAssociatedAccessPolicies: API.PaginatedOperationMethod<
  ListAssociatedAccessPoliciesRequest,
  ListAssociatedAccessPoliciesResponse,
  ListAssociatedAccessPoliciesError,
  Credentials | HttpClient.HttpClient,
  AssociatedAccessPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAssociatedAccessPoliciesRequest,
  output: ListAssociatedAccessPoliciesResponse,
  errors: [InvalidRequestException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociatedAccessPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "associatedAccessPolicies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCapabilitiesError = InvalidParameterException | ServerException | CommonErrors;
/**
 * Lists all managed capabilities in your Amazon EKS cluster. You can use this operation to get an overview of all capabilities and their current status.
 */
export const listCapabilities: API.PaginatedOperationMethod<
  ListCapabilitiesRequest,
  ListCapabilitiesResponse,
  ListCapabilitiesError,
  Credentials | HttpClient.HttpClient,
  CapabilitySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCapabilitiesRequest,
  output: ListCapabilitiesResponse,
  errors: [InvalidParameterException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCapabilities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "capabilities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCertificateAuthoritiesError =
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the certificate authorities (CAs) for your cluster. A cluster has at most two
 * certificate authorities: the outgoing CA that's currently signing and, during a rotation,
 * one successor CA.
 */
export const listCertificateAuthorities: API.PaginatedOperationMethod<
  ListCertificateAuthoritiesRequest,
  ListCertificateAuthoritiesResponse,
  ListCertificateAuthoritiesError,
  Credentials | HttpClient.HttpClient,
  CertificateAuthoritySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCertificateAuthoritiesRequest,
  output: ListCertificateAuthoritiesResponse,
  errors: [
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCertificateAuthorities",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "certificateAuthorities",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListClustersError =
  | ClientException
  | InvalidParameterException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the Amazon EKS clusters in your Amazon Web Services account in the specified Amazon Web Services Region.
 */
export const listClusters: API.PaginatedOperationMethod<
  ListClustersRequest,
  ListClustersResponse,
  ListClustersError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListClustersRequest,
  output: ListClustersResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "clusters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEksAnywhereSubscriptionsError =
  | ClientException
  | InvalidParameterException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Displays the full description of the subscription.
 */
export const listEksAnywhereSubscriptions: API.PaginatedOperationMethod<
  ListEksAnywhereSubscriptionsRequest,
  ListEksAnywhereSubscriptionsResponse,
  ListEksAnywhereSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  EksAnywhereSubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEksAnywhereSubscriptionsRequest,
  output: ListEksAnywhereSubscriptionsResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEksAnywhereSubscriptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "subscriptions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFargateProfilesError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services
 * account in the specified Amazon Web Services Region.
 */
export const listFargateProfiles: API.PaginatedOperationMethod<
  ListFargateProfilesRequest,
  ListFargateProfilesResponse,
  ListFargateProfilesError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFargateProfilesRequest,
  output: ListFargateProfilesResponse,
  errors: [ClientException, InvalidParameterException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFargateProfiles",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "fargateProfileNames",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIdentityProviderConfigsError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the identity provider configurations for your cluster.
 */
export const listIdentityProviderConfigs: API.PaginatedOperationMethod<
  ListIdentityProviderConfigsRequest,
  ListIdentityProviderConfigsResponse,
  ListIdentityProviderConfigsError,
  Credentials | HttpClient.HttpClient,
  IdentityProviderConfig
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdentityProviderConfigsRequest,
  output: ListIdentityProviderConfigsResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentityProviderConfigs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "identityProviderConfigs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListInsightsError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Returns a list of all insights checked for against the specified cluster. You can
 * filter which insights are returned by category, associated Kubernetes version, and
 * status. The default filter lists all categories and every status.
 *
 * The following lists the available categories:
 *
 * - `UPGRADE_READINESS`: Amazon EKS identifies issues that could impact your
 * ability to upgrade to new versions of Kubernetes. These are called upgrade insights.
 *
 * - `MISCONFIGURATION`: Amazon EKS identifies misconfiguration in your EKS
 * Hybrid Nodes setup that could impair functionality of your cluster or
 * workloads. These are called configuration insights.
 */
export const listInsights: API.PaginatedOperationMethod<
  ListInsightsRequest,
  ListInsightsResponse,
  ListInsightsError,
  Credentials | HttpClient.HttpClient,
  InsightSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInsightsRequest,
  output: ListInsightsResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInsights",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "insights",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNodegroupsError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Lists the managed node groups associated with the specified cluster in your Amazon Web Services
 * account in the specified Amazon Web Services Region. Self-managed node groups aren't listed.
 */
export const listNodegroups: API.PaginatedOperationMethod<
  ListNodegroupsRequest,
  ListNodegroupsResponse,
  ListNodegroupsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNodegroupsRequest,
  output: ListNodegroupsResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    ResourceNotFoundException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNodegroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "nodegroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPodIdentityAssociationsError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the
 * association is in or the service account that the association uses.
 */
export const listPodIdentityAssociations: API.PaginatedOperationMethod<
  ListPodIdentityAssociationsRequest,
  ListPodIdentityAssociationsResponse,
  ListPodIdentityAssociationsError,
  Credentials | HttpClient.HttpClient,
  PodIdentityAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPodIdentityAssociationsRequest,
  output: ListPodIdentityAssociationsResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPodIdentityAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "associations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = BadRequestException | NotFoundException | CommonErrors;
/**
 * List the tags for an Amazon EKS resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [BadRequestException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListUpdatesError =
  | ClientException
  | InvalidParameterException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the
 * specified Amazon Web Services Region.
 */
export const listUpdates: API.PaginatedOperationMethod<
  ListUpdatesRequest,
  ListUpdatesResponse,
  ListUpdatesError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUpdatesRequest,
  output: ListUpdatesResponse,
  errors: [ClientException, InvalidParameterException, ResourceNotFoundException, ServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUpdates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "updateIds",
    pageSize: "maxResults",
  } as const,
})) as any;

export type RegisterClusterError =
  | AccessDeniedException
  | ClientException
  | InvalidParameterException
  | ResourceInUseException
  | ResourceLimitExceededException
  | ResourcePropagationDelayException
  | ServerException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Connects a Kubernetes cluster to the Amazon EKS control plane.
 *
 * Any Kubernetes cluster can be connected to the Amazon EKS control plane to view current
 * information about the cluster and its nodes.
 *
 * Cluster connection requires two steps. First, send a
 * `RegisterClusterRequest`
 * to add it to the Amazon EKS control
 * plane.
 *
 * Second, a Manifest containing the `activationID` and
 * `activationCode` must be applied to the Kubernetes cluster through it's native
 * provider to provide visibility.
 *
 * After the manifest is updated and applied, the connected cluster is visible to the
 * Amazon EKS control plane. If the manifest isn't applied within three days, the connected
 * cluster will no longer be visible and must be deregistered using
 * `DeregisterCluster`.
 */
export const registerCluster: API.OperationMethod<
  RegisterClusterRequest,
  RegisterClusterResponse,
  RegisterClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterClusterRequest,
  output: RegisterClusterResponse,
  errors: [
    AccessDeniedException,
    ClientException,
    InvalidParameterException,
    ResourceInUseException,
    ResourceLimitExceededException,
    ResourcePropagationDelayException,
    ServerException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCluster",
}));

export type StartInsightsRefreshError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Initiates an on-demand refresh operation for cluster insights, getting the latest analysis outside of the standard refresh schedule.
 */
export const startInsightsRefresh: API.OperationMethod<
  StartInsightsRefreshRequest,
  StartInsightsRefreshResponse,
  StartInsightsRefreshError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartInsightsRefreshRequest,
  output: StartInsightsRefreshResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartInsightsRefresh",
}));

export type TagResourceError = BadRequestException | NotFoundException | CommonErrors;
/**
 * Associates the specified tags to an Amazon EKS resource with the specified
 * `resourceArn`. If existing tags on a resource are not specified in the
 * request parameters, they aren't changed. When a resource is deleted, the tags associated
 * with that resource are also deleted. Tags that you create for Amazon EKS resources don't
 * propagate to any other resources associated with the cluster. For example, if you tag a
 * cluster with this operation, that tag doesn't automatically propagate to the subnets and
 * nodes associated with the cluster.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [BadRequestException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = BadRequestException | NotFoundException | CommonErrors;
/**
 * Deletes specified tags from an Amazon EKS resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [BadRequestException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAccessEntryError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates an access entry.
 */
export const updateAccessEntry: API.OperationMethod<
  UpdateAccessEntryRequest,
  UpdateAccessEntryResponse,
  UpdateAccessEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccessEntryRequest,
  output: UpdateAccessEntryResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccessEntry",
}));

export type UpdateAddonError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates an Amazon EKS add-on.
 */
export const updateAddon: API.OperationMethod<
  UpdateAddonRequest,
  UpdateAddonResponse,
  UpdateAddonError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAddonRequest,
  output: UpdateAddonResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAddon",
}));

export type UpdateCapabilityError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates the configuration of a managed capability in your Amazon EKS cluster. You can update the IAM role, configuration settings, and delete propagation policy for a capability.
 *
 * When you update a capability, Amazon EKS applies the changes and may restart capability components as needed. The capability remains available during the update process, but some operations may be temporarily unavailable.
 */
export const updateCapability: API.OperationMethod<
  UpdateCapabilityRequest,
  UpdateCapabilityResponse,
  UpdateCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCapabilityRequest,
  output: UpdateCapabilityResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCapability",
}));

export type UpdateClusterConfigError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an Amazon EKS cluster configuration. Your cluster continues to function during the
 * update. The response output includes an update ID that you can use to track the status
 * of your cluster update with `DescribeUpdate`.
 *
 * You can use this operation to do the following actions:
 *
 * - You can use this API operation to enable or disable exporting the Kubernetes
 * control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane
 * logs aren't exported to CloudWatch Logs. For more information, see Amazon EKS Cluster control plane logs in the
 *
 * *Amazon EKS User Guide*
 * .
 *
 * CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
 * exported control plane logs. For more information, see CloudWatch Pricing.
 *
 * - You can also use this API operation to enable or disable public and private
 * access to your cluster's Kubernetes API server endpoint. By default, public access is
 * enabled, and private access is disabled. For more information, see
 * Cluster API server endpoint in the
 *
 * *Amazon EKS User Guide*
 * .
 *
 * - You can also use this API operation to choose different subnets and security
 * groups for the cluster. You must specify at least two subnets that are in
 * different Availability Zones. You can't change which VPC the subnets are from, the subnets
 * must be in the same VPC as the subnets that the cluster was created with. For
 * more information about the VPC requirements, see https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html in the
 *
 * *Amazon EKS User Guide*
 * .
 *
 * - You can also use this API operation to enable or disable ARC zonal shift. If
 * zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster.
 *
 * - You can also use this API operation to add, change, or remove the
 * configuration in the cluster for EKS Hybrid Nodes. To remove the configuration,
 * use the `remoteNetworkConfig` key with an object containing both
 * subkeys with empty arrays for each. Here is an inline example:
 * "remoteNetworkConfig": { "remoteNodeNetworks": [],
 * "remotePodNetworks": [] }.
 *
 * Cluster updates are asynchronous, and they should finish within a few minutes. During
 * an update, the cluster status moves to `UPDATING` (this status transition is
 * eventually consistent). When the update is complete (either `Failed` or
 * `Successful`), the cluster status moves to `Active`.
 */
export const updateClusterConfig: API.OperationMethod<
  UpdateClusterConfigRequest,
  UpdateClusterConfigResponse,
  UpdateClusterConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateClusterConfigRequest,
  output: UpdateClusterConfigResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateClusterConfig",
}));

export type UpdateClusterVersionError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | InvalidStateException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to
 * function during the update. The response output includes an update ID that you can use
 * to track the status of your cluster update with the
 * `DescribeUpdate`
 * API operation.
 *
 * Cluster updates are asynchronous, and they should finish within a few minutes. During
 * an update, the cluster status moves to `UPDATING` (this status transition is
 * eventually consistent). When the update is complete (either `Failed` or
 * `Successful`), the cluster status moves to `Active`.
 *
 * If your cluster has managed node groups attached to it, all of your node groups' Kubernetes
 * versions must match the cluster's Kubernetes version in order to update the cluster to a new
 * Kubernetes version.
 */
export const updateClusterVersion: API.OperationMethod<
  UpdateClusterVersionRequest,
  UpdateClusterVersionResponse,
  UpdateClusterVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateClusterVersionRequest,
  output: UpdateClusterVersionResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    InvalidStateException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateClusterVersion",
}));

export type UpdateEksAnywhereSubscriptionError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Update an EKS Anywhere Subscription. Only auto renewal and tags can be updated after
 * subscription creation.
 */
export const updateEksAnywhereSubscription: API.OperationMethod<
  UpdateEksAnywhereSubscriptionRequest,
  UpdateEksAnywhereSubscriptionResponse,
  UpdateEksAnywhereSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEksAnywhereSubscriptionRequest,
  output: UpdateEksAnywhereSubscriptionResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEksAnywhereSubscription",
}));

export type UpdateNodegroupConfigError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates an Amazon EKS managed node group configuration. Your node group continues to
 * function during the update. The response output includes an update ID that you can use
 * to track the status of your node group update with the
 * `DescribeUpdate`
 * API operation. You can update the Kubernetes labels
 * and taints for a node group and the scaling and version update configuration.
 */
export const updateNodegroupConfig: API.OperationMethod<
  UpdateNodegroupConfigRequest,
  UpdateNodegroupConfigResponse,
  UpdateNodegroupConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNodegroupConfigRequest,
  output: UpdateNodegroupConfigResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNodegroupConfig",
}));

export type UpdateNodegroupVersionError =
  | ClientException
  | InvalidParameterException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.
 *
 * You can update a node group using a launch template only if the node group was
 * originally deployed with a launch template. Additionally, the launch template ID or name
 * must match what was used when the node group was created. You can update the launch
 * template version with necessary changes.
 *
 * If you need to update a custom AMI in a node group that was deployed with a launch
 * template, then update your custom AMI, specify the new ID in a new version of the launch
 * template, and then update the node group to the new version of the launch
 * template.
 *
 * If you update without a launch template, then you can update to the latest available
 * AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in
 * the request. You can update to the latest AMI version of your cluster's current Kubernetes
 * version by specifying your cluster's Kubernetes version in the request. For information about
 * Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the
 * *Amazon EKS User Guide*. For information about Windows versions, see Amazon EKS
 * optimized Windows AMI versions in the *Amazon EKS User Guide*.
 *
 * You cannot roll back a node group to an earlier Kubernetes version or AMI version.
 *
 * When a node in a managed node group is terminated due to a scaling action or update,
 * every `Pod` on that node is drained first. Amazon EKS attempts to drain the nodes
 * gracefully and will fail if it is unable to do so. You can `force` the update
 * if Amazon EKS is unable to drain the nodes as a result of a `Pod` disruption
 * budget issue.
 */
export const updateNodegroupVersion: API.OperationMethod<
  UpdateNodegroupVersionRequest,
  UpdateNodegroupVersionResponse,
  UpdateNodegroupVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNodegroupVersionRequest,
  output: UpdateNodegroupVersionResponse,
  errors: [
    ClientException,
    InvalidParameterException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNodegroupVersion",
}));

export type UpdatePodIdentityAssociationError =
  | InvalidParameterException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServerException
  | CommonErrors;
/**
 * Updates a EKS Pod Identity association. In an update, you can change the IAM role, the target IAM role, or `disableSessionTags`.
 * You must change at least one of these in an update. An association can't be moved
 * between clusters, namespaces, or service accounts. If you need to edit the namespace
 * or service account, you need to delete the association and then create a new
 * association with your desired settings.
 *
 * Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent,
 * and may take several seconds to be effective after the initial API call returns
 * successfully. You must design your applications to account for these potential delays.
 * We recommend that you don't include association create/updates in the
 * critical, high-availability code paths of your application. Instead, make changes in a
 * separate initialization or setup routine that you run less frequently.
 *
 * You can set a *target IAM role* in the same or a different
 * account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two
 * role assumptions in sequence: first assuming the role in the association that is in this
 * account, then using those credentials to assume the target IAM role. This process
 * provides your Pod with temporary credentials that have the permissions defined in the
 * target role, allowing secure access to resources in another Amazon Web Services account.
 */
export const updatePodIdentityAssociation: API.OperationMethod<
  UpdatePodIdentityAssociationRequest,
  UpdatePodIdentityAssociationResponse,
  UpdatePodIdentityAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePodIdentityAssociationRequest,
  output: UpdatePodIdentityAssociationResponse,
  errors: [
    InvalidParameterException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServerException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePodIdentityAssociation",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          certificateAuthorityId: S.String.pipe(T.HttpLabel("certificateAuthorityId")),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/certificate-authorities/{certificateAuthorityId}/activate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ActivateCertificateAuthorityRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ type: S.optional(UpdateParamType), value: S.optional(S.String) }),
      ).annotate({ identifier: "UpdateParam" });
    case 2:
      return S.Array(UpdateParam);
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          errorCode: S.optional(ErrorCode),
          errorMessage: S.optional(S.String),
          resourceIds: S.optional(StringList),
        }),
      ).annotate({ identifier: "ErrorDetail" });
    case 5:
      return S.Array(ErrorDetail);
    case 6:
      return S.suspend(() =>
        S.Struct({ status: S.optional(CancellationStatus), reason: S.optional(S.String) }),
      ).annotate({ identifier: "Cancellation" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          status: S.optional(UpdateStatus),
          type: S.optional(UpdateType),
          params: S.optional(UpdateParams),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          errors: S.optional(ErrorDetails),
          cancellation: S.optional(Cancellation),
        }),
      ).annotate({ identifier: "Update" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(CertificateAuthorityCreatedBy),
          activatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          activatedBy: S.optional(CertificateAuthorityActivatedBy),
          signingStatus: S.optional(CertificateAuthoritySigningStatus),
          distributionStatus: S.optional(CertificateAuthorityDistributionStatus),
        }),
      ).annotate({
        identifier: "CertificateAuthoritySummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          update: S.optional(Update),
          certificateAuthority: S.optional(CertificateAuthoritySummary),
        }),
      ).annotate({
        identifier: "ActivateCertificateAuthorityResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ type: S.optional(AccessScopeType), namespaces: S.optional(StringList) }),
      ).annotate({ identifier: "AccessScope" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String.pipe(T.HttpLabel("principalArn")),
          policyArn: S.String,
          accessScope: AccessScope,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/access-entries/{principalArn}/access-policies",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateAccessPolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyArn: S.optional(S.String),
          accessScope: S.optional(AccessScope),
          associatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AssociatedAccessPolicy" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.optional(S.String),
          principalArn: S.optional(S.String),
          associatedAccessPolicy: S.optional(AssociatedAccessPolicy),
        }),
      ).annotate({
        identifier: "AssociateAccessPolicyResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ keyArn: S.optional(S.String) })).annotate({
        identifier: "Provider",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ resources: S.optional(StringList), provider: S.optional(Provider) }),
      ).annotate({ identifier: "EncryptionConfig" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EncryptionConfig);
    case 1:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          encryptionConfig: EncryptionConfigList,
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/encryption-config/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateEncryptionConfigRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ update: S.optional(Update) })).annotate({
        identifier: "AssociateEncryptionConfigResponse",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          identityProviderConfigName: S.String,
          issuerUrl: S.String,
          clientId: S.String,
          usernameClaim: S.optional(S.String),
          usernamePrefix: S.optional(S.String),
          groupsClaim: S.optional(S.String),
          groupsPrefix: S.optional(S.String),
          requiredClaims: S.optional(RequiredClaimsMap),
        }),
      ).annotate({
        identifier: "OidcIdentityProviderConfigRequest",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          oidc: OidcIdentityProviderConfigRequest,
          tags: S.optional(TagMap),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/identity-provider-configs/associate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateIdentityProviderConfigRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ update: S.optional(Update), tags: S.optional(TagMap) }),
      ).annotate({
        identifier: "AssociateIdentityProviderConfigResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          updateId: S.String.pipe(T.HttpLabel("updateId")),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{name}/updates/{updateId}/cancel-update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelUpdateRequest" });
    case 1:
      return S.suspend(() => S.Struct({ update: S.optional(Update) })).annotate({
        identifier: "CancelUpdateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String,
          kubernetesGroups: S.optional(StringList),
          tags: S.optional(TagMap),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          username: S.optional(S.String),
          type: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/access-entries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAccessEntryRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.optional(S.String),
          principalArn: S.optional(S.String),
          kubernetesGroups: S.optional(StringList),
          accessEntryArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(TagMap),
          username: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccessEntry" });
    case 4:
      return S.suspend(() => S.Struct({ accessEntry: S.optional(AccessEntry) })).annotate({
        identifier: "CreateAccessEntryResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ serviceAccount: S.String, roleArn: S.String })).annotate({
        identifier: "AddonPodIdentityAssociations",
      });
    case 6:
      return S.Array(AddonPodIdentityAssociations);
    case 7:
      return S.suspend(() => S.Struct({ namespace: S.optional(S.String) })).annotate({
        identifier: "AddonNamespaceConfigRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          addonName: S.String,
          addonVersion: S.optional(S.String),
          serviceAccountRoleArn: S.optional(S.String),
          resolveConflicts: S.optional(ResolveConflicts),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          configurationValues: S.optional(S.String),
          podIdentityAssociations: S.optional(AddonPodIdentityAssociationsList),
          namespaceConfig: S.optional(AddonNamespaceConfigRequest),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/addons" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateAddonRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          code: S.optional(AddonIssueCode),
          message: S.optional(S.String),
          resourceIds: S.optional(StringList),
        }),
      ).annotate({ identifier: "AddonIssue" });
    case 2:
      return S.Array(AddonIssue);
    case 3:
      return S.suspend(() => S.Struct({ issues: S.optional(AddonIssueList) })).annotate({
        identifier: "AddonHealth",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ productId: S.optional(S.String), productUrl: S.optional(S.String) }),
      ).annotate({ identifier: "MarketplaceInformation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          addonName: S.optional(S.String),
          clusterName: S.optional(S.String),
          status: S.optional(AddonStatus),
          addonVersion: S.optional(S.String),
          health: S.optional(AddonHealth),
          addonArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          serviceAccountRoleArn: S.optional(S.String),
          tags: S.optional(TagMap),
          publisher: S.optional(S.String),
          owner: S.optional(S.String),
          marketplaceInformation: S.optional(MarketplaceInformation),
          configurationValues: S.optional(S.String),
          podIdentityAssociations: S.optional(StringList),
          namespaceConfig: S.optional(AddonNamespaceConfigResponse),
        }),
      ).annotate({ identifier: "Addon" });
    case 6:
      return S.suspend(() => S.Struct({ addon: S.optional(Addon) })).annotate({
        identifier: "CreateAddonResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ idcInstanceArn: S.String, idcRegion: S.optional(S.String) }),
      ).annotate({
        identifier: "ArgoCdAwsIdcConfigRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String, type: SsoIdentityType })).annotate({
        identifier: "SsoIdentity",
      });
    case 1:
      return S.Array(SsoIdentity);
    case 2:
      return S.suspend(() => S.Struct({ role: ArgoCdRole, identities: SsoIdentityList })).annotate({
        identifier: "ArgoCdRoleMapping",
      });
    case 3:
      return S.Array(ArgoCdRoleMapping);
    case 4:
      return S.suspend(() => S.Struct({ vpceIds: S.optional(StringList) })).annotate({
        identifier: "ArgoCdNetworkAccessConfigRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          namespace: S.optional(S.String),
          awsIdc: ArgoCdAwsIdcConfigRequest,
          rbacRoleMappings: S.optional(ArgoCdRoleMappingList),
          networkAccess: S.optional(ArgoCdNetworkAccessConfigRequest),
          endpointPrefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "ArgoCdConfigRequest" });
    case 6:
      return S.suspend(() => S.Struct({ argoCd: S.optional(ArgoCdConfigRequest) })).annotate({
        identifier: "CapabilityConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          capabilityName: S.String,
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          type: CapabilityType,
          roleArn: S.String,
          configuration: S.optional(CapabilityConfigurationRequest),
          tags: S.optional(TagMap),
          deletePropagationPolicy: CapabilityDeletePropagationPolicy,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/capabilities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateCapabilityRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          idcInstanceArn: S.optional(S.String),
          idcRegion: S.optional(S.String),
          idcManagedApplicationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ArgoCdAwsIdcConfigResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          namespace: S.optional(S.String),
          awsIdc: S.optional(ArgoCdAwsIdcConfigResponse),
          rbacRoleMappings: S.optional(ArgoCdRoleMappingList),
          networkAccess: S.optional(ArgoCdNetworkAccessConfigResponse),
          serverUrl: S.optional(S.String),
          endpointPrefix: S.optional(S.String),
        }),
      ).annotate({ identifier: "ArgoCdConfigResponse" });
    case 2:
      return S.suspend(() => S.Struct({ argoCd: S.optional(ArgoCdConfigResponse) })).annotate({
        identifier: "CapabilityConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ code: S.optional(CapabilityIssueCode), message: S.optional(S.String) }),
      ).annotate({ identifier: "CapabilityIssue" });
    case 4:
      return S.Array(CapabilityIssue);
    case 5:
      return S.suspend(() => S.Struct({ issues: S.optional(CapabilityIssueList) })).annotate({
        identifier: "CapabilityHealth",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          capabilityName: S.optional(S.String),
          arn: S.optional(S.String),
          clusterName: S.optional(S.String),
          type: S.optional(CapabilityType),
          roleArn: S.optional(S.String),
          status: S.optional(CapabilityStatus),
          version: S.optional(S.String),
          configuration: S.optional(CapabilityConfigurationResponse),
          tags: S.optional(TagMap),
          health: S.optional(CapabilityHealth),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deletePropagationPolicy: S.optional(CapabilityDeletePropagationPolicy),
        }),
      ).annotate({ identifier: "Capability" });
    case 7:
      return S.suspend(() => S.Struct({ capability: S.optional(Capability) })).annotate({
        identifier: "CreateCapabilityResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/certificate-authorities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCertificateAuthorityRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          subnetIds: S.optional(StringList),
          securityGroupIds: S.optional(StringList),
          endpointPublicAccess: S.optional(S.Boolean),
          endpointPrivateAccess: S.optional(S.Boolean),
          publicAccessCidrs: S.optional(StringList),
          controlPlaneEgressMode: S.optional(ControlPlaneEgressModeType),
        }),
      ).annotate({ identifier: "VpcConfigRequest" });
    case 2:
      return S.suspend(() => S.Struct({ enabled: S.optional(S.Boolean) })).annotate({
        identifier: "ElasticLoadBalancing",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceIpv4Cidr: S.optional(S.String),
          ipFamily: S.optional(IpFamily),
          elasticLoadBalancing: S.optional(ElasticLoadBalancing),
        }),
      ).annotate({
        identifier: "KubernetesNetworkConfigRequest",
      });
    case 4:
      return S.Array(LogType);
    case 5:
      return S.suspend(() =>
        S.Struct({ types: S.optional(LogTypes), enabled: S.optional(S.Boolean) }),
      ).annotate({ identifier: "LogSetup" });
    case 6:
      return S.Array(LogSetup);
    case 7:
      return S.suspend(() => S.Struct({ clusterLogging: S.optional(LogSetups) })).annotate({
        identifier: "Logging",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ groupName: S.optional(S.String), spreadLevel: S.optional(SpreadLevel) }),
      ).annotate({
        identifier: "ControlPlanePlacementRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ spreadLevel: S.optional(SpreadLevel) })).annotate({
        identifier: "EtcdPlacementRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          outpostArns: StringList,
          controlPlaneInstanceType: S.String,
          controlPlanePlacement: S.optional(ControlPlanePlacementRequest),
          etcdInstanceType: S.optional(S.String),
          etcdPlacement: S.optional(EtcdPlacementRequest),
        }),
      ).annotate({ identifier: "OutpostConfigRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          bootstrapClusterCreatorAdminPermissions: S.optional(S.Boolean),
          authenticationMode: S.optional(AuthenticationMode),
        }),
      ).annotate({
        identifier: "CreateAccessConfigRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ supportType: S.optional(SupportType) })).annotate({
        identifier: "UpgradePolicyRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ cidrs: S.optional(StringList) })).annotate({
        identifier: "RemoteNodeNetwork",
      });
    case 6:
      return S.Array(RemoteNodeNetwork);
    case 7:
      return S.suspend(() =>
        S.Struct({
          remoteNodeNetworks: S.optional(RemoteNodeNetworkList),
          remotePodNetworks: S.optional(RemotePodNetworkList),
        }),
      ).annotate({
        identifier: "RemoteNetworkConfigRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          nodePools: S.optional(StringList),
          nodeRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ComputeConfigRequest" });
    case 1:
      return S.suspend(() => S.Struct({ blockStorage: S.optional(BlockStorage) })).annotate({
        identifier: "StorageConfigRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ tier: S.optional(ProvisionedControlPlaneTier) })).annotate({
        identifier: "ControlPlaneScalingConfig",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ minPort: S.optional(S.Number), maxPort: S.optional(S.Number) }),
      ).annotate({ identifier: "ServiceNodePortRange" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          eventTtl: S.optional(S.String),
          serviceNodePortRange: S.optional(ServiceNodePortRange),
        }),
      ).annotate({
        identifier: "KubeApiServerConfigRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), weight: S.optional(S.Number) }),
      ).annotate({ identifier: "ResourceWeight" });
    case 6:
      return S.Array(ResourceWeight);
    case 7:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(ScoringStrategyType),
          resources: S.optional(ResourceWeightList),
        }),
      ).annotate({ identifier: "ScoringStrategy" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ scoringStrategy: S.optional(ScoringStrategy) })).annotate({
        identifier: "NodeResourcesFitConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ nodeResourcesFit: S.optional(NodeResourcesFitConfig) }),
      ).annotate({
        identifier: "KubeSchedulerConfigRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ terminatedPodGcThreshold: S.optional(S.Number) })).annotate(
        {
          identifier: "PodGcControllerConfigRequest",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ horizontalPodAutoscalerSyncPeriod: S.optional(S.String) }),
      ).annotate({
        identifier: "HorizontalPodAutoscalerControllerConfigRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          podGcControllerConfig: S.optional(PodGcControllerConfigRequest),
          horizontalPodAutoscalerControllerConfig: S.optional(
            HorizontalPodAutoscalerControllerConfigRequest,
          ),
        }),
      ).annotate({
        identifier: "KubeControllerManagerConfigRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          version: S.optional(S.String),
          roleArn: S.String,
          resourcesVpcConfig: VpcConfigRequest,
          kubernetesNetworkConfig: S.optional(KubernetesNetworkConfigRequest),
          logging: S.optional(Logging),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          encryptionConfig: S.optional(EncryptionConfigList),
          outpostConfig: S.optional(OutpostConfigRequest),
          accessConfig: S.optional(CreateAccessConfigRequest),
          bootstrapSelfManagedAddons: S.optional(S.Boolean),
          upgradePolicy: S.optional(UpgradePolicyRequest),
          zonalShiftConfig: S.optional(ZonalShiftConfigRequest),
          remoteNetworkConfig: S.optional(RemoteNetworkConfigRequest),
          computeConfig: S.optional(ComputeConfigRequest),
          storageConfig: S.optional(StorageConfigRequest),
          deletionProtection: S.optional(S.Boolean),
          controlPlaneScalingConfig: S.optional(ControlPlaneScalingConfig),
          kubeApiServerConfig: S.optional(KubeApiServerConfigRequest),
          kubeSchedulerConfig: S.optional(KubeSchedulerConfigRequest),
          kubeControllerManagerConfig: S.optional(KubeControllerManagerConfigRequest),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/clusters" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateClusterRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          subnetIds: S.optional(StringList),
          securityGroupIds: S.optional(StringList),
          clusterSecurityGroupId: S.optional(S.String),
          vpcId: S.optional(S.String),
          endpointPublicAccess: S.optional(S.Boolean),
          endpointPrivateAccess: S.optional(S.Boolean),
          publicAccessCidrs: S.optional(StringList),
          controlPlaneEgressMode: S.optional(ControlPlaneEgressModeType),
        }),
      ).annotate({ identifier: "VpcConfigResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceIpv4Cidr: S.optional(S.String),
          serviceIpv6Cidr: S.optional(S.String),
          ipFamily: S.optional(IpFamily),
          elasticLoadBalancing: S.optional(ElasticLoadBalancing),
        }),
      ).annotate({
        identifier: "KubernetesNetworkConfigResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ issuer: S.optional(S.String) })).annotate({
        identifier: "OIDC",
      });
    case 1:
      return S.suspend(() => S.Struct({ oidc: S.optional(OIDC) })).annotate({
        identifier: "Identity",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          activatedBy: S.optional(CertificateAuthorityActivatedBy),
        }),
      ).annotate({
        identifier: "ActiveCertificateAuthority",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ data: S.optional(S.String), active: S.optional(ActiveCertificateAuthority) }),
      ).annotate({ identifier: "Certificate" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          activationId: S.optional(S.String),
          activationCode: S.optional(S.String),
          activationExpiry: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          provider: S.optional(S.String),
          roleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectorConfigResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          bootstrapClusterCreatorAdminPermissions: S.optional(S.Boolean),
          authenticationMode: S.optional(AuthenticationMode),
        }),
      ).annotate({ identifier: "AccessConfigResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          version: S.optional(S.String),
          endpoint: S.optional(S.String),
          roleArn: S.optional(S.String),
          resourcesVpcConfig: S.optional(VpcConfigResponse),
          kubernetesNetworkConfig: S.optional(KubernetesNetworkConfigResponse),
          logging: S.optional(Logging),
          identity: S.optional(Identity),
          status: S.optional(ClusterStatus),
          certificateAuthority: S.optional(Certificate),
          clientRequestToken: S.optional(S.String),
          platformVersion: S.optional(S.String),
          tags: S.optional(TagMap),
          encryptionConfig: S.optional(EncryptionConfigList),
          connectorConfig: S.optional(ConnectorConfigResponse),
          id: S.optional(S.String),
          health: S.optional(ClusterHealth),
          outpostConfig: S.optional(OutpostConfigResponse),
          accessConfig: S.optional(AccessConfigResponse),
          upgradePolicy: S.optional(UpgradePolicyResponse),
          zonalShiftConfig: S.optional(ZonalShiftConfigResponse),
          remoteNetworkConfig: S.optional(RemoteNetworkConfigResponse),
          computeConfig: S.optional(ComputeConfigResponse),
          storageConfig: S.optional(StorageConfigResponse),
          deletionProtection: S.optional(S.Boolean),
          controlPlaneScalingConfig: S.optional(ControlPlaneScalingConfig),
          kubeApiServerConfig: S.optional(KubeApiServerConfigResponse),
          kubeSchedulerConfig: S.optional(KubeSchedulerConfigResponse),
          kubeControllerManagerConfig: S.optional(KubeControllerManagerConfigResponse),
        }),
      ).annotate({ identifier: "Cluster" });
    case 7:
      return S.suspend(() => S.Struct({ cluster: S.optional(Cluster) })).annotate({
        identifier: "CreateClusterResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          duration: S.optional(S.Number),
          unit: S.optional(EksAnywhereSubscriptionTermUnit),
        }),
      ).annotate({
        identifier: "EksAnywhereSubscriptionTerm",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          term: EksAnywhereSubscriptionTerm,
          licenseQuantity: S.optional(S.Number),
          licenseType: S.optional(EksAnywhereSubscriptionLicenseType),
          autoRenew: S.optional(S.Boolean),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/eks-anywhere-subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEksAnywhereSubscriptionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), token: S.optional(S.String) }),
      ).annotate({ identifier: "License" });
    case 3:
      return S.Array(License);
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          effectiveDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          expirationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          licenseQuantity: S.optional(S.Number),
          licenseType: S.optional(EksAnywhereSubscriptionLicenseType),
          term: S.optional(EksAnywhereSubscriptionTerm),
          status: S.optional(S.String),
          autoRenew: S.optional(S.Boolean),
          licenseArns: S.optional(StringList),
          licenses: S.optional(LicenseList),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "EksAnywhereSubscription" });
    case 5:
      return S.suspend(() =>
        S.Struct({ subscription: S.optional(EksAnywhereSubscription) }),
      ).annotate({
        identifier: "CreateEksAnywhereSubscriptionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ namespace: S.optional(S.String), labels: S.optional(FargateProfileLabel) }),
      ).annotate({ identifier: "FargateProfileSelector" });
    case 7:
      return S.Array(FargateProfileSelector);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          fargateProfileName: S.String,
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          podExecutionRoleArn: S.String,
          subnets: S.optional(StringList),
          selectors: S.optional(FargateProfileSelectors),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/fargate-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateFargateProfileRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          fargateProfileName: S.optional(S.String),
          fargateProfileArn: S.optional(S.String),
          clusterName: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          podExecutionRoleArn: S.optional(S.String),
          subnets: S.optional(StringList),
          selectors: S.optional(FargateProfileSelectors),
          status: S.optional(FargateProfileStatus),
          tags: S.optional(TagMap),
          health: S.optional(FargateProfileHealth),
        }),
      ).annotate({ identifier: "FargateProfile" });
    case 2:
      return S.suspend(() => S.Struct({ fargateProfile: S.optional(FargateProfile) })).annotate({
        identifier: "CreateFargateProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          minSize: S.optional(S.Number),
          maxSize: S.optional(S.Number),
          desiredSize: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NodegroupScalingConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ec2SshKey: S.optional(S.String), sourceSecurityGroups: S.optional(StringList) }),
      ).annotate({ identifier: "RemoteAccessConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          key: S.optional(S.String),
          value: S.optional(S.String),
          effect: S.optional(TaintEffect),
        }),
      ).annotate({ identifier: "Taint" });
    case 6:
      return S.Array(Taint);
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          version: S.optional(S.String),
          id: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LaunchTemplateSpecification",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxUnavailable: S.optional(S.Number),
          maxUnavailablePercentage: S.optional(S.Number),
          updateStrategy: S.optional(NodegroupUpdateStrategies),
        }),
      ).annotate({ identifier: "NodegroupUpdateConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nodeMonitoringCondition: S.optional(S.String),
          nodeUnhealthyReason: S.optional(S.String),
          minRepairWaitTimeMins: S.optional(S.Number),
          repairAction: S.optional(RepairAction),
        }),
      ).annotate({
        identifier: "NodeRepairConfigOverrides",
      });
    case 2:
      return S.Array(NodeRepairConfigOverrides);
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          maxUnhealthyNodeThresholdCount: S.optional(S.Number),
          maxUnhealthyNodeThresholdPercentage: S.optional(S.Number),
          maxParallelNodesRepairedCount: S.optional(S.Number),
          maxParallelNodesRepairedPercentage: S.optional(S.Number),
          nodeRepairConfigOverrides: S.optional(NodeRepairConfigOverridesList),
        }),
      ).annotate({ identifier: "NodeRepairConfig" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          minSize: S.optional(S.Number),
          maxGroupPreparedCapacity: S.optional(S.Number),
          poolState: S.optional(WarmPoolState),
          reuseOnScaleIn: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "WarmPoolConfig" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          nodegroupName: S.String,
          scalingConfig: S.optional(NodegroupScalingConfig),
          diskSize: S.optional(S.Number),
          subnets: StringList,
          instanceTypes: S.optional(StringList),
          amiType: S.optional(AMITypes),
          remoteAccess: S.optional(RemoteAccessConfig),
          nodeRole: S.String,
          labels: S.optional(LabelsMap),
          taints: S.optional(TaintsList),
          tags: S.optional(TagMap),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          launchTemplate: S.optional(LaunchTemplateSpecification),
          updateConfig: S.optional(NodegroupUpdateConfig),
          nodeRepairConfig: S.optional(NodeRepairConfig),
          capacityType: S.optional(CapacityTypes),
          version: S.optional(S.String),
          releaseVersion: S.optional(S.String),
          warmPoolConfig: S.optional(WarmPoolConfig),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/node-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateNodegroupRequest" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.optional(S.String) })).annotate({
        identifier: "AutoScalingGroup",
      });
    case 7:
      return S.Array(AutoScalingGroup);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          autoScalingGroups: S.optional(AutoScalingGroupList),
          remoteAccessSecurityGroup: S.optional(S.String),
        }),
      ).annotate({ identifier: "NodegroupResources" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nodegroupName: S.optional(S.String),
          nodegroupArn: S.optional(S.String),
          clusterName: S.optional(S.String),
          version: S.optional(S.String),
          releaseVersion: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(NodegroupStatus),
          capacityType: S.optional(CapacityTypes),
          scalingConfig: S.optional(NodegroupScalingConfig),
          instanceTypes: S.optional(StringList),
          subnets: S.optional(StringList),
          remoteAccess: S.optional(RemoteAccessConfig),
          amiType: S.optional(AMITypes),
          nodeRole: S.optional(S.String),
          labels: S.optional(LabelsMap),
          taints: S.optional(TaintsList),
          resources: S.optional(NodegroupResources),
          diskSize: S.optional(S.Number),
          health: S.optional(NodegroupHealth),
          updateConfig: S.optional(NodegroupUpdateConfig),
          nodeRepairConfig: S.optional(NodeRepairConfig),
          launchTemplate: S.optional(LaunchTemplateSpecification),
          tags: S.optional(TagMap),
          warmPoolConfig: S.optional(WarmPoolConfig),
        }),
      ).annotate({ identifier: "Nodegroup" });
    case 2:
      return S.suspend(() => S.Struct({ nodegroup: S.optional(Nodegroup) })).annotate({
        identifier: "CreateNodegroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          namespace: S.String,
          serviceAccount: S.String,
          roleArn: S.String,
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
          disableSessionTags: S.optional(S.Boolean),
          targetRoleArn: S.optional(S.String),
          policy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/pod-identity-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePodIdentityAssociationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.optional(S.String),
          namespace: S.optional(S.String),
          serviceAccount: S.optional(S.String),
          roleArn: S.optional(S.String),
          associationArn: S.optional(S.String),
          associationId: S.optional(S.String),
          tags: S.optional(TagMap),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ownerArn: S.optional(S.String),
          disableSessionTags: S.optional(S.Boolean),
          targetRoleArn: S.optional(S.String),
          externalId: S.optional(S.String),
          policy: S.optional(S.String),
        }),
      ).annotate({ identifier: "PodIdentityAssociation" });
    case 5:
      return S.suspend(() =>
        S.Struct({ association: S.optional(PodIdentityAssociation) }),
      ).annotate({
        identifier: "CreatePodIdentityAssociationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String.pipe(T.HttpLabel("principalArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/access-entries/{principalArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAccessEntryRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAccessEntryResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          addonName: S.String.pipe(T.HttpLabel("addonName")),
          preserve: S.optional(S.Boolean).pipe(T.HttpQuery("preserve")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/clusters/{clusterName}/addons/{addonName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAddonRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          capabilityName: S.String.pipe(T.HttpLabel("capabilityName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/capabilities/{capabilityName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCapabilityRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          certificateAuthorityId: S.String.pipe(T.HttpLabel("certificateAuthorityId")),
          clientRequestToken: S.optional(S.String).pipe(
            T.HttpQuery("clientRequestToken"),
            T.IdempotencyToken(),
          ),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/certificate-authorities/{certificateAuthorityId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCertificateAuthorityRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/clusters/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteClusterRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/eks-anywhere-subscriptions/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEksAnywhereSubscriptionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          fargateProfileName: S.String.pipe(T.HttpLabel("fargateProfileName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteFargateProfileRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          nodegroupName: S.String.pipe(T.HttpLabel("nodegroupName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/node-groups/{nodegroupName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteNodegroupRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/pod-identity-associations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePodIdentityAssociationRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/cluster-registrations/{name}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeregisterClusterRequest" });
    case 1:
      return S.suspend(() => S.Struct({ cluster: S.optional(Cluster) })).annotate({
        identifier: "DeregisterClusterResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String.pipe(T.HttpLabel("principalArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/access-entries/{principalArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAccessEntryRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          addonName: S.String.pipe(T.HttpLabel("addonName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/addons/{addonName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeAddonRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          addonName: S.String.pipe(T.HttpQuery("addonName")),
          addonVersion: S.String.pipe(T.HttpQuery("addonVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/addons/configuration-schemas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAddonConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          serviceAccount: S.optional(S.String),
          recommendedManagedPolicies: S.optional(StringList),
        }),
      ).annotate({
        identifier: "AddonPodIdentityConfiguration",
      });
    case 6:
      return S.Array(AddonPodIdentityConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          addonName: S.optional(S.String),
          addonVersion: S.optional(S.String),
          configurationSchema: S.optional(S.String),
          podIdentityConfiguration: S.optional(AddonPodIdentityConfigurationList),
        }),
      ).annotate({
        identifier: "DescribeAddonConfigurationResponse",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          kubernetesVersion: S.optional(S.String).pipe(T.HttpQuery("kubernetesVersion")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          addonName: S.optional(S.String).pipe(T.HttpQuery("addonName")),
          types: S.optional(StringList).pipe(T.HttpQuery("types")),
          publishers: S.optional(StringList).pipe(T.HttpQuery("publishers")),
          owners: S.optional(StringList).pipe(T.HttpQuery("owners")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/addons/supported-versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAddonVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clusterVersion: S.optional(S.String),
          platformVersions: S.optional(StringList),
          defaultVersion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Compatibility" });
    case 2:
      return S.Array(Compatibility);
    case 3:
      return S.suspend(() =>
        S.Struct({
          addonVersion: S.optional(S.String),
          architecture: S.optional(StringList),
          computeTypes: S.optional(StringList),
          compatibilities: S.optional(Compatibilities),
          requiresConfiguration: S.optional(S.Boolean),
          requiresIamPermissions: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AddonVersionInfo" });
    case 4:
      return S.Array(AddonVersionInfo);
    case 5:
      return S.suspend(() =>
        S.Struct({
          addonName: S.optional(S.String),
          type: S.optional(S.String),
          addonVersions: S.optional(AddonVersionInfoList),
          publisher: S.optional(S.String),
          owner: S.optional(S.String),
          marketplaceInformation: S.optional(MarketplaceInformation),
          defaultNamespace: S.optional(S.String),
        }),
      ).annotate({ identifier: "AddonInfo" });
    case 6:
      return S.Array(AddonInfo);
    case 7:
      return S.suspend(() =>
        S.Struct({ addons: S.optional(Addons), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeAddonVersionsResponse",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          capabilityName: S.String.pipe(T.HttpLabel("capabilityName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/capabilities/{capabilityName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCapabilityRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ capability: S.optional(Capability) })).annotate({
        identifier: "DescribeCapabilityResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          certificateAuthorityId: S.String.pipe(T.HttpLabel("certificateAuthorityId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/clusters/{clusterName}/certificate-authorities/{certificateAuthorityId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCertificateAuthorityRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          notBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          notAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CertificateAuthorityValidity",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          firstAutoActivation: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          finalAutoActivation: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CertificateAuthorityScheduledEvents",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdBy: S.optional(CertificateAuthorityCreatedBy),
          activatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          activatedBy: S.optional(CertificateAuthorityActivatedBy),
          signingStatus: S.optional(CertificateAuthoritySigningStatus),
          distributionStatus: S.optional(CertificateAuthorityDistributionStatus),
          validity: S.optional(CertificateAuthorityValidity),
          scheduledEvents: S.optional(CertificateAuthorityScheduledEvents),
          rollbackAvailable: S.optional(S.Boolean),
          data: S.optional(S.String),
        }),
      ).annotate({ identifier: "CertificateAuthority" });
    case 6:
      return S.suspend(() =>
        S.Struct({ certificateAuthority: S.optional(CertificateAuthority) }),
      ).annotate({
        identifier: "DescribeCertificateAuthorityResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ name: S.String.pipe(T.HttpLabel("name")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/clusters/{name}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeClusterRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterType: S.optional(S.String).pipe(T.HttpQuery("clusterType")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          defaultOnly: S.optional(S.Boolean).pipe(T.HttpQuery("defaultOnly")),
          includeAll: S.optional(S.Boolean).pipe(T.HttpQuery("includeAll")),
          clusterVersions: S.optional(StringList).pipe(T.HttpQuery("clusterVersions")),
          status: S.optional(ClusterVersionStatus).pipe(T.HttpQuery("status")),
          versionStatus: S.optional(VersionStatus).pipe(T.HttpQuery("versionStatus")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/cluster-versions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeClusterVersionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ min: S.optional(S.String), max: S.optional(S.String) }),
      ).annotate({ identifier: "DurationConstraints" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          defaultValue: S.optional(S.String),
          constraints: S.optional(DurationConstraints),
        }),
      ).annotate({ identifier: "DurationParameterConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ min: S.optional(S.Number), max: S.optional(S.Number) }),
      ).annotate({ identifier: "IntegerRangeConstraint" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          minPort: S.optional(IntegerRangeConstraint),
          maxPort: S.optional(IntegerRangeConstraint),
        }),
      ).annotate({ identifier: "PortRangeConstraints" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          defaultValue: S.optional(ServiceNodePortRange),
          constraints: S.optional(PortRangeConstraints),
        }),
      ).annotate({ identifier: "PortRangeParameterConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          eventTtl: S.optional(DurationParameterConfig),
          serviceNodePortRange: S.optional(PortRangeParameterConfig),
        }),
      ).annotate({
        identifier: "KubeApiServerVersionConfig",
      });
    case 7:
      return S.suspend(() => S.Struct({ allowedValues: S.optional(AllowedValuesList) })).annotate({
        identifier: "AllowedValuesConstraint",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(AllowedValuesConstraint),
          weight: S.optional(IntegerRangeConstraint),
        }),
      ).annotate({ identifier: "ResourceConstraints" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          scoringStrategy: S.optional(AllowedValuesConstraint),
          resources: S.optional(ResourceConstraints),
        }),
      ).annotate({
        identifier: "ScoringStrategyConstraints",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          defaultValue: S.optional(ScoringStrategy),
          constraints: S.optional(ScoringStrategyConstraints),
        }),
      ).annotate({ identifier: "ScoringStrategyConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({ scoringStrategy: S.optional(ScoringStrategyConfig) }),
      ).annotate({
        identifier: "NodeResourcesFitVersionConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ nodeResourcesFit: S.optional(NodeResourcesFitVersionConfig) }),
      ).annotate({
        identifier: "KubeSchedulerVersionConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          defaultValue: S.optional(S.Number),
          constraints: S.optional(IntegerConstraints),
        }),
      ).annotate({ identifier: "IntegerParameterConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({ terminatedPodGcThreshold: S.optional(IntegerParameterConfig) }),
      ).annotate({
        identifier: "PodGcControllerVersionConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ horizontalPodAutoscalerSyncPeriod: S.optional(DurationParameterConfig) }),
      ).annotate({
        identifier: "HorizontalPodAutoscalerControllerVersionConfig",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          podGcControllerConfig: S.optional(PodGcControllerVersionConfig),
          horizontalPodAutoscalerControllerConfig: S.optional(
            HorizontalPodAutoscalerControllerVersionConfig,
          ),
        }),
      ).annotate({
        identifier: "KubeControllerManagerVersionConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          kubeApiServerConfig: S.optional(KubeApiServerVersionConfig),
          kubeSchedulerConfig: S.optional(KubeSchedulerVersionConfig),
          kubeControllerManagerConfig: S.optional(KubeControllerManagerVersionConfig),
        }),
      ).annotate({ identifier: "ControlPlaneConfigInfo" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          tierName: S.optional(S.String),
          apiRequestConcurrency: S.optional(S.Number),
          podSchedulingRatePerSecond: S.optional(S.Number),
          clusterDatabaseSizeGb: S.optional(S.Number),
          controlPlaneComponentConfigOverrides: S.optional(ControlPlaneConfigInfo),
        }),
      ).annotate({
        identifier: "ControlPlaneScalingTierInfo",
      });
    case 3:
      return S.Array(ControlPlaneScalingTierInfo);
    case 4:
      return S.suspend(() =>
        S.Struct({
          clusterVersion: S.optional(S.String),
          clusterType: S.optional(S.String),
          defaultPlatformVersion: S.optional(S.String),
          defaultVersion: S.optional(S.Boolean),
          releaseDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endOfStandardSupportDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endOfExtendedSupportDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(ClusterVersionStatus),
          versionStatus: S.optional(VersionStatus),
          kubernetesPatchVersion: S.optional(S.String),
          controlPlaneScalingTiers: S.optional(ControlPlaneScalingTierList),
          controlPlaneComponentConfig: S.optional(ControlPlaneConfigInfo),
        }),
      ).annotate({
        identifier: "ClusterVersionInformation",
      });
    case 5:
      return S.Array(ClusterVersionInformation);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          clusterVersions: S.optional(ClusterVersionList),
        }),
      ).annotate({
        identifier: "DescribeClusterVersionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/eks-anywhere-subscriptions/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeEksAnywhereSubscriptionRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          fargateProfileName: S.String.pipe(T.HttpLabel("fargateProfileName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeFargateProfileRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ type: S.String, name: S.String })).annotate({
        identifier: "IdentityProviderConfig",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          identityProviderConfig: IdentityProviderConfig,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/identity-provider-configs/describe",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeIdentityProviderConfigRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identityProviderConfigName: S.optional(S.String),
          identityProviderConfigArn: S.optional(S.String),
          clusterName: S.optional(S.String),
          issuerUrl: S.optional(S.String),
          clientId: S.optional(S.String),
          usernameClaim: S.optional(S.String),
          usernamePrefix: S.optional(S.String),
          groupsClaim: S.optional(S.String),
          groupsPrefix: S.optional(S.String),
          requiredClaims: S.optional(RequiredClaimsMap),
          tags: S.optional(TagMap),
          status: S.optional(ConfigStatus),
        }),
      ).annotate({
        identifier: "OidcIdentityProviderConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ oidc: S.optional(OidcIdentityProviderConfig) })).annotate({
        identifier: "IdentityProviderConfigResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ identityProviderConfig: S.optional(IdentityProviderConfigResponse) }),
      ).annotate({
        identifier: "DescribeIdentityProviderConfigResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          id: S.String.pipe(T.HttpLabel("id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/insights/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeInsightRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          insightStatus: S.optional(InsightStatus),
          kubernetesResourceUri: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "InsightResourceDetail" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Array(InsightResourceDetail);
    case 1:
      return S.suspend(() =>
        S.Struct({
          userAgent: S.optional(S.String),
          numberOfRequestsLast30Days: S.optional(S.Number),
          lastRequestTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ClientStat" });
    case 2:
      return S.Array(ClientStat);
    case 3:
      return S.suspend(() =>
        S.Struct({
          usage: S.optional(S.String),
          replacedWith: S.optional(S.String),
          stopServingVersion: S.optional(S.String),
          startServingReplacementVersion: S.optional(S.String),
          clientStats: S.optional(ClientStats),
        }),
      ).annotate({ identifier: "DeprecationDetail" });
    case 4:
      return S.Array(DeprecationDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), compatibleVersions: S.optional(StringList) }),
      ).annotate({ identifier: "AddonCompatibilityDetail" });
    case 6:
      return S.Array(AddonCompatibilityDetail);
    case 7:
      return S.suspend(() =>
        S.Struct({
          deprecationDetails: S.optional(DeprecationDetails),
          addonCompatibilityDetails: S.optional(AddonCompatibilityDetails),
        }),
      ).annotate({
        identifier: "InsightCategorySpecificSummary",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          category: S.optional(Category),
          kubernetesVersion: S.optional(S.String),
          lastRefreshTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastTransitionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          insightStatus: S.optional(InsightStatus),
          recommendation: S.optional(S.String),
          additionalInfo: S.optional(AdditionalInfoMap),
          resources: S.optional(InsightResourceDetails),
          categorySpecificSummary: S.optional(InsightCategorySpecificSummary),
        }),
      ).annotate({ identifier: "Insight" });
    case 1:
      return S.suspend(() => S.Struct({ insight: S.optional(Insight) })).annotate({
        identifier: "DescribeInsightResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ clusterName: S.String.pipe(T.HttpLabel("clusterName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/insights-refresh" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeInsightsRefreshRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          message: S.optional(S.String),
          status: S.optional(InsightsRefreshStatus),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DescribeInsightsRefreshResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          nodegroupName: S.String.pipe(T.HttpLabel("nodegroupName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/node-groups/{nodegroupName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeNodegroupRequest" });
    case 5:
      return S.suspend(() => S.Struct({ nodegroup: S.optional(Nodegroup) })).annotate({
        identifier: "DescribeNodegroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/clusters/{clusterName}/pod-identity-associations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribePodIdentityAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          updateId: S.String.pipe(T.HttpLabel("updateId")),
          nodegroupName: S.optional(S.String).pipe(T.HttpQuery("nodegroupName")),
          addonName: S.optional(S.String).pipe(T.HttpQuery("addonName")),
          capabilityName: S.optional(S.String).pipe(T.HttpQuery("capabilityName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{name}/updates/{updateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeUpdateRequest" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String.pipe(T.HttpLabel("principalArn")),
          policyArn: S.String.pipe(T.HttpLabel("policyArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/clusters/{clusterName}/access-entries/{principalArn}/access-policies/{policyArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateAccessPolicyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DisassociateAccessPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          identityProviderConfig: IdentityProviderConfig,
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/identity-provider-configs/disassociate",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateIdentityProviderConfigRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          associatedPolicyArn: S.optional(S.String).pipe(T.HttpQuery("associatedPolicyArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/access-entries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAccessEntriesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ accessEntries: S.optional(StringList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccessEntriesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/access-policies" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAccessPoliciesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), arn: S.optional(S.String) }),
      ).annotate({ identifier: "AccessPolicy" });
    case 7:
      return S.Array(AccessPolicy);
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accessPolicies: S.optional(AccessPoliciesList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccessPoliciesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/addons" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAddonsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ addons: S.optional(StringList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAddonsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String.pipe(T.HttpLabel("principalArn")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/clusters/{clusterName}/access-entries/{principalArn}/access-policies",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAssociatedAccessPoliciesRequest",
      });
    case 4:
      return S.Array(AssociatedAccessPolicy);
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.optional(S.String),
          principalArn: S.optional(S.String),
          nextToken: S.optional(S.String),
          associatedAccessPolicies: S.optional(AssociatedAccessPoliciesList),
        }),
      ).annotate({
        identifier: "ListAssociatedAccessPoliciesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/capabilities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCapabilitiesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          capabilityName: S.optional(S.String),
          arn: S.optional(S.String),
          type: S.optional(CapabilityType),
          status: S.optional(CapabilityStatus),
          version: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          modifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CapabilitySummary" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CapabilitySummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          capabilities: S.optional(CapabilitySummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListCapabilitiesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/certificate-authorities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCertificateAuthoritiesRequest",
      });
    case 3:
      return S.Array(CertificateAuthoritySummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          certificateAuthorities: S.optional(CertificateAuthoritySummaryList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCertificateAuthoritiesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          include: S.optional(IncludeClustersList).pipe(T.HttpQuery("include")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/clusters" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListClustersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ clusters: S.optional(StringList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListClustersResponse" });
    case 7:
      return S.Array(EksAnywhereSubscriptionStatus);
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          includeStatus: S.optional(EksAnywhereSubscriptionStatusValues).pipe(
            T.HttpQuery("includeStatus"),
          ),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/eks-anywhere-subscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEksAnywhereSubscriptionsRequest",
      });
    case 1:
      return S.Array(EksAnywhereSubscription);
    case 2:
      return S.suspend(() =>
        S.Struct({
          subscriptions: S.optional(EksAnywhereSubscriptionList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEksAnywhereSubscriptionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/fargate-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFargateProfilesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ fargateProfileNames: S.optional(StringList), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListFargateProfilesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/identity-provider-configs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdentityProviderConfigsRequest",
      });
    case 6:
      return S.Array(IdentityProviderConfig);
    case 7:
      return S.suspend(() =>
        S.Struct({
          identityProviderConfigs: S.optional(IdentityProviderConfigs),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIdentityProviderConfigsResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          categories: S.optional(CategoryList),
          kubernetesVersions: S.optional(StringList),
          statuses: S.optional(InsightStatusValueList),
        }),
      ).annotate({ identifier: "InsightsFilter" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          filter: S.optional(InsightsFilter),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/insights" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListInsightsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          category: S.optional(Category),
          kubernetesVersion: S.optional(S.String),
          lastRefreshTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastTransitionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          insightStatus: S.optional(InsightStatus),
        }),
      ).annotate({ identifier: "InsightSummary" });
    case 3:
      return S.Array(InsightSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ insights: S.optional(InsightSummaries), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInsightsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/node-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListNodegroupsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ nodegroups: S.optional(StringList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListNodegroupsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          namespace: S.optional(S.String).pipe(T.HttpQuery("namespace")),
          serviceAccount: S.optional(S.String).pipe(T.HttpQuery("serviceAccount")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{clusterName}/pod-identity-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPodIdentityAssociationsRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.optional(S.String),
          namespace: S.optional(S.String),
          serviceAccount: S.optional(S.String),
          associationArn: S.optional(S.String),
          associationId: S.optional(S.String),
          ownerArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PodIdentityAssociationSummary",
      });
    case 1:
      return S.Array(PodIdentityAssociationSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          associations: S.optional(PodIdentityAssociationSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPodIdentityAssociationsResponse",
      });
    case 3:
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
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          nodegroupName: S.optional(S.String).pipe(T.HttpQuery("nodegroupName")),
          addonName: S.optional(S.String).pipe(T.HttpQuery("addonName")),
          capabilityName: S.optional(S.String).pipe(T.HttpQuery("capabilityName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/clusters/{name}/updates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListUpdatesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ updateIds: S.optional(StringList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListUpdatesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ roleArn: S.String, provider: ConnectorConfigProvider }),
      ).annotate({ identifier: "ConnectorConfigRequest" });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          connectorConfig: ConnectorConfigRequest,
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/cluster-registrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RegisterClusterRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ clusterName: S.String.pipe(T.HttpLabel("clusterName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/insights-refresh" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartInsightsRefreshRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ message: S.optional(S.String), status: S.optional(InsightsRefreshStatus) }),
      ).annotate({
        identifier: "StartInsightsRefreshResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          principalArn: S.String.pipe(T.HttpLabel("principalArn")),
          kubernetesGroups: S.optional(StringList),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          username: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/access-entries/{principalArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAccessEntryRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          addonName: S.String.pipe(T.HttpLabel("addonName")),
          addonVersion: S.optional(S.String),
          serviceAccountRoleArn: S.optional(S.String),
          resolveConflicts: S.optional(ResolveConflicts),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          configurationValues: S.optional(S.String),
          podIdentityAssociations: S.optional(AddonPodIdentityAssociationsList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{clusterName}/addons/{addonName}/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAddonRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          addOrUpdateRoleMappings: S.optional(ArgoCdRoleMappingList),
          removeRoleMappings: S.optional(ArgoCdRoleMappingList),
        }),
      ).annotate({ identifier: "UpdateRoleMappings" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          rbacRoleMappings: S.optional(UpdateRoleMappings),
          networkAccess: S.optional(ArgoCdNetworkAccessConfigRequest),
        }),
      ).annotate({ identifier: "UpdateArgoCdConfig" });
    case 1:
      return S.suspend(() => S.Struct({ argoCd: S.optional(UpdateArgoCdConfig) })).annotate({
        identifier: "UpdateCapabilityConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          capabilityName: S.String.pipe(T.HttpLabel("capabilityName")),
          roleArn: S.optional(S.String),
          configuration: S.optional(UpdateCapabilityConfiguration),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          deletePropagationPolicy: S.optional(CapabilityDeletePropagationPolicy),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/capabilities/{capabilityName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCapabilityRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ authenticationMode: S.optional(AuthenticationMode) }),
      ).annotate({
        identifier: "UpdateAccessConfigRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          resourcesVpcConfig: S.optional(VpcConfigRequest),
          logging: S.optional(Logging),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          accessConfig: S.optional(UpdateAccessConfigRequest),
          upgradePolicy: S.optional(UpgradePolicyRequest),
          zonalShiftConfig: S.optional(ZonalShiftConfigRequest),
          computeConfig: S.optional(ComputeConfigRequest),
          kubernetesNetworkConfig: S.optional(KubernetesNetworkConfigRequest),
          storageConfig: S.optional(StorageConfigRequest),
          remoteNetworkConfig: S.optional(RemoteNetworkConfigRequest),
          deletionProtection: S.optional(S.Boolean),
          controlPlaneScalingConfig: S.optional(ControlPlaneScalingConfig),
          kubeApiServerConfig: S.optional(KubeApiServerConfigRequest),
          kubeSchedulerConfig: S.optional(KubeSchedulerConfigRequest),
          kubeControllerManagerConfig: S.optional(KubeControllerManagerConfigRequest),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{name}/update-config" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateClusterConfigRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ timeoutMinutes: S.optional(S.Number) })).annotate({
        identifier: "RollbackConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String.pipe(T.HttpLabel("name")),
          version: S.String,
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          force: S.optional(S.Boolean),
          rollbackConfig: S.optional(RollbackConfig),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/clusters/{name}/updates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateClusterVersionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          autoRenew: S.Boolean,
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/eks-anywhere-subscriptions/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEksAnywhereSubscriptionRequest",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          addOrUpdateLabels: S.optional(LabelsMap),
          removeLabels: S.optional(LabelsKeyList),
        }),
      ).annotate({ identifier: "UpdateLabelsPayload" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          addOrUpdateTaints: S.optional(TaintsList),
          removeTaints: S.optional(TaintsList),
        }),
      ).annotate({ identifier: "UpdateTaintsPayload" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          nodegroupName: S.String.pipe(T.HttpLabel("nodegroupName")),
          labels: S.optional(UpdateLabelsPayload),
          taints: S.optional(UpdateTaintsPayload),
          scalingConfig: S.optional(NodegroupScalingConfig),
          updateConfig: S.optional(NodegroupUpdateConfig),
          nodeRepairConfig: S.optional(NodeRepairConfig),
          warmPoolConfig: S.optional(WarmPoolConfig),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNodegroupConfigRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          nodegroupName: S.String.pipe(T.HttpLabel("nodegroupName")),
          version: S.optional(S.String),
          releaseVersion: S.optional(S.String),
          launchTemplate: S.optional(LaunchTemplateSpecification),
          force: S.optional(S.Boolean),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNodegroupVersionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clusterName: S.String.pipe(T.HttpLabel("clusterName")),
          associationId: S.String.pipe(T.HttpLabel("associationId")),
          roleArn: S.optional(S.String),
          clientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          disableSessionTags: S.optional(S.Boolean),
          targetRoleArn: S.optional(S.String),
          policy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/clusters/{clusterName}/pod-identity-associations/{associationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePodIdentityAssociationRequest",
      });
  }
}
