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
  sdkId: "Chime SDK Messaging",
  serviceShapeName: "ChimeMessagingService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "chime" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-05-15");
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
              `https://messaging-chime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://messaging-chime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://messaging-chime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://messaging-chime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ServiceFailureException
  extends /*@__PURE__*/ S.TaggedError<ServiceFailureException>()(
    "ServiceFailureException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottledClientException
  extends /*@__PURE__*/ S.TaggedError<ThrottledClientException>()(
    "ThrottledClientException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedClientException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedClientException>()(
    "UnauthorizedClientException",
    {
      Code: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ErrorCode).annotate({ identifier: "ErrorCode" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type ChimeArn = string;
export interface AssociateChannelFlowRequest {
  ChannelArn: string;
  ChannelFlowArn: string;
  ChimeBearer: string;
}
const AssociateChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AssociateChannelFlowRequest>;
export interface AssociateChannelFlowResponse {}
const AssociateChannelFlowResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AssociateChannelFlowResponse>;
export type ChannelMembershipType = "DEFAULT" | "HIDDEN" | (string & {});
const ChannelMembershipType = S.String;

export type MemberArns = string[];
const MemberArns = /*@__PURE__*/ __L.at(__c0, 2);
export type SubChannelId = string;
export interface BatchCreateChannelMembershipRequest {
  ChannelArn: string;
  Type?: ChannelMembershipType;
  MemberArns: string[];
  ChimeBearer: string;
  SubChannelId?: string;
}
const BatchCreateChannelMembershipRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<BatchCreateChannelMembershipRequest>;
export type ResourceName = string | redacted.Redacted<string>;
export interface Identity {
  Arn?: string;
  Name?: string | redacted.Redacted<string>;
}
const Identity = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Identity>;
export type Members = Identity[];
const Members = /*@__PURE__*/ __L.at(__c0, 5);
export interface BatchChannelMemberships {
  InvitedBy?: Identity;
  Type?: ChannelMembershipType;
  Members?: Identity[];
  ChannelArn?: string;
  SubChannelId?: string;
}
const BatchChannelMemberships = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<BatchChannelMemberships>;
export type ErrorCode =
  | "BadRequest"
  | "Conflict"
  | "Forbidden"
  | "NotFound"
  | "PreconditionFailed"
  | "ResourceLimitExceeded"
  | "ServiceFailure"
  | "AccessDenied"
  | "ServiceUnavailable"
  | "Throttled"
  | "Throttling"
  | "Unauthorized"
  | "Unprocessable"
  | "VoiceConnectorGroupAssociationsExist"
  | "PhoneNumberAssociationsExist"
  | (string & {});
const ErrorCode = S.String;

export interface BatchCreateChannelMembershipError_ {
  MemberArn?: string;
  ErrorCode?: ErrorCode;
  ErrorMessage?: string;
}
const BatchCreateChannelMembershipError_ = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchCreateChannelMembershipError_>;
export type BatchCreateChannelMembershipErrors = BatchCreateChannelMembershipError_[];
const BatchCreateChannelMembershipErrors = /*@__PURE__*/ __L.at(__c1, 0);
export interface BatchCreateChannelMembershipResponse {
  BatchChannelMemberships?: BatchChannelMemberships;
  Errors?: BatchCreateChannelMembershipError_[];
}
const BatchCreateChannelMembershipResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchCreateChannelMembershipResponse>;
export type CallbackIdType = string;
export type NonNullableBoolean = boolean;
export type MessageId = string;
export type NonEmptyContent = string | redacted.Redacted<string>;
export type Metadata = string | redacted.Redacted<string>;
export type PushNotificationTitle = string | redacted.Redacted<string>;
export type PushNotificationBody = string | redacted.Redacted<string>;
export type PushNotificationType = "DEFAULT" | "VOIP" | (string & {});
const PushNotificationType = S.String;

export interface PushNotificationConfiguration {
  Title?: string | redacted.Redacted<string>;
  Body?: string | redacted.Redacted<string>;
  Type?: PushNotificationType;
}
const PushNotificationConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<PushNotificationConfiguration>;
export type MessageAttributeName = string | redacted.Redacted<string>;
export type MessageAttributeStringValue = string | redacted.Redacted<string>;
export type MessageAttributeStringValues = (string | redacted.Redacted<string>)[];
const MessageAttributeStringValues = /*@__PURE__*/ __L.at(__c1, 3);
export interface MessageAttributeValue {
  StringValues?: (string | redacted.Redacted<string>)[];
}
const MessageAttributeValue = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<MessageAttributeValue>;
export type MessageAttributeMap = { [key: string]: MessageAttributeValue | undefined };
const MessageAttributeMap = /*@__PURE__*/ __L.at(__c1, 5);
export type ContentType = string | redacted.Redacted<string>;
export interface ChannelMessageCallback {
  MessageId: string;
  Content?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  PushNotification?: PushNotificationConfiguration;
  MessageAttributes?: { [key: string]: MessageAttributeValue | undefined };
  SubChannelId?: string;
  ContentType?: string | redacted.Redacted<string>;
}
const ChannelMessageCallback = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<ChannelMessageCallback>;
export interface ChannelFlowCallbackRequest {
  CallbackId: string;
  ChannelArn: string;
  DeleteResource?: boolean;
  ChannelMessage: ChannelMessageCallback;
}
const ChannelFlowCallbackRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<ChannelFlowCallbackRequest>;
export interface ChannelFlowCallbackResponse {
  ChannelArn?: string;
  CallbackId?: string;
}
const ChannelFlowCallbackResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<ChannelFlowCallbackResponse>;
export type NonEmptyResourceName = string | redacted.Redacted<string>;
export type ChannelMode = "UNRESTRICTED" | "RESTRICTED" | (string & {});
const ChannelMode = S.String;

export type ChannelPrivacy = "PUBLIC" | "PRIVATE" | (string & {});
const ChannelPrivacy = S.String;

export type ClientRequestToken = string | redacted.Redacted<string>;
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
const Tag = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c2, 2);
export type ChannelId = string | redacted.Redacted<string>;
export type ChannelMemberArns = string[];
const ChannelMemberArns = MemberArns as any as S.Schema<ChannelMemberArns>;
export type ChannelModeratorArns = string[];
const ChannelModeratorArns = MemberArns as any as S.Schema<ChannelModeratorArns>;
export type MaximumSubChannels = number;
export type TargetMembershipsPerSubChannel = number;
export type MinimumMembershipPercentage = number;
export interface ElasticChannelConfiguration {
  MaximumSubChannels: number;
  TargetMembershipsPerSubChannel: number;
  MinimumMembershipPercentage: number;
}
const ElasticChannelConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<ElasticChannelConfiguration>;
export type ExpirationDays = number;
export type ExpirationCriterion = "CREATED_TIMESTAMP" | "LAST_MESSAGE_TIMESTAMP" | (string & {});
const ExpirationCriterion = S.String;

export interface ExpirationSettings {
  ExpirationDays: number;
  ExpirationCriterion: ExpirationCriterion;
}
const ExpirationSettings = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<ExpirationSettings>;
export interface CreateChannelRequest {
  AppInstanceArn: string;
  Name: string | redacted.Redacted<string>;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string | redacted.Redacted<string>;
  ClientRequestToken: string | redacted.Redacted<string>;
  Tags?: Tag[];
  ChimeBearer: string;
  ChannelId?: string | redacted.Redacted<string>;
  MemberArns?: string[];
  ModeratorArns?: string[];
  ElasticChannelConfiguration?: ElasticChannelConfiguration;
  ExpirationSettings?: ExpirationSettings;
}
const CreateChannelRequest = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<CreateChannelRequest>;
export interface CreateChannelResponse {
  ChannelArn?: string;
}
const CreateChannelResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateChannelResponse>;
export interface CreateChannelBanRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
const CreateChannelBanRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<CreateChannelBanRequest>;
export interface CreateChannelBanResponse {
  ChannelArn?: string;
  Member?: Identity;
}
const CreateChannelBanResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateChannelBanResponse>;
export type LambdaFunctionArn = string;
export type InvocationType = "ASYNC" | (string & {});
const InvocationType = S.String;

export interface LambdaConfiguration {
  ResourceArn: string;
  InvocationType: InvocationType;
}
const LambdaConfiguration = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<LambdaConfiguration>;
export interface ProcessorConfiguration {
  Lambda: LambdaConfiguration;
}
const ProcessorConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<ProcessorConfiguration>;
export type ChannelFlowExecutionOrder = number;
export type FallbackAction = "CONTINUE" | "ABORT" | (string & {});
const FallbackAction = S.String;

export interface Processor {
  Name: string | redacted.Redacted<string>;
  Configuration: ProcessorConfiguration;
  ExecutionOrder: number;
  FallbackAction: FallbackAction;
}
const Processor = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<Processor>;
export type ProcessorList = Processor[];
const ProcessorList = /*@__PURE__*/ __L.at(__c3, 4);
export interface CreateChannelFlowRequest {
  AppInstanceArn: string;
  Processors: Processor[];
  Name: string | redacted.Redacted<string>;
  Tags?: Tag[];
  ClientRequestToken: string | redacted.Redacted<string>;
}
const CreateChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<CreateChannelFlowRequest>;
export interface CreateChannelFlowResponse {
  ChannelFlowArn?: string;
}
const CreateChannelFlowResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateChannelFlowResponse>;
export interface CreateChannelMembershipRequest {
  ChannelArn: string;
  MemberArn: string;
  Type: ChannelMembershipType;
  ChimeBearer: string;
  SubChannelId?: string;
}
const CreateChannelMembershipRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateChannelMembershipRequest>;
export interface CreateChannelMembershipResponse {
  ChannelArn?: string;
  Member?: Identity;
  SubChannelId?: string;
}
const CreateChannelMembershipResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateChannelMembershipResponse>;
export interface CreateChannelModeratorRequest {
  ChannelArn: string;
  ChannelModeratorArn: string;
  ChimeBearer: string;
}
const CreateChannelModeratorRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateChannelModeratorRequest>;
export interface CreateChannelModeratorResponse {
  ChannelArn?: string;
  ChannelModerator?: Identity;
}
const CreateChannelModeratorResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateChannelModeratorResponse>;
export interface DeleteChannelRequest {
  ChannelArn: string;
  ChimeBearer: string;
}
const DeleteChannelRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<DeleteChannelRequest>;
export interface DeleteChannelResponse {}
const DeleteChannelResponse =
  AssociateChannelFlowResponse as any as S.Schema<DeleteChannelResponse>;
export interface DeleteChannelBanRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
const DeleteChannelBanRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteChannelBanRequest>;
export interface DeleteChannelBanResponse {}
const DeleteChannelBanResponse =
  AssociateChannelFlowResponse as any as S.Schema<DeleteChannelBanResponse>;
export interface DeleteChannelFlowRequest {
  ChannelFlowArn: string;
}
const DeleteChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteChannelFlowRequest>;
export interface DeleteChannelFlowResponse {}
const DeleteChannelFlowResponse =
  AssociateChannelFlowResponse as any as S.Schema<DeleteChannelFlowResponse>;
export interface DeleteChannelMembershipRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
const DeleteChannelMembershipRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteChannelMembershipRequest>;
export interface DeleteChannelMembershipResponse {}
const DeleteChannelMembershipResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteChannelMembershipResponse>;
export interface DeleteChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
const DeleteChannelMessageRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteChannelMessageRequest>;
export interface DeleteChannelMessageResponse {}
const DeleteChannelMessageResponse =
  AssociateChannelFlowResponse as any as S.Schema<DeleteChannelMessageResponse>;
export interface DeleteChannelModeratorRequest {
  ChannelArn: string;
  ChannelModeratorArn: string;
  ChimeBearer: string;
}
const DeleteChannelModeratorRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteChannelModeratorRequest>;
export interface DeleteChannelModeratorResponse {}
const DeleteChannelModeratorResponse =
  AssociateChannelFlowResponse as any as S.Schema<DeleteChannelModeratorResponse>;
export interface DeleteMessagingStreamingConfigurationsRequest {
  AppInstanceArn: string;
}
const DeleteMessagingStreamingConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteMessagingStreamingConfigurationsRequest>;
export interface DeleteMessagingStreamingConfigurationsResponse {}
const DeleteMessagingStreamingConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteMessagingStreamingConfigurationsResponse>;
export interface DescribeChannelRequest {
  ChannelArn: string;
  ChimeBearer: string;
}
const DescribeChannelRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DescribeChannelRequest>;
export interface Channel {
  Name?: string | redacted.Redacted<string>;
  ChannelArn?: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string | redacted.Redacted<string>;
  CreatedBy?: Identity;
  CreatedTimestamp?: Date;
  LastMessageTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  ChannelFlowArn?: string;
  ElasticChannelConfiguration?: ElasticChannelConfiguration;
  ExpirationSettings?: ExpirationSettings;
}
const Channel = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<Channel>;
export interface DescribeChannelResponse {
  Channel?: Channel;
}
const DescribeChannelResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DescribeChannelResponse>;
export interface DescribeChannelBanRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
const DescribeChannelBanRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DescribeChannelBanRequest>;
export interface ChannelBan {
  Member?: Identity;
  ChannelArn?: string;
  CreatedTimestamp?: Date;
  CreatedBy?: Identity;
}
const ChannelBan = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<ChannelBan>;
export interface DescribeChannelBanResponse {
  ChannelBan?: ChannelBan;
}
const DescribeChannelBanResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DescribeChannelBanResponse>;
export interface DescribeChannelFlowRequest {
  ChannelFlowArn: string;
}
const DescribeChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DescribeChannelFlowRequest>;
export interface ChannelFlow {
  ChannelFlowArn?: string;
  Processors?: Processor[];
  Name?: string | redacted.Redacted<string>;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
}
const ChannelFlow = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ChannelFlow>;
export interface DescribeChannelFlowResponse {
  ChannelFlow?: ChannelFlow;
}
const DescribeChannelFlowResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DescribeChannelFlowResponse>;
export interface DescribeChannelMembershipRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
const DescribeChannelMembershipRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DescribeChannelMembershipRequest>;
export interface ChannelMembership {
  InvitedBy?: Identity;
  Type?: ChannelMembershipType;
  Member?: Identity;
  ChannelArn?: string;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  SubChannelId?: string;
}
const ChannelMembership = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<ChannelMembership>;
export interface DescribeChannelMembershipResponse {
  ChannelMembership?: ChannelMembership;
}
const DescribeChannelMembershipResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DescribeChannelMembershipResponse>;
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  ChannelArn: string;
  AppInstanceUserArn: string;
  ChimeBearer: string;
}
const DescribeChannelMembershipForAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DescribeChannelMembershipForAppInstanceUserRequest>;
export interface ChannelSummary {
  Name?: string | redacted.Redacted<string>;
  ChannelArn?: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string | redacted.Redacted<string>;
  LastMessageTimestamp?: Date;
}
const ChannelSummary = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<ChannelSummary>;
export interface AppInstanceUserMembershipSummary {
  Type?: ChannelMembershipType;
  ReadMarkerTimestamp?: Date;
  SubChannelId?: string;
}
const AppInstanceUserMembershipSummary = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<AppInstanceUserMembershipSummary>;
export interface ChannelMembershipForAppInstanceUserSummary {
  ChannelSummary?: ChannelSummary;
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}
const ChannelMembershipForAppInstanceUserSummary = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ChannelMembershipForAppInstanceUserSummary>;
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
}
const DescribeChannelMembershipForAppInstanceUserResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DescribeChannelMembershipForAppInstanceUserResponse>;
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  ChannelArn: string;
  AppInstanceUserArn: string;
  ChimeBearer: string;
}
const DescribeChannelModeratedByAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DescribeChannelModeratedByAppInstanceUserRequest>;
export interface ChannelModeratedByAppInstanceUserSummary {
  ChannelSummary?: ChannelSummary;
}
const ChannelModeratedByAppInstanceUserSummary = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ChannelModeratedByAppInstanceUserSummary>;
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  Channel?: ChannelModeratedByAppInstanceUserSummary;
}
const DescribeChannelModeratedByAppInstanceUserResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeChannelModeratedByAppInstanceUserResponse>;
export interface DescribeChannelModeratorRequest {
  ChannelArn: string;
  ChannelModeratorArn: string;
  ChimeBearer: string;
}
const DescribeChannelModeratorRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeChannelModeratorRequest>;
export interface ChannelModerator {
  Moderator?: Identity;
  ChannelArn?: string;
  CreatedTimestamp?: Date;
  CreatedBy?: Identity;
}
const ChannelModerator = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<ChannelModerator>;
export interface DescribeChannelModeratorResponse {
  ChannelModerator?: ChannelModerator;
}
const DescribeChannelModeratorResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeChannelModeratorResponse>;
export interface DisassociateChannelFlowRequest {
  ChannelArn: string;
  ChannelFlowArn: string;
  ChimeBearer: string;
}
const DisassociateChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DisassociateChannelFlowRequest>;
export interface DisassociateChannelFlowResponse {}
const DisassociateChannelFlowResponse =
  DeleteChannelMembershipResponse as any as S.Schema<DisassociateChannelFlowResponse>;
export interface GetChannelMembershipPreferencesRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
}
const GetChannelMembershipPreferencesRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetChannelMembershipPreferencesRequest>;
export type AllowNotifications = "ALL" | "NONE" | "FILTERED" | (string & {});
const AllowNotifications = S.String;

export type FilterRule = string | redacted.Redacted<string>;
export interface PushNotificationPreferences {
  AllowNotifications: AllowNotifications;
  FilterRule?: string | redacted.Redacted<string>;
}
const PushNotificationPreferences = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<PushNotificationPreferences>;
export interface ChannelMembershipPreferences {
  PushNotifications?: PushNotificationPreferences;
}
const ChannelMembershipPreferences = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ChannelMembershipPreferences>;
export interface GetChannelMembershipPreferencesResponse {
  ChannelArn?: string;
  Member?: Identity;
  Preferences?: ChannelMembershipPreferences;
}
const GetChannelMembershipPreferencesResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GetChannelMembershipPreferencesResponse>;
export interface GetChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
const GetChannelMessageRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetChannelMessageRequest>;
export type Content = string | redacted.Redacted<string>;
export type ChannelMessageType = "STANDARD" | "CONTROL" | (string & {});
const ChannelMessageType = S.String;

export type ChannelMessagePersistenceType = "PERSISTENT" | "NON_PERSISTENT" | (string & {});
const ChannelMessagePersistenceType = S.String;

export type ChannelMessageStatus = "SENT" | "PENDING" | "FAILED" | "DENIED" | (string & {});
const ChannelMessageStatus = S.String;

export type StatusDetail = string;
export interface ChannelMessageStatusStructure {
  Value?: ChannelMessageStatus;
  Detail?: string;
}
const ChannelMessageStatusStructure = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<ChannelMessageStatusStructure>;
export interface Target {
  MemberArn?: string;
}
const Target = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<Target>;
export type TargetList = Target[];
const TargetList = /*@__PURE__*/ __L.at(__c9, 3);
export interface ChannelMessage {
  ChannelArn?: string;
  MessageId?: string;
  Content?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  Type?: ChannelMessageType;
  CreatedTimestamp?: Date;
  LastEditedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  Sender?: Identity;
  Redacted?: boolean;
  Persistence?: ChannelMessagePersistenceType;
  Status?: ChannelMessageStatusStructure;
  MessageAttributes?: { [key: string]: MessageAttributeValue | undefined };
  SubChannelId?: string;
  ContentType?: string | redacted.Redacted<string>;
  Target?: Target[];
}
const ChannelMessage = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<ChannelMessage>;
export interface GetChannelMessageResponse {
  ChannelMessage?: ChannelMessage;
}
const GetChannelMessageResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<GetChannelMessageResponse>;
export interface GetChannelMessageStatusRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
const GetChannelMessageStatusRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetChannelMessageStatusRequest>;
export interface GetChannelMessageStatusResponse {
  Status?: ChannelMessageStatusStructure;
}
const GetChannelMessageStatusResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetChannelMessageStatusResponse>;
export type NetworkType = "IPV4_ONLY" | "DUAL_STACK" | (string & {});
const NetworkType = S.String;

export interface GetMessagingSessionEndpointRequest {
  NetworkType?: NetworkType;
}
const GetMessagingSessionEndpointRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetMessagingSessionEndpointRequest>;
export type UrlType = string;
export interface MessagingSessionEndpoint {
  Url?: string;
}
const MessagingSessionEndpoint = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<MessagingSessionEndpoint>;
export interface GetMessagingSessionEndpointResponse {
  Endpoint?: MessagingSessionEndpoint;
}
const GetMessagingSessionEndpointResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetMessagingSessionEndpointResponse>;
export interface GetMessagingStreamingConfigurationsRequest {
  AppInstanceArn: string;
}
const GetMessagingStreamingConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetMessagingStreamingConfigurationsRequest>;
export type MessagingDataType = "Channel" | "ChannelMessage" | (string & {});
const MessagingDataType = S.String;

export interface StreamingConfiguration {
  DataType: MessagingDataType;
  ResourceArn: string;
}
const StreamingConfiguration = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<StreamingConfiguration>;
export type StreamingConfigurationList = StreamingConfiguration[];
const StreamingConfigurationList = /*@__PURE__*/ __L.at(__c10, 5);
export interface GetMessagingStreamingConfigurationsResponse {
  StreamingConfigurations?: StreamingConfiguration[];
}
const GetMessagingStreamingConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<GetMessagingStreamingConfigurationsResponse>;
export type MaxResults = number;
export type NextToken = string | redacted.Redacted<string>;
export interface ListChannelBansRequest {
  ChannelArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
}
const ListChannelBansRequest = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ListChannelBansRequest>;
export interface ChannelBanSummary {
  Member?: Identity;
}
const ChannelBanSummary = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<ChannelBanSummary>;
export type ChannelBanSummaryList = ChannelBanSummary[];
const ChannelBanSummaryList = /*@__PURE__*/ __L.at(__c11, 1);
export interface ListChannelBansResponse {
  ChannelArn?: string;
  NextToken?: string | redacted.Redacted<string>;
  ChannelBans?: ChannelBanSummary[];
}
const ListChannelBansResponse = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListChannelBansResponse>;
export interface ListChannelFlowsRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelFlowsRequest = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<ListChannelFlowsRequest>;
export interface ChannelFlowSummary {
  ChannelFlowArn?: string;
  Name?: string | redacted.Redacted<string>;
  Processors?: Processor[];
}
const ChannelFlowSummary = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<ChannelFlowSummary>;
export type ChannelFlowSummaryList = ChannelFlowSummary[];
const ChannelFlowSummaryList = /*@__PURE__*/ __L.at(__c11, 5);
export interface ListChannelFlowsResponse {
  ChannelFlows?: ChannelFlowSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelFlowsResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ListChannelFlowsResponse>;
export interface ListChannelMembershipsRequest {
  ChannelArn: string;
  Type?: ChannelMembershipType;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
  SubChannelId?: string;
}
const ListChannelMembershipsRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<ListChannelMembershipsRequest>;
export interface ChannelMembershipSummary {
  Member?: Identity;
}
export type ChannelMembershipSummaryList = ChannelMembershipSummary[];
const ChannelMembershipSummaryList =
  ChannelBanSummaryList as any as S.Schema<ChannelMembershipSummaryList>;
export interface ListChannelMembershipsResponse {
  ChannelArn?: string;
  ChannelMemberships?: ChannelMembershipSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelMembershipsResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ListChannelMembershipsResponse>;
export interface ListChannelMembershipsForAppInstanceUserRequest {
  AppInstanceUserArn?: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
}
const ListChannelMembershipsForAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListChannelMembershipsForAppInstanceUserRequest>;
export type ChannelMembershipForAppInstanceUserSummaryList =
  ChannelMembershipForAppInstanceUserSummary[];
const ChannelMembershipForAppInstanceUserSummaryList = /*@__PURE__*/ __L.at(__c12, 2);
export interface ListChannelMembershipsForAppInstanceUserResponse {
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelMembershipsForAppInstanceUserResponse = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<ListChannelMembershipsForAppInstanceUserResponse>;
export type SortOrder = "ASCENDING" | "DESCENDING" | (string & {});
const SortOrder = S.String;

export interface ListChannelMessagesRequest {
  ChannelArn: string;
  SortOrder?: SortOrder;
  NotBefore?: Date;
  NotAfter?: Date;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
  SubChannelId?: string;
}
const ListChannelMessagesRequest = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<ListChannelMessagesRequest>;
export interface ChannelMessageSummary {
  MessageId?: string;
  Content?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  Type?: ChannelMessageType;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  LastEditedTimestamp?: Date;
  Sender?: Identity;
  Redacted?: boolean;
  Status?: ChannelMessageStatusStructure;
  MessageAttributes?: { [key: string]: MessageAttributeValue | undefined };
  ContentType?: string | redacted.Redacted<string>;
  Target?: Target[];
}
const ChannelMessageSummary = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ChannelMessageSummary>;
export type ChannelMessageSummaryList = ChannelMessageSummary[];
const ChannelMessageSummaryList = /*@__PURE__*/ __L.at(__c12, 6);
export interface ListChannelMessagesResponse {
  ChannelArn?: string;
  NextToken?: string | redacted.Redacted<string>;
  ChannelMessages?: ChannelMessageSummary[];
  SubChannelId?: string;
}
const ListChannelMessagesResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<ListChannelMessagesResponse>;
export interface ListChannelModeratorsRequest {
  ChannelArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
}
const ListChannelModeratorsRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListChannelModeratorsRequest>;
export interface ChannelModeratorSummary {
  Moderator?: Identity;
}
const ChannelModeratorSummary = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<ChannelModeratorSummary>;
export type ChannelModeratorSummaryList = ChannelModeratorSummary[];
const ChannelModeratorSummaryList = /*@__PURE__*/ __L.at(__c13, 2);
export interface ListChannelModeratorsResponse {
  ChannelArn?: string;
  NextToken?: string | redacted.Redacted<string>;
  ChannelModerators?: ChannelModeratorSummary[];
}
const ListChannelModeratorsResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<ListChannelModeratorsResponse>;
export interface ListChannelsRequest {
  AppInstanceArn: string;
  Privacy?: ChannelPrivacy;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
}
const ListChannelsRequest = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<ListChannelsRequest>;
export type ChannelSummaryList = ChannelSummary[];
const ChannelSummaryList = /*@__PURE__*/ __L.at(__c13, 5);
export interface ListChannelsResponse {
  Channels?: ChannelSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelsResponse = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ListChannelsResponse>;
export interface ListChannelsAssociatedWithChannelFlowRequest {
  ChannelFlowArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelsAssociatedWithChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListChannelsAssociatedWithChannelFlowRequest>;
export interface ChannelAssociatedWithFlowSummary {
  Name?: string | redacted.Redacted<string>;
  ChannelArn?: string;
  Mode?: ChannelMode;
  Privacy?: ChannelPrivacy;
  Metadata?: string | redacted.Redacted<string>;
}
const ChannelAssociatedWithFlowSummary = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ChannelAssociatedWithFlowSummary>;
export type ChannelAssociatedWithFlowSummaryList = ChannelAssociatedWithFlowSummary[];
const ChannelAssociatedWithFlowSummaryList = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListChannelsAssociatedWithChannelFlowResponse {
  Channels?: ChannelAssociatedWithFlowSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelsAssociatedWithChannelFlowResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListChannelsAssociatedWithChannelFlowResponse>;
export interface ListChannelsModeratedByAppInstanceUserRequest {
  AppInstanceUserArn?: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
  ChimeBearer: string;
}
const ListChannelsModeratedByAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListChannelsModeratedByAppInstanceUserRequest>;
export type ChannelModeratedByAppInstanceUserSummaryList =
  ChannelModeratedByAppInstanceUserSummary[];
const ChannelModeratedByAppInstanceUserSummaryList = /*@__PURE__*/ __L.at(__c14, 4);
export interface ListChannelsModeratedByAppInstanceUserResponse {
  Channels?: ChannelModeratedByAppInstanceUserSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListChannelsModeratedByAppInstanceUserResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ListChannelsModeratedByAppInstanceUserResponse>;
export interface ListSubChannelsRequest {
  ChannelArn: string;
  ChimeBearer: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListSubChannelsRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListSubChannelsRequest>;
export type MembershipCount = number;
export interface SubChannelSummary {
  SubChannelId?: string;
  MembershipCount?: number;
}
const SubChannelSummary = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<SubChannelSummary>;
export type SubChannelSummaryList = SubChannelSummary[];
const SubChannelSummaryList = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListSubChannelsResponse {
  ChannelArn?: string;
  SubChannels?: SubChannelSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListSubChannelsResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListSubChannelsResponse>;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutChannelExpirationSettingsRequest {
  ChannelArn: string;
  ChimeBearer?: string;
  ExpirationSettings?: ExpirationSettings;
}
const PutChannelExpirationSettingsRequest = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<PutChannelExpirationSettingsRequest>;
export interface PutChannelExpirationSettingsResponse {
  ChannelArn?: string;
  ExpirationSettings?: ExpirationSettings;
}
const PutChannelExpirationSettingsResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<PutChannelExpirationSettingsResponse>;
export interface PutChannelMembershipPreferencesRequest {
  ChannelArn: string;
  MemberArn: string;
  ChimeBearer: string;
  Preferences: ChannelMembershipPreferences;
}
const PutChannelMembershipPreferencesRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<PutChannelMembershipPreferencesRequest>;
export interface PutChannelMembershipPreferencesResponse {
  ChannelArn?: string;
  Member?: Identity;
  Preferences?: ChannelMembershipPreferences;
}
const PutChannelMembershipPreferencesResponse =
  GetChannelMembershipPreferencesResponse as any as S.Schema<PutChannelMembershipPreferencesResponse>;
export interface PutMessagingStreamingConfigurationsRequest {
  AppInstanceArn: string;
  StreamingConfigurations: StreamingConfiguration[];
}
const PutMessagingStreamingConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<PutMessagingStreamingConfigurationsRequest>;
export interface PutMessagingStreamingConfigurationsResponse {
  StreamingConfigurations?: StreamingConfiguration[];
}
const PutMessagingStreamingConfigurationsResponse =
  GetMessagingStreamingConfigurationsResponse as any as S.Schema<PutMessagingStreamingConfigurationsResponse>;
export interface RedactChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  ChimeBearer: string;
  SubChannelId?: string;
}
const RedactChannelMessageRequest = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<RedactChannelMessageRequest>;
export interface RedactChannelMessageResponse {
  ChannelArn?: string;
  MessageId?: string;
  SubChannelId?: string;
}
const RedactChannelMessageResponse = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<RedactChannelMessageResponse>;
export type SearchFieldKey = "MEMBERS" | (string & {});
const SearchFieldKey = S.String;

export type SearchFieldValue = string;
export type SearchFieldValues = string[];
const SearchFieldValues = MemberArns as any as S.Schema<SearchFieldValues>;
export type SearchFieldOperator = "EQUALS" | "INCLUDES" | (string & {});
const SearchFieldOperator = S.String;

export interface SearchField {
  Key: SearchFieldKey;
  Values: string[];
  Operator: SearchFieldOperator;
}
const SearchField = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<SearchField>;
export type SearchFields = SearchField[];
const SearchFields = /*@__PURE__*/ __L.at(__c16, 3);
export interface SearchChannelsRequest {
  ChimeBearer?: string;
  Fields: SearchField[];
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const SearchChannelsRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<SearchChannelsRequest>;
export interface SearchChannelsResponse {
  Channels?: ChannelSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const SearchChannelsResponse = ListChannelsResponse as any as S.Schema<SearchChannelsResponse>;
export interface SendChannelMessageRequest {
  ChannelArn: string;
  Content: string | redacted.Redacted<string>;
  Type: ChannelMessageType;
  Persistence: ChannelMessagePersistenceType;
  Metadata?: string | redacted.Redacted<string>;
  ClientRequestToken: string | redacted.Redacted<string>;
  ChimeBearer: string;
  PushNotification?: PushNotificationConfiguration;
  MessageAttributes?: { [key: string]: MessageAttributeValue | undefined };
  SubChannelId?: string;
  ContentType?: string | redacted.Redacted<string>;
  Target?: Target[];
}
const SendChannelMessageRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<SendChannelMessageRequest>;
export interface SendChannelMessageResponse {
  ChannelArn?: string;
  MessageId?: string;
  Status?: ChannelMessageStatusStructure;
  SubChannelId?: string;
}
const SendChannelMessageResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<SendChannelMessageResponse>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AssociateChannelFlowResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = (string | redacted.Redacted<string>)[];
const TagKeyList = MessageAttributeStringValues as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: (string | redacted.Redacted<string>)[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  AssociateChannelFlowResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateChannelRequest {
  ChannelArn: string;
  Name?: string | redacted.Redacted<string>;
  Mode?: ChannelMode;
  Metadata?: string | redacted.Redacted<string>;
  ChimeBearer: string;
}
const UpdateChannelRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<UpdateChannelRequest>;
export interface UpdateChannelResponse {
  ChannelArn?: string;
}
const UpdateChannelResponse = CreateChannelResponse as any as S.Schema<UpdateChannelResponse>;
export interface UpdateChannelFlowRequest {
  ChannelFlowArn: string;
  Processors: Processor[];
  Name: string | redacted.Redacted<string>;
}
const UpdateChannelFlowRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<UpdateChannelFlowRequest>;
export interface UpdateChannelFlowResponse {
  ChannelFlowArn?: string;
}
const UpdateChannelFlowResponse =
  CreateChannelFlowResponse as any as S.Schema<UpdateChannelFlowResponse>;
export interface UpdateChannelMessageRequest {
  ChannelArn: string;
  MessageId: string;
  Content: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  ChimeBearer: string;
  SubChannelId?: string;
  ContentType?: string | redacted.Redacted<string>;
}
const UpdateChannelMessageRequest = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<UpdateChannelMessageRequest>;
export interface UpdateChannelMessageResponse {
  ChannelArn?: string;
  MessageId?: string;
  Status?: ChannelMessageStatusStructure;
  SubChannelId?: string;
}
const UpdateChannelMessageResponse =
  SendChannelMessageResponse as any as S.Schema<UpdateChannelMessageResponse>;
export interface UpdateChannelReadMarkerRequest {
  ChannelArn: string;
  ChimeBearer: string;
}
const UpdateChannelReadMarkerRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<UpdateChannelReadMarkerRequest>;
export interface UpdateChannelReadMarkerResponse {
  ChannelArn?: string;
}
const UpdateChannelReadMarkerResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<UpdateChannelReadMarkerResponse>;
export type AssociateChannelFlowError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Associates a channel flow with a channel. Once associated, all messages to that channel go through channel flow processors. To stop processing, use the
 * `DisassociateChannelFlow` API.
 *
 * Only administrators or channel moderators can associate a channel flow. The
 * `x-amz-chime-bearer` request header is mandatory. Use the ARN of the
 * `AppInstanceUser` or `AppInstanceBot`
 * that makes the API call as the value in the header.
 */
export const associateChannelFlow: API.OperationMethod<
  AssociateChannelFlowRequest,
  AssociateChannelFlowResponse,
  AssociateChannelFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateChannelFlowRequest,
  output: AssociateChannelFlowResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateChannelFlow",
}));

export type BatchCreateChannelMembershipError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Adds a specified number of users and bots to a channel.
 */
export const batchCreateChannelMembership: API.OperationMethod<
  BatchCreateChannelMembershipRequest,
  BatchCreateChannelMembershipResponse,
  BatchCreateChannelMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateChannelMembershipRequest,
  output: BatchCreateChannelMembershipResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateChannelMembership",
}));

export type ChannelFlowCallbackError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API.
 *
 * You can return one of the following processing responses:
 *
 * - Update message content or metadata
 *
 * - Deny a message
 *
 * - Make no changes to the message
 */
export const channelFlowCallback: API.OperationMethod<
  ChannelFlowCallbackRequest,
  ChannelFlowCallbackResponse,
  ChannelFlowCallbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ChannelFlowCallbackRequest,
  output: ChannelFlowCallbackResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ChannelFlowCallback",
}));

export type CreateChannelError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a channel to which you can add users and send messages.
 *
 * **Restriction**: You can't change a channel's
 * privacy.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const createChannel: API.OperationMethod<
  CreateChannelRequest,
  CreateChannelResponse,
  CreateChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChannelRequest,
  output: CreateChannelResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannel",
}));

export type CreateChannelBanError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Permanently bans a member from a channel. Moderators can't add banned members to a
 * channel. To undo a ban, you first have to `DeleteChannelBan`, and then
 * `CreateChannelMembership`. Bans are cleaned up when you delete users or
 * channels.
 *
 * If you ban a user who is already part of a channel, that user is automatically kicked
 * from the channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const createChannelBan: API.OperationMethod<
  CreateChannelBanRequest,
  CreateChannelBanResponse,
  CreateChannelBanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChannelBanRequest,
  output: CreateChannelBanResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannelBan",
}));

export type CreateChannelFlowError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a channel flow, a container for processors. Processors are AWS Lambda functions
 * that perform actions on chat messages, such as stripping out profanity. You can associate
 * channel flows with channels, and the processors in the channel flow then take action on all
 * messages sent to that channel. This is a developer API.
 *
 * Channel flows process the following items:
 *
 * - New and updated messages
 *
 * - Persistent and non-persistent messages
 *
 * - The Standard message type
 *
 * Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to
 * Message types in the *Amazon Chime developer guide*.
 */
export const createChannelFlow: API.OperationMethod<
  CreateChannelFlowRequest,
  CreateChannelFlowResponse,
  CreateChannelFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChannelFlowRequest,
  output: CreateChannelFlowResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannelFlow",
}));

export type CreateChannelMembershipError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Adds a member to a channel. The `InvitedBy` field in `ChannelMembership`
 * is derived from the request header. A channel member can:
 *
 * - List messages
 *
 * - Send messages
 *
 * - Receive messages
 *
 * - Edit their own messages
 *
 * - Leave the channel
 *
 * Privacy settings impact this action as follows:
 *
 * - Public Channels: You do not need to be a member to list messages, but you must be
 * a member to send messages.
 *
 * - Private Channels: You must be a member to list or send messages.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUserArn` or `AppInstanceBot` that makes the API call
 * as the value in the header.
 */
