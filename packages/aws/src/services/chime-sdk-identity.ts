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
  sdkId: "Chime SDK Identity",
  serviceShapeName: "ChimeIdentityService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "chime" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-04-20");
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
              `https://identity-chime-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://identity-chime-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://identity-chime.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://identity-chime.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export type NonEmptyResourceName = string | redacted.Redacted<string>;
export type Metadata = string | redacted.Redacted<string>;
export type ClientRequestToken = string;
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export interface CreateAppInstanceRequest {
  Name: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  ClientRequestToken: string;
  Tags?: Tag[];
}
const CreateAppInstanceRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CreateAppInstanceRequest>;
export type ChimeArn = string;
export interface CreateAppInstanceResponse {
  AppInstanceArn?: string;
}
const CreateAppInstanceResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateAppInstanceResponse>;
export interface CreateAppInstanceAdminRequest {
  AppInstanceAdminArn: string;
  AppInstanceArn: string;
}
const CreateAppInstanceAdminRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateAppInstanceAdminRequest>;
export type ResourceName = string | redacted.Redacted<string>;
export interface Identity {
  Arn?: string;
  Name?: string | redacted.Redacted<string>;
}
const Identity = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<Identity>;
export interface CreateAppInstanceAdminResponse {
  AppInstanceAdmin?: Identity;
  AppInstanceArn?: string;
}
const CreateAppInstanceAdminResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateAppInstanceAdminResponse>;
export type RespondsTo = "STANDARD_MESSAGES" | (string & {});
const RespondsTo = S.String;

export type StandardMessages = "AUTO" | "ALL" | "MENTIONS" | "NONE" | (string & {});
const StandardMessages = S.String;

export type TargetedMessages = "ALL" | "NONE" | (string & {});
const TargetedMessages = S.String;

export interface InvokedBy {
  StandardMessages: StandardMessages;
  TargetedMessages: TargetedMessages;
}
const InvokedBy = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<InvokedBy>;
export type LexBotAliasArn = string;
export type LexIntentName = string;
export interface LexConfiguration {
  RespondsTo?: RespondsTo;
  InvokedBy?: InvokedBy;
  LexBotAliasArn: string;
  LocaleId: string;
  WelcomeIntent?: string;
}
const LexConfiguration = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<LexConfiguration>;
export interface Configuration {
  Lex: LexConfiguration;
}
const Configuration = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Configuration>;
export interface CreateAppInstanceBotRequest {
  AppInstanceArn: string;
  Name?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  ClientRequestToken: string;
  Tags?: Tag[];
  Configuration: Configuration;
}
const CreateAppInstanceBotRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateAppInstanceBotRequest>;
export interface CreateAppInstanceBotResponse {
  AppInstanceBotArn?: string;
}
const CreateAppInstanceBotResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CreateAppInstanceBotResponse>;
export type UserId = string | redacted.Redacted<string>;
export type UserName = string | redacted.Redacted<string>;
export type ExpirationDays = number;
export type ExpirationCriterion = "CREATED_TIMESTAMP" | (string & {});
const ExpirationCriterion = S.String;

export interface ExpirationSettings {
  ExpirationDays: number;
  ExpirationCriterion: ExpirationCriterion;
}
const ExpirationSettings = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<ExpirationSettings>;
export interface CreateAppInstanceUserRequest {
  AppInstanceArn: string;
  AppInstanceUserId: string | redacted.Redacted<string>;
  Name: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  ClientRequestToken: string;
  Tags?: Tag[];
  ExpirationSettings?: ExpirationSettings;
}
const CreateAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateAppInstanceUserRequest>;
export interface CreateAppInstanceUserResponse {
  AppInstanceUserArn?: string;
}
const CreateAppInstanceUserResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateAppInstanceUserResponse>;
export interface DeleteAppInstanceRequest {
  AppInstanceArn: string;
}
const DeleteAppInstanceRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeleteAppInstanceRequest>;
export interface DeleteAppInstanceResponse {}
const DeleteAppInstanceResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DeleteAppInstanceResponse>;
export interface DeleteAppInstanceAdminRequest {
  AppInstanceAdminArn: string;
  AppInstanceArn: string;
}
const DeleteAppInstanceAdminRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<DeleteAppInstanceAdminRequest>;
export interface DeleteAppInstanceAdminResponse {}
const DeleteAppInstanceAdminResponse =
  DeleteAppInstanceResponse as any as S.Schema<DeleteAppInstanceAdminResponse>;
export interface DeleteAppInstanceBotRequest {
  AppInstanceBotArn: string;
}
const DeleteAppInstanceBotRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<DeleteAppInstanceBotRequest>;
export interface DeleteAppInstanceBotResponse {}
const DeleteAppInstanceBotResponse =
  DeleteAppInstanceResponse as any as S.Schema<DeleteAppInstanceBotResponse>;
export interface DeleteAppInstanceUserRequest {
  AppInstanceUserArn: string;
}
const DeleteAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DeleteAppInstanceUserRequest>;
export interface DeleteAppInstanceUserResponse {}
const DeleteAppInstanceUserResponse =
  DeleteAppInstanceResponse as any as S.Schema<DeleteAppInstanceUserResponse>;
export type String64 = string;
export interface DeregisterAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  EndpointId: string;
}
const DeregisterAppInstanceUserEndpointRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DeregisterAppInstanceUserEndpointRequest>;
export interface DeregisterAppInstanceUserEndpointResponse {}
const DeregisterAppInstanceUserEndpointResponse = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<DeregisterAppInstanceUserEndpointResponse>;
export interface DescribeAppInstanceRequest {
  AppInstanceArn: string;
}
const DescribeAppInstanceRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<DescribeAppInstanceRequest>;
export interface AppInstance {
  AppInstanceArn?: string;
  Name?: string | redacted.Redacted<string>;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  Metadata?: string | redacted.Redacted<string>;
}
const AppInstance = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<AppInstance>;
export interface DescribeAppInstanceResponse {
  AppInstance?: AppInstance;
}
const DescribeAppInstanceResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<DescribeAppInstanceResponse>;
export interface DescribeAppInstanceAdminRequest {
  AppInstanceAdminArn: string;
  AppInstanceArn: string;
}
const DescribeAppInstanceAdminRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<DescribeAppInstanceAdminRequest>;
export interface AppInstanceAdmin {
  Admin?: Identity;
  AppInstanceArn?: string;
  CreatedTimestamp?: Date;
}
const AppInstanceAdmin = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<AppInstanceAdmin>;
export interface DescribeAppInstanceAdminResponse {
  AppInstanceAdmin?: AppInstanceAdmin;
}
const DescribeAppInstanceAdminResponse = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DescribeAppInstanceAdminResponse>;
export interface DescribeAppInstanceBotRequest {
  AppInstanceBotArn: string;
}
const DescribeAppInstanceBotRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DescribeAppInstanceBotRequest>;
export interface AppInstanceBot {
  AppInstanceBotArn?: string;
  Name?: string | redacted.Redacted<string>;
  Configuration?: Configuration;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  Metadata?: string | redacted.Redacted<string>;
}
const AppInstanceBot = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<AppInstanceBot>;
export interface DescribeAppInstanceBotResponse {
  AppInstanceBot?: AppInstanceBot;
}
const DescribeAppInstanceBotResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<DescribeAppInstanceBotResponse>;
export interface DescribeAppInstanceUserRequest {
  AppInstanceUserArn: string;
}
const DescribeAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<DescribeAppInstanceUserRequest>;
export interface AppInstanceUser {
  AppInstanceUserArn?: string;
  Name?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  ExpirationSettings?: ExpirationSettings;
}
const AppInstanceUser = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<AppInstanceUser>;
export interface DescribeAppInstanceUserResponse {
  AppInstanceUser?: AppInstanceUser;
}
const DescribeAppInstanceUserResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DescribeAppInstanceUserResponse>;
export type String1600 = string;
export interface DescribeAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  EndpointId: string;
}
const DescribeAppInstanceUserEndpointRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DescribeAppInstanceUserEndpointRequest>;
export type SensitiveString1600 = string | redacted.Redacted<string>;
export type AppInstanceUserEndpointType = "APNS" | "APNS_SANDBOX" | "GCM" | (string & {});
const AppInstanceUserEndpointType = S.String;

export type NonEmptySensitiveString1600 = string | redacted.Redacted<string>;
export interface EndpointAttributes {
  DeviceToken: string | redacted.Redacted<string>;
  VoipDeviceToken?: string | redacted.Redacted<string>;
}
const EndpointAttributes = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<EndpointAttributes>;
export type AllowMessages = "ALL" | "NONE" | (string & {});
const AllowMessages = S.String;

export type EndpointStatus = "ACTIVE" | "INACTIVE" | (string & {});
const EndpointStatus = S.String;

export type EndpointStatusReason = "INVALID_DEVICE_TOKEN" | "INVALID_PINPOINT_ARN" | (string & {});
const EndpointStatusReason = S.String;

export interface EndpointState {
  Status: EndpointStatus;
  StatusReason?: EndpointStatusReason;
}
const EndpointState = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<EndpointState>;
export interface AppInstanceUserEndpoint {
  AppInstanceUserArn?: string;
  EndpointId?: string;
  Name?: string | redacted.Redacted<string>;
  Type?: AppInstanceUserEndpointType;
  ResourceArn?: string;
  EndpointAttributes?: EndpointAttributes;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  AllowMessages?: AllowMessages;
  EndpointState?: EndpointState;
}
const AppInstanceUserEndpoint = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<AppInstanceUserEndpoint>;
export interface DescribeAppInstanceUserEndpointResponse {
  AppInstanceUserEndpoint?: AppInstanceUserEndpoint;
}
const DescribeAppInstanceUserEndpointResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DescribeAppInstanceUserEndpointResponse>;
export interface GetAppInstanceRetentionSettingsRequest {
  AppInstanceArn: string;
}
const GetAppInstanceRetentionSettingsRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<GetAppInstanceRetentionSettingsRequest>;
export type RetentionDays = number;
export interface ChannelRetentionSettings {
  RetentionDays?: number;
}
const ChannelRetentionSettings = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<ChannelRetentionSettings>;
export interface AppInstanceRetentionSettings {
  ChannelRetentionSettings?: ChannelRetentionSettings;
}
const AppInstanceRetentionSettings = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<AppInstanceRetentionSettings>;
export interface GetAppInstanceRetentionSettingsResponse {
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
  InitiateDeletionTimestamp?: Date;
}
const GetAppInstanceRetentionSettingsResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<GetAppInstanceRetentionSettingsResponse>;
export type MaxResults = number;
export type NextToken = string | redacted.Redacted<string>;
export interface ListAppInstanceAdminsRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceAdminsRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListAppInstanceAdminsRequest>;
export interface AppInstanceAdminSummary {
  Admin?: Identity;
}
const AppInstanceAdminSummary = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<AppInstanceAdminSummary>;
export type AppInstanceAdminList = AppInstanceAdminSummary[];
const AppInstanceAdminList = /*@__PURE__*/ __L.at(__c5, 5);
export interface ListAppInstanceAdminsResponse {
  AppInstanceArn?: string;
  AppInstanceAdmins?: AppInstanceAdminSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceAdminsResponse = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<ListAppInstanceAdminsResponse>;
export interface ListAppInstanceBotsRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceBotsRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<ListAppInstanceBotsRequest>;
export interface AppInstanceBotSummary {
  AppInstanceBotArn?: string;
  Name?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
}
const AppInstanceBotSummary = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<AppInstanceBotSummary>;
export type AppInstanceBotList = AppInstanceBotSummary[];
const AppInstanceBotList = /*@__PURE__*/ __L.at(__c6, 1);
export interface ListAppInstanceBotsResponse {
  AppInstanceArn?: string;
  AppInstanceBots?: AppInstanceBotSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceBotsResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<ListAppInstanceBotsResponse>;
export interface ListAppInstancesRequest {
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstancesRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<ListAppInstancesRequest>;
export interface AppInstanceSummary {
  AppInstanceArn?: string;
  Name?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
}
const AppInstanceSummary = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<AppInstanceSummary>;
export type AppInstanceList = AppInstanceSummary[];
const AppInstanceList = /*@__PURE__*/ __L.at(__c6, 5);
export interface ListAppInstancesResponse {
  AppInstances?: AppInstanceSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstancesResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ListAppInstancesResponse>;
export type SensitiveChimeArn = string | redacted.Redacted<string>;
export interface ListAppInstanceUserEndpointsRequest {
  AppInstanceUserArn: string | redacted.Redacted<string>;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceUserEndpointsRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<ListAppInstanceUserEndpointsRequest>;
export interface AppInstanceUserEndpointSummary {
  AppInstanceUserArn?: string;
  EndpointId?: string;
  Name?: string | redacted.Redacted<string>;
  Type?: AppInstanceUserEndpointType;
  AllowMessages?: AllowMessages;
  EndpointState?: EndpointState;
}
const AppInstanceUserEndpointSummary = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<AppInstanceUserEndpointSummary>;
export type AppInstanceUserEndpointSummaryList = AppInstanceUserEndpointSummary[];
const AppInstanceUserEndpointSummaryList = /*@__PURE__*/ __L.at(__c7, 1);
export interface ListAppInstanceUserEndpointsResponse {
  AppInstanceUserEndpoints?: AppInstanceUserEndpointSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceUserEndpointsResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListAppInstanceUserEndpointsResponse>;
export interface ListAppInstanceUsersRequest {
  AppInstanceArn: string;
  MaxResults?: number;
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceUsersRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListAppInstanceUsersRequest>;
export interface AppInstanceUserSummary {
  AppInstanceUserArn?: string;
  Name?: string | redacted.Redacted<string>;
  Metadata?: string | redacted.Redacted<string>;
}
const AppInstanceUserSummary = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<AppInstanceUserSummary>;
export type AppInstanceUserList = AppInstanceUserSummary[];
const AppInstanceUserList = /*@__PURE__*/ __L.at(__c7, 5);
export interface ListAppInstanceUsersResponse {
  AppInstanceArn?: string;
  AppInstanceUsers?: AppInstanceUserSummary[];
  NextToken?: string | redacted.Redacted<string>;
}
const ListAppInstanceUsersResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<ListAppInstanceUsersResponse>;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutAppInstanceRetentionSettingsRequest {
  AppInstanceArn: string;
  AppInstanceRetentionSettings: AppInstanceRetentionSettings;
}
const PutAppInstanceRetentionSettingsRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<PutAppInstanceRetentionSettingsRequest>;
export interface PutAppInstanceRetentionSettingsResponse {
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;
  InitiateDeletionTimestamp?: Date;
}
const PutAppInstanceRetentionSettingsResponse =
  GetAppInstanceRetentionSettingsResponse as any as S.Schema<PutAppInstanceRetentionSettingsResponse>;
export interface PutAppInstanceUserExpirationSettingsRequest {
  AppInstanceUserArn: string;
  ExpirationSettings?: ExpirationSettings;
}
const PutAppInstanceUserExpirationSettingsRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<PutAppInstanceUserExpirationSettingsRequest>;
export interface PutAppInstanceUserExpirationSettingsResponse {
  AppInstanceUserArn?: string;
  ExpirationSettings?: ExpirationSettings;
}
const PutAppInstanceUserExpirationSettingsResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<PutAppInstanceUserExpirationSettingsResponse>;
export interface RegisterAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string | redacted.Redacted<string>;
  Name?: string | redacted.Redacted<string>;
  Type: AppInstanceUserEndpointType;
  ResourceArn: string;
  EndpointAttributes: EndpointAttributes;
  ClientRequestToken: string;
  AllowMessages?: AllowMessages;
}
const RegisterAppInstanceUserEndpointRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<RegisterAppInstanceUserEndpointRequest>;
export interface RegisterAppInstanceUserEndpointResponse {
  AppInstanceUserArn?: string;
  EndpointId?: string;
}
const RegisterAppInstanceUserEndpointResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<RegisterAppInstanceUserEndpointResponse>;
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAppInstanceResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = (string | redacted.Redacted<string>)[];
const TagKeyList = /*@__PURE__*/ __L.at(__c8, 7);
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: (string | redacted.Redacted<string>)[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAppInstanceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAppInstanceRequest {
  AppInstanceArn: string;
  Name: string | redacted.Redacted<string>;
  Metadata: string | redacted.Redacted<string>;
}
const UpdateAppInstanceRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<UpdateAppInstanceRequest>;
export interface UpdateAppInstanceResponse {
  AppInstanceArn?: string;
}
const UpdateAppInstanceResponse =
  CreateAppInstanceResponse as any as S.Schema<UpdateAppInstanceResponse>;
export interface UpdateAppInstanceBotRequest {
  AppInstanceBotArn: string;
  Name: string | redacted.Redacted<string>;
  Metadata: string | redacted.Redacted<string>;
  Configuration?: Configuration;
}
const UpdateAppInstanceBotRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<UpdateAppInstanceBotRequest>;
export interface UpdateAppInstanceBotResponse {
  AppInstanceBotArn?: string;
}
const UpdateAppInstanceBotResponse =
  CreateAppInstanceBotResponse as any as S.Schema<UpdateAppInstanceBotResponse>;
export interface UpdateAppInstanceUserRequest {
  AppInstanceUserArn: string;
  Name: string | redacted.Redacted<string>;
  Metadata: string | redacted.Redacted<string>;
}
const UpdateAppInstanceUserRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<UpdateAppInstanceUserRequest>;
export interface UpdateAppInstanceUserResponse {
  AppInstanceUserArn?: string;
}
const UpdateAppInstanceUserResponse =
  CreateAppInstanceUserResponse as any as S.Schema<UpdateAppInstanceUserResponse>;
export interface UpdateAppInstanceUserEndpointRequest {
  AppInstanceUserArn: string;
  EndpointId: string;
  Name?: string | redacted.Redacted<string>;
  AllowMessages?: AllowMessages;
}
const UpdateAppInstanceUserEndpointRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<UpdateAppInstanceUserEndpointRequest>;
export interface UpdateAppInstanceUserEndpointResponse {
  AppInstanceUserArn?: string;
  EndpointId?: string;
}
const UpdateAppInstanceUserEndpointResponse =
  RegisterAppInstanceUserEndpointResponse as any as S.Schema<UpdateAppInstanceUserEndpointResponse>;
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

export type CreateAppInstanceError =
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
 * Creates an Amazon Chime SDK messaging `AppInstance` under an AWS account.
 * Only SDK messaging customers use this API. `CreateAppInstance` supports
 * idempotency behavior as described in the AWS API Standard.
 *
 * identity
 */
export const createAppInstance: API.OperationMethod<
  CreateAppInstanceRequest,
  CreateAppInstanceResponse,
  CreateAppInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppInstanceRequest,
  output: CreateAppInstanceResponse,
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
  operationName: "CreateAppInstance",
}));

export type CreateAppInstanceAdminError =
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
 * Promotes an `AppInstanceUser` or `AppInstanceBot` to an
 * `AppInstanceAdmin`. The
 * promoted entity can perform the following actions.
 *
 * - `ChannelModerator` actions across all channels in the
 * `AppInstance`.
 *
 * - `DeleteChannelMessage` actions.
 *
 * Only an `AppInstanceUser` and `AppInstanceBot` can be promoted to an `AppInstanceAdmin`
 * role.
 */
export const createAppInstanceAdmin: API.OperationMethod<
  CreateAppInstanceAdminRequest,
  CreateAppInstanceAdminResponse,
  CreateAppInstanceAdminError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppInstanceAdminRequest,
  output: CreateAppInstanceAdminResponse,
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
  operationName: "CreateAppInstanceAdmin",
}));

export type CreateAppInstanceBotError =
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
 * Creates a bot under an Amazon Chime `AppInstance`. The request consists of a
 * unique `Configuration` and `Name` for that bot.
 */
export const createAppInstanceBot: API.OperationMethod<
  CreateAppInstanceBotRequest,
  CreateAppInstanceBotResponse,
  CreateAppInstanceBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppInstanceBotRequest,
  output: CreateAppInstanceBotResponse,
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
  operationName: "CreateAppInstanceBot",
}));

export type CreateAppInstanceUserError =
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
 * Creates a user under an Amazon Chime `AppInstance`. The request consists of a
 * unique `appInstanceUserId` and `Name` for that user.
 */
export const createAppInstanceUser: API.OperationMethod<
  CreateAppInstanceUserRequest,
  CreateAppInstanceUserResponse,
  CreateAppInstanceUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppInstanceUserRequest,
  output: CreateAppInstanceUserResponse,
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
  operationName: "CreateAppInstanceUser",
}));

export type DeleteAppInstanceError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deletes an `AppInstance` and all associated data asynchronously.
 */
export const deleteAppInstance: API.OperationMethod<
  DeleteAppInstanceRequest,
  DeleteAppInstanceResponse,
  DeleteAppInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppInstanceRequest,
  output: DeleteAppInstanceResponse,
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
  operationName: "DeleteAppInstance",
}));

export type DeleteAppInstanceAdminError =
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
 * Demotes an `AppInstanceAdmin` to an `AppInstanceUser` or
 * `AppInstanceBot`. This action
 * does not delete the user.
 */
export const deleteAppInstanceAdmin: API.OperationMethod<
  DeleteAppInstanceAdminRequest,
  DeleteAppInstanceAdminResponse,
  DeleteAppInstanceAdminError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppInstanceAdminRequest,
  output: DeleteAppInstanceAdminResponse,
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
  operationName: "DeleteAppInstanceAdmin",
}));

export type DeleteAppInstanceBotError =
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
 * Deletes an `AppInstanceBot`.
 */
export const deleteAppInstanceBot: API.OperationMethod<
  DeleteAppInstanceBotRequest,
  DeleteAppInstanceBotResponse,
  DeleteAppInstanceBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppInstanceBotRequest,
  output: DeleteAppInstanceBotResponse,
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
  operationName: "DeleteAppInstanceBot",
}));

export type DeleteAppInstanceUserError =
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
 * Deletes an `AppInstanceUser`.
 */
export const deleteAppInstanceUser: API.OperationMethod<
  DeleteAppInstanceUserRequest,
  DeleteAppInstanceUserResponse,
  DeleteAppInstanceUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppInstanceUserRequest,
  output: DeleteAppInstanceUserResponse,
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
  operationName: "DeleteAppInstanceUser",
}));

export type DeregisterAppInstanceUserEndpointError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Deregisters an `AppInstanceUserEndpoint`.
 */
export const deregisterAppInstanceUserEndpoint: API.OperationMethod<
  DeregisterAppInstanceUserEndpointRequest,
  DeregisterAppInstanceUserEndpointResponse,
  DeregisterAppInstanceUserEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeregisterAppInstanceUserEndpointRequest,
  output: DeregisterAppInstanceUserEndpointResponse,
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
  operationName: "DeregisterAppInstanceUserEndpoint",
}));

export type DescribeAppInstanceError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of an `AppInstance`.
 */
export const describeAppInstance: API.OperationMethod<
  DescribeAppInstanceRequest,
  DescribeAppInstanceResponse,
  DescribeAppInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppInstanceRequest,
  output: DescribeAppInstanceResponse,
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
  operationName: "DescribeAppInstance",
}));

export type DescribeAppInstanceAdminError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of an `AppInstanceAdmin`.
 */
export const describeAppInstanceAdmin: API.OperationMethod<
  DescribeAppInstanceAdminRequest,
  DescribeAppInstanceAdminResponse,
  DescribeAppInstanceAdminError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppInstanceAdminRequest,
  output: DescribeAppInstanceAdminResponse,
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
  operationName: "DescribeAppInstanceAdmin",
}));

export type DescribeAppInstanceBotError =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * The `AppInstanceBot's` information.
 */
