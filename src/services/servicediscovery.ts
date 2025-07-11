import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Route53AutoNaming_v20170314 {
  createHttpNamespace(
    input: CreateHttpNamespaceRequest,
  ): Effect.Effect<
    CreateHttpNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceAlreadyExists
    | ResourceLimitExceeded
    | TooManyTagsException
    | CommonAwsError
  >;
  createPrivateDnsNamespace(
    input: CreatePrivateDnsNamespaceRequest,
  ): Effect.Effect<
    CreatePrivateDnsNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceAlreadyExists
    | ResourceLimitExceeded
    | TooManyTagsException
    | CommonAwsError
  >;
  createPublicDnsNamespace(
    input: CreatePublicDnsNamespaceRequest,
  ): Effect.Effect<
    CreatePublicDnsNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceAlreadyExists
    | ResourceLimitExceeded
    | TooManyTagsException
    | CommonAwsError
  >;
  createService(
    input: CreateServiceRequest,
  ): Effect.Effect<
    CreateServiceResponse,
    | InvalidInput
    | NamespaceNotFound
    | ResourceLimitExceeded
    | ServiceAlreadyExists
    | TooManyTagsException
    | CommonAwsError
  >;
  deleteNamespace(
    input: DeleteNamespaceRequest,
  ): Effect.Effect<
    DeleteNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError
  >;
  deleteService(
    input: DeleteServiceRequest,
  ): Effect.Effect<
    DeleteServiceResponse,
    InvalidInput | ResourceInUse | ServiceNotFound | CommonAwsError
  >;
  deleteServiceAttributes(
    input: DeleteServiceAttributesRequest,
  ): Effect.Effect<
    DeleteServiceAttributesResponse,
    InvalidInput | ServiceNotFound | CommonAwsError
  >;
  deregisterInstance(
    input: DeregisterInstanceRequest,
  ): Effect.Effect<
    DeregisterInstanceResponse,
    | DuplicateRequest
    | InstanceNotFound
    | InvalidInput
    | ResourceInUse
    | ServiceNotFound
    | CommonAwsError
  >;
  discoverInstances(
    input: DiscoverInstancesRequest,
  ): Effect.Effect<
    DiscoverInstancesResponse,
    | InvalidInput
    | NamespaceNotFound
    | RequestLimitExceeded
    | ServiceNotFound
    | CommonAwsError
  >;
  discoverInstancesRevision(
    input: DiscoverInstancesRevisionRequest,
  ): Effect.Effect<
    DiscoverInstancesRevisionResponse,
    | InvalidInput
    | NamespaceNotFound
    | RequestLimitExceeded
    | ServiceNotFound
    | CommonAwsError
  >;
  getInstance(
    input: GetInstanceRequest,
  ): Effect.Effect<
    GetInstanceResponse,
    InstanceNotFound | InvalidInput | ServiceNotFound | CommonAwsError
  >;
  getInstancesHealthStatus(
    input: GetInstancesHealthStatusRequest,
  ): Effect.Effect<
    GetInstancesHealthStatusResponse,
    InstanceNotFound | InvalidInput | ServiceNotFound | CommonAwsError
  >;
  getNamespace(
    input: GetNamespaceRequest,
  ): Effect.Effect<
    GetNamespaceResponse,
    InvalidInput | NamespaceNotFound | CommonAwsError
  >;
  getOperation(
    input: GetOperationRequest,
  ): Effect.Effect<
    GetOperationResponse,
    InvalidInput | OperationNotFound | CommonAwsError
  >;
  getService(
    input: GetServiceRequest,
  ): Effect.Effect<
    GetServiceResponse,
    InvalidInput | ServiceNotFound | CommonAwsError
  >;
  getServiceAttributes(
    input: GetServiceAttributesRequest,
  ): Effect.Effect<
    GetServiceAttributesResponse,
    InvalidInput | ServiceNotFound | CommonAwsError
  >;
  listInstances(
    input: ListInstancesRequest,
  ): Effect.Effect<
    ListInstancesResponse,
    InvalidInput | ServiceNotFound | CommonAwsError
  >;
  listNamespaces(
    input: ListNamespacesRequest,
  ): Effect.Effect<ListNamespacesResponse, InvalidInput | CommonAwsError>;
  listOperations(
    input: ListOperationsRequest,
  ): Effect.Effect<ListOperationsResponse, InvalidInput | CommonAwsError>;
  listServices(
    input: ListServicesRequest,
  ): Effect.Effect<ListServicesResponse, InvalidInput | CommonAwsError>;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InvalidInput | ResourceNotFoundException | CommonAwsError
  >;
  registerInstance(
    input: RegisterInstanceRequest,
  ): Effect.Effect<
    RegisterInstanceResponse,
    | DuplicateRequest
    | InvalidInput
    | ResourceInUse
    | ResourceLimitExceeded
    | ServiceNotFound
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InvalidInput
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InvalidInput | ResourceNotFoundException | CommonAwsError
  >;
  updateHttpNamespace(
    input: UpdateHttpNamespaceRequest,
  ): Effect.Effect<
    UpdateHttpNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError
  >;
  updateInstanceCustomHealthStatus(
    input: UpdateInstanceCustomHealthStatusRequest,
  ): Effect.Effect<
    {},
    | CustomHealthNotFound
    | InstanceNotFound
    | InvalidInput
    | ServiceNotFound
    | CommonAwsError
  >;
  updatePrivateDnsNamespace(
    input: UpdatePrivateDnsNamespaceRequest,
  ): Effect.Effect<
    UpdatePrivateDnsNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError
  >;
  updatePublicDnsNamespace(
    input: UpdatePublicDnsNamespaceRequest,
  ): Effect.Effect<
    UpdatePublicDnsNamespaceResponse,
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError
  >;
  updateService(
    input: UpdateServiceRequest,
  ): Effect.Effect<
    UpdateServiceResponse,
    DuplicateRequest | InvalidInput | ServiceNotFound | CommonAwsError
  >;
  updateServiceAttributes(
    input: UpdateServiceAttributesRequest,
  ): Effect.Effect<
    UpdateServiceAttributesResponse,
    | InvalidInput
    | ServiceAttributesLimitExceededException
    | ServiceNotFound
    | CommonAwsError
  >;
}

