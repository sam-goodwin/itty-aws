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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://sns.amazonaws.com/doc/2010-03-31/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "SNS",
  serviceShapeName: "AmazonSimpleNotificationService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "sns" });
const ver = /*@__PURE__*/ T.ServiceVersion("2010-03-31");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
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
              `https://sns-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (Region === "us-gov-east-1") {
              return e("https://sns.us-gov-east-1.amazonaws.com");
            }
            if (Region === "us-gov-west-1") {
              return e("https://sns.us-gov-west-1.amazonaws.com");
            }
            return e(`https://sns-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://sns.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://sns.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AuthorizationErrorException
  extends /*@__PURE__*/ S.TaggedError<AuthorizationErrorException>()(
    "AuthorizationErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AuthorizationError", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class BatchEntryIdsNotDistinctException
  extends /*@__PURE__*/ S.TaggedError<BatchEntryIdsNotDistinctException>()(
    "BatchEntryIdsNotDistinctException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "BatchEntryIdsNotDistinct", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class BatchRequestTooLongException
  extends /*@__PURE__*/ S.TaggedError<BatchRequestTooLongException>()(
    "BatchRequestTooLongException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "BatchRequestTooLong", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ConcurrentAccessException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentAccessException>()(
    "ConcurrentAccessException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConcurrentAccess", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EmptyBatchRequestException
  extends /*@__PURE__*/ S.TaggedError<EmptyBatchRequestException>()(
    "EmptyBatchRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "EmptyBatchRequest", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EndpointDisabledException
  extends /*@__PURE__*/ S.TaggedError<EndpointDisabledException>()(
    "EndpointDisabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "EndpointDisabled", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class FilterPolicyLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<FilterPolicyLimitExceededException>()(
    "FilterPolicyLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "FilterPolicyLimitExceeded", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InternalErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalErrorException>()(
    "InternalErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalError", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class InvalidBatchEntryIdException
  extends /*@__PURE__*/ S.TaggedError<InvalidBatchEntryIdException>()(
    "InvalidBatchEntryIdException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidBatchEntryId", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidClientTokenId
  extends /*@__PURE__*/ S.TaggedError<InvalidClientTokenId>()("InvalidClientTokenId", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidParameter", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValueException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValueException>()(
    "InvalidParameterValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ParameterValueInvalid", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSecurityException
  extends /*@__PURE__*/ S.TaggedError<InvalidSecurityException>()(
    "InvalidSecurityException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSecurity", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class InvalidStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateException>()(
    "InvalidStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class KMSAccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<KMSAccessDeniedException>()(
    "KMSAccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSAccessDenied", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAuthError) {}
export class KMSDisabledException
  extends /*@__PURE__*/ S.TaggedError<KMSDisabledException>()(
    "KMSDisabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSDisabled", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class KMSInvalidStateException
  extends /*@__PURE__*/ S.TaggedError<KMSInvalidStateException>()(
    "KMSInvalidStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSInvalidState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class KMSNotFoundException
  extends /*@__PURE__*/ S.TaggedError<KMSNotFoundException>()(
    "KMSNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSNotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class KMSOptInRequired
  extends /*@__PURE__*/ S.TaggedError<KMSOptInRequired>()(
    "KMSOptInRequired",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSOptInRequired", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class KMSThrottlingException
  extends /*@__PURE__*/ S.TaggedError<KMSThrottlingException>()(
    "KMSThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "KMSThrottling", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "NotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class OptedOutException
  extends /*@__PURE__*/ S.TaggedError<OptedOutException>()(
    "OptedOutException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "OptedOut", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class PlatformApplicationDisabledException
  extends /*@__PURE__*/ S.TaggedError<PlatformApplicationDisabledException>()(
    "PlatformApplicationDisabledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "PlatformApplicationDisabled", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReplayLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ReplayLimitExceededException>()(
    "ReplayLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ReplayLimitExceeded", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class RequestLimitExceeded
  extends /*@__PURE__*/ S.TaggedError<RequestLimitExceeded>()("RequestLimitExceeded", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFound", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class StaleTagException
  extends /*@__PURE__*/ S.TaggedError<StaleTagException>()(
    "StaleTagException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "StaleTag", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class SubscriptionLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<SubscriptionLimitExceededException>()(
    "SubscriptionLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "SubscriptionLimitExceeded", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class TagLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<TagLimitExceededException>()(
    "TagLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TagLimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TagPolicyException
  extends /*@__PURE__*/ S.TaggedError<TagPolicyException>()(
    "TagPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TagPolicy", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ThrottledException
  extends /*@__PURE__*/ S.TaggedError<ThrottledException>()(
    "ThrottledException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "Throttled", httpResponseCode: 429 }),
      /*@__PURE__*/ T.HttpError(429),
    ),
  ).pipe(C.withThrottlingError) {}
export class TooManyEntriesInBatchRequestException
  extends /*@__PURE__*/ S.TaggedError<TooManyEntriesInBatchRequestException>()(
    "TooManyEntriesInBatchRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TooManyEntriesInBatchRequest",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TopicLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<TopicLimitExceededException>()(
    "TopicLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TopicLimitExceeded", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class UserErrorException
  extends /*@__PURE__*/ S.TaggedError<UserErrorException>()(
    "UserErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "UserError", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ValidationException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class VerificationException
  extends /*@__PURE__*/ S.TaggedError<VerificationException>()("VerificationException", {
    message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
    Status: S.String,
  }) {}
export type TopicARN = string;
export type Label = string;
export type Delegate = string;
export type DelegatesList = string[];
export type Action = string;
export type ActionsList = string[];
export interface AddPermissionInput {
  TopicArn: string;
  Label: string;
  AWSAccountId: string[];
  ActionName: string[];
}
export interface AddPermissionResponse {}
export type PhoneNumber = string | redacted.Redacted<string>;
export interface CheckIfPhoneNumberIsOptedOutInput {
  phoneNumber: string | redacted.Redacted<string>;
}
export interface CheckIfPhoneNumberIsOptedOutResponse {
  isOptedOut?: boolean;
}
export type Token = string;
export type AuthenticateOnUnsubscribe = string;
export interface ConfirmSubscriptionInput {
  TopicArn: string;
  Token: string;
  AuthenticateOnUnsubscribe?: string;
}
export type SubscriptionARN = string;
export interface ConfirmSubscriptionResponse {
  SubscriptionArn?: string;
}
export type MapStringToString = { [key: string]: string | undefined };
export interface CreatePlatformApplicationInput {
  Name: string;
  Platform: string;
  Attributes: { [key: string]: string | undefined };
}
export interface CreatePlatformApplicationResponse {
  PlatformApplicationArn?: string;
}
export interface CreatePlatformEndpointInput {
  PlatformApplicationArn: string;
  Token: string;
  CustomUserData?: string;
  Attributes?: { [key: string]: string | undefined };
}
export interface CreateEndpointResponse {
  EndpointArn?: string;
}
export type PhoneNumberString = string | redacted.Redacted<string>;
export type LanguageCodeString =
  | "en-US"
  | "en-GB"
  | "es-419"
  | "es-ES"
  | "de-DE"
  | "fr-CA"
  | "fr-FR"
  | "it-IT"
  | "ja-JP"
  | "pt-BR"
  | "kr-KR"
  | "zh-CN"
  | "zh-TW"
  | (string & {});
export interface CreateSMSSandboxPhoneNumberInput {
  PhoneNumber: string | redacted.Redacted<string>;
  LanguageCode?: LanguageCodeString;
}
export interface CreateSMSSandboxPhoneNumberResult {}
export type TopicName = string;
export type AttributeName = string;
export type AttributeValue = string;
export type TopicAttributesMap = { [key: string]: string | undefined };
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateTopicInput {
  Name: string;
  Attributes?: { [key: string]: string | undefined };
  Tags?: Tag[];
  DataProtectionPolicy?: string;
}
export interface CreateTopicResponse {
  TopicArn?: string;
}
export interface DeleteEndpointInput {
  EndpointArn: string;
}
export interface DeleteEndpointResponse {}
export interface DeletePlatformApplicationInput {
  PlatformApplicationArn: string;
}
export interface DeletePlatformApplicationResponse {}
export interface DeleteSMSSandboxPhoneNumberInput {
  PhoneNumber: string | redacted.Redacted<string>;
}
export interface DeleteSMSSandboxPhoneNumberResult {}
export interface DeleteTopicInput {
  TopicArn: string;
}
export interface DeleteTopicResponse {}
export interface GetDataProtectionPolicyInput {
  ResourceArn: string;
}
export interface GetDataProtectionPolicyResponse {
  DataProtectionPolicy?: string;
}
export interface GetEndpointAttributesInput {
  EndpointArn: string;
}
export interface GetEndpointAttributesResponse {
  Attributes?: { [key: string]: string | undefined };
}
export interface GetPlatformApplicationAttributesInput {
  PlatformApplicationArn: string;
}
export interface GetPlatformApplicationAttributesResponse {
  Attributes?: { [key: string]: string | undefined };
}
export type ListString = string[];
export interface GetSMSAttributesInput {
  attributes?: string[];
}
export interface GetSMSAttributesResponse {
  attributes?: { [key: string]: string | undefined };
}
export interface GetSMSSandboxAccountStatusInput {}
export interface GetSMSSandboxAccountStatusResult {
  IsInSandbox: boolean;
}
export interface GetSubscriptionAttributesInput {
  SubscriptionArn: string;
}
export type SubscriptionAttributesMap = { [key: string]: string | undefined };
export interface GetSubscriptionAttributesResponse {
  Attributes?: { [key: string]: string | undefined };
}
export interface GetTopicAttributesInput {
  TopicArn: string;
}
export interface GetTopicAttributesResponse {
  Attributes?: { [key: string]: string | undefined };
}
export interface ListEndpointsByPlatformApplicationInput {
  PlatformApplicationArn: string;
  NextToken?: string;
}
export interface Endpoint {
  EndpointArn?: string;
  Attributes?: { [key: string]: string | undefined };
}
const Endpoint = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<Endpoint>;
export type ListOfEndpoints = Endpoint[];
export interface ListEndpointsByPlatformApplicationResponse {
  Endpoints?: Endpoint[];
  NextToken?: string;
}
export type NextToken = string;
export type MaxItemsListOriginationNumbers = number;
export interface ListOriginationNumbersRequest {
  NextToken?: string;
  MaxResults?: number;
}
export type Iso2CountryCode = string;
export type RouteType = "Transactional" | "Promotional" | "Premium" | (string & {});
export type NumberCapability = "SMS" | "MMS" | "VOICE" | (string & {});
export type NumberCapabilityList = NumberCapability[];
export interface PhoneNumberInformation {
  CreatedAt?: Date;
  PhoneNumber?: string | redacted.Redacted<string>;
  Status?: string;
  Iso2CountryCode?: string;
  RouteType?: RouteType;
  NumberCapabilities?: NumberCapability[];
}
export type PhoneNumberInformationList = PhoneNumberInformation[];
export interface ListOriginationNumbersResult {
  NextToken?: string;
  PhoneNumbers?: PhoneNumberInformation[];
}
export interface ListPhoneNumbersOptedOutInput {
  nextToken?: string;
}
export type PhoneNumberList = (string | redacted.Redacted<string>)[];
export interface ListPhoneNumbersOptedOutResponse {
  phoneNumbers?: (string | redacted.Redacted<string>)[];
  nextToken?: string;
}
export interface ListPlatformApplicationsInput {
  NextToken?: string;
}
export interface PlatformApplication {
  PlatformApplicationArn?: string;
  Attributes?: { [key: string]: string | undefined };
}
export type ListOfPlatformApplications = PlatformApplication[];
export interface ListPlatformApplicationsResponse {
  PlatformApplications?: PlatformApplication[];
  NextToken?: string;
}
export type MaxItems = number;
export interface ListSMSSandboxPhoneNumbersInput {
  NextToken?: string;
  MaxResults?: number;
}
export type SMSSandboxPhoneNumberVerificationStatus = "Pending" | "Verified" | (string & {});
export interface SMSSandboxPhoneNumber {
  PhoneNumber?: string | redacted.Redacted<string>;
  Status?: SMSSandboxPhoneNumberVerificationStatus;
}
export type SMSSandboxPhoneNumberList = SMSSandboxPhoneNumber[];
export interface ListSMSSandboxPhoneNumbersResult {
  PhoneNumbers: SMSSandboxPhoneNumber[];
  NextToken?: string;
}
export interface ListSubscriptionsInput {
  NextToken?: string;
}
export type Account = string;
export type Protocol = string;
export type Endpoint2 = string;
export interface Subscription {
  SubscriptionArn?: string;
  Owner?: string;
  Protocol?: string;
  Endpoint?: string;
  TopicArn?: string;
}
export type SubscriptionsList = Subscription[];
export interface ListSubscriptionsResponse {
  Subscriptions?: Subscription[];
  NextToken?: string;
}
export interface ListSubscriptionsByTopicInput {
  TopicArn: string;
  NextToken?: string;
}
export interface ListSubscriptionsByTopicResponse {
  Subscriptions?: Subscription[];
  NextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface ListTopicsInput {
  NextToken?: string;
}
export interface Topic {
  TopicArn?: string;
}
export type TopicsList = Topic[];
export interface ListTopicsResponse {
  Topics?: Topic[];
  NextToken?: string;
}
export interface OptInPhoneNumberInput {
  phoneNumber: string | redacted.Redacted<string>;
}
export interface OptInPhoneNumberResponse {}
export type Message = string;
export type Subject = string;
export type MessageStructure = string;
export type Binary = Uint8Array;
export interface MessageAttributeValue {
  DataType: string;
  StringValue?: string;
  BinaryValue?: Uint8Array;
}
export type MessageAttributeMap = { [key: string]: MessageAttributeValue | undefined };
export interface PublishInput {
  TopicArn?: string;
  TargetArn?: string;
  PhoneNumber?: string | redacted.Redacted<string>;
  Message: string;
  Subject?: string;
  MessageStructure?: string;
  MessageAttributes?: { [key: string]: MessageAttributeValue | undefined };
  MessageDeduplicationId?: string;
  MessageGroupId?: string;
}
export type MessageId = string;
export interface PublishResponse {
  MessageId?: string;
  SequenceNumber?: string;
}
export interface PublishBatchRequestEntry {
  Id: string;
  Message: string;
  Subject?: string;
  MessageStructure?: string;
  MessageAttributes?: { [key: string]: MessageAttributeValue | undefined };
  MessageDeduplicationId?: string;
  MessageGroupId?: string;
}
export type PublishBatchRequestEntryList = PublishBatchRequestEntry[];
export interface PublishBatchInput {
  TopicArn: string;
  PublishBatchRequestEntries: PublishBatchRequestEntry[];
}
export interface PublishBatchResultEntry {
  Id?: string;
  MessageId?: string;
  SequenceNumber?: string;
}
export type PublishBatchResultEntryList = PublishBatchResultEntry[];
export interface BatchResultErrorEntry {
  Id: string;
  Code: string;
  Message?: string;
  SenderFault: boolean;
}
export type BatchResultErrorEntryList = BatchResultErrorEntry[];
export interface PublishBatchResponse {
  Successful?: PublishBatchResultEntry[];
  Failed?: BatchResultErrorEntry[];
}
export interface PutDataProtectionPolicyInput {
  ResourceArn: string;
  DataProtectionPolicy: string;
}
export interface PutDataProtectionPolicyResponse {}
export interface RemovePermissionInput {
  TopicArn: string;
  Label: string;
}
export interface RemovePermissionResponse {}
export interface SetEndpointAttributesInput {
  EndpointArn: string;
  Attributes: { [key: string]: string | undefined };
}
export interface SetEndpointAttributesResponse {}
export interface SetPlatformApplicationAttributesInput {
  PlatformApplicationArn: string;
  Attributes: { [key: string]: string | undefined };
}
export interface SetPlatformApplicationAttributesResponse {}
export interface SetSMSAttributesInput {
  attributes: { [key: string]: string | undefined };
}
export interface SetSMSAttributesResponse {}
export interface SetSubscriptionAttributesInput {
  SubscriptionArn: string;
  AttributeName: string;
  AttributeValue?: string;
}
export interface SetSubscriptionAttributesResponse {}
export interface SetTopicAttributesInput {
  TopicArn: string;
  AttributeName: string;
  AttributeValue?: string;
}
export interface SetTopicAttributesResponse {}
export interface SubscribeInput {
  TopicArn: string;
  Protocol: string;
  Endpoint?: string;
  Attributes?: { [key: string]: string | undefined };
  ReturnSubscriptionArn?: boolean;
}
export interface SubscribeResponse {
  SubscriptionArn?: string;
}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export interface UnsubscribeInput {
  SubscriptionArn: string;
}
export interface UnsubscribeResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type OTPCode = string;
export interface VerifySMSSandboxPhoneNumberInput {
  PhoneNumber: string | redacted.Redacted<string>;
  OneTimePassword: string;
}
export interface VerifySMSSandboxPhoneNumberResult {}
export type AddPermissionError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Adds a statement to a topic's access control policy, granting access for the specified
 * Amazon Web Services accounts to the specified actions.
 *
 * To remove the ability to change topic permissions, you must deny permissions to
 * the `AddPermission`, `RemovePermission`, and
 * `SetTopicAttributes` actions in your IAM policy.
 */
export const addPermission: API.OperationMethod<
  AddPermissionInput,
  AddPermissionResponse,
  AddPermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AddPermissionInput>,
  output: __S(3) as any as S.Schema<AddPermissionResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddPermission",
}));

export type CheckIfPhoneNumberIsOptedOutError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ThrottledException
  | CommonErrors;
/**
 * Accepts a phone number and indicates whether the phone holder has opted out of
 * receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number
 * that is opted out.
 *
 * To resume sending messages, you can opt in the number by using the
 * `OptInPhoneNumber` action.
 */
export const checkIfPhoneNumberIsOptedOut: API.OperationMethod<
  CheckIfPhoneNumberIsOptedOutInput,
  CheckIfPhoneNumberIsOptedOutResponse,
  CheckIfPhoneNumberIsOptedOutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CheckIfPhoneNumberIsOptedOutInput>,
  output: __S(5) as any as S.Schema<CheckIfPhoneNumberIsOptedOutResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckIfPhoneNumberIsOptedOut",
}));

export type ConfirmSubscriptionError =
  | AuthorizationErrorException
  | FilterPolicyLimitExceededException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ReplayLimitExceededException
  | SubscriptionLimitExceededException
  | CommonErrors;
/**
 * Verifies an endpoint owner's intent to receive messages by validating the token sent
 * to the endpoint by an earlier `Subscribe` action. If the token is valid, the
 * action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 * requires an AWS signature only when the `AuthenticateOnUnsubscribe` flag is
 * set to "true".
 */
export const confirmSubscription: API.OperationMethod<
  ConfirmSubscriptionInput,
  ConfirmSubscriptionResponse,
  ConfirmSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<ConfirmSubscriptionInput>,
  output: __S(7) as any as S.Schema<ConfirmSubscriptionResponse>,
  errors: [
    AuthorizationErrorException,
    FilterPolicyLimitExceededException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ReplayLimitExceededException,
    SubscriptionLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConfirmSubscription",
}));

export type CreatePlatformApplicationError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | CommonErrors;
/**
 * Creates a platform application object for one of the supported push notification
 * services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile
 * apps may register. You must specify `PlatformPrincipal` and
 * `PlatformCredential` attributes when using the
 * `CreatePlatformApplication` action.
 *
 * `PlatformPrincipal` and `PlatformCredential` are received from
 * the notification service.
 *
 * - For ADM, `PlatformPrincipal` is `client id` and
 * `PlatformCredential` is `client secret`.
 *
 * - For APNS and `APNS_SANDBOX` using certificate credentials,
 * `PlatformPrincipal` is `SSL certificate` and
 * `PlatformCredential` is `private key`.
 *
 * - For APNS and `APNS_SANDBOX` using token credentials,
 * `PlatformPrincipal` is `signing key ID` and
 * `PlatformCredential` is `signing key`.
 *
 * - For Baidu, `PlatformPrincipal` is `API key` and
 * `PlatformCredential` is `secret key`.
 *
 * - For GCM (Firebase Cloud Messaging) using key credentials, there is no
 * `PlatformPrincipal`. The `PlatformCredential` is
 * `API key`.
 *
 * - For GCM (Firebase Cloud Messaging) using token credentials, there is no
 * `PlatformPrincipal`. The `PlatformCredential` is a
 * JSON formatted private key file. When using the Amazon Web Services CLI or Amazon Web Services SDKs, the
 * file must be in string format and special characters must be ignored. To format
 * the file correctly, Amazon SNS recommends using the following command:
 * `SERVICE_JSON=$(jq @json Package Security
 * Identifier and `PlatformCredential` is secret
 * key.
 *
 * You can use the returned `PlatformApplicationArn` as an attribute for the
 * `CreatePlatformEndpoint` action.
 */
export const createPlatformApplication: API.OperationMethod<
  CreatePlatformApplicationInput,
  CreatePlatformApplicationResponse,
  CreatePlatformApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreatePlatformApplicationInput>,
  output: __S(10) as any as S.Schema<CreatePlatformApplicationResponse>,
  errors: [AuthorizationErrorException, InternalErrorException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePlatformApplication",
}));

export type CreatePlatformEndpointError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Creates an endpoint for a device and mobile app on one of the supported push
 * notification services, such as GCM (Firebase Cloud Messaging) and APNS.
 * `CreatePlatformEndpoint` requires the `PlatformApplicationArn`
 * that is returned from `CreatePlatformApplication`. You can use the returned
 * `EndpointArn` to send a message to a mobile app or by the
 * `Subscribe` action for subscription to a topic. The
 * `CreatePlatformEndpoint` action is idempotent, so if the requester
 * already owns an endpoint with the same device token and attributes, that endpoint's ARN
 * is returned without creating a new endpoint. For more information, see Using Amazon SNS Mobile Push
 * Notifications.
 *
 * When using `CreatePlatformEndpoint` with Baidu, two attributes must be
 * provided: ChannelId and UserId. The token field must also contain the ChannelId. For
 * more information, see Creating an Amazon SNS Endpoint for
 * Baidu.
 */
export const createPlatformEndpoint: API.OperationMethod<
  CreatePlatformEndpointInput,
  CreateEndpointResponse,
  CreatePlatformEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<CreatePlatformEndpointInput>,
  output: __S(12) as any as S.Schema<CreateEndpointResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePlatformEndpoint",
}));

export type CreateSMSSandboxPhoneNumberError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | OptedOutException
  | ThrottledException
  | UserErrorException
  | CommonErrors;
/**
 * Adds a destination phone number to an Amazon Web Services account in the SMS sandbox and sends a
 * one-time password (OTP) to that phone number.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 * *SMS sandbox*. The SMS sandbox provides a safe environment for
 * you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 * Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 * SMS messages only to verified destination phone numbers. For more information, including how to
 * move out of the sandbox to send messages without restrictions,
 * see SMS sandbox in
 * the *Amazon SNS Developer Guide*.
 */
export const createSMSSandboxPhoneNumber: API.OperationMethod<
  CreateSMSSandboxPhoneNumberInput,
  CreateSMSSandboxPhoneNumberResult,
  CreateSMSSandboxPhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<CreateSMSSandboxPhoneNumberInput>,
  output: __S(14) as any as S.Schema<CreateSMSSandboxPhoneNumberResult>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    OptedOutException,
    ThrottledException,
    UserErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSMSSandboxPhoneNumber",
}));

export type CreateTopicError =
  | AuthorizationErrorException
  | ConcurrentAccessException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | StaleTagException
  | TagLimitExceededException
  | TagPolicyException
  | TopicLimitExceededException
  | CommonErrors;
/**
 * Creates a topic to which notifications can be published. Users can create at most
 * 100,000 standard topics (at most 1,000 FIFO topics). For more information, see Creating an Amazon SNS
 * topic in the *Amazon SNS Developer Guide*. This action is
 * idempotent, so if the requester already owns a topic with the specified name, that
 * topic's ARN is returned without creating a new topic.
 */
export const createTopic: API.OperationMethod<
  CreateTopicInput,
  CreateTopicResponse,
  CreateTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<CreateTopicInput>,
  output: __S(19) as any as S.Schema<CreateTopicResponse>,
  errors: [
    AuthorizationErrorException,
    ConcurrentAccessException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    StaleTagException,
    TagLimitExceededException,
    TagPolicyException,
    TopicLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTopic",
}));

export type DeleteEndpointError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Deletes the endpoint for a device and mobile app from Amazon SNS. This action is
 * idempotent. For more information, see Using Amazon SNS Mobile Push
 * Notifications.
 *
 * When you delete an endpoint that is also subscribed to a topic, then you must also
 * unsubscribe the endpoint from the topic.
 */
export const deleteEndpoint: API.OperationMethod<
  DeleteEndpointInput,
  DeleteEndpointResponse,
  DeleteEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<DeleteEndpointInput>,
  output: __S(21) as any as S.Schema<DeleteEndpointResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpoint",
}));