export const describeAppInstanceBot: API.OperationMethod<
  DescribeAppInstanceBotRequest,
  DescribeAppInstanceBotResponse,
  DescribeAppInstanceBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppInstanceBotRequest,
  output: DescribeAppInstanceBotResponse,
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
  operationName: "DescribeAppInstanceBot",
}));

export type DescribeAppInstanceUserError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of an `AppInstanceUser`.
 */
export const describeAppInstanceUser: API.OperationMethod<
  DescribeAppInstanceUserRequest,
  DescribeAppInstanceUserResponse,
  DescribeAppInstanceUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppInstanceUserRequest,
  output: DescribeAppInstanceUserResponse,
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
  operationName: "DescribeAppInstanceUser",
}));

export type DescribeAppInstanceUserEndpointError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns the full details of an `AppInstanceUserEndpoint`.
 */
export const describeAppInstanceUserEndpoint: API.OperationMethod<
  DescribeAppInstanceUserEndpointRequest,
  DescribeAppInstanceUserEndpointResponse,
  DescribeAppInstanceUserEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppInstanceUserEndpointRequest,
  output: DescribeAppInstanceUserEndpointResponse,
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
  operationName: "DescribeAppInstanceUserEndpoint",
}));

export type GetAppInstanceRetentionSettingsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Gets the retention settings for an `AppInstance`.
 */