export type Servicediscovery = Route53AutoNaming_v20170314;

export type AmazonResourceName = string;

export type Arn = string;

export type Attributes = Record<string, string>;
export type AttrKey = string;

export type AttrValue = string;

export type Code = string;

export interface CreateHttpNamespaceRequest {
  Name: string;
  CreatorRequestId?: string;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateHttpNamespaceResponse {
  OperationId?: string;
}
export interface CreatePrivateDnsNamespaceRequest {
  Name: string;
  CreatorRequestId?: string;
  Description?: string;
  Vpc: string;
  Tags?: Array<Tag>;
  Properties?: PrivateDnsNamespaceProperties;
}
export interface CreatePrivateDnsNamespaceResponse {
  OperationId?: string;
}
export interface CreatePublicDnsNamespaceRequest {
  Name: string;
  CreatorRequestId?: string;
  Description?: string;
  Tags?: Array<Tag>;
  Properties?: PublicDnsNamespaceProperties;
}
export interface CreatePublicDnsNamespaceResponse {
  OperationId?: string;
}
export interface CreateServiceRequest {
  Name: string;
  NamespaceId?: string;
  CreatorRequestId?: string;
  Description?: string;
  DnsConfig?: DnsConfig;
  HealthCheckConfig?: HealthCheckConfig;
  HealthCheckCustomConfig?: HealthCheckCustomConfig;
  Tags?: Array<Tag>;
  Type?: ServiceTypeOption;
}
export interface CreateServiceResponse {
  Service?: Service;
}
export declare class CustomHealthNotFound extends Data.TaggedError(
  "CustomHealthNotFound",
)<{
  readonly Message?: string;
}> {}
export type CustomHealthStatus = "HEALTHY" | "UNHEALTHY";
export interface DeleteNamespaceRequest {
  Id: string;
}
export interface DeleteNamespaceResponse {
  OperationId?: string;
}
export interface DeleteServiceAttributesRequest {
  ServiceId: string;
  Attributes: Array<string>;
}
export interface DeleteServiceAttributesResponse {}
export interface DeleteServiceRequest {
  Id: string;
}
export interface DeleteServiceResponse {}
export interface DeregisterInstanceRequest {
  ServiceId: string;
  InstanceId: string;
}
export interface DeregisterInstanceResponse {
  OperationId?: string;
}
export interface DiscoverInstancesRequest {
  NamespaceName: string;
  ServiceName: string;
  MaxResults?: number;
  QueryParameters?: Record<string, string>;
  OptionalParameters?: Record<string, string>;
  HealthStatus?: HealthStatusFilter;
}
export interface DiscoverInstancesResponse {
  Instances?: Array<HttpInstanceSummary>;
  InstancesRevision?: number;
}
export interface DiscoverInstancesRevisionRequest {
  NamespaceName: string;
  ServiceName: string;
}
export interface DiscoverInstancesRevisionResponse {
  InstancesRevision?: number;
}
export type DiscoverMaxResults = number;

export interface DnsConfig {
  NamespaceId?: string;
  RoutingPolicy?: RoutingPolicy;
  DnsRecords: Array<DnsRecord>;
}
export interface DnsConfigChange {
  DnsRecords: Array<DnsRecord>;
}
export interface DnsProperties {
  HostedZoneId?: string;
  SOA?: SOA;
}
export interface DnsRecord {
  Type: RecordType;
  TTL: number;
}
export type DnsRecordList = Array<DnsRecord>;
export declare class DuplicateRequest extends Data.TaggedError(
  "DuplicateRequest",
)<{
  readonly Message?: string;
  readonly DuplicateOperationId?: string;
}> {}
export type ErrorMessage = string;

export type FailureThreshold = number;

export type FilterCondition = "EQ" | "IN" | "BETWEEN" | "BEGINS_WITH";
export type FilterValue = string;

export type FilterValues = Array<string>;
export interface GetInstanceRequest {
  ServiceId: string;
  InstanceId: string;
}
export interface GetInstanceResponse {
  Instance?: Instance;
}
export interface GetInstancesHealthStatusRequest {
  ServiceId: string;
  Instances?: Array<string>;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetInstancesHealthStatusResponse {
  Status?: Record<string, HealthStatus>;
  NextToken?: string;
}
export interface GetNamespaceRequest {
  Id: string;
}
export interface GetNamespaceResponse {
  Namespace?: Namespace;
}
export interface GetOperationRequest {
  OperationId: string;
}
export interface GetOperationResponse {
  Operation?: Operation;
}
export interface GetServiceAttributesRequest {
  ServiceId: string;
}
export interface GetServiceAttributesResponse {
  ServiceAttributes?: ServiceAttributes;
}
export interface GetServiceRequest {
  Id: string;
}
export interface GetServiceResponse {
  Service?: Service;
}
export interface HealthCheckConfig {
  Type: HealthCheckType;
  ResourcePath?: string;
  FailureThreshold?: number;
}
export interface HealthCheckCustomConfig {
  FailureThreshold?: number;
}
export type HealthCheckType = "HTTP" | "HTTPS" | "TCP";
export type HealthStatus = "HEALTHY" | "UNHEALTHY" | "UNKNOWN";
export type HealthStatusFilter =
  | "HEALTHY"
  | "UNHEALTHY"
  | "ALL"
  | "HEALTHY_OR_ELSE_ALL";
export interface HttpInstanceSummary {
  InstanceId?: string;
  NamespaceName?: string;
  ServiceName?: string;
  HealthStatus?: HealthStatus;
  Attributes?: Record<string, string>;
}
export type HttpInstanceSummaryList = Array<HttpInstanceSummary>;
export interface HttpNamespaceChange {
  Description: string;
}
export interface HttpProperties {
  HttpName?: string;
}
export interface Instance {
  Id: string;
  CreatorRequestId?: string;
  Attributes?: Record<string, string>;
}
export type InstanceHealthStatusMap = Record<string, HealthStatus>;
export type InstanceId = string;

export type InstanceIdList = Array<string>;
export declare class InstanceNotFound extends Data.TaggedError(
  "InstanceNotFound",
)<{
  readonly Message?: string;
}> {}
export interface InstanceSummary {
  Id?: string;
  Attributes?: Record<string, string>;
}
export type InstanceSummaryList = Array<InstanceSummary>;
export declare class InvalidInput extends Data.TaggedError("InvalidInput")<{
  readonly Message?: string;
}> {}
export interface ListInstancesRequest {
  ServiceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInstancesResponse {
  Instances?: Array<InstanceSummary>;
  NextToken?: string;
}
export interface ListNamespacesRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<NamespaceFilter>;
}
export interface ListNamespacesResponse {
  Namespaces?: Array<NamespaceSummary>;
  NextToken?: string;
}
export interface ListOperationsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<OperationFilter>;
}
export interface ListOperationsResponse {
  Operations?: Array<OperationSummary>;
  NextToken?: string;
}
export interface ListServicesRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Array<ServiceFilter>;
}
export interface ListServicesResponse {
  Services?: Array<ServiceSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export type Message = string;

export interface Namespace {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: NamespaceType;
  Description?: string;
  ServiceCount?: number;
  Properties?: NamespaceProperties;
  CreateDate?: Date | string;
  CreatorRequestId?: string;
}
export declare class NamespaceAlreadyExists extends Data.TaggedError(
  "NamespaceAlreadyExists",
)<{
  readonly Message?: string;
  readonly CreatorRequestId?: string;
  readonly NamespaceId?: string;
}> {}
export interface NamespaceFilter {
  Name: NamespaceFilterName;
  Values: Array<string>;
  Condition?: FilterCondition;
}
export type NamespaceFilterName = "TYPE" | "NAME" | "HTTP_NAME";
export type NamespaceFilters = Array<NamespaceFilter>;
export type NamespaceName = string;

export type NamespaceNameHttp = string;

export type NamespaceNamePrivate = string;

export type NamespaceNamePublic = string;

export declare class NamespaceNotFound extends Data.TaggedError(
  "NamespaceNotFound",
)<{
  readonly Message?: string;
}> {}
export interface NamespaceProperties {
  DnsProperties?: DnsProperties;
  HttpProperties?: HttpProperties;
}
export type NamespaceSummariesList = Array<NamespaceSummary>;
export interface NamespaceSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: NamespaceType;
  Description?: string;
  ServiceCount?: number;
  Properties?: NamespaceProperties;
  CreateDate?: Date | string;
}
export type NamespaceType = "DNS_PUBLIC" | "DNS_PRIVATE" | "HTTP";
export type NextToken = string;

