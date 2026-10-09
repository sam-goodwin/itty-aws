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
  sdkId: "Pinpoint SMS Voice V2",
  serviceShapeName: "PinpointSMSVoiceV2",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "sms-voice" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-03-31");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://sms-voice-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://sms-voice-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://sms-voice.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://sms-voice.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Reason: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Reason: /*@__PURE__*/ S.optional(S.String),
    ResourceType: /*@__PURE__*/ S.optional(S.String),
    ResourceId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      RequestId: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.Retryable(),
  ).pipe(C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    ResourceType: /*@__PURE__*/ S.optional(S.String),
    ResourceId: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(S.String),
    },
  ) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.Retryable({ throttling: true }),
  ).pipe(C.withRetryableError, C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    Reason: /*@__PURE__*/ S.optional(S.String),
    Fields: /*@__PURE__*/ S.optional(
      /*@__PURE__*/ S.suspend(() => __S(308)).annotate({
        identifier: "ValidationExceptionFieldList",
      }),
    ),
  }) {}
export type PoolIdOrArn = string;
export type PhoneOrSenderIdOrArn = string;
export type IsoCountryCode = string;
export type ClientToken = string;
export interface AssociateOriginationIdentityRequest {
  PoolId: string;
  OriginationIdentity: string;
  IsoCountryCode?: string;
  ClientToken?: string;
}
export interface AssociateOriginationIdentityResult {
  PoolArn?: string;
  PoolId?: string;
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  IsoCountryCode?: string;
}
export type ProtectConfigurationIdOrArn = string;
export type ConfigurationSetNameOrArn = string;
export interface AssociateProtectConfigurationRequest {
  ProtectConfigurationId: string;
  ConfigurationSetName: string;
}
export type ConfigurationSetName = string;
export type ProtectConfigurationArn = string;
export type ProtectConfigurationId = string;
export interface AssociateProtectConfigurationResult {
  ConfigurationSetArn: string;
  ConfigurationSetName: string;
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
}
export type CarrierLookupInputPhoneNumberType = string;
export interface CarrierLookupRequest {
  PhoneNumber: string;
  EnableCleansing?: boolean;
}
export type E164PhoneNumberType = string;
export type DialingCountryCodeType = string;
export type MCCType = string;
export type MNCType = string;
export type PhoneNumberType = string;
export interface CarrierLookupResult {
  E164PhoneNumber: string;
  DialingCountryCode?: string;
  IsoCountryCode?: string;
  Country?: string;
  MCC?: string;
  MNC?: string;
  Carrier?: string;
  PhoneNumberType: string;
  OriginalPhoneNumber?: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateConfigurationSetRequest {
  ConfigurationSetName: string;
  Tags?: Tag[];
  ClientToken?: string;
}
export interface CreateConfigurationSetResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  Tags?: Tag[];
  CreatedTimestamp?: Date;
}
export type EventDestinationName = string;
export type EventType = string;
export type EventTypeList = string[];
export type IamRoleArn = string;
export type LogGroupArn = string;
export interface CloudWatchLogsDestination {
  IamRoleArn: string;
  LogGroupArn: string;
}
export type DeliveryStreamArn = string;
export interface KinesisFirehoseDestination {
  IamRoleArn: string;
  DeliveryStreamArn: string;
}
export type SnsTopicArn = string;
export interface SnsDestination {
  TopicArn: string;
}
export interface CreateEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  MatchingEventTypes: string[];
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  SnsDestination?: SnsDestination;
  ClientToken?: string;
}
export interface EventDestination {
  EventDestinationName: string;
  Enabled: boolean;
  MatchingEventTypes: string[];
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  SnsDestination?: SnsDestination;
}
export interface CreateEventDestinationResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestination?: EventDestination;
}
export type NotifyConfigurationDisplayName = string;
export type NotifyConfigurationUseCase = string;
export type NotifyTemplateId = string;
export type IsoCountryCodeList = string[];
export type NumberCapability = string;
export type NotifyEnabledChannelsList = string[];
export interface CreateNotifyConfigurationRequest {
  DisplayName: string;
  UseCase: string;
  DefaultTemplateId?: string;
  PoolId?: string;
  EnabledCountries?: string[];
  EnabledChannels: string[];
  DeletionProtectionEnabled?: boolean;
  ClientToken?: string;
  Tags?: Tag[];
}
export type NotifyConfigurationArn = string;
export type NotifyConfigurationId = string;
export type NotifyConfigurationTier = string;
export type TierUpgradeStatus = string;
export type NotifyConfigurationStatus = string;
export interface CreateNotifyConfigurationResult {
  NotifyConfigurationArn: string;
  NotifyConfigurationId: string;
  DisplayName: string;
  UseCase: string;
  DefaultTemplateId?: string;
  PoolId?: string;
  EnabledCountries?: string[];
  EnabledChannels: string[];
  Tier: string;
  TierUpgradeStatus: string;
  Status: string;
  RejectionReason?: string;
  DeletionProtectionEnabled: boolean;
  Tags?: Tag[];
  CreatedTimestamp: Date;
}
export type OptOutListName = string;
export interface CreateOptOutListRequest {
  OptOutListName: string;
  Tags?: Tag[];
  ClientToken?: string;
}
export interface CreateOptOutListResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  Tags?: Tag[];
  CreatedTimestamp?: Date;
}
export type MessageType = string;
export interface CreatePoolRequest {
  OriginationIdentity: string;
  IsoCountryCode?: string;
  MessageType: string;
  DeletionProtectionEnabled?: boolean;
  Tags?: Tag[];
  ClientToken?: string;
}
export type PoolStatus = string;
export type TwoWayChannelArn = string;
export interface CreatePoolResult {
  PoolArn?: string;
  PoolId?: string;
  Status?: string;
  MessageType?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  Tags?: Tag[];
  CreatedTimestamp?: Date;
}
export interface CreateProtectConfigurationRequest {
  ClientToken?: string;
  DeletionProtectionEnabled?: boolean;
  Tags?: Tag[];
}
export interface CreateProtectConfigurationResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
  Tags?: Tag[];
}
export type OptOutListNameOrArn = string;
export interface CreateRcsAgentRequest {
  DeletionProtectionEnabled?: boolean;
  OptOutListName?: string;
  Tags?: Tag[];
  ClientToken?: string;
}
export type RcsAgentStatus = string;
export type TwoWayMediaS3BucketName = string;
export type TwoWayMediaS3KeyPrefix = string;
export type RcsEventType = string;
export type RcsEventTypeList = string[];
export interface CreateRcsAgentResult {
  RcsAgentArn: string;
  RcsAgentId: string;
  Status: string;
  DeletionProtectionEnabled: boolean;
  OptOutListName?: string;
  CreatedTimestamp: Date;
  SelfManagedOptOutsEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  TwoWayEnabled: boolean;
  TwoWayMediaS3BucketName?: string;
  TwoWayMediaS3KeyPrefix?: string;
  TwoWayMediaS3Role?: string;
  TwoWayRcsEventsEnabled?: string[];
  Tags?: Tag[];
}
export type RegistrationType = string;
export interface CreateRegistrationRequest {
  RegistrationType: string;
  Tags?: Tag[];
  ClientToken?: string;
}
export type RegistrationStatus = string;
export type RegistrationVersionNumber = number;
export type StringMap = { [key: string]: string | undefined };
export interface CreateRegistrationResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationStatus: string;
  CurrentVersionNumber: number;
  AdditionalAttributes?: { [key: string]: string | undefined };
  Tags?: Tag[];
  CreatedTimestamp: Date;
}
export type RegistrationIdOrArn = string;
export type ResourceIdOrArn = string;
export interface CreateRegistrationAssociationRequest {
  RegistrationId: string;
  ResourceId: string;
}
export type PhoneNumber = string;
export interface CreateRegistrationAssociationResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  ResourceArn: string;
  ResourceId: string;
  ResourceType: string;
  IsoCountryCode?: string;
  PhoneNumber?: string;
}
export type AttachmentBody = Uint8Array;
export type AttachmentUrl = string;
export interface CreateRegistrationAttachmentRequest {
  AttachmentBody?: Uint8Array;
  AttachmentUrl?: string;
  Tags?: Tag[];
  ClientToken?: string;
}
export type AttachmentStatus = string;
export interface CreateRegistrationAttachmentResult {
  RegistrationAttachmentArn: string;
  RegistrationAttachmentId: string;
  AttachmentStatus: string;
  Tags?: Tag[];
  CreatedTimestamp: Date;
}
export interface CreateRegistrationVersionRequest {
  RegistrationId: string;
}
export type RegistrationVersionStatus = string;
export interface RegistrationVersionStatusHistory {
  DraftTimestamp: Date;
  SubmittedTimestamp?: Date;
  AwsReviewingTimestamp?: Date;
  ReviewingTimestamp?: Date;
  RequiresAuthenticationTimestamp?: Date;
  ApprovedTimestamp?: Date;
  DiscardedTimestamp?: Date;
  DeniedTimestamp?: Date;
  RevokedTimestamp?: Date;
  ArchivedTimestamp?: Date;
}
export interface CreateRegistrationVersionResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
}
export type RcsAgentIdOrArn = string;
export interface CreateVerifiedDestinationNumberRequest {
  DestinationPhoneNumber: string;
  RcsAgentId?: string;
  Tags?: Tag[];
  ClientToken?: string;
}
export type VerificationStatus = string;
export interface CreateVerifiedDestinationNumberResult {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  Status: string;
  RcsAgentId?: string;
  Tags?: Tag[];
  CreatedTimestamp: Date;
}
export interface DeleteAccountDefaultProtectConfigurationRequest {}
export interface DeleteAccountDefaultProtectConfigurationResult {
  DefaultProtectConfigurationArn: string;
  DefaultProtectConfigurationId: string;
}
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
export type EventDestinationList = EventDestination[];
export type SenderId = string;
export interface DeleteConfigurationSetResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestinations?: EventDestination[];
  DefaultMessageType?: string;
  DefaultSenderId?: string;
  DefaultMessageFeedbackEnabled?: boolean;
  CreatedTimestamp?: Date;
}
export interface DeleteDefaultMessageTypeRequest {
  ConfigurationSetName: string;
}
export interface DeleteDefaultMessageTypeResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  MessageType?: string;
}
export interface DeleteDefaultSenderIdRequest {
  ConfigurationSetName: string;
}
export interface DeleteDefaultSenderIdResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  SenderId?: string;
}
export interface DeleteEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
export interface DeleteEventDestinationResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestination?: EventDestination;
}
export type PhoneOrPoolIdOrArn = string;
export type Keyword = string;
export interface DeleteKeywordRequest {
  OriginationIdentity: string;
  Keyword: string;
}
export type KeywordMessage = string;
export type KeywordAction = string;
export interface DeleteKeywordResult {
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  Keyword?: string;
  KeywordMessage?: string;
  KeywordAction?: string;
}
export interface DeleteMediaMessageSpendLimitOverrideRequest {}
export type MonthlyLimit = number;
export interface DeleteMediaMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export type NotifyConfigurationIdOrArn = string;
export interface DeleteNotifyConfigurationRequest {
  NotifyConfigurationId: string;
}
export interface DeleteNotifyConfigurationResult {
  NotifyConfigurationArn: string;
  NotifyConfigurationId: string;
  DisplayName: string;
  UseCase: string;
  DefaultTemplateId?: string;
  PoolId?: string;
  EnabledCountries?: string[];
  EnabledChannels: string[];
  Tier: string;
  TierUpgradeStatus: string;
  Status: string;
  RejectionReason?: string;
  DeletionProtectionEnabled: boolean;
  CreatedTimestamp: Date;
}
export interface DeleteNotifyMessageSpendLimitOverrideRequest {}
export interface DeleteNotifyMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface DeleteOptedOutNumberRequest {
  OptOutListName: string;
  OptedOutNumber: string;
}
export interface DeleteOptedOutNumberResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  OptedOutNumber?: string;
  OptedOutTimestamp?: Date;
  EndUserOptedOut?: boolean;
}
export interface DeleteOptOutListRequest {
  OptOutListName: string;
}
export interface DeleteOptOutListResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  CreatedTimestamp?: Date;
}
export interface DeletePoolRequest {
  PoolId: string;
}
export interface DeletePoolResult {
  PoolArn?: string;
  PoolId?: string;
  Status?: string;
  MessageType?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  CreatedTimestamp?: Date;
}
export interface DeleteProtectConfigurationRequest {
  ProtectConfigurationId: string;
}
export interface DeleteProtectConfigurationResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
}
export interface DeleteProtectConfigurationRuleSetNumberOverrideRequest {
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
}
export type ProtectConfigurationRuleOverrideAction = string;
export interface DeleteProtectConfigurationRuleSetNumberOverrideResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date;
  Action: string;
  IsoCountryCode?: string;
  ExpirationTimestamp?: Date;
}
export interface DeleteRcsAgentRequest {
  RcsAgentId: string;
}
export interface DeleteRcsAgentResult {
  RcsAgentArn: string;
  RcsAgentId: string;
  Status: string;
  CreatedTimestamp: Date;
  DeletionProtectionEnabled: boolean;
  OptOutListName?: string;
  SelfManagedOptOutsEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  TwoWayEnabled: boolean;
  TwoWayRcsEventsEnabled?: string[];
}
export interface DeleteRcsMessageSpendLimitOverrideRequest {}
export interface DeleteRcsMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface DeleteRegistrationRequest {
  RegistrationId: string;
}
export interface DeleteRegistrationResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationStatus: string;
  CurrentVersionNumber: number;
  ApprovedVersionNumber?: number;
  LatestDeniedVersionNumber?: number;
  AdditionalAttributes?: { [key: string]: string | undefined };
  CreatedTimestamp: Date;
}
export type RegistrationAttachmentIdOrArn = string;
export interface DeleteRegistrationAttachmentRequest {
  RegistrationAttachmentId: string;
}
export type AttachmentUploadErrorReason = string;
export interface DeleteRegistrationAttachmentResult {
  RegistrationAttachmentArn: string;
  RegistrationAttachmentId: string;
  AttachmentStatus: string;
  AttachmentUploadErrorReason?: string;
  CreatedTimestamp: Date;
}
export type FieldPath = string;
export interface DeleteRegistrationFieldValueRequest {
  RegistrationId: string;
  FieldPath: string;
}
export type SelectChoice = string;
export type SelectChoiceList = string[];
export type TextValue = string;
export interface DeleteRegistrationFieldValueResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  FieldPath: string;
  SelectChoices?: string[];
  TextValue?: string;
  RegistrationAttachmentId?: string;
}
export type AmazonResourceName = string;
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
}
export type ResourcePolicy = string;
export interface DeleteResourcePolicyResult {
  ResourceArn?: string;
  Policy?: string;
  CreatedTimestamp?: Date;
}
export interface DeleteTextMessageSpendLimitOverrideRequest {}
export interface DeleteTextMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export type VerifiedDestinationNumberIdOrArn = string;
export interface DeleteVerifiedDestinationNumberRequest {
  VerifiedDestinationNumberId: string;
}
export interface DeleteVerifiedDestinationNumberResult {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date;
}
export interface DeleteVoiceMessageSpendLimitOverrideRequest {}
export interface DeleteVoiceMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export type NextToken = string;
export type MaxResults = number;
export interface DescribeAccountAttributesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type AccountAttributeName = string;
export interface AccountAttribute {
  Name: string;
  Value: string;
}
export type AccountAttributeList = AccountAttribute[];
export interface DescribeAccountAttributesResult {
  AccountAttributes?: AccountAttribute[];
  NextToken?: string;
}
export interface DescribeAccountLimitsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type AccountLimitName = string;
export interface AccountLimit {
  Name: string;
  Used: number;
  Max: number;
}
export type AccountLimitList = AccountLimit[];
export interface DescribeAccountLimitsResult {
  AccountLimits?: AccountLimit[];
  NextToken?: string;
}
export type ConfigurationSetNameList = string[];
export type ConfigurationSetFilterName = string;
export type FilterValue = string;
export type FilterValueList = string[];
export interface ConfigurationSetFilter {
  Name: string;
  Values: string[];
}
export type ConfigurationSetFilterList = ConfigurationSetFilter[];
export interface DescribeConfigurationSetsRequest {
  ConfigurationSetNames?: string[];
  Filters?: ConfigurationSetFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface ConfigurationSetInformation {
  ConfigurationSetArn: string;
  ConfigurationSetName: string;
  EventDestinations: EventDestination[];
  DefaultMessageType?: string;
  DefaultSenderId?: string;
  DefaultMessageFeedbackEnabled?: boolean;
  CreatedTimestamp: Date;
  ProtectConfigurationId?: string;
}
export type ConfigurationSetInformationList = ConfigurationSetInformation[];
export interface DescribeConfigurationSetsResult {
  ConfigurationSets?: ConfigurationSetInformation[];
  NextToken?: string;
}
export type KeywordList = string[];
export type KeywordFilterName = string;
export interface KeywordFilter {
  Name: string;
  Values: string[];
}
export type KeywordFilterList = KeywordFilter[];
export interface DescribeKeywordsRequest {
  OriginationIdentity: string;
  Keywords?: string[];
  Filters?: KeywordFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface KeywordInformation {
  Keyword: string;
  KeywordMessage: string;
  KeywordAction: string;
}
export type KeywordInformationList = KeywordInformation[];
export interface DescribeKeywordsResult {
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  Keywords?: KeywordInformation[];
  NextToken?: string;
}
export type NotifyConfigurationIdList = string[];
export type NotifyConfigurationFilterName = string;
export interface NotifyConfigurationFilter {
  Name: string;
  Values: string[];
}
export type NotifyConfigurationFilterList = NotifyConfigurationFilter[];
export interface DescribeNotifyConfigurationsRequest {
  NotifyConfigurationIds?: string[];
  Filters?: NotifyConfigurationFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface NotifyConfigurationInformation {
  NotifyConfigurationArn: string;
  NotifyConfigurationId: string;
  DisplayName: string;
  UseCase: string;
  DefaultTemplateId?: string;
  PoolId?: string;
  EnabledCountries?: string[];
  EnabledChannels: string[];
  Tier: string;
  TierUpgradeStatus: string;
  Status: string;
  RejectionReason?: string;
  DeletionProtectionEnabled: boolean;
  CreatedTimestamp: Date;
}
export type NotifyConfigurationInformationList = NotifyConfigurationInformation[];
export interface DescribeNotifyConfigurationsResult {
  NotifyConfigurations?: NotifyConfigurationInformation[];
  NextToken?: string;
}
export type NotifyTemplateIdList = string[];
export type NotifyTemplateFilterName = string;
export interface NotifyTemplateFilter {
  Name: string;
  Values: string[];
}
export type NotifyTemplateFilterList = NotifyTemplateFilter[];
export interface DescribeNotifyTemplatesRequest {
  TemplateIds?: string[];
  Filters?: NotifyTemplateFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export type NotifyTemplateVersion = number;
export type NotifyTemplateType = string;
export type NumberCapabilityList = string[];
export type NotifyConfigurationTierList = string[];
export type NotifyTemplateStatus = string;
export type NotifyLanguageCode = string;
export type TemplateContent = string;
export type TemplateVariableType = string;
export type TemplateVariableSource = string;
export interface TemplateVariableMetadata {
  Type: string;
  Required: boolean;
  Description?: string;
  MaxLength?: number;
  MinValue?: number;
  MaxValue?: number;
  DefaultValue?: string;
  Pattern?: string;
  Sample?: string;
  Source?: string;
}
export type TemplateVariablesMap = { [key: string]: TemplateVariableMetadata | undefined };
export type VoiceId = string;
export type VoiceIdList = string[];
export interface NotifyTemplateInformation {
  TemplateId: string;
  Version: number;
  TemplateType: string;
  Channels: string[];
  TierAccess?: string[];
  Status?: string;
  SupportedCountries?: string[];
  LanguageCode?: string;
  Content?: string;
  Variables?: { [key: string]: TemplateVariableMetadata | undefined };
  SupportedVoiceIds?: string[];
  CreatedTimestamp: Date;
}
export type NotifyTemplateInformationList = NotifyTemplateInformation[];
export interface DescribeNotifyTemplatesResult {
  NotifyTemplates?: NotifyTemplateInformation[];
  NextToken?: string;
}
export type OptedOutNumberList = string[];
export type OptedOutFilterName = string;
export interface OptedOutFilter {
  Name: string;
  Values: string[];
}
export type OptedOutFilterList = OptedOutFilter[];
export interface DescribeOptedOutNumbersRequest {
  OptOutListName: string;
  OptedOutNumbers?: string[];
  Filters?: OptedOutFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface OptedOutNumberInformation {
  OptedOutNumber: string;
  OptedOutTimestamp: Date;
  EndUserOptedOut: boolean;
}
export type OptedOutNumberInformationList = OptedOutNumberInformation[];
export interface DescribeOptedOutNumbersResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  OptedOutNumbers?: OptedOutNumberInformation[];
  NextToken?: string;
}
export type OptOutListNameList = string[];
export type Owner = string;
export interface DescribeOptOutListsRequest {
  OptOutListNames?: string[];
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export interface OptOutListInformation {
  OptOutListArn: string;
  OptOutListName: string;
  CreatedTimestamp: Date;
}
export type OptOutListInformationList = OptOutListInformation[];
export interface DescribeOptOutListsResult {
  OptOutLists?: OptOutListInformation[];
  NextToken?: string;
}
export type PhoneNumberIdOrArn = string;
export type PhoneNumberIdList = string[];
export type PhoneNumberFilterName = string;
export interface PhoneNumberFilter {
  Name: string;
  Values: string[];
}
export type PhoneNumberFilterList = PhoneNumberFilter[];
export interface DescribePhoneNumbersRequest {
  PhoneNumberIds?: string[];
  Filters?: PhoneNumberFilter[];
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export type NumberStatus = string;
export type NumberType = string;
export type LongMap = { [key: string]: number | undefined };
export interface MessagingLimits {
  RateLimits?: { [key: string]: number | undefined };
  DailyMessageCaps?: { [key: string]: number | undefined };
}
export interface PhoneNumberInformation {
  PhoneNumberArn: string;
  PhoneNumberId?: string;
  PhoneNumber: string;
  Status: string;
  IsoCountryCode: string;
  MessageType: string;
  NumberCapabilities: string[];
  NumberType: string;
  MonthlyLeasingPrice: string;
  TwoWayEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled: boolean;
  OptOutListName: string;
  InternationalSendingEnabled?: boolean;
  DeletionProtectionEnabled: boolean;
  PoolId?: string;
  RegistrationId?: string;
  MessagingLimits?: MessagingLimits;
  CreatedTimestamp: Date;
}
export type PhoneNumberInformationList = PhoneNumberInformation[];
export interface DescribePhoneNumbersResult {
  PhoneNumbers?: PhoneNumberInformation[];
  NextToken?: string;
}
export type PoolIdList = string[];
export type PoolFilterName = string;
export interface PoolFilter {
  Name: string;
  Values: string[];
}
export type PoolFilterList = PoolFilter[];
export interface DescribePoolsRequest {
  PoolIds?: string[];
  Filters?: PoolFilter[];
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export interface PoolInformation {
  PoolArn: string;
  PoolId: string;
  Status: string;
  MessageType: string;
  TwoWayEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled: boolean;
  OptOutListName: string;
  SharedRoutesEnabled: boolean;
  DeletionProtectionEnabled: boolean;
  CreatedTimestamp: Date;
}
export type PoolInformationList = PoolInformation[];
export interface DescribePoolsResult {
  Pools?: PoolInformation[];
  NextToken?: string;
}
export type ProtectConfigurationIdList = string[];
export type ProtectConfigurationFilterName = string;
export interface ProtectConfigurationFilter {
  Name: string;
  Values: string[];
}
export type ProtectConfigurationFilterList = ProtectConfigurationFilter[];
export interface DescribeProtectConfigurationsRequest {
  ProtectConfigurationIds?: string[];
  Filters?: ProtectConfigurationFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface ProtectConfigurationInformation {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
}
export type ProtectConfigurationInformationList = ProtectConfigurationInformation[];
export interface DescribeProtectConfigurationsResult {
  ProtectConfigurations?: ProtectConfigurationInformation[];
  NextToken?: string;
}
export type CountryLaunchStatusFilterName = string;
export interface CountryLaunchStatusFilter {
  Name: string;
  Values: string[];
}
export type CountryLaunchStatusFilterList = CountryLaunchStatusFilter[];
export interface DescribeRcsAgentCountryLaunchStatusRequest {
  RcsAgentId: string;
  IsoCountryCodes?: string[];
  Filters?: CountryLaunchStatusFilter[];
  MaxResults?: number;
  NextToken?: string;
}
export type CountryLaunchStatus = string;
export type CarrierStatus = string;
export interface CarrierStatusInformation {
  CarrierName: string;
  Status: string;
}
export type CarrierStatusInformationList = CarrierStatusInformation[];
export interface CountryLaunchStatusInformation {
  IsoCountryCode: string;
  Status: string;
  RcsPlatformId?: string;
  RegistrationId: string;
  CarrierStatus: CarrierStatusInformation[];
}
export type CountryLaunchStatusInformationList = CountryLaunchStatusInformation[];
export interface DescribeRcsAgentCountryLaunchStatusResult {
  RcsAgentId: string;
  RcsAgentArn: string;
  CountryLaunchStatus?: CountryLaunchStatusInformation[];
  NextToken?: string;
}
export type RcsAgentIdList = string[];
export type RcsAgentFilterName = string;
export interface RcsAgentFilter {
  Name: string;
  Values: string[];
}
export type RcsAgentFilterList = RcsAgentFilter[];
export interface DescribeRcsAgentsRequest {
  RcsAgentIds?: string[];
  Owner?: string;
  Filters?: RcsAgentFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export type TestingAgentStatus = string;
export interface TestingAgentInformation {
  Status: string;
  TestingAgentId?: string;
  RegistrationId: string;
}
export interface RcsAgentInformation {
  RcsAgentArn: string;
  RcsAgentId: string;
  Status: string;
  CreatedTimestamp: Date;
  DeletionProtectionEnabled: boolean;
  OptOutListName?: string;
  SelfManagedOptOutsEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  TwoWayEnabled: boolean;
  PoolId?: string;
  TwoWayMediaS3BucketName?: string;
  TwoWayMediaS3KeyPrefix?: string;
  TwoWayMediaS3Role?: string;
  TwoWayRcsEventsEnabled?: string[];
  TestingAgent?: TestingAgentInformation;
  MessagingLimits?: MessagingLimits;
}
export type RcsAgentInformationList = RcsAgentInformation[];
export interface DescribeRcsAgentsResult {
  RcsAgents?: RcsAgentInformation[];
  NextToken?: string;
}
export type RegistrationAttachmentIdList = string[];
export type RegistrationAttachmentFilterName = string;
export interface RegistrationAttachmentFilter {
  Name: string;
  Values: string[];
}
export type RegistrationAttachmentFilterList = RegistrationAttachmentFilter[];
export interface DescribeRegistrationAttachmentsRequest {
  RegistrationAttachmentIds?: string[];
  Filters?: RegistrationAttachmentFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface RegistrationAttachmentsInformation {
  RegistrationAttachmentArn: string;
  RegistrationAttachmentId: string;
  AttachmentStatus: string;
  AttachmentUploadErrorReason?: string;
  CreatedTimestamp: Date;
  AttachmentUrl?: string;
}
export type RegistrationAttachmentsInformationList = RegistrationAttachmentsInformation[];
export interface DescribeRegistrationAttachmentsResult {
  RegistrationAttachments: RegistrationAttachmentsInformation[];
  NextToken?: string;
}
export type SectionPath = string;
export type FieldPathList = string[];
export interface DescribeRegistrationFieldDefinitionsRequest {
  RegistrationType: string;
  SectionPath?: string;
  FieldPaths?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export type FieldType = string;
export type FieldRequirement = string;
export type StringList = string[];
export interface SelectValidation {
  MinChoices: number;
  MaxChoices: number;
  Options: string[];
}
export interface TextValidation {
  MinLength: number;
  MaxLength: number;
  Pattern: string;
}
export interface SelectOptionDescription {
  Option: string;
  Title?: string;
  Description?: string;
}
export type SelectOptionDescriptionsList = SelectOptionDescription[];
export interface RegistrationFieldDisplayHints {
  Title: string;
  ShortDescription: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
  SelectOptionDescriptions?: SelectOptionDescription[];
  TextValidationDescription?: string;
  ExampleTextValue?: string;
}
export type ConditionOperator = string;
export type ConditionValue = string;
export type ConditionValueList = string[];
export interface FieldCondition {
  DependsOnFieldPath: string;
  Operator: string;
  Values?: string[];
}
export type FieldConditionList = FieldCondition[];
export type ConditionalFieldBehavior = string;
export interface ConditionalValidation {
  MinLength?: number;
  MaxLength?: number;
  Pattern?: string;
  AllowedValues?: string[];
}
export interface ConditionalRule {
  Conditions: FieldCondition[];
  RuleBehavior: string;
  ConditionalValidation?: ConditionalValidation;
}
export type ConditionalRuleList = ConditionalRule[];
export interface ConditionalBehavior {
  Rules: ConditionalRule[];
  DefaultBehavior: string;
}
export interface RegistrationFieldDefinition {
  SectionPath: string;
  FieldPath: string;
  FieldType: string;
  FieldRequirement: string;
  SelectValidation?: SelectValidation;
  TextValidation?: TextValidation;
  DisplayHints: RegistrationFieldDisplayHints;
  ConditionalBehavior?: ConditionalBehavior;
}
export type RegistrationFieldDefinitionList = RegistrationFieldDefinition[];
export interface DescribeRegistrationFieldDefinitionsResult {
  RegistrationType: string;
  RegistrationFieldDefinitions: RegistrationFieldDefinition[];
  NextToken?: string;
}
export interface DescribeRegistrationFieldValuesRequest {
  RegistrationId: string;
  VersionNumber?: number;
  SectionPath?: string;
  FieldPaths?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export interface RegistrationFieldValueInformation {
  FieldPath: string;
  SelectChoices?: string[];
  TextValue?: string;
  RegistrationAttachmentId?: string;
  DeniedReason?: string;
  Feedback?: string;
}
export type RegistrationFieldValueInformationList = RegistrationFieldValueInformation[];
export interface DescribeRegistrationFieldValuesResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationFieldValues: RegistrationFieldValueInformation[];
  NextToken?: string;
}
export type RegistrationIdList = string[];
export type RegistrationFilterName = string;
export interface RegistrationFilter {
  Name: string;
  Values: string[];
}
export type RegistrationFilterList = RegistrationFilter[];
export interface DescribeRegistrationsRequest {
  RegistrationIds?: string[];
  Filters?: RegistrationFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface RegistrationInformation {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationStatus: string;
  CurrentVersionNumber: number;
  ApprovedVersionNumber?: number;
  LatestDeniedVersionNumber?: number;
  AdditionalAttributes?: { [key: string]: string | undefined };
  CreatedTimestamp: Date;
}
export type RegistrationInformationList = RegistrationInformation[];
export interface DescribeRegistrationsResult {
  Registrations: RegistrationInformation[];
  NextToken?: string;
}
export type SectionPathList = string[];
export interface DescribeRegistrationSectionDefinitionsRequest {
  RegistrationType: string;
  SectionPaths?: string[];
  NextToken?: string;
  MaxResults?: number;
}
export interface RegistrationSectionDisplayHints {
  Title: string;
  ShortDescription: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
}
export interface RegistrationSectionDefinition {
  SectionPath: string;
  DisplayHints: RegistrationSectionDisplayHints;
}
export type RegistrationSectionDefinitionList = RegistrationSectionDefinition[];
export interface DescribeRegistrationSectionDefinitionsResult {
  RegistrationType: string;
  RegistrationSectionDefinitions: RegistrationSectionDefinition[];
  NextToken?: string;
}
export type RegistrationTypeList = string[];
export type RegistrationTypeFilterName = string;
export interface RegistrationTypeFilter {
  Name: string;
  Values: string[];
}
export type RegistrationTypeFilterList = RegistrationTypeFilter[];
export interface DescribeRegistrationTypeDefinitionsRequest {
  RegistrationTypes?: string[];
  Filters?: RegistrationTypeFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export type RegistrationAssociationBehavior = string;
export type RegistrationDisassociationBehavior = string;
export interface SupportedAssociation {
  ResourceType: string;
  IsoCountryCode?: string;
  AssociationBehavior: string;
  DisassociationBehavior: string;
}
export type SupportedAssociationList = SupportedAssociation[];
export interface RegistrationTypeDisplayHints {
  Title: string;
  ShortDescription?: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
}
export interface RegistrationTypeDefinition {
  RegistrationType: string;
  SupportedAssociations?: SupportedAssociation[];
  DisplayHints: RegistrationTypeDisplayHints;
}
export type RegistrationTypeDefinitionList = RegistrationTypeDefinition[];
export interface DescribeRegistrationTypeDefinitionsResult {
  RegistrationTypeDefinitions: RegistrationTypeDefinition[];
  NextToken?: string;
}
export type RegistrationVersionNumberList = number[];
export type RegistrationVersionFilterName = string;
export interface RegistrationVersionFilter {
  Name: string;
  Values: string[];
}
export type RegistrationVersionFilterList = RegistrationVersionFilter[];
export interface DescribeRegistrationVersionsRequest {
  RegistrationId: string;
  VersionNumbers?: number[];
  Filters?: RegistrationVersionFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface RegistrationDeniedReasonInformation {
  Reason: string;
  ShortDescription: string;
  LongDescription?: string;
  DocumentationTitle?: string;
  DocumentationLink?: string;
}
export type RegistrationDeniedReasonInformationList = RegistrationDeniedReasonInformation[];
export interface RegistrationVersionInformation {
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
  DeniedReasons?: RegistrationDeniedReasonInformation[];
  Feedback?: string;
}
export type RegistrationVersionInformationList = RegistrationVersionInformation[];
export interface DescribeRegistrationVersionsResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationVersions: RegistrationVersionInformation[];
  NextToken?: string;
}
export type SenderIdOrArn = string;
export interface SenderIdAndCountry {
  SenderId: string;
  IsoCountryCode: string;
}
export type SenderIdList = SenderIdAndCountry[];
export type SenderIdFilterName = string;
export interface SenderIdFilter {
  Name: string;
  Values: string[];
}
export type SenderIdFilterList = SenderIdFilter[];
export interface DescribeSenderIdsRequest {
  SenderIds?: SenderIdAndCountry[];
  Filters?: SenderIdFilter[];
  NextToken?: string;
  MaxResults?: number;
  Owner?: string;
}
export type MessageTypeList = string[];
export interface SenderIdInformation {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: string[];
  MonthlyLeasingPrice: string;
  DeletionProtectionEnabled: boolean;
  Registered: boolean;
  RegistrationId?: string;
  MessagingLimits?: MessagingLimits;
}
export type SenderIdInformationList = SenderIdInformation[];
export interface DescribeSenderIdsResult {
  SenderIds?: SenderIdInformation[];
  NextToken?: string;
}
export interface DescribeSpendLimitsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type SpendLimitName = string;
export interface SpendLimit {
  Name: string;
  EnforcedLimit: number;
  MaxLimit: number;
  Overridden: boolean;
}
export type SpendLimitList = SpendLimit[];
export interface DescribeSpendLimitsResult {
  SpendLimits?: SpendLimit[];
  NextToken?: string;
}
export type VerifiedDestinationNumberIdList = string[];
export type DestinationPhoneNumberList = string[];
export type VerifiedDestinationNumberFilterName = string;
export interface VerifiedDestinationNumberFilter {
  Name: string;
  Values: string[];
}
export type VerifiedDestinationNumberFilterList = VerifiedDestinationNumberFilter[];
export interface DescribeVerifiedDestinationNumbersRequest {
  VerifiedDestinationNumberIds?: string[];
  DestinationPhoneNumbers?: string[];
  Filters?: VerifiedDestinationNumberFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface VerifiedDestinationNumberInformation {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  Status: string;
  RcsAgentId?: string;
  CreatedTimestamp: Date;
}
export type VerifiedDestinationNumberInformationList = VerifiedDestinationNumberInformation[];
export interface DescribeVerifiedDestinationNumbersResult {
  VerifiedDestinationNumbers: VerifiedDestinationNumberInformation[];
  NextToken?: string;
}
export interface DisassociateOriginationIdentityRequest {
  PoolId: string;
  OriginationIdentity: string;
  IsoCountryCode?: string;
  ClientToken?: string;
}
export interface DisassociateOriginationIdentityResult {
  PoolArn?: string;
  PoolId?: string;
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  IsoCountryCode?: string;
}
export interface DisassociateProtectConfigurationRequest {
  ProtectConfigurationId: string;
  ConfigurationSetName: string;
}
export interface DisassociateProtectConfigurationResult {
  ConfigurationSetArn: string;
  ConfigurationSetName: string;
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
}
export interface DiscardRegistrationVersionRequest {
  RegistrationId: string;
}
export interface DiscardRegistrationVersionResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
}
export interface GetProtectConfigurationCountryRuleSetRequest {
  ProtectConfigurationId: string;
  NumberCapability: string;
}
export type ProtectStatus = string;
export interface ProtectConfigurationCountryRuleSetInformation {
  ProtectStatus: string;
}
export type ProtectConfigurationCountryRuleSet = {
  [key: string]: ProtectConfigurationCountryRuleSetInformation | undefined;
};
export interface GetProtectConfigurationCountryRuleSetResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  NumberCapability: string;
  CountryRuleSet: { [key: string]: ProtectConfigurationCountryRuleSetInformation | undefined };
}
export interface GetResourcePolicyRequest {
  ResourceArn: string;
}
export interface GetResourcePolicyResult {
  ResourceArn?: string;
  Policy?: string;
  CreatedTimestamp?: Date;
}
export type SearchableNumberType = string;
export type PreferenceType = string;
export type PreferenceTypeList = string[];
export type NumberFilterValue = string;
export type NumberFilterList = string[];
export interface NumberPreferenceItem {
  PreferenceType: string[];
  Filter: string[];
}
export type NumberPreferenceList = NumberPreferenceItem[];
export type ListAvailablePhoneNumbersMaxResults = number;
export interface ListAvailablePhoneNumbersRequest {
  IsoCountryCode: string;
  NumberCapabilities: string[];
  NumberType: string;
  RegistrationId?: string;
  NumberPreference?: NumberPreferenceItem[];
  NextToken?: string;
  MaxResults?: number;
}
export type AvailablePhoneNumberList = string[];
export interface ListAvailablePhoneNumbersResult {
  AvailablePhoneNumbers: string[];
  NextToken?: string;
}
export type NotifyUseCaseList = string[];
export interface ListNotifyCountriesRequest {
  Channels?: string[];
  UseCases?: string[];
  Tier?: string;
  NextToken?: string;
  MaxResults?: number;
}
export type NotifyTierList = string[];
export interface NotifyCountryInformation {
  IsoCountryCode: string;
  CountryName: string;
  SupportedChannels: string[];
  SupportedUseCases: string[];
  SupportedTiers: string[];
  CustomerOwnedIdentityRequired: boolean;
}
export type NotifyCountryInformationList = NotifyCountryInformation[];
export interface ListNotifyCountriesResult {
  NotifyCountries?: NotifyCountryInformation[];
  NextToken?: string;
}
export type PoolOriginationIdentitiesFilterName = string;
export interface PoolOriginationIdentitiesFilter {
  Name: string;
  Values: string[];
}
export type PoolOriginationIdentitiesFilterList = PoolOriginationIdentitiesFilter[];
export interface ListPoolOriginationIdentitiesRequest {
  PoolId: string;
  Filters?: PoolOriginationIdentitiesFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface OriginationIdentityMetadata {
  OriginationIdentityArn: string;
  OriginationIdentity: string;
  IsoCountryCode: string;
  NumberCapabilities: string[];
  PhoneNumber?: string;
}
export type OriginationIdentityMetadataList = OriginationIdentityMetadata[];
export interface ListPoolOriginationIdentitiesResult {
  PoolArn?: string;
  PoolId?: string;
  OriginationIdentities?: OriginationIdentityMetadata[];
  NextToken?: string;
}
export type ProtectConfigurationRuleSetNumberOverrideFilterName = string;
export interface ProtectConfigurationRuleSetNumberOverrideFilterItem {
  Name: string;
  Values: string[];
}
export type ListProtectConfigurationRuleSetNumberOverrideFilter =
  ProtectConfigurationRuleSetNumberOverrideFilterItem[];
export interface ListProtectConfigurationRuleSetNumberOverridesRequest {
  ProtectConfigurationId: string;
  Filters?: ProtectConfigurationRuleSetNumberOverrideFilterItem[];
  NextToken?: string;
  MaxResults?: number;
}
export interface ProtectConfigurationRuleSetNumberOverride {
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date;
  Action: string;
  IsoCountryCode?: string;
  ExpirationTimestamp?: Date;
}
export type ProtectConfigurationRuleSetNumberOverrideList =
  ProtectConfigurationRuleSetNumberOverride[];
export interface ListProtectConfigurationRuleSetNumberOverridesResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  RuleSetNumberOverrides?: ProtectConfigurationRuleSetNumberOverride[];
  NextToken?: string;
}
export type RegistrationAssociationFilterName = string;
export interface RegistrationAssociationFilter {
  Name: string;
  Values: string[];
}
export type RegistrationAssociationFilterList = RegistrationAssociationFilter[];
export interface ListRegistrationAssociationsRequest {
  RegistrationId: string;
  Filters?: RegistrationAssociationFilter[];
  NextToken?: string;
  MaxResults?: number;
}
export interface RegistrationAssociationMetadata {
  ResourceArn: string;
  ResourceId: string;
  ResourceType: string;
  IsoCountryCode?: string;
  PhoneNumber?: string;
}
export type RegistrationAssociationMetadataList = RegistrationAssociationMetadata[];
export interface ListRegistrationAssociationsResult {
  RegistrationArn: string;
  RegistrationId: string;
  RegistrationType: string;
  RegistrationAssociations: RegistrationAssociationMetadata[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResult {
  ResourceArn?: string;
  Tags?: Tag[];
}
export interface PutKeywordRequest {
  OriginationIdentity: string;
  Keyword: string;
  KeywordMessage: string;
  KeywordAction?: string;
}
export interface PutKeywordResult {
  OriginationIdentityArn?: string;
  OriginationIdentity?: string;
  Keyword?: string;
  KeywordMessage?: string;
  KeywordAction?: string;
}
export type MessageId = string;
export type MessageFeedbackStatus = string;
export interface PutMessageFeedbackRequest {
  MessageId: string;
  MessageFeedbackStatus: string;
}
export interface PutMessageFeedbackResult {
  MessageId: string;
  MessageFeedbackStatus: string;
}
export interface PutOptedOutNumberRequest {
  OptOutListName: string;
  OptedOutNumber: string;
}
export interface PutOptedOutNumberResult {
  OptOutListArn?: string;
  OptOutListName?: string;
  OptedOutNumber?: string;
  OptedOutTimestamp?: Date;
  EndUserOptedOut?: boolean;
}
export interface PutProtectConfigurationRuleSetNumberOverrideRequest {
  ClientToken?: string;
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
  Action: string;
  ExpirationTimestamp?: Date;
}
export interface PutProtectConfigurationRuleSetNumberOverrideResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  DestinationPhoneNumber: string;
  CreatedTimestamp: Date;
  Action: string;
  IsoCountryCode?: string;
  ExpirationTimestamp?: Date;
}
export interface PutRegistrationFieldValueRequest {
  RegistrationId: string;
  FieldPath: string;
  SelectChoices?: string[];
  TextValue?: string;
  RegistrationAttachmentId?: string;
}
export interface PutRegistrationFieldValueResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  FieldPath: string;
  SelectChoices?: string[];
  TextValue?: string;
  RegistrationAttachmentId?: string;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
}
export interface PutResourcePolicyResult {
  ResourceArn?: string;
  Policy?: string;
  CreatedTimestamp?: Date;
}
export interface ReleasePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface ReleasePhoneNumberResult {
  PhoneNumberArn?: string;
  PhoneNumberId?: string;
  PhoneNumber?: string;
  Status?: string;
  IsoCountryCode?: string;
  MessageType?: string;
  NumberCapabilities?: string[];
  NumberType?: string;
  MonthlyLeasingPrice?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  RegistrationId?: string;
  CreatedTimestamp?: Date;
}
export interface ReleaseSenderIdRequest {
  SenderId: string;
  IsoCountryCode: string;
}
export interface ReleaseSenderIdResult {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: string[];
  MonthlyLeasingPrice: string;
  Registered: boolean;
  RegistrationId?: string;
}
export type RequestableNumberType = string;
export interface RequestPhoneNumberRequest {
  IsoCountryCode: string;
  MessageType: string;
  NumberCapabilities: string[];
  NumberType: string;
  OptOutListName?: string;
  PoolId?: string;
  RegistrationId?: string;
  NumberPreference?: NumberPreferenceItem[];
  InternationalSendingEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  Tags?: Tag[];
  ClientToken?: string;
}
export interface RequestPhoneNumberResult {
  PhoneNumberArn?: string;
  PhoneNumberId?: string;
  PhoneNumber?: string;
  Status?: string;
  IsoCountryCode?: string;
  MessageType?: string;
  NumberCapabilities?: string[];
  NumberType?: string;
  MonthlyLeasingPrice?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  InternationalSendingEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  PoolId?: string;
  RegistrationId?: string;
  Tags?: Tag[];
  CreatedTimestamp?: Date;
}
export interface RequestSenderIdRequest {
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes?: string[];
  DeletionProtectionEnabled?: boolean;
  Tags?: Tag[];
  ClientToken?: string;
}
export interface RequestSenderIdResult {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: string[];
  MonthlyLeasingPrice: string;
  DeletionProtectionEnabled: boolean;
  Registered: boolean;
  Tags?: Tag[];
}
export type VerificationChannel = string;
export type LanguageCode = string;
export type VerificationMessageOriginationIdentity = string;
export type ContextKey = string;
export type ContextValue = string;
export type ContextMap = { [key: string]: string | undefined };
export type DestinationCountryParameterKey = string;
export type DestinationCountryParameterValue = string;
export type DestinationCountryParameters = { [key: string]: string | undefined };
export interface SendDestinationNumberVerificationCodeRequest {
  VerifiedDestinationNumberId: string;
  VerificationChannel: string;
  LanguageCode?: string;
  OriginationIdentity?: string;
  ConfigurationSetName?: string;
  Context?: { [key: string]: string | undefined };
  DestinationCountryParameters?: { [key: string]: string | undefined };
}
export interface SendDestinationNumberVerificationCodeResult {
  MessageId: string;
}
export type MediaMessageOriginationIdentity = string;
export type TextMessageBody = string;
export type MediaUrlValue = string;
export type MediaUrlList = string[];
export type MaxPrice = string;
export type TimeToLive = number;
export interface SendMediaMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity: string;
  MessageBody?: string;
  MediaUrls?: string[];
  ConfigurationSetName?: string;
  MaxPrice?: string;
  TimeToLive?: number;
  Context?: { [key: string]: string | undefined };
  DryRun?: boolean;
  ProtectConfigurationId?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SendMediaMessageResult {
  MessageId?: string;
}
export type TemplateVariableName = string;
export type TemplateVariableValue = string;
export type TemplateVariableSubstitutionMap = { [key: string]: string | undefined };
export interface SendNotifyTextMessageRequest {
  NotifyConfigurationId: string;
  DestinationPhoneNumber: string;
  TemplateId?: string;
  TemplateVariables: { [key: string]: string | undefined };
  TimeToLive?: number;
  Context?: { [key: string]: string | undefined };
  ConfigurationSetName?: string;
  DryRun?: boolean;
  MessageFeedbackEnabled?: boolean;
}
export interface SendNotifyTextMessageResult {
  MessageId?: string;
  TemplateId?: string;
  ResolvedMessageBody?: string;
}
export interface SendNotifyVoiceMessageRequest {
  NotifyConfigurationId: string;
  DestinationPhoneNumber: string;
  TemplateId?: string;
  TemplateVariables: { [key: string]: string | undefined };
  VoiceId?: string;
  TimeToLive?: number;
  Context?: { [key: string]: string | undefined };
  ConfigurationSetName?: string;
  DryRun?: boolean;
  MessageFeedbackEnabled?: boolean;
}
export interface SendNotifyVoiceMessageResult {
  MessageId?: string;
  TemplateId?: string;
  ResolvedMessageBody?: string;
}
export type RcsMessageOriginationIdentity = string;
export type RcsTextBody = string;
export interface RcsTextMessage {
  Body: string;
}
export type RcsMediaUrl = string;
export interface RcsFileMessage {
  FileUrl: string;
  ThumbnailUrl?: string;
}
export type RcsCardTitle = string;
export type RcsCardDescription = string;
export interface RcsCardMedia {
  FileUrl: string;
  ThumbnailUrl?: string;
  Height?: string;
}
export type RcsSuggestedActionText = string;
export type RcsPostbackData = string;
export interface RcsReplyAction {
  Text: string;
  PostbackData: string;
}
export type RcsOpenUrlValue = string;
export interface RcsOpenUrlAction {
  Text: string;
  PostbackData: string;
  Url: string;
  Application?: string;
  WebviewViewMode?: string;
}
export interface RcsDialPhoneAction {
  Text: string;
  PostbackData: string;
  PhoneNumber: string;
}
export type RcsLocationLabel = string;
export interface RcsShowLocationAction {
  Text: string;
  PostbackData: string;
  Latitude: number;
  Longitude: number;
  Label?: string;
}
export interface RcsRequestLocationAction {
  Text: string;
  PostbackData: string;
}
export type RcsCalendarEventTitle = string;
export type RcsCalendarEventDescription = string;
export interface RcsCreateCalendarEventAction {
  Text: string;
  PostbackData: string;
  Title: string;
  StartTime: Date;
  EndTime: Date;
  Description?: string;
}
export type RcsSuggestedAction =
  | {
      Reply: RcsReplyAction;
      OpenUrl?: never;
      DialPhone?: never;
      ShowLocation?: never;
      RequestLocation?: never;
      CreateCalendarEvent?: never;
    }
  | {
      Reply?: never;
      OpenUrl: RcsOpenUrlAction;
      DialPhone?: never;
      ShowLocation?: never;
      RequestLocation?: never;
      CreateCalendarEvent?: never;
    }
  | {
      Reply?: never;
      OpenUrl?: never;
      DialPhone: RcsDialPhoneAction;
      ShowLocation?: never;
      RequestLocation?: never;
      CreateCalendarEvent?: never;
    }
  | {
      Reply?: never;
      OpenUrl?: never;
      DialPhone?: never;
      ShowLocation: RcsShowLocationAction;
      RequestLocation?: never;
      CreateCalendarEvent?: never;
    }
  | {
      Reply?: never;
      OpenUrl?: never;
      DialPhone?: never;
      ShowLocation?: never;
      RequestLocation: RcsRequestLocationAction;
      CreateCalendarEvent?: never;
    }
  | {
      Reply?: never;
      OpenUrl?: never;
      DialPhone?: never;
      ShowLocation?: never;
      RequestLocation?: never;
      CreateCalendarEvent: RcsCreateCalendarEventAction;
    };
export type RcsCardSuggestedActionList = RcsSuggestedAction[];
export interface RcsCardContent {
  Title?: string;
  Description?: string;
  Media?: RcsCardMedia;
  Suggestions?: RcsSuggestedAction[];
}
export interface RcsStandaloneCard {
  CardOrientation: string;
  ThumbnailImageAlignment?: string;
  CardContent: RcsCardContent;
}
export interface RcsCarouselCardMedia {
  FileUrl: string;
  ThumbnailUrl?: string;
  Height?: string;
}
export interface RcsCarouselCardContent {
  Title?: string;
  Description?: string;
  Media?: RcsCarouselCardMedia;
  Suggestions?: RcsSuggestedAction[];
}
export type RcsCarouselCardContentList = RcsCarouselCardContent[];
export interface RcsCarousel {
  CardWidth: string;
  CardContents: RcsCarouselCardContent[];
}
export type RcsContent =
  | { TextMessage: RcsTextMessage; FileMessage?: never; RichCard?: never; Carousel?: never }
  | { TextMessage?: never; FileMessage: RcsFileMessage; RichCard?: never; Carousel?: never }
  | { TextMessage?: never; FileMessage?: never; RichCard: RcsStandaloneCard; Carousel?: never }
  | { TextMessage?: never; FileMessage?: never; RichCard?: never; Carousel: RcsCarousel };
export type RcsSuggestedActionList = RcsSuggestedAction[];
export interface RcsMessageContent {
  Content: RcsContent;
  Suggestions?: RcsSuggestedAction[];
}
export type RcsTimeToLive = number;
export type RcsMessageTrafficType = string;
export type RcsFallbackChannel = string;
export type RcsFallbackMessageBody = string;
export type RcsFallbackOriginationIdentity = string;
export interface RcsFallbackConfiguration {
  Channel: string;
  MessageBody?: string;
  MediaUrls?: string[];
  OriginationIdentity?: string;
}
export interface SendRcsMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity: string;
  RcsMessageContent?: RcsMessageContent;
  TimeToLive?: number;
  MessageTrafficType?: string;
  FallbackConfiguration?: RcsFallbackConfiguration;
  ProtectConfigurationId?: string;
  ConfigurationSetName?: string;
  MaxPrice?: string;
  DryRun?: boolean;
  Context?: { [key: string]: string | undefined };
  MessageFeedbackEnabled?: boolean;
}
export interface SendRcsMessageResult {
  MessageId?: string;
}
export type TextMessageOriginationIdentity = string;
export interface SendTextMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity?: string;
  MessageBody?: string;
  MessageType?: string;
  Keyword?: string;
  ConfigurationSetName?: string;
  MaxPrice?: string;
  TimeToLive?: number;
  Context?: { [key: string]: string | undefined };
  DestinationCountryParameters?: { [key: string]: string | undefined };
  DryRun?: boolean;
  ProtectConfigurationId?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SendTextMessageResult {
  MessageId?: string;
}
export type VoiceMessageOriginationIdentity = string;
export type VoiceMessageBody = string;
export type VoiceMessageBodyTextType = string;
export interface SendVoiceMessageRequest {
  DestinationPhoneNumber: string;
  OriginationIdentity: string;
  MessageBody?: string;
  MessageBodyTextType?: string;
  VoiceId?: string;
  ConfigurationSetName?: string;
  MaxPricePerMinute?: string;
  TimeToLive?: number;
  Context?: { [key: string]: string | undefined };
  DryRun?: boolean;
  ProtectConfigurationId?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SendVoiceMessageResult {
  MessageId?: string;
}
export interface SetAccountDefaultProtectConfigurationRequest {
  ProtectConfigurationId: string;
}
export interface SetAccountDefaultProtectConfigurationResult {
  DefaultProtectConfigurationArn: string;
  DefaultProtectConfigurationId: string;
}
export interface SetDefaultMessageFeedbackEnabledRequest {
  ConfigurationSetName: string;
  MessageFeedbackEnabled: boolean;
}
export interface SetDefaultMessageFeedbackEnabledResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  MessageFeedbackEnabled?: boolean;
}
export interface SetDefaultMessageTypeRequest {
  ConfigurationSetName: string;
  MessageType: string;
}
export interface SetDefaultMessageTypeResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  MessageType?: string;
}
export interface SetDefaultSenderIdRequest {
  ConfigurationSetName: string;
  SenderId: string;
}
export interface SetDefaultSenderIdResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  SenderId?: string;
}
export interface SetMediaMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetMediaMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SetNotifyMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetNotifyMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SetRcsMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetRcsMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SetTextMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetTextMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SetVoiceMessageSpendLimitOverrideRequest {
  MonthlyLimit: number;
}
export interface SetVoiceMessageSpendLimitOverrideResult {
  MonthlyLimit?: number;
}
export interface SubmitRegistrationVersionRequest {
  RegistrationId: string;
  AwsReview?: boolean;
}
export interface SubmitRegistrationVersionResult {
  RegistrationArn: string;
  RegistrationId: string;
  VersionNumber: number;
  RegistrationVersionStatus: string;
  RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
  AwsReview: boolean;
}
export type NonEmptyTagList = Tag[];
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResult {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResult {}
export interface UpdateEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
  Enabled?: boolean;
  MatchingEventTypes?: string[];
  CloudWatchLogsDestination?: CloudWatchLogsDestination;
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  SnsDestination?: SnsDestination;
}
export interface UpdateEventDestinationResult {
  ConfigurationSetArn?: string;
  ConfigurationSetName?: string;
  EventDestination?: EventDestination;
}
export type NotifyPoolIdOrUnset = string;
export interface UpdateNotifyConfigurationRequest {
  NotifyConfigurationId: string;
  DefaultTemplateId?: string;
  PoolId?: string;
  EnabledCountries?: string[];
  EnabledChannels?: string[];
  DeletionProtectionEnabled?: boolean;
}
export interface UpdateNotifyConfigurationResult {
  NotifyConfigurationArn: string;
  NotifyConfigurationId: string;
  DisplayName: string;
  UseCase: string;
  DefaultTemplateId?: string;
  PoolId?: string;
  EnabledCountries?: string[];
  EnabledChannels: string[];
  Tier: string;
  TierUpgradeStatus: string;
  Status: string;
  RejectionReason?: string;
  DeletionProtectionEnabled: boolean;
  CreatedTimestamp: Date;
}
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  InternationalSendingEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdatePhoneNumberResult {
  PhoneNumberArn?: string;
  PhoneNumberId?: string;
  PhoneNumber?: string;
  Status?: string;
  IsoCountryCode?: string;
  MessageType?: string;
  NumberCapabilities?: string[];
  NumberType?: string;
  MonthlyLeasingPrice?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  InternationalSendingEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  RegistrationId?: string;
  CreatedTimestamp?: Date;
}
export interface UpdatePoolRequest {
  PoolId: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdatePoolResult {
  PoolArn?: string;
  PoolId?: string;
  Status?: string;
  MessageType?: string;
  TwoWayEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  SelfManagedOptOutsEnabled?: boolean;
  OptOutListName?: string;
  SharedRoutesEnabled?: boolean;
  DeletionProtectionEnabled?: boolean;
  CreatedTimestamp?: Date;
}
export interface UpdateProtectConfigurationRequest {
  ProtectConfigurationId: string;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdateProtectConfigurationResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  CreatedTimestamp: Date;
  AccountDefault: boolean;
  DeletionProtectionEnabled: boolean;
}
export interface UpdateProtectConfigurationCountryRuleSetRequest {
  ProtectConfigurationId: string;
  NumberCapability: string;
  CountryRuleSetUpdates: {
    [key: string]: ProtectConfigurationCountryRuleSetInformation | undefined;
  };
}
export interface UpdateProtectConfigurationCountryRuleSetResult {
  ProtectConfigurationArn: string;
  ProtectConfigurationId: string;
  NumberCapability: string;
  CountryRuleSet: { [key: string]: ProtectConfigurationCountryRuleSetInformation | undefined };
}
export type TwoWayMediaS3BucketNameOrUnset = string;
export type IamRoleArnOrUnset = string;
export interface UpdateRcsAgentRequest {
  RcsAgentId: string;
  DeletionProtectionEnabled?: boolean;
  OptOutListName?: string;
  SelfManagedOptOutsEnabled?: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  TwoWayEnabled?: boolean;
  TwoWayMediaS3BucketName?: string;
  TwoWayMediaS3KeyPrefix?: string;
  TwoWayMediaS3Role?: string;
  TwoWayRcsEventsEnabled?: string[];
}
export interface UpdateRcsAgentResult {
  RcsAgentArn: string;
  RcsAgentId: string;
  Status: string;
  CreatedTimestamp: Date;
  DeletionProtectionEnabled: boolean;
  OptOutListName?: string;
  SelfManagedOptOutsEnabled: boolean;
  TwoWayChannelArn?: string;
  TwoWayChannelRole?: string;
  TwoWayEnabled: boolean;
  TwoWayMediaS3BucketName?: string;
  TwoWayMediaS3KeyPrefix?: string;
  TwoWayMediaS3Role?: string;
  TwoWayRcsEventsEnabled?: string[];
}
export interface UpdateSenderIdRequest {
  SenderId: string;
  IsoCountryCode: string;
  DeletionProtectionEnabled?: boolean;
}
export interface UpdateSenderIdResult {
  SenderIdArn: string;
  SenderId: string;
  IsoCountryCode: string;
  MessageTypes: string[];
  MonthlyLeasingPrice: string;
  DeletionProtectionEnabled: boolean;
  Registered: boolean;
  RegistrationId?: string;
}
export type VerificationCode = string;
export interface VerifyDestinationNumberRequest {
  VerifiedDestinationNumberId: string;
  VerificationCode: string;
}
export interface VerifyDestinationNumberResult {
  VerifiedDestinationNumberArn: string;
  VerifiedDestinationNumberId: string;
  DestinationPhoneNumber: string;
  Status: string;
  CreatedTimestamp: Date;
}
export type AccessDeniedExceptionReason = string;
export type ConflictExceptionReason = string;
export type ResourceType = string;
export type ServiceQuotaExceededExceptionReason = string;
export type ValidationExceptionReason = string;
export interface ValidationExceptionField {
  Name: string;
  Message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateOriginationIdentityError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates the specified origination identity with a pool.
 *
 * If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.
 *
 * If the origination identity configuration doesn't match the pool's configuration, an error is returned.
 */
export const associateOriginationIdentity: API.OperationMethod<
  AssociateOriginationIdentityRequest,
  AssociateOriginationIdentityResult,
  AssociateOriginationIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateOriginationIdentityRequest>,
  output: __S(1) as any as S.Schema<AssociateOriginationIdentityResult>,
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
  operationName: "AssociateOriginationIdentity",
}));

export type AssociateProtectConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate a protect configuration with a configuration set. This replaces the configuration sets current protect configuration. A configuration set can only be associated with one protect configuration at a time. A protect configuration can be associated with multiple configuration sets.
 */
export const associateProtectConfiguration: API.OperationMethod<
  AssociateProtectConfigurationRequest,
  AssociateProtectConfigurationResult,
  AssociateProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AssociateProtectConfigurationRequest>,
  output: __S(3) as any as S.Schema<AssociateProtectConfigurationResult>,
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
  operationName: "AssociateProtectConfiguration",
}));

export type CarrierLookupError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a destination phone number, including whether the number type and whether it is valid, the carrier, and more.
 */
export const carrierLookup: API.OperationMethod<
  CarrierLookupRequest,
  CarrierLookupResult,
  CarrierLookupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CarrierLookupRequest>,
  output: __S(5) as any as S.Schema<CarrierLookupResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CarrierLookup",
}));

export type CreateConfigurationSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
 *
 * A configuration set is a set of rules that you apply to the SMS and voice messages that you send.
 *
 * When you send a message, you can optionally specify a single configuration set.
 */
export const createConfigurationSet: API.OperationMethod<
  CreateConfigurationSetRequest,
  CreateConfigurationSetResult,
  CreateConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<CreateConfigurationSetRequest>,
  output: __S(9) as any as S.Schema<CreateConfigurationSetResult>,
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
  operationName: "CreateConfigurationSet",
}));

