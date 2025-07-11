import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface ServiceQuotasV20190624 {
  associateServiceQuotaTemplate(
    input: AssociateServiceQuotaTemplateRequest,
  ): Effect.Effect<
    AssociateServiceQuotaTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | NoAvailableOrganizationException | OrganizationNotInAllFeaturesModeException | ServiceException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  createSupportCase(
    input: CreateSupportCaseRequest,
  ): Effect.Effect<
    CreateSupportCaseResponse,
    AccessDeniedException | DependencyAccessDeniedException | IllegalArgumentException | InvalidResourceStateException | NoSuchResourceException | ResourceAlreadyExistsException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  deleteServiceQuotaIncreaseRequestFromTemplate(
    input: DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  ): Effect.Effect<
    DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | IllegalArgumentException | NoAvailableOrganizationException | NoSuchResourceException | ServiceException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  disassociateServiceQuotaTemplate(
    input: DisassociateServiceQuotaTemplateRequest,
  ): Effect.Effect<
    DisassociateServiceQuotaTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | NoAvailableOrganizationException | ServiceException | ServiceQuotaTemplateNotInUseException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  getAWSDefaultServiceQuota(
    input: GetAWSDefaultServiceQuotaRequest,
  ): Effect.Effect<
    GetAWSDefaultServiceQuotaResponse,
    AccessDeniedException | IllegalArgumentException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getAssociationForServiceQuotaTemplate(
    input: GetAssociationForServiceQuotaTemplateRequest,
  ): Effect.Effect<
    GetAssociationForServiceQuotaTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | NoAvailableOrganizationException | ServiceException | ServiceQuotaTemplateNotInUseException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  getRequestedServiceQuotaChange(
    input: GetRequestedServiceQuotaChangeRequest,
  ): Effect.Effect<
    GetRequestedServiceQuotaChangeResponse,
    AccessDeniedException | IllegalArgumentException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getServiceQuota(
    input: GetServiceQuotaRequest,
  ): Effect.Effect<
    GetServiceQuotaResponse,
    AccessDeniedException | IllegalArgumentException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  getServiceQuotaIncreaseRequestFromTemplate(
    input: GetServiceQuotaIncreaseRequestFromTemplateRequest,
  ): Effect.Effect<
    GetServiceQuotaIncreaseRequestFromTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | IllegalArgumentException | NoAvailableOrganizationException | NoSuchResourceException | ServiceException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  listAWSDefaultServiceQuotas(
    input: ListAWSDefaultServiceQuotasRequest,
  ): Effect.Effect<
    ListAWSDefaultServiceQuotasResponse,
    AccessDeniedException | IllegalArgumentException | InvalidPaginationTokenException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listRequestedServiceQuotaChangeHistory(
    input: ListRequestedServiceQuotaChangeHistoryRequest,
  ): Effect.Effect<
    ListRequestedServiceQuotaChangeHistoryResponse,
    AccessDeniedException | IllegalArgumentException | InvalidPaginationTokenException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listRequestedServiceQuotaChangeHistoryByQuota(
    input: ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  ): Effect.Effect<
    ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
    AccessDeniedException | IllegalArgumentException | InvalidPaginationTokenException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listServiceQuotaIncreaseRequestsInTemplate(
    input: ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ): Effect.Effect<
    ListServiceQuotaIncreaseRequestsInTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | IllegalArgumentException | NoAvailableOrganizationException | ServiceException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  listServiceQuotas(
    input: ListServiceQuotasRequest,
  ): Effect.Effect<
    ListServiceQuotasResponse,
    AccessDeniedException | IllegalArgumentException | InvalidPaginationTokenException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listServices(
    input: ListServicesRequest,
  ): Effect.Effect<
    ListServicesResponse,
    AccessDeniedException | IllegalArgumentException | InvalidPaginationTokenException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | IllegalArgumentException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  putServiceQuotaIncreaseRequestIntoTemplate(
    input: PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  ): Effect.Effect<
    PutServiceQuotaIncreaseRequestIntoTemplateResponse,
    AccessDeniedException | AWSServiceAccessNotEnabledException | DependencyAccessDeniedException | IllegalArgumentException | NoAvailableOrganizationException | NoSuchResourceException | QuotaExceededException | ServiceException | TemplatesNotAvailableInRegionException | TooManyRequestsException | CommonAwsError
  >;
  requestServiceQuotaIncrease(
    input: RequestServiceQuotaIncreaseRequest,
  ): Effect.Effect<
    RequestServiceQuotaIncreaseResponse,
    AccessDeniedException | DependencyAccessDeniedException | IllegalArgumentException | InvalidResourceStateException | NoSuchResourceException | QuotaExceededException | ResourceAlreadyExistsException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | IllegalArgumentException | NoSuchResourceException | ServiceException | TagPolicyViolationException | TooManyRequestsException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | IllegalArgumentException | NoSuchResourceException | ServiceException | TooManyRequestsException | CommonAwsError
  >;
}