export const createChannelMembership: API.OperationMethod<
  CreateChannelMembershipRequest,
  CreateChannelMembershipResponse,
  CreateChannelMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChannelMembershipRequest,
  output: CreateChannelMembershipResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannelMembership",
}));

export type CreateChannelModeratorError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Creates a new `ChannelModerator`. A channel moderator can:
 *
 * - Add and remove other members of the channel.
 *
 * - Add and remove other moderators of the channel.
 *
 * - Add and remove user bans for the channel.
 *
 * - Redact messages in the channel.
 *
 * - List messages in the channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot`of the user that makes the API call as the value in
 * the header.
 */
export const createChannelModerator: API.OperationMethod<
  CreateChannelModeratorRequest,
  CreateChannelModeratorResponse,
  CreateChannelModeratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateChannelModeratorRequest,
  output: CreateChannelModeratorResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChannelModerator",
}));

export type DeleteChannelError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Immediately makes a channel and its memberships inaccessible and marks them for
 * deletion. This is an irreversible process.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUserArn` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const deleteChannel: API.OperationMethod<
  DeleteChannelRequest,
  DeleteChannelResponse,
  DeleteChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChannelRequest,
  output: DeleteChannelResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannel",
}));

export type DeleteChannelBanError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Removes a member from a channel's ban list.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const deleteChannelBan: API.OperationMethod<
  DeleteChannelBanRequest,
  DeleteChannelBanResponse,
  DeleteChannelBanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChannelBanRequest,
  output: DeleteChannelBanResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannelBan",
}));