export type CreateEventDestinationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new event destination in a configuration set.
 *
 * An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.
 *
 * You can only create one event destination at a time. You must provide a value for a single event destination using either `CloudWatchLogsDestination`, `KinesisFirehoseDestination` or `SnsDestination`. If an event destination isn't provided then an exception is returned.
 *
 * Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Firehose destination.
 */
export const createEventDestination: API.OperationMethod<
  CreateEventDestinationRequest,
  CreateEventDestinationResult,
  CreateEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<CreateEventDestinationRequest>,
  output: __S(16) as any as S.Schema<CreateEventDestinationResult>,
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
  operationName: "CreateEventDestination",
}));

export type CreateNotifyConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new notify configuration for managed messaging. A notify configuration defines the settings for sending templated messages, including the display name, use case, enabled channels, and enabled countries.
 */
export const createNotifyConfiguration: API.OperationMethod<
  CreateNotifyConfigurationRequest,
  CreateNotifyConfigurationResult,
  CreateNotifyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<CreateNotifyConfigurationRequest>,
  output: __S(18) as any as S.Schema<CreateNotifyConfigurationResult>,
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
  operationName: "CreateNotifyConfiguration",
}));

export type CreateOptOutListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new opt-out list.
 *
 * If the opt-out list name already exists, an error is returned.
 *
 * An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see SMS opt out in the End User Messaging SMS User Guide.
 */