export type ServiceQuotas = ServiceQuotasV20190624;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AmazonResourceName = string;

export type AppliedLevelEnum = "ACCOUNT" | "RESOURCE" | "ALL";
export interface AssociateServiceQuotaTemplateRequest {
}
export interface AssociateServiceQuotaTemplateResponse {
}
export type AwsRegion = string;

export declare class AWSServiceAccessNotEnabledException extends Data.TaggedError(
  "AWSServiceAccessNotEnabledException",
)<{
  readonly Message?: string;
}> {}
export interface CreateSupportCaseRequest {
  RequestId: string;
}
export interface CreateSupportCaseResponse {
}
export type CustomerServiceEngagementId = string;

export type DateTime = Date | string;

export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
  ServiceCode: string;
  QuotaCode: string;
  AwsRegion: string;
}
export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
}
export declare class DependencyAccessDeniedException extends Data.TaggedError(
  "DependencyAccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface DisassociateServiceQuotaTemplateRequest {
}
export interface DisassociateServiceQuotaTemplateResponse {
}
export type ErrorCode = "DEPENDENCY_ACCESS_DENIED_ERROR" | "DEPENDENCY_THROTTLING_ERROR" | "DEPENDENCY_SERVICE_ERROR" | "SERVICE_QUOTA_NOT_AVAILABLE_ERROR";
export type ErrorMessage = string;

export interface ErrorReason {
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
export type ExceptionMessage = string;

export interface GetAssociationForServiceQuotaTemplateRequest {
}
export interface GetAssociationForServiceQuotaTemplateResponse {
  ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus;
}
export interface GetAWSDefaultServiceQuotaRequest {
  ServiceCode: string;
  QuotaCode: string;
}
export interface GetAWSDefaultServiceQuotaResponse {
  Quota?: ServiceQuota;
}
export interface GetRequestedServiceQuotaChangeRequest {
  RequestId: string;
}
export interface GetRequestedServiceQuotaChangeResponse {
  RequestedQuota?: RequestedServiceQuotaChange;
}
export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
  ServiceCode: string;
  QuotaCode: string;
  AwsRegion: string;
}
export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}
export interface GetServiceQuotaRequest {
  ServiceCode: string;
  QuotaCode: string;
  ContextId?: string;
}
export interface GetServiceQuotaResponse {
  Quota?: ServiceQuota;
}
export type GlobalQuota = boolean;