export type DeletePlatformApplicationError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Deletes a platform application object for one of the supported push notification
 * services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
 * Using Amazon SNS
 * Mobile Push Notifications.
 */
export const deletePlatformApplication: API.OperationMethod<
  DeletePlatformApplicationInput,
  DeletePlatformApplicationResponse,
  DeletePlatformApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<DeletePlatformApplicationInput>,
  output: __S(23) as any as S.Schema<DeletePlatformApplicationResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePlatformApplication",
}));

export type DeleteSMSSandboxPhoneNumberError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottledException
  | UserErrorException
  | CommonErrors;
/**
 * Deletes an Amazon Web Services account's verified or pending phone number from the SMS
 * sandbox.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 * *SMS sandbox*. The SMS sandbox provides a safe environment for
 * you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 * Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 * SMS messages only to verified destination phone numbers. For more information, including how to
 * move out of the sandbox to send messages without restrictions,
 * see SMS sandbox in
 * the *Amazon SNS Developer Guide*.
 */
export const deleteSMSSandboxPhoneNumber: API.OperationMethod<
  DeleteSMSSandboxPhoneNumberInput,
  DeleteSMSSandboxPhoneNumberResult,
  DeleteSMSSandboxPhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<DeleteSMSSandboxPhoneNumberInput>,
  output: __S(25) as any as S.Schema<DeleteSMSSandboxPhoneNumberResult>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottledException,
    UserErrorException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSMSSandboxPhoneNumber",
}));

