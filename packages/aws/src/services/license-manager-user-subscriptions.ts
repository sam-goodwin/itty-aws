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
  sdkId: "License Manager User Subscriptions",
  serviceShapeName: "LicenseManagerUserSubscriptions",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "license-manager-user-subscriptions" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
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
              `https://license-manager-user-subscriptions-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://license-manager-user-subscriptions-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://license-manager-user-subscriptions.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://license-manager-user-subscriptions.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type Directory = string;
export type IpV4 = string;
export type IpV4List = string[];
export type IpV6 = string;
export type IpV6List = string[];
export interface SecretsManagerCredentialsProvider {
  SecretId?: string;
}
export type CredentialsProvider = {
  SecretsManagerCredentialsProvider: SecretsManagerCredentialsProvider;
};
export type Subnet = string;
export type Subnets = string[];
export interface DomainNetworkSettings {
  Subnets: string[];
}
export interface ActiveDirectorySettings {
  DomainName?: string;
  DomainIpv4List?: string[];
  DomainIpv6List?: string[];
  DomainCredentialsProvider?: CredentialsProvider;
  DomainNetworkSettings?: DomainNetworkSettings;
}
export type ActiveDirectoryType = string;
export interface ActiveDirectoryIdentityProvider {
  DirectoryId?: string;
  ActiveDirectorySettings?: ActiveDirectorySettings;
  ActiveDirectoryType?: string;
  IsSharedActiveDirectory?: boolean;
}
export type IdentityProvider = { ActiveDirectoryIdentityProvider: ActiveDirectoryIdentityProvider };
export type Tags = { [key: string]: string | undefined };
export interface AssociateUserRequest {
  Username: string;
  InstanceId: string;
  IdentityProvider: IdentityProvider;
  Domain?: string;
  Tags?: { [key: string]: string | undefined };
}
export type Arn = string;
export interface InstanceUserSummary {
  Username: string;
  InstanceId: string;
  IdentityProvider: IdentityProvider;
  Status: string;
  InstanceUserArn?: string;
  StatusMessage?: string;
  Domain?: string;
  AssociationDate?: string;
  DisassociationDate?: string;
}
export interface AssociateUserResponse {
  InstanceUserSummary: InstanceUserSummary;
}
export type ServerType = string;
export interface RdsSalSettings {
  RdsSalCredentialsProvider: CredentialsProvider;
}
export type ServerSettings = { RdsSalSettings: RdsSalSettings };
export interface LicenseServerSettings {
  ServerType: string;
  ServerSettings: ServerSettings;
}
export interface CreateLicenseServerEndpointRequest {
  IdentityProviderArn: string;
  LicenseServerSettings: LicenseServerSettings;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateLicenseServerEndpointResponse {
  IdentityProviderArn?: string;
  LicenseServerEndpointArn?: string;
}
export interface DeleteLicenseServerEndpointRequest {
  LicenseServerEndpointArn: string;
  ServerType: string;
}
export interface ServerEndpoint {
  Endpoint?: string;
}
export type LicenseServerEndpointId = string;
export type LicenseServerEndpointProvisioningStatus = string;
export type LicenseServerHealthStatus = string;
export interface LicenseServer {
  ProvisioningStatus?: string;
  HealthStatus?: string;
  Ipv4Address?: string;
  Ipv6Address?: string;
}
export type LicenseServerList = LicenseServer[];
export interface LicenseServerEndpoint {
  IdentityProviderArn?: string;
  ServerType?: string;
  ServerEndpoint?: ServerEndpoint;
  StatusMessage?: string;
  LicenseServerEndpointId?: string;
  LicenseServerEndpointArn?: string;
  LicenseServerEndpointProvisioningStatus?: string;
  LicenseServers?: LicenseServer[];
  CreationTime?: Date;
}
export interface DeleteLicenseServerEndpointResponse {
  LicenseServerEndpoint?: LicenseServerEndpoint;
}
export interface DeregisterIdentityProviderRequest {
  IdentityProvider?: IdentityProvider;
  Product?: string;
  IdentityProviderArn?: string;
}
export type SecurityGroup = string;
export interface Settings {
  Subnets: string[];
  SecurityGroupId: string;
}
export interface IdentityProviderSummary {
  IdentityProvider: IdentityProvider;
  Settings: Settings;
  Product: string;
  Status: string;
  IdentityProviderArn?: string;
  FailureMessage?: string;
  OwnerAccountId?: string;
}
export interface DeregisterIdentityProviderResponse {
  IdentityProviderSummary: IdentityProviderSummary;
}
export interface DisassociateUserRequest {
  Username?: string;
  InstanceId?: string;
  IdentityProvider?: IdentityProvider;
  InstanceUserArn?: string;
  Domain?: string;
}
export interface DisassociateUserResponse {
  InstanceUserSummary: InstanceUserSummary;
}
export type BoxInteger = number;
export interface Filter {
  Attribute?: string;
  Operation?: string;
  Value?: string;
}
export type FilterList = Filter[];
export interface ListIdentityProvidersRequest {
  MaxResults?: number;
  Filters?: Filter[];
  NextToken?: string;
}
export type IdentityProviderSummaryList = IdentityProviderSummary[];
export interface ListIdentityProvidersResponse {
  IdentityProviderSummaries: IdentityProviderSummary[];
  NextToken?: string;
}
export interface ListInstancesRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: Filter[];
}
export type StringList = string[];
export interface InstanceSummary {
  InstanceId: string;
  Status: string;
  Products: string[];
  LastStatusCheckDate?: string;
  StatusMessage?: string;
  OwnerAccountId?: string;
  IdentityProvider?: IdentityProvider;
}
export type InstanceSummaryList = InstanceSummary[];
export interface ListInstancesResponse {
  InstanceSummaries?: InstanceSummary[];
  NextToken?: string;
}
export interface ListLicenseServerEndpointsRequest {
  MaxResults?: number;
  Filters?: Filter[];
  NextToken?: string;
}
export type LicenseServerEndpointList = LicenseServerEndpoint[];
export interface ListLicenseServerEndpointsResponse {
  LicenseServerEndpoints?: LicenseServerEndpoint[];
  NextToken?: string;
}
export interface ListProductSubscriptionsRequest {
  Product?: string;
  IdentityProvider: IdentityProvider;
  MaxResults?: number;
  Filters?: Filter[];
  NextToken?: string;
}
export interface ProductUserSummary {
  Username: string;
  Product: string;
  IdentityProvider: IdentityProvider;
  Status: string;
  ProductUserArn?: string;
  StatusMessage?: string;
  Domain?: string;
  SubscriptionStartDate?: string;
  SubscriptionEndDate?: string;
  LicenseExpirationDate?: string;
}
export type ProductUserSummaryList = ProductUserSummary[];
export interface ListProductSubscriptionsResponse {
  ProductUserSummaries?: ProductUserSummary[];
  NextToken?: string;
}
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface ListUserAssociationsRequest {
  InstanceId: string;
  IdentityProvider: IdentityProvider;
  MaxResults?: number;
  Filters?: Filter[];
  NextToken?: string;
}
export type InstanceUserSummaryList = InstanceUserSummary[];
export interface ListUserAssociationsResponse {
  InstanceUserSummaries?: InstanceUserSummary[];
  NextToken?: string;
}
export interface RegisterIdentityProviderRequest {
  IdentityProvider: IdentityProvider;
  Product: string;
  Settings?: Settings;
  Tags?: { [key: string]: string | undefined };
}
export interface RegisterIdentityProviderResponse {
  IdentityProviderSummary: IdentityProviderSummary;
}
export interface StartProductSubscriptionRequest {
  Username: string;
  IdentityProvider: IdentityProvider;
  Product: string;
  Domain?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface StartProductSubscriptionResponse {
  ProductUserSummary: ProductUserSummary;
}
export interface StopProductSubscriptionRequest {
  Username?: string;
  IdentityProvider?: IdentityProvider;
  Product?: string;
  ProductUserArn?: string;
  Domain?: string;
}
export interface StopProductSubscriptionResponse {
  ProductUserSummary: ProductUserSummary;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateSettings {
  AddSubnets: string[];
  RemoveSubnets: string[];
  SecurityGroupId?: string;
}
export interface UpdateIdentityProviderSettingsRequest {
  IdentityProvider?: IdentityProvider;
  Product?: string;
  IdentityProviderArn?: string;
  UpdateSettings: UpdateSettings;
}
export interface UpdateIdentityProviderSettingsResponse {
  IdentityProviderSummary: IdentityProviderSummary;
}
export type AssociateUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the user to an EC2 instance to utilize user-based subscriptions.
 *
 * Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as **Pending** billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the *Amazon Web Services Billing User Guide*.
 */
export const associateUser: API.OperationMethod<
  AssociateUserRequest,
  AssociateUserResponse,
  AssociateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<AssociateUserRequest>,
  output: __S(10) as any as S.Schema<AssociateUserResponse>,
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
  operationName: "AssociateUser",
}));

export type CreateLicenseServerEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a network endpoint for the Remote Desktop Services (RDS) license server.
 */
export const createLicenseServerEndpoint: API.OperationMethod<
  CreateLicenseServerEndpointRequest,
  CreateLicenseServerEndpointResponse,
  CreateLicenseServerEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<CreateLicenseServerEndpointRequest>,
  output: __S(15) as any as S.Schema<CreateLicenseServerEndpointResponse>,
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
  operationName: "CreateLicenseServerEndpoint",
}));

export type DeleteLicenseServerEndpointError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a `LicenseServerEndpoint` resource.
 */
export const deleteLicenseServerEndpoint: API.OperationMethod<
  DeleteLicenseServerEndpointRequest,
  DeleteLicenseServerEndpointResponse,
  DeleteLicenseServerEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DeleteLicenseServerEndpointRequest>,
  output: __S(21) as any as S.Schema<DeleteLicenseServerEndpointResponse>,
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
  operationName: "DeleteLicenseServerEndpoint",
}));

export type DeregisterIdentityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters the Active Directory identity provider from License Manager user-based subscriptions.
 */
export const deregisterIdentityProvider: API.OperationMethod<
  DeregisterIdentityProviderRequest,
  DeregisterIdentityProviderResponse,
  DeregisterIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<DeregisterIdentityProviderRequest>,
  output: __S(25) as any as S.Schema<DeregisterIdentityProviderResponse>,
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
  operationName: "DeregisterIdentityProvider",
}));

export type DisassociateUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates the user from an EC2 instance providing user-based subscriptions.
 */
export const disassociateUser: API.OperationMethod<
  DisassociateUserRequest,
  DisassociateUserResponse,
  DisassociateUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<DisassociateUserRequest>,
  output: __S(10) as any as S.Schema<DisassociateUserResponse>,
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
  operationName: "DisassociateUser",
}));

export type ListIdentityProvidersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Active Directory identity providers for user-based subscriptions.
 */
export const listIdentityProviders: API.PaginatedOperationMethod<
  ListIdentityProvidersRequest,
  ListIdentityProvidersResponse,
  ListIdentityProvidersError,
  Credentials | HttpClient.HttpClient,
  IdentityProviderSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(29) as any as S.Schema<ListIdentityProvidersRequest>,
  output: __S(31) as any as S.Schema<ListIdentityProvidersResponse>,
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
  operationName: "ListIdentityProviders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "IdentityProviderSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInstancesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the EC2 instances providing user-based subscriptions.
 */
export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient,
  InstanceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(32) as any as S.Schema<ListInstancesRequest>,
  output: __S(35) as any as S.Schema<ListInstancesResponse>,
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
  operationName: "ListInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "InstanceSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLicenseServerEndpointsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the Remote Desktop Services (RDS) License Server endpoints
 */
export const listLicenseServerEndpoints: API.PaginatedOperationMethod<
  ListLicenseServerEndpointsRequest,
  ListLicenseServerEndpointsResponse,
  ListLicenseServerEndpointsError,
  Credentials | HttpClient.HttpClient,
  LicenseServerEndpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(36) as any as S.Schema<ListLicenseServerEndpointsRequest>,
  output: __S(38) as any as S.Schema<ListLicenseServerEndpointsResponse>,
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
  operationName: "ListLicenseServerEndpoints",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "LicenseServerEndpoints",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProductSubscriptionsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the user-based subscription products available from an identity provider.
 */
export const listProductSubscriptions: API.PaginatedOperationMethod<
  ListProductSubscriptionsRequest,
  ListProductSubscriptionsResponse,
  ListProductSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  ProductUserSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(39) as any as S.Schema<ListProductSubscriptionsRequest>,
  output: __S(42) as any as S.Schema<ListProductSubscriptionsResponse>,
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
  operationName: "ListProductSubscriptions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProductUserSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
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
  input: __S(43) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(44) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListUserAssociationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists user associations for an identity provider.
 */
export const listUserAssociations: API.PaginatedOperationMethod<
  ListUserAssociationsRequest,
  ListUserAssociationsResponse,
  ListUserAssociationsError,
  Credentials | HttpClient.HttpClient,
  InstanceUserSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(45) as any as S.Schema<ListUserAssociationsRequest>,
  output: __S(47) as any as S.Schema<ListUserAssociationsResponse>,
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
  operationName: "ListUserAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "InstanceUserSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type RegisterIdentityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Registers an identity provider for user-based subscriptions.
 */
export const registerIdentityProvider: API.OperationMethod<
  RegisterIdentityProviderRequest,
  RegisterIdentityProviderResponse,
  RegisterIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<RegisterIdentityProviderRequest>,
  output: __S(25) as any as S.Schema<RegisterIdentityProviderResponse>,
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
  operationName: "RegisterIdentityProvider",
}));

export type StartProductSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a product subscription for a user with the specified identity provider.
 *
 * Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as **Pending** billing status) in Amazon Web Services Billing. For more information, see Viewing your monthly charges in the *Amazon Web Services Billing User Guide*.
 */
export const startProductSubscription: API.OperationMethod<
  StartProductSubscriptionRequest,
  StartProductSubscriptionResponse,
  StartProductSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<StartProductSubscriptionRequest>,
  output: __S(50) as any as S.Schema<StartProductSubscriptionResponse>,
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
  operationName: "StartProductSubscription",
}));

export type StopProductSubscriptionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops a product subscription for a user with the specified identity provider.
 */
export const stopProductSubscription: API.OperationMethod<
  StopProductSubscriptionRequest,
  StopProductSubscriptionResponse,
  StopProductSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<StopProductSubscriptionRequest>,
  output: __S(50) as any as S.Schema<StopProductSubscriptionResponse>,
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
  operationName: "StopProductSubscription",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<TagResourceRequest>,
  output: __S(53) as any as S.Schema<TagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = InternalServerException | ResourceNotFoundException | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<UntagResourceRequest>,
  output: __S(53) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateIdentityProviderSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates additional product configuration settings for the registered identity provider.
 */
export const updateIdentityProviderSettings: API.OperationMethod<
  UpdateIdentityProviderSettingsRequest,
  UpdateIdentityProviderSettingsResponse,
  UpdateIdentityProviderSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<UpdateIdentityProviderSettingsRequest>,
  output: __S(25) as any as S.Schema<UpdateIdentityProviderSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdentityProviderSettings",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ SecretId: S.optional(S.String) })).annotate({
        identifier: "SecretsManagerCredentialsProvider",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          SecretsManagerCredentialsProvider: __S(1),
        }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ Subnets: __S(0) })).annotate({
        identifier: "DomainNetworkSettings",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          DomainIpv4List: S.optional(__S(0)),
          DomainIpv6List: S.optional(__S(0)),
          DomainCredentialsProvider: S.optional(__S(2)),
          DomainNetworkSettings: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "ActiveDirectorySettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.optional(S.String),
          ActiveDirectorySettings: S.optional(__S(4)),
          ActiveDirectoryType: S.optional(S.String),
          IsSharedActiveDirectory: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ActiveDirectoryIdentityProvider",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          ActiveDirectoryIdentityProvider: __S(5),
        }),
      ]);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Username: S.String,
          InstanceId: S.String,
          IdentityProvider: __S(6),
          Domain: S.optional(S.String),
          Tags: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/AssociateUser" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateUserRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Username: S.String,
          InstanceId: S.String,
          IdentityProvider: __S(6),
          Status: S.String,
          InstanceUserArn: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          Domain: S.optional(S.String),
          AssociationDate: S.optional(S.String),
          DisassociationDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "InstanceUserSummary" });
    case 2:
      return S.suspend(() => S.Struct({ InstanceUserSummary: __S(9) })).annotate({
        identifier: "AssociateUserResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ RdsSalCredentialsProvider: __S(2) })).annotate({
        identifier: "RdsSalSettings",
      });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ RdsSalSettings: __S(11) })]);
    case 5:
      return S.suspend(() => S.Struct({ ServerType: S.String, ServerSettings: __S(12) })).annotate({
        identifier: "LicenseServerSettings",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IdentityProviderArn: S.String,
          LicenseServerSettings: __S(13),
          Tags: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/license-server/CreateLicenseServerEndpoint" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateLicenseServerEndpointRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IdentityProviderArn: S.optional(S.String),
          LicenseServerEndpointArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateLicenseServerEndpointResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LicenseServerEndpointArn: S.String, ServerType: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/license-server/DeleteLicenseServerEndpoint" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteLicenseServerEndpointRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Endpoint: S.optional(S.String) })).annotate({
        identifier: "ServerEndpoint",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProvisioningStatus: S.optional(S.String),
          HealthStatus: S.optional(S.String),
          Ipv4Address: S.optional(S.String),
          Ipv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "LicenseServer" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          IdentityProviderArn: S.optional(S.String),
          ServerType: S.optional(S.String),
          ServerEndpoint: S.optional(__S(17)),
          StatusMessage: S.optional(S.String),
          LicenseServerEndpointId: S.optional(S.String),
          LicenseServerEndpointArn: S.optional(S.String),
          LicenseServerEndpointProvisioningStatus: S.optional(S.String),
          LicenseServers: S.optional(__S(19)),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LicenseServerEndpoint" });
    case 5:
      return S.suspend(() => S.Struct({ LicenseServerEndpoint: S.optional(__S(20)) })).annotate({
        identifier: "DeleteLicenseServerEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IdentityProvider: S.optional(__S(6)),
          Product: S.optional(S.String),
          IdentityProviderArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identity-provider/DeregisterIdentityProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterIdentityProviderRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Subnets: __S(0), SecurityGroupId: S.String })).annotate({
        identifier: "Settings",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IdentityProvider: __S(6),
          Settings: __S(23),
          Product: S.String,
          Status: S.String,
          IdentityProviderArn: S.optional(S.String),
          FailureMessage: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentityProviderSummary" });
    case 1:
      return S.suspend(() => S.Struct({ IdentityProviderSummary: __S(24) })).annotate({
        identifier: "DeregisterIdentityProviderResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Username: S.optional(S.String),
          InstanceId: S.optional(S.String),
          IdentityProvider: S.optional(__S(6)),
          InstanceUserArn: S.optional(S.String),
          Domain: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/DisassociateUser" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisassociateUserRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.optional(S.String),
          Operation: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Filter" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(28)),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identity-provider/ListIdentityProviders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdentityProvidersRequest",
      });
    case 6:
      return S.Array(__S(24));
    case 7:
      return S.suspend(() =>
        S.Struct({
          IdentityProviderSummaries: __S(30),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIdentityProvidersResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(__S(28)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/instance/ListInstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListInstancesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.String,
          Status: S.String,
          Products: __S(0),
          LastStatusCheckDate: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          IdentityProvider: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "InstanceSummary" });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceSummaries: S.optional(__S(34)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListInstancesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(28)),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/license-server/ListLicenseServerEndpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListLicenseServerEndpointsRequest",
      });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          LicenseServerEndpoints: S.optional(__S(37)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListLicenseServerEndpointsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Product: S.optional(S.String),
          IdentityProvider: __S(6),
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(28)),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/ListProductSubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProductSubscriptionsRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Username: S.String,
          Product: S.String,
          IdentityProvider: __S(6),
          Status: S.String,
          ProductUserArn: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          Domain: S.optional(S.String),
          SubscriptionStartDate: S.optional(S.String),
          SubscriptionEndDate: S.optional(S.String),
          LicenseExpirationDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProductUserSummary" });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProductUserSummaries: S.optional(__S(41)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProductSubscriptionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
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
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(7)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.String,
          IdentityProvider: __S(6),
          MaxResults: S.optional(S.Number),
          Filters: S.optional(__S(28)),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/ListUserAssociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListUserAssociationsRequest",
      });
    case 6:
      return S.Array(__S(9));
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceUserSummaries: S.optional(__S(46)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListUserAssociationsResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IdentityProvider: __S(6),
          Product: S.String,
          Settings: S.optional(__S(23)),
          Tags: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identity-provider/RegisterIdentityProvider" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterIdentityProviderRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Username: S.String,
          IdentityProvider: __S(6),
          Product: S.String,
          Domain: S.optional(S.String),
          Tags: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/StartProductSubscription" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartProductSubscriptionRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ProductUserSummary: __S(40) })).annotate({
        identifier: "StartProductSubscriptionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Username: S.optional(S.String),
          IdentityProvider: S.optional(__S(6)),
          Product: S.optional(S.String),
          ProductUserArn: S.optional(S.String),
          Domain: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/StopProductSubscription" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopProductSubscriptionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: __S(7) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: __S(0).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AddSubnets: __S(0),
          RemoveSubnets: __S(0),
          SecurityGroupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateSettings" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IdentityProvider: S.optional(__S(6)),
          Product: S.optional(S.String),
          IdentityProviderArn: S.optional(S.String),
          UpdateSettings: __S(55),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identity-provider/UpdateIdentityProviderSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIdentityProviderSettingsRequest",
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
  }
}
