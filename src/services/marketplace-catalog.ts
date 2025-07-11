import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class MarketplaceCatalog extends AWSServiceClient {
  batchDescribeEntities(
    input: BatchDescribeEntitiesRequest,
  ): Effect.Effect<
    BatchDescribeEntitiesResponse,
    | AccessDeniedException
    | InternalServiceException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  cancelChangeSet(
    input: CancelChangeSetRequest,
  ): Effect.Effect<
    CancelChangeSetResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeChangeSet(
    input: DescribeChangeSetRequest,
  ): Effect.Effect<
    DescribeChangeSetResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeEntity(
    input: DescribeEntityRequest,
  ): Effect.Effect<
    DescribeEntityResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ResourceNotSupportedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listChangeSets(
    input: ListChangeSetsRequest,
  ): Effect.Effect<
    ListChangeSetsResponse,
    | AccessDeniedException
    | InternalServiceException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listEntities(
    input: ListEntitiesRequest,
  ): Effect.Effect<
    ListEntitiesResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startChangeSet(
    input: StartChangeSetRequest,
  ): Effect.Effect<
    StartChangeSetResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export interface AmiProductEntityIdFilter {
  ValueList?: Array<string>;
}
export type AmiProductEntityIdFilterValueList = Array<string>;
export type AmiProductEntityIdString = string;

export interface AmiProductFilters {
  EntityId?: AmiProductEntityIdFilter;
  LastModifiedDate?: AmiProductLastModifiedDateFilter;
  ProductTitle?: AmiProductTitleFilter;
  Visibility?: AmiProductVisibilityFilter;
}
export interface AmiProductLastModifiedDateFilter {
  DateRange?: AmiProductLastModifiedDateFilterDateRange;
}
export interface AmiProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface AmiProductSort {
  SortBy?: AmiProductSortBy;
  SortOrder?: SortOrder;
}
export type AmiProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility";
export interface AmiProductSummary {
  ProductTitle?: string;
  Visibility?: AmiProductVisibilityString;
}
export interface AmiProductTitleFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type AmiProductTitleFilterValueList = Array<string>;
export type AmiProductTitleString = string;

export interface AmiProductVisibilityFilter {
  ValueList?: Array<AmiProductVisibilityString>;
}
export type AmiProductVisibilityFilterValueList =
  Array<AmiProductVisibilityString>;
export type AmiProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft";
export type ARN = string;

export interface BatchDescribeEntitiesRequest {
  EntityRequestList: Array<EntityRequest>;
}
export interface BatchDescribeEntitiesResponse {
  EntityDetails?: Record<string, EntityDetail>;
  Errors?: Record<string, BatchDescribeErrorDetail>;
}
export type BatchDescribeErrorCodeString = string;

export interface BatchDescribeErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type BatchDescribeErrorMessageContent = string;

export interface CancelChangeSetRequest {
  Catalog: string;
  ChangeSetId: string;
}
export interface CancelChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
}
export type Catalog = string;

export interface Change {
  ChangeType: string;
  Entity: Entity;
  EntityTags?: Array<Tag>;
  Details?: string;
  DetailsDocument?: unknown;
  ChangeName?: string;
}
export type ChangeName = string;

export type ChangeSetDescription = Array<ChangeSummary>;
export type ChangeSetName = string;

export type ChangeSetSummaryList = Array<ChangeSetSummaryListItem>;
export interface ChangeSetSummaryListItem {
  ChangeSetId?: string;
  ChangeSetArn?: string;
  ChangeSetName?: string;
  StartTime?: string;
  EndTime?: string;
  Status?: ChangeStatus;
  EntityIdList?: Array<string>;
  FailureCode?: FailureCode;
}
export type ChangeStatus =
  | "PREPARING"
  | "APPLYING"
  | "SUCCEEDED"
  | "CANCELLED"
  | "FAILED";
export interface ChangeSummary {
  ChangeType?: string;
  Entity?: Entity;
  Details?: string;
  DetailsDocument?: unknown;
  ErrorDetailList?: Array<ErrorDetail>;
  ChangeName?: string;
}
export type ChangeType = string;

export type ClientRequestToken = string;

export interface ContainerProductEntityIdFilter {
  ValueList?: Array<string>;
}
export type ContainerProductEntityIdFilterValueList = Array<string>;
export type ContainerProductEntityIdString = string;