export type DeleteTopicError =
  | AuthorizationErrorException
  | ConcurrentAccessException
  | InternalErrorException
  | InvalidParameterException
  | InvalidStateException
  | NotFoundException
  | StaleTagException
  | TagPolicyException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Deletes a topic and all its subscriptions. Deleting a topic might prevent some
 * messages previously sent to the topic from being delivered to subscribers. This action
 * is idempotent, so deleting a topic that does not exist does not result in an
 * error.
 */
export const deleteTopic: API.OperationMethod<
  DeleteTopicInput,
  DeleteTopicResponse,
  DeleteTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<DeleteTopicInput>,
  output: __S(27) as any as S.Schema<DeleteTopicResponse>,
  errors: [
    AuthorizationErrorException,
    ConcurrentAccessException,
    InternalErrorException,
    InvalidParameterException,
    InvalidStateException,
    NotFoundException,
    StaleTagException,
    TagPolicyException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTopic",
}));

export type GetDataProtectionPolicyError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Amazon SNS message data protection is no longer available to new customers.
 * For more information and guidance on alternatives, see
 * Amazon SNS message data protection availability change.
 *
 * Retrieves the specified inline `DataProtectionPolicy` document that is
 * stored in the specified Amazon SNS topic.
 */
export const getDataProtectionPolicy: API.OperationMethod<
  GetDataProtectionPolicyInput,
  GetDataProtectionPolicyResponse,
  GetDataProtectionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<GetDataProtectionPolicyInput>,
  output: __S(29) as any as S.Schema<GetDataProtectionPolicyResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataProtectionPolicy",
}));