export const getAppInstanceRetentionSettings: API.OperationMethod<
  GetAppInstanceRetentionSettingsRequest,
  GetAppInstanceRetentionSettingsResponse,
  GetAppInstanceRetentionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAppInstanceRetentionSettingsRequest,
  output: GetAppInstanceRetentionSettingsResponse,
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
  operationName: "GetAppInstanceRetentionSettings",
}));

export type ListAppInstanceAdminsError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Returns a list of the administrators in the `AppInstance`.
 */
export const listAppInstanceAdmins: API.PaginatedOperationMethod<
  ListAppInstanceAdminsRequest,
  ListAppInstanceAdminsResponse,
  ListAppInstanceAdminsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppInstanceAdminsRequest,
  output: ListAppInstanceAdminsResponse,
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
  operationName: "ListAppInstanceAdmins",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAppInstanceBotsError =
  | BadRequestException
  | ForbiddenException
  | ResourceLimitExceededException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all `AppInstanceBots` created under a single `AppInstance`.
 */
export const listAppInstanceBots: API.PaginatedOperationMethod<
  ListAppInstanceBotsRequest,
  ListAppInstanceBotsResponse,
  ListAppInstanceBotsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppInstanceBotsRequest,
  output: ListAppInstanceBotsResponse,
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
  operationName: "ListAppInstanceBots",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAppInstancesError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all Amazon Chime `AppInstance`s created under a single AWS
 * account.
 */
