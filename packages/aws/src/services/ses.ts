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
const ns = /*@__PURE__*/ T.XmlNamespace("http://ses.amazonaws.com/doc/2010-12-01/");
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "SES", serviceShapeName: "SimpleEmailService" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ses" });
const ver = /*@__PURE__*/ T.ServiceVersion("2010-12-01");
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
              `https://email-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://email-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://email.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://email.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccountSendingPausedException
  extends /*@__PURE__*/ S.TaggedError<AccountSendingPausedException>()(
    "AccountSendingPausedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "AccountSendingPausedException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class AlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<AlreadyExistsException>()(
    "AlreadyExistsException",
    {
      Name: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AlreadyExists", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class CannotDeleteException
  extends /*@__PURE__*/ S.TaggedError<CannotDeleteException>()(
    "CannotDeleteException",
    {
      Name: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "CannotDelete", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ConfigurationSetAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ConfigurationSetAlreadyExistsException>()(
    "ConfigurationSetAlreadyExistsException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ConfigurationSetAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class ConfigurationSetDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<ConfigurationSetDoesNotExistException>()(
    "ConfigurationSetDoesNotExistException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ConfigurationSetDoesNotExist",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ConfigurationSetSendingPausedException
  extends /*@__PURE__*/ S.TaggedError<ConfigurationSetSendingPausedException>()(
    "ConfigurationSetSendingPausedException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ConfigurationSetSendingPausedException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CustomVerificationEmailInvalidContentException
  extends /*@__PURE__*/ S.TaggedError<CustomVerificationEmailInvalidContentException>()(
    "CustomVerificationEmailInvalidContentException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CustomVerificationEmailInvalidContent",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class CustomVerificationEmailTemplateAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<CustomVerificationEmailTemplateAlreadyExistsException>()(
    "CustomVerificationEmailTemplateAlreadyExistsException",
    {
      CustomVerificationEmailTemplateName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CustomVerificationEmailTemplateAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class CustomVerificationEmailTemplateDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<CustomVerificationEmailTemplateDoesNotExistException>()(
    "CustomVerificationEmailTemplateDoesNotExistException",
    {
      CustomVerificationEmailTemplateName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "CustomVerificationEmailTemplateDoesNotExist",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class EventDestinationAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<EventDestinationAlreadyExistsException>()(
    "EventDestinationAlreadyExistsException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      EventDestinationName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EventDestinationAlreadyExists",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class EventDestinationDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<EventDestinationDoesNotExistException>()(
    "EventDestinationDoesNotExistException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      EventDestinationName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "EventDestinationDoesNotExist",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class FromEmailAddressNotVerifiedException
  extends /*@__PURE__*/ S.TaggedError<FromEmailAddressNotVerifiedException>()(
    "FromEmailAddressNotVerifiedException",
    {
      FromEmailAddress: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "FromEmailAddressNotVerified", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class IdentityNotVerified
  extends /*@__PURE__*/ S.TaggedError<IdentityNotVerified>()(
    "IdentityNotVerified",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidParameterValue",
      message: { includes: "Identity is not verified" },
    }),
  ) {}
export class InvalidCloudWatchDestinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidCloudWatchDestinationException>()(
    "InvalidCloudWatchDestinationException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      EventDestinationName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidCloudWatchDestination",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidConfigurationSetException
  extends /*@__PURE__*/ S.TaggedError<InvalidConfigurationSetException>()(
    "InvalidConfigurationSetException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidConfigurationSet", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidDeliveryOptionsException
  extends /*@__PURE__*/ S.TaggedError<InvalidDeliveryOptionsException>()(
    "InvalidDeliveryOptionsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidDeliveryOptions", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidFirehoseDestinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidFirehoseDestinationException>()(
    "InvalidFirehoseDestinationException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      EventDestinationName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidFirehoseDestination", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidLambdaFunctionException
  extends /*@__PURE__*/ S.TaggedError<InvalidLambdaFunctionException>()(
    "InvalidLambdaFunctionException",
    {
      FunctionArn: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidLambdaFunction", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValue
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValue>()("InvalidParameterValue", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidPolicyException
  extends /*@__PURE__*/ S.TaggedError<InvalidPolicyException>()(
    "InvalidPolicyException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidPolicy", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidRenderingParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidRenderingParameterException>()(
    "InvalidRenderingParameterException",
    {
      TemplateName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidRenderingParameter", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidS3ConfigurationException
  extends /*@__PURE__*/ S.TaggedError<InvalidS3ConfigurationException>()(
    "InvalidS3ConfigurationException",
    {
      Bucket: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidS3Configuration", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSNSDestinationException
  extends /*@__PURE__*/ S.TaggedError<InvalidSNSDestinationException>()(
    "InvalidSNSDestinationException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      EventDestinationName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSNSDestination", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidSnsTopicException
  extends /*@__PURE__*/ S.TaggedError<InvalidSnsTopicException>()(
    "InvalidSnsTopicException",
    {
      Topic: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidSnsTopic", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidTemplateException
  extends /*@__PURE__*/ S.TaggedError<InvalidTemplateException>()(
    "InvalidTemplateException",
    {
      TemplateName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidTemplate", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidTrackingOptionsException
  extends /*@__PURE__*/ S.TaggedError<InvalidTrackingOptionsException>()(
    "InvalidTrackingOptionsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidTrackingOptions", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class MailFromDomainNotVerifiedException
  extends /*@__PURE__*/ S.TaggedError<MailFromDomainNotVerifiedException>()(
    "MailFromDomainNotVerifiedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "MailFromDomainNotVerifiedException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class MessageRejected
  extends /*@__PURE__*/ S.TaggedError<MessageRejected>()(
    "MessageRejected",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "MessageRejected", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class MissingRenderingAttributeException
  extends /*@__PURE__*/ S.TaggedError<MissingRenderingAttributeException>()(
    "MissingRenderingAttributeException",
    {
      TemplateName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "MissingRenderingAttribute", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ProductionAccessNotGrantedException
  extends /*@__PURE__*/ S.TaggedError<ProductionAccessNotGrantedException>()(
    "ProductionAccessNotGrantedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ProductionAccessNotGranted", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ReceiptRuleRoleNotAssumable
  extends /*@__PURE__*/ S.TaggedError<ReceiptRuleRoleNotAssumable>()(
    "ReceiptRuleRoleNotAssumable",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidParameterValue",
      message: { includes: "Could not assume the provided IAM Role" },
    }),
  ) {}
export class RuleDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<RuleDoesNotExistException>()(
    "RuleDoesNotExistException",
    {
      Name: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RuleDoesNotExist", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class RuleSetDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<RuleSetDoesNotExistException>()(
    "RuleSetDoesNotExistException",
    {
      Name: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RuleSetDoesNotExist", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TemplateDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<TemplateDoesNotExistException>()(
    "TemplateDoesNotExistException",
    {
      TemplateName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "TemplateDoesNotExist", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class TrackingOptionsAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<TrackingOptionsAlreadyExistsException>()(
    "TrackingOptionsAlreadyExistsException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TrackingOptionsAlreadyExistsException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError, C.withAlreadyExistsError) {}
export class TrackingOptionsDoesNotExistException
  extends /*@__PURE__*/ S.TaggedError<TrackingOptionsDoesNotExistException>()(
    "TrackingOptionsDoesNotExistException",
    {
      ConfigurationSetName: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "TrackingOptionsDoesNotExistException",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type ReceiptRuleSetName = string;
export interface CloneReceiptRuleSetRequest {
  RuleSetName: string;
  OriginalRuleSetName: string;
}
const CloneReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<CloneReceiptRuleSetRequest>;
export interface CloneReceiptRuleSetResponse {}
const CloneReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<CloneReceiptRuleSetResponse>;
export type ConfigurationSetName = string;
export interface ConfigurationSet {
  Name: string;
}
const ConfigurationSet = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<ConfigurationSet>;
export interface CreateConfigurationSetRequest {
  ConfigurationSet: ConfigurationSet;
}
const CreateConfigurationSetRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateConfigurationSetRequest>;
export interface CreateConfigurationSetResponse {}
const CreateConfigurationSetResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateConfigurationSetResponse>;
export type EventDestinationName = string;
export type Enabled = boolean;
export type EventType =
  | "send"
  | "reject"
  | "bounce"
  | "complaint"
  | "delivery"
  | "open"
  | "click"
  | "renderingFailure"
  | (string & {});
const EventType = S.String;

export type EventTypes = EventType[];
const EventTypes = /*@__PURE__*/ __L.at(__c0, 5);
export type AmazonResourceName = string;
export interface KinesisFirehoseDestination {
  IAMRoleARN: string;
  DeliveryStreamARN: string;
}
const KinesisFirehoseDestination = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<KinesisFirehoseDestination>;
export type DimensionName = string;
export type DimensionValueSource = "messageTag" | "emailHeader" | "linkTag" | (string & {});
const DimensionValueSource = S.String;

export type DefaultDimensionValue = string;
export interface CloudWatchDimensionConfiguration {
  DimensionName: string;
  DimensionValueSource: DimensionValueSource;
  DefaultDimensionValue: string;
}
const CloudWatchDimensionConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CloudWatchDimensionConfiguration>;
export type CloudWatchDimensionConfigurations = CloudWatchDimensionConfiguration[];
const CloudWatchDimensionConfigurations = /*@__PURE__*/ __L.at(__c1, 0);
export interface CloudWatchDestination {
  DimensionConfigurations: CloudWatchDimensionConfiguration[];
}
const CloudWatchDestination = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CloudWatchDestination>;
export interface SNSDestination {
  TopicARN: string;
}
const SNSDestination = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SNSDestination>;
export interface EventDestination {
  Name: string;
  Enabled?: boolean;
  MatchingEventTypes: EventType[];
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
  CloudWatchDestination?: CloudWatchDestination;
  SNSDestination?: SNSDestination;
}
const EventDestination = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<EventDestination>;
export interface CreateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestination: EventDestination;
}
const CreateConfigurationSetEventDestinationRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<CreateConfigurationSetEventDestinationRequest>;
export interface CreateConfigurationSetEventDestinationResponse {}
const CreateConfigurationSetEventDestinationResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<CreateConfigurationSetEventDestinationResponse>;
export type CustomRedirectDomain = string;
export interface TrackingOptions {
  CustomRedirectDomain?: string;
}
const TrackingOptions = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<TrackingOptions>;
export interface CreateConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
  TrackingOptions: TrackingOptions;
}
const CreateConfigurationSetTrackingOptionsRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateConfigurationSetTrackingOptionsRequest>;
export interface CreateConfigurationSetTrackingOptionsResponse {}
const CreateConfigurationSetTrackingOptionsResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateConfigurationSetTrackingOptionsResponse>;
export type TemplateName = string;
export type FromAddress = string;
export type Subject = string;
export type TemplateContent = string;
export type SuccessRedirectionURL = string;
export type FailureRedirectionURL = string;
export interface CreateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress: string;
  TemplateSubject: string;
  TemplateContent: string;
  SuccessRedirectionURL: string;
  FailureRedirectionURL: string;
}
const CreateCustomVerificationEmailTemplateRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateCustomVerificationEmailTemplateRequest>;
export interface CreateCustomVerificationEmailTemplateResponse {}
const CreateCustomVerificationEmailTemplateResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateCustomVerificationEmailTemplateResponse>;
export type ReceiptFilterName = string;
export type ReceiptFilterPolicy = "Block" | "Allow" | (string & {});
const ReceiptFilterPolicy = S.String;

export type Cidr = string;
export interface ReceiptIpFilter {
  Policy: ReceiptFilterPolicy;
  Cidr: string;
}
const ReceiptIpFilter = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<ReceiptIpFilter>;
export interface ReceiptFilter {
  Name: string;
  IpFilter: ReceiptIpFilter;
}
const ReceiptFilter = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<ReceiptFilter>;
export interface CreateReceiptFilterRequest {
  Filter: ReceiptFilter;
}
const CreateReceiptFilterRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateReceiptFilterRequest>;
export interface CreateReceiptFilterResponse {}
const CreateReceiptFilterResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<CreateReceiptFilterResponse>;
export type ReceiptRuleName = string;
export type TlsPolicy = "Require" | "Optional" | (string & {});
const TlsPolicy = S.String;

export type Recipient = string;
export type RecipientsList = string[];
const RecipientsList = /*@__PURE__*/ __L.at(__c2, 7);
export type S3BucketName = string;
export type S3KeyPrefix = string;
export type IAMRoleARN = string;
export interface S3Action {
  TopicArn?: string;
  BucketName: string;
  ObjectKeyPrefix?: string;
  KmsKeyArn?: string;
  IamRoleArn?: string;
}
const S3Action = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<S3Action>;
export type BounceSmtpReplyCode = string;
export type BounceStatusCode = string;
export type BounceMessage = string;
export type Address = string;
export interface BounceAction {
  TopicArn?: string;
  SmtpReplyCode: string;
  StatusCode?: string;
  Message: string;
  Sender: string;
}
const BounceAction = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<BounceAction>;
export interface WorkmailAction {
  TopicArn?: string;
  OrganizationArn: string;
}
const WorkmailAction = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<WorkmailAction>;
export type InvocationType = "Event" | "RequestResponse" | (string & {});
const InvocationType = S.String;

export interface LambdaAction {
  TopicArn?: string;
  FunctionArn: string;
  InvocationType?: InvocationType;
}
const LambdaAction = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<LambdaAction>;
export type StopScope = "RuleSet" | (string & {});
const StopScope = S.String;

export interface StopAction {
  Scope: StopScope;
  TopicArn?: string;
}
const StopAction = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<StopAction>;
export type HeaderName = string;
export type HeaderValue = string;
export interface AddHeaderAction {
  HeaderName: string;
  HeaderValue: string;
}
const AddHeaderAction = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<AddHeaderAction>;
export type SNSActionEncoding = "UTF-8" | "Base64" | (string & {});
const SNSActionEncoding = S.String;

export interface SNSAction {
  TopicArn: string;
  Encoding?: SNSActionEncoding;
}
const SNSAction = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<SNSAction>;
export type ConnectInstanceArn = string;
export interface ConnectAction {
  InstanceARN: string;
  IAMRoleARN: string;
}
const ConnectAction = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<ConnectAction>;
export interface ReceiptAction {
  S3Action?: S3Action;
  BounceAction?: BounceAction;
  WorkmailAction?: WorkmailAction;
  LambdaAction?: LambdaAction;
  StopAction?: StopAction;
  AddHeaderAction?: AddHeaderAction;
  SNSAction?: SNSAction;
  ConnectAction?: ConnectAction;
}
const ReceiptAction = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<ReceiptAction>;
export type ReceiptActionsList = ReceiptAction[];
const ReceiptActionsList = /*@__PURE__*/ __L.at(__c4, 1);
export interface ReceiptRule {
  Name: string;
  Enabled?: boolean;
  TlsPolicy?: TlsPolicy;
  Recipients?: string[];
  Actions?: ReceiptAction[];
  ScanEnabled?: boolean;
}
const ReceiptRule = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<ReceiptRule>;
export interface CreateReceiptRuleRequest {
  RuleSetName: string;
  After?: string;
  Rule: ReceiptRule;
}
const CreateReceiptRuleRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateReceiptRuleRequest>;
export interface CreateReceiptRuleResponse {}
const CreateReceiptRuleResponse = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateReceiptRuleResponse>;
export interface CreateReceiptRuleSetRequest {
  RuleSetName: string;
}
const CreateReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateReceiptRuleSetRequest>;
export interface CreateReceiptRuleSetResponse {}
const CreateReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<CreateReceiptRuleSetResponse>;
export type SubjectPart = string;
export type TextPart = string;
export type HtmlPart = string;
export interface Template {
  TemplateName: string;
  SubjectPart?: string;
  TextPart?: string;
  HtmlPart?: string;
}
const Template = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<Template>;
export interface CreateTemplateRequest {
  Template: Template;
}
const CreateTemplateRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<CreateTemplateRequest>;
export interface CreateTemplateResponse {}
const CreateTemplateResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<CreateTemplateResponse>;
export interface DeleteConfigurationSetRequest {
  ConfigurationSetName: string;
}
const DeleteConfigurationSetRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteConfigurationSetRequest>;
export interface DeleteConfigurationSetResponse {}
const DeleteConfigurationSetResponse = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeleteConfigurationSetResponse>;
export interface DeleteConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestinationName: string;
}
const DeleteConfigurationSetEventDestinationRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeleteConfigurationSetEventDestinationRequest>;
export interface DeleteConfigurationSetEventDestinationResponse {}
const DeleteConfigurationSetEventDestinationResponse = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteConfigurationSetEventDestinationResponse>;
export interface DeleteConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
}
const DeleteConfigurationSetTrackingOptionsRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DeleteConfigurationSetTrackingOptionsRequest>;
export interface DeleteConfigurationSetTrackingOptionsResponse {}
const DeleteConfigurationSetTrackingOptionsResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DeleteConfigurationSetTrackingOptionsResponse>;
export interface DeleteCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
const DeleteCustomVerificationEmailTemplateRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteCustomVerificationEmailTemplateRequest>;
export interface DeleteCustomVerificationEmailTemplateResponse {}
const DeleteCustomVerificationEmailTemplateResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteCustomVerificationEmailTemplateResponse>;
export type Identity = string;
export interface DeleteIdentityRequest {
  Identity: string;
}
const DeleteIdentityRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DeleteIdentityRequest>;
export interface DeleteIdentityResponse {}
const DeleteIdentityResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DeleteIdentityResponse>;
export type PolicyName = string;
export interface DeleteIdentityPolicyRequest {
  Identity: string;
  PolicyName: string;
}
const DeleteIdentityPolicyRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DeleteIdentityPolicyRequest>;
export interface DeleteIdentityPolicyResponse {}
const DeleteIdentityPolicyResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteIdentityPolicyResponse>;
export interface DeleteReceiptFilterRequest {
  FilterName: string;
}
const DeleteReceiptFilterRequest = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteReceiptFilterRequest>;
export interface DeleteReceiptFilterResponse {}
const DeleteReceiptFilterResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteReceiptFilterResponse>;
export interface DeleteReceiptRuleRequest {
  RuleSetName: string;
  RuleName: string;
}
const DeleteReceiptRuleRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteReceiptRuleRequest>;
export interface DeleteReceiptRuleResponse {}
const DeleteReceiptRuleResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteReceiptRuleResponse>;
export interface DeleteReceiptRuleSetRequest {
  RuleSetName: string;
}
const DeleteReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteReceiptRuleSetRequest>;
export interface DeleteReceiptRuleSetResponse {}
const DeleteReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteReceiptRuleSetResponse>;
export interface DeleteTemplateRequest {
  TemplateName: string;
}
const DeleteTemplateRequest = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteTemplateRequest>;
export interface DeleteTemplateResponse {}
const DeleteTemplateResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteTemplateResponse>;
export interface DeleteVerifiedEmailAddressRequest {
  EmailAddress: string;
}
const DeleteVerifiedEmailAddressRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeleteVerifiedEmailAddressRequest>;
export interface DeleteVerifiedEmailAddressResponse {}
const DeleteVerifiedEmailAddressResponse = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteVerifiedEmailAddressResponse>;
export interface DescribeActiveReceiptRuleSetRequest {}
const DescribeActiveReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeActiveReceiptRuleSetRequest>;
export interface ReceiptRuleSetMetadata {
  Name?: string;
  CreatedTimestamp?: Date;
}
const ReceiptRuleSetMetadata = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<ReceiptRuleSetMetadata>;
export type ReceiptRulesList = ReceiptRule[];
const ReceiptRulesList = /*@__PURE__*/ __L.at(__c8, 2);
export interface DescribeActiveReceiptRuleSetResponse {
  Metadata?: ReceiptRuleSetMetadata;
  Rules?: ReceiptRule[];
}
const DescribeActiveReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DescribeActiveReceiptRuleSetResponse>;
export type ConfigurationSetAttribute =
  | "eventDestinations"
  | "trackingOptions"
  | "deliveryOptions"
  | "reputationOptions"
  | (string & {});
const ConfigurationSetAttribute = S.String;

export type ConfigurationSetAttributeList = ConfigurationSetAttribute[];
const ConfigurationSetAttributeList = /*@__PURE__*/ __L.at(__c8, 4);
export interface DescribeConfigurationSetRequest {
  ConfigurationSetName: string;
  ConfigurationSetAttributeNames?: ConfigurationSetAttribute[];
}
const DescribeConfigurationSetRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeConfigurationSetRequest>;
export type EventDestinations = EventDestination[];
const EventDestinations = /*@__PURE__*/ __L.at(__c8, 6);
export interface DeliveryOptions {
  TlsPolicy?: TlsPolicy;
}
const DeliveryOptions = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<DeliveryOptions>;
export type LastFreshStart = Date;
export interface ReputationOptions {
  SendingEnabled?: boolean;
  ReputationMetricsEnabled?: boolean;
  LastFreshStart?: Date;
}
const ReputationOptions = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<ReputationOptions>;
export interface DescribeConfigurationSetResponse {
  ConfigurationSet?: ConfigurationSet;
  EventDestinations?: EventDestination[];
  TrackingOptions?: TrackingOptions;
  DeliveryOptions?: DeliveryOptions;
  ReputationOptions?: ReputationOptions;
}
const DescribeConfigurationSetResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DescribeConfigurationSetResponse>;
export interface DescribeReceiptRuleRequest {
  RuleSetName: string;
  RuleName: string;
}
const DescribeReceiptRuleRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DescribeReceiptRuleRequest>;
export interface DescribeReceiptRuleResponse {
  Rule?: ReceiptRule;
}
const DescribeReceiptRuleResponse = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeReceiptRuleResponse>;
export interface DescribeReceiptRuleSetRequest {
  RuleSetName: string;
}
const DescribeReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DescribeReceiptRuleSetRequest>;
export interface DescribeReceiptRuleSetResponse {
  Metadata?: ReceiptRuleSetMetadata;
  Rules?: ReceiptRule[];
}
const DescribeReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<DescribeReceiptRuleSetResponse>;
export interface GetAccountSendingEnabledRequest {}
const GetAccountSendingEnabledRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetAccountSendingEnabledRequest>;
export interface GetAccountSendingEnabledResponse {
  Enabled?: boolean;
}
const GetAccountSendingEnabledResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetAccountSendingEnabledResponse>;
export interface GetCustomVerificationEmailTemplateRequest {
  TemplateName: string;
}
const GetCustomVerificationEmailTemplateRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetCustomVerificationEmailTemplateRequest>;
export interface GetCustomVerificationEmailTemplateResponse {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
const GetCustomVerificationEmailTemplateResponse = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GetCustomVerificationEmailTemplateResponse>;
export type IdentityList = string[];
const IdentityList = /*@__PURE__*/ __L.at(__c10, 2);
export interface GetIdentityDkimAttributesRequest {
  Identities: string[];
}
const GetIdentityDkimAttributesRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetIdentityDkimAttributesRequest>;
export type VerificationStatus =
  | "Pending"
  | "Success"
  | "Failed"
  | "TemporaryFailure"
  | "NotStarted"
  | (string & {});
const VerificationStatus = S.String;

export type VerificationToken = string;
export type VerificationTokenList = string[];
const VerificationTokenList = /*@__PURE__*/ __L.at(__c10, 4);
export interface IdentityDkimAttributes {
  DkimEnabled: boolean;
  DkimVerificationStatus: VerificationStatus;
  DkimTokens?: string[];
}
const IdentityDkimAttributes = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<IdentityDkimAttributes>;
export type DkimAttributes = { [key: string]: IdentityDkimAttributes | undefined };
const DkimAttributes = /*@__PURE__*/ __L.at(__c10, 6);
export interface GetIdentityDkimAttributesResponse {
  DkimAttributes: { [key: string]: IdentityDkimAttributes | undefined };
}
const GetIdentityDkimAttributesResponse = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetIdentityDkimAttributesResponse>;
export interface GetIdentityMailFromDomainAttributesRequest {
  Identities: string[];
}
const GetIdentityMailFromDomainAttributesRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<GetIdentityMailFromDomainAttributesRequest>;
export type MailFromDomainName = string;
export type CustomMailFromStatus =
  | "Pending"
  | "Success"
  | "Failed"
  | "TemporaryFailure"
  | (string & {});
const CustomMailFromStatus = S.String;

export type BehaviorOnMXFailure = "UseDefaultValue" | "RejectMessage" | (string & {});
const BehaviorOnMXFailure = S.String;

export interface IdentityMailFromDomainAttributes {
  MailFromDomain: string;
  MailFromDomainStatus: CustomMailFromStatus;
  BehaviorOnMXFailure: BehaviorOnMXFailure;
}
const IdentityMailFromDomainAttributes = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<IdentityMailFromDomainAttributes>;
export type MailFromDomainAttributes = {
  [key: string]: IdentityMailFromDomainAttributes | undefined;
};
const MailFromDomainAttributes = /*@__PURE__*/ __L.at(__c11, 2);
export interface GetIdentityMailFromDomainAttributesResponse {
  MailFromDomainAttributes: { [key: string]: IdentityMailFromDomainAttributes | undefined };
}
const GetIdentityMailFromDomainAttributesResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetIdentityMailFromDomainAttributesResponse>;
export interface GetIdentityNotificationAttributesRequest {
  Identities: string[];
}
const GetIdentityNotificationAttributesRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetIdentityNotificationAttributesRequest>;
export type NotificationTopic = string;
export interface IdentityNotificationAttributes {
  BounceTopic: string;
  ComplaintTopic: string;
  DeliveryTopic: string;
  ForwardingEnabled: boolean;
  HeadersInBounceNotificationsEnabled?: boolean;
  HeadersInComplaintNotificationsEnabled?: boolean;
  HeadersInDeliveryNotificationsEnabled?: boolean;
}
const IdentityNotificationAttributes = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<IdentityNotificationAttributes>;
export type NotificationAttributes = { [key: string]: IdentityNotificationAttributes | undefined };
const NotificationAttributes = /*@__PURE__*/ __L.at(__c11, 6);
export interface GetIdentityNotificationAttributesResponse {
  NotificationAttributes: { [key: string]: IdentityNotificationAttributes | undefined };
}
const GetIdentityNotificationAttributesResponse = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetIdentityNotificationAttributesResponse>;
export type PolicyNameList = string[];
const PolicyNameList = /*@__PURE__*/ __L.at(__c12, 0);
export interface GetIdentityPoliciesRequest {
  Identity: string;
  PolicyNames: string[];
}
const GetIdentityPoliciesRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<GetIdentityPoliciesRequest>;
export type Policy = string;
export type PolicyMap = { [key: string]: string | undefined };
const PolicyMap = /*@__PURE__*/ __L.at(__c12, 2);
export interface GetIdentityPoliciesResponse {
  Policies: { [key: string]: string | undefined };
}
const GetIdentityPoliciesResponse = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<GetIdentityPoliciesResponse>;
export interface GetIdentityVerificationAttributesRequest {
  Identities: string[];
}
const GetIdentityVerificationAttributesRequest = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<GetIdentityVerificationAttributesRequest>;
export interface IdentityVerificationAttributes {
  VerificationStatus: VerificationStatus;
  VerificationToken?: string;
}
const IdentityVerificationAttributes = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<IdentityVerificationAttributes>;
export type VerificationAttributes = { [key: string]: IdentityVerificationAttributes | undefined };
const VerificationAttributes = /*@__PURE__*/ __L.at(__c12, 6);
export interface GetIdentityVerificationAttributesResponse {
  VerificationAttributes: { [key: string]: IdentityVerificationAttributes | undefined };
}
const GetIdentityVerificationAttributesResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetIdentityVerificationAttributesResponse>;
export interface GetSendQuotaRequest {}
const GetSendQuotaRequest = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<GetSendQuotaRequest>;
export type Max24HourSend = number;
export type MaxSendRate = number;
export type SentLast24Hours = number;
export interface GetSendQuotaResponse {
  Max24HourSend?: number;
  MaxSendRate?: number;
  SentLast24Hours?: number;
}
const GetSendQuotaResponse = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<GetSendQuotaResponse>;
export interface GetSendStatisticsRequest {}
const GetSendStatisticsRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<GetSendStatisticsRequest>;
export type Counter = number;
export interface SendDataPoint {
  Timestamp?: Date;
  DeliveryAttempts?: number;
  Bounces?: number;
  Complaints?: number;
  Rejects?: number;
}
const SendDataPoint = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<SendDataPoint>;
export type SendDataPointList = SendDataPoint[];
const SendDataPointList = /*@__PURE__*/ __L.at(__c13, 4);
export interface GetSendStatisticsResponse {
  SendDataPoints?: SendDataPoint[];
}
const GetSendStatisticsResponse = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<GetSendStatisticsResponse>;
export interface GetTemplateRequest {
  TemplateName: string;
}
const GetTemplateRequest = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<GetTemplateRequest>;
export interface GetTemplateResponse {
  Template?: Template;
}
const GetTemplateResponse = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<GetTemplateResponse>;
export type NextToken = string;
export type MaxItems = number;
export interface ListConfigurationSetsRequest {
  NextToken?: string;
  MaxItems?: number;
}
const ListConfigurationSetsRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ListConfigurationSetsRequest>;
export type ConfigurationSets = ConfigurationSet[];
const ConfigurationSets = /*@__PURE__*/ __L.at(__c14, 1);
export interface ListConfigurationSetsResponse {
  ConfigurationSets?: ConfigurationSet[];
  NextToken?: string;
}
const ListConfigurationSetsResponse = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListConfigurationSetsResponse>;
export type MaxResults = number;
export interface ListCustomVerificationEmailTemplatesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListCustomVerificationEmailTemplatesRequest = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListCustomVerificationEmailTemplatesRequest>;
export interface CustomVerificationEmailTemplate {
  TemplateName?: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
const CustomVerificationEmailTemplate = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<CustomVerificationEmailTemplate>;
export type CustomVerificationEmailTemplates = CustomVerificationEmailTemplate[];
const CustomVerificationEmailTemplates = /*@__PURE__*/ __L.at(__c14, 5);
export interface ListCustomVerificationEmailTemplatesResponse {
  CustomVerificationEmailTemplates?: CustomVerificationEmailTemplate[];
  NextToken?: string;
}
const ListCustomVerificationEmailTemplatesResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListCustomVerificationEmailTemplatesResponse>;
export type IdentityType = "EmailAddress" | "Domain" | (string & {});
const IdentityType = S.String;

export interface ListIdentitiesRequest {
  IdentityType?: IdentityType;
  NextToken?: string;
  MaxItems?: number;
}
const ListIdentitiesRequest = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<ListIdentitiesRequest>;
export interface ListIdentitiesResponse {
  Identities: string[];
  NextToken?: string;
}
const ListIdentitiesResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<ListIdentitiesResponse>;
export interface ListIdentityPoliciesRequest {
  Identity: string;
}
const ListIdentityPoliciesRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListIdentityPoliciesRequest>;
export interface ListIdentityPoliciesResponse {
  PolicyNames: string[];
}
const ListIdentityPoliciesResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListIdentityPoliciesResponse>;
export interface ListReceiptFiltersRequest {}
const ListReceiptFiltersRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ListReceiptFiltersRequest>;
export type ReceiptFilterList = ReceiptFilter[];
const ReceiptFilterList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListReceiptFiltersResponse {
  Filters?: ReceiptFilter[];
}
const ListReceiptFiltersResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListReceiptFiltersResponse>;
export interface ListReceiptRuleSetsRequest {
  NextToken?: string;
}
const ListReceiptRuleSetsRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListReceiptRuleSetsRequest>;
export type ReceiptRuleSetsLists = ReceiptRuleSetMetadata[];
const ReceiptRuleSetsLists = /*@__PURE__*/ __L.at(__c15, 7);
export interface ListReceiptRuleSetsResponse {
  RuleSets?: ReceiptRuleSetMetadata[];
  NextToken?: string;
}
const ListReceiptRuleSetsResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ListReceiptRuleSetsResponse>;
export interface ListTemplatesRequest {
  NextToken?: string;
  MaxItems?: number;
}
const ListTemplatesRequest = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<ListTemplatesRequest>;
export interface TemplateMetadata {
  Name?: string;
  CreatedTimestamp?: Date;
}
const TemplateMetadata = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<TemplateMetadata>;
export type TemplateMetadataList = TemplateMetadata[];
const TemplateMetadataList = /*@__PURE__*/ __L.at(__c16, 3);
export interface ListTemplatesResponse {
  TemplatesMetadata?: TemplateMetadata[];
  NextToken?: string;
}
const ListTemplatesResponse = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListTemplatesResponse>;
export interface ListVerifiedEmailAddressesRequest {}
const ListVerifiedEmailAddressesRequest = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListVerifiedEmailAddressesRequest>;
export type AddressList = string[];
const AddressList = /*@__PURE__*/ __L.at(__c16, 6);
export interface ListVerifiedEmailAddressesResponse {
  VerifiedEmailAddresses?: string[];
}
const ListVerifiedEmailAddressesResponse = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ListVerifiedEmailAddressesResponse>;
export interface PutConfigurationSetDeliveryOptionsRequest {
  ConfigurationSetName: string;
  DeliveryOptions?: DeliveryOptions;
}
const PutConfigurationSetDeliveryOptionsRequest = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<PutConfigurationSetDeliveryOptionsRequest>;
export interface PutConfigurationSetDeliveryOptionsResponse {}
const PutConfigurationSetDeliveryOptionsResponse = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<PutConfigurationSetDeliveryOptionsResponse>;
export interface PutIdentityPolicyRequest {
  Identity: string;
  PolicyName: string;
  Policy: string;
}
const PutIdentityPolicyRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<PutIdentityPolicyRequest>;
export interface PutIdentityPolicyResponse {}
const PutIdentityPolicyResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<PutIdentityPolicyResponse>;
export type ReceiptRuleNamesList = string[];
const ReceiptRuleNamesList = /*@__PURE__*/ __L.at(__c17, 4);
export interface ReorderReceiptRuleSetRequest {
  RuleSetName: string;
  RuleNames: string[];
}
const ReorderReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ReorderReceiptRuleSetRequest>;
export interface ReorderReceiptRuleSetResponse {}
const ReorderReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ReorderReceiptRuleSetResponse>;
export type MessageId = string;
export type Explanation = string;
export type ReportingMta = string;
export type ArrivalDate = Date;
export type ExtensionFieldName = string;
export type ExtensionFieldValue = string;
export interface ExtensionField {
  Name: string;
  Value: string;
}
const ExtensionField = /*@__PURE__*/ __L.at(__c17, 7) as any as S.Schema<ExtensionField>;
export type ExtensionFieldList = ExtensionField[];
const ExtensionFieldList = /*@__PURE__*/ __L.at(__c18, 0);
export interface MessageDsn {
  ReportingMta: string;
  ArrivalDate?: Date;
  ExtensionFields?: ExtensionField[];
}
const MessageDsn = /*@__PURE__*/ __L.at(__c18, 1) as any as S.Schema<MessageDsn>;
export type BounceType =
  | "DoesNotExist"
  | "MessageTooLarge"
  | "ExceededQuota"
  | "ContentRejected"
  | "Undefined"
  | "TemporaryFailure"
  | (string & {});
const BounceType = S.String;

export type DsnAction = "failed" | "delayed" | "delivered" | "relayed" | "expanded" | (string & {});
const DsnAction = S.String;

export type RemoteMta = string;
export type DsnStatus = string;
export type DiagnosticCode = string;
export type LastAttemptDate = Date;
export interface RecipientDsnFields {
  FinalRecipient?: string;
  Action: DsnAction;
  RemoteMta?: string;
  Status: string;
  DiagnosticCode?: string;
  LastAttemptDate?: Date;
  ExtensionFields?: ExtensionField[];
}
const RecipientDsnFields = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<RecipientDsnFields>;
export interface BouncedRecipientInfo {
  Recipient: string;
  RecipientArn?: string;
  BounceType?: BounceType;
  RecipientDsnFields?: RecipientDsnFields;
}
const BouncedRecipientInfo = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<BouncedRecipientInfo>;
export type BouncedRecipientInfoList = BouncedRecipientInfo[];
const BouncedRecipientInfoList = /*@__PURE__*/ __L.at(__c18, 4);
export interface SendBounceRequest {
  OriginalMessageId: string;
  BounceSender: string;
  Explanation?: string;
  MessageDsn?: MessageDsn;
  BouncedRecipientInfoList: BouncedRecipientInfo[];
  BounceSenderArn?: string;
}
const SendBounceRequest = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<SendBounceRequest>;
export interface SendBounceResponse {
  MessageId?: string;
}
const SendBounceResponse = /*@__PURE__*/ __L.at(__c18, 6) as any as S.Schema<SendBounceResponse>;
export type MessageTagName = string;
export type MessageTagValue = string;
export interface MessageTag {
  Name: string;
  Value: string;
}
const MessageTag = /*@__PURE__*/ __L.at(__c18, 7) as any as S.Schema<MessageTag>;
export type MessageTagList = MessageTag[];
const MessageTagList = /*@__PURE__*/ __L.at(__c19, 0);
export type TemplateData = string;
export interface Destination {
  ToAddresses?: string[];
  CcAddresses?: string[];
  BccAddresses?: string[];
}
const Destination = /*@__PURE__*/ __L.at(__c19, 1) as any as S.Schema<Destination>;
export interface BulkEmailDestination {
  Destination: Destination;
  ReplacementTags?: MessageTag[];
  ReplacementTemplateData?: string;
}
const BulkEmailDestination = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<BulkEmailDestination>;
export type BulkEmailDestinationList = BulkEmailDestination[];
const BulkEmailDestinationList = /*@__PURE__*/ __L.at(__c19, 3);
export interface SendBulkTemplatedEmailRequest {
  Source: string;
  SourceArn?: string;
  ReplyToAddresses?: string[];
  ReturnPath?: string;
  ReturnPathArn?: string;
  ConfigurationSetName?: string;
  DefaultTags?: MessageTag[];
  Template: string;
  TemplateArn?: string;
  DefaultTemplateData: string;
  Destinations: BulkEmailDestination[];
}
const SendBulkTemplatedEmailRequest = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<SendBulkTemplatedEmailRequest>;
export type BulkEmailStatus =
  | "Success"
  | "MessageRejected"
  | "MailFromDomainNotVerified"
  | "ConfigurationSetDoesNotExist"
  | "TemplateDoesNotExist"
  | "AccountSuspended"
  | "AccountThrottled"
  | "AccountDailyQuotaExceeded"
  | "InvalidSendingPoolName"
  | "AccountSendingPaused"
  | "ConfigurationSetSendingPaused"
  | "InvalidParameterValue"
  | "TransientFailure"
  | "Failed"
  | (string & {});
const BulkEmailStatus = S.String;

export interface BulkEmailDestinationStatus {
  Status?: BulkEmailStatus;
  Error?: string;
  MessageId?: string;
}
const BulkEmailDestinationStatus = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<BulkEmailDestinationStatus>;
export type BulkEmailDestinationStatusList = BulkEmailDestinationStatus[];
const BulkEmailDestinationStatusList = /*@__PURE__*/ __L.at(__c19, 6);
export interface SendBulkTemplatedEmailResponse {
  Status: BulkEmailDestinationStatus[];
}
const SendBulkTemplatedEmailResponse = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<SendBulkTemplatedEmailResponse>;
export interface SendCustomVerificationEmailRequest {
  EmailAddress: string;
  TemplateName: string;
  ConfigurationSetName?: string;
}
const SendCustomVerificationEmailRequest = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<SendCustomVerificationEmailRequest>;
export interface SendCustomVerificationEmailResponse {
  MessageId?: string;
}
const SendCustomVerificationEmailResponse = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<SendCustomVerificationEmailResponse>;
export type MessageData = string;
export type Charset = string;
export interface Content {
  Data: string;
  Charset?: string;
}
const Content = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<Content>;
export interface Body {
  Text?: Content;
  Html?: Content;
}
const Body = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<Body>;
export interface Message {
  Subject: Content;
  Body: Body;
}
const Message = /*@__PURE__*/ __L.at(__c20, 4) as any as S.Schema<Message>;
export interface SendEmailRequest {
  Source: string;
  Destination: Destination;
  Message: Message;
  ReplyToAddresses?: string[];
  ReturnPath?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: MessageTag[];
  ConfigurationSetName?: string;
}
const SendEmailRequest = /*@__PURE__*/ __L.at(__c20, 5) as any as S.Schema<SendEmailRequest>;
export interface SendEmailResponse {
  MessageId: string;
}
const SendEmailResponse = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<SendEmailResponse>;
export type RawMessageData = Uint8Array;
export interface RawMessage {
  Data: Uint8Array;
}
const RawMessage = /*@__PURE__*/ __L.at(__c20, 7) as any as S.Schema<RawMessage>;
export interface SendRawEmailRequest {
  Source?: string;
  Destinations?: string[];
  RawMessage: RawMessage;
  FromArn?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: MessageTag[];
  ConfigurationSetName?: string;
}
const SendRawEmailRequest = /*@__PURE__*/ __L.at(__c21, 0) as any as S.Schema<SendRawEmailRequest>;
export interface SendRawEmailResponse {
  MessageId: string;
}
const SendRawEmailResponse = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<SendRawEmailResponse>;
export interface SendTemplatedEmailRequest {
  Source: string;
  Destination: Destination;
  ReplyToAddresses?: string[];
  ReturnPath?: string;
  SourceArn?: string;
  ReturnPathArn?: string;
  Tags?: MessageTag[];
  ConfigurationSetName?: string;
  Template: string;
  TemplateArn?: string;
  TemplateData: string;
}
const SendTemplatedEmailRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<SendTemplatedEmailRequest>;
export interface SendTemplatedEmailResponse {
  MessageId: string;
}
const SendTemplatedEmailResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<SendTemplatedEmailResponse>;
export interface SetActiveReceiptRuleSetRequest {
  RuleSetName?: string;
}
const SetActiveReceiptRuleSetRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<SetActiveReceiptRuleSetRequest>;
export interface SetActiveReceiptRuleSetResponse {}
const SetActiveReceiptRuleSetResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<SetActiveReceiptRuleSetResponse>;
export interface SetIdentityDkimEnabledRequest {
  Identity: string;
  DkimEnabled: boolean;
}
const SetIdentityDkimEnabledRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<SetIdentityDkimEnabledRequest>;
export interface SetIdentityDkimEnabledResponse {}
const SetIdentityDkimEnabledResponse = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<SetIdentityDkimEnabledResponse>;
export interface SetIdentityFeedbackForwardingEnabledRequest {
  Identity: string;
  ForwardingEnabled: boolean;
}
const SetIdentityFeedbackForwardingEnabledRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<SetIdentityFeedbackForwardingEnabledRequest>;
export interface SetIdentityFeedbackForwardingEnabledResponse {}
const SetIdentityFeedbackForwardingEnabledResponse = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<SetIdentityFeedbackForwardingEnabledResponse>;
export type NotificationType = "Bounce" | "Complaint" | "Delivery" | (string & {});
const NotificationType = S.String;

export interface SetIdentityHeadersInNotificationsEnabledRequest {
  Identity: string;
  NotificationType: NotificationType;
  Enabled: boolean;
}
const SetIdentityHeadersInNotificationsEnabledRequest = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<SetIdentityHeadersInNotificationsEnabledRequest>;
export interface SetIdentityHeadersInNotificationsEnabledResponse {}
const SetIdentityHeadersInNotificationsEnabledResponse = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<SetIdentityHeadersInNotificationsEnabledResponse>;
export interface SetIdentityMailFromDomainRequest {
  Identity: string;
  MailFromDomain?: string;
  BehaviorOnMXFailure?: BehaviorOnMXFailure;
}
const SetIdentityMailFromDomainRequest = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<SetIdentityMailFromDomainRequest>;
export interface SetIdentityMailFromDomainResponse {}
const SetIdentityMailFromDomainResponse = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<SetIdentityMailFromDomainResponse>;
export interface SetIdentityNotificationTopicRequest {
  Identity: string;
  NotificationType: NotificationType;
  SnsTopic?: string;
}
const SetIdentityNotificationTopicRequest = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<SetIdentityNotificationTopicRequest>;
export interface SetIdentityNotificationTopicResponse {}
const SetIdentityNotificationTopicResponse = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<SetIdentityNotificationTopicResponse>;
export interface SetReceiptRulePositionRequest {
  RuleSetName: string;
  RuleName: string;
  After?: string;
}
const SetReceiptRulePositionRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<SetReceiptRulePositionRequest>;
export interface SetReceiptRulePositionResponse {}
const SetReceiptRulePositionResponse = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<SetReceiptRulePositionResponse>;
export interface TestRenderTemplateRequest {
  TemplateName: string;
  TemplateData: string;
}
const TestRenderTemplateRequest = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<TestRenderTemplateRequest>;
export type RenderedTemplate = string;
export interface TestRenderTemplateResponse {
  RenderedTemplate?: string;
}
const TestRenderTemplateResponse = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<TestRenderTemplateResponse>;
export interface UpdateAccountSendingEnabledRequest {
  Enabled?: boolean;
}
const UpdateAccountSendingEnabledRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<UpdateAccountSendingEnabledRequest>;
export interface UpdateAccountSendingEnabledResponse {}
const UpdateAccountSendingEnabledResponse = /*@__PURE__*/ __L.at(
  __c23,
  5,
) as any as S.Schema<UpdateAccountSendingEnabledResponse>;
export interface UpdateConfigurationSetEventDestinationRequest {
  ConfigurationSetName: string;
  EventDestination: EventDestination;
}
const UpdateConfigurationSetEventDestinationRequest = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<UpdateConfigurationSetEventDestinationRequest>;
export interface UpdateConfigurationSetEventDestinationResponse {}
const UpdateConfigurationSetEventDestinationResponse = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<UpdateConfigurationSetEventDestinationResponse>;
export interface UpdateConfigurationSetReputationMetricsEnabledRequest {
  ConfigurationSetName: string;
  Enabled: boolean;
}
const UpdateConfigurationSetReputationMetricsEnabledRequest = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<UpdateConfigurationSetReputationMetricsEnabledRequest>;
export interface UpdateConfigurationSetReputationMetricsEnabledResponse {}
const UpdateConfigurationSetReputationMetricsEnabledResponse = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<UpdateConfigurationSetReputationMetricsEnabledResponse>;
export interface UpdateConfigurationSetSendingEnabledRequest {
  ConfigurationSetName: string;
  Enabled: boolean;
}
const UpdateConfigurationSetSendingEnabledRequest = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<UpdateConfigurationSetSendingEnabledRequest>;
export interface UpdateConfigurationSetSendingEnabledResponse {}
const UpdateConfigurationSetSendingEnabledResponse = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<UpdateConfigurationSetSendingEnabledResponse>;
export interface UpdateConfigurationSetTrackingOptionsRequest {
  ConfigurationSetName: string;
  TrackingOptions: TrackingOptions;
}
const UpdateConfigurationSetTrackingOptionsRequest = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<UpdateConfigurationSetTrackingOptionsRequest>;
export interface UpdateConfigurationSetTrackingOptionsResponse {}
const UpdateConfigurationSetTrackingOptionsResponse = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<UpdateConfigurationSetTrackingOptionsResponse>;
export interface UpdateCustomVerificationEmailTemplateRequest {
  TemplateName: string;
  FromEmailAddress?: string;
  TemplateSubject?: string;
  TemplateContent?: string;
  SuccessRedirectionURL?: string;
  FailureRedirectionURL?: string;
}
const UpdateCustomVerificationEmailTemplateRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<UpdateCustomVerificationEmailTemplateRequest>;
export interface UpdateCustomVerificationEmailTemplateResponse {}
const UpdateCustomVerificationEmailTemplateResponse = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<UpdateCustomVerificationEmailTemplateResponse>;
export interface UpdateReceiptRuleRequest {
  RuleSetName: string;
  Rule: ReceiptRule;
}
const UpdateReceiptRuleRequest = /*@__PURE__*/ __L.at(
  __c25,
  0,
) as any as S.Schema<UpdateReceiptRuleRequest>;
export interface UpdateReceiptRuleResponse {}
const UpdateReceiptRuleResponse = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<UpdateReceiptRuleResponse>;
export interface UpdateTemplateRequest {
  Template: Template;
}
const UpdateTemplateRequest = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<UpdateTemplateRequest>;
export interface UpdateTemplateResponse {}
const UpdateTemplateResponse = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<UpdateTemplateResponse>;
export type Domain = string;
export interface VerifyDomainDkimRequest {
  Domain: string;
}
const VerifyDomainDkimRequest = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<VerifyDomainDkimRequest>;
export interface VerifyDomainDkimResponse {
  DkimTokens: string[];
}
const VerifyDomainDkimResponse = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<VerifyDomainDkimResponse>;
export interface VerifyDomainIdentityRequest {
  Domain: string;
}
const VerifyDomainIdentityRequest = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<VerifyDomainIdentityRequest>;
export interface VerifyDomainIdentityResponse {
  VerificationToken: string;
}
const VerifyDomainIdentityResponse = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<VerifyDomainIdentityResponse>;
export interface VerifyEmailAddressRequest {
  EmailAddress: string;
}
const VerifyEmailAddressRequest = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<VerifyEmailAddressRequest>;
export interface VerifyEmailAddressResponse {}
const VerifyEmailAddressResponse = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<VerifyEmailAddressResponse>;
export interface VerifyEmailIdentityRequest {
  EmailAddress: string;
}
const VerifyEmailIdentityRequest = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<VerifyEmailIdentityRequest>;
export interface VerifyEmailIdentityResponse {}
const VerifyEmailIdentityResponse = /*@__PURE__*/ __L.at(
  __c26,
  3,
) as any as S.Schema<VerifyEmailIdentityResponse>;
export type RuleOrRuleSetName = string;
export type ErrorMessage = string;
export type CloneReceiptRuleSetError =
  | AlreadyExistsException
  | LimitExceededException
  | RuleSetDoesNotExistException
  | CommonErrors;
/**
 * Creates a receipt rule set by cloning an existing one. All receipt rules and
 * configurations are copied to the new receipt rule set and are completely independent of
 * the source rule set.
 *
 * For information about setting up rule sets, see the Amazon SES Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const cloneReceiptRuleSet: API.OperationMethod<
  CloneReceiptRuleSetRequest,
  CloneReceiptRuleSetResponse,
  CloneReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CloneReceiptRuleSetRequest,
  output: CloneReceiptRuleSetResponse,
  errors: [AlreadyExistsException, LimitExceededException, RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CloneReceiptRuleSet",
}));

export type CreateConfigurationSetError =
  | ConfigurationSetAlreadyExistsException
  | InvalidConfigurationSetException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a configuration set.
 *
 * Configuration sets enable you to publish email sending events. For information about
 * using configuration sets, see the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createConfigurationSet: API.OperationMethod<
  CreateConfigurationSetRequest,
  CreateConfigurationSetResponse,
  CreateConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConfigurationSetRequest,
  output: CreateConfigurationSetResponse,
  errors: [
    ConfigurationSetAlreadyExistsException,
    InvalidConfigurationSetException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationSet",
}));

export type CreateConfigurationSetEventDestinationError =
  | ConfigurationSetDoesNotExistException
  | EventDestinationAlreadyExistsException
  | InvalidCloudWatchDestinationException
  | InvalidFirehoseDestinationException
  | InvalidSNSDestinationException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a configuration set event destination.
 *
 * When you create or update an event destination, you must provide one, and only
 * one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).
 *
 * An event destination is the Amazon Web Services service to which Amazon SES publishes the email sending
 * events associated with a configuration set. For information about using configuration
 * sets, see the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createConfigurationSetEventDestination: API.OperationMethod<
  CreateConfigurationSetEventDestinationRequest,
  CreateConfigurationSetEventDestinationResponse,
  CreateConfigurationSetEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConfigurationSetEventDestinationRequest,
  output: CreateConfigurationSetEventDestinationResponse,
  errors: [
    ConfigurationSetDoesNotExistException,
    EventDestinationAlreadyExistsException,
    InvalidCloudWatchDestinationException,
    InvalidFirehoseDestinationException,
    InvalidSNSDestinationException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationSetEventDestination",
}));

export type CreateConfigurationSetTrackingOptionsError =
  | ConfigurationSetDoesNotExistException
  | InvalidTrackingOptionsException
  | TrackingOptionsAlreadyExistsException
  | CommonErrors;
/**
 * Creates an association between a configuration set and a custom domain for open and
 * click event tracking.
 *
 * By default, images and links used for tracking open and click events are hosted on
 * domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 * events. For information about using custom domains, see the Amazon SES Developer Guide.
 */
export const createConfigurationSetTrackingOptions: API.OperationMethod<
  CreateConfigurationSetTrackingOptionsRequest,
  CreateConfigurationSetTrackingOptionsResponse,
  CreateConfigurationSetTrackingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConfigurationSetTrackingOptionsRequest,
  output: CreateConfigurationSetTrackingOptionsResponse,
  errors: [
    ConfigurationSetDoesNotExistException,
    InvalidTrackingOptionsException,
    TrackingOptionsAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationSetTrackingOptions",
}));

export type CreateCustomVerificationEmailTemplateError =
  | CustomVerificationEmailInvalidContentException
  | CustomVerificationEmailTemplateAlreadyExistsException
  | FromEmailAddressNotVerifiedException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a new custom verification email template.
 *
 * For more information about custom verification email templates, see Using
 * Custom Verification Email Templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createCustomVerificationEmailTemplate: API.OperationMethod<
  CreateCustomVerificationEmailTemplateRequest,
  CreateCustomVerificationEmailTemplateResponse,
  CreateCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomVerificationEmailTemplateRequest,
  output: CreateCustomVerificationEmailTemplateResponse,
  errors: [
    CustomVerificationEmailInvalidContentException,
    CustomVerificationEmailTemplateAlreadyExistsException,
    FromEmailAddressNotVerifiedException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomVerificationEmailTemplate",
}));

export type CreateReceiptFilterError =
  | AlreadyExistsException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a new IP address filter.
 *
 * For information about setting up IP address filters, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createReceiptFilter: API.OperationMethod<
  CreateReceiptFilterRequest,
  CreateReceiptFilterResponse,
  CreateReceiptFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateReceiptFilterRequest,
  output: CreateReceiptFilterResponse,
  errors: [AlreadyExistsException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReceiptFilter",
}));

export type CreateReceiptRuleError =
  | AlreadyExistsException
  | InvalidLambdaFunctionException
  | InvalidS3ConfigurationException
  | InvalidSnsTopicException
  | LimitExceededException
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException
  | InvalidParameterValue
  | IdentityNotVerified
  | ReceiptRuleRoleNotAssumable
  | CommonErrors;
/**
 * Creates a receipt rule.
 *
 * For information about setting up receipt rules, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createReceiptRule: API.OperationMethod<
  CreateReceiptRuleRequest,
  CreateReceiptRuleResponse,
  CreateReceiptRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateReceiptRuleRequest,
  output: CreateReceiptRuleResponse,
  errors: [
    AlreadyExistsException,
    InvalidLambdaFunctionException,
    InvalidS3ConfigurationException,
    InvalidSnsTopicException,
    LimitExceededException,
    RuleDoesNotExistException,
    RuleSetDoesNotExistException,
    InvalidParameterValue,
    IdentityNotVerified,
    ReceiptRuleRoleNotAssumable,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReceiptRule",
}));

export type CreateReceiptRuleSetError =
  | AlreadyExistsException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates an empty receipt rule set.
 *
 * For information about setting up receipt rule sets, see the Amazon SES Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createReceiptRuleSet: API.OperationMethod<
  CreateReceiptRuleSetRequest,
  CreateReceiptRuleSetResponse,
  CreateReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateReceiptRuleSetRequest,
  output: CreateReceiptRuleSetResponse,
  errors: [AlreadyExistsException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReceiptRuleSet",
}));

export type CreateTemplateError =
  | AlreadyExistsException
  | InvalidTemplateException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates an email template. Email templates enable you to send personalized email to
 * one or more destinations in a single operation. For more information, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const createTemplate: API.OperationMethod<
  CreateTemplateRequest,
  CreateTemplateResponse,
  CreateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTemplateRequest,
  output: CreateTemplateResponse,
  errors: [AlreadyExistsException, InvalidTemplateException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTemplate",
}));

export type DeleteConfigurationSetError = ConfigurationSetDoesNotExistException | CommonErrors;
/**
 * Deletes a configuration set. Configuration sets enable you to publish email sending
 * events. For information about using configuration sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteConfigurationSet: API.OperationMethod<
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
  DeleteConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConfigurationSetRequest,
  output: DeleteConfigurationSetResponse,
  errors: [ConfigurationSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationSet",
}));

export type DeleteConfigurationSetEventDestinationError =
  | ConfigurationSetDoesNotExistException
  | EventDestinationDoesNotExistException
  | CommonErrors;
/**
 * Deletes a configuration set event destination. Configuration set event destinations
 * are associated with configuration sets, which enable you to publish email sending
 * events. For information about using configuration sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteConfigurationSetEventDestination: API.OperationMethod<
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
  DeleteConfigurationSetEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConfigurationSetEventDestinationRequest,
  output: DeleteConfigurationSetEventDestinationResponse,
  errors: [ConfigurationSetDoesNotExistException, EventDestinationDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationSetEventDestination",
}));

export type DeleteConfigurationSetTrackingOptionsError =
  | ConfigurationSetDoesNotExistException
  | TrackingOptionsDoesNotExistException
  | CommonErrors;
/**
 * Deletes an association between a configuration set and a custom domain for open and
 * click event tracking.
 *
 * By default, images and links used for tracking open and click events are hosted on
 * domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 * events. For information about using custom domains, see the Amazon SES Developer Guide.
 *
 * Deleting this kind of association results in emails sent using the specified
 * configuration set to capture open and click events using the standard,
 * Amazon SES-operated domains.
 */
export const deleteConfigurationSetTrackingOptions: API.OperationMethod<
  DeleteConfigurationSetTrackingOptionsRequest,
  DeleteConfigurationSetTrackingOptionsResponse,
  DeleteConfigurationSetTrackingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConfigurationSetTrackingOptionsRequest,
  output: DeleteConfigurationSetTrackingOptionsResponse,
  errors: [ConfigurationSetDoesNotExistException, TrackingOptionsDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationSetTrackingOptions",
}));

export type DeleteCustomVerificationEmailTemplateError = CommonErrors;
/**
 * Deletes an existing custom verification email template.
 *
 * For more information about custom verification email templates, see Using
 * Custom Verification Email Templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteCustomVerificationEmailTemplate: API.OperationMethod<
  DeleteCustomVerificationEmailTemplateRequest,
  DeleteCustomVerificationEmailTemplateResponse,
  DeleteCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomVerificationEmailTemplateRequest,
  output: DeleteCustomVerificationEmailTemplateResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomVerificationEmailTemplate",
}));

export type DeleteIdentityError = CommonErrors;
/**
 * Deletes the specified identity (an email address or a domain) from the list of
 * verified identities.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteIdentity: API.OperationMethod<
  DeleteIdentityRequest,
  DeleteIdentityResponse,
  DeleteIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIdentityRequest,
  output: DeleteIdentityResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdentity",
}));

export type DeleteIdentityPolicyError = CommonErrors;
/**
 * Deletes the specified sending authorization policy for the given identity (an email
 * address or a domain). This operation returns successfully even if a policy with the
 * specified name does not exist.
 *
 * This operation is for the identity owner only. If you have not verified the
 * identity, it returns an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteIdentityPolicy: API.OperationMethod<
  DeleteIdentityPolicyRequest,
  DeleteIdentityPolicyResponse,
  DeleteIdentityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIdentityPolicyRequest,
  output: DeleteIdentityPolicyResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdentityPolicy",
}));

export type DeleteReceiptFilterError = CommonErrors;
/**
 * Deletes the specified IP address filter.
 *
 * For information about managing IP address filters, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteReceiptFilter: API.OperationMethod<
  DeleteReceiptFilterRequest,
  DeleteReceiptFilterResponse,
  DeleteReceiptFilterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteReceiptFilterRequest,
  output: DeleteReceiptFilterResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReceiptFilter",
}));

export type DeleteReceiptRuleError = RuleSetDoesNotExistException | CommonErrors;
/**
 * Deletes the specified receipt rule.
 *
 * For information about managing receipt rules, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteReceiptRule: API.OperationMethod<
  DeleteReceiptRuleRequest,
  DeleteReceiptRuleResponse,
  DeleteReceiptRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteReceiptRuleRequest,
  output: DeleteReceiptRuleResponse,
  errors: [RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReceiptRule",
}));

export type DeleteReceiptRuleSetError = CannotDeleteException | CommonErrors;
/**
 * Deletes the specified receipt rule set and all of the receipt rules it
 * contains.
 *
 * The currently active rule set cannot be deleted.
 *
 * For information about managing receipt rule sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteReceiptRuleSet: API.OperationMethod<
  DeleteReceiptRuleSetRequest,
  DeleteReceiptRuleSetResponse,
  DeleteReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteReceiptRuleSetRequest,
  output: DeleteReceiptRuleSetResponse,
  errors: [CannotDeleteException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteReceiptRuleSet",
}));

export type DeleteTemplateError = CommonErrors;
/**
 * Deletes an email template.
 *
 * You can execute this operation no more than once per second.
 */
export const deleteTemplate: API.OperationMethod<
  DeleteTemplateRequest,
  DeleteTemplateResponse,
  DeleteTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTemplateRequest,
  output: DeleteTemplateResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTemplate",
}));

export type DeleteVerifiedEmailAddressError = CommonErrors;
/**
 * Deprecated. Use the `DeleteIdentity` operation to delete email addresses
 * and domains.
 */
export const deleteVerifiedEmailAddress: API.OperationMethod<
  DeleteVerifiedEmailAddressRequest,
  DeleteVerifiedEmailAddressResponse,
  DeleteVerifiedEmailAddressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteVerifiedEmailAddressRequest,
  output: DeleteVerifiedEmailAddressResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVerifiedEmailAddress",
}));

export type DescribeActiveReceiptRuleSetError = CommonErrors;
/**
 * Returns the metadata and receipt rules for the receipt rule set that is currently
 * active.
 *
 * For information about setting up receipt rule sets, see the Amazon SES Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const describeActiveReceiptRuleSet: API.OperationMethod<
  DescribeActiveReceiptRuleSetRequest,
  DescribeActiveReceiptRuleSetResponse,
  DescribeActiveReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeActiveReceiptRuleSetRequest,
  output: DescribeActiveReceiptRuleSetResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeActiveReceiptRuleSet",
}));

export type DescribeConfigurationSetError = ConfigurationSetDoesNotExistException | CommonErrors;
/**
 * Returns the details of the specified configuration set. For information about using
 * configuration sets, see the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const describeConfigurationSet: API.OperationMethod<
  DescribeConfigurationSetRequest,
  DescribeConfigurationSetResponse,
  DescribeConfigurationSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeConfigurationSetRequest,
  output: DescribeConfigurationSetResponse,
  errors: [ConfigurationSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeConfigurationSet",
}));

export type DescribeReceiptRuleError =
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException
  | CommonErrors;
/**
 * Returns the details of the specified receipt rule.
 *
 * For information about setting up receipt rules, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const describeReceiptRule: API.OperationMethod<
  DescribeReceiptRuleRequest,
  DescribeReceiptRuleResponse,
  DescribeReceiptRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeReceiptRuleRequest,
  output: DescribeReceiptRuleResponse,
  errors: [RuleDoesNotExistException, RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReceiptRule",
}));

export type DescribeReceiptRuleSetError = RuleSetDoesNotExistException | CommonErrors;
/**
 * Returns the details of the specified receipt rule set.
 *
 * For information about managing receipt rule sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const describeReceiptRuleSet: API.OperationMethod<
  DescribeReceiptRuleSetRequest,
  DescribeReceiptRuleSetResponse,
  DescribeReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeReceiptRuleSetRequest,
  output: DescribeReceiptRuleSetResponse,
  errors: [RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReceiptRuleSet",
}));

export type GetAccountSendingEnabledError = CommonErrors;
/**
 * Returns the email sending status of the Amazon SES account for the current Region.
 *
 * You can execute this operation no more than once per second.
 */
export const getAccountSendingEnabled: API.OperationMethod<
  GetAccountSendingEnabledRequest,
  GetAccountSendingEnabledResponse,
  GetAccountSendingEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccountSendingEnabledRequest,
  output: GetAccountSendingEnabledResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSendingEnabled",
}));

export type GetCustomVerificationEmailTemplateError =
  | CustomVerificationEmailTemplateDoesNotExistException
  | CommonErrors;
/**
 * Returns the custom email verification template for the template name you
 * specify.
 *
 * For more information about custom verification email templates, see Using
 * Custom Verification Email Templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const getCustomVerificationEmailTemplate: API.OperationMethod<
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse,
  GetCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomVerificationEmailTemplateRequest,
  output: GetCustomVerificationEmailTemplateResponse,
  errors: [CustomVerificationEmailTemplateDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomVerificationEmailTemplate",
}));

export type GetIdentityDkimAttributesError = CommonErrors;
/**
 * Returns the current status of Easy DKIM signing for an entity. For domain name
 * identities, this operation also returns the DKIM tokens that are required for Easy DKIM
 * signing, and whether Amazon SES has successfully verified that these tokens have been
 * published.
 *
 * This operation takes a list of identities as input and returns the following
 * information for each:
 *
 * - Whether Easy DKIM signing is enabled or disabled.
 *
 * - A set of DKIM tokens that represent the identity. If the identity is an email
 * address, the tokens represent the domain of that address.
 *
 * - Whether Amazon SES has successfully verified the DKIM tokens published in the
 * domain's DNS. This information is only returned for domain name identities, not
 * for email addresses.
 *
 * This operation is throttled at one request per second and can only get DKIM attributes
 * for up to 100 identities at a time.
 *
 * For more information about creating DNS records using DKIM tokens, go to the Amazon SES
 * Developer Guide.
 */
export const getIdentityDkimAttributes: API.OperationMethod<
  GetIdentityDkimAttributesRequest,
  GetIdentityDkimAttributesResponse,
  GetIdentityDkimAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityDkimAttributesRequest,
  output: GetIdentityDkimAttributesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityDkimAttributes",
}));

export type GetIdentityMailFromDomainAttributesError = CommonErrors;
/**
 * Returns the custom MAIL FROM attributes for a list of identities (email addresses :
 * domains).
 *
 * This operation is throttled at one request per second and can only get custom MAIL
 * FROM attributes for up to 100 identities at a time.
 */
export const getIdentityMailFromDomainAttributes: API.OperationMethod<
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
  GetIdentityMailFromDomainAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityMailFromDomainAttributesRequest,
  output: GetIdentityMailFromDomainAttributesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityMailFromDomainAttributes",
}));

export type GetIdentityNotificationAttributesError = CommonErrors;
/**
 * Given a list of verified identities (email addresses and/or domains), returns a
 * structure describing identity notification attributes.
 *
 * This operation is throttled at one request per second and can only get notification
 * attributes for up to 100 identities at a time.
 *
 * For more information about using notifications with Amazon SES, see the Amazon SES
 * Developer Guide.
 */
export const getIdentityNotificationAttributes: API.OperationMethod<
  GetIdentityNotificationAttributesRequest,
  GetIdentityNotificationAttributesResponse,
  GetIdentityNotificationAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityNotificationAttributesRequest,
  output: GetIdentityNotificationAttributesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityNotificationAttributes",
}));

export type GetIdentityPoliciesError = CommonErrors;
/**
 * Returns the requested sending authorization policies for the given identity (an email
 * address or a domain). The policies are returned as a map of policy names to policy
 * contents. You can retrieve a maximum of 20 policies at a time.
 *
 * This operation is for the identity owner only. If you have not verified the
 * identity, it returns an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const getIdentityPolicies: API.OperationMethod<
  GetIdentityPoliciesRequest,
  GetIdentityPoliciesResponse,
  GetIdentityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityPoliciesRequest,
  output: GetIdentityPoliciesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityPolicies",
}));

export type GetIdentityVerificationAttributesError = CommonErrors;
/**
 * Given a list of identities (email addresses and/or domains), returns the verification
 * status and (for domain identities) the verification token for each identity.
 *
 * The verification status of an email address is "Pending" until the email address owner
 * clicks the link within the verification email that Amazon SES sent to that address. If the
 * email address owner clicks the link within 24 hours, the verification status of the
 * email address changes to "Success". If the link is not clicked within 24 hours, the
 * verification status changes to "Failed." In that case, to verify the email address, you
 * must restart the verification process from the beginning.
 *
 * For domain identities, the domain's verification status is "Pending" as Amazon SES searches
 * for the required TXT record in the DNS settings of the domain. When Amazon SES detects the
 * record, the domain's verification status changes to "Success". If Amazon SES is unable to
 * detect the record within 72 hours, the domain's verification status changes to "Failed."
 * In that case, to verify the domain, you must restart the verification process from the
 * beginning.
 *
 * This operation is throttled at one request per second and can only get verification
 * attributes for up to 100 identities at a time.
 */
export const getIdentityVerificationAttributes: API.OperationMethod<
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
  GetIdentityVerificationAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityVerificationAttributesRequest,
  output: GetIdentityVerificationAttributesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityVerificationAttributes",
}));

export type GetSendQuotaError = CommonErrors;
/**
 * Provides the sending limits for the Amazon SES account.
 *
 * You can execute this operation no more than once per second.
 */
export const getSendQuota: API.OperationMethod<
  GetSendQuotaRequest,
  GetSendQuotaResponse,
  GetSendQuotaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSendQuotaRequest,
  output: GetSendQuotaResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSendQuota",
}));

export type GetSendStatisticsError = CommonErrors;
/**
 * Provides sending statistics for the current Amazon Web Services Region. The result is a list of data
 * points, representing the last two weeks of sending activity. Each data point in the list
 * contains statistics for a 15-minute period of time.
 *
 * You can execute this operation no more than once per second.
 */
export const getSendStatistics: API.OperationMethod<
  GetSendStatisticsRequest,
  GetSendStatisticsResponse,
  GetSendStatisticsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSendStatisticsRequest,
  output: GetSendStatisticsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSendStatistics",
}));

export type GetTemplateError = TemplateDoesNotExistException | CommonErrors;
/**
 * Displays the template object (which includes the Subject line, HTML part and text
 * part) for the template you specify.
 *
 * You can execute this operation no more than once per second.
 */
export const getTemplate: API.OperationMethod<
  GetTemplateRequest,
  GetTemplateResponse,
  GetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTemplateRequest,
  output: GetTemplateResponse,
  errors: [TemplateDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemplate",
}));

export type ListConfigurationSetsError = CommonErrors;
/**
 * Provides a list of the configuration sets associated with your Amazon SES account in the
 * current Amazon Web Services Region. For information about using configuration sets, see Monitoring
 * Your Amazon SES Sending Activity in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second. This operation returns up
 * to 1,000 configuration sets each time it is run. If your Amazon SES account has more than
 * 1,000 configuration sets, this operation also returns `NextToken`. You can
 * then execute the `ListConfigurationSets` operation again, passing the
 * `NextToken` parameter and the value of the NextToken element to retrieve
 * additional results.
 */
export const listConfigurationSets: API.OperationMethod<
  ListConfigurationSetsRequest,
  ListConfigurationSetsResponse,
  ListConfigurationSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListConfigurationSetsRequest,
  output: ListConfigurationSetsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationSets",
}));

export type ListCustomVerificationEmailTemplatesError = CommonErrors;
/**
 * Lists the existing custom verification email templates for your account in the current
 * Amazon Web Services Region.
 *
 * For more information about custom verification email templates, see Using
 * Custom Verification Email Templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const listCustomVerificationEmailTemplates: API.PaginatedOperationMethod<
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
  ListCustomVerificationEmailTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomVerificationEmailTemplatesRequest,
  output: ListCustomVerificationEmailTemplatesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomVerificationEmailTemplates",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIdentitiesError = CommonErrors;
/**
 * Returns a list containing all of the identities (email addresses and domains) for your
 * Amazon Web Services account in the current Amazon Web Services Region, regardless of verification status.
 *
 * You can execute this operation no more than once per second.
 *
 * It's recommended that for successive pagination calls of this API, you continue to
 * the use the same parameter/value pairs as used in the original call, e.g., if you
 * used `IdentityType=Domain` in the the original call and received a
 * `NextToken` in the response, you should continue providing the
 * `IdentityType=Domain` parameter for further `NextToken`
 * calls; however, if you didn't provide the `IdentityType` parameter in the
 * original call, then continue to not provide it for successive pagination calls.
 * Using this protocol will ensure consistent results.
 */
export const listIdentities: API.PaginatedOperationMethod<
  ListIdentitiesRequest,
  ListIdentitiesResponse,
  ListIdentitiesError,
  Credentials | HttpClient.HttpClient,
  Identity
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdentitiesRequest,
  output: ListIdentitiesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentities",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Identities",
    pageSize: "MaxItems",
  } as const,
})) as any;

export type ListIdentityPoliciesError = CommonErrors;
/**
 * Returns a list of sending authorization policies that are attached to the given
 * identity (an email address or a domain). This operation returns only a list. To get the
 * actual policy content, use `GetIdentityPolicies`.
 *
 * This operation is for the identity owner only. If you have not verified the
 * identity, it returns an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const listIdentityPolicies: API.OperationMethod<
  ListIdentityPoliciesRequest,
  ListIdentityPoliciesResponse,
  ListIdentityPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListIdentityPoliciesRequest,
  output: ListIdentityPoliciesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentityPolicies",
}));

export type ListReceiptFiltersError = CommonErrors;
/**
 * Lists the IP address filters associated with your Amazon Web Services account in the current
 * Amazon Web Services Region.
 *
 * For information about managing IP address filters, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const listReceiptFilters: API.OperationMethod<
  ListReceiptFiltersRequest,
  ListReceiptFiltersResponse,
  ListReceiptFiltersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReceiptFiltersRequest,
  output: ListReceiptFiltersResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReceiptFilters",
}));

export type ListReceiptRuleSetsError = CommonErrors;
/**
 * Lists the receipt rule sets that exist under your Amazon Web Services account in the current
 * Amazon Web Services Region. If there are additional receipt rule sets to be retrieved, you receive a
 * `NextToken` that you can provide to the next call to
 * `ListReceiptRuleSets` to retrieve the additional entries.
 *
 * For information about managing receipt rule sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const listReceiptRuleSets: API.OperationMethod<
  ListReceiptRuleSetsRequest,
  ListReceiptRuleSetsResponse,
  ListReceiptRuleSetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReceiptRuleSetsRequest,
  output: ListReceiptRuleSetsResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReceiptRuleSets",
}));

export type ListTemplatesError = CommonErrors;
/**
 * Lists the email templates present in your Amazon SES account in the current
 * Amazon Web Services Region.
 *
 * You can execute this operation no more than once per second.
 */
export const listTemplates: API.OperationMethod<
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListTemplatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTemplatesRequest,
  output: ListTemplatesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplates",
}));

export type ListVerifiedEmailAddressesError = CommonErrors;
/**
 * Deprecated. Use the `ListIdentities` operation to list the email addresses
 * and domains associated with your account.
 */
export const listVerifiedEmailAddresses: API.OperationMethod<
  ListVerifiedEmailAddressesRequest,
  ListVerifiedEmailAddressesResponse,
  ListVerifiedEmailAddressesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListVerifiedEmailAddressesRequest,
  output: ListVerifiedEmailAddressesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVerifiedEmailAddresses",
}));

export type PutConfigurationSetDeliveryOptionsError =
  | ConfigurationSetDoesNotExistException
  | InvalidDeliveryOptionsException
  | CommonErrors;
/**
 * Adds or updates the delivery options for a configuration set.
 */
export const putConfigurationSetDeliveryOptions: API.OperationMethod<
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
  PutConfigurationSetDeliveryOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutConfigurationSetDeliveryOptionsRequest,
  output: PutConfigurationSetDeliveryOptionsResponse,
  errors: [ConfigurationSetDoesNotExistException, InvalidDeliveryOptionsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutConfigurationSetDeliveryOptions",
}));

export type PutIdentityPolicyError = InvalidPolicyException | CommonErrors;
/**
 * Adds or updates a sending authorization policy for the specified identity (an email
 * address or a domain).
 *
 * This operation is for the identity owner only. If you have not verified the
 * identity, it returns an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other
 * senders to use its identities. For information about using sending authorization, see
 * the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const putIdentityPolicy: API.OperationMethod<
  PutIdentityPolicyRequest,
  PutIdentityPolicyResponse,
  PutIdentityPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutIdentityPolicyRequest,
  output: PutIdentityPolicyResponse,
  errors: [InvalidPolicyException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutIdentityPolicy",
}));

export type ReorderReceiptRuleSetError =
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException
  | CommonErrors;
/**
 * Reorders the receipt rules within a receipt rule set.
 *
 * All of the rules in the rule set must be represented in this request. That is, it
 * is error if the reorder request doesn't explicitly position all of the rules.
 *
 * For information about managing receipt rule sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const reorderReceiptRuleSet: API.OperationMethod<
  ReorderReceiptRuleSetRequest,
  ReorderReceiptRuleSetResponse,
  ReorderReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReorderReceiptRuleSetRequest,
  output: ReorderReceiptRuleSetResponse,
  errors: [RuleDoesNotExistException, RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ReorderReceiptRuleSet",
}));

export type SendBounceError = MessageRejected | CommonErrors;
/**
 * Generates and sends a bounce message to the sender of an email you received through
 * Amazon SES. You can only use this operation on an email up to 24 hours after you receive
 * it.
 *
 * You cannot use this operation to send generic bounces for mail that was not
 * received by Amazon SES.
 *
 * For information about receiving email through Amazon SES, see the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const sendBounce: API.OperationMethod<
  SendBounceRequest,
  SendBounceResponse,
  SendBounceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendBounceRequest,
  output: SendBounceResponse,
  errors: [MessageRejected],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendBounce",
}));

export type SendBulkTemplatedEmailError =
  | AccountSendingPausedException
  | ConfigurationSetDoesNotExistException
  | ConfigurationSetSendingPausedException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | TemplateDoesNotExistException
  | CommonErrors;
/**
 * Composes an email message to multiple destinations. The message body is created using
 * an email template.
 *
 * To send email using this operation, your call must meet the following
 * requirements:
 *
 * - The call must refer to an existing email template. You can create email
 * templates using CreateTemplate.
 *
 * - The message must be sent from a verified email address or domain.
 *
 * - If your account is still in the Amazon SES sandbox, you may send only to verified
 * addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 * Simulator. For more information, see Verifying Email
 * Addresses and Domains in the Amazon SES Developer
 * Guide.
 *
 * - The maximum message size is 10 MB.
 *
 * - Each `Destination` parameter must include at least one recipient
 * email address. The recipient address can be a To: address, a CC: address, or a
 * BCC: address. If a recipient email address is invalid (that is, it is not in the
 * format *UserName@[SubDomain.]Domain.TopLevelDomain*), the
 * entire message is rejected, even if the message contains other recipients that
 * are valid.
 *
 * - The message may not include more than 50 recipients, across the To:, CC: and
 * BCC: fields. If you need to send an email message to a larger audience, you can
 * divide your recipient list into groups of 50 or fewer, and then call the
 * `SendBulkTemplatedEmail` operation several times to send the
 * message to each group.
 *
 * - The number of destinations you can contact in a single call can be limited by
 * your account's maximum sending rate.
 */
export const sendBulkTemplatedEmail: API.OperationMethod<
  SendBulkTemplatedEmailRequest,
  SendBulkTemplatedEmailResponse,
  SendBulkTemplatedEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendBulkTemplatedEmailRequest,
  output: SendBulkTemplatedEmailResponse,
  errors: [
    AccountSendingPausedException,
    ConfigurationSetDoesNotExistException,
    ConfigurationSetSendingPausedException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
    TemplateDoesNotExistException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendBulkTemplatedEmail",
}));

export type SendCustomVerificationEmailError =
  | ConfigurationSetDoesNotExistException
  | CustomVerificationEmailTemplateDoesNotExistException
  | FromEmailAddressNotVerifiedException
  | MessageRejected
  | ProductionAccessNotGrantedException
  | CommonErrors;
/**
 * Adds an email address to the list of identities for your Amazon SES account in the current
 * Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a
 * customized verification email is sent to the specified address.
 *
 * To use this operation, you must first create a custom verification email template. For
 * more information about creating and using custom verification email templates, see
 * Using
 * Custom Verification Email Templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const sendCustomVerificationEmail: API.OperationMethod<
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailResponse,
  SendCustomVerificationEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendCustomVerificationEmailRequest,
  output: SendCustomVerificationEmailResponse,
  errors: [
    ConfigurationSetDoesNotExistException,
    CustomVerificationEmailTemplateDoesNotExistException,
    FromEmailAddressNotVerifiedException,
    MessageRejected,
    ProductionAccessNotGrantedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendCustomVerificationEmail",
}));

export type SendEmailError =
  | AccountSendingPausedException
  | ConfigurationSetDoesNotExistException
  | ConfigurationSetSendingPausedException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | CommonErrors;
/**
 * Composes an email message and immediately queues it for sending. To send email using
 * this operation, your message must meet the following requirements:
 *
 * - The message must be sent from a verified email address or domain. If you
 * attempt to send email using a non-verified address or domain, the operation
 * results in an "Email address not verified" error.
 *
 * - If your account is still in the Amazon SES sandbox, you may only send to verified
 * addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 * Simulator. For more information, see Verifying Email
 * Addresses and Domains in the Amazon SES Developer
 * Guide.
 *
 * - The maximum message size is 10 MB.
 *
 * - The message must include at least one recipient email address. The recipient
 * address can be a To: address, a CC: address, or a BCC: address. If a recipient
 * email address is invalid (that is, it is not in the format
 * *UserName@[SubDomain.]Domain.TopLevelDomain*), the entire
 * message is rejected, even if the message contains other recipients that are
 * valid.
 *
 * - The message may not include more than 50 recipients, across the To:, CC: and
 * BCC: fields. If you need to send an email message to a larger audience, you can
 * divide your recipient list into groups of 50 or fewer, and then call the
 * `SendEmail` operation several times to send the message to each
 * group.
 *
 * For every message that you send, the total number of recipients (including each
 * recipient in the To:, CC: and BCC: fields) is counted against the maximum number of
 * emails you can send in a 24-hour period (your *sending quota*).
 * For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending
 * Limits in the *Amazon SES Developer Guide.*
 */
export const sendEmail: API.OperationMethod<
  SendEmailRequest,
  SendEmailResponse,
  SendEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendEmailRequest,
  output: SendEmailResponse,
  errors: [
    AccountSendingPausedException,
    ConfigurationSetDoesNotExistException,
    ConfigurationSetSendingPausedException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendEmail",
}));

export type SendRawEmailError =
  | AccountSendingPausedException
  | ConfigurationSetDoesNotExistException
  | ConfigurationSetSendingPausedException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | CommonErrors;
/**
 * Composes an email message and immediately queues it for sending.
 *
 * This operation is more flexible than the `SendEmail` operation. When you
 * use the `SendRawEmail` operation, you can specify the headers of the message
 * as well as its content. This flexibility is useful, for example, when you need to send a
 * multipart MIME email (such a message that contains both a text and an HTML version). You
 * can also use this operation to send messages that include attachments.
 *
 * The `SendRawEmail` operation has the following requirements:
 *
 * - You can only send email from verified email addresses or domains. If you try to send email from
 * an address that isn't verified, the operation results in an "Email address not
 * verified" error.
 *
 * - If your account is still in the Amazon SES sandbox, you can only send email to other verified addresses
 * in your account, or to addresses that are associated with the Amazon SES mailbox simulator.
 *
 * - The maximum message size, including attachments, is 10 MB.
 *
 * - Each message has to include at least one recipient address. A recipient
 * address includes any address on the To:, CC:, or BCC: lines.
 *
 * - If you send a single message to more than one recipient address, and one of
 * the recipient addresses isn't in a valid format (that is, it's not in the format
 * *UserName@[SubDomain.]Domain.TopLevelDomain*), Amazon SES
 * rejects the entire message, even if the other addresses are valid.
 *
 * - Each message can include up to 50 recipient addresses across the To:, CC:, or
 * BCC: lines. If you need to send a single message to more than 50 recipients, you
 * have to split the list of recipient addresses into groups of less than 50
 * recipients, and send separate messages to each group.
 *
 * - Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message
 * parts. However, if Amazon SES has to modify the contents of your message (for
 * example, if you use open and click tracking), 8-bit content isn't preserved. For
 * this reason, we highly recommend that you encode all content that isn't 7-bit
 * ASCII. For more information, see MIME Encoding in the Amazon SES Developer
 * Guide.
 *
 * Additionally, keep the following considerations in mind when using the
 * `SendRawEmail` operation:
 *
 * - Although you can customize the message headers when using the
 * `SendRawEmail` operation, Amazon SES automatically applies its own
 * `Message-ID` and `Date` headers; if you passed these
 * headers when creating the message, they are overwritten by the values that Amazon SES
 * provides.
 *
 * - If you are using sending authorization to send on behalf of another user,
 * `SendRawEmail` enables you to specify the cross-account identity
 * for the email's Source, From, and Return-Path parameters in one of two ways: you
 * can pass optional parameters `SourceArn`, `FromArn`,
 * and/or `ReturnPathArn`, or you can include the following X-headers in
 * the header of your raw email:
 *
 * - `X-SES-SOURCE-ARN`
 *
 * - `X-SES-FROM-ARN`
 *
 * - `X-SES-RETURN-PATH-ARN`
 *
 * Don't include these X-headers in the DKIM signature. Amazon SES removes these
 * before it sends the email.
 *
 * If you only specify the `SourceIdentityArn` parameter, Amazon SES sets
 * the From and Return-Path addresses to the same identity that you
 * specified.
 *
 * For more information about sending authorization, see the Using
 * Sending Authorization with Amazon SES in the Amazon SES Developer
 * Guide.
 *
 * - For every message that you send, the total number of recipients (including
 * each recipient in the To:, CC: and BCC: fields) is counted against the maximum
 * number of emails you can send in a 24-hour period (your sending
 * quota). For more information about sending quotas in Amazon SES, see
 * Managing Your Amazon SES Sending Limits in the Amazon SES Developer
 * Guide.
 */
export const sendRawEmail: API.OperationMethod<
  SendRawEmailRequest,
  SendRawEmailResponse,
  SendRawEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendRawEmailRequest,
  output: SendRawEmailResponse,
  errors: [
    AccountSendingPausedException,
    ConfigurationSetDoesNotExistException,
    ConfigurationSetSendingPausedException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendRawEmail",
}));

export type SendTemplatedEmailError =
  | AccountSendingPausedException
  | ConfigurationSetDoesNotExistException
  | ConfigurationSetSendingPausedException
  | MailFromDomainNotVerifiedException
  | MessageRejected
  | TemplateDoesNotExistException
  | CommonErrors;
/**
 * Composes an email message using an email template and immediately queues it for
 * sending.
 *
 * To send email using this operation, your call must meet the following
 * requirements:
 *
 * - The call must refer to an existing email template. You can create email
 * templates using the CreateTemplate operation.
 *
 * - The message must be sent from a verified email address or domain.
 *
 * - If your account is still in the Amazon SES sandbox, you may only send to verified
 * addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 * Simulator. For more information, see Verifying Email
 * Addresses and Domains in the Amazon SES Developer
 * Guide.
 *
 * - The maximum message size is 10 MB.
 *
 * - Calls to the `SendTemplatedEmail` operation may only include one
 * `Destination` parameter. A destination is a set of recipients
 * that receives the same version of the email. The `Destination`
 * parameter can include up to 50 recipients, across the To:, CC: and BCC:
 * fields.
 *
 * - The `Destination` parameter must include at least one recipient
 * email address. The recipient address can be a To: address, a CC: address, or a
 * BCC: address. If a recipient email address is invalid (that is, it is not in the
 * format *UserName@[SubDomain.]Domain.TopLevelDomain*), the
 * entire message is rejected, even if the message contains other recipients that
 * are valid.
 *
 * If your call to the `SendTemplatedEmail` operation includes all of the
 * required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES
 * can't render the email because the template contains errors, it doesn't send the
 * email. Additionally, because it already accepted the message, Amazon SES doesn't return a
 * message stating that it was unable to send the email.
 *
 * For these reasons, we highly recommend that you set up Amazon SES to send you
 * notifications when Rendering Failure events occur. For more information, see Sending Personalized Email Using the Amazon SES API in the
 * *Amazon Simple Email Service Developer Guide*.
 */
export const sendTemplatedEmail: API.OperationMethod<
  SendTemplatedEmailRequest,
  SendTemplatedEmailResponse,
  SendTemplatedEmailError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendTemplatedEmailRequest,
  output: SendTemplatedEmailResponse,
  errors: [
    AccountSendingPausedException,
    ConfigurationSetDoesNotExistException,
    ConfigurationSetSendingPausedException,
    MailFromDomainNotVerifiedException,
    MessageRejected,
    TemplateDoesNotExistException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SendTemplatedEmail",
}));

export type SetActiveReceiptRuleSetError = RuleSetDoesNotExistException | CommonErrors;
/**
 * Sets the specified receipt rule set as the active receipt rule set.
 *
 * To disable your email-receiving through Amazon SES completely, you can call this
 * operation with `RuleSetName` set to null.
 *
 * For information about managing receipt rule sets, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const setActiveReceiptRuleSet: API.OperationMethod<
  SetActiveReceiptRuleSetRequest,
  SetActiveReceiptRuleSetResponse,
  SetActiveReceiptRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetActiveReceiptRuleSetRequest,
  output: SetActiveReceiptRuleSetResponse,
  errors: [RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetActiveReceiptRuleSet",
}));

export type SetIdentityDkimEnabledError = CommonErrors;
/**
 * Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM
 * signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends
 * from addresses on that domain. If Easy DKIM signing is enabled for an email address,
 * then Amazon SES uses DKIM to sign all email it sends from that address.
 *
 * For email addresses (for example, `user@example.com`), you can only
 * enable DKIM signing if the corresponding domain (in this case,
 * `example.com`) has been set up to use Easy DKIM.
 *
 * You can enable DKIM signing for an identity at any time after you start the
 * verification process for the identity, even if the verification process isn't complete.
 *
 * You can execute this operation no more than once per second.
 *
 * For more information about Easy DKIM signing, go to the Amazon SES Developer
 * Guide.
 */
export const setIdentityDkimEnabled: API.OperationMethod<
  SetIdentityDkimEnabledRequest,
  SetIdentityDkimEnabledResponse,
  SetIdentityDkimEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIdentityDkimEnabledRequest,
  output: SetIdentityDkimEnabledResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetIdentityDkimEnabled",
}));

export type SetIdentityFeedbackForwardingEnabledError = CommonErrors;
/**
 * Given an identity (an email address or a domain), enables or disables whether Amazon SES
 * forwards bounce and complaint notifications as email. Feedback forwarding can only be
 * disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and
 * complaints.
 *
 * Feedback forwarding does not apply to delivery notifications. Delivery
 * notifications are only available through Amazon SNS.
 *
 * You can execute this operation no more than once per second.
 *
 * For more information about using notifications with Amazon SES, see the Amazon SES
 * Developer Guide.
 */
export const setIdentityFeedbackForwardingEnabled: API.OperationMethod<
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse,
  SetIdentityFeedbackForwardingEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIdentityFeedbackForwardingEnabledRequest,
  output: SetIdentityFeedbackForwardingEnabledResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetIdentityFeedbackForwardingEnabled",
}));

export type SetIdentityHeadersInNotificationsEnabledError = CommonErrors;
/**
 * Given an identity (an email address or a domain), sets whether Amazon SES includes the
 * original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified
 * type.
 *
 * You can execute this operation no more than once per second.
 *
 * For more information about using notifications with Amazon SES, see the Amazon SES
 * Developer Guide.
 */
export const setIdentityHeadersInNotificationsEnabled: API.OperationMethod<
  SetIdentityHeadersInNotificationsEnabledRequest,
  SetIdentityHeadersInNotificationsEnabledResponse,
  SetIdentityHeadersInNotificationsEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIdentityHeadersInNotificationsEnabledRequest,
  output: SetIdentityHeadersInNotificationsEnabledResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetIdentityHeadersInNotificationsEnabled",
}));

export type SetIdentityMailFromDomainError = CommonErrors;
/**
 * Enables or disables the custom MAIL FROM domain setup for a verified identity (an
 * email address or a domain).
 *
 * To send emails using the specified MAIL FROM domain, you must add an MX record to
 * your MAIL FROM domain's DNS settings. To ensure that your emails pass Sender Policy
 * Framework (SPF) checks, you must also add or update an SPF record. For more
 * information, see the Amazon SES Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const setIdentityMailFromDomain: API.OperationMethod<
  SetIdentityMailFromDomainRequest,
  SetIdentityMailFromDomainResponse,
  SetIdentityMailFromDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIdentityMailFromDomainRequest,
  output: SetIdentityMailFromDomainResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetIdentityMailFromDomain",
}));

export type SetIdentityNotificationTopicError = CommonErrors;
/**
 * Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use
 * this operation, you specify a verified identity, such as an email address or domain.
 * When you send an email that uses the chosen identity in the Source field, Amazon SES sends
 * notifications to the topic you specified. You can send bounce, complaint, or delivery
 * notifications (or any combination of the three) to the Amazon SNS topic that you
 * specify.
 *
 * You can execute this operation no more than once per second.
 *
 * For more information about feedback notification, see the Amazon SES
 * Developer Guide.
 */
export const setIdentityNotificationTopic: API.OperationMethod<
  SetIdentityNotificationTopicRequest,
  SetIdentityNotificationTopicResponse,
  SetIdentityNotificationTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetIdentityNotificationTopicRequest,
  output: SetIdentityNotificationTopicResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetIdentityNotificationTopic",
}));

export type SetReceiptRulePositionError =
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException
  | CommonErrors;
/**
 * Sets the position of the specified receipt rule in the receipt rule set.
 *
 * For information about managing receipt rules, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const setReceiptRulePosition: API.OperationMethod<
  SetReceiptRulePositionRequest,
  SetReceiptRulePositionResponse,
  SetReceiptRulePositionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetReceiptRulePositionRequest,
  output: SetReceiptRulePositionResponse,
  errors: [RuleDoesNotExistException, RuleSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SetReceiptRulePosition",
}));

export type TestRenderTemplateError =
  | InvalidRenderingParameterException
  | MissingRenderingAttributeException
  | TemplateDoesNotExistException
  | CommonErrors;
/**
 * Creates a preview of the MIME content of an email when provided with a template and a
 * set of replacement data.
 *
 * You can execute this operation no more than once per second.
 */
export const testRenderTemplate: API.OperationMethod<
  TestRenderTemplateRequest,
  TestRenderTemplateResponse,
  TestRenderTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TestRenderTemplateRequest,
  output: TestRenderTemplateResponse,
  errors: [
    InvalidRenderingParameterException,
    MissingRenderingAttributeException,
    TemplateDoesNotExistException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestRenderTemplate",
}));

export type UpdateAccountSendingEnabledError = CommonErrors;
/**
 * Enables or disables email sending across your entire Amazon SES account in the current
 * Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to
 * temporarily pause email sending across your Amazon SES account in a given Amazon Web Services Region when
 * reputation metrics (such as your bounce or complaint rates) reach certain
 * thresholds.
 *
 * You can execute this operation no more than once per second.
 */
export const updateAccountSendingEnabled: API.OperationMethod<
  UpdateAccountSendingEnabledRequest,
  UpdateAccountSendingEnabledResponse,
  UpdateAccountSendingEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAccountSendingEnabledRequest,
  output: UpdateAccountSendingEnabledResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAccountSendingEnabled",
}));

export type UpdateConfigurationSetEventDestinationError =
  | ConfigurationSetDoesNotExistException
  | EventDestinationDoesNotExistException
  | InvalidCloudWatchDestinationException
  | InvalidFirehoseDestinationException
  | InvalidSNSDestinationException
  | CommonErrors;
/**
 * Updates the event destination of a configuration set. Event destinations are
 * associated with configuration sets, which enable you to publish email sending events to
 * Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets,
 * see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer
 * Guide.
 *
 * When you create or update an event destination, you must provide one, and only
 * one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service
 * (Amazon SNS).
 *
 * You can execute this operation no more than once per second.
 */
export const updateConfigurationSetEventDestination: API.OperationMethod<
  UpdateConfigurationSetEventDestinationRequest,
  UpdateConfigurationSetEventDestinationResponse,
  UpdateConfigurationSetEventDestinationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigurationSetEventDestinationRequest,
  output: UpdateConfigurationSetEventDestinationResponse,
  errors: [
    ConfigurationSetDoesNotExistException,
    EventDestinationDoesNotExistException,
    InvalidCloudWatchDestinationException,
    InvalidFirehoseDestinationException,
    InvalidSNSDestinationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationSetEventDestination",
}));

export type UpdateConfigurationSetReputationMetricsEnabledError =
  | ConfigurationSetDoesNotExistException
  | CommonErrors;
/**
 * Enables or disables the publishing of reputation metrics for emails sent using a
 * specific configuration set in a given Amazon Web Services Region. Reputation metrics include bounce
 * and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can
 * create alarms when bounce or complaint rates exceed certain thresholds.
 *
 * You can execute this operation no more than once per second.
 */
export const updateConfigurationSetReputationMetricsEnabled: API.OperationMethod<
  UpdateConfigurationSetReputationMetricsEnabledRequest,
  UpdateConfigurationSetReputationMetricsEnabledResponse,
  UpdateConfigurationSetReputationMetricsEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigurationSetReputationMetricsEnabledRequest,
  output: UpdateConfigurationSetReputationMetricsEnabledResponse,
  errors: [ConfigurationSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationSetReputationMetricsEnabled",
}));

export type UpdateConfigurationSetSendingEnabledError =
  | ConfigurationSetDoesNotExistException
  | CommonErrors;
/**
 * Enables or disables email sending for messages sent using a specific configuration set
 * in a given Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms
 * to temporarily pause email sending for a configuration set when the reputation metrics
 * for that configuration set (such as your bounce on complaint rate) exceed certain
 * thresholds.
 *
 * You can execute this operation no more than once per second.
 */
export const updateConfigurationSetSendingEnabled: API.OperationMethod<
  UpdateConfigurationSetSendingEnabledRequest,
  UpdateConfigurationSetSendingEnabledResponse,
  UpdateConfigurationSetSendingEnabledError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigurationSetSendingEnabledRequest,
  output: UpdateConfigurationSetSendingEnabledResponse,
  errors: [ConfigurationSetDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationSetSendingEnabled",
}));

export type UpdateConfigurationSetTrackingOptionsError =
  | ConfigurationSetDoesNotExistException
  | InvalidTrackingOptionsException
  | TrackingOptionsDoesNotExistException
  | CommonErrors;
/**
 * Modifies an association between a configuration set and a custom domain for open and
 * click event tracking.
 *
 * By default, images and links used for tracking open and click events are hosted on
 * domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 * events. For information about using custom domains, see the Amazon SES Developer Guide.
 */
export const updateConfigurationSetTrackingOptions: API.OperationMethod<
  UpdateConfigurationSetTrackingOptionsRequest,
  UpdateConfigurationSetTrackingOptionsResponse,
  UpdateConfigurationSetTrackingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigurationSetTrackingOptionsRequest,
  output: UpdateConfigurationSetTrackingOptionsResponse,
  errors: [
    ConfigurationSetDoesNotExistException,
    InvalidTrackingOptionsException,
    TrackingOptionsDoesNotExistException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationSetTrackingOptions",
}));

export type UpdateCustomVerificationEmailTemplateError =
  | CustomVerificationEmailInvalidContentException
  | CustomVerificationEmailTemplateDoesNotExistException
  | FromEmailAddressNotVerifiedException
  | CommonErrors;
/**
 * Updates an existing custom verification email template.
 *
 * For more information about custom verification email templates, see Using
 * Custom Verification Email Templates in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const updateCustomVerificationEmailTemplate: API.OperationMethod<
  UpdateCustomVerificationEmailTemplateRequest,
  UpdateCustomVerificationEmailTemplateResponse,
  UpdateCustomVerificationEmailTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCustomVerificationEmailTemplateRequest,
  output: UpdateCustomVerificationEmailTemplateResponse,
  errors: [
    CustomVerificationEmailInvalidContentException,
    CustomVerificationEmailTemplateDoesNotExistException,
    FromEmailAddressNotVerifiedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCustomVerificationEmailTemplate",
}));

export type UpdateReceiptRuleError =
  | InvalidLambdaFunctionException
  | InvalidS3ConfigurationException
  | InvalidSnsTopicException
  | LimitExceededException
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException
  | InvalidParameterValue
  | IdentityNotVerified
  | ReceiptRuleRoleNotAssumable
  | CommonErrors;
/**
 * Updates a receipt rule.
 *
 * For information about managing receipt rules, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const updateReceiptRule: API.OperationMethod<
  UpdateReceiptRuleRequest,
  UpdateReceiptRuleResponse,
  UpdateReceiptRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateReceiptRuleRequest,
  output: UpdateReceiptRuleResponse,
  errors: [
    InvalidLambdaFunctionException,
    InvalidS3ConfigurationException,
    InvalidSnsTopicException,
    LimitExceededException,
    RuleDoesNotExistException,
    RuleSetDoesNotExistException,
    InvalidParameterValue,
    IdentityNotVerified,
    ReceiptRuleRoleNotAssumable,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateReceiptRule",
}));

export type UpdateTemplateError =
  | InvalidTemplateException
  | TemplateDoesNotExistException
  | CommonErrors;
/**
 * Updates an email template. Email templates enable you to send personalized email to
 * one or more destinations in a single operation. For more information, see the Amazon SES
 * Developer Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const updateTemplate: API.OperationMethod<
  UpdateTemplateRequest,
  UpdateTemplateResponse,
  UpdateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTemplateRequest,
  output: UpdateTemplateResponse,
  errors: [InvalidTemplateException, TemplateDoesNotExistException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTemplate",
}));

export type VerifyDomainDkimError = CommonErrors;
/**
 * Returns a set of DKIM tokens for a domain identity.
 *
 * When you execute the `VerifyDomainDkim` operation, the domain that you
 * specify is added to the list of identities that are associated with your account.
 * This is true even if you haven't already associated the domain with your account by
 * using the `VerifyDomainIdentity` operation. However, you can't send email
 * from the domain until you either successfully verify
 * it or you successfully set up DKIM for
 * it.
 *
 * You use the tokens that are generated by this operation to create CNAME records. When
 * Amazon SES detects that you've added these records to the DNS configuration for a domain, you
 * can start sending email from that domain. You can start sending email even if you
 * haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS
 * configuration for your domain. All email that you send from the domain is authenticated
 * using DKIM.
 *
 * To create the CNAME records for DKIM authentication, use the following values:
 *
 * - **Name**:
 * *token*._domainkey.*example.com*
 *
 * - **Type**: CNAME
 *
 * - **Value**:
 * *token*.dkim.amazonses.com
 *
 * In the preceding example, replace *token* with one of the tokens
 * that are generated when you execute this operation. Replace
 * *example.com* with your domain. Repeat this process for each
 * token that's generated by this operation.
 *
 * You can execute this operation no more than once per second.
 */
export const verifyDomainDkim: API.OperationMethod<
  VerifyDomainDkimRequest,
  VerifyDomainDkimResponse,
  VerifyDomainDkimError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyDomainDkimRequest,
  output: VerifyDomainDkimResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyDomainDkim",
}));

export type VerifyDomainIdentityError = CommonErrors;
/**
 * Adds a domain to the list of identities for your Amazon SES account in the current
 * Amazon Web Services Region and attempts to verify it. For more information about verifying domains,
 * see Verifying Email Addresses and Domains in the Amazon SES Developer
 * Guide.
 *
 * You can execute this operation no more than once per second.
 */
export const verifyDomainIdentity: API.OperationMethod<
  VerifyDomainIdentityRequest,
  VerifyDomainIdentityResponse,
  VerifyDomainIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyDomainIdentityRequest,
  output: VerifyDomainIdentityResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyDomainIdentity",
}));

export type VerifyEmailAddressError = CommonErrors;
/**
 * Deprecated. Use the `VerifyEmailIdentity` operation to verify a new email
 * address.
 */
export const verifyEmailAddress: API.OperationMethod<
  VerifyEmailAddressRequest,
  VerifyEmailAddressResponse,
  VerifyEmailAddressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyEmailAddressRequest,
  output: VerifyEmailAddressResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyEmailAddress",
}));

export type VerifyEmailIdentityError = CommonErrors;
/**
 * Adds an email address to the list of identities for your Amazon SES account in the current
 * Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a
 * verification email is sent to the specified address.
 *
 * You can execute this operation no more than once per second.
 */
export const verifyEmailIdentity: API.OperationMethod<
  VerifyEmailIdentityRequest,
  VerifyEmailIdentityResponse,
  VerifyEmailIdentityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: VerifyEmailIdentityRequest,
  output: VerifyEmailIdentityResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "VerifyEmailIdentity",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, OriginalRuleSetName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CloneReceiptRuleSetRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CloneReceiptRuleSetResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "ConfigurationSet",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ConfigurationSet: ConfigurationSet }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConfigurationSetRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateConfigurationSetResponse",
      });
    case 5:
      return S.Array(EventType);
    case 6:
      return S.suspend(() =>
        S.Struct({ IAMRoleARN: S.String, DeliveryStreamARN: S.String }),
      ).annotate({
        identifier: "KinesisFirehoseDestination",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DimensionName: S.String,
          DimensionValueSource: DimensionValueSource,
          DefaultDimensionValue: S.String,
        }),
      ).annotate({
        identifier: "CloudWatchDimensionConfiguration",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CloudWatchDimensionConfiguration);
    case 1:
      return S.suspend(() =>
        S.Struct({ DimensionConfigurations: CloudWatchDimensionConfigurations }),
      ).annotate({ identifier: "CloudWatchDestination" });
    case 2:
      return S.suspend(() => S.Struct({ TopicARN: S.String })).annotate({
        identifier: "SNSDestination",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Enabled: S.optional(S.Boolean),
          MatchingEventTypes: EventTypes,
          KinesisFirehoseDestination: S.optional(KinesisFirehoseDestination),
          CloudWatchDestination: S.optional(CloudWatchDestination),
          SNSDestination: S.optional(SNSDestination),
        }),
      ).annotate({ identifier: "EventDestination" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, EventDestination: EventDestination }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConfigurationSetEventDestinationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateConfigurationSetEventDestinationResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ CustomRedirectDomain: S.optional(S.String) })).annotate({
        identifier: "TrackingOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, TrackingOptions: TrackingOptions }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateConfigurationSetTrackingOptionsRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateConfigurationSetTrackingOptionsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String,
          FromEmailAddress: S.String,
          TemplateSubject: S.String,
          TemplateContent: S.String,
          SuccessRedirectionURL: S.String,
          FailureRedirectionURL: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCustomVerificationEmailTemplateRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateCustomVerificationEmailTemplateResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ Policy: ReceiptFilterPolicy, Cidr: S.String })).annotate({
        identifier: "ReceiptIpFilter",
      });
    case 4:
      return S.suspend(() => S.Struct({ Name: S.String, IpFilter: ReceiptIpFilter })).annotate({
        identifier: "ReceiptFilter",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Filter: ReceiptFilter }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateReceiptFilterRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateReceiptFilterResponse",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.optional(S.String),
          BucketName: S.String,
          ObjectKeyPrefix: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Action" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.optional(S.String),
          SmtpReplyCode: S.String,
          StatusCode: S.optional(S.String),
          Message: S.String,
          Sender: S.String,
        }),
      ).annotate({ identifier: "BounceAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({ TopicArn: S.optional(S.String), OrganizationArn: S.String }),
      ).annotate({ identifier: "WorkmailAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TopicArn: S.optional(S.String),
          FunctionArn: S.String,
          InvocationType: S.optional(InvocationType),
        }),
      ).annotate({ identifier: "LambdaAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Scope: StopScope, TopicArn: S.optional(S.String) }),
      ).annotate({ identifier: "StopAction" });
    case 5:
      return S.suspend(() => S.Struct({ HeaderName: S.String, HeaderValue: S.String })).annotate({
        identifier: "AddHeaderAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ TopicArn: S.String, Encoding: S.optional(SNSActionEncoding) }),
      ).annotate({ identifier: "SNSAction" });
    case 7:
      return S.suspend(() => S.Struct({ InstanceARN: S.String, IAMRoleARN: S.String })).annotate({
        identifier: "ConnectAction",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          S3Action: S.optional(S3Action),
          BounceAction: S.optional(BounceAction),
          WorkmailAction: S.optional(WorkmailAction),
          LambdaAction: S.optional(LambdaAction),
          StopAction: S.optional(StopAction),
          AddHeaderAction: S.optional(AddHeaderAction),
          SNSAction: S.optional(SNSAction),
          ConnectAction: S.optional(ConnectAction),
        }),
      ).annotate({ identifier: "ReceiptAction" });
    case 1:
      return S.Array(ReceiptAction);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Enabled: S.optional(S.Boolean),
          TlsPolicy: S.optional(TlsPolicy),
          Recipients: S.optional(RecipientsList),
          Actions: S.optional(ReceiptActionsList),
          ScanEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ReceiptRule" });
    case 3:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, After: S.optional(S.String), Rule: ReceiptRule }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateReceiptRuleRequest" });
    case 4:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateReceiptRuleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateReceiptRuleSetRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateReceiptRuleSetResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String,
          SubjectPart: S.optional(S.String),
          TextPart: S.optional(S.String),
          HtmlPart: S.optional(S.String),
        }),
      ).annotate({ identifier: "Template" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Template: Template }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTemplateRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConfigurationSetRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteConfigurationSetResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, EventDestinationName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConfigurationSetEventDestinationRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteConfigurationSetEventDestinationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteConfigurationSetTrackingOptionsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteConfigurationSetTrackingOptionsResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteCustomVerificationEmailTemplateRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteCustomVerificationEmailTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Identity: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIdentityRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteIdentityResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Identity: S.String, PolicyName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteIdentityPolicyRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteIdentityPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ FilterName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReceiptFilterRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteReceiptFilterResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, RuleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteReceiptRuleRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteReceiptRuleResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteReceiptRuleSetRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteReceiptRuleSetResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTemplateRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ EmailAddress: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteVerifiedEmailAddressRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteVerifiedEmailAddressResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeActiveReceiptRuleSetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ReceiptRuleSetMetadata" });
    case 2:
      return S.Array(ReceiptRule);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Metadata: S.optional(ReceiptRuleSetMetadata),
          Rules: S.optional(ReceiptRulesList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeActiveReceiptRuleSetResponse",
      });
    case 4:
      return S.Array(ConfigurationSetAttribute);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          ConfigurationSetAttributeNames: S.optional(ConfigurationSetAttributeList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeConfigurationSetRequest",
      });
    case 6:
      return S.Array(EventDestination);
    case 7:
      return S.suspend(() => S.Struct({ TlsPolicy: S.optional(TlsPolicy) })).annotate({
        identifier: "DeliveryOptions",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SendingEnabled: S.optional(S.Boolean),
          ReputationMetricsEnabled: S.optional(S.Boolean),
          LastFreshStart: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ReputationOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSet: S.optional(ConfigurationSet),
          EventDestinations: S.optional(EventDestinations),
          TrackingOptions: S.optional(TrackingOptions),
          DeliveryOptions: S.optional(DeliveryOptions),
          ReputationOptions: S.optional(ReputationOptions),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeConfigurationSetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, RuleName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeReceiptRuleRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ Rule: S.optional(ReceiptRule) }).pipe(ns)).annotate({
        identifier: "DescribeReceiptRuleResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeReceiptRuleSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Metadata: S.optional(ReceiptRuleSetMetadata),
          Rules: S.optional(ReceiptRulesList),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReceiptRuleSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccountSendingEnabledRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) }).pipe(ns)).annotate({
        identifier: "GetAccountSendingEnabledResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetCustomVerificationEmailTemplateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          FromEmailAddress: S.optional(S.String),
          TemplateSubject: S.optional(S.String),
          TemplateContent: S.optional(S.String),
          SuccessRedirectionURL: S.optional(S.String),
          FailureRedirectionURL: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetCustomVerificationEmailTemplateResponse",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ Identities: IdentityList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityDkimAttributesRequest",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DkimEnabled: S.Boolean,
          DkimVerificationStatus: VerificationStatus,
          DkimTokens: S.optional(VerificationTokenList),
        }),
      ).annotate({ identifier: "IdentityDkimAttributes" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ IdentityDkimAttributes.pipe(S.optional));
    case 7:
      return S.suspend(() => S.Struct({ DkimAttributes: DkimAttributes }).pipe(ns)).annotate({
        identifier: "GetIdentityDkimAttributesResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identities: IdentityList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityMailFromDomainAttributesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MailFromDomain: S.String,
          MailFromDomainStatus: CustomMailFromStatus,
          BehaviorOnMXFailure: BehaviorOnMXFailure,
        }),
      ).annotate({
        identifier: "IdentityMailFromDomainAttributes",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ IdentityMailFromDomainAttributes.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ MailFromDomainAttributes: MailFromDomainAttributes }).pipe(ns),
      ).annotate({
        identifier: "GetIdentityMailFromDomainAttributesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Identities: IdentityList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityNotificationAttributesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BounceTopic: S.String,
          ComplaintTopic: S.String,
          DeliveryTopic: S.String,
          ForwardingEnabled: S.Boolean,
          HeadersInBounceNotificationsEnabled: S.optional(S.Boolean),
          HeadersInComplaintNotificationsEnabled: S.optional(S.Boolean),
          HeadersInDeliveryNotificationsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "IdentityNotificationAttributes",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ IdentityNotificationAttributes.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ NotificationAttributes: NotificationAttributes }).pipe(ns),
      ).annotate({
        identifier: "GetIdentityNotificationAttributesResponse",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({ Identity: S.String, PolicyNames: PolicyNameList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityPoliciesRequest",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ Policies: PolicyMap }).pipe(ns)).annotate({
        identifier: "GetIdentityPoliciesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Identities: IdentityList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityVerificationAttributesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          VerificationStatus: VerificationStatus,
          VerificationToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IdentityVerificationAttributes",
      });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ IdentityVerificationAttributes.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ VerificationAttributes: VerificationAttributes }).pipe(ns),
      ).annotate({
        identifier: "GetIdentityVerificationAttributesResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSendQuotaRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Max24HourSend: S.optional(S.Number),
          MaxSendRate: S.optional(S.Number),
          SentLast24Hours: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "GetSendQuotaResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSendStatisticsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          DeliveryAttempts: S.optional(S.Number),
          Bounces: S.optional(S.Number),
          Complaints: S.optional(S.Number),
          Rejects: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SendDataPoint" });
    case 4:
      return S.Array(SendDataPoint);
    case 5:
      return S.suspend(() =>
        S.Struct({ SendDataPoints: S.optional(SendDataPointList) }).pipe(ns),
      ).annotate({
        identifier: "GetSendStatisticsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTemplateRequest" });
    case 7:
      return S.suspend(() => S.Struct({ Template: S.optional(Template) }).pipe(ns)).annotate({
        identifier: "GetTemplateResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxItems: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListConfigurationSetsRequest",
      });
    case 1:
      return S.Array(ConfigurationSet);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSets: S.optional(ConfigurationSets),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListConfigurationSetsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListCustomVerificationEmailTemplatesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.optional(S.String),
          FromEmailAddress: S.optional(S.String),
          TemplateSubject: S.optional(S.String),
          SuccessRedirectionURL: S.optional(S.String),
          FailureRedirectionURL: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CustomVerificationEmailTemplate",
      });
    case 5:
      return S.Array(CustomVerificationEmailTemplate);
    case 6:
      return S.suspend(() =>
        S.Struct({
          CustomVerificationEmailTemplates: S.optional(CustomVerificationEmailTemplates),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListCustomVerificationEmailTemplatesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IdentityType: S.optional(IdentityType),
          NextToken: S.optional(S.String),
          MaxItems: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIdentitiesRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identities: IdentityList, NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListIdentitiesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Identity: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListIdentityPoliciesRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ PolicyNames: PolicyNameList }).pipe(ns)).annotate({
        identifier: "ListIdentityPoliciesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListReceiptFiltersRequest",
      });
    case 4:
      return S.Array(ReceiptFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({ Filters: S.optional(ReceiptFilterList) }).pipe(ns),
      ).annotate({
        identifier: "ListReceiptFiltersResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListReceiptRuleSetsRequest",
      });
    case 7:
      return S.Array(ReceiptRuleSetMetadata);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleSets: S.optional(ReceiptRuleSetsLists),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListReceiptRuleSetsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxItems: S.optional(S.Number) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTemplatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          CreatedTimestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "TemplateMetadata" });
    case 3:
      return S.Array(TemplateMetadata);
    case 4:
      return S.suspend(() =>
        S.Struct({
          TemplatesMetadata: S.optional(TemplateMetadataList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListTemplatesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVerifiedEmailAddressesRequest",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({ VerifiedEmailAddresses: S.optional(AddressList) }).pipe(ns),
      ).annotate({
        identifier: "ListVerifiedEmailAddressesResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConfigurationSetName: S.String,
          DeliveryOptions: S.optional(DeliveryOptions),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutConfigurationSetDeliveryOptionsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutConfigurationSetDeliveryOptionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Identity: S.String, PolicyName: S.String, Policy: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutIdentityPolicyRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutIdentityPolicyResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, RuleNames: ReceiptRuleNamesList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ReorderReceiptRuleSetRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "ReorderReceiptRuleSetResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "ExtensionField",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ExtensionField);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ReportingMta: S.String,
          ArrivalDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExtensionFields: S.optional(ExtensionFieldList),
        }),
      ).annotate({ identifier: "MessageDsn" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          FinalRecipient: S.optional(S.String),
          Action: DsnAction,
          RemoteMta: S.optional(S.String),
          Status: S.String,
          DiagnosticCode: S.optional(S.String),
          LastAttemptDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExtensionFields: S.optional(ExtensionFieldList),
        }),
      ).annotate({ identifier: "RecipientDsnFields" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Recipient: S.String,
          RecipientArn: S.optional(S.String),
          BounceType: S.optional(BounceType),
          RecipientDsnFields: S.optional(RecipientDsnFields),
        }),
      ).annotate({ identifier: "BouncedRecipientInfo" });
    case 4:
      return S.Array(BouncedRecipientInfo);
    case 5:
      return S.suspend(() =>
        S.Struct({
          OriginalMessageId: S.String,
          BounceSender: S.String,
          Explanation: S.optional(S.String),
          MessageDsn: S.optional(MessageDsn),
          BouncedRecipientInfoList: BouncedRecipientInfoList,
          BounceSenderArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendBounceRequest" });
    case 6:
      return S.suspend(() => S.Struct({ MessageId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "SendBounceResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.String })).annotate({
        identifier: "MessageTag",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MessageTag);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ToAddresses: S.optional(AddressList),
          CcAddresses: S.optional(AddressList),
          BccAddresses: S.optional(AddressList),
        }),
      ).annotate({ identifier: "Destination" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Destination: Destination,
          ReplacementTags: S.optional(MessageTagList),
          ReplacementTemplateData: S.optional(S.String),
        }),
      ).annotate({ identifier: "BulkEmailDestination" });
    case 3:
      return S.Array(BulkEmailDestination);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Source: S.String,
          SourceArn: S.optional(S.String),
          ReplyToAddresses: S.optional(AddressList),
          ReturnPath: S.optional(S.String),
          ReturnPathArn: S.optional(S.String),
          ConfigurationSetName: S.optional(S.String),
          DefaultTags: S.optional(MessageTagList),
          Template: S.String,
          TemplateArn: S.optional(S.String),
          DefaultTemplateData: S.String,
          Destinations: BulkEmailDestinationList,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendBulkTemplatedEmailRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(BulkEmailStatus),
          Error: S.optional(S.String),
          MessageId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BulkEmailDestinationStatus",
      });
    case 6:
      return S.Array(BulkEmailDestinationStatus);
    case 7:
      return S.suspend(() =>
        S.Struct({ Status: BulkEmailDestinationStatusList }).pipe(ns),
      ).annotate({
        identifier: "SendBulkTemplatedEmailResponse",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EmailAddress: S.String,
          TemplateName: S.String,
          ConfigurationSetName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendCustomVerificationEmailRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ MessageId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "SendCustomVerificationEmailResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Data: S.String, Charset: S.optional(S.String) })).annotate({
        identifier: "Content",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(Content), Html: S.optional(Content) }),
      ).annotate({ identifier: "Body" });
    case 4:
      return S.suspend(() => S.Struct({ Subject: Content, Body: Body })).annotate({
        identifier: "Message",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Source: S.String,
          Destination: Destination,
          Message: Message,
          ReplyToAddresses: S.optional(AddressList),
          ReturnPath: S.optional(S.String),
          SourceArn: S.optional(S.String),
          ReturnPathArn: S.optional(S.String),
          Tags: S.optional(MessageTagList),
          ConfigurationSetName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendEmailRequest" });
    case 6:
      return S.suspend(() => S.Struct({ MessageId: S.String }).pipe(ns)).annotate({
        identifier: "SendEmailResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ Data: T.Blob })).annotate({
        identifier: "RawMessage",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Source: S.optional(S.String),
          Destinations: S.optional(AddressList),
          RawMessage: RawMessage,
          FromArn: S.optional(S.String),
          SourceArn: S.optional(S.String),
          ReturnPathArn: S.optional(S.String),
          Tags: S.optional(MessageTagList),
          ConfigurationSetName: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SendRawEmailRequest" });
    case 1:
      return S.suspend(() => S.Struct({ MessageId: S.String }).pipe(ns)).annotate({
        identifier: "SendRawEmailResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Source: S.String,
          Destination: Destination,
          ReplyToAddresses: S.optional(AddressList),
          ReturnPath: S.optional(S.String),
          SourceArn: S.optional(S.String),
          ReturnPathArn: S.optional(S.String),
          Tags: S.optional(MessageTagList),
          ConfigurationSetName: S.optional(S.String),
          Template: S.String,
          TemplateArn: S.optional(S.String),
          TemplateData: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SendTemplatedEmailRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ MessageId: S.String }).pipe(ns)).annotate({
        identifier: "SendTemplatedEmailResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetActiveReceiptRuleSetRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetActiveReceiptRuleSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identity: S.String, DkimEnabled: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetIdentityDkimEnabledRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetIdentityDkimEnabledResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Identity: S.String, ForwardingEnabled: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetIdentityFeedbackForwardingEnabledRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetIdentityFeedbackForwardingEnabledResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Identity: S.String,
          NotificationType: NotificationType,
          Enabled: S.Boolean,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetIdentityHeadersInNotificationsEnabledRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetIdentityHeadersInNotificationsEnabledResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identity: S.String,
          MailFromDomain: S.optional(S.String),
          BehaviorOnMXFailure: S.optional(BehaviorOnMXFailure),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetIdentityMailFromDomainRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetIdentityMailFromDomainResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Identity: S.String,
          NotificationType: NotificationType,
          SnsTopic: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "SetIdentityNotificationTopicRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetIdentityNotificationTopicResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, RuleName: S.String, After: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "SetReceiptRulePositionRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "SetReceiptRulePositionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ TemplateName: S.String, TemplateData: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "TestRenderTemplateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RenderedTemplate: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "TestRenderTemplateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateAccountSendingEnabledRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateAccountSendingEnabledResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, EventDestination: EventDestination }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateConfigurationSetEventDestinationRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateConfigurationSetEventDestinationResponse",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, Enabled: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateConfigurationSetReputationMetricsEnabledRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateConfigurationSetReputationMetricsEnabledResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, Enabled: S.Boolean }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateConfigurationSetSendingEnabledRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateConfigurationSetSendingEnabledResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConfigurationSetName: S.String, TrackingOptions: TrackingOptions }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateConfigurationSetTrackingOptionsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateConfigurationSetTrackingOptionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TemplateName: S.String,
          FromEmailAddress: S.optional(S.String),
          TemplateSubject: S.optional(S.String),
          TemplateContent: S.optional(S.String),
          SuccessRedirectionURL: S.optional(S.String),
          FailureRedirectionURL: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateCustomVerificationEmailTemplateRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateCustomVerificationEmailTemplateResponse",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RuleSetName: S.String, Rule: ReceiptRule }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateReceiptRuleRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateReceiptRuleResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Template: Template }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateTemplateRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "UpdateTemplateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Domain: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "VerifyDomainDkimRequest" });
    case 5:
      return S.suspend(() => S.Struct({ DkimTokens: VerificationTokenList }).pipe(ns)).annotate({
        identifier: "VerifyDomainDkimResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Domain: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "VerifyDomainIdentityRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ VerificationToken: S.String }).pipe(ns)).annotate({
        identifier: "VerifyDomainIdentityResponse",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EmailAddress: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "VerifyEmailAddressRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "VerifyEmailAddressResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ EmailAddress: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "VerifyEmailIdentityRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "VerifyEmailIdentityResponse",
      });
  }
}