export type GetEndpointAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Retrieves the endpoint attributes for a device on one of the supported push
 * notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 * information, see Using Amazon SNS Mobile Push Notifications.
 */
export const getEndpointAttributes: API.OperationMethod<
  GetEndpointAttributesInput,
  GetEndpointAttributesResponse,
  GetEndpointAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<GetEndpointAttributesInput>,
  output: __S(31) as any as S.Schema<GetEndpointAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEndpointAttributes",
}));

export type GetPlatformApplicationAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Retrieves the attributes of the platform application object for the supported push
 * notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 * information, see Using Amazon SNS Mobile Push Notifications.
 */
export const getPlatformApplicationAttributes: API.OperationMethod<
  GetPlatformApplicationAttributesInput,
  GetPlatformApplicationAttributesResponse,
  GetPlatformApplicationAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<GetPlatformApplicationAttributesInput>,
  output: __S(33) as any as S.Schema<GetPlatformApplicationAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPlatformApplicationAttributes",
}));

export type GetSMSAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ThrottledException
  | CommonErrors;
/**
 * Returns the settings for sending SMS messages from your Amazon Web Services account.
 *
 * These settings are set with the `SetSMSAttributes` action.
 */
export const getSMSAttributes: API.OperationMethod<
  GetSMSAttributesInput,
  GetSMSAttributesResponse,
  GetSMSAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<GetSMSAttributesInput>,
  output: __S(36) as any as S.Schema<GetSMSAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSMSAttributes",
}));

export type GetSMSSandboxAccountStatusError =
  | AuthorizationErrorException
  | InternalErrorException
  | ThrottledException
  | CommonErrors;
/**
 * Retrieves the SMS sandbox status for the calling Amazon Web Services account in the target
 * Amazon Web Services Region.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 * *SMS sandbox*. The SMS sandbox provides a safe environment for
 * you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 * Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 * SMS messages only to verified destination phone numbers. For more information, including how to
 * move out of the sandbox to send messages without restrictions,
 * see SMS sandbox in
 * the *Amazon SNS Developer Guide*.
 */
export const getSMSSandboxAccountStatus: API.OperationMethod<
  GetSMSSandboxAccountStatusInput,
  GetSMSSandboxAccountStatusResult,
  GetSMSSandboxAccountStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<GetSMSSandboxAccountStatusInput>,
  output: __S(38) as any as S.Schema<GetSMSSandboxAccountStatusResult>,
  errors: [AuthorizationErrorException, InternalErrorException, ThrottledException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSMSSandboxAccountStatus",
}));

export type GetSubscriptionAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | CommonErrors;
/**
 * Returns all of the properties of a subscription.
 */
export const getSubscriptionAttributes: API.OperationMethod<
  GetSubscriptionAttributesInput,
  GetSubscriptionAttributesResponse,
  GetSubscriptionAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39) as any as S.Schema<GetSubscriptionAttributesInput>,
  output: __S(41) as any as S.Schema<GetSubscriptionAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSubscriptionAttributes",
}));

export type GetTopicAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Returns all of the properties of a topic. Topic properties returned might differ based
 * on the authorization of the user.
 */
export const getTopicAttributes: API.OperationMethod<
  GetTopicAttributesInput,
  GetTopicAttributesResponse,
  GetTopicAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<GetTopicAttributesInput>,
  output: __S(43) as any as S.Schema<GetTopicAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTopicAttributes",
}));

export type ListEndpointsByPlatformApplicationError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Lists the endpoints and endpoint attributes for devices in a supported push
 * notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for
 * `ListEndpointsByPlatformApplication` are paginated and return a limited
 * list of endpoints, up to 100. If additional records are available after the first page
 * results, then a NextToken string will be returned. To receive the next page, you call
 * `ListEndpointsByPlatformApplication` again using the NextToken string
 * received from the previous call. When there are no more records to return, NextToken
 * will be null. For more information, see Using Amazon SNS Mobile Push
 * Notifications.
 *
 * This action is throttled at 30 transactions per second (TPS).
 */