export type DeleteChannelFlowError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a channel flow, an irreversible process. This is a developer API.
 *
 * This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the
 * `ListChannelsAssociatedWithChannelFlow` API. Use the `DisassociateChannelFlow` API to disassociate a channel flow from all channels.
 */
export const deleteChannelFlow: API.OperationMethod<
  DeleteChannelFlowRequest,
  DeleteChannelFlowResponse,
  DeleteChannelFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChannelFlowRequest,
  output: DeleteChannelFlowResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannelFlow",
}));

export type DeleteChannelMembershipError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Removes a member from a channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * `AppInstanceUserArn` of the user that makes the API call as the value in
 * the header.
 */
export const deleteChannelMembership: API.OperationMethod<
  DeleteChannelMembershipRequest,
  DeleteChannelMembershipResponse,
  DeleteChannelMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChannelMembershipRequest,
  output: DeleteChannelMembershipResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannelMembership",
}));

export type DeleteChannelMessageError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a channel message. Only admins can perform this action. Deletion makes messages
 * inaccessible immediately. A background process deletes any revisions created by
 * `UpdateChannelMessage`.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const deleteChannelMessage: API.OperationMethod<
  DeleteChannelMessageRequest,
  DeleteChannelMessageResponse,
  DeleteChannelMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChannelMessageRequest,
  output: DeleteChannelMessageResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannelMessage",
}));