export const listAppInstances: API.PaginatedOperationMethod<
  ListAppInstancesRequest,
  ListAppInstancesResponse,
  ListAppInstancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppInstancesRequest,
  output: ListAppInstancesResponse,
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
  operationName: "ListAppInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAppInstanceUserEndpointsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Lists all the `AppInstanceUserEndpoints` created under a single `AppInstanceUser`.
 */
export const listAppInstanceUserEndpoints: API.PaginatedOperationMethod<
  ListAppInstanceUserEndpointsRequest,
  ListAppInstanceUserEndpointsResponse,
  ListAppInstanceUserEndpointsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppInstanceUserEndpointsRequest,
  output: ListAppInstanceUserEndpointsResponse,
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
  operationName: "ListAppInstanceUserEndpoints",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAppInstanceUsersError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * List all `AppInstanceUsers` created under a single
 * `AppInstance`.
 */
export const listAppInstanceUsers: API.PaginatedOperationMethod<
  ListAppInstanceUsersRequest,
  ListAppInstanceUsersResponse,
  ListAppInstanceUsersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppInstanceUsersRequest,
  output: ListAppInstanceUsersResponse,
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
  operationName: "ListAppInstanceUsers",
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
 * Lists the tags applied to an Amazon Chime SDK identity resource.
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