export const listEndpointsByPlatformApplication: API.PaginatedOperationMethod<
  ListEndpointsByPlatformApplicationInput,
  ListEndpointsByPlatformApplicationResponse,
  ListEndpointsByPlatformApplicationError,
  Credentials | HttpClient.HttpClient,
  Endpoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(44) as any as S.Schema<ListEndpointsByPlatformApplicationInput>,
  output: __S(47) as any as S.Schema<ListEndpointsByPlatformApplicationResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEndpointsByPlatformApplication",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Endpoints" } as const,
})) as any;

export type ListOriginationNumbersError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata.
 * For more information about origination numbers, see Origination numbers in the Amazon SNS Developer
 * Guide.
 */
export const listOriginationNumbers: API.PaginatedOperationMethod<
  ListOriginationNumbersRequest,
  ListOriginationNumbersResult,
  ListOriginationNumbersError,
  Credentials | HttpClient.HttpClient,
  PhoneNumberInformation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(48) as any as S.Schema<ListOriginationNumbersRequest>,
  output: __S(52) as any as S.Schema<ListOriginationNumbersResult>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOriginationNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PhoneNumbers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPhoneNumbersOptedOutError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ThrottledException
  | CommonErrors;
/**
 * Returns a list of phone numbers that are opted out, meaning you cannot send SMS
 * messages to them.
 *
 * The results for `ListPhoneNumbersOptedOut` are paginated, and each page
 * returns up to 100 phone numbers. If additional phone numbers are available after the
 * first page of results, then a `NextToken` string will be returned. To receive
 * the next page, you call `ListPhoneNumbersOptedOut` again using the
 * `NextToken` string received from the previous call. When there are no
 * more records to return, `NextToken` will be null.
 */
export const listPhoneNumbersOptedOut: API.PaginatedOperationMethod<
  ListPhoneNumbersOptedOutInput,
  ListPhoneNumbersOptedOutResponse,
  ListPhoneNumbersOptedOutError,
  Credentials | HttpClient.HttpClient,
  PhoneNumber
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(53) as any as S.Schema<ListPhoneNumbersOptedOutInput>,
  output: __S(55) as any as S.Schema<ListPhoneNumbersOptedOutResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPhoneNumbersOptedOut",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "phoneNumbers" } as const,
})) as any;

export type ListPlatformApplicationsError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | CommonErrors;
/**
 * Lists the platform application objects for the supported push notification services,
 * such as APNS and GCM (Firebase Cloud Messaging). The results for
 * `ListPlatformApplications` are paginated and return a limited list of
 * applications, up to 100. If additional records are available after the first page
 * results, then a NextToken string will be returned. To receive the next page, you call
 * `ListPlatformApplications` using the NextToken string received from the
 * previous call. When there are no more records to return, `NextToken` will be
 * null. For more information, see Using Amazon SNS Mobile Push
 * Notifications.
 *
 * This action is throttled at 15 transactions per second (TPS).
 */
export const listPlatformApplications: API.PaginatedOperationMethod<
  ListPlatformApplicationsInput,
  ListPlatformApplicationsResponse,
  ListPlatformApplicationsError,
  Credentials | HttpClient.HttpClient,
  PlatformApplication
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(56) as any as S.Schema<ListPlatformApplicationsInput>,
  output: __S(59) as any as S.Schema<ListPlatformApplicationsResponse>,
  errors: [AuthorizationErrorException, InternalErrorException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPlatformApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PlatformApplications",
  } as const,
})) as any;

export type ListSMSSandboxPhoneNumbersError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottledException
  | CommonErrors;
/**
 * Lists the calling Amazon Web Services account's current verified and pending destination phone
 * numbers in the SMS sandbox.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 * *SMS sandbox*. The SMS sandbox provides a safe environment for
 * you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 * Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 * SMS messages only to verified destination phone numbers. For more information, including how to
 * move out of the sandbox to send messages without restrictions,
 * see SMS sandbox in
 * the *Amazon SNS Developer Guide*.
 */
export const listSMSSandboxPhoneNumbers: API.PaginatedOperationMethod<
  ListSMSSandboxPhoneNumbersInput,
  ListSMSSandboxPhoneNumbersResult,
  ListSMSSandboxPhoneNumbersError,
  Credentials | HttpClient.HttpClient,
  SMSSandboxPhoneNumber
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(60) as any as S.Schema<ListSMSSandboxPhoneNumbersInput>,
  output: __S(63) as any as S.Schema<ListSMSSandboxPhoneNumbersResult>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSMSSandboxPhoneNumbers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PhoneNumbers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSubscriptionsError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | CommonErrors;
/**
 * Returns a list of the requester's subscriptions. Each call returns a limited list of
 * subscriptions, up to 100. If there are more subscriptions, a `NextToken` is
 * also returned. Use the `NextToken` parameter in a new
 * `ListSubscriptions` call to get further results.
 *
 * This action is throttled at 30 transactions per second (TPS).
 */
export const listSubscriptions: API.PaginatedOperationMethod<
  ListSubscriptionsInput,
  ListSubscriptionsResponse,
  ListSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  Subscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(64) as any as S.Schema<ListSubscriptionsInput>,
  output: __S(67) as any as S.Schema<ListSubscriptionsResponse>,
  errors: [AuthorizationErrorException, InternalErrorException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Subscriptions",
  } as const,
})) as any;

export type ListSubscriptionsByTopicError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Returns a list of the subscriptions to a specific topic. Each call returns a limited
 * list of subscriptions, up to 100. If there are more subscriptions, a
 * `NextToken` is also returned. Use the `NextToken` parameter in
 * a new `ListSubscriptionsByTopic` call to get further results.
 *
 * This action is throttled at 30 transactions per second (TPS).
 */
export const listSubscriptionsByTopic: API.PaginatedOperationMethod<
  ListSubscriptionsByTopicInput,
  ListSubscriptionsByTopicResponse,
  ListSubscriptionsByTopicError,
  Credentials | HttpClient.HttpClient,
  Subscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68) as any as S.Schema<ListSubscriptionsByTopicInput>,
  output: __S(69) as any as S.Schema<ListSubscriptionsByTopicResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSubscriptionsByTopic",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Subscriptions",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AuthorizationErrorException
  | ConcurrentAccessException
  | InvalidParameterException
  | ResourceNotFoundException
  | TagPolicyException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * List all tags added to the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the
 * *Amazon Simple Notification Service Developer Guide*.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(71) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AuthorizationErrorException,
    ConcurrentAccessException,
    InvalidParameterException,
    ResourceNotFoundException,
    TagPolicyException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTopicsError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | CommonErrors;
/**
 * Returns a list of the requester's topics. Each call returns a limited list of topics,
 * up to 100. If there are more topics, a `NextToken` is also returned. Use the
 * `NextToken` parameter in a new `ListTopics` call to get
 * further results.
 *
 * This action is throttled at 30 transactions per second (TPS).
 */
export const listTopics: API.PaginatedOperationMethod<
  ListTopicsInput,
  ListTopicsResponse,
  ListTopicsError,
  Credentials | HttpClient.HttpClient,
  Topic
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72) as any as S.Schema<ListTopicsInput>,
  output: __S(75) as any as S.Schema<ListTopicsResponse>,
  errors: [AuthorizationErrorException, InternalErrorException, InvalidParameterException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTopics",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Topics" } as const,
})) as any;

export type OptInPhoneNumberError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ThrottledException
  | CommonErrors;
/**
 * Use this request to opt in a phone number that is opted out, which enables you to
 * resume sending SMS messages to the number.
 *
 * You can opt in a phone number only once every 30 days.
 */
export const optInPhoneNumber: API.OperationMethod<
  OptInPhoneNumberInput,
  OptInPhoneNumberResponse,
  OptInPhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<OptInPhoneNumberInput>,
  output: __S(77) as any as S.Schema<OptInPhoneNumberResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "OptInPhoneNumber",
}));