export type DeleteChannelModeratorError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes a channel moderator.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const deleteChannelModerator: API.OperationMethod<
  DeleteChannelModeratorRequest,
  DeleteChannelModeratorResponse,
  DeleteChannelModeratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteChannelModeratorRequest,
  output: DeleteChannelModeratorResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteChannelModerator",
}));

export type DeleteMessagingStreamingConfigurationsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes the streaming configurations for an `AppInstance`. For more information, see
 * Streaming messaging data in the *Amazon Chime SDK Developer Guide*.
 */
export const deleteMessagingStreamingConfigurations: API.OperationMethod<
  DeleteMessagingStreamingConfigurationsRequest,
  DeleteMessagingStreamingConfigurationsResponse,
  DeleteMessagingStreamingConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMessagingStreamingConfigurationsRequest,
  output: DeleteMessagingStreamingConfigurationsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMessagingStreamingConfigurations",
}));

export type DescribeChannelError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of a channel in an Amazon Chime
 * `AppInstance`.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const describeChannel: API.OperationMethod<
  DescribeChannelRequest,
  DescribeChannelResponse,
  DescribeChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelRequest,
  output: DescribeChannelResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannel",
}));

export type DescribeChannelBanError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of a channel ban.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const describeChannelBan: API.OperationMethod<
  DescribeChannelBanRequest,
  DescribeChannelBanResponse,
  DescribeChannelBanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelBanRequest,
  output: DescribeChannelBanResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannelBan",
}));