export declare class IllegalArgumentException extends Data.TaggedError(
  "IllegalArgumentException",
)<{
  readonly Message?: string;
}> {}
export type InputTagKeys = Array<string>;
export type InputTags = Array<Tag>;
export declare class InvalidPaginationTokenException extends Data.TaggedError(
  "InvalidPaginationTokenException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidResourceStateException extends Data.TaggedError(
  "InvalidResourceStateException",
)<{
  readonly Message?: string;
}> {}
export interface ListAWSDefaultServiceQuotasRequest {
  ServiceCode: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAWSDefaultServiceQuotasResponse {
  NextToken?: string;
  Quotas?: Array<ServiceQuota>;
}
export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
  ServiceCode: string;
  QuotaCode: string;
  Status?: RequestStatus;
  NextToken?: string;
  MaxResults?: number;
  QuotaRequestedAtLevel?: AppliedLevelEnum;
}
export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
  NextToken?: string;
  RequestedQuotas?: Array<RequestedServiceQuotaChange>;
}
export interface ListRequestedServiceQuotaChangeHistoryRequest {
  ServiceCode?: string;
  Status?: RequestStatus;
  NextToken?: string;
  MaxResults?: number;
  QuotaRequestedAtLevel?: AppliedLevelEnum;
}
export interface ListRequestedServiceQuotaChangeHistoryResponse {
  NextToken?: string;
  RequestedQuotas?: Array<RequestedServiceQuotaChange>;
}
export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
  ServiceCode?: string;
  AwsRegion?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
  ServiceQuotaIncreaseRequestInTemplateList?: Array<ServiceQuotaIncreaseRequestInTemplate>;
  NextToken?: string;
}
export interface ListServiceQuotasRequest {
  ServiceCode: string;
  NextToken?: string;
  MaxResults?: number;
  QuotaCode?: string;
  QuotaAppliedAtLevel?: AppliedLevelEnum;
}
export interface ListServiceQuotasResponse {
  NextToken?: string;
  Quotas?: Array<ServiceQuota>;
}
export interface ListServicesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListServicesResponse {
  NextToken?: string;
  Services?: Array<ServiceInfo>;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export type MaxResults = number;

export type MetricDimensionName = string;

export type MetricDimensionsMapDefinition = Record<string, string>;
export type MetricDimensionValue = string;

export interface MetricInfo {
  MetricNamespace?: string;
  MetricName?: string;
  MetricDimensions?: Record<string, string>;
  MetricStatisticRecommendation?: string;
}
export type NextToken = string;

export declare class NoAvailableOrganizationException extends Data.TaggedError(
  "NoAvailableOrganizationException",
)<{
  readonly Message?: string;
}> {}
export declare class NoSuchResourceException extends Data.TaggedError(
  "NoSuchResourceException",
)<{
  readonly Message?: string;
}> {}
export declare class OrganizationNotInAllFeaturesModeException extends Data.TaggedError(
  "OrganizationNotInAllFeaturesModeException",
)<{
  readonly Message?: string;
}> {}
export type OutputTags = Array<Tag>;
export type PeriodUnit = "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY" | "WEEK";
export type PeriodValue = number;

export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
  QuotaCode: string;
  ServiceCode: string;
  AwsRegion: string;
  DesiredValue: number;
}
export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
  ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
}
export type QuotaAdjustable = boolean;

export type QuotaArn = string;

export type QuotaCode = string;

export type QuotaContextId = string;

export interface QuotaContextInfo {
  ContextScope?: QuotaContextScope;
  ContextScopeType?: string;
  ContextId?: string;
}
export type QuotaContextScope = "RESOURCE" | "ACCOUNT";
export type QuotaContextScopeType = string;

export type QuotaDescription = string;