export type PublishError =
  | AuthorizationErrorException
  | EndpointDisabledException
  | InternalErrorException
  | InvalidParameterException
  | InvalidParameterValueException
  | InvalidSecurityException
  | KMSAccessDeniedException
  | KMSDisabledException
  | KMSInvalidStateException
  | KMSNotFoundException
  | KMSOptInRequired
  | KMSThrottlingException
  | NotFoundException
  | PlatformApplicationDisabledException
  | ValidationException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Sends a message to an Amazon SNS topic, a text message (SMS message) directly to a phone
 * number, or a message to a mobile platform endpoint (when you specify the
 * `TargetArn`).
 *
 * If you send a message to a topic, Amazon SNS delivers the message to each endpoint that is
 * subscribed to the topic. The format of the message depends on the notification protocol
 * for each subscribed endpoint.
 *
 * When a `messageId` is returned, the message is saved and Amazon SNS immediately
 * delivers it to subscribers.
 *
 * To use the `Publish` action for publishing a message to a mobile endpoint,
 * such as an app on a Kindle device or mobile phone, you must specify the EndpointArn for
 * the TargetArn parameter. The EndpointArn is returned when making a call with the
 * `CreatePlatformEndpoint` action.
 *
 * For more information about formatting messages, see Send Custom
 * Platform-Specific Payloads in Messages to Mobile Devices.
 *
 * You can publish messages only to topics and endpoints in the same
 * Amazon Web Services Region.
 */
export const publish: API.OperationMethod<
  PublishInput,
  PublishResponse,
  PublishError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<PublishInput>,
  output: __S(81) as any as S.Schema<PublishResponse>,
  errors: [
    AuthorizationErrorException,
    EndpointDisabledException,
    InternalErrorException,
    InvalidParameterException,
    InvalidParameterValueException,
    InvalidSecurityException,
    KMSAccessDeniedException,
    KMSDisabledException,
    KMSInvalidStateException,
    KMSNotFoundException,
    KMSOptInRequired,
    KMSThrottlingException,
    NotFoundException,
    PlatformApplicationDisabledException,
    ValidationException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Publish",
}));

export type PublishBatchError =
  | AuthorizationErrorException
  | BatchEntryIdsNotDistinctException
  | BatchRequestTooLongException
  | EmptyBatchRequestException
  | EndpointDisabledException
  | InternalErrorException
  | InvalidBatchEntryIdException
  | InvalidParameterException
  | InvalidParameterValueException
  | InvalidSecurityException
  | KMSAccessDeniedException
  | KMSDisabledException
  | KMSInvalidStateException
  | KMSNotFoundException
  | KMSOptInRequired
  | KMSThrottlingException
  | NotFoundException
  | PlatformApplicationDisabledException
  | TooManyEntriesInBatchRequestException
  | ValidationException
  | CommonErrors;
/**
 * Publishes up to 10 messages to the specified topic in a single batch. This is a batch
 * version of the `Publish` API. If you try to send more than 10 messages in a
 * single batch request, you will receive a `TooManyEntriesInBatchRequest`
 * exception.
 *
 * For FIFO topics, multiple messages within a single batch are published in the order
 * they are sent, and messages are deduplicated within the batch and across batches for
 * five minutes.
 *
 * The result of publishing each message is reported individually in the response.
 * Because the batch request can result in a combination of successful and unsuccessful
 * actions, you should check for batch errors even when the call returns an HTTP status
 * code of 200.
 *
 * By default, the maximum allowed individual message size and the maximum total payload
 * size (the sum of the individual lengths of all of the batched messages) are both 256 KiB
 * (262,144 bytes). To publish larger batches, set the topic's
 * `MaximumMessageSize` attribute, which supports values up to 1 MiB
 * (1,048,576 bytes). The combined size of all messages in the batch, including each
 * message's body and attributes, must not exceed the topic's
 * `MaximumMessageSize`.
 *
 * For more information, see Large message payloads in
 * the *Amazon SNS Developer Guide.*
 *
 * The `PublishBatch` API can send up to 10 messages at a time. If you
 * attempt to send more than 10 messages in one request, you will encounter a
 * `TooManyEntriesInBatchRequest` exception. In such cases, split your
 * messages into multiple requests, each containing no more than 10 messages.
 *
 * Some actions take lists of parameters. These lists are specified using the
 * `param.n` notation. Values of `n` are integers starting from
 * **1**. For example, a parameter list with two elements
 * looks like this:
 *
 * `&AttributeName.1=first`
 *
 * `&AttributeName.2=second`
 *
 * If you send a batch message to a topic, Amazon SNS publishes the batch message to each
 * endpoint that is subscribed to the topic. The format of the batch message depends on the
 * notification protocol for each subscribed endpoint.
 *
 * When a `messageId` is returned, the batch message is saved, and Amazon SNS
 * immediately delivers the message to subscribers.
 */
export const publishBatch: API.OperationMethod<
  PublishBatchInput,
  PublishBatchResponse,
  PublishBatchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<PublishBatchInput>,
  output: __S(89) as any as S.Schema<PublishBatchResponse>,
  errors: [
    AuthorizationErrorException,
    BatchEntryIdsNotDistinctException,
    BatchRequestTooLongException,
    EmptyBatchRequestException,
    EndpointDisabledException,
    InternalErrorException,
    InvalidBatchEntryIdException,
    InvalidParameterException,
    InvalidParameterValueException,
    InvalidSecurityException,
    KMSAccessDeniedException,
    KMSDisabledException,
    KMSInvalidStateException,
    KMSNotFoundException,
    KMSOptInRequired,
    KMSThrottlingException,
    NotFoundException,
    PlatformApplicationDisabledException,
    TooManyEntriesInBatchRequestException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PublishBatch",
}));

export type PutDataProtectionPolicyError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Amazon SNS message data protection is no longer available to new customers.
 * For more information and guidance on alternatives, see
 * Amazon SNS message data protection availability change.
 *
 * Adds or updates an inline policy document that is stored in the specified Amazon SNS
 * topic.
 */
export const putDataProtectionPolicy: API.OperationMethod<
  PutDataProtectionPolicyInput,
  PutDataProtectionPolicyResponse,
  PutDataProtectionPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90) as any as S.Schema<PutDataProtectionPolicyInput>,
  output: __S(91) as any as S.Schema<PutDataProtectionPolicyResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDataProtectionPolicy",
}));

export type RemovePermissionError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Removes a statement from a topic's access control policy.
 *
 * To remove the ability to change topic permissions, you must deny permissions to
 * the `AddPermission`, `RemovePermission`, and
 * `SetTopicAttributes` actions in your IAM policy.
 */
export const removePermission: API.OperationMethod<
  RemovePermissionInput,
  RemovePermissionResponse,
  RemovePermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<RemovePermissionInput>,
  output: __S(93) as any as S.Schema<RemovePermissionResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemovePermission",
}));

export type SetEndpointAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Sets the attributes for an endpoint for a device on one of the supported push
 * notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 * information, see Using Amazon SNS Mobile Push Notifications.
 */
export const setEndpointAttributes: API.OperationMethod<
  SetEndpointAttributesInput,
  SetEndpointAttributesResponse,
  SetEndpointAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94) as any as S.Schema<SetEndpointAttributesInput>,
  output: __S(95) as any as S.Schema<SetEndpointAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetEndpointAttributes",
}));

export type SetPlatformApplicationAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Sets the attributes of the platform application object for the supported push
 * notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 * information, see Using Amazon SNS Mobile Push Notifications. For information on configuring
 * attributes for message delivery status, see Using Amazon SNS Application Attributes for
 * Message Delivery Status.
 */
export const setPlatformApplicationAttributes: API.OperationMethod<
  SetPlatformApplicationAttributesInput,
  SetPlatformApplicationAttributesResponse,
  SetPlatformApplicationAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96) as any as S.Schema<SetPlatformApplicationAttributesInput>,
  output: __S(97) as any as S.Schema<SetPlatformApplicationAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetPlatformApplicationAttributes",
}));

export type SetSMSAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ThrottledException
  | CommonErrors;