export type DescribeChannelFlowError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of a channel flow in an Amazon Chime `AppInstance`. This is a developer API.
 */
export const describeChannelFlow: API.OperationMethod<
  DescribeChannelFlowRequest,
  DescribeChannelFlowResponse,
  DescribeChannelFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelFlowRequest,
  output: DescribeChannelFlowResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannelFlow",
}));

export type DescribeChannelMembershipError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of a user's channel membership.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const describeChannelMembership: API.OperationMethod<
  DescribeChannelMembershipRequest,
  DescribeChannelMembershipResponse,
  DescribeChannelMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelMembershipRequest,
  output: DescribeChannelMembershipResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannelMembership",
}));

export type DescribeChannelMembershipForAppInstanceUserError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the details of a channel based on the membership of the specified
 * `AppInstanceUser` or `AppInstanceBot`.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const describeChannelMembershipForAppInstanceUser: API.OperationMethod<
  DescribeChannelMembershipForAppInstanceUserRequest,
  DescribeChannelMembershipForAppInstanceUserResponse,
  DescribeChannelMembershipForAppInstanceUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelMembershipForAppInstanceUserRequest,
  output: DescribeChannelMembershipForAppInstanceUserResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannelMembershipForAppInstanceUser",
}));

export type DescribeChannelModeratedByAppInstanceUserError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of a channel moderated by the specified
 * `AppInstanceUser` or `AppInstanceBot`.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const describeChannelModeratedByAppInstanceUser: API.OperationMethod<
  DescribeChannelModeratedByAppInstanceUserRequest,
  DescribeChannelModeratedByAppInstanceUserResponse,
  DescribeChannelModeratedByAppInstanceUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelModeratedByAppInstanceUserRequest,
  output: DescribeChannelModeratedByAppInstanceUserResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannelModeratedByAppInstanceUser",
}));

export type DescribeChannelModeratorError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of a single ChannelModerator.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * `AppInstanceUserArn` of the user that makes the API call as the value in
 * the header.
 */
export const describeChannelModerator: API.OperationMethod<
  DescribeChannelModeratorRequest,
  DescribeChannelModeratorResponse,
  DescribeChannelModeratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeChannelModeratorRequest,
  output: DescribeChannelModeratorResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeChannelModerator",
}));

export type DisassociateChannelFlowError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Disassociates a channel flow from all its channels. Once disassociated, all messages to
 * that channel stop going through the channel flow processor.
 *
 * Only administrators or channel moderators can disassociate a channel flow.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const disassociateChannelFlow: API.OperationMethod<
  DisassociateChannelFlowRequest,
  DisassociateChannelFlowResponse,
  DisassociateChannelFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateChannelFlowRequest,
  output: DisassociateChannelFlowResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateChannelFlow",
}));

export type GetChannelMembershipPreferencesError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets the membership preferences of an `AppInstanceUser` or `AppInstanceBot`
 * for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences.
 * Users or bots in the `AppInstanceAdmin` and channel moderator roles can't
 * retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the
 * channel from which they are banned.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const getChannelMembershipPreferences: API.OperationMethod<
  GetChannelMembershipPreferencesRequest,
  GetChannelMembershipPreferencesResponse,
  GetChannelMembershipPreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetChannelMembershipPreferencesRequest,
  output: GetChannelMembershipPreferencesResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChannelMembershipPreferences",
}));

export type GetChannelMessageError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets the full details of a channel message.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const getChannelMessage: API.OperationMethod<
  GetChannelMessageRequest,
  GetChannelMessageResponse,
  GetChannelMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetChannelMessageRequest,
  output: GetChannelMessageResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChannelMessage",
}));

export type GetChannelMessageStatusError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets message status for a specified `messageId`. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to
 * retrieving message status if the event was not received because a client wasn't connected to a websocket.
 *
 * Messages can have any one of these statuses.
 *
 * ### SENT
 *
 * Message processed successfully
 *
 * ### PENDING
 *
 * Ongoing processing
 *
 * ### FAILED
 *
 * Processing failed
 *
 * ### DENIED
 *
 * Message denied by the processor
 *
 * - This API does not return statuses for denied messages, because we don't store them once the processor denies them.
 *
 * - Only the message sender can invoke this API.
 *
 * - The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const getChannelMessageStatus: API.OperationMethod<
  GetChannelMessageStatusRequest,
  GetChannelMessageStatusResponse,
  GetChannelMessageStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetChannelMessageStatusRequest,
  output: GetChannelMessageStatusResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetChannelMessageStatus",
}));

export type GetMessagingSessionEndpointError =
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * The details of the endpoint for the messaging session.
 */
export const getMessagingSessionEndpoint: API.OperationMethod<
  GetMessagingSessionEndpointRequest,
  GetMessagingSessionEndpointResponse,
  GetMessagingSessionEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMessagingSessionEndpointRequest,
  output: GetMessagingSessionEndpointResponse,
  errors: [
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMessagingSessionEndpoint",
}));

export type GetMessagingStreamingConfigurationsError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Retrieves the data streaming configuration for an `AppInstance`. For more information, see
 * Streaming messaging data in the *Amazon Chime SDK Developer Guide*.
 */
export const getMessagingStreamingConfigurations: API.OperationMethod<
  GetMessagingStreamingConfigurationsRequest,
  GetMessagingStreamingConfigurationsResponse,
  GetMessagingStreamingConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMessagingStreamingConfigurationsRequest,
  output: GetMessagingStreamingConfigurationsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMessagingStreamingConfigurations",
}));

export type ListChannelBansError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all the users and bots banned from a particular channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const listChannelBans: API.PaginatedOperationMethod<
  ListChannelBansRequest,
  ListChannelBansResponse,
  ListChannelBansError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelBansRequest,
  output: ListChannelBansResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelBans",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelFlowsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.
 */
