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
  sdkId: "grafana",
  serviceShapeName: "AWSGrafanaControlPlane",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "grafana" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-08-18");
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
              `https://grafana-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://grafana-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://grafana.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://grafana.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: S.String,
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type WorkspaceId = string;
export type LicenseType = string;
export type GrafanaToken = string;
export interface AssociateLicenseRequest {
  workspaceId: string;
  licenseType: string;
  grafanaToken?: string;
}
const AssociateLicenseRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateLicenseRequest>;
export type AccountAccessType = string;
export type DataSourceType = string;
export type DataSourceTypesList = string[];
const DataSourceTypesList = /*@__PURE__*/ __L.at(__c0, 1);
export type Description = string | redacted.Redacted<string>;
export type Endpoint = string;
export type GrafanaVersion = string;
export type WorkspaceName = string | redacted.Redacted<string>;
export type OrganizationRoleName = string | redacted.Redacted<string>;
export type NotificationDestinationType = string;
export type NotificationDestinationsList = string[];
const NotificationDestinationsList =
  DataSourceTypesList as any as S.Schema<NotificationDestinationsList>;
export type OrganizationalUnit = string;
export type OrganizationalUnitList = string[];
const OrganizationalUnitList = DataSourceTypesList as any as S.Schema<OrganizationalUnitList>;
export type PermissionType = string;
export type StackSetName = string;
export type WorkspaceStatus = string;
export type IamRoleArn = string | redacted.Redacted<string>;
export type AuthenticationProviderTypes = string;
export type AuthenticationProviders = string[];
const AuthenticationProviders = DataSourceTypesList as any as S.Schema<AuthenticationProviders>;
export type SamlConfigurationStatus = string;
export interface AuthenticationSummary {
  providers: string[];
  samlConfigurationStatus?: string;
}
const AuthenticationSummary = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AuthenticationSummary>;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 3);
export type SecurityGroupId = string;
export type SecurityGroupIds = string[];
const SecurityGroupIds = DataSourceTypesList as any as S.Schema<SecurityGroupIds>;
export type SubnetId = string;
export type SubnetIds = string[];
const SubnetIds = DataSourceTypesList as any as S.Schema<SubnetIds>;
export interface VpcConfiguration {
  securityGroupIds: string[];
  subnetIds: string[];
}
const VpcConfiguration = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<VpcConfiguration>;
export type PrefixListId = string;
export type PrefixListIds = string[];
const PrefixListIds = DataSourceTypesList as any as S.Schema<PrefixListIds>;
export type VpceId = string;
export type VpceIds = string[];
const VpceIds = DataSourceTypesList as any as S.Schema<VpceIds>;
export interface NetworkAccessConfiguration {
  prefixListIds: string[];
  vpceIds: string[];
}
const NetworkAccessConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<NetworkAccessConfiguration>;
export type IPAddressType = string;
export type KmsKeyId = string;
export type DegradedWorkspaceReason = string;
export interface WorkspaceDescription {
  accountAccessType?: string;
  created: Date;
  dataSources: string[];
  description?: string | redacted.Redacted<string>;
  endpoint: string;
  grafanaVersion: string;
  id: string;
  modified: Date;
  name?: string | redacted.Redacted<string>;
  organizationRoleName?: string | redacted.Redacted<string>;
  notificationDestinations?: string[];
  organizationalUnits?: string[];
  permissionType?: string;
  stackSetName?: string;
  status: string;
  workspaceRoleArn?: string | redacted.Redacted<string>;
  licenseType?: string;
  freeTrialConsumed?: boolean;
  licenseExpiration?: Date;
  freeTrialExpiration?: Date;
  authentication: AuthenticationSummary;
  tags?: { [key: string]: string | undefined };
  vpcConfiguration?: VpcConfiguration;
  networkAccessControl?: NetworkAccessConfiguration;
  grafanaToken?: string;
  ipAddressType?: string;
  kmsKeyId?: string;
  degradedWorkspaceReason?: string;
}
const WorkspaceDescription = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<WorkspaceDescription>;
export interface AssociateLicenseResponse {
  workspace: WorkspaceDescription;
}
const AssociateLicenseResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssociateLicenseResponse>;
export type ClientToken = string;
export type OverridableConfigurationJson = string;
export interface CreateWorkspaceRequest {
  accountAccessType: string;
  clientToken?: string;
  organizationRoleName?: string | redacted.Redacted<string>;
  permissionType: string;
  stackSetName?: string;
  workspaceDataSources?: string[];
  workspaceDescription?: string | redacted.Redacted<string>;
  workspaceName?: string | redacted.Redacted<string>;
  workspaceNotificationDestinations?: string[];
  workspaceOrganizationalUnits?: string[];
  workspaceRoleArn?: string | redacted.Redacted<string>;
  authenticationProviders: string[];
  tags?: { [key: string]: string | undefined };
  vpcConfiguration?: VpcConfiguration;
  configuration?: string;
  networkAccessControl?: NetworkAccessConfiguration;
  grafanaVersion?: string;
  ipAddressType?: string;
  kmsKeyId?: string;
}
const CreateWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateWorkspaceRequest>;
export interface CreateWorkspaceResponse {
  workspace: WorkspaceDescription;
}
const CreateWorkspaceResponse =
  AssociateLicenseResponse as any as S.Schema<CreateWorkspaceResponse>;
export type ApiKeyName = string;
export interface CreateWorkspaceApiKeyRequest {
  keyName: string;
  keyRole: string;
  secondsToLive: number;
  workspaceId: string;
}
const CreateWorkspaceApiKeyRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateWorkspaceApiKeyRequest>;
export type ApiKeyToken = string | redacted.Redacted<string>;
export interface CreateWorkspaceApiKeyResponse {
  keyName: string;
  key: string | redacted.Redacted<string>;
  workspaceId: string;
}
const CreateWorkspaceApiKeyResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateWorkspaceApiKeyResponse>;
export type ServiceAccountName = string;
export type Role = string;
export interface CreateWorkspaceServiceAccountRequest {
  name: string;
  grafanaRole: string;
  workspaceId: string;
}
const CreateWorkspaceServiceAccountRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateWorkspaceServiceAccountRequest>;
export interface CreateWorkspaceServiceAccountResponse {
  id: string;
  name: string;
  grafanaRole: string;
  workspaceId: string;
}
const CreateWorkspaceServiceAccountResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateWorkspaceServiceAccountResponse>;
export type ServiceAccountTokenName = string;
export interface CreateWorkspaceServiceAccountTokenRequest {
  name: string;
  secondsToLive: number;
  serviceAccountId: string;
  workspaceId: string;
}
const CreateWorkspaceServiceAccountTokenRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateWorkspaceServiceAccountTokenRequest>;
export type ServiceAccountTokenKey = string | redacted.Redacted<string>;
export interface ServiceAccountTokenSummaryWithKey {
  id: string;
  name: string;
  key: string | redacted.Redacted<string>;
}
const ServiceAccountTokenSummaryWithKey = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<ServiceAccountTokenSummaryWithKey>;
export interface CreateWorkspaceServiceAccountTokenResponse {
  serviceAccountToken: ServiceAccountTokenSummaryWithKey;
  serviceAccountId: string;
  workspaceId: string;
}
const CreateWorkspaceServiceAccountTokenResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateWorkspaceServiceAccountTokenResponse>;
export interface DeleteWorkspaceRequest {
  workspaceId: string;
}
const DeleteWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DeleteWorkspaceRequest>;
export interface DeleteWorkspaceResponse {
  workspace: WorkspaceDescription;
}
const DeleteWorkspaceResponse =
  AssociateLicenseResponse as any as S.Schema<DeleteWorkspaceResponse>;
export interface DeleteWorkspaceApiKeyRequest {
  keyName: string;
  workspaceId: string;
}
const DeleteWorkspaceApiKeyRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DeleteWorkspaceApiKeyRequest>;
export interface DeleteWorkspaceApiKeyResponse {
  keyName: string;
  workspaceId: string;
}
const DeleteWorkspaceApiKeyResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<DeleteWorkspaceApiKeyResponse>;
export interface DeleteWorkspaceServiceAccountRequest {
  serviceAccountId: string;
  workspaceId: string;
}
const DeleteWorkspaceServiceAccountRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DeleteWorkspaceServiceAccountRequest>;
export interface DeleteWorkspaceServiceAccountResponse {
  serviceAccountId: string;
  workspaceId: string;
}
const DeleteWorkspaceServiceAccountResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DeleteWorkspaceServiceAccountResponse>;
export interface DeleteWorkspaceServiceAccountTokenRequest {
  tokenId: string;
  serviceAccountId: string;
  workspaceId: string;
}
const DeleteWorkspaceServiceAccountTokenRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DeleteWorkspaceServiceAccountTokenRequest>;
export interface DeleteWorkspaceServiceAccountTokenResponse {
  tokenId: string;
  serviceAccountId: string;
  workspaceId: string;
}
const DeleteWorkspaceServiceAccountTokenResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DeleteWorkspaceServiceAccountTokenResponse>;
export interface DescribeWorkspaceRequest {
  workspaceId: string;
}
const DescribeWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<DescribeWorkspaceRequest>;
export interface DescribeWorkspaceResponse {
  workspace: WorkspaceDescription;
}
const DescribeWorkspaceResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<DescribeWorkspaceResponse>;
export interface DescribeWorkspaceAuthenticationRequest {
  workspaceId: string;
}
const DescribeWorkspaceAuthenticationRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DescribeWorkspaceAuthenticationRequest>;
export type IdpMetadataUrl = string;
export type IdpMetadata = { url: string; xml?: never } | { url?: never; xml: string };
const IdpMetadata = /*@__PURE__*/ __L.at(__c3, 2);
export type AssertionAttribute = string;
export interface AssertionAttributes {
  name?: string;
  login?: string;
  email?: string;
  groups?: string;
  role?: string;
  org?: string;
}
const AssertionAttributes = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<AssertionAttributes>;
export type RoleValue = string;
export type RoleValueList = string[];
const RoleValueList = DataSourceTypesList as any as S.Schema<RoleValueList>;
export interface RoleValues {
  editor?: string[];
  admin?: string[];
}
const RoleValues = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<RoleValues>;
export type AllowedOrganization = string;
export type AllowedOrganizations = string[];
const AllowedOrganizations = DataSourceTypesList as any as S.Schema<AllowedOrganizations>;
export type LoginValidityDuration = number;
export interface SamlConfiguration {
  idpMetadata: IdpMetadata;
  assertionAttributes?: AssertionAttributes;
  roleValues?: RoleValues;
  allowedOrganizations?: string[];
  loginValidityDuration?: number;
}
const SamlConfiguration = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<SamlConfiguration>;
export interface SamlAuthentication {
  status: string;
  configuration?: SamlConfiguration;
}
const SamlAuthentication = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<SamlAuthentication>;
export type SSOClientId = string;
export interface AwsSsoAuthentication {
  ssoClientId?: string;
}
const AwsSsoAuthentication = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<AwsSsoAuthentication>;
export interface AuthenticationDescription {
  providers: string[];
  saml?: SamlAuthentication;
  awsSso?: AwsSsoAuthentication;
}
const AuthenticationDescription = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<AuthenticationDescription>;
export interface DescribeWorkspaceAuthenticationResponse {
  authentication: AuthenticationDescription;
}
const DescribeWorkspaceAuthenticationResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DescribeWorkspaceAuthenticationResponse>;
export interface DescribeWorkspaceConfigurationRequest {
  workspaceId: string;
}
const DescribeWorkspaceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DescribeWorkspaceConfigurationRequest>;
export interface DescribeWorkspaceConfigurationResponse {
  configuration: string;
  grafanaVersion?: string;
}
const DescribeWorkspaceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DescribeWorkspaceConfigurationResponse>;
export interface DisassociateLicenseRequest {
  workspaceId: string;
  licenseType: string;
}
const DisassociateLicenseRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DisassociateLicenseRequest>;
export interface DisassociateLicenseResponse {
  workspace: WorkspaceDescription;
}
const DisassociateLicenseResponse =
  DescribeWorkspaceResponse as any as S.Schema<DisassociateLicenseResponse>;
export type PaginationToken = string;
export type UserType = string;
export type SsoId = string;
export interface ListPermissionsRequest {
  maxResults?: number;
  nextToken?: string;
  userType?: string;
  userId?: string;
  groupId?: string;
  workspaceId: string;
}
const ListPermissionsRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListPermissionsRequest>;
export interface User {
  id: string;
  type: string;
}
const User = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<User>;
export interface PermissionEntry {
  user: User;
  role: string;
}
const PermissionEntry = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<PermissionEntry>;
export type PermissionEntryList = PermissionEntry[];
const PermissionEntryList = /*@__PURE__*/ __L.at(__c5, 0);
export interface ListPermissionsResponse {
  nextToken?: string;
  permissions: PermissionEntry[];
}
const ListPermissionsResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<ListPermissionsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListVersionsRequest {
  maxResults?: number;
  nextToken?: string;
  workspaceId?: string;
}
const ListVersionsRequest = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<ListVersionsRequest>;
export type GrafanaVersionList = string[];
const GrafanaVersionList = DataSourceTypesList as any as S.Schema<GrafanaVersionList>;
export interface ListVersionsResponse {
  nextToken?: string;
  grafanaVersions?: string[];
}
const ListVersionsResponse = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ListVersionsResponse>;
export interface ListWorkspacesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListWorkspacesRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListWorkspacesRequest>;
export interface WorkspaceSummary {
  created: Date;
  description?: string | redacted.Redacted<string>;
  endpoint: string;
  grafanaVersion: string;
  id: string;
  modified: Date;
  name?: string | redacted.Redacted<string>;
  notificationDestinations?: string[];
  status: string;
  authentication: AuthenticationSummary;
  tags?: { [key: string]: string | undefined };
  licenseType?: string;
  grafanaToken?: string;
}
const WorkspaceSummary = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<WorkspaceSummary>;
export type WorkspaceList = WorkspaceSummary[];
const WorkspaceList = /*@__PURE__*/ __L.at(__c6, 0);
export interface ListWorkspacesResponse {
  workspaces: WorkspaceSummary[];
  nextToken?: string;
}
const ListWorkspacesResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<ListWorkspacesResponse>;
export interface ListWorkspaceServiceAccountsRequest {
  maxResults?: number;
  nextToken?: string;
  workspaceId: string;
}
const ListWorkspaceServiceAccountsRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ListWorkspaceServiceAccountsRequest>;
export interface ServiceAccountSummary {
  id: string;
  name: string;
  isDisabled: string;
  grafanaRole: string;
}
const ServiceAccountSummary = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ServiceAccountSummary>;
export type ServiceAccountList = ServiceAccountSummary[];
const ServiceAccountList = /*@__PURE__*/ __L.at(__c6, 4);
export interface ListWorkspaceServiceAccountsResponse {
  nextToken?: string;
  serviceAccounts: ServiceAccountSummary[];
  workspaceId: string;
}
const ListWorkspaceServiceAccountsResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ListWorkspaceServiceAccountsResponse>;
export interface ListWorkspaceServiceAccountTokensRequest {
  maxResults?: number;
  nextToken?: string;
  serviceAccountId: string;
  workspaceId: string;
}
const ListWorkspaceServiceAccountTokensRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListWorkspaceServiceAccountTokensRequest>;
export interface ServiceAccountTokenSummary {
  id: string;
  name: string;
  createdAt: Date;
  expiresAt: Date;
  lastUsedAt?: Date;
}
const ServiceAccountTokenSummary = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ServiceAccountTokenSummary>;
export type ServiceAccountTokenList = ServiceAccountTokenSummary[];
const ServiceAccountTokenList = /*@__PURE__*/ __L.at(__c7, 0);
export interface ListWorkspaceServiceAccountTokensResponse {
  nextToken?: string;
  serviceAccountTokens: ServiceAccountTokenSummary[];
  serviceAccountId: string;
  workspaceId: string;
}
const ListWorkspaceServiceAccountTokensResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<ListWorkspaceServiceAccountTokensResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = DataSourceTypesList as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export type UpdateAction = string;
export type UserList = User[];
const UserList = /*@__PURE__*/ __L.at(__c7, 5);
export interface UpdateInstruction {
  action: string;
  role: string;
  users: User[];
}
const UpdateInstruction = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<UpdateInstruction>;
export type UpdateInstructionBatch = UpdateInstruction[];
const UpdateInstructionBatch = /*@__PURE__*/ __L.at(__c7, 7);
export interface UpdatePermissionsRequest {
  updateInstructionBatch: UpdateInstruction[];
  workspaceId: string;
}
const UpdatePermissionsRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<UpdatePermissionsRequest>;
export interface UpdateError {
  code: number;
  message: string;
  causedBy: UpdateInstruction;
}
const UpdateError = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<UpdateError>;
export type UpdateErrorList = UpdateError[];
const UpdateErrorList = /*@__PURE__*/ __L.at(__c8, 2);
export interface UpdatePermissionsResponse {
  errors: UpdateError[];
}
const UpdatePermissionsResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<UpdatePermissionsResponse>;
export interface UpdateWorkspaceRequest {
  accountAccessType?: string;
  organizationRoleName?: string | redacted.Redacted<string>;
  permissionType?: string;
  stackSetName?: string;
  workspaceDataSources?: string[];
  workspaceDescription?: string | redacted.Redacted<string>;
  workspaceId: string;
  workspaceName?: string | redacted.Redacted<string>;
  workspaceNotificationDestinations?: string[];
  workspaceOrganizationalUnits?: string[];
  workspaceRoleArn?: string | redacted.Redacted<string>;
  vpcConfiguration?: VpcConfiguration;
  removeVpcConfiguration?: boolean;
  networkAccessControl?: NetworkAccessConfiguration;
  removeNetworkAccessConfiguration?: boolean;
  ipAddressType?: string;
}
const UpdateWorkspaceRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<UpdateWorkspaceRequest>;
export interface UpdateWorkspaceResponse {
  workspace: WorkspaceDescription;
}
const UpdateWorkspaceResponse =
  AssociateLicenseResponse as any as S.Schema<UpdateWorkspaceResponse>;
export interface UpdateWorkspaceAuthenticationRequest {
  workspaceId: string;
  authenticationProviders: string[];
  samlConfiguration?: SamlConfiguration;
}
const UpdateWorkspaceAuthenticationRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<UpdateWorkspaceAuthenticationRequest>;
export interface UpdateWorkspaceAuthenticationResponse {
  authentication: AuthenticationDescription;
}
const UpdateWorkspaceAuthenticationResponse =
  DescribeWorkspaceAuthenticationResponse as any as S.Schema<UpdateWorkspaceAuthenticationResponse>;
export interface UpdateWorkspaceConfigurationRequest {
  configuration: string;
  workspaceId: string;
  grafanaVersion?: string;
}
const UpdateWorkspaceConfigurationRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<UpdateWorkspaceConfigurationRequest>;
export interface UpdateWorkspaceConfigurationResponse {}
const UpdateWorkspaceConfigurationResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<UpdateWorkspaceConfigurationResponse>;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c9, 1);
export type AssociateLicenseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns a Grafana Enterprise license to a workspace. To upgrade, you must use `ENTERPRISE` for the `licenseType`, and pass in a valid Grafana Labs token for the `grafanaToken`. Upgrading to Grafana Enterprise incurs additional fees. For more information, see Upgrade a workspace to Grafana Enterprise.
 */
export const associateLicense: API.OperationMethod<
  AssociateLicenseRequest,
  AssociateLicenseResponse,
  AssociateLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateLicenseRequest,
  output: AssociateLicenseResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateLicense",
}));

export type CreateWorkspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a *workspace*. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.
 *
 * Don't use `CreateWorkspace` to modify an existing workspace. Instead, use UpdateWorkspace.
 */
export const createWorkspace: API.OperationMethod<
  CreateWorkspaceRequest,
  CreateWorkspaceResponse,
  CreateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkspaceRequest,
  output: CreateWorkspaceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkspace",
}));

export type CreateWorkspaceApiKeyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html for available APIs and example requests.
 *
 * In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.
 */
export const createWorkspaceApiKey: API.OperationMethod<
  CreateWorkspaceApiKeyRequest,
  CreateWorkspaceApiKeyResponse,
  CreateWorkspaceApiKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkspaceApiKeyRequest,
  output: CreateWorkspaceApiKeyResponse,
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
  operationName: "CreateWorkspaceApiKey",
}));

export type CreateWorkspaceServiceAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a service account for the workspace. A service account can be used to call Grafana HTTP APIs, and run automated workloads. After creating the service account with the correct `GrafanaRole` for your use case, use `CreateWorkspaceServiceAccountToken` to create a token that can be used to authenticate and authorize Grafana HTTP API calls.
 *
 * You can only create service accounts for workspaces that are compatible with Grafana version 9 and above.
 *
 * For more information about service accounts, see Service accounts in the *Amazon Managed Grafana User Guide*.
 *
 * For more information about the Grafana HTTP APIs, see Using Grafana HTTP APIs in the *Amazon Managed Grafana User Guide*.
 */
export const createWorkspaceServiceAccount: API.OperationMethod<
  CreateWorkspaceServiceAccountRequest,
  CreateWorkspaceServiceAccountResponse,
  CreateWorkspaceServiceAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkspaceServiceAccountRequest,
  output: CreateWorkspaceServiceAccountResponse,
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
  operationName: "CreateWorkspaceServiceAccount",
}));

export type CreateWorkspaceServiceAccountTokenError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a token that can be used to authenticate and authorize Grafana HTTP API operations for the given workspace service account. The service account acts as a user for the API operations, and defines the permissions that are used by the API.
 *
 * When you create the service account token, you will receive a key that is used when calling Grafana APIs. Do not lose this key, as it will not be retrievable again.
 *
 * If you do lose the key, you can delete the token and recreate it to receive a new key. This will disable the initial key.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 */
export const createWorkspaceServiceAccountToken: API.OperationMethod<
  CreateWorkspaceServiceAccountTokenRequest,
  CreateWorkspaceServiceAccountTokenResponse,
  CreateWorkspaceServiceAccountTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkspaceServiceAccountTokenRequest,
  output: CreateWorkspaceServiceAccountTokenResponse,
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
  operationName: "CreateWorkspaceServiceAccountToken",
}));

export type DeleteWorkspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Managed Grafana workspace.
 */
export const deleteWorkspace: API.OperationMethod<
  DeleteWorkspaceRequest,
  DeleteWorkspaceResponse,
  DeleteWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkspaceRequest,
  output: DeleteWorkspaceResponse,
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
  operationName: "DeleteWorkspace",
}));

export type DeleteWorkspaceApiKeyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Grafana API key for the workspace.
 *
 * In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release.
 */
export const deleteWorkspaceApiKey: API.OperationMethod<
  DeleteWorkspaceApiKeyRequest,
  DeleteWorkspaceApiKeyResponse,
  DeleteWorkspaceApiKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkspaceApiKeyRequest,
  output: DeleteWorkspaceApiKeyResponse,
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
  operationName: "DeleteWorkspaceApiKey",
}));

export type DeleteWorkspaceServiceAccountError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workspace service account from the workspace.
 *
 * This will delete any tokens created for the service account, as well. If the tokens are currently in use, the will fail to authenticate / authorize after they are deleted.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 */
export const deleteWorkspaceServiceAccount: API.OperationMethod<
  DeleteWorkspaceServiceAccountRequest,
  DeleteWorkspaceServiceAccountResponse,
  DeleteWorkspaceServiceAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkspaceServiceAccountRequest,
  output: DeleteWorkspaceServiceAccountResponse,
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
  operationName: "DeleteWorkspaceServiceAccount",
}));

export type DeleteWorkspaceServiceAccountTokenError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a token for the workspace service account.
 *
 * This will disable the key associated with the token. If any automation is currently using the key, it will no longer be authenticated or authorized to perform actions with the Grafana HTTP APIs.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 */
export const deleteWorkspaceServiceAccountToken: API.OperationMethod<
  DeleteWorkspaceServiceAccountTokenRequest,
  DeleteWorkspaceServiceAccountTokenResponse,
  DeleteWorkspaceServiceAccountTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkspaceServiceAccountTokenRequest,
  output: DeleteWorkspaceServiceAccountTokenResponse,
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
  operationName: "DeleteWorkspaceServiceAccountToken",
}));

export type DescribeWorkspaceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Displays information about one Amazon Managed Grafana workspace.
 */
export const describeWorkspace: API.OperationMethod<
  DescribeWorkspaceRequest,
  DescribeWorkspaceResponse,
  DescribeWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkspaceRequest,
  output: DescribeWorkspaceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspace",
}));

export type DescribeWorkspaceAuthenticationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
 */
export const describeWorkspaceAuthentication: API.OperationMethod<
  DescribeWorkspaceAuthenticationRequest,
  DescribeWorkspaceAuthenticationResponse,
  DescribeWorkspaceAuthenticationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkspaceAuthenticationRequest,
  output: DescribeWorkspaceAuthenticationResponse,
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
  operationName: "DescribeWorkspaceAuthentication",
}));

export type DescribeWorkspaceConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the current configuration string for the given workspace.
 */
export const describeWorkspaceConfiguration: API.OperationMethod<
  DescribeWorkspaceConfigurationRequest,
  DescribeWorkspaceConfigurationResponse,
  DescribeWorkspaceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeWorkspaceConfigurationRequest,
  output: DescribeWorkspaceConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeWorkspaceConfiguration",
}));

export type DisassociateLicenseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the Grafana Enterprise license from a workspace.
 */
export const disassociateLicense: API.OperationMethod<
  DisassociateLicenseRequest,
  DisassociateLicenseResponse,
  DisassociateLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateLicenseRequest,
  output: DisassociateLicenseResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateLicense",
}));

export type ListPermissionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the users and groups who have the Grafana `Admin` and `Editor` roles in this workspace. If you use this operation without specifying `userId` or `groupId`, the operation returns the roles of all users and groups. If you specify a `userId` or a `groupId`, only the roles for that user or group are returned. If you do this, you can specify only one `userId` or one `groupId`.
 */
export const listPermissions: API.PaginatedOperationMethod<
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListPermissionsError,
  Credentials | HttpClient.HttpClient,
  PermissionEntry
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPermissionsRequest,
  output: ListPermissionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "permissions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `ListTagsForResource` operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the `resourceArn`. Currently, the only resource that can be tagged is a workspace.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists available versions of Grafana. These are available when calling `CreateWorkspace`. Optionally, include a workspace to list the versions to which it can be upgraded.
 */
export const listVersions: API.PaginatedOperationMethod<
  ListVersionsRequest,
  ListVersionsResponse,
  ListVersionsError,
  Credentials | HttpClient.HttpClient,
  GrafanaVersion
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListVersionsRequest,
  output: ListVersionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "grafanaVersions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkspacesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use DescribeWorkspace.
 */
export const listWorkspaces: API.PaginatedOperationMethod<
  ListWorkspacesRequest,
  ListWorkspacesResponse,
  ListWorkspacesError,
  Credentials | HttpClient.HttpClient,
  WorkspaceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkspacesRequest,
  output: ListWorkspacesResponse,
  errors: [AccessDeniedException, InternalServerException, ThrottlingException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkspaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workspaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkspaceServiceAccountsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of service accounts for a workspace.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 */
export const listWorkspaceServiceAccounts: API.PaginatedOperationMethod<
  ListWorkspaceServiceAccountsRequest,
  ListWorkspaceServiceAccountsResponse,
  ListWorkspaceServiceAccountsError,
  Credentials | HttpClient.HttpClient,
  ServiceAccountSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkspaceServiceAccountsRequest,
  output: ListWorkspaceServiceAccountsResponse,
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
  operationName: "ListWorkspaceServiceAccounts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "serviceAccounts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkspaceServiceAccountTokensError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tokens for a workspace service account.
 *
 * This does not return the key for each token. You cannot access keys after they are created. To create a new key, delete the token and recreate it.
 *
 * Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.
 */
export const listWorkspaceServiceAccountTokens: API.PaginatedOperationMethod<
  ListWorkspaceServiceAccountTokensRequest,
  ListWorkspaceServiceAccountTokensResponse,
  ListWorkspaceServiceAccountTokensError,
  Credentials | HttpClient.HttpClient,
  ServiceAccountTokenSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkspaceServiceAccountTokensRequest,
  output: ListWorkspaceServiceAccountTokensResponse,
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
  operationName: "ListWorkspaceServiceAccountTokens",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "serviceAccountTokens",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `TagResource` operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces.
 *
 * If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The `UntagResource` operation removes the association of the tag with the Amazon Managed Grafana resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdatePermissionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates which users in a workspace have the Grafana `Admin` or `Editor` roles.
 */
export const updatePermissions: API.OperationMethod<
  UpdatePermissionsRequest,
  UpdatePermissionsResponse,
  UpdatePermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePermissionsRequest,
  output: UpdatePermissionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePermissions",
}));

export type UpdateWorkspaceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.
 *
 * To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use UpdateWorkspaceAuthentication.
 *
 * To modify which users in the workspace have the `Admin` and `Editor` Grafana roles, use UpdatePermissions.
 */
export const updateWorkspace: API.OperationMethod<
  UpdateWorkspaceRequest,
  UpdateWorkspaceResponse,
  UpdateWorkspaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkspaceRequest,
  output: UpdateWorkspaceResponse,
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
  operationName: "UpdateWorkspace",
}));

export type UpdateWorkspaceAuthenticationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the `Admin` and `Editor` roles in the workspace.
 *
 * Changes to the authentication method for a workspace may take a few minutes to take effect.
 */
export const updateWorkspaceAuthentication: API.OperationMethod<
  UpdateWorkspaceAuthenticationRequest,
  UpdateWorkspaceAuthenticationResponse,
  UpdateWorkspaceAuthenticationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkspaceAuthenticationRequest,
  output: UpdateWorkspaceAuthenticationResponse,
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
  operationName: "UpdateWorkspaceAuthentication",
}));

export type UpdateWorkspaceConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration string for the given workspace
 */
export const updateWorkspaceConfiguration: API.OperationMethod<
  UpdateWorkspaceConfigurationRequest,
  UpdateWorkspaceConfigurationResponse,
  UpdateWorkspaceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkspaceConfigurationRequest,
  output: UpdateWorkspaceConfigurationResponse,
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
  operationName: "UpdateWorkspaceConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          licenseType: S.String.pipe(T.HttpLabel("licenseType")),
          grafanaToken: S.optional(S.String).pipe(T.HttpHeader("Grafana-Token")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/licenses/{licenseType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateLicenseRequest" });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          providers: AuthenticationProviders,
          samlConfigurationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AuthenticationSummary" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ securityGroupIds: SecurityGroupIds, subnetIds: SubnetIds }),
      ).annotate({ identifier: "VpcConfiguration" });
    case 5:
      return S.suspend(() => S.Struct({ prefixListIds: PrefixListIds, vpceIds: VpceIds })).annotate(
        {
          identifier: "NetworkAccessConfiguration",
        },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountAccessType: S.optional(S.String),
          created: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          dataSources: DataSourceTypesList,
          description: S.optional(SensitiveString),
          endpoint: S.String,
          grafanaVersion: S.String,
          id: S.String,
          modified: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          name: S.optional(SensitiveString),
          organizationRoleName: S.optional(SensitiveString),
          notificationDestinations: S.optional(NotificationDestinationsList),
          organizationalUnits: S.optional(OrganizationalUnitList),
          permissionType: S.optional(S.String),
          stackSetName: S.optional(S.String),
          status: S.String,
          workspaceRoleArn: S.optional(SensitiveString),
          licenseType: S.optional(S.String),
          freeTrialConsumed: S.optional(S.Boolean),
          licenseExpiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          freeTrialExpiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          authentication: AuthenticationSummary,
          tags: S.optional(TagMap),
          vpcConfiguration: S.optional(VpcConfiguration),
          networkAccessControl: S.optional(NetworkAccessConfiguration),
          grafanaToken: S.optional(S.String),
          ipAddressType: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          degradedWorkspaceReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceDescription" });
    case 7:
      return S.suspend(() => S.Struct({ workspace: WorkspaceDescription })).annotate({
        identifier: "AssociateLicenseResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          accountAccessType: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          organizationRoleName: S.optional(SensitiveString),
          permissionType: S.String,
          stackSetName: S.optional(S.String),
          workspaceDataSources: S.optional(DataSourceTypesList),
          workspaceDescription: S.optional(SensitiveString),
          workspaceName: S.optional(SensitiveString),
          workspaceNotificationDestinations: S.optional(NotificationDestinationsList),
          workspaceOrganizationalUnits: S.optional(OrganizationalUnitList),
          workspaceRoleArn: S.optional(SensitiveString),
          authenticationProviders: AuthenticationProviders,
          tags: S.optional(TagMap),
          vpcConfiguration: S.optional(VpcConfiguration),
          configuration: S.optional(S.String),
          networkAccessControl: S.optional(NetworkAccessConfiguration),
          grafanaVersion: S.optional(S.String),
          ipAddressType: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/workspaces" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateWorkspaceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          keyName: S.String,
          keyRole: S.String,
          secondsToLive: S.Number,
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/apikeys" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkspaceApiKeyRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ keyName: S.String, key: SensitiveString, workspaceId: S.String }),
      ).annotate({
        identifier: "CreateWorkspaceApiKeyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          grafanaRole: S.String,
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/serviceaccounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkspaceServiceAccountRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String, name: S.String, grafanaRole: S.String, workspaceId: S.String }),
      ).annotate({
        identifier: "CreateWorkspaceServiceAccountResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          secondsToLive: S.Number,
          serviceAccountId: S.String.pipe(T.HttpLabel("serviceAccountId")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateWorkspaceServiceAccountTokenRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String, name: S.String, key: SensitiveString }),
      ).annotate({
        identifier: "ServiceAccountTokenSummaryWithKey",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          serviceAccountToken: ServiceAccountTokenSummaryWithKey,
          serviceAccountId: S.String,
          workspaceId: S.String,
        }),
      ).annotate({
        identifier: "CreateWorkspaceServiceAccountTokenResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkspaceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          keyName: S.String.pipe(T.HttpLabel("keyName")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/apikeys/{keyName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkspaceApiKeyRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ keyName: S.String, workspaceId: S.String })).annotate({
        identifier: "DeleteWorkspaceApiKeyResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          serviceAccountId: S.String.pipe(T.HttpLabel("serviceAccountId")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkspaceServiceAccountRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ serviceAccountId: S.String, workspaceId: S.String }),
      ).annotate({
        identifier: "DeleteWorkspaceServiceAccountResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          tokenId: S.String.pipe(T.HttpLabel("tokenId")),
          serviceAccountId: S.String.pipe(T.HttpLabel("serviceAccountId")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens/{tokenId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteWorkspaceServiceAccountTokenRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ tokenId: S.String, serviceAccountId: S.String, workspaceId: S.String }),
      ).annotate({
        identifier: "DeleteWorkspaceServiceAccountTokenResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeWorkspaceRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ workspace: WorkspaceDescription })).annotate({
        identifier: "DescribeWorkspaceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/authentication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeWorkspaceAuthenticationRequest",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ url: S.String }),
        /*@__PURE__*/ S.Struct({ xml: S.String }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          login: S.optional(S.String),
          email: S.optional(S.String),
          groups: S.optional(S.String),
          role: S.optional(S.String),
          org: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssertionAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({ editor: S.optional(RoleValueList), admin: S.optional(RoleValueList) }),
      ).annotate({ identifier: "RoleValues" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          idpMetadata: IdpMetadata,
          assertionAttributes: S.optional(AssertionAttributes),
          roleValues: S.optional(RoleValues),
          allowedOrganizations: S.optional(AllowedOrganizations),
          loginValidityDuration: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SamlConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ status: S.String, configuration: S.optional(SamlConfiguration) }),
      ).annotate({ identifier: "SamlAuthentication" });
    case 7:
      return S.suspend(() => S.Struct({ ssoClientId: S.optional(S.String) })).annotate({
        identifier: "AwsSsoAuthentication",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          providers: AuthenticationProviders,
          saml: S.optional(SamlAuthentication),
          awsSso: S.optional(AwsSsoAuthentication),
        }),
      ).annotate({
        identifier: "AuthenticationDescription",
      });
    case 1:
      return S.suspend(() => S.Struct({ authentication: AuthenticationDescription })).annotate({
        identifier: "DescribeWorkspaceAuthenticationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ workspaceId: S.String.pipe(T.HttpLabel("workspaceId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeWorkspaceConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ configuration: S.String, grafanaVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeWorkspaceConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          licenseType: S.String.pipe(T.HttpLabel("licenseType")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/workspaces/{workspaceId}/licenses/{licenseType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateLicenseRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          userType: S.optional(S.String).pipe(T.HttpQuery("userType")),
          userId: S.optional(S.String).pipe(T.HttpQuery("userId")),
          groupId: S.optional(S.String).pipe(T.HttpQuery("groupId")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/permissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListPermissionsRequest" });
    case 6:
      return S.suspend(() => S.Struct({ id: S.String, type: S.String })).annotate({
        identifier: "User",
      });
    case 7:
      return S.suspend(() => S.Struct({ user: User, role: S.String })).annotate({
        identifier: "PermissionEntry",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PermissionEntry);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), permissions: PermissionEntryList }),
      ).annotate({ identifier: "ListPermissionsResponse" });
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          workspaceId: S.optional(S.String).pipe(T.HttpQuery("workspace-id")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/versions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListVersionsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          grafanaVersions: S.optional(GrafanaVersionList),
        }),
      ).annotate({ identifier: "ListVersionsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/workspaces" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkspacesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          created: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          description: S.optional(SensitiveString),
          endpoint: S.String,
          grafanaVersion: S.String,
          id: S.String,
          modified: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          name: S.optional(SensitiveString),
          notificationDestinations: S.optional(NotificationDestinationsList),
          status: S.String,
          authentication: AuthenticationSummary,
          tags: S.optional(TagMap),
          licenseType: S.optional(S.String),
          grafanaToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "WorkspaceSummary" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(WorkspaceSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ workspaces: WorkspaceList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkspacesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/workspaces/{workspaceId}/serviceaccounts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkspaceServiceAccountsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String, name: S.String, isDisabled: S.String, grafanaRole: S.String }),
      ).annotate({ identifier: "ServiceAccountSummary" });
    case 4:
      return S.Array(ServiceAccountSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          serviceAccounts: ServiceAccountList,
          workspaceId: S.String,
        }),
      ).annotate({
        identifier: "ListWorkspaceServiceAccountsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          serviceAccountId: S.String.pipe(T.HttpLabel("serviceAccountId")),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListWorkspaceServiceAccountTokensRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          name: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          expiresAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUsedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ServiceAccountTokenSummary",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ServiceAccountTokenSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          serviceAccountTokens: ServiceAccountTokenList,
          serviceAccountId: S.String,
          workspaceId: S.String,
        }),
      ).annotate({
        identifier: "ListWorkspaceServiceAccountTokensResponse",
      });
    case 2:
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
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
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
      return S.Array(User);
    case 6:
      return S.suspend(() =>
        S.Struct({ action: S.String, role: S.String, users: UserList }),
      ).annotate({ identifier: "UpdateInstruction" });
    case 7:
      return S.Array(UpdateInstruction);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          updateInstructionBatch: UpdateInstructionBatch,
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/workspaces/{workspaceId}/permissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePermissionsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ code: S.Number, message: S.String, causedBy: UpdateInstruction }),
      ).annotate({ identifier: "UpdateError" });
    case 2:
      return S.Array(UpdateError);
    case 3:
      return S.suspend(() => S.Struct({ errors: UpdateErrorList })).annotate({
        identifier: "UpdatePermissionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accountAccessType: S.optional(S.String),
          organizationRoleName: S.optional(SensitiveString),
          permissionType: S.optional(S.String),
          stackSetName: S.optional(S.String),
          workspaceDataSources: S.optional(DataSourceTypesList),
          workspaceDescription: S.optional(SensitiveString),
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          workspaceName: S.optional(SensitiveString),
          workspaceNotificationDestinations: S.optional(NotificationDestinationsList),
          workspaceOrganizationalUnits: S.optional(OrganizationalUnitList),
          workspaceRoleArn: S.optional(SensitiveString),
          vpcConfiguration: S.optional(VpcConfiguration),
          removeVpcConfiguration: S.optional(S.Boolean),
          networkAccessControl: S.optional(NetworkAccessConfiguration),
          removeNetworkAccessConfiguration: S.optional(S.Boolean),
          ipAddressType: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateWorkspaceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          authenticationProviders: AuthenticationProviders,
          samlConfiguration: S.optional(SamlConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workspaces/{workspaceId}/authentication" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkspaceAuthenticationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          configuration: S.String,
          workspaceId: S.String.pipe(T.HttpLabel("workspaceId")),
          grafanaVersion: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/workspaces/{workspaceId}/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateWorkspaceConfigurationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "UpdateWorkspaceConfigurationResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 1:
      return S.Array(ValidationExceptionField);
  }
}