export type PutAppInstanceRetentionSettingsError =
  | BadRequestException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Sets the amount of time in days that a given `AppInstance` retains
 * data.
 */
export const putAppInstanceRetentionSettings: API.OperationMethod<
  PutAppInstanceRetentionSettingsRequest,
  PutAppInstanceRetentionSettingsResponse,
  PutAppInstanceRetentionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAppInstanceRetentionSettingsRequest,
  output: PutAppInstanceRetentionSettingsResponse,
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
  operationName: "PutAppInstanceRetentionSettings",
}));

export type PutAppInstanceUserExpirationSettingsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Sets the number of days before the `AppInstanceUser` is automatically deleted.
 *
 * A background process deletes expired `AppInstanceUsers` within 6 hours of expiration.
 * Actual deletion times may vary.
 *
 * Expired `AppInstanceUsers` that have not yet been deleted appear as active, and you can update
 * their expiration settings. The system honors the new settings.
 */
export const putAppInstanceUserExpirationSettings: API.OperationMethod<
  PutAppInstanceUserExpirationSettingsRequest,
  PutAppInstanceUserExpirationSettingsResponse,
  PutAppInstanceUserExpirationSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAppInstanceUserExpirationSettingsRequest,
  output: PutAppInstanceUserExpirationSettingsResponse,
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
  operationName: "PutAppInstanceUserExpirationSettings",
}));