export const listChannelFlows: API.PaginatedOperationMethod<
  ListChannelFlowsRequest,
  ListChannelFlowsResponse,
  ListChannelFlowsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelFlowsRequest,
  output: ListChannelFlowsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelFlows",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelMembershipsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all channel memberships in a channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 *
 * If you want to list the channels to which a specific app instance user belongs, see the
 * ListChannelMembershipsForAppInstanceUser API.
 */
export const listChannelMemberships: API.PaginatedOperationMethod<
  ListChannelMembershipsRequest,
  ListChannelMembershipsResponse,
  ListChannelMembershipsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelMembershipsRequest,
  output: ListChannelMembershipsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelMemberships",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelMembershipsForAppInstanceUserError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all channels that an `AppInstanceUser` or `AppInstanceBot` is a part of.
 * Only an `AppInstanceAdmin` can call the API with a user ARN that is not their own.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const listChannelMembershipsForAppInstanceUser: API.PaginatedOperationMethod<
  ListChannelMembershipsForAppInstanceUserRequest,
  ListChannelMembershipsForAppInstanceUserResponse,
  ListChannelMembershipsForAppInstanceUserError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelMembershipsForAppInstanceUserRequest,
  output: ListChannelMembershipsForAppInstanceUserResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelMembershipsForAppInstanceUser",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelMessagesError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * List all the messages in a channel. Returns a paginated list of
 * `ChannelMessages`. By default, sorted by creation timestamp in descending
 * order.
 *
 * Redacted messages appear in the results as empty, since they are only redacted, not
 * deleted. Deleted messages do not appear in the results. This action always returns the
 * latest version of an edited message.
 *
 * Also, the `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const listChannelMessages: API.PaginatedOperationMethod<
  ListChannelMessagesRequest,
  ListChannelMessagesResponse,
  ListChannelMessagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelMessagesRequest,
  output: ListChannelMessagesResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelMessages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelModeratorsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all the moderators for a channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const listChannelModerators: API.PaginatedOperationMethod<
  ListChannelModeratorsRequest,
  ListChannelModeratorsResponse,
  ListChannelModeratorsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelModeratorsRequest,
  output: ListChannelModeratorsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelModerators",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all Channels created under a single Chime App as a paginated list. You can specify
 * filters to narrow results.
 *
 * **Functionality & restrictions**
 *
 * - Use privacy = `PUBLIC` to retrieve all public channels in the
 * account.
 *
 * - Only an `AppInstanceAdmin` can set privacy = `PRIVATE` to
 * list the private channels in an account.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const listChannels: API.PaginatedOperationMethod<
  ListChannelsRequest,
  ListChannelsResponse,
  ListChannelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelsRequest,
  output: ListChannelsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelsAssociatedWithChannelFlowError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API.
 */
export const listChannelsAssociatedWithChannelFlow: API.PaginatedOperationMethod<
  ListChannelsAssociatedWithChannelFlowRequest,
  ListChannelsAssociatedWithChannelFlowResponse,
  ListChannelsAssociatedWithChannelFlowError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelsAssociatedWithChannelFlowRequest,
  output: ListChannelsAssociatedWithChannelFlowResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelsAssociatedWithChannelFlow",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListChannelsModeratedByAppInstanceUserError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * A list of the channels moderated by an `AppInstanceUser`.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const listChannelsModeratedByAppInstanceUser: API.PaginatedOperationMethod<
  ListChannelsModeratedByAppInstanceUserRequest,
  ListChannelsModeratedByAppInstanceUserResponse,
  ListChannelsModeratedByAppInstanceUserError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListChannelsModeratedByAppInstanceUserRequest,
  output: ListChannelsModeratedByAppInstanceUserResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListChannelsModeratedByAppInstanceUser",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSubChannelsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels.
 */
export const listSubChannels: API.PaginatedOperationMethod<
  ListSubChannelsRequest,
  ListSubChannelsResponse,
  ListSubChannelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSubChannelsRequest,
  output: ListSubChannelsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubChannels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists the tags applied to an Amazon Chime SDK messaging resource.
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
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutChannelExpirationSettingsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Sets the number of days before the channel is automatically deleted.
 *
 * - A background process deletes expired channels within 6 hours of expiration.
 * Actual deletion times may vary.
 *
 * - Expired channels that have not yet been deleted appear as active, and you can update
 * their expiration settings. The system honors the new settings.
 *
 * - The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const putChannelExpirationSettings: API.OperationMethod<
  PutChannelExpirationSettingsRequest,
  PutChannelExpirationSettingsResponse,
  PutChannelExpirationSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutChannelExpirationSettingsRequest,
  output: PutChannelExpirationSettingsResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutChannelExpirationSettings",
}));

export type PutChannelMembershipPreferencesError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Sets the membership preferences of an `AppInstanceUser` or `AppInstanceBot`
 * for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the
 * membership can set preferences. Users or bots in the `AppInstanceAdmin` and channel moderator roles can't set
 * preferences for other users. Banned users or bots can't set membership preferences for the channel from
 * which they are banned.
 *
 * The x-amz-chime-bearer request header is mandatory. Use the ARN of an
 * `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the
 * header.
 */
export const putChannelMembershipPreferences: API.OperationMethod<
  PutChannelMembershipPreferencesRequest,
  PutChannelMembershipPreferencesResponse,
  PutChannelMembershipPreferencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutChannelMembershipPreferencesRequest,
  output: PutChannelMembershipPreferencesResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutChannelMembershipPreferences",
}));

export type PutMessagingStreamingConfigurationsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Sets the data streaming configuration for an `AppInstance`. For more information, see
 * Streaming messaging data in the *Amazon Chime SDK Developer Guide*.
 */
export const putMessagingStreamingConfigurations: API.OperationMethod<
  PutMessagingStreamingConfigurationsRequest,
  PutMessagingStreamingConfigurationsResponse,
  PutMessagingStreamingConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutMessagingStreamingConfigurationsRequest,
  output: PutMessagingStreamingConfigurationsResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    NotFoundException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMessagingStreamingConfigurations",
}));

export type RedactChannelMessageError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Redacts message content and metadata. The message exists in the back end, but the
 * action returns null content, and the state shows as redacted.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const redactChannelMessage: API.OperationMethod<
  RedactChannelMessageRequest,
  RedactChannelMessageResponse,
  RedactChannelMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RedactChannelMessageRequest,
  output: RedactChannelMessageResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RedactChannelMessage",
}));

export type SearchChannelsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Allows the `ChimeBearer` to search channels by channel members. Users or bots can search
 * across the channels that they belong to. Users in the `AppInstanceAdmin` role can search across
 * all channels.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 *
 * This operation isn't supported for `AppInstanceUsers` with a large number of memberships.
 */
export const searchChannels: API.PaginatedOperationMethod<
  SearchChannelsRequest,
  SearchChannelsResponse,
  SearchChannelsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchChannelsRequest,
  output: SearchChannelsResponse,
  errors: [
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchChannels",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SendChannelMessageError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Sends a message to a particular channel that the member is a part of.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 *
 * Also, `STANDARD` messages can be up to 4KB in size and contain metadata. Metadata is arbitrary,
 * and you can use it in a variety of ways, such as containing a link to an attachment.
 *
 * `CONTROL` messages are limited to 30 bytes and do not contain metadata.
 */
export const sendChannelMessage: API.OperationMethod<
  SendChannelMessageRequest,
  SendChannelMessageResponse,
  SendChannelMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendChannelMessageRequest,
  output: SendChannelMessageResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendChannelMessage",
}));

export type TagResourceError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Applies the specified tags to the specified Amazon Chime SDK messaging resource.
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
    BadRequestException,
    ForbiddenException,
    ResourceLimitExceededException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Removes the specified tags from the specified Amazon Chime SDK messaging resource.
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
    BadRequestException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateChannelError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Update a channel's attributes.
 *
 * **Restriction**: You can't change a channel's privacy.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const updateChannel: API.OperationMethod<
  UpdateChannelRequest,
  UpdateChannelResponse,
  UpdateChannelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChannelRequest,
  output: UpdateChannelResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChannel",
}));

export type UpdateChannelFlowError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates channel flow attributes. This is a developer API.
 */
export const updateChannelFlow: API.OperationMethod<
  UpdateChannelFlowRequest,
  UpdateChannelFlowResponse,
  UpdateChannelFlowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChannelFlowRequest,
  output: UpdateChannelFlowResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChannelFlow",
}));

export type UpdateChannelMessageError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the content of a message.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const updateChannelMessage: API.OperationMethod<
  UpdateChannelMessageRequest,
  UpdateChannelMessageResponse,
  UpdateChannelMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChannelMessageRequest,
  output: UpdateChannelMessageResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChannelMessage",
}));

export type UpdateChannelReadMarkerError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * The details of the time when a user last read messages in a channel.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the
 * ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in
 * the header.
 */
