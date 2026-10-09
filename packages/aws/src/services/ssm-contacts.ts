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
  sdkId: "SSM Contacts",
  serviceShapeName: "SSMContacts",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ssm-contacts" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-05-03");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://ssm-contacts-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://ssm-contacts-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://ssm-contacts.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://ssm-contacts.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      ResourceId: S.String,
      ResourceType: S.String,
      DependentEntities: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(110)).annotate({
          identifier: "DependentEntityList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DataEncryptionException
  extends /*@__PURE__*/ S.TaggedError<DataEncryptionException>()(
    "DataEncryptionException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class IncidentManagerNotOnboarded
  extends /*@__PURE__*/ S.TaggedError<IncidentManagerNotOnboarded>()(
    "IncidentManagerNotOnboarded",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(108)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "Account not found for the request" },
    }),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidRotationArn
  extends /*@__PURE__*/ S.TaggedError<InvalidRotationArn>()(
    "InvalidRotationArn",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(108)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.SyntheticError({
      from: "ValidationException",
      message: { includes: "Invalid resource Arn" },
    }),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: /*@__PURE__*/ S.optional(S.String),
      ResourceType: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: S.String,
      ServiceCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
      RetryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      Fields: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(108)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SsmContactsArn = string;
export type AcceptType = "DELIVERED" | "READ" | (string & {});
export type ReceiptInfo = string;
export type AcceptCode = string;
export type AcceptCodeValidation = "IGNORE" | "ENFORCE" | (string & {});
export interface AcceptPageRequest {
  PageId: string;
  ContactChannelId?: string;
  AcceptType: AcceptType;
  Note?: string;
  AcceptCode: string;
  AcceptCodeValidation?: AcceptCodeValidation;
}
export interface AcceptPageResult {}
export type ActivationCode = string;
export interface ActivateContactChannelRequest {
  ContactChannelId: string;
  ActivationCode: string;
}
export interface ActivateContactChannelResult {}
export type ContactAlias = string;
export type ContactName = string;
export type ContactType = "PERSONAL" | "ESCALATION" | "ONCALL_SCHEDULE" | (string & {});
export type StageDurationInMins = number;
export type RetryIntervalInMinutes = number;
export interface ChannelTargetInfo {
  ContactChannelId: string;
  RetryIntervalInMinutes?: number;
}
export type IsEssential = boolean;
export interface ContactTargetInfo {
  ContactId?: string;
  IsEssential: boolean;
}
export interface Target {
  ChannelTargetInfo?: ChannelTargetInfo;
  ContactTargetInfo?: ContactTargetInfo;
}
export type TargetsList = Target[];
export interface Stage {
  DurationInMinutes: number;
  Targets: Target[];
}
export type StagesList = Stage[];
export type SsmContactsArnList = string[];
export interface Plan {
  Stages?: Stage[];
  RotationIds?: string[];
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagsList = Tag[];
export type IdempotencyToken = string;
export interface CreateContactRequest {
  Alias: string;
  DisplayName?: string;
  Type: ContactType;
  Plan: Plan;
  Tags?: Tag[];
  IdempotencyToken?: string;
}
export interface CreateContactResult {
  ContactArn: string;
}
export type ChannelName = string;
export type ChannelType = "SMS" | "VOICE" | "EMAIL" | (string & {});
export type SimpleAddress = string;
export interface ContactChannelAddress {
  SimpleAddress?: string;
}
export type DeferActivation = boolean;
export interface CreateContactChannelRequest {
  ContactId: string;
  Name: string;
  Type: ChannelType;
  DeliveryAddress: ContactChannelAddress;
  DeferActivation?: boolean;
  IdempotencyToken?: string;
}
export interface CreateContactChannelResult {
  ContactChannelArn: string;
}
export type RotationName = string;
export type RotationContactsArnList = string[];
export type TimeZoneId = string;
export type DayOfMonth = number;
export type HourOfDay = number;
export type MinuteOfHour = number;
export interface HandOffTime {
  HourOfDay: number;
  MinuteOfHour: number;
}
export interface MonthlySetting {
  DayOfMonth: number;
  HandOffTime: HandOffTime;
}
export type MonthlySettings = MonthlySetting[];
export type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | (string & {});
export interface WeeklySetting {
  DayOfWeek: DayOfWeek;
  HandOffTime: HandOffTime;
}
export type WeeklySettings = WeeklySetting[];
export type DailySettings = HandOffTime[];
export type NumberOfOnCalls = number;
export interface CoverageTime {
  Start?: HandOffTime;
  End?: HandOffTime;
}
export type CoverageTimes = CoverageTime[];
export type ShiftCoveragesMap = { [key in DayOfWeek]?: CoverageTime[] };
export type RecurrenceMultiplier = number;
export interface RecurrenceSettings {
  MonthlySettings?: MonthlySetting[];
  WeeklySettings?: WeeklySetting[];
  DailySettings?: HandOffTime[];
  NumberOfOnCalls: number;
  ShiftCoverages?: { [key: string]: CoverageTime[] | undefined };
  RecurrenceMultiplier: number;
}
export interface CreateRotationRequest {
  Name: string;
  ContactIds: string[];
  StartTime?: Date;
  TimeZoneId: string;
  Recurrence: RecurrenceSettings;
  Tags?: Tag[];
  IdempotencyToken?: string;
}
export interface CreateRotationResult {
  RotationArn: string;
}
export type RotationOverrideContactsArnList = string[];
export interface CreateRotationOverrideRequest {
  RotationId: string;
  NewContactIds: string[];
  StartTime: Date;
  EndTime: Date;
  IdempotencyToken?: string;
}
export type Uuid = string;
export interface CreateRotationOverrideResult {
  RotationOverrideId: string;
}
export interface DeactivateContactChannelRequest {
  ContactChannelId: string;
}
export interface DeactivateContactChannelResult {}
export interface DeleteContactRequest {
  ContactId: string;
}
export interface DeleteContactResult {}
export interface DeleteContactChannelRequest {
  ContactChannelId: string;
}
export interface DeleteContactChannelResult {}
export interface DeleteRotationRequest {
  RotationId: string;
}
export interface DeleteRotationResult {}
export interface DeleteRotationOverrideRequest {
  RotationId: string;
  RotationOverrideId: string;
}
export interface DeleteRotationOverrideResult {}
export interface DescribeEngagementRequest {
  EngagementId: string;
}
export type Sender = string;
export type Subject = string;
export type Content = string;
export type PublicSubject = string;
export type PublicContent = string;
export type IncidentId = string;
export interface DescribeEngagementResult {
  ContactArn: string;
  EngagementArn: string;
  Sender: string;
  Subject: string;
  Content: string;
  PublicSubject?: string;
  PublicContent?: string;
  IncidentId?: string;
  StartTime?: Date;
  StopTime?: Date;
}
export interface DescribePageRequest {
  PageId: string;
}
export interface DescribePageResult {
  PageArn: string;
  EngagementArn: string;
  ContactArn: string;
  Sender: string;
  Subject: string;
  Content: string;
  PublicSubject?: string;
  PublicContent?: string;
  IncidentId?: string;
  SentTime?: Date;
  ReadTime?: Date;
  DeliveryTime?: Date;
}
export interface GetContactRequest {
  ContactId: string;
}
export interface GetContactResult {
  ContactArn: string;
  Alias: string;
  DisplayName?: string;
  Type: ContactType;
  Plan: Plan;
}
export interface GetContactChannelRequest {
  ContactChannelId: string;
}
export type ActivationStatus = "ACTIVATED" | "NOT_ACTIVATED" | (string & {});
export interface GetContactChannelResult {
  ContactArn: string;
  ContactChannelArn: string;
  Name: string;
  Type: ChannelType;
  DeliveryAddress: ContactChannelAddress;
  ActivationStatus?: ActivationStatus;
}
export interface GetContactPolicyRequest {
  ContactArn: string;
}
export type Policy = string;
export interface GetContactPolicyResult {
  ContactArn?: string;
  Policy?: string;
}
export interface GetRotationRequest {
  RotationId: string;
}
export interface GetRotationResult {
  RotationArn: string;
  Name: string;
  ContactIds: string[];
  StartTime: Date;
  TimeZoneId: string;
  Recurrence: RecurrenceSettings;
}
export interface GetRotationOverrideRequest {
  RotationId: string;
  RotationOverrideId: string;
}
export interface GetRotationOverrideResult {
  RotationOverrideId?: string;
  RotationArn?: string;
  NewContactIds?: string[];
  StartTime?: Date;
  EndTime?: Date;
  CreateTime?: Date;
}
export type PaginationToken = string;
export type MaxResults = number;
export interface ListContactChannelsRequest {
  ContactId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ContactChannel {
  ContactChannelArn: string;
  ContactArn: string;
  Name: string;
  Type?: ChannelType;
  DeliveryAddress: ContactChannelAddress;
  ActivationStatus: ActivationStatus;
}
export type ContactChannelList = ContactChannel[];
export interface ListContactChannelsResult {
  NextToken?: string;
  ContactChannels: ContactChannel[];
}
export interface ListContactsRequest {
  NextToken?: string;
  MaxResults?: number;
  AliasPrefix?: string;
  Type?: ContactType;
}
export interface Contact {
  ContactArn: string;
  Alias: string;
  DisplayName?: string;
  Type: ContactType;
}
export type ContactsList = Contact[];
export interface ListContactsResult {
  NextToken?: string;
  Contacts?: Contact[];
}
export interface TimeRange {
  StartTime?: Date;
  EndTime?: Date;
}
export interface ListEngagementsRequest {
  NextToken?: string;
  MaxResults?: number;
  IncidentId?: string;
  TimeRangeValue?: TimeRange;
}
export interface Engagement {
  EngagementArn: string;
  ContactArn: string;
  Sender: string;
  IncidentId?: string;
  StartTime?: Date;
  StopTime?: Date;
}
export type EngagementsList = Engagement[];
export interface ListEngagementsResult {
  NextToken?: string;
  Engagements: Engagement[];
}
export interface ListPageReceiptsRequest {
  PageId: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ReceiptType = "DELIVERED" | "ERROR" | "READ" | "SENT" | "STOP" | (string & {});
export interface Receipt {
  ContactChannelArn?: string;
  ReceiptType: ReceiptType;
  ReceiptInfo?: string;
  ReceiptTime: Date;
}
export type ReceiptsList = Receipt[];
export interface ListPageReceiptsResult {
  NextToken?: string;
  Receipts?: Receipt[];
}
export interface ListPageResolutionsRequest {
  NextToken?: string;
  PageId: string;
}
export type StageIndex = number;
export interface ResolutionContact {
  ContactArn: string;
  Type: ContactType;
  StageIndex?: number;
}
export type ResolutionList = ResolutionContact[];
export interface ListPageResolutionsResult {
  NextToken?: string;
  PageResolutions: ResolutionContact[];
}
export interface ListPagesByContactRequest {
  ContactId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface Page {
  PageArn: string;
  EngagementArn: string;
  ContactArn: string;
  Sender: string;
  IncidentId?: string;
  SentTime?: Date;
  DeliveryTime?: Date;
  ReadTime?: Date;
}
export type PagesList = Page[];
export interface ListPagesByContactResult {
  NextToken?: string;
  Pages: Page[];
}
export interface ListPagesByEngagementRequest {
  EngagementId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPagesByEngagementResult {
  NextToken?: string;
  Pages: Page[];
}
export type Member = string;
export type RotationPreviewMemberList = string[];
export type RotationOverridePreviewMemberList = string[];
export interface PreviewOverride {
  NewMembers?: string[];
  StartTime?: Date;
  EndTime?: Date;
}
export type OverrideList = PreviewOverride[];
export interface ListPreviewRotationShiftsRequest {
  RotationStartTime?: Date;
  StartTime?: Date;
  EndTime: Date;
  Members: string[];
  TimeZoneId: string;
  Recurrence: RecurrenceSettings;
  Overrides?: PreviewOverride[];
  NextToken?: string;
  MaxResults?: number;
}
export type ShiftType = "REGULAR" | "OVERRIDDEN" | (string & {});
export interface ShiftDetails {
  OverriddenContactIds: string[];
}
export interface RotationShift {
  ContactIds?: string[];
  StartTime: Date;
  EndTime: Date;
  Type?: ShiftType;
  ShiftDetails?: ShiftDetails;
}
export type RotationShifts = RotationShift[];
export interface ListPreviewRotationShiftsResult {
  RotationShifts?: RotationShift[];
  NextToken?: string;
}
export interface ListRotationOverridesRequest {
  RotationId: string;
  StartTime: Date;
  EndTime: Date;
  NextToken?: string;
  MaxResults?: number;
}
export interface RotationOverride {
  RotationOverrideId: string;
  NewContactIds: string[];
  StartTime: Date;
  EndTime: Date;
  CreateTime: Date;
}
export type RotationOverrides = RotationOverride[];
export interface ListRotationOverridesResult {
  RotationOverrides?: RotationOverride[];
  NextToken?: string;
}
export interface ListRotationsRequest {
  RotationNamePrefix?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface Rotation {
  RotationArn: string;
  Name: string;
  ContactIds?: string[];
  StartTime?: Date;
  TimeZoneId?: string;
  Recurrence?: RecurrenceSettings;
}
export type Rotations = Rotation[];
export interface ListRotationsResult {
  NextToken?: string;
  Rotations: Rotation[];
}
export interface ListRotationShiftsRequest {
  RotationId: string;
  StartTime?: Date;
  EndTime: Date;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRotationShiftsResult {
  RotationShifts?: RotationShift[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResult {
  Tags?: Tag[];
}
export interface PutContactPolicyRequest {
  ContactArn: string;
  Policy: string;
}
export interface PutContactPolicyResult {}
export interface SendActivationCodeRequest {
  ContactChannelId: string;
}
export interface SendActivationCodeResult {}
export interface StartEngagementRequest {
  ContactId: string;
  Sender: string;
  Subject: string;
  Content: string;
  PublicSubject?: string;
  PublicContent?: string;
  IncidentId?: string;
  IdempotencyToken?: string;
}
export interface StartEngagementResult {
  EngagementArn: string;
}
export type StopReason = string;
export interface StopEngagementRequest {
  EngagementId: string;
  Reason?: string;
}
export interface StopEngagementResult {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResult {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResult {}
export interface UpdateContactRequest {
  ContactId: string;
  DisplayName?: string;
  Plan?: Plan;
}
export interface UpdateContactResult {}
export interface UpdateContactChannelRequest {
  ContactChannelId: string;
  Name?: string;
  DeliveryAddress?: ContactChannelAddress;
}
export interface UpdateContactChannelResult {}
export interface UpdateRotationRequest {
  RotationId: string;
  ContactIds?: string[];
  StartTime?: Date;
  TimeZoneId?: string;
  Recurrence: RecurrenceSettings;
}
export interface UpdateRotationResult {}
export type RetryAfterSeconds = number;
export type ValidationExceptionReason =
  | "UNKNOWN_OPERATION"
  | "CANNOT_PARSE"
  | "FIELD_VALIDATION_FAILED"
  | "OTHER"
  | (string & {});
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export interface DependentEntity {
  RelationType: string;
  DependentResourceIds: string[];
}
export type DependentEntityList = DependentEntity[];
export type AcceptPageError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Used to acknowledge an engagement to a contact channel during an incident.
 */
export const acceptPage: API.OperationMethod<
  AcceptPageRequest,
  AcceptPageResult,
  AcceptPageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AcceptPageRequest>,
  output: __S(1) as any as S.Schema<AcceptPageResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptPage",
}));

export type ActivateContactChannelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Activates a contact's contact channel. Incident Manager can't engage a contact until the
 * contact channel has been activated.
 */
export const activateContactChannel: API.OperationMethod<
  ActivateContactChannelRequest,
  ActivateContactChannelResult,
  ActivateContactChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<ActivateContactChannelRequest>,
  output: __S(1) as any as S.Schema<ActivateContactChannelResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ActivateContactChannel",
}));

export type CreateContactError =
  | AccessDeniedException
  | ConflictException
  | DataEncryptionException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Contacts are either the contacts that Incident Manager engages during an incident or the
 * escalation plans that Incident Manager uses to engage contacts in phases during an
 * incident.
 */
export const createContact: API.OperationMethod<
  CreateContactRequest,
  CreateContactResult,
  CreateContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<CreateContactRequest>,
  output: __S(14) as any as S.Schema<CreateContactResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DataEncryptionException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContact",
}));

export type CreateContactChannelError =
  | AccessDeniedException
  | ConflictException
  | DataEncryptionException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * A contact channel is the method that Incident Manager uses to engage your contact.
 */
export const createContactChannel: API.OperationMethod<
  CreateContactChannelRequest,
  CreateContactChannelResult,
  CreateContactChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<CreateContactChannelRequest>,
  output: __S(17) as any as S.Schema<CreateContactChannelResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DataEncryptionException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateContactChannel",
}));

export type CreateRotationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | ConflictException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Creates a rotation in an on-call schedule.
 */
export const createRotation: API.OperationMethod<
  CreateRotationRequest,
  CreateRotationResult,
  CreateRotationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<CreateRotationRequest>,
  output: __S(29) as any as S.Schema<CreateRotationResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    ConflictException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRotation",
}));

