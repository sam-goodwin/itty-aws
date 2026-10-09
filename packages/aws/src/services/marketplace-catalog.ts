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
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
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
const EntityRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<EntityRequest>;
export type EntityRequestList = EntityRequest[];
const EntityRequestList = /*@__PURE__*/ __L.at(__c0, 1);
export interface BatchDescribeEntitiesRequest {
  EntityRequestList: EntityRequest[];
}
const BatchDescribeEntitiesRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<BatchDescribeEntitiesRequest>;
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
const EntityDetail = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<EntityDetail>;
export type EntityDetails = { [key: string]: EntityDetail | undefined };
const EntityDetails = /*@__PURE__*/ __L.at(__c0, 4);
export type BatchDescribeErrorCodeString = string;
export type BatchDescribeErrorMessageContent = string;
export interface BatchDescribeErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
const BatchDescribeErrorDetail = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchDescribeErrorDetail>;
export type Errors = { [key: string]: BatchDescribeErrorDetail | undefined };
const Errors = /*@__PURE__*/ __L.at(__c0, 6);
export interface BatchDescribeEntitiesResponse {
  EntityDetails?: { [key: string]: EntityDetail | undefined };
  Errors?: { [key: string]: BatchDescribeErrorDetail | undefined };
}
const BatchDescribeEntitiesResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchDescribeEntitiesResponse>;
export type ResourceId = string;
export interface CancelChangeSetRequest {
  Catalog: string;
  ChangeSetId: string;
}
const CancelChangeSetRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CancelChangeSetRequest>;
export interface CancelChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
}
const CancelChangeSetResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CancelChangeSetResponse>;
export type ResourceARN = string;
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<DeleteResourcePolicyResponse>;
export type AssessmentIdentifier = string;
export type DescribeAssessmentMaxResultInteger = number;
export type NextToken = string;
export interface DescribeAssessmentRequest {
  Catalog: string;
  AssessmentIdentifier: string;
  MaxResults?: number;
  NextToken?: string;
}
const DescribeAssessmentRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<DescribeAssessmentRequest>;
export type VersionedFrameworkId = string;
export interface AssessmentTargetSummary {
  EntityId?: string;
  ChangeSetId?: string;
}
const AssessmentTargetSummary = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<AssessmentTargetSummary>;
export interface AMISecuritySummary {
  DeliveryOptionId?: string;
}
const AMISecuritySummary = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<AMISecuritySummary>;
export interface ContainerSecuritySummary {
  DeliveryOptionId?: string;
}
const ContainerSecuritySummary = AMISecuritySummary as any as S.Schema<ContainerSecuritySummary>;
export type FrameworkSummary =
  | { AMISecuritySummary: AMISecuritySummary; ContainerSecuritySummary?: never }
  | { AMISecuritySummary?: never; ContainerSecuritySummary: ContainerSecuritySummary };
const FrameworkSummary = /*@__PURE__*/ __L.at(__c1, 7);
export type AssessmentResult = "PASS" | "FAIL" | (string & {});
const AssessmentResult = S.String;

export type ControlAssessmentResult =
  | "PASS"
  | "FAIL"
  | "NOT_EXECUTED"
  | "EXEMPTION_PASS"
  | (string & {});
const ControlAssessmentResult = S.String;

export type ErrorCode = string;
export type ErrorMessage = string;
export type ScopeName = string;
export type ScopeValue = string;
export interface ErrorScope {
  Name?: string;
  Value?: string;
}
const ErrorScope = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<ErrorScope>;
export type ErrorScopeList = ErrorScope[];
const ErrorScopeList = /*@__PURE__*/ __L.at(__c2, 1);
export interface ControlError {
  Code?: string;
  Message?: string;
  Scope?: ErrorScope[];
}
const ControlError = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<ControlError>;
export type ControlErrorList = ControlError[];
const ControlErrorList = /*@__PURE__*/ __L.at(__c2, 3);
export interface ControlAssessment {
  ControlId?: string;
  ControlAssessmentResult?: ControlAssessmentResult;
  Errors?: ControlError[];
}
const ControlAssessment = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<ControlAssessment>;
export type ControlAssessmentList = ControlAssessment[];
const ControlAssessmentList = /*@__PURE__*/ __L.at(__c2, 5);
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
const DescribeAssessmentResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DescribeAssessmentResponse>;
export interface DescribeChangeSetRequest {
  Catalog: string;
  ChangeSetId: string;
}
const DescribeChangeSetRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<DescribeChangeSetRequest>;
export type ChangeSetName = string;
export type Intent = "VALIDATE" | "APPLY" | (string & {});
const Intent = S.String;

export type ChangeStatus =
  | "PREPARING"
  | "APPLYING"
  | "SUCCEEDED"
  | "CANCELLED"
  | "FAILED"
  | (string & {});
const ChangeStatus = S.String;

export type FailureCode = "CLIENT_ERROR" | "SERVER_FAULT" | (string & {});
const FailureCode = S.String;

export type ExceptionMessageContent = string;
export type ChangeType = string;
export interface Entity {
  Type: string;
  Identifier?: string;
}
const Entity = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<Entity>;
export type Json = string;
export type ErrorCodeString = string;
export interface ErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
const ErrorDetail = BatchDescribeErrorDetail as any as S.Schema<ErrorDetail>;
export type ErrorDetailList = ErrorDetail[];
const ErrorDetailList = /*@__PURE__*/ __L.at(__c3, 1);
export type ChangeName = string;
export interface ChangeSummary {
  ChangeType?: string;
  Entity?: Entity;
  Details?: string;
  DetailsDocument?: any;
  ErrorDetailList?: ErrorDetail[];
  ChangeName?: string;
}
const ChangeSummary = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ChangeSummary>;
export type ChangeSetDescription = ChangeSummary[];
const ChangeSetDescription = /*@__PURE__*/ __L.at(__c3, 3);
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
const DescribeChangeSetResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DescribeChangeSetResponse>;
export interface DescribeEntityRequest {
  Catalog: string;
  EntityId: string;
}
const DescribeEntityRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DescribeEntityRequest>;
export interface DescribeEntityResponse {
  EntityType?: string;
  EntityIdentifier?: string;
  EntityArn?: string;
  LastModifiedDate?: string;
  Details?: string;
  DetailsDocument?: any;
}
const DescribeEntityResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DescribeEntityResponse>;
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
const GetResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<GetResourcePolicyRequest>;
export type ResourcePolicyJson = string;
export interface GetResourcePolicyResponse {
  Policy?: string;
}
const GetResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<GetResourcePolicyResponse>;
export type FrameworkId = string;
export interface AssessmentTargetFilter {
  EntityId?: string;
  ChangeSetId?: string;
}
const AssessmentTargetFilter = AssessmentTargetSummary as any as S.Schema<AssessmentTargetFilter>;
export interface AMISecurityFilters {
  DeliveryOptionId?: string;
}
const AMISecurityFilters = AMISecuritySummary as any as S.Schema<AMISecurityFilters>;
export interface ContainerSecurityFilters {
  DeliveryOptionId?: string;
}
const ContainerSecurityFilters = AMISecuritySummary as any as S.Schema<ContainerSecurityFilters>;
export type FrameworkFilters =
  | { AMISecurityFilters: AMISecurityFilters; ContainerSecurityFilters?: never }
  | { AMISecurityFilters?: never; ContainerSecurityFilters: ContainerSecurityFilters };
