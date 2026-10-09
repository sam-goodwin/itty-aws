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
  sdkId: "Marketplace Catalog",
  serviceShapeName: "AWSMPSeymour",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "aws-marketplace" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-09-17");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
        if (Region === "us-east-1" && UseFIPS === false && UseDualStack === true) {
          return e(
            `https://catalog-marketplace.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://catalog.marketplace-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true && UseDualStack === false) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://catalog.marketplace-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseFIPS === false && UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://catalog.marketplace.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://catalog.marketplace.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
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
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()(
    "InternalServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(423),
  ) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotSupportedException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotSupportedException>()(
    "ResourceNotSupportedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(415),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ValidationExceptionFieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(95)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(422),
  ).pipe(C.withBadRequestError) {}
export type Catalog = string;
export type EntityId = string;
export interface EntityRequest {
  Catalog: string;
  EntityId: string;
}
export type EntityRequestList = EntityRequest[];
export interface BatchDescribeEntitiesRequest {
  EntityRequestList: EntityRequest[];
}
export type EntityType = string;
export type ARN = string;
export type Identifier = string;
export type DateTimeISO8601 = string;
export type JsonDocumentType = unknown;
export interface EntityDetail {
  EntityType?: string;
  EntityArn?: string;
  EntityIdentifier?: string;
  LastModifiedDate?: string;
  DetailsDocument?: any;
}
export type EntityDetails = { [key: string]: EntityDetail | undefined };
export type BatchDescribeErrorCodeString = string;
export type BatchDescribeErrorMessageContent = string;
export interface BatchDescribeErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type Errors = { [key: string]: BatchDescribeErrorDetail | undefined };
export interface BatchDescribeEntitiesResponse {
  EntityDetails?: { [key: string]: EntityDetail | undefined };
  Errors?: { [key: string]: BatchDescribeErrorDetail | undefined };
}
export type ResourceId = string;
export interface CancelChangeSetRequest {
  Catalog: string;
  ChangeSetId: string;
}
export interface CancelChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
}
export type ResourceARN = string;
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export type AssessmentIdentifier = string;
export type DescribeAssessmentMaxResultInteger = number;
export type NextToken = string;
export interface DescribeAssessmentRequest {
  Catalog: string;
  AssessmentIdentifier: string;
  MaxResults?: number;
  NextToken?: string;
}
export type VersionedFrameworkId = string;
export interface AssessmentTargetSummary {
  EntityId?: string;
  ChangeSetId?: string;
}
export interface AMISecuritySummary {
  DeliveryOptionId?: string;
}
export interface ContainerSecuritySummary {
  DeliveryOptionId?: string;
}
export type FrameworkSummary =
  | { AMISecuritySummary: AMISecuritySummary; ContainerSecuritySummary?: never }
  | { AMISecuritySummary?: never; ContainerSecuritySummary: ContainerSecuritySummary };
export type AssessmentResult = "PASS" | "FAIL" | (string & {});
export type ControlAssessmentResult =
  | "PASS"
  | "FAIL"
  | "NOT_EXECUTED"
  | "EXEMPTION_PASS"
  | (string & {});
export type ErrorCode = string;
export type ErrorMessage = string;
export type ScopeName = string;
export type ScopeValue = string;
export interface ErrorScope {
  Name?: string;
  Value?: string;
}
export type ErrorScopeList = ErrorScope[];
export interface ControlError {
  Code?: string;
  Message?: string;
  Scope?: ErrorScope[];
}
export type ControlErrorList = ControlError[];
export interface ControlAssessment {
  ControlId?: string;
  ControlAssessmentResult?: ControlAssessmentResult;
  Errors?: ControlError[];
}
export type ControlAssessmentList = ControlAssessment[];
export interface DescribeAssessmentResponse {
  AssessmentArn?: string;
  AssessmentId?: string;
  FrameworkId?: string;
  AssessmentTargetSummary?: AssessmentTargetSummary;
  FrameworkSummary?: FrameworkSummary;
  AssessmentResult?: AssessmentResult;
  CreatedAt?: string;
  ExpiresAt?: string;
  ControlAssessments?: ControlAssessment[];
  NextToken?: string;
}
export interface DescribeChangeSetRequest {
  Catalog: string;
  ChangeSetId: string;
}
export type ChangeSetName = string;
export type Intent = "VALIDATE" | "APPLY" | (string & {});
export type ChangeStatus =
  | "PREPARING"
  | "APPLYING"
  | "SUCCEEDED"
  | "CANCELLED"
  | "FAILED"
  | (string & {});
export type FailureCode = "CLIENT_ERROR" | "SERVER_FAULT" | (string & {});
export type ExceptionMessageContent = string;
export type ChangeType = string;
export interface Entity {
  Type: string;
  Identifier?: string;
}
export type Json = string;
export type ErrorCodeString = string;
export interface ErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ErrorDetailList = ErrorDetail[];
export type ChangeName = string;
export interface ChangeSummary {
  ChangeType?: string;
  Entity?: Entity;
  Details?: string;
  DetailsDocument?: any;
  ErrorDetailList?: ErrorDetail[];
  ChangeName?: string;
}
export type ChangeSetDescription = ChangeSummary[];
export interface DescribeChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
  ChangeSetName?: string;
  Intent?: Intent;
  StartTime?: string;
  EndTime?: string;
  Status?: ChangeStatus;
  FailureCode?: FailureCode;
  FailureDescription?: string;
  ChangeSet?: ChangeSummary[];
}
export interface DescribeEntityRequest {
  Catalog: string;
  EntityId: string;
}
export interface DescribeEntityResponse {
  EntityType?: string;
  EntityIdentifier?: string;
  EntityArn?: string;
  LastModifiedDate?: string;
  Details?: string;
  DetailsDocument?: any;
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export type ResourcePolicyJson = string;
export interface GetResourcePolicyResponse {
  Policy?: string;
}
export type FrameworkId = string;
export interface AssessmentTargetFilter {
  EntityId?: string;
  ChangeSetId?: string;
}
export interface AMISecurityFilters {
  DeliveryOptionId?: string;
}
export interface ContainerSecurityFilters {
  DeliveryOptionId?: string;
}
export type FrameworkFilters =
  | { AMISecurityFilters: AMISecurityFilters; ContainerSecurityFilters?: never }
  | { AMISecurityFilters?: never; ContainerSecurityFilters: ContainerSecurityFilters };
export type ListAssessmentsMaxResultInteger = number;
export interface ListAssessmentsRequest {
  Catalog: string;
  FrameworkId?: string;
  AssessmentTargetFilter?: AssessmentTargetFilter;
  FrameworkFilters?: FrameworkFilters;
  MaxResults?: number;
  NextToken?: string;
}
export interface AssessmentSummary {
  AssessmentArn?: string;
  AssessmentId?: string;
  FrameworkId?: string;
  AssessmentTargetSummary?: AssessmentTargetSummary;
  FrameworkSummary?: FrameworkSummary;
  AssessmentResult?: AssessmentResult;
  CreatedAt?: string;
  ExpiresAt?: string;
}
export type AssessmentSummaryList = AssessmentSummary[];
export interface ListAssessmentsResponse {
  AssessmentSummaryList?: AssessmentSummary[];
  NextToken?: string;
}
export type FilterName = string;
export type FilterValueContent = string;
export type ValueList = string[];
export interface Filter {
  Name?: string;
  ValueList?: string[];
}
export type FilterList = Filter[];
export type SortBy = string;
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
export interface Sort {
  SortBy?: string;
  SortOrder?: SortOrder;
}
export type ListChangeSetsMaxResultInteger = number;
export interface ListChangeSetsRequest {
  Catalog: string;
  FilterList?: Filter[];
  Sort?: Sort;
  MaxResults?: number;
  NextToken?: string;
}
export type ResourceIdList = string[];
export interface ChangeSetSummaryListItem {
  ChangeSetId?: string;
  ChangeSetArn?: string;
  ChangeSetName?: string;
  StartTime?: string;
  EndTime?: string;
  Status?: ChangeStatus;
  EntityIdList?: string[];
  FailureCode?: FailureCode;
}
export type ChangeSetSummaryList = ChangeSetSummaryListItem[];
export interface ListChangeSetsResponse {
  ChangeSetSummaryList?: ChangeSetSummaryListItem[];
  NextToken?: string;
}
export type ListEntitiesMaxResultInteger = number;
export type OwnershipType = "SELF" | "SHARED" | (string & {});
export type DataProductEntityIdString = string;
export type DataProductEntityIdFilterValueList = string[];
export interface DataProductEntityIdFilter {
  ValueList?: string[];
}
export type DataProductTitleString = string;
export type DataProductTitleFilterValueList = string[];
export interface DataProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type DataProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Unavailable"
  | "Draft"
  | (string & {});
export type DataProductVisibilityFilterValueList = DataProductVisibilityString[];
export interface DataProductVisibilityFilter {
  ValueList?: DataProductVisibilityString[];
}
export interface DataProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface DataProductLastModifiedDateFilter {
  DateRange?: DataProductLastModifiedDateFilterDateRange;
}
export interface DataProductFilters {
  EntityId?: DataProductEntityIdFilter;
  ProductTitle?: DataProductTitleFilter;
  Visibility?: DataProductVisibilityFilter;
  LastModifiedDate?: DataProductLastModifiedDateFilter;
}
export type SaaSProductEntityIdString = string;
export type SaaSProductEntityIdFilterValueList = string[];
export interface SaaSProductEntityIdFilter {
  ValueList?: string[];
}
export type SaaSProductTitleString = string;
export type SaaSProductTitleFilterValueList = string[];
export interface SaaSProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type SaaSProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft"
  | (string & {});
export type SaaSProductVisibilityFilterValueList = SaaSProductVisibilityString[];
export interface SaaSProductVisibilityFilter {
  ValueList?: SaaSProductVisibilityString[];
}
export interface SaaSProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface SaaSProductLastModifiedDateFilter {
  DateRange?: SaaSProductLastModifiedDateFilterDateRange;
}
export interface SaaSProductFilters {
  EntityId?: SaaSProductEntityIdFilter;
  ProductTitle?: SaaSProductTitleFilter;
  Visibility?: SaaSProductVisibilityFilter;
  LastModifiedDate?: SaaSProductLastModifiedDateFilter;
}
export type AmiProductEntityIdString = string;
export type AmiProductEntityIdFilterValueList = string[];
export interface AmiProductEntityIdFilter {
  ValueList?: string[];
}
export interface AmiProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface AmiProductLastModifiedDateFilter {
  DateRange?: AmiProductLastModifiedDateFilterDateRange;
}
export type AmiProductTitleString = string;
export type AmiProductTitleFilterValueList = string[];
export interface AmiProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type AmiProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft"
  | (string & {});
export type AmiProductVisibilityFilterValueList = AmiProductVisibilityString[];
export interface AmiProductVisibilityFilter {
  ValueList?: AmiProductVisibilityString[];
}
export interface AmiProductFilters {
  EntityId?: AmiProductEntityIdFilter;
  LastModifiedDate?: AmiProductLastModifiedDateFilter;
  ProductTitle?: AmiProductTitleFilter;
  Visibility?: AmiProductVisibilityFilter;
}
export type OfferEntityIdString = string;
export type OfferEntityIdFilterValueList = string[];
export interface OfferEntityIdFilter {
  ValueList?: string[];
}
export type OfferNameString = string;
export type OfferNameFilterValueList = string[];
export interface OfferNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type OfferProductIdString = string;
export type OfferProductIdFilterValueList = string[];
export interface OfferProductIdFilter {
  ValueList?: string[];
}
export type OfferResaleAuthorizationIdString = string;
export type OfferResaleAuthorizationIdFilterValueList = string[];
export interface OfferResaleAuthorizationIdFilter {
  ValueList?: string[];
}
export interface OfferReleaseDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferReleaseDateFilter {
  DateRange?: OfferReleaseDateFilterDateRange;
}
export interface OfferAvailabilityEndDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferAvailabilityEndDateFilter {
  DateRange?: OfferAvailabilityEndDateFilterDateRange;
}
export type OfferBuyerAccountsFilterWildcard = string;
export interface OfferBuyerAccountsFilter {
  WildCardValue?: string;
}
export type OfferStateString = "Draft" | "Released" | (string & {});
export type OfferStateFilterValueList = OfferStateString[];
export interface OfferStateFilter {
  ValueList?: OfferStateString[];
}
export type OfferTargetingString =
  | "BuyerAccounts"
  | "ParticipatingPrograms"
  | "CountryCodes"
  | "None"
  | (string & {});
export type OfferTargetingFilterValueList = OfferTargetingString[];
export interface OfferTargetingFilter {
  ValueList?: OfferTargetingString[];
}
export interface OfferLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferLastModifiedDateFilter {
  DateRange?: OfferLastModifiedDateFilterDateRange;
}
export type OfferSetIdString = string;
export type OfferSetIdFilterValueList = string[];
export interface OfferSetIdFilter {
  ValueList?: string[];
}
export type OfferTargetAgreementIdString = string;
export type OfferTargetAgreementIdFilterValueList = string[];
export interface OfferTargetAgreementIdFilter {
  ValueList?: string[];
}
export type OfferTargetAgreementIntentString = "Renew" | (string & {});
export type OfferTargetAgreementIntentFilterValueList = OfferTargetAgreementIntentString[];
export interface OfferTargetAgreementIntentFilter {
  ValueList?: OfferTargetAgreementIntentString[];
}
export type OfferCreatedBySourceString = "Seller" | "AwsMarketplace" | (string & {});
export type OfferCreatedBySourceFilterValueList = OfferCreatedBySourceString[];
export interface OfferCreatedBySourceFilter {
  ValueList?: OfferCreatedBySourceString[];
}
export interface OfferFilters {
  EntityId?: OfferEntityIdFilter;
  Name?: OfferNameFilter;
  ProductId?: OfferProductIdFilter;
  ResaleAuthorizationId?: OfferResaleAuthorizationIdFilter;
  ReleaseDate?: OfferReleaseDateFilter;
  AvailabilityEndDate?: OfferAvailabilityEndDateFilter;
  BuyerAccounts?: OfferBuyerAccountsFilter;
  State?: OfferStateFilter;
  Targeting?: OfferTargetingFilter;
  LastModifiedDate?: OfferLastModifiedDateFilter;
  OfferSetId?: OfferSetIdFilter;
  TargetAgreementId?: OfferTargetAgreementIdFilter;
  TargetAgreementIntent?: OfferTargetAgreementIntentFilter;
  CreatedBySource?: OfferCreatedBySourceFilter;
}
export type ContainerProductEntityIdString = string;
export type ContainerProductEntityIdFilterValueList = string[];
export interface ContainerProductEntityIdFilter {
  ValueList?: string[];
}
export interface ContainerProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface ContainerProductLastModifiedDateFilter {
  DateRange?: ContainerProductLastModifiedDateFilterDateRange;
}
export type ContainerProductTitleString = string;
export type ContainerProductTitleFilterValueList = string[];
export interface ContainerProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ContainerProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft"
  | (string & {});
export type ContainerProductVisibilityFilterValueList = ContainerProductVisibilityString[];
export interface ContainerProductVisibilityFilter {
  ValueList?: ContainerProductVisibilityString[];
}
export interface ContainerProductFilters {
  EntityId?: ContainerProductEntityIdFilter;
  LastModifiedDate?: ContainerProductLastModifiedDateFilter;
  ProductTitle?: ContainerProductTitleFilter;
  Visibility?: ContainerProductVisibilityFilter;
}
export type ResaleAuthorizationEntityIdString = string;
export type ResaleAuthorizationEntityIdFilterValueList = string[];
export interface ResaleAuthorizationEntityIdFilter {
  ValueList?: string[];
}
export type ResaleAuthorizationNameString = string;
export type ResaleAuthorizationNameFilterValueList = string[];
export type ResaleAuthorizationNameFilterWildcard = string;
export interface ResaleAuthorizationNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ResaleAuthorizationProductIdString = string;
export type ResaleAuthorizationProductIdFilterValueList = string[];
export type ResaleAuthorizationProductIdFilterWildcard = string;
export interface ResaleAuthorizationProductIdFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export interface ResaleAuthorizationCreatedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export type ResaleAuthorizationCreatedDateFilterValueList = string[];
export interface ResaleAuthorizationCreatedDateFilter {
  DateRange?: ResaleAuthorizationCreatedDateFilterDateRange;
  ValueList?: string[];
}
export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export type ResaleAuthorizationAvailabilityEndDateFilterValueList = string[];
export interface ResaleAuthorizationAvailabilityEndDateFilter {
  DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange;
  ValueList?: string[];
}
export type ResaleAuthorizationManufacturerAccountIdString = string;
export type ResaleAuthorizationManufacturerAccountIdFilterValueList = string[];
export type ResaleAuthorizationManufacturerAccountIdFilterWildcard = string;
export interface ResaleAuthorizationManufacturerAccountIdFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ResaleAuthorizationProductNameString = string;
export type ResaleAuthorizationProductNameFilterValueList = string[];
export type ResaleAuthorizationProductNameFilterWildcard = string;
export interface ResaleAuthorizationProductNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ResaleAuthorizationManufacturerLegalNameString = string;
export type ResaleAuthorizationManufacturerLegalNameFilterValueList = string[];
export type ResaleAuthorizationManufacturerLegalNameFilterWildcard = string;
export interface ResaleAuthorizationManufacturerLegalNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ResaleAuthorizationResellerAccountIDString = string;
export type ResaleAuthorizationResellerAccountIDFilterValueList = string[];
export type ResaleAuthorizationResellerAccountIDFilterWildcard = string;
export interface ResaleAuthorizationResellerAccountIDFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ResaleAuthorizationResellerLegalNameString = string;
export type ResaleAuthorizationResellerLegalNameFilterValueList = string[];
export type ResaleAuthorizationResellerLegalNameFilterWildcard = string;
export interface ResaleAuthorizationResellerLegalNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type ResaleAuthorizationStatusString = "Draft" | "Active" | "Restricted" | (string & {});
export type ResaleAuthorizationStatusFilterValueList = ResaleAuthorizationStatusString[];
export interface ResaleAuthorizationStatusFilter {
  ValueList?: ResaleAuthorizationStatusString[];
}
export type ResaleAuthorizationOfferExtendedStatusString = string;
export type ResaleAuthorizationOfferExtendedStatusFilterValueList = string[];
export interface ResaleAuthorizationOfferExtendedStatusFilter {
  ValueList?: string[];
}
export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface ResaleAuthorizationLastModifiedDateFilter {
  DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange;
}
export type ResaleAuthorizationResellerRoleString =
  | "ChannelPartner"
  | "Distributor"
  | (string & {});
export type ResaleAuthorizationResellerRoleFilterValueList =
  ResaleAuthorizationResellerRoleString[];
export interface ResaleAuthorizationResellerRoleFilter {
  ValueList?: ResaleAuthorizationResellerRoleString[];
}
export type ResaleAuthorizationSourceAuthorizationString = string;
export type ResaleAuthorizationSourceAuthorizationFilterValueList = string[];
export interface ResaleAuthorizationSourceAuthorizationFilter {
  ValueList?: string[];
}
export type ResaleAuthorizationIssuerAccountIdString = string;
export type ResaleAuthorizationIssuerAccountIdFilterValueList = string[];
export interface ResaleAuthorizationIssuerAccountIdFilter {
  ValueList?: string[];
}
export interface ResaleAuthorizationFilters {
  EntityId?: ResaleAuthorizationEntityIdFilter;
  Name?: ResaleAuthorizationNameFilter;
  ProductId?: ResaleAuthorizationProductIdFilter;
  CreatedDate?: ResaleAuthorizationCreatedDateFilter;
  AvailabilityEndDate?: ResaleAuthorizationAvailabilityEndDateFilter;
  ManufacturerAccountId?: ResaleAuthorizationManufacturerAccountIdFilter;
  ProductName?: ResaleAuthorizationProductNameFilter;
  ManufacturerLegalName?: ResaleAuthorizationManufacturerLegalNameFilter;
  ResellerAccountID?: ResaleAuthorizationResellerAccountIDFilter;
  ResellerLegalName?: ResaleAuthorizationResellerLegalNameFilter;
  Status?: ResaleAuthorizationStatusFilter;
  OfferExtendedStatus?: ResaleAuthorizationOfferExtendedStatusFilter;
  LastModifiedDate?: ResaleAuthorizationLastModifiedDateFilter;
  ResellerRole?: ResaleAuthorizationResellerRoleFilter;
  SourceAuthorization?: ResaleAuthorizationSourceAuthorizationFilter;
  IssuerAccountId?: ResaleAuthorizationIssuerAccountIdFilter;
}
export type MachineLearningProductEntityIdString = string;
export type MachineLearningProductEntityIdFilterValueList = string[];
export interface MachineLearningProductEntityIdFilter {
  ValueList?: string[];
}
export interface MachineLearningProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface MachineLearningProductLastModifiedDateFilter {
  DateRange?: MachineLearningProductLastModifiedDateFilterDateRange;
}
export type MachineLearningProductTitleString = string;
export type MachineLearningProductTitleFilterValueList = string[];
export interface MachineLearningProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
export type MachineLearningProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft"
  | (string & {});
export type MachineLearningProductVisibilityFilterValueList =
  MachineLearningProductVisibilityString[];
export interface MachineLearningProductVisibilityFilter {
  ValueList?: MachineLearningProductVisibilityString[];
}
export interface MachineLearningProductFilters {
  EntityId?: MachineLearningProductEntityIdFilter;
  LastModifiedDate?: MachineLearningProductLastModifiedDateFilter;
  ProductTitle?: MachineLearningProductTitleFilter;
  Visibility?: MachineLearningProductVisibilityFilter;
}
export type OfferSetEntityIdString = string;
export type OfferSetEntityIdFilterValueList = string[];
export interface OfferSetEntityIdFilter {
  ValueList?: string[];
}
export type OfferSetNameString = string;
export type OfferSetNameFilterValueList = string[];
export interface OfferSetNameFilter {
  ValueList?: string[];
}
export type OfferSetStateString = "Draft" | "Released" | (string & {});
export type OfferSetStateFilterValueList = OfferSetStateString[];
export interface OfferSetStateFilter {
  ValueList?: OfferSetStateString[];
}
export interface OfferSetReleaseDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferSetReleaseDateFilter {
  DateRange?: OfferSetReleaseDateFilterDateRange;
}
export type OfferSetAssociatedOfferIdsString = string;
export type OfferSetAssociatedOfferIdsFilterValueList = string[];
export interface OfferSetAssociatedOfferIdsFilter {
  ValueList?: string[];
}
export type OfferSetSolutionIdString = string;
export type OfferSetSolutionIdFilterValueList = string[];
export interface OfferSetSolutionIdFilter {
  ValueList?: string[];
}
export interface OfferSetLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferSetLastModifiedDateFilter {
  DateRange?: OfferSetLastModifiedDateFilterDateRange;
}
export interface OfferSetFilters {
  EntityId?: OfferSetEntityIdFilter;
  Name?: OfferSetNameFilter;
  State?: OfferSetStateFilter;
  ReleaseDate?: OfferSetReleaseDateFilter;
  AssociatedOfferIds?: OfferSetAssociatedOfferIdsFilter;
  SolutionId?: OfferSetSolutionIdFilter;
  LastModifiedDate?: OfferSetLastModifiedDateFilter;
}
export type EntityTypeFilters =
  | {
      DataProductFilters: DataProductFilters;
      SaaSProductFilters?: never;
      AmiProductFilters?: never;
      OfferFilters?: never;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters?: never;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters: SaaSProductFilters;
      AmiProductFilters?: never;
      OfferFilters?: never;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters?: never;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters?: never;
      AmiProductFilters: AmiProductFilters;
      OfferFilters?: never;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters?: never;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters?: never;
      AmiProductFilters?: never;
      OfferFilters: OfferFilters;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters?: never;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters?: never;
      AmiProductFilters?: never;
      OfferFilters?: never;
      ContainerProductFilters: ContainerProductFilters;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters?: never;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters?: never;
      AmiProductFilters?: never;
      OfferFilters?: never;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters: ResaleAuthorizationFilters;
      MachineLearningProductFilters?: never;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters?: never;
      AmiProductFilters?: never;
      OfferFilters?: never;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters: MachineLearningProductFilters;
      OfferSetFilters?: never;
    }
  | {
      DataProductFilters?: never;
      SaaSProductFilters?: never;
      AmiProductFilters?: never;
      OfferFilters?: never;
      ContainerProductFilters?: never;
      ResaleAuthorizationFilters?: never;
      MachineLearningProductFilters?: never;
      OfferSetFilters: OfferSetFilters;
    };
export type DataProductSortBy =
  | "EntityId"
  | "ProductTitle"
  | "Visibility"
  | "LastModifiedDate"
  | (string & {});
export interface DataProductSort {
  SortBy?: DataProductSortBy;
  SortOrder?: SortOrder;
}
export type SaaSProductSortBy =
  | "EntityId"
  | "ProductTitle"
  | "Visibility"
  | "LastModifiedDate"
  | "DeliveryOptionTypes"
  | (string & {});
export interface SaaSProductSort {
  SortBy?: SaaSProductSortBy;
  SortOrder?: SortOrder;
}
export type AmiProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility"
  | (string & {});
export interface AmiProductSort {
  SortBy?: AmiProductSortBy;
  SortOrder?: SortOrder;
}
export type OfferSortBy =
  | "EntityId"
  | "Name"
  | "ProductId"
  | "ResaleAuthorizationId"
  | "ReleaseDate"
  | "AvailabilityEndDate"
  | "BuyerAccounts"
  | "State"
  | "Targeting"
  | "LastModifiedDate"
  | "OfferSetId"
  | "TargetAgreementId"
  | "TargetAgreementIntent"
  | "CreatedBySource"
  | (string & {});
export interface OfferSort {
  SortBy?: OfferSortBy;
  SortOrder?: SortOrder;
}
export type ContainerProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility"
  | "CompatibleAWSServices"
  | (string & {});
export interface ContainerProductSort {
  SortBy?: ContainerProductSortBy;
  SortOrder?: SortOrder;
}
export type ResaleAuthorizationSortBy =
  | "EntityId"
  | "Name"
  | "ProductId"
  | "ProductName"
  | "ManufacturerAccountId"
  | "ManufacturerLegalName"
  | "ResellerAccountID"
  | "ResellerLegalName"
  | "Status"
  | "OfferExtendedStatus"
  | "CreatedDate"
  | "AvailabilityEndDate"
  | "LastModifiedDate"
  | "ResellerRole"
  | "SourceAuthorization"
  | "IssuerAccountId"
  | (string & {});
export interface ResaleAuthorizationSort {
  SortBy?: ResaleAuthorizationSortBy;
  SortOrder?: SortOrder;
}
export type MachineLearningProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility"
  | (string & {});
export interface MachineLearningProductSort {
  SortBy?: MachineLearningProductSortBy;
  SortOrder?: SortOrder;
}
export type OfferSetSortBy =
  | "Name"
  | "State"
  | "ReleaseDate"
  | "SolutionId"
  | "EntityId"
  | "LastModifiedDate"
  | (string & {});
export interface OfferSetSort {
  SortBy?: OfferSetSortBy;
  SortOrder?: SortOrder;
}
export type EntityTypeSort =
  | {
      DataProductSort: DataProductSort;
      SaaSProductSort?: never;
      AmiProductSort?: never;
      OfferSort?: never;
      ContainerProductSort?: never;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort?: never;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort: SaaSProductSort;
      AmiProductSort?: never;
      OfferSort?: never;
      ContainerProductSort?: never;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort?: never;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort?: never;
      AmiProductSort: AmiProductSort;
      OfferSort?: never;
      ContainerProductSort?: never;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort?: never;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort?: never;
      AmiProductSort?: never;
      OfferSort: OfferSort;
      ContainerProductSort?: never;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort?: never;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort?: never;
      AmiProductSort?: never;
      OfferSort?: never;
      ContainerProductSort: ContainerProductSort;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort?: never;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort?: never;
      AmiProductSort?: never;
      OfferSort?: never;
      ContainerProductSort?: never;
      ResaleAuthorizationSort: ResaleAuthorizationSort;
      MachineLearningProductSort?: never;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort?: never;
      AmiProductSort?: never;
      OfferSort?: never;
      ContainerProductSort?: never;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort: MachineLearningProductSort;
      OfferSetSort?: never;
    }
  | {
      DataProductSort?: never;
      SaaSProductSort?: never;
      AmiProductSort?: never;
      OfferSort?: never;
      ContainerProductSort?: never;
      ResaleAuthorizationSort?: never;
      MachineLearningProductSort?: never;
      OfferSetSort: OfferSetSort;
    };
export interface ListEntitiesRequest {
  Catalog: string;
  EntityType: string;
  FilterList?: Filter[];
  Sort?: Sort;
  NextToken?: string;
  MaxResults?: number;
  OwnershipType?: OwnershipType;
  EntityTypeFilters?: EntityTypeFilters;
  EntityTypeSort?: EntityTypeSort;
}
export type EntityNameString = string;
export type VisibilityValue = string;
export interface AmiProductSummary {
  ProductTitle?: string;
  Visibility?: AmiProductVisibilityString;
}
export interface ContainerProductSummary {
  ProductTitle?: string;
  Visibility?: ContainerProductVisibilityString;
}
export interface DataProductSummary {
  ProductTitle?: string;
  Visibility?: DataProductVisibilityString;
}
export interface SaaSProductSummary {
  ProductTitle?: string;
  Visibility?: SaaSProductVisibilityString;
}
export type OfferBuyerAccountsString = string;
export type OfferBuyerAccountsList = string[];
export type OfferTargetingList = OfferTargetingString[];
export interface OfferSummary {
  Name?: string;
  ProductId?: string;
  ResaleAuthorizationId?: string;
  ReleaseDate?: string;
  AvailabilityEndDate?: string;
  BuyerAccounts?: string[];
  State?: OfferStateString;
  Targeting?: OfferTargetingString[];
  OfferSetId?: string;
  TargetAgreementId?: string;
  TargetAgreementIntent?: OfferTargetAgreementIntentString;
  CreatedBySource?: OfferCreatedBySourceString;
}
export interface ResaleAuthorizationSummary {
  Name?: string;
  ProductId?: string;
  ProductName?: string;
  ManufacturerAccountId?: string;
  ManufacturerLegalName?: string;
  ResellerAccountID?: string;
  ResellerLegalName?: string;
  Status?: ResaleAuthorizationStatusString;
  OfferExtendedStatus?: string;
  CreatedDate?: string;
  AvailabilityEndDate?: string;
  ResellerRole?: ResaleAuthorizationResellerRoleString;
  SourceAuthorization?: string;
  IssuerAccountId?: string;
}
export interface MachineLearningProductSummary {
  ProductTitle?: string;
  Visibility?: MachineLearningProductVisibilityString;
}
export type OfferSetAssociatedOfferIdsList = string[];
export interface OfferSetSummary {
  Name?: string;
  State?: OfferSetStateString;
  ReleaseDate?: string;
  AssociatedOfferIds?: string[];
  SolutionId?: string;
}
export interface EntitySummary {
  Name?: string;
  EntityType?: string;
  EntityId?: string;
  EntityArn?: string;
  LastModifiedDate?: string;
  Visibility?: string;
  AmiProductSummary?: AmiProductSummary;
  ContainerProductSummary?: ContainerProductSummary;
  DataProductSummary?: DataProductSummary;
  SaaSProductSummary?: SaaSProductSummary;
  OfferSummary?: OfferSummary;
  ResaleAuthorizationSummary?: ResaleAuthorizationSummary;
  MachineLearningProductSummary?: MachineLearningProductSummary;
  OfferSetSummary?: OfferSetSummary;
}
export type EntitySummaryList = EntitySummary[];
export interface ListEntitiesResponse {
  EntitySummaryList?: EntitySummary[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface ListTagsForResourceResponse {
  ResourceArn?: string;
  Tags?: Tag[];
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {}
export interface Change {
  ChangeType: string;
  Entity: Entity;
  EntityTags?: Tag[];
  Details?: string;
  DetailsDocument?: any;
  ChangeName?: string;
}
export type RequestedChangeList = Change[];
export type ClientRequestToken = string;
export interface StartChangeSetRequest {
  Catalog: string;
  ChangeSet: Change[];
  ChangeSetName?: string;
  ClientRequestToken?: string;
  ChangeSetTags?: Tag[];
  Intent?: Intent;
}
export interface StartChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type ValidationExceptionReason =
  | "UnknownOperation"
  | "CannotParse"
  | "FieldValidationFailed"
  | "Other"
  | (string & {});
export type FieldName = string;
export interface ValidationExceptionField {
  Reason?: ValidationExceptionReason;
  EntityType?: string;
  EntityId?: string;
  ChangeType?: string;
  Field?: string;
  Message?: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type BatchDescribeEntitiesError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns metadata and content for multiple entities. This is the Batch version of the `DescribeEntity` API and uses the same IAM permission action as `DescribeEntity` API.
 */
export const batchDescribeEntities: API.OperationMethod<
  BatchDescribeEntitiesRequest,
  BatchDescribeEntitiesResponse,
  BatchDescribeEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<BatchDescribeEntitiesRequest>,
  output: __S(7) as any as S.Schema<BatchDescribeEntitiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDescribeEntities",
}));

export type CancelChangeSetError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceInUseException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Used to cancel an open change request. Must be sent before the status of the request
 * changes to `APPLYING`, the final stage of completing your change request. You
 * can describe a change during the 60-day request history retention period for API
 * calls.
 */
export const cancelChangeSet: API.OperationMethod<
  CancelChangeSetRequest,
  CancelChangeSetResponse,
  CancelChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<CancelChangeSetRequest>,
  output: __S(9) as any as S.Schema<CancelChangeSetResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceInUseException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelChangeSet",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource-based policy on an entity that is identified by its resource
 * ARN.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(11) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DescribeAssessmentError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the metadata and detailed results of a single assessment, including the
 * framework that was evaluated, the overall assessment result, and a paginated list of
 * individual control evaluation results.
 *
 * To list available assessments before describing one, use the
 * `ListAssessments` action.
 */
export const describeAssessment: API.PaginatedOperationMethod<
  DescribeAssessmentRequest,
  DescribeAssessmentResponse,
  DescribeAssessmentError,
  Credentials | HttpClient.HttpClient,
  ControlAssessment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(12) as any as S.Schema<DescribeAssessmentRequest>,
  output: __S(22) as any as S.Schema<DescribeAssessmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAssessment",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ControlAssessments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeChangeSetError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides information about a given change set.
 */
export const describeChangeSet: API.OperationMethod<
  DescribeChangeSetRequest,
  DescribeChangeSetResponse,
  DescribeChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23) as any as S.Schema<DescribeChangeSetRequest>,
  output: __S(28) as any as S.Schema<DescribeChangeSetResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChangeSet",
}));

export type DescribeEntityError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ResourceNotSupportedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the metadata and content of the entity.
 */
export const describeEntity: API.OperationMethod<
  DescribeEntityRequest,
  DescribeEntityResponse,
  DescribeEntityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<DescribeEntityRequest>,
  output: __S(30) as any as S.Schema<DescribeEntityResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ResourceNotSupportedException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEntity",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a resource-based policy of an entity that is identified by its resource
 * ARN.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(32) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type ListAssessmentsError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of assessments associated with an entity or change set in
 * AWS Marketplace. An *assessment* is the result of evaluating a
 * product or change set against a framework, such as AMI Security or Container
 * Security.
 *
 * Use the `AssessmentTargetFilter` to scope results to a specific entity or
 * change set, and use `FrameworkFilters` to scope results to a single
 * framework. To retrieve detailed control-level results for an individual assessment, use
 * the `DescribeAssessment` action.
 *
 * Results are sorted by assessment creation time in descending order.
 */
export const listAssessments: API.PaginatedOperationMethod<
  ListAssessmentsRequest,
  ListAssessmentsResponse,
  ListAssessmentsError,
  Credentials | HttpClient.HttpClient,
  AssessmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(34) as any as S.Schema<ListAssessmentsRequest>,
  output: __S(37) as any as S.Schema<ListAssessmentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssessments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AssessmentSummaryList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChangeSetsError =
  | AccessDeniedException
  | InternalServiceException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of change sets owned by the account being used to make the call. You
 * can filter this list by providing any combination of `entityId`,
 * `ChangeSetName`, and status. If you provide more than one filter, the API
 * operation applies a logical AND between the filters.
 *
 * You can describe a change during the 60-day request history retention period for API
 * calls.
 */
export const listChangeSets: API.PaginatedOperationMethod<
  ListChangeSetsRequest,
  ListChangeSetsResponse,
  ListChangeSetsError,
  Credentials | HttpClient.HttpClient,
  ChangeSetSummaryListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(42) as any as S.Schema<ListChangeSetsRequest>,
  output: __S(45) as any as S.Schema<ListChangeSetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChangeSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ChangeSetSummaryList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEntitiesError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Provides the list of entities of a given type.
 */
export const listEntities: API.PaginatedOperationMethod<
  ListEntitiesRequest,
  ListEntitiesResponse,
  ListEntitiesError,
  Credentials | HttpClient.HttpClient,
  EntitySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(75) as any as S.Schema<ListEntitiesRequest>,
  output: __S(83) as any as S.Schema<ListEntitiesResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntities",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "EntitySummaryList",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all tags that have been added to a resource (either an entity or change set).
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(87) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a resource-based policy to an entity. Examples of an entity include:
 * `AmiProduct` and `ContainerProduct`.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(88) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(11) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type StartChangeSetError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to request changes for your entities. Within a single
 * `ChangeSet`, you can't start the same change type against the same entity
 * multiple times. Additionally, when a `ChangeSet` is running, all the entities
 * targeted by the different changes are locked until the change set has completed (either
 * succeeded, cancelled, or failed). If you try to start a change set containing a change
 * against an entity that is already locked, you will receive a
 * `ResourceInUseException` error.
 *
 * For example, you can't start the `ChangeSet` described in the example later in this topic because it contains two changes to run the same
 * change type (`AddRevisions`) against the same entity
 * (`entity-id@1`).
 *
 * For more information about working with change sets, see Working with change sets. For information about change types for
 * single-AMI products, see Working with single-AMI products. Also, for more information about change
 * types available for container-based products, see Working with container products.
 *
 * To download "DetailsDocument" shapes, see Python
 * and Java shapes on GitHub.
 */
export const startChangeSet: API.OperationMethod<
  StartChangeSetRequest,
  StartChangeSetResponse,
  StartChangeSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91) as any as S.Schema<StartChangeSetRequest>,
  output: __S(9) as any as S.Schema<StartChangeSetResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartChangeSet",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Tags a resource (either an entity or change set).
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<TagResourceRequest>,
  output: __S(11) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
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
  | InternalServiceException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag or list of tags from a resource (either an entity or change set).
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93) as any as S.Schema<UntagResourceRequest>,
  output: __S(11) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServiceException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Catalog: S.String, EntityId: S.String })).annotate({
        identifier: "EntityRequest",
      });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({ EntityRequestList: __S(1) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/BatchDescribeEntities" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDescribeEntitiesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EntityType: S.optional(S.String),
          EntityArn: S.optional(S.String),
          EntityIdentifier: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          DetailsDocument: S.optional(S.Any),
        }),
      ).annotate({ identifier: "EntityDetail" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(3).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "BatchDescribeErrorDetail" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ EntityDetails: S.optional(__S(4)), Errors: S.optional(__S(6)) }),
      ).annotate({
        identifier: "BatchDescribeEntitiesResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String.pipe(T.HttpQuery("catalog")),
          ChangeSetId: S.String.pipe(T.HttpQuery("changeSetId")),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/CancelChangeSet" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CancelChangeSetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ChangeSetId: S.optional(S.String), ChangeSetArn: S.optional(S.String) }),
      ).annotate({ identifier: "CancelChangeSetResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpQuery("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/DeleteResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteResourcePolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          AssessmentIdentifier: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DescribeAssessment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAssessmentRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EntityId: S.optional(S.String), ChangeSetId: S.optional(S.String) }),
      ).annotate({ identifier: "AssessmentTargetSummary" });
    case 6:
      return S.suspend(() => S.Struct({ DeliveryOptionId: S.optional(S.String) })).annotate({
        identifier: "AMISecuritySummary",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ AMISecuritySummary: __S(14) }),
        /*@__PURE__*/ S.Struct({ ContainerSecuritySummary: __S(14) }),
      ]);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorScope" });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(S.String),
          Message: S.optional(S.String),
          Scope: S.optional(__S(17)),
        }),
      ).annotate({ identifier: "ControlError" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ControlId: S.optional(S.String),
          ControlAssessmentResult: S.optional(S.String),
          Errors: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "ControlAssessment" });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssessmentArn: S.optional(S.String),
          AssessmentId: S.optional(S.String),
          FrameworkId: S.optional(S.String),
          AssessmentTargetSummary: S.optional(__S(13)),
          FrameworkSummary: S.optional(__S(15)),
          AssessmentResult: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          ExpiresAt: S.optional(S.String),
          ControlAssessments: S.optional(__S(21)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAssessmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String.pipe(T.HttpQuery("catalog")),
          ChangeSetId: S.String.pipe(T.HttpQuery("changeSetId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/DescribeChangeSet" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeChangeSetRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Type: S.String, Identifier: S.optional(S.String) }),
      ).annotate({ identifier: "Entity" });
    case 1:
      return S.Array(__S(5));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChangeType: S.optional(S.String),
          Entity: S.optional(__S(24)),
          Details: S.optional(S.String),
          DetailsDocument: S.optional(S.Any),
          ErrorDetailList: S.optional(__S(25)),
          ChangeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChangeSummary" });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChangeSetId: S.optional(S.String),
          ChangeSetArn: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          Intent: S.optional(S.String),
          StartTime: S.optional(S.String),
          EndTime: S.optional(S.String),
          Status: S.optional(S.String),
          FailureCode: S.optional(S.String),
          FailureDescription: S.optional(S.String),
          ChangeSet: S.optional(__S(27)),
        }),
      ).annotate({
        identifier: "DescribeChangeSetResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String.pipe(T.HttpQuery("catalog")),
          EntityId: S.String.pipe(T.HttpQuery("entityId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/DescribeEntity" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeEntityRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EntityType: S.optional(S.String),
          EntityIdentifier: S.optional(S.String),
          EntityArn: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Details: S.optional(S.String),
          DetailsDocument: S.optional(S.Any),
        }),
      ).annotate({ identifier: "DescribeEntityResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpQuery("resourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/GetResourcePolicy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Policy: S.optional(S.String) })).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ AMISecurityFilters: __S(14) }),
        /*@__PURE__*/ S.Struct({ ContainerSecurityFilters: __S(14) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          FrameworkId: S.optional(S.String),
          AssessmentTargetFilter: S.optional(__S(13)),
          FrameworkFilters: S.optional(__S(33)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListAssessments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAssessmentsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssessmentArn: S.optional(S.String),
          AssessmentId: S.optional(S.String),
          FrameworkId: S.optional(S.String),
          AssessmentTargetSummary: S.optional(__S(13)),
          FrameworkSummary: S.optional(__S(15)),
          AssessmentResult: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          ExpiresAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssessmentSummary" });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssessmentSummaryList: S.optional(__S(36)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAssessmentsResponse" });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), ValueList: S.optional(__S(38)) }),
      ).annotate({ identifier: "Filter" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39));
    case 1:
      return S.suspend(() =>
        S.Struct({ SortBy: S.optional(S.String), SortOrder: S.optional(S.String) }),
      ).annotate({ identifier: "Sort" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          FilterList: S.optional(__S(40)),
          Sort: S.optional(__S(41)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListChangeSets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListChangeSetsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChangeSetId: S.optional(S.String),
          ChangeSetArn: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          StartTime: S.optional(S.String),
          EndTime: S.optional(S.String),
          Status: S.optional(S.String),
          EntityIdList: S.optional(__S(38)),
          FailureCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChangeSetSummaryListItem" });
    case 4:
      return S.Array(__S(43));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChangeSetSummaryList: S.optional(__S(44)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListChangeSetsResponse" });
    case 6:
      return S.suspend(() => S.Struct({ ValueList: S.optional(__S(38)) })).annotate({
        identifier: "DataProductEntityIdFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ValueList: S.optional(__S(38)),
          WildCardValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataProductTitleFilter" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() => S.Struct({ ValueList: S.optional(__S(48)) })).annotate({
        identifier: "DataProductVisibilityFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String) }),
      ).annotate({
        identifier: "DataProductLastModifiedDateFilterDateRange",
      });
    case 3:
      return S.suspend(() => S.Struct({ DateRange: S.optional(__S(50)) })).annotate({
        identifier: "DataProductLastModifiedDateFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(46)),
          ProductTitle: S.optional(__S(47)),
          Visibility: S.optional(__S(49)),
          LastModifiedDate: S.optional(__S(51)),
        }),
      ).annotate({ identifier: "DataProductFilters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(46)),
          ProductTitle: S.optional(__S(47)),
          Visibility: S.optional(__S(49)),
          LastModifiedDate: S.optional(__S(51)),
        }),
      ).annotate({ identifier: "SaaSProductFilters" });
    case 6:
      return S.suspend(() => S.Struct({ ValueList: S.optional(__S(38)) })).annotate({
        identifier: "AmiProductEntityIdFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(54)),
          LastModifiedDate: S.optional(__S(51)),
          ProductTitle: S.optional(__S(47)),
          Visibility: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "AmiProductFilters" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ DateRange: S.optional(__S(50)) })).annotate({
        identifier: "OfferReleaseDateFilter",
      });
    case 1:
      return S.suspend(() => S.Struct({ WildCardValue: S.optional(S.String) })).annotate({
        identifier: "OfferBuyerAccountsFilter",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() => S.Struct({ ValueList: S.optional(__S(58)) })).annotate({
        identifier: "OfferStateFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(54)),
          Name: S.optional(__S(47)),
          ProductId: S.optional(__S(54)),
          ResaleAuthorizationId: S.optional(__S(46)),
          ReleaseDate: S.optional(__S(56)),
          AvailabilityEndDate: S.optional(__S(51)),
          BuyerAccounts: S.optional(__S(57)),
          State: S.optional(__S(59)),
          Targeting: S.optional(__S(59)),
          LastModifiedDate: S.optional(__S(51)),
          OfferSetId: S.optional(__S(54)),
          TargetAgreementId: S.optional(__S(46)),
          TargetAgreementIntent: S.optional(__S(49)),
          CreatedBySource: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "OfferFilters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ValueList: S.optional(__S(38)),
          WildCardValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ContainerProductTitleFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(46)),
          LastModifiedDate: S.optional(__S(51)),
          ProductTitle: S.optional(__S(61)),
          Visibility: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "ContainerProductFilters" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DateRange: S.optional(__S(50)),
          ValueList: S.optional(__S(38)),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationCreatedDateFilter",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          DateRange: S.optional(__S(50)),
          ValueList: S.optional(__S(64)),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationAvailabilityEndDateFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ValueList: S.optional(__S(64)),
          WildCardValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationManufacturerAccountIdFilter",
      });
    case 3:
      return S.suspend(() => S.Struct({ ValueList: S.optional(__S(64)) })).annotate({
        identifier: "ResaleAuthorizationOfferExtendedStatusFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(46)),
          Name: S.optional(__S(61)),
          ProductId: S.optional(__S(61)),
          CreatedDate: S.optional(__S(63)),
          AvailabilityEndDate: S.optional(__S(65)),
          ManufacturerAccountId: S.optional(__S(66)),
          ProductName: S.optional(__S(61)),
          ManufacturerLegalName: S.optional(__S(66)),
          ResellerAccountID: S.optional(__S(61)),
          ResellerLegalName: S.optional(__S(61)),
          Status: S.optional(__S(49)),
          OfferExtendedStatus: S.optional(__S(67)),
          LastModifiedDate: S.optional(__S(51)),
          ResellerRole: S.optional(__S(49)),
          SourceAuthorization: S.optional(__S(67)),
          IssuerAccountId: S.optional(__S(46)),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(46)),
          LastModifiedDate: S.optional(__S(51)),
          ProductTitle: S.optional(__S(61)),
          Visibility: S.optional(__S(49)),
        }),
      ).annotate({
        identifier: "MachineLearningProductFilters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(__S(54)),
          Name: S.optional(__S(54)),
          State: S.optional(__S(59)),
          ReleaseDate: S.optional(__S(51)),
          AssociatedOfferIds: S.optional(__S(46)),
          SolutionId: S.optional(__S(54)),
          LastModifiedDate: S.optional(__S(51)),
        }),
      ).annotate({ identifier: "OfferSetFilters" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DataProductFilters: __S(52) }),
        /*@__PURE__*/ S.Struct({ SaaSProductFilters: __S(53) }),
        /*@__PURE__*/ S.Struct({ AmiProductFilters: __S(55) }),
        /*@__PURE__*/ S.Struct({ OfferFilters: __S(60) }),
        /*@__PURE__*/ S.Struct({ ContainerProductFilters: __S(62) }),
        /*@__PURE__*/ S.Struct({ ResaleAuthorizationFilters: __S(68) }),
        /*@__PURE__*/ S.Struct({ MachineLearningProductFilters: __S(69) }),
        /*@__PURE__*/ S.Struct({ OfferSetFilters: __S(70) }),
      ]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SortBy: S.optional(S.String), SortOrder: S.optional(S.String) }),
      ).annotate({ identifier: "DataProductSort" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SortBy: S.optional(S.String),
          SortOrder: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MachineLearningProductSort",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DataProductSort: __S(72) }),
        /*@__PURE__*/ S.Struct({ SaaSProductSort: __S(72) }),
        /*@__PURE__*/ S.Struct({ AmiProductSort: __S(72) }),
        /*@__PURE__*/ S.Struct({ OfferSort: __S(72) }),
        /*@__PURE__*/ S.Struct({ ContainerProductSort: __S(72) }),
        /*@__PURE__*/ S.Struct({ ResaleAuthorizationSort: __S(72) }),
        /*@__PURE__*/ S.Struct({ MachineLearningProductSort: __S(73) }),
        /*@__PURE__*/ S.Struct({ OfferSetSort: __S(72) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EntityType: S.String,
          FilterList: S.optional(__S(40)),
          Sort: S.optional(__S(41)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          OwnershipType: S.optional(S.String),
          EntityTypeFilters: S.optional(__S(71)),
          EntityTypeSort: S.optional(__S(74)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListEntities" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEntitiesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProductTitle: S.optional(S.String),
          Visibility: S.optional(S.String),
        }),
      ).annotate({ identifier: "AmiProductSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ProductId: S.optional(S.String),
          ResaleAuthorizationId: S.optional(S.String),
          ReleaseDate: S.optional(S.String),
          AvailabilityEndDate: S.optional(S.String),
          BuyerAccounts: S.optional(__S(38)),
          State: S.optional(S.String),
          Targeting: S.optional(__S(58)),
          OfferSetId: S.optional(S.String),
          TargetAgreementId: S.optional(S.String),
          TargetAgreementIntent: S.optional(S.String),
          CreatedBySource: S.optional(S.String),
        }),
      ).annotate({ identifier: "OfferSummary" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ProductId: S.optional(S.String),
          ProductName: S.optional(S.String),
          ManufacturerAccountId: S.optional(S.String),
          ManufacturerLegalName: S.optional(S.String),
          ResellerAccountID: S.optional(S.String),
          ResellerLegalName: S.optional(S.String),
          Status: S.optional(S.String),
          OfferExtendedStatus: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          AvailabilityEndDate: S.optional(S.String),
          ResellerRole: S.optional(S.String),
          SourceAuthorization: S.optional(S.String),
          IssuerAccountId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProductTitle: S.optional(S.String),
          Visibility: S.optional(S.String),
        }),
      ).annotate({
        identifier: "MachineLearningProductSummary",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          State: S.optional(S.String),
          ReleaseDate: S.optional(S.String),
          AssociatedOfferIds: S.optional(__S(38)),
          SolutionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "OfferSetSummary" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          EntityType: S.optional(S.String),
          EntityId: S.optional(S.String),
          EntityArn: S.optional(S.String),
          LastModifiedDate: S.optional(S.String),
          Visibility: S.optional(S.String),
          AmiProductSummary: S.optional(__S(76)),
          ContainerProductSummary: S.optional(__S(76)),
          DataProductSummary: S.optional(__S(76)),
          SaaSProductSummary: S.optional(__S(76)),
          OfferSummary: S.optional(__S(77)),
          ResaleAuthorizationSummary: S.optional(__S(78)),
          MachineLearningProductSummary: S.optional(__S(79)),
          OfferSetSummary: S.optional(__S(80)),
        }),
      ).annotate({ identifier: "EntitySummary" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          EntitySummaryList: S.optional(__S(82)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListEntitiesResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListTagsForResource" }),
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
    case 5:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(__S(86)) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Policy: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/PutResourcePolicy" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChangeType: S.String,
          Entity: __S(24),
          EntityTags: S.optional(__S(86)),
          Details: S.optional(S.String),
          DetailsDocument: S.optional(S.Any),
          ChangeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Change" });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ChangeSet: __S(90),
          ChangeSetName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ChangeSetTags: S.optional(__S(86)),
          Intent: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartChangeSet" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartChangeSetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(86) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(38) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Reason: S.optional(S.String),
          EntityType: S.optional(S.String),
          EntityId: S.optional(S.String),
          ChangeType: S.optional(S.String),
          Field: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 7:
      return S.Array(__S(94));
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
  }
}