export type CreateRotationOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Creates an override for a rotation in an on-call schedule.
 */
export const createRotationOverride: API.OperationMethod<
  CreateRotationOverrideRequest,
  CreateRotationOverrideResult,
  CreateRotationOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<CreateRotationOverrideRequest>,
  output: __S(31) as any as S.Schema<CreateRotationOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRotationOverride",
}));

export type DeactivateContactChannelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * To no longer receive Incident Manager engagements to a contact channel, you can deactivate
 * the channel.
 */
export const deactivateContactChannel: API.OperationMethod<
  DeactivateContactChannelRequest,
  DeactivateContactChannelResult,
  DeactivateContactChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<DeactivateContactChannelRequest>,
  output: __S(1) as any as S.Schema<DeactivateContactChannelResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeactivateContactChannel",
}));

export type DeleteContactError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * To remove a contact from Incident Manager, you can delete the contact. However, deleting a
 * contact does not remove it from escalation plans and related response plans. Deleting an
 * escalation plan also does not remove it from all related response plans. To modify an
 * escalation plan, we recommend using the UpdateContact action to specify a
 * different existing contact.
 */
export const deleteContact: API.OperationMethod<
  DeleteContactRequest,
  DeleteContactResult,
  DeleteContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<DeleteContactRequest>,
  output: __S(1) as any as S.Schema<DeleteContactResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContact",
}));