export const updateChannelReadMarker: API.OperationMethod<
  UpdateChannelReadMarkerRequest,
  UpdateChannelReadMarkerResponse,
  UpdateChannelReadMarkerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateChannelReadMarkerRequest,
  output: UpdateChannelReadMarkerResponse,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    ServiceFailureException,
    ServiceUnavailableException,
    ThrottledClientException,
    UnauthorizedClientException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateChannelReadMarker",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChannelFlowArn: S.String,
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channels/{ChannelArn}/channel-flow" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateChannelFlowRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateChannelFlowResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          Type: S.optional(ChannelMembershipType),
          MemberArns: MemberArns,
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/channels/{ChannelArn}/memberships?operation=batch-create",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateChannelMembershipRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Identity" });
    case 5:
      return S.Array(Identity);
    case 6:
      return S.suspend(() =>
        S.Struct({
          InvitedBy: S.optional(Identity),
          Type: S.optional(ChannelMembershipType),
          Members: S.optional(Members),
          ChannelArn: S.optional(S.String),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchChannelMemberships" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MemberArn: S.optional(S.String),
          ErrorCode: S.optional(ErrorCode),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchCreateChannelMembershipError",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchCreateChannelMembershipError_);
    case 1:
      return S.suspend(() =>
        S.Struct({
          BatchChannelMemberships: S.optional(BatchChannelMemberships),
          Errors: S.optional(BatchCreateChannelMembershipErrors),
        }),
      ).annotate({
        identifier: "BatchCreateChannelMembershipResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Title: S.optional(SensitiveString),
          Body: S.optional(SensitiveString),
          Type: S.optional(PushNotificationType),
        }),
      ).annotate({
        identifier: "PushNotificationConfiguration",
      });
    case 3:
      return S.Array(SensitiveString);
    case 4:
      return S.suspend(() =>
        S.Struct({ StringValues: S.optional(MessageAttributeStringValues) }),
      ).annotate({ identifier: "MessageAttributeValue" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ MessageAttributeValue.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          MessageId: S.String,
          Content: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
          PushNotification: S.optional(PushNotificationConfiguration),
          MessageAttributes: S.optional(MessageAttributeMap),
          SubChannelId: S.optional(S.String),
          ContentType: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ChannelMessageCallback" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CallbackId: S.String.pipe(T.IdempotencyToken()),
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          DeleteResource: S.optional(S.Boolean),
          ChannelMessage: ChannelMessageCallback,
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/channels/{ChannelArn}?operation=channel-flow-callback",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ChannelFlowCallbackRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ChannelArn: S.optional(S.String), CallbackId: S.optional(S.String) }),
      ).annotate({
        identifier: "ChannelFlowCallbackResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ Key: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 2:
      return S.Array(Tag);
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaximumSubChannels: S.Number,
          TargetMembershipsPerSubChannel: S.Number,
          MinimumMembershipPercentage: S.Number,
        }),
      ).annotate({
        identifier: "ElasticChannelConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ExpirationDays: S.Number, ExpirationCriterion: ExpirationCriterion }),
      ).annotate({ identifier: "ExpirationSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String,
          Name: SensitiveString,
          Mode: S.optional(ChannelMode),
          Privacy: S.optional(ChannelPrivacy),
          Metadata: S.optional(SensitiveString),
          ClientRequestToken: SensitiveString.pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          ChannelId: S.optional(SensitiveString),
          MemberArns: S.optional(ChannelMemberArns),
          ModeratorArns: S.optional(ChannelModeratorArns),
          ElasticChannelConfiguration: S.optional(ElasticChannelConfiguration),
          ExpirationSettings: S.optional(ExpirationSettings),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/channels" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateChannelRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ChannelArn: S.optional(S.String) })).annotate({
        identifier: "CreateChannelResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String,
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels/{ChannelArn}/bans" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateChannelBanRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ChannelArn: S.optional(S.String), Member: S.optional(Identity) }),
      ).annotate({ identifier: "CreateChannelBanResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, InvocationType: InvocationType }),
      ).annotate({ identifier: "LambdaConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ Lambda: LambdaConfiguration })).annotate({
        identifier: "ProcessorConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: SensitiveString,
          Configuration: ProcessorConfiguration,
          ExecutionOrder: S.Number,
          FallbackAction: FallbackAction,
        }),
      ).annotate({ identifier: "Processor" });
    case 4:
      return S.Array(Processor);
    case 5:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String,
          Processors: ProcessorList,
          Name: SensitiveString,
          Tags: S.optional(TagList),
          ClientRequestToken: SensitiveString.pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/channel-flows" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateChannelFlowRequest" });
    case 6:
      return S.suspend(() => S.Struct({ ChannelFlowArn: S.optional(S.String) })).annotate({
        identifier: "CreateChannelFlowResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String,
          Type: ChannelMembershipType,
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels/{ChannelArn}/memberships" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateChannelMembershipRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          Member: S.optional(Identity),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateChannelMembershipResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChannelModeratorArn: S.String,
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels/{ChannelArn}/moderators" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateChannelModeratorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ChannelArn: S.optional(S.String), ChannelModerator: S.optional(Identity) }),
      ).annotate({
        identifier: "CreateChannelModeratorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/channels/{ChannelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteChannelRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String.pipe(T.HttpLabel("MemberArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/channels/{ChannelArn}/bans/{MemberArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteChannelBanRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ChannelFlowArn: S.String.pipe(T.HttpLabel("ChannelFlowArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/channel-flows/{ChannelFlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteChannelFlowRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String.pipe(T.HttpLabel("MemberArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/channels/{ChannelArn}/memberships/{MemberArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteChannelMembershipRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteChannelMembershipResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MessageId: S.String.pipe(T.HttpLabel("MessageId")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/channels/{ChannelArn}/messages/{MessageId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteChannelMessageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChannelModeratorArn: S.String.pipe(T.HttpLabel("ChannelModeratorArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteChannelModeratorRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")) }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/app-instances/{AppInstanceArn}/streaming-configurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteMessagingStreamingConfigurationsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteMessagingStreamingConfigurationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeChannelRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          ChannelArn: S.optional(S.String),
          Mode: S.optional(ChannelMode),
          Privacy: S.optional(ChannelPrivacy),
          Metadata: S.optional(SensitiveString),
          CreatedBy: S.optional(Identity),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastMessageTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ChannelFlowArn: S.optional(S.String),
          ElasticChannelConfiguration: S.optional(ElasticChannelConfiguration),
          ExpirationSettings: S.optional(ExpirationSettings),
        }),
      ).annotate({ identifier: "Channel" });
    case 6:
      return S.suspend(() => S.Struct({ Channel: S.optional(Channel) })).annotate({
        identifier: "DescribeChannelResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String.pipe(T.HttpLabel("MemberArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/bans/{MemberArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeChannelBanRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Member: S.optional(Identity),
          ChannelArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedBy: S.optional(Identity),
        }),
      ).annotate({ identifier: "ChannelBan" });
    case 1:
      return S.suspend(() => S.Struct({ ChannelBan: S.optional(ChannelBan) })).annotate({
        identifier: "DescribeChannelBanResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ChannelFlowArn: S.String.pipe(T.HttpLabel("ChannelFlowArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channel-flows/{ChannelFlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeChannelFlowRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelFlowArn: S.optional(S.String),
          Processors: S.optional(ProcessorList),
          Name: S.optional(SensitiveString),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ChannelFlow" });
    case 4:
      return S.suspend(() => S.Struct({ ChannelFlow: S.optional(ChannelFlow) })).annotate({
        identifier: "DescribeChannelFlowResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String.pipe(T.HttpLabel("MemberArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/memberships/{MemberArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeChannelMembershipRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InvitedBy: S.optional(Identity),
          Type: S.optional(ChannelMembershipType),
          Member: S.optional(Identity),
          ChannelArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ChannelMembership" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ChannelMembership: S.optional(ChannelMembership) }),
      ).annotate({
        identifier: "DescribeChannelMembershipResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          AppInstanceUserArn: S.String.pipe(T.HttpQuery("app-instance-user-arn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/channels/{ChannelArn}?scope=app-instance-user-membership",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeChannelMembershipForAppInstanceUserRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          ChannelArn: S.optional(S.String),
          Mode: S.optional(ChannelMode),
          Privacy: S.optional(ChannelPrivacy),
          Metadata: S.optional(SensitiveString),
          LastMessageTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ChannelSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(ChannelMembershipType),
          ReadMarkerTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AppInstanceUserMembershipSummary",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelSummary: S.optional(ChannelSummary),
          AppInstanceUserMembershipSummary: S.optional(AppInstanceUserMembershipSummary),
        }),
      ).annotate({
        identifier: "ChannelMembershipForAppInstanceUserSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ChannelMembership: S.optional(ChannelMembershipForAppInstanceUserSummary) }),
      ).annotate({
        identifier: "DescribeChannelMembershipForAppInstanceUserResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          AppInstanceUserArn: S.String.pipe(T.HttpQuery("app-instance-user-arn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/channels/{ChannelArn}?scope=app-instance-user-moderated-channel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeChannelModeratedByAppInstanceUserRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ ChannelSummary: S.optional(ChannelSummary) })).annotate({
        identifier: "ChannelModeratedByAppInstanceUserSummary",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Channel: S.optional(ChannelModeratedByAppInstanceUserSummary) }),
      ).annotate({
        identifier: "DescribeChannelModeratedByAppInstanceUserResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChannelModeratorArn: S.String.pipe(T.HttpLabel("ChannelModeratorArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeChannelModeratorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Moderator: S.optional(Identity),
          ChannelArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedBy: S.optional(Identity),
        }),
      ).annotate({ identifier: "ChannelModerator" });
    case 2:
      return S.suspend(() => S.Struct({ ChannelModerator: S.optional(ChannelModerator) })).annotate(
        {
          identifier: "DescribeChannelModeratorResponse",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChannelFlowArn: S.String.pipe(T.HttpLabel("ChannelFlowArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/channels/{ChannelArn}/channel-flow/{ChannelFlowArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateChannelFlowRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String.pipe(T.HttpLabel("MemberArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/channels/{ChannelArn}/memberships/{MemberArn}/preferences",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetChannelMembershipPreferencesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AllowNotifications: AllowNotifications,
          FilterRule: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "PushNotificationPreferences",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PushNotifications: S.optional(PushNotificationPreferences) }),
      ).annotate({
        identifier: "ChannelMembershipPreferences",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          Member: S.optional(Identity),
          Preferences: S.optional(ChannelMembershipPreferences),
        }),
      ).annotate({
        identifier: "GetChannelMembershipPreferencesResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MessageId: S.String.pipe(T.HttpLabel("MessageId")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/messages/{MessageId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetChannelMessageRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(ChannelMessageStatus), Detail: S.optional(S.String) }),
      ).annotate({
        identifier: "ChannelMessageStatusStructure",
      });
    case 2:
      return S.suspend(() => S.Struct({ MemberArn: S.optional(S.String) })).annotate({
        identifier: "Target",
      });
    case 3:
      return S.Array(Target);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          MessageId: S.optional(S.String),
          Content: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
          Type: S.optional(ChannelMessageType),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastEditedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Sender: S.optional(Identity),
          Redacted: S.optional(S.Boolean),
          Persistence: S.optional(ChannelMessagePersistenceType),
          Status: S.optional(ChannelMessageStatusStructure),
          MessageAttributes: S.optional(MessageAttributeMap),
          SubChannelId: S.optional(S.String),
          ContentType: S.optional(SensitiveString),
          Target: S.optional(TargetList),
        }),
      ).annotate({ identifier: "ChannelMessage" });
    case 5:
      return S.suspend(() => S.Struct({ ChannelMessage: S.optional(ChannelMessage) })).annotate({
        identifier: "GetChannelMessageResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MessageId: S.String.pipe(T.HttpLabel("MessageId")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/channels/{ChannelArn}/messages/{MessageId}?scope=message-status",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetChannelMessageStatusRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(ChannelMessageStatusStructure) }),
      ).annotate({
        identifier: "GetChannelMessageStatusResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NetworkType: S.optional(NetworkType).pipe(T.HttpQuery("network-type")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/endpoints/messaging-session" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMessagingSessionEndpointRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Url: S.optional(S.String) })).annotate({
        identifier: "MessagingSessionEndpoint",
      });
    case 2:
      return S.suspend(() => S.Struct({ Endpoint: S.optional(MessagingSessionEndpoint) })).annotate(
        {
          identifier: "GetMessagingSessionEndpointResponse",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app-instances/{AppInstanceArn}/streaming-configurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetMessagingStreamingConfigurationsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DataType: MessagingDataType, ResourceArn: S.String }),
      ).annotate({ identifier: "StreamingConfiguration" });
    case 5:
      return S.Array(StreamingConfiguration);
    case 6:
      return S.suspend(() =>
        S.Struct({ StreamingConfigurations: S.optional(StreamingConfigurationList) }),
      ).annotate({
        identifier: "GetMessagingStreamingConfigurationsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/bans" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListChannelBansRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Member: S.optional(Identity) })).annotate({
        identifier: "ChannelBanSummary",
      });
    case 1:
      return S.Array(ChannelBanSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          NextToken: S.optional(SensitiveString),
          ChannelBans: S.optional(ChannelBanSummaryList),
        }),
      ).annotate({ identifier: "ListChannelBansResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpQuery("app-instance-arn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/channel-flows" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListChannelFlowsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelFlowArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Processors: S.optional(ProcessorList),
        }),
      ).annotate({ identifier: "ChannelFlowSummary" });
    case 5:
      return S.Array(ChannelFlowSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChannelFlows: S.optional(ChannelFlowSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ListChannelFlowsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          Type: S.optional(ChannelMembershipType).pipe(T.HttpQuery("type")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/memberships" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelMembershipsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          ChannelMemberships: S.optional(ChannelMembershipSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListChannelMembershipsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String).pipe(T.HttpQuery("app-instance-user-arn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels?scope=app-instance-user-memberships" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelMembershipsForAppInstanceUserRequest",
      });
    case 2:
      return S.Array(ChannelMembershipForAppInstanceUserSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelMemberships: S.optional(ChannelMembershipForAppInstanceUserSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListChannelMembershipsForAppInstanceUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          SortOrder: S.optional(SortOrder).pipe(T.HttpQuery("sort-order")),
          NotBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("not-before"),
          ),
          NotAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
            T.HttpQuery("not-after"),
          ),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String).pipe(T.HttpQuery("sub-channel-id")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/messages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelMessagesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MessageId: S.optional(S.String),
          Content: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
          Type: S.optional(ChannelMessageType),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastEditedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Sender: S.optional(Identity),
          Redacted: S.optional(S.Boolean),
          Status: S.optional(ChannelMessageStatusStructure),
          MessageAttributes: S.optional(MessageAttributeMap),
          ContentType: S.optional(SensitiveString),
          Target: S.optional(TargetList),
        }),
      ).annotate({ identifier: "ChannelMessageSummary" });
    case 6:
      return S.Array(ChannelMessageSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          NextToken: S.optional(SensitiveString),
          ChannelMessages: S.optional(ChannelMessageSummaryList),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListChannelMessagesResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/moderators" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelModeratorsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ Moderator: S.optional(Identity) })).annotate({
        identifier: "ChannelModeratorSummary",
      });
    case 2:
      return S.Array(ChannelModeratorSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          NextToken: S.optional(SensitiveString),
          ChannelModerators: S.optional(ChannelModeratorSummaryList),
        }),
      ).annotate({
        identifier: "ListChannelModeratorsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpQuery("app-instance-arn")),
          Privacy: S.optional(ChannelPrivacy).pipe(T.HttpQuery("privacy")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/channels" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListChannelsRequest" });
    case 5:
      return S.Array(ChannelSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Channels: S.optional(ChannelSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ListChannelsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChannelFlowArn: S.String.pipe(T.HttpQuery("channel-flow-arn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels?scope=channel-flow-associations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelsAssociatedWithChannelFlowRequest",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(SensitiveString),
          ChannelArn: S.optional(S.String),
          Mode: S.optional(ChannelMode),
          Privacy: S.optional(ChannelPrivacy),
          Metadata: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ChannelAssociatedWithFlowSummary",
      });
    case 1:
      return S.Array(ChannelAssociatedWithFlowSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Channels: S.optional(ChannelAssociatedWithFlowSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListChannelsAssociatedWithChannelFlowResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String).pipe(T.HttpQuery("app-instance-user-arn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels?scope=app-instance-user-moderated-channels" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListChannelsModeratedByAppInstanceUserRequest",
      });
    case 4:
      return S.Array(ChannelModeratedByAppInstanceUserSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Channels: S.optional(ChannelModeratedByAppInstanceUserSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListChannelsModeratedByAppInstanceUserResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/channels/{ChannelArn}/subchannels" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSubChannelsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ SubChannelId: S.optional(S.String), MembershipCount: S.optional(S.Number) }),
      ).annotate({ identifier: "SubChannelSummary" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SubChannelSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          SubChannels: S.optional(SubChannelSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ListSubChannelsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChimeBearer: S.optional(S.String).pipe(T.HttpHeader("x-amz-chime-bearer")),
          ExpirationSettings: S.optional(ExpirationSettings),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channels/{ChannelArn}/expiration-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutChannelExpirationSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          ExpirationSettings: S.optional(ExpirationSettings),
        }),
      ).annotate({
        identifier: "PutChannelExpirationSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MemberArn: S.String.pipe(T.HttpLabel("MemberArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          Preferences: ChannelMembershipPreferences,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/channels/{ChannelArn}/memberships/{MemberArn}/preferences",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutChannelMembershipPreferencesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
          StreamingConfigurations: StreamingConfigurationList,
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/app-instances/{AppInstanceArn}/streaming-configurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutMessagingStreamingConfigurationsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MessageId: S.String.pipe(T.HttpLabel("MessageId")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/channels/{ChannelArn}/messages/{MessageId}?operation=redact",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RedactChannelMessageRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          MessageId: S.optional(S.String),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RedactChannelMessageResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Key: SearchFieldKey, Values: SearchFieldValues, Operator: SearchFieldOperator }),
      ).annotate({ identifier: "SearchField" });
    case 3:
      return S.Array(SearchField);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChimeBearer: S.optional(S.String).pipe(T.HttpHeader("x-amz-chime-bearer")),
          Fields: SearchFields,
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels?operation=search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchChannelsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          Content: SensitiveString,
          Type: ChannelMessageType,
          Persistence: ChannelMessagePersistenceType,
          Metadata: S.optional(SensitiveString),
          ClientRequestToken: SensitiveString.pipe(T.IdempotencyToken()),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          PushNotification: S.optional(PushNotificationConfiguration),
          MessageAttributes: S.optional(MessageAttributeMap),
          SubChannelId: S.optional(S.String),
          ContentType: S.optional(SensitiveString),
          Target: S.optional(TargetList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/channels/{ChannelArn}/messages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendChannelMessageRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.optional(S.String),
          MessageId: S.optional(S.String),
          Status: S.optional(ChannelMessageStatusStructure),
          SubChannelId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SendChannelMessageResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: TagList }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags?operation=tag-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: TagKeyList }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags?operation=untag-resource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          Name: S.optional(SensitiveString),
          Mode: S.optional(ChannelMode),
          Metadata: S.optional(SensitiveString),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channels/{ChannelArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateChannelRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ChannelFlowArn: S.String.pipe(T.HttpLabel("ChannelFlowArn")),
          Processors: ProcessorList,
          Name: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channel-flows/{ChannelFlowArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateChannelFlowRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          MessageId: S.String.pipe(T.HttpLabel("MessageId")),
          Content: SensitiveString,
          Metadata: S.optional(SensitiveString),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
          SubChannelId: S.optional(S.String),
          ContentType: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channels/{ChannelArn}/messages/{MessageId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateChannelMessageRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ChannelArn: S.String.pipe(T.HttpLabel("ChannelArn")),
          ChimeBearer: S.String.pipe(T.HttpHeader("x-amz-chime-bearer")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/channels/{ChannelArn}/readMarker" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateChannelReadMarkerRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ ChannelArn: S.optional(S.String) })).annotate({
        identifier: "UpdateChannelReadMarkerResponse",
      });
  }
}