const FrameworkFilters = /*@__PURE__*/ __L.at(__c4, 1);
export type ListAssessmentsMaxResultInteger = number;
export interface ListAssessmentsRequest {
  Catalog: string;
  FrameworkId?: string;
  AssessmentTargetFilter?: AssessmentTargetFilter;
  FrameworkFilters?: FrameworkFilters;
  MaxResults?: number;
  NextToken?: string;
}
const ListAssessmentsRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListAssessmentsRequest>;
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
const AssessmentSummary = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<AssessmentSummary>;
export type AssessmentSummaryList = AssessmentSummary[];
const AssessmentSummaryList = /*@__PURE__*/ __L.at(__c4, 4);
export interface ListAssessmentsResponse {
  AssessmentSummaryList?: AssessmentSummary[];
  NextToken?: string;
}
const ListAssessmentsResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<ListAssessmentsResponse>;
export type FilterName = string;
export type FilterValueContent = string;
export type ValueList = string[];
const ValueList = /*@__PURE__*/ __L.at(__c4, 6);
export interface Filter {
  Name?: string;
  ValueList?: string[];
}
const Filter = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c5, 0);
export type SortBy = string;
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
const SortOrder = S.String;

export interface Sort {
  SortBy?: string;
  SortOrder?: SortOrder;
}
const Sort = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Sort>;
export type ListChangeSetsMaxResultInteger = number;
export interface ListChangeSetsRequest {
  Catalog: string;
  FilterList?: Filter[];
  Sort?: Sort;
  MaxResults?: number;
  NextToken?: string;
}
const ListChangeSetsRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ListChangeSetsRequest>;
export type ResourceIdList = string[];
const ResourceIdList = ValueList as any as S.Schema<ResourceIdList>;
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
const ChangeSetSummaryListItem = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ChangeSetSummaryListItem>;
export type ChangeSetSummaryList = ChangeSetSummaryListItem[];
const ChangeSetSummaryList = /*@__PURE__*/ __L.at(__c5, 4);
export interface ListChangeSetsResponse {
  ChangeSetSummaryList?: ChangeSetSummaryListItem[];
  NextToken?: string;
}
const ListChangeSetsResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ListChangeSetsResponse>;
export type ListEntitiesMaxResultInteger = number;
export type OwnershipType = "SELF" | "SHARED" | (string & {});
const OwnershipType = S.String;

export type DataProductEntityIdString = string;
export type DataProductEntityIdFilterValueList = string[];
const DataProductEntityIdFilterValueList =
  ValueList as any as S.Schema<DataProductEntityIdFilterValueList>;
export interface DataProductEntityIdFilter {
  ValueList?: string[];
}
const DataProductEntityIdFilter = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DataProductEntityIdFilter>;
export type DataProductTitleString = string;
export type DataProductTitleFilterValueList = string[];
const DataProductTitleFilterValueList =
  ValueList as any as S.Schema<DataProductTitleFilterValueList>;
export interface DataProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const DataProductTitleFilter = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DataProductTitleFilter>;
export type DataProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Unavailable"
  | "Draft"
  | (string & {});
const DataProductVisibilityString = S.String;

export type DataProductVisibilityFilterValueList = DataProductVisibilityString[];
const DataProductVisibilityFilterValueList = /*@__PURE__*/ __L.at(__c6, 0);
export interface DataProductVisibilityFilter {
  ValueList?: DataProductVisibilityString[];
}
const DataProductVisibilityFilter = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DataProductVisibilityFilter>;
export interface DataProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
const DataProductLastModifiedDateFilterDateRange = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DataProductLastModifiedDateFilterDateRange>;
export interface DataProductLastModifiedDateFilter {
  DateRange?: DataProductLastModifiedDateFilterDateRange;
}
const DataProductLastModifiedDateFilter = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DataProductLastModifiedDateFilter>;
export interface DataProductFilters {
  EntityId?: DataProductEntityIdFilter;
  ProductTitle?: DataProductTitleFilter;
  Visibility?: DataProductVisibilityFilter;
  LastModifiedDate?: DataProductLastModifiedDateFilter;
}
const DataProductFilters = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<DataProductFilters>;
export type SaaSProductEntityIdString = string;
export type SaaSProductEntityIdFilterValueList = string[];
export interface SaaSProductEntityIdFilter {
  ValueList?: string[];
}
const SaaSProductEntityIdFilter =
  DataProductEntityIdFilter as any as S.Schema<SaaSProductEntityIdFilter>;
export type SaaSProductTitleString = string;
export type SaaSProductTitleFilterValueList = string[];
export interface SaaSProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const SaaSProductTitleFilter = DataProductTitleFilter as any as S.Schema<SaaSProductTitleFilter>;
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
const SaaSProductVisibilityFilter =
  DataProductVisibilityFilter as any as S.Schema<SaaSProductVisibilityFilter>;
export interface SaaSProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface SaaSProductLastModifiedDateFilter {
  DateRange?: SaaSProductLastModifiedDateFilterDateRange;
}
const SaaSProductLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<SaaSProductLastModifiedDateFilter>;
export interface SaaSProductFilters {
  EntityId?: SaaSProductEntityIdFilter;
  ProductTitle?: SaaSProductTitleFilter;
  Visibility?: SaaSProductVisibilityFilter;
  LastModifiedDate?: SaaSProductLastModifiedDateFilter;
}
const SaaSProductFilters = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<SaaSProductFilters>;
export type AmiProductEntityIdString = string;
export type AmiProductEntityIdFilterValueList = string[];
const AmiProductEntityIdFilterValueList =
  ValueList as any as S.Schema<AmiProductEntityIdFilterValueList>;
export interface AmiProductEntityIdFilter {
  ValueList?: string[];
}
const AmiProductEntityIdFilter = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<AmiProductEntityIdFilter>;
export interface AmiProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface AmiProductLastModifiedDateFilter {
  DateRange?: AmiProductLastModifiedDateFilterDateRange;
}
const AmiProductLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<AmiProductLastModifiedDateFilter>;
export type AmiProductTitleString = string;
export type AmiProductTitleFilterValueList = string[];
export interface AmiProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const AmiProductTitleFilter = DataProductTitleFilter as any as S.Schema<AmiProductTitleFilter>;
export type AmiProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft"
  | (string & {});
const AmiProductVisibilityString = S.String;