export type DeleteContactChannelError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * To stop receiving engagements on a contact channel, you can delete the channel from a
 * contact. Deleting the contact channel does not remove it from the contact's engagement
 * plan, but the stage that includes the channel will be ignored. If you delete the only
 * contact channel for a contact, you'll no longer be able to engage that contact during an
 * incident.
 */
export const deleteContactChannel: API.OperationMethod<
  DeleteContactChannelRequest,
  DeleteContactChannelResult,
  DeleteContactChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<DeleteContactChannelRequest>,
  output: __S(1) as any as S.Schema<DeleteContactChannelResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteContactChannel",
}));

export type DeleteRotationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Deletes a rotation from the system. If a rotation belongs to more than one on-call
 * schedule, this operation deletes it from all of them.
 */
export const deleteRotation: API.OperationMethod<
  DeleteRotationRequest,
  DeleteRotationResult,
  DeleteRotationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<DeleteRotationRequest>,
  output: __S(1) as any as S.Schema<DeleteRotationResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRotation",
}));

export type DeleteRotationOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Deletes an existing override for an on-call rotation.
 */
export const deleteRotationOverride: API.OperationMethod<
  DeleteRotationOverrideRequest,
  DeleteRotationOverrideResult,
  DeleteRotationOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<DeleteRotationOverrideRequest>,
  output: __S(1) as any as S.Schema<DeleteRotationOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRotationOverride",
}));