export const createOptOutList: API.OperationMethod<
  CreateOptOutListRequest,
  CreateOptOutListResult,
  CreateOptOutListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<CreateOptOutListRequest>,
  output: __S(20) as any as S.Schema<CreateOptOutListResult>,
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
  operationName: "CreateOptOutList",
}));

export type CreatePoolError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
 *
 * The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.
 *
 * If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.
 */
export const createPool: API.OperationMethod<
  CreatePoolRequest,
  CreatePoolResult,
  CreatePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<CreatePoolRequest>,
  output: __S(22) as any as S.Schema<CreatePoolResult>,
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
  operationName: "CreatePool",
}));

export type CreateProtectConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new protect configuration. By default all country rule sets for each capability are set to `ALLOW`. Update the country rule sets using `UpdateProtectConfigurationCountryRuleSet`. A protect configurations name is stored as a Tag with the key set to `Name` and value as the name of the protect configuration.
 */
export const createProtectConfiguration: API.OperationMethod<
  CreateProtectConfigurationRequest,
  CreateProtectConfigurationResult,
  CreateProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(23) as any as S.Schema<CreateProtectConfigurationRequest>,
  output: __S(24) as any as S.Schema<CreateProtectConfigurationResult>,
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
  operationName: "CreateProtectConfiguration",
}));