export type AmiProductVisibilityFilterValueList = AmiProductVisibilityString[];
export interface AmiProductVisibilityFilter {
  ValueList?: AmiProductVisibilityString[];
}
const AmiProductVisibilityFilter =
  DataProductVisibilityFilter as any as S.Schema<AmiProductVisibilityFilter>;
export interface AmiProductFilters {
  EntityId?: AmiProductEntityIdFilter;
  LastModifiedDate?: AmiProductLastModifiedDateFilter;
  ProductTitle?: AmiProductTitleFilter;
  Visibility?: AmiProductVisibilityFilter;
}
const AmiProductFilters = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<AmiProductFilters>;
export type OfferEntityIdString = string;
export type OfferEntityIdFilterValueList = string[];
export interface OfferEntityIdFilter {
  ValueList?: string[];
}
const OfferEntityIdFilter = AmiProductEntityIdFilter as any as S.Schema<OfferEntityIdFilter>;
export type OfferNameString = string;
export type OfferNameFilterValueList = string[];
export interface OfferNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const OfferNameFilter = DataProductTitleFilter as any as S.Schema<OfferNameFilter>;
export type OfferProductIdString = string;
export type OfferProductIdFilterValueList = string[];
export interface OfferProductIdFilter {
  ValueList?: string[];
}
const OfferProductIdFilter = AmiProductEntityIdFilter as any as S.Schema<OfferProductIdFilter>;
export type OfferResaleAuthorizationIdString = string;
export type OfferResaleAuthorizationIdFilterValueList = string[];
export interface OfferResaleAuthorizationIdFilter {
  ValueList?: string[];
}
const OfferResaleAuthorizationIdFilter =
  DataProductEntityIdFilter as any as S.Schema<OfferResaleAuthorizationIdFilter>;
export interface OfferReleaseDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
const OfferReleaseDateFilterDateRange =
  DataProductLastModifiedDateFilterDateRange as any as S.Schema<OfferReleaseDateFilterDateRange>;
export interface OfferReleaseDateFilter {
  DateRange?: OfferReleaseDateFilterDateRange;
}
const OfferReleaseDateFilter = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<OfferReleaseDateFilter>;
export interface OfferAvailabilityEndDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferAvailabilityEndDateFilter {
  DateRange?: OfferAvailabilityEndDateFilterDateRange;
}
const OfferAvailabilityEndDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<OfferAvailabilityEndDateFilter>;
export type OfferBuyerAccountsFilterWildcard = string;
export interface OfferBuyerAccountsFilter {
  WildCardValue?: string;
}
const OfferBuyerAccountsFilter = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<OfferBuyerAccountsFilter>;
export type OfferStateString = "Draft" | "Released" | (string & {});
const OfferStateString = S.String;

export type OfferStateFilterValueList = OfferStateString[];
const OfferStateFilterValueList = /*@__PURE__*/ __L.at(__c7, 2);
export interface OfferStateFilter {
  ValueList?: OfferStateString[];
}
const OfferStateFilter = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<OfferStateFilter>;
export type OfferTargetingString =
  | "BuyerAccounts"
  | "ParticipatingPrograms"
  | "CountryCodes"
  | "None"
  | (string & {});
export type OfferTargetingFilterValueList = OfferTargetingString[];
const OfferTargetingFilterValueList =
  OfferStateFilterValueList as any as S.Schema<OfferTargetingFilterValueList>;
export interface OfferTargetingFilter {
  ValueList?: OfferTargetingString[];
}
const OfferTargetingFilter = OfferStateFilter as any as S.Schema<OfferTargetingFilter>;
export interface OfferLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferLastModifiedDateFilter {
  DateRange?: OfferLastModifiedDateFilterDateRange;
}
const OfferLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<OfferLastModifiedDateFilter>;
export type OfferSetIdString = string;
export type OfferSetIdFilterValueList = string[];
export interface OfferSetIdFilter {
  ValueList?: string[];
}
const OfferSetIdFilter = AmiProductEntityIdFilter as any as S.Schema<OfferSetIdFilter>;
export type OfferTargetAgreementIdString = string;
export type OfferTargetAgreementIdFilterValueList = string[];
export interface OfferTargetAgreementIdFilter {
  ValueList?: string[];
}
const OfferTargetAgreementIdFilter =
  DataProductEntityIdFilter as any as S.Schema<OfferTargetAgreementIdFilter>;
export type OfferTargetAgreementIntentString = "Renew" | (string & {});
const OfferTargetAgreementIntentString = S.String;

export type OfferTargetAgreementIntentFilterValueList = OfferTargetAgreementIntentString[];
export interface OfferTargetAgreementIntentFilter {
  ValueList?: OfferTargetAgreementIntentString[];
}
const OfferTargetAgreementIntentFilter =
  DataProductVisibilityFilter as any as S.Schema<OfferTargetAgreementIntentFilter>;
export type OfferCreatedBySourceString = "Seller" | "AwsMarketplace" | (string & {});
const OfferCreatedBySourceString = S.String;

export type OfferCreatedBySourceFilterValueList = OfferCreatedBySourceString[];
export interface OfferCreatedBySourceFilter {
  ValueList?: OfferCreatedBySourceString[];
}
const OfferCreatedBySourceFilter =
  DataProductVisibilityFilter as any as S.Schema<OfferCreatedBySourceFilter>;
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
const OfferFilters = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<OfferFilters>;
export type ContainerProductEntityIdString = string;
export type ContainerProductEntityIdFilterValueList = string[];
export interface ContainerProductEntityIdFilter {
  ValueList?: string[];
}
const ContainerProductEntityIdFilter =
  DataProductEntityIdFilter as any as S.Schema<ContainerProductEntityIdFilter>;
export interface ContainerProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface ContainerProductLastModifiedDateFilter {
  DateRange?: ContainerProductLastModifiedDateFilterDateRange;
}
const ContainerProductLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<ContainerProductLastModifiedDateFilter>;
export type ContainerProductTitleString = string;
export type ContainerProductTitleFilterValueList = string[];
const ContainerProductTitleFilterValueList =
  ValueList as any as S.Schema<ContainerProductTitleFilterValueList>;
export interface ContainerProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ContainerProductTitleFilter = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ContainerProductTitleFilter>;
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
const ContainerProductVisibilityFilter =
  DataProductVisibilityFilter as any as S.Schema<ContainerProductVisibilityFilter>;
export interface ContainerProductFilters {
  EntityId?: ContainerProductEntityIdFilter;
  LastModifiedDate?: ContainerProductLastModifiedDateFilter;
  ProductTitle?: ContainerProductTitleFilter;
  Visibility?: ContainerProductVisibilityFilter;
}
const ContainerProductFilters = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ContainerProductFilters>;
export type ResaleAuthorizationEntityIdString = string;
export type ResaleAuthorizationEntityIdFilterValueList = string[];
export interface ResaleAuthorizationEntityIdFilter {
  ValueList?: string[];
}
const ResaleAuthorizationEntityIdFilter =
  DataProductEntityIdFilter as any as S.Schema<ResaleAuthorizationEntityIdFilter>;