export type DescribeEngagementError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Incident Manager uses engagements to engage contacts and escalation plans during an incident.
 * Use this command to describe the engagement that occurred during an incident.
 */
export const describeEngagement: API.OperationMethod<
  DescribeEngagementRequest,
  DescribeEngagementResult,
  DescribeEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<DescribeEngagementRequest>,
  output: __S(38) as any as S.Schema<DescribeEngagementResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEngagement",
}));

export type DescribePageError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists details of the engagement to a contact channel.
 */
export const describePage: API.OperationMethod<
  DescribePageRequest,
  DescribePageResult,
  DescribePageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39) as any as S.Schema<DescribePageRequest>,
  output: __S(40) as any as S.Schema<DescribePageResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePage",
}));

export type GetContactError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Retrieves information about the specified contact or escalation plan.
 */
export const getContact: API.OperationMethod<
  GetContactRequest,
  GetContactResult,
  GetContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<GetContactRequest>,
  output: __S(42) as any as S.Schema<GetContactResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContact",
}));

export type GetContactChannelError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * List details about a specific contact channel.
 */
export const getContactChannel: API.OperationMethod<
  GetContactChannelRequest,
  GetContactChannelResult,
  GetContactChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<GetContactChannelRequest>,
  output: __S(44) as any as S.Schema<GetContactChannelResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContactChannel",
}));