export interface ContainerProductFilters {
  EntityId?: ContainerProductEntityIdFilter;
  LastModifiedDate?: ContainerProductLastModifiedDateFilter;
  ProductTitle?: ContainerProductTitleFilter;
  Visibility?: ContainerProductVisibilityFilter;
}
export interface ContainerProductLastModifiedDateFilter {
  DateRange?: ContainerProductLastModifiedDateFilterDateRange;
}
export interface ContainerProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface ContainerProductSort {
  SortBy?: ContainerProductSortBy;
  SortOrder?: SortOrder;
}
export type ContainerProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility";
export interface ContainerProductSummary {
  ProductTitle?: string;
  Visibility?: ContainerProductVisibilityString;
}
export interface ContainerProductTitleFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ContainerProductTitleFilterValueList = Array<string>;
export type ContainerProductTitleString = string;

export interface ContainerProductVisibilityFilter {
  ValueList?: Array<ContainerProductVisibilityString>;
}
export type ContainerProductVisibilityFilterValueList =
  Array<ContainerProductVisibilityString>;
export type ContainerProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft";
export interface DataProductEntityIdFilter {
  ValueList?: Array<string>;
}
export type DataProductEntityIdFilterValueList = Array<string>;
export type DataProductEntityIdString = string;

export interface DataProductFilters {
  EntityId?: DataProductEntityIdFilter;
  ProductTitle?: DataProductTitleFilter;
  Visibility?: DataProductVisibilityFilter;
  LastModifiedDate?: DataProductLastModifiedDateFilter;
}
export interface DataProductLastModifiedDateFilter {
  DateRange?: DataProductLastModifiedDateFilterDateRange;
}
export interface DataProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface DataProductSort {
  SortBy?: DataProductSortBy;
  SortOrder?: SortOrder;
}
export type DataProductSortBy =
  | "EntityId"
  | "ProductTitle"
  | "Visibility"
  | "LastModifiedDate";
export interface DataProductSummary {
  ProductTitle?: string;
  Visibility?: DataProductVisibilityString;
}
export interface DataProductTitleFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type DataProductTitleFilterValueList = Array<string>;
export type DataProductTitleString = string;

export interface DataProductVisibilityFilter {
  ValueList?: Array<DataProductVisibilityString>;
}
export type DataProductVisibilityFilterValueList =
  Array<DataProductVisibilityString>;
export type DataProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Unavailable"
  | "Draft";
export type DateTimeISO8601 = string;

export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DescribeChangeSetRequest {
  Catalog: string;
  ChangeSetId: string;
}
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
  ChangeSet?: Array<ChangeSummary>;
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
  DetailsDocument?: unknown;
}
export interface Entity {
  Type: string;
  Identifier?: string;
}
export interface EntityDetail {
  EntityType?: string;
  EntityArn?: string;
  EntityIdentifier?: string;
  LastModifiedDate?: string;
  DetailsDocument?: unknown;
}
export type EntityDetails = Record<string, EntityDetail>;
export type EntityId = string;

export type EntityNameString = string;

export interface EntityRequest {
  Catalog: string;
  EntityId: string;
}
export type EntityRequestList = Array<EntityRequest>;
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
}
export type EntitySummaryList = Array<EntitySummary>;
export type EntityType = string;

interface _EntityTypeFilters {
  DataProductFilters?: DataProductFilters;
  SaaSProductFilters?: SaaSProductFilters;
  AmiProductFilters?: AmiProductFilters;
  OfferFilters?: OfferFilters;
  ContainerProductFilters?: ContainerProductFilters;
  ResaleAuthorizationFilters?: ResaleAuthorizationFilters;
  MachineLearningProductFilters?: MachineLearningProductFilters;
}

export type EntityTypeFilters =
  | (_EntityTypeFilters & { DataProductFilters: DataProductFilters })
  | (_EntityTypeFilters & { SaaSProductFilters: SaaSProductFilters })
  | (_EntityTypeFilters & { AmiProductFilters: AmiProductFilters })
  | (_EntityTypeFilters & { OfferFilters: OfferFilters })
  | (_EntityTypeFilters & { ContainerProductFilters: ContainerProductFilters })
  | (_EntityTypeFilters & {
      ResaleAuthorizationFilters: ResaleAuthorizationFilters;
    })
  | (_EntityTypeFilters & {
      MachineLearningProductFilters: MachineLearningProductFilters;
    });