export type ResaleAuthorizationNameString = string;
export type ResaleAuthorizationNameFilterValueList = string[];
export type ResaleAuthorizationNameFilterWildcard = string;
export interface ResaleAuthorizationNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationNameFilter =
  ContainerProductTitleFilter as any as S.Schema<ResaleAuthorizationNameFilter>;
export type ResaleAuthorizationProductIdString = string;
export type ResaleAuthorizationProductIdFilterValueList = string[];
export type ResaleAuthorizationProductIdFilterWildcard = string;
export interface ResaleAuthorizationProductIdFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationProductIdFilter =
  ContainerProductTitleFilter as any as S.Schema<ResaleAuthorizationProductIdFilter>;
export interface ResaleAuthorizationCreatedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
const ResaleAuthorizationCreatedDateFilterDateRange =
  DataProductLastModifiedDateFilterDateRange as any as S.Schema<ResaleAuthorizationCreatedDateFilterDateRange>;
export type ResaleAuthorizationCreatedDateFilterValueList = string[];
const ResaleAuthorizationCreatedDateFilterValueList =
  ValueList as any as S.Schema<ResaleAuthorizationCreatedDateFilterValueList>;
export interface ResaleAuthorizationCreatedDateFilter {
  DateRange?: ResaleAuthorizationCreatedDateFilterDateRange;
  ValueList?: string[];
}
const ResaleAuthorizationCreatedDateFilter = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<ResaleAuthorizationCreatedDateFilter>;
export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
const ResaleAuthorizationAvailabilityEndDateFilterDateRange =
  DataProductLastModifiedDateFilterDateRange as any as S.Schema<ResaleAuthorizationAvailabilityEndDateFilterDateRange>;
export type ResaleAuthorizationAvailabilityEndDateFilterValueList = string[];
const ResaleAuthorizationAvailabilityEndDateFilterValueList = /*@__PURE__*/ __L.at(__c8, 0);
export interface ResaleAuthorizationAvailabilityEndDateFilter {
  DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange;
  ValueList?: string[];
}
const ResaleAuthorizationAvailabilityEndDateFilter = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<ResaleAuthorizationAvailabilityEndDateFilter>;
export type ResaleAuthorizationManufacturerAccountIdString = string;
export type ResaleAuthorizationManufacturerAccountIdFilterValueList = string[];
const ResaleAuthorizationManufacturerAccountIdFilterValueList =
  ResaleAuthorizationAvailabilityEndDateFilterValueList as any as S.Schema<ResaleAuthorizationManufacturerAccountIdFilterValueList>;
export type ResaleAuthorizationManufacturerAccountIdFilterWildcard = string;
export interface ResaleAuthorizationManufacturerAccountIdFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationManufacturerAccountIdFilter = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<ResaleAuthorizationManufacturerAccountIdFilter>;
export type ResaleAuthorizationProductNameString = string;
export type ResaleAuthorizationProductNameFilterValueList = string[];
export type ResaleAuthorizationProductNameFilterWildcard = string;
export interface ResaleAuthorizationProductNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationProductNameFilter =
  ContainerProductTitleFilter as any as S.Schema<ResaleAuthorizationProductNameFilter>;
export type ResaleAuthorizationManufacturerLegalNameString = string;
export type ResaleAuthorizationManufacturerLegalNameFilterValueList = string[];
export type ResaleAuthorizationManufacturerLegalNameFilterWildcard = string;
export interface ResaleAuthorizationManufacturerLegalNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationManufacturerLegalNameFilter =
  ResaleAuthorizationManufacturerAccountIdFilter as any as S.Schema<ResaleAuthorizationManufacturerLegalNameFilter>;
export type ResaleAuthorizationResellerAccountIDString = string;
export type ResaleAuthorizationResellerAccountIDFilterValueList = string[];
export type ResaleAuthorizationResellerAccountIDFilterWildcard = string;
export interface ResaleAuthorizationResellerAccountIDFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationResellerAccountIDFilter =
  ContainerProductTitleFilter as any as S.Schema<ResaleAuthorizationResellerAccountIDFilter>;
export type ResaleAuthorizationResellerLegalNameString = string;
export type ResaleAuthorizationResellerLegalNameFilterValueList = string[];
export type ResaleAuthorizationResellerLegalNameFilterWildcard = string;
export interface ResaleAuthorizationResellerLegalNameFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const ResaleAuthorizationResellerLegalNameFilter =
  ContainerProductTitleFilter as any as S.Schema<ResaleAuthorizationResellerLegalNameFilter>;
export type ResaleAuthorizationStatusString = "Draft" | "Active" | "Restricted" | (string & {});
const ResaleAuthorizationStatusString = S.String;

export type ResaleAuthorizationStatusFilterValueList = ResaleAuthorizationStatusString[];
export interface ResaleAuthorizationStatusFilter {
  ValueList?: ResaleAuthorizationStatusString[];
}
const ResaleAuthorizationStatusFilter =
  DataProductVisibilityFilter as any as S.Schema<ResaleAuthorizationStatusFilter>;
export type ResaleAuthorizationOfferExtendedStatusString = string;
export type ResaleAuthorizationOfferExtendedStatusFilterValueList = string[];
const ResaleAuthorizationOfferExtendedStatusFilterValueList =
  ResaleAuthorizationAvailabilityEndDateFilterValueList as any as S.Schema<ResaleAuthorizationOfferExtendedStatusFilterValueList>;
export interface ResaleAuthorizationOfferExtendedStatusFilter {
  ValueList?: string[];
}
const ResaleAuthorizationOfferExtendedStatusFilter = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<ResaleAuthorizationOfferExtendedStatusFilter>;
export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface ResaleAuthorizationLastModifiedDateFilter {
  DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange;
}
const ResaleAuthorizationLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<ResaleAuthorizationLastModifiedDateFilter>;
export type ResaleAuthorizationResellerRoleString =
  | "ChannelPartner"
  | "Distributor"
  | (string & {});
const ResaleAuthorizationResellerRoleString = S.String;

export type ResaleAuthorizationResellerRoleFilterValueList =
  ResaleAuthorizationResellerRoleString[];
export interface ResaleAuthorizationResellerRoleFilter {
  ValueList?: ResaleAuthorizationResellerRoleString[];
}
const ResaleAuthorizationResellerRoleFilter =
  DataProductVisibilityFilter as any as S.Schema<ResaleAuthorizationResellerRoleFilter>;
export type ResaleAuthorizationSourceAuthorizationString = string;
export type ResaleAuthorizationSourceAuthorizationFilterValueList = string[];
export interface ResaleAuthorizationSourceAuthorizationFilter {
  ValueList?: string[];
}
const ResaleAuthorizationSourceAuthorizationFilter =
  ResaleAuthorizationOfferExtendedStatusFilter as any as S.Schema<ResaleAuthorizationSourceAuthorizationFilter>;
