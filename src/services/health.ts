import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSHealth_20160804 {
  describeAffectedAccountsForOrganization(
    input: DescribeAffectedAccountsForOrganizationRequest,
  ): Effect.Effect<
    DescribeAffectedAccountsForOrganizationResponse,
    InvalidPaginationToken | CommonAwsError
  >;
  describeAffectedEntities(
    input: DescribeAffectedEntitiesRequest,
  ): Effect.Effect<
    DescribeAffectedEntitiesResponse,
    InvalidPaginationToken | UnsupportedLocale | CommonAwsError
  >;
  describeAffectedEntitiesForOrganization(
    input: DescribeAffectedEntitiesForOrganizationRequest,
  ): Effect.Effect<
    DescribeAffectedEntitiesForOrganizationResponse,
    InvalidPaginationToken | UnsupportedLocale | CommonAwsError
  >;
  describeEntityAggregates(
    input: DescribeEntityAggregatesRequest,
  ): Effect.Effect<
    DescribeEntityAggregatesResponse,
    CommonAwsError
  >;
  describeEntityAggregatesForOrganization(
    input: DescribeEntityAggregatesForOrganizationRequest,
  ): Effect.Effect<
    DescribeEntityAggregatesForOrganizationResponse,
    CommonAwsError
  >;
  describeEventAggregates(
    input: DescribeEventAggregatesRequest,
  ): Effect.Effect<
    DescribeEventAggregatesResponse,
    InvalidPaginationToken | CommonAwsError
  >;
  describeEventDetails(
    input: DescribeEventDetailsRequest,
  ): Effect.Effect<
    DescribeEventDetailsResponse,
    UnsupportedLocale | CommonAwsError
  >;
  describeEventDetailsForOrganization(
    input: DescribeEventDetailsForOrganizationRequest,
  ): Effect.Effect<
    DescribeEventDetailsForOrganizationResponse,
    UnsupportedLocale | CommonAwsError
  >;
  describeEventTypes(
    input: DescribeEventTypesRequest,
  ): Effect.Effect<
    DescribeEventTypesResponse,
    InvalidPaginationToken | UnsupportedLocale | CommonAwsError
  >;
  describeEvents(
    input: DescribeEventsRequest,
  ): Effect.Effect<
    DescribeEventsResponse,
    InvalidPaginationToken | UnsupportedLocale | CommonAwsError
  >;
  describeEventsForOrganization(
    input: DescribeEventsForOrganizationRequest,
  ): Effect.Effect<
    DescribeEventsForOrganizationResponse,
    InvalidPaginationToken | UnsupportedLocale | CommonAwsError
  >;
  describeHealthServiceStatusForOrganization(
    input: {},
  ): Effect.Effect<
    DescribeHealthServiceStatusForOrganizationResponse,
    CommonAwsError
  >;
  disableHealthServiceAccessForOrganization(
    input: {},
  ): Effect.Effect<
    {},
    ConcurrentModificationException | CommonAwsError
  >;
  enableHealthServiceAccessForOrganization(
    input: {},
  ): Effect.Effect<
    {},
    ConcurrentModificationException | CommonAwsError
  >;
}

export type Health = AWSHealth_20160804;

export interface AccountEntityAggregate {
  accountId?: string;
  count?: number;
  statuses?: Record<entityStatusCode, number>;
}
export type AccountEntityAggregatesList = Array<AccountEntityAggregate>;
export type accountId = string;

export type affectedAccountsList = Array<string>;
export interface AffectedEntity {
  entityArn?: string;
  eventArn?: string;
  entityValue?: string;
  entityUrl?: string;
  awsAccountId?: string;
  lastUpdatedTime?: Date | string;
  statusCode?: entityStatusCode;
  tags?: Record<string, string>;
  entityMetadata?: Record<string, string>;
}
export type aggregateValue = string;

export type availabilityZone = string;

export type availabilityZones = Array<string>;
export type awsAccountIdsList = Array<string>;
export declare class ConcurrentModificationException extends Data.TaggedError(
  "ConcurrentModificationException",
)<{
  readonly message?: string;
}> {}
export type count = number;