export type RegisterAppInstanceUserEndpointError =
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
 * Registers an endpoint under an Amazon Chime `AppInstanceUser`. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.
 */
export const registerAppInstanceUserEndpoint: API.OperationMethod<
  RegisterAppInstanceUserEndpointRequest,
  RegisterAppInstanceUserEndpointResponse,
  RegisterAppInstanceUserEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterAppInstanceUserEndpointRequest,
  output: RegisterAppInstanceUserEndpointResponse,
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
  operationName: "RegisterAppInstanceUserEndpoint",
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
 * Applies the specified tags to the specified Amazon Chime SDK identity resource.
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
 * Removes the specified tags from the specified Amazon Chime SDK identity resource.
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

export type UpdateAppInstanceError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates `AppInstance` metadata.
 */
export const updateAppInstance: API.OperationMethod<
  UpdateAppInstanceRequest,
  UpdateAppInstanceResponse,
  UpdateAppInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppInstanceRequest,
  output: UpdateAppInstanceResponse,
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
  operationName: "UpdateAppInstance",
}));

export type UpdateAppInstanceBotError =
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
 * Updates the name and metadata of an `AppInstanceBot`.
 */
export const updateAppInstanceBot: API.OperationMethod<
  UpdateAppInstanceBotRequest,
  UpdateAppInstanceBotResponse,
  UpdateAppInstanceBotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppInstanceBotRequest,
  output: UpdateAppInstanceBotResponse,
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
  operationName: "UpdateAppInstanceBot",
}));

export type UpdateAppInstanceUserError =
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
 * Updates the details of an `AppInstanceUser`. You can update names and
 * metadata.
 */