export type ResaleAuthorizationIssuerAccountIdString = string;
export type ResaleAuthorizationIssuerAccountIdFilterValueList = string[];
export interface ResaleAuthorizationIssuerAccountIdFilter {
  ValueList?: string[];
}
const ResaleAuthorizationIssuerAccountIdFilter =
  DataProductEntityIdFilter as any as S.Schema<ResaleAuthorizationIssuerAccountIdFilter>;
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
const ResaleAuthorizationFilters = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<ResaleAuthorizationFilters>;
export type MachineLearningProductEntityIdString = string;
export type MachineLearningProductEntityIdFilterValueList = string[];
export interface MachineLearningProductEntityIdFilter {
  ValueList?: string[];
}
const MachineLearningProductEntityIdFilter =
  DataProductEntityIdFilter as any as S.Schema<MachineLearningProductEntityIdFilter>;
export interface MachineLearningProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface MachineLearningProductLastModifiedDateFilter {
  DateRange?: MachineLearningProductLastModifiedDateFilterDateRange;
}
const MachineLearningProductLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<MachineLearningProductLastModifiedDateFilter>;
export type MachineLearningProductTitleString = string;
export type MachineLearningProductTitleFilterValueList = string[];
export interface MachineLearningProductTitleFilter {
  ValueList?: string[];
  WildCardValue?: string;
}
const MachineLearningProductTitleFilter =
  ContainerProductTitleFilter as any as S.Schema<MachineLearningProductTitleFilter>;
export type MachineLearningProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft"
  | (string & {});
const MachineLearningProductVisibilityString = S.String;

export type MachineLearningProductVisibilityFilterValueList =
  MachineLearningProductVisibilityString[];
export interface MachineLearningProductVisibilityFilter {
  ValueList?: MachineLearningProductVisibilityString[];
}
const MachineLearningProductVisibilityFilter =
  DataProductVisibilityFilter as any as S.Schema<MachineLearningProductVisibilityFilter>;
export interface MachineLearningProductFilters {
  EntityId?: MachineLearningProductEntityIdFilter;
  LastModifiedDate?: MachineLearningProductLastModifiedDateFilter;
  ProductTitle?: MachineLearningProductTitleFilter;
  Visibility?: MachineLearningProductVisibilityFilter;
}
const MachineLearningProductFilters = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<MachineLearningProductFilters>;
export type OfferSetEntityIdString = string;
export type OfferSetEntityIdFilterValueList = string[];
export interface OfferSetEntityIdFilter {
  ValueList?: string[];
}
const OfferSetEntityIdFilter = AmiProductEntityIdFilter as any as S.Schema<OfferSetEntityIdFilter>;
export type OfferSetNameString = string;
export type OfferSetNameFilterValueList = string[];
export interface OfferSetNameFilter {
  ValueList?: string[];
}
const OfferSetNameFilter = AmiProductEntityIdFilter as any as S.Schema<OfferSetNameFilter>;
export type OfferSetStateString = "Draft" | "Released" | (string & {});
const OfferSetStateString = S.String;

export type OfferSetStateFilterValueList = OfferSetStateString[];
export interface OfferSetStateFilter {
  ValueList?: OfferSetStateString[];
}
const OfferSetStateFilter = OfferStateFilter as any as S.Schema<OfferSetStateFilter>;
export interface OfferSetReleaseDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferSetReleaseDateFilter {
  DateRange?: OfferSetReleaseDateFilterDateRange;
}
const OfferSetReleaseDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<OfferSetReleaseDateFilter>;
export type OfferSetAssociatedOfferIdsString = string;
export type OfferSetAssociatedOfferIdsFilterValueList = string[];
export interface OfferSetAssociatedOfferIdsFilter {
  ValueList?: string[];
}
const OfferSetAssociatedOfferIdsFilter =
  DataProductEntityIdFilter as any as S.Schema<OfferSetAssociatedOfferIdsFilter>;
export type OfferSetSolutionIdString = string;
export type OfferSetSolutionIdFilterValueList = string[];
export interface OfferSetSolutionIdFilter {
  ValueList?: string[];
}
const OfferSetSolutionIdFilter =
  AmiProductEntityIdFilter as any as S.Schema<OfferSetSolutionIdFilter>;
export interface OfferSetLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferSetLastModifiedDateFilter {
  DateRange?: OfferSetLastModifiedDateFilterDateRange;
}
const OfferSetLastModifiedDateFilter =
  DataProductLastModifiedDateFilter as any as S.Schema<OfferSetLastModifiedDateFilter>;
export interface OfferSetFilters {
  EntityId?: OfferSetEntityIdFilter;
  Name?: OfferSetNameFilter;
  State?: OfferSetStateFilter;
  ReleaseDate?: OfferSetReleaseDateFilter;
  AssociatedOfferIds?: OfferSetAssociatedOfferIdsFilter;
  SolutionId?: OfferSetSolutionIdFilter;
  LastModifiedDate?: OfferSetLastModifiedDateFilter;
}
const OfferSetFilters = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<OfferSetFilters>;
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
const EntityTypeFilters = /*@__PURE__*/ __L.at(__c8, 7);
export type DataProductSortBy =
  | "EntityId"
  | "ProductTitle"
  | "Visibility"
  | "LastModifiedDate"
  | (string & {});
const DataProductSortBy = S.String;

export interface DataProductSort {
  SortBy?: DataProductSortBy;
  SortOrder?: SortOrder;
}
const DataProductSort = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<DataProductSort>;
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
const SaaSProductSort = DataProductSort as any as S.Schema<SaaSProductSort>;
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
const AmiProductSort = DataProductSort as any as S.Schema<AmiProductSort>;
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
const OfferSort = DataProductSort as any as S.Schema<OfferSort>;
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
const ContainerProductSort = DataProductSort as any as S.Schema<ContainerProductSort>;
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
const ResaleAuthorizationSort = DataProductSort as any as S.Schema<ResaleAuthorizationSort>;
export type MachineLearningProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility"
  | (string & {});
const MachineLearningProductSortBy = S.String;