export type GetContactPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Retrieves the resource policies attached to the specified contact or escalation
 * plan.
 */
export const getContactPolicy: API.OperationMethod<
  GetContactPolicyRequest,
  GetContactPolicyResult,
  GetContactPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<GetContactPolicyRequest>,
  output: __S(46) as any as S.Schema<GetContactPolicyResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetContactPolicy",
}));

export type GetRotationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Retrieves information about an on-call rotation.
 */
export const getRotation: API.OperationMethod<
  GetRotationRequest,
  GetRotationResult,
  GetRotationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<GetRotationRequest>,
  output: __S(48) as any as S.Schema<GetRotationResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRotation",
}));

export type GetRotationOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Retrieves information about an override to an on-call rotation.
 */
export const getRotationOverride: API.OperationMethod<
  GetRotationOverrideRequest,
  GetRotationOverrideResult,
  GetRotationOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<GetRotationOverrideRequest>,
  output: __S(50) as any as S.Schema<GetRotationOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRotationOverride",
}));

export type ListContactChannelsError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists all contact channels for the specified contact.
 */
export const listContactChannels: API.PaginatedOperationMethod<
  ListContactChannelsRequest,
  ListContactChannelsResult,
  ListContactChannelsError,
  Credentials | HttpClient.HttpClient,
  ContactChannel
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(51) as any as S.Schema<ListContactChannelsRequest>,
  output: __S(54) as any as S.Schema<ListContactChannelsResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContactChannels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ContactChannels",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListContactsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists all contacts and escalation plans in Incident Manager.
 */
export const listContacts: API.PaginatedOperationMethod<
  ListContactsRequest,
  ListContactsResult,
  ListContactsError,
  Credentials | HttpClient.HttpClient,
  Contact
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(55) as any as S.Schema<ListContactsRequest>,
  output: __S(58) as any as S.Schema<ListContactsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListContacts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Contacts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListEngagementsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists all engagements that have happened in an incident.
 */
export const listEngagements: API.PaginatedOperationMethod<
  ListEngagementsRequest,
  ListEngagementsResult,
  ListEngagementsError,
  Credentials | HttpClient.HttpClient,
  Engagement
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(60) as any as S.Schema<ListEngagementsRequest>,
  output: __S(63) as any as S.Schema<ListEngagementsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEngagements",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Engagements",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPageReceiptsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists all of the engagements to contact channels that have been acknowledged.
 */
export const listPageReceipts: API.PaginatedOperationMethod<
  ListPageReceiptsRequest,
  ListPageReceiptsResult,
  ListPageReceiptsError,
  Credentials | HttpClient.HttpClient,
  Receipt
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(64) as any as S.Schema<ListPageReceiptsRequest>,
  output: __S(67) as any as S.Schema<ListPageReceiptsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPageReceipts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Receipts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPageResolutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Returns the resolution path of an engagement. For example, the escalation plan engaged
 * in an incident might target an on-call schedule that includes several contacts in a
 * rotation, but just one contact on-call when the incident starts. The resolution path
 * indicates the hierarchy of escalation plan > on-call schedule >
 * contact.
 */
export const listPageResolutions: API.PaginatedOperationMethod<
  ListPageResolutionsRequest,
  ListPageResolutionsResult,
  ListPageResolutionsError,
  Credentials | HttpClient.HttpClient,
  ResolutionContact
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68) as any as S.Schema<ListPageResolutionsRequest>,
  output: __S(71) as any as S.Schema<ListPageResolutionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPageResolutions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PageResolutions",
  } as const,
})) as any;

export type ListPagesByContactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists the engagements to a contact's contact channels.
 */
export const listPagesByContact: API.PaginatedOperationMethod<
  ListPagesByContactRequest,
  ListPagesByContactResult,
  ListPagesByContactError,
  Credentials | HttpClient.HttpClient,
  Page
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72) as any as S.Schema<ListPagesByContactRequest>,
  output: __S(75) as any as S.Schema<ListPagesByContactResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPagesByContact",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Pages",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPagesByEngagementError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists the engagements to contact channels that occurred by engaging a contact.
 */
export const listPagesByEngagement: API.PaginatedOperationMethod<
  ListPagesByEngagementRequest,
  ListPagesByEngagementResult,
  ListPagesByEngagementError,
  Credentials | HttpClient.HttpClient,
  Page
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(76) as any as S.Schema<ListPagesByEngagementRequest>,
  output: __S(77) as any as S.Schema<ListPagesByEngagementResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPagesByEngagement",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Pages",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPreviewRotationShiftsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Returns a list of shifts based on rotation configuration parameters.
 *
 * The Incident Manager primarily uses this operation to populate the **Preview** calendar. It is not typically run by end users.
 */