export const updateAppInstanceUser: API.OperationMethod<
  UpdateAppInstanceUserRequest,
  UpdateAppInstanceUserResponse,
  UpdateAppInstanceUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppInstanceUserRequest,
  output: UpdateAppInstanceUserResponse,
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
  operationName: "UpdateAppInstanceUser",
}));

export type UpdateAppInstanceUserEndpointError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | ServiceFailureException
  | ServiceUnavailableException
  | ThrottledClientException
  | UnauthorizedClientException
  | CommonErrors;
/**
 * Updates the details of an `AppInstanceUserEndpoint`. You can update the name and `AllowMessage` values.
 */
export const updateAppInstanceUserEndpoint: API.OperationMethod<
  UpdateAppInstanceUserEndpointRequest,
  UpdateAppInstanceUserEndpointResponse,
  UpdateAppInstanceUserEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppInstanceUserEndpointRequest,
  output: UpdateAppInstanceUserEndpointResponse,
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
  operationName: "UpdateAppInstanceUserEndpoint",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: SensitiveString,
          Metadata: S.optional(SensitiveString),
          ClientRequestToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/app-instances" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateAppInstanceRequest" });
    case 3:
      return S.suspend(() => S.Struct({ AppInstanceArn: S.optional(S.String) })).annotate({
        identifier: "CreateAppInstanceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceAdminArn: S.String,
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/app-instances/{AppInstanceArn}/admins" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAppInstanceAdminRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(SensitiveString) }),
      ).annotate({ identifier: "Identity" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AppInstanceAdmin: S.optional(Identity), AppInstanceArn: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateAppInstanceAdminResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ StandardMessages: StandardMessages, TargetedMessages: TargetedMessages }),
      ).annotate({ identifier: "InvokedBy" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RespondsTo: S.optional(RespondsTo),
          InvokedBy: S.optional(InvokedBy),
          LexBotAliasArn: S.String,
          LocaleId: S.String,
          WelcomeIntent: S.optional(S.String),
        }),
      ).annotate({ identifier: "LexConfiguration" });
    case 1:
      return S.suspend(() => S.Struct({ Lex: LexConfiguration })).annotate({
        identifier: "Configuration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String,
          Name: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
          ClientRequestToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
          Configuration: Configuration,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/app-instance-bots" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAppInstanceBotRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ AppInstanceBotArn: S.optional(S.String) })).annotate({
        identifier: "CreateAppInstanceBotResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ExpirationDays: S.Number, ExpirationCriterion: ExpirationCriterion }),
      ).annotate({ identifier: "ExpirationSettings" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String,
          AppInstanceUserId: SensitiveString,
          Name: SensitiveString,
          Metadata: S.optional(SensitiveString),
          ClientRequestToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
          ExpirationSettings: S.optional(ExpirationSettings),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/app-instance-users" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAppInstanceUserRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ AppInstanceUserArn: S.optional(S.String) })).annotate({
        identifier: "CreateAppInstanceUserResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/app-instances/{AppInstanceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteAppInstanceRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAppInstanceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppInstanceAdminArn: S.String.pipe(T.HttpLabel("AppInstanceAdminArn")),
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppInstanceAdminRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AppInstanceBotArn: S.String.pipe(T.HttpLabel("AppInstanceBotArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/app-instance-bots/{AppInstanceBotArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppInstanceBotRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/app-instance-users/{AppInstanceUserArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAppInstanceUserRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterAppInstanceUserEndpointRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeregisterAppInstanceUserEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instances/{AppInstanceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppInstanceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Metadata: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AppInstance" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AppInstance: S.optional(AppInstance) })).annotate({
        identifier: "DescribeAppInstanceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppInstanceAdminArn: S.String.pipe(T.HttpLabel("AppInstanceAdminArn")),
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppInstanceAdminRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Admin: S.optional(Identity),
          AppInstanceArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AppInstanceAdmin" });
    case 3:
      return S.suspend(() => S.Struct({ AppInstanceAdmin: S.optional(AppInstanceAdmin) })).annotate(
        {
          identifier: "DescribeAppInstanceAdminResponse",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({ AppInstanceBotArn: S.String.pipe(T.HttpLabel("AppInstanceBotArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instance-bots/{AppInstanceBotArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppInstanceBotRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AppInstanceBotArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Configuration: S.optional(Configuration),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Metadata: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AppInstanceBot" });
    case 6:
      return S.suspend(() => S.Struct({ AppInstanceBot: S.optional(AppInstanceBot) })).annotate({
        identifier: "DescribeAppInstanceBotResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instance-users/{AppInstanceUserArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppInstanceUserRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ExpirationSettings: S.optional(ExpirationSettings),
        }),
      ).annotate({ identifier: "AppInstanceUser" });
    case 1:
      return S.suspend(() => S.Struct({ AppInstanceUser: S.optional(AppInstanceUser) })).annotate({
        identifier: "DescribeAppInstanceUserResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAppInstanceUserEndpointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DeviceToken: SensitiveString, VoipDeviceToken: S.optional(SensitiveString) }),
      ).annotate({ identifier: "EndpointAttributes" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Status: EndpointStatus, StatusReason: S.optional(EndpointStatusReason) }),
      ).annotate({ identifier: "EndpointState" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Type: S.optional(AppInstanceUserEndpointType),
          ResourceArn: S.optional(S.String),
          EndpointAttributes: S.optional(EndpointAttributes),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AllowMessages: S.optional(AllowMessages),
          EndpointState: S.optional(EndpointState),
        }),
      ).annotate({ identifier: "AppInstanceUserEndpoint" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AppInstanceUserEndpoint: S.optional(AppInstanceUserEndpoint) }),
      ).annotate({
        identifier: "DescribeAppInstanceUserEndpointResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instances/{AppInstanceArn}/retention-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAppInstanceRetentionSettingsRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ RetentionDays: S.optional(S.Number) })).annotate({
        identifier: "ChannelRetentionSettings",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ChannelRetentionSettings: S.optional(ChannelRetentionSettings) }),
      ).annotate({
        identifier: "AppInstanceRetentionSettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceRetentionSettings: S.optional(AppInstanceRetentionSettings),
          InitiateDeletionTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetAppInstanceRetentionSettingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instances/{AppInstanceArn}/admins" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppInstanceAdminsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ Admin: S.optional(Identity) })).annotate({
        identifier: "AppInstanceAdminSummary",
      });
    case 5:
      return S.Array(AppInstanceAdminSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.optional(S.String),
          AppInstanceAdmins: S.optional(AppInstanceAdminList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListAppInstanceAdminsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpQuery("app-instance-arn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/app-instance-bots" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAppInstanceBotsRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AppInstanceBotArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AppInstanceBotSummary" });
    case 1:
      return S.Array(AppInstanceBotSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.optional(S.String),
          AppInstanceBots: S.optional(AppInstanceBotList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListAppInstanceBotsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/app-instances" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAppInstancesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AppInstanceSummary" });
    case 5:
      return S.Array(AppInstanceSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppInstances: S.optional(AppInstanceList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "ListAppInstancesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: SensitiveString.pipe(T.HttpLabel("AppInstanceUserArn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instance-users/{AppInstanceUserArn}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppInstanceUserEndpointsRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String),
          EndpointId: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Type: S.optional(AppInstanceUserEndpointType),
          AllowMessages: S.optional(AllowMessages),
          EndpointState: S.optional(EndpointState),
        }),
      ).annotate({
        identifier: "AppInstanceUserEndpointSummary",
      });
    case 1:
      return S.Array(AppInstanceUserEndpointSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserEndpoints: S.optional(AppInstanceUserEndpointSummaryList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListAppInstanceUserEndpointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpQuery("app-instance-arn")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("max-results")),
          NextToken: S.optional(SensitiveString).pipe(T.HttpQuery("next-token")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/app-instance-users" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAppInstanceUsersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String),
          Name: S.optional(SensitiveString),
          Metadata: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "AppInstanceUserSummary" });
    case 5:
      return S.Array(AppInstanceUserSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.optional(S.String),
          AppInstanceUsers: S.optional(AppInstanceUserList),
          NextToken: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "ListAppInstanceUsersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
          AppInstanceRetentionSettings: AppInstanceRetentionSettings,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/app-instances/{AppInstanceArn}/retention-settings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAppInstanceRetentionSettingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")),
          ExpirationSettings: S.optional(ExpirationSettings),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/app-instance-users/{AppInstanceUserArn}/expiration-settings",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutAppInstanceUserExpirationSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.optional(S.String),
          ExpirationSettings: S.optional(ExpirationSettings),
        }),
      ).annotate({
        identifier: "PutAppInstanceUserExpirationSettingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: SensitiveString.pipe(T.HttpLabel("AppInstanceUserArn")),
          Name: S.optional(SensitiveString),
          Type: AppInstanceUserEndpointType,
          ResourceArn: S.String,
          EndpointAttributes: EndpointAttributes,
          ClientRequestToken: S.String.pipe(T.IdempotencyToken()),
          AllowMessages: S.optional(AllowMessages),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/app-instance-users/{AppInstanceUserArn}/endpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterAppInstanceUserEndpointRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AppInstanceUserArn: S.optional(S.String), EndpointId: S.optional(S.String) }),
      ).annotate({
        identifier: "RegisterAppInstanceUserEndpointResponse",
      });
    case 6:
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
    case 7:
      return S.Array(SensitiveString);
  }
}
function __c9(j: number): any {
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
          AppInstanceArn: S.String.pipe(T.HttpLabel("AppInstanceArn")),
          Name: SensitiveString,
          Metadata: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/app-instances/{AppInstanceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateAppInstanceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AppInstanceBotArn: S.String.pipe(T.HttpLabel("AppInstanceBotArn")),
          Name: SensitiveString,
          Metadata: SensitiveString,
          Configuration: S.optional(Configuration),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/app-instance-bots/{AppInstanceBotArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAppInstanceBotRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")),
          Name: SensitiveString,
          Metadata: SensitiveString,
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/app-instance-users/{AppInstanceUserArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAppInstanceUserRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AppInstanceUserArn: S.String.pipe(T.HttpLabel("AppInstanceUserArn")),
          EndpointId: S.String.pipe(T.HttpLabel("EndpointId")),
          Name: S.optional(SensitiveString),
          AllowMessages: S.optional(AllowMessages),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAppInstanceUserEndpointRequest",
      });
  }
}