export interface MachineLearningProductSort {
  SortBy?: MachineLearningProductSortBy;
  SortOrder?: SortOrder;
}
const MachineLearningProductSort = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<MachineLearningProductSort>;
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
const OfferSetSort = DataProductSort as any as S.Schema<OfferSetSort>;
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
const EntityTypeSort = /*@__PURE__*/ __L.at(__c9, 2);
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
const ListEntitiesRequest = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<ListEntitiesRequest>;
export type EntityNameString = string;
export type VisibilityValue = string;
export interface AmiProductSummary {
  ProductTitle?: string;
  Visibility?: AmiProductVisibilityString;
}
const AmiProductSummary = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<AmiProductSummary>;
export interface ContainerProductSummary {
  ProductTitle?: string;
  Visibility?: ContainerProductVisibilityString;
}
const ContainerProductSummary = AmiProductSummary as any as S.Schema<ContainerProductSummary>;
export interface DataProductSummary {
  ProductTitle?: string;
  Visibility?: DataProductVisibilityString;
}
const DataProductSummary = AmiProductSummary as any as S.Schema<DataProductSummary>;
export interface SaaSProductSummary {
  ProductTitle?: string;
  Visibility?: SaaSProductVisibilityString;
}
const SaaSProductSummary = AmiProductSummary as any as S.Schema<SaaSProductSummary>;
export type OfferBuyerAccountsString = string;
export type OfferBuyerAccountsList = string[];
const OfferBuyerAccountsList = ValueList as any as S.Schema<OfferBuyerAccountsList>;
export type OfferTargetingList = OfferTargetingString[];
const OfferTargetingList = OfferTargetingFilterValueList as any as S.Schema<OfferTargetingList>;
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
const OfferSummary = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<OfferSummary>;
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
const ResaleAuthorizationSummary = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ResaleAuthorizationSummary>;
export interface MachineLearningProductSummary {
  ProductTitle?: string;
  Visibility?: MachineLearningProductVisibilityString;
}
const MachineLearningProductSummary = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<MachineLearningProductSummary>;
export type OfferSetAssociatedOfferIdsList = string[];
const OfferSetAssociatedOfferIdsList = ValueList as any as S.Schema<OfferSetAssociatedOfferIdsList>;
export interface OfferSetSummary {
  Name?: string;
  State?: OfferSetStateString;
  ReleaseDate?: string;
  AssociatedOfferIds?: string[];
  SolutionId?: string;
}
const OfferSetSummary = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<OfferSetSummary>;
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
const EntitySummary = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<EntitySummary>;
export type EntitySummaryList = EntitySummary[];
const EntitySummaryList = /*@__PURE__*/ __L.at(__c10, 2);
export interface ListEntitiesResponse {
  EntitySummaryList?: EntitySummary[];
  NextToken?: string;
}
const ListEntitiesResponse = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<ListEntitiesResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c10, 6);
export interface ListTagsForResourceResponse {
  ResourceArn?: string;
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {}
const PutResourcePolicyResponse =
  DeleteResourcePolicyResponse as any as S.Schema<PutResourcePolicyResponse>;
export interface Change {
  ChangeType: string;
  Entity: Entity;
  EntityTags?: Tag[];
  Details?: string;
  DetailsDocument?: any;
  ChangeName?: string;
}
const Change = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<Change>;
export type RequestedChangeList = Change[];
const RequestedChangeList = /*@__PURE__*/ __L.at(__c11, 2);
export type ClientRequestToken = string;
export interface StartChangeSetRequest {
  Catalog: string;
  ChangeSet: Change[];
  ChangeSetName?: string;
  ClientRequestToken?: string;
  ChangeSetTags?: Tag[];
  Intent?: Intent;
}
const StartChangeSetRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<StartChangeSetRequest>;
export interface StartChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
}
const StartChangeSetResponse = CancelChangeSetResponse as any as S.Schema<StartChangeSetResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteResourcePolicyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = ValueList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteResourcePolicyResponse as any as S.Schema<UntagResourceResponse>;
export type ValidationExceptionReason =
  | "UnknownOperation"
  | "CannotParse"
  | "FieldValidationFailed"
  | "Other"
  | (string & {});
const ValidationExceptionReason = S.String;