interface _EntityTypeSort {
  DataProductSort?: DataProductSort;
  SaaSProductSort?: SaaSProductSort;
  AmiProductSort?: AmiProductSort;
  OfferSort?: OfferSort;
  ContainerProductSort?: ContainerProductSort;
  ResaleAuthorizationSort?: ResaleAuthorizationSort;
  MachineLearningProductSort?: MachineLearningProductSort;
}

export type EntityTypeSort =
  | (_EntityTypeSort & { DataProductSort: DataProductSort })
  | (_EntityTypeSort & { SaaSProductSort: SaaSProductSort })
  | (_EntityTypeSort & { AmiProductSort: AmiProductSort })
  | (_EntityTypeSort & { OfferSort: OfferSort })
  | (_EntityTypeSort & { ContainerProductSort: ContainerProductSort })
  | (_EntityTypeSort & { ResaleAuthorizationSort: ResaleAuthorizationSort })
  | (_EntityTypeSort & {
      MachineLearningProductSort: MachineLearningProductSort;
    });
export type ErrorCodeString = string;

export interface ErrorDetail {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ErrorDetailList = Array<ErrorDetail>;
export type Errors = Record<string, BatchDescribeErrorDetail>;
export type ExceptionMessageContent = string;

export type FailureCode = "ClientError" | "ServerFault";
export interface Filter {
  Name?: string;
  ValueList?: Array<string>;
}
export type FilterList = Array<Filter>;
export type FilterName = string;

export type FilterValueContent = string;

export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResponse {
  Policy?: string;
}
export type Identifier = string;

export type Intent = "VALIDATE" | "APPLY";
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export type Json = string;

export type JsonDocumentType = unknown;

export type ListChangeSetsMaxResultInteger = number;

export interface ListChangeSetsRequest {
  Catalog: string;
  FilterList?: Array<Filter>;
  Sort?: Sort;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChangeSetsResponse {
  ChangeSetSummaryList?: Array<ChangeSetSummaryListItem>;
  NextToken?: string;
}
export type ListEntitiesMaxResultInteger = number;

export interface ListEntitiesRequest {
  Catalog: string;
  EntityType: string;
  FilterList?: Array<Filter>;
  Sort?: Sort;
  NextToken?: string;
  MaxResults?: number;
  OwnershipType?: OwnershipType;
  EntityTypeFilters?: EntityTypeFilters;
  EntityTypeSort?: EntityTypeSort;
}
export interface ListEntitiesResponse {
  EntitySummaryList?: Array<EntitySummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  ResourceArn?: string;
  Tags?: Array<Tag>;
}
export interface MachineLearningProductEntityIdFilter {
  ValueList?: Array<string>;
}
export type MachineLearningProductEntityIdFilterValueList = Array<string>;
export type MachineLearningProductEntityIdString = string;

export interface MachineLearningProductFilters {
  EntityId?: MachineLearningProductEntityIdFilter;
  LastModifiedDate?: MachineLearningProductLastModifiedDateFilter;
  ProductTitle?: MachineLearningProductTitleFilter;
  Visibility?: MachineLearningProductVisibilityFilter;
}
export interface MachineLearningProductLastModifiedDateFilter {
  DateRange?: MachineLearningProductLastModifiedDateFilterDateRange;
}
export interface MachineLearningProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface MachineLearningProductSort {
  SortBy?: MachineLearningProductSortBy;
  SortOrder?: SortOrder;
}
export type MachineLearningProductSortBy =
  | "EntityId"
  | "LastModifiedDate"
  | "ProductTitle"
  | "Visibility";
export interface MachineLearningProductSummary {
  ProductTitle?: string;
  Visibility?: MachineLearningProductVisibilityString;
}
export interface MachineLearningProductTitleFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type MachineLearningProductTitleFilterValueList = Array<string>;
export type MachineLearningProductTitleString = string;

export interface MachineLearningProductVisibilityFilter {
  ValueList?: Array<MachineLearningProductVisibilityString>;
}
export type MachineLearningProductVisibilityFilterValueList =
  Array<MachineLearningProductVisibilityString>;
export type MachineLearningProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft";
export type NextToken = string;

export interface OfferAvailabilityEndDateFilter {
  DateRange?: OfferAvailabilityEndDateFilterDateRange;
}
export interface OfferAvailabilityEndDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferBuyerAccountsFilter {
  WildCardValue?: string;
}
export type OfferBuyerAccountsFilterWildcard = string;

export type OfferBuyerAccountsList = Array<string>;
export type OfferBuyerAccountsString = string;

export interface OfferEntityIdFilter {
  ValueList?: Array<string>;
}
export type OfferEntityIdFilterValueList = Array<string>;
export type OfferEntityIdString = string;

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
}
export interface OfferLastModifiedDateFilter {
  DateRange?: OfferLastModifiedDateFilterDateRange;
}
export interface OfferLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferNameFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type OfferNameFilterValueList = Array<string>;
export type OfferNameString = string;

export interface OfferProductIdFilter {
  ValueList?: Array<string>;
}
export type OfferProductIdFilterValueList = Array<string>;
export type OfferProductIdString = string;

export interface OfferReleaseDateFilter {
  DateRange?: OfferReleaseDateFilterDateRange;
}
export interface OfferReleaseDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface OfferResaleAuthorizationIdFilter {
  ValueList?: Array<string>;
}
export type OfferResaleAuthorizationIdFilterValueList = Array<string>;
export type OfferResaleAuthorizationIdString = string;

export interface OfferSort {
  SortBy?: OfferSortBy;
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
  | "LastModifiedDate";
export interface OfferStateFilter {
  ValueList?: Array<OfferStateString>;
}
export type OfferStateFilterValueList = Array<OfferStateString>;
export type OfferStateString = "Draft" | "Released";
export interface OfferSummary {
  Name?: string;
  ProductId?: string;
  ResaleAuthorizationId?: string;
  ReleaseDate?: string;
  AvailabilityEndDate?: string;
  BuyerAccounts?: Array<string>;
  State?: OfferStateString;
  Targeting?: Array<OfferTargetingString>;
}
export interface OfferTargetingFilter {
  ValueList?: Array<OfferTargetingString>;
}
export type OfferTargetingFilterValueList = Array<OfferTargetingString>;
export type OfferTargetingList = Array<OfferTargetingString>;
export type OfferTargetingString =
  | "BuyerAccounts"
  | "ParticipatingPrograms"
  | "CountryCodes"
  | "None";
export type OwnershipType = "SELF" | "SHARED";
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResponse {}
export type RequestedChangeList = Array<Change>;
export interface ResaleAuthorizationAvailabilityEndDateFilter {
  DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange;
  ValueList?: Array<string>;
}
export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export type ResaleAuthorizationAvailabilityEndDateFilterValueList =
  Array<string>;
export interface ResaleAuthorizationCreatedDateFilter {
  DateRange?: ResaleAuthorizationCreatedDateFilterDateRange;
  ValueList?: Array<string>;
}
export interface ResaleAuthorizationCreatedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export type ResaleAuthorizationCreatedDateFilterValueList = Array<string>;
export interface ResaleAuthorizationEntityIdFilter {
  ValueList?: Array<string>;
}
export type ResaleAuthorizationEntityIdFilterValueList = Array<string>;
export type ResaleAuthorizationEntityIdString = string;

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
}
export interface ResaleAuthorizationLastModifiedDateFilter {
  DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange;
}
export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface ResaleAuthorizationManufacturerAccountIdFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationManufacturerAccountIdFilterValueList =
  Array<string>;
export type ResaleAuthorizationManufacturerAccountIdFilterWildcard = string;

export type ResaleAuthorizationManufacturerAccountIdString = string;

export interface ResaleAuthorizationManufacturerLegalNameFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationManufacturerLegalNameFilterValueList =
  Array<string>;
export type ResaleAuthorizationManufacturerLegalNameFilterWildcard = string;

export type ResaleAuthorizationManufacturerLegalNameString = string;

export interface ResaleAuthorizationNameFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationNameFilterValueList = Array<string>;
export type ResaleAuthorizationNameFilterWildcard = string;

export type ResaleAuthorizationNameString = string;

export interface ResaleAuthorizationOfferExtendedStatusFilter {
  ValueList?: Array<string>;
}
export type ResaleAuthorizationOfferExtendedStatusFilterValueList =
  Array<string>;
export type ResaleAuthorizationOfferExtendedStatusString = string;

export interface ResaleAuthorizationProductIdFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationProductIdFilterValueList = Array<string>;
export type ResaleAuthorizationProductIdFilterWildcard = string;

export type ResaleAuthorizationProductIdString = string;

export interface ResaleAuthorizationProductNameFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationProductNameFilterValueList = Array<string>;
export type ResaleAuthorizationProductNameFilterWildcard = string;

export type ResaleAuthorizationProductNameString = string;

export interface ResaleAuthorizationResellerAccountIDFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationResellerAccountIDFilterValueList = Array<string>;
export type ResaleAuthorizationResellerAccountIDFilterWildcard = string;

export type ResaleAuthorizationResellerAccountIDString = string;

export interface ResaleAuthorizationResellerLegalNameFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type ResaleAuthorizationResellerLegalNameFilterValueList = Array<string>;
export type ResaleAuthorizationResellerLegalNameFilterWildcard = string;

export type ResaleAuthorizationResellerLegalNameString = string;

export interface ResaleAuthorizationSort {
  SortBy?: ResaleAuthorizationSortBy;
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
  | "LastModifiedDate";
export interface ResaleAuthorizationStatusFilter {
  ValueList?: Array<ResaleAuthorizationStatusString>;
}
export type ResaleAuthorizationStatusFilterValueList =
  Array<ResaleAuthorizationStatusString>;
export type ResaleAuthorizationStatusString = "Draft" | "Active" | "Restricted";
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
}
export type ResourceARN = string;

export type ResourceId = string;

export type ResourceIdList = Array<string>;
export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotSupportedException extends EffectData.TaggedError(
  "ResourceNotSupportedException",
)<{
  readonly Message?: string;
}> {}
export type ResourcePolicyJson = string;

export interface SaaSProductEntityIdFilter {
  ValueList?: Array<string>;
}
export type SaaSProductEntityIdFilterValueList = Array<string>;
export type SaaSProductEntityIdString = string;

export interface SaaSProductFilters {
  EntityId?: SaaSProductEntityIdFilter;
  ProductTitle?: SaaSProductTitleFilter;
  Visibility?: SaaSProductVisibilityFilter;
  LastModifiedDate?: SaaSProductLastModifiedDateFilter;
}
export interface SaaSProductLastModifiedDateFilter {
  DateRange?: SaaSProductLastModifiedDateFilterDateRange;
}
export interface SaaSProductLastModifiedDateFilterDateRange {
  AfterValue?: string;
  BeforeValue?: string;
}
export interface SaaSProductSort {
  SortBy?: SaaSProductSortBy;
  SortOrder?: SortOrder;
}
export type SaaSProductSortBy =
  | "EntityId"
  | "ProductTitle"
  | "Visibility"
  | "LastModifiedDate";
export interface SaaSProductSummary {
  ProductTitle?: string;
  Visibility?: SaaSProductVisibilityString;
}
export interface SaaSProductTitleFilter {
  ValueList?: Array<string>;
  WildCardValue?: string;
}
export type SaaSProductTitleFilterValueList = Array<string>;
export type SaaSProductTitleString = string;

export interface SaaSProductVisibilityFilter {
  ValueList?: Array<SaaSProductVisibilityString>;
}
export type SaaSProductVisibilityFilterValueList =
  Array<SaaSProductVisibilityString>;
export type SaaSProductVisibilityString =
  | "Limited"
  | "Public"
  | "Restricted"
  | "Draft";
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Sort {
  SortBy?: string;
  SortOrder?: SortOrder;
}
export type SortBy = string;

export type SortOrder = "ASCENDING" | "DESCENDING";
export interface StartChangeSetRequest {
  Catalog: string;
  ChangeSet: Array<Change>;
  ChangeSetName?: string;
  ClientRequestToken?: string;
  ChangeSetTags?: Array<Tag>;
  Intent?: Intent;
}
export interface StartChangeSetResponse {
  ChangeSetId?: string;
  ChangeSetArn?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type ValueList = Array<string>;
export type VisibilityValue = string;

export declare namespace BatchDescribeEntities {
  export type Input = BatchDescribeEntitiesRequest;
  export type Output = BatchDescribeEntitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CancelChangeSet {
  export type Input = CancelChangeSetRequest;
  export type Output = CancelChangeSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeChangeSet {
  export type Input = DescribeChangeSetRequest;
  export type Output = DescribeChangeSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeEntity {
  export type Input = DescribeEntityRequest;
  export type Output = DescribeEntityResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ResourceNotSupportedException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListChangeSets {
  export type Input = ListChangeSetsRequest;
  export type Output = ListChangeSetsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEntities {
  export type Input = ListEntitiesRequest;
  export type Output = ListEntitiesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartChangeSet {
  export type Input = StartChangeSetRequest;
  export type Output = StartChangeSetResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