export interface Operation {
  Id?: string;
  Type?: OperationType;
  Status?: OperationStatus;
  ErrorMessage?: string;
  ErrorCode?: string;
  CreateDate?: Date | string;
  UpdateDate?: Date | string;
  Targets?: Record<OperationTargetType, string>;
}
export interface OperationFilter {
  Name: OperationFilterName;
  Values: Array<string>;
  Condition?: FilterCondition;
}
export type OperationFilterName =
  | "NAMESPACE_ID"
  | "SERVICE_ID"
  | "STATUS"
  | "TYPE"
  | "UPDATE_DATE";
export type OperationFilters = Array<OperationFilter>;
export type OperationId = string;

export declare class OperationNotFound extends Data.TaggedError(
  "OperationNotFound",
)<{
  readonly Message?: string;
}> {}
export type OperationStatus = "SUBMITTED" | "PENDING" | "SUCCESS" | "FAIL";
export interface OperationSummary {
  Id?: string;
  Status?: OperationStatus;
}
export type OperationSummaryList = Array<OperationSummary>;
export type OperationTargetsMap = Record<OperationTargetType, string>;
export type OperationTargetType = "NAMESPACE" | "SERVICE" | "INSTANCE";
export type OperationType =
  | "CREATE_NAMESPACE"
  | "DELETE_NAMESPACE"
  | "UPDATE_NAMESPACE"
  | "UPDATE_SERVICE"
  | "REGISTER_INSTANCE"
  | "DEREGISTER_INSTANCE";