export const listPreviewRotationShifts: API.PaginatedOperationMethod<
  ListPreviewRotationShiftsRequest,
  ListPreviewRotationShiftsResult,
  ListPreviewRotationShiftsError,
  Credentials | HttpClient.HttpClient,
  RotationShift
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(80) as any as S.Schema<ListPreviewRotationShiftsRequest>,
  output: __S(84) as any as S.Schema<ListPreviewRotationShiftsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPreviewRotationShifts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RotationShifts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRotationOverridesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Retrieves a list of overrides currently specified for an on-call rotation.
 */
export const listRotationOverrides: API.PaginatedOperationMethod<
  ListRotationOverridesRequest,
  ListRotationOverridesResult,
  ListRotationOverridesError,
  Credentials | HttpClient.HttpClient,
  RotationOverride
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85) as any as S.Schema<ListRotationOverridesRequest>,
  output: __S(88) as any as S.Schema<ListRotationOverridesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRotationOverrides",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RotationOverrides",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRotationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Retrieves a list of on-call rotations.
 */
export const listRotations: API.PaginatedOperationMethod<
  ListRotationsRequest,
  ListRotationsResult,
  ListRotationsError,
  Credentials | HttpClient.HttpClient,
  Rotation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(89) as any as S.Schema<ListRotationsRequest>,
  output: __S(92) as any as S.Schema<ListRotationsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRotations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Rotations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRotationShiftsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Returns a list of shifts generated by an existing rotation in the system.
 */
export const listRotationShifts: API.PaginatedOperationMethod<
  ListRotationShiftsRequest,
  ListRotationShiftsResult,
  ListRotationShiftsError,
  Credentials | HttpClient.HttpClient,
  RotationShift
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(93) as any as S.Schema<ListRotationShiftsRequest>,
  output: __S(94) as any as S.Schema<ListRotationShiftsResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRotationShifts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RotationShifts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Lists the tags of a contact, escalation plan, rotation, or on-call schedule.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(96) as any as S.Schema<ListTagsForResourceResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutContactPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Adds a resource policy to the specified contact or escalation plan. The resource policy
 * is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see Setting up
 * cross-account functionality.
 */
export const putContactPolicy: API.OperationMethod<
  PutContactPolicyRequest,
  PutContactPolicyResult,
  PutContactPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<PutContactPolicyRequest>,
  output: __S(1) as any as S.Schema<PutContactPolicyResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutContactPolicy",
}));

export type SendActivationCodeError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Sends an activation code to a contact channel. The contact can use this code to activate
 * the contact channel in the console or with the `ActivateChannel` operation.
 * Incident Manager can't engage a contact channel until it has been activated.
 */
export const sendActivationCode: API.OperationMethod<
  SendActivationCodeRequest,
  SendActivationCodeResult,
  SendActivationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98) as any as S.Schema<SendActivationCodeRequest>,
  output: __S(1) as any as S.Schema<SendActivationCodeResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendActivationCode",
}));

export type StartEngagementError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Starts an engagement to a contact or escalation plan. The engagement engages each
 * contact specified in the incident.
 */
export const startEngagement: API.OperationMethod<
  StartEngagementRequest,
  StartEngagementResult,
  StartEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99) as any as S.Schema<StartEngagementRequest>,
  output: __S(100) as any as S.Schema<StartEngagementResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartEngagement",
}));

export type StopEngagementError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Stops an engagement before it finishes the final stage of the escalation plan or
 * engagement plan. Further contacts aren't engaged.
 */
export const stopEngagement: API.OperationMethod<
  StopEngagementRequest,
  StopEngagementResult,
  StopEngagementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101) as any as S.Schema<StopEngagementRequest>,
  output: __S(1) as any as S.Schema<StopEngagementResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopEngagement",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Tags a contact or escalation plan. You can tag only contacts and escalation plans in the
 * first region of your replication set.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResult,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<TagResourceRequest>,
  output: __S(1) as any as S.Schema<TagResourceResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
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
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Removes tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResult,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<UntagResourceRequest>,
  output: __S(1) as any as S.Schema<UntagResourceResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateContactError =
  | AccessDeniedException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Updates the contact or escalation plan specified.
 */
export const updateContact: API.OperationMethod<
  UpdateContactRequest,
  UpdateContactResult,
  UpdateContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<UpdateContactRequest>,
  output: __S(1) as any as S.Schema<UpdateContactResult>,
  errors: [
    AccessDeniedException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContact",
}));

export type UpdateContactChannelError =
  | AccessDeniedException
  | ConflictException
  | DataEncryptionException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | CommonErrors;
/**
 * Updates a contact's contact channel.
 */
export const updateContactChannel: API.OperationMethod<
  UpdateContactChannelRequest,
  UpdateContactChannelResult,
  UpdateContactChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<UpdateContactChannelRequest>,
  output: __S(1) as any as S.Schema<UpdateContactChannelResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DataEncryptionException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateContactChannel",
}));

export type UpdateRotationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | IncidentManagerNotOnboarded
  | InvalidRotationArn
  | CommonErrors;
/**
 * Updates the information specified for an on-call rotation.
 */