export type FieldName = string;
export interface ValidationExceptionField {
  Reason?: ValidationExceptionReason;
  EntityType?: string;
  EntityId?: string;
  ChangeType?: string;
  Field?: string;
  Message?: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c11, 7);
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
  input: BatchDescribeEntitiesRequest,
  output: BatchDescribeEntitiesResponse,
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
  input: CancelChangeSetRequest,
  output: CancelChangeSetResponse,
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
  input: DeleteResourcePolicyRequest,
  output: DeleteResourcePolicyResponse,
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
  input: DescribeAssessmentRequest,
  output: DescribeAssessmentResponse,
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
  input: DescribeChangeSetRequest,
  output: DescribeChangeSetResponse,
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
  input: DescribeEntityRequest,
  output: DescribeEntityResponse,
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
  input: GetResourcePolicyRequest,
  output: GetResourcePolicyResponse,
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
  input: ListAssessmentsRequest,
  output: ListAssessmentsResponse,
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
  input: ListChangeSetsRequest,
  output: ListChangeSetsResponse,
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
  input: ListEntitiesRequest,
  output: ListEntitiesResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: PutResourcePolicyRequest,
  output: PutResourcePolicyResponse,
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
  input: StartChangeSetRequest,
  output: StartChangeSetResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
      return S.Array(EntityRequest);
    case 2:
      return S.suspend(() =>
        S.Struct({ EntityRequestList: EntityRequestList }).pipe(
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
      return S.Record(S.String, /*@__PURE__*/ EntityDetail.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "BatchDescribeErrorDetail" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ BatchDescribeErrorDetail.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ EntityDetails: S.optional(EntityDetails), Errors: S.optional(Errors) }),
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
        /*@__PURE__*/ S.Struct({ AMISecuritySummary: AMISecuritySummary }),
        /*@__PURE__*/ S.Struct({ ContainerSecuritySummary: ContainerSecuritySummary }),
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
      return S.Array(ErrorScope);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(S.String),
          Message: S.optional(S.String),
          Scope: S.optional(ErrorScopeList),
        }),
      ).annotate({ identifier: "ControlError" });
    case 3:
      return S.Array(ControlError);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ControlId: S.optional(S.String),
          ControlAssessmentResult: S.optional(ControlAssessmentResult),
          Errors: S.optional(ControlErrorList),
        }),
      ).annotate({ identifier: "ControlAssessment" });
    case 5:
      return S.Array(ControlAssessment);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssessmentArn: S.optional(S.String),
          AssessmentId: S.optional(S.String),
          FrameworkId: S.optional(S.String),
          AssessmentTargetSummary: S.optional(AssessmentTargetSummary),
          FrameworkSummary: S.optional(FrameworkSummary),
          AssessmentResult: S.optional(AssessmentResult),
          CreatedAt: S.optional(S.String),
          ExpiresAt: S.optional(S.String),
          ControlAssessments: S.optional(ControlAssessmentList),
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
      return S.Array(ErrorDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChangeType: S.optional(S.String),
          Entity: S.optional(Entity),
          Details: S.optional(S.String),
          DetailsDocument: S.optional(S.Any),
          ErrorDetailList: S.optional(ErrorDetailList),
          ChangeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChangeSummary" });
    case 3:
      return S.Array(ChangeSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChangeSetId: S.optional(S.String),
          ChangeSetArn: S.optional(S.String),
          ChangeSetName: S.optional(S.String),
          Intent: S.optional(Intent),
          StartTime: S.optional(S.String),
          EndTime: S.optional(S.String),
          Status: S.optional(ChangeStatus),
          FailureCode: S.optional(FailureCode),
          FailureDescription: S.optional(S.String),
          ChangeSet: S.optional(ChangeSetDescription),
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
        /*@__PURE__*/ S.Struct({ AMISecurityFilters: AMISecurityFilters }),
        /*@__PURE__*/ S.Struct({ ContainerSecurityFilters: ContainerSecurityFilters }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          FrameworkId: S.optional(S.String),
          AssessmentTargetFilter: S.optional(AssessmentTargetFilter),
          FrameworkFilters: S.optional(FrameworkFilters),
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
          AssessmentTargetSummary: S.optional(AssessmentTargetSummary),
          FrameworkSummary: S.optional(FrameworkSummary),
          AssessmentResult: S.optional(AssessmentResult),
          CreatedAt: S.optional(S.String),
          ExpiresAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssessmentSummary" });
    case 4:
      return S.Array(AssessmentSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssessmentSummaryList: S.optional(AssessmentSummaryList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListAssessmentsResponse" });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), ValueList: S.optional(ValueList) }),
      ).annotate({ identifier: "Filter" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Filter);
    case 1:
      return S.suspend(() =>
        S.Struct({ SortBy: S.optional(S.String), SortOrder: S.optional(SortOrder) }),
      ).annotate({ identifier: "Sort" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          FilterList: S.optional(FilterList),
          Sort: S.optional(Sort),
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
          Status: S.optional(ChangeStatus),
          EntityIdList: S.optional(ResourceIdList),
          FailureCode: S.optional(FailureCode),
        }),
      ).annotate({ identifier: "ChangeSetSummaryListItem" });
    case 4:
      return S.Array(ChangeSetSummaryListItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChangeSetSummaryList: S.optional(ChangeSetSummaryList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListChangeSetsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ValueList: S.optional(DataProductEntityIdFilterValueList) }),
      ).annotate({
        identifier: "DataProductEntityIdFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ValueList: S.optional(DataProductTitleFilterValueList),
          WildCardValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataProductTitleFilter" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DataProductVisibilityString);
    case 1:
      return S.suspend(() =>
        S.Struct({ ValueList: S.optional(DataProductVisibilityFilterValueList) }),
      ).annotate({
        identifier: "DataProductVisibilityFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AfterValue: S.optional(S.String), BeforeValue: S.optional(S.String) }),
      ).annotate({
        identifier: "DataProductLastModifiedDateFilterDateRange",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DateRange: S.optional(DataProductLastModifiedDateFilterDateRange) }),
      ).annotate({
        identifier: "DataProductLastModifiedDateFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(DataProductEntityIdFilter),
          ProductTitle: S.optional(DataProductTitleFilter),
          Visibility: S.optional(DataProductVisibilityFilter),
          LastModifiedDate: S.optional(DataProductLastModifiedDateFilter),
        }),
      ).annotate({ identifier: "DataProductFilters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(SaaSProductEntityIdFilter),
          ProductTitle: S.optional(SaaSProductTitleFilter),
          Visibility: S.optional(SaaSProductVisibilityFilter),
          LastModifiedDate: S.optional(SaaSProductLastModifiedDateFilter),
        }),
      ).annotate({ identifier: "SaaSProductFilters" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ValueList: S.optional(AmiProductEntityIdFilterValueList) }),
      ).annotate({ identifier: "AmiProductEntityIdFilter" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(AmiProductEntityIdFilter),
          LastModifiedDate: S.optional(AmiProductLastModifiedDateFilter),
          ProductTitle: S.optional(AmiProductTitleFilter),
          Visibility: S.optional(AmiProductVisibilityFilter),
        }),
      ).annotate({ identifier: "AmiProductFilters" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DateRange: S.optional(OfferReleaseDateFilterDateRange) }),
      ).annotate({ identifier: "OfferReleaseDateFilter" });
    case 1:
      return S.suspend(() => S.Struct({ WildCardValue: S.optional(S.String) })).annotate({
        identifier: "OfferBuyerAccountsFilter",
      });
    case 2:
      return S.Array(OfferStateString);
    case 3:
      return S.suspend(() =>
        S.Struct({ ValueList: S.optional(OfferStateFilterValueList) }),
      ).annotate({ identifier: "OfferStateFilter" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(OfferEntityIdFilter),
          Name: S.optional(OfferNameFilter),
          ProductId: S.optional(OfferProductIdFilter),
          ResaleAuthorizationId: S.optional(OfferResaleAuthorizationIdFilter),
          ReleaseDate: S.optional(OfferReleaseDateFilter),
          AvailabilityEndDate: S.optional(OfferAvailabilityEndDateFilter),
          BuyerAccounts: S.optional(OfferBuyerAccountsFilter),
          State: S.optional(OfferStateFilter),
          Targeting: S.optional(OfferTargetingFilter),
          LastModifiedDate: S.optional(OfferLastModifiedDateFilter),
          OfferSetId: S.optional(OfferSetIdFilter),
          TargetAgreementId: S.optional(OfferTargetAgreementIdFilter),
          TargetAgreementIntent: S.optional(OfferTargetAgreementIntentFilter),
          CreatedBySource: S.optional(OfferCreatedBySourceFilter),
        }),
      ).annotate({ identifier: "OfferFilters" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ValueList: S.optional(ContainerProductTitleFilterValueList),
          WildCardValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ContainerProductTitleFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(ContainerProductEntityIdFilter),
          LastModifiedDate: S.optional(ContainerProductLastModifiedDateFilter),
          ProductTitle: S.optional(ContainerProductTitleFilter),
          Visibility: S.optional(ContainerProductVisibilityFilter),
        }),
      ).annotate({ identifier: "ContainerProductFilters" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DateRange: S.optional(ResaleAuthorizationCreatedDateFilterDateRange),
          ValueList: S.optional(ResaleAuthorizationCreatedDateFilterValueList),
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
          DateRange: S.optional(ResaleAuthorizationAvailabilityEndDateFilterDateRange),
          ValueList: S.optional(ResaleAuthorizationAvailabilityEndDateFilterValueList),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationAvailabilityEndDateFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ValueList: S.optional(ResaleAuthorizationManufacturerAccountIdFilterValueList),
          WildCardValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationManufacturerAccountIdFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ValueList: S.optional(ResaleAuthorizationOfferExtendedStatusFilterValueList) }),
      ).annotate({
        identifier: "ResaleAuthorizationOfferExtendedStatusFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(ResaleAuthorizationEntityIdFilter),
          Name: S.optional(ResaleAuthorizationNameFilter),
          ProductId: S.optional(ResaleAuthorizationProductIdFilter),
          CreatedDate: S.optional(ResaleAuthorizationCreatedDateFilter),
          AvailabilityEndDate: S.optional(ResaleAuthorizationAvailabilityEndDateFilter),
          ManufacturerAccountId: S.optional(ResaleAuthorizationManufacturerAccountIdFilter),
          ProductName: S.optional(ResaleAuthorizationProductNameFilter),
          ManufacturerLegalName: S.optional(ResaleAuthorizationManufacturerLegalNameFilter),
          ResellerAccountID: S.optional(ResaleAuthorizationResellerAccountIDFilter),
          ResellerLegalName: S.optional(ResaleAuthorizationResellerLegalNameFilter),
          Status: S.optional(ResaleAuthorizationStatusFilter),
          OfferExtendedStatus: S.optional(ResaleAuthorizationOfferExtendedStatusFilter),
          LastModifiedDate: S.optional(ResaleAuthorizationLastModifiedDateFilter),
          ResellerRole: S.optional(ResaleAuthorizationResellerRoleFilter),
          SourceAuthorization: S.optional(ResaleAuthorizationSourceAuthorizationFilter),
          IssuerAccountId: S.optional(ResaleAuthorizationIssuerAccountIdFilter),
        }),
      ).annotate({
        identifier: "ResaleAuthorizationFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(MachineLearningProductEntityIdFilter),
          LastModifiedDate: S.optional(MachineLearningProductLastModifiedDateFilter),
          ProductTitle: S.optional(MachineLearningProductTitleFilter),
          Visibility: S.optional(MachineLearningProductVisibilityFilter),
        }),
      ).annotate({
        identifier: "MachineLearningProductFilters",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EntityId: S.optional(OfferSetEntityIdFilter),
          Name: S.optional(OfferSetNameFilter),
          State: S.optional(OfferSetStateFilter),
          ReleaseDate: S.optional(OfferSetReleaseDateFilter),
          AssociatedOfferIds: S.optional(OfferSetAssociatedOfferIdsFilter),
          SolutionId: S.optional(OfferSetSolutionIdFilter),
          LastModifiedDate: S.optional(OfferSetLastModifiedDateFilter),
        }),
      ).annotate({ identifier: "OfferSetFilters" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DataProductFilters: DataProductFilters }),
        /*@__PURE__*/ S.Struct({ SaaSProductFilters: SaaSProductFilters }),
        /*@__PURE__*/ S.Struct({ AmiProductFilters: AmiProductFilters }),
        /*@__PURE__*/ S.Struct({ OfferFilters: OfferFilters }),
        /*@__PURE__*/ S.Struct({ ContainerProductFilters: ContainerProductFilters }),
        /*@__PURE__*/ S.Struct({ ResaleAuthorizationFilters: ResaleAuthorizationFilters }),
        /*@__PURE__*/ S.Struct({ MachineLearningProductFilters: MachineLearningProductFilters }),
        /*@__PURE__*/ S.Struct({ OfferSetFilters: OfferSetFilters }),
      ]);
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SortBy: S.optional(DataProductSortBy), SortOrder: S.optional(SortOrder) }),
      ).annotate({ identifier: "DataProductSort" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SortBy: S.optional(MachineLearningProductSortBy),
          SortOrder: S.optional(SortOrder),
        }),
      ).annotate({
        identifier: "MachineLearningProductSort",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ DataProductSort: DataProductSort }),
        /*@__PURE__*/ S.Struct({ SaaSProductSort: SaaSProductSort }),
        /*@__PURE__*/ S.Struct({ AmiProductSort: AmiProductSort }),
        /*@__PURE__*/ S.Struct({ OfferSort: OfferSort }),
        /*@__PURE__*/ S.Struct({ ContainerProductSort: ContainerProductSort }),
        /*@__PURE__*/ S.Struct({ ResaleAuthorizationSort: ResaleAuthorizationSort }),
        /*@__PURE__*/ S.Struct({ MachineLearningProductSort: MachineLearningProductSort }),
        /*@__PURE__*/ S.Struct({ OfferSetSort: OfferSetSort }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          EntityType: S.String,
          FilterList: S.optional(FilterList),
          Sort: S.optional(Sort),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          OwnershipType: S.optional(OwnershipType),
          EntityTypeFilters: S.optional(EntityTypeFilters),
          EntityTypeSort: S.optional(EntityTypeSort),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListEntities" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEntitiesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProductTitle: S.optional(S.String),
          Visibility: S.optional(AmiProductVisibilityString),
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
          BuyerAccounts: S.optional(OfferBuyerAccountsList),
          State: S.optional(OfferStateString),
          Targeting: S.optional(OfferTargetingList),
          OfferSetId: S.optional(S.String),
          TargetAgreementId: S.optional(S.String),
          TargetAgreementIntent: S.optional(OfferTargetAgreementIntentString),
          CreatedBySource: S.optional(OfferCreatedBySourceString),
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
          Status: S.optional(ResaleAuthorizationStatusString),
          OfferExtendedStatus: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          AvailabilityEndDate: S.optional(S.String),
          ResellerRole: S.optional(ResaleAuthorizationResellerRoleString),
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
          Visibility: S.optional(MachineLearningProductVisibilityString),
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
          State: S.optional(OfferSetStateString),
          ReleaseDate: S.optional(S.String),
          AssociatedOfferIds: S.optional(OfferSetAssociatedOfferIdsList),
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
          AmiProductSummary: S.optional(AmiProductSummary),
          ContainerProductSummary: S.optional(ContainerProductSummary),
          DataProductSummary: S.optional(DataProductSummary),
          SaaSProductSummary: S.optional(SaaSProductSummary),
          OfferSummary: S.optional(OfferSummary),
          ResaleAuthorizationSummary: S.optional(ResaleAuthorizationSummary),
          MachineLearningProductSummary: S.optional(MachineLearningProductSummary),
          OfferSetSummary: S.optional(OfferSetSummary),
        }),
      ).annotate({ identifier: "EntitySummary" });
    case 2:
      return S.Array(EntitySummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          EntitySummaryList: S.optional(EntitySummaryList),
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
      return S.Array(Tag);
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(TagList) }),
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
          Entity: Entity,
          EntityTags: S.optional(TagList),
          Details: S.optional(S.String),
          DetailsDocument: S.optional(S.Any),
          ChangeName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Change" });
    case 2:
      return S.Array(Change);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Catalog: S.String,
          ChangeSet: RequestedChangeList,
          ChangeSetName: S.optional(S.String),
          ClientRequestToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ChangeSetTags: S.optional(TagList),
          Intent: S.optional(Intent),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/StartChangeSet" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartChangeSetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/TagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UntagResource" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Reason: S.optional(ValidationExceptionReason),
          EntityType: S.optional(S.String),
          EntityId: S.optional(S.String),
          ChangeType: S.optional(S.String),
          Field: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "ValidationExceptionField" });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