export interface PrivateDnsNamespaceChange {
  Description?: string;
  Properties?: PrivateDnsNamespacePropertiesChange;
}
export interface PrivateDnsNamespaceProperties {
  DnsProperties: PrivateDnsPropertiesMutable;
}
export interface PrivateDnsNamespacePropertiesChange {
  DnsProperties: PrivateDnsPropertiesMutableChange;
}
export interface PrivateDnsPropertiesMutable {
  SOA: SOA;
}
export interface PrivateDnsPropertiesMutableChange {
  SOA: SOAChange;
}
export interface PublicDnsNamespaceChange {
  Description?: string;
  Properties?: PublicDnsNamespacePropertiesChange;
}
export interface PublicDnsNamespaceProperties {
  DnsProperties: PublicDnsPropertiesMutable;
}
export interface PublicDnsNamespacePropertiesChange {
  DnsProperties: PublicDnsPropertiesMutableChange;
}
export interface PublicDnsPropertiesMutable {
  SOA: SOA;
}
export interface PublicDnsPropertiesMutableChange {
  SOA: SOAChange;
}
export type RecordTTL = number;

export type RecordType = "SRV" | "A" | "AAAA" | "CNAME";
export interface RegisterInstanceRequest {
  ServiceId: string;
  InstanceId: string;
  CreatorRequestId?: string;
  Attributes: Record<string, string>;
}
export interface RegisterInstanceResponse {
  OperationId?: string;
}
export declare class RequestLimitExceeded extends Data.TaggedError(
  "RequestLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export type ResourceCount = number;

export type ResourceDescription = string;

export type ResourceId = string;

export declare class ResourceInUse extends Data.TaggedError("ResourceInUse")<{
  readonly Message?: string;
}> {}
export declare class ResourceLimitExceeded extends Data.TaggedError(
  "ResourceLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourcePath = string;

export type Revision = number;

export type RoutingPolicy = "MULTIVALUE" | "WEIGHTED";
export interface Service {
  Id?: string;
  Arn?: string;
  Name?: string;
  NamespaceId?: string;
  Description?: string;
  InstanceCount?: number;
  DnsConfig?: DnsConfig;
  Type?: ServiceType;
  HealthCheckConfig?: HealthCheckConfig;
  HealthCheckCustomConfig?: HealthCheckCustomConfig;
  CreateDate?: Date | string;
  CreatorRequestId?: string;
}
export declare class ServiceAlreadyExists extends Data.TaggedError(
  "ServiceAlreadyExists",
)<{
  readonly Message?: string;
  readonly CreatorRequestId?: string;
  readonly ServiceId?: string;
}> {}
export type ServiceAttributeKey = string;

export type ServiceAttributeKeyList = Array<string>;
export interface ServiceAttributes {
  ServiceArn?: string;
  Attributes?: Record<string, string>;
}
export declare class ServiceAttributesLimitExceededException extends Data.TaggedError(
  "ServiceAttributesLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ServiceAttributesMap = Record<string, string>;
export type ServiceAttributeValue = string;

export interface ServiceChange {
  Description?: string;
  DnsConfig?: DnsConfigChange;
  HealthCheckConfig?: HealthCheckConfig;
}
export interface ServiceFilter {
  Name: ServiceFilterName;
  Values: Array<string>;
  Condition?: FilterCondition;
}
export type ServiceFilterName = "NAMESPACE_ID";
export type ServiceFilters = Array<ServiceFilter>;
export type ServiceName = string;

export declare class ServiceNotFound extends Data.TaggedError(
  "ServiceNotFound",
)<{
  readonly Message?: string;
}> {}
export type ServiceSummariesList = Array<ServiceSummary>;
export interface ServiceSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: ServiceType;
  Description?: string;
  InstanceCount?: number;
  DnsConfig?: DnsConfig;
  HealthCheckConfig?: HealthCheckConfig;
  HealthCheckCustomConfig?: HealthCheckCustomConfig;
  CreateDate?: Date | string;
}
export type ServiceType = "HTTP" | "DNS_HTTP" | "DNS";
export type ServiceTypeOption = "HTTP";
export interface SOA {
  TTL: number;
}
export interface SOAChange {
  TTL: number;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Timestamp = Date | string;

export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateHttpNamespaceRequest {
  Id: string;
  UpdaterRequestId?: string;
  Namespace: HttpNamespaceChange;
}
export interface UpdateHttpNamespaceResponse {
  OperationId?: string;
}
export interface UpdateInstanceCustomHealthStatusRequest {
  ServiceId: string;
  InstanceId: string;
  Status: CustomHealthStatus;
}
export interface UpdatePrivateDnsNamespaceRequest {
  Id: string;
  UpdaterRequestId?: string;
  Namespace: PrivateDnsNamespaceChange;
}
export interface UpdatePrivateDnsNamespaceResponse {
  OperationId?: string;
}
export interface UpdatePublicDnsNamespaceRequest {
  Id: string;
  UpdaterRequestId?: string;
  Namespace: PublicDnsNamespaceChange;
}
export interface UpdatePublicDnsNamespaceResponse {
  OperationId?: string;
}
export interface UpdateServiceAttributesRequest {
  ServiceId: string;
  Attributes: Record<string, string>;
}
export interface UpdateServiceAttributesResponse {}
export interface UpdateServiceRequest {
  Id: string;
  Service: ServiceChange;
}
export interface UpdateServiceResponse {
  OperationId?: string;
}
export declare namespace CreateHttpNamespace {
  export type Input = CreateHttpNamespaceRequest;
  export type Output = CreateHttpNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceAlreadyExists
    | ResourceLimitExceeded
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreatePrivateDnsNamespace {
  export type Input = CreatePrivateDnsNamespaceRequest;
  export type Output = CreatePrivateDnsNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceAlreadyExists
    | ResourceLimitExceeded
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreatePublicDnsNamespace {
  export type Input = CreatePublicDnsNamespaceRequest;
  export type Output = CreatePublicDnsNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceAlreadyExists
    | ResourceLimitExceeded
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace CreateService {
  export type Input = CreateServiceRequest;
  export type Output = CreateServiceResponse;
  export type Error =
    | InvalidInput
    | NamespaceNotFound
    | ResourceLimitExceeded
    | ServiceAlreadyExists
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace DeleteNamespace {
  export type Input = DeleteNamespaceRequest;
  export type Output = DeleteNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace DeleteService {
  export type Input = DeleteServiceRequest;
  export type Output = DeleteServiceResponse;
  export type Error =
    | InvalidInput
    | ResourceInUse
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace DeleteServiceAttributes {
  export type Input = DeleteServiceAttributesRequest;
  export type Output = DeleteServiceAttributesResponse;
  export type Error = InvalidInput | ServiceNotFound | CommonAwsError;
}

export declare namespace DeregisterInstance {
  export type Input = DeregisterInstanceRequest;
  export type Output = DeregisterInstanceResponse;
  export type Error =
    | DuplicateRequest
    | InstanceNotFound
    | InvalidInput
    | ResourceInUse
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace DiscoverInstances {
  export type Input = DiscoverInstancesRequest;
  export type Output = DiscoverInstancesResponse;
  export type Error =
    | InvalidInput
    | NamespaceNotFound
    | RequestLimitExceeded
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace DiscoverInstancesRevision {
  export type Input = DiscoverInstancesRevisionRequest;
  export type Output = DiscoverInstancesRevisionResponse;
  export type Error =
    | InvalidInput
    | NamespaceNotFound
    | RequestLimitExceeded
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace GetInstance {
  export type Input = GetInstanceRequest;
  export type Output = GetInstanceResponse;
  export type Error =
    | InstanceNotFound
    | InvalidInput
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace GetInstancesHealthStatus {
  export type Input = GetInstancesHealthStatusRequest;
  export type Output = GetInstancesHealthStatusResponse;
  export type Error =
    | InstanceNotFound
    | InvalidInput
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace GetNamespace {
  export type Input = GetNamespaceRequest;
  export type Output = GetNamespaceResponse;
  export type Error = InvalidInput | NamespaceNotFound | CommonAwsError;
}

export declare namespace GetOperation {
  export type Input = GetOperationRequest;
  export type Output = GetOperationResponse;
  export type Error = InvalidInput | OperationNotFound | CommonAwsError;
}

export declare namespace GetService {
  export type Input = GetServiceRequest;
  export type Output = GetServiceResponse;
  export type Error = InvalidInput | ServiceNotFound | CommonAwsError;
}

export declare namespace GetServiceAttributes {
  export type Input = GetServiceAttributesRequest;
  export type Output = GetServiceAttributesResponse;
  export type Error = InvalidInput | ServiceNotFound | CommonAwsError;
}

export declare namespace ListInstances {
  export type Input = ListInstancesRequest;
  export type Output = ListInstancesResponse;
  export type Error = InvalidInput | ServiceNotFound | CommonAwsError;
}

export declare namespace ListNamespaces {
  export type Input = ListNamespacesRequest;
  export type Output = ListNamespacesResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListOperations {
  export type Input = ListOperationsRequest;
  export type Output = ListOperationsResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListServices {
  export type Input = ListServicesRequest;
  export type Output = ListServicesResponse;
  export type Error = InvalidInput | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = InvalidInput | ResourceNotFoundException | CommonAwsError;
}

export declare namespace RegisterInstance {
  export type Input = RegisterInstanceRequest;
  export type Output = RegisterInstanceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | ResourceInUse
    | ResourceLimitExceeded
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InvalidInput
    | ResourceNotFoundException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error = InvalidInput | ResourceNotFoundException | CommonAwsError;
}

export declare namespace UpdateHttpNamespace {
  export type Input = UpdateHttpNamespaceRequest;
  export type Output = UpdateHttpNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace UpdateInstanceCustomHealthStatus {
  export type Input = UpdateInstanceCustomHealthStatusRequest;
  export type Output = {};
  export type Error =
    | CustomHealthNotFound
    | InstanceNotFound
    | InvalidInput
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace UpdatePrivateDnsNamespace {
  export type Input = UpdatePrivateDnsNamespaceRequest;
  export type Output = UpdatePrivateDnsNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace UpdatePublicDnsNamespace {
  export type Input = UpdatePublicDnsNamespaceRequest;
  export type Output = UpdatePublicDnsNamespaceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | NamespaceNotFound
    | ResourceInUse
    | CommonAwsError;
}

export declare namespace UpdateService {
  export type Input = UpdateServiceRequest;
  export type Output = UpdateServiceResponse;
  export type Error =
    | DuplicateRequest
    | InvalidInput
    | ServiceNotFound
    | CommonAwsError;
}

export declare namespace UpdateServiceAttributes {
  export type Input = UpdateServiceAttributesRequest;
  export type Output = UpdateServiceAttributesResponse;
  export type Error =
    | InvalidInput
    | ServiceAttributesLimitExceededException
    | ServiceNotFound
    | CommonAwsError;
}