export interface DateTimeRange {
  from?: Date | string;
  to?: Date | string;
}
export type dateTimeRangeList = Array<DateTimeRange>;
export interface DescribeAffectedAccountsForOrganizationRequest {
  eventArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeAffectedAccountsForOrganizationResponse {
  affectedAccounts?: Array<string>;
  eventScopeCode?: eventScopeCode;
  nextToken?: string;
}
export type DescribeAffectedEntitiesForOrganizationFailedSet = Array<OrganizationAffectedEntitiesErrorItem>;
export interface DescribeAffectedEntitiesForOrganizationRequest {
  organizationEntityFilters?: Array<EventAccountFilter>;
  locale?: string;
  nextToken?: string;
  maxResults?: number;
  organizationEntityAccountFilters?: Array<EntityAccountFilter>;
}
export interface DescribeAffectedEntitiesForOrganizationResponse {
  entities?: Array<AffectedEntity>;
  failedSet?: Array<OrganizationAffectedEntitiesErrorItem>;
  nextToken?: string;
}
export interface DescribeAffectedEntitiesRequest {
  filter: EntityFilter;
  locale?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeAffectedEntitiesResponse {
  entities?: Array<AffectedEntity>;
  nextToken?: string;
}
export interface DescribeEntityAggregatesForOrganizationRequest {
  eventArns: Array<string>;
  awsAccountIds?: Array<string>;
}
export interface DescribeEntityAggregatesForOrganizationResponse {
  organizationEntityAggregates?: Array<OrganizationEntityAggregate>;
}
export interface DescribeEntityAggregatesRequest {
  eventArns?: Array<string>;
}
export interface DescribeEntityAggregatesResponse {
  entityAggregates?: Array<EntityAggregate>;
}
export interface DescribeEventAggregatesRequest {
  filter?: EventFilter;
  aggregateField: eventAggregateField;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeEventAggregatesResponse {
  eventAggregates?: Array<EventAggregate>;
  nextToken?: string;
}
export type DescribeEventDetailsFailedSet = Array<EventDetailsErrorItem>;
export type DescribeEventDetailsForOrganizationFailedSet = Array<OrganizationEventDetailsErrorItem>;
export interface DescribeEventDetailsForOrganizationRequest {
  organizationEventDetailFilters: Array<EventAccountFilter>;
  locale?: string;
}
export interface DescribeEventDetailsForOrganizationResponse {
  successfulSet?: Array<OrganizationEventDetails>;
  failedSet?: Array<OrganizationEventDetailsErrorItem>;
}
export type DescribeEventDetailsForOrganizationSuccessfulSet = Array<OrganizationEventDetails>;
export interface DescribeEventDetailsRequest {
  eventArns: Array<string>;
  locale?: string;
}
export interface DescribeEventDetailsResponse {
  successfulSet?: Array<EventDetails>;
  failedSet?: Array<EventDetailsErrorItem>;
}
export type DescribeEventDetailsSuccessfulSet = Array<EventDetails>;
export interface DescribeEventsForOrganizationRequest {
  filter?: OrganizationEventFilter;
  nextToken?: string;
  maxResults?: number;
  locale?: string;
}
export interface DescribeEventsForOrganizationResponse {
  events?: Array<OrganizationEvent>;
  nextToken?: string;
}
export interface DescribeEventsRequest {
  filter?: EventFilter;
  nextToken?: string;
  maxResults?: number;
  locale?: string;
}
export interface DescribeEventsResponse {
  events?: Array<Event>;
  nextToken?: string;
}
export interface DescribeEventTypesRequest {
  filter?: EventTypeFilter;
  locale?: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DescribeEventTypesResponse {
  eventTypes?: Array<EventType>;
  nextToken?: string;
}
export interface DescribeHealthServiceStatusForOrganizationResponse {
  healthServiceAccessStatusForOrganization?: string;
}
export interface EntityAccountFilter {
  eventArn: string;
  awsAccountId?: string;
  statusCodes?: Array<entityStatusCode>;
}
export interface EntityAggregate {
  eventArn?: string;
  count?: number;
  statuses?: Record<entityStatusCode, number>;
}
export type EntityAggregateList = Array<EntityAggregate>;
export type entityArn = string;

export type entityArnList = Array<string>;
export interface EntityFilter {
  eventArns: Array<string>;
  entityArns?: Array<string>;
  entityValues?: Array<string>;
  lastUpdatedTimes?: Array<DateTimeRange>;
  tags?: Array<Record<string, string>>;
  statusCodes?: Array<entityStatusCode>;
}
export type EntityList = Array<AffectedEntity>;
export type entityMetadata = Record<string, string>;
export type entityMetadataKey = string;

export type entityMetadataValue = string;

export type entityStatusCode = "IMPAIRED" | "UNIMPAIRED" | "UNKNOWN" | "PENDING" | "RESOLVED";
export type entityStatusCodeList = Array<entityStatusCode>;
export type entityStatuses = Record<entityStatusCode, number>;
export type entityUrl = string;

export type entityValue = string;

export type entityValueList = Array<string>;
export interface Event {
  arn?: string;
  service?: string;
  eventTypeCode?: string;
  eventTypeCategory?: eventTypeCategory;
  region?: string;
  availabilityZone?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  lastUpdatedTime?: Date | string;
  statusCode?: eventStatusCode;
  eventScopeCode?: eventScopeCode;
}
export interface EventAccountFilter {
  eventArn: string;
  awsAccountId?: string;
}
export interface EventAggregate {
  aggregateValue?: string;
  count?: number;
}
export type eventAggregateField = "EventTypeCategory";
export type EventAggregateList = Array<EventAggregate>;
export type eventArn = string;

export type eventArnList = Array<string>;
export type EventArnsList = Array<string>;
export interface EventDescription {
  latestDescription?: string;
}
export type EventDescription2 = string;

export interface EventDetails {
  event?: Event;
  eventDescription?: EventDescription;
  eventMetadata?: Record<string, string>;
}
export interface EventDetailsErrorItem {
  eventArn?: string;
  errorName?: string;
  errorMessage?: string;
}
export interface EventFilter {
  eventArns?: Array<string>;
  eventTypeCodes?: Array<string>;
  services?: Array<string>;
  regions?: Array<string>;
  availabilityZones?: Array<string>;
  startTimes?: Array<DateTimeRange>;
  endTimes?: Array<DateTimeRange>;
  lastUpdatedTimes?: Array<DateTimeRange>;
  entityArns?: Array<string>;
  entityValues?: Array<string>;
  eventTypeCategories?: Array<eventTypeCategory>;
  tags?: Array<Record<string, string>>;
  eventStatusCodes?: Array<eventStatusCode>;
}
export type EventList = Array<Event>;
export type eventMetadata = Record<string, string>;
export type eventScopeCode = "PUBLIC" | "ACCOUNT_SPECIFIC" | "NONE";
export type eventStatusCode = "OPEN" | "CLOSED" | "UPCOMING";
export type eventStatusCodeList = Array<eventStatusCode>;
export interface EventType {
  service?: string;
  code?: string;
  category?: eventTypeCategory;
}
export type EventType2 = string;

export type eventTypeCategory = "ISSUE" | "ACCOUNT_NOTIFICATION" | "SCHEDULED_CHANGE" | "INVESTIGATION";
export type EventTypeCategoryList = Array<eventTypeCategory>;
export type eventTypeCategoryList2 = Array<eventTypeCategory>;
export type eventTypeCode = string;

export type EventTypeCodeList = Array<string>;
export interface EventTypeFilter {
  eventTypeCodes?: Array<string>;
  services?: Array<string>;
  eventTypeCategories?: Array<eventTypeCategory>;
}
export type EventTypeList = Array<EventType>;
export type eventTypeList2 = Array<string>;
export type healthServiceAccessStatusForOrganization = string;

export declare class InvalidPaginationToken extends Data.TaggedError(
  "InvalidPaginationToken",
)<{
  readonly message?: string;
}> {}
export type locale = string;

export type maxResults = number;

export type maxResultsLowerRange = number;

export type metadataKey = string;

export type metadataValue = string;

export type nextToken = string;

export type OrganizationAccountIdsList = Array<string>;
export interface OrganizationAffectedEntitiesErrorItem {
  awsAccountId?: string;
  eventArn?: string;
  errorName?: string;
  errorMessage?: string;
}
export type OrganizationEntityAccountFiltersList = Array<EntityAccountFilter>;
export interface OrganizationEntityAggregate {
  eventArn?: string;
  count?: number;
  statuses?: Record<entityStatusCode, number>;
  accounts?: Array<AccountEntityAggregate>;
}
export type OrganizationEntityAggregatesList = Array<OrganizationEntityAggregate>;
export type OrganizationEntityFiltersList = Array<EventAccountFilter>;
export interface OrganizationEvent {
  arn?: string;
  service?: string;
  eventTypeCode?: string;
  eventTypeCategory?: eventTypeCategory;
  eventScopeCode?: eventScopeCode;
  region?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  lastUpdatedTime?: Date | string;
  statusCode?: eventStatusCode;
}
export type OrganizationEventArnsList = Array<string>;
export type OrganizationEventDetailFiltersList = Array<EventAccountFilter>;
export interface OrganizationEventDetails {
  awsAccountId?: string;
  event?: Event;
  eventDescription?: EventDescription;
  eventMetadata?: Record<string, string>;
}
export interface OrganizationEventDetailsErrorItem {
  awsAccountId?: string;
  eventArn?: string;
  errorName?: string;
  errorMessage?: string;
}
export interface OrganizationEventFilter {
  eventTypeCodes?: Array<string>;
  awsAccountIds?: Array<string>;
  services?: Array<string>;
  regions?: Array<string>;
  startTime?: DateTimeRange;
  endTime?: DateTimeRange;
  lastUpdatedTime?: DateTimeRange;
  entityArns?: Array<string>;
  entityValues?: Array<string>;
  eventTypeCategories?: Array<eventTypeCategory>;
  eventStatusCodes?: Array<eventStatusCode>;
}
export type OrganizationEventList = Array<OrganizationEvent>;
export type region = string;

export type regionList = Array<string>;
export type service = string;

export type serviceList = Array<string>;
export type string = string;

export type tagFilter = Array<Record<string, string>>;
export type tagKey = string;

export type tagSet = Record<string, string>;
export type tagValue = string;

export type timestamp = Date | string;

export declare class UnsupportedLocale extends Data.TaggedError(
  "UnsupportedLocale",
)<{
  readonly message?: string;
}> {}
export declare namespace DescribeAffectedAccountsForOrganization {
  export type Input = DescribeAffectedAccountsForOrganizationRequest;
  export type Output = DescribeAffectedAccountsForOrganizationResponse;
  export type Error =
    | InvalidPaginationToken
    | CommonAwsError;
}

export declare namespace DescribeAffectedEntities {
  export type Input = DescribeAffectedEntitiesRequest;
  export type Output = DescribeAffectedEntitiesResponse;
  export type Error =
    | InvalidPaginationToken
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeAffectedEntitiesForOrganization {
  export type Input = DescribeAffectedEntitiesForOrganizationRequest;
  export type Output = DescribeAffectedEntitiesForOrganizationResponse;
  export type Error =
    | InvalidPaginationToken
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeEntityAggregates {
  export type Input = DescribeEntityAggregatesRequest;
  export type Output = DescribeEntityAggregatesResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeEntityAggregatesForOrganization {
  export type Input = DescribeEntityAggregatesForOrganizationRequest;
  export type Output = DescribeEntityAggregatesForOrganizationResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DescribeEventAggregates {
  export type Input = DescribeEventAggregatesRequest;
  export type Output = DescribeEventAggregatesResponse;
  export type Error =
    | InvalidPaginationToken
    | CommonAwsError;
}

export declare namespace DescribeEventDetails {
  export type Input = DescribeEventDetailsRequest;
  export type Output = DescribeEventDetailsResponse;
  export type Error =
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeEventDetailsForOrganization {
  export type Input = DescribeEventDetailsForOrganizationRequest;
  export type Output = DescribeEventDetailsForOrganizationResponse;
  export type Error =
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeEventTypes {
  export type Input = DescribeEventTypesRequest;
  export type Output = DescribeEventTypesResponse;
  export type Error =
    | InvalidPaginationToken
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeEvents {
  export type Input = DescribeEventsRequest;
  export type Output = DescribeEventsResponse;
  export type Error =
    | InvalidPaginationToken
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeEventsForOrganization {
  export type Input = DescribeEventsForOrganizationRequest;
  export type Output = DescribeEventsForOrganizationResponse;
  export type Error =
    | InvalidPaginationToken
    | UnsupportedLocale
    | CommonAwsError;
}

export declare namespace DescribeHealthServiceStatusForOrganization {
  export type Input = {};
  export type Output = DescribeHealthServiceStatusForOrganizationResponse;
  export type Error =
    | CommonAwsError;
}

export declare namespace DisableHealthServiceAccessForOrganization {
  export type Input = {};
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | CommonAwsError;
}

export declare namespace EnableHealthServiceAccessForOrganization {
  export type Input = {};
  export type Output = {};
  export type Error =
    | ConcurrentModificationException
    | CommonAwsError;
}