export type CreateRcsAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new RCS agent for sending rich messages through the RCS channel. The RCS agent serves as an origination identity for sending RCS messages to your recipients.
 */
export const createRcsAgent: API.OperationMethod<
  CreateRcsAgentRequest,
  CreateRcsAgentResult,
  CreateRcsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<CreateRcsAgentRequest>,
  output: __S(26) as any as S.Schema<CreateRcsAgentResult>,
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
  operationName: "CreateRcsAgent",
}));

export type CreateRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new registration based on the **RegistrationType** field.
 */
export const createRegistration: API.OperationMethod<
  CreateRegistrationRequest,
  CreateRegistrationResult,
  CreateRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<CreateRegistrationRequest>,
  output: __S(29) as any as S.Schema<CreateRegistrationResult>,
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
  operationName: "CreateRegistration",
}));

export type CreateRegistrationAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associate the registration with an origination identity such as a phone number or sender ID.
 */
export const createRegistrationAssociation: API.OperationMethod<
  CreateRegistrationAssociationRequest,
  CreateRegistrationAssociationResult,
  CreateRegistrationAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<CreateRegistrationAssociationRequest>,
  output: __S(31) as any as S.Schema<CreateRegistrationAssociationResult>,
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
  operationName: "CreateRegistrationAssociation",
}));

export type CreateRegistrationAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new registration attachment to use for uploading a file or a URL to a file. The maximum file size is 5MB and valid file extensions are PDF, JPEG and PNG. For example, many sender ID registrations require a signed "letter of authorization" (LOA) to be submitted.
 *
 * Use either `AttachmentUrl` or `AttachmentBody` to upload your attachment. If both are specified then an exception is returned.
 */
export const createRegistrationAttachment: API.OperationMethod<
  CreateRegistrationAttachmentRequest,
  CreateRegistrationAttachmentResult,
  CreateRegistrationAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<CreateRegistrationAttachmentRequest>,
  output: __S(33) as any as S.Schema<CreateRegistrationAttachmentResult>,
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
  operationName: "CreateRegistrationAttachment",
}));

export type CreateRegistrationVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new version of the registration and increase the **VersionNumber**. The previous version of the registration becomes read-only.
 */
export const createRegistrationVersion: API.OperationMethod<
  CreateRegistrationVersionRequest,
  CreateRegistrationVersionResult,
  CreateRegistrationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<CreateRegistrationVersionRequest>,
  output: __S(36) as any as S.Schema<CreateRegistrationVersionResult>,
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
  operationName: "CreateRegistrationVersion",
}));

export type CreateVerifiedDestinationNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * You can only send messages to verified destination numbers when your account is in the sandbox. You can add up to 10 verified destination numbers.
 */
export const createVerifiedDestinationNumber: API.OperationMethod<
  CreateVerifiedDestinationNumberRequest,
  CreateVerifiedDestinationNumberResult,
  CreateVerifiedDestinationNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<CreateVerifiedDestinationNumberRequest>,
  output: __S(38) as any as S.Schema<CreateVerifiedDestinationNumberResult>,
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
  operationName: "CreateVerifiedDestinationNumber",
}));

export type DeleteAccountDefaultProtectConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the current account default protect configuration.
 */
export const deleteAccountDefaultProtectConfiguration: API.OperationMethod<
  DeleteAccountDefaultProtectConfigurationRequest,
  DeleteAccountDefaultProtectConfigurationResult,
  DeleteAccountDefaultProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39) as any as S.Schema<DeleteAccountDefaultProtectConfigurationRequest>,
  output: __S(40) as any as S.Schema<DeleteAccountDefaultProtectConfigurationResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAccountDefaultProtectConfiguration",
}));

export type DeleteConfigurationSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing configuration set.
 *
 * A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages.
 */
export const deleteConfigurationSet: API.OperationMethod<
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResult,
  DeleteConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<DeleteConfigurationSetRequest>,
  output: __S(43) as any as S.Schema<DeleteConfigurationSetResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationSet",
}));

export type DeleteDefaultMessageTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing default message type on a configuration set.
 *
 * A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose **Transactional**. If you plan to send messages that contain marketing material or other promotional content, choose **Promotional**. This setting applies to your entire Amazon Web Services account.
 */
export const deleteDefaultMessageType: API.OperationMethod<
  DeleteDefaultMessageTypeRequest,
  DeleteDefaultMessageTypeResult,
  DeleteDefaultMessageTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<DeleteDefaultMessageTypeRequest>,
  output: __S(45) as any as S.Schema<DeleteDefaultMessageTypeResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDefaultMessageType",
}));

export type DeleteDefaultSenderIdError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing default sender ID on a configuration set.
 *
 * A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.
 */
export const deleteDefaultSenderId: API.OperationMethod<
  DeleteDefaultSenderIdRequest,
  DeleteDefaultSenderIdResult,
  DeleteDefaultSenderIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<DeleteDefaultSenderIdRequest>,
  output: __S(47) as any as S.Schema<DeleteDefaultSenderIdResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDefaultSenderId",
}));

export type DeleteEventDestinationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing event destination.
 *
 * An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.
 */
export const deleteEventDestination: API.OperationMethod<
  DeleteEventDestinationRequest,
  DeleteEventDestinationResult,
  DeleteEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<DeleteEventDestinationRequest>,
  output: __S(16) as any as S.Schema<DeleteEventDestinationResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEventDestination",
}));

export type DeleteKeywordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing keyword from an origination phone number or pool.
 *
 * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message.
 *
 * Keywords "HELP" and "STOP" can't be deleted or modified.
 */
export const deleteKeyword: API.OperationMethod<
  DeleteKeywordRequest,
  DeleteKeywordResult,
  DeleteKeywordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<DeleteKeywordRequest>,
  output: __S(50) as any as S.Schema<DeleteKeywordResult>,
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
  operationName: "DeleteKeyword",
}));

export type DeleteMediaMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account-level monthly spending limit override for sending multimedia messages (MMS). Deleting a spend limit override will set the `EnforcedLimit` to equal the `MaxLimit`, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Quotas for Server Migration Service in the *Server Migration Service User Guide*.
 */
export const deleteMediaMessageSpendLimitOverride: API.OperationMethod<
  DeleteMediaMessageSpendLimitOverrideRequest,
  DeleteMediaMessageSpendLimitOverrideResult,
  DeleteMediaMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DeleteMediaMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<DeleteMediaMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMediaMessageSpendLimitOverride",
}));

export type DeleteNotifyConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing notify configuration.
 *
 * If deletion protection is enabled, an error is returned.
 */
export const deleteNotifyConfiguration: API.OperationMethod<
  DeleteNotifyConfigurationRequest,
  DeleteNotifyConfigurationResult,
  DeleteNotifyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DeleteNotifyConfigurationRequest>,
  output: __S(54) as any as S.Schema<DeleteNotifyConfigurationResult>,
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
  operationName: "DeleteNotifyConfiguration",
}));

export type DeleteNotifyMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account-level monthly spending limit override for sending notify messages. Deleting a spend limit override will set the `EnforcedLimit` to equal the `MaxLimit`, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Quotas in the *End User Messaging SMS User Guide*.
 */
export const deleteNotifyMessageSpendLimitOverride: API.OperationMethod<
  DeleteNotifyMessageSpendLimitOverrideRequest,
  DeleteNotifyMessageSpendLimitOverrideResult,
  DeleteNotifyMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55) as any as S.Schema<DeleteNotifyMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<DeleteNotifyMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNotifyMessageSpendLimitOverride",
}));

export type DeleteOptedOutNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing opted out destination phone number from the specified opt-out list.
 *
 * Each destination phone number can only be deleted once every 30 days.
 *
 * If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.
 */
export const deleteOptedOutNumber: API.OperationMethod<
  DeleteOptedOutNumberRequest,
  DeleteOptedOutNumberResult,
  DeleteOptedOutNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<DeleteOptedOutNumberRequest>,
  output: __S(57) as any as S.Schema<DeleteOptedOutNumberResult>,
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
  operationName: "DeleteOptedOutNumber",
}));

export type DeleteOptOutListError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.
 *
 * If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an error is returned.
 */
export const deleteOptOutList: API.OperationMethod<
  DeleteOptOutListRequest,
  DeleteOptOutListResult,
  DeleteOptOutListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<DeleteOptOutListRequest>,
  output: __S(59) as any as S.Schema<DeleteOptOutListResult>,
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
  operationName: "DeleteOptOutList",
}));

export type DeletePoolError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.
 *
 * If the pool status isn't active or if deletion protection is enabled, an error is returned.
 *
 * A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
 */
export const deletePool: API.OperationMethod<
  DeletePoolRequest,
  DeletePoolResult,
  DeletePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<DeletePoolRequest>,
  output: __S(61) as any as S.Schema<DeletePoolResult>,
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
  operationName: "DeletePool",
}));

export type DeleteProtectConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Permanently delete the protect configuration. The protect configuration must have deletion protection disabled and must not be associated as the account default protect configuration or associated with a configuration set.
 */
export const deleteProtectConfiguration: API.OperationMethod<
  DeleteProtectConfigurationRequest,
  DeleteProtectConfigurationResult,
  DeleteProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<DeleteProtectConfigurationRequest>,
  output: __S(63) as any as S.Schema<DeleteProtectConfigurationResult>,
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
  operationName: "DeleteProtectConfiguration",
}));

export type DeleteProtectConfigurationRuleSetNumberOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Permanently delete the protect configuration rule set number override.
 */
export const deleteProtectConfigurationRuleSetNumberOverride: API.OperationMethod<
  DeleteProtectConfigurationRuleSetNumberOverrideRequest,
  DeleteProtectConfigurationRuleSetNumberOverrideResult,
  DeleteProtectConfigurationRuleSetNumberOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<DeleteProtectConfigurationRuleSetNumberOverrideRequest>,
  output: __S(65) as any as S.Schema<DeleteProtectConfigurationRuleSetNumberOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProtectConfigurationRuleSetNumberOverride",
}));

export type DeleteRcsAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing RCS agent. If deletion protection is enabled, an error is returned.
 */
export const deleteRcsAgent: API.OperationMethod<
  DeleteRcsAgentRequest,
  DeleteRcsAgentResult,
  DeleteRcsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DeleteRcsAgentRequest>,
  output: __S(67) as any as S.Schema<DeleteRcsAgentResult>,
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
  operationName: "DeleteRcsAgent",
}));

export type DeleteRcsMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account-level monthly spending limit override for sending RCS messages. Deleting a spend limit override sets the `EnforcedLimit` to equal the `MaxLimit`, which is set by Amazon Web Services.
 */
export const deleteRcsMessageSpendLimitOverride: API.OperationMethod<
  DeleteRcsMessageSpendLimitOverrideRequest,
  DeleteRcsMessageSpendLimitOverrideResult,
  DeleteRcsMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteRcsMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<DeleteRcsMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRcsMessageSpendLimitOverride",
}));

export type DeleteRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Permanently delete an existing registration from your account.
 */
export const deleteRegistration: API.OperationMethod<
  DeleteRegistrationRequest,
  DeleteRegistrationResult,
  DeleteRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<DeleteRegistrationRequest>,
  output: __S(70) as any as S.Schema<DeleteRegistrationResult>,
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
  operationName: "DeleteRegistration",
}));

export type DeleteRegistrationAttachmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Permanently delete the specified registration attachment.
 */
export const deleteRegistrationAttachment: API.OperationMethod<
  DeleteRegistrationAttachmentRequest,
  DeleteRegistrationAttachmentResult,
  DeleteRegistrationAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteRegistrationAttachmentRequest>,
  output: __S(72) as any as S.Schema<DeleteRegistrationAttachmentResult>,
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
  operationName: "DeleteRegistrationAttachment",
}));

export type DeleteRegistrationFieldValueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete the value in a registration form field.
 */
export const deleteRegistrationFieldValue: API.OperationMethod<
  DeleteRegistrationFieldValueRequest,
  DeleteRegistrationFieldValueResult,
  DeleteRegistrationFieldValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<DeleteRegistrationFieldValueRequest>,
  output: __S(74) as any as S.Schema<DeleteRegistrationFieldValueResult>,
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
  operationName: "DeleteRegistrationFieldValue",
}));

export type DeleteResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the resource-based policy document attached to the End User Messaging SMS resource. A shared resource can be a Pool, Opt-out list, Sender Id, or Phone number.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResult,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(76) as any as S.Schema<DeleteResourcePolicyResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteTextMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the `EnforcedLimit` to equal the `MaxLimit`, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Quotas in the *End User Messaging SMS User Guide*.
 */
export const deleteTextMessageSpendLimitOverride: API.OperationMethod<
  DeleteTextMessageSpendLimitOverrideRequest,
  DeleteTextMessageSpendLimitOverrideResult,
  DeleteTextMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DeleteTextMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<DeleteTextMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTextMessageSpendLimitOverride",
}));

export type DeleteVerifiedDestinationNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Delete a verified destination phone number.
 */
export const deleteVerifiedDestinationNumber: API.OperationMethod<
  DeleteVerifiedDestinationNumberRequest,
  DeleteVerifiedDestinationNumberResult,
  DeleteVerifiedDestinationNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<DeleteVerifiedDestinationNumberRequest>,
  output: __S(79) as any as S.Schema<DeleteVerifiedDestinationNumberResult>,
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
  operationName: "DeleteVerifiedDestinationNumber",
}));

export type DeleteVoiceMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the `EnforcedLimit` equal to the `MaxLimit`, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see Quotas in the *End User Messaging SMS User Guide*.
 */
export const deleteVoiceMessageSpendLimitOverride: API.OperationMethod<
  DeleteVoiceMessageSpendLimitOverrideRequest,
  DeleteVoiceMessageSpendLimitOverrideResult,
  DeleteVoiceMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<DeleteVoiceMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<DeleteVoiceMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVoiceMessageSpendLimitOverride",
}));

export type DescribeAccountAttributesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.
 *
 * New accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse.
 */
export const describeAccountAttributes: API.PaginatedOperationMethod<
  DescribeAccountAttributesRequest,
  DescribeAccountAttributesResult,
  DescribeAccountAttributesError,
  Credentials | HttpClient.HttpClient,
  AccountAttribute
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81) as any as S.Schema<DescribeAccountAttributesRequest>,
  output: __S(84) as any as S.Schema<DescribeAccountAttributesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAttributes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountAttributes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeAccountLimitsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the current End User Messaging SMS SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.
 *
 * When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see Quotas in the *End User Messaging SMS User Guide*.
 */
export const describeAccountLimits: API.PaginatedOperationMethod<
  DescribeAccountLimitsRequest,
  DescribeAccountLimitsResult,
  DescribeAccountLimitsError,
  Credentials | HttpClient.HttpClient,
  AccountLimit
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(85) as any as S.Schema<DescribeAccountLimitsRequest>,
  output: __S(88) as any as S.Schema<DescribeAccountLimitsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountLimits",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountLimits",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeConfigurationSetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified configuration sets or all in your account.
 *
 * If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.
 *
 * If you specify a configuration set name that isn't valid, an error is returned.
 */