export const updateRotation: API.OperationMethod<
  UpdateRotationRequest,
  UpdateRotationResult,
  UpdateRotationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<UpdateRotationRequest>,
  output: __S(1) as any as S.Schema<UpdateRotationResult>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
    IncidentManagerNotOnboarded,
    InvalidRotationArn,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRotation",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PageId: S.String,
          ContactChannelId: S.optional(S.String),
          AcceptType: S.String,
          Note: S.optional(S.String),
          AcceptCode: S.String,
          AcceptCodeValidation: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AcceptPageRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptPageResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ContactChannelId: S.String, ActivationCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ActivateContactChannelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ContactChannelId: S.String, RetryIntervalInMinutes: S.optional(S.Number) }),
      ).annotate({ identifier: "ChannelTargetInfo" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ContactId: S.optional(S.String), IsEssential: S.Boolean }),
      ).annotate({ identifier: "ContactTargetInfo" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChannelTargetInfo: S.optional(__S(3)),
          ContactTargetInfo: S.optional(__S(4)),
        }),
      ).annotate({ identifier: "Target" });
    case 6:
      return S.Array(__S(5));
    case 7:
      return S.suspend(() => S.Struct({ DurationInMinutes: S.Number, Targets: __S(6) })).annotate({
        identifier: "Stage",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7));
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({ Stages: S.optional(__S(8)), RotationIds: S.optional(__S(9)) }),
      ).annotate({ identifier: "Plan" });
    case 3:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 4:
      return S.Array(__S(11));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Alias: S.String,
          DisplayName: S.optional(S.String),
          Type: S.String,
          Plan: __S(10),
          Tags: S.optional(__S(12)),
          IdempotencyToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateContactRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ContactArn: S.String })).annotate({
        identifier: "CreateContactResult",
      });
    case 7:
      return S.suspend(() => S.Struct({ SimpleAddress: S.optional(S.String) })).annotate({
        identifier: "ContactChannelAddress",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContactId: S.String,
          Name: S.String,
          Type: S.String,
          DeliveryAddress: __S(15),
          DeferActivation: S.optional(S.Boolean),
          IdempotencyToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateContactChannelRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ ContactChannelArn: S.String })).annotate({
        identifier: "CreateContactChannelResult",
      });
    case 2:
      return S.suspend(() => S.Struct({ HourOfDay: S.Number, MinuteOfHour: S.Number })).annotate({
        identifier: "HandOffTime",
      });
    case 3:
      return S.suspend(() => S.Struct({ DayOfMonth: S.Number, HandOffTime: __S(18) })).annotate({
        identifier: "MonthlySetting",
      });
    case 4:
      return S.Array(__S(19));
    case 5:
      return S.suspend(() => S.Struct({ DayOfWeek: S.String, HandOffTime: __S(18) })).annotate({
        identifier: "WeeklySetting",
      });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.Array(__S(18));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Start: S.optional(__S(18)), End: S.optional(__S(18)) }),
      ).annotate({ identifier: "CoverageTime" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(25).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          MonthlySettings: S.optional(__S(20)),
          WeeklySettings: S.optional(__S(22)),
          DailySettings: S.optional(__S(23)),
          NumberOfOnCalls: S.Number,
          ShiftCoverages: S.optional(__S(26)),
          RecurrenceMultiplier: S.Number,
        }),
      ).annotate({ identifier: "RecurrenceSettings" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ContactIds: __S(9),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TimeZoneId: S.String,
          Recurrence: __S(27),
          Tags: S.optional(__S(12)),
          IdempotencyToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRotationRequest" });
    case 5:
      return S.suspend(() => S.Struct({ RotationArn: S.String })).annotate({
        identifier: "CreateRotationResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RotationId: S.String,
          NewContactIds: __S(9),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          IdempotencyToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRotationOverrideRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ RotationOverrideId: S.String })).annotate({
        identifier: "CreateRotationOverrideResult",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ContactChannelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeactivateContactChannelRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ContactId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteContactRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ContactChannelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteContactChannelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RotationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRotationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ RotationId: S.String, RotationOverrideId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRotationOverrideRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EngagementId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEngagementRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ContactArn: S.String,
          EngagementArn: S.String,
          Sender: S.String,
          Subject: S.String,
          Content: S.String,
          PublicSubject: S.optional(S.String),
          PublicContent: S.optional(S.String),
          IncidentId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StopTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribeEngagementResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ PageId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribePageRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PageArn: S.String,
          EngagementArn: S.String,
          ContactArn: S.String,
          Sender: S.String,
          Subject: S.String,
          Content: S.String,
          PublicSubject: S.optional(S.String),
          PublicContent: S.optional(S.String),
          IncidentId: S.optional(S.String),
          SentTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReadTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeliveryTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribePageResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ContactId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetContactRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContactArn: S.String,
          Alias: S.String,
          DisplayName: S.optional(S.String),
          Type: S.String,
          Plan: __S(10),
        }),
      ).annotate({ identifier: "GetContactResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ContactChannelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetContactChannelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContactArn: S.String,
          ContactChannelArn: S.String,
          Name: S.String,
          Type: S.String,
          DeliveryAddress: __S(15),
          ActivationStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetContactChannelResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ContactArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetContactPolicyRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ContactArn: S.optional(S.String), Policy: S.optional(S.String) }),
      ).annotate({ identifier: "GetContactPolicyResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RotationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRotationRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RotationArn: S.String,
          Name: S.String,
          ContactIds: __S(9),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          TimeZoneId: S.String,
          Recurrence: __S(27),
        }),
      ).annotate({ identifier: "GetRotationResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RotationId: S.String, RotationOverrideId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRotationOverrideRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RotationOverrideId: S.optional(S.String),
          RotationArn: S.optional(S.String),
          NewContactIds: S.optional(__S(9)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetRotationOverrideResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ContactId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListContactChannelsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContactChannelArn: S.String,
          ContactArn: S.String,
          Name: S.String,
          Type: S.optional(S.String),
          DeliveryAddress: __S(15),
          ActivationStatus: S.String,
        }),
      ).annotate({ identifier: "ContactChannel" });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ContactChannels: __S(53) }),
      ).annotate({
        identifier: "ListContactChannelsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          AliasPrefix: S.optional(S.String),
          Type: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListContactsRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContactArn: S.String,
          Alias: S.String,
          DisplayName: S.optional(S.String),
          Type: S.String,
        }),
      ).annotate({ identifier: "Contact" });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Contacts: S.optional(__S(57)) }),
      ).annotate({ identifier: "ListContactsResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TimeRange" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          IncidentId: S.optional(S.String),
          TimeRangeValue: S.optional(__S(59)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListEngagementsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EngagementArn: S.String,
          ContactArn: S.String,
          Sender: S.String,
          IncidentId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StopTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Engagement" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Engagements: __S(62) }),
      ).annotate({ identifier: "ListEngagementsResult" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PageId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPageReceiptsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContactChannelArn: S.optional(S.String),
          ReceiptType: S.String,
          ReceiptInfo: S.optional(S.String),
          ReceiptTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Receipt" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Receipts: S.optional(__S(66)) }),
      ).annotate({ identifier: "ListPageReceiptsResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPageResolutionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ContactArn: S.String, Type: S.String, StageIndex: S.optional(S.Number) }),
      ).annotate({ identifier: "ResolutionContact" });
    case 6:
      return S.Array(__S(69));
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageResolutions: __S(70) }),
      ).annotate({
        identifier: "ListPageResolutionsResult",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContactId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPagesByContactRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PageArn: S.String,
          EngagementArn: S.String,
          ContactArn: S.String,
          Sender: S.String,
          IncidentId: S.optional(S.String),
          SentTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeliveryTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReadTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Page" });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Pages: __S(74) }),
      ).annotate({ identifier: "ListPagesByContactResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EngagementId: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPagesByEngagementRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Pages: __S(74) }),
      ).annotate({
        identifier: "ListPagesByEngagementResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NewMembers: S.optional(__S(9)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "PreviewOverride" });
    case 7:
      return S.Array(__S(78));
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RotationStartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Members: __S(9),
          TimeZoneId: S.String,
          Recurrence: __S(27),
          Overrides: S.optional(__S(79)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPreviewRotationShiftsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ OverriddenContactIds: __S(9) })).annotate({
        identifier: "ShiftDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContactIds: S.optional(__S(9)),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Type: S.optional(S.String),
          ShiftDetails: S.optional(__S(81)),
        }),
      ).annotate({ identifier: "RotationShift" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({ RotationShifts: S.optional(__S(83)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPreviewRotationShiftsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RotationId: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRotationOverridesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RotationOverrideId: S.String,
          NewContactIds: __S(9),
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          CreateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "RotationOverride" });
    case 7:
      return S.Array(__S(86));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RotationOverrides: S.optional(__S(87)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRotationOverridesResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RotationNamePrefix: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRotationsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RotationArn: S.String,
          Name: S.String,
          ContactIds: S.optional(__S(9)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TimeZoneId: S.optional(S.String),
          Recurrence: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "Rotation" });
    case 3:
      return S.Array(__S(90));
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Rotations: __S(91) }),
      ).annotate({ identifier: "ListRotationsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RotationId: S.String,
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRotationShiftsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RotationShifts: S.optional(__S(83)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRotationShiftsResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(12)) })).annotate({
        identifier: "ListTagsForResourceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ContactArn: S.String, Policy: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutContactPolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ContactChannelId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SendActivationCodeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ContactId: S.String,
          Sender: S.String,
          Subject: S.String,
          Content: S.String,
          PublicSubject: S.optional(S.String),
          PublicContent: S.optional(S.String),
          IncidentId: S.optional(S.String),
          IdempotencyToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "StartEngagementRequest" });
    case 4:
      return S.suspend(() => S.Struct({ EngagementArn: S.String })).annotate({
        identifier: "StartEngagementResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EngagementId: S.String, Reason: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopEngagementRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(12) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(9) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ContactId: S.String,
          DisplayName: S.optional(S.String),
          Plan: S.optional(__S(10)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateContactRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContactChannelId: S.String,
          Name: S.optional(S.String),
          DeliveryAddress: S.optional(__S(15)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateContactChannelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RotationId: S.String,
          ContactIds: S.optional(__S(9)),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          TimeZoneId: S.optional(S.String),
          Recurrence: __S(27),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRotationRequest" });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String, Message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(__S(107));
    case 5:
      return S.suspend(() =>
        S.Struct({ RelationType: S.String, DependentResourceIds: __S(9) }),
      ).annotate({ identifier: "DependentEntity" });
    case 6:
      return S.Array(__S(109));
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
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
  }
}