/**
 * Use this request to set the default settings for sending SMS messages and receiving
 * daily SMS usage reports.
 *
 * You can override some of these settings for a single message when you use the
 * `Publish` action with the `MessageAttributes.entry.N`
 * parameter. For more information, see Publishing to a mobile phone
 * in the *Amazon SNS Developer Guide*.
 *
 * To use this operation, you must grant the Amazon SNS service principal
 * (`sns.amazonaws.com`) permission to perform the
 * `s3:ListBucket` action.
 */
export const setSMSAttributes: API.OperationMethod<
  SetSMSAttributesInput,
  SetSMSAttributesResponse,
  SetSMSAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98) as any as S.Schema<SetSMSAttributesInput>,
  output: __S(99) as any as S.Schema<SetSMSAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ThrottledException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetSMSAttributes",
}));

export type SetSubscriptionAttributesError =
  | AuthorizationErrorException
  | FilterPolicyLimitExceededException
  | InternalErrorException
  | InvalidParameterException
  | NotFoundException
  | ReplayLimitExceededException
  | CommonErrors;
/**
 * Allows a subscription owner to set an attribute of the subscription to a new
 * value.
 */
export const setSubscriptionAttributes: API.OperationMethod<
  SetSubscriptionAttributesInput,
  SetSubscriptionAttributesResponse,
  SetSubscriptionAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100) as any as S.Schema<SetSubscriptionAttributesInput>,
  output: __S(101) as any as S.Schema<SetSubscriptionAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    FilterPolicyLimitExceededException,
    InternalErrorException,
    InvalidParameterException,
    NotFoundException,
    ReplayLimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetSubscriptionAttributes",
}));

export type SetTopicAttributesError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | NotFoundException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Allows a topic owner to set an attribute of the topic to a new value.
 *
 * To remove the ability to change topic permissions, you must deny permissions to
 * the `AddPermission`, `RemovePermission`, and
 * `SetTopicAttributes` actions in your IAM policy.
 */
export const setTopicAttributes: API.OperationMethod<
  SetTopicAttributesInput,
  SetTopicAttributesResponse,
  SetTopicAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<SetTopicAttributesInput>,
  output: __S(103) as any as S.Schema<SetTopicAttributesResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    NotFoundException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetTopicAttributes",
}));

export type SubscribeError =
  | AuthorizationErrorException
  | FilterPolicyLimitExceededException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | NotFoundException
  | ReplayLimitExceededException
  | SubscriptionLimitExceededException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
 * if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must
 * run the `ConfirmSubscription` action to confirm the subscription.
 *
 * You call the `ConfirmSubscription` action with the token from the
 * subscription response. Confirmation tokens are valid for two days.
 *
 * This action is throttled at 100 transactions per second (TPS).
 */
export const subscribe: API.OperationMethod<
  SubscribeInput,
  SubscribeResponse,
  SubscribeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(104) as any as S.Schema<SubscribeInput>,
  output: __S(105) as any as S.Schema<SubscribeResponse>,
  errors: [
    AuthorizationErrorException,
    FilterPolicyLimitExceededException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    NotFoundException,
    ReplayLimitExceededException,
    SubscriptionLimitExceededException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Subscribe",
}));

export type TagResourceError =
  | AuthorizationErrorException
  | ConcurrentAccessException
  | InvalidParameterException
  | ResourceNotFoundException
  | StaleTagException
  | TagLimitExceededException
  | TagPolicyException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Add tags to the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the
 * *Amazon SNS Developer Guide*.
 *
 * When you use topic tags, keep the following guidelines in mind:
 *
 * - Adding more than 50 tags to a topic isn't recommended.
 *
 * - Tags don't have any semantic meaning. Amazon SNS interprets tags as character
 * strings.
 *
 * - Tags are case-sensitive.
 *
 * - A new tag with a key identical to that of an existing tag overwrites the
 * existing tag.
 *
 * - Tagging actions are limited to 10 TPS per Amazon Web Services account, per Amazon Web Services Region. If
 * your application requires a higher throughput, file a technical support request.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<TagResourceRequest>,
  output: __S(107) as any as S.Schema<TagResourceResponse>,
  errors: [
    AuthorizationErrorException,
    ConcurrentAccessException,
    InvalidParameterException,
    ResourceNotFoundException,
    StaleTagException,
    TagLimitExceededException,
    TagPolicyException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UnsubscribeError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | InvalidSecurityException
  | NotFoundException
  | CommonErrors;
/**
 * Deletes a subscription. If the subscription requires authentication for deletion, only
 * the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services
 * signature is required. If the `Unsubscribe` call does not require
 * authentication and the requester is not the subscription owner, a final cancellation
 * message is delivered to the endpoint, so that the endpoint owner can easily resubscribe
 * to the topic if the `Unsubscribe` request was unintended.
 *
 * This action is throttled at 100 transactions per second (TPS).
 */
export const unsubscribe: API.OperationMethod<
  UnsubscribeInput,
  UnsubscribeResponse,
  UnsubscribeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(108) as any as S.Schema<UnsubscribeInput>,
  output: __S(109) as any as S.Schema<UnsubscribeResponse>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    InvalidSecurityException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Unsubscribe",
}));

export type UntagResourceError =
  | AuthorizationErrorException
  | ConcurrentAccessException
  | InvalidParameterException
  | ResourceNotFoundException
  | StaleTagException
  | TagLimitExceededException
  | TagPolicyException
  | RequestLimitExceeded
  | InvalidClientTokenId
  | CommonErrors;
/**
 * Remove tags from the specified Amazon SNS topic. For an overview, see Amazon SNS Tags in the
 * *Amazon SNS Developer Guide*.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111) as any as S.Schema<UntagResourceRequest>,
  output: __S(112) as any as S.Schema<UntagResourceResponse>,
  errors: [
    AuthorizationErrorException,
    ConcurrentAccessException,
    InvalidParameterException,
    ResourceNotFoundException,
    StaleTagException,
    TagLimitExceededException,
    TagPolicyException,
    RequestLimitExceeded,
    InvalidClientTokenId,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type VerifySMSSandboxPhoneNumberError =
  | AuthorizationErrorException
  | InternalErrorException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottledException
  | VerificationException
  | CommonErrors;
/**
 * Verifies a destination phone number with a one-time password (OTP) for the calling
 * Amazon Web Services account.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the
 * *SMS sandbox*. The SMS sandbox provides a safe environment for
 * you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 * Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 * SMS messages only to verified destination phone numbers. For more information, including how to
 * move out of the sandbox to send messages without restrictions,
 * see SMS sandbox in
 * the *Amazon SNS Developer Guide*.
 */