export const describeConfigurationSets: API.PaginatedOperationMethod<
  DescribeConfigurationSetsRequest,
  DescribeConfigurationSetsResult,
  DescribeConfigurationSetsError,
  Credentials | HttpClient.HttpClient,
  ConfigurationSetInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(91) as any as S.Schema<DescribeConfigurationSetsRequest>,
  output: __S(94) as any as S.Schema<DescribeConfigurationSetsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConfigurationSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConfigurationSets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeKeywordsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified keywords or all keywords on your origination phone number or pool.
 *
 * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message.
 *
 * If you specify a keyword that isn't valid, an error is returned.
 */
export const describeKeywords: API.PaginatedOperationMethod<
  DescribeKeywordsRequest,
  DescribeKeywordsResult,
  DescribeKeywordsError,
  Credentials | HttpClient.HttpClient,
  KeywordInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(95) as any as S.Schema<DescribeKeywordsRequest>,
  output: __S(98) as any as S.Schema<DescribeKeywordsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeKeywords",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Keywords",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeNotifyConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified notify configurations or all notify configurations in your account.
 *
 * If you specify notify configuration IDs, the output includes information for only the specified notify configurations. If you specify filters, the output includes information for only those notify configurations that meet the filter criteria. If you don't specify notify configuration IDs or filters, the output includes information for all notify configurations.
 *
 * If you specify a notify configuration ID that isn't valid, an error is returned.
 */
export const describeNotifyConfigurations: API.PaginatedOperationMethod<
  DescribeNotifyConfigurationsRequest,
  DescribeNotifyConfigurationsResult,
  DescribeNotifyConfigurationsError,
  Credentials | HttpClient.HttpClient,
  NotifyConfigurationInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(101) as any as S.Schema<DescribeNotifyConfigurationsRequest>,
  output: __S(103) as any as S.Schema<DescribeNotifyConfigurationsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNotifyConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NotifyConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeNotifyTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified notify templates or all notify templates in your account.
 *
 * If you specify template IDs, the output includes information for only the specified notify templates. If you specify filters, the output includes information for only those notify templates that meet the filter criteria. If you don't specify template IDs or filters, the output includes information for all notify templates.
 *
 * If you specify a template ID that isn't valid, an error is returned.
 */
export const describeNotifyTemplates: API.PaginatedOperationMethod<
  DescribeNotifyTemplatesRequest,
  DescribeNotifyTemplatesResult,
  DescribeNotifyTemplatesError,
  Credentials | HttpClient.HttpClient,
  NotifyTemplateInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(104) as any as S.Schema<DescribeNotifyTemplatesRequest>,
  output: __S(109) as any as S.Schema<DescribeNotifyTemplatesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeNotifyTemplates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NotifyTemplates",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeOptedOutNumbersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.
 *
 * If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.
 *
 * If you specify an opted out number that isn't valid, an exception is returned.
 */
export const describeOptedOutNumbers: API.PaginatedOperationMethod<
  DescribeOptedOutNumbersRequest,
  DescribeOptedOutNumbersResult,
  DescribeOptedOutNumbersError,
  Credentials | HttpClient.HttpClient,
  OptedOutNumberInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(110) as any as S.Schema<DescribeOptedOutNumbersRequest>,
  output: __S(113) as any as S.Schema<DescribeOptedOutNumbersResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOptedOutNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "OptedOutNumbers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeOptOutListsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified opt-out list or all opt-out lists in your account.
 *
 * If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.
 *
 * If you specify an opt-out list name that isn't valid, an error is returned.
 */
export const describeOptOutLists: API.PaginatedOperationMethod<
  DescribeOptOutListsRequest,
  DescribeOptOutListsResult,
  DescribeOptOutListsError,
  Credentials | HttpClient.HttpClient,
  OptOutListInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(114) as any as S.Schema<DescribeOptOutListsRequest>,
  output: __S(117) as any as S.Schema<DescribeOptOutListsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOptOutLists",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "OptOutLists",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribePhoneNumbersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified origination phone number, or all the phone numbers in your account.
 *
 * If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.
 *
 * If you specify a phone number ID that isn't valid, an error is returned.
 */
export const describePhoneNumbers: API.PaginatedOperationMethod<
  DescribePhoneNumbersRequest,
  DescribePhoneNumbersResult,
  DescribePhoneNumbersError,
  Credentials | HttpClient.HttpClient,
  PhoneNumberInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(118) as any as S.Schema<DescribePhoneNumbersRequest>,
  output: __S(123) as any as S.Schema<DescribePhoneNumbersResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePhoneNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PhoneNumbers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribePoolsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified pools or all pools associated with your Amazon Web Services account.
 *
 * If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.
 *
 * If you specify a pool ID that isn't valid, an error is returned.
 *
 * A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
 */
export const describePools: API.PaginatedOperationMethod<
  DescribePoolsRequest,
  DescribePoolsResult,
  DescribePoolsError,
  Credentials | HttpClient.HttpClient,
  PoolInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(124) as any as S.Schema<DescribePoolsRequest>,
  output: __S(127) as any as S.Schema<DescribePoolsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePools",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Pools",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeProtectConfigurationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the protect configurations that match any of filters. If a filter isn't provided then all protect configurations are returned.
 */
export const describeProtectConfigurations: API.PaginatedOperationMethod<
  DescribeProtectConfigurationsRequest,
  DescribeProtectConfigurationsResult,
  DescribeProtectConfigurationsError,
  Credentials | HttpClient.HttpClient,
  ProtectConfigurationInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(128) as any as S.Schema<DescribeProtectConfigurationsRequest>,
  output: __S(130) as any as S.Schema<DescribeProtectConfigurationsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProtectConfigurations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProtectConfigurations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRcsAgentCountryLaunchStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the per-country launch status of an RCS agent, including carrier-level details for each country.
 */
export const describeRcsAgentCountryLaunchStatus: API.PaginatedOperationMethod<
  DescribeRcsAgentCountryLaunchStatusRequest,
  DescribeRcsAgentCountryLaunchStatusResult,
  DescribeRcsAgentCountryLaunchStatusError,
  Credentials | HttpClient.HttpClient,
  CountryLaunchStatusInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131) as any as S.Schema<DescribeRcsAgentCountryLaunchStatusRequest>,
  output: __S(136) as any as S.Schema<DescribeRcsAgentCountryLaunchStatusResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRcsAgentCountryLaunchStatus",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CountryLaunchStatus",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRcsAgentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified RCS agents or all RCS agents associated with your Amazon Web Services account.
 *
 * If you specify RCS agent IDs, the output includes information for only the specified RCS agents. If you specify filters, the output includes information for only those RCS agents that meet the filter criteria. If you don't specify RCS agent IDs or filters, the output includes information for all RCS agents.
 */
export const describeRcsAgents: API.PaginatedOperationMethod<
  DescribeRcsAgentsRequest,
  DescribeRcsAgentsResult,
  DescribeRcsAgentsError,
  Credentials | HttpClient.HttpClient,
  RcsAgentInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(137) as any as S.Schema<DescribeRcsAgentsRequest>,
  output: __S(141) as any as S.Schema<DescribeRcsAgentsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRcsAgents",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RcsAgents",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationAttachmentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registration attachments or all registration attachments associated with your Amazon Web Services account.
 */
export const describeRegistrationAttachments: API.PaginatedOperationMethod<
  DescribeRegistrationAttachmentsRequest,
  DescribeRegistrationAttachmentsResult,
  DescribeRegistrationAttachmentsError,
  Credentials | HttpClient.HttpClient,
  RegistrationAttachmentsInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142) as any as S.Schema<DescribeRegistrationAttachmentsRequest>,
  output: __S(145) as any as S.Schema<DescribeRegistrationAttachmentsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrationAttachments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationAttachments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationFieldDefinitionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.
 */
export const describeRegistrationFieldDefinitions: API.PaginatedOperationMethod<
  DescribeRegistrationFieldDefinitionsRequest,
  DescribeRegistrationFieldDefinitionsResult,
  DescribeRegistrationFieldDefinitionsError,
  Credentials | HttpClient.HttpClient,
  RegistrationFieldDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146) as any as S.Schema<DescribeRegistrationFieldDefinitionsRequest>,
  output: __S(160) as any as S.Schema<DescribeRegistrationFieldDefinitionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrationFieldDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationFieldDefinitions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationFieldValuesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registration field values.
 */
export const describeRegistrationFieldValues: API.PaginatedOperationMethod<
  DescribeRegistrationFieldValuesRequest,
  DescribeRegistrationFieldValuesResult,
  DescribeRegistrationFieldValuesError,
  Credentials | HttpClient.HttpClient,
  RegistrationFieldValueInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161) as any as S.Schema<DescribeRegistrationFieldValuesRequest>,
  output: __S(164) as any as S.Schema<DescribeRegistrationFieldValuesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrationFieldValues",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationFieldValues",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registrations.
 */
export const describeRegistrations: API.PaginatedOperationMethod<
  DescribeRegistrationsRequest,
  DescribeRegistrationsResult,
  DescribeRegistrationsError,
  Credentials | HttpClient.HttpClient,
  RegistrationInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<DescribeRegistrationsRequest>,
  output: __S(167) as any as S.Schema<DescribeRegistrationsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Registrations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationSectionDefinitionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registration section definitions. You can use DescribeRegistrationSectionDefinitions to view the requirements for creating, filling out, and submitting each registration type.
 */
export const describeRegistrationSectionDefinitions: API.PaginatedOperationMethod<
  DescribeRegistrationSectionDefinitionsRequest,
  DescribeRegistrationSectionDefinitionsResult,
  DescribeRegistrationSectionDefinitionsError,
  Credentials | HttpClient.HttpClient,
  RegistrationSectionDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(168) as any as S.Schema<DescribeRegistrationSectionDefinitionsRequest>,
  output: __S(172) as any as S.Schema<DescribeRegistrationSectionDefinitionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrationSectionDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationSectionDefinitions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationTypeDefinitionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registration type definitions. You can use DescribeRegistrationTypeDefinitions to view the requirements for creating, filling out, and submitting each registration type.
 */
export const describeRegistrationTypeDefinitions: API.PaginatedOperationMethod<
  DescribeRegistrationTypeDefinitionsRequest,
  DescribeRegistrationTypeDefinitionsResult,
  DescribeRegistrationTypeDefinitionsError,
  Credentials | HttpClient.HttpClient,
  RegistrationTypeDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(173) as any as S.Schema<DescribeRegistrationTypeDefinitionsRequest>,
  output: __S(179) as any as S.Schema<DescribeRegistrationTypeDefinitionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrationTypeDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationTypeDefinitions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeRegistrationVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified registration version.
 */
export const describeRegistrationVersions: API.PaginatedOperationMethod<
  DescribeRegistrationVersionsRequest,
  DescribeRegistrationVersionsResult,
  DescribeRegistrationVersionsError,
  Credentials | HttpClient.HttpClient,
  RegistrationVersionInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(181) as any as S.Schema<DescribeRegistrationVersionsRequest>,
  output: __S(186) as any as S.Schema<DescribeRegistrationVersionsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistrationVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationVersions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSenderIdsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.
 *
 * If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.
 *
 * f you specify a sender ID that isn't valid, an error is returned.
 */
export const describeSenderIds: API.PaginatedOperationMethod<
  DescribeSenderIdsRequest,
  DescribeSenderIdsResult,
  DescribeSenderIdsError,
  Credentials | HttpClient.HttpClient,
  SenderIdInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(189) as any as S.Schema<DescribeSenderIdsRequest>,
  output: __S(192) as any as S.Schema<DescribeSenderIdsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSenderIds",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SenderIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSpendLimitsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the current monthly spend limits for sending voice and text messages.
 *
 * When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see Requesting increases to your monthly SMS, MMS, or Voice spending quota in the *End User Messaging SMS User Guide*.
 */
export const describeSpendLimits: API.PaginatedOperationMethod<
  DescribeSpendLimitsRequest,
  DescribeSpendLimitsResult,
  DescribeSpendLimitsError,
  Credentials | HttpClient.HttpClient,
  SpendLimit
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(193) as any as S.Schema<DescribeSpendLimitsRequest>,
  output: __S(196) as any as S.Schema<DescribeSpendLimitsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSpendLimits",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SpendLimits",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeVerifiedDestinationNumbersError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the specified verified destination numbers.
 */
export const describeVerifiedDestinationNumbers: API.PaginatedOperationMethod<
  DescribeVerifiedDestinationNumbersRequest,
  DescribeVerifiedDestinationNumbersResult,
  DescribeVerifiedDestinationNumbersError,
  Credentials | HttpClient.HttpClient,
  VerifiedDestinationNumberInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(198) as any as S.Schema<DescribeVerifiedDestinationNumbersRequest>,
  output: __S(201) as any as S.Schema<DescribeVerifiedDestinationNumbersResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVerifiedDestinationNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "VerifiedDestinationNumbers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DisassociateOriginationIdentityError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified origination identity from an existing pool.
 *
 * If the origination identity isn't associated with the specified pool, an error is returned.
 */
export const disassociateOriginationIdentity: API.OperationMethod<
  DisassociateOriginationIdentityRequest,
  DisassociateOriginationIdentityResult,
  DisassociateOriginationIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202) as any as S.Schema<DisassociateOriginationIdentityRequest>,
  output: __S(1) as any as S.Schema<DisassociateOriginationIdentityResult>,
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
  operationName: "DisassociateOriginationIdentity",
}));

export type DisassociateProtectConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociate a protect configuration from a configuration set.
 */
export const disassociateProtectConfiguration: API.OperationMethod<
  DisassociateProtectConfigurationRequest,
  DisassociateProtectConfigurationResult,
  DisassociateProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<DisassociateProtectConfigurationRequest>,
  output: __S(3) as any as S.Schema<DisassociateProtectConfigurationResult>,
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
  operationName: "DisassociateProtectConfiguration",
}));

export type DiscardRegistrationVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Discard the current version of the registration.
 */
export const discardRegistrationVersion: API.OperationMethod<
  DiscardRegistrationVersionRequest,
  DiscardRegistrationVersionResult,
  DiscardRegistrationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(204) as any as S.Schema<DiscardRegistrationVersionRequest>,
  output: __S(36) as any as S.Schema<DiscardRegistrationVersionResult>,
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
  operationName: "DiscardRegistrationVersion",
}));

export type GetProtectConfigurationCountryRuleSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve the CountryRuleSet for the specified NumberCapability from a protect configuration.
 */
export const getProtectConfigurationCountryRuleSet: API.OperationMethod<
  GetProtectConfigurationCountryRuleSetRequest,
  GetProtectConfigurationCountryRuleSetResult,
  GetProtectConfigurationCountryRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<GetProtectConfigurationCountryRuleSetRequest>,
  output: __S(208) as any as S.Schema<GetProtectConfigurationCountryRuleSetResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProtectConfigurationCountryRuleSet",
}));

export type GetResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the JSON text of the resource-based policy document attached to the End User Messaging SMS resource. A shared resource can be a Pool, Opt-out list, Sender Id, or Phone number.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResult,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(210) as any as S.Schema<GetResourcePolicyResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type ListAvailablePhoneNumbersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of phone numbers that are available to request, based on the country, capabilities, and number type that you specify. You can optionally provide a number preference to return only numbers that match a specific digit pattern.
 *
 * If no numbers match your search, this operation returns an empty list rather than an error. This operation currently supports only `TEN_DLC` number types in the `US`.
 */
export const listAvailablePhoneNumbers: API.PaginatedOperationMethod<
  ListAvailablePhoneNumbersRequest,
  ListAvailablePhoneNumbersResult,
  ListAvailablePhoneNumbersError,
  Credentials | HttpClient.HttpClient,
  PhoneNumber
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(213) as any as S.Schema<ListAvailablePhoneNumbersRequest>,
  output: __S(214) as any as S.Schema<ListAvailablePhoneNumbersResult>,
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
  operationName: "ListAvailablePhoneNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AvailablePhoneNumbers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListNotifyCountriesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists countries that support notify messaging. You can optionally filter by channel, use case, or tier.
 */
export const listNotifyCountries: API.PaginatedOperationMethod<
  ListNotifyCountriesRequest,
  ListNotifyCountriesResult,
  ListNotifyCountriesError,
  Credentials | HttpClient.HttpClient,
  NotifyCountryInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(215) as any as S.Schema<ListNotifyCountriesRequest>,
  output: __S(218) as any as S.Schema<ListNotifyCountriesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNotifyCountries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "NotifyCountries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPoolOriginationIdentitiesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all associated origination identities in your pool.
 *
 * If you specify filters, the output includes information for only those origination identities that meet the filter criteria.
 */
export const listPoolOriginationIdentities: API.PaginatedOperationMethod<
  ListPoolOriginationIdentitiesRequest,
  ListPoolOriginationIdentitiesResult,
  ListPoolOriginationIdentitiesError,
  Credentials | HttpClient.HttpClient,
  OriginationIdentityMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(219) as any as S.Schema<ListPoolOriginationIdentitiesRequest>,
  output: __S(222) as any as S.Schema<ListPoolOriginationIdentitiesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPoolOriginationIdentities",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "OriginationIdentities",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProtectConfigurationRuleSetNumberOverridesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve all of the protect configuration rule set number overrides that match the filters.
 */
export const listProtectConfigurationRuleSetNumberOverrides: API.PaginatedOperationMethod<
  ListProtectConfigurationRuleSetNumberOverridesRequest,
  ListProtectConfigurationRuleSetNumberOverridesResult,
  ListProtectConfigurationRuleSetNumberOverridesError,
  Credentials | HttpClient.HttpClient,
  ProtectConfigurationRuleSetNumberOverride
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(223) as any as S.Schema<ListProtectConfigurationRuleSetNumberOverridesRequest>,
  output: __S(226) as any as S.Schema<ListProtectConfigurationRuleSetNumberOverridesResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProtectConfigurationRuleSetNumberOverrides",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RuleSetNumberOverrides",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRegistrationAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieve all of the origination identities that are associated with a registration.
 */
export const listRegistrationAssociations: API.PaginatedOperationMethod<
  ListRegistrationAssociationsRequest,
  ListRegistrationAssociationsResult,
  ListRegistrationAssociationsError,
  Credentials | HttpClient.HttpClient,
  RegistrationAssociationMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(227) as any as S.Schema<ListRegistrationAssociationsRequest>,
  output: __S(230) as any as S.Schema<ListRegistrationAssociationsResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistrationAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RegistrationAssociations",
    pageSize: "MaxResults",
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
 * List all tags associated with a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(231) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(232) as any as S.Schema<ListTagsForResourceResult>,
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

export type PutKeywordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a keyword configuration on an origination phone number or pool.
 *
 * A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, End User Messaging SMS responds with a customizable message.
 *
 * If you specify a keyword that isn't valid, an error is returned.
 */
export const putKeyword: API.OperationMethod<
  PutKeywordRequest,
  PutKeywordResult,
  PutKeywordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(233) as any as S.Schema<PutKeywordRequest>,
  output: __S(50) as any as S.Schema<PutKeywordResult>,
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
  operationName: "PutKeyword",
}));

export type PutMessageFeedbackError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Set the MessageFeedbackStatus as `RECEIVED` or `FAILED` for the passed in MessageId.
 *
 * If you use message feedback then you must update message feedback record. When you receive a signal that a user has received the message you must use `PutMessageFeedback` to set the message feedback record as `RECEIVED`; Otherwise, an hour after the message feedback record is set to `FAILED`.
 */
export const putMessageFeedback: API.OperationMethod<
  PutMessageFeedbackRequest,
  PutMessageFeedbackResult,
  PutMessageFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(234) as any as S.Schema<PutMessageFeedbackRequest>,
  output: __S(235) as any as S.Schema<PutMessageFeedbackResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMessageFeedback",
}));

export type PutOptedOutNumberError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an opted out destination phone number in the opt-out list.
 *
 * If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an error is returned.
 */
export const putOptedOutNumber: API.OperationMethod<
  PutOptedOutNumberRequest,
  PutOptedOutNumberResult,
  PutOptedOutNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(236) as any as S.Schema<PutOptedOutNumberRequest>,
  output: __S(237) as any as S.Schema<PutOptedOutNumberResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutOptedOutNumber",
}));

export type PutProtectConfigurationRuleSetNumberOverrideError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create or update a phone number rule override and associate it with a protect configuration.
 */
export const putProtectConfigurationRuleSetNumberOverride: API.OperationMethod<
  PutProtectConfigurationRuleSetNumberOverrideRequest,
  PutProtectConfigurationRuleSetNumberOverrideResult,
  PutProtectConfigurationRuleSetNumberOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(238) as any as S.Schema<PutProtectConfigurationRuleSetNumberOverrideRequest>,
  output: __S(65) as any as S.Schema<PutProtectConfigurationRuleSetNumberOverrideResult>,
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
  operationName: "PutProtectConfigurationRuleSetNumberOverride",
}));