export declare class QuotaExceededException extends Data.TaggedError(
  "QuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type QuotaMetricName = string;

export type QuotaMetricNamespace = string;

export type QuotaName = string;

export interface QuotaPeriod {
  PeriodValue?: number;
  PeriodUnit?: PeriodUnit;
}
export type QuotaUnit = string;

export type QuotaValue = number;

export interface RequestedServiceQuotaChange {
  Id?: string;
  CaseId?: string;
  ServiceCode?: string;
  ServiceName?: string;
  QuotaCode?: string;
  QuotaName?: string;
  DesiredValue?: number;
  Status?: RequestStatus;
  Created?: Date | string;
  LastUpdated?: Date | string;
  Requester?: string;
  QuotaArn?: string;
  GlobalQuota?: boolean;
  Unit?: string;
  QuotaRequestedAtLevel?: AppliedLevelEnum;
  QuotaContext?: QuotaContextInfo;
}
export type RequestedServiceQuotaChangeHistoryListDefinition = Array<RequestedServiceQuotaChange>;
export type Requester = string;

export type RequestId = string;

export interface RequestServiceQuotaIncreaseRequest {
  ServiceCode: string;
  QuotaCode: string;
  DesiredValue: number;
  ContextId?: string;
  SupportCaseAllowed?: boolean;
}
export interface RequestServiceQuotaIncreaseResponse {
  RequestedQuota?: RequestedServiceQuotaChange;
}
export type RequestStatus = "PENDING" | "CASE_OPENED" | "APPROVED" | "DENIED" | "CASE_CLOSED" | "NOT_APPROVED" | "INVALID_REQUEST";
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type ServiceCode = string;

export declare class ServiceException extends Data.TaggedError(
  "ServiceException",
)<{
  readonly Message?: string;
}> {}
export interface ServiceInfo {
  ServiceCode?: string;
  ServiceName?: string;
}
export type ServiceInfoListDefinition = Array<ServiceInfo>;
export type ServiceName = string;

export interface ServiceQuota {
  ServiceCode?: string;
  ServiceName?: string;
  QuotaArn?: string;
  QuotaCode?: string;
  QuotaName?: string;
  Value?: number;
  Unit?: string;
  Adjustable?: boolean;
  GlobalQuota?: boolean;
  UsageMetric?: MetricInfo;
  Period?: QuotaPeriod;
  ErrorReason?: ErrorReason;
  QuotaAppliedAtLevel?: AppliedLevelEnum;
  QuotaContext?: QuotaContextInfo;
  Description?: string;
}
export interface ServiceQuotaIncreaseRequestInTemplate {
  ServiceCode?: string;
  ServiceName?: string;
  QuotaCode?: string;
  QuotaName?: string;
  DesiredValue?: number;
  AwsRegion?: string;
  Unit?: string;
  GlobalQuota?: boolean;
}
export type ServiceQuotaIncreaseRequestInTemplateList = Array<ServiceQuotaIncreaseRequestInTemplate>;
export type ServiceQuotaListDefinition = Array<ServiceQuota>;
export type ServiceQuotaTemplateAssociationStatus = "ASSOCIATED" | "DISASSOCIATED";
export declare class ServiceQuotaTemplateNotInUseException extends Data.TaggedError(
  "ServiceQuotaTemplateNotInUseException",
)<{
  readonly Message?: string;
}> {}
export type Statistic = string;

export type SupportCaseAllowed = boolean;

export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export declare class TagPolicyViolationException extends Data.TaggedError(
  "TagPolicyViolationException",
)<{
  readonly Message?: string;
}> {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class TemplatesNotAvailableInRegionException extends Data.TaggedError(
  "TemplatesNotAvailableInRegionException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export declare namespace AssociateServiceQuotaTemplate {
  export type Input = AssociateServiceQuotaTemplateRequest;
  export type Output = AssociateServiceQuotaTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | NoAvailableOrganizationException
    | OrganizationNotInAllFeaturesModeException
    | ServiceException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateSupportCase {
  export type Input = CreateSupportCaseRequest;
  export type Output = CreateSupportCaseResponse;
  export type Error =
    | AccessDeniedException
    | DependencyAccessDeniedException
    | IllegalArgumentException
    | InvalidResourceStateException
    | NoSuchResourceException
    | ResourceAlreadyExistsException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteServiceQuotaIncreaseRequestFromTemplate {
  export type Input = DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
  export type Output = DeleteServiceQuotaIncreaseRequestFromTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | IllegalArgumentException
    | NoAvailableOrganizationException
    | NoSuchResourceException
    | ServiceException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DisassociateServiceQuotaTemplate {
  export type Input = DisassociateServiceQuotaTemplateRequest;
  export type Output = DisassociateServiceQuotaTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | NoAvailableOrganizationException
    | ServiceException
    | ServiceQuotaTemplateNotInUseException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAWSDefaultServiceQuota {
  export type Input = GetAWSDefaultServiceQuotaRequest;
  export type Output = GetAWSDefaultServiceQuotaResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAssociationForServiceQuotaTemplate {
  export type Input = GetAssociationForServiceQuotaTemplateRequest;
  export type Output = GetAssociationForServiceQuotaTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | NoAvailableOrganizationException
    | ServiceException
    | ServiceQuotaTemplateNotInUseException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRequestedServiceQuotaChange {
  export type Input = GetRequestedServiceQuotaChangeRequest;
  export type Output = GetRequestedServiceQuotaChangeResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetServiceQuota {
  export type Input = GetServiceQuotaRequest;
  export type Output = GetServiceQuotaResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetServiceQuotaIncreaseRequestFromTemplate {
  export type Input = GetServiceQuotaIncreaseRequestFromTemplateRequest;
  export type Output = GetServiceQuotaIncreaseRequestFromTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | IllegalArgumentException
    | NoAvailableOrganizationException
    | NoSuchResourceException
    | ServiceException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListAWSDefaultServiceQuotas {
  export type Input = ListAWSDefaultServiceQuotasRequest;
  export type Output = ListAWSDefaultServiceQuotasResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | InvalidPaginationTokenException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListRequestedServiceQuotaChangeHistory {
  export type Input = ListRequestedServiceQuotaChangeHistoryRequest;
  export type Output = ListRequestedServiceQuotaChangeHistoryResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | InvalidPaginationTokenException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListRequestedServiceQuotaChangeHistoryByQuota {
  export type Input = ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
  export type Output = ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | InvalidPaginationTokenException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListServiceQuotaIncreaseRequestsInTemplate {
  export type Input = ListServiceQuotaIncreaseRequestsInTemplateRequest;
  export type Output = ListServiceQuotaIncreaseRequestsInTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | IllegalArgumentException
    | NoAvailableOrganizationException
    | ServiceException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListServiceQuotas {
  export type Input = ListServiceQuotasRequest;
  export type Output = ListServiceQuotasResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | InvalidPaginationTokenException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListServices {
  export type Input = ListServicesRequest;
  export type Output = ListServicesResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | InvalidPaginationTokenException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutServiceQuotaIncreaseRequestIntoTemplate {
  export type Input = PutServiceQuotaIncreaseRequestIntoTemplateRequest;
  export type Output = PutServiceQuotaIncreaseRequestIntoTemplateResponse;
  export type Error =
    | AccessDeniedException
    | AWSServiceAccessNotEnabledException
    | DependencyAccessDeniedException
    | IllegalArgumentException
    | NoAvailableOrganizationException
    | NoSuchResourceException
    | QuotaExceededException
    | ServiceException
    | TemplatesNotAvailableInRegionException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RequestServiceQuotaIncrease {
  export type Input = RequestServiceQuotaIncreaseRequest;
  export type Output = RequestServiceQuotaIncreaseResponse;
  export type Error =
    | AccessDeniedException
    | DependencyAccessDeniedException
    | IllegalArgumentException
    | InvalidResourceStateException
    | NoSuchResourceException
    | QuotaExceededException
    | ResourceAlreadyExistsException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | NoSuchResourceException
    | ServiceException
    | TagPolicyViolationException
    | TooManyRequestsException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | IllegalArgumentException
    | NoSuchResourceException
    | ServiceException
    | TooManyRequestsException
    | CommonAwsError;
}

