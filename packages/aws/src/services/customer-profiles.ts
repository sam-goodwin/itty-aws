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
  sdkId: "Customer Profiles",
  serviceShapeName: "CustomerProfiles_20200815",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "profile" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-08-15");
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
              `https://profile-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://profile-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://profile.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://profile.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export type Uuid = string;
export type Name = string;
export type String1To255 = string;
export type RequestValueList = string[];
const RequestValueList = /*@__PURE__*/ __L.at(__c0, 0);
export interface AddProfileKeyRequest {
  ProfileId: string;
  KeyName: string;
  Values: string[];
  DomainName: string;
}
const AddProfileKeyRequest = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<AddProfileKeyRequest>;
export interface AddProfileKeyResponse {
  KeyName?: string;
  Values?: string[];
}
const AddProfileKeyResponse = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AddProfileKeyResponse>;
export type DestinationArnString = string;
export type DestinationRoleArn = string;
export interface AssociateStreamForSegmentsRequest {
  DomainName: string;
  DestinationArn: string;
  DestinationRoleArn: string;
}
const AssociateStreamForSegmentsRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AssociateStreamForSegmentsRequest>;
export interface AssociateStreamForSegmentsResponse {}
const AssociateStreamForSegmentsResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateStreamForSegmentsResponse>;
export type TypeName = string;
export type BatchGetCalculatedAttributeForProfileIdList = string[];
const BatchGetCalculatedAttributeForProfileIdList =
  RequestValueList as any as S.Schema<BatchGetCalculatedAttributeForProfileIdList>;
export type Start = number;
export type End = number;
export type RangeUnit = "DAYS" | (string & {});
const RangeUnit = S.String;

export interface RangeOverride {
  Start: number;
  End?: number;
  Unit: RangeUnit;
}
const RangeOverride = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<RangeOverride>;
export interface ConditionOverrides {
  Range?: RangeOverride;
}
const ConditionOverrides = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<ConditionOverrides>;
export interface BatchGetCalculatedAttributeForProfileRequest {
  CalculatedAttributeName: string;
  DomainName: string;
  ProfileIds: string[];
  ConditionOverrides?: ConditionOverrides;
}
const BatchGetCalculatedAttributeForProfileRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchGetCalculatedAttributeForProfileRequest>;
export type String1To1000 = string;
export interface BatchGetCalculatedAttributeForProfileError_ {
  Code: string;
  Message: string;
  ProfileId: string;
}
const BatchGetCalculatedAttributeForProfileError_ = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchGetCalculatedAttributeForProfileError_>;
export type BatchGetCalculatedAttributeForProfileErrorList =
  BatchGetCalculatedAttributeForProfileError_[];
const BatchGetCalculatedAttributeForProfileErrorList = /*@__PURE__*/ __L.at(__c1, 1);
export type DisplayName = string;
export interface CalculatedAttributeValue {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  ProfileId?: string;
  Value?: string;
  LastObjectTimestamp?: Date;
}
const CalculatedAttributeValue = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CalculatedAttributeValue>;
export type CalculatedAttributeValueList = CalculatedAttributeValue[];
const CalculatedAttributeValueList = /*@__PURE__*/ __L.at(__c1, 3);
export interface BatchGetCalculatedAttributeForProfileResponse {
  Errors?: BatchGetCalculatedAttributeForProfileError_[];
  CalculatedAttributeValues?: CalculatedAttributeValue[];
  ConditionOverrides?: ConditionOverrides;
}
const BatchGetCalculatedAttributeForProfileResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchGetCalculatedAttributeForProfileResponse>;
export type BatchGetProfileIdList = string[];
const BatchGetProfileIdList = RequestValueList as any as S.Schema<BatchGetProfileIdList>;
export interface BatchGetProfileRequest {
  DomainName: string;
  ProfileIds: string[];
}
const BatchGetProfileRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<BatchGetProfileRequest>;
export interface BatchGetProfileError_ {
  Code: string;
  Message: string;
  ProfileId: string;
}
const BatchGetProfileError_ = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<BatchGetProfileError_>;
export type BatchGetProfileErrorList = BatchGetProfileError_[];
const BatchGetProfileErrorList = /*@__PURE__*/ __L.at(__c1, 7);
export type SensitiveString1To255 = string | redacted.Redacted<string>;
export type SensitiveString1To1000 = string | redacted.Redacted<string>;
export type PartyType = "INDIVIDUAL" | "BUSINESS" | "OTHER" | (string & {});
const PartyType = S.String;

export type Gender = "MALE" | "FEMALE" | "UNSPECIFIED" | (string & {});
const Gender = S.String;

export interface Address {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  City?: string;
  County?: string;
  State?: string;
  Province?: string;
  Country?: string;
  PostalCode?: string;
}
const Address = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<Address>;
export type Attributes = { [key: string]: string | undefined };
const Attributes = /*@__PURE__*/ __L.at(__c2, 1);
export interface FoundByKeyValue {
  KeyName?: string;
  Values?: string[];
}
const FoundByKeyValue = AddProfileKeyResponse as any as S.Schema<FoundByKeyValue>;
export type FoundByList = FoundByKeyValue[];
const FoundByList = /*@__PURE__*/ __L.at(__c2, 2);
export type ProfileType = "ACCOUNT_PROFILE" | "PROFILE" | (string & {});
const ProfileType = S.String;

export type ContactType =
  | "PhoneNumber"
  | "MobilePhoneNumber"
  | "HomePhoneNumber"
  | "BusinessPhoneNumber"
  | "EmailAddress"
  | "PersonalEmailAddress"
  | "BusinessEmailAddress"
  | (string & {});
const ContactType = S.String;

export interface ContactPreference {
  KeyName?: string;
  KeyValue?: string;
  ProfileId?: string;
  ContactType?: ContactType;
}
const ContactPreference = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<ContactPreference>;
export type PhonePreferenceList = ContactPreference[];
const PhonePreferenceList = /*@__PURE__*/ __L.at(__c2, 4);
export type EmailPreferenceList = ContactPreference[];
const EmailPreferenceList = PhonePreferenceList as any as S.Schema<EmailPreferenceList>;
export interface EngagementPreferences {
  Phone?: ContactPreference[];
  Email?: ContactPreference[];
}
const EngagementPreferences = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<EngagementPreferences>;
export interface Profile {
  ProfileId?: string;
  AccountNumber?: string | redacted.Redacted<string>;
  AdditionalInformation?: string | redacted.Redacted<string>;
  PartyType?: PartyType;
  BusinessName?: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  MiddleName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BirthDate?: string | redacted.Redacted<string>;
  Gender?: Gender;
  PhoneNumber?: string | redacted.Redacted<string>;
  MobilePhoneNumber?: string | redacted.Redacted<string>;
  HomePhoneNumber?: string | redacted.Redacted<string>;
  BusinessPhoneNumber?: string | redacted.Redacted<string>;
  EmailAddress?: string | redacted.Redacted<string>;
  PersonalEmailAddress?: string | redacted.Redacted<string>;
  BusinessEmailAddress?: string | redacted.Redacted<string>;
  Address?: Address;
  ShippingAddress?: Address;
  MailingAddress?: Address;
  BillingAddress?: Address;
  Attributes?: { [key: string]: string | undefined };
  FoundByItems?: FoundByKeyValue[];
  PartyTypeString?: string | redacted.Redacted<string>;
  GenderString?: string | redacted.Redacted<string>;
  ProfileType?: ProfileType;
  EngagementPreferences?: EngagementPreferences;
}
const Profile = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<Profile>;
export type ProfileList = Profile[];
const ProfileList = /*@__PURE__*/ __L.at(__c2, 7);
export interface BatchGetProfileResponse {
  Errors?: BatchGetProfileError_[];
  Profiles?: Profile[];
}
const BatchGetProfileResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<BatchGetProfileResponse>;
export type StringifiedJson = string | redacted.Redacted<string>;
export interface BatchPutProfileObjectRequestItem {
  Id: string;
  Object: string | redacted.Redacted<string>;
}
const BatchPutProfileObjectRequestItem = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<BatchPutProfileObjectRequestItem>;
export type BatchPutProfileObjectRequestItemList = BatchPutProfileObjectRequestItem[];
const BatchPutProfileObjectRequestItemList = /*@__PURE__*/ __L.at(__c3, 2);
export interface BatchPutProfileObjectRequest {
  DomainName: string;
  ObjectTypeName: string;
  Items: BatchPutProfileObjectRequestItem[];
}
const BatchPutProfileObjectRequest = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<BatchPutProfileObjectRequest>;
export interface BatchPutProfileObjectResponseItem {
  Id: string;
  ProfileObjectUniqueKey: string;
}
const BatchPutProfileObjectResponseItem = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<BatchPutProfileObjectResponseItem>;
export type BatchPutProfileObjectResponseList = BatchPutProfileObjectResponseItem[];
const BatchPutProfileObjectResponseList = /*@__PURE__*/ __L.at(__c3, 5);
export type ResponseCode = number;
export type Text = string;
export interface BatchPutProfileObjectErrorItem {
  Id: string;
  Code: number;
  Message?: string;
}
const BatchPutProfileObjectErrorItem = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<BatchPutProfileObjectErrorItem>;
export type BatchPutProfileObjectErrorList = BatchPutProfileObjectErrorItem[];
const BatchPutProfileObjectErrorList = /*@__PURE__*/ __L.at(__c3, 7);
export interface BatchPutProfileObjectResponse {
  Successful?: BatchPutProfileObjectResponseItem[];
  Failed?: BatchPutProfileObjectErrorItem[];
}
const BatchPutProfileObjectResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<BatchPutProfileObjectResponse>;
export type SensitiveText = string | redacted.Redacted<string>;
export type AttributeName = string;
export interface AttributeItem {
  Name: string;
}
const AttributeItem = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<AttributeItem>;
export type AttributeList = AttributeItem[];
const AttributeList = /*@__PURE__*/ __L.at(__c4, 2);
export interface AttributeDetails {
  Attributes: AttributeItem[];
  Expression: string;
}
const AttributeDetails = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<AttributeDetails>;
export type Value = number;
export type Unit = "DAYS" | (string & {});
const Unit = S.String;

export type ValueRangeStart = number;
export type ValueRangeEnd = number;
export interface ValueRange {
  Start: number;
  End: number;
}
const ValueRange = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<ValueRange>;
export interface Range {
  Value?: number;
  Unit?: Unit;
  ValueRange?: ValueRange;
  TimestampSource?: string;
  TimestampFormat?: string;
}
const Range = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<Range>;
export type ObjectCount = number;
export type Operator = "EQUAL_TO" | "GREATER_THAN" | "LESS_THAN" | "NOT_EQUAL_TO" | (string & {});
const Operator = S.String;

export interface Threshold {
  Value: string;
  Operator: Operator;
}
const Threshold = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<Threshold>;
export interface Conditions {
  Range?: Range;
  ObjectCount?: number;
  Threshold?: Threshold;
}
const Conditions = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<Conditions>;
export type Include = "ALL" | "ANY" | "NONE" | (string & {});
const Include = S.String;

export type Type = "ALL" | "ANY" | "NONE" | (string & {});
const Type = S.String;

export type FilterDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL"
  | (string & {});
const FilterDimensionType = S.String;

export type ValueList = string[];
const ValueList = RequestValueList as any as S.Schema<ValueList>;
export interface FilterAttributeDimension {
  DimensionType: FilterDimensionType;
  Values: string[];
}
const FilterAttributeDimension = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<FilterAttributeDimension>;
export type AttributeMap = { [key: string]: FilterAttributeDimension | undefined };
const AttributeMap = /*@__PURE__*/ __L.at(__c5, 1);
export interface FilterDimension {
  Attributes: { [key: string]: FilterAttributeDimension | undefined };
}
const FilterDimension = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<FilterDimension>;
export type FilterDimensionList = FilterDimension[];
const FilterDimensionList = /*@__PURE__*/ __L.at(__c5, 3);
export interface FilterGroup {
  Type: Type;
  Dimensions: FilterDimension[];
}
const FilterGroup = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<FilterGroup>;
export type GroupList = FilterGroup[];
const GroupList = /*@__PURE__*/ __L.at(__c5, 5);
export interface Filter {
  Include: Include;
  Groups: FilterGroup[];
}
const Filter = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<Filter>;
export type Statistic =
  | "FIRST_OCCURRENCE"
  | "LAST_OCCURRENCE"
  | "COUNT"
  | "SUM"
  | "MINIMUM"
  | "MAXIMUM"
  | "AVERAGE"
  | "MAX_OCCURRENCE"
  | "RECENT_OCCURRENCES"
  | (string & {});
const Statistic = S.String;

export type OptionalBoolean = boolean;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = Attributes as any as S.Schema<TagMap>;
export interface CreateCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  AttributeDetails: AttributeDetails;
  Conditions?: Conditions;
  Filter?: Filter;
  Statistic: Statistic;
  UseHistoricalData?: boolean;
  Tags?: { [key: string]: string | undefined };
}
const CreateCalculatedAttributeDefinitionRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateCalculatedAttributeDefinitionRequest>;
export type ReadinessStatus = "PREPARING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | (string & {});
const ReadinessStatus = S.String;

export type PercentageInteger = number;
export interface Readiness {
  ProgressPercentage?: number;
  Message?: string;
}
const Readiness = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<Readiness>;
export interface CreateCalculatedAttributeDefinitionResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  AttributeDetails?: AttributeDetails;
  Conditions?: Conditions;
  Filter?: Filter;
  Statistic?: Statistic;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Readiness?: Readiness;
  Tags?: { [key: string]: string | undefined };
}
const CreateCalculatedAttributeDefinitionResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<CreateCalculatedAttributeDefinitionResponse>;
export type ExpirationDaysInteger = number;
export type EncryptionKey = string;
export type SqsQueueUrl = string;
export type JobScheduleDayOfTheWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | (string & {});
const JobScheduleDayOfTheWeek = S.String;

export type JobScheduleTime = string;
export interface JobSchedule {
  DayOfTheWeek: JobScheduleDayOfTheWeek;
  Time: string;
}
const JobSchedule = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<JobSchedule>;
export type MatchingAttributes = string[];
const MatchingAttributes = RequestValueList as any as S.Schema<MatchingAttributes>;
export type MatchingAttributesList = string[][];
const MatchingAttributesList = /*@__PURE__*/ __L.at(__c6, 3);
export interface Consolidation {
  MatchingAttributesList: string[][];
}
const Consolidation = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<Consolidation>;
export type ConflictResolvingModel = "RECENCY" | "SOURCE" | (string & {});
const ConflictResolvingModel = S.String;

export interface ConflictResolution {
  ConflictResolvingModel: ConflictResolvingModel;
  SourceName?: string;
}
const ConflictResolution = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<ConflictResolution>;
export type Double0To1 = number;
export interface AutoMerging {
  Enabled: boolean;
  Consolidation?: Consolidation;
  ConflictResolution?: ConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
}
const AutoMerging = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<AutoMerging>;
export type S3BucketName = string;
export type S3KeyNameCustomerOutputConfig = string;
export interface S3ExportingConfig {
  S3BucketName: string;
  S3KeyName?: string;
}
const S3ExportingConfig = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<S3ExportingConfig>;
export interface ExportingConfig {
  S3Exporting?: S3ExportingConfig;
}
const ExportingConfig = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<ExportingConfig>;
export interface MatchingRequest {
  Enabled: boolean;
  JobSchedule?: JobSchedule;
  AutoMerging?: AutoMerging;
  ExportingConfig?: ExportingConfig;
}
const MatchingRequest = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<MatchingRequest>;
export type MatchingRuleAttributeList = string[];
const MatchingRuleAttributeList = RequestValueList as any as S.Schema<MatchingRuleAttributeList>;
export interface MatchingRule {
  Rule: string[];
}
const MatchingRule = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<MatchingRule>;
export type MatchingRules = MatchingRule[];
const MatchingRules = /*@__PURE__*/ __L.at(__c7, 3);
export type MaxAllowedRuleLevelForMerging = number;
export type MaxAllowedRuleLevelForMatching = number;
export type AttributeMatchingModel = "ONE_TO_ONE" | "MANY_TO_MANY" | (string & {});
const AttributeMatchingModel = S.String;

export type AddressList = string[];
const AddressList = RequestValueList as any as S.Schema<AddressList>;
export type PhoneNumberList = string[];
const PhoneNumberList = RequestValueList as any as S.Schema<PhoneNumberList>;
export type EmailList = string[];
const EmailList = RequestValueList as any as S.Schema<EmailList>;
export interface AttributeTypesSelector {
  AttributeMatchingModel: AttributeMatchingModel;
  Address?: string[];
  PhoneNumber?: string[];
  EmailAddress?: string[];
}
const AttributeTypesSelector = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<AttributeTypesSelector>;
export interface RuleBasedMatchingRequest {
  Enabled: boolean;
  MatchingRules?: MatchingRule[];
  MaxAllowedRuleLevelForMerging?: number;
  MaxAllowedRuleLevelForMatching?: number;
  AttributeTypesSelector?: AttributeTypesSelector;
  ConflictResolution?: ConflictResolution;
  ExportingConfig?: ExportingConfig;
}
const RuleBasedMatchingRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<RuleBasedMatchingRequest>;
export interface DataStoreRequest {
  Enabled?: boolean;
}
const DataStoreRequest = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<DataStoreRequest>;
export interface CreateDomainRequest {
  DomainName: string;
  DefaultExpirationDays: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingRequest;
  RuleBasedMatching?: RuleBasedMatchingRequest;
  DataStore?: DataStoreRequest;
  Tags?: { [key: string]: string | undefined };
}
const CreateDomainRequest = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<CreateDomainRequest>;
export interface MatchingResponse {
  Enabled?: boolean;
  JobSchedule?: JobSchedule;
  AutoMerging?: AutoMerging;
  ExportingConfig?: ExportingConfig;
}
const MatchingResponse = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<MatchingResponse>;
export type RuleBasedMatchingStatus = "PENDING" | "IN_PROGRESS" | "ACTIVE" | (string & {});
const RuleBasedMatchingStatus = S.String;

export interface RuleBasedMatchingResponse {
  Enabled?: boolean;
  MatchingRules?: MatchingRule[];
  Status?: RuleBasedMatchingStatus;
  MaxAllowedRuleLevelForMerging?: number;
  MaxAllowedRuleLevelForMatching?: number;
  AttributeTypesSelector?: AttributeTypesSelector;
  ConflictResolution?: ConflictResolution;
  ExportingConfig?: ExportingConfig;
}
const RuleBasedMatchingResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<RuleBasedMatchingResponse>;
export interface DataStoreResponse {
  Enabled?: boolean;
  Readiness?: Readiness;
}
const DataStoreResponse = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<DataStoreResponse>;
export interface CreateDomainResponse {
  DomainName: string;
  DefaultExpirationDays: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingResponse;
  RuleBasedMatching?: RuleBasedMatchingResponse;
  DataStore?: DataStoreResponse;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
}
const CreateDomainResponse = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<CreateDomainResponse>;
export type LayoutType = "PROFILE_EXPLORER" | (string & {});
const LayoutType = S.String;

export type SensitiveString1To2000000 = string | redacted.Redacted<string>;
export interface CreateDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
  Description: string | redacted.Redacted<string>;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Layout: string | redacted.Redacted<string>;
  Tags?: { [key: string]: string | undefined };
}
const CreateDomainLayoutRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<CreateDomainLayoutRequest>;
export interface CreateDomainLayoutResponse {
  LayoutDefinitionName: string;
  Description: string | redacted.Redacted<string>;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Layout: string | redacted.Redacted<string>;
  Version: string;
  Tags?: { [key: string]: string | undefined };
  CreatedAt: Date;
  LastUpdatedAt?: Date;
}
const CreateDomainLayoutResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<CreateDomainLayoutResponse>;
export interface CreateEventStreamRequest {
  DomainName: string;
  Uri: string;
  EventStreamName: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateEventStreamRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<CreateEventStreamRequest>;
export interface CreateEventStreamResponse {
  EventStreamArn: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateEventStreamResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<CreateEventStreamResponse>;
export type FieldName = string;
export type ComparisonOperator =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL"
  | "BEFORE"
  | "AFTER"
  | "ON"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | (string & {});
const ComparisonOperator = S.String;

export type EventTriggerValues = string[];
const EventTriggerValues = RequestValueList as any as S.Schema<EventTriggerValues>;
export interface ObjectAttribute {
  Source?: string;
  FieldName?: string;
  ComparisonOperator: ComparisonOperator;
  Values: string[];
}
const ObjectAttribute = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<ObjectAttribute>;
export type ObjectAttributes = ObjectAttribute[];
const ObjectAttributes = /*@__PURE__*/ __L.at(__c9, 1);
export interface EventTriggerDimension {
  ObjectAttributes: ObjectAttribute[];
}
const EventTriggerDimension = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<EventTriggerDimension>;
export type EventTriggerDimensions = EventTriggerDimension[];
const EventTriggerDimensions = /*@__PURE__*/ __L.at(__c9, 3);
export type EventTriggerLogicalOperator = "ANY" | "ALL" | "NONE" | (string & {});
const EventTriggerLogicalOperator = S.String;

export interface EventTriggerCondition {
  EventTriggerDimensions: EventTriggerDimension[];
  LogicalOperator: EventTriggerLogicalOperator;
}
const EventTriggerCondition = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<EventTriggerCondition>;
export type EventTriggerConditions = EventTriggerCondition[];
const EventTriggerConditions = /*@__PURE__*/ __L.at(__c9, 5);
export type OptionalLong = number;
export type PeriodUnit = "MINUTES" | "HOURS" | "DAYS" | "WEEKS" | "MONTHS" | (string & {});
const PeriodUnit = S.String;

export type MaxSize60 = number;
export type MaxSize1000 = number;
export interface Period {
  Unit: PeriodUnit;
  Value: number;
  MaxInvocationsPerProfile?: number;
  Unlimited?: boolean;
}
const Period = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<Period>;
export type Periods = Period[];
const Periods = /*@__PURE__*/ __L.at(__c9, 7);
export interface EventTriggerLimits {
  EventExpiration?: number;
  Periods?: Period[];
}
const EventTriggerLimits = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<EventTriggerLimits>;
export interface CreateEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
  ObjectTypeName: string;
  Description?: string | redacted.Redacted<string>;
  EventTriggerConditions: EventTriggerCondition[];
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  Tags?: { [key: string]: string | undefined };
}
const CreateEventTriggerRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<CreateEventTriggerRequest>;
export interface CreateEventTriggerResponse {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string | redacted.Redacted<string>;
  EventTriggerConditions?: EventTriggerCondition[];
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const CreateEventTriggerResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<CreateEventTriggerResponse>;
export type WorkflowType = "APPFLOW_INTEGRATION" | (string & {});
const WorkflowType = S.String;

export type FlowDescription = string;
export type FlowName = string;
export type KmsArn = string;
export type ConnectorProfileName = string;
export type SourceConnectorType =
  | "Salesforce"
  | "Marketo"
  | "Zendesk"
  | "Servicenow"
  | "S3"
  | (string & {});
const SourceConnectorType = S.String;

export type DatetimeTypeFieldName = string;
export interface IncrementalPullConfig {
  DatetimeTypeFieldName?: string;
}
const IncrementalPullConfig = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<IncrementalPullConfig>;
export interface MarketoSourceProperties {
  Object: string;
}
const MarketoSourceProperties = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<MarketoSourceProperties>;
export type BucketName = string;
export type BucketPrefix = string;
export interface S3SourceProperties {
  BucketName: string;
  BucketPrefix?: string;
}
const S3SourceProperties = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<S3SourceProperties>;
export interface SalesforceSourceProperties {
  Object: string;
  EnableDynamicFieldUpdate?: boolean;
  IncludeDeletedRecords?: boolean;
}
const SalesforceSourceProperties = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<SalesforceSourceProperties>;
export interface ServiceNowSourceProperties {
  Object: string;
}
const ServiceNowSourceProperties = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ServiceNowSourceProperties>;
export interface ZendeskSourceProperties {
  Object: string;
}
const ZendeskSourceProperties = MarketoSourceProperties as any as S.Schema<ZendeskSourceProperties>;
export interface SourceConnectorProperties {
  Marketo?: MarketoSourceProperties;
  S3?: S3SourceProperties;
  Salesforce?: SalesforceSourceProperties;
  ServiceNow?: ServiceNowSourceProperties;
  Zendesk?: ZendeskSourceProperties;
}
const SourceConnectorProperties = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<SourceConnectorProperties>;
export interface SourceFlowConfig {
  ConnectorProfileName?: string;
  ConnectorType: SourceConnectorType;
  IncrementalPullConfig?: IncrementalPullConfig;
  SourceConnectorProperties: SourceConnectorProperties;
}
const SourceFlowConfig = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<SourceFlowConfig>;
export type MarketoConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
const MarketoConnectorOperator = S.String;

export type S3ConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
const S3ConnectorOperator = S.String;

export type SalesforceConnectorOperator =
  | "PROJECTION"
  | "LESS_THAN"
  | "CONTAINS"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
const SalesforceConnectorOperator = S.String;

export type ServiceNowConnectorOperator =
  | "PROJECTION"
  | "CONTAINS"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "BETWEEN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "EQUAL_TO"
  | "NOT_EQUAL_TO"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
const ServiceNowConnectorOperator = S.String;

export type ZendeskConnectorOperator =
  | "PROJECTION"
  | "GREATER_THAN"
  | "ADDITION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SUBTRACTION"
  | "MASK_ALL"
  | "MASK_FIRST_N"
  | "MASK_LAST_N"
  | "VALIDATE_NON_NULL"
  | "VALIDATE_NON_ZERO"
  | "VALIDATE_NON_NEGATIVE"
  | "VALIDATE_NUMERIC"
  | "NO_OP"
  | (string & {});
const ZendeskConnectorOperator = S.String;

export interface ConnectorOperator {
  Marketo?: MarketoConnectorOperator;
  S3?: S3ConnectorOperator;
  Salesforce?: SalesforceConnectorOperator;
  ServiceNow?: ServiceNowConnectorOperator;
  Zendesk?: ZendeskConnectorOperator;
}
const ConnectorOperator = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<ConnectorOperator>;
export type DestinationField = string;
export type StringTo2048 = string;
export type SourceFields = string[];
const SourceFields = RequestValueList as any as S.Schema<SourceFields>;
export type OperatorPropertiesKeys =
  | "VALUE"
  | "VALUES"
  | "DATA_TYPE"
  | "UPPER_BOUND"
  | "LOWER_BOUND"
  | "SOURCE_DATA_TYPE"
  | "DESTINATION_DATA_TYPE"
  | "VALIDATION_ACTION"
  | "MASK_VALUE"
  | "MASK_LENGTH"
  | "TRUNCATE_LENGTH"
  | "MATH_OPERATION_FIELDS_ORDER"
  | "CONCAT_FORMAT"
  | "SUBFIELD_CATEGORY_MAP"
  | (string & {});
const OperatorPropertiesKeys = S.String;

export type Property = string;
export type TaskPropertiesMap = { [key in OperatorPropertiesKeys]?: string };
const TaskPropertiesMap = /*@__PURE__*/ __L.at(__c11, 3);
export type TaskType =
  | "Arithmetic"
  | "Filter"
  | "Map"
  | "Mask"
  | "Merge"
  | "Truncate"
  | "Validate"
  | (string & {});
const TaskType = S.String;

export interface Task {
  ConnectorOperator?: ConnectorOperator;
  DestinationField?: string;
  SourceFields: string[];
  TaskProperties?: { [key: string]: string | undefined };
  TaskType: TaskType;
}
const Task = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<Task>;
export type Tasks = Task[];
const Tasks = /*@__PURE__*/ __L.at(__c11, 5);
export type TriggerType = "Scheduled" | "Event" | "OnDemand" | (string & {});
const TriggerType = S.String;

export type ScheduleExpression = string;
export type DataPullMode = "Incremental" | "Complete" | (string & {});
const DataPullMode = S.String;

export type Timezone = string;
export type ScheduleOffset = number;
export interface ScheduledTriggerProperties {
  ScheduleExpression: string;
  DataPullMode?: DataPullMode;
  ScheduleStartTime?: Date;
  ScheduleEndTime?: Date;
  Timezone?: string;
  ScheduleOffset?: number;
  FirstExecutionFrom?: Date;
}
const ScheduledTriggerProperties = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ScheduledTriggerProperties>;
export interface TriggerProperties {
  Scheduled?: ScheduledTriggerProperties;
}
const TriggerProperties = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<TriggerProperties>;
export interface TriggerConfig {
  TriggerType: TriggerType;
  TriggerProperties?: TriggerProperties;
}
const TriggerConfig = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<TriggerConfig>;
export interface FlowDefinition {
  Description?: string;
  FlowName: string;
  KmsArn: string;
  SourceFlowConfig: SourceFlowConfig;
  Tasks: Task[];
  TriggerConfig: TriggerConfig;
}
const FlowDefinition = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<FlowDefinition>;
export interface Batch {
  StartTime: Date;
  EndTime: Date;
}
const Batch = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<Batch>;
export type Batches = Batch[];
const Batches = /*@__PURE__*/ __L.at(__c12, 3);
export interface AppflowIntegration {
  FlowDefinition: FlowDefinition;
  Batches?: Batch[];
}
const AppflowIntegration = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<AppflowIntegration>;
export interface IntegrationConfig {
  AppflowIntegration?: AppflowIntegration;
}
const IntegrationConfig = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<IntegrationConfig>;
export type RoleArn = string;
export interface CreateIntegrationWorkflowRequest {
  DomainName: string;
  WorkflowType: WorkflowType;
  IntegrationConfig: IntegrationConfig;
  ObjectTypeName: string;
  RoleArn: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateIntegrationWorkflowRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<CreateIntegrationWorkflowRequest>;
export interface CreateIntegrationWorkflowResponse {
  WorkflowId: string;
  Message: string;
}
const CreateIntegrationWorkflowResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<CreateIntegrationWorkflowResponse>;
export interface CreateProfileRequest {
  DomainName: string;
  AccountNumber?: string | redacted.Redacted<string>;
  AdditionalInformation?: string | redacted.Redacted<string>;
  PartyType?: PartyType;
  BusinessName?: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  MiddleName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BirthDate?: string | redacted.Redacted<string>;
  Gender?: Gender;
  PhoneNumber?: string | redacted.Redacted<string>;
  MobilePhoneNumber?: string | redacted.Redacted<string>;
  HomePhoneNumber?: string | redacted.Redacted<string>;
  BusinessPhoneNumber?: string | redacted.Redacted<string>;
  EmailAddress?: string | redacted.Redacted<string>;
  PersonalEmailAddress?: string | redacted.Redacted<string>;
  BusinessEmailAddress?: string | redacted.Redacted<string>;
  Address?: Address;
  ShippingAddress?: Address;
  MailingAddress?: Address;
  BillingAddress?: Address;
  Attributes?: { [key: string]: string | undefined };
  PartyTypeString?: string | redacted.Redacted<string>;
  GenderString?: string | redacted.Redacted<string>;
  ProfileType?: ProfileType;
  EngagementPreferences?: EngagementPreferences;
}
const CreateProfileRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<CreateProfileRequest>;
export interface CreateProfileResponse {
  ProfileId: string;
}
const CreateProfileResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<CreateProfileResponse>;
export type RecommenderRecipeName =
  | "recommended-for-you"
  | "similar-items"
  | "frequently-paired-items"
  | "popular-items"
  | "trending-now"
  | "personalized-ranking"
  | (string & {});
const RecommenderRecipeName = S.String;

export type EventParametersEventTypeString = string;
export type EventParametersEventWeightDouble = number;
export interface EventParameters {
  EventType: string;
  EventValueThreshold?: number;
  EventWeight?: number;
}
const EventParameters = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<EventParameters>;
export type EventParametersList = EventParameters[];
const EventParametersList = /*@__PURE__*/ __L.at(__c13, 3);
export interface EventsConfig {
  EventParametersList: EventParameters[];
}
const EventsConfig = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<EventsConfig>;
export type RecommenderConfigTrainingFrequencyInteger = number;
export type InferenceConfigMinProvisionedTPSInteger = number;
export interface InferenceConfig {
  MinProvisionedTPS?: number;
}
const InferenceConfig = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<InferenceConfig>;
export type ColumnNamesList = string[];
const ColumnNamesList = RequestValueList as any as S.Schema<ColumnNamesList>;
export type IncludedColumns = { [key: string]: string[] | undefined };
const IncludedColumns = /*@__PURE__*/ __L.at(__c13, 6);
export type DiversityCapType = "PERCENTAGE" | "VALUE" | (string & {});
const DiversityCapType = S.String;

export type DiversityTargetExpression = string;
export interface DiversityColumn {
  Name: string;
  CapType: DiversityCapType;
  Target: string;
}
const DiversityColumn = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<DiversityColumn>;
export type DiversityColumnsList = DiversityColumn[];
const DiversityColumnsList = /*@__PURE__*/ __L.at(__c14, 0);
export interface DiversityConfig {
  DiversityColumns?: DiversityColumn[];
}
const DiversityConfig = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<DiversityConfig>;
export interface RecommenderConfig {
  EventsConfig?: EventsConfig;
  TrainingFrequency?: number;
  InferenceConfig?: InferenceConfig;
  IncludedColumns?: { [key: string]: string[] | undefined };
  ExcludedColumns?: { [key: string]: string[] | undefined };
  DiversityConfig?: DiversityConfig;
}
const RecommenderConfig = /*@__PURE__*/ __L.at(__c14, 2) as any as S.Schema<RecommenderConfig>;
export interface CreateRecommenderRequest {
  DomainName: string;
  RecommenderName: string;
  RecommenderRecipeName: RecommenderRecipeName;
  RecommenderConfig?: RecommenderConfig;
  Description?: string | redacted.Redacted<string>;
  RecommenderSchemaName?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateRecommenderRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<CreateRecommenderRequest>;
export type Arn = string;
export interface CreateRecommenderResponse {
  RecommenderArn: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateRecommenderResponse = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<CreateRecommenderResponse>;
export type RecommenderFilterName = string;
export type RecommenderFilterExpression = string | redacted.Redacted<string>;
export interface CreateRecommenderFilterRequest {
  DomainName: string;
  RecommenderFilterName: string;
  RecommenderFilterExpression: string | redacted.Redacted<string>;
  RecommenderSchemaName?: string;
  Description?: string | redacted.Redacted<string>;
  Tags?: { [key: string]: string | undefined };
}
const CreateRecommenderFilterRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<CreateRecommenderFilterRequest>;
export interface CreateRecommenderFilterResponse {
  RecommenderFilterArn: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateRecommenderFilterResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<CreateRecommenderFilterResponse>;
export type ContentType = "STRING" | "NUMBER" | (string & {});
const ContentType = S.String;

export type FeatureType = "TEXTUAL" | "CATEGORICAL" | (string & {});
const FeatureType = S.String;

export interface RecommenderSchemaField {
  TargetFieldName: string;
  ContentType?: ContentType;
  FeatureType?: FeatureType;
}
const RecommenderSchemaField = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<RecommenderSchemaField>;
export type RecommenderSchemaFieldList = RecommenderSchemaField[];
const RecommenderSchemaFieldList = /*@__PURE__*/ __L.at(__c15, 0);
export type RecommenderSchemaFields = { [key: string]: RecommenderSchemaField[] | undefined };
const RecommenderSchemaFields = /*@__PURE__*/ __L.at(__c15, 1);
export interface CreateRecommenderSchemaRequest {
  DomainName: string;
  RecommenderSchemaName: string;
  Fields: { [key: string]: RecommenderSchemaField[] | undefined };
  Tags?: { [key: string]: string | undefined };
}
const CreateRecommenderSchemaRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<CreateRecommenderSchemaRequest>;
export type RecommenderSchemaStatus = "ACTIVE" | "DELETING" | (string & {});
const RecommenderSchemaStatus = S.String;

export interface CreateRecommenderSchemaResponse {
  RecommenderSchemaArn: string;
  RecommenderSchemaName: string;
  Fields: { [key: string]: RecommenderSchemaField[] | undefined };
  CreatedAt: Date;
  Status: RecommenderSchemaStatus;
  Tags?: { [key: string]: string | undefined };
}
const CreateRecommenderSchemaResponse = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<CreateRecommenderSchemaResponse>;
export type SensitiveString1To4000 = string | redacted.Redacted<string>;
export type StringDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | (string & {});
const StringDimensionType = S.String;

export type Values = string[];
const Values = RequestValueList as any as S.Schema<Values>;
export interface ProfileDimension {
  DimensionType: StringDimensionType;
  Values: string[];
}
const ProfileDimension = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<ProfileDimension>;
export type ExtraLengthValues = string[];
const ExtraLengthValues = RequestValueList as any as S.Schema<ExtraLengthValues>;
export interface ExtraLengthValueProfileDimension {
  DimensionType: StringDimensionType;
  Values: string[];
}
const ExtraLengthValueProfileDimension = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ExtraLengthValueProfileDimension>;
export type DateDimensionType =
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON"
  | (string & {});
const DateDimensionType = S.String;

export type DateValues = string[];
const DateValues = RequestValueList as any as S.Schema<DateValues>;
export interface DateDimension {
  DimensionType: DateDimensionType;
  Values: string[];
}
const DateDimension = /*@__PURE__*/ __L.at(__c15, 6) as any as S.Schema<DateDimension>;
export interface AddressDimension {
  City?: ProfileDimension;
  Country?: ProfileDimension;
  County?: ProfileDimension;
  PostalCode?: ProfileDimension;
  Province?: ProfileDimension;
  State?: ProfileDimension;
}
const AddressDimension = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<AddressDimension>;
export type AttributeDimensionType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "BEFORE"
  | "AFTER"
  | "BETWEEN"
  | "NOT_BETWEEN"
  | "ON"
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL"
  | "LIST_CONTAINS"
  | "LIST_CONTAINS_ALL"
  | (string & {});
const AttributeDimensionType = S.String;

export interface AttributeDimension {
  DimensionType: AttributeDimensionType;
  Values: string[];
}
const AttributeDimension = ProfileDimension as any as S.Schema<AttributeDimension>;
export type CustomAttributes = { [key: string]: AttributeDimension | undefined };
const CustomAttributes = /*@__PURE__*/ __L.at(__c16, 0);
export type ProfileTypeDimensionType = "INCLUSIVE" | "EXCLUSIVE" | (string & {});
const ProfileTypeDimensionType = S.String;

export type ProfileTypeValues = ProfileType[];
const ProfileTypeValues = /*@__PURE__*/ __L.at(__c16, 1);
export interface ProfileTypeDimension {
  DimensionType: ProfileTypeDimensionType;
  Values: ProfileType[];
}
const ProfileTypeDimension = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<ProfileTypeDimension>;
export interface ProfileAttributes {
  AccountNumber?: ProfileDimension;
  AdditionalInformation?: ExtraLengthValueProfileDimension;
  FirstName?: ProfileDimension;
  LastName?: ProfileDimension;
  MiddleName?: ProfileDimension;
  GenderString?: ProfileDimension;
  PartyTypeString?: ProfileDimension;
  BirthDate?: DateDimension;
  PhoneNumber?: ProfileDimension;
  BusinessName?: ProfileDimension;
  BusinessPhoneNumber?: ProfileDimension;
  HomePhoneNumber?: ProfileDimension;
  MobilePhoneNumber?: ProfileDimension;
  EmailAddress?: ProfileDimension;
  PersonalEmailAddress?: ProfileDimension;
  BusinessEmailAddress?: ProfileDimension;
  Address?: AddressDimension;
  ShippingAddress?: AddressDimension;
  MailingAddress?: AddressDimension;
  BillingAddress?: AddressDimension;
  Attributes?: { [key: string]: AttributeDimension | undefined };
  ProfileType?: ProfileTypeDimension;
}
const ProfileAttributes = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<ProfileAttributes>;
export interface CalculatedAttributeDimension {
  DimensionType: AttributeDimensionType;
  Values: string[];
  ConditionOverrides?: ConditionOverrides;
}
const CalculatedAttributeDimension = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<CalculatedAttributeDimension>;
export type CalculatedCustomAttributes = {
  [key: string]: CalculatedAttributeDimension | undefined;
};
const CalculatedCustomAttributes = /*@__PURE__*/ __L.at(__c16, 5);
export type Dimension =
  | { ProfileAttributes: ProfileAttributes; CalculatedAttributes?: never }
  | {
      ProfileAttributes?: never;
      CalculatedAttributes: { [key: string]: CalculatedAttributeDimension | undefined };
    };
const Dimension = /*@__PURE__*/ __L.at(__c16, 6);
export type DimensionList = Dimension[];
const DimensionList = /*@__PURE__*/ __L.at(__c16, 7);
export interface SourceSegment {
  SegmentDefinitionName?: string;
}
const SourceSegment = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<SourceSegment>;
export type SourceSegmentList = SourceSegment[];
const SourceSegmentList = /*@__PURE__*/ __L.at(__c17, 1);
export type IncludeOptions = "ALL" | "ANY" | "NONE" | (string & {});
const IncludeOptions = S.String;

export interface Group {
  Dimensions?: Dimension[];
  SourceSegments?: SourceSegment[];
  SourceType?: IncludeOptions;
  Type?: IncludeOptions;
}
const Group = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<Group>;
export type SegmentGroupList = Group[];
const SegmentGroupList = /*@__PURE__*/ __L.at(__c17, 3);
export interface SegmentGroup {
  Groups?: Group[];
  Include?: IncludeOptions;
}
const SegmentGroup = /*@__PURE__*/ __L.at(__c17, 4) as any as S.Schema<SegmentGroup>;
export type SensitiveString1To50000 = string | redacted.Redacted<string>;
export type SegmentSortDataType = "STRING" | "NUMBER" | "DATE" | (string & {});
const SegmentSortDataType = S.String;

export type SegmentSortOrder = "ASC" | "DESC" | (string & {});
const SegmentSortOrder = S.String;

export type SortAttributeType = "PROFILE" | "CALCULATED" | (string & {});
const SortAttributeType = S.String;

export interface SortAttribute {
  Name: string;
  DataType?: SegmentSortDataType;
  Order: SegmentSortOrder;
  Type?: SortAttributeType;
}
const SortAttribute = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<SortAttribute>;
export type SortAttributeList = SortAttribute[];
const SortAttributeList = /*@__PURE__*/ __L.at(__c17, 6);
export interface SegmentSort {
  Attributes: SortAttribute[];
}
const SegmentSort = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<SegmentSort>;
export interface CreateSegmentDefinitionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  DisplayName: string;
  Description?: string | redacted.Redacted<string>;
  SegmentGroups?: SegmentGroup;
  SegmentSqlQuery?: string | redacted.Redacted<string>;
  SegmentSort?: SegmentSort;
  Tags?: { [key: string]: string | undefined };
}
const CreateSegmentDefinitionRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<CreateSegmentDefinitionRequest>;
export type SegmentDefinitionArn = string;
export interface CreateSegmentDefinitionResponse {
  SegmentDefinitionName: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  SegmentDefinitionArn?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateSegmentDefinitionResponse = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<CreateSegmentDefinitionResponse>;
export interface SegmentGroupStructure {
  Groups?: Group[];
  Include?: IncludeOptions;
}
const SegmentGroupStructure = SegmentGroup as any as S.Schema<SegmentGroupStructure>;
export interface CreateSegmentEstimateRequest {
  DomainName: string;
  SegmentQuery?: SegmentGroupStructure;
  SegmentSqlQuery?: string | redacted.Redacted<string>;
}
const CreateSegmentEstimateRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<CreateSegmentEstimateRequest>;
export type StatusCode = number;
export interface CreateSegmentEstimateResponse {
  DomainName?: string;
  EstimateId?: string;
  StatusCode?: number;
}
const CreateSegmentEstimateResponse = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<CreateSegmentEstimateResponse>;
export type DataFormat = "CSV" | "JSONL" | "ORC" | (string & {});
const DataFormat = S.String;

export interface CreateSegmentSnapshotRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  DataFormat: DataFormat;
  EncryptionKey?: string;
  RoleArn?: string;
  DestinationUri?: string;
}
const CreateSegmentSnapshotRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<CreateSegmentSnapshotRequest>;
export interface CreateSegmentSnapshotResponse {
  SnapshotId: string;
}
const CreateSegmentSnapshotResponse = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<CreateSegmentSnapshotResponse>;
export type FieldContentType =
  | "STRING"
  | "NUMBER"
  | "PHONE_NUMBER"
  | "EMAIL_ADDRESS"
  | "NAME"
  | (string & {});
const FieldContentType = S.String;

export interface ObjectTypeField {
  Source?: string;
  Target?: string;
  ContentType?: FieldContentType;
}
const ObjectTypeField = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<ObjectTypeField>;
export type FieldMap = { [key: string]: ObjectTypeField | undefined };
const FieldMap = /*@__PURE__*/ __L.at(__c18, 7);
export interface CreateUploadJobRequest {
  DomainName: string;
  DisplayName: string;
  Fields: { [key: string]: ObjectTypeField | undefined };
  UniqueKey: string;
  DataExpiry?: number;
}
const CreateUploadJobRequest = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<CreateUploadJobRequest>;
export interface CreateUploadJobResponse {
  JobId: string;
}
const CreateUploadJobResponse = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<CreateUploadJobResponse>;
export interface DeleteCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
}
const DeleteCalculatedAttributeDefinitionRequest = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<DeleteCalculatedAttributeDefinitionRequest>;
export interface DeleteCalculatedAttributeDefinitionResponse {}
const DeleteCalculatedAttributeDefinitionResponse =
  AssociateStreamForSegmentsResponse as any as S.Schema<DeleteCalculatedAttributeDefinitionResponse>;
export interface DeleteDomainRequest {
  DomainName: string;
}
const DeleteDomainRequest = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<DeleteDomainRequest>;
export type Message = string;
export interface DeleteDomainResponse {
  Message: string;
}
const DeleteDomainResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<DeleteDomainResponse>;
export interface DeleteDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
}
const DeleteDomainLayoutRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<DeleteDomainLayoutRequest>;
export interface DeleteDomainLayoutResponse {
  Message: string;
}
const DeleteDomainLayoutResponse = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<DeleteDomainLayoutResponse>;
export interface DeleteDomainObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
}
const DeleteDomainObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<DeleteDomainObjectTypeRequest>;
export interface DeleteDomainObjectTypeResponse {}
const DeleteDomainObjectTypeResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<DeleteDomainObjectTypeResponse>;
export interface DeleteEventStreamRequest {
  DomainName: string;
  EventStreamName: string;
}
const DeleteEventStreamRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<DeleteEventStreamRequest>;
export interface DeleteEventStreamResponse {}
const DeleteEventStreamResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<DeleteEventStreamResponse>;
export interface DeleteEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
}
const DeleteEventTriggerRequest = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<DeleteEventTriggerRequest>;
export interface DeleteEventTriggerResponse {
  Message: string;
}
const DeleteEventTriggerResponse =
  DeleteDomainLayoutResponse as any as S.Schema<DeleteEventTriggerResponse>;
export interface DeleteIntegrationRequest {
  DomainName: string;
  Uri: string;
}
const DeleteIntegrationRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<DeleteIntegrationRequest>;
export interface DeleteIntegrationResponse {
  Message: string;
}
const DeleteIntegrationResponse =
  DeleteDomainLayoutResponse as any as S.Schema<DeleteIntegrationResponse>;
export interface DeleteProfileRequest {
  ProfileId: string;
  DomainName: string;
}
const DeleteProfileRequest = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<DeleteProfileRequest>;
export interface DeleteProfileResponse {
  Message?: string;
}
const DeleteProfileResponse = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<DeleteProfileResponse>;
export interface DeleteProfileKeyRequest {
  ProfileId: string;
  KeyName: string;
  Values: string[];
  DomainName: string;
}
const DeleteProfileKeyRequest = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<DeleteProfileKeyRequest>;
export interface DeleteProfileKeyResponse {
  Message?: string;
}
const DeleteProfileKeyResponse = DeleteProfileResponse as any as S.Schema<DeleteProfileKeyResponse>;
export interface DeleteProfileObjectRequest {
  ProfileId: string;
  ProfileObjectUniqueKey: string;
  ObjectTypeName: string;
  DomainName: string;
}
const DeleteProfileObjectRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<DeleteProfileObjectRequest>;
export interface DeleteProfileObjectResponse {
  Message?: string;
}
const DeleteProfileObjectResponse = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<DeleteProfileObjectResponse>;
export interface DeleteProfileObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
}
const DeleteProfileObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<DeleteProfileObjectTypeRequest>;
export interface DeleteProfileObjectTypeResponse {
  Message: string;
}
const DeleteProfileObjectTypeResponse =
  DeleteDomainLayoutResponse as any as S.Schema<DeleteProfileObjectTypeResponse>;
export interface DeleteRecommenderRequest {
  DomainName: string;
  RecommenderName: string;
}
const DeleteRecommenderRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<DeleteRecommenderRequest>;
export interface DeleteRecommenderResponse {}
const DeleteRecommenderResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<DeleteRecommenderResponse>;
export interface DeleteRecommenderFilterRequest {
  DomainName: string;
  RecommenderFilterName: string;
}
const DeleteRecommenderFilterRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<DeleteRecommenderFilterRequest>;
export interface DeleteRecommenderFilterResponse {
  Message: string;
}
const DeleteRecommenderFilterResponse =
  DeleteDomainLayoutResponse as any as S.Schema<DeleteRecommenderFilterResponse>;
export interface DeleteRecommenderSchemaRequest {
  DomainName: string;
  RecommenderSchemaName: string;
}
const DeleteRecommenderSchemaRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<DeleteRecommenderSchemaRequest>;
export interface DeleteRecommenderSchemaResponse {}
const DeleteRecommenderSchemaResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<DeleteRecommenderSchemaResponse>;
export interface DeleteSegmentDefinitionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
}
const DeleteSegmentDefinitionRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<DeleteSegmentDefinitionRequest>;
export interface DeleteSegmentDefinitionResponse {
  Message?: string;
}
const DeleteSegmentDefinitionResponse =
  DeleteProfileObjectResponse as any as S.Schema<DeleteSegmentDefinitionResponse>;
export interface DeleteSegmentSubscriptionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
}
const DeleteSegmentSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<DeleteSegmentSubscriptionRequest>;
export interface DeleteSegmentSubscriptionResponse {
  Message?: string;
}
const DeleteSegmentSubscriptionResponse =
  DeleteProfileObjectResponse as any as S.Schema<DeleteSegmentSubscriptionResponse>;
export interface DeleteWorkflowRequest {
  DomainName: string;
  WorkflowId: string;
}
const DeleteWorkflowRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<DeleteWorkflowRequest>;
export interface DeleteWorkflowResponse {}
const DeleteWorkflowResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<DeleteWorkflowResponse>;
export type Objects = (string | redacted.Redacted<string>)[];
const Objects = /*@__PURE__*/ __L.at(__c22, 1);
export interface DetectProfileObjectTypeRequest {
  Objects: (string | redacted.Redacted<string>)[];
  DomainName: string;
}
const DetectProfileObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<DetectProfileObjectTypeRequest>;
export type StandardIdentifier =
  | "PROFILE"
  | "ASSET"
  | "CASE"
  | "DEVICE"
  | "WEB_ANALYTICS"
  | "ORDER"
  | "COMMUNICATION_RECORD"
  | "AIR_PREFERENCE"
  | "HOTEL_PREFERENCE"
  | "AIR_BOOKING"
  | "AIR_SEGMENT"
  | "HOTEL_RESERVATION"
  | "HOTEL_STAY_REVENUE"
  | "LOYALTY"
  | "LOYALTY_TRANSACTION"
  | "LOYALTY_PROMOTION"
  | "UNIQUE"
  | "SECONDARY"
  | "LOOKUP_ONLY"
  | "NEW_ONLY"
  | (string & {});
export type StandardIdentifierList = StandardIdentifier[];
const StandardIdentifierList = ProfileTypeValues as any as S.Schema<StandardIdentifierList>;
export type FieldNameList = string[];
const FieldNameList = RequestValueList as any as S.Schema<FieldNameList>;
export interface ObjectTypeKey {
  StandardIdentifiers?: StandardIdentifier[];
  FieldNames?: string[];
}
const ObjectTypeKey = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<ObjectTypeKey>;
export type ObjectTypeKeyList = ObjectTypeKey[];
const ObjectTypeKeyList = /*@__PURE__*/ __L.at(__c22, 4);
export type KeyMap = { [key: string]: ObjectTypeKey[] | undefined };
const KeyMap = /*@__PURE__*/ __L.at(__c22, 5);
export interface DetectedProfileObjectType {
  SourceLastUpdatedTimestampFormat?: string;
  Fields?: { [key: string]: ObjectTypeField | undefined };
  Keys?: { [key: string]: ObjectTypeKey[] | undefined };
}
const DetectedProfileObjectType = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<DetectedProfileObjectType>;
export type DetectedProfileObjectTypes = DetectedProfileObjectType[];
const DetectedProfileObjectTypes = /*@__PURE__*/ __L.at(__c22, 7);
export interface DetectProfileObjectTypeResponse {
  DetectedProfileObjectTypes?: DetectedProfileObjectType[];
}
const DetectProfileObjectTypeResponse = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<DetectProfileObjectTypeResponse>;
export interface DisassociateStreamForSegmentsRequest {
  DomainName: string;
}
const DisassociateStreamForSegmentsRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<DisassociateStreamForSegmentsRequest>;
export interface DisassociateStreamForSegmentsResponse {
  Message?: string;
}
const DisassociateStreamForSegmentsResponse =
  DeleteProfileObjectResponse as any as S.Schema<DisassociateStreamForSegmentsResponse>;
export interface GetAutoMergingPreviewRequest {
  DomainName: string;
  Consolidation: Consolidation;
  ConflictResolution: ConflictResolution;
  MinAllowedConfidenceScoreForMerging?: number;
}
const GetAutoMergingPreviewRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<GetAutoMergingPreviewRequest>;
export interface GetAutoMergingPreviewResponse {
  DomainName: string;
  NumberOfMatchesInSample?: number;
  NumberOfProfilesInSample?: number;
  NumberOfProfilesWillBeMerged?: number;
}
const GetAutoMergingPreviewResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<GetAutoMergingPreviewResponse>;
export interface GetCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
}
const GetCalculatedAttributeDefinitionRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<GetCalculatedAttributeDefinitionRequest>;
export interface GetCalculatedAttributeDefinitionResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Statistic?: Statistic;
  Filter?: Filter;
  Conditions?: Conditions;
  AttributeDetails?: AttributeDetails;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Readiness?: Readiness;
  Tags?: { [key: string]: string | undefined };
}
const GetCalculatedAttributeDefinitionResponse = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<GetCalculatedAttributeDefinitionResponse>;
export interface GetCalculatedAttributeForProfileRequest {
  DomainName: string;
  ProfileId: string;
  CalculatedAttributeName: string;
}
const GetCalculatedAttributeForProfileRequest = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<GetCalculatedAttributeForProfileRequest>;
export interface GetCalculatedAttributeForProfileResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  Value?: string;
  LastObjectTimestamp?: Date;
}
const GetCalculatedAttributeForProfileResponse = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<GetCalculatedAttributeForProfileResponse>;
export interface GetDomainRequest {
  DomainName: string;
}
const GetDomainRequest = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<GetDomainRequest>;
export interface DomainStats {
  ProfileCount?: number;
  MeteringProfileCount?: number;
  ObjectCount?: number;
  TotalSize?: number;
}
const DomainStats = /*@__PURE__*/ __L.at(__c24, 1) as any as S.Schema<DomainStats>;
export interface GetDomainResponse {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Stats?: DomainStats;
  Matching?: MatchingResponse;
  RuleBasedMatching?: RuleBasedMatchingResponse;
  DataStore?: DataStoreResponse;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetDomainResponse = /*@__PURE__*/ __L.at(__c24, 2) as any as S.Schema<GetDomainResponse>;
export interface GetDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
}
const GetDomainLayoutRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<GetDomainLayoutRequest>;
export interface GetDomainLayoutResponse {
  LayoutDefinitionName: string;
  Description: string | redacted.Redacted<string>;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Layout: string | redacted.Redacted<string>;
  Version: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetDomainLayoutResponse = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<GetDomainLayoutResponse>;
export interface GetDomainObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
}
const GetDomainObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<GetDomainObjectTypeRequest>;
export type SensitiveString1To10000 = string | redacted.Redacted<string>;
export type DomainObjectTypeFieldName = string;
export interface DomainObjectTypeField {
  Source: string;
  Target: string;
  ContentType?: ContentType;
  FeatureType?: FeatureType;
}
const DomainObjectTypeField = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<DomainObjectTypeField>;
export type DomainObjectTypeFields = { [key: string]: DomainObjectTypeField | undefined };
const DomainObjectTypeFields = /*@__PURE__*/ __L.at(__c24, 7);
export interface GetDomainObjectTypeResponse {
  ObjectTypeName: string;
  Description?: string | redacted.Redacted<string>;
  EncryptionKey?: string;
  Fields?: { [key: string]: DomainObjectTypeField | undefined };
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetDomainObjectTypeResponse = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<GetDomainObjectTypeResponse>;
export interface GetEventStreamRequest {
  DomainName: string;
  EventStreamName: string;
}
const GetEventStreamRequest = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<GetEventStreamRequest>;
export type EventStreamState = "RUNNING" | "STOPPED" | (string & {});
const EventStreamState = S.String;

export type EventStreamDestinationStatus = "HEALTHY" | "UNHEALTHY" | (string & {});
const EventStreamDestinationStatus = S.String;

export interface EventStreamDestinationDetails {
  Uri: string;
  Status: EventStreamDestinationStatus;
  UnhealthySince?: Date;
  Message?: string;
}
const EventStreamDestinationDetails = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<EventStreamDestinationDetails>;
export interface GetEventStreamResponse {
  DomainName: string;
  EventStreamArn: string;
  CreatedAt: Date;
  State: EventStreamState;
  StoppedSince?: Date;
  DestinationDetails: EventStreamDestinationDetails;
  Tags?: { [key: string]: string | undefined };
}
const GetEventStreamResponse = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<GetEventStreamResponse>;
export interface GetEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
}
const GetEventTriggerRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<GetEventTriggerRequest>;
export interface GetEventTriggerResponse {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string | redacted.Redacted<string>;
  EventTriggerConditions?: EventTriggerCondition[];
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetEventTriggerResponse = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<GetEventTriggerResponse>;
export interface GetIdentityResolutionJobRequest {
  DomainName: string;
  JobId: string;
}
const GetIdentityResolutionJobRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<GetIdentityResolutionJobRequest>;
export type IdentityResolutionJobStatus =
  | "PENDING"
  | "PREPROCESSING"
  | "FIND_MATCHING"
  | "MERGING"
  | "COMPLETED"
  | "PARTIAL_SUCCESS"
  | "FAILED"
  | (string & {});
const IdentityResolutionJobStatus = S.String;

export type S3KeyName = string;
export interface S3ExportingLocation {
  S3BucketName?: string;
  S3KeyName?: string;
}
const S3ExportingLocation = /*@__PURE__*/ __L.at(__c25, 7) as any as S.Schema<S3ExportingLocation>;
export interface ExportingLocation {
  S3Exporting?: S3ExportingLocation;
}
const ExportingLocation = /*@__PURE__*/ __L.at(__c26, 0) as any as S.Schema<ExportingLocation>;
export interface JobStats {
  NumberOfProfilesReviewed?: number;
  NumberOfMatchesFound?: number;
  NumberOfMergesDone?: number;
}
const JobStats = /*@__PURE__*/ __L.at(__c26, 1) as any as S.Schema<JobStats>;
export interface GetIdentityResolutionJobResponse {
  DomainName?: string;
  JobId?: string;
  Status?: IdentityResolutionJobStatus;
  Message?: string;
  JobStartTime?: Date;
  JobEndTime?: Date;
  LastUpdatedAt?: Date;
  JobExpirationTime?: Date;
  AutoMerging?: AutoMerging;
  ExportingLocation?: ExportingLocation;
  JobStats?: JobStats;
}
const GetIdentityResolutionJobResponse = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<GetIdentityResolutionJobResponse>;
export interface GetIntegrationRequest {
  DomainName: string;
  Uri: string;
}
const GetIntegrationRequest = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<GetIntegrationRequest>;
export type ObjectTypeNames = { [key: string]: string | undefined };
const ObjectTypeNames = /*@__PURE__*/ __L.at(__c26, 4);
export type EventTriggerNames = string[];
const EventTriggerNames = RequestValueList as any as S.Schema<EventTriggerNames>;
export type Scope = "PROFILE" | "DOMAIN" | (string & {});
const Scope = S.String;

export interface GetIntegrationResponse {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
  ObjectTypeNames?: { [key: string]: string | undefined };
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: string[];
  Scope?: Scope;
}
const GetIntegrationResponse = /*@__PURE__*/ __L.at(
  __c26,
  5,
) as any as S.Schema<GetIntegrationResponse>;
export type Token = string;
export type MaxSize100 = number;
export interface GetMatchesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
}
const GetMatchesRequest = /*@__PURE__*/ __L.at(__c26, 6) as any as S.Schema<GetMatchesRequest>;
export type MatchesNumber = number;
export type ProfileIdList = string[];
const ProfileIdList = RequestValueList as any as S.Schema<ProfileIdList>;
export interface MatchItem {
  MatchId?: string;
  ProfileIds?: string[];
  ConfidenceScore?: number;
}
const MatchItem = /*@__PURE__*/ __L.at(__c26, 7) as any as S.Schema<MatchItem>;
export type MatchesList = MatchItem[];
const MatchesList = /*@__PURE__*/ __L.at(__c27, 0);
export interface GetMatchesResponse {
  NextToken?: string;
  MatchGenerationDate?: Date;
  PotentialMatches?: number;
  Matches?: MatchItem[];
}
const GetMatchesResponse = /*@__PURE__*/ __L.at(__c27, 1) as any as S.Schema<GetMatchesResponse>;
export interface GetObjectTypeAttributeStatisticsRequest {
  DomainName: string;
  ObjectTypeName: string;
  AttributeName: string;
}
const GetObjectTypeAttributeStatisticsRequest = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<GetObjectTypeAttributeStatisticsRequest>;
export interface GetObjectTypeAttributeStatisticsPercentiles {
  P5: number;
  P25: number;
  P50: number;
  P75: number;
  P95: number;
}
const GetObjectTypeAttributeStatisticsPercentiles = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<GetObjectTypeAttributeStatisticsPercentiles>;
export interface GetObjectTypeAttributeStatisticsStats {
  Maximum: number;
  Minimum: number;
  Average: number;
  StandardDeviation: number;
  Percentiles: GetObjectTypeAttributeStatisticsPercentiles;
}
const GetObjectTypeAttributeStatisticsStats = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<GetObjectTypeAttributeStatisticsStats>;
export interface GetObjectTypeAttributeStatisticsResponse {
  Statistics: GetObjectTypeAttributeStatisticsStats;
  CalculatedAt: Date;
}
const GetObjectTypeAttributeStatisticsResponse = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<GetObjectTypeAttributeStatisticsResponse>;
export interface GetProfileHistoryRecordRequest {
  DomainName: string;
  ProfileId: string;
  Id: string;
}
const GetProfileHistoryRecordRequest = /*@__PURE__*/ __L.at(
  __c27,
  6,
) as any as S.Schema<GetProfileHistoryRecordRequest>;
export type ActionType =
  | "ADDED_PROFILE_KEY"
  | "DELETED_PROFILE_KEY"
  | "CREATED"
  | "UPDATED"
  | "INGESTED"
  | "DELETED_BY_CUSTOMER"
  | "EXPIRED"
  | "MERGED"
  | "DELETED_BY_MERGE"
  | (string & {});
const ActionType = S.String;

export interface GetProfileHistoryRecordResponse {
  Id: string;
  ObjectTypeName: string;
  CreatedAt: Date;
  LastUpdatedAt?: Date;
  ActionType: ActionType;
  ProfileObjectUniqueKey?: string;
  Content?: string | redacted.Redacted<string>;
  PerformedBy?: string;
}
const GetProfileHistoryRecordResponse = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<GetProfileHistoryRecordResponse>;
export interface GetProfileObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
}
const GetProfileObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<GetProfileObjectTypeRequest>;
export type MinSize0 = number;
export type MinSize1 = number;
export interface GetProfileObjectTypeResponse {
  ObjectTypeName: string;
  Description: string | redacted.Redacted<string>;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxAvailableProfileObjectCount?: number;
  MaxProfileObjectCount?: number;
  SourcePriority?: number;
  Fields?: { [key: string]: ObjectTypeField | undefined };
  Keys?: { [key: string]: ObjectTypeKey[] | undefined };
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const GetProfileObjectTypeResponse = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<GetProfileObjectTypeResponse>;
export interface GetProfileObjectTypeTemplateRequest {
  TemplateId: string;
}
const GetProfileObjectTypeTemplateRequest = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<GetProfileObjectTypeTemplateRequest>;
export interface GetProfileObjectTypeTemplateResponse {
  TemplateId?: string;
  SourceName?: string;
  SourceObject?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  Fields?: { [key: string]: ObjectTypeField | undefined };
  Keys?: { [key: string]: ObjectTypeKey[] | undefined };
}
const GetProfileObjectTypeTemplateResponse = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<GetProfileObjectTypeTemplateResponse>;
export type ContextKey = string;
export type RecommenderContext = { [key: string]: string | undefined };
const RecommenderContext = ObjectTypeNames as any as S.Schema<RecommenderContext>;
export type RecommenderFilterAttributeName = string;
export type RecommenderFilterAttributeValue = string | redacted.Redacted<string>;
export type RecommenderFilterValues = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
const RecommenderFilterValues = /*@__PURE__*/ __L.at(__c28, 4);
export interface RecommenderFilter {
  Name?: string;
  Values?: { [key: string]: string | redacted.Redacted<string> | undefined };
}
const RecommenderFilter = /*@__PURE__*/ __L.at(__c28, 5) as any as S.Schema<RecommenderFilter>;
export type RecommenderFilters = RecommenderFilter[];
const RecommenderFilters = /*@__PURE__*/ __L.at(__c28, 6);
export type PercentPromotedItems = number;
export interface RecommenderPromotionalFilter {
  Name?: string;
  Values?: { [key: string]: string | redacted.Redacted<string> | undefined };
  PromotionName?: string;
  PercentPromotedItems?: number;
}
const RecommenderPromotionalFilter = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<RecommenderPromotionalFilter>;
export type RecommenderPromotionalFilters = RecommenderPromotionalFilter[];
const RecommenderPromotionalFilters = /*@__PURE__*/ __L.at(__c29, 0);
export type CandidateIdList = string[];
const CandidateIdList = RequestValueList as any as S.Schema<CandidateIdList>;
export type MaxSize500 = number;
export type MetadataColumnName = string;
export type MetadataColumnsList = string[];
const MetadataColumnsList = RequestValueList as any as S.Schema<MetadataColumnsList>;
export interface MetadataConfig {
  MetadataColumns?: string[];
}
const MetadataConfig = /*@__PURE__*/ __L.at(__c29, 1) as any as S.Schema<MetadataConfig>;
export type DiversityPlaceholderName = string;
export type DiversityCapValue = number;
export type DiversityValuesMap = { [key: string]: number | undefined };
const DiversityValuesMap = /*@__PURE__*/ __L.at(__c29, 2);
export interface RecommendationDiversityConfig {
  Enabled: boolean;
  Values?: { [key: string]: number | undefined };
}
const RecommendationDiversityConfig = /*@__PURE__*/ __L.at(
  __c29,
  3,
) as any as S.Schema<RecommendationDiversityConfig>;
export interface GetProfileRecommendationsRequest {
  DomainName: string;
  ProfileId: string;
  RecommenderName: string;
  Context?: { [key: string]: string | undefined };
  RecommenderFilters?: RecommenderFilter[];
  RecommenderPromotionalFilters?: RecommenderPromotionalFilter[];
  CandidateIds?: string[];
  MaxResults?: number;
  MetadataConfig?: MetadataConfig;
  DiversityConfig?: RecommendationDiversityConfig;
}
const GetProfileRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<GetProfileRecommendationsRequest>;
export interface CatalogItem {
  Id?: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
  Code?: string | redacted.Redacted<string>;
  Type?: string | redacted.Redacted<string>;
  Category?: string | redacted.Redacted<string>;
  Description?: string | redacted.Redacted<string>;
  AdditionalInformation?: string | redacted.Redacted<string>;
  ImageLink?: string | redacted.Redacted<string>;
  Link?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  Price?: string | redacted.Redacted<string>;
  Attributes?: { [key: string]: string | undefined };
}
const CatalogItem = /*@__PURE__*/ __L.at(__c29, 5) as any as S.Schema<CatalogItem>;
export interface Recommendation {
  CatalogItem?: CatalogItem;
  Score?: number;
}
const Recommendation = /*@__PURE__*/ __L.at(__c29, 6) as any as S.Schema<Recommendation>;
export type Recommendations = Recommendation[];
const Recommendations = /*@__PURE__*/ __L.at(__c29, 7);
export interface GetProfileRecommendationsResponse {
  Recommendations?: Recommendation[];
}
const GetProfileRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<GetProfileRecommendationsResponse>;
export type GetRecommenderRequestTrainingMetricsCountInteger = number;
export interface GetRecommenderRequest {
  DomainName: string;
  RecommenderName: string;
  TrainingMetricsCount?: number;
}
const GetRecommenderRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<GetRecommenderRequest>;
export type RecommenderStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "ACTIVE"
  | "FAILED"
  | "STOPPING"
  | "INACTIVE"
  | "STARTING"
  | "DELETING"
  | (string & {});
const RecommenderStatus = S.String;

export type RecommenderVersionName = string;
export interface RecommenderUpdate {
  RecommenderConfig?: RecommenderConfig;
  Status?: RecommenderStatus;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  FailureReason?: string;
  RecommenderVersionName?: string;
}
const RecommenderUpdate = /*@__PURE__*/ __L.at(__c30, 2) as any as S.Schema<RecommenderUpdate>;
export type TrainingMetricName =
  | "hit"
  | "coverage"
  | "recall"
  | "popularity"
  | "freshness"
  | "similarity"
  | "mean_reciprocal_rank_at_25"
  | "normalized_discounted_cumulative_gain_at_5"
  | "normalized_discounted_cumulative_gain_at_10"
  | "normalized_discounted_cumulative_gain_at_25"
  | "precision_at_5"
  | "precision_at_10"
  | "precision_at_25"
  | (string & {});
const TrainingMetricName = S.String;

export type Metrics = { [key in TrainingMetricName]?: number };
const Metrics = /*@__PURE__*/ __L.at(__c30, 3);
export interface TrainingMetrics {
  Time?: Date;
  Metrics?: { [key: string]: number | undefined };
  RecommenderVersionName?: string;
}
const TrainingMetrics = /*@__PURE__*/ __L.at(__c30, 4) as any as S.Schema<TrainingMetrics>;
export type TrainingMetricsList = TrainingMetrics[];
const TrainingMetricsList = /*@__PURE__*/ __L.at(__c30, 5);
export interface GetRecommenderResponse {
  RecommenderName: string;
  RecommenderRecipeName: RecommenderRecipeName;
  RecommenderSchemaName?: string;
  RecommenderConfig?: RecommenderConfig;
  Description?: string | redacted.Redacted<string>;
  Status?: RecommenderStatus;
  LastUpdatedAt?: Date;
  CreatedAt?: Date;
  FailureReason?: string;
  LatestRecommenderUpdate?: RecommenderUpdate;
  ActiveRecommenderVersionName?: string;
  TrainingMetrics?: TrainingMetrics[];
  Tags?: { [key: string]: string | undefined };
}
const GetRecommenderResponse = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<GetRecommenderResponse>;
export interface GetRecommenderFilterRequest {
  DomainName: string;
  RecommenderFilterName: string;
}
const GetRecommenderFilterRequest = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<GetRecommenderFilterRequest>;
export type RecommenderFilterStatus =
  | "ACTIVE"
  | "PENDING"
  | "IN_PROGRESS"
  | "FAILED"
  | "DELETING"
  | (string & {});
const RecommenderFilterStatus = S.String;

export interface GetRecommenderFilterResponse {
  RecommenderFilterName: string;
  RecommenderFilterExpression: string | redacted.Redacted<string>;
  RecommenderSchemaName?: string;
  CreatedAt: Date;
  Status: RecommenderFilterStatus;
  Description?: string | redacted.Redacted<string>;
  FailureReason?: string;
  Tags: { [key: string]: string | undefined };
}
const GetRecommenderFilterResponse = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<GetRecommenderFilterResponse>;
export interface GetRecommenderSchemaRequest {
  DomainName: string;
  RecommenderSchemaName: string;
}
const GetRecommenderSchemaRequest = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<GetRecommenderSchemaRequest>;
export interface GetRecommenderSchemaResponse {
  RecommenderSchemaName: string;
  Fields: { [key: string]: RecommenderSchemaField[] | undefined };
  CreatedAt: Date;
  Status: RecommenderSchemaStatus;
}
const GetRecommenderSchemaResponse = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<GetRecommenderSchemaResponse>;
export interface GetSegmentDefinitionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
}
const GetSegmentDefinitionRequest = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<GetSegmentDefinitionRequest>;
export type SegmentType = "CLASSIC" | "ENHANCED" | (string & {});
const SegmentType = S.String;

export interface GetSegmentDefinitionResponse {
  SegmentDefinitionName?: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  SegmentGroups?: SegmentGroup;
  SegmentSort?: SegmentSort;
  SegmentDefinitionArn: string;
  CreatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
  SegmentSqlQuery?: string | redacted.Redacted<string>;
  SegmentType?: SegmentType;
}
const GetSegmentDefinitionResponse = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<GetSegmentDefinitionResponse>;
export interface GetSegmentEstimateRequest {
  DomainName: string;
  EstimateId: string;
}
const GetSegmentEstimateRequest = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<GetSegmentEstimateRequest>;
export type EstimateStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | (string & {});
const EstimateStatus = S.String;

export interface GetSegmentEstimateResponse {
  DomainName?: string;
  EstimateId?: string;
  Status?: EstimateStatus;
  Estimate?: string;
  Message?: string;
  StatusCode?: number;
}
const GetSegmentEstimateResponse = /*@__PURE__*/ __L.at(
  __c31,
  6,
) as any as S.Schema<GetSegmentEstimateResponse>;
export type ProfileIds = string[];
const ProfileIds = RequestValueList as any as S.Schema<ProfileIds>;
export interface GetSegmentMembershipRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  ProfileIds: string[];
}
const GetSegmentMembershipRequest = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<GetSegmentMembershipRequest>;
export type ProfileId = string;
export type QueryResult = "PRESENT" | "ABSENT" | (string & {});
const QueryResult = S.String;

export interface ProfileQueryResult {
  ProfileId: string;
  QueryResult: QueryResult;
  Profile?: Profile;
}
const ProfileQueryResult = /*@__PURE__*/ __L.at(__c32, 0) as any as S.Schema<ProfileQueryResult>;
export type Profiles = ProfileQueryResult[];
const Profiles = /*@__PURE__*/ __L.at(__c32, 1);
export type GetSegmentMembershipMessage = string;
export type GetSegmentMembershipStatus = number;
export interface ProfileQueryFailures {
  ProfileId: string;
  Message: string;
  Status?: number;
}
const ProfileQueryFailures = /*@__PURE__*/ __L.at(
  __c32,
  2,
) as any as S.Schema<ProfileQueryFailures>;
export type Failures = ProfileQueryFailures[];
const Failures = /*@__PURE__*/ __L.at(__c32, 3);
export interface GetSegmentMembershipResponse {
  SegmentDefinitionName?: string;
  Profiles?: ProfileQueryResult[];
  Failures?: ProfileQueryFailures[];
  LastComputedAt?: Date;
}
const GetSegmentMembershipResponse = /*@__PURE__*/ __L.at(
  __c32,
  4,
) as any as S.Schema<GetSegmentMembershipResponse>;
export interface GetSegmentSnapshotRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  SnapshotId: string;
}
const GetSegmentSnapshotRequest = /*@__PURE__*/ __L.at(
  __c32,
  5,
) as any as S.Schema<GetSegmentSnapshotRequest>;
export type SegmentSnapshotStatus = "COMPLETED" | "IN_PROGRESS" | "FAILED" | (string & {});
const SegmentSnapshotStatus = S.String;

export interface GetSegmentSnapshotResponse {
  SnapshotId: string;
  Status: SegmentSnapshotStatus;
  StatusMessage?: string;
  DataFormat: DataFormat;
  EncryptionKey?: string;
  RoleArn?: string;
  DestinationUri?: string;
}
const GetSegmentSnapshotResponse = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<GetSegmentSnapshotResponse>;
export interface GetSegmentSubscriptionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
}
const GetSegmentSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<GetSegmentSubscriptionRequest>;
export type SegmentSubscriptionStatus =
  | "STARTING"
  | "RUNNING"
  | "STOPPED"
  | "FAILED"
  | (string & {});
const SegmentSubscriptionStatus = S.String;

export type IntervalValue = number;
export type ScheduleConfigurationUnit = "HOURLY" | (string & {});
const ScheduleConfigurationUnit = S.String;

export interface ScheduleConfiguration {
  Interval: number;
  Unit?: ScheduleConfigurationUnit;
}
const ScheduleConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<ScheduleConfiguration>;
export interface ScheduledExecutions {
  NextExecutedAt?: Date;
  LastExecutedAt?: Date;
}
const ScheduledExecutions = /*@__PURE__*/ __L.at(__c33, 1) as any as S.Schema<ScheduledExecutions>;
export interface GetSegmentSubscriptionResponse {
  Status?: SegmentSubscriptionStatus;
  Message?: string;
  ScheduleConfiguration?: ScheduleConfiguration;
  ScheduledExecutions?: ScheduledExecutions;
  StartedAt?: Date;
  LastUpdatedAt?: Date;
}
const GetSegmentSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<GetSegmentSubscriptionResponse>;
export type MatchType = "RULE_BASED_MATCHING" | "ML_BASED_MATCHING" | (string & {});
const MatchType = S.String;

export interface GetSimilarProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  MatchType: MatchType;
  SearchKey: string;
  SearchValue: string;
}
const GetSimilarProfilesRequest = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<GetSimilarProfilesRequest>;
export type RuleLevel = number;
export interface GetSimilarProfilesResponse {
  ProfileIds?: string[];
  MatchId?: string;
  MatchType?: MatchType;
  RuleLevel?: number;
  ConfidenceScore?: number;
  NextToken?: string;
}
const GetSimilarProfilesResponse = /*@__PURE__*/ __L.at(
  __c33,
  4,
) as any as S.Schema<GetSimilarProfilesResponse>;
export interface GetStreamForSegmentsRequest {
  DomainName: string;
}
const GetStreamForSegmentsRequest = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<GetStreamForSegmentsRequest>;
export type EventSubscriptionSegmentStatus =
  | "STARTING"
  | "RUNNING"
  | "STOPPED"
  | "FAILED"
  | (string & {});
const EventSubscriptionSegmentStatus = S.String;

export interface AssociatedSegment {
  SegmentName?: string;
  Status?: EventSubscriptionSegmentStatus;
  Message?: string;
}
const AssociatedSegment = /*@__PURE__*/ __L.at(__c33, 6) as any as S.Schema<AssociatedSegment>;
export type AssociatedSegmentsList = AssociatedSegment[];
const AssociatedSegmentsList = /*@__PURE__*/ __L.at(__c33, 7);
export type EventSubscriptionState = "RUNNING" | "UNHEALTHY" | "STOPPED" | (string & {});
const EventSubscriptionState = S.String;

export interface GetStreamForSegmentsResponse {
  AssociatedAt?: Date;
  AssociatedSegments?: AssociatedSegment[];
  DomainName?: string;
  DestinationArn?: string;
  DestinationRoleArn?: string;
  State?: EventSubscriptionState;
  DisassociatedAt?: Date;
  FailureReason?: string;
}
const GetStreamForSegmentsResponse = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<GetStreamForSegmentsResponse>;
export interface GetUploadJobRequest {
  DomainName: string;
  JobId: string;
}
const GetUploadJobRequest = /*@__PURE__*/ __L.at(__c34, 1) as any as S.Schema<GetUploadJobRequest>;
export type UploadJobStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "PARTIALLY_SUCCEEDED"
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPED"
  | (string & {});
const UploadJobStatus = S.String;

export type StatusReason = "VALIDATION_FAILURE" | "INTERNAL_FAILURE" | (string & {});
const StatusReason = S.String;

export interface ResultsSummary {
  UpdatedRecords?: number;
  CreatedRecords?: number;
  FailedRecords?: number;
}
const ResultsSummary = /*@__PURE__*/ __L.at(__c34, 2) as any as S.Schema<ResultsSummary>;
export interface GetUploadJobResponse {
  JobId?: string;
  DisplayName?: string;
  Status?: UploadJobStatus;
  StatusReason?: StatusReason;
  CreatedAt?: Date;
  CompletedAt?: Date;
  Fields?: { [key: string]: ObjectTypeField | undefined };
  UniqueKey?: string;
  ResultsSummary?: ResultsSummary;
  DataExpiry?: number;
}
const GetUploadJobResponse = /*@__PURE__*/ __L.at(
  __c34,
  3,
) as any as S.Schema<GetUploadJobResponse>;
export interface GetUploadJobPathRequest {
  DomainName: string;
  JobId: string;
}
const GetUploadJobPathRequest = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<GetUploadJobPathRequest>;
export interface GetUploadJobPathResponse {
  Url: string;
  ClientToken?: string;
  ValidUntil?: Date;
}
const GetUploadJobPathResponse = /*@__PURE__*/ __L.at(
  __c34,
  5,
) as any as S.Schema<GetUploadJobPathResponse>;
export interface GetWorkflowRequest {
  DomainName: string;
  WorkflowId: string;
}
const GetWorkflowRequest = /*@__PURE__*/ __L.at(__c34, 6) as any as S.Schema<GetWorkflowRequest>;
export type Status =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETE"
  | "FAILED"
  | "SPLIT"
  | "RETRY"
  | "CANCELLED"
  | (string & {});
const Status = S.String;

export interface AppflowIntegrationWorkflowAttributes {
  SourceConnectorType: SourceConnectorType;
  ConnectorProfileName: string;
  RoleArn?: string;
}
const AppflowIntegrationWorkflowAttributes = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<AppflowIntegrationWorkflowAttributes>;
export interface WorkflowAttributes {
  AppflowIntegration?: AppflowIntegrationWorkflowAttributes;
}
const WorkflowAttributes = /*@__PURE__*/ __L.at(__c35, 0) as any as S.Schema<WorkflowAttributes>;
export interface AppflowIntegrationWorkflowMetrics {
  RecordsProcessed: number;
  StepsCompleted: number;
  TotalSteps: number;
}
const AppflowIntegrationWorkflowMetrics = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<AppflowIntegrationWorkflowMetrics>;
export interface WorkflowMetrics {
  AppflowIntegration?: AppflowIntegrationWorkflowMetrics;
}
const WorkflowMetrics = /*@__PURE__*/ __L.at(__c35, 2) as any as S.Schema<WorkflowMetrics>;
export interface GetWorkflowResponse {
  WorkflowId?: string;
  WorkflowType?: WorkflowType;
  Status?: Status;
  ErrorDescription?: string;
  StartDate?: Date;
  LastUpdatedAt?: Date;
  Attributes?: WorkflowAttributes;
  Metrics?: WorkflowMetrics;
}
const GetWorkflowResponse = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<GetWorkflowResponse>;
export interface GetWorkflowStepsRequest {
  DomainName: string;
  WorkflowId: string;
  NextToken?: string;
  MaxResults?: number;
}
const GetWorkflowStepsRequest = /*@__PURE__*/ __L.at(
  __c35,
  4,
) as any as S.Schema<GetWorkflowStepsRequest>;
export interface AppflowIntegrationWorkflowStep {
  FlowName: string;
  Status: Status;
  ExecutionMessage: string;
  RecordsProcessed: number;
  BatchRecordsStartTime: string;
  BatchRecordsEndTime: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
}
const AppflowIntegrationWorkflowStep = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<AppflowIntegrationWorkflowStep>;
export interface WorkflowStepItem {
  AppflowIntegration?: AppflowIntegrationWorkflowStep;
}
const WorkflowStepItem = /*@__PURE__*/ __L.at(__c35, 6) as any as S.Schema<WorkflowStepItem>;
export type WorkflowStepsList = WorkflowStepItem[];
const WorkflowStepsList = /*@__PURE__*/ __L.at(__c35, 7);
export interface GetWorkflowStepsResponse {
  WorkflowId?: string;
  WorkflowType?: WorkflowType;
  Items?: WorkflowStepItem[];
  NextToken?: string;
}
const GetWorkflowStepsResponse = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<GetWorkflowStepsResponse>;
export interface ListAccountIntegrationsRequest {
  Uri: string;
  NextToken?: string;
  MaxResults?: number;
  IncludeHidden?: boolean;
}
const ListAccountIntegrationsRequest = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<ListAccountIntegrationsRequest>;
export interface ListIntegrationItem {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
  ObjectTypeNames?: { [key: string]: string | undefined };
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: string[];
  Scope?: Scope;
}
const ListIntegrationItem = GetIntegrationResponse as any as S.Schema<ListIntegrationItem>;
export type IntegrationList = ListIntegrationItem[];
const IntegrationList = /*@__PURE__*/ __L.at(__c36, 2);
export interface ListAccountIntegrationsResponse {
  Items?: ListIntegrationItem[];
  NextToken?: string;
}
const ListAccountIntegrationsResponse = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<ListAccountIntegrationsResponse>;
export interface ListCalculatedAttributeDefinitionsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListCalculatedAttributeDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<ListCalculatedAttributeDefinitionsRequest>;
export interface ListCalculatedAttributeDefinitionItem {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Tags?: { [key: string]: string | undefined };
}
const ListCalculatedAttributeDefinitionItem = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<ListCalculatedAttributeDefinitionItem>;
export type CalculatedAttributeDefinitionsList = ListCalculatedAttributeDefinitionItem[];
const CalculatedAttributeDefinitionsList = /*@__PURE__*/ __L.at(__c36, 6);
export interface ListCalculatedAttributeDefinitionsResponse {
  Items?: ListCalculatedAttributeDefinitionItem[];
  NextToken?: string;
}
const ListCalculatedAttributeDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<ListCalculatedAttributeDefinitionsResponse>;
export interface ListCalculatedAttributesForProfileRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ProfileId: string;
}
const ListCalculatedAttributesForProfileRequest = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<ListCalculatedAttributesForProfileRequest>;
export interface ListCalculatedAttributeForProfileItem {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  IsDataPartial?: string;
  Value?: string;
  LastObjectTimestamp?: Date;
}
const ListCalculatedAttributeForProfileItem =
  GetCalculatedAttributeForProfileResponse as any as S.Schema<ListCalculatedAttributeForProfileItem>;
export type CalculatedAttributesForProfileList = ListCalculatedAttributeForProfileItem[];
const CalculatedAttributesForProfileList = /*@__PURE__*/ __L.at(__c37, 1);
export interface ListCalculatedAttributesForProfileResponse {
  Items?: ListCalculatedAttributeForProfileItem[];
  NextToken?: string;
}
const ListCalculatedAttributesForProfileResponse = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<ListCalculatedAttributesForProfileResponse>;
export interface ListDomainLayoutsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListDomainLayoutsRequest = /*@__PURE__*/ __L.at(
  __c37,
  3,
) as any as S.Schema<ListDomainLayoutsRequest>;
export interface LayoutItem {
  LayoutDefinitionName: string;
  Description: string | redacted.Redacted<string>;
  DisplayName: string;
  IsDefault?: boolean;
  LayoutType: LayoutType;
  Tags?: { [key: string]: string | undefined };
  CreatedAt: Date;
  LastUpdatedAt: Date;
}
const LayoutItem = /*@__PURE__*/ __L.at(__c37, 4) as any as S.Schema<LayoutItem>;
export type LayoutList = LayoutItem[];
const LayoutList = /*@__PURE__*/ __L.at(__c37, 5);
export interface ListDomainLayoutsResponse {
  Items?: LayoutItem[];
  NextToken?: string;
}
const ListDomainLayoutsResponse = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<ListDomainLayoutsResponse>;
export interface ListDomainObjectTypesRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListDomainObjectTypesRequest = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<ListDomainObjectTypesRequest>;
export interface DomainObjectTypesListItem {
  ObjectTypeName: string;
  Description?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const DomainObjectTypesListItem = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<DomainObjectTypesListItem>;
export type DomainObjectTypesList = DomainObjectTypesListItem[];
const DomainObjectTypesList = /*@__PURE__*/ __L.at(__c38, 1);
export interface ListDomainObjectTypesResponse {
  Items?: DomainObjectTypesListItem[];
  NextToken?: string;
}
const ListDomainObjectTypesResponse = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<ListDomainObjectTypesResponse>;
export interface ListDomainsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListDomainsRequest = /*@__PURE__*/ __L.at(__c38, 3) as any as S.Schema<ListDomainsRequest>;
export interface ListDomainItem {
  DomainName: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
}
const ListDomainItem = /*@__PURE__*/ __L.at(__c38, 4) as any as S.Schema<ListDomainItem>;
export type DomainList = ListDomainItem[];
const DomainList = /*@__PURE__*/ __L.at(__c38, 5);
export interface ListDomainsResponse {
  Items?: ListDomainItem[];
  NextToken?: string;
}
const ListDomainsResponse = /*@__PURE__*/ __L.at(__c38, 6) as any as S.Schema<ListDomainsResponse>;
export interface ListEventStreamsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListEventStreamsRequest = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<ListEventStreamsRequest>;
export interface DestinationSummary {
  Uri: string;
  Status: EventStreamDestinationStatus;
  UnhealthySince?: Date;
}
const DestinationSummary = /*@__PURE__*/ __L.at(__c39, 0) as any as S.Schema<DestinationSummary>;
export interface EventStreamSummary {
  DomainName: string;
  EventStreamName: string;
  EventStreamArn: string;
  State: EventStreamState;
  StoppedSince?: Date;
  DestinationSummary?: DestinationSummary;
  Tags?: { [key: string]: string | undefined };
}
const EventStreamSummary = /*@__PURE__*/ __L.at(__c39, 1) as any as S.Schema<EventStreamSummary>;
export type EventStreamSummaryList = EventStreamSummary[];
const EventStreamSummaryList = /*@__PURE__*/ __L.at(__c39, 2);
export interface ListEventStreamsResponse {
  Items?: EventStreamSummary[];
  NextToken?: string;
}
const ListEventStreamsResponse = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<ListEventStreamsResponse>;
export interface ListEventTriggersRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListEventTriggersRequest = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<ListEventTriggersRequest>;
export interface EventTriggerSummaryItem {
  ObjectTypeName?: string;
  EventTriggerName?: string;
  Description?: string;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const EventTriggerSummaryItem = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<EventTriggerSummaryItem>;
export type EventTriggerSummaryList = EventTriggerSummaryItem[];
const EventTriggerSummaryList = /*@__PURE__*/ __L.at(__c39, 6);
export interface ListEventTriggersResponse {
  Items?: EventTriggerSummaryItem[];
  NextToken?: string;
}
const ListEventTriggersResponse = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<ListEventTriggersResponse>;
export interface ListIdentityResolutionJobsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListIdentityResolutionJobsRequest = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<ListIdentityResolutionJobsRequest>;
export interface IdentityResolutionJob {
  DomainName?: string;
  JobId?: string;
  Status?: IdentityResolutionJobStatus;
  JobStartTime?: Date;
  JobEndTime?: Date;
  JobStats?: JobStats;
  ExportingLocation?: ExportingLocation;
  Message?: string;
}
const IdentityResolutionJob = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<IdentityResolutionJob>;
export type IdentityResolutionJobsList = IdentityResolutionJob[];
const IdentityResolutionJobsList = /*@__PURE__*/ __L.at(__c40, 2);
export interface ListIdentityResolutionJobsResponse {
  IdentityResolutionJobsList?: IdentityResolutionJob[];
  NextToken?: string;
}
const ListIdentityResolutionJobsResponse = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<ListIdentityResolutionJobsResponse>;
export interface ListIntegrationsRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
  IncludeHidden?: boolean;
}
const ListIntegrationsRequest = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<ListIntegrationsRequest>;
export interface ListIntegrationsResponse {
  Items?: ListIntegrationItem[];
  NextToken?: string;
}
const ListIntegrationsResponse = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<ListIntegrationsResponse>;
export interface ListObjectTypeAttributesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ObjectTypeName: string;
}
const ListObjectTypeAttributesRequest = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<ListObjectTypeAttributesRequest>;
export interface ListObjectTypeAttributeItem {
  AttributeName: string;
  LastUpdatedAt: Date;
}
const ListObjectTypeAttributeItem = /*@__PURE__*/ __L.at(
  __c40,
  7,
) as any as S.Schema<ListObjectTypeAttributeItem>;
export type ListObjectTypeAttributesList = ListObjectTypeAttributeItem[];
const ListObjectTypeAttributesList = /*@__PURE__*/ __L.at(__c41, 0);
export interface ListObjectTypeAttributesResponse {
  Items?: ListObjectTypeAttributeItem[];
  NextToken?: string;
}
const ListObjectTypeAttributesResponse = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<ListObjectTypeAttributesResponse>;
export interface ListObjectTypeAttributeValuesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ObjectTypeName: string;
  AttributeName: string;
}
const ListObjectTypeAttributeValuesRequest = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<ListObjectTypeAttributeValuesRequest>;
export interface ListObjectTypeAttributeValuesItem {
  Value: string | redacted.Redacted<string>;
  LastUpdatedAt: Date;
}
const ListObjectTypeAttributeValuesItem = /*@__PURE__*/ __L.at(
  __c41,
  3,
) as any as S.Schema<ListObjectTypeAttributeValuesItem>;
export type ListObjectTypeAttributeValuesList = ListObjectTypeAttributeValuesItem[];
const ListObjectTypeAttributeValuesList = /*@__PURE__*/ __L.at(__c41, 4);
export interface ListObjectTypeAttributeValuesResponse {
  Items?: ListObjectTypeAttributeValuesItem[];
  NextToken?: string;
}
const ListObjectTypeAttributeValuesResponse = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<ListObjectTypeAttributeValuesResponse>;
export interface ProfileAttributeValuesRequest {
  DomainName: string;
  AttributeName: string;
}
const ProfileAttributeValuesRequest = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<ProfileAttributeValuesRequest>;
export interface AttributeValueItem {
  Value?: string;
}
const AttributeValueItem = /*@__PURE__*/ __L.at(__c41, 7) as any as S.Schema<AttributeValueItem>;
export type AttributeValueItemList = AttributeValueItem[];
const AttributeValueItemList = /*@__PURE__*/ __L.at(__c42, 0);
export interface ProfileAttributeValuesResponse {
  DomainName?: string;
  AttributeName?: string;
  Items?: AttributeValueItem[];
  StatusCode?: number;
}
const ProfileAttributeValuesResponse = /*@__PURE__*/ __L.at(
  __c42,
  1,
) as any as S.Schema<ProfileAttributeValuesResponse>;
export interface ListProfileHistoryRecordsRequest {
  DomainName: string;
  ProfileId: string;
  ObjectTypeName?: string;
  NextToken?: string;
  MaxResults?: number;
  ActionType?: ActionType;
  PerformedBy?: string;
}
const ListProfileHistoryRecordsRequest = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<ListProfileHistoryRecordsRequest>;
export interface ProfileHistoryRecord {
  Id: string;
  ObjectTypeName: string;
  CreatedAt: Date;
  LastUpdatedAt?: Date;
  ActionType: ActionType;
  ProfileObjectUniqueKey?: string;
  PerformedBy?: string;
}
const ProfileHistoryRecord = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<ProfileHistoryRecord>;
export type ProfileHistoryRecords = ProfileHistoryRecord[];
const ProfileHistoryRecords = /*@__PURE__*/ __L.at(__c42, 4);
export interface ListProfileHistoryRecordsResponse {
  ProfileHistoryRecords?: ProfileHistoryRecord[];
  NextToken?: string;
}
const ListProfileHistoryRecordsResponse = /*@__PURE__*/ __L.at(
  __c42,
  5,
) as any as S.Schema<ListProfileHistoryRecordsResponse>;
export interface ObjectFilter {
  KeyName: string;
  Values: string[];
}
const ObjectFilter = /*@__PURE__*/ __L.at(__c42, 6) as any as S.Schema<ObjectFilter>;
export interface ListProfileObjectsRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  ObjectTypeName: string;
  ProfileId: string;
  ObjectFilter?: ObjectFilter;
}
const ListProfileObjectsRequest = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<ListProfileObjectsRequest>;
export interface ListProfileObjectsItem {
  ObjectTypeName?: string;
  ProfileObjectUniqueKey?: string;
  Object?: string | redacted.Redacted<string>;
}
const ListProfileObjectsItem = /*@__PURE__*/ __L.at(
  __c43,
  0,
) as any as S.Schema<ListProfileObjectsItem>;
export type ProfileObjectList = ListProfileObjectsItem[];
const ProfileObjectList = /*@__PURE__*/ __L.at(__c43, 1);
export interface ListProfileObjectsResponse {
  Items?: ListProfileObjectsItem[];
  NextToken?: string;
}
const ListProfileObjectsResponse = /*@__PURE__*/ __L.at(
  __c43,
  2,
) as any as S.Schema<ListProfileObjectsResponse>;
export interface ListProfileObjectTypesRequest {
  DomainName: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListProfileObjectTypesRequest = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<ListProfileObjectTypesRequest>;
export interface ListProfileObjectTypeItem {
  ObjectTypeName: string;
  Description: string;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  MaxProfileObjectCount?: number;
  MaxAvailableProfileObjectCount?: number;
  SourcePriority?: number;
  Tags?: { [key: string]: string | undefined };
}
const ListProfileObjectTypeItem = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<ListProfileObjectTypeItem>;
export type ProfileObjectTypeList = ListProfileObjectTypeItem[];
const ProfileObjectTypeList = /*@__PURE__*/ __L.at(__c43, 5);
export interface ListProfileObjectTypesResponse {
  Items?: ListProfileObjectTypeItem[];
  NextToken?: string;
}
const ListProfileObjectTypesResponse = /*@__PURE__*/ __L.at(
  __c43,
  6,
) as any as S.Schema<ListProfileObjectTypesResponse>;
export interface ListProfileObjectTypeTemplatesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListProfileObjectTypeTemplatesRequest = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<ListProfileObjectTypeTemplatesRequest>;
export interface ListProfileObjectTypeTemplateItem {
  TemplateId?: string;
  SourceName?: string;
  SourceObject?: string;
}
const ListProfileObjectTypeTemplateItem = /*@__PURE__*/ __L.at(
  __c44,
  0,
) as any as S.Schema<ListProfileObjectTypeTemplateItem>;
export type ProfileObjectTypeTemplateList = ListProfileObjectTypeTemplateItem[];
const ProfileObjectTypeTemplateList = /*@__PURE__*/ __L.at(__c44, 1);
export interface ListProfileObjectTypeTemplatesResponse {
  Items?: ListProfileObjectTypeTemplateItem[];
  NextToken?: string;
}
const ListProfileObjectTypeTemplatesResponse = /*@__PURE__*/ __L.at(
  __c44,
  2,
) as any as S.Schema<ListProfileObjectTypeTemplatesResponse>;
export interface ListRecommenderFiltersRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListRecommenderFiltersRequest = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<ListRecommenderFiltersRequest>;
export interface RecommenderFilterSummary {
  RecommenderFilterName?: string;
  RecommenderSchemaName?: string;
  RecommenderFilterExpression?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  Description?: string | redacted.Redacted<string>;
  Status?: RecommenderFilterStatus;
  FailureReason?: string;
  Tags?: { [key: string]: string | undefined };
}
const RecommenderFilterSummary = /*@__PURE__*/ __L.at(
  __c44,
  4,
) as any as S.Schema<RecommenderFilterSummary>;
export type RecommenderFilterSummaryList = RecommenderFilterSummary[];
const RecommenderFilterSummaryList = /*@__PURE__*/ __L.at(__c44, 5);
export interface ListRecommenderFiltersResponse {
  NextToken?: string;
  RecommenderFilters?: RecommenderFilterSummary[];
}
const ListRecommenderFiltersResponse = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<ListRecommenderFiltersResponse>;
export type ListRecommenderRecipesRequestMaxResultsInteger = number;
export interface ListRecommenderRecipesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListRecommenderRecipesRequest = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<ListRecommenderRecipesRequest>;
export interface RecommenderRecipe {
  name?: RecommenderRecipeName;
  description?: string;
}
const RecommenderRecipe = /*@__PURE__*/ __L.at(__c45, 0) as any as S.Schema<RecommenderRecipe>;
export type RecommenderRecipesList = RecommenderRecipe[];
const RecommenderRecipesList = /*@__PURE__*/ __L.at(__c45, 1);
export interface ListRecommenderRecipesResponse {
  NextToken?: string;
  RecommenderRecipes?: RecommenderRecipe[];
}
const ListRecommenderRecipesResponse = /*@__PURE__*/ __L.at(
  __c45,
  2,
) as any as S.Schema<ListRecommenderRecipesResponse>;
export type ListRecommendersRequestMaxResultsInteger = number;
export interface ListRecommendersRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListRecommendersRequest = /*@__PURE__*/ __L.at(
  __c45,
  3,
) as any as S.Schema<ListRecommendersRequest>;
export interface RecommenderSummary {
  RecommenderName?: string;
  RecipeName?: RecommenderRecipeName;
  RecommenderSchemaName?: string;
  RecommenderConfig?: RecommenderConfig;
  CreatedAt?: Date;
  Description?: string | redacted.Redacted<string>;
  Status?: RecommenderStatus;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
  FailureReason?: string;
  LatestRecommenderUpdate?: RecommenderUpdate;
}
const RecommenderSummary = /*@__PURE__*/ __L.at(__c45, 4) as any as S.Schema<RecommenderSummary>;
export type RecommenderSummaryList = RecommenderSummary[];
const RecommenderSummaryList = /*@__PURE__*/ __L.at(__c45, 5);
export interface ListRecommendersResponse {
  NextToken?: string;
  Recommenders?: RecommenderSummary[];
}
const ListRecommendersResponse = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<ListRecommendersResponse>;
export interface ListRecommenderSchemasRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListRecommenderSchemasRequest = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<ListRecommenderSchemasRequest>;
export interface RecommenderSchemaSummary {
  RecommenderSchemaName: string;
  Fields: { [key: string]: RecommenderSchemaField[] | undefined };
  CreatedAt: Date;
  Status: RecommenderSchemaStatus;
}
const RecommenderSchemaSummary = /*@__PURE__*/ __L.at(
  __c46,
  0,
) as any as S.Schema<RecommenderSchemaSummary>;
export type RecommenderSchemaSummaryList = RecommenderSchemaSummary[];
const RecommenderSchemaSummaryList = /*@__PURE__*/ __L.at(__c46, 1);
export interface ListRecommenderSchemasResponse {
  NextToken?: string;
  RecommenderSchemas?: RecommenderSchemaSummary[];
}
const ListRecommenderSchemasResponse = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<ListRecommenderSchemasResponse>;
export interface ListRuleBasedMatchesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
}
const ListRuleBasedMatchesRequest = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<ListRuleBasedMatchesRequest>;
export type MatchIdList = string[];
const MatchIdList = RequestValueList as any as S.Schema<MatchIdList>;
export interface ListRuleBasedMatchesResponse {
  MatchIds?: string[];
  NextToken?: string;
}
const ListRuleBasedMatchesResponse = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<ListRuleBasedMatchesResponse>;
export interface ListSegmentDefinitionsRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListSegmentDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<ListSegmentDefinitionsRequest>;
export interface SegmentDefinitionItem {
  SegmentDefinitionName?: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  SegmentDefinitionArn?: string;
  CreatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
  SegmentType?: SegmentType;
}
const SegmentDefinitionItem = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<SegmentDefinitionItem>;
export type SegmentDefinitionsList = SegmentDefinitionItem[];
const SegmentDefinitionsList = /*@__PURE__*/ __L.at(__c46, 7);
export interface ListSegmentDefinitionsResponse {
  NextToken?: string;
  Items?: SegmentDefinitionItem[];
}
const ListSegmentDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c47,
  0,
) as any as S.Schema<ListSegmentDefinitionsResponse>;
export interface ListSegmentSubscriptionEventsRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListSegmentSubscriptionEventsRequest = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<ListSegmentSubscriptionEventsRequest>;
export type SubscriptionEventType = "LIVE" | "SCHEDULE" | (string & {});
const SubscriptionEventType = S.String;

export type SubscriptionEvent = "JOINED" | "LEFT" | (string & {});
const SubscriptionEvent = S.String;

export interface SubscriptionEventItem {
  ProfileId?: string;
  UpdatedAt?: Date;
  EventType?: SubscriptionEventType;
  Event?: SubscriptionEvent;
}
const SubscriptionEventItem = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<SubscriptionEventItem>;
export type SubscriptionEventsList = SubscriptionEventItem[];
const SubscriptionEventsList = /*@__PURE__*/ __L.at(__c47, 3);
export interface ListSegmentSubscriptionEventsResponse {
  Events?: SubscriptionEventItem[];
  NextToken?: string;
}
const ListSegmentSubscriptionEventsResponse = /*@__PURE__*/ __L.at(
  __c47,
  4,
) as any as S.Schema<ListSegmentSubscriptionEventsResponse>;
export type TagArn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c47,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListUploadJobsRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListUploadJobsRequest = /*@__PURE__*/ __L.at(
  __c47,
  7,
) as any as S.Schema<ListUploadJobsRequest>;
export interface UploadJobItem {
  JobId?: string;
  DisplayName?: string;
  Status?: UploadJobStatus;
  StatusReason?: StatusReason;
  CreatedAt?: Date;
  CompletedAt?: Date;
  DataExpiry?: number;
}
const UploadJobItem = /*@__PURE__*/ __L.at(__c48, 0) as any as S.Schema<UploadJobItem>;
export type UploadJobsList = UploadJobItem[];
const UploadJobsList = /*@__PURE__*/ __L.at(__c48, 1);
export interface ListUploadJobsResponse {
  NextToken?: string;
  Items?: UploadJobItem[];
}
const ListUploadJobsResponse = /*@__PURE__*/ __L.at(
  __c48,
  2,
) as any as S.Schema<ListUploadJobsResponse>;
export interface ListWorkflowsRequest {
  DomainName: string;
  WorkflowType?: WorkflowType;
  Status?: Status;
  QueryStartDate?: Date;
  QueryEndDate?: Date;
  NextToken?: string;
  MaxResults?: number;
}
const ListWorkflowsRequest = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<ListWorkflowsRequest>;
export interface ListWorkflowsItem {
  WorkflowType: WorkflowType;
  WorkflowId: string;
  Status: Status;
  StatusDescription: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
}
const ListWorkflowsItem = /*@__PURE__*/ __L.at(__c48, 4) as any as S.Schema<ListWorkflowsItem>;
export type WorkflowList = ListWorkflowsItem[];
const WorkflowList = /*@__PURE__*/ __L.at(__c48, 5);
export interface ListWorkflowsResponse {
  Items?: ListWorkflowsItem[];
  NextToken?: string;
}
const ListWorkflowsResponse = /*@__PURE__*/ __L.at(
  __c48,
  6,
) as any as S.Schema<ListWorkflowsResponse>;
export type ProfileIdToBeMergedList = string[];
const ProfileIdToBeMergedList = RequestValueList as any as S.Schema<ProfileIdToBeMergedList>;
export type AttributeSourceIdMap = { [key: string]: string | undefined };
const AttributeSourceIdMap = ObjectTypeNames as any as S.Schema<AttributeSourceIdMap>;
export interface FieldSourceProfileIds {
  AccountNumber?: string;
  AdditionalInformation?: string;
  PartyType?: string;
  BusinessName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  BirthDate?: string;
  Gender?: string;
  PhoneNumber?: string;
  MobilePhoneNumber?: string;
  HomePhoneNumber?: string;
  BusinessPhoneNumber?: string;
  EmailAddress?: string;
  PersonalEmailAddress?: string;
  BusinessEmailAddress?: string;
  Address?: string;
  ShippingAddress?: string;
  MailingAddress?: string;
  BillingAddress?: string;
  Attributes?: { [key: string]: string | undefined };
  ProfileType?: string;
  EngagementPreferences?: string;
}
const FieldSourceProfileIds = /*@__PURE__*/ __L.at(
  __c48,
  7,
) as any as S.Schema<FieldSourceProfileIds>;
export interface MergeProfilesRequest {
  DomainName: string;
  MainProfileId: string;
  ProfileIdsToBeMerged: string[];
  FieldSourceProfileIds?: FieldSourceProfileIds;
}
const MergeProfilesRequest = /*@__PURE__*/ __L.at(
  __c49,
  0,
) as any as S.Schema<MergeProfilesRequest>;
export interface MergeProfilesResponse {
  Message?: string;
}
const MergeProfilesResponse = DeleteProfileResponse as any as S.Schema<MergeProfilesResponse>;
export interface PutDomainObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
  Description?: string | redacted.Redacted<string>;
  EncryptionKey?: string;
  Fields: { [key: string]: DomainObjectTypeField | undefined };
  Tags?: { [key: string]: string | undefined };
}
const PutDomainObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c49,
  1,
) as any as S.Schema<PutDomainObjectTypeRequest>;
export interface PutDomainObjectTypeResponse {
  ObjectTypeName?: string;
  Description?: string | redacted.Redacted<string>;
  EncryptionKey?: string;
  Fields?: { [key: string]: DomainObjectTypeField | undefined };
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const PutDomainObjectTypeResponse = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<PutDomainObjectTypeResponse>;
export interface PutIntegrationRequest {
  DomainName: string;
  Uri?: string;
  ObjectTypeName?: string;
  ObjectTypeNames?: { [key: string]: string | undefined };
  Tags?: { [key: string]: string | undefined };
  FlowDefinition?: FlowDefinition;
  RoleArn?: string;
  EventTriggerNames?: string[];
  Scope?: Scope;
}
const PutIntegrationRequest = /*@__PURE__*/ __L.at(
  __c49,
  3,
) as any as S.Schema<PutIntegrationRequest>;
export interface PutIntegrationResponse {
  DomainName: string;
  Uri: string;
  ObjectTypeName?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
  ObjectTypeNames?: { [key: string]: string | undefined };
  WorkflowId?: string;
  IsUnstructured?: boolean;
  RoleArn?: string;
  EventTriggerNames?: string[];
  Scope?: Scope;
}
const PutIntegrationResponse = GetIntegrationResponse as any as S.Schema<PutIntegrationResponse>;
export interface PutProfileObjectRequest {
  ObjectTypeName: string;
  Object: string | redacted.Redacted<string>;
  DomainName: string;
}
const PutProfileObjectRequest = /*@__PURE__*/ __L.at(
  __c49,
  4,
) as any as S.Schema<PutProfileObjectRequest>;
export interface PutProfileObjectResponse {
  ProfileObjectUniqueKey?: string;
}
const PutProfileObjectResponse = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<PutProfileObjectResponse>;
export interface PutProfileObjectTypeRequest {
  DomainName: string;
  ObjectTypeName: string;
  Description: string | redacted.Redacted<string>;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxProfileObjectCount?: number;
  SourcePriority?: number;
  Fields?: { [key: string]: ObjectTypeField | undefined };
  Keys?: { [key: string]: ObjectTypeKey[] | undefined };
  Tags?: { [key: string]: string | undefined };
}
const PutProfileObjectTypeRequest = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<PutProfileObjectTypeRequest>;
export interface PutProfileObjectTypeResponse {
  ObjectTypeName: string;
  Description: string | redacted.Redacted<string>;
  TemplateId?: string;
  ExpirationDays?: number;
  EncryptionKey?: string;
  AllowProfileCreation?: boolean;
  SourceLastUpdatedTimestampFormat?: string;
  MaxProfileObjectCount?: number;
  MaxAvailableProfileObjectCount?: number;
  SourcePriority?: number;
  Fields?: { [key: string]: ObjectTypeField | undefined };
  Keys?: { [key: string]: ObjectTypeKey[] | undefined };
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const PutProfileObjectTypeResponse = /*@__PURE__*/ __L.at(
  __c49,
  7,
) as any as S.Schema<PutProfileObjectTypeResponse>;
export interface PutSegmentSubscriptionRequest {
  DomainName: string;
  SegmentDefinitionName: string;
  ScheduleConfiguration?: ScheduleConfiguration;
}
const PutSegmentSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c50,
  0,
) as any as S.Schema<PutSegmentSubscriptionRequest>;
export interface PutSegmentSubscriptionResponse {
  Status?: SegmentSubscriptionStatus;
  ScheduleConfiguration?: ScheduleConfiguration;
  StartedAt?: Date;
}
const PutSegmentSubscriptionResponse = /*@__PURE__*/ __L.at(
  __c50,
  1,
) as any as S.Schema<PutSegmentSubscriptionResponse>;
export interface AdditionalSearchKey {
  KeyName: string;
  Values: string[];
}
const AdditionalSearchKey = ObjectFilter as any as S.Schema<AdditionalSearchKey>;
export type AdditionalSearchKeysList = AdditionalSearchKey[];
const AdditionalSearchKeysList = /*@__PURE__*/ __L.at(__c50, 2);
export type LogicalOperator = "AND" | "OR" | (string & {});
const LogicalOperator = S.String;

export interface SearchProfilesRequest {
  NextToken?: string;
  MaxResults?: number;
  DomainName: string;
  KeyName: string;
  Values: string[];
  AdditionalSearchKeys?: AdditionalSearchKey[];
  LogicalOperator?: LogicalOperator;
}
const SearchProfilesRequest = /*@__PURE__*/ __L.at(
  __c50,
  3,
) as any as S.Schema<SearchProfilesRequest>;
export interface SearchProfilesResponse {
  Items?: Profile[];
  NextToken?: string;
}
const SearchProfilesResponse = /*@__PURE__*/ __L.at(
  __c50,
  4,
) as any as S.Schema<SearchProfilesResponse>;
export type KeyValuesList = string[];
const KeyValuesList = RequestValueList as any as S.Schema<KeyValuesList>;
export interface Recommender {
  Name: string;
  Filters?: RecommenderFilter[];
  PromotionalFilters?: RecommenderPromotionalFilter[];
}
const Recommender = /*@__PURE__*/ __L.at(__c50, 5) as any as S.Schema<Recommender>;
export interface RecommendationMetadata {
  Columns?: string[];
}
const RecommendationMetadata = /*@__PURE__*/ __L.at(
  __c50,
  6,
) as any as S.Schema<RecommendationMetadata>;
export interface SearchRecommendationsRequest {
  DomainName: string;
  KeyName: string;
  KeyValues: string[];
  Recommender: Recommender;
  CandidateIds?: string[];
  Context?: { [key: string]: string | undefined };
  Diversity?: RecommendationDiversityConfig;
  Metadata?: RecommendationMetadata;
  MaxRecommendations?: number;
}
const SearchRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c50,
  7,
) as any as S.Schema<SearchRecommendationsRequest>;
export interface SearchRecommendationsResponse {
  ProfileId?: string;
  Recommendations?: Recommendation[];
}
const SearchRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c51,
  0,
) as any as S.Schema<SearchRecommendationsResponse>;
export interface StartRecommenderRequest {
  DomainName: string;
  RecommenderName: string;
}
const StartRecommenderRequest = /*@__PURE__*/ __L.at(
  __c51,
  1,
) as any as S.Schema<StartRecommenderRequest>;
export interface StartRecommenderResponse {}
const StartRecommenderResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<StartRecommenderResponse>;
export interface StartUploadJobRequest {
  DomainName: string;
  JobId: string;
}
const StartUploadJobRequest = /*@__PURE__*/ __L.at(
  __c51,
  2,
) as any as S.Schema<StartUploadJobRequest>;
export interface StartUploadJobResponse {}
const StartUploadJobResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<StartUploadJobResponse>;
export interface StopRecommenderRequest {
  DomainName: string;
  RecommenderName: string;
}
const StopRecommenderRequest = /*@__PURE__*/ __L.at(
  __c51,
  3,
) as any as S.Schema<StopRecommenderRequest>;
export interface StopRecommenderResponse {}
const StopRecommenderResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<StopRecommenderResponse>;
export interface StopUploadJobRequest {
  DomainName: string;
  JobId: string;
}
const StopUploadJobRequest = /*@__PURE__*/ __L.at(
  __c51,
  4,
) as any as S.Schema<StopUploadJobRequest>;
export interface StopUploadJobResponse {}
const StopUploadJobResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<StopUploadJobResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c51, 5) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteDomainObjectTypeResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = RequestValueList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c51,
  6,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteDomainObjectTypeResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateCalculatedAttributeDefinitionRequest {
  DomainName: string;
  CalculatedAttributeName: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  Conditions?: Conditions;
}
const UpdateCalculatedAttributeDefinitionRequest = /*@__PURE__*/ __L.at(
  __c51,
  7,
) as any as S.Schema<UpdateCalculatedAttributeDefinitionRequest>;
export interface UpdateCalculatedAttributeDefinitionResponse {
  CalculatedAttributeName?: string;
  DisplayName?: string;
  Description?: string | redacted.Redacted<string>;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Statistic?: Statistic;
  Conditions?: Conditions;
  AttributeDetails?: AttributeDetails;
  UseHistoricalData?: boolean;
  Status?: ReadinessStatus;
  Readiness?: Readiness;
  Tags?: { [key: string]: string | undefined };
}
const UpdateCalculatedAttributeDefinitionResponse = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<UpdateCalculatedAttributeDefinitionResponse>;
export interface UpdateDomainRequest {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingRequest;
  RuleBasedMatching?: RuleBasedMatchingRequest;
  DataStore?: DataStoreRequest;
  Tags?: { [key: string]: string | undefined };
}
const UpdateDomainRequest = /*@__PURE__*/ __L.at(__c52, 1) as any as S.Schema<UpdateDomainRequest>;
export interface UpdateDomainResponse {
  DomainName: string;
  DefaultExpirationDays?: number;
  DefaultEncryptionKey?: string;
  DeadLetterQueueUrl?: string;
  Matching?: MatchingResponse;
  RuleBasedMatching?: RuleBasedMatchingResponse;
  DataStore?: DataStoreResponse;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Tags?: { [key: string]: string | undefined };
}
const UpdateDomainResponse = /*@__PURE__*/ __L.at(
  __c52,
  2,
) as any as S.Schema<UpdateDomainResponse>;
export interface UpdateDomainLayoutRequest {
  DomainName: string;
  LayoutDefinitionName: string;
  Description?: string | redacted.Redacted<string>;
  DisplayName?: string;
  IsDefault?: boolean;
  LayoutType?: LayoutType;
  Layout?: string | redacted.Redacted<string>;
}
const UpdateDomainLayoutRequest = /*@__PURE__*/ __L.at(
  __c52,
  3,
) as any as S.Schema<UpdateDomainLayoutRequest>;
export interface UpdateDomainLayoutResponse {
  LayoutDefinitionName?: string;
  Description?: string | redacted.Redacted<string>;
  DisplayName?: string;
  IsDefault?: boolean;
  LayoutType?: LayoutType;
  Layout?: string | redacted.Redacted<string>;
  Version?: string;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const UpdateDomainLayoutResponse = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<UpdateDomainLayoutResponse>;
export interface UpdateEventTriggerRequest {
  DomainName: string;
  EventTriggerName: string;
  ObjectTypeName?: string;
  Description?: string | redacted.Redacted<string>;
  EventTriggerConditions?: EventTriggerCondition[];
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
}
const UpdateEventTriggerRequest = /*@__PURE__*/ __L.at(
  __c52,
  5,
) as any as S.Schema<UpdateEventTriggerRequest>;
export interface UpdateEventTriggerResponse {
  EventTriggerName?: string;
  ObjectTypeName?: string;
  Description?: string | redacted.Redacted<string>;
  EventTriggerConditions?: EventTriggerCondition[];
  SegmentFilter?: string;
  EventTriggerLimits?: EventTriggerLimits;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
const UpdateEventTriggerResponse =
  CreateEventTriggerResponse as any as S.Schema<UpdateEventTriggerResponse>;
export type SensitiveString0To1000 = string | redacted.Redacted<string>;
export type SensitiveString0To255 = string | redacted.Redacted<string>;
export type String0To255 = string;
export interface UpdateAddress {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  Address4?: string;
  City?: string;
  County?: string;
  State?: string;
  Province?: string;
  Country?: string;
  PostalCode?: string;
}
const UpdateAddress = Address as any as S.Schema<UpdateAddress>;
export type UpdateAttributes = { [key: string]: string | undefined };
const UpdateAttributes = ObjectTypeNames as any as S.Schema<UpdateAttributes>;
export interface UpdateProfileRequest {
  DomainName: string;
  ProfileId: string;
  AdditionalInformation?: string | redacted.Redacted<string>;
  AccountNumber?: string | redacted.Redacted<string>;
  PartyType?: PartyType;
  BusinessName?: string | redacted.Redacted<string>;
  FirstName?: string | redacted.Redacted<string>;
  MiddleName?: string | redacted.Redacted<string>;
  LastName?: string | redacted.Redacted<string>;
  BirthDate?: string | redacted.Redacted<string>;
  Gender?: Gender;
  PhoneNumber?: string | redacted.Redacted<string>;
  MobilePhoneNumber?: string | redacted.Redacted<string>;
  HomePhoneNumber?: string | redacted.Redacted<string>;
  BusinessPhoneNumber?: string | redacted.Redacted<string>;
  EmailAddress?: string | redacted.Redacted<string>;
  PersonalEmailAddress?: string | redacted.Redacted<string>;
  BusinessEmailAddress?: string | redacted.Redacted<string>;
  Address?: UpdateAddress;
  ShippingAddress?: UpdateAddress;
  MailingAddress?: UpdateAddress;
  BillingAddress?: UpdateAddress;
  Attributes?: { [key: string]: string | undefined };
  PartyTypeString?: string | redacted.Redacted<string>;
  GenderString?: string | redacted.Redacted<string>;
  ProfileType?: ProfileType;
  EngagementPreferences?: EngagementPreferences;
}
const UpdateProfileRequest = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<UpdateProfileRequest>;
export interface UpdateProfileResponse {
  ProfileId: string;
}
const UpdateProfileResponse = CreateProfileResponse as any as S.Schema<UpdateProfileResponse>;
export interface UpdateRecommenderRequest {
  DomainName: string;
  RecommenderName: string;
  Description?: string | redacted.Redacted<string>;
  RecommenderConfig?: RecommenderConfig;
  RecommenderVersionName?: string;
}
const UpdateRecommenderRequest = /*@__PURE__*/ __L.at(
  __c52,
  7,
) as any as S.Schema<UpdateRecommenderRequest>;
export interface UpdateRecommenderResponse {
  RecommenderName: string;
}
const UpdateRecommenderResponse = /*@__PURE__*/ __L.at(
  __c53,
  0,
) as any as S.Schema<UpdateRecommenderResponse>;
export type AddProfileKeyError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates a new key value with a specific profile, such as a Contact Record
 * ContactId.
 *
 * A profile object can have a single unique key and any number of additional keys that can
 * be used to identify the profile that it belongs to.
 */
export const addProfileKey: API.OperationMethod<
  AddProfileKeyRequest,
  AddProfileKeyResponse,
  AddProfileKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddProfileKeyRequest,
  output: AddProfileKeyResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddProfileKey",
}));

export type AssociateStreamForSegmentsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Associates an Amazon Kinesis data stream to receive segment membership events for a given
 * domain. This is a domain-level configuration that applies to all segment
 * subscriptions within the domain. A domain can have only one associated stream at a time.
 */
export const associateStreamForSegments: API.OperationMethod<
  AssociateStreamForSegmentsRequest,
  AssociateStreamForSegmentsResponse,
  AssociateStreamForSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateStreamForSegmentsRequest,
  output: AssociateStreamForSegmentsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateStreamForSegments",
}));

export type BatchGetCalculatedAttributeForProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Fetch the possible attribute values given the attribute name.
 */
export const batchGetCalculatedAttributeForProfile: API.OperationMethod<
  BatchGetCalculatedAttributeForProfileRequest,
  BatchGetCalculatedAttributeForProfileResponse,
  BatchGetCalculatedAttributeForProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetCalculatedAttributeForProfileRequest,
  output: BatchGetCalculatedAttributeForProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCalculatedAttributeForProfile",
}));

export type BatchGetProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Get a batch of profiles.
 */
export const batchGetProfile: API.OperationMethod<
  BatchGetProfileRequest,
  BatchGetProfileResponse,
  BatchGetProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetProfileRequest,
  output: BatchGetProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetProfile",
}));

export type BatchPutProfileObjectError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds multiple profile objects to a domain of a given ObjectType in a single API call.
 *
 * When adding a specific profile object, like a Contact Record, an inferred profile can
 * get created if it is not mapped to an existing profile. The resulting profile will only
 * have a phone number populated in the standard ProfileObject. Any additional Contact Records
 * with the same phone number will be mapped to the same inferred profile.
 *
 * When a ProfileObject is created and if a ProfileObjectType already exists for the
 * ProfileObject, it will provide data to a standard profile depending on the
 * ProfileObjectType definition.
 *
 * BatchPutProfileObject needs an ObjectType, which can be created using
 * PutProfileObjectType.
 */
export const batchPutProfileObject: API.OperationMethod<
  BatchPutProfileObjectRequest,
  BatchPutProfileObjectResponse,
  BatchPutProfileObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchPutProfileObjectRequest,
  output: BatchPutProfileObjectResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutProfileObject",
}));

export type CreateCalculatedAttributeDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a new calculated attribute definition. After creation, new object data ingested
 * into Customer Profiles will be included in the calculated attribute, which can be retrieved
 * for a profile using the GetCalculatedAttributeForProfile API. Defining a calculated attribute makes it
 * available for all profiles within a domain. Each calculated attribute can only reference
 * one `ObjectType` and at most, two fields from that
 * `ObjectType`.
 */
export const createCalculatedAttributeDefinition: API.OperationMethod<
  CreateCalculatedAttributeDefinitionRequest,
  CreateCalculatedAttributeDefinitionResponse,
  CreateCalculatedAttributeDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCalculatedAttributeDefinitionRequest,
  output: CreateCalculatedAttributeDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCalculatedAttributeDefinition",
}));

export type CreateDomainError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a domain, which is a container for all customer data, such as customer profile
 * attributes, object types, profile keys, and encryption keys. You can create multiple
 * domains, and each domain can have multiple third-party integrations.
 *
 * Each Connect Customer instance can be associated with only one domain. Multiple
 * Connect Customer instances can be associated with one domain.
 *
 * Use this API or UpdateDomain to
 * enable identity
 * resolution: set `Matching` to true.
 *
 * To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should
 * apply.
 *
 * It is not possible to associate a Customer Profiles domain with an Amazon Connect Instance directly from
 * the API. If you would like to create a domain and associate a Customer Profiles domain, use the Amazon Connect
 * admin website. For more information, see Enable Customer Profiles.
 *
 * Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances
 * can be associated with one domain.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDomainRequest,
  output: CreateDomainResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomain",
}));

export type CreateDomainLayoutError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates the layout to view data for a specific domain. This API can only be invoked from
 * the Amazon Connect admin website.
 */
export const createDomainLayout: API.OperationMethod<
  CreateDomainLayoutRequest,
  CreateDomainLayoutResponse,
  CreateDomainLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDomainLayoutRequest,
  output: CreateDomainLayoutResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomainLayout",
}));

export type CreateEventStreamError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an event stream, which is a subscription to real-time events, such as when
 * profiles are created and updated through Connect Customer Customer Profiles.
 *
 * Each event stream can be associated with only one Kinesis Data Stream destination in the
 * same region and Amazon Web Services account as the customer profiles domain
 */
export const createEventStream: API.OperationMethod<
  CreateEventStreamRequest,
  CreateEventStreamResponse,
  CreateEventStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEventStreamRequest,
  output: CreateEventStreamResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventStream",
}));

export type CreateEventTriggerError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an event trigger, which specifies the rules when to perform action based on
 * customer's ingested data.
 *
 * Each event stream can be associated with only one integration in the same region and AWS
 * account as the event stream.
 */
export const createEventTrigger: API.OperationMethod<
  CreateEventTriggerRequest,
  CreateEventTriggerResponse,
  CreateEventTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEventTriggerRequest,
  output: CreateEventTriggerResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEventTrigger",
}));

export type CreateIntegrationWorkflowError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an integration workflow. An integration workflow is an async process which
 * ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo.
 */
export const createIntegrationWorkflow: API.OperationMethod<
  CreateIntegrationWorkflowRequest,
  CreateIntegrationWorkflowResponse,
  CreateIntegrationWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIntegrationWorkflowRequest,
  output: CreateIntegrationWorkflowResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIntegrationWorkflow",
}));

export type CreateProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a standard profile.
 *
 * A standard profile represents the following attributes for a customer profile in a
 * domain.
 */
export const createProfile: API.OperationMethod<
  CreateProfileRequest,
  CreateProfileResponse,
  CreateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProfileRequest,
  output: CreateProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProfile",
}));

export type CreateRecommenderError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a recommender
 */
export const createRecommender: API.OperationMethod<
  CreateRecommenderRequest,
  CreateRecommenderResponse,
  CreateRecommenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRecommenderRequest,
  output: CreateRecommenderResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecommender",
}));

export type CreateRecommenderFilterError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a recommender filter. A recommender filter specifies which items to include or exclude from recommendations.
 */
export const createRecommenderFilter: API.OperationMethod<
  CreateRecommenderFilterRequest,
  CreateRecommenderFilterResponse,
  CreateRecommenderFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRecommenderFilterRequest,
  output: CreateRecommenderFilterResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecommenderFilter",
}));

export type CreateRecommenderSchemaError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a recommender schema. A recommender schema defines the set of data columns available for training recommenders and filters under a domain.
 */
export const createRecommenderSchema: API.OperationMethod<
  CreateRecommenderSchemaRequest,
  CreateRecommenderSchemaResponse,
  CreateRecommenderSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRecommenderSchemaRequest,
  output: CreateRecommenderSchemaResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecommenderSchema",
}));

export type CreateSegmentDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a segment definition associated to the given domain.
 */
export const createSegmentDefinition: API.OperationMethod<
  CreateSegmentDefinitionRequest,
  CreateSegmentDefinitionResponse,
  CreateSegmentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSegmentDefinitionRequest,
  output: CreateSegmentDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSegmentDefinition",
}));

export type CreateSegmentEstimateError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a segment estimate query.
 */
export const createSegmentEstimate: API.OperationMethod<
  CreateSegmentEstimateRequest,
  CreateSegmentEstimateResponse,
  CreateSegmentEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSegmentEstimateRequest,
  output: CreateSegmentEstimateResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSegmentEstimate",
}));

export type CreateSegmentSnapshotError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Triggers a job to export a segment to a specified destination.
 */
export const createSegmentSnapshot: API.OperationMethod<
  CreateSegmentSnapshotRequest,
  CreateSegmentSnapshotResponse,
  CreateSegmentSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSegmentSnapshotRequest,
  output: CreateSegmentSnapshotResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSegmentSnapshot",
}));

export type CreateUploadJobError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an Upload job to ingest data for segment imports. The metadata is created for
 * the job with the provided field mapping and unique key.
 */
export const createUploadJob: API.OperationMethod<
  CreateUploadJobRequest,
  CreateUploadJobResponse,
  CreateUploadJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUploadJobRequest,
  output: CreateUploadJobResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUploadJob",
}));

export type DeleteCalculatedAttributeDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an existing calculated attribute definition. Note that deleting a default
 * calculated attribute is possible, however once deleted, you will be unable to undo that
 * action and will need to recreate it on your own using the
 * CreateCalculatedAttributeDefinition API if you want it back.
 */
export const deleteCalculatedAttributeDefinition: API.OperationMethod<
  DeleteCalculatedAttributeDefinitionRequest,
  DeleteCalculatedAttributeDefinitionResponse,
  DeleteCalculatedAttributeDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCalculatedAttributeDefinitionRequest,
  output: DeleteCalculatedAttributeDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCalculatedAttributeDefinition",
}));

export type DeleteDomainError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a specific domain and all of its customer data, such as customer profile
 * attributes and their related objects.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainRequest,
  output: DeleteDomainResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomain",
}));

export type DeleteDomainLayoutError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the layout used to view data for a specific domain. This API can only be invoked
 * from the Amazon Connect admin website.
 */
export const deleteDomainLayout: API.OperationMethod<
  DeleteDomainLayoutRequest,
  DeleteDomainLayoutResponse,
  DeleteDomainLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainLayoutRequest,
  output: DeleteDomainLayoutResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomainLayout",
}));

export type DeleteDomainObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Delete a DomainObjectType for the given Domain and ObjectType name.
 */
export const deleteDomainObjectType: API.OperationMethod<
  DeleteDomainObjectTypeRequest,
  DeleteDomainObjectTypeResponse,
  DeleteDomainObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainObjectTypeRequest,
  output: DeleteDomainObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomainObjectType",
}));

export type DeleteEventStreamError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disables and deletes the specified event stream.
 */
export const deleteEventStream: API.OperationMethod<
  DeleteEventStreamRequest,
  DeleteEventStreamResponse,
  DeleteEventStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEventStreamRequest,
  output: DeleteEventStreamResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventStream",
}));

export type DeleteEventTriggerError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disable and deletes the Event Trigger.
 *
 * You cannot delete an Event Trigger with an active Integration associated.
 */
export const deleteEventTrigger: API.OperationMethod<
  DeleteEventTriggerRequest,
  DeleteEventTriggerResponse,
  DeleteEventTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEventTriggerRequest,
  output: DeleteEventTriggerResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventTrigger",
}));

export type DeleteIntegrationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes an integration from a specific domain.
 */
export const deleteIntegration: API.OperationMethod<
  DeleteIntegrationRequest,
  DeleteIntegrationResponse,
  DeleteIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIntegrationRequest,
  output: DeleteIntegrationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIntegration",
}));

export type DeleteProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the standard customer profile and all data pertaining to the profile.
 */
export const deleteProfile: API.OperationMethod<
  DeleteProfileRequest,
  DeleteProfileResponse,
  DeleteProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfileRequest,
  output: DeleteProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfile",
}));

export type DeleteProfileKeyError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes a searchable key from a customer profile.
 */
export const deleteProfileKey: API.OperationMethod<
  DeleteProfileKeyRequest,
  DeleteProfileKeyResponse,
  DeleteProfileKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfileKeyRequest,
  output: DeleteProfileKeyResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfileKey",
}));

export type DeleteProfileObjectError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes an object associated with a profile of a given ProfileObjectType.
 */
export const deleteProfileObject: API.OperationMethod<
  DeleteProfileObjectRequest,
  DeleteProfileObjectResponse,
  DeleteProfileObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfileObjectRequest,
  output: DeleteProfileObjectResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfileObject",
}));

export type DeleteProfileObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes a ProfileObjectType from a specific domain as well as removes all the
 * ProfileObjects of that type. It also disables integrations from this specific
 * ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
 * were populated from this ProfileObjectType.
 */
export const deleteProfileObjectType: API.OperationMethod<
  DeleteProfileObjectTypeRequest,
  DeleteProfileObjectTypeResponse,
  DeleteProfileObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfileObjectTypeRequest,
  output: DeleteProfileObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfileObjectType",
}));

export type DeleteRecommenderError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a recommender.
 */
export const deleteRecommender: API.OperationMethod<
  DeleteRecommenderRequest,
  DeleteRecommenderResponse,
  DeleteRecommenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRecommenderRequest,
  output: DeleteRecommenderResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecommender",
}));

export type DeleteRecommenderFilterError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a recommender filter from a domain.
 */
export const deleteRecommenderFilter: API.OperationMethod<
  DeleteRecommenderFilterRequest,
  DeleteRecommenderFilterResponse,
  DeleteRecommenderFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRecommenderFilterRequest,
  output: DeleteRecommenderFilterResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecommenderFilter",
}));

export type DeleteRecommenderSchemaError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a recommender schema from a domain.
 */
export const deleteRecommenderSchema: API.OperationMethod<
  DeleteRecommenderSchemaRequest,
  DeleteRecommenderSchemaResponse,
  DeleteRecommenderSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRecommenderSchemaRequest,
  output: DeleteRecommenderSchemaResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecommenderSchema",
}));

export type DeleteSegmentDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a segment definition from the domain.
 */
export const deleteSegmentDefinition: API.OperationMethod<
  DeleteSegmentDefinitionRequest,
  DeleteSegmentDefinitionResponse,
  DeleteSegmentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSegmentDefinitionRequest,
  output: DeleteSegmentDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSegmentDefinition",
}));

export type DeleteSegmentSubscriptionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a segment subscription for membership events. All active event notifications for
 * this segment are stopped.
 */
export const deleteSegmentSubscription: API.OperationMethod<
  DeleteSegmentSubscriptionRequest,
  DeleteSegmentSubscriptionResponse,
  DeleteSegmentSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSegmentSubscriptionRequest,
  output: DeleteSegmentSubscriptionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSegmentSubscription",
}));

export type DeleteWorkflowError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes the specified workflow and all its corresponding resources. This is an async
 * process.
 */
export const deleteWorkflow: API.OperationMethod<
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DeleteWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkflowRequest,
  output: DeleteWorkflowResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkflow",
}));

export type DetectProfileObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The process of detecting profile object type mapping by using given objects.
 */
export const detectProfileObjectType: API.OperationMethod<
  DetectProfileObjectTypeRequest,
  DetectProfileObjectTypeResponse,
  DetectProfileObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetectProfileObjectTypeRequest,
  output: DetectProfileObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetectProfileObjectType",
}));

export type DisassociateStreamForSegmentsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Disassociates the Amazon Kinesis data stream configured for segment membership events. All
 * active segment subscriptions delivering events to this stream are eventually stopped.
 */
export const disassociateStreamForSegments: API.OperationMethod<
  DisassociateStreamForSegmentsRequest,
  DisassociateStreamForSegmentsResponse,
  DisassociateStreamForSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateStreamForSegmentsRequest,
  output: DisassociateStreamForSegmentsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateStreamForSegments",
}));

export type GetAutoMergingPreviewError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Tests the auto-merging settings of your Identity Resolution Job without merging your data. It randomly
 * selects a sample of matching groups from the existing matching results, and applies the
 * automerging settings that you provided. You can then view the number of profiles in the
 * sample, the number of matches, and the number of profiles identified to be merged. This
 * enables you to evaluate the accuracy of the attributes in your matching list.
 *
 * You can't view which profiles are matched and would be merged.
 *
 * We strongly recommend you use this API to do a dry run of the automerging process
 * before running the Identity Resolution Job. Include **at least** two matching
 * attributes. If your matching list includes too few attributes (such as only
 * `FirstName` or only `LastName`), there may be a large number of
 * matches. This increases the chances of erroneous merges.
 */
export const getAutoMergingPreview: API.OperationMethod<
  GetAutoMergingPreviewRequest,
  GetAutoMergingPreviewResponse,
  GetAutoMergingPreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAutoMergingPreviewRequest,
  output: GetAutoMergingPreviewResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAutoMergingPreview",
}));

export type GetCalculatedAttributeDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Provides more information on a calculated attribute definition for Customer
 * Profiles.
 */
export const getCalculatedAttributeDefinition: API.OperationMethod<
  GetCalculatedAttributeDefinitionRequest,
  GetCalculatedAttributeDefinitionResponse,
  GetCalculatedAttributeDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCalculatedAttributeDefinitionRequest,
  output: GetCalculatedAttributeDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCalculatedAttributeDefinition",
}));

export type GetCalculatedAttributeForProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieve a calculated attribute for a customer profile.
 */
export const getCalculatedAttributeForProfile: API.OperationMethod<
  GetCalculatedAttributeForProfileRequest,
  GetCalculatedAttributeForProfileResponse,
  GetCalculatedAttributeForProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCalculatedAttributeForProfileRequest,
  output: GetCalculatedAttributeForProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCalculatedAttributeForProfile",
}));

export type GetDomainError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about a specific domain.
 */
export const getDomain: API.OperationMethod<
  GetDomainRequest,
  GetDomainResponse,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDomainRequest,
  output: GetDomainResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomain",
}));

export type GetDomainLayoutError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the layout to view data for a specific domain. This API can only be invoked from
 * the Amazon Connect admin website.
 */
export const getDomainLayout: API.OperationMethod<
  GetDomainLayoutRequest,
  GetDomainLayoutResponse,
  GetDomainLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDomainLayoutRequest,
  output: GetDomainLayoutResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainLayout",
}));

export type GetDomainObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Return a DomainObjectType for the input Domain and ObjectType names.
 */
export const getDomainObjectType: API.OperationMethod<
  GetDomainObjectTypeRequest,
  GetDomainObjectTypeResponse,
  GetDomainObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDomainObjectTypeRequest,
  output: GetDomainObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainObjectType",
}));

export type GetEventStreamError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about the specified event stream in a specific domain.
 */
export const getEventStream: API.OperationMethod<
  GetEventStreamRequest,
  GetEventStreamResponse,
  GetEventStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventStreamRequest,
  output: GetEventStreamResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventStream",
}));

export type GetEventTriggerError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Get a specific Event Trigger from the domain.
 */
export const getEventTrigger: API.OperationMethod<
  GetEventTriggerRequest,
  GetEventTriggerResponse,
  GetEventTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventTriggerRequest,
  output: GetEventTriggerResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEventTrigger",
}));

export type GetIdentityResolutionJobError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about an Identity Resolution Job in a specific domain.
 *
 * Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see Use
 * Identity Resolution to consolidate similar profiles.
 */
export const getIdentityResolutionJob: API.OperationMethod<
  GetIdentityResolutionJobRequest,
  GetIdentityResolutionJobResponse,
  GetIdentityResolutionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityResolutionJobRequest,
  output: GetIdentityResolutionJobResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityResolutionJob",
}));

export type GetIntegrationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns an integration for a domain.
 */
export const getIntegration: API.OperationMethod<
  GetIntegrationRequest,
  GetIntegrationResponse,
  GetIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIntegrationRequest,
  output: GetIntegrationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIntegration",
}));

export type GetMatchesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Before calling this API, use CreateDomain or
 * UpdateDomain to
 * enable identity resolution: set `Matching` to true.
 *
 * GetMatches returns potentially matching profiles, based on the results of the latest run
 * of a machine learning process.
 *
 * The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly
 * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
 * Saturday at 12AM UTC to detect duplicate profiles in your domains.
 *
 * After the Identity Resolution Job completes, use the
 * GetMatches
 * API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from
 * S3.
 *
 * Amazon Connect uses the following profile attributes to identify matches:
 *
 * - PhoneNumber
 *
 * - HomePhoneNumber
 *
 * - BusinessPhoneNumber
 *
 * - MobilePhoneNumber
 *
 * - EmailAddress
 *
 * - PersonalEmailAddress
 *
 * - BusinessEmailAddress
 *
 * - FullName
 *
 * For example, two or more profiles--with spelling mistakes such as **John Doe** and **Jhn Doe**, or different casing
 * email addresses such as **JOHN_DOE@ANYCOMPANY.COM** and
 * **johndoe@anycompany.com**, or different phone number
 * formats such as **555-010-0000** and **+1-555-010-0000**--can be detected as belonging to the same customer **John Doe** and merged into a unified profile.
 */
export const getMatches: API.OperationMethod<
  GetMatchesRequest,
  GetMatchesResponse,
  GetMatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMatchesRequest,
  output: GetMatchesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMatches",
}));

export type GetObjectTypeAttributeStatisticsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The GetObjectTypeAttributeValues API delivers statistical insights about attributes within a specific object type, but is exclusively available for domains with data store enabled. This API performs daily calculations to provide statistical information about your attribute values, helping you understand patterns and trends in your data. The statistical calculations are performed once per day, providing a consistent snapshot of your attribute data characteristics.
 *
 * You'll receive null values in two scenarios:
 *
 * During the first period after enabling data vault (unless a calculation cycle occurs, which happens once daily).
 *
 * For attributes that don't contain numeric values.
 */
export const getObjectTypeAttributeStatistics: API.OperationMethod<
  GetObjectTypeAttributeStatisticsRequest,
  GetObjectTypeAttributeStatisticsResponse,
  GetObjectTypeAttributeStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetObjectTypeAttributeStatisticsRequest,
  output: GetObjectTypeAttributeStatisticsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetObjectTypeAttributeStatistics",
}));

export type GetProfileHistoryRecordError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a history record for a specific profile, for a specific domain.
 */
export const getProfileHistoryRecord: API.OperationMethod<
  GetProfileHistoryRecordRequest,
  GetProfileHistoryRecordResponse,
  GetProfileHistoryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileHistoryRecordRequest,
  output: GetProfileHistoryRecordResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileHistoryRecord",
}));

export type GetProfileObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the object types for a specific domain.
 */
export const getProfileObjectType: API.OperationMethod<
  GetProfileObjectTypeRequest,
  GetProfileObjectTypeResponse,
  GetProfileObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileObjectTypeRequest,
  output: GetProfileObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileObjectType",
}));

export type GetProfileObjectTypeTemplateError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the template information for a specific object type.
 *
 * A template is a predefined ProfileObjectType, such as "Salesforce-Account" or
 * "Salesforce-Contact." When a user sends a ProfileObject, using the PutProfileObject API,
 * with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the
 * template.
 */
export const getProfileObjectTypeTemplate: API.OperationMethod<
  GetProfileObjectTypeTemplateRequest,
  GetProfileObjectTypeTemplateResponse,
  GetProfileObjectTypeTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileObjectTypeTemplateRequest,
  output: GetProfileObjectTypeTemplateResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileObjectTypeTemplate",
}));

export type GetProfileRecommendationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Fetches the recommendations for a profile in the input Customer Profiles domain. Fetches all the profile recommendations
 */
export const getProfileRecommendations: API.OperationMethod<
  GetProfileRecommendationsRequest,
  GetProfileRecommendationsResponse,
  GetProfileRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileRecommendationsRequest,
  output: GetProfileRecommendationsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileRecommendations",
}));

export type GetRecommenderError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves a recommender.
 */
export const getRecommender: API.OperationMethod<
  GetRecommenderRequest,
  GetRecommenderResponse,
  GetRecommenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommenderRequest,
  output: GetRecommenderResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommender",
}));

export type GetRecommenderFilterError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a specific recommender filter in a domain.
 */
export const getRecommenderFilter: API.OperationMethod<
  GetRecommenderFilterRequest,
  GetRecommenderFilterResponse,
  GetRecommenderFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommenderFilterRequest,
  output: GetRecommenderFilterResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommenderFilter",
}));

export type GetRecommenderSchemaError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about a specific recommender schema in a domain.
 */
export const getRecommenderSchema: API.OperationMethod<
  GetRecommenderSchemaRequest,
  GetRecommenderSchemaResponse,
  GetRecommenderSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommenderSchemaRequest,
  output: GetRecommenderSchemaResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommenderSchema",
}));

export type GetSegmentDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets a segment definition from the domain.
 */
export const getSegmentDefinition: API.OperationMethod<
  GetSegmentDefinitionRequest,
  GetSegmentDefinitionResponse,
  GetSegmentDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSegmentDefinitionRequest,
  output: GetSegmentDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentDefinition",
}));

export type GetSegmentEstimateError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Gets the result of a segment estimate query.
 */
export const getSegmentEstimate: API.OperationMethod<
  GetSegmentEstimateRequest,
  GetSegmentEstimateResponse,
  GetSegmentEstimateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSegmentEstimateRequest,
  output: GetSegmentEstimateResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentEstimate",
}));

export type GetSegmentMembershipError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Determines if the given profiles are within a segment.
 */
export const getSegmentMembership: API.OperationMethod<
  GetSegmentMembershipRequest,
  GetSegmentMembershipResponse,
  GetSegmentMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSegmentMembershipRequest,
  output: GetSegmentMembershipResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentMembership",
}));

export type GetSegmentSnapshotError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieve the latest status of a segment snapshot.
 */
export const getSegmentSnapshot: API.OperationMethod<
  GetSegmentSnapshotRequest,
  GetSegmentSnapshotResponse,
  GetSegmentSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSegmentSnapshotRequest,
  output: GetSegmentSnapshotResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentSnapshot",
}));

export type GetSegmentSubscriptionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the current subscription configuration, execution schedule, and status for
 * segment membership events.
 */
export const getSegmentSubscription: API.OperationMethod<
  GetSegmentSubscriptionRequest,
  GetSegmentSubscriptionResponse,
  GetSegmentSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSegmentSubscriptionRequest,
  output: GetSegmentSubscriptionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSegmentSubscription",
}));

export type GetSimilarProfilesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a set of profiles that belong to the same matching group using the
 * `matchId` or `profileId`. You can also specify the type of
 * matching that you want for finding similar profiles using either
 * `RULE_BASED_MATCHING` or `ML_BASED_MATCHING`.
 */
export const getSimilarProfiles: API.PaginatedOperationMethod<
  GetSimilarProfilesRequest,
  GetSimilarProfilesResponse,
  GetSimilarProfilesError,
  Credentials | HttpClient.HttpClient,
  Uuid
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetSimilarProfilesRequest,
  output: GetSimilarProfilesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSimilarProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProfileIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetStreamForSegmentsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about the segment membership event stream configured for a specific
 * domain, including the stream state and associated segments.
 */
export const getStreamForSegments: API.OperationMethod<
  GetStreamForSegmentsRequest,
  GetStreamForSegmentsResponse,
  GetStreamForSegmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetStreamForSegmentsRequest,
  output: GetStreamForSegmentsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetStreamForSegments",
}));

export type GetUploadJobError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * This API retrieves the details of a specific upload job.
 */
export const getUploadJob: API.OperationMethod<
  GetUploadJobRequest,
  GetUploadJobResponse,
  GetUploadJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUploadJobRequest,
  output: GetUploadJobResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUploadJob",
}));

export type GetUploadJobPathError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * This API retrieves the pre-signed URL and client token for uploading the file associated
 * with the upload job.
 */
export const getUploadJobPath: API.OperationMethod<
  GetUploadJobPathRequest,
  GetUploadJobPathResponse,
  GetUploadJobPathError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUploadJobPathRequest,
  output: GetUploadJobPathResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUploadJobPath",
}));

export type GetWorkflowError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Get details of specified workflow.
 */
export const getWorkflow: API.OperationMethod<
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowRequest,
  output: GetWorkflowResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflow",
}));

export type GetWorkflowStepsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Get granular list of steps in workflow.
 */
export const getWorkflowSteps: API.OperationMethod<
  GetWorkflowStepsRequest,
  GetWorkflowStepsResponse,
  GetWorkflowStepsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkflowStepsRequest,
  output: GetWorkflowStepsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkflowSteps",
}));

export type ListAccountIntegrationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all of the integrations associated to a specific URI in the AWS account.
 */
export const listAccountIntegrations: API.OperationMethod<
  ListAccountIntegrationsRequest,
  ListAccountIntegrationsResponse,
  ListAccountIntegrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAccountIntegrationsRequest,
  output: ListAccountIntegrationsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountIntegrations",
}));

export type ListCalculatedAttributeDefinitionsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists calculated attribute definitions for Customer Profiles
 */
export const listCalculatedAttributeDefinitions: API.OperationMethod<
  ListCalculatedAttributeDefinitionsRequest,
  ListCalculatedAttributeDefinitionsResponse,
  ListCalculatedAttributeDefinitionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCalculatedAttributeDefinitionsRequest,
  output: ListCalculatedAttributeDefinitionsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCalculatedAttributeDefinitions",
}));

export type ListCalculatedAttributesForProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieve a list of calculated attributes for a customer profile.
 */
export const listCalculatedAttributesForProfile: API.OperationMethod<
  ListCalculatedAttributesForProfileRequest,
  ListCalculatedAttributesForProfileResponse,
  ListCalculatedAttributesForProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCalculatedAttributesForProfileRequest,
  output: ListCalculatedAttributesForProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCalculatedAttributesForProfile",
}));

export type ListDomainLayoutsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the existing layouts that can be used to view data for a specific domain. This API
 * can only be invoked from the Amazon Connect admin website.
 */
export const listDomainLayouts: API.PaginatedOperationMethod<
  ListDomainLayoutsRequest,
  ListDomainLayoutsResponse,
  ListDomainLayoutsError,
  Credentials | HttpClient.HttpClient,
  LayoutItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainLayoutsRequest,
  output: ListDomainLayoutsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainLayouts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDomainObjectTypesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * List all DomainObjectType(s) in a Customer Profiles domain.
 */
export const listDomainObjectTypes: API.PaginatedOperationMethod<
  ListDomainObjectTypesRequest,
  ListDomainObjectTypesResponse,
  ListDomainObjectTypesError,
  Credentials | HttpClient.HttpClient,
  DomainObjectTypesListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainObjectTypesRequest,
  output: ListDomainObjectTypesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainObjectTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDomainsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of all the domains for an AWS account that have been created.
 */
export const listDomains: API.OperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
}));

export type ListEventStreamsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of all the event streams in a specific domain.
 */
export const listEventStreams: API.PaginatedOperationMethod<
  ListEventStreamsRequest,
  ListEventStreamsResponse,
  ListEventStreamsError,
  Credentials | HttpClient.HttpClient,
  EventStreamSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEventStreamsRequest,
  output: ListEventStreamsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventStreams",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEventTriggersError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * List all Event Triggers under a domain.
 */
export const listEventTriggers: API.PaginatedOperationMethod<
  ListEventTriggersRequest,
  ListEventTriggersResponse,
  ListEventTriggersError,
  Credentials | HttpClient.HttpClient,
  EventTriggerSummaryItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEventTriggersRequest,
  output: ListEventTriggersResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEventTriggers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIdentityResolutionJobsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by
 * `JobStartTime`.
 */
export const listIdentityResolutionJobs: API.OperationMethod<
  ListIdentityResolutionJobsRequest,
  ListIdentityResolutionJobsResponse,
  ListIdentityResolutionJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListIdentityResolutionJobsRequest,
  output: ListIdentityResolutionJobsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentityResolutionJobs",
}));

export type ListIntegrationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all of the integrations in your domain.
 */
export const listIntegrations: API.OperationMethod<
  ListIntegrationsRequest,
  ListIntegrationsResponse,
  ListIntegrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListIntegrationsRequest,
  output: ListIntegrationsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIntegrations",
}));

export type ListObjectTypeAttributesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Fetch the possible attribute values given the attribute name.
 */
export const listObjectTypeAttributes: API.PaginatedOperationMethod<
  ListObjectTypeAttributesRequest,
  ListObjectTypeAttributesResponse,
  ListObjectTypeAttributesError,
  Credentials | HttpClient.HttpClient,
  ListObjectTypeAttributeItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListObjectTypeAttributesRequest,
  output: ListObjectTypeAttributesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectTypeAttributes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListObjectTypeAttributeValuesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * The ListObjectTypeAttributeValues API provides access to the most recent distinct values for any specified attribute, making it valuable for real-time data validation and consistency checks within your object types. This API works across domain, supporting both custom and standard object types. The API accepts the object type name, attribute name, and domain name as input parameters and returns values up to the storage limit of approximately 350KB.
 */
export const listObjectTypeAttributeValues: API.OperationMethod<
  ListObjectTypeAttributeValuesRequest,
  ListObjectTypeAttributeValuesResponse,
  ListObjectTypeAttributeValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListObjectTypeAttributeValuesRequest,
  output: ListObjectTypeAttributeValuesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListObjectTypeAttributeValues",
}));

export type ListProfileAttributeValuesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Fetch the possible attribute values given the attribute name.
 */
export const listProfileAttributeValues: API.OperationMethod<
  ProfileAttributeValuesRequest,
  ProfileAttributeValuesResponse,
  ListProfileAttributeValuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProfileAttributeValuesRequest,
  output: ProfileAttributeValuesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileAttributeValues",
}));

export type ListProfileHistoryRecordsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of history records for a specific profile, for a specific domain.
 */
export const listProfileHistoryRecords: API.OperationMethod<
  ListProfileHistoryRecordsRequest,
  ListProfileHistoryRecordsResponse,
  ListProfileHistoryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProfileHistoryRecordsRequest,
  output: ListProfileHistoryRecordsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileHistoryRecords",
}));

export type ListProfileObjectsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of objects associated with a profile of a given ProfileObjectType.
 */
export const listProfileObjects: API.OperationMethod<
  ListProfileObjectsRequest,
  ListProfileObjectsResponse,
  ListProfileObjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProfileObjectsRequest,
  output: ListProfileObjectsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileObjects",
}));

export type ListProfileObjectTypesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all of the templates available within the service.
 */
export const listProfileObjectTypes: API.OperationMethod<
  ListProfileObjectTypesRequest,
  ListProfileObjectTypesResponse,
  ListProfileObjectTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProfileObjectTypesRequest,
  output: ListProfileObjectTypesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileObjectTypes",
}));

export type ListProfileObjectTypeTemplatesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all of the template information for object types.
 */
export const listProfileObjectTypeTemplates: API.OperationMethod<
  ListProfileObjectTypeTemplatesRequest,
  ListProfileObjectTypeTemplatesResponse,
  ListProfileObjectTypeTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListProfileObjectTypeTemplatesRequest,
  output: ListProfileObjectTypeTemplatesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileObjectTypeTemplates",
}));

export type ListRecommenderFiltersError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of recommender filters in the specified domain.
 */
export const listRecommenderFilters: API.PaginatedOperationMethod<
  ListRecommenderFiltersRequest,
  ListRecommenderFiltersResponse,
  ListRecommenderFiltersError,
  Credentials | HttpClient.HttpClient,
  RecommenderFilterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommenderFiltersRequest,
  output: ListRecommenderFiltersResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommenderFilters",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RecommenderFilters",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRecommenderRecipesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of available recommender recipes that can be used to create recommenders.
 */
export const listRecommenderRecipes: API.PaginatedOperationMethod<
  ListRecommenderRecipesRequest,
  ListRecommenderRecipesResponse,
  ListRecommenderRecipesError,
  Credentials | HttpClient.HttpClient,
  RecommenderRecipe
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommenderRecipesRequest,
  output: ListRecommenderRecipesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommenderRecipes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RecommenderRecipes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRecommendersError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of recommenders in the specified domain.
 */
export const listRecommenders: API.PaginatedOperationMethod<
  ListRecommendersRequest,
  ListRecommendersResponse,
  ListRecommendersError,
  Credentials | HttpClient.HttpClient,
  RecommenderSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendersRequest,
  output: ListRecommendersResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommenders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Recommenders",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRecommenderSchemasError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a list of recommender schemas in the specified domain.
 */
export const listRecommenderSchemas: API.PaginatedOperationMethod<
  ListRecommenderSchemasRequest,
  ListRecommenderSchemasResponse,
  ListRecommenderSchemasError,
  Credentials | HttpClient.HttpClient,
  RecommenderSchemaSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommenderSchemasRequest,
  output: ListRecommenderSchemasResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommenderSchemas",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RecommenderSchemas",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRuleBasedMatchesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns a set of `MatchIds` that belong to the given domain.
 */
export const listRuleBasedMatches: API.PaginatedOperationMethod<
  ListRuleBasedMatchesRequest,
  ListRuleBasedMatchesResponse,
  ListRuleBasedMatchesError,
  Credentials | HttpClient.HttpClient,
  String1To255
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRuleBasedMatchesRequest,
  output: ListRuleBasedMatchesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleBasedMatches",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "MatchIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSegmentDefinitionsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all segment definitions under a domain.
 */
export const listSegmentDefinitions: API.PaginatedOperationMethod<
  ListSegmentDefinitionsRequest,
  ListSegmentDefinitionsResponse,
  ListSegmentDefinitionsError,
  Credentials | HttpClient.HttpClient,
  SegmentDefinitionItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSegmentDefinitionsRequest,
  output: ListSegmentDefinitionsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSegmentDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSegmentSubscriptionEventsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the most recent membership events for a segment. Each event represents a profile
 * that entered or exited the segment.
 *
 * This operation is paginated.
 */
export const listSegmentSubscriptionEvents: API.PaginatedOperationMethod<
  ListSegmentSubscriptionEventsRequest,
  ListSegmentSubscriptionEventsResponse,
  ListSegmentSubscriptionEventsError,
  Credentials | HttpClient.HttpClient,
  SubscriptionEventItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSegmentSubscriptionEventsRequest,
  output: ListSegmentSubscriptionEventsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSegmentSubscriptionEvents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Events",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect
 * Customer Profiles, domains, profile object types, and integrations can be tagged.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListUploadJobsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * This API retrieves a list of upload jobs for the specified domain.
 */
export const listUploadJobs: API.PaginatedOperationMethod<
  ListUploadJobsRequest,
  ListUploadJobsResponse,
  ListUploadJobsError,
  Credentials | HttpClient.HttpClient,
  UploadJobItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUploadJobsRequest,
  output: ListUploadJobsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUploadJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListWorkflowsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Query to list all workflows.
 */
export const listWorkflows: API.OperationMethod<
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListWorkflowsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWorkflowsRequest,
  output: ListWorkflowsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkflows",
}));

export type MergeProfilesError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Runs an AWS Lambda job that does the following:
 *
 * - All the profileKeys in the `ProfileToBeMerged` will be moved to the
 * main profile.
 *
 * - All the objects in the `ProfileToBeMerged` will be moved to the main
 * profile.
 *
 * - All the `ProfileToBeMerged` will be deleted at the end.
 *
 * - All the profileKeys in the `ProfileIdsToBeMerged` will be moved to the
 * main profile.
 *
 * - Standard fields are merged as follows:
 *
 * - Fields are always "union"-ed if there are no conflicts in standard fields or
 * attributeKeys.
 *
 * - When there are conflicting fields:
 *
 * - If no `SourceProfileIds` entry is specified, the main
 * Profile value is always taken.
 *
 * - If a `SourceProfileIds` entry is specified, the specified
 * profileId is always taken, even if it is a NULL value.
 *
 * You can use MergeProfiles together with GetMatches, which
 * returns potentially matching profiles, or use it with the results of another matching
 * system. After profiles have been merged, they cannot be separated (unmerged).
 */
export const mergeProfiles: API.OperationMethod<
  MergeProfilesRequest,
  MergeProfilesResponse,
  MergeProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MergeProfilesRequest,
  output: MergeProfilesResponse,
  errors: [
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "MergeProfiles",
}));

export type PutDomainObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Create/Update a DomainObjectType in a Customer Profiles domain. To create a new DomainObjectType, Data Store needs to be enabled on the Domain.
 */
export const putDomainObjectType: API.OperationMethod<
  PutDomainObjectTypeRequest,
  PutDomainObjectTypeResponse,
  PutDomainObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDomainObjectTypeRequest,
  output: PutDomainObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDomainObjectType",
}));

export type PutIntegrationError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds an integration between the service and a third-party service, which includes
 * Amazon AppFlow and Amazon Connect.
 *
 * An integration can belong to only one domain.
 *
 * To add or remove tags on an existing Integration, see TagResource
 * /
 * UntagResource.
 */
export const putIntegration: API.OperationMethod<
  PutIntegrationRequest,
  PutIntegrationResponse,
  PutIntegrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutIntegrationRequest,
  output: PutIntegrationResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutIntegration",
}));

export type PutProfileObjectError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds additional objects to customer profiles of a given ObjectType.
 *
 * When adding a specific profile object, like a Contact Record, an inferred profile can
 * get created if it is not mapped to an existing profile. The resulting profile will only
 * have a phone number populated in the standard ProfileObject. Any additional Contact Records
 * with the same phone number will be mapped to the same inferred profile.
 *
 * When a ProfileObject is created and if a ProfileObjectType already exists for the
 * ProfileObject, it will provide data to a standard profile depending on the
 * ProfileObjectType definition.
 *
 * PutProfileObject needs an ObjectType, which can be created using
 * PutProfileObjectType.
 */
export const putProfileObject: API.OperationMethod<
  PutProfileObjectRequest,
  PutProfileObjectResponse,
  PutProfileObjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutProfileObjectRequest,
  output: PutProfileObjectResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutProfileObject",
}));

export type PutProfileObjectTypeError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Defines a ProfileObjectType.
 *
 * To add or remove tags on an existing ObjectType, see
 * TagResource/UntagResource.
 */
export const putProfileObjectType: API.OperationMethod<
  PutProfileObjectTypeRequest,
  PutProfileObjectTypeResponse,
  PutProfileObjectTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutProfileObjectTypeRequest,
  output: PutProfileObjectTypeResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutProfileObjectType",
}));

export type PutSegmentSubscriptionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates or updates a segment subscription for membership events. When a subscription is
 * created, an initial snapshot is taken and the system begins monitoring for membership
 * changes.
 *
 * You can optionally set a schedule configuration interval to control how often membership
 * snapshots are run. The interval can be from 1 to 24 hours. If not set, the interval defaults
 * to 24 hours. Scheduled snapshots run on
 * a best-effort basis. If a scheduled snapshot takes longer than the configured interval, the
 * next scheduled run does not start until the in-progress snapshot completes, so a run might
 * be delayed or skipped and is not guaranteed to occur at exactly the requested time.
 *
 * For Classic segments, membership events are generated from these scheduled snapshots and
 * also in near real-time as profile attribute changes occur. For SQL segments, membership
 * events are generated only from the scheduled snapshots.
 */
export const putSegmentSubscription: API.OperationMethod<
  PutSegmentSubscriptionRequest,
  PutSegmentSubscriptionResponse,
  PutSegmentSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSegmentSubscriptionRequest,
  output: PutSegmentSubscriptionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSegmentSubscription",
}));

export type SearchProfilesError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Searches for profiles within a specific domain using one or more predefined search keys
 * (e.g., _fullName, _phone, _email, _account, etc.) and/or custom-defined search keys. A
 * search key is a data type pair that consists of a `KeyName` and
 * `Values` list.
 *
 * This operation supports searching for profiles with a minimum of 1 key-value(s) pair and
 * up to 5 key-value(s) pairs using either `AND` or `OR` logic.
 */
export const searchProfiles: API.OperationMethod<
  SearchProfilesRequest,
  SearchProfilesResponse,
  SearchProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchProfilesRequest,
  output: SearchProfilesResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchProfiles",
}));

export type SearchRecommendationsError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves recommendations for a profile in a specific domain. The profile is identified
 * using a search key, which consists of a `KeyName` and a `KeyValues` list.
 * The `KeyName` can be a predefined key (for example, `_profileId`,
 * `_phone`, `_email`) or a custom-defined key.
 *
 * The search key must match exactly one profile. If no profile matches the search key, the
 * operation returns a `ResourceNotFoundException`. If more than one profile matches
 * the search key, the operation returns a `BadRequestException`. You can use the
 * SearchProfiles API to review the matching profiles.
 */
export const searchRecommendations: API.OperationMethod<
  SearchRecommendationsRequest,
  SearchRecommendationsResponse,
  SearchRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchRecommendationsRequest,
  output: SearchRecommendationsResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchRecommendations",
}));

export type StartRecommenderError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Starts a recommender that was previously stopped. Starting a recommender resumes its ability to generate recommendations.
 */
export const startRecommender: API.OperationMethod<
  StartRecommenderRequest,
  StartRecommenderResponse,
  StartRecommenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartRecommenderRequest,
  output: StartRecommenderResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartRecommender",
}));

export type StartUploadJobError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * This API starts the processing of an upload job to ingest profile data.
 */
export const startUploadJob: API.OperationMethod<
  StartUploadJobRequest,
  StartUploadJobResponse,
  StartUploadJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartUploadJobRequest,
  output: StartUploadJobResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartUploadJob",
}));

export type StopRecommenderError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Stops a recommender, suspending its ability to generate recommendations. The recommender can be restarted later using StartRecommender.
 */
export const stopRecommender: API.OperationMethod<
  StopRecommenderRequest,
  StopRecommenderResponse,
  StopRecommenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopRecommenderRequest,
  output: StopRecommenderResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRecommender",
}));

export type StopUploadJobError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * This API stops the processing of an upload job.
 */
export const stopUploadJob: API.OperationMethod<
  StopUploadJobRequest,
  StopUploadJobResponse,
  StopUploadJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopUploadJobRequest,
  output: StopUploadJobResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopUploadJob",
}));

export type TagResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles
 * resource. Tags can help you organize and categorize your resources. You can also use them
 * to scope user permissions by granting a user permission to access or change only resources
 * with certain tag values. In Connect Customer Profiles, domains, profile object types, and
 * integrations can be tagged.
 *
 * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of
 * characters.
 *
 * You can use the TagResource action with a resource that already has tags. If you specify
 * a new tag key, this tag is appended to the list of tags associated with the resource. If
 * you specify a tag key that is already associated with the resource, the new tag value that
 * you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect
 * Customer Profiles, domains, profile object types, and integrations can be tagged.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [BadRequestException, InternalServerException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCalculatedAttributeDefinitionError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an existing calculated attribute definition. When updating the Conditions, note
 * that increasing the date range of a calculated attribute will not trigger inclusion of
 * historical data greater than the current date range.
 */
export const updateCalculatedAttributeDefinition: API.OperationMethod<
  UpdateCalculatedAttributeDefinitionRequest,
  UpdateCalculatedAttributeDefinitionResponse,
  UpdateCalculatedAttributeDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCalculatedAttributeDefinitionRequest,
  output: UpdateCalculatedAttributeDefinitionResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCalculatedAttributeDefinition",
}));

export type UpdateDomainError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the properties of a domain, including creating or selecting a dead letter queue
 * or an encryption key.
 *
 * After a domain is created, the name can't be changed.
 *
 * Use this API or CreateDomain to
 * enable identity
 * resolution: set `Matching` to true.
 *
 * To prevent cross-service impersonation when you call this API, see Cross-service confused deputy prevention for sample policies that you should
 * apply.
 *
 * To add or remove tags on an existing Domain, see TagResource/UntagResource.
 */
export const updateDomain: API.OperationMethod<
  UpdateDomainRequest,
  UpdateDomainResponse,
  UpdateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDomainRequest,
  output: UpdateDomainResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomain",
}));

export type UpdateDomainLayoutError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the layout used to view data for a specific domain. This API can only be invoked
 * from the Amazon Connect admin website.
 */
export const updateDomainLayout: API.OperationMethod<
  UpdateDomainLayoutRequest,
  UpdateDomainLayoutResponse,
  UpdateDomainLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateDomainLayoutRequest,
  output: UpdateDomainLayoutResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomainLayout",
}));

export type UpdateEventTriggerError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Update the properties of an Event Trigger.
 */
export const updateEventTrigger: API.OperationMethod<
  UpdateEventTriggerRequest,
  UpdateEventTriggerResponse,
  UpdateEventTriggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEventTriggerRequest,
  output: UpdateEventTriggerResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEventTrigger",
}));

export type UpdateProfileError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the properties of a profile. The ProfileId is required for updating a customer
 * profile.
 *
 * When calling the UpdateProfile API, specifying an empty string value means that any
 * existing value will be removed. Not specifying a string value means that any value already
 * there will be kept.
 */
export const updateProfile: API.OperationMethod<
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProfileRequest,
  output: UpdateProfileResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProfile",
}));

export type UpdateRecommenderError =
  | AccessDeniedException
  | BadRequestException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the properties of an existing recommender, allowing you to modify its configuration and description.
 */
export const updateRecommender: API.OperationMethod<
  UpdateRecommenderRequest,
  UpdateRecommenderResponse,
  UpdateRecommenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateRecommenderRequest,
  output: UpdateRecommenderResponse,
  errors: [
    AccessDeniedException,
    BadRequestException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRecommender",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String,
          KeyName: S.String,
          Values: RequestValueList,
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/keys" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddProfileKeyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ KeyName: S.optional(S.String), Values: S.optional(RequestValueList) }),
      ).annotate({ identifier: "AddProfileKeyResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          DestinationArn: S.String,
          DestinationRoleArn: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/segment-streams" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateStreamForSegmentsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateStreamForSegmentsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Start: S.Number, End: S.optional(S.Number), Unit: RangeUnit }),
      ).annotate({ identifier: "RangeOverride" });
    case 6:
      return S.suspend(() => S.Struct({ Range: S.optional(RangeOverride) })).annotate({
        identifier: "ConditionOverrides",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.String.pipe(T.HttpLabel("CalculatedAttributeName")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileIds: BatchGetCalculatedAttributeForProfileIdList,
          ConditionOverrides: S.optional(ConditionOverrides),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}/batch-get-for-profiles",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetCalculatedAttributeForProfileRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Code: S.String, Message: S.String, ProfileId: S.String }),
      ).annotate({
        identifier: "BatchGetCalculatedAttributeForProfileError",
      });
    case 1:
      return S.Array(BatchGetCalculatedAttributeForProfileError_);
    case 2:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          IsDataPartial: S.optional(S.String),
          ProfileId: S.optional(S.String),
          Value: S.optional(S.String),
          LastObjectTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CalculatedAttributeValue" });
    case 3:
      return S.Array(CalculatedAttributeValue);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Errors: S.optional(BatchGetCalculatedAttributeForProfileErrorList),
          CalculatedAttributeValues: S.optional(CalculatedAttributeValueList),
          ConditionOverrides: S.optional(ConditionOverrides),
        }),
      ).annotate({
        identifier: "BatchGetCalculatedAttributeForProfileResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileIds: BatchGetProfileIdList,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/batch-get-profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetProfileRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Code: S.String, Message: S.String, ProfileId: S.String }),
      ).annotate({ identifier: "BatchGetProfileError" });
    case 7:
      return S.Array(BatchGetProfileError_);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Address1: S.optional(S.String),
          Address2: S.optional(S.String),
          Address3: S.optional(S.String),
          Address4: S.optional(S.String),
          City: S.optional(S.String),
          County: S.optional(S.String),
          State: S.optional(S.String),
          Province: S.optional(S.String),
          Country: S.optional(S.String),
          PostalCode: S.optional(S.String),
        }),
      ).annotate({ identifier: "Address" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.Array(FoundByKeyValue);
    case 3:
      return S.suspend(() =>
        S.Struct({
          KeyName: S.optional(S.String),
          KeyValue: S.optional(S.String),
          ProfileId: S.optional(S.String),
          ContactType: S.optional(ContactType),
        }),
      ).annotate({ identifier: "ContactPreference" });
    case 4:
      return S.Array(ContactPreference);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Phone: S.optional(PhonePreferenceList),
          Email: S.optional(EmailPreferenceList),
        }),
      ).annotate({ identifier: "EngagementPreferences" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.optional(S.String),
          AccountNumber: S.optional(SensitiveString),
          AdditionalInformation: S.optional(SensitiveString),
          PartyType: S.optional(PartyType),
          BusinessName: S.optional(SensitiveString),
          FirstName: S.optional(SensitiveString),
          MiddleName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BirthDate: S.optional(SensitiveString),
          Gender: S.optional(Gender),
          PhoneNumber: S.optional(SensitiveString),
          MobilePhoneNumber: S.optional(SensitiveString),
          HomePhoneNumber: S.optional(SensitiveString),
          BusinessPhoneNumber: S.optional(SensitiveString),
          EmailAddress: S.optional(SensitiveString),
          PersonalEmailAddress: S.optional(SensitiveString),
          BusinessEmailAddress: S.optional(SensitiveString),
          Address: S.optional(Address),
          ShippingAddress: S.optional(Address),
          MailingAddress: S.optional(Address),
          BillingAddress: S.optional(Address),
          Attributes: S.optional(Attributes),
          FoundByItems: S.optional(FoundByList),
          PartyTypeString: S.optional(SensitiveString),
          GenderString: S.optional(SensitiveString),
          ProfileType: S.optional(ProfileType),
          EngagementPreferences: S.optional(EngagementPreferences),
        }),
      ).annotate({ identifier: "Profile" });
    case 7:
      return S.Array(Profile);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Errors: S.optional(BatchGetProfileErrorList),
          Profiles: S.optional(ProfileList),
        }),
      ).annotate({ identifier: "BatchGetProfileResponse" });
    case 1:
      return S.suspend(() => S.Struct({ Id: S.String, Object: SensitiveString })).annotate({
        identifier: "BatchPutProfileObjectRequestItem",
      });
    case 2:
      return S.Array(BatchPutProfileObjectRequestItem);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String,
          Items: BatchPutProfileObjectRequestItemList,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/profiles/objects/batch-put-profile-object",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchPutProfileObjectRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Id: S.String, ProfileObjectUniqueKey: S.String })).annotate(
        {
          identifier: "BatchPutProfileObjectResponseItem",
        },
      );
    case 5:
      return S.Array(BatchPutProfileObjectResponseItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ Id: S.String, Code: S.Number, Message: S.optional(S.String) }),
      ).annotate({
        identifier: "BatchPutProfileObjectErrorItem",
      });
    case 7:
      return S.Array(BatchPutProfileObjectErrorItem);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Successful: S.optional(BatchPutProfileObjectResponseList),
          Failed: S.optional(BatchPutProfileObjectErrorList),
        }),
      ).annotate({
        identifier: "BatchPutProfileObjectResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "AttributeItem",
      });
    case 2:
      return S.Array(AttributeItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ Attributes: AttributeList, Expression: S.String }),
      ).annotate({ identifier: "AttributeDetails" });
    case 4:
      return S.suspend(() => S.Struct({ Start: S.Number, End: S.Number })).annotate({
        identifier: "ValueRange",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.Number),
          Unit: S.optional(Unit),
          ValueRange: S.optional(ValueRange),
          TimestampSource: S.optional(S.String),
          TimestampFormat: S.optional(S.String),
        }),
      ).annotate({ identifier: "Range" });
    case 6:
      return S.suspend(() => S.Struct({ Value: S.String, Operator: Operator })).annotate({
        identifier: "Threshold",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Range: S.optional(Range),
          ObjectCount: S.optional(S.Number),
          Threshold: S.optional(Threshold),
        }),
      ).annotate({ identifier: "Conditions" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DimensionType: FilterDimensionType, Values: ValueList }),
      ).annotate({ identifier: "FilterAttributeDimension" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ FilterAttributeDimension.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ Attributes: AttributeMap })).annotate({
        identifier: "FilterDimension",
      });
    case 3:
      return S.Array(FilterDimension);
    case 4:
      return S.suspend(() => S.Struct({ Type: Type, Dimensions: FilterDimensionList })).annotate({
        identifier: "FilterGroup",
      });
    case 5:
      return S.Array(FilterGroup);
    case 6:
      return S.suspend(() => S.Struct({ Include: Include, Groups: GroupList })).annotate({
        identifier: "Filter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          CalculatedAttributeName: S.String.pipe(T.HttpLabel("CalculatedAttributeName")),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          AttributeDetails: AttributeDetails,
          Conditions: S.optional(Conditions),
          Filter: S.optional(Filter),
          Statistic: Statistic,
          UseHistoricalData: S.optional(S.Boolean),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateCalculatedAttributeDefinitionRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProgressPercentage: S.optional(S.Number), Message: S.optional(S.String) }),
      ).annotate({ identifier: "Readiness" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          AttributeDetails: S.optional(AttributeDetails),
          Conditions: S.optional(Conditions),
          Filter: S.optional(Filter),
          Statistic: S.optional(Statistic),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UseHistoricalData: S.optional(S.Boolean),
          Status: S.optional(ReadinessStatus),
          Readiness: S.optional(Readiness),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "CreateCalculatedAttributeDefinitionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DayOfTheWeek: JobScheduleDayOfTheWeek, Time: S.String }),
      ).annotate({ identifier: "JobSchedule" });
    case 3:
      return S.Array(MatchingAttributes);
    case 4:
      return S.suspend(() => S.Struct({ MatchingAttributesList: MatchingAttributesList })).annotate(
        { identifier: "Consolidation" },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConflictResolvingModel: ConflictResolvingModel,
          SourceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConflictResolution" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          Consolidation: S.optional(Consolidation),
          ConflictResolution: S.optional(ConflictResolution),
          MinAllowedConfidenceScoreForMerging: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AutoMerging" });
    case 7:
      return S.suspend(() =>
        S.Struct({ S3BucketName: S.String, S3KeyName: S.optional(S.String) }),
      ).annotate({ identifier: "S3ExportingConfig" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ S3Exporting: S.optional(S3ExportingConfig) })).annotate({
        identifier: "ExportingConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          JobSchedule: S.optional(JobSchedule),
          AutoMerging: S.optional(AutoMerging),
          ExportingConfig: S.optional(ExportingConfig),
        }),
      ).annotate({ identifier: "MatchingRequest" });
    case 2:
      return S.suspend(() => S.Struct({ Rule: MatchingRuleAttributeList })).annotate({
        identifier: "MatchingRule",
      });
    case 3:
      return S.Array(MatchingRule);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AttributeMatchingModel: AttributeMatchingModel,
          Address: S.optional(AddressList),
          PhoneNumber: S.optional(PhoneNumberList),
          EmailAddress: S.optional(EmailList),
        }),
      ).annotate({ identifier: "AttributeTypesSelector" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          MatchingRules: S.optional(MatchingRules),
          MaxAllowedRuleLevelForMerging: S.optional(S.Number),
          MaxAllowedRuleLevelForMatching: S.optional(S.Number),
          AttributeTypesSelector: S.optional(AttributeTypesSelector),
          ConflictResolution: S.optional(ConflictResolution),
          ExportingConfig: S.optional(ExportingConfig),
        }),
      ).annotate({ identifier: "RuleBasedMatchingRequest" });
    case 6:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "DataStoreRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          DefaultExpirationDays: S.Number,
          DefaultEncryptionKey: S.optional(S.String),
          DeadLetterQueueUrl: S.optional(S.String),
          Matching: S.optional(MatchingRequest),
          RuleBasedMatching: S.optional(RuleBasedMatchingRequest),
          DataStore: S.optional(DataStoreRequest),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDomainRequest" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          JobSchedule: S.optional(JobSchedule),
          AutoMerging: S.optional(AutoMerging),
          ExportingConfig: S.optional(ExportingConfig),
        }),
      ).annotate({ identifier: "MatchingResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          MatchingRules: S.optional(MatchingRules),
          Status: S.optional(RuleBasedMatchingStatus),
          MaxAllowedRuleLevelForMerging: S.optional(S.Number),
          MaxAllowedRuleLevelForMatching: S.optional(S.Number),
          AttributeTypesSelector: S.optional(AttributeTypesSelector),
          ConflictResolution: S.optional(ConflictResolution),
          ExportingConfig: S.optional(ExportingConfig),
        }),
      ).annotate({
        identifier: "RuleBasedMatchingResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), Readiness: S.optional(Readiness) }),
      ).annotate({ identifier: "DataStoreResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          DefaultExpirationDays: S.Number,
          DefaultEncryptionKey: S.optional(S.String),
          DeadLetterQueueUrl: S.optional(S.String),
          Matching: S.optional(MatchingResponse),
          RuleBasedMatching: S.optional(RuleBasedMatchingResponse),
          DataStore: S.optional(DataStoreResponse),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "CreateDomainResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          LayoutDefinitionName: S.String.pipe(T.HttpLabel("LayoutDefinitionName")),
          Description: SensitiveString,
          DisplayName: S.String,
          IsDefault: S.optional(S.Boolean),
          LayoutType: LayoutType,
          Layout: SensitiveString,
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/layouts/{LayoutDefinitionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDomainLayoutRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LayoutDefinitionName: S.String,
          Description: SensitiveString,
          DisplayName: S.String,
          IsDefault: S.optional(S.Boolean),
          LayoutType: LayoutType,
          Layout: SensitiveString,
          Version: S.String,
          Tags: S.optional(TagMap),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CreateDomainLayoutResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Uri: S.String,
          EventStreamName: S.String.pipe(T.HttpLabel("EventStreamName")),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/event-streams/{EventStreamName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateEventStreamRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ EventStreamArn: S.String, Tags: S.optional(TagMap) }),
      ).annotate({
        identifier: "CreateEventStreamResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(S.String),
          FieldName: S.optional(S.String),
          ComparisonOperator: ComparisonOperator,
          Values: EventTriggerValues,
        }),
      ).annotate({ identifier: "ObjectAttribute" });
    case 1:
      return S.Array(ObjectAttribute);
    case 2:
      return S.suspend(() => S.Struct({ ObjectAttributes: ObjectAttributes })).annotate({
        identifier: "EventTriggerDimension",
      });
    case 3:
      return S.Array(EventTriggerDimension);
    case 4:
      return S.suspend(() =>
        S.Struct({
          EventTriggerDimensions: EventTriggerDimensions,
          LogicalOperator: EventTriggerLogicalOperator,
        }),
      ).annotate({ identifier: "EventTriggerCondition" });
    case 5:
      return S.Array(EventTriggerCondition);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Unit: PeriodUnit,
          Value: S.Number,
          MaxInvocationsPerProfile: S.optional(S.Number),
          Unlimited: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Period" });
    case 7:
      return S.Array(Period);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EventExpiration: S.optional(S.Number), Periods: S.optional(Periods) }),
      ).annotate({ identifier: "EventTriggerLimits" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EventTriggerName: S.String.pipe(T.HttpLabel("EventTriggerName")),
          ObjectTypeName: S.String,
          Description: S.optional(SensitiveString),
          EventTriggerConditions: EventTriggerConditions,
          SegmentFilter: S.optional(S.String),
          EventTriggerLimits: S.optional(EventTriggerLimits),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/event-triggers/{EventTriggerName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEventTriggerRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EventTriggerName: S.optional(S.String),
          ObjectTypeName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          EventTriggerConditions: S.optional(EventTriggerConditions),
          SegmentFilter: S.optional(S.String),
          EventTriggerLimits: S.optional(EventTriggerLimits),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "CreateEventTriggerResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ DatetimeTypeFieldName: S.optional(S.String) })).annotate({
        identifier: "IncrementalPullConfig",
      });
    case 4:
      return S.suspend(() => S.Struct({ Object: S.String })).annotate({
        identifier: "MarketoSourceProperties",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ BucketName: S.String, BucketPrefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3SourceProperties" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Object: S.String,
          EnableDynamicFieldUpdate: S.optional(S.Boolean),
          IncludeDeletedRecords: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SalesforceSourceProperties",
      });
    case 7:
      return S.suspend(() => S.Struct({ Object: S.String })).annotate({
        identifier: "ServiceNowSourceProperties",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Marketo: S.optional(MarketoSourceProperties),
          S3: S.optional(S3SourceProperties),
          Salesforce: S.optional(SalesforceSourceProperties),
          ServiceNow: S.optional(ServiceNowSourceProperties),
          Zendesk: S.optional(ZendeskSourceProperties),
        }),
      ).annotate({
        identifier: "SourceConnectorProperties",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConnectorProfileName: S.optional(S.String),
          ConnectorType: SourceConnectorType,
          IncrementalPullConfig: S.optional(IncrementalPullConfig),
          SourceConnectorProperties: SourceConnectorProperties,
        }),
      ).annotate({ identifier: "SourceFlowConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Marketo: S.optional(MarketoConnectorOperator),
          S3: S.optional(S3ConnectorOperator),
          Salesforce: S.optional(SalesforceConnectorOperator),
          ServiceNow: S.optional(ServiceNowConnectorOperator),
          Zendesk: S.optional(ZendeskConnectorOperator),
        }),
      ).annotate({ identifier: "ConnectorOperator" });
    case 3:
      return S.Record(OperatorPropertiesKeys, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorOperator: S.optional(ConnectorOperator),
          DestinationField: S.optional(S.String),
          SourceFields: SourceFields,
          TaskProperties: S.optional(TaskPropertiesMap),
          TaskType: TaskType,
        }),
      ).annotate({ identifier: "Task" });
    case 5:
      return S.Array(Task);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ScheduleExpression: S.String,
          DataPullMode: S.optional(DataPullMode),
          ScheduleStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ScheduleEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Timezone: S.optional(S.String),
          ScheduleOffset: S.optional(S.Number),
          FirstExecutionFrom: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ScheduledTriggerProperties",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Scheduled: S.optional(ScheduledTriggerProperties) }),
      ).annotate({ identifier: "TriggerProperties" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TriggerType: TriggerType, TriggerProperties: S.optional(TriggerProperties) }),
      ).annotate({ identifier: "TriggerConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          FlowName: S.String,
          KmsArn: S.String,
          SourceFlowConfig: SourceFlowConfig,
          Tasks: Tasks,
          TriggerConfig: TriggerConfig,
        }),
      ).annotate({ identifier: "FlowDefinition" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Batch" });
    case 3:
      return S.Array(Batch);
    case 4:
      return S.suspend(() =>
        S.Struct({ FlowDefinition: FlowDefinition, Batches: S.optional(Batches) }),
      ).annotate({ identifier: "AppflowIntegration" });
    case 5:
      return S.suspend(() =>
        S.Struct({ AppflowIntegration: S.optional(AppflowIntegration) }),
      ).annotate({ identifier: "IntegrationConfig" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          WorkflowType: WorkflowType,
          IntegrationConfig: IntegrationConfig,
          ObjectTypeName: S.String,
          RoleArn: S.String,
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/workflows/integrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIntegrationWorkflowRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ WorkflowId: S.String, Message: S.String })).annotate({
        identifier: "CreateIntegrationWorkflowResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          AccountNumber: S.optional(SensitiveString),
          AdditionalInformation: S.optional(SensitiveString),
          PartyType: S.optional(PartyType),
          BusinessName: S.optional(SensitiveString),
          FirstName: S.optional(SensitiveString),
          MiddleName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BirthDate: S.optional(SensitiveString),
          Gender: S.optional(Gender),
          PhoneNumber: S.optional(SensitiveString),
          MobilePhoneNumber: S.optional(SensitiveString),
          HomePhoneNumber: S.optional(SensitiveString),
          BusinessPhoneNumber: S.optional(SensitiveString),
          EmailAddress: S.optional(SensitiveString),
          PersonalEmailAddress: S.optional(SensitiveString),
          BusinessEmailAddress: S.optional(SensitiveString),
          Address: S.optional(Address),
          ShippingAddress: S.optional(Address),
          MailingAddress: S.optional(Address),
          BillingAddress: S.optional(Address),
          Attributes: S.optional(Attributes),
          PartyTypeString: S.optional(SensitiveString),
          GenderString: S.optional(SensitiveString),
          ProfileType: S.optional(ProfileType),
          EngagementPreferences: S.optional(EngagementPreferences),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateProfileRequest" });
    case 1:
      return S.suspend(() => S.Struct({ ProfileId: S.String })).annotate({
        identifier: "CreateProfileResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EventType: S.String,
          EventValueThreshold: S.optional(S.Number),
          EventWeight: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EventParameters" });
    case 3:
      return S.Array(EventParameters);
    case 4:
      return S.suspend(() => S.Struct({ EventParametersList: EventParametersList })).annotate({
        identifier: "EventsConfig",
      });
    case 5:
      return S.suspend(() => S.Struct({ MinProvisionedTPS: S.optional(S.Number) })).annotate({
        identifier: "InferenceConfig",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ ColumnNamesList.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String, CapType: DiversityCapType, Target: S.String }),
      ).annotate({ identifier: "DiversityColumn" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(DiversityColumn);
    case 1:
      return S.suspend(() =>
        S.Struct({ DiversityColumns: S.optional(DiversityColumnsList) }),
      ).annotate({ identifier: "DiversityConfig" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EventsConfig: S.optional(EventsConfig),
          TrainingFrequency: S.optional(S.Number),
          InferenceConfig: S.optional(InferenceConfig),
          IncludedColumns: S.optional(IncludedColumns),
          ExcludedColumns: S.optional(IncludedColumns),
          DiversityConfig: S.optional(DiversityConfig),
        }),
      ).annotate({ identifier: "RecommenderConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderName: S.String.pipe(T.HttpLabel("RecommenderName")),
          RecommenderRecipeName: RecommenderRecipeName,
          RecommenderConfig: S.optional(RecommenderConfig),
          Description: S.optional(SensitiveString),
          RecommenderSchemaName: S.optional(S.String),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/recommenders/{RecommenderName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRecommenderRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ RecommenderArn: S.String, Tags: S.optional(TagMap) }),
      ).annotate({
        identifier: "CreateRecommenderResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderFilterName: S.String.pipe(T.HttpLabel("RecommenderFilterName")),
          RecommenderFilterExpression: SensitiveString,
          RecommenderSchemaName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/recommender-filters/{RecommenderFilterName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRecommenderFilterRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RecommenderFilterArn: S.String, Tags: S.optional(TagMap) }),
      ).annotate({
        identifier: "CreateRecommenderFilterResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TargetFieldName: S.String,
          ContentType: S.optional(ContentType),
          FeatureType: S.optional(FeatureType),
        }),
      ).annotate({ identifier: "RecommenderSchemaField" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RecommenderSchemaField);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ RecommenderSchemaFieldList.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderSchemaName: S.String.pipe(T.HttpLabel("RecommenderSchemaName")),
          Fields: RecommenderSchemaFields,
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/recommender-schemas/{RecommenderSchemaName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateRecommenderSchemaRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RecommenderSchemaArn: S.String,
          RecommenderSchemaName: S.String,
          Fields: RecommenderSchemaFields,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: RecommenderSchemaStatus,
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "CreateRecommenderSchemaResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DimensionType: StringDimensionType, Values: Values }),
      ).annotate({ identifier: "ProfileDimension" });
    case 5:
      return S.suspend(() =>
        S.Struct({ DimensionType: StringDimensionType, Values: ExtraLengthValues }),
      ).annotate({
        identifier: "ExtraLengthValueProfileDimension",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DimensionType: DateDimensionType, Values: DateValues }),
      ).annotate({ identifier: "DateDimension" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(ProfileDimension),
          Country: S.optional(ProfileDimension),
          County: S.optional(ProfileDimension),
          PostalCode: S.optional(ProfileDimension),
          Province: S.optional(ProfileDimension),
          State: S.optional(ProfileDimension),
        }),
      ).annotate({ identifier: "AddressDimension" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ AttributeDimension.pipe(S.optional));
    case 1:
      return S.Array(ProfileType);
    case 2:
      return S.suspend(() =>
        S.Struct({ DimensionType: ProfileTypeDimensionType, Values: ProfileTypeValues }),
      ).annotate({ identifier: "ProfileTypeDimension" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccountNumber: S.optional(ProfileDimension),
          AdditionalInformation: S.optional(ExtraLengthValueProfileDimension),
          FirstName: S.optional(ProfileDimension),
          LastName: S.optional(ProfileDimension),
          MiddleName: S.optional(ProfileDimension),
          GenderString: S.optional(ProfileDimension),
          PartyTypeString: S.optional(ProfileDimension),
          BirthDate: S.optional(DateDimension),
          PhoneNumber: S.optional(ProfileDimension),
          BusinessName: S.optional(ProfileDimension),
          BusinessPhoneNumber: S.optional(ProfileDimension),
          HomePhoneNumber: S.optional(ProfileDimension),
          MobilePhoneNumber: S.optional(ProfileDimension),
          EmailAddress: S.optional(ProfileDimension),
          PersonalEmailAddress: S.optional(ProfileDimension),
          BusinessEmailAddress: S.optional(ProfileDimension),
          Address: S.optional(AddressDimension),
          ShippingAddress: S.optional(AddressDimension),
          MailingAddress: S.optional(AddressDimension),
          BillingAddress: S.optional(AddressDimension),
          Attributes: S.optional(CustomAttributes),
          ProfileType: S.optional(ProfileTypeDimension),
        }),
      ).annotate({ identifier: "ProfileAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DimensionType: AttributeDimensionType,
          Values: Values,
          ConditionOverrides: S.optional(ConditionOverrides),
        }),
      ).annotate({
        identifier: "CalculatedAttributeDimension",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ CalculatedAttributeDimension.pipe(S.optional));
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ ProfileAttributes: ProfileAttributes }),
        /*@__PURE__*/ S.Struct({ CalculatedAttributes: CalculatedCustomAttributes }),
      ]);
    case 7:
      return S.Array(Dimension);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ SegmentDefinitionName: S.optional(S.String) })).annotate({
        identifier: "SourceSegment",
      });
    case 1:
      return S.Array(SourceSegment);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Dimensions: S.optional(DimensionList),
          SourceSegments: S.optional(SourceSegmentList),
          SourceType: S.optional(IncludeOptions),
          Type: S.optional(IncludeOptions),
        }),
      ).annotate({ identifier: "Group" });
    case 3:
      return S.Array(Group);
    case 4:
      return S.suspend(() =>
        S.Struct({ Groups: S.optional(SegmentGroupList), Include: S.optional(IncludeOptions) }),
      ).annotate({ identifier: "SegmentGroup" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          DataType: S.optional(SegmentSortDataType),
          Order: SegmentSortOrder,
          Type: S.optional(SortAttributeType),
        }),
      ).annotate({ identifier: "SortAttribute" });
    case 6:
      return S.Array(SortAttribute);
    case 7:
      return S.suspend(() => S.Struct({ Attributes: SortAttributeList })).annotate({
        identifier: "SegmentSort",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
          DisplayName: S.String,
          Description: S.optional(SensitiveString),
          SegmentGroups: S.optional(SegmentGroup),
          SegmentSqlQuery: S.optional(SensitiveString),
          SegmentSort: S.optional(SegmentSort),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSegmentDefinitionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SegmentDefinitionName: S.String,
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SegmentDefinitionArn: S.optional(S.String),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "CreateSegmentDefinitionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentQuery: S.optional(SegmentGroupStructure),
          SegmentSqlQuery: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/segment-estimates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSegmentEstimateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          EstimateId: S.optional(S.String),
          StatusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
        }),
      ).annotate({
        identifier: "CreateSegmentEstimateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
          DataFormat: DataFormat,
          EncryptionKey: S.optional(S.String),
          RoleArn: S.optional(S.String),
          DestinationUri: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateSegmentSnapshotRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ SnapshotId: S.String })).annotate({
        identifier: "CreateSegmentSnapshotResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(S.String),
          Target: S.optional(S.String),
          ContentType: S.optional(FieldContentType),
        }),
      ).annotate({ identifier: "ObjectTypeField" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ ObjectTypeField.pipe(S.optional));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          DisplayName: S.String,
          Fields: FieldMap,
          UniqueKey: S.String,
          DataExpiry: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/upload-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateUploadJobRequest" });
    case 1:
      return S.suspend(() => S.Struct({ JobId: S.String })).annotate({
        identifier: "CreateUploadJobResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          CalculatedAttributeName: S.String.pipe(T.HttpLabel("CalculatedAttributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCalculatedAttributeDefinitionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{DomainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Message: S.String })).annotate({
        identifier: "DeleteDomainResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          LayoutDefinitionName: S.String.pipe(T.HttpLabel("LayoutDefinitionName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/layouts/{LayoutDefinitionName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDomainLayoutRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Message: S.String })).annotate({
        identifier: "DeleteDomainLayoutResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/domain-object-types/{ObjectTypeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDomainObjectTypeRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDomainObjectTypeResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EventStreamName: S.String.pipe(T.HttpLabel("EventStreamName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/event-streams/{EventStreamName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEventStreamRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EventTriggerName: S.String.pipe(T.HttpLabel("EventTriggerName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/event-triggers/{EventTriggerName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEventTriggerRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")), Uri: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/integrations/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIntegrationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String,
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProfileRequest" });
    case 5:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) })).annotate({
        identifier: "DeleteProfileResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String,
          KeyName: S.String,
          Values: RequestValueList,
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/keys/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProfileKeyRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String,
          ProfileObjectUniqueKey: S.String,
          ObjectTypeName: S.String,
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/objects/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProfileObjectRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) })).annotate({
        identifier: "DeleteProfileObjectResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/object-types/{ObjectTypeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteProfileObjectTypeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderName: S.String.pipe(T.HttpLabel("RecommenderName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/recommenders/{RecommenderName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRecommenderRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderFilterName: S.String.pipe(T.HttpLabel("RecommenderFilterName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/recommender-filters/{RecommenderFilterName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecommenderFilterRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderSchemaName: S.String.pipe(T.HttpLabel("RecommenderSchemaName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/recommender-schemas/{RecommenderSchemaName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecommenderSchemaRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteRecommenderSchemaResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSegmentDefinitionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}/subscriptions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSegmentSubscriptionRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          WorkflowId: S.String.pipe(T.HttpLabel("WorkflowId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{DomainName}/workflows/{WorkflowId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteWorkflowRequest" });
    case 1:
      return S.Array(SensitiveString);
    case 2:
      return S.suspend(() =>
        S.Struct({ Objects: Objects, DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/detect/object-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DetectProfileObjectTypeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardIdentifiers: S.optional(StandardIdentifierList),
          FieldNames: S.optional(FieldNameList),
        }),
      ).annotate({ identifier: "ObjectTypeKey" });
    case 4:
      return S.Array(ObjectTypeKey);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ ObjectTypeKeyList.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          SourceLastUpdatedTimestampFormat: S.optional(S.String),
          Fields: S.optional(FieldMap),
          Keys: S.optional(KeyMap),
        }),
      ).annotate({
        identifier: "DetectedProfileObjectType",
      });
    case 7:
      return S.Array(DetectedProfileObjectType);
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DetectedProfileObjectTypes: S.optional(DetectedProfileObjectTypes) }),
      ).annotate({
        identifier: "DetectProfileObjectTypeResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{DomainName}/segment-streams" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateStreamForSegmentsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Consolidation: Consolidation,
          ConflictResolution: ConflictResolution,
          MinAllowedConfidenceScoreForMerging: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/identity-resolution-jobs/auto-merging-preview",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAutoMergingPreviewRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          NumberOfMatchesInSample: S.optional(S.Number),
          NumberOfProfilesInSample: S.optional(S.Number),
          NumberOfProfilesWillBeMerged: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "GetAutoMergingPreviewResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          CalculatedAttributeName: S.String.pipe(T.HttpLabel("CalculatedAttributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCalculatedAttributeDefinitionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Statistic: S.optional(Statistic),
          Filter: S.optional(Filter),
          Conditions: S.optional(Conditions),
          AttributeDetails: S.optional(AttributeDetails),
          UseHistoricalData: S.optional(S.Boolean),
          Status: S.optional(ReadinessStatus),
          Readiness: S.optional(Readiness),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetCalculatedAttributeDefinitionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
          CalculatedAttributeName: S.String.pipe(T.HttpLabel("CalculatedAttributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/profile/{ProfileId}/calculated-attributes/{CalculatedAttributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCalculatedAttributeForProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          IsDataPartial: S.optional(S.String),
          Value: S.optional(S.String),
          LastObjectTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetCalculatedAttributeForProfileResponse",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDomainRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProfileCount: S.optional(S.Number),
          MeteringProfileCount: S.optional(S.Number),
          ObjectCount: S.optional(S.Number),
          TotalSize: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DomainStats" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          DefaultExpirationDays: S.optional(S.Number),
          DefaultEncryptionKey: S.optional(S.String),
          DeadLetterQueueUrl: S.optional(S.String),
          Stats: S.optional(DomainStats),
          Matching: S.optional(MatchingResponse),
          RuleBasedMatching: S.optional(RuleBasedMatchingResponse),
          DataStore: S.optional(DataStoreResponse),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetDomainResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          LayoutDefinitionName: S.String.pipe(T.HttpLabel("LayoutDefinitionName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/layouts/{LayoutDefinitionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDomainLayoutRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LayoutDefinitionName: S.String,
          Description: SensitiveString,
          DisplayName: S.String,
          IsDefault: S.optional(S.Boolean),
          LayoutType: LayoutType,
          Layout: SensitiveString,
          Version: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetDomainLayoutResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/domain-object-types/{ObjectTypeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDomainObjectTypeRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Source: S.String,
          Target: S.String,
          ContentType: S.optional(ContentType),
          FeatureType: S.optional(FeatureType),
        }),
      ).annotate({ identifier: "DomainObjectTypeField" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ DomainObjectTypeField.pipe(S.optional));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.String,
          Description: S.optional(SensitiveString),
          EncryptionKey: S.optional(S.String),
          Fields: S.optional(DomainObjectTypeFields),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetDomainObjectTypeResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EventStreamName: S.String.pipe(T.HttpLabel("EventStreamName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/event-streams/{EventStreamName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEventStreamRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uri: S.String,
          Status: EventStreamDestinationStatus,
          UnhealthySince: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Message: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EventStreamDestinationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          EventStreamArn: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          State: EventStreamState,
          StoppedSince: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DestinationDetails: EventStreamDestinationDetails,
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetEventStreamResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EventTriggerName: S.String.pipe(T.HttpLabel("EventTriggerName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/event-triggers/{EventTriggerName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEventTriggerRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EventTriggerName: S.optional(S.String),
          ObjectTypeName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          EventTriggerConditions: S.optional(EventTriggerConditions),
          SegmentFilter: S.optional(S.String),
          EventTriggerLimits: S.optional(EventTriggerLimits),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetEventTriggerResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/identity-resolution-jobs/{JobId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIdentityResolutionJobRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ S3BucketName: S.optional(S.String), S3KeyName: S.optional(S.String) }),
      ).annotate({ identifier: "S3ExportingLocation" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ S3Exporting: S.optional(S3ExportingLocation) })).annotate({
        identifier: "ExportingLocation",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NumberOfProfilesReviewed: S.optional(S.Number),
          NumberOfMatchesFound: S.optional(S.Number),
          NumberOfMergesDone: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobStats" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          JobId: S.optional(S.String),
          Status: S.optional(IdentityResolutionJobStatus),
          Message: S.optional(S.String),
          JobStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          JobEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          JobExpirationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AutoMerging: S.optional(AutoMerging),
          ExportingLocation: S.optional(ExportingLocation),
          JobStats: S.optional(JobStats),
        }),
      ).annotate({
        identifier: "GetIdentityResolutionJobResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")), Uri: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/integrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIntegrationRequest" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          Uri: S.String,
          ObjectTypeName: S.optional(S.String),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: S.optional(TagMap),
          ObjectTypeNames: S.optional(ObjectTypeNames),
          WorkflowId: S.optional(S.String),
          IsUnstructured: S.optional(S.Boolean),
          RoleArn: S.optional(S.String),
          EventTriggerNames: S.optional(EventTriggerNames),
          Scope: S.optional(Scope),
        }),
      ).annotate({ identifier: "GetIntegrationResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/matches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMatchesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MatchId: S.optional(S.String),
          ProfileIds: S.optional(ProfileIdList),
          ConfidenceScore: S.optional(S.Number),
        }),
      ).annotate({ identifier: "MatchItem" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MatchItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MatchGenerationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PotentialMatches: S.optional(S.Number),
          Matches: S.optional(MatchesList),
        }),
      ).annotate({ identifier: "GetMatchesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
          AttributeName: S.String.pipe(T.HttpLabel("AttributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/object-types/{ObjectTypeName}/attributes/{AttributeName}/statistics",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetObjectTypeAttributeStatisticsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ P5: S.Number, P25: S.Number, P50: S.Number, P75: S.Number, P95: S.Number }),
      ).annotate({
        identifier: "GetObjectTypeAttributeStatisticsPercentiles",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Maximum: S.Number,
          Minimum: S.Number,
          Average: S.Number,
          StandardDeviation: S.Number,
          Percentiles: GetObjectTypeAttributeStatisticsPercentiles,
        }),
      ).annotate({
        identifier: "GetObjectTypeAttributeStatisticsStats",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Statistics: GetObjectTypeAttributeStatisticsStats,
          CalculatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "GetObjectTypeAttributeStatisticsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
          Id: S.String.pipe(T.HttpLabel("Id")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/profiles/{ProfileId}/history-records/{Id}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProfileHistoryRecordRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          ObjectTypeName: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActionType: ActionType,
          ProfileObjectUniqueKey: S.optional(S.String),
          Content: S.optional(SensitiveString),
          PerformedBy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetProfileHistoryRecordResponse",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/object-types/{ObjectTypeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProfileObjectTypeRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.String,
          Description: SensitiveString,
          TemplateId: S.optional(S.String),
          ExpirationDays: S.optional(S.Number),
          EncryptionKey: S.optional(S.String),
          AllowProfileCreation: S.optional(S.Boolean),
          SourceLastUpdatedTimestampFormat: S.optional(S.String),
          MaxAvailableProfileObjectCount: S.optional(S.Number),
          MaxProfileObjectCount: S.optional(S.Number),
          SourcePriority: S.optional(S.Number),
          Fields: S.optional(FieldMap),
          Keys: S.optional(KeyMap),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetProfileObjectTypeResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TemplateId: S.String.pipe(T.HttpLabel("TemplateId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/{TemplateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProfileObjectTypeTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateId: S.optional(S.String),
          SourceName: S.optional(S.String),
          SourceObject: S.optional(S.String),
          AllowProfileCreation: S.optional(S.Boolean),
          SourceLastUpdatedTimestampFormat: S.optional(S.String),
          Fields: S.optional(FieldMap),
          Keys: S.optional(KeyMap),
        }),
      ).annotate({
        identifier: "GetProfileObjectTypeTemplateResponse",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(RecommenderFilterValues) }),
      ).annotate({ identifier: "RecommenderFilter" });
    case 6:
      return S.Array(RecommenderFilter);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Values: S.optional(RecommenderFilterValues),
          PromotionName: S.optional(S.String),
          PercentPromotedItems: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "RecommenderPromotionalFilter",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RecommenderPromotionalFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({ MetadataColumns: S.optional(MetadataColumnsList) }),
      ).annotate({ identifier: "MetadataConfig" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ Enabled: S.Boolean, Values: S.optional(DiversityValuesMap) }),
      ).annotate({
        identifier: "RecommendationDiversityConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
          RecommenderName: S.String,
          Context: S.optional(RecommenderContext),
          RecommenderFilters: S.optional(RecommenderFilters),
          RecommenderPromotionalFilters: S.optional(RecommenderPromotionalFilters),
          CandidateIds: S.optional(CandidateIdList),
          MaxResults: S.optional(S.Number),
          MetadataConfig: S.optional(MetadataConfig),
          DiversityConfig: S.optional(RecommendationDiversityConfig),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/profiles/{ProfileId}/recommendations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProfileRecommendationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(SensitiveString),
          Name: S.optional(SensitiveString),
          Code: S.optional(SensitiveString),
          Type: S.optional(SensitiveString),
          Category: S.optional(SensitiveString),
          Description: S.optional(SensitiveString),
          AdditionalInformation: S.optional(SensitiveString),
          ImageLink: S.optional(SensitiveString),
          Link: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Price: S.optional(SensitiveString),
          Attributes: S.optional(Attributes),
        }),
      ).annotate({ identifier: "CatalogItem" });
    case 6:
      return S.suspend(() =>
        S.Struct({ CatalogItem: S.optional(CatalogItem), Score: S.optional(S.Number) }),
      ).annotate({ identifier: "Recommendation" });
    case 7:
      return S.Array(Recommendation);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Recommendations: S.optional(Recommendations) })).annotate({
        identifier: "GetProfileRecommendationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderName: S.String.pipe(T.HttpLabel("RecommenderName")),
          TrainingMetricsCount: S.optional(S.Number).pipe(T.HttpQuery("training-metrics-count")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/recommenders/{RecommenderName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRecommenderRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RecommenderConfig: S.optional(RecommenderConfig),
          Status: S.optional(RecommenderStatus),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureReason: S.optional(S.String),
          RecommenderVersionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecommenderUpdate" });
    case 3:
      return S.Record(TrainingMetricName, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Time: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Metrics: S.optional(Metrics),
          RecommenderVersionName: S.optional(S.String),
        }),
      ).annotate({ identifier: "TrainingMetrics" });
    case 5:
      return S.Array(TrainingMetrics);
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommenderName: S.String,
          RecommenderRecipeName: RecommenderRecipeName,
          RecommenderSchemaName: S.optional(S.String),
          RecommenderConfig: S.optional(RecommenderConfig),
          Description: S.optional(SensitiveString),
          Status: S.optional(RecommenderStatus),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureReason: S.optional(S.String),
          LatestRecommenderUpdate: S.optional(RecommenderUpdate),
          ActiveRecommenderVersionName: S.optional(S.String),
          TrainingMetrics: S.optional(TrainingMetricsList),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetRecommenderResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderFilterName: S.String.pipe(T.HttpLabel("RecommenderFilterName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/recommender-filters/{RecommenderFilterName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommenderFilterRequest",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RecommenderFilterName: S.String,
          RecommenderFilterExpression: SensitiveString,
          RecommenderSchemaName: S.optional(S.String),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: RecommenderFilterStatus,
          Description: S.optional(SensitiveString),
          FailureReason: S.optional(S.String),
          Tags: TagMap,
        }),
      ).annotate({
        identifier: "GetRecommenderFilterResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderSchemaName: S.String.pipe(T.HttpLabel("RecommenderSchemaName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/recommender-schemas/{RecommenderSchemaName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommenderSchemaRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RecommenderSchemaName: S.String,
          Fields: RecommenderSchemaFields,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: RecommenderSchemaStatus,
        }),
      ).annotate({
        identifier: "GetRecommenderSchemaResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentDefinitionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SegmentDefinitionName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          SegmentGroups: S.optional(SegmentGroup),
          SegmentSort: S.optional(SegmentSort),
          SegmentDefinitionArn: S.String,
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
          SegmentSqlQuery: S.optional(SensitiveString),
          SegmentType: S.optional(SegmentType),
        }),
      ).annotate({
        identifier: "GetSegmentDefinitionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EstimateId: S.String.pipe(T.HttpLabel("EstimateId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/segment-estimates/{EstimateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentEstimateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          EstimateId: S.optional(S.String),
          Status: S.optional(EstimateStatus),
          Estimate: S.optional(S.String),
          Message: S.optional(S.String),
          StatusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
        }),
      ).annotate({
        identifier: "GetSegmentEstimateResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
          ProfileIds: ProfileIds,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{DomainName}/segments/{SegmentDefinitionName}/membership",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentMembershipRequest",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String, QueryResult: QueryResult, Profile: S.optional(Profile) }),
      ).annotate({ identifier: "ProfileQueryResult" });
    case 1:
      return S.Array(ProfileQueryResult);
    case 2:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String, Message: S.String, Status: S.optional(S.Number) }),
      ).annotate({ identifier: "ProfileQueryFailures" });
    case 3:
      return S.Array(ProfileQueryFailures);
    case 4:
      return S.suspend(() =>
        S.Struct({
          SegmentDefinitionName: S.optional(S.String),
          Profiles: S.optional(Profiles),
          Failures: S.optional(Failures),
          LastComputedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetSegmentMembershipResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
          SnapshotId: S.String.pipe(T.HttpLabel("SnapshotId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots/{SnapshotId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentSnapshotRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SnapshotId: S.String,
          Status: SegmentSnapshotStatus,
          StatusMessage: S.optional(S.String),
          DataFormat: DataFormat,
          EncryptionKey: S.optional(S.String),
          RoleArn: S.optional(S.String),
          DestinationUri: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSegmentSnapshotResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}/subscriptions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSegmentSubscriptionRequest",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Interval: S.Number, Unit: S.optional(ScheduleConfigurationUnit) }),
      ).annotate({ identifier: "ScheduleConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextExecutedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastExecutedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ScheduledExecutions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(SegmentSubscriptionStatus),
          Message: S.optional(S.String),
          ScheduleConfiguration: S.optional(ScheduleConfiguration),
          ScheduledExecutions: S.optional(ScheduledExecutions),
          StartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetSegmentSubscriptionResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MatchType: MatchType,
          SearchKey: S.String,
          SearchValue: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/matches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSimilarProfilesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileIds: S.optional(ProfileIdList),
          MatchId: S.optional(S.String),
          MatchType: S.optional(MatchType),
          RuleLevel: S.optional(S.Number),
          ConfidenceScore: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSimilarProfilesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/segment-streams" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetStreamForSegmentsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SegmentName: S.optional(S.String),
          Status: S.optional(EventSubscriptionSegmentStatus),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociatedSegment" });
    case 7:
      return S.Array(AssociatedSegment);
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AssociatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AssociatedSegments: S.optional(AssociatedSegmentsList),
          DomainName: S.optional(S.String),
          DestinationArn: S.optional(S.String),
          DestinationRoleArn: S.optional(S.String),
          State: S.optional(EventSubscriptionState),
          DisassociatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          FailureReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetStreamForSegmentsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/upload-jobs/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUploadJobRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdatedRecords: S.optional(S.Number),
          CreatedRecords: S.optional(S.Number),
          FailedRecords: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ResultsSummary" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Status: S.optional(UploadJobStatus),
          StatusReason: S.optional(StatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Fields: S.optional(FieldMap),
          UniqueKey: S.optional(S.String),
          ResultsSummary: S.optional(ResultsSummary),
          DataExpiry: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetUploadJobResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/upload-jobs/{JobId}/path" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUploadJobPathRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Url: S.String,
          ClientToken: S.optional(S.String),
          ValidUntil: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetUploadJobPathResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          WorkflowId: S.String.pipe(T.HttpLabel("WorkflowId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/workflows/{WorkflowId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkflowRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SourceConnectorType: SourceConnectorType,
          ConnectorProfileName: S.String,
          RoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AppflowIntegrationWorkflowAttributes",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AppflowIntegration: S.optional(AppflowIntegrationWorkflowAttributes) }),
      ).annotate({ identifier: "WorkflowAttributes" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RecordsProcessed: S.Number, StepsCompleted: S.Number, TotalSteps: S.Number }),
      ).annotate({
        identifier: "AppflowIntegrationWorkflowMetrics",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AppflowIntegration: S.optional(AppflowIntegrationWorkflowMetrics) }),
      ).annotate({ identifier: "WorkflowMetrics" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          WorkflowId: S.optional(S.String),
          WorkflowType: S.optional(WorkflowType),
          Status: S.optional(Status),
          ErrorDescription: S.optional(S.String),
          StartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Attributes: S.optional(WorkflowAttributes),
          Metrics: S.optional(WorkflowMetrics),
        }),
      ).annotate({ identifier: "GetWorkflowResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          WorkflowId: S.String.pipe(T.HttpLabel("WorkflowId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/workflows/{WorkflowId}/steps" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetWorkflowStepsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FlowName: S.String,
          Status: Status,
          ExecutionMessage: S.String,
          RecordsProcessed: S.Number,
          BatchRecordsStartTime: S.String,
          BatchRecordsEndTime: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "AppflowIntegrationWorkflowStep",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AppflowIntegration: S.optional(AppflowIntegrationWorkflowStep) }),
      ).annotate({ identifier: "WorkflowStepItem" });
    case 7:
      return S.Array(WorkflowStepItem);
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          WorkflowId: S.optional(S.String),
          WorkflowType: S.optional(WorkflowType),
          Items: S.optional(WorkflowStepsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetWorkflowStepsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Uri: S.String,
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          IncludeHidden: S.optional(S.Boolean).pipe(T.HttpQuery("include-hidden")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/integrations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAccountIntegrationsRequest",
      });
    case 2:
      return S.Array(ListIntegrationItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(IntegrationList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccountIntegrationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/calculated-attributes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCalculatedAttributeDefinitionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UseHistoricalData: S.optional(S.Boolean),
          Status: S.optional(ReadinessStatus),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "ListCalculatedAttributeDefinitionItem",
      });
    case 6:
      return S.Array(ListCalculatedAttributeDefinitionItem);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(CalculatedAttributeDefinitionsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCalculatedAttributeDefinitionsResponse",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/profile/{ProfileId}/calculated-attributes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCalculatedAttributesForProfileRequest",
      });
    case 1:
      return S.Array(ListCalculatedAttributeForProfileItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(CalculatedAttributesForProfileList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCalculatedAttributesForProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/layouts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDomainLayoutsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LayoutDefinitionName: S.String,
          Description: SensitiveString,
          DisplayName: S.String,
          IsDefault: S.optional(S.Boolean),
          LayoutType: LayoutType,
          Tags: S.optional(TagMap),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "LayoutItem" });
    case 5:
      return S.Array(LayoutItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(LayoutList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDomainLayoutsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/domain-object-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainObjectTypesRequest",
      });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.String,
          Description: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "DomainObjectTypesListItem",
      });
    case 1:
      return S.Array(DomainObjectTypesListItem);
    case 2:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(DomainObjectTypesList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDomainObjectTypesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/domains" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDomainsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "ListDomainItem" });
    case 5:
      return S.Array(ListDomainItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(DomainList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDomainsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/event-streams" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEventStreamsRequest" });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Uri: S.String,
          Status: EventStreamDestinationStatus,
          UnhealthySince: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DestinationSummary" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          EventStreamName: S.String,
          EventStreamArn: S.String,
          State: EventStreamState,
          StoppedSince: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DestinationSummary: S.optional(DestinationSummary),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "EventStreamSummary" });
    case 2:
      return S.Array(EventStreamSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(EventStreamSummaryList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEventStreamsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/event-triggers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEventTriggersRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.optional(S.String),
          EventTriggerName: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "EventTriggerSummaryItem" });
    case 6:
      return S.Array(EventTriggerSummaryItem);
    case 7:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(EventTriggerSummaryList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListEventTriggersResponse",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/identity-resolution-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdentityResolutionJobsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          JobId: S.optional(S.String),
          Status: S.optional(IdentityResolutionJobStatus),
          JobStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          JobEndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          JobStats: S.optional(JobStats),
          ExportingLocation: S.optional(ExportingLocation),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentityResolutionJob" });
    case 2:
      return S.Array(IdentityResolutionJob);
    case 3:
      return S.suspend(() =>
        S.Struct({
          IdentityResolutionJobsList: S.optional(IdentityResolutionJobsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIdentityResolutionJobsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          IncludeHidden: S.optional(S.Boolean).pipe(T.HttpQuery("include-hidden")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/integrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListIntegrationsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(IntegrationList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListIntegrationsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/object-types/{ObjectTypeName}/attributes",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListObjectTypeAttributesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.String,
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ListObjectTypeAttributeItem",
      });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ListObjectTypeAttributeItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ListObjectTypeAttributesList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListObjectTypeAttributesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
          AttributeName: S.String.pipe(T.HttpLabel("AttributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/object-types/{ObjectTypeName}/attributes/{AttributeName}/values",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListObjectTypeAttributeValuesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Value: SensitiveString,
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "ListObjectTypeAttributeValuesItem",
      });
    case 4:
      return S.Array(ListObjectTypeAttributeValuesItem);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ListObjectTypeAttributeValuesList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListObjectTypeAttributeValuesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          AttributeName: S.String.pipe(T.HttpLabel("AttributeName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/profile-attributes/{AttributeName}/values",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ProfileAttributeValuesRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "AttributeValueItem",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AttributeValueItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          AttributeName: S.optional(S.String),
          Items: S.optional(AttributeValueItemList),
          StatusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
        }),
      ).annotate({
        identifier: "ProfileAttributeValuesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileId: S.String,
          ObjectTypeName: S.optional(S.String),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          ActionType: S.optional(ActionType),
          PerformedBy: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/history-records" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProfileHistoryRecordsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          ObjectTypeName: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActionType: ActionType,
          ProfileObjectUniqueKey: S.optional(S.String),
          PerformedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProfileHistoryRecord" });
    case 4:
      return S.Array(ProfileHistoryRecord);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProfileHistoryRecords: S.optional(ProfileHistoryRecords),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileHistoryRecordsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ KeyName: S.String, Values: RequestValueList })).annotate({
        identifier: "ObjectFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String,
          ProfileId: S.String,
          ObjectFilter: S.optional(ObjectFilter),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/objects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProfileObjectsRequest",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.optional(S.String),
          ProfileObjectUniqueKey: S.optional(S.String),
          Object: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ListProfileObjectsItem" });
    case 1:
      return S.Array(ListProfileObjectsItem);
    case 2:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(ProfileObjectList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListProfileObjectsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/object-types" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProfileObjectTypesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.String,
          Description: S.String,
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxProfileObjectCount: S.optional(S.Number),
          MaxAvailableProfileObjectCount: S.optional(S.Number),
          SourcePriority: S.optional(S.Number),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "ListProfileObjectTypeItem",
      });
    case 5:
      return S.Array(ListProfileObjectTypeItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(ProfileObjectTypeList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListProfileObjectTypesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListProfileObjectTypeTemplatesRequest",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateId: S.optional(S.String),
          SourceName: S.optional(S.String),
          SourceObject: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileObjectTypeTemplateItem",
      });
    case 1:
      return S.Array(ListProfileObjectTypeTemplateItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ProfileObjectTypeTemplateList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileObjectTypeTemplatesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/recommender-filters" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommenderFiltersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RecommenderFilterName: S.optional(S.String),
          RecommenderSchemaName: S.optional(S.String),
          RecommenderFilterExpression: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(SensitiveString),
          Status: S.optional(RecommenderFilterStatus),
          FailureReason: S.optional(S.String),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "RecommenderFilterSummary" });
    case 5:
      return S.Array(RecommenderFilterSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          RecommenderFilters: S.optional(RecommenderFilterSummaryList),
        }),
      ).annotate({
        identifier: "ListRecommenderFiltersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/recommender-recipes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommenderRecipesRequest",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ name: S.optional(RecommenderRecipeName), description: S.optional(S.String) }),
      ).annotate({ identifier: "RecommenderRecipe" });
    case 1:
      return S.Array(RecommenderRecipe);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          RecommenderRecipes: S.optional(RecommenderRecipesList),
        }),
      ).annotate({
        identifier: "ListRecommenderRecipesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/recommenders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListRecommendersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RecommenderName: S.optional(S.String),
          RecipeName: S.optional(RecommenderRecipeName),
          RecommenderSchemaName: S.optional(S.String),
          RecommenderConfig: S.optional(RecommenderConfig),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Description: S.optional(SensitiveString),
          Status: S.optional(RecommenderStatus),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
          FailureReason: S.optional(S.String),
          LatestRecommenderUpdate: S.optional(RecommenderUpdate),
        }),
      ).annotate({ identifier: "RecommenderSummary" });
    case 5:
      return S.Array(RecommenderSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Recommenders: S.optional(RecommenderSummaryList),
        }),
      ).annotate({ identifier: "ListRecommendersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/recommender-schemas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRecommenderSchemasRequest",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RecommenderSchemaName: S.String,
          Fields: RecommenderSchemaFields,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Status: RecommenderSchemaStatus,
        }),
      ).annotate({ identifier: "RecommenderSchemaSummary" });
    case 1:
      return S.Array(RecommenderSchemaSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          RecommenderSchemas: S.optional(RecommenderSchemaSummaryList),
        }),
      ).annotate({
        identifier: "ListRecommenderSchemasResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/profiles/ruleBasedMatches" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListRuleBasedMatchesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MatchIds: S.optional(MatchIdList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListRuleBasedMatchesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/segment-definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSegmentDefinitionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SegmentDefinitionName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          SegmentDefinitionArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
          SegmentType: S.optional(SegmentType),
        }),
      ).annotate({ identifier: "SegmentDefinitionItem" });
    case 7:
      return S.Array(SegmentDefinitionItem);
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Items: S.optional(SegmentDefinitionsList) }),
      ).annotate({
        identifier: "ListSegmentDefinitionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}/subscription-events",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSegmentSubscriptionEventsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.optional(S.String),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EventType: S.optional(SubscriptionEventType),
          Event: S.optional(SubscriptionEvent),
        }),
      ).annotate({ identifier: "SubscriptionEventItem" });
    case 3:
      return S.Array(SubscriptionEventItem);
    case 4:
      return S.suspend(() =>
        S.Struct({ Events: S.optional(SubscriptionEventsList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSegmentSubscriptionEventsResponse",
      });
    case 5:
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
    case 6:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/domains/{DomainName}/upload-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListUploadJobsRequest" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          JobId: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Status: S.optional(UploadJobStatus),
          StatusReason: S.optional(StatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DataExpiry: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UploadJobItem" });
    case 1:
      return S.Array(UploadJobItem);
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Items: S.optional(UploadJobsList) }),
      ).annotate({ identifier: "ListUploadJobsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          WorkflowType: S.optional(WorkflowType),
          Status: S.optional(Status),
          QueryStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          QueryEndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/workflows" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListWorkflowsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          WorkflowType: WorkflowType,
          WorkflowId: S.String,
          Status: Status,
          StatusDescription: S.String,
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "ListWorkflowsItem" });
    case 5:
      return S.Array(ListWorkflowsItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(WorkflowList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListWorkflowsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountNumber: S.optional(S.String),
          AdditionalInformation: S.optional(S.String),
          PartyType: S.optional(S.String),
          BusinessName: S.optional(S.String),
          FirstName: S.optional(S.String),
          MiddleName: S.optional(S.String),
          LastName: S.optional(S.String),
          BirthDate: S.optional(S.String),
          Gender: S.optional(S.String),
          PhoneNumber: S.optional(S.String),
          MobilePhoneNumber: S.optional(S.String),
          HomePhoneNumber: S.optional(S.String),
          BusinessPhoneNumber: S.optional(S.String),
          EmailAddress: S.optional(S.String),
          PersonalEmailAddress: S.optional(S.String),
          BusinessEmailAddress: S.optional(S.String),
          Address: S.optional(S.String),
          ShippingAddress: S.optional(S.String),
          MailingAddress: S.optional(S.String),
          BillingAddress: S.optional(S.String),
          Attributes: S.optional(AttributeSourceIdMap),
          ProfileType: S.optional(S.String),
          EngagementPreferences: S.optional(S.String),
        }),
      ).annotate({ identifier: "FieldSourceProfileIds" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MainProfileId: S.String,
          ProfileIdsToBeMerged: ProfileIdToBeMergedList,
          FieldSourceProfileIds: S.optional(FieldSourceProfileIds),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/objects/merge" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "MergeProfilesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
          Description: S.optional(SensitiveString),
          EncryptionKey: S.optional(S.String),
          Fields: DomainObjectTypeFields,
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/domain-object-types/{ObjectTypeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDomainObjectTypeRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          EncryptionKey: S.optional(S.String),
          Fields: S.optional(DomainObjectTypeFields),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "PutDomainObjectTypeResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Uri: S.optional(S.String),
          ObjectTypeName: S.optional(S.String),
          ObjectTypeNames: S.optional(ObjectTypeNames),
          Tags: S.optional(TagMap),
          FlowDefinition: S.optional(FlowDefinition),
          RoleArn: S.optional(S.String),
          EventTriggerNames: S.optional(EventTriggerNames),
          Scope: S.optional(Scope),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/integrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutIntegrationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.String,
          Object: SensitiveString,
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/profiles/objects" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutProfileObjectRequest" });
    case 5:
      return S.suspend(() => S.Struct({ ProfileObjectUniqueKey: S.optional(S.String) })).annotate({
        identifier: "PutProfileObjectResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ObjectTypeName: S.String.pipe(T.HttpLabel("ObjectTypeName")),
          Description: SensitiveString,
          TemplateId: S.optional(S.String),
          ExpirationDays: S.optional(S.Number),
          EncryptionKey: S.optional(S.String),
          AllowProfileCreation: S.optional(S.Boolean),
          SourceLastUpdatedTimestampFormat: S.optional(S.String),
          MaxProfileObjectCount: S.optional(S.Number),
          SourcePriority: S.optional(S.Number),
          Fields: S.optional(FieldMap),
          Keys: S.optional(KeyMap),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/object-types/{ObjectTypeName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutProfileObjectTypeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ObjectTypeName: S.String,
          Description: SensitiveString,
          TemplateId: S.optional(S.String),
          ExpirationDays: S.optional(S.Number),
          EncryptionKey: S.optional(S.String),
          AllowProfileCreation: S.optional(S.Boolean),
          SourceLastUpdatedTimestampFormat: S.optional(S.String),
          MaxProfileObjectCount: S.optional(S.Number),
          MaxAvailableProfileObjectCount: S.optional(S.Number),
          SourcePriority: S.optional(S.Number),
          Fields: S.optional(FieldMap),
          Keys: S.optional(KeyMap),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "PutProfileObjectTypeResponse",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          SegmentDefinitionName: S.String.pipe(T.HttpLabel("SegmentDefinitionName")),
          ScheduleConfiguration: S.optional(ScheduleConfiguration),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/segment-definitions/{SegmentDefinitionName}/subscriptions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutSegmentSubscriptionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(SegmentSubscriptionStatus),
          ScheduleConfiguration: S.optional(ScheduleConfiguration),
          StartedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "PutSegmentSubscriptionResponse",
      });
    case 2:
      return S.Array(AdditionalSearchKey);
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("next-token")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          KeyName: S.String,
          Values: RequestValueList,
          AdditionalSearchKeys: S.optional(AdditionalSearchKeysList),
          LogicalOperator: S.optional(LogicalOperator),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/profiles/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchProfilesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(ProfileList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "SearchProfilesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Filters: S.optional(RecommenderFilters),
          PromotionalFilters: S.optional(RecommenderPromotionalFilters),
        }),
      ).annotate({ identifier: "Recommender" });
    case 6:
      return S.suspend(() => S.Struct({ Columns: S.optional(MetadataColumnsList) })).annotate({
        identifier: "RecommendationMetadata",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          KeyName: S.String,
          KeyValues: KeyValuesList,
          Recommender: Recommender,
          CandidateIds: S.optional(CandidateIdList),
          Context: S.optional(RecommenderContext),
          Diversity: S.optional(RecommendationDiversityConfig),
          Metadata: S.optional(RecommendationMetadata),
          MaxRecommendations: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{DomainName}/recommendations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchRecommendationsRequest",
      });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.optional(S.String), Recommendations: S.optional(Recommendations) }),
      ).annotate({
        identifier: "SearchRecommendationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderName: S.String.pipe(T.HttpLabel("RecommenderName")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/recommenders/{RecommenderName}/start",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartRecommenderRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/upload-jobs/{JobId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartUploadJobRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderName: S.String.pipe(T.HttpLabel("RecommenderName")),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/recommenders/{RecommenderName}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopRecommenderRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          JobId: S.String.pipe(T.HttpLabel("JobId")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/upload-jobs/{JobId}/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopUploadJobRequest" });
    case 5:
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
    case 6:
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          CalculatedAttributeName: S.String.pipe(T.HttpLabel("CalculatedAttributeName")),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          Conditions: S.optional(Conditions),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/calculated-attributes/{CalculatedAttributeName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateCalculatedAttributeDefinitionRequest",
      });
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CalculatedAttributeName: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Statistic: S.optional(Statistic),
          Conditions: S.optional(Conditions),
          AttributeDetails: S.optional(AttributeDetails),
          UseHistoricalData: S.optional(S.Boolean),
          Status: S.optional(ReadinessStatus),
          Readiness: S.optional(Readiness),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "UpdateCalculatedAttributeDefinitionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          DefaultExpirationDays: S.optional(S.Number),
          DefaultEncryptionKey: S.optional(S.String),
          DeadLetterQueueUrl: S.optional(S.String),
          Matching: S.optional(MatchingRequest),
          RuleBasedMatching: S.optional(RuleBasedMatchingRequest),
          DataStore: S.optional(DataStoreRequest),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDomainRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          DefaultExpirationDays: S.optional(S.Number),
          DefaultEncryptionKey: S.optional(S.String),
          DeadLetterQueueUrl: S.optional(S.String),
          Matching: S.optional(MatchingResponse),
          RuleBasedMatching: S.optional(RuleBasedMatchingResponse),
          DataStore: S.optional(DataStoreResponse),
          CreatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "UpdateDomainResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          LayoutDefinitionName: S.String.pipe(T.HttpLabel("LayoutDefinitionName")),
          Description: S.optional(SensitiveString),
          DisplayName: S.optional(S.String),
          IsDefault: S.optional(S.Boolean),
          LayoutType: S.optional(LayoutType),
          Layout: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/layouts/{LayoutDefinitionName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDomainLayoutRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LayoutDefinitionName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          DisplayName: S.optional(S.String),
          IsDefault: S.optional(S.Boolean),
          LayoutType: S.optional(LayoutType),
          Layout: S.optional(SensitiveString),
          Version: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "UpdateDomainLayoutResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          EventTriggerName: S.String.pipe(T.HttpLabel("EventTriggerName")),
          ObjectTypeName: S.optional(S.String),
          Description: S.optional(SensitiveString),
          EventTriggerConditions: S.optional(EventTriggerConditions),
          SegmentFilter: S.optional(S.String),
          EventTriggerLimits: S.optional(EventTriggerLimits),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{DomainName}/event-triggers/{EventTriggerName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateEventTriggerRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ProfileId: S.String,
          AdditionalInformation: S.optional(SensitiveString),
          AccountNumber: S.optional(SensitiveString),
          PartyType: S.optional(PartyType),
          BusinessName: S.optional(SensitiveString),
          FirstName: S.optional(SensitiveString),
          MiddleName: S.optional(SensitiveString),
          LastName: S.optional(SensitiveString),
          BirthDate: S.optional(SensitiveString),
          Gender: S.optional(Gender),
          PhoneNumber: S.optional(SensitiveString),
          MobilePhoneNumber: S.optional(SensitiveString),
          HomePhoneNumber: S.optional(SensitiveString),
          BusinessPhoneNumber: S.optional(SensitiveString),
          EmailAddress: S.optional(SensitiveString),
          PersonalEmailAddress: S.optional(SensitiveString),
          BusinessEmailAddress: S.optional(SensitiveString),
          Address: S.optional(UpdateAddress),
          ShippingAddress: S.optional(UpdateAddress),
          MailingAddress: S.optional(UpdateAddress),
          BillingAddress: S.optional(UpdateAddress),
          Attributes: S.optional(UpdateAttributes),
          PartyTypeString: S.optional(SensitiveString),
          GenderString: S.optional(SensitiveString),
          ProfileType: S.optional(ProfileType),
          EngagementPreferences: S.optional(EngagementPreferences),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{DomainName}/profiles" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateProfileRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          RecommenderName: S.String.pipe(T.HttpLabel("RecommenderName")),
          Description: S.optional(SensitiveString),
          RecommenderConfig: S.optional(RecommenderConfig),
          RecommenderVersionName: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/domains/{DomainName}/recommenders/{RecommenderName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRecommenderRequest" });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RecommenderName: S.String })).annotate({
        identifier: "UpdateRecommenderResponse",
      });
  }
}