export type PutRegistrationFieldValueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a field value for a registration.
 */
export const putRegistrationFieldValue: API.OperationMethod<
  PutRegistrationFieldValueRequest,
  PutRegistrationFieldValueResult,
  PutRegistrationFieldValueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239) as any as S.Schema<PutRegistrationFieldValueRequest>,
  output: __S(74) as any as S.Schema<PutRegistrationFieldValueResult>,
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
  operationName: "PutRegistrationFieldValue",
}));

export type PutResourcePolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a resource-based policy to a End User Messaging SMS resource(phone number, sender Id, phone poll, or opt-out list) that is used for sharing the resource. A shared resource can be a Pool, Opt-out list, Sender Id, or Phone number. For more information about resource-based policies, see Working with shared resources in the *End User Messaging SMS User Guide*.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResult,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(240) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(210) as any as S.Schema<PutResourcePolicyResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type ReleasePhoneNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.
 *
 * If the origination phone number has deletion protection enabled or is associated with a pool, an error is returned.
 */
export const releasePhoneNumber: API.OperationMethod<
  ReleasePhoneNumberRequest,
  ReleasePhoneNumberResult,
  ReleasePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241) as any as S.Schema<ReleasePhoneNumberRequest>,
  output: __S(242) as any as S.Schema<ReleasePhoneNumberResult>,
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
  operationName: "ReleasePhoneNumber",
}));

export type ReleaseSenderIdError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Releases an existing sender ID in your account.
 */
export const releaseSenderId: API.OperationMethod<
  ReleaseSenderIdRequest,
  ReleaseSenderIdResult,
  ReleaseSenderIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243) as any as S.Schema<ReleaseSenderIdRequest>,
  output: __S(244) as any as S.Schema<ReleaseSenderIdResult>,
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
  operationName: "ReleaseSenderId",
}));

export type RequestPhoneNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Request an origination phone number for use in your account. For more information on phone number request see Request a phone number in the *End User Messaging SMS User Guide*.
 */
export const requestPhoneNumber: API.OperationMethod<
  RequestPhoneNumberRequest,
  RequestPhoneNumberResult,
  RequestPhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(245) as any as S.Schema<RequestPhoneNumberRequest>,
  output: __S(246) as any as S.Schema<RequestPhoneNumberResult>,
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
  operationName: "RequestPhoneNumber",
}));

export type RequestSenderIdError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Request a new sender ID that doesn't require registration.
 */
export const requestSenderId: API.OperationMethod<
  RequestSenderIdRequest,
  RequestSenderIdResult,
  RequestSenderIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(247) as any as S.Schema<RequestSenderIdRequest>,
  output: __S(248) as any as S.Schema<RequestSenderIdResult>,
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
  operationName: "RequestSenderId",
}));

export type SendDestinationNumberVerificationCodeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Before you can send test messages to a verified destination phone number you need to opt-in the verified destination phone number. Creates a new text message with a verification code and send it to a verified destination phone number. Once you have the verification code use VerifyDestinationNumber to opt-in the verified destination phone number to receive messages.
 */
export const sendDestinationNumberVerificationCode: API.OperationMethod<
  SendDestinationNumberVerificationCodeRequest,
  SendDestinationNumberVerificationCodeResult,
  SendDestinationNumberVerificationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(250) as any as S.Schema<SendDestinationNumberVerificationCodeRequest>,
  output: __S(251) as any as S.Schema<SendDestinationNumberVerificationCodeResult>,
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
  operationName: "SendDestinationNumberVerificationCode",
}));

export type SendMediaMessageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new multimedia message (MMS) and sends it to a recipient's phone number.
 */
export const sendMediaMessage: API.OperationMethod<
  SendMediaMessageRequest,
  SendMediaMessageResult,
  SendMediaMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(252) as any as S.Schema<SendMediaMessageRequest>,
  output: __S(253) as any as S.Schema<SendMediaMessageResult>,
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
  operationName: "SendMediaMessage",
}));

export type SendNotifyTextMessageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a templated text message through a notify configuration to a recipient's phone number.
 */
export const sendNotifyTextMessage: API.OperationMethod<
  SendNotifyTextMessageRequest,
  SendNotifyTextMessageResult,
  SendNotifyTextMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(254) as any as S.Schema<SendNotifyTextMessageRequest>,
  output: __S(255) as any as S.Schema<SendNotifyTextMessageResult>,
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
  operationName: "SendNotifyTextMessage",
}));

export type SendNotifyVoiceMessageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a templated voice message through a notify configuration to a recipient's phone number.
 */
export const sendNotifyVoiceMessage: API.OperationMethod<
  SendNotifyVoiceMessageRequest,
  SendNotifyVoiceMessageResult,
  SendNotifyVoiceMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256) as any as S.Schema<SendNotifyVoiceMessageRequest>,
  output: __S(255) as any as S.Schema<SendNotifyVoiceMessageResult>,
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
  operationName: "SendNotifyVoiceMessage",
}));

export type SendRcsMessageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new RCS message and sends it to a recipient's phone number. RCS messages support rich content including text, files, rich cards, and carousels with interactive suggested actions.
 */
export const sendRcsMessage: API.OperationMethod<
  SendRcsMessageRequest,
  SendRcsMessageResult,
  SendRcsMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(274) as any as S.Schema<SendRcsMessageRequest>,
  output: __S(253) as any as S.Schema<SendRcsMessageResult>,
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
  operationName: "SendRcsMessage",
}));

export type SendTextMessageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new text message and sends it to a recipient's phone number. SendTextMessage only sends an SMS message to one recipient each time it is invoked.
 *
 * SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information about MPS, see Message Parts per Second (MPS) limits in the *End User Messaging SMS User Guide*.
 */
export const sendTextMessage: API.OperationMethod<
  SendTextMessageRequest,
  SendTextMessageResult,
  SendTextMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(275) as any as S.Schema<SendTextMessageRequest>,
  output: __S(253) as any as S.Schema<SendTextMessageResult>,
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
  operationName: "SendTextMessage",
}));

export type SendVoiceMessageError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to send a request that sends a voice message. This operation uses Amazon Polly to convert a text script into a voice message.
 */
export const sendVoiceMessage: API.OperationMethod<
  SendVoiceMessageRequest,
  SendVoiceMessageResult,
  SendVoiceMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(276) as any as S.Schema<SendVoiceMessageRequest>,
  output: __S(253) as any as S.Schema<SendVoiceMessageResult>,
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
  operationName: "SendVoiceMessage",
}));

export type SetAccountDefaultProtectConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Set a protect configuration as your account default. You can only have one account default protect configuration at a time. The current account default protect configuration is replaced with the provided protect configuration.
 */
export const setAccountDefaultProtectConfiguration: API.OperationMethod<
  SetAccountDefaultProtectConfigurationRequest,
  SetAccountDefaultProtectConfigurationResult,
  SetAccountDefaultProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(277) as any as S.Schema<SetAccountDefaultProtectConfigurationRequest>,
  output: __S(40) as any as S.Schema<SetAccountDefaultProtectConfigurationResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetAccountDefaultProtectConfiguration",
}));

export type SetDefaultMessageFeedbackEnabledError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets a configuration set's default for message feedback.
 */
export const setDefaultMessageFeedbackEnabled: API.OperationMethod<
  SetDefaultMessageFeedbackEnabledRequest,
  SetDefaultMessageFeedbackEnabledResult,
  SetDefaultMessageFeedbackEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(278) as any as S.Schema<SetDefaultMessageFeedbackEnabledRequest>,
  output: __S(279) as any as S.Schema<SetDefaultMessageFeedbackEnabledResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetDefaultMessageFeedbackEnabled",
}));

export type SetDefaultMessageTypeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets the default message type on a configuration set.
 *
 * Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose **Transactional**. If you plan to send messages that contain marketing material or other promotional content, choose **Promotional**. This setting applies to your entire Amazon Web Services account.
 */
export const setDefaultMessageType: API.OperationMethod<
  SetDefaultMessageTypeRequest,
  SetDefaultMessageTypeResult,
  SetDefaultMessageTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280) as any as S.Schema<SetDefaultMessageTypeRequest>,
  output: __S(45) as any as S.Schema<SetDefaultMessageTypeResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetDefaultMessageType",
}));

export type SetDefaultSenderIdError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets default sender ID on a configuration set.
 *
 * When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.
 */
export const setDefaultSenderId: API.OperationMethod<
  SetDefaultSenderIdRequest,
  SetDefaultSenderIdResult,
  SetDefaultSenderIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(281) as any as S.Schema<SetDefaultSenderIdRequest>,
  output: __S(282) as any as S.Schema<SetDefaultSenderIdResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetDefaultSenderId",
}));

export type SetMediaMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets an account level monthly spend limit override for sending MMS messages. The requested spend limit must be less than or equal to the `MaxLimit`, which is set by Amazon Web Services.
 */
export const setMediaMessageSpendLimitOverride: API.OperationMethod<
  SetMediaMessageSpendLimitOverrideRequest,
  SetMediaMessageSpendLimitOverrideResult,
  SetMediaMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283) as any as S.Schema<SetMediaMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<SetMediaMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetMediaMessageSpendLimitOverride",
}));

export type SetNotifyMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets an account level monthly spend limit override for sending notify messages. The requested spend limit must be less than or equal to the `MaxLimit`, which is set by Amazon Web Services.
 */
export const setNotifyMessageSpendLimitOverride: API.OperationMethod<
  SetNotifyMessageSpendLimitOverrideRequest,
  SetNotifyMessageSpendLimitOverrideResult,
  SetNotifyMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(284) as any as S.Schema<SetNotifyMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<SetNotifyMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetNotifyMessageSpendLimitOverride",
}));

export type SetRcsMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets an account level monthly spend limit override for sending RCS messages. The requested spend limit must be less than or equal to the `MaxLimit`, which is set by Amazon Web Services.
 */
export const setRcsMessageSpendLimitOverride: API.OperationMethod<
  SetRcsMessageSpendLimitOverrideRequest,
  SetRcsMessageSpendLimitOverrideResult,
  SetRcsMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(285) as any as S.Schema<SetRcsMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<SetRcsMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetRcsMessageSpendLimitOverride",
}));

export type SetTextMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the `MaxLimit`, which is set by Amazon Web Services.
 */
export const setTextMessageSpendLimitOverride: API.OperationMethod<
  SetTextMessageSpendLimitOverrideRequest,
  SetTextMessageSpendLimitOverrideResult,
  SetTextMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(286) as any as S.Schema<SetTextMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<SetTextMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetTextMessageSpendLimitOverride",
}));

export type SetVoiceMessageSpendLimitOverrideError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the `MaxLimit`, which is set by Amazon Web Services.
 */
export const setVoiceMessageSpendLimitOverride: API.OperationMethod<
  SetVoiceMessageSpendLimitOverrideRequest,
  SetVoiceMessageSpendLimitOverrideResult,
  SetVoiceMessageSpendLimitOverrideError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(287) as any as S.Schema<SetVoiceMessageSpendLimitOverrideRequest>,
  output: __S(52) as any as S.Schema<SetVoiceMessageSpendLimitOverrideResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetVoiceMessageSpendLimitOverride",
}));

export type SubmitRegistrationVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Submit the specified registration for review and approval.
 */
export const submitRegistrationVersion: API.OperationMethod<
  SubmitRegistrationVersionRequest,
  SubmitRegistrationVersionResult,
  SubmitRegistrationVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(288) as any as S.Schema<SubmitRegistrationVersionRequest>,
  output: __S(289) as any as S.Schema<SubmitRegistrationVersionResult>,
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
  operationName: "SubmitRegistrationVersion",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites only the specified tags for the specified resource. When you specify an existing tag key, the value is overwritten with the new value. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see Tags in the *End User Messaging SMS User Guide*.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResult,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(290) as any as S.Schema<TagResourceRequest>,
  output: __S(291) as any as S.Schema<TagResourceResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
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
 * Removes the association of the specified tags from a resource. For more information on tags see Tags in the *End User Messaging SMS User Guide*.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResult,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(292) as any as S.Schema<UntagResourceRequest>,
  output: __S(291) as any as S.Schema<UntagResourceResult>,
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

export type UpdateEventDestinationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Firehose. You can also enable or disable the event destination.
 *
 * You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Firehose, and Amazon SNS.
 */
export const updateEventDestination: API.OperationMethod<
  UpdateEventDestinationRequest,
  UpdateEventDestinationResult,
  UpdateEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(293) as any as S.Schema<UpdateEventDestinationRequest>,
  output: __S(16) as any as S.Schema<UpdateEventDestinationResult>,
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
  operationName: "UpdateEventDestination",
}));

export type UpdateNotifyConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing notify configuration. You can update the default template, pool association, enabled channels, enabled countries, and deletion protection settings.
 */
export const updateNotifyConfiguration: API.OperationMethod<
  UpdateNotifyConfigurationRequest,
  UpdateNotifyConfigurationResult,
  UpdateNotifyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294) as any as S.Schema<UpdateNotifyConfigurationRequest>,
  output: __S(54) as any as S.Schema<UpdateNotifyConfigurationResult>,
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
  operationName: "UpdateNotifyConfiguration",
}));

export type UpdatePhoneNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.
 *
 * If the origination phone number is associated with a pool, an error is returned.
 */
export const updatePhoneNumber: API.OperationMethod<
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberResult,
  UpdatePhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(295) as any as S.Schema<UpdatePhoneNumberRequest>,
  output: __S(296) as any as S.Schema<UpdatePhoneNumberResult>,
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
  operationName: "UpdatePhoneNumber",
}));

export type UpdatePoolError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the `TwoWayChannelArn`, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.
 */
export const updatePool: API.OperationMethod<
  UpdatePoolRequest,
  UpdatePoolResult,
  UpdatePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(297) as any as S.Schema<UpdatePoolRequest>,
  output: __S(298) as any as S.Schema<UpdatePoolResult>,
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
  operationName: "UpdatePool",
}));

export type UpdateProtectConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the setting for an existing protect configuration.
 */
export const updateProtectConfiguration: API.OperationMethod<
  UpdateProtectConfigurationRequest,
  UpdateProtectConfigurationResult,
  UpdateProtectConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(299) as any as S.Schema<UpdateProtectConfigurationRequest>,
  output: __S(63) as any as S.Schema<UpdateProtectConfigurationResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProtectConfiguration",
}));

export type UpdateProtectConfigurationCountryRuleSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a country rule set to `ALLOW`, `BLOCK`, `MONITOR`, or `FILTER` messages to be sent to the specified destination counties. You can update one or multiple countries at a time. The updates are only applied to the specified NumberCapability type.
 */
export const updateProtectConfigurationCountryRuleSet: API.OperationMethod<
  UpdateProtectConfigurationCountryRuleSetRequest,
  UpdateProtectConfigurationCountryRuleSetResult,
  UpdateProtectConfigurationCountryRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(300) as any as S.Schema<UpdateProtectConfigurationCountryRuleSetRequest>,
  output: __S(208) as any as S.Schema<UpdateProtectConfigurationCountryRuleSetResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProtectConfigurationCountryRuleSet",
}));

export type UpdateRcsAgentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing RCS agent. You can update the opt-out list, deletion protection, two-way messaging settings, and self-managed opt-outs configuration.
 */
export const updateRcsAgent: API.OperationMethod<
  UpdateRcsAgentRequest,
  UpdateRcsAgentResult,
  UpdateRcsAgentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(301) as any as S.Schema<UpdateRcsAgentRequest>,
  output: __S(302) as any as S.Schema<UpdateRcsAgentResult>,
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
  operationName: "UpdateRcsAgent",
}));

export type UpdateSenderIdError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration of an existing sender ID.
 */
export const updateSenderId: API.OperationMethod<
  UpdateSenderIdRequest,
  UpdateSenderIdResult,
  UpdateSenderIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(303) as any as S.Schema<UpdateSenderIdRequest>,
  output: __S(304) as any as S.Schema<UpdateSenderIdResult>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSenderId",
}));

export type VerifyDestinationNumberError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Use the verification code that was received by the verified destination phone number to opt-in the verified destination phone number to receive more messages.
 */