export const verifySMSSandboxPhoneNumber: API.OperationMethod<
  VerifySMSSandboxPhoneNumberInput,
  VerifySMSSandboxPhoneNumberResult,
  VerifySMSSandboxPhoneNumberError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113) as any as S.Schema<VerifySMSSandboxPhoneNumberInput>,
  output: __S(114) as any as S.Schema<VerifySMSSandboxPhoneNumberResult>,
  errors: [
    AuthorizationErrorException,
    InternalErrorException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottledException,
    VerificationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifySMSSandboxPhoneNumber",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.String,
          Label: S.String,
          AWSAccountId: __S(0),
          ActionName: __S(1),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "AddPermissionInput" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddPermissionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ phoneNumber: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CheckIfPhoneNumberIsOptedOutInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ isOptedOut: S.optional(S.Boolean) }).pipe(ns)).annotate({
        identifier: "CheckIfPhoneNumberIsOptedOutResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.String,
          Token: S.String,
          AuthenticateOnUnsubscribe: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ConfirmSubscriptionInput" });
    case 7:
      return S.suspend(() => S.Struct({ SubscriptionArn: S.optional(S.String) }).pipe(ns)).annotate(
        {
          identifier: "ConfirmSubscriptionResponse",
        },
      );
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Platform: S.String, Attributes: __S(8) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreatePlatformApplicationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ PlatformApplicationArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreatePlatformApplicationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PlatformApplicationArn: S.String,
          Token: S.String,
          CustomUserData: S.optional(S.String),
          Attributes: S.optional(__S(8)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePlatformEndpointInput",
      });
    case 4:
      return S.suspend(() => S.Struct({ EndpointArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateEndpointResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PhoneNumber: SensitiveString,
          LanguageCode: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSMSSandboxPhoneNumberInput",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateSMSSandboxPhoneNumberResult",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Attributes: S.optional(__S(15)),
          Tags: S.optional(__S(17)),
          DataProtectionPolicy: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTopicInput" });
    case 3:
      return S.suspend(() => S.Struct({ TopicArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "CreateTopicResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEndpointInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PlatformApplicationArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePlatformApplicationInput",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeletePlatformApplicationResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PhoneNumber: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSMSSandboxPhoneNumberInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteSMSSandboxPhoneNumberResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TopicArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTopicInput" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteTopicResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDataProtectionPolicyInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DataProtectionPolicy: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "GetDataProtectionPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetEndpointAttributesInput",
      });
    case 7:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(8)) }).pipe(ns)).annotate({
        identifier: "GetEndpointAttributesResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PlatformApplicationArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetPlatformApplicationAttributesInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(8)) }).pipe(ns)).annotate({
        identifier: "GetPlatformApplicationAttributesResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ attributes: S.optional(__S(34)) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSMSAttributesInput" });
    case 4:
      return S.suspend(() => S.Struct({ attributes: S.optional(__S(8)) }).pipe(ns)).annotate({
        identifier: "GetSMSAttributesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSMSSandboxAccountStatusInput",
      });
    case 6:
      return S.suspend(() => S.Struct({ IsInSandbox: S.Boolean }).pipe(ns)).annotate({
        identifier: "GetSMSSandboxAccountStatusResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SubscriptionArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetSubscriptionAttributesInput",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(40)) }).pipe(ns)).annotate({
        identifier: "GetSubscriptionAttributesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TopicArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTopicAttributesInput" });
    case 3:
      return S.suspend(() => S.Struct({ Attributes: S.optional(__S(15)) }).pipe(ns)).annotate({
        identifier: "GetTopicAttributesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PlatformApplicationArn: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListEndpointsByPlatformApplicationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.optional(S.String), Attributes: S.optional(__S(8)) }),
      ).annotate({ identifier: "Endpoint" });
    case 6:
      return S.Array(Endpoint);
    case 7:
      return S.suspend(() =>
        S.Struct({ Endpoints: S.optional(__S(46)), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListEndpointsByPlatformApplicationResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListOriginationNumbersRequest",
      });
    case 1:
      return S.Array(S.String);
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          PhoneNumber: S.optional(SensitiveString),
          Status: S.optional(S.String),
          Iso2CountryCode: S.optional(S.String),
          RouteType: S.optional(S.String),
          NumberCapabilities: S.optional(__S(49)),
        }),
      ).annotate({ identifier: "PhoneNumberInformation" });
    case 3:
      return S.Array(__S(50));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          PhoneNumbers: S.optional(__S(51)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListOriginationNumbersResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPhoneNumbersOptedOutInput",
      });
    case 6:
      return S.Array(SensitiveString);
    case 7:
      return S.suspend(() =>
        S.Struct({
          phoneNumbers: S.optional(__S(54)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPhoneNumbersOptedOutResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPlatformApplicationsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PlatformApplicationArn: S.optional(S.String),
          Attributes: S.optional(__S(8)),
        }),
      ).annotate({ identifier: "PlatformApplication" });
    case 2:
      return S.Array(__S(57));
    case 3:
      return S.suspend(() =>
        S.Struct({
          PlatformApplications: S.optional(__S(58)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListPlatformApplicationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSMSSandboxPhoneNumbersInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          PhoneNumber: S.optional(SensitiveString),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "SMSSandboxPhoneNumber" });
    case 6:
      return S.Array(__S(61));
    case 7:
      return S.suspend(() =>
        S.Struct({ PhoneNumbers: __S(62), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListSMSSandboxPhoneNumbersResult",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSubscriptionsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SubscriptionArn: S.optional(S.String),
          Owner: S.optional(S.String),
          Protocol: S.optional(S.String),
          Endpoint: S.optional(S.String),
          TopicArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Subscription" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          Subscriptions: S.optional(__S(66)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSubscriptionsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TopicArn: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSubscriptionsByTopicInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Subscriptions: S.optional(__S(66)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListSubscriptionsByTopicResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(17)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTopicsInput" });
    case 1:
      return S.suspend(() => S.Struct({ TopicArn: S.optional(S.String) })).annotate({
        identifier: "Topic",
      });
    case 2:
      return S.Array(__S(73));
    case 3:
      return S.suspend(() =>
        S.Struct({ Topics: S.optional(__S(74)), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListTopicsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ phoneNumber: SensitiveString }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "OptInPhoneNumberInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "OptInPhoneNumberResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataType: S.String,
          StringValue: S.optional(S.String),
          BinaryValue: S.optional(T.Blob),
        }),
      ).annotate({ identifier: "MessageAttributeValue" });
    case 7:
      return S.Record(
        /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("Name")),
        /*@__PURE__*/ __S(78)
          .pipe(/*@__PURE__*/ T.XmlName("Value"))
          .annotate({ identifier: "MessageAttributeValue" })
          .pipe(S.optional),
      );
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.optional(S.String),
          TargetArn: S.optional(S.String),
          PhoneNumber: S.optional(SensitiveString),
          Message: S.String,
          Subject: S.optional(S.String),
          MessageStructure: S.optional(S.String),
          MessageAttributes: S.optional(__S(79)),
          MessageDeduplicationId: S.optional(S.String),
          MessageGroupId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PublishInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ MessageId: S.optional(S.String), SequenceNumber: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "PublishResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Message: S.String,
          Subject: S.optional(S.String),
          MessageStructure: S.optional(S.String),
          MessageAttributes: S.optional(__S(79)),
          MessageDeduplicationId: S.optional(S.String),
          MessageGroupId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PublishBatchRequestEntry" });
    case 3:
      return S.Array(__S(82));
    case 4:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.String,
          PublishBatchRequestEntries: __S(83),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PublishBatchInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          MessageId: S.optional(S.String),
          SequenceNumber: S.optional(S.String),
        }),
      ).annotate({ identifier: "PublishBatchResultEntry" });
    case 6:
      return S.Array(__S(85));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Code: S.String,
          Message: S.optional(S.String),
          SenderFault: S.Boolean,
        }),
      ).annotate({ identifier: "BatchResultErrorEntry" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Successful: S.optional(__S(86)),
          Failed: S.optional(__S(88)),
        }).pipe(ns),
      ).annotate({ identifier: "PublishBatchResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, DataProtectionPolicy: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutDataProtectionPolicyInput",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutDataProtectionPolicyResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TopicArn: S.String, Label: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RemovePermissionInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "RemovePermissionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EndpointArn: S.String, Attributes: __S(8) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetEndpointAttributesInput",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetEndpointAttributesResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PlatformApplicationArn: S.String, Attributes: __S(8) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetPlatformApplicationAttributesInput",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetPlatformApplicationAttributesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ attributes: __S(8) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "SetSMSAttributesInput" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetSMSAttributesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SubscriptionArn: S.String,
          AttributeName: S.String,
          AttributeValue: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetSubscriptionAttributesInput",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetSubscriptionAttributesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.String,
          AttributeName: S.String,
          AttributeValue: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SetTopicAttributesInput" });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetTopicAttributesResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.String,
          Protocol: S.String,
          Endpoint: S.optional(S.String),
          Attributes: S.optional(__S(40)),
          ReturnSubscriptionArn: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SubscribeInput" });
    case 1:
      return S.suspend(() => S.Struct({ SubscriptionArn: S.optional(S.String) }).pipe(ns)).annotate(
        { identifier: "SubscribeResponse" },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(17) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "TagResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SubscriptionArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UnsubscribeInput" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UnsubscribeResponse",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(110) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UntagResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PhoneNumber: SensitiveString, OneTimePassword: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "VerifySMSSandboxPhoneNumberInput",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "VerifySMSSandboxPhoneNumberResult",
      });
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
  }
}