export const verifyDestinationNumber: API.OperationMethod<
  VerifyDestinationNumberRequest,
  VerifyDestinationNumberResult,
  VerifyDestinationNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(305) as any as S.Schema<VerifyDestinationNumberRequest>,
  output: __S(306) as any as S.Schema<VerifyDestinationNumberResult>,
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
  operationName: "VerifyDestinationNumber",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          OriginationIdentity: S.String,
          IsoCountryCode: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AssociateOriginationIdentityRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.optional(S.String),
          PoolId: S.optional(S.String),
          OriginationIdentityArn: S.optional(S.String),
          OriginationIdentity: S.optional(S.String),
          IsoCountryCode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssociateOriginationIdentityResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ProtectConfigurationId: S.String, ConfigurationSetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateProtectConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.String,
          ConfigurationSetName: S.String,
          ProtectConfigurationArn: S.String,
          ProtectConfigurationId: S.String,
        }),
      ).annotate({
        identifier: "AssociateProtectConfigurationResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PhoneNumber: S.String, EnableCleansing: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CarrierLookupRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          E164PhoneNumber: S.String,
          DialingCountryCode: S.optional(S.String),
          IsoCountryCode: S.optional(S.String),
          Country: S.optional(S.String),
          MCC: S.optional(S.String),
          MNC: S.optional(S.String),
          Carrier: S.optional(S.String),
          PhoneNumberType: S.String,
          OriginalPhoneNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "CarrierLookupResult" });
    case 6:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateConfigurationSetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CreateConfigurationSetResult",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() => S.Struct({ IamRoleArn: S.String, LogGroupArn: S.String })).annotate({
        identifier: "CloudWatchLogsDestination",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ IamRoleArn: S.String, DeliveryStreamArn: S.String }),
      ).annotate({
        identifier: "KinesisFirehoseDestination",
      });
    case 5:
      return S.suspend(() => S.Struct({ TopicArn: S.String })).annotate({
        identifier: "SnsDestination",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          EventDestinationName: S.String,
          MatchingEventTypes: __S(10),
          CloudWatchLogsDestination: S.optional(__S(11)),
          KinesisFirehoseDestination: S.optional(__S(12)),
          SnsDestination: S.optional(__S(13)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEventDestinationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          EventDestinationName: S.String,
          Enabled: S.Boolean,
          MatchingEventTypes: __S(10),
          CloudWatchLogsDestination: S.optional(__S(11)),
          KinesisFirehoseDestination: S.optional(__S(12)),
          SnsDestination: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "EventDestination" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          EventDestination: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "CreateEventDestinationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DisplayName: S.String,
          UseCase: S.String,
          DefaultTemplateId: S.optional(S.String),
          PoolId: S.optional(S.String),
          EnabledCountries: S.optional(__S(10)),
          EnabledChannels: __S(10),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(7)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateNotifyConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurationArn: S.String,
          NotifyConfigurationId: S.String,
          DisplayName: S.String,
          UseCase: S.String,
          DefaultTemplateId: S.optional(S.String),
          PoolId: S.optional(S.String),
          EnabledCountries: S.optional(__S(10)),
          EnabledChannels: __S(10),
          Tier: S.String,
          TierUpgradeStatus: S.String,
          Status: S.String,
          RejectionReason: S.optional(S.String),
          DeletionProtectionEnabled: S.Boolean,
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateNotifyConfigurationResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OptOutListName: S.String,
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateOptOutListRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OptOutListArn: S.optional(S.String),
          OptOutListName: S.optional(S.String),
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CreateOptOutListResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OriginationIdentity: S.String,
          IsoCountryCode: S.optional(S.String),
          MessageType: S.String,
          DeletionProtectionEnabled: S.optional(S.Boolean),
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePoolRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.optional(S.String),
          PoolId: S.optional(S.String),
          Status: S.optional(S.String),
          MessageType: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          SharedRoutesEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CreatePoolResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          Tags: S.optional(__S(7)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateProtectConfigurationRequest",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationArn: S.String,
          ProtectConfigurationId: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          AccountDefault: S.Boolean,
          DeletionProtectionEnabled: S.Boolean,
          Tags: S.optional(__S(7)),
        }),
      ).annotate({
        identifier: "CreateProtectConfigurationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeletionProtectionEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRcsAgentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RcsAgentArn: S.String,
          RcsAgentId: S.String,
          Status: S.String,
          DeletionProtectionEnabled: S.Boolean,
          OptOutListName: S.optional(S.String),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SelfManagedOptOutsEnabled: S.Boolean,
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          TwoWayEnabled: S.Boolean,
          TwoWayMediaS3BucketName: S.optional(S.String),
          TwoWayMediaS3KeyPrefix: S.optional(S.String),
          TwoWayMediaS3Role: S.optional(S.String),
          TwoWayRcsEventsEnabled: S.optional(__S(10)),
          Tags: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "CreateRcsAgentResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegistrationType: S.String,
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRegistrationRequest",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          RegistrationType: S.String,
          RegistrationStatus: S.String,
          CurrentVersionNumber: S.Number,
          AdditionalAttributes: S.optional(__S(28)),
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CreateRegistrationResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({ RegistrationId: S.String, ResourceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateRegistrationAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          RegistrationType: S.String,
          ResourceArn: S.String,
          ResourceId: S.String,
          ResourceType: S.String,
          IsoCountryCode: S.optional(S.String),
          PhoneNumber: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateRegistrationAssociationResult",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AttachmentBody: S.optional(T.Blob),
          AttachmentUrl: S.optional(S.String),
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRegistrationAttachmentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RegistrationAttachmentArn: S.String,
          RegistrationAttachmentId: S.String,
          AttachmentStatus: S.String,
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateRegistrationAttachmentResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RegistrationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateRegistrationVersionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DraftTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SubmittedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AwsReviewingTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ReviewingTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RequiresAuthenticationTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          ApprovedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DiscardedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DeniedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          RevokedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ArchivedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "RegistrationVersionStatusHistory",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          VersionNumber: S.Number,
          RegistrationVersionStatus: S.String,
          RegistrationVersionStatusHistory: __S(35),
        }),
      ).annotate({
        identifier: "CreateRegistrationVersionResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DestinationPhoneNumber: S.String,
          RcsAgentId: S.optional(S.String),
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateVerifiedDestinationNumberRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumberArn: S.String,
          VerifiedDestinationNumberId: S.String,
          DestinationPhoneNumber: S.String,
          Status: S.String,
          RcsAgentId: S.optional(S.String),
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "CreateVerifiedDestinationNumberResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAccountDefaultProtectConfigurationRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DefaultProtectConfigurationArn: S.String,
          DefaultProtectConfigurationId: S.String,
        }),
      ).annotate({
        identifier: "DeleteAccountDefaultProtectConfigurationResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConfigurationSetRequest",
      });
    case 2:
      return S.Array(__S(15));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          EventDestinations: S.optional(__S(42)),
          DefaultMessageType: S.optional(S.String),
          DefaultSenderId: S.optional(S.String),
          DefaultMessageFeedbackEnabled: S.optional(S.Boolean),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DeleteConfigurationSetResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDefaultMessageTypeRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          MessageType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteDefaultMessageTypeResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteDefaultSenderIdRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          SenderId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteDefaultSenderIdResult",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, EventDestinationName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEventDestinationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ OriginationIdentity: S.String, Keyword: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteKeywordRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OriginationIdentityArn: S.optional(S.String),
          OriginationIdentity: S.optional(S.String),
          Keyword: S.optional(S.String),
          KeywordMessage: S.optional(S.String),
          KeywordAction: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeleteKeywordResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteMediaMessageSpendLimitOverrideRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ MonthlyLimit: S.optional(S.Number) })).annotate({
        identifier: "DeleteMediaMessageSpendLimitOverrideResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ NotifyConfigurationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteNotifyConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurationArn: S.String,
          NotifyConfigurationId: S.String,
          DisplayName: S.String,
          UseCase: S.String,
          DefaultTemplateId: S.optional(S.String),
          PoolId: S.optional(S.String),
          EnabledCountries: S.optional(__S(10)),
          EnabledChannels: __S(10),
          Tier: S.String,
          TierUpgradeStatus: S.String,
          Status: S.String,
          RejectionReason: S.optional(S.String),
          DeletionProtectionEnabled: S.Boolean,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DeleteNotifyConfigurationResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteNotifyMessageSpendLimitOverrideRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ OptOutListName: S.String, OptedOutNumber: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteOptedOutNumberRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OptOutListArn: S.optional(S.String),
          OptOutListName: S.optional(S.String),
          OptedOutNumber: S.optional(S.String),
          OptedOutTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndUserOptedOut: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "DeleteOptedOutNumberResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ OptOutListName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteOptOutListRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OptOutListArn: S.optional(S.String),
          OptOutListName: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DeleteOptOutListResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({ PoolId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePoolRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.optional(S.String),
          PoolId: S.optional(S.String),
          Status: S.optional(S.String),
          MessageType: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          SharedRoutesEnabled: S.optional(S.Boolean),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DeletePoolResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ProtectConfigurationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteProtectConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationArn: S.String,
          ProtectConfigurationId: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          AccountDefault: S.Boolean,
          DeletionProtectionEnabled: S.Boolean,
        }),
      ).annotate({
        identifier: "DeleteProtectConfigurationResult",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProtectConfigurationId: S.String, DestinationPhoneNumber: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteProtectConfigurationRuleSetNumberOverrideRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationArn: S.String,
          ProtectConfigurationId: S.String,
          DestinationPhoneNumber: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Action: S.String,
          IsoCountryCode: S.optional(S.String),
          ExpirationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DeleteProtectConfigurationRuleSetNumberOverrideResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RcsAgentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRcsAgentRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RcsAgentArn: S.String,
          RcsAgentId: S.String,
          Status: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          DeletionProtectionEnabled: S.Boolean,
          OptOutListName: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.Boolean,
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          TwoWayEnabled: S.Boolean,
          TwoWayRcsEventsEnabled: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "DeleteRcsAgentResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRcsMessageSpendLimitOverrideRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RegistrationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRegistrationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          RegistrationType: S.String,
          RegistrationStatus: S.String,
          CurrentVersionNumber: S.Number,
          ApprovedVersionNumber: S.optional(S.Number),
          LatestDeniedVersionNumber: S.optional(S.Number),
          AdditionalAttributes: S.optional(__S(28)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "DeleteRegistrationResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({ RegistrationAttachmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRegistrationAttachmentRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RegistrationAttachmentArn: S.String,
          RegistrationAttachmentId: S.String,
          AttachmentStatus: S.String,
          AttachmentUploadErrorReason: S.optional(S.String),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DeleteRegistrationAttachmentResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RegistrationId: S.String, FieldPath: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRegistrationFieldValueRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          VersionNumber: S.Number,
          FieldPath: S.String,
          SelectChoices: S.optional(__S(10)),
          TextValue: S.optional(S.String),
          RegistrationAttachmentId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteRegistrationFieldValueResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          Policy: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DeleteResourcePolicyResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteTextMessageSpendLimitOverrideRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ VerifiedDestinationNumberId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteVerifiedDestinationNumberRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumberArn: S.String,
          VerifiedDestinationNumberId: S.String,
          DestinationPhoneNumber: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "DeleteVerifiedDestinationNumberResult",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteVoiceMessageSpendLimitOverrideRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountAttributesRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "AccountAttribute",
      });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountAttributes: S.optional(__S(83)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeAccountAttributesResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountLimitsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Name: S.String, Used: S.Number, Max: S.Number })).annotate({
        identifier: "AccountLimit",
      });
    case 7:
      return S.Array(__S(86));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AccountLimits: S.optional(__S(87)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeAccountLimitsResult",
      });
    case 1:
      return S.suspend(() => S.Struct({ Name: S.String, Values: __S(10) })).annotate({
        identifier: "ConfigurationSetFilter",
      });
    case 2:
      return S.Array(__S(89));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetNames: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConfigurationSetsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.String,
          ConfigurationSetName: S.String,
          EventDestinations: __S(42),
          DefaultMessageType: S.optional(S.String),
          DefaultSenderId: S.optional(S.String),
          DefaultMessageFeedbackEnabled: S.optional(S.Boolean),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ProtectConfigurationId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfigurationSetInformation",
      });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSets: S.optional(__S(93)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeConfigurationSetsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OriginationIdentity: S.String,
          Keywords: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeKeywordsRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Keyword: S.String, KeywordMessage: S.String, KeywordAction: S.String }),
      ).annotate({ identifier: "KeywordInformation" });
    case 1:
      return S.Array(__S(96));
    case 2:
      return S.suspend(() =>
        S.Struct({
          OriginationIdentityArn: S.optional(S.String),
          OriginationIdentity: S.optional(S.String),
          Keywords: S.optional(__S(97)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeKeywordsResult" });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String, Values: __S(10) })).annotate({
        identifier: "NotifyConfigurationFilter",
      });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurationIds: S.optional(__S(10)),
          Filters: S.optional(__S(100)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeNotifyConfigurationsRequest",
      });
    case 6:
      return S.Array(__S(54));
    case 7:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurations: S.optional(__S(102)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeNotifyConfigurationsResult",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateIds: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeNotifyTemplatesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.String,
          Required: S.Boolean,
          Description: S.optional(S.String),
          MaxLength: S.optional(S.Number),
          MinValue: S.optional(S.Number),
          MaxValue: S.optional(S.Number),
          DefaultValue: S.optional(S.String),
          Pattern: S.optional(S.String),
          Sample: S.optional(S.String),
          Source: S.optional(S.String),
        }),
      ).annotate({ identifier: "TemplateVariableMetadata" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(105).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateId: S.String,
          Version: S.Number,
          TemplateType: S.String,
          Channels: __S(10),
          TierAccess: S.optional(__S(10)),
          Status: S.optional(S.String),
          SupportedCountries: S.optional(__S(10)),
          LanguageCode: S.optional(S.String),
          Content: S.optional(S.String),
          Variables: S.optional(__S(106)),
          SupportedVoiceIds: S.optional(__S(10)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "NotifyTemplateInformation",
      });
    case 4:
      return S.Array(__S(107));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NotifyTemplates: S.optional(__S(108)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeNotifyTemplatesResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          OptOutListName: S.String,
          OptedOutNumbers: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeOptedOutNumbersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          OptedOutNumber: S.String,
          OptedOutTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndUserOptedOut: S.Boolean,
        }),
      ).annotate({
        identifier: "OptedOutNumberInformation",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111));
    case 1:
      return S.suspend(() =>
        S.Struct({
          OptOutListArn: S.optional(S.String),
          OptOutListName: S.optional(S.String),
          OptedOutNumbers: S.optional(__S(112)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeOptedOutNumbersResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          OptOutListNames: S.optional(__S(10)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Owner: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeOptOutListsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          OptOutListArn: S.String,
          OptOutListName: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "OptOutListInformation" });
    case 4:
      return S.Array(__S(115));
    case 5:
      return S.suspend(() =>
        S.Struct({
          OptOutLists: S.optional(__S(116)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeOptOutListsResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberIds: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Owner: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribePhoneNumbersRequest",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RateLimits: S.optional(__S(119)), DailyMessageCaps: S.optional(__S(119)) }),
      ).annotate({ identifier: "MessagingLimits" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberArn: S.String,
          PhoneNumberId: S.optional(S.String),
          PhoneNumber: S.String,
          Status: S.String,
          IsoCountryCode: S.String,
          MessageType: S.String,
          NumberCapabilities: __S(10),
          NumberType: S.String,
          MonthlyLeasingPrice: S.String,
          TwoWayEnabled: S.Boolean,
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.Boolean,
          OptOutListName: S.String,
          InternationalSendingEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.Boolean,
          PoolId: S.optional(S.String),
          RegistrationId: S.optional(S.String),
          MessagingLimits: S.optional(__S(120)),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "PhoneNumberInformation" });
    case 2:
      return S.Array(__S(121));
    case 3:
      return S.suspend(() =>
        S.Struct({
          PhoneNumbers: S.optional(__S(122)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribePhoneNumbersResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PoolIds: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Owner: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribePoolsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.String,
          PoolId: S.String,
          Status: S.String,
          MessageType: S.String,
          TwoWayEnabled: S.Boolean,
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.Boolean,
          OptOutListName: S.String,
          SharedRoutesEnabled: S.Boolean,
          DeletionProtectionEnabled: S.Boolean,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "PoolInformation" });
    case 6:
      return S.Array(__S(125));
    case 7:
      return S.suspend(() =>
        S.Struct({ Pools: S.optional(__S(126)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribePoolsResult" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationIds: S.optional(__S(10)),
          Filters: S.optional(__S(100)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeProtectConfigurationsRequest",
      });
    case 1:
      return S.Array(__S(63));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurations: S.optional(__S(129)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeProtectConfigurationsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RcsAgentId: S.String,
          IsoCountryCodes: S.optional(__S(10)),
          Filters: S.optional(__S(100)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRcsAgentCountryLaunchStatusRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ CarrierName: S.String, Status: S.String })).annotate({
        identifier: "CarrierStatusInformation",
      });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() =>
        S.Struct({
          IsoCountryCode: S.String,
          Status: S.String,
          RcsPlatformId: S.optional(S.String),
          RegistrationId: S.String,
          CarrierStatus: __S(133),
        }),
      ).annotate({
        identifier: "CountryLaunchStatusInformation",
      });
    case 7:
      return S.Array(__S(134));
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RcsAgentId: S.String,
          RcsAgentArn: S.String,
          CountryLaunchStatus: S.optional(__S(135)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRcsAgentCountryLaunchStatusResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RcsAgentIds: S.optional(__S(10)),
          Owner: S.optional(S.String),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeRcsAgentsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.String,
          TestingAgentId: S.optional(S.String),
          RegistrationId: S.String,
        }),
      ).annotate({ identifier: "TestingAgentInformation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RcsAgentArn: S.String,
          RcsAgentId: S.String,
          Status: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          DeletionProtectionEnabled: S.Boolean,
          OptOutListName: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.Boolean,
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          TwoWayEnabled: S.Boolean,
          PoolId: S.optional(S.String),
          TwoWayMediaS3BucketName: S.optional(S.String),
          TwoWayMediaS3KeyPrefix: S.optional(S.String),
          TwoWayMediaS3Role: S.optional(S.String),
          TwoWayRcsEventsEnabled: S.optional(__S(10)),
          TestingAgent: S.optional(__S(138)),
          MessagingLimits: S.optional(__S(120)),
        }),
      ).annotate({ identifier: "RcsAgentInformation" });
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.suspend(() =>
        S.Struct({
          RcsAgents: S.optional(__S(140)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeRcsAgentsResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RegistrationAttachmentIds: S.optional(__S(10)),
          Filters: S.optional(__S(100)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationAttachmentsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RegistrationAttachmentArn: S.String,
          RegistrationAttachmentId: S.String,
          AttachmentStatus: S.String,
          AttachmentUploadErrorReason: S.optional(S.String),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          AttachmentUrl: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationAttachmentsInformation",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143));
    case 1:
      return S.suspend(() =>
        S.Struct({
          RegistrationAttachments: __S(144),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRegistrationAttachmentsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegistrationType: S.String,
          SectionPath: S.optional(S.String),
          FieldPaths: S.optional(__S(10)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationFieldDefinitionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MinChoices: S.Number, MaxChoices: S.Number, Options: __S(10) }),
      ).annotate({ identifier: "SelectValidation" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MinLength: S.Number, MaxLength: S.Number, Pattern: S.String }),
      ).annotate({ identifier: "TextValidation" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Option: S.String,
          Title: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "SelectOptionDescription" });
    case 6:
      return S.Array(__S(149));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Title: S.String,
          ShortDescription: S.String,
          LongDescription: S.optional(S.String),
          DocumentationTitle: S.optional(S.String),
          DocumentationLink: S.optional(S.String),
          SelectOptionDescriptions: S.optional(__S(150)),
          TextValidationDescription: S.optional(S.String),
          ExampleTextValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationFieldDisplayHints",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DependsOnFieldPath: S.String,
          Operator: S.String,
          Values: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "FieldCondition" });
    case 1:
      return S.Array(__S(152));
    case 2:
      return S.suspend(() =>
        S.Struct({
          MinLength: S.optional(S.Number),
          MaxLength: S.optional(S.Number),
          Pattern: S.optional(S.String),
          AllowedValues: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "ConditionalValidation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Conditions: __S(153),
          RuleBehavior: S.String,
          ConditionalValidation: S.optional(__S(154)),
        }),
      ).annotate({ identifier: "ConditionalRule" });
    case 4:
      return S.Array(__S(155));
    case 5:
      return S.suspend(() => S.Struct({ Rules: __S(156), DefaultBehavior: S.String })).annotate({
        identifier: "ConditionalBehavior",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SectionPath: S.String,
          FieldPath: S.String,
          FieldType: S.String,
          FieldRequirement: S.String,
          SelectValidation: S.optional(__S(147)),
          TextValidation: S.optional(__S(148)),
          DisplayHints: __S(151),
          ConditionalBehavior: S.optional(__S(157)),
        }),
      ).annotate({
        identifier: "RegistrationFieldDefinition",
      });
    case 7:
      return S.Array(__S(158));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RegistrationType: S.String,
          RegistrationFieldDefinitions: __S(159),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRegistrationFieldDefinitionsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RegistrationId: S.String,
          VersionNumber: S.optional(S.Number),
          SectionPath: S.optional(S.String),
          FieldPaths: S.optional(__S(10)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationFieldValuesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FieldPath: S.String,
          SelectChoices: S.optional(__S(10)),
          TextValue: S.optional(S.String),
          RegistrationAttachmentId: S.optional(S.String),
          DeniedReason: S.optional(S.String),
          Feedback: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationFieldValueInformation",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          VersionNumber: S.Number,
          RegistrationFieldValues: __S(163),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRegistrationFieldValuesResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RegistrationIds: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationsRequest",
      });
    case 6:
      return S.Array(__S(70));
    case 7:
      return S.suspend(() =>
        S.Struct({ Registrations: __S(166), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeRegistrationsResult",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RegistrationType: S.String,
          SectionPaths: S.optional(__S(10)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationSectionDefinitionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Title: S.String,
          ShortDescription: S.String,
          LongDescription: S.optional(S.String),
          DocumentationTitle: S.optional(S.String),
          DocumentationLink: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationSectionDisplayHints",
      });
    case 2:
      return S.suspend(() => S.Struct({ SectionPath: S.String, DisplayHints: __S(169) })).annotate({
        identifier: "RegistrationSectionDefinition",
      });
    case 3:
      return S.Array(__S(170));
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegistrationType: S.String,
          RegistrationSectionDefinitions: __S(171),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRegistrationSectionDefinitionsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RegistrationTypes: S.optional(__S(10)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationTypeDefinitionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.String,
          IsoCountryCode: S.optional(S.String),
          AssociationBehavior: S.String,
          DisassociationBehavior: S.String,
        }),
      ).annotate({ identifier: "SupportedAssociation" });
    case 7:
      return S.Array(__S(174));
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Title: S.String,
          ShortDescription: S.optional(S.String),
          LongDescription: S.optional(S.String),
          DocumentationTitle: S.optional(S.String),
          DocumentationLink: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationTypeDisplayHints",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RegistrationType: S.String,
          SupportedAssociations: S.optional(__S(175)),
          DisplayHints: __S(176),
        }),
      ).annotate({
        identifier: "RegistrationTypeDefinition",
      });
    case 2:
      return S.Array(__S(177));
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegistrationTypeDefinitions: __S(178),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRegistrationTypeDefinitionsResult",
      });
    case 4:
      return S.Array(S.Number);
    case 5:
      return S.suspend(() =>
        S.Struct({
          RegistrationId: S.String,
          VersionNumbers: S.optional(__S(180)),
          Filters: S.optional(__S(100)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeRegistrationVersionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Reason: S.String,
          ShortDescription: S.String,
          LongDescription: S.optional(S.String),
          DocumentationTitle: S.optional(S.String),
          DocumentationLink: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationDeniedReasonInformation",
      });
    case 7:
      return S.Array(__S(182));
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VersionNumber: S.Number,
          RegistrationVersionStatus: S.String,
          RegistrationVersionStatusHistory: __S(35),
          DeniedReasons: S.optional(__S(183)),
          Feedback: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationVersionInformation",
      });
    case 1:
      return S.Array(__S(184));
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          RegistrationVersions: __S(185),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeRegistrationVersionsResult",
      });
    case 3:
      return S.suspend(() => S.Struct({ SenderId: S.String, IsoCountryCode: S.String })).annotate({
        identifier: "SenderIdAndCountry",
      });
    case 4:
      return S.Array(__S(187));
    case 5:
      return S.suspend(() =>
        S.Struct({
          SenderIds: S.optional(__S(188)),
          Filters: S.optional(__S(90)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Owner: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeSenderIdsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SenderIdArn: S.String,
          SenderId: S.String,
          IsoCountryCode: S.String,
          MessageTypes: __S(10),
          MonthlyLeasingPrice: S.String,
          DeletionProtectionEnabled: S.Boolean,
          Registered: S.Boolean,
          RegistrationId: S.optional(S.String),
          MessagingLimits: S.optional(__S(120)),
        }),
      ).annotate({ identifier: "SenderIdInformation" });
    case 7:
      return S.Array(__S(190));
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SenderIds: S.optional(__S(191)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "DescribeSenderIdsResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSpendLimitsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          EnforcedLimit: S.Number,
          MaxLimit: S.Number,
          Overridden: S.Boolean,
        }),
      ).annotate({ identifier: "SpendLimit" });
    case 3:
      return S.Array(__S(194));
    case 4:
      return S.suspend(() =>
        S.Struct({ SpendLimits: S.optional(__S(195)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeSpendLimitsResult",
      });
    case 5:
      return S.Array(__S(99));
    case 6:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumberIds: S.optional(__S(10)),
          DestinationPhoneNumbers: S.optional(__S(10)),
          Filters: S.optional(__S(197)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeVerifiedDestinationNumbersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumberArn: S.String,
          VerifiedDestinationNumberId: S.String,
          DestinationPhoneNumber: S.String,
          Status: S.String,
          RcsAgentId: S.optional(S.String),
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "VerifiedDestinationNumberInformation",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(199));
    case 1:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumbers: __S(200),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeVerifiedDestinationNumbersResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          OriginationIdentity: S.String,
          IsoCountryCode: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DisassociateOriginationIdentityRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ProtectConfigurationId: S.String, ConfigurationSetName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateProtectConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RegistrationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DiscardRegistrationVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ProtectConfigurationId: S.String, NumberCapability: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetProtectConfigurationCountryRuleSetRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ ProtectStatus: S.String })).annotate({
        identifier: "ProtectConfigurationCountryRuleSetInformation",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(206).pipe(S.optional));
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationArn: S.String,
          ProtectConfigurationId: S.String,
          NumberCapability: S.String,
          CountryRuleSet: __S(207),
        }),
      ).annotate({
        identifier: "GetProtectConfigurationCountryRuleSetResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          Policy: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetResourcePolicyResult" });
    case 3:
      return S.suspend(() => S.Struct({ PreferenceType: __S(10), Filter: __S(10) })).annotate({
        identifier: "NumberPreferenceItem",
      });
    case 4:
      return S.Array(__S(211));
    case 5:
      return S.suspend(() =>
        S.Struct({
          IsoCountryCode: S.String,
          NumberCapabilities: __S(10),
          NumberType: S.String,
          RegistrationId: S.optional(S.String),
          NumberPreference: S.optional(__S(212)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAvailablePhoneNumbersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AvailablePhoneNumbers: __S(10),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAvailablePhoneNumbersResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Channels: S.optional(__S(10)),
          UseCases: S.optional(__S(10)),
          Tier: S.optional(S.String),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListNotifyCountriesRequest",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IsoCountryCode: S.String,
          CountryName: S.String,
          SupportedChannels: __S(10),
          SupportedUseCases: __S(10),
          SupportedTiers: __S(10),
          CustomerOwnedIdentityRequired: S.Boolean,
        }),
      ).annotate({ identifier: "NotifyCountryInformation" });
    case 1:
      return S.Array(__S(216));
    case 2:
      return S.suspend(() =>
        S.Struct({
          NotifyCountries: S.optional(__S(217)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNotifyCountriesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          Filters: S.optional(__S(197)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPoolOriginationIdentitiesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OriginationIdentityArn: S.String,
          OriginationIdentity: S.String,
          IsoCountryCode: S.String,
          NumberCapabilities: __S(10),
          PhoneNumber: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OriginationIdentityMetadata",
      });
    case 5:
      return S.Array(__S(220));
    case 6:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.optional(S.String),
          PoolId: S.optional(S.String),
          OriginationIdentities: S.optional(__S(221)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPoolOriginationIdentitiesResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationId: S.String,
          Filters: S.optional(__S(197)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListProtectConfigurationRuleSetNumberOverridesRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DestinationPhoneNumber: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Action: S.String,
          IsoCountryCode: S.optional(S.String),
          ExpirationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ProtectConfigurationRuleSetNumberOverride",
      });
    case 1:
      return S.Array(__S(224));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationArn: S.String,
          ProtectConfigurationId: S.String,
          RuleSetNumberOverrides: S.optional(__S(225)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProtectConfigurationRuleSetNumberOverridesResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegistrationId: S.String,
          Filters: S.optional(__S(197)),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRegistrationAssociationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          ResourceId: S.String,
          ResourceType: S.String,
          IsoCountryCode: S.optional(S.String),
          PhoneNumber: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RegistrationAssociationMetadata",
      });
    case 5:
      return S.Array(__S(228));
    case 6:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          RegistrationType: S.String,
          RegistrationAssociations: __S(229),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRegistrationAssociationsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(__S(7)) }),
      ).annotate({
        identifier: "ListTagsForResourceResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OriginationIdentity: S.String,
          Keyword: S.String,
          KeywordMessage: S.String,
          KeywordAction: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutKeywordRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ MessageId: S.String, MessageFeedbackStatus: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutMessageFeedbackRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MessageId: S.String, MessageFeedbackStatus: S.String }),
      ).annotate({ identifier: "PutMessageFeedbackResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({ OptOutListName: S.String, OptedOutNumber: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutOptedOutNumberRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OptOutListArn: S.optional(S.String),
          OptOutListName: S.optional(S.String),
          OptedOutNumber: S.optional(S.String),
          OptedOutTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndUserOptedOut: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PutOptedOutNumberResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ProtectConfigurationId: S.String,
          DestinationPhoneNumber: S.String,
          Action: S.String,
          ExpirationTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutProtectConfigurationRuleSetNumberOverrideRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RegistrationId: S.String,
          FieldPath: S.String,
          SelectChoices: S.optional(__S(10)),
          TextValue: S.optional(S.String),
          RegistrationAttachmentId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutRegistrationFieldValueRequest",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Policy: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ PhoneNumberId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ReleasePhoneNumberRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberArn: S.optional(S.String),
          PhoneNumberId: S.optional(S.String),
          PhoneNumber: S.optional(S.String),
          Status: S.optional(S.String),
          IsoCountryCode: S.optional(S.String),
          MessageType: S.optional(S.String),
          NumberCapabilities: S.optional(__S(10)),
          NumberType: S.optional(S.String),
          MonthlyLeasingPrice: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          RegistrationId: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ReleasePhoneNumberResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ SenderId: S.String, IsoCountryCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ReleaseSenderIdRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SenderIdArn: S.String,
          SenderId: S.String,
          IsoCountryCode: S.String,
          MessageTypes: __S(10),
          MonthlyLeasingPrice: S.String,
          Registered: S.Boolean,
          RegistrationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReleaseSenderIdResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IsoCountryCode: S.String,
          MessageType: S.String,
          NumberCapabilities: __S(10),
          NumberType: S.String,
          OptOutListName: S.optional(S.String),
          PoolId: S.optional(S.String),
          RegistrationId: S.optional(S.String),
          NumberPreference: S.optional(__S(212)),
          InternationalSendingEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RequestPhoneNumberRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberArn: S.optional(S.String),
          PhoneNumberId: S.optional(S.String),
          PhoneNumber: S.optional(S.String),
          Status: S.optional(S.String),
          IsoCountryCode: S.optional(S.String),
          MessageType: S.optional(S.String),
          NumberCapabilities: S.optional(__S(10)),
          NumberType: S.optional(S.String),
          MonthlyLeasingPrice: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          InternationalSendingEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          PoolId: S.optional(S.String),
          RegistrationId: S.optional(S.String),
          Tags: S.optional(__S(7)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "RequestPhoneNumberResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SenderId: S.String,
          IsoCountryCode: S.String,
          MessageTypes: S.optional(__S(10)),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          Tags: S.optional(__S(7)),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "RequestSenderIdRequest" });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SenderIdArn: S.String,
          SenderId: S.String,
          IsoCountryCode: S.String,
          MessageTypes: __S(10),
          MonthlyLeasingPrice: S.String,
          DeletionProtectionEnabled: S.Boolean,
          Registered: S.Boolean,
          Tags: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "RequestSenderIdResult" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumberId: S.String,
          VerificationChannel: S.String,
          LanguageCode: S.optional(S.String),
          OriginationIdentity: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          Context: S.optional(__S(28)),
          DestinationCountryParameters: S.optional(__S(249)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendDestinationNumberVerificationCodeRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ MessageId: S.String })).annotate({
        identifier: "SendDestinationNumberVerificationCodeResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DestinationPhoneNumber: S.String,
          OriginationIdentity: S.String,
          MessageBody: S.optional(S.String),
          MediaUrls: S.optional(__S(10)),
          ConfigurationSetName: S.optional(S.String),
          MaxPrice: S.optional(S.String),
          TimeToLive: S.optional(S.Number),
          Context: S.optional(__S(28)),
          DryRun: S.optional(S.Boolean),
          ProtectConfigurationId: S.optional(S.String),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendMediaMessageRequest" });
    case 5:
      return S.suspend(() => S.Struct({ MessageId: S.optional(S.String) })).annotate({
        identifier: "SendMediaMessageResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurationId: S.String,
          DestinationPhoneNumber: S.String,
          TemplateId: S.optional(S.String),
          TemplateVariables: __S(249),
          TimeToLive: S.optional(S.Number),
          Context: S.optional(__S(28)),
          ConfigurationSetName: S.optional(S.String),
          DryRun: S.optional(S.Boolean),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendNotifyTextMessageRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MessageId: S.optional(S.String),
          TemplateId: S.optional(S.String),
          ResolvedMessageBody: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SendNotifyTextMessageResult",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurationId: S.String,
          DestinationPhoneNumber: S.String,
          TemplateId: S.optional(S.String),
          TemplateVariables: __S(249),
          VoiceId: S.optional(S.String),
          TimeToLive: S.optional(S.Number),
          Context: S.optional(__S(28)),
          ConfigurationSetName: S.optional(S.String),
          DryRun: S.optional(S.Boolean),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendNotifyVoiceMessageRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Body: S.String })).annotate({
        identifier: "RcsTextMessage",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FileUrl: S.String, ThumbnailUrl: S.optional(S.String) }),
      ).annotate({ identifier: "RcsFileMessage" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FileUrl: S.String,
          ThumbnailUrl: S.optional(S.String),
          Height: S.optional(S.String),
        }),
      ).annotate({ identifier: "RcsCardMedia" });
    case 4:
      return S.suspend(() => S.Struct({ Text: S.String, PostbackData: S.String })).annotate({
        identifier: "RcsReplyAction",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Text: S.String,
          PostbackData: S.String,
          Url: S.String,
          Application: S.optional(S.String),
          WebviewViewMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "RcsOpenUrlAction" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Text: S.String, PostbackData: S.String, PhoneNumber: S.String }),
      ).annotate({ identifier: "RcsDialPhoneAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Text: S.String,
          PostbackData: S.String,
          Latitude: S.Number,
          Longitude: S.Number,
          Label: S.optional(S.String),
        }),
      ).annotate({ identifier: "RcsShowLocationAction" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Text: S.String,
          PostbackData: S.String,
          Title: S.String,
          StartTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          EndTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RcsCreateCalendarEventAction",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Reply: __S(260) }),
        /*@__PURE__*/ S.Struct({ OpenUrl: __S(261) }),
        /*@__PURE__*/ S.Struct({ DialPhone: __S(262) }),
        /*@__PURE__*/ S.Struct({ ShowLocation: __S(263) }),
        /*@__PURE__*/ S.Struct({ RequestLocation: __S(260) }),
        /*@__PURE__*/ S.Struct({ CreateCalendarEvent: __S(264) }),
      ]);
    case 2:
      return S.Array(__S(265));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          Media: S.optional(__S(259)),
          Suggestions: S.optional(__S(266)),
        }),
      ).annotate({ identifier: "RcsCardContent" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          CardOrientation: S.String,
          ThumbnailImageAlignment: S.optional(S.String),
          CardContent: __S(267),
        }),
      ).annotate({ identifier: "RcsStandaloneCard" });
    case 5:
      return S.Array(__S(267));
    case 6:
      return S.suspend(() => S.Struct({ CardWidth: S.String, CardContents: __S(269) })).annotate({
        identifier: "RcsCarousel",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ TextMessage: __S(257) }),
        /*@__PURE__*/ S.Struct({ FileMessage: __S(258) }),
        /*@__PURE__*/ S.Struct({ RichCard: __S(268) }),
        /*@__PURE__*/ S.Struct({ Carousel: __S(270) }),
      ]);
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Content: __S(271), Suggestions: S.optional(__S(266)) }),
      ).annotate({ identifier: "RcsMessageContent" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Channel: S.String,
          MessageBody: S.optional(S.String),
          MediaUrls: S.optional(__S(10)),
          OriginationIdentity: S.optional(S.String),
        }),
      ).annotate({ identifier: "RcsFallbackConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DestinationPhoneNumber: S.String,
          OriginationIdentity: S.String,
          RcsMessageContent: S.optional(__S(272)),
          TimeToLive: S.optional(S.Number),
          MessageTrafficType: S.optional(S.String),
          FallbackConfiguration: S.optional(__S(273)),
          ProtectConfigurationId: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          MaxPrice: S.optional(S.String),
          DryRun: S.optional(S.Boolean),
          Context: S.optional(__S(28)),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendRcsMessageRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationPhoneNumber: S.String,
          OriginationIdentity: S.optional(S.String),
          MessageBody: S.optional(S.String),
          MessageType: S.optional(S.String),
          Keyword: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          MaxPrice: S.optional(S.String),
          TimeToLive: S.optional(S.Number),
          Context: S.optional(__S(28)),
          DestinationCountryParameters: S.optional(__S(249)),
          DryRun: S.optional(S.Boolean),
          ProtectConfigurationId: S.optional(S.String),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendTextMessageRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DestinationPhoneNumber: S.String,
          OriginationIdentity: S.String,
          MessageBody: S.optional(S.String),
          MessageBodyTextType: S.optional(S.String),
          VoiceId: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          MaxPricePerMinute: S.optional(S.String),
          TimeToLive: S.optional(S.Number),
          Context: S.optional(__S(28)),
          DryRun: S.optional(S.Boolean),
          ProtectConfigurationId: S.optional(S.String),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendVoiceMessageRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ProtectConfigurationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetAccountDefaultProtectConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, MessageFeedbackEnabled: S.Boolean }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetDefaultMessageFeedbackEnabledRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          MessageFeedbackEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SetDefaultMessageFeedbackEnabledResult",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, MessageType: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetDefaultMessageTypeRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, SenderId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetDefaultSenderIdRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          SenderId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SetDefaultSenderIdResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({ MonthlyLimit: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetMediaMessageSpendLimitOverrideRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ MonthlyLimit: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetNotifyMessageSpendLimitOverrideRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MonthlyLimit: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetRcsMessageSpendLimitOverrideRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ MonthlyLimit: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetTextMessageSpendLimitOverrideRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MonthlyLimit: S.Number }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetVoiceMessageSpendLimitOverrideRequest",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RegistrationId: S.String, AwsReview: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SubmitRegistrationVersionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RegistrationArn: S.String,
          RegistrationId: S.String,
          VersionNumber: S.Number,
          RegistrationVersionStatus: S.String,
          RegistrationVersionStatusHistory: __S(35),
          AwsReview: S.Boolean,
        }),
      ).annotate({
        identifier: "SubmitRegistrationVersionResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(7) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(10) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          EventDestinationName: S.String,
          Enabled: S.optional(S.Boolean),
          MatchingEventTypes: S.optional(__S(10)),
          CloudWatchLogsDestination: S.optional(__S(11)),
          KinesisFirehoseDestination: S.optional(__S(12)),
          SnsDestination: S.optional(__S(13)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateEventDestinationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NotifyConfigurationId: S.String,
          DefaultTemplateId: S.optional(S.String),
          PoolId: S.optional(S.String),
          EnabledCountries: S.optional(__S(10)),
          EnabledChannels: S.optional(__S(10)),
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateNotifyConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberId: S.String,
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          InternationalSendingEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdatePhoneNumberRequest" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PhoneNumberArn: S.optional(S.String),
          PhoneNumberId: S.optional(S.String),
          PhoneNumber: S.optional(S.String),
          Status: S.optional(S.String),
          IsoCountryCode: S.optional(S.String),
          MessageType: S.optional(S.String),
          NumberCapabilities: S.optional(__S(10)),
          NumberType: S.optional(S.String),
          MonthlyLeasingPrice: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          InternationalSendingEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          RegistrationId: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdatePhoneNumberResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PoolId: S.String,
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          SharedRoutesEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdatePoolRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PoolArn: S.optional(S.String),
          PoolId: S.optional(S.String),
          Status: S.optional(S.String),
          MessageType: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          SharedRoutesEnabled: S.optional(S.Boolean),
          DeletionProtectionEnabled: S.optional(S.Boolean),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "UpdatePoolResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationId: S.String,
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProtectConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProtectConfigurationId: S.String,
          NumberCapability: S.String,
          CountryRuleSetUpdates: __S(207),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateProtectConfigurationCountryRuleSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RcsAgentId: S.String,
          DeletionProtectionEnabled: S.optional(S.Boolean),
          OptOutListName: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.optional(S.Boolean),
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          TwoWayEnabled: S.optional(S.Boolean),
          TwoWayMediaS3BucketName: S.optional(S.String),
          TwoWayMediaS3KeyPrefix: S.optional(S.String),
          TwoWayMediaS3Role: S.optional(S.String),
          TwoWayRcsEventsEnabled: S.optional(__S(10)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRcsAgentRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RcsAgentArn: S.String,
          RcsAgentId: S.String,
          Status: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          DeletionProtectionEnabled: S.Boolean,
          OptOutListName: S.optional(S.String),
          SelfManagedOptOutsEnabled: S.Boolean,
          TwoWayChannelArn: S.optional(S.String),
          TwoWayChannelRole: S.optional(S.String),
          TwoWayEnabled: S.Boolean,
          TwoWayMediaS3BucketName: S.optional(S.String),
          TwoWayMediaS3KeyPrefix: S.optional(S.String),
          TwoWayMediaS3Role: S.optional(S.String),
          TwoWayRcsEventsEnabled: S.optional(__S(10)),
        }),
      ).annotate({ identifier: "UpdateRcsAgentResult" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SenderId: S.String,
          IsoCountryCode: S.String,
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateSenderIdRequest" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SenderIdArn: S.String,
          SenderId: S.String,
          IsoCountryCode: S.String,
          MessageTypes: __S(10),
          MonthlyLeasingPrice: S.String,
          DeletionProtectionEnabled: S.Boolean,
          Registered: S.Boolean,
          RegistrationId: S.optional(S.String),
        }),
      ).annotate({ identifier: "UpdateSenderIdResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({ VerifiedDestinationNumberId: S.String, VerificationCode: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "VerifyDestinationNumberRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VerifiedDestinationNumberArn: S.String,
          VerifiedDestinationNumberId: S.String,
          DestinationPhoneNumber: S.String,
          Status: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "VerifyDestinationNumberResult",
      });
    case 3:
      return S.suspend(() => S.Struct({ Name: S.String, Message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 4:
      return S.Array(__S(307));
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
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
    case 28:
      return __c28(i & 7);
    case 29:
      return __c29(i & 7);
    case 30:
      return __c30(i & 7);
    case 31:
      return __c31(i & 7);
    case 32:
      return __c32(i & 7);
    case 33:
      return __c33(i & 7);
    case 34:
      return __c34(i & 7);
    case 35:
      return __c35(i & 7);
    case 36:
      return __c36(i & 7);
    case 37:
      return __c37(i & 7);
    case 38:
      return __c38(i & 7);
  }
}
